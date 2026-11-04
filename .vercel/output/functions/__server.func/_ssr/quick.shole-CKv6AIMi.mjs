import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as toFaDigits, a as Input, c as SHOLE_RULES, h as parseFaNumber, p as formatToman, s as QUICK_RATES, t as AppShell, u as cn, v as useCalc } from "./input-Bat-Nuif.mjs";
import { t as Button } from "./button-BQltG_nF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quick.shole-CKv6AIMi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SholeQuick() {
	const addCustomItem = useCalc((s) => s.addCustomItem);
	const addQty = useCalc((s) => s.addQty);
	const navigate = useNavigate();
	const [ceiling, setCeiling] = (0, import_react.useState)(false);
	const [count, setCount] = (0, import_react.useState)("");
	const [rate, setRate] = (0, import_react.useState)(String(QUICK_RATES.shole));
	const n = parseFaNumber(count);
	const r = parseFaNumber(rate);
	const total = Number.isFinite(n) && n > 0 && Number.isFinite(r) ? n * r : 0;
	function add() {
		if (total <= 0) {
			toast.error("تعداد شعله را وارد کنید");
			return;
		}
		const id = addCustomItem({
			categoryId: "light",
			title: `اجرای شعله‌ای — ${toFaDigits(n)} شعله`,
			unit: "piece",
			price: r
		});
		addQty(id, n);
		toast.success("به فاکتور اضافه شد");
		navigate({ to: "/estimate" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center gap-3 px-5 pt-6 pb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "flex size-11 items-center justify-center rounded-md bg-surface",
			"aria-label": "بازگشت",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-lg font-semibold",
			children: "محاسبه شعله‌ای"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: "هر شعله یعنی یک خروجی کامل برق"
		})] })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setCeiling(false);
						setRate(String(QUICK_RATES.shole));
					},
					className: cn("rounded-xl px-2 py-3 text-sm font-medium shadow-[var(--shadow-border)]", !ceiling ? "bg-primary text-primary-fg" : "bg-surface"),
					children: ["عادی", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("mt-1 block text-xs", !ceiling ? "text-primary-fg/80" : "text-muted"),
						children: formatToman(QUICK_RATES.shole)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setCeiling(true);
						setRate(String(QUICK_RATES.sholeCeiling));
					},
					className: cn("rounded-xl px-2 py-3 text-sm font-medium shadow-[var(--shadow-border)]", ceiling ? "bg-primary text-primary-fg" : "bg-surface"),
					children: ["کامل در سقف", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("mt-1 block text-xs", ceiling ? "text-primary-fg/80" : "text-muted"),
						children: formatToman(QUICK_RATES.sholeCeiling)
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-xs text-muted",
					children: "تعداد شعله"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: count,
					onChange: (e) => setCount(e.target.value),
					inputMode: "numeric",
					placeholder: "مثلاً ۲۴"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-xs text-muted",
					children: "اجرت هر شعله (تومان)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: rate,
					onChange: (e) => setRate(e.target.value),
					inputMode: "numeric"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "جمع اجرت"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-2xl font-semibold tabular-nums text-primary",
					children: [formatToman(total), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ms-1 text-sm font-normal text-muted",
						children: "تومان"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5 w-full",
				onClick: add,
				disabled: total <= 0,
				children: "افزودن به فاکتور"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 flex flex-col gap-2 text-xs leading-relaxed text-subtle",
				children: [SHOLE_RULES.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: rule }, rule)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "اگر کل لوله‌کشی در سقف باشد، اجرت شعله ۴۰٪ بیشتر است." })]
			})
		]
	})] });
}
//#endregion
export { SholeQuick as component };
