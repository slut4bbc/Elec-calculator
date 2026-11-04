import { UNIT_LABEL, type WorkItem } from "@/data/catalog";
import { formatToman } from "@/lib/format";
import { useCalc, resolvePrice } from "@/lib/store";
import { QtyStepper } from "@/components/qty-stepper";

export function ItemRow({ item }: { item: WorkItem }) {
  const qty = useCalc((s) => s.cart.find((l) => l.itemId === item.id)?.qty ?? 0);
  const setQty = useCalc((s) => s.setQty);
  const override = useCalc((s) => s.priceOverrides[item.id]);
  const price = override ?? resolvePrice(item.id);
  const amount = price * qty;

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium leading-snug text-fg">{item.title}</p>
          {item.note ? (
            <p className="mt-1 text-xs text-muted">{item.note}</p>
          ) : null}
          <p className="mt-2 text-xs text-muted">
            {formatToman(price)}
            <span className="text-subtle"> / {UNIT_LABEL[item.unit]}</span>
          </p>
        </div>
        <QtyStepper value={qty} onChange={(n) => setQty(item.id, n)} />
      </div>
      {qty > 0 ? (
        <div className="flex items-center justify-between border-t border-border pt-3 text-xs">
          <span className="text-muted">جمع این آیتم</span>
          <span className="font-medium tabular-nums text-primary">{formatToman(amount)}</span>
        </div>
      ) : null}
    </div>
  );
}
