import "react";
var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJSMin = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), __copyProps = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = __getOwnPropNames(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !__hasOwnProp.call(e, d) && d !== o && __defProp(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = __getOwnPropDesc(i, d)) || s.enumerable
	});
	return e;
}, __toESM = (n, r, a) => (a = n == null ? {} : __create(__getProtoOf(n)), __copyProps(r || !n || !n.__esModule ? __defProp(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((e) => {
	var t = Symbol.for("react.transitional.element");
	function n(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.jsx = n, e.jsxs = n;
})), import_jsx_runtime = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = require_react_jsx_runtime_production();
})))()), SimpleViteComponent = ({ message: e = "" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	style: {
		padding: "10px",
		border: "1px solid blue"
	},
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Vite Module Component" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
		"Pesan: **",
		e,
		"**"
	] })]
});
export { SimpleViteComponent };
