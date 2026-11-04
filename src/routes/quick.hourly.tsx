import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { DAILY_MASTER } from "@/data/catalog";
import { formatToman, parseFaNumber, toFaDigits } from "@/lib/format";
import { useCalc } from "@/lib/store";
import { AppShell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quick/hourly")({ component: HourlyQuick });

const RATES = [
  { id: "master", label: "استادکار", day: DAILY_MASTER, hour: 400_000 },
  { id: "semi", label: "نیمه‌ماهر", day: 2_000_000, hour: 280_000 },
  { id: "helper", label: "شاگرد", day: 1_200_000, hour: 160_000 },
] as const;

function HourlyQuick() {
  const addCustomItem = useCalc((s) => s.addCustomItem);
  const addQty = useCalc((s) => s.addQty);
  const navigate = useNavigate();
  const [who, setWho] = useState<(typeof RATES)[number]["id"]>("master");
  const [mode, setMode] = useState<"day" | "hour">("day");
  const [qty, setQty] = useState("1");
  const selected = RATES.find((r) => r.id === who)!;
  const unitPrice = mode === "day" ? selected.day : selected.hour;
  const n = parseFaNumber(qty);
  const total = Number.isFinite(n) && n > 0 ? n * unitPrice : 0;

  function add() {
    if (total <= 0) {
      toast.error("تعداد را وارد کنید");
      return;
    }
    const id = addCustomItem({
      categoryId: "daily",
      title: `${selected.label} ${mode === "day" ? "روزمزد" : "ساعتی"} — ${toFaDigits(n)} ${mode === "day" ? "روز" : "ساعت"}`,
      unit: mode,
      price: unitPrice,
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
          <h1 className="text-lg font-semibold">روزمزد و ساعتی</h1>
          <p className="text-xs text-muted">برای کارهای پراکنده و خرده</p>
        </div>
      </header>

      <div className="px-5">
        <div className="grid grid-cols-3 gap-2">
          {RATES.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setWho(r.id)}
              className={cn(
                "rounded-xl py-3 text-sm font-medium shadow-[var(--shadow-border)]",
                who === r.id ? "bg-primary text-primary-fg" : "bg-surface",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {(["day", "hour"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={cn(
                "rounded-xl py-3 text-sm shadow-[var(--shadow-border)]",
                mode === m ? "bg-surface-2 text-fg" : "bg-surface text-muted",
              )}
            >
              {m === "day" ? "روزانه" : "ساعتی"} · {formatToman(m === "day" ? selected.day : selected.hour)}
            </button>
          ))}
        </div>

        <label className="mt-5 block">
          <span className="mb-1.5 block text-xs text-muted">{mode === "day" ? "تعداد روز" : "تعداد ساعت"}</span>
          <Input value={qty} onChange={(e) => setQty(e.target.value)} inputMode="decimal" />
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
        <p className="mt-3 text-xs leading-relaxed text-subtle">
          روزمزد استادکار طبق نرخنامه ۱۴۰۵ آبادان {formatToman(DAILY_MASTER)} تومان است. نرخ نیمه‌ماهر و شاگرد تخمینی است و قابل ویرایش در تنظیمات نیست؛ قبل از افزودن، مبلغ را در فاکتور چک کنید.
        </p>
      </div>
    </AppShell>
  );
}
