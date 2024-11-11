import _r, { useState as Tr } from "react";
import { FontAwesomeIcon as Er } from "@fortawesome/react-fontawesome";
import { faTrash as Kr, faFilter as Xr, faInfo as Hr, faFillDrip as Zr, faEllipsisVertical as Qr, faChevronRight as Rr, faChevronLeft as et, faChevronDown as rt } from "@fortawesome/free-solid-svg-icons";
function tt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ge = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function nt() {
  if (cr) return Te;
  cr = 1;
  var r = _r, p = Symbol.for("react.element"), f = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(y, b, j) {
    var m, R = {}, I = null, W = null;
    j !== void 0 && (I = "" + j), b.key !== void 0 && (I = "" + b.key), b.ref !== void 0 && (W = b.ref);
    for (m in b) u.call(b, m) && !d.hasOwnProperty(m) && (R[m] = b[m]);
    if (y && y.defaultProps) for (m in b = y.defaultProps, b) R[m] === void 0 && (R[m] = b[m]);
    return { $$typeof: p, type: y, key: I, ref: W, props: R, _owner: v.current };
  }
  return Te.Fragment = f, Te.jsx = E, Te.jsxs = E, Te;
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
var ur;
function at() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var r = _r, p = Symbol.for("react.element"), f = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), z = Symbol.iterator, L = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = z && e[z] || e[L];
      return typeof t == "function" ? t : null;
    }
    var B = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), h = 1; h < t; h++)
          o[h - 1] = arguments[h];
        U("error", e, o);
      }
    }
    function U(e, t, o) {
      {
        var h = B.ReactDebugCurrentFrame, $ = h.getStackAddendum();
        $ !== "" && (t += "%s", o = o.concat([$]));
        var M = o.map(function(A) {
          return String(A);
        });
        M.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var Y = !1, s = !1, ne = !1, he = !1, me = !1, ce;
    ce = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === d || me || e === v || e === j || e === m || he || e === W || Y || s || ne || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === R || e.$$typeof === E || e.$$typeof === y || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function ue(e, t, o) {
      var h = e.displayName;
      if (h)
        return h;
      var $ = t.displayName || t.name || "";
      return $ !== "" ? o + "(" + $ + ")" : o;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function X(e) {
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
        case j:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var t = e;
            return le(t) + ".Consumer";
          case E:
            var o = e;
            return le(o._context) + ".Provider";
          case b:
            return ue(e, e.render, "ForwardRef");
          case R:
            var h = e.displayName || null;
            return h !== null ? h : X(e.type) || "Memo";
          case I: {
            var $ = e, M = $._payload, A = $._init;
            try {
              return X(A(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, ae = 0, Q, te, oe, fe, n, c, x;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, te = console.info, oe = console.warn, fe = console.error, n = console.group, c = console.groupCollapsed, x = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: C,
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
            log: H({}, e, {
              value: Q
            }),
            info: H({}, e, {
              value: te
            }),
            warn: H({}, e, {
              value: oe
            }),
            error: H({}, e, {
              value: fe
            }),
            group: H({}, e, {
              value: n
            }),
            groupCollapsed: H({}, e, {
              value: c
            }),
            groupEnd: H({}, e, {
              value: x
            })
          });
        }
        ae < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _ = B.ReactCurrentDispatcher, T;
    function O(e, t, o) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch ($) {
            var h = $.stack.trim().match(/\n( *(at )?)/);
            T = h && h[1] || "";
          }
        return `
` + T + e;
      }
    }
    var k = !1, S;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      S = new J();
    }
    function a(e, t) {
      if (!e || k)
        return "";
      {
        var o = S.get(e);
        if (o !== void 0)
          return o;
      }
      var h;
      k = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = _.current, _.current = null, g();
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
              h = Z;
            }
            Reflect.construct(e, [], A);
          } else {
            try {
              A.call();
            } catch (Z) {
              h = Z;
            }
            e.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            h = Z;
          }
          e();
        }
      } catch (Z) {
        if (Z && h && typeof Z.stack == "string") {
          for (var w = Z.stack.split(`
`), K = h.stack.split(`
`), F = w.length - 1, G = K.length - 1; F >= 1 && G >= 0 && w[F] !== K[G]; )
            G--;
          for (; F >= 1 && G >= 0; F--, G--)
            if (w[F] !== K[G]) {
              if (F !== 1 || G !== 1)
                do
                  if (F--, G--, G < 0 || w[F] !== K[G]) {
                    var re = `
` + w[F].replace(" at new ", " at ");
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && S.set(e, re), re;
                  }
                while (F >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        k = !1, _.current = M, P(), Error.prepareStackTrace = $;
      }
      var ve = e ? e.displayName || e.name : "", se = ve ? O(ve) : "";
      return typeof e == "function" && S.set(e, se), se;
    }
    function ee(e, t, o) {
      return a(e, !1);
    }
    function de(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ie(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return a(e, de(e));
      if (typeof e == "string")
        return O(e);
      switch (e) {
        case j:
          return O("Suspense");
        case m:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return ee(e.render);
          case R:
            return ie(e.type, t, o);
          case I: {
            var h = e, $ = h._payload, M = h._init;
            try {
              return ie(M($), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Ke = {}, Xe = B.ReactDebugCurrentFrame;
    function Ce(e) {
      if (e) {
        var t = e._owner, o = ie(e.type, e._source, t ? t.type : null);
        Xe.setExtraStackFrame(o);
      } else
        Xe.setExtraStackFrame(null);
    }
    function Sr(e, t, o, h, $) {
      {
        var M = Function.call.bind(ge);
        for (var A in e)
          if (M(e, A)) {
            var w = void 0;
            try {
              if (typeof e[A] != "function") {
                var K = Error((h || "React class") + ": " + o + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              w = e[A](t, A, h, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              w = F;
            }
            w && !(w instanceof Error) && (Ce($), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", o, A, typeof w), Ce(null)), w instanceof Error && !(w.message in Ke) && (Ke[w.message] = !0, Ce($), q("Failed %s type: %s", o, w.message), Ce(null));
          }
      }
    }
    var wr = Array.isArray;
    function je(e) {
      return wr(e);
    }
    function jr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Pr(e) {
      try {
        return He(e), !1;
      } catch {
        return !0;
      }
    }
    function He(e) {
      return "" + e;
    }
    function Ze(e) {
      if (Pr(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jr(e)), He(e);
    }
    var _e = B.ReactCurrentOwner, Ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, er, Pe;
    Pe = {};
    function kr(e) {
      if (ge.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ir(e) {
      if (ge.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function $r(e, t) {
      if (typeof e.ref == "string" && _e.current && t && _e.current.stateNode !== t) {
        var o = X(_e.current.type);
        Pe[o] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(_e.current.type), e.ref), Pe[o] = !0);
      }
    }
    function Nr(e, t) {
      {
        var o = function() {
          Qe || (Qe = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Dr(e, t) {
      {
        var o = function() {
          er || (er = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Mr = function(e, t, o, h, $, M, A) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
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
        value: h
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Lr(e, t, o, h, $) {
      {
        var M, A = {}, w = null, K = null;
        o !== void 0 && (Ze(o), w = "" + o), Ir(t) && (Ze(t.key), w = "" + t.key), kr(t) && (K = t.ref, $r(t, $));
        for (M in t)
          ge.call(t, M) && !Ar.hasOwnProperty(M) && (A[M] = t[M]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (M in F)
            A[M] === void 0 && (A[M] = F[M]);
        }
        if (w || K) {
          var G = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && Nr(A, G), K && Dr(A, G);
        }
        return Mr(e, w, K, $, h, _e.current, A);
      }
    }
    var Ae = B.ReactCurrentOwner, rr = B.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var t = e._owner, o = ie(e.type, e._source, t ? t.type : null);
        rr.setExtraStackFrame(o);
      } else
        rr.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function Ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function tr() {
      {
        if (Ae.current) {
          var e = X(Ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Wr(e) {
      return "";
    }
    var nr = {};
    function qr(e) {
      {
        var t = tr();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function ar(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = qr(t);
        if (nr[o])
          return;
        nr[o] = !0;
        var h = "";
        e && e._owner && e._owner !== Ae.current && (h = " It was passed a child from " + X(e._owner.type) + "."), pe(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, h), pe(null);
      }
    }
    function or(e, t) {
      {
        if (typeof e != "object")
          return;
        if (je(e))
          for (var o = 0; o < e.length; o++) {
            var h = e[o];
            Ie(h) && ar(h, t);
          }
        else if (Ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var $ = V(e);
          if (typeof $ == "function" && $ !== e.entries)
            for (var M = $.call(e), A; !(A = M.next()).done; )
              Ie(A.value) && ar(A.value, t);
        }
      }
    }
    function Fr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === R))
          o = t.propTypes;
        else
          return;
        if (o) {
          var h = X(t);
          Sr(o, e.props, "prop", h, e);
        } else if (t.PropTypes !== void 0 && !ke) {
          ke = !0;
          var $ = X(t);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yr(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var h = t[o];
          if (h !== "children" && h !== "key") {
            pe(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var ir = {};
    function sr(e, t, o, h, $, M) {
      {
        var A = be(e);
        if (!A) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Wr();
          K ? w += K : w += tr();
          var F;
          e === null ? F = "null" : je(e) ? F = "array" : e !== void 0 && e.$$typeof === p ? (F = "<" + (X(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, w);
        }
        var G = Lr(e, t, o, $, M);
        if (G == null)
          return G;
        if (A) {
          var re = t.children;
          if (re !== void 0)
            if (h)
              if (je(re)) {
                for (var ve = 0; ve < re.length; ve++)
                  or(re[ve], e);
                Object.freeze && Object.freeze(re);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(re, e);
        }
        if (ge.call(t, "key")) {
          var se = X(e), Z = Object.keys(t).filter(function(Jr) {
            return Jr !== "key";
          }), $e = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ir[se + $e]) {
            var zr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $e, se, zr, se), ir[se + $e] = !0;
          }
        }
        return e === u ? Yr(G) : Fr(G), G;
      }
    }
    function Gr(e, t, o) {
      return sr(e, t, o, !0);
    }
    function Br(e, t, o) {
      return sr(e, t, o, !1);
    }
    var Ur = Br, Vr = Gr;
    Ee.Fragment = u, Ee.jsx = Ur, Ee.jsxs = Vr;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ge.exports = nt() : Ge.exports = at();
var l = Ge.exports, Be = { exports: {} }, xe = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function ot() {
  if (lr) return N;
  lr = 1;
  var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, E = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, b = r ? Symbol.for("react.async_mode") : 60111, j = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, R = r ? Symbol.for("react.suspense") : 60113, I = r ? Symbol.for("react.suspense_list") : 60120, W = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, L = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
  function U(s) {
    if (typeof s == "object" && s !== null) {
      var ne = s.$$typeof;
      switch (ne) {
        case p:
          switch (s = s.type, s) {
            case b:
            case j:
            case u:
            case d:
            case v:
            case R:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case y:
                case m:
                case z:
                case W:
                case E:
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
    return U(s) === j;
  }
  return N.AsyncMode = b, N.ConcurrentMode = j, N.ContextConsumer = y, N.ContextProvider = E, N.Element = p, N.ForwardRef = m, N.Fragment = u, N.Lazy = z, N.Memo = W, N.Portal = f, N.Profiler = d, N.StrictMode = v, N.Suspense = R, N.isAsyncMode = function(s) {
    return Y(s) || U(s) === b;
  }, N.isConcurrentMode = Y, N.isContextConsumer = function(s) {
    return U(s) === y;
  }, N.isContextProvider = function(s) {
    return U(s) === E;
  }, N.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === p;
  }, N.isForwardRef = function(s) {
    return U(s) === m;
  }, N.isFragment = function(s) {
    return U(s) === u;
  }, N.isLazy = function(s) {
    return U(s) === z;
  }, N.isMemo = function(s) {
    return U(s) === W;
  }, N.isPortal = function(s) {
    return U(s) === f;
  }, N.isProfiler = function(s) {
    return U(s) === d;
  }, N.isStrictMode = function(s) {
    return U(s) === v;
  }, N.isSuspense = function(s) {
    return U(s) === R;
  }, N.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === u || s === j || s === d || s === v || s === R || s === I || typeof s == "object" && s !== null && (s.$$typeof === z || s.$$typeof === W || s.$$typeof === E || s.$$typeof === y || s.$$typeof === m || s.$$typeof === V || s.$$typeof === B || s.$$typeof === q || s.$$typeof === L);
  }, N.typeOf = U, N;
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
var fr;
function it() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, E = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, b = r ? Symbol.for("react.async_mode") : 60111, j = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, R = r ? Symbol.for("react.suspense") : 60113, I = r ? Symbol.for("react.suspense_list") : 60120, W = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, L = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
    function U(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === u || a === j || a === d || a === v || a === R || a === I || typeof a == "object" && a !== null && (a.$$typeof === z || a.$$typeof === W || a.$$typeof === E || a.$$typeof === y || a.$$typeof === m || a.$$typeof === V || a.$$typeof === B || a.$$typeof === q || a.$$typeof === L);
    }
    function Y(a) {
      if (typeof a == "object" && a !== null) {
        var ee = a.$$typeof;
        switch (ee) {
          case p:
            var de = a.type;
            switch (de) {
              case b:
              case j:
              case u:
              case d:
              case v:
              case R:
                return de;
              default:
                var ie = de && de.$$typeof;
                switch (ie) {
                  case y:
                  case m:
                  case z:
                  case W:
                  case E:
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
    var s = b, ne = j, he = y, me = E, ce = p, be = m, ue = u, le = z, X = W, H = f, ae = d, Q = v, te = R, oe = !1;
    function fe(a) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(a) || Y(a) === b;
    }
    function n(a) {
      return Y(a) === j;
    }
    function c(a) {
      return Y(a) === y;
    }
    function x(a) {
      return Y(a) === E;
    }
    function C(a) {
      return typeof a == "object" && a !== null && a.$$typeof === p;
    }
    function g(a) {
      return Y(a) === m;
    }
    function P(a) {
      return Y(a) === u;
    }
    function _(a) {
      return Y(a) === z;
    }
    function T(a) {
      return Y(a) === W;
    }
    function O(a) {
      return Y(a) === f;
    }
    function k(a) {
      return Y(a) === d;
    }
    function S(a) {
      return Y(a) === v;
    }
    function J(a) {
      return Y(a) === R;
    }
    D.AsyncMode = s, D.ConcurrentMode = ne, D.ContextConsumer = he, D.ContextProvider = me, D.Element = ce, D.ForwardRef = be, D.Fragment = ue, D.Lazy = le, D.Memo = X, D.Portal = H, D.Profiler = ae, D.StrictMode = Q, D.Suspense = te, D.isAsyncMode = fe, D.isConcurrentMode = n, D.isContextConsumer = c, D.isContextProvider = x, D.isElement = C, D.isForwardRef = g, D.isFragment = P, D.isLazy = _, D.isMemo = T, D.isPortal = O, D.isProfiler = k, D.isStrictMode = S, D.isSuspense = J, D.isValidElementType = U, D.typeOf = Y;
  }()), D;
}
var dr;
function Cr() {
  return dr || (dr = 1, process.env.NODE_ENV === "production" ? xe.exports = ot() : xe.exports = it()), xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ne, pr;
function st() {
  if (pr) return Ne;
  pr = 1;
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
      for (var E = {}, y = 0; y < 10; y++)
        E["_" + String.fromCharCode(y)] = y;
      var b = Object.getOwnPropertyNames(E).map(function(m) {
        return E[m];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var j = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        j[m] = m;
      }), Object.keys(Object.assign({}, j)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ne = v() ? Object.assign : function(d, E) {
    for (var y, b = u(d), j, m = 1; m < arguments.length; m++) {
      y = Object(arguments[m]);
      for (var R in y)
        p.call(y, R) && (b[R] = y[R]);
      if (r) {
        j = r(y);
        for (var I = 0; I < j.length; I++)
          f.call(y, j[I]) && (b[j[I]] = y[j[I]]);
      }
    }
    return b;
  }, Ne;
}
var De, vr;
function Ue() {
  if (vr) return De;
  vr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return De = r, De;
}
var Me, yr;
function xr() {
  return yr || (yr = 1, Me = Function.call.bind(Object.prototype.hasOwnProperty)), Me;
}
var Le, hr;
function ct() {
  if (hr) return Le;
  hr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var p = Ue(), f = {}, u = xr();
    r = function(d) {
      var E = "Warning: " + d;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function v(d, E, y, b, j) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in d)
        if (u(d, m)) {
          var R;
          try {
            if (typeof d[m] != "function") {
              var I = Error(
                (b || "React class") + ": " + y + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw I.name = "Invariant Violation", I;
            }
            R = d[m](E, m, b, y, null, p);
          } catch (z) {
            R = z;
          }
          if (R && !(R instanceof Error) && r(
            (b || "React class") + ": type specification of " + y + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in f)) {
            f[R.message] = !0;
            var W = j ? j() : "";
            r(
              "Failed " + y + " type: " + R.message + (W ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, Le = v, Le;
}
var We, mr;
function ut() {
  if (mr) return We;
  mr = 1;
  var r = Cr(), p = st(), f = Ue(), u = xr(), v = ct(), d = function() {
  };
  process.env.NODE_ENV !== "production" && (d = function(y) {
    var b = "Warning: " + y;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function E() {
    return null;
  }
  return We = function(y, b) {
    var j = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function R(n) {
      var c = n && (j && n[j] || n[m]);
      if (typeof c == "function")
        return c;
    }
    var I = "<<anonymous>>", W = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: q(),
      arrayOf: U,
      element: Y(),
      elementType: s(),
      instanceOf: ne,
      node: be(),
      objectOf: me,
      oneOf: he,
      oneOfType: ce,
      shape: le,
      exact: X
    };
    function z(n, c) {
      return n === c ? n !== 0 || 1 / n === 1 / c : n !== n && c !== c;
    }
    function L(n, c) {
      this.message = n, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    L.prototype = Error.prototype;
    function V(n) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, x = 0;
      function C(P, _, T, O, k, S, J) {
        if (O = O || I, S = S || T, J !== f) {
          if (b) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + T;
            !c[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (d(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[ee] = !0, x++);
          }
        }
        return _[T] == null ? P ? _[T] === null ? new L("The " + k + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new L("The " + k + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : n(_, T, O, k, S);
      }
      var g = C.bind(null, !1);
      return g.isRequired = C.bind(null, !0), g;
    }
    function B(n) {
      function c(x, C, g, P, _, T) {
        var O = x[C], k = Q(O);
        if (k !== n) {
          var S = te(O);
          return new L(
            "Invalid " + P + " `" + _ + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("`" + n + "`."),
            { expectedType: n }
          );
        }
        return null;
      }
      return V(c);
    }
    function q() {
      return V(E);
    }
    function U(n) {
      function c(x, C, g, P, _) {
        if (typeof n != "function")
          return new L("Property `" + _ + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var T = x[C];
        if (!Array.isArray(T)) {
          var O = Q(T);
          return new L("Invalid " + P + " `" + _ + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an array."));
        }
        for (var k = 0; k < T.length; k++) {
          var S = n(T, k, g, P, _ + "[" + k + "]", f);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return V(c);
    }
    function Y() {
      function n(c, x, C, g, P) {
        var _ = c[x];
        if (!y(_)) {
          var T = Q(_);
          return new L("Invalid " + g + " `" + P + "` of type " + ("`" + T + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(n);
    }
    function s() {
      function n(c, x, C, g, P) {
        var _ = c[x];
        if (!r.isValidElementType(_)) {
          var T = Q(_);
          return new L("Invalid " + g + " `" + P + "` of type " + ("`" + T + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(n);
    }
    function ne(n) {
      function c(x, C, g, P, _) {
        if (!(x[C] instanceof n)) {
          var T = n.name || I, O = fe(x[C]);
          return new L("Invalid " + P + " `" + _ + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return V(c);
    }
    function he(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? d(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : d("Invalid argument supplied to oneOf, expected an array.")), E;
      function c(x, C, g, P, _) {
        for (var T = x[C], O = 0; O < n.length; O++)
          if (z(T, n[O]))
            return null;
        var k = JSON.stringify(n, function(J, a) {
          var ee = te(a);
          return ee === "symbol" ? String(a) : a;
        });
        return new L("Invalid " + P + " `" + _ + "` of value `" + String(T) + "` " + ("supplied to `" + g + "`, expected one of " + k + "."));
      }
      return V(c);
    }
    function me(n) {
      function c(x, C, g, P, _) {
        if (typeof n != "function")
          return new L("Property `" + _ + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var T = x[C], O = Q(T);
        if (O !== "object")
          return new L("Invalid " + P + " `" + _ + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an object."));
        for (var k in T)
          if (u(T, k)) {
            var S = n(T, k, g, P, _ + "." + k, f);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return V(c);
    }
    function ce(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && d("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var c = 0; c < n.length; c++) {
        var x = n[c];
        if (typeof x != "function")
          return d(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(x) + " at index " + c + "."
          ), E;
      }
      function C(g, P, _, T, O) {
        for (var k = [], S = 0; S < n.length; S++) {
          var J = n[S], a = J(g, P, _, T, O, f);
          if (a == null)
            return null;
          a.data && u(a.data, "expectedType") && k.push(a.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new L("Invalid " + T + " `" + O + "` supplied to " + ("`" + _ + "`" + ee + "."));
      }
      return V(C);
    }
    function be() {
      function n(c, x, C, g, P) {
        return H(c[x]) ? null : new L("Invalid " + g + " `" + P + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return V(n);
    }
    function ue(n, c, x, C, g) {
      return new L(
        (n || "React class") + ": " + c + " type `" + x + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function le(n) {
      function c(x, C, g, P, _) {
        var T = x[C], O = Q(T);
        if (O !== "object")
          return new L("Invalid " + P + " `" + _ + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var k in n) {
          var S = n[k];
          if (typeof S != "function")
            return ue(g, P, _, k, te(S));
          var J = S(T, k, g, P, _ + "." + k, f);
          if (J)
            return J;
        }
        return null;
      }
      return V(c);
    }
    function X(n) {
      function c(x, C, g, P, _) {
        var T = x[C], O = Q(T);
        if (O !== "object")
          return new L("Invalid " + P + " `" + _ + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        var k = p({}, x[C], n);
        for (var S in k) {
          var J = n[S];
          if (u(n, S) && typeof J != "function")
            return ue(g, P, _, S, te(J));
          if (!J)
            return new L(
              "Invalid " + P + " `" + _ + "` key `" + S + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(x[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var a = J(T, S, g, P, _ + "." + S, f);
          if (a)
            return a;
        }
        return null;
      }
      return V(c);
    }
    function H(n) {
      switch (typeof n) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !n;
        case "object":
          if (Array.isArray(n))
            return n.every(H);
          if (n === null || y(n))
            return !0;
          var c = R(n);
          if (c) {
            var x = c.call(n), C;
            if (c !== n.entries) {
              for (; !(C = x.next()).done; )
                if (!H(C.value))
                  return !1;
            } else
              for (; !(C = x.next()).done; ) {
                var g = C.value;
                if (g && !H(g[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(n, c) {
      return n === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function Q(n) {
      var c = typeof n;
      return Array.isArray(n) ? "array" : n instanceof RegExp ? "object" : ae(c, n) ? "symbol" : c;
    }
    function te(n) {
      if (typeof n > "u" || n === null)
        return "" + n;
      var c = Q(n);
      if (c === "object") {
        if (n instanceof Date)
          return "date";
        if (n instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function oe(n) {
      var c = te(n);
      switch (c) {
        case "array":
        case "object":
          return "an " + c;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + c;
        default:
          return c;
      }
    }
    function fe(n) {
      return !n.constructor || !n.constructor.name ? I : n.constructor.name;
    }
    return W.checkPropTypes = v, W.resetWarningCache = v.resetWarningCache, W.PropTypes = W, W;
  }, We;
}
var qe, br;
function lt() {
  if (br) return qe;
  br = 1;
  var r = Ue();
  function p() {
  }
  function f() {
  }
  return f.resetWarningCache = p, qe = function() {
    function u(E, y, b, j, m, R) {
      if (R !== r) {
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
  }, qe;
}
if (process.env.NODE_ENV !== "production") {
  var ft = Cr(), dt = !0;
  Be.exports = ut()(ft.isElement, dt);
} else
  Be.exports = lt()();
var pt = Be.exports;
const i = /* @__PURE__ */ tt(pt), vt = "_iconButton_1963e_1", yt = {
  iconButton: vt
}, ht = {
  trash: Kr,
  filter: Xr,
  info: Hr,
  fill: Zr,
  ellipsis: Qr,
  chevronRight: Rr,
  chevronLeft: et
}, we = ({ onClick: r, iconName: p }) => /* @__PURE__ */ l.jsx("div", { className: yt.iconButton, children: /* @__PURE__ */ l.jsx("button", { "aria-label": p, type: "button", onClick: r, children: /* @__PURE__ */ l.jsx(Er, { icon: ht[p] }) }) });
we.propTypes = {
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
we.defaultProps = {
  iconName: "ellipsis"
};
const mt = "_layerButtonReel_1o59k_1", bt = {
  layerButtonReel: mt
}, Ve = ({ buttons: r }) => /* @__PURE__ */ l.jsx("div", { className: bt.layerButtonReel, children: r && Object.keys(r).map((p) => /* @__PURE__ */ l.jsx(we, { iconName: p, onClick: r[p] })) });
Ve.propTypes = {
  buttons: i.objectOf(i.func)
};
Ve.defaultProps = {
  buttons: null
};
const gt = "_layerToggle_gvlf4_7", _t = "_slider_gvlf4_29", Fe = {
  layerToggle: gt,
  switch: "_switch_gvlf4_12",
  slider: _t
}, ze = ({ layerName: r, isActive: p, onChange: f }) => /* @__PURE__ */ l.jsx("div", { className: Fe.layerToggle, children: /* @__PURE__ */ l.jsxs("div", { className: Fe.switch, children: [
  /* @__PURE__ */ l.jsx(
    "input",
    {
      type: "checkbox",
      value: r,
      checked: p,
      onChange: f
    }
  ),
  /* @__PURE__ */ l.jsx("span", { className: Fe.slider })
] }) });
ze.propTypes = {
  layerName: i.string,
  isActive: i.bool,
  onChange: i.func.isRequired
};
ze.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const Tt = "_layerCard_mism4_1", Et = "_layerCardWrapper_mism4_11", Rt = "_layerCardTextWrapper_mism4_20", Ct = "_layerCardTitle_mism4_28", xt = "_layerCardDescription_mism4_32", Ot = "_layerCardControls_mism4_37", St = "_layerCardToggle_mism4_42", wt = "_layerCardChildren_mism4_47", ye = {
  layerCard: Tt,
  layerCardWrapper: Et,
  layerCardTextWrapper: Rt,
  layerCardTitle: Ct,
  layerCardDescription: xt,
  layerCardControls: Ot,
  layerCardToggle: St,
  layerCardChildren: wt
}, jt = ({ layerName: r, isActive: p, onChange: f, buttons: u, description: v, children: d }) => /* @__PURE__ */ l.jsxs("div", { className: ye.layerCard, children: [
  /* @__PURE__ */ l.jsxs("div", { className: ye.layerCardWrapper, children: [
    /* @__PURE__ */ l.jsxs("div", { className: ye.layerCardTextWrapper, children: [
      /* @__PURE__ */ l.jsx("span", { className: ye.layerCardTitle, children: r }),
      /* @__PURE__ */ l.jsx("span", { className: ye.layerCardDescription, children: v })
    ] }),
    /* @__PURE__ */ l.jsx(Ve, { buttons: u }),
    f && /* @__PURE__ */ l.jsx(
      ze,
      {
        layerName: r,
        isActive: p,
        onChange: f
      }
    )
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: ye.layerCardChildren, children: d })
] });
jt.propTypes = {
  layerName: i.string.isRequired,
  isActive: i.bool,
  onChange: i.func.isRequired,
  buttons: i.objectOf(i.func),
  description: i.string,
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ])
};
const Pt = "_swatchContainer_771fp_2", At = "_swatch_771fp_2", kt = "_swatchLabel_771fp_18", It = "_swatchValue_771fp_24", Oe = {
  swatchContainer: Pt,
  swatch: At,
  swatchLabel: kt,
  swatchValue: It
}, $t = ({ color: r, label: p = "", value: f, units: u = "" }) => /* @__PURE__ */ l.jsxs("div", { className: Oe.swatchContainer, children: [
  /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: Oe.swatch,
      style: { backgroundColor: r }
    }
  ),
  /* @__PURE__ */ l.jsx("div", { "data-testid": "swatch-label", className: Oe.swatchLabel, children: p }),
  /* @__PURE__ */ l.jsx("div", { "data-testid": "swatch-value", className: Oe.swatchValue, children: f !== void 0 && `${f}${u}` })
] }), Nt = "_swatchLegend_qiaru_1", Dt = {
  swatchLegend: Nt
}, Mt = ({ swatches: r }) => /* @__PURE__ */ l.jsx("div", { className: Dt.swatchLegend, children: r && r.map((p) => {
  const { color: f, label: u, value: v, units: d } = p;
  return /* @__PURE__ */ l.jsx(
    $t,
    {
      label: u,
      color: f,
      value: v,
      units: d
    },
    u
  );
}) });
Mt.propTypes = {
  swatches: i.arrayOf(i.objectOf(i.string)).isRequired
};
const Lt = "_gradient_1w8qh_1", Wt = "_gradientNumbers_1w8qh_6", qt = "_gradientLegend_1w8qh_11", Se = {
  gradient: Lt,
  gradientNumbers: Wt,
  gradientLegend: qt
}, Ft = ({
  title: r,
  startColor: p = "red",
  endColor: f = "yellow",
  startNo: u,
  endNo: v,
  titleBelow: d = !1,
  bins: E = 0,
  precision: y = 2,
  units: b
}) => {
  const j = E > 0 ? Array(E - 1).fill(0).map((m, R) => {
    const I = (u + (v - u) / E * (R + 1)).toPrecision(y);
    return /* @__PURE__ */ l.jsx("span", { children: I }, I);
  }) : [];
  return /* @__PURE__ */ l.jsxs("div", { className: "gradient-box", children: [
    !d && /* @__PURE__ */ l.jsxs("div", { className: "ui-title", children: [
      " ",
      r
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: Se.gradientLegend, children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: Se.gradient,
          style: {
            background: `linear-gradient(to right, ${p} , ${f})`
          }
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: Se.gradientNumbers, children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          u,
          " ",
          b
        ] }),
        j,
        /* @__PURE__ */ l.jsxs("span", { children: [
          v,
          " ",
          b
        ] })
      ] }),
      d && /* @__PURE__ */ l.jsxs("div", { className: Se.uiTitle, children: [
        " ",
        r
      ] })
    ] })
  ] });
};
Ft.propTypes = {
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
const Yt = "_simpleSlider_qj292_1", Gt = "_simpleSliderInput_qj292_7", Bt = "_simpleSliderMinMaxContainer_qj292_11", Ye = {
  simpleSlider: Yt,
  simpleSliderInput: Gt,
  simpleSliderMinMaxContainer: Bt
}, Je = ({
  units: r,
  label: p,
  onChange: f,
  min: u,
  max: v,
  step: d,
  value: E
}) => /* @__PURE__ */ l.jsxs("div", { className: Ye.simpleSlider, children: [
  /* @__PURE__ */ l.jsxs("div", { children: [
    p && /* @__PURE__ */ l.jsx("div", { className: "ui-label", children: p }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        onChange: f,
        className: Ye.simpleSliderInput,
        type: "range",
        value: E,
        min: u,
        max: v,
        step: d
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: Ye.simpleSliderMinMaxContainer, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "ui-label", children: [
      u,
      r
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "ui-label", children: [
      v,
      r
    ] })
  ] })
] });
Je.propTypes = {
  onChange: i.func.isRequired,
  min: i.number.isRequired,
  max: i.number.isRequired,
  step: i.number.isRequired,
  value: i.number,
  label: i.string,
  units: i.string
};
Je.defaultProps = {
  value: 0,
  units: "",
  label: ""
};
const Ut = "_layerGroupButton_1twxx_1", Vt = "_layerGroupChevron_1twxx_12", zt = "_layerGroupName_1twxx_25", Jt = "_layerGroupWrapper_1twxx_32", Kt = "_layerGroupChildren_1twxx_32", Re = {
  layerGroupButton: Ut,
  layerGroupChevron: Vt,
  layerGroupName: zt,
  layerGroupWrapper: Jt,
  layerGroupChildren: Kt
}, Xt = ({ groupName: r, children: p }) => {
  const [f, u] = Tr(!1), v = () => {
    u(!f);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: Re.layerGroupWrapper, children: [
    /* @__PURE__ */ l.jsxs("button", { type: "button", className: Re.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ l.jsx("div", { className: Re.layerGroupChevron, children: /* @__PURE__ */ l.jsx(Er, { size: "md", fixedWidth: !0, icon: f ? rt : Rr }) }),
      /* @__PURE__ */ l.jsx("span", { className: Re.layerGroupName, children: r })
    ] }),
    f && /* @__PURE__ */ l.jsx("div", { className: Re.layerGroupChildren, children: p })
  ] });
};
Xt.propTypes = {
  groupName: i.string,
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired
};
const Or = ({ mapContainer: r, id: p, children: f }) => /* @__PURE__ */ l.jsx("div", { className: "map-container", id: p, ref: r, children: f });
Or.propTypes = {
  mapContainer: i.oneOfType([
    i.func,
    i.shape({ current: i.instanceOf(Element) })
  ]),
  children: i.node,
  id: i.string
};
Or.defaultProps = {
  children: null,
  mapContainer: null,
  id: null
};
const Ht = ({ children: r }) => /* @__PURE__ */ l.jsx("div", { className: "nav-container", children: r });
Ht.propTypes = {
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired
};
const Zt = ({ showToggle: r, children: p }) => {
  const [f, u] = Tr(!1), v = `sidebar ${f ? "closed" : ""}`, d = () => {
    u(!f);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ l.jsx("div", { className: v, children: p }),
    r && /* @__PURE__ */ l.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ l.jsx(
      we,
      {
        onClick: d,
        iconName: f ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
Zt.propTypes = {
  showToggle: i.bool,
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired
};
const Qt = ({ children: r }) => /* @__PURE__ */ l.jsx("div", { className: "layout-stacked", children: r });
Qt.propTypes = {
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired
};
const en = ({ align: r = "left", children: p }) => /* @__PURE__ */ l.jsx("div", { className: `layout-standard ${r}`, children: p });
en.propTypes = {
  align: i.oneOf(["left", "right"]),
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node
  ]).isRequired
};
const rn = "_sliderControlWrapper_2tznx_1", tn = "_sliderLabel_2tznx_9", gr = {
  sliderControlWrapper: rn,
  sliderLabel: tn
}, nn = ({ title: r, units: p, sliderConfig: f }) => /* @__PURE__ */ l.jsxs("div", { className: gr.sliderControlWrapper, children: [
  /* @__PURE__ */ l.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ l.jsx("div", {}),
  f && f.map((u) => {
    const { label: v } = u;
    return /* @__PURE__ */ l.jsx("div", { className: gr.sliderLabel, children: v });
  }),
  f && f.map((u) => {
    const { onChange: v, min: d, max: E, step: y, value: b } = u;
    return /* @__PURE__ */ l.jsx(
      Je,
      {
        onChange: v,
        units: p,
        min: d,
        max: E,
        step: y,
        value: b
      }
    );
  })
] });
nn.propTypes = {
  title: i.string.isRequired,
  units: i.string.isRequired,
  sliderConfig: i.arrayOf(i.objectOf(i.string)).isRequired
};
export {
  Ft as GradientLegend,
  we as IconButton,
  Ve as LayerButtonReel,
  jt as LayerCard,
  Xt as LayerGroup,
  ze as LayerToggle,
  Or as MapContainer,
  Ht as NavContainer,
  Zt as SidebarContainer,
  Je as SimpleSlider,
  nn as SliderControl,
  Qt as Stacked,
  en as Standard,
  $t as Swatch,
  Mt as SwatchLegend
};
