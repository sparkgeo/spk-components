import Pr, { useState as ue, useReducer as st, useRef as lt, useCallback as Ce, useEffect as Pe } from "react";
import { FontAwesomeIcon as Se } from "@fortawesome/react-fontawesome";
import { faTrash as ct, faFilter as ut, faInfo as kr, faFillDrip as ft, faEllipsisVertical as dt, faChevronRight as $r, faChevronLeft as pt, faArrowsLeftRight as vt, faCalendar as yt, faChevronDown as ht } from "@fortawesome/free-solid-svg-icons";
import { TooltipTrigger as mt, Tooltip as gt, Button as De, Slider as Ar, Label as Qe, SliderTrack as Ir, SliderThumb as Dr, DatePicker as _t, Group as bt, DateInput as Tt, DateSegment as xt, Text as Ct, FieldError as yr, Popover as Et, Dialog as Rt, Calendar as wt, Heading as jt, CalendarGrid as St, CalendarCell as Ot } from "react-aria-components";
import { useHover as Pt } from "react-aria";
import { CalendarDate as kt } from "@internationalized/date";
import './index.css';function $t(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Xe = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function At() {
  if (hr) return Ee;
  hr = 1;
  var t = Pr, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(y, h, E) {
    var g, b = {}, x = null, L = null;
    E !== void 0 && (x = "" + E), h.key !== void 0 && (x = "" + h.key), h.ref !== void 0 && (L = h.ref);
    for (g in h) l.call(h, g) && !n.hasOwnProperty(g) && (b[g] = h[g]);
    if (y && y.defaultProps) for (g in h = y.defaultProps, h) b[g] === void 0 && (b[g] = h[g]);
    return { $$typeof: r, type: y, key: x, ref: L, props: b, _owner: v.current };
  }
  return Ee.Fragment = s, Ee.jsx = m, Ee.jsxs = m, Ee;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function It() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Pr, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), U = Symbol.iterator, N = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = U && e[U] || e[N];
      return typeof a == "function" ? a : null;
    }
    var H = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), _ = 1; _ < a; _++)
          f[_ - 1] = arguments[_];
        D("error", e, f);
      }
    }
    function D(e, a, f) {
      {
        var _ = H.ReactDebugCurrentFrame, M = _.getStackAddendum();
        M !== "" && (a += "%s", f = f.concat([M]));
        var V = f.map(function(A) {
          return String(A);
        });
        V.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, V);
      }
    }
    var Y = !1, c = !1, ie = !1, G = !1, P = !1, re;
    re = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === n || P || e === v || e === E || e === g || G || e === L || Y || c || ie || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === b || e.$$typeof === m || e.$$typeof === y || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function ye(e, a, f) {
      var _ = e.displayName;
      if (_)
        return _;
      var M = a.displayName || a.name || "";
      return M !== "" ? f + "(" + M + ")" : f;
    }
    function he(e) {
      return e.displayName || "Context";
    }
    function Z(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case s:
          return "Portal";
        case n:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var a = e;
            return he(a) + ".Consumer";
          case m:
            var f = e;
            return he(f._context) + ".Provider";
          case h:
            return ye(e, e.render, "ForwardRef");
          case b:
            var _ = e.displayName || null;
            return _ !== null ? _ : Z(e.type) || "Memo";
          case x: {
            var M = e, V = M._payload, A = M._init;
            try {
              return Z(A(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, le = 0, te, se, fe, me, i, p, j;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function T() {
      {
        if (le === 0) {
          te = console.log, se = console.info, fe = console.warn, me = console.error, i = console.group, p = console.groupCollapsed, j = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: w,
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
        le++;
      }
    }
    function $() {
      {
        if (le--, le === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, e, {
              value: te
            }),
            info: Q({}, e, {
              value: se
            }),
            warn: Q({}, e, {
              value: fe
            }),
            error: Q({}, e, {
              value: me
            }),
            group: Q({}, e, {
              value: i
            }),
            groupCollapsed: Q({}, e, {
              value: p
            }),
            groupEnd: Q({}, e, {
              value: j
            })
          });
        }
        le < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = H.ReactCurrentDispatcher, R;
    function S(e, a, f) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (M) {
            var _ = M.stack.trim().match(/\n( *(at )?)/);
            R = _ && _[1] || "";
          }
        return `
` + R + e;
      }
    }
    var I = !1, O;
    {
      var K = typeof WeakMap == "function" ? WeakMap : Map;
      O = new K();
    }
    function u(e, a) {
      if (!e || I)
        return "";
      {
        var f = O.get(e);
        if (f !== void 0)
          return f;
      }
      var _;
      I = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = C.current, C.current = null, T();
      try {
        if (a) {
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
            } catch (ee) {
              _ = ee;
            }
            Reflect.construct(e, [], A);
          } else {
            try {
              A.call();
            } catch (ee) {
              _ = ee;
            }
            e.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            _ = ee;
          }
          e();
        }
      } catch (ee) {
        if (ee && _ && typeof ee.stack == "string") {
          for (var k = ee.stack.split(`
`), X = _.stack.split(`
`), z = k.length - 1, J = X.length - 1; z >= 1 && J >= 0 && k[z] !== X[J]; )
            J--;
          for (; z >= 1 && J >= 0; z--, J--)
            if (k[z] !== X[J]) {
              if (z !== 1 || J !== 1)
                do
                  if (z--, J--, J < 0 || k[z] !== X[J]) {
                    var oe = `
` + k[z].replace(" at new ", " at ");
                    return e.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", e.displayName)), typeof e == "function" && O.set(e, oe), oe;
                  }
                while (z >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        I = !1, C.current = V, $(), Error.prepareStackTrace = M;
      }
      var be = e ? e.displayName || e.name : "", pe = be ? S(be) : "";
      return typeof e == "function" && O.set(e, pe), pe;
    }
    function ae(e, a, f) {
      return u(e, !1);
    }
    function ge(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function de(e, a, f) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return u(e, ge(e));
      if (typeof e == "string")
        return S(e);
      switch (e) {
        case E:
          return S("Suspense");
        case g:
          return S("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ae(e.render);
          case b:
            return de(e.type, a, f);
          case x: {
            var _ = e, M = _._payload, V = _._init;
            try {
              return de(V(M), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, tr = {}, nr = H.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var a = e._owner, f = de(e.type, e._source, a ? a.type : null);
        nr.setExtraStackFrame(f);
      } else
        nr.setExtraStackFrame(null);
    }
    function Wr(e, a, f, _, M) {
      {
        var V = Function.call.bind(Te);
        for (var A in e)
          if (V(e, A)) {
            var k = void 0;
            try {
              if (typeof e[A] != "function") {
                var X = Error((_ || "React class") + ": " + f + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              k = e[A](a, A, _, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              k = z;
            }
            k && !(k instanceof Error) && (Oe(M), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", f, A, typeof k), Oe(null)), k instanceof Error && !(k.message in tr) && (tr[k.message] = !0, Oe(M), q("Failed %s type: %s", f, k.message), Oe(null));
          }
      }
    }
    var Fr = Array.isArray;
    function Le(e) {
      return Fr(e);
    }
    function qr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return f;
      }
    }
    function Yr(e) {
      try {
        return ar(e), !1;
      } catch {
        return !0;
      }
    }
    function ar(e) {
      return "" + e;
    }
    function or(e) {
      if (Yr(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qr(e)), ar(e);
    }
    var xe = H.ReactCurrentOwner, Vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ir, sr, Ne;
    Ne = {};
    function Br(e) {
      if (Te.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Hr(e) {
      if (Te.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Gr(e, a) {
      if (typeof e.ref == "string" && xe.current && a && xe.current.stateNode !== a) {
        var f = Z(xe.current.type);
        Ne[f] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(xe.current.type), e.ref), Ne[f] = !0);
      }
    }
    function Ur(e, a) {
      {
        var f = function() {
          ir || (ir = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function zr(e, a) {
      {
        var f = function() {
          sr || (sr = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var Jr = function(e, a, f, _, M, V, A) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: f,
        props: A,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Kr(e, a, f, _, M) {
      {
        var V, A = {}, k = null, X = null;
        f !== void 0 && (or(f), k = "" + f), Hr(a) && (or(a.key), k = "" + a.key), Br(a) && (X = a.ref, Gr(a, M));
        for (V in a)
          Te.call(a, V) && !Vr.hasOwnProperty(V) && (A[V] = a[V]);
        if (e && e.defaultProps) {
          var z = e.defaultProps;
          for (V in z)
            A[V] === void 0 && (A[V] = z[V]);
        }
        if (k || X) {
          var J = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && Ur(A, J), X && zr(A, J);
        }
        return Jr(e, k, X, M, _, xe.current, A);
      }
    }
    var Me = H.ReactCurrentOwner, lr = H.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var a = e._owner, f = de(e.type, e._source, a ? a.type : null);
        lr.setExtraStackFrame(f);
      } else
        lr.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function Fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function cr() {
      {
        if (Me.current) {
          var e = Z(Me.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Xr(e) {
      return "";
    }
    var ur = {};
    function Zr(e) {
      {
        var a = cr();
        if (!a) {
          var f = typeof e == "string" ? e : e.displayName || e.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function fr(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var f = Zr(a);
        if (ur[f])
          return;
        ur[f] = !0;
        var _ = "";
        e && e._owner && e._owner !== Me.current && (_ = " It was passed a child from " + Z(e._owner.type) + "."), _e(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, _), _e(null);
      }
    }
    function dr(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Le(e))
          for (var f = 0; f < e.length; f++) {
            var _ = e[f];
            Fe(_) && fr(_, a);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var M = B(e);
          if (typeof M == "function" && M !== e.entries)
            for (var V = M.call(e), A; !(A = V.next()).done; )
              Fe(A.value) && fr(A.value, a);
        }
      }
    }
    function Qr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var f;
        if (typeof a == "function")
          f = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === b))
          f = a.propTypes;
        else
          return;
        if (f) {
          var _ = Z(a);
          Wr(f, e.props, "prop", _, e);
        } else if (a.PropTypes !== void 0 && !We) {
          We = !0;
          var M = Z(a);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function et(e) {
      {
        for (var a = Object.keys(e.props), f = 0; f < a.length; f++) {
          var _ = a[f];
          if (_ !== "children" && _ !== "key") {
            _e(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), _e(null);
            break;
          }
        }
        e.ref !== null && (_e(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var pr = {};
    function vr(e, a, f, _, M, V) {
      {
        var A = ne(e);
        if (!A) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Xr();
          X ? k += X : k += cr();
          var z;
          e === null ? z = "null" : Le(e) ? z = "array" : e !== void 0 && e.$$typeof === r ? (z = "<" + (Z(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : z = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, k);
        }
        var J = Kr(e, a, f, M, V);
        if (J == null)
          return J;
        if (A) {
          var oe = a.children;
          if (oe !== void 0)
            if (_)
              if (Le(oe)) {
                for (var be = 0; be < oe.length; be++)
                  dr(oe[be], e);
                Object.freeze && Object.freeze(oe);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dr(oe, e);
        }
        if (Te.call(a, "key")) {
          var pe = Z(e), ee = Object.keys(a).filter(function(it) {
            return it !== "key";
          }), qe = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pr[pe + qe]) {
            var ot = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qe, pe, ot, pe), pr[pe + qe] = !0;
          }
        }
        return e === l ? et(J) : Qr(J), J;
      }
    }
    function rt(e, a, f) {
      return vr(e, a, f, !0);
    }
    function tt(e, a, f) {
      return vr(e, a, f, !1);
    }
    var nt = tt, at = rt;
    Re.Fragment = l, Re.jsx = nt, Re.jsxs = at;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Xe.exports = At() : Xe.exports = It();
var o = Xe.exports, Ze = { exports: {} }, ke = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Dt() {
  if (gr) return W;
  gr = 1;
  var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, s = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, n = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, y = t ? Symbol.for("react.context") : 60110, h = t ? Symbol.for("react.async_mode") : 60111, E = t ? Symbol.for("react.concurrent_mode") : 60111, g = t ? Symbol.for("react.forward_ref") : 60112, b = t ? Symbol.for("react.suspense") : 60113, x = t ? Symbol.for("react.suspense_list") : 60120, L = t ? Symbol.for("react.memo") : 60115, U = t ? Symbol.for("react.lazy") : 60116, N = t ? Symbol.for("react.block") : 60121, B = t ? Symbol.for("react.fundamental") : 60117, H = t ? Symbol.for("react.responder") : 60118, q = t ? Symbol.for("react.scope") : 60119;
  function D(c) {
    if (typeof c == "object" && c !== null) {
      var ie = c.$$typeof;
      switch (ie) {
        case r:
          switch (c = c.type, c) {
            case h:
            case E:
            case l:
            case n:
            case v:
            case b:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case y:
                case g:
                case U:
                case L:
                case m:
                  return c;
                default:
                  return ie;
              }
          }
        case s:
          return ie;
      }
    }
  }
  function Y(c) {
    return D(c) === E;
  }
  return W.AsyncMode = h, W.ConcurrentMode = E, W.ContextConsumer = y, W.ContextProvider = m, W.Element = r, W.ForwardRef = g, W.Fragment = l, W.Lazy = U, W.Memo = L, W.Portal = s, W.Profiler = n, W.StrictMode = v, W.Suspense = b, W.isAsyncMode = function(c) {
    return Y(c) || D(c) === h;
  }, W.isConcurrentMode = Y, W.isContextConsumer = function(c) {
    return D(c) === y;
  }, W.isContextProvider = function(c) {
    return D(c) === m;
  }, W.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === r;
  }, W.isForwardRef = function(c) {
    return D(c) === g;
  }, W.isFragment = function(c) {
    return D(c) === l;
  }, W.isLazy = function(c) {
    return D(c) === U;
  }, W.isMemo = function(c) {
    return D(c) === L;
  }, W.isPortal = function(c) {
    return D(c) === s;
  }, W.isProfiler = function(c) {
    return D(c) === n;
  }, W.isStrictMode = function(c) {
    return D(c) === v;
  }, W.isSuspense = function(c) {
    return D(c) === b;
  }, W.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === l || c === E || c === n || c === v || c === b || c === x || typeof c == "object" && c !== null && (c.$$typeof === U || c.$$typeof === L || c.$$typeof === m || c.$$typeof === y || c.$$typeof === g || c.$$typeof === B || c.$$typeof === H || c.$$typeof === q || c.$$typeof === N);
  }, W.typeOf = D, W;
}
var F = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function Lt() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, s = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, n = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, y = t ? Symbol.for("react.context") : 60110, h = t ? Symbol.for("react.async_mode") : 60111, E = t ? Symbol.for("react.concurrent_mode") : 60111, g = t ? Symbol.for("react.forward_ref") : 60112, b = t ? Symbol.for("react.suspense") : 60113, x = t ? Symbol.for("react.suspense_list") : 60120, L = t ? Symbol.for("react.memo") : 60115, U = t ? Symbol.for("react.lazy") : 60116, N = t ? Symbol.for("react.block") : 60121, B = t ? Symbol.for("react.fundamental") : 60117, H = t ? Symbol.for("react.responder") : 60118, q = t ? Symbol.for("react.scope") : 60119;
    function D(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === l || u === E || u === n || u === v || u === b || u === x || typeof u == "object" && u !== null && (u.$$typeof === U || u.$$typeof === L || u.$$typeof === m || u.$$typeof === y || u.$$typeof === g || u.$$typeof === B || u.$$typeof === H || u.$$typeof === q || u.$$typeof === N);
    }
    function Y(u) {
      if (typeof u == "object" && u !== null) {
        var ae = u.$$typeof;
        switch (ae) {
          case r:
            var ge = u.type;
            switch (ge) {
              case h:
              case E:
              case l:
              case n:
              case v:
              case b:
                return ge;
              default:
                var de = ge && ge.$$typeof;
                switch (de) {
                  case y:
                  case g:
                  case U:
                  case L:
                  case m:
                    return de;
                  default:
                    return ae;
                }
            }
          case s:
            return ae;
        }
      }
    }
    var c = h, ie = E, G = y, P = m, re = r, ne = g, ye = l, he = U, Z = L, Q = s, le = n, te = v, se = b, fe = !1;
    function me(u) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(u) || Y(u) === h;
    }
    function i(u) {
      return Y(u) === E;
    }
    function p(u) {
      return Y(u) === y;
    }
    function j(u) {
      return Y(u) === m;
    }
    function w(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function T(u) {
      return Y(u) === g;
    }
    function $(u) {
      return Y(u) === l;
    }
    function C(u) {
      return Y(u) === U;
    }
    function R(u) {
      return Y(u) === L;
    }
    function S(u) {
      return Y(u) === s;
    }
    function I(u) {
      return Y(u) === n;
    }
    function O(u) {
      return Y(u) === v;
    }
    function K(u) {
      return Y(u) === b;
    }
    F.AsyncMode = c, F.ConcurrentMode = ie, F.ContextConsumer = G, F.ContextProvider = P, F.Element = re, F.ForwardRef = ne, F.Fragment = ye, F.Lazy = he, F.Memo = Z, F.Portal = Q, F.Profiler = le, F.StrictMode = te, F.Suspense = se, F.isAsyncMode = me, F.isConcurrentMode = i, F.isContextConsumer = p, F.isContextProvider = j, F.isElement = w, F.isForwardRef = T, F.isFragment = $, F.isLazy = C, F.isMemo = R, F.isPortal = S, F.isProfiler = I, F.isStrictMode = O, F.isSuspense = K, F.isValidElementType = D, F.typeOf = Y;
  }()), F;
}
var br;
function Lr() {
  return br || (br = 1, process.env.NODE_ENV === "production" ? ke.exports = Dt() : ke.exports = Lt()), ke.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ye, Tr;
function Nt() {
  if (Tr) return Ye;
  Tr = 1;
  var t = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
  function l(n) {
    if (n == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(n);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var n = new String("abc");
      if (n[5] = "de", Object.getOwnPropertyNames(n)[0] === "5")
        return !1;
      for (var m = {}, y = 0; y < 10; y++)
        m["_" + String.fromCharCode(y)] = y;
      var h = Object.getOwnPropertyNames(m).map(function(g) {
        return m[g];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var E = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        E[g] = g;
      }), Object.keys(Object.assign({}, E)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = v() ? Object.assign : function(n, m) {
    for (var y, h = l(n), E, g = 1; g < arguments.length; g++) {
      y = Object(arguments[g]);
      for (var b in y)
        r.call(y, b) && (h[b] = y[b]);
      if (t) {
        E = t(y);
        for (var x = 0; x < E.length; x++)
          s.call(y, E[x]) && (h[E[x]] = y[E[x]]);
      }
    }
    return h;
  }, Ye;
}
var Ve, xr;
function er() {
  if (xr) return Ve;
  xr = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ve = t, Ve;
}
var Be, Cr;
function Nr() {
  return Cr || (Cr = 1, Be = Function.call.bind(Object.prototype.hasOwnProperty)), Be;
}
var He, Er;
function Mt() {
  if (Er) return He;
  Er = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = er(), s = {}, l = Nr();
    t = function(n) {
      var m = "Warning: " + n;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function v(n, m, y, h, E) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in n)
        if (l(n, g)) {
          var b;
          try {
            if (typeof n[g] != "function") {
              var x = Error(
                (h || "React class") + ": " + y + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            b = n[g](m, g, h, y, null, r);
          } catch (U) {
            b = U;
          }
          if (b && !(b instanceof Error) && t(
            (h || "React class") + ": type specification of " + y + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), b instanceof Error && !(b.message in s)) {
            s[b.message] = !0;
            var L = E ? E() : "";
            t(
              "Failed " + y + " type: " + b.message + (L ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (s = {});
  }, He = v, He;
}
var Ge, Rr;
function Wt() {
  if (Rr) return Ge;
  Rr = 1;
  var t = Lr(), r = Nt(), s = er(), l = Nr(), v = Mt(), n = function() {
  };
  process.env.NODE_ENV !== "production" && (n = function(y) {
    var h = "Warning: " + y;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return Ge = function(y, h) {
    var E = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function b(i) {
      var p = i && (E && i[E] || i[g]);
      if (typeof p == "function")
        return p;
    }
    var x = "<<anonymous>>", L = {
      array: H("array"),
      bigint: H("bigint"),
      bool: H("boolean"),
      func: H("function"),
      number: H("number"),
      object: H("object"),
      string: H("string"),
      symbol: H("symbol"),
      any: q(),
      arrayOf: D,
      element: Y(),
      elementType: c(),
      instanceOf: ie,
      node: ne(),
      objectOf: P,
      oneOf: G,
      oneOfType: re,
      shape: he,
      exact: Z
    };
    function U(i, p) {
      return i === p ? i !== 0 || 1 / i === 1 / p : i !== i && p !== p;
    }
    function N(i, p) {
      this.message = i, this.data = p && typeof p == "object" ? p : {}, this.stack = "";
    }
    N.prototype = Error.prototype;
    function B(i) {
      if (process.env.NODE_ENV !== "production")
        var p = {}, j = 0;
      function w($, C, R, S, I, O, K) {
        if (S = S || x, O = O || R, K !== s) {
          if (h) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = S + ":" + R;
            !p[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (n(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[ae] = !0, j++);
          }
        }
        return C[R] == null ? $ ? C[R] === null ? new N("The " + I + " `" + O + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new N("The " + I + " `" + O + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : i(C, R, S, I, O);
      }
      var T = w.bind(null, !1);
      return T.isRequired = w.bind(null, !0), T;
    }
    function H(i) {
      function p(j, w, T, $, C, R) {
        var S = j[w], I = te(S);
        if (I !== i) {
          var O = se(S);
          return new N(
            "Invalid " + $ + " `" + C + "` of type " + ("`" + O + "` supplied to `" + T + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return B(p);
    }
    function q() {
      return B(m);
    }
    function D(i) {
      function p(j, w, T, $, C) {
        if (typeof i != "function")
          return new N("Property `" + C + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var R = j[w];
        if (!Array.isArray(R)) {
          var S = te(R);
          return new N("Invalid " + $ + " `" + C + "` of type " + ("`" + S + "` supplied to `" + T + "`, expected an array."));
        }
        for (var I = 0; I < R.length; I++) {
          var O = i(R, I, T, $, C + "[" + I + "]", s);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return B(p);
    }
    function Y() {
      function i(p, j, w, T, $) {
        var C = p[j];
        if (!y(C)) {
          var R = te(C);
          return new N("Invalid " + T + " `" + $ + "` of type " + ("`" + R + "` supplied to `" + w + "`, expected a single ReactElement."));
        }
        return null;
      }
      return B(i);
    }
    function c() {
      function i(p, j, w, T, $) {
        var C = p[j];
        if (!t.isValidElementType(C)) {
          var R = te(C);
          return new N("Invalid " + T + " `" + $ + "` of type " + ("`" + R + "` supplied to `" + w + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return B(i);
    }
    function ie(i) {
      function p(j, w, T, $, C) {
        if (!(j[w] instanceof i)) {
          var R = i.name || x, S = me(j[w]);
          return new N("Invalid " + $ + " `" + C + "` of type " + ("`" + S + "` supplied to `" + T + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return B(p);
    }
    function G(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? n(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : n("Invalid argument supplied to oneOf, expected an array.")), m;
      function p(j, w, T, $, C) {
        for (var R = j[w], S = 0; S < i.length; S++)
          if (U(R, i[S]))
            return null;
        var I = JSON.stringify(i, function(K, u) {
          var ae = se(u);
          return ae === "symbol" ? String(u) : u;
        });
        return new N("Invalid " + $ + " `" + C + "` of value `" + String(R) + "` " + ("supplied to `" + T + "`, expected one of " + I + "."));
      }
      return B(p);
    }
    function P(i) {
      function p(j, w, T, $, C) {
        if (typeof i != "function")
          return new N("Property `" + C + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var R = j[w], S = te(R);
        if (S !== "object")
          return new N("Invalid " + $ + " `" + C + "` of type " + ("`" + S + "` supplied to `" + T + "`, expected an object."));
        for (var I in R)
          if (l(R, I)) {
            var O = i(R, I, T, $, C + "." + I, s);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return B(p);
    }
    function re(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && n("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var p = 0; p < i.length; p++) {
        var j = i[p];
        if (typeof j != "function")
          return n(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(j) + " at index " + p + "."
          ), m;
      }
      function w(T, $, C, R, S) {
        for (var I = [], O = 0; O < i.length; O++) {
          var K = i[O], u = K(T, $, C, R, S, s);
          if (u == null)
            return null;
          u.data && l(u.data, "expectedType") && I.push(u.data.expectedType);
        }
        var ae = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new N("Invalid " + R + " `" + S + "` supplied to " + ("`" + C + "`" + ae + "."));
      }
      return B(w);
    }
    function ne() {
      function i(p, j, w, T, $) {
        return Q(p[j]) ? null : new N("Invalid " + T + " `" + $ + "` supplied to " + ("`" + w + "`, expected a ReactNode."));
      }
      return B(i);
    }
    function ye(i, p, j, w, T) {
      return new N(
        (i || "React class") + ": " + p + " type `" + j + "." + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function he(i) {
      function p(j, w, T, $, C) {
        var R = j[w], S = te(R);
        if (S !== "object")
          return new N("Invalid " + $ + " `" + C + "` of type `" + S + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var I in i) {
          var O = i[I];
          if (typeof O != "function")
            return ye(T, $, C, I, se(O));
          var K = O(R, I, T, $, C + "." + I, s);
          if (K)
            return K;
        }
        return null;
      }
      return B(p);
    }
    function Z(i) {
      function p(j, w, T, $, C) {
        var R = j[w], S = te(R);
        if (S !== "object")
          return new N("Invalid " + $ + " `" + C + "` of type `" + S + "` " + ("supplied to `" + T + "`, expected `object`."));
        var I = r({}, j[w], i);
        for (var O in I) {
          var K = i[O];
          if (l(i, O) && typeof K != "function")
            return ye(T, $, C, O, se(K));
          if (!K)
            return new N(
              "Invalid " + $ + " `" + C + "` key `" + O + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(j[w], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var u = K(R, O, T, $, C + "." + O, s);
          if (u)
            return u;
        }
        return null;
      }
      return B(p);
    }
    function Q(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(Q);
          if (i === null || y(i))
            return !0;
          var p = b(i);
          if (p) {
            var j = p.call(i), w;
            if (p !== i.entries) {
              for (; !(w = j.next()).done; )
                if (!Q(w.value))
                  return !1;
            } else
              for (; !(w = j.next()).done; ) {
                var T = w.value;
                if (T && !Q(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(i, p) {
      return i === "symbol" ? !0 : p ? p["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && p instanceof Symbol : !1;
    }
    function te(i) {
      var p = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : le(p, i) ? "symbol" : p;
    }
    function se(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var p = te(i);
      if (p === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return p;
    }
    function fe(i) {
      var p = se(i);
      switch (p) {
        case "array":
        case "object":
          return "an " + p;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + p;
        default:
          return p;
      }
    }
    function me(i) {
      return !i.constructor || !i.constructor.name ? x : i.constructor.name;
    }
    return L.checkPropTypes = v, L.resetWarningCache = v.resetWarningCache, L.PropTypes = L, L;
  }, Ge;
}
var Ue, wr;
function Ft() {
  if (wr) return Ue;
  wr = 1;
  var t = er();
  function r() {
  }
  function s() {
  }
  return s.resetWarningCache = r, Ue = function() {
    function l(m, y, h, E, g, b) {
      if (b !== t) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    l.isRequired = l;
    function v() {
      return l;
    }
    var n = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: v,
      element: l,
      elementType: l,
      instanceOf: v,
      node: l,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: s,
      resetWarningCache: r
    };
    return n.PropTypes = n, n;
  }, Ue;
}
if (process.env.NODE_ENV !== "production") {
  var qt = Lr(), Yt = !0;
  Ze.exports = Wt()(qt.isElement, Yt);
} else
  Ze.exports = Ft()();
var Vt = Ze.exports;
const d = /* @__PURE__ */ $t(Vt), Bt = "_iconButton_1963e_1", Ht = {
  iconButton: Bt
}, Gt = {
  trash: ct,
  filter: ut,
  info: kr,
  fill: ft,
  ellipsis: dt,
  chevronRight: $r,
  chevronLeft: pt
}, rr = ({ onClick: t, iconName: r }) => /* @__PURE__ */ o.jsx("div", { className: Ht.iconButton, children: /* @__PURE__ */ o.jsx("button", { "aria-label": r, type: "button", onClick: t, children: /* @__PURE__ */ o.jsx(Se, { icon: Gt[r] }) }) });
rr.propTypes = {
  iconName: d.oneOf([
    "trash",
    "filter",
    "info",
    "fill",
    "ellipsis",
    "chevronLeft",
    "chevronRight"
  ]),
  onClick: d.func.isRequired
};
const Ut = "_layerButtonReel_1o59k_1", zt = {
  layerButtonReel: Ut
}, Jt = ({ buttons: t }) => /* @__PURE__ */ o.jsx("div", { className: zt.layerButtonReel, children: t && Object.keys(t).map((r) => /* @__PURE__ */ o.jsx(rr, { iconName: r, onClick: t[r] })) });
Jt.propTypes = {
  buttons: d.objectOf(d.func)
};
const Kt = "_layerToggle_gvlf4_7", Xt = "_slider_gvlf4_29", ze = {
  layerToggle: Kt,
  switch: "_switch_gvlf4_12",
  slider: Xt
}, Mr = ({ layerName: t, isActive: r = !1, onChange: s }) => /* @__PURE__ */ o.jsx("div", { className: ze.layerToggle, children: /* @__PURE__ */ o.jsxs("div", { className: ze.switch, children: [
  /* @__PURE__ */ o.jsx(
    "input",
    {
      type: "checkbox",
      value: t,
      checked: r,
      onChange: s
    }
  ),
  /* @__PURE__ */ o.jsx("span", { className: ze.slider })
] }) });
Mr.propTypes = {
  layerName: d.string,
  isActive: d.bool,
  onChange: d.func.isRequired
};
const Zt = "_layerCard_mw8v9_1", Qt = "_layerCardAttributionWrapper_mw8v9_11", en = "_layerCardAttribution_mw8v9_11", rn = "_layerCardHeader_mw8v9_25", tn = "_layerCardTextWrapper_mw8v9_34", nn = "_layerCardTitle_mw8v9_42", an = "_layerCardDescription_mw8v9_50", on = "_layerCardControls_mw8v9_59", sn = "_layerCardToggle_mw8v9_64", ln = "_layerCardContent_mw8v9_69", cn = "_layerCardInfoIcon_mw8v9_85", ce = {
  layerCard: Zt,
  layerCardAttributionWrapper: Qt,
  layerCardAttribution: en,
  layerCardHeader: rn,
  layerCardTextWrapper: tn,
  layerCardTitle: nn,
  layerCardDescription: an,
  layerCardControls: on,
  layerCardToggle: sn,
  layerCardContent: ln,
  layerCardInfoIcon: cn
}, un = ({ layerName: t, isActive: r, onChange: s, attribution: l, description: v, children: n }) => {
  const [m, y] = ue(!1), h = l && !!l.text && (r || m);
  return /* @__PURE__ */ o.jsxs("div", { className: ce.layerCard, children: [
    /* @__PURE__ */ o.jsxs("div", { className: ce.layerCardHeader, children: [
      /* @__PURE__ */ o.jsx("div", { className: ce.layerCardTextWrapper, children: /* @__PURE__ */ o.jsx("span", { className: ce.layerCardTitle, children: t }) }),
      /* @__PURE__ */ o.jsxs(mt, { delay: 300, children: [
        /* @__PURE__ */ o.jsx(gt, { children: "Toggle layer description" }),
        /* @__PURE__ */ o.jsx(De, { className: ce.layerCardInfoIcon, onClick: () => y(!m), children: /* @__PURE__ */ o.jsx(Se, { size: "xs", fontWeight: "bold", icon: kr }) })
      ] }),
      s && /* @__PURE__ */ o.jsx(
        Mr,
        {
          layerName: t,
          isActive: r,
          onChange: s
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: ce.layerCardContent, children: [
      v && m && /* @__PURE__ */ o.jsx("span", { className: ce.layerCardDescription, children: v }),
      h && /* @__PURE__ */ o.jsx("div", { className: ce.layerCardAttributionWrapper, children: /* @__PURE__ */ o.jsxs("span", { className: ce.layerCardAttribution, children: [
        "Source: ",
        /* @__PURE__ */ o.jsx("a", { href: l.url, children: l.text })
      ] }) }),
      n && n
    ] })
  ] });
};
un.propTypes = {
  layerName: d.string.isRequired,
  isActive: d.bool,
  onChange: d.func.isRequired,
  description: d.string,
  attribution: d.objectOf({
    url: d.string,
    text: d.string
  }),
  children: d.oneOfType([
    d.arrayOf(d.node),
    d.node
  ])
};
const fn = "_swatchContainer_771fp_2", dn = "_swatch_771fp_2", pn = "_swatchLabel_771fp_18", vn = "_swatchValue_771fp_24", $e = {
  swatchContainer: fn,
  swatch: dn,
  swatchLabel: pn,
  swatchValue: vn
}, yn = ({ color: t, label: r = "", value: s, units: l = "" }) => /* @__PURE__ */ o.jsxs("div", { className: $e.swatchContainer, children: [
  /* @__PURE__ */ o.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: $e.swatch,
      style: { backgroundColor: t }
    }
  ),
  /* @__PURE__ */ o.jsx("div", { "data-testid": "swatch-label", className: $e.swatchLabel, children: r }),
  /* @__PURE__ */ o.jsx("div", { "data-testid": "swatch-value", className: $e.swatchValue, children: s !== void 0 && `${s}${l}` })
] }), hn = "_swatchLegend_qiaru_1", mn = {
  swatchLegend: hn
}, gn = ({ swatches: t }) => /* @__PURE__ */ o.jsx("div", { className: mn.swatchLegend, children: t && t.map((r) => {
  const { color: s, label: l, value: v, units: n } = r;
  return /* @__PURE__ */ o.jsx(
    yn,
    {
      label: l,
      color: s,
      value: v,
      units: n
    },
    l
  );
}) });
gn.propTypes = {
  swatches: d.arrayOf(d.objectOf(d.string)).isRequired
};
const _n = "_slider_1bnet_1", bn = "_sliderLabel_1bnet_16", Tn = "_sliderThumb_1bnet_20", xn = "_sliderTrack_1bnet_41", Cn = "_comparisonControl_1bnet_66", we = {
  slider: _n,
  sliderLabel: bn,
  sliderThumb: Tn,
  sliderTrack: xn,
  comparisonControl: Cn
}, ba = ({
  label: t,
  showLabel: r = !0,
  onChange: s,
  value: l = 50,
  ...v
}) => /* @__PURE__ */ o.jsx("div", { className: we.comparisonControl, children: /* @__PURE__ */ o.jsxs(Ar, { maxValue: 94, minValue: 6, step: 0.1, className: we.slider, "aria-label": !r && typeof t == "string" ? t : void 0, onChange: s, value: l, ...v, children: [
  r && /* @__PURE__ */ o.jsx(Qe, { className: we.sliderLabel, children: t }),
  /* @__PURE__ */ o.jsx(Ir, { className: we.sliderTrack, children: /* @__PURE__ */ o.jsx(Dr, { className: we.sliderThumb, children: /* @__PURE__ */ o.jsx(Se, { color: "white", icon: vt }) }) })
] }) }), En = "_datePicker_ywin1_1 react-aria-DatePicker", Rn = "_dateInput_ywin1_12 react-aria-DateInput", wn = "_hoverDatepicker_ywin1_17", Je = {
  datePicker: En,
  dateInput: Rn,
  hoverDatepicker: wn
}, Ke = (t) => new kt(t.getFullYear(), t.getMonth() + 1, t.getDate()), Ta = ({
  label: t,
  helperText: r,
  errorMessage: s,
  value: l,
  onChange: v,
  "aria-label": n,
  "aria-labelledby": m,
  className: y,
  maxValue: h,
  minValue: E,
  ...g
}) => {
  const [b, x] = ue(!1), { hoverProps: L, isHovered: U } = Pt({}), N = l ? Ke(l) : null, B = h ? Ke(h) : null, H = E ? Ke(E) : null, q = (D) => {
    if (D) {
      const Y = new Date(D.toString());
      v(Y);
    } else
      v(null);
  };
  return /* @__PURE__ */ o.jsxs(
    _t,
    {
      className: `${Je.datePicker} ${y || ""}`.trim(),
      value: N,
      onChange: q,
      "aria-label": n,
      "aria-labelledby": m,
      maxValue: B,
      minValue: H,
      ...g,
      children: [
        t && /* @__PURE__ */ o.jsx(Qe, { children: t }),
        /* @__PURE__ */ o.jsxs(bt, { children: [
          /* @__PURE__ */ o.jsx(
            Tt,
            {
              className: `${U || b ? Je.hoverDatepicker : ""} ${Je.dateInput}`.trim(),
              ...L,
              children: (D) => /* @__PURE__ */ o.jsx(xt, { segment: D })
            }
          ),
          /* @__PURE__ */ o.jsx(
            De,
            {
              "aria-label": "Open calendar",
              onHoverChange: (D) => x(D),
              children: /* @__PURE__ */ o.jsx(Se, { icon: yt })
            }
          )
        ] }),
        r && /* @__PURE__ */ o.jsx(Ct, { slot: "description", children: r }),
        s ? /* @__PURE__ */ o.jsx(yr, { children: s }) : /* @__PURE__ */ o.jsx(yr, {}),
        /* @__PURE__ */ o.jsx(Et, { children: /* @__PURE__ */ o.jsx(Rt, { children: /* @__PURE__ */ o.jsxs(wt, { children: [
          /* @__PURE__ */ o.jsxs("header", { children: [
            /* @__PURE__ */ o.jsx(De, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ o.jsx(jt, {}),
            /* @__PURE__ */ o.jsx(De, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ o.jsx(St, { children: (D) => /* @__PURE__ */ o.jsx(Ot, { date: D }) })
        ] }) }) })
      ]
    }
  );
}, jn = "_gradient_1w8qh_1", Sn = "_gradientNumbers_1w8qh_6", On = "_gradientLegend_1w8qh_11", Ae = {
  gradient: jn,
  gradientNumbers: Sn,
  gradientLegend: On
}, Pn = ({
  title: t,
  startColor: r = "red",
  endColor: s = "yellow",
  startNo: l,
  endNo: v,
  titleBelow: n = !1,
  bins: m = 0,
  precision: y = 2,
  units: h
}) => {
  const E = m > 0 ? Array(m - 1).fill(0).map((g, b) => {
    const x = (l + (v - l) / m * (b + 1)).toPrecision(y);
    return /* @__PURE__ */ o.jsx("span", { children: x }, x);
  }) : [];
  return /* @__PURE__ */ o.jsxs("div", { className: "gradient-box", children: [
    !n && /* @__PURE__ */ o.jsxs("div", { className: "ui-title", children: [
      " ",
      t
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: Ae.gradientLegend, children: [
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: Ae.gradient,
          style: {
            background: `linear-gradient(to right, ${r} , ${s})`
          }
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: Ae.gradientNumbers, children: [
        /* @__PURE__ */ o.jsxs("span", { children: [
          l,
          " ",
          h
        ] }),
        E,
        /* @__PURE__ */ o.jsxs("span", { children: [
          v,
          " ",
          h
        ] })
      ] }),
      n && /* @__PURE__ */ o.jsxs("div", { className: Ae.uiTitle, children: [
        " ",
        t
      ] })
    ] })
  ] });
};
Pn.propTypes = {
  title: d.string,
  startColor: d.string,
  endColor: d.string,
  startNo: d.number,
  endNo: d.number,
  titleBelow: d.bool,
  bins: d.number,
  precision: d.number,
  units: d.string
};
const kn = "_slider_108mp_1", $n = "_sliderLabel_108mp_16", An = "_sliderThumb_108mp_20", In = "_sliderTrack_108mp_41", Ie = {
  slider: kn,
  sliderLabel: $n,
  sliderThumb: An,
  sliderTrack: In
}, Dn = ({
  className: t,
  label: r = "",
  onChange: s,
  minValue: l,
  maxValue: v,
  step: n,
  value: m = 0,
  showLabel: y,
  ...h
}) => /* @__PURE__ */ o.jsxs(Ar, { maxValue: v, minValue: l, step: n, className: `${Ie.slider} ${t || ""}`.trim(), "aria-label": !y && typeof r == "string" ? r : void 0, onChange: s, value: m, ...h, children: [
  y && /* @__PURE__ */ o.jsx(Qe, { className: Ie.sliderLabel, children: r }),
  /* @__PURE__ */ o.jsx(Ir, { className: Ie.sliderTrack, children: /* @__PURE__ */ o.jsx(Dr, { className: Ie.sliderThumb }) })
] }), Ln = "_layerGroupWrapper_1p831_1", Nn = "_layerGroupButton_1p831_5", Mn = "_layerGroupChevron_1p831_17", Wn = "_layerGroupName_1p831_30", Fn = "_layerGroupChildren_1p831_42", je = {
  layerGroupWrapper: Ln,
  layerGroupButton: Nn,
  layerGroupChevron: Mn,
  layerGroupName: Wn,
  layerGroupChildren: Fn
}, qn = ({ groupName: t, children: r }) => {
  const [s, l] = ue(!1), v = () => {
    l(!s);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: je.layerGroupWrapper, children: [
    /* @__PURE__ */ o.jsxs("button", { type: "button", className: je.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ o.jsx("div", { className: je.layerGroupChevron, children: /* @__PURE__ */ o.jsx(Se, { size: "sm", fixedWidth: !0, icon: s ? ht : $r }) }),
      /* @__PURE__ */ o.jsx("span", { className: je.layerGroupName, children: t })
    ] }),
    s && /* @__PURE__ */ o.jsx("div", { className: je.layerGroupChildren, children: r })
  ] });
};
qn.propTypes = {
  groupName: d.string,
  children: d.oneOfType([
    d.arrayOf(d.node),
    d.node
  ]).isRequired
};
const Yn = "_rangeSlider_gxsy7_1", Vn = "_rangeSliderLabel_gxsy7_13", Bn = "_rangeSliderContainer_gxsy7_17", Hn = "_rangeSliderTrack_gxsy7_27", Gn = "_rangeSliderHandleBar_gxsy7_36", Un = "_rangeSliderHandleLeft_gxsy7_46", zn = "_rangeSliderHandleRight_gxsy7_47", ve = {
  rangeSlider: Yn,
  rangeSliderLabel: Vn,
  rangeSliderContainer: Bn,
  rangeSliderTrack: Hn,
  rangeSliderHandleBar: Gn,
  rangeSliderHandleLeft: Un,
  rangeSliderHandleRight: zn
};
function Jn(t, r) {
  switch (r.type) {
    case "ChangeStep": {
      let s = { lower: Math.max(r.bounds.min, t.lower), upper: Math.min(r.bounds.max, t.upper) };
      return r.step > 0 && (s = {
        lower: Math.max(r.bounds.min, Math.floor(t.lower / r.step) * r.step),
        upper: Math.min(r.bounds.max, Math.ceil(t.upper / r.step) * r.step)
      }), r.callback && r.callback(s), s;
    }
    case "ChangeValues": {
      let s = {
        lower: Math.max(r.bounds.min, r.values[0]),
        upper: Math.min(r.bounds.max, r.values[1])
      };
      return r.step > 0 && (s = {
        lower: Math.max(r.bounds.min, Math.floor(r.values[0] / r.step) * r.step),
        upper: Math.min(r.bounds.max, Math.ceil(r.values[1] / r.step) * r.step)
      }), r.callback && r.callback(s), s;
    }
    default:
      throw Error(`Unknown action:  ${r.type}`);
  }
}
const Kn = ({ label: t, bounds: r, step: s = 0, valuesChanging: l, valuesChanged: v }) => {
  const [n, m] = st(Jn, { lower: r.min, upper: r.max }), y = lt(null), [h, E] = ue(0), [g, b] = ue(0), [x, L] = ue("none"), [U, N] = ue(0), B = Ce((G) => {
    const P = (G - r.min) / (r.max - r.min);
    return y.current.clientWidth * P;
  }, [r]), H = Ce((G) => {
    const P = G / y.current.clientWidth;
    return r.min + (r.max - r.min) * P;
  }, [r]), q = Ce((G) => {
    const P = G / y.current.clientWidth;
    return (r.max - r.min) * P;
  }, [r]);
  Pe(() => {
    E(B(n.lower)), b(B(n.upper));
  }, [B, n]), Pe(() => {
    l && l(n);
  }, [n, l]), Pe(() => {
    m({
      type: "ChangeStep",
      callback: v,
      step: s,
      bounds: r
    });
  }, [s, v, r]);
  const D = (G) => {
    G.preventDefault(), L(G.target.getAttribute("data-handle-id")), N(0);
  }, Y = Ce((G) => {
    G.preventDefault(), L("none"), v && v(n);
  }, [n, v]), c = Ce(
    (G) => {
      if (x === "none" || G.buttons === 0)
        return;
      G.preventDefault();
      let P = q(G.movementX);
      if (s !== 0) {
        let ne = U + P;
        if (N(ne), Math.abs(ne) < Math.abs(s))
          return;
        ne > 0 ? (ne -= Math.abs(s), P = Math.abs(s)) : (ne += Math.abs(s), P = -Math.abs(s)), N(ne);
      }
      let re = [n.lower, n.upper];
      if (x === "left")
        n.lower + P < r.min && (P = r.min - n.lower), n.lower + P > n.upper ? (L("right"), re = [n.lower, n.lower + P]) : re = [n.lower + P, n.upper];
      else if (x === "right")
        n.upper + P > r.max && (P = r.max - n.upper), n.upper + P < n.lower ? (L("left"), re = [n.upper + P, n.upper]) : re = [n.lower, n.upper + P];
      else if (x === "bar")
        n.lower + P < r.min ? P = r.min - n.lower : n.upper + P > r.max && (P = r.max - n.upper), re = [n.lower + P, n.upper + P];
      else
        throw Error(`Unknown handle: ${x}`);
      m({ type: "ChangeValues", values: re, bounds: r, step: s });
    },
    [
      x,
      r,
      q,
      n,
      U,
      s
    ]
  );
  Pe(() => (x !== "none" ? (window.addEventListener("mousemove", c), window.addEventListener("mouseup", Y)) : (window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", Y)), () => {
    window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", Y);
  }), [x, c, Y]);
  const ie = (G) => {
    G.preventDefault();
    const P = H(G.nativeEvent.offsetX);
    P < n.lower ? m({ type: "ChangeValues", values: [P, n.upper], bounds: r, step: s, callback: v }) : P > n.upper && m({ type: "ChangeValues", values: [n.lower, P], bounds: r, step: s, callback: v });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: ve.rangeSlider, children: [
    /* @__PURE__ */ o.jsx("div", { className: ve.rangeSliderLabel, children: t }),
    /* @__PURE__ */ o.jsxs("div", { className: ve.rangeSliderContainer, children: [
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: ve.rangeSliderTrack,
          ref: y,
          role: "none",
          tabIndex: "-1",
          onClick: ie
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: ve.rangeSliderHandleBar,
          role: "slider",
          tabIndex: "0",
          "aria-label": t,
          "aria-valuenow": (n.lower + n.upper) / 2,
          "aria-valuetext": "from {values.lower} to {values.upper}",
          "aria-valuemin": r.min,
          "aria-valuemax": r.max,
          "data-handle-id": "bar",
          onMouseDown: D,
          style: {
            left: `${h}px`,
            width: `${g - h}px`
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: ve.rangeSliderHandleLeft,
          role: "button",
          tabIndex: "0",
          "aria-label": `${t} lower handle`,
          "data-handle-id": "left",
          onMouseDown: D,
          style: { left: `${h}px` }
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: ve.rangeSliderHandleRight,
          role: "button",
          tabIndex: "0",
          "aria-label": `${t} upper handle`,
          "data-handle-id": "right",
          onMouseDown: D,
          style: { left: `${g}px` }
        }
      )
    ] })
  ] });
};
Kn.propTypes = {
  label: d.string.isRequired,
  bounds: d.shape({
    min: d.number.isRequired,
    max: d.number.isRequired
  }),
  step: d.number,
  valuesChanging: d.func,
  valuesChanged: d.func
};
const Xn = "_mapWrapper_1gyf5_1", Zn = "_mapContainer_1gyf5_10", jr = {
  mapWrapper: Xn,
  mapContainer: Zn
}, Qn = ({ mapContainer: t, id: r, children: s }) => /* @__PURE__ */ o.jsxs("div", { className: jr.mapWrapper, children: [
  /* @__PURE__ */ o.jsx("div", { className: jr.mapContainer, id: r, ref: t }),
  s
] });
Qn.propTypes = {
  mapContainer: d.oneOfType([
    d.func,
    d.shape({ current: d.instanceOf(Element) })
  ]),
  children: d.node,
  id: d.string
};
const ea = ({ children: t }) => /* @__PURE__ */ o.jsx("div", { className: "nav-container", children: t });
ea.propTypes = {
  children: d.oneOfType([
    d.arrayOf(d.node),
    d.node
  ]).isRequired
};
const ra = "_infoPanelContainer_gnoj6_1", ta = "_topLeft_gnoj6_13", na = "_topRight_gnoj6_18", aa = "_centerLeft_gnoj6_23", oa = "_centerRight_gnoj6_28", ia = "_bottomLeft_gnoj6_33", sa = "_bottomRight_gnoj6_38", Sr = {
  infoPanelContainer: ra,
  topLeft: ta,
  topRight: na,
  centerLeft: aa,
  centerRight: oa,
  bottomLeft: ia,
  bottomRight: sa
}, xa = ({ children: t, position: r = "centerRight" }) => /* @__PURE__ */ o.jsx("aside", { className: `${Sr.infoPanelContainer} ${Sr[r]}`, children: t }), la = ({ showToggle: t, children: r }) => {
  const [s, l] = ue(!1), v = `sidebar ${s ? "closed" : ""}`, n = () => {
    l(!s);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ o.jsx("div", { className: v, children: r }),
    t && /* @__PURE__ */ o.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ o.jsx(
      rr,
      {
        onClick: n,
        iconName: s ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
la.propTypes = {
  showToggle: d.bool,
  children: d.oneOfType([
    d.arrayOf(d.node),
    d.node
  ]).isRequired
};
const ca = ({ children: t }) => /* @__PURE__ */ o.jsx("div", { className: "layout-stacked", children: t });
ca.propTypes = {
  children: d.oneOfType([
    d.arrayOf(d.node),
    d.node
  ]).isRequired
};
const ua = ({ align: t = "left", children: r }) => /* @__PURE__ */ o.jsx("div", { className: `layout-standard ${t}`, children: r });
ua.propTypes = {
  align: d.oneOf(["left", "right"]),
  children: d.oneOfType([
    d.arrayOf(d.node),
    d.node
  ]).isRequired
};
const fa = "_sliderControlWrapper_2tznx_1", da = "_sliderLabel_2tznx_9", Or = {
  sliderControlWrapper: fa,
  sliderLabel: da
}, pa = ({ title: t, units: r, sliderConfig: s }) => /* @__PURE__ */ o.jsxs("div", { className: Or.sliderControlWrapper, children: [
  /* @__PURE__ */ o.jsx("div", { className: "ui-label", children: t }),
  /* @__PURE__ */ o.jsx("div", {}),
  s && s.map((l) => {
    const { label: v } = l;
    return /* @__PURE__ */ o.jsx("div", { className: Or.sliderLabel, children: v });
  }),
  s && s.map((l) => {
    const { onChange: v, min: n, max: m, step: y, value: h } = l;
    return /* @__PURE__ */ o.jsx(
      Dn,
      {
        onChange: v,
        units: r,
        min: n,
        max: m,
        step: y,
        value: h
      }
    );
  })
] });
pa.propTypes = {
  title: d.string.isRequired,
  units: d.string.isRequired,
  sliderConfig: d.arrayOf(d.objectOf(d.string)).isRequired
};
export {
  ba as ComparisonControl,
  Ta as DatePicker,
  Pn as GradientLegend,
  rr as IconButton,
  xa as InfoPanelContainer,
  Jt as LayerButtonReel,
  un as LayerCard,
  qn as LayerGroup,
  Mr as LayerToggle,
  Qn as MapContainer,
  ea as NavContainer,
  Kn as RangeSlider,
  la as SidebarContainer,
  Dn as SimpleSlider,
  pa as SliderControl,
  ca as Stacked,
  ua as Standard,
  yn as Swatch,
  gn as SwatchLegend
};
