import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES, itemsByCategory } from "@/data/catalog";
import { toFaDigits } from "@/lib/format";
import { useCalc } from "@/lib/store";
import { AppShell, PageHeader } from "@/components/shell";
import { CategoryIcon } from "@/components/icons";
import { SearchField } from "@/components/search-field";
import { ItemRow } from "@/components/item-row";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/catalog")({ component: CatalogPage });

function CatalogPage() {
  const customItems = useCalc((s) => s.customItems);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    const all = [...CATEGORIES.flatMap((c) => itemsByCategory(c.id)), ...customItems];
    return all.filter((item) => item.title.includes(q) || Boolean(item.note?.includes(q)));
  }, [query, customItems]);

  return (
    <AppShell>
      <PageHeader title="فهرست کارها" subtitle="همه گروه‌های اجرت برقکاری" />
      <div className="px-5">
        <SearchField value={query} onChange={setQuery} placeholder="جستجو در همه آیتم‌ها" />
      </div>

      {query.trim() ? (
        <section className="mt-5 flex flex-col gap-3 px-5">
          {results.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted">موردی پیدا نشد</p>
          ) : (
            results.map((item) => <ItemRow key={item.id} item={item} />)
          )}
        </section>
      ) : (
        <section className="mt-4 flex flex-col gap-2 px-5">
          {CATEGORIES.map((cat) => {
            const count =
              itemsByCategory(cat.id).length +
              customItems.filter((i) => i.categoryId === cat.id).length;
            return (
              <Link
                key={cat.id}
                to="/c/$id"
                params={{ id: cat.id }}
                className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)] active:scale-[0.99]"
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary">
                  <CategoryIcon name={cat.icon} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">{cat.title}</span>
                  <span className="block text-xs text-muted">{cat.subtitle}</span>
                </span>
                <Badge>{toFaDigits(count)}</Badge>
                <ArrowLeft className="size-4 text-subtle" />
              </Link>
            );
          })}
        </section>
      )}
    </AppShell>
  );
}
