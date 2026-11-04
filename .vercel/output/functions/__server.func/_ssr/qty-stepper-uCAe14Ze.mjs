import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Plus, v as Minus } from "../_libs/lucide-react.mjs";
import { _ as toFaDigits, u as cn } from "./input-Bat-Nuif.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/qty-stepper-uCAe14Ze.js
var import_jsx_runtime = require_jsx_runtime();
function QtyStepper({ value, onChange, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-1", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "کاهش",
				onClick: () => onChange(Math.max(0, value - 1)),
				className: "flex size-11 items-center justify-center rounded-md bg-surface-2 text-fg transition-[background-color,transform] duration-150 hover:bg-border active:scale-95",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-8 text-center text-sm font-medium tabular-nums",
				children: toFaDigits(value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "افزایش",
				onClick: () => onChange(value + 1),
				className: "flex size-11 items-center justify-center rounded-md bg-primary text-primary-fg transition-[opacity,transform] duration-150 hover:opacity-90 active:scale-95",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			})
		]
	});
}
//#endregion
export { QtyStepper as t };
