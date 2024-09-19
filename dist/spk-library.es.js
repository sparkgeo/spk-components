import vr, { useState as yr } from "react";
import { FontAwesomeIcon as hr } from "@fortawesome/react-fontawesome";
import { faTrash as Ur, faFilter as Vr, faInfo as Br, faFillDrip as zr, faEllipsisVertical as Jr, faChevronRight as mr, faChevronLeft as Gr, faChevronDown as Kr } from "@fortawesome/free-solid-svg-icons";
function Xr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Me = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Hr() {
  if (tr) return Ee;
  tr = 1;
  var r = vr, p = Symbol.for("react.element"), l = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(y, b, P) {
    var h, T = {}, D = null, F = null;
    P !== void 0 && (D = "" + P), b.key !== void 0 && (D = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (h in b) c.call(b, h) && !d.hasOwnProperty(h) && (T[h] = b[h]);
    if (y && y.defaultProps) for (h in b = y.defaultProps, b) T[h] === void 0 && (T[h] = b[h]);
    return { $$typeof: p, type: y, key: D, ref: F, props: T, _owner: v.current };
  }
  return Ee.Fragment = l, Ee.jsx = _, Ee.jsxs = _, Ee;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function Zr() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && function() {
    var r = vr, p = Symbol.for("react.element"), l = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), J = Symbol.iterator, q = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = J && e[J] || e[q];
      return typeof n == "function" ? n : null;
    }
    var V = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), m = 1; m < n; m++)
          o[m - 1] = arguments[m];
        B("error", e, o);
      }
    }
    function B(e, n, o) {
      {
        var m = V.ReactDebugCurrentFrame, I = m.getStackAddendum();
        I !== "" && (n += "%s", o = o.concat([I]));
        var M = o.map(function(A) {
          return String(A);
        });
        M.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var W = !1, s = !1, te = !1, ye = !1, he = !1, ue;
    ue = Symbol.for("react.module.reference");
    function me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === d || he || e === v || e === P || e === h || ye || e === F || W || s || te || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === y || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function ce(e, n, o) {
      var m = e.displayName;
      if (m)
        return m;
      var I = n.displayName || n.name || "";
      return I !== "" ? o + "(" + I + ")" : o;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case l:
          return "Portal";
        case d:
          return "Profiler";
        case v:
          return "StrictMode";
        case P:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var n = e;
            return fe(n) + ".Consumer";
          case _:
            var o = e;
            return fe(o._context) + ".Provider";
          case b:
            return ce(e, e.render, "ForwardRef");
          case T:
            var m = e.displayName || null;
            return m !== null ? m : X(e.type) || "Memo";
          case D: {
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
    var H = Object.assign, ae = 0, Q, ne, ie, le, t, u, x;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, ne = console.info, ie = console.warn, le = console.error, t = console.group, u = console.groupCollapsed, x = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: O,
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
    function w() {
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
              value: ie
            }),
            error: H({}, e, {
              value: le
            }),
            group: H({}, e, {
              value: t
            }),
            groupCollapsed: H({}, e, {
              value: u
            }),
            groupEnd: H({}, e, {
              value: x
            })
          });
        }
        ae < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var E = V.ReactCurrentDispatcher, R;
    function S(e, n, o) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (I) {
            var m = I.stack.trim().match(/\n( *(at )?)/);
            R = m && m[1] || "";
          }
        return `
` + R + e;
      }
    }
    var k = !1, j;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      j = new G();
    }
    function i(e, n) {
      if (!e || k)
        return "";
      {
        var o = j.get(e);
        if (o !== void 0)
          return o;
      }
      var m;
      k = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = E.current, E.current = null, g();
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
          for (var C = Z.stack.split(`
`), K = m.stack.split(`
`), L = C.length - 1, U = K.length - 1; L >= 1 && U >= 0 && C[L] !== K[U]; )
            U--;
          for (; L >= 1 && U >= 0; L--, U--)
            if (C[L] !== K[U]) {
              if (L !== 1 || U !== 1)
                do
                  if (L--, U--, U < 0 || C[L] !== K[U]) {
                    var re = `
` + C[L].replace(" at new ", " at ");
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && j.set(e, re), re;
                  }
                while (L >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        k = !1, E.current = M, w(), Error.prepareStackTrace = I;
      }
      var ve = e ? e.displayName || e.name : "", se = ve ? S(ve) : "";
      return typeof e == "function" && j.set(e, se), se;
    }
    function ee(e, n, o) {
      return i(e, !1);
    }
    function de(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function oe(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return i(e, de(e));
      if (typeof e == "string")
        return S(e);
      switch (e) {
        case P:
          return S("Suspense");
        case h:
          return S("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return ee(e.render);
          case T:
            return oe(e.type, n, o);
          case D: {
            var m = e, I = m._payload, M = m._init;
            try {
              return oe(M(I), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Ve = {}, Be = V.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var n = e._owner, o = oe(e.type, e._source, n ? n.type : null);
        Be.setExtraStackFrame(o);
      } else
        Be.setExtraStackFrame(null);
    }
    function Tr(e, n, o, m, I) {
      {
        var M = Function.call.bind(be);
        for (var A in e)
          if (M(e, A)) {
            var C = void 0;
            try {
              if (typeof e[A] != "function") {
                var K = Error((m || "React class") + ": " + o + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              C = e[A](n, A, m, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              C = L;
            }
            C && !(C instanceof Error) && (Re(I), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", o, A, typeof C), Re(null)), C instanceof Error && !(C.message in Ve) && (Ve[C.message] = !0, Re(I), Y("Failed %s type: %s", o, C.message), Re(null));
          }
      }
    }
    var Rr = Array.isArray;
    function xe(e) {
      return Rr(e);
    }
    function _r(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Or(e) {
      try {
        return ze(e), !1;
      } catch {
        return !0;
      }
    }
    function ze(e) {
      return "" + e;
    }
    function Je(e) {
      if (Or(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _r(e)), ze(e);
    }
    var ge = V.ReactCurrentOwner, xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ge, Ke, Se;
    Se = {};
    function Sr(e) {
      if (be.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function jr(e) {
      if (be.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Cr(e, n) {
      if (typeof e.ref == "string" && ge.current && n && ge.current.stateNode !== n) {
        var o = X(ge.current.type);
        Se[o] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(ge.current.type), e.ref), Se[o] = !0);
      }
    }
    function Pr(e, n) {
      {
        var o = function() {
          Ge || (Ge = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function wr(e, n) {
      {
        var o = function() {
          Ke || (Ke = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Ar = function(e, n, o, m, I, M, A) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: A,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function kr(e, n, o, m, I) {
      {
        var M, A = {}, C = null, K = null;
        o !== void 0 && (Je(o), C = "" + o), jr(n) && (Je(n.key), C = "" + n.key), Sr(n) && (K = n.ref, Cr(n, I));
        for (M in n)
          be.call(n, M) && !xr.hasOwnProperty(M) && (A[M] = n[M]);
        if (e && e.defaultProps) {
          var L = e.defaultProps;
          for (M in L)
            A[M] === void 0 && (A[M] = L[M]);
        }
        if (C || K) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          C && Pr(A, U), K && wr(A, U);
        }
        return Ar(e, C, K, I, m, ge.current, A);
      }
    }
    var je = V.ReactCurrentOwner, Xe = V.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var n = e._owner, o = oe(e.type, e._source, n ? n.type : null);
        Xe.setExtraStackFrame(o);
      } else
        Xe.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function Pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function He() {
      {
        if (je.current) {
          var e = X(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ir(e) {
      return "";
    }
    var Ze = {};
    function $r(e) {
      {
        var n = He();
        if (!n) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (n = `

Check the top-level render call using <` + o + ">.");
        }
        return n;
      }
    }
    function Qe(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = $r(n);
        if (Ze[o])
          return;
        Ze[o] = !0;
        var m = "";
        e && e._owner && e._owner !== je.current && (m = " It was passed a child from " + X(e._owner.type) + "."), pe(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, m), pe(null);
      }
    }
    function er(e, n) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var o = 0; o < e.length; o++) {
            var m = e[o];
            Pe(m) && Qe(m, n);
          }
        else if (Pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = z(e);
          if (typeof I == "function" && I !== e.entries)
            for (var M = I.call(e), A; !(A = M.next()).done; )
              Pe(A.value) && Qe(A.value, n);
        }
      }
    }
    function Nr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var o;
        if (typeof n == "function")
          o = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === T))
          o = n.propTypes;
        else
          return;
        if (o) {
          var m = X(n);
          Tr(o, e.props, "prop", m, e);
        } else if (n.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var I = X(n);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var m = n[o];
          if (m !== "children" && m !== "key") {
            pe(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var rr = {};
    function nr(e, n, o, m, I, M) {
      {
        var A = me(e);
        if (!A) {
          var C = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Ir();
          K ? C += K : C += He();
          var L;
          e === null ? L = "null" : xe(e) ? L = "array" : e !== void 0 && e.$$typeof === p ? (L = "<" + (X(e.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : L = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, C);
        }
        var U = kr(e, n, o, I, M);
        if (U == null)
          return U;
        if (A) {
          var re = n.children;
          if (re !== void 0)
            if (m)
              if (xe(re)) {
                for (var ve = 0; ve < re.length; ve++)
                  er(re[ve], e);
                Object.freeze && Object.freeze(re);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              er(re, e);
        }
        if (be.call(n, "key")) {
          var se = X(e), Z = Object.keys(n).filter(function(Wr) {
            return Wr !== "key";
          }), we = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!rr[se + we]) {
            var Lr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, se, Lr, se), rr[se + we] = !0;
          }
        }
        return e === c ? Dr(U) : Nr(U), U;
      }
    }
    function Mr(e, n, o) {
      return nr(e, n, o, !0);
    }
    function qr(e, n, o) {
      return nr(e, n, o, !1);
    }
    var Fr = qr, Yr = Mr;
    Te.Fragment = c, Te.jsx = Fr, Te.jsxs = Yr;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Me.exports = Hr() : Me.exports = Zr();
var f = Me.exports, qe = { exports: {} }, _e = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Qr() {
  if (ir) return $;
  ir = 1;
  var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, l = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, _ = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, b = r ? Symbol.for("react.async_mode") : 60111, P = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, D = r ? Symbol.for("react.suspense_list") : 60120, F = r ? Symbol.for("react.memo") : 60115, J = r ? Symbol.for("react.lazy") : 60116, q = r ? Symbol.for("react.block") : 60121, z = r ? Symbol.for("react.fundamental") : 60117, V = r ? Symbol.for("react.responder") : 60118, Y = r ? Symbol.for("react.scope") : 60119;
  function B(s) {
    if (typeof s == "object" && s !== null) {
      var te = s.$$typeof;
      switch (te) {
        case p:
          switch (s = s.type, s) {
            case b:
            case P:
            case c:
            case d:
            case v:
            case T:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case y:
                case h:
                case J:
                case F:
                case _:
                  return s;
                default:
                  return te;
              }
          }
        case l:
          return te;
      }
    }
  }
  function W(s) {
    return B(s) === P;
  }
  return $.AsyncMode = b, $.ConcurrentMode = P, $.ContextConsumer = y, $.ContextProvider = _, $.Element = p, $.ForwardRef = h, $.Fragment = c, $.Lazy = J, $.Memo = F, $.Portal = l, $.Profiler = d, $.StrictMode = v, $.Suspense = T, $.isAsyncMode = function(s) {
    return W(s) || B(s) === b;
  }, $.isConcurrentMode = W, $.isContextConsumer = function(s) {
    return B(s) === y;
  }, $.isContextProvider = function(s) {
    return B(s) === _;
  }, $.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === p;
  }, $.isForwardRef = function(s) {
    return B(s) === h;
  }, $.isFragment = function(s) {
    return B(s) === c;
  }, $.isLazy = function(s) {
    return B(s) === J;
  }, $.isMemo = function(s) {
    return B(s) === F;
  }, $.isPortal = function(s) {
    return B(s) === l;
  }, $.isProfiler = function(s) {
    return B(s) === d;
  }, $.isStrictMode = function(s) {
    return B(s) === v;
  }, $.isSuspense = function(s) {
    return B(s) === T;
  }, $.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === c || s === P || s === d || s === v || s === T || s === D || typeof s == "object" && s !== null && (s.$$typeof === J || s.$$typeof === F || s.$$typeof === _ || s.$$typeof === y || s.$$typeof === h || s.$$typeof === z || s.$$typeof === V || s.$$typeof === Y || s.$$typeof === q);
  }, $.typeOf = B, $;
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
var or;
function en() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, p = r ? Symbol.for("react.element") : 60103, l = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, _ = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, b = r ? Symbol.for("react.async_mode") : 60111, P = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, D = r ? Symbol.for("react.suspense_list") : 60120, F = r ? Symbol.for("react.memo") : 60115, J = r ? Symbol.for("react.lazy") : 60116, q = r ? Symbol.for("react.block") : 60121, z = r ? Symbol.for("react.fundamental") : 60117, V = r ? Symbol.for("react.responder") : 60118, Y = r ? Symbol.for("react.scope") : 60119;
    function B(i) {
      return typeof i == "string" || typeof i == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      i === c || i === P || i === d || i === v || i === T || i === D || typeof i == "object" && i !== null && (i.$$typeof === J || i.$$typeof === F || i.$$typeof === _ || i.$$typeof === y || i.$$typeof === h || i.$$typeof === z || i.$$typeof === V || i.$$typeof === Y || i.$$typeof === q);
    }
    function W(i) {
      if (typeof i == "object" && i !== null) {
        var ee = i.$$typeof;
        switch (ee) {
          case p:
            var de = i.type;
            switch (de) {
              case b:
              case P:
              case c:
              case d:
              case v:
              case T:
                return de;
              default:
                var oe = de && de.$$typeof;
                switch (oe) {
                  case y:
                  case h:
                  case J:
                  case F:
                  case _:
                    return oe;
                  default:
                    return ee;
                }
            }
          case l:
            return ee;
        }
      }
    }
    var s = b, te = P, ye = y, he = _, ue = p, me = h, ce = c, fe = J, X = F, H = l, ae = d, Q = v, ne = T, ie = !1;
    function le(i) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(i) || W(i) === b;
    }
    function t(i) {
      return W(i) === P;
    }
    function u(i) {
      return W(i) === y;
    }
    function x(i) {
      return W(i) === _;
    }
    function O(i) {
      return typeof i == "object" && i !== null && i.$$typeof === p;
    }
    function g(i) {
      return W(i) === h;
    }
    function w(i) {
      return W(i) === c;
    }
    function E(i) {
      return W(i) === J;
    }
    function R(i) {
      return W(i) === F;
    }
    function S(i) {
      return W(i) === l;
    }
    function k(i) {
      return W(i) === d;
    }
    function j(i) {
      return W(i) === v;
    }
    function G(i) {
      return W(i) === T;
    }
    N.AsyncMode = s, N.ConcurrentMode = te, N.ContextConsumer = ye, N.ContextProvider = he, N.Element = ue, N.ForwardRef = me, N.Fragment = ce, N.Lazy = fe, N.Memo = X, N.Portal = H, N.Profiler = ae, N.StrictMode = Q, N.Suspense = ne, N.isAsyncMode = le, N.isConcurrentMode = t, N.isContextConsumer = u, N.isContextProvider = x, N.isElement = O, N.isForwardRef = g, N.isFragment = w, N.isLazy = E, N.isMemo = R, N.isPortal = S, N.isProfiler = k, N.isStrictMode = j, N.isSuspense = G, N.isValidElementType = B, N.typeOf = W;
  }()), N;
}
var sr;
function br() {
  return sr || (sr = 1, process.env.NODE_ENV === "production" ? _e.exports = Qr() : _e.exports = en()), _e.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ae, ur;
function rn() {
  if (ur) return Ae;
  ur = 1;
  var r = Object.getOwnPropertySymbols, p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
  function c(d) {
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
      for (var _ = {}, y = 0; y < 10; y++)
        _["_" + String.fromCharCode(y)] = y;
      var b = Object.getOwnPropertyNames(_).map(function(h) {
        return _[h];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        P[h] = h;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ae = v() ? Object.assign : function(d, _) {
    for (var y, b = c(d), P, h = 1; h < arguments.length; h++) {
      y = Object(arguments[h]);
      for (var T in y)
        p.call(y, T) && (b[T] = y[T]);
      if (r) {
        P = r(y);
        for (var D = 0; D < P.length; D++)
          l.call(y, P[D]) && (b[P[D]] = y[P[D]]);
      }
    }
    return b;
  }, Ae;
}
var ke, cr;
function Fe() {
  if (cr) return ke;
  cr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = r, ke;
}
var Ie, fr;
function gr() {
  return fr || (fr = 1, Ie = Function.call.bind(Object.prototype.hasOwnProperty)), Ie;
}
var $e, lr;
function nn() {
  if (lr) return $e;
  lr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var p = Fe(), l = {}, c = gr();
    r = function(d) {
      var _ = "Warning: " + d;
      typeof console < "u" && console.error(_);
      try {
        throw new Error(_);
      } catch {
      }
    };
  }
  function v(d, _, y, b, P) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in d)
        if (c(d, h)) {
          var T;
          try {
            if (typeof d[h] != "function") {
              var D = Error(
                (b || "React class") + ": " + y + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw D.name = "Invariant Violation", D;
            }
            T = d[h](_, h, b, y, null, p);
          } catch (J) {
            T = J;
          }
          if (T && !(T instanceof Error) && r(
            (b || "React class") + ": type specification of " + y + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in l)) {
            l[T.message] = !0;
            var F = P ? P() : "";
            r(
              "Failed " + y + " type: " + T.message + (F ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (l = {});
  }, $e = v, $e;
}
var Ne, dr;
function tn() {
  if (dr) return Ne;
  dr = 1;
  var r = br(), p = rn(), l = Fe(), c = gr(), v = nn(), d = function() {
  };
  process.env.NODE_ENV !== "production" && (d = function(y) {
    var b = "Warning: " + y;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function _() {
    return null;
  }
  return Ne = function(y, b) {
    var P = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function T(t) {
      var u = t && (P && t[P] || t[h]);
      if (typeof u == "function")
        return u;
    }
    var D = "<<anonymous>>", F = {
      array: V("array"),
      bigint: V("bigint"),
      bool: V("boolean"),
      func: V("function"),
      number: V("number"),
      object: V("object"),
      string: V("string"),
      symbol: V("symbol"),
      any: Y(),
      arrayOf: B,
      element: W(),
      elementType: s(),
      instanceOf: te,
      node: me(),
      objectOf: he,
      oneOf: ye,
      oneOfType: ue,
      shape: fe,
      exact: X
    };
    function J(t, u) {
      return t === u ? t !== 0 || 1 / t === 1 / u : t !== t && u !== u;
    }
    function q(t, u) {
      this.message = t, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    q.prototype = Error.prototype;
    function z(t) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, x = 0;
      function O(w, E, R, S, k, j, G) {
        if (S = S || D, j = j || R, G !== l) {
          if (b) {
            var i = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw i.name = "Invariant Violation", i;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = S + ":" + R;
            !u[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (d(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[ee] = !0, x++);
          }
        }
        return E[R] == null ? w ? E[R] === null ? new q("The " + k + " `" + j + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new q("The " + k + " `" + j + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : t(E, R, S, k, j);
      }
      var g = O.bind(null, !1);
      return g.isRequired = O.bind(null, !0), g;
    }
    function V(t) {
      function u(x, O, g, w, E, R) {
        var S = x[O], k = Q(S);
        if (k !== t) {
          var j = ne(S);
          return new q(
            "Invalid " + w + " `" + E + "` of type " + ("`" + j + "` supplied to `" + g + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return z(u);
    }
    function Y() {
      return z(_);
    }
    function B(t) {
      function u(x, O, g, w, E) {
        if (typeof t != "function")
          return new q("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var R = x[O];
        if (!Array.isArray(R)) {
          var S = Q(R);
          return new q("Invalid " + w + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an array."));
        }
        for (var k = 0; k < R.length; k++) {
          var j = t(R, k, g, w, E + "[" + k + "]", l);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return z(u);
    }
    function W() {
      function t(u, x, O, g, w) {
        var E = u[x];
        if (!y(E)) {
          var R = Q(E);
          return new q("Invalid " + g + " `" + w + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(t);
    }
    function s() {
      function t(u, x, O, g, w) {
        var E = u[x];
        if (!r.isValidElementType(E)) {
          var R = Q(E);
          return new q("Invalid " + g + " `" + w + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(t);
    }
    function te(t) {
      function u(x, O, g, w, E) {
        if (!(x[O] instanceof t)) {
          var R = t.name || D, S = le(x[O]);
          return new q("Invalid " + w + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return z(u);
    }
    function ye(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? d(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : d("Invalid argument supplied to oneOf, expected an array.")), _;
      function u(x, O, g, w, E) {
        for (var R = x[O], S = 0; S < t.length; S++)
          if (J(R, t[S]))
            return null;
        var k = JSON.stringify(t, function(G, i) {
          var ee = ne(i);
          return ee === "symbol" ? String(i) : i;
        });
        return new q("Invalid " + w + " `" + E + "` of value `" + String(R) + "` " + ("supplied to `" + g + "`, expected one of " + k + "."));
      }
      return z(u);
    }
    function he(t) {
      function u(x, O, g, w, E) {
        if (typeof t != "function")
          return new q("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var R = x[O], S = Q(R);
        if (S !== "object")
          return new q("Invalid " + w + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an object."));
        for (var k in R)
          if (c(R, k)) {
            var j = t(R, k, g, w, E + "." + k, l);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return z(u);
    }
    function ue(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && d("Invalid argument supplied to oneOfType, expected an instance of array."), _;
      for (var u = 0; u < t.length; u++) {
        var x = t[u];
        if (typeof x != "function")
          return d(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(x) + " at index " + u + "."
          ), _;
      }
      function O(g, w, E, R, S) {
        for (var k = [], j = 0; j < t.length; j++) {
          var G = t[j], i = G(g, w, E, R, S, l);
          if (i == null)
            return null;
          i.data && c(i.data, "expectedType") && k.push(i.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new q("Invalid " + R + " `" + S + "` supplied to " + ("`" + E + "`" + ee + "."));
      }
      return z(O);
    }
    function me() {
      function t(u, x, O, g, w) {
        return H(u[x]) ? null : new q("Invalid " + g + " `" + w + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return z(t);
    }
    function ce(t, u, x, O, g) {
      return new q(
        (t || "React class") + ": " + u + " type `" + x + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function fe(t) {
      function u(x, O, g, w, E) {
        var R = x[O], S = Q(R);
        if (S !== "object")
          return new q("Invalid " + w + " `" + E + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var k in t) {
          var j = t[k];
          if (typeof j != "function")
            return ce(g, w, E, k, ne(j));
          var G = j(R, k, g, w, E + "." + k, l);
          if (G)
            return G;
        }
        return null;
      }
      return z(u);
    }
    function X(t) {
      function u(x, O, g, w, E) {
        var R = x[O], S = Q(R);
        if (S !== "object")
          return new q("Invalid " + w + " `" + E + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
        var k = p({}, x[O], t);
        for (var j in k) {
          var G = t[j];
          if (c(t, j) && typeof G != "function")
            return ce(g, w, E, j, ne(G));
          if (!G)
            return new q(
              "Invalid " + w + " `" + E + "` key `" + j + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(x[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var i = G(R, j, g, w, E + "." + j, l);
          if (i)
            return i;
        }
        return null;
      }
      return z(u);
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
          var u = T(t);
          if (u) {
            var x = u.call(t), O;
            if (u !== t.entries) {
              for (; !(O = x.next()).done; )
                if (!H(O.value))
                  return !1;
            } else
              for (; !(O = x.next()).done; ) {
                var g = O.value;
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
    function ae(t, u) {
      return t === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function Q(t) {
      var u = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : ae(u, t) ? "symbol" : u;
    }
    function ne(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var u = Q(t);
      if (u === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function ie(t) {
      var u = ne(t);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function le(t) {
      return !t.constructor || !t.constructor.name ? D : t.constructor.name;
    }
    return F.checkPropTypes = v, F.resetWarningCache = v.resetWarningCache, F.PropTypes = F, F;
  }, Ne;
}
var De, pr;
function an() {
  if (pr) return De;
  pr = 1;
  var r = Fe();
  function p() {
  }
  function l() {
  }
  return l.resetWarningCache = p, De = function() {
    function c(_, y, b, P, h, T) {
      if (T !== r) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    c.isRequired = c;
    function v() {
      return c;
    }
    var d = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: v,
      element: c,
      elementType: c,
      instanceOf: v,
      node: c,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: l,
      resetWarningCache: p
    };
    return d.PropTypes = d, d;
  }, De;
}
if (process.env.NODE_ENV !== "production") {
  var on = br(), sn = !0;
  qe.exports = tn()(on.isElement, sn);
} else
  qe.exports = an()();
var un = qe.exports;
const a = /* @__PURE__ */ Xr(un), cn = {
  trash: Ur,
  filter: Vr,
  info: Br,
  fill: zr,
  ellipsis: Jr,
  chevronRight: mr,
  chevronLeft: Gr
}, Oe = ({ onClick: r, iconName: p }) => /* @__PURE__ */ f.jsx("div", { className: "iconButton", children: /* @__PURE__ */ f.jsx("button", { "aria-label": p, type: "button", onClick: r, children: /* @__PURE__ */ f.jsx(hr, { icon: cn[p] }) }) });
Oe.propTypes = {
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
Oe.defaultProps = {
  iconName: "ellipsis"
};
const Ye = ({ buttons: r }) => /* @__PURE__ */ f.jsx("div", { className: "layerButtonReel", children: r && Object.keys(r).map((p) => /* @__PURE__ */ f.jsx(Oe, { iconName: p, onClick: r[p] })) });
Ye.propTypes = {
  buttons: a.objectOf(a.func)
};
Ye.defaultProps = {
  buttons: null
};
const Le = ({ layerName: r, isActive: p, onChange: l }) => /* @__PURE__ */ f.jsxs("div", { className: "layerToggle", children: [
  /* @__PURE__ */ f.jsx("p", { children: r }),
  /* @__PURE__ */ f.jsxs("div", { className: "switch", children: [
    /* @__PURE__ */ f.jsx(
      "input",
      {
        type: "checkbox",
        value: r,
        checked: p,
        onChange: l
      }
    ),
    /* @__PURE__ */ f.jsx("span", { className: "slider" })
  ] })
] });
Le.propTypes = {
  layerName: a.string,
  isActive: a.bool,
  onChange: a.func.isRequired
};
Le.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const fn = ({ layerName: r, isActive: p, onChange: l, buttons: c, children: v }) => /* @__PURE__ */ f.jsxs("div", { className: "layerCard", children: [
  /* @__PURE__ */ f.jsxs("div", { className: "layerCardWrapper", children: [
    /* @__PURE__ */ f.jsx(
      Le,
      {
        layerName: r,
        isActive: p,
        onChange: l
      }
    ),
    /* @__PURE__ */ f.jsx(Ye, { buttons: c })
  ] }),
  p && /* @__PURE__ */ f.jsx("div", { className: "layerCardChildren", children: v })
] });
fn.propTypes = {
  layerName: a.string.isRequired,
  isActive: a.bool,
  onChange: a.func.isRequired,
  buttons: a.objectOf(a.func),
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ])
};
const We = ({ color: r, label: p, value: l, units: c }) => /* @__PURE__ */ f.jsxs("div", { className: "swatch-container", children: [
  /* @__PURE__ */ f.jsx("div", { className: "swatch", style: { "background-color": r } }),
  /* @__PURE__ */ f.jsx("div", { className: "swatch-label", children: p }),
  /* @__PURE__ */ f.jsxs("div", { className: "swatch-value", children: [
    l,
    c
  ] })
] });
We.propTypes = {
  color: a.string.isRequired,
  label: a.string.isRequired,
  value: a.number,
  units: a.string
};
We.defaultProps = {
  value: void 0,
  units: ""
};
const ln = ({ swatches: r }) => /* @__PURE__ */ f.jsx("div", { className: "swatch-legend", children: r && r.map((p) => {
  const { color: l, label: c, value: v, units: d } = p;
  return /* @__PURE__ */ f.jsx(
    We,
    {
      label: c,
      color: l,
      value: v,
      units: d
    },
    c
  );
}) });
ln.propTypes = {
  swatches: a.arrayOf(a.objectOf(a.string)).isRequired
};
const dn = ({
  title: r = "Gradient Legend",
  startColor: p = "red",
  endColor: l = "yellow",
  startNo: c = 0,
  endNo: v = 100,
  titleBelow: d = !1,
  bins: _ = 0,
  precision: y = 2
}) => {
  const b = _ > 0 ? Array(_ - 1).fill(0).map((P, h) => {
    const T = (c + (v - c) / _ * (h + 1)).toPrecision(y);
    return /* @__PURE__ */ f.jsx("span", { children: T }, T);
  }) : [];
  return /* @__PURE__ */ f.jsxs("div", { className: "gradient-box", children: [
    !d && /* @__PURE__ */ f.jsxs("div", { className: "ui-title", children: [
      " ",
      r
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "gradient-legend", children: [
      /* @__PURE__ */ f.jsx(
        "div",
        {
          className: "gradient",
          style: {
            background: `linear-gradient(to right, ${p} , ${l})`
          }
        }
      ),
      /* @__PURE__ */ f.jsxs("div", { className: "gradient-numbers", children: [
        /* @__PURE__ */ f.jsx("span", { children: c }),
        b,
        /* @__PURE__ */ f.jsx("span", { children: v })
      ] }),
      d && /* @__PURE__ */ f.jsxs("div", { className: "ui-title", children: [
        " ",
        r
      ] })
    ] })
  ] });
};
dn.propTypes = {
  title: a.string,
  startColor: a.string,
  endColor: a.string,
  startNo: a.number,
  endNo: a.number,
  titleBelow: a.bool,
  bins: a.number,
  precision: a.number
};
const Ue = ({
  units: r,
  label: p,
  onChange: l,
  min: c,
  max: v,
  step: d,
  value: _
}) => /* @__PURE__ */ f.jsxs("div", { className: "simple-slider", children: [
  /* @__PURE__ */ f.jsxs("div", { children: [
    p && /* @__PURE__ */ f.jsx("div", { className: "ui-label", children: p }),
    /* @__PURE__ */ f.jsx(
      "input",
      {
        onChange: l,
        className: "simple-slider-input",
        type: "range",
        value: _,
        min: c,
        max: v,
        step: d
      }
    )
  ] }),
  /* @__PURE__ */ f.jsxs("div", { className: "simple-slider-min-max-container", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "ui-label", children: [
      c,
      r
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "ui-label", children: [
      v,
      r
    ] })
  ] })
] });
Ue.propTypes = {
  onChange: a.func.isRequired,
  min: a.number.isRequired,
  max: a.number.isRequired,
  step: a.number.isRequired,
  value: a.number,
  label: a.string,
  units: a.string
};
Ue.defaultProps = {
  value: 0,
  units: "",
  label: ""
};
const pn = ({ groupName: r, children: p }) => {
  const [l, c] = yr(!1), v = () => {
    c(!l);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "layer-group", children: [
    /* @__PURE__ */ f.jsxs("button", { type: "button", className: "layer-group-wrapper", onClick: v, children: [
      /* @__PURE__ */ f.jsx("div", { className: "layer-group-chevron", children: /* @__PURE__ */ f.jsx(hr, { size: "md", fixedWidth: !0, icon: l ? Kr : mr }) }),
      /* @__PURE__ */ f.jsx("span", { className: "layer-group-name", children: r })
    ] }),
    l && /* @__PURE__ */ f.jsx("div", { className: "layer-group-children", children: p })
  ] });
};
pn.propTypes = {
  groupName: a.string,
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const Er = ({ mapContainer: r, id: p, children: l }) => /* @__PURE__ */ f.jsx("div", { className: "map-container", id: p, ref: r, children: l });
Er.propTypes = {
  mapContainer: a.oneOfType([
    a.func,
    a.shape({ current: a.instanceOf(Element) })
  ]),
  children: a.node,
  id: a.string
};
Er.defaultProps = {
  children: null,
  mapContainer: null,
  id: null
};
const vn = ({ children: r }) => /* @__PURE__ */ f.jsx("div", { className: "nav-container", children: r });
vn.propTypes = {
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const yn = ({ showToggle: r, children: p }) => {
  const [l, c] = yr(!1), v = `sidebar ${l ? "closed" : ""}`, d = () => {
    c(!l);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ f.jsx("div", { className: v, children: p }),
    r && /* @__PURE__ */ f.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ f.jsx(
      Oe,
      {
        onClick: d,
        iconName: l ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
yn.propTypes = {
  showToggle: a.bool,
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const hn = ({ children: r }) => /* @__PURE__ */ f.jsx("div", { className: "layout-stacked", children: r });
hn.propTypes = {
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const mn = ({ align: r = "left", children: p }) => /* @__PURE__ */ f.jsx("div", { className: `layout-standard ${r}`, children: p });
mn.propTypes = {
  align: a.oneOf(["left", "right"]),
  children: a.oneOfType([
    a.arrayOf(a.node),
    a.node
  ]).isRequired
};
const bn = ({ title: r, units: p, sliderConfig: l }) => /* @__PURE__ */ f.jsxs("div", { className: " slider-control-wrapper", children: [
  /* @__PURE__ */ f.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ f.jsx("div", {}),
  l && l.map((c) => {
    const { label: v } = c;
    return /* @__PURE__ */ f.jsx("div", { className: "slider-label", children: v });
  }),
  l && l.map((c) => {
    const { onChange: v, min: d, max: _, step: y, value: b } = c;
    return /* @__PURE__ */ f.jsx(
      Ue,
      {
        onChange: v,
        units: p,
        min: d,
        max: _,
        step: y,
        value: b
      }
    );
  })
] });
bn.propTypes = {
  title: a.string.isRequired,
  units: a.string.isRequired,
  sliderConfig: a.arrayOf(a.objectOf(a.string)).isRequired
};
export {
  dn as GradientLegend,
  Oe as IconButton,
  Ye as LayerButtonReel,
  fn as LayerCard,
  pn as LayerGroup,
  Le as LayerToggle,
  Er as MapContainer,
  vn as NavContainer,
  yn as SidebarContainer,
  Ue as SimpleSlider,
  bn as SliderControl,
  hn as Stacked,
  mn as Standard,
  We as Swatch,
  ln as SwatchLegend
};
