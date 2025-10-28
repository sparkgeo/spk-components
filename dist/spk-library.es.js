import Pr, { useState as fe, useReducer as st, useRef as lt, useCallback as Ce, useEffect as Pe } from "react";
import { FontAwesomeIcon as je } from "@fortawesome/react-fontawesome";
import { faTrash as ct, faFilter as ut, faInfo as kr, faFillDrip as ft, faEllipsisVertical as dt, faChevronRight as $r, faChevronLeft as pt, faArrowsLeftRight as vt, faCalendar as yt, faChevronDown as ht } from "@fortawesome/free-solid-svg-icons";
import { Switch as mt, TooltipTrigger as _t, Tooltip as gt, Button as De, Slider as Ar, Label as Ze, SliderTrack as Ir, SliderThumb as Dr, DatePicker as bt, Group as xt, DateInput as Tt, DateSegment as Ct, Text as Et, FieldError as vr, Popover as Rt, Dialog as wt, Calendar as St, Heading as jt, CalendarGrid as Ot, CalendarCell as Pt } from "react-aria-components";
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
  var t = Pr, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(y, h, E) {
    var _, b = {}, T = null, L = null;
    E !== void 0 && (T = "" + E), h.key !== void 0 && (T = "" + h.key), h.ref !== void 0 && (L = h.ref);
    for (_ in h) l.call(h, _) && !n.hasOwnProperty(_) && (b[_] = h[_]);
    if (y && y.defaultProps) for (_ in h = y.defaultProps, h) b[_] === void 0 && (b[_] = h[_]);
    return { $$typeof: r, type: y, key: T, ref: L, props: b, _owner: v.current };
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
var hr;
function Dt() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Pr, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), G = Symbol.iterator, M = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = G && e[G] || e[M];
      return typeof a == "function" ? a : null;
    }
    var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var a = arguments.length, d = new Array(a > 1 ? a - 1 : 0), g = 1; g < a; g++)
          d[g - 1] = arguments[g];
        D("error", e, d);
      }
    }
    function D(e, a, d) {
      {
        var g = B.ReactDebugCurrentFrame, N = g.getStackAddendum();
        N !== "" && (a += "%s", d = d.concat([N]));
        var V = d.map(function(A) {
          return String(A);
        });
        V.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, V);
      }
    }
    var Y = !1, c = !1, ie = !1, H = !1, P = !1, re;
    re = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === n || P || e === v || e === E || e === _ || H || e === L || Y || c || ie || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === b || e.$$typeof === m || e.$$typeof === y || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function ye(e, a, d) {
      var g = e.displayName;
      if (g)
        return g;
      var N = a.displayName || a.name || "";
      return N !== "" ? d + "(" + N + ")" : d;
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
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var a = e;
            return he(a) + ".Consumer";
          case m:
            var d = e;
            return he(d._context) + ".Provider";
          case h:
            return ye(e, e.render, "ForwardRef");
          case b:
            var g = e.displayName || null;
            return g !== null ? g : Z(e.type) || "Memo";
          case T: {
            var N = e, V = N._payload, A = N._init;
            try {
              return Z(A(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ce = 0, te, se, de, me, i, p, S;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function x() {
      {
        if (ce === 0) {
          te = console.log, se = console.info, de = console.warn, me = console.error, i = console.group, p = console.groupCollapsed, S = console.groupEnd;
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
        ce++;
      }
    }
    function $() {
      {
        if (ce--, ce === 0) {
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
              value: de
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
              value: S
            })
          });
        }
        ce < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = B.ReactCurrentDispatcher, R;
    function j(e, a, d) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (N) {
            var g = N.stack.trim().match(/\n( *(at )?)/);
            R = g && g[1] || "";
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
    function f(e, a) {
      if (!e || I)
        return "";
      {
        var d = O.get(e);
        if (d !== void 0)
          return d;
      }
      var g;
      I = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = C.current, C.current = null, x();
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
              g = ee;
            }
            Reflect.construct(e, [], A);
          } else {
            try {
              A.call();
            } catch (ee) {
              g = ee;
            }
            e.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            g = ee;
          }
          e();
        }
      } catch (ee) {
        if (ee && g && typeof ee.stack == "string") {
          for (var k = ee.stack.split(`
`), X = g.stack.split(`
`), U = k.length - 1, J = X.length - 1; U >= 1 && J >= 0 && k[U] !== X[J]; )
            J--;
          for (; U >= 1 && J >= 0; U--, J--)
            if (k[U] !== X[J]) {
              if (U !== 1 || J !== 1)
                do
                  if (U--, J--, J < 0 || k[U] !== X[J]) {
                    var oe = `
` + k[U].replace(" at new ", " at ");
                    return e.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", e.displayName)), typeof e == "function" && O.set(e, oe), oe;
                  }
                while (U >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        I = !1, C.current = V, $(), Error.prepareStackTrace = N;
      }
      var be = e ? e.displayName || e.name : "", ve = be ? j(be) : "";
      return typeof e == "function" && O.set(e, ve), ve;
    }
    function ae(e, a, d) {
      return f(e, !1);
    }
    function _e(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function pe(e, a, d) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return f(e, _e(e));
      if (typeof e == "string")
        return j(e);
      switch (e) {
        case E:
          return j("Suspense");
        case _:
          return j("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ae(e.render);
          case b:
            return pe(e.type, a, d);
          case T: {
            var g = e, N = g._payload, V = g._init;
            try {
              return pe(V(N), a, d);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, rr = {}, tr = B.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var a = e._owner, d = pe(e.type, e._source, a ? a.type : null);
        tr.setExtraStackFrame(d);
      } else
        tr.setExtraStackFrame(null);
    }
    function Wr(e, a, d, g, N) {
      {
        var V = Function.call.bind(xe);
        for (var A in e)
          if (V(e, A)) {
            var k = void 0;
            try {
              if (typeof e[A] != "function") {
                var X = Error((g || "React class") + ": " + d + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              k = e[A](a, A, g, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (U) {
              k = U;
            }
            k && !(k instanceof Error) && (Oe(N), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", d, A, typeof k), Oe(null)), k instanceof Error && !(k.message in rr) && (rr[k.message] = !0, Oe(N), q("Failed %s type: %s", d, k.message), Oe(null));
          }
      }
    }
    var Fr = Array.isArray;
    function Le(e) {
      return Fr(e);
    }
    function qr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, d = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d;
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
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qr(e)), nr(e);
    }
    var Te = B.ReactCurrentOwner, Vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, Me;
    Me = {};
    function zr(e) {
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
    function Hr(e, a) {
      if (typeof e.ref == "string" && Te.current && a && Te.current.stateNode !== a) {
        var d = Z(Te.current.type);
        Me[d] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Te.current.type), e.ref), Me[d] = !0);
      }
    }
    function Gr(e, a) {
      {
        var d = function() {
          or || (or = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function Ur(e, a) {
      {
        var d = function() {
          ir || (ir = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Jr = function(e, a, d, g, N, V, A) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: d,
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
        value: g
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Kr(e, a, d, g, N) {
      {
        var V, A = {}, k = null, X = null;
        d !== void 0 && (ar(d), k = "" + d), Br(a) && (ar(a.key), k = "" + a.key), zr(a) && (X = a.ref, Hr(a, N));
        for (V in a)
          xe.call(a, V) && !Vr.hasOwnProperty(V) && (A[V] = a[V]);
        if (e && e.defaultProps) {
          var U = e.defaultProps;
          for (V in U)
            A[V] === void 0 && (A[V] = U[V]);
        }
        if (k || X) {
          var J = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && Gr(A, J), X && Ur(A, J);
        }
        return Jr(e, k, X, N, g, Te.current, A);
      }
    }
    var Ne = B.ReactCurrentOwner, sr = B.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var a = e._owner, d = pe(e.type, e._source, a ? a.type : null);
        sr.setExtraStackFrame(d);
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
        if (Ne.current) {
          var e = Z(Ne.current.type);
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
          var d = typeof e == "string" ? e : e.displayName || e.name;
          d && (a = `

Check the top-level render call using <` + d + ">.");
        }
        return a;
      }
    }
    function ur(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var d = Zr(a);
        if (cr[d])
          return;
        cr[d] = !0;
        var g = "";
        e && e._owner && e._owner !== Ne.current && (g = " It was passed a child from " + Z(e._owner.type) + "."), ge(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, g), ge(null);
      }
    }
    function fr(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Le(e))
          for (var d = 0; d < e.length; d++) {
            var g = e[d];
            Fe(g) && ur(g, a);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var N = z(e);
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
        var d;
        if (typeof a == "function")
          d = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === b))
          d = a.propTypes;
        else
          return;
        if (d) {
          var g = Z(a);
          Wr(d, e.props, "prop", g, e);
        } else if (a.PropTypes !== void 0 && !We) {
          We = !0;
          var N = Z(a);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function et(e) {
      {
        for (var a = Object.keys(e.props), d = 0; d < a.length; d++) {
          var g = a[d];
          if (g !== "children" && g !== "key") {
            ge(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), ge(null);
            break;
          }
        }
        e.ref !== null && (ge(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var dr = {};
    function pr(e, a, d, g, N, V) {
      {
        var A = ne(e);
        if (!A) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Xr();
          X ? k += X : k += lr();
          var U;
          e === null ? U = "null" : Le(e) ? U = "array" : e !== void 0 && e.$$typeof === r ? (U = "<" + (Z(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : U = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, k);
        }
        var J = Kr(e, a, d, N, V);
        if (J == null)
          return J;
        if (A) {
          var oe = a.children;
          if (oe !== void 0)
            if (g)
              if (Le(oe)) {
                for (var be = 0; be < oe.length; be++)
                  fr(oe[be], e);
                Object.freeze && Object.freeze(oe);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(oe, e);
        }
        if (xe.call(a, "key")) {
          var ve = Z(e), ee = Object.keys(a).filter(function(it) {
            return it !== "key";
          }), qe = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dr[ve + qe]) {
            var ot = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qe, ve, ot, ve), dr[ve + qe] = !0;
          }
        }
        return e === l ? et(J) : Qr(J), J;
      }
    }
    function rt(e, a, d) {
      return pr(e, a, d, !0);
    }
    function tt(e, a, d) {
      return pr(e, a, d, !1);
    }
    var nt = tt, at = rt;
    Re.Fragment = l, Re.jsx = nt, Re.jsxs = at;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Ke.exports = It() : Ke.exports = Dt();
var o = Ke.exports, Xe = { exports: {} }, ke = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Lt() {
  if (mr) return W;
  mr = 1;
  var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, s = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, n = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, y = t ? Symbol.for("react.context") : 60110, h = t ? Symbol.for("react.async_mode") : 60111, E = t ? Symbol.for("react.concurrent_mode") : 60111, _ = t ? Symbol.for("react.forward_ref") : 60112, b = t ? Symbol.for("react.suspense") : 60113, T = t ? Symbol.for("react.suspense_list") : 60120, L = t ? Symbol.for("react.memo") : 60115, G = t ? Symbol.for("react.lazy") : 60116, M = t ? Symbol.for("react.block") : 60121, z = t ? Symbol.for("react.fundamental") : 60117, B = t ? Symbol.for("react.responder") : 60118, q = t ? Symbol.for("react.scope") : 60119;
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
                case _:
                case G:
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
  return W.AsyncMode = h, W.ConcurrentMode = E, W.ContextConsumer = y, W.ContextProvider = m, W.Element = r, W.ForwardRef = _, W.Fragment = l, W.Lazy = G, W.Memo = L, W.Portal = s, W.Profiler = n, W.StrictMode = v, W.Suspense = b, W.isAsyncMode = function(c) {
    return Y(c) || D(c) === h;
  }, W.isConcurrentMode = Y, W.isContextConsumer = function(c) {
    return D(c) === y;
  }, W.isContextProvider = function(c) {
    return D(c) === m;
  }, W.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === r;
  }, W.isForwardRef = function(c) {
    return D(c) === _;
  }, W.isFragment = function(c) {
    return D(c) === l;
  }, W.isLazy = function(c) {
    return D(c) === G;
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
    return typeof c == "string" || typeof c == "function" || c === l || c === E || c === n || c === v || c === b || c === T || typeof c == "object" && c !== null && (c.$$typeof === G || c.$$typeof === L || c.$$typeof === m || c.$$typeof === y || c.$$typeof === _ || c.$$typeof === z || c.$$typeof === B || c.$$typeof === q || c.$$typeof === M);
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
function Mt() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, s = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, n = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, y = t ? Symbol.for("react.context") : 60110, h = t ? Symbol.for("react.async_mode") : 60111, E = t ? Symbol.for("react.concurrent_mode") : 60111, _ = t ? Symbol.for("react.forward_ref") : 60112, b = t ? Symbol.for("react.suspense") : 60113, T = t ? Symbol.for("react.suspense_list") : 60120, L = t ? Symbol.for("react.memo") : 60115, G = t ? Symbol.for("react.lazy") : 60116, M = t ? Symbol.for("react.block") : 60121, z = t ? Symbol.for("react.fundamental") : 60117, B = t ? Symbol.for("react.responder") : 60118, q = t ? Symbol.for("react.scope") : 60119;
    function D(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === l || f === E || f === n || f === v || f === b || f === T || typeof f == "object" && f !== null && (f.$$typeof === G || f.$$typeof === L || f.$$typeof === m || f.$$typeof === y || f.$$typeof === _ || f.$$typeof === z || f.$$typeof === B || f.$$typeof === q || f.$$typeof === M);
    }
    function Y(f) {
      if (typeof f == "object" && f !== null) {
        var ae = f.$$typeof;
        switch (ae) {
          case r:
            var _e = f.type;
            switch (_e) {
              case h:
              case E:
              case l:
              case n:
              case v:
              case b:
                return _e;
              default:
                var pe = _e && _e.$$typeof;
                switch (pe) {
                  case y:
                  case _:
                  case G:
                  case L:
                  case m:
                    return pe;
                  default:
                    return ae;
                }
            }
          case s:
            return ae;
        }
      }
    }
    var c = h, ie = E, H = y, P = m, re = r, ne = _, ye = l, he = G, Z = L, Q = s, ce = n, te = v, se = b, de = !1;
    function me(f) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(f) || Y(f) === h;
    }
    function i(f) {
      return Y(f) === E;
    }
    function p(f) {
      return Y(f) === y;
    }
    function S(f) {
      return Y(f) === m;
    }
    function w(f) {
      return typeof f == "object" && f !== null && f.$$typeof === r;
    }
    function x(f) {
      return Y(f) === _;
    }
    function $(f) {
      return Y(f) === l;
    }
    function C(f) {
      return Y(f) === G;
    }
    function R(f) {
      return Y(f) === L;
    }
    function j(f) {
      return Y(f) === s;
    }
    function I(f) {
      return Y(f) === n;
    }
    function O(f) {
      return Y(f) === v;
    }
    function K(f) {
      return Y(f) === b;
    }
    F.AsyncMode = c, F.ConcurrentMode = ie, F.ContextConsumer = H, F.ContextProvider = P, F.Element = re, F.ForwardRef = ne, F.Fragment = ye, F.Lazy = he, F.Memo = Z, F.Portal = Q, F.Profiler = ce, F.StrictMode = te, F.Suspense = se, F.isAsyncMode = me, F.isConcurrentMode = i, F.isContextConsumer = p, F.isContextProvider = S, F.isElement = w, F.isForwardRef = x, F.isFragment = $, F.isLazy = C, F.isMemo = R, F.isPortal = j, F.isProfiler = I, F.isStrictMode = O, F.isSuspense = K, F.isValidElementType = D, F.typeOf = Y;
  }()), F;
}
var gr;
function Lr() {
  return gr || (gr = 1, process.env.NODE_ENV === "production" ? ke.exports = Lt() : ke.exports = Mt()), ke.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ye, br;
function Nt() {
  if (br) return Ye;
  br = 1;
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
      var h = Object.getOwnPropertyNames(m).map(function(_) {
        return m[_];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var E = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        E[_] = _;
      }), Object.keys(Object.assign({}, E)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = v() ? Object.assign : function(n, m) {
    for (var y, h = l(n), E, _ = 1; _ < arguments.length; _++) {
      y = Object(arguments[_]);
      for (var b in y)
        r.call(y, b) && (h[b] = y[b]);
      if (t) {
        E = t(y);
        for (var T = 0; T < E.length; T++)
          s.call(y, E[T]) && (h[E[T]] = y[E[T]]);
      }
    }
    return h;
  }, Ye;
}
var Ve, xr;
function Qe() {
  if (xr) return Ve;
  xr = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ve = t, Ve;
}
var ze, Tr;
function Mr() {
  return Tr || (Tr = 1, ze = Function.call.bind(Object.prototype.hasOwnProperty)), ze;
}
var Be, Cr;
function Wt() {
  if (Cr) return Be;
  Cr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Qe(), s = {}, l = Mr();
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
      for (var _ in n)
        if (l(n, _)) {
          var b;
          try {
            if (typeof n[_] != "function") {
              var T = Error(
                (h || "React class") + ": " + y + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw T.name = "Invariant Violation", T;
            }
            b = n[_](m, _, h, y, null, r);
          } catch (G) {
            b = G;
          }
          if (b && !(b instanceof Error) && t(
            (h || "React class") + ": type specification of " + y + " `" + _ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, Be = v, Be;
}
var He, Er;
function Ft() {
  if (Er) return He;
  Er = 1;
  var t = Lr(), r = Nt(), s = Qe(), l = Mr(), v = Wt(), n = function() {
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
  return He = function(y, h) {
    var E = typeof Symbol == "function" && Symbol.iterator, _ = "@@iterator";
    function b(i) {
      var p = i && (E && i[E] || i[_]);
      if (typeof p == "function")
        return p;
    }
    var T = "<<anonymous>>", L = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: q(),
      arrayOf: D,
      element: Y(),
      elementType: c(),
      instanceOf: ie,
      node: ne(),
      objectOf: P,
      oneOf: H,
      oneOfType: re,
      shape: he,
      exact: Z
    };
    function G(i, p) {
      return i === p ? i !== 0 || 1 / i === 1 / p : i !== i && p !== p;
    }
    function M(i, p) {
      this.message = i, this.data = p && typeof p == "object" ? p : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function z(i) {
      if (process.env.NODE_ENV !== "production")
        var p = {}, S = 0;
      function w($, C, R, j, I, O, K) {
        if (j = j || T, O = O || R, K !== s) {
          if (h) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = j + ":" + R;
            !p[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (n(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[ae] = !0, S++);
          }
        }
        return C[R] == null ? $ ? C[R] === null ? new M("The " + I + " `" + O + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new M("The " + I + " `" + O + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : i(C, R, j, I, O);
      }
      var x = w.bind(null, !1);
      return x.isRequired = w.bind(null, !0), x;
    }
    function B(i) {
      function p(S, w, x, $, C, R) {
        var j = S[w], I = te(j);
        if (I !== i) {
          var O = se(j);
          return new M(
            "Invalid " + $ + " `" + C + "` of type " + ("`" + O + "` supplied to `" + x + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return z(p);
    }
    function q() {
      return z(m);
    }
    function D(i) {
      function p(S, w, x, $, C) {
        if (typeof i != "function")
          return new M("Property `" + C + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var R = S[w];
        if (!Array.isArray(R)) {
          var j = te(R);
          return new M("Invalid " + $ + " `" + C + "` of type " + ("`" + j + "` supplied to `" + x + "`, expected an array."));
        }
        for (var I = 0; I < R.length; I++) {
          var O = i(R, I, x, $, C + "[" + I + "]", s);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return z(p);
    }
    function Y() {
      function i(p, S, w, x, $) {
        var C = p[S];
        if (!y(C)) {
          var R = te(C);
          return new M("Invalid " + x + " `" + $ + "` of type " + ("`" + R + "` supplied to `" + w + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(i);
    }
    function c() {
      function i(p, S, w, x, $) {
        var C = p[S];
        if (!t.isValidElementType(C)) {
          var R = te(C);
          return new M("Invalid " + x + " `" + $ + "` of type " + ("`" + R + "` supplied to `" + w + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(i);
    }
    function ie(i) {
      function p(S, w, x, $, C) {
        if (!(S[w] instanceof i)) {
          var R = i.name || T, j = me(S[w]);
          return new M("Invalid " + $ + " `" + C + "` of type " + ("`" + j + "` supplied to `" + x + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return z(p);
    }
    function H(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? n(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : n("Invalid argument supplied to oneOf, expected an array.")), m;
      function p(S, w, x, $, C) {
        for (var R = S[w], j = 0; j < i.length; j++)
          if (G(R, i[j]))
            return null;
        var I = JSON.stringify(i, function(K, f) {
          var ae = se(f);
          return ae === "symbol" ? String(f) : f;
        });
        return new M("Invalid " + $ + " `" + C + "` of value `" + String(R) + "` " + ("supplied to `" + x + "`, expected one of " + I + "."));
      }
      return z(p);
    }
    function P(i) {
      function p(S, w, x, $, C) {
        if (typeof i != "function")
          return new M("Property `" + C + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var R = S[w], j = te(R);
        if (j !== "object")
          return new M("Invalid " + $ + " `" + C + "` of type " + ("`" + j + "` supplied to `" + x + "`, expected an object."));
        for (var I in R)
          if (l(R, I)) {
            var O = i(R, I, x, $, C + "." + I, s);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return z(p);
    }
    function re(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && n("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var p = 0; p < i.length; p++) {
        var S = i[p];
        if (typeof S != "function")
          return n(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(S) + " at index " + p + "."
          ), m;
      }
      function w(x, $, C, R, j) {
        for (var I = [], O = 0; O < i.length; O++) {
          var K = i[O], f = K(x, $, C, R, j, s);
          if (f == null)
            return null;
          f.data && l(f.data, "expectedType") && I.push(f.data.expectedType);
        }
        var ae = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new M("Invalid " + R + " `" + j + "` supplied to " + ("`" + C + "`" + ae + "."));
      }
      return z(w);
    }
    function ne() {
      function i(p, S, w, x, $) {
        return Q(p[S]) ? null : new M("Invalid " + x + " `" + $ + "` supplied to " + ("`" + w + "`, expected a ReactNode."));
      }
      return z(i);
    }
    function ye(i, p, S, w, x) {
      return new M(
        (i || "React class") + ": " + p + " type `" + S + "." + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function he(i) {
      function p(S, w, x, $, C) {
        var R = S[w], j = te(R);
        if (j !== "object")
          return new M("Invalid " + $ + " `" + C + "` of type `" + j + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var I in i) {
          var O = i[I];
          if (typeof O != "function")
            return ye(x, $, C, I, se(O));
          var K = O(R, I, x, $, C + "." + I, s);
          if (K)
            return K;
        }
        return null;
      }
      return z(p);
    }
    function Z(i) {
      function p(S, w, x, $, C) {
        var R = S[w], j = te(R);
        if (j !== "object")
          return new M("Invalid " + $ + " `" + C + "` of type `" + j + "` " + ("supplied to `" + x + "`, expected `object`."));
        var I = r({}, S[w], i);
        for (var O in I) {
          var K = i[O];
          if (l(i, O) && typeof K != "function")
            return ye(x, $, C, O, se(K));
          if (!K)
            return new M(
              "Invalid " + $ + " `" + C + "` key `" + O + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(S[w], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var f = K(R, O, x, $, C + "." + O, s);
          if (f)
            return f;
        }
        return null;
      }
      return z(p);
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
            var S = p.call(i), w;
            if (p !== i.entries) {
              for (; !(w = S.next()).done; )
                if (!Q(w.value))
                  return !1;
            } else
              for (; !(w = S.next()).done; ) {
                var x = w.value;
                if (x && !Q(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(i, p) {
      return i === "symbol" ? !0 : p ? p["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && p instanceof Symbol : !1;
    }
    function te(i) {
      var p = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : ce(p, i) ? "symbol" : p;
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
    function de(i) {
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
      return !i.constructor || !i.constructor.name ? T : i.constructor.name;
    }
    return L.checkPropTypes = v, L.resetWarningCache = v.resetWarningCache, L.PropTypes = L, L;
  }, He;
}
var Ge, Rr;
function qt() {
  if (Rr) return Ge;
  Rr = 1;
  var t = Qe();
  function r() {
  }
  function s() {
  }
  return s.resetWarningCache = r, Ge = function() {
    function l(m, y, h, E, _, b) {
      if (b !== t) {
        var T = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw T.name = "Invariant Violation", T;
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
  }, Ge;
}
if (process.env.NODE_ENV !== "production") {
  var Yt = Lr(), Vt = !0;
  Xe.exports = Ft()(Yt.isElement, Vt);
} else
  Xe.exports = qt()();
var zt = Xe.exports;
const u = /* @__PURE__ */ At(zt), Bt = "_iconButton_1963e_1", Ht = {
  iconButton: Bt
}, Gt = {
  trash: ct,
  filter: ut,
  info: kr,
  fill: ft,
  ellipsis: dt,
  chevronRight: $r,
  chevronLeft: pt
}, er = ({ onClick: t, iconName: r }) => /* @__PURE__ */ o.jsx("div", { className: Ht.iconButton, children: /* @__PURE__ */ o.jsx("button", { "aria-label": r, type: "button", onClick: t, children: /* @__PURE__ */ o.jsx(je, { icon: Gt[r] }) }) });
er.propTypes = {
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
const Ut = "_layerButtonReel_1o59k_1", Jt = {
  layerButtonReel: Ut
}, Kt = ({ buttons: t }) => /* @__PURE__ */ o.jsx("div", { className: Jt.layerButtonReel, children: t && Object.keys(t).map((r) => /* @__PURE__ */ o.jsx(er, { iconName: r, onClick: t[r] })) });
Kt.propTypes = {
  buttons: u.objectOf(u.func)
};
const Xt = "_indicator_g9vaa_19", wr = {
  switch: "_switch_g9vaa_7",
  indicator: Xt
}, Nr = ({ layerName: t, isActive: r = !1, onChange: s, ...l }) => /* @__PURE__ */ o.jsx(mt, { ...l, className: wr.switch, isSelected: r, onChange: s, "aria-label": t, value: t, children: /* @__PURE__ */ o.jsx("div", { className: wr.indicator }) });
Nr.propTypes = {
  layerName: u.string,
  isActive: u.bool,
  onChange: u.func.isRequired,
  disabled: u.bool
};
const Zt = "_layerCard_mw8v9_1", Qt = "_layerCardAttributionWrapper_mw8v9_11", en = "_layerCardAttribution_mw8v9_11", rn = "_layerCardHeader_mw8v9_25", tn = "_layerCardTextWrapper_mw8v9_34", nn = "_layerCardTitle_mw8v9_42", an = "_layerCardDescription_mw8v9_50", on = "_layerCardControls_mw8v9_59", sn = "_layerCardToggle_mw8v9_64", ln = "_layerCardContent_mw8v9_69", cn = "_layerCardInfoIcon_mw8v9_85", ue = {
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
  const [m, y] = fe(!1), h = l && !!l.text && (r || m);
  return /* @__PURE__ */ o.jsxs("div", { className: ue.layerCard, children: [
    /* @__PURE__ */ o.jsxs("div", { className: ue.layerCardHeader, children: [
      /* @__PURE__ */ o.jsx("div", { className: ue.layerCardTextWrapper, children: /* @__PURE__ */ o.jsx("span", { className: ue.layerCardTitle, children: t }) }),
      /* @__PURE__ */ o.jsxs(_t, { delay: 300, children: [
        /* @__PURE__ */ o.jsx(gt, { children: "Toggle layer description" }),
        /* @__PURE__ */ o.jsx(De, { className: ue.layerCardInfoIcon, onClick: () => y(!m), children: /* @__PURE__ */ o.jsx(je, { size: "xs", fontWeight: "bold", icon: kr }) })
      ] }),
      s && /* @__PURE__ */ o.jsx(
        Nr,
        {
          layerName: t,
          isActive: r,
          onChange: s
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: ue.layerCardContent, children: [
      v && m && /* @__PURE__ */ o.jsx("span", { className: ue.layerCardDescription, children: v }),
      h && /* @__PURE__ */ o.jsx("div", { className: ue.layerCardAttributionWrapper, children: /* @__PURE__ */ o.jsxs("span", { className: ue.layerCardAttribution, children: [
        "Source: ",
        /* @__PURE__ */ o.jsx("a", { href: l.url, children: l.text })
      ] }) }),
      n && n
    ] })
  ] });
};
un.propTypes = {
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
}, _n = ({ swatches: t }) => /* @__PURE__ */ o.jsx("div", { className: mn.swatchLegend, children: t && t.map((r) => {
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
_n.propTypes = {
  swatches: u.arrayOf(u.objectOf(u.string)).isRequired
};
const gn = "_slider_1bnet_1", bn = "_sliderLabel_1bnet_16", xn = "_sliderThumb_1bnet_20", Tn = "_sliderTrack_1bnet_41", Cn = "_comparisonControl_1bnet_66", we = {
  slider: gn,
  sliderLabel: bn,
  sliderThumb: xn,
  sliderTrack: Tn,
  comparisonControl: Cn
}, Ca = ({
  label: t,
  showLabel: r = !0,
  onChange: s,
  value: l = 50,
  ...v
}) => /* @__PURE__ */ o.jsx("div", { className: we.comparisonControl, children: /* @__PURE__ */ o.jsxs(Ar, { maxValue: 94, minValue: 6, step: 0.1, className: we.slider, "aria-label": !r && typeof t == "string" ? t : void 0, onChange: s, value: l, ...v, children: [
  r && /* @__PURE__ */ o.jsx(Ze, { className: we.sliderLabel, children: t }),
  /* @__PURE__ */ o.jsx(Ir, { className: we.sliderTrack, children: /* @__PURE__ */ o.jsx(Dr, { className: we.sliderThumb, children: /* @__PURE__ */ o.jsx(je, { color: "white", icon: vt }) }) })
] }) }), En = "_datePicker_ywin1_1 react-aria-DatePicker", Rn = "_dateInput_ywin1_12 react-aria-DateInput", wn = "_hoverDatepicker_ywin1_17", Ue = {
  datePicker: En,
  dateInput: Rn,
  hoverDatepicker: wn
}, Je = (t) => new $t(t.getFullYear(), t.getMonth() + 1, t.getDate()), Ea = ({
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
  ..._
}) => {
  const [b, T] = fe(!1), { hoverProps: L, isHovered: G } = kt({}), M = l ? Je(l) : null, z = h ? Je(h) : null, B = E ? Je(E) : null, q = (D) => {
    if (D) {
      const Y = new Date(D.toString());
      v(Y);
    } else
      v(null);
  };
  return /* @__PURE__ */ o.jsxs(
    bt,
    {
      className: `${Ue.datePicker} ${y || ""}`.trim(),
      value: M,
      onChange: q,
      "aria-label": n,
      "aria-labelledby": m,
      maxValue: z,
      minValue: B,
      ..._,
      children: [
        t && /* @__PURE__ */ o.jsx(Ze, { children: t }),
        /* @__PURE__ */ o.jsxs(xt, { children: [
          /* @__PURE__ */ o.jsx(
            Tt,
            {
              className: `${G || b ? Ue.hoverDatepicker : ""} ${Ue.dateInput}`.trim(),
              ...L,
              children: (D) => /* @__PURE__ */ o.jsx(Ct, { segment: D })
            }
          ),
          /* @__PURE__ */ o.jsx(
            De,
            {
              "aria-label": "Open calendar",
              onHoverChange: (D) => T(D),
              children: /* @__PURE__ */ o.jsx(je, { icon: yt })
            }
          )
        ] }),
        r && /* @__PURE__ */ o.jsx(Et, { slot: "description", children: r }),
        s ? /* @__PURE__ */ o.jsx(vr, { children: s }) : /* @__PURE__ */ o.jsx(vr, {}),
        /* @__PURE__ */ o.jsx(Rt, { children: /* @__PURE__ */ o.jsx(wt, { children: /* @__PURE__ */ o.jsxs(St, { children: [
          /* @__PURE__ */ o.jsxs("header", { children: [
            /* @__PURE__ */ o.jsx(De, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ o.jsx(jt, {}),
            /* @__PURE__ */ o.jsx(De, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ o.jsx(Ot, { children: (D) => /* @__PURE__ */ o.jsx(Pt, { date: D }) })
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
  endColor: s = "yellow",
  startNo: l,
  endNo: v,
  titleBelow: n = !1,
  bins: m = 0,
  precision: y = 2,
  units: h
}) => {
  const E = m > 0 ? Array(m - 1).fill(0).map((_, b) => {
    const T = (l + (v - l) / m * (b + 1)).toPrecision(y);
    return /* @__PURE__ */ o.jsx("span", { children: T }, T);
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
  y && /* @__PURE__ */ o.jsx(Ze, { className: Ie.sliderLabel, children: r }),
  /* @__PURE__ */ o.jsx(Ir, { className: Ie.sliderTrack, children: /* @__PURE__ */ o.jsx(Dr, { className: Ie.sliderThumb }) })
] }), Ln = "_layerGroupWrapper_1p831_1", Mn = "_layerGroupButton_1p831_5", Nn = "_layerGroupChevron_1p831_17", Wn = "_layerGroupName_1p831_30", Fn = "_layerGroupChildren_1p831_42", Se = {
  layerGroupWrapper: Ln,
  layerGroupButton: Mn,
  layerGroupChevron: Nn,
  layerGroupName: Wn,
  layerGroupChildren: Fn
}, qn = ({ groupName: t, children: r }) => {
  const [s, l] = fe(!1), v = () => {
    l(!s);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: Se.layerGroupWrapper, children: [
    /* @__PURE__ */ o.jsxs("button", { type: "button", className: Se.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ o.jsx("div", { className: Se.layerGroupChevron, children: /* @__PURE__ */ o.jsx(je, { size: "sm", fixedWidth: !0, icon: s ? ht : $r }) }),
      /* @__PURE__ */ o.jsx("span", { className: Se.layerGroupName, children: t })
    ] }),
    s && /* @__PURE__ */ o.jsx("div", { className: Se.layerGroupChildren, children: r })
  ] });
};
qn.propTypes = {
  groupName: u.string,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const Yn = "_rangeSlider_1szzr_1", Vn = "_rangeSliderLabel_1szzr_14", zn = "_rangeSliderValues_1szzr_18", Bn = "_rangeSliderMin_1szzr_27", Hn = "_rangeSliderMax_1szzr_31", Gn = "_rangeSliderContainer_1szzr_35", Un = "_rangeSliderTrack_1szzr_45", Jn = "_rangeSliderHandleBar_1szzr_54", Kn = "_rangeSliderHandleLeft_1szzr_64", Xn = "_rangeSliderHandleRight_1szzr_65", le = {
  rangeSlider: Yn,
  rangeSliderLabel: Vn,
  rangeSliderValues: zn,
  rangeSliderMin: Bn,
  rangeSliderMax: Hn,
  rangeSliderContainer: Gn,
  rangeSliderTrack: Un,
  rangeSliderHandleBar: Jn,
  rangeSliderHandleLeft: Kn,
  rangeSliderHandleRight: Xn
};
function Zn(t, r) {
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
const Qn = ({ label: t, bounds: r, step: s = 0, valuesChanging: l, valuesChanged: v }) => {
  const [n, m] = st(Zn, { lower: r.min, upper: r.max }), y = lt(null), [h, E] = fe(0), [_, b] = fe(0), [T, L] = fe("none"), [G, M] = fe(0), z = Ce((H) => {
    const P = (H - r.min) / (r.max - r.min);
    return y.current.clientWidth * P;
  }, [r]), B = Ce((H) => {
    const P = H / y.current.clientWidth;
    return r.min + (r.max - r.min) * P;
  }, [r]), q = Ce((H) => {
    const P = H / y.current.clientWidth;
    return (r.max - r.min) * P;
  }, [r]);
  Pe(() => {
    E(z(n.lower)), b(z(n.upper));
  }, [z, n]), Pe(() => {
    l && l(n);
  }, [n, l]), Pe(() => {
    m({
      type: "ChangeStep",
      callback: v,
      step: s,
      bounds: r
    });
  }, [s, v, r]);
  const D = (H) => {
    H.preventDefault(), L(H.target.getAttribute("data-handle-id")), M(0);
  }, Y = Ce((H) => {
    H.preventDefault(), L("none"), v && v(n);
  }, [n, v]), c = Ce(
    (H) => {
      if (T === "none" || H.buttons === 0)
        return;
      H.preventDefault();
      let P = q(H.movementX);
      if (s !== 0) {
        let ne = G + P;
        if (M(ne), Math.abs(ne) < Math.abs(s))
          return;
        ne > 0 ? (ne -= Math.abs(s), P = Math.abs(s)) : (ne += Math.abs(s), P = -Math.abs(s)), M(ne);
      }
      let re = [n.lower, n.upper];
      if (T === "left")
        n.lower + P < r.min && (P = r.min - n.lower), n.lower + P > n.upper ? (L("right"), re = [n.lower, n.lower + P]) : re = [n.lower + P, n.upper];
      else if (T === "right")
        n.upper + P > r.max && (P = r.max - n.upper), n.upper + P < n.lower ? (L("left"), re = [n.upper + P, n.upper]) : re = [n.lower, n.upper + P];
      else if (T === "bar")
        n.lower + P < r.min ? P = r.min - n.lower : n.upper + P > r.max && (P = r.max - n.upper), re = [n.lower + P, n.upper + P];
      else
        throw Error(`Unknown handle: ${T}`);
      m({ type: "ChangeValues", values: re, bounds: r, step: s });
    },
    [
      T,
      r,
      q,
      n,
      G,
      s
    ]
  );
  Pe(() => (T !== "none" ? (window.addEventListener("mousemove", c), window.addEventListener("mouseup", Y)) : (window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", Y)), () => {
    window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", Y);
  }), [T, c, Y]);
  const ie = (H) => {
    H.preventDefault();
    const P = B(H.nativeEvent.offsetX);
    P < n.lower ? m({ type: "ChangeValues", values: [P, n.upper], bounds: r, step: s, callback: v }) : P > n.upper && m({ type: "ChangeValues", values: [n.lower, P], bounds: r, step: s, callback: v });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: le.rangeSlider, children: [
    /* @__PURE__ */ o.jsx("div", { className: le.rangeSliderLabel, children: t }),
    /* @__PURE__ */ o.jsxs("div", { className: le.rangeSliderContainer, children: [
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: le.rangeSliderTrack,
          ref: y,
          role: "none",
          tabIndex: "-1",
          onClick: ie
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: le.rangeSliderHandleBar,
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
            width: `${_ - h}px`
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: le.rangeSliderHandleLeft,
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
          className: le.rangeSliderHandleRight,
          role: "button",
          tabIndex: "0",
          "aria-label": `${t} upper handle`,
          "data-handle-id": "right",
          onMouseDown: D,
          style: { left: `${_}px` }
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: le.rangeSliderValues, children: [
      /* @__PURE__ */ o.jsx("span", { className: le.rangeSliderMin, children: r.min }),
      /* @__PURE__ */ o.jsx("span", { className: le.rangeSliderMax, children: r.max })
    ] })
  ] });
};
Qn.propTypes = {
  label: u.string.isRequired,
  bounds: u.shape({
    min: u.number.isRequired,
    max: u.number.isRequired
  }),
  step: u.number,
  valuesChanging: u.func,
  valuesChanged: u.func
};
const ea = "_mapWrapper_1gyf5_1", ra = "_mapContainer_1gyf5_10", Sr = {
  mapWrapper: ea,
  mapContainer: ra
}, ta = ({ mapContainer: t, id: r, children: s }) => /* @__PURE__ */ o.jsxs("div", { className: Sr.mapWrapper, children: [
  /* @__PURE__ */ o.jsx("div", { className: Sr.mapContainer, id: r, ref: t }),
  s
] });
ta.propTypes = {
  mapContainer: u.oneOfType([
    u.func,
    u.shape({ current: u.instanceOf(Element) })
  ]),
  children: u.node,
  id: u.string
};
const na = ({ children: t }) => /* @__PURE__ */ o.jsx("div", { className: "nav-container", children: t });
na.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const aa = "_infoPanelContainer_gnoj6_1", oa = "_topLeft_gnoj6_13", ia = "_topRight_gnoj6_18", sa = "_centerLeft_gnoj6_23", la = "_centerRight_gnoj6_28", ca = "_bottomLeft_gnoj6_33", ua = "_bottomRight_gnoj6_38", jr = {
  infoPanelContainer: aa,
  topLeft: oa,
  topRight: ia,
  centerLeft: sa,
  centerRight: la,
  bottomLeft: ca,
  bottomRight: ua
}, Ra = ({ children: t, position: r = "centerRight" }) => /* @__PURE__ */ o.jsx("aside", { className: `${jr.infoPanelContainer} ${jr[r]}`, children: t }), fa = ({ showToggle: t, children: r }) => {
  const [s, l] = fe(!1), v = `sidebar ${s ? "closed" : ""}`, n = () => {
    l(!s);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ o.jsx("div", { className: v, children: r }),
    t && /* @__PURE__ */ o.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ o.jsx(
      er,
      {
        onClick: n,
        iconName: s ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
fa.propTypes = {
  showToggle: u.bool,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const da = ({ children: t }) => /* @__PURE__ */ o.jsx("div", { className: "layout-stacked", children: t });
da.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const pa = ({ align: t = "left", children: r }) => /* @__PURE__ */ o.jsx("div", { className: `layout-standard ${t}`, children: r });
pa.propTypes = {
  align: u.oneOf(["left", "right"]),
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const va = "_sliderControlWrapper_2tznx_1", ya = "_sliderLabel_2tznx_9", Or = {
  sliderControlWrapper: va,
  sliderLabel: ya
}, ha = ({ title: t, units: r, sliderConfig: s }) => /* @__PURE__ */ o.jsxs("div", { className: Or.sliderControlWrapper, children: [
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
ha.propTypes = {
  title: u.string.isRequired,
  units: u.string.isRequired,
  sliderConfig: u.arrayOf(u.objectOf(u.string)).isRequired
};
export {
  Ca as ComparisonControl,
  Ea as DatePicker,
  Pn as GradientLegend,
  er as IconButton,
  Ra as InfoPanelContainer,
  Kt as LayerButtonReel,
  un as LayerCard,
  qn as LayerGroup,
  Nr as LayerToggle,
  ta as MapContainer,
  na as NavContainer,
  Qn as RangeSlider,
  fa as SidebarContainer,
  Dn as SimpleSlider,
  ha as SliderControl,
  da as Stacked,
  pa as Standard,
  yn as Swatch,
  _n as SwatchLegend
};
