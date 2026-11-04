import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  CATEGORIES,
  DEFAULT_FEATURED,
  ITEMS,
  UNIT_LABEL,
  type CategoryId,
  type UnitId,
  type WorkItem,
} from "@/data/catalog";

export interface CartLine {
  itemId: string;
  qty: number;
}

export interface CustomItem {
  id: string;
  categoryId: CategoryId;
  title: string;
  unit: UnitId;
  price: number;
  note?: string;
}

export interface SavedEstimate {
  id: string;
  createdAt: number;
  customerName: string;
  projectName: string;
  notes: string;
  lines: {
    itemId: string;
    title: string;
    unit: string;
    qty: number;
    unitPrice: number;
  }[];
  coefficient: number;
  discountPercent: number;
  total: number;
}

interface CalcState {
  priceOverrides: Record<string, number>;
  customItems: CustomItem[];
  featuredIds: CategoryId[];
  coefficient: number;
  discountPercent: number;
  customerName: string;
  projectName: string;
  notes: string;
  cart: CartLine[];
  estimates: SavedEstimate[];
  setQty: (itemId: string, qty: number) => void;
  addQty: (itemId: string, delta: number) => void;
  clearCart: () => void;
  setOverride: (itemId: string, price: number | null) => void;
  addCustomItem: (item: Omit<CustomItem, "id">) => string;
  removeCustomItem: (id: string) => void;
  setFeatured: (ids: CategoryId[]) => void;
  toggleFeatured: (id: CategoryId) => void;
  moveFeatured: (id: CategoryId, dir: -1 | 1) => void;
  setCoefficient: (n: number) => void;
  setDiscount: (n: number) => void;
  setCustomer: (name: string) => void;
  setProject: (name: string) => void;
  setNotes: (notes: string) => void;
  saveEstimate: () => SavedEstimate | null;
  deleteEstimate: (id: string) => void;
  loadEstimate: (id: string) => void;
  resetPrices: () => void;
}

export const useCalc = create<CalcState>()(
  persist(
    (set, get) => ({
      priceOverrides: {},
      customItems: [],
      featuredIds: [...DEFAULT_FEATURED],
      coefficient: 1,
      discountPercent: 0,
      customerName: "",
      projectName: "",
      notes: "",
      cart: [],
      estimates: [],
      setQty: (itemId, qty) =>
        set((s) => {
          const next = Math.max(0, qty);
          const rest = s.cart.filter((l) => l.itemId !== itemId);
          return { cart: next === 0 ? rest : [...rest, { itemId, qty: next }] };
        }),
      addQty: (itemId, delta) => {
        const current = get().cart.find((l) => l.itemId === itemId)?.qty ?? 0;
        get().setQty(itemId, current + delta);
      },
      clearCart: () =>
        set({
          cart: [],
          customerName: "",
          projectName: "",
          notes: "",
          discountPercent: 0,
        }),
      setOverride: (itemId, price) =>
        set((s) => {
          const next = { ...s.priceOverrides };
          if (price === null || !Number.isFinite(price)) delete next[itemId];
          else next[itemId] = Math.max(0, Math.round(price));
          return { priceOverrides: next };
        }),
      addCustomItem: (item) => {
        const id = `custom-${Date.now()}`;
        set((s) => ({ customItems: [...s.customItems, { ...item, id }] }));
        return id;
      },
      removeCustomItem: (id) =>
        set((s) => ({
          customItems: s.customItems.filter((i) => i.id !== id),
          cart: s.cart.filter((l) => l.itemId !== id),
        })),
      setFeatured: (ids) => set({ featuredIds: ids }),
      toggleFeatured: (id) =>
        set((s) => {
          if (s.featuredIds.includes(id)) {
            return { featuredIds: s.featuredIds.filter((x) => x !== id) };
          }
          return { featuredIds: [...s.featuredIds, id] };
        }),
      moveFeatured: (id, dir) =>
        set((s) => {
          const ids = [...s.featuredIds];
          const i = ids.indexOf(id);
          const j = i + dir;
          if (i < 0 || j < 0 || j >= ids.length) return s;
          const tmp = ids[i]!;
          ids[i] = ids[j]!;
          ids[j] = tmp;
          return { featuredIds: ids };
        }),
      setCoefficient: (n) =>
        set({ coefficient: Math.min(5, Math.max(0.1, Number.isFinite(n) ? n : 1)) }),
      setDiscount: (n) =>
        set({ discountPercent: Math.min(100, Math.max(0, Number.isFinite(n) ? n : 0)) }),
      setCustomer: (customerName) => set({ customerName }),
      setProject: (projectName) => set({ projectName }),
      setNotes: (notes) => set({ notes }),
      saveEstimate: () => {
        const snap = getInvoiceSnapshot();
        if (snap.lines.length === 0) return null;
        const saved: SavedEstimate = {
          id: `est-${Date.now()}`,
          createdAt: Date.now(),
          customerName: snap.customerName,
          projectName: snap.projectName,
          notes: snap.notes,
          lines: snap.lines,
          coefficient: snap.coefficient,
          discountPercent: snap.discountPercent,
          total: snap.total,
        };
        set((s) => ({ estimates: [saved, ...s.estimates].slice(0, 40) }));
        return saved;
      },
      deleteEstimate: (id) =>
        set((s) => ({ estimates: s.estimates.filter((e) => e.id !== id) })),
      loadEstimate: (id) => {
        const est = get().estimates.find((e) => e.id === id);
        if (!est) return;
        set({
          cart: est.lines.map((l) => ({ itemId: l.itemId, qty: l.qty })),
          customerName: est.customerName,
          projectName: est.projectName,
          notes: est.notes,
          coefficient: est.coefficient,
          discountPercent: est.discountPercent,
        });
      },
      resetPrices: () => set({ priceOverrides: {} }),
    }),
    { name: "acdc-calc-v1" },
  ),
);

