import jr, { useState as Je } from "react";
import { FontAwesomeIcon as Pe } from "@fortawesome/react-fontawesome";
import { faTrash as Qr, faFilter as en, faInfo as rn, faFillDrip as nn, faEllipsisVertical as tn, faChevronRight as Or, faChevronLeft as an, faArrowsLeftRight as on, faCalendar as sn, faChevronDown as cn } from "@fortawesome/free-solid-svg-icons";
import { Slider as ln, Label as Sr, SliderTrack as un, SliderThumb as fn, DatePicker as dn, Group as pn, DateInput as vn, DateSegment as yn, Button as Le, Text as hn, FieldError as mn, Popover as _n, Dialog as bn, Calendar as gn, Heading as Tn, CalendarGrid as Cn, CalendarCell as En } from "react-aria-components";
import { useHover as xn } from "react-aria";
import './index.css';function Rn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ze = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function jn() {
  if (pr) return Te;
  pr = 1;
  var r = jr, d = Symbol.for("react.element"), f = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(y, m, j) {
    var h, T = {}, P = null, W = null;
    j !== void 0 && (P = "" + j), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (W = m.ref);
    for (h in m) l.call(m, h) && !p.hasOwnProperty(h) && (T[h] = m[h]);
    if (y && y.defaultProps) for (h in m = y.defaultProps, m) T[h] === void 0 && (T[h] = m[h]);
    return { $$typeof: d, type: y, key: P, ref: W, props: T, _owner: v.current };
  }
  return Te.Fragment = f, Te.jsx = g, Te.jsxs = g, Te;
}
var Ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function On() {
  return vr || (vr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = jr, d = Symbol.for("react.element"), f = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), y = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function U(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = z && e[z] || e[M];
      return typeof n == "function" ? n : null;
    }
    var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), _ = 1; _ < n; _++)
          i[_ - 1] = arguments[_];
        V("error", e, i);
      }
    }
    function V(e, n, i) {
      {
        var _ = G.ReactDebugCurrentFrame, I = _.getStackAddendum();
        I !== "" && (n += "%s", i = i.concat([I]));
        var L = i.map(function(k) {
          return String(k);
        });
        L.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, L);
      }
    }
    var Y = !1, c = !1, te = !1, he = !1, me = !1, ce;
    ce = Symbol.for("react.module.reference");
    function _e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === p || me || e === v || e === j || e === h || he || e === W || Y || c || te || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === T || e.$$typeof === g || e.$$typeof === y || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function le(e, n, i) {
      var _ = e.displayName;
      if (_)
        return _;
      var I = n.displayName || n.name || "";
      return I !== "" ? i + "(" + I + ")" : i;
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
        case l:
          return "Fragment";
        case f:
          return "Portal";
        case p:
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
            var n = e;
            return ue(n) + ".Consumer";
          case g:
            var i = e;
            return ue(i._context) + ".Provider";
          case m:
            return le(e, e.render, "ForwardRef");
          case T:
            var _ = e.displayName || null;
            return _ !== null ? _ : K(e.type) || "Memo";
          case P: {
            var I = e, L = I._payload, k = I._init;
            try {
              return K(k(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, Q, ne, oe, fe, t, u, R;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function b() {
      {
        if (ae === 0) {
          Q = console.log, ne = console.info, oe = console.warn, fe = console.error, t = console.group, u = console.groupCollapsed, R = console.groupEnd;
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
    function A() {
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
              value: ne
            }),
            warn: X({}, e, {
              value: oe
            }),
            error: X({}, e, {
              value: fe
            }),
            group: X({}, e, {
              value: t
            }),
            groupCollapsed: X({}, e, {
              value: u
            }),
            groupEnd: X({}, e, {
              value: R
            })
          });
        }
        ae < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = G.ReactCurrentDispatcher, E;
    function O(e, n, i) {
      {
        if (E === void 0)
          try {
            throw Error();
          } catch (I) {
            var _ = I.stack.trim().match(/\n( *(at )?)/);
            E = _ && _[1] || "";
          }
        return `
` + E + e;
      }
    }
    var $ = !1, S;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      S = new H();
    }
    function o(e, n) {
      if (!e || $)
        return "";
      {
        var i = S.get(e);
        if (i !== void 0)
          return i;
      }
      var _;
      $ = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = C.current, C.current = null, b();
      try {
        if (n) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (Z) {
              _ = Z;
            }
            Reflect.construct(e, [], k);
          } else {
            try {
              k.call();
            } catch (Z) {
              _ = Z;
            }
            e.call(k.prototype);
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
          for (var w = Z.stack.split(`
`), J = _.stack.split(`
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
        $ = !1, C.current = L, A(), Error.prepareStackTrace = I;
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
        case j:
          return O("Suspense");
        case h:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return ee(e.render);
          case T:
            return ie(e.type, n, i);
          case P: {
            var _ = e, I = _._payload, L = _._init;
            try {
              return ie(L(I), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, er = {}, rr = G.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var n = e._owner, i = ie(e.type, e._source, n ? n.type : null);
        rr.setExtraStackFrame(i);
      } else
        rr.setExtraStackFrame(null);
    }
    function Ar(e, n, i, _, I) {
      {
        var L = Function.call.bind(be);
        for (var k in e)
          if (L(e, k)) {
            var w = void 0;
            try {
              if (typeof e[k] != "function") {
                var J = Error((_ || "React class") + ": " + i + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              w = e[k](n, k, _, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              w = F;
            }
            w && !(w instanceof Error) && (Re(I), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", i, k, typeof w), Re(null)), w instanceof Error && !(w.message in er) && (er[w.message] = !0, Re(I), q("Failed %s type: %s", i, w.message), Re(null));
          }
      }
    }
    var kr = Array.isArray;
    function Ae(e) {
      return kr(e);
    }
    function $r(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Ir(e) {
      try {
        return nr(e), !1;
      } catch {
        return !0;
      }
    }
    function nr(e) {
      return "" + e;
    }
    function tr(e) {
      if (Ir(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $r(e)), nr(e);
    }
    var ge = G.ReactCurrentOwner, Nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, or, ke;
    ke = {};
    function Dr(e) {
      if (be.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Lr(e) {
      if (be.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Mr(e, n) {
      if (typeof e.ref == "string" && ge.current && n && ge.current.stateNode !== n) {
        var i = K(ge.current.type);
        ke[i] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), e.ref), ke[i] = !0);
      }
    }
    function Wr(e, n) {
      {
        var i = function() {
          ar || (ar = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function qr(e, n) {
      {
        var i = function() {
          or || (or = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Fr = function(e, n, i, _, I, L, k) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: i,
        props: k,
        // Record the component responsible for creating this element.
        _owner: L
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
        value: _
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Yr(e, n, i, _, I) {
      {
        var L, k = {}, w = null, J = null;
        i !== void 0 && (tr(i), w = "" + i), Lr(n) && (tr(n.key), w = "" + n.key), Dr(n) && (J = n.ref, Mr(n, I));
        for (L in n)
          be.call(n, L) && !Nr.hasOwnProperty(L) && (k[L] = n[L]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (L in F)
            k[L] === void 0 && (k[L] = F[L]);
        }
        if (w || J) {
          var B = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && Wr(k, B), J && qr(k, B);
        }
        return Fr(e, w, J, I, _, ge.current, k);
      }
    }
    var $e = G.ReactCurrentOwner, ir = G.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var n = e._owner, i = ie(e.type, e._source, n ? n.type : null);
        ir.setExtraStackFrame(i);
      } else
        ir.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function sr() {
      {
        if ($e.current) {
          var e = K($e.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Br(e) {
      return "";
    }
    var cr = {};
    function Gr(e) {
      {
        var n = sr();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function lr(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Gr(n);
        if (cr[i])
          return;
        cr[i] = !0;
        var _ = "";
        e && e._owner && e._owner !== $e.current && (_ = " It was passed a child from " + K(e._owner.type) + "."), pe(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, _), pe(null);
      }
    }
    function ur(e, n) {
      {
        if (typeof e != "object")
          return;
        if (Ae(e))
          for (var i = 0; i < e.length; i++) {
            var _ = e[i];
            Ne(_) && lr(_, n);
          }
        else if (Ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = U(e);
          if (typeof I == "function" && I !== e.entries)
            for (var L = I.call(e), k; !(k = L.next()).done; )
              Ne(k.value) && lr(k.value, n);
        }
      }
    }
    function Vr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === T))
          i = n.propTypes;
        else
          return;
        if (i) {
          var _ = K(n);
          Ar(i, e.props, "prop", _, e);
        } else if (n.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var I = K(n);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(e) {
      {
        for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
          var _ = n[i];
          if (_ !== "children" && _ !== "key") {
            pe(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var fr = {};
    function dr(e, n, i, _, I, L) {
      {
        var k = _e(e);
        if (!k) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Br();
          J ? w += J : w += sr();
          var F;
          e === null ? F = "null" : Ae(e) ? F = "array" : e !== void 0 && e.$$typeof === d ? (F = "<" + (K(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, w);
        }
        var B = Yr(e, n, i, I, L);
        if (B == null)
          return B;
        if (k) {
          var re = n.children;
          if (re !== void 0)
            if (_)
              if (Ae(re)) {
                for (var ve = 0; ve < re.length; ve++)
                  ur(re[ve], e);
                Object.freeze && Object.freeze(re);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(re, e);
        }
        if (be.call(n, "key")) {
          var se = K(e), Z = Object.keys(n).filter(function(Zr) {
            return Zr !== "key";
          }), De = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fr[se + De]) {
            var Xr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, De, se, Xr, se), fr[se + De] = !0;
          }
        }
        return e === l ? Ur(B) : Vr(B), B;
      }
    }
    function zr(e, n, i) {
      return dr(e, n, i, !0);
    }
    function Hr(e, n, i) {
      return dr(e, n, i, !1);
    }
    var Jr = Hr, Kr = zr;
    Ce.Fragment = l, Ce.jsx = Jr, Ce.jsxs = Kr;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? ze.exports = jn() : ze.exports = On();
var a = ze.exports, He = { exports: {} }, je = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function Sn() {
  if (yr) return N;
  yr = 1;
  var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, l = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, m = r ? Symbol.for("react.async_mode") : 60111, j = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, P = r ? Symbol.for("react.suspense_list") : 60120, W = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, U = r ? Symbol.for("react.fundamental") : 60117, G = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
  function V(c) {
    if (typeof c == "object" && c !== null) {
      var te = c.$$typeof;
      switch (te) {
        case d:
          switch (c = c.type, c) {
            case m:
            case j:
            case l:
            case p:
            case v:
            case T:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case y:
                case h:
                case z:
                case W:
                case g:
                  return c;
                default:
                  return te;
              }
          }
        case f:
          return te;
      }
    }
  }
  function Y(c) {
    return V(c) === j;
  }
  return N.AsyncMode = m, N.ConcurrentMode = j, N.ContextConsumer = y, N.ContextProvider = g, N.Element = d, N.ForwardRef = h, N.Fragment = l, N.Lazy = z, N.Memo = W, N.Portal = f, N.Profiler = p, N.StrictMode = v, N.Suspense = T, N.isAsyncMode = function(c) {
    return Y(c) || V(c) === m;
  }, N.isConcurrentMode = Y, N.isContextConsumer = function(c) {
    return V(c) === y;
  }, N.isContextProvider = function(c) {
    return V(c) === g;
  }, N.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === d;
  }, N.isForwardRef = function(c) {
    return V(c) === h;
  }, N.isFragment = function(c) {
    return V(c) === l;
  }, N.isLazy = function(c) {
    return V(c) === z;
  }, N.isMemo = function(c) {
    return V(c) === W;
  }, N.isPortal = function(c) {
    return V(c) === f;
  }, N.isProfiler = function(c) {
    return V(c) === p;
  }, N.isStrictMode = function(c) {
    return V(c) === v;
  }, N.isSuspense = function(c) {
    return V(c) === T;
  }, N.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === l || c === j || c === p || c === v || c === T || c === P || typeof c == "object" && c !== null && (c.$$typeof === z || c.$$typeof === W || c.$$typeof === g || c.$$typeof === y || c.$$typeof === h || c.$$typeof === U || c.$$typeof === G || c.$$typeof === q || c.$$typeof === M);
  }, N.typeOf = V, N;
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
var hr;
function Pn() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, l = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, y = r ? Symbol.for("react.context") : 60110, m = r ? Symbol.for("react.async_mode") : 60111, j = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, P = r ? Symbol.for("react.suspense_list") : 60120, W = r ? Symbol.for("react.memo") : 60115, z = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, U = r ? Symbol.for("react.fundamental") : 60117, G = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
    function V(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === l || o === j || o === p || o === v || o === T || o === P || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === W || o.$$typeof === g || o.$$typeof === y || o.$$typeof === h || o.$$typeof === U || o.$$typeof === G || o.$$typeof === q || o.$$typeof === M);
    }
    function Y(o) {
      if (typeof o == "object" && o !== null) {
        var ee = o.$$typeof;
        switch (ee) {
          case d:
            var de = o.type;
            switch (de) {
              case m:
              case j:
              case l:
              case p:
              case v:
              case T:
                return de;
              default:
                var ie = de && de.$$typeof;
                switch (ie) {
                  case y:
                  case h:
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
    var c = m, te = j, he = y, me = g, ce = d, _e = h, le = l, ue = z, K = W, X = f, ae = p, Q = v, ne = T, oe = !1;
    function fe(o) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(o) || Y(o) === m;
    }
    function t(o) {
      return Y(o) === j;
    }
    function u(o) {
      return Y(o) === y;
    }
    function R(o) {
      return Y(o) === g;
    }
    function x(o) {
      return typeof o == "object" && o !== null && o.$$typeof === d;
    }
    function b(o) {
      return Y(o) === h;
    }
    function A(o) {
      return Y(o) === l;
    }
    function C(o) {
      return Y(o) === z;
    }
    function E(o) {
      return Y(o) === W;
    }
    function O(o) {
      return Y(o) === f;
    }
    function $(o) {
      return Y(o) === p;
    }
    function S(o) {
      return Y(o) === v;
    }
    function H(o) {
      return Y(o) === T;
    }
    D.AsyncMode = c, D.ConcurrentMode = te, D.ContextConsumer = he, D.ContextProvider = me, D.Element = ce, D.ForwardRef = _e, D.Fragment = le, D.Lazy = ue, D.Memo = K, D.Portal = X, D.Profiler = ae, D.StrictMode = Q, D.Suspense = ne, D.isAsyncMode = fe, D.isConcurrentMode = t, D.isContextConsumer = u, D.isContextProvider = R, D.isElement = x, D.isForwardRef = b, D.isFragment = A, D.isLazy = C, D.isMemo = E, D.isPortal = O, D.isProfiler = $, D.isStrictMode = S, D.isSuspense = H, D.isValidElementType = V, D.typeOf = Y;
  }()), D;
}
var mr;
function Pr() {
  return mr || (mr = 1, process.env.NODE_ENV === "production" ? je.exports = Sn() : je.exports = Pn()), je.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Me, _r;
function wn() {
  if (_r) return Me;
  _r = 1;
  var r = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function l(p) {
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
      for (var g = {}, y = 0; y < 10; y++)
        g["_" + String.fromCharCode(y)] = y;
      var m = Object.getOwnPropertyNames(g).map(function(h) {
        return g[h];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var j = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        j[h] = h;
      }), Object.keys(Object.assign({}, j)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Me = v() ? Object.assign : function(p, g) {
    for (var y, m = l(p), j, h = 1; h < arguments.length; h++) {
      y = Object(arguments[h]);
      for (var T in y)
        d.call(y, T) && (m[T] = y[T]);
      if (r) {
        j = r(y);
        for (var P = 0; P < j.length; P++)
          f.call(y, j[P]) && (m[j[P]] = y[j[P]]);
      }
    }
    return m;
  }, Me;
}
var We, br;
function Ke() {
  if (br) return We;
  br = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return We = r, We;
}
var qe, gr;
function wr() {
  return gr || (gr = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var Fe, Tr;
function An() {
  if (Tr) return Fe;
  Tr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var d = Ke(), f = {}, l = wr();
    r = function(p) {
      var g = "Warning: " + p;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function v(p, g, y, m, j) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in p)
        if (l(p, h)) {
          var T;
          try {
            if (typeof p[h] != "function") {
              var P = Error(
                (m || "React class") + ": " + y + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            T = p[h](g, h, m, y, null, d);
          } catch (z) {
            T = z;
          }
          if (T && !(T instanceof Error) && r(
            (m || "React class") + ": type specification of " + y + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in f)) {
            f[T.message] = !0;
            var W = j ? j() : "";
            r(
              "Failed " + y + " type: " + T.message + (W ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, Fe = v, Fe;
}
var Ye, Cr;
function kn() {
  if (Cr) return Ye;
  Cr = 1;
  var r = Pr(), d = wn(), f = Ke(), l = wr(), v = An(), p = function() {
  };
  process.env.NODE_ENV !== "production" && (p = function(y) {
    var m = "Warning: " + y;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function g() {
    return null;
  }
  return Ye = function(y, m) {
    var j = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function T(t) {
      var u = t && (j && t[j] || t[h]);
      if (typeof u == "function")
        return u;
    }
    var P = "<<anonymous>>", W = {
      array: G("array"),
      bigint: G("bigint"),
      bool: G("boolean"),
      func: G("function"),
      number: G("number"),
      object: G("object"),
      string: G("string"),
      symbol: G("symbol"),
      any: q(),
      arrayOf: V,
      element: Y(),
      elementType: c(),
      instanceOf: te,
      node: _e(),
      objectOf: me,
      oneOf: he,
      oneOfType: ce,
      shape: ue,
      exact: K
    };
    function z(t, u) {
      return t === u ? t !== 0 || 1 / t === 1 / u : t !== t && u !== u;
    }
    function M(t, u) {
      this.message = t, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function U(t) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, R = 0;
      function x(A, C, E, O, $, S, H) {
        if (O = O || P, S = S || E, H !== f) {
          if (m) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + E;
            !u[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[ee] = !0, R++);
          }
        }
        return C[E] == null ? A ? C[E] === null ? new M("The " + $ + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new M("The " + $ + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : t(C, E, O, $, S);
      }
      var b = x.bind(null, !1);
      return b.isRequired = x.bind(null, !0), b;
    }
    function G(t) {
      function u(R, x, b, A, C, E) {
        var O = R[x], $ = Q(O);
        if ($ !== t) {
          var S = ne(O);
          return new M(
            "Invalid " + A + " `" + C + "` of type " + ("`" + S + "` supplied to `" + b + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return U(u);
    }
    function q() {
      return U(g);
    }
    function V(t) {
      function u(R, x, b, A, C) {
        if (typeof t != "function")
          return new M("Property `" + C + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var E = R[x];
        if (!Array.isArray(E)) {
          var O = Q(E);
          return new M("Invalid " + A + " `" + C + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected an array."));
        }
        for (var $ = 0; $ < E.length; $++) {
          var S = t(E, $, b, A, C + "[" + $ + "]", f);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return U(u);
    }
    function Y() {
      function t(u, R, x, b, A) {
        var C = u[R];
        if (!y(C)) {
          var E = Q(C);
          return new M("Invalid " + b + " `" + A + "` of type " + ("`" + E + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return U(t);
    }
    function c() {
      function t(u, R, x, b, A) {
        var C = u[R];
        if (!r.isValidElementType(C)) {
          var E = Q(C);
          return new M("Invalid " + b + " `" + A + "` of type " + ("`" + E + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return U(t);
    }
    function te(t) {
      function u(R, x, b, A, C) {
        if (!(R[x] instanceof t)) {
          var E = t.name || P, O = fe(R[x]);
          return new M("Invalid " + A + " `" + C + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected ") + ("instance of `" + E + "`."));
        }
        return null;
      }
      return U(u);
    }
    function he(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), g;
      function u(R, x, b, A, C) {
        for (var E = R[x], O = 0; O < t.length; O++)
          if (z(E, t[O]))
            return null;
        var $ = JSON.stringify(t, function(H, o) {
          var ee = ne(o);
          return ee === "symbol" ? String(o) : o;
        });
        return new M("Invalid " + A + " `" + C + "` of value `" + String(E) + "` " + ("supplied to `" + b + "`, expected one of " + $ + "."));
      }
      return U(u);
    }
    function me(t) {
      function u(R, x, b, A, C) {
        if (typeof t != "function")
          return new M("Property `" + C + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var E = R[x], O = Q(E);
        if (O !== "object")
          return new M("Invalid " + A + " `" + C + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected an object."));
        for (var $ in E)
          if (l(E, $)) {
            var S = t(E, $, b, A, C + "." + $, f);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return U(u);
    }
    function ce(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var u = 0; u < t.length; u++) {
        var R = t[u];
        if (typeof R != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(R) + " at index " + u + "."
          ), g;
      }
      function x(b, A, C, E, O) {
        for (var $ = [], S = 0; S < t.length; S++) {
          var H = t[S], o = H(b, A, C, E, O, f);
          if (o == null)
            return null;
          o.data && l(o.data, "expectedType") && $.push(o.data.expectedType);
        }
        var ee = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new M("Invalid " + E + " `" + O + "` supplied to " + ("`" + C + "`" + ee + "."));
      }
      return U(x);
    }
    function _e() {
      function t(u, R, x, b, A) {
        return X(u[R]) ? null : new M("Invalid " + b + " `" + A + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return U(t);
    }
    function le(t, u, R, x, b) {
      return new M(
        (t || "React class") + ": " + u + " type `" + R + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function ue(t) {
      function u(R, x, b, A, C) {
        var E = R[x], O = Q(E);
        if (O !== "object")
          return new M("Invalid " + A + " `" + C + "` of type `" + O + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var $ in t) {
          var S = t[$];
          if (typeof S != "function")
            return le(b, A, C, $, ne(S));
          var H = S(E, $, b, A, C + "." + $, f);
          if (H)
            return H;
        }
        return null;
      }
      return U(u);
    }
    function K(t) {
      function u(R, x, b, A, C) {
        var E = R[x], O = Q(E);
        if (O !== "object")
          return new M("Invalid " + A + " `" + C + "` of type `" + O + "` " + ("supplied to `" + b + "`, expected `object`."));
        var $ = d({}, R[x], t);
        for (var S in $) {
          var H = t[S];
          if (l(t, S) && typeof H != "function")
            return le(b, A, C, S, ne(H));
          if (!H)
            return new M(
              "Invalid " + A + " `" + C + "` key `" + S + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(R[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var o = H(E, S, b, A, C + "." + S, f);
          if (o)
            return o;
        }
        return null;
      }
      return U(u);
    }
    function X(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(X);
          if (t === null || y(t))
            return !0;
          var u = T(t);
          if (u) {
            var R = u.call(t), x;
            if (u !== t.entries) {
              for (; !(x = R.next()).done; )
                if (!X(x.value))
                  return !1;
            } else
              for (; !(x = R.next()).done; ) {
                var b = x.value;
                if (b && !X(b[1]))
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
    function oe(t) {
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
    function fe(t) {
      return !t.constructor || !t.constructor.name ? P : t.constructor.name;
    }
    return W.checkPropTypes = v, W.resetWarningCache = v.resetWarningCache, W.PropTypes = W, W;
  }, Ye;
}
var Be, Er;
function $n() {
  if (Er) return Be;
  Er = 1;
  var r = Ke();
  function d() {
  }
  function f() {
  }
  return f.resetWarningCache = d, Be = function() {
    function l(g, y, m, j, h, T) {
      if (T !== r) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    l.isRequired = l;
    function v() {
      return l;
    }
    var p = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: v,
      element: l,
      elementType: l,
      instanceOf: v,
      node: l,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: f,
      resetWarningCache: d
    };
    return p.PropTypes = p, p;
  }, Be;
}
if (process.env.NODE_ENV !== "production") {
  var In = Pr(), Nn = !0;
  He.exports = kn()(In.isElement, Nn);
} else
  He.exports = $n()();
var Dn = He.exports;
const s = /* @__PURE__ */ Rn(Dn), Ln = "_iconButton_1963e_1", Mn = {
  iconButton: Ln
}, Wn = {
  trash: Qr,
  filter: en,
  info: rn,
  fill: nn,
  ellipsis: tn,
  chevronRight: Or,
  chevronLeft: an
}, we = ({ onClick: r, iconName: d }) => /* @__PURE__ */ a.jsx("div", { className: Mn.iconButton, children: /* @__PURE__ */ a.jsx("button", { "aria-label": d, type: "button", onClick: r, children: /* @__PURE__ */ a.jsx(Pe, { icon: Wn[d] }) }) });
we.propTypes = {
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
we.defaultProps = {
  iconName: "ellipsis"
};
const qn = "_layerButtonReel_1o59k_1", Fn = {
  layerButtonReel: qn
}, Xe = ({ buttons: r }) => /* @__PURE__ */ a.jsx("div", { className: Fn.layerButtonReel, children: r && Object.keys(r).map((d) => /* @__PURE__ */ a.jsx(we, { iconName: d, onClick: r[d] })) });
Xe.propTypes = {
  buttons: s.objectOf(s.func)
};
Xe.defaultProps = {
  buttons: null
};
const Yn = "_layerToggle_gvlf4_7", Bn = "_slider_gvlf4_29", Ge = {
  layerToggle: Yn,
  switch: "_switch_gvlf4_12",
  slider: Bn
}, Ze = ({ layerName: r, isActive: d, onChange: f }) => /* @__PURE__ */ a.jsx("div", { className: Ge.layerToggle, children: /* @__PURE__ */ a.jsxs("div", { className: Ge.switch, children: [
  /* @__PURE__ */ a.jsx(
    "input",
    {
      type: "checkbox",
      value: r,
      checked: d,
      onChange: f
    }
  ),
  /* @__PURE__ */ a.jsx("span", { className: Ge.slider })
] }) });
Ze.propTypes = {
  layerName: s.string,
  isActive: s.bool,
  onChange: s.func.isRequired
};
Ze.defaultProps = {
  layerName: "Example Layer",
  isActive: !1
};
const Gn = "_layerCard_mism4_1", Vn = "_layerCardWrapper_mism4_11", Un = "_layerCardTextWrapper_mism4_20", zn = "_layerCardTitle_mism4_28", Hn = "_layerCardDescription_mism4_32", Jn = "_layerCardControls_mism4_37", Kn = "_layerCardToggle_mism4_42", Xn = "_layerCardChildren_mism4_47", ye = {
  layerCard: Gn,
  layerCardWrapper: Vn,
  layerCardTextWrapper: Un,
  layerCardTitle: zn,
  layerCardDescription: Hn,
  layerCardControls: Jn,
  layerCardToggle: Kn,
  layerCardChildren: Xn
}, Zn = ({ layerName: r, isActive: d, onChange: f, buttons: l, description: v, children: p }) => /* @__PURE__ */ a.jsxs("div", { className: ye.layerCard, children: [
  /* @__PURE__ */ a.jsxs("div", { className: ye.layerCardWrapper, children: [
    /* @__PURE__ */ a.jsxs("div", { className: ye.layerCardTextWrapper, children: [
      /* @__PURE__ */ a.jsx("span", { className: ye.layerCardTitle, children: r }),
      /* @__PURE__ */ a.jsx("span", { className: ye.layerCardDescription, children: v })
    ] }),
    /* @__PURE__ */ a.jsx(Xe, { buttons: l }),
    f && /* @__PURE__ */ a.jsx(
      Ze,
      {
        layerName: r,
        isActive: d,
        onChange: f
      }
    )
  ] }),
  /* @__PURE__ */ a.jsx("div", { className: ye.layerCardChildren, children: p })
] });
Zn.propTypes = {
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
const Qn = "_swatchContainer_771fp_2", et = "_swatch_771fp_2", rt = "_swatchLabel_771fp_18", nt = "_swatchValue_771fp_24", Oe = {
  swatchContainer: Qn,
  swatch: et,
  swatchLabel: rt,
  swatchValue: nt
}, tt = ({ color: r, label: d = "", value: f, units: l = "" }) => /* @__PURE__ */ a.jsxs("div", { className: Oe.swatchContainer, children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-testid": "swatch",
      className: Oe.swatch,
      style: { backgroundColor: r }
    }
  ),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-label", className: Oe.swatchLabel, children: d }),
  /* @__PURE__ */ a.jsx("div", { "data-testid": "swatch-value", className: Oe.swatchValue, children: f !== void 0 && `${f}${l}` })
] }), at = "_swatchLegend_qiaru_1", ot = {
  swatchLegend: at
}, it = ({ swatches: r }) => /* @__PURE__ */ a.jsx("div", { className: ot.swatchLegend, children: r && r.map((d) => {
  const { color: f, label: l, value: v, units: p } = d;
  return /* @__PURE__ */ a.jsx(
    tt,
    {
      label: l,
      color: f,
      value: v,
      units: p
    },
    l
  );
}) });
it.propTypes = {
  swatches: s.arrayOf(s.objectOf(s.string)).isRequired
};
const st = "_slider_1bnet_1", ct = "_sliderLabel_1bnet_16", lt = "_sliderThumb_1bnet_20", ut = "_sliderTrack_1bnet_41", ft = "_comparisonControl_1bnet_66", Ee = {
  slider: st,
  sliderLabel: ct,
  sliderThumb: lt,
  sliderTrack: ut,
  comparisonControl: ft
}, Vt = ({
  label: r,
  showLabel: d = !0,
  onChange: f,
  value: l = 50,
  ...v
}) => /* @__PURE__ */ a.jsx("div", { className: Ee.comparisonControl, children: /* @__PURE__ */ a.jsxs(ln, { maxValue: 94, minValue: 6, step: 0.1, className: Ee.slider, "aria-label": !d && typeof r == "string" ? r : void 0, onChange: f, value: l, ...v, children: [
  d && /* @__PURE__ */ a.jsx(Sr, { className: Ee.sliderLabel, children: r }),
  /* @__PURE__ */ a.jsx(un, { className: Ee.sliderTrack, children: /* @__PURE__ */ a.jsx(fn, { className: Ee.sliderThumb, children: /* @__PURE__ */ a.jsx(Pe, { color: "white", icon: on }) }) })
] }) }), dt = "_datePicker_15zo5_1 react-aria-DatePicker", pt = "_dateInput_15zo5_12 react-aria-DateInput", vt = "_hoverDatepicker_15zo5_16", Ve = {
  datePicker: dt,
  dateInput: pt,
  hoverDatepicker: vt
}, Ut = ({
  label: r,
  helperText: d,
  errorMessage: f,
  value: l,
  onChange: v,
  "aria-label": p,
  "aria-labelledby": g,
  ...y
}) => {
  const [m, j] = Je(!1), { hoverProps: h, isHovered: T } = xn({});
  return /* @__PURE__ */ a.jsxs(
    dn,
    {
      className: Ve.datePicker,
      value: l,
      onChange: v,
      "aria-label": p,
      "aria-labelledby": g,
      ...y,
      children: [
        r && /* @__PURE__ */ a.jsx(Sr, { children: r }),
        /* @__PURE__ */ a.jsxs(pn, { children: [
          /* @__PURE__ */ a.jsx(
            vn,
            {
              className: `${Ve.dateInput} ${T || m ? Ve.hoverDatepicker : ""}`,
              ...h,
              children: (P) => /* @__PURE__ */ a.jsx(yn, { segment: P })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Le,
            {
              "aria-label": "Open calendar",
              onHoverChange: (P) => j(P),
              children: /* @__PURE__ */ a.jsx(Pe, { icon: sn })
            }
          )
        ] }),
        d && /* @__PURE__ */ a.jsx(hn, { slot: "description", children: d }),
        /* @__PURE__ */ a.jsx(mn, { children: f }),
        /* @__PURE__ */ a.jsx(_n, { children: /* @__PURE__ */ a.jsx(bn, { children: /* @__PURE__ */ a.jsxs(gn, { children: [
          /* @__PURE__ */ a.jsxs("header", { children: [
            /* @__PURE__ */ a.jsx(Le, { slot: "previous", children: "◀" }),
            /* @__PURE__ */ a.jsx(Tn, {}),
            /* @__PURE__ */ a.jsx(Le, { slot: "next", children: "▶" })
          ] }),
          /* @__PURE__ */ a.jsx(Cn, { children: (P) => /* @__PURE__ */ a.jsx(En, { date: P }) })
        ] }) }) })
      ]
    }
  );
}, yt = "_gradient_1w8qh_1", ht = "_gradientNumbers_1w8qh_6", mt = "_gradientLegend_1w8qh_11", Se = {
  gradient: yt,
  gradientNumbers: ht,
  gradientLegend: mt
}, _t = ({
  title: r,
  startColor: d = "red",
  endColor: f = "yellow",
  startNo: l,
  endNo: v,
  titleBelow: p = !1,
  bins: g = 0,
  precision: y = 2,
  units: m
}) => {
  const j = g > 0 ? Array(g - 1).fill(0).map((h, T) => {
    const P = (l + (v - l) / g * (T + 1)).toPrecision(y);
    return /* @__PURE__ */ a.jsx("span", { children: P }, P);
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
        /* @__PURE__ */ a.jsxs("span", { children: [
          l,
          " ",
          m
        ] }),
        j,
        /* @__PURE__ */ a.jsxs("span", { children: [
          v,
          " ",
          m
        ] })
      ] }),
      p && /* @__PURE__ */ a.jsxs("div", { className: Se.uiTitle, children: [
        " ",
        r
      ] })
    ] })
  ] });
};
_t.propTypes = {
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
const bt = "_simpleSlider_qj292_1", gt = "_simpleSliderInput_qj292_7", Tt = "_simpleSliderMinMaxContainer_qj292_11", Ue = {
  simpleSlider: bt,
  simpleSliderInput: gt,
  simpleSliderMinMaxContainer: Tt
}, Qe = ({
  units: r,
  label: d,
  onChange: f,
  min: l,
  max: v,
  step: p,
  value: g
}) => /* @__PURE__ */ a.jsxs("div", { className: Ue.simpleSlider, children: [
  /* @__PURE__ */ a.jsxs("div", { children: [
    d && /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: d }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        onChange: f,
        className: Ue.simpleSliderInput,
        type: "range",
        value: g,
        min: l,
        max: v,
        step: p
      }
    )
  ] }),
  /* @__PURE__ */ a.jsxs("div", { className: Ue.simpleSliderMinMaxContainer, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "ui-label", children: [
      l,
      r
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "ui-label", children: [
      v,
      r
    ] })
  ] })
] });
Qe.propTypes = {
  onChange: s.func.isRequired,
  min: s.number.isRequired,
  max: s.number.isRequired,
  step: s.number.isRequired,
  value: s.number,
  label: s.string,
  units: s.string
};
Qe.defaultProps = {
  value: 0,
  units: "",
  label: ""
};
const Ct = "_layerGroupButton_1twxx_1", Et = "_layerGroupChevron_1twxx_12", xt = "_layerGroupName_1twxx_25", Rt = "_layerGroupWrapper_1twxx_32", jt = "_layerGroupChildren_1twxx_32", xe = {
  layerGroupButton: Ct,
  layerGroupChevron: Et,
  layerGroupName: xt,
  layerGroupWrapper: Rt,
  layerGroupChildren: jt
}, Ot = ({ groupName: r, children: d }) => {
  const [f, l] = Je(!1), v = () => {
    l(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: xe.layerGroupWrapper, children: [
    /* @__PURE__ */ a.jsxs("button", { type: "button", className: xe.layerGroupButton, onClick: v, children: [
      /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChevron, children: /* @__PURE__ */ a.jsx(Pe, { size: "md", fixedWidth: !0, icon: f ? cn : Or }) }),
      /* @__PURE__ */ a.jsx("span", { className: xe.layerGroupName, children: r })
    ] }),
    f && /* @__PURE__ */ a.jsx("div", { className: xe.layerGroupChildren, children: d })
  ] });
};
Ot.propTypes = {
  groupName: s.string,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const St = "_mapWrapper_1gyf5_1", Pt = "_mapContainer_1gyf5_10", xr = {
  mapWrapper: St,
  mapContainer: Pt
}, wt = ({ mapContainer: r, id: d, children: f }) => /* @__PURE__ */ a.jsxs("div", { className: xr.mapWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: xr.mapContainer, id: d, ref: r }),
  f
] });
wt.propTypes = {
  mapContainer: s.oneOfType([
    s.func,
    s.shape({ current: s.instanceOf(Element) })
  ]),
  children: s.node,
  id: s.string
};
const At = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "nav-container", children: r });
At.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const kt = "_infoPanelContainer_1prx4_1", $t = {
  infoPanelContainer: kt
}, zt = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: $t.infoPanelContainer, children: /* @__PURE__ */ a.jsx("div", { children: r }) }), It = ({ showToggle: r, children: d }) => {
  const [f, l] = Je(!1), v = `sidebar ${f ? "closed" : ""}`, p = () => {
    l(!f);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ a.jsx("div", { className: v, children: d }),
    r && /* @__PURE__ */ a.jsx("div", { className: "sidebarToggle", children: /* @__PURE__ */ a.jsx(
      we,
      {
        onClick: p,
        iconName: f ? "chevronRight" : "chevronLeft"
      }
    ) })
  ] });
};
It.propTypes = {
  showToggle: s.bool,
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Nt = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "layout-stacked", children: r });
Nt.propTypes = {
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Dt = ({ align: r = "left", children: d }) => /* @__PURE__ */ a.jsx("div", { className: `layout-standard ${r}`, children: d });
Dt.propTypes = {
  align: s.oneOf(["left", "right"]),
  children: s.oneOfType([
    s.arrayOf(s.node),
    s.node
  ]).isRequired
};
const Lt = "_sliderControlWrapper_2tznx_1", Mt = "_sliderLabel_2tznx_9", Rr = {
  sliderControlWrapper: Lt,
  sliderLabel: Mt
}, Wt = ({ title: r, units: d, sliderConfig: f }) => /* @__PURE__ */ a.jsxs("div", { className: Rr.sliderControlWrapper, children: [
  /* @__PURE__ */ a.jsx("div", { className: "ui-label", children: r }),
  /* @__PURE__ */ a.jsx("div", {}),
  f && f.map((l) => {
    const { label: v } = l;
    return /* @__PURE__ */ a.jsx("div", { className: Rr.sliderLabel, children: v });
  }),
  f && f.map((l) => {
    const { onChange: v, min: p, max: g, step: y, value: m } = l;
    return /* @__PURE__ */ a.jsx(
      Qe,
      {
        onChange: v,
        units: d,
        min: p,
        max: g,
        step: y,
        value: m
      }
    );
  })
] });
Wt.propTypes = {
  title: s.string.isRequired,
  units: s.string.isRequired,
  sliderConfig: s.arrayOf(s.objectOf(s.string)).isRequired
};
export {
  Vt as ComparisonControl,
  Ut as DatePicker,
  _t as GradientLegend,
  we as IconButton,
  zt as InfoPanelContainer,
  Xe as LayerButtonReel,
  Zn as LayerCard,
  Ot as LayerGroup,
  Ze as LayerToggle,
  wt as MapContainer,
  At as NavContainer,
  It as SidebarContainer,
  Qe as SimpleSlider,
  Wt as SliderControl,
  Nt as Stacked,
  Dt as Standard,
  tt as Swatch,
  it as SwatchLegend
};
