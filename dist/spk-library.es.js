import Pr, { useState as de, useReducer as st, useRef as lt, useCallback as we, useEffect as Pe } from "react";
import { FontAwesomeIcon as je } from "@fortawesome/react-fontawesome";
import { faTrash as ct, faFilter as ut, faInfo as kr, faFillDrip as ft, faEllipsisVertical as dt, faChevronRight as $r, faChevronLeft as pt, faArrowsLeftRight as vt, faCalendar as yt, faChevronDown as ht } from "@fortawesome/free-solid-svg-icons";
import { Switch as mt, TooltipTrigger as gt, Tooltip as _t, Button as Ne, Slider as Ar, Label as Ze, SliderTrack as Ir, SliderThumb as Nr, DatePicker as bt, Group as xt, DateInput as Tt, DateSegment as wt, Text as Ct, FieldError as vr, Popover as Et, Dialog as Rt, Calendar as St, Heading as jt, CalendarGrid as Ot, CalendarCell as Pt } from "react-aria-components";
import { useHover as kt } from "react-aria";
import { CalendarDate as $t } from "@internationalized/date";
import './index.css';function At(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ke = { exports: {} }, Ce = {};
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
function It() {
  if (yr) return Ce;
  yr = 1;
  var t = Pr, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(h, m, l) {
    var g, b = {}, P = null, q = null;
    l !== void 0 && (P = "" + l), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (q = m.ref);
    for (g in m) c.call(m, g) && !v.hasOwnProperty(g) && (b[g] = m[g]);
    if (h && h.defaultProps) for (g in m = h.defaultProps, m) b[g] === void 0 && (b[g] = m[g]);
    return { $$typeof: r, type: h, key: P, ref: q, props: b, _owner: y.current };
  }
  return Ce.Fragment = i, Ce.jsx = _, Ce.jsxs = _, Ce;
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
function Nt() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Pr, r = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), U = Symbol.iterator, F = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = U && e[U] || e[F];
      return typeof a == "function" ? a : null;
    }
    var H = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), x = 1; x < a; x++)
          f[x - 1] = arguments[x];
        N("error", e, f);
      }
    }
    function N(e, a, f) {
      {
        var x = H.ReactDebugCurrentFrame, D = x.getStackAddendum();
        D !== "" && (a += "%s", f = f.concat([D]));
        var V = f.map(function(A) {
          return String(A);
        });
        V.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, V);
      }
    }
    var B = !1, d = !1, ne = !1, ce = !1, se = !1, ie;
    ie = Symbol.for("react.module.reference");
    function pe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === v || se || e === y || e === l || e === g || ce || e === q || B || d || ne || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === h || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function G(e, a, f) {
      var x = e.displayName;
      if (x)
        return x;
      var D = a.displayName || a.name || "";
      return D !== "" ? f + "(" + D + ")" : f;
    }
    function S(e) {
      return e.displayName || "Context";
    }
    function z(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case i:
          return "Portal";
        case v:
          return "Profiler";
        case y:
          return "StrictMode";
        case l:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var a = e;
            return S(a) + ".Consumer";
          case _:
            var f = e;
            return S(f._context) + ".Provider";
          case m:
            return G(e, e.render, "ForwardRef");
          case b:
            var x = e.displayName || null;
            return x !== null ? x : z(e.type) || "Memo";
          case P: {
            var D = e, V = D._payload, A = D._init;
            try {
              return z(A(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, ue = 0, te, le, ve, me, o, p, R;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function T() {
      {
        if (ue === 0) {
          te = console.log, le = console.info, ve = console.warn, me = console.error, o = console.group, p = console.groupCollapsed, R = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: E,
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
        ue++;
      }
    }
    function $() {
      {
        if (ue--, ue === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, e, {
              value: te
            }),
            info: J({}, e, {
              value: le
            }),
            warn: J({}, e, {
              value: ve
            }),
            error: J({}, e, {
              value: me
            }),
            group: J({}, e, {
              value: o
            }),
            groupCollapsed: J({}, e, {
              value: p
            }),
            groupEnd: J({}, e, {
              value: R
            })
          });
        }
        ue < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var w = H.ReactCurrentDispatcher, C;
    function j(e, a, f) {
      {
        if (C === void 0)
          try {
            throw Error();
          } catch (D) {
            var x = D.stack.trim().match(/\n( *(at )?)/);
            C = x && x[1] || "";
          }
        return `
` + C + e;
      }
    }
    var I = !1, O;
    {
      var Z = typeof WeakMap == "function" ? WeakMap : Map;
      O = new Z();
    }
    function u(e, a) {
      if (!e || I)
        return "";
      {
        var f = O.get(e);
        if (f !== void 0)
          return f;
      }
      var x;
      I = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = w.current, w.current = null, T();
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
              x = ee;
            }
            Reflect.construct(e, [], A);
          } else {
            try {
              A.call();
            } catch (ee) {
              x = ee;
            }
            e.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            x = ee;
          }
          e();
        }
      } catch (ee) {
        if (ee && x && typeof ee.stack == "string") {
          for (var k = ee.stack.split(`
`), Q = x.stack.split(`
`), K = k.length - 1, X = Q.length - 1; K >= 1 && X >= 0 && k[K] !== Q[X]; )
            X--;
          for (; K >= 1 && X >= 0; K--, X--)
            if (k[K] !== Q[X]) {
              if (K !== 1 || X !== 1)
                do
                  if (K--, X--, X < 0 || k[K] !== Q[X]) {
                    var oe = `
` + k[K].replace(" at new ", " at ");
                    return e.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", e.displayName)), typeof e == "function" && O.set(e, oe), oe;
                  }
                while (K >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        I = !1, w.current = V, $(), Error.prepareStackTrace = D;
      }
      var be = e ? e.displayName || e.name : "", he = be ? j(be) : "";
      return typeof e == "function" && O.set(e, he), he;
    }
    function ae(e, a, f) {
      return u(e, !1);
    }
    function ge(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ye(e, a, f) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return u(e, ge(e));
      if (typeof e == "string")
        return j(e);
      switch (e) {
        case l:
          return j("Suspense");
        case g:
          return j("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return ae(e.render);
          case b:
            return ye(e.type, a, f);
          case P: {
            var x = e, D = x._payload, V = x._init;
            try {
              return ye(V(D), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, rr = {}, tr = H.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var a = e._owner, f = ye(e.type, e._source, a ? a.type : null);
        tr.setExtraStackFrame(f);
      } else
        tr.setExtraStackFrame(null);
    }
    function Wr(e, a, f, x, D) {
      {
        var V = Function.call.bind(xe);
        for (var A in e)
          if (V(e, A)) {
            var k = void 0;
            try {
              if (typeof e[A] != "function") {
                var Q = Error((x || "React class") + ": " + f + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              k = e[A](a, A, x, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              k = K;
            }
            k && !(k instanceof Error) && (Oe(D), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", f, A, typeof k), Oe(null)), k instanceof Error && !(k.message in rr) && (rr[k.message] = !0, Oe(D), Y("Failed %s type: %s", f, k.message), Oe(null));
          }
      }
    }
    var Fr = Array.isArray;
    function De(e) {
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
        return nr(e), !1;
      } catch {
        return !0;
      }
    }
    function nr(e) {
      return "" + e;
    }
    function ar(e) {
      if (Yr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qr(e)), nr(e);
    }
    var Te = H.ReactCurrentOwner, Vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, Le;
    Le = {};
    function Hr(e) {
      if (xe.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Br(e) {
      if (xe.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Gr(e, a) {
      if (typeof e.ref == "string" && Te.current && a && Te.current.stateNode !== a) {
        var f = z(Te.current.type);
        Le[f] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Te.current.type), e.ref), Le[f] = !0);
      }
    }
    function Ur(e, a) {
      {
        var f = function() {
          or || (or = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
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
          ir || (ir = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var Jr = function(e, a, f, x, D, V, A) {
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
        value: x
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Kr(e, a, f, x, D) {
      {
        var V, A = {}, k = null, Q = null;
        f !== void 0 && (ar(f), k = "" + f), Br(a) && (ar(a.key), k = "" + a.key), Hr(a) && (Q = a.ref, Gr(a, D));
        for (V in a)
          xe.call(a, V) && !Vr.hasOwnProperty(V) && (A[V] = a[V]);
        if (e && e.defaultProps) {
          var K = e.defaultProps;
          for (V in K)
            A[V] === void 0 && (A[V] = K[V]);
        }
        if (k || Q) {
          var X = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && Ur(A, X), Q && zr(A, X);
        }
        return Jr(e, k, Q, D, x, Te.current, A);
      }
    }
    var Me = H.ReactCurrentOwner, sr = H.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var a = e._owner, f = ye(e.type, e._source, a ? a.type : null);
        sr.setExtraStackFrame(f);
      } else
        sr.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function Fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function lr() {
      {
        if (Me.current) {
          var e = z(Me.current.type);
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
    var cr = {};
    function Zr(e) {
      {
        var a = lr();
        if (!a) {
          var f = typeof e == "string" ? e : e.displayName || e.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function ur(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var f = Zr(a);
        if (cr[f])
          return;
        cr[f] = !0;
        var x = "";
        e && e._owner && e._owner !== Me.current && (x = " It was passed a child from " + z(e._owner.type) + "."), _e(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, x), _e(null);
      }
    }
    function fr(e, a) {
      {
        if (typeof e != "object")
          return;
        if (De(e))
          for (var f = 0; f < e.length; f++) {
            var x = e[f];
            Fe(x) && ur(x, a);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var D = W(e);
          if (typeof D == "function" && D !== e.entries)
            for (var V = D.call(e), A; !(A = V.next()).done; )
              Fe(A.value) && ur(A.value, a);
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
        else if (typeof a == "object" && (a.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === b))
          f = a.propTypes;
        else
          return;
        if (f) {
          var x = z(a);
          Wr(f, e.props, "prop", x, e);
        } else if (a.PropTypes !== void 0 && !We) {
          We = !0;
          var D = z(a);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function et(e) {
      {
        for (var a = Object.keys(e.props), f = 0; f < a.length; f++) {
          var x = a[f];
          if (x !== "children" && x !== "key") {
            _e(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), _e(null);
            break;
          }
        }
        e.ref !== null && (_e(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var dr = {};
    function pr(e, a, f, x, D, V) {
      {
        var A = pe(e);
        if (!A) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Xr();
          Q ? k += Q : k += lr();
          var K;
          e === null ? K = "null" : De(e) ? K = "array" : e !== void 0 && e.$$typeof === r ? (K = "<" + (z(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : K = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, k);
        }
        var X = Kr(e, a, f, D, V);
        if (X == null)
          return X;
        if (A) {
          var oe = a.children;
          if (oe !== void 0)
            if (x)
              if (De(oe)) {
                for (var be = 0; be < oe.length; be++)
                  fr(oe[be], e);
                Object.freeze && Object.freeze(oe);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(oe, e);
        }
        if (xe.call(a, "key")) {
          var he = z(e), ee = Object.keys(a).filter(function(it) {
            return it !== "key";
          }), qe = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dr[he + qe]) {
            var ot = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qe, he, ot, he), dr[he + qe] = !0;
          }
        }
        return e === c ? et(X) : Qr(X), X;
      }
    }
    function rt(e, a, f) {
      return pr(e, a, f, !0);
    }
    function tt(e, a, f) {
      return pr(e, a, f, !1);
    }
    var nt = tt, at = rt;
    Ee.Fragment = c, Ee.jsx = nt, Ee.jsxs = at;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ke.exports = It() : Ke.exports = Nt();
var n = Ke.exports, Xe = { exports: {} }, ke = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Dt() {
  if (mr) return L;
  mr = 1;
  var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, i = t ? Symbol.for("react.portal") : 60106, c = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, v = t ? Symbol.for("react.profiler") : 60114, _ = t ? Symbol.for("react.provider") : 60109, h = t ? Symbol.for("react.context") : 60110, m = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, g = t ? Symbol.for("react.forward_ref") : 60112, b = t ? Symbol.for("react.suspense") : 60113, P = t ? Symbol.for("react.suspense_list") : 60120, q = t ? Symbol.for("react.memo") : 60115, U = t ? Symbol.for("react.lazy") : 60116, F = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, H = t ? Symbol.for("react.responder") : 60118, Y = t ? Symbol.for("react.scope") : 60119;
  function N(d) {
    if (typeof d == "object" && d !== null) {
      var ne = d.$$typeof;
      switch (ne) {
        case r:
          switch (d = d.type, d) {
            case m:
            case l:
            case c:
            case v:
            case y:
            case b:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case h:
                case g:
                case U:
                case q:
                case _:
                  return d;
                default:
                  return ne;
              }
          }
        case i:
          return ne;
      }
    }
  }
  function B(d) {
    return N(d) === l;
  }
  return L.AsyncMode = m, L.ConcurrentMode = l, L.ContextConsumer = h, L.ContextProvider = _, L.Element = r, L.ForwardRef = g, L.Fragment = c, L.Lazy = U, L.Memo = q, L.Portal = i, L.Profiler = v, L.StrictMode = y, L.Suspense = b, L.isAsyncMode = function(d) {
    return B(d) || N(d) === m;
  }, L.isConcurrentMode = B, L.isContextConsumer = function(d) {
    return N(d) === h;
  }, L.isContextProvider = function(d) {
    return N(d) === _;
  }, L.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, L.isForwardRef = function(d) {
    return N(d) === g;
  }, L.isFragment = function(d) {
    return N(d) === c;
  }, L.isLazy = function(d) {
    return N(d) === U;
  }, L.isMemo = function(d) {
    return N(d) === q;
  }, L.isPortal = function(d) {
    return N(d) === i;
  }, L.isProfiler = function(d) {
    return N(d) === v;
  }, L.isStrictMode = function(d) {
    return N(d) === y;
  }, L.isSuspense = function(d) {
    return N(d) === b;
  }, L.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === c || d === l || d === v || d === y || d === b || d === P || typeof d == "object" && d !== null && (d.$$typeof === U || d.$$typeof === q || d.$$typeof === _ || d.$$typeof === h || d.$$typeof === g || d.$$typeof === W || d.$$typeof === H || d.$$typeof === Y || d.$$typeof === F);
  }, L.typeOf = N, L;
}
var M = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Lt() {
  return gr || (gr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, i = t ? Symbol.for("react.portal") : 60106, c = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, v = t ? Symbol.for("react.profiler") : 60114, _ = t ? Symbol.for("react.provider") : 60109, h = t ? Symbol.for("react.context") : 60110, m = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, g = t ? Symbol.for("react.forward_ref") : 60112, b = t ? Symbol.for("react.suspense") : 60113, P = t ? Symbol.for("react.suspense_list") : 60120, q = t ? Symbol.for("react.memo") : 60115, U = t ? Symbol.for("react.lazy") : 60116, F = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, H = t ? Symbol.for("react.responder") : 60118, Y = t ? Symbol.for("react.scope") : 60119;
    function N(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === c || u === l || u === v || u === y || u === b || u === P || typeof u == "object" && u !== null && (u.$$typeof === U || u.$$typeof === q || u.$$typeof === _ || u.$$typeof === h || u.$$typeof === g || u.$$typeof === W || u.$$typeof === H || u.$$typeof === Y || u.$$typeof === F);
    }
    function B(u) {
      if (typeof u == "object" && u !== null) {
        var ae = u.$$typeof;
        switch (ae) {
          case r:
            var ge = u.type;
            switch (ge) {
              case m:
              case l:
              case c:
              case v:
              case y:
              case b:
                return ge;
              default:
                var ye = ge && ge.$$typeof;
                switch (ye) {
                  case h:
                  case g:
                  case U:
                  case q:
                  case _:
                    return ye;
                  default:
                    return ae;
                }
            }
          case i:
            return ae;
        }
      }
    }
    var d = m, ne = l, ce = h, se = _, ie = r, pe = g, G = c, S = U, z = q, J = i, ue = v, te = y, le = b, ve = !1;
    function me(u) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(u) || B(u) === m;
    }
    function o(u) {
      return B(u) === l;
    }
    function p(u) {
      return B(u) === h;
    }
    function R(u) {
      return B(u) === _;
    }
    function E(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function T(u) {
      return B(u) === g;
    }
    function $(u) {
      return B(u) === c;
    }
    function w(u) {
      return B(u) === U;
    }
    function C(u) {
      return B(u) === q;
    }
    function j(u) {
      return B(u) === i;
    }
    function I(u) {
      return B(u) === v;
    }
    function O(u) {
      return B(u) === y;
    }
    function Z(u) {
      return B(u) === b;
    }
    M.AsyncMode = d, M.ConcurrentMode = ne, M.ContextConsumer = ce, M.ContextProvider = se, M.Element = ie, M.ForwardRef = pe, M.Fragment = G, M.Lazy = S, M.Memo = z, M.Portal = J, M.Profiler = ue, M.StrictMode = te, M.Suspense = le, M.isAsyncMode = me, M.isConcurrentMode = o, M.isContextConsumer = p, M.isContextProvider = R, M.isElement = E, M.isForwardRef = T, M.isFragment = $, M.isLazy = w, M.isMemo = C, M.isPortal = j, M.isProfiler = I, M.isStrictMode = O, M.isSuspense = Z, M.isValidElementType = N, M.typeOf = B;
  }()), M;
}
var _r;
function Dr() {
  return _r || (_r = 1, process.env.NODE_ENV === "production" ? ke.exports = Dt() : ke.exports = Lt()), ke.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ye, br;
function Mt() {
  if (br) return Ye;
  br = 1;
  var t = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function c(v) {
    if (v == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(v);
  }
  function y() {
    try {
      if (!Object.assign)
        return !1;
      var v = new String("abc");
      if (v[5] = "de", Object.getOwnPropertyNames(v)[0] === "5")
        return !1;
      for (var _ = {}, h = 0; h < 10; h++)
        _["_" + String.fromCharCode(h)] = h;
      var m = Object.getOwnPropertyNames(_).map(function(g) {
        return _[g];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        l[g] = g;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = y() ? Object.assign : function(v, _) {
    for (var h, m = c(v), l, g = 1; g < arguments.length; g++) {
      h = Object(arguments[g]);
      for (var b in h)
        r.call(h, b) && (m[b] = h[b]);
      if (t) {
        l = t(h);
        for (var P = 0; P < l.length; P++)
          i.call(h, l[P]) && (m[l[P]] = h[l[P]]);
      }
    }
    return m;
  }, Ye;
}
var Ve, xr;
function Qe() {
  if (xr) return Ve;
  xr = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ve = t, Ve;
}
var He, Tr;
function Lr() {
  return Tr || (Tr = 1, He = Function.call.bind(Object.prototype.hasOwnProperty)), He;
}
var Be, wr;
function Wt() {
  if (wr) return Be;
  wr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Qe(), i = {}, c = Lr();
    t = function(v) {
      var _ = "Warning: " + v;
      typeof console < "u" && console.error(_);
      try {
        throw new Error(_);
      } catch {
      }
    };
  }
  function y(v, _, h, m, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in v)
        if (c(v, g)) {
          var b;
          try {
            if (typeof v[g] != "function") {
              var P = Error(
                (m || "React class") + ": " + h + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            b = v[g](_, g, m, h, null, r);
          } catch (U) {
            b = U;
          }
          if (b && !(b instanceof Error) && t(
            (m || "React class") + ": type specification of " + h + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), b instanceof Error && !(b.message in i)) {
            i[b.message] = !0;
            var q = l ? l() : "";
            t(
              "Failed " + h + " type: " + b.message + (q ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Be = y, Be;
}
var Ge, Cr;
function Ft() {
  if (Cr) return Ge;
  Cr = 1;
  var t = Dr(), r = Mt(), i = Qe(), c = Lr(), y = Wt(), v = function() {
  };
  process.env.NODE_ENV !== "production" && (v = function(h) {
    var m = "Warning: " + h;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function _() {
    return null;
  }
  return Ge = function(h, m) {
    var l = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function b(o) {
      var p = o && (l && o[l] || o[g]);
      if (typeof p == "function")
        return p;
    }
    var P = "<<anonymous>>", q = {
      array: H("array"),
      bigint: H("bigint"),
      bool: H("boolean"),
      func: H("function"),
      number: H("number"),
      object: H("object"),
      string: H("string"),
      symbol: H("symbol"),
      any: Y(),
      arrayOf: N,
      element: B(),
      elementType: d(),
      instanceOf: ne,
      node: pe(),
      objectOf: se,
      oneOf: ce,
      oneOfType: ie,
      shape: S,
      exact: z
    };
    function U(o, p) {
      return o === p ? o !== 0 || 1 / o === 1 / p : o !== o && p !== p;
    }
    function F(o, p) {
      this.message = o, this.data = p && typeof p == "object" ? p : {}, this.stack = "";
    }
    F.prototype = Error.prototype;
    function W(o) {
      if (process.env.NODE_ENV !== "production")
        var p = {}, R = 0;
      function E($, w, C, j, I, O, Z) {
        if (j = j || P, O = O || C, Z !== i) {
          if (m) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = j + ":" + C;
            !p[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (v(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[ae] = !0, R++);
          }
        }
        return w[C] == null ? $ ? w[C] === null ? new F("The " + I + " `" + O + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new F("The " + I + " `" + O + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : o(w, C, j, I, O);
      }
      var T = E.bind(null, !1);
      return T.isRequired = E.bind(null, !0), T;
    }
    function H(o) {
      function p(R, E, T, $, w, C) {
        var j = R[E], I = te(j);
        if (I !== o) {
          var O = le(j);
          return new F(
            "Invalid " + $ + " `" + w + "` of type " + ("`" + O + "` supplied to `" + T + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return W(p);
    }
    function Y() {
      return W(_);
    }
    function N(o) {
      function p(R, E, T, $, w) {
        if (typeof o != "function")
          return new F("Property `" + w + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var C = R[E];
        if (!Array.isArray(C)) {
          var j = te(C);
          return new F("Invalid " + $ + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an array."));
        }
        for (var I = 0; I < C.length; I++) {
          var O = o(C, I, T, $, w + "[" + I + "]", i);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return W(p);
    }
    function B() {
      function o(p, R, E, T, $) {
        var w = p[R];
        if (!h(w)) {
          var C = te(w);
          return new F("Invalid " + T + " `" + $ + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(o);
    }
    function d() {
      function o(p, R, E, T, $) {
        var w = p[R];
        if (!t.isValidElementType(w)) {
          var C = te(w);
          return new F("Invalid " + T + " `" + $ + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(o);
    }
    function ne(o) {
      function p(R, E, T, $, w) {
        if (!(R[E] instanceof o)) {
          var C = o.name || P, j = me(R[E]);
          return new F("Invalid " + $ + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return W(p);
    }
    function ce(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? v(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : v("Invalid argument supplied to oneOf, expected an array.")), _;
      function p(R, E, T, $, w) {
        for (var C = R[E], j = 0; j < o.length; j++)
          if (U(C, o[j]))
            return null;
        var I = JSON.stringify(o, function(Z, u) {
          var ae = le(u);
          return ae === "symbol" ? String(u) : u;
        });
        return new F("Invalid " + $ + " `" + w + "` of value `" + String(C) + "` " + ("supplied to `" + T + "`, expected one of " + I + "."));
      }
      return W(p);
    }
    function se(o) {
      function p(R, E, T, $, w) {
        if (typeof o != "function")
          return new F("Property `" + w + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var C = R[E], j = te(C);
        if (j !== "object")
          return new F("Invalid " + $ + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an object."));
        for (var I in C)
          if (c(C, I)) {
            var O = o(C, I, T, $, w + "." + I, i);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return W(p);
    }
    function ie(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && v("Invalid argument supplied to oneOfType, expected an instance of array."), _;
      for (var p = 0; p < o.length; p++) {
        var R = o[p];
        if (typeof R != "function")
          return v(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(R) + " at index " + p + "."
          ), _;
      }
      function E(T, $, w, C, j) {
        for (var I = [], O = 0; O < o.length; O++) {
          var Z = o[O], u = Z(T, $, w, C, j, i);
          if (u == null)
            return null;
          u.data && c(u.data, "expectedType") && I.push(u.data.expectedType);
        }
        var ae = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new F("Invalid " + C + " `" + j + "` supplied to " + ("`" + w + "`" + ae + "."));
      }
      return W(E);
    }
    function pe() {
      function o(p, R, E, T, $) {
        return J(p[R]) ? null : new F("Invalid " + T + " `" + $ + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return W(o);
    }
    function G(o, p, R, E, T) {
      return new F(
        (o || "React class") + ": " + p + " type `" + R + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function S(o) {
      function p(R, E, T, $, w) {
        var C = R[E], j = te(C);
        if (j !== "object")
          return new F("Invalid " + $ + " `" + w + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var I in o) {
          var O = o[I];
          if (typeof O != "function")
            return G(T, $, w, I, le(O));
          var Z = O(C, I, T, $, w + "." + I, i);
          if (Z)
            return Z;
        }
        return null;
      }
      return W(p);
    }
    function z(o) {
      function p(R, E, T, $, w) {
        var C = R[E], j = te(C);
        if (j !== "object")
          return new F("Invalid " + $ + " `" + w + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        var I = r({}, R[E], o);
        for (var O in I) {
          var Z = o[O];
          if (c(o, O) && typeof Z != "function")
            return G(T, $, w, O, le(Z));
          if (!Z)
            return new F(
              "Invalid " + $ + " `" + w + "` key `" + O + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(R[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var u = Z(C, O, T, $, w + "." + O, i);
          if (u)
            return u;
        }
        return null;
      }
      return W(p);
    }
    function J(o) {
      switch (typeof o) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !o;
        case "object":
          if (Array.isArray(o))
            return o.every(J);
          if (o === null || h(o))
            return !0;
          var p = b(o);
          if (p) {
            var R = p.call(o), E;
            if (p !== o.entries) {
              for (; !(E = R.next()).done; )
                if (!J(E.value))
                  return !1;
            } else
              for (; !(E = R.next()).done; ) {
                var T = E.value;
                if (T && !J(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(o, p) {
      return o === "symbol" ? !0 : p ? p["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && p instanceof Symbol : !1;
    }
    function te(o) {
      var p = typeof o;
      return Array.isArray(o) ? "array" : o instanceof RegExp ? "object" : ue(p, o) ? "symbol" : p;
    }
    function le(o) {
      if (typeof o > "u" || o === null)
        return "" + o;
      var p = te(o);
      if (p === "object") {
        if (o instanceof Date)
          return "date";
        if (o instanceof RegExp)
          return "regexp";
      }
      return p;
    }
    function ve(o) {
      var p = le(o);
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
    function me(o) {
      return !o.constructor || !o.constructor.name ? P : o.constructor.name;
    }
    return q.checkPropTypes = y, q.resetWarningCache = y.resetWarningCache, q.PropTypes = q, q;
  }, Ge;
}
var Ue, Er;
function qt() {
  if (Er) return Ue;
  Er = 1;
  var t = Qe();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, Ue = function() {
    function c(_, h, m, l, g, b) {
      if (b !== t) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    c.isRequired = c;
    function y() {
      return c;
    }
    var v = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: y,
      element: c,
      elementType: c,
      instanceOf: y,
      node: c,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: i,
      resetWarningCache: r
    };
    return v.PropTypes = v, v;
  }, Ue;
}
if (process.env.NODE_ENV !== "production") {
  var Yt = Dr(), Vt = !0;
  Xe.exports = Ft()(Yt.isElement, Vt);
} else
  Xe.exports = qt()();
var Ht = Xe.exports;
const s = /* @__PURE__ */ At(Ht), Bt = "_iconButton_1963e_1", Gt = {
  iconButton: Bt
}, Ut = {
  trash: ct,
  filter: ut,
  info: kr,
  fill: ft,
  ellipsis: dt,
  chevronRight: $r,
  chevronLeft: pt
}, er = ({ onClick: t, iconName: r }) => /* @__PURE__ */ n.jsx("div", { className: Gt.iconButton, children: /* @__PURE__ */ n.jsx("button", { "aria-label": r, type: "button", onClick: t, children: /* @__PURE__ */ n.jsx(je, { icon: Ut[r] }) }) });
er.propTypes = {
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
const zt = "_layerButtonReel_1o59k_1", Jt = {
  layerButtonReel: zt
}, Kt = ({ buttons: t }) => /* @__PURE__ */ n.jsx("div", { className: Jt.layerButtonReel, children: t && Object.keys(t).map((r) => /* @__PURE__ */ n.jsx(er, { iconName: r, onClick: t[r] })) });
Kt.propTypes = {
  buttons: s.objectOf(s.func)
};
const Xt = "_indicator_1wt51_19", Rr = {
  switch: "_switch_1wt51_7",
  indicator: Xt
}, Mr = ({ layerName: t, isActive: r = !1, onChange: i, ...c }) => /* @__PURE__ */ n.jsx(mt, { ...c, className: Rr.switch, isSelected: r, onChange: i, "aria-label": t, value: t, children: /* @__PURE__ */ n.jsx("div", { className: Rr.indicator }) });
Mr.propTypes = {
  layerName: s.string,
  isActive: s.bool,
  onChange: s.func.isRequired,
  disabled: s.bool
};
const Zt = "_layerCard_1hhfw_1", Qt = "_layerCardAttributionWrapper_1hhfw_11", en = "_layerCardAttribution_1hhfw_11", rn = "_layerCardHeader_1hhfw_23", tn = "_layerCardTextWrapper_1hhfw_32", nn = "_layerCardTitle_1hhfw_40", an = "_layerCardDescription_1hhfw_48", on = "_layerCardControls_1hhfw_55", sn = "_layerCardToggle_1hhfw_60", ln = "_layerCardContent_1hhfw_65", cn = "_layerCardInfoIcon_1hhfw_83", fe = {
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
}, un = ({
  layerName: t,
  isActive: r,
  onChange: i,
  attribution: c,
  description: y,
  children: v
}) => {
  const [_, h] = de(!1), m = c && !!c.text;
  return /* @__PURE__ */ n.jsxs("div", { className: fe.layerCard, children: [
    /* @__PURE__ */ n.jsxs("div", { className: fe.layerCardHeader, children: [
      /* @__PURE__ */ n.jsx("div", { className: fe.layerCardTextWrapper, children: /* @__PURE__ */ n.jsx("span", { className: fe.layerCardTitle, children: t }) }),
      /* @__PURE__ */ n.jsxs(gt, { delay: 300, children: [
        /* @__PURE__ */ n.jsx(_t, { children: "Toggle layer description" }),
        (y || m) && /* @__PURE__ */ n.jsx(
          Ne,
          {
            className: fe.layerCardInfoIcon,
            onClick: () => h(!_),
            children: /* @__PURE__ */ n.jsx(
              je,
              {
                size: "xs",
                fontWeight: "bold",
                icon: kr
              }
            )
          }
        )
      ] }),
      i && /* @__PURE__ */ n.jsx(
        Mr,
        {
          layerName: t,
          isActive: r,
          onChange: i
        }
      )
    ] }),
    _ && /* @__PURE__ */ n.jsxs("div", { className: fe.layerCardContent, children: [
      y && /* @__PURE__ */ n.jsx("span", { className: fe.layerCardDescription, children: y }),
      m && /* @__PURE__ */ n.jsx("div", { className: fe.layerCardAttributionWrapper, children: /* @__PURE__ */ n.jsxs("span", { className: fe.layerCardAttribution, children: [
        "Source:",
        " ",
        /* @__PURE__ */ n.jsx("a", { href: c.url, children: c.text })
      ] }) }),
      v && v
    ] })
  ] });
};
un.propTypes = {
  layerName: s.string.isRequired,
  isActive: s.bool,
  onChange: s.func.isRequired,
  description: s.string,
  attribution: s.objectOf({
    url: s.string,
    text: s.string
  }),
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ])
};
const fn = "_swatchContainer_771fp_2", dn = "_swatch_771fp_2", pn = "_swatchLabel_771fp_18", vn = "_swatchValue_771fp_24", $e = {
  swatchContainer: fn,
  swatch: dn,
  swatchLabel: pn,
  swatchValue: vn
}, yn = ({ color: t, label: r = "", value: i, units: c = "" }) => /* @__PURE__ */ n.jsxs("div", { className: $e.swatchContainer, children: [
  /* @__PURE__ */ n.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: $e.swatch,
      style: { backgroundColor: t }
    }
  ),
  /* @__PURE__ */ n.jsx("div", { "data-testid": "swatch-label", className: $e.swatchLabel, children: r }),
  /* @__PURE__ */ n.jsx("div", { "data-testid": "swatch-value", className: $e.swatchValue, children: i !== void 0 && `${i}${c}` })
] }), hn = "_swatchLegend_qiaru_1", mn = {
  swatchLegend: hn
}, gn = ({ swatches: t }) => /* @__PURE__ */ n.jsx("div", { className: mn.swatchLegend, children: t && t.map((r) => {
  const { color: i, label: c, value: y, units: v } = r;
  return /* @__PURE__ */ n.jsx(
    yn,
    {
      label: c,
      color: i,
      value: y,
      units: v
    },
    c
  );
}) });
gn.propTypes = {
  swatches: s.arrayOf(s.objectOf(s.string)).isRequired
};
const _n = "_slider_1bnet_1", bn = "_sliderLabel_1bnet_16", xn = "_sliderThumb_1bnet_20", Tn = "_sliderTrack_1bnet_41", wn = "_comparisonControl_1bnet_66", Re = {
  slider: _n,
  sliderLabel: bn,
  sliderThumb: xn,
  sliderTrack: Tn,
  comparisonControl: wn
}, Ea = ({
  label: t,
  showLabel: r = !0,
  onChange: i,
  value: c = 50,
  ...y
}) => /* @__PURE__ */ n.jsx("div", { className: Re.comparisonControl, children: /* @__PURE__ */ n.jsxs(Ar, { maxValue: 94, minValue: 6, step: 0.1, className: Re.slider, "aria-label": !r && typeof t == "string" ? t : void 0, onChange: i, value: c, ...y, children: [
  r && /* @__PURE__ */ n.jsx(Ze, { className: Re.sliderLabel, children: t }),
  /* @__PURE__ */ n.jsx(Ir, { className: Re.sliderTrack, children: /* @__PURE__ */ n.jsx(Nr, { className: Re.sliderThumb, children: /* @__PURE__ */ n.jsx(je, { color: "white", icon: vt }) }) })
] }) }), Cn = "_datePicker_ywin1_1 react-aria-DatePicker", En = "_dateInput_ywin1_12 react-aria-DateInput", Rn = "_hoverDatepicker_ywin1_17", ze = {
  datePicker: Cn,
  dateInput: En,
  hoverDatepicker: Rn
}, Je = (t) => new $t(t.getFullYear(), t.getMonth() + 1, t.getDate()), Ra = ({
  label: t,
  helperText: r,
  errorMessage: i,
  value: c,
  onChange: y,
  "aria-label": v,
  "aria-labelledby": _,
  className: h,
  maxValue: m,
  minValue: l,
  ...g
}) => {
  const [b, P] = de(!1), { hoverProps: q, isHovered: U } = kt({}), F = c ? Je(c) : null, W = m ? Je(m) : null, H = l ? Je(l) : null, Y = (N) => {
    if (N) {
      const B = new Date(N.toString());
      y(B);
    } else
      y(null);
  };
  return /* @__PURE__ */ n.jsxs(
    bt,
    {
      className: `${ze.datePicker} ${h || ""}`.trim(),
      value: F,
      onChange: Y,
      "aria-label": v,
      "aria-labelledby": _,
      maxValue: W,
      minValue: H,
      ...g,
      children: [
        t && /* @__PURE__ */ n.jsx(Ze, { children: t }),
        /* @__PURE__ */ n.jsxs(xt, { children: [
          /* @__PURE__ */ n.jsx(
            Tt,
            {
              className: `${U || b ? ze.hoverDatepicker : ""} ${ze.dateInput}`.trim(),
              ...q,
              children: (N) => /* @__PURE__ */ n.jsx(wt, { segment: N })
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ne,
            {
              "aria-label": "Open calendar",
              onHoverChange: (N) => P(N),
              children: /* @__PURE__ */ n.jsx(je, { icon: yt })
            }
          )
        ] }),
        r && /* @__PURE__ */ n.jsx(Ct, { slot: "description", children: r }),
        i ? /* @__PURE__ */ n.jsx(vr, { children: i }) : /* @__PURE__ */ n.jsx(vr, {}),
        /* @__PURE__ */ n.jsx(Et, { children: /* @__PURE__ */ n.jsx(Rt, { children: /* @__PURE__ */ n.jsxs(St, { children: [
          /* @__PURE__ */ n.jsxs("header", { children: [
            /* @__PURE__ */ n.jsx(Ne, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ n.jsx(jt, {}),
            /* @__PURE__ */ n.jsx(Ne, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ n.jsx(Ot, { children: (N) => /* @__PURE__ */ n.jsx(Pt, { date: N }) })
        ] }) }) })
      ]
    }
  );
}, Sn = "_gradient_1w8qh_1", jn = "_gradientNumbers_1w8qh_6", On = "_gradientLegend_1w8qh_11", Ae = {
  gradient: Sn,
  gradientNumbers: jn,
  gradientLegend: On
}, Pn = ({
  title: t,
  startColor: r = "red",
  endColor: i = "yellow",
  startNo: c,
  endNo: y,
  titleBelow: v = !1,
  bins: _ = 0,
  precision: h = 2,
  units: m
}) => {
  const l = _ > 0 ? Array(_ - 1).fill(0).map((g, b) => {
    const P = (c + (y - c) / _ * (b + 1)).toPrecision(h);
    return /* @__PURE__ */ n.jsx("span", { children: P }, P);
  }) : [];
  return /* @__PURE__ */ n.jsxs("div", { className: "gradient-box", children: [
    !v && /* @__PURE__ */ n.jsxs("div", { className: "ui-title", children: [
      " ",
      t
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: Ae.gradientLegend, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: Ae.gradient,
          style: {
            background: `linear-gradient(to right, ${r} , ${i})`
          }
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: Ae.gradientNumbers, children: [
        /* @__PURE__ */ n.jsxs("span", { children: [
          c,
          " ",
          m
        ] }),
        l,
        /* @__PURE__ */ n.jsxs("span", { children: [
          y,
          " ",
          m
        ] })
      ] }),
      v && /* @__PURE__ */ n.jsxs("div", { className: Ae.uiTitle, children: [
        " ",
        t
      ] })
    ] })
  ] });
};
Pn.propTypes = {
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
const kn = "_slider_108mp_1", $n = "_sliderLabel_108mp_16", An = "_sliderThumb_108mp_20", In = "_sliderTrack_108mp_41", Ie = {
  slider: kn,
  sliderLabel: $n,
  sliderThumb: An,
  sliderTrack: In
}, Nn = ({
  className: t,
  label: r = "",
  onChange: i,
  minValue: c,
  maxValue: y,
  step: v,
  value: _ = 0,
  showLabel: h,
  ...m
}) => /* @__PURE__ */ n.jsxs(Ar, { maxValue: y, minValue: c, step: v, className: `${Ie.slider} ${t || ""}`.trim(), "aria-label": !h && typeof r == "string" ? r : void 0, onChange: i, value: _, ...m, children: [
  h && /* @__PURE__ */ n.jsx(Ze, { className: Ie.sliderLabel, children: r }),
  /* @__PURE__ */ n.jsx(Ir, { className: Ie.sliderTrack, children: /* @__PURE__ */ n.jsx(Nr, { className: Ie.sliderThumb }) })
] }), Dn = "_layerGroupWrapper_1ga1r_1", Ln = "_layerGroupButton_1ga1r_5", Mn = "_layerGroupChevron_1ga1r_17", Wn = "_layerGroupName_1ga1r_30", Se = {
  layerGroupWrapper: Dn,
  layerGroupButton: Ln,
  layerGroupChevron: Mn,
  layerGroupName: Wn
}, Fn = ({ groupName: t, children: r }) => {
  const [i, c] = de(!1), y = () => {
    c(!i);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: Se.layerGroupWrapper, children: [
    /* @__PURE__ */ n.jsxs("button", { type: "button", className: Se.layerGroupButton, onClick: y, children: [
      /* @__PURE__ */ n.jsx("div", { className: Se.layerGroupChevron, children: /* @__PURE__ */ n.jsx(je, { size: "sm", fixedWidth: !0, icon: i ? ht : $r }) }),
      /* @__PURE__ */ n.jsx("span", { className: Se.layerGroupName, children: t })
    ] }),
    i && /* @__PURE__ */ n.jsx("div", { className: Se.layerGroupChildren, children: r })
  ] });
};
Fn.propTypes = {
  groupName: s.string,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const qn = "_rangeSlider_1wewu_1", Yn = "_rangeSliderLabel_1wewu_14", Vn = "_rangeSliderValues_1wewu_19", Hn = "_rangeSliderMin_1wewu_28", Bn = "_rangeSliderMax_1wewu_32", Gn = "_rangeSliderContainer_1wewu_36", Un = "_rangeSliderTrack_1wewu_46", zn = "_rangeSliderHandleBar_1wewu_55", Jn = "_rangeSliderHandleGroup_1wewu_65", Kn = "_rangeSliderHandleLeft_1wewu_75", Xn = "_rangeSliderHandleRight_1wewu_76", Zn = "_rangeSliderValue_1wewu_19", re = {
  rangeSlider: qn,
  rangeSliderLabel: Yn,
  rangeSliderValues: Vn,
  rangeSliderMin: Hn,
  rangeSliderMax: Bn,
  rangeSliderContainer: Gn,
  rangeSliderTrack: Un,
  rangeSliderHandleBar: zn,
  rangeSliderHandleGroup: Jn,
  rangeSliderHandleLeft: Kn,
  rangeSliderHandleRight: Xn,
  rangeSliderValue: Zn
};
function Qn(t, r) {
  switch (r.type) {
    case "ChangeStep": {
      let i = { lower: Math.max(r.bounds.min, t.lower), upper: Math.min(r.bounds.max, t.upper) };
      return r.step > 0 && (i = {
        lower: Math.max(r.bounds.min, Math.floor(t.lower / r.step) * r.step),
        upper: Math.min(r.bounds.max, Math.ceil(t.upper / r.step) * r.step)
      }), r.callback && r.callback(i), i;
    }
    case "ChangeValues": {
      let i = {
        lower: Math.max(r.bounds.min, r.values[0]),
        upper: Math.min(r.bounds.max, r.values[1])
      };
      return r.step > 0 && (i = {
        lower: Math.max(r.bounds.min, Math.floor(r.values[0] / r.step) * r.step),
        upper: Math.min(r.bounds.max, Math.ceil(r.values[1] / r.step) * r.step)
      }), r.callback && r.callback(i), i;
    }
    default:
      throw Error(`Unknown action:  ${r.type}`);
  }
}
const ea = ({ label: t, bounds: r, step: i = 0, valuesChanging: c, valuesChanged: y, currentValues: v = {}, showValues: _ }) => {
  const h = Math.max(isNaN(v.lower) ? -1 / 0 : v.lower, r.min), m = Math.min(isNaN(v.upper) ? 1 / 0 : v.upper, r.max), [l, g] = st(Qn, { lower: h, upper: m }), b = lt(null), [P, q] = de(0), [U, F] = de(0), [W, H] = de("none"), [Y, N] = de(0), B = we((G) => {
    const S = (G - r.min) / (r.max - r.min);
    return b.current.clientWidth * S;
  }, [r]), d = we((G) => {
    const S = G / b.current.clientWidth;
    return r.min + (r.max - r.min) * S;
  }, [r]), ne = we((G) => {
    const S = G / b.current.clientWidth;
    return (r.max - r.min) * S;
  }, [r]);
  Pe(() => {
    q(B(l.lower)), F(B(l.upper));
  }, [B, l]), Pe(() => {
    c && c(l);
  }, [l, c]), Pe(() => {
    g({
      type: "ChangeStep",
      callback: y,
      step: i,
      bounds: r
    });
  }, [i, y, r]);
  const ce = (G) => {
    G.preventDefault(), H(G.target.getAttribute("data-handle-id")), N(0);
  }, se = we((G) => {
    G.preventDefault(), H("none"), y && y(l);
  }, [l, y]), ie = we(
    (G) => {
      if (W === "none" || G.buttons === 0)
        return;
      G.preventDefault();
      let S = ne(G.movementX);
      if (i !== 0) {
        let J = Y + S;
        if (N(J), Math.abs(J) < Math.abs(i))
          return;
        J > 0 ? (J -= Math.abs(i), S = Math.abs(i)) : (J += Math.abs(i), S = -Math.abs(i)), N(J);
      }
      let z = [l.lower, l.upper];
      if (W === "left")
        l.lower + S < r.min && (S = r.min - l.lower), l.lower + S > l.upper ? (H("right"), z = [l.lower, l.lower + S]) : z = [l.lower + S, l.upper];
      else if (W === "right")
        l.upper + S > r.max && (S = r.max - l.upper), l.upper + S < l.lower ? (H("left"), z = [l.upper + S, l.upper]) : z = [l.lower, l.upper + S];
      else if (W === "bar")
        l.lower + S < r.min ? S = r.min - l.lower : l.upper + S > r.max && (S = r.max - l.upper), z = [l.lower + S, l.upper + S];
      else
        throw Error(`Unknown handle: ${W}`);
      g({ type: "ChangeValues", values: z, bounds: r, step: i });
    },
    [
      W,
      r,
      ne,
      l,
      Y,
      i
    ]
  );
  Pe(() => (W !== "none" ? (window.addEventListener("mousemove", ie), window.addEventListener("mouseup", se)) : (window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", se)), () => {
    window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", se);
  }), [W, ie, se]);
  const pe = (G) => {
    G.preventDefault();
    const S = d(G.nativeEvent.offsetX);
    S < l.lower ? g({ type: "ChangeValues", values: [S, l.upper], bounds: r, step: i, callback: y }) : S > l.upper && g({ type: "ChangeValues", values: [l.lower, S], bounds: r, step: i, callback: y });
  };
  return /* @__PURE__ */ n.jsxs("div", { className: re.rangeSlider, children: [
    /* @__PURE__ */ n.jsx("div", { className: re.rangeSliderLabel, children: t }),
    /* @__PURE__ */ n.jsxs("div", { className: re.rangeSliderContainer, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: re.rangeSliderTrack,
          ref: b,
          role: "none",
          tabIndex: "-1",
          onClick: pe
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: re.rangeSliderHandleBar,
          role: "slider",
          tabIndex: "0",
          "aria-label": t,
          "aria-valuenow": (l.lower + l.upper) / 2,
          "aria-valuetext": "from {values.lower} to {values.upper}",
          "aria-valuemin": r.min,
          "aria-valuemax": r.max,
          "data-handle-id": "bar",
          onMouseDown: ce,
          style: {
            left: `${P}px`,
            width: `${U - P}px`
          }
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: re.rangeSliderHandleGroup, style: { left: `${P - 10}px` }, children: [
        _ && /* @__PURE__ */ n.jsx("span", { className: re.rangeSliderValue, children: Math.round(l.lower) }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: re.rangeSliderHandleLeft,
            role: "button",
            tabIndex: "0",
            "aria-label": `${t} lower handle`,
            "data-handle-id": "left",
            onMouseDown: ce
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: re.rangeSliderHandleGroup, style: { left: `${U - 10}px` }, children: [
        _ && /* @__PURE__ */ n.jsx("span", { className: re.rangeSliderValue, children: Math.round(l.upper) }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: re.rangeSliderHandleRight,
            role: "button",
            tabIndex: "0",
            "aria-label": `${t} upper handle`,
            "data-handle-id": "right",
            onMouseDown: ce
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: re.rangeSliderValues, children: [
      /* @__PURE__ */ n.jsx("span", { className: re.rangeSliderMin, children: r.min }),
      /* @__PURE__ */ n.jsx("span", { className: re.rangeSliderMax, children: r.max })
    ] })
  ] });
};
ea.propTypes = {
  label: s.string.isRequired,
  bounds: s.shape({
    min: s.number.isRequired,
    max: s.number.isRequired
  }),
  step: s.number,
  valuesChanging: s.func,
  valuesChanged: s.func,
  currentValues: s.shape({
    lower: s.number,
    upper: s.number
  }),
  showValues: s.bool
};
const ra = "_mapWrapper_1gyf5_1", ta = "_mapContainer_1gyf5_10", Sr = {
  mapWrapper: ra,
  mapContainer: ta
}, na = ({ mapContainer: t, id: r, children: i }) => /* @__PURE__ */ n.jsxs("div", { className: Sr.mapWrapper, children: [
  /* @__PURE__ */ n.jsx("div", { className: Sr.mapContainer, id: r, ref: t }),
  i
] });
na.propTypes = {
  mapContainer: s.oneOfType([
    s.func,
    s.shape({ current: s.instanceOf(Element) })
  ]),
  children: s.node,
  id: s.string
};
const aa = ({ children: t }) => /* @__PURE__ */ n.jsx("div", { className: "nav-container", children: t });
aa.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const oa = "_infoPanelContainer_gnoj6_1", ia = "_topLeft_gnoj6_13", sa = "_topRight_gnoj6_18", la = "_centerLeft_gnoj6_23", ca = "_centerRight_gnoj6_28", ua = "_bottomLeft_gnoj6_33", fa = "_bottomRight_gnoj6_38", jr = {
  infoPanelContainer: oa,
  topLeft: ia,
  topRight: sa,
  centerLeft: la,
  centerRight: ca,
  bottomLeft: ua,
  bottomRight: fa
}, Sa = ({ children: t, position: r = "centerRight" }) => /* @__PURE__ */ n.jsx("aside", { className: `${jr.infoPanelContainer} ${jr[r]}`, children: t }), da = ({ showToggle: t, children: r }) => {
  const [i, c] = de(!1), y = `sidebar ${i ? "closed" : ""}`, v = () => {
    c(!i);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ n.jsx("div", { className: y, children: r }),
    t && /* @__PURE__ */ n.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ n.jsx(
      er,
      {
        onClick: v,
        iconName: i ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
da.propTypes = {
  showToggle: s.bool,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const pa = ({ children: t }) => /* @__PURE__ */ n.jsx("div", { className: "layout-stacked", children: t });
pa.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const va = ({ align: t = "left", hasFooter: r = !1, children: i }) => /* @__PURE__ */ n.jsx("div", { className: `layout-standard ${t}${r ? " footer" : ""}`, children: i });
va.propTypes = {
  align: s.oneOf(["left", "right"]),
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired,
  hasFooter: s.bool
};
const ya = ({ hasFooter: t = !1, children: r }) => /* @__PURE__ */ n.jsx(
  "div",
  {
    className: t ? "layout-fullscreen-footer" : "layout-fullscreen",
    children: r
  }
);
ya.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired,
  hasFooter: s.bool
};
const ha = "_sliderControlWrapper_2tznx_1", ma = "_sliderLabel_2tznx_9", Or = {
  sliderControlWrapper: ha,
  sliderLabel: ma
}, ga = ({ title: t, units: r, sliderConfig: i }) => /* @__PURE__ */ n.jsxs("div", { className: Or.sliderControlWrapper, children: [
  /* @__PURE__ */ n.jsx("div", { className: "ui-label", children: t }),
  /* @__PURE__ */ n.jsx("div", {}),
  i && i.map((c) => {
    const { label: y } = c;
    return /* @__PURE__ */ n.jsx("div", { className: Or.sliderLabel, children: y });
  }),
  i && i.map((c) => {
    const { onChange: y, min: v, max: _, step: h, value: m } = c;
    return /* @__PURE__ */ n.jsx(
      Nn,
      {
        onChange: y,
        units: r,
        min: v,
        max: _,
        step: h,
        value: m
      }
    );
  })
] });
ga.propTypes = {
  title: s.string.isRequired,
  units: s.string.isRequired,
  sliderConfig: s.arrayOf(s.objectOf(s.string)).isRequired
};
export {
  Ea as ComparisonControl,
  Ra as DatePicker,
  ya as FullScreen,
  Pn as GradientLegend,
  er as IconButton,
  Sa as InfoPanelContainer,
  Kt as LayerButtonReel,
  un as LayerCard,
  Fn as LayerGroup,
  Mr as LayerToggle,
  na as MapContainer,
  aa as NavContainer,
  ea as RangeSlider,
  da as SidebarContainer,
  Nn as SimpleSlider,
  ga as SliderControl,
  pa as Stacked,
  va as Standard,
  yn as Swatch,
  gn as SwatchLegend
};
