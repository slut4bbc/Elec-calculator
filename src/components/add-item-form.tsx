import { useState, type FormEvent } from "react";
import { CATEGORIES, UNIT_LABEL, type CategoryId, type UnitId } from "@/data/catalog";
import { parseFaNumber } from "@/lib/format";
import { useCalc } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UNIT_IDS = Object.keys(UNIT_LABEL) as UnitId[];

export function AddItemForm({
  defaultCategory,
  onDone,
}: {
  defaultCategory: CategoryId;
  onDone?: () => void;
}) {
  const addCustomItem = useCalc((s) => s.addCustomItem);
  const addQty = useCalc((s) => s.addQty);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState<UnitId>("piece");
  const [categoryId, setCategoryId] = useState<CategoryId>(defaultCategory);
  const [error, setError] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const p = parseFaNumber(price);
    if (!title.trim()) {
      setError("عنوان را بنویسید");
      return;
    }
    if (!Number.isFinite(p) || p <= 0) {
      setError("قیمت معتبر نیست");
      return;
    }
    const id = addCustomItem({
      categoryId,
      title: title.trim(),
      unit,
      price: Math.round(p),
    });
    addQty(id, 1);
    setTitle("");
    setPrice("");
    setError("");
    onDone?.();
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="عنوان کار"
      />
      <div className="grid grid-cols-2 gap-2">
        <Input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="اجرت (تومان)"
          inputMode="numeric"
        />
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value as UnitId)}
          className="h-11 rounded-md border border-border bg-surface-2 px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {UNIT_IDS.map((u) => (
            <option key={u} value={u}>
              {UNIT_LABEL[u]}
            </option>
          ))}
        </select>
      </div>
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value as CategoryId)}
        className="h-11 rounded-md border border-border bg-surface-2 px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {CATEGORIES.map((c) => (
          <option key={c.id} value={c.id}>
            {c.title}
          </option>
        ))}
      </select>
      {error ? <p className="text-xs text-danger">{error}</p> : null}
      <Button type="submit">افزودن به فاکتور</Button>
    </form>
  );
}
