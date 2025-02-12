import Sr, { useState as Ke } from "react";
import { FontAwesomeIcon as Pe } from "@fortawesome/react-fontawesome";
import { faTrash as at, faFilter as ot, faInfo as it, faFillDrip as st, faEllipsisVertical as ct, faChevronRight as Pr, faChevronLeft as lt, faArrowsLeftRight as ut, faCalendar as ft, faChevronDown as dt } from "@fortawesome/free-solid-svg-icons";
import { Slider as kr, Label as Xe, SliderTrack as $r, SliderThumb as Ar, DatePicker as pt, Group as vt, DateInput as yt, DateSegment as ht, Button as We, Text as mt, FieldError as vr, Popover as _t, Dialog as bt, Calendar as gt, Heading as Tt, CalendarGrid as Et, CalendarCell as Ct } from "react-aria-components";
import { useHover as xt } from "react-aria";
import { CalendarDate as Rt } from "@internationalized/date";
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
var yr;
function Ot() {
  if (yr) return Te;
  yr = 1;
  var r = Sr, d = Symbol.for("react.element"), f = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(y, h, R) {
    var m, T = {}, A = null, F = null;
    R !== void 0 && (A = "" + R), h.key !== void 0 && (A = "" + h.key), h.ref !== void 0 && (F = h.ref);
    for (m in h) c.call(h, m) && !p.hasOwnProperty(m) && (T[m] = h[m]);
    if (y && y.defaultProps) for (m in h = y.defaultProps, h) T[m] === void 0 && (T[m] = h[m]);
    return { $$typeof: d, type: y, key: A, ref: F, props: T, _owner: v.current };
  }
  return Te.Fragment = f, Te.jsx = g, Te.jsxs = g, Te;
}
var Ee = {};
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
    var r = Sr, d = Symbol.for("react.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = z && e[z] || e[M];
      return typeof t == "function" ? t : null;
    }
    var B = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
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
        var W = i.map(function(k) {
          return String(k);
        });
        W.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, W);
      }
    }
    var Y = !1, s = !1, ne = !1, he = !1, me = !1, ce;
    ce = Symbol.for("react.module.reference");
    function _e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === p || me || e === v || e === R || e === m || he || e === F || Y || s || ne || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === T || e.$$typeof === g || e.$$typeof === y || e.$$typeof === h || // This needs to include all possible module reference object
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
      if (typeof e.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
          case A: {
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
    var X = Object.assign, ae = 0, Q, te, oe, fe, n, l, j;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function b() {
      {
        if (ae === 0) {
          Q = console.log, te = console.info, oe = console.warn, fe = console.error, n = console.group, l = console.groupCollapsed, j = console.groupEnd;
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
    var E = B.ReactCurrentDispatcher, C;
    function O(e, t, i) {
      {
        if (C === void 0)
          try {
            throw Error();
          } catch (I) {
            var _ = I.stack.trim().match(/\n( *(at )?)/);
            C = _ && _[1] || "";
          }
        return `
` + C + e;
      }
    }
    var $ = !1, w;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      w = new H();
    }
    function o(e, t) {
      if (!e || $)
        return "";
      {
        var i = w.get(e);
        if (i !== void 0)
          return i;
      }
      var _;
      $ = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = E.current, E.current = null, b();
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
              _ = Z;
            }
            Reflect.construct(e, [], k);
          } else {
            try {
              k.call();
            } catch (Z) {
              _ = Z;
            }
            e.call(k.prototype);
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
          for (var S = Z.stack.split(`
`), J = _.stack.split(`
`), G = S.length - 1, U = J.length - 1; G >= 1 && U >= 0 && S[G] !== J[U]; )
            U--;
          for (; G >= 1 && U >= 0; G--, U--)
            if (S[G] !== J[U]) {
              if (G !== 1 || U !== 1)
                do
                  if (G--, U--, U < 0 || S[G] !== J[U]) {
                    var re = `
` + S[G].replace(" at new ", " at ");
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && w.set(e, re), re;
                  }
                while (G >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        $ = !1, E.current = W, P(), Error.prepareStackTrace = I;
      }
      var ve = e ? e.displayName || e.name : "", se = ve ? O(ve) : "";
      return typeof e == "function" && w.set(e, se), se;
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
        return O(e);
      switch (e) {
        case R:
          return O("Suspense");
        case m:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ee(e.render);
          case T:
            return ie(e.type, t, i);
          case A: {
            var _ = e, I = _._payload, W = _._init;
            try {
              return ie(W(I), t, i);
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
    function Nr(e, t, i, _, I) {
      {
        var W = Function.call.bind(be);
        for (var k in e)
          if (W(e, k)) {
            var S = void 0;
            try {
              if (typeof e[k] != "function") {
                var J = Error((_ || "React class") + ": " + i + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              S = e[k](t, k, _, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              S = G;
            }
            S && !(S instanceof Error) && (Re(I), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", i, k, typeof S), Re(null)), S instanceof Error && !(S.message in rr) && (rr[S.message] = !0, Re(I), q("Failed %s type: %s", i, S.message), Re(null));
          }
      }
    }
    var Lr = Array.isArray;
    function $e(e) {
      return Lr(e);
    }
    function Wr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Mr(e) {
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
      if (Mr(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wr(e)), nr(e);
    }
    var ge = B.ReactCurrentOwner, Fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, Ae;
    Ae = {};
    function qr(e) {
      if (be.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Yr(e) {
      if (be.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Br(e, t) {
      if (typeof e.ref == "string" && ge.current && t && ge.current.stateNode !== t) {
        var i = K(ge.current.type);
        Ae[i] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), e.ref), Ae[i] = !0);
      }
    }
    function Gr(e, t) {
      {
        var i = function() {
          or || (or = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Vr(e, t) {
      {
        var i = function() {
          ir || (ir = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Ur = function(e, t, i, _, I, W, k) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: k,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function zr(e, t, i, _, I) {
      {
        var W, k = {}, S = null, J = null;
        i !== void 0 && (ar(i), S = "" + i), Yr(t) && (ar(t.key), S = "" + t.key), qr(t) && (J = t.ref, Br(t, I));
        for (W in t)
          be.call(t, W) && !Fr.hasOwnProperty(W) && (k[W] = t[W]);
        if (e && e.defaultProps) {
          var G = e.defaultProps;
          for (W in G)
            k[W] === void 0 && (k[W] = G[W]);
        }
        if (S || J) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          S && Gr(k, U), J && Vr(k, U);
        }
        return Ur(e, S, J, I, _, ge.current, k);
      }
    }
    var Ie = B.ReactCurrentOwner, sr = B.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var t = e._owner, i = ie(e.type, e._source, t ? t.type : null);
        sr.setExtraStackFrame(i);
      } else
        sr.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function cr() {
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
    function Hr(e) {
      return "";
    }
    var lr = {};
    function Jr(e) {
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
        var i = Jr(t);
        if (lr[i])
          return;
        lr[i] = !0;
        var _ = "";
        e && e._owner && e._owner !== Ie.current && (_ = " It was passed a child from " + K(e._owner.type) + "."), pe(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, _), pe(null);
      }
    }
    function fr(e, t) {
      {
        if (typeof e != "object")
          return;
        if ($e(e))
          for (var i = 0; i < e.length; i++) {
            var _ = e[i];
            Ne(_) && ur(_, t);
          }
        else if (Ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = V(e);
          if (typeof I == "function" && I !== e.entries)
            for (var W = I.call(e), k; !(k = W.next()).done; )
              Ne(k.value) && ur(k.value, t);
        }
      }
    }
    function Kr(e) {
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
          Nr(i, e.props, "prop", _, e);
        } else if (t.PropTypes !== void 0 && !De) {
          De = !0;
          var I = K(t);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xr(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var _ = t[i];
          if (_ !== "children" && _ !== "key") {
            pe(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var dr = {};
    function pr(e, t, i, _, I, W) {
      {
        var k = _e(e);
        if (!k) {
          var S = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Hr();
          J ? S += J : S += cr();
          var G;
          e === null ? G = "null" : $e(e) ? G = "array" : e !== void 0 && e.$$typeof === d ? (G = "<" + (K(e.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : G = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, S);
        }
        var U = zr(e, t, i, I, W);
        if (U == null)
          return U;
        if (k) {
          var re = t.children;
          if (re !== void 0)
            if (_)
              if ($e(re)) {
                for (var ve = 0; ve < re.length; ve++)
                  fr(re[ve], e);
                Object.freeze && Object.freeze(re);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(re, e);
        }
        if (be.call(t, "key")) {
          var se = K(e), Z = Object.keys(t).filter(function(nt) {
            return nt !== "key";
          }), Le = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dr[se + Le]) {
            var tt = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Le, se, tt, se), dr[se + Le] = !0;
          }
        }
        return e === c ? Xr(U) : Kr(U), U;
      }
    }
    function Zr(e, t, i) {
      return pr(e, t, i, !0);
    }
    function Qr(e, t, i) {
      return pr(e, t, i, !1);
    }
    var et = Qr, rt = Zr;
    Ee.Fragment = c, Ee.jsx = et, Ee.jsxs = rt;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? He.exports = Ot() : He.exports = wt();
var a = He.exports, Je = { exports: {} }, je = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function St() {
  if (mr) return D;
  mr = 1;
  var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, R = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, A = r ? Symbol.for("react.suspense_list") : 60120, F = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
  function L(s) {
    if (typeof s == "object" && s !== null) {
      var ne = s.$$typeof;
      switch (ne) {
        case d:
          switch (s = s.type, s) {
            case h:
            case R:
            case c:
            case p:
            case v:
            case T:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case y:
                case m:
                case z:
                case F:
                case g:
                  return s;
                default:
                  return ne;
              }
          }
        case f:
          return ne;
      }
    }
  }
  function Y(s) {
    return L(s) === R;
  }
  return D.AsyncMode = h, D.ConcurrentMode = R, D.ContextConsumer = y, D.ContextProvider = g, D.Element = d, D.ForwardRef = m, D.Fragment = c, D.Lazy = z, D.Memo = F, D.Portal = f, D.Profiler = p, D.StrictMode = v, D.Suspense = T, D.isAsyncMode = function(s) {
    return Y(s) || L(s) === h;
  }, D.isConcurrentMode = Y, D.isContextConsumer = function(s) {
    return L(s) === y;
  }, D.isContextProvider = function(s) {
    return L(s) === g;
  }, D.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === d;
  }, D.isForwardRef = function(s) {
    return L(s) === m;
  }, D.isFragment = function(s) {
    return L(s) === c;
  }, D.isLazy = function(s) {
    return L(s) === z;
  }, D.isMemo = function(s) {
    return L(s) === F;
  }, D.isPortal = function(s) {
    return L(s) === f;
  }, D.isProfiler = function(s) {
    return L(s) === p;
  }, D.isStrictMode = function(s) {
    return L(s) === v;
  }, D.isSuspense = function(s) {
    return L(s) === T;
  }, D.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === c || s === R || s === p || s === v || s === T || s === A || typeof s == "object" && s !== null && (s.$$typeof === z || s.$$typeof === F || s.$$typeof === g || s.$$typeof === y || s.$$typeof === m || s.$$typeof === V || s.$$typeof === B || s.$$typeof === q || s.$$typeof === M);
  }, D.typeOf = L, D;
}
var N = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function Pt() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, R = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, A = r ? Symbol.for("react.suspense_list") : 60120, F = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
    function L(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === c || o === R || o === p || o === v || o === T || o === A || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === F || o.$$typeof === g || o.$$typeof === y || o.$$typeof === m || o.$$typeof === V || o.$$typeof === B || o.$$typeof === q || o.$$typeof === M);
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
                  case F:
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
    var s = h, ne = R, he = y, me = g, ce = d, _e = m, le = c, ue = z, K = F, X = f, ae = p, Q = v, te = T, oe = !1;
    function fe(o) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(o) || Y(o) === h;
    }
    function n(o) {
      return Y(o) === R;
    }
    function l(o) {
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
    function E(o) {
      return Y(o) === z;
    }
    function C(o) {
      return Y(o) === F;
    }
    function O(o) {
      return Y(o) === f;
    }
    function $(o) {
      return Y(o) === p;
    }
    function w(o) {
      return Y(o) === v;
    }
    function H(o) {
      return Y(o) === T;
    }
    N.AsyncMode = s, N.ConcurrentMode = ne, N.ContextConsumer = he, N.ContextProvider = me, N.Element = ce, N.ForwardRef = _e, N.Fragment = le, N.Lazy = ue, N.Memo = K, N.Portal = X, N.Profiler = ae, N.StrictMode = Q, N.Suspense = te, N.isAsyncMode = fe, N.isConcurrentMode = n, N.isContextConsumer = l, N.isContextProvider = j, N.isElement = x, N.isForwardRef = b, N.isFragment = P, N.isLazy = E, N.isMemo = C, N.isPortal = O, N.isProfiler = $, N.isStrictMode = w, N.isSuspense = H, N.isValidElementType = L, N.typeOf = Y;
  }()), N;
}
var br;
function Ir() {
  return br || (br = 1, process.env.NODE_ENV === "production" ? je.exports = St() : je.exports = Pt()), je.exports;
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
        for (var A = 0; A < R.length; A++)
          f.call(y, R[A]) && (h[R[A]] = y[R[A]]);
      }
    }
    return h;
  }, Me;
}
var Fe, Tr;
function Ze() {
  if (Tr) return Fe;
  Tr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fe = r, Fe;
}
var qe, Er;
function Dr() {
  return Er || (Er = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var Ye, Cr;
function $t() {
  if (Cr) return Ye;
  Cr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var d = Ze(), f = {}, c = Dr();
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
              var A = Error(
                (h || "React class") + ": " + y + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            T = p[m](g, m, h, y, null, d);
          } catch (z) {
            T = z;
          }
          if (T && !(T instanceof Error) && r(
            (h || "React class") + ": type specification of " + y + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in f)) {
            f[T.message] = !0;
            var F = R ? R() : "";
            r(
              "Failed " + y + " type: " + T.message + (F ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, Ye = v, Ye;
}
var Be, xr;
function At() {
  if (xr) return Be;
  xr = 1;
  var r = Ir(), d = kt(), f = Ze(), c = Dr(), v = $t(), p = function() {
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
  return Be = function(y, h) {
    var R = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function T(n) {
      var l = n && (R && n[R] || n[m]);
      if (typeof l == "function")
        return l;
    }
    var A = "<<anonymous>>", F = {
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
      elementType: s(),
      instanceOf: ne,
      node: _e(),
      objectOf: me,
      oneOf: he,
      oneOfType: ce,
      shape: ue,
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
      function x(P, E, C, O, $, w, H) {
        if (O = O || A, w = w || C, H !== f) {
          if (h) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + C;
            !l[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + w + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ee] = !0, j++);
          }
        }
        return E[C] == null ? P ? E[C] === null ? new M("The " + $ + " `" + w + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new M("The " + $ + " `" + w + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : n(E, C, O, $, w);
      }
      var b = x.bind(null, !1);
      return b.isRequired = x.bind(null, !0), b;
    }
    function B(n) {
      function l(j, x, b, P, E, C) {
        var O = j[x], $ = Q(O);
        if ($ !== n) {
          var w = te(O);
          return new M(
            "Invalid " + P + " `" + E + "` of type " + ("`" + w + "` supplied to `" + b + "`, expected ") + ("`" + n + "`."),
            { expectedType: n }
          );
        }
        return null;
      }
      return V(l);
    }
    function q() {
      return V(g);
    }
    function L(n) {
      function l(j, x, b, P, E) {
        if (typeof n != "function")
          return new M("Property `" + E + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var C = j[x];
        if (!Array.isArray(C)) {
          var O = Q(C);
          return new M("Invalid " + P + " `" + E + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected an array."));
        }
        for (var $ = 0; $ < C.length; $++) {
          var w = n(C, $, b, P, E + "[" + $ + "]", f);
          if (w instanceof Error)
            return w;
        }
        return null;
      }
      return V(l);
    }
    function Y() {
      function n(l, j, x, b, P) {
        var E = l[j];
        if (!y(E)) {
          var C = Q(E);
          return new M("Invalid " + b + " `" + P + "` of type " + ("`" + C + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(n);
    }
    function s() {
      function n(l, j, x, b, P) {
        var E = l[j];
        if (!r.isValidElementType(E)) {
          var C = Q(E);
          return new M("Invalid " + b + " `" + P + "` of type " + ("`" + C + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(n);
    }
    function ne(n) {
      function l(j, x, b, P, E) {
        if (!(j[x] instanceof n)) {
          var C = n.name || A, O = fe(j[x]);
          return new M("Invalid " + P + " `" + E + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return V(l);
    }
    function he(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), g;
      function l(j, x, b, P, E) {
        for (var C = j[x], O = 0; O < n.length; O++)
          if (z(C, n[O]))
            return null;
        var $ = JSON.stringify(n, function(H, o) {
          var ee = te(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new M("Invalid " + P + " `" + E + "` of value `" + String(C) + "` " + ("supplied to `" + b + "`, expected one of " + $ + "."));
      }
      return V(l);
    }
    function me(n) {
      function l(j, x, b, P, E) {
        if (typeof n != "function")
          return new M("Property `" + E + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var C = j[x], O = Q(C);
        if (O !== "object")
          return new M("Invalid " + P + " `" + E + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected an object."));
        for (var $ in C)
          if (c(C, $)) {
            var w = n(C, $, b, P, E + "." + $, f);
            if (w instanceof Error)
              return w;
          }
        return null;
      }
      return V(l);
    }
    function ce(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var l = 0; l < n.length; l++) {
        var j = n[l];
        if (typeof j != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(j) + " at index " + l + "."
          ), g;
      }
      function x(b, P, E, C, O) {
        for (var $ = [], w = 0; w < n.length; w++) {
          var H = n[w], o = H(b, P, E, C, O, f);
          if (o == null)
            return null;
          o.data && c(o.data, "expectedType") && $.push(o.data.expectedType);
        }
        var ee = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new M("Invalid " + C + " `" + O + "` supplied to " + ("`" + E + "`" + ee + "."));
      }
      return V(x);
    }
    function _e() {
      function n(l, j, x, b, P) {
        return X(l[j]) ? null : new M("Invalid " + b + " `" + P + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return V(n);
    }
    function le(n, l, j, x, b) {
      return new M(
        (n || "React class") + ": " + l + " type `" + j + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function ue(n) {
      function l(j, x, b, P, E) {
        var C = j[x], O = Q(C);
        if (O !== "object")
          return new M("Invalid " + P + " `" + E + "` of type `" + O + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var $ in n) {
          var w = n[$];
          if (typeof w != "function")
            return le(b, P, E, $, te(w));
          var H = w(C, $, b, P, E + "." + $, f);
          if (H)
            return H;
        }
        return null;
      }
      return V(l);
    }
    function K(n) {
      function l(j, x, b, P, E) {
        var C = j[x], O = Q(C);
        if (O !== "object")
          return new M("Invalid " + P + " `" + E + "` of type `" + O + "` " + ("supplied to `" + b + "`, expected `object`."));
        var $ = d({}, j[x], n);
        for (var w in $) {
          var H = n[w];
          if (c(n, w) && typeof H != "function")
            return le(b, P, E, w, te(H));
          if (!H)
            return new M(
              "Invalid " + P + " `" + E + "` key `" + w + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(j[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var o = H(C, w, b, P, E + "." + w, f);
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
            var j = l.call(n), x;
            if (l !== n.entries) {
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
    function oe(n) {
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
    function fe(n) {
      return !n.constructor || !n.constructor.name ? A : n.constructor.name;
    }
    return F.checkPropTypes = v, F.resetWarningCache = v.resetWarningCache, F.PropTypes = F, F;
  }, Be;
}
var Ge, Rr;
function It() {
  if (Rr) return Ge;
  Rr = 1;
  var r = Ze();
  function d() {
  }
  function f() {
  }
  return f.resetWarningCache = d, Ge = function() {
    function c(g, y, h, R, m, T) {
      if (T !== r) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
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
  }, Ge;
}
if (process.env.NODE_ENV !== "production") {
  var Dt = Ir(), Nt = !0;
  Je.exports = At()(Dt.isElement, Nt);
} else
  Je.exports = It()();
var Lt = Je.exports;
const u = /* @__PURE__ */ jt(Lt), Wt = "_iconButton_1963e_1", Mt = {
  iconButton: Wt
}, Ft = {
  trash: at,
  filter: ot,
  info: it,
  fill: st,
  ellipsis: ct,
  chevronRight: Pr,
  chevronLeft: lt
}, ke = ({ onClick: r, iconName: d }) => /* @__PURE__ */ a.jsx("div", { className: Mt.iconButton, children: /* @__PURE__ */ a.jsx("button", { "aria-label": d, type: "button", onClick: r, children: /* @__PURE__ */ a.jsx(Pe, { icon: Ft[d] }) }) });
ke.propTypes = {
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
ke.defaultProps = {
  iconName: "ellipsis"
};
const qt = "_layerButtonReel_1o59k_1", Yt = {
  layerButtonReel: qt
}, Qe = ({ buttons: r }) => /* @__PURE__ */ a.jsx("div", { className: Yt.layerButtonReel, children: r && Object.keys(r).map((d) => /* @__PURE__ */ a.jsx(ke, { iconName: d, onClick: r[d] })) });
Qe.propTypes = {
  buttons: u.objectOf(u.func)
};
Qe.defaultProps = {
  buttons: null
};
const Bt = "_layerToggle_gvlf4_7", Gt = "_slider_gvlf4_29", Ve = {
  layerToggle: Bt,
  switch: "_switch_gvlf4_12",
  slider: Gt
}, er = ({ layerName: r, isActive: d, onChange: f }) => /* @__PURE__ */ a.jsx("div", { className: Ve.layerToggle, children: /* @__PURE__ */ a.jsxs("div", { className: Ve.switch, children: [
  /* @__PURE__ */ a.jsx(
    "input",
    {
      type: "checkbox",
      value: r,
      checked: d,
      onChange: f
    }
  ),
  /* @__PURE__ */ a.jsx("span", { className: Ve.slider })
] }) });
er.propTypes = {
  layerName: u.string,
  isActive: u.bool,
  onChange: u.func.isRequired
};
er.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const Vt = "_layerCard_mism4_1", Ut = "_layerCardWrapper_mism4_11", zt = "_layerCardTextWrapper_mism4_20", Ht = "_layerCardTitle_mism4_28", Jt = "_layerCardDescription_mism4_32", Kt = "_layerCardControls_mism4_37", Xt = "_layerCardToggle_mism4_42", Zt = "_layerCardChildren_mism4_47", ye = {
  layerCard: Vt,
  layerCardWrapper: Ut,
  layerCardTextWrapper: zt,
  layerCardTitle: Ht,
  layerCardDescription: Jt,
  layerCardControls: Kt,
  layerCardToggle: Xt,
  layerCardChildren: Zt
}, Qt = ({ layerName: r, isActive: d, onChange: f, buttons: c, description: v, children: p }) => /* @__PURE__ */ a.jsxs("div", { className: ye.layerCard, children: [
  /* @__PURE__ */ a.jsxs("div", { className: ye.layerCardWrapper, children: [
    /* @__PURE__ */ a.jsxs("div", { className: ye.layerCardTextWrapper, children: [
      /* @__PURE__ */ a.jsx("span", { className: ye.layerCardTitle, children: r }),
      /* @__PURE__ */ a.jsx("span", { className: ye.layerCardDescription, children: v })
    ] }),
    /* @__PURE__ */ a.jsx(Qe, { buttons: c }),
    f && /* @__PURE__ */ a.jsx(
      er,
      {
        layerName: r,
        isActive: d,
        onChange: f
      }
    )
  ] }),
  /* @__PURE__ */ a.jsx("div", { className: ye.layerCardChildren, children: p })
] });
Qt.propTypes = {
  layerName: u.string.isRequired,
  isActive: u.bool,
  onChange: u.func.isRequired,
  buttons: u.objectOf(u.func),
  description: u.string,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ])
};
const en = "_swatchContainer_771fp_2", rn = "_swatch_771fp_2", tn = "_swatchLabel_771fp_18", nn = "_swatchValue_771fp_24", Oe = {
  swatchContainer: en,
  swatch: rn,
  swatchLabel: tn,
  swatchValue: nn
}, an = ({ color: r, label: d = "", value: f, units: c = "" }) => /* @__PURE__ */ a.jsxs("div", { className: Oe.swatchContainer, children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: Oe.swatch,
      style: { backgroundColor: r }
    }
  ),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-label", className: Oe.swatchLabel, children: d }),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-value", className: Oe.swatchValue, children: f !== void 0 && `${f}${c}` })
] }), on = "_swatchLegend_qiaru_1", sn = {
  swatchLegend: on
}, cn = ({ swatches: r }) => /* @__PURE__ */ a.jsx("div", { className: sn.swatchLegend, children: r && r.map((d) => {
  const { color: f, label: c, value: v, units: p } = d;
  return /* @__PURE__ */ a.jsx(
    an,
    {
      label: c,
      color: f,
      value: v,
      units: p
    },
    c
  );
}) });
cn.propTypes = {
  swatches: u.arrayOf(u.objectOf(u.string)).isRequired
};
const ln = "_slider_1bnet_1", un = "_sliderLabel_1bnet_16", fn = "_sliderThumb_1bnet_20", dn = "_sliderTrack_1bnet_41", pn = "_comparisonControl_1bnet_66", Ce = {
  slider: ln,
  sliderLabel: un,
  sliderThumb: fn,
  sliderTrack: dn,
  comparisonControl: pn
}, ra = ({
  label: r,
  showLabel: d = !0,
  onChange: f,
  value: c = 50,
  ...v
}) => /* @__PURE__ */ a.jsx("div", { className: Ce.comparisonControl, children: /* @__PURE__ */ a.jsxs(kr, { maxValue: 94, minValue: 6, step: 0.1, className: Ce.slider, "aria-label": !d && typeof r == "string" ? r : void 0, onChange: f, value: c, ...v, children: [
  d && /* @__PURE__ */ a.jsx(Xe, { className: Ce.sliderLabel, children: r }),
  /* @__PURE__ */ a.jsx($r, { className: Ce.sliderTrack, children: /* @__PURE__ */ a.jsx(Ar, { className: Ce.sliderThumb, children: /* @__PURE__ */ a.jsx(Pe, { color: "white", icon: ut }) }) })
] }) }), vn = "_datePicker_ywin1_1 react-aria-DatePicker", yn = "_dateInput_ywin1_12 react-aria-DateInput", hn = "_hoverDatepicker_ywin1_17", Ue = {
  datePicker: vn,
  dateInput: yn,
  hoverDatepicker: hn
}, ze = (r) => new Rt(r.getFullYear(), r.getMonth() + 1, r.getDate()), ta = ({
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
  const [T, A] = Ke(!1), { hoverProps: F, isHovered: z } = xt({}), M = c ? ze(c) : null, V = h ? ze(h) : null, B = R ? ze(R) : null, q = (L) => {
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
      "aria-labelledby": g,
      maxValue: V,
      minValue: B,
      ...m,
      children: [
        r && /* @__PURE__ */ a.jsx(Xe, { children: r }),
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
              onHoverChange: (L) => A(L),
              children: /* @__PURE__ */ a.jsx(Pe, { icon: ft })
            }
          )
        ] }),
        d && /* @__PURE__ */ a.jsx(mt, { slot: "description", children: d }),
        f ? /* @__PURE__ */ a.jsx(vr, { children: f }) : /* @__PURE__ */ a.jsx(vr, {}),
        /* @__PURE__ */ a.jsx(_t, { children: /* @__PURE__ */ a.jsx(bt, { children: /* @__PURE__ */ a.jsxs(gt, { children: [
          /* @__PURE__ */ a.jsxs("header", { children: [
            /* @__PURE__ */ a.jsx(We, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ a.jsx(Tt, {}),
            /* @__PURE__ */ a.jsx(We, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ a.jsx(Et, { children: (L) => /* @__PURE__ */ a.jsx(Ct, { date: L }) })
        ] }) }) })
      ]
    }
  );
}, mn = "_gradient_1w8qh_1", _n = "_gradientNumbers_1w8qh_6", bn = "_gradientLegend_1w8qh_11", we = {
  gradient: mn,
  gradientNumbers: _n,
  gradientLegend: bn
}, gn = ({
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
    const A = (c + (v - c) / g * (T + 1)).toPrecision(y);
    return /* @__PURE__ */ a.jsx("span", { children: A }, A);
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
            background: `linear-gradient(to right, ${d} , ${f})`
          }
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: we.gradientNumbers, children: [
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
      p && /* @__PURE__ */ a.jsxs("div", { className: we.uiTitle, children: [
        " ",
        r
      ] })
    ] })
  ] });
};
gn.propTypes = {
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
const Tn = "_slider_eylbg_1", En = "_sliderLabel_eylbg_16", Cn = "_sliderThumb_eylbg_20", xn = "_sliderTrack_eylbg_41", Se = {
  slider: Tn,
  sliderLabel: En,
  sliderThumb: Cn,
  sliderTrack: xn
}, Rn = ({
  className: r,
  label: d = "",
  onChange: f,
  minValue: c,
  maxValue: v,
  step: p,
  value: g = 0,
  showLabel: y,
  ...h
}) => /* @__PURE__ */ a.jsxs(kr, { maxValue: v, minValue: c, step: p, className: `${Se.slider} ${r || ""}`.trim(), "aria-label": !y && typeof d == "string" ? d : void 0, onChange: f, value: g, ...h, children: [
  y && /* @__PURE__ */ a.jsx(Xe, { className: Se.sliderLabel, children: d }),
  /* @__PURE__ */ a.jsx($r, { className: Se.sliderTrack, children: /* @__PURE__ */ a.jsx(Ar, { className: Se.sliderThumb }) })
] }), jn = "_layerGroupButton_1twxx_1", On = "_layerGroupChevron_1twxx_12", wn = "_layerGroupName_1twxx_25", Sn = "_layerGroupWrapper_1twxx_32", Pn = "_layerGroupChildren_1twxx_32", xe = {
  layerGroupButton: jn,
  layerGroupChevron: On,
  layerGroupName: wn,
  layerGroupWrapper: Sn,
  layerGroupChildren: Pn
}, kn = ({ groupName: r, children: d }) => {
  const [f, c] = Ke(!1), v = () => {
    c(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: xe.layerGroupWrapper, children: [
    /* @__PURE__ */ a.jsxs("button", { type: "button", className: xe.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChevron, children: /* @__PURE__ */ a.jsx(Pe, { size: "md", fixedWidth: !0, icon: f ? dt : Pr }) }),
      /* @__PURE__ */ a.jsx("span", { className: xe.layerGroupName, children: r })
    ] }),
    f && /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChildren, children: d })
  ] });
};
kn.propTypes = {
  groupName: u.string,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const $n = "_mapWrapper_1gyf5_1", An = "_mapContainer_1gyf5_10", jr = {
  mapWrapper: $n,
  mapContainer: An
}, In = ({ mapContainer: r, id: d, children: f }) => /* @__PURE__ */ a.jsxs("div", { className: jr.mapWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: jr.mapContainer, id: d, ref: r }),
  f
] });
In.propTypes = {
  mapContainer: u.oneOfType([
    u.func,
    u.shape({ current: u.instanceOf(Element) })
  ]),
  children: u.node,
  id: u.string
};
const Dn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "nav-container", children: r });
Dn.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Nn = "_infoPanelContainer_gnoj6_1", Ln = "_topLeft_gnoj6_13", Wn = "_topRight_gnoj6_18", Mn = "_centerLeft_gnoj6_23", Fn = "_centerRight_gnoj6_28", qn = "_bottomLeft_gnoj6_33", Yn = "_bottomRight_gnoj6_38", Or = {
  infoPanelContainer: Nn,
  topLeft: Ln,
  topRight: Wn,
  centerLeft: Mn,
  centerRight: Fn,
  bottomLeft: qn,
  bottomRight: Yn
}, na = ({ children: r, position: d = "centerRight" }) => /* @__PURE__ */ a.jsx("aside", { className: `${Or.infoPanelContainer} ${Or[d]}`, children: r }), Bn = ({ showToggle: r, children: d }) => {
  const [f, c] = Ke(!1), v = `sidebar ${f ? "closed" : ""}`, p = () => {
    c(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ a.jsx("div", { className: v, children: d }),
    r && /* @__PURE__ */ a.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ a.jsx(
      ke,
      {
        onClick: p,
        iconName: f ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
Bn.propTypes = {
  showToggle: u.bool,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Gn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "layout-stacked", children: r });
Gn.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Vn = ({ align: r = "left", children: d }) => /* @__PURE__ */ a.jsx("div", { className: `layout-standard ${r}`, children: d });
Vn.propTypes = {
  align: u.oneOf(["left", "right"]),
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Un = "_sliderControlWrapper_2tznx_1", zn = "_sliderLabel_2tznx_9", wr = {
  sliderControlWrapper: Un,
  sliderLabel: zn
}, Hn = ({ title: r, units: d, sliderConfig: f }) => /* @__PURE__ */ a.jsxs("div", { className: wr.sliderControlWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ a.jsx("div", {}),
  f && f.map((c) => {
    const { label: v } = c;
    return /* @__PURE__ */ a.jsx("div", { className: wr.sliderLabel, children: v });
  }),
  f && f.map((c) => {
    const { onChange: v, min: p, max: g, step: y, value: h } = c;
    return /* @__PURE__ */ a.jsx(
      Rn,
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
Hn.propTypes = {
  title: u.string.isRequired,
  units: u.string.isRequired,
  sliderConfig: u.arrayOf(u.objectOf(u.string)).isRequired
};
export {
  ra as ComparisonControl,
  ta as DatePicker,
  gn as GradientLegend,
  ke as IconButton,
  na as InfoPanelContainer,
  Qe as LayerButtonReel,
  Qt as LayerCard,
  kn as LayerGroup,
  er as LayerToggle,
  In as MapContainer,
  Dn as NavContainer,
  Bn as SidebarContainer,
  Rn as SimpleSlider,
  Hn as SliderControl,
  Gn as Stacked,
  Vn as Standard,
  an as Swatch,
  cn as SwatchLegend
};
