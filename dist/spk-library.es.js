import wr, { useState as ke } from "react";
import { FontAwesomeIcon as Re } from "@fortawesome/react-fontawesome";
import { faTrash as at, faFilter as ot, faInfo as Or, faFillDrip as it, faEllipsisVertical as st, faChevronRight as Sr, faChevronLeft as ct, faArrowsLeftRight as lt, faCalendar as ut, faChevronDown as ft } from "@fortawesome/free-solid-svg-icons";
import { TooltipTrigger as dt, Tooltip as pt, Button as Ae, Slider as Pr, Label as Ke, SliderTrack as Ar, SliderThumb as kr, DatePicker as vt, Group as yt, DateInput as ht, DateSegment as mt, Text as _t, FieldError as dr, Popover as bt, Dialog as gt, Calendar as Tt, Heading as Ct, CalendarGrid as Et, CalendarCell as xt } from "react-aria-components";
import { useHover as Rt } from "react-aria";
import { CalendarDate as jt } from "@internationalized/date";
import './index.css';function wt(r) {
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
  var r = wr, f = Symbol.for("react.element"), d = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(y, h, R) {
    var m, T = {}, $ = null, F = null;
    R !== void 0 && ($ = "" + R), h.key !== void 0 && ($ = "" + h.key), h.ref !== void 0 && (F = h.ref);
    for (m in h) s.call(h, m) && !p.hasOwnProperty(m) && (T[m] = h[m]);
    if (y && y.defaultProps) for (m in h = y.defaultProps, h) T[m] === void 0 && (T[m] = h[m]);
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
    var r = wr, f = Symbol.for("react.element"), d = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
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
        var W = i.map(function(A) {
          return String(A);
        });
        W.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, W);
      }
    }
    var Y = !1, c = !1, ne = !1, he = !1, me = !1, le;
    le = Symbol.for("react.module.reference");
    function _e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === p || me || e === v || e === R || e === m || he || e === F || Y || c || ne || typeof e == "object" && e !== null && (e.$$typeof === $ || e.$$typeof === T || e.$$typeof === b || e.$$typeof === y || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function ue(e, t, i) {
      var _ = e.displayName;
      if (_)
        return _;
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
        case R:
          return "Suspense";
        case m:
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
            var _ = e.displayName || null;
            return _ !== null ? _ : K(e.type) || "Memo";
          case $: {
            var I = e, W = I._payload, A = I._init;
            try {
              return K(A(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, Q, te, ie, de, n, l, j;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, te = console.info, ie = console.warn, de = console.error, n = console.group, l = console.groupCollapsed, j = console.groupEnd;
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
    function w(e, t, i) {
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
      var W;
      W = C.current, C.current = null, g();
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
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && O.set(e, re), re;
                  }
                while (G >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        k = !1, C.current = W, P(), Error.prepareStackTrace = I;
      }
      var ye = e ? e.displayName || e.name : "", ce = ye ? w(ye) : "";
      return typeof e == "function" && O.set(e, ce), ce;
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
        return w(e);
      switch (e) {
        case R:
          return w("Suspense");
        case m:
          return w("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ee(e.render);
          case T:
            return se(e.type, t, i);
          case $: {
            var _ = e, I = _._payload, W = _._init;
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
    function Dr(e, t, i, _, I) {
      {
        var W = Function.call.bind(be);
        for (var A in e)
          if (W(e, A)) {
            var S = void 0;
            try {
              if (typeof e[A] != "function") {
                var J = Error((_ || "React class") + ": " + i + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              S = e[A](t, A, _, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              S = G;
            }
            S && !(S instanceof Error) && (je(I), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", i, A, typeof S), je(null)), S instanceof Error && !(S.message in Qe) && (Qe[S.message] = !0, je(I), q("Failed %s type: %s", i, S.message), je(null));
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
        return rr(e), !1;
      } catch {
        return !0;
      }
    }
    function rr(e) {
      return "" + e;
    }
    function tr(e) {
      if (Mr(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wr(e)), rr(e);
    }
    var ge = B.ReactCurrentOwner, Fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nr, ar, Ie;
    Ie = {};
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
        Ie[i] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), e.ref), Ie[i] = !0);
      }
    }
    function Gr(e, t) {
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
    function Vr(e, t) {
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
    var Ur = function(e, t, i, _, I, W, A) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: A,
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
        var W, A = {}, S = null, J = null;
        i !== void 0 && (tr(i), S = "" + i), Yr(t) && (tr(t.key), S = "" + t.key), qr(t) && (J = t.ref, Br(t, I));
        for (W in t)
          be.call(t, W) && !Fr.hasOwnProperty(W) && (A[W] = t[W]);
        if (e && e.defaultProps) {
          var G = e.defaultProps;
          for (W in G)
            A[W] === void 0 && (A[W] = G[W]);
        }
        if (S || J) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          S && Gr(A, U), J && Vr(A, U);
        }
        return Ur(e, S, J, I, _, ge.current, A);
      }
    }
    var Ne = B.ReactCurrentOwner, or = B.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var t = e._owner, i = se(e.type, e._source, t ? t.type : null);
        or.setExtraStackFrame(i);
      } else
        or.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function ir() {
      {
        if (Ne.current) {
          var e = K(Ne.current.type);
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
    var sr = {};
    function Jr(e) {
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
        var i = Jr(t);
        if (sr[i])
          return;
        sr[i] = !0;
        var _ = "";
        e && e._owner && e._owner !== Ne.current && (_ = " It was passed a child from " + K(e._owner.type) + "."), ve(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, _), ve(null);
      }
    }
    function lr(e, t) {
      {
        if (typeof e != "object")
          return;
        if ($e(e))
          for (var i = 0; i < e.length; i++) {
            var _ = e[i];
            Le(_) && cr(_, t);
          }
        else if (Le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = V(e);
          if (typeof I == "function" && I !== e.entries)
            for (var W = I.call(e), A; !(A = W.next()).done; )
              Le(A.value) && cr(A.value, t);
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
          Dr(i, e.props, "prop", _, e);
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
            ve(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), ve(null);
            break;
          }
        }
        e.ref !== null && (ve(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var ur = {};
    function fr(e, t, i, _, I, W) {
      {
        var A = _e(e);
        if (!A) {
          var S = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Hr();
          J ? S += J : S += ir();
          var G;
          e === null ? G = "null" : $e(e) ? G = "array" : e !== void 0 && e.$$typeof === f ? (G = "<" + (K(e.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : G = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, S);
        }
        var U = zr(e, t, i, I, W);
        if (U == null)
          return U;
        if (A) {
          var re = t.children;
          if (re !== void 0)
            if (_)
              if ($e(re)) {
                for (var ye = 0; ye < re.length; ye++)
                  lr(re[ye], e);
                Object.freeze && Object.freeze(re);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr(re, e);
        }
        if (be.call(t, "key")) {
          var ce = K(e), Z = Object.keys(t).filter(function(nt) {
            return nt !== "key";
          }), We = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[ce + We]) {
            var tt = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, We, ce, tt, ce), ur[ce + We] = !0;
          }
        }
        return e === s ? Xr(U) : Kr(U), U;
      }
    }
    function Zr(e, t, i) {
      return fr(e, t, i, !0);
    }
    function Qr(e, t, i) {
      return fr(e, t, i, !1);
    }
    var et = Qr, rt = Zr;
    Ce.Fragment = s, Ce.jsx = et, Ce.jsxs = rt;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? He.exports = Ot() : He.exports = St();
var a = He.exports, Je = { exports: {} }, we = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function Pt() {
  if (yr) return N;
  yr = 1;
  var r = typeof Symbol == "function" && Symbol.for, f = r ? Symbol.for("react.element") : 60103, d = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, b = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, R = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, $ = r ? Symbol.for("react.suspense_list") : 60120, F = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
  function L(c) {
    if (typeof c == "object" && c !== null) {
      var ne = c.$$typeof;
      switch (ne) {
        case f:
          switch (c = c.type, c) {
            case h:
            case R:
            case s:
            case p:
            case v:
            case T:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case y:
                case m:
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
    return L(c) === R;
  }
  return N.AsyncMode = h, N.ConcurrentMode = R, N.ContextConsumer = y, N.ContextProvider = b, N.Element = f, N.ForwardRef = m, N.Fragment = s, N.Lazy = z, N.Memo = F, N.Portal = d, N.Profiler = p, N.StrictMode = v, N.Suspense = T, N.isAsyncMode = function(c) {
    return Y(c) || L(c) === h;
  }, N.isConcurrentMode = Y, N.isContextConsumer = function(c) {
    return L(c) === y;
  }, N.isContextProvider = function(c) {
    return L(c) === b;
  }, N.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === f;
  }, N.isForwardRef = function(c) {
    return L(c) === m;
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
    return typeof c == "string" || typeof c == "function" || c === s || c === R || c === p || c === v || c === T || c === $ || typeof c == "object" && c !== null && (c.$$typeof === z || c.$$typeof === F || c.$$typeof === b || c.$$typeof === y || c.$$typeof === m || c.$$typeof === V || c.$$typeof === B || c.$$typeof === q || c.$$typeof === M);
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
function At() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, f = r ? Symbol.for("react.element") : 60103, d = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, b = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, R = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, $ = r ? Symbol.for("react.suspense_list") : 60120, F = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
    function L(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === s || o === R || o === p || o === v || o === T || o === $ || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === F || o.$$typeof === b || o.$$typeof === y || o.$$typeof === m || o.$$typeof === V || o.$$typeof === B || o.$$typeof === q || o.$$typeof === M);
    }
    function Y(o) {
      if (typeof o == "object" && o !== null) {
        var ee = o.$$typeof;
        switch (ee) {
          case f:
            var pe = o.type;
            switch (pe) {
              case h:
              case R:
              case s:
              case p:
              case v:
              case T:
                return pe;
              default:
                var se = pe && pe.$$typeof;
                switch (se) {
                  case y:
                  case m:
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
    var c = h, ne = R, he = y, me = b, le = f, _e = m, ue = s, fe = z, K = F, X = d, ae = p, Q = v, te = T, ie = !1;
    function de(o) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(o) || Y(o) === h;
    }
    function n(o) {
      return Y(o) === R;
    }
    function l(o) {
      return Y(o) === y;
    }
    function j(o) {
      return Y(o) === b;
    }
    function x(o) {
      return typeof o == "object" && o !== null && o.$$typeof === f;
    }
    function g(o) {
      return Y(o) === m;
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
    function w(o) {
      return Y(o) === d;
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
    D.AsyncMode = c, D.ConcurrentMode = ne, D.ContextConsumer = he, D.ContextProvider = me, D.Element = le, D.ForwardRef = _e, D.Fragment = ue, D.Lazy = fe, D.Memo = K, D.Portal = X, D.Profiler = ae, D.StrictMode = Q, D.Suspense = te, D.isAsyncMode = de, D.isConcurrentMode = n, D.isContextConsumer = l, D.isContextProvider = j, D.isElement = x, D.isForwardRef = g, D.isFragment = P, D.isLazy = C, D.isMemo = E, D.isPortal = w, D.isProfiler = k, D.isStrictMode = O, D.isSuspense = H, D.isValidElementType = L, D.typeOf = Y;
  }()), D;
}
var mr;
function $r() {
  return mr || (mr = 1, process.env.NODE_ENV === "production" ? we.exports = Pt() : we.exports = At()), we.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Me, _r;
function kt() {
  if (_r) return Me;
  _r = 1;
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
      var h = Object.getOwnPropertyNames(b).map(function(m) {
        return b[m];
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
  return Me = v() ? Object.assign : function(p, b) {
    for (var y, h = s(p), R, m = 1; m < arguments.length; m++) {
      y = Object(arguments[m]);
      for (var T in y)
        f.call(y, T) && (h[T] = y[T]);
      if (r) {
        R = r(y);
        for (var $ = 0; $ < R.length; $++)
          d.call(y, R[$]) && (h[R[$]] = y[R[$]]);
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
function Ir() {
  return gr || (gr = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var Ye, Tr;
function $t() {
  if (Tr) return Ye;
  Tr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var f = Xe(), d = {}, s = Ir();
    r = function(p) {
      var b = "Warning: " + p;
      typeof console < "u" && console.error(b);
      try {
        throw new Error(b);
      } catch {
      }
    };
  }
  function v(p, b, y, h, R) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in p)
        if (s(p, m)) {
          var T;
          try {
            if (typeof p[m] != "function") {
              var $ = Error(
                (h || "React class") + ": " + y + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw $.name = "Invariant Violation", $;
            }
            T = p[m](b, m, h, y, null, f);
          } catch (z) {
            T = z;
          }
          if (T && !(T instanceof Error) && r(
            (h || "React class") + ": type specification of " + y + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in d)) {
            d[T.message] = !0;
            var F = R ? R() : "";
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
function It() {
  if (Cr) return Be;
  Cr = 1;
  var r = $r(), f = kt(), d = Xe(), s = Ir(), v = $t(), p = function() {
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
    var R = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function T(n) {
      var l = n && (R && n[R] || n[m]);
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
      node: _e(),
      objectOf: me,
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
      function x(P, C, E, w, k, O, H) {
        if (w = w || $, O = O || E, H !== d) {
          if (h) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = w + ":" + E;
            !l[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + w + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ee] = !0, j++);
          }
        }
        return C[E] == null ? P ? C[E] === null ? new M("The " + k + " `" + O + "` is marked as required " + ("in `" + w + "`, but its value is `null`.")) : new M("The " + k + " `" + O + "` is marked as required in " + ("`" + w + "`, but its value is `undefined`.")) : null : n(C, E, w, k, O);
      }
      var g = x.bind(null, !1);
      return g.isRequired = x.bind(null, !0), g;
    }
    function B(n) {
      function l(j, x, g, P, C, E) {
        var w = j[x], k = Q(w);
        if (k !== n) {
          var O = te(w);
          return new M(
            "Invalid " + P + " `" + C + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected ") + ("`" + n + "`."),
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
      function l(j, x, g, P, C) {
        if (typeof n != "function")
          return new M("Property `" + C + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var E = j[x];
        if (!Array.isArray(E)) {
          var w = Q(E);
          return new M("Invalid " + P + " `" + C + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected an array."));
        }
        for (var k = 0; k < E.length; k++) {
          var O = n(E, k, g, P, C + "[" + k + "]", d);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return V(l);
    }
    function Y() {
      function n(l, j, x, g, P) {
        var C = l[j];
        if (!y(C)) {
          var E = Q(C);
          return new M("Invalid " + g + " `" + P + "` of type " + ("`" + E + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(n);
    }
    function c() {
      function n(l, j, x, g, P) {
        var C = l[j];
        if (!r.isValidElementType(C)) {
          var E = Q(C);
          return new M("Invalid " + g + " `" + P + "` of type " + ("`" + E + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(n);
    }
    function ne(n) {
      function l(j, x, g, P, C) {
        if (!(j[x] instanceof n)) {
          var E = n.name || $, w = de(j[x]);
          return new M("Invalid " + P + " `" + C + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected ") + ("instance of `" + E + "`."));
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
      function l(j, x, g, P, C) {
        for (var E = j[x], w = 0; w < n.length; w++)
          if (z(E, n[w]))
            return null;
        var k = JSON.stringify(n, function(H, o) {
          var ee = te(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new M("Invalid " + P + " `" + C + "` of value `" + String(E) + "` " + ("supplied to `" + g + "`, expected one of " + k + "."));
      }
      return V(l);
    }
    function me(n) {
      function l(j, x, g, P, C) {
        if (typeof n != "function")
          return new M("Property `" + C + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var E = j[x], w = Q(E);
        if (w !== "object")
          return new M("Invalid " + P + " `" + C + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected an object."));
        for (var k in E)
          if (s(E, k)) {
            var O = n(E, k, g, P, C + "." + k, d);
            if (O instanceof Error)
              return O;
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
      function x(g, P, C, E, w) {
        for (var k = [], O = 0; O < n.length; O++) {
          var H = n[O], o = H(g, P, C, E, w, d);
          if (o == null)
            return null;
          o.data && s(o.data, "expectedType") && k.push(o.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new M("Invalid " + E + " `" + w + "` supplied to " + ("`" + C + "`" + ee + "."));
      }
      return V(x);
    }
    function _e() {
      function n(l, j, x, g, P) {
        return X(l[j]) ? null : new M("Invalid " + g + " `" + P + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return V(n);
    }
    function ue(n, l, j, x, g) {
      return new M(
        (n || "React class") + ": " + l + " type `" + j + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function fe(n) {
      function l(j, x, g, P, C) {
        var E = j[x], w = Q(E);
        if (w !== "object")
          return new M("Invalid " + P + " `" + C + "` of type `" + w + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var k in n) {
          var O = n[k];
          if (typeof O != "function")
            return ue(g, P, C, k, te(O));
          var H = O(E, k, g, P, C + "." + k, d);
          if (H)
            return H;
        }
        return null;
      }
      return V(l);
    }
    function K(n) {
      function l(j, x, g, P, C) {
        var E = j[x], w = Q(E);
        if (w !== "object")
          return new M("Invalid " + P + " `" + C + "` of type `" + w + "` " + ("supplied to `" + g + "`, expected `object`."));
        var k = f({}, j[x], n);
        for (var O in k) {
          var H = n[O];
          if (s(n, O) && typeof H != "function")
            return ue(g, P, C, O, te(H));
          if (!H)
            return new M(
              "Invalid " + P + " `" + C + "` key `" + O + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(j[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var o = H(E, O, g, P, C + "." + O, d);
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
                var g = x.value;
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
function Nt() {
  if (Er) return Ge;
  Er = 1;
  var r = Xe();
  function f() {
  }
  function d() {
  }
  return d.resetWarningCache = f, Ge = function() {
    function s(b, y, h, R, m, T) {
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
  var Dt = $r(), Lt = !0;
  Je.exports = It()(Dt.isElement, Lt);
} else
  Je.exports = Nt()();
var Wt = Je.exports;
const u = /* @__PURE__ */ wt(Wt), Mt = "_iconButton_1963e_1", Ft = {
  iconButton: Mt
}, qt = {
  trash: at,
  filter: ot,
  info: Or,
  fill: it,
  ellipsis: st,
  chevronRight: Sr,
  chevronLeft: ct
}, Ze = ({ onClick: r, iconName: f }) => /* @__PURE__ */ a.jsx("div", { className: Ft.iconButton, children: /* @__PURE__ */ a.jsx("button", { "aria-label": f, type: "button", onClick: r, children: /* @__PURE__ */ a.jsx(Re, { icon: qt[f] }) }) });
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
const Yt = "_layerButtonReel_1o59k_1", Bt = {
  layerButtonReel: Yt
}, Gt = ({ buttons: r }) => /* @__PURE__ */ a.jsx("div", { className: Bt.layerButtonReel, children: r && Object.keys(r).map((f) => /* @__PURE__ */ a.jsx(Ze, { iconName: f, onClick: r[f] })) });
Gt.propTypes = {
  buttons: u.objectOf(u.func)
};
const Vt = "_layerToggle_gvlf4_7", Ut = "_slider_gvlf4_29", Ve = {
  layerToggle: Vt,
  switch: "_switch_gvlf4_12",
  slider: Ut
}, Nr = ({ layerName: r, isActive: f = !1, onChange: d }) => /* @__PURE__ */ a.jsx("div", { className: Ve.layerToggle, children: /* @__PURE__ */ a.jsxs("div", { className: Ve.switch, children: [
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
Nr.propTypes = {
  layerName: u.string,
  isActive: u.bool,
  onChange: u.func.isRequired
};
const zt = "_layerCard_mw8v9_1", Ht = "_layerCardAttributionWrapper_mw8v9_11", Jt = "_layerCardAttribution_mw8v9_11", Kt = "_layerCardHeader_mw8v9_25", Xt = "_layerCardTextWrapper_mw8v9_34", Zt = "_layerCardTitle_mw8v9_42", Qt = "_layerCardDescription_mw8v9_50", en = "_layerCardControls_mw8v9_59", rn = "_layerCardToggle_mw8v9_64", tn = "_layerCardContent_mw8v9_69", nn = "_layerCardInfoIcon_mw8v9_85", oe = {
  layerCard: zt,
  layerCardAttributionWrapper: Ht,
  layerCardAttribution: Jt,
  layerCardHeader: Kt,
  layerCardTextWrapper: Xt,
  layerCardTitle: Zt,
  layerCardDescription: Qt,
  layerCardControls: en,
  layerCardToggle: rn,
  layerCardContent: tn,
  layerCardInfoIcon: nn
}, an = ({ layerName: r, isActive: f, onChange: d, attribution: s, description: v, children: p }) => {
  const [b, y] = ke(!1), h = s && !!s.text && (f || b);
  return /* @__PURE__ */ a.jsxs("div", { className: oe.layerCard, children: [
    /* @__PURE__ */ a.jsxs("div", { className: oe.layerCardHeader, children: [
      /* @__PURE__ */ a.jsx("div", { className: oe.layerCardTextWrapper, children: /* @__PURE__ */ a.jsx("span", { className: oe.layerCardTitle, children: r }) }),
      /* @__PURE__ */ a.jsxs(dt, { delay: 300, children: [
        /* @__PURE__ */ a.jsx(pt, { children: "Toggle layer description" }),
        /* @__PURE__ */ a.jsx(Ae, { className: oe.layerCardInfoIcon, onClick: () => y(!b), children: /* @__PURE__ */ a.jsx(Re, { size: "xs", fontWeight: "bold", icon: Or }) })
      ] }),
      d && /* @__PURE__ */ a.jsx(
        Nr,
        {
          layerName: r,
          isActive: f,
          onChange: d
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: oe.layerCardContent, children: [
      v && b && /* @__PURE__ */ a.jsx("span", { className: oe.layerCardDescription, children: v }),
      h && /* @__PURE__ */ a.jsx("div", { className: oe.layerCardAttributionWrapper, children: /* @__PURE__ */ a.jsxs("span", { className: oe.layerCardAttribution, children: [
        "Source: ",
        /* @__PURE__ */ a.jsx("a", { href: s.url, children: s.text })
      ] }) }),
      p && p
    ] })
  ] });
};
an.propTypes = {
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
const on = "_swatchContainer_771fp_2", sn = "_swatch_771fp_2", cn = "_swatchLabel_771fp_18", ln = "_swatchValue_771fp_24", Oe = {
  swatchContainer: on,
  swatch: sn,
  swatchLabel: cn,
  swatchValue: ln
}, un = ({ color: r, label: f = "", value: d, units: s = "" }) => /* @__PURE__ */ a.jsxs("div", { className: Oe.swatchContainer, children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: Oe.swatch,
      style: { backgroundColor: r }
    }
  ),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-label", className: Oe.swatchLabel, children: f }),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-value", className: Oe.swatchValue, children: d !== void 0 && `${d}${s}` })
] }), fn = "_swatchLegend_qiaru_1", dn = {
  swatchLegend: fn
}, pn = ({ swatches: r }) => /* @__PURE__ */ a.jsx("div", { className: dn.swatchLegend, children: r && r.map((f) => {
  const { color: d, label: s, value: v, units: p } = f;
  return /* @__PURE__ */ a.jsx(
    un,
    {
      label: s,
      color: d,
      value: v,
      units: p
    },
    s
  );
}) });
pn.propTypes = {
  swatches: u.arrayOf(u.objectOf(u.string)).isRequired
};
const vn = "_slider_1bnet_1", yn = "_sliderLabel_1bnet_16", hn = "_sliderThumb_1bnet_20", mn = "_sliderTrack_1bnet_41", _n = "_comparisonControl_1bnet_66", Ee = {
  slider: vn,
  sliderLabel: yn,
  sliderThumb: hn,
  sliderTrack: mn,
  comparisonControl: _n
}, ia = ({
  label: r,
  showLabel: f = !0,
  onChange: d,
  value: s = 50,
  ...v
}) => /* @__PURE__ */ a.jsx("div", { className: Ee.comparisonControl, children: /* @__PURE__ */ a.jsxs(Pr, { maxValue: 94, minValue: 6, step: 0.1, className: Ee.slider, "aria-label": !f && typeof r == "string" ? r : void 0, onChange: d, value: s, ...v, children: [
  f && /* @__PURE__ */ a.jsx(Ke, { className: Ee.sliderLabel, children: r }),
  /* @__PURE__ */ a.jsx(Ar, { className: Ee.sliderTrack, children: /* @__PURE__ */ a.jsx(kr, { className: Ee.sliderThumb, children: /* @__PURE__ */ a.jsx(Re, { color: "white", icon: lt }) }) })
] }) }), bn = "_datePicker_ywin1_1 react-aria-DatePicker", gn = "_dateInput_ywin1_12 react-aria-DateInput", Tn = "_hoverDatepicker_ywin1_17", Ue = {
  datePicker: bn,
  dateInput: gn,
  hoverDatepicker: Tn
}, ze = (r) => new jt(r.getFullYear(), r.getMonth() + 1, r.getDate()), sa = ({
  label: r,
  helperText: f,
  errorMessage: d,
  value: s,
  onChange: v,
  "aria-label": p,
  "aria-labelledby": b,
  className: y,
  maxValue: h,
  minValue: R,
  ...m
}) => {
  const [T, $] = ke(!1), { hoverProps: F, isHovered: z } = Rt({}), M = s ? ze(s) : null, V = h ? ze(h) : null, B = R ? ze(R) : null, q = (L) => {
    if (L) {
      const Y = new Date(L.toString());
      v(Y);
    } else
      v(null);
  };
  return /* @__PURE__ */ a.jsxs(
    vt,
    {
      className: `${Ue.datePicker} ${y || ""}`.trim(),
      value: M,
      onChange: q,
      "aria-label": p,
      "aria-labelledby": b,
      maxValue: V,
      minValue: B,
      ...m,
      children: [
        r && /* @__PURE__ */ a.jsx(Ke, { children: r }),
        /* @__PURE__ */ a.jsxs(yt, { children: [
          /* @__PURE__ */ a.jsx(
            ht,
            {
              className: `${z || T ? Ue.hoverDatepicker : ""} ${Ue.dateInput}`.trim(),
              ...F,
              children: (L) => /* @__PURE__ */ a.jsx(mt, { segment: L })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Ae,
            {
              "aria-label": "Open calendar",
              onHoverChange: (L) => $(L),
              children: /* @__PURE__ */ a.jsx(Re, { icon: ut })
            }
          )
        ] }),
        f && /* @__PURE__ */ a.jsx(_t, { slot: "description", children: f }),
        d ? /* @__PURE__ */ a.jsx(dr, { children: d }) : /* @__PURE__ */ a.jsx(dr, {}),
        /* @__PURE__ */ a.jsx(bt, { children: /* @__PURE__ */ a.jsx(gt, { children: /* @__PURE__ */ a.jsxs(Tt, { children: [
          /* @__PURE__ */ a.jsxs("header", { children: [
            /* @__PURE__ */ a.jsx(Ae, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ a.jsx(Ct, {}),
            /* @__PURE__ */ a.jsx(Ae, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ a.jsx(Et, { children: (L) => /* @__PURE__ */ a.jsx(xt, { date: L }) })
        ] }) }) })
      ]
    }
  );
}, Cn = "_gradient_1w8qh_1", En = "_gradientNumbers_1w8qh_6", xn = "_gradientLegend_1w8qh_11", Se = {
  gradient: Cn,
  gradientNumbers: En,
  gradientLegend: xn
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
  const R = b > 0 ? Array(b - 1).fill(0).map((m, T) => {
    const $ = (s + (v - s) / b * (T + 1)).toPrecision(y);
    return /* @__PURE__ */ a.jsx("span", { children: $ }, $);
  }) : [];
  return /* @__PURE__ */ a.jsxs("div", { className: "gradient-box", children: [
    !p && /* @__PURE__ */ a.jsxs("div", { className: "ui-title", children: [
      " ",
      r
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: Se.gradientLegend, children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Se.gradient,
          style: {
            background: `linear-gradient(to right, ${f} , ${d})`
          }
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: Se.gradientNumbers, children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          s,
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
      p && /* @__PURE__ */ a.jsxs("div", { className: Se.uiTitle, children: [
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
const jn = "_slider_14ti7_1", wn = "_sliderLabel_14ti7_16", On = "_sliderThumb_14ti7_20", Sn = "_sliderTrack_14ti7_41", Pe = {
  slider: jn,
  sliderLabel: wn,
  sliderThumb: On,
  sliderTrack: Sn
}, Pn = ({
  className: r,
  label: f = "",
  onChange: d,
  minValue: s,
  maxValue: v,
  step: p,
  value: b = 0,
  showLabel: y,
  ...h
}) => /* @__PURE__ */ a.jsxs(Pr, { maxValue: v, minValue: s, step: p, className: `${Pe.slider} ${r || ""}`.trim(), "aria-label": !y && typeof f == "string" ? f : void 0, onChange: d, value: b, ...h, children: [
  y && /* @__PURE__ */ a.jsx(Ke, { className: Pe.sliderLabel, children: f }),
  /* @__PURE__ */ a.jsx(Ar, { className: Pe.sliderTrack, children: /* @__PURE__ */ a.jsx(kr, { className: Pe.sliderThumb }) })
] }), An = "_layerGroupWrapper_1p831_1", kn = "_layerGroupButton_1p831_5", $n = "_layerGroupChevron_1p831_17", In = "_layerGroupName_1p831_30", Nn = "_layerGroupChildren_1p831_42", xe = {
  layerGroupWrapper: An,
  layerGroupButton: kn,
  layerGroupChevron: $n,
  layerGroupName: In,
  layerGroupChildren: Nn
}, Dn = ({ groupName: r, children: f }) => {
  const [d, s] = ke(!1), v = () => {
    s(!d);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: xe.layerGroupWrapper, children: [
    /* @__PURE__ */ a.jsxs("button", { type: "button", className: xe.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChevron, children: /* @__PURE__ */ a.jsx(Re, { size: "sm", fixedWidth: !0, icon: d ? ft : Sr }) }),
      /* @__PURE__ */ a.jsx("span", { className: xe.layerGroupName, children: r })
    ] }),
    d && /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChildren, children: f })
  ] });
};
Dn.propTypes = {
  groupName: u.string,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Ln = "_mapWrapper_1gyf5_1", Wn = "_mapContainer_1gyf5_10", xr = {
  mapWrapper: Ln,
  mapContainer: Wn
}, Mn = ({ mapContainer: r, id: f, children: d }) => /* @__PURE__ */ a.jsxs("div", { className: xr.mapWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: xr.mapContainer, id: f, ref: r }),
  d
] });
Mn.propTypes = {
  mapContainer: u.oneOfType([
    u.func,
    u.shape({ current: u.instanceOf(Element) })
  ]),
  children: u.node,
  id: u.string
};
const Fn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "nav-container", children: r });
Fn.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const qn = "_infoPanelContainer_gnoj6_1", Yn = "_topLeft_gnoj6_13", Bn = "_topRight_gnoj6_18", Gn = "_centerLeft_gnoj6_23", Vn = "_centerRight_gnoj6_28", Un = "_bottomLeft_gnoj6_33", zn = "_bottomRight_gnoj6_38", Rr = {
  infoPanelContainer: qn,
  topLeft: Yn,
  topRight: Bn,
  centerLeft: Gn,
  centerRight: Vn,
  bottomLeft: Un,
  bottomRight: zn
}, ca = ({ children: r, position: f = "centerRight" }) => /* @__PURE__ */ a.jsx("aside", { className: `${Rr.infoPanelContainer} ${Rr[f]}`, children: r }), Hn = ({ showToggle: r, children: f }) => {
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
Hn.propTypes = {
  showToggle: u.bool,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Jn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "layout-stacked", children: r });
Jn.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Kn = ({ align: r = "left", children: f }) => /* @__PURE__ */ a.jsx("div", { className: `layout-standard ${r}`, children: f });
Kn.propTypes = {
  align: u.oneOf(["left", "right"]),
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Xn = "_sliderControlWrapper_2tznx_1", Zn = "_sliderLabel_2tznx_9", jr = {
  sliderControlWrapper: Xn,
  sliderLabel: Zn
}, Qn = ({ title: r, units: f, sliderConfig: d }) => /* @__PURE__ */ a.jsxs("div", { className: jr.sliderControlWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ a.jsx("div", {}),
  d && d.map((s) => {
    const { label: v } = s;
    return /* @__PURE__ */ a.jsx("div", { className: jr.sliderLabel, children: v });
  }),
  d && d.map((s) => {
    const { onChange: v, min: p, max: b, step: y, value: h } = s;
    return /* @__PURE__ */ a.jsx(
      Pn,
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
Qn.propTypes = {
  title: u.string.isRequired,
  units: u.string.isRequired,
  sliderConfig: u.arrayOf(u.objectOf(u.string)).isRequired
};
export {
  ia as ComparisonControl,
  sa as DatePicker,
  Rn as GradientLegend,
  Ze as IconButton,
  ca as InfoPanelContainer,
  Gt as LayerButtonReel,
  an as LayerCard,
  Dn as LayerGroup,
  Nr as LayerToggle,
  Mn as MapContainer,
  Fn as NavContainer,
  Hn as SidebarContainer,
  Pn as SimpleSlider,
  Qn as SliderControl,
  Jn as Stacked,
  Kn as Standard,
  un as Swatch,
  pn as SwatchLegend
};
