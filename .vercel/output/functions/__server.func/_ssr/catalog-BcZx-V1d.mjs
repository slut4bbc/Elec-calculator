import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as ArrowLeft } from "../_libs/lucide-react.mjs";
import { _ as toFaDigits, m as itemsByCategory, n as CATEGORIES, o as PageHeader, t as AppShell, v as useCalc } from "./input-Bat-Nuif.mjs";
import { n as SearchField, t as CategoryIcon } from "./search-field-BwYX85Rq.mjs";
import { t as ItemRow } from "./item-row-iV0UP41-.mjs";
import { t as Badge } from "./badge-B6Mapbr4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-BcZx-V1d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CatalogPage() {
	const customItems = useCalc((s) => s.customItems);
	const [query, setQuery] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const q = query.trim();
		if (!q) return [];
		return [...CATEGORIES.flatMap((c) => itemsByCategory(c.id)), ...customItems].filter((item) => item.title.includes(q) || Boolean(item.note?.includes(q)));
	}, [query, customItems]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "فهرست کارها",
			subtitle: "همه گروه‌های اجرت برقکاری"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
				value: query,
				onChange: setQuery,
				placeholder: "جستجو در همه آیتم‌ها"
			})
		}),
		query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-5 flex flex-col gap-3 px-5",
			children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-10 text-center text-sm text-muted",
				children: "موردی پیدا نشد"
			}) : results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemRow, { item }, item.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-4 flex flex-col gap-2 px-5",
			children: CATEGORIES.map((cat) => {
				const count = itemsByCategory(cat.id).length + customItems.filter((i) => i.categoryId === cat.id).length;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/c/$id",
					params: { id: cat.id },
					className: "flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)] active:scale-[0.99]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, {
								name: cat.icon,
								className: "size-5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: cat.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: cat.subtitle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: toFaDigits(count) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 text-subtle" })
					]
				}, cat.id);
			})
		})
	] });
}
//#endregion
export { CatalogPage as component };
