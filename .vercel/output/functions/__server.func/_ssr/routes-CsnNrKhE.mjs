import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as ArrowLeft, N as Building2, _ as Pencil, a as Timer, d as Search, w as Flame } from "../_libs/lucide-react.mjs";
import { _ as toFaDigits, m as itemsByCategory, n as CATEGORIES, p as formatToman, t as AppShell, v as useCalc, y as useInvoice } from "./input-Bat-Nuif.mjs";
import { n as SearchField, t as CategoryIcon } from "./search-field-BwYX85Rq.mjs";
import { t as ItemRow } from "./item-row-iV0UP41-.mjs";
import { t as Badge } from "./badge-B6Mapbr4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CsnNrKhE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featuredIds = useCalc((s) => s.featuredIds);
	const customItems = useCalc((s) => s.customItems);
	const invoice = useInvoice();
	const [query, setQuery] = (0, import_react.useState)("");
	const featured = (0, import_react.useMemo)(() => {
		const map = new Map(CATEGORIES.map((c) => [c.id, c]));
		return featuredIds.map((id) => map.get(id)).filter((c) => !!c);
	}, [featuredIds]);
	const results = (0, import_react.useMemo)(() => {
		const q = query.trim();
		if (!q) return [];
		return [...CATEGORIES.flatMap((c) => itemsByCategory(c.id)), ...customItems].filter((item) => item.title.includes(q) || Boolean(item.note?.includes(q)));
	}, [query, customItems]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center gap-3 px-5 pt-6 pb-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.png",
					alt: "",
					width: 56,
					height: 56,
					className: "size-14 shrink-0 rounded-md"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-semibold tracking-tight text-fg",
						children: "AC/DC"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted",
						children: "ماشین‌حساب اجرت برقکاری"
					})]
				}),
				invoice.lines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/estimate",
					className: "rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-fg",
					children: formatToman(invoice.total)
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
				value: query,
				onChange: setQuery,
				placeholder: "جستجوی کار — مثلاً لوله یا هالوژن"
			})
		}),
		query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-5 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs text-muted",
				children: results.length === 0 ? "موردی پیدا نشد" : `${toFaDigits(results.length)} مورد`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemRow, { item }, item.id))
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-medium text-fg",
						children: "کارهای اصلی"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/settings",
						className: "inline-flex items-center gap-1 text-xs text-muted hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" }), "چینش صفحه"]
					})]
				}), featured.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/settings",
					className: "flex items-center justify-between rounded-xl bg-surface px-4 py-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: "هنوز کاری برای صفحه اصلی انتخاب نشده"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 text-subtle" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					children: featured.map((cat) => {
						const count = itemsByCategory(cat.id).length + customItems.filter((i) => i.categoryId === cat.id).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/c/$id",
							params: { id: cat.id },
							className: "group flex flex-col gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] active:scale-[0.98]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, {
										name: cat.icon,
										className: "size-5"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium text-fg",
									children: cat.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-muted",
									children: cat.subtitle
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									className: "w-fit",
									children: [toFaDigits(count), " آیتم"]
								})
							]
						}, cat.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-sm font-medium text-fg",
					children: "محاسبه سریع"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickCard, {
							to: "/quick/area",
							icon: Building2,
							label: "زیربنایی",
							hint: "متر مربع"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickCard, {
							to: "/quick/shole",
							icon: Flame,
							label: "شعله‌ای",
							hint: "هر شعله"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickCard, {
							to: "/quick/hourly",
							icon: Timer,
							label: "ساعتی",
							hint: "روز و ساعت"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-8 px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/catalog",
					className: "flex items-center justify-between rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-md bg-surface-2 text-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-medium",
							children: "فهرست کامل آیتم‌ها"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-xs text-muted",
							children: "نرخنامه ۱۴۰۵ آبادان"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 text-subtle" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-4 px-5 pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: "نصب آفلاین روی پوکو"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: "در کرومِ HyperOS منوی سه‌نقطه را بزنید و «افزودن به صفحه اصلی» یا Install app را انتخاب کنید. بعد از یک بار باز شدن، نرخنامه و فاکتورها بدون اینترنت روی همان گوشی می‌مانند."
					})]
				})
			})
		] })
	] });
}
function QuickCard({ to, icon: Icon, label, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex flex-col items-center gap-2 rounded-xl bg-surface px-2 py-4 text-center shadow-[var(--shadow-border)] active:scale-[0.98]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-5 text-primary",
				strokeWidth: 1.75
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium text-fg",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-subtle",
				children: hint
			})
		]
	});
}
//#endregion
export { Home as component };
