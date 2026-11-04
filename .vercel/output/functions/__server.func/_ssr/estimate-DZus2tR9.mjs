import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Save, l as Share2, m as Printer, r as Trash2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as toFaDigits, a as Input, f as formatJalali, h as parseFaNumber, o as PageHeader, p as formatToman, t as AppShell, v as useCalc, y as useInvoice } from "./input-Bat-Nuif.mjs";
import { t as QtyStepper } from "./qty-stepper-uCAe14Ze.mjs";
import { t as Button } from "./button-BQltG_nF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/estimate-DZus2tR9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EstimatePage() {
	const invoice = useInvoice();
	const setQty = useCalc((s) => s.setQty);
	const setCustomer = useCalc((s) => s.setCustomer);
	const setProject = useCalc((s) => s.setProject);
	const setNotes = useCalc((s) => s.setNotes);
	const setCoefficient = useCalc((s) => s.setCoefficient);
	const setDiscount = useCalc((s) => s.setDiscount);
	const clearCart = useCalc((s) => s.clearCart);
	const saveEstimate = useCalc((s) => s.saveEstimate);
	const estimates = useCalc((s) => s.estimates);
	const [coef, setCoef] = (0, import_react.useState)(String(invoice.coefficient));
	const [disc, setDisc] = (0, import_react.useState)(String(invoice.discountPercent || ""));
	function persistCoef() {
		const n = parseFaNumber(coef);
		setCoefficient(Number.isFinite(n) && n > 0 ? n : 1);
	}
	function persistDisc() {
		const n = parseFaNumber(disc);
		setDiscount(Number.isFinite(n) ? n : 0);
	}
	async function share() {
		const text = [
			"فاکتور AC/DC",
			invoice.customerName && `کارفرما: ${invoice.customerName}`,
			invoice.projectName && `پروژه: ${invoice.projectName}`,
			"",
			...invoice.lines.map((l) => `• ${l.title} — ${toFaDigits(l.qty)} ${l.unit} × ${formatToman(l.unitPrice)} = ${formatToman(l.amount)}`),
			"",
			`جمع: ${formatToman(invoice.total)} تومان`
		].filter(Boolean).join("\n");
		try {
			if (navigator.share) await navigator.share({
				title: "فاکتور AC/DC",
				text
			});
			else {
				await navigator.clipboard.writeText(text);
				toast.success("متن فاکتور کپی شد");
			}
		} catch {
			await navigator.clipboard.writeText(text);
			toast.success("متن فاکتور کپی شد");
		}
	}
	function save() {
		if (!saveEstimate()) {
			toast.error("فاکتور خالی است");
			return;
		}
		toast.success("فاکتور ذخیره شد");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "فاکتور اجرت",
			subtitle: formatJalali(),
			action: invoice.lines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: clearCart,
				className: "flex size-11 items-center justify-center rounded-md text-muted hover:text-danger",
				"aria-label": "پاک کردن فاکتور",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
			}) : null
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: invoice.customerName,
				onChange: (e) => setCustomer(e.target.value),
				placeholder: "نام کارفرما"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: invoice.projectName,
				onChange: (e) => setProject(e.target.value),
				placeholder: "آدرس یا نام پروژه"
			})]
		}),
		invoice.lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-16 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "هنوز آیتمی به فاکتور اضافه نشده"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-4 inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
				children: "انتخاب کار"
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-invoice mt-5 flex flex-col gap-2 px-5",
				children: invoice.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: line.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									formatToman(line.unitPrice),
									" / ",
									line.unit
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-medium tabular-nums text-primary",
								children: formatToman(line.amount)
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
						value: line.qty,
						onChange: (n) => setQty(line.itemId, n)
					})]
				}, line.itemId))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5 space-y-3 px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs text-muted",
							children: "ضریب منطقه / سختی کار"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: coef,
							onChange: (e) => setCoef(e.target.value),
							onBlur: persistCoef,
							inputMode: "decimal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs text-muted",
							children: "تخفیف (درصد)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: disc,
							onChange: (e) => setDisc(e.target.value),
							onBlur: persistDisc,
							inputMode: "decimal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs text-muted",
							children: "توضیحات"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: invoice.notes,
							onChange: (e) => setNotes(e.target.value),
							rows: 3,
							className: "w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5 mx-5 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "جمع جزء",
						value: formatToman(invoice.subtotal)
					}),
					invoice.coefficient !== 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: `با ضریب ${toFaDigits(invoice.coefficient)}`,
						value: formatToman(invoice.afterCoef)
					}) : null,
					invoice.discountPercent > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: `تخفیف ${toFaDigits(invoice.discountPercent)}٪`,
						value: formatToman(invoice.discountAmount)
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between border-t border-border pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "قابل پرداخت"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-lg font-semibold tabular-nums text-primary",
							children: [formatToman(invoice.total), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ms-1 text-xs font-normal text-muted",
								children: "تومان"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mt-5 grid grid-cols-3 gap-2 px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: save,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), "ذخیره"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: share,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }), "اشتراک"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "چاپ"]
					})
				]
			})
		] }),
		estimates.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "no-print mt-8 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-sm font-medium",
				children: "فاکتورهای ذخیره‌شده"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavedList, {})]
		}) : null
	] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between py-1 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			children: value
		})]
	});
}
function SavedList() {
	const estimates = useCalc((s) => s.estimates);
	const loadEstimate = useCalc((s) => s.loadEstimate);
	const deleteEstimate = useCalc((s) => s.deleteEstimate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-2",
		children: estimates.map((est) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "min-w-0 flex-1 text-start",
				onClick: () => {
					loadEstimate(est.id);
					toast.success("فاکتور بارگذاری شد");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-medium",
					children: est.customerName || est.projectName || "بدون نام"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-0.5 text-xs text-muted",
					children: [
						formatJalali(new Date(est.createdAt)),
						" · ",
						formatToman(est.total),
						" تومان"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => deleteEstimate(est.id),
				className: "flex size-11 items-center justify-center text-muted hover:text-danger",
				"aria-label": "حذف",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
			})]
		}, est.id))
	});
}
//#endregion
export { EstimatePage as component };
