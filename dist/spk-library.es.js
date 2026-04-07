import Or, { useState as ye, useReducer as sn, useRef as ln, useCallback as Te, useEffect as Oe } from "react";
import { FontAwesomeIcon as Se } from "@fortawesome/react-fontawesome";
import { faChevronLeft as cn, faChevronRight as Pr, faEllipsisVertical as un, faFillDrip as fn, faInfo as kr, faFilter as dn, faTrash as pn, faArrowsLeftRight as vn, faCalendar as yn, faChevronDown as hn } from "@fortawesome/free-solid-svg-icons";
import { Switch as mn, TooltipTrigger as _n, Tooltip as gn, Button as Ae, Slider as $r, Label as Ke, SliderTrack as Ir, SliderThumb as Ar, DatePicker as bn, Group as xn, DateInput as Tn, DateSegment as wn, Text as En, FieldError as pr, Popover as Rn, Dialog as Cn, Calendar as Sn, Heading as jn, CalendarGrid as On, CalendarCell as Pn } from "react-aria-components";
import { useHover as kn } from "react-aria";
import { CalendarDate as $n } from "@internationalized/date";
import './index.css';function In(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ze = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function An() {
  if (vr) return we;
  vr = 1;
  var n = Or, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(h, _, l) {
    var m, g = {}, P = null, F = null;
    l !== void 0 && (P = "" + l), _.key !== void 0 && (P = "" + _.key), _.ref !== void 0 && (F = _.ref);
    for (m in _) c.call(_, m) && !p.hasOwnProperty(m) && (g[m] = _[m]);
    if (h && h.defaultProps) for (m in _ = h.defaultProps, _) g[m] === void 0 && (g[m] = _[m]);
    return { $$typeof: r, type: h, key: P, ref: F, props: g, _owner: y.current };
  }
  return we.Fragment = i, we.jsx = x, we.jsxs = x, we;
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
var yr;
function Nn() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Or, r = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), h = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), U = Symbol.iterator, q = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = U && e[U] || e[q];
      return typeof a == "function" ? a : null;
    }
    var V = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function H(e) {
      {
        for (var a = arguments.length, d = new Array(a > 1 ? a - 1 : 0), b = 1; b < a; b++)
          d[b - 1] = arguments[b];
        N("error", e, d);
      }
    }
    function N(e, a, d) {
      {
        var b = V.ReactDebugCurrentFrame, M = b.getStackAddendum();
        M !== "" && (a += "%s", d = d.concat([M]));
        var Y = d.map(function(I) {
          return String(I);
        });
        Y.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, Y);
      }
    }
    var G = !1, f = !1, te = !1, ce = !1, se = !1, ie;
    ie = Symbol.for("react.module.reference");
    function fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === p || se || e === y || e === l || e === m || ce || e === F || G || f || te || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === g || e.$$typeof === x || e.$$typeof === h || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function B(e, a, d) {
      var b = e.displayName;
      if (b)
        return b;
      var M = a.displayName || a.name || "";
      return M !== "" ? d + "(" + M + ")" : d;
    }
    function S(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && H("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
          case x:
            var d = e;
            return S(d._context) + ".Provider";
          case _:
            return B(e, e.render, "ForwardRef");
          case g:
            var b = e.displayName || null;
            return b !== null ? b : X(e.type) || "Memo";
          case P: {
            var M = e, Y = M._payload, I = M._init;
            try {
              return X(I(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, ue = 0, ne, le, de, he, o, v, C;
    function R() {
    }
    R.__reactDisabledLog = !0;
    function T() {
      {
        if (ue === 0) {
          ne = console.log, le = console.info, de = console.warn, he = console.error, o = console.group, v = console.groupCollapsed, C = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: R,
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
            log: z({}, e, {
              value: ne
            }),
            info: z({}, e, {
              value: le
            }),
            warn: z({}, e, {
              value: de
            }),
            error: z({}, e, {
              value: he
            }),
            group: z({}, e, {
              value: o
            }),
            groupCollapsed: z({}, e, {
              value: v
            }),
            groupEnd: z({}, e, {
              value: C
            })
          });
        }
        ue < 0 && H("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var w = V.ReactCurrentDispatcher, E;
    function j(e, a, d) {
      {
        if (E === void 0)
          try {
            throw Error();
          } catch (M) {
            var b = M.stack.trim().match(/\n( *(at )?)/);
            E = b && b[1] || "";
          }
        return `
` + E + e;
      }
    }
    var A = !1, O;
    {
      var Z = typeof WeakMap == "function" ? WeakMap : Map;
      O = new Z();
    }
    function u(e, a) {
      if (!e || A)
        return "";
      {
        var d = O.get(e);
        if (d !== void 0)
          return d;
      }
      var b;
      A = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = w.current, w.current = null, T();
      try {
        if (a) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (ee) {
              b = ee;
            }
            Reflect.construct(e, [], I);
          } else {
            try {
              I.call();
            } catch (ee) {
              b = ee;
            }
            e.call(I.prototype);
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
`), J = k.length - 1, K = Q.length - 1; J >= 1 && K >= 0 && k[J] !== Q[K]; )
            K--;
          for (; J >= 1 && K >= 0; J--, K--)
            if (k[J] !== Q[K]) {
              if (J !== 1 || K !== 1)
                do
                  if (J--, K--, K < 0 || k[J] !== Q[K]) {
                    var oe = `
` + k[J].replace(" at new ", " at ");
                    return e.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", e.displayName)), typeof e == "function" && O.set(e, oe), oe;
                  }
                while (J >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        A = !1, w.current = Y, $(), Error.prepareStackTrace = M;
      }
      var ge = e ? e.displayName || e.name : "", ve = ge ? j(ge) : "";
      return typeof e == "function" && O.set(e, ve), ve;
    }
    function ae(e, a, d) {
      return u(e, !1);
    }
    function me(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function pe(e, a, d) {
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
            return pe(e.type, a, d);
          case P: {
            var b = e, M = b._payload, Y = b._init;
            try {
              return pe(Y(M), a, d);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, Qe = {}, er = V.ReactDebugCurrentFrame;
    function je(e) {
      if (e) {
        var a = e._owner, d = pe(e.type, e._source, a ? a.type : null);
        er.setExtraStackFrame(d);
      } else
        er.setExtraStackFrame(null);
    }
    function Lr(e, a, d, b, M) {
      {
        var Y = Function.call.bind(xe);
        for (var I in e)
          if (Y(e, I)) {
            var k = void 0;
            try {
              if (typeof e[I] != "function") {
                var Q = Error((b || "React class") + ": " + d + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              k = e[I](a, I, b, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              k = J;
            }
            k && !(k instanceof Error) && (je(M), H("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", d, I, typeof k), je(null)), k instanceof Error && !(k.message in Qe) && (Qe[k.message] = !0, je(M), H("Failed %s type: %s", d, k.message), je(null));
          }
      }
    }
    var Wr = Array.isArray;
    function Ne(e) {
      return Wr(e);
    }
    function qr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, d = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d;
      }
    }
    function Fr(e) {
      try {
        return rr(e), !1;
      } catch {
        return !0;
      }
    }
    function rr(e) {
      return "" + e;
    }
    function nr(e) {
      if (Fr(e))
        return H("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qr(e)), rr(e);
    }
    var tr = V.ReactCurrentOwner, Yr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, or;
    function Vr(e) {
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
      typeof e.ref == "string" && tr.current;
    }
    function Br(e, a) {
      {
        var d = function() {
          ar || (ar = !0, H("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
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
          or || (or = !0, H("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var zr = function(e, a, d, b, M, Y, I) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: d,
        props: I,
        // Record the component responsible for creating this element.
        _owner: Y
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
        value: M
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Jr(e, a, d, b, M) {
      {
        var Y, I = {}, k = null, Q = null;
        d !== void 0 && (nr(d), k = "" + d), Hr(a) && (nr(a.key), k = "" + a.key), Vr(a) && (Q = a.ref, Gr(a, M));
        for (Y in a)
          xe.call(a, Y) && !Yr.hasOwnProperty(Y) && (I[Y] = a[Y]);
        if (e && e.defaultProps) {
          var J = e.defaultProps;
          for (Y in J)
            I[Y] === void 0 && (I[Y] = J[Y]);
        }
        if (k || Q) {
          var K = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && Br(I, K), Q && Ur(I, K);
        }
        return zr(e, k, Q, M, b, tr.current, I);
      }
    }
    var Me = V.ReactCurrentOwner, ir = V.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var a = e._owner, d = pe(e.type, e._source, a ? a.type : null);
        ir.setExtraStackFrame(d);
      } else
        ir.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function sr() {
      {
        if (Me.current) {
          var e = X(Me.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Kr(e) {
      return "";
    }
    var lr = {};
    function Xr(e) {
      {
        var a = sr();
        if (!a) {
          var d = typeof e == "string" ? e : e.displayName || e.name;
          d && (a = `

Check the top-level render call using <` + d + ">.");
        }
        return a;
      }
    }
    function cr(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var d = Xr(a);
        if (lr[d])
          return;
        lr[d] = !0;
        var b = "";
        e && e._owner && e._owner !== Me.current && (b = " It was passed a child from " + X(e._owner.type) + "."), _e(e), H('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, b), _e(null);
      }
    }
    function ur(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Ne(e))
          for (var d = 0; d < e.length; d++) {
            var b = e[d];
            Le(b) && cr(b, a);
          }
        else if (Le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var M = W(e);
          if (typeof M == "function" && M !== e.entries)
            for (var Y = M.call(e), I; !(I = Y.next()).done; )
              Le(I.value) && cr(I.value, a);
        }
      }
    }
    function Zr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var d;
        if (typeof a == "function")
          d = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === g))
          d = a.propTypes;
        else
          return;
        if (d) {
          var b = X(a);
          Lr(d, e.props, "prop", b, e);
        } else if (a.PropTypes !== void 0 && !De) {
          De = !0;
          var M = X(a);
          H("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && H("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qr(e) {
      {
        for (var a = Object.keys(e.props), d = 0; d < a.length; d++) {
          var b = a[d];
          if (b !== "children" && b !== "key") {
            _e(e), H("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), _e(null);
            break;
          }
        }
        e.ref !== null && (_e(e), H("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var fr = {};
    function dr(e, a, d, b, M, Y) {
      {
        var I = fe(e);
        if (!I) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Kr();
          Q ? k += Q : k += sr();
          var J;
          e === null ? J = "null" : Ne(e) ? J = "array" : e !== void 0 && e.$$typeof === r ? (J = "<" + (X(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : J = typeof e, H("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, k);
        }
        var K = Jr(e, a, d, M, Y);
        if (K == null)
          return K;
        if (I) {
          var oe = a.children;
          if (oe !== void 0)
            if (b)
              if (Ne(oe)) {
                for (var ge = 0; ge < oe.length; ge++)
                  ur(oe[ge], e);
                Object.freeze && Object.freeze(oe);
              } else
                H("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(oe, e);
        }
        if (xe.call(a, "key")) {
          var ve = X(e), ee = Object.keys(a).filter(function(on) {
            return on !== "key";
          }), We = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fr[ve + We]) {
            var an = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            H(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, We, ve, an, ve), fr[ve + We] = !0;
          }
        }
        return e === c ? Qr(K) : Zr(K), K;
      }
    }
    function en(e, a, d) {
      return dr(e, a, d, !0);
    }
    function rn(e, a, d) {
      return dr(e, a, d, !1);
    }
    var nn = rn, tn = en;
    Ee.Fragment = c, Ee.jsx = nn, Ee.jsxs = tn;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? ze.exports = An() : ze.exports = Nn();
var t = ze.exports, Je = { exports: {} }, Pe = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function Mn() {
  if (hr) return D;
  hr = 1;
  var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, y = n ? Symbol.for("react.strict_mode") : 60108, p = n ? Symbol.for("react.profiler") : 60114, x = n ? Symbol.for("react.provider") : 60109, h = n ? Symbol.for("react.context") : 60110, _ = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, m = n ? Symbol.for("react.forward_ref") : 60112, g = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, F = n ? Symbol.for("react.memo") : 60115, U = n ? Symbol.for("react.lazy") : 60116, q = n ? Symbol.for("react.block") : 60121, W = n ? Symbol.for("react.fundamental") : 60117, V = n ? Symbol.for("react.responder") : 60118, H = n ? Symbol.for("react.scope") : 60119;
  function N(f) {
    if (typeof f == "object" && f !== null) {
      var te = f.$$typeof;
      switch (te) {
        case r:
          switch (f = f.type, f) {
            case _:
            case l:
            case c:
            case p:
            case y:
            case g:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case h:
                case m:
                case U:
                case F:
                case x:
                  return f;
                default:
                  return te;
              }
          }
        case i:
          return te;
      }
    }
  }
  function G(f) {
    return N(f) === l;
  }
  return D.AsyncMode = _, D.ConcurrentMode = l, D.ContextConsumer = h, D.ContextProvider = x, D.Element = r, D.ForwardRef = m, D.Fragment = c, D.Lazy = U, D.Memo = F, D.Portal = i, D.Profiler = p, D.StrictMode = y, D.Suspense = g, D.isAsyncMode = function(f) {
    return G(f) || N(f) === _;
  }, D.isConcurrentMode = G, D.isContextConsumer = function(f) {
    return N(f) === h;
  }, D.isContextProvider = function(f) {
    return N(f) === x;
  }, D.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, D.isForwardRef = function(f) {
    return N(f) === m;
  }, D.isFragment = function(f) {
    return N(f) === c;
  }, D.isLazy = function(f) {
    return N(f) === U;
  }, D.isMemo = function(f) {
    return N(f) === F;
  }, D.isPortal = function(f) {
    return N(f) === i;
  }, D.isProfiler = function(f) {
    return N(f) === p;
  }, D.isStrictMode = function(f) {
    return N(f) === y;
  }, D.isSuspense = function(f) {
    return N(f) === g;
  }, D.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === c || f === l || f === p || f === y || f === g || f === P || typeof f == "object" && f !== null && (f.$$typeof === U || f.$$typeof === F || f.$$typeof === x || f.$$typeof === h || f.$$typeof === m || f.$$typeof === W || f.$$typeof === V || f.$$typeof === H || f.$$typeof === q);
  }, D.typeOf = N, D;
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
var mr;
function Dn() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, y = n ? Symbol.for("react.strict_mode") : 60108, p = n ? Symbol.for("react.profiler") : 60114, x = n ? Symbol.for("react.provider") : 60109, h = n ? Symbol.for("react.context") : 60110, _ = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, m = n ? Symbol.for("react.forward_ref") : 60112, g = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, F = n ? Symbol.for("react.memo") : 60115, U = n ? Symbol.for("react.lazy") : 60116, q = n ? Symbol.for("react.block") : 60121, W = n ? Symbol.for("react.fundamental") : 60117, V = n ? Symbol.for("react.responder") : 60118, H = n ? Symbol.for("react.scope") : 60119;
    function N(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === c || u === l || u === p || u === y || u === g || u === P || typeof u == "object" && u !== null && (u.$$typeof === U || u.$$typeof === F || u.$$typeof === x || u.$$typeof === h || u.$$typeof === m || u.$$typeof === W || u.$$typeof === V || u.$$typeof === H || u.$$typeof === q);
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
                  case x:
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
    var f = _, te = l, ce = h, se = x, ie = r, fe = m, B = c, S = U, X = F, z = i, ue = p, ne = y, le = g, de = !1;
    function he(u) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(u) || G(u) === _;
    }
    function o(u) {
      return G(u) === l;
    }
    function v(u) {
      return G(u) === h;
    }
    function C(u) {
      return G(u) === x;
    }
    function R(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function T(u) {
      return G(u) === m;
    }
    function $(u) {
      return G(u) === c;
    }
    function w(u) {
      return G(u) === U;
    }
    function E(u) {
      return G(u) === F;
    }
    function j(u) {
      return G(u) === i;
    }
    function A(u) {
      return G(u) === p;
    }
    function O(u) {
      return G(u) === y;
    }
    function Z(u) {
      return G(u) === g;
    }
    L.AsyncMode = f, L.ConcurrentMode = te, L.ContextConsumer = ce, L.ContextProvider = se, L.Element = ie, L.ForwardRef = fe, L.Fragment = B, L.Lazy = S, L.Memo = X, L.Portal = z, L.Profiler = ue, L.StrictMode = ne, L.Suspense = le, L.isAsyncMode = he, L.isConcurrentMode = o, L.isContextConsumer = v, L.isContextProvider = C, L.isElement = R, L.isForwardRef = T, L.isFragment = $, L.isLazy = w, L.isMemo = E, L.isPortal = j, L.isProfiler = A, L.isStrictMode = O, L.isSuspense = Z, L.isValidElementType = N, L.typeOf = G;
  }()), L;
}
var _r;
function Nr() {
  return _r || (_r = 1, process.env.NODE_ENV === "production" ? Pe.exports = Mn() : Pe.exports = Dn()), Pe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var qe, gr;
function Ln() {
  if (gr) return qe;
  gr = 1;
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
      for (var x = {}, h = 0; h < 10; h++)
        x["_" + String.fromCharCode(h)] = h;
      var _ = Object.getOwnPropertyNames(x).map(function(m) {
        return x[m];
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
  return qe = y() ? Object.assign : function(p, x) {
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
  }, qe;
}
var Fe, br;
function Xe() {
  if (br) return Fe;
  br = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fe = n, Fe;
}
var Ye, xr;
function Mr() {
  return xr || (xr = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var Ve, Tr;
function Wn() {
  if (Tr) return Ve;
  Tr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Xe(), i = {}, c = Mr();
    n = function(p) {
      var x = "Warning: " + p;
      typeof console < "u" && console.error(x);
      try {
        throw new Error(x);
      } catch {
      }
    };
  }
  function y(p, x, h, _, l) {
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
            g = p[m](x, m, _, h, null, r);
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
  }, Ve = y, Ve;
}
var He, wr;
function qn() {
  if (wr) return He;
  wr = 1;
  var n = Nr(), r = Ln(), i = Xe(), c = Mr(), y = Wn(), p = function() {
  };
  process.env.NODE_ENV !== "production" && (p = function(h) {
    var _ = "Warning: " + h;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function x() {
    return null;
  }
  return He = function(h, _) {
    var l = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function g(o) {
      var v = o && (l && o[l] || o[m]);
      if (typeof v == "function")
        return v;
    }
    var P = "<<anonymous>>", F = {
      array: V("array"),
      bigint: V("bigint"),
      bool: V("boolean"),
      func: V("function"),
      number: V("number"),
      object: V("object"),
      string: V("string"),
      symbol: V("symbol"),
      any: H(),
      arrayOf: N,
      element: G(),
      elementType: f(),
      instanceOf: te,
      node: fe(),
      objectOf: se,
      oneOf: ce,
      oneOfType: ie,
      shape: S,
      exact: X
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
        var v = {}, C = 0;
      function R($, w, E, j, A, O, Z) {
        if (j = j || P, O = O || E, Z !== i) {
          if (_) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = j + ":" + E;
            !v[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ae] = !0, C++);
          }
        }
        return w[E] == null ? $ ? w[E] === null ? new q("The " + A + " `" + O + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new q("The " + A + " `" + O + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : o(w, E, j, A, O);
      }
      var T = R.bind(null, !1);
      return T.isRequired = R.bind(null, !0), T;
    }
    function V(o) {
      function v(C, R, T, $, w, E) {
        var j = C[R], A = ne(j);
        if (A !== o) {
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
    function H() {
      return W(x);
    }
    function N(o) {
      function v(C, R, T, $, w) {
        if (typeof o != "function")
          return new q("Property `" + w + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var E = C[R];
        if (!Array.isArray(E)) {
          var j = ne(E);
          return new q("Invalid " + $ + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an array."));
        }
        for (var A = 0; A < E.length; A++) {
          var O = o(E, A, T, $, w + "[" + A + "]", i);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return W(v);
    }
    function G() {
      function o(v, C, R, T, $) {
        var w = v[C];
        if (!h(w)) {
          var E = ne(w);
          return new q("Invalid " + T + " `" + $ + "` of type " + ("`" + E + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(o);
    }
    function f() {
      function o(v, C, R, T, $) {
        var w = v[C];
        if (!n.isValidElementType(w)) {
          var E = ne(w);
          return new q("Invalid " + T + " `" + $ + "` of type " + ("`" + E + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(o);
    }
    function te(o) {
      function v(C, R, T, $, w) {
        if (!(C[R] instanceof o)) {
          var E = o.name || P, j = he(C[R]);
          return new q("Invalid " + $ + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected ") + ("instance of `" + E + "`."));
        }
        return null;
      }
      return W(v);
    }
    function ce(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), x;
      function v(C, R, T, $, w) {
        for (var E = C[R], j = 0; j < o.length; j++)
          if (U(E, o[j]))
            return null;
        var A = JSON.stringify(o, function(Z, u) {
          var ae = le(u);
          return ae === "symbol" ? String(u) : u;
        });
        return new q("Invalid " + $ + " `" + w + "` of value `" + String(E) + "` " + ("supplied to `" + T + "`, expected one of " + A + "."));
      }
      return W(v);
    }
    function se(o) {
      function v(C, R, T, $, w) {
        if (typeof o != "function")
          return new q("Property `" + w + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var E = C[R], j = ne(E);
        if (j !== "object")
          return new q("Invalid " + $ + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an object."));
        for (var A in E)
          if (c(E, A)) {
            var O = o(E, A, T, $, w + "." + A, i);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return W(v);
    }
    function ie(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), x;
      for (var v = 0; v < o.length; v++) {
        var C = o[v];
        if (typeof C != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(C) + " at index " + v + "."
          ), x;
      }
      function R(T, $, w, E, j) {
        for (var A = [], O = 0; O < o.length; O++) {
          var Z = o[O], u = Z(T, $, w, E, j, i);
          if (u == null)
            return null;
          u.data && c(u.data, "expectedType") && A.push(u.data.expectedType);
        }
        var ae = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new q("Invalid " + E + " `" + j + "` supplied to " + ("`" + w + "`" + ae + "."));
      }
      return W(R);
    }
    function fe() {
      function o(v, C, R, T, $) {
        return z(v[C]) ? null : new q("Invalid " + T + " `" + $ + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return W(o);
    }
    function B(o, v, C, R, T) {
      return new q(
        (o || "React class") + ": " + v + " type `" + C + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function S(o) {
      function v(C, R, T, $, w) {
        var E = C[R], j = ne(E);
        if (j !== "object")
          return new q("Invalid " + $ + " `" + w + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var A in o) {
          var O = o[A];
          if (typeof O != "function")
            return B(T, $, w, A, le(O));
          var Z = O(E, A, T, $, w + "." + A, i);
          if (Z)
            return Z;
        }
        return null;
      }
      return W(v);
    }
    function X(o) {
      function v(C, R, T, $, w) {
        var E = C[R], j = ne(E);
        if (j !== "object")
          return new q("Invalid " + $ + " `" + w + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        var A = r({}, C[R], o);
        for (var O in A) {
          var Z = o[O];
          if (c(o, O) && typeof Z != "function")
            return B(T, $, w, O, le(Z));
          if (!Z)
            return new q(
              "Invalid " + $ + " `" + w + "` key `" + O + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(C[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var u = Z(E, O, T, $, w + "." + O, i);
          if (u)
            return u;
        }
        return null;
      }
      return W(v);
    }
    function z(o) {
      switch (typeof o) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !o;
        case "object":
          if (Array.isArray(o))
            return o.every(z);
          if (o === null || h(o))
            return !0;
          var v = g(o);
          if (v) {
            var C = v.call(o), R;
            if (v !== o.entries) {
              for (; !(R = C.next()).done; )
                if (!z(R.value))
                  return !1;
            } else
              for (; !(R = C.next()).done; ) {
                var T = R.value;
                if (T && !z(T[1]))
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
  }, He;
}
var Ge, Er;
function Fn() {
  if (Er) return Ge;
  Er = 1;
  var n = Xe();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, Ge = function() {
    function c(x, h, _, l, m, g) {
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
  }, Ge;
}
if (process.env.NODE_ENV !== "production") {
  var Yn = Nr(), Vn = !0;
  Je.exports = qn()(Yn.isElement, Vn);
} else
  Je.exports = Fn()();
var Hn = Je.exports;
const s = /* @__PURE__ */ In(Hn), Gn = "_iconButton_1963e_1", Bn = {
  iconButton: Gn
}, Un = {
  trash: pn,
  filter: dn,
  info: kr,
  fill: fn,
  ellipsis: un,
  chevronRight: Pr,
  chevronLeft: cn
}, Ze = ({ onClick: n, iconName: r }) => /* @__PURE__ */ t.jsx("div", { className: Bn.iconButton, children: /* @__PURE__ */ t.jsx("button", { "aria-label": r, type: "button", onClick: n, children: /* @__PURE__ */ t.jsx(Se, { icon: Un[r] }) }) });
Ze.propTypes = {
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
const zn = "_layerButtonReel_1o59k_1", Jn = {
  layerButtonReel: zn
}, Kn = ({ buttons: n }) => /* @__PURE__ */ t.jsx("div", { className: Jn.layerButtonReel, children: n && Object.keys(n).map((r) => /* @__PURE__ */ t.jsx(Ze, { iconName: r, onClick: n[r] })) });
Kn.propTypes = {
  buttons: s.objectOf(s.func)
};
const Xn = "_indicator_1wt51_19", Rr = {
  switch: "_switch_1wt51_7",
  indicator: Xn
}, Dr = ({ layerName: n, isActive: r = !1, onChange: i, ...c }) => /* @__PURE__ */ t.jsx(mn, { ...c, className: Rr.switch, isSelected: r, onChange: i, "aria-label": n, value: n, children: /* @__PURE__ */ t.jsx("div", { className: Rr.indicator }) });
Dr.propTypes = {
  layerName: s.string,
  isActive: s.bool,
  onChange: s.func.isRequired,
  disabled: s.bool
};
const Zn = "_layerCard_1rjpx_1", Qn = "_layerCardHeader_1rjpx_23", et = "_layerCardTextWrapper_1rjpx_32", rt = "_layerCardTitle_1rjpx_40", nt = "_layerCardContent_1rjpx_65", tt = "_layerCardInfoIcon_1rjpx_83", be = {
  layerCard: Zn,
  layerCardHeader: Qn,
  layerCardTextWrapper: et,
  layerCardTitle: rt,
  layerCardContent: nt,
  layerCardInfoIcon: tt
}, at = ({
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
      /* @__PURE__ */ t.jsxs(_n, { delay: 300, children: [
        /* @__PURE__ */ t.jsx(gn, { children: "Toggle layer description" }),
        p && c && /* @__PURE__ */ t.jsx(
          Ae,
          {
            className: be.layerCardInfoIcon,
            onClick: c,
            children: /* @__PURE__ */ t.jsx(
              Se,
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
        Dr,
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
at.propTypes = {
  layerName: s.string.isRequired,
  isActive: s.bool,
  onChange: s.func.isRequired,
  onShowInfo: s.func,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ])
};
const ot = "_swatchContainer_771fp_2", it = "_swatch_771fp_2", st = "_swatchLabel_771fp_18", lt = "_swatchValue_771fp_24", ke = {
  swatchContainer: ot,
  swatch: it,
  swatchLabel: st,
  swatchValue: lt
}, ct = ({ color: n, label: r = "", value: i, units: c = "" }) => /* @__PURE__ */ t.jsxs("div", { className: ke.swatchContainer, children: [
  /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: ke.swatch,
      style: { backgroundColor: n }
    }
  ),
  /* @__PURE__ */ t.jsx("div", { "data-testid": "swatch-label", className: ke.swatchLabel, children: r }),
  /* @__PURE__ */ t.jsx("div", { "data-testid": "swatch-value", className: ke.swatchValue, children: i !== void 0 && `${i}${c}` })
] }), ut = "_swatchLegend_qiaru_1", ft = {
  swatchLegend: ut
}, dt = ({ swatches: n }) => /* @__PURE__ */ t.jsx("div", { className: ft.swatchLegend, children: n && n.map((r) => {
  const { color: i, label: c, value: y, units: p } = r;
  return /* @__PURE__ */ t.jsx(
    ct,
    {
      label: c,
      color: i,
      value: y,
      units: p
    },
    c
  );
}) });
dt.propTypes = {
  swatches: s.arrayOf(s.objectOf(s.string)).isRequired
};
const pt = "_slider_1bnet_1", vt = "_sliderLabel_1bnet_16", yt = "_sliderThumb_1bnet_20", ht = "_sliderTrack_1bnet_41", mt = "_comparisonControl_1bnet_66", Re = {
  slider: pt,
  sliderLabel: vt,
  sliderThumb: yt,
  sliderTrack: ht,
  comparisonControl: mt
}, ba = ({
  label: n,
  showLabel: r = !0,
  onChange: i,
  value: c = 50,
  ...y
}) => /* @__PURE__ */ t.jsx("div", { className: Re.comparisonControl, children: /* @__PURE__ */ t.jsxs($r, { maxValue: 94, minValue: 6, step: 0.1, className: Re.slider, "aria-label": !r && typeof n == "string" ? n : void 0, onChange: i, value: c, ...y, children: [
  r && /* @__PURE__ */ t.jsx(Ke, { className: Re.sliderLabel, children: n }),
  /* @__PURE__ */ t.jsx(Ir, { className: Re.sliderTrack, children: /* @__PURE__ */ t.jsx(Ar, { className: Re.sliderThumb, children: /* @__PURE__ */ t.jsx(Se, { color: "white", icon: vn }) }) })
] }) }), _t = "_datePicker_ywin1_1 react-aria-DatePicker", gt = "_dateInput_ywin1_12 react-aria-DateInput", bt = "_hoverDatepicker_ywin1_17", Be = {
  datePicker: _t,
  dateInput: gt,
  hoverDatepicker: bt
}, Ue = (n) => new $n(n.getFullYear(), n.getMonth() + 1, n.getDate()), xa = ({
  label: n,
  helperText: r,
  errorMessage: i,
  value: c,
  onChange: y,
  "aria-label": p,
  "aria-labelledby": x,
  className: h,
  maxValue: _,
  minValue: l,
  ...m
}) => {
  const [g, P] = ye(!1), { hoverProps: F, isHovered: U } = kn({}), q = c ? Ue(c) : null, W = _ ? Ue(_) : null, V = l ? Ue(l) : null, H = (N) => {
    if (N) {
      const G = new Date(N.toString());
      y(G);
    } else
      y(null);
  };
  return /* @__PURE__ */ t.jsxs(
    bn,
    {
      className: `${Be.datePicker} ${h || ""}`.trim(),
      value: q,
      onChange: H,
      "aria-label": p,
      "aria-labelledby": x,
      maxValue: W,
      minValue: V,
      ...m,
      children: [
        n && /* @__PURE__ */ t.jsx(Ke, { children: n }),
        /* @__PURE__ */ t.jsxs(xn, { children: [
          /* @__PURE__ */ t.jsx(
            Tn,
            {
              className: `${U || g ? Be.hoverDatepicker : ""} ${Be.dateInput}`.trim(),
              ...F,
              children: (N) => /* @__PURE__ */ t.jsx(wn, { segment: N })
            }
          ),
          /* @__PURE__ */ t.jsx(
            Ae,
            {
              "aria-label": "Open calendar",
              onHoverChange: (N) => P(N),
              children: /* @__PURE__ */ t.jsx(Se, { icon: yn })
            }
          )
        ] }),
        r && /* @__PURE__ */ t.jsx(En, { slot: "description", children: r }),
        i ? /* @__PURE__ */ t.jsx(pr, { children: i }) : /* @__PURE__ */ t.jsx(pr, {}),
        /* @__PURE__ */ t.jsx(Rn, { children: /* @__PURE__ */ t.jsx(Cn, { children: /* @__PURE__ */ t.jsxs(Sn, { children: [
          /* @__PURE__ */ t.jsxs("header", { children: [
            /* @__PURE__ */ t.jsx(Ae, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ t.jsx(jn, {}),
            /* @__PURE__ */ t.jsx(Ae, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ t.jsx(On, { children: (N) => /* @__PURE__ */ t.jsx(Pn, { date: N }) })
        ] }) }) })
      ]
    }
  );
}, xt = "_gradient_1w8qh_1", Tt = "_gradientNumbers_1w8qh_6", wt = "_gradientLegend_1w8qh_11", $e = {
  gradient: xt,
  gradientNumbers: Tt,
  gradientLegend: wt
}, Et = ({
  title: n,
  startColor: r = "red",
  endColor: i = "yellow",
  startNo: c,
  endNo: y,
  titleBelow: p = !1,
  bins: x = 0,
  precision: h = 2,
  units: _
}) => {
  const l = x > 0 ? Array(x - 1).fill(0).map((m, g) => {
    const P = (c + (y - c) / x * (g + 1)).toPrecision(h);
    return /* @__PURE__ */ t.jsx("span", { children: P }, P);
  }) : [];
  return /* @__PURE__ */ t.jsxs("div", { className: "gradient-box", children: [
    !p && /* @__PURE__ */ t.jsxs("div", { className: "ui-title", children: [
      " ",
      n
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: $e.gradientLegend, children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: $e.gradient,
          style: {
            background: `linear-gradient(to right, ${r} , ${i})`
          }
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: $e.gradientNumbers, children: [
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
      p && /* @__PURE__ */ t.jsxs("div", { className: $e.uiTitle, children: [
        " ",
        n
      ] })
    ] })
  ] });
};
Et.propTypes = {
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
const Rt = "_slider_108mp_1", Ct = "_sliderLabel_108mp_16", St = "_sliderThumb_108mp_20", jt = "_sliderTrack_108mp_41", Ie = {
  slider: Rt,
  sliderLabel: Ct,
  sliderThumb: St,
  sliderTrack: jt
}, Ot = ({
  className: n,
  label: r = "",
  onChange: i,
  minValue: c,
  maxValue: y,
  step: p,
  value: x = 0,
  showLabel: h,
  ..._
}) => /* @__PURE__ */ t.jsxs($r, { maxValue: y, minValue: c, step: p, className: `${Ie.slider} ${n || ""}`.trim(), "aria-label": !h && typeof r == "string" ? r : void 0, onChange: i, value: x, ..._, children: [
  h && /* @__PURE__ */ t.jsx(Ke, { className: Ie.sliderLabel, children: r }),
  /* @__PURE__ */ t.jsx(Ir, { className: Ie.sliderTrack, children: /* @__PURE__ */ t.jsx(Ar, { className: Ie.sliderThumb }) })
] }), Pt = "_layerGroupWrapper_1qzyk_1", kt = "_layerGroupButton_1qzyk_5", $t = "_layerGroupChevron_1qzyk_17", It = "_layerGroupName_1qzyk_30", At = "_layerGroupChildren_1qzyk_42", Ce = {
  layerGroupWrapper: Pt,
  layerGroupButton: kt,
  layerGroupChevron: $t,
  layerGroupName: It,
  layerGroupChildren: At
}, Nt = ({ groupName: n, className: r, children: i }) => {
  const [c, y] = ye(!1), p = () => {
    y(!c);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: Ce.layerGroupWrapper + (r ? ` ${r}` : ""), children: [
    /* @__PURE__ */ t.jsxs("button", { type: "button", className: Ce.layerGroupButton, onClick: p, children: [
      /* @__PURE__ */ t.jsx("span", { className: Ce.layerGroupName, children: n }),
      /* @__PURE__ */ t.jsx("div", { className: Ce.layerGroupChevron, children: /* @__PURE__ */ t.jsx(Se, { size: "sm", fixedWidth: !0, icon: c ? hn : Pr }) })
    ] }),
    c && /* @__PURE__ */ t.jsx("div", { className: Ce.layerGroupChildren, children: i })
  ] });
};
Nt.propTypes = {
  groupName: s.string,
  className: s.string,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Mt = "_rangeSlider_1wewu_1", Dt = "_rangeSliderLabel_1wewu_14", Lt = "_rangeSliderValues_1wewu_19", Wt = "_rangeSliderMin_1wewu_28", qt = "_rangeSliderMax_1wewu_32", Ft = "_rangeSliderContainer_1wewu_36", Yt = "_rangeSliderTrack_1wewu_46", Vt = "_rangeSliderHandleBar_1wewu_55", Ht = "_rangeSliderHandleGroup_1wewu_65", Gt = "_rangeSliderHandleLeft_1wewu_75", Bt = "_rangeSliderHandleRight_1wewu_76", Ut = "_rangeSliderValue_1wewu_19", re = {
  rangeSlider: Mt,
  rangeSliderLabel: Dt,
  rangeSliderValues: Lt,
  rangeSliderMin: Wt,
  rangeSliderMax: qt,
  rangeSliderContainer: Ft,
  rangeSliderTrack: Yt,
  rangeSliderHandleBar: Vt,
  rangeSliderHandleGroup: Ht,
  rangeSliderHandleLeft: Gt,
  rangeSliderHandleRight: Bt,
  rangeSliderValue: Ut
};
function zt(n, r) {
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
const Jt = ({ label: n, bounds: r, step: i = 0, valuesChanging: c, valuesChanged: y, currentValues: p = {}, showValues: x }) => {
  const h = Math.max(isNaN(p.lower) ? -1 / 0 : p.lower, r.min), _ = Math.min(isNaN(p.upper) ? 1 / 0 : p.upper, r.max), [l, m] = sn(zt, { lower: h, upper: _ }), g = ln(null), [P, F] = ye(0), [U, q] = ye(0), [W, V] = ye("none"), [H, N] = ye(0), G = Te((B) => {
    const S = (B - r.min) / (r.max - r.min);
    return g.current.clientWidth * S;
  }, [r]), f = Te((B) => {
    const S = B / g.current.clientWidth;
    return r.min + (r.max - r.min) * S;
  }, [r]), te = Te((B) => {
    const S = B / g.current.clientWidth;
    return (r.max - r.min) * S;
  }, [r]);
  Oe(() => {
    F(G(l.lower)), q(G(l.upper));
  }, [G, l]), Oe(() => {
    c && c(l);
  }, [l, c]), Oe(() => {
    m({
      type: "ChangeStep",
      callback: y,
      step: i,
      bounds: r
    });
  }, [i, y, r]);
  const ce = (B) => {
    B.preventDefault(), V(B.target.getAttribute("data-handle-id")), N(0);
  }, se = Te((B) => {
    B.preventDefault(), V("none"), y && y(l);
  }, [l, y]), ie = Te(
    (B) => {
      if (W === "none" || B.buttons === 0)
        return;
      B.preventDefault();
      let S = te(B.movementX);
      if (i !== 0) {
        let z = H + S;
        if (N(z), Math.abs(z) < Math.abs(i))
          return;
        z > 0 ? (z -= Math.abs(i), S = Math.abs(i)) : (z += Math.abs(i), S = -Math.abs(i)), N(z);
      }
      let X = [l.lower, l.upper];
      if (W === "left")
        l.lower + S < r.min && (S = r.min - l.lower), l.lower + S > l.upper ? (V("right"), X = [l.lower, l.lower + S]) : X = [l.lower + S, l.upper];
      else if (W === "right")
        l.upper + S > r.max && (S = r.max - l.upper), l.upper + S < l.lower ? (V("left"), X = [l.upper + S, l.upper]) : X = [l.lower, l.upper + S];
      else if (W === "bar")
        l.lower + S < r.min ? S = r.min - l.lower : l.upper + S > r.max && (S = r.max - l.upper), X = [l.lower + S, l.upper + S];
      else
        throw Error(`Unknown handle: ${W}`);
      m({ type: "ChangeValues", values: X, bounds: r, step: i });
    },
    [
      W,
      r,
      te,
      l,
      H,
      i
    ]
  );
  Oe(() => (W !== "none" ? (window.addEventListener("mousemove", ie), window.addEventListener("mouseup", se)) : (window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", se)), () => {
    window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", se);
  }), [W, ie, se]);
  const fe = (B) => {
    B.preventDefault();
    const S = f(B.nativeEvent.offsetX);
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
        x && /* @__PURE__ */ t.jsx("span", { className: re.rangeSliderValue, children: Math.round(l.lower) }),
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
        x && /* @__PURE__ */ t.jsx("span", { className: re.rangeSliderValue, children: Math.round(l.upper) }),
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
Jt.propTypes = {
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
const Kt = "_mapWrapper_1gyf5_1", Xt = "_mapContainer_1gyf5_10", Cr = {
  mapWrapper: Kt,
  mapContainer: Xt
}, Zt = ({ mapContainer: n, id: r, children: i }) => /* @__PURE__ */ t.jsxs("div", { className: Cr.mapWrapper, children: [
  /* @__PURE__ */ t.jsx("div", { className: Cr.mapContainer, id: r, ref: n }),
  i
] });
Zt.propTypes = {
  mapContainer: s.oneOfType([
    s.func,
    s.shape({ current: s.instanceOf(Element) })
  ]),
  children: s.node,
  id: s.string
};
const Qt = ({ children: n }) => /* @__PURE__ */ t.jsx("div", { className: "nav-container", children: n });
Qt.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const ea = "_infoPanelContainer_gnoj6_1", ra = "_topLeft_gnoj6_13", na = "_topRight_gnoj6_18", ta = "_centerLeft_gnoj6_23", aa = "_centerRight_gnoj6_28", oa = "_bottomLeft_gnoj6_33", ia = "_bottomRight_gnoj6_38", Sr = {
  infoPanelContainer: ea,
  topLeft: ra,
  topRight: na,
  centerLeft: ta,
  centerRight: aa,
  bottomLeft: oa,
  bottomRight: ia
}, Ta = ({ children: n, position: r = "centerRight" }) => /* @__PURE__ */ t.jsx("aside", { className: `${Sr.infoPanelContainer} ${Sr[r]}`, children: n }), sa = ({ showToggle: n, children: r }) => {
  const [i, c] = ye(!1), y = `sidebar ${i ? "closed" : ""}`, p = () => {
    c(!i);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ t.jsx("div", { className: y, children: r }),
    n && /* @__PURE__ */ t.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ t.jsx(
      Ze,
      {
        onClick: p,
        iconName: i ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
sa.propTypes = {
  showToggle: s.bool,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const la = ({ children: n }) => /* @__PURE__ */ t.jsx("div", { className: "layout-stacked", children: n });
la.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const ca = ({ align: n = "left", hasFooter: r = !1, children: i }) => /* @__PURE__ */ t.jsx("div", { className: `layout-standard ${n}${r ? " footer" : ""}`, children: i });
ca.propTypes = {
  align: s.oneOf(["left", "right"]),
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired,
  hasFooter: s.bool
};
const ua = ({ hasFooter: n = !1, children: r }) => /* @__PURE__ */ t.jsx(
  "div",
  {
    className: n ? "layout-fullscreen-footer" : "layout-fullscreen",
    children: r
  }
);
ua.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired,
  hasFooter: s.bool
};
const fa = "_sliderControlWrapper_2tznx_1", da = "_sliderLabel_2tznx_9", jr = {
  sliderControlWrapper: fa,
  sliderLabel: da
}, pa = ({ title: n, units: r, sliderConfig: i }) => /* @__PURE__ */ t.jsxs("div", { className: jr.sliderControlWrapper, children: [
  /* @__PURE__ */ t.jsx("div", { className: "ui-label", children: n }),
  /* @__PURE__ */ t.jsx("div", {}),
  i && i.map((c) => {
    const { label: y } = c;
    return /* @__PURE__ */ t.jsx("div", { className: jr.sliderLabel, children: y });
  }),
  i && i.map((c) => {
    const { onChange: y, min: p, max: x, step: h, value: _ } = c;
    return /* @__PURE__ */ t.jsx(
      Ot,
      {
        onChange: y,
        units: r,
        min: p,
        max: x,
        step: h,
        value: _
      }
    );
  })
] });
pa.propTypes = {
  title: s.string.isRequired,
  units: s.string.isRequired,
  sliderConfig: s.arrayOf(s.objectOf(s.string)).isRequired
};
export {
  ba as ComparisonControl,
  xa as DatePicker,
  ua as FullScreen,
  Et as GradientLegend,
  Ze as IconButton,
  Ta as InfoPanelContainer,
  Kn as LayerButtonReel,
  at as LayerCard,
  Nt as LayerGroup,
  Dr as LayerToggle,
  Zt as MapContainer,
  Qt as NavContainer,
  Jt as RangeSlider,
  sa as SidebarContainer,
  Ot as SimpleSlider,
  pa as SliderControl,
  la as Stacked,
  ca as Standard,
  ct as Swatch,
  dt as SwatchLegend
};
