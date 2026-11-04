import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight, h as Plus, r as Trash2 } from "../_libs/lucide-react.mjs";
import { n as Route$3 } from "./router-eJXn3L_M.mjs";
import { d as findCategory, m as itemsByCategory, t as AppShell, v as useCalc } from "./input-Bat-Nuif.mjs";
import { n as SearchField, t as CategoryIcon } from "./search-field-BwYX85Rq.mjs";
import { t as ItemRow } from "./item-row-iV0UP41-.mjs";
import { t as Button } from "./button-BQltG_nF.mjs";
import { t as AddItemForm } from "./add-item-form-KFl_sI_e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/c._id-at4_rBB4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { id } = Route$3.useParams();
	const category = findCategory(id);
	const customItems = useCalc((s) => s.customItems);
	const removeCustomItem = useCalc((s) => s.removeCustomItem);
	const [query, setQuery] = (0, import_react.useState)("");
	const [adding, setAdding] = (0, import_react.useState)(false);
	const items = (0, import_react.useMemo)(() => {
		if (!category) return [];
		const builtIn = itemsByCategory(category.id);
		const all = [...customItems.filter((i) => i.categoryId === category.id), ...builtIn];
		const q = query.trim();
		if (!q) return all;
		return all.filter((item) => item.title.includes(q));
	}, [
		category,
		customItems,
		query
	]);
	if (!category) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-5 pt-10 text-sm text-muted",
		children: "این گروه پیدا نشد."
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center gap-3 px-5 pt-6 pb-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex size-11 items-center justify-center rounded-md bg-surface text-fg",
					"aria-label": "بازگشت",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, {
						name: category.icon,
						className: "size-5"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-lg font-semibold",
						children: category.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: category.subtitle
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
				value: query,
				onChange: setQuery,
				placeholder: "جستجو در این گروه"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-col gap-3 px-5",
			children: [items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemRow, { item }), item.id.startsWith("custom-") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => removeCustomItem(item.id),
					className: "absolute start-2 top-2 flex size-8 items-center justify-center rounded-md text-muted hover:text-danger",
					"aria-label": "حذف آیتم سفارشی",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
				}) : null]
			}, item.id)), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-8 text-center text-sm text-muted",
				children: "آیتمی در این گروه نیست."
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 px-5",
			children: adding ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm font-medium",
						children: "آیتم سفارشی"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddItemForm, {
						defaultCategory: category.id,
						onDone: () => setAdding(false)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "mt-2 w-full",
						onClick: () => setAdding(false),
						children: "انصراف"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				className: "w-full",
				onClick: () => setAdding(true),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "افزودن کار این گروه"]
			})
		})
	] });
}
//#endregion
export { CategoryPage as component };