export function resolveItem(id: string): (WorkItem & { custom?: boolean }) | undefined {
  const custom = useCalc.getState().customItems.find((i) => i.id === id);
  if (custom) return { ...custom, custom: true };
  return ITEMS.find((i) => i.id === id);
}

export function resolvePrice(id: string): number {
  const override = useCalc.getState().priceOverrides[id];
  if (typeof override === "number") return override;
  return resolveItem(id)?.price ?? 0;
}

export function allItems(): WorkItem[] {
  const custom = useCalc.getState().customItems;
  return [...ITEMS, ...custom];
}

export interface InvoiceSnapshot {
  customerName: string;
  projectName: string;
  notes: string;
  coefficient: number;
  discountPercent: number;
  lines: {
    itemId: string;
    title: string;
    unit: string;
    qty: number;
    unitPrice: number;
    amount: number;
  }[];
  subtotal: number;
  afterCoef: number;
  discountAmount: number;
  total: number;
  itemCount: number;
}

export function getInvoiceSnapshot(): InvoiceSnapshot {
  const s = useCalc.getState();
  const lines = s.cart
    .map((line) => {
      const item = resolveItem(line.itemId);
      if (!item || line.qty <= 0) return null;
      const unitPrice = resolvePrice(line.itemId);
      return {
        itemId: line.itemId,
        title: item.title,
        unit: UNIT_LABEL[item.unit],
        qty: line.qty,
        unitPrice,
        amount: unitPrice * line.qty,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const subtotal = lines.reduce((sum, l) => sum + l.amount, 0);
  const afterCoef = subtotal * s.coefficient;
  const discountAmount = afterCoef * (s.discountPercent / 100);
  const total = Math.max(0, afterCoef - discountAmount);
  const itemCount = lines.reduce((sum, l) => sum + l.qty, 0);

  return {
    customerName: s.customerName,
    projectName: s.projectName,
    notes: s.notes,
    coefficient: s.coefficient,
    discountPercent: s.discountPercent,
    lines,
    subtotal,
    afterCoef,
    discountAmount,
    total,
    itemCount,
  };
}

export function useInvoice(): InvoiceSnapshot {
  const cart = useCalc((s) => s.cart);
  const coefficient = useCalc((s) => s.coefficient);
  const discountPercent = useCalc((s) => s.discountPercent);
  const customerName = useCalc((s) => s.customerName);
  const projectName = useCalc((s) => s.projectName);
  const notes = useCalc((s) => s.notes);
  const priceOverrides = useCalc((s) => s.priceOverrides);
  const customItems = useCalc((s) => s.customItems);
  void cart;
  void coefficient;
  void discountPercent;
  void customerName;
  void projectName;
  void notes;
  void priceOverrides;
  void customItems;
  return getInvoiceSnapshot();
}

export function featuredCategories() {
  const ids = useCalc.getState().featuredIds;
  const map = new Map(CATEGORIES.map((c) => [c.id, c]));
  return ids.map((id) => map.get(id)).filter((c): c is NonNullable<typeof c> => !!c);
}
