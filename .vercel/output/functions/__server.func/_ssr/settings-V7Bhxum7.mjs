import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Check, O as ChevronUp, _ as Pencil, k as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Input, g as resolvePrice, h as parseFaNumber, i as ITEMS, l as UNIT_LABEL, n as CATEGORIES, o as PageHeader, p as formatToman, t as AppShell, u as cn, v as useCalc } from "./input-Bat-Nuif.mjs";
import { n as SearchField, t as CategoryIcon } from "./search-field-BwYX85Rq.mjs";
import { t as Button } from "./button-BQltG_nF.mjs";
import { t as AddItemForm } from "./add-item-form-KFl_sI_e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-V7Bhxum7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	const featuredIds = useCalc((s) => s.featuredIds);
	const toggleFeatured = useCalc((s) => s.toggleFeatured);
	const moveFeatured = useCalc((s) => s.moveFeatured);
	const coefficient = useCalc((s) => s.coefficient);
	const setCoefficient = useCalc((s) => s.setCoefficient);
	const resetPrices = useCalc((s) => s.resetPrices);
	const [coef, setCoef] = (0, import_react.useState)(String(coefficient));
	const [tab, setTab] = (0, import_react.useState)("home");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "تنظیمات",
			subtitle: "چینش صفحه اصلی و قیمت‌ها"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-5 mb-5 grid grid-cols-3 rounded-xl bg-surface p-1 shadow-[var(--shadow-border)]",
			children: [
				["home", "صفحه اصلی"],
				["prices", "قیمت‌ها"],
				["custom", "سفارشی"]
			].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setTab(id),
				className: cn("h-10 rounded-md text-xs font-medium transition-colors duration-150", tab === id ? "bg-surface-2 text-fg" : "text-muted"),
				children: label
			}, id))
		}),
		tab === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-sm text-muted",
				children: "کارهای اصلی صفحه ورود را انتخاب کنید و ترتیب را با فلش عوض کنید."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2",
				children: CATEGORIES.map((cat) => {
					const on = featuredIds.includes(cat.id);
					const idx = featuredIds.indexOf(cat.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-xl bg-surface px-3 py-2 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleFeatured(cat.id),
								className: cn("flex size-10 items-center justify-center rounded-md", on ? "bg-primary text-primary-fg" : "bg-surface-2 text-muted"),
								"aria-pressed": on,
								"aria-label": on ? "حذف از صفحه اصلی" : "افزودن به صفحه اصلی",
								children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, {
									name: cat.icon,
									className: "size-4"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: cat.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: cat.subtitle
								})]
							}),
							on ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex size-8 items-center justify-center text-muted disabled:opacity-30",
									disabled: idx <= 0,
									onClick: () => moveFeatured(cat.id, -1),
									"aria-label": "بالا",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex size-8 items-center justify-center text-muted disabled:opacity-30",
									disabled: idx === featuredIds.length - 1,
									onClick: () => moveFeatured(cat.id, 1),
									"aria-label": "پایین",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
								})]
							}) : null
						]
					}, cat.id);
				})
			})]
		}) : null,
		tab === "prices" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mb-4 block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs text-muted",
							children: "ضریب پیش‌فرض فاکتور"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: coef,
							onChange: (e) => setCoef(e.target.value),
							onBlur: () => {
								const n = parseFaNumber(coef);
								setCoefficient(Number.isFinite(n) && n > 0 ? n : 1);
							},
							inputMode: "decimal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-subtle",
							children: "برای منطقه یا سختی کار. مثلاً ۱٫۲ یعنی بیست درصد بالاتر."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceEditor, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "mt-4 w-full",
					onClick: () => {
						resetPrices();
						toast.success("قیمت‌ها به نرخ پیش‌فرض برگشت");
					},
					children: "بازگشت به نرخ پیش‌فرض"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs leading-relaxed text-subtle",
					children: "نرخ‌های پیش‌فرض از نرخنامه ۱۴۰۵ کمیته مجریان برق شهرستان آبادان است و به تومان نشان داده می‌شود. هر قیمت را می‌توانید همین‌جا عوض کنید."
				})
			]
		}) : null,
		tab === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm font-medium",
					children: "آیتم جدید"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddItemForm, { defaultCategory: "box" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallHint, {})]
		}) : null
	] });
}
function InstallHint() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: "نصب آفلاین روی گوشی"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs leading-relaxed text-muted",
			children: "روی Poco X6 Pro با HyperOS، کروم را باز کنید، منوی سه‌نقطه، سپس «افزودن به صفحه اصلی» یا Install app. بعد از یک بار باز شدن، نرخنامه و فاکتورها بدون اینترنت روی همان گوشی می‌مانند. اگر HyperOS نصب را blocked کرد: تنظیمات، امنیت، نصب برنامه‌های ناشناس را برای کروم روشن کنید."
		})]
	});
}
function PriceEditor() {
	const overrides = useCalc((s) => s.priceOverrides);
	const customItems = useCalc((s) => s.customItems);
	const setOverride = useCalc((s) => s.setOverride);
	const [query, setQuery] = (0, import_react.useState)("");
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const all = [...customItems, ...ITEMS];
		const q = query.trim();
		if (!q) return all;
		return all.filter((i) => i.title.includes(q));
	}, [query, customItems]);
	function startEdit(id) {
		setEditing(id);
		setDraft(String(resolvePrice(id)));
	}
	function commit(id) {
		const n = parseFaNumber(draft);
		if (Number.isFinite(n) && n >= 0) setOverride(id, n);
		setEditing(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
		value: query,
		onChange: setQuery,
		placeholder: "جستجو برای ویرایش قیمت"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 flex max-h-[28rem] flex-col gap-2 overflow-y-auto",
		children: list.map((item) => {
			const price = overrides[item.id] ?? item.price;
			const changed = overrides[item.id] !== void 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-lg bg-surface px-3 py-2 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: UNIT_LABEL[item.unit]
					})]
				}), editing === item.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex items-center gap-1",
					onSubmit: (e) => {
						e.preventDefault();
						commit(item.id);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						className: "h-9 w-28",
						inputMode: "numeric",
						autoFocus: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "sm",
						children: "ثبت"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => startEdit(item.id),
					className: "inline-flex h-11 items-center gap-1 text-sm tabular-nums text-primary",
					children: [
						formatToman(price),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5 text-muted" }),
						changed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: "ویرایش‌شده"
						}) : null
					]
				})]
			}, item.id);
		})
	})] });
}
//#endregion
export { SettingsPage as component };
