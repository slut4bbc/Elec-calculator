import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer, Save, Share2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { formatJalali, formatToman, parseFaNumber, toFaDigits } from "@/lib/format";
import { useCalc, useInvoice } from "@/lib/store";
import { AppShell, PageHeader } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QtyStepper } from "@/components/qty-stepper";

export const Route = createFileRoute("/estimate")({ component: EstimatePage });

function EstimatePage() {
  const invoice = useInvoice();
  const setQty = useCalc((s) => s.setQty);
  const setCustomer = useCalc((s) => s.setCustomer);
  const setProject = useCalc((s) => s.setProject);
  const setNotes = useCalc((s) => s.setNotes);
  const setCoefficient = useCalc((s) => s.setCoefficient);
  const setDiscount = useCalc((s) => s.setDiscount);
  const clearCart = useCalc((s) => s.clearCart);
  const saveEstimate = useCalc((s) => s.saveEstimate);
  const estimates = useCalc((s) => s.estimates);
  const [coef, setCoef] = useState(String(invoice.coefficient));
  const [disc, setDisc] = useState(String(invoice.discountPercent || ""));

  function persistCoef() {
    const n = parseFaNumber(coef);
    setCoefficient(Number.isFinite(n) && n > 0 ? n : 1);
  }
  function persistDisc() {
    const n = parseFaNumber(disc);
    setDiscount(Number.isFinite(n) ? n : 0);
  }

  async function share() {
    const text = [
      "فاکتور AC/DC",
      invoice.customerName && `کارفرما: ${invoice.customerName}`,
      invoice.projectName && `پروژه: ${invoice.projectName}`,
      "",
      ...invoice.lines.map(
        (l) =>
          `• ${l.title} — ${toFaDigits(l.qty)} ${l.unit} × ${formatToman(l.unitPrice)} = ${formatToman(l.amount)}`,
      ),
      "",
      `جمع: ${formatToman(invoice.total)} تومان`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      if (navigator.share) {
        await navigator.share({ title: "فاکتور AC/DC", text });
      } else {
        await navigator.clipboard.writeText(text);
        toast.success("متن فاکتور کپی شد");
      }
    } catch {
      await navigator.clipboard.writeText(text);
      toast.success("متن فاکتور کپی شد");
    }
  }

  function save() {
    const saved = saveEstimate();
    if (!saved) {
      toast.error("فاکتور خالی است");
      return;
    }
    toast.success("فاکتور ذخیره شد");
  }

  return (
    <AppShell>
      <PageHeader
        title="فاکتور اجرت"
        subtitle={formatJalali()}
        action={
          invoice.lines.length > 0 ? (
            <button
              type="button"
              onClick={clearCart}
              className="flex size-11 items-center justify-center rounded-md text-muted hover:text-danger"
              aria-label="پاک کردن فاکتور"
            >
              <Trash2 className="size-4" />
            </button>
          ) : null
        }
      />

      <div className="flex flex-col gap-3 px-5">
        <Input
          value={invoice.customerName}
          onChange={(e) => setCustomer(e.target.value)}
          placeholder="نام کارفرما"
        />
        <Input
          value={invoice.projectName}
          onChange={(e) => setProject(e.target.value)}
          placeholder="آدرس یا نام پروژه"
        />
      </div>

      {invoice.lines.length === 0 ? (
        <div className="px-5 py-16 text-center">
          <p className="text-sm text-muted">هنوز آیتمی به فاکتور اضافه نشده</p>
          <Link
            to="/"
            className="mt-4 inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
          >
            انتخاب کار
          </Link>
        </div>
      ) : (
        <>
          <section className="print-invoice mt-5 flex flex-col gap-2 px-5">
            {invoice.lines.map((line) => (
              <div
                key={line.itemId}
                className="flex items-start justify-between gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium">{line.title}</p>
                  <p className="mt-1 text-xs text-muted">
                    {formatToman(line.unitPrice)} / {line.unit}
                  </p>
                  <p className="mt-2 text-sm font-medium tabular-nums text-primary">
                    {formatToman(line.amount)}
                  </p>
                </div>
                <QtyStepper value={line.qty} onChange={(n) => setQty(line.itemId, n)} />
              </div>
            ))}
          </section>

          <section className="mt-5 space-y-3 px-5">
            <label className="block">
              <span className="mb-1.5 block text-xs text-muted">ضریب منطقه / سختی کار</span>
              <Input
                value={coef}
                onChange={(e) => setCoef(e.target.value)}
                onBlur={persistCoef}
                inputMode="decimal"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs text-muted">تخفیف (درصد)</span>
              <Input
                value={disc}
                onChange={(e) => setDisc(e.target.value)}
                onBlur={persistDisc}
                inputMode="decimal"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs text-muted">توضیحات</span>
              <textarea
                value={invoice.notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
          </section>

          <section className="mt-5 mx-5 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <Row label="جمع جزء" value={formatToman(invoice.subtotal)} />
            {invoice.coefficient !== 1 ? (
              <Row label={`با ضریب ${toFaDigits(invoice.coefficient)}`} value={formatToman(invoice.afterCoef)} />
            ) : null}
            {invoice.discountPercent > 0 ? (
              <Row
                label={`تخفیف ${toFaDigits(invoice.discountPercent)}٪`}
                value={formatToman(invoice.discountAmount)}
              />
            ) : null}
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="text-sm font-medium">قابل پرداخت</span>
              <span className="text-lg font-semibold tabular-nums text-primary">
                {formatToman(invoice.total)}
                <span className="ms-1 text-xs font-normal text-muted">تومان</span>
              </span>
            </div>
          </section>

          <div className="no-print mt-5 grid grid-cols-3 gap-2 px-5">
            <Button variant="outline" onClick={save}>
              <Save className="size-4" />
              ذخیره
            </Button>
            <Button variant="outline" onClick={share}>
              <Share2 className="size-4" />
              اشتراک
            </Button>
            <Button variant="outline" onClick={() => window.print()}>
              <Printer className="size-4" />
              چاپ
            </Button>
          </div>
        </>
      )}

      {estimates.length > 0 ? (
        <section className="no-print mt-8 px-5">
          <h2 className="mb-3 text-sm font-medium">فاکتورهای ذخیره‌شده</h2>
          <SavedList />
        </section>
      ) : null}
    </AppShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1 text-sm">
      <span className="text-muted">{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}

function SavedList() {
  const estimates = useCalc((s) => s.estimates);
  const loadEstimate = useCalc((s) => s.loadEstimate);
  const deleteEstimate = useCalc((s) => s.deleteEstimate);

  return (
    <div className="flex flex-col gap-2">
      {estimates.map((est) => (
        <div
          key={est.id}
          className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]"
        >
          <button
            type="button"
            className="min-w-0 flex-1 text-start"
            onClick={() => {
              loadEstimate(est.id);
              toast.success("فاکتور بارگذاری شد");
            }}
          >
            <p className="truncate text-sm font-medium">
              {est.customerName || est.projectName || "بدون نام"}
            </p>
            <p className="mt-0.5 text-xs text-muted">
              {formatJalali(new Date(est.createdAt))} · {formatToman(est.total)} تومان
            </p>
          </button>
          <button
            type="button"
            onClick={() => deleteEstimate(est.id)}
            className="flex size-11 items-center justify-center text-muted hover:text-danger"
            aria-label="حذف"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
