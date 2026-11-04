import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { QUICK_RATES, SHOLE_RULES } from "@/data/catalog";
import { formatToman, parseFaNumber, toFaDigits } from "@/lib/format";
import { useCalc } from "@/lib/store";
import { AppShell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quick/shole")({ component: SholeQuick });

function SholeQuick() {
  const addCustomItem = useCalc((s) => s.addCustomItem);
  const addQty = useCalc((s) => s.addQty);
  const navigate = useNavigate();
  const [ceiling, setCeiling] = useState(false);
  const [count, setCount] = useState("");
  const [rate, setRate] = useState(String(QUICK_RATES.shole));
  const n = parseFaNumber(count);
  const r = parseFaNumber(rate);
  const total = Number.isFinite(n) && n > 0 && Number.isFinite(r) ? n * r : 0;

  function add() {
    if (total <= 0) {
      toast.error("تعداد شعله را وارد کنید");
      return;
    }
    const id = addCustomItem({
      categoryId: "light",
      title: `اجرای شعله‌ای — ${toFaDigits(n)} شعله`,
      unit: "piece",
      price: r,
    });
    addQty(id, n);
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
          <h1 className="text-lg font-semibold">محاسبه شعله‌ای</h1>
          <p className="text-xs text-muted">هر شعله یعنی یک خروجی کامل برق</p>
        </div>
      </header>

      <div className="px-5">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setCeiling(false);
              setRate(String(QUICK_RATES.shole));
            }}
            className={cn(
              "rounded-xl px-2 py-3 text-sm font-medium shadow-[var(--shadow-border)]",
              !ceiling ? "bg-primary text-primary-fg" : "bg-surface",
            )}
          >
            عادی
            <span className={cn("mt-1 block text-xs", !ceiling ? "text-primary-fg/80" : "text-muted")}>
              {formatToman(QUICK_RATES.shole)}
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              setCeiling(true);
              setRate(String(QUICK_RATES.sholeCeiling));
            }}
            className={cn(
              "rounded-xl px-2 py-3 text-sm font-medium shadow-[var(--shadow-border)]",
              ceiling ? "bg-primary text-primary-fg" : "bg-surface",
            )}
          >
            کامل در سقف
            <span className={cn("mt-1 block text-xs", ceiling ? "text-primary-fg/80" : "text-muted")}>
              {formatToman(QUICK_RATES.sholeCeiling)}
            </span>
          </button>
        </div>
        <label className="mt-4 block">
          <span className="mb-1.5 block text-xs text-muted">تعداد شعله</span>
          <Input value={count} onChange={(e) => setCount(e.target.value)} inputMode="numeric" placeholder="مثلاً ۲۴" />
        </label>
        <label className="mt-4 block">
          <span className="mb-1.5 block text-xs text-muted">اجرت هر شعله (تومان)</span>
          <Input value={rate} onChange={(e) => setRate(e.target.value)} inputMode="numeric" />
        </label>

        <div className="mt-5 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
          <p className="text-xs text-muted">جمع اجرت</p>
          <p className="mt-1 text-2xl font-semibold tabular-nums text-primary">
            {formatToman(total)}
            <span className="ms-1 text-sm font-normal text-muted">تومان</span>
          </p>
        </div>

        <Button className="mt-5 w-full" onClick={add} disabled={total <= 0}>
          افزودن به فاکتور
        </Button>
        <ul className="mt-4 flex flex-col gap-2 text-xs leading-relaxed text-subtle">
          {SHOLE_RULES.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
          <li>اگر کل لوله‌کشی در سقف باشد، اجرت شعله ۴۰٪ بیشتر است.</li>
        </ul>
      </div>
    </AppShell>
  );
}
