import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Input, h as parseFaNumber, l as UNIT_LABEL, n as CATEGORIES, v as useCalc } from "./input-Bat-Nuif.mjs";
import { t as Button } from "./button-BQltG_nF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/add-item-form-KFl_sI_e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var UNIT_IDS = Object.keys(UNIT_LABEL);
function AddItemForm({ defaultCategory, onDone }) {
	const addCustomItem = useCalc((s) => s.addCustomItem);
	const addQty = useCalc((s) => s.addQty);
	const [title, setTitle] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("");
	const [unit, setUnit] = (0, import_react.useState)("piece");
	const [categoryId, setCategoryId] = (0, import_react.useState)(defaultCategory);
	const [error, setError] = (0, import_react.useState)("");
	function submit(e) {
		e.preventDefault();
		const p = parseFaNumber(price);
		if (!title.trim()) {
			setError("عنوان را بنویسید");
			return;
		}
		if (!Number.isFinite(p) || p <= 0) {
			setError("قیمت معتبر نیست");
			return;
		}
		const id = addCustomItem({
			categoryId,
			title: title.trim(),
			unit,
			price: Math.round(p)
		});
		addQty(id, 1);
		setTitle("");
		setPrice("");
		setError("");
		onDone?.();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: title,
				onChange: (e) => setTitle(e.target.value),
				placeholder: "عنوان کار"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: price,
					onChange: (e) => setPrice(e.target.value),
					placeholder: "اجرت (تومان)",
					inputMode: "numeric"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: unit,
					onChange: (e) => setUnit(e.target.value),
					className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: UNIT_IDS.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: u,
						children: UNIT_LABEL[u]
					}, u))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				value: categoryId,
				onChange: (e) => setCategoryId(e.target.value),
				className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: c.id,
					children: c.title
				}, c.id))
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-danger",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "افزودن به فاکتور"
			})
		]
	});
}
//#endregion
export { AddItemForm as t };
