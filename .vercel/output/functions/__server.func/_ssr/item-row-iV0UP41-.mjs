import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as resolvePrice, l as UNIT_LABEL, p as formatToman, v as useCalc } from "./input-Bat-Nuif.mjs";
import { t as QtyStepper } from "./qty-stepper-uCAe14Ze.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/item-row-iV0UP41-.js
var import_jsx_runtime = require_jsx_runtime();
function ItemRow({ item }) {
	const qty = useCalc((s) => s.cart.find((l) => l.itemId === item.id)?.qty ?? 0);
	const setQty = useCalc((s) => s.setQty);
	const price = useCalc((s) => s.priceOverrides[item.id]) ?? resolvePrice(item.id);
	const amount = price * qty;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium leading-snug text-fg",
						children: item.title
					}),
					item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: item.note
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-muted",
						children: [formatToman(price), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-subtle",
							children: [" / ", UNIT_LABEL[item.unit]]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
				value: qty,
				onChange: (n) => setQty(item.id, n)
			})]
		}), qty > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-t border-border pt-3 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: "جمع این آیتم"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium tabular-nums text-primary",
				children: formatToman(amount)
			})]
		}) : null]
	});
}
//#endregion
export { ItemRow as t };
