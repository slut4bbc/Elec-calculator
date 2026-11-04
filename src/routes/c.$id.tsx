import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { findCategory, itemsByCategory, type CategoryId } from "@/data/catalog";
import { useCalc } from "@/lib/store";
import { AppShell } from "@/components/shell";
import { CategoryIcon } from "@/components/icons";
import { ItemRow } from "@/components/item-row";
import { AddItemForm } from "@/components/add-item-form";
import { Button } from "@/components/ui/button";
import { SearchField } from "@/components/search-field";

export const Route = createFileRoute("/c/$id")({ component: CategoryPage });

function CategoryPage() {
  const { id } = Route.useParams();
  const category = findCategory(id);
  const customItems = useCalc((s) => s.customItems);
  const removeCustomItem = useCalc((s) => s.removeCustomItem);
  const [query, setQuery] = useState("");
  const [adding, setAdding] = useState(false);

  const items = useMemo(() => {
    if (!category) return [];
    const builtIn = itemsByCategory(category.id);
    const extra = customItems.filter((i) => i.categoryId === category.id);
    const all = [...extra, ...builtIn];
    const q = query.trim();
    if (!q) return all;
    return all.filter((item) => item.title.includes(q));
  }, [category, customItems, query]);

  if (!category) {
    return (
      <AppShell>
        <div className="px-5 pt-10 text-sm text-muted">این گروه پیدا نشد.</div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <header className="flex items-center gap-3 px-5 pt-6 pb-3">
        <Link
          to="/"
          className="flex size-11 items-center justify-center rounded-md bg-surface text-fg"
          aria-label="بازگشت"
        >
          <ArrowRight className="size-5" />
        </Link>
        <span className="flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary">
          <CategoryIcon name={category.icon} className="size-5" />
        </span>
        <div className="min-w-0">
          <h1 className="text-lg font-semibold">{category.title}</h1>
          <p className="text-xs text-muted">{category.subtitle}</p>
        </div>
      </header>

      <div className="px-5">
        <SearchField value={query} onChange={setQuery} placeholder="جستجو در این گروه" />
      </div>

      <div className="mt-4 flex flex-col gap-3 px-5">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <ItemRow item={item} />
            {item.id.startsWith("custom-") ? (
              <button
                type="button"
                onClick={() => removeCustomItem(item.id)}
                className="absolute start-2 top-2 flex size-8 items-center justify-center rounded-md text-muted hover:text-danger"
                aria-label="حذف آیتم سفارشی"
              >
                <Trash2 className="size-3.5" />
              </button>
            ) : null}
          </div>
        ))}
        {items.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted">آیتمی در این گروه نیست.</p>
        ) : null}
      </div>

      <div className="mt-5 px-5">
        {adding ? (
          <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="mb-3 text-sm font-medium">آیتم سفارشی</p>
            <AddItemForm
              defaultCategory={category.id as CategoryId}
              onDone={() => setAdding(false)}
            />
            <Button variant="ghost" className="mt-2 w-full" onClick={() => setAdding(false)}>
              انصراف
            </Button>
          </div>
        ) : (
          <Button variant="outline" className="w-full" onClick={() => setAdding(true)}>
            <Plus className="size-4" />
            افزودن کار این گروه
          </Button>
        )}
      </div>
    </AppShell>
  );
}
