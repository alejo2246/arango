function Bu(e, t) {
  for (var n = 0; n < t.length; n++) {
    const a = t[n];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in e)) {
          const r = Object.getOwnPropertyDescriptor(a, i);
          r &&
            Object.defineProperty(
              e,
              i,
              r.get ? r : { enumerable: !0, get: () => a[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function a(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();
function Mu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Wl = { exports: {} },
  Ni = {},
  Yl = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ga = Symbol.for("react.element"),
  Ou = Symbol.for("react.portal"),
  Iu = Symbol.for("react.fragment"),
  Lu = Symbol.for("react.strict_mode"),
  Ru = Symbol.for("react.profiler"),
  Du = Symbol.for("react.provider"),
  Vu = Symbol.for("react.context"),
  Hu = Symbol.for("react.forward_ref"),
  Uu = Symbol.for("react.suspense"),
  Fu = Symbol.for("react.memo"),
  Gu = Symbol.for("react.lazy"),
  ws = Symbol.iterator;
function Wu(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ws && e[ws]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ql = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ql = Object.assign,
  Zl = {};
function Cn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zl),
    (this.updater = n || ql);
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xl() {}
Xl.prototype = Cn.prototype;
function yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zl),
    (this.updater = n || ql);
}
var wo = (yo.prototype = new Xl());
wo.constructor = yo;
Ql(wo, Cn.prototype);
wo.isPureReactComponent = !0;
var xs = Array.isArray,
  Jl = Object.prototype.hasOwnProperty,
  xo = { current: null },
  Kl = { key: !0, ref: !0, __self: !0, __source: !0 };
function $l(e, t, n) {
  var a,
    i = {},
    r = null,
    o = null;
  if (t != null)
    for (a in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (r = "" + t.key),
    t))
      Jl.call(t, a) && !Kl.hasOwnProperty(a) && (i[a] = t[a]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var c = Array(s), d = 0; d < s; d++) c[d] = arguments[d + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (a in ((s = e.defaultProps), s)) i[a] === void 0 && (i[a] = s[a]);
  return {
    $$typeof: ga,
    type: e,
    key: r,
    ref: o,
    props: i,
    _owner: xo.current,
  };
}
function Yu(e, t) {
  return {
    $$typeof: ga,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ga;
}
function qu(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ks = /\/+/g;
function Ji(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? qu("" + e.key)
    : t.toString(36);
}
function Fa(e, t, n, a, i) {
  var r = typeof e;
  (r === "undefined" || r === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (r) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ga:
          case Ou:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = a === "" ? "." + Ji(o, 0) : a),
      xs(i)
        ? ((n = ""),
          e != null && (n = e.replace(ks, "$&/") + "/"),
          Fa(i, t, n, "", function (d) {
            return d;
          }))
        : i != null &&
          (ko(i) &&
            (i = Yu(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ks, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (a = a === "" ? "." : a + ":"), xs(e)))
    for (var s = 0; s < e.length; s++) {
      r = e[s];
      var c = a + Ji(r, s);
      o += Fa(r, t, n, c, i);
    }
  else if (((c = Wu(e)), typeof c == "function"))
    for (e = c.call(e), s = 0; !(r = e.next()).done; )
      (r = r.value), (c = a + Ji(r, s++)), (o += Fa(r, t, n, c, i));
  else if (r === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Sa(e, t, n) {
  if (e == null) return e;
  var a = [],
    i = 0;
  return (
    Fa(e, a, "", "", function (r) {
      return t.call(n, r, i++);
    }),
    a
  );
}
function Qu(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Ga = { transition: null },
  Zu = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Ga,
    ReactCurrentOwner: xo,
  };
B.Children = {
  map: Sa,
  forEach: function (e, t, n) {
    Sa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ko(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Cn;
B.Fragment = Iu;
B.Profiler = Ru;
B.PureComponent = yo;
B.StrictMode = Lu;
B.Suspense = Uu;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zu;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var a = Ql({}, e.props),
    i = e.key,
    r = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((r = t.ref), (o = xo.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (c in t)
      Jl.call(t, c) &&
        !Kl.hasOwnProperty(c) &&
        (a[c] = t[c] === void 0 && s !== void 0 ? s[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) a.children = n;
  else if (1 < c) {
    s = Array(c);
    for (var d = 0; d < c; d++) s[d] = arguments[d + 2];
    a.children = s;
  }
  return { $$typeof: ga, type: e.type, key: i, ref: r, props: a, _owner: o };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vu,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Du, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = $l;
B.createFactory = function (e) {
  var t = $l.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Hu, render: e };
};
B.isValidElement = ko;
B.lazy = function (e) {
  return { $$typeof: Gu, _payload: { _status: -1, _result: e }, _init: Qu };
};
B.memo = function (e, t) {
  return { $$typeof: Fu, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Ga.transition;
  Ga.transition = {};
  try {
    e();
  } finally {
    Ga.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
B.useContext = function (e) {
  return ue.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
B.useId = function () {
  return ue.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return ue.current.useRef(e);
};
B.useState = function (e) {
  return ue.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return ue.current.useTransition();
};
B.version = "18.2.0";
Yl.exports = B;
var S = Yl.exports;
const $e = Mu(S),
  Xu = Bu({ __proto__: null, default: $e }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ju = S,
  Ku = Symbol.for("react.element"),
  $u = Symbol.for("react.fragment"),
  ep = Object.prototype.hasOwnProperty,
  tp = Ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  np = { key: !0, ref: !0, __self: !0, __source: !0 };
function ec(e, t, n) {
  var a,
    i = {},
    r = null,
    o = null;
  n !== void 0 && (r = "" + n),
    t.key !== void 0 && (r = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (a in t) ep.call(t, a) && !np.hasOwnProperty(a) && (i[a] = t[a]);
  if (e && e.defaultProps)
    for (a in ((t = e.defaultProps), t)) i[a] === void 0 && (i[a] = t[a]);
  return {
    $$typeof: Ku,
    type: e,
    key: r,
    ref: o,
    props: i,
    _owner: tp.current,
  };
}
Ni.Fragment = $u;
Ni.jsx = ec;
Ni.jsxs = ec;
Wl.exports = Ni;
var l = Wl.exports,
  Ar = {},
  tc = { exports: {} },
  Ae = {},
  nc = { exports: {} },
  ac = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, N) {
    var P = A.length;
    A.push(N);
    e: for (; 0 < P; ) {
      var Y = (P - 1) >>> 1,
        K = A[Y];
      if (0 < i(K, N)) (A[Y] = N), (A[P] = K), (P = Y);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function a(A) {
    if (A.length === 0) return null;
    var N = A[0],
      P = A.pop();
    if (P !== N) {
      A[0] = P;
      e: for (var Y = 0, K = A.length, ka = K >>> 1; Y < ka; ) {
        var Pt = 2 * (Y + 1) - 1,
          Xi = A[Pt],
          Bt = Pt + 1,
          Aa = A[Bt];
        if (0 > i(Xi, P))
          Bt < K && 0 > i(Aa, Xi)
            ? ((A[Y] = Aa), (A[Bt] = P), (Y = Bt))
            : ((A[Y] = Xi), (A[Pt] = P), (Y = Pt));
        else if (Bt < K && 0 > i(Aa, P)) (A[Y] = Aa), (A[Bt] = P), (Y = Bt);
        else break e;
      }
    }
    return N;
  }
  function i(A, N) {
    var P = A.sortIndex - N.sortIndex;
    return P !== 0 ? P : A.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var r = performance;
    e.unstable_now = function () {
      return r.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var c = [],
    d = [],
    h = 1,
    f = null,
    v = 3,
    g = !1,
    b = !1,
    y = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(A) {
    for (var N = n(d); N !== null; ) {
      if (N.callback === null) a(d);
      else if (N.startTime <= A)
        a(d), (N.sortIndex = N.expirationTime), t(c, N);
      else break;
      N = n(d);
    }
  }
  function _(A) {
    if (((y = !1), m(A), !b))
      if (n(c) !== null) (b = !0), Ce(x);
      else {
        var N = n(d);
        N !== null && ot(_, N.startTime - A);
      }
  }
  function x(A, N) {
    (b = !1), y && ((y = !1), p(j), (j = -1)), (g = !0);
    var P = v;
    try {
      for (
        m(N), f = n(c);
        f !== null && (!(f.expirationTime > N) || (A && !_e()));

      ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          (f.callback = null), (v = f.priorityLevel);
          var K = Y(f.expirationTime <= N);
          (N = e.unstable_now()),
            typeof K == "function" ? (f.callback = K) : f === n(c) && a(c),
            m(N);
        } else a(c);
        f = n(c);
      }
      if (f !== null) var ka = !0;
      else {
        var Pt = n(d);
        Pt !== null && ot(_, Pt.startTime - N), (ka = !1);
      }
      return ka;
    } finally {
      (f = null), (v = P), (g = !1);
    }
  }
  var C = !1,
    E = null,
    j = -1,
    R = 5,
    T = -1;
  function _e() {
    return !(e.unstable_now() - T < R);
  }
  function Nt() {
    if (E !== null) {
      var A = e.unstable_now();
      T = A;
      var N = !0;
      try {
        N = E(!0, A);
      } finally {
        N ? Tt() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var Tt;
  if (typeof u == "function")
    Tt = function () {
      u(Nt);
    };
  else if (typeof MessageChannel < "u") {
    var xa = new MessageChannel(),
      le = xa.port2;
    (xa.port1.onmessage = Nt),
      (Tt = function () {
        le.postMessage(null);
      });
  } else
    Tt = function () {
      z(Nt, 0);
    };
  function Ce(A) {
    (E = A), C || ((C = !0), Tt());
  }
  function ot(A, N) {
    j = z(function () {
      A(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || g || ((b = !0), Ce(x));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (A) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = v;
      }
      var P = v;
      v = N;
      try {
        return A();
      } finally {
        v = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, N) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var P = v;
      v = A;
      try {
        return N();
      } finally {
        v = P;
      }
    }),
    (e.unstable_scheduleCallback = function (A, N, P) {
      var Y = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? Y + P : Y))
          : (P = Y),
        A)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = P + K),
        (A = {
          id: h++,
          callback: N,
          priorityLevel: A,
          startTime: P,
          expirationTime: K,
          sortIndex: -1,
        }),
        P > Y
          ? ((A.sortIndex = P),
            t(d, A),
            n(c) === null &&
              A === n(d) &&
              (y ? (p(j), (j = -1)) : (y = !0), ot(_, P - Y)))
          : ((A.sortIndex = K), t(c, A), b || g || ((b = !0), Ce(x))),
        A
      );
    }),
    (e.unstable_shouldYield = _e),
    (e.unstable_wrapCallback = function (A) {
      var N = v;
      return function () {
        var P = v;
        v = N;
        try {
          return A.apply(this, arguments);
        } finally {
          v = P;
        }
      };
    });
})(ac);
nc.exports = ac;
var ap = nc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ic = S,
  ke = ap;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var rc = new Set(),
  $n = {};
function Zt(e, t) {
  _n(e, t), _n(e + "Capture", t);
}
function _n(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++) rc.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Sr = Object.prototype.hasOwnProperty,
  ip =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  As = {},
  Ss = {};
function rp(e) {
  return Sr.call(Ss, e)
    ? !0
    : Sr.call(As, e)
    ? !1
    : ip.test(e)
    ? (Ss[e] = !0)
    : ((As[e] = !0), !1);
}
function op(e, t, n, a) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return a
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sp(e, t, n, a) {
  if (t === null || typeof t > "u" || op(e, t, n, a)) return !0;
  if (a) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, a, i, r, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = a),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = r),
    (this.removeEmptyString = o);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ao = /[\-:]([a-z])/g;
function So(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ao, So);
    ae[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ao, So);
    ae[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ao, So);
  ae[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Co(e, t, n, a) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : a ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sp(t, n, i, a) && (n = null),
    a || i === null
      ? rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (a = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))));
}
var rt = ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ca = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  en = Symbol.for("react.fragment"),
  Eo = Symbol.for("react.strict_mode"),
  Cr = Symbol.for("react.profiler"),
  oc = Symbol.for("react.provider"),
  sc = Symbol.for("react.context"),
  jo = Symbol.for("react.forward_ref"),
  Er = Symbol.for("react.suspense"),
  jr = Symbol.for("react.suspense_list"),
  zo = Symbol.for("react.memo"),
  ct = Symbol.for("react.lazy"),
  lc = Symbol.for("react.offscreen"),
  Cs = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cs && e[Cs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  Ki;
function Dn(e) {
  if (Ki === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ki = (t && t[1]) || "";
    }
  return (
    `
` +
    Ki +
    e
  );
}
var $i = !1;
function er(e, t) {
  if (!e || $i) return "";
  $i = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var a = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          a = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        a = d;
      }
      e();
    }
  } catch (d) {
    if (d && a && typeof d.stack == "string") {
      for (
        var i = d.stack.split(`
`),
          r = a.stack.split(`
`),
          o = i.length - 1,
          s = r.length - 1;
        1 <= o && 0 <= s && i[o] !== r[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== r[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== r[s])) {
                var c =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    ($i = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
}
function lp(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn("Lazy");
    case 13:
      return Dn("Suspense");
    case 19:
      return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = er(e.type, !1)), e;
    case 11:
      return (e = er(e.type.render, !1)), e;
    case 1:
      return (e = er(e.type, !0)), e;
    default:
      return "";
  }
}
function zr(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case en:
      return "Fragment";
    case $t:
      return "Portal";
    case Cr:
      return "Profiler";
    case Eo:
      return "StrictMode";
    case Er:
      return "Suspense";
    case jr:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sc:
        return (e.displayName || "Context") + ".Consumer";
      case oc:
        return (e._context.displayName || "Context") + ".Provider";
      case jo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zo:
        return (
          (t = e.displayName || null), t !== null ? t : zr(e.type) || "Memo"
        );
      case ct:
        (t = e._payload), (e = e._init);
        try {
          return zr(e(t));
        } catch {}
    }
  return null;
}
function cp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zr(t);
    case 8:
      return t === Eo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function St(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function cc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function dp(e) {
  var t = cc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    a = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      r = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (a = "" + o), r.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return a;
        },
        setValue: function (o) {
          a = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ea(e) {
  e._valueTracker || (e._valueTracker = dp(e));
}
function dc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    a = "";
  return (
    e && (a = cc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = a),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ti(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Nr(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Es(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    a = t.checked != null ? t.checked : t.defaultChecked;
  (n = St(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: a,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function uc(e, t) {
  (t = t.checked), t != null && Co(e, "checked", t, !1);
}
function Tr(e, t) {
  uc(e, t);
  var n = St(t.value),
    a = t.type;
  if (n != null)
    a === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (a === "submit" || a === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Pr(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Pr(e, t.type, St(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function js(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var a = t.type;
    if (
      !(
        (a !== "submit" && a !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Pr(e, t, n) {
  (t !== "number" || ti(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vn = Array.isArray;
function pn(e, t, n, a) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && a && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + St(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), a && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Br(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function zs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Vn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: St(n) };
}
function pc(e, t) {
  var n = St(t.value),
    a = St(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    a != null && (e.defaultValue = "" + a);
}
function Ns(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mr(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? mc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ja,
  fc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, a, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, a, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ja = ja || document.createElement("div"),
          ja.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ja.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ea(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Gn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  up = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gn).forEach(function (e) {
  up.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]);
  });
});
function vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Gn.hasOwnProperty(e) && Gn[e])
    ? ("" + t).trim()
    : t + "px";
}
function hc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var a = n.indexOf("--") === 0,
        i = vc(n, t[n], a);
      n === "float" && (n = "cssFloat"), a ? e.setProperty(n, i) : (e[n] = i);
    }
}
var pp = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Or(e, t) {
  if (t) {
    if (pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function Ir(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Lr = null;
function No(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rr = null,
  mn = null,
  fn = null;
function Ts(e) {
  if ((e = ya(e))) {
    if (typeof Rr != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Oi(t)), Rr(e.stateNode, e.type, t));
  }
}
function gc(e) {
  mn ? (fn ? fn.push(e) : (fn = [e])) : (mn = e);
}
function bc() {
  if (mn) {
    var e = mn,
      t = fn;
    if (((fn = mn = null), Ts(e), t)) for (e = 0; e < t.length; e++) Ts(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function yc() {}
var tr = !1;
function wc(e, t, n) {
  if (tr) return e(t, n);
  tr = !0;
  try {
    return _c(e, t, n);
  } finally {
    (tr = !1), (mn !== null || fn !== null) && (yc(), bc());
  }
}
function ta(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var a = Oi(n);
  if (a === null) return null;
  n = a[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (a = !a.disabled) ||
        ((e = e.type),
        (a = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !a);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var Dr = !1;
if (tt)
  try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", {
      get: function () {
        Dr = !0;
      },
    }),
      window.addEventListener("test", Pn, Pn),
      window.removeEventListener("test", Pn, Pn);
  } catch {
    Dr = !1;
  }
function mp(e, t, n, a, i, r, o, s, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var Wn = !1,
  ni = null,
  ai = !1,
  Vr = null,
  fp = {
    onError: function (e) {
      (Wn = !0), (ni = e);
    },
  };
function vp(e, t, n, a, i, r, o, s, c) {
  (Wn = !1), (ni = null), mp.apply(fp, arguments);
}
function hp(e, t, n, a, i, r, o, s, c) {
  if ((vp.apply(this, arguments), Wn)) {
    if (Wn) {
      var d = ni;
      (Wn = !1), (ni = null);
    } else throw Error(w(198));
    ai || ((ai = !0), (Vr = d));
  }
}
function Xt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ps(e) {
  if (Xt(e) !== e) throw Error(w(188));
}
function gp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, a = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var r = i.alternate;
    if (r === null) {
      if (((a = i.return), a !== null)) {
        n = a;
        continue;
      }
      break;
    }
    if (i.child === r.child) {
      for (r = i.child; r; ) {
        if (r === n) return Ps(i), e;
        if (r === a) return Ps(i), t;
        r = r.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== a.return) (n = i), (a = r);
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          (o = !0), (n = i), (a = r);
          break;
        }
        if (s === a) {
          (o = !0), (a = i), (n = r);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = r.child; s; ) {
          if (s === n) {
            (o = !0), (n = r), (a = i);
            break;
          }
          if (s === a) {
            (o = !0), (a = r), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== a) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function kc(e) {
  return (e = gp(e)), e !== null ? Ac(e) : null;
}
function Ac(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ac(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sc = ke.unstable_scheduleCallback,
  Bs = ke.unstable_cancelCallback,
  bp = ke.unstable_shouldYield,
  _p = ke.unstable_requestPaint,
  q = ke.unstable_now,
  yp = ke.unstable_getCurrentPriorityLevel,
  To = ke.unstable_ImmediatePriority,
  Cc = ke.unstable_UserBlockingPriority,
  ii = ke.unstable_NormalPriority,
  wp = ke.unstable_LowPriority,
  Ec = ke.unstable_IdlePriority,
  Ti = null,
  Ye = null;
function xp(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(Ti, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Sp,
  kp = Math.log,
  Ap = Math.LN2;
function Sp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((kp(e) / Ap) | 0)) | 0;
}
var za = 64,
  Na = 4194304;
function Hn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var a = 0,
    i = e.suspendedLanes,
    r = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? (a = Hn(s)) : ((r &= o), r !== 0 && (a = Hn(r)));
  } else (o = n & ~i), o !== 0 ? (a = Hn(o)) : r !== 0 && (a = Hn(r));
  if (a === 0) return 0;
  if (
    t !== 0 &&
    t !== a &&
    !(t & i) &&
    ((i = a & -a), (r = t & -t), i >= r || (i === 16 && (r & 4194240) !== 0))
  )
    return t;
  if ((a & 4 && (a |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= a; 0 < t; )
      (n = 31 - Re(t)), (i = 1 << n), (a |= e[n]), (t &= ~i);
  return a;
}
function Cp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ep(e, t) {
  for (
    var n = e.suspendedLanes,
      a = e.pingedLanes,
      i = e.expirationTimes,
      r = e.pendingLanes;
    0 < r;

  ) {
    var o = 31 - Re(r),
      s = 1 << o,
      c = i[o];
    c === -1
      ? (!(s & n) || s & a) && (i[o] = Cp(s, t))
      : c <= t && (e.expiredLanes |= s),
      (r &= ~s);
  }
}
function Hr(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jc() {
  var e = za;
  return (za <<= 1), !(za & 4194240) && (za = 64), e;
}
function nr(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ba(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function jp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var a = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Re(n),
      r = 1 << i;
    (t[i] = 0), (a[i] = -1), (e[i] = -1), (n &= ~r);
  }
}
function Po(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var a = 31 - Re(n),
      i = 1 << a;
    (i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i);
  }
}
var I = 0;
function zc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Nc,
  Bo,
  Tc,
  Pc,
  Bc,
  Ur = !1,
  Ta = [],
  ht = null,
  gt = null,
  bt = null,
  na = new Map(),
  aa = new Map(),
  ut = [],
  zp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ms(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      na.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      aa.delete(t.pointerId);
  }
}
function Bn(e, t, n, a, i, r) {
  return e === null || e.nativeEvent !== r
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: a,
        nativeEvent: r,
        targetContainers: [i],
      }),
      t !== null && ((t = ya(t)), t !== null && Bo(t)),
      e)
    : ((e.eventSystemFlags |= a),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Np(e, t, n, a, i) {
  switch (t) {
    case "focusin":
      return (ht = Bn(ht, e, t, n, a, i)), !0;
    case "dragenter":
      return (gt = Bn(gt, e, t, n, a, i)), !0;
    case "mouseover":
      return (bt = Bn(bt, e, t, n, a, i)), !0;
    case "pointerover":
      var r = i.pointerId;
      return na.set(r, Bn(na.get(r) || null, e, t, n, a, i)), !0;
    case "gotpointercapture":
      return (
        (r = i.pointerId), aa.set(r, Bn(aa.get(r) || null, e, t, n, a, i)), !0
      );
  }
  return !1;
}
function Mc(e) {
  var t = Lt(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xc(n)), t !== null)) {
          (e.blockedOn = t),
            Bc(e.priority, function () {
              Tc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Wa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var a = new n.constructor(n.type, n);
      (Lr = a), n.target.dispatchEvent(a), (Lr = null);
    } else return (t = ya(n)), t !== null && Bo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Os(e, t, n) {
  Wa(e) && n.delete(t);
}
function Tp() {
  (Ur = !1),
    ht !== null && Wa(ht) && (ht = null),
    gt !== null && Wa(gt) && (gt = null),
    bt !== null && Wa(bt) && (bt = null),
    na.forEach(Os),
    aa.forEach(Os);
}
function Mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ur ||
      ((Ur = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Tp)));
}
function ia(e) {
  function t(i) {
    return Mn(i, e);
  }
  if (0 < Ta.length) {
    Mn(Ta[0], e);
    for (var n = 1; n < Ta.length; n++) {
      var a = Ta[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
  }
  for (
    ht !== null && Mn(ht, e),
      gt !== null && Mn(gt, e),
      bt !== null && Mn(bt, e),
      na.forEach(t),
      aa.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (a = ut[n]), a.blockedOn === e && (a.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    Mc(n), n.blockedOn === null && ut.shift();
}
var vn = rt.ReactCurrentBatchConfig,
  oi = !0;
function Pp(e, t, n, a) {
  var i = I,
    r = vn.transition;
  vn.transition = null;
  try {
    (I = 1), Mo(e, t, n, a);
  } finally {
    (I = i), (vn.transition = r);
  }
}
function Bp(e, t, n, a) {
  var i = I,
    r = vn.transition;
  vn.transition = null;
  try {
    (I = 4), Mo(e, t, n, a);
  } finally {
    (I = i), (vn.transition = r);
  }
}
function Mo(e, t, n, a) {
  if (oi) {
    var i = Fr(e, t, n, a);
    if (i === null) pr(e, t, a, si, n), Ms(e, a);
    else if (Np(i, e, t, n, a)) a.stopPropagation();
    else if ((Ms(e, a), t & 4 && -1 < zp.indexOf(e))) {
      for (; i !== null; ) {
        var r = ya(i);
        if (
          (r !== null && Nc(r),
          (r = Fr(e, t, n, a)),
          r === null && pr(e, t, a, si, n),
          r === i)
        )
          break;
        i = r;
      }
      i !== null && a.stopPropagation();
    } else pr(e, t, a, null, n);
  }
}
var si = null;
function Fr(e, t, n, a) {
  if (((si = null), (e = No(a)), (e = Lt(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (si = e), null;
}
function Oc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yp()) {
        case To:
          return 1;
        case Cc:
          return 4;
        case ii:
        case wp:
          return 16;
        case Ec:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mt = null,
  Oo = null,
  Ya = null;
function Ic() {
  if (Ya) return Ya;
  var e,
    t = Oo,
    n = t.length,
    a,
    i = "value" in mt ? mt.value : mt.textContent,
    r = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (a = 1; a <= o && t[n - a] === i[r - a]; a++);
  return (Ya = i.slice(e, 1 < a ? 1 - a : void 0));
}
function qa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pa() {
  return !0;
}
function Is() {
  return !1;
}
function Se(e) {
  function t(n, a, i, r, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = a),
      (this.nativeEvent = r),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(r) : r[s]));
    return (
      (this.isDefaultPrevented = (
        r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
      )
        ? Pa
        : Is),
      (this.isPropagationStopped = Is),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pa));
      },
      persist: function () {},
      isPersistent: Pa,
    }),
    t
  );
}
var En = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Io = Se(En),
  _a = G({}, En, { view: 0, detail: 0 }),
  Mp = Se(_a),
  ar,
  ir,
  On,
  Pi = G({}, _a, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== On &&
            (On && e.type === "mousemove"
              ? ((ar = e.screenX - On.screenX), (ir = e.screenY - On.screenY))
              : (ir = ar = 0),
            (On = e)),
          ar);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ir;
    },
  }),
  Ls = Se(Pi),
  Op = G({}, Pi, { dataTransfer: 0 }),
  Ip = Se(Op),
  Lp = G({}, _a, { relatedTarget: 0 }),
  rr = Se(Lp),
  Rp = G({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dp = Se(Rp),
  Vp = G({}, En, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Hp = Se(Vp),
  Up = G({}, En, { data: 0 }),
  Rs = Se(Up),
  Fp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Gp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Wp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Yp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wp[e]) ? !!t[e] : !1;
}
function Lo() {
  return Yp;
}
var qp = G({}, _a, {
    key: function (e) {
      if (e.key) {
        var t = Fp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = qa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Gp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lo,
    charCode: function (e) {
      return e.type === "keypress" ? qa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? qa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Qp = Se(qp),
  Zp = G({}, Pi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ds = Se(Zp),
  Xp = G({}, _a, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lo,
  }),
  Jp = Se(Xp),
  Kp = G({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $p = Se(Kp),
  em = G({}, Pi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tm = Se(em),
  nm = [9, 13, 27, 32],
  Ro = tt && "CompositionEvent" in window,
  Yn = null;
tt && "documentMode" in document && (Yn = document.documentMode);
var am = tt && "TextEvent" in window && !Yn,
  Lc = tt && (!Ro || (Yn && 8 < Yn && 11 >= Yn)),
  Vs = " ",
  Hs = !1;
function Rc(e, t) {
  switch (e) {
    case "keyup":
      return nm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Dc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var tn = !1;
function im(e, t) {
  switch (e) {
    case "compositionend":
      return Dc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hs = !0), Vs);
    case "textInput":
      return (e = t.data), e === Vs && Hs ? null : e;
    default:
      return null;
  }
}
function rm(e, t) {
  if (tn)
    return e === "compositionend" || (!Ro && Rc(e, t))
      ? ((e = Ic()), (Ya = Oo = mt = null), (tn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Lc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var om = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!om[e.type] : t === "textarea";
}
function Vc(e, t, n, a) {
  gc(a),
    (t = li(t, "onChange")),
    0 < t.length &&
      ((n = new Io("onChange", "change", null, n, a)),
      e.push({ event: n, listeners: t }));
}
var qn = null,
  ra = null;
function sm(e) {
  Jc(e, 0);
}
function Bi(e) {
  var t = rn(e);
  if (dc(t)) return e;
}
function lm(e, t) {
  if (e === "change") return t;
}
var Hc = !1;
if (tt) {
  var or;
  if (tt) {
    var sr = "oninput" in document;
    if (!sr) {
      var Fs = document.createElement("div");
      Fs.setAttribute("oninput", "return;"),
        (sr = typeof Fs.oninput == "function");
    }
    or = sr;
  } else or = !1;
  Hc = or && (!document.documentMode || 9 < document.documentMode);
}
function Gs() {
  qn && (qn.detachEvent("onpropertychange", Uc), (ra = qn = null));
}
function Uc(e) {
  if (e.propertyName === "value" && Bi(ra)) {
    var t = [];
    Vc(t, ra, e, No(e)), wc(sm, t);
  }
}
function cm(e, t, n) {
  e === "focusin"
    ? (Gs(), (qn = t), (ra = n), qn.attachEvent("onpropertychange", Uc))
    : e === "focusout" && Gs();
}
function dm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bi(ra);
}
function um(e, t) {
  if (e === "click") return Bi(t);
}
function pm(e, t) {
  if (e === "input" || e === "change") return Bi(t);
}
function mm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ve = typeof Object.is == "function" ? Object.is : mm;
function oa(e, t) {
  if (Ve(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    a = Object.keys(t);
  if (n.length !== a.length) return !1;
  for (a = 0; a < n.length; a++) {
    var i = n[a];
    if (!Sr.call(t, i) || !Ve(e[i], t[i])) return !1;
  }
  return !0;
}
function Ws(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ys(e, t) {
  var n = Ws(e);
  e = 0;
  for (var a; n; ) {
    if (n.nodeType === 3) {
      if (((a = e + n.textContent.length), e <= t && a >= t))
        return { node: n, offset: t - e };
      e = a;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ws(n);
  }
}
function Fc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Fc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gc() {
  for (var e = window, t = ti(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ti(e.document);
  }
  return t;
}
function Do(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function fm(e) {
  var t = Gc(),
    n = e.focusedElem,
    a = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Fc(n.ownerDocument.documentElement, n)
  ) {
    if (a !== null && Do(n)) {
      if (
        ((t = a.start),
        (e = a.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          r = Math.min(a.start, i);
        (a = a.end === void 0 ? r : Math.min(a.end, i)),
          !e.extend && r > a && ((i = a), (a = r), (r = i)),
          (i = Ys(n, r));
        var o = Ys(n, a);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          r > a
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vm = tt && "documentMode" in document && 11 >= document.documentMode,
  nn = null,
  Gr = null,
  Qn = null,
  Wr = !1;
function qs(e, t, n) {
  var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wr ||
    nn == null ||
    nn !== ti(a) ||
    ((a = nn),
    "selectionStart" in a && Do(a)
      ? (a = { start: a.selectionStart, end: a.selectionEnd })
      : ((a = (
          (a.ownerDocument && a.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (a = {
          anchorNode: a.anchorNode,
          anchorOffset: a.anchorOffset,
          focusNode: a.focusNode,
          focusOffset: a.focusOffset,
        })),
    (Qn && oa(Qn, a)) ||
      ((Qn = a),
      (a = li(Gr, "onSelect")),
      0 < a.length &&
        ((t = new Io("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: a }),
        (t.target = nn))));
}
function Ba(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var an = {
    animationend: Ba("Animation", "AnimationEnd"),
    animationiteration: Ba("Animation", "AnimationIteration"),
    animationstart: Ba("Animation", "AnimationStart"),
    transitionend: Ba("Transition", "TransitionEnd"),
  },
  lr = {},
  Wc = {};
tt &&
  ((Wc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete an.animationend.animation,
    delete an.animationiteration.animation,
    delete an.animationstart.animation),
  "TransitionEvent" in window || delete an.transitionend.transition);
function Mi(e) {
  if (lr[e]) return lr[e];
  if (!an[e]) return e;
  var t = an[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wc) return (lr[e] = t[n]);
  return e;
}
var Yc = Mi("animationend"),
  qc = Mi("animationiteration"),
  Qc = Mi("animationstart"),
  Zc = Mi("transitionend"),
  Xc = new Map(),
  Qs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Et(e, t) {
  Xc.set(e, t), Zt(t, [e]);
}
for (var cr = 0; cr < Qs.length; cr++) {
  var dr = Qs[cr],
    hm = dr.toLowerCase(),
    gm = dr[0].toUpperCase() + dr.slice(1);
  Et(hm, "on" + gm);
}
Et(Yc, "onAnimationEnd");
Et(qc, "onAnimationIteration");
Et(Qc, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(Zc, "onTransitionEnd");
_n("onMouseEnter", ["mouseout", "mouseover"]);
_n("onMouseLeave", ["mouseout", "mouseover"]);
_n("onPointerEnter", ["pointerout", "pointerover"]);
_n("onPointerLeave", ["pointerout", "pointerover"]);
Zt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Zt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Un =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));
function Zs(e, t, n) {
  var a = e.type || "unknown-event";
  (e.currentTarget = n), hp(a, t, void 0, e), (e.currentTarget = null);
}
function Jc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var a = e[n],
      i = a.event;
    a = a.listeners;
    e: {
      var r = void 0;
      if (t)
        for (var o = a.length - 1; 0 <= o; o--) {
          var s = a[o],
            c = s.instance,
            d = s.currentTarget;
          if (((s = s.listener), c !== r && i.isPropagationStopped())) break e;
          Zs(i, s, d), (r = c);
        }
      else
        for (o = 0; o < a.length; o++) {
          if (
            ((s = a[o]),
            (c = s.instance),
            (d = s.currentTarget),
            (s = s.listener),
            c !== r && i.isPropagationStopped())
          )
            break e;
          Zs(i, s, d), (r = c);
        }
    }
  }
  if (ai) throw ((e = Vr), (ai = !1), (Vr = null), e);
}
function D(e, t) {
  var n = t[Xr];
  n === void 0 && (n = t[Xr] = new Set());
  var a = e + "__bubble";
  n.has(a) || (Kc(t, e, 2, !1), n.add(a));
}
function ur(e, t, n) {
  var a = 0;
  t && (a |= 4), Kc(n, e, a, t);
}
var Ma = "_reactListening" + Math.random().toString(36).slice(2);
function sa(e) {
  if (!e[Ma]) {
    (e[Ma] = !0),
      rc.forEach(function (n) {
        n !== "selectionchange" && (bm.has(n) || ur(n, !1, e), ur(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ma] || ((t[Ma] = !0), ur("selectionchange", !1, t));
  }
}
function Kc(e, t, n, a) {
  switch (Oc(t)) {
    case 1:
      var i = Pp;
      break;
    case 4:
      i = Bp;
      break;
    default:
      i = Mo;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Dr ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    a
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function pr(e, t, n, a, i) {
  var r = a;
  if (!(t & 1) && !(t & 2) && a !== null)
    e: for (;;) {
      if (a === null) return;
      var o = a.tag;
      if (o === 3 || o === 4) {
        var s = a.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (o === 4)
          for (o = a.return; o !== null; ) {
            var c = o.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = o.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = Lt(s)), o === null)) return;
          if (((c = o.tag), c === 5 || c === 6)) {
            a = r = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      a = a.return;
    }
  wc(function () {
    var d = r,
      h = No(n),
      f = [];
    e: {
      var v = Xc.get(e);
      if (v !== void 0) {
        var g = Io,
          b = e;
        switch (e) {
          case "keypress":
            if (qa(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Qp;
            break;
          case "focusin":
            (b = "focus"), (g = rr);
            break;
          case "focusout":
            (b = "blur"), (g = rr);
            break;
          case "beforeblur":
          case "afterblur":
            g = rr;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ls;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Ip;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Jp;
            break;
          case Yc:
          case qc:
          case Qc:
            g = Dp;
            break;
          case Zc:
            g = $p;
            break;
          case "scroll":
            g = Mp;
            break;
          case "wheel":
            g = tm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Hp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ds;
        }
        var y = (t & 4) !== 0,
          z = !y && e === "scroll",
          p = y ? (v !== null ? v + "Capture" : null) : v;
        y = [];
        for (var u = d, m; u !== null; ) {
          m = u;
          var _ = m.stateNode;
          if (
            (m.tag === 5 &&
              _ !== null &&
              ((m = _),
              p !== null && ((_ = ta(u, p)), _ != null && y.push(la(u, _, m)))),
            z)
          )
            break;
          u = u.return;
        }
        0 < y.length &&
          ((v = new g(v, b, null, n, h)), f.push({ event: v, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Lr &&
            (b = n.relatedTarget || n.fromElement) &&
            (Lt(b) || b[nt]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            h.window === h
              ? h
              : (v = h.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          g
            ? ((b = n.relatedTarget || n.toElement),
              (g = d),
              (b = b ? Lt(b) : null),
              b !== null &&
                ((z = Xt(b)), b !== z || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((g = null), (b = d)),
          g !== b)
        ) {
          if (
            ((y = Ls),
            (_ = "onMouseLeave"),
            (p = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ds),
              (_ = "onPointerLeave"),
              (p = "onPointerEnter"),
              (u = "pointer")),
            (z = g == null ? v : rn(g)),
            (m = b == null ? v : rn(b)),
            (v = new y(_, u + "leave", g, n, h)),
            (v.target = z),
            (v.relatedTarget = m),
            (_ = null),
            Lt(h) === d &&
              ((y = new y(p, u + "enter", b, n, h)),
              (y.target = m),
              (y.relatedTarget = z),
              (_ = y)),
            (z = _),
            g && b)
          )
            t: {
              for (y = g, p = b, u = 0, m = y; m; m = Jt(m)) u++;
              for (m = 0, _ = p; _; _ = Jt(_)) m++;
              for (; 0 < u - m; ) (y = Jt(y)), u--;
              for (; 0 < m - u; ) (p = Jt(p)), m--;
              for (; u--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = Jt(y)), (p = Jt(p));
              }
              y = null;
            }
          else y = null;
          g !== null && Xs(f, v, g, y, !1),
            b !== null && z !== null && Xs(f, z, b, y, !0);
        }
      }
      e: {
        if (
          ((v = d ? rn(d) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var x = lm;
        else if (Us(v))
          if (Hc) x = pm;
          else {
            x = dm;
            var C = cm;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (x = um);
        if (x && (x = x(e, d))) {
          Vc(f, x, n, h);
          break e;
        }
        C && C(e, v, d),
          e === "focusout" &&
            (C = v._wrapperState) &&
            C.controlled &&
            v.type === "number" &&
            Pr(v, "number", v.value);
      }
      switch (((C = d ? rn(d) : window), e)) {
        case "focusin":
          (Us(C) || C.contentEditable === "true") &&
            ((nn = C), (Gr = d), (Qn = null));
          break;
        case "focusout":
          Qn = Gr = nn = null;
          break;
        case "mousedown":
          Wr = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Wr = !1), qs(f, n, h);
          break;
        case "selectionchange":
          if (vm) break;
        case "keydown":
        case "keyup":
          qs(f, n, h);
      }
      var E;
      if (Ro)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        tn
          ? Rc(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Lc &&
          n.locale !== "ko" &&
          (tn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && tn && (E = Ic())
            : ((mt = h),
              (Oo = "value" in mt ? mt.value : mt.textContent),
              (tn = !0))),
        (C = li(d, j)),
        0 < C.length &&
          ((j = new Rs(j, e, null, n, h)),
          f.push({ event: j, listeners: C }),
          E ? (j.data = E) : ((E = Dc(n)), E !== null && (j.data = E)))),
        (E = am ? im(e, n) : rm(e, n)) &&
          ((d = li(d, "onBeforeInput")),
          0 < d.length &&
            ((h = new Rs("onBeforeInput", "beforeinput", null, n, h)),
            f.push({ event: h, listeners: d }),
            (h.data = E)));
    }
    Jc(f, t);
  });
}
function la(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function li(e, t) {
  for (var n = t + "Capture", a = []; e !== null; ) {
    var i = e,
      r = i.stateNode;
    i.tag === 5 &&
      r !== null &&
      ((i = r),
      (r = ta(e, n)),
      r != null && a.unshift(la(e, r, i)),
      (r = ta(e, t)),
      r != null && a.push(la(e, r, i))),
      (e = e.return);
  }
  return a;
}
function Jt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xs(e, t, n, a, i) {
  for (var r = t._reactName, o = []; n !== null && n !== a; ) {
    var s = n,
      c = s.alternate,
      d = s.stateNode;
    if (c !== null && c === a) break;
    s.tag === 5 &&
      d !== null &&
      ((s = d),
      i
        ? ((c = ta(n, r)), c != null && o.unshift(la(n, c, s)))
        : i || ((c = ta(n, r)), c != null && o.push(la(n, c, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _m = /\r\n?/g,
  ym = /\u0000|\uFFFD/g;
function Js(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _m,
      `
`
    )
    .replace(ym, "");
}
function Oa(e, t, n) {
  if (((t = Js(t)), Js(e) !== t && n)) throw Error(w(425));
}
function ci() {}
var Yr = null,
  qr = null;
function Qr(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zr = typeof setTimeout == "function" ? setTimeout : void 0,
  wm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ks = typeof Promise == "function" ? Promise : void 0,
  xm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ks < "u"
      ? function (e) {
          return Ks.resolve(null).then(e).catch(km);
        }
      : Zr;
function km(e) {
  setTimeout(function () {
    throw e;
  });
}
function mr(e, t) {
  var n = t,
    a = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (a === 0) {
          e.removeChild(i), ia(t);
          return;
        }
        a--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || a++;
    n = i;
  } while (n);
  ia(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $s(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jn = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + jn,
  ca = "__reactProps$" + jn,
  nt = "__reactContainer$" + jn,
  Xr = "__reactEvents$" + jn,
  Am = "__reactListeners$" + jn,
  Sm = "__reactHandles$" + jn;
function Lt(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $s(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = $s(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ya(e) {
  return (
    (e = e[Fe] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Oi(e) {
  return e[ca] || null;
}
var Jr = [],
  on = -1;
function jt(e) {
  return { current: e };
}
function V(e) {
  0 > on || ((e.current = Jr[on]), (Jr[on] = null), on--);
}
function L(e, t) {
  on++, (Jr[on] = e.current), (e.current = t);
}
var Ct = {},
  se = jt(Ct),
  he = jt(!1),
  Ft = Ct;
function yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var a = e.stateNode;
  if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
    return a.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    r;
  for (r in n) i[r] = t[r];
  return (
    a &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function di() {
  V(he), V(se);
}
function el(e, t, n) {
  if (se.current !== Ct) throw Error(w(168));
  L(se, t), L(he, n);
}
function $c(e, t, n) {
  var a = e.stateNode;
  if (((t = t.childContextTypes), typeof a.getChildContext != "function"))
    return n;
  a = a.getChildContext();
  for (var i in a) if (!(i in t)) throw Error(w(108, cp(e) || "Unknown", i));
  return G({}, n, a);
}
function ui(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ct),
    (Ft = se.current),
    L(se, e),
    L(he, he.current),
    !0
  );
}
function tl(e, t, n) {
  var a = e.stateNode;
  if (!a) throw Error(w(169));
  n
    ? ((e = $c(e, t, Ft)),
      (a.__reactInternalMemoizedMergedChildContext = e),
      V(he),
      V(se),
      L(se, e))
    : V(he),
    L(he, n);
}
var Xe = null,
  Ii = !1,
  fr = !1;
function ed(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function Cm(e) {
  (Ii = !0), ed(e);
}
function zt() {
  if (!fr && Xe !== null) {
    fr = !0;
    var e = 0,
      t = I;
    try {
      var n = Xe;
      for (I = 1; e < n.length; e++) {
        var a = n[e];
        do a = a(!0);
        while (a !== null);
      }
      (Xe = null), (Ii = !1);
    } catch (i) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), Sc(To, zt), i);
    } finally {
      (I = t), (fr = !1);
    }
  }
  return null;
}
var sn = [],
  ln = 0,
  pi = null,
  mi = 0,
  Ee = [],
  je = 0,
  Gt = null,
  Je = 1,
  Ke = "";
function Mt(e, t) {
  (sn[ln++] = mi), (sn[ln++] = pi), (pi = e), (mi = t);
}
function td(e, t, n) {
  (Ee[je++] = Je), (Ee[je++] = Ke), (Ee[je++] = Gt), (Gt = e);
  var a = Je;
  e = Ke;
  var i = 32 - Re(a) - 1;
  (a &= ~(1 << i)), (n += 1);
  var r = 32 - Re(t) + i;
  if (30 < r) {
    var o = i - (i % 5);
    (r = (a & ((1 << o) - 1)).toString(32)),
      (a >>= o),
      (i -= o),
      (Je = (1 << (32 - Re(t) + i)) | (n << i) | a),
      (Ke = r + e);
  } else (Je = (1 << r) | (n << i) | a), (Ke = e);
}
function Vo(e) {
  e.return !== null && (Mt(e, 1), td(e, 1, 0));
}
function Ho(e) {
  for (; e === pi; )
    (pi = sn[--ln]), (sn[ln] = null), (mi = sn[--ln]), (sn[ln] = null);
  for (; e === Gt; )
    (Gt = Ee[--je]),
      (Ee[je] = null),
      (Ke = Ee[--je]),
      (Ee[je] = null),
      (Je = Ee[--je]),
      (Ee[je] = null);
}
var xe = null,
  we = null,
  H = !1,
  Le = null;
function nd(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function nl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (we = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gt !== null ? { id: Je, overflow: Ke } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Kr(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $r(e) {
  if (H) {
    var t = we;
    if (t) {
      var n = t;
      if (!nl(e, t)) {
        if (Kr(e)) throw Error(w(418));
        t = _t(n.nextSibling);
        var a = xe;
        t && nl(e, t)
          ? nd(a, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e));
      }
    } else {
      if (Kr(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e);
    }
  }
}
function al(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Ia(e) {
  if (e !== xe) return !1;
  if (!H) return al(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qr(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Kr(e)) throw (ad(), Error(w(418)));
    for (; t; ) nd(e, t), (t = _t(t.nextSibling));
  }
  if ((al(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = xe ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function ad() {
  for (var e = we; e; ) e = _t(e.nextSibling);
}
function wn() {
  (we = xe = null), (H = !1);
}
function Uo(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var Em = rt.ReactCurrentBatchConfig;
function Oe(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fi = jt(null),
  vi = null,
  cn = null,
  Fo = null;
function Go() {
  Fo = cn = vi = null;
}
function Wo(e) {
  var t = fi.current;
  V(fi), (e._currentValue = t);
}
function eo(e, t, n) {
  for (; e !== null; ) {
    var a = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
        : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function hn(e, t) {
  (vi = e),
    (Fo = cn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Te(e) {
  var t = e._currentValue;
  if (Fo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cn === null)) {
      if (vi === null) throw Error(w(308));
      (cn = e), (vi.dependencies = { lanes: 0, firstContext: e });
    } else cn = cn.next = e;
  return t;
}
var Rt = null;
function Yo(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function id(e, t, n, a) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Yo(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    at(e, a)
  );
}
function at(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var dt = !1;
function qo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t, n) {
  var a = e.updateQueue;
  if (a === null) return null;
  if (((a = a.shared), M & 2)) {
    var i = a.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (a.pending = t),
      at(e, n)
    );
  }
  return (
    (i = a.interleaved),
    i === null ? ((t.next = t), Yo(a)) : ((t.next = i.next), (i.next = t)),
    (a.interleaved = t),
    at(e, n)
  );
}
function Qa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), Po(e, n);
  }
}
function il(e, t) {
  var n = e.updateQueue,
    a = e.alternate;
  if (a !== null && ((a = a.updateQueue), n === a)) {
    var i = null,
      r = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        r === null ? (i = r = o) : (r = r.next = o), (n = n.next);
      } while (n !== null);
      r === null ? (i = r = t) : (r = r.next = t);
    } else i = r = t;
    (n = {
      baseState: a.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: r,
      shared: a.shared,
      effects: a.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hi(e, t, n, a) {
  var i = e.updateQueue;
  dt = !1;
  var r = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var c = s,
      d = c.next;
    (c.next = null), o === null ? (r = d) : (o.next = d), (o = c);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== o &&
        (s === null ? (h.firstBaseUpdate = d) : (s.next = d),
        (h.lastBaseUpdate = c)));
  }
  if (r !== null) {
    var f = i.baseState;
    (o = 0), (h = d = c = null), (s = r);
    do {
      var v = s.lane,
        g = s.eventTime;
      if ((a & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var b = e,
            y = s;
          switch (((v = t), (g = n), y.tag)) {
            case 1:
              if (((b = y.payload), typeof b == "function")) {
                f = b.call(g, f, v);
                break e;
              }
              f = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = y.payload),
                (v = typeof b == "function" ? b.call(g, f, v) : b),
                v == null)
              )
                break e;
              f = G({}, f, v);
              break e;
            case 2:
              dt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [s]) : v.push(s));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((d = h = g), (c = f)) : (h = h.next = g),
          (o |= v);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (v = s),
          (s = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (c = f),
      (i.baseState = c),
      (i.firstBaseUpdate = d),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else r === null && (i.shared.lanes = 0);
    (Yt |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function rl(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var a = e[t],
        i = a.callback;
      if (i !== null) {
        if (((a.callback = null), (a = n), typeof i != "function"))
          throw Error(w(191, i));
        i.call(a);
      }
    }
}
var od = new ic.Component().refs;
function to(e, t, n, a) {
  (t = e.memoizedState),
    (n = n(a, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Li = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var a = de(),
      i = xt(e),
      r = et(a, i);
    (r.payload = t),
      n != null && (r.callback = n),
      (t = yt(e, r, i)),
      t !== null && (De(t, e, i, a), Qa(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var a = de(),
      i = xt(e),
      r = et(a, i);
    (r.tag = 1),
      (r.payload = t),
      n != null && (r.callback = n),
      (t = yt(e, r, i)),
      t !== null && (De(t, e, i, a), Qa(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      a = xt(e),
      i = et(n, a);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = yt(e, i, a)),
      t !== null && (De(t, e, a, n), Qa(t, e, a));
  },
};
function ol(e, t, n, a, i, r, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(a, r, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !oa(n, a) || !oa(i, r)
      : !0
  );
}
function sd(e, t, n) {
  var a = !1,
    i = Ct,
    r = t.contextType;
  return (
    typeof r == "object" && r !== null
      ? (r = Te(r))
      : ((i = ge(t) ? Ft : se.current),
        (a = t.contextTypes),
        (r = (a = a != null) ? yn(e, i) : Ct)),
    (t = new t(n, r)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Li),
    (e.stateNode = t),
    (t._reactInternals = e),
    a &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    t
  );
}
function sl(e, t, n, a) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, a),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, a),
    t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}
function no(e, t, n, a) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = od), qo(e);
  var r = t.contextType;
  typeof r == "object" && r !== null
    ? (i.context = Te(r))
    : ((r = ge(t) ? Ft : se.current), (i.context = yn(e, r))),
    (i.state = e.memoizedState),
    (r = t.getDerivedStateFromProps),
    typeof r == "function" && (to(e, t, r, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Li.enqueueReplaceState(i, i.state, null),
      hi(e, n, i, a),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function In(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var a = n.stateNode;
      }
      if (!a) throw Error(w(147, e));
      var i = a,
        r = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === r
        ? t.ref
        : ((t = function (o) {
            var s = i.refs;
            s === od && (s = i.refs = {}),
              o === null ? delete s[r] : (s[r] = o);
          }),
          (t._stringRef = r),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function La(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ll(e) {
  var t = e._init;
  return t(e._payload);
}
function ld(e) {
  function t(p, u) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [u]), (p.flags |= 16)) : m.push(u);
    }
  }
  function n(p, u) {
    if (!e) return null;
    for (; u !== null; ) t(p, u), (u = u.sibling);
    return null;
  }
  function a(p, u) {
    for (p = new Map(); u !== null; )
      u.key !== null ? p.set(u.key, u) : p.set(u.index, u), (u = u.sibling);
    return p;
  }
  function i(p, u) {
    return (p = kt(p, u)), (p.index = 0), (p.sibling = null), p;
  }
  function r(p, u, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < u ? ((p.flags |= 2), u) : m)
            : ((p.flags |= 2), u))
        : ((p.flags |= 1048576), u)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, u, m, _) {
    return u === null || u.tag !== 6
      ? ((u = wr(m, p.mode, _)), (u.return = p), u)
      : ((u = i(u, m)), (u.return = p), u);
  }
  function c(p, u, m, _) {
    var x = m.type;
    return x === en
      ? h(p, u, m.props.children, _, m.key)
      : u !== null &&
        (u.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === ct &&
            ll(x) === u.type))
      ? ((_ = i(u, m.props)), (_.ref = In(p, u, m)), (_.return = p), _)
      : ((_ = ei(m.type, m.key, m.props, null, p.mode, _)),
        (_.ref = In(p, u, m)),
        (_.return = p),
        _);
  }
  function d(p, u, m, _) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== m.containerInfo ||
      u.stateNode.implementation !== m.implementation
      ? ((u = xr(m, p.mode, _)), (u.return = p), u)
      : ((u = i(u, m.children || [])), (u.return = p), u);
  }
  function h(p, u, m, _, x) {
    return u === null || u.tag !== 7
      ? ((u = Ht(m, p.mode, _, x)), (u.return = p), u)
      : ((u = i(u, m)), (u.return = p), u);
  }
  function f(p, u, m) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = wr("" + u, p.mode, m)), (u.return = p), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Ca:
          return (
            (m = ei(u.type, u.key, u.props, null, p.mode, m)),
            (m.ref = In(p, null, u)),
            (m.return = p),
            m
          );
        case $t:
          return (u = xr(u, p.mode, m)), (u.return = p), u;
        case ct:
          var _ = u._init;
          return f(p, _(u._payload), m);
      }
      if (Vn(u) || Tn(u))
        return (u = Ht(u, p.mode, m, null)), (u.return = p), u;
      La(p, u);
    }
    return null;
  }
  function v(p, u, m, _) {
    var x = u !== null ? u.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return x !== null ? null : s(p, u, "" + m, _);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ca:
          return m.key === x ? c(p, u, m, _) : null;
        case $t:
          return m.key === x ? d(p, u, m, _) : null;
        case ct:
          return (x = m._init), v(p, u, x(m._payload), _);
      }
      if (Vn(m) || Tn(m)) return x !== null ? null : h(p, u, m, _, null);
      La(p, m);
    }
    return null;
  }
  function g(p, u, m, _, x) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (p = p.get(m) || null), s(u, p, "" + _, x);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Ca:
          return (p = p.get(_.key === null ? m : _.key) || null), c(u, p, _, x);
        case $t:
          return (p = p.get(_.key === null ? m : _.key) || null), d(u, p, _, x);
        case ct:
          var C = _._init;
          return g(p, u, m, C(_._payload), x);
      }
      if (Vn(_) || Tn(_)) return (p = p.get(m) || null), h(u, p, _, x, null);
      La(u, _);
    }
    return null;
  }
  function b(p, u, m, _) {
    for (
      var x = null, C = null, E = u, j = (u = 0), R = null;
      E !== null && j < m.length;
      j++
    ) {
      E.index > j ? ((R = E), (E = null)) : (R = E.sibling);
      var T = v(p, E, m[j], _);
      if (T === null) {
        E === null && (E = R);
        break;
      }
      e && E && T.alternate === null && t(p, E),
        (u = r(T, u, j)),
        C === null ? (x = T) : (C.sibling = T),
        (C = T),
        (E = R);
    }
    if (j === m.length) return n(p, E), H && Mt(p, j), x;
    if (E === null) {
      for (; j < m.length; j++)
        (E = f(p, m[j], _)),
          E !== null &&
            ((u = r(E, u, j)), C === null ? (x = E) : (C.sibling = E), (C = E));
      return H && Mt(p, j), x;
    }
    for (E = a(p, E); j < m.length; j++)
      (R = g(E, p, j, m[j], _)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? j : R.key),
          (u = r(R, u, j)),
          C === null ? (x = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        E.forEach(function (_e) {
          return t(p, _e);
        }),
      H && Mt(p, j),
      x
    );
  }
  function y(p, u, m, _) {
    var x = Tn(m);
    if (typeof x != "function") throw Error(w(150));
    if (((m = x.call(m)), m == null)) throw Error(w(151));
    for (
      var C = (x = null), E = u, j = (u = 0), R = null, T = m.next();
      E !== null && !T.done;
      j++, T = m.next()
    ) {
      E.index > j ? ((R = E), (E = null)) : (R = E.sibling);
      var _e = v(p, E, T.value, _);
      if (_e === null) {
        E === null && (E = R);
        break;
      }
      e && E && _e.alternate === null && t(p, E),
        (u = r(_e, u, j)),
        C === null ? (x = _e) : (C.sibling = _e),
        (C = _e),
        (E = R);
    }
    if (T.done) return n(p, E), H && Mt(p, j), x;
    if (E === null) {
      for (; !T.done; j++, T = m.next())
        (T = f(p, T.value, _)),
          T !== null &&
            ((u = r(T, u, j)), C === null ? (x = T) : (C.sibling = T), (C = T));
      return H && Mt(p, j), x;
    }
    for (E = a(p, E); !T.done; j++, T = m.next())
      (T = g(E, p, j, T.value, _)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? j : T.key),
          (u = r(T, u, j)),
          C === null ? (x = T) : (C.sibling = T),
          (C = T));
    return (
      e &&
        E.forEach(function (Nt) {
          return t(p, Nt);
        }),
      H && Mt(p, j),
      x
    );
  }
  function z(p, u, m, _) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === en &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ca:
          e: {
            for (var x = m.key, C = u; C !== null; ) {
              if (C.key === x) {
                if (((x = m.type), x === en)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (u = i(C, m.props.children)),
                      (u.return = p),
                      (p = u);
                    break e;
                  }
                } else if (
                  C.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === ct &&
                    ll(x) === C.type)
                ) {
                  n(p, C.sibling),
                    (u = i(C, m.props)),
                    (u.ref = In(p, C, m)),
                    (u.return = p),
                    (p = u);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            m.type === en
              ? ((u = Ht(m.props.children, p.mode, _, m.key)),
                (u.return = p),
                (p = u))
              : ((_ = ei(m.type, m.key, m.props, null, p.mode, _)),
                (_.ref = In(p, u, m)),
                (_.return = p),
                (p = _));
          }
          return o(p);
        case $t:
          e: {
            for (C = m.key; u !== null; ) {
              if (u.key === C)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === m.containerInfo &&
                  u.stateNode.implementation === m.implementation
                ) {
                  n(p, u.sibling),
                    (u = i(u, m.children || [])),
                    (u.return = p),
                    (p = u);
                  break e;
                } else {
                  n(p, u);
                  break;
                }
              else t(p, u);
              u = u.sibling;
            }
            (u = xr(m, p.mode, _)), (u.return = p), (p = u);
          }
          return o(p);
        case ct:
          return (C = m._init), z(p, u, C(m._payload), _);
      }
      if (Vn(m)) return b(p, u, m, _);
      if (Tn(m)) return y(p, u, m, _);
      La(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        u !== null && u.tag === 6
          ? (n(p, u.sibling), (u = i(u, m)), (u.return = p), (p = u))
          : (n(p, u), (u = wr(m, p.mode, _)), (u.return = p), (p = u)),
        o(p))
      : n(p, u);
  }
  return z;
}
var xn = ld(!0),
  cd = ld(!1),
  wa = {},
  qe = jt(wa),
  da = jt(wa),
  ua = jt(wa);
function Dt(e) {
  if (e === wa) throw Error(w(174));
  return e;
}
function Qo(e, t) {
  switch ((L(ua, t), L(da, e), L(qe, wa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mr(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Mr(t, e));
  }
  V(qe), L(qe, t);
}
function kn() {
  V(qe), V(da), V(ua);
}
function dd(e) {
  Dt(ua.current);
  var t = Dt(qe.current),
    n = Mr(t, e.type);
  t !== n && (L(da, e), L(qe, n));
}
function Zo(e) {
  da.current === e && (V(qe), V(da));
}
var U = jt(0);
function gi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var vr = [];
function Xo() {
  for (var e = 0; e < vr.length; e++)
    vr[e]._workInProgressVersionPrimary = null;
  vr.length = 0;
}
var Za = rt.ReactCurrentDispatcher,
  hr = rt.ReactCurrentBatchConfig,
  Wt = 0,
  F = null,
  Z = null,
  $ = null,
  bi = !1,
  Zn = !1,
  pa = 0,
  jm = 0;
function ie() {
  throw Error(w(321));
}
function Jo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ve(e[n], t[n])) return !1;
  return !0;
}
function Ko(e, t, n, a, i, r) {
  if (
    ((Wt = r),
    (F = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Za.current = e === null || e.memoizedState === null ? Pm : Bm),
    (e = n(a, i)),
    Zn)
  ) {
    r = 0;
    do {
      if (((Zn = !1), (pa = 0), 25 <= r)) throw Error(w(301));
      (r += 1),
        ($ = Z = null),
        (t.updateQueue = null),
        (Za.current = Mm),
        (e = n(a, i));
    } while (Zn);
  }
  if (
    ((Za.current = _i),
    (t = Z !== null && Z.next !== null),
    (Wt = 0),
    ($ = Z = F = null),
    (bi = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function $o() {
  var e = pa !== 0;
  return (pa = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return $ === null ? (F.memoizedState = $ = e) : ($ = $.next = e), $;
}
function Pe() {
  if (Z === null) {
    var e = F.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = $ === null ? F.memoizedState : $.next;
  if (t !== null) ($ = t), (Z = e);
  else {
    if (e === null) throw Error(w(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      $ === null ? (F.memoizedState = $ = e) : ($ = $.next = e);
  }
  return $;
}
function ma(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gr(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var a = Z,
    i = a.baseQueue,
    r = n.pending;
  if (r !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = r.next), (r.next = o);
    }
    (a.baseQueue = i = r), (n.pending = null);
  }
  if (i !== null) {
    (r = i.next), (a = a.baseState);
    var s = (o = null),
      c = null,
      d = r;
    do {
      var h = d.lane;
      if ((Wt & h) === h)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (a = d.hasEagerState ? d.eagerState : e(a, d.action));
      else {
        var f = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        c === null ? ((s = c = f), (o = a)) : (c = c.next = f),
          (F.lanes |= h),
          (Yt |= h);
      }
      d = d.next;
    } while (d !== null && d !== r);
    c === null ? (o = a) : (c.next = s),
      Ve(a, t.memoizedState) || (ve = !0),
      (t.memoizedState = a),
      (t.baseState = o),
      (t.baseQueue = c),
      (n.lastRenderedState = a);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (r = i.lane), (F.lanes |= r), (Yt |= r), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function br(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var a = n.dispatch,
    i = n.pending,
    r = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (r = e(r, o.action)), (o = o.next);
    while (o !== i);
    Ve(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      t.baseQueue === null && (t.baseState = r),
      (n.lastRenderedState = r);
  }
  return [r, a];
}
function ud() {}
function pd(e, t) {
  var n = F,
    a = Pe(),
    i = t(),
    r = !Ve(a.memoizedState, i);
  if (
    (r && ((a.memoizedState = i), (ve = !0)),
    (a = a.queue),
    es(vd.bind(null, n, a, e), [e]),
    a.getSnapshot !== t || r || ($ !== null && $.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fa(9, fd.bind(null, n, a, i, t), void 0, null),
      ee === null)
    )
      throw Error(w(349));
    Wt & 30 || md(n, t, i);
  }
  return i;
}
function md(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = F.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (F.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fd(e, t, n, a) {
  (t.value = n), (t.getSnapshot = a), hd(t) && gd(e);
}
function vd(e, t, n) {
  return n(function () {
    hd(t) && gd(e);
  });
}
function hd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ve(e, n);
  } catch {
    return !0;
  }
}
function gd(e) {
  var t = at(e, 1);
  t !== null && De(t, e, 1, -1);
}
function cl(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ma,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Tm.bind(null, F, e)),
    [t.memoizedState, e]
  );
}
function fa(e, t, n, a) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: a, next: null }),
    (t = F.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (F.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e))),
    e
  );
}
function bd() {
  return Pe().memoizedState;
}
function Xa(e, t, n, a) {
  var i = Ue();
  (F.flags |= e),
    (i.memoizedState = fa(1 | t, n, void 0, a === void 0 ? null : a));
}
function Ri(e, t, n, a) {
  var i = Pe();
  a = a === void 0 ? null : a;
  var r = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((r = o.destroy), a !== null && Jo(a, o.deps))) {
      i.memoizedState = fa(t, n, r, a);
      return;
    }
  }
  (F.flags |= e), (i.memoizedState = fa(1 | t, n, r, a));
}
function dl(e, t) {
  return Xa(8390656, 8, e, t);
}
function es(e, t) {
  return Ri(2048, 8, e, t);
}
function _d(e, t) {
  return Ri(4, 2, e, t);
}
function yd(e, t) {
  return Ri(4, 4, e, t);
}
function wd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ri(4, 4, wd.bind(null, t, e), n)
  );
}
function ts() {}
function kd(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && Jo(t, a[1])
    ? a[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ad(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && Jo(t, a[1])
    ? a[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sd(e, t, n) {
  return Wt & 21
    ? (Ve(n, t) || ((n = jc()), (F.lanes |= n), (Yt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function zm(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var a = hr.transition;
  hr.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (hr.transition = a);
  }
}
function Cd() {
  return Pe().memoizedState;
}
function Nm(e, t, n) {
  var a = xt(e);
  if (
    ((n = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ed(e))
  )
    jd(t, n);
  else if (((n = id(e, t, n, a)), n !== null)) {
    var i = de();
    De(n, e, a, i), zd(n, t, a);
  }
}
function Tm(e, t, n) {
  var a = xt(e),
    i = { lane: a, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ed(e)) jd(t, i);
  else {
    var r = e.alternate;
    if (
      e.lanes === 0 &&
      (r === null || r.lanes === 0) &&
      ((r = t.lastRenderedReducer), r !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = r(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Ve(s, o))) {
          var c = t.interleaved;
          c === null
            ? ((i.next = i), Yo(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = id(e, t, i, a)),
      n !== null && ((i = de()), De(n, e, a, i), zd(n, t, a));
  }
}
function Ed(e) {
  var t = e.alternate;
  return e === F || (t !== null && t === F);
}
function jd(e, t) {
  Zn = bi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zd(e, t, n) {
  if (n & 4194240) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), Po(e, n);
  }
}
var _i = {
    readContext: Te,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  Pm = {
    readContext: Te,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Te,
    useEffect: dl,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xa(4194308, 4, wd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var a = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (a.memoizedState = a.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (a.queue = e),
        (e = e.dispatch = Nm.bind(null, F, e)),
        [a.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: cl,
    useDebugValue: ts,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = cl(!1),
        t = e[0];
      return (e = zm.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var a = F,
        i = Ue();
      if (H) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(w(349));
        Wt & 30 || md(a, t, n);
      }
      i.memoizedState = n;
      var r = { value: n, getSnapshot: t };
      return (
        (i.queue = r),
        dl(vd.bind(null, a, r, e), [e]),
        (a.flags |= 2048),
        fa(9, fd.bind(null, a, r, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = ee.identifierPrefix;
      if (H) {
        var n = Ke,
          a = Je;
        (n = (a & ~(1 << (32 - Re(a) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pa++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Bm = {
    readContext: Te,
    useCallback: kd,
    useContext: Te,
    useEffect: es,
    useImperativeHandle: xd,
    useInsertionEffect: _d,
    useLayoutEffect: yd,
    useMemo: Ad,
    useReducer: gr,
    useRef: bd,
    useState: function () {
      return gr(ma);
    },
    useDebugValue: ts,
    useDeferredValue: function (e) {
      var t = Pe();
      return Sd(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = gr(ma)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: ud,
    useSyncExternalStore: pd,
    useId: Cd,
    unstable_isNewReconciler: !1,
  },
  Mm = {
    readContext: Te,
    useCallback: kd,
    useContext: Te,
    useEffect: es,
    useImperativeHandle: xd,
    useInsertionEffect: _d,
    useLayoutEffect: yd,
    useMemo: Ad,
    useReducer: br,
    useRef: bd,
    useState: function () {
      return br(ma);
    },
    useDebugValue: ts,
    useDeferredValue: function (e) {
      var t = Pe();
      return Z === null ? (t.memoizedState = e) : Sd(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = br(ma)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: ud,
    useSyncExternalStore: pd,
    useId: Cd,
    unstable_isNewReconciler: !1,
  };
function An(e, t) {
  try {
    var n = "",
      a = t;
    do (n += lp(a)), (a = a.return);
    while (a);
    var i = n;
  } catch (r) {
    i =
      `
Error generating stack: ` +
      r.message +
      `
` +
      r.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function _r(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Om = typeof WeakMap == "function" ? WeakMap : Map;
function Nd(e, t, n) {
  (n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var a = t.value;
  return (
    (n.callback = function () {
      wi || ((wi = !0), (fo = a)), ao(e, t);
    }),
    n
  );
}
function Td(e, t, n) {
  (n = et(-1, n)), (n.tag = 3);
  var a = e.type.getDerivedStateFromError;
  if (typeof a == "function") {
    var i = t.value;
    (n.payload = function () {
      return a(i);
    }),
      (n.callback = function () {
        ao(e, t);
      });
  }
  var r = e.stateNode;
  return (
    r !== null &&
      typeof r.componentDidCatch == "function" &&
      (n.callback = function () {
        ao(e, t),
          typeof a != "function" &&
            (wt === null ? (wt = new Set([this])) : wt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ul(e, t, n) {
  var a = e.pingCache;
  if (a === null) {
    a = e.pingCache = new Om();
    var i = new Set();
    a.set(t, i);
  } else (i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i));
  i.has(n) || (i.add(n), (e = Zm.bind(null, e, t, n)), t.then(e, e));
}
function pl(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ml(e, t, n, a, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = et(-1, 1)), (t.tag = 2), yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Im = rt.ReactCurrentOwner,
  ve = !1;
function ce(e, t, n, a) {
  t.child = e === null ? cd(t, null, n, a) : xn(t, e.child, n, a);
}
function fl(e, t, n, a, i) {
  n = n.render;
  var r = t.ref;
  return (
    hn(t, i),
    (a = Ko(e, t, n, a, r, i)),
    (n = $o()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (H && n && Vo(t), (t.flags |= 1), ce(e, t, a, i), t.child)
  );
}
function vl(e, t, n, a, i) {
  if (e === null) {
    var r = n.type;
    return typeof r == "function" &&
      !cs(r) &&
      r.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = r), Pd(e, t, r, a, i))
      : ((e = ei(n.type, null, a, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((r = e.child), !(e.lanes & i))) {
    var o = r.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : oa), n(o, a) && e.ref === t.ref)
    )
      return it(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = kt(r, a)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pd(e, t, n, a, i) {
  if (e !== null) {
    var r = e.memoizedProps;
    if (oa(r, a) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = a = r), (e.lanes & i) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), it(e, t, i);
  }
  return io(e, t, n, a, i);
}
function Bd(e, t, n) {
  var a = t.pendingProps,
    i = a.children,
    r = e !== null ? e.memoizedState : null;
  if (a.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        L(un, ye),
        (ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = r !== null ? r.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          L(un, ye),
          (ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (a = r !== null ? r.baseLanes : n),
        L(un, ye),
        (ye |= a);
    }
  else
    r !== null ? ((a = r.baseLanes | n), (t.memoizedState = null)) : (a = n),
      L(un, ye),
      (ye |= a);
  return ce(e, t, i, n), t.child;
}
function Md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function io(e, t, n, a, i) {
  var r = ge(n) ? Ft : se.current;
  return (
    (r = yn(t, r)),
    hn(t, i),
    (n = Ko(e, t, n, a, r, i)),
    (a = $o()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (H && a && Vo(t), (t.flags |= 1), ce(e, t, n, i), t.child)
  );
}
function hl(e, t, n, a, i) {
  if (ge(n)) {
    var r = !0;
    ui(t);
  } else r = !1;
  if ((hn(t, i), t.stateNode === null))
    Ja(e, t), sd(t, n, a), no(t, n, a, i), (a = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var c = o.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Te(d))
      : ((d = ge(n) ? Ft : se.current), (d = yn(t, d)));
    var h = n.getDerivedStateFromProps,
      f =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== a || c !== d) && sl(t, o, a, d)),
      (dt = !1);
    var v = t.memoizedState;
    (o.state = v),
      hi(t, a, o, i),
      (c = t.memoizedState),
      s !== a || v !== c || he.current || dt
        ? (typeof h == "function" && (to(t, n, h, a), (c = t.memoizedState)),
          (s = dt || ol(t, n, s, a, v, c, d))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = a),
              (t.memoizedState = c)),
          (o.props = a),
          (o.state = c),
          (o.context = d),
          (a = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (a = !1));
  } else {
    (o = t.stateNode),
      rd(e, t),
      (s = t.memoizedProps),
      (d = t.type === t.elementType ? s : Oe(t.type, s)),
      (o.props = d),
      (f = t.pendingProps),
      (v = o.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Te(c))
        : ((c = ge(n) ? Ft : se.current), (c = yn(t, c)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== f || v !== c) && sl(t, o, a, c)),
      (dt = !1),
      (v = t.memoizedState),
      (o.state = v),
      hi(t, a, o, i);
    var b = t.memoizedState;
    s !== f || v !== b || he.current || dt
      ? (typeof g == "function" && (to(t, n, g, a), (b = t.memoizedState)),
        (d = dt || ol(t, n, d, a, v, b, c) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(a, b, c),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(a, b, c)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = a),
            (t.memoizedState = b)),
        (o.props = a),
        (o.state = b),
        (o.context = c),
        (a = d))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (a = !1));
  }
  return ro(e, t, n, a, r, i);
}
function ro(e, t, n, a, i, r) {
  Md(e, t);
  var o = (t.flags & 128) !== 0;
  if (!a && !o) return i && tl(t, n, !1), it(e, t, r);
  (a = t.stateNode), (Im.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : a.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = xn(t, e.child, null, r)), (t.child = xn(t, null, s, r)))
      : ce(e, t, s, r),
    (t.memoizedState = a.state),
    i && tl(t, n, !0),
    t.child
  );
}
function Od(e) {
  var t = e.stateNode;
  t.pendingContext
    ? el(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && el(e, t.context, !1),
    Qo(e, t.containerInfo);
}
function gl(e, t, n, a, i) {
  return wn(), Uo(i), (t.flags |= 256), ce(e, t, n, a), t.child;
}
var oo = { dehydrated: null, treeContext: null, retryLane: 0 };
function so(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Id(e, t, n) {
  var a = t.pendingProps,
    i = U.current,
    r = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((r = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    L(U, i & 1),
    e === null)
  )
    return (
      $r(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = a.children),
          (e = a.fallback),
          r
            ? ((a = t.mode),
              (r = t.child),
              (o = { mode: "hidden", children: o }),
              !(a & 1) && r !== null
                ? ((r.childLanes = 0), (r.pendingProps = o))
                : (r = Hi(o, a, 0, null)),
              (e = Ht(e, a, n, null)),
              (r.return = t),
              (e.return = t),
              (r.sibling = e),
              (t.child = r),
              (t.child.memoizedState = so(n)),
              (t.memoizedState = oo),
              e)
            : ns(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Lm(e, t, o, a, s, i, n);
  if (r) {
    (r = a.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
    var c = { mode: "hidden", children: a.children };
    return (
      !(o & 1) && t.child !== i
        ? ((a = t.child),
          (a.childLanes = 0),
          (a.pendingProps = c),
          (t.deletions = null))
        : ((a = kt(i, c)), (a.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (r = kt(s, r)) : ((r = Ht(r, o, n, null)), (r.flags |= 2)),
      (r.return = t),
      (a.return = t),
      (a.sibling = r),
      (t.child = a),
      (a = r),
      (r = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? so(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (r.memoizedState = o),
      (r.childLanes = e.childLanes & ~n),
      (t.memoizedState = oo),
      a
    );
  }
  return (
    (r = e.child),
    (e = r.sibling),
    (a = kt(r, { mode: "visible", children: a.children })),
    !(t.mode & 1) && (a.lanes = n),
    (a.return = t),
    (a.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = a),
    (t.memoizedState = null),
    a
  );
}
function ns(e, t) {
  return (
    (t = Hi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ra(e, t, n, a) {
  return (
    a !== null && Uo(a),
    xn(t, e.child, null, n),
    (e = ns(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Lm(e, t, n, a, i, r, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (a = _r(Error(w(422)))), Ra(e, t, o, a))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((r = a.fallback),
        (i = t.mode),
        (a = Hi({ mode: "visible", children: a.children }, i, 0, null)),
        (r = Ht(r, i, o, null)),
        (r.flags |= 2),
        (a.return = t),
        (r.return = t),
        (a.sibling = r),
        (t.child = a),
        t.mode & 1 && xn(t, e.child, null, o),
        (t.child.memoizedState = so(o)),
        (t.memoizedState = oo),
        r);
  if (!(t.mode & 1)) return Ra(e, t, o, null);
  if (i.data === "$!") {
    if (((a = i.nextSibling && i.nextSibling.dataset), a)) var s = a.dgst;
    return (a = s), (r = Error(w(419))), (a = _r(r, a, void 0)), Ra(e, t, o, a);
  }
  if (((s = (o & e.childLanes) !== 0), ve || s)) {
    if (((a = ee), a !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (a.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== r.retryLane &&
          ((r.retryLane = i), at(e, i), De(a, e, i, -1));
    }
    return ls(), (a = _r(Error(w(421)))), Ra(e, t, o, a);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Xm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = r.treeContext),
      (we = _t(i.nextSibling)),
      (xe = t),
      (H = !0),
      (Le = null),
      e !== null &&
        ((Ee[je++] = Je),
        (Ee[je++] = Ke),
        (Ee[je++] = Gt),
        (Je = e.id),
        (Ke = e.overflow),
        (Gt = t)),
      (t = ns(t, a.children)),
      (t.flags |= 4096),
      t);
}
function bl(e, t, n) {
  e.lanes |= t;
  var a = e.alternate;
  a !== null && (a.lanes |= t), eo(e.return, t, n);
}
function yr(e, t, n, a, i) {
  var r = e.memoizedState;
  r === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: n,
        tailMode: i,
      })
    : ((r.isBackwards = t),
      (r.rendering = null),
      (r.renderingStartTime = 0),
      (r.last = a),
      (r.tail = n),
      (r.tailMode = i));
}
function Ld(e, t, n) {
  var a = t.pendingProps,
    i = a.revealOrder,
    r = a.tail;
  if ((ce(e, t, a.children, n), (a = U.current), a & 2))
    (a = (a & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bl(e, n, t);
        else if (e.tag === 19) bl(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    a &= 1;
  }
  if ((L(U, a), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && gi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          yr(t, !1, i, n, r);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && gi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        yr(t, !0, n, null, r);
        break;
      case "together":
        yr(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ja(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Rm(e, t, n) {
  switch (t.tag) {
    case 3:
      Od(t), wn();
      break;
    case 5:
      dd(t);
      break;
    case 1:
      ge(t.type) && ui(t);
      break;
    case 4:
      Qo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var a = t.type._context,
        i = t.memoizedProps.value;
      L(fi, a._currentValue), (a._currentValue = i);
      break;
    case 13:
      if (((a = t.memoizedState), a !== null))
        return a.dehydrated !== null
          ? (L(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Id(e, t, n)
          : (L(U, U.current & 1),
            (e = it(e, t, n)),
            e !== null ? e.sibling : null);
      L(U, U.current & 1);
      break;
    case 19:
      if (((a = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (a) return Ld(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        L(U, U.current),
        a)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bd(e, t, n);
  }
  return it(e, t, n);
}
var Rd, lo, Dd, Vd;
Rd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
lo = function () {};
Dd = function (e, t, n, a) {
  var i = e.memoizedProps;
  if (i !== a) {
    (e = t.stateNode), Dt(qe.current);
    var r = null;
    switch (n) {
      case "input":
        (i = Nr(e, i)), (a = Nr(e, a)), (r = []);
        break;
      case "select":
        (i = G({}, i, { value: void 0 })),
          (a = G({}, a, { value: void 0 })),
          (r = []);
        break;
      case "textarea":
        (i = Br(e, i)), (a = Br(e, a)), (r = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof a.onClick == "function" &&
          (e.onclick = ci);
    }
    Or(n, a);
    var o;
    n = null;
    for (d in i)
      if (!a.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
        if (d === "style") {
          var s = i[d];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            ($n.hasOwnProperty(d)
              ? r || (r = [])
              : (r = r || []).push(d, null));
    for (d in a) {
      var c = a[d];
      if (
        ((s = i != null ? i[d] : void 0),
        a.hasOwnProperty(d) && c !== s && (c != null || s != null))
      )
        if (d === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (c && c.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in c)
              c.hasOwnProperty(o) &&
                s[o] !== c[o] &&
                (n || (n = {}), (n[o] = c[o]));
          } else n || (r || (r = []), r.push(d, n)), (n = c);
        else
          d === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (s = s ? s.__html : void 0),
              c != null && s !== c && (r = r || []).push(d, c))
            : d === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (r = r || []).push(d, "" + c)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              ($n.hasOwnProperty(d)
                ? (c != null && d === "onScroll" && D("scroll", e),
                  r || s === c || (r = []))
                : (r = r || []).push(d, c));
    }
    n && (r = r || []).push("style", n);
    var d = r;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Vd = function (e, t, n, a) {
  n !== a && (t.flags |= 4);
};
function Ln(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var a = null; n !== null; )
          n.alternate !== null && (a = n), (n = n.sibling);
        a === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (a.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    a = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (a |= i.subtreeFlags & 14680064),
        (a |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (a |= i.subtreeFlags),
        (a |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= a), (e.childLanes = n), t;
}
function Dm(e, t, n) {
  var a = t.pendingProps;
  switch ((Ho(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return ge(t.type) && di(), re(t), null;
    case 3:
      return (
        (a = t.stateNode),
        kn(),
        V(he),
        V(se),
        Xo(),
        a.pendingContext &&
          ((a.context = a.pendingContext), (a.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ia(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Le !== null && (go(Le), (Le = null)))),
        lo(e, t),
        re(t),
        null
      );
    case 5:
      Zo(t);
      var i = Dt(ua.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Dd(e, t, n, a, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(w(166));
          return re(t), null;
        }
        if (((e = Dt(qe.current)), Ia(t))) {
          (a = t.stateNode), (n = t.type);
          var r = t.memoizedProps;
          switch (((a[Fe] = t), (a[ca] = r), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", a), D("close", a);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", a);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Un.length; i++) D(Un[i], a);
              break;
            case "source":
              D("error", a);
              break;
            case "img":
            case "image":
            case "link":
              D("error", a), D("load", a);
              break;
            case "details":
              D("toggle", a);
              break;
            case "input":
              Es(a, r), D("invalid", a);
              break;
            case "select":
              (a._wrapperState = { wasMultiple: !!r.multiple }),
                D("invalid", a);
              break;
            case "textarea":
              zs(a, r), D("invalid", a);
          }
          Or(n, r), (i = null);
          for (var o in r)
            if (r.hasOwnProperty(o)) {
              var s = r[o];
              o === "children"
                ? typeof s == "string"
                  ? a.textContent !== s &&
                    (r.suppressHydrationWarning !== !0 &&
                      Oa(a.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    a.textContent !== "" + s &&
                    (r.suppressHydrationWarning !== !0 &&
                      Oa(a.textContent, s, e),
                    (i = ["children", "" + s]))
                : $n.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  D("scroll", a);
            }
          switch (n) {
            case "input":
              Ea(a), js(a, r, !0);
              break;
            case "textarea":
              Ea(a), Ns(a);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof r.onClick == "function" && (a.onclick = ci);
          }
          (a = i), (t.updateQueue = a), a !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = mc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof a.is == "string"
                ? (e = o.createElement(n, { is: a.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    a.multiple
                      ? (o.multiple = !0)
                      : a.size && (o.size = a.size)))
              : (e = o.createElementNS(e, n)),
            (e[Fe] = t),
            (e[ca] = a),
            Rd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ir(n, a)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (i = a);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (i = a);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Un.length; i++) D(Un[i], e);
                i = a;
                break;
              case "source":
                D("error", e), (i = a);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (i = a);
                break;
              case "details":
                D("toggle", e), (i = a);
                break;
              case "input":
                Es(e, a), (i = Nr(e, a)), D("invalid", e);
                break;
              case "option":
                i = a;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!a.multiple }),
                  (i = G({}, a, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                zs(e, a), (i = Br(e, a)), D("invalid", e);
                break;
              default:
                i = a;
            }
            Or(n, i), (s = i);
            for (r in s)
              if (s.hasOwnProperty(r)) {
                var c = s[r];
                r === "style"
                  ? hc(e, c)
                  : r === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && fc(e, c))
                  : r === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && ea(e, c)
                    : typeof c == "number" && ea(e, "" + c)
                  : r !== "suppressContentEditableWarning" &&
                    r !== "suppressHydrationWarning" &&
                    r !== "autoFocus" &&
                    ($n.hasOwnProperty(r)
                      ? c != null && r === "onScroll" && D("scroll", e)
                      : c != null && Co(e, r, c, o));
              }
            switch (n) {
              case "input":
                Ea(e), js(e, a, !1);
                break;
              case "textarea":
                Ea(e), Ns(e);
                break;
              case "option":
                a.value != null && e.setAttribute("value", "" + St(a.value));
                break;
              case "select":
                (e.multiple = !!a.multiple),
                  (r = a.value),
                  r != null
                    ? pn(e, !!a.multiple, r, !1)
                    : a.defaultValue != null &&
                      pn(e, !!a.multiple, a.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ci);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
          }
          a && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Vd(e, t, e.memoizedProps, a);
      else {
        if (typeof a != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Dt(ua.current)), Dt(qe.current), Ia(t))) {
          if (
            ((a = t.stateNode),
            (n = t.memoizedProps),
            (a[Fe] = t),
            (r = a.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oa(a.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oa(a.nodeValue, n, (e.mode & 1) !== 0);
            }
          r && (t.flags |= 4);
        } else
          (a = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(a)),
            (a[Fe] = t),
            (t.stateNode = a);
      }
      return re(t), null;
    case 13:
      if (
        (V(U),
        (a = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && we !== null && t.mode & 1 && !(t.flags & 128))
          ad(), wn(), (t.flags |= 98560), (r = !1);
        else if (((r = Ia(t)), a !== null && a.dehydrated !== null)) {
          if (e === null) {
            if (!r) throw Error(w(318));
            if (
              ((r = t.memoizedState),
              (r = r !== null ? r.dehydrated : null),
              !r)
            )
              throw Error(w(317));
            r[Fe] = t;
          } else
            wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (r = !1);
        } else Le !== null && (go(Le), (Le = null)), (r = !0);
        if (!r) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((a = a !== null),
          a !== (e !== null && e.memoizedState !== null) &&
            a &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? X === 0 && (X = 3) : ls())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        kn(), lo(e, t), e === null && sa(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return Wo(t.type._context), re(t), null;
    case 17:
      return ge(t.type) && di(), re(t), null;
    case 19:
      if ((V(U), (r = t.memoizedState), r === null)) return re(t), null;
      if (((a = (t.flags & 128) !== 0), (o = r.rendering), o === null))
        if (a) Ln(r, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = gi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ln(r, !1),
                    a = o.updateQueue,
                    a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    a = n,
                    n = t.child;
                  n !== null;

                )
                  (r = n),
                    (e = a),
                    (r.flags &= 14680066),
                    (o = r.alternate),
                    o === null
                      ? ((r.childLanes = 0),
                        (r.lanes = e),
                        (r.child = null),
                        (r.subtreeFlags = 0),
                        (r.memoizedProps = null),
                        (r.memoizedState = null),
                        (r.updateQueue = null),
                        (r.dependencies = null),
                        (r.stateNode = null))
                      : ((r.childLanes = o.childLanes),
                        (r.lanes = o.lanes),
                        (r.child = o.child),
                        (r.subtreeFlags = 0),
                        (r.deletions = null),
                        (r.memoizedProps = o.memoizedProps),
                        (r.memoizedState = o.memoizedState),
                        (r.updateQueue = o.updateQueue),
                        (r.type = o.type),
                        (e = o.dependencies),
                        (r.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return L(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            q() > Sn &&
            ((t.flags |= 128), (a = !0), Ln(r, !1), (t.lanes = 4194304));
        }
      else {
        if (!a)
          if (((e = gi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (a = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ln(r, !0),
              r.tail === null && r.tailMode === "hidden" && !o.alternate && !H)
            )
              return re(t), null;
          } else
            2 * q() - r.renderingStartTime > Sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (a = !0), Ln(r, !1), (t.lanes = 4194304));
        r.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = r.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (r.last = o));
      }
      return r.tail !== null
        ? ((t = r.tail),
          (r.rendering = t),
          (r.tail = t.sibling),
          (r.renderingStartTime = q()),
          (t.sibling = null),
          (n = U.current),
          L(U, a ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        ss(),
        (a = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
        a && t.mode & 1
          ? ye & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Vm(e, t) {
  switch ((Ho(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && di(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        kn(),
        V(he),
        V(se),
        Xo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Zo(t), null;
    case 13:
      if ((V(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        wn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(U), null;
    case 4:
      return kn(), null;
    case 10:
      return Wo(t.type._context), null;
    case 22:
    case 23:
      return ss(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Da = !1,
  oe = !1,
  Hm = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (a) {
        W(e, t, a);
      }
    else n.current = null;
}
function co(e, t, n) {
  try {
    n();
  } catch (a) {
    W(e, t, a);
  }
}
var _l = !1;
function Um(e, t) {
  if (((Yr = oi), (e = Gc()), Do(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var i = a.anchorOffset,
            r = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, r.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            c = -1,
            d = 0,
            h = 0,
            f = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = o + i),
                f !== r || (a !== 0 && f.nodeType !== 3) || (c = o + a),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (v = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (v === n && ++d === i && (s = o),
                v === r && ++h === a && (c = o),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = v), (v = f.parentNode);
            }
            f = g;
          }
          n = s === -1 || c === -1 ? null : { start: s, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qr = { focusedElem: e, selectionRange: n }, oi = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var y = b.memoizedProps,
                    z = b.memoizedState,
                    p = t.stateNode,
                    u = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Oe(t.type, y),
                      z
                    );
                  p.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (_) {
          W(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (b = _l), (_l = !1), b;
}
function Xn(e, t, n) {
  var a = t.updateQueue;
  if (((a = a !== null ? a.lastEffect : null), a !== null)) {
    var i = (a = a.next);
    do {
      if ((i.tag & e) === e) {
        var r = i.destroy;
        (i.destroy = void 0), r !== void 0 && co(t, n, r);
      }
      i = i.next;
    } while (i !== a);
  }
}
function Di(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var a = n.create;
        n.destroy = a();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Hd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Hd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[ca], delete t[Xr], delete t[Am], delete t[Sm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ud(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yl(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ud(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function po(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ci));
  else if (a !== 4 && ((e = e.child), e !== null))
    for (po(e, t, n), e = e.sibling; e !== null; ) po(e, t, n), (e = e.sibling);
}
function mo(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (a !== 4 && ((e = e.child), e !== null))
    for (mo(e, t, n), e = e.sibling; e !== null; ) mo(e, t, n), (e = e.sibling);
}
var te = null,
  Ie = !1;
function st(e, t, n) {
  for (n = n.child; n !== null; ) Fd(e, t, n), (n = n.sibling);
}
function Fd(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(Ti, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || dn(n, t);
    case 6:
      var a = te,
        i = Ie;
      (te = null),
        st(e, t, n),
        (te = a),
        (Ie = i),
        te !== null &&
          (Ie
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Ie
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? mr(e.parentNode, n)
              : e.nodeType === 1 && mr(e, n),
            ia(e))
          : mr(te, n.stateNode));
      break;
    case 4:
      (a = te),
        (i = Ie),
        (te = n.stateNode.containerInfo),
        (Ie = !0),
        st(e, t, n),
        (te = a),
        (Ie = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((a = n.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
      ) {
        i = a = a.next;
        do {
          var r = i,
            o = r.destroy;
          (r = r.tag),
            o !== void 0 && (r & 2 || r & 4) && co(n, t, o),
            (i = i.next);
        } while (i !== a);
      }
      st(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (dn(n, t),
        (a = n.stateNode),
        typeof a.componentWillUnmount == "function")
      )
        try {
          (a.props = n.memoizedProps),
            (a.state = n.memoizedState),
            a.componentWillUnmount();
        } catch (s) {
          W(n, t, s);
        }
      st(e, t, n);
      break;
    case 21:
      st(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (a = oe) || n.memoizedState !== null), st(e, t, n), (oe = a))
        : st(e, t, n);
      break;
    default:
      st(e, t, n);
  }
}
function wl(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Hm()),
      t.forEach(function (a) {
        var i = Jm.bind(null, e, a);
        n.has(a) || (n.add(a), a.then(i, i));
      });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      try {
        var r = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (te = s.stateNode), (Ie = !1);
              break e;
            case 3:
              (te = s.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (te = s.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          s = s.return;
        }
        if (te === null) throw Error(w(160));
        Fd(r, o, i), (te = null), (Ie = !1);
        var c = i.alternate;
        c !== null && (c.return = null), (i.return = null);
      } catch (d) {
        W(i, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gd(t, e), (t = t.sibling);
}
function Gd(e, t) {
  var n = e.alternate,
    a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), He(e), a & 4)) {
        try {
          Xn(3, e, e.return), Di(3, e);
        } catch (y) {
          W(e, e.return, y);
        }
        try {
          Xn(5, e, e.return);
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 1:
      Me(t, e), He(e), a & 512 && n !== null && dn(n, n.return);
      break;
    case 5:
      if (
        (Me(t, e),
        He(e),
        a & 512 && n !== null && dn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ea(i, "");
        } catch (y) {
          W(e, e.return, y);
        }
      }
      if (a & 4 && ((i = e.stateNode), i != null)) {
        var r = e.memoizedProps,
          o = n !== null ? n.memoizedProps : r,
          s = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            s === "input" && r.type === "radio" && r.name != null && uc(i, r),
              Ir(s, o);
            var d = Ir(s, r);
            for (o = 0; o < c.length; o += 2) {
              var h = c[o],
                f = c[o + 1];
              h === "style"
                ? hc(i, f)
                : h === "dangerouslySetInnerHTML"
                ? fc(i, f)
                : h === "children"
                ? ea(i, f)
                : Co(i, h, f, d);
            }
            switch (s) {
              case "input":
                Tr(i, r);
                break;
              case "textarea":
                pc(i, r);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!r.multiple;
                var g = r.value;
                g != null
                  ? pn(i, !!r.multiple, g, !1)
                  : v !== !!r.multiple &&
                    (r.defaultValue != null
                      ? pn(i, !!r.multiple, r.defaultValue, !0)
                      : pn(i, !!r.multiple, r.multiple ? [] : "", !1));
            }
            i[ca] = r;
          } catch (y) {
            W(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Me(t, e), He(e), a & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (i = e.stateNode), (r = e.memoizedProps);
        try {
          i.nodeValue = r;
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Me(t, e), He(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ia(t.containerInfo);
        } catch (y) {
          W(e, e.return, y);
        }
      break;
    case 4:
      Me(t, e), He(e);
      break;
    case 13:
      Me(t, e),
        He(e),
        (i = e.child),
        i.flags & 8192 &&
          ((r = i.memoizedState !== null),
          (i.stateNode.isHidden = r),
          !r ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (rs = q())),
        a & 4 && wl(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (d = oe) || h), Me(t, e), (oe = d)) : Me(t, e),
        He(e),
        a & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !h && e.mode & 1)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (f = k = h; k !== null; ) {
              switch (((v = k), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xn(4, v, v.return);
                  break;
                case 1:
                  dn(v, v.return);
                  var b = v.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (a = v), (n = v.return);
                    try {
                      (t = a),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (y) {
                      W(a, n, y);
                    }
                  }
                  break;
                case 5:
                  dn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    kl(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (k = g)) : kl(f);
            }
            h = h.sibling;
          }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                (i = f.stateNode),
                  d
                    ? ((r = i.style),
                      typeof r.setProperty == "function"
                        ? r.setProperty("display", "none", "important")
                        : (r.display = "none"))
                    : ((s = f.stateNode),
                      (c = f.memoizedProps.style),
                      (o =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (s.style.display = vc("display", o)));
              } catch (y) {
                W(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (h === null)
              try {
                f.stateNode.nodeValue = d ? "" : f.memoizedProps;
              } catch (y) {
                W(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            h === f && (h = null), (f = f.return);
          }
          h === f && (h = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), He(e), a & 4 && wl(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ud(n)) {
            var a = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (a.tag) {
        case 5:
          var i = a.stateNode;
          a.flags & 32 && (ea(i, ""), (a.flags &= -33));
          var r = yl(e);
          mo(e, r, i);
          break;
        case 3:
        case 4:
          var o = a.stateNode.containerInfo,
            s = yl(e);
          po(e, s, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (c) {
      W(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Fm(e, t, n) {
  (k = e), Wd(e);
}
function Wd(e, t, n) {
  for (var a = (e.mode & 1) !== 0; k !== null; ) {
    var i = k,
      r = i.child;
    if (i.tag === 22 && a) {
      var o = i.memoizedState !== null || Da;
      if (!o) {
        var s = i.alternate,
          c = (s !== null && s.memoizedState !== null) || oe;
        s = Da;
        var d = oe;
        if (((Da = o), (oe = c) && !d))
          for (k = i; k !== null; )
            (o = k),
              (c = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Al(i)
                : c !== null
                ? ((c.return = o), (k = c))
                : Al(i);
        for (; r !== null; ) (k = r), Wd(r), (r = r.sibling);
        (k = i), (Da = s), (oe = d);
      }
      xl(e);
    } else
      i.subtreeFlags & 8772 && r !== null ? ((r.return = i), (k = r)) : xl(e);
  }
}
function xl(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || Di(5, t);
              break;
            case 1:
              var a = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) a.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Oe(t.type, n.memoizedProps);
                  a.componentDidUpdate(
                    i,
                    n.memoizedState,
                    a.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var r = t.updateQueue;
              r !== null && rl(t, r, a);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rl(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var h = d.memoizedState;
                  if (h !== null) {
                    var f = h.dehydrated;
                    f !== null && ia(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        oe || (t.flags & 512 && uo(t));
      } catch (v) {
        W(t, t.return, v);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function kl(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Al(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Di(4, t);
          } catch (c) {
            W(t, n, c);
          }
          break;
        case 1:
          var a = t.stateNode;
          if (typeof a.componentDidMount == "function") {
            var i = t.return;
            try {
              a.componentDidMount();
            } catch (c) {
              W(t, i, c);
            }
          }
          var r = t.return;
          try {
            uo(t);
          } catch (c) {
            W(t, r, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            uo(t);
          } catch (c) {
            W(t, o, c);
          }
      }
    } catch (c) {
      W(t, t.return, c);
    }
    if (t === e) {
      k = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (k = s);
      break;
    }
    k = t.return;
  }
}
var Gm = Math.ceil,
  yi = rt.ReactCurrentDispatcher,
  as = rt.ReactCurrentOwner,
  Ne = rt.ReactCurrentBatchConfig,
  M = 0,
  ee = null,
  Q = null,
  ne = 0,
  ye = 0,
  un = jt(0),
  X = 0,
  va = null,
  Yt = 0,
  Vi = 0,
  is = 0,
  Jn = null,
  fe = null,
  rs = 0,
  Sn = 1 / 0,
  Ze = null,
  wi = !1,
  fo = null,
  wt = null,
  Va = !1,
  ft = null,
  xi = 0,
  Kn = 0,
  vo = null,
  Ka = -1,
  $a = 0;
function de() {
  return M & 6 ? q() : Ka !== -1 ? Ka : (Ka = q());
}
function xt(e) {
  return e.mode & 1
    ? M & 2 && ne !== 0
      ? ne & -ne
      : Em.transition !== null
      ? ($a === 0 && ($a = jc()), $a)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Oc(e.type))),
        e)
    : 1;
}
function De(e, t, n, a) {
  if (50 < Kn) throw ((Kn = 0), (vo = null), Error(w(185)));
  ba(e, n, a),
    (!(M & 2) || e !== ee) &&
      (e === ee && (!(M & 2) && (Vi |= n), X === 4 && pt(e, ne)),
      be(e, a),
      n === 1 && M === 0 && !(t.mode & 1) && ((Sn = q() + 500), Ii && zt()));
}
function be(e, t) {
  var n = e.callbackNode;
  Ep(e, t);
  var a = ri(e, e === ee ? ne : 0);
  if (a === 0)
    n !== null && Bs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = a & -a), e.callbackPriority !== t)) {
    if ((n != null && Bs(n), t === 1))
      e.tag === 0 ? Cm(Sl.bind(null, e)) : ed(Sl.bind(null, e)),
        xm(function () {
          !(M & 6) && zt();
        }),
        (n = null);
    else {
      switch (zc(a)) {
        case 1:
          n = To;
          break;
        case 4:
          n = Cc;
          break;
        case 16:
          n = ii;
          break;
        case 536870912:
          n = Ec;
          break;
        default:
          n = ii;
      }
      n = $d(n, Yd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yd(e, t) {
  if (((Ka = -1), ($a = 0), M & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (gn() && e.callbackNode !== n) return null;
  var a = ri(e, e === ee ? ne : 0);
  if (a === 0) return null;
  if (a & 30 || a & e.expiredLanes || t) t = ki(e, a);
  else {
    t = a;
    var i = M;
    M |= 2;
    var r = Qd();
    (ee !== e || ne !== t) && ((Ze = null), (Sn = q() + 500), Vt(e, t));
    do
      try {
        qm();
        break;
      } catch (s) {
        qd(e, s);
      }
    while (!0);
    Go(),
      (yi.current = r),
      (M = i),
      Q !== null ? (t = 0) : ((ee = null), (ne = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Hr(e)), i !== 0 && ((a = i), (t = ho(e, i)))), t === 1)
    )
      throw ((n = va), Vt(e, 0), pt(e, a), be(e, q()), n);
    if (t === 6) pt(e, a);
    else {
      if (
        ((i = e.current.alternate),
        !(a & 30) &&
          !Wm(i) &&
          ((t = ki(e, a)),
          t === 2 && ((r = Hr(e)), r !== 0 && ((a = r), (t = ho(e, r)))),
          t === 1))
      )
        throw ((n = va), Vt(e, 0), pt(e, a), be(e, q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = a), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Ot(e, fe, Ze);
          break;
        case 3:
          if (
            (pt(e, a), (a & 130023424) === a && ((t = rs + 500 - q()), 10 < t))
          ) {
            if (ri(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & a) !== a)) {
              de(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Zr(Ot.bind(null, e, fe, Ze), t);
            break;
          }
          Ot(e, fe, Ze);
          break;
        case 4:
          if ((pt(e, a), (a & 4194240) === a)) break;
          for (t = e.eventTimes, i = -1; 0 < a; ) {
            var o = 31 - Re(a);
            (r = 1 << o), (o = t[o]), o > i && (i = o), (a &= ~r);
          }
          if (
            ((a = i),
            (a = q() - a),
            (a =
              (120 > a
                ? 120
                : 480 > a
                ? 480
                : 1080 > a
                ? 1080
                : 1920 > a
                ? 1920
                : 3e3 > a
                ? 3e3
                : 4320 > a
                ? 4320
                : 1960 * Gm(a / 1960)) - a),
            10 < a)
          ) {
            e.timeoutHandle = Zr(Ot.bind(null, e, fe, Ze), a);
            break;
          }
          Ot(e, fe, Ze);
          break;
        case 5:
          Ot(e, fe, Ze);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return be(e, q()), e.callbackNode === n ? Yd.bind(null, e) : null;
}
function ho(e, t) {
  var n = Jn;
  return (
    e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    (e = ki(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && go(t)),
    e
  );
}
function go(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Wm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var a = 0; a < n.length; a++) {
          var i = n[a],
            r = i.getSnapshot;
          i = i.value;
          try {
            if (!Ve(r(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function pt(e, t) {
  for (
    t &= ~is,
      t &= ~Vi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      a = 1 << n;
    (e[n] = -1), (t &= ~a);
  }
}
function Sl(e) {
  if (M & 6) throw Error(w(327));
  gn();
  var t = ri(e, 0);
  if (!(t & 1)) return be(e, q()), null;
  var n = ki(e, t);
  if (e.tag !== 0 && n === 2) {
    var a = Hr(e);
    a !== 0 && ((t = a), (n = ho(e, a)));
  }
  if (n === 1) throw ((n = va), Vt(e, 0), pt(e, t), be(e, q()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ot(e, fe, Ze),
    be(e, q()),
    null
  );
}
function os(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((Sn = q() + 500), Ii && zt());
  }
}
function qt(e) {
  ft !== null && ft.tag === 0 && !(M & 6) && gn();
  var t = M;
  M |= 1;
  var n = Ne.transition,
    a = I;
  try {
    if (((Ne.transition = null), (I = 1), e)) return e();
  } finally {
    (I = a), (Ne.transition = n), (M = t), !(M & 6) && zt();
  }
}
function ss() {
  (ye = un.current), V(un);
}
function Vt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wm(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var a = n;
      switch ((Ho(a), a.tag)) {
        case 1:
          (a = a.type.childContextTypes), a != null && di();
          break;
        case 3:
          kn(), V(he), V(se), Xo();
          break;
        case 5:
          Zo(a);
          break;
        case 4:
          kn();
          break;
        case 13:
          V(U);
          break;
        case 19:
          V(U);
          break;
        case 10:
          Wo(a.type._context);
          break;
        case 22:
        case 23:
          ss();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (Q = e = kt(e.current, null)),
    (ne = ye = t),
    (X = 0),
    (va = null),
    (is = Vi = Yt = 0),
    (fe = Jn = null),
    Rt !== null)
  ) {
    for (t = 0; t < Rt.length; t++)
      if (((n = Rt[t]), (a = n.interleaved), a !== null)) {
        n.interleaved = null;
        var i = a.next,
          r = n.pending;
        if (r !== null) {
          var o = r.next;
          (r.next = i), (a.next = o);
        }
        n.pending = a;
      }
    Rt = null;
  }
  return e;
}
function qd(e, t) {
  do {
    var n = Q;
    try {
      if ((Go(), (Za.current = _i), bi)) {
        for (var a = F.memoizedState; a !== null; ) {
          var i = a.queue;
          i !== null && (i.pending = null), (a = a.next);
        }
        bi = !1;
      }
      if (
        ((Wt = 0),
        ($ = Z = F = null),
        (Zn = !1),
        (pa = 0),
        (as.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (va = t), (Q = null);
        break;
      }
      e: {
        var r = e,
          o = n.return,
          s = n,
          c = t;
        if (
          ((t = ne),
          (s.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var d = c,
            h = s,
            f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = pl(o);
          if (g !== null) {
            (g.flags &= -257),
              ml(g, o, s, r, t),
              g.mode & 1 && ul(r, d, t),
              (t = g),
              (c = d);
            var b = t.updateQueue;
            if (b === null) {
              var y = new Set();
              y.add(c), (t.updateQueue = y);
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              ul(r, d, t), ls();
              break e;
            }
            c = Error(w(426));
          }
        } else if (H && s.mode & 1) {
          var z = pl(o);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              ml(z, o, s, r, t),
              Uo(An(c, s));
            break e;
          }
        }
        (r = c = An(c, s)),
          X !== 4 && (X = 2),
          Jn === null ? (Jn = [r]) : Jn.push(r),
          (r = o);
        do {
          switch (r.tag) {
            case 3:
              (r.flags |= 65536), (t &= -t), (r.lanes |= t);
              var p = Nd(r, c, t);
              il(r, p);
              break e;
            case 1:
              s = c;
              var u = r.type,
                m = r.stateNode;
              if (
                !(r.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (wt === null || !wt.has(m))))
              ) {
                (r.flags |= 65536), (t &= -t), (r.lanes |= t);
                var _ = Td(r, s, t);
                il(r, _);
                break e;
              }
          }
          r = r.return;
        } while (r !== null);
      }
      Xd(n);
    } catch (x) {
      (t = x), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Qd() {
  var e = yi.current;
  return (yi.current = _i), e === null ? _i : e;
}
function ls() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    ee === null || (!(Yt & 268435455) && !(Vi & 268435455)) || pt(ee, ne);
}
function ki(e, t) {
  var n = M;
  M |= 2;
  var a = Qd();
  (ee !== e || ne !== t) && ((Ze = null), Vt(e, t));
  do
    try {
      Ym();
      break;
    } catch (i) {
      qd(e, i);
    }
  while (!0);
  if ((Go(), (M = n), (yi.current = a), Q !== null)) throw Error(w(261));
  return (ee = null), (ne = 0), X;
}
function Ym() {
  for (; Q !== null; ) Zd(Q);
}
function qm() {
  for (; Q !== null && !bp(); ) Zd(Q);
}
function Zd(e) {
  var t = Kd(e.alternate, e, ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xd(e) : (Q = t),
    (as.current = null);
}
function Xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Vm(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Q = null);
        return;
      }
    } else if (((n = Dm(n, t, ye)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Ot(e, t, n) {
  var a = I,
    i = Ne.transition;
  try {
    (Ne.transition = null), (I = 1), Qm(e, t, n, a);
  } finally {
    (Ne.transition = i), (I = a);
  }
  return null;
}
function Qm(e, t, n, a) {
  do gn();
  while (ft !== null);
  if (M & 6) throw Error(w(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var r = n.lanes | n.childLanes;
  if (
    (jp(e, r),
    e === ee && ((Q = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Va ||
      ((Va = !0),
      $d(ii, function () {
        return gn(), null;
      })),
    (r = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || r)
  ) {
    (r = Ne.transition), (Ne.transition = null);
    var o = I;
    I = 1;
    var s = M;
    (M |= 4),
      (as.current = null),
      Um(e, n),
      Gd(n, e),
      fm(qr),
      (oi = !!Yr),
      (qr = Yr = null),
      (e.current = n),
      Fm(n),
      _p(),
      (M = s),
      (I = o),
      (Ne.transition = r);
  } else e.current = n;
  if (
    (Va && ((Va = !1), (ft = e), (xi = i)),
    (r = e.pendingLanes),
    r === 0 && (wt = null),
    xp(n.stateNode),
    be(e, q()),
    t !== null)
  )
    for (a = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), a(i.value, { componentStack: i.stack, digest: i.digest });
  if (wi) throw ((wi = !1), (e = fo), (fo = null), e);
  return (
    xi & 1 && e.tag !== 0 && gn(),
    (r = e.pendingLanes),
    r & 1 ? (e === vo ? Kn++ : ((Kn = 0), (vo = e))) : (Kn = 0),
    zt(),
    null
  );
}
function gn() {
  if (ft !== null) {
    var e = zc(xi),
      t = Ne.transition,
      n = I;
    try {
      if (((Ne.transition = null), (I = 16 > e ? 16 : e), ft === null))
        var a = !1;
      else {
        if (((e = ft), (ft = null), (xi = 0), M & 6)) throw Error(w(331));
        var i = M;
        for (M |= 4, k = e.current; k !== null; ) {
          var r = k,
            o = r.child;
          if (k.flags & 16) {
            var s = r.deletions;
            if (s !== null) {
              for (var c = 0; c < s.length; c++) {
                var d = s[c];
                for (k = d; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xn(8, h, r);
                  }
                  var f = h.child;
                  if (f !== null) (f.return = h), (k = f);
                  else
                    for (; k !== null; ) {
                      h = k;
                      var v = h.sibling,
                        g = h.return;
                      if ((Hd(h), h === d)) {
                        k = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (k = v);
                        break;
                      }
                      k = g;
                    }
                }
              }
              var b = r.alternate;
              if (b !== null) {
                var y = b.child;
                if (y !== null) {
                  b.child = null;
                  do {
                    var z = y.sibling;
                    (y.sibling = null), (y = z);
                  } while (y !== null);
                }
              }
              k = r;
            }
          }
          if (r.subtreeFlags & 2064 && o !== null) (o.return = r), (k = o);
          else
            e: for (; k !== null; ) {
              if (((r = k), r.flags & 2048))
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xn(9, r, r.return);
                }
              var p = r.sibling;
              if (p !== null) {
                (p.return = r.return), (k = p);
                break e;
              }
              k = r.return;
            }
        }
        var u = e.current;
        for (k = u; k !== null; ) {
          o = k;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (k = m);
          else
            e: for (o = u; k !== null; ) {
              if (((s = k), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Di(9, s);
                  }
                } catch (x) {
                  W(s, s.return, x);
                }
              if (s === o) {
                k = null;
                break e;
              }
              var _ = s.sibling;
              if (_ !== null) {
                (_.return = s.return), (k = _);
                break e;
              }
              k = s.return;
            }
        }
        if (
          ((M = i), zt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(Ti, e);
          } catch {}
        a = !0;
      }
      return a;
    } finally {
      (I = n), (Ne.transition = t);
    }
  }
  return !1;
}
function Cl(e, t, n) {
  (t = An(n, t)),
    (t = Nd(e, t, 1)),
    (e = yt(e, t, 1)),
    (t = de()),
    e !== null && (ba(e, 1, t), be(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Cl(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cl(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof a.componentDidCatch == "function" &&
            (wt === null || !wt.has(a)))
        ) {
          (e = An(n, e)),
            (e = Td(t, e, 1)),
            (t = yt(t, e, 1)),
            (e = de()),
            t !== null && (ba(t, 1, e), be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Zm(e, t, n) {
  var a = e.pingCache;
  a !== null && a.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (X === 4 || (X === 3 && (ne & 130023424) === ne && 500 > q() - rs)
        ? Vt(e, 0)
        : (is |= n)),
    be(e, t);
}
function Jd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Na), (Na <<= 1), !(Na & 130023424) && (Na = 4194304))
      : (t = 1));
  var n = de();
  (e = at(e, t)), e !== null && (ba(e, t, n), be(e, n));
}
function Xm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jd(e, n);
}
function Jm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var a = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      a = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  a !== null && a.delete(t), Jd(e, n);
}
var Kd;
Kd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), Rm(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), H && t.flags & 1048576 && td(t, mi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var a = t.type;
      Ja(e, t), (e = t.pendingProps);
      var i = yn(t, se.current);
      hn(t, n), (i = Ko(null, t, a, e, i, n));
      var r = $o();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(a) ? ((r = !0), ui(t)) : (r = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            qo(t),
            (i.updater = Li),
            (t.stateNode = i),
            (i._reactInternals = t),
            no(t, a, e, n),
            (t = ro(null, t, a, !0, r, n)))
          : ((t.tag = 0), H && r && Vo(t), ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      a = t.elementType;
      e: {
        switch (
          (Ja(e, t),
          (e = t.pendingProps),
          (i = a._init),
          (a = i(a._payload)),
          (t.type = a),
          (i = t.tag = $m(a)),
          (e = Oe(a, e)),
          i)
        ) {
          case 0:
            t = io(null, t, a, e, n);
            break e;
          case 1:
            t = hl(null, t, a, e, n);
            break e;
          case 11:
            t = fl(null, t, a, e, n);
            break e;
          case 14:
            t = vl(null, t, a, Oe(a.type, e), n);
            break e;
        }
        throw Error(w(306, a, ""));
      }
      return t;
    case 0:
      return (
        (a = t.type),
        (i = t.pendingProps),
        (i = t.elementType === a ? i : Oe(a, i)),
        io(e, t, a, i, n)
      );
    case 1:
      return (
        (a = t.type),
        (i = t.pendingProps),
        (i = t.elementType === a ? i : Oe(a, i)),
        hl(e, t, a, i, n)
      );
    case 3:
      e: {
        if ((Od(t), e === null)) throw Error(w(387));
        (a = t.pendingProps),
          (r = t.memoizedState),
          (i = r.element),
          rd(e, t),
          hi(t, a, null, n);
        var o = t.memoizedState;
        if (((a = o.element), r.isDehydrated))
          if (
            ((r = {
              element: a,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = r),
            (t.memoizedState = r),
            t.flags & 256)
          ) {
            (i = An(Error(w(423)), t)), (t = gl(e, t, a, n, i));
            break e;
          } else if (a !== i) {
            (i = An(Error(w(424)), t)), (t = gl(e, t, a, n, i));
            break e;
          } else
            for (
              we = _t(t.stateNode.containerInfo.firstChild),
                xe = t,
                H = !0,
                Le = null,
                n = cd(t, null, a, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wn(), a === i)) {
            t = it(e, t, n);
            break e;
          }
          ce(e, t, a, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dd(t),
        e === null && $r(t),
        (a = t.type),
        (i = t.pendingProps),
        (r = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Qr(a, i) ? (o = null) : r !== null && Qr(a, r) && (t.flags |= 32),
        Md(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && $r(t), null;
    case 13:
      return Id(e, t, n);
    case 4:
      return (
        Qo(t, t.stateNode.containerInfo),
        (a = t.pendingProps),
        e === null ? (t.child = xn(t, null, a, n)) : ce(e, t, a, n),
        t.child
      );
    case 11:
      return (
        (a = t.type),
        (i = t.pendingProps),
        (i = t.elementType === a ? i : Oe(a, i)),
        fl(e, t, a, i, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((a = t.type._context),
          (i = t.pendingProps),
          (r = t.memoizedProps),
          (o = i.value),
          L(fi, a._currentValue),
          (a._currentValue = o),
          r !== null)
        )
          if (Ve(r.value, o)) {
            if (r.children === i.children && !he.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (r = t.child, r !== null && (r.return = t); r !== null; ) {
              var s = r.dependencies;
              if (s !== null) {
                o = r.child;
                for (var c = s.firstContext; c !== null; ) {
                  if (c.context === a) {
                    if (r.tag === 1) {
                      (c = et(-1, n & -n)), (c.tag = 2);
                      var d = r.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var h = d.pending;
                        h === null
                          ? (c.next = c)
                          : ((c.next = h.next), (h.next = c)),
                          (d.pending = c);
                      }
                    }
                    (r.lanes |= n),
                      (c = r.alternate),
                      c !== null && (c.lanes |= n),
                      eo(r.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (r.tag === 10) o = r.type === t.type ? null : r.child;
              else if (r.tag === 18) {
                if (((o = r.return), o === null)) throw Error(w(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  eo(o, n, t),
                  (o = r.sibling);
              } else o = r.child;
              if (o !== null) o.return = r;
              else
                for (o = r; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((r = o.sibling), r !== null)) {
                    (r.return = o.return), (o = r);
                    break;
                  }
                  o = o.return;
                }
              r = o;
            }
        ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (a = t.pendingProps.children),
        hn(t, n),
        (i = Te(i)),
        (a = a(i)),
        (t.flags |= 1),
        ce(e, t, a, n),
        t.child
      );
    case 14:
      return (
        (a = t.type),
        (i = Oe(a, t.pendingProps)),
        (i = Oe(a.type, i)),
        vl(e, t, a, i, n)
      );
    case 15:
      return Pd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (a = t.type),
        (i = t.pendingProps),
        (i = t.elementType === a ? i : Oe(a, i)),
        Ja(e, t),
        (t.tag = 1),
        ge(a) ? ((e = !0), ui(t)) : (e = !1),
        hn(t, n),
        sd(t, a, i),
        no(t, a, i, n),
        ro(null, t, a, !0, e, n)
      );
    case 19:
      return Ld(e, t, n);
    case 22:
      return Bd(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function $d(e, t) {
  return Sc(e, t);
}
function Km(e, t, n, a) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = a),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, a) {
  return new Km(e, t, n, a);
}
function cs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $m(e) {
  if (typeof e == "function") return cs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === jo)) return 11;
    if (e === zo) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ei(e, t, n, a, i, r) {
  var o = 2;
  if (((a = e), typeof e == "function")) cs(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case en:
        return Ht(n.children, i, r, t);
      case Eo:
        (o = 8), (i |= 8);
        break;
      case Cr:
        return (
          (e = ze(12, n, t, i | 2)), (e.elementType = Cr), (e.lanes = r), e
        );
      case Er:
        return (e = ze(13, n, t, i)), (e.elementType = Er), (e.lanes = r), e;
      case jr:
        return (e = ze(19, n, t, i)), (e.elementType = jr), (e.lanes = r), e;
      case lc:
        return Hi(n, i, r, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case oc:
              o = 10;
              break e;
            case sc:
              o = 9;
              break e;
            case jo:
              o = 11;
              break e;
            case zo:
              o = 14;
              break e;
            case ct:
              (o = 16), (a = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(o, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = r), t
  );
}
function Ht(e, t, n, a) {
  return (e = ze(7, e, a, t)), (e.lanes = n), e;
}
function Hi(e, t, n, a) {
  return (
    (e = ze(22, e, a, t)),
    (e.elementType = lc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wr(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function xr(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ef(e, t, n, a, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = nr(0)),
    (this.expirationTimes = nr(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = nr(0)),
    (this.identifierPrefix = a),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ds(e, t, n, a, i, r, o, s, c) {
  return (
    (e = new ef(e, t, n, s, c)),
    t === 1 ? ((t = 1), r === !0 && (t |= 8)) : (t = 0),
    (r = ze(3, null, null, t)),
    (e.current = r),
    (r.stateNode = e),
    (r.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qo(r),
    e
  );
}
function tf(e, t, n) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: a == null ? null : "" + a,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function eu(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return $c(e, n, t);
  }
  return t;
}
function tu(e, t, n, a, i, r, o, s, c) {
  return (
    (e = ds(n, a, !0, e, i, r, o, s, c)),
    (e.context = eu(null)),
    (n = e.current),
    (a = de()),
    (i = xt(n)),
    (r = et(a, i)),
    (r.callback = t ?? null),
    yt(n, r, i),
    (e.current.lanes = i),
    ba(e, i, a),
    be(e, a),
    e
  );
}
function Ui(e, t, n, a) {
  var i = t.current,
    r = de(),
    o = xt(i);
  return (
    (n = eu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = et(r, o)),
    (t.payload = { element: e }),
    (a = a === void 0 ? null : a),
    a !== null && (t.callback = a),
    (e = yt(i, t, o)),
    e !== null && (De(e, i, o, r), Qa(e, i, o)),
    o
  );
}
function Ai(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function El(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function us(e, t) {
  El(e, t), (e = e.alternate) && El(e, t);
}
function nf() {
  return null;
}
var nu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ps(e) {
  this._internalRoot = e;
}
Fi.prototype.render = ps.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Ui(e, t, null, null);
};
Fi.prototype.unmount = ps.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qt(function () {
      Ui(null, e, null, null);
    }),
      (t[nt] = null);
  }
};
function Fi(e) {
  this._internalRoot = e;
}
Fi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && Mc(e);
  }
};
function ms(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function jl() {}
function af(e, t, n, a, i) {
  if (i) {
    if (typeof a == "function") {
      var r = a;
      a = function () {
        var d = Ai(o);
        r.call(d);
      };
    }
    var o = tu(t, a, e, 0, null, !1, !1, "", jl);
    return (
      (e._reactRootContainer = o),
      (e[nt] = o.current),
      sa(e.nodeType === 8 ? e.parentNode : e),
      qt(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof a == "function") {
    var s = a;
    a = function () {
      var d = Ai(c);
      s.call(d);
    };
  }
  var c = ds(e, 0, !1, null, null, !1, !1, "", jl);
  return (
    (e._reactRootContainer = c),
    (e[nt] = c.current),
    sa(e.nodeType === 8 ? e.parentNode : e),
    qt(function () {
      Ui(t, c, n, a);
    }),
    c
  );
}
function Wi(e, t, n, a, i) {
  var r = n._reactRootContainer;
  if (r) {
    var o = r;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var c = Ai(o);
        s.call(c);
      };
    }
    Ui(t, o, e, i);
  } else o = af(n, t, e, i, a);
  return Ai(o);
}
Nc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hn(t.pendingLanes);
        n !== 0 &&
          (Po(t, n | 1), be(t, q()), !(M & 6) && ((Sn = q() + 500), zt()));
      }
      break;
    case 13:
      qt(function () {
        var a = at(e, 1);
        if (a !== null) {
          var i = de();
          De(a, e, 1, i);
        }
      }),
        us(e, 1);
  }
};
Bo = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var n = de();
      De(t, e, 134217728, n);
    }
    us(e, 134217728);
  }
};
Tc = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = at(e, t);
    if (n !== null) {
      var a = de();
      De(n, e, t, a);
    }
    us(e, t);
  }
};
Pc = function () {
  return I;
};
Bc = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Rr = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Tr(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var a = n[t];
          if (a !== e && a.form === e.form) {
            var i = Oi(a);
            if (!i) throw Error(w(90));
            dc(a), Tr(a, i);
          }
        }
      }
      break;
    case "textarea":
      pc(e, n);
      break;
    case "select":
      (t = n.value), t != null && pn(e, !!n.multiple, t, !1);
  }
};
_c = os;
yc = qt;
var rf = { usingClientEntryPoint: !1, Events: [ya, rn, Oi, gc, bc, os] },
  Rn = {
    findFiberByHostInstance: Lt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  of = {
    bundleType: Rn.bundleType,
    version: Rn.version,
    rendererPackageName: Rn.rendererPackageName,
    rendererConfig: Rn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rn.findFiberByHostInstance || nf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ha.isDisabled && Ha.supportsFiber)
    try {
      (Ti = Ha.inject(of)), (Ye = Ha);
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rf;
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ms(t)) throw Error(w(200));
  return tf(e, t, null, n);
};
Ae.createRoot = function (e, t) {
  if (!ms(e)) throw Error(w(299));
  var n = !1,
    a = "",
    i = nu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ds(e, 1, !1, null, null, n, !1, a, i)),
    (e[nt] = t.current),
    sa(e.nodeType === 8 ? e.parentNode : e),
    new ps(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = kc(t)), (e = e === null ? null : e.stateNode), e;
};
Ae.flushSync = function (e) {
  return qt(e);
};
Ae.hydrate = function (e, t, n) {
  if (!Gi(t)) throw Error(w(200));
  return Wi(null, e, t, !0, n);
};
Ae.hydrateRoot = function (e, t, n) {
  if (!ms(e)) throw Error(w(405));
  var a = (n != null && n.hydratedSources) || null,
    i = !1,
    r = "",
    o = nu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = tu(t, null, e, 1, n ?? null, i, !1, r, o)),
    (e[nt] = t.current),
    sa(e),
    a)
  )
    for (e = 0; e < a.length; e++)
      (n = a[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Fi(t);
};
Ae.render = function (e, t, n) {
  if (!Gi(t)) throw Error(w(200));
  return Wi(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function (e) {
  if (!Gi(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (qt(function () {
        Wi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nt] = null);
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = os;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, a) {
  if (!Gi(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Wi(e, t, n, !1, a);
};
Ae.version = "18.2.0-next-9e3b772b8-20220608";
function au() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(au);
    } catch (e) {
      console.error(e);
    }
}
au(), (tc.exports = Ae);
var sf = tc.exports,
  zl = sf;
(Ar.createRoot = zl.createRoot), (Ar.hydrateRoot = zl.hydrateRoot);
/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ha() {
  return (
    (ha = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    ha.apply(this, arguments)
  );
}
var vt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(vt || (vt = {}));
const Nl = "popstate";
function lf(e) {
  e === void 0 && (e = {});
  function t(a, i) {
    let { pathname: r, search: o, hash: s } = a.location;
    return bo(
      "",
      { pathname: r, search: o, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(a, i) {
    return typeof i == "string" ? i : iu(i);
  }
  return df(t, n, null, e);
}
function J(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function fs(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function cf() {
  return Math.random().toString(36).substr(2, 8);
}
function Tl(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function bo(e, t, n, a) {
  return (
    n === void 0 && (n = null),
    ha(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? zn(t) : t,
      { state: n, key: (t && t.key) || a || cf() }
    )
  );
}
function iu(e) {
  let { pathname: t = "/", search: n = "", hash: a = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    a && a !== "#" && (t += a.charAt(0) === "#" ? a : "#" + a),
    t
  );
}
function zn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let a = e.indexOf("?");
    a >= 0 && ((t.search = e.substr(a)), (e = e.substr(0, a))),
      e && (t.pathname = e);
  }
  return t;
}
function df(e, t, n, a) {
  a === void 0 && (a = {});
  let { window: i = document.defaultView, v5Compat: r = !1 } = a,
    o = i.history,
    s = vt.Pop,
    c = null,
    d = h();
  d == null && ((d = 0), o.replaceState(ha({}, o.state, { idx: d }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    s = vt.Pop;
    let z = h(),
      p = z == null ? null : z - d;
    (d = z), c && c({ action: s, location: y.location, delta: p });
  }
  function v(z, p) {
    s = vt.Push;
    let u = bo(y.location, z, p);
    n && n(u, z), (d = h() + 1);
    let m = Tl(u, d),
      _ = y.createHref(u);
    try {
      o.pushState(m, "", _);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      i.location.assign(_);
    }
    r && c && c({ action: s, location: y.location, delta: 1 });
  }
  function g(z, p) {
    s = vt.Replace;
    let u = bo(y.location, z, p);
    n && n(u, z), (d = h());
    let m = Tl(u, d),
      _ = y.createHref(u);
    o.replaceState(m, "", _),
      r && c && c({ action: s, location: y.location, delta: 0 });
  }
  function b(z) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      u = typeof z == "string" ? z : iu(z);
    return (
      J(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          u
      ),
      new URL(u, p)
    );
  }
  let y = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(z) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Nl, f),
        (c = z),
        () => {
          i.removeEventListener(Nl, f), (c = null);
        }
      );
    },
    createHref(z) {
      return t(i, z);
    },
    createURL: b,
    encodeLocation(z) {
      let p = b(z);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: v,
    replace: g,
    go(z) {
      return o.go(z);
    },
  };
  return y;
}
var Pl;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Pl || (Pl = {}));
function uf(e, t, n) {
  n === void 0 && (n = "/");
  let a = typeof t == "string" ? zn(t) : t,
    i = su(a.pathname || "/", n);
  if (i == null) return null;
  let r = ru(e);
  pf(r);
  let o = null;
  for (let s = 0; o == null && s < r.length; ++s) o = wf(r[s], Af(i));
  return o;
}
function ru(e, t, n, a) {
  t === void 0 && (t = []), n === void 0 && (n = []), a === void 0 && (a = "");
  let i = (r, o, s) => {
    let c = {
      relativePath: s === void 0 ? r.path || "" : s,
      caseSensitive: r.caseSensitive === !0,
      childrenIndex: o,
      route: r,
    };
    c.relativePath.startsWith("/") &&
      (J(
        c.relativePath.startsWith(a),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + a + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(a.length)));
    let d = Ut([a, c.relativePath]),
      h = n.concat(c);
    r.children &&
      r.children.length > 0 &&
      (J(
        r.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + d + '".')
      ),
      ru(r.children, t, h, d)),
      !(r.path == null && !r.index) &&
        t.push({ path: d, score: _f(d, r.index), routesMeta: h });
  };
  return (
    e.forEach((r, o) => {
      var s;
      if (r.path === "" || !((s = r.path) != null && s.includes("?"))) i(r, o);
      else for (let c of ou(r.path)) i(r, o, c);
    }),
    t
  );
}
function ou(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...a] = t,
    i = n.endsWith("?"),
    r = n.replace(/\?$/, "");
  if (a.length === 0) return i ? [r, ""] : [r];
  let o = ou(a.join("/")),
    s = [];
  return (
    s.push(...o.map((c) => (c === "" ? r : [r, c].join("/")))),
    i && s.push(...o),
    s.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function pf(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : yf(
          t.routesMeta.map((a) => a.childrenIndex),
          n.routesMeta.map((a) => a.childrenIndex)
        )
  );
}
const mf = /^:\w+$/,
  ff = 3,
  vf = 2,
  hf = 1,
  gf = 10,
  bf = -2,
  Bl = (e) => e === "*";
function _f(e, t) {
  let n = e.split("/"),
    a = n.length;
  return (
    n.some(Bl) && (a += bf),
    t && (a += vf),
    n
      .filter((i) => !Bl(i))
      .reduce((i, r) => i + (mf.test(r) ? ff : r === "" ? hf : gf), a)
  );
}
function yf(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, i) => a === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function wf(e, t) {
  let { routesMeta: n } = e,
    a = {},
    i = "/",
    r = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      c = o === n.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      h = xf(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        d
      );
    if (!h) return null;
    Object.assign(a, h.params);
    let f = s.route;
    r.push({
      params: a,
      pathname: Ut([i, h.pathname]),
      pathnameBase: Tf(Ut([i, h.pathnameBase])),
      route: f,
    }),
      h.pathnameBase !== "/" && (i = Ut([i, h.pathnameBase]));
  }
  return r;
}
function xf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, a] = kf(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let r = i[0],
    o = r.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: a.reduce((d, h, f) => {
      let { paramName: v, isOptional: g } = h;
      if (v === "*") {
        let y = s[f] || "";
        o = r.slice(0, r.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const b = s[f];
      return g && !b ? (d[v] = void 0) : (d[v] = Sf(b || "", v)), d;
    }, {}),
    pathname: r,
    pathnameBase: o,
    pattern: e,
  };
}
function kf(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fs(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let a = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (o, s, c) => (
            a.push({ paramName: s, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (a.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), a]
  );
}
function Af(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      fs(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Sf(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      fs(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function su(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    a = e.charAt(n);
  return a && a !== "/" ? null : e.slice(n) || "/";
}
function Cf(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: a = "",
    hash: i = "",
  } = typeof e == "string" ? zn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Ef(n, t)) : t,
    search: Pf(a),
    hash: Bf(i),
  };
}
function Ef(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function kr(e, t, n, a) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(a) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function jf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function zf(e) {
  return jf(e).map((t, n) =>
    n === e.length - 1 ? t.pathname : t.pathnameBase
  );
}
function Nf(e, t, n, a) {
  a === void 0 && (a = !1);
  let i;
  typeof e == "string"
    ? (i = zn(e))
    : ((i = ha({}, e)),
      J(
        !i.pathname || !i.pathname.includes("?"),
        kr("?", "pathname", "search", i)
      ),
      J(
        !i.pathname || !i.pathname.includes("#"),
        kr("#", "pathname", "hash", i)
      ),
      J(!i.search || !i.search.includes("#"), kr("#", "search", "hash", i)));
  let r = e === "" || i.pathname === "",
    o = r ? "/" : i.pathname,
    s;
  if (o == null) s = n;
  else if (a) {
    let f = t[t.length - 1].replace(/^\//, "").split("/");
    if (o.startsWith("..")) {
      let v = o.split("/");
      for (; v[0] === ".."; ) v.shift(), f.pop();
      i.pathname = v.join("/");
    }
    s = "/" + f.join("/");
  } else {
    let f = t.length - 1;
    if (o.startsWith("..")) {
      let v = o.split("/");
      for (; v[0] === ".."; ) v.shift(), (f -= 1);
      i.pathname = v.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let c = Cf(i, s),
    d = o && o !== "/" && o.endsWith("/"),
    h = (r || o === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (d || h) && (c.pathname += "/"), c;
}
const Ut = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Tf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Pf = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Bf = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Mf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const lu = ["post", "put", "patch", "delete"];
new Set(lu);
const Of = ["get", ...lu];
new Set(Of);
/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Si() {
  return (
    (Si = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    Si.apply(this, arguments)
  );
}
const vs = S.createContext(null),
  If = S.createContext(null),
  Yi = S.createContext(null),
  qi = S.createContext(null),
  Nn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  cu = S.createContext(null);
function Qi() {
  return S.useContext(qi) != null;
}
function du() {
  return Qi() || J(!1), S.useContext(qi).location;
}
function uu(e) {
  S.useContext(Yi).static || S.useLayoutEffect(e);
}
function pu() {
  let { isDataRoute: e } = S.useContext(Nn);
  return e ? Zf() : Lf();
}
function Lf() {
  Qi() || J(!1);
  let e = S.useContext(vs),
    { basename: t, navigator: n } = S.useContext(Yi),
    { matches: a } = S.useContext(Nn),
    { pathname: i } = du(),
    r = JSON.stringify(zf(a)),
    o = S.useRef(!1);
  return (
    uu(() => {
      o.current = !0;
    }),
    S.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !o.current)) return;
        if (typeof c == "number") {
          n.go(c);
          return;
        }
        let h = Nf(c, JSON.parse(r), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : Ut([t, h.pathname])),
          (d.replace ? n.replace : n.push)(h, d.state, d);
      },
      [t, n, r, i, e]
    )
  );
}
function Rf(e, t) {
  return Df(e, t);
}
function Df(e, t, n) {
  Qi() || J(!1);
  let { navigator: a } = S.useContext(Yi),
    { matches: i } = S.useContext(Nn),
    r = i[i.length - 1],
    o = r ? r.params : {};
  r && r.pathname;
  let s = r ? r.pathnameBase : "/";
  r && r.route;
  let c = du(),
    d;
  if (t) {
    var h;
    let y = typeof t == "string" ? zn(t) : t;
    s === "/" || ((h = y.pathname) != null && h.startsWith(s)) || J(!1),
      (d = y);
  } else d = c;
  let f = d.pathname || "/",
    v = s === "/" ? f : f.slice(s.length) || "/",
    g = uf(e, { pathname: v }),
    b = Gf(
      g &&
        g.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, o, y.params),
            pathname: Ut([
              s,
              a.encodeLocation
                ? a.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? s
                : Ut([
                    s,
                    a.encodeLocation
                      ? a.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && b
    ? S.createElement(
        qi.Provider,
        {
          value: {
            location: Si(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: vt.Pop,
          },
        },
        b
      )
    : b;
}
function Vf() {
  let e = Qf(),
    t = Mf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    r = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: i }, n) : null,
    r
  );
}
const Hf = S.createElement(Vf, null);
class Uf extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          Nn.Provider,
          { value: this.props.routeContext },
          S.createElement(cu.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ff(e) {
  let { routeContext: t, match: n, children: a } = e,
    i = S.useContext(vs);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Nn.Provider, { value: t }, a)
  );
}
function Gf(e, t, n) {
  var a;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let r = e,
    o = (a = n) == null ? void 0 : a.errors;
  if (o != null) {
    let s = r.findIndex(
      (c) => c.route.id && (o == null ? void 0 : o[c.route.id])
    );
    s >= 0 || J(!1), (r = r.slice(0, Math.min(r.length, s + 1)));
  }
  return r.reduceRight((s, c, d) => {
    let h = c.route.id ? (o == null ? void 0 : o[c.route.id]) : null,
      f = null;
    n && (f = c.route.errorElement || Hf);
    let v = t.concat(r.slice(0, d + 1)),
      g = () => {
        let b;
        return (
          h
            ? (b = f)
            : c.route.Component
            ? (b = S.createElement(c.route.Component, null))
            : c.route.element
            ? (b = c.route.element)
            : (b = s),
          S.createElement(Ff, {
            match: c,
            routeContext: { outlet: s, matches: v, isDataRoute: n != null },
            children: b,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
      ? S.createElement(Uf, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: h,
          children: g(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var mu = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(mu || {}),
  Ci = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ci || {});
function Wf(e) {
  let t = S.useContext(vs);
  return t || J(!1), t;
}
function Yf(e) {
  let t = S.useContext(If);
  return t || J(!1), t;
}
function qf(e) {
  let t = S.useContext(Nn);
  return t || J(!1), t;
}
function fu(e) {
  let t = qf(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || J(!1), n.route.id;
}
function Qf() {
  var e;
  let t = S.useContext(cu),
    n = Yf(Ci.UseRouteError),
    a = fu(Ci.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[a]);
}
function Zf() {
  let { router: e } = Wf(mu.UseNavigateStable),
    t = fu(Ci.UseNavigateStable),
    n = S.useRef(!1);
  return (
    uu(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (i, r) {
        r === void 0 && (r = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Si({ fromRouteId: t }, r)));
      },
      [e, t]
    )
  );
}
function Fn(e) {
  J(!1);
}
function Xf(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: a,
    navigationType: i = vt.Pop,
    navigator: r,
    static: o = !1,
  } = e;
  Qi() && J(!1);
  let s = t.replace(/^\/*/, "/"),
    c = S.useMemo(() => ({ basename: s, navigator: r, static: o }), [s, r, o]);
  typeof a == "string" && (a = zn(a));
  let {
      pathname: d = "/",
      search: h = "",
      hash: f = "",
      state: v = null,
      key: g = "default",
    } = a,
    b = S.useMemo(() => {
      let y = su(d, s);
      return y == null
        ? null
        : {
            location: { pathname: y, search: h, hash: f, state: v, key: g },
            navigationType: i,
          };
    }, [s, d, h, f, v, g, i]);
  return b == null
    ? null
    : S.createElement(
        Yi.Provider,
        { value: c },
        S.createElement(qi.Provider, { children: n, value: b })
      );
}
function Jf(e) {
  let { children: t, location: n } = e;
  return Rf(_o(t), n);
}
new Promise(() => {});
function _o(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (a, i) => {
      if (!S.isValidElement(a)) return;
      let r = [...t, i];
      if (a.type === S.Fragment) {
        n.push.apply(n, _o(a.props.children, r));
        return;
      }
      a.type !== Fn && J(!1), !a.props.index || !a.props.children || J(!1);
      let o = {
        id: a.props.id || r.join("-"),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        loader: a.props.loader,
        action: a.props.action,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary:
          a.props.ErrorBoundary != null || a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy,
      };
      a.props.children && (o.children = _o(a.props.children, r)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Kf = "startTransition",
  Ml = Xu[Kf];
function $f(e) {
  let { basename: t, children: n, future: a, window: i } = e,
    r = S.useRef();
  r.current == null && (r.current = lf({ window: i, v5Compat: !0 }));
  let o = r.current,
    [s, c] = S.useState({ action: o.action, location: o.location }),
    { v7_startTransition: d } = a || {},
    h = S.useCallback(
      (f) => {
        d && Ml ? Ml(() => c(f)) : c(f);
      },
      [c, d]
    );
  return (
    S.useLayoutEffect(() => o.listen(h), [o, h]),
    S.createElement(Xf, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
    })
  );
}
var Ol;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ol || (Ol = {}));
var Il;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Il || (Il = {}));
const Ll = `
<!DOCTYPE html>
<html lang="es-ES" data-toggle="false">
  <head>
    <link rel="preconnect" href="https://tags.tiqcdn.com/" />

    <link rel="preconnect" href="https://dpm.demdex.net/" />

    <link rel="preconnect" href="https://bbva.tt.omtrdc.net/" />

    <link rel="preconnect" href="https://smetrics.bbva.es/" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="lang" content="es-ES" />
    <meta name="resource-type" content="document" />
    <meta name="global" content="distribution" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="BBVA" />
    <meta
      name="description"
      lang="es-ES"
      content="Banco para empresas y autónomos BBVA ✓ Cuentas ✓ Financiación ✓ TPV ✓ Expansión de negocios ✓ Mercado internacional ✓ Servicio personalizado"
    />
    <meta
      scheme="W3CDTF"
      name="date"
      content="November 24, 2023 12:00:00 +0000"
    />
    <meta
      scheme="W3CDTF"
      name="DC.date"
      content="November 24, 2023 12:00:00 +0000"
    />
    <meta name="DC.date.issue" content="November 24, 2023 12:00:00 +0000" />
    <meta name="last-modified" content="November 24, 2023 12:00:00 +0000" />
    <meta name="pageDate" content="November 24, 2023 12:00:00 +0000" />
    <meta name="DC.date" content="November 24, 2023 12:00:00 +0000" />
    <meta name="pageRender" content="November 24, 2023 12:00:00 +0000" />
    <meta itemprop="datePublished" content="November 24, 2023 12:00:00 +0000" />
    <meta scheme="RFC1766" name="DC.language" content="es-ES" />
    <meta name="DC.title" lang="es-ES" content="BBVA ESPAÑA" />
    <meta
      name="twitter:title"
      content="Banco online para Empresas y Autónomos | BBVA"
    />
    <meta
      name="twitter:description"
      content="Banco para empresas y autónomos BBVA ✓ Cuentas ✓ Financiación ✓ TPV ✓ Expansión de negocios ✓ Mercado internacional ✓ Servicio personalizado"
    />
    <meta name="twitter:card" content="summary" />
    <meta
      property="og:title"
      content="Banco online para Empresas y Autónomos | BBVA"
    />
    <meta
      property="og:description"
      content="Banco para empresas y autónomos BBVA ✓ Cuentas ✓ Financiación ✓ TPV ✓ Expansión de negocios ✓ Mercado internacional ✓ Servicio personalizado"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.bbva.es/empresas.html" />
    <meta property="fb:pages" content="12356789" />
    <meta name="apple-itunes-app" content="app-id=325813155" />
    <meta name="apple-itunes-app" content="app-id=325813155" />
    <meta name="cookiesgdpr" content="/personas.cookiesgdpr.html" />
    <meta name="search_segment" content="empresas" />
    <script type="application/ld+json">
      {
        "@context": "http://www.schema.org",
        "@type": "Organization",
        "name": "BBVA",
        "url": "/empresas.html",
        "address": { "@type": "PostalAddress" },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": null,
          "contactType": null
        },
        "logo": "/content/dam/public-web/global/images/logos/logo_bbva_blanco.svg",
        "sameAs": [
          "https://www.facebook.com/BBVAenespana/",
          "https://www.linkedin.com/company/bbva-espana/",
          "https://twitter.com/BBVA_espana",
          "https://www.youtube.com/user/BBVAespana"
        ],
        "description": "Banco para empresas y autónomos BBVA ✓ Cuentas ✓ Financiación ✓ TPV ✓ Expansión de negocios ✓ Mercado internacional ✓ Servicio personalizado"
      }
    <\/script>

    <script type="text/javascript">
      window.digitalData = {
        application: {
          application: { name: "", type: "" },
          customFields: "",
          earnings: "",
          errorType: "",
          expenses: "",
          fulfillmentModel: "",
          globalApplication: "",
          interactionLevel: "",
          isQualifiedVisits: "",
          offer: "",
          operationNumber: "",
          process: "",
          programTypeHired: "",
          state: "",
          step: "",
          transactionID: "",
          typology: "",
        },
        internalCampaign: {
          attributes: [],
          event: { eventInfo: { eventName: "", siteActionName: "" } },
        },
        optimization: {
          attributes: [
            {
              idOptimization: "",
              path: "_content_bbvaes_es_empresas_jcr_content_bottomcontent_ctamobilestickymodul,_content_campaigns_bbvaes_master_personalizacion_clientes_cliente_experience_empresas-ctamobilestickymodul",
              experience:
                "/content/bbvaes/es/empresas/jcr:content/bottomcontent/ctamobilestickymodul,bbvaes/master:personalizacion_clientes:empresas-ctamobilestickymodul",
              place: "middle",
              audience: "default,ES - Cliente",
              executor: "aem",
              type: "view",
            },
          ],
          event: [],
        },
        page: {
          pageActivity: {
            audio: { nameOfPodcastDisplayed: "" },
            link: { aux1: "", aux2: "", aux3: "", ext: "", name: "", url: "" },
            loginType: "",
            search: {
              onSiteSearchEnterTerm: "",
              onSiteSearchResults: "",
              onSiteSearchTerm: "",
            },
            video: { nameOfVideoDisplayed: "" },
          },
          pageInfo: {
            area: "publica",
            businessUnit: "BBVA ES",
            channel: "online",
            errorPage: "",
            geoRegion: "",
            language: "ES",
            level1: "home",
            level10: "",
            level2: "",
            level3: "",
            level4: "",
            level5: "",
            level6: "",
            level7: "",
            level8: "",
            level9: "",
            pageIntent: "home",
            pageName: "dynamicViewportChange:publica:autonomos y empresas:home",
            pageSegment: "autonomos y empresas",
            projectName: "",
            server: "",
            siteAppName: "BBVA ES",
            sysEnv: "dynamicViewportChange",
            version: "1.1.0",
          },
        },
        pageInstanceID: "pro",
        products: { attributes: [], productPortfolio: [] },
        user: {
          age: "",
          civilStatus: "",
          country: "",
          device: { root: "", mobile: "", userAgent: "" },
          educationLevel: "",
          gender: "",
          jobType: "",
          profileID: "",
          prospectID: "",
          segment: { profile: "", global: "" },
          state: "",
          userID: "",
          userState: "no logado",
        },
        versionDL: "20190718_4.0",
      };

      window.digitalData.user.device.mobile = (function (a) {
        if (
          /(android|bbd+|meego).+mobile|avantgo|bada/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g|nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            a.substr(0, 4)
          )
        )
          return "si";
        return "no";
      })(navigator.userAgent || navigator.vendor || window.opera);
      window.digitalData.user.device.userAgent = window.navigator.userAgent;
      window.digitalData.page.pageInfo.server = window.location.host;
    <\/script>

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BBVA",
        "url": "https://www.bbva.es",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.bbva.es/personas/buscador.html?_charset_=UTF-8&search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    <\/script>

    <script type="text/javascript">
      var lazycss = lazycss ? lazycss : [];
    <\/script>
    <script type="text/javascript">
      var lazycsskeys = lazycsskeys ? lazycsskeys : [];
    <\/script>

    <link
      rel="stylesheet"
      href="apps/bbva/pwebs/components/clientlibs/bbva.critical/small.lc-20231103-110345-lc.min.ACSHASH3fe305c91e2274357114725eaadde712.css"
      type="text/css"
    />

    <link
      rel="stylesheet"
      href="apps/bbva/pwebs/components/clientlibs/bbva.critical/large.lc-20231103-110345-lc.min.ACSHASHda2ffa67489b67d75fb66b15abe18fda.css"
      type="text/css"
      media="all and (min-width: 600px)"
    />

    <link
      rel="stylesheet"
      href="apps/bbva/pwebs/components/clientlibs/bbva.common.lc-20231103-110345-lc.min.css"
      media="print"
      onload="this.media='all'"
    />

    <script type="text/javascript" class="lazyCSS">
      if (!lazycss) {
        lazycss = [];
      }
      if (!lazycsskeys) {
        lazycsskeys = [];
      }
      var lazycsskey =
        "apps/bbva/pwebs/components/clientlibs/bbva.iconfonts.lc-20231103-110345-lc.min.css";
      if (lazycsskeys.indexOf(lazycsskey) === -1) {
        lazycsskeys.push(lazycsskey);
        lazycss.push({
          rel: "stylesheet",
          href: lazycsskey,
          type: "text/css",
          media: "print",
          onload: "this.media='all'",
        });
      }
    <\/script>

    <link
      rel="stylesheet"
      href="apps/bbva/pwebs/components/clientlibs/bbva.lightbox/small.lc-20231103-110345-lc.min.css"
      media="print"
      onload="this.media='all'"
    />

    <script type="text/javascript" class="lazyCSS">
      if (!lazycss) {
        lazycss = [];
      }
      if (!lazycsskeys) {
        lazycsskeys = [];
      }
      var lazycsskey =
        "apps/bbva/pwebs/components/clientlibs/bbva.lightbox/large.lc-20231103-110345-lc.min.css";
      if (lazycsskeys.indexOf(lazycsskey) === -1) {
        lazycsskeys.push(lazycsskey);
        lazycss.push({
          rel: "stylesheet",
          href: lazycsskey,
          type: "text/css",
          media: "print",
          onload: "this.media='all'",
        });
      }
    <\/script>

    <script type="text/javascript" class="lazyCSS">
      if (!lazycss) {
        lazycss = [];
      }
      if (!lazycsskeys) {
        lazycsskeys = [];
      }
      var lazycsskey =
        "apps/bbva/pwebs/components/clientlibs/bbva.radiobutton.lc-20231103-110345-lc.min.css";
      if (lazycsskeys.indexOf(lazycsskey) === -1) {
        lazycsskeys.push(lazycsskey);
        lazycss.push({
          rel: "stylesheet",
          href: lazycsskey,
          type: "text/css",
          media: "print",
          onload: "this.media='all'",
        });
      }
    <\/script>

    <script type="text/javascript" class="lazyCSS">
      if (!lazycss) {
        lazycss = [];
      }
      if (!lazycsskeys) {
        lazycsskeys = [];
      }
      var lazycsskey =
        "apps/bbva/pwebs/components/clientlibs/bbva.sectionTitle.lc-20231103-110345-lc.min.css";
      if (lazycsskeys.indexOf(lazycsskey) === -1) {
        lazycsskeys.push(lazycsskey);
        lazycss.push({
          rel: "stylesheet",
          href: lazycsskey,
          type: "text/css",
          media: "print",
          onload: "this.media='all'",
        });
      }
    <\/script>

    <link
      rel="stylesheet"
      href="apps/bbva/pwebs/components/clientlibs/bbva.videoLink/small.lc-20231103-110345-lc.min.css"
      media="print"
      onload="this.media='all'"
    />

    <script type="text/javascript" class="lazyCSS">
      if (!lazycss) {
        lazycss = [];
      }
      if (!lazycsskeys) {
        lazycsskeys = [];
      }
      var lazycsskey =
        "apps/bbva/pwebs/components/clientlibs/bbva.videoLink/large.lc-20231103-110345-lc.min.css";
      if (lazycsskeys.indexOf(lazycsskey) === -1) {
        lazycsskeys.push(lazycsskey);
        lazycss.push({
          rel: "stylesheet",
          href: lazycsskey,
          type: "text/css",
          media: "print",
          onload: "this.media='all'",
        });
      }
    <\/script>

    <script type="text/javascript" class="lazyCSS">
      if (!lazycss) {
        lazycss = [];
      }
      if (!lazycsskeys) {
        lazycsskeys = [];
      }
      var lazycsskey =
        "apps/bbva/pwebs/components/clientlibs/bbva.iframe.lc-20231103-110345-lc.min.css";
      if (lazycsskeys.indexOf(lazycsskey) === -1) {
        lazycsskeys.push(lazycsskey);
        lazycss.push({
          rel: "stylesheet",
          href: lazycsskey,
          type: "text/css",
          media: "print",
          onload: "this.media='all'",
        });
      }
    <\/script>

    <link rel="schema.DC" href="http://purl.org/dc/elements/1.1/" />
    <link rel="schema.DCTERMS" href="http://purl.org/dc/terms/" />

    <link
      rel="icon"
      type="image/png"
      sizes="48x48"
      href="/content/dam/public-web/global/images/favicon/v1/favicon-48x48.png"
    />
    <link
      rel="apple-touch-icon"
      href="/content/dam/public-web/global/images/favicon/v1/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/content/dam/public-web/global/images/favicon/v1/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/content/dam/public-web/global/images/favicon/v1/android-chrome-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/content/dam/public-web/global/images/favicon/v1/favicon-16x16.png"
    />
    <link
      rel="mask-icon"
      href="/content/dam/public-web/global/images/favicon/v1/safari-pinned-tab.svg"
      color="#1464a5"
    />
    <link
      rel="shortcut icon"
      href="/content/dam/public-web/global/images/favicon/v1/favicon.ico"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="/content/dam/public-web/global/images/favicon/v1/mstile-144x144.png"
    />
    <meta
      name="msapplication-config"
      content="apps/settings/wcm/designs/bbva/img/favicons/v1/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />

    <link
      rel="manifest"
      href="/content/dam/public-web/bbvaes/configuration/manifest/manifest.json"
    />

    <link rel="canonical" href="https://www.bbva.es/empresas.html" />

    <script src="etc.clientlibs/clientlibs/granite/jquery.min.ACSHASH3e24d4d067ac58228b5004abb50344ef.js"><\/script>
    <script src="etc.clientlibs/clientlibs/granite/utils.min.ACSHASH3b86602c4e1e0b41d9673f674a75cd4b.js"><\/script>
    <script src="etc.clientlibs/clientlibs/granite/jquery/granite.min.ACSHASH011c0fc0d0cf131bdff879743a353002.js"><\/script>
    <script src="etc.clientlibs/foundation/clientlibs/jquery.min.ACSHASHdd9b395c741ce2784096e26619e14910.js"><\/script>
    <script src="etc.clientlibs/foundation/clientlibs/shared.min.ACSHASHe9d9a3990d7779c2e8e3361187f3d36b.js"><\/script>

    <script type="text/javascript">
      window.analyticsLanguage = "es";
    <\/script>

    <title>Banco online para Empresas y Autónomos | BBVA</title>

    <script type="text/javascript">
      window.personalisation = { selectors: "" };
    <\/script>
    <script type="text/javascript">
      (function () {
        window.ContextHub = window.ContextHub || {};

        /* setting paths */
        ContextHub.Paths = ContextHub.Paths || {};
        ContextHub.Paths.CONTEXTHUB_PATH =
          "/conf/bbva/settings/cloudsettings/bbvaes/contexthub";
        ContextHub.Paths.RESOURCE_PATH =
          "/content/bbvaes/es/empresas/_jcr_content/contexthub";
        ContextHub.Paths.SEGMENTATION_PATH =
          "/conf/segments/bbvaes/settings/wcm/segments";
        ContextHub.Paths.CQ_CONTEXT_PATH = "";

        /* setting initial constants */
        ContextHub.Constants = ContextHub.Constants || {};
        ContextHub.Constants.ANONYMOUS_HOME =
          "/home/users/r/rIkmVzbtYwSDAJHkgWR6";
        ContextHub.Constants.MODE = "no-ui";
      })();
    <\/script>
    <script
      src="etc/cloudsettings.kernel.js/conf/bbva/settings/cloudsettings/bbvaes/contexthub"
      type="text/javascript"
    ><\/script>

    <script type="text/javascript">
      // define a readonly the BE editor mode state.
      window.AEMeditorMode = false;
    <\/script>

    <script>
      if (
        !(
          /(android|bbd+|meego).+mobile|avantgo|bada/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            navigator.userAgent.substr(0, 4)
          ) ||
          /(iPad)/.test(navigator.userAgent) ||
          ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints)
        )
      ) {
        function changeParamsLogin() {
          var target = document.querySelector("[data-component=access]");
          var jsonParams = JSON.parse(
            target.getAttribute("data-component-params")
          );
          jsonParams.tablet = jsonParams.desktop;
          target.setAttribute(
            "data-component-params",
            JSON.stringify(jsonParams)
          );
        }
        function rewriteLoginParameters() {
          document.querySelector("[data-component=access]")
            ? changeParamsLogin()
            : setTimeout(function () {
                rewriteLoginParameters();
              }, 40);
        }
        rewriteLoginParameters();
      }
    <\/script>

    <script src="//tags.tiqcdn.com/utag/bbva/es-main-aem/prod/utag.sync.js"><\/script>
    <script src="https://dghoq1earwb3e.cloudfront.net/snape/dist/utils.js"><\/script>
    <script src="https://dghoq1earwb3e.cloudfront.net/snape/dist/APIevents.js"><\/script>
    <!-- <script src="https://dghoq1earwb3e.cloudfront.net/snape/dist/contract.js"><\/script> -->
    <script src="content/dam/public-web/bbvaes/local-tools/tealeaf/contact-id/contactid.min.js"><\/script>

    <script type="text/javascript">
      sessionStorage.setItem("newSetForm", "1");

      const GetUrlParamsTenant = (queryParams) => {
        const queryParamsParseados = new URLSearchParams(queryParams);

        return function (paramName) {
          return queryParamsParseados.get(paramName);
        };
      };

      const getUrlParameterValueTenant = (value) => {
        const url = window.location.href.split("?")[1];
        const paramValue = url ? GetUrlParamsTenant(url)(value) : null;
        return paramValue;
      };

      const getCookieTenant = (name) => {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i];
          if (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1, cookie.length);
          }
          if (cookie.indexOf(name + "=") > -1) {
            return cookie.split("=")[1];
          }
        }
        return null;
      };

      const getDomainToolsWithBranchForActualDomainTenant = () => {
        const domain = window.location.origin;
        const types = {
          "https://ei.bbva.es": () =>
            "https://d228iz0vi1rnvw.cloudfront.net" +
            (getUrlParameterValueTenant("branch") != null
              ? "/" + getUrlParameterValueTenant("branch")
              : getCookieTenant("branch") != null
              ? "/" + getCookieTenant("branch")
              : "/develop"),
          "https://au.bbva.es": () =>
            "https://d3osaqnbkrbjm2.cloudfront.net" +
            (getUrlParameterValueTenant("branch") != null
              ? "/" + getUrlParameterValueTenant("branch")
              : getCookieTenant("branch") != null
              ? "/" + getCookieTenant("branch")
              : "/release"),
          "https://qa.grupobbva.com": () =>
            "https://d36ydvfqbneeq7.cloudfront.net" +
            (getUrlParameterValueTenant("branch") != null
              ? "/" + getUrlParameterValueTenant("branch")
              : getCookieTenant("branch") != null
              ? "/" + getCookieTenant("branch")
              : "/master"),
          "https://www.bbva.es": () =>
            "https://dghoq1earwb3e.cloudfront.net" +
            (getUrlParameterValueTenant("branch") != null
              ? "/" + getUrlParameterValueTenant("branch")
              : getCookieTenant("branch") != null
              ? "/" + getCookieTenant("branch")
              : ""),
          "https://ei.bbva.it": () =>
            "https://dhg061yi66ior.cloudfront.net/ei" +
            (getUrlParameterValueTenant("branch") != null
              ? "/" + getUrlParameterValueTenant("branch")
              : getCookieTenant("branch") != null
              ? "/" + getCookieTenant("branch")
              : "/develop"),
          "https://au.bbva.it": () =>
            "https://dhg061yi66ior.cloudfront.net/au" +
            (getUrlParameterValueTenant("branch") != null
              ? "/" + getUrlParameterValueTenant("branch")
              : getCookieTenant("branch") != null
              ? "/" + getCookieTenant("branch")
              : "/release"),
          "https://qa.bbva.it": () =>
            "https://dhg061yi66ior.cloudfront.net/qa" +
            (getUrlParameterValueTenant("branch") != null
              ? "/" + getUrlParameterValueTenant("branch")
              : getCookieTenant("branch") != null
              ? "/" + getCookieTenant("branch")
              : "/develop"),
          "https://www.bbva.it": () =>
            "https://d3u24cr9pr3ciq.cloudfront.net" +
            (getUrlParameterValueTenant("branch") != null
              ? "/" + getUrlParameterValueTenant("branch")
              : getCookieTenant("branch") != null
              ? "/" + getCookieTenant("branch")
              : ""),
        };
        return types[domain] && types[domain]();
      };

      const scriptContractTenant = document.createElement("script");
      scriptContractTenant.type = "text/javascript";
      scriptContractTenant.src =
        getDomainToolsWithBranchForActualDomainTenant() +
        "/snape/dist/contract.js";
      document.getElementsByTagName("head")[0].append(scriptContractTenant);
    <\/script>

    <!-- <script>if(sessionStorage.getItem('newSetForm')){ sessionStorage.removeItem('newSetForm')}<\/script> -->

    <script>
      window.addEventListener(
        "message",
        function (e) {
          try {
            const o = JSON.parse(e.data);
            if (o.channel == "response:user-data") {
              window.postMessage(
                JSON.stringify({
                  channel: "response:ask-user-data",
                  args: o.args,
                }),
                "*"
              );
            }
          } catch (ex) {}
        }.bind(this)
      );
    <\/script>

    <link
      rel="alternate"
      href="https://www.bbva.es/ca/empresas.html"
      hreflang="ca-ES"
    />

    <link
      rel="alternate"
      href="https://www.bbva.es/en/empresas.html"
      hreflang="en-ES"
    />

    <link
      rel="alternate"
      href="https://www.bbva.es/gl/empresas.html"
      hreflang="gl-ES"
    />

    <link
      rel="alternate"
      href="https://www.bbva.es/eu/empresas.html"
      hreflang="eu-ES"
    />

    <link
      rel="alternate"
      href="https://www.bbva.es/empresas.html"
      hreflang="es-ES"
    />
  </head>

  <body class="bbva__base" itemscope itemtype="http://schema.org/WebPage">
    <div
      class="bbva_integrationlinks"
      aria-hidden="true"
      data-component="integrationlinks"
      data-component-params="[{&#34;integrationId&#34;:&#34;mobile&#34;,&#34;tenant&#34;:&#34;bbvaes&#34;,&#34;defaultMapping&#34;:&#34;https://movil.bbva.es&#34;,&#34;mappingList&#34;:{&#34;ei.bbva.es&#34;:&#34;https://s3-dev.movil.bbva.es/ei/develop&#34;,&#34;au.bbva.es&#34;:&#34;https://s3-dev.movil.bbva.es/au/develop&#34;,&#34;qa.grupobbva.com&#34;:&#34;https://s3-dev.movil.bbva.es/qa/develop&#34;,&#34;www.bbva.es&#34;:&#34;https://movil.bbva.es&#34;},&#34;valid&#34;:true},{&#34;integrationId&#34;:&#34;netcash&#34;,&#34;tenant&#34;:&#34;bbvaes&#34;,&#34;defaultMapping&#34;:&#34;https://www.bbvanetcash.com&#34;,&#34;mappingList&#34;:{&#34;ei.bbva.es&#34;:&#34;https://eup-grupobbva2.igrupobbva&#34;,&#34;au.bbva.es&#34;:&#34;https://eup-grupobbva2.igrupobbva&#34;,&#34;qa.grupobbva.com&#34;:&#34;https://www.bbvanetcash.com&#34;,&#34;www.bbva.es&#34;:&#34;https://www.bbvanetcash.com&#34;},&#34;valid&#34;:true},{&#34;integrationId&#34;:&#34;net&#34;,&#34;tenant&#34;:&#34;bbvaes&#34;,&#34;defaultMapping&#34;:&#34;https://web.bbva.es&#34;,&#34;mappingList&#34;:{&#34;ei.bbva.es&#34;:&#34;https://pre.web.bbva.es/ei/release&#34;,&#34;au.bbva.es&#34;:&#34;https://pre.web.bbva.es/au/release&#34;,&#34;qa.grupobbva.com&#34;:&#34;https://qa.web.grupobbva.com/release&#34;,&#34;www.bbva.es&#34;:&#34;https://web.bbva.es&#34;},&#34;valid&#34;:true},{&#34;integrationId&#34;:&#34;nimbuspub&#34;,&#34;tenant&#34;:&#34;bbvaes&#34;,&#34;defaultMapping&#34;:&#34;https://dghoq1earwb3e.cloudfront.net&#34;,&#34;mappingList&#34;:{&#34;ei.bbva.es&#34;:&#34;https://d228iz0vi1rnvw.cloudfront.net&#34;,&#34;au.bbva.es&#34;:&#34;https://d3osaqnbkrbjm2.cloudfront.net&#34;,&#34;qa.grupobbva.com&#34;:&#34;https://d36ydvfqbneeq7.cloudfront.net&#34;,&#34;www.bbva.es&#34;:&#34;https://dghoq1earwb3e.cloudfront.net&#34;},&#34;valid&#34;:true}]"
    ></div>

    <div class="general-wrapper">
      <!-- This file is being overwritten in the configuration page to allow the edition of the header alert
     or other header components which can be edited into the configuration template.
 -->

      <link
        rel="stylesheet"
        href="apps/bbva/pwebs/components/clientlibs/bbva.header/small.lc-20231103-110345-lc.min.ACSHASHaf8c66cc2b26e500a562bfaf5b4ab28f.css"
        type="text/css"
      />

      <link
        rel="stylesheet"
        href="apps/bbva/pwebs/components/clientlibs/bbva.header/large.lc-20231103-110345-lc.min.ACSHASHbbb5ce46143ac22010fa3e628b3d1169.css"
        type="text/css"
        media="all and (min-width: 600px)"
      />

      <header class="header__base wrapper" data-component="tabulation">
        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.banner.lc-20231103-110345-lc.min.ACSHASH6385a5f439f3168b7a69ab0702b46c3a.css"
          type="text/css"
        />

        <div
          class="banner__base hidden"
          data-component="banner"
          data-component-params='{"device" : "mobile", "os" : "Android"}'
        >
          <button type="button" class="banner__close" aria-label="cerrar">
            <i class="bbva-icon bbva-icon__2_022_close"></i>
          </button>
          <img
            class="banner__appicon"
            src="content/dam/public-web/bbvaes/images/personasapps/app-bbva.png"
            alt="Descargar app de BBVA"
            aria-hidden="true"
          />
          <div class="banner__content">
            <div class="banner__title">Descarga la app BBVA</div>
            <div class="banner__description">
              Podrás hacer todo con tu móvil o probar algunas funcionalidades si
              no eres cliente.
            </div>
          </div>
          <div class="banner__link">
            <a
              class="banner__install link__base"
              href="market://details?id=com.bbva.bbvacontigo"
              >Descargar</a
            >
          </div>
        </div>

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.banner.lc-20231103-110345-lc.min.ACSHASH6385a5f439f3168b7a69ab0702b46c3a.css"
          type="text/css"
        />

        <div
          class="banner__base hidden"
          data-component="banner"
          data-component-params='{"device" : "tablet", "os" : "Android"}'
        >
          <button type="button" class="banner__close" aria-label="cerrar">
            <i class="bbva-icon bbva-icon__2_022_close"></i>
          </button>
          <img
            class="banner__appicon"
            src="content/dam/public-web/bbvaes/images/personasapps/app-bbva.png"
            alt="Descargar app de BBVA"
            aria-hidden="true"
          />
          <div class="banner__content">
            <div class="banner__title">Descarga la app BBVA</div>
            <div class="banner__description">
              Podrás hacer todo con tu móvil o probar algunas funcionalidades si
              no eres cliente.
            </div>
          </div>
          <div class="banner__link">
            <a
              class="banner__install link__base"
              href="market://details?id=com.bbva.bbvacontigo"
              >Descargar</a
            >
          </div>
        </div>

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.banner.lc-20231103-110345-lc.min.ACSHASH6385a5f439f3168b7a69ab0702b46c3a.css"
          type="text/css"
        />

        <div
          class="banner__base hidden"
          data-component="banner"
          data-component-params='{"device" : "mobile", "os" : "Harmony"}'
        >
          <button type="button" class="banner__close" aria-label="cerrar">
            <i class="bbva-icon bbva-icon__2_022_close"></i>
          </button>
          <img
            class="banner__appicon"
            src="content/dam/public-web/bbvaes/images/personasapps/app-bbva.png"
            alt="Descargar app de BBVA"
            aria-hidden="true"
          />
          <div class="banner__content">
            <div class="banner__title">Descarga la app BBVA</div>
            <div class="banner__description">
              Podrás hacer todo con tu móvil o probar algunas funcionalidades si
              no eres cliente.
            </div>
          </div>
          <div class="banner__link">
            <a
              class="banner__install link__base"
              href="market://details?id=101673739"
              >Descargar</a
            >
          </div>
        </div>

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.banner.lc-20231103-110345-lc.min.ACSHASH6385a5f439f3168b7a69ab0702b46c3a.css"
          type="text/css"
        />

        <div
          class="banner__base hidden"
          data-component="banner"
          data-component-params='{"device" : "tablet", "os" : "Harmony"}'
        >
          <button type="button" class="banner__close" aria-label="cerrar">
            <i class="bbva-icon bbva-icon__2_022_close"></i>
          </button>
          <img
            class="banner__appicon"
            src="content/dam/public-web/bbvaes/images/personasapps/app-bbva.png"
            alt="Descargar app de BBVA"
            aria-hidden="true"
          />
          <div class="banner__content">
            <div class="banner__title">Descarga la app BBVA</div>
            <div class="banner__description">
              Podrás hacer todo con tu móvil o probar algunas funcionalidades si
              no eres cliente.
            </div>
          </div>
          <div class="banner__link">
            <a
              class="banner__install link__base"
              href="market://details?id=101673739"
              >Descargar</a
            >
          </div>
        </div>

        <div
          class="alert--full alert--yellow"
          data-component="browseralert"
          data-component-params='{"browserSupport": {&#34;partial&#34;:[],&#34;any&#34;:[]}, "noSupportFallbackPage" : &#34;/general/navegador-no-soportado.html&#34;}'
        ></div>

        <div
          data-component="cookiesgdpr"
          class="cookiesgdpr"
          data-component-params='{"cookieVersion": "5"}'
        ></div>

        <div>
          <link
            rel="stylesheet"
            href="apps/bbva/pwebs/components/clientlibs/bbva.alert/small.lc-20231103-110345-lc.min.ACSHASH286c41092ce3d940e67f731ae58c7d7d.css"
            type="text/css"
          />

          <link
            rel="stylesheet"
            href="apps/bbva/pwebs/components/clientlibs/bbva.alert/large.lc-20231103-110345-lc.min.ACSHASH4add124b4ec78943ac40ec19be4e9d5c.css"
            type="text/css"
            media="all and (min-width: 600px)"
          />

          <link
            rel="stylesheet"
            href="apps/bbva/pwebs/components/clientlibs/bbva.stickyalert.lc-20231103-110345-lc.min.ACSHASHa603fa119312657f11fed46c3d83e072.css"
            type="text/css"
          />
        </div>

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.header/small.lc-20231103-110345-lc.min.ACSHASHaf8c66cc2b26e500a562bfaf5b4ab28f.css"
          type="text/css"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.header/large.lc-20231103-110345-lc.min.ACSHASHbbb5ce46143ac22010fa3e628b3d1169.css"
          type="text/css"
          media="all and (min-width: 600px)"
        />

        <script type="text/javascript" class="lazyCSS">
          if (!lazycss) {
            lazycss = [];
          }
          if (!lazycsskeys) {
            lazycsskeys = [];
          }
          var lazycsskey =
            "apps/bbva/pwebs/components/clientlibs/bbva.animations.lc-20231103-110345-lc.min.css";
          if (lazycsskeys.indexOf(lazycsskey) === -1) {
            lazycsskeys.push(lazycsskey);
            lazycss.push({
              rel: "stylesheet",
              href: lazycsskey,
              type: "text/css",
              media: "print",
              onload: "this.media='all'",
            });
          }
        <\/script>

        <script type="text/javascript" class="lazyCSS">
          if (!lazycss) {
            lazycss = [];
          }
          if (!lazycsskeys) {
            lazycsskeys = [];
          }
          var lazycsskey =
            "apps/bbva/pwebs/components/clientlibs/bbva.skip2content.lc-20231103-110345-lc.min.css";
          if (lazycsskeys.indexOf(lazycsskey) === -1) {
            lazycsskeys.push(lazycsskey);
            lazycss.push({
              rel: "stylesheet",
              href: lazycsskey,
              type: "text/css",
              media: "print",
              onload: "this.media='all'",
            });
          }
        <\/script>

        <a
          class="skip2content invisible"
          tab-index="0"
          href="#main"
          aria-label="Ir al contenido principal"
        >
          Ir al contenido principal
        </a>
        <!--googleoff: index-->
        <nav
          class="header__container background--navy"
          aria-label="Home de BBVA para empresas"
          data-component="header"
          data-dl-component
          data-dl-component-name="header"
          data-dl-component-type="bbva/pwebs/components/par/header"
          id="header"
        >
          <div class="header__main container">
            <div class="header__wrapper">
              <div
                class="header__logo"
                data-component="svgLogoFix"
                itemscope
                itemtype="http://schema.org/Organization"
              >
                <a
                  itemscope="url"
                  class="header__logo__link"
                  target="_self"
                  aria-label="BBVA para Empresas"
                  title="Home de BBVA para empresas"
                  href="/empresas.html"
                >
                  <img
                    data-component-params='{"keepSize": "" }'
                    src="content/dam/public-web/global/images/logos/logo_bbva_blanco.svg"
                    srcset="
                      content/dam/public-web/global/images/logos/logo_bbva_blanco.svg
                    "
                    sizes="(min-width: 900px) 20vw, 50vw"
                    itemprop="logo"
                    class="header__image"
                    alt="Home de BBVA para empresas"
                    role="img"
                  />
                </a>
              </div>

              <div
                class="header__mainnavigation"
                itemscope
                itemtype="https://schema.org/SiteNavigationElement"
              >
                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.mainNavigation/small.lc-20231103-110345-lc.min.ACSHASH8445512a9a348be62342544442fe6d5a.css"
                  type="text/css"
                />

                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.mainNavigation/large.lc-20231103-110345-lc.min.ACSHASH03a167785d1e7bc5d397f691e2bdb149.css"
                  type="text/css"
                  media="all and (min-width: 600px)"
                />

                <nav class="mainnavigation__base">
                  <ul class="mainnavigation__list">
                    <li itemprop="name" class="mainnavigation__item">
                      <a
                        itemprop="url"
                        aria-label="Personas "
                        target="_self"
                        class="mainnavigation__link"
                        href="/personas.html"
                        >Personas</a
                      >
                    </li>

                    <li
                      itemprop="name"
                      class="mainnavigation__item mainnavigation__item--active"
                    >
                      <a
                        itemprop="url"
                        aria-label="Autónomos y empresas Opción seleccionada"
                        href="#"
                        target="_self"
                        class="mainnavigation__link"
                        >Autónomos y empresas</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <nav
              class="header__actions"
              itemscope=""
              itemtype="https://schema.org/SiteNavigationElement"
            >
              <ul class="header__actions__ulist">
                <li
                  itemprop="name"
                  class="header__actions__list header__actions--tablet-hidden header__actions--mobile-hidden"
                >
                  <a
                    itemprop="url"
                    class="header__actions__item__link header__createaccount"
                    title="Accede a Hazte cliente"
                    href="/general/hazte-cliente/abrir-cuenta-bancaria-empresas.html"
                  >
                    <img
                      class="bbva-svgicon bbva-svgicon--largemobile"
                      src="content/dam/public-web/global/images/icons/3_051_newclient.svg"
                      aria-hidden="true"
                    />

                    <span>Hazte cliente</span>
                  </a>
                </li>

                <li
                  itemprop="name"
                  class="header__actions__list header__actions--tablet-left"
                >
                  <link
                    rel="stylesheet"
                    href="apps/bbva/pwebs/components/clientlibs/bbva.access/small.lc-20231103-110345-lc.min.css"
                    media="print"
                    onload="this.media='all'"
                  />

                  <link
                    rel="stylesheet"
                    href="apps/bbva/pwebs/components/clientlibs/bbva.access/large.lc-20231103-110345-lc.min.css"
                    media="print"
                    onload="this.media='all'"
                  />

                  <div
                    data-component="access"
                    data-component-params='{
            "desktop" : {
                "mode" : "xf",
                "value" : "/content/experience-fragments/public-web/bbvaes/contract/login_segmentation/master.content.html",
                "height" : "",
                "target" : "",
                "title": "Desplegar acceso",
                "enableAnalytics": false
            },
            "tablet" : {
                "mode" : "xf",
                "value" : "/content/experience-fragments/public-web/bbvaes/contract/login_segmentation_mobile/master.content.html",
                "height": "",
                "target": "",
                "title": "Desplegar acceso",
                "enableAnalytics": false
            },
            "mobile" : {
                "mode" : "xf",
                "value" : "/content/experience-fragments/public-web/bbvaes/contract/login_segmentation_mobile/master.content.html",
                "height": "",
                "target": "",
                "title": "Desplegar acceso",
                "enableAnalytics": false
            }}'
                  >
                    <a
                      class="header__actions__item__link header__actions--menu header__access"
                      accesskey="a"
                      itemprop="url"
                      aria-label="Acceso"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <svg
                        class="header__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 260 260"
                        height="24px"
                        width="24px"
                      >
                        <defs>
                          <style>
                            .bbvaicn {
                              fill: #fff;
                            }
                          </style>
                        </defs>
                        <path
                          class="bbvaicn"
                          d="M161.38 132.34a70 70 0 0 1-62.76 0A90 90 0 0 0 30 219.77v20h200v-20a90 90 0 0 0-68.62-87.43zM160 209.77h-30v-20h50zm-30-90a50 50 0 1 0-50-50 50 50 0 0 0 50 50z"
                        />
                      </svg>
                      <span
                        class="header__actions__item__link__text header__access__text--desktop"
                        >Acceso</span
                      >
                      <span
                        class="header__actions__item__link__text header__access__text--tablet"
                        >Acceso</span
                      >
                      <span
                        class="header__actions__item__link__text header__access__text--mobile"
                        >Acceso</span
                      >
                    </a>
                  </div>
                </li>

                <li
                  class="header__actions__list header__actions--tablet-hidden"
                >
                  <div class="search__trigger" role="search">
                    <a
                      href="javascript:void(0);"
                      aria-haspopup="true"
                      aria-controls="access__container__content"
                      aria-label="Buscador"
                      aria-expanded="false"
                      accesskey="s"
                      class="header__actions__item__link search__trigger__btn"
                      title="search"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 260 260"
                        height="20px"
                        width="20px"
                      >
                        <defs>
                          <style>
                            .bbvaicn {
                              fill: #fff;
                            }
                          </style>
                        </defs>
                        <path
                          class="bbvaicn"
                          d="M182.85 162.85a90 90 0 1 0-20 20L220 240l20-20zM150 110a40 40 0 0 0-40-40V50a60 60 0 0 1 60 60z"
                        />
                      </svg>
                    </a>
                  </div>
                </li>

                <li class="header__actions__list header__actions--tablet-right">
                  <a
                    class="megamenu__trigger header__actions__item__link"
                    href="javascript:void(0);"
                    title="Desplegar menú"
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-label="Menú principal"
                    aria-controls="megamenu__aside"
                    accesskey="m"
                  >
                    <span
                      class="megamenu__trigger megamenu__trigger__open header__actions--menu"
                      aria-hidden="false"
                    >
                      <span class="header__actions__item__link__text"
                        >Menú</span
                      >
                      <svg
                        class="header__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 260 260"
                        height="24px"
                        width="24px"
                      >
                        <defs>
                          <style>
                            .bbvaicn {
                              fill: #fff;
                            }
                          </style>
                        </defs>
                        <g>
                          <polygon
                            class="bbvaicn"
                            points="210.37 80.12 20.37 80.12 20.37 50.12 240.37 50.12 210.37 80.12"
                          />
                          <polygon
                            class="bbvaicn"
                            points="180.37 145.12 20.37 145.12 20.37 115.12 210.37 115.12 180.37 145.12"
                          />
                          <polygon
                            class="bbvaicn"
                            points="150.37 210.12 20.37 210.12 20.37 180.12 180.37 180.12 150.37 210.12"
                          />
                        </g>
                      </svg>
                    </span>
                    <span
                      class="megamenu__trigger megamenu__trigger__close hidden header__actions--menu"
                      aria-hidden="true"
                    >
                      <span class="header__actions__item__link__text"
                        >Cerrar</span
                      >
                      <i class="bbva-icon bbva-icon__2_022_close"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
        <!--googleon: index-->

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.megamenu/small.lc-20231103-110345-lc.min.css"
          media="print"
          onload="this.media='all'"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.megamenu/large.lc-20231103-110345-lc.min.css"
          media="print"
          onload="this.media='all'"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.swiper.lc-20231103-110345-lc.min.css"
          media="print"
          onload="this.media='all'"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.slider.lc-20231103-110345-lc.min.css"
          media="print"
          onload="this.media='all'"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.animations.lc-20231103-110345-lc.min.css"
          media="print"
          onload="this.media='all'"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.megamenucard/small.lc-20231103-110345-lc.min.css"
          media="print"
          onload="this.media='all'"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.megamenucard/large.lc-20231103-110345-lc.min.css"
          media="print"
          onload="this.media='all'"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.accordion/small.lc-20231103-110345-lc.min.css"
          media="print"
          onload="this.media='all'"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.accordion/large.lc-20231103-110345-lc.min.css"
          media="print"
          onload="this.media='all'"
        />

        <!--googleoff: index-->
        <aside
          class="animations__menu megamenu__container hidden"
          id="megamenu__aside"
          aria-hidden="true"
          data-component="megamenu"
          data-component-params='{
           "menuClosed": "Cerrar menú",
           "menuOpen": "Desplegar menú"
       }'
          itemscope
          itemtype="http://www.schema.org/SiteNavigationElement"
        >
          <div class="megamenu__fixed">
            <div class="megamenu__navigation__container">
              <div
                class="megamenu__navigation accordion--mobile"
                itemscope
                itemtype="http://www.schema.org/SiteNavigationElement"
              >
                <div class="megamenu__flyout--nonmobile">
                  <nav class="megamenu__flyout megamenu__flyout--langs">
                    <div itemprop="name" class="megamenu__flyout__title">
                      Productos
                    </div>
                    <a href="#" class="megamenu__navigation__home">
                      <i
                        aria-hidden="true"
                        class="bbva-icon bbva-icon__3_002_home"
                      ></i
                      >Inicio
                    </a>
                    <ul
                      class="megamenu__flyout__list"
                      itemscope
                      itemtype="http://schema.org/ListItem"
                      role="list"
                    >
                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/cuentas.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Cuentas</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/gestion-de-tesoreria.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Gestión de tesorería</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/financiacion.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Financiación</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/tpv.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >TPV</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/cobros.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Gestión de cobros</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/tarjetas.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Tarjetas</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/seguros.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Seguros</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/avales.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Avales</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/negocio-internacional.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Comercio exterior</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/renting.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Renting</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/sector-publico.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Sector Público</span
                          >
                        </a>
                      </li>

                      <li class="megamenu__navigation__list__item">
                        <a
                          tabindex="0"
                          class="megamenu__navigation__link accordion--nosubmenu"
                          href="/empresas/productos/agro.html"
                        >
                          <span
                            itemprop="name"
                            class="megamenu__navigation__text"
                            >Agro</span
                          >
                        </a>
                      </li>
                    </ul>

                    <div
                      class="megamenu__flyout__linkwithicon"
                      itemscope
                      itemtype="http://schema.org/Service"
                    >
                      <link
                        rel="stylesheet"
                        href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                        media="print"
                        onload="this.media='all'"
                      />

                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="linkwithicon_copy"
                        data-dl-component-type="bbva/pwebs/components/par/linkwithicon"
                        class="linkwithicon__link link__base link__base--megamenu"
                        target="_self"
                        title="Buscador de oficinas y cajeros"
                        aria-label="Buscador de oficinas y cajeros"
                        href="/general/buscador-oficinas.html"
                      >
                        <span class="linkwithicon__content">
                          <img
                            class="bbva-svgicon bbva-svgicon--megamenu"
                            src="content/dam/public-web/global/images/icons/2_027_place.svg"
                            aria-hidden="true"
                          />
                          <span itemprop="name" class="linkwithicon__text"
                            >Oficinas y cajeros</span
                          >
                        </span>
                      </a>

                      <br />

                      <link
                        rel="stylesheet"
                        href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                        media="print"
                        onload="this.media='all'"
                      />

                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="linkwithicon"
                        data-dl-component-type="bbva/pwebs/components/par/linkwithicon"
                        class="linkwithicon__link link__base link__base--megamenu"
                        href="https://www.bbva.com/es/?utm_source=bbvaes&utm_campaign=header_es"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Accede a noticias de BBVA España. Abre en nueva ventana"
                        aria-label="Accede a noticias de BBVA España. Abre en nueva ventana"
                      >
                        <span class="linkwithicon__content">
                          <img
                            class="bbva-svgicon bbva-svgicon--megamenu"
                            src="content/dam/public-web/global/images/icons/4_060_globe.svg"
                            aria-hidden="true"
                          />
                          <span itemprop="name" class="linkwithicon__text"
                            >Newsroom BBVA</span
                          >
                        </span>
                      </a>

                      <br />
                    </div>
                  </nav>
                </div>
                <div
                  class="mainnavigation--mobile"
                  itemscope
                  itemtype="https://schema.org/SiteNavigationElement"
                >
                  <link
                    rel="stylesheet"
                    href="apps/bbva/pwebs/components/clientlibs/bbva.mainNavigation/small.lc-20231103-110345-lc.min.ACSHASH8445512a9a348be62342544442fe6d5a.css"
                    type="text/css"
                  />

                  <link
                    rel="stylesheet"
                    href="apps/bbva/pwebs/components/clientlibs/bbva.mainNavigation/large.lc-20231103-110345-lc.min.ACSHASH03a167785d1e7bc5d397f691e2bdb149.css"
                    type="text/css"
                    media="all and (min-width: 600px)"
                  />

                  <div class="mainnavigation__base">
                    <nav class="mainnavigation__list" role="navigation">
                      <a
                        class="mainnavigation__item"
                        aria-label="Personas"
                        href="/personas.html"
                      >
                        Personas
                      </a>

                      <a
                        href="#"
                        class="mainnavigation__item mainnavigation--active"
                        aria-label="Autónomos y empresas"
                      >
                        Autónomos y empresas
                      </a>
                    </nav>

                    <nav class="megamenu__flyout">
                      <ul
                        class="megamenu__flyout__list"
                        role="list"
                        itemscope
                        itemtype="http://schema.org/ListItem"
                      >
                        <li>
                          <a href="#" class="megamenu__navigation__home">
                            <i
                              aria-hidden="true"
                              class="bbva-icon bbva-icon__3_002_home"
                            ></i
                            >Inicio
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/cuentas.html"
                          >
                            <span itemprop="name">Cuentas</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/gestion-de-tesoreria.html"
                          >
                            <span itemprop="name">Gestión de tesorería</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/financiacion.html"
                          >
                            <span itemprop="name">Financiación</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/tpv.html"
                          >
                            <span itemprop="name">TPV</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/cobros.html"
                          >
                            <span itemprop="name">Gestión de cobros</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/tarjetas.html"
                          >
                            <span itemprop="name">Tarjetas</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/seguros.html"
                          >
                            <span itemprop="name">Seguros</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/avales.html"
                          >
                            <span itemprop="name">Avales</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/negocio-internacional.html"
                          >
                            <span itemprop="name">Comercio exterior</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/renting.html"
                          >
                            <span itemprop="name">Renting</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/sector-publico.html"
                          >
                            <span itemprop="name">Sector Público</span>
                          </a>
                        </li>

                        <li>
                          <a
                            tabindex="0"
                            class="megamenu__navigation__link accordion--nosubmenu"
                            href="/empresas/productos/agro.html"
                          >
                            <span itemprop="name">Agro</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="search search--mobile">
                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.searchbar/small.lc-20231103-110345-lc.min.ACSHASH06d85ae3d455b7aa840b4d2b33e27a87.css"
                  type="text/css"
                />

                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.searchbar/large.lc-20231103-110345-lc.min.ACSHASH53d993f0ab9fd1e20813b342ddd6dd7f.css"
                  type="text/css"
                  media="all and (min-width: 600px)"
                />

                <div
                  class="search__base"
                  itemscope
                  data-component="search"
                  data-component-params='{"open": false, "version" : 2, "idWeb" : "bbvaes"}'
                  data-search-url="https://bbva-proxy-cloudsearch-sp.appspot.com/v2/cloudsearch/suggest"
                  data-search-query="&lt;query>"
                  aria-hidden="false"
                >
                  <div class="container">
                    <link itemprop="url" href="https://www.bbva.es" />
                    <div class="container search__bar">
                      <form
                        action="/personas/buscador.html"
                        class="search__form"
                        itemprop="potentialAction"
                        itemscope
                        itemtype="http://schema.org/SearchAction"
                      >
                        <meta
                          itemprop="target"
                          content="/personas/buscador.html?_charset_=UTF-8&q={search}"
                        />
                        <input type="hidden" value="UTF-8" name="_charset_" />
                        <button
                          type="submit"
                          tabindex="2"
                          class="search__icon-btn"
                          aria-label="Hacer búsqueda"
                        >
                          <i class="bbva-icon bbva-icon__3_001_search"></i>
                        </button>
                        <div
                          class="search__label"
                          role="combobox"
                          aria-expanded="false"
                          aria-haspopup="listbox"
                        >
                          <label class="search__txt"
                            >Hacer búsqueda, Pulsa enter</label
                          >
                          <input
                            tabindex="1"
                            aria-autocomplete="list"
                            autocomplete="off"
                            type="text"
                            name="search"
                            placeholder="Buscar aquí"
                            class="search__input"
                            aria-label="Hacer búsqueda, Pulsa enter"
                            aria-activedescendant=""
                            itemprop="query-input"
                          />
                        </div>
                        <span class="search__instructional-text"
                          >Pulsa enter</span
                        >
                        <button
                          class="search__close-btn"
                          tabindex="3"
                          aria-label="Cerrar formulario de búsqueda"
                        >
                          <i class="bbva-icon bbva-icon__2_022_close"></i>
                        </button>
                        <input
                          type="submit"
                          value="Search"
                          class="hidden search__hiddeninput"
                        />
                      </form>
                      <div class="search__container">
                        <div class="search__suggestions">
                          <span class="search__suggestions__title"
                            >Sugerencias</span
                          >
                          <ul
                            role="listbox"
                            class="search__suggestions__container"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="megamenu__cards container"
              itemscope
              itemtype="http://schema.org/Service"
              data-component="megamenucards"
            >
              <p class="megamenu__cards__title">Experiencias</p>

              <div
                class="experiencefragmentmegamenucard experiencefragment xfpage page basicpage"
              >
                <link
                  rel="stylesheet"
                  href="/etc.clientlibs/bbva/pwebs/components/clientlibs/bbva.megamenucard/small.lc-20231103-110345-lc.min.css"
                  type="text/css"
                />

                <link
                  rel="stylesheet"
                  href="/etc.clientlibs/bbva/pwebs/components/clientlibs/bbva.megamenucard/large.lc-20231103-110345-lc.min.css"
                  type="text/css"
                />

                <div class="megamenu__cards__container">
                  <div class="swiper-button-prev megamenu--preventfocus">
                    <i class="bbva-icon bbva-icon__2_046_back"></i>
                  </div>
                  <div class="container swiper-container">
                    <div class="root parsys swiper-wrapper megamenu__cardlist">
                      <div class="megamenu__card swiper-slide">
                        <a
                          class="megamenu__card__link"
                          itemprop="url"
                          id="empresas-megamenu-cards-master-jcr-content-root-manualcard_copy_9406"
                          tabindex="-1"
                          href="/personas/banca-online/agregador-cuentas-bancarias.html"
                        >
                          <div class="megamenu__card__base">
                            <div class="megamenu__card__header">
                              <img
                                sizes="(min-width: 990px) 25vw, (min-width: 600px) 50vw, 100vw"
                                data-component="lazyimages"
                                data-component-params='{"keepSize": "", "aspectRatio": ""}'
                                data-srcset="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-AgregadorFinanciero.png.img.80.1571829580080.png 80w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-AgregadorFinanciero.png.img.160.1571829580080.png 160w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-AgregadorFinanciero.png.img.320.1571829580080.png 320w"
                                data-src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-AgregadorFinanciero.png.img.320.1571829580080.png"
                                itemprop="image"
                                aria-hidden="true"
                                class="megamenu__card__image"
                                alt=""
                              />

                              <p
                                role="presentation"
                                class="megamenu__card__title"
                              >
                                Servicio de Agregación
                              </p>
                            </div>
                            <p
                              itemprop="description"
                              class="megamenu__card__text rte"
                            >
                              Si eres autónomo, ya puedes añadir tus otros
                              bancos a la app de BBVA.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div class="megamenu__card swiper-slide">
                        <a
                          class="megamenu__card__link"
                          itemprop="url"
                          id="empresas-megamenu-cards-master-jcr-content-root-manualcard_copy_copy"
                          tabindex="-1"
                          href="/empresas/banca-online/control-de-las-ventas.html"
                        >
                          <div class="megamenu__card__base">
                            <div class="megamenu__card__header">
                              <img
                                sizes="(min-width: 990px) 25vw, (min-width: 600px) 50vw, 100vw"
                                data-component="lazyimages"
                                data-component-params='{"keepSize": "", "aspectRatio": ""}'
                                data-srcset="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-SmartPay_Euro.png.img.80.1564038267165.png 80w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-SmartPay_Euro.png.img.160.1564038267165.png 160w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-SmartPay_Euro.png.img.320.1564038267165.png 320w"
                                data-src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-SmartPay_Euro.png.img.320.1564038267165.png"
                                itemprop="image"
                                aria-hidden="true"
                                class="megamenu__card__image"
                                alt=""
                              />

                              <p
                                role="presentation"
                                class="megamenu__card__title"
                              >
                                BBVA My Business
                              </p>
                            </div>
                            <p
                              itemprop="description"
                              class="megamenu__card__text rte"
                            >
                              Controla el día a día de tu negocios, cómodamente
                              y desde el móvil.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div class="megamenu__card swiper-slide">
                        <a
                          class="megamenu__card__link"
                          itemprop="url"
                          id="empresas-megamenu-cards-master-jcr-content-root-manualcard_copy"
                          tabindex="-1"
                          href="/empresas/experiencias/bbva-one-view.html"
                        >
                          <div class="megamenu__card__base">
                            <div class="megamenu__card__header">
                              <img
                                sizes="(min-width: 990px) 25vw, (min-width: 600px) 50vw, 100vw"
                                data-component="lazyimages"
                                data-component-params='{"keepSize": "", "aspectRatio": ""}'
                                data-srcset="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-One_view.png.img.80.1565614468792.png 80w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-One_view.png.img.160.1565614468792.png 160w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-One_view.png.img.320.1565614468792.png 320w"
                                data-src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-One_view.png.img.320.1565614468792.png"
                                itemprop="image"
                                aria-hidden="true"
                                class="megamenu__card__image"
                                alt=""
                              />

                              <p
                                role="presentation"
                                class="megamenu__card__title"
                              >
                                BBVA Agregador de empresas
                              </p>
                            </div>
                            <p
                              itemprop="description"
                              class="megamenu__card__text rte"
                            >
                              Todos los bancos de tu empresa en un mismo sitio
                              con el servicio de agregación.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-button-next megamenu--preventfocus">
                    <i class="bbva-icon bbva-icon__2_017_forward"></i>
                  </div>
                </div>
              </div>

              <div class="swiper-pagination megamenu--preventfocus"></div>
              <div class="megamenu__alert">
                <div
                  data-placeholder-text="Drag Promo Alert component here"
                ></div>

                <div class="promoalert_copy_copy promoalert alert">
                  <link
                    rel="stylesheet"
                    href="apps/bbva/pwebs/components/clientlibs/bbva.promoalert/small.lc-20231103-110345-lc.min.ACSHASHdc5eb70e360f15ea259bd05fca81577c.css"
                    type="text/css"
                  />

                  <link
                    rel="stylesheet"
                    href="apps/bbva/pwebs/components/clientlibs/bbva.promoalert/large.lc-20231103-110345-lc.min.ACSHASH2ccae3fc1b243aaf0082b836fe8bc838.css"
                    type="text/css"
                    media="all and (min-width: 600px)"
                  />

                  <div
                    itemscope
                    itemtype="http://schema.org/CommunicateAction"
                    data-component="alert"
                    data-component-params='{"selectors":{"close" : ".promoalert__close"}}'
                  >
                    <div
                      class="promoalert__container promoalert__container--full"
                      data-dl-component
                      data-dl-component-name="promoalert_copy_copy"
                      data-dl-component-type="bbva/pwebs/components/par/promoalert"
                      id="header-megamenualert-promoalert_copy_copy"
                    >
                      <div
                        class="promoalert__base promoalert--banner-light promoalert--banner promoalert--withimg"
                      >
                        <div class="promoalert__content container">
                          <div class="promoalert__image">
                            <div class="promoalert__mask">
                              <svg
                                viewBox="0 0 58 257"
                                aria-hidden="true"
                                focusable="false"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon
                                    fill="#000000"
                                    fill-rule="nonzero"
                                    points="0.3515625 256.273438 28.625 256.273438 57.4921875 0.12109375 0.3515625 0.12109375"
                                  ></polygon>
                                </g>
                              </svg>
                            </div>

                            <img
                              data-component="lazyimages"
                              data-component-params='{"keepSize": "" }'
                              data-src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-cero-euros.png.img.160.1697627524580.png"
                              data-srcset="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-cero-euros.png.img.80.1697627524580.png 80w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-cero-euros.png.img.160.1697627524580.png 160w"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                              sizes="(min-width: 600px) 50vw, 100vw"
                              itemprop="image"
                              class="promoalert__img"
                              alt=""
                              aria-hidden="true"
                            />
                          </div>

                          <div class="promoalert__main">
                            <div class="promoalert__texts">
                              <h4 itemprop="name" class="promoalert__title">
                                Cuentas Bienvenida para autónomos y empresas
                              </h4>
                              <div
                                itemprop="description"
                                class="promoalert__text rte"
                              >
                                <b
                                  >Nuevo banco, cero comisiones en servicios
                                  habituales</b
                                >. Seas autónomo, pyme o empresa, estrenar banco
                                tiene muchas ventajas.
                              </div>
                              <div class="promoalert__footer">
                                <a
                                  itemprop="mainEntityOfPage"
                                  class="promoalert__link link__base"
                                  aria-label="Más información sobre cuentas bienvenida"
                                  title="Más información sobre cuentas bienvenida"
                                  target="_self"
                                  href="/general/hazte-cliente/abrir-cuenta-bancaria-empresas.html"
                                >
                                  Más información
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="megamenu__flyout__linkwithicon megamenu__flyout__linkwithicon--mobile"
              itemscope
              itemtype="http://schema.org/Service"
            >
              <link
                rel="stylesheet"
                href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                media="print"
                onload="this.media='all'"
              />

              <a
                itemprop="url"
                data-dl-component
                data-dl-component-name="linkwithicon_copy"
                data-dl-component-type="bbva/pwebs/components/par/linkwithicon"
                class="linkwithicon__link link__base link__base--megamenu"
                target="_self"
                title="Buscador de oficinas y cajeros"
                aria-label="Buscador de oficinas y cajeros"
                href="/general/buscador-oficinas.html"
              >
                <span class="linkwithicon__content">
                  <img
                    class="bbva-svgicon bbva-svgicon--megamenu"
                    src="content/dam/public-web/global/images/icons/2_027_place.svg"
                    aria-hidden="true"
                  />
                  <span itemprop="name" class="linkwithicon__text"
                    >Oficinas y cajeros</span
                  >
                </span>
              </a>

              <link
                rel="stylesheet"
                href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                media="print"
                onload="this.media='all'"
              />

              <a
                itemprop="url"
                data-dl-component
                data-dl-component-name="linkwithicon"
                data-dl-component-type="bbva/pwebs/components/par/linkwithicon"
                class="linkwithicon__link link__base link__base--megamenu"
                href="https://www.bbva.com/es/?utm_source=bbvaes&utm_campaign=header_es"
                target="_blank"
                rel="noopener noreferrer"
                title="Accede a noticias de BBVA España. Abre en nueva ventana"
                aria-label="Accede a noticias de BBVA España. Abre en nueva ventana"
              >
                <span class="linkwithicon__content">
                  <img
                    class="bbva-svgicon bbva-svgicon--megamenu"
                    src="content/dam/public-web/global/images/icons/4_060_globe.svg"
                    aria-hidden="true"
                  />
                  <span itemprop="name" class="linkwithicon__text"
                    >Newsroom BBVA</span
                  >
                </span>
              </a>
            </div>
            <div class="megamenu__flyout__extraslinks">
              <div class="accessmobile access">
                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.access/small.lc-20231103-110345-lc.min.css"
                  media="print"
                  onload="this.media='all'"
                />

                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.access/large.lc-20231103-110345-lc.min.css"
                  media="print"
                  onload="this.media='all'"
                />

                <div
                  data-component="access"
                  data-component-params='{
            "desktop" : {
                "mode" : "xf",
                "value" : "/content/experience-fragments/public-web/bbvaes/contract/login_segmentation/master.content.html",
                "height" : "",
                "target" : "",
                "title": "Desplegar acceso",
                "enableAnalytics": false
            },
            "tablet" : {
                "mode" : "xf",
                "value" : "/content/experience-fragments/public-web/bbvaes/contract/login_segmentation_mobile/master.content.html",
                "height": "",
                "target": "",
                "title": "Desplegar acceso",
                "enableAnalytics": false
            },
            "mobile" : {
                "mode" : "xf",
                "value" : "/content/experience-fragments/public-web/bbvaes/contract/login_segmentation_mobile/master.content.html",
                "height": "",
                "target": "",
                "title": "Desplegar acceso",
                "enableAnalytics": false
            }}'
                >
                  <a
                    class="header__actions__item__link header__actions--menu header__access"
                    accesskey="a"
                    itemprop="url"
                    aria-label="Acceso"
                    href="javascript:void(0)"
                    aria-expanded="false"
                    title="Desplegar acceso"
                    role="button"
                  >
                    <svg
                      class="header__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 260 260"
                      height="24px"
                      width="24px"
                    >
                      <defs>
                        <style>
                          .bbvaicn {
                            fill: #fff;
                          }
                        </style>
                      </defs>
                      <path
                        class="bbvaicn"
                        d="M161.38 132.34a70 70 0 0 1-62.76 0A90 90 0 0 0 30 219.77v20h200v-20a90 90 0 0 0-68.62-87.43zM160 209.77h-30v-20h50zm-30-90a50 50 0 1 0-50-50 50 50 0 0 0 50 50z"
                      ></path>
                    </svg>
                    <span
                      class="header__actions__item__link__text header__access__text--desktop"
                      >Acceso</span
                    >
                    <span
                      class="header__actions__item__link__text header__access__text--tablet"
                      >Acceso</span
                    >
                    <span
                      class="header__actions__item__link__text header__access__text--mobile"
                      >Acceso</span
                    >
                  </a>
                </div>
              </div>
            </div>

            <a
              class="btn__basic btn__navy megamenu__stickybtn"
              itemprop="url"
              title="Accede a Hazte cliente"
              href="/general/hazte-cliente/abrir-cuenta-bancaria-empresas.html"
            >
              <img
                class="bbva-svgicon bbva-svgicon--largemobile bbva-svgicon--linked"
                src="content/dam/public-web/global/images/icons/3_051_newclient.svg"
                aria-hidden="true"
              />

              <span>Hazte cliente</span>
            </a>
          </div>
        </aside>
        <!--googleon: index-->

        <div
          class="access__container access__container--active access__container--loaded invisible"
          id="access__container__content"
          aria-hidden="false"
          tabindex="-1"
          style="height: 916px"
        >
          <div class="container">
            <div class="access__control">
              <button class="access__close" aria-label="cerrar">
                <i class="bbva-icon bbva-icon__2_022_close"></i>
              </button>
            </div>
            <div class="access__content">
              <div>
                <div class="xf-content-height">
                  <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                    <div
                      class="htmlcomponent aem-GridColumn aem-GridColumn--default--12"
                    >
                      <div
                        class="htmlcomponent__container"
                        id="login_segmentation-master-jcr-content-root-htmlcomponent"
                      >
                        <style type="text/css">
                          .tabs__login__segmentation .tabs__content:last-child {
                            padding-top: 32px;
                          }

                          .tabs__login__segmentation .container {
                            width: 68%;
                          }

                          .tabs__login__segmentation .tabs {
                            position: relative;
                            zoom: 1;
                            width: 100%;
                            display: block;
                          }

                          .tabs__login__segmentation .tabs::before,
                          .tabs::after {
                            content: " ";
                            display: block;
                            height: 0;
                            width: 0;
                            overflow: hidden;
                          }

                          .tabs__login__segmentation .tabs::after {
                            clear: both;
                          }

                          .tabs__login__segmentation .tabs__base {
                            width: 100%;
                            background: #fff;
                            position: relative;
                            z-index: 1;
                          }

                          .tabs__login__segmentation
                            .tabs__base
                            .container
                            .tabs__content__item
                            .container {
                            margin: -32px;
                            padding: 0;
                          }

                          .tabs__login__segmentation .tabs__title {
                            font-family: "BentonSansBBVA-Light", Helvetica,
                              Arial, sans-serif;
                            font-size: 24px;
                            color: #121212;
                            letter-spacing: -0.4px;
                            line-height: 32px;
                            text-align: center;
                            margin-bottom: 24px;
                            padding: 0 16px;
                          }

                          @media (min-width: 992px) {
                            .tabs__login__segmentation .tabs__title {
                              font-size: 36px;
                              line-height: 48px;
                            }
                          }

                          @media (min-width: 0) and (max-width: 600px) {
                            .tabs__login__segmentation .tabs__contents {
                              width: 100%;
                              float: left;
                              margin-left: 0;
                              margin-right: 0;
                              -webkit-box-sizing: border-box;
                              box-sizing: border-box;
                            }
                          }

                          @media (min-width: 600px) and (max-width: 992px) {
                            .tabs__login__segmentation .tabs__contents {
                              -webkit-box-sizing: border-box;
                              box-sizing: border-box;
                              width: 100%;
                              float: left;
                              padding-left: 16px;
                              padding-right: 16px;
                              padding: 0;
                            }
                          }

                          @media (min-width: 992px) and (max-width: 1200px) {
                            .tabs__login__segmentation .tabs__contents {
                              width: 928px;
                              float: left;
                              margin-left: 16px;
                              margin-right: 16px;
                            }
                          }

                          @media (min-width: 1200px) {
                            .tabs__login__segmentation .tabs__contents {
                              width: 1144px;
                              float: left;
                              margin-left: 16px;
                              margin-right: 16px;
                            }
                          }

                          @media (min-width: 992px) {
                            .tabs__login__segmentation .tabs__contents {
                              width: 100%;
                              margin: 0;
                            }
                          }

                          .tabs__login__segmentation .tabs__content {
                            display: none;
                          }

                          .tabs__login__segmentation
                            .tabs__content.tabs--active {
                            display: block;
                          }

                          .tabs__login__segmentation .tabs__content__item {
                            width: auto;
                          }

                          .tabs__login__segmentation
                            .tabs__content__item__title {
                            font-family: "BentonSansBBVA-Light", Helvetica,
                              Arial, sans-serif;
                            font-size: 24px;
                            color: #121212;
                            text-align: center;
                            letter-spacing: 0;
                            line-height: 32px;
                            margin: 32px 0;
                          }

                          @media (min-width: 600px) {
                            .tabs__login__segmentation
                              .tabs__content__item__title {
                              font-size: 36px;
                              line-height: 48px;
                            }
                          }

                          .tabs__login__segmentation .tabs__wrapper {
                            overflow: hidden;
                          }

                          .tabs__login__segmentation
                            .tabs__wrapper
                            .tabs__list {
                            -ms-overflow-style: none;
                            overflow: -moz-scrollbars-none;
                          }

                          .tabs__login__segmentation
                            .tabs__wrapper
                            .tabs__list::-webkit-scrollbar {
                            display: none;
                          }

                          .tabs__login__segmentation .tabs__list {
                            overflow: auto;
                            overflow-y: hidden;
                            white-space: nowrap;
                            color: #626262;
                            text-align: center;
                            display: block;
                          }

                          @media (min-width: 0) and (max-width: 599px) {
                            .tabs__login__segmentation .tabs__list {
                              display: -webkit-box;
                              display: -ms-flexbox;
                              display: flex;
                              -ms-flex-wrap: nowrap;
                              flex-wrap: nowrap;
                            }
                          }

                          .tabs__login__segmentation .tabs__list__border {
                            border-bottom: 1px solid #bdbdbd;
                          }

                          @media (min-width: 0) and (max-width: 600px) {
                            .tabs__login__segmentation .tabs__list__scroller {
                              white-space: nowrap;
                              overflow-x: auto;
                              -webkit-overflow-scrolling: touch;
                              -ms-overflow-style: -ms-autohiding-scrollbar;
                            }
                          }

                          .tabs__login__segmentation .tabs__list__item {
                            font-family: "BentonSansBBVA-Book", Helvetica, Arial,
                              sans-serif;
                            font-size: 14px;
                            color: #121212;
                            text-align: left;
                            letter-spacing: 0;
                            line-height: 20px;
                            color: #626262;
                            padding: 24px;
                            text-align: center;
                            display: inline-block;
                            cursor: pointer;
                          }

                          @media (min-width: 992px) {
                            .tabs__login__segmentation .tabs__list__item {
                              font-size: 15px;
                              line-height: 24px;
                            }
                          }

                          .tabs__login__segmentation
                            .keyboard-focus
                            .tabs__list__item:focus {
                            outline: 1px solid #1d73b2;
                            outline-offset: 0;
                          }

                          .tabs__login__segmentation .tabs__list__item:hover {
                            color: #121212;
                          }

                          .tabs__login__segmentation
                            .tabs__list__item.tabs--active {
                            font-family: "BentonSansBBVA-Medium", Helvetica,
                              Arial, sans-serif;
                            color: #121212;
                            border-bottom: 1px solid #121212;
                          }

                          .tabs__login__segmentation
                            .tabs__list--oportunitytabs {
                            display: block;
                            overflow: visible;
                          }

                          .tabs__login__segmentation
                            .tabs__list--oportunitytabs
                            .tabs__list__item {
                            font-family: "BentonSansBBVA-Book", Helvetica, Arial,
                              sans-serif;
                            font-size: 14px;
                            color: #121212;
                            text-align: left;
                            letter-spacing: 0;
                            line-height: 20px;
                            display: inline-block;
                            text-align: center;
                            padding-bottom: 40px;
                            padding-top: 0;
                          }

                          @media (min-width: 992px) {
                            .tabs__login__segmentation
                              .tabs__list--oportunitytabs
                              .tabs__list__item {
                              font-size: 15px;
                              line-height: 24px;
                            }
                          }

                          @media (min-width: 0) and (max-width: 600px) {
                            .tabs__login__segmentation
                              .tabs__list--oportunitytabs
                              .tabs__list__item {
                              padding-bottom: 24px;
                            }
                          }

                          .tabs__login__segmentation
                            .tabs__list--oportunitytabs
                            .tabs__list__item.tabs--active {
                            font-family: "BentonSansBBVA-Medium", Helvetica,
                              Arial, sans-serif;
                            font-size: 14px;
                            color: #121212;
                            text-align: left;
                            letter-spacing: 0;
                            line-height: 20px;
                            border-bottom: none;
                            position: relative;
                          }

                          @media (min-width: 600px) {
                            .tabs__login__segmentation
                              .tabs__list--oportunitytabs
                              .tabs__list__item.tabs--active {
                              font-size: 15px;
                              line-height: 24px;
                            }
                          }

                          .tabs__login__segmentation
                            .tabs__list--oportunitytabs
                            .tabs__list__item.tabs--active::after {
                            content: "";
                            display: inline-block;
                            position: absolute;
                            z-index: 1;
                          }

                          @media (min-width: 600px) and (max-width: 991px) {
                            .tabs__login__segmentation
                              .tabs__list--oportunitytabs
                              .tabs__list__item.tabs--active::after {
                              bottom: 24px;
                              left: 50%;
                              -webkit-transform: translateX(-50%);
                              transform: translateX(-50%);
                              width: 40px;
                              height: 4px;
                              background: #1464a5;
                            }
                          }

                          @media (min-width: 992px) {
                            .tabs__list--oportunitytabs
                              .tabs__list__item.tabs--active::after {
                              bottom: -8px;
                              left: 50%;
                              -webkit-transform: translateX(-50%);
                              transform: translateX(-50%);
                              width: 0;
                              height: 0;
                              border-style: solid;
                              border-width: 8px 8px 0 8px;
                              border-color: #fff transparent transparent
                                transparent;
                            }
                          }

                          .tabs__login__segmentation .tabcontainer {
                            position: relative;
                            zoom: 1;
                            width: 100%;
                            display: block;
                            margin-top: 80px;
                          }

                          .tabs__login__segmentation .tabcontainer::before,
                          .tabcontainer::after {
                            content: " ";
                            display: block;
                            height: 0;
                            width: 0;
                            overflow: hidden;
                          }

                          .tabs__login__segmentation .tabcontainer::after {
                            clear: both;
                          }

                          .tabs__login__segmentation .tabcontainersplit {
                            position: relative;
                            zoom: 1;
                            width: 100%;
                            display: block;
                          }

                          .tabs__login__segmentation .tabcontainersplit::before,
                          .tabcontainersplit::after {
                            content: " ";
                            display: block;
                            height: 0;
                            width: 0;
                            overflow: hidden;
                          }

                          .tabs__login__segmentation .tabcontainersplit::after {
                            clear: both;
                          }
                        </style>
                        <script type="text/javascript">
                          (function () {
                            // third party js
                          })(this);
                        <\/script>
                        <div
                          class="tabs__login__segmentation"
                          id="tabs-segmentacion-login"
                        >
                          <div
                            class="tabs__base container horizontalarrowscroll__base"
                          >
                            <div class="tabs__list__border">
                              <div class="tabs__wrapper">
                                <ul class="tabs__list container" role="tablist">
                                  <li
                                    class="tabs__list__item"
                                    role="tab"
                                    tabindex="0"
                                    aria-selected="true"
                                    data-tab-index="0"
                                    aria-controls="tab-autonomos"
                                  >
                                    Autónomos
                                  </li>

                                  <li
                                    class="tabs__list__item tabs--active"
                                    role="tab"
                                    aria-selected="false"
                                    tabindex="-1"
                                    data-tab-index="1"
                                    aria-controls="tab-empresas"
                                  >
                                    Empresas
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div class="tabs__background background--white">
                            <div class="container">
                              <div class="tabs__contents" role="tabpanel">
                                <div class="tabcontainersplit">
                                  <div
                                    class="tabs__content"
                                    role="tabpanel"
                                    data-tab-index="0"
                                    id="tab-autonomos"
                                  >
                                    <div class="tabs__content__item">
                                      <div class="iframe">
                                        <div class="iframe__load iframe--full">
                                          <iframe
                                            class="iframe__base"
                                            title="Autónomos Login"
                                            id="tab-autonomos-iframe"
                                            width="100%"
                                            style="
                                              max-width: 100%;
                                              overflow: hidden;
                                              height: 0px;
                                              display: block;
                                            "
                                            scrolling="no"
                                            src="/nimbus/login.html?conf=net/login"
                                          >
                                            Your browser does not support
                                            iframes
                                          </iframe>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="tabs__contents" role="tabpanel">
                                <div class="tabcontainersplit">
                                  <div
                                    class="tabs__content tabs--active"
                                    role="tabpanel"
                                    data-tab-index="0"
                                    id="tab-empresas"
                                  >
                                    <div class="tabs__content__item">
                                      <div
                                        style="
                                          display: flex;
                                          flex-direction: column;
                                          width: 400px;
                                          height: 800px;
                                          margin: 0 auto;
                                        "
                                      >
                                        <div
                                          style="
                                            display: flex;
                                            width: 100%;
                                            justify-content: center;
                                            gap: 30px;
                                          "
                                        >
                                          <label
                                            style="
                                              display: flex;
                                              align-items: center;
                                              margin-right: 0.5rem;
                                              gap: 10px;
                                            "
                                          >
                                            <input
                                              type="checkbox"
                                              style="display: none"
                                            />
                                            <div
                                              style="
                                                width: 1.5rem;
                                                height: 1.5rem;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                border: 1px solid #718096;
                                                border-radius: 9999px;
                                                background-color: #f7fafc;
                                              "
                                            >
                                              <div
                                                style="
                                                  width: 0.75rem;
                                                  height: 0.75rem;
                                                  border-radius: 50%;
                                                  background-color: #004481;
                                                "
                                              ></div>
                                            </div>
                                            <span> Soy cliente</span>
                                          </label>

                                          <label
                                            style="
                                              display: flex;
                                              align-items: center;
                                              margin-right: 0.5rem;
                                              gap: 10px;
                                            "
                                          >
                                            <input
                                              type="checkbox"
                                              style="display: none"
                                            />
                                            <div
                                              style="
                                                width: 1.5rem;
                                                height: 1.5rem;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                border: 1px solid #718096;
                                                border-radius: 9999px;
                                                background-color: #f7fafc;
                                              "
                                            ></div>
                                            <span> No soy cliente</span>
                                          </label>
                                        </div>
                                        <p
                                          class="title"
                                          style="
                                            padding-top: 50px;
                                            font-size: var(
                                              --typographyTypeLarge,
                                              1.125rem
                                            );
                                            line-height: var(
                                              --lineHeightTypeLarge,
                                              1.5rem
                                            );
                                            margin: 0 0 0 0;
                                            color: black;
                                          "
                                        >
                                          Bienvenido de nuevo
                                        </p>

                                        <p />
                                        <div
                                          class="composition-user"
                                          style="
                                            margin: 0 0 0 0;
                                            padding: calc(
                                              (
                                                  (
                                                      2 *
                                                        var(
                                                          --gridSpacerVariant,
                                                          var(--gridSpacer, 8)
                                                        )
                                                    ) / 16
                                                ) * 1rem
                                            );
                                            box-shadow: var(
                                              --boxShadowType1,
                                              0 1px 3px 0 rgba(18, 18, 18, 0.2)
                                            );
                                            display: flex;
                                          "
                                        >
                                          <div
                                            id="microillustration"
                                            style="
                                              width: calc(
                                                (
                                                    (
                                                        6 *
                                                          var(
                                                            --gridSpacerVariant,
                                                            var(--gridSpacer, 8)
                                                          )
                                                      ) / 16
                                                  ) * 1rem
                                              );
                                              margin-right: calc(
                                                (
                                                    (
                                                        2 *
                                                          var(
                                                            --gridSpacerVariant,
                                                            var(--gridSpacer, 8)
                                                          )
                                                      ) / 16
                                                  ) * 1rem
                                              );
                                            "
                                          >
                                            <!---->
                                            <svg
                                              viewBox="0 0 600 600"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <defs>
                                                <linearGradient
                                                  x1="28.784%"
                                                  y1="1.463%"
                                                  x2="70.556%"
                                                  y2="105.576%"
                                                  id="corporatebuilding_a"
                                                >
                                                  <stop
                                                    stop-color="#192647"
                                                    stop-opacity=".5"
                                                    offset="0%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#192647"
                                                    stop-opacity="0"
                                                    offset="100%"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  x1="18.677%"
                                                  y1="41.03%"
                                                  x2="74.512%"
                                                  y2="56.775%"
                                                  id="corporatebuilding_b"
                                                >
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity=".5"
                                                    offset="0%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#E8F7F8"
                                                    stop-opacity=".2"
                                                    offset="100%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity="0"
                                                    offset="100%"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  x1="16.85%"
                                                  y1="37.188%"
                                                  x2="74.405%"
                                                  y2="58.117%"
                                                  id="corporatebuilding_c"
                                                >
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity=".5"
                                                    offset="0%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#E8F7F8"
                                                    stop-opacity=".2"
                                                    offset="100%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity="0"
                                                    offset="100%"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  x1="13.554%"
                                                  y1="29.892%"
                                                  x2="74.011%"
                                                  y2="60.77%"
                                                  id="corporatebuilding_d"
                                                >
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity=".5"
                                                    offset="0%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#E8F7F8"
                                                    stop-opacity=".2"
                                                    offset="100%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity="0"
                                                    offset="100%"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  x1="25.065%"
                                                  y1="7.689%"
                                                  x2="58.201%"
                                                  y2="60.274%"
                                                  id="corporatebuilding_e"
                                                >
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity=".5"
                                                    offset="0%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#E8F7F8"
                                                    stop-opacity=".2"
                                                    offset="100%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity="0"
                                                    offset="100%"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  x1="5.68%"
                                                  y1="7.537%"
                                                  x2="73.416%"
                                                  y2="65.932%"
                                                  id="corporatebuilding_f"
                                                >
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity=".5"
                                                    offset="0%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#E8F7F8"
                                                    stop-opacity=".2"
                                                    offset="100%"
                                                  ></stop>
                                                  <stop
                                                    stop-color="#FFF"
                                                    stop-opacity="0"
                                                    offset="100%"
                                                  ></stop>
                                                </linearGradient>
                                              </defs>
                                              <g
                                                fill="none"
                                                fill-rule="evenodd"
                                              >
                                                <path
                                                  d="M0 0h600v600H0z"
                                                ></path>
                                                <g fill-rule="nonzero">
                                                  <path
                                                    d="M425.665 129.66a3.727 3.727 0 0 0 3.795-3.795v-12.65c0-16.067-13.027-29.092-29.095-29.094h-58.821V67.55a3.67 3.67 0 0 0-3.669-3.669h-182.41a3.67 3.67 0 0 0-3.668 3.669v16.57H92.976c-16.068.002-29.095 13.027-29.095 29.094v12.65a3.73 3.73 0 0 0 3.795 3.795h11.385v393.408h-5.06c-5.582.016-10.103 4.538-10.12 10.12v15.18h365.58v-15.18c-.018-5.582-4.539-10.104-10.121-10.12h-5.06V129.66h11.385Z"
                                                    fill="url(#corporatebuilding_a)"
                                                    transform="translate(110 51)"
                                                  ></path>
                                                  <path
                                                    fill="#1464A5"
                                                    d="M125.812 117.411h335.219v393.408H125.812z"
                                                  ></path>
                                                  <path
                                                    d="M139.727 71.872h307.39c16.067.002 29.094 13.027 29.094 29.095v12.65a3.73 3.73 0 0 1-3.795 3.794H114.427a3.727 3.727 0 0 1-3.795-3.795v-12.65c0-16.067 13.027-29.092 29.095-29.094Z"
                                                    fill="#043263"
                                                  ></path>
                                                  <path
                                                    d="M202.217 51.632h182.41a3.67 3.67 0 0 1 3.668 3.669v16.571H198.548V55.301a3.67 3.67 0 0 1 3.669-3.669Z"
                                                    fill="#1464A5"
                                                  ></path>
                                                  <path
                                                    d="M120.752 510.82h345.339c5.582.015 10.103 4.537 10.12 10.119v15.18H110.632v-15.18c.017-5.582 4.538-10.104 10.12-10.12Z"
                                                    fill="#2DCCCD"
                                                  ></path>
                                                  <path
                                                    d="M158.07 145.24h270.704a3.73 3.73 0 0 1 3.796 3.796v55.659a3.73 3.73 0 0 1-3.796 3.795H158.07a3.73 3.73 0 0 1-3.795-3.795v-55.66a3.73 3.73 0 0 1 3.795-3.795Z"
                                                    fill="#49A5E6"
                                                  ></path>
                                                  <path
                                                    d="M44.274 98.036v55.659a3.73 3.73 0 0 0 3.795 3.795h185.572l34.914-63.25H48.069a3.73 3.73 0 0 0-3.795 3.796Z"
                                                    fill="url(#corporatebuilding_b)"
                                                    opacity=".5"
                                                    transform="translate(110 51)"
                                                  ></path>
                                                  <path
                                                    d="M158.07 236.318h270.704a3.73 3.73 0 0 1 3.796 3.796v55.659a3.73 3.73 0 0 1-3.796 3.796H158.07a3.73 3.73 0 0 1-3.795-3.796v-55.659a3.73 3.73 0 0 1 3.795-3.796Z"
                                                    fill="#49A5E6"
                                                  ></path>
                                                  <path
                                                    d="M44.274 189.114v55.659a3.73 3.73 0 0 0 3.795 3.796h135.353l34.787-63.25H48.069a3.73 3.73 0 0 0-3.795 3.795Z"
                                                    fill="url(#corporatebuilding_c)"
                                                    opacity=".5"
                                                    transform="translate(110 51)"
                                                  ></path>
                                                  <path
                                                    d="M158.07 327.397h270.704a3.73 3.73 0 0 1 3.796 3.795v55.66a3.73 3.73 0 0 1-3.796 3.795H158.07a3.73 3.73 0 0 1-3.795-3.796v-55.659a3.73 3.73 0 0 1 3.795-3.795Z"
                                                    fill="#49A5E6"
                                                  ></path>
                                                  <path
                                                    d="M44.274 280.192v55.66a3.73 3.73 0 0 0 3.795 3.795h84.88l35.166-63.25H48.07a3.73 3.73 0 0 0-3.795 3.795Z"
                                                    fill="url(#corporatebuilding_d)"
                                                    opacity=".5"
                                                    transform="translate(110 51)"
                                                  ></path>
                                                  <path
                                                    d="M370.585 418.475h58.19a3.73 3.73 0 0 1 3.795 3.796v88.548h-65.78v-88.548a3.73 3.73 0 0 1 3.795-3.796Z"
                                                    fill="#49A5E6"
                                                  ></path>
                                                  <path
                                                    d="M260.585 367.475a3.73 3.73 0 0 0-3.795 3.796v88.548h6.958l51.231-92.344h-54.394Z"
                                                    fill="url(#corporatebuilding_e)"
                                                    opacity=".5"
                                                    transform="translate(110 51)"
                                                  ></path>
                                                  <path
                                                    fill="#1464A5"
                                                    d="M397.15 418.476h5.06v92.343h-5.06z"
                                                  ></path>
                                                  <path
                                                    d="M387.03 472.87a2.537 2.537 0 0 1-2.53-2.53v-7.59a2.53 2.53 0 0 1 5.06 0v7.59a2.537 2.537 0 0 1-2.53 2.53Zm25.3 0a2.537 2.537 0 0 1-2.53-2.53v-7.59a2.53 2.53 0 0 1 5.06 0v7.59a2.537 2.537 0 0 1-2.53 2.53Z"
                                                    fill="#EAF9FA"
                                                  ></path>
                                                  <path
                                                    d="M158.07 418.475h176.21a3.73 3.73 0 0 1 3.796 3.796v55.659a3.73 3.73 0 0 1-3.796 3.795H158.07a3.73 3.73 0 0 1-3.796-3.795v-55.66a3.73 3.73 0 0 1 3.795-3.795Z"
                                                    fill="#49A5E6"
                                                  ></path>
                                                  <path
                                                    d="M44.274 371.27v55.66a3.73 3.73 0 0 0 3.795 3.795h34.534l35.04-63.25H48.069a3.73 3.73 0 0 0-3.795 3.796Z"
                                                    fill="url(#corporatebuilding_f)"
                                                    opacity=".5"
                                                    transform="translate(110 51)"
                                                  ></path>
                                                </g>
                                              </g>
                                            </svg>
                                            <!---->
                                          </div>
                                          <div>
                                            <bbva-web-list-item-simple
                                              class="label-composition-user-card"
                                              label=""
                                            >
                                              ····4535/ADMIN1
                                            </bbva-web-list-item-simple>
                                            <div
                                              style="
                                                display: flex;
                                                gap: 5px;
                                                align-items: center;
                                              "
                                            >
                                              <svg
                                                viewBox="0 0 260 260"
                                                preserveAspectRatio="xMidYMid meet"
                                                focusable="false"
                                                slot="_icon"
                                                aria-hidden="true"
                                                fill="rgb(25, 115, 184)"
                                                style="
                                                  pointer-events: none;
                                                  display: block;
                                                  width: 15px;
                                                  height: 15px;
                                                  overflow: hidden;
                                                "
                                              >
                                                <path
                                                  d="m236.1 58.83-35.7-35.89a9.93 9.93 0 0 0-14-.1l-.1.1L154.4 55l34.8 35h-29.9l-19.9-20L20 190v50h49.8L236.1 73a10.08 10.08 0 0 0 0-14.2ZM120 220l-20 20h140v-20H120z"
                                                ></path>
                                              </svg>
                                              <bbva-web-link
                                                href="#"
                                                style="
                                                  font-weight: bolder;
                                                  color: rgb(25, 115, 184);
                                                  display: flex;
                                                  margin: 0px;
                                                  padding-top: calc(
                                                    (
                                                        (
                                                            0.625 *
                                                              var(
                                                                --gridSpacerVariant,
                                                                var(
                                                                  --gridSpacer,
                                                                  8
                                                                )
                                                              )
                                                          ) / 16
                                                      ) * 1rem
                                                  );
                                                "
                                                role="link"
                                                tabindex="0"
                                                aria-disabled="false"
                                              >
                                                Cambiar empresa y usuario
                                              </bbva-web-link>
                                            </div>
                                          </div>
                                        </div>

                                        <div
                                          style="
                                            position: relative;
                                            width: 100%;
                                            padding-top: 20px;
                                          "
                                        >
                                          <input
                                            type="password"
                                            id="passwordInput"
                                            style="
                                              width: 100%;
                                              height: 50px;
                                              background-color: #f4f4f4;
                                              border: none;
                                              border-bottom: 2px solid #000000;
                                              padding: 15px;
                                            "
                                          />
                                          <label
                                            for="passwordInput"
                                            style="
                                              position: absolute;
                                              left: 0;
                                              bottom: 10px;
                                              color: gray;
                                              transition: all 0.3s ease-out;
                                              padding-left: 15px;
                                            "
                                            >Contraseña
                                          </label>
                                        </div>

                                        <script>
                                          document
                                            .getElementById("passwordInput")
                                            .addEventListener(
                                              "focus",
                                              function () {
                                                document.querySelector(
                                                  'label[for="passwordInput"]'
                                                ).style.transform =
                                                  "translateY(-20px)";
                                                document.querySelector(
                                                  'label[for="passwordInput"]'
                                                ).style.fontSize = "0.75rem";
                                                document.querySelector(
                                                  'label[for="passwordInput"]'
                                                ).style.color = "#3498db"; // Change color on focus if needed
                                              }
                                            );

                                          document
                                            .getElementById("passwordInput")
                                            .addEventListener(
                                              "blur",
                                              function () {
                                                if (!this.value.trim()) {
                                                  document.querySelector(
                                                    'label[for="passwordInput"]'
                                                  ).style.transform =
                                                    "translateY(10px)";
                                                  document.querySelector(
                                                    'label[for="passwordInput"]'
                                                  ).style.fontSize = "1rem";
                                                  document.querySelector(
                                                    'label[for="passwordInput"]'
                                                  ).style.color = "#000000"; // Change color back on blur if needed
                                                }
                                              }
                                            );
                                        <\/script>
                                        <div
                                          style="
                                            display: flex;
                                            gap: 5px;
                                            padding-top: 20px;
                                            padding-bottom: 50px;
                                          "
                                        >
                                          <input
                                            type="checkbox"
                                            checked="true"
                                            style="
                                              width: 20px;
                                              height: 20px;
                                              background-color: #f4f4f4; /* Blue color */
                                              border: 3px solid #f4f4f4; /* Slightly darker blue border */
                                              border-radius: 5px;
                                              cursor: pointer;
                                              outline: none; /* Remove default focus outline */
                                              transition: background-color 0.3s,
                                                border-color 0.3s;
                                            "
                                          />
                                          <p>
                                            Recordar código de empresa y usuario
                                          </p>
                                        </div>

                                        <button
                                          style="
                                            width: 100px;
                                            height: 38px;
                                            background-color: #1973b8;
                                            border: none;
                                            font-family: 'Benton Sans',
                                              sans-serif;
                                            font-feature-settings: normal;
                                            font-kerning: auto;
                                            font-optical-sizing: auto;
                                            font-size: 15px;
                                            font-stretch: 100%;
                                            font-style: normal;
                                            font-variant-alternates: normal;
                                            font-variant-caps: normal;
                                            font-variant-east-asian: normal;
                                            font-variant-ligatures: normal;
                                            font-variant-numeric: normal;
                                            font-variant-position: normal;
                                            font-variation-settings: normal;
                                            font-weight: 700;
                                            color: white;
                                          "
                                          id="loginButton"
                                        >
                                          Entrar
                                        </button>
                                        <p>
                                          Si eres cliente pero aún no eres
                                          usuario de la banca online empresas
                                        </p>
                                        <div
                                          style="
                                            display: flex;
                                            padding-top: 20px;
                                            gap: 30px;
                                          "
                                        >
                                          <a
                                            style="
                                              font-weight: bolder;
                                              color: rgb(25, 115, 184);
                                              display: flex;
                                              margin: 0px;
                                              padding-top: calc(
                                                (
                                                    (
                                                        0.625 *
                                                          var(
                                                            --gridSpacerVariant,
                                                            var(--gridSpacer, 8)
                                                          )
                                                      ) / 16
                                                  ) * 1rem
                                              );
                                            "
                                            >Date de alta</a
                                          >
                                          <a
                                            style="
                                              font-weight: bolder;
                                              color: rgb(25, 115, 184);
                                              display: flex;
                                              margin: 0px;
                                              padding-top: calc(
                                                (
                                                    (
                                                        0.625 *
                                                          var(
                                                            --gridSpacerVariant,
                                                            var(--gridSpacer, 8)
                                                          )
                                                      ) / 16
                                                  ) * 1rem
                                              );
                                            "
                                            >Retoma el alta</a
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <script>
                          /**
                           * tabs
                           *
                           * @description The Tabs component.
                           * @param {Object} options The options hash
                           */
                          var loginSegmentationTabs = function (options) {
                            try {
                              window.iFrameResize(
                                { checkOrigin: false },
                                "#tab-empresas-iframe"
                              );
                              window.iFrameResize(
                                { checkOrigin: false },
                                "#tab-autonomos-iframe"
                              );

                              setTimeout(function () {
                                window.iFrameResize(
                                  { checkOrigin: false },
                                  "#tab-empresas-iframe"
                                );
                                window.iFrameResize(
                                  { checkOrigin: false },
                                  "#tab-autonomos-iframe"
                                );
                              }, 3000);
                            } catch (ex) {}
                            var el = document.querySelector(options.el);
                            var tabNavigationLinks = el.querySelectorAll(
                              options.tabNavigationLinks
                            );
                            var tabContentContainers = el.querySelectorAll(
                              options.tabContentContainers
                            );
                            var activeIndex = 1;
                            var cont = 0;
                            var initCalled = false;

                            /**
                             * init
                             *
                             * @description Initializes the component by attaching event listeners to each of the nav items.
                             *   Returns nothing.
                             */
                            var init = function () {
                              if (!initCalled) {
                                initCalled = true;

                                for (
                                  var i = 0;
                                  i < tabNavigationLinks.length;
                                  i++
                                ) {
                                  var link = tabNavigationLinks[i];
                                  handleClick(link, i);
                                }
                              }
                            };

                            var setCookie = function (cname, cvalue, exdays) {
                              var d = new Date();
                              d.setTime(
                                d.getTime() + exdays * 24 * 60 * 60 * 1000
                              );
                              var expires = "expires=" + d.toUTCString();
                              document.cookie =
                                cname +
                                "=" +
                                cvalue +
                                ";" +
                                expires +
                                ";path=/" +
                                ";domain=" +
                                document.domain.split(".").slice(-2).join(".");
                            };

                            var getCookie = function (cname) {
                              var name = cname + "=";
                              var ca = document.cookie.split(";");
                              for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == " ") {
                                  c = c.substring(1);
                                }
                                if (c.indexOf(name) == 0) {
                                  return c.substring(name.length, c.length);
                                }
                              }
                              return "";
                            };

                            if (getCookie("login-segment") != null) {
                              if (getCookie("login-segment") == "a") {
                                tabNavigationLinks[
                                  activeIndex
                                ].classList.remove("tabs--active");
                                tabNavigationLinks[0].classList.add(
                                  "tabs--active"
                                );
                                tabContentContainers[
                                  activeIndex
                                ].classList.remove("tabs--active");
                                tabContentContainers[0].classList.add(
                                  "tabs--active"
                                );
                                activeIndex = 0;
                              }
                            }

                            /**
                             * handleClick
                             *
                             * @description Handles click event listeners on each of the links in the
                             *   tab navigation. Returns nothing.
                             * @param {HTMLElement} link The link to listen for events on
                             * @param {Number} index The index of that link
                             */
                            var handleClick = function (link, index) {
                              link.addEventListener("click", function (e) {
                                e.preventDefault();
                                goToTab(
                                  index,
                                  this.getAttribute("aria-controls")
                                );
                              });
                            };

                            /**
                             * goToTab
                             *
                             * @description Goes to a specific tab based on index. Returns nothing.
                             * @param {Number} index The index of the tab to go to
                             */
                            var goToTab = function (index, tab) {
                              if (
                                index !== activeIndex &&
                                index >= 0 &&
                                index <= tabNavigationLinks.length
                              ) {
                                tabNavigationLinks[
                                  activeIndex
                                ].classList.remove("tabs--active");
                                tabNavigationLinks[index].classList.add(
                                  "tabs--active"
                                );
                                tabContentContainers[
                                  activeIndex
                                ].classList.remove("tabs--active");
                                tabContentContainers[index].classList.add(
                                  "tabs--active"
                                );
                                activeIndex = index;
                              }
                              if (tab == "tab-autonomos") {
                                setCookie("login-segment", "a", 1825);
                              } else {
                                setCookie("login-segment", "e", 1825);
                              }
                            };

                            /**
                             * Returns init and goToTab
                             */
                            return {
                              init: init,
                              goToTab: goToTab,
                            };
                          };

                          /**
                           * Attach to global namespace
                           */
                          window.loginSegmentationTabs = loginSegmentationTabs;

                          var getDomainLog = function (autonomo) {
                            if (autonomo) {
                              //Url empresas
                              if (
                                window.location.href.indexOf("//ei") > -1 ||
                                window.location.href.indexOf("//aem-") > -1
                              ) {
                                return "https://eup-grupobbva2.igrupobbva";
                              } else {
                                return "https://empresas.bbva.es";
                              }
                            } else {
                              //Url particulares
                              if (window.location.href.indexOf("//ei") > -1) {
                                return "/nimbus/release";
                                //return '/ei/develop';
                              } else if (
                                window.location.href.indexOf("//aem-") > -1
                              ) {
                                //|| window.location.href.indexOf('//aem-') > -1){
                                return "/nimbus/release";
                              } else if (
                                window.location.href.indexOf("//au") > -1
                              ) {
                                return "/nimbus/release";
                                //return '/au/develop';
                              } else if (
                                window.location.href.indexOf("//qa") > -1
                              ) {
                                return "/nimbus/release";
                                //return '/develop';
                              } else {
                                //return 'https://web.bbva.es';
                                return "/nimbus";
                              }
                            }
                          };

                          var getFormatDateToUrlLoginEmp = function () {
                            var a = new Date();
                            return a.toJSON().split(":")[0].split("-").join("");
                          };

                          var urlEmp = "";
                          if (typeof getCookie === "undefined") {
                            var getCookieTabsEmp = function (cname) {
                              var name = cname + "=";
                              var ca = document.cookie.split(";");
                              for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == " ") {
                                  c = c.substring(1);
                                }
                                if (c.indexOf(name) == 0) {
                                  return c.substring(name.length, c.length);
                                }
                              }
                              return "";
                            };
                            urlEmp =
                              getDomainLog(true) +
                              "/login/index.html?conf=netcash/login&lang=" +
                              getCookieTabsEmp("language") +
                              "&v=" +
                              getFormatDateToUrlLoginEmp();
                          } else {
                            urlEmp =
                              getDomainLog(true) +
                              "/login/index.html?conf=netcash/login&lang=" +
                              getCookie("language") +
                              "&v=" +
                              getFormatDateToUrlLoginEmp();
                          }
                          setTimeout(function () {
                            document
                              .getElementById("tab-empresas-iframe")
                              .setAttribute("src", urlEmp);
                            document.getElementById(
                              "tab-empresas-iframe"
                            ).style.display = "block";
                          }, 500);

                          var urlAuto =
                            getDomainLog(false) + "/login.html?conf=net/login";
                          setTimeout(function () {
                            document
                              .getElementById("tab-autonomos-iframe")
                              .setAttribute("src", urlAuto);
                            document.getElementById(
                              "tab-autonomos-iframe"
                            ).style.display = "block";
                          }, 500);

                          // Initialise at bottom of HTML
                          var myLoginSegmentationTabs = loginSegmentationTabs({
                            el: "#tabs-segmentacion-login",
                            tabNavigationLinks: ".tabs__list__item",
                            tabContentContainers: ".tabs__content",
                          });

                          myLoginSegmentationTabs.init();
                        <\/script>
                      </div>
                    </div>
                  </div>
                </div>
                <script>
                  (function () {
                    // third party js
                  })(this);
                <\/script>
                <script>
                  /**
                   * tabs
                   *
                   * @description The Tabs component.
                   * @param {Object} options The options hash
                   */
                  var loginSegmentationTabs = function (options) {
                    try {
                      window.iFrameResize(
                        { checkOrigin: false },
                        "#tab-empresas-iframe"
                      );
                      window.iFrameResize(
                        { checkOrigin: false },
                        "#tab-autonomos-iframe"
                      );

                      setTimeout(function () {
                        window.iFrameResize(
                          { checkOrigin: false },
                          "#tab-empresas-iframe"
                        );
                        window.iFrameResize(
                          { checkOrigin: false },
                          "#tab-autonomos-iframe"
                        );
                      }, 3000);
                    } catch (ex) {}
                    var el = document.querySelector(options.el);
                    var tabNavigationLinks = el.querySelectorAll(
                      options.tabNavigationLinks
                    );
                    var tabContentContainers = el.querySelectorAll(
                      options.tabContentContainers
                    );
                    var activeIndex = 1;
                    var cont = 0;
                    var initCalled = false;

                    /**
                     * init
                     *
                     * @description Initializes the component by attaching event listeners to each of the nav items.
                     *   Returns nothing.
                     */
                    var init = function () {
                      if (!initCalled) {
                        initCalled = true;

                        for (var i = 0; i < tabNavigationLinks.length; i++) {
                          var link = tabNavigationLinks[i];
                          handleClick(link, i);
                        }
                      }
                    };

                    var setCookie = function (cname, cvalue, exdays) {
                      var d = new Date();
                      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
                      var expires = "expires=" + d.toUTCString();
                      document.cookie =
                        cname +
                        "=" +
                        cvalue +
                        ";" +
                        expires +
                        ";path=/" +
                        ";domain=" +
                        document.domain.split(".").slice(-2).join(".");
                    };

                    var getCookie = function (cname) {
                      var name = cname + "=";
                      var ca = document.cookie.split(";");
                      for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == " ") {
                          c = c.substring(1);
                        }
                        if (c.indexOf(name) == 0) {
                          return c.substring(name.length, c.length);
                        }
                      }
                      return "";
                    };

                    if (getCookie("login-segment") != null) {
                      if (getCookie("login-segment") == "a") {
                        tabNavigationLinks[activeIndex].classList.remove(
                          "tabs--active"
                        );
                        tabNavigationLinks[0].classList.add("tabs--active");
                        tabContentContainers[activeIndex].classList.remove(
                          "tabs--active"
                        );
                        tabContentContainers[0].classList.add("tabs--active");
                        activeIndex = 0;
                      }
                    }

                    /**
                     * handleClick
                     *
                     * @description Handles click event listeners on each of the links in the
                     *   tab navigation. Returns nothing.
                     * @param {HTMLElement} link The link to listen for events on
                     * @param {Number} index The index of that link
                     */
                    var handleClick = function (link, index) {
                      link.addEventListener("click", function (e) {
                        e.preventDefault();
                        goToTab(index, this.getAttribute("aria-controls"));
                      });
                    };

                    /**
                     * goToTab
                     *
                     * @description Goes to a specific tab based on index. Returns nothing.
                     * @param {Number} index The index of the tab to go to
                     */
                    var goToTab = function (index, tab) {
                      if (
                        index !== activeIndex &&
                        index >= 0 &&
                        index <= tabNavigationLinks.length
                      ) {
                        tabNavigationLinks[activeIndex].classList.remove(
                          "tabs--active"
                        );
                        tabNavigationLinks[index].classList.add("tabs--active");
                        tabContentContainers[activeIndex].classList.remove(
                          "tabs--active"
                        );
                        tabContentContainers[index].classList.add(
                          "tabs--active"
                        );
                        activeIndex = index;
                      }
                      if (tab == "tab-autonomos") {
                        setCookie("login-segment", "a", 1825);
                      } else {
                        setCookie("login-segment", "e", 1825);
                      }
                    };

                    /**
                     * Returns init and goToTab
                     */
                    return {
                      init: init,
                      goToTab: goToTab,
                    };
                  };

                  /**
                   * Attach to global namespace
                   */
                  window.loginSegmentationTabs = loginSegmentationTabs;

                  var getDomainLog = function (autonomo) {
                    if (autonomo) {
                      //Url empresas
                      if (
                        window.location.href.indexOf("//ei") > -1 ||
                        window.location.href.indexOf("//aem-") > -1
                      ) {
                        return "https://eup-grupobbva2.igrupobbva";
                      } else {
                        return "https://empresas.bbva.es";
                      }
                    } else {
                      //Url particulares
                      if (window.location.href.indexOf("//ei") > -1) {
                        return "/nimbus/release";
                        //return '/ei/develop';
                      } else if (window.location.href.indexOf("//aem-") > -1) {
                        //|| window.location.href.indexOf('//aem-') > -1){
                        return "/nimbus/release";
                      } else if (window.location.href.indexOf("//au") > -1) {
                        return "/nimbus/release";
                        //return '/au/develop';
                      } else if (window.location.href.indexOf("//qa") > -1) {
                        return "/nimbus/release";
                        //return '/develop';
                      } else {
                        //return 'https://web.bbva.es';
                        return "/nimbus";
                      }
                    }
                  };

                  var getFormatDateToUrlLoginEmp = function () {
                    var a = new Date();
                    return a.toJSON().split(":")[0].split("-").join("");
                  };

                  var urlEmp = "";
                  if (typeof getCookie === "undefined") {
                    var getCookieTabsEmp = function (cname) {
                      var name = cname + "=";
                      var ca = document.cookie.split(";");
                      for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == " ") {
                          c = c.substring(1);
                        }
                        if (c.indexOf(name) == 0) {
                          return c.substring(name.length, c.length);
                        }
                      }
                      return "";
                    };
                    urlEmp =
                      getDomainLog(true) +
                      "/login/index.html?conf=netcash/login&lang=" +
                      getCookieTabsEmp("language") +
                      "&v=" +
                      getFormatDateToUrlLoginEmp();
                  } else {
                    urlEmp =
                      getDomainLog(true) +
                      "/login/index.html?conf=netcash/login&lang=" +
                      getCookie("language") +
                      "&v=" +
                      getFormatDateToUrlLoginEmp();
                  }
                  setTimeout(function () {
                    document
                      .getElementById("tab-empresas-iframe")
                      .setAttribute("src", urlEmp);
                    document.getElementById(
                      "tab-empresas-iframe"
                    ).style.display = "block";
                  }, 500);

                  var urlAuto =
                    getDomainLog(false) + "/login.html?conf=net/login";
                  setTimeout(function () {
                    document
                      .getElementById("tab-autonomos-iframe")
                      .setAttribute("src", urlAuto);
                    document.getElementById(
                      "tab-autonomos-iframe"
                    ).style.display = "block";
                  }, 500);

                  // Initialise at bottom of HTML
                  var myLoginSegmentationTabs = loginSegmentationTabs({
                    el: "#tabs-segmentacion-login",
                    tabNavigationLinks: ".tabs__list__item",
                    tabContentContainers: ".tabs__content",
                  });

                  myLoginSegmentationTabs.init();
                <\/script>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="search search--desktop wrapper">
        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.searchbar/small.lc-20231103-110345-lc.min.ACSHASH06d85ae3d455b7aa840b4d2b33e27a87.css"
          type="text/css"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.searchbar/large.lc-20231103-110345-lc.min.ACSHASH53d993f0ab9fd1e20813b342ddd6dd7f.css"
          type="text/css"
          media="all and (min-width: 600px)"
        />

        <div
          class="search__base"
          itemscope
          data-component="search"
          data-component-params='{"open": false, "version" : 2, "idWeb" : "bbvaes"}'
          data-search-url="https://bbva-proxy-cloudsearch-sp.appspot.com/v2/cloudsearch/suggest"
          data-search-query="&lt;query>"
          aria-hidden="false"
        >
          <div class="container">
            <link itemprop="url" href="https://www.bbva.es" />
            <div class="container search__bar">
              <form
                action="/personas/buscador.html"
                class="search__form"
                itemprop="potentialAction"
                itemscope
                itemtype="http://schema.org/SearchAction"
              >
                <meta
                  itemprop="target"
                  content="/personas/buscador.html?_charset_=UTF-8&q={search}"
                />
                <input type="hidden" value="UTF-8" name="_charset_" />
                <button
                  type="submit"
                  tabindex="2"
                  class="search__icon-btn"
                  aria-label="Hacer búsqueda"
                >
                  <i class="bbva-icon bbva-icon__3_001_search"></i>
                </button>
                <div
                  class="search__label"
                  role="combobox"
                  aria-expanded="false"
                  aria-haspopup="listbox"
                >
                  <label class="search__txt">Hacer búsqueda, Pulsa enter</label>
                  <input
                    tabindex="1"
                    aria-autocomplete="list"
                    autocomplete="off"
                    type="text"
                    name="search"
                    placeholder="Buscar aquí"
                    class="search__input"
                    aria-label="Hacer búsqueda, Pulsa enter"
                    aria-activedescendant=""
                    itemprop="query-input"
                  />
                </div>
                <span class="search__instructional-text">Pulsa enter</span>
                <button
                  class="search__close-btn"
                  tabindex="3"
                  aria-label="Cerrar formulario de búsqueda"
                >
                  <i class="bbva-icon bbva-icon__2_022_close"></i>
                </button>
                <input
                  type="submit"
                  value="Search"
                  class="hidden search__hiddeninput"
                />
              </form>
              <div class="search__container">
                <div class="search__suggestions">
                  <span class="search__suggestions__title">Sugerencias</span>
                  <ul
                    role="listbox"
                    class="search__suggestions__container"
                  ></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main class="bbva--main wrapper" id="main" tabindex="-1">
        <section>
          <div role="heading" aria-level="1" class="invisible">
            Autónomos y empresas
          </div>

          <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
            <div
              class="experiencefragment aem-GridColumn aem-GridColumn--default--12"
            >
              <div
                data-dl-component
                data-dl-component-name="experiencefragment_246654266"
                data-dl-component-type="bbva/pwebs/components/par/experiencefragment"
                id="content-experiencefragment_246654266"
              >
                <div class="xf-content-height">
                  <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                    <div
                      class="experiencefragment aem-GridColumn aem-GridColumn--default--12"
                    >
                      <div
                        data-dl-component
                        data-dl-component-name="experiencefragment_2"
                        data-dl-component-type="bbva/pwebs/components/par/experiencefragment"
                        id="home-master-jcr-content-root-experiencefragment_2"
                      >
                        <div class="xf-content-height">
                          <div
                            class="aem-Grid aem-Grid--12 aem-Grid--default--12"
                          >
                            <div
                              class="risklevel aem-GridColumn aem-GridColumn--default--12"
                            >
                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.risklevel/small.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.risklevel/large.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <div
                                id="home-abrir-ir-master-jcr-content-root-risklevel_copy"
                                class="risklevel__base background--"
                                data-dl-component
                                data-dl-component-name="risklevel_copy"
                                data-dl-component-type="bbva/pwebs/components/par/risklevel"
                              >
                                <div class="risklevel__container container">
                                  <div class="risklevel__title">
                                    NIVEL DE RIESGO
                                  </div>
                                  <div
                                    class="risklevel__content risklevel__content--col2"
                                  >
                                    <div
                                      class="risklevel__group risklevel__group--left"
                                    >
                                      <div
                                        class="risklevel__label risklevel__item risklevel__label--numeric risklevel__label--col2"
                                      >
                                        <span class="risklevel__label--digit"
                                          >1</span
                                        >/6
                                      </div>

                                      <div
                                        class="risklevel__message risklevel__item risklevel__message--col2"
                                      >
                                        <i
                                          aria-hidden="true"
                                          class="bbva-icon bbva-icon__"
                                        ></i>

                                        <p>
                                          Este número es indicativo del riesgo
                                          del producto, siendo 1 / 6 indicativo
                                          de menor riesgo y 6 / 6 de mayor
                                          riesgo.
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      class="risklevel__group risklevel__group--right"
                                    >
                                      <div
                                        class="risklevel__message risklevel__item risklevel__message--col2"
                                      >
                                        <i
                                          aria-hidden="true"
                                          class="bbva-icon bbva-icon__"
                                        ></i>

                                        <p>
                                          BBVA está adherido al Fondo de
                                          Garantía de Depósitos de Entidades de
                                          Crédito de España. La cantidad máxima
                                          garantizada es de 100.000€ por la
                                          totalidad de depósitos constituidos en
                                          BBVA por persona.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="htmlcomponent aem-GridColumn aem-GridColumn--default--12"
                            >
                              <div
                                class="htmlcomponent__container"
                                id="home-abrir-ir-master-jcr-content-root-htmlcomponent"
                              >
                                <style type="text/css">
                                  /* GRAPH COLORS */
                                  .container-banner {
                                    display: -ms-flexbox;
                                    display: flex;
                                    -ms-flex-direction: row;
                                    flex-direction: row;
                                    width: 100%;
                                    background-color: #192645;
                                    height: 600px;
                                  }

                                  .row {
                                    display: -ms-flexbox;
                                    display: flex;
                                    -ms-flex-direction: row;
                                    flex-direction: row;
                                    width: 100%;
                                  }

                                  .column-left {
                                    width: 50%;
                                    height: 100%;
                                  }

                                  .column-right {
                                    -ms-flex-preferred-size: 50%;
                                    flex-basis: 50%;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -ms-flex-pack: center;
                                    justify-content: center;
                                    -ms-flex-align: center;
                                    align-items: center;
                                    -ms-flex-direction: column;
                                    flex-direction: column;
                                    background-image: url("content/dam/public-web/bbvaes/images/homes/abrir-ir-desktop.jpg");
                                    background-size: cover;
                                  }

                                  .content-left {
                                    width: 80%;
                                    margin: 0 auto;
                                    height: 100%;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -ms-flex-direction: column;
                                    flex-direction: column;
                                    -ms-flex-pack: center;
                                    justify-content: center;
                                  }

                                  .content-left .ante-title {
                                    padding-bottom: 16px;
                                  }

                                  .ante-title {
                                    color: #2dcccd;
                                    font-family: "BentonSansBBVA-Medium",
                                      sans-serif;
                                    font-size: 18px;
                                  }

                                  .title {
                                    width: 100%;
                                    color: #fff;
                                    font-size: 36px;
                                    font-family: "BentonSansBBVA-Bold",
                                      Helvetica, Arial, sans-serif;
                                    line-height: 42px;
                                    padding-bottom: 32px;
                                  }

                                  .subtitle {
                                    font-size: 16px;
                                    line-height: 22px;
                                    margin-top: 32px;
                                    color: #fff;
                                    font-family: "BentonSansBBVA-Book",
                                      sans-serif;
                                  }

                                  .btn {
                                    padding: 10px 20px;
                                    background-color: #f0f0f0;
                                    border: none;
                                    border-radius: 5px;
                                    margin-bottom: 10px;
                                  }

                                  .text {
                                    font-size: 82px;
                                    font-family: "BentonSansBBVA-Bold",
                                      Helvetica, Arial, sans-serif;
                                    color: #fff;
                                    margin-top: 40%;
                                  }

                                  .subtext {
                                    padding-top: 14%;
                                    font-family: "BentonSansBBVA-Bold",
                                      Helvetica, Arial, sans-serif;
                                    color: #fff;
                                    font-size: 32px;
                                  }

                                  @media screen and (max-width: 1248px) {
                                    .content-left {
                                      width: 90%;
                                    }
                                  }

                                  @media screen and (max-width: 1111px) {
                                    .content-left {
                                      width: 70%;
                                    }
                                  }

                                  @media screen and (max-width: 768px) {
                                    .container-banner {
                                      height: auto;
                                    }

                                    .container-banner .row {
                                      -ms-flex-direction: column-reverse;
                                      flex-direction: column-reverse;
                                    }

                                    .container-banner .row .column-right {
                                      -ms-flex-preferred-size: auto;
                                      flex-basis: auto;
                                      width: 100%;
                                      height: 350px;
                                      background-image: url("/content/dam/public-web/bbvaes/images/homes/abrir-ir-mobile.jpg");
                                      background-size: cover;
                                      background-repeat: no-repeat;
                                    }

                                    .container-banner .row .column-right .text {
                                      font-size: 42px;
                                      margin-top: 100%;
                                    }

                                    .container-banner
                                      .row
                                      .column-right
                                      .subtext {
                                      font-size: 16px;
                                      padding-top: 8%;
                                    }

                                    .container-banner .row .column-left {
                                      width: 100%;
                                      height: auto;
                                      padding-top: 16px;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left {
                                      height: auto;
                                      width: 92%;
                                      -ms-flex-pack: start;
                                      justify-content: flex-start;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left
                                      .ante-title {
                                      font-size: 14px;
                                      padding-bottom: 8px;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left
                                      .title {
                                      font-size: 26px;
                                      line-height: 30px;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left
                                      .subtitle {
                                      font-size: 10px;
                                      line-height: 14px;
                                      margin-bottom: 42px;
                                      margin-top: 16px;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left
                                      .btn__medium-blue {
                                      width: 33%;
                                    }
                                  }

                                  @media screen and (max-width: 500px) {
                                    .container-banner {
                                      height: auto;
                                    }

                                    .container-banner .row {
                                      -ms-flex-direction: column-reverse;
                                      flex-direction: column-reverse;
                                    }

                                    .container-banner .row .column-right {
                                      -ms-flex-preferred-size: auto;
                                      flex-basis: auto;
                                      width: 100%;
                                      height: 250px;
                                      background-image: url("/content/dam/public-web/bbvaes/images/homes/abrir-ir-mobile.jpg");
                                      background-size: cover;
                                      background-repeat: no-repeat;
                                    }

                                    .container-banner .row .column-right .text {
                                      font-size: 42px;
                                      margin-top: 40%;
                                    }

                                    .container-banner
                                      .row
                                      .column-right
                                      .subtext {
                                      font-size: 16px;
                                      padding-top: 8%;
                                    }

                                    .container-banner .row .column-left {
                                      width: 100%;
                                      height: auto;
                                      padding-top: 16px;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left {
                                      height: auto;
                                      width: 92%;
                                      -ms-flex-pack: start;
                                      justify-content: flex-start;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left
                                      .ante-title {
                                      font-size: 14px;
                                      padding-bottom: 8px;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left
                                      .title {
                                      font-size: 26px;
                                      line-height: 30px;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left
                                      .subtitle {
                                      font-size: 10px;
                                      line-height: 14px;
                                      margin-bottom: 42px;
                                      margin-top: 16px;
                                    }

                                    .container-banner
                                      .row
                                      .column-left
                                      .content-left
                                      .btn__medium-blue {
                                      width: 33%;
                                    }
                                  }

                                  @media screen and (max-width: 390px) {
                                    .column-right {
                                      height: 200px;
                                      background-size: cover;
                                    }

                                    .column-left .content-left .title {
                                      font-size: 24px;
                                      padding-bottom: 24px;
                                    }
                                  }

                                  @media screen and (min-width: 1700px) {
                                    .container-banner {
                                      height: 700px;
                                    }

                                    .container-banner .row .column-right .text {
                                      margin-top: 55%;
                                    }
                                  }

                                  @media screen and (min-width: 2160px) {
                                    .container-banner {
                                      height: 800px;
                                    }

                                    .container-banner .row .column-right .text {
                                      margin-top: 60%;
                                    }
                                  }

                                  @media screen and (min-width: 2600px) {
                                    .container-banner {
                                      height: 1100px;
                                    }

                                    .container-banner .row .column-right .text {
                                      margin-top: 75%;
                                    }
                                  }
                                </style>
                                <script type="text/javascript">
                                  (function () {
                                    // third party js
                                  })(this);
                                <\/script>
                                <section class="container-banner">
                                  <div class="row">
                                    <div class="column-left">
                                      <div class="content-left">
                                        <p class="ante-title">
                                          Cuentas sin comisiones para autónomos
                                          y empresas
                                        </p>
                                        <p class="title">
                                          Abre una Cuenta Bienvenida y haz
                                          avanzar tu negocio
                                        </p>
                                        <div class="ahorra-inversion-btn">
                                          <a
                                            class="btn__basic btn__medium-blue"
                                            href="/empresas/productos/cuentas.html"
                                            >Saber más
                                          </a>
                                        </div>
                                        <p class="subtitle">
                                          Cero comisiones en servicios
                                          habituales.
                                        </p>
                                      </div>
                                    </div>
                                    <div class="column-right">
                                      <div class="content-right">
                                        <p class="text">abrir. ir.</p>
                                      </div>
                                      <p class="subtext">Hoy comienza todo</p>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="experiencefragment aem-GridColumn aem-GridColumn--default--12"
                    >
                      <div
                        data-dl-component
                        data-dl-component-name="experiencefragment_9"
                        data-dl-component-type="bbva/pwebs/components/par/experiencefragment"
                        id="home-master-jcr-content-root-experiencefragment_9"
                      >
                        <div class="xf-content-height">
                          <div
                            class="aem-Grid aem-Grid--12 aem-Grid--default--12"
                          >
                            <div
                              class="promoalert alert aem-GridColumn aem-GridColumn--default--12"
                            >
                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.promoalert/small.lc-20231103-110345-lc.min.ACSHASHdc5eb70e360f15ea259bd05fca81577c.css"
                                type="text/css"
                              />

                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.promoalert/large.lc-20231103-110345-lc.min.ACSHASH2ccae3fc1b243aaf0082b836fe8bc838.css"
                                type="text/css"
                                media="all and (min-width: 600px)"
                              />

                              <div
                                itemscope
                                itemtype="http://schema.org/CommunicateAction"
                                data-component="alert"
                                data-component-params='{"selectors":{"close" : ".promoalert__close"}}'
                              >
                                <div
                                  class="promoalert__container promoalert__container--content container"
                                  data-dl-component
                                  data-dl-component-name="promoalert_copy"
                                  data-dl-component-type="bbva/pwebs/components/par/promoalert"
                                  id="guia-emprendimiento-master-jcr-content-root-promoalert_copy"
                                >
                                  <div
                                    class="promoalert__base promoalert--banner-light promoalert--banner promoalert--withimg promoalert--withbtn"
                                  >
                                    <div class="promoalert__content container">
                                      <div class="promoalert__image">
                                        <div class="promoalert__mask">
                                          <svg
                                            viewBox="0 0 58 257"
                                            aria-hidden="true"
                                            focusable="false"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                          >
                                            <g
                                              stroke="none"
                                              stroke-width="1"
                                              fill="none"
                                              fill-rule="evenodd"
                                            >
                                              <polygon
                                                fill="#000000"
                                                fill-rule="nonzero"
                                                points="0.3515625 256.273438 28.625 256.273438 57.4921875 0.12109375 0.3515625 0.12109375"
                                              ></polygon>
                                            </g>
                                          </svg>
                                        </div>

                                        <img
                                          data-component="lazyimages"
                                          data-component-params='{"keepSize": "" }'
                                          data-src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Business_suitcase.png.img.320.1697034207735.png"
                                          data-srcset="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Business_suitcase.png.img.80.1697034207735.png 80w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Business_suitcase.png.img.160.1697034207735.png 160w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Business_suitcase.png.img.320.1697034207735.png 320w"
                                          src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Business_suitcase.png.img.320.1697034207735.png"
                                          sizes="(min-width: 600px) 50vw, 100vw"
                                          itemprop="image"
                                          class="promoalert__img"
                                          alt=""
                                          aria-hidden="true"
                                        />
                                      </div>

                                      <div class="promoalert__main">
                                        <div class="promoalert__texts">
                                          <h5
                                            itemprop="name"
                                            class="promoalert__title"
                                          >
                                            Guía de emprendimiento
                                          </h5>
                                          <div
                                            itemprop="description"
                                            class="promoalert__text rte"
                                          >
                                            <p>
                                              ¿Quieres emprender y tienes dudas
                                              acerca de los trámites que hay que
                                              realizar?
                                            </p>
                                            <p>
                                              Desde BBVA ponemos a tu
                                              disposición una guía con todos los
                                              <b>pasos a seguir</b> para crear
                                              tu empresa desde cero.
                                            </p>
                                          </div>
                                        </div>
                                        <div class="promoalert__button">
                                          <a
                                            itemprop="mainEntityOfPage"
                                            class="btn__basic btn__medium-blue"
                                            aria-label="Saber más"
                                            title="Saber más"
                                            target="_self"
                                            role="button"
                                            href="/empresas/emprendimiento/como-crear-una-empresa.html"
                                          >
                                            Saber más
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="experiencefragment aem-GridColumn aem-GridColumn--default--12"
                    >
                      <div
                        data-dl-component
                        data-dl-component-name="experiencefragment_c"
                        data-dl-component-type="bbva/pwebs/components/par/experiencefragment"
                        id="home-master-jcr-content-root-experiencefragment_c"
                      >
                        <div class="xf-content-height">
                          <div
                            class="aem-Grid aem-Grid--12 aem-Grid--default--12"
                          >
                            <div
                              class="productslider aem-GridColumn aem-GridColumn--default--12"
                            >
                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.swiper.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.slider.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.productslider/small.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.productslider/large.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <section>
                                <div
                                  class="productslider__base"
                                  itemscope
                                  itemtype="http://schema.org/Service"
                                >
                                  <div
                                    class="slider"
                                    data-component="productslider"
                                    data-dl-component
                                    data-dl-component-name="productslider_copy_c"
                                    data-dl-component-type="bbva/pwebs/components/par/productslider"
                                    id="carrusel-master-jcr-content-root-productslider_copy_c"
                                  >
                                    <div class="swiper-button-next">
                                      <i
                                        class="bbva-icon bbva-icon__2_017_forward"
                                      ></i>
                                    </div>
                                    <div class="swiper-button-prev">
                                      <i
                                        class="bbva-icon bbva-icon__2_046_back"
                                      ></i>
                                    </div>
                                    <div class="container swiper-container">
                                      <ul class="swiper-wrapper">
                                        <li class="linkwithicon">
                                          <link
                                            rel="stylesheet"
                                            href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                                            media="print"
                                            onload="this.media='all'"
                                          />

                                          <a
                                            itemprop="url"
                                            data-dl-component
                                            data-dl-component-name="linkwithicon1"
                                            data-dl-component-type="bbva/pwebs/components/par/unremovable/linkwithiconnotarget"
                                            class="linkwithicon__link link__base link__base--linked"
                                            target="_self"
                                            title="Quiero una cuenta"
                                            aria-label="Quiero una cuenta"
                                            href="/empresas/productos/cuentas.html"
                                          >
                                            <span class="linkwithicon__content">
                                              <img
                                                class="bbva-svgicon bbva-svgicon--linked"
                                                src="content/dam/public-web/global/images/icons/1_001_euro.svg"
                                                aria-hidden="true"
                                              />
                                              <span
                                                itemprop="name"
                                                class="linkwithicon__text"
                                                >Quiero una cuenta</span
                                              >
                                            </span>
                                          </a>
                                        </li>

                                        <li class="linkwithicon">
                                          <link
                                            rel="stylesheet"
                                            href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                                            media="print"
                                            onload="this.media='all'"
                                          />

                                          <a
                                            itemprop="url"
                                            data-dl-component
                                            data-dl-component-name="linkwithicon2"
                                            data-dl-component-type="bbva/pwebs/components/par/unremovable/linkwithiconnotarget"
                                            class="linkwithicon__link link__base link__base--linked"
                                            target="_self"
                                            title="Necesito financiación"
                                            aria-label="Necesito financiación"
                                            href="/empresas/productos/financiacion.html"
                                          >
                                            <span class="linkwithicon__content">
                                              <img
                                                class="bbva-svgicon bbva-svgicon--linked"
                                                src="content/dam/public-web/global/images/icons/1_063_loaneuro.svg"
                                                aria-hidden="true"
                                              />
                                              <span
                                                itemprop="name"
                                                class="linkwithicon__text"
                                                >Necesito financiación</span
                                              >
                                            </span>
                                          </a>
                                        </li>

                                        <li class="linkwithicon">
                                          <link
                                            rel="stylesheet"
                                            href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                                            media="print"
                                            onload="this.media='all'"
                                          />

                                          <a
                                            itemprop="url"
                                            data-dl-component
                                            data-dl-component-name="linkwithicon3"
                                            data-dl-component-type="bbva/pwebs/components/par/unremovable/linkwithiconnotarget"
                                            class="linkwithicon__link link__base link__base--linked"
                                            target="_self"
                                            title="Busco un TPV accede"
                                            aria-label="Busco un TPV accede"
                                            href="/empresas/productos/tpv.html"
                                          >
                                            <span class="linkwithicon__content">
                                              <img
                                                class="bbva-svgicon bbva-svgicon--linked"
                                                src="content/dam/public-web/global/images/icons/1_042_mobilepayment.svg"
                                                aria-hidden="true"
                                              />
                                              <span
                                                itemprop="name"
                                                class="linkwithicon__text"
                                                >Busco un TPV</span
                                              >
                                            </span>
                                          </a>
                                        </li>

                                        <div class="linkwithicon">
                                          <link
                                            rel="stylesheet"
                                            href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                                            media="print"
                                            onload="this.media='all'"
                                          />

                                          <a
                                            itemprop="url"
                                            data-dl-component
                                            data-dl-component-name="linkwithicon"
                                            data-dl-component-type="bbva/pwebs/components/par/linkwithicon"
                                            class="linkwithicon__link link__base link__base--linked"
                                            target="_self"
                                            title="Busco una tarjeta de débito o crédito"
                                            aria-label="Busco una tarjeta de débito o crédito"
                                            href="/empresas/productos/tarjetas.html"
                                          >
                                            <span class="linkwithicon__content">
                                              <img
                                                class="bbva-svgicon bbva-svgicon--linked"
                                                src="content/dam/public-web/global/images/icons/1_009_transfercard.svg"
                                                aria-hidden="true"
                                              />
                                              <span
                                                itemprop="name"
                                                class="linkwithicon__text"
                                                >Busco una tarjeta de débito o
                                                crédito</span
                                              >
                                            </span>
                                          </a>
                                        </div>

                                        <li class="linkwithicon">
                                          <link
                                            rel="stylesheet"
                                            href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                                            media="print"
                                            onload="this.media='all'"
                                          />

                                          <a
                                            itemprop="url"
                                            data-dl-component
                                            data-dl-component-name="linkwithicon4"
                                            data-dl-component-type="bbva/pwebs/components/par/unremovable/linkwithiconnotarget"
                                            class="linkwithicon__link link__base link__base--linked"
                                            target="_self"
                                            title="Comercio exterior"
                                            aria-label="Comercio exterior"
                                            href="/empresas/productos/negocio-internacional.html"
                                          >
                                            <span class="linkwithicon__content">
                                              <img
                                                class="bbva-svgicon bbva-svgicon--linked"
                                                src="content/dam/public-web/global/images/icons/1_028_international.svg"
                                                aria-hidden="true"
                                              />
                                              <span
                                                itemprop="name"
                                                class="linkwithicon__text"
                                                >Comercio exterior</span
                                              >
                                            </span>
                                          </a>
                                        </li>

                                        <li class="linkwithicon">
                                          <link
                                            rel="stylesheet"
                                            href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                                            media="print"
                                            onload="this.media='all'"
                                          />

                                          <a
                                            itemprop="url"
                                            data-dl-component
                                            data-dl-component-name="linkwithicon5"
                                            data-dl-component-type="bbva/pwebs/components/par/unremovable/linkwithiconnotarget"
                                            class="linkwithicon__link link__base link__base--linked"
                                            target="_self"
                                            title="Seguros más información"
                                            aria-label="Seguros más información"
                                            href="/empresas/productos/seguros.html"
                                          >
                                            <span class="linkwithicon__content">
                                              <img
                                                class="bbva-svgicon bbva-svgicon--linked"
                                                src="content/dam/public-web/global/images/icons/5_078_insurance2.svg"
                                                aria-hidden="true"
                                              />
                                              <span
                                                itemprop="name"
                                                class="linkwithicon__text"
                                                >Seguros</span
                                              >
                                            </span>
                                          </a>
                                        </li>

                                        <li class="linkwithicon">
                                          <link
                                            rel="stylesheet"
                                            href="apps/bbva/pwebs/components/clientlibs/bbva.linkwithicon.lc-20231103-110345-lc.min.css"
                                            media="print"
                                            onload="this.media='all'"
                                          />

                                          <a
                                            itemprop="url"
                                            data-dl-component
                                            data-dl-component-name="linkwithicon6"
                                            data-dl-component-type="bbva/pwebs/components/par/unremovable/linkwithiconnotarget"
                                            class="linkwithicon__link link__base link__base--linked"
                                            target="_self"
                                            title="Gestión de cobros"
                                            aria-label="Gestión de cobros"
                                            href="/empresas/productos/cobros.html"
                                          >
                                            <span class="linkwithicon__content">
                                              <img
                                                class="bbva-svgicon bbva-svgicon--linked"
                                                src="content/dam/public-web/global/images/icons/1_064_receipteuro.svg"
                                                aria-hidden="true"
                                              />
                                              <span
                                                itemprop="name"
                                                class="linkwithicon__text"
                                                >Gestión de cobros</span
                                              >
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                      <div class="swiper-pagination"></div>
                                    </div>
                                    <div
                                      class="productslider__overlay productslider__overlay--left"
                                    ></div>
                                    <div
                                      class="productslider__overlay productslider__overlay--right"
                                    ></div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="experiencefragment aem-GridColumn aem-GridColumn--default--12"
                    >
                      <div
                        data-dl-component
                        data-dl-component-name="experiencefragment_c_680375122"
                        data-dl-component-type="bbva/pwebs/components/par/experiencefragment"
                        id="home-master-jcr-content-root-experiencefragment_c_680375122"
                      >
                        <div class="xf-content-height">
                          <div
                            class="aem-Grid aem-Grid--12 aem-Grid--default--12"
                          >
                            <div
                              class="outstandingopportunitymodule aem-GridColumn aem-GridColumn--default--12"
                            >
                              <div
                                class="outstandingopportunitymodule__base background--white"
                              >
                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.outstandingopportunity/small.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.outstandingopportunity/large.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.outstandingopportunitycard/small.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.outstandingopportunitycard/large.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.featuredoutstandingopportunitycard/small.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.featuredoutstandingopportunitycard/large.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <div
                                  class="container outstandingopportunitymodule__header"
                                >
                                  <span
                                    id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239"
                                    class="anchor-navigation-reference"
                                  ></span>
                                  <h2
                                    itemprop="name"
                                    class="outstandingopportunity__title"
                                  >
                                    Para tu empresa
                                  </h2>
                                </div>

                                <div
                                  data-component="outstandingopportunitycard"
                                >
                                  <div class="outstandingopportunity">
                                    <section>
                                      <article>
                                        <div
                                          class="outstandingopportunity__base"
                                          itemscope
                                          itemtype="http://schema.org/FinancialProduct"
                                        >
                                          <span
                                            id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity"
                                            class="anchor-navigation-reference"
                                          ></span>
                                          <div class="container">
                                            <div
                                              class="outstandingopportunity__cards"
                                            >
                                              <div
                                                class="outstandingopportunity__featured outstandingopportunity__featured--left"
                                              >
                                                <div
                                                  class="featuredoutstandingopportunitycard__base"
                                                  id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-featuredoutstandingopportunitycard"
                                                >
                                                  <div
                                                    class="featuredoutstandingopportunitycard__image"
                                                  >
                                                    <a
                                                      itemprop="url"
                                                      data-dl-component-name="featuredoutstandingopportunitycard"
                                                      data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/featuredoutstandingopportunitycard"
                                                      id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-featuredoutstandingopportunitycard"
                                                      class="featuredoutstandingopportunitycard__imagelink"
                                                      aria-label="Más información sobre las ayudas de los Fondos Europeos Next Generation"
                                                      target="_self"
                                                      title="Más información sobre las ayudas de los Fondos Europeos Next Generation"
                                                      href="/general/fondos-europeos-next-generation.html"
                                                    >
                                                      <img
                                                        data-component="lazyimages"
                                                        data-component-params='{"keepSize": "" }'
                                                        data-src="content/dam/public-web/bbvaes/images/general/sostenibilidad/2400x1600_fondos-ngeu-card.jpg.img.2400.1678883794523.jpg"
                                                        data-srcset="content/dam/public-web/bbvaes/images/general/sostenibilidad/2400x1600_fondos-ngeu-card.jpg.img.320.1678883794523.jpg 320w,/content/dam/public-web/bbvaes/images/general/sostenibilidad/2400x1600_fondos-ngeu-card.jpg.img.768.1678883794523.jpg 768w,/content/dam/public-web/bbvaes/images/general/sostenibilidad/2400x1600_fondos-ngeu-card.jpg.img.960.1678883794523.jpg 960w,/content/dam/public-web/bbvaes/images/general/sostenibilidad/2400x1600_fondos-ngeu-card.jpg.img.1176.1678883794523.jpg 1176w,/content/dam/public-web/bbvaes/images/general/sostenibilidad/2400x1600_fondos-ngeu-card.jpg.img.1600.1678883794523.jpg 1600w,/content/dam/public-web/bbvaes/images/general/sostenibilidad/2400x1600_fondos-ngeu-card.jpg.img.2400.1678883794523.jpg 2400w"
                                                        src="content/dam/public-web/bbvaes/images/general/sostenibilidad/2400x1600_fondos-ngeu-card.jpg.img.768.1678883794523.jpg"
                                                        sizes="(min-width: 900px) 40vw, 90vw"
                                                        itemprop="image"
                                                        class="featuredoutstandingopportunitycard__img"
                                                        alt=""
                                                        aria-hidden="true"
                                                      />

                                                      <span></span>
                                                      <div
                                                        class="image__overlay"
                                                      ></div>
                                                    </a>
                                                  </div>

                                                  <div
                                                    class="featuredoutstandingopportunitycard__content"
                                                  >
                                                    <h3
                                                      itemprop="name"
                                                      class="featuredoutstandingopportunitycard__title"
                                                    >
                                                      <a
                                                        itemprop="url"
                                                        data-dl-component-name="featuredoutstandingopportunitycard"
                                                        data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/featuredoutstandingopportunitycard"
                                                        id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-featuredoutstandingopportunitycard"
                                                        class="featuredoutstandingopportunitycard__imagelink"
                                                        aria-label="Fondos Europeos Next Generation"
                                                        target="_self"
                                                        title="Fondos Europeos Next Generation"
                                                        href="/general/fondos-europeos-next-generation.html"
                                                      >
                                                        <span
                                                          itemprop="name"
                                                          class="featuredoutstandingopportunitycard__titlelink"
                                                          >Fondos Europeos Next
                                                          Generation</span
                                                        >
                                                      </a>
                                                    </h3>
                                                    <span
                                                      class="featuredoutstandingopportunitycard__subtitle"
                                                    >
                                                      <p>
                                                        Una oportunidad para
                                                        poder impulsar tu
                                                        negocio con las ayudas
                                                        destinadas a nuevos
                                                        proyectos de
                                                        sostenibilidad,
                                                        digitalización y
                                                        cohesión e igualdad.
                                                        España obtendrá de los
                                                        fondos europeos más de
                                                        175.000 millones de
                                                        euros.
                                                      </p>
                                                    </span>

                                                    <a
                                                      itemprop="url"
                                                      data-dl-component-name="featuredoutstandingopportunitycard"
                                                      data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/featuredoutstandingopportunitycard"
                                                      id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-featuredoutstandingopportunitycard"
                                                      class="featuredoutstandingopportunitycard__link link__base"
                                                      aria-label="Más información sobre las ayudas de los Fondos Europeos Next Generation"
                                                      target="_self"
                                                      title="Más información sobre las ayudas de los Fondos Europeos Next Generation"
                                                      href="/general/fondos-europeos-next-generation.html"
                                                    >
                                                      <span itemprop="name"
                                                        >Más información</span
                                                      >
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="outstandingopportunity__left"
                                              >
                                                <div
                                                  class="outstandingopportunity__line"
                                                >
                                                  <div
                                                    class="outstandingopportunity__wideoutstanding"
                                                  >
                                                    <div
                                                      class="outstandingopportunitycard__base outstandingopportunitycard__base--wide outstandingopportunitycard__base--ilustration"
                                                      id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-wideTop"
                                                    >
                                                      <div
                                                        class="outstandingopportunitycard__widewrapper"
                                                      >
                                                        <a
                                                          itemprop="url"
                                                          data-dl-component-name="wideTop"
                                                          data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/wideoutstandingopportunitycard"
                                                          id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-wideTop"
                                                          class="outstandingopportunitycard__imgwrapper"
                                                          aria-label="Más información sobre Préstamos Online Negocios"
                                                          target="_self"
                                                          title="Más información sobre Préstamos Online Negocios"
                                                          href="/empresas/productos/financiacion/prestamo-para-autonomos-y-negocios.html"
                                                        >
                                                          <img
                                                            data-component="lazyimages"
                                                            data-component-params='{"keepSize": "" }'
                                                            data-src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Loan_Euro.png.img.320.1683107235881.png"
                                                            data-srcset="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Loan_Euro.png.img.80.1683107235881.png 80w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Loan_Euro.png.img.160.1683107235881.png 160w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Loan_Euro.png.img.320.1683107235881.png 320w"
                                                            src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-Loan_Euro.png.img.320.1683107235881.png"
                                                            sizes="(min-width: 990px) 20vw, (min-width: 600px) 15vw, 40vw"
                                                            itemprop="image"
                                                            class="outstandingopportunitycard__image__wideoutstanding"
                                                            alt=""
                                                            aria-hidden="true"
                                                          />

                                                          <span
                                                            class="alignVertical"
                                                          ></span>
                                                          <div
                                                            class="image__overlay"
                                                          ></div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        class="outstandingopportunitycard__content__wideoutstanding"
                                                      >
                                                        <div
                                                          class="outstandingopportunitycard__container"
                                                        >
                                                          <h3
                                                            itemprop="name"
                                                            class="outstandingopportunitycard__title"
                                                          >
                                                            Préstamo Online
                                                            Negocios
                                                          </h3>
                                                          <span
                                                            itemprop="description"
                                                            class="outstandingopportunitycard__subtitle"
                                                          >
                                                            <p>
                                                              Solicita 100 %
                                                              online desde 1.500
                                                              € hasta 50.000 €.
                                                            </p>
                                                          </span>

                                                          <a
                                                            itemprop="url"
                                                            data-dl-component="truncate"
                                                            data-dl-component-name="wideTop"
                                                            data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/wideoutstandingopportunitycard"
                                                            id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-wideToptruncate"
                                                            class="link__base outstandingopportunitycard__link"
                                                            aria-label="Más información sobre Préstamos Online Negocios"
                                                            target="_self"
                                                            title="Más información sobre Préstamos Online Negocios"
                                                            href="/empresas/productos/financiacion/prestamo-para-autonomos-y-negocios.html"
                                                          >
                                                            <span
                                                              itemprop="name"
                                                              >Más
                                                              información</span
                                                            >
                                                          </a>
                                                        </div>
                                                        <span
                                                          class="alignVertical"
                                                        ></span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  class="outstandingopportunity__line"
                                                >
                                                  <div
                                                    class="outstandingopportunity__card"
                                                  >
                                                    <div
                                                      class="outstandingopportunitycard__base pseudo--white"
                                                      id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-outsBottomLeft"
                                                    >
                                                      <div
                                                        class="outstandingopportunitycard__container"
                                                      >
                                                        <img
                                                          class="bbva-svgicon bbva-svgicon--large"
                                                          src="content/dam/public-web/global/images/icons/1_058_nointerest.svg"
                                                          aria-hidden="true"
                                                        />
                                                        <h3
                                                          itemprop="name"
                                                          class="outstandingopportunitycard__title"
                                                        >
                                                          Financiación a Euribor
                                                          + 0% el primer año
                                                        </h3>
                                                        <span
                                                          itemprop="description"
                                                          class="outstandingopportunitycard__subtitle"
                                                        >
                                                          <p>
                                                            Impulsa tus
                                                            proyectos con hasta
                                                            30.000€. Para nuevos
                                                            clientes con
                                                            facturación inferior
                                                            a 5 millones €/año.
                                                          </p>
                                                        </span>

                                                        <a
                                                          itemprop="url"
                                                          data-dl-component="truncate"
                                                          data-dl-component-name="outsBottomLeft"
                                                          data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/outstandingopportunitycard"
                                                          id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-outsBottomLefttruncate"
                                                          class="link__base outstandingopportunitycard__link"
                                                          aria-label="Más información sobre financiación. Abre en nueva ventana"
                                                          target="_blank"
                                                          rel="noopener noreferrer"
                                                          title="Más información sobre financiación. Abre en nueva ventana"
                                                          href="/empresas/productos/financiacion/promocion-financiacion-con-condiciones-especiales.html"
                                                        >
                                                          <i></i>
                                                          <span itemprop="name"
                                                            >Más
                                                            información</span
                                                          >
                                                        </a>
                                                      </div>
                                                      <span
                                                        class="alignVertical"
                                                      ></span>
                                                    </div>
                                                  </div>

                                                  <div
                                                    class="outstandingopportunity__card"
                                                  >
                                                    <div
                                                      class="outstandingopportunitycard__base pseudo--white"
                                                      id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-outsBottomRight"
                                                    >
                                                      <div
                                                        class="outstandingopportunitycard__container"
                                                      >
                                                        <img
                                                          class="bbva-svgicon bbva-svgicon--large"
                                                          src="content/dam/public-web/global/images/icons/generic-sustainability.svg"
                                                          aria-hidden="true"
                                                        />
                                                        <h3
                                                          itemprop="name"
                                                          class="outstandingopportunitycard__title"
                                                        >
                                                          Oportunidades para un
                                                          futuro más verde
                                                        </h3>
                                                        <span
                                                          itemprop="description"
                                                          class="outstandingopportunitycard__subtitle"
                                                        >
                                                          <p>
                                                            Te ofrecemos ideas
                                                            para ahorrar en el
                                                            consumo de energía
                                                            de tu empresa.
                                                          </p>
                                                        </span>

                                                        <a
                                                          itemprop="url"
                                                          data-dl-component="truncate"
                                                          data-dl-component-name="outsBottomRight"
                                                          data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/outstandingopportunitycard"
                                                          id="puzzle-empresas-master-jcr-content-root-outstandingopportuni_682728239-outstandingopportunitymoduleparsys-outstandingopportunity-outsBottomRighttruncate"
                                                          class="link__base outstandingopportunitycard__link"
                                                          aria-label="Más información sobre soluciones sostenibles para tu negocio"
                                                          target="_self"
                                                          title="Más información sobre soluciones sostenibles para tu negocio"
                                                          href="/general/sostenibilidad/soluciones-para-negocios.html"
                                                        >
                                                          <i></i>
                                                          <span itemprop="name"
                                                            >Más
                                                            información</span
                                                          >
                                                        </a>
                                                      </div>
                                                      <span
                                                        class="alignVertical"
                                                      ></span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </article>
                                    </section>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="experiencefragment aem-GridColumn aem-GridColumn--default--12"
                    >
                      <div
                        data-dl-component
                        data-dl-component-name="experiencefragment_940791444"
                        data-dl-component-type="bbva/pwebs/components/par/experiencefragment"
                        id="home-master-jcr-content-root-experiencefragment_940791444"
                      >
                        <div class="xf-content-height">
                          <div
                            class="aem-Grid aem-Grid--12 aem-Grid--default--12"
                          >
                            <div
                              class="promoalert alert aem-GridColumn aem-GridColumn--default--12"
                            >
                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.promoalert/small.lc-20231103-110345-lc.min.ACSHASHdc5eb70e360f15ea259bd05fca81577c.css"
                                type="text/css"
                              />

                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.promoalert/large.lc-20231103-110345-lc.min.ACSHASH2ccae3fc1b243aaf0082b836fe8bc838.css"
                                type="text/css"
                                media="all and (min-width: 600px)"
                              />

                              <div
                                itemscope
                                itemtype="http://schema.org/CommunicateAction"
                                data-component="alert"
                                data-component-params='{"selectors":{"close" : ".promoalert__close"}}'
                              >
                                <div
                                  class="promoalert__container promoalert__container--content container"
                                  data-dl-component
                                  data-dl-component-name="promoalert"
                                  data-dl-component-type="bbva/pwebs/components/par/promoalert"
                                  id="spark-spark-jcr-content-root-promoalert"
                                >
                                  <div
                                    class="promoalert__base promoalert--banner-dark promoalert--banner promoalert--withimg promoalert--withbtn"
                                  >
                                    <div class="promoalert__content container">
                                      <div class="promoalert__image">
                                        <div class="promoalert__mask">
                                          <svg
                                            viewBox="0 0 58 257"
                                            aria-hidden="true"
                                            focusable="false"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                          >
                                            <g
                                              stroke="none"
                                              stroke-width="1"
                                              fill="none"
                                              fill-rule="evenodd"
                                            >
                                              <polygon
                                                fill="#000000"
                                                fill-rule="nonzero"
                                                points="0.3515625 256.273438 28.625 256.273438 57.4921875 0.12109375 0.3515625 0.12109375"
                                              ></polygon>
                                            </g>
                                          </svg>
                                        </div>

                                        <img
                                          data-component="lazyimages"
                                          data-component-params='{"keepSize": "" }'
                                          data-src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/SPARK-Isometrico3.png.img.320.1687365913341.png"
                                          data-srcset="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/SPARK-Isometrico3.png.img.80.1687365913341.png 80w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/SPARK-Isometrico3.png.img.160.1687365913341.png 160w,/content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/SPARK-Isometrico3.png.img.320.1687365913341.png 320w"
                                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                          sizes="(min-width: 600px) 50vw, 100vw"
                                          itemprop="image"
                                          class="promoalert__img"
                                          alt=""
                                          aria-hidden="true"
                                        />
                                      </div>

                                      <div class="promoalert__main">
                                        <div class="promoalert__texts">
                                          <h5
                                            itemprop="name"
                                            class="promoalert__title"
                                          >
                                            BBVA Spark, el mejor aliado para las
                                            empresas de alto crecimiento
                                          </h5>
                                          <div
                                            itemprop="description"
                                            class="promoalert__text rte"
                                          >
                                            'Startup', 'scaleup', unicornio...
                                            no importa cómo te definas. Nuestros
                                            especialistas te acompañan en cada
                                            etapa del camino ofreciéndote las
                                            soluciones que más necesitas.
                                          </div>
                                          <div class="promoalert__footer">
                                            <a
                                              itemprop="mainEntityOfPage"
                                              class="promoalert__link link__base link__base--dark"
                                              aria-label="Conoce nuestras soluciones"
                                              title="Conoce nuestras soluciones"
                                              target="_self"
                                              href="/empresas/emprendimiento/spark.html"
                                            >
                                              Conoce nuestras soluciones
                                            </a>
                                          </div>
                                        </div>
                                        <div class="promoalert__button">
                                          <a
                                            itemprop="mainEntityOfPage"
                                            class="btn__basic btn__medium-aqua"
                                            href="https://empresas.bbva.es/onb-netcash/#!/spark"
                                            aria-label="Contacta con nosotros. Abre en nueva ventana"
                                            title="Contacta con nosotros. Abre en nueva ventana"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            role="button"
                                          >
                                            Contacta con nosotros
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="experiencefragment aem-GridColumn aem-GridColumn--default--12"
                    >
                      <div
                        data-dl-component
                        data-dl-component-name="experiencefragment_c_769948070"
                        data-dl-component-type="bbva/pwebs/components/par/experiencefragment"
                        id="home-master-jcr-content-root-experiencefragment_c_769948070"
                      >
                        <div class="xf-content-height">
                          <div
                            class="aem-Grid aem-Grid--12 aem-Grid--default--12"
                          >
                            <div
                              class="outstandingopportunitymodule aem-GridColumn aem-GridColumn--default--12"
                            >
                              <div
                                class="outstandingopportunitymodule__base background--white"
                              >
                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.outstandingopportunity/small.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.outstandingopportunity/large.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.outstandingopportunitycard/small.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.outstandingopportunitycard/large.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.featuredoutstandingopportunitycard/small.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <link
                                  rel="stylesheet"
                                  href="apps/bbva/pwebs/components/clientlibs/bbva.featuredoutstandingopportunitycard/large.lc-20231103-110345-lc.min.css"
                                  media="print"
                                  onload="this.media='all'"
                                />

                                <div
                                  class="container outstandingopportunitymodule__header"
                                >
                                  <span
                                    id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080"
                                    class="anchor-navigation-reference"
                                  ></span>
                                  <h2
                                    itemprop="name"
                                    class="outstandingopportunity__title"
                                  >
                                    Para autónomos como tú
                                  </h2>
                                </div>

                                <div
                                  data-component="outstandingopportunitycard"
                                >
                                  <div class="outstandingopportunity">
                                    <section>
                                      <article>
                                        <div
                                          class="outstandingopportunity__base"
                                          itemscope
                                          itemtype="http://schema.org/FinancialProduct"
                                        >
                                          <span
                                            id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity"
                                            class="anchor-navigation-reference"
                                          ></span>
                                          <div class="container">
                                            <div
                                              class="outstandingopportunity__cards"
                                            >
                                              <div
                                                class="outstandingopportunity__featured outstandingopportunity__featured--left"
                                              >
                                                <div
                                                  class="featuredoutstandingopportunitycard__base"
                                                  id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-featuredoutstandingopportunitycard"
                                                >
                                                  <div
                                                    class="featuredoutstandingopportunitycard__image"
                                                  >
                                                    <a
                                                      itemprop="url"
                                                      data-dl-component-name="featuredoutstandingopportunitycard"
                                                      data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/featuredoutstandingopportunitycard"
                                                      id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-featuredoutstandingopportunitycard"
                                                      class="featuredoutstandingopportunitycard__imagelink"
                                                      aria-label="Más información sobre Cuenta Negocios Bienvenida"
                                                      target="_self"
                                                      title="Más información sobre Cuenta Negocios Bienvenida"
                                                      href="/empresas/productos/cuentas/cuenta-autonomos.html"
                                                    >
                                                      <img
                                                        data-component="lazyimages"
                                                        data-component-params='{"keepSize": "" }'
                                                        data-src="content/dam/public-web/bbvaes/images/empresas/productos/cuentas/cuenta-negocios-bienvenida/2400x1600-cuenta-negocios-bienvenida.jpg.img.2400.1697625528232.jpg"
                                                        data-srcset="content/dam/public-web/bbvaes/images/empresas/productos/cuentas/cuenta-negocios-bienvenida/2400x1600-cuenta-negocios-bienvenida.jpg.img.320.1697625528232.jpg 320w,content/dam/public-web/bbvaes/images/empresas/productos/cuentas/cuenta-negocios-bienvenida/2400x1600-cuenta-negocios-bienvenida.jpg.img.768.1697625528232.jpg 768w,content/dam/public-web/bbvaes/images/empresas/productos/cuentas/cuenta-negocios-bienvenida/2400x1600-cuenta-negocios-bienvenida.jpg.img.960.1697625528232.jpg 960w,content/dam/public-web/bbvaes/images/empresas/productos/cuentas/cuenta-negocios-bienvenida/2400x1600-cuenta-negocios-bienvenida.jpg.img.1176.1697625528232.jpg 1176w,content/dam/public-web/bbvaes/images/empresas/productos/cuentas/cuenta-negocios-bienvenida/2400x1600-cuenta-negocios-bienvenida.jpg.img.1600.1697625528232.jpg 1600w,content/dam/public-web/bbvaes/images/empresas/productos/cuentas/cuenta-negocios-bienvenida/2400x1600-cuenta-negocios-bienvenida.jpg.img.2400.1697625528232.jpg 2400w"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                        sizes="(min-width: 900px) 40vw, 90vw"
                                                        itemprop="image"
                                                        class="featuredoutstandingopportunitycard__img"
                                                        alt=""
                                                        aria-hidden="true"
                                                      />

                                                      <span></span>
                                                      <div
                                                        class="image__overlay"
                                                      ></div>
                                                    </a>
                                                  </div>

                                                  <div
                                                    class="featuredoutstandingopportunitycard__content"
                                                  >
                                                    <h3
                                                      itemprop="name"
                                                      class="featuredoutstandingopportunitycard__title"
                                                    >
                                                      <a
                                                        itemprop="url"
                                                        data-dl-component-name="featuredoutstandingopportunitycard"
                                                        data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/featuredoutstandingopportunitycard"
                                                        id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-featuredoutstandingopportunitycard"
                                                        class="featuredoutstandingopportunitycard__imagelink"
                                                        aria-label="Cuenta Negocios Bienvenida"
                                                        target="_self"
                                                        title="Cuenta Negocios Bienvenida"
                                                        href="/empresas/productos/cuentas/cuenta-autonomos.html"
                                                      >
                                                        <span
                                                          itemprop="name"
                                                          class="featuredoutstandingopportunitycard__titlelink"
                                                          >Cuenta Negocios
                                                          Bienvenida</span
                                                        >
                                                      </a>
                                                    </h3>
                                                    <span
                                                      class="featuredoutstandingopportunitycard__subtitle"
                                                    >
                                                      <p>
                                                        La cuenta online para
                                                        nuevos clientes
                                                        autónomos sin comisiones
                                                        ni condiciones. Además,
                                                        ahora puedes disfrutarla
                                                        con nuestras promociones
                                                        exclusivas y tu Tarjeta
                                                        Negocios Débito, también
                                                        sin comisiones ni
                                                        condiciones.
                                                      </p>
                                                    </span>

                                                    <a
                                                      itemprop="url"
                                                      data-dl-component-name="featuredoutstandingopportunitycard"
                                                      data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/featuredoutstandingopportunitycard"
                                                      id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-featuredoutstandingopportunitycard"
                                                      class="featuredoutstandingopportunitycard__link link__base"
                                                      aria-label="Más información sobre Cuenta Negocios Bienvenida"
                                                      target="_self"
                                                      title="Más información sobre Cuenta Negocios Bienvenida"
                                                      href="/empresas/productos/cuentas/cuenta-autonomos.html"
                                                    >
                                                      <span itemprop="name"
                                                        >Más información</span
                                                      >
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="outstandingopportunity__left"
                                              >
                                                <div
                                                  class="outstandingopportunity__line"
                                                >
                                                  <div
                                                    class="outstandingopportunity__wideoutstanding"
                                                  >
                                                    <div
                                                      class="outstandingopportunitycard__base outstandingopportunitycard__base--wide outstandingopportunitycard__base--ilustration"
                                                      id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-wideTop"
                                                    >
                                                      <div
                                                        class="outstandingopportunitycard__widewrapper"
                                                      >
                                                        <a
                                                          itemprop="url"
                                                          data-dl-component-name="wideTop"
                                                          data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/wideoutstandingopportunitycard"
                                                          id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-wideTop"
                                                          class="outstandingopportunitycard__imgwrapper"
                                                          aria-label="Más información sobre  TPV + Bono"
                                                          target="_self"
                                                          title="Más información sobre  TPV + Bono"
                                                          href="/empresas/productos/tpv/tpv-android-sem.html"
                                                        >
                                                          <img
                                                            data-component="lazyimages"
                                                            data-component-params='{"keepSize": "" }'
                                                            data-src="content/dam/public-web/global/images/micro-illustrations/bbva_mpos.svg"
                                                            data-srcset="content/dam/public-web/global/images/micro-illustrations/bbva_mpos.svg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                            sizes="(min-width: 990px) 20vw, (min-width: 600px) 15vw, 40vw"
                                                            itemprop="image"
                                                            class="outstandingopportunitycard__image__wideoutstanding"
                                                            alt=""
                                                            aria-hidden="true"
                                                          />

                                                          <span
                                                            class="alignVertical"
                                                          ></span>
                                                          <div
                                                            class="image__overlay"
                                                          ></div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        class="outstandingopportunitycard__content__wideoutstanding"
                                                      >
                                                        <div
                                                          class="outstandingopportunitycard__container"
                                                        >
                                                          <h3
                                                            itemprop="name"
                                                            class="outstandingopportunitycard__title"
                                                          >
                                                            Tu TPV + Bono, ahora
                                                            sin coste
                                                          </h3>
                                                          <span
                                                            itemprop="description"
                                                            class="outstandingopportunitycard__subtitle"
                                                          >
                                                            <p>
                                                              Llévate la
                                                              solución de cobro
                                                              y el bono que
                                                              mejor se adapte a
                                                              tu negocio sin
                                                              pagar nada durante
                                                              los primeros 12
                                                              meses.
                                                              ¡Aprovéchalo!
                                                            </p>
                                                          </span>

                                                          <a
                                                            itemprop="url"
                                                            data-dl-component="truncate"
                                                            data-dl-component-name="wideTop"
                                                            data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/wideoutstandingopportunitycard"
                                                            id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-wideToptruncate"
                                                            class="link__base outstandingopportunitycard__link"
                                                            aria-label="Más información sobre  TPV + Bono"
                                                            target="_self"
                                                            title="Más información sobre  TPV + Bono"
                                                            href="/empresas/productos/tpv/tpv-android-sem.html"
                                                          >
                                                            <span
                                                              itemprop="name"
                                                              >Más
                                                              información</span
                                                            >
                                                          </a>
                                                        </div>
                                                        <span
                                                          class="alignVertical"
                                                        ></span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  class="outstandingopportunity__line"
                                                >
                                                  <div
                                                    class="outstandingopportunity__card"
                                                  >
                                                    <div
                                                      class="outstandingopportunitycard__base pseudo--white"
                                                      id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-outsBottomLeft"
                                                    >
                                                      <div
                                                        class="outstandingopportunitycard__container"
                                                      >
                                                        <img
                                                          class="bbva-svgicon bbva-svgicon--large"
                                                          src="content/dam/public-web/global/images/icons/5_005_health.svg"
                                                          aria-hidden="true"
                                                        />
                                                        <h3
                                                          itemprop="name"
                                                          class="outstandingopportunitycard__title"
                                                        >
                                                          Seguro Baja Laboral
                                                          (ILT Autónomos BBVA
                                                          Allianz)
                                                        </h3>
                                                        <span
                                                          itemprop="description"
                                                          class="outstandingopportunitycard__subtitle"
                                                        >
                                                          <p>
                                                            Mantén tus ingresos
                                                            cuando no puedas
                                                            trabajar en caso de
                                                            enfermedad o
                                                            accidente.<br />
                                                          </p>
                                                        </span>

                                                        <a
                                                          itemprop="url"
                                                          data-dl-component="truncate"
                                                          data-dl-component-name="outsBottomLeft"
                                                          data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/outstandingopportunitycard"
                                                          id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-outsBottomLefttruncate"
                                                          class="link__base outstandingopportunitycard__link"
                                                          aria-label="Más información sobre Seguro Baja Laboral Autónomos"
                                                          target="_self"
                                                          title="Más información sobre Seguro Baja Laboral Autónomos"
                                                          href="/empresas/productos/seguros/seguro-baja-laboral-ilt.html"
                                                        >
                                                          <i></i>
                                                          <span itemprop="name"
                                                            >Más
                                                            información</span
                                                          >
                                                        </a>
                                                      </div>
                                                      <span
                                                        class="alignVertical"
                                                      ></span>
                                                    </div>
                                                  </div>

                                                  <div
                                                    class="outstandingopportunity__card"
                                                  >
                                                    <div
                                                      class="outstandingopportunitycard__base pseudo--white"
                                                      id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-outsBottomRight"
                                                    >
                                                      <div
                                                        class="outstandingopportunitycard__container"
                                                      >
                                                        <img
                                                          class="bbva-svgicon bbva-svgicon--large"
                                                          src="content/dam/public-web/global/images/icons/1_058_nointerest.svg"
                                                          aria-hidden="true"
                                                        />
                                                        <h3
                                                          itemprop="name"
                                                          class="outstandingopportunitycard__title"
                                                        >
                                                          Financiación a Euríbor
                                                          +0% el primer año
                                                        </h3>
                                                        <span
                                                          itemprop="description"
                                                          class="outstandingopportunitycard__subtitle"
                                                        >
                                                          <p>
                                                            Impulsa tu negocio
                                                            con esta oportunidad
                                                            única de
                                                            financiación para
                                                            nuevos clientes.
                                                          </p>
                                                        </span>

                                                        <a
                                                          itemprop="url"
                                                          data-dl-component="truncate"
                                                          data-dl-component-name="outsBottomRight"
                                                          data-dl-component-type="bbva/pwebs/components/par/outstandingopportunitymodule/outstandingopportunity/outstandingopportunitycard"
                                                          id="puzzle-autonomos-master-jcr-content-root-outstandingopportuni_496025080-outstandingopportunitymoduleparsys-outstandingopportunity-outsBottomRighttruncate"
                                                          class="link__base outstandingopportunitycard__link"
                                                          aria-label="Más información sobre Financiación "
                                                          target="_self"
                                                          title="Más información sobre Financiación "
                                                          href="/empresas/productos/financiacion/promocion-financiacion-con-condiciones-especiales-autonomos.html"
                                                        >
                                                          <i></i>
                                                          <span itemprop="name"
                                                            >Más
                                                            información</span
                                                          >
                                                        </a>
                                                      </div>
                                                      <span
                                                        class="alignVertical"
                                                      ></span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </article>
                                    </section>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="experiencefragment aem-GridColumn aem-GridColumn--default--12"
                    >
                      <div
                        data-dl-component
                        data-dl-component-name="experiencefragment"
                        data-dl-component-type="bbva/pwebs/components/par/experiencefragment"
                        id="home-master-jcr-content-root-experiencefragment"
                      >
                        <div class="xf-content-height">
                          <div
                            class="aem-Grid aem-Grid--12 aem-Grid--default--12"
                          >
                            <div
                              class="godigital aem-GridColumn aem-GridColumn--default--12"
                            >
                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.godigital/small.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.godigital/large.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <div
                                class="godigital__base background--core-blue"
                                data-dl-component
                                data-dl-component-name="godigital_copy_copy_"
                                data-dl-component-type="bbva/pwebs/components/par/godigital"
                                id="go-digital-y-microilustration-master-jcr-content-root-godigital_copy_copy_"
                              >
                                <article class="container">
                                  <div class="godigital__grid">
                                    <h2
                                      itemprop="name"
                                      class="godigital__title"
                                    >
                                      Disfruta de esto y mucho más
                                    </h2>
                                    <h3 class="godigital__subtitle">
                                      <a
                                        itemprop="url"
                                        class="link__base link__base--core"
                                        target="_self"
                                        aria-label="Descubre todo lo que BBVA puede hacer por ti"
                                        title="Descubre todo lo que BBVA puede hacer por ti"
                                        href="/empresas/banca-online.html"
                                      >
                                        Descubre todo lo que BBVA puede hacer
                                        por ti
                                      </a>
                                    </h3>
                                    <ul class="godigital__items">
                                      <li class="godigital__item">
                                        <a
                                          class="godigital__card godigital__card--animated animations__godigital background--core-blue-dark"
                                          itemprop="url"
                                          target="_self"
                                          title="Servicio de agregación"
                                          aria-label="Servicio de agregación si eres autónomo, añade tus otros bancos a la app de BBVA."
                                          href="/personas/banca-online/agregador-cuentas-bancarias.html"
                                        >
                                          <div
                                            class="godigital__card__content godigital__card--sideimage"
                                          >
                                            <div
                                              class="godigital__overlay"
                                            ></div>
                                            <div
                                              class="godigital__card__text__container"
                                            >
                                              <div
                                                class="godigital__card__text"
                                              >
                                                <div
                                                  class="godigital__card__text--center"
                                                >
                                                  <div
                                                    class="godigital__card__text__content"
                                                  >
                                                    <h3
                                                      itemprop="name"
                                                      class="godigital__card__text__title"
                                                    >
                                                      Servicio de agregación
                                                    </h3>
                                                    <h4
                                                      class="godigital__card__text__subtitle"
                                                    >
                                                      Si eres autónomo, añade
                                                      tus otros bancos a la app
                                                      de BBVA.
                                                    </h4>

                                                    <div
                                                      class="godigital__card__text__rte__container"
                                                    >
                                                      <div
                                                        class="godigital__card__text__rte rte"
                                                      >
                                                        <ul>
                                                          <li>
                                                            Consulta el estado
                                                            de tus cuentas, tus
                                                            tarjetas, últimos
                                                            movimientos, planes
                                                            de pensiones, etc.
                                                          </li>
                                                          <li>
                                                            BBVA nunca te pedirá
                                                            tus claves de
                                                            operaciones. Tus
                                                            pagos y
                                                            transferencias los
                                                            harás desde tus
                                                            otros bancos.
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="godigital__image">
                                              <img
                                                data-component="lazyimages"
                                                data-component-params='{"keepSize": "" }'
                                                data-src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-AgregadorFinanciero.png.img.320.1641547018237.png"
                                                data-srcset="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-AgregadorFinanciero.png.img.320.1641547018237.png 320w"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                sizes="(min-width: 900px) 40vw, 90vw"
                                                itemprop="image"
                                                class="godigital__image__img"
                                                alt="aplicación de bancomer"
                                                aria-hidden="true"
                                              />
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li class="godigital__item">
                                        <a
                                          class="godigital__card godigital__card--animated animations__godigital background--core-blue-dark"
                                          itemprop="url"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          title="BBVA Agregador de empresas"
                                          aria-label="BBVA Agregador de empresas añade y controla todos los bancos de tu empresa en un mismo sitio.. Abre en nueva ventana"
                                          href="/empresas/experiencias/bbva-one-view.html"
                                        >
                                          <div
                                            class="godigital__card__content godigital__card--sideimage"
                                          >
                                            <div
                                              class="godigital__overlay"
                                            ></div>
                                            <div
                                              class="godigital__card__text__container"
                                            >
                                              <div
                                                class="godigital__card__text"
                                              >
                                                <div
                                                  class="godigital__card__text--center"
                                                >
                                                  <div
                                                    class="godigital__card__text__content"
                                                  >
                                                    <h4
                                                      itemprop="name"
                                                      class="godigital__card__text__title"
                                                    >
                                                      BBVA Agregador de empresas
                                                    </h4>
                                                    <h4
                                                      class="godigital__card__text__subtitle"
                                                    >
                                                      Añade y controla todos los
                                                      bancos de tu empresa en un
                                                      mismo sitio.
                                                    </h4>

                                                    <div
                                                      class="godigital__card__text__rte__container"
                                                    >
                                                      <div
                                                        class="godigital__card__text__rte rte"
                                                      >
                                                        <ul>
                                                          <li>
                                                            Ahorra tiempo para
                                                            tu empresa
                                                          </li>
                                                          <li>
                                                            Controla tus
                                                            cuentas.<br />
                                                          </li>
                                                          <li>
                                                            Toma mejores
                                                            decisiones.<br />
                                                          </li>
                                                          <li>
                                                            Tus claves seguirán
                                                            siendo solo
                                                            tuyas.<br />
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="godigital__image">
                                              <img
                                                data-component="lazyimages"
                                                data-component-params='{"keepSize": "" }'
                                                data-src="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-One_view.png.img.320.1641542238599.png"
                                                data-srcset="content/dam/public-web/bbvaes/images/microilustraciones/no-utilizar/600x600-One_view.png.img.320.1641542238599.png 320w"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                sizes="(min-width: 900px) 40vw, 90vw"
                                                itemprop="image"
                                                class="godigital__image__img"
                                                alt="Multipagos"
                                              />
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li class="godigital__item">
                                        <a
                                          class="godigital__card godigital__card--animated animations__godigital background--medium-blue"
                                          itemprop="url"
                                          target="_self"
                                          title="App BBVA Empresas"
                                          aria-label="App BBVA Empresas Gestiona las cuentas de tu empresa en cualquier momento y lugar. "
                                          href="/empresasapps/app-bbva-empresas.html"
                                        >
                                          <div
                                            class="godigital__card__content godigital__card--sideimage"
                                          >
                                            <div
                                              class="godigital__overlay"
                                            ></div>
                                            <div
                                              class="godigital__card__text__container"
                                            >
                                              <div
                                                class="godigital__card__text"
                                              >
                                                <div
                                                  class="godigital__card__text--center"
                                                >
                                                  <div
                                                    class="godigital__card__text__content"
                                                  >
                                                    <h3
                                                      itemprop="name"
                                                      class="godigital__card__text__title"
                                                    >
                                                      App BBVA Empresas
                                                    </h3>
                                                    <h4
                                                      class="godigital__card__text__subtitle"
                                                    >
                                                      Gestiona las cuentas de tu
                                                      empresa en cualquier
                                                      momento y lugar.
                                                    </h4>

                                                    <div
                                                      class="godigital__card__text__rte__container"
                                                    >
                                                      <div
                                                        class="godigital__card__text__rte rte"
                                                      >
                                                        <ul>
                                                          <li>
                                                            Opera con tus claves
                                                            habituales en la
                                                            app.<br />
                                                          </li>
                                                          <li>
                                                            Agiliza la búsqueda
                                                            de información y los
                                                            enlaces directos a
                                                            tus operaciones.
                                                            <br />
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="godigital__image">
                                              <img
                                                data-component="lazyimages"
                                                data-component-params='{"keepSize": "" }'
                                                data-src="content/dam/public-web/global/images/micro-illustrations/app_bbva_dark.svg"
                                                data-srcset="content/dam/public-web/global/images/micro-illustrations/app_bbva_dark.svg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                sizes="(min-width: 900px) 40vw, 90vw"
                                                itemprop="image"
                                                class="godigital__image__img"
                                                alt=""
                                                aria-hidden="true"
                                              />
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li class="godigital__item">
                                        <a
                                          class="godigital__card godigital__card--animated animations__godigital background--medium-blue-dark"
                                          itemprop="url"
                                          target="_self"
                                          title="BBVA My Business"
                                          aria-label="BBVA My Business ¿Quieres controlar de forma fácil e intuitiva las ventas de tu negocio? "
                                          href="/empresas/banca-online/control-de-las-ventas.html"
                                        >
                                          <div
                                            class="godigital__card__content godigital__card--sideimage"
                                          >
                                            <div
                                              class="godigital__overlay"
                                            ></div>
                                            <div
                                              class="godigital__card__text__container"
                                            >
                                              <div
                                                class="godigital__card__text"
                                              >
                                                <div
                                                  class="godigital__card__text--center"
                                                >
                                                  <div
                                                    class="godigital__card__text__content"
                                                  >
                                                    <h3
                                                      itemprop="name"
                                                      class="godigital__card__text__title"
                                                    >
                                                      BBVA My Business
                                                    </h3>
                                                    <h4
                                                      class="godigital__card__text__subtitle"
                                                    >
                                                      ¿Quieres controlar de
                                                      forma fácil e intuitiva
                                                      las ventas de tu negocio?
                                                    </h4>

                                                    <div
                                                      class="godigital__card__text__rte__container"
                                                    >
                                                      <div
                                                        class="godigital__card__text__rte rte"
                                                      >
                                                        <ul>
                                                          <li>
                                                            Seguimiento de
                                                            ventas.
                                                          </li>
                                                          <li>
                                                            Posibilidad de
                                                            añadir otras formas
                                                            de cobro.
                                                          </li>
                                                          <li>
                                                            Posibilidad de
                                                            solicitar el
                                                            Préstamo TPV
                                                            Online.<br />
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="godigital__image">
                                              <img
                                                data-component="lazyimages"
                                                data-component-params='{"keepSize": "" }'
                                                data-src="content/dam/public-web/global/images/micro-illustrations/smart_pay_euro_dark.svg"
                                                data-srcset="content/dam/public-web/global/images/micro-illustrations/smart_pay_euro_dark.svg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                sizes="(min-width: 900px) 40vw, 90vw"
                                                itemprop="image"
                                                class="godigital__image__img"
                                                alt=""
                                                aria-hidden="true"
                                              />
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </article>
                              </div>
                            </div>
                            <div
                              class="microillustrationsmodule aem-GridColumn aem-GridColumn--default--12"
                            >
                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.microillustrationsmodule.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <link
                                rel="stylesheet"
                                href="apps/bbva/pwebs/components/clientlibs/bbva.microillustrationcard.lc-20231103-110345-lc.min.css"
                                media="print"
                                onload="this.media='all'"
                              />

                              <div
                                class="microillustrationsmodule__base background--"
                                data-dl-component
                                data-dl-component-name="microillustrationsmo"
                                data-dl-component-type="bbva/pwebs/components/par/microillustrationsmodule"
                                id="module-go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo"
                              >
                                <div
                                  class="microillustrationsmodule__wrapper container"
                                >
                                  <ul class="microillustrationsmodule__main">
                                    <li class="microillustrationsmodule__item">
                                      <div
                                        class="microillustrationcard__base"
                                        data-dl-component
                                        data-dl-component-name="card1"
                                        data-dl-component-type="bbva/pwebs/components/par/microillustrationcard"
                                        id="card-go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo-microcardparsys-card1"
                                        itemscope
                                        itemtype="http://schema.org/ImageObject"
                                      >
                                        <div
                                          class="microillustrationcard__card"
                                          tabindex="0"
                                        >
                                          <div
                                            class="microillustrationcard__wrapper"
                                          >
                                            <div>
                                              <a
                                                itemprop="url"
                                                data-dl-component-name="card1"
                                                data-dl-component-type="bbva/pwebs/components/par/microillustrationcard"
                                                id="go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo-microcardparsys-card1"
                                                aria-haspopup="false"
                                                aria-label="Siempre cerca de ti con nuestras oficinas y cajeros"
                                                target="_self"
                                                title="Siempre cerca de ti con nuestras oficinas y cajeros"
                                                href="/general/buscador-oficinas.html"
                                              >
                                                <img
                                                  data-component="lazyimages"
                                                  data-component-params='{"keepSize": "" }'
                                                  data-src="content/dam/public-web/global/images/micro-illustrations/locate.svg"
                                                  data-srcset="content/dam/public-web/global/images/micro-illustrations/locate.svg"
                                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                  sizes="(min-width: 900px) 20vw, 25vw"
                                                  itemprop="image"
                                                  class="microillustrationcard__image"
                                                  alt=""
                                                  aria-hidden="true"
                                                />

                                                <span></span>
                                                <div></div>
                                              </a>
                                            </div>
                                          </div>
                                        </div>

                                        <h2
                                          class="microillustrationcard__title"
                                          itemprop="name"
                                        >
                                          Oficinas y cajeros
                                        </h2>

                                        <a
                                          itemprop="url"
                                          data-dl-component="truncate"
                                          data-dl-component-name="card1"
                                          data-dl-component-type="bbva/pwebs/components/par/microillustrationcard"
                                          id="go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo-microcardparsys-card1truncate"
                                          class="microillustrationcard__link link__base microillustrationcard__link--no-text"
                                          aria-haspopup="false"
                                          aria-label="Siempre cerca de ti con nuestras oficinas y cajeros"
                                          target="_self"
                                          title="Siempre cerca de ti con nuestras oficinas y cajeros"
                                          href="/general/buscador-oficinas.html"
                                        >
                                          <span itemprop="name"
                                            >Siempre cerca de ti</span
                                          >
                                        </a>
                                      </div>
                                    </li>

                                    <li class="microillustrationsmodule__item">
                                      <div
                                        class="microillustrationcard__base"
                                        data-dl-component
                                        data-dl-component-name="card2"
                                        data-dl-component-type="bbva/pwebs/components/par/microillustrationcard"
                                        id="card-go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo-microcardparsys-card2"
                                        itemscope
                                        itemtype="http://schema.org/ImageObject"
                                      >
                                        <div
                                          class="microillustrationcard__card"
                                          tabindex="0"
                                        >
                                          <div
                                            class="microillustrationcard__wrapper"
                                          >
                                            <div>
                                              <a
                                                itemprop="url"
                                                data-dl-component-name="card2"
                                                data-dl-component-type="bbva/pwebs/components/par/microillustrationcard"
                                                id="go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo-microcardparsys-card2"
                                                aria-haspopup="false"
                                                aria-label="Ir a Consultas, reclamaciones e incidencias"
                                                target="_self"
                                                title="Ir a Consultas, reclamaciones e incidencias"
                                                href="/general/atencion-al-cliente.html"
                                              >
                                                <img
                                                  data-component="lazyimages"
                                                  data-component-params='{"keepSize": "" }'
                                                  data-src="content/dam/public-web/global/images/micro-illustrations/values_customer_comes_first.svg"
                                                  data-srcset="content/dam/public-web/global/images/micro-illustrations/values_customer_comes_first.svg"
                                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                  sizes="(min-width: 900px) 20vw, 25vw"
                                                  itemprop="image"
                                                  class="microillustrationcard__image"
                                                  alt=""
                                                  aria-hidden="true"
                                                />

                                                <span></span>
                                                <div></div>
                                              </a>
                                            </div>
                                          </div>
                                        </div>

                                        <h2
                                          class="microillustrationcard__title"
                                          itemprop="name"
                                        >
                                          Centro de ayuda
                                        </h2>

                                        <a
                                          itemprop="url"
                                          data-dl-component="truncate"
                                          data-dl-component-name="card2"
                                          data-dl-component-type="bbva/pwebs/components/par/microillustrationcard"
                                          id="go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo-microcardparsys-card2truncate"
                                          class="microillustrationcard__link link__base microillustrationcard__link--no-text"
                                          aria-haspopup="false"
                                          aria-label="Ir a Consultas, reclamaciones e incidencias"
                                          target="_self"
                                          title="Ir a Consultas, reclamaciones e incidencias"
                                          href="/general/atencion-al-cliente.html"
                                        >
                                          <span itemprop="name"
                                            >Consultas, reclamaciones e
                                            incidencias</span
                                          >
                                        </a>
                                      </div>
                                    </li>

                                    <li class="microillustrationsmodule__item">
                                      <div
                                        class="microillustrationcard__base"
                                        data-dl-component
                                        data-dl-component-name="microillustrationcar"
                                        data-dl-component-type="bbva/pwebs/components/par/microillustrationcard"
                                        id="card-go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo-microcardparsys-microillustrationcar"
                                        itemscope
                                        itemtype="http://schema.org/ImageObject"
                                      >
                                        <div
                                          class="microillustrationcard__card"
                                          tabindex="0"
                                        >
                                          <div
                                            class="microillustrationcard__wrapper"
                                          >
                                            <div>
                                              <a
                                                itemprop="url"
                                                data-dl-component-name="microillustrationcar"
                                                data-dl-component-type="bbva/pwebs/components/par/microillustrationcard"
                                                id="go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo-microcardparsys-microillustrationcar"
                                                aria-haspopup="false"
                                                aria-label="Ir a Operativas de emergencia"
                                                target="_self"
                                                title="Ir a Operativas de emergencia"
                                                href="/general/ayuda-urgente.html"
                                              >
                                                <img
                                                  data-component="lazyimages"
                                                  data-component-params='{"keepSize": "" }'
                                                  data-src="content/dam/public-web/global/images/micro-illustrations/app_bbva.svg"
                                                  data-srcset="content/dam/public-web/global/images/micro-illustrations/app_bbva.svg"
                                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                  sizes="(min-width: 900px) 20vw, 25vw"
                                                  itemprop="image"
                                                  class="microillustrationcard__image"
                                                  alt=""
                                                  aria-hidden="true"
                                                />

                                                <span></span>
                                                <div></div>
                                              </a>
                                            </div>
                                          </div>
                                        </div>

                                        <h2
                                          class="microillustrationcard__title"
                                          itemprop="name"
                                        >
                                          Ayuda urgente
                                        </h2>

                                        <a
                                          itemprop="url"
                                          data-dl-component="truncate"
                                          data-dl-component-name="microillustrationcar"
                                          data-dl-component-type="bbva/pwebs/components/par/microillustrationcard"
                                          id="go-digital-y-microilustration-master-jcr-content-root-microillustrationsmo-microcardparsys-microillustrationcartruncate"
                                          class="microillustrationcard__link link__base microillustrationcard__link--no-text"
                                          aria-haspopup="false"
                                          aria-label="Ir a Operativas de emergencia"
                                          target="_self"
                                          title="Ir a Operativas de emergencia"
                                          href="/general/ayuda-urgente.html"
                                        >
                                          <span itemprop="name"
                                            >Operativas de emergencia</span
                                          >
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                  <div
                                    class="microillustrationsmodule__footer"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
              <div
                class="target parbase aem-GridColumn aem-GridColumn--default--12"
              >
                <script type="text/javascript">
                  if (window.ContextHub && ContextHub.SegmentEngine) {
                    ContextHubJQ(function () {
                      ContextHub.eventing.on(
                        ContextHub.Constants.EVENT_TEASER_LOADED,
                        function (event, data) {
                          data.data.forEach(function (evData) {
                            if (
                              evData.key ===
                              "_content_bbvaes_es_empresas_jcr_content_bottomcontent_ctamobilestickymodul"
                            ) {
                              $CQ(
                                "#_content_bbvaes_es_empresas_jcr_content_bottomcontent_ctamobilestickymodul"
                              ).css("visibility", "visible");
                            }
                          });
                        }
                      );
                      ContextHub.SegmentEngine.PageInteraction.Teaser({
                        locationId:
                          "_content_bbvaes_es_empresas_jcr_content_bottomcontent_ctamobilestickymodul",
                        variants: [
                          {
                            path: "/content/campaigns/bbvaes/master/personalizacion_clientes/cliente_experience/empresas-ctamobilestickymodul",
                            name: "empresas-ctamobilestickymodul",
                            title: "Experiencia Cliente",
                            campaignName: "personalizacion_clientes",
                            campaignPath:
                              "/content/campaigns/bbvaes/master/personalizacion_clientes",
                            thumbnail:
                              "/content/campaigns/bbvaes/master/personalizacion_clientes/cliente_experience/empresas-ctamobilestickymodul.thumb.png",
                            id: "personalizacion_clientes_empresas-ctamobilestickymodul",
                            url: "/content/campaigns/bbvaes/master/personalizacion_clientes/cliente_experience/empresas-ctamobilestickymodul/jcr:content/par.html",
                            campaignPriority: 1,
                            segments: [
                              "/conf/segments/bbvaes/settings/wcm/segments/es-cliente--2065242123",
                            ],
                            tags: [],
                          },
                          {
                            path: "/empresas/default",
                            name: "default",
                            title: "Default",
                            campaignName: "",
                            thumbnail: "/empresas.thumb.png",
                            url: "/empresas/_jcr_content/bottomcontent/ctamobilestickymodul.default.html",
                            campaignPriority: 0,
                            tags: [],
                          },
                        ],
                        strategy: "",
                        trackingURL: null,
                      });

                      // Make the targeted content visible if no teasers were loaded after 5s
                      setTimeout(function () {
                        $CQ(
                          "#_content_bbvaes_es_empresas_jcr_content_bottomcontent_ctamobilestickymodul"
                        ).css("visibility", "visible");
                      }, 5000);
                    });
                  } else {
                    $CQ(
                      "#_content_bbvaes_es_empresas_jcr_content_bottomcontent_ctamobilestickymodul"
                    ).css("visibility", "visible");
                  }
                <\/script>

                <div
                  id="_content_bbvaes_es_empresas_jcr_content_bottomcontent_ctamobilestickymodul"
                  class="campaign"
                  style="visibility: hidden"
                >
                  <div class="default ctamobilestickymodule">
                    <link
                      rel="stylesheet"
                      href="apps/bbva/pwebs/components/clientlibs/bbva.downloadbtns.lc-20231103-110345-lc.min.ACSHASH7e0f9ded156d20a7c2f3fe2f8e9be936.css"
                      type="text/css"
                    />

                    <link
                      rel="stylesheet"
                      href="apps/bbva/pwebs/components/clientlibs/bbva.ctamobilesticky.lc-20231103-110345-lc.min.ACSHASH2f2d13ff88044d606211d2f9f672106d.css"
                      type="text/css"
                    />

                    <!-- TODO - Do we have a custom clientLib here for replacing the cta and downloadbtns clientLibs? -->

                    <div
                      class="ctamobilesticky__container sticky__element"
                      data-component="ctamobilesticky"
                      data-component-params='{"breakpoints" : [0]}'
                    >
                      <a
                        target="_self"
                        class="btn__basic btn__medium-aqua"
                        title="Hazte cliente de BBVA"
                        aria-label="Hazte cliente de BBVA"
                        role="button"
                        href="/general/hazte-cliente/abrir-cuenta-bancaria-empresas.html"
                      >
                        <div class="ctamobilesticky__btnwrapper">
                          <span>Hazte cliente</span>
                        </div>
                      </a>

                      <div class="ctamobilesticky__homeline"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Insert empty html to avoid make appear breadcrumb into this template -->
      <div class="bbva--footer wrapper">
        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.prefooter/small.lc-20231103-110345-lc.min.ACSHASH6ce72e3d37045646c42f5c6833d69ddd.css"
          type="text/css"
        />

        <link
          rel="stylesheet"
          href="apps/bbva/pwebs/components/clientlibs/bbva.prefooter/large.lc-20231103-110345-lc.min.ACSHASHc272bf02d40695f375abe931ee763f30.css"
          type="text/css"
        />

        <!--googleoff: index-->
        <div
          class="background--100"
          data-dl-component
          data-dl-component-name="pre-footer"
          data-dl-component-type="bbva/pwebs/components/par/prefooter/prefooterbgcolor"
          id="pre-footer"
        >
          <a
            class="prefooter__heading invisible"
            role="contentinfo"
            tabindex="0"
            aria-label="Pie de página"
            href="#pre-footer"
            >Pie de página
          </a>
          <ul
            class="prefooter__base container"
            itemprop="itemListElement"
            itemscope
            itemtype="http://schema.org/ListItem"
          >
            <li class="prefooter__col">
              <div>
                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.linklistmodule/small.lc-20231103-110345-lc.min.css"
                  media="print"
                  onload="this.media='all'"
                />

                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.linklistmodule/large.lc-20231103-110345-lc.min.css"
                  media="print"
                  onload="this.media='all'"
                />

                <nav
                  class="linklistmodule__base container"
                  data-dl-component
                  data-dl-component-name="linklistmodule1"
                  data-dl-component-type="bbva/pwebs/components/par/unremovable/linklistmodule"
                  id="pre-footer-linklistmodule1"
                  aria-labelledby="linkedlist__pre-footer-linklistmodule1"
                >
                  <p
                    itemprop="name"
                    class="linklistmodule__title"
                    id="linkedlist__pre-footer-linklistmodule1"
                  >
                    Más BBVA
                  </p>
                  <ul class="linklistmodule__list">
                    <li class="linklistmodule__element">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link"
                        data-dl-component-type="bbva/pwebs/components/par/unremovable/link"
                        id="pre-footer-linklistmodule1-link"
                        class="link__content link__base"
                        aria-label="Agro"
                        target="_self"
                        title="Agro"
                        href="/empresas/agro-banco-rural.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Agro</span>
                      </a>
                    </li>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_104346244"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule1-innerparsys-link_104346244"
                        class="link__content link__base"
                        aria-label="BBVA Spark"
                        target="_self"
                        title="BBVA Spark"
                        href="/empresas/emprendimiento/spark.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">BBVA Spark</span>
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_1427265683"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule1-innerparsys-link_1427265683"
                        class="link__content link__base"
                        aria-label="Guía de cómo crear una empresa"
                        target="_self"
                        title="Guía de cómo crear una empresa"
                        href="/empresas/emprendimiento/como-crear-una-empresa.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name"
                          >Guía de cómo crear una empresa</span
                        >
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule1-innerparsys-link"
                        class="link__content link__base"
                        aria-label="Expertos en empresas"
                        target="_self"
                        title="Expertos en empresas"
                        href="/empresas/expertos-empresas-1mas9.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Expertos en empresas</span>
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_1661331328_copy"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule1-innerparsys-link_1661331328_copy"
                        class="link__content link__base"
                        aria-label="Negocio responsable"
                        target="_self"
                        title="Negocio responsable"
                        href="/general/negocio-responsable.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Negocio responsable</span>
                      </a>
                    </div>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_897121827_c"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule1-innerparsys-listlink_897121827_c"
                        href="https://accionistaseinversores.bbva.com/"
                        class="link__content link__base"
                        aria-label="Ir a web de Accionistas. Abre en nueva ventana"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ir a web de Accionistas. Abre en nueva ventana"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Accionistas</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_1149208668__1719894617"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule1-innerparsys-listlink_1149208668__1719894617"
                        href="https://www.bbvaresearch.com/"
                        class="link__content link__base"
                        aria-label="Ir a web de BBVA Research. Abre en nueva ventana"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ir a web de BBVA Research. Abre en nueva ventana"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">BBVA Research</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_1149208668_"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule1-innerparsys-listlink_1149208668_"
                        href="https://careers.bbva.com/espana/"
                        class="link__content link__base"
                        aria-label="Ir a empleo en BBVA. Abre en nueva ventana"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ir a empleo en BBVA. Abre en nueva ventana"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Empleo en BBVA</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_1149208668__2064131523"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule1-innerparsys-listlink_1149208668__2064131523"
                        href="https://redagentes.bbva.com/"
                        class="link__content link__base"
                        aria-label="Ir a red de agentes BBVA. Abre en nueva ventana"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ir a red de agentes BBVA. Abre en nueva ventana"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Red de agentes BBVA</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_1149208668__1270225549"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule1-innerparsys-listlink_1149208668__1270225549"
                        href="https://www.bbva.com/es/"
                        class="link__content link__base"
                        aria-label="Ir a bbva.com. Abre en nueva ventana"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ir a bbva.com. Abre en nueva ventana"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">bbva.com</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_412311917"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule1-innerparsys-listlink_412311917"
                        href="https://www.bbvapivot.com/"
                        class="link__content link__base"
                        aria-label="Ir a BBVA Pivot. Abre en nueva ventana"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ir a BBVA Pivot. Abre en nueva ventana"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">BBVA Pivot</span>
                      </a>
                    </li>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_1424612668"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule1-innerparsys-link_1424612668"
                        class="link__content link__base"
                        aria-label="Divisas y monedas"
                        target="_self"
                        title="Divisas y monedas"
                        href="/general/cambio-divisas-moneda.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Divisas y monedas</span>
                      </a>
                    </div>
                  </ul>
                </nav>
              </div>
            </li>
            <li class="prefooter__col">
              <div>
                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.linklistmodule/small.lc-20231103-110345-lc.min.css"
                  media="print"
                  onload="this.media='all'"
                />

                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.linklistmodule/large.lc-20231103-110345-lc.min.css"
                  media="print"
                  onload="this.media='all'"
                />

                <nav
                  class="linklistmodule__base container"
                  data-dl-component
                  data-dl-component-name="linklistmodule2"
                  data-dl-component-type="bbva/pwebs/components/par/unremovable/linklistmodule"
                  id="pre-footer-linklistmodule2"
                  aria-labelledby="linkedlist__pre-footer-linklistmodule2"
                >
                  <p
                    itemprop="name"
                    class="linklistmodule__title"
                    id="linkedlist__pre-footer-linklistmodule2"
                  >
                    Lo último
                  </p>
                  <ul class="linklistmodule__list">
                    <li class="linklistmodule__element">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link"
                        data-dl-component-type="bbva/pwebs/components/par/unremovable/link"
                        id="pre-footer-linklistmodule2-link"
                        class="link__content link__base"
                        aria-label="Línea ICO Avales Ucrania"
                        target="_self"
                        title="Línea ICO Avales Ucrania"
                        href="/empresas/productos/financiacion/linea-ico-avales-conflicto-ucrania.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Línea ICO Avales Ucrania</span>
                      </a>
                    </li>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_copy_80851288"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule2-innerparsys-link_copy_80851288"
                        class="link__content link__base"
                        aria-label="Ir a BBVA Agregador de empresas. Abre en nueva ventana"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ir a BBVA Agregador de empresas. Abre en nueva ventana"
                        href="/empresas/experiencias/bbva-one-view.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">BBVA Agregador de empresas</span>
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_229481473_copy"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule2-innerparsys-link_229481473_copy"
                        class="link__content link__base"
                        aria-label="Agregador financiero para autónomos"
                        target="_self"
                        title="Agregador financiero para autónomos"
                        href="/personas/banca-online/agregador-cuentas-bancarias.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name"
                          >Agregador financiero para autónomos</span
                        >
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_copy"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule2-innerparsys-link_copy"
                        class="link__content link__base"
                        aria-label="BBVA My business"
                        target="_self"
                        title="BBVA My business"
                        href="/empresas/banca-online/control-de-las-ventas.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">BBVA My business</span>
                      </a>
                    </div>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_811679197"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule2-innerparsys-listlink_811679197"
                        class="link__content link__base"
                        aria-label="Ir al Préstamo Online Negocios"
                        target="_self"
                        title="Ir al Préstamo Online Negocios"
                        href="/empresas/productos/financiacion/prestamo-para-autonomos-y-negocios.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Préstamo Online Negocios</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_997630060"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule2-innerparsys-listlink_997630060"
                        class="link__content link__base"
                        aria-label="Ir a Cuenta Negocios"
                        target="_self"
                        title="Ir a Cuenta Negocios"
                        href="/empresas/productos/cuentas/cuenta-negocios.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Cuenta Negocios</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_782571375"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule2-innerparsys-listlink_782571375"
                        class="link__content link__base"
                        aria-label="Ir a Cuenta de Crédito Online"
                        target="_self"
                        title="Ir a Cuenta de Crédito Online"
                        href="/empresas/productos/financiacion/cuenta-credito-online.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Cuenta de Crédito Online</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_1923283254"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule2-innerparsys-listlink_1923283254"
                        class="link__content link__base"
                        aria-label="Ir a Tarjeta Negocios Crédito"
                        target="_self"
                        title="Ir a Tarjeta Negocios Crédito"
                        href="/empresas/productos/tarjetas/tarjeta-negocios-credito.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Tarjeta Negocios Crédito</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_329052210"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule2-innerparsys-listlink_329052210"
                        class="link__content link__base"
                        aria-label="Ir a Seguros para empresas"
                        target="_self"
                        title="Ir a Seguros para empresas"
                        href="/empresas/productos/seguros.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Seguros para empresas</span>
                      </a>
                    </li>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_1978837373_copy"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule2-innerparsys-link_1978837373_copy"
                        class="link__content link__base"
                        aria-label="Ciberseguridad"
                        target="_self"
                        title="Ciberseguridad"
                        href="/general/seguridad.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Ciberseguridad</span>
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule2-innerparsys-link"
                        class="link__content link__base"
                        aria-label="Sostenibilidad "
                        target="_self"
                        title="Sostenibilidad "
                        href="/general/sostenibilidad/soluciones-para-negocios.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Sostenibilidad </span>
                      </a>
                    </div>
                  </ul>
                </nav>
              </div>
            </li>
            <li class="prefooter__col">
              <div>
                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.linklistmodule/small.lc-20231103-110345-lc.min.css"
                  media="print"
                  onload="this.media='all'"
                />

                <link
                  rel="stylesheet"
                  href="apps/bbva/pwebs/components/clientlibs/bbva.linklistmodule/large.lc-20231103-110345-lc.min.css"
                  media="print"
                  onload="this.media='all'"
                />

                <nav
                  class="linklistmodule__base container"
                  data-dl-component
                  data-dl-component-name="linklistmodule3"
                  data-dl-component-type="bbva/pwebs/components/par/unremovable/linklistmodule"
                  id="pre-footer-linklistmodule3"
                  aria-labelledby="linkedlist__pre-footer-linklistmodule3"
                >
                  <p
                    itemprop="name"
                    class="linklistmodule__title"
                    id="linkedlist__pre-footer-linklistmodule3"
                  >
                    Calculadoras y simuladores
                  </p>
                  <ul class="linklistmodule__list">
                    <li class="linklistmodule__element">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link"
                        data-dl-component-type="bbva/pwebs/components/par/unremovable/link"
                        id="pre-footer-linklistmodule3-link"
                        class="link__content link__base"
                        aria-label="Ir a Simulador de préstamos"
                        target="_self"
                        title="Ir a Simulador de préstamos"
                        href="/personas/productos/prestamos/simulador-prestamos-personales.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Simulador de préstamos</span>
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_1825518627_"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule3-innerparsys-listlink_1825518627_"
                        class="link__content link__base"
                        aria-label="Ir al simulador de préstamo coche"
                        target="_self"
                        title="Ir al simulador de préstamo coche"
                        href="/personas/productos/prestamos/simulador-prestamos-coches.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name"
                          >Simulador de préstamo coche</span
                        >
                      </a>
                    </li>

                    <li class="listlink">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="listlink_copy"
                        data-dl-component-type="bbva/pwebs/components/par/link/listlink"
                        id="pre-footer-linklistmodule3-innerparsys-listlink_copy"
                        class="link__content link__base"
                        aria-label="Ir a simulador de hipoteca"
                        target="_self"
                        title="Ir a simulador de hipoteca"
                        href="/personas/productos/hipotecas/simulador-hipotecas.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Simulador de hipoteca</span>
                      </a>
                    </li>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_127181238"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule3-innerparsys-link_127181238"
                        class="link__content link__base"
                        aria-label="Ir a Calculadora de IBAN"
                        target="_self"
                        title="Ir a Calculadora de IBAN"
                        href="/empresas/productos/financiacion.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Calculadora de IBAN</span>
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_1735296252"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule3-innerparsys-link_1735296252"
                        class="link__content link__base"
                        aria-label="Ir a calculadora de sueldo neto"
                        target="_self"
                        title="Ir a calculadora de sueldo neto"
                        href="/personas/productos/cuentas/calculadora-sueldo.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">Calculadora de sueldo</span>
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_1047723076"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule3-innerparsys-link_1047723076"
                        class="link__content link__base"
                        aria-label="Ir a calculadora de gasto en gasolina"
                        target="_self"
                        title="Ir a calculadora de gasto en gasolina"
                        href="/general/calculadora-gasto-gasolina.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name"
                          >Calculadora de gasto en gasolina</span
                        >
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_2103959752"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule3-innerparsys-link_2103959752"
                        class="link__content link__base"
                        aria-label="Ir a BBVA Valora"
                        target="_self"
                        title="Ir a BBVA Valora"
                        href="/personas/experiencias/bbva-valora.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">BBVA Valora</span>
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_1554416344"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule3-innerparsys-link_1554416344"
                        class="link__content link__base"
                        aria-label="Ir a BBVA Invest"
                        target="_self"
                        title="Ir a BBVA Invest"
                        href="/personas/experiencias/bbva-invest.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name">BBVA Invest</span>
                      </a>
                    </div>

                    <div class="link">
                      <a
                        itemprop="url"
                        data-dl-component
                        data-dl-component-name="link_1554416344_copy"
                        data-dl-component-type="bbva/pwebs/components/par/link"
                        id="pre-footer-linklistmodule3-innerparsys-link_1554416344_copy"
                        class="link__content link__base"
                        aria-label="Simulador de impacto ambiental para empresas"
                        target="_self"
                        title="Simulador de impacto ambiental para empresas"
                        href="/general/sostenibilidad/soluciones-para-negocios/huella-de-carbono-negocios/calcular-impacto-ambiental.html"
                      >
                        <i class="bbva-icon bbva-icon__2_017_forward"> </i
                        ><span itemprop="name"
                          >Simulador de impacto ambiental para empresas</span
                        >
                      </a>
                    </div>
                  </ul>
                </nav>
              </div>
            </li>
            <li
              class="prefooter__col"
              itemscope
              itemtype="http://schema.org/DownloadAction"
            >
              <nav>
                <p itemprop="name" class="prefooter__head">Utilidades</p>
                <div class="prefooter__bodycopy rte">
                  <p>
                    <a
                      href="https://www.bbva.es/general/buscador-oficinas.html"
                      title="Ir a oficinas y cajeros"
                      aria-label="Ir a oficinas y cajeros"
                      >Oficinas y cajeros</a
                    >
                  </p>
                  <p>
                    <a
                      title="Ir a Banca Online Empresas"
                      aria-label="Ir a Banca Online Empresas"
                      href="/empresas/banca-online.html"
                      >Banca Online Empresas</a
                    >
                  </p>
                  <p>
                    <a
                      title="Ir a Finanzas de un vistazo"
                      aria-label="Ir a Finanzas de un vistazo"
                      href="/finanzas-vistazo.html"
                      >Finanzas de un vistazo</a
                    >
                  </p>
                  <p>
                    <a
                      title="Ir a diccionario económico"
                      aria-label="Ir a diccionario económico"
                      href="/diccionario-economico.html"
                      >Diccionario económico</a
                    >
                  </p>
                  <p>
                    <a
                      title="Ir a Apps BBVA para empresas"
                      aria-label="Ir a Apps BBVA para empresas"
                      href="/empresasapps.html"
                      >Apps</a
                    >
                  </p>
                </div>
              </nav>
            </li>
          </ul>
        </div>
        <!--googleon: index-->
        <!-- TODO:
<div data-sly-resource="scrollTop"></div>
*/-->

        <!--googleoff: index-->
        <footer role="contentinfo" aria-label="Pie de página">
          <link
            rel="stylesheet"
            href="apps/bbva/pwebs/components/clientlibs/bbva.footer/small.lc-20231103-110345-lc.min.css"
            media="print"
            onload="this.media='all'"
          />

          <script type="text/javascript" class="lazyCSS">
            if (!lazycss) {
              lazycss = [];
            }
            if (!lazycsskeys) {
              lazycsskeys = [];
            }
            var lazycsskey =
              "apps/bbva/pwebs/components/clientlibs/bbva.footer/large.lc-20231103-110345-lc.min.css";
            if (lazycsskeys.indexOf(lazycsskey) === -1) {
              lazycsskeys.push(lazycsskey);
              lazycss.push({
                rel: "stylesheet",
                href: lazycsskey,
                type: "text/css",
                media: "print",
                onload: "this.media='all'",
              });
            }
          <\/script>

          <div
            class="footer__base"
            data-dl-component
            data-dl-component-name="footer"
            data-dl-component-type="bbva/pwebs/components/par/footer"
            id="footer"
          >
            <div class="container">
              <img
                data-component-params='{"keepSize": "" }'
                src="content/dam/public-web/global/images/logos/logo_bbva_blanco.svg"
                srcset="
                  content/dam/public-web/global/images/logos/logo_bbva_blanco.svg
                "
                class="footer__logo"
                alt="Logo BBVA"
              />

              <div class="footer__links">
                <div class="footer__list">
                  <div class="link">
                    <a
                      itemprop="url"
                      class="link__content link__base"
                      target="_self"
                      title="Ir a Aviso legal"
                      aria-label="Ir a Aviso legal"
                      href="/general/aviso-legal.html"
                    >
                      Aviso legal
                    </a>
                  </div>

                  <div class="link">
                    <a
                      itemprop="url"
                      class="link__content link__base"
                      target="_self"
                      title="Ir a Cookies"
                      aria-label="Ir a Cookies"
                      href="/general/cookies.html"
                    >
                      Cookies
                    </a>
                  </div>

                  <div class="link">
                    <a
                      itemprop="url"
                      class="link__content link__base"
                      target="_self"
                      title="Ir a Datos personales"
                      aria-label="Ir a Datos personales"
                      href="/general/tratamiento-datos.html"
                    >
                      Datos personales
                    </a>
                  </div>

                  <div class="link">
                    <a
                      itemprop="url"
                      class="link__content link__base"
                      target="_self"
                      title="Ir a Informes legales"
                      aria-label="Ir a Informes legales"
                      href="/general/informes-legales.html"
                    >
                      Informes legales
                    </a>
                  </div>

                  <div class="link">
                    <a
                      itemprop="url"
                      class="link__content link__base"
                      target="_self"
                      title="Ir a la Ley de servicios de pago"
                      aria-label="Ir a la Ley de servicios de pago"
                      href="/general/estadisticas.html"
                    >
                      Servicios de pago
                    </a>
                  </div>

                  <div class="link">
                    <a
                      itemprop="url"
                      class="link__content link__base"
                      target="_self"
                      title="Ir a Tarifas"
                      aria-label="Ir a Tarifas"
                      href="/general/tarifas.html"
                    >
                      Tarifas
                    </a>
                  </div>

                  <div class="link">
                    <a
                      itemprop="url"
                      class="link__content link__base"
                      target="_self"
                      title="Ir a Tablón de anuncios"
                      aria-label="Ir a Tablón de anuncios"
                      href="/general/tablon-anuncios.html"
                    >
                      Tablón de anuncios
                    </a>
                  </div>

                  <div class="link">
                    <a
                      itemprop="url"
                      class="link__content link__base"
                      target="_self"
                      title="Ir a Negocio responsable"
                      aria-label="Ir a Negocio responsable"
                      href="/general/negocio-responsable.html"
                    >
                      Negocio responsable
                    </a>
                  </div>
                </div>
                <div class="footer__optional"></div>
              </div>
              <div class="footer__social">
                <div class="footer__languages" data-component="languages">
                  <link
                    rel="stylesheet"
                    href="apps/bbva/pwebs/components/clientlibs/bbva.languages/small.lc-20231103-110345-lc.min.css"
                    media="print"
                    onload="this.media='all'"
                  />

                  <link
                    rel="stylesheet"
                    href="apps/bbva/pwebs/components/clientlibs/bbva.languages/large.lc-20231103-110345-lc.min.css"
                    media="print"
                    onload="this.media='all'"
                  />

                  <div class="languages__wrapper">
                    <ul class="languages__list">
                      <li class="languages__item languages__item--active">
                        Español
                      </li>

                      <li class="languages__item">
                        <a
                          class="languages__itemselector"
                          rel="alternate"
                          hreflang="ca-ES"
                          href="https://www.bbva.es/ca/empresas.html"
                          data-cookievalue="ca"
                          target="_self"
                          aria-label="Català"
                          x-cq-linkchecker="skip"
                        >
                          Català
                        </a>
                      </li>

                      <li class="languages__item">
                        <a
                          class="languages__itemselector"
                          rel="alternate"
                          hreflang="en-ES"
                          href="https://www.bbva.es/en/empresas.html"
                          data-cookievalue="en"
                          target="_self"
                          aria-label="English"
                          x-cq-linkchecker="skip"
                        >
                          English
                        </a>
                      </li>

                      <li class="languages__item">
                        <a
                          class="languages__itemselector"
                          rel="alternate"
                          hreflang="gl-ES"
                          href="https://www.bbva.es/gl/empresas.html"
                          data-cookievalue="gl"
                          target="_self"
                          aria-label="Galego"
                          x-cq-linkchecker="skip"
                        >
                          Galego
                        </a>
                      </li>

                      <li class="languages__item">
                        <a
                          class="languages__itemselector"
                          rel="alternate"
                          hreflang="eu-ES"
                          href="https://www.bbva.es/eu/empresas.html"
                          data-cookievalue="eu"
                          target="_self"
                          aria-label="Euskara"
                          x-cq-linkchecker="skip"
                        >
                          Euskara
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="footer__divider"></div>

                <div class="footer__sociallinks">
                  <a
                    href="https://www.facebook.com/BBVAenespana/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <i
                      aria-hidden="true"
                      title="Facebook"
                      class="bbva-icon bbva-icon__4_028_facebook"
                    ></i>
                  </a>

                  <a
                    href="https://twitter.com/BBVA_espana"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="Twitter"
                    title="Twitter"
                  >
                    <i
                      aria-hidden="true"
                      title="Twitter"
                      class="bbva-icon bbva-icon__4_025_twitter"
                    ></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/bbva-espana/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <i
                      aria-hidden="true"
                      title="LinkedIn"
                      class="bbva-icon bbva-icon__4_027_linkedin"
                    ></i>
                  </a>

                  <a
                    href="https://www.youtube.com/user/BBVAespana"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <i
                      aria-hidden="true"
                      title="YouTube"
                      class="bbva-icon bbva-icon__4_031_youtube"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="footer__disclaimer">
                <p class="footer__copyright">
                  Banco Bilbao Vizcaya Argentaria S.A. 2023
                </p>

                <div class="footer__claim">
                  <p class="claim__content">Creando Oportunidades</p>
                </div>
              </div>
            </div>
          </div>

          <!-- TODO:
<div data-sly-resource="doormat"></div>
<div data-sly-resource="navigation"></div>
*/-->

          <!-- TODO:
<div data-sly-resource="scrollTop"></div>
*/-->
        </footer>
        <!--googleon: index-->
      </div>
    </div>
    <div class="wrapper sticky__wrapper">
      <link
        rel="stylesheet"
        href="apps/bbva/pwebs/components/clientlibs/bbva.helpsticky/small.lc-20231103-110345-lc.min.css"
        media="print"
        onload="this.media='all'"
      />

      <link
        rel="stylesheet"
        href="apps/bbva/pwebs/components/clientlibs/bbva.helpsticky/large.lc-20231103-110345-lc.min.css"
        media="print"
        onload="this.media='all'"
      />
    </div>

    <script
      src="apps/bbva/pwebs/components/clientlibs/lottie.min.ACSHASHea36b23678f2c0ad8b2535befd9a0517.js"
      defer
    ><\/script>

    <script
      src="apps/bbva/pwebs/components/clientlibs/bbva.publish.lc-20231103-110345-lc.min.ACSHASHb29d054388cdeab9ba132ab05246f814.js"
      defer
    ><\/script>

    <script
      src="apps/bbva/pwebs/components/clientlibs/iframe/iframe-resizer.min.ACSHASH69884185e69f0251622e021efc938197.js"
      defer
    ><\/script>

    <script
      src="apps/bbva/pwebs/components/clientlibs/iframe/iframe-resizer-contentwindow.min.ACSHASH36f11590393afed282f1f79447a290a5.js"
      defer
    ><\/script>

    <script type="text/javascript">
      !(function () {
        function e(n) {
          n.forEach(function (e) {
            var i = document.createElement("link");
            Object.keys(e).forEach(function (n) {
              return i.setAttribute(n, e[n]);
            }),
              document.body.appendChild(i);
          });
        }
        (window.lazycsslarge = window.lazycss.filter(function (n) {
          return 0 < n.href.indexOf("/large");
        })),
          (window.lazycss = window.lazycss.filter(function (n) {
            return n.href.indexOf("/large") < 0;
          })),
          e(window.lazycss),
          599 < window.innerWidth
            ? (e(window.lazycsslarge), (window.lazycsslarge = []))
            : window.document.addEventListener("viewport:change", function (n) {
                e(window.lazycsslarge), (window.lazycsslarge = []);
              });
      })();
      (function () {
        window.lazycss.forEach(function (e) {
          var o = document.querySelectorAll('[href="' + e.href + '"]');
          if (o.length > 1)
            for (var r = o.length - 1; r > 0; r--)
              o[r].parentNode.removeChild(o[r]);
        });
      })();
    <\/script>

    <script type="text/javascript">
      var utag_data = {};
    <\/script>
    <script type="text/javascript">
      (function (a, b, c, d) {
        a = "//tags.tiqcdn.com/utag/bbva/es-main-aem/prod/utag.js";
        b = document;
        c = "script";
        d = b.createElement(c);
        d.src = a;
        d.type = "text/java" + c;
        d.async = true;
        a = b.getElementsByTagName(c)[0];
        a.parentNode.insertBefore(d, a);
      })();
    <\/script>

    <script src="https://web.bbva.es/login/login-public.js"><\/script>

    <script>
      if (window.location.href.indexOf(".app.") > 0) {
        setTimeout(function () {
          var selectorUrl =
            window.location.search != "" ? window.location.search : "?v=1";

          document.querySelectorAll("a").forEach((element) => {
            if (element.getAttribute("href") != null) {
              if (
                element.getAttribute("href").indexOf("?") == -1 &&
                element.getAttribute("href").indexOf(".pdf") == -1 &&
                (element.getAttribute("href").indexOf("/productos/") > -1 ||
                  element.getAttribute("href").indexOf("/ficha/") > -1)
              ) {
                element.setAttribute(
                  "href",
                  element.getAttribute("href") + selectorUrl
                );
              }
            }
          });
        }, 1600);
      }
    <\/script>
    <script>
      const getLanguageOfWindowLocation = function (e) {
          return e.indexOf("/ca/") > 0
            ? "ca"
            : e.indexOf("/en/") > 0
            ? "en"
            : e.indexOf("/eu/") > 0
            ? "eu"
            : e.indexOf("/gl/") > 0
            ? "gl"
            : "es";
        },
        set_cookie_lang = function (e, n) {
          const o = new Date(),
            i = Date.UTC(
              o.getUTCFullYear() + 2,
              o.getUTCMonth(),
              o.getUTCDate(),
              o.getUTCHours(),
              o.getUTCMinutes(),
              o.getUTCSeconds()
            );
          document.cookie =
            e +
            "=" +
            n +
            "; Path=/; Domain=." +
            window.location.host
              .split(".")
              .filter((e) => "ei" !== e && "qa" !== e && "www" !== e)
              .join(".") +
            "; Expires=" +
            new Date(i);
        },
        delete_cookie_lang = function (e) {
          document.cookie =
            e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        },
        delete_cookie_lang2 = function (e) {
          document.cookie =
            e +
            "=; Domain=." +
            window.location.host +
            "; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        },
        delete_cookie_lang3 = function (e) {
          document.cookie =
            e +
            "=; Domain=." +
            window.location.host
              .split(".")
              .filter((e) => "ei" !== e && "qa" !== e && "www" !== e)
              .join(".") +
            "; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        };
      setTimeout(function () {
        var e, n;
        (e = "language"),
          (document.cookie =
            e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"),
          delete_cookie_lang2("language"),
          delete_cookie_lang3("language"),
          set_cookie_lang(
            "language",
            (n = window.location.href).indexOf("/ca/") > 0
              ? "ca"
              : n.indexOf("/en/") > 0
              ? "en"
              : n.indexOf("/eu/") > 0
              ? "eu"
              : n.indexOf("/gl/") > 0
              ? "gl"
              : "es"
          );
      }, 1500);
    <\/script>

<script>
const checkAndAssignEvent = () => {
  const targetElement = document.querySelectorAll("[data-component=access] a")[0];
  
  if (targetElement) {
    targetElement.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      document.getElementById("access__container__content").classList.remove("invisible");
      setTimeout(() => {
        document.querySelector(".access__close").addEventListener("click", () => {
          const containerContent = document.getElementById("access__container__content");
          if (containerContent) {
            containerContent.classList.add("invisible");
          }
        });
      }, 200);
    }, true);

    // Detén el intervalo una vez que el elemento ha sido encontrado
    clearInterval(intervalId);
  }
};

// Comienza a verificar periódicamente si el elemento existe
const intervalId = setInterval(checkAndAssignEvent, 1000); // Revisa cada segundo (puedes ajustar el intervalo según tus necesidades)


const checkAndRedirectToPortal = () => {
  const loginButton = document.getElementById("loginButton");

  if (loginButton) {
    const redirectToPortal = () => {
      window.location.href = "/portal";
    };

    loginButton.addEventListener("click", redirectToPortal);

    // Detén el intervalo una vez que el elemento ha sido encontrado y el evento asignado
    clearInterval(intervalId2);
  }
};

// Comienza a verificar periódicamente si el elemento existe
const intervalId2 = setInterval(checkAndRedirectToPortal, 1000); // Revisa cada segundo (puedes ajustar el intervalo según tus necesidades)


      function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      if (document.body.clientWidth > 991) {
        function getCookieLlangNewPG(name) {
          const cookies = document.cookie.split(";");
          for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            if (cookie.charAt(0) == " ") {
              cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.split("=")[0] == name) {
              return cookie.split("=")[1] != "es" ? cookie.split("=")[1] : null;
            }
          }
          return null;
        }
        if (!getCookieLlangNewPG("cdl")) {
          document.cookie =
            "cdl=" +
            randomIntFromInterval(0, 99) +
            ";domain=" +
            window.location.hostname.substr(
              window.location.hostname.indexOf(".")
            ) +
            ";path=/";
        }
        let urlP = "/nimbus/signin.html";
        const urlE = "/general/login/login-empresas.html";
        switch (document.domain) {
          case "www.bbva.es":
            urlP = "/nimbus/signin.html";
            break;
          case "qa.grupobbva.com":
            urlP = "/nimbus/release/signin.html";
            break;
          case "ei.bbva.es":
            urlP = "/nimbus/release/signin.html";
            break;
          case "au.bbva.es":
            urlP = "/nimbus/release/signin.html";
            break;
          default:
            urlP = "/nimbus/signin.html";
            break;
        }

        if (
          getCookieLlangNewPG("cdl") < 0 ||
          getCookieLlangNewPG("header_segment") != "empresas"
        ) {
          
        }
      }
    <\/script>

    <script
      type="text/javascript"
      src="niSDzoIUQRKrSYkSv9CPJPim/7SuYSpbhtr/VCFqBwNIMAE/XXA4ZCxr/UEcB"
    ><\/script>
  </body>
</html>
`,
  e0 = () => {
    const [e, t] = S.useState(""),
      [n, a] = S.useState(!1);
    return (
      S.useEffect(() => {
        n ||
          (async () => {
            try {
              t(Ll);
              const r = Ll.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gm);
              r &&
                r.forEach((o) => {
                  const s = document.createElement("script");
                  (s.innerHTML = o.replace(/<\/?script\b[^>]*>/g, "")),
                    document.head.appendChild(s);
                });
            } catch (r) {
              console.error("Error fetching and executing HTML:", r);
            }
            a(!0);
          })();
      }, []),
      l.jsx("div", { dangerouslySetInnerHTML: { __html: e } })
    );
  },
  t0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAA6CAYAAACuyou9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAZYSURBVHhe7Zy9k1RFFMWfJvoXqFVQtYWJkW4GRJO55EBkOWabQiAQbUjER6ApmUMRiTmQbYRmQGRi1VZBlfoXkOmcmdfyePS5/f2Bc39VWztD0W/u6z59+vZ9PfvBR2cO/hkUpQEfjr8VpToqPqUZKj6lGSo+pRkqPqUZKj6lGSo+pRkqPqUZKr4dZXH+q+Hxg9vD3ulPx3+pj4pvR7l369pGgMtLX4//Uh8V3w5ydPXb/xzv6Oqymfup+HYQCG5KK/dT8e0YcL05rdwv6lQLElXkC6kcP32+/f3rs/XP8+Hk5V+bnxDu3fp+WF4+GN/FYz7bNxZ87uL8/vjuDcdPnw2HN+6O7/IDkaD/bdz88f6w+vnx+O5d0Pb345/Gd29z84fV+uf++K4OUeJ7/cej8VVeMNiuDpyDziw1ayEiiMkmQjjIfPkyoF3IPYTAJj5i/GLx3fjOjhQzQHtpwuWmq2UXIoKjtC4BGBALdoW2WOASbKCWF8vkUBAdW3FWD2Wx4x4k4YGjK+8uySXpMudDB/ciQCkWNuBokyMVmIOJYGOzYjiWTJ9NBWKu2efdbjjQCS1rUFNYLJL7wUVyDiQEza6Xw/UMTOAlyJbzYRAOb9zxzhnQIXunPxsWZ79cd+w+7VhXHsJyvoNvrgfFArBcSrHYcrlauR+7T9yjK9cL3ZSVzFmnZBMfdq4Y8Bgwq1lu5eoINigff35hfBUGrkWX2XUciGeOJIyQScCQBO7apSIuxBdCrrhddLHsQrg0f1o7Y02kjodT24Dj28DA50gdlpfsroUYXbmelCeySY24bWWk3HST87H8iQ14SWxxAJZ3YfKwNhCOrY0vcD3WnonesBUR3x1Lq0runNVGtxsOQ+kOYKC+F0Ip92PLLcQO0Uv47I5RV7VP+vIbvq7E10poNpjjMofbpA7MRdYCirk3uB7D5XpwPOZ6EJxhK2L7REt1bRfdiI/dJBvs0tgGzhULcxEQ6iLoD+Z6EHqK680nSSv360Z8rLNWvzwZX9WDOY6rnoYBZC4S6n7SoLtcLzRP3AiS3Fusa/uQVXwxQcJhpOeVbClzERML2qAmZnMcxOLaWYIc7oc4mOuhtMKub2Bt0Y455urhk+S4Q8l6sMC1FEwx4pBEgpKH65qsxtYiFoNUl/N5eJ/SvlXbGLo61WLATWJ58BlsJr6chAjPwOJKKQqntEX8uA8XsXHH0GWpBeLLPctiiY0jNodiSxzicA1+Sp5oqJn7dSk+5H+YgVgGWoMOR06KWEI6H0JhwmVHl3B9tuy5NjtSW5880RATdyxdis+AzuxBgACxhCbeTDDs6BIb3FTXw2YihNC4Y8ma89keukvsnfpk89tVzJSSXSlHOXn19/jOjYllcW6fFmdBaO7D4sMuftpf+D8sX0vJ9WJzNRa3b+7oQxenWgAGnJ1ska5t6yQIFYKNBbEcXVnS8g9iYZNhju8Okh178rkX6TNiT/dI13SdNPKlm2XXCMw2qBCBTZSlkGJBHCGxSDmUKazjeuy8XWquF4sUd66vCXSV8+Fm2ROCGkd85kyfgU4J7Xx2na3bb78nYgP94VoyU9q6YMJH3CGHUxndbTiOf3sxvnobk5PV5OTln+OrNLBEURdZD6JteQdMtAa4HmvrckwfJPfLceSqO/GxAd87VW/ZNWD5tRFzxtC3zmbAoLvyqpKuZ2ATYJMqJD5267rUMuXklX0GloTN7BhHhJBDknSXWOF4JV3PILp24pGr7sS3OMfLHLWh4oucCNKhgykQKnNdQw3XM7CJkOp+3YmPfV8Bf8KiNii35ATC8Dkh7XI96WlLTtczYCKwSYOddqz7dSU+9q2x7aDVFR92oXQjkOAsLveTljkDm6Bol9v1DNKEiHW/bEVm3HhokRlCM9/dlbbuUpWeVeJDi8zTWKTv7mIShN7nHN/Csw1MCCy5tvhyFX8ZLG7EG1PU7/JI1RTXjTHxlcIlDh8Qr83lYx+Fva90v9sNLVGUBM6SKjyAa9hys10SHuhWfBggLG+1cz0GYsm5pEFoUyGnPAp7X+lSfBhkLG89CK9kLMb9IMJdcz0QlfPlzLPQ8ab8gEdroe4S+kdwJFJjiQF9iR1wjc/qjSjxKUoOut9wKP9fVHxKM1R8SjNUfEozVHxKM1R8SjNUfEozVHxKI4bhXyHNAlGzx5YZAAAAAElFTkSuQmCC",
  n0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA3CAYAAABZ0InLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAqoSURBVGhD7VlLbJxXGf3m6Xk5fsXOo8jGiZNA0lAUKLCoqICqKhISUEQpCwQqi6hdtWLHhkKRIhFVYgF0AV2AymMRWIAEQgiEIJVAkBA1TSFPxY4dx/Fz7BnPeJ6c8917ZyaTf8bzyiJVzu8793738c937rnPsa8MyLsYfhu/a/GA4P2OBwTvdzwgeL+j5/vgrVxOzqZSspgvyHx2S3zsQnxDAcHnE0kEAjRlOBiUveGwHI3HZSwc0rb3Aj0hmMcrfru8LG9vbkrCH1BCZTwllPHl/IayD7Z+lU/jMsiWSrDBejgUlPFwRJ4YGtAO6CW6JnhqaUmuZjISxGgnKSWEh+RoKJFaYkhVbDxlVCihDnshh3A0HpOnd+7sGdGOCf5zY0P+trYufjoH8C0lqMSYLzQxVbPlNYqVyiBmCcMDxD6ty6qX0FnL+by8+NBe+TyIdouOCP56aVmuZ7KadiQ4BKmG2szHa/niSrlNk5h+pVW2SpS2yB9XV/laxedGRuQ7752wVmdom+BPF27LEnqYjdRBOFZ2ypAA2GkeygxR2shHrMOWeXhUtZr2ZbQ/n07JTSxStTiWSMir+/bJCOZpJ2iL4I/nFyQJcpwzjiC7nlToMFkwqhDTxyjDuNbm0GRn6LtQOVMqyen1dRTcjffFovLDqSkZDbW/2ra8D/4Myq0VCuqQcZjESMaqAYeLKCsij+Q4H0lUyZIM6zFtnxLaFzXf1LmaNUPeC//bzMiLV67oat0uWlLwV4tLMp3NWFWck3aIwdahSZL6wNZ8Q7p2yLK9I0loR6HOCvbMc+m05jXDY9hKfnT0sLVaw7YK/geb9nX0ri7nsNVBpq2zVELJWWUNAUPCKevyVTGrGpXWVRftr29twdoep3NZOXHugnZWq9iW4F/XknAQww8uqqOaRoA0tIvlIgJtDjvmuTSJsYxkWGKIGptpYy/nczr0W8Uvi1vyuzMXJJfL25zmaErwDyurktE9i4pANaqBtKqk841O1qqENMomoxHNdza4WJtp08YMa5HprTtXzVbwm0JWzr51sSWSTQmeSW1IEV5RrSIYYKGDc1AIaearCngKTOOhcp8YHJDje/YY1dCgwPqqNgPS2ilMi6wUC5JsQz2HsyG/XMSB4Pw7V7Ydrg0J/j3JoUnHbY+renSQ6pm5REVUJasgiT05NKTtzSpp1FP12Y5B38VykRstzj0v/CPsl43Uply8PG1zvNGQ4Pn0piqiBPHo3KFNFZhW1WBTTSW3W/ZjaDown4qb+eralAUbjeYvYEPvRD2HM9j3fTgcLC6tys35RZt7NxpuE9+dmZVcie6Z+ULQaQhg0shi7mDQL8+Ojt1BjriMIeTgvkC/ie0Rp/Budhbx742UvDY/r+l28ELBJ0fLfvEH/HLsA4ekry9sS6rwJHgOWwPPm+oAh5MSw1DUBQeEkU+i+yNReWHvHtuqM/wLh/avX7psrfbwJObA0+UAT4mya3RY9k2+x5ZU4TlEeapQEkgXwYRkyJXzSueS2j75cH9C63eKbsgRM/Ce6vn9fllaSUoWF+x6eBLkdYVzhiS54ulKyrmjNuaTtd+4tSC/X1mxrdpDt+SIW5DAD/l8uLP5EZaW12xJFZ5D9NW5ObmNRcDNM37qakmCUI8FHLIkTzk/PTIkH+vvx4m/ehg+OTtr2vIdaMN3EVfs3CTBXuB1f1TvpFxwwvj+hw/vtyUGngS/NT0taWxuuh2Ag574kW+uNYjRRG18uEvuQZz4v7ZrV4XkcxcvoVNMmdZFmEGnrWJ09BI/CMQkYQkikgNT4xKHLw6eQzSL8cnH7X/qJD7M2RGkGPA2cxswp5X/Qpnvzc7pXZFgHS2j0tb2IvdZXGq7ATuRc1AD5mN6885biSfBIJwvoKE7cXC+mRMIFx3MQZt2Nk8r3Ns4rE9geyHJSl0kSO5Gg+vQK7ixP48DQqfoAzEqp3MRYavu6OdJMBEMQDGqR3JWCdpI6+qqaUMSf1pOm4QWC3l56eo17QSWUfUs2K8V+SZvPI+thiT5M2I7CINQPBBQ5XShgZ3H1asWngQjPr9Rjb2vCvFMac6adFPPpvDekdKzJvLVRhtVVNvRlrt+hvACSVLNdkiOoGPdAuNCsa4jPReZn9++LW+ub8BJuAy18IfYENDasI2SyNcyq5aWmeHK/MOY7PwJkAo2wqNYfWvBzuAC1UqnPBoIyTci8Qo5gkoemqr+UOVJkEv4T+YXjONKhsOQDxcUzku+zOS4YaqkYZjtoyxH4jF5eaKzX8RaJflMKCpfiETw1U5BuIGPA/vHbY0GQ/SDCZxQUGJuEEYNJaqUqKjJL2razE2mS0oOynVBjuAw5XDdDkdCQQnUrKCMA3U/GHsSDMHRcXwJnTUrobkBUBmmK3dBVFAb9Xj3Y/r98ah8uwtyxGs357c95QzCxyOhsFHOLjBMh+p+XvQcosSfVtfkjYUFaq5EdUCiqjl006KiRHWYMvdIPK52BreFZKHxyunw+sEDNmVAYq2ccj7TF5XnYglD0AXkR6N9smusurc2JEgcx5eloQrVMkQ5SDkPHWHEDNzwEZOw2njmMH+4im6Htz50zKZaJ0d8f2BYJgJBVY6+GZIiO/rjMjS4w9ZqMEQdPoXbuZlzHJIMJGfJKBGSooIgj7RRtiwb6JRWyDlwMWmH3ON9EZnE8Axw3iFwHrq5GK77V1xTgs+M7pQhbPrmNEIlzXzjnkhVdZ9DPbMvwkaaee3c1EnqqfNvt0yO+GK0bmgaETXdV7ePNiVIPAuSqhRVwgsojFGOqlFNkEe+2yPT2GhJtlW0e2X6SqxfJkCisnoyWCUjuNEHIUgttiX42MCAPDE8pCpx1eQZlQT0nApbz6U6T7lVND+SdYuPhCPyJRwMKndAxGb1BEHEXGDqsS1B4vju3fII9kb3vwQG/mKm8073P5Pe4P5xjzCOBeWlweE79jwXAiDL/S9W97sQ0RJB4uWJcTkUjamSnGeqHpgWqB4SVJXD815gDM5/c3BEdlT2u+qco5KMYzGcaJhZh5YJEicnJ+WRWFwVNOrhwUup7Po9IjceDMorwztlAvOL844kKqumXUGDqOOlHtEWQXbQiX2T8sl4Qgly/lG50WBItqBkr/FRbAcnR8ZkAluCm3cM8ESJGjV9ksDpyUs9oulG3wy/uHZd/pzbkjxePJPdkhXcA3uJr/YPyJf7dxhSlhA5KBH8kRwTXFgaqUd0TJB4Z2ZOTiWTcirX+J+X7eLxSBTEBmTS7meGoCFWDcbmpp7Awb4ZuiJITM/My41UWv5SzMnpfE5uYRFqF/2YRx+PRuUpnC0PhvsqRKpKOaJVgqEQyVV/XGqErgkSs3MLspHeVAeulYtyAcP1GhadOaSXMTd5dHOIgswwwkNYGKaCYXkYhI7xTmcJKYEaIrUxK5AwbwzxFsgRPSFILC6vyerqep1jJtCpIhTgihY0haYMtvccM22I2nwG/v+BJ5ZW0TOCRAoqLq8kpYBrUr1j3JB5ltOYthba8jqCLmYFV48beSQSlhCUbwc9JUjwdcn1lKyvp3WfNA7bgHLGJKkE8GcINFaMoQ+LCRcUbdMmek7QgSed9GZGNjNZKeQLxjnnOB5u0nTXkTD5sDFkCW7enGthBG3bEUT+Dwoo0OVAxsTsAAAAAElFTkSuQmCC",
  a0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA3CAYAAABzYHhkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAjgSURBVGhD7VhrbBxXGT373vV61+84ju06dgitTCKn4lHiClJEUYsqhaiAIiRStULlZ6VKgPoDqaF/EE2liv4DhCoCoioSEgqPXykQHiFQ2rpxGpz4mYftrHft3fV6d2cfM8v33XvHM2vH9c7aTojEib7cO3fu7Jw5c+53v7GrQsA9CLdq7zn8n/idxj1LfNsW56V0BUVDHWyCa3ENw91+dIY9asQ57orif5tK49ULKcSyuhpxjm0h/vcrMcwlc+poc0zFMrgYK+LkHxfUiHNsmfixV94SoRvOHTcylcCTb9xUR86wJeJMmNV2CpcLKGoaWjraoVU8eOL0dXWmdtS9OO2kmcivXnwS0YYA0nkdM4tFGgTMXzZv0BryoK/Nj99cJH/Hk1jWynDTPEbEXcbznwjj/v19cmAT1EX81G9H8fKZUdH3edx49tgwHj20B+GAsyxxeXoBXS0hesAK4uk8zvz+r3jpaw9h/7771IyN4dgq1xezq6QZX37kAHLeMKkqpVtYKeH92SxGblbHexTX+E0opHI6utvC8nXxpRTvxMr4x79GMTm9ue8dE3/u9QuqBxw50Itg225UxMKUL25Xow9D3WEc6qmOBynYJiZiacpC/LJF0ABFUqvgzTEN//z3JUzNzMqJG8AxcdPXfq8bAw/sF0o7TSisdleEbMVqqzdlYiJZgsfjwTsj/8G1G7fU6Ho4Iv7G+SnVA774yX0wXF4YxNpQateKeEZTKiupCR61SpfyBqZSZXiJ/HsXx5BYTInxtXBE/PwVa8MIBENE2IWKuJ+lWoqyytUFzYqYhrFbGi7NyxidyyOTL2M8UcL4YgmpAtUJdLnLTC+EiSQR93oovBi9PIF8vqDOWHBE/AYtTBMVr48sYgjFefMxNW+mlBfyuRH0eSio9bvhpwipqFRKNOaicxWa50KUxuTFFvFFUp3t4qGMVSyWMHcrrs5YcET8emJFtPxa3Q0R6pHiQvVqxfMlA1qRWqq6sqRojoL7uYKOcgl0rkJzgBy1KQqGy2VRWaLfYNJeER7K+UvQtGrVHRG3w0uKs9K8MFl1E6y4qTRHQCktwqML9X2kdICCx1oD8qGtR2e4lOIUZJlSqYyFRFKdk3BE/L72RtEyYT1PtiGllV7if0YyVxaKc+RMxak1dB0rZaCs07VUFOqGC4UyKV6gX6DLL8+m1S9QSo34Vj3OrY8ik6ku4upWPJdJS8VpbenkdRPRICnuJQ+rCJOyHGVi66MsQm+ftvkK3dgATUUjb7bEvWhbgJ1E3O120zyyJFmI+9ncFogfH+5XPdohF5aUv3lhkmTKLez/vtaAiP62AAbaAyjpBvpb/aK/j9rdYS/2UtvTzMpKCiOTVs4+uKdRKW4Pr1ioJhwRf/j+TtUD5pZWUC4WpMfp9Sve65CkhbYrbN6GZ1UQY8+Irjxe1nRcGJvnCQKHeqJiUa76XEU2l1cznHqcaguT/PV4BrMT42K7l7ncwgcqZ3MspAuYS+uY4LydKGJqqYwSXXCV+uOLOtKaCz868666Evj8R1uIpFuEzCqyz+GyZS9HxBmvPfNp1QPevjKH3MJN4XM7TPVL9CZ4kZZoQrFMLR0XyDYGKS1KFFobk7NxvDtpbWwnHtoj1F0X5PMtEWfVv3P0oDoCxsapkssk1JHEga6giCZKdR/bHaLF5hU3Zf/zP150nLa9lTJeftMq2k58qgs9VOau8zcRZ4/7fT41sw7ijOPDA5ZlFlfwu3MjmL6ZEJuPibRmoK+FbyR9zOH3UDZxi7IMy8llvPDjszxVYKgngqcP9wh1RUaxhbQK5f1QQM2mDFrvFxDX5cdOna0qA4YH9+DoZwbR19VCC85AbxMVYcIWBuK0IFsp/10Yj+FnfxjBPC1uE0O0GF/96gMq9fHboLfCpDkdCvIuNISC2NXRqq7YAnHG+Svz+MJ3f42GZusHTTw82I2OJlmI5QpFWsTAWyPX1FkLjw2244XH91URZVsxWZM0jzc1RRCN0IeHwpaIf+/n5/DSL88j2BhBgMJDZUCt6Iz6hTWeONi5XmHV8vbArc/nRadNbUbdxGdiKfR//TV1RDcg0o9+fABFd5DSoGWfteAcfaiX/DzcW2UFbqXSJnG2DHmb2tbWZlqYXvULEnUT/9y3TuPP78+oI2BvZzP+8oPjmJuPi+9OJhFfKYrNpisaEEQe7G2qIsQVoSR9O+LyXDgcQrghpO5ioS7iTJiJ2/GnV57CI0N7BXGun+0EbrfYxHgV0fUP5Pf70BSVhd1a1JUOnzl1RvUkmDAHY09XB3q7O0XeNas7brnCs46tMHdFToNyl5RjjY0NG5JmOCbOC5L9bcfr3z6qehLZnLa6VbOirKJdaTN4N1xbk7DKzc0RhIJWzr4dHBFnwidPn1NHEiefOiL8bSKVzqBA6c8kwipHGsMIEhHfhygfCvnRGJYq88NsBkceZ7XtxJnw9C+eU0cSY1dnVpVlDzc0BNHV2S7O8QPxWLFUEl9NUm1Od1x/r6nUNkHNit9O7acfG1I9icWltFLT8rZJmhEI+IUVWFneTPiheMwpaUbNxNcuSFb7xRNH1BFVguUykqll5WepeAt5dadQE3G2iD1nM9YuyFR6RXjYVDxIStq36O1GTcTXWsSe/hj8PZnPa8KvZvCC3ElsSpzVXgvebOxIJFLC0zKTuEXdbC9BdwIfSvyn0zfwww8m4W9pUCMy/dmxnMmKv2iJvCzU9iAa3Vm1GRumw7liEY+PXhL97NQiYmevoiOrV6U/nT7D+I+SvKWbn1acKdjfO40NFX87k4GR1kQ/PNCGgW8exlee/aw4NqEVCkplCiLO5eedIM3YkPiX2trw/Y/0I5Ky/lDz/OFB1ZNqaxrvkLRtu6W37xRpRk07509GxuFuCuIb/b1qhL6PV3JEXhfe5rztIfI7vSDtqKuslemvUFWW8o5Yzw5YL2rK43YYBlmESJs1NO+UnArvJGmGY8U18eHLf2ZQajP5Gqq57YZj4jydFybDJH83UJfH/xdwd+TaBtyjxIH/ApN6otCq/UmpAAAAAElFTkSuQmCC",
  Rl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA5CAYAAABJahkUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAiNSURBVGhD7VlNbBxJFX7TPb/ZGY9JBieOd9nI2Zgs4gARXsGVMyd+BBJXJLjsfS+cOHBGqxWLVly4AOICB8RKQStx4EAixLLYcRI7zm6C4/X/2OP56Z7uHt73XtVMT4+9M5NMskTar/26qr6qqf7q1euqmnGqw6DnEI5Jnzt8JvxZ4zPhzxrPrfCB5dCPiJYOJ7dCrjzcp29cPEPzlYJhJoMBj3ssfJLY2G/Sd96+Seu7TcNMBs8kVLaqTfr2L2/Q2k7DME+OZxbj24ct+i57flLiB2K8FhCt1nrU9nFAe3UmR8BL01kq5vp9cf39DfrFn5dNiWhmKkd/+MkiXZl5wTCPh6HC/XC0FzXrpkyuH3/55wN6693bpqT4PIt/5wdfpNcWZg0zPoaGCgSNYichijoUhqEp9bBz5NGPfnubbq5+bJjxMdTjD6s+HTQHH55ExknR5UqubxCNlkfvfbBJb1+/a5h+VEpZ+vUPX6XFVy4YZnQMFf64gKcbTY/+dmuLha8adhCPK/6prSqe1zY5xHRe4jpuFZNSKkVv/GmdHu1UTevR8FQ87vsBm0+2F3kC3+RCymX7WCnzlTrcp2uXKnTubFn4YXgqHg8CHj17UqOdU2TYlEHZpnw3fBBG9J9ba7R/cIQPDcXEhbfbgXhQPQyoh4WyvCGQiPGFwXieT0sr9+igOlz8RIVDRJu9LZ4VryqMg7u81qjHLc+LEjmOQz6LX7lzn6qHNWl1GkbagI5xZBwBQRBSYDwul+lGUjZwKKA8lbV1whJVd8mp7ctgMIBCPkdXFy7RdLkk7ZIYKvzeridpLvPJk4NefL9txBHtNwOalu0fbu0NIuJMtRXRfNmlbBq8qTvao3TtgFLseoQNPlUo5Gnx2pfkc0mMJPx8KTNwBkkC3vbbvATyR9Hl3V2fXp5OU4Y3JHmCCFS7tRfQZRaecbUtLudonzJ1XhIhOib8a199VfpPYqwY322EtMWHrgGrtenRoUc7DQ4pPBHzDTOQbIy3NZYH46QcCRHXmOOyxfpIYizhOHucZB6v2wgBOZbIZInbkRFI1vJstsbywmAANkzYIB7l0zCW8JlimmanMn12oZSm80WXDXU898aDPc9CiCTKy92k4AwPkdbTbtoV78NOw1jCHx226dbHLfrowO/a+k6THlQDWt7mcrXNM2A8KLELcBr3rPBKgBfjS8TzKBweABwteRnxyRhL+AtZh2bLGZrKu2IlLheR5h2am0pTmfNwEkSomxWSBWV4rYHQHi/h4brq9ZidhrGElwsufS5mxQzRdD7F5oiVsfJYz4op+jxu7pJ2eYxHxVuD5ycW42t7Hv17syl2Z7tJ6/s+3eOlbXnLk1BZ22uTzy8rP5Jb6z3pWb2bFJzwLAQxjpWEvSwri/H+aRhL+By/jAv8ZeHKuSxdKHLY8Mt4ccqh+XMZmj+boTlsKixAtga2Ac92eSVM0ZR1EIhriLeDOg1jCS/w7gnLp1NU4Ddfy5ymOQWH3RUPSzxVsjHe1lheGC6It9nT1usTi/G7Oxwqj5r0/kaDlhAeW3ya41VG8hwqKPuBelPdrJCsFDVjaywPRl5OeNrEtsb56fLG2vLRMor4IMVnZws7/diAuuDsHd7yL3HopDluRZq007PKym4wcFYphk2a7rREMAzI5TJ06QsXJZ/ESB7HC3fsRXxKDKnW4u+SfqfP6nxEabDVkffMaZLVHLP36+1IeG0XcRphGNyrChZDmf9UtESNbER2ACdhqMfxgxDEAmgaYoeRAhv3qw9HQeUYJexZKeAmkDbCK/eVwgc0Hd4mNzqimnuZPOcqFd2iikbIcCaTSdNLc+elfRJDhceBEyCa60fgGs2jaFPc5LJlpbr8+eZf6XLjN1qRQCP7Gh0VvkWRe5b7TlGWhc9dnDG1/Rj55YyspxkyhfLHN3MHZGYHeJ1+FBaOfzUgOpXtCTvj36CZo59TtrOpXn/SDUi8p3MvEI+Ds2kfH6tXFlmqtP5BFe/vwlikX36dMgs/6xPvdJo0Vf9j97xyGoYKf8gHp5WtFj04DOQwJXYY8vLXFq4T79zMhKY9HtkLrXdNSQHR7rlviuik+Ky/TPlg9cl2zjKfRWb56FrOpSRfLvCZhNMXyzhU8XTCnRbISpFvMb4QbFApWDMlFe2Uvkzt1Z9SVFuicO+9AfG51r+ezOPFnMtiWSSMT384SEmKQxWncKftXp7DJkyXT1Gp3f/bYed4mfylH5sSUbj5e7GOv20YHlz7zuPvnDZWu2aR4G1NN8aNx5Xv1VvAw0kkOT7xSH8H1Zp8y0piiMe7LmRT/wm6rjVmIWX89fP1zBWTGx1h/qqcW9BNvT74X4whwmMjhTctunmkcV5Nfdzj6+6LVEvPm9JoiIqLclJEnKMn/NAUx8AGBCR//8HGs37/v7yCiEM19rhDXWa1c7nMuqtlTZHBN/iCd4Omq+9IfRx4UYOP3jQlRXSGX9y5N/r6wREAPxJZnOhx/kbWZxneIVN8uHI7IaV5/G4nojTnkUqe2FKaZjhV64jhS1HW4aPCmUXyC4vmCT0kRZOTpbDyfRYLwUa0eUnjPj7R40ngh8y1+w91N8MFT5hOtWPxi0wtXGTr4+3Boz53fJ3yB7/TjhPolL5OQeV7vCzOdvvBbMkxl+uzWf6uaDCacI6v+x9uGEFGCEOESdmK1QdoKKlQVMZ52y7duElu8zbP5BF18q+w6GusbJbbmfb4vPRjyvx5HLosRhKO37s/fLBpOlSzL05SoOWVUr7H9Xhr8X66nMxUvJ3mZSAGI3t8Zxf/6tBvKmK4Yp1as22YNdzJ9bgifj8kJ43UASk7K+gBqfl8XDQwkvCnBbw7QRh2hfZCCbUYRG8ASXyqwgEstTgyq2BrKvYkwRafunALFY9wsKH2yfi/ET4u+iP+uQHR/wDCfIkIntWFSwAAAABJRU5ErkJggg==",
  vu =
    "data:image/svg+xml,%3csvg%20id='BANCOS'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3e%3ctitle%3eL-BBVAESMMXXX%3c/title%3e%3cg%20id='L-BBVAESMMXXX'%3e%3cpath%20d='M19.53,1.45,9.5,20.36,5.92,27.12A15,15,0,1,0,19.53,1.45Z'%20style='fill:%23004481'/%3e%3cpath%20d='M16,1a15,15,0,0,0-10,26.11L9.5,20.36l10-18.92A14.81,14.81,0,0,0,16,1Z'%20style='fill:%231973b8'/%3e%3cpolygon%20points='5.92%2027.12%209.5%2020.36%205.91%2027.11%205.92%2027.12'%20style='fill:%23004481'/%3e%3cpath%20id='A'%20d='M10.81,23.35,15.74,14a.3.3,0,0,1,.52,0l4.93,9.39a.29.29,0,0,0,.25.15h2.39a.22.22,0,0,0,.19-.32L16.25,8.65a.28.28,0,0,0-.5,0L8,23.18a.22.22,0,0,0,.19.32h2.39A.28.28,0,0,0,10.81,23.35Z'%20style='fill:%23fff'/%3e%3c/g%3e%3c/svg%3e",
  hu =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANaSURBVGhD7ZnLa1NBFMaP1aakprSpiRVifVR8VKGCbgQXCvVPaOnaRTfuBBHctLQbN4IbcdOF69L+CRZ0IbhRsGCLivERA2pi09LY0MRXvpsZe9WZuee+Ei/0B5d7Z2g635c5c+7MyY6fdSjCtIl7ZNk20GoibyDQRby+8YLKlZdUqeZos1qk7z82rP6dbZ3UEUtRPNZPifgx6uo8bvUHgW8DEF1YW6Di2iOqfSuJXjPtu5KU6j5P6e5h32Y8G4DwD4VZWll/LHq80dt1jvanxzwb8WTg7cd7lC/OiVYwZFKjdGjfZdHi48pAtfaFXuVv0Wr5megJlp7EaTqauUax9j2ixxm2gcpmjpbfT9fvedETDvGODA0emKjf+0WPGVYaxTffDPEAY2AsjMmBZQBh0wzxEoyFMTk4GsCCDSvmTWBMjO2EcQ0gVS5mr4qWnlKhWr9qlF0qW+03zxv3ZDpGh08laODkbuvZC0MDt40p1mhg+d20Y56/MbYonvRAPEyMXOEtTDt4TwwenBCtf9GGEL59vy8pCWboycMSzd/NiR4+0AAtOrQGsD1wy9kLSRqfPEI3Z4fo+p0T1mUPHZjILn0VLT4mLVoD2Nu4RcY7gHBc45MDVlsi14kbTFqUBjBl3I2ZEzL+Jaufq+KJD7TowkhpAFviIEGGkmCWvKDTpDSA/XxQIO6xiAFmAuvECzpNSgM4jAQBhD99sCJajZlAJpKG3KDTpDQgT1J++TvjyHQ6M5Wl+/OfRC8PnSalgaCQaRXpdHi073dKbczMVmj5QWkAZ9gggfBLI31/vIkhfmGOPws6TUoDOICHARaxPaW6eanpNCkNoHoQFjKM3KLTpDSA0kdY2L91+2w4odOkNIDtK0ofQQPxXhYutOi21EoDAHUbt2BRIj2q0if6Z6Zei54GZy72iiczJi3a8wD3MMM5D6hAeuWGkOlQo50BfACHCS7cxYm/QzrliocGzycyziwgNJDjAUIF2wW5fZDxDtE9e7Er3dpuc/F1pARhVOG4cKp12hCS4B+gYtZsMCan1OhoAKDch4pZs8BYGJMDywBqlY1yX/gmZGmRWx91XAN2Il3ctRPZ8rodpNjI/sBhB0Yi+ROTCpiJ3I98rYaVRv9ntg20mogbIPoFm6LHMfbRtlsAAAAASUVORK5CYII=",
  gu =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPgSURBVGhD7ZlPSBRRHMd/ruafNvGwqdhBhSARhQ6ul8A28OBBOmSX6KJ4KAUvCZ06iIe6BEYgaB1EI6JLFomHDRbaOu5608IOoXsI1JYI20pdLb/PNzq+92bezOquTfiBwXnP2Z3P+81vfvPmbd6fbchj+PhfT3EsnSs8KX1oN+Lc3BzNzs7S4uIiLS0tUSqVYv1+v58qKyuppqaGGhsbqaGhgfUfhANJQ3R6epoikQglk0nea08gEKDW1lZqb2/PeAAZSUN2bGyMotEo78mMUChE3d3druVdSw8PD9P4+DhvHQ5dXV3U19fHW3ocSy8vL9PAwADFYjHec7g0NzfT4OAgVVRU8B5rHEkvLCxQf38/JRIJ3pMdqquraWhoiGpra3mPGq00ItzT05N1YQOIj46O2kZcW6eRErkSBjgXzmmHrTRuumzlsB04J85thWV6oKx1dnby1tEwMTGhLIeWkUYdziYn6y5S4Zl63lJj5aCURpQP+uCwArLl1x9Q2aUbtLX6lfeqgQNcRJTSeDS7BTKlwQ4qKC3nPftBVAOX7zBZHPNz/h2lV1f4f61RuShzuq2tzfFcwsCQAutfPtL3t493pTAgyBqgf+XZLd6yB3OVcDjMWztIkcblcCsMIIoNYABIAUTeiK4ZDMgpcBFTRJLG9DJTzNEFp5o6pJsNxxiDc4roJEljPqwDlxsRRDSrbj5lm3FzWeU0QB67FQaikySNCbwdEPY3XWERNAtiX4yqCD5bUtfCW84RnaQbEfOMeDzOW9ZA0ld6mu0XmWSLz7XYRhv8mJmk1fgkb+kJBoNsPmKgLHlOQO7iUteXzNOFvNfk//xKErEqach13KSZIknjnc4Nt68Vsu38WR+LsDnKqZmXLKoqeYjrroiB6CRJ4yXUDW/imxSOpdlmzleI4sZD9MWqYuA0v0UnSRpvzW54Et6g+8/X2X5h1V5u//70nu/t1PBvU/ekyuE02qKTJI3XfKdcLSmgh2VFFCrKZ21z9VDld3LqLksXM06iLTpJ0pgK4tGpA8LYyvPzqKO4YF/ERDEzGIw5z3XRhos4PZWkAdYldNSf2PsoxI3yBxldOcP/zeliF22Vi1IaCyluiK5t7tZqp/MKI12wrdk8JVUuSmlcDiyk2PEotUEf0lv04lea7W9uz40h4PYxjeOtPgMH1ZvL//W6hYOx8nNU4NwqYaBd9+jt7c35GzlWm0ZGRnhLRivtycUafBhLVfiybGMsi+nW87TSAGtrGD0uW7bAd+McunU8oE0PEU8t9ZpBOfTUoroZyHvm5wsVGIAnfig6KhxVj3+NY+lc4UFpor+mtwj5+QF99wAAAABJRU5ErkJggg==",
  bu =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT1SURBVGhD7ZltbFNVGMefbrNTsXQMtuHaZYOMDAILyYJ0ic4xjV8wcSxIgA/IDOELJkzjK8ZETIxvMdGR6Bc0ICQSEhRngt9kzLGELToCqEBYYMvaBRkgo5PZrmye/7nnbF13e+5pb7vC4i+5OS9tep9/n+ec89znOsYZNAvIEu19z6wRkpbQ6hoYpq7AMJ0fHKFAMExDoQifd+fmkMflpKULHqTVHhf5PI/w+VSQMiEw/Jsz12hv9zUaHdP7yQeyHLS9qoi2rixgwuyJsi2kMxCkD08OUMvFm2ImOeor8untGg+tLk5OkC0hb/3cRx93DIhRanjz8WL66OlSMdInKSGI+y1He6i1d0jMpJa6srl0sGEJX0+6JCzkwvURevbQebr8d0jMpIfF83Lp2OZlbGN4SMyoSUgIPPHk/t/TLkICMb80rtDyTELnyJajl2ZMBMC9EMI6aAvBwm7tvS1GMwfWIe5thVZo4YDzfXVOjDLDqW0r2AHqEqPpaHnkg/aA6GUOnFUqLD2CE9v3tYU3HEQ5wzfIdbmD8Gt358ynkUeXUuThBezDhDZFJZ3bKuNmAJZCXvrpCn3561UxMsNBeed+pHmnvyPHaFjMEY26PRSsqKFblfVslBoxO1YV0RdrF4vRVCyFON8/pcidmIizLZT/2xGiMSMxjGY820lX1+6ikcIKMWNQlpdLa0rnUilr+26FqHcoRCc0NhLkZuF3qsVoKso10snCSpkAOpiQ099zEb7qavr28CFq62innS83GR/fDdP8k/ugd4J3a710ZWcV7asvp921JbxtfWE5b62ALdh4zFAK6WIJoQpXTztlRYxw8pZ4efvGq6/T+g3Pk9drjJ3BAcr55wbvQwSMB73ME9FeaGQZsI4YrFkzlEIuXP9X9MzJvmMYKPEw45teaaKA309+dsXSuLJQ9IgW7emmugN/8BaicLWxMwNhpwLPOGYohSAlUREqYrGfnS1G7PvM+ObPmrkg6ZFxdovInALel0bCaHhA9qWg/WcG+VhFPJuUQuSTXTxG2TZ7Z2El7/v7mRfY5av20Z7Pmyc8ElxSw9SM8b4MJQhCGGGtINysvBBNPJuUuxb+KavdBPFfcuQ1ckSm/5PhfC/5130ysdhV60B6xsoja1iKj80hFqVH8IxtRYR5pX/Dp3R7+TM0luPkVzjPSzcf20T+hkkRAKHzYkuP6Z8Dr5gZGEs8m5QesT4MoxEW84b9pGLXBjAcZ0ltmXtivQCrKNixaiE7FBeJ0SRKjywr0HuoMYDlEGAuAoZjPeBCeCCEpId2t/WLb7HvudXrBRUYM5RC7FY2osG/jzOEH4LPlXMxwPCMm/fBiT71mkQZyQybKYo+cg2gjQc8817b9PNHknSKArZXTR5idpC7EsIpFnxmJQKgBhYPS49opfEJAq9Iz0CE1ZYrsZXGg3WHL9ouwNkFBbwfNk7NoqOxDC2w64li0cscqEKq0BKCZ2VUADMF7m1VStUKLclTB/5MW3UxHqg6Htc48bU8IjnYUM6LZjMF7oXSqQ4JCUHFD2XMmRAjS6a69d+EQktiFLEvpa1gV8fyL3g/rUXsaO771wrRoBiAAl4qXvRgm1dVE1XYFiIxXr0N0t7uvxJ89VZIW9mzfMZfvZmBMhIqMCheYD3FvgzF4wEMT/Y1mxlpEZIJEtp+72X+F3KvMUuEEP0HghpI8aSddJYAAAAASUVORK5CYII=",
  _u =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOySURBVGhD1ZlPSFRBHMd/7h+19R+molkh1CkPKYHVoWNJHcLyUiBaEGR/FgIPQtExCoSEoOwPBJkIdbGgQ1EeO0RCaIftVCCVJZpSppm7au/7mlle7828Nztvd20/sOybUXc+M/7evPn9Nm/VgHKQAHvPOXJWPG2hEn83RvGY8Rp/TytTX2l1fs7szysqoWBVDQXrtlB4WwPl1zea/X7xJQ7ZhadDtPDkAVEiwXo9CIUocvAoRQ60mhPRRUt8KTZK8wM3afHlMOvRo3DPXiruOKM1gZTFf9zqofnB26yVHoraOqn0VDdrqaEsvjI1SbOXumjpzSvWk17yd+ym8ou9FKiqZj3uKIknjBtupvsELU98ZD2ZIVi7mdb33KVQ3VbWI8dTHCs9HT2ScWkO5CuvP/Rcec99HOGRLWmAsTCmF67iuBEzFdNuYEyM7YZUHHt0unePVMDY2HZlSMV/3u9jV2sHnhUyhOJYbb8Pl1BDExU0H2ItPeAAFxFCcTzG/RLe3kThxp2spY/MRSyOs4dPViYnzBUPVG9kPXrIXBzi5g2hemASAFEI/37+2JD/TGW99/zJGy6icHGIy2JKlYLmlmSILD57xCbSYrZ1wXHZjkN8efwDu9IjuGFTMkR+DfSZqx45FvW16jjj23GKG0mAH5a/fDLfeYh87zrO5M+a/TogMbHjEOeZiw7YAvkq8xDBNQ8Z3VUXOTnEUwWyxd2XqWI4RiXG+7+rHDV/Hn87QmHjvXzwBZVe7U+Gkh8c4sgRVYFEGRMB9lUGkY4oBS2SmAAmipeqvMjJIR4wElsV1rUbKZchYYevMg8ZLmpH1i8CybYdh3hY4RAPICiDh0x8bIT1iBFNXAQqBHac4vVqiStWUwYPGb7DyHD7DCuiZNopjl8KhVhLzlzPBdeBC/cfdv2vgIX+G+zKBcNFVItxiAPUPbxIGGGA3QOPdhFuNx5CaLZtn/RvrchchDknHvvTJ1tZyxvcjH9Pg7soWFMrlIZkfPS1Ka0aIqDyzpAwVKTJ8uz5Tt9ncj6BVEStoGBUfkWchQlDBRS1n2ZX+kBYVxqgyiVDKo4bAhWmtQJju5XmPOsq3861ZT3TR1Wr4toga4mRrjgHZTEUabIFxsKYXniKo6KEslg25HkJTqV+6CkOUMtDWQz/wkyBz8YYKnVDoFT0tJJzZWYreEChYJSOwj62XZ2vV7TEOZhATn2VIgJlDUwEyTbyVuuXVzjj47iMk6cfWStpE882SrvK/0iOihP9AXxVspxh+lLwAAAAAElFTkSuQmCC",
  yu =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAvCAYAAABKQCL3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALmSURBVGhD7ZlLbuowFIbP5VEECBAMqgoQHTGABcAGYANlg6yADZQNlAXAgBEIUMUABAgQr957/+CIiNiOSVNwru43KXZSn/+PH7FPfv3+C/mcAPvra/6b0IV/woRnE3u9XtNms6Htdku73Y6OxyN9fX0Z1wKBAIVCIYpEIhSNRikWi1E8HjeuecG3TOz3e5rNZrRYLOhwOLBaNcLhMKVSKcpkMvT09MRq3eHKBJ7ydDo1DHgBjDw/Pxu95YabTcznc/r8/KTT6cRqvCEYDNLLywul02lWo85NJiaTiWdPXwR6JZvNspIayiYGgwGtVitW+lkSiQS9vr6ykjNKS+w9DQDEQkxVHE1gCN3TgAliIrYKUhOYxD89B2QgNjQ4ITSBZRSr0KOBBmiRITSB94DXy6gboAFaZHBNmG9iXYAWaBLBNaGTAROZJq4J7IV0Q6bJZgK70Vs3c/cAmqCNh80EttO6ItJmM4HzgK6ItNn2Tv1+3zjUyMDb9OPjg0ajEZXLZapUKuzKhU6nY1xfLpfce9BGr9ejbrdLyWSS6vW6sWeSgUNVsVhkpQs2E2hY9n5A8GazyUpncrkcvb29sdK5jXa7zUpnarUalUolViJqtVo0Ho9Z6bzpazQaUiPYrlvbMLENJ/NIKQJP9xqIsQpCL10DY1as9wOzZ2SItHGXWBkIxgNDwsT6m4eoDafhJMJmAod6GbzuxHCyCuDdY63Dvfifa/L5PPvFR6TN9cR+f38XTlqgOrHN4VmtVrnGrChP7OFwaATWEQzTQqHAShds/YO8kK6ItNlMILGlKyJtNhPIzCGxpRvQJMoacqc7MnO6IdPENYHcj27INHFNIDeqkxFokeVruSYAcqPYqzwaaIAWGUITSO4iN/pooMEp0Sw0AZDcfeSwQmyVBLPUBEBy1+3G7Dsgpmpi2dEEQHL3nkYQ65aEsnJWHPg+tW/i+48sJr7/3GXF1x8eefj2E7AuKC2xekP0B5d8pfI/S2b4AAAAAElFTkSuQmCC",
  i0 = "/assets/hdc-logo-hqJVLxv8.svg",
  r0 = () =>
    l.jsxs("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      "aria-hidden": "true",
      fill: "white",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        color: "white",
      },
      children: [
        l.jsx("path", {
          d: "M130 70 30 150v80a9.94 9.94 0 0 0 9.9 10H130v-80h60v80h30.1a9.94 9.94 0 0 0 9.9-10v-80ZM90 190H60v-20h50Z",
        }),
        l.jsx("path", {
          d: "M130 10 0 120l20 20 110-90 110 90 20-20L130 10z",
        }),
      ],
    }),
  o0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M70 195h160v-90l20-20v130H50ZM10 45h200v130H10Zm30 80v20h110l20-20Zm0-50v20h40l20-20Z",
      }),
    }),
  s0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      "aria-hidden": "true",
      fill: "white",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M210 210v-30h30v30ZM20 50h170l-10 30H20Zm0 130h170l-10 30H20Zm0-65h140l-10 30H20Zm190-35V50h30v30Zm0 65v-30h30v30Z",
      }),
    }),
  l0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M130 10a120 120 0 1 0 120 120A120 120 0 0 0 130 10Zm10 95-20 20H80.2a41 41 0 0 0-.2 5c0 1.7.1 3.4.2 5H140l-20 20H86.7a50.09 50.09 0 0 0 78.7 10.4l14.1 14.1A70 70 0 0 1 60 130c0-1.7.1-3.3.2-5H60l.2-.2a70 70 0 0 1 119.3-44.3l-14.1 14.1A50.09 50.09 0 0 0 86.7 105Z",
      }),
    }),
  c0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M100 20h10v10h10l10-10h10v10h10l10-10h10v10h10l10-10h10c6 0 10 4 10 10v200c0 6-4 10-10 10h-20v-10h-10l-10 10h-10v-10h-10l-10 10h-10v-10h-10l-10 10H90v-10H80l-10 10H60c-6 0-10-4-10-10V30c0-6 4-10 10-10h20v10h10Zm40 92h-40a38.64 38.64 0 0 1 33-18 42.68 42.68 0 0 1 27 10l11-10c-11-8-24-14-38-14-28 0-51 20-53 46v4c0 28 24 50 53 50a52.06 52.06 0 0 0 37-15l-11-10a40.63 40.63 0 0 1-27 10 38.64 38.64 0 0 1-33-18h25l15-14H95v-8h30Z",
      }),
    }),
  d0 = () =>
    l.jsxs("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: [
        l.jsx("path", {
          d: "m131 50.4-20.1 20.2v42.3L78.8 145h28.6l23.6-23.7-.2-.3h.2V50.4zm64 79.6a65 65 0 1 0 65 65 65 65 0 0 0-65-65Zm7 96.1V238h-.8l-10.2-5.3v-5.9a33.74 33.74 0 0 1-13.3-3.8l-.4-.3-.3-.2.1-.4.1-.6 1.2-8.1.2-1.4.1-.9.8.5 1.2.8a27 27 0 0 0 14.4 4.7c5.5 0 8.9-2.8 8.9-7.3s-1.8-6.3-10.2-10.1c-12.2-5.6-16.2-9.8-16.2-18.3s5.5-14.5 13.5-16.3v-11h1.1l9.9 5.1v5.7a21.3 21.3 0 0 1 9 3.1l.5.3.3.2-.1.4-.1.6-1.3 7.9-.2 1.5-.2 1-.8-.6-1.2-.9a19.21 19.21 0 0 0-11.3-4c-5.2 0-8.1 2.4-8.1 6.3 0 3.7 1.8 5.5 10.2 9.2 12.3 5.6 16.1 10 16.1 19.1 0 8.6-4.9 14.8-12.9 17.1Z",
        }),
        l.jsx("path", {
          d: "M21.7 120a98.32 98.32 0 0 1 196.4-6.8 86 86 0 0 1 21.9 9.7V120a120 120 0 1 0-120 120h2.9a84.51 84.51 0 0 1-9.7-21.9A98.36 98.36 0 0 1 21.7 120Z",
        }),
      ],
    }),
  u0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M180 220v-20H80v20H70a10 10 0 0 1-10-10V30a10 10 0 0 1 10-10h120a10 10 0 0 1 10 10v180a10 10 0 0 1-10 10Zm-20-60v20h20v-20Zm-40 0v20h20v-20Zm-40 0v20h20v-20Zm80-40v20h20v-20Zm-40 0v20h20v-20Zm-40 0v20h20v-20Zm80-40v20h20V80Zm-40 0v20h20V80Zm-40 0v20h20V80Zm0-40v20h80l20-20Zm10 170h80v20a10 10 0 0 1-10 10h-60a10 10 0 0 1-10-10Z",
      }),
    }),
  p0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M70 195h160v-80l20-20v120H50ZM10 45h200v130H10Zm65 45-45 45v20h21.37l65.16-66.46a5 5 0 0 0 0-7l-13-13a5 5 0 0 0-7.08 0L85 80l15 15H80Z",
      }),
    }),
  m0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M120 219.45V180h-10v-30H90l-46.14-46.14A90.07 90.07 0 0 0 120 219.45Zm30-177.22V70h-30v20h-20v20h30v30h40v50h-20v27.77a90 90 0 0 0 0-175.54ZM130 240a110 110 0 1 1 110-110 110 110 0 0 1-110 110Z",
      }),
    }),
  f0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "m70 90-40 40V39.92A10 10 0 0 1 39.92 30h180.16a10 10 0 0 1 9.92 9.92v180.16a10 10 0 0 1-9.92 9.92H39.92a10 10 0 0 1-9.92-9.92V170l40-40 50 50v-40Zm110 30 20 20V80h-60l20 20-40 40v40Z",
      }),
    }),
  v0 = () =>
    l.jsxs("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      "aria-hidden": "true",
      fill: "white",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: [
        l.jsx("path", {
          d: "m100.76 101.05-10.62 10.62v.01l10.62-10.63zm89.77 55.44-10.62-10.62 10.62 10.62zm-121.06 0 2.65-2.65-2.65 2.65z",
        }),
        l.jsx("path", {
          d: "M220 152.25C220.18 64.62 130 10 130 10S39.82 64.62 40 152.25c.1 49.75 42.49 90.54 80 97.75v-40.49l-51.77-51.79 1.24-1.23 2.66-2.65 10.26-10.28L120 181.17v-32.85l-33.24-33.25 3.38-3.39 10.62-10.62.15-.15 19 19.09V64.23h20V120L159 100.9l14.15 14.17L140 148.32v32.85l37.6-37.61 2.3 2.31 10.62 10.62 1.24 1.23L140 209.51V250c37.49-7.26 79.9-48 80-97.75Z",
        }),
      ],
    }),
  h0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M10 107.5h174.55L206.36 85H10V51.26A11 11 0 0 1 20.94 40h218.12A11.08 11.08 0 0 1 250 51.26v157.48A11 11 0 0 1 239.06 220H20.94A11.08 11.08 0 0 1 10 208.74Zm141.82 56.25v22.5h43.63l21.82-22.5Z",
      }),
    }),
  g0 = () =>
    l.jsxs("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: [
        l.jsx("path", {
          d: "M129.85 10.11c44 21.85 70.06 67.51 70.3 120h50c-.31-66.25-54.15-120.22-120.3-120Zm-.5 0c-66.19.4-119.5 53.75-119.19 120h50c-.24-52.49 25.44-97.74 69.19-120Z",
        }),
        l.jsx("path", {
          d: "M180.15 130.11c-.24-52.49-21.94-98.08-50.46-120h-.17C101.16 32.3 80 77.53 80.16 130.11h40v90a10 10 0 0 1-20 0v-10h-20v10a30 30 0 1 0 60 0v-90Z",
        }),
      ],
    }),
  b0 = () =>
    l.jsx("svg", {
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "white",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M240 20H20a10 10 0 0 0-10 10v210l40-40h190a10 10 0 0 0 10-10V30a10 10 0 0 0-10-10ZM90 120 50 90l40-30v20h60l-20 20H90Zm80 40v-20h-60l20-20h40v-20l40 30Z",
      }),
    }),
  _0 = () =>
    l.jsx("svg", {
      fill: "white",
      viewBox: "0 0 260 260",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      "aria-hidden": "true",
      style: {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: l.jsx("path", {
        d: "M130 10a120 120 0 1 0 120 120A120 120 0 0 0 130 10ZM49.9 129.4 112 67.3l14.3 14.4L88.2 120H210l-20 19.7-101.6-.3 37.5 37.4-14.3 14.3Z",
      }),
    }),
  Ua = ({ icon: e, label: t, onClick: n, route: a }) => {
    const [i, r] = S.useState(!1),
      [o, s] = S.useState(!1),
      c = pu(),
      d = () => {
        c(a), s(!o);
      };
    return (
      S.useEffect(() => {
        const h = window.location.pathname;
        s(h == a);
      }, []),
      l.jsxs("div", {
        className: `w-full h-[60px]  ${o ? "border-l-[4px]" : ""} 
      "border-white"
      ${
        i || o ? "bg-appBarHighlighted " : "bg-navyBlue"
      }  flex items-center  gap-[15px] `,
        onMouseEnter: () => r(!0),
        onMouseLeave: () => r(!1),
        onClick: d,
        style: { cursor: "pointer" },
        children: [
          l.jsx("div", {
            className: "w-[25px] h-[25px] ml-[20px]",
            children: e(),
          }),
          l.jsx("p", {
            className: "font-'Benton Sans', sans-serif  font-bold text-white",
            children: t,
          }),
        ],
      })
    );
  },
  hs = () => {
    const e = [
        [r0, "Inicio", "/portal"],
        [o0, "Cuentas", "/portal/accounts"],
        [s0, "Posición Global", "/portal2"],
        [l0, "Pagos", "/portal2"],
        [c0, "Cobros", "/portal2"],
        [d0, "Financiación", "/portal2"],
        [u0, "TPVs", "/portal2"],
        [p0, "Avales", "/portal2"],
        [m0, "Comercio internacional", "/portal2"],
        [f0, "Iversiones y Mercados", "/portal2"],
        [v0, "Herramientas de Acción Sostenible", "/portal2"],
      ],
      t = [
        [h0, "Tarjetas", "/portal2"],
        [g0, "Seguros", "/portal2"],
      ],
      n = [b0, "Danos tu opinión", "/portal2"];
    return l.jsxs("section", {
      className:
        "z-99 w-[13vw] h-screen bg-navyBlue fixed left-0 flex flex-col items-start ",
      children: [
        l.jsx("img", { src: t0 }),
        l.jsxs("div", {
          className:
            "flex flex-col  h-[90%] items-start overflow-y-scroll customScroll",
          children: [
            l.jsxs("div", {
              className:
                "flex flex-col items-center w-full gap-[10px]  pt-[20px] ",
              children: [
                e.map((a, i) =>
                  l.jsx(
                    Ua,
                    {
                      icon: a[0],
                      label: `${a[1]}`,
                      onClick: () => {},
                      logout: !1,
                      route: `${a[2]}`,
                    },
                    `appbar-button-${i}`
                  )
                ),
                l.jsx("div", {
                  className: "w-[90%] border-b-[2px] border-white",
                }),
              ],
            }),
            l.jsxs("div", {
              className: "flex flex-col items-center w-full gap-[10px] ",
              children: [
                t.map((a, i) =>
                  l.jsx(
                    Ua,
                    {
                      icon: a[0],
                      label: `${a[1]}`,
                      onClick: () => {},
                      logout: !1,
                      route: `${a[2]}`,
                    },
                    `appbar-button-${i}`
                  )
                ),
                l.jsx("div", {
                  className: "w-[90%] border-b-[2px] border-white",
                }),
              ],
            }),
            l.jsx(
              Ua,
              {
                icon: n[0],
                label: `${n[1]}`,
                onClick: () => {},
                logout: !1,
                route: `${n[2]}`,
              },
              "appbar-button-Opinion"
            ),
          ],
        }),
        l.jsx(
          Ua,
          {
            icon: _0,
            label: "Salir",
            onClick: () => {},
            logout: !0,
            route: "/portal",
          },
          "appbar-button-Opinion"
        ),
      ],
    });
  };
var wu = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Dl = $e.createContext && $e.createContext(wu),
  At = function () {
    return (
      (At =
        Object.assign ||
        function (e) {
          for (var t, n = 1, a = arguments.length; n < a; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      At.apply(this, arguments)
    );
  },
  y0 = function (e, t) {
    var n = {};
    for (var a in e)
      Object.prototype.hasOwnProperty.call(e, a) &&
        t.indexOf(a) < 0 &&
        (n[a] = e[a]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, a = Object.getOwnPropertySymbols(e); i < a.length; i++)
        t.indexOf(a[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, a[i]) &&
          (n[a[i]] = e[a[i]]);
    return n;
  };
function xu(e) {
  return (
    e &&
    e.map(function (t, n) {
      return $e.createElement(t.tag, At({ key: n }, t.attr), xu(t.child));
    })
  );
}
function Be(e) {
  return function (t) {
    return $e.createElement(w0, At({ attr: At({}, e.attr) }, t), xu(e.child));
  };
}
function w0(e) {
  var t = function (n) {
    var a = e.attr,
      i = e.size,
      r = e.title,
      o = y0(e, ["attr", "size", "title"]),
      s = i || n.size || "1em",
      c;
    return (
      n.className && (c = n.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      $e.createElement(
        "svg",
        At(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          a,
          o,
          {
            className: c,
            style: At(At({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        r && $e.createElement("title", null, r),
        e.children
      )
    );
  };
  return Dl !== void 0
    ? $e.createElement(Dl.Consumer, null, function (n) {
        return t(n);
      })
    : t(wu);
}
function x0(e) {
  return Be({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
        },
      },
    ],
  })(e);
}
function k0(e) {
  return Be({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
      },
    ],
  })(e);
}
function A0(e) {
  return Be({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
        },
      },
    ],
  })(e);
}
function S0(e) {
  return Be({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm19 304h-38.2V207.9H275V352zm-19.1-159.8c-11.3 0-20.5-8.6-20.5-20s9.3-19.9 20.5-19.9c11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20z",
        },
      },
    ],
  })(e);
}
function ku(e) {
  return Be({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z",
        },
      },
    ],
  })(e);
}
function C0(e) {
  return Be({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z",
        },
      },
    ],
  })(e);
}
const Au = () => {
    const e = pu(),
      t = () => {
        e("/portal/details");
      };
    return l.jsx(l.Fragment, {
      children: l.jsxs("div", {
        className:
          " w-[85%] h-[30vh] flex flex-col items-center border-b border-gray-200",
        children: [
          l.jsxs("div", {
            className:
              "flex justify-between h-[5vh] w-full border-b border-gray-200 text-currency font-sans font-bold",
            children: [
              l.jsx("p", { children: "EUR" }),
              l.jsx("div", {
                className: "flex",
                children: "SALDO DISPONIBLE / SALDO EN CUENTA",
              }),
            ],
          }),
          l.jsxs("div", {
            className:
              "w-[95%] h-[5vh] flex justify-between items-center mt-[2vh]",
            children: [
              l.jsxs("div", {
                className: "flex gap-[25px] ",
                children: [
                  l.jsx("h1", { children: "-" }),
                  l.jsx("img", { src: vu, height: 40, width: 40 }),
                  l.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      l.jsx("p", {
                        className: "text-[19px] font-semibold",
                        children: "BBVA",
                      }),
                      l.jsx("p", {
                        className: "text-gray-500 font-medium",
                        children: "1 Cuenta",
                      }),
                    ],
                  }),
                ],
              }),
              l.jsx("p", {
                className: "text-[19px] font-semibold",
                children: "45.522,12 EUR / 50.504,26 EUR",
              }),
            ],
          }),
          l.jsx("div", {
            className: " w-[96%] ml-[4vw] mt-5",
            children: l.jsxs("table", {
              className: "table-auto",
              children: [
                l.jsxs("thead", {
                  className:
                    "border-b px-4 py-2 text-gray-500  font-sans text-left",
                  children: [
                    l.jsx("th", {
                      className: " font-medium ",
                      children: "FAV.",
                    }),
                    l.jsx("th", {
                      className: "w-[65%] font-medium ",
                      children: "ALIAS/NÚMERO DE CUENTA",
                    }),
                    l.jsx("th", {
                      className: "w-[10%] font-medium ",
                      children: "SALDO DISPONIBLE",
                    }),
                    l.jsx("th", {
                      className: "font-medium text-end",
                      children: "SALDO EN CUENTA",
                    }),
                    l.jsx("th", {}),
                  ],
                }),
                l.jsx("tbody", {
                  className: "border-b border-gray-200",
                  children: l.jsxs("tr", {
                    children: [
                      l.jsx("td", {
                        className: "text-center",
                        children: l.jsx(A0, {
                          color: "#ffcc00",
                          size: 30,
                          className: "cursor-pointer",
                        }),
                      }),
                      l.jsx("td", {
                        className: "text-infoBlue font-bold text-[22px]",
                        children: l.jsx("span", {
                          style: { cursor: "pointer" },
                          onClick: t,
                          children: "ES380182600850005351247",
                        }),
                      }),
                      l.jsx("td", {
                        children: l.jsxs("div", {
                          className: "flex flex-col justify-center items-end",
                          children: [
                            l.jsxs("p", {
                              className:
                                "flex text-[25px] text-gray-600 items-center gap-2",
                              children: [
                                "45.522,12 ",
                                l.jsx("p", {
                                  className: "text-[15px]",
                                  children: "EUR",
                                }),
                              ],
                            }),
                            l.jsx("p", {
                              className: "text-gray-400 text-[16px]",
                              children: "Hace 2 minutos",
                            }),
                          ],
                        }),
                      }),
                      l.jsx("td", {
                        children: l.jsxs("div", {
                          className: "flex flex-col justify-center items-end",
                          children: [
                            l.jsxs("p", {
                              className:
                                "flex text-[25px] text-gray-600 items-center gap-2",
                              children: [
                                "50.504,26 ",
                                l.jsx("p", {
                                  className: "text-[15px]",
                                  children: "EUR",
                                }),
                              ],
                            }),
                            l.jsx("p", {
                              className: "text-gray-400 text-[16px]",
                              children: "Hace 2 minutos",
                            }),
                          ],
                        }),
                      }),
                      l.jsx("td", {
                        children: l.jsx("div", {
                          className:
                            "flex  justify-center items-center  cursor-pointer",
                          children: l.jsx(C0, { color: "#1973B8", size: 30 }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  gs = ({ handle: e }) =>
    l.jsxs("section", {
      className:
        "fixed bg-gray-100 w-[86vw] h-[15vh] top-0 right-[2px] z-99 flex  justify-end items-center gap-8",
      style: { paddingRight: "10%", zIndex: "99" },
      children: [
        l.jsx("div", {
          className: "allSizes",
          children: l.jsx("svg", {
            viewBox: "0 0 260 260",
            preserveAspectRatio: "xMidYMid meet",
            focusable: "false",
            "aria-hidden": "true",
            style: {
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            },
            children: l.jsx("path", {
              d: "M130 10a120 120 0 1 0 120 120A120 120 0 0 0 130 10Zm0 190a15 15 0 1 1 15-15 15 15 0 0 1-15 15Zm22.5-70.4c-13.5 7.9-13.4 11.2-13.4 27.8h-19.6a121 121 0 0 1-.6-12.1c0-12.7 7-20.1 15.7-25.4 8.2-5.2 11.9-8.9 11.9-17.1 0-6.7-5-11.4-13.9-11.4-9.8 0-19.7 6.9-25.5 14.6L92.7 90.8c9-11.4 22.8-20.8 42.4-20.8 22.5 0 34.9 12.9 34.9 30.6 0 15.6-7.9 23.2-17.5 29Z",
            }),
          }),
        }),
        l.jsx("div", {
          className: "allSizes",
          children: l.jsxs("svg", {
            viewBox: "0 0 260 260",
            preserveAspectRatio: "xMidYMid meet",
            focusable: "false",
            "aria-hidden": "true",
            style: {
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            },
            children: [
              l.jsx("path", {
                d: "M200 20.14c-.2-11.19-12-10.29-20-10l-10 10h-10v-10h-10l-10 10h-10v-10h-10l-10 10h-10v-10H90l-10 10H70v-10H60l-10 10H40v-10c-7.8-.3-20-1.1-20 10v219.73c.1 11.09 12 10.29 20 10l10-10h10v10h10l10-10h10v10h10l10-10v-40L200 110ZM120 120H50v-20h90Zm30-39.95H50v-20h120Z",
              }),
              l.jsx("path", {
                d: "M236.48 146.48c-7.4-6.79-18.9-24.07-30-13L130 209.91v30h30l76.5-76.41a12 12 0 0 0-.02-17.02Zm-46.5 93.39h49.99V219.9h-29.99l-20 19.97z",
              }),
            ],
          }),
        }),
        l.jsx("div", {
          className: "allSizes",
          children: l.jsx("svg", {
            viewBox: "0 0 260 260",
            preserveAspectRatio: "xMidYMid meet",
            focusable: "false",
            "aria-hidden": "true",
            style: {
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            },
            children: l.jsx("path", {
              d: "M160 10H46a6 6 0 0 0-6 6v227a7 7 0 0 0 6 7h168a7 7 0 0 0 6-6V70ZM60 70h100l-20 20H60Zm0 40h60l-20 20H60Zm71 115-38-38 14-14 22 22 53-62 15 13Z",
            }),
          }),
        }),
        l.jsx("div", {
          className: "allSizes",
          children: l.jsx("svg", {
            viewBox: "0 0 260 260",
            preserveAspectRatio: "xMidYMid meet",
            focusable: "false",
            "aria-hidden": "true",
            style: {
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            },
            children: l.jsx("path", {
              d: "M244.59 40H15.5a5.55 5.55 0 0 0-5.5 5.5v169a5.55 5.55 0 0 0 5.5 5.5h229a5.55 5.55 0 0 0 5.51-5.5v-169a5.34 5.34 0 0 0-5.42-5.5ZM130 150 30 89.9V66l100 60.3L230 66v23.9L130 150",
            }),
          }),
        }),
        l.jsx("div", {
          className: "allSizes",
          children: l.jsxs("svg", {
            viewBox: "0 0 260 260",
            preserveAspectRatio: "xMidYMid meet",
            focusable: "false",
            "aria-hidden": "true",
            style: {
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            },
            children: [
              l.jsx("path", {
                d: "M161.4 132.55a70 70 0 0 1-62.8 0A90.08 90.08 0 0 0 30 220v20h200v-20a90.08 90.08 0 0 0-68.6-87.45Zm-1.4 77.54h-30v-20h50Z",
              }),
              l.jsx("ellipse", {
                cx: "130",
                cy: "70.02",
                rx: "50",
                ry: "50.02",
              }),
            ],
          }),
        }),
        l.jsxs("div", {
          slot: "invoker",
          role: "button",
          className: "right-col__list-item--clickable",
          id: "bbva-btge-menu-perfil",
          onClick: () => e(),
          children: [
            l.jsx("svg", {
              className: "fill",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 10 10",
              children: l.jsx("rect", { width: "10", height: "5", y: "5" }),
            }),
            l.jsx("div", {
              className: "content",
              role: "img",
              "aria-label": "Perfil",
              "aria-hidden": "false",
              children: l.jsxs("slot", {
                name: "content",
                children: [
                  " ",
                  l.jsx("span", { className: "text", children: "5 " }),
                  " ",
                ],
              }),
            }),
          ],
        }),
      ],
    });
function Su(e) {
  return Be({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
        },
      },
    ],
  })(e);
}
function bs(e) {
  return Be({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M408 112H106a58 58 0 00-58 58v158a56 56 0 0056 56h8v39.68A40.32 40.32 0 00152.32 464h207.36A40.32 40.32 0 00400 423.68V384h8a56 56 0 0056-56V168a56 56 0 00-56-56zm-40 311.68a8.35 8.35 0 01-8.32 8.32H152.32a8.35 8.35 0 01-8.32-8.32V264.32a8.35 8.35 0 018.32-8.32h207.36a8.35 8.35 0 018.32 8.32zm26-215.76a24 24 0 1122-22 24 24 0 01-22 22zM344 48H168a56.09 56.09 0 00-55.42 48h286.84A56.09 56.09 0 00344 48z",
        },
      },
    ],
  })(e);
}
function _s(e) {
  return Be({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z",
        },
      },
    ],
  })(e);
}
function Ei(e) {
  "@babel/helpers - typeof";
  return (
    (Ei =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ei(e)
  );
}
function Qt(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function me(e, t) {
  if (t.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        t.length +
        " present"
    );
}
function Qe(e) {
  me(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || (Ei(e) === "object" && t === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || t === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || t === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function E0(e, t) {
  me(2, arguments);
  var n = Qe(e).getTime(),
    a = Qt(t);
  return new Date(n + a);
}
var j0 = {};
function Zi() {
  return j0;
}
function z0(e) {
  var t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function N0(e) {
  return (
    me(1, arguments),
    e instanceof Date ||
      (Ei(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function T0(e) {
  if ((me(1, arguments), !N0(e) && typeof e != "number")) return !1;
  var t = Qe(e);
  return !isNaN(Number(t));
}
function P0(e, t) {
  me(2, arguments);
  var n = Qt(t);
  return E0(e, -n);
}
var B0 = 864e5;
function M0(e) {
  me(1, arguments);
  var t = Qe(e),
    n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var a = t.getTime(),
    i = n - a;
  return Math.floor(i / B0) + 1;
}
function ji(e) {
  me(1, arguments);
  var t = 1,
    n = Qe(e),
    a = n.getUTCDay(),
    i = (a < t ? 7 : 0) + a - t;
  return n.setUTCDate(n.getUTCDate() - i), n.setUTCHours(0, 0, 0, 0), n;
}
function Cu(e) {
  me(1, arguments);
  var t = Qe(e),
    n = t.getUTCFullYear(),
    a = new Date(0);
  a.setUTCFullYear(n + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = ji(a),
    r = new Date(0);
  r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = ji(r);
  return t.getTime() >= i.getTime()
    ? n + 1
    : t.getTime() >= o.getTime()
    ? n
    : n - 1;
}
function O0(e) {
  me(1, arguments);
  var t = Cu(e),
    n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var a = ji(n);
  return a;
}
var I0 = 6048e5;
function L0(e) {
  me(1, arguments);
  var t = Qe(e),
    n = ji(t).getTime() - O0(t).getTime();
  return Math.round(n / I0) + 1;
}
function zi(e, t) {
  var n, a, i, r, o, s, c, d;
  me(1, arguments);
  var h = Zi(),
    f = Qt(
      (n =
        (a =
          (i =
            (r = t == null ? void 0 : t.weekStartsOn) !== null && r !== void 0
              ? r
              : t == null ||
                (o = t.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && i !== void 0
            ? i
            : h.weekStartsOn) !== null && a !== void 0
          ? a
          : (c = h.locale) === null ||
            c === void 0 ||
            (d = c.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && n !== void 0
        ? n
        : 0
    );
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Qe(e),
    g = v.getUTCDay(),
    b = (g < f ? 7 : 0) + g - f;
  return v.setUTCDate(v.getUTCDate() - b), v.setUTCHours(0, 0, 0, 0), v;
}
function Eu(e, t) {
  var n, a, i, r, o, s, c, d;
  me(1, arguments);
  var h = Qe(e),
    f = h.getUTCFullYear(),
    v = Zi(),
    g = Qt(
      (n =
        (a =
          (i =
            (r = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            r !== void 0
              ? r
              : t == null ||
                (o = t.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && i !== void 0
            ? i
            : v.firstWeekContainsDate) !== null && a !== void 0
          ? a
          : (c = v.locale) === null ||
            c === void 0 ||
            (d = c.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1
    );
  if (!(g >= 1 && g <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var b = new Date(0);
  b.setUTCFullYear(f + 1, 0, g), b.setUTCHours(0, 0, 0, 0);
  var y = zi(b, t),
    z = new Date(0);
  z.setUTCFullYear(f, 0, g), z.setUTCHours(0, 0, 0, 0);
  var p = zi(z, t);
  return h.getTime() >= y.getTime()
    ? f + 1
    : h.getTime() >= p.getTime()
    ? f
    : f - 1;
}
function R0(e, t) {
  var n, a, i, r, o, s, c, d;
  me(1, arguments);
  var h = Zi(),
    f = Qt(
      (n =
        (a =
          (i =
            (r = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            r !== void 0
              ? r
              : t == null ||
                (o = t.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && i !== void 0
            ? i
            : h.firstWeekContainsDate) !== null && a !== void 0
          ? a
          : (c = h.locale) === null ||
            c === void 0 ||
            (d = c.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1
    ),
    v = Eu(e, t),
    g = new Date(0);
  g.setUTCFullYear(v, 0, f), g.setUTCHours(0, 0, 0, 0);
  var b = zi(g, t);
  return b;
}
var D0 = 6048e5;
function V0(e, t) {
  me(1, arguments);
  var n = Qe(e),
    a = zi(n, t).getTime() - R0(n, t).getTime();
  return Math.round(a / D0) + 1;
}
function O(e, t) {
  for (var n = e < 0 ? "-" : "", a = Math.abs(e).toString(); a.length < t; )
    a = "0" + a;
  return n + a;
}
var H0 = {
  y: function (t, n) {
    var a = t.getUTCFullYear(),
      i = a > 0 ? a : 1 - a;
    return O(n === "yy" ? i % 100 : i, n.length);
  },
  M: function (t, n) {
    var a = t.getUTCMonth();
    return n === "M" ? String(a + 1) : O(a + 1, 2);
  },
  d: function (t, n) {
    return O(t.getUTCDate(), n.length);
  },
  a: function (t, n) {
    var a = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  h: function (t, n) {
    return O(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function (t, n) {
    return O(t.getUTCHours(), n.length);
  },
  m: function (t, n) {
    return O(t.getUTCMinutes(), n.length);
  },
  s: function (t, n) {
    return O(t.getUTCSeconds(), n.length);
  },
  S: function (t, n) {
    var a = n.length,
      i = t.getUTCMilliseconds(),
      r = Math.floor(i * Math.pow(10, a - 3));
    return O(r, n.length);
  },
};
const lt = H0;
var Kt = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  U0 = {
    G: function (t, n, a) {
      var i = t.getUTCFullYear() > 0 ? 1 : 0;
      switch (n) {
        case "G":
        case "GG":
        case "GGG":
          return a.era(i, { width: "abbreviated" });
        case "GGGGG":
          return a.era(i, { width: "narrow" });
        case "GGGG":
        default:
          return a.era(i, { width: "wide" });
      }
    },
    y: function (t, n, a) {
      if (n === "yo") {
        var i = t.getUTCFullYear(),
          r = i > 0 ? i : 1 - i;
        return a.ordinalNumber(r, { unit: "year" });
      }
      return lt.y(t, n);
    },
    Y: function (t, n, a, i) {
      var r = Eu(t, i),
        o = r > 0 ? r : 1 - r;
      if (n === "YY") {
        var s = o % 100;
        return O(s, 2);
      }
      return n === "Yo" ? a.ordinalNumber(o, { unit: "year" }) : O(o, n.length);
    },
    R: function (t, n) {
      var a = Cu(t);
      return O(a, n.length);
    },
    u: function (t, n) {
      var a = t.getUTCFullYear();
      return O(a, n.length);
    },
    Q: function (t, n, a) {
      var i = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case "Q":
          return String(i);
        case "QQ":
          return O(i, 2);
        case "Qo":
          return a.ordinalNumber(i, { unit: "quarter" });
        case "QQQ":
          return a.quarter(i, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return a.quarter(i, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return a.quarter(i, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, n, a) {
      var i = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case "q":
          return String(i);
        case "qq":
          return O(i, 2);
        case "qo":
          return a.ordinalNumber(i, { unit: "quarter" });
        case "qqq":
          return a.quarter(i, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return a.quarter(i, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return a.quarter(i, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, n, a) {
      var i = t.getUTCMonth();
      switch (n) {
        case "M":
        case "MM":
          return lt.M(t, n);
        case "Mo":
          return a.ordinalNumber(i + 1, { unit: "month" });
        case "MMM":
          return a.month(i, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return a.month(i, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return a.month(i, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, n, a) {
      var i = t.getUTCMonth();
      switch (n) {
        case "L":
          return String(i + 1);
        case "LL":
          return O(i + 1, 2);
        case "Lo":
          return a.ordinalNumber(i + 1, { unit: "month" });
        case "LLL":
          return a.month(i, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return a.month(i, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return a.month(i, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, n, a, i) {
      var r = V0(t, i);
      return n === "wo" ? a.ordinalNumber(r, { unit: "week" }) : O(r, n.length);
    },
    I: function (t, n, a) {
      var i = L0(t);
      return n === "Io" ? a.ordinalNumber(i, { unit: "week" }) : O(i, n.length);
    },
    d: function (t, n, a) {
      return n === "do"
        ? a.ordinalNumber(t.getUTCDate(), { unit: "date" })
        : lt.d(t, n);
    },
    D: function (t, n, a) {
      var i = M0(t);
      return n === "Do"
        ? a.ordinalNumber(i, { unit: "dayOfYear" })
        : O(i, n.length);
    },
    E: function (t, n, a) {
      var i = t.getUTCDay();
      switch (n) {
        case "E":
        case "EE":
        case "EEE":
          return a.day(i, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return a.day(i, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return a.day(i, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return a.day(i, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, n, a, i) {
      var r = t.getUTCDay(),
        o = (r - i.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "e":
          return String(o);
        case "ee":
          return O(o, 2);
        case "eo":
          return a.ordinalNumber(o, { unit: "day" });
        case "eee":
          return a.day(r, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return a.day(r, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return a.day(r, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return a.day(r, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, n, a, i) {
      var r = t.getUTCDay(),
        o = (r - i.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "c":
          return String(o);
        case "cc":
          return O(o, n.length);
        case "co":
          return a.ordinalNumber(o, { unit: "day" });
        case "ccc":
          return a.day(r, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return a.day(r, { width: "narrow", context: "standalone" });
        case "cccccc":
          return a.day(r, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return a.day(r, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, n, a) {
      var i = t.getUTCDay(),
        r = i === 0 ? 7 : i;
      switch (n) {
        case "i":
          return String(r);
        case "ii":
          return O(r, n.length);
        case "io":
          return a.ordinalNumber(r, { unit: "day" });
        case "iii":
          return a.day(i, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return a.day(i, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return a.day(i, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return a.day(i, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, n, a) {
      var i = t.getUTCHours(),
        r = i / 12 >= 1 ? "pm" : "am";
      switch (n) {
        case "a":
        case "aa":
          return a.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return a
            .dayPeriod(r, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return a.dayPeriod(r, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return a.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, n, a) {
      var i = t.getUTCHours(),
        r;
      switch (
        (i === 12
          ? (r = Kt.noon)
          : i === 0
          ? (r = Kt.midnight)
          : (r = i / 12 >= 1 ? "pm" : "am"),
        n)
      ) {
        case "b":
        case "bb":
          return a.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return a
            .dayPeriod(r, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return a.dayPeriod(r, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return a.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, n, a) {
      var i = t.getUTCHours(),
        r;
      switch (
        (i >= 17
          ? (r = Kt.evening)
          : i >= 12
          ? (r = Kt.afternoon)
          : i >= 4
          ? (r = Kt.morning)
          : (r = Kt.night),
        n)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return a.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return a.dayPeriod(r, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return a.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, n, a) {
      if (n === "ho") {
        var i = t.getUTCHours() % 12;
        return i === 0 && (i = 12), a.ordinalNumber(i, { unit: "hour" });
      }
      return lt.h(t, n);
    },
    H: function (t, n, a) {
      return n === "Ho"
        ? a.ordinalNumber(t.getUTCHours(), { unit: "hour" })
        : lt.H(t, n);
    },
    K: function (t, n, a) {
      var i = t.getUTCHours() % 12;
      return n === "Ko" ? a.ordinalNumber(i, { unit: "hour" }) : O(i, n.length);
    },
    k: function (t, n, a) {
      var i = t.getUTCHours();
      return (
        i === 0 && (i = 24),
        n === "ko" ? a.ordinalNumber(i, { unit: "hour" }) : O(i, n.length)
      );
    },
    m: function (t, n, a) {
      return n === "mo"
        ? a.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
        : lt.m(t, n);
    },
    s: function (t, n, a) {
      return n === "so"
        ? a.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
        : lt.s(t, n);
    },
    S: function (t, n) {
      return lt.S(t, n);
    },
    X: function (t, n, a, i) {
      var r = i._originalDate || t,
        o = r.getTimezoneOffset();
      if (o === 0) return "Z";
      switch (n) {
        case "X":
          return Hl(o);
        case "XXXX":
        case "XX":
          return It(o);
        case "XXXXX":
        case "XXX":
        default:
          return It(o, ":");
      }
    },
    x: function (t, n, a, i) {
      var r = i._originalDate || t,
        o = r.getTimezoneOffset();
      switch (n) {
        case "x":
          return Hl(o);
        case "xxxx":
        case "xx":
          return It(o);
        case "xxxxx":
        case "xxx":
        default:
          return It(o, ":");
      }
    },
    O: function (t, n, a, i) {
      var r = i._originalDate || t,
        o = r.getTimezoneOffset();
      switch (n) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Vl(o, ":");
        case "OOOO":
        default:
          return "GMT" + It(o, ":");
      }
    },
    z: function (t, n, a, i) {
      var r = i._originalDate || t,
        o = r.getTimezoneOffset();
      switch (n) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Vl(o, ":");
        case "zzzz":
        default:
          return "GMT" + It(o, ":");
      }
    },
    t: function (t, n, a, i) {
      var r = i._originalDate || t,
        o = Math.floor(r.getTime() / 1e3);
      return O(o, n.length);
    },
    T: function (t, n, a, i) {
      var r = i._originalDate || t,
        o = r.getTime();
      return O(o, n.length);
    },
  };
function Vl(e, t) {
  var n = e > 0 ? "-" : "+",
    a = Math.abs(e),
    i = Math.floor(a / 60),
    r = a % 60;
  if (r === 0) return n + String(i);
  var o = t || "";
  return n + String(i) + o + O(r, 2);
}
function Hl(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + O(Math.abs(e) / 60, 2);
  }
  return It(e, t);
}
function It(e, t) {
  var n = t || "",
    a = e > 0 ? "-" : "+",
    i = Math.abs(e),
    r = O(Math.floor(i / 60), 2),
    o = O(i % 60, 2);
  return a + r + n + o;
}
const F0 = U0;
var Ul = function (t, n) {
    switch (t) {
      case "P":
        return n.date({ width: "short" });
      case "PP":
        return n.date({ width: "medium" });
      case "PPP":
        return n.date({ width: "long" });
      case "PPPP":
      default:
        return n.date({ width: "full" });
    }
  },
  ju = function (t, n) {
    switch (t) {
      case "p":
        return n.time({ width: "short" });
      case "pp":
        return n.time({ width: "medium" });
      case "ppp":
        return n.time({ width: "long" });
      case "pppp":
      default:
        return n.time({ width: "full" });
    }
  },
  G0 = function (t, n) {
    var a = t.match(/(P+)(p+)?/) || [],
      i = a[1],
      r = a[2];
    if (!r) return Ul(t, n);
    var o;
    switch (i) {
      case "P":
        o = n.dateTime({ width: "short" });
        break;
      case "PP":
        o = n.dateTime({ width: "medium" });
        break;
      case "PPP":
        o = n.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        o = n.dateTime({ width: "full" });
        break;
    }
    return o.replace("{{date}}", Ul(i, n)).replace("{{time}}", ju(r, n));
  },
  W0 = { p: ju, P: G0 };
const Y0 = W0;
var q0 = ["D", "DD"],
  Q0 = ["YY", "YYYY"];
function Z0(e) {
  return q0.indexOf(e) !== -1;
}
function X0(e) {
  return Q0.indexOf(e) !== -1;
}
function Fl(e, t, n) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var J0 = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  K0 = function (t, n, a) {
    var i,
      r = J0[t];
    return (
      typeof r == "string"
        ? (i = r)
        : n === 1
        ? (i = r.one)
        : (i = r.other.replace("{{count}}", n.toString())),
      a != null && a.addSuffix
        ? a.comparison && a.comparison > 0
          ? "in " + i
          : i + " ago"
        : i
    );
  };
const $0 = K0;
function bn(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.width ? String(t.width) : e.defaultWidth,
      a = e.formats[n] || e.formats[e.defaultWidth];
    return a;
  };
}
var ev = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  tv = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  nv = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  av = {
    date: bn({ formats: ev, defaultWidth: "full" }),
    time: bn({ formats: tv, defaultWidth: "full" }),
    dateTime: bn({ formats: nv, defaultWidth: "full" }),
  };
const iv = av;
var rv = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  ov = function (t, n, a, i) {
    return rv[t];
  };
const sv = ov;
function Ge(e) {
  return function (t, n) {
    var a = n != null && n.context ? String(n.context) : "standalone",
      i;
    if (a === "formatting" && e.formattingValues) {
      var r = e.defaultFormattingWidth || e.defaultWidth,
        o = n != null && n.width ? String(n.width) : r;
      i = e.formattingValues[o] || e.formattingValues[r];
    } else {
      var s = e.defaultWidth,
        c = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[c] || e.values[s];
    }
    var d = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[d];
  };
}
var lv = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  cv = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  dv = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  uv = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  pv = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  mv = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  fv = function (t, n) {
    var a = Number(t),
      i = a % 100;
    if (i > 20 || i < 10)
      switch (i % 10) {
        case 1:
          return a + "st";
        case 2:
          return a + "nd";
        case 3:
          return a + "rd";
      }
    return a + "th";
  },
  vv = {
    ordinalNumber: fv,
    era: Ge({ values: lv, defaultWidth: "wide" }),
    quarter: Ge({
      values: cv,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return t - 1;
      },
    }),
    month: Ge({ values: dv, defaultWidth: "wide" }),
    day: Ge({ values: uv, defaultWidth: "wide" }),
    dayPeriod: Ge({
      values: pv,
      defaultWidth: "wide",
      formattingValues: mv,
      defaultFormattingWidth: "wide",
    }),
  };
const hv = vv;
function We(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a = n.width,
      i = (a && e.matchPatterns[a]) || e.matchPatterns[e.defaultMatchWidth],
      r = t.match(i);
    if (!r) return null;
    var o = r[0],
      s = (a && e.parsePatterns[a]) || e.parsePatterns[e.defaultParseWidth],
      c = Array.isArray(s)
        ? bv(s, function (f) {
            return f.test(o);
          })
        : gv(s, function (f) {
            return f.test(o);
          }),
      d;
    (d = e.valueCallback ? e.valueCallback(c) : c),
      (d = n.valueCallback ? n.valueCallback(d) : d);
    var h = t.slice(o.length);
    return { value: d, rest: h };
  };
}
function gv(e, t) {
  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
}
function bv(e, t) {
  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function zu(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a = t.match(e.matchPattern);
    if (!a) return null;
    var i = a[0],
      r = t.match(e.parsePattern);
    if (!r) return null;
    var o = e.valueCallback ? e.valueCallback(r[0]) : r[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    var s = t.slice(i.length);
    return { value: o, rest: s };
  };
}
var _v = /^(\d+)(th|st|nd|rd)?/i,
  yv = /\d+/i,
  wv = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  xv = { any: [/^b/i, /^(a|c)/i] },
  kv = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Av = { any: [/1/i, /2/i, /3/i, /4/i] },
  Sv = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Cv = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Ev = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  jv = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  zv = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Nv = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  Tv = {
    ordinalNumber: zu({
      matchPattern: _v,
      parsePattern: yv,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: We({
      matchPatterns: wv,
      defaultMatchWidth: "wide",
      parsePatterns: xv,
      defaultParseWidth: "any",
    }),
    quarter: We({
      matchPatterns: kv,
      defaultMatchWidth: "wide",
      parsePatterns: Av,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: We({
      matchPatterns: Sv,
      defaultMatchWidth: "wide",
      parsePatterns: Cv,
      defaultParseWidth: "any",
    }),
    day: We({
      matchPatterns: Ev,
      defaultMatchWidth: "wide",
      parsePatterns: jv,
      defaultParseWidth: "any",
    }),
    dayPeriod: We({
      matchPatterns: zv,
      defaultMatchWidth: "any",
      parsePatterns: Nv,
      defaultParseWidth: "any",
    }),
  };
const Pv = Tv;
var Bv = {
  code: "en-US",
  formatDistance: $0,
  formatLong: iv,
  formatRelative: sv,
  localize: hv,
  match: Pv,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
const Mv = Bv;
var Ov = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Iv = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Lv = /^'([^]*?)'?$/,
  Rv = /''/g,
  Dv = /[a-zA-Z]/;
function Vv(e, t, n) {
  var a, i, r, o, s, c, d, h, f, v, g, b, y, z, p, u, m, _;
  me(2, arguments);
  var x = String(t),
    C = Zi(),
    E =
      (a =
        (i = n == null ? void 0 : n.locale) !== null && i !== void 0
          ? i
          : C.locale) !== null && a !== void 0
        ? a
        : Mv,
    j = Qt(
      (r =
        (o =
          (s =
            (c = n == null ? void 0 : n.firstWeekContainsDate) !== null &&
            c !== void 0
              ? c
              : n == null ||
                (d = n.locale) === null ||
                d === void 0 ||
                (h = d.options) === null ||
                h === void 0
              ? void 0
              : h.firstWeekContainsDate) !== null && s !== void 0
            ? s
            : C.firstWeekContainsDate) !== null && o !== void 0
          ? o
          : (f = C.locale) === null ||
            f === void 0 ||
            (v = f.options) === null ||
            v === void 0
          ? void 0
          : v.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1
    );
  if (!(j >= 1 && j <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var R = Qt(
    (g =
      (b =
        (y =
          (z = n == null ? void 0 : n.weekStartsOn) !== null && z !== void 0
            ? z
            : n == null ||
              (p = n.locale) === null ||
              p === void 0 ||
              (u = p.options) === null ||
              u === void 0
            ? void 0
            : u.weekStartsOn) !== null && y !== void 0
          ? y
          : C.weekStartsOn) !== null && b !== void 0
        ? b
        : (m = C.locale) === null ||
          m === void 0 ||
          (_ = m.options) === null ||
          _ === void 0
        ? void 0
        : _.weekStartsOn) !== null && g !== void 0
      ? g
      : 0
  );
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!E.localize)
    throw new RangeError("locale must contain localize property");
  if (!E.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var T = Qe(e);
  if (!T0(T)) throw new RangeError("Invalid time value");
  var _e = z0(T),
    Nt = P0(T, _e),
    Tt = {
      firstWeekContainsDate: j,
      weekStartsOn: R,
      locale: E,
      _originalDate: T,
    },
    xa = x
      .match(Iv)
      .map(function (le) {
        var Ce = le[0];
        if (Ce === "p" || Ce === "P") {
          var ot = Y0[Ce];
          return ot(le, E.formatLong);
        }
        return le;
      })
      .join("")
      .match(Ov)
      .map(function (le) {
        if (le === "''") return "'";
        var Ce = le[0];
        if (Ce === "'") return Hv(le);
        var ot = F0[Ce];
        if (ot)
          return (
            !(n != null && n.useAdditionalWeekYearTokens) &&
              X0(le) &&
              Fl(le, t, String(e)),
            !(n != null && n.useAdditionalDayOfYearTokens) &&
              Z0(le) &&
              Fl(le, t, String(e)),
            ot(Nt, le, E.localize, Tt)
          );
        if (Ce.match(Dv))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              Ce +
              "`"
          );
        return le;
      })
      .join("");
  return xa;
}
function Hv(e) {
  var t = e.match(Lv);
  return t ? t[1].replace(Rv, "'") : e;
}
var Uv = {
    lessThanXSeconds: {
      one: "menos de un segundo",
      other: "menos de {{count}} segundos",
    },
    xSeconds: { one: "1 segundo", other: "{{count}} segundos" },
    halfAMinute: "medio minuto",
    lessThanXMinutes: {
      one: "menos de un minuto",
      other: "menos de {{count}} minutos",
    },
    xMinutes: { one: "1 minuto", other: "{{count}} minutos" },
    aboutXHours: {
      one: "alrededor de 1 hora",
      other: "alrededor de {{count}} horas",
    },
    xHours: { one: "1 hora", other: "{{count}} horas" },
    xDays: { one: "1 día", other: "{{count}} días" },
    aboutXWeeks: {
      one: "alrededor de 1 semana",
      other: "alrededor de {{count}} semanas",
    },
    xWeeks: { one: "1 semana", other: "{{count}} semanas" },
    aboutXMonths: {
      one: "alrededor de 1 mes",
      other: "alrededor de {{count}} meses",
    },
    xMonths: { one: "1 mes", other: "{{count}} meses" },
    aboutXYears: {
      one: "alrededor de 1 año",
      other: "alrededor de {{count}} años",
    },
    xYears: { one: "1 año", other: "{{count}} años" },
    overXYears: { one: "más de 1 año", other: "más de {{count}} años" },
    almostXYears: { one: "casi 1 año", other: "casi {{count}} años" },
  },
  Fv = function (t, n, a) {
    var i,
      r = Uv[t];
    return (
      typeof r == "string"
        ? (i = r)
        : n === 1
        ? (i = r.one)
        : (i = r.other.replace("{{count}}", n.toString())),
      a != null && a.addSuffix
        ? a.comparison && a.comparison > 0
          ? "en " + i
          : "hace " + i
        : i
    );
  };
const Gv = Fv;
var Wv = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
    medium: "d MMM y",
    short: "dd/MM/y",
  },
  Yv = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm",
  },
  qv = {
    full: "{{date}} 'a las' {{time}}",
    long: "{{date}} 'a las' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Qv = {
    date: bn({ formats: Wv, defaultWidth: "full" }),
    time: bn({ formats: Yv, defaultWidth: "full" }),
    dateTime: bn({ formats: qv, defaultWidth: "full" }),
  };
const Zv = Qv;
var Xv = {
    lastWeek: "'el' eeee 'pasado a la' p",
    yesterday: "'ayer a la' p",
    today: "'hoy a la' p",
    tomorrow: "'mañana a la' p",
    nextWeek: "eeee 'a la' p",
    other: "P",
  },
  Jv = {
    lastWeek: "'el' eeee 'pasado a las' p",
    yesterday: "'ayer a las' p",
    today: "'hoy a las' p",
    tomorrow: "'mañana a las' p",
    nextWeek: "eeee 'a las' p",
    other: "P",
  },
  Kv = function (t, n, a, i) {
    return n.getUTCHours() !== 1 ? Jv[t] : Xv[t];
  };
const $v = Kv;
var eh = {
    narrow: ["AC", "DC"],
    abbreviated: ["AC", "DC"],
    wide: ["antes de cristo", "después de cristo"],
  },
  th = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"],
  },
  nh = {
    narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    wide: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
  },
  ah = {
    narrow: ["d", "l", "m", "m", "j", "v", "s"],
    short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
    abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    wide: [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ],
  },
  ih = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mn",
      noon: "md",
      morning: "mañana",
      afternoon: "tarde",
      evening: "tarde",
      night: "noche",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "medianoche",
      noon: "mediodia",
      morning: "mañana",
      afternoon: "tarde",
      evening: "tarde",
      night: "noche",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "medianoche",
      noon: "mediodia",
      morning: "mañana",
      afternoon: "tarde",
      evening: "tarde",
      night: "noche",
    },
  },
  rh = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mn",
      noon: "md",
      morning: "de la mañana",
      afternoon: "de la tarde",
      evening: "de la tarde",
      night: "de la noche",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "medianoche",
      noon: "mediodia",
      morning: "de la mañana",
      afternoon: "de la tarde",
      evening: "de la tarde",
      night: "de la noche",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "medianoche",
      noon: "mediodia",
      morning: "de la mañana",
      afternoon: "de la tarde",
      evening: "de la tarde",
      night: "de la noche",
    },
  },
  oh = function (t, n) {
    var a = Number(t);
    return a + "º";
  },
  sh = {
    ordinalNumber: oh,
    era: Ge({ values: eh, defaultWidth: "wide" }),
    quarter: Ge({
      values: th,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return Number(t) - 1;
      },
    }),
    month: Ge({ values: nh, defaultWidth: "wide" }),
    day: Ge({ values: ah, defaultWidth: "wide" }),
    dayPeriod: Ge({
      values: ih,
      defaultWidth: "wide",
      formattingValues: rh,
      defaultFormattingWidth: "wide",
    }),
  };
const lh = sh;
var ch = /^(\d+)(º)?/i,
  dh = /\d+/i,
  uh = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
    wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i,
  },
  ph = {
    any: [/^ac/i, /^dc/i],
    wide: [
      /^(antes de cristo|antes de la era com[uú]n)/i,
      /^(despu[eé]s de cristo|era com[uú]n)/i,
    ],
  },
  mh = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](º)? trimestre/i,
  },
  fh = { any: [/1/i, /2/i, /3/i, /4/i] },
  vh = {
    narrow: /^[efmajsond]/i,
    abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
    wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  },
  hh = {
    narrow: [
      /^e/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^en/i,
      /^feb/i,
      /^mar/i,
      /^abr/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^ago/i,
      /^sep/i,
      /^oct/i,
      /^nov/i,
      /^dic/i,
    ],
  },
  gh = {
    narrow: /^[dlmjvs]/i,
    short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
    abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
    wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i,
  },
  bh = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
    any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i],
  },
  _h = {
    narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
    any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i,
  },
  yh = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mn/i,
      noon: /^md/i,
      morning: /mañana/i,
      afternoon: /tarde/i,
      evening: /tarde/i,
      night: /noche/i,
    },
  },
  wh = {
    ordinalNumber: zu({
      matchPattern: ch,
      parsePattern: dh,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: We({
      matchPatterns: uh,
      defaultMatchWidth: "wide",
      parsePatterns: ph,
      defaultParseWidth: "any",
    }),
    quarter: We({
      matchPatterns: mh,
      defaultMatchWidth: "wide",
      parsePatterns: fh,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: We({
      matchPatterns: vh,
      defaultMatchWidth: "wide",
      parsePatterns: hh,
      defaultParseWidth: "any",
    }),
    day: We({
      matchPatterns: gh,
      defaultMatchWidth: "wide",
      parsePatterns: bh,
      defaultParseWidth: "any",
    }),
    dayPeriod: We({
      matchPatterns: _h,
      defaultMatchWidth: "any",
      parsePatterns: yh,
      defaultParseWidth: "any",
    }),
  };
const xh = wh;
var kh = {
  code: "es",
  formatDistance: Gv,
  formatLong: Zv,
  formatRelative: $v,
  localize: lh,
  match: xh,
  options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
};
const Ah = kh,
  ys = ({ closeSidebar: e }) => {
    const n = Vv(new Date(), "dd MMM yyyy HH:mm", { locale: Ah });
    return l.jsx("div", {
      className: "sidebar",
      children: l.jsxs("div", {
        className: "sidebar-content",
        children: [
          l.jsx("div", {
            className: "allSizes close",
            onClick: e,
            style: {
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            },
            children: l.jsx("svg", {
              viewBox: "0 0 260 260",
              preserveAspectRatio: "xMidYMid meet",
              focusable: "false",
              "aria-hidden": "true",
              style: {
                pointerEvents: "none",
                display: "block",
                width: "24px",
                height: "100%",
                overflow: "hidden",
              },
              children: l.jsx("path", {
                d: "M56.4 220 40 203.6l74.44-74.34L41.58 56.4 56.4 41.58l72.86 72.86L203.6 40 220 56.4l-74.44 74.34L220 205.07 205.07 220l-74.33-74.44L56.4 220z",
              }),
            }),
          }),
          l.jsx("p", { className: "heading", children: "Perfil" }),
          l.jsx("div", {
            className: "scroller",
            children: l.jsxs("div", {
              style: { width: "380px" },
              children: [
                l.jsxs("section", {
                  className: "user-info",
                  children: [
                    l.jsxs("article", {
                      id: "avatar",
                      className: "avatar",
                      children: [
                        l.jsxs("div", {
                          className:
                            "right-col__list-item--clickable initials-clip-box",
                          children: [
                            l.jsx("svg", {
                              className: "fill",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 10 10",
                              children: l.jsx("rect", {
                                width: "10",
                                height: "5",
                                y: "5",
                              }),
                            }),
                            l.jsx("div", {
                              className: "content",
                              role: "img",
                              "aria-label": "Perfil",
                              "aria-hidden": "false",
                              children: l.jsxs("slot", {
                                name: "content",
                                children: [
                                  " ",
                                  l.jsx("span", {
                                    className: "text",
                                    children: "5 ",
                                  }),
                                  " ",
                                ],
                              }),
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          children: [
                            l.jsxs("p", {
                              className: "user-name",
                              children: [
                                "45877341T-AMALIA ",
                                l.jsx("br", {}),
                                " DIEZ ANGULAR",
                              ],
                            }),
                            l.jsx("p", {
                              className: "user-role",
                              children: "Administrador",
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsx("p", {
                      id: "company",
                      className: "corp",
                      children: "TECH AI SOLUTIONS S.L. / B16733495",
                    }),
                    l.jsx("p", {
                      id: "reference",
                      className: "corp",
                      children: "Código de empresa: 20714535",
                    }),
                  ],
                }),
                l.jsx("section", {
                  className: "scrollable ",
                  children: l.jsxs("div", {
                    className: "scrollable-content",
                    children: [
                      l.jsx("div", {
                        className: "panel-card",
                        children: l.jsx("div", {
                          className: "container-card",
                          children: l.jsx("div", {
                            className: "content-card",
                            children: l.jsxs("div", {
                              children: [
                                l.jsx("div", {
                                  className: "text2",
                                  children: "Tu perfil y configuración",
                                }),
                                l.jsxs("p", {
                                  className: "card-text",
                                  children: [
                                    "Accede y edita tu información personal, cambia idioma, zona horaria, formatos de importes y hora.",
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      l.jsx("div", {
                        className: "panel-card",
                        children: l.jsx("div", {
                          className: "container-card",
                          children: l.jsx("div", {
                            className: "content-card",
                            children: l.jsxs("div", {
                              children: [
                                l.jsx("div", {
                                  className: "text2",
                                  children: "Agenda",
                                }),
                                l.jsx("p", {
                                  className: "card-text",
                                  children:
                                    "Accede a la información de tus contactos.",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      l.jsx("div", {
                        className: "panel-card",
                        children: l.jsx("div", {
                          className: "container-card",
                          children: l.jsx("div", {
                            className: "content-card",
                            children: l.jsxs("div", {
                              children: [
                                l.jsx("div", {
                                  className: "text2",
                                  children: "Administración de usuarios",
                                }),
                                l.jsx("p", {
                                  className: "card-text",
                                  children:
                                    "Define los permisos de los usuarios.",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      l.jsx("div", {
                        className: "panel-card",
                        children: l.jsx("div", {
                          className: "container-card",
                          children: l.jsx("div", {
                            className: "content-card",
                            children: l.jsxs("div", {
                              children: [
                                l.jsx("div", {
                                  className: "text2",
                                  children: "Gestión de dispositivos",
                                }),
                                l.jsx("p", {
                                  className: "card-text",
                                  children: "Administra y solicita los tokens.",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      l.jsx("div", {
                        className: "panel-card",
                        children: l.jsx("div", {
                          className: "container-card",
                          children: l.jsx("div", {
                            className: "content-card",
                            children: l.jsxs("div", {
                              children: [
                                l.jsx("div", {
                                  className: "text2",
                                  children: "Auditoría",
                                }),
                                l.jsx("p", {
                                  className: "card-text",
                                  children:
                                    "Consulta el histórico de cambios en los permisos de los usuarios.",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                l.jsxs("footer", {
                  className: "footer",
                  children: [
                    l.jsxs("div", {
                      id: "footer-links",
                      className: "footer-links",
                      children: [
                        l.jsx("div", {
                          "data-id": "tarifas",
                          role: "link",
                          "aria-disabled": "false",
                          className: "text2",
                          children: "Tarifas",
                        }),
                        l.jsx("div", {
                          "data-id": "seguridad",
                          role: "link",
                          "aria-disabled": "false",
                          className: "text2",
                          children: "Seguridad",
                        }),
                      ],
                    }),
                    l.jsxs("p", {
                      className: "connection",
                      children: [
                        "Última conexión: ",
                        l.jsx("span", { className: "fecha", children: n }),
                        " ",
                        "(GMT+1)",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Sh = () => {
    const [e, t] = S.useState(!1),
      n = () => {
        t(!0);
      },
      a = () => {
        t(!1);
      };
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx(hs, {}),
        l.jsx(gs, { handle: n }),
        l.jsxs("section", {
          className:
            " w-[86vw] h-[120vh] absolute right-0 top-[15vh] flex flex-col z-1   items-center ",
          children: [
            l.jsxs("div", {
              className: "flex  w-[90%] h-[30vh]  justify-around ",
              children: [
                l.jsxs("div", {
                  className:
                    "bg-white p-6 rounded-sm shadow-lg w-[45%] h-[25vh] overflow-hidden",
                  children: [
                    l.jsx("h1", {
                      className:
                        "font-benton-sans font-sans  font-semibold  text-base text-gray-800",
                      children: "ACCIONES RAPIDAS",
                    }),
                    l.jsxs("div", {
                      className:
                        "flex w-[90%] h-[70%] ml-[5%] items-center justify-evenly mt-[2%]",
                      children: [
                        l.jsxs("div", {
                          className: "w-[150px] items-center flex flex-col",
                          children: [
                            l.jsx("img", { src: n0 }),
                            l.jsx("a", {
                              className:
                                "text-center text-infoBlue font-semibold  text-[12px]",
                              children: "Realizar transferencia individual",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "w-[150px] items-center flex flex-col",
                          children: [
                            l.jsx("img", { src: a0 }),
                            l.jsx("a", {
                              className:
                                "text-center text-infoBlue font-semibold  text-[12px]",
                              children: "Realizar transferencia individual",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "w-[150px] items-center flex flex-col",
                          children: [
                            l.jsx("img", { src: Rl }),
                            l.jsx("a", {
                              className:
                                "text-center text-infoBlue font-semibold  text-[12px]",
                              children: "Realizar transferencia individual",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "w-[150px] items-center flex flex-col",
                          children: [
                            l.jsx("img", { src: Rl }),
                            l.jsx("a", {
                              className:
                                "text-center text-infoBlue font-semibold  text-[12px]",
                              children: "Correspondencia virtual",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "bg-white p-6 rounded-sm shadow-lg w-[45%] h-[25vh]",
                  children: [
                    l.jsx("h1", {
                      className:
                        "font-benton-sans font-sans  font-semibold  text-base text-gray-800",
                      children: "FIRMAS PENDIENTES",
                    }),
                    l.jsxs("p", {
                      className:
                        "text-gray-800 flex items-center gap-[10px] mt-[5%]",
                      children: [
                        l.jsx(S0, { color: "#49a5e6", size: 32 }),
                        "No tienes ninguna operacion pendiente de firma",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className: "flex w-[85%]  h-[10vh] justify-between items-center",
              children: [
                l.jsx("h1", {
                  className:
                    "font-sans font-normal tracking-normal text-gray-800  text-[24px] leading-normal  small-caps-normal normal-nums-normal ordinal-normal tabular-nums-normal diagonal-fractions-normal stacked-fractions-normal",
                  children: "Posicion de cuentas por banco",
                }),
                l.jsxs("div", {
                  className: "flex items-center gap-[20px]",
                  children: [
                    " ",
                    l.jsxs("div", {
                      className: "flex items-center gap-[10px]",
                      children: [
                        l.jsx(Su, { color: "#1973b8", size: 25 }),
                        l.jsx("a", {
                          className:
                            "text-infoBlue   font-semibold text-[18px]",
                          children: "configurar cuentas",
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex items-center gap-[10px]",
                      children: [
                        l.jsx(bs, { color: "#1973b8", size: 25 }),
                        l.jsx("a", {
                          className:
                            "text-infoBlue   font-semibold text-[18px]",
                          children: "Imprimir",
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex items-center gap-[10px]",
                      children: [
                        l.jsx(_s, { color: "#1973b8", size: 25 }),
                        l.jsx("a", {
                          className:
                            "text-infoBlue   font-semibold text-[18px]",
                          children: "Exportar",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsx(Au, {}),
            l.jsxs("div", {
              className:
                "flex w-[85%] h-[12vh] items-center bg-white p-10 border  rounded-sm shadow-xl  gap-[30px] ",
              children: [
                l.jsxs("div", {
                  className: "flex gap-[15px]",
                  children: [
                    l.jsx("img", { src: bu, width: 45 }),
                    l.jsx("img", { src: _u, width: 45 }),
                    l.jsx("img", { src: hu, width: 45 }),
                    l.jsx("img", { src: gu, width: 45 }),
                    l.jsx("img", { src: yu, width: 45 }),
                  ],
                }),
                l.jsx("div", {
                  className:
                    "border-l-[3px] border-gray-400 h-[4vh] w-[3px] ml-10",
                }),
                l.jsx("p", {
                  className: "text-[22px] text-gray-600",
                  children:
                    "Añade más bancos para tener una visión completa de tu tesorería.",
                }),
                l.jsx("button", {
                  className:
                    " h-[7vh] w-[15%] ml-[10%] text-white font-bold text-[20px] bg-infoBlue",
                  children: "Añadir banco",
                }),
              ],
            }),
            l.jsx("div", {
              className: "w-[85%] mt-[5vh]",
              children: l.jsxs("h2", {
                className: "text-[35px] text-gray-700 font-light",
                children: [" ", "Tu impacto ambiental"],
              }),
            }),
            l.jsxs("div", {
              className:
                "flex w-[85%] h-[14vh] items-center bg-white p-10 border  rounded-sm shadow-xl  justify-evenly",
              children: [
                l.jsx("img", { src: i0, height: 70 }),
                l.jsx("h2", {
                  className: "text-[35px] font-bold",
                  children:
                    "¿Sabes cúanto gastas en energía y cúanto podrías ahorrar?",
                }),
                l.jsx("button", {
                  className:
                    "h-[7vh] w-[15%] ml-[0%] text-white font-bold text-[20px] bg-infoBlue",
                  children: "Saber más",
                }),
              ],
            }),
          ],
        }),
        e && l.jsx(ys, { closeSidebar: a }),
      ],
    });
  };
function Nu(e) {
  return Be({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z",
        },
      },
    ],
  })(e);
}
function Tu(e) {
  return Be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "path", attr: { d: "M14 3v4a1 1 0 0 0 1 1h4" } },
      {
        tag: "path",
        attr: { d: "M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" },
      },
      { tag: "path", attr: { d: "M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" } },
      { tag: "path", attr: { d: "M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" } },
    ],
  })(e);
}
function Pu(e) {
  return Be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      {
        tag: "path",
        attr: { d: "M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" },
      },
      { tag: "path", attr: { d: "M18 12v-5a2 2 0 0 0 -2 -2h-2" } },
      {
        tag: "path",
        attr: {
          d: "M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",
        },
      },
      { tag: "path", attr: { d: "M8 11h4" } },
      { tag: "path", attr: { d: "M8 15h3" } },
      {
        tag: "path",
        attr: { d: "M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" },
      },
      { tag: "path", attr: { d: "M18.5 19.5l2.5 2.5" } },
    ],
  })(e);
}
const Gl = ({ image: e = "", title: t = "", description: n = "" }) =>
    l.jsxs("div", {
      className:
        "w-[20vw] h-[45vh] bg-gray-200 flex flex-col justify-start gap-[20px]",
      children: [
        l.jsx("img", {
          alt: "",
          id: "image",
          className: "w-full h-[60%]",
          "aria-hidden": "true",
          src: e,
        }),
        l.jsx("h1", { className: "text-[35px] ml-[30px]", children: t }),
        l.jsx("p", {
          className: "text-[20px] ml-[30px] text-gray-500 text-left w-[80%]",
          children: n,
        }),
      ],
    }),
  Ch = () => {
    const [e, t] = S.useState(!1),
      n = () => {
        t(!0);
      },
      a = () => {
        t(!1);
      };
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx(hs, {}),
        l.jsx(gs, { handle: n }),
        l.jsxs("section", {
          className:
            " w-[86vw] h-[120vh] absolute right-0 top-[15vh] flex flex-col z-1  gap-[20px] items-center ",
          children: [
            l.jsx("div", {
              className: "w-[85%] flex",
              children: l.jsx("h1", {
                className: "text-[25px] text-gray-800  font-light font-sans",
                children: "Posición de cuentas",
              }),
            }),
            l.jsx("div", {
              className:
                "flex  w-[85%] h-[10vh]  justify-around border border-gray-100",
              children: l.jsxs("div", {
                className:
                  "bg-white p-6 rounded-sm shadow-lg w-full h-full flex gap-[30px] font-sans",
                children: [
                  l.jsxs("div", {
                    className: "flex items-center gap-[10px]",
                    children: [
                      l.jsx(Nu, { color: "#1973b8", size: 30 }),
                      l.jsx("a", {
                        className: "text-infoBlue   font-semibold text-[20px]",
                        children: "Tesoreria",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex items-center gap-[10px]",
                    children: [
                      l.jsx(Tu, { color: "#1973b8", size: 30 }),
                      l.jsx("a", {
                        className: "text-infoBlue   font-semibold text-[20px]",
                        children: "Certificados",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex items-center gap-[10px]",
                    children: [
                      l.jsx(Pu, { color: "#1973b8", size: 30 }),
                      l.jsx("a", {
                        className: "text-infoBlue   font-semibold text-[20px]",
                        children: "Saldos e informes",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex items-center gap-[10px]",
                    children: [
                      l.jsx(ku, { color: "#1973b8", size: 30 }),
                      l.jsx("a", {
                        className: "text-infoBlue   font-semibold text-[20px]",
                        children: "Correspondencia virtual",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            l.jsxs("div", {
              className: "flex w-[85%]  h-[10vh] justify-between items-center",
              children: [
                l.jsx("h1", {
                  className:
                    "font-sans font-normal tracking-normal text-gray-800  text-[24px] leading-normal  small-caps-normal normal-nums-normal ordinal-normal tabular-nums-normal diagonal-fractions-normal stacked-fractions-normal",
                  children: "Posicion de cuentas por banco",
                }),
                l.jsxs("div", {
                  className: "flex items-center gap-[20px]",
                  children: [
                    " ",
                    l.jsxs("div", {
                      className: "flex items-center gap-[10px]",
                      children: [
                        l.jsx(Su, { color: "#1973b8", size: 25 }),
                        l.jsx("a", {
                          className:
                            "text-infoBlue   font-semibold text-[18px]",
                          children: "configurar cuentas",
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex items-center gap-[10px]",
                      children: [
                        l.jsx(bs, { color: "#1973b8", size: 25 }),
                        l.jsx("a", {
                          className:
                            "text-infoBlue   font-semibold text-[18px]",
                          children: "Imprimir",
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex items-center gap-[10px]",
                      children: [
                        l.jsx(_s, { color: "#1973b8", size: 25 }),
                        l.jsx("a", {
                          className:
                            "text-infoBlue   font-semibold text-[18px]",
                          children: "Exportar",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsx(Au, {}),
            l.jsxs("div", {
              className:
                "flex w-[85%] h-[12vh] items-center bg-white p-10 border  rounded-sm shadow-xl  gap-[30px] ",
              children: [
                l.jsxs("div", {
                  className: "flex gap-[15px]",
                  children: [
                    l.jsx("img", { src: bu, width: 45 }),
                    l.jsx("img", { src: _u, width: 45 }),
                    l.jsx("img", { src: hu, width: 45 }),
                    l.jsx("img", { src: gu, width: 45 }),
                    l.jsx("img", { src: yu, width: 45 }),
                  ],
                }),
                l.jsx("div", {
                  className: "border-r-[3px] border-gray-400 h-[4vh] w-[3px]",
                }),
                l.jsx("p", {
                  className: "text-[22px] text-gray-600",
                  children:
                    "Añade más bancos para tener una visión completa de tu tesorería.",
                }),
                l.jsx("button", {
                  className:
                    " h-[7vh] w-[15%] ml-[10%] text-white font-bold text-[20px] bg-infoBlue",
                  children: "Añadir banco",
                }),
              ],
            }),
            l.jsxs("div", {
              className: "w-[85%] mt-[5vh]",
              children: [
                l.jsxs("h2", {
                  className: "text-[30px] text-gray-500 font-light",
                  children: [" ", "SOLUCIONES PARA UNA GESTIÓN MÁS EFICIENTE"],
                }),
                l.jsxs("div", {
                  className: "flex justify-around mt-[20px]",
                  children: [
                    l.jsx(Gl, {
                      image:
                        "https://assets.caasbbva.com/content/dam/caas/spain/ufe/images/cards/cuentas/factoring.jpg",
                      title: "Factoring",
                      description:
                        "Cobra anticipadamente las deudas que otros tengan contigo. En BBVA gestionamos tus créditos comerciales.",
                    }),
                    l.jsx(Gl, {
                      image:
                        "https://assets.caasbbva.com/content/dam/caas/spain/ufe/images/cards/cuentas/confirming.jpg",
                      title: "Confirming",
                      description:
                        "Te anticipamos el cobro del 100 % de las facturas pendientes, sin documentación extra ni estudios previos.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e && l.jsx(ys, { closeSidebar: a }),
      ],
    });
  },
  Eh = () => {
    const [e, t] = S.useState(!1),
      n = () => {
        t(!0);
      },
      a = () => {
        t(!1);
      },
      i = [
        {
          fecha: "21-05-2023",
          clave: "82125216",
          concepto1: "TRANSFERENCIAS",
          concepto2: "-",
          fechaValor: "21-06-2023",
          importes: "100",
          saldo: "45.422,12",
        },
        {
          fecha: "22-05-2023",
          clave: "21514511",
          concepto1: "TRANSFERENCIAS",
          concepto2: "-",
          fechaValor: "22-06-2023",
          importes: "-50",
          saldo: "45.372,12",
        },
        {
          fecha: "23-05-2023",
          clave: "98765432",
          concepto1: "TRANSFERENCIAS",
          concepto2: "-",
          fechaValor: "23-06-2023",
          importes: "200",
          saldo: "45.572,12",
        },
        {
          fecha: "24-05-2023",
          clave: "45678901",
          concepto1: "TRANSFERENCIAS",
          concepto2: "-",
          fechaValor: "24-06-2023",
          importes: "-30",
          saldo: "45.542,12",
        },
        {
          fecha: "25-05-2023",
          clave: "65432109",
          concepto1: "TRANSFERENCIAS",
          concepto2: "-",
          fechaValor: "25-06-2023",
          importes: "-10",
          saldo: "45.532,12",
        },
        {
          fecha: "26-05-2023",
          clave: "98761234",
          concepto1: "TRANSFERENCIAS",
          concepto2: "-",
          fechaValor: "26-06-2023",
          importes: "-20",
          saldo: "45.512,12",
        },
        {
          fecha: "27-05-2023",
          clave: "12345678",
          concepto1: "TRANSFERENCIAS",
          concepto2: "-",
          fechaValor: "27-06-2023",
          importes: "50",
          saldo: "45.562,12",
        },
        {
          fecha: "28-05-2023",
          clave: "87654321",
          concepto1: "TRANSFERENCIAS",
          concepto2: "-",
          fechaValor: "28-06-2023",
          importes: "-20",
          saldo: "45.542,12",
        },
        {
          fecha: "29-05-2023",
          clave: "54321098",
          concepto1: "TRANSFERENCIAS",
          concepto2: "-",
          fechaValor: "29-06-2023",
          importes: "-10",
          saldo: "45.532,12",
        },
      ];
    return l.jsxs(l.Fragment, {
      children: [
        l.jsx(hs, {}),
        l.jsx(gs, { handle: n }),
        l.jsxs("section", {
          className:
            " w-[86vw] h-[120vh] absolute right-0 top-[15vh] flex flex-col z-1  gap-[20px] items-center ",
          children: [
            l.jsx("div", {
              className: "w-[85%] flex",
              children: l.jsx("h1", {
                className: "text-[25px] text-gray-800  font-light font-sans",
                children: "Posición de cuentas",
              }),
            }),
            l.jsx("div", {
              className:
                "flex  w-[85%] h-[30vh]  justify-around border border-gray-100",
              children: l.jsxs("div", {
                className:
                  "bg-white p-6 rounded-sm shadow-lg w-full h-full flex flex-col font-sans gap-[50px]",
                children: [
                  l.jsxs("div", {
                    className: "w-full flex justify-between",
                    children: [
                      l.jsxs("div", {
                        className:
                          "w-[45%] h-[7vh] bg-gray-200 border border-gray-300 flex items-center gap-5",
                        children: [
                          l.jsx("img", {
                            src: vu,
                            width: 50,
                            className: " object-scale-down ml-10",
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col",
                            children: [
                              l.jsx("p", {
                                className:
                                  "text-[20px] text-gray-500 font-bold",
                                children: "Cuenta BBVA EMpresas",
                              }),
                              l.jsx("p", {
                                className: "text-[23px] text-gray-500",
                                children: "ES380182600850005351247",
                              }),
                            ],
                          }),
                          l.jsx(x0, {
                            color: "#1973B8",
                            className: "ml-[28%]",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex gap-10",
                        children: [
                          l.jsxs("div", {
                            className: "flex flex-col items-end",
                            children: [
                              l.jsx("p", {
                                className: "text-[24px] text-gray-500",
                                children: "Disponible",
                              }),
                              l.jsx("p", {
                                className: "text-[24px] text-black font-medium",
                                children: "45.522,12 EUR",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col items-end font-sans",
                            children: [
                              l.jsx("p", {
                                className: "text-[24px] text-gray-500",
                                children: "Saldo en cuenta",
                              }),
                              l.jsx("p", {
                                className: "text-[24px] text-black font-medium",
                                children: "50.504,26 EUR",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex gap-14 font-sans",
                    children: [
                      l.jsx("h1", {
                        className: "text-[32px] text-gray-500",
                        children: "cuenta corriente",
                      }),
                      l.jsx("h1", {
                        className: "text-[32px] text-gray-500",
                        children: "TECH AI SOLUTIONS S.L",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex gap-[30px]",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center gap-[10px]",
                        children: [
                          l.jsx(Nu, { color: "#1973b8", size: 30 }),
                          l.jsx("a", {
                            className:
                              "text-infoBlue   font-semibold text-[20px]",
                            children: "Hacer transferencia",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex items-center gap-[10px]",
                        children: [
                          l.jsx(Tu, { color: "#1973b8", size: 30 }),
                          l.jsx("a", {
                            className:
                              "text-infoBlue   font-semibold text-[20px]",
                            children: "Solicitar certificados",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex items-center gap-[10px]",
                        children: [
                          l.jsx(Pu, { color: "#1973b8", size: 30 }),
                          l.jsx("a", {
                            className:
                              "text-infoBlue   font-semibold text-[20px]",
                            children: "Extracto mensual",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex items-center gap-[10px]",
                        children: [
                          l.jsx(ku, { color: "#1973b8", size: 30 }),
                          l.jsx("a", {
                            className:
                              "text-infoBlue   font-semibold text-[20px]",
                            children: "Más Acciones",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            l.jsx("div", {
              className: "w-[85%] flex justify-start ",
              children: l.jsx("h1", {
                className: "font-sans text-[35px]",
                children: "Últimos movimientos",
              }),
            }),
            l.jsx("div", {
              className: "w-[85%] flex justify-start ",
              children: l.jsx("p", {
                className: "text-[27px] text-gray-500 font-sans",
                children:
                  "El listado muestra como máximo resultados de los últimos 90 días.",
              }),
            }),
            l.jsxs("div", {
              className: "flex justify-between w-[85%]",
              children: [
                l.jsxs("div", {
                  className: "flex gap-5",
                  children: [
                    l.jsx(k0, { color: "#1973b8", size: 20 }),
                    l.jsx("a", {
                      className: "text-infoBlue   font-semibold text-[18px]",
                      children: "Buscar",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "flex gap-10",
                  children: [
                    l.jsxs("div", {
                      className: "flex gap-5",
                      children: [
                        l.jsx(bs, { color: "#1973b8", size: 20 }),
                        l.jsx("a", {
                          className:
                            "text-infoBlue   font-semibold text-[18px]",
                          children: "Imprimir",
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex gap-5",
                      children: [
                        l.jsx(_s, { color: "#1973b8", size: 20 }),
                        l.jsx("a", {
                          className:
                            "text-infoBlue   font-semibold text-[18px]",
                          children: "Exportar",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("table", {
              className: "especial",
              children: [
                l.jsx("thead", {
                  className: "especial",
                  children: l.jsxs("tr", {
                    className: "especial",
                    children: [
                      l.jsx("th", {
                        className: "especial",
                        style: { width: "12%" },
                        children: "F. OPER.",
                      }),
                      l.jsx("th", {
                        className: "especial",
                        style: { width: "12%" },
                        children: "CLAVE",
                      }),
                      l.jsx("th", {
                        className: "especial",
                        style: { width: "40%" },
                        children: "CONCEPTO",
                      }),
                      l.jsx("th", {
                        className: "especial",
                        style: { width: "12%" },
                        children: "F. VALOR",
                      }),
                      l.jsx("th", {
                        className: "especial",
                        style: { width: "12%" },
                        children: "IMPORTES",
                      }),
                      l.jsx("th", {
                        className: "especial",
                        style: { width: "12%" },
                        children: "SALDO",
                      }),
                    ],
                  }),
                }),
                l.jsx("tbody", {
                  className: "especial",
                  children: i.map((r, o) =>
                    l.jsxs(
                      "tr",
                      {
                        className: "especial",
                        children: [
                          l.jsx("td", {
                            className: "especial",
                            children: r.fecha,
                          }),
                          l.jsx("td", {
                            className: "especial",
                            children: r.clave,
                          }),
                          l.jsxs("td", {
                            className: "especial",
                            style: { textAlign: "left" },
                            children: [
                              r.concepto1,
                              " ",
                              l.jsx("br", {}),
                              " ",
                              r.concepto2,
                            ],
                          }),
                          l.jsx("td", {
                            className: "especial",
                            children: r.fechaValor,
                          }),
                          l.jsx("td", {
                            className: "especial",
                            children: r.importes,
                          }),
                          l.jsx("td", {
                            className: "especial",
                            style: { textAlign: "right" },
                            children: r.saldo,
                          }),
                        ],
                      },
                      `fila_movimiento_${o}`
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        e && l.jsx(ys, { closeSidebar: a }),
      ],
    });
  },
  jh = () =>
    l.jsx($f, {
      children: l.jsxs(Jf, {
        children: [
          l.jsx(Fn, { path: "/", element: l.jsx(e0, {}) }),
          l.jsx(Fn, { path: "/portal", element: l.jsx(Sh, {}) }),
          l.jsx(Fn, { path: "/portal/accounts", element: l.jsx(Ch, {}) }),
          l.jsx(Fn, { path: "/portal/details", element: l.jsx(Eh, {}) }),
        ],
      }),
    });
Ar.createRoot(document.getElementById("root")).render(
  l.jsx($e.StrictMode, { children: l.jsx(jh, {}) })
);
