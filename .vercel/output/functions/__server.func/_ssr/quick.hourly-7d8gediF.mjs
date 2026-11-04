import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as toFaDigits, a as Input, h as parseFaNumber, p as formatToman, r as DAILY_MASTER, t as AppShell, u as cn, v as useCalc } from "./input-Bat-Nuif.mjs";
import { t as Button } from "./button-BQltG_nF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quick.hourly-7d8gediF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RATES = [
	{
		id: "master",
		label: "استادکار",
		day: DAILY_MASTER,
		hour: 4e5
	},
	{
		id: "semi",
		label: "نیمه‌ماهر",
		day: 2e6,
		hour: 28e4
	},
	{
		id: "helper",
		label: "شاگرد",
		day: 12e5,
		hour: 16e4
	}
];
function HourlyQuick() {
	const addCustomItem = useCalc((s) => s.addCustomItem);
	const addQty = useCalc((s) => s.addQty);
	const navigate = useNavigate();
	const [who, setWho] = (0, import_react.useState)("master");
	const [mode, setMode] = (0, import_react.useState)("day");
	const [qty, setQty] = (0, import_react.useState)("1");
	const selected = RATES.find((r) => r.id === who);
	const unitPrice = mode === "day" ? selected.day : selected.hour;
	const n = parseFaNumber(qty);
	const total = Number.isFinite(n) && n > 0 ? n * unitPrice : 0;
	function add() {
		if (total <= 0) {
			toast.error("تعداد را وارد کنید");
			return;
		}
		const id = addCustomItem({
			categoryId: "daily",
			title: `${selected.label} ${mode === "day" ? "روزمزد" : "ساعتی"} — ${toFaDigits(n)} ${mode === "day" ? "روز" : "ساعت"}`,
			unit: mode,
			price: unitPrice
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
			children: "روزمزد و ساعتی"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: "برای کارهای پراکنده و خرده"
		})] })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: RATES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setWho(r.id),
					className: cn("rounded-xl py-3 text-sm font-medium shadow-[var(--shadow-border)]", who === r.id ? "bg-primary text-primary-fg" : "bg-surface"),
					children: r.label
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: ["day", "hour"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMode(m),
					className: cn("rounded-xl py-3 text-sm shadow-[var(--shadow-border)]", mode === m ? "bg-surface-2 text-fg" : "bg-surface text-muted"),
					children: [
						m === "day" ? "روزانه" : "ساعتی",
						" · ",
						formatToman(m === "day" ? selected.day : selected.hour)
					]
				}, m))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-5 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-xs text-muted",
					children: mode === "day" ? "تعداد روز" : "تعداد ساعت"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: qty,
					onChange: (e) => setQty(e.target.value),
					inputMode: "decimal"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs leading-relaxed text-subtle",
				children: [
					"روزمزد استادکار طبق نرخنامه ۱۴۰۵ آبادان ",
					formatToman(DAILY_MASTER),
					" تومان است. نرخ نیمه‌ماهر و شاگرد تخمینی است و قابل ویرایش در تنظیمات نیست؛ قبل از افزودن، مبلغ را در فاکتور چک کنید."
				]
			})
		]
	})] });
}
//#endregion
export { HourlyQuick as component };
