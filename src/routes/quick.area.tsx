import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { QUICK_RATES } from "@/data/catalog";
import { formatToman, parseFaNumber, toFaDigits } from "@/lib/format";
import { useCalc } from "@/lib/store";
import { AppShell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quick/area")({ component: AreaQuick });

const KINDS = [
  { id: "wall", label: "بدون شیار", rate: QUICK_RATES.areaM2, note: "متری، کمتر از صد متر همان صد متر" },
  { id: "ceil", label: "لوله زیر سقف", rate: QUICK_RATES.areaCeilingM2, note: "۴۰٪ اضافه روی قیمت اصلی" },
] as const;

function AreaQuick() {
  const addCustomItem = useCalc((s) => s.addCustomItem);
  const addQty = useCalc((s) => s.addQty);
  const navigate = useNavigate();
  const [kind, setKind] = useState<(typeof KINDS)[number]["id"]>("wall");
  const [area, setArea] = useState("");
  const selected = KINDS.find((k) => k.id === kind)!;
  const m2 = parseFaNumber(area);
  const billable = Number.isFinite(m2) && m2 > 0 ? Math.max(m2, 100) : 0;
  const total = billable > 0 ? billable * selected.rate : 0;

  function add() {
    if (total <= 0) {
      toast.error("متراژ را وارد کنید");
      return;
    }
    const id = addCustomItem({
      categoryId: "wire",
      title: `برق‌کشی زیربنایی ${selected.label} — ${toFaDigits(billable)} متر مربع`,
      unit: "m2",
      price: selected.rate,
    });
    addQty(id, billable);
    toast.success("به فاکتور اضافه شد");
    void navigate({ to: "/estimate" });
  }

  return (
    <AppShell>
      <header className="flex items-center gap-3 px-5 pt-6 pb-4">
        <Link to="/" className="flex size-11 items-center justify-center rounded-md bg-surface" aria-label="بازگشت">
          <ArrowRight className="size-5" />
        </Link>
        <div>
          <h1 className="text-lg font-semibold">محاسبه زیربنایی</h1>
          <p className="text-xs text-muted">اجرت کامل بر اساس متر مربع بنا</p>
        </div>
      </header>

      <div className="px-5">
        <div className="grid grid-cols-2 gap-2">
          {KINDS.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setKind(k.id)}
              className={cn(
                "rounded-xl px-2 py-3 text-center shadow-[var(--shadow-border)]",
                kind === k.id ? "bg-primary text-primary-fg" : "bg-surface text-fg",
              )}
            >
              <span className="block text-sm font-medium">{k.label}</span>
              <span className={cn("mt-1 block text-xs", kind === k.id ? "text-primary-fg/80" : "text-muted")}>
                {formatToman(k.rate)}
              </span>
            </button>
          ))}
        </div>

        <label className="mt-5 block">
          <span className="mb-1.5 block text-xs text-muted">متراژ زیربنا (متر مربع)</span>
          <Input value={area} onChange={(e) => setArea(e.target.value)} inputMode="decimal" placeholder="مثلاً ۱۲۰" />
        </label>

        <div className="mt-5 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
          <p className="text-xs text-muted">اجرت تقریبی</p>
          <p className="mt-1 text-2xl font-semibold tabular-nums text-primary">
            {formatToman(total)}
            <span className="ms-1 text-sm font-normal text-muted">تومان</span>
          </p>
        </div>

        <Button className="mt-5 w-full" onClick={add} disabled={total <= 0}>
          افزودن به فاکتور
        </Button>
        <p className="mt-3 text-xs leading-relaxed text-subtle">
          نرخ زیربنایی ۱۴۰۵ آبادان، بدون شیارزنی و برش دیوار: {formatToman(QUICK_RATES.areaM2)} تومان بر متر مربع.
          اگر لوله‌کشی زیر سقف باشد {formatToman(QUICK_RATES.areaCeilingM2)} تومان. کمتر از صد متر، صد متر حساب می‌شود.
          {selected.note}
        </p>
      </div>
    </AppShell>
  );
}
