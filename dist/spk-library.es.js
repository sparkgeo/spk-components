import Pr, { useState as ye, useReducer as ln, useRef as cn, useCallback as Ce, useEffect as Pe } from "react";
import { FontAwesomeIcon as je } from "@fortawesome/react-fontawesome";
import { faTrash as un, faFilter as fn, faInfo as kr, faFillDrip as dn, faEllipsisVertical as pn, faChevronRight as $r, faChevronLeft as vn, faArrowsLeftRight as yn, faCalendar as hn, faChevronDown as mn } from "@fortawesome/free-solid-svg-icons";
import { Switch as _n, TooltipTrigger as gn, Tooltip as bn, Button as De, Slider as Ar, Label as Ze, SliderTrack as Ir, SliderThumb as Dr, DatePicker as Tn, Group as xn, DateInput as Cn, DateSegment as wn, Text as En, FieldError as vr, Popover as Rn, Dialog as Sn, Calendar as jn, Heading as On, CalendarGrid as Pn, CalendarCell as kn } from "react-aria-components";
import { useHover as $n } from "react-aria";
import { CalendarDate as An } from "@internationalized/date";
import './index.css';function In(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ke = { exports: {} }, we = {};
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
function Dn() {
  if (yr) return we;
  yr = 1;
  var n = Pr, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(h, _, l) {
    var m, g = {}, P = null, F = null;
    l !== void 0 && (P = "" + l), _.key !== void 0 && (P = "" + _.key), _.ref !== void 0 && (F = _.ref);
    for (m in _) c.call(_, m) && !p.hasOwnProperty(m) && (g[m] = _[m]);
    if (h && h.defaultProps) for (m in _ = h.defaultProps, _) g[m] === void 0 && (g[m] = _[m]);
    return { $$typeof: r, type: h, key: P, ref: F, props: g, _owner: y.current };
  }
  return we.Fragment = i, we.jsx = T, we.jsxs = T, we;
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
function Nn() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Pr, r = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), h = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), U = Symbol.iterator, q = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = U && e[U] || e[q];
      return typeof a == "function" ? a : null;
    }
    var H = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), b = 1; b < a; b++)
          f[b - 1] = arguments[b];
        D("error", e, f);
      }
    }
    function D(e, a, f) {
      {
        var b = H.ReactDebugCurrentFrame, N = b.getStackAddendum();
        N !== "" && (a += "%s", f = f.concat([N]));
        var V = f.map(function(A) {
          return String(A);
        });
        V.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, V);
      }
    }
    var G = !1, d = !1, te = !1, ce = !1, se = !1, ie;
    ie = Symbol.for("react.module.reference");
    function fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === p || se || e === y || e === l || e === m || ce || e === F || G || d || te || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === g || e.$$typeof === T || e.$$typeof === h || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function B(e, a, f) {
      var b = e.displayName;
      if (b)
        return b;
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
        case p:
          return "Profiler";
        case y:
          return "StrictMode";
        case l:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var a = e;
            return S(a) + ".Consumer";
          case T:
            var f = e;
            return S(f._context) + ".Provider";
          case _:
            return B(e, e.render, "ForwardRef");
          case g:
            var b = e.displayName || null;
            return b !== null ? b : z(e.type) || "Memo";
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
    var J = Object.assign, ue = 0, ne, le, de, he, o, v, R;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function x() {
      {
        if (ue === 0) {
          ne = console.log, le = console.info, de = console.warn, he = console.error, o = console.group, v = console.groupCollapsed, R = console.groupEnd;
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
              value: ne
            }),
            info: J({}, e, {
              value: le
            }),
            warn: J({}, e, {
              value: de
            }),
            error: J({}, e, {
              value: he
            }),
            group: J({}, e, {
              value: o
            }),
            groupCollapsed: J({}, e, {
              value: v
            }),
            groupEnd: J({}, e, {
              value: R
            })
          });
        }
        ue < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = H.ReactCurrentDispatcher, w;
    function j(e, a, f) {
      {
        if (w === void 0)
          try {
            throw Error();
          } catch (N) {
            var b = N.stack.trim().match(/\n( *(at )?)/);
            w = b && b[1] || "";
          }
        return `
` + w + e;
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
      var b;
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
              b = ee;
            }
            Reflect.construct(e, [], A);
          } else {
            try {
              A.call();
            } catch (ee) {
              b = ee;
            }
            e.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            b = ee;
          }
          e();
        }
      } catch (ee) {
        if (ee && b && typeof ee.stack == "string") {
          for (var k = ee.stack.split(`
`), Q = b.stack.split(`
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
        I = !1, C.current = V, $(), Error.prepareStackTrace = N;
      }
      var ge = e ? e.displayName || e.name : "", ve = ge ? j(ge) : "";
      return typeof e == "function" && O.set(e, ve), ve;
    }
    function ae(e, a, f) {
      return u(e, !1);
    }
    function me(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function pe(e, a, f) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return u(e, me(e));
      if (typeof e == "string")
        return j(e);
      switch (e) {
        case l:
          return j("Suspense");
        case m:
          return j("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return ae(e.render);
          case g:
            return pe(e.type, a, f);
          case P: {
            var b = e, N = b._payload, V = b._init;
            try {
              return pe(V(N), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, rr = {}, nr = H.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var a = e._owner, f = pe(e.type, e._source, a ? a.type : null);
        nr.setExtraStackFrame(f);
      } else
        nr.setExtraStackFrame(null);
    }
    function Wr(e, a, f, b, N) {
      {
        var V = Function.call.bind(Te);
        for (var A in e)
          if (V(e, A)) {
            var k = void 0;
            try {
              if (typeof e[A] != "function") {
                var Q = Error((b || "React class") + ": " + f + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              k = e[A](a, A, b, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              k = K;
            }
            k && !(k instanceof Error) && (Oe(N), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", f, A, typeof k), Oe(null)), k instanceof Error && !(k.message in rr) && (rr[k.message] = !0, Oe(N), Y("Failed %s type: %s", f, k.message), Oe(null));
          }
      }
    }
    var qr = Array.isArray;
    function Ne(e) {
      return qr(e);
    }
    function Fr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return f;
      }
    }
    function Yr(e) {
      try {
        return tr(e), !1;
      } catch {
        return !0;
      }
    }
    function tr(e) {
      return "" + e;
    }
    function ar(e) {
      if (Yr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fr(e)), tr(e);
    }
    var xe = H.ReactCurrentOwner, Vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, Me;
    Me = {};
    function Hr(e) {
      if (Te.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Gr(e) {
      if (Te.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Br(e, a) {
      if (typeof e.ref == "string" && xe.current && a && xe.current.stateNode !== a) {
        var f = z(xe.current.type);
        Me[f] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(xe.current.type), e.ref), Me[f] = !0);
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
    var Jr = function(e, a, f, b, N, V, A) {
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
        value: b
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Kr(e, a, f, b, N) {
      {
        var V, A = {}, k = null, Q = null;
        f !== void 0 && (ar(f), k = "" + f), Gr(a) && (ar(a.key), k = "" + a.key), Hr(a) && (Q = a.ref, Br(a, N));
        for (V in a)
          Te.call(a, V) && !Vr.hasOwnProperty(V) && (A[V] = a[V]);
        if (e && e.defaultProps) {
          var K = e.defaultProps;
          for (V in K)
            A[V] === void 0 && (A[V] = K[V]);
        }
        if (k || Q) {
          var X = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && Ur(A, X), Q && zr(A, X);
        }
        return Jr(e, k, Q, N, b, xe.current, A);
      }
    }
    var Le = H.ReactCurrentOwner, sr = H.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var a = e._owner, f = pe(e.type, e._source, a ? a.type : null);
        sr.setExtraStackFrame(f);
      } else
        sr.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function qe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function lr() {
      {
        if (Le.current) {
          var e = z(Le.current.type);
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
        var b = "";
        e && e._owner && e._owner !== Le.current && (b = " It was passed a child from " + z(e._owner.type) + "."), _e(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, b), _e(null);
      }
    }
    function fr(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Ne(e))
          for (var f = 0; f < e.length; f++) {
            var b = e[f];
            qe(b) && ur(b, a);
          }
        else if (qe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var N = W(e);
          if (typeof N == "function" && N !== e.entries)
            for (var V = N.call(e), A; !(A = V.next()).done; )
              qe(A.value) && ur(A.value, a);
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
        else if (typeof a == "object" && (a.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === g))
          f = a.propTypes;
        else
          return;
        if (f) {
          var b = z(a);
          Wr(f, e.props, "prop", b, e);
        } else if (a.PropTypes !== void 0 && !We) {
          We = !0;
          var N = z(a);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function en(e) {
      {
        for (var a = Object.keys(e.props), f = 0; f < a.length; f++) {
          var b = a[f];
          if (b !== "children" && b !== "key") {
            _e(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), _e(null);
            break;
          }
        }
        e.ref !== null && (_e(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var dr = {};
    function pr(e, a, f, b, N, V) {
      {
        var A = fe(e);
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
          var oe = a.children;
          if (oe !== void 0)
            if (b)
              if (Ne(oe)) {
                for (var ge = 0; ge < oe.length; ge++)
                  fr(oe[ge], e);
                Object.freeze && Object.freeze(oe);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(oe, e);
        }
        if (Te.call(a, "key")) {
          var ve = z(e), ee = Object.keys(a).filter(function(sn) {
            return sn !== "key";
          }), Fe = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dr[ve + Fe]) {
            var on = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fe, ve, on, ve), dr[ve + Fe] = !0;
          }
        }
        return e === c ? en(X) : Qr(X), X;
      }
    }
    function rn(e, a, f) {
      return pr(e, a, f, !0);
    }
    function nn(e, a, f) {
      return pr(e, a, f, !1);
    }
    var tn = nn, an = rn;
    Ee.Fragment = c, Ee.jsx = tn, Ee.jsxs = an;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ke.exports = Dn() : Ke.exports = Nn();
var t = Ke.exports, Xe = { exports: {} }, ke = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Mn() {
  if (mr) return M;
  mr = 1;
  var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, y = n ? Symbol.for("react.strict_mode") : 60108, p = n ? Symbol.for("react.profiler") : 60114, T = n ? Symbol.for("react.provider") : 60109, h = n ? Symbol.for("react.context") : 60110, _ = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, m = n ? Symbol.for("react.forward_ref") : 60112, g = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, F = n ? Symbol.for("react.memo") : 60115, U = n ? Symbol.for("react.lazy") : 60116, q = n ? Symbol.for("react.block") : 60121, W = n ? Symbol.for("react.fundamental") : 60117, H = n ? Symbol.for("react.responder") : 60118, Y = n ? Symbol.for("react.scope") : 60119;
  function D(d) {
    if (typeof d == "object" && d !== null) {
      var te = d.$$typeof;
      switch (te) {
        case r:
          switch (d = d.type, d) {
            case _:
            case l:
            case c:
            case p:
            case y:
            case g:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case h:
                case m:
                case U:
                case F:
                case T:
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
  function G(d) {
    return D(d) === l;
  }
  return M.AsyncMode = _, M.ConcurrentMode = l, M.ContextConsumer = h, M.ContextProvider = T, M.Element = r, M.ForwardRef = m, M.Fragment = c, M.Lazy = U, M.Memo = F, M.Portal = i, M.Profiler = p, M.StrictMode = y, M.Suspense = g, M.isAsyncMode = function(d) {
    return G(d) || D(d) === _;
  }, M.isConcurrentMode = G, M.isContextConsumer = function(d) {
    return D(d) === h;
  }, M.isContextProvider = function(d) {
    return D(d) === T;
  }, M.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, M.isForwardRef = function(d) {
    return D(d) === m;
  }, M.isFragment = function(d) {
    return D(d) === c;
  }, M.isLazy = function(d) {
    return D(d) === U;
  }, M.isMemo = function(d) {
    return D(d) === F;
  }, M.isPortal = function(d) {
    return D(d) === i;
  }, M.isProfiler = function(d) {
    return D(d) === p;
  }, M.isStrictMode = function(d) {
    return D(d) === y;
  }, M.isSuspense = function(d) {
    return D(d) === g;
  }, M.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === c || d === l || d === p || d === y || d === g || d === P || typeof d == "object" && d !== null && (d.$$typeof === U || d.$$typeof === F || d.$$typeof === T || d.$$typeof === h || d.$$typeof === m || d.$$typeof === W || d.$$typeof === H || d.$$typeof === Y || d.$$typeof === q);
  }, M.typeOf = D, M;
}
var L = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function Ln() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, y = n ? Symbol.for("react.strict_mode") : 60108, p = n ? Symbol.for("react.profiler") : 60114, T = n ? Symbol.for("react.provider") : 60109, h = n ? Symbol.for("react.context") : 60110, _ = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, m = n ? Symbol.for("react.forward_ref") : 60112, g = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, F = n ? Symbol.for("react.memo") : 60115, U = n ? Symbol.for("react.lazy") : 60116, q = n ? Symbol.for("react.block") : 60121, W = n ? Symbol.for("react.fundamental") : 60117, H = n ? Symbol.for("react.responder") : 60118, Y = n ? Symbol.for("react.scope") : 60119;
    function D(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === c || u === l || u === p || u === y || u === g || u === P || typeof u == "object" && u !== null && (u.$$typeof === U || u.$$typeof === F || u.$$typeof === T || u.$$typeof === h || u.$$typeof === m || u.$$typeof === W || u.$$typeof === H || u.$$typeof === Y || u.$$typeof === q);
    }
    function G(u) {
      if (typeof u == "object" && u !== null) {
        var ae = u.$$typeof;
        switch (ae) {
          case r:
            var me = u.type;
            switch (me) {
              case _:
              case l:
              case c:
              case p:
              case y:
              case g:
                return me;
              default:
                var pe = me && me.$$typeof;
                switch (pe) {
                  case h:
                  case m:
                  case U:
                  case F:
                  case T:
                    return pe;
                  default:
                    return ae;
                }
            }
          case i:
            return ae;
        }
      }
    }
    var d = _, te = l, ce = h, se = T, ie = r, fe = m, B = c, S = U, z = F, J = i, ue = p, ne = y, le = g, de = !1;
    function he(u) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(u) || G(u) === _;
    }
    function o(u) {
      return G(u) === l;
    }
    function v(u) {
      return G(u) === h;
    }
    function R(u) {
      return G(u) === T;
    }
    function E(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function x(u) {
      return G(u) === m;
    }
    function $(u) {
      return G(u) === c;
    }
    function C(u) {
      return G(u) === U;
    }
    function w(u) {
      return G(u) === F;
    }
    function j(u) {
      return G(u) === i;
    }
    function I(u) {
      return G(u) === p;
    }
    function O(u) {
      return G(u) === y;
    }
    function Z(u) {
      return G(u) === g;
    }
    L.AsyncMode = d, L.ConcurrentMode = te, L.ContextConsumer = ce, L.ContextProvider = se, L.Element = ie, L.ForwardRef = fe, L.Fragment = B, L.Lazy = S, L.Memo = z, L.Portal = J, L.Profiler = ue, L.StrictMode = ne, L.Suspense = le, L.isAsyncMode = he, L.isConcurrentMode = o, L.isContextConsumer = v, L.isContextProvider = R, L.isElement = E, L.isForwardRef = x, L.isFragment = $, L.isLazy = C, L.isMemo = w, L.isPortal = j, L.isProfiler = I, L.isStrictMode = O, L.isSuspense = Z, L.isValidElementType = D, L.typeOf = G;
  }()), L;
}
var gr;
function Nr() {
  return gr || (gr = 1, process.env.NODE_ENV === "production" ? ke.exports = Mn() : ke.exports = Ln()), ke.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ye, br;
function Wn() {
  if (br) return Ye;
  br = 1;
  var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function c(p) {
    if (p == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(p);
  }
  function y() {
    try {
      if (!Object.assign)
        return !1;
      var p = new String("abc");
      if (p[5] = "de", Object.getOwnPropertyNames(p)[0] === "5")
        return !1;
      for (var T = {}, h = 0; h < 10; h++)
        T["_" + String.fromCharCode(h)] = h;
      var _ = Object.getOwnPropertyNames(T).map(function(m) {
        return T[m];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        l[m] = m;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = y() ? Object.assign : function(p, T) {
    for (var h, _ = c(p), l, m = 1; m < arguments.length; m++) {
      h = Object(arguments[m]);
      for (var g in h)
        r.call(h, g) && (_[g] = h[g]);
      if (n) {
        l = n(h);
        for (var P = 0; P < l.length; P++)
          i.call(h, l[P]) && (_[l[P]] = h[l[P]]);
      }
    }
    return _;
  }, Ye;
}
var Ve, Tr;
function Qe() {
  if (Tr) return Ve;
  Tr = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ve = n, Ve;
}
var He, xr;
function Mr() {
  return xr || (xr = 1, He = Function.call.bind(Object.prototype.hasOwnProperty)), He;
}
var Ge, Cr;
function qn() {
  if (Cr) return Ge;
  Cr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Qe(), i = {}, c = Mr();
    n = function(p) {
      var T = "Warning: " + p;
      typeof console < "u" && console.error(T);
      try {
        throw new Error(T);
      } catch {
      }
    };
  }
  function y(p, T, h, _, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in p)
        if (c(p, m)) {
          var g;
          try {
            if (typeof p[m] != "function") {
              var P = Error(
                (_ || "React class") + ": " + h + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            g = p[m](T, m, _, h, null, r);
          } catch (U) {
            g = U;
          }
          if (g && !(g instanceof Error) && n(
            (_ || "React class") + ": type specification of " + h + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in i)) {
            i[g.message] = !0;
            var F = l ? l() : "";
            n(
              "Failed " + h + " type: " + g.message + (F ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Ge = y, Ge;
}
var Be, wr;
function Fn() {
  if (wr) return Be;
  wr = 1;
  var n = Nr(), r = Wn(), i = Qe(), c = Mr(), y = qn(), p = function() {
  };
  process.env.NODE_ENV !== "production" && (p = function(h) {
    var _ = "Warning: " + h;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function T() {
    return null;
  }
  return Be = function(h, _) {
    var l = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function g(o) {
      var v = o && (l && o[l] || o[m]);
      if (typeof v == "function")
        return v;
    }
    var P = "<<anonymous>>", F = {
      array: H("array"),
      bigint: H("bigint"),
      bool: H("boolean"),
      func: H("function"),
      number: H("number"),
      object: H("object"),
      string: H("string"),
      symbol: H("symbol"),
      any: Y(),
      arrayOf: D,
      element: G(),
      elementType: d(),
      instanceOf: te,
      node: fe(),
      objectOf: se,
      oneOf: ce,
      oneOfType: ie,
      shape: S,
      exact: z
    };
    function U(o, v) {
      return o === v ? o !== 0 || 1 / o === 1 / v : o !== o && v !== v;
    }
    function q(o, v) {
      this.message = o, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    q.prototype = Error.prototype;
    function W(o) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, R = 0;
      function E($, C, w, j, I, O, Z) {
        if (j = j || P, O = O || w, Z !== i) {
          if (_) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = j + ":" + w;
            !v[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ae] = !0, R++);
          }
        }
        return C[w] == null ? $ ? C[w] === null ? new q("The " + I + " `" + O + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new q("The " + I + " `" + O + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : o(C, w, j, I, O);
      }
      var x = E.bind(null, !1);
      return x.isRequired = E.bind(null, !0), x;
    }
    function H(o) {
      function v(R, E, x, $, C, w) {
        var j = R[E], I = ne(j);
        if (I !== o) {
          var O = le(j);
          return new q(
            "Invalid " + $ + " `" + C + "` of type " + ("`" + O + "` supplied to `" + x + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return W(v);
    }
    function Y() {
      return W(T);
    }
    function D(o) {
      function v(R, E, x, $, C) {
        if (typeof o != "function")
          return new q("Property `" + C + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var w = R[E];
        if (!Array.isArray(w)) {
          var j = ne(w);
          return new q("Invalid " + $ + " `" + C + "` of type " + ("`" + j + "` supplied to `" + x + "`, expected an array."));
        }
        for (var I = 0; I < w.length; I++) {
          var O = o(w, I, x, $, C + "[" + I + "]", i);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return W(v);
    }
    function G() {
      function o(v, R, E, x, $) {
        var C = v[R];
        if (!h(C)) {
          var w = ne(C);
          return new q("Invalid " + x + " `" + $ + "` of type " + ("`" + w + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(o);
    }
    function d() {
      function o(v, R, E, x, $) {
        var C = v[R];
        if (!n.isValidElementType(C)) {
          var w = ne(C);
          return new q("Invalid " + x + " `" + $ + "` of type " + ("`" + w + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(o);
    }
    function te(o) {
      function v(R, E, x, $, C) {
        if (!(R[E] instanceof o)) {
          var w = o.name || P, j = he(R[E]);
          return new q("Invalid " + $ + " `" + C + "` of type " + ("`" + j + "` supplied to `" + x + "`, expected ") + ("instance of `" + w + "`."));
        }
        return null;
      }
      return W(v);
    }
    function ce(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), T;
      function v(R, E, x, $, C) {
        for (var w = R[E], j = 0; j < o.length; j++)
          if (U(w, o[j]))
            return null;
        var I = JSON.stringify(o, function(Z, u) {
          var ae = le(u);
          return ae === "symbol" ? String(u) : u;
        });
        return new q("Invalid " + $ + " `" + C + "` of value `" + String(w) + "` " + ("supplied to `" + x + "`, expected one of " + I + "."));
      }
      return W(v);
    }
    function se(o) {
      function v(R, E, x, $, C) {
        if (typeof o != "function")
          return new q("Property `" + C + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var w = R[E], j = ne(w);
        if (j !== "object")
          return new q("Invalid " + $ + " `" + C + "` of type " + ("`" + j + "` supplied to `" + x + "`, expected an object."));
        for (var I in w)
          if (c(w, I)) {
            var O = o(w, I, x, $, C + "." + I, i);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return W(v);
    }
    function ie(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), T;
      for (var v = 0; v < o.length; v++) {
        var R = o[v];
        if (typeof R != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(R) + " at index " + v + "."
          ), T;
      }
      function E(x, $, C, w, j) {
        for (var I = [], O = 0; O < o.length; O++) {
          var Z = o[O], u = Z(x, $, C, w, j, i);
          if (u == null)
            return null;
          u.data && c(u.data, "expectedType") && I.push(u.data.expectedType);
        }
        var ae = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new q("Invalid " + w + " `" + j + "` supplied to " + ("`" + C + "`" + ae + "."));
      }
      return W(E);
    }
    function fe() {
      function o(v, R, E, x, $) {
        return J(v[R]) ? null : new q("Invalid " + x + " `" + $ + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return W(o);
    }
    function B(o, v, R, E, x) {
      return new q(
        (o || "React class") + ": " + v + " type `" + R + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function S(o) {
      function v(R, E, x, $, C) {
        var w = R[E], j = ne(w);
        if (j !== "object")
          return new q("Invalid " + $ + " `" + C + "` of type `" + j + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var I in o) {
          var O = o[I];
          if (typeof O != "function")
            return B(x, $, C, I, le(O));
          var Z = O(w, I, x, $, C + "." + I, i);
          if (Z)
            return Z;
        }
        return null;
      }
      return W(v);
    }
    function z(o) {
      function v(R, E, x, $, C) {
        var w = R[E], j = ne(w);
        if (j !== "object")
          return new q("Invalid " + $ + " `" + C + "` of type `" + j + "` " + ("supplied to `" + x + "`, expected `object`."));
        var I = r({}, R[E], o);
        for (var O in I) {
          var Z = o[O];
          if (c(o, O) && typeof Z != "function")
            return B(x, $, C, O, le(Z));
          if (!Z)
            return new q(
              "Invalid " + $ + " `" + C + "` key `" + O + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(R[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var u = Z(w, O, x, $, C + "." + O, i);
          if (u)
            return u;
        }
        return null;
      }
      return W(v);
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
          var v = g(o);
          if (v) {
            var R = v.call(o), E;
            if (v !== o.entries) {
              for (; !(E = R.next()).done; )
                if (!J(E.value))
                  return !1;
            } else
              for (; !(E = R.next()).done; ) {
                var x = E.value;
                if (x && !J(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(o, v) {
      return o === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function ne(o) {
      var v = typeof o;
      return Array.isArray(o) ? "array" : o instanceof RegExp ? "object" : ue(v, o) ? "symbol" : v;
    }
    function le(o) {
      if (typeof o > "u" || o === null)
        return "" + o;
      var v = ne(o);
      if (v === "object") {
        if (o instanceof Date)
          return "date";
        if (o instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function de(o) {
      var v = le(o);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function he(o) {
      return !o.constructor || !o.constructor.name ? P : o.constructor.name;
    }
    return F.checkPropTypes = y, F.resetWarningCache = y.resetWarningCache, F.PropTypes = F, F;
  }, Be;
}
var Ue, Er;
function Yn() {
  if (Er) return Ue;
  Er = 1;
  var n = Qe();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, Ue = function() {
    function c(T, h, _, l, m, g) {
      if (g !== n) {
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
    return p.PropTypes = p, p;
  }, Ue;
}
if (process.env.NODE_ENV !== "production") {
  var Vn = Nr(), Hn = !0;
  Xe.exports = Fn()(Vn.isElement, Hn);
} else
  Xe.exports = Yn()();
var Gn = Xe.exports;
const s = /* @__PURE__ */ In(Gn), Bn = "_iconButton_1963e_1", Un = {
  iconButton: Bn
}, zn = {
  trash: un,
  filter: fn,
  info: kr,
  fill: dn,
  ellipsis: pn,
  chevronRight: $r,
  chevronLeft: vn
}, er = ({ onClick: n, iconName: r }) => /* @__PURE__ */ t.jsx("div", { className: Un.iconButton, children: /* @__PURE__ */ t.jsx("button", { "aria-label": r, type: "button", onClick: n, children: /* @__PURE__ */ t.jsx(je, { icon: zn[r] }) }) });
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
const Jn = "_layerButtonReel_1o59k_1", Kn = {
  layerButtonReel: Jn
}, Xn = ({ buttons: n }) => /* @__PURE__ */ t.jsx("div", { className: Kn.layerButtonReel, children: n && Object.keys(n).map((r) => /* @__PURE__ */ t.jsx(er, { iconName: r, onClick: n[r] })) });
Xn.propTypes = {
  buttons: s.objectOf(s.func)
};
const Zn = "_indicator_1wt51_19", Rr = {
  switch: "_switch_1wt51_7",
  indicator: Zn
}, Lr = ({ layerName: n, isActive: r = !1, onChange: i, ...c }) => /* @__PURE__ */ t.jsx(_n, { ...c, className: Rr.switch, isSelected: r, onChange: i, "aria-label": n, value: n, children: /* @__PURE__ */ t.jsx("div", { className: Rr.indicator }) });
Lr.propTypes = {
  layerName: s.string,
  isActive: s.bool,
  onChange: s.func.isRequired,
  disabled: s.bool
};
const Qn = "_layerCard_11s9h_1", et = "_layerCardAttributionWrapper_11s9h_11", rt = "_layerCardAttribution_11s9h_11", nt = "_layerCardHeader_11s9h_23", tt = "_layerCardTextWrapper_11s9h_32", at = "_layerCardTitle_11s9h_40", ot = "_layerCardDescription_11s9h_48", it = "_layerCardControls_11s9h_55", st = "_layerCardToggle_11s9h_60", lt = "_layerCardContent_11s9h_65", ct = "_layerCardInfoIcon_11s9h_83", be = {
  layerCard: Qn,
  layerCardAttributionWrapper: et,
  layerCardAttribution: rt,
  layerCardHeader: nt,
  layerCardTextWrapper: tt,
  layerCardTitle: at,
  layerCardDescription: ot,
  layerCardControls: it,
  layerCardToggle: st,
  layerCardContent: lt,
  layerCardInfoIcon: ct
}, ut = ({
  layerName: n,
  isActive: r,
  onChange: i,
  onShowInfo: c,
  children: y
}) => {
  const p = y && y.length > 0;
  return /* @__PURE__ */ t.jsxs("div", { className: be.layerCard, children: [
    /* @__PURE__ */ t.jsxs("div", { className: be.layerCardHeader, children: [
      /* @__PURE__ */ t.jsx("div", { className: be.layerCardTextWrapper, children: /* @__PURE__ */ t.jsx("span", { className: be.layerCardTitle, children: n }) }),
      /* @__PURE__ */ t.jsxs(gn, { delay: 300, children: [
        /* @__PURE__ */ t.jsx(bn, { children: "Toggle layer description" }),
        p && c && /* @__PURE__ */ t.jsx(
          De,
          {
            className: be.layerCardInfoIcon,
            onClick: c,
            children: /* @__PURE__ */ t.jsx(
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
      i && /* @__PURE__ */ t.jsx(
        Lr,
        {
          layerName: n,
          isActive: r,
          onChange: i
        }
      )
    ] }),
    p && /* @__PURE__ */ t.jsx("div", { className: be.layerCardContent, children: y })
  ] });
};
ut.propTypes = {
  layerName: s.string.isRequired,
  isActive: s.bool,
  onChange: s.func.isRequired,
  onShowInfo: s.func,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ])
};
const ft = "_swatchContainer_771fp_2", dt = "_swatch_771fp_2", pt = "_swatchLabel_771fp_18", vt = "_swatchValue_771fp_24", $e = {
  swatchContainer: ft,
  swatch: dt,
  swatchLabel: pt,
  swatchValue: vt
}, yt = ({ color: n, label: r = "", value: i, units: c = "" }) => /* @__PURE__ */ t.jsxs("div", { className: $e.swatchContainer, children: [
  /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: $e.swatch,
      style: { backgroundColor: n }
    }
  ),
  /* @__PURE__ */ t.jsx("div", { "data-testid": "swatch-label", className: $e.swatchLabel, children: r }),
  /* @__PURE__ */ t.jsx("div", { "data-testid": "swatch-value", className: $e.swatchValue, children: i !== void 0 && `${i}${c}` })
] }), ht = "_swatchLegend_qiaru_1", mt = {
  swatchLegend: ht
}, _t = ({ swatches: n }) => /* @__PURE__ */ t.jsx("div", { className: mt.swatchLegend, children: n && n.map((r) => {
  const { color: i, label: c, value: y, units: p } = r;
  return /* @__PURE__ */ t.jsx(
    yt,
    {
      label: c,
      color: i,
      value: y,
      units: p
    },
    c
  );
}) });
_t.propTypes = {
  swatches: s.arrayOf(s.objectOf(s.string)).isRequired
};
const gt = "_slider_1bnet_1", bt = "_sliderLabel_1bnet_16", Tt = "_sliderThumb_1bnet_20", xt = "_sliderTrack_1bnet_41", Ct = "_comparisonControl_1bnet_66", Re = {
  slider: gt,
  sliderLabel: bt,
  sliderThumb: Tt,
  sliderTrack: xt,
  comparisonControl: Ct
}, Ra = ({
  label: n,
  showLabel: r = !0,
  onChange: i,
  value: c = 50,
  ...y
}) => /* @__PURE__ */ t.jsx("div", { className: Re.comparisonControl, children: /* @__PURE__ */ t.jsxs(Ar, { maxValue: 94, minValue: 6, step: 0.1, className: Re.slider, "aria-label": !r && typeof n == "string" ? n : void 0, onChange: i, value: c, ...y, children: [
  r && /* @__PURE__ */ t.jsx(Ze, { className: Re.sliderLabel, children: n }),
  /* @__PURE__ */ t.jsx(Ir, { className: Re.sliderTrack, children: /* @__PURE__ */ t.jsx(Dr, { className: Re.sliderThumb, children: /* @__PURE__ */ t.jsx(je, { color: "white", icon: yn }) }) })
] }) }), wt = "_datePicker_ywin1_1 react-aria-DatePicker", Et = "_dateInput_ywin1_12 react-aria-DateInput", Rt = "_hoverDatepicker_ywin1_17", ze = {
  datePicker: wt,
  dateInput: Et,
  hoverDatepicker: Rt
}, Je = (n) => new An(n.getFullYear(), n.getMonth() + 1, n.getDate()), Sa = ({
  label: n,
  helperText: r,
  errorMessage: i,
  value: c,
  onChange: y,
  "aria-label": p,
  "aria-labelledby": T,
  className: h,
  maxValue: _,
  minValue: l,
  ...m
}) => {
  const [g, P] = ye(!1), { hoverProps: F, isHovered: U } = $n({}), q = c ? Je(c) : null, W = _ ? Je(_) : null, H = l ? Je(l) : null, Y = (D) => {
    if (D) {
      const G = new Date(D.toString());
      y(G);
    } else
      y(null);
  };
  return /* @__PURE__ */ t.jsxs(
    Tn,
    {
      className: `${ze.datePicker} ${h || ""}`.trim(),
      value: q,
      onChange: Y,
      "aria-label": p,
      "aria-labelledby": T,
      maxValue: W,
      minValue: H,
      ...m,
      children: [
        n && /* @__PURE__ */ t.jsx(Ze, { children: n }),
        /* @__PURE__ */ t.jsxs(xn, { children: [
          /* @__PURE__ */ t.jsx(
            Cn,
            {
              className: `${U || g ? ze.hoverDatepicker : ""} ${ze.dateInput}`.trim(),
              ...F,
              children: (D) => /* @__PURE__ */ t.jsx(wn, { segment: D })
            }
          ),
          /* @__PURE__ */ t.jsx(
            De,
            {
              "aria-label": "Open calendar",
              onHoverChange: (D) => P(D),
              children: /* @__PURE__ */ t.jsx(je, { icon: hn })
            }
          )
        ] }),
        r && /* @__PURE__ */ t.jsx(En, { slot: "description", children: r }),
        i ? /* @__PURE__ */ t.jsx(vr, { children: i }) : /* @__PURE__ */ t.jsx(vr, {}),
        /* @__PURE__ */ t.jsx(Rn, { children: /* @__PURE__ */ t.jsx(Sn, { children: /* @__PURE__ */ t.jsxs(jn, { children: [
          /* @__PURE__ */ t.jsxs("header", { children: [
            /* @__PURE__ */ t.jsx(De, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ t.jsx(On, {}),
            /* @__PURE__ */ t.jsx(De, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ t.jsx(Pn, { children: (D) => /* @__PURE__ */ t.jsx(kn, { date: D }) })
        ] }) }) })
      ]
    }
  );
}, St = "_gradient_1w8qh_1", jt = "_gradientNumbers_1w8qh_6", Ot = "_gradientLegend_1w8qh_11", Ae = {
  gradient: St,
  gradientNumbers: jt,
  gradientLegend: Ot
}, Pt = ({
  title: n,
  startColor: r = "red",
  endColor: i = "yellow",
  startNo: c,
  endNo: y,
  titleBelow: p = !1,
  bins: T = 0,
  precision: h = 2,
  units: _
}) => {
  const l = T > 0 ? Array(T - 1).fill(0).map((m, g) => {
    const P = (c + (y - c) / T * (g + 1)).toPrecision(h);
    return /* @__PURE__ */ t.jsx("span", { children: P }, P);
  }) : [];
  return /* @__PURE__ */ t.jsxs("div", { className: "gradient-box", children: [
    !p && /* @__PURE__ */ t.jsxs("div", { className: "ui-title", children: [
      " ",
      n
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: Ae.gradientLegend, children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: Ae.gradient,
          style: {
            background: `linear-gradient(to right, ${r} , ${i})`
          }
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: Ae.gradientNumbers, children: [
        /* @__PURE__ */ t.jsxs("span", { children: [
          c,
          " ",
          _
        ] }),
        l,
        /* @__PURE__ */ t.jsxs("span", { children: [
          y,
          " ",
          _
        ] })
      ] }),
      p && /* @__PURE__ */ t.jsxs("div", { className: Ae.uiTitle, children: [
        " ",
        n
      ] })
    ] })
  ] });
};
Pt.propTypes = {
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
const kt = "_slider_108mp_1", $t = "_sliderLabel_108mp_16", At = "_sliderThumb_108mp_20", It = "_sliderTrack_108mp_41", Ie = {
  slider: kt,
  sliderLabel: $t,
  sliderThumb: At,
  sliderTrack: It
}, Dt = ({
  className: n,
  label: r = "",
  onChange: i,
  minValue: c,
  maxValue: y,
  step: p,
  value: T = 0,
  showLabel: h,
  ..._
}) => /* @__PURE__ */ t.jsxs(Ar, { maxValue: y, minValue: c, step: p, className: `${Ie.slider} ${n || ""}`.trim(), "aria-label": !h && typeof r == "string" ? r : void 0, onChange: i, value: T, ..._, children: [
  h && /* @__PURE__ */ t.jsx(Ze, { className: Ie.sliderLabel, children: r }),
  /* @__PURE__ */ t.jsx(Ir, { className: Ie.sliderTrack, children: /* @__PURE__ */ t.jsx(Dr, { className: Ie.sliderThumb }) })
] }), Nt = "_layerGroupWrapper_1qzyk_1", Mt = "_layerGroupButton_1qzyk_5", Lt = "_layerGroupChevron_1qzyk_17", Wt = "_layerGroupName_1qzyk_30", qt = "_layerGroupChildren_1qzyk_42", Se = {
  layerGroupWrapper: Nt,
  layerGroupButton: Mt,
  layerGroupChevron: Lt,
  layerGroupName: Wt,
  layerGroupChildren: qt
}, Ft = ({ groupName: n, className: r, children: i }) => {
  const [c, y] = ye(!1), p = () => {
    y(!c);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: Se.layerGroupWrapper + (r ? ` ${r}` : ""), children: [
    /* @__PURE__ */ t.jsxs("button", { type: "button", className: Se.layerGroupButton, onClick: p, children: [
      /* @__PURE__ */ t.jsx("span", { className: Se.layerGroupName, children: n }),
      /* @__PURE__ */ t.jsx("div", { className: Se.layerGroupChevron, children: /* @__PURE__ */ t.jsx(je, { size: "sm", fixedWidth: !0, icon: c ? mn : $r }) })
    ] }),
    c && /* @__PURE__ */ t.jsx("div", { className: Se.layerGroupChildren, children: i })
  ] });
};
Ft.propTypes = {
  groupName: s.string,
  className: s.string,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Yt = "_rangeSlider_1wewu_1", Vt = "_rangeSliderLabel_1wewu_14", Ht = "_rangeSliderValues_1wewu_19", Gt = "_rangeSliderMin_1wewu_28", Bt = "_rangeSliderMax_1wewu_32", Ut = "_rangeSliderContainer_1wewu_36", zt = "_rangeSliderTrack_1wewu_46", Jt = "_rangeSliderHandleBar_1wewu_55", Kt = "_rangeSliderHandleGroup_1wewu_65", Xt = "_rangeSliderHandleLeft_1wewu_75", Zt = "_rangeSliderHandleRight_1wewu_76", Qt = "_rangeSliderValue_1wewu_19", re = {
  rangeSlider: Yt,
  rangeSliderLabel: Vt,
  rangeSliderValues: Ht,
  rangeSliderMin: Gt,
  rangeSliderMax: Bt,
  rangeSliderContainer: Ut,
  rangeSliderTrack: zt,
  rangeSliderHandleBar: Jt,
  rangeSliderHandleGroup: Kt,
  rangeSliderHandleLeft: Xt,
  rangeSliderHandleRight: Zt,
  rangeSliderValue: Qt
};
function ea(n, r) {
  switch (r.type) {
    case "ChangeStep": {
      let i = { lower: Math.max(r.bounds.min, n.lower), upper: Math.min(r.bounds.max, n.upper) };
      return r.step > 0 && (i = {
        lower: Math.max(r.bounds.min, Math.floor(n.lower / r.step) * r.step),
        upper: Math.min(r.bounds.max, Math.ceil(n.upper / r.step) * r.step)
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
const ra = ({ label: n, bounds: r, step: i = 0, valuesChanging: c, valuesChanged: y, currentValues: p = {}, showValues: T }) => {
  const h = Math.max(isNaN(p.lower) ? -1 / 0 : p.lower, r.min), _ = Math.min(isNaN(p.upper) ? 1 / 0 : p.upper, r.max), [l, m] = ln(ea, { lower: h, upper: _ }), g = cn(null), [P, F] = ye(0), [U, q] = ye(0), [W, H] = ye("none"), [Y, D] = ye(0), G = Ce((B) => {
    const S = (B - r.min) / (r.max - r.min);
    return g.current.clientWidth * S;
  }, [r]), d = Ce((B) => {
    const S = B / g.current.clientWidth;
    return r.min + (r.max - r.min) * S;
  }, [r]), te = Ce((B) => {
    const S = B / g.current.clientWidth;
    return (r.max - r.min) * S;
  }, [r]);
  Pe(() => {
    F(G(l.lower)), q(G(l.upper));
  }, [G, l]), Pe(() => {
    c && c(l);
  }, [l, c]), Pe(() => {
    m({
      type: "ChangeStep",
      callback: y,
      step: i,
      bounds: r
    });
  }, [i, y, r]);
  const ce = (B) => {
    B.preventDefault(), H(B.target.getAttribute("data-handle-id")), D(0);
  }, se = Ce((B) => {
    B.preventDefault(), H("none"), y && y(l);
  }, [l, y]), ie = Ce(
    (B) => {
      if (W === "none" || B.buttons === 0)
        return;
      B.preventDefault();
      let S = te(B.movementX);
      if (i !== 0) {
        let J = Y + S;
        if (D(J), Math.abs(J) < Math.abs(i))
          return;
        J > 0 ? (J -= Math.abs(i), S = Math.abs(i)) : (J += Math.abs(i), S = -Math.abs(i)), D(J);
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
      m({ type: "ChangeValues", values: z, bounds: r, step: i });
    },
    [
      W,
      r,
      te,
      l,
      Y,
      i
    ]
  );
  Pe(() => (W !== "none" ? (window.addEventListener("mousemove", ie), window.addEventListener("mouseup", se)) : (window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", se)), () => {
    window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", se);
  }), [W, ie, se]);
  const fe = (B) => {
    B.preventDefault();
    const S = d(B.nativeEvent.offsetX);
    S < l.lower ? m({ type: "ChangeValues", values: [S, l.upper], bounds: r, step: i, callback: y }) : S > l.upper && m({ type: "ChangeValues", values: [l.lower, S], bounds: r, step: i, callback: y });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: re.rangeSlider, children: [
    /* @__PURE__ */ t.jsx("div", { className: re.rangeSliderLabel, children: n }),
    /* @__PURE__ */ t.jsxs("div", { className: re.rangeSliderContainer, children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: re.rangeSliderTrack,
          ref: g,
          role: "none",
          tabIndex: "-1",
          onClick: fe
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: re.rangeSliderHandleBar,
          role: "slider",
          tabIndex: "0",
          "aria-label": n,
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
      /* @__PURE__ */ t.jsxs("div", { className: re.rangeSliderHandleGroup, style: { left: `${P - 10}px` }, children: [
        T && /* @__PURE__ */ t.jsx("span", { className: re.rangeSliderValue, children: Math.round(l.lower) }),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: re.rangeSliderHandleLeft,
            role: "button",
            tabIndex: "0",
            "aria-label": `${n} lower handle`,
            "data-handle-id": "left",
            onMouseDown: ce
          }
        )
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: re.rangeSliderHandleGroup, style: { left: `${U - 10}px` }, children: [
        T && /* @__PURE__ */ t.jsx("span", { className: re.rangeSliderValue, children: Math.round(l.upper) }),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: re.rangeSliderHandleRight,
            role: "button",
            tabIndex: "0",
            "aria-label": `${n} upper handle`,
            "data-handle-id": "right",
            onMouseDown: ce
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: re.rangeSliderValues, children: [
      /* @__PURE__ */ t.jsx("span", { className: re.rangeSliderMin, children: r.min }),
      /* @__PURE__ */ t.jsx("span", { className: re.rangeSliderMax, children: r.max })
    ] })
  ] });
};
ra.propTypes = {
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
const na = "_mapWrapper_1gyf5_1", ta = "_mapContainer_1gyf5_10", Sr = {
  mapWrapper: na,
  mapContainer: ta
}, aa = ({ mapContainer: n, id: r, children: i }) => /* @__PURE__ */ t.jsxs("div", { className: Sr.mapWrapper, children: [
  /* @__PURE__ */ t.jsx("div", { className: Sr.mapContainer, id: r, ref: n }),
  i
] });
aa.propTypes = {
  mapContainer: s.oneOfType([
    s.func,
    s.shape({ current: s.instanceOf(Element) })
  ]),
  children: s.node,
  id: s.string
};
const oa = ({ children: n }) => /* @__PURE__ */ t.jsx("div", { className: "nav-container", children: n });
oa.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const ia = "_infoPanelContainer_gnoj6_1", sa = "_topLeft_gnoj6_13", la = "_topRight_gnoj6_18", ca = "_centerLeft_gnoj6_23", ua = "_centerRight_gnoj6_28", fa = "_bottomLeft_gnoj6_33", da = "_bottomRight_gnoj6_38", jr = {
  infoPanelContainer: ia,
  topLeft: sa,
  topRight: la,
  centerLeft: ca,
  centerRight: ua,
  bottomLeft: fa,
  bottomRight: da
}, ja = ({ children: n, position: r = "centerRight" }) => /* @__PURE__ */ t.jsx("aside", { className: `${jr.infoPanelContainer} ${jr[r]}`, children: n }), pa = ({ showToggle: n, children: r }) => {
  const [i, c] = ye(!1), y = `sidebar ${i ? "closed" : ""}`, p = () => {
    c(!i);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ t.jsx("div", { className: y, children: r }),
    n && /* @__PURE__ */ t.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ t.jsx(
      er,
      {
        onClick: p,
        iconName: i ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
pa.propTypes = {
  showToggle: s.bool,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const va = ({ children: n }) => /* @__PURE__ */ t.jsx("div", { className: "layout-stacked", children: n });
va.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const ya = ({ align: n = "left", hasFooter: r = !1, children: i }) => /* @__PURE__ */ t.jsx("div", { className: `layout-standard ${n}${r ? " footer" : ""}`, children: i });
ya.propTypes = {
  align: s.oneOf(["left", "right"]),
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired,
  hasFooter: s.bool
};
const ha = ({ hasFooter: n = !1, children: r }) => /* @__PURE__ */ t.jsx(
  "div",
  {
    className: n ? "layout-fullscreen-footer" : "layout-fullscreen",
    children: r
  }
);
ha.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired,
  hasFooter: s.bool
};
const ma = "_sliderControlWrapper_2tznx_1", _a = "_sliderLabel_2tznx_9", Or = {
  sliderControlWrapper: ma,
  sliderLabel: _a
}, ga = ({ title: n, units: r, sliderConfig: i }) => /* @__PURE__ */ t.jsxs("div", { className: Or.sliderControlWrapper, children: [
  /* @__PURE__ */ t.jsx("div", { className: "ui-label", children: n }),
  /* @__PURE__ */ t.jsx("div", {}),
  i && i.map((c) => {
    const { label: y } = c;
    return /* @__PURE__ */ t.jsx("div", { className: Or.sliderLabel, children: y });
  }),
  i && i.map((c) => {
    const { onChange: y, min: p, max: T, step: h, value: _ } = c;
    return /* @__PURE__ */ t.jsx(
      Dt,
      {
        onChange: y,
        units: r,
        min: p,
        max: T,
        step: h,
        value: _
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
  Ra as ComparisonControl,
  Sa as DatePicker,
  ha as FullScreen,
  Pt as GradientLegend,
  er as IconButton,
  ja as InfoPanelContainer,
  Xn as LayerButtonReel,
  ut as LayerCard,
  Ft as LayerGroup,
  Lr as LayerToggle,
  aa as MapContainer,
  oa as NavContainer,
  ra as RangeSlider,
  pa as SidebarContainer,
  Dt as SimpleSlider,
  ga as SliderControl,
  va as Stacked,
  ya as Standard,
  yt as Swatch,
  _t as SwatchLegend
};
