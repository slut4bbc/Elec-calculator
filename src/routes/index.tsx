import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Building2, Flame, Pencil, Search, Timer } from "lucide-react";
import { CATEGORIES, itemsByCategory } from "@/data/catalog";
import { formatToman, toFaDigits } from "@/lib/format";
import { useCalc, useInvoice } from "@/lib/store";
import { AppShell } from "@/components/shell";
import { CategoryIcon } from "@/components/icons";
import { SearchField } from "@/components/search-field";
import { ItemRow } from "@/components/item-row";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featuredIds = useCalc((s) => s.featuredIds);
  const customItems = useCalc((s) => s.customItems);
  const invoice = useInvoice();
  const [query, setQuery] = useState("");

  const featured = useMemo(() => {
    const map = new Map(CATEGORIES.map((c) => [c.id, c]));
    return featuredIds.map((id) => map.get(id)).filter((c): c is NonNullable<typeof c> => !!c);
  }, [featuredIds]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    const all = [...CATEGORIES.flatMap((c) => itemsByCategory(c.id)), ...customItems];
    return all.filter((item) => item.title.includes(q) || Boolean(item.note?.includes(q)));
  }, [query, customItems]);

  return (
    <AppShell>
      <header className="flex items-center gap-3 px-5 pt-6 pb-4">
        <img src="/logo.png" alt="" width={56} height={56} className="size-14 shrink-0 rounded-md" />
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-semibold tracking-tight text-fg">AC/DC</h1>
          <p className="mt-0.5 text-sm text-muted">ماشین‌حساب اجرت برقکاری</p>
        </div>
        {invoice.lines.length > 0 ? (
          <Link
            to="/estimate"
            className="rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-fg"
          >
            {formatToman(invoice.total)}
          </Link>
        ) : null}
      </header>

      <div className="px-5">
        <SearchField value={query} onChange={setQuery} placeholder="جستجوی کار — مثلاً لوله یا هالوژن" />
      </div>

      {query.trim() ? (
        <section className="mt-5 px-5">
          <p className="mb-3 text-xs text-muted">
            {results.length === 0 ? "موردی پیدا نشد" : `${toFaDigits(results.length)} مورد`}
          </p>
          <div className="flex flex-col gap-3">
            {results.map((item) => (
              <ItemRow key={item.id} item={item} />
            ))}
          </div>
        </section>
      ) : (
        <>
          <section className="mt-6 px-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium text-fg">کارهای اصلی</h2>
              <Link to="/settings" className="inline-flex items-center gap-1 text-xs text-muted hover:text-fg">
                <Pencil className="size-3.5" />
                چینش صفحه
              </Link>
            </div>
            {featured.length === 0 ? (
              <Link
                to="/settings"
                className="flex items-center justify-between rounded-xl bg-surface px-4 py-5 shadow-[var(--shadow-border)]"
              >
                <span className="text-sm text-muted">هنوز کاری برای صفحه اصلی انتخاب نشده</span>
                <ArrowLeft className="size-4 text-subtle" />
              </Link>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {featured.map((cat) => {
                  const count =
                    itemsByCategory(cat.id).length +
                    customItems.filter((i) => i.categoryId === cat.id).length;
                  return (
                    <Link
                      key={cat.id}
                      to="/c/$id"
                      params={{ id: cat.id }}
                      className="group flex flex-col gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] active:scale-[0.98]"
                    >
                      <span className="flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary">
                        <CategoryIcon name={cat.icon} className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-fg">{cat.title}</span>
                        <span className="mt-1 block text-xs text-muted">{cat.subtitle}</span>
                      </span>
                      <Badge className="w-fit">{toFaDigits(count)} آیتم</Badge>
                    </Link>
                  );
                })}
              </div>
            )}
          </section>

          <section className="mt-8 px-5">
            <h2 className="mb-3 text-sm font-medium text-fg">محاسبه سریع</h2>
            <div className="grid grid-cols-3 gap-2">
              <QuickCard to="/quick/area" icon={Building2} label="زیربنایی" hint="متر مربع" />
              <QuickCard to="/quick/shole" icon={Flame} label="شعله‌ای" hint="هر شعله" />
              <QuickCard to="/quick/hourly" icon={Timer} label="ساعتی" hint="روز و ساعت" />
            </div>
          </section>

          <section className="mt-8 px-5">
            <Link
              to="/catalog"
              className="flex items-center justify-between rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-surface-2 text-fg">
                  <Search className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium">فهرست کامل آیتم‌ها</span>
                  <span className="mt-0.5 block text-xs text-muted">نرخنامه ۱۴۰۵ آبادان</span>
                </span>
              </span>
              <ArrowLeft className="size-4 text-subtle" />
            </Link>
          </section>

          <section className="mt-4 px-5 pb-2">
            <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
              <p className="text-sm font-medium text-fg">نصب آفلاین روی پوکو</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                در کرومِ HyperOS منوی سه‌نقطه را بزنید و «افزودن به صفحه اصلی» یا Install app را انتخاب کنید.
                بعد از یک بار باز شدن، نرخنامه و فاکتورها بدون اینترنت روی همان گوشی می‌مانند.
              </p>
            </div>
          </section>
        </>
      )}
    </AppShell>
  );
}

function QuickCard({
  to,
  icon: Icon,
  label,
  hint,
}: {
  to: "/quick/area" | "/quick/shole" | "/quick/hourly";
  icon: typeof Building2;
  label: string;
  hint: string;
}) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center gap-2 rounded-xl bg-surface px-2 py-4 text-center shadow-[var(--shadow-border)] active:scale-[0.98]"
    >
      <Icon className="size-5 text-primary" strokeWidth={1.75} />
      <span className="text-xs font-medium text-fg">{label}</span>
      <span className="text-xs text-subtle">{hint}</span>
    </Link>
  );
}
