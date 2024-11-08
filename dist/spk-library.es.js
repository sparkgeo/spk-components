import Tr, { useState as xr } from "react";
import { FontAwesomeIcon as Rr } from "@fortawesome/react-fontawesome";
import { faTrash as Xr, faFilter as Zr, faInfo as Qr, faFillDrip as et, faEllipsisVertical as rt, faChevronRight as Cr, faChevronLeft as tt, faChevronDown as nt } from "@fortawesome/free-solid-svg-icons";
import { DatePicker as at, Label as ot, Group as it, DateInput as st, DateSegment as ct, Button as De, Text as lt, FieldError as ut, Popover as ft, Dialog as dt, Calendar as pt, Heading as vt, CalendarGrid as yt, CalendarCell as ht } from "react-aria-components";
function _t(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ue = { exports: {} }, Ee = {};
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
function mt() {
  if (ur) return Ee;
  ur = 1;
  var r = Tr, d = Symbol.for("react.element"), f = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(y, m, w) {
    var h, E = {}, N = null, L = null;
    w !== void 0 && (N = "" + w), m.key !== void 0 && (N = "" + m.key), m.ref !== void 0 && (L = m.ref);
    for (h in m) u.call(m, h) && !p.hasOwnProperty(h) && (E[h] = m[h]);
    if (y && y.defaultProps) for (h in m = y.defaultProps, m) E[h] === void 0 && (E[h] = m[h]);
    return { $$typeof: d, type: y, key: N, ref: L, props: E, _owner: v.current };
  }
  return Ee.Fragment = f, Ee.jsx = x, Ee.jsxs = x, Ee;
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
var fr;
function gt() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Tr, d = Symbol.for("react.element"), f = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), y = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), z = Symbol.iterator, q = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = z && e[z] || e[q];
      return typeof t == "function" ? t : null;
    }
    var B = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), _ = 1; _ < t; _++)
          i[_ - 1] = arguments[_];
        U("error", e, i);
      }
    }
    function U(e, t, i) {
      {
        var _ = B.ReactDebugCurrentFrame, I = _.getStackAddendum();
        I !== "" && (t += "%s", i = i.concat([I]));
        var M = i.map(function(A) {
          return String(A);
        });
        M.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var Y = !1, c = !1, ne = !1, he = !1, _e = !1, le;
    le = Symbol.for("react.module.reference");
    function me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === p || _e || e === v || e === w || e === h || he || e === L || Y || c || ne || typeof e == "object" && e !== null && (e.$$typeof === N || e.$$typeof === E || e.$$typeof === x || e.$$typeof === y || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function ue(e, t, i) {
      var _ = e.displayName;
      if (_)
        return _;
      var I = t.displayName || t.name || "";
      return I !== "" ? i + "(" + I + ")" : i;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case f:
          return "Portal";
        case p:
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
            var t = e;
            return fe(t) + ".Consumer";
          case x:
            var i = e;
            return fe(i._context) + ".Provider";
          case m:
            return ue(e, e.render, "ForwardRef");
          case E:
            var _ = e.displayName || null;
            return _ !== null ? _ : K(e.type) || "Memo";
          case N: {
            var I = e, M = I._payload, A = I._init;
            try {
              return K(A(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, Q, te, oe, de, n, l, C;
    function R() {
    }
    R.__reactDisabledLog = !0;
    function g() {
      {
        if (ae === 0) {
          Q = console.log, te = console.info, oe = console.warn, de = console.error, n = console.group, l = console.groupCollapsed, C = console.groupEnd;
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
              value: de
            }),
            group: X({}, e, {
              value: n
            }),
            groupCollapsed: X({}, e, {
              value: l
            }),
            groupEnd: X({}, e, {
              value: C
            })
          });
        }
        ae < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var b = B.ReactCurrentDispatcher, T;
    function O(e, t, i) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (I) {
            var _ = I.stack.trim().match(/\n( *(at )?)/);
            T = _ && _[1] || "";
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
    function o(e, t) {
      if (!e || k)
        return "";
      {
        var i = S.get(e);
        if (i !== void 0)
          return i;
      }
      var _;
      k = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = b.current, b.current = null, g();
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
              _ = Z;
            }
            Reflect.construct(e, [], A);
          } else {
            try {
              A.call();
            } catch (Z) {
              _ = Z;
            }
            e.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            _ = Z;
          }
          e();
        }
      } catch (Z) {
        if (Z && _ && typeof Z.stack == "string") {
          for (var j = Z.stack.split(`
`), H = _.stack.split(`
`), W = j.length - 1, G = H.length - 1; W >= 1 && G >= 0 && j[W] !== H[G]; )
            G--;
          for (; W >= 1 && G >= 0; W--, G--)
            if (j[W] !== H[G]) {
              if (W !== 1 || G !== 1)
                do
                  if (W--, G--, G < 0 || j[W] !== H[G]) {
                    var re = `
` + j[W].replace(" at new ", " at ");
                    return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && S.set(e, re), re;
                  }
                while (W >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        k = !1, b.current = M, P(), Error.prepareStackTrace = I;
      }
      var ye = e ? e.displayName || e.name : "", se = ye ? O(ye) : "";
      return typeof e == "function" && S.set(e, se), se;
    }
    function ee(e, t, i) {
      return o(e, !1);
    }
    function pe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ie(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return o(e, pe(e));
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
          case m:
            return ee(e.render);
          case E:
            return ie(e.type, t, i);
          case N: {
            var _ = e, I = _._payload, M = _._init;
            try {
              return ie(M(I), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Xe = {}, Ze = B.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var t = e._owner, i = ie(e.type, e._source, t ? t.type : null);
        Ze.setExtraStackFrame(i);
      } else
        Ze.setExtraStackFrame(null);
    }
    function wr(e, t, i, _, I) {
      {
        var M = Function.call.bind(ge);
        for (var A in e)
          if (M(e, A)) {
            var j = void 0;
            try {
              if (typeof e[A] != "function") {
                var H = Error((_ || "React class") + ": " + i + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw H.name = "Invariant Violation", H;
              }
              j = e[A](t, A, _, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              j = W;
            }
            j && !(j instanceof Error) && (Re(I), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", i, A, typeof j), Re(null)), j instanceof Error && !(j.message in Xe) && (Xe[j.message] = !0, Re(I), F("Failed %s type: %s", i, j.message), Re(null));
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
        return Qe(e), !1;
      } catch {
        return !0;
      }
    }
    function Qe(e) {
      return "" + e;
    }
    function er(e) {
      if (kr(e))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(e)), Qe(e);
    }
    var be = B.ReactCurrentOwner, Ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, Pe;
    Pe = {};
    function $r(e) {
      if (ge.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Dr(e) {
      if (ge.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Nr(e, t) {
      if (typeof e.ref == "string" && be.current && t && be.current.stateNode !== t) {
        var i = K(be.current.type);
        Pe[i] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(be.current.type), e.ref), Pe[i] = !0);
      }
    }
    function Mr(e, t) {
      {
        var i = function() {
          rr || (rr = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function qr(e, t) {
      {
        var i = function() {
          tr || (tr = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Lr = function(e, t, i, _, I, M, A) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: t,
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
        value: _
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Fr(e, t, i, _, I) {
      {
        var M, A = {}, j = null, H = null;
        i !== void 0 && (er(i), j = "" + i), Dr(t) && (er(t.key), j = "" + t.key), $r(t) && (H = t.ref, Nr(t, I));
        for (M in t)
          ge.call(t, M) && !Ir.hasOwnProperty(M) && (A[M] = t[M]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for (M in W)
            A[M] === void 0 && (A[M] = W[M]);
        }
        if (j || H) {
          var G = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          j && Mr(A, G), H && qr(A, G);
        }
        return Lr(e, j, H, I, _, be.current, A);
      }
    }
    var Ae = B.ReactCurrentOwner, nr = B.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var t = e._owner, i = ie(e.type, e._source, t ? t.type : null);
        nr.setExtraStackFrame(i);
      } else
        nr.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function Ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function ar() {
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
    function Wr(e) {
      return "";
    }
    var or = {};
    function Yr(e) {
      {
        var t = ar();
        if (!t) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (t = `

Check the top-level render call using <` + i + ">.");
        }
        return t;
      }
    }
    function ir(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Yr(t);
        if (or[i])
          return;
        or[i] = !0;
        var _ = "";
        e && e._owner && e._owner !== Ae.current && (_ = " It was passed a child from " + K(e._owner.type) + "."), ve(e), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, _), ve(null);
      }
    }
    function sr(e, t) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var i = 0; i < e.length; i++) {
            var _ = e[i];
            Ie(_) && ir(_, t);
          }
        else if (Ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = V(e);
          if (typeof I == "function" && I !== e.entries)
            for (var M = I.call(e), A; !(A = M.next()).done; )
              Ie(A.value) && ir(A.value, t);
        }
      }
    }
    function Gr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var i;
        if (typeof t == "function")
          i = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === E))
          i = t.propTypes;
        else
          return;
        if (i) {
          var _ = K(t);
          wr(i, e.props, "prop", _, e);
        } else if (t.PropTypes !== void 0 && !ke) {
          ke = !0;
          var I = K(t);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Br(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var _ = t[i];
          if (_ !== "children" && _ !== "key") {
            ve(e), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), ve(null);
            break;
          }
        }
        e.ref !== null && (ve(e), F("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var cr = {};
    function lr(e, t, i, _, I, M) {
      {
        var A = me(e);
        if (!A) {
          var j = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var H = Wr();
          H ? j += H : j += ar();
          var W;
          e === null ? W = "null" : we(e) ? W = "array" : e !== void 0 && e.$$typeof === d ? (W = "<" + (K(e.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, j);
        }
        var G = Fr(e, t, i, I, M);
        if (G == null)
          return G;
        if (A) {
          var re = t.children;
          if (re !== void 0)
            if (_)
              if (we(re)) {
                for (var ye = 0; ye < re.length; ye++)
                  sr(re[ye], e);
                Object.freeze && Object.freeze(re);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sr(re, e);
        }
        if (ge.call(t, "key")) {
          var se = K(e), Z = Object.keys(t).filter(function(Kr) {
            return Kr !== "key";
          }), $e = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!cr[se + $e]) {
            var Hr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $e, se, Hr, se), cr[se + $e] = !0;
          }
        }
        return e === u ? Br(G) : Gr(G), G;
      }
    }
    function Ur(e, t, i) {
      return lr(e, t, i, !0);
    }
    function Vr(e, t, i) {
      return lr(e, t, i, !1);
    }
    var zr = Vr, Jr = Ur;
    Te.Fragment = u, Te.jsx = zr, Te.jsxs = Jr;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Ue.exports = mt() : Ue.exports = gt();
var a = Ue.exports, Ve = { exports: {} }, Ce = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function bt() {
  if (dr) return $;
  dr = 1;
  var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, x = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, m = r ? Symbol.for("react.async_mode") : 60111, w = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, E = r ? Symbol.for("react.suspense") : 60113, N = r ? Symbol.for("react.suspense_list") : 60120, L = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, q = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, F = r ? Symbol.for("react.scope") : 60119;
  function U(c) {
    if (typeof c == "object" && c !== null) {
      var ne = c.$$typeof;
      switch (ne) {
        case d:
          switch (c = c.type, c) {
            case m:
            case w:
            case u:
            case p:
            case v:
            case E:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case y:
                case h:
                case z:
                case L:
                case x:
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
    return U(c) === w;
  }
  return $.AsyncMode = m, $.ConcurrentMode = w, $.ContextConsumer = y, $.ContextProvider = x, $.Element = d, $.ForwardRef = h, $.Fragment = u, $.Lazy = z, $.Memo = L, $.Portal = f, $.Profiler = p, $.StrictMode = v, $.Suspense = E, $.isAsyncMode = function(c) {
    return Y(c) || U(c) === m;
  }, $.isConcurrentMode = Y, $.isContextConsumer = function(c) {
    return U(c) === y;
  }, $.isContextProvider = function(c) {
    return U(c) === x;
  }, $.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === d;
  }, $.isForwardRef = function(c) {
    return U(c) === h;
  }, $.isFragment = function(c) {
    return U(c) === u;
  }, $.isLazy = function(c) {
    return U(c) === z;
  }, $.isMemo = function(c) {
    return U(c) === L;
  }, $.isPortal = function(c) {
    return U(c) === f;
  }, $.isProfiler = function(c) {
    return U(c) === p;
  }, $.isStrictMode = function(c) {
    return U(c) === v;
  }, $.isSuspense = function(c) {
    return U(c) === E;
  }, $.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === u || c === w || c === p || c === v || c === E || c === N || typeof c == "object" && c !== null && (c.$$typeof === z || c.$$typeof === L || c.$$typeof === x || c.$$typeof === y || c.$$typeof === h || c.$$typeof === V || c.$$typeof === B || c.$$typeof === F || c.$$typeof === q);
  }, $.typeOf = U, $;
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
var pr;
function Et() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, x = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, m = r ? Symbol.for("react.async_mode") : 60111, w = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, E = r ? Symbol.for("react.suspense") : 60113, N = r ? Symbol.for("react.suspense_list") : 60120, L = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, q = r ? Symbol.for("react.block") : 60121, V = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, F = r ? Symbol.for("react.scope") : 60119;
    function U(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === u || o === w || o === p || o === v || o === E || o === N || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === L || o.$$typeof === x || o.$$typeof === y || o.$$typeof === h || o.$$typeof === V || o.$$typeof === B || o.$$typeof === F || o.$$typeof === q);
    }
    function Y(o) {
      if (typeof o == "object" && o !== null) {
        var ee = o.$$typeof;
        switch (ee) {
          case d:
            var pe = o.type;
            switch (pe) {
              case m:
              case w:
              case u:
              case p:
              case v:
              case E:
                return pe;
              default:
                var ie = pe && pe.$$typeof;
                switch (ie) {
                  case y:
                  case h:
                  case z:
                  case L:
                  case x:
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
    var c = m, ne = w, he = y, _e = x, le = d, me = h, ue = u, fe = z, K = L, X = f, ae = p, Q = v, te = E, oe = !1;
    function de(o) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(o) || Y(o) === m;
    }
    function n(o) {
      return Y(o) === w;
    }
    function l(o) {
      return Y(o) === y;
    }
    function C(o) {
      return Y(o) === x;
    }
    function R(o) {
      return typeof o == "object" && o !== null && o.$$typeof === d;
    }
    function g(o) {
      return Y(o) === h;
    }
    function P(o) {
      return Y(o) === u;
    }
    function b(o) {
      return Y(o) === z;
    }
    function T(o) {
      return Y(o) === L;
    }
    function O(o) {
      return Y(o) === f;
    }
    function k(o) {
      return Y(o) === p;
    }
    function S(o) {
      return Y(o) === v;
    }
    function J(o) {
      return Y(o) === E;
    }
    D.AsyncMode = c, D.ConcurrentMode = ne, D.ContextConsumer = he, D.ContextProvider = _e, D.Element = le, D.ForwardRef = me, D.Fragment = ue, D.Lazy = fe, D.Memo = K, D.Portal = X, D.Profiler = ae, D.StrictMode = Q, D.Suspense = te, D.isAsyncMode = de, D.isConcurrentMode = n, D.isContextConsumer = l, D.isContextProvider = C, D.isElement = R, D.isForwardRef = g, D.isFragment = P, D.isLazy = b, D.isMemo = T, D.isPortal = O, D.isProfiler = k, D.isStrictMode = S, D.isSuspense = J, D.isValidElementType = U, D.typeOf = Y;
  }()), D;
}
var vr;
function Or() {
  return vr || (vr = 1, process.env.NODE_ENV === "production" ? Ce.exports = bt() : Ce.exports = Et()), Ce.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ne, yr;
function Tt() {
  if (yr) return Ne;
  yr = 1;
  var r = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function u(p) {
    if (p == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(p);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var p = new String("abc");
      if (p[5] = "de", Object.getOwnPropertyNames(p)[0] === "5")
        return !1;
      for (var x = {}, y = 0; y < 10; y++)
        x["_" + String.fromCharCode(y)] = y;
      var m = Object.getOwnPropertyNames(x).map(function(h) {
        return x[h];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        w[h] = h;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ne = v() ? Object.assign : function(p, x) {
    for (var y, m = u(p), w, h = 1; h < arguments.length; h++) {
      y = Object(arguments[h]);
      for (var E in y)
        d.call(y, E) && (m[E] = y[E]);
      if (r) {
        w = r(y);
        for (var N = 0; N < w.length; N++)
          f.call(y, w[N]) && (m[w[N]] = y[w[N]]);
      }
    }
    return m;
  }, Ne;
}
var Me, hr;
function ze() {
  if (hr) return Me;
  hr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Me = r, Me;
}
var qe, _r;
function Sr() {
  return _r || (_r = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var Le, mr;
function xt() {
  if (mr) return Le;
  mr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var d = ze(), f = {}, u = Sr();
    r = function(p) {
      var x = "Warning: " + p;
      typeof console < "u" && console.error(x);
      try {
        throw new Error(x);
      } catch {
      }
    };
  }
  function v(p, x, y, m, w) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in p)
        if (u(p, h)) {
          var E;
          try {
            if (typeof p[h] != "function") {
              var N = Error(
                (m || "React class") + ": " + y + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw N.name = "Invariant Violation", N;
            }
            E = p[h](x, h, m, y, null, d);
          } catch (z) {
            E = z;
          }
          if (E && !(E instanceof Error) && r(
            (m || "React class") + ": type specification of " + y + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in f)) {
            f[E.message] = !0;
            var L = w ? w() : "";
            r(
              "Failed " + y + " type: " + E.message + (L ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, Le = v, Le;
}
var Fe, gr;
function Rt() {
  if (gr) return Fe;
  gr = 1;
  var r = Or(), d = Tt(), f = ze(), u = Sr(), v = xt(), p = function() {
  };
  process.env.NODE_ENV !== "production" && (p = function(y) {
    var m = "Warning: " + y;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function x() {
    return null;
  }
  return Fe = function(y, m) {
    var w = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function E(n) {
      var l = n && (w && n[w] || n[h]);
      if (typeof l == "function")
        return l;
    }
    var N = "<<anonymous>>", L = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: F(),
      arrayOf: U,
      element: Y(),
      elementType: c(),
      instanceOf: ne,
      node: me(),
      objectOf: _e,
      oneOf: he,
      oneOfType: le,
      shape: fe,
      exact: K
    };
    function z(n, l) {
      return n === l ? n !== 0 || 1 / n === 1 / l : n !== n && l !== l;
    }
    function q(n, l) {
      this.message = n, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    q.prototype = Error.prototype;
    function V(n) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, C = 0;
      function R(P, b, T, O, k, S, J) {
        if (O = O || N, S = S || T, J !== f) {
          if (m) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + T;
            !l[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ee] = !0, C++);
          }
        }
        return b[T] == null ? P ? b[T] === null ? new q("The " + k + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new q("The " + k + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : n(b, T, O, k, S);
      }
      var g = R.bind(null, !1);
      return g.isRequired = R.bind(null, !0), g;
    }
    function B(n) {
      function l(C, R, g, P, b, T) {
        var O = C[R], k = Q(O);
        if (k !== n) {
          var S = te(O);
          return new q(
            "Invalid " + P + " `" + b + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("`" + n + "`."),
            { expectedType: n }
          );
        }
        return null;
      }
      return V(l);
    }
    function F() {
      return V(x);
    }
    function U(n) {
      function l(C, R, g, P, b) {
        if (typeof n != "function")
          return new q("Property `" + b + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var T = C[R];
        if (!Array.isArray(T)) {
          var O = Q(T);
          return new q("Invalid " + P + " `" + b + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an array."));
        }
        for (var k = 0; k < T.length; k++) {
          var S = n(T, k, g, P, b + "[" + k + "]", f);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return V(l);
    }
    function Y() {
      function n(l, C, R, g, P) {
        var b = l[C];
        if (!y(b)) {
          var T = Q(b);
          return new q("Invalid " + g + " `" + P + "` of type " + ("`" + T + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(n);
    }
    function c() {
      function n(l, C, R, g, P) {
        var b = l[C];
        if (!r.isValidElementType(b)) {
          var T = Q(b);
          return new q("Invalid " + g + " `" + P + "` of type " + ("`" + T + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(n);
    }
    function ne(n) {
      function l(C, R, g, P, b) {
        if (!(C[R] instanceof n)) {
          var T = n.name || N, O = de(C[R]);
          return new q("Invalid " + P + " `" + b + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return V(l);
    }
    function he(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), x;
      function l(C, R, g, P, b) {
        for (var T = C[R], O = 0; O < n.length; O++)
          if (z(T, n[O]))
            return null;
        var k = JSON.stringify(n, function(J, o) {
          var ee = te(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new q("Invalid " + P + " `" + b + "` of value `" + String(T) + "` " + ("supplied to `" + g + "`, expected one of " + k + "."));
      }
      return V(l);
    }
    function _e(n) {
      function l(C, R, g, P, b) {
        if (typeof n != "function")
          return new q("Property `" + b + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var T = C[R], O = Q(T);
        if (O !== "object")
          return new q("Invalid " + P + " `" + b + "` of type " + ("`" + O + "` supplied to `" + g + "`, expected an object."));
        for (var k in T)
          if (u(T, k)) {
            var S = n(T, k, g, P, b + "." + k, f);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return V(l);
    }
    function le(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), x;
      for (var l = 0; l < n.length; l++) {
        var C = n[l];
        if (typeof C != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(C) + " at index " + l + "."
          ), x;
      }
      function R(g, P, b, T, O) {
        for (var k = [], S = 0; S < n.length; S++) {
          var J = n[S], o = J(g, P, b, T, O, f);
          if (o == null)
            return null;
          o.data && u(o.data, "expectedType") && k.push(o.data.expectedType);
        }
        var ee = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new q("Invalid " + T + " `" + O + "` supplied to " + ("`" + b + "`" + ee + "."));
      }
      return V(R);
    }
    function me() {
      function n(l, C, R, g, P) {
        return X(l[C]) ? null : new q("Invalid " + g + " `" + P + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return V(n);
    }
    function ue(n, l, C, R, g) {
      return new q(
        (n || "React class") + ": " + l + " type `" + C + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function fe(n) {
      function l(C, R, g, P, b) {
        var T = C[R], O = Q(T);
        if (O !== "object")
          return new q("Invalid " + P + " `" + b + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var k in n) {
          var S = n[k];
          if (typeof S != "function")
            return ue(g, P, b, k, te(S));
          var J = S(T, k, g, P, b + "." + k, f);
          if (J)
            return J;
        }
        return null;
      }
      return V(l);
    }
    function K(n) {
      function l(C, R, g, P, b) {
        var T = C[R], O = Q(T);
        if (O !== "object")
          return new q("Invalid " + P + " `" + b + "` of type `" + O + "` " + ("supplied to `" + g + "`, expected `object`."));
        var k = d({}, C[R], n);
        for (var S in k) {
          var J = n[S];
          if (u(n, S) && typeof J != "function")
            return ue(g, P, b, S, te(J));
          if (!J)
            return new q(
              "Invalid " + P + " `" + b + "` key `" + S + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(C[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var o = J(T, S, g, P, b + "." + S, f);
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
          var l = E(n);
          if (l) {
            var C = l.call(n), R;
            if (l !== n.entries) {
              for (; !(R = C.next()).done; )
                if (!X(R.value))
                  return !1;
            } else
              for (; !(R = C.next()).done; ) {
                var g = R.value;
                if (g && !X(g[1]))
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
    function de(n) {
      return !n.constructor || !n.constructor.name ? N : n.constructor.name;
    }
    return L.checkPropTypes = v, L.resetWarningCache = v.resetWarningCache, L.PropTypes = L, L;
  }, Fe;
}
var We, br;
function Ct() {
  if (br) return We;
  br = 1;
  var r = ze();
  function d() {
  }
  function f() {
  }
  return f.resetWarningCache = d, We = function() {
    function u(x, y, m, w, h, E) {
      if (E !== r) {
        var N = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw N.name = "Invariant Violation", N;
      }
    }
    u.isRequired = u;
    function v() {
      return u;
    }
    var p = {
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
      resetWarningCache: d
    };
    return p.PropTypes = p, p;
  }, We;
}
if (process.env.NODE_ENV !== "production") {
  var Ot = Or(), St = !0;
  Ve.exports = Rt()(Ot.isElement, St);
} else
  Ve.exports = Ct()();
var jt = Ve.exports;
const s = /* @__PURE__ */ _t(jt), wt = "_iconButton_1963e_1", Pt = {
  iconButton: wt
}, At = {
  trash: Xr,
  filter: Zr,
  info: Qr,
  fill: et,
  ellipsis: rt,
  chevronRight: Cr,
  chevronLeft: tt
}, je = ({ onClick: r, iconName: d }) => /* @__PURE__ */ a.jsx("div", { className: Pt.iconButton, children: /* @__PURE__ */ a.jsx("button", { "aria-label": d, type: "button", onClick: r, children: /* @__PURE__ */ a.jsx(Rr, { icon: At[d] }) }) });
je.propTypes = {
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
je.defaultProps = {
  iconName: "ellipsis"
};
const kt = "_layerButtonReel_1o59k_1", It = {
  layerButtonReel: kt
}, Je = ({ buttons: r }) => /* @__PURE__ */ a.jsx("div", { className: It.layerButtonReel, children: r && Object.keys(r).map((d) => /* @__PURE__ */ a.jsx(je, { iconName: d, onClick: r[d] })) });
Je.propTypes = {
  buttons: s.objectOf(s.func)
};
Je.defaultProps = {
  buttons: null
};
const $t = "_layerToggle_1rxix_7", Dt = "_slider_1rxix_32", Ye = {
  layerToggle: $t,
  switch: "_switch_1rxix_15",
  slider: Dt
}, He = ({ layerName: r, isActive: d, onChange: f }) => /* @__PURE__ */ a.jsxs("div", { className: Ye.layerToggle, children: [
  /* @__PURE__ */ a.jsx("p", { children: r }),
  /* @__PURE__ */ a.jsxs("div", { className: Ye.switch, children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "checkbox",
        value: r,
        checked: d,
        onChange: f
      }
    ),
    /* @__PURE__ */ a.jsx("span", { className: Ye.slider })
  ] })
] });
He.propTypes = {
  layerName: s.string,
  isActive: s.bool,
  onChange: s.func.isRequired
};
He.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const Nt = "_layerCard_x5vr4_1", Mt = "_layerCardWrapper_x5vr4_10", qt = "_layerCardChildren_x5vr4_17", Ge = {
  layerCard: Nt,
  layerCardWrapper: Mt,
  layerCardChildren: qt
}, Lt = ({ layerName: r, isActive: d, onChange: f, buttons: u, children: v }) => /* @__PURE__ */ a.jsxs("div", { className: Ge.layerCard, children: [
  /* @__PURE__ */ a.jsxs("div", { className: Ge.layerCardWrapper, children: [
    /* @__PURE__ */ a.jsx(
      He,
      {
        layerName: r,
        isActive: d,
        onChange: f
      }
    ),
    /* @__PURE__ */ a.jsx(Je, { buttons: u })
  ] }),
  d && /* @__PURE__ */ a.jsx("div", { className: Ge.layerCardChildren, children: v })
] });
Lt.propTypes = {
  layerName: s.string.isRequired,
  isActive: s.bool,
  onChange: s.func.isRequired,
  buttons: s.objectOf(s.func),
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ])
};
const Ft = "_swatchContainer_771fp_2", Wt = "_swatch_771fp_2", Yt = "_swatchLabel_771fp_18", Gt = "_swatchValue_771fp_24", Oe = {
  swatchContainer: Ft,
  swatch: Wt,
  swatchLabel: Yt,
  swatchValue: Gt
}, Bt = ({ color: r, label: d = "", value: f, units: u = "" }) => /* @__PURE__ */ a.jsxs("div", { className: Oe.swatchContainer, children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: Oe.swatch,
      style: { backgroundColor: r }
    }
  ),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-label", className: Oe.swatchLabel, children: d }),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-value", className: Oe.swatchValue, children: f !== void 0 && `${f}${u}` })
] }), Ut = "_swatchLegend_qiaru_1", Vt = {
  swatchLegend: Ut
}, zt = ({ swatches: r }) => /* @__PURE__ */ a.jsx("div", { className: Vt.swatchLegend, children: r && r.map((d) => {
  const { color: f, label: u, value: v, units: p } = d;
  return /* @__PURE__ */ a.jsx(
    Bt,
    {
      label: u,
      color: f,
      value: v,
      units: p
    },
    u
  );
}) });
zt.propTypes = {
  swatches: s.arrayOf(s.objectOf(s.string)).isRequired
};
const Jt = "_indicator_llo4p_1", Ht = "_toggle_llo4p_1", ce = {
  "react-aria-Button": "_react-aria-Button_llo4p_18",
  "react-aria-TextField": "_react-aria-TextField_llo4p_1",
  "react-aria-Input": "_react-aria-Input_llo4p_1",
  "react-aria-TextArea": "_react-aria-TextArea_llo4p_1",
  "react-aria-FieldError": "_react-aria-FieldError_llo4p_1",
  "react-aria-ModalOverlay": "_react-aria-ModalOverlay_llo4p_1",
  "modal-fade": "_modal-fade_llo4p_1",
  "react-aria-Modal": "_react-aria-Modal_llo4p_1",
  "modal-zoom": "_modal-zoom_llo4p_1",
  "react-aria-Dialog": "_react-aria-Dialog_llo4p_1",
  "react-aria-Heading": "_react-aria-Heading_llo4p_1",
  "react-aria-Switch": "_react-aria-Switch_llo4p_1",
  indicator: Jt,
  "react-aria-Popover": "_react-aria-Popover_llo4p_93",
  "popover-slide": "_popover-slide_llo4p_1",
  "react-aria-OverlayArrow": "_react-aria-OverlayArrow_llo4p_1",
  "react-aria-Form": "_react-aria-Form_llo4p_1",
  "react-aria-DateField": "_react-aria-DateField_llo4p_47",
  "react-aria-DateInput": "_react-aria-DateInput_llo4p_43",
  "react-aria-DateSegment": "_react-aria-DateSegment_llo4p_68",
  "react-aria-Calendar": "_react-aria-Calendar_llo4p_1",
  "react-aria-CalendarCell": "_react-aria-CalendarCell_llo4p_1",
  "react-aria-DatePicker": "_react-aria-DatePicker_llo4p_9",
  "react-aria-Group": "_react-aria-Group_llo4p_12",
  toggle: Ht,
  "mymodal-blur": "_mymodal-blur_llo4p_1",
  "mymodal-slide": "_mymodal-slide_llo4p_1"
}, En = ({
  label: r,
  description: d,
  errorMessage: f,
  ...u
}) => /* @__PURE__ */ a.jsxs(at, { ...u, className: ce["react-aria-DatePicker"], children: [
  /* @__PURE__ */ a.jsx(ot, { children: r }),
  /* @__PURE__ */ a.jsxs(it, { className: ce["react-aria-Group"], children: [
    /* @__PURE__ */ a.jsx(st, { className: ce["react-aria-DateInput"], children: (v) => /* @__PURE__ */ a.jsx(ct, { segment: v }) }),
    /* @__PURE__ */ a.jsx(De, { className: ce["react-aria-Button"], children: "▼" })
  ] }),
  d && /* @__PURE__ */ a.jsx(lt, { slot: "description", children: d }),
  /* @__PURE__ */ a.jsx(ut, { children: f }),
  /* @__PURE__ */ a.jsx(ft, { className: ce["react-aria-Popover"], children: /* @__PURE__ */ a.jsx(dt, { children: /* @__PURE__ */ a.jsxs(pt, { children: [
    /* @__PURE__ */ a.jsxs("header", { children: [
      /* @__PURE__ */ a.jsx(
        De,
        {
          slot: "previous",
          className: ce["react-aria-Button"],
          children: "◀"
        }
      ),
      /* @__PURE__ */ a.jsx(vt, {}),
      /* @__PURE__ */ a.jsx(
        De,
        {
          slot: "next",
          className: ce["react-aria-Button"],
          children: "▶"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(yt, { children: (v) => /* @__PURE__ */ a.jsx(ht, { date: v }) })
  ] }) }) })
] }), Kt = "_gradient_1w8qh_1", Xt = "_gradientNumbers_1w8qh_6", Zt = "_gradientLegend_1w8qh_11", Se = {
  gradient: Kt,
  gradientNumbers: Xt,
  gradientLegend: Zt
}, Qt = ({
  title: r = "Gradient Legend",
  startColor: d = "red",
  endColor: f = "yellow",
  startNo: u = 0,
  endNo: v = 100,
  titleBelow: p = !1,
  bins: x = 0,
  precision: y = 2
}) => {
  const m = x > 0 ? Array(x - 1).fill(0).map((w, h) => {
    const E = (u + (v - u) / x * (h + 1)).toPrecision(y);
    return /* @__PURE__ */ a.jsx("span", { children: E }, E);
  }) : [];
  return /* @__PURE__ */ a.jsxs("div", { className: "gradient-box", children: [
    !p && /* @__PURE__ */ a.jsxs("div", { className: "ui-title", children: [
      " ",
      r
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: Se.gradientLegend, children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Se.gradient,
          style: {
            background: `linear-gradient(to right, ${d} , ${f})`
          }
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: Se.gradientNumbers, children: [
        /* @__PURE__ */ a.jsx("span", { children: u }),
        m,
        /* @__PURE__ */ a.jsx("span", { children: v })
      ] }),
      p && /* @__PURE__ */ a.jsxs("div", { className: Se.uiTitle, children: [
        " ",
        r
      ] })
    ] })
  ] });
};
Qt.propTypes = {
  title: s.string,
  startColor: s.string,
  endColor: s.string,
  startNo: s.number,
  endNo: s.number,
  titleBelow: s.bool,
  bins: s.number,
  precision: s.number
};
const en = "_simpleSlider_qj292_1", rn = "_simpleSliderInput_qj292_7", tn = "_simpleSliderMinMaxContainer_qj292_11", Be = {
  simpleSlider: en,
  simpleSliderInput: rn,
  simpleSliderMinMaxContainer: tn
}, Ke = ({
  units: r,
  label: d,
  onChange: f,
  min: u,
  max: v,
  step: p,
  value: x
}) => /* @__PURE__ */ a.jsxs("div", { className: Be.simpleSlider, children: [
  /* @__PURE__ */ a.jsxs("div", { children: [
    d && /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: d }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        onChange: f,
        className: Be.simpleSliderInput,
        type: "range",
        value: x,
        min: u,
        max: v,
        step: p
      }
    )
  ] }),
  /* @__PURE__ */ a.jsxs("div", { className: Be.simpleSliderMinMaxContainer, children: [
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
Ke.propTypes = {
  onChange: s.func.isRequired,
  min: s.number.isRequired,
  max: s.number.isRequired,
  step: s.number.isRequired,
  value: s.number,
  label: s.string,
  units: s.string
};
Ke.defaultProps = {
  value: 0,
  units: "",
  label: ""
};
const nn = "_layerGroupWrapper_rqofl_1", an = "_layerGroupChevron_rqofl_15", on = "_layerGroupWapper_rqofl_19", sn = "_layerGroupName_rqofl_28", cn = "_layerGroupChildren_rqofl_36", xe = {
  layerGroupWrapper: nn,
  layerGroupChevron: an,
  layerGroupWapper: on,
  "layer-group-wrapper": "_layer-group-wrapper_rqofl_23",
  layerGroupName: sn,
  "layer-group": "_layer-group_rqofl_23",
  layerGroupChildren: cn
}, ln = ({ groupName: r, children: d }) => {
  const [f, u] = xr(!1), v = () => {
    u(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: xe.layerGroup, children: [
    /* @__PURE__ */ a.jsxs("button", { type: "button", className: xe.layerGroupWrapper, onClick: v, children: [
      /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChevron, children: /* @__PURE__ */ a.jsx(Rr, { size: "md", fixedWidth: !0, icon: f ? nt : Cr }) }),
      /* @__PURE__ */ a.jsx("span", { className: xe.layerGroupName, children: r })
    ] }),
    f && /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChildren, children: d })
  ] });
};
ln.propTypes = {
  groupName: s.string,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const jr = ({ mapContainer: r, id: d, children: f }) => /* @__PURE__ */ a.jsx("div", { className: "map-container", id: d, ref: r, children: f });
jr.propTypes = {
  mapContainer: s.oneOfType([
    s.func,
    s.shape({ current: s.instanceOf(Element) })
  ]),
  children: s.node,
  id: s.string
};
jr.defaultProps = {
  children: null,
  mapContainer: null,
  id: null
};
const un = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "nav-container", children: r });
un.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const fn = ({ showToggle: r, children: d }) => {
  const [f, u] = xr(!1), v = `sidebar ${f ? "closed" : ""}`, p = () => {
    u(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ a.jsx("div", { className: v, children: d }),
    r && /* @__PURE__ */ a.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ a.jsx(
      je,
      {
        onClick: p,
        iconName: f ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
fn.propTypes = {
  showToggle: s.bool,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const dn = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "layout-stacked", children: r });
dn.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const pn = ({ align: r = "left", children: d }) => /* @__PURE__ */ a.jsx("div", { className: `layout-standard ${r}`, children: d });
pn.propTypes = {
  align: s.oneOf(["left", "right"]),
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const vn = "_sliderControlWrapper_2tznx_1", yn = "_sliderLabel_2tznx_9", Er = {
  sliderControlWrapper: vn,
  sliderLabel: yn
}, hn = ({ title: r, units: d, sliderConfig: f }) => /* @__PURE__ */ a.jsxs("div", { className: Er.sliderControlWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ a.jsx("div", {}),
  f && f.map((u) => {
    const { label: v } = u;
    return /* @__PURE__ */ a.jsx("div", { className: Er.sliderLabel, children: v });
  }),
  f && f.map((u) => {
    const { onChange: v, min: p, max: x, step: y, value: m } = u;
    return /* @__PURE__ */ a.jsx(
      Ke,
      {
        onChange: v,
        units: d,
        min: p,
        max: x,
        step: y,
        value: m
      }
    );
  })
] });
hn.propTypes = {
  title: s.string.isRequired,
  units: s.string.isRequired,
  sliderConfig: s.arrayOf(s.objectOf(s.string)).isRequired
};
export {
  En as DatePicker,
  Qt as GradientLegend,
  je as IconButton,
  Je as LayerButtonReel,
  Lt as LayerCard,
  ln as LayerGroup,
  He as LayerToggle,
  jr as MapContainer,
  un as NavContainer,
  fn as SidebarContainer,
  Ke as SimpleSlider,
  hn as SliderControl,
  dn as Stacked,
  pn as Standard,
  Bt as Swatch,
  zt as SwatchLegend
};
