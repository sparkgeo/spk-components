import Cr, { useState as ze } from "react";
import { FontAwesomeIcon as He } from "@fortawesome/react-fontawesome";
import { faTrash as Xr, faFilter as Zr, faInfo as Qr, faFillDrip as et, faEllipsisVertical as rt, faChevronRight as Rr, faChevronLeft as tt, faCalendar as nt, faChevronDown as at } from "@fortawesome/free-solid-svg-icons";
import { DatePicker as ot, Label as it, Group as st, DateInput as ct, DateSegment as lt, Button as De, Text as ut, FieldError as ft, Popover as dt, Dialog as pt, Calendar as vt, Heading as yt, CalendarGrid as ht, CalendarCell as mt } from "react-aria-components";
import { useHover as bt } from "react-aria";
function _t(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ue = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function gt() {
  if (dr) return Te;
  dr = 1;
  var r = Cr, p = Symbol.for("react.element"), f = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(y, h, T) {
    var b, C = {}, I = null, W = null;
    T !== void 0 && (I = "" + T), h.key !== void 0 && (I = "" + h.key), h.ref !== void 0 && (W = h.ref);
    for (b in h) u.call(h, b) && !d.hasOwnProperty(b) && (C[b] = h[b]);
    if (y && y.defaultProps) for (b in h = y.defaultProps, h) C[b] === void 0 && (C[b] = h[b]);
    return { $$typeof: p, type: y, key: I, ref: W, props: C, _owner: v.current };
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
var pr;
function Tt() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Cr, p = Symbol.for("react.element"), f = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), z = Symbol.iterator, L = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = z && e[z] || e[L];
      return typeof t == "function" ? t : null;
    }
    var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), m = 1; m < t; m++)
          i[m - 1] = arguments[m];
        U("error", e, i);
      }
    }
    function U(e, t, i) {
      {
        var m = G.ReactDebugCurrentFrame, $ = m.getStackAddendum();
        $ !== "" && (t += "%s", i = i.concat([$]));
        var M = i.map(function(A) {
          return String(A);
        });
        M.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var Y = !1, c = !1, ne = !1, he = !1, me = !1, ce;
    ce = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === d || me || e === v || e === T || e === b || he || e === W || Y || c || ne || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === C || e.$$typeof === g || e.$$typeof === y || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function le(e, t, i) {
      var m = e.displayName;
      if (m)
        return m;
      var $ = t.displayName || t.name || "";
      return $ !== "" ? i + "(" + $ + ")" : i;
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
        case u:
          return "Fragment";
        case f:
          return "Portal";
        case d:
          return "Profiler";
        case v:
          return "StrictMode";
        case T:
          return "Suspense";
        case b:
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
          case C:
            var m = e.displayName || null;
            return m !== null ? m : K(e.type) || "Memo";
          case I: {
            var $ = e, M = $._payload, A = $._init;
            try {
              return K(A(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, Q, te, oe, fe, n, l, j;
    function R() {
    }
    R.__reactDisabledLog = !0;
    function _() {
      {
        if (ae === 0) {
          Q = console.log, te = console.info, oe = console.warn, fe = console.error, n = console.group, l = console.groupCollapsed, j = console.groupEnd;
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
    var E = G.ReactCurrentDispatcher, x;
    function O(e, t, i) {
      {
        if (x === void 0)
          try {
            throw Error();
          } catch ($) {
            var m = $.stack.trim().match(/\n( *(at )?)/);
            x = m && m[1] || "";
          }
        return `
` + x + e;
      }
    }
    var k = !1, S;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      S = new H();
    }
    function o(e, t) {
      if (!e || k)
        return "";
      {
        var i = S.get(e);
        if (i !== void 0)
          return i;
      }
      var m;
      k = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = E.current, E.current = null, _();
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
              m = Z;
            }
            Reflect.construct(e, [], A);
          } else {
            try {
              A.call();
            } catch (Z) {
              m = Z;
            }
            e.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            m = Z;
          }
          e();
        }
      } catch (Z) {
        if (Z && m && typeof Z.stack == "string") {
          for (var w = Z.stack.split(`
`), J = m.stack.split(`
`), F = w.length - 1, B = J.length - 1; F >= 1 && B >= 0 && w[F] !== J[B]; )
            B--;
          for (; F >= 1 && B >= 0; F--, B--)
            if (w[F] !== J[B]) {
              if (F !== 1 || B !== 1)
                do
                  if (F--, B--, B < 0 || w[F] !== J[B]) {
                    var re = `
` + w[F].replace(" at new ", " at ");
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && S.set(e, re), re;
                  }
                while (F >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        k = !1, E.current = M, P(), Error.prepareStackTrace = $;
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
        case T:
          return O("Suspense");
        case b:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ee(e.render);
          case C:
            return ie(e.type, t, i);
          case I: {
            var m = e, $ = m._payload, M = m._init;
            try {
              return ie(M($), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, Qe = {}, er = G.ReactDebugCurrentFrame;
    function Ce(e) {
      if (e) {
        var t = e._owner, i = ie(e.type, e._source, t ? t.type : null);
        er.setExtraStackFrame(i);
      } else
        er.setExtraStackFrame(null);
    }
    function wr(e, t, i, m, $) {
      {
        var M = Function.call.bind(_e);
        for (var A in e)
          if (M(e, A)) {
            var w = void 0;
            try {
              if (typeof e[A] != "function") {
                var J = Error((m || "React class") + ": " + i + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              w = e[A](t, A, m, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              w = F;
            }
            w && !(w instanceof Error) && (Ce($), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", i, A, typeof w), Ce(null)), w instanceof Error && !(w.message in Qe) && (Qe[w.message] = !0, Ce($), q("Failed %s type: %s", i, w.message), Ce(null));
          }
      }
    }
    var Pr = Array.isArray;
    function we(e) {
      return Pr(e);
    }
    function Ar(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function kr(e) {
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
      if (kr(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(e)), rr(e);
    }
    var ge = G.ReactCurrentOwner, Ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nr, ar, Pe;
    Pe = {};
    function $r(e) {
      if (_e.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Dr(e) {
      if (_e.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Nr(e, t) {
      if (typeof e.ref == "string" && ge.current && t && ge.current.stateNode !== t) {
        var i = K(ge.current.type);
        Pe[i] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), e.ref), Pe[i] = !0);
      }
    }
    function Mr(e, t) {
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
    function Lr(e, t) {
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
    var Wr = function(e, t, i, m, $, M, A) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: A,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function qr(e, t, i, m, $) {
      {
        var M, A = {}, w = null, J = null;
        i !== void 0 && (tr(i), w = "" + i), Dr(t) && (tr(t.key), w = "" + t.key), $r(t) && (J = t.ref, Nr(t, $));
        for (M in t)
          _e.call(t, M) && !Ir.hasOwnProperty(M) && (A[M] = t[M]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (M in F)
            A[M] === void 0 && (A[M] = F[M]);
        }
        if (w || J) {
          var B = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && Mr(A, B), J && Lr(A, B);
        }
        return Wr(e, w, J, $, m, ge.current, A);
      }
    }
    var Ae = G.ReactCurrentOwner, or = G.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var t = e._owner, i = ie(e.type, e._source, t ? t.type : null);
        or.setExtraStackFrame(i);
      } else
        or.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function Ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function ir() {
      {
        if (Ae.current) {
          var e = K(Ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Fr(e) {
      return "";
    }
    var sr = {};
    function Yr(e) {
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
        var i = Yr(t);
        if (sr[i])
          return;
        sr[i] = !0;
        var m = "";
        e && e._owner && e._owner !== Ae.current && (m = " It was passed a child from " + K(e._owner.type) + "."), pe(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, m), pe(null);
      }
    }
    function lr(e, t) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var i = 0; i < e.length; i++) {
            var m = e[i];
            Ie(m) && cr(m, t);
          }
        else if (Ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var $ = V(e);
          if (typeof $ == "function" && $ !== e.entries)
            for (var M = $.call(e), A; !(A = M.next()).done; )
              Ie(A.value) && cr(A.value, t);
        }
      }
    }
    function Br(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var i;
        if (typeof t == "function")
          i = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === C))
          i = t.propTypes;
        else
          return;
        if (i) {
          var m = K(t);
          wr(i, e.props, "prop", m, e);
        } else if (t.PropTypes !== void 0 && !ke) {
          ke = !0;
          var $ = K(t);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gr(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var m = t[i];
          if (m !== "children" && m !== "key") {
            pe(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var ur = {};
    function fr(e, t, i, m, $, M) {
      {
        var A = be(e);
        if (!A) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Fr();
          J ? w += J : w += ir();
          var F;
          e === null ? F = "null" : we(e) ? F = "array" : e !== void 0 && e.$$typeof === p ? (F = "<" + (K(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, w);
        }
        var B = qr(e, t, i, $, M);
        if (B == null)
          return B;
        if (A) {
          var re = t.children;
          if (re !== void 0)
            if (m)
              if (we(re)) {
                for (var ve = 0; ve < re.length; ve++)
                  lr(re[ve], e);
                Object.freeze && Object.freeze(re);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr(re, e);
        }
        if (_e.call(t, "key")) {
          var se = K(e), Z = Object.keys(t).filter(function(Kr) {
            return Kr !== "key";
          }), $e = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[se + $e]) {
            var Jr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $e, se, Jr, se), ur[se + $e] = !0;
          }
        }
        return e === u ? Gr(B) : Br(B), B;
      }
    }
    function Ur(e, t, i) {
      return fr(e, t, i, !0);
    }
    function Vr(e, t, i) {
      return fr(e, t, i, !1);
    }
    var zr = Vr, Hr = Ur;
    Ee.Fragment = u, Ee.jsx = zr, Ee.jsxs = Hr;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ue.exports = gt() : Ue.exports = Tt();
var a = Ue.exports, Ve = { exports: {} }, Re = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function Et() {
  if (vr) return D;
  vr = 1;
  var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, T = r ? Symbol.for("react.concurrent_mode") : 60111, b = r ? Symbol.for("react.forward_ref") : 60112, C = r ? Symbol.for("react.suspense") : 60113, I = r ? Symbol.for("react.suspense_list") : 60120, W = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, L = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, G = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
  function U(c) {
    if (typeof c == "object" && c !== null) {
      var ne = c.$$typeof;
      switch (ne) {
        case p:
          switch (c = c.type, c) {
            case h:
            case T:
            case u:
            case d:
            case v:
            case C:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case y:
                case b:
                case z:
                case W:
                case g:
                  return c;
                default:
                  return ne;
              }
          }
        case f:
          return ne;
      }
    }
  }
  function Y(c) {
    return U(c) === T;
  }
  return D.AsyncMode = h, D.ConcurrentMode = T, D.ContextConsumer = y, D.ContextProvider = g, D.Element = p, D.ForwardRef = b, D.Fragment = u, D.Lazy = z, D.Memo = W, D.Portal = f, D.Profiler = d, D.StrictMode = v, D.Suspense = C, D.isAsyncMode = function(c) {
    return Y(c) || U(c) === h;
  }, D.isConcurrentMode = Y, D.isContextConsumer = function(c) {
    return U(c) === y;
  }, D.isContextProvider = function(c) {
    return U(c) === g;
  }, D.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === p;
  }, D.isForwardRef = function(c) {
    return U(c) === b;
  }, D.isFragment = function(c) {
    return U(c) === u;
  }, D.isLazy = function(c) {
    return U(c) === z;
  }, D.isMemo = function(c) {
    return U(c) === W;
  }, D.isPortal = function(c) {
    return U(c) === f;
  }, D.isProfiler = function(c) {
    return U(c) === d;
  }, D.isStrictMode = function(c) {
    return U(c) === v;
  }, D.isSuspense = function(c) {
    return U(c) === C;
  }, D.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === u || c === T || c === d || c === v || c === C || c === I || typeof c == "object" && c !== null && (c.$$typeof === z || c.$$typeof === W || c.$$typeof === g || c.$$typeof === y || c.$$typeof === b || c.$$typeof === V || c.$$typeof === G || c.$$typeof === q || c.$$typeof === L);
  }, D.typeOf = U, D;
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
var yr;
function xt() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, T = r ? Symbol.for("react.concurrent_mode") : 60111, b = r ? Symbol.for("react.forward_ref") : 60112, C = r ? Symbol.for("react.suspense") : 60113, I = r ? Symbol.for("react.suspense_list") : 60120, W = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, L = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, G = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
    function U(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === u || o === T || o === d || o === v || o === C || o === I || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === W || o.$$typeof === g || o.$$typeof === y || o.$$typeof === b || o.$$typeof === V || o.$$typeof === G || o.$$typeof === q || o.$$typeof === L);
    }
    function Y(o) {
      if (typeof o == "object" && o !== null) {
        var ee = o.$$typeof;
        switch (ee) {
          case p:
            var de = o.type;
            switch (de) {
              case h:
              case T:
              case u:
              case d:
              case v:
              case C:
                return de;
              default:
                var ie = de && de.$$typeof;
                switch (ie) {
                  case y:
                  case b:
                  case z:
                  case W:
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
    var c = h, ne = T, he = y, me = g, ce = p, be = b, le = u, ue = z, K = W, X = f, ae = d, Q = v, te = C, oe = !1;
    function fe(o) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(o) || Y(o) === h;
    }
    function n(o) {
      return Y(o) === T;
    }
    function l(o) {
      return Y(o) === y;
    }
    function j(o) {
      return Y(o) === g;
    }
    function R(o) {
      return typeof o == "object" && o !== null && o.$$typeof === p;
    }
    function _(o) {
      return Y(o) === b;
    }
    function P(o) {
      return Y(o) === u;
    }
    function E(o) {
      return Y(o) === z;
    }
    function x(o) {
      return Y(o) === W;
    }
    function O(o) {
      return Y(o) === f;
    }
    function k(o) {
      return Y(o) === d;
    }
    function S(o) {
      return Y(o) === v;
    }
    function H(o) {
      return Y(o) === C;
    }
    N.AsyncMode = c, N.ConcurrentMode = ne, N.ContextConsumer = he, N.ContextProvider = me, N.Element = ce, N.ForwardRef = be, N.Fragment = le, N.Lazy = ue, N.Memo = K, N.Portal = X, N.Profiler = ae, N.StrictMode = Q, N.Suspense = te, N.isAsyncMode = fe, N.isConcurrentMode = n, N.isContextConsumer = l, N.isContextProvider = j, N.isElement = R, N.isForwardRef = _, N.isFragment = P, N.isLazy = E, N.isMemo = x, N.isPortal = O, N.isProfiler = k, N.isStrictMode = S, N.isSuspense = H, N.isValidElementType = U, N.typeOf = Y;
  }()), N;
}
var hr;
function jr() {
  return hr || (hr = 1, process.env.NODE_ENV === "production" ? Re.exports = Et() : Re.exports = xt()), Re.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ne, mr;
function Ct() {
  if (mr) return Ne;
  mr = 1;
  var r = Object.getOwnPropertySymbols, p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function u(d) {
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
      for (var g = {}, y = 0; y < 10; y++)
        g["_" + String.fromCharCode(y)] = y;
      var h = Object.getOwnPropertyNames(g).map(function(b) {
        return g[b];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var T = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        T[b] = b;
      }), Object.keys(Object.assign({}, T)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ne = v() ? Object.assign : function(d, g) {
    for (var y, h = u(d), T, b = 1; b < arguments.length; b++) {
      y = Object(arguments[b]);
      for (var C in y)
        p.call(y, C) && (h[C] = y[C]);
      if (r) {
        T = r(y);
        for (var I = 0; I < T.length; I++)
          f.call(y, T[I]) && (h[T[I]] = y[T[I]]);
      }
    }
    return h;
  }, Ne;
}
var Me, br;
function Je() {
  if (br) return Me;
  br = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Me = r, Me;
}
var Le, _r;
function Or() {
  return _r || (_r = 1, Le = Function.call.bind(Object.prototype.hasOwnProperty)), Le;
}
var We, gr;
function Rt() {
  if (gr) return We;
  gr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var p = Je(), f = {}, u = Or();
    r = function(d) {
      var g = "Warning: " + d;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function v(d, g, y, h, T) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in d)
        if (u(d, b)) {
          var C;
          try {
            if (typeof d[b] != "function") {
              var I = Error(
                (h || "React class") + ": " + y + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw I.name = "Invariant Violation", I;
            }
            C = d[b](g, b, h, y, null, p);
          } catch (z) {
            C = z;
          }
          if (C && !(C instanceof Error) && r(
            (h || "React class") + ": type specification of " + y + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof C + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), C instanceof Error && !(C.message in f)) {
            f[C.message] = !0;
            var W = T ? T() : "";
            r(
              "Failed " + y + " type: " + C.message + (W ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, We = v, We;
}
var qe, Tr;
function jt() {
  if (Tr) return qe;
  Tr = 1;
  var r = jr(), p = Ct(), f = Je(), u = Or(), v = Rt(), d = function() {
  };
  process.env.NODE_ENV !== "production" && (d = function(y) {
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
  return qe = function(y, h) {
    var T = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function C(n) {
      var l = n && (T && n[T] || n[b]);
      if (typeof l == "function")
        return l;
    }
    var I = "<<anonymous>>", W = {
      array: G("array"),
      bigint: G("bigint"),
      bool: G("boolean"),
      func: G("function"),
      number: G("number"),
      object: G("object"),
      string: G("string"),
      symbol: G("symbol"),
      any: q(),
      arrayOf: U,
      element: Y(),
      elementType: c(),
      instanceOf: ne,
      node: be(),
      objectOf: me,
      oneOf: he,
      oneOfType: ce,
      shape: ue,
      exact: K
    };
    function z(n, l) {
      return n === l ? n !== 0 || 1 / n === 1 / l : n !== n && l !== l;
    }
    function L(n, l) {
      this.message = n, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    L.prototype = Error.prototype;
    function V(n) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, j = 0;
      function R(P, E, x, O, k, S, H) {
        if (O = O || I, S = S || x, H !== f) {
          if (h) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + x;
            !l[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (d(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ee] = !0, j++);
          }
        }
        return E[x] == null ? P ? E[x] === null ? new L("The " + k + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new L("The " + k + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : n(E, x, O, k, S);
      }
      var _ = R.bind(null, !1);
      return _.isRequired = R.bind(null, !0), _;
    }
    function G(n) {
      function l(j, R, _, P, E, x) {
        var O = j[R], k = Q(O);
        if (k !== n) {
          var S = te(O);
          return new L(
            "Invalid " + P + " `" + E + "` of type " + ("`" + S + "` supplied to `" + _ + "`, expected ") + ("`" + n + "`."),
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
    function U(n) {
      function l(j, R, _, P, E) {
        if (typeof n != "function")
          return new L("Property `" + E + "` of component `" + _ + "` has invalid PropType notation inside arrayOf.");
        var x = j[R];
        if (!Array.isArray(x)) {
          var O = Q(x);
          return new L("Invalid " + P + " `" + E + "` of type " + ("`" + O + "` supplied to `" + _ + "`, expected an array."));
        }
        for (var k = 0; k < x.length; k++) {
          var S = n(x, k, _, P, E + "[" + k + "]", f);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return V(l);
    }
    function Y() {
      function n(l, j, R, _, P) {
        var E = l[j];
        if (!y(E)) {
          var x = Q(E);
          return new L("Invalid " + _ + " `" + P + "` of type " + ("`" + x + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(n);
    }
    function c() {
      function n(l, j, R, _, P) {
        var E = l[j];
        if (!r.isValidElementType(E)) {
          var x = Q(E);
          return new L("Invalid " + _ + " `" + P + "` of type " + ("`" + x + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(n);
    }
    function ne(n) {
      function l(j, R, _, P, E) {
        if (!(j[R] instanceof n)) {
          var x = n.name || I, O = fe(j[R]);
          return new L("Invalid " + P + " `" + E + "` of type " + ("`" + O + "` supplied to `" + _ + "`, expected ") + ("instance of `" + x + "`."));
        }
        return null;
      }
      return V(l);
    }
    function he(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? d(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : d("Invalid argument supplied to oneOf, expected an array.")), g;
      function l(j, R, _, P, E) {
        for (var x = j[R], O = 0; O < n.length; O++)
          if (z(x, n[O]))
            return null;
        var k = JSON.stringify(n, function(H, o) {
          var ee = te(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new L("Invalid " + P + " `" + E + "` of value `" + String(x) + "` " + ("supplied to `" + _ + "`, expected one of " + k + "."));
      }
      return V(l);
    }
    function me(n) {
      function l(j, R, _, P, E) {
        if (typeof n != "function")
          return new L("Property `" + E + "` of component `" + _ + "` has invalid PropType notation inside objectOf.");
        var x = j[R], O = Q(x);
        if (O !== "object")
          return new L("Invalid " + P + " `" + E + "` of type " + ("`" + O + "` supplied to `" + _ + "`, expected an object."));
        for (var k in x)
          if (u(x, k)) {
            var S = n(x, k, _, P, E + "." + k, f);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return V(l);
    }
    function ce(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && d("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var l = 0; l < n.length; l++) {
        var j = n[l];
        if (typeof j != "function")
          return d(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(j) + " at index " + l + "."
          ), g;
      }
      function R(_, P, E, x, O) {
        for (var k = [], S = 0; S < n.length; S++) {
          var H = n[S], o = H(_, P, E, x, O, f);
          if (o == null)
            return null;
          o.data && u(o.data, "expectedType") && k.push(o.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new L("Invalid " + x + " `" + O + "` supplied to " + ("`" + E + "`" + ee + "."));
      }
      return V(R);
    }
    function be() {
      function n(l, j, R, _, P) {
        return X(l[j]) ? null : new L("Invalid " + _ + " `" + P + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return V(n);
    }
    function le(n, l, j, R, _) {
      return new L(
        (n || "React class") + ": " + l + " type `" + j + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _ + "`."
      );
    }
    function ue(n) {
      function l(j, R, _, P, E) {
        var x = j[R], O = Q(x);
        if (O !== "object")
          return new L("Invalid " + P + " `" + E + "` of type `" + O + "` " + ("supplied to `" + _ + "`, expected `object`."));
        for (var k in n) {
          var S = n[k];
          if (typeof S != "function")
            return le(_, P, E, k, te(S));
          var H = S(x, k, _, P, E + "." + k, f);
          if (H)
            return H;
        }
        return null;
      }
      return V(l);
    }
    function K(n) {
      function l(j, R, _, P, E) {
        var x = j[R], O = Q(x);
        if (O !== "object")
          return new L("Invalid " + P + " `" + E + "` of type `" + O + "` " + ("supplied to `" + _ + "`, expected `object`."));
        var k = p({}, j[R], n);
        for (var S in k) {
          var H = n[S];
          if (u(n, S) && typeof H != "function")
            return le(_, P, E, S, te(H));
          if (!H)
            return new L(
              "Invalid " + P + " `" + E + "` key `" + S + "` supplied to `" + _ + "`.\nBad object: " + JSON.stringify(j[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var o = H(x, S, _, P, E + "." + S, f);
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
          var l = C(n);
          if (l) {
            var j = l.call(n), R;
            if (l !== n.entries) {
              for (; !(R = j.next()).done; )
                if (!X(R.value))
                  return !1;
            } else
              for (; !(R = j.next()).done; ) {
                var _ = R.value;
                if (_ && !X(_[1]))
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
      return !n.constructor || !n.constructor.name ? I : n.constructor.name;
    }
    return W.checkPropTypes = v, W.resetWarningCache = v.resetWarningCache, W.PropTypes = W, W;
  }, qe;
}
var Fe, Er;
function Ot() {
  if (Er) return Fe;
  Er = 1;
  var r = Je();
  function p() {
  }
  function f() {
  }
  return f.resetWarningCache = p, Fe = function() {
    function u(g, y, h, T, b, C) {
      if (C !== r) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    u.isRequired = u;
    function v() {
      return u;
    }
    var d = {
      array: u,
      bigint: u,
      bool: u,
      func: u,
      number: u,
      object: u,
      string: u,
      symbol: u,
      any: u,
      arrayOf: v,
      element: u,
      elementType: u,
      instanceOf: v,
      node: u,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: f,
      resetWarningCache: p
    };
    return d.PropTypes = d, d;
  }, Fe;
}
if (process.env.NODE_ENV !== "production") {
  var St = jr(), wt = !0;
  Ve.exports = jt()(St.isElement, wt);
} else
  Ve.exports = Ot()();
var Pt = Ve.exports;
const s = /* @__PURE__ */ _t(Pt), At = "_iconButton_1963e_1", kt = {
  iconButton: At
}, It = {
  trash: Xr,
  filter: Zr,
  info: Qr,
  fill: et,
  ellipsis: rt,
  chevronRight: Rr,
  chevronLeft: tt
}, Se = ({ onClick: r, iconName: p }) => /* @__PURE__ */ a.jsx("div", { className: kt.iconButton, children: /* @__PURE__ */ a.jsx("button", { "aria-label": p, type: "button", onClick: r, children: /* @__PURE__ */ a.jsx(He, { icon: It[p] }) }) });
Se.propTypes = {
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
Se.defaultProps = {
  iconName: "ellipsis"
};
const $t = "_layerButtonReel_1o59k_1", Dt = {
  layerButtonReel: $t
}, Ke = ({ buttons: r }) => /* @__PURE__ */ a.jsx("div", { className: Dt.layerButtonReel, children: r && Object.keys(r).map((p) => /* @__PURE__ */ a.jsx(Se, { iconName: p, onClick: r[p] })) });
Ke.propTypes = {
  buttons: s.objectOf(s.func)
};
Ke.defaultProps = {
  buttons: null
};
const Nt = "_layerToggle_gvlf4_7", Mt = "_slider_gvlf4_29", Ye = {
  layerToggle: Nt,
  switch: "_switch_gvlf4_12",
  slider: Mt
}, Xe = ({ layerName: r, isActive: p, onChange: f }) => /* @__PURE__ */ a.jsx("div", { className: Ye.layerToggle, children: /* @__PURE__ */ a.jsxs("div", { className: Ye.switch, children: [
  /* @__PURE__ */ a.jsx(
    "input",
    {
      type: "checkbox",
      value: r,
      checked: p,
      onChange: f
    }
  ),
  /* @__PURE__ */ a.jsx("span", { className: Ye.slider })
] }) });
Xe.propTypes = {
  layerName: s.string,
  isActive: s.bool,
  onChange: s.func.isRequired
};
Xe.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const Lt = "_layerCard_mism4_1", Wt = "_layerCardWrapper_mism4_11", qt = "_layerCardTextWrapper_mism4_20", Ft = "_layerCardTitle_mism4_28", Yt = "_layerCardDescription_mism4_32", Bt = "_layerCardControls_mism4_37", Gt = "_layerCardToggle_mism4_42", Ut = "_layerCardChildren_mism4_47", ye = {
  layerCard: Lt,
  layerCardWrapper: Wt,
  layerCardTextWrapper: qt,
  layerCardTitle: Ft,
  layerCardDescription: Yt,
  layerCardControls: Bt,
  layerCardToggle: Gt,
  layerCardChildren: Ut
}, Vt = ({ layerName: r, isActive: p, onChange: f, buttons: u, description: v, children: d }) => /* @__PURE__ */ a.jsxs("div", { className: ye.layerCard, children: [
  /* @__PURE__ */ a.jsxs("div", { className: ye.layerCardWrapper, children: [
    /* @__PURE__ */ a.jsxs("div", { className: ye.layerCardTextWrapper, children: [
      /* @__PURE__ */ a.jsx("span", { className: ye.layerCardTitle, children: r }),
      /* @__PURE__ */ a.jsx("span", { className: ye.layerCardDescription, children: v })
    ] }),
    /* @__PURE__ */ a.jsx(Ke, { buttons: u }),
    f && /* @__PURE__ */ a.jsx(
      Xe,
      {
        layerName: r,
        isActive: p,
        onChange: f
      }
    )
  ] }),
  /* @__PURE__ */ a.jsx("div", { className: ye.layerCardChildren, children: d })
] });
Vt.propTypes = {
  layerName: s.string.isRequired,
  isActive: s.bool,
  onChange: s.func.isRequired,
  buttons: s.objectOf(s.func),
  description: s.string,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ])
};
const zt = "_swatchContainer_771fp_2", Ht = "_swatch_771fp_2", Jt = "_swatchLabel_771fp_18", Kt = "_swatchValue_771fp_24", je = {
  swatchContainer: zt,
  swatch: Ht,
  swatchLabel: Jt,
  swatchValue: Kt
}, Xt = ({ color: r, label: p = "", value: f, units: u = "" }) => /* @__PURE__ */ a.jsxs("div", { className: je.swatchContainer, children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: je.swatch,
      style: { backgroundColor: r }
    }
  ),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-label", className: je.swatchLabel, children: p }),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-value", className: je.swatchValue, children: f !== void 0 && `${f}${u}` })
] }), Zt = "_swatchLegend_qiaru_1", Qt = {
  swatchLegend: Zt
}, en = ({ swatches: r }) => /* @__PURE__ */ a.jsx("div", { className: Qt.swatchLegend, children: r && r.map((p) => {
  const { color: f, label: u, value: v, units: d } = p;
  return /* @__PURE__ */ a.jsx(
    Xt,
    {
      label: u,
      color: f,
      value: v,
      units: d
    },
    u
  );
}) });
en.propTypes = {
  swatches: s.arrayOf(s.objectOf(s.string)).isRequired
};
const rn = "_datePicker_cumrb_1 react-aria-DatePicker", tn = "_dateInput_cumrb_10 react-aria-DateInput", nn = "_hoverDatepicker_cumrb_14", Be = {
  datePicker: rn,
  dateInput: tn,
  hoverDatepicker: nn
}, Pn = ({
  label: r,
  helperText: p,
  errorMessage: f,
  value: u,
  onChange: v
}) => {
  const [d, g] = ze(!1), { hoverProps: y, isHovered: h } = bt({});
  return /* @__PURE__ */ a.jsxs(
    ot,
    {
      className: Be.datePicker,
      value: u,
      onChange: v,
      children: [
        /* @__PURE__ */ a.jsx(it, { children: r }),
        /* @__PURE__ */ a.jsxs(st, { children: [
          /* @__PURE__ */ a.jsx(
            ct,
            {
              className: `${Be.dateInput} ${h || d ? Be.hoverDatepicker : ""}`,
              ...y,
              children: (T) => /* @__PURE__ */ a.jsx(lt, { segment: T })
            }
          ),
          /* @__PURE__ */ a.jsx(
            De,
            {
              "aria-label": "Open calendar",
              onHoverChange: (T) => g(T),
              children: /* @__PURE__ */ a.jsx(He, { icon: nt })
            }
          )
        ] }),
        p && /* @__PURE__ */ a.jsx(ut, { slot: "description", children: p }),
        /* @__PURE__ */ a.jsx(ft, { children: f }),
        /* @__PURE__ */ a.jsx(dt, { children: /* @__PURE__ */ a.jsx(pt, { children: /* @__PURE__ */ a.jsxs(vt, { children: [
          /* @__PURE__ */ a.jsxs("header", { children: [
            /* @__PURE__ */ a.jsx(De, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ a.jsx(yt, {}),
            /* @__PURE__ */ a.jsx(De, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ a.jsx(ht, { children: (T) => /* @__PURE__ */ a.jsx(mt, { date: T }) })
        ] }) }) })
      ]
    }
  );
}, an = "_gradient_1w8qh_1", on = "_gradientNumbers_1w8qh_6", sn = "_gradientLegend_1w8qh_11", Oe = {
  gradient: an,
  gradientNumbers: on,
  gradientLegend: sn
}, cn = ({
  title: r,
  startColor: p = "red",
  endColor: f = "yellow",
  startNo: u,
  endNo: v,
  titleBelow: d = !1,
  bins: g = 0,
  precision: y = 2,
  units: h
}) => {
  const T = g > 0 ? Array(g - 1).fill(0).map((b, C) => {
    const I = (u + (v - u) / g * (C + 1)).toPrecision(y);
    return /* @__PURE__ */ a.jsx("span", { children: I }, I);
  }) : [];
  return /* @__PURE__ */ a.jsxs("div", { className: "gradient-box", children: [
    !d && /* @__PURE__ */ a.jsxs("div", { className: "ui-title", children: [
      " ",
      r
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: Oe.gradientLegend, children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Oe.gradient,
          style: {
            background: `linear-gradient(to right, ${p} , ${f})`
          }
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: Oe.gradientNumbers, children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          u,
          " ",
          h
        ] }),
        T,
        /* @__PURE__ */ a.jsxs("span", { children: [
          v,
          " ",
          h
        ] })
      ] }),
      d && /* @__PURE__ */ a.jsxs("div", { className: Oe.uiTitle, children: [
        " ",
        r
      ] })
    ] })
  ] });
};
cn.propTypes = {
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
const ln = "_simpleSlider_qj292_1", un = "_simpleSliderInput_qj292_7", fn = "_simpleSliderMinMaxContainer_qj292_11", Ge = {
  simpleSlider: ln,
  simpleSliderInput: un,
  simpleSliderMinMaxContainer: fn
}, Ze = ({
  units: r,
  label: p,
  onChange: f,
  min: u,
  max: v,
  step: d,
  value: g
}) => /* @__PURE__ */ a.jsxs("div", { className: Ge.simpleSlider, children: [
  /* @__PURE__ */ a.jsxs("div", { children: [
    p && /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: p }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        onChange: f,
        className: Ge.simpleSliderInput,
        type: "range",
        value: g,
        min: u,
        max: v,
        step: d
      }
    )
  ] }),
  /* @__PURE__ */ a.jsxs("div", { className: Ge.simpleSliderMinMaxContainer, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "ui-label", children: [
      u,
      r
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "ui-label", children: [
      v,
      r
    ] })
  ] })
] });
Ze.propTypes = {
  onChange: s.func.isRequired,
  min: s.number.isRequired,
  max: s.number.isRequired,
  step: s.number.isRequired,
  value: s.number,
  label: s.string,
  units: s.string
};
Ze.defaultProps = {
  value: 0,
  units: "",
  label: ""
};
const dn = "_layerGroupButton_1twxx_1", pn = "_layerGroupChevron_1twxx_12", vn = "_layerGroupName_1twxx_25", yn = "_layerGroupWrapper_1twxx_32", hn = "_layerGroupChildren_1twxx_32", xe = {
  layerGroupButton: dn,
  layerGroupChevron: pn,
  layerGroupName: vn,
  layerGroupWrapper: yn,
  layerGroupChildren: hn
}, mn = ({ groupName: r, children: p }) => {
  const [f, u] = ze(!1), v = () => {
    u(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: xe.layerGroupWrapper, children: [
    /* @__PURE__ */ a.jsxs("button", { type: "button", className: xe.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChevron, children: /* @__PURE__ */ a.jsx(He, { size: "md", fixedWidth: !0, icon: f ? at : Rr }) }),
      /* @__PURE__ */ a.jsx("span", { className: xe.layerGroupName, children: r })
    ] }),
    f && /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChildren, children: p })
  ] });
};
mn.propTypes = {
  groupName: s.string,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Sr = ({ mapContainer: r, id: p, children: f }) => /* @__PURE__ */ a.jsx("div", { className: "map-container", id: p, ref: r, children: f });
Sr.propTypes = {
  mapContainer: s.oneOfType([
    s.func,
    s.shape({ current: s.instanceOf(Element) })
  ]),
  children: s.node,
  id: s.string
};
Sr.defaultProps = {
  children: null,
  mapContainer: null,
  id: null
};
const bn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "nav-container", children: r });
bn.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const _n = ({ showToggle: r, children: p }) => {
  const [f, u] = ze(!1), v = `sidebar ${f ? "closed" : ""}`, d = () => {
    u(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ a.jsx("div", { className: v, children: p }),
    r && /* @__PURE__ */ a.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ a.jsx(
      Se,
      {
        onClick: d,
        iconName: f ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
_n.propTypes = {
  showToggle: s.bool,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const gn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "layout-stacked", children: r });
gn.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Tn = ({ align: r = "left", children: p }) => /* @__PURE__ */ a.jsx("div", { className: `layout-standard ${r}`, children: p });
Tn.propTypes = {
  align: s.oneOf(["left", "right"]),
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const En = "_sliderControlWrapper_2tznx_1", xn = "_sliderLabel_2tznx_9", xr = {
  sliderControlWrapper: En,
  sliderLabel: xn
}, Cn = ({ title: r, units: p, sliderConfig: f }) => /* @__PURE__ */ a.jsxs("div", { className: xr.sliderControlWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ a.jsx("div", {}),
  f && f.map((u) => {
    const { label: v } = u;
    return /* @__PURE__ */ a.jsx("div", { className: xr.sliderLabel, children: v });
  }),
  f && f.map((u) => {
    const { onChange: v, min: d, max: g, step: y, value: h } = u;
    return /* @__PURE__ */ a.jsx(
      Ze,
      {
        onChange: v,
        units: p,
        min: d,
        max: g,
        step: y,
        value: h
      }
    );
  })
] });
Cn.propTypes = {
  title: s.string.isRequired,
  units: s.string.isRequired,
  sliderConfig: s.arrayOf(s.objectOf(s.string)).isRequired
};
export {
  Pn as DatePicker,
  cn as GradientLegend,
  Se as IconButton,
  Ke as LayerButtonReel,
  Vt as LayerCard,
  mn as LayerGroup,
  Xe as LayerToggle,
  Sr as MapContainer,
  bn as NavContainer,
  _n as SidebarContainer,
  Ze as SimpleSlider,
  Cn as SliderControl,
  gn as Stacked,
  Tn as Standard,
  Xt as Swatch,
  en as SwatchLegend
};
