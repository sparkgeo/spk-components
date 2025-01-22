import wr, { useState as Ke } from "react";
import { FontAwesomeIcon as we } from "@fortawesome/react-fontawesome";
import { faTrash as tt, faFilter as nt, faInfo as at, faFillDrip as ot, faEllipsisVertical as it, faChevronRight as Pr, faChevronLeft as st, faArrowsLeftRight as ct, faCalendar as lt, faChevronDown as ut } from "@fortawesome/free-solid-svg-icons";
import { Slider as ft, Label as Ar, SliderTrack as dt, SliderThumb as pt, DatePicker as vt, Group as yt, DateInput as ht, DateSegment as mt, Button as Le, Text as _t, FieldError as vr, Popover as bt, Dialog as gt, Calendar as Tt, Heading as Ct, CalendarGrid as Et, CalendarCell as xt } from "react-aria-components";
import { useHover as Rt } from "react-aria";
import { CalendarDate as jt } from "@internationalized/date";
import './index.css';function St(r) {
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
var yr;
function Ot() {
  if (yr) return Te;
  yr = 1;
  var r = wr, d = Symbol.for("react.element"), f = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(y, h, R) {
    var m, T = {}, $ = null, q = null;
    R !== void 0 && ($ = "" + R), h.key !== void 0 && ($ = "" + h.key), h.ref !== void 0 && (q = h.ref);
    for (m in h) c.call(h, m) && !p.hasOwnProperty(m) && (T[m] = h[m]);
    if (y && y.defaultProps) for (m in h = y.defaultProps, h) T[m] === void 0 && (T[m] = h[m]);
    return { $$typeof: d, type: y, key: $, ref: q, props: T, _owner: v.current };
  }
  return Te.Fragment = f, Te.jsx = g, Te.jsxs = g, Te;
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
var hr;
function wt() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = wr, d = Symbol.for("react.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), z = Symbol.iterator, W = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = z && e[z] || e[W];
      return typeof t == "function" ? t : null;
    }
    var B = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), _ = 1; _ < t; _++)
          i[_ - 1] = arguments[_];
        L("error", e, i);
      }
    }
    function L(e, t, i) {
      {
        var _ = B.ReactDebugCurrentFrame, I = _.getStackAddendum();
        I !== "" && (t += "%s", i = i.concat([I]));
        var M = i.map(function(A) {
          return String(A);
        });
        M.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var Y = !1, l = !1, ne = !1, he = !1, me = !1, ce;
    ce = Symbol.for("react.module.reference");
    function _e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === p || me || e === v || e === R || e === m || he || e === q || Y || l || ne || typeof e == "object" && e !== null && (e.$$typeof === $ || e.$$typeof === T || e.$$typeof === g || e.$$typeof === y || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function le(e, t, i) {
      var _ = e.displayName;
      if (_)
        return _;
      var I = t.displayName || t.name || "";
      return I !== "" ? i + "(" + I + ")" : i;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case f:
          return "Portal";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case R:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var t = e;
            return ue(t) + ".Consumer";
          case g:
            var i = e;
            return ue(i._context) + ".Provider";
          case h:
            return le(e, e.render, "ForwardRef");
          case T:
            var _ = e.displayName || null;
            return _ !== null ? _ : K(e.type) || "Memo";
          case $: {
            var I = e, M = I._payload, A = I._init;
            try {
              return K(A(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, Q, te, oe, fe, n, u, j;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function b() {
      {
        if (ae === 0) {
          Q = console.log, te = console.info, oe = console.warn, fe = console.error, n = console.group, u = console.groupCollapsed, j = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: x,
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
              value: oe
            }),
            error: X({}, e, {
              value: fe
            }),
            group: X({}, e, {
              value: n
            }),
            groupCollapsed: X({}, e, {
              value: u
            }),
            groupEnd: X({}, e, {
              value: j
            })
          });
        }
        ae < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = B.ReactCurrentDispatcher, E;
    function S(e, t, i) {
      {
        if (E === void 0)
          try {
            throw Error();
          } catch (I) {
            var _ = I.stack.trim().match(/\n( *(at )?)/);
            E = _ && _[1] || "";
          }
        return `
` + E + e;
      }
    }
    var k = !1, O;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      O = new H();
    }
    function o(e, t) {
      if (!e || k)
        return "";
      {
        var i = O.get(e);
        if (i !== void 0)
          return i;
      }
      var _;
      k = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = C.current, C.current = null, b();
      try {
        if (t) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (Z) {
              _ = Z;
            }
            Reflect.construct(e, [], A);
          } else {
            try {
              A.call();
            } catch (Z) {
              _ = Z;
            }
            e.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            _ = Z;
          }
          e();
        }
      } catch (Z) {
        if (Z && _ && typeof Z.stack == "string") {
          for (var w = Z.stack.split(`
`), J = _.stack.split(`
`), G = w.length - 1, U = J.length - 1; G >= 1 && U >= 0 && w[G] !== J[U]; )
            U--;
          for (; G >= 1 && U >= 0; G--, U--)
            if (w[G] !== J[U]) {
              if (G !== 1 || U !== 1)
                do
                  if (G--, U--, U < 0 || w[G] !== J[U]) {
                    var re = `
` + w[G].replace(" at new ", " at ");
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && O.set(e, re), re;
                  }
                while (G >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        k = !1, C.current = M, P(), Error.prepareStackTrace = I;
      }
      var ve = e ? e.displayName || e.name : "", se = ve ? S(ve) : "";
      return typeof e == "function" && O.set(e, se), se;
    }
    function ee(e, t, i) {
      return o(e, !1);
    }
    function de(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ie(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return o(e, de(e));
      if (typeof e == "string")
        return S(e);
      switch (e) {
        case R:
          return S("Suspense");
        case m:
          return S("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ee(e.render);
          case T:
            return ie(e.type, t, i);
          case $: {
            var _ = e, I = _._payload, M = _._init;
            try {
              return ie(M(I), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, rr = {}, tr = B.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var t = e._owner, i = ie(e.type, e._source, t ? t.type : null);
        tr.setExtraStackFrame(i);
      } else
        tr.setExtraStackFrame(null);
    }
    function Ir(e, t, i, _, I) {
      {
        var M = Function.call.bind(be);
        for (var A in e)
          if (M(e, A)) {
            var w = void 0;
            try {
              if (typeof e[A] != "function") {
                var J = Error((_ || "React class") + ": " + i + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              w = e[A](t, A, _, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              w = G;
            }
            w && !(w instanceof Error) && (Re(I), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", i, A, typeof w), Re(null)), w instanceof Error && !(w.message in rr) && (rr[w.message] = !0, Re(I), F("Failed %s type: %s", i, w.message), Re(null));
          }
      }
    }
    var Nr = Array.isArray;
    function Ae(e) {
      return Nr(e);
    }
    function Dr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Lr(e) {
      try {
        return nr(e), !1;
      } catch {
        return !0;
      }
    }
    function nr(e) {
      return "" + e;
    }
    function ar(e) {
      if (Lr(e))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dr(e)), nr(e);
    }
    var ge = B.ReactCurrentOwner, Mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, ke;
    ke = {};
    function Wr(e) {
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
    function Fr(e, t) {
      if (typeof e.ref == "string" && ge.current && t && ge.current.stateNode !== t) {
        var i = K(ge.current.type);
        ke[i] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), e.ref), ke[i] = !0);
      }
    }
    function Yr(e, t) {
      {
        var i = function() {
          or || (or = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Br(e, t) {
      {
        var i = function() {
          ir || (ir = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Gr = function(e, t, i, _, I, M, A) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: A,
        // Record the component responsible for creating this element.
        _owner: M
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
        value: _
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Vr(e, t, i, _, I) {
      {
        var M, A = {}, w = null, J = null;
        i !== void 0 && (ar(i), w = "" + i), qr(t) && (ar(t.key), w = "" + t.key), Wr(t) && (J = t.ref, Fr(t, I));
        for (M in t)
          be.call(t, M) && !Mr.hasOwnProperty(M) && (A[M] = t[M]);
        if (e && e.defaultProps) {
          var G = e.defaultProps;
          for (M in G)
            A[M] === void 0 && (A[M] = G[M]);
        }
        if (w || J) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && Yr(A, U), J && Br(A, U);
        }
        return Gr(e, w, J, I, _, ge.current, A);
      }
    }
    var $e = B.ReactCurrentOwner, sr = B.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var t = e._owner, i = ie(e.type, e._source, t ? t.type : null);
        sr.setExtraStackFrame(i);
      } else
        sr.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function cr() {
      {
        if ($e.current) {
          var e = K($e.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ur(e) {
      return "";
    }
    var lr = {};
    function zr(e) {
      {
        var t = cr();
        if (!t) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (t = `

Check the top-level render call using <` + i + ">.");
        }
        return t;
      }
    }
    function ur(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = zr(t);
        if (lr[i])
          return;
        lr[i] = !0;
        var _ = "";
        e && e._owner && e._owner !== $e.current && (_ = " It was passed a child from " + K(e._owner.type) + "."), pe(e), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, _), pe(null);
      }
    }
    function fr(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ae(e))
          for (var i = 0; i < e.length; i++) {
            var _ = e[i];
            Ne(_) && ur(_, t);
          }
        else if (Ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = V(e);
          if (typeof I == "function" && I !== e.entries)
            for (var M = I.call(e), A; !(A = M.next()).done; )
              Ne(A.value) && ur(A.value, t);
        }
      }
    }
    function Hr(e) {
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
          var _ = K(t);
          Ir(i, e.props, "prop", _, e);
        } else if (t.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var I = K(t);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jr(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var _ = t[i];
          if (_ !== "children" && _ !== "key") {
            pe(e), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), F("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var dr = {};
    function pr(e, t, i, _, I, M) {
      {
        var A = _e(e);
        if (!A) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Ur();
          J ? w += J : w += cr();
          var G;
          e === null ? G = "null" : Ae(e) ? G = "array" : e !== void 0 && e.$$typeof === d ? (G = "<" + (K(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : G = typeof e, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, w);
        }
        var U = Vr(e, t, i, I, M);
        if (U == null)
          return U;
        if (A) {
          var re = t.children;
          if (re !== void 0)
            if (_)
              if (Ae(re)) {
                for (var ve = 0; ve < re.length; ve++)
                  fr(re[ve], e);
                Object.freeze && Object.freeze(re);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(re, e);
        }
        if (be.call(t, "key")) {
          var se = K(e), Z = Object.keys(t).filter(function(rt) {
            return rt !== "key";
          }), De = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dr[se + De]) {
            var et = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, De, se, et, se), dr[se + De] = !0;
          }
        }
        return e === c ? Jr(U) : Hr(U), U;
      }
    }
    function Kr(e, t, i) {
      return pr(e, t, i, !0);
    }
    function Xr(e, t, i) {
      return pr(e, t, i, !1);
    }
    var Zr = Xr, Qr = Kr;
    Ce.Fragment = c, Ce.jsx = Zr, Ce.jsxs = Qr;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? He.exports = Ot() : He.exports = wt();
var a = He.exports, Je = { exports: {} }, je = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Pt() {
  if (mr) return N;
  mr = 1;
  var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, R = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, $ = r ? Symbol.for("react.suspense_list") : 60120, q = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, W = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, F = r ? Symbol.for("react.scope") : 60119;
  function L(l) {
    if (typeof l == "object" && l !== null) {
      var ne = l.$$typeof;
      switch (ne) {
        case d:
          switch (l = l.type, l) {
            case h:
            case R:
            case c:
            case p:
            case v:
            case T:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case y:
                case m:
                case z:
                case q:
                case g:
                  return l;
                default:
                  return ne;
              }
          }
        case f:
          return ne;
      }
    }
  }
  function Y(l) {
    return L(l) === R;
  }
  return N.AsyncMode = h, N.ConcurrentMode = R, N.ContextConsumer = y, N.ContextProvider = g, N.Element = d, N.ForwardRef = m, N.Fragment = c, N.Lazy = z, N.Memo = q, N.Portal = f, N.Profiler = p, N.StrictMode = v, N.Suspense = T, N.isAsyncMode = function(l) {
    return Y(l) || L(l) === h;
  }, N.isConcurrentMode = Y, N.isContextConsumer = function(l) {
    return L(l) === y;
  }, N.isContextProvider = function(l) {
    return L(l) === g;
  }, N.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === d;
  }, N.isForwardRef = function(l) {
    return L(l) === m;
  }, N.isFragment = function(l) {
    return L(l) === c;
  }, N.isLazy = function(l) {
    return L(l) === z;
  }, N.isMemo = function(l) {
    return L(l) === q;
  }, N.isPortal = function(l) {
    return L(l) === f;
  }, N.isProfiler = function(l) {
    return L(l) === p;
  }, N.isStrictMode = function(l) {
    return L(l) === v;
  }, N.isSuspense = function(l) {
    return L(l) === T;
  }, N.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === c || l === R || l === p || l === v || l === T || l === $ || typeof l == "object" && l !== null && (l.$$typeof === z || l.$$typeof === q || l.$$typeof === g || l.$$typeof === y || l.$$typeof === m || l.$$typeof === V || l.$$typeof === B || l.$$typeof === F || l.$$typeof === W);
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
var _r;
function At() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, R = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, $ = r ? Symbol.for("react.suspense_list") : 60120, q = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, W = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, F = r ? Symbol.for("react.scope") : 60119;
    function L(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === c || o === R || o === p || o === v || o === T || o === $ || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === q || o.$$typeof === g || o.$$typeof === y || o.$$typeof === m || o.$$typeof === V || o.$$typeof === B || o.$$typeof === F || o.$$typeof === W);
    }
    function Y(o) {
      if (typeof o == "object" && o !== null) {
        var ee = o.$$typeof;
        switch (ee) {
          case d:
            var de = o.type;
            switch (de) {
              case h:
              case R:
              case c:
              case p:
              case v:
              case T:
                return de;
              default:
                var ie = de && de.$$typeof;
                switch (ie) {
                  case y:
                  case m:
                  case z:
                  case q:
                  case g:
                    return ie;
                  default:
                    return ee;
                }
            }
          case f:
            return ee;
        }
      }
    }
    var l = h, ne = R, he = y, me = g, ce = d, _e = m, le = c, ue = z, K = q, X = f, ae = p, Q = v, te = T, oe = !1;
    function fe(o) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(o) || Y(o) === h;
    }
    function n(o) {
      return Y(o) === R;
    }
    function u(o) {
      return Y(o) === y;
    }
    function j(o) {
      return Y(o) === g;
    }
    function x(o) {
      return typeof o == "object" && o !== null && o.$$typeof === d;
    }
    function b(o) {
      return Y(o) === m;
    }
    function P(o) {
      return Y(o) === c;
    }
    function C(o) {
      return Y(o) === z;
    }
    function E(o) {
      return Y(o) === q;
    }
    function S(o) {
      return Y(o) === f;
    }
    function k(o) {
      return Y(o) === p;
    }
    function O(o) {
      return Y(o) === v;
    }
    function H(o) {
      return Y(o) === T;
    }
    D.AsyncMode = l, D.ConcurrentMode = ne, D.ContextConsumer = he, D.ContextProvider = me, D.Element = ce, D.ForwardRef = _e, D.Fragment = le, D.Lazy = ue, D.Memo = K, D.Portal = X, D.Profiler = ae, D.StrictMode = Q, D.Suspense = te, D.isAsyncMode = fe, D.isConcurrentMode = n, D.isContextConsumer = u, D.isContextProvider = j, D.isElement = x, D.isForwardRef = b, D.isFragment = P, D.isLazy = C, D.isMemo = E, D.isPortal = S, D.isProfiler = k, D.isStrictMode = O, D.isSuspense = H, D.isValidElementType = L, D.typeOf = Y;
  }()), D;
}
var br;
function kr() {
  return br || (br = 1, process.env.NODE_ENV === "production" ? je.exports = Pt() : je.exports = At()), je.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Me, gr;
function kt() {
  if (gr) return Me;
  gr = 1;
  var r = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function c(p) {
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
      for (var g = {}, y = 0; y < 10; y++)
        g["_" + String.fromCharCode(y)] = y;
      var h = Object.getOwnPropertyNames(g).map(function(m) {
        return g[m];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var R = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        R[m] = m;
      }), Object.keys(Object.assign({}, R)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Me = v() ? Object.assign : function(p, g) {
    for (var y, h = c(p), R, m = 1; m < arguments.length; m++) {
      y = Object(arguments[m]);
      for (var T in y)
        d.call(y, T) && (h[T] = y[T]);
      if (r) {
        R = r(y);
        for (var $ = 0; $ < R.length; $++)
          f.call(y, R[$]) && (h[R[$]] = y[R[$]]);
      }
    }
    return h;
  }, Me;
}
var We, Tr;
function Xe() {
  if (Tr) return We;
  Tr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return We = r, We;
}
var qe, Cr;
function $r() {
  return Cr || (Cr = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var Fe, Er;
function $t() {
  if (Er) return Fe;
  Er = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var d = Xe(), f = {}, c = $r();
    r = function(p) {
      var g = "Warning: " + p;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function v(p, g, y, h, R) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in p)
        if (c(p, m)) {
          var T;
          try {
            if (typeof p[m] != "function") {
              var $ = Error(
                (h || "React class") + ": " + y + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw $.name = "Invariant Violation", $;
            }
            T = p[m](g, m, h, y, null, d);
          } catch (z) {
            T = z;
          }
          if (T && !(T instanceof Error) && r(
            (h || "React class") + ": type specification of " + y + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in f)) {
            f[T.message] = !0;
            var q = R ? R() : "";
            r(
              "Failed " + y + " type: " + T.message + (q ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, Fe = v, Fe;
}
var Ye, xr;
function It() {
  if (xr) return Ye;
  xr = 1;
  var r = kr(), d = kt(), f = Xe(), c = $r(), v = $t(), p = function() {
  };
  process.env.NODE_ENV !== "production" && (p = function(y) {
    var h = "Warning: " + y;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function g() {
    return null;
  }
  return Ye = function(y, h) {
    var R = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function T(n) {
      var u = n && (R && n[R] || n[m]);
      if (typeof u == "function")
        return u;
    }
    var $ = "<<anonymous>>", q = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: F(),
      arrayOf: L,
      element: Y(),
      elementType: l(),
      instanceOf: ne,
      node: _e(),
      objectOf: me,
      oneOf: he,
      oneOfType: ce,
      shape: ue,
      exact: K
    };
    function z(n, u) {
      return n === u ? n !== 0 || 1 / n === 1 / u : n !== n && u !== u;
    }
    function W(n, u) {
      this.message = n, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    W.prototype = Error.prototype;
    function V(n) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, j = 0;
      function x(P, C, E, S, k, O, H) {
        if (S = S || $, O = O || E, H !== f) {
          if (h) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = S + ":" + E;
            !u[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[ee] = !0, j++);
          }
        }
        return C[E] == null ? P ? C[E] === null ? new W("The " + k + " `" + O + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new W("The " + k + " `" + O + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : n(C, E, S, k, O);
      }
      var b = x.bind(null, !1);
      return b.isRequired = x.bind(null, !0), b;
    }
    function B(n) {
      function u(j, x, b, P, C, E) {
        var S = j[x], k = Q(S);
        if (k !== n) {
          var O = te(S);
          return new W(
            "Invalid " + P + " `" + C + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected ") + ("`" + n + "`."),
            { expectedType: n }
          );
        }
        return null;
      }
      return V(u);
    }
    function F() {
      return V(g);
    }
    function L(n) {
      function u(j, x, b, P, C) {
        if (typeof n != "function")
          return new W("Property `" + C + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var E = j[x];
        if (!Array.isArray(E)) {
          var S = Q(E);
          return new W("Invalid " + P + " `" + C + "` of type " + ("`" + S + "` supplied to `" + b + "`, expected an array."));
        }
        for (var k = 0; k < E.length; k++) {
          var O = n(E, k, b, P, C + "[" + k + "]", f);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return V(u);
    }
    function Y() {
      function n(u, j, x, b, P) {
        var C = u[j];
        if (!y(C)) {
          var E = Q(C);
          return new W("Invalid " + b + " `" + P + "` of type " + ("`" + E + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(n);
    }
    function l() {
      function n(u, j, x, b, P) {
        var C = u[j];
        if (!r.isValidElementType(C)) {
          var E = Q(C);
          return new W("Invalid " + b + " `" + P + "` of type " + ("`" + E + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(n);
    }
    function ne(n) {
      function u(j, x, b, P, C) {
        if (!(j[x] instanceof n)) {
          var E = n.name || $, S = fe(j[x]);
          return new W("Invalid " + P + " `" + C + "` of type " + ("`" + S + "` supplied to `" + b + "`, expected ") + ("instance of `" + E + "`."));
        }
        return null;
      }
      return V(u);
    }
    function he(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), g;
      function u(j, x, b, P, C) {
        for (var E = j[x], S = 0; S < n.length; S++)
          if (z(E, n[S]))
            return null;
        var k = JSON.stringify(n, function(H, o) {
          var ee = te(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new W("Invalid " + P + " `" + C + "` of value `" + String(E) + "` " + ("supplied to `" + b + "`, expected one of " + k + "."));
      }
      return V(u);
    }
    function me(n) {
      function u(j, x, b, P, C) {
        if (typeof n != "function")
          return new W("Property `" + C + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var E = j[x], S = Q(E);
        if (S !== "object")
          return new W("Invalid " + P + " `" + C + "` of type " + ("`" + S + "` supplied to `" + b + "`, expected an object."));
        for (var k in E)
          if (c(E, k)) {
            var O = n(E, k, b, P, C + "." + k, f);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return V(u);
    }
    function ce(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var u = 0; u < n.length; u++) {
        var j = n[u];
        if (typeof j != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(j) + " at index " + u + "."
          ), g;
      }
      function x(b, P, C, E, S) {
        for (var k = [], O = 0; O < n.length; O++) {
          var H = n[O], o = H(b, P, C, E, S, f);
          if (o == null)
            return null;
          o.data && c(o.data, "expectedType") && k.push(o.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new W("Invalid " + E + " `" + S + "` supplied to " + ("`" + C + "`" + ee + "."));
      }
      return V(x);
    }
    function _e() {
      function n(u, j, x, b, P) {
        return X(u[j]) ? null : new W("Invalid " + b + " `" + P + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return V(n);
    }
    function le(n, u, j, x, b) {
      return new W(
        (n || "React class") + ": " + u + " type `" + j + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function ue(n) {
      function u(j, x, b, P, C) {
        var E = j[x], S = Q(E);
        if (S !== "object")
          return new W("Invalid " + P + " `" + C + "` of type `" + S + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var k in n) {
          var O = n[k];
          if (typeof O != "function")
            return le(b, P, C, k, te(O));
          var H = O(E, k, b, P, C + "." + k, f);
          if (H)
            return H;
        }
        return null;
      }
      return V(u);
    }
    function K(n) {
      function u(j, x, b, P, C) {
        var E = j[x], S = Q(E);
        if (S !== "object")
          return new W("Invalid " + P + " `" + C + "` of type `" + S + "` " + ("supplied to `" + b + "`, expected `object`."));
        var k = d({}, j[x], n);
        for (var O in k) {
          var H = n[O];
          if (c(n, O) && typeof H != "function")
            return le(b, P, C, O, te(H));
          if (!H)
            return new W(
              "Invalid " + P + " `" + C + "` key `" + O + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(j[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var o = H(E, O, b, P, C + "." + O, f);
          if (o)
            return o;
        }
        return null;
      }
      return V(u);
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
          var u = T(n);
          if (u) {
            var j = u.call(n), x;
            if (u !== n.entries) {
              for (; !(x = j.next()).done; )
                if (!X(x.value))
                  return !1;
            } else
              for (; !(x = j.next()).done; ) {
                var b = x.value;
                if (b && !X(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(n, u) {
      return n === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function Q(n) {
      var u = typeof n;
      return Array.isArray(n) ? "array" : n instanceof RegExp ? "object" : ae(u, n) ? "symbol" : u;
    }
    function te(n) {
      if (typeof n > "u" || n === null)
        return "" + n;
      var u = Q(n);
      if (u === "object") {
        if (n instanceof Date)
          return "date";
        if (n instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function oe(n) {
      var u = te(n);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function fe(n) {
      return !n.constructor || !n.constructor.name ? $ : n.constructor.name;
    }
    return q.checkPropTypes = v, q.resetWarningCache = v.resetWarningCache, q.PropTypes = q, q;
  }, Ye;
}
var Be, Rr;
function Nt() {
  if (Rr) return Be;
  Rr = 1;
  var r = Xe();
  function d() {
  }
  function f() {
  }
  return f.resetWarningCache = d, Be = function() {
    function c(g, y, h, R, m, T) {
      if (T !== r) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    c.isRequired = c;
    function v() {
      return c;
    }
    var p = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: v,
      element: c,
      elementType: c,
      instanceOf: v,
      node: c,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: f,
      resetWarningCache: d
    };
    return p.PropTypes = p, p;
  }, Be;
}
if (process.env.NODE_ENV !== "production") {
  var Dt = kr(), Lt = !0;
  Je.exports = It()(Dt.isElement, Lt);
} else
  Je.exports = Nt()();
var Mt = Je.exports;
const s = /* @__PURE__ */ St(Mt), Wt = "_iconButton_1963e_1", qt = {
  iconButton: Wt
}, Ft = {
  trash: tt,
  filter: nt,
  info: at,
  fill: ot,
  ellipsis: it,
  chevronRight: Pr,
  chevronLeft: st
}, Pe = ({ onClick: r, iconName: d }) => /* @__PURE__ */ a.jsx("div", { className: qt.iconButton, children: /* @__PURE__ */ a.jsx("button", { "aria-label": d, type: "button", onClick: r, children: /* @__PURE__ */ a.jsx(we, { icon: Ft[d] }) }) });
Pe.propTypes = {
  iconName: s.oneOf([
    "trash",
    "filter",
    "info",
    "fill",
    "ellipsis",
    "chevronLeft",
    "chevronRight"
  ]),
  onClick: s.func.isRequired
};
Pe.defaultProps = {
  iconName: "ellipsis"
};
const Yt = "_layerButtonReel_1o59k_1", Bt = {
  layerButtonReel: Yt
}, Ze = ({ buttons: r }) => /* @__PURE__ */ a.jsx("div", { className: Bt.layerButtonReel, children: r && Object.keys(r).map((d) => /* @__PURE__ */ a.jsx(Pe, { iconName: d, onClick: r[d] })) });
Ze.propTypes = {
  buttons: s.objectOf(s.func)
};
Ze.defaultProps = {
  buttons: null
};
const Gt = "_layerToggle_gvlf4_7", Vt = "_slider_gvlf4_29", Ge = {
  layerToggle: Gt,
  switch: "_switch_gvlf4_12",
  slider: Vt
}, Qe = ({ layerName: r, isActive: d, onChange: f }) => /* @__PURE__ */ a.jsx("div", { className: Ge.layerToggle, children: /* @__PURE__ */ a.jsxs("div", { className: Ge.switch, children: [
  /* @__PURE__ */ a.jsx(
    "input",
    {
      type: "checkbox",
      value: r,
      checked: d,
      onChange: f
    }
  ),
  /* @__PURE__ */ a.jsx("span", { className: Ge.slider })
] }) });
Qe.propTypes = {
  layerName: s.string,
  isActive: s.bool,
  onChange: s.func.isRequired
};
Qe.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const Ut = "_layerCard_mism4_1", zt = "_layerCardWrapper_mism4_11", Ht = "_layerCardTextWrapper_mism4_20", Jt = "_layerCardTitle_mism4_28", Kt = "_layerCardDescription_mism4_32", Xt = "_layerCardControls_mism4_37", Zt = "_layerCardToggle_mism4_42", Qt = "_layerCardChildren_mism4_47", ye = {
  layerCard: Ut,
  layerCardWrapper: zt,
  layerCardTextWrapper: Ht,
  layerCardTitle: Jt,
  layerCardDescription: Kt,
  layerCardControls: Xt,
  layerCardToggle: Zt,
  layerCardChildren: Qt
}, en = ({ layerName: r, isActive: d, onChange: f, buttons: c, description: v, children: p }) => /* @__PURE__ */ a.jsxs("div", { className: ye.layerCard, children: [
  /* @__PURE__ */ a.jsxs("div", { className: ye.layerCardWrapper, children: [
    /* @__PURE__ */ a.jsxs("div", { className: ye.layerCardTextWrapper, children: [
      /* @__PURE__ */ a.jsx("span", { className: ye.layerCardTitle, children: r }),
      /* @__PURE__ */ a.jsx("span", { className: ye.layerCardDescription, children: v })
    ] }),
    /* @__PURE__ */ a.jsx(Ze, { buttons: c }),
    f && /* @__PURE__ */ a.jsx(
      Qe,
      {
        layerName: r,
        isActive: d,
        onChange: f
      }
    )
  ] }),
  /* @__PURE__ */ a.jsx("div", { className: ye.layerCardChildren, children: p })
] });
en.propTypes = {
  layerName: s.string.isRequired,
  isActive: s.bool,
  onChange: s.func.isRequired,
  buttons: s.objectOf(s.func),
  description: s.string,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ])
};
const rn = "_swatchContainer_771fp_2", tn = "_swatch_771fp_2", nn = "_swatchLabel_771fp_18", an = "_swatchValue_771fp_24", Se = {
  swatchContainer: rn,
  swatch: tn,
  swatchLabel: nn,
  swatchValue: an
}, on = ({ color: r, label: d = "", value: f, units: c = "" }) => /* @__PURE__ */ a.jsxs("div", { className: Se.swatchContainer, children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: Se.swatch,
      style: { backgroundColor: r }
    }
  ),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-label", className: Se.swatchLabel, children: d }),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-value", className: Se.swatchValue, children: f !== void 0 && `${f}${c}` })
] }), sn = "_swatchLegend_qiaru_1", cn = {
  swatchLegend: sn
}, ln = ({ swatches: r }) => /* @__PURE__ */ a.jsx("div", { className: cn.swatchLegend, children: r && r.map((d) => {
  const { color: f, label: c, value: v, units: p } = d;
  return /* @__PURE__ */ a.jsx(
    on,
    {
      label: c,
      color: f,
      value: v,
      units: p
    },
    c
  );
}) });
ln.propTypes = {
  swatches: s.arrayOf(s.objectOf(s.string)).isRequired
};
const un = "_slider_1bnet_1", fn = "_sliderLabel_1bnet_16", dn = "_sliderThumb_1bnet_20", pn = "_sliderTrack_1bnet_41", vn = "_comparisonControl_1bnet_66", Ee = {
  slider: un,
  sliderLabel: fn,
  sliderThumb: dn,
  sliderTrack: pn,
  comparisonControl: vn
}, ea = ({
  label: r,
  showLabel: d = !0,
  onChange: f,
  value: c = 50,
  ...v
}) => /* @__PURE__ */ a.jsx("div", { className: Ee.comparisonControl, children: /* @__PURE__ */ a.jsxs(ft, { maxValue: 94, minValue: 6, step: 0.1, className: Ee.slider, "aria-label": !d && typeof r == "string" ? r : void 0, onChange: f, value: c, ...v, children: [
  d && /* @__PURE__ */ a.jsx(Ar, { className: Ee.sliderLabel, children: r }),
  /* @__PURE__ */ a.jsx(dt, { className: Ee.sliderTrack, children: /* @__PURE__ */ a.jsx(pt, { className: Ee.sliderThumb, children: /* @__PURE__ */ a.jsx(we, { color: "white", icon: ct }) }) })
] }) }), yn = "_datePicker_ywin1_1 react-aria-DatePicker", hn = "_dateInput_ywin1_12 react-aria-DateInput", mn = "_hoverDatepicker_ywin1_17", Ve = {
  datePicker: yn,
  dateInput: hn,
  hoverDatepicker: mn
}, Ue = (r) => new jt(r.getFullYear(), r.getMonth() + 1, r.getDate()), ra = ({
  label: r,
  helperText: d,
  errorMessage: f,
  value: c,
  onChange: v,
  "aria-label": p,
  "aria-labelledby": g,
  className: y,
  maxValue: h,
  minValue: R,
  ...m
}) => {
  const [T, $] = Ke(!1), { hoverProps: q, isHovered: z } = Rt({}), W = c ? Ue(c) : null, V = h ? Ue(h) : null, B = R ? Ue(R) : null, F = (L) => {
    if (L) {
      const Y = new Date(L.toString());
      v(Y);
    } else
      v(null);
  };
  return /* @__PURE__ */ a.jsxs(
    vt,
    {
      className: `${Ve.datePicker} ${y || ""}`.trim(),
      value: W,
      onChange: F,
      "aria-label": p,
      "aria-labelledby": g,
      maxValue: V,
      minValue: B,
      ...m,
      children: [
        r && /* @__PURE__ */ a.jsx(Ar, { children: r }),
        /* @__PURE__ */ a.jsxs(yt, { children: [
          /* @__PURE__ */ a.jsx(
            ht,
            {
              className: `${z || T ? Ve.hoverDatepicker : ""} ${Ve.dateInput}`.trim(),
              ...q,
              children: (L) => /* @__PURE__ */ a.jsx(mt, { segment: L })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Le,
            {
              "aria-label": "Open calendar",
              onHoverChange: (L) => $(L),
              children: /* @__PURE__ */ a.jsx(we, { icon: lt })
            }
          )
        ] }),
        d && /* @__PURE__ */ a.jsx(_t, { slot: "description", children: d }),
        f ? /* @__PURE__ */ a.jsx(vr, { children: f }) : /* @__PURE__ */ a.jsx(vr, {}),
        /* @__PURE__ */ a.jsx(bt, { children: /* @__PURE__ */ a.jsx(gt, { children: /* @__PURE__ */ a.jsxs(Tt, { children: [
          /* @__PURE__ */ a.jsxs("header", { children: [
            /* @__PURE__ */ a.jsx(Le, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ a.jsx(Ct, {}),
            /* @__PURE__ */ a.jsx(Le, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ a.jsx(Et, { children: (L) => /* @__PURE__ */ a.jsx(xt, { date: L }) })
        ] }) }) })
      ]
    }
  );
}, _n = "_gradient_1w8qh_1", bn = "_gradientNumbers_1w8qh_6", gn = "_gradientLegend_1w8qh_11", Oe = {
  gradient: _n,
  gradientNumbers: bn,
  gradientLegend: gn
}, Tn = ({
  title: r,
  startColor: d = "red",
  endColor: f = "yellow",
  startNo: c,
  endNo: v,
  titleBelow: p = !1,
  bins: g = 0,
  precision: y = 2,
  units: h
}) => {
  const R = g > 0 ? Array(g - 1).fill(0).map((m, T) => {
    const $ = (c + (v - c) / g * (T + 1)).toPrecision(y);
    return /* @__PURE__ */ a.jsx("span", { children: $ }, $);
  }) : [];
  return /* @__PURE__ */ a.jsxs("div", { className: "gradient-box", children: [
    !p && /* @__PURE__ */ a.jsxs("div", { className: "ui-title", children: [
      " ",
      r
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: Oe.gradientLegend, children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Oe.gradient,
          style: {
            background: `linear-gradient(to right, ${d} , ${f})`
          }
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: Oe.gradientNumbers, children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          c,
          " ",
          h
        ] }),
        R,
        /* @__PURE__ */ a.jsxs("span", { children: [
          v,
          " ",
          h
        ] })
      ] }),
      p && /* @__PURE__ */ a.jsxs("div", { className: Oe.uiTitle, children: [
        " ",
        r
      ] })
    ] })
  ] });
};
Tn.propTypes = {
  title: s.string,
  startColor: s.string,
  endColor: s.string,
  startNo: s.number,
  endNo: s.number,
  titleBelow: s.bool,
  bins: s.number,
  precision: s.number,
  units: s.string
};
const Cn = "_simpleSlider_qj292_1", En = "_simpleSliderInput_qj292_7", xn = "_simpleSliderMinMaxContainer_qj292_11", ze = {
  simpleSlider: Cn,
  simpleSliderInput: En,
  simpleSliderMinMaxContainer: xn
}, er = ({
  units: r,
  label: d,
  onChange: f,
  min: c,
  max: v,
  step: p,
  value: g
}) => /* @__PURE__ */ a.jsxs("div", { className: ze.simpleSlider, children: [
  /* @__PURE__ */ a.jsxs("div", { children: [
    d && /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: d }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        onChange: f,
        className: ze.simpleSliderInput,
        type: "range",
        value: g,
        min: c,
        max: v,
        step: p
      }
    )
  ] }),
  /* @__PURE__ */ a.jsxs("div", { className: ze.simpleSliderMinMaxContainer, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "ui-label", children: [
      c,
      r
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "ui-label", children: [
      v,
      r
    ] })
  ] })
] });
er.propTypes = {
  onChange: s.func.isRequired,
  min: s.number.isRequired,
  max: s.number.isRequired,
  step: s.number.isRequired,
  value: s.number,
  label: s.string,
  units: s.string
};
er.defaultProps = {
  value: 0,
  units: "",
  label: ""
};
const Rn = "_layerGroupButton_1twxx_1", jn = "_layerGroupChevron_1twxx_12", Sn = "_layerGroupName_1twxx_25", On = "_layerGroupWrapper_1twxx_32", wn = "_layerGroupChildren_1twxx_32", xe = {
  layerGroupButton: Rn,
  layerGroupChevron: jn,
  layerGroupName: Sn,
  layerGroupWrapper: On,
  layerGroupChildren: wn
}, Pn = ({ groupName: r, children: d }) => {
  const [f, c] = Ke(!1), v = () => {
    c(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: xe.layerGroupWrapper, children: [
    /* @__PURE__ */ a.jsxs("button", { type: "button", className: xe.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChevron, children: /* @__PURE__ */ a.jsx(we, { size: "md", fixedWidth: !0, icon: f ? ut : Pr }) }),
      /* @__PURE__ */ a.jsx("span", { className: xe.layerGroupName, children: r })
    ] }),
    f && /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChildren, children: d })
  ] });
};
Pn.propTypes = {
  groupName: s.string,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const An = "_mapWrapper_1gyf5_1", kn = "_mapContainer_1gyf5_10", jr = {
  mapWrapper: An,
  mapContainer: kn
}, $n = ({ mapContainer: r, id: d, children: f }) => /* @__PURE__ */ a.jsxs("div", { className: jr.mapWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: jr.mapContainer, id: d, ref: r }),
  f
] });
$n.propTypes = {
  mapContainer: s.oneOfType([
    s.func,
    s.shape({ current: s.instanceOf(Element) })
  ]),
  children: s.node,
  id: s.string
};
const In = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "nav-container", children: r });
In.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Nn = "_infoPanelContainer_lsvmo_1", Dn = "_topLeft_lsvmo_14", Ln = "_topRight_lsvmo_19", Mn = "_centerLeft_lsvmo_24", Wn = "_centerRight_lsvmo_29", qn = "_bottomLeft_lsvmo_34", Fn = "_bottomRight_lsvmo_39", Sr = {
  infoPanelContainer: Nn,
  topLeft: Dn,
  topRight: Ln,
  centerLeft: Mn,
  centerRight: Wn,
  bottomLeft: qn,
  bottomRight: Fn
}, ta = ({ children: r, position: d = "centerRight" }) => /* @__PURE__ */ a.jsx("div", { className: `${Sr.infoPanelContainer} ${Sr[d]}`, children: /* @__PURE__ */ a.jsx("div", { children: r }) }), Yn = ({ showToggle: r, children: d }) => {
  const [f, c] = Ke(!1), v = `sidebar ${f ? "closed" : ""}`, p = () => {
    c(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ a.jsx("div", { className: v, children: d }),
    r && /* @__PURE__ */ a.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ a.jsx(
      Pe,
      {
        onClick: p,
        iconName: f ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
Yn.propTypes = {
  showToggle: s.bool,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Bn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "layout-stacked", children: r });
Bn.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Gn = ({ align: r = "left", children: d }) => /* @__PURE__ */ a.jsx("div", { className: `layout-standard ${r}`, children: d });
Gn.propTypes = {
  align: s.oneOf(["left", "right"]),
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Vn = "_sliderControlWrapper_2tznx_1", Un = "_sliderLabel_2tznx_9", Or = {
  sliderControlWrapper: Vn,
  sliderLabel: Un
}, zn = ({ title: r, units: d, sliderConfig: f }) => /* @__PURE__ */ a.jsxs("div", { className: Or.sliderControlWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ a.jsx("div", {}),
  f && f.map((c) => {
    const { label: v } = c;
    return /* @__PURE__ */ a.jsx("div", { className: Or.sliderLabel, children: v });
  }),
  f && f.map((c) => {
    const { onChange: v, min: p, max: g, step: y, value: h } = c;
    return /* @__PURE__ */ a.jsx(
      er,
      {
        onChange: v,
        units: d,
        min: p,
        max: g,
        step: y,
        value: h
      }
    );
  })
] });
zn.propTypes = {
  title: s.string.isRequired,
  units: s.string.isRequired,
  sliderConfig: s.arrayOf(s.objectOf(s.string)).isRequired
};
export {
  ea as ComparisonControl,
  ra as DatePicker,
  Tn as GradientLegend,
  Pe as IconButton,
  ta as InfoPanelContainer,
  Ze as LayerButtonReel,
  en as LayerCard,
  Pn as LayerGroup,
  Qe as LayerToggle,
  $n as MapContainer,
  In as NavContainer,
  Yn as SidebarContainer,
  er as SimpleSlider,
  zn as SliderControl,
  Bn as Stacked,
  Gn as Standard,
  on as Swatch,
  ln as SwatchLegend
};
