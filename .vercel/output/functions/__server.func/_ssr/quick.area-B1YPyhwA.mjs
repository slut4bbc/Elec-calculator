import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as toFaDigits, a as Input, h as parseFaNumber, p as formatToman, s as QUICK_RATES, t as AppShell, u as cn, v as useCalc } from "./input-Bat-Nuif.mjs";
import { t as Button } from "./button-BQltG_nF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quick.area-B1YPyhwA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KINDS = [{
	id: "wall",
	label: "بدون شیار",
	rate: QUICK_RATES.areaM2,
	note: "متری، کمتر از صد متر همان صد متر"
}, {
	id: "ceil",
	label: "لوله زیر سقف",
	rate: QUICK_RATES.areaCeilingM2,
	note: "۴۰٪ اضافه روی قیمت اصلی"
}];
function AreaQuick() {
	const addCustomItem = useCalc((s) => s.addCustomItem);
	const addQty = useCalc((s) => s.addQty);
	const navigate = useNavigate();
	const [kind, setKind] = (0, import_react.useState)("wall");
	const [area, setArea] = (0, import_react.useState)("");
	const selected = KINDS.find((k) => k.id === kind);
	const m2 = parseFaNumber(area);
	const billable = Number.isFinite(m2) && m2 > 0 ? Math.max(m2, 100) : 0;
	const total = billable > 0 ? billable * selected.rate : 0;
	function add() {
		if (total <= 0) {
			toast.error("متراژ را وارد کنید");
			return;
		}
		const id = addCustomItem({
			categoryId: "wire",
			title: `برق‌کشی زیربنایی ${selected.label} — ${toFaDigits(billable)} متر مربع`,
			unit: "m2",
			price: selected.rate
		});
		addQty(id, billable);
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
			children: "محاسبه زیربنایی"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: "اجرت کامل بر اساس متر مربع بنا"
		})] })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setKind(k.id),
					className: cn("rounded-xl px-2 py-3 text-center shadow-[var(--shadow-border)]", kind === k.id ? "bg-primary text-primary-fg" : "bg-surface text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-medium",
						children: k.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("mt-1 block text-xs", kind === k.id ? "text-primary-fg/80" : "text-muted"),
						children: formatToman(k.rate)
					})]
				}, k.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-5 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-xs text-muted",
					children: "متراژ زیربنا (متر مربع)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: area,
					onChange: (e) => setArea(e.target.value),
					inputMode: "decimal",
					placeholder: "مثلاً ۱۲۰"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "اجرت تقریبی"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs leading-relaxed text-subtle",
				children: [
					"نرخ زیربنایی ۱۴۰۵ آبادان، بدون شیارزنی و برش دیوار: ",
					formatToman(QUICK_RATES.areaM2),
					" تومان بر متر مربع. اگر لوله‌کشی زیر سقف باشد ",
					formatToman(QUICK_RATES.areaCeilingM2),
					" تومان. کمتر از صد متر، صد متر حساب می‌شود.",
					selected.note
				]
			})
		]
	})] });
}
//#endregion
export { AreaQuick as component };
