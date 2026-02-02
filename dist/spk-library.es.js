import Pr, { useState as de, useReducer as ln, useRef as cn, useCallback as we, useEffect as Pe } from "react";
import { FontAwesomeIcon as je } from "@fortawesome/react-fontawesome";
import { faTrash as un, faFilter as fn, faInfo as kr, faFillDrip as dn, faEllipsisVertical as pn, faChevronRight as $r, faChevronLeft as vn, faArrowsLeftRight as yn, faCalendar as hn, faChevronDown as mn } from "@fortawesome/free-solid-svg-icons";
import { Switch as _n, TooltipTrigger as gn, Tooltip as bn, Button as Ne, Slider as Ar, Label as Ze, SliderTrack as Ir, SliderThumb as Nr, DatePicker as xn, Group as Tn, DateInput as wn, DateSegment as Cn, Text as En, FieldError as vr, Popover as Rn, Dialog as Sn, Calendar as jn, Heading as On, CalendarGrid as Pn, CalendarCell as kn } from "react-aria-components";
import { useHover as $n } from "react-aria";
import { CalendarDate as An } from "@internationalized/date";
import './index.css';function In(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
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
function Nn() {
  if (yr) return Ce;
  yr = 1;
  var n = Pr, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(h, m, l) {
    var _, b = {}, P = null, F = null;
    l !== void 0 && (P = "" + l), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (F = m.ref);
    for (_ in m) c.call(m, _) && !p.hasOwnProperty(_) && (b[_] = m[_]);
    if (h && h.defaultProps) for (_ in m = h.defaultProps, m) b[_] === void 0 && (b[_] = m[_]);
    return { $$typeof: r, type: h, key: P, ref: F, props: b, _owner: y.current };
  }
  return Ce.Fragment = s, Ce.jsx = g, Ce.jsxs = g, Ce;
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
function Dn() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Pr, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), U = Symbol.iterator, q = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = U && e[U] || e[q];
      return typeof a == "function" ? a : null;
    }
    var H = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
    var B = !1, d = !1, te = !1, ce = !1, se = !1, ie;
    ie = Symbol.for("react.module.reference");
    function pe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === p || se || e === y || e === l || e === _ || ce || e === F || B || d || te || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === b || e.$$typeof === g || e.$$typeof === h || e.$$typeof === m || // This needs to include all possible module reference object
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
        case s:
          return "Portal";
        case p:
          return "Profiler";
        case y:
          return "StrictMode";
        case l:
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
    var J = Object.assign, ue = 0, ne, le, ve, me, o, v, R;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function T() {
      {
        if (ue === 0) {
          ne = console.log, le = console.info, ve = console.warn, me = console.error, o = console.group, v = console.groupCollapsed, R = console.groupEnd;
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
              value: ve
            }),
            error: J({}, e, {
              value: me
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
        case l:
          return j("Suspense");
        case _:
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
    var xe = Object.prototype.hasOwnProperty, rr = {}, nr = H.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var a = e._owner, f = ye(e.type, e._source, a ? a.type : null);
        nr.setExtraStackFrame(f);
      } else
        nr.setExtraStackFrame(null);
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
    var qr = Array.isArray;
    function De(e) {
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
    function ge(e) {
      if (e) {
        var a = e._owner, f = ye(e.type, e._source, a ? a.type : null);
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
        if (De(e))
          for (var f = 0; f < e.length; f++) {
            var x = e[f];
            qe(x) && ur(x, a);
          }
        else if (qe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var D = W(e);
          if (typeof D == "function" && D !== e.entries)
            for (var V = D.call(e), A; !(A = V.next()).done; )
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
    function en(e) {
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
          var he = z(e), ee = Object.keys(a).filter(function(sn) {
            return sn !== "key";
          }), Fe = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dr[he + Fe]) {
            var on = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fe, he, on, he), dr[he + Fe] = !0;
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
process.env.NODE_ENV === "production" ? Ke.exports = Nn() : Ke.exports = Dn();
var t = Ke.exports, Xe = { exports: {} }, ke = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Ln() {
  if (mr) return L;
  mr = 1;
  var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, s = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, y = n ? Symbol.for("react.strict_mode") : 60108, p = n ? Symbol.for("react.profiler") : 60114, g = n ? Symbol.for("react.provider") : 60109, h = n ? Symbol.for("react.context") : 60110, m = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, _ = n ? Symbol.for("react.forward_ref") : 60112, b = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, F = n ? Symbol.for("react.memo") : 60115, U = n ? Symbol.for("react.lazy") : 60116, q = n ? Symbol.for("react.block") : 60121, W = n ? Symbol.for("react.fundamental") : 60117, H = n ? Symbol.for("react.responder") : 60118, Y = n ? Symbol.for("react.scope") : 60119;
  function N(d) {
    if (typeof d == "object" && d !== null) {
      var te = d.$$typeof;
      switch (te) {
        case r:
          switch (d = d.type, d) {
            case m:
            case l:
            case c:
            case p:
            case y:
            case b:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case h:
                case _:
                case U:
                case F:
                case g:
                  return d;
                default:
                  return te;
              }
          }
        case s:
          return te;
      }
    }
  }
  function B(d) {
    return N(d) === l;
  }
  return L.AsyncMode = m, L.ConcurrentMode = l, L.ContextConsumer = h, L.ContextProvider = g, L.Element = r, L.ForwardRef = _, L.Fragment = c, L.Lazy = U, L.Memo = F, L.Portal = s, L.Profiler = p, L.StrictMode = y, L.Suspense = b, L.isAsyncMode = function(d) {
    return B(d) || N(d) === m;
  }, L.isConcurrentMode = B, L.isContextConsumer = function(d) {
    return N(d) === h;
  }, L.isContextProvider = function(d) {
    return N(d) === g;
  }, L.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, L.isForwardRef = function(d) {
    return N(d) === _;
  }, L.isFragment = function(d) {
    return N(d) === c;
  }, L.isLazy = function(d) {
    return N(d) === U;
  }, L.isMemo = function(d) {
    return N(d) === F;
  }, L.isPortal = function(d) {
    return N(d) === s;
  }, L.isProfiler = function(d) {
    return N(d) === p;
  }, L.isStrictMode = function(d) {
    return N(d) === y;
  }, L.isSuspense = function(d) {
    return N(d) === b;
  }, L.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === c || d === l || d === p || d === y || d === b || d === P || typeof d == "object" && d !== null && (d.$$typeof === U || d.$$typeof === F || d.$$typeof === g || d.$$typeof === h || d.$$typeof === _ || d.$$typeof === W || d.$$typeof === H || d.$$typeof === Y || d.$$typeof === q);
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
var _r;
function Mn() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, s = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, y = n ? Symbol.for("react.strict_mode") : 60108, p = n ? Symbol.for("react.profiler") : 60114, g = n ? Symbol.for("react.provider") : 60109, h = n ? Symbol.for("react.context") : 60110, m = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, _ = n ? Symbol.for("react.forward_ref") : 60112, b = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, F = n ? Symbol.for("react.memo") : 60115, U = n ? Symbol.for("react.lazy") : 60116, q = n ? Symbol.for("react.block") : 60121, W = n ? Symbol.for("react.fundamental") : 60117, H = n ? Symbol.for("react.responder") : 60118, Y = n ? Symbol.for("react.scope") : 60119;
    function N(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === c || u === l || u === p || u === y || u === b || u === P || typeof u == "object" && u !== null && (u.$$typeof === U || u.$$typeof === F || u.$$typeof === g || u.$$typeof === h || u.$$typeof === _ || u.$$typeof === W || u.$$typeof === H || u.$$typeof === Y || u.$$typeof === q);
    }
    function B(u) {
      if (typeof u == "object" && u !== null) {
        var ae = u.$$typeof;
        switch (ae) {
          case r:
            var _e = u.type;
            switch (_e) {
              case m:
              case l:
              case c:
              case p:
              case y:
              case b:
                return _e;
              default:
                var ye = _e && _e.$$typeof;
                switch (ye) {
                  case h:
                  case _:
                  case U:
                  case F:
                  case g:
                    return ye;
                  default:
                    return ae;
                }
            }
          case s:
            return ae;
        }
      }
    }
    var d = m, te = l, ce = h, se = g, ie = r, pe = _, G = c, S = U, z = F, J = s, ue = p, ne = y, le = b, ve = !1;
    function me(u) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(u) || B(u) === m;
    }
    function o(u) {
      return B(u) === l;
    }
    function v(u) {
      return B(u) === h;
    }
    function R(u) {
      return B(u) === g;
    }
    function E(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function T(u) {
      return B(u) === _;
    }
    function $(u) {
      return B(u) === c;
    }
    function w(u) {
      return B(u) === U;
    }
    function C(u) {
      return B(u) === F;
    }
    function j(u) {
      return B(u) === s;
    }
    function I(u) {
      return B(u) === p;
    }
    function O(u) {
      return B(u) === y;
    }
    function Z(u) {
      return B(u) === b;
    }
    M.AsyncMode = d, M.ConcurrentMode = te, M.ContextConsumer = ce, M.ContextProvider = se, M.Element = ie, M.ForwardRef = pe, M.Fragment = G, M.Lazy = S, M.Memo = z, M.Portal = J, M.Profiler = ue, M.StrictMode = ne, M.Suspense = le, M.isAsyncMode = me, M.isConcurrentMode = o, M.isContextConsumer = v, M.isContextProvider = R, M.isElement = E, M.isForwardRef = T, M.isFragment = $, M.isLazy = w, M.isMemo = C, M.isPortal = j, M.isProfiler = I, M.isStrictMode = O, M.isSuspense = Z, M.isValidElementType = N, M.typeOf = B;
  }()), M;
}
var gr;
function Dr() {
  return gr || (gr = 1, process.env.NODE_ENV === "production" ? ke.exports = Ln() : ke.exports = Mn()), ke.exports;
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
  var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
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
      for (var g = {}, h = 0; h < 10; h++)
        g["_" + String.fromCharCode(h)] = h;
      var m = Object.getOwnPropertyNames(g).map(function(_) {
        return g[_];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        l[_] = _;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = y() ? Object.assign : function(p, g) {
    for (var h, m = c(p), l, _ = 1; _ < arguments.length; _++) {
      h = Object(arguments[_]);
      for (var b in h)
        r.call(h, b) && (m[b] = h[b]);
      if (n) {
        l = n(h);
        for (var P = 0; P < l.length; P++)
          s.call(h, l[P]) && (m[l[P]] = h[l[P]]);
      }
    }
    return m;
  }, Ye;
}
var Ve, xr;
function Qe() {
  if (xr) return Ve;
  xr = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ve = n, Ve;
}
var He, Tr;
function Lr() {
  return Tr || (Tr = 1, He = Function.call.bind(Object.prototype.hasOwnProperty)), He;
}
var Be, wr;
function qn() {
  if (wr) return Be;
  wr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Qe(), s = {}, c = Lr();
    n = function(p) {
      var g = "Warning: " + p;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function y(p, g, h, m, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var _ in p)
        if (c(p, _)) {
          var b;
          try {
            if (typeof p[_] != "function") {
              var P = Error(
                (m || "React class") + ": " + h + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            b = p[_](g, _, m, h, null, r);
          } catch (U) {
            b = U;
          }
          if (b && !(b instanceof Error) && n(
            (m || "React class") + ": type specification of " + h + " `" + _ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), b instanceof Error && !(b.message in s)) {
            s[b.message] = !0;
            var F = l ? l() : "";
            n(
              "Failed " + h + " type: " + b.message + (F ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (s = {});
  }, Be = y, Be;
}
var Ge, Cr;
function Fn() {
  if (Cr) return Ge;
  Cr = 1;
  var n = Dr(), r = Wn(), s = Qe(), c = Lr(), y = qn(), p = function() {
  };
  process.env.NODE_ENV !== "production" && (p = function(h) {
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
    var l = typeof Symbol == "function" && Symbol.iterator, _ = "@@iterator";
    function b(o) {
      var v = o && (l && o[l] || o[_]);
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
      arrayOf: N,
      element: B(),
      elementType: d(),
      instanceOf: te,
      node: pe(),
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
      function E($, w, C, j, I, O, Z) {
        if (j = j || P, O = O || C, Z !== s) {
          if (m) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = j + ":" + C;
            !v[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ae] = !0, R++);
          }
        }
        return w[C] == null ? $ ? w[C] === null ? new q("The " + I + " `" + O + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new q("The " + I + " `" + O + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : o(w, C, j, I, O);
      }
      var T = E.bind(null, !1);
      return T.isRequired = E.bind(null, !0), T;
    }
    function H(o) {
      function v(R, E, T, $, w, C) {
        var j = R[E], I = ne(j);
        if (I !== o) {
          var O = le(j);
          return new q(
            "Invalid " + $ + " `" + w + "` of type " + ("`" + O + "` supplied to `" + T + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return W(v);
    }
    function Y() {
      return W(g);
    }
    function N(o) {
      function v(R, E, T, $, w) {
        if (typeof o != "function")
          return new q("Property `" + w + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var C = R[E];
        if (!Array.isArray(C)) {
          var j = ne(C);
          return new q("Invalid " + $ + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an array."));
        }
        for (var I = 0; I < C.length; I++) {
          var O = o(C, I, T, $, w + "[" + I + "]", s);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return W(v);
    }
    function B() {
      function o(v, R, E, T, $) {
        var w = v[R];
        if (!h(w)) {
          var C = ne(w);
          return new q("Invalid " + T + " `" + $ + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(o);
    }
    function d() {
      function o(v, R, E, T, $) {
        var w = v[R];
        if (!n.isValidElementType(w)) {
          var C = ne(w);
          return new q("Invalid " + T + " `" + $ + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(o);
    }
    function te(o) {
      function v(R, E, T, $, w) {
        if (!(R[E] instanceof o)) {
          var C = o.name || P, j = me(R[E]);
          return new q("Invalid " + $ + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return W(v);
    }
    function ce(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), g;
      function v(R, E, T, $, w) {
        for (var C = R[E], j = 0; j < o.length; j++)
          if (U(C, o[j]))
            return null;
        var I = JSON.stringify(o, function(Z, u) {
          var ae = le(u);
          return ae === "symbol" ? String(u) : u;
        });
        return new q("Invalid " + $ + " `" + w + "` of value `" + String(C) + "` " + ("supplied to `" + T + "`, expected one of " + I + "."));
      }
      return W(v);
    }
    function se(o) {
      function v(R, E, T, $, w) {
        if (typeof o != "function")
          return new q("Property `" + w + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var C = R[E], j = ne(C);
        if (j !== "object")
          return new q("Invalid " + $ + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an object."));
        for (var I in C)
          if (c(C, I)) {
            var O = o(C, I, T, $, w + "." + I, s);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return W(v);
    }
    function ie(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var v = 0; v < o.length; v++) {
        var R = o[v];
        if (typeof R != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(R) + " at index " + v + "."
          ), g;
      }
      function E(T, $, w, C, j) {
        for (var I = [], O = 0; O < o.length; O++) {
          var Z = o[O], u = Z(T, $, w, C, j, s);
          if (u == null)
            return null;
          u.data && c(u.data, "expectedType") && I.push(u.data.expectedType);
        }
        var ae = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new q("Invalid " + C + " `" + j + "` supplied to " + ("`" + w + "`" + ae + "."));
      }
      return W(E);
    }
    function pe() {
      function o(v, R, E, T, $) {
        return J(v[R]) ? null : new q("Invalid " + T + " `" + $ + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return W(o);
    }
    function G(o, v, R, E, T) {
      return new q(
        (o || "React class") + ": " + v + " type `" + R + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function S(o) {
      function v(R, E, T, $, w) {
        var C = R[E], j = ne(C);
        if (j !== "object")
          return new q("Invalid " + $ + " `" + w + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var I in o) {
          var O = o[I];
          if (typeof O != "function")
            return G(T, $, w, I, le(O));
          var Z = O(C, I, T, $, w + "." + I, s);
          if (Z)
            return Z;
        }
        return null;
      }
      return W(v);
    }
    function z(o) {
      function v(R, E, T, $, w) {
        var C = R[E], j = ne(C);
        if (j !== "object")
          return new q("Invalid " + $ + " `" + w + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        var I = r({}, R[E], o);
        for (var O in I) {
          var Z = o[O];
          if (c(o, O) && typeof Z != "function")
            return G(T, $, w, O, le(Z));
          if (!Z)
            return new q(
              "Invalid " + $ + " `" + w + "` key `" + O + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(R[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var u = Z(C, O, T, $, w + "." + O, s);
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
          var v = b(o);
          if (v) {
            var R = v.call(o), E;
            if (v !== o.entries) {
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
    function ve(o) {
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
    function me(o) {
      return !o.constructor || !o.constructor.name ? P : o.constructor.name;
    }
    return F.checkPropTypes = y, F.resetWarningCache = y.resetWarningCache, F.PropTypes = F, F;
  }, Ge;
}
var Ue, Er;
function Yn() {
  if (Er) return Ue;
  Er = 1;
  var n = Qe();
  function r() {
  }
  function s() {
  }
  return s.resetWarningCache = r, Ue = function() {
    function c(g, h, m, l, _, b) {
      if (b !== n) {
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
      checkPropTypes: s,
      resetWarningCache: r
    };
    return p.PropTypes = p, p;
  }, Ue;
}
if (process.env.NODE_ENV !== "production") {
  var Vn = Dr(), Hn = !0;
  Xe.exports = Fn()(Vn.isElement, Hn);
} else
  Xe.exports = Yn()();
var Bn = Xe.exports;
const i = /* @__PURE__ */ In(Bn), Gn = "_iconButton_1963e_1", Un = {
  iconButton: Gn
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
  iconName: i.oneOf([
    "trash",
    "filter",
    "info",
    "fill",
    "ellipsis",
    "chevronLeft",
    "chevronRight"
  ]),
  onClick: i.func.isRequired
};
const Jn = "_layerButtonReel_1o59k_1", Kn = {
  layerButtonReel: Jn
}, Xn = ({ buttons: n }) => /* @__PURE__ */ t.jsx("div", { className: Kn.layerButtonReel, children: n && Object.keys(n).map((r) => /* @__PURE__ */ t.jsx(er, { iconName: r, onClick: n[r] })) });
Xn.propTypes = {
  buttons: i.objectOf(i.func)
};
const Zn = "_indicator_1wt51_19", Rr = {
  switch: "_switch_1wt51_7",
  indicator: Zn
}, Mr = ({ layerName: n, isActive: r = !1, onChange: s, ...c }) => /* @__PURE__ */ t.jsx(_n, { ...c, className: Rr.switch, isSelected: r, onChange: s, "aria-label": n, value: n, children: /* @__PURE__ */ t.jsx("div", { className: Rr.indicator }) });
Mr.propTypes = {
  layerName: i.string,
  isActive: i.bool,
  onChange: i.func.isRequired,
  disabled: i.bool
};
const Qn = "_layerCard_1hhfw_1", et = "_layerCardAttributionWrapper_1hhfw_11", rt = "_layerCardAttribution_1hhfw_11", nt = "_layerCardHeader_1hhfw_23", tt = "_layerCardTextWrapper_1hhfw_32", at = "_layerCardTitle_1hhfw_40", ot = "_layerCardDescription_1hhfw_48", it = "_layerCardControls_1hhfw_55", st = "_layerCardToggle_1hhfw_60", lt = "_layerCardContent_1hhfw_65", ct = "_layerCardInfoIcon_1hhfw_83", fe = {
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
  onChange: s,
  attribution: c,
  description: y,
  children: p
}) => {
  const [g, h] = de(!1), m = c && !!c.text;
  return /* @__PURE__ */ t.jsxs("div", { className: fe.layerCard, children: [
    /* @__PURE__ */ t.jsxs("div", { className: fe.layerCardHeader, children: [
      /* @__PURE__ */ t.jsx("div", { className: fe.layerCardTextWrapper, children: /* @__PURE__ */ t.jsx("span", { className: fe.layerCardTitle, children: n }) }),
      /* @__PURE__ */ t.jsxs(gn, { delay: 300, children: [
        /* @__PURE__ */ t.jsx(bn, { children: "Toggle layer description" }),
        (y || m) && /* @__PURE__ */ t.jsx(
          Ne,
          {
            className: fe.layerCardInfoIcon,
            onClick: () => h(!g),
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
      s && /* @__PURE__ */ t.jsx(
        Mr,
        {
          layerName: n,
          isActive: r,
          onChange: s
        }
      )
    ] }),
    g && /* @__PURE__ */ t.jsxs("div", { className: fe.layerCardContent, children: [
      y && /* @__PURE__ */ t.jsx("span", { className: fe.layerCardDescription, children: y }),
      m && /* @__PURE__ */ t.jsx("div", { className: fe.layerCardAttributionWrapper, children: /* @__PURE__ */ t.jsxs("span", { className: fe.layerCardAttribution, children: [
        "Source:",
        " ",
        /* @__PURE__ */ t.jsx("a", { href: c.url, children: c.text })
      ] }) }),
      p && p
    ] })
  ] });
};
ut.propTypes = {
  layerName: i.string.isRequired,
  isActive: i.bool,
  onChange: i.func.isRequired,
  description: i.string,
  attribution: i.objectOf({
    url: i.string,
    text: i.string
  }),
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ])
};
const ft = "_swatchContainer_771fp_2", dt = "_swatch_771fp_2", pt = "_swatchLabel_771fp_18", vt = "_swatchValue_771fp_24", $e = {
  swatchContainer: ft,
  swatch: dt,
  swatchLabel: pt,
  swatchValue: vt
}, yt = ({ color: n, label: r = "", value: s, units: c = "" }) => /* @__PURE__ */ t.jsxs("div", { className: $e.swatchContainer, children: [
  /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: $e.swatch,
      style: { backgroundColor: n }
    }
  ),
  /* @__PURE__ */ t.jsx("div", { "data-testid": "swatch-label", className: $e.swatchLabel, children: r }),
  /* @__PURE__ */ t.jsx("div", { "data-testid": "swatch-value", className: $e.swatchValue, children: s !== void 0 && `${s}${c}` })
] }), ht = "_swatchLegend_qiaru_1", mt = {
  swatchLegend: ht
}, _t = ({ swatches: n }) => /* @__PURE__ */ t.jsx("div", { className: mt.swatchLegend, children: n && n.map((r) => {
  const { color: s, label: c, value: y, units: p } = r;
  return /* @__PURE__ */ t.jsx(
    yt,
    {
      label: c,
      color: s,
      value: y,
      units: p
    },
    c
  );
}) });
_t.propTypes = {
  swatches: i.arrayOf(i.objectOf(i.string)).isRequired
};
const gt = "_slider_1bnet_1", bt = "_sliderLabel_1bnet_16", xt = "_sliderThumb_1bnet_20", Tt = "_sliderTrack_1bnet_41", wt = "_comparisonControl_1bnet_66", Re = {
  slider: gt,
  sliderLabel: bt,
  sliderThumb: xt,
  sliderTrack: Tt,
  comparisonControl: wt
}, Ra = ({
  label: n,
  showLabel: r = !0,
  onChange: s,
  value: c = 50,
  ...y
}) => /* @__PURE__ */ t.jsx("div", { className: Re.comparisonControl, children: /* @__PURE__ */ t.jsxs(Ar, { maxValue: 94, minValue: 6, step: 0.1, className: Re.slider, "aria-label": !r && typeof n == "string" ? n : void 0, onChange: s, value: c, ...y, children: [
  r && /* @__PURE__ */ t.jsx(Ze, { className: Re.sliderLabel, children: n }),
  /* @__PURE__ */ t.jsx(Ir, { className: Re.sliderTrack, children: /* @__PURE__ */ t.jsx(Nr, { className: Re.sliderThumb, children: /* @__PURE__ */ t.jsx(je, { color: "white", icon: yn }) }) })
] }) }), Ct = "_datePicker_ywin1_1 react-aria-DatePicker", Et = "_dateInput_ywin1_12 react-aria-DateInput", Rt = "_hoverDatepicker_ywin1_17", ze = {
  datePicker: Ct,
  dateInput: Et,
  hoverDatepicker: Rt
}, Je = (n) => new An(n.getFullYear(), n.getMonth() + 1, n.getDate()), Sa = ({
  label: n,
  helperText: r,
  errorMessage: s,
  value: c,
  onChange: y,
  "aria-label": p,
  "aria-labelledby": g,
  className: h,
  maxValue: m,
  minValue: l,
  ..._
}) => {
  const [b, P] = de(!1), { hoverProps: F, isHovered: U } = $n({}), q = c ? Je(c) : null, W = m ? Je(m) : null, H = l ? Je(l) : null, Y = (N) => {
    if (N) {
      const B = new Date(N.toString());
      y(B);
    } else
      y(null);
  };
  return /* @__PURE__ */ t.jsxs(
    xn,
    {
      className: `${ze.datePicker} ${h || ""}`.trim(),
      value: q,
      onChange: Y,
      "aria-label": p,
      "aria-labelledby": g,
      maxValue: W,
      minValue: H,
      ..._,
      children: [
        n && /* @__PURE__ */ t.jsx(Ze, { children: n }),
        /* @__PURE__ */ t.jsxs(Tn, { children: [
          /* @__PURE__ */ t.jsx(
            wn,
            {
              className: `${U || b ? ze.hoverDatepicker : ""} ${ze.dateInput}`.trim(),
              ...F,
              children: (N) => /* @__PURE__ */ t.jsx(Cn, { segment: N })
            }
          ),
          /* @__PURE__ */ t.jsx(
            Ne,
            {
              "aria-label": "Open calendar",
              onHoverChange: (N) => P(N),
              children: /* @__PURE__ */ t.jsx(je, { icon: hn })
            }
          )
        ] }),
        r && /* @__PURE__ */ t.jsx(En, { slot: "description", children: r }),
        s ? /* @__PURE__ */ t.jsx(vr, { children: s }) : /* @__PURE__ */ t.jsx(vr, {}),
        /* @__PURE__ */ t.jsx(Rn, { children: /* @__PURE__ */ t.jsx(Sn, { children: /* @__PURE__ */ t.jsxs(jn, { children: [
          /* @__PURE__ */ t.jsxs("header", { children: [
            /* @__PURE__ */ t.jsx(Ne, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ t.jsx(On, {}),
            /* @__PURE__ */ t.jsx(Ne, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ t.jsx(Pn, { children: (N) => /* @__PURE__ */ t.jsx(kn, { date: N }) })
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
  endColor: s = "yellow",
  startNo: c,
  endNo: y,
  titleBelow: p = !1,
  bins: g = 0,
  precision: h = 2,
  units: m
}) => {
  const l = g > 0 ? Array(g - 1).fill(0).map((_, b) => {
    const P = (c + (y - c) / g * (b + 1)).toPrecision(h);
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
            background: `linear-gradient(to right, ${r} , ${s})`
          }
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: Ae.gradientNumbers, children: [
        /* @__PURE__ */ t.jsxs("span", { children: [
          c,
          " ",
          m
        ] }),
        l,
        /* @__PURE__ */ t.jsxs("span", { children: [
          y,
          " ",
          m
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
  title: i.string,
  startColor: i.string,
  endColor: i.string,
  startNo: i.number,
  endNo: i.number,
  titleBelow: i.bool,
  bins: i.number,
  precision: i.number,
  units: i.string
};
const kt = "_slider_108mp_1", $t = "_sliderLabel_108mp_16", At = "_sliderThumb_108mp_20", It = "_sliderTrack_108mp_41", Ie = {
  slider: kt,
  sliderLabel: $t,
  sliderThumb: At,
  sliderTrack: It
}, Nt = ({
  className: n,
  label: r = "",
  onChange: s,
  minValue: c,
  maxValue: y,
  step: p,
  value: g = 0,
  showLabel: h,
  ...m
}) => /* @__PURE__ */ t.jsxs(Ar, { maxValue: y, minValue: c, step: p, className: `${Ie.slider} ${n || ""}`.trim(), "aria-label": !h && typeof r == "string" ? r : void 0, onChange: s, value: g, ...m, children: [
  h && /* @__PURE__ */ t.jsx(Ze, { className: Ie.sliderLabel, children: r }),
  /* @__PURE__ */ t.jsx(Ir, { className: Ie.sliderTrack, children: /* @__PURE__ */ t.jsx(Nr, { className: Ie.sliderThumb }) })
] }), Dt = "_layerGroupWrapper_1qzyk_1", Lt = "_layerGroupButton_1qzyk_5", Mt = "_layerGroupChevron_1qzyk_17", Wt = "_layerGroupName_1qzyk_30", qt = "_layerGroupChildren_1qzyk_42", Se = {
  layerGroupWrapper: Dt,
  layerGroupButton: Lt,
  layerGroupChevron: Mt,
  layerGroupName: Wt,
  layerGroupChildren: qt
}, Ft = ({ groupName: n, className: r, children: s }) => {
  const [c, y] = de(!1), p = () => {
    y(!c);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: Se.layerGroupWrapper + (r ? ` ${r}` : ""), children: [
    /* @__PURE__ */ t.jsxs("button", { type: "button", className: Se.layerGroupButton, onClick: p, children: [
      /* @__PURE__ */ t.jsx("span", { className: Se.layerGroupName, children: n }),
      /* @__PURE__ */ t.jsx("div", { className: Se.layerGroupChevron, children: /* @__PURE__ */ t.jsx(je, { size: "sm", fixedWidth: !0, icon: c ? mn : $r }) })
    ] }),
    c && /* @__PURE__ */ t.jsx("div", { className: Se.layerGroupChildren, children: s })
  ] });
};
Ft.propTypes = {
  groupName: i.string,
  className: i.string,
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired
};
const Yt = "_rangeSlider_1wewu_1", Vt = "_rangeSliderLabel_1wewu_14", Ht = "_rangeSliderValues_1wewu_19", Bt = "_rangeSliderMin_1wewu_28", Gt = "_rangeSliderMax_1wewu_32", Ut = "_rangeSliderContainer_1wewu_36", zt = "_rangeSliderTrack_1wewu_46", Jt = "_rangeSliderHandleBar_1wewu_55", Kt = "_rangeSliderHandleGroup_1wewu_65", Xt = "_rangeSliderHandleLeft_1wewu_75", Zt = "_rangeSliderHandleRight_1wewu_76", Qt = "_rangeSliderValue_1wewu_19", re = {
  rangeSlider: Yt,
  rangeSliderLabel: Vt,
  rangeSliderValues: Ht,
  rangeSliderMin: Bt,
  rangeSliderMax: Gt,
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
      let s = { lower: Math.max(r.bounds.min, n.lower), upper: Math.min(r.bounds.max, n.upper) };
      return r.step > 0 && (s = {
        lower: Math.max(r.bounds.min, Math.floor(n.lower / r.step) * r.step),
        upper: Math.min(r.bounds.max, Math.ceil(n.upper / r.step) * r.step)
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
const ra = ({ label: n, bounds: r, step: s = 0, valuesChanging: c, valuesChanged: y, currentValues: p = {}, showValues: g }) => {
  const h = Math.max(isNaN(p.lower) ? -1 / 0 : p.lower, r.min), m = Math.min(isNaN(p.upper) ? 1 / 0 : p.upper, r.max), [l, _] = ln(ea, { lower: h, upper: m }), b = cn(null), [P, F] = de(0), [U, q] = de(0), [W, H] = de("none"), [Y, N] = de(0), B = we((G) => {
    const S = (G - r.min) / (r.max - r.min);
    return b.current.clientWidth * S;
  }, [r]), d = we((G) => {
    const S = G / b.current.clientWidth;
    return r.min + (r.max - r.min) * S;
  }, [r]), te = we((G) => {
    const S = G / b.current.clientWidth;
    return (r.max - r.min) * S;
  }, [r]);
  Pe(() => {
    F(B(l.lower)), q(B(l.upper));
  }, [B, l]), Pe(() => {
    c && c(l);
  }, [l, c]), Pe(() => {
    _({
      type: "ChangeStep",
      callback: y,
      step: s,
      bounds: r
    });
  }, [s, y, r]);
  const ce = (G) => {
    G.preventDefault(), H(G.target.getAttribute("data-handle-id")), N(0);
  }, se = we((G) => {
    G.preventDefault(), H("none"), y && y(l);
  }, [l, y]), ie = we(
    (G) => {
      if (W === "none" || G.buttons === 0)
        return;
      G.preventDefault();
      let S = te(G.movementX);
      if (s !== 0) {
        let J = Y + S;
        if (N(J), Math.abs(J) < Math.abs(s))
          return;
        J > 0 ? (J -= Math.abs(s), S = Math.abs(s)) : (J += Math.abs(s), S = -Math.abs(s)), N(J);
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
      _({ type: "ChangeValues", values: z, bounds: r, step: s });
    },
    [
      W,
      r,
      te,
      l,
      Y,
      s
    ]
  );
  Pe(() => (W !== "none" ? (window.addEventListener("mousemove", ie), window.addEventListener("mouseup", se)) : (window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", se)), () => {
    window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", se);
  }), [W, ie, se]);
  const pe = (G) => {
    G.preventDefault();
    const S = d(G.nativeEvent.offsetX);
    S < l.lower ? _({ type: "ChangeValues", values: [S, l.upper], bounds: r, step: s, callback: y }) : S > l.upper && _({ type: "ChangeValues", values: [l.lower, S], bounds: r, step: s, callback: y });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: re.rangeSlider, children: [
    /* @__PURE__ */ t.jsx("div", { className: re.rangeSliderLabel, children: n }),
    /* @__PURE__ */ t.jsxs("div", { className: re.rangeSliderContainer, children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: re.rangeSliderTrack,
          ref: b,
          role: "none",
          tabIndex: "-1",
          onClick: pe
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
        g && /* @__PURE__ */ t.jsx("span", { className: re.rangeSliderValue, children: Math.round(l.lower) }),
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
        g && /* @__PURE__ */ t.jsx("span", { className: re.rangeSliderValue, children: Math.round(l.upper) }),
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
  label: i.string.isRequired,
  bounds: i.shape({
    min: i.number.isRequired,
    max: i.number.isRequired
  }),
  step: i.number,
  valuesChanging: i.func,
  valuesChanged: i.func,
  currentValues: i.shape({
    lower: i.number,
    upper: i.number
  }),
  showValues: i.bool
};
const na = "_mapWrapper_1gyf5_1", ta = "_mapContainer_1gyf5_10", Sr = {
  mapWrapper: na,
  mapContainer: ta
}, aa = ({ mapContainer: n, id: r, children: s }) => /* @__PURE__ */ t.jsxs("div", { className: Sr.mapWrapper, children: [
  /* @__PURE__ */ t.jsx("div", { className: Sr.mapContainer, id: r, ref: n }),
  s
] });
aa.propTypes = {
  mapContainer: i.oneOfType([
    i.func,
    i.shape({ current: i.instanceOf(Element) })
  ]),
  children: i.node,
  id: i.string
};
const oa = ({ children: n }) => /* @__PURE__ */ t.jsx("div", { className: "nav-container", children: n });
oa.propTypes = {
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
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
  const [s, c] = de(!1), y = `sidebar ${s ? "closed" : ""}`, p = () => {
    c(!s);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ t.jsx("div", { className: y, children: r }),
    n && /* @__PURE__ */ t.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ t.jsx(
      er,
      {
        onClick: p,
        iconName: s ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
pa.propTypes = {
  showToggle: i.bool,
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired
};
const va = ({ children: n }) => /* @__PURE__ */ t.jsx("div", { className: "layout-stacked", children: n });
va.propTypes = {
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired
};
const ya = ({ align: n = "left", hasFooter: r = !1, children: s }) => /* @__PURE__ */ t.jsx("div", { className: `layout-standard ${n}${r ? " footer" : ""}`, children: s });
ya.propTypes = {
  align: i.oneOf(["left", "right"]),
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired,
  hasFooter: i.bool
};
const ha = ({ hasFooter: n = !1, children: r }) => /* @__PURE__ */ t.jsx(
  "div",
  {
    className: n ? "layout-fullscreen-footer" : "layout-fullscreen",
    children: r
  }
);
ha.propTypes = {
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired,
  hasFooter: i.bool
};
const ma = "_sliderControlWrapper_2tznx_1", _a = "_sliderLabel_2tznx_9", Or = {
  sliderControlWrapper: ma,
  sliderLabel: _a
}, ga = ({ title: n, units: r, sliderConfig: s }) => /* @__PURE__ */ t.jsxs("div", { className: Or.sliderControlWrapper, children: [
  /* @__PURE__ */ t.jsx("div", { className: "ui-label", children: n }),
  /* @__PURE__ */ t.jsx("div", {}),
  s && s.map((c) => {
    const { label: y } = c;
    return /* @__PURE__ */ t.jsx("div", { className: Or.sliderLabel, children: y });
  }),
  s && s.map((c) => {
    const { onChange: y, min: p, max: g, step: h, value: m } = c;
    return /* @__PURE__ */ t.jsx(
      Nt,
      {
        onChange: y,
        units: r,
        min: p,
        max: g,
        step: h,
        value: m
      }
    );
  })
] });
ga.propTypes = {
  title: i.string.isRequired,
  units: i.string.isRequired,
  sliderConfig: i.arrayOf(i.objectOf(i.string)).isRequired
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
  Mr as LayerToggle,
  aa as MapContainer,
  oa as NavContainer,
  ra as RangeSlider,
  pa as SidebarContainer,
  Nt as SimpleSlider,
  ga as SliderControl,
  va as Stacked,
  ya as Standard,
  yt as Swatch,
  _t as SwatchLegend
};
