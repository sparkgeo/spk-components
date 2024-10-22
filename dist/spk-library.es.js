import Er, { useState as Tr } from "react";
import { FontAwesomeIcon as Rr } from "@fortawesome/react-fontawesome";
import { faTrash as Xr, faFilter as Hr, faInfo as Zr, faFillDrip as Qr, faEllipsisVertical as en, faChevronRight as xr, faChevronLeft as rn, faChevronDown as nn } from "@fortawesome/free-solid-svg-icons";
function tn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ge = { exports: {} }, _e = {};
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
  if (ur) return _e;
  ur = 1;
  var r = Er, p = Symbol.for("react.element"), f = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(y, b, w) {
    var h, E = {}, q = null, D = null;
    w !== void 0 && (q = "" + w), b.key !== void 0 && (q = "" + b.key), b.ref !== void 0 && (D = b.ref);
    for (h in b) u.call(b, h) && !d.hasOwnProperty(h) && (E[h] = b[h]);
    if (y && y.defaultProps) for (h in b = y.defaultProps, b) E[h] === void 0 && (E[h] = b[h]);
    return { $$typeof: p, type: y, key: q, ref: D, props: E, _owner: v.current };
  }
  return _e.Fragment = f, _e.jsx = R, _e.jsxs = R, _e;
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
    var r = Er, p = Symbol.for("react.element"), f = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), z = Symbol.iterator, L = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = z && e[z] || e[L];
      return typeof n == "function" ? n : null;
    }
    var U = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function W(e) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), m = 1; m < n; m++)
          i[m - 1] = arguments[m];
        V("error", e, i);
      }
    }
    function V(e, n, i) {
      {
        var m = U.ReactDebugCurrentFrame, I = m.getStackAddendum();
        I !== "" && (n += "%s", i = i.concat([I]));
        var M = i.map(function(A) {
          return String(A);
        });
        M.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var Y = !1, s = !1, te = !1, ye = !1, he = !1, ce;
    ce = Symbol.for("react.module.reference");
    function me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === d || he || e === v || e === w || e === h || ye || e === D || Y || s || te || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === E || e.$$typeof === R || e.$$typeof === y || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function ue(e, n, i) {
      var m = e.displayName;
      if (m)
        return m;
      var I = n.displayName || n.name || "";
      return I !== "" ? i + "(" + I + ")" : i;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && W("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var n = e;
            return le(n) + ".Consumer";
          case R:
            var i = e;
            return le(i._context) + ".Provider";
          case b:
            return ue(e, e.render, "ForwardRef");
          case E:
            var m = e.displayName || null;
            return m !== null ? m : X(e.type) || "Memo";
          case q: {
            var I = e, M = I._payload, A = I._init;
            try {
              return X(A(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, ae = 0, Q, ne, oe, fe, t, c, C;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, ne = console.info, oe = console.warn, fe = console.error, t = console.group, c = console.groupCollapsed, C = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: x,
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
              value: C
            })
          });
        }
        ae < 0 && W("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _ = U.ReactCurrentDispatcher, T;
    function O(e, n, i) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (I) {
            var m = I.stack.trim().match(/\n( *(at )?)/);
            T = m && m[1] || "";
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
    function o(e, n) {
      if (!e || k)
        return "";
      {
        var i = S.get(e);
        if (i !== void 0)
          return i;
      }
      var m;
      k = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = _.current, _.current = null, g();
      try {
        if (n) {
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
          for (var j = Z.stack.split(`
`), K = m.stack.split(`
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
        k = !1, _.current = M, P(), Error.prepareStackTrace = I;
      }
      var ve = e ? e.displayName || e.name : "", se = ve ? O(ve) : "";
      return typeof e == "function" && S.set(e, se), se;
    }
    function ee(e, n, i) {
      return o(e, !1);
    }
    function de(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ie(e, n, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return o(e, de(e));
      if (typeof e == "string")
        return O(e);
      switch (e) {
        case w:
          return O("Suspense");
        case h:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return ee(e.render);
          case E:
            return ie(e.type, n, i);
          case q: {
            var m = e, I = m._payload, M = m._init;
            try {
              return ie(M(I), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Xe = {}, He = U.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var n = e._owner, i = ie(e.type, e._source, n ? n.type : null);
        He.setExtraStackFrame(i);
      } else
        He.setExtraStackFrame(null);
    }
    function jr(e, n, i, m, I) {
      {
        var M = Function.call.bind(be);
        for (var A in e)
          if (M(e, A)) {
            var j = void 0;
            try {
              if (typeof e[A] != "function") {
                var K = Error((m || "React class") + ": " + i + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              j = e[A](n, A, m, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              j = F;
            }
            j && !(j instanceof Error) && (Re(I), W("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", i, A, typeof j), Re(null)), j instanceof Error && !(j.message in Xe) && (Xe[j.message] = !0, Re(I), W("Failed %s type: %s", i, j.message), Re(null));
          }
      }
    }
    var wr = Array.isArray;
    function je(e) {
      return wr(e);
    }
    function Pr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        return W("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pr(e)), Ze(e);
    }
    var ge = U.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, we;
    we = {};
    function Ir(e) {
      if (be.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function $r(e) {
      if (be.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Nr(e, n) {
      if (typeof e.ref == "string" && ge.current && n && ge.current.stateNode !== n) {
        var i = X(ge.current.type);
        we[i] || (W('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(ge.current.type), e.ref), we[i] = !0);
      }
    }
    function qr(e, n) {
      {
        var i = function() {
          er || (er = !0, W("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Mr(e, n) {
      {
        var i = function() {
          rr || (rr = !0, W("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Lr = function(e, n, i, m, I, M, A) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: n,
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
        value: m
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Dr(e, n, i, m, I) {
      {
        var M, A = {}, j = null, K = null;
        i !== void 0 && (Qe(i), j = "" + i), $r(n) && (Qe(n.key), j = "" + n.key), Ir(n) && (K = n.ref, Nr(n, I));
        for (M in n)
          be.call(n, M) && !kr.hasOwnProperty(M) && (A[M] = n[M]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (M in F)
            A[M] === void 0 && (A[M] = F[M]);
        }
        if (j || K) {
          var G = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          j && qr(A, G), K && Mr(A, G);
        }
        return Lr(e, j, K, I, m, ge.current, A);
      }
    }
    var Pe = U.ReactCurrentOwner, nr = U.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var n = e._owner, i = ie(e.type, e._source, n ? n.type : null);
        nr.setExtraStackFrame(i);
      } else
        nr.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function ke(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function tr() {
      {
        if (Pe.current) {
          var e = X(Pe.current.type);
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
    var ar = {};
    function Fr(e) {
      {
        var n = tr();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function or(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Fr(n);
        if (ar[i])
          return;
        ar[i] = !0;
        var m = "";
        e && e._owner && e._owner !== Pe.current && (m = " It was passed a child from " + X(e._owner.type) + "."), pe(e), W('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, m), pe(null);
      }
    }
    function ir(e, n) {
      {
        if (typeof e != "object")
          return;
        if (je(e))
          for (var i = 0; i < e.length; i++) {
            var m = e[i];
            ke(m) && or(m, n);
          }
        else if (ke(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = B(e);
          if (typeof I == "function" && I !== e.entries)
            for (var M = I.call(e), A; !(A = M.next()).done; )
              ke(A.value) && or(A.value, n);
        }
      }
    }
    function Yr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === E))
          i = n.propTypes;
        else
          return;
        if (i) {
          var m = X(n);
          jr(i, e.props, "prop", m, e);
        } else if (n.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var I = X(n);
          W("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && W("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gr(e) {
      {
        for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
          var m = n[i];
          if (m !== "children" && m !== "key") {
            pe(e), W("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), W("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var sr = {};
    function cr(e, n, i, m, I, M) {
      {
        var A = me(e);
        if (!A) {
          var j = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Wr();
          K ? j += K : j += tr();
          var F;
          e === null ? F = "null" : je(e) ? F = "array" : e !== void 0 && e.$$typeof === p ? (F = "<" + (X(e.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, W("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, j);
        }
        var G = Dr(e, n, i, I, M);
        if (G == null)
          return G;
        if (A) {
          var re = n.children;
          if (re !== void 0)
            if (m)
              if (je(re)) {
                for (var ve = 0; ve < re.length; ve++)
                  ir(re[ve], e);
                Object.freeze && Object.freeze(re);
              } else
                W("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(re, e);
        }
        if (be.call(n, "key")) {
          var se = X(e), Z = Object.keys(n).filter(function(Kr) {
            return Kr !== "key";
          }), Ie = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[se + Ie]) {
            var Jr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            W(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ie, se, Jr, se), sr[se + Ie] = !0;
          }
        }
        return e === u ? Gr(G) : Yr(G), G;
      }
    }
    function Ur(e, n, i) {
      return cr(e, n, i, !0);
    }
    function Vr(e, n, i) {
      return cr(e, n, i, !1);
    }
    var Br = Vr, zr = Ur;
    Ee.Fragment = u, Ee.jsx = Br, Ee.jsxs = zr;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ge.exports = an() : Ge.exports = on();
var l = Ge.exports, Ue = { exports: {} }, xe = { exports: {} }, $ = {};
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
  if (fr) return $;
  fr = 1;
  var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, R = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, b = r ? Symbol.for("react.async_mode") : 60111, w = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, E = r ? Symbol.for("react.suspense") : 60113, q = r ? Symbol.for("react.suspense_list") : 60120, D = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, L = r ? Symbol.for("react.block") : 60121, B = r ? Symbol.for("react.fundamental") : 60117, U = r ? Symbol.for("react.responder") : 60118, W = r ? Symbol.for("react.scope") : 60119;
  function V(s) {
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
            case E:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case y:
                case h:
                case z:
                case D:
                case R:
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
    return V(s) === w;
  }
  return $.AsyncMode = b, $.ConcurrentMode = w, $.ContextConsumer = y, $.ContextProvider = R, $.Element = p, $.ForwardRef = h, $.Fragment = u, $.Lazy = z, $.Memo = D, $.Portal = f, $.Profiler = d, $.StrictMode = v, $.Suspense = E, $.isAsyncMode = function(s) {
    return Y(s) || V(s) === b;
  }, $.isConcurrentMode = Y, $.isContextConsumer = function(s) {
    return V(s) === y;
  }, $.isContextProvider = function(s) {
    return V(s) === R;
  }, $.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === p;
  }, $.isForwardRef = function(s) {
    return V(s) === h;
  }, $.isFragment = function(s) {
    return V(s) === u;
  }, $.isLazy = function(s) {
    return V(s) === z;
  }, $.isMemo = function(s) {
    return V(s) === D;
  }, $.isPortal = function(s) {
    return V(s) === f;
  }, $.isProfiler = function(s) {
    return V(s) === d;
  }, $.isStrictMode = function(s) {
    return V(s) === v;
  }, $.isSuspense = function(s) {
    return V(s) === E;
  }, $.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === u || s === w || s === d || s === v || s === E || s === q || typeof s == "object" && s !== null && (s.$$typeof === z || s.$$typeof === D || s.$$typeof === R || s.$$typeof === y || s.$$typeof === h || s.$$typeof === B || s.$$typeof === U || s.$$typeof === W || s.$$typeof === L);
  }, $.typeOf = V, $;
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
var dr;
function cn() {
  return dr || (dr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, R = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, b = r ? Symbol.for("react.async_mode") : 60111, w = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, E = r ? Symbol.for("react.suspense") : 60113, q = r ? Symbol.for("react.suspense_list") : 60120, D = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, L = r ? Symbol.for("react.block") : 60121, B = r ? Symbol.for("react.fundamental") : 60117, U = r ? Symbol.for("react.responder") : 60118, W = r ? Symbol.for("react.scope") : 60119;
    function V(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === u || o === w || o === d || o === v || o === E || o === q || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === D || o.$$typeof === R || o.$$typeof === y || o.$$typeof === h || o.$$typeof === B || o.$$typeof === U || o.$$typeof === W || o.$$typeof === L);
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
              case E:
                return de;
              default:
                var ie = de && de.$$typeof;
                switch (ie) {
                  case y:
                  case h:
                  case z:
                  case D:
                  case R:
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
    var s = b, te = w, ye = y, he = R, ce = p, me = h, ue = u, le = z, X = D, H = f, ae = d, Q = v, ne = E, oe = !1;
    function fe(o) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(o) || Y(o) === b;
    }
    function t(o) {
      return Y(o) === w;
    }
    function c(o) {
      return Y(o) === y;
    }
    function C(o) {
      return Y(o) === R;
    }
    function x(o) {
      return typeof o == "object" && o !== null && o.$$typeof === p;
    }
    function g(o) {
      return Y(o) === h;
    }
    function P(o) {
      return Y(o) === u;
    }
    function _(o) {
      return Y(o) === z;
    }
    function T(o) {
      return Y(o) === D;
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
      return Y(o) === E;
    }
    N.AsyncMode = s, N.ConcurrentMode = te, N.ContextConsumer = ye, N.ContextProvider = he, N.Element = ce, N.ForwardRef = me, N.Fragment = ue, N.Lazy = le, N.Memo = X, N.Portal = H, N.Profiler = ae, N.StrictMode = Q, N.Suspense = ne, N.isAsyncMode = fe, N.isConcurrentMode = t, N.isContextConsumer = c, N.isContextProvider = C, N.isElement = x, N.isForwardRef = g, N.isFragment = P, N.isLazy = _, N.isMemo = T, N.isPortal = O, N.isProfiler = k, N.isStrictMode = S, N.isSuspense = J, N.isValidElementType = V, N.typeOf = Y;
  }()), N;
}
var pr;
function Cr() {
  return pr || (pr = 1, process.env.NODE_ENV === "production" ? xe.exports = sn() : xe.exports = cn()), xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $e, vr;
function un() {
  if (vr) return $e;
  vr = 1;
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
      for (var R = {}, y = 0; y < 10; y++)
        R["_" + String.fromCharCode(y)] = y;
      var b = Object.getOwnPropertyNames(R).map(function(h) {
        return R[h];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        w[h] = h;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $e = v() ? Object.assign : function(d, R) {
    for (var y, b = u(d), w, h = 1; h < arguments.length; h++) {
      y = Object(arguments[h]);
      for (var E in y)
        p.call(y, E) && (b[E] = y[E]);
      if (r) {
        w = r(y);
        for (var q = 0; q < w.length; q++)
          f.call(y, w[q]) && (b[w[q]] = y[w[q]]);
      }
    }
    return b;
  }, $e;
}
var Ne, yr;
function Ve() {
  if (yr) return Ne;
  yr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ne = r, Ne;
}
var qe, hr;
function Or() {
  return hr || (hr = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var Me, mr;
function ln() {
  if (mr) return Me;
  mr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var p = Ve(), f = {}, u = Or();
    r = function(d) {
      var R = "Warning: " + d;
      typeof console < "u" && console.error(R);
      try {
        throw new Error(R);
      } catch {
      }
    };
  }
  function v(d, R, y, b, w) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in d)
        if (u(d, h)) {
          var E;
          try {
            if (typeof d[h] != "function") {
              var q = Error(
                (b || "React class") + ": " + y + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw q.name = "Invariant Violation", q;
            }
            E = d[h](R, h, b, y, null, p);
          } catch (z) {
            E = z;
          }
          if (E && !(E instanceof Error) && r(
            (b || "React class") + ": type specification of " + y + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in f)) {
            f[E.message] = !0;
            var D = w ? w() : "";
            r(
              "Failed " + y + " type: " + E.message + (D ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, Me = v, Me;
}
var Le, br;
function fn() {
  if (br) return Le;
  br = 1;
  var r = Cr(), p = un(), f = Ve(), u = Or(), v = ln(), d = function() {
  };
  process.env.NODE_ENV !== "production" && (d = function(y) {
    var b = "Warning: " + y;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function R() {
    return null;
  }
  return Le = function(y, b) {
    var w = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function E(t) {
      var c = t && (w && t[w] || t[h]);
      if (typeof c == "function")
        return c;
    }
    var q = "<<anonymous>>", D = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: W(),
      arrayOf: V,
      element: Y(),
      elementType: s(),
      instanceOf: te,
      node: me(),
      objectOf: he,
      oneOf: ye,
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
    function B(t) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, C = 0;
      function x(P, _, T, O, k, S, J) {
        if (O = O || q, S = S || T, J !== f) {
          if (b) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + T;
            !c[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (d(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[ee] = !0, C++);
          }
        }
        return _[T] == null ? P ? _[T] === null ? new L("The " + k + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new L("The " + k + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : t(_, T, O, k, S);
      }
      var g = x.bind(null, !1);
      return g.isRequired = x.bind(null, !0), g;
    }
    function U(t) {
      function c(C, x, g, P, _, T) {
        var O = C[x], k = Q(O);
        if (k !== t) {
          var S = ne(O);
          return new L(
            "Invalid " + P + " `" + _ + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return B(c);
    }
    function W() {
      return B(R);
    }
    function V(t) {
      function c(C, x, g, P, _) {
        if (typeof t != "function")
          return new L("Property `" + _ + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var T = C[x];
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
      return B(c);
    }
    function Y() {
      function t(c, C, x, g, P) {
        var _ = c[C];
        if (!y(_)) {
          var T = Q(_);
          return new L("Invalid " + g + " `" + P + "` of type " + ("`" + T + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return B(t);
    }
    function s() {
      function t(c, C, x, g, P) {
        var _ = c[C];
        if (!r.isValidElementType(_)) {
          var T = Q(_);
          return new L("Invalid " + g + " `" + P + "` of type " + ("`" + T + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return B(t);
    }
    function te(t) {
      function c(C, x, g, P, _) {
        if (!(C[x] instanceof t)) {
          var T = t.name || q, O = fe(C[x]);
          return new L("Invalid " + P + " `" + _ + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return B(c);
    }
    function ye(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? d(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : d("Invalid argument supplied to oneOf, expected an array.")), R;
      function c(C, x, g, P, _) {
        for (var T = C[x], O = 0; O < t.length; O++)
          if (z(T, t[O]))
            return null;
        var k = JSON.stringify(t, function(J, o) {
          var ee = ne(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new L("Invalid " + P + " `" + _ + "` of value `" + String(T) + "` " + ("supplied to `" + g + "`, expected one of " + k + "."));
      }
      return B(c);
    }
    function he(t) {
      function c(C, x, g, P, _) {
        if (typeof t != "function")
          return new L("Property `" + _ + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var T = C[x], O = Q(T);
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
      return B(c);
    }
    function ce(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && d("Invalid argument supplied to oneOfType, expected an instance of array."), R;
      for (var c = 0; c < t.length; c++) {
        var C = t[c];
        if (typeof C != "function")
          return d(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(C) + " at index " + c + "."
          ), R;
      }
      function x(g, P, _, T, O) {
        for (var k = [], S = 0; S < t.length; S++) {
          var J = t[S], o = J(g, P, _, T, O, f);
          if (o == null)
            return null;
          o.data && u(o.data, "expectedType") && k.push(o.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new L("Invalid " + T + " `" + O + "` supplied to " + ("`" + _ + "`" + ee + "."));
      }
      return B(x);
    }
    function me() {
      function t(c, C, x, g, P) {
        return H(c[C]) ? null : new L("Invalid " + g + " `" + P + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return B(t);
    }
    function ue(t, c, C, x, g) {
      return new L(
        (t || "React class") + ": " + c + " type `" + C + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function le(t) {
      function c(C, x, g, P, _) {
        var T = C[x], O = Q(T);
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
      return B(c);
    }
    function X(t) {
      function c(C, x, g, P, _) {
        var T = C[x], O = Q(T);
        if (O !== "object")
          return new L("Invalid " + P + " `" + _ + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        var k = p({}, C[x], t);
        for (var S in k) {
          var J = t[S];
          if (u(t, S) && typeof J != "function")
            return ue(g, P, _, S, ne(J));
          if (!J)
            return new L(
              "Invalid " + P + " `" + _ + "` key `" + S + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(C[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var o = J(T, S, g, P, _ + "." + S, f);
          if (o)
            return o;
        }
        return null;
      }
      return B(c);
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
          var c = E(t);
          if (c) {
            var C = c.call(t), x;
            if (c !== t.entries) {
              for (; !(x = C.next()).done; )
                if (!H(x.value))
                  return !1;
            } else
              for (; !(x = C.next()).done; ) {
                var g = x.value;
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
      return !t.constructor || !t.constructor.name ? q : t.constructor.name;
    }
    return D.checkPropTypes = v, D.resetWarningCache = v.resetWarningCache, D.PropTypes = D, D;
  }, Le;
}
var De, gr;
function dn() {
  if (gr) return De;
  gr = 1;
  var r = Ve();
  function p() {
  }
  function f() {
  }
  return f.resetWarningCache = p, De = function() {
    function u(R, y, b, w, h, E) {
      if (E !== r) {
        var q = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw q.name = "Invariant Violation", q;
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
  }, De;
}
if (process.env.NODE_ENV !== "production") {
  var pn = Cr(), vn = !0;
  Ue.exports = fn()(pn.isElement, vn);
} else
  Ue.exports = dn()();
var yn = Ue.exports;
const a = /* @__PURE__ */ tn(yn), hn = "_iconButton_1963e_1", mn = {
  iconButton: hn
}, bn = {
  trash: Xr,
  filter: Hr,
  info: Zr,
  fill: Qr,
  ellipsis: en,
  chevronRight: xr,
  chevronLeft: rn
}, Se = ({ onClick: r, iconName: p }) => /* @__PURE__ */ l.jsx("div", { className: mn.iconButton, children: /* @__PURE__ */ l.jsx("button", { "aria-label": p, type: "button", onClick: r, children: /* @__PURE__ */ l.jsx(Rr, { icon: bn[p] }) }) });
Se.propTypes = {
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
Se.defaultProps = {
  iconName: "ellipsis"
};
const gn = "_layerButtonReel_1o59k_1", _n = {
  layerButtonReel: gn
}, Be = ({ buttons: r }) => /* @__PURE__ */ l.jsx("div", { className: _n.layerButtonReel, children: r && Object.keys(r).map((p) => /* @__PURE__ */ l.jsx(Se, { iconName: p, onClick: r[p] })) });
Be.propTypes = {
  buttons: a.objectOf(a.func)
};
Be.defaultProps = {
  buttons: null
};
const En = "_layerToggle_1rxix_7", Tn = "_slider_1rxix_32", We = {
  layerToggle: En,
  switch: "_switch_1rxix_15",
  slider: Tn
}, ze = ({ layerName: r, isActive: p, onChange: f }) => /* @__PURE__ */ l.jsxs("div", { className: We.layerToggle, children: [
  /* @__PURE__ */ l.jsx("p", { children: r }),
  /* @__PURE__ */ l.jsxs("div", { className: We.switch, children: [
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "checkbox",
        value: r,
        checked: p,
        onChange: f
      }
    ),
    /* @__PURE__ */ l.jsx("span", { className: We.slider })
  ] })
] });
ze.propTypes = {
  layerName: a.string,
  isActive: a.bool,
  onChange: a.func.isRequired
};
ze.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const Rn = "_layerCard_x5vr4_1", xn = "_layerCardWrapper_x5vr4_10", Cn = "_layerCardChildren_x5vr4_17", Fe = {
  layerCard: Rn,
  layerCardWrapper: xn,
  layerCardChildren: Cn
}, On = ({ layerName: r, isActive: p, onChange: f, buttons: u, children: v }) => /* @__PURE__ */ l.jsxs("div", { className: Fe.layerCard, children: [
  /* @__PURE__ */ l.jsxs("div", { className: Fe.layerCardWrapper, children: [
    /* @__PURE__ */ l.jsx(
      ze,
      {
        layerName: r,
        isActive: p,
        onChange: f
      }
    ),
    /* @__PURE__ */ l.jsx(Be, { buttons: u })
  ] }),
  p && /* @__PURE__ */ l.jsx("div", { className: Fe.layerCardChildren, children: v })
] });
On.propTypes = {
  layerName: a.string.isRequired,
  isActive: a.bool,
  onChange: a.func.isRequired,
  buttons: a.objectOf(a.func),
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ])
};
const Sn = "_swatchContainer_1r5li_2", jn = "_swatch_1r5li_2", wn = "_swatchLabel_1r5li_18", Pn = "_swatchValue_1r5li_24", Ce = {
  swatchContainer: Sn,
  swatch: jn,
  swatchLabel: wn,
  swatchValue: Pn
}, Je = ({ color: r, label: p, value: f, units: u }) => /* @__PURE__ */ l.jsxs("div", { className: Ce.swatchContainer, children: [
  /* @__PURE__ */ l.jsx("div", { className: Ce.swatch, style: { "background-color": r } }),
  /* @__PURE__ */ l.jsx("div", { className: Ce.swatchLabel, children: p }),
  /* @__PURE__ */ l.jsxs("div", { className: Ce.swatchValue, children: [
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
const An = "_swatchLegend_qiaru_1", kn = {
  swatchLegend: An
}, In = ({ swatches: r }) => /* @__PURE__ */ l.jsx("div", { className: kn.swatchLegend, children: r && r.map((p) => {
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
In.propTypes = {
  swatches: a.arrayOf(a.objectOf(a.string)).isRequired
};
const $n = "_gradient_1w8qh_1", Nn = "_gradientNumbers_1w8qh_6", qn = "_gradientLegend_1w8qh_11", Oe = {
  gradient: $n,
  gradientNumbers: Nn,
  gradientLegend: qn
}, Mn = ({
  title: r = "Gradient Legend",
  startColor: p = "red",
  endColor: f = "yellow",
  startNo: u = 0,
  endNo: v = 100,
  titleBelow: d = !1,
  bins: R = 0,
  precision: y = 2
}) => {
  const b = R > 0 ? Array(R - 1).fill(0).map((w, h) => {
    const E = (u + (v - u) / R * (h + 1)).toPrecision(y);
    return /* @__PURE__ */ l.jsx("span", { children: E }, E);
  }) : [];
  return /* @__PURE__ */ l.jsxs("div", { className: "gradient-box", children: [
    !d && /* @__PURE__ */ l.jsxs("div", { className: "ui-title", children: [
      " ",
      r
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: Oe.gradientLegend, children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: Oe.gradient,
          style: {
            background: `linear-gradient(to right, ${p} , ${f})`
          }
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: Oe.gradientNumbers, children: [
        /* @__PURE__ */ l.jsx("span", { children: u }),
        b,
        /* @__PURE__ */ l.jsx("span", { children: v })
      ] }),
      d && /* @__PURE__ */ l.jsxs("div", { className: Oe.uiTitle, children: [
        " ",
        r
      ] })
    ] })
  ] });
};
Mn.propTypes = {
  title: a.string,
  startColor: a.string,
  endColor: a.string,
  startNo: a.number,
  endNo: a.number,
  titleBelow: a.bool,
  bins: a.number,
  precision: a.number
};
const Ln = "_simpleSlider_qj292_1", Dn = "_simpleSliderInput_qj292_7", Wn = "_simpleSliderMinMaxContainer_qj292_11", Ye = {
  simpleSlider: Ln,
  simpleSliderInput: Dn,
  simpleSliderMinMaxContainer: Wn
}, Ke = ({
  units: r,
  label: p,
  onChange: f,
  min: u,
  max: v,
  step: d,
  value: R
}) => /* @__PURE__ */ l.jsxs("div", { className: Ye.simpleSlider, children: [
  /* @__PURE__ */ l.jsxs("div", { children: [
    p && /* @__PURE__ */ l.jsx("div", { className: "ui-label", children: p }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        onChange: f,
        className: Ye.simpleSliderInput,
        type: "range",
        value: R,
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
const Fn = "_layerGroupWrapper_rqofl_1", Yn = "_layerGroupChevron_rqofl_15", Gn = "_layerGroupWapper_rqofl_19", Un = "_layerGroupName_rqofl_28", Vn = "_layerGroupChildren_rqofl_36", Te = {
  layerGroupWrapper: Fn,
  layerGroupChevron: Yn,
  layerGroupWapper: Gn,
  "layer-group-wrapper": "_layer-group-wrapper_rqofl_23",
  layerGroupName: Un,
  "layer-group": "_layer-group_rqofl_23",
  layerGroupChildren: Vn
}, Bn = ({ groupName: r, children: p }) => {
  const [f, u] = Tr(!1), v = () => {
    u(!f);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: Te.layerGroup, children: [
    /* @__PURE__ */ l.jsxs("button", { type: "button", className: Te.layerGroupWrapper, onClick: v, children: [
      /* @__PURE__ */ l.jsx("div", { className: Te.layerGroupChevron, children: /* @__PURE__ */ l.jsx(Rr, { size: "md", fixedWidth: !0, icon: f ? nn : xr }) }),
      /* @__PURE__ */ l.jsx("span", { className: Te.layerGroupName, children: r })
    ] }),
    f && /* @__PURE__ */ l.jsx("div", { className: Te.layerGroupChildren, children: p })
  ] });
};
Bn.propTypes = {
  groupName: a.string,
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const Sr = ({ mapContainer: r, id: p, children: f }) => /* @__PURE__ */ l.jsx("div", { className: "map-container", id: p, ref: r, children: f });
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
const zn = ({ children: r }) => /* @__PURE__ */ l.jsx("div", { className: "nav-container", children: r });
zn.propTypes = {
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const Jn = ({ showToggle: r, children: p }) => {
  const [f, u] = Tr(!1), v = `sidebar ${f ? "closed" : ""}`, d = () => {
    u(!f);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ l.jsx("div", { className: v, children: p }),
    r && /* @__PURE__ */ l.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ l.jsx(
      Se,
      {
        onClick: d,
        iconName: f ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
Jn.propTypes = {
  showToggle: a.bool,
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const Kn = ({ children: r }) => /* @__PURE__ */ l.jsx("div", { className: "layout-stacked", children: r });
Kn.propTypes = {
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const Xn = ({ align: r = "left", children: p }) => /* @__PURE__ */ l.jsx("div", { className: `layout-standard ${r}`, children: p });
Xn.propTypes = {
  align: a.oneOf(["left", "right"]),
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const Hn = "_sliderControlWrapper_2tznx_1", Zn = "_sliderLabel_2tznx_9", _r = {
  sliderControlWrapper: Hn,
  sliderLabel: Zn
}, Qn = ({ title: r, units: p, sliderConfig: f }) => /* @__PURE__ */ l.jsxs("div", { className: _r.sliderControlWrapper, children: [
  /* @__PURE__ */ l.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ l.jsx("div", {}),
  f && f.map((u) => {
    const { label: v } = u;
    return /* @__PURE__ */ l.jsx("div", { className: _r.sliderLabel, children: v });
  }),
  f && f.map((u) => {
    const { onChange: v, min: d, max: R, step: y, value: b } = u;
    return /* @__PURE__ */ l.jsx(
      Ke,
      {
        onChange: v,
        units: p,
        min: d,
        max: R,
        step: y,
        value: b
      }
    );
  })
] });
Qn.propTypes = {
  title: a.string.isRequired,
  units: a.string.isRequired,
  sliderConfig: a.arrayOf(a.objectOf(a.string)).isRequired
};
export {
  Mn as GradientLegend,
  Se as IconButton,
  Be as LayerButtonReel,
  On as LayerCard,
  Bn as LayerGroup,
  ze as LayerToggle,
  Sr as MapContainer,
  zn as NavContainer,
  Jn as SidebarContainer,
  Ke as SimpleSlider,
  Qn as SliderControl,
  Kn as Stacked,
  Xn as Standard,
  Je as Swatch,
  In as SwatchLegend
};
