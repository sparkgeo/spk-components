import pr, { useState as Lr } from "react";
import { FontAwesomeIcon as Wr } from "@fortawesome/react-fontawesome";
import { faTrash as Ur, faFilter as Vr, faInfo as Br, faFillDrip as zr, faEllipsisVertical as Jr, faChevronRight as Gr, faChevronLeft as Kr } from "@fortawesome/free-solid-svg-icons";
function Xr(n) {
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
var nr;
function Hr() {
  if (nr) return Ee;
  nr = 1;
  var n = pr, d = Symbol.for("react.element"), l = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(v, b, j) {
    var p, T = {}, M = null, Y = null;
    j !== void 0 && (M = "" + j), b.key !== void 0 && (M = "" + b.key), b.ref !== void 0 && (Y = b.ref);
    for (p in b) u.call(b, p) && !c.hasOwnProperty(p) && (T[p] = b[p]);
    if (v && v.defaultProps) for (p in b = v.defaultProps, b) T[p] === void 0 && (T[p] = b[p]);
    return { $$typeof: d, type: v, key: M, ref: Y, props: T, _owner: m.current };
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
    var n = pr, d = Symbol.for("react.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), v = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), J = Symbol.iterator, F = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = J && e[J] || e[F];
      return typeof r == "function" ? r : null;
    }
    var V = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), y = 1; y < r; y++)
          i[y - 1] = arguments[y];
        B("error", e, i);
      }
    }
    function B(e, r, i) {
      {
        var y = V.ReactDebugCurrentFrame, I = y.getStackAddendum();
        I !== "" && (r += "%s", i = i.concat([I]));
        var N = i.map(function(A) {
          return String(A);
        });
        N.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, N);
      }
    }
    var W = !1, o = !1, ne = !1, ye = !1, he = !1, ue;
    ue = Symbol.for("react.module.reference");
    function me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === c || he || e === m || e === j || e === p || ye || e === Y || W || o || ne || typeof e == "object" && e !== null && (e.$$typeof === M || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function ce(e, r, i) {
      var y = e.displayName;
      if (y)
        return y;
      var I = r.displayName || r.name || "";
      return I !== "" ? i + "(" + I + ")" : i;
    }
    function fe(e) {
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
        case l:
          return "Portal";
        case c:
          return "Profiler";
        case m:
          return "StrictMode";
        case j:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return fe(r) + ".Consumer";
          case _:
            var i = e;
            return fe(i._context) + ".Provider";
          case b:
            return ce(e, e.render, "ForwardRef");
          case T:
            var y = e.displayName || null;
            return y !== null ? y : X(e.type) || "Memo";
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
    var H = Object.assign, ae = 0, Q, te, ie, le, t, s, O;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, te = console.info, ie = console.warn, le = console.error, t = console.group, s = console.groupCollapsed, O = console.groupEnd;
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
              value: te
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
              value: O
            })
          });
        }
        ae < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var E = V.ReactCurrentDispatcher, R;
    function S(e, r, i) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (I) {
            var y = I.stack.trim().match(/\n( *(at )?)/);
            R = y && y[1] || "";
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
      var y;
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
              y = Z;
            }
            Reflect.construct(e, [], A);
          } else {
            try {
              A.call();
            } catch (Z) {
              y = Z;
            }
            e.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            y = Z;
          }
          e();
        }
      } catch (Z) {
        if (Z && y && typeof Z.stack == "string") {
          for (var C = Z.stack.split(`
`), K = y.stack.split(`
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
      var pe = e ? e.displayName || e.name : "", se = pe ? S(pe) : "";
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
        case p:
          return S("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return ee(e.render);
          case T:
            return oe(e.type, r, i);
          case M: {
            var y = e, I = y._payload, N = y._init;
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
    function gr(e, r, i, y, I) {
      {
        var N = Function.call.bind(be);
        for (var A in e)
          if (N(e, A)) {
            var C = void 0;
            try {
              if (typeof e[A] != "function") {
                var K = Error((y || "React class") + ": " + i + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              C = e[A](r, A, y, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              C = L;
            }
            C && !(C instanceof Error) && (Re(I), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", i, A, typeof C), Re(null)), C instanceof Error && !(C.message in Ve) && (Ve[C.message] = !0, Re(I), q("Failed %s type: %s", i, C.message), Re(null));
          }
      }
    }
    var Er = Array.isArray;
    function Oe(e) {
      return Er(e);
    }
    function Tr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Rr(e) {
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
      if (Rr(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), ze(e);
    }
    var ge = V.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ge, Ke, Se;
    Se = {};
    function xr(e) {
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
    function Sr(e, r) {
      if (typeof e.ref == "string" && ge.current && r && ge.current.stateNode !== r) {
        var i = X(ge.current.type);
        Se[i] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(ge.current.type), e.ref), Se[i] = !0);
      }
    }
    function Pr(e, r) {
      {
        var i = function() {
          Ge || (Ge = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Cr(e, r) {
      {
        var i = function() {
          Ke || (Ke = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var jr = function(e, r, i, y, I, N, A) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
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
        value: y
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function wr(e, r, i, y, I) {
      {
        var N, A = {}, C = null, K = null;
        i !== void 0 && (Je(i), C = "" + i), Or(r) && (Je(r.key), C = "" + r.key), xr(r) && (K = r.ref, Sr(r, I));
        for (N in r)
          be.call(r, N) && !_r.hasOwnProperty(N) && (A[N] = r[N]);
        if (e && e.defaultProps) {
          var L = e.defaultProps;
          for (N in L)
            A[N] === void 0 && (A[N] = L[N]);
        }
        if (C || K) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          C && Pr(A, U), K && Cr(A, U);
        }
        return jr(e, C, K, I, y, ge.current, A);
      }
    }
    var Pe = V.ReactCurrentOwner, Xe = V.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var r = e._owner, i = oe(e.type, e._source, r ? r.type : null);
        Xe.setExtraStackFrame(i);
      } else
        Xe.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function je(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
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
    function Ar(e) {
      return "";
    }
    var Ze = {};
    function kr(e) {
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
        var i = kr(r);
        if (Ze[i])
          return;
        Ze[i] = !0;
        var y = "";
        e && e._owner && e._owner !== Pe.current && (y = " It was passed a child from " + X(e._owner.type) + "."), ve(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, y), ve(null);
      }
    }
    function er(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Oe(e))
          for (var i = 0; i < e.length; i++) {
            var y = e[i];
            je(y) && Qe(y, r);
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
    function Ir(e) {
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
          var y = X(r);
          gr(i, e.props, "prop", y, e);
        } else if (r.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var I = X(r);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $r(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var y = r[i];
          if (y !== "children" && y !== "key") {
            ve(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), ve(null);
            break;
          }
        }
        e.ref !== null && (ve(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var rr = {};
    function tr(e, r, i, y, I, N) {
      {
        var A = me(e);
        if (!A) {
          var C = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Ar();
          K ? C += K : C += He();
          var L;
          e === null ? L = "null" : Oe(e) ? L = "array" : e !== void 0 && e.$$typeof === d ? (L = "<" + (X(e.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : L = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, C);
        }
        var U = wr(e, r, i, I, N);
        if (U == null)
          return U;
        if (A) {
          var re = r.children;
          if (re !== void 0)
            if (y)
              if (Oe(re)) {
                for (var pe = 0; pe < re.length; pe++)
                  er(re[pe], e);
                Object.freeze && Object.freeze(re);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              er(re, e);
        }
        if (be.call(r, "key")) {
          var se = X(e), Z = Object.keys(r).filter(function(qr) {
            return qr !== "key";
          }), we = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!rr[se + we]) {
            var Yr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, se, Yr, se), rr[se + we] = !0;
          }
        }
        return e === u ? $r(U) : Ir(U), U;
      }
    }
    function Dr(e, r, i) {
      return tr(e, r, i, !0);
    }
    function Mr(e, r, i) {
      return tr(e, r, i, !1);
    }
    var Nr = Mr, Fr = Dr;
    Te.Fragment = u, Te.jsx = Nr, Te.jsxs = Fr;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Ne.exports = Hr() : Ne.exports = Zr();
var h = Ne.exports, Fe = { exports: {} }, _e = { exports: {} }, $ = {};
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
  var n = typeof Symbol == "function" && Symbol.for, d = n ? Symbol.for("react.element") : 60103, l = n ? Symbol.for("react.portal") : 60106, u = n ? Symbol.for("react.fragment") : 60107, m = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, _ = n ? Symbol.for("react.provider") : 60109, v = n ? Symbol.for("react.context") : 60110, b = n ? Symbol.for("react.async_mode") : 60111, j = n ? Symbol.for("react.concurrent_mode") : 60111, p = n ? Symbol.for("react.forward_ref") : 60112, T = n ? Symbol.for("react.suspense") : 60113, M = n ? Symbol.for("react.suspense_list") : 60120, Y = n ? Symbol.for("react.memo") : 60115, J = n ? Symbol.for("react.lazy") : 60116, F = n ? Symbol.for("react.block") : 60121, z = n ? Symbol.for("react.fundamental") : 60117, V = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
  function B(o) {
    if (typeof o == "object" && o !== null) {
      var ne = o.$$typeof;
      switch (ne) {
        case d:
          switch (o = o.type, o) {
            case b:
            case j:
            case u:
            case c:
            case m:
            case T:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case v:
                case p:
                case J:
                case Y:
                case _:
                  return o;
                default:
                  return ne;
              }
          }
        case l:
          return ne;
      }
    }
  }
  function W(o) {
    return B(o) === j;
  }
  return $.AsyncMode = b, $.ConcurrentMode = j, $.ContextConsumer = v, $.ContextProvider = _, $.Element = d, $.ForwardRef = p, $.Fragment = u, $.Lazy = J, $.Memo = Y, $.Portal = l, $.Profiler = c, $.StrictMode = m, $.Suspense = T, $.isAsyncMode = function(o) {
    return W(o) || B(o) === b;
  }, $.isConcurrentMode = W, $.isContextConsumer = function(o) {
    return B(o) === v;
  }, $.isContextProvider = function(o) {
    return B(o) === _;
  }, $.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === d;
  }, $.isForwardRef = function(o) {
    return B(o) === p;
  }, $.isFragment = function(o) {
    return B(o) === u;
  }, $.isLazy = function(o) {
    return B(o) === J;
  }, $.isMemo = function(o) {
    return B(o) === Y;
  }, $.isPortal = function(o) {
    return B(o) === l;
  }, $.isProfiler = function(o) {
    return B(o) === c;
  }, $.isStrictMode = function(o) {
    return B(o) === m;
  }, $.isSuspense = function(o) {
    return B(o) === T;
  }, $.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === u || o === j || o === c || o === m || o === T || o === M || typeof o == "object" && o !== null && (o.$$typeof === J || o.$$typeof === Y || o.$$typeof === _ || o.$$typeof === v || o.$$typeof === p || o.$$typeof === z || o.$$typeof === V || o.$$typeof === q || o.$$typeof === F);
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
function et() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, d = n ? Symbol.for("react.element") : 60103, l = n ? Symbol.for("react.portal") : 60106, u = n ? Symbol.for("react.fragment") : 60107, m = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, _ = n ? Symbol.for("react.provider") : 60109, v = n ? Symbol.for("react.context") : 60110, b = n ? Symbol.for("react.async_mode") : 60111, j = n ? Symbol.for("react.concurrent_mode") : 60111, p = n ? Symbol.for("react.forward_ref") : 60112, T = n ? Symbol.for("react.suspense") : 60113, M = n ? Symbol.for("react.suspense_list") : 60120, Y = n ? Symbol.for("react.memo") : 60115, J = n ? Symbol.for("react.lazy") : 60116, F = n ? Symbol.for("react.block") : 60121, z = n ? Symbol.for("react.fundamental") : 60117, V = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
    function B(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === u || a === j || a === c || a === m || a === T || a === M || typeof a == "object" && a !== null && (a.$$typeof === J || a.$$typeof === Y || a.$$typeof === _ || a.$$typeof === v || a.$$typeof === p || a.$$typeof === z || a.$$typeof === V || a.$$typeof === q || a.$$typeof === F);
    }
    function W(a) {
      if (typeof a == "object" && a !== null) {
        var ee = a.$$typeof;
        switch (ee) {
          case d:
            var de = a.type;
            switch (de) {
              case b:
              case j:
              case u:
              case c:
              case m:
              case T:
                return de;
              default:
                var oe = de && de.$$typeof;
                switch (oe) {
                  case v:
                  case p:
                  case J:
                  case Y:
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
    var o = b, ne = j, ye = v, he = _, ue = d, me = p, ce = u, fe = J, X = Y, H = l, ae = c, Q = m, te = T, ie = !1;
    function le(a) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(a) || W(a) === b;
    }
    function t(a) {
      return W(a) === j;
    }
    function s(a) {
      return W(a) === v;
    }
    function O(a) {
      return W(a) === _;
    }
    function x(a) {
      return typeof a == "object" && a !== null && a.$$typeof === d;
    }
    function g(a) {
      return W(a) === p;
    }
    function w(a) {
      return W(a) === u;
    }
    function E(a) {
      return W(a) === J;
    }
    function R(a) {
      return W(a) === Y;
    }
    function S(a) {
      return W(a) === l;
    }
    function k(a) {
      return W(a) === c;
    }
    function P(a) {
      return W(a) === m;
    }
    function G(a) {
      return W(a) === T;
    }
    D.AsyncMode = o, D.ConcurrentMode = ne, D.ContextConsumer = ye, D.ContextProvider = he, D.Element = ue, D.ForwardRef = me, D.Fragment = ce, D.Lazy = fe, D.Memo = X, D.Portal = H, D.Profiler = ae, D.StrictMode = Q, D.Suspense = te, D.isAsyncMode = le, D.isConcurrentMode = t, D.isContextConsumer = s, D.isContextProvider = O, D.isElement = x, D.isForwardRef = g, D.isFragment = w, D.isLazy = E, D.isMemo = R, D.isPortal = S, D.isProfiler = k, D.isStrictMode = P, D.isSuspense = G, D.isValidElementType = B, D.typeOf = W;
  }()), D;
}
var sr;
function yr() {
  return sr || (sr = 1, process.env.NODE_ENV === "production" ? _e.exports = Qr() : _e.exports = et()), _e.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ae, ur;
function rt() {
  if (ur) return Ae;
  ur = 1;
  var n = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
  function u(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function m() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var _ = {}, v = 0; v < 10; v++)
        _["_" + String.fromCharCode(v)] = v;
      var b = Object.getOwnPropertyNames(_).map(function(p) {
        return _[p];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var j = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        j[p] = p;
      }), Object.keys(Object.assign({}, j)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ae = m() ? Object.assign : function(c, _) {
    for (var v, b = u(c), j, p = 1; p < arguments.length; p++) {
      v = Object(arguments[p]);
      for (var T in v)
        d.call(v, T) && (b[T] = v[T]);
      if (n) {
        j = n(v);
        for (var M = 0; M < j.length; M++)
          l.call(v, j[M]) && (b[j[M]] = v[j[M]]);
      }
    }
    return b;
  }, Ae;
}
var ke, cr;
function Ye() {
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
function tt() {
  if (lr) return $e;
  lr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var d = Ye(), l = {}, u = hr();
    n = function(c) {
      var _ = "Warning: " + c;
      typeof console < "u" && console.error(_);
      try {
        throw new Error(_);
      } catch {
      }
    };
  }
  function m(c, _, v, b, j) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in c)
        if (u(c, p)) {
          var T;
          try {
            if (typeof c[p] != "function") {
              var M = Error(
                (b || "React class") + ": " + v + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw M.name = "Invariant Violation", M;
            }
            T = c[p](_, p, b, v, null, d);
          } catch (J) {
            T = J;
          }
          if (T && !(T instanceof Error) && n(
            (b || "React class") + ": type specification of " + v + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in l)) {
            l[T.message] = !0;
            var Y = j ? j() : "";
            n(
              "Failed " + v + " type: " + T.message + (Y ?? "")
            );
          }
        }
    }
  }
  return m.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (l = {});
  }, $e = m, $e;
}
var De, dr;
function nt() {
  if (dr) return De;
  dr = 1;
  var n = yr(), d = rt(), l = Ye(), u = hr(), m = tt(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(v) {
    var b = "Warning: " + v;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function _() {
    return null;
  }
  return De = function(v, b) {
    var j = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function T(t) {
      var s = t && (j && t[j] || t[p]);
      if (typeof s == "function")
        return s;
    }
    var M = "<<anonymous>>", Y = {
      array: V("array"),
      bigint: V("bigint"),
      bool: V("boolean"),
      func: V("function"),
      number: V("number"),
      object: V("object"),
      string: V("string"),
      symbol: V("symbol"),
      any: q(),
      arrayOf: B,
      element: W(),
      elementType: o(),
      instanceOf: ne,
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
        var s = {}, O = 0;
      function x(w, E, R, S, k, P, G) {
        if (S = S || M, P = P || R, G !== l) {
          if (b) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = S + ":" + R;
            !s[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + P + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[ee] = !0, O++);
          }
        }
        return E[R] == null ? w ? E[R] === null ? new F("The " + k + " `" + P + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new F("The " + k + " `" + P + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : t(E, R, S, k, P);
      }
      var g = x.bind(null, !1);
      return g.isRequired = x.bind(null, !0), g;
    }
    function V(t) {
      function s(O, x, g, w, E, R) {
        var S = O[x], k = Q(S);
        if (k !== t) {
          var P = te(S);
          return new F(
            "Invalid " + w + " `" + E + "` of type " + ("`" + P + "` supplied to `" + g + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return z(s);
    }
    function q() {
      return z(_);
    }
    function B(t) {
      function s(O, x, g, w, E) {
        if (typeof t != "function")
          return new F("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var R = O[x];
        if (!Array.isArray(R)) {
          var S = Q(R);
          return new F("Invalid " + w + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an array."));
        }
        for (var k = 0; k < R.length; k++) {
          var P = t(R, k, g, w, E + "[" + k + "]", l);
          if (P instanceof Error)
            return P;
        }
        return null;
      }
      return z(s);
    }
    function W() {
      function t(s, O, x, g, w) {
        var E = s[O];
        if (!v(E)) {
          var R = Q(E);
          return new F("Invalid " + g + " `" + w + "` of type " + ("`" + R + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(t);
    }
    function o() {
      function t(s, O, x, g, w) {
        var E = s[O];
        if (!n.isValidElementType(E)) {
          var R = Q(E);
          return new F("Invalid " + g + " `" + w + "` of type " + ("`" + R + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(t);
    }
    function ne(t) {
      function s(O, x, g, w, E) {
        if (!(O[x] instanceof t)) {
          var R = t.name || M, S = le(O[x]);
          return new F("Invalid " + w + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return z(s);
    }
    function ye(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), _;
      function s(O, x, g, w, E) {
        for (var R = O[x], S = 0; S < t.length; S++)
          if (J(R, t[S]))
            return null;
        var k = JSON.stringify(t, function(G, a) {
          var ee = te(a);
          return ee === "symbol" ? String(a) : a;
        });
        return new F("Invalid " + w + " `" + E + "` of value `" + String(R) + "` " + ("supplied to `" + g + "`, expected one of " + k + "."));
      }
      return z(s);
    }
    function he(t) {
      function s(O, x, g, w, E) {
        if (typeof t != "function")
          return new F("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var R = O[x], S = Q(R);
        if (S !== "object")
          return new F("Invalid " + w + " `" + E + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an object."));
        for (var k in R)
          if (u(R, k)) {
            var P = t(R, k, g, w, E + "." + k, l);
            if (P instanceof Error)
              return P;
          }
        return null;
      }
      return z(s);
    }
    function ue(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), _;
      for (var s = 0; s < t.length; s++) {
        var O = t[s];
        if (typeof O != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(O) + " at index " + s + "."
          ), _;
      }
      function x(g, w, E, R, S) {
        for (var k = [], P = 0; P < t.length; P++) {
          var G = t[P], a = G(g, w, E, R, S, l);
          if (a == null)
            return null;
          a.data && u(a.data, "expectedType") && k.push(a.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new F("Invalid " + R + " `" + S + "` supplied to " + ("`" + E + "`" + ee + "."));
      }
      return z(x);
    }
    function me() {
      function t(s, O, x, g, w) {
        return H(s[O]) ? null : new F("Invalid " + g + " `" + w + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return z(t);
    }
    function ce(t, s, O, x, g) {
      return new F(
        (t || "React class") + ": " + s + " type `" + O + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function fe(t) {
      function s(O, x, g, w, E) {
        var R = O[x], S = Q(R);
        if (S !== "object")
          return new F("Invalid " + w + " `" + E + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var k in t) {
          var P = t[k];
          if (typeof P != "function")
            return ce(g, w, E, k, te(P));
          var G = P(R, k, g, w, E + "." + k, l);
          if (G)
            return G;
        }
        return null;
      }
      return z(s);
    }
    function X(t) {
      function s(O, x, g, w, E) {
        var R = O[x], S = Q(R);
        if (S !== "object")
          return new F("Invalid " + w + " `" + E + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
        var k = d({}, O[x], t);
        for (var P in k) {
          var G = t[P];
          if (u(t, P) && typeof G != "function")
            return ce(g, w, E, P, te(G));
          if (!G)
            return new F(
              "Invalid " + w + " `" + E + "` key `" + P + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(O[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var a = G(R, P, g, w, E + "." + P, l);
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
          if (t === null || v(t))
            return !0;
          var s = T(t);
          if (s) {
            var O = s.call(t), x;
            if (s !== t.entries) {
              for (; !(x = O.next()).done; )
                if (!H(x.value))
                  return !1;
            } else
              for (; !(x = O.next()).done; ) {
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
    function ae(t, s) {
      return t === "symbol" ? !0 : s ? s["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && s instanceof Symbol : !1;
    }
    function Q(t) {
      var s = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : ae(s, t) ? "symbol" : s;
    }
    function te(t) {
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
      var s = te(t);
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
    return Y.checkPropTypes = m, Y.resetWarningCache = m.resetWarningCache, Y.PropTypes = Y, Y;
  }, De;
}
var Me, vr;
function at() {
  if (vr) return Me;
  vr = 1;
  var n = Ye();
  function d() {
  }
  function l() {
  }
  return l.resetWarningCache = d, Me = function() {
    function u(_, v, b, j, p, T) {
      if (T !== n) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    u.isRequired = u;
    function m() {
      return u;
    }
    var c = {
      array: u,
      bigint: u,
      bool: u,
      func: u,
      number: u,
      object: u,
      string: u,
      symbol: u,
      any: u,
      arrayOf: m,
      element: u,
      elementType: u,
      instanceOf: m,
      node: u,
      objectOf: m,
      oneOf: m,
      oneOfType: m,
      shape: m,
      exact: m,
      checkPropTypes: l,
      resetWarningCache: d
    };
    return c.PropTypes = c, c;
  }, Me;
}
if (process.env.NODE_ENV !== "production") {
  var it = yr(), ot = !0;
  Fe.exports = nt()(it.isElement, ot);
} else
  Fe.exports = at()();
var st = Fe.exports;
const f = /* @__PURE__ */ Xr(st), ut = {
  trash: Ur,
  filter: Vr,
  info: Br,
  fill: zr,
  ellipsis: Jr,
  chevronRight: Gr,
  chevronLeft: Kr
}, xe = ({ onClick: n, iconName: d }) => /* @__PURE__ */ h.jsx("div", { className: "iconButton", children: /* @__PURE__ */ h.jsx("button", { "aria-label": d, type: "button", onClick: n, children: /* @__PURE__ */ h.jsx(Wr, { icon: ut[d] }) }) });
xe.propTypes = {
  iconName: f.oneOf([
    "trash",
    "filter",
    "info",
    "fill",
    "ellipsis",
    "chevronLeft",
    "chevronRight"
  ]),
  onClick: f.func.isRequired
};
xe.defaultProps = {
  iconName: "ellipsis"
};
const qe = ({ buttons: n }) => /* @__PURE__ */ h.jsx("div", { className: "layerButtonReel", children: n && Object.keys(n).map((d) => /* @__PURE__ */ h.jsx(xe, { iconName: d, onClick: n[d] })) });
qe.propTypes = {
  buttons: f.objectOf(f.func)
};
qe.defaultProps = {
  buttons: null
};
const Le = ({ layerName: n, isActive: d, onChange: l }) => /* @__PURE__ */ h.jsxs("div", { className: "layerToggle", children: [
  /* @__PURE__ */ h.jsx("p", { children: n }),
  /* @__PURE__ */ h.jsxs("div", { className: "switch", children: [
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: "checkbox",
        value: n,
        checked: d,
        onChange: l
      }
    ),
    /* @__PURE__ */ h.jsx("span", { className: "slider" })
  ] })
] });
Le.propTypes = {
  layerName: f.string,
  isActive: f.bool,
  onChange: f.func.isRequired
};
Le.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const mr = ({ layerName: n, isActive: d, onChange: l, buttons: u }) => /* @__PURE__ */ h.jsx("div", { className: "layerCard", children: /* @__PURE__ */ h.jsxs("div", { className: "layerCardWrapper", children: [
  /* @__PURE__ */ h.jsx(
    Le,
    {
      layerName: n,
      isActive: d,
      onChange: l
    }
  ),
  /* @__PURE__ */ h.jsx(qe, { buttons: u })
] }) });
mr.propTypes = {
  layerName: f.string.isRequired,
  isActive: f.bool,
  onChange: f.func.isRequired,
  buttons: f.objectOf(f.func)
};
mr.defaultProps = {
  isActive: !1,
  buttons: null
};
const We = ({ color: n, label: d, value: l, units: u }) => /* @__PURE__ */ h.jsxs("div", { className: "swatch-container", children: [
  /* @__PURE__ */ h.jsx("div", { className: "swatch", style: { "background-color": n } }),
  /* @__PURE__ */ h.jsx("div", { className: "swatch-label", children: d }),
  /* @__PURE__ */ h.jsxs("div", { className: "swatch-value", children: [
    l,
    u
  ] })
] });
We.propTypes = {
  color: f.string.isRequired,
  label: f.string.isRequired,
  value: f.number,
  units: f.string
};
We.defaultProps = {
  value: void 0,
  units: ""
};
const ct = ({ swatches: n }) => /* @__PURE__ */ h.jsx("div", { className: "swatch-legend", children: n && n.map((d) => {
  const { color: l, label: u, value: m, units: c } = d;
  return /* @__PURE__ */ h.jsx(
    We,
    {
      label: u,
      color: l,
      value: m,
      units: c
    },
    u
  );
}) });
ct.propTypes = {
  swatches: f.arrayOf(f.objectOf(f.string)).isRequired
};
const ft = ({
  title: n = "Gradient Legend",
  startColor: d = "red",
  endColor: l = "yellow",
  startNo: u = 0,
  endNo: m = 100,
  titleBelow: c = !1,
  bins: _ = 0,
  precision: v = 2
}) => {
  const b = _ > 0 ? Array(_ - 1).fill(0).map((j, p) => {
    const T = (u + (m - u) / _ * (p + 1)).toPrecision(v);
    return /* @__PURE__ */ h.jsx("span", { children: T }, T);
  }) : [];
  return /* @__PURE__ */ h.jsxs("div", { className: "gradient-box", children: [
    !c && /* @__PURE__ */ h.jsxs("div", { className: "ui-title", children: [
      " ",
      n
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "gradient-legend", children: [
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: "gradient",
          style: {
            background: `linear-gradient(to right, ${d} , ${l})`
          }
        }
      ),
      /* @__PURE__ */ h.jsxs("div", { className: "gradient-numbers", children: [
        /* @__PURE__ */ h.jsx("span", { children: u }),
        b,
        /* @__PURE__ */ h.jsx("span", { children: m })
      ] }),
      c && /* @__PURE__ */ h.jsxs("div", { className: "ui-title", children: [
        " ",
        n
      ] })
    ] })
  ] });
};
ft.propTypes = {
  title: f.string,
  startColor: f.string,
  endColor: f.string,
  startNo: f.number,
  endNo: f.number,
  titleBelow: f.bool,
  bins: f.number,
  precision: f.number
};
const Ue = ({
  units: n,
  label: d,
  onChange: l,
  min: u,
  max: m,
  step: c,
  value: _
}) => /* @__PURE__ */ h.jsxs("div", { className: "simple-slider", children: [
  /* @__PURE__ */ h.jsxs("div", { children: [
    d && /* @__PURE__ */ h.jsx("div", { className: "ui-label", children: d }),
    /* @__PURE__ */ h.jsx(
      "input",
      {
        onChange: l,
        className: "simple-slider-input",
        type: "range",
        value: _,
        min: u,
        max: m,
        step: c
      }
    )
  ] }),
  /* @__PURE__ */ h.jsxs("div", { className: "simple-slider-min-max-container", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "ui-label", children: [
      u,
      n
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "ui-label", children: [
      m,
      n
    ] })
  ] })
] });
Ue.propTypes = {
  onChange: f.func.isRequired,
  min: f.number.isRequired,
  max: f.number.isRequired,
  step: f.number.isRequired,
  value: f.number,
  label: f.string,
  units: f.string
};
Ue.defaultProps = {
  value: 0,
  units: "",
  label: ""
};
const br = ({ mapContainer: n, children: d }) => /* @__PURE__ */ h.jsx("div", { className: "map-container", ref: n, children: d });
br.propTypes = {
  mapContainer: f.oneOfType([
    f.func,
    f.shape({ current: f.instanceOf(Element) })
  ]),
  children: f.node
};
br.defaultProps = {
  children: null,
  mapContainer: null
};
const lt = ({ showToggle: n, children: d }) => {
  const [l, u] = Lr(!1), m = `sidebar ${l ? "closed" : ""}`, c = () => {
    u(!l);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ h.jsx("div", { className: m, children: d }),
    n && /* @__PURE__ */ h.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ h.jsx(
      xe,
      {
        onClick: c,
        iconName: l ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
lt.propTypes = {
  showToggle: f.bool,
  children: f.oneOfType([
    f.arrayOf(f.node),
    f.node
  ]).isRequired
};
const dt = ({ title: n, units: d, sliderConfig: l }) => /* @__PURE__ */ h.jsxs("div", { className: " slider-control-wrapper", children: [
  /* @__PURE__ */ h.jsx("div", { className: "ui-label", children: n }),
  /* @__PURE__ */ h.jsx("div", {}),
  l && l.map((u) => {
    const { label: m } = u;
    return /* @__PURE__ */ h.jsx("div", { className: "slider-label", children: m });
  }),
  l && l.map((u) => {
    const { onChange: m, min: c, max: _, step: v, value: b } = u;
    return /* @__PURE__ */ h.jsx(
      Ue,
      {
        onChange: m,
        units: d,
        min: c,
        max: _,
        step: v,
        value: b
      }
    );
  })
] });
dt.propTypes = {
  title: f.string.isRequired,
  units: f.string.isRequired,
  sliderConfig: f.arrayOf(f.objectOf(f.string)).isRequired
};
export {
  ft as GradientLegend,
  xe as IconButton,
  qe as LayerButtonReel,
  mr as LayerCard,
  Le as LayerToggle,
  br as MapContainer,
  lt as Sidebar,
  Ue as SimpleSlider,
  dt as SliderControl,
  We as Swatch,
  ct as SwatchLegend
};
