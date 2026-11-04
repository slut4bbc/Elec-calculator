import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Hammer, D as Clock, E as Fan, F as Bell, M as Cable, P as Box, b as Lightbulb, c as Shield, d as Search, g as Phone, i as ToggleLeft, j as Camera, n as TriangleAlert, o as SquareStack, p as Ruler, s as Spline, t as Unplug, x as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { a as Input } from "./input-Bat-Nuif.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-field-BwYX85Rq.js
var import_jsx_runtime = require_jsx_runtime();
var MAP = {
	ruler: Ruler,
	hammer: Hammer,
	pipe: Spline,
	box: Box,
	duct: SquareStack,
	cable: Cable,
	unplug: Unplug,
	toggle: ToggleLeft,
	light: Lightbulb,
	panel: LayoutDashboard,
	shield: Shield,
	phone: Phone,
	fan: Fan,
	alert: TriangleAlert,
	camera: Camera,
	clock: Clock
};
function CategoryIcon({ name, className }) {
	const Icon = MAP[name] ?? Bell;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		strokeWidth: 1.75
	});
}
function SearchField({ value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			className: "ps-10",
			type: "search",
			enterKeyHint: "search"
		})]
	});
}
//#endregion
export { SearchField as n, CategoryIcon as t };
