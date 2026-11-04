import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, ChevronUp, Pencil } from "lucide-react";
import { toast } from "sonner";
import { CATEGORIES, ITEMS, UNIT_LABEL } from "@/data/catalog";
import { formatToman, parseFaNumber } from "@/lib/format";
import { resolvePrice, useCalc } from "@/lib/store";
import { AppShell, PageHeader } from "@/components/shell";
import { CategoryIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchField } from "@/components/search-field";
import { AddItemForm } from "@/components/add-item-form";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/settings")({ component: SettingsPage });

function SettingsPage() {
  const featuredIds = useCalc((s) => s.featuredIds);
  const toggleFeatured = useCalc((s) => s.toggleFeatured);
  const moveFeatured = useCalc((s) => s.moveFeatured);
  const coefficient = useCalc((s) => s.coefficient);
  const setCoefficient = useCalc((s) => s.setCoefficient);
  const resetPrices = useCalc((s) => s.resetPrices);
  const [coef, setCoef] = useState(String(coefficient));
  const [tab, setTab] = useState<"home" | "prices" | "custom">("home");

  return (
    <AppShell>
      <PageHeader title="تنظیمات" subtitle="چینش صفحه اصلی و قیمت‌ها" />

      <div className="mx-5 mb-5 grid grid-cols-3 rounded-xl bg-surface p-1 shadow-[var(--shadow-border)]">
        {(
          [
            ["home", "صفحه اصلی"],
            ["prices", "قیمت‌ها"],
            ["custom", "سفارشی"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "h-10 rounded-md text-xs font-medium transition-colors duration-150",
              tab === id ? "bg-surface-2 text-fg" : "text-muted",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "home" ? (
        <section className="px-5">
          <p className="mb-3 text-sm text-muted">
            کارهای اصلی صفحه ورود را انتخاب کنید و ترتیب را با فلش عوض کنید.
          </p>
          <div className="flex flex-col gap-2">
            {CATEGORIES.map((cat) => {
              const on = featuredIds.includes(cat.id);
              const idx = featuredIds.indexOf(cat.id);
              return (
                <div
                  key={cat.id}
                  className="flex items-center gap-2 rounded-xl bg-surface px-3 py-2 shadow-[var(--shadow-border)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFeatured(cat.id)}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-md",
                      on ? "bg-primary text-primary-fg" : "bg-surface-2 text-muted",
                    )}
                    aria-pressed={on}
                    aria-label={on ? "حذف از صفحه اصلی" : "افزودن به صفحه اصلی"}
                  >
                    {on ? <Check className="size-4" /> : <CategoryIcon name={cat.icon} className="size-4" />}
                  </button>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{cat.title}</p>
                    <p className="text-xs text-muted">{cat.subtitle}</p>
                  </div>
                  {on ? (
                    <div className="flex flex-col">
                      <button
                        type="button"
                        className="flex size-8 items-center justify-center text-muted disabled:opacity-30"
                        disabled={idx <= 0}
                        onClick={() => moveFeatured(cat.id, -1)}
                        aria-label="بالا"
                      >
                        <ChevronUp className="size-4" />
                      </button>
                      <button
                        type="button"
                        className="flex size-8 items-center justify-center text-muted disabled:opacity-30"
                        disabled={idx === featuredIds.length - 1}
                        onClick={() => moveFeatured(cat.id, 1)}
                        aria-label="پایین"
                      >
                        <ChevronDown className="size-4" />
                      </button>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {tab === "prices" ? (
        <section className="px-5">
          <label className="mb-4 block">
            <span className="mb-1.5 block text-xs text-muted">ضریب پیش‌فرض فاکتور</span>
            <Input
              value={coef}
              onChange={(e) => setCoef(e.target.value)}
              onBlur={() => {
                const n = parseFaNumber(coef);
                setCoefficient(Number.isFinite(n) && n > 0 ? n : 1);
              }}
              inputMode="decimal"
            />
            <span className="mt-1 block text-xs text-subtle">
              برای منطقه یا سختی کار. مثلاً ۱٫۲ یعنی بیست درصد بالاتر.
            </span>
          </label>
          <PriceEditor />
          <Button
            variant="outline"
            className="mt-4 w-full"
            onClick={() => {
              resetPrices();
              toast.success("قیمت‌ها به نرخ پیش‌فرض برگشت");
            }}
          >
            بازگشت به نرخ پیش‌فرض
          </Button>
          <p className="mt-3 text-xs leading-relaxed text-subtle">
            نرخ‌های پیش‌فرض از نرخنامه ۱۴۰۵ کمیته مجریان برق شهرستان آبادان است و به تومان نشان داده می‌شود. هر قیمت را می‌توانید همین‌جا عوض کنید.
          </p>
        </section>
      ) : null}

      {tab === "custom" ? (
        <section className="px-5">
          <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="mb-3 text-sm font-medium">آیتم جدید</p>
            <AddItemForm defaultCategory="box" />
          </div>
          <InstallHint />
        </section>
      ) : null}
    </AppShell>
  );
}

function InstallHint() {
  return (
    <div className="mt-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <p className="text-sm font-medium">نصب آفلاین روی گوشی</p>
      <p className="mt-2 text-xs leading-relaxed text-muted">
        روی Poco X6 Pro با HyperOS، کروم را باز کنید، منوی سه‌نقطه، سپس «افزودن به صفحه اصلی» یا Install app.
        بعد از یک بار باز شدن، نرخنامه و فاکتورها بدون اینترنت روی همان گوشی می‌مانند.
        اگر HyperOS نصب را blocked کرد: تنظیمات، امنیت، نصب برنامه‌های ناشناس را برای کروم روشن کنید.
      </p>
    </div>
  );
}

function PriceEditor() {
  const overrides = useCalc((s) => s.priceOverrides);
  const customItems = useCalc((s) => s.customItems);
  const setOverride = useCalc((s) => s.setOverride);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  const list = useMemo(() => {
    const all = [...customItems, ...ITEMS];
    const q = query.trim();
    if (!q) return all;
    return all.filter((i) => i.title.includes(q));
  }, [query, customItems]);

  function startEdit(id: string) {
    setEditing(id);
    setDraft(String(resolvePrice(id)));
  }

  function commit(id: string) {
    const n = parseFaNumber(draft);
    if (Number.isFinite(n) && n >= 0) setOverride(id, n);
    setEditing(null);
  }

  return (
    <div>
      <SearchField value={query} onChange={setQuery} placeholder="جستجو برای ویرایش قیمت" />
      <div className="mt-3 flex max-h-[28rem] flex-col gap-2 overflow-y-auto">
        {list.map((item) => {
          const price = overrides[item.id] ?? item.price;
          const changed = overrides[item.id] !== undefined;
          return (
            <div
              key={item.id}
              className="flex items-center gap-2 rounded-lg bg-surface px-3 py-2 shadow-[var(--shadow-border)]"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm">{item.title}</p>
                <p className="text-xs text-subtle">{UNIT_LABEL[item.unit]}</p>
              </div>
              {editing === item.id ? (
                <form
                  className="flex items-center gap-1"
                  onSubmit={(e) => {
                    e.preventDefault();
                    commit(item.id);
                  }}
                >
                  <Input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    className="h-9 w-28"
                    inputMode="numeric"
                    autoFocus
                  />
                  <Button type="submit" size="sm">
                    ثبت
                  </Button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => startEdit(item.id)}
                  className="inline-flex h-11 items-center gap-1 text-sm tabular-nums text-primary"
                >
                  {formatToman(price)}
                  <Pencil className="size-3.5 text-muted" />
                  {changed ? <span className="text-xs text-muted">ویرایش‌شده</span> : null}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
