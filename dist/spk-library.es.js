import Pr, { useState as de, useReducer as st, useRef as lt, useCallback as Ce, useEffect as Pe } from "react";
import { FontAwesomeIcon as je } from "@fortawesome/react-fontawesome";
import { faTrash as ct, faFilter as ut, faInfo as kr, faFillDrip as ft, faEllipsisVertical as dt, faChevronRight as $r, faChevronLeft as pt, faArrowsLeftRight as vt, faCalendar as yt, faChevronDown as ht } from "@fortawesome/free-solid-svg-icons";
import { Switch as mt, TooltipTrigger as _t, Tooltip as gt, Button as De, Slider as Ar, Label as Ze, SliderTrack as Ir, SliderThumb as Dr, DatePicker as bt, Group as xt, DateInput as Tt, DateSegment as Ct, Text as Et, FieldError as vr, Popover as wt, Dialog as Rt, Calendar as St, Heading as jt, CalendarGrid as Ot, CalendarCell as Pt } from "react-aria-components";
import { useHover as kt } from "react-aria";
import { CalendarDate as $t } from "@internationalized/date";
import './index.css';function At(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ke = { exports: {} }, Ee = {};
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
  if (yr) return Ee;
  yr = 1;
  var t = Pr, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(h, m, s) {
    var _, b = {}, P = null, q = null;
    s !== void 0 && (P = "" + s), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (q = m.ref);
    for (_ in m) c.call(m, _) && !v.hasOwnProperty(_) && (b[_] = m[_]);
    if (h && h.defaultProps) for (_ in m = h.defaultProps, m) b[_] === void 0 && (b[_] = m[_]);
    return { $$typeof: r, type: h, key: P, ref: q, props: b, _owner: y.current };
  }
  return Ee.Fragment = i, Ee.jsx = g, Ee.jsxs = g, Ee;
}
var we = {};
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
function Dt() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Pr, r = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), U = Symbol.iterator, F = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = U && e[U] || e[F];
      return typeof a == "function" ? a : null;
    }
    var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), x = 1; x < a; x++)
          f[x - 1] = arguments[x];
        D("error", e, f);
      }
    }
    function D(e, a, f) {
      {
        var x = B.ReactDebugCurrentFrame, N = x.getStackAddendum();
        N !== "" && (a += "%s", f = f.concat([N]));
        var V = f.map(function(A) {
          return String(A);
        });
        V.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, V);
      }
    }
    var H = !1, d = !1, te = !1, ce = !1, se = !1, ie;
    ie = Symbol.for("react.module.reference");
    function pe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === v || se || e === y || e === s || e === _ || ce || e === q || H || d || te || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === b || e.$$typeof === g || e.$$typeof === h || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function G(e, a, f) {
      var x = e.displayName;
      if (x)
        return x;
      var N = a.displayName || a.name || "";
      return N !== "" ? f + "(" + N + ")" : f;
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
        case s:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var a = e;
            return S(a) + ".Consumer";
          case g:
            var f = e;
            return S(f._context) + ".Provider";
          case m:
            return G(e, e.render, "ForwardRef");
          case b:
            var x = e.displayName || null;
            return x !== null ? x : z(e.type) || "Memo";
          case P: {
            var N = e, V = N._payload, A = N._init;
            try {
              return z(A(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, ue = 0, re, le, ve, me, o, p, R;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function T() {
      {
        if (ue === 0) {
          re = console.log, le = console.info, ve = console.warn, me = console.error, o = console.group, p = console.groupCollapsed, R = console.groupEnd;
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
              value: re
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
    var C = B.ReactCurrentDispatcher, E;
    function j(e, a, f) {
      {
        if (E === void 0)
          try {
            throw Error();
          } catch (N) {
            var x = N.stack.trim().match(/\n( *(at )?)/);
            E = x && x[1] || "";
          }
        return `
` + E + e;
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
      var N = Error.prepareStackTrace;
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
                    var ae = `
` + k[K].replace(" at new ", " at ");
                    return e.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", e.displayName)), typeof e == "function" && O.set(e, ae), ae;
                  }
                while (K >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        I = !1, C.current = V, $(), Error.prepareStackTrace = N;
      }
      var be = e ? e.displayName || e.name : "", he = be ? j(be) : "";
      return typeof e == "function" && O.set(e, he), he;
    }
    function ne(e, a, f) {
      return u(e, !1);
    }
    function _e(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ye(e, a, f) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return u(e, _e(e));
      if (typeof e == "string")
        return j(e);
      switch (e) {
        case s:
          return j("Suspense");
        case _:
          return j("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return ne(e.render);
          case b:
            return ye(e.type, a, f);
          case P: {
            var x = e, N = x._payload, V = x._init;
            try {
              return ye(V(N), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, rr = {}, tr = B.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var a = e._owner, f = ye(e.type, e._source, a ? a.type : null);
        tr.setExtraStackFrame(f);
      } else
        tr.setExtraStackFrame(null);
    }
    function Wr(e, a, f, x, N) {
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
            k && !(k instanceof Error) && (Oe(N), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", f, A, typeof k), Oe(null)), k instanceof Error && !(k.message in rr) && (rr[k.message] = !0, Oe(N), Y("Failed %s type: %s", f, k.message), Oe(null));
          }
      }
    }
    var Fr = Array.isArray;
    function Ne(e) {
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
    var Te = B.ReactCurrentOwner, Vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, Le;
    Le = {};
    function Br(e) {
      if (xe.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Hr(e) {
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
    var Jr = function(e, a, f, x, N, V, A) {
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
        value: N
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Kr(e, a, f, x, N) {
      {
        var V, A = {}, k = null, Q = null;
        f !== void 0 && (ar(f), k = "" + f), Hr(a) && (ar(a.key), k = "" + a.key), Br(a) && (Q = a.ref, Gr(a, N));
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
        return Jr(e, k, Q, N, x, Te.current, A);
      }
    }
    var Me = B.ReactCurrentOwner, sr = B.ReactDebugCurrentFrame;
    function ge(e) {
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
        e && e._owner && e._owner !== Me.current && (x = " It was passed a child from " + z(e._owner.type) + "."), ge(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, x), ge(null);
      }
    }
    function fr(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Ne(e))
          for (var f = 0; f < e.length; f++) {
            var x = e[f];
            Fe(x) && ur(x, a);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var N = W(e);
          if (typeof N == "function" && N !== e.entries)
            for (var V = N.call(e), A; !(A = V.next()).done; )
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
          var N = z(a);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function et(e) {
      {
        for (var a = Object.keys(e.props), f = 0; f < a.length; f++) {
          var x = a[f];
          if (x !== "children" && x !== "key") {
            ge(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), ge(null);
            break;
          }
        }
        e.ref !== null && (ge(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var dr = {};
    function pr(e, a, f, x, N, V) {
      {
        var A = pe(e);
        if (!A) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Xr();
          Q ? k += Q : k += lr();
          var K;
          e === null ? K = "null" : Ne(e) ? K = "array" : e !== void 0 && e.$$typeof === r ? (K = "<" + (z(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : K = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, k);
        }
        var X = Kr(e, a, f, N, V);
        if (X == null)
          return X;
        if (A) {
          var ae = a.children;
          if (ae !== void 0)
            if (x)
              if (Ne(ae)) {
                for (var be = 0; be < ae.length; be++)
                  fr(ae[be], e);
                Object.freeze && Object.freeze(ae);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(ae, e);
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
    we.Fragment = c, we.jsx = nt, we.jsxs = at;
  }()), we;
}
process.env.NODE_ENV === "production" ? Ke.exports = It() : Ke.exports = Dt();
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
function Nt() {
  if (mr) return L;
  mr = 1;
  var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, i = t ? Symbol.for("react.portal") : 60106, c = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, v = t ? Symbol.for("react.profiler") : 60114, g = t ? Symbol.for("react.provider") : 60109, h = t ? Symbol.for("react.context") : 60110, m = t ? Symbol.for("react.async_mode") : 60111, s = t ? Symbol.for("react.concurrent_mode") : 60111, _ = t ? Symbol.for("react.forward_ref") : 60112, b = t ? Symbol.for("react.suspense") : 60113, P = t ? Symbol.for("react.suspense_list") : 60120, q = t ? Symbol.for("react.memo") : 60115, U = t ? Symbol.for("react.lazy") : 60116, F = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, B = t ? Symbol.for("react.responder") : 60118, Y = t ? Symbol.for("react.scope") : 60119;
  function D(d) {
    if (typeof d == "object" && d !== null) {
      var te = d.$$typeof;
      switch (te) {
        case r:
          switch (d = d.type, d) {
            case m:
            case s:
            case c:
            case v:
            case y:
            case b:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case h:
                case _:
                case U:
                case q:
                case g:
                  return d;
                default:
                  return te;
              }
          }
        case i:
          return te;
      }
    }
  }
  function H(d) {
    return D(d) === s;
  }
  return L.AsyncMode = m, L.ConcurrentMode = s, L.ContextConsumer = h, L.ContextProvider = g, L.Element = r, L.ForwardRef = _, L.Fragment = c, L.Lazy = U, L.Memo = q, L.Portal = i, L.Profiler = v, L.StrictMode = y, L.Suspense = b, L.isAsyncMode = function(d) {
    return H(d) || D(d) === m;
  }, L.isConcurrentMode = H, L.isContextConsumer = function(d) {
    return D(d) === h;
  }, L.isContextProvider = function(d) {
    return D(d) === g;
  }, L.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, L.isForwardRef = function(d) {
    return D(d) === _;
  }, L.isFragment = function(d) {
    return D(d) === c;
  }, L.isLazy = function(d) {
    return D(d) === U;
  }, L.isMemo = function(d) {
    return D(d) === q;
  }, L.isPortal = function(d) {
    return D(d) === i;
  }, L.isProfiler = function(d) {
    return D(d) === v;
  }, L.isStrictMode = function(d) {
    return D(d) === y;
  }, L.isSuspense = function(d) {
    return D(d) === b;
  }, L.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === c || d === s || d === v || d === y || d === b || d === P || typeof d == "object" && d !== null && (d.$$typeof === U || d.$$typeof === q || d.$$typeof === g || d.$$typeof === h || d.$$typeof === _ || d.$$typeof === W || d.$$typeof === B || d.$$typeof === Y || d.$$typeof === F);
  }, L.typeOf = D, L;
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
var _r;
function Lt() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, i = t ? Symbol.for("react.portal") : 60106, c = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, v = t ? Symbol.for("react.profiler") : 60114, g = t ? Symbol.for("react.provider") : 60109, h = t ? Symbol.for("react.context") : 60110, m = t ? Symbol.for("react.async_mode") : 60111, s = t ? Symbol.for("react.concurrent_mode") : 60111, _ = t ? Symbol.for("react.forward_ref") : 60112, b = t ? Symbol.for("react.suspense") : 60113, P = t ? Symbol.for("react.suspense_list") : 60120, q = t ? Symbol.for("react.memo") : 60115, U = t ? Symbol.for("react.lazy") : 60116, F = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, B = t ? Symbol.for("react.responder") : 60118, Y = t ? Symbol.for("react.scope") : 60119;
    function D(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === c || u === s || u === v || u === y || u === b || u === P || typeof u == "object" && u !== null && (u.$$typeof === U || u.$$typeof === q || u.$$typeof === g || u.$$typeof === h || u.$$typeof === _ || u.$$typeof === W || u.$$typeof === B || u.$$typeof === Y || u.$$typeof === F);
    }
    function H(u) {
      if (typeof u == "object" && u !== null) {
        var ne = u.$$typeof;
        switch (ne) {
          case r:
            var _e = u.type;
            switch (_e) {
              case m:
              case s:
              case c:
              case v:
              case y:
              case b:
                return _e;
              default:
                var ye = _e && _e.$$typeof;
                switch (ye) {
                  case h:
                  case _:
                  case U:
                  case q:
                  case g:
                    return ye;
                  default:
                    return ne;
                }
            }
          case i:
            return ne;
        }
      }
    }
    var d = m, te = s, ce = h, se = g, ie = r, pe = _, G = c, S = U, z = q, J = i, ue = v, re = y, le = b, ve = !1;
    function me(u) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(u) || H(u) === m;
    }
    function o(u) {
      return H(u) === s;
    }
    function p(u) {
      return H(u) === h;
    }
    function R(u) {
      return H(u) === g;
    }
    function w(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function T(u) {
      return H(u) === _;
    }
    function $(u) {
      return H(u) === c;
    }
    function C(u) {
      return H(u) === U;
    }
    function E(u) {
      return H(u) === q;
    }
    function j(u) {
      return H(u) === i;
    }
    function I(u) {
      return H(u) === v;
    }
    function O(u) {
      return H(u) === y;
    }
    function Z(u) {
      return H(u) === b;
    }
    M.AsyncMode = d, M.ConcurrentMode = te, M.ContextConsumer = ce, M.ContextProvider = se, M.Element = ie, M.ForwardRef = pe, M.Fragment = G, M.Lazy = S, M.Memo = z, M.Portal = J, M.Profiler = ue, M.StrictMode = re, M.Suspense = le, M.isAsyncMode = me, M.isConcurrentMode = o, M.isContextConsumer = p, M.isContextProvider = R, M.isElement = w, M.isForwardRef = T, M.isFragment = $, M.isLazy = C, M.isMemo = E, M.isPortal = j, M.isProfiler = I, M.isStrictMode = O, M.isSuspense = Z, M.isValidElementType = D, M.typeOf = H;
  }()), M;
}
var gr;
function Nr() {
  return gr || (gr = 1, process.env.NODE_ENV === "production" ? ke.exports = Nt() : ke.exports = Lt()), ke.exports;
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
      for (var g = {}, h = 0; h < 10; h++)
        g["_" + String.fromCharCode(h)] = h;
      var m = Object.getOwnPropertyNames(g).map(function(_) {
        return g[_];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var s = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        s[_] = _;
      }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = y() ? Object.assign : function(v, g) {
    for (var h, m = c(v), s, _ = 1; _ < arguments.length; _++) {
      h = Object(arguments[_]);
      for (var b in h)
        r.call(h, b) && (m[b] = h[b]);
      if (t) {
        s = t(h);
        for (var P = 0; P < s.length; P++)
          i.call(h, s[P]) && (m[s[P]] = h[s[P]]);
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
var Be, Tr;
function Lr() {
  return Tr || (Tr = 1, Be = Function.call.bind(Object.prototype.hasOwnProperty)), Be;
}
var He, Cr;
function Wt() {
  if (Cr) return He;
  Cr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Qe(), i = {}, c = Lr();
    t = function(v) {
      var g = "Warning: " + v;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function y(v, g, h, m, s) {
    if (process.env.NODE_ENV !== "production") {
      for (var _ in v)
        if (c(v, _)) {
          var b;
          try {
            if (typeof v[_] != "function") {
              var P = Error(
                (m || "React class") + ": " + h + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            b = v[_](g, _, m, h, null, r);
          } catch (U) {
            b = U;
          }
          if (b && !(b instanceof Error) && t(
            (m || "React class") + ": type specification of " + h + " `" + _ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), b instanceof Error && !(b.message in i)) {
            i[b.message] = !0;
            var q = s ? s() : "";
            t(
              "Failed " + h + " type: " + b.message + (q ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, He = y, He;
}
var Ge, Er;
function Ft() {
  if (Er) return Ge;
  Er = 1;
  var t = Nr(), r = Mt(), i = Qe(), c = Lr(), y = Wt(), v = function() {
  };
  process.env.NODE_ENV !== "production" && (v = function(h) {
    var m = "Warning: " + h;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function g() {
    return null;
  }
  return Ge = function(h, m) {
    var s = typeof Symbol == "function" && Symbol.iterator, _ = "@@iterator";
    function b(o) {
      var p = o && (s && o[s] || o[_]);
      if (typeof p == "function")
        return p;
    }
    var P = "<<anonymous>>", q = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: Y(),
      arrayOf: D,
      element: H(),
      elementType: d(),
      instanceOf: te,
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
      function w($, C, E, j, I, O, Z) {
        if (j = j || P, O = O || E, Z !== i) {
          if (m) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = j + ":" + E;
            !p[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (v(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[ne] = !0, R++);
          }
        }
        return C[E] == null ? $ ? C[E] === null ? new F("The " + I + " `" + O + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new F("The " + I + " `" + O + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : o(C, E, j, I, O);
      }
      var T = w.bind(null, !1);
      return T.isRequired = w.bind(null, !0), T;
    }
    function B(o) {
      function p(R, w, T, $, C, E) {
        var j = R[w], I = re(j);
        if (I !== o) {
          var O = le(j);
          return new F(
            "Invalid " + $ + " `" + C + "` of type " + ("`" + O + "` supplied to `" + T + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return W(p);
    }
    function Y() {
      return W(g);
    }
    function D(o) {
      function p(R, w, T, $, C) {
        if (typeof o != "function")
          return new F("Property `" + C + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var E = R[w];
        if (!Array.isArray(E)) {
          var j = re(E);
          return new F("Invalid " + $ + " `" + C + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an array."));
        }
        for (var I = 0; I < E.length; I++) {
          var O = o(E, I, T, $, C + "[" + I + "]", i);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return W(p);
    }
    function H() {
      function o(p, R, w, T, $) {
        var C = p[R];
        if (!h(C)) {
          var E = re(C);
          return new F("Invalid " + T + " `" + $ + "` of type " + ("`" + E + "` supplied to `" + w + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(o);
    }
    function d() {
      function o(p, R, w, T, $) {
        var C = p[R];
        if (!t.isValidElementType(C)) {
          var E = re(C);
          return new F("Invalid " + T + " `" + $ + "` of type " + ("`" + E + "` supplied to `" + w + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(o);
    }
    function te(o) {
      function p(R, w, T, $, C) {
        if (!(R[w] instanceof o)) {
          var E = o.name || P, j = me(R[w]);
          return new F("Invalid " + $ + " `" + C + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected ") + ("instance of `" + E + "`."));
        }
        return null;
      }
      return W(p);
    }
    function ce(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? v(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : v("Invalid argument supplied to oneOf, expected an array.")), g;
      function p(R, w, T, $, C) {
        for (var E = R[w], j = 0; j < o.length; j++)
          if (U(E, o[j]))
            return null;
        var I = JSON.stringify(o, function(Z, u) {
          var ne = le(u);
          return ne === "symbol" ? String(u) : u;
        });
        return new F("Invalid " + $ + " `" + C + "` of value `" + String(E) + "` " + ("supplied to `" + T + "`, expected one of " + I + "."));
      }
      return W(p);
    }
    function se(o) {
      function p(R, w, T, $, C) {
        if (typeof o != "function")
          return new F("Property `" + C + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var E = R[w], j = re(E);
        if (j !== "object")
          return new F("Invalid " + $ + " `" + C + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an object."));
        for (var I in E)
          if (c(E, I)) {
            var O = o(E, I, T, $, C + "." + I, i);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return W(p);
    }
    function ie(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && v("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var p = 0; p < o.length; p++) {
        var R = o[p];
        if (typeof R != "function")
          return v(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(R) + " at index " + p + "."
          ), g;
      }
      function w(T, $, C, E, j) {
        for (var I = [], O = 0; O < o.length; O++) {
          var Z = o[O], u = Z(T, $, C, E, j, i);
          if (u == null)
            return null;
          u.data && c(u.data, "expectedType") && I.push(u.data.expectedType);
        }
        var ne = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new F("Invalid " + E + " `" + j + "` supplied to " + ("`" + C + "`" + ne + "."));
      }
      return W(w);
    }
    function pe() {
      function o(p, R, w, T, $) {
        return J(p[R]) ? null : new F("Invalid " + T + " `" + $ + "` supplied to " + ("`" + w + "`, expected a ReactNode."));
      }
      return W(o);
    }
    function G(o, p, R, w, T) {
      return new F(
        (o || "React class") + ": " + p + " type `" + R + "." + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function S(o) {
      function p(R, w, T, $, C) {
        var E = R[w], j = re(E);
        if (j !== "object")
          return new F("Invalid " + $ + " `" + C + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var I in o) {
          var O = o[I];
          if (typeof O != "function")
            return G(T, $, C, I, le(O));
          var Z = O(E, I, T, $, C + "." + I, i);
          if (Z)
            return Z;
        }
        return null;
      }
      return W(p);
    }
    function z(o) {
      function p(R, w, T, $, C) {
        var E = R[w], j = re(E);
        if (j !== "object")
          return new F("Invalid " + $ + " `" + C + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        var I = r({}, R[w], o);
        for (var O in I) {
          var Z = o[O];
          if (c(o, O) && typeof Z != "function")
            return G(T, $, C, O, le(Z));
          if (!Z)
            return new F(
              "Invalid " + $ + " `" + C + "` key `" + O + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(R[w], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var u = Z(E, O, T, $, C + "." + O, i);
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
            var R = p.call(o), w;
            if (p !== o.entries) {
              for (; !(w = R.next()).done; )
                if (!J(w.value))
                  return !1;
            } else
              for (; !(w = R.next()).done; ) {
                var T = w.value;
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
    function re(o) {
      var p = typeof o;
      return Array.isArray(o) ? "array" : o instanceof RegExp ? "object" : ue(p, o) ? "symbol" : p;
    }
    function le(o) {
      if (typeof o > "u" || o === null)
        return "" + o;
      var p = re(o);
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
var Ue, wr;
function qt() {
  if (wr) return Ue;
  wr = 1;
  var t = Qe();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, Ue = function() {
    function c(g, h, m, s, _, b) {
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
  var Yt = Nr(), Vt = !0;
  Xe.exports = Ft()(Yt.isElement, Vt);
} else
  Xe.exports = qt()();
var Bt = Xe.exports;
const l = /* @__PURE__ */ At(Bt), Ht = "_iconButton_1963e_1", Gt = {
  iconButton: Ht
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
  iconName: l.oneOf([
    "trash",
    "filter",
    "info",
    "fill",
    "ellipsis",
    "chevronLeft",
    "chevronRight"
  ]),
  onClick: l.func.isRequired
};
const zt = "_layerButtonReel_1o59k_1", Jt = {
  layerButtonReel: zt
}, Kt = ({ buttons: t }) => /* @__PURE__ */ n.jsx("div", { className: Jt.layerButtonReel, children: t && Object.keys(t).map((r) => /* @__PURE__ */ n.jsx(er, { iconName: r, onClick: t[r] })) });
Kt.propTypes = {
  buttons: l.objectOf(l.func)
};
const Xt = "_indicator_g9vaa_19", Rr = {
  switch: "_switch_g9vaa_7",
  indicator: Xt
}, Mr = ({ layerName: t, isActive: r = !1, onChange: i, ...c }) => /* @__PURE__ */ n.jsx(mt, { ...c, className: Rr.switch, isSelected: r, onChange: i, "aria-label": t, value: t, children: /* @__PURE__ */ n.jsx("div", { className: Rr.indicator }) });
Mr.propTypes = {
  layerName: l.string,
  isActive: l.bool,
  onChange: l.func.isRequired,
  disabled: l.bool
};
const Zt = "_layerCard_mw8v9_1", Qt = "_layerCardAttributionWrapper_mw8v9_11", en = "_layerCardAttribution_mw8v9_11", rn = "_layerCardHeader_mw8v9_25", tn = "_layerCardTextWrapper_mw8v9_34", nn = "_layerCardTitle_mw8v9_42", an = "_layerCardDescription_mw8v9_50", on = "_layerCardControls_mw8v9_59", sn = "_layerCardToggle_mw8v9_64", ln = "_layerCardContent_mw8v9_69", cn = "_layerCardInfoIcon_mw8v9_85", fe = {
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
}, un = ({ layerName: t, isActive: r, onChange: i, attribution: c, description: y, children: v }) => {
  const [g, h] = de(!1), m = c && !!c.text && (r || g);
  return /* @__PURE__ */ n.jsxs("div", { className: fe.layerCard, children: [
    /* @__PURE__ */ n.jsxs("div", { className: fe.layerCardHeader, children: [
      /* @__PURE__ */ n.jsx("div", { className: fe.layerCardTextWrapper, children: /* @__PURE__ */ n.jsx("span", { className: fe.layerCardTitle, children: t }) }),
      /* @__PURE__ */ n.jsxs(_t, { delay: 300, children: [
        /* @__PURE__ */ n.jsx(gt, { children: "Toggle layer description" }),
        /* @__PURE__ */ n.jsx(De, { className: fe.layerCardInfoIcon, onClick: () => h(!g), children: /* @__PURE__ */ n.jsx(je, { size: "xs", fontWeight: "bold", icon: kr }) })
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
    /* @__PURE__ */ n.jsxs("div", { className: fe.layerCardContent, children: [
      y && g && /* @__PURE__ */ n.jsx("span", { className: fe.layerCardDescription, children: y }),
      m && /* @__PURE__ */ n.jsx("div", { className: fe.layerCardAttributionWrapper, children: /* @__PURE__ */ n.jsxs("span", { className: fe.layerCardAttribution, children: [
        "Source: ",
        /* @__PURE__ */ n.jsx("a", { href: c.url, children: c.text })
      ] }) }),
      v && v
    ] })
  ] });
};
un.propTypes = {
  layerName: l.string.isRequired,
  isActive: l.bool,
  onChange: l.func.isRequired,
  description: l.string,
  attribution: l.objectOf({
    url: l.string,
    text: l.string
  }),
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node
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
}, _n = ({ swatches: t }) => /* @__PURE__ */ n.jsx("div", { className: mn.swatchLegend, children: t && t.map((r) => {
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
_n.propTypes = {
  swatches: l.arrayOf(l.objectOf(l.string)).isRequired
};
const gn = "_slider_1bnet_1", bn = "_sliderLabel_1bnet_16", xn = "_sliderThumb_1bnet_20", Tn = "_sliderTrack_1bnet_41", Cn = "_comparisonControl_1bnet_66", Re = {
  slider: gn,
  sliderLabel: bn,
  sliderThumb: xn,
  sliderTrack: Tn,
  comparisonControl: Cn
}, Ea = ({
  label: t,
  showLabel: r = !0,
  onChange: i,
  value: c = 50,
  ...y
}) => /* @__PURE__ */ n.jsx("div", { className: Re.comparisonControl, children: /* @__PURE__ */ n.jsxs(Ar, { maxValue: 94, minValue: 6, step: 0.1, className: Re.slider, "aria-label": !r && typeof t == "string" ? t : void 0, onChange: i, value: c, ...y, children: [
  r && /* @__PURE__ */ n.jsx(Ze, { className: Re.sliderLabel, children: t }),
  /* @__PURE__ */ n.jsx(Ir, { className: Re.sliderTrack, children: /* @__PURE__ */ n.jsx(Dr, { className: Re.sliderThumb, children: /* @__PURE__ */ n.jsx(je, { color: "white", icon: vt }) }) })
] }) }), En = "_datePicker_ywin1_1 react-aria-DatePicker", wn = "_dateInput_ywin1_12 react-aria-DateInput", Rn = "_hoverDatepicker_ywin1_17", ze = {
  datePicker: En,
  dateInput: wn,
  hoverDatepicker: Rn
}, Je = (t) => new $t(t.getFullYear(), t.getMonth() + 1, t.getDate()), wa = ({
  label: t,
  helperText: r,
  errorMessage: i,
  value: c,
  onChange: y,
  "aria-label": v,
  "aria-labelledby": g,
  className: h,
  maxValue: m,
  minValue: s,
  ..._
}) => {
  const [b, P] = de(!1), { hoverProps: q, isHovered: U } = kt({}), F = c ? Je(c) : null, W = m ? Je(m) : null, B = s ? Je(s) : null, Y = (D) => {
    if (D) {
      const H = new Date(D.toString());
      y(H);
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
      "aria-labelledby": g,
      maxValue: W,
      minValue: B,
      ..._,
      children: [
        t && /* @__PURE__ */ n.jsx(Ze, { children: t }),
        /* @__PURE__ */ n.jsxs(xt, { children: [
          /* @__PURE__ */ n.jsx(
            Tt,
            {
              className: `${U || b ? ze.hoverDatepicker : ""} ${ze.dateInput}`.trim(),
              ...q,
              children: (D) => /* @__PURE__ */ n.jsx(Ct, { segment: D })
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              "aria-label": "Open calendar",
              onHoverChange: (D) => P(D),
              children: /* @__PURE__ */ n.jsx(je, { icon: yt })
            }
          )
        ] }),
        r && /* @__PURE__ */ n.jsx(Et, { slot: "description", children: r }),
        i ? /* @__PURE__ */ n.jsx(vr, { children: i }) : /* @__PURE__ */ n.jsx(vr, {}),
        /* @__PURE__ */ n.jsx(wt, { children: /* @__PURE__ */ n.jsx(Rt, { children: /* @__PURE__ */ n.jsxs(St, { children: [
          /* @__PURE__ */ n.jsxs("header", { children: [
            /* @__PURE__ */ n.jsx(De, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ n.jsx(jt, {}),
            /* @__PURE__ */ n.jsx(De, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ n.jsx(Ot, { children: (D) => /* @__PURE__ */ n.jsx(Pt, { date: D }) })
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
  bins: g = 0,
  precision: h = 2,
  units: m
}) => {
  const s = g > 0 ? Array(g - 1).fill(0).map((_, b) => {
    const P = (c + (y - c) / g * (b + 1)).toPrecision(h);
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
        s,
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
  title: l.string,
  startColor: l.string,
  endColor: l.string,
  startNo: l.number,
  endNo: l.number,
  titleBelow: l.bool,
  bins: l.number,
  precision: l.number,
  units: l.string
};
const kn = "_slider_108mp_1", $n = "_sliderLabel_108mp_16", An = "_sliderThumb_108mp_20", In = "_sliderTrack_108mp_41", Ie = {
  slider: kn,
  sliderLabel: $n,
  sliderThumb: An,
  sliderTrack: In
}, Dn = ({
  className: t,
  label: r = "",
  onChange: i,
  minValue: c,
  maxValue: y,
  step: v,
  value: g = 0,
  showLabel: h,
  ...m
}) => /* @__PURE__ */ n.jsxs(Ar, { maxValue: y, minValue: c, step: v, className: `${Ie.slider} ${t || ""}`.trim(), "aria-label": !h && typeof r == "string" ? r : void 0, onChange: i, value: g, ...m, children: [
  h && /* @__PURE__ */ n.jsx(Ze, { className: Ie.sliderLabel, children: r }),
  /* @__PURE__ */ n.jsx(Ir, { className: Ie.sliderTrack, children: /* @__PURE__ */ n.jsx(Dr, { className: Ie.sliderThumb }) })
] }), Nn = "_layerGroupWrapper_1p831_1", Ln = "_layerGroupButton_1p831_5", Mn = "_layerGroupChevron_1p831_17", Wn = "_layerGroupName_1p831_30", Fn = "_layerGroupChildren_1p831_42", Se = {
  layerGroupWrapper: Nn,
  layerGroupButton: Ln,
  layerGroupChevron: Mn,
  layerGroupName: Wn,
  layerGroupChildren: Fn
}, qn = ({ groupName: t, children: r }) => {
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
qn.propTypes = {
  groupName: l.string,
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node
  ]).isRequired
};
const Yn = "_rangeSlider_1yjos_1", Vn = "_rangeSliderLabel_1yjos_14", Bn = "_rangeSliderValues_1yjos_19", Hn = "_rangeSliderMin_1yjos_28", Gn = "_rangeSliderMax_1yjos_32", Un = "_rangeSliderContainer_1yjos_36", zn = "_rangeSliderTrack_1yjos_46", Jn = "_rangeSliderHandleBar_1yjos_55", Kn = "_rangeSliderHandleLeft_1yjos_65", Xn = "_rangeSliderHandleRight_1yjos_66", Zn = "_rangeSliderValue_1yjos_19", oe = {
  rangeSlider: Yn,
  rangeSliderLabel: Vn,
  rangeSliderValues: Bn,
  rangeSliderMin: Hn,
  rangeSliderMax: Gn,
  rangeSliderContainer: Un,
  rangeSliderTrack: zn,
  rangeSliderHandleBar: Jn,
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
const ea = ({ label: t, bounds: r, step: i = 0, valuesChanging: c, valuesChanged: y, currentValues: v = {}, showValues: g }) => {
  const h = Math.max(isNaN(v.lower) ? -1 / 0 : v.lower, r.min), m = Math.min(isNaN(v.upper) ? 1 / 0 : v.upper, r.max), [s, _] = st(Qn, { lower: h, upper: m }), b = lt(null), [P, q] = de(0), [U, F] = de(0), [W, B] = de("none"), [Y, D] = de(0), H = Ce((G) => {
    const S = (G - r.min) / (r.max - r.min);
    return b.current.clientWidth * S;
  }, [r]), d = Ce((G) => {
    const S = G / b.current.clientWidth;
    return r.min + (r.max - r.min) * S;
  }, [r]), te = Ce((G) => {
    const S = G / b.current.clientWidth;
    return (r.max - r.min) * S;
  }, [r]);
  Pe(() => {
    q(H(s.lower)), F(H(s.upper));
  }, [H, s]), Pe(() => {
    c && c(s);
  }, [s, c]), Pe(() => {
    _({
      type: "ChangeStep",
      callback: y,
      step: i,
      bounds: r
    });
  }, [i, y, r]);
  const ce = (G) => {
    G.preventDefault(), B(G.target.getAttribute("data-handle-id")), D(0);
  }, se = Ce((G) => {
    G.preventDefault(), B("none"), y && y(s);
  }, [s, y]), ie = Ce(
    (G) => {
      if (W === "none" || G.buttons === 0)
        return;
      G.preventDefault();
      let S = te(G.movementX);
      if (i !== 0) {
        let J = Y + S;
        if (D(J), Math.abs(J) < Math.abs(i))
          return;
        J > 0 ? (J -= Math.abs(i), S = Math.abs(i)) : (J += Math.abs(i), S = -Math.abs(i)), D(J);
      }
      let z = [s.lower, s.upper];
      if (W === "left")
        s.lower + S < r.min && (S = r.min - s.lower), s.lower + S > s.upper ? (B("right"), z = [s.lower, s.lower + S]) : z = [s.lower + S, s.upper];
      else if (W === "right")
        s.upper + S > r.max && (S = r.max - s.upper), s.upper + S < s.lower ? (B("left"), z = [s.upper + S, s.upper]) : z = [s.lower, s.upper + S];
      else if (W === "bar")
        s.lower + S < r.min ? S = r.min - s.lower : s.upper + S > r.max && (S = r.max - s.upper), z = [s.lower + S, s.upper + S];
      else
        throw Error(`Unknown handle: ${W}`);
      _({ type: "ChangeValues", values: z, bounds: r, step: i });
    },
    [
      W,
      r,
      te,
      s,
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
    S < s.lower ? _({ type: "ChangeValues", values: [S, s.upper], bounds: r, step: i, callback: y }) : S > s.upper && _({ type: "ChangeValues", values: [s.lower, S], bounds: r, step: i, callback: y });
  };
  return /* @__PURE__ */ n.jsxs("div", { className: oe.rangeSlider, children: [
    /* @__PURE__ */ n.jsx("div", { className: oe.rangeSliderLabel, children: t }),
    /* @__PURE__ */ n.jsxs("div", { className: oe.rangeSliderContainer, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: oe.rangeSliderTrack,
          ref: b,
          role: "none",
          tabIndex: "-1",
          onClick: pe
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: oe.rangeSliderHandleBar,
          role: "slider",
          tabIndex: "0",
          "aria-label": t,
          "aria-valuenow": (s.lower + s.upper) / 2,
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
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: oe.rangeSliderHandleLeft,
          role: "button",
          tabIndex: "0",
          "aria-label": `${t} lower handle`,
          "data-handle-id": "left",
          onMouseDown: ce,
          style: { left: `${P}px` },
          children: g && /* @__PURE__ */ n.jsx("span", { className: oe.rangeSliderValue, children: Math.round(s.lower) })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: oe.rangeSliderHandleRight,
          role: "button",
          tabIndex: "0",
          "aria-label": `${t} upper handle`,
          "data-handle-id": "right",
          onMouseDown: ce,
          style: { left: `${U}px` },
          children: g && /* @__PURE__ */ n.jsx("span", { className: oe.rangeSliderValue, children: Math.round(s.upper) })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: oe.rangeSliderValues, children: [
      /* @__PURE__ */ n.jsx("span", { className: oe.rangeSliderMin, children: r.min }),
      /* @__PURE__ */ n.jsx("span", { className: oe.rangeSliderMax, children: r.max })
    ] })
  ] });
};
ea.propTypes = {
  label: l.string.isRequired,
  bounds: l.shape({
    min: l.number.isRequired,
    max: l.number.isRequired
  }),
  step: l.number,
  valuesChanging: l.func,
  valuesChanged: l.func,
  currentValues: l.shape({
    lower: l.number,
    upper: l.number
  }),
  showValues: l.bool
};
const ra = "_mapWrapper_1gyf5_1", ta = "_mapContainer_1gyf5_10", Sr = {
  mapWrapper: ra,
  mapContainer: ta
}, na = ({ mapContainer: t, id: r, children: i }) => /* @__PURE__ */ n.jsxs("div", { className: Sr.mapWrapper, children: [
  /* @__PURE__ */ n.jsx("div", { className: Sr.mapContainer, id: r, ref: t }),
  i
] });
na.propTypes = {
  mapContainer: l.oneOfType([
    l.func,
    l.shape({ current: l.instanceOf(Element) })
  ]),
  children: l.node,
  id: l.string
};
const aa = ({ children: t }) => /* @__PURE__ */ n.jsx("div", { className: "nav-container", children: t });
aa.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node
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
}, Ra = ({ children: t, position: r = "centerRight" }) => /* @__PURE__ */ n.jsx("aside", { className: `${jr.infoPanelContainer} ${jr[r]}`, children: t }), da = ({ showToggle: t, children: r }) => {
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
  showToggle: l.bool,
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node
  ]).isRequired
};
const pa = ({ children: t }) => /* @__PURE__ */ n.jsx("div", { className: "layout-stacked", children: t });
pa.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node
  ]).isRequired
};
const va = ({ align: t = "left", children: r }) => /* @__PURE__ */ n.jsx("div", { className: `layout-standard ${t}`, children: r });
va.propTypes = {
  align: l.oneOf(["left", "right"]),
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node
  ]).isRequired
};
const ya = "_sliderControlWrapper_2tznx_1", ha = "_sliderLabel_2tznx_9", Or = {
  sliderControlWrapper: ya,
  sliderLabel: ha
}, ma = ({ title: t, units: r, sliderConfig: i }) => /* @__PURE__ */ n.jsxs("div", { className: Or.sliderControlWrapper, children: [
  /* @__PURE__ */ n.jsx("div", { className: "ui-label", children: t }),
  /* @__PURE__ */ n.jsx("div", {}),
  i && i.map((c) => {
    const { label: y } = c;
    return /* @__PURE__ */ n.jsx("div", { className: Or.sliderLabel, children: y });
  }),
  i && i.map((c) => {
    const { onChange: y, min: v, max: g, step: h, value: m } = c;
    return /* @__PURE__ */ n.jsx(
      Dn,
      {
        onChange: y,
        units: r,
        min: v,
        max: g,
        step: h,
        value: m
      }
    );
  })
] });
ma.propTypes = {
  title: l.string.isRequired,
  units: l.string.isRequired,
  sliderConfig: l.arrayOf(l.objectOf(l.string)).isRequired
};
export {
  Ea as ComparisonControl,
  wa as DatePicker,
  Pn as GradientLegend,
  er as IconButton,
  Ra as InfoPanelContainer,
  Kt as LayerButtonReel,
  un as LayerCard,
  qn as LayerGroup,
  Mr as LayerToggle,
  na as MapContainer,
  aa as NavContainer,
  ea as RangeSlider,
  da as SidebarContainer,
  Dn as SimpleSlider,
  ma as SliderControl,
  pa as Stacked,
  va as Standard,
  yn as Swatch,
  _n as SwatchLegend
};
