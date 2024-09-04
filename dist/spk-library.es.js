import vr, { useState as Yr } from "react";
import { FontAwesomeIcon as Lr } from "@fortawesome/react-fontawesome";
import { faTrash as Wr, faFilter as Ur, faInfo as Vr, faFillDrip as Br, faEllipsisVertical as zr, faChevronRight as Jr, faChevronLeft as Gr } from "@fortawesome/free-solid-svg-icons";
function Kr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ne = { exports: {} }, Ee = {};
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
function Xr() {
  if (tr) return Ee;
  tr = 1;
  var n = vr, l = Symbol.for("react.element"), d = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(y, b, j) {
    var h, T = {}, M = null, q = null;
    j !== void 0 && (M = "" + j), b.key !== void 0 && (M = "" + b.key), b.ref !== void 0 && (q = b.ref);
    for (h in b) c.call(b, h) && !f.hasOwnProperty(h) && (T[h] = b[h]);
    if (y && y.defaultProps) for (h in b = y.defaultProps, b) T[h] === void 0 && (T[h] = b[h]);
    return { $$typeof: l, type: y, key: M, ref: q, props: T, _owner: v.current };
  }
  return Ee.Fragment = d, Ee.jsx = _, Ee.jsxs = _, Ee;
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
function Hr() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && function() {
    var n = vr, l = Symbol.for("react.element"), d = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), J = Symbol.iterator, F = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = J && e[J] || e[F];
      return typeof r == "function" ? r : null;
    }
    var V = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), m = 1; m < r; m++)
          i[m - 1] = arguments[m];
        B("error", e, i);
      }
    }
    function B(e, r, i) {
      {
        var m = V.ReactDebugCurrentFrame, I = m.getStackAddendum();
        I !== "" && (r += "%s", i = i.concat([I]));
        var N = i.map(function(A) {
          return String(A);
        });
        N.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, N);
      }
    }
    var W = !1, o = !1, te = !1, ye = !1, he = !1, ue;
    ue = Symbol.for("react.module.reference");
    function me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === f || he || e === v || e === j || e === h || ye || e === q || W || o || te || typeof e == "object" && e !== null && (e.$$typeof === M || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === y || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function ce(e, r, i) {
      var m = e.displayName;
      if (m)
        return m;
      var I = r.displayName || r.name || "";
      return I !== "" ? i + "(" + I + ")" : i;
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
        case d:
          return "Portal";
        case f:
          return "Profiler";
        case v:
          return "StrictMode";
        case j:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return fe(r) + ".Consumer";
          case _:
            var i = e;
            return fe(i._context) + ".Provider";
          case b:
            return ce(e, e.render, "ForwardRef");
          case T:
            var m = e.displayName || null;
            return m !== null ? m : X(e.type) || "Memo";
          case M: {
            var I = e, N = I._payload, A = I._init;
            try {
              return X(A(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, ae = 0, Q, ne, ie, le, t, s, x;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, ne = console.info, ie = console.warn, le = console.error, t = console.group, s = console.groupCollapsed, x = console.groupEnd;
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
              value: s
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
    function S(e, r, i) {
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
    var k = !1, P;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      P = new G();
    }
    function a(e, r) {
      if (!e || k)
        return "";
      {
        var i = P.get(e);
        if (i !== void 0)
          return i;
      }
      var m;
      k = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = E.current, E.current = null, g();
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
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && P.set(e, re), re;
                  }
                while (L >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        k = !1, E.current = N, w(), Error.prepareStackTrace = I;
      }
      var ve = e ? e.displayName || e.name : "", se = ve ? S(ve) : "";
      return typeof e == "function" && P.set(e, se), se;
    }
    function ee(e, r, i) {
      return a(e, !1);
    }
    function de(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function oe(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return a(e, de(e));
      if (typeof e == "string")
        return S(e);
      switch (e) {
        case j:
          return S("Suspense");
        case h:
          return S("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return ee(e.render);
          case T:
            return oe(e.type, r, i);
          case M: {
            var m = e, I = m._payload, N = m._init;
            try {
              return oe(N(I), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Ve = {}, Be = V.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var r = e._owner, i = oe(e.type, e._source, r ? r.type : null);
        Be.setExtraStackFrame(i);
      } else
        Be.setExtraStackFrame(null);
    }
    function br(e, r, i, m, I) {
      {
        var N = Function.call.bind(be);
        for (var A in e)
          if (N(e, A)) {
            var C = void 0;
            try {
              if (typeof e[A] != "function") {
                var K = Error((m || "React class") + ": " + i + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              C = e[A](r, A, m, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              C = L;
            }
            C && !(C instanceof Error) && (Re(I), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", i, A, typeof C), Re(null)), C instanceof Error && !(C.message in Ve) && (Ve[C.message] = !0, Re(I), Y("Failed %s type: %s", i, C.message), Re(null));
          }
      }
    }
    var gr = Array.isArray;
    function xe(e) {
      return gr(e);
    }
    function Er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Tr(e) {
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
      if (Tr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(e)), ze(e);
    }
    var ge = V.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ge, Ke, Se;
    Se = {};
    function _r(e) {
      if (be.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Or(e) {
      if (be.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xr(e, r) {
      if (typeof e.ref == "string" && ge.current && r && ge.current.stateNode !== r) {
        var i = X(ge.current.type);
        Se[i] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(ge.current.type), e.ref), Se[i] = !0);
      }
    }
    function Sr(e, r) {
      {
        var i = function() {
          Ge || (Ge = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Pr(e, r) {
      {
        var i = function() {
          Ke || (Ke = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Cr = function(e, r, i, m, I, N, A) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: A,
        // Record the component responsible for creating this element.
        _owner: N
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
    function jr(e, r, i, m, I) {
      {
        var N, A = {}, C = null, K = null;
        i !== void 0 && (Je(i), C = "" + i), Or(r) && (Je(r.key), C = "" + r.key), _r(r) && (K = r.ref, xr(r, I));
        for (N in r)
          be.call(r, N) && !Rr.hasOwnProperty(N) && (A[N] = r[N]);
        if (e && e.defaultProps) {
          var L = e.defaultProps;
          for (N in L)
            A[N] === void 0 && (A[N] = L[N]);
        }
        if (C || K) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          C && Sr(A, U), K && Pr(A, U);
        }
        return Cr(e, C, K, I, m, ge.current, A);
      }
    }
    var Pe = V.ReactCurrentOwner, Xe = V.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, i = oe(e.type, e._source, r ? r.type : null);
        Xe.setExtraStackFrame(i);
      } else
        Xe.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function je(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function He() {
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
    function wr(e) {
      return "";
    }
    var Ze = {};
    function Ar(e) {
      {
        var r = He();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function Qe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Ar(r);
        if (Ze[i])
          return;
        Ze[i] = !0;
        var m = "";
        e && e._owner && e._owner !== Pe.current && (m = " It was passed a child from " + X(e._owner.type) + "."), pe(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, m), pe(null);
      }
    }
    function er(e, r) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var i = 0; i < e.length; i++) {
            var m = e[i];
            je(m) && Qe(m, r);
          }
        else if (je(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = z(e);
          if (typeof I == "function" && I !== e.entries)
            for (var N = I.call(e), A; !(A = N.next()).done; )
              je(A.value) && Qe(A.value, r);
        }
      }
    }
    function kr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          i = r.propTypes;
        else
          return;
        if (i) {
          var m = X(r);
          br(i, e.props, "prop", m, e);
        } else if (r.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var I = X(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ir(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var m = r[i];
          if (m !== "children" && m !== "key") {
            pe(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var rr = {};
    function nr(e, r, i, m, I, N) {
      {
        var A = me(e);
        if (!A) {
          var C = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = wr();
          K ? C += K : C += He();
          var L;
          e === null ? L = "null" : xe(e) ? L = "array" : e !== void 0 && e.$$typeof === l ? (L = "<" + (X(e.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : L = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, C);
        }
        var U = jr(e, r, i, I, N);
        if (U == null)
          return U;
        if (A) {
          var re = r.children;
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
        if (be.call(r, "key")) {
          var se = X(e), Z = Object.keys(r).filter(function(qr) {
            return qr !== "key";
          }), we = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!rr[se + we]) {
            var Fr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, se, Fr, se), rr[se + we] = !0;
          }
        }
        return e === c ? Ir(U) : kr(U), U;
      }
    }
    function $r(e, r, i) {
      return nr(e, r, i, !0);
    }
    function Dr(e, r, i) {
      return nr(e, r, i, !1);
    }
    var Mr = Dr, Nr = $r;
    Te.Fragment = c, Te.jsx = Mr, Te.jsxs = Nr;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Ne.exports = Xr() : Ne.exports = Hr();
var p = Ne.exports, Fe = { exports: {} }, _e = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Zr() {
  if (ir) return $;
  ir = 1;
  var n = typeof Symbol == "function" && Symbol.for, l = n ? Symbol.for("react.element") : 60103, d = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, v = n ? Symbol.for("react.strict_mode") : 60108, f = n ? Symbol.for("react.profiler") : 60114, _ = n ? Symbol.for("react.provider") : 60109, y = n ? Symbol.for("react.context") : 60110, b = n ? Symbol.for("react.async_mode") : 60111, j = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, T = n ? Symbol.for("react.suspense") : 60113, M = n ? Symbol.for("react.suspense_list") : 60120, q = n ? Symbol.for("react.memo") : 60115, J = n ? Symbol.for("react.lazy") : 60116, F = n ? Symbol.for("react.block") : 60121, z = n ? Symbol.for("react.fundamental") : 60117, V = n ? Symbol.for("react.responder") : 60118, Y = n ? Symbol.for("react.scope") : 60119;
  function B(o) {
    if (typeof o == "object" && o !== null) {
      var te = o.$$typeof;
      switch (te) {
        case l:
          switch (o = o.type, o) {
            case b:
            case j:
            case c:
            case f:
            case v:
            case T:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case y:
                case h:
                case J:
                case q:
                case _:
                  return o;
                default:
                  return te;
              }
          }
        case d:
          return te;
      }
    }
  }
  function W(o) {
    return B(o) === j;
  }
  return $.AsyncMode = b, $.ConcurrentMode = j, $.ContextConsumer = y, $.ContextProvider = _, $.Element = l, $.ForwardRef = h, $.Fragment = c, $.Lazy = J, $.Memo = q, $.Portal = d, $.Profiler = f, $.StrictMode = v, $.Suspense = T, $.isAsyncMode = function(o) {
    return W(o) || B(o) === b;
  }, $.isConcurrentMode = W, $.isContextConsumer = function(o) {
    return B(o) === y;
  }, $.isContextProvider = function(o) {
    return B(o) === _;
  }, $.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === l;
  }, $.isForwardRef = function(o) {
    return B(o) === h;
  }, $.isFragment = function(o) {
    return B(o) === c;
  }, $.isLazy = function(o) {
    return B(o) === J;
  }, $.isMemo = function(o) {
    return B(o) === q;
  }, $.isPortal = function(o) {
    return B(o) === d;
  }, $.isProfiler = function(o) {
    return B(o) === f;
  }, $.isStrictMode = function(o) {
    return B(o) === v;
  }, $.isSuspense = function(o) {
    return B(o) === T;
  }, $.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === c || o === j || o === f || o === v || o === T || o === M || typeof o == "object" && o !== null && (o.$$typeof === J || o.$$typeof === q || o.$$typeof === _ || o.$$typeof === y || o.$$typeof === h || o.$$typeof === z || o.$$typeof === V || o.$$typeof === Y || o.$$typeof === F);
  }, $.typeOf = B, $;
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
var or;
function Qr() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, l = n ? Symbol.for("react.element") : 60103, d = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, v = n ? Symbol.for("react.strict_mode") : 60108, f = n ? Symbol.for("react.profiler") : 60114, _ = n ? Symbol.for("react.provider") : 60109, y = n ? Symbol.for("react.context") : 60110, b = n ? Symbol.for("react.async_mode") : 60111, j = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, T = n ? Symbol.for("react.suspense") : 60113, M = n ? Symbol.for("react.suspense_list") : 60120, q = n ? Symbol.for("react.memo") : 60115, J = n ? Symbol.for("react.lazy") : 60116, F = n ? Symbol.for("react.block") : 60121, z = n ? Symbol.for("react.fundamental") : 60117, V = n ? Symbol.for("react.responder") : 60118, Y = n ? Symbol.for("react.scope") : 60119;
    function B(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === c || a === j || a === f || a === v || a === T || a === M || typeof a == "object" && a !== null && (a.$$typeof === J || a.$$typeof === q || a.$$typeof === _ || a.$$typeof === y || a.$$typeof === h || a.$$typeof === z || a.$$typeof === V || a.$$typeof === Y || a.$$typeof === F);
    }
    function W(a) {
      if (typeof a == "object" && a !== null) {
        var ee = a.$$typeof;
        switch (ee) {
          case l:
            var de = a.type;
            switch (de) {
              case b:
              case j:
              case c:
              case f:
              case v:
              case T:
                return de;
              default:
                var oe = de && de.$$typeof;
                switch (oe) {
                  case y:
                  case h:
                  case J:
                  case q:
                  case _:
                    return oe;
                  default:
                    return ee;
                }
            }
          case d:
            return ee;
        }
      }
    }
    var o = b, te = j, ye = y, he = _, ue = l, me = h, ce = c, fe = J, X = q, H = d, ae = f, Q = v, ne = T, ie = !1;
    function le(a) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(a) || W(a) === b;
    }
    function t(a) {
      return W(a) === j;
    }
    function s(a) {
      return W(a) === y;
    }
    function x(a) {
      return W(a) === _;
    }
    function O(a) {
      return typeof a == "object" && a !== null && a.$$typeof === l;
    }
    function g(a) {
      return W(a) === h;
    }
    function w(a) {
      return W(a) === c;
    }
    function E(a) {
      return W(a) === J;
    }
    function R(a) {
      return W(a) === q;
    }
    function S(a) {
      return W(a) === d;
    }
    function k(a) {
      return W(a) === f;
    }
    function P(a) {
      return W(a) === v;
    }
    function G(a) {
      return W(a) === T;
    }
    D.AsyncMode = o, D.ConcurrentMode = te, D.ContextConsumer = ye, D.ContextProvider = he, D.Element = ue, D.ForwardRef = me, D.Fragment = ce, D.Lazy = fe, D.Memo = X, D.Portal = H, D.Profiler = ae, D.StrictMode = Q, D.Suspense = ne, D.isAsyncMode = le, D.isConcurrentMode = t, D.isContextConsumer = s, D.isContextProvider = x, D.isElement = O, D.isForwardRef = g, D.isFragment = w, D.isLazy = E, D.isMemo = R, D.isPortal = S, D.isProfiler = k, D.isStrictMode = P, D.isSuspense = G, D.isValidElementType = B, D.typeOf = W;
  }()), D;
}
var sr;
function yr() {
  return sr || (sr = 1, process.env.NODE_ENV === "production" ? _e.exports = Zr() : _e.exports = Qr()), _e.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ae, ur;
function en() {
  if (ur) return Ae;
  ur = 1;
  var n = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
  function c(f) {
    if (f == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(f);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var f = new String("abc");
      if (f[5] = "de", Object.getOwnPropertyNames(f)[0] === "5")
        return !1;
      for (var _ = {}, y = 0; y < 10; y++)
        _["_" + String.fromCharCode(y)] = y;
      var b = Object.getOwnPropertyNames(_).map(function(h) {
        return _[h];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var j = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        j[h] = h;
      }), Object.keys(Object.assign({}, j)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ae = v() ? Object.assign : function(f, _) {
    for (var y, b = c(f), j, h = 1; h < arguments.length; h++) {
      y = Object(arguments[h]);
      for (var T in y)
        l.call(y, T) && (b[T] = y[T]);
      if (n) {
        j = n(y);
        for (var M = 0; M < j.length; M++)
          d.call(y, j[M]) && (b[j[M]] = y[j[M]]);
      }
    }
    return b;
  }, Ae;
}
var ke, cr;
function qe() {
  if (cr) return ke;
  cr = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = n, ke;
}
var Ie, fr;
function hr() {
  return fr || (fr = 1, Ie = Function.call.bind(Object.prototype.hasOwnProperty)), Ie;
}
var $e, lr;
function rn() {
  if (lr) return $e;
  lr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var l = qe(), d = {}, c = hr();
    n = function(f) {
      var _ = "Warning: " + f;
      typeof console < "u" && console.error(_);
      try {
        throw new Error(_);
      } catch {
      }
    };
  }
  function v(f, _, y, b, j) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in f)
        if (c(f, h)) {
          var T;
          try {
            if (typeof f[h] != "function") {
              var M = Error(
                (b || "React class") + ": " + y + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw M.name = "Invariant Violation", M;
            }
            T = f[h](_, h, b, y, null, l);
          } catch (J) {
            T = J;
          }
          if (T && !(T instanceof Error) && n(
            (b || "React class") + ": type specification of " + y + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in d)) {
            d[T.message] = !0;
            var q = j ? j() : "";
            n(
              "Failed " + y + " type: " + T.message + (q ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (d = {});
  }, $e = v, $e;
}
var De, dr;
function nn() {
  if (dr) return De;
  dr = 1;
  var n = yr(), l = en(), d = qe(), c = hr(), v = rn(), f = function() {
  };
  process.env.NODE_ENV !== "production" && (f = function(y) {
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
  return De = function(y, b) {
    var j = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function T(t) {
      var s = t && (j && t[j] || t[h]);
      if (typeof s == "function")
        return s;
    }
    var M = "<<anonymous>>", q = {
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
      elementType: o(),
      instanceOf: te,
      node: me(),
      objectOf: he,
      oneOf: ye,
      oneOfType: ue,
      shape: fe,
      exact: X
    };
    function J(t, s) {
      return t === s ? t !== 0 || 1 / t === 1 / s : t !== t && s !== s;
    }
    function F(t, s) {
      this.message = t, this.data = s && typeof s == "object" ? s : {}, this.stack = "";
    }
    F.prototype = Error.prototype;
    function z(t) {
      if (process.env.NODE_ENV !== "production")
        var s = {}, x = 0;
      function O(w, E, R, S, k, P, G) {
        if (S = S || M, P = P || R, G !== d) {
          if (b) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = S + ":" + R;
            !s[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (f(
              "You are manually calling a React.PropTypes validation function for the `" + P + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[ee] = !0, x++);
          }
        }
        return E[R] == null ? w ? E[R] === null ? new F("The " + k + " `" + P + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new F("The " + k + " `" + P + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : t(E, R, S, k, P);
      }
      var g = O.bind(null, !1);
      return g.isRequired = O.bind(null, !0), g;
    }
    function V(t) {
      function s(x, O, g, w, E, R) {
        var S = x[O], k = Q(S);
        if (k !== t) {
          var P = ne(S);
          return new F(
            "Invalid " + w + " `" + E + "` of type " + ("`" + P + "` supplied to `" + g + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return z(s);
    }
    function Y() {
      return z(_);
    }
    function B(t) {
      function s(x, O, g, w, E) {
        if (typeof t != "function")
          return new F("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var R = x[O];
        if (!Array.isArray(R)) {
          var S = Q(R);
          return new F("Invalid " + w + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an array."));
        }
        for (var k = 0; k < R.length; k++) {
          var P = t(R, k, g, w, E + "[" + k + "]", d);
          if (P instanceof Error)
            return P;
        }
        return null;
      }
      return z(s);
    }
    function W() {
      function t(s, x, O, g, w) {
        var E = s[x];
        if (!y(E)) {
          var R = Q(E);
          return new F("Invalid " + g + " `" + w + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(t);
    }
    function o() {
      function t(s, x, O, g, w) {
        var E = s[x];
        if (!n.isValidElementType(E)) {
          var R = Q(E);
          return new F("Invalid " + g + " `" + w + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(t);
    }
    function te(t) {
      function s(x, O, g, w, E) {
        if (!(x[O] instanceof t)) {
          var R = t.name || M, S = le(x[O]);
          return new F("Invalid " + w + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return z(s);
    }
    function ye(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? f(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : f("Invalid argument supplied to oneOf, expected an array.")), _;
      function s(x, O, g, w, E) {
        for (var R = x[O], S = 0; S < t.length; S++)
          if (J(R, t[S]))
            return null;
        var k = JSON.stringify(t, function(G, a) {
          var ee = ne(a);
          return ee === "symbol" ? String(a) : a;
        });
        return new F("Invalid " + w + " `" + E + "` of value `" + String(R) + "` " + ("supplied to `" + g + "`, expected one of " + k + "."));
      }
      return z(s);
    }
    function he(t) {
      function s(x, O, g, w, E) {
        if (typeof t != "function")
          return new F("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var R = x[O], S = Q(R);
        if (S !== "object")
          return new F("Invalid " + w + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an object."));
        for (var k in R)
          if (c(R, k)) {
            var P = t(R, k, g, w, E + "." + k, d);
            if (P instanceof Error)
              return P;
          }
        return null;
      }
      return z(s);
    }
    function ue(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && f("Invalid argument supplied to oneOfType, expected an instance of array."), _;
      for (var s = 0; s < t.length; s++) {
        var x = t[s];
        if (typeof x != "function")
          return f(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(x) + " at index " + s + "."
          ), _;
      }
      function O(g, w, E, R, S) {
        for (var k = [], P = 0; P < t.length; P++) {
          var G = t[P], a = G(g, w, E, R, S, d);
          if (a == null)
            return null;
          a.data && c(a.data, "expectedType") && k.push(a.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new F("Invalid " + R + " `" + S + "` supplied to " + ("`" + E + "`" + ee + "."));
      }
      return z(O);
    }
    function me() {
      function t(s, x, O, g, w) {
        return H(s[x]) ? null : new F("Invalid " + g + " `" + w + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return z(t);
    }
    function ce(t, s, x, O, g) {
      return new F(
        (t || "React class") + ": " + s + " type `" + x + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function fe(t) {
      function s(x, O, g, w, E) {
        var R = x[O], S = Q(R);
        if (S !== "object")
          return new F("Invalid " + w + " `" + E + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var k in t) {
          var P = t[k];
          if (typeof P != "function")
            return ce(g, w, E, k, ne(P));
          var G = P(R, k, g, w, E + "." + k, d);
          if (G)
            return G;
        }
        return null;
      }
      return z(s);
    }
    function X(t) {
      function s(x, O, g, w, E) {
        var R = x[O], S = Q(R);
        if (S !== "object")
          return new F("Invalid " + w + " `" + E + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
        var k = l({}, x[O], t);
        for (var P in k) {
          var G = t[P];
          if (c(t, P) && typeof G != "function")
            return ce(g, w, E, P, ne(G));
          if (!G)
            return new F(
              "Invalid " + w + " `" + E + "` key `" + P + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(x[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var a = G(R, P, g, w, E + "." + P, d);
          if (a)
            return a;
        }
        return null;
      }
      return z(s);
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
          var s = T(t);
          if (s) {
            var x = s.call(t), O;
            if (s !== t.entries) {
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
    function ae(t, s) {
      return t === "symbol" ? !0 : s ? s["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && s instanceof Symbol : !1;
    }
    function Q(t) {
      var s = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : ae(s, t) ? "symbol" : s;
    }
    function ne(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var s = Q(t);
      if (s === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return s;
    }
    function ie(t) {
      var s = ne(t);
      switch (s) {
        case "array":
        case "object":
          return "an " + s;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + s;
        default:
          return s;
      }
    }
    function le(t) {
      return !t.constructor || !t.constructor.name ? M : t.constructor.name;
    }
    return q.checkPropTypes = v, q.resetWarningCache = v.resetWarningCache, q.PropTypes = q, q;
  }, De;
}
var Me, pr;
function tn() {
  if (pr) return Me;
  pr = 1;
  var n = qe();
  function l() {
  }
  function d() {
  }
  return d.resetWarningCache = l, Me = function() {
    function c(_, y, b, j, h, T) {
      if (T !== n) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    c.isRequired = c;
    function v() {
      return c;
    }
    var f = {
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
      checkPropTypes: d,
      resetWarningCache: l
    };
    return f.PropTypes = f, f;
  }, Me;
}
if (process.env.NODE_ENV !== "production") {
  var an = yr(), on = !0;
  Fe.exports = nn()(an.isElement, on);
} else
  Fe.exports = tn()();
var sn = Fe.exports;
const u = /* @__PURE__ */ Kr(sn), un = {
  trash: Wr,
  filter: Ur,
  info: Vr,
  fill: Br,
  ellipsis: zr,
  chevronRight: Jr,
  chevronLeft: Gr
}, Oe = ({ onClick: n, iconName: l }) => /* @__PURE__ */ p.jsx("div", { className: "iconButton", children: /* @__PURE__ */ p.jsx("button", { "aria-label": l, type: "button", onClick: n, children: /* @__PURE__ */ p.jsx(Lr, { icon: un[l] }) }) });
Oe.propTypes = {
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
Oe.defaultProps = {
  iconName: "ellipsis"
};
const Ye = ({ buttons: n }) => /* @__PURE__ */ p.jsx("div", { className: "layerButtonReel", children: n && Object.keys(n).map((l) => /* @__PURE__ */ p.jsx(Oe, { iconName: l, onClick: n[l] })) });
Ye.propTypes = {
  buttons: u.objectOf(u.func)
};
Ye.defaultProps = {
  buttons: null
};
const Le = ({ layerName: n, isActive: l, onChange: d }) => /* @__PURE__ */ p.jsxs("div", { className: "layerToggle", children: [
  /* @__PURE__ */ p.jsx("p", { children: n }),
  /* @__PURE__ */ p.jsxs("div", { className: "switch", children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "checkbox",
        value: n,
        checked: l,
        onChange: d
      }
    ),
    /* @__PURE__ */ p.jsx("span", { className: "slider" })
  ] })
] });
Le.propTypes = {
  layerName: u.string,
  isActive: u.bool,
  onChange: u.func.isRequired
};
Le.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const cn = ({ layerName: n, isActive: l, onChange: d, buttons: c, children: v }) => /* @__PURE__ */ p.jsxs("div", { className: "layerCard", children: [
  /* @__PURE__ */ p.jsxs("div", { className: "layerCardWrapper", children: [
    /* @__PURE__ */ p.jsx(
      Le,
      {
        layerName: n,
        isActive: l,
        onChange: d
      }
    ),
    /* @__PURE__ */ p.jsx(Ye, { buttons: c })
  ] }),
  l && /* @__PURE__ */ p.jsx("div", { className: "layerCardChildren", children: v })
] });
cn.propTypes = {
  layerName: u.string.isRequired,
  isActive: u.bool,
  onChange: u.func.isRequired,
  buttons: u.objectOf(u.func),
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ])
};
const We = ({ color: n, label: l, value: d, units: c }) => /* @__PURE__ */ p.jsxs("div", { className: "swatch-container", children: [
  /* @__PURE__ */ p.jsx("div", { className: "swatch", style: { "background-color": n } }),
  /* @__PURE__ */ p.jsx("div", { className: "swatch-label", children: l }),
  /* @__PURE__ */ p.jsxs("div", { className: "swatch-value", children: [
    d,
    c
  ] })
] });
We.propTypes = {
  color: u.string.isRequired,
  label: u.string.isRequired,
  value: u.number,
  units: u.string
};
We.defaultProps = {
  value: void 0,
  units: ""
};
const fn = ({ swatches: n }) => /* @__PURE__ */ p.jsx("div", { className: "swatch-legend", children: n && n.map((l) => {
  const { color: d, label: c, value: v, units: f } = l;
  return /* @__PURE__ */ p.jsx(
    We,
    {
      label: c,
      color: d,
      value: v,
      units: f
    },
    c
  );
}) });
fn.propTypes = {
  swatches: u.arrayOf(u.objectOf(u.string)).isRequired
};
const ln = ({
  title: n = "Gradient Legend",
  startColor: l = "red",
  endColor: d = "yellow",
  startNo: c = 0,
  endNo: v = 100,
  titleBelow: f = !1,
  bins: _ = 0,
  precision: y = 2
}) => {
  const b = _ > 0 ? Array(_ - 1).fill(0).map((j, h) => {
    const T = (c + (v - c) / _ * (h + 1)).toPrecision(y);
    return /* @__PURE__ */ p.jsx("span", { children: T }, T);
  }) : [];
  return /* @__PURE__ */ p.jsxs("div", { className: "gradient-box", children: [
    !f && /* @__PURE__ */ p.jsxs("div", { className: "ui-title", children: [
      " ",
      n
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "gradient-legend", children: [
      /* @__PURE__ */ p.jsx(
        "div",
        {
          className: "gradient",
          style: {
            background: `linear-gradient(to right, ${l} , ${d})`
          }
        }
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "gradient-numbers", children: [
        /* @__PURE__ */ p.jsx("span", { children: c }),
        b,
        /* @__PURE__ */ p.jsx("span", { children: v })
      ] }),
      f && /* @__PURE__ */ p.jsxs("div", { className: "ui-title", children: [
        " ",
        n
      ] })
    ] })
  ] });
};
ln.propTypes = {
  title: u.string,
  startColor: u.string,
  endColor: u.string,
  startNo: u.number,
  endNo: u.number,
  titleBelow: u.bool,
  bins: u.number,
  precision: u.number
};
const Ue = ({
  units: n,
  label: l,
  onChange: d,
  min: c,
  max: v,
  step: f,
  value: _
}) => /* @__PURE__ */ p.jsxs("div", { className: "simple-slider", children: [
  /* @__PURE__ */ p.jsxs("div", { children: [
    l && /* @__PURE__ */ p.jsx("div", { className: "ui-label", children: l }),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        onChange: d,
        className: "simple-slider-input",
        type: "range",
        value: _,
        min: c,
        max: v,
        step: f
      }
    )
  ] }),
  /* @__PURE__ */ p.jsxs("div", { className: "simple-slider-min-max-container", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "ui-label", children: [
      c,
      n
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "ui-label", children: [
      v,
      n
    ] })
  ] })
] });
Ue.propTypes = {
  onChange: u.func.isRequired,
  min: u.number.isRequired,
  max: u.number.isRequired,
  step: u.number.isRequired,
  value: u.number,
  label: u.string,
  units: u.string
};
Ue.defaultProps = {
  value: 0,
  units: "",
  label: ""
};
const mr = ({ mapContainer: n, id: l, children: d }) => /* @__PURE__ */ p.jsx("div", { className: "map-container", id: l, ref: n, children: d });
mr.propTypes = {
  mapContainer: u.oneOfType([
    u.func,
    u.shape({ current: u.instanceOf(Element) })
  ]),
  children: u.node,
  id: u.string
};
mr.defaultProps = {
  children: null,
  mapContainer: null,
  id: null
};
const dn = ({ showToggle: n, children: l }) => {
  const [d, c] = Yr(!1), v = `sidebar ${d ? "closed" : ""}`, f = () => {
    c(!d);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ p.jsx("div", { className: v, children: l }),
    n && /* @__PURE__ */ p.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ p.jsx(
      Oe,
      {
        onClick: f,
        iconName: d ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
dn.propTypes = {
  showToggle: u.bool,
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const pn = ({ children: n }) => /* @__PURE__ */ p.jsx("div", { className: "layout-stacked", children: n });
pn.propTypes = {
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const vn = ({ align: n = "left", children: l }) => /* @__PURE__ */ p.jsx("div", { className: `layout-standard ${n}`, children: l });
vn.propTypes = {
  align: u.oneOf(["left", "right"]),
  children: u.oneOfType([
    u.arrayOf(u.node),
    u.node
  ]).isRequired
};
const yn = ({ title: n, units: l, sliderConfig: d }) => /* @__PURE__ */ p.jsxs("div", { className: " slider-control-wrapper", children: [
  /* @__PURE__ */ p.jsx("div", { className: "ui-label", children: n }),
  /* @__PURE__ */ p.jsx("div", {}),
  d && d.map((c) => {
    const { label: v } = c;
    return /* @__PURE__ */ p.jsx("div", { className: "slider-label", children: v });
  }),
  d && d.map((c) => {
    const { onChange: v, min: f, max: _, step: y, value: b } = c;
    return /* @__PURE__ */ p.jsx(
      Ue,
      {
        onChange: v,
        units: l,
        min: f,
        max: _,
        step: y,
        value: b
      }
    );
  })
] });
yn.propTypes = {
  title: u.string.isRequired,
  units: u.string.isRequired,
  sliderConfig: u.arrayOf(u.objectOf(u.string)).isRequired
};
export {
  ln as GradientLegend,
  Oe as IconButton,
  Ye as LayerButtonReel,
  cn as LayerCard,
  Le as LayerToggle,
  mr as MapContainer,
  dn as SidebarContainer,
  Ue as SimpleSlider,
  yn as SliderControl,
  pn as Stacked,
  vn as Standard,
  We as Swatch,
  fn as SwatchLegend
};
