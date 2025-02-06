import jr, { useState as Je } from "react";
import { FontAwesomeIcon as Pe } from "@fortawesome/react-fontawesome";
import { faTrash as rt, faFilter as tt, faInfo as nt, faFillDrip as at, faEllipsisVertical as ot, faChevronRight as Or, faChevronLeft as it, faArrowsLeftRight as st, faCalendar as ct, faChevronDown as lt } from "@fortawesome/free-solid-svg-icons";
import { Slider as Sr, Label as Ke, SliderTrack as wr, SliderThumb as Pr, DatePicker as ut, Group as ft, DateInput as dt, DateSegment as pt, Button as We, Text as vt, FieldError as yt, Popover as ht, Dialog as mt, Calendar as _t, Heading as bt, CalendarGrid as gt, CalendarCell as Tt } from "react-aria-components";
import { useHover as Et } from "react-aria";
import './index.css';function Ct(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ze = { exports: {} }, Te = {};
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
function xt() {
  if (pr) return Te;
  pr = 1;
  var r = jr, p = Symbol.for("react.element"), f = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(y, m, j) {
    var h, T = {}, w = null, M = null;
    j !== void 0 && (w = "" + j), m.key !== void 0 && (w = "" + m.key), m.ref !== void 0 && (M = m.ref);
    for (h in m) c.call(m, h) && !d.hasOwnProperty(h) && (T[h] = m[h]);
    if (y && y.defaultProps) for (h in m = y.defaultProps, m) T[h] === void 0 && (T[h] = m[h]);
    return { $$typeof: p, type: y, key: w, ref: M, props: T, _owner: v.current };
  }
  return Te.Fragment = f, Te.jsx = b, Te.jsxs = b, Te;
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
var vr;
function Rt() {
  return vr || (vr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = jr, p = Symbol.for("react.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), y = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), z = Symbol.iterator, W = "@@iterator";
    function U(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = z && e[z] || e[W];
      return typeof t == "function" ? t : null;
    }
    var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), _ = 1; _ < t; _++)
          i[_ - 1] = arguments[_];
        V("error", e, i);
      }
    }
    function V(e, t, i) {
      {
        var _ = G.ReactDebugCurrentFrame, I = _.getStackAddendum();
        I !== "" && (t += "%s", i = i.concat([I]));
        var L = i.map(function(A) {
          return String(A);
        });
        L.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, L);
      }
    }
    var Y = !1, s = !1, ne = !1, he = !1, me = !1, ce;
    ce = Symbol.for("react.module.reference");
    function _e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === d || me || e === v || e === j || e === h || he || e === M || Y || s || ne || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === T || e.$$typeof === b || e.$$typeof === y || e.$$typeof === m || // This needs to include all possible module reference object
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
        case d:
          return "Profiler";
        case v:
          return "StrictMode";
        case j:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var t = e;
            return ue(t) + ".Consumer";
          case b:
            var i = e;
            return ue(i._context) + ".Provider";
          case m:
            return le(e, e.render, "ForwardRef");
          case T:
            var _ = e.displayName || null;
            return _ !== null ? _ : K(e.type) || "Memo";
          case w: {
            var I = e, L = I._payload, A = I._init;
            try {
              return K(A(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, Q, te, oe, fe, n, l, R;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, te = console.info, oe = console.warn, fe = console.error, n = console.group, l = console.groupCollapsed, R = console.groupEnd;
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
    function k() {
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
              value: R
            })
          });
        }
        ae < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var E = G.ReactCurrentDispatcher, C;
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
    var $ = !1, S;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      S = new H();
    }
    function o(e, t) {
      if (!e || $)
        return "";
      {
        var i = S.get(e);
        if (i !== void 0)
          return i;
      }
      var _;
      $ = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = E.current, E.current = null, g();
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
          for (var P = Z.stack.split(`
`), J = _.stack.split(`
`), q = P.length - 1, B = J.length - 1; q >= 1 && B >= 0 && P[q] !== J[B]; )
            B--;
          for (; q >= 1 && B >= 0; q--, B--)
            if (P[q] !== J[B]) {
              if (q !== 1 || B !== 1)
                do
                  if (q--, B--, B < 0 || P[q] !== J[B]) {
                    var re = `
` + P[q].replace(" at new ", " at ");
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && S.set(e, re), re;
                  }
                while (q >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        $ = !1, E.current = L, k(), Error.prepareStackTrace = I;
      }
      var ve = e ? e.displayName || e.name : "", se = ve ? O(ve) : "";
      return typeof e == "function" && S.set(e, se), se;
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
        case j:
          return O("Suspense");
        case h:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return ee(e.render);
          case T:
            return ie(e.type, t, i);
          case w: {
            var _ = e, I = _._payload, L = _._init;
            try {
              return ie(L(I), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, er = {}, rr = G.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var t = e._owner, i = ie(e.type, e._source, t ? t.type : null);
        rr.setExtraStackFrame(i);
      } else
        rr.setExtraStackFrame(null);
    }
    function $r(e, t, i, _, I) {
      {
        var L = Function.call.bind(be);
        for (var A in e)
          if (L(e, A)) {
            var P = void 0;
            try {
              if (typeof e[A] != "function") {
                var J = Error((_ || "React class") + ": " + i + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              P = e[A](t, A, _, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              P = q;
            }
            P && !(P instanceof Error) && (Re(I), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", i, A, typeof P), Re(null)), P instanceof Error && !(P.message in er) && (er[P.message] = !0, Re(I), F("Failed %s type: %s", i, P.message), Re(null));
          }
      }
    }
    var Ir = Array.isArray;
    function Ae(e) {
      return Ir(e);
    }
    function Nr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Dr(e) {
      try {
        return tr(e), !1;
      } catch {
        return !0;
      }
    }
    function tr(e) {
      return "" + e;
    }
    function nr(e) {
      if (Dr(e))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nr(e)), tr(e);
    }
    var ge = G.ReactCurrentOwner, Lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, or, $e;
    $e = {};
    function Wr(e) {
      if (be.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Mr(e) {
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
        $e[i] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), e.ref), $e[i] = !0);
      }
    }
    function qr(e, t) {
      {
        var i = function() {
          ar || (ar = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Yr(e, t) {
      {
        var i = function() {
          or || (or = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Br = function(e, t, i, _, I, L, A) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: A,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function Gr(e, t, i, _, I) {
      {
        var L, A = {}, P = null, J = null;
        i !== void 0 && (nr(i), P = "" + i), Mr(t) && (nr(t.key), P = "" + t.key), Wr(t) && (J = t.ref, Fr(t, I));
        for (L in t)
          be.call(t, L) && !Lr.hasOwnProperty(L) && (A[L] = t[L]);
        if (e && e.defaultProps) {
          var q = e.defaultProps;
          for (L in q)
            A[L] === void 0 && (A[L] = q[L]);
        }
        if (P || J) {
          var B = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          P && qr(A, B), J && Yr(A, B);
        }
        return Br(e, P, J, I, _, ge.current, A);
      }
    }
    var Ie = G.ReactCurrentOwner, ir = G.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var t = e._owner, i = ie(e.type, e._source, t ? t.type : null);
        ir.setExtraStackFrame(i);
      } else
        ir.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function De(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function sr() {
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
    function Vr(e) {
      return "";
    }
    var cr = {};
    function Ur(e) {
      {
        var t = sr();
        if (!t) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (t = `

Check the top-level render call using <` + i + ">.");
        }
        return t;
      }
    }
    function lr(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Ur(t);
        if (cr[i])
          return;
        cr[i] = !0;
        var _ = "";
        e && e._owner && e._owner !== Ie.current && (_ = " It was passed a child from " + K(e._owner.type) + "."), pe(e), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, _), pe(null);
      }
    }
    function ur(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ae(e))
          for (var i = 0; i < e.length; i++) {
            var _ = e[i];
            De(_) && lr(_, t);
          }
        else if (De(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = U(e);
          if (typeof I == "function" && I !== e.entries)
            for (var L = I.call(e), A; !(A = L.next()).done; )
              De(A.value) && lr(A.value, t);
        }
      }
    }
    function zr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var i;
        if (typeof t == "function")
          i = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === T))
          i = t.propTypes;
        else
          return;
        if (i) {
          var _ = K(t);
          $r(i, e.props, "prop", _, e);
        } else if (t.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var I = K(t);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Hr(e) {
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
    var fr = {};
    function dr(e, t, i, _, I, L) {
      {
        var A = _e(e);
        if (!A) {
          var P = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Vr();
          J ? P += J : P += sr();
          var q;
          e === null ? q = "null" : Ae(e) ? q = "array" : e !== void 0 && e.$$typeof === p ? (q = "<" + (K(e.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : q = typeof e, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, P);
        }
        var B = Gr(e, t, i, I, L);
        if (B == null)
          return B;
        if (A) {
          var re = t.children;
          if (re !== void 0)
            if (_)
              if (Ae(re)) {
                for (var ve = 0; ve < re.length; ve++)
                  ur(re[ve], e);
                Object.freeze && Object.freeze(re);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(re, e);
        }
        if (be.call(t, "key")) {
          var se = K(e), Z = Object.keys(t).filter(function(et) {
            return et !== "key";
          }), Le = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fr[se + Le]) {
            var Qr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Le, se, Qr, se), fr[se + Le] = !0;
          }
        }
        return e === c ? Hr(B) : zr(B), B;
      }
    }
    function Jr(e, t, i) {
      return dr(e, t, i, !0);
    }
    function Kr(e, t, i) {
      return dr(e, t, i, !1);
    }
    var Xr = Kr, Zr = Jr;
    Ee.Fragment = c, Ee.jsx = Xr, Ee.jsxs = Zr;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? ze.exports = xt() : ze.exports = Rt();
var a = ze.exports, He = { exports: {} }, je = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function jt() {
  if (yr) return N;
  yr = 1;
  var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, b = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, m = r ? Symbol.for("react.async_mode") : 60111, j = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, w = r ? Symbol.for("react.suspense_list") : 60120, M = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, W = r ? Symbol.for("react.block") : 60121, U = r ? Symbol.for("react.fundamental") : 60117, G = r ? Symbol.for("react.responder") : 60118, F = r ? Symbol.for("react.scope") : 60119;
  function V(s) {
    if (typeof s == "object" && s !== null) {
      var ne = s.$$typeof;
      switch (ne) {
        case p:
          switch (s = s.type, s) {
            case m:
            case j:
            case c:
            case d:
            case v:
            case T:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case y:
                case h:
                case z:
                case M:
                case b:
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
    return V(s) === j;
  }
  return N.AsyncMode = m, N.ConcurrentMode = j, N.ContextConsumer = y, N.ContextProvider = b, N.Element = p, N.ForwardRef = h, N.Fragment = c, N.Lazy = z, N.Memo = M, N.Portal = f, N.Profiler = d, N.StrictMode = v, N.Suspense = T, N.isAsyncMode = function(s) {
    return Y(s) || V(s) === m;
  }, N.isConcurrentMode = Y, N.isContextConsumer = function(s) {
    return V(s) === y;
  }, N.isContextProvider = function(s) {
    return V(s) === b;
  }, N.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === p;
  }, N.isForwardRef = function(s) {
    return V(s) === h;
  }, N.isFragment = function(s) {
    return V(s) === c;
  }, N.isLazy = function(s) {
    return V(s) === z;
  }, N.isMemo = function(s) {
    return V(s) === M;
  }, N.isPortal = function(s) {
    return V(s) === f;
  }, N.isProfiler = function(s) {
    return V(s) === d;
  }, N.isStrictMode = function(s) {
    return V(s) === v;
  }, N.isSuspense = function(s) {
    return V(s) === T;
  }, N.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === c || s === j || s === d || s === v || s === T || s === w || typeof s == "object" && s !== null && (s.$$typeof === z || s.$$typeof === M || s.$$typeof === b || s.$$typeof === y || s.$$typeof === h || s.$$typeof === U || s.$$typeof === G || s.$$typeof === F || s.$$typeof === W);
  }, N.typeOf = V, N;
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
function Ot() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, b = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, m = r ? Symbol.for("react.async_mode") : 60111, j = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, w = r ? Symbol.for("react.suspense_list") : 60120, M = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, W = r ? Symbol.for("react.block") : 60121, U = r ? Symbol.for("react.fundamental") : 60117, G = r ? Symbol.for("react.responder") : 60118, F = r ? Symbol.for("react.scope") : 60119;
    function V(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === c || o === j || o === d || o === v || o === T || o === w || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === M || o.$$typeof === b || o.$$typeof === y || o.$$typeof === h || o.$$typeof === U || o.$$typeof === G || o.$$typeof === F || o.$$typeof === W);
    }
    function Y(o) {
      if (typeof o == "object" && o !== null) {
        var ee = o.$$typeof;
        switch (ee) {
          case p:
            var de = o.type;
            switch (de) {
              case m:
              case j:
              case c:
              case d:
              case v:
              case T:
                return de;
              default:
                var ie = de && de.$$typeof;
                switch (ie) {
                  case y:
                  case h:
                  case z:
                  case M:
                  case b:
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
    var s = m, ne = j, he = y, me = b, ce = p, _e = h, le = c, ue = z, K = M, X = f, ae = d, Q = v, te = T, oe = !1;
    function fe(o) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(o) || Y(o) === m;
    }
    function n(o) {
      return Y(o) === j;
    }
    function l(o) {
      return Y(o) === y;
    }
    function R(o) {
      return Y(o) === b;
    }
    function x(o) {
      return typeof o == "object" && o !== null && o.$$typeof === p;
    }
    function g(o) {
      return Y(o) === h;
    }
    function k(o) {
      return Y(o) === c;
    }
    function E(o) {
      return Y(o) === z;
    }
    function C(o) {
      return Y(o) === M;
    }
    function O(o) {
      return Y(o) === f;
    }
    function $(o) {
      return Y(o) === d;
    }
    function S(o) {
      return Y(o) === v;
    }
    function H(o) {
      return Y(o) === T;
    }
    D.AsyncMode = s, D.ConcurrentMode = ne, D.ContextConsumer = he, D.ContextProvider = me, D.Element = ce, D.ForwardRef = _e, D.Fragment = le, D.Lazy = ue, D.Memo = K, D.Portal = X, D.Profiler = ae, D.StrictMode = Q, D.Suspense = te, D.isAsyncMode = fe, D.isConcurrentMode = n, D.isContextConsumer = l, D.isContextProvider = R, D.isElement = x, D.isForwardRef = g, D.isFragment = k, D.isLazy = E, D.isMemo = C, D.isPortal = O, D.isProfiler = $, D.isStrictMode = S, D.isSuspense = H, D.isValidElementType = V, D.typeOf = Y;
  }()), D;
}
var mr;
function kr() {
  return mr || (mr = 1, process.env.NODE_ENV === "production" ? je.exports = jt() : je.exports = Ot()), je.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Me, _r;
function St() {
  if (_r) return Me;
  _r = 1;
  var r = Object.getOwnPropertySymbols, p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function c(d) {
    if (d == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(d);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var d = new String("abc");
      if (d[5] = "de", Object.getOwnPropertyNames(d)[0] === "5")
        return !1;
      for (var b = {}, y = 0; y < 10; y++)
        b["_" + String.fromCharCode(y)] = y;
      var m = Object.getOwnPropertyNames(b).map(function(h) {
        return b[h];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var j = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        j[h] = h;
      }), Object.keys(Object.assign({}, j)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Me = v() ? Object.assign : function(d, b) {
    for (var y, m = c(d), j, h = 1; h < arguments.length; h++) {
      y = Object(arguments[h]);
      for (var T in y)
        p.call(y, T) && (m[T] = y[T]);
      if (r) {
        j = r(y);
        for (var w = 0; w < j.length; w++)
          f.call(y, j[w]) && (m[j[w]] = y[j[w]]);
      }
    }
    return m;
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
function Ar() {
  return gr || (gr = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var Ye, Tr;
function wt() {
  if (Tr) return Ye;
  Tr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var p = Xe(), f = {}, c = Ar();
    r = function(d) {
      var b = "Warning: " + d;
      typeof console < "u" && console.error(b);
      try {
        throw new Error(b);
      } catch {
      }
    };
  }
  function v(d, b, y, m, j) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in d)
        if (c(d, h)) {
          var T;
          try {
            if (typeof d[h] != "function") {
              var w = Error(
                (m || "React class") + ": " + y + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            T = d[h](b, h, m, y, null, p);
          } catch (z) {
            T = z;
          }
          if (T && !(T instanceof Error) && r(
            (m || "React class") + ": type specification of " + y + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in f)) {
            f[T.message] = !0;
            var M = j ? j() : "";
            r(
              "Failed " + y + " type: " + T.message + (M ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, Ye = v, Ye;
}
var Be, Er;
function Pt() {
  if (Er) return Be;
  Er = 1;
  var r = kr(), p = St(), f = Xe(), c = Ar(), v = wt(), d = function() {
  };
  process.env.NODE_ENV !== "production" && (d = function(y) {
    var m = "Warning: " + y;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function b() {
    return null;
  }
  return Be = function(y, m) {
    var j = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function T(n) {
      var l = n && (j && n[j] || n[h]);
      if (typeof l == "function")
        return l;
    }
    var w = "<<anonymous>>", M = {
      array: G("array"),
      bigint: G("bigint"),
      bool: G("boolean"),
      func: G("function"),
      number: G("number"),
      object: G("object"),
      string: G("string"),
      symbol: G("symbol"),
      any: F(),
      arrayOf: V,
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
    function W(n, l) {
      this.message = n, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    W.prototype = Error.prototype;
    function U(n) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, R = 0;
      function x(k, E, C, O, $, S, H) {
        if (O = O || w, S = S || C, H !== f) {
          if (m) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + C;
            !l[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (d(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ee] = !0, R++);
          }
        }
        return E[C] == null ? k ? E[C] === null ? new W("The " + $ + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new W("The " + $ + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : n(E, C, O, $, S);
      }
      var g = x.bind(null, !1);
      return g.isRequired = x.bind(null, !0), g;
    }
    function G(n) {
      function l(R, x, g, k, E, C) {
        var O = R[x], $ = Q(O);
        if ($ !== n) {
          var S = te(O);
          return new W(
            "Invalid " + k + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("`" + n + "`."),
            { expectedType: n }
          );
        }
        return null;
      }
      return U(l);
    }
    function F() {
      return U(b);
    }
    function V(n) {
      function l(R, x, g, k, E) {
        if (typeof n != "function")
          return new W("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var C = R[x];
        if (!Array.isArray(C)) {
          var O = Q(C);
          return new W("Invalid " + k + " `" + E + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an array."));
        }
        for (var $ = 0; $ < C.length; $++) {
          var S = n(C, $, g, k, E + "[" + $ + "]", f);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return U(l);
    }
    function Y() {
      function n(l, R, x, g, k) {
        var E = l[R];
        if (!y(E)) {
          var C = Q(E);
          return new W("Invalid " + g + " `" + k + "` of type " + ("`" + C + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return U(n);
    }
    function s() {
      function n(l, R, x, g, k) {
        var E = l[R];
        if (!r.isValidElementType(E)) {
          var C = Q(E);
          return new W("Invalid " + g + " `" + k + "` of type " + ("`" + C + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return U(n);
    }
    function ne(n) {
      function l(R, x, g, k, E) {
        if (!(R[x] instanceof n)) {
          var C = n.name || w, O = fe(R[x]);
          return new W("Invalid " + k + " `" + E + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return U(l);
    }
    function he(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? d(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : d("Invalid argument supplied to oneOf, expected an array.")), b;
      function l(R, x, g, k, E) {
        for (var C = R[x], O = 0; O < n.length; O++)
          if (z(C, n[O]))
            return null;
        var $ = JSON.stringify(n, function(H, o) {
          var ee = te(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new W("Invalid " + k + " `" + E + "` of value `" + String(C) + "` " + ("supplied to `" + g + "`, expected one of " + $ + "."));
      }
      return U(l);
    }
    function me(n) {
      function l(R, x, g, k, E) {
        if (typeof n != "function")
          return new W("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var C = R[x], O = Q(C);
        if (O !== "object")
          return new W("Invalid " + k + " `" + E + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an object."));
        for (var $ in C)
          if (c(C, $)) {
            var S = n(C, $, g, k, E + "." + $, f);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return U(l);
    }
    function ce(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && d("Invalid argument supplied to oneOfType, expected an instance of array."), b;
      for (var l = 0; l < n.length; l++) {
        var R = n[l];
        if (typeof R != "function")
          return d(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(R) + " at index " + l + "."
          ), b;
      }
      function x(g, k, E, C, O) {
        for (var $ = [], S = 0; S < n.length; S++) {
          var H = n[S], o = H(g, k, E, C, O, f);
          if (o == null)
            return null;
          o.data && c(o.data, "expectedType") && $.push(o.data.expectedType);
        }
        var ee = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new W("Invalid " + C + " `" + O + "` supplied to " + ("`" + E + "`" + ee + "."));
      }
      return U(x);
    }
    function _e() {
      function n(l, R, x, g, k) {
        return X(l[R]) ? null : new W("Invalid " + g + " `" + k + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return U(n);
    }
    function le(n, l, R, x, g) {
      return new W(
        (n || "React class") + ": " + l + " type `" + R + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function ue(n) {
      function l(R, x, g, k, E) {
        var C = R[x], O = Q(C);
        if (O !== "object")
          return new W("Invalid " + k + " `" + E + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var $ in n) {
          var S = n[$];
          if (typeof S != "function")
            return le(g, k, E, $, te(S));
          var H = S(C, $, g, k, E + "." + $, f);
          if (H)
            return H;
        }
        return null;
      }
      return U(l);
    }
    function K(n) {
      function l(R, x, g, k, E) {
        var C = R[x], O = Q(C);
        if (O !== "object")
          return new W("Invalid " + k + " `" + E + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        var $ = p({}, R[x], n);
        for (var S in $) {
          var H = n[S];
          if (c(n, S) && typeof H != "function")
            return le(g, k, E, S, te(H));
          if (!H)
            return new W(
              "Invalid " + k + " `" + E + "` key `" + S + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(R[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var o = H(C, S, g, k, E + "." + S, f);
          if (o)
            return o;
        }
        return null;
      }
      return U(l);
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
            var R = l.call(n), x;
            if (l !== n.entries) {
              for (; !(x = R.next()).done; )
                if (!X(x.value))
                  return !1;
            } else
              for (; !(x = R.next()).done; ) {
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
      return !n.constructor || !n.constructor.name ? w : n.constructor.name;
    }
    return M.checkPropTypes = v, M.resetWarningCache = v.resetWarningCache, M.PropTypes = M, M;
  }, Be;
}
var Ge, Cr;
function kt() {
  if (Cr) return Ge;
  Cr = 1;
  var r = Xe();
  function p() {
  }
  function f() {
  }
  return f.resetWarningCache = p, Ge = function() {
    function c(b, y, m, j, h, T) {
      if (T !== r) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    c.isRequired = c;
    function v() {
      return c;
    }
    var d = {
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
      resetWarningCache: p
    };
    return d.PropTypes = d, d;
  }, Ge;
}
if (process.env.NODE_ENV !== "production") {
  var At = kr(), $t = !0;
  He.exports = Pt()(At.isElement, $t);
} else
  He.exports = kt()();
var It = He.exports;
const u = /* @__PURE__ */ Ct(It), Nt = "_iconButton_1963e_1", Dt = {
  iconButton: Nt
}, Lt = {
  trash: rt,
  filter: tt,
  info: nt,
  fill: at,
  ellipsis: ot,
  chevronRight: Or,
  chevronLeft: it
}, ke = ({ onClick: r, iconName: p }) => /* @__PURE__ */ a.jsx("div", { className: Dt.iconButton, children: /* @__PURE__ */ a.jsx("button", { "aria-label": p, type: "button", onClick: r, children: /* @__PURE__ */ a.jsx(Pe, { icon: Lt[p] }) }) });
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
const Wt = "_layerButtonReel_1o59k_1", Mt = {
  layerButtonReel: Wt
}, Ze = ({ buttons: r }) => /* @__PURE__ */ a.jsx("div", { className: Mt.layerButtonReel, children: r && Object.keys(r).map((p) => /* @__PURE__ */ a.jsx(ke, { iconName: p, onClick: r[p] })) });
Ze.propTypes = {
  buttons: u.objectOf(u.func)
};
Ze.defaultProps = {
  buttons: null
};
const Ft = "_layerToggle_gvlf4_7", qt = "_slider_gvlf4_29", Ve = {
  layerToggle: Ft,
  switch: "_switch_gvlf4_12",
  slider: qt
}, Qe = ({ layerName: r, isActive: p, onChange: f }) => /* @__PURE__ */ a.jsx("div", { className: Ve.layerToggle, children: /* @__PURE__ */ a.jsxs("div", { className: Ve.switch, children: [
  /* @__PURE__ */ a.jsx(
    "input",
    {
      type: "checkbox",
      value: r,
      checked: p,
      onChange: f
    }
  ),
  /* @__PURE__ */ a.jsx("span", { className: Ve.slider })
] }) });
Qe.propTypes = {
  layerName: u.string,
  isActive: u.bool,
  onChange: u.func.isRequired
};
Qe.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const Yt = "_layerCard_mism4_1", Bt = "_layerCardWrapper_mism4_11", Gt = "_layerCardTextWrapper_mism4_20", Vt = "_layerCardTitle_mism4_28", Ut = "_layerCardDescription_mism4_32", zt = "_layerCardControls_mism4_37", Ht = "_layerCardToggle_mism4_42", Jt = "_layerCardChildren_mism4_47", ye = {
  layerCard: Yt,
  layerCardWrapper: Bt,
  layerCardTextWrapper: Gt,
  layerCardTitle: Vt,
  layerCardDescription: Ut,
  layerCardControls: zt,
  layerCardToggle: Ht,
  layerCardChildren: Jt
}, Kt = ({ layerName: r, isActive: p, onChange: f, buttons: c, description: v, children: d }) => /* @__PURE__ */ a.jsxs("div", { className: ye.layerCard, children: [
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
        isActive: p,
        onChange: f
      }
    )
  ] }),
  /* @__PURE__ */ a.jsx("div", { className: ye.layerCardChildren, children: d })
] });
Kt.propTypes = {
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
const Xt = "_swatchContainer_771fp_2", Zt = "_swatch_771fp_2", Qt = "_swatchLabel_771fp_18", en = "_swatchValue_771fp_24", Oe = {
  swatchContainer: Xt,
  swatch: Zt,
  swatchLabel: Qt,
  swatchValue: en
}, rn = ({ color: r, label: p = "", value: f, units: c = "" }) => /* @__PURE__ */ a.jsxs("div", { className: Oe.swatchContainer, children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: Oe.swatch,
      style: { backgroundColor: r }
    }
  ),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-label", className: Oe.swatchLabel, children: p }),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-value", className: Oe.swatchValue, children: f !== void 0 && `${f}${c}` })
] }), tn = "_swatchLegend_qiaru_1", nn = {
  swatchLegend: tn
}, an = ({ swatches: r }) => /* @__PURE__ */ a.jsx("div", { className: nn.swatchLegend, children: r && r.map((p) => {
  const { color: f, label: c, value: v, units: d } = p;
  return /* @__PURE__ */ a.jsx(
    rn,
    {
      label: c,
      color: f,
      value: v,
      units: d
    },
    c
  );
}) });
an.propTypes = {
  swatches: u.arrayOf(u.objectOf(u.string)).isRequired
};
const on = "_slider_1bnet_1", sn = "_sliderLabel_1bnet_16", cn = "_sliderThumb_1bnet_20", ln = "_sliderTrack_1bnet_41", un = "_comparisonControl_1bnet_66", Ce = {
  slider: on,
  sliderLabel: sn,
  sliderThumb: cn,
  sliderTrack: ln,
  comparisonControl: un
}, Gn = ({
  label: r,
  showLabel: p = !0,
  onChange: f,
  value: c = 50,
  ...v
}) => /* @__PURE__ */ a.jsx("div", { className: Ce.comparisonControl, children: /* @__PURE__ */ a.jsxs(Sr, { maxValue: 94, minValue: 6, step: 0.1, className: Ce.slider, "aria-label": !p && typeof r == "string" ? r : void 0, onChange: f, value: c, ...v, children: [
  p && /* @__PURE__ */ a.jsx(Ke, { className: Ce.sliderLabel, children: r }),
  /* @__PURE__ */ a.jsx(wr, { className: Ce.sliderTrack, children: /* @__PURE__ */ a.jsx(Pr, { className: Ce.sliderThumb, children: /* @__PURE__ */ a.jsx(Pe, { color: "white", icon: st }) }) })
] }) }), fn = "_datePicker_15zo5_1 react-aria-DatePicker", dn = "_dateInput_15zo5_12 react-aria-DateInput", pn = "_hoverDatepicker_15zo5_16", Ue = {
  datePicker: fn,
  dateInput: dn,
  hoverDatepicker: pn
}, Vn = ({
  label: r,
  helperText: p,
  errorMessage: f,
  value: c,
  onChange: v,
  "aria-label": d,
  "aria-labelledby": b,
  ...y
}) => {
  const [m, j] = Je(!1), { hoverProps: h, isHovered: T } = Et({});
  return /* @__PURE__ */ a.jsxs(
    ut,
    {
      className: Ue.datePicker,
      value: c,
      onChange: v,
      "aria-label": d,
      "aria-labelledby": b,
      ...y,
      children: [
        r && /* @__PURE__ */ a.jsx(Ke, { children: r }),
        /* @__PURE__ */ a.jsxs(ft, { children: [
          /* @__PURE__ */ a.jsx(
            dt,
            {
              className: `${Ue.dateInput} ${T || m ? Ue.hoverDatepicker : ""}`,
              ...h,
              children: (w) => /* @__PURE__ */ a.jsx(pt, { segment: w })
            }
          ),
          /* @__PURE__ */ a.jsx(
            We,
            {
              "aria-label": "Open calendar",
              onHoverChange: (w) => j(w),
              children: /* @__PURE__ */ a.jsx(Pe, { icon: ct })
            }
          )
        ] }),
        p && /* @__PURE__ */ a.jsx(vt, { slot: "description", children: p }),
        /* @__PURE__ */ a.jsx(yt, { children: f }),
        /* @__PURE__ */ a.jsx(ht, { children: /* @__PURE__ */ a.jsx(mt, { children: /* @__PURE__ */ a.jsxs(_t, { children: [
          /* @__PURE__ */ a.jsxs("header", { children: [
            /* @__PURE__ */ a.jsx(We, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ a.jsx(bt, {}),
            /* @__PURE__ */ a.jsx(We, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ a.jsx(gt, { children: (w) => /* @__PURE__ */ a.jsx(Tt, { date: w }) })
        ] }) }) })
      ]
    }
  );
}, vn = "_gradient_1w8qh_1", yn = "_gradientNumbers_1w8qh_6", hn = "_gradientLegend_1w8qh_11", Se = {
  gradient: vn,
  gradientNumbers: yn,
  gradientLegend: hn
}, mn = ({
  title: r,
  startColor: p = "red",
  endColor: f = "yellow",
  startNo: c,
  endNo: v,
  titleBelow: d = !1,
  bins: b = 0,
  precision: y = 2,
  units: m
}) => {
  const j = b > 0 ? Array(b - 1).fill(0).map((h, T) => {
    const w = (c + (v - c) / b * (T + 1)).toPrecision(y);
    return /* @__PURE__ */ a.jsx("span", { children: w }, w);
  }) : [];
  return /* @__PURE__ */ a.jsxs("div", { className: "gradient-box", children: [
    !d && /* @__PURE__ */ a.jsxs("div", { className: "ui-title", children: [
      " ",
      r
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: Se.gradientLegend, children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Se.gradient,
          style: {
            background: `linear-gradient(to right, ${p} , ${f})`
          }
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: Se.gradientNumbers, children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          c,
          " ",
          m
        ] }),
        j,
        /* @__PURE__ */ a.jsxs("span", { children: [
          v,
          " ",
          m
        ] })
      ] }),
      d && /* @__PURE__ */ a.jsxs("div", { className: Se.uiTitle, children: [
        " ",
        r
      ] })
    ] })
  ] });
};
mn.propTypes = {
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
const _n = "_slider_eylbg_1", bn = "_sliderLabel_eylbg_16", gn = "_sliderThumb_eylbg_20", Tn = "_sliderTrack_eylbg_41", we = {
  slider: _n,
  sliderLabel: bn,
  sliderThumb: gn,
  sliderTrack: Tn
}, En = ({
  label: r = "",
  onChange: p,
  minValue: f,
  maxValue: c,
  step: v,
  value: d = 0,
  showLabel: b,
  ...y
}) => /* @__PURE__ */ a.jsxs(Sr, { maxValue: c, minValue: f, step: v, className: we.slider, "aria-label": !b && typeof r == "string" ? r : void 0, onChange: p, value: d, ...y, children: [
  b && /* @__PURE__ */ a.jsx(Ke, { className: we.sliderLabel, children: r }),
  /* @__PURE__ */ a.jsx(wr, { className: we.sliderTrack, children: /* @__PURE__ */ a.jsx(Pr, { className: we.sliderThumb }) })
] }), Cn = "_layerGroupButton_1twxx_1", xn = "_layerGroupChevron_1twxx_12", Rn = "_layerGroupName_1twxx_25", jn = "_layerGroupWrapper_1twxx_32", On = "_layerGroupChildren_1twxx_32", xe = {
  layerGroupButton: Cn,
  layerGroupChevron: xn,
  layerGroupName: Rn,
  layerGroupWrapper: jn,
  layerGroupChildren: On
}, Sn = ({ groupName: r, children: p }) => {
  const [f, c] = Je(!1), v = () => {
    c(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: xe.layerGroupWrapper, children: [
    /* @__PURE__ */ a.jsxs("button", { type: "button", className: xe.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChevron, children: /* @__PURE__ */ a.jsx(Pe, { size: "md", fixedWidth: !0, icon: f ? lt : Or }) }),
      /* @__PURE__ */ a.jsx("span", { className: xe.layerGroupName, children: r })
    ] }),
    f && /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChildren, children: p })
  ] });
};
Sn.propTypes = {
  groupName: u.string,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const wn = "_mapWrapper_1gyf5_1", Pn = "_mapContainer_1gyf5_10", xr = {
  mapWrapper: wn,
  mapContainer: Pn
}, kn = ({ mapContainer: r, id: p, children: f }) => /* @__PURE__ */ a.jsxs("div", { className: xr.mapWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: xr.mapContainer, id: p, ref: r }),
  f
] });
kn.propTypes = {
  mapContainer: u.oneOfType([
    u.func,
    u.shape({ current: u.instanceOf(Element) })
  ]),
  children: u.node,
  id: u.string
};
const An = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "nav-container", children: r });
An.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const $n = ({ showToggle: r, children: p }) => {
  const [f, c] = Je(!1), v = `sidebar ${f ? "closed" : ""}`, d = () => {
    c(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ a.jsx("div", { className: v, children: p }),
    r && /* @__PURE__ */ a.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ a.jsx(
      ke,
      {
        onClick: d,
        iconName: f ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
$n.propTypes = {
  showToggle: u.bool,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const In = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "layout-stacked", children: r });
In.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Nn = ({ align: r = "left", children: p }) => /* @__PURE__ */ a.jsx("div", { className: `layout-standard ${r}`, children: p });
Nn.propTypes = {
  align: u.oneOf(["left", "right"]),
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Dn = "_sliderControlWrapper_2tznx_1", Ln = "_sliderLabel_2tznx_9", Rr = {
  sliderControlWrapper: Dn,
  sliderLabel: Ln
}, Wn = ({ title: r, units: p, sliderConfig: f }) => /* @__PURE__ */ a.jsxs("div", { className: Rr.sliderControlWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ a.jsx("div", {}),
  f && f.map((c) => {
    const { label: v } = c;
    return /* @__PURE__ */ a.jsx("div", { className: Rr.sliderLabel, children: v });
  }),
  f && f.map((c) => {
    const { onChange: v, min: d, max: b, step: y, value: m } = c;
    return /* @__PURE__ */ a.jsx(
      En,
      {
        onChange: v,
        units: p,
        min: d,
        max: b,
        step: y,
        value: m
      }
    );
  })
] });
Wn.propTypes = {
  title: u.string.isRequired,
  units: u.string.isRequired,
  sliderConfig: u.arrayOf(u.objectOf(u.string)).isRequired
};
export {
  Gn as ComparisonControl,
  Vn as DatePicker,
  mn as GradientLegend,
  ke as IconButton,
  Ze as LayerButtonReel,
  Kt as LayerCard,
  Sn as LayerGroup,
  Qe as LayerToggle,
  kn as MapContainer,
  An as NavContainer,
  $n as SidebarContainer,
  En as SimpleSlider,
  Wn as SliderControl,
  In as Stacked,
  Nn as Standard,
  rn as Swatch,
  an as SwatchLegend
};
