import Or, { useState as ke } from "react";
import { FontAwesomeIcon as xe } from "@fortawesome/react-fontawesome";
import { faTrash as nt, faFilter as at, faInfo as ot, faFillDrip as it, faEllipsisVertical as st, faChevronRight as Sr, faChevronLeft as ct, faInfoCircle as lt, faArrowsLeftRight as ut, faCalendar as ft, faChevronDown as dt } from "@fortawesome/free-solid-svg-icons";
import { Slider as wr, Label as Ke, SliderTrack as Pr, SliderThumb as kr, DatePicker as pt, Group as vt, DateInput as yt, DateSegment as ht, Button as We, Text as _t, FieldError as dr, Popover as mt, Dialog as bt, Calendar as gt, Heading as Tt, CalendarGrid as Ct, CalendarCell as Et } from "react-aria-components";
import { useHover as Rt } from "react-aria";
import { CalendarDate as xt } from "@internationalized/date";
import './index.css';function jt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var He = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function Ot() {
  if (pr) return Te;
  pr = 1;
  var r = Or, f = Symbol.for("react.element"), d = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(y, h, x) {
    var _, T = {}, $ = null, F = null;
    x !== void 0 && ($ = "" + x), h.key !== void 0 && ($ = "" + h.key), h.ref !== void 0 && (F = h.ref);
    for (_ in h) s.call(h, _) && !p.hasOwnProperty(_) && (T[_] = h[_]);
    if (y && y.defaultProps) for (_ in h = y.defaultProps, h) T[_] === void 0 && (T[_] = h[_]);
    return { $$typeof: f, type: y, key: $, ref: F, props: T, _owner: v.current };
  }
  return Te.Fragment = d, Te.jsx = b, Te.jsxs = b, Te;
}
var Ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function St() {
  return vr || (vr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Or, f = Symbol.for("react.element"), d = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = z && e[z] || e[M];
      return typeof t == "function" ? t : null;
    }
    var B = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), m = 1; m < t; m++)
          i[m - 1] = arguments[m];
        L("error", e, i);
      }
    }
    function L(e, t, i) {
      {
        var m = B.ReactDebugCurrentFrame, I = m.getStackAddendum();
        I !== "" && (t += "%s", i = i.concat([I]));
        var W = i.map(function(k) {
          return String(k);
        });
        W.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, W);
      }
    }
    var Y = !1, c = !1, ne = !1, he = !1, _e = !1, le;
    le = Symbol.for("react.module.reference");
    function me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === p || _e || e === v || e === x || e === _ || he || e === F || Y || c || ne || typeof e == "object" && e !== null && (e.$$typeof === $ || e.$$typeof === T || e.$$typeof === b || e.$$typeof === y || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function ue(e, t, i) {
      var m = e.displayName;
      if (m)
        return m;
      var I = t.displayName || t.name || "";
      return I !== "" ? i + "(" + I + ")" : i;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case d:
          return "Portal";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case x:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var t = e;
            return fe(t) + ".Consumer";
          case b:
            var i = e;
            return fe(i._context) + ".Provider";
          case h:
            return ue(e, e.render, "ForwardRef");
          case T:
            var m = e.displayName || null;
            return m !== null ? m : K(e.type) || "Memo";
          case $: {
            var I = e, W = I._payload, k = I._init;
            try {
              return K(k(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, Q, te, ie, de, n, l, j;
    function R() {
    }
    R.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, te = console.info, ie = console.warn, de = console.error, n = console.group, l = console.groupCollapsed, j = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: R,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ae++;
      }
    }
    function P() {
      {
        if (ae--, ae === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: Q
            }),
            info: X({}, e, {
              value: te
            }),
            warn: X({}, e, {
              value: ie
            }),
            error: X({}, e, {
              value: de
            }),
            group: X({}, e, {
              value: n
            }),
            groupCollapsed: X({}, e, {
              value: l
            }),
            groupEnd: X({}, e, {
              value: j
            })
          });
        }
        ae < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = B.ReactCurrentDispatcher, E;
    function O(e, t, i) {
      {
        if (E === void 0)
          try {
            throw Error();
          } catch (I) {
            var m = I.stack.trim().match(/\n( *(at )?)/);
            E = m && m[1] || "";
          }
        return `
` + E + e;
      }
    }
    var A = !1, S;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      S = new H();
    }
    function o(e, t) {
      if (!e || A)
        return "";
      {
        var i = S.get(e);
        if (i !== void 0)
          return i;
      }
      var m;
      A = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = C.current, C.current = null, g();
      try {
        if (t) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (Z) {
              m = Z;
            }
            Reflect.construct(e, [], k);
          } else {
            try {
              k.call();
            } catch (Z) {
              m = Z;
            }
            e.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            m = Z;
          }
          e();
        }
      } catch (Z) {
        if (Z && m && typeof Z.stack == "string") {
          for (var w = Z.stack.split(`
`), J = m.stack.split(`
`), G = w.length - 1, U = J.length - 1; G >= 1 && U >= 0 && w[G] !== J[U]; )
            U--;
          for (; G >= 1 && U >= 0; G--, U--)
            if (w[G] !== J[U]) {
              if (G !== 1 || U !== 1)
                do
                  if (G--, U--, U < 0 || w[G] !== J[U]) {
                    var re = `
` + w[G].replace(" at new ", " at ");
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && S.set(e, re), re;
                  }
                while (G >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        A = !1, C.current = W, P(), Error.prepareStackTrace = I;
      }
      var ye = e ? e.displayName || e.name : "", ce = ye ? O(ye) : "";
      return typeof e == "function" && S.set(e, ce), ce;
    }
    function ee(e, t, i) {
      return o(e, !1);
    }
    function pe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function se(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return o(e, pe(e));
      if (typeof e == "string")
        return O(e);
      switch (e) {
        case x:
          return O("Suspense");
        case _:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ee(e.render);
          case T:
            return se(e.type, t, i);
          case $: {
            var m = e, I = m._payload, W = m._init;
            try {
              return se(W(I), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Qe = {}, er = B.ReactDebugCurrentFrame;
    function je(e) {
      if (e) {
        var t = e._owner, i = se(e.type, e._source, t ? t.type : null);
        er.setExtraStackFrame(i);
      } else
        er.setExtraStackFrame(null);
    }
    function Nr(e, t, i, m, I) {
      {
        var W = Function.call.bind(be);
        for (var k in e)
          if (W(e, k)) {
            var w = void 0;
            try {
              if (typeof e[k] != "function") {
                var J = Error((m || "React class") + ": " + i + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              w = e[k](t, k, m, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              w = G;
            }
            w && !(w instanceof Error) && (je(I), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", i, k, typeof w), je(null)), w instanceof Error && !(w.message in Qe) && (Qe[w.message] = !0, je(I), q("Failed %s type: %s", i, w.message), je(null));
          }
      }
    }
    var Dr = Array.isArray;
    function Ae(e) {
      return Dr(e);
    }
    function Lr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Wr(e) {
      try {
        return rr(e), !1;
      } catch {
        return !0;
      }
    }
    function rr(e) {
      return "" + e;
    }
    function tr(e) {
      if (Wr(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lr(e)), rr(e);
    }
    var ge = B.ReactCurrentOwner, Mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nr, ar, $e;
    $e = {};
    function Fr(e) {
      if (be.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function qr(e) {
      if (be.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Yr(e, t) {
      if (typeof e.ref == "string" && ge.current && t && ge.current.stateNode !== t) {
        var i = K(ge.current.type);
        $e[i] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), e.ref), $e[i] = !0);
      }
    }
    function Br(e, t) {
      {
        var i = function() {
          nr || (nr = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Gr(e, t) {
      {
        var i = function() {
          ar || (ar = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Vr = function(e, t, i, m, I, W, k) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: k,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Ur(e, t, i, m, I) {
      {
        var W, k = {}, w = null, J = null;
        i !== void 0 && (tr(i), w = "" + i), qr(t) && (tr(t.key), w = "" + t.key), Fr(t) && (J = t.ref, Yr(t, I));
        for (W in t)
          be.call(t, W) && !Mr.hasOwnProperty(W) && (k[W] = t[W]);
        if (e && e.defaultProps) {
          var G = e.defaultProps;
          for (W in G)
            k[W] === void 0 && (k[W] = G[W]);
        }
        if (w || J) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && Br(k, U), J && Gr(k, U);
        }
        return Vr(e, w, J, I, m, ge.current, k);
      }
    }
    var Ie = B.ReactCurrentOwner, or = B.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var t = e._owner, i = se(e.type, e._source, t ? t.type : null);
        or.setExtraStackFrame(i);
      } else
        or.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function De(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function ir() {
      {
        if (Ie.current) {
          var e = K(Ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function zr(e) {
      return "";
    }
    var sr = {};
    function Hr(e) {
      {
        var t = ir();
        if (!t) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (t = `

Check the top-level render call using <` + i + ">.");
        }
        return t;
      }
    }
    function cr(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Hr(t);
        if (sr[i])
          return;
        sr[i] = !0;
        var m = "";
        e && e._owner && e._owner !== Ie.current && (m = " It was passed a child from " + K(e._owner.type) + "."), ve(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, m), ve(null);
      }
    }
    function lr(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ae(e))
          for (var i = 0; i < e.length; i++) {
            var m = e[i];
            De(m) && cr(m, t);
          }
        else if (De(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = V(e);
          if (typeof I == "function" && I !== e.entries)
            for (var W = I.call(e), k; !(k = W.next()).done; )
              De(k.value) && cr(k.value, t);
        }
      }
    }
    function Jr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var i;
        if (typeof t == "function")
          i = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === T))
          i = t.propTypes;
        else
          return;
        if (i) {
          var m = K(t);
          Nr(i, e.props, "prop", m, e);
        } else if (t.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var I = K(t);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kr(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var m = t[i];
          if (m !== "children" && m !== "key") {
            ve(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), ve(null);
            break;
          }
        }
        e.ref !== null && (ve(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var ur = {};
    function fr(e, t, i, m, I, W) {
      {
        var k = me(e);
        if (!k) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = zr();
          J ? w += J : w += ir();
          var G;
          e === null ? G = "null" : Ae(e) ? G = "array" : e !== void 0 && e.$$typeof === f ? (G = "<" + (K(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : G = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, w);
        }
        var U = Ur(e, t, i, I, W);
        if (U == null)
          return U;
        if (k) {
          var re = t.children;
          if (re !== void 0)
            if (m)
              if (Ae(re)) {
                for (var ye = 0; ye < re.length; ye++)
                  lr(re[ye], e);
                Object.freeze && Object.freeze(re);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr(re, e);
        }
        if (be.call(t, "key")) {
          var ce = K(e), Z = Object.keys(t).filter(function(tt) {
            return tt !== "key";
          }), Le = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[ce + Le]) {
            var rt = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Le, ce, rt, ce), ur[ce + Le] = !0;
          }
        }
        return e === s ? Kr(U) : Jr(U), U;
      }
    }
    function Xr(e, t, i) {
      return fr(e, t, i, !0);
    }
    function Zr(e, t, i) {
      return fr(e, t, i, !1);
    }
    var Qr = Zr, et = Xr;
    Ce.Fragment = s, Ce.jsx = Qr, Ce.jsxs = et;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? He.exports = Ot() : He.exports = St();
var a = He.exports, Je = { exports: {} }, Oe = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function wt() {
  if (yr) return N;
  yr = 1;
  var r = typeof Symbol == "function" && Symbol.for, f = r ? Symbol.for("react.element") : 60103, d = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, b = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, x = r ? Symbol.for("react.concurrent_mode") : 60111, _ = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, $ = r ? Symbol.for("react.suspense_list") : 60120, F = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
  function L(c) {
    if (typeof c == "object" && c !== null) {
      var ne = c.$$typeof;
      switch (ne) {
        case f:
          switch (c = c.type, c) {
            case h:
            case x:
            case s:
            case p:
            case v:
            case T:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case y:
                case _:
                case z:
                case F:
                case b:
                  return c;
                default:
                  return ne;
              }
          }
        case d:
          return ne;
      }
    }
  }
  function Y(c) {
    return L(c) === x;
  }
  return N.AsyncMode = h, N.ConcurrentMode = x, N.ContextConsumer = y, N.ContextProvider = b, N.Element = f, N.ForwardRef = _, N.Fragment = s, N.Lazy = z, N.Memo = F, N.Portal = d, N.Profiler = p, N.StrictMode = v, N.Suspense = T, N.isAsyncMode = function(c) {
    return Y(c) || L(c) === h;
  }, N.isConcurrentMode = Y, N.isContextConsumer = function(c) {
    return L(c) === y;
  }, N.isContextProvider = function(c) {
    return L(c) === b;
  }, N.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === f;
  }, N.isForwardRef = function(c) {
    return L(c) === _;
  }, N.isFragment = function(c) {
    return L(c) === s;
  }, N.isLazy = function(c) {
    return L(c) === z;
  }, N.isMemo = function(c) {
    return L(c) === F;
  }, N.isPortal = function(c) {
    return L(c) === d;
  }, N.isProfiler = function(c) {
    return L(c) === p;
  }, N.isStrictMode = function(c) {
    return L(c) === v;
  }, N.isSuspense = function(c) {
    return L(c) === T;
  }, N.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === s || c === x || c === p || c === v || c === T || c === $ || typeof c == "object" && c !== null && (c.$$typeof === z || c.$$typeof === F || c.$$typeof === b || c.$$typeof === y || c.$$typeof === _ || c.$$typeof === V || c.$$typeof === B || c.$$typeof === q || c.$$typeof === M);
  }, N.typeOf = L, N;
}
var D = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function Pt() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, f = r ? Symbol.for("react.element") : 60103, d = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, b = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, x = r ? Symbol.for("react.concurrent_mode") : 60111, _ = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, $ = r ? Symbol.for("react.suspense_list") : 60120, F = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
    function L(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === s || o === x || o === p || o === v || o === T || o === $ || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === F || o.$$typeof === b || o.$$typeof === y || o.$$typeof === _ || o.$$typeof === V || o.$$typeof === B || o.$$typeof === q || o.$$typeof === M);
    }
    function Y(o) {
      if (typeof o == "object" && o !== null) {
        var ee = o.$$typeof;
        switch (ee) {
          case f:
            var pe = o.type;
            switch (pe) {
              case h:
              case x:
              case s:
              case p:
              case v:
              case T:
                return pe;
              default:
                var se = pe && pe.$$typeof;
                switch (se) {
                  case y:
                  case _:
                  case z:
                  case F:
                  case b:
                    return se;
                  default:
                    return ee;
                }
            }
          case d:
            return ee;
        }
      }
    }
    var c = h, ne = x, he = y, _e = b, le = f, me = _, ue = s, fe = z, K = F, X = d, ae = p, Q = v, te = T, ie = !1;
    function de(o) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(o) || Y(o) === h;
    }
    function n(o) {
      return Y(o) === x;
    }
    function l(o) {
      return Y(o) === y;
    }
    function j(o) {
      return Y(o) === b;
    }
    function R(o) {
      return typeof o == "object" && o !== null && o.$$typeof === f;
    }
    function g(o) {
      return Y(o) === _;
    }
    function P(o) {
      return Y(o) === s;
    }
    function C(o) {
      return Y(o) === z;
    }
    function E(o) {
      return Y(o) === F;
    }
    function O(o) {
      return Y(o) === d;
    }
    function A(o) {
      return Y(o) === p;
    }
    function S(o) {
      return Y(o) === v;
    }
    function H(o) {
      return Y(o) === T;
    }
    D.AsyncMode = c, D.ConcurrentMode = ne, D.ContextConsumer = he, D.ContextProvider = _e, D.Element = le, D.ForwardRef = me, D.Fragment = ue, D.Lazy = fe, D.Memo = K, D.Portal = X, D.Profiler = ae, D.StrictMode = Q, D.Suspense = te, D.isAsyncMode = de, D.isConcurrentMode = n, D.isContextConsumer = l, D.isContextProvider = j, D.isElement = R, D.isForwardRef = g, D.isFragment = P, D.isLazy = C, D.isMemo = E, D.isPortal = O, D.isProfiler = A, D.isStrictMode = S, D.isSuspense = H, D.isValidElementType = L, D.typeOf = Y;
  }()), D;
}
var _r;
function Ar() {
  return _r || (_r = 1, process.env.NODE_ENV === "production" ? Oe.exports = wt() : Oe.exports = Pt()), Oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Me, mr;
function kt() {
  if (mr) return Me;
  mr = 1;
  var r = Object.getOwnPropertySymbols, f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
  function s(p) {
    if (p == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(p);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var p = new String("abc");
      if (p[5] = "de", Object.getOwnPropertyNames(p)[0] === "5")
        return !1;
      for (var b = {}, y = 0; y < 10; y++)
        b["_" + String.fromCharCode(y)] = y;
      var h = Object.getOwnPropertyNames(b).map(function(_) {
        return b[_];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var x = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        x[_] = _;
      }), Object.keys(Object.assign({}, x)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Me = v() ? Object.assign : function(p, b) {
    for (var y, h = s(p), x, _ = 1; _ < arguments.length; _++) {
      y = Object(arguments[_]);
      for (var T in y)
        f.call(y, T) && (h[T] = y[T]);
      if (r) {
        x = r(y);
        for (var $ = 0; $ < x.length; $++)
          d.call(y, x[$]) && (h[x[$]] = y[x[$]]);
      }
    }
    return h;
  }, Me;
}
var Fe, br;
function Xe() {
  if (br) return Fe;
  br = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fe = r, Fe;
}
var qe, gr;
function $r() {
  return gr || (gr = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var Ye, Tr;
function At() {
  if (Tr) return Ye;
  Tr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var f = Xe(), d = {}, s = $r();
    r = function(p) {
      var b = "Warning: " + p;
      typeof console < "u" && console.error(b);
      try {
        throw new Error(b);
      } catch {
      }
    };
  }
  function v(p, b, y, h, x) {
    if (process.env.NODE_ENV !== "production") {
      for (var _ in p)
        if (s(p, _)) {
          var T;
          try {
            if (typeof p[_] != "function") {
              var $ = Error(
                (h || "React class") + ": " + y + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw $.name = "Invariant Violation", $;
            }
            T = p[_](b, _, h, y, null, f);
          } catch (z) {
            T = z;
          }
          if (T && !(T instanceof Error) && r(
            (h || "React class") + ": type specification of " + y + " `" + _ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in d)) {
            d[T.message] = !0;
            var F = x ? x() : "";
            r(
              "Failed " + y + " type: " + T.message + (F ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (d = {});
  }, Ye = v, Ye;
}
var Be, Cr;
function $t() {
  if (Cr) return Be;
  Cr = 1;
  var r = Ar(), f = kt(), d = Xe(), s = $r(), v = At(), p = function() {
  };
  process.env.NODE_ENV !== "production" && (p = function(y) {
    var h = "Warning: " + y;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function b() {
    return null;
  }
  return Be = function(y, h) {
    var x = typeof Symbol == "function" && Symbol.iterator, _ = "@@iterator";
    function T(n) {
      var l = n && (x && n[x] || n[_]);
      if (typeof l == "function")
        return l;
    }
    var $ = "<<anonymous>>", F = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: q(),
      arrayOf: L,
      element: Y(),
      elementType: c(),
      instanceOf: ne,
      node: me(),
      objectOf: _e,
      oneOf: he,
      oneOfType: le,
      shape: fe,
      exact: K
    };
    function z(n, l) {
      return n === l ? n !== 0 || 1 / n === 1 / l : n !== n && l !== l;
    }
    function M(n, l) {
      this.message = n, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function V(n) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, j = 0;
      function R(P, C, E, O, A, S, H) {
        if (O = O || $, S = S || E, H !== d) {
          if (h) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + E;
            !l[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ee] = !0, j++);
          }
        }
        return C[E] == null ? P ? C[E] === null ? new M("The " + A + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new M("The " + A + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : n(C, E, O, A, S);
      }
      var g = R.bind(null, !1);
      return g.isRequired = R.bind(null, !0), g;
    }
    function B(n) {
      function l(j, R, g, P, C, E) {
        var O = j[R], A = Q(O);
        if (A !== n) {
          var S = te(O);
          return new M(
            "Invalid " + P + " `" + C + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("`" + n + "`."),
            { expectedType: n }
          );
        }
        return null;
      }
      return V(l);
    }
    function q() {
      return V(b);
    }
    function L(n) {
      function l(j, R, g, P, C) {
        if (typeof n != "function")
          return new M("Property `" + C + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var E = j[R];
        if (!Array.isArray(E)) {
          var O = Q(E);
          return new M("Invalid " + P + " `" + C + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an array."));
        }
        for (var A = 0; A < E.length; A++) {
          var S = n(E, A, g, P, C + "[" + A + "]", d);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return V(l);
    }
    function Y() {
      function n(l, j, R, g, P) {
        var C = l[j];
        if (!y(C)) {
          var E = Q(C);
          return new M("Invalid " + g + " `" + P + "` of type " + ("`" + E + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(n);
    }
    function c() {
      function n(l, j, R, g, P) {
        var C = l[j];
        if (!r.isValidElementType(C)) {
          var E = Q(C);
          return new M("Invalid " + g + " `" + P + "` of type " + ("`" + E + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(n);
    }
    function ne(n) {
      function l(j, R, g, P, C) {
        if (!(j[R] instanceof n)) {
          var E = n.name || $, O = de(j[R]);
          return new M("Invalid " + P + " `" + C + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected ") + ("instance of `" + E + "`."));
        }
        return null;
      }
      return V(l);
    }
    function he(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), b;
      function l(j, R, g, P, C) {
        for (var E = j[R], O = 0; O < n.length; O++)
          if (z(E, n[O]))
            return null;
        var A = JSON.stringify(n, function(H, o) {
          var ee = te(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new M("Invalid " + P + " `" + C + "` of value `" + String(E) + "` " + ("supplied to `" + g + "`, expected one of " + A + "."));
      }
      return V(l);
    }
    function _e(n) {
      function l(j, R, g, P, C) {
        if (typeof n != "function")
          return new M("Property `" + C + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var E = j[R], O = Q(E);
        if (O !== "object")
          return new M("Invalid " + P + " `" + C + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an object."));
        for (var A in E)
          if (s(E, A)) {
            var S = n(E, A, g, P, C + "." + A, d);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return V(l);
    }
    function le(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), b;
      for (var l = 0; l < n.length; l++) {
        var j = n[l];
        if (typeof j != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(j) + " at index " + l + "."
          ), b;
      }
      function R(g, P, C, E, O) {
        for (var A = [], S = 0; S < n.length; S++) {
          var H = n[S], o = H(g, P, C, E, O, d);
          if (o == null)
            return null;
          o.data && s(o.data, "expectedType") && A.push(o.data.expectedType);
        }
        var ee = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new M("Invalid " + E + " `" + O + "` supplied to " + ("`" + C + "`" + ee + "."));
      }
      return V(R);
    }
    function me() {
      function n(l, j, R, g, P) {
        return X(l[j]) ? null : new M("Invalid " + g + " `" + P + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return V(n);
    }
    function ue(n, l, j, R, g) {
      return new M(
        (n || "React class") + ": " + l + " type `" + j + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function fe(n) {
      function l(j, R, g, P, C) {
        var E = j[R], O = Q(E);
        if (O !== "object")
          return new M("Invalid " + P + " `" + C + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var A in n) {
          var S = n[A];
          if (typeof S != "function")
            return ue(g, P, C, A, te(S));
          var H = S(E, A, g, P, C + "." + A, d);
          if (H)
            return H;
        }
        return null;
      }
      return V(l);
    }
    function K(n) {
      function l(j, R, g, P, C) {
        var E = j[R], O = Q(E);
        if (O !== "object")
          return new M("Invalid " + P + " `" + C + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        var A = f({}, j[R], n);
        for (var S in A) {
          var H = n[S];
          if (s(n, S) && typeof H != "function")
            return ue(g, P, C, S, te(H));
          if (!H)
            return new M(
              "Invalid " + P + " `" + C + "` key `" + S + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(j[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var o = H(E, S, g, P, C + "." + S, d);
          if (o)
            return o;
        }
        return null;
      }
      return V(l);
    }
    function X(n) {
      switch (typeof n) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !n;
        case "object":
          if (Array.isArray(n))
            return n.every(X);
          if (n === null || y(n))
            return !0;
          var l = T(n);
          if (l) {
            var j = l.call(n), R;
            if (l !== n.entries) {
              for (; !(R = j.next()).done; )
                if (!X(R.value))
                  return !1;
            } else
              for (; !(R = j.next()).done; ) {
                var g = R.value;
                if (g && !X(g[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(n, l) {
      return n === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function Q(n) {
      var l = typeof n;
      return Array.isArray(n) ? "array" : n instanceof RegExp ? "object" : ae(l, n) ? "symbol" : l;
    }
    function te(n) {
      if (typeof n > "u" || n === null)
        return "" + n;
      var l = Q(n);
      if (l === "object") {
        if (n instanceof Date)
          return "date";
        if (n instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function ie(n) {
      var l = te(n);
      switch (l) {
        case "array":
        case "object":
          return "an " + l;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + l;
        default:
          return l;
      }
    }
    function de(n) {
      return !n.constructor || !n.constructor.name ? $ : n.constructor.name;
    }
    return F.checkPropTypes = v, F.resetWarningCache = v.resetWarningCache, F.PropTypes = F, F;
  }, Be;
}
var Ge, Er;
function It() {
  if (Er) return Ge;
  Er = 1;
  var r = Xe();
  function f() {
  }
  function d() {
  }
  return d.resetWarningCache = f, Ge = function() {
    function s(b, y, h, x, _, T) {
      if (T !== r) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    s.isRequired = s;
    function v() {
      return s;
    }
    var p = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: v,
      element: s,
      elementType: s,
      instanceOf: v,
      node: s,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: d,
      resetWarningCache: f
    };
    return p.PropTypes = p, p;
  }, Ge;
}
if (process.env.NODE_ENV !== "production") {
  var Nt = Ar(), Dt = !0;
  Je.exports = $t()(Nt.isElement, Dt);
} else
  Je.exports = It()();
var Lt = Je.exports;
const u = /* @__PURE__ */ jt(Lt), Wt = "_iconButton_1963e_1", Mt = {
  iconButton: Wt
}, Ft = {
  trash: nt,
  filter: at,
  info: ot,
  fill: it,
  ellipsis: st,
  chevronRight: Sr,
  chevronLeft: ct
}, Ze = ({ onClick: r, iconName: f }) => /* @__PURE__ */ a.jsx("div", { className: Mt.iconButton, children: /* @__PURE__ */ a.jsx("button", { "aria-label": f, type: "button", onClick: r, children: /* @__PURE__ */ a.jsx(xe, { icon: Ft[f] }) }) });
Ze.propTypes = {
  iconName: u.oneOf([
    "trash",
    "filter",
    "info",
    "fill",
    "ellipsis",
    "chevronLeft",
    "chevronRight"
  ]),
  onClick: u.func.isRequired
};
const qt = "_layerButtonReel_1o59k_1", Yt = {
  layerButtonReel: qt
}, Bt = ({ buttons: r }) => /* @__PURE__ */ a.jsx("div", { className: Yt.layerButtonReel, children: r && Object.keys(r).map((f) => /* @__PURE__ */ a.jsx(Ze, { iconName: f, onClick: r[f] })) });
Bt.propTypes = {
  buttons: u.objectOf(u.func)
};
const Gt = "_layerToggle_gvlf4_7", Vt = "_slider_gvlf4_29", Ve = {
  layerToggle: Gt,
  switch: "_switch_gvlf4_12",
  slider: Vt
}, Ir = ({ layerName: r, isActive: f = !1, onChange: d }) => /* @__PURE__ */ a.jsx("div", { className: Ve.layerToggle, children: /* @__PURE__ */ a.jsxs("div", { className: Ve.switch, children: [
  /* @__PURE__ */ a.jsx(
    "input",
    {
      type: "checkbox",
      value: r,
      checked: f,
      onChange: d
    }
  ),
  /* @__PURE__ */ a.jsx("span", { className: Ve.slider })
] }) });
Ir.propTypes = {
  layerName: u.string,
  isActive: u.bool,
  onChange: u.func.isRequired
};
const Ut = "_layerCard_tkd9t_1", zt = "_layerCardAttributionWrapper_tkd9t_11", Ht = "_layerCardAttribution_tkd9t_11", Jt = "_layerCardHeader_tkd9t_25", Kt = "_layerCardTextWrapper_tkd9t_34", Xt = "_layerCardTitle_tkd9t_42", Zt = "_layerCardDescription_tkd9t_50", Qt = "_layerCardControls_tkd9t_59", en = "_layerCardToggle_tkd9t_64", rn = "_layerCardContent_tkd9t_69", tn = "_layerCardInfoIcon_tkd9t_85", oe = {
  layerCard: Ut,
  layerCardAttributionWrapper: zt,
  layerCardAttribution: Ht,
  layerCardHeader: Jt,
  layerCardTextWrapper: Kt,
  layerCardTitle: Xt,
  layerCardDescription: Zt,
  layerCardControls: Qt,
  layerCardToggle: en,
  layerCardContent: rn,
  layerCardInfoIcon: tn
}, nn = ({ layerName: r, isActive: f, onChange: d, attribution: s, description: v, children: p }) => {
  const [b, y] = ke(!1);
  return /* @__PURE__ */ a.jsxs("div", { className: oe.layerCard, children: [
    /* @__PURE__ */ a.jsxs("div", { className: oe.layerCardHeader, children: [
      /* @__PURE__ */ a.jsx("div", { className: oe.layerCardTextWrapper, children: /* @__PURE__ */ a.jsx("span", { className: oe.layerCardTitle, children: r }) }),
      /* @__PURE__ */ a.jsx(xe, { className: oe.layerCardInfoIcon, onClick: () => y(!b), icon: lt }),
      d && /* @__PURE__ */ a.jsx(
        Ir,
        {
          layerName: r,
          isActive: f,
          onChange: d
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: oe.layerCardContent, children: [
      v && b && /* @__PURE__ */ a.jsx("span", { className: oe.layerCardDescription, children: v }),
      s && f && /* @__PURE__ */ a.jsx("div", { className: oe.layerCardAttributionWrapper, children: /* @__PURE__ */ a.jsxs("span", { className: oe.layerCardAttribution, children: [
        "Source: ",
        /* @__PURE__ */ a.jsx("a", { href: s.url, children: s.text })
      ] }) }),
      p && p
    ] })
  ] });
};
nn.propTypes = {
  layerName: u.string.isRequired,
  isActive: u.bool,
  onChange: u.func.isRequired,
  description: u.string,
  attribution: u.objectOf({
    url: u.string,
    text: u.string
  }),
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ])
};
const an = "_swatchContainer_771fp_2", on = "_swatch_771fp_2", sn = "_swatchLabel_771fp_18", cn = "_swatchValue_771fp_24", Se = {
  swatchContainer: an,
  swatch: on,
  swatchLabel: sn,
  swatchValue: cn
}, ln = ({ color: r, label: f = "", value: d, units: s = "" }) => /* @__PURE__ */ a.jsxs("div", { className: Se.swatchContainer, children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: Se.swatch,
      style: { backgroundColor: r }
    }
  ),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-label", className: Se.swatchLabel, children: f }),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-value", className: Se.swatchValue, children: d !== void 0 && `${d}${s}` })
] }), un = "_swatchLegend_qiaru_1", fn = {
  swatchLegend: un
}, dn = ({ swatches: r }) => /* @__PURE__ */ a.jsx("div", { className: fn.swatchLegend, children: r && r.map((f) => {
  const { color: d, label: s, value: v, units: p } = f;
  return /* @__PURE__ */ a.jsx(
    ln,
    {
      label: s,
      color: d,
      value: v,
      units: p
    },
    s
  );
}) });
dn.propTypes = {
  swatches: u.arrayOf(u.objectOf(u.string)).isRequired
};
const pn = "_slider_1bnet_1", vn = "_sliderLabel_1bnet_16", yn = "_sliderThumb_1bnet_20", hn = "_sliderTrack_1bnet_41", _n = "_comparisonControl_1bnet_66", Ee = {
  slider: pn,
  sliderLabel: vn,
  sliderThumb: yn,
  sliderTrack: hn,
  comparisonControl: _n
}, oa = ({
  label: r,
  showLabel: f = !0,
  onChange: d,
  value: s = 50,
  ...v
}) => /* @__PURE__ */ a.jsx("div", { className: Ee.comparisonControl, children: /* @__PURE__ */ a.jsxs(wr, { maxValue: 94, minValue: 6, step: 0.1, className: Ee.slider, "aria-label": !f && typeof r == "string" ? r : void 0, onChange: d, value: s, ...v, children: [
  f && /* @__PURE__ */ a.jsx(Ke, { className: Ee.sliderLabel, children: r }),
  /* @__PURE__ */ a.jsx(Pr, { className: Ee.sliderTrack, children: /* @__PURE__ */ a.jsx(kr, { className: Ee.sliderThumb, children: /* @__PURE__ */ a.jsx(xe, { color: "white", icon: ut }) }) })
] }) }), mn = "_datePicker_ywin1_1 react-aria-DatePicker", bn = "_dateInput_ywin1_12 react-aria-DateInput", gn = "_hoverDatepicker_ywin1_17", Ue = {
  datePicker: mn,
  dateInput: bn,
  hoverDatepicker: gn
}, ze = (r) => new xt(r.getFullYear(), r.getMonth() + 1, r.getDate()), ia = ({
  label: r,
  helperText: f,
  errorMessage: d,
  value: s,
  onChange: v,
  "aria-label": p,
  "aria-labelledby": b,
  className: y,
  maxValue: h,
  minValue: x,
  ..._
}) => {
  const [T, $] = ke(!1), { hoverProps: F, isHovered: z } = Rt({}), M = s ? ze(s) : null, V = h ? ze(h) : null, B = x ? ze(x) : null, q = (L) => {
    if (L) {
      const Y = new Date(L.toString());
      v(Y);
    } else
      v(null);
  };
  return /* @__PURE__ */ a.jsxs(
    pt,
    {
      className: `${Ue.datePicker} ${y || ""}`.trim(),
      value: M,
      onChange: q,
      "aria-label": p,
      "aria-labelledby": b,
      maxValue: V,
      minValue: B,
      ..._,
      children: [
        r && /* @__PURE__ */ a.jsx(Ke, { children: r }),
        /* @__PURE__ */ a.jsxs(vt, { children: [
          /* @__PURE__ */ a.jsx(
            yt,
            {
              className: `${z || T ? Ue.hoverDatepicker : ""} ${Ue.dateInput}`.trim(),
              ...F,
              children: (L) => /* @__PURE__ */ a.jsx(ht, { segment: L })
            }
          ),
          /* @__PURE__ */ a.jsx(
            We,
            {
              "aria-label": "Open calendar",
              onHoverChange: (L) => $(L),
              children: /* @__PURE__ */ a.jsx(xe, { icon: ft })
            }
          )
        ] }),
        f && /* @__PURE__ */ a.jsx(_t, { slot: "description", children: f }),
        d ? /* @__PURE__ */ a.jsx(dr, { children: d }) : /* @__PURE__ */ a.jsx(dr, {}),
        /* @__PURE__ */ a.jsx(mt, { children: /* @__PURE__ */ a.jsx(bt, { children: /* @__PURE__ */ a.jsxs(gt, { children: [
          /* @__PURE__ */ a.jsxs("header", { children: [
            /* @__PURE__ */ a.jsx(We, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ a.jsx(Tt, {}),
            /* @__PURE__ */ a.jsx(We, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ a.jsx(Ct, { children: (L) => /* @__PURE__ */ a.jsx(Et, { date: L }) })
        ] }) }) })
      ]
    }
  );
}, Tn = "_gradient_1w8qh_1", Cn = "_gradientNumbers_1w8qh_6", En = "_gradientLegend_1w8qh_11", we = {
  gradient: Tn,
  gradientNumbers: Cn,
  gradientLegend: En
}, Rn = ({
  title: r,
  startColor: f = "red",
  endColor: d = "yellow",
  startNo: s,
  endNo: v,
  titleBelow: p = !1,
  bins: b = 0,
  precision: y = 2,
  units: h
}) => {
  const x = b > 0 ? Array(b - 1).fill(0).map((_, T) => {
    const $ = (s + (v - s) / b * (T + 1)).toPrecision(y);
    return /* @__PURE__ */ a.jsx("span", { children: $ }, $);
  }) : [];
  return /* @__PURE__ */ a.jsxs("div", { className: "gradient-box", children: [
    !p && /* @__PURE__ */ a.jsxs("div", { className: "ui-title", children: [
      " ",
      r
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: we.gradientLegend, children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: we.gradient,
          style: {
            background: `linear-gradient(to right, ${f} , ${d})`
          }
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: we.gradientNumbers, children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          s,
          " ",
          h
        ] }),
        x,
        /* @__PURE__ */ a.jsxs("span", { children: [
          v,
          " ",
          h
        ] })
      ] }),
      p && /* @__PURE__ */ a.jsxs("div", { className: we.uiTitle, children: [
        " ",
        r
      ] })
    ] })
  ] });
};
Rn.propTypes = {
  title: u.string,
  startColor: u.string,
  endColor: u.string,
  startNo: u.number,
  endNo: u.number,
  titleBelow: u.bool,
  bins: u.number,
  precision: u.number,
  units: u.string
};
const xn = "_slider_14ti7_1", jn = "_sliderLabel_14ti7_16", On = "_sliderThumb_14ti7_20", Sn = "_sliderTrack_14ti7_41", Pe = {
  slider: xn,
  sliderLabel: jn,
  sliderThumb: On,
  sliderTrack: Sn
}, wn = ({
  className: r,
  label: f = "",
  onChange: d,
  minValue: s,
  maxValue: v,
  step: p,
  value: b = 0,
  showLabel: y,
  ...h
}) => /* @__PURE__ */ a.jsxs(wr, { maxValue: v, minValue: s, step: p, className: `${Pe.slider} ${r || ""}`.trim(), "aria-label": !y && typeof f == "string" ? f : void 0, onChange: d, value: b, ...h, children: [
  y && /* @__PURE__ */ a.jsx(Ke, { className: Pe.sliderLabel, children: f }),
  /* @__PURE__ */ a.jsx(Pr, { className: Pe.sliderTrack, children: /* @__PURE__ */ a.jsx(kr, { className: Pe.sliderThumb }) })
] }), Pn = "_layerGroupWrapper_1p831_1", kn = "_layerGroupButton_1p831_5", An = "_layerGroupChevron_1p831_17", $n = "_layerGroupName_1p831_30", In = "_layerGroupChildren_1p831_42", Re = {
  layerGroupWrapper: Pn,
  layerGroupButton: kn,
  layerGroupChevron: An,
  layerGroupName: $n,
  layerGroupChildren: In
}, Nn = ({ groupName: r, children: f }) => {
  const [d, s] = ke(!1), v = () => {
    s(!d);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: Re.layerGroupWrapper, children: [
    /* @__PURE__ */ a.jsxs("button", { type: "button", className: Re.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ a.jsx("div", { className: Re.layerGroupChevron, children: /* @__PURE__ */ a.jsx(xe, { size: "sm", fixedWidth: !0, icon: d ? dt : Sr }) }),
      /* @__PURE__ */ a.jsx("span", { className: Re.layerGroupName, children: r })
    ] }),
    d && /* @__PURE__ */ a.jsx("div", { className: Re.layerGroupChildren, children: f })
  ] });
};
Nn.propTypes = {
  groupName: u.string,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Dn = "_mapWrapper_1gyf5_1", Ln = "_mapContainer_1gyf5_10", Rr = {
  mapWrapper: Dn,
  mapContainer: Ln
}, Wn = ({ mapContainer: r, id: f, children: d }) => /* @__PURE__ */ a.jsxs("div", { className: Rr.mapWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: Rr.mapContainer, id: f, ref: r }),
  d
] });
Wn.propTypes = {
  mapContainer: u.oneOfType([
    u.func,
    u.shape({ current: u.instanceOf(Element) })
  ]),
  children: u.node,
  id: u.string
};
const Mn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "nav-container", children: r });
Mn.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Fn = "_infoPanelContainer_gnoj6_1", qn = "_topLeft_gnoj6_13", Yn = "_topRight_gnoj6_18", Bn = "_centerLeft_gnoj6_23", Gn = "_centerRight_gnoj6_28", Vn = "_bottomLeft_gnoj6_33", Un = "_bottomRight_gnoj6_38", xr = {
  infoPanelContainer: Fn,
  topLeft: qn,
  topRight: Yn,
  centerLeft: Bn,
  centerRight: Gn,
  bottomLeft: Vn,
  bottomRight: Un
}, sa = ({ children: r, position: f = "centerRight" }) => /* @__PURE__ */ a.jsx("aside", { className: `${xr.infoPanelContainer} ${xr[f]}`, children: r }), zn = ({ showToggle: r, children: f }) => {
  const [d, s] = ke(!1), v = `sidebar ${d ? "closed" : ""}`, p = () => {
    s(!d);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ a.jsx("div", { className: v, children: f }),
    r && /* @__PURE__ */ a.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ a.jsx(
      Ze,
      {
        onClick: p,
        iconName: d ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
zn.propTypes = {
  showToggle: u.bool,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Hn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "layout-stacked", children: r });
Hn.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Jn = ({ align: r = "left", children: f }) => /* @__PURE__ */ a.jsx("div", { className: `layout-standard ${r}`, children: f });
Jn.propTypes = {
  align: u.oneOf(["left", "right"]),
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Kn = "_sliderControlWrapper_2tznx_1", Xn = "_sliderLabel_2tznx_9", jr = {
  sliderControlWrapper: Kn,
  sliderLabel: Xn
}, Zn = ({ title: r, units: f, sliderConfig: d }) => /* @__PURE__ */ a.jsxs("div", { className: jr.sliderControlWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ a.jsx("div", {}),
  d && d.map((s) => {
    const { label: v } = s;
    return /* @__PURE__ */ a.jsx("div", { className: jr.sliderLabel, children: v });
  }),
  d && d.map((s) => {
    const { onChange: v, min: p, max: b, step: y, value: h } = s;
    return /* @__PURE__ */ a.jsx(
      wn,
      {
        onChange: v,
        units: f,
        min: p,
        max: b,
        step: y,
        value: h
      }
    );
  })
] });
Zn.propTypes = {
  title: u.string.isRequired,
  units: u.string.isRequired,
  sliderConfig: u.arrayOf(u.objectOf(u.string)).isRequired
};
export {
  oa as ComparisonControl,
  ia as DatePicker,
  Rn as GradientLegend,
  Ze as IconButton,
  sa as InfoPanelContainer,
  Bt as LayerButtonReel,
  nn as LayerCard,
  Nn as LayerGroup,
  Ir as LayerToggle,
  Wn as MapContainer,
  Mn as NavContainer,
  zn as SidebarContainer,
  wn as SimpleSlider,
  Zn as SliderControl,
  Hn as Stacked,
  Jn as Standard,
  ln as Swatch,
  dn as SwatchLegend
};
