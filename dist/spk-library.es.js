import Tr, { useState as Er } from "react";
import { FontAwesomeIcon as Rr } from "@fortawesome/react-fontawesome";
import { faTrash as Xr, faFilter as Hr, faInfo as Zr, faFillDrip as Qr, faEllipsisVertical as en, faChevronRight as Cr, faChevronLeft as rn, faChevronDown as nn } from "@fortawesome/free-solid-svg-icons";
function tn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
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
var ur;
function an() {
  if (ur) return Te;
  ur = 1;
  var n = Tr, p = Symbol.for("react.element"), f = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(y, b, w) {
    var m, R = {}, I = null, W = null;
    w !== void 0 && (I = "" + w), b.key !== void 0 && (I = "" + b.key), b.ref !== void 0 && (W = b.ref);
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
var lr;
function on() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Tr, p = Symbol.for("react.element"), f = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), z = Symbol.iterator, L = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[L];
      return typeof r == "function" ? r : null;
    }
    var B = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), h = 1; h < r; h++)
          i[h - 1] = arguments[h];
        U("error", e, i);
      }
    }
    function U(e, r, i) {
      {
        var h = B.ReactDebugCurrentFrame, $ = h.getStackAddendum();
        $ !== "" && (r += "%s", i = i.concat([$]));
        var M = i.map(function(A) {
          return String(A);
        });
        M.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var Y = !1, s = !1, te = !1, he = !1, me = !1, ce;
    ce = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === d || me || e === v || e === w || e === m || he || e === W || Y || s || te || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === R || e.$$typeof === E || e.$$typeof === y || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function ue(e, r, i) {
      var h = e.displayName;
      if (h)
        return h;
      var $ = r.displayName || r.name || "";
      return $ !== "" ? i + "(" + $ + ")" : i;
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
        case w:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return le(r) + ".Consumer";
          case E:
            var i = e;
            return le(i._context) + ".Provider";
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
    var H = Object.assign, ae = 0, Q, ne, oe, fe, t, c, x;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, ne = console.info, oe = console.warn, fe = console.error, t = console.group, c = console.groupCollapsed, x = console.groupEnd;
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
              value: ne
            }),
            warn: H({}, e, {
              value: oe
            }),
            error: H({}, e, {
              value: fe
            }),
            group: H({}, e, {
              value: t
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
    function O(e, r, i) {
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
    function o(e, r) {
      if (!e || k)
        return "";
      {
        var i = S.get(e);
        if (i !== void 0)
          return i;
      }
      var h;
      k = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = _.current, _.current = null, g();
      try {
        if (r) {
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
          for (var j = Z.stack.split(`
`), K = h.stack.split(`
`), F = j.length - 1, G = K.length - 1; F >= 1 && G >= 0 && j[F] !== K[G]; )
            G--;
          for (; F >= 1 && G >= 0; F--, G--)
            if (j[F] !== K[G]) {
              if (F !== 1 || G !== 1)
                do
                  if (F--, G--, G < 0 || j[F] !== K[G]) {
                    var re = `
` + j[F].replace(" at new ", " at ");
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
    function ee(e, r, i) {
      return o(e, !1);
    }
    function de(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return o(e, de(e));
      if (typeof e == "string")
        return O(e);
      switch (e) {
        case w:
          return O("Suspense");
        case m:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return ee(e.render);
          case R:
            return ie(e.type, r, i);
          case I: {
            var h = e, $ = h._payload, M = h._init;
            try {
              return ie(M($), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Xe = {}, He = B.ReactDebugCurrentFrame;
    function Ce(e) {
      if (e) {
        var r = e._owner, i = ie(e.type, e._source, r ? r.type : null);
        He.setExtraStackFrame(i);
      } else
        He.setExtraStackFrame(null);
    }
    function jr(e, r, i, h, $) {
      {
        var M = Function.call.bind(ge);
        for (var A in e)
          if (M(e, A)) {
            var j = void 0;
            try {
              if (typeof e[A] != "function") {
                var K = Error((h || "React class") + ": " + i + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              j = e[A](r, A, h, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              j = F;
            }
            j && !(j instanceof Error) && (Ce($), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", i, A, typeof j), Ce(null)), j instanceof Error && !(j.message in Xe) && (Xe[j.message] = !0, Ce($), q("Failed %s type: %s", i, j.message), Ce(null));
          }
      }
    }
    var wr = Array.isArray;
    function we(e) {
      return wr(e);
    }
    function Pr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Ar(e) {
      try {
        return Ze(e), !1;
      } catch {
        return !0;
      }
    }
    function Ze(e) {
      return "" + e;
    }
    function Qe(e) {
      if (Ar(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pr(e)), Ze(e);
    }
    var _e = B.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, Pe;
    Pe = {};
    function Ir(e) {
      if (ge.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function $r(e) {
      if (ge.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Nr(e, r) {
      if (typeof e.ref == "string" && _e.current && r && _e.current.stateNode !== r) {
        var i = X(_e.current.type);
        Pe[i] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(_e.current.type), e.ref), Pe[i] = !0);
      }
    }
    function Dr(e, r) {
      {
        var i = function() {
          er || (er = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Mr(e, r) {
      {
        var i = function() {
          rr || (rr = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Lr = function(e, r, i, h, $, M, A) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: A,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Wr(e, r, i, h, $) {
      {
        var M, A = {}, j = null, K = null;
        i !== void 0 && (Qe(i), j = "" + i), $r(r) && (Qe(r.key), j = "" + r.key), Ir(r) && (K = r.ref, Nr(r, $));
        for (M in r)
          ge.call(r, M) && !kr.hasOwnProperty(M) && (A[M] = r[M]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (M in F)
            A[M] === void 0 && (A[M] = F[M]);
        }
        if (j || K) {
          var G = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          j && Dr(A, G), K && Mr(A, G);
        }
        return Lr(e, j, K, $, h, _e.current, A);
      }
    }
    var Ae = B.ReactCurrentOwner, nr = B.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, i = ie(e.type, e._source, r ? r.type : null);
        nr.setExtraStackFrame(i);
      } else
        nr.setExtraStackFrame(null);
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
    function qr(e) {
      return "";
    }
    var ar = {};
    function Fr(e) {
      {
        var r = tr();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function or(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Fr(r);
        if (ar[i])
          return;
        ar[i] = !0;
        var h = "";
        e && e._owner && e._owner !== Ae.current && (h = " It was passed a child from " + X(e._owner.type) + "."), pe(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, h), pe(null);
      }
    }
    function ir(e, r) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var i = 0; i < e.length; i++) {
            var h = e[i];
            Ie(h) && or(h, r);
          }
        else if (Ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var $ = V(e);
          if (typeof $ == "function" && $ !== e.entries)
            for (var M = $.call(e), A; !(A = M.next()).done; )
              Ie(A.value) && or(A.value, r);
        }
      }
    }
    function Yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          i = r.propTypes;
        else
          return;
        if (i) {
          var h = X(r);
          jr(i, e.props, "prop", h, e);
        } else if (r.PropTypes !== void 0 && !ke) {
          ke = !0;
          var $ = X(r);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gr(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var h = r[i];
          if (h !== "children" && h !== "key") {
            pe(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var sr = {};
    function cr(e, r, i, h, $, M) {
      {
        var A = be(e);
        if (!A) {
          var j = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = qr();
          K ? j += K : j += tr();
          var F;
          e === null ? F = "null" : we(e) ? F = "array" : e !== void 0 && e.$$typeof === p ? (F = "<" + (X(e.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, j);
        }
        var G = Wr(e, r, i, $, M);
        if (G == null)
          return G;
        if (A) {
          var re = r.children;
          if (re !== void 0)
            if (h)
              if (we(re)) {
                for (var ve = 0; ve < re.length; ve++)
                  ir(re[ve], e);
                Object.freeze && Object.freeze(re);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(re, e);
        }
        if (ge.call(r, "key")) {
          var se = X(e), Z = Object.keys(r).filter(function(Kr) {
            return Kr !== "key";
          }), $e = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[se + $e]) {
            var Jr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $e, se, Jr, se), sr[se + $e] = !0;
          }
        }
        return e === u ? Gr(G) : Yr(G), G;
      }
    }
    function Br(e, r, i) {
      return cr(e, r, i, !0);
    }
    function Ur(e, r, i) {
      return cr(e, r, i, !1);
    }
    var Vr = Ur, zr = Br;
    Ee.Fragment = u, Ee.jsx = Vr, Ee.jsxs = zr;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ge.exports = an() : Ge.exports = on();
var l = Ge.exports, Be = { exports: {} }, xe = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function sn() {
  if (fr) return N;
  fr = 1;
  var n = typeof Symbol == "function" && Symbol.for, p = n ? Symbol.for("react.element") : 60103, f = n ? Symbol.for("react.portal") : 60106, u = n ? Symbol.for("react.fragment") : 60107, v = n ? Symbol.for("react.strict_mode") : 60108, d = n ? Symbol.for("react.profiler") : 60114, E = n ? Symbol.for("react.provider") : 60109, y = n ? Symbol.for("react.context") : 60110, b = n ? Symbol.for("react.async_mode") : 60111, w = n ? Symbol.for("react.concurrent_mode") : 60111, m = n ? Symbol.for("react.forward_ref") : 60112, R = n ? Symbol.for("react.suspense") : 60113, I = n ? Symbol.for("react.suspense_list") : 60120, W = n ? Symbol.for("react.memo") : 60115, z = n ? Symbol.for("react.lazy") : 60116, L = n ? Symbol.for("react.block") : 60121, V = n ? Symbol.for("react.fundamental") : 60117, B = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
  function U(s) {
    if (typeof s == "object" && s !== null) {
      var te = s.$$typeof;
      switch (te) {
        case p:
          switch (s = s.type, s) {
            case b:
            case w:
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
                  return te;
              }
          }
        case f:
          return te;
      }
    }
  }
  function Y(s) {
    return U(s) === w;
  }
  return N.AsyncMode = b, N.ConcurrentMode = w, N.ContextConsumer = y, N.ContextProvider = E, N.Element = p, N.ForwardRef = m, N.Fragment = u, N.Lazy = z, N.Memo = W, N.Portal = f, N.Profiler = d, N.StrictMode = v, N.Suspense = R, N.isAsyncMode = function(s) {
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
    return typeof s == "string" || typeof s == "function" || s === u || s === w || s === d || s === v || s === R || s === I || typeof s == "object" && s !== null && (s.$$typeof === z || s.$$typeof === W || s.$$typeof === E || s.$$typeof === y || s.$$typeof === m || s.$$typeof === V || s.$$typeof === B || s.$$typeof === q || s.$$typeof === L);
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
var dr;
function cn() {
  return dr || (dr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, p = n ? Symbol.for("react.element") : 60103, f = n ? Symbol.for("react.portal") : 60106, u = n ? Symbol.for("react.fragment") : 60107, v = n ? Symbol.for("react.strict_mode") : 60108, d = n ? Symbol.for("react.profiler") : 60114, E = n ? Symbol.for("react.provider") : 60109, y = n ? Symbol.for("react.context") : 60110, b = n ? Symbol.for("react.async_mode") : 60111, w = n ? Symbol.for("react.concurrent_mode") : 60111, m = n ? Symbol.for("react.forward_ref") : 60112, R = n ? Symbol.for("react.suspense") : 60113, I = n ? Symbol.for("react.suspense_list") : 60120, W = n ? Symbol.for("react.memo") : 60115, z = n ? Symbol.for("react.lazy") : 60116, L = n ? Symbol.for("react.block") : 60121, V = n ? Symbol.for("react.fundamental") : 60117, B = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
    function U(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === u || o === w || o === d || o === v || o === R || o === I || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === W || o.$$typeof === E || o.$$typeof === y || o.$$typeof === m || o.$$typeof === V || o.$$typeof === B || o.$$typeof === q || o.$$typeof === L);
    }
    function Y(o) {
      if (typeof o == "object" && o !== null) {
        var ee = o.$$typeof;
        switch (ee) {
          case p:
            var de = o.type;
            switch (de) {
              case b:
              case w:
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
    var s = b, te = w, he = y, me = E, ce = p, be = m, ue = u, le = z, X = W, H = f, ae = d, Q = v, ne = R, oe = !1;
    function fe(o) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(o) || Y(o) === b;
    }
    function t(o) {
      return Y(o) === w;
    }
    function c(o) {
      return Y(o) === y;
    }
    function x(o) {
      return Y(o) === E;
    }
    function C(o) {
      return typeof o == "object" && o !== null && o.$$typeof === p;
    }
    function g(o) {
      return Y(o) === m;
    }
    function P(o) {
      return Y(o) === u;
    }
    function _(o) {
      return Y(o) === z;
    }
    function T(o) {
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
    function J(o) {
      return Y(o) === R;
    }
    D.AsyncMode = s, D.ConcurrentMode = te, D.ContextConsumer = he, D.ContextProvider = me, D.Element = ce, D.ForwardRef = be, D.Fragment = ue, D.Lazy = le, D.Memo = X, D.Portal = H, D.Profiler = ae, D.StrictMode = Q, D.Suspense = ne, D.isAsyncMode = fe, D.isConcurrentMode = t, D.isContextConsumer = c, D.isContextProvider = x, D.isElement = C, D.isForwardRef = g, D.isFragment = P, D.isLazy = _, D.isMemo = T, D.isPortal = O, D.isProfiler = k, D.isStrictMode = S, D.isSuspense = J, D.isValidElementType = U, D.typeOf = Y;
  }()), D;
}
var pr;
function xr() {
  return pr || (pr = 1, process.env.NODE_ENV === "production" ? xe.exports = sn() : xe.exports = cn()), xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ne, vr;
function un() {
  if (vr) return Ne;
  vr = 1;
  var n = Object.getOwnPropertySymbols, p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
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
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        w[m] = m;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ne = v() ? Object.assign : function(d, E) {
    for (var y, b = u(d), w, m = 1; m < arguments.length; m++) {
      y = Object(arguments[m]);
      for (var R in y)
        p.call(y, R) && (b[R] = y[R]);
      if (n) {
        w = n(y);
        for (var I = 0; I < w.length; I++)
          f.call(y, w[I]) && (b[w[I]] = y[w[I]]);
      }
    }
    return b;
  }, Ne;
}
var De, yr;
function Ue() {
  if (yr) return De;
  yr = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return De = n, De;
}
var Me, hr;
function Or() {
  return hr || (hr = 1, Me = Function.call.bind(Object.prototype.hasOwnProperty)), Me;
}
var Le, mr;
function ln() {
  if (mr) return Le;
  mr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var p = Ue(), f = {}, u = Or();
    n = function(d) {
      var E = "Warning: " + d;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function v(d, E, y, b, w) {
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
          if (R && !(R instanceof Error) && n(
            (b || "React class") + ": type specification of " + y + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in f)) {
            f[R.message] = !0;
            var W = w ? w() : "";
            n(
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
var We, br;
function fn() {
  if (br) return We;
  br = 1;
  var n = xr(), p = un(), f = Ue(), u = Or(), v = ln(), d = function() {
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
    var w = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function R(t) {
      var c = t && (w && t[w] || t[m]);
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
      instanceOf: te,
      node: be(),
      objectOf: me,
      oneOf: he,
      oneOfType: ce,
      shape: le,
      exact: X
    };
    function z(t, c) {
      return t === c ? t !== 0 || 1 / t === 1 / c : t !== t && c !== c;
    }
    function L(t, c) {
      this.message = t, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    L.prototype = Error.prototype;
    function V(t) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, x = 0;
      function C(P, _, T, O, k, S, J) {
        if (O = O || I, S = S || T, J !== f) {
          if (b) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + T;
            !c[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (d(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[ee] = !0, x++);
          }
        }
        return _[T] == null ? P ? _[T] === null ? new L("The " + k + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new L("The " + k + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : t(_, T, O, k, S);
      }
      var g = C.bind(null, !1);
      return g.isRequired = C.bind(null, !0), g;
    }
    function B(t) {
      function c(x, C, g, P, _, T) {
        var O = x[C], k = Q(O);
        if (k !== t) {
          var S = ne(O);
          return new L(
            "Invalid " + P + " `" + _ + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return V(c);
    }
    function q() {
      return V(E);
    }
    function U(t) {
      function c(x, C, g, P, _) {
        if (typeof t != "function")
          return new L("Property `" + _ + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var T = x[C];
        if (!Array.isArray(T)) {
          var O = Q(T);
          return new L("Invalid " + P + " `" + _ + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an array."));
        }
        for (var k = 0; k < T.length; k++) {
          var S = t(T, k, g, P, _ + "[" + k + "]", f);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return V(c);
    }
    function Y() {
      function t(c, x, C, g, P) {
        var _ = c[x];
        if (!y(_)) {
          var T = Q(_);
          return new L("Invalid " + g + " `" + P + "` of type " + ("`" + T + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(t);
    }
    function s() {
      function t(c, x, C, g, P) {
        var _ = c[x];
        if (!n.isValidElementType(_)) {
          var T = Q(_);
          return new L("Invalid " + g + " `" + P + "` of type " + ("`" + T + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(t);
    }
    function te(t) {
      function c(x, C, g, P, _) {
        if (!(x[C] instanceof t)) {
          var T = t.name || I, O = fe(x[C]);
          return new L("Invalid " + P + " `" + _ + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return V(c);
    }
    function he(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? d(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : d("Invalid argument supplied to oneOf, expected an array.")), E;
      function c(x, C, g, P, _) {
        for (var T = x[C], O = 0; O < t.length; O++)
          if (z(T, t[O]))
            return null;
        var k = JSON.stringify(t, function(J, o) {
          var ee = ne(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new L("Invalid " + P + " `" + _ + "` of value `" + String(T) + "` " + ("supplied to `" + g + "`, expected one of " + k + "."));
      }
      return V(c);
    }
    function me(t) {
      function c(x, C, g, P, _) {
        if (typeof t != "function")
          return new L("Property `" + _ + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var T = x[C], O = Q(T);
        if (O !== "object")
          return new L("Invalid " + P + " `" + _ + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an object."));
        for (var k in T)
          if (u(T, k)) {
            var S = t(T, k, g, P, _ + "." + k, f);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return V(c);
    }
    function ce(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && d("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var c = 0; c < t.length; c++) {
        var x = t[c];
        if (typeof x != "function")
          return d(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(x) + " at index " + c + "."
          ), E;
      }
      function C(g, P, _, T, O) {
        for (var k = [], S = 0; S < t.length; S++) {
          var J = t[S], o = J(g, P, _, T, O, f);
          if (o == null)
            return null;
          o.data && u(o.data, "expectedType") && k.push(o.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new L("Invalid " + T + " `" + O + "` supplied to " + ("`" + _ + "`" + ee + "."));
      }
      return V(C);
    }
    function be() {
      function t(c, x, C, g, P) {
        return H(c[x]) ? null : new L("Invalid " + g + " `" + P + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return V(t);
    }
    function ue(t, c, x, C, g) {
      return new L(
        (t || "React class") + ": " + c + " type `" + x + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function le(t) {
      function c(x, C, g, P, _) {
        var T = x[C], O = Q(T);
        if (O !== "object")
          return new L("Invalid " + P + " `" + _ + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var k in t) {
          var S = t[k];
          if (typeof S != "function")
            return ue(g, P, _, k, ne(S));
          var J = S(T, k, g, P, _ + "." + k, f);
          if (J)
            return J;
        }
        return null;
      }
      return V(c);
    }
    function X(t) {
      function c(x, C, g, P, _) {
        var T = x[C], O = Q(T);
        if (O !== "object")
          return new L("Invalid " + P + " `" + _ + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        var k = p({}, x[C], t);
        for (var S in k) {
          var J = t[S];
          if (u(t, S) && typeof J != "function")
            return ue(g, P, _, S, ne(J));
          if (!J)
            return new L(
              "Invalid " + P + " `" + _ + "` key `" + S + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(x[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var o = J(T, S, g, P, _ + "." + S, f);
          if (o)
            return o;
        }
        return null;
      }
      return V(c);
    }
    function H(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(H);
          if (t === null || y(t))
            return !0;
          var c = R(t);
          if (c) {
            var x = c.call(t), C;
            if (c !== t.entries) {
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
    function ae(t, c) {
      return t === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function Q(t) {
      var c = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : ae(c, t) ? "symbol" : c;
    }
    function ne(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var c = Q(t);
      if (c === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function oe(t) {
      var c = ne(t);
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
    function fe(t) {
      return !t.constructor || !t.constructor.name ? I : t.constructor.name;
    }
    return W.checkPropTypes = v, W.resetWarningCache = v.resetWarningCache, W.PropTypes = W, W;
  }, We;
}
var qe, gr;
function dn() {
  if (gr) return qe;
  gr = 1;
  var n = Ue();
  function p() {
  }
  function f() {
  }
  return f.resetWarningCache = p, qe = function() {
    function u(E, y, b, w, m, R) {
      if (R !== n) {
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
  var pn = xr(), vn = !0;
  Be.exports = fn()(pn.isElement, vn);
} else
  Be.exports = dn()();
var yn = Be.exports;
const a = /* @__PURE__ */ tn(yn), hn = "_iconButton_1963e_1", mn = {
  iconButton: hn
}, bn = {
  trash: Xr,
  filter: Hr,
  info: Zr,
  fill: Qr,
  ellipsis: en,
  chevronRight: Cr,
  chevronLeft: rn
}, je = ({ onClick: n, iconName: p }) => /* @__PURE__ */ l.jsx("div", { className: mn.iconButton, children: /* @__PURE__ */ l.jsx("button", { "aria-label": p, type: "button", onClick: n, children: /* @__PURE__ */ l.jsx(Rr, { icon: bn[p] }) }) });
je.propTypes = {
  iconName: a.oneOf([
    "trash",
    "filter",
    "info",
    "fill",
    "ellipsis",
    "chevronLeft",
    "chevronRight"
  ]),
  onClick: a.func.isRequired
};
je.defaultProps = {
  iconName: "ellipsis"
};
const gn = "_layerButtonReel_1o59k_1", _n = {
  layerButtonReel: gn
}, Ve = ({ buttons: n }) => /* @__PURE__ */ l.jsx("div", { className: _n.layerButtonReel, children: n && n.map(({ name: p, callback: f, icon: u }) => /* @__PURE__ */ l.jsx(je, { iconName: u, onClick: f })) });
Ve.propTypes = {
  buttons: a.objectOf(a.func)
};
Ve.defaultProps = {
  buttons: null
};
const Tn = "_layerToggle_gvlf4_7", En = "_slider_gvlf4_29", Fe = {
  layerToggle: Tn,
  switch: "_switch_gvlf4_12",
  slider: En
}, ze = ({ layerName: n, isActive: p, onChange: f }) => /* @__PURE__ */ l.jsx("div", { className: Fe.layerToggle, children: /* @__PURE__ */ l.jsxs("div", { className: Fe.switch, children: [
  /* @__PURE__ */ l.jsx(
    "input",
    {
      type: "checkbox",
      value: n,
      checked: p,
      onChange: f
    }
  ),
  /* @__PURE__ */ l.jsx("span", { className: Fe.slider })
] }) });
ze.propTypes = {
  layerName: a.string,
  isActive: a.bool,
  onChange: a.func.isRequired
};
ze.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const Rn = "_layerCard_mism4_1", Cn = "_layerCardWrapper_mism4_11", xn = "_layerCardTextWrapper_mism4_20", On = "_layerCardTitle_mism4_28", Sn = "_layerCardDescription_mism4_32", jn = "_layerCardControls_mism4_37", wn = "_layerCardToggle_mism4_42", Pn = "_layerCardChildren_mism4_47", ye = {
  layerCard: Rn,
  layerCardWrapper: Cn,
  layerCardTextWrapper: xn,
  layerCardTitle: On,
  layerCardDescription: Sn,
  layerCardControls: jn,
  layerCardToggle: wn,
  layerCardChildren: Pn
}, An = ({ layerName: n, isActive: p, onChange: f, buttons: u, description: v, children: d }) => /* @__PURE__ */ l.jsxs("div", { className: ye.layerCard, children: [
  /* @__PURE__ */ l.jsxs("div", { className: ye.layerCardWrapper, children: [
    /* @__PURE__ */ l.jsxs("div", { className: ye.layerCardTextWrapper, children: [
      /* @__PURE__ */ l.jsx("span", { className: ye.layerCardTitle, children: n }),
      /* @__PURE__ */ l.jsx("span", { className: ye.layerCardDescription, children: v })
    ] }),
    /* @__PURE__ */ l.jsx(Ve, { buttons: u }),
    f && /* @__PURE__ */ l.jsx(
      ze,
      {
        layerName: n,
        isActive: p,
        onChange: f
      }
    )
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: ye.layerCardChildren, children: d })
] });
An.propTypes = {
  layerName: a.string.isRequired,
  isActive: a.bool,
  onChange: a.func.isRequired,
  buttons: a.objectOf(a.func),
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ])
};
const kn = "_swatchContainer_1r5li_2", In = "_swatch_1r5li_2", $n = "_swatchLabel_1r5li_18", Nn = "_swatchValue_1r5li_24", Oe = {
  swatchContainer: kn,
  swatch: In,
  swatchLabel: $n,
  swatchValue: Nn
}, Je = ({ color: n, label: p, value: f, units: u }) => /* @__PURE__ */ l.jsxs("div", { className: Oe.swatchContainer, children: [
  /* @__PURE__ */ l.jsx("div", { className: Oe.swatch, style: { "background-color": n } }),
  /* @__PURE__ */ l.jsx("div", { className: Oe.swatchLabel, children: p }),
  /* @__PURE__ */ l.jsxs("div", { className: Oe.swatchValue, children: [
    f,
    u
  ] })
] });
Je.propTypes = {
  color: a.string.isRequired,
  label: a.string.isRequired,
  value: a.number,
  units: a.string
};
Je.defaultProps = {
  value: void 0,
  units: ""
};
const Dn = "_swatchLegend_qiaru_1", Mn = {
  swatchLegend: Dn
}, Ln = ({ swatches: n }) => /* @__PURE__ */ l.jsx("div", { className: Mn.swatchLegend, children: n && n.map((p) => {
  const { color: f, label: u, value: v, units: d } = p;
  return /* @__PURE__ */ l.jsx(
    Je,
    {
      label: u,
      color: f,
      value: v,
      units: d
    },
    u
  );
}) });
Ln.propTypes = {
  swatches: a.arrayOf(a.objectOf(a.string)).isRequired
};
const Wn = "_gradient_1w8qh_1", qn = "_gradientNumbers_1w8qh_6", Fn = "_gradientLegend_1w8qh_11", Se = {
  gradient: Wn,
  gradientNumbers: qn,
  gradientLegend: Fn
}, Yn = ({
  title: n,
  startColor: p = "red",
  endColor: f = "yellow",
  startNo: u,
  endNo: v,
  titleBelow: d = !1,
  bins: E = 0,
  precision: y = 2,
  units: b
}) => {
  const w = E > 0 ? Array(E - 1).fill(0).map((m, R) => {
    const I = (u + (v - u) / E * (R + 1)).toPrecision(y);
    return /* @__PURE__ */ l.jsx("span", { children: I }, I);
  }) : [];
  return /* @__PURE__ */ l.jsxs("div", { className: "gradient-box", children: [
    !d && /* @__PURE__ */ l.jsxs("div", { className: "ui-title", children: [
      " ",
      n
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
        w,
        /* @__PURE__ */ l.jsxs("span", { children: [
          v,
          " ",
          b
        ] })
      ] }),
      d && /* @__PURE__ */ l.jsxs("div", { className: Se.uiTitle, children: [
        " ",
        n
      ] })
    ] })
  ] });
};
Yn.propTypes = {
  title: a.string,
  startColor: a.string,
  endColor: a.string,
  startNo: a.number,
  endNo: a.number,
  titleBelow: a.bool,
  bins: a.number,
  precision: a.number
};
const Gn = "_simpleSlider_qj292_1", Bn = "_simpleSliderInput_qj292_7", Un = "_simpleSliderMinMaxContainer_qj292_11", Ye = {
  simpleSlider: Gn,
  simpleSliderInput: Bn,
  simpleSliderMinMaxContainer: Un
}, Ke = ({
  units: n,
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
      n
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "ui-label", children: [
      v,
      n
    ] })
  ] })
] });
Ke.propTypes = {
  onChange: a.func.isRequired,
  min: a.number.isRequired,
  max: a.number.isRequired,
  step: a.number.isRequired,
  value: a.number,
  label: a.string,
  units: a.string
};
Ke.defaultProps = {
  value: 0,
  units: "",
  label: ""
};
const Vn = "_layerGroupButton_1twxx_1", zn = "_layerGroupChevron_1twxx_12", Jn = "_layerGroupName_1twxx_25", Kn = "_layerGroupWrapper_1twxx_32", Xn = "_layerGroupChildren_1twxx_32", Re = {
  layerGroupButton: Vn,
  layerGroupChevron: zn,
  layerGroupName: Jn,
  layerGroupWrapper: Kn,
  layerGroupChildren: Xn
}, Hn = ({ groupName: n, children: p }) => {
  const [f, u] = Er(!1), v = () => {
    u(!f);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: Re.layerGroupWrapper, children: [
    /* @__PURE__ */ l.jsxs("button", { type: "button", className: Re.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ l.jsx("div", { className: Re.layerGroupChevron, children: /* @__PURE__ */ l.jsx(Rr, { size: "md", fixedWidth: !0, icon: f ? nn : Cr }) }),
      /* @__PURE__ */ l.jsx("span", { className: Re.layerGroupName, children: n })
    ] }),
    f && /* @__PURE__ */ l.jsx("div", { className: Re.layerGroupChildren, children: p })
  ] });
};
Hn.propTypes = {
  groupName: a.string,
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const Sr = ({ mapContainer: n, id: p, children: f }) => /* @__PURE__ */ l.jsx("div", { className: "map-container", id: p, ref: n, children: f });
Sr.propTypes = {
  mapContainer: a.oneOfType([
    a.func,
    a.shape({ current: a.instanceOf(Element) })
  ]),
  children: a.node,
  id: a.string
};
Sr.defaultProps = {
  children: null,
  mapContainer: null,
  id: null
};
const Zn = ({ children: n }) => /* @__PURE__ */ l.jsx("div", { className: "nav-container", children: n });
Zn.propTypes = {
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const Qn = ({ showToggle: n, children: p }) => {
  const [f, u] = Er(!1), v = `sidebar ${f ? "closed" : ""}`, d = () => {
    u(!f);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ l.jsx("div", { className: v, children: p }),
    n && /* @__PURE__ */ l.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ l.jsx(
      je,
      {
        onClick: d,
        iconName: f ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
Qn.propTypes = {
  showToggle: a.bool,
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const et = ({ children: n }) => /* @__PURE__ */ l.jsx("div", { className: "layout-stacked", children: n });
et.propTypes = {
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const rt = ({ align: n = "left", children: p }) => /* @__PURE__ */ l.jsx("div", { className: `layout-standard ${n}`, children: p });
rt.propTypes = {
  align: a.oneOf(["left", "right"]),
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const nt = "_sliderControlWrapper_2tznx_1", tt = "_sliderLabel_2tznx_9", _r = {
  sliderControlWrapper: nt,
  sliderLabel: tt
}, at = ({ title: n, units: p, sliderConfig: f }) => /* @__PURE__ */ l.jsxs("div", { className: _r.sliderControlWrapper, children: [
  /* @__PURE__ */ l.jsx("div", { className: "ui-label", children: n }),
  /* @__PURE__ */ l.jsx("div", {}),
  f && f.map((u) => {
    const { label: v } = u;
    return /* @__PURE__ */ l.jsx("div", { className: _r.sliderLabel, children: v });
  }),
  f && f.map((u) => {
    const { onChange: v, min: d, max: E, step: y, value: b } = u;
    return /* @__PURE__ */ l.jsx(
      Ke,
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
at.propTypes = {
  title: a.string.isRequired,
  units: a.string.isRequired,
  sliderConfig: a.arrayOf(a.objectOf(a.string)).isRequired
};
export {
  Yn as GradientLegend,
  je as IconButton,
  Ve as LayerButtonReel,
  An as LayerCard,
  Hn as LayerGroup,
  ze as LayerToggle,
  Sr as MapContainer,
  Zn as NavContainer,
  Qn as SidebarContainer,
  Ke as SimpleSlider,
  at as SliderControl,
  et as Stacked,
  rt as Standard,
  Je as Swatch,
  Ln as SwatchLegend
};
