var Um = Object.defineProperty;
var Dm = Object.getPrototypeOf;
var Jm = Reflect.get;
var Fu = (t) => {
  throw TypeError(t);
};
var Bm = (t, e, n) => e in t ? Um(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var c = (t, e, n) => Bm(t, typeof e != "symbol" ? e + "" : e, n), ju = (t, e, n) => e.has(t) || Fu("Cannot " + n);
var b = (t, e, n) => (ju(t, e, "read from private field"), n ? n.call(t) : e.get(t)), pt = (t, e, n) => e.has(t) ? Fu("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), D = (t, e, n, r) => (ju(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
var v = (t, e, n) => Jm(Dm(t), n, e);
const Hm = (t) => typeof t == "function", d = function(t, e) {
  if (typeof t == "function")
    return function() {
      return t(arguments) ? e.apply(this, arguments) : (n) => e(n, ...arguments);
    };
  switch (t) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${t}`);
    case 2:
      return function(n, r) {
        return arguments.length >= 2 ? e(n, r) : function(s) {
          return e(s, n);
        };
      };
    case 3:
      return function(n, r, s) {
        return arguments.length >= 3 ? e(n, r, s) : function(o) {
          return e(o, n, r);
        };
      };
    case 4:
      return function(n, r, s, o) {
        return arguments.length >= 4 ? e(n, r, s, o) : function(i) {
          return e(i, n, r, s);
        };
      };
    case 5:
      return function(n, r, s, o, i) {
        return arguments.length >= 5 ? e(n, r, s, o, i) : function(a) {
          return e(a, n, r, s, o);
        };
      };
    default:
      return function() {
        if (arguments.length >= t)
          return e.apply(this, arguments);
        const n = arguments;
        return function(r) {
          return e(r, ...n);
        };
      };
  }
}, rt = (t) => t, fi = (t) => () => t, Lu = /* @__PURE__ */ fi(!0), $c = /* @__PURE__ */ fi(!1), Vm = /* @__PURE__ */ fi(void 0);
function g(t, e, n, r, s, o, i, a, u) {
  switch (arguments.length) {
    case 1:
      return t;
    case 2:
      return e(t);
    case 3:
      return n(e(t));
    case 4:
      return r(n(e(t)));
    case 5:
      return s(r(n(e(t))));
    case 6:
      return o(s(r(n(e(t)))));
    case 7:
      return i(o(s(r(n(e(t))))));
    case 8:
      return a(i(o(s(r(n(e(t)))))));
    case 9:
      return u(a(i(o(s(r(n(e(t))))))));
    default: {
      let l = arguments[0];
      for (let f = 1; f < arguments.length; f++)
        l = arguments[f](l);
      return l;
    }
  }
}
const hi = (t) => (e, n) => e === n || t(e, n), Gm = (t, e) => t === e, Wm = () => Gm, zm = /* @__PURE__ */ Wm(), Ch = /* @__PURE__ */ d(2, (t, e) => hi((n, r) => t(e(n), e(r)))), Ym = /* @__PURE__ */ Ch(zm, (t) => t.getTime()), Qm = (t) => hi((e, n) => {
  if (e.length !== n.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (!t(e[r], n[r]))
      return !1;
  return !0;
});
let Xm = "3.4.6";
const No = () => Xm, Rc = /* @__PURE__ */ Symbol.for(`effect/GlobalValue/globalStoreId/${/* @__PURE__ */ No()}`);
Rc in globalThis || (globalThis[Rc] = /* @__PURE__ */ new Map());
const rc = globalThis[Rc], V = (t, e) => (rc.has(t) || rc.set(t, e()), rc.get(t)), Zm = (t) => !!t, ae = (t) => typeof t == "string", Le = (t) => typeof t == "number", di = (t) => typeof t == "boolean", pi = (t) => typeof t == "bigint", Nc = (t) => typeof t == "symbol", Bs = Hm, Ku = (t) => t === void 0, ty = (t) => !1, Fh = (t) => typeof t == "object" && t !== null, on = (t) => Fh(t) || Bs(t), j = /* @__PURE__ */ d(2, (t, e) => on(t) && e in t), jh = /* @__PURE__ */ d(2, (t, e) => j(t, "_tag") && t._tag === e), Sn = (t) => t == null, ey = (t) => t != null, Lh = (t) => t instanceof Date, ny = (t) => j(t, Symbol.iterator), qu = (t) => Fh(t) && !Array.isArray(t), ry = (t) => j(t, "then") && Bs(t.then), Aa = (t) => `BUG: ${t} - please report an issue at https://github.com/Effect-TS/effect/issues`;
let sy = class Kh {
  constructor(e) {
    c(this, "self");
    c(this, "called", !1);
    this.self = e;
  }
  /**
   * @since 2.0.0
   */
  next(e) {
    return this.called ? {
      value: e,
      done: !0
    } : (this.called = !0, {
      value: this.self,
      done: !1
    });
  }
  /**
   * @since 2.0.0
   */
  return(e) {
    return {
      value: e,
      done: !0
    };
  }
  /**
   * @since 2.0.0
   */
  throw(e) {
    throw e;
  }
  /**
   * @since 2.0.0
   */
  [Symbol.iterator]() {
    return new Kh(this.self);
  }
};
const oy = 335903614, iy = 4150755663, cy = 1481765933, ay = 1284865837, uy = 9007199254740992, ly = 134217728;
class fy {
  constructor(e, n, r, s) {
    c(this, "_state");
    return Sn(n) && Sn(e) ? (n = Math.random() * 4294967295 >>> 0, e = 0) : Sn(n) && (n = e, e = 0), Sn(s) && Sn(r) ? (s = this._state ? this._state[3] : iy, r = this._state ? this._state[2] : oy) : Sn(s) && (s = r, r = 0), this._state = new Int32Array([0, 0, r >>> 0, ((s || 0) | 1) >>> 0]), this._next(), Uu(this._state, this._state[0], this._state[1], e >>> 0, n >>> 0), this._next(), this;
  }
  /**
   * Returns a copy of the internal state of this random number generator as a
   * JavaScript Array.
   *
   * @category getters
   * @since 2.0.0
   */
  getState() {
    return [this._state[0], this._state[1], this._state[2], this._state[3]];
  }
  /**
   * Restore state previously retrieved using `getState()`.
   *
   * @since 2.0.0
   */
  setState(e) {
    this._state[0] = e[0], this._state[1] = e[1], this._state[2] = e[2], this._state[3] = e[3] | 1;
  }
  /**
   * Get a uniformly distributed 32 bit integer between [0, max).
   *
   * @category getter
   * @since 2.0.0
   */
  integer(e) {
    if (!e)
      return this._next();
    if (e = e >>> 0, !(e & e - 1))
      return this._next() & e - 1;
    let n = 0;
    const r = (-e >>> 0) % e >>> 0;
    for (n = this._next(); n < r; n = this._next())
      ;
    return n % e;
  }
  /**
   * Get a uniformly distributed IEEE-754 double between 0.0 and 1.0, with
   * 53 bits of precision (every bit of the mantissa is randomized).
   *
   * @category getters
   * @since 2.0.0
   */
  number() {
    const e = (this._next() & 67108863) * 1, n = (this._next() & 134217727) * 1;
    return (e * ly + n) / uy;
  }
  /** @internal */
  _next() {
    const e = this._state[0] >>> 0, n = this._state[1] >>> 0;
    hy(this._state, e, n, cy, ay), Uu(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
    let r = e >>> 18, s = (n >>> 18 | e << 14) >>> 0;
    r = (r ^ e) >>> 0, s = (s ^ n) >>> 0;
    const o = (s >>> 27 | r << 5) >>> 0, i = e >>> 27, a = (-i >>> 0 & 31) >>> 0;
    return (o >>> i | o << a) >>> 0;
  }
}
function hy(t, e, n, r, s) {
  let o = (n >>> 16) * (s & 65535) >>> 0, i = (n & 65535) * (s >>> 16) >>> 0, a = (n & 65535) * (s & 65535) >>> 0, u = (n >>> 16) * (s >>> 16) + ((i >>> 16) + (o >>> 16)) >>> 0;
  i = i << 16 >>> 0, a = a + i >>> 0, a >>> 0 < i >>> 0 && (u = u + 1 >>> 0), o = o << 16 >>> 0, a = a + o >>> 0, a >>> 0 < o >>> 0 && (u = u + 1 >>> 0), u = u + Math.imul(n, r) >>> 0, u = u + Math.imul(e, s) >>> 0, t[0] = u, t[1] = a;
}
function Uu(t, e, n, r, s) {
  let o = e + r >>> 0;
  const i = n + s >>> 0;
  i >>> 0 < n >>> 0 && (o = o + 1 | 0), t[0] = o, t[1] = i;
}
const dy = /* @__PURE__ */ Symbol.for("effect/Utils/YieldWrap");
var Ls;
class Hs {
  constructor(e) {
    /**
     * @since 3.0.6
     */
    pt(this, Ls);
    D(this, Ls, e);
  }
  /**
   * @since 3.0.6
   */
  [dy]() {
    return b(this, Ls);
  }
}
Ls = new WeakMap();
const Bt = /* @__PURE__ */ V("effect/Utils/isStructuralRegion", () => ({
  enabled: !1,
  tester: void 0
})), py = (t) => {
  const e = {
    [t](n) {
      return n();
    }
  };
  return function(n) {
    return e[t](n);
  };
}, Ft = /* @__PURE__ */ py("effect_internal_function"), sc = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/Hash/randomHashCache"), () => /* @__PURE__ */ new WeakMap()), F = /* @__PURE__ */ Symbol.for("effect/Hash"), k = (t) => {
  if (Bt.enabled === !0)
    return 0;
  switch (typeof t) {
    case "number":
      return mi(t);
    case "bigint":
      return ft(t.toString(10));
    case "boolean":
      return ft(String(t));
    case "symbol":
      return ft(String(t));
    case "string":
      return ft(t);
    case "undefined":
      return ft("undefined");
    case "function":
    case "object":
      return t === null ? ft("null") : t instanceof Date ? k(t.toISOString()) : gy(t) ? t[F]() : xa(t);
    default:
      throw new Error(`BUG: unhandled typeof ${typeof t} - please report an issue at https://github.com/Effect-TS/effect/issues`);
  }
}, xa = (t) => (sc.has(t) || sc.set(t, mi(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))), sc.get(t)), U = (t) => (e) => e * 53 ^ t, gi = (t) => t & 3221225471 | t >>> 1 & 1073741824, gy = (t) => j(t, F), mi = (t) => {
  if (t !== t || t === 1 / 0)
    return 0;
  let e = t | 0;
  for (e !== t && (e ^= t * 4294967295); t > 4294967295; )
    e ^= t /= 4294967295;
  return gi(t);
}, ft = (t) => {
  let e = 5381, n = t.length;
  for (; n; )
    e = e * 33 ^ t.charCodeAt(--n);
  return gi(e);
}, my = (t, e) => {
  let n = 12289;
  for (let r = 0; r < e.length; r++)
    n ^= g(ft(e[r]), U(k(t[e[r]])));
  return gi(n);
}, qh = (t) => my(t, Object.keys(t)), Vs = (t) => {
  let e = 6151;
  for (let n = 0; n < t.length; n++)
    e = g(e, U(k(t[n])));
  return gi(e);
}, et = function() {
  if (arguments.length === 1) {
    const n = arguments[0];
    return function(r) {
      return Object.defineProperty(n, F, {
        value() {
          return r;
        },
        enumerable: !1
      }), r;
    };
  }
  const t = arguments[0], e = arguments[1];
  return Object.defineProperty(t, F, {
    value() {
      return e;
    },
    enumerable: !1
  }), e;
}, P = /* @__PURE__ */ Symbol.for("effect/Equal");
function C() {
  return arguments.length === 1 ? (t) => Mo(t, arguments[0]) : Mo(arguments[0], arguments[1]);
}
function Mo(t, e) {
  if (t === e)
    return !0;
  const n = typeof t;
  if (n !== typeof e)
    return !1;
  if (n === "object" || n === "function") {
    if (t !== null && e !== null) {
      if (Ao(t) && Ao(e))
        return k(t) === k(e) && t[P](e) ? !0 : Bt.enabled && Bt.tester ? Bt.tester(t, e) : !1;
      if (t instanceof Date && e instanceof Date)
        return t.toISOString() === e.toISOString();
    }
    if (Bt.enabled) {
      if (Array.isArray(t) && Array.isArray(e))
        return t.length === e.length && t.every((r, s) => Mo(r, e[s]));
      if (Object.getPrototypeOf(t) === Object.prototype && Object.getPrototypeOf(t) === Object.prototype) {
        const r = Object.keys(t), s = Object.keys(e);
        if (r.length === s.length) {
          for (const o of r)
            if (!(o in e && Mo(t[o], e[o])))
              return Bt.tester ? Bt.tester(t, e) : !1;
          return !0;
        }
      }
      return Bt.tester ? Bt.tester(t, e) : !1;
    }
  }
  return Bt.enabled && Bt.tester ? Bt.tester(t, e) : !1;
}
const Ao = (t) => j(t, P), Pa = () => C, z = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom"), it = (t) => j(t, "toJSON") && Bs(t.toJSON) && t.toJSON.length === 0 ? t.toJSON() : Array.isArray(t) ? t.map(it) : t, It = (t) => JSON.stringify(t, null, 2), Rn = (t, e = 2) => {
  try {
    return typeof t == "object" ? yy(t, e) : String(t);
  } catch {
    return String(t);
  }
}, yy = (t, e) => {
  let n = [];
  const r = JSON.stringify(t, (s, o) => typeof o == "object" && o !== null ? n.includes(o) ? void 0 : n.push(o) && o : o, e);
  return n = void 0, r;
}, R = (t, e) => {
  switch (e.length) {
    case 1:
      return e[0](t);
    case 2:
      return e[1](e[0](t));
    case 3:
      return e[2](e[1](e[0](t)));
    case 4:
      return e[3](e[2](e[1](e[0](t))));
    case 5:
      return e[4](e[3](e[2](e[1](e[0](t)))));
    case 6:
      return e[5](e[4](e[3](e[2](e[1](e[0](t))))));
    case 7:
      return e[6](e[5](e[4](e[3](e[2](e[1](e[0](t)))))));
    case 8:
      return e[7](e[6](e[5](e[4](e[3](e[2](e[1](e[0](t))))))));
    case 9:
      return e[8](e[7](e[6](e[5](e[4](e[3](e[2](e[1](e[0](t)))))))));
    default: {
      let n = t;
      for (let r = 0, s = e.length; r < s; r++)
        n = e[r](n);
      return n;
    }
  }
}, Or = "Async", Ca = "Commit", oe = "Failure", oc = "OnFailure", xo = "OnSuccess", Po = "OnSuccessAndFailure", ie = "Success", Uh = "Sync", by = "Tag", Gs = "UpdateRuntimeFlags", Co = "While", Dh = "WithRuntime", bo = "Yield", Fa = "RevertFlags", Jh = /* @__PURE__ */ Symbol.for("effect/Effect"), _y = /* @__PURE__ */ Symbol.for("effect/Stream"), Sy = /* @__PURE__ */ Symbol.for("effect/Sink"), wy = /* @__PURE__ */ Symbol.for("effect/Channel"), Ln = {
  /* c8 ignore next */
  _R: (t) => t,
  /* c8 ignore next */
  _E: (t) => t,
  /* c8 ignore next */
  _A: (t) => t,
  _V: /* @__PURE__ */ No()
}, Oy = {
  /* c8 ignore next */
  _A: (t) => t,
  /* c8 ignore next */
  _In: (t) => t,
  /* c8 ignore next */
  _L: (t) => t,
  /* c8 ignore next */
  _E: (t) => t,
  /* c8 ignore next */
  _R: (t) => t
}, Iy = {
  /* c8 ignore next */
  _Env: (t) => t,
  /* c8 ignore next */
  _InErr: (t) => t,
  /* c8 ignore next */
  _InElem: (t) => t,
  /* c8 ignore next */
  _InDone: (t) => t,
  /* c8 ignore next */
  _OutErr: (t) => t,
  /* c8 ignore next */
  _OutElem: (t) => t,
  /* c8 ignore next */
  _OutDone: (t) => t
}, Ws = {
  [Jh]: Ln,
  [_y]: Ln,
  [Sy]: Oy,
  [wy]: Iy,
  [P](t) {
    return this === t;
  },
  [F]() {
    return et(this, xa(this));
  },
  [Symbol.iterator]() {
    return new sy(new Hs(this));
  },
  pipe() {
    return R(this, arguments);
  }
}, yi = {
  [F]() {
    return et(this, qh(this));
  },
  [P](t) {
    const e = Object.keys(this), n = Object.keys(t);
    if (e.length !== n.length)
      return !1;
    for (const r of e)
      if (!(r in t && C(this[r], t[r])))
        return !1;
    return !0;
  }
}, Ey = {
  ...Ws,
  _op: Ca
}, ky = {
  ...Ey,
  ...yi
}, Bh = /* @__PURE__ */ Symbol.for("effect/Option"), Hh = {
  ...Ws,
  [Bh]: {
    _A: (t) => t
  },
  [z]() {
    return this.toJSON();
  },
  toString() {
    return It(this.toJSON());
  }
}, vy = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Hh), {
  _tag: "Some",
  _op: "Some",
  [P](t) {
    return Vh(t) && Gh(t) && C(this.value, t.value);
  },
  [F]() {
    return et(this, U(k(this._tag))(k(this.value)));
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag,
      value: it(this.value)
    };
  }
}), Ty = /* @__PURE__ */ k("None"), $y = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Hh), {
  _tag: "None",
  _op: "None",
  [P](t) {
    return Vh(t) && ja(t);
  },
  [F]() {
    return Ty;
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag
    };
  }
}), Vh = (t) => j(t, Bh), ja = (t) => t._tag === "None", Gh = (t) => t._tag === "Some", Fo = /* @__PURE__ */ Object.create($y), Tn = (t) => {
  const e = Object.create(vy);
  return e.value = t, e;
}, Wh = /* @__PURE__ */ Symbol.for("effect/Either"), zh = {
  ...Ws,
  [Wh]: {
    _R: (t) => t
  },
  [z]() {
    return this.toJSON();
  },
  toString() {
    return It(this.toJSON());
  }
}, Ry = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(zh), {
  _tag: "Right",
  _op: "Right",
  [P](t) {
    return Yh(t) && Xh(t) && C(this.right, t.right);
  },
  [F]() {
    return U(k(this._tag))(k(this.right));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      right: it(this.right)
    };
  }
}), Ny = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(zh), {
  _tag: "Left",
  _op: "Left",
  [P](t) {
    return Yh(t) && Qh(t) && C(this.left, t.left);
  },
  [F]() {
    return U(k(this._tag))(k(this.left));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      left: it(this.left)
    };
  }
}), Yh = (t) => j(t, Wh), Qh = (t) => t._tag === "Left", Xh = (t) => t._tag === "Right", Zh = (t) => {
  const e = Object.create(Ny);
  return e.left = t, e;
}, td = (t) => {
  const e = Object.create(Ry);
  return e.right = t, e;
}, My = /* @__PURE__ */ d(2, (t, e) => ja(t) ? Zh(e()) : td(t.value)), ot = td, B = Zh, Ay = My, Et = Qh, Fe = Xh, xy = /* @__PURE__ */ d(2, (t, {
  onLeft: e,
  onRight: n
}) => Et(t) ? e(t.left) : n(t.right)), Py = /* @__PURE__ */ xy({
  onLeft: rt,
  onRight: rt
}), Cy = /* @__PURE__ */ d(2, (t, e) => {
  if (Fe(t))
    return t.right;
  throw e(t.left);
}), ed = (t) => t.length > 0, nd = (t) => (e, n) => e === n ? 0 : t(e, n), Fy = /* @__PURE__ */ nd((t, e) => t < e ? -1 : 1), bi = /* @__PURE__ */ d(2, (t, e) => nd((n, r) => t(e(n), e(r)))), jy = (t) => d(2, (e, n) => t(e, n) === 1), w = () => Fo, E = Tn, ht = ja, Z = Gh, de = /* @__PURE__ */ d(2, (t, {
  onNone: e,
  onSome: n
}) => ht(t) ? e() : n(t.value)), St = /* @__PURE__ */ d(2, (t, e) => ht(t) ? e() : t.value), jo = /* @__PURE__ */ d(2, (t, e) => ht(t) ? e() : t), Ly = /* @__PURE__ */ d(2, (t, e) => ht(t) ? E(e()) : t), _i = (t) => t == null ? w() : E(t), ve = /* @__PURE__ */ St(Vm), Ky = (t) => (...e) => {
  try {
    return E(t(...e));
  } catch {
    return w();
  }
}, qy = /* @__PURE__ */ d(2, (t, e) => {
  if (Z(t))
    return t.value;
  throw e();
}), rd = /* @__PURE__ */ qy(() => new Error("getOrThrow called on a None")), sd = /* @__PURE__ */ d(2, (t, e) => ht(t) ? w() : E(e(t.value))), zs = /* @__PURE__ */ d(2, (t, e) => ht(t) ? w() : e(t.value)), Uy = /* @__PURE__ */ d(2, (t, e) => ht(t) ? w() : e(t.value)), Dy = (t) => d(2, (e, n) => ht(e) ? !1 : t(e.value, n)), Jy = /* @__PURE__ */ Pa(), By = /* @__PURE__ */ Dy(Jy), Hy = (...t) => t, Si = (t) => new Array(t), Vy = (t, e) => {
  const n = Math.max(1, Math.floor(t)), r = new Array(n);
  for (let s = 0; s < n; s++)
    r[s] = e(s);
  return r;
}, ct = (t) => Array.isArray(t) ? t : Array.from(t), Gy = /* @__PURE__ */ d(2, (t, {
  onEmpty: e,
  onNonEmpty: n
}) => at(t) ? n(jt(t), cn(t)) : e()), Lo = /* @__PURE__ */ d(2, (t, e) => [e, ...t]), Wy = /* @__PURE__ */ d(2, (t, e) => [...t, e]), od = /* @__PURE__ */ d(2, (t, e) => ct(t).concat(ct(e))), Mc = Array.isArray, zy = (t) => t.length === 0, Yy = zy, _o = ed, at = ed, id = (t, e) => t < 0 || t >= e.length, Qy = (t, e) => Math.floor(Math.min(Math.max(0, t), e.length)), Xy = /* @__PURE__ */ d(2, (t, e) => {
  const n = Math.floor(e);
  return id(n, t) ? w() : E(t[n]);
}), cd = /* @__PURE__ */ d(2, (t, e) => {
  const n = Math.floor(e);
  if (id(n, t))
    throw new Error(`Index ${n} out of bounds`);
  return t[n];
}), Ir = /* @__PURE__ */ Xy(0), jt = /* @__PURE__ */ cd(0), Zy = (t) => at(t) ? E(ad(t)) : w(), ad = (t) => t[t.length - 1], cn = (t) => t.slice(1), tb = (t, e) => {
  let n = 0;
  for (const r of t) {
    if (!e(r, n))
      break;
    n++;
  }
  return n;
}, eb = /* @__PURE__ */ d(2, (t, e) => ob(t, tb(t, e))), nb = /* @__PURE__ */ d(2, (t, e) => {
  const n = ct(t);
  return n.slice(Qy(e, n), n.length);
}), Du = (t) => Array.from(t).reverse(), an = /* @__PURE__ */ d(2, (t, e) => {
  const n = Array.from(t);
  return n.sort(e), n;
}), Ju = /* @__PURE__ */ d(2, (t, e) => rb(t, e, Hy)), rb = /* @__PURE__ */ d(3, (t, e, n) => {
  const r = ct(t), s = ct(e);
  if (at(r) && at(s)) {
    const o = [n(jt(r), jt(s))], i = Math.min(r.length, s.length);
    for (let a = 1; a < i; a++)
      o[a] = n(r[a], s[a]);
    return o;
  }
  return [];
}), sb = /* @__PURE__ */ Pa(), ob = /* @__PURE__ */ d(2, (t, e) => {
  const n = Array.from(t), r = Math.floor(e);
  return at(n) ? r >= 1 ? ib(n, r) : [[], n] : [n, []];
}), ib = /* @__PURE__ */ d(2, (t, e) => {
  const n = Math.max(1, Math.floor(e));
  return n >= t.length ? [yr(t), []] : [Lo(t.slice(1, n), jt(t)), t.slice(n)];
}), yr = (t) => t.slice(), cb = /* @__PURE__ */ d(3, (t, e, n) => {
  const r = ct(t), s = ct(e);
  return at(r) ? at(s) ? fd(n)(od(r, s)) : r : s;
}), Ac = /* @__PURE__ */ d(2, (t, e) => cb(t, e, sb)), Kn = () => [], ee = (t) => [t], Nn = /* @__PURE__ */ d(2, (t, e) => t.map(e)), ud = /* @__PURE__ */ d(2, (t, e) => {
  if (Yy(t))
    return [];
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const s = e(t[r], r);
    for (let o = 0; o < s.length; o++)
      n.push(s[o]);
  }
  return n;
}), ab = /* @__PURE__ */ ud(rt), ub = /* @__PURE__ */ d(2, (t, e) => {
  const n = ct(t), r = [];
  for (let s = 0; s < n.length; s++) {
    const o = e(n[s], s);
    Z(o) && r.push(o.value);
  }
  return r;
}), ld = /* @__PURE__ */ d(3, (t, e, n) => ct(t).reduce((r, s, o) => n(r, s, o), e)), Bu = (t, e) => {
  const n = [];
  let r = t, s;
  for (; Z(s = e(r)); ) {
    const [o, i] = s.value;
    n.push(o), r = i;
  }
  return n;
}, La = Qm, fd = /* @__PURE__ */ d(2, (t, e) => {
  const n = ct(t);
  if (at(n)) {
    const r = [jt(n)], s = cn(n);
    for (const o of s)
      r.every((i) => !e(o, i)) && r.push(o);
    return r;
  }
  return [];
}), lb = (t) => fd(t, Pa()), tr = /* @__PURE__ */ d(2, (t, e) => ct(t).join(e)), Ke = Fy, fb = (t) => {
  if (t === "NaN")
    return Tn(NaN);
  if (t === "Infinity")
    return Tn(1 / 0);
  if (t === "-Infinity")
    return Tn(-1 / 0);
  if (t.trim() === "")
    return Fo;
  const e = Number(t);
  return Number.isNaN(e) ? Fo : Tn(e);
}, xc = (t) => t.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&"), hd = (t, e) => {
  switch (e._tag) {
    case "StringKeyword":
    case "TemplateLiteral":
      return Object.keys(t);
    case "SymbolKeyword":
      return Object.getOwnPropertySymbols(t);
    case "Refinement":
      return hd(t, e.from);
  }
}, Mn = (t) => Object.keys(t).concat(Object.getOwnPropertySymbols(t)), dd = (t) => {
  let e = !1, n;
  return () => (e || (n = t(), e = !0), n);
}, qe = (t) => {
  if (ae(t))
    return JSON.stringify(t);
  if (Le(t) || t == null || di(t) || Nc(t) || Lh(t))
    return String(t);
  if (pi(t))
    return String(t) + "n";
  if (!Mc(t) && j(t, "toString") && Bs(t.toString) && t.toString !== Object.prototype.toString)
    return t.toString();
  try {
    return JSON.stringify(t), Mc(t) ? `[${t.map(qe).join(",")}]` : `{${Mn(t).map((e) => `${ae(e) ? JSON.stringify(e) : String(e)}:${qe(t[e])}`).join(",")}}`;
  } catch {
    return String(t);
  }
}, hb = (t) => typeof t == "string" ? JSON.stringify(t) : String(t), pd = (t) => Array.isArray(t), db = (t) => !Array.isArray(t), Hu = (t) => `[${hb(t)}]`, pb = (t) => pd(t) ? t.map(Hu).join("") : Hu(t), mn = (t, e, n, r) => {
  let s = t;
  return e !== void 0 && (s += `
details: ${e}`), r && (s += `
schema (${r._tag}): ${r}`), s;
}, gb = (t) => mn("Unsupported key schema", void 0, void 0, t), mb = (t) => mn("Unsupported literal", `literal value: ${qe(t)}`), Vu = (t) => mn("Duplicate index signature", `${t} index signature`), yb = /* @__PURE__ */ mn("Unsupported index signature parameter", "An index signature parameter type must be `string`, `symbol`, a template literal type or a refinement of the previous types"), bb = /* @__PURE__ */ mn("Invalid element", "A required element cannot follow an optional element. ts(1257)"), Gu = (t) => mn("Duplicate property signature transformation", `Duplicate key ${qe(t)}`), _b = (t) => mn("Duplicate property signature", `Duplicate key ${qe(t)}`), Wu = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Type"), gd = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Message"), md = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/MissingMessage"), wi = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Identifier"), Ot = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Title"), _e = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Description"), Sb = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Examples"), wb = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Default"), Ob = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/JSONSchema"), Ib = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Documentation"), yd = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Concurrency"), bd = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Batching"), _d = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/ParseIssueTitle"), Sd = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/ParseOptions"), Eb = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Surrogate"), pe = /* @__PURE__ */ d(2, (t, e) => Object.prototype.hasOwnProperty.call(t.annotations, e) ? E(t.annotations[e]) : w()), kb = /* @__PURE__ */ pe(gd), vb = /* @__PURE__ */ pe(md), Tb = /* @__PURE__ */ pe(Ot), wd = /* @__PURE__ */ pe(wi), $b = /* @__PURE__ */ pe(_e), Rb = /* @__PURE__ */ pe(yd), Nb = /* @__PURE__ */ pe(bd), Mb = /* @__PURE__ */ pe(_d), Ab = /* @__PURE__ */ pe(Sd), xb = /* @__PURE__ */ pe(Eb), Od = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/JSONIdentifier"), Pb = /* @__PURE__ */ pe(Od);
class Oi {
  constructor(e, n, r, s = {}) {
    c(this, "typeParameters");
    c(this, "decodeUnknown");
    c(this, "encodeUnknown");
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Declaration");
    this.typeParameters = e, this.decodeUnknown = n, this.encodeUnknown = r, this.annotations = s;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return St(ue(this), () => "<declaration schema>");
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      typeParameters: this.typeParameters.map((e) => e.toJSON()),
      annotations: nt(this.annotations)
    };
  }
}
const Ys = (t) => (e) => e._tag === t;
let Ko = class {
  constructor(e, n = {}) {
    c(this, "literal");
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Literal");
    this.literal = e, this.annotations = n;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return St(ue(this), () => qe(this.literal));
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      literal: pi(this.literal) ? String(this.literal) : this.literal,
      annotations: nt(this.annotations)
    };
  }
};
const Cb = /* @__PURE__ */ Ys("Literal"), Fb = /* @__PURE__ */ new Ko(null, {
  [wi]: "null"
});
class jb {
  constructor(e, n = {}) {
    c(this, "symbol");
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "UniqueSymbol");
    this.symbol = e, this.annotations = n;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return St(ue(this), () => qe(this.symbol));
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      symbol: String(this.symbol),
      annotations: nt(this.annotations)
    };
  }
}
class Lb {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "UndefinedKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const Kb = /* @__PURE__ */ new Lb({
  [Ot]: "undefined"
});
class qb {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "VoidKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const Ub = /* @__PURE__ */ new qb({
  [Ot]: "void"
});
class Db {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "NeverKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const qo = /* @__PURE__ */ new Db({
  [Ot]: "never"
});
class Jb {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "UnknownKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const Id = /* @__PURE__ */ new Jb({
  [Ot]: "unknown"
});
class Bb {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "AnyKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const Ed = /* @__PURE__ */ new Bb({
  [Ot]: "any"
});
class Hb {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "StringKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const Vb = /* @__PURE__ */ new Hb({
  [Ot]: "string",
  [_e]: "a string"
}), kd = /* @__PURE__ */ Ys("StringKeyword");
class Gb {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "NumberKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const Wb = /* @__PURE__ */ new Gb({
  [Ot]: "number",
  [_e]: "a number"
}), zb = /* @__PURE__ */ Ys("NumberKeyword");
class Yb {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "BooleanKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const Qb = /* @__PURE__ */ new Yb({
  [Ot]: "boolean",
  [_e]: "a boolean"
});
class Xb {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "BigIntKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const Zb = /* @__PURE__ */ new Xb({
  [Ot]: "bigint",
  [_e]: "a bigint"
});
class t_ {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "SymbolKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const e_ = /* @__PURE__ */ new t_({
  [Ot]: "symbol",
  [_e]: "a symbol"
}), n_ = /* @__PURE__ */ Ys("SymbolKeyword");
class r_ {
  constructor(e = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "ObjectKeyword");
    this.annotations = e;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ge(this);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: nt(this.annotations)
    };
  }
}
const s_ = /* @__PURE__ */ new r_({
  [wi]: "object",
  [Ot]: "object",
  [_e]: "an object in the TypeScript meaning, i.e. the `object` type"
});
let Ii = class {
  constructor(e, n = {}) {
    c(this, "type");
    c(this, "annotations");
    this.type = e, this.annotations = n;
  }
  /**
   * @since 0.68.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      annotations: nt(this.annotations)
    };
  }
  /**
   * @since 0.68.0
   */
  toString() {
    return String(this.type);
  }
};
class Ei extends Ii {
  constructor(n, r, s = {}) {
    super(n, s);
    c(this, "isOptional");
    this.isOptional = r;
  }
  /**
   * @since 0.68.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      annotations: nt(this.annotations)
    };
  }
  /**
   * @since 0.68.0
   */
  toString() {
    return String(this.type) + (this.isOptional ? "?" : "");
  }
}
const vd = (t) => t.map((e) => e.type);
class Ka {
  constructor(e, n, r, s = {}) {
    c(this, "elements");
    c(this, "rest");
    c(this, "isReadonly");
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "TupleType");
    this.elements = e, this.rest = n, this.isReadonly = r, this.annotations = s;
    let o = !1, i = !1;
    for (const a of e)
      if (a.isOptional)
        o = !0;
      else if (o) {
        i = !0;
        break;
      }
    if (i || o && n.length > 1)
      throw new Error(bb);
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return St(ue(this), () => o_(this));
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      elements: this.elements.map((e) => e.toJSON()),
      rest: this.rest.map((e) => e.toJSON()),
      isReadonly: this.isReadonly,
      annotations: nt(this.annotations)
    };
  }
}
const o_ = (t) => {
  const e = t.elements.map(String).join(", ");
  return Gy(t.rest, {
    onEmpty: () => `readonly [${e}]`,
    onNonEmpty: (n, r) => {
      const s = String(n), o = s.includes(" | ") ? `(${s})` : s;
      if (r.length > 0) {
        const i = r.map(String).join(", ");
        return t.elements.length > 0 ? `readonly [${e}, ...${o}[], ${i}]` : `readonly [...${o}[], ${i}]`;
      } else
        return t.elements.length > 0 ? `readonly [${e}, ...${o}[]]` : `ReadonlyArray<${s}>`;
    }
  });
};
class kt extends Ei {
  constructor(n, r, s, o, i) {
    super(r, s, i);
    c(this, "name");
    c(this, "isReadonly");
    this.name = n, this.isReadonly = o;
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      name: String(this.name),
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      isReadonly: this.isReadonly,
      annotations: nt(this.annotations)
    };
  }
}
const Td = (t) => {
  switch (t._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return !0;
    case "Refinement":
      return Td(t.from);
  }
  return !1;
};
class ki {
  constructor(e, n, r) {
    c(this, "type");
    c(this, "isReadonly");
    /**
     * @since 0.67.0
     */
    c(this, "parameter");
    if (this.type = n, this.isReadonly = r, Td(e))
      this.parameter = e;
    else
      throw new Error(yb);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      parameter: this.parameter.toJSON(),
      type: this.type.toJSON(),
      isReadonly: this.isReadonly
    };
  }
}
class tn {
  constructor(e, n, r = {}) {
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "TypeLiteral");
    /**
     * @since 0.67.0
     */
    c(this, "propertySignatures");
    /**
     * @since 0.67.0
     */
    c(this, "indexSignatures");
    this.annotations = r;
    const s = {};
    for (let i = 0; i < e.length; i++) {
      const a = e[i].name;
      if (Object.prototype.hasOwnProperty.call(s, a))
        throw new Error(_b(a));
      s[a] = null;
    }
    const o = {
      string: !1,
      symbol: !1
    };
    for (let i = 0; i < n.length; i++) {
      const a = vi(n[i].parameter);
      if (kd(a)) {
        if (o.string)
          throw new Error(Vu("string"));
        o.string = !0;
      } else if (n_(a)) {
        if (o.symbol)
          throw new Error(Vu("symbol"));
        o.symbol = !0;
      }
    }
    this.propertySignatures = O_(e), this.indexSignatures = I_(n);
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return St(ue(this), () => i_(this));
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      propertySignatures: this.propertySignatures.map((e) => e.toJSON()),
      indexSignatures: this.indexSignatures.map((e) => e.toJSON()),
      annotations: nt(this.annotations)
    };
  }
}
const i_ = (t) => {
  const e = t.propertySignatures.map((n) => (n.isReadonly ? "readonly " : "") + String(n.name) + (n.isOptional ? "?" : "") + ": " + n.type).join("; ");
  if (t.indexSignatures.length > 0) {
    const n = t.indexSignatures.map((r) => (r.isReadonly ? "readonly " : "") + `[x: ${vi(r.parameter)}]: ${r.type}`).join("; ");
    return t.propertySignatures.length > 0 ? `{ ${e}; ${n} }` : `{ ${n} }`;
  } else
    return t.propertySignatures.length > 0 ? `{ ${e} }` : "{}";
}, c_ = (t) => t.filter((e) => e !== qo), a_ = /* @__PURE__ */ an(/* @__PURE__ */ bi(Ke, (t) => {
  switch (t._tag) {
    case "AnyKeyword":
      return 0;
    case "UnknownKeyword":
      return 1;
    case "ObjectKeyword":
      return 2;
    case "StringKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
      return 3;
  }
  return 4;
})), u_ = {
  string: "StringKeyword",
  number: "NumberKeyword",
  boolean: "BooleanKeyword",
  bigint: "BigIntKeyword"
}, $d = (t) => ud(t, (e) => h_(e) ? $d(e.types) : [e]), l_ = (t) => {
  const e = a_(t), n = [], r = {}, s = [];
  for (const o of e)
    switch (o._tag) {
      case "NeverKeyword":
        break;
      case "AnyKeyword":
        return [Ed];
      case "UnknownKeyword":
        return [Id];
      case "ObjectKeyword":
      case "UndefinedKeyword":
      case "VoidKeyword":
      case "StringKeyword":
      case "NumberKeyword":
      case "BooleanKeyword":
      case "BigIntKeyword":
      case "SymbolKeyword": {
        r[o._tag] || (r[o._tag] = o, n.push(o));
        break;
      }
      case "Literal": {
        const i = typeof o.literal;
        switch (i) {
          case "string":
          case "number":
          case "bigint":
          case "boolean": {
            const a = u_[i];
            !r[a] && !s.includes(o.literal) && (s.push(o.literal), n.push(o));
            break;
          }
          case "object": {
            s.includes(o.literal) || (s.push(o.literal), n.push(o));
            break;
          }
        }
        break;
      }
      case "UniqueSymbol": {
        !r.SymbolKeyword && !s.includes(o.symbol) && (s.push(o.symbol), n.push(o));
        break;
      }
      case "TupleType": {
        r.ObjectKeyword || n.push(o);
        break;
      }
      case "TypeLiteral": {
        o.propertySignatures.length === 0 && o.indexSignatures.length === 0 ? r["{}"] || (r["{}"] = o, n.push(o)) : r.ObjectKeyword || n.push(o);
        break;
      }
      default:
        n.push(o);
    }
  return n;
};
var qt;
let en = (qt = class {
  constructor(e, n = {}) {
    c(this, "types");
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Union");
    this.types = e, this.annotations = n;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return St(ue(this), () => this.types.map(String).join(" | "));
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      types: this.types.map((e) => e.toJSON()),
      annotations: nt(this.annotations)
    };
  }
}, c(qt, "make", (e, n) => {
  const r = [], s = /* @__PURE__ */ new Set();
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === qo || s.has(i) || (s.add(i), r.push(i));
  }
  return qt.union(r, n);
}), /** @internal */
c(qt, "members", (e, n) => qt.union(c_(e), n)), /** @internal */
c(qt, "unify", (e, n) => qt.union(l_($d(e)), n)), /** @internal */
c(qt, "union", (e, n) => qa(e) ? new qt(e, n) : e.length === 1 ? e[0] : qo), qt);
const f_ = (t, e) => t.map(e), qa = (t) => t.length > 1, h_ = /* @__PURE__ */ Ys("Union"), ic = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("@effect/schema/AST/toJSONMemoMap"), () => /* @__PURE__ */ new WeakMap());
class Ua {
  constructor(e, n = {}) {
    c(this, "f");
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Suspend");
    this.f = e, this.annotations = n, this.f = dd(e);
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return ue(this).pipe(jo(() => zs(Ky(this.f)(), (e) => ue(e))), St(() => "<suspended schema>"));
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    const e = this.f();
    let n = ic.get(e);
    return n || (ic.set(e, {
      _tag: this._tag
    }), n = {
      _tag: this._tag,
      ast: e.toJSON(),
      annotations: nt(this.annotations)
    }, ic.set(e, n), n);
  }
}
let Rd = class {
  constructor(e, n, r = {}) {
    c(this, "from");
    c(this, "filter");
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Refinement");
    this.from = e, this.filter = n, this.annotations = r;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return St(ue(this), () => `{ ${this.from} | filter }`);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      annotations: nt(this.annotations)
    };
  }
};
const cc = {};
let Nd = class {
  constructor(e, n, r, s = {}) {
    c(this, "from");
    c(this, "to");
    c(this, "transformation");
    c(this, "annotations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Transformation");
    this.from = e, this.to = n, this.transformation = r, this.annotations = s;
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return St(ue(this), () => `(${String(this.from)} <-> ${String(this.to)})`);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      to: this.to.toJSON(),
      annotations: nt(this.annotations)
    };
  }
};
class d_ {
  constructor(e, n) {
    c(this, "decode");
    c(this, "encode");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "FinalTransformation");
    this.decode = e, this.encode = n;
  }
}
class p_ {
  constructor(e, n, r, s) {
    c(this, "from");
    c(this, "to");
    c(this, "decode");
    c(this, "encode");
    this.from = e, this.to = n, this.decode = r, this.encode = s;
  }
}
class g_ {
  constructor(e) {
    c(this, "propertySignatureTransformations");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "TypeLiteralTransformation");
    this.propertySignatureTransformations = e;
    const n = {}, r = {};
    for (const s of e) {
      const o = s.from;
      if (n[o])
        throw new Error(Gu(o));
      n[o] = !0;
      const i = s.to;
      if (r[i])
        throw new Error(Gu(i));
      r[i] = !0;
    }
  }
}
const Md = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t);
  return n.annotations.value = {
    ...t.annotations,
    ...e
  }, Object.create(Object.getPrototypeOf(t), n);
}, m_ = ".*", y_ = "[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?", b_ = (t) => {
  let e = `^${xc(t.head)}`;
  for (const n of t.spans)
    kd(n.type) ? e += m_ : zb(n.type) && (e += y_), e += xc(n.literal);
  return e += "$", new RegExp(e);
}, zu = (t, e) => {
  const n = [], r = [], s = (o) => {
    switch (o._tag) {
      case "NeverKeyword":
        break;
      case "StringKeyword":
      case "SymbolKeyword":
      case "TemplateLiteral":
      case "Refinement":
        r.push(new ki(o, e, !0));
        break;
      case "Literal":
        if (ae(o.literal) || Le(o.literal))
          n.push(new kt(o.literal, e, !1, !0));
        else
          throw new Error(mb(o.literal));
        break;
      case "Enums": {
        for (const [i, a] of o.enums)
          n.push(new kt(a, e, !1, !0));
        break;
      }
      case "UniqueSymbol":
        n.push(new kt(o.symbol, e, !1, !0));
        break;
      case "Union":
        o.types.forEach(s);
        break;
      default:
        throw new Error(gb(o));
    }
  };
  return s(t), {
    propertySignatures: n,
    indexSignatures: r
  };
}, Ct = (t) => {
  switch (t._tag) {
    case "Declaration": {
      const e = Vt(t.typeParameters, Ct);
      return e === t.typeParameters ? t : new Oi(e, t.decodeUnknown, t.encodeUnknown, t.annotations);
    }
    case "TupleType": {
      const e = Vt(t.elements, (s) => {
        const o = Ct(s.type);
        return o === s.type ? s : new Ei(o, s.isOptional);
      }), n = vd(t.rest), r = Vt(n, Ct);
      return e === t.elements && r === n ? t : new Ka(e, r.map((s) => new Ii(s)), t.isReadonly, t.annotations);
    }
    case "TypeLiteral": {
      const e = Vt(t.propertySignatures, (r) => {
        const s = Ct(r.type);
        return s === r.type ? r : new kt(r.name, s, r.isOptional, r.isReadonly);
      }), n = Vt(t.indexSignatures, (r) => {
        const s = Ct(r.type);
        return s === r.type ? r : new ki(r.parameter, s, r.isReadonly);
      });
      return e === t.propertySignatures && n === t.indexSignatures ? t : new tn(e, n, t.annotations);
    }
    case "Union": {
      const e = Vt(t.types, Ct);
      return e === t.types ? t : en.make(e, t.annotations);
    }
    case "Suspend":
      return new Ua(() => Ct(t.f()), t.annotations);
    case "Refinement": {
      const e = Ct(t.from);
      return e === t.from ? t : new Rd(e, t.filter, t.annotations);
    }
    case "Transformation":
      return Ct(t.to);
  }
  return t;
}, __ = (t) => jo(Pb(t), () => wd(t)), uo = (t) => de(__(t), {
  onNone: () => {
  },
  onSome: (e) => ({
    [Od]: e
  })
});
function Vt(t, e) {
  let n = !1;
  const r = Si(t.length);
  for (let s = 0; s < t.length; s++) {
    const o = t[s], i = e(o);
    i !== o && (n = !0), r[s] = i;
  }
  return n ? r : t;
}
const ye = (t, e) => {
  switch (t._tag) {
    case "Declaration": {
      const n = Vt(t.typeParameters, (r) => ye(r));
      return n === t.typeParameters ? t : new Oi(n, t.decodeUnknown, t.encodeUnknown, t.annotations);
    }
    case "TupleType": {
      const n = Vt(t.elements, (o) => {
        const i = ye(o.type);
        return i === o.type ? o : new Ei(i, o.isOptional);
      }), r = vd(t.rest), s = Vt(r, (o) => ye(o));
      return n === t.elements && s === r ? t : new Ka(n, s.map((o) => new Ii(o)), t.isReadonly, uo(t));
    }
    case "TypeLiteral": {
      const n = Vt(t.propertySignatures, (s) => {
        const o = ye(s.type);
        return o === s.type ? s : new kt(s.name, o, s.isOptional, s.isReadonly);
      }), r = Vt(t.indexSignatures, (s) => {
        const o = ye(s.type);
        return o === s.type ? s : new ki(s.parameter, o, s.isReadonly);
      });
      return n === t.propertySignatures && r === t.indexSignatures ? t : new tn(n, r, uo(t));
    }
    case "Union": {
      const n = Vt(t.types, (r) => ye(r));
      return n === t.types ? t : en.make(n, uo(t));
    }
    case "Suspend":
      return new Ua(() => ye(t.f()), uo(t));
    case "Refinement":
      return ye(t.from);
    case "Transformation":
      return ye(t.from);
  }
  return t;
}, S_ = (t) => ye(t), nt = (t) => {
  const e = {};
  for (const n of Object.getOwnPropertySymbols(t))
    e[String(n)] = t[n];
  return e;
}, w_ = (t) => {
  switch (t._tag) {
    case "NeverKeyword":
      return 0;
    case "Literal":
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "UniqueSymbol":
      return 1;
    case "BooleanKeyword":
      return 2;
    case "StringKeyword":
    case "NumberKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
      return 3;
    case "ObjectKeyword":
      return 5;
    case "UnknownKeyword":
    case "AnyKeyword":
      return 6;
    default:
      return 4;
  }
}, O_ = /* @__PURE__ */ an(/* @__PURE__ */ bi(Ke, (t) => w_(t.type))), I_ = /* @__PURE__ */ an(/* @__PURE__ */ bi(Ke, (t) => {
  switch (vi(t.parameter)._tag) {
    case "StringKeyword":
      return 2;
    case "SymbolKeyword":
      return 3;
    case "TemplateLiteral":
      return 1;
  }
})), vi = (t) => {
  switch (t._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return t;
    case "Refinement":
      return vi(t.from);
  }
}, ge = (t) => St(ue(t), () => t._tag), ue = (t) => wd(t).pipe(jo(() => Tb(t)), jo(() => $b(t))), E_ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThan"), k_ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/GreaterThanOrEqualTo"), v_ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThan"), T_ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/LessThanOrEqualTo"), $_ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Int"), R_ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/MinLength"), N_ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Length"), M_ = /* @__PURE__ */ Symbol.for("@effect/schema/ArbitraryHookId"), A_ = /* @__PURE__ */ Symbol.for("effect/Context/Tag"), x_ = "effect/STM", P_ = /* @__PURE__ */ Symbol.for(x_), C_ = {
  ...Ws,
  _tag: "Tag",
  _op: "Tag",
  [P_]: Ln,
  [A_]: {
    _Service: (t) => t,
    _Identifier: (t) => t
  },
  toString() {
    return It(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Tag",
      key: this.key,
      stack: this.stack
    };
  },
  [z]() {
    return this.toJSON();
  },
  of(t) {
    return t;
  },
  context(t) {
    return xd(this, t);
  }
}, F_ = (t) => {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const n = new Error();
  Error.stackTraceLimit = e;
  const r = Object.create(C_);
  return Object.defineProperty(r, "stack", {
    get() {
      return n.stack;
    }
  }), r.key = t, r;
}, Ad = /* @__PURE__ */ Symbol.for("effect/Context"), j_ = {
  [Ad]: {
    _Services: (t) => t
  },
  [P](t) {
    if (K_(t) && this.unsafeMap.size === t.unsafeMap.size) {
      for (const e of this.unsafeMap.keys())
        if (!t.unsafeMap.has(e) || !C(this.unsafeMap.get(e), t.unsafeMap.get(e)))
          return !1;
      return !0;
    }
    return !1;
  },
  [F]() {
    return et(this, mi(this.unsafeMap.size));
  },
  pipe() {
    return R(this, arguments);
  },
  toString() {
    return It(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Context",
      services: Array.from(this.unsafeMap).map(it)
    };
  },
  [z]() {
    return this.toJSON();
  }
}, qn = (t) => {
  const e = Object.create(j_);
  return e.unsafeMap = t, e;
}, L_ = (t) => {
  const e = new Error(`Service not found${t.key ? `: ${String(t.key)}` : ""}`);
  if (t.stack) {
    const n = t.stack.split(`
`);
    if (n.length > 2) {
      const r = n[2].match(/at (.*)/);
      r && (e.message = e.message + ` (defined at ${r[1]})`);
    }
  }
  if (e.stack) {
    const n = e.stack.split(`
`);
    n.splice(1, 3), e.stack = n.join(`
`);
  }
  return e;
}, K_ = (t) => j(t, Ad), q_ = /* @__PURE__ */ qn(/* @__PURE__ */ new Map()), U_ = () => q_, xd = (t, e) => qn(/* @__PURE__ */ new Map([[t.key, e]])), D_ = /* @__PURE__ */ d(3, (t, e, n) => {
  const r = new Map(t.unsafeMap);
  return r.set(e.key, n), qn(r);
}), Pd = /* @__PURE__ */ d(2, (t, e) => {
  if (!t.unsafeMap.has(e.key))
    throw L_(e);
  return t.unsafeMap.get(e.key);
}), J_ = Pd, B_ = /* @__PURE__ */ d(2, (t, e) => t.unsafeMap.has(e.key) ? Tn(t.unsafeMap.get(e.key)) : Fo), H_ = /* @__PURE__ */ d(2, (t, e) => {
  const n = new Map(t.unsafeMap);
  for (const [r, s] of e.unsafeMap)
    n.set(r, s);
  return qn(n);
}), yn = F_, Ti = U_, V_ = xd, lr = D_, Er = J_, G_ = Pd, Qs = B_, W_ = H_, Cd = /* @__PURE__ */ Symbol.for("effect/Chunk");
function z_(t, e, n, r, s) {
  for (let o = e; o < Math.min(t.length, e + s); o++)
    n[r + o - e] = t[o];
  return n;
}
const Fd = [], Y_ = (t) => hi((e, n) => e.length === n.length && nn(e).every((r, s) => t(r, An(n, s)))), Q_ = /* @__PURE__ */ Y_(C), X_ = {
  [Cd]: {
    _A: (t) => t
  },
  toString() {
    return It(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Chunk",
      values: nn(this).map(it)
    };
  },
  [z]() {
    return this.toJSON();
  },
  [P](t) {
    return jd(t) && Q_(this, t);
  },
  [F]() {
    return et(this, Vs(nn(this)));
  },
  [Symbol.iterator]() {
    switch (this.backing._tag) {
      case "IArray":
        return this.backing.array[Symbol.iterator]();
      case "IEmpty":
        return Fd[Symbol.iterator]();
      default:
        return nn(this)[Symbol.iterator]();
    }
  },
  pipe() {
    return R(this, arguments);
  }
}, lt = (t) => {
  const e = Object.create(X_);
  switch (e.backing = t, t._tag) {
    case "IEmpty": {
      e.length = 0, e.depth = 0, e.left = e, e.right = e;
      break;
    }
    case "IConcat": {
      e.length = t.left.length + t.right.length, e.depth = 1 + Math.max(t.left.depth, t.right.depth), e.left = t.left, e.right = t.right;
      break;
    }
    case "IArray": {
      e.length = t.array.length, e.depth = 0, e.left = be, e.right = be;
      break;
    }
    case "ISingleton": {
      e.length = 1, e.depth = 0, e.left = be, e.right = be;
      break;
    }
    case "ISlice": {
      e.length = t.length, e.depth = t.chunk.depth + 1, e.left = be, e.right = be;
      break;
    }
  }
  return e;
}, jd = (t) => j(t, Cd), be = /* @__PURE__ */ lt({
  _tag: "IEmpty"
}), Ue = () => be, ac = (...t) => t.length === 1 ? Ut(t[0]) : eS(t), Ut = (t) => lt({
  _tag: "ISingleton",
  a: t
}), Ld = (t) => jd(t) ? t : lt({
  _tag: "IArray",
  array: ct(t)
}), Pc = (t, e, n) => {
  switch (t.backing._tag) {
    case "IArray": {
      z_(t.backing.array, 0, e, n, t.length);
      break;
    }
    case "IConcat": {
      Pc(t.left, e, n), Pc(t.right, e, n + t.left.length);
      break;
    }
    case "ISingleton": {
      e[n] = t.backing.a;
      break;
    }
    case "ISlice": {
      let r = 0, s = n;
      for (; r < t.length; )
        e[s] = An(t, r), r += 1, s += 1;
      break;
    }
  }
}, Z_ = (t) => {
  switch (t.backing._tag) {
    case "IEmpty":
      return Fd;
    case "IArray":
      return t.backing.array;
    default: {
      const e = new Array(t.length);
      return Pc(t, e, 0), t.backing = {
        _tag: "IArray",
        array: e
      }, t.left = be, t.right = be, t.depth = 0, e;
    }
  }
}, nn = Z_, tS = (t) => {
  switch (t.backing._tag) {
    case "IEmpty":
    case "ISingleton":
      return t;
    case "IArray":
      return lt({
        _tag: "IArray",
        array: Du(t.backing.array)
      });
    case "IConcat":
      return lt({
        _tag: "IConcat",
        left: Un(t.backing.right),
        right: Un(t.backing.left)
      });
    case "ISlice":
      return Da(Du(nn(t)));
  }
}, Un = tS, Da = (t) => lt({
  _tag: "IArray",
  array: t
}), eS = (t) => Da(t), An = /* @__PURE__ */ d(2, (t, e) => {
  switch (t.backing._tag) {
    case "IEmpty":
      throw new Error("Index out of bounds");
    case "ISingleton": {
      if (e !== 0)
        throw new Error("Index out of bounds");
      return t.backing.a;
    }
    case "IArray": {
      if (e >= t.length || e < 0)
        throw new Error("Index out of bounds");
      return t.backing.array[e];
    }
    case "IConcat":
      return e < t.left.length ? An(t.left, e) : An(t.right, e - t.left.length);
    case "ISlice":
      return An(t.backing.chunk, e + t.backing.offset);
  }
}), nS = /* @__PURE__ */ d(2, (t, e) => re(t, Ut(e))), le = /* @__PURE__ */ d(2, (t, e) => re(Ut(e), t)), Cc = /* @__PURE__ */ d(2, (t, e) => {
  if (e <= 0)
    return t;
  if (e >= t.length)
    return be;
  switch (t.backing._tag) {
    case "ISlice":
      return lt({
        _tag: "ISlice",
        chunk: t.backing.chunk,
        offset: t.backing.offset + e,
        length: t.backing.length - e
      });
    case "IConcat":
      return e > t.left.length ? Cc(t.right, e - t.left.length) : lt({
        _tag: "IConcat",
        left: Cc(t.left, e),
        right: t.right
      });
    default:
      return lt({
        _tag: "ISlice",
        chunk: t,
        offset: e,
        length: t.length - e
      });
  }
}), re = /* @__PURE__ */ d(2, (t, e) => {
  if (t.backing._tag === "IEmpty")
    return e;
  if (e.backing._tag === "IEmpty")
    return t;
  const n = e.depth - t.depth;
  if (Math.abs(n) <= 1)
    return lt({
      _tag: "IConcat",
      left: t,
      right: e
    });
  if (n < -1)
    if (t.left.depth >= t.right.depth) {
      const r = re(t.right, e);
      return lt({
        _tag: "IConcat",
        left: t.left,
        right: r
      });
    } else {
      const r = re(t.right.right, e);
      if (r.depth === t.depth - 3) {
        const s = lt({
          _tag: "IConcat",
          left: t.right.left,
          right: r
        });
        return lt({
          _tag: "IConcat",
          left: t.left,
          right: s
        });
      } else {
        const s = lt({
          _tag: "IConcat",
          left: t.left,
          right: t.right.left
        });
        return lt({
          _tag: "IConcat",
          left: s,
          right: r
        });
      }
    }
  else if (e.right.depth >= e.left.depth) {
    const r = re(t, e.left);
    return lt({
      _tag: "IConcat",
      left: r,
      right: e.right
    });
  } else {
    const r = re(t, e.left.left);
    if (r.depth === e.depth - 3) {
      const s = lt({
        _tag: "IConcat",
        left: r,
        right: e.left.right
      });
      return lt({
        _tag: "IConcat",
        left: s,
        right: e.right
      });
    } else {
      const s = lt({
        _tag: "IConcat",
        left: e.left.right,
        right: e.right
      });
      return lt({
        _tag: "IConcat",
        left: r,
        right: s
      });
    }
  }
}), rS = (t) => t.length === 0, Dn = (t) => t.length > 0, Kd = (t) => An(t, 0), Jn = Kd, Ye = (t) => Cc(t, 1), un = 5, Ja = /* @__PURE__ */ Math.pow(2, un), sS = Ja - 1, oS = Ja / 2, iS = Ja / 4;
function cS(t) {
  return t -= t >> 1 & 1431655765, t = (t & 858993459) + (t >> 2 & 858993459), t = t + (t >> 4) & 252645135, t += t >> 8, t += t >> 16, t & 127;
}
function Bn(t, e) {
  return e >>> t & sS;
}
function $n(t) {
  return 1 << t;
}
function qd(t, e) {
  return cS(t & e - 1);
}
const aS = (t, e) => ({
  value: t,
  previous: e
});
function xn(t, e, n, r) {
  let s = r;
  if (!t) {
    const o = r.length;
    s = new Array(o);
    for (let i = 0; i < o; ++i) s[i] = r[i];
  }
  return s[e] = n, s;
}
function Ud(t, e, n) {
  const r = n.length - 1;
  let s = 0, o = 0, i = n;
  if (t)
    s = o = e;
  else
    for (i = new Array(r); s < e; ) i[o++] = n[s++];
  for (++s; s <= r; ) i[o++] = n[s++];
  return t && (i.length = r), i;
}
function uS(t, e, n, r) {
  const s = r.length;
  if (t) {
    let u = s;
    for (; u >= e; ) r[u--] = r[u];
    return r[e] = n, r;
  }
  let o = 0, i = 0;
  const a = new Array(s + 1);
  for (; o < e; ) a[i++] = r[o++];
  for (a[e] = n; o < s; ) a[++i] = r[o++];
  return a;
}
class De {
  constructor() {
    c(this, "_tag", "EmptyNode");
  }
  modify(e, n, r, s, o, i) {
    const a = r(w());
    return ht(a) ? new De() : (++i.value, new rn(e, s, o, a));
  }
}
function se(t) {
  return jh(t, "EmptyNode");
}
function lS(t) {
  return se(t) || t._tag === "LeafNode" || t._tag === "CollisionNode";
}
function $i(t, e) {
  return se(t) ? !1 : e === t.edit;
}
class rn {
  constructor(e, n, r, s) {
    c(this, "edit");
    c(this, "hash");
    c(this, "key");
    c(this, "value");
    c(this, "_tag", "LeafNode");
    this.edit = e, this.hash = n, this.key = r, this.value = s;
  }
  modify(e, n, r, s, o, i) {
    if (C(o, this.key)) {
      const u = r(this.value);
      return u === this.value ? this : ht(u) ? (--i.value, new De()) : $i(this, e) ? (this.value = u, this) : new rn(e, s, o, u);
    }
    const a = r(w());
    return ht(a) ? this : (++i.value, Dd(e, n, this.hash, this, s, new rn(e, s, o, a)));
  }
}
class Ba {
  constructor(e, n, r) {
    c(this, "edit");
    c(this, "hash");
    c(this, "children");
    c(this, "_tag", "CollisionNode");
    this.edit = e, this.hash = n, this.children = r;
  }
  modify(e, n, r, s, o, i) {
    if (s === this.hash) {
      const u = $i(this, e), l = this.updateCollisionList(u, e, this.hash, this.children, r, o, i);
      return l === this.children ? this : l.length > 1 ? new Ba(e, this.hash, l) : l[0];
    }
    const a = r(w());
    return ht(a) ? this : (++i.value, Dd(e, n, this.hash, this, s, new rn(e, s, o, a)));
  }
  updateCollisionList(e, n, r, s, o, i, a) {
    const u = s.length;
    for (let f = 0; f < u; ++f) {
      const h = s[f];
      if ("key" in h && C(i, h.key)) {
        const p = h.value, m = o(p);
        return m === p ? s : ht(m) ? (--a.value, Ud(e, f, s)) : xn(e, f, new rn(n, r, i, m), s);
      }
    }
    const l = o(w());
    return ht(l) ? s : (++a.value, xn(e, u, new rn(n, r, i, l), s));
  }
}
class Hn {
  constructor(e, n, r) {
    c(this, "edit");
    c(this, "mask");
    c(this, "children");
    c(this, "_tag", "IndexedNode");
    this.edit = e, this.mask = n, this.children = r;
  }
  modify(e, n, r, s, o, i) {
    const a = this.mask, u = this.children, l = Bn(n, s), f = $n(l), h = qd(a, f), p = a & f, m = $i(this, e);
    if (!p) {
      const N = new De().modify(e, n + un, r, s, o, i);
      return N ? u.length >= oS ? hS(e, l, N, a, u) : new Hn(e, a | f, uS(m, h, N, u)) : this;
    }
    const y = u[h], S = y.modify(e, n + un, r, s, o, i);
    if (y === S) return this;
    let _ = a, O;
    if (se(S)) {
      if (_ &= ~f, !_) return new De();
      if (u.length <= 2 && lS(u[h ^ 1]))
        return u[h ^ 1];
      O = Ud(m, h, u);
    } else
      O = xn(m, h, S, u);
    return m ? (this.mask = _, this.children = O, this) : new Hn(e, _, O);
  }
}
class Ha {
  constructor(e, n, r) {
    c(this, "edit");
    c(this, "size");
    c(this, "children");
    c(this, "_tag", "ArrayNode");
    this.edit = e, this.size = n, this.children = r;
  }
  modify(e, n, r, s, o, i) {
    let a = this.size;
    const u = this.children, l = Bn(n, s), f = u[l], h = (f || new De()).modify(e, n + un, r, s, o, i);
    if (f === h) return this;
    const p = $i(this, e);
    let m;
    if (se(f) && !se(h))
      ++a, m = xn(p, l, h, u);
    else if (!se(f) && se(h)) {
      if (--a, a <= iS)
        return fS(e, a, l, u);
      m = xn(p, l, new De(), u);
    } else
      m = xn(p, l, h, u);
    return p ? (this.size = a, this.children = m, this) : new Ha(e, a, m);
  }
}
function fS(t, e, n, r) {
  const s = new Array(e - 1);
  let o = 0, i = 0;
  for (let a = 0, u = r.length; a < u; ++a)
    if (a !== n) {
      const l = r[a];
      l && !se(l) && (s[o++] = l, i |= 1 << a);
    }
  return new Hn(t, i, s);
}
function hS(t, e, n, r, s) {
  const o = [];
  let i = r, a = 0;
  for (let u = 0; i; ++u)
    i & 1 && (o[u] = s[a++]), i >>>= 1;
  return o[e] = n, new Ha(t, a + 1, o);
}
function dS(t, e, n, r, s, o) {
  if (n === s) return new Ba(t, n, [o, r]);
  const i = Bn(e, n), a = Bn(e, s);
  if (i === a)
    return (u) => new Hn(t, $n(i) | $n(a), [u]);
  {
    const u = i < a ? [r, o] : [o, r];
    return new Hn(t, $n(i) | $n(a), u);
  }
}
function Dd(t, e, n, r, s, o) {
  let i, a = e;
  for (; ; ) {
    const u = dS(t, a, n, r, s, o);
    if (typeof u == "function")
      i = aS(u, i), a = a + un;
    else {
      let l = u;
      for (; i != null; )
        l = i.value(l), i = i.previous;
      return l;
    }
  }
}
const Jd = "effect/HashMap", Fc = /* @__PURE__ */ Symbol.for(Jd), pS = {
  [Fc]: Fc,
  [Symbol.iterator]() {
    return new Ri(this, (t, e) => [t, e]);
  },
  [F]() {
    let t = k(Jd);
    for (const e of this)
      t ^= g(k(e[0]), U(k(e[1])));
    return et(this, t);
  },
  [P](t) {
    if (yS(t)) {
      if (t._size !== this._size)
        return !1;
      for (const e of this) {
        const n = g(t, Ga(e[0], k(e[0])));
        if (ht(n))
          return !1;
        if (!C(e[1], n.value))
          return !1;
      }
      return !0;
    }
    return !1;
  },
  toString() {
    return It(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashMap",
      values: Array.from(this).map(it)
    };
  },
  [z]() {
    return this.toJSON();
  },
  pipe() {
    return R(this, arguments);
  }
}, Va = (t, e, n, r) => {
  const s = Object.create(pS);
  return s._editable = t, s._edit = e, s._root = n, s._size = r, s;
};
class Ri {
  constructor(e, n) {
    c(this, "map");
    c(this, "f");
    c(this, "v");
    this.map = e, this.f = n, this.v = Bd(this.map._root, this.f, void 0);
  }
  next() {
    if (ht(this.v))
      return {
        done: !0,
        value: void 0
      };
    const e = this.v.value;
    return this.v = Uo(e.cont), {
      done: !1,
      value: e.value
    };
  }
  [Symbol.iterator]() {
    return new Ri(this.map, this.f);
  }
}
const Uo = (t) => t ? Hd(t[0], t[1], t[2], t[3], t[4]) : w(), Bd = (t, e, n = void 0) => {
  switch (t._tag) {
    case "LeafNode":
      return Z(t.value) ? E({
        value: e(t.key, t.value.value),
        cont: n
      }) : Uo(n);
    case "CollisionNode":
    case "ArrayNode":
    case "IndexedNode": {
      const r = t.children;
      return Hd(r.length, r, 0, e, n);
    }
    default:
      return Uo(n);
  }
}, Hd = (t, e, n, r, s) => {
  for (; n < t; ) {
    const o = e[n++];
    if (o && !se(o))
      return Bd(o, r, [t, e, n, r, s]);
  }
  return Uo(s);
}, gS = /* @__PURE__ */ Va(!1, 0, /* @__PURE__ */ new De(), 0), Ni = () => gS, mS = (t) => {
  const e = Gd(Ni());
  for (const n of t)
    vs(e, n[0], n[1]);
  return OS(e);
}, yS = (t) => j(t, Fc), bS = (t) => t && se(t._root), _S = /* @__PURE__ */ d(2, (t, e) => Ga(t, e, k(e))), Ga = /* @__PURE__ */ d(3, (t, e, n) => {
  let r = t._root, s = 0;
  for (; ; )
    switch (r._tag) {
      case "LeafNode":
        return C(e, r.key) ? r.value : w();
      case "CollisionNode": {
        if (n === r.hash) {
          const o = r.children;
          for (let i = 0, a = o.length; i < a; ++i) {
            const u = o[i];
            if ("key" in u && C(e, u.key))
              return u.value;
          }
        }
        return w();
      }
      case "IndexedNode": {
        const o = Bn(s, n), i = $n(o);
        if (r.mask & i) {
          r = r.children[qd(r.mask, i)], s += un;
          break;
        }
        return w();
      }
      case "ArrayNode": {
        if (r = r.children[Bn(s, n)], r) {
          s += un;
          break;
        }
        return w();
      }
      default:
        return w();
    }
}), SS = /* @__PURE__ */ d(2, (t, e) => Z(Ga(t, e, k(e)))), vs = /* @__PURE__ */ d(3, (t, e, n) => Wa(t, e, () => E(n))), wS = /* @__PURE__ */ d(3, (t, e, n) => t._editable ? (t._root = e, t._size = n, t) : e === t._root ? t : Va(t._editable, t._edit, e, n)), Vd = (t) => new Ri(t, (e) => e), Do = (t) => t._size, Gd = (t) => Va(!0, t._edit + 1, t._root, t._size), OS = (t) => (t._editable = !1, t), Wa = /* @__PURE__ */ d(3, (t, e, n) => IS(t, e, k(e), n)), IS = /* @__PURE__ */ d(4, (t, e, n, r) => {
  const s = {
    value: t._size
  }, o = t._root.modify(t._editable ? t._edit : NaN, 0, r, n, e, s);
  return g(t, wS(o, s.value));
}), Yu = /* @__PURE__ */ d(2, (t, e) => Wa(t, e, w)), ES = /* @__PURE__ */ d(2, (t, e) => Mi(t, Ni(), (n, r, s) => vs(n, s, e(r, s)))), kS = /* @__PURE__ */ d(2, (t, e) => Mi(t, void 0, (n, r, s) => e(r, s))), Mi = /* @__PURE__ */ d(3, (t, e, n) => {
  const r = t._root;
  if (r._tag === "LeafNode")
    return Z(r.value) ? n(e, r.value.value, r.key) : e;
  if (r._tag === "EmptyNode")
    return e;
  const s = [r.children];
  let o;
  for (; o = s.pop(); )
    for (let i = 0, a = o.length; i < a; ) {
      const u = o[i++];
      u && !se(u) && (u._tag === "LeafNode" ? Z(u.value) && (e = n(e, u.value.value, u.key)) : s.push(u.children));
    }
  return e;
}), Wd = "effect/HashSet", jc = /* @__PURE__ */ Symbol.for(Wd), vS = {
  [jc]: jc,
  [Symbol.iterator]() {
    return Vd(this._keyMap);
  },
  [F]() {
    return et(this, U(k(this._keyMap))(k(Wd)));
  },
  [P](t) {
    return TS(t) ? Do(this._keyMap) === Do(t._keyMap) && C(this._keyMap, t._keyMap) : !1;
  },
  toString() {
    return It(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashSet",
      values: Array.from(this).map(it)
    };
  },
  [z]() {
    return this.toJSON();
  },
  pipe() {
    return R(this, arguments);
  }
}, Ai = (t) => {
  const e = Object.create(vS);
  return e._keyMap = t, e;
}, TS = (t) => j(t, jc), $S = /* @__PURE__ */ Ai(/* @__PURE__ */ Ni()), xi = () => $S, RS = (t) => {
  const e = za(xi());
  for (const n of t)
    Ts(e, n);
  return Ya(e);
}, NS = (...t) => {
  const e = za(xi());
  for (const n of t)
    Ts(e, n);
  return Ya(e);
}, MS = /* @__PURE__ */ d(2, (t, e) => SS(t._keyMap, e)), AS = (t) => Do(t._keyMap), za = (t) => Ai(Gd(t._keyMap)), Ya = (t) => (t._keyMap._editable = !1, t), zd = /* @__PURE__ */ d(2, (t, e) => {
  const n = za(t);
  return e(n), Ya(n);
}), Ts = /* @__PURE__ */ d(2, (t, e) => t._keyMap._editable ? (vs(e, !0)(t._keyMap), t) : Ai(vs(e, !0)(t._keyMap))), Yd = /* @__PURE__ */ d(2, (t, e) => t._keyMap._editable ? (Yu(e)(t._keyMap), t) : Ai(Yu(e)(t._keyMap))), xS = /* @__PURE__ */ d(2, (t, e) => zd(t, (n) => {
  for (const r of e)
    Yd(n, r);
})), PS = /* @__PURE__ */ d(2, (t, e) => zd(xi(), (n) => {
  CS(t, (r) => Ts(n, r));
  for (const r of e)
    Ts(n, r);
})), CS = /* @__PURE__ */ d(2, (t, e) => kS(t._keyMap, (n, r) => e(r))), FS = /* @__PURE__ */ d(3, (t, e, n) => Mi(t._keyMap, e, (r, s, o) => n(r, o))), ln = xi, jS = RS, Qa = NS, LS = MS, Qd = AS, kr = Ts, Xd = Yd, Qu = xS, $s = PS, Jo = FS, Xu = /* @__PURE__ */ Symbol.for("effect/MutableRef"), KS = {
  [Xu]: Xu,
  toString() {
    return It(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableRef",
      current: it(this.current)
    };
  },
  [z]() {
    return this.toJSON();
  },
  pipe() {
    return R(this, arguments);
  }
}, Zd = (t) => {
  const e = Object.create(KS);
  return e.current = t, e;
}, Pi = (t) => t.current, tp = /* @__PURE__ */ d(2, (t, e) => (t.current = e, t)), Ci = "effect/FiberId", fn = /* @__PURE__ */ Symbol.for(Ci), Bo = "None", Lc = "Runtime", Kc = "Composite", qS = /* @__PURE__ */ ft(`${Ci}-${Bo}`);
var Jf;
let US = class {
  constructor() {
    c(this, Jf, fn);
    c(this, "_tag", Bo);
    c(this, "id", -1);
    c(this, "startTimeMillis", -1);
  }
  [(Jf = fn, F)]() {
    return qS;
  }
  [P](e) {
    return Fi(e) && e._tag === Bo;
  }
  toString() {
    return It(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag
    };
  }
  [z]() {
    return this.toJSON();
  }
};
var Bf;
class ep {
  constructor(e, n) {
    c(this, "id");
    c(this, "startTimeMillis");
    c(this, Bf, fn);
    c(this, "_tag", Lc);
    this.id = e, this.startTimeMillis = n;
  }
  [(Bf = fn, F)]() {
    return et(this, ft(`${Ci}-${this._tag}-${this.id}-${this.startTimeMillis}`));
  }
  [P](e) {
    return Fi(e) && e._tag === Lc && this.id === e.id && this.startTimeMillis === e.startTimeMillis;
  }
  toString() {
    return It(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      id: this.id,
      startTimeMillis: this.startTimeMillis
    };
  }
  [z]() {
    return this.toJSON();
  }
}
var Hf;
let DS = class {
  constructor(e, n) {
    c(this, "left");
    c(this, "right");
    c(this, Hf, fn);
    c(this, "_tag", Kc);
    c(this, "_hash");
    this.left = e, this.right = n;
  }
  [(Hf = fn, F)]() {
    return g(ft(`${Ci}-${this._tag}`), U(k(this.left)), U(k(this.right)), et(this));
  }
  [P](e) {
    return Fi(e) && e._tag === Kc && C(this.left, e.left) && C(this.right, e.right);
  }
  toString() {
    return It(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      left: it(this.left),
      right: it(this.right)
    };
  }
  [z]() {
    return this.toJSON();
  }
};
const JS = /* @__PURE__ */ new US(), BS = (t, e) => new ep(t, e), HS = (t, e) => new DS(t, e), Fi = (t) => j(t, fn), qc = (t) => {
  switch (t._tag) {
    case Bo:
      return ln();
    case Lc:
      return Qa(t.id);
    case Kc:
      return g(qc(t.left), $s(qc(t.right)));
  }
}, Zu = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/Fiber/Id/_fiberCounter"), () => Zd(0)), np = (t) => Array.from(qc(t)).map((n) => `#${n}`).join(","), VS = () => {
  const t = Pi(Zu);
  return g(Zu, tp(t + 1)), new ep(t, Date.now());
}, Vn = JS, GS = BS, WS = HS, zS = Fi, YS = np, rp = VS, Xa = Ni, QS = mS, XS = bS, sp = _S, op = vs, ip = Vd, ZS = Do, tw = Wa, cp = ES, ap = Mi, Rs = /* @__PURE__ */ Symbol.for("effect/List"), Uc = (t) => ct(t), ew = (t) => Ch(La(t), Uc), nw = /* @__PURE__ */ ew(C), rw = {
  [Rs]: Rs,
  _tag: "Cons",
  toString() {
    return It(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Cons",
      values: Uc(this).map(it)
    };
  },
  [z]() {
    return this.toJSON();
  },
  [P](t) {
    return lp(t) && this._tag === t._tag && nw(this, t);
  },
  [F]() {
    return et(this, Vs(Uc(this)));
  },
  [Symbol.iterator]() {
    let t = !1, e = this;
    return {
      next() {
        if (t)
          return this.return();
        if (e._tag === "Nil")
          return t = !0, this.return();
        const n = e.head;
        return e = e.tail, {
          done: t,
          value: n
        };
      },
      return(n) {
        return t || (t = !0), {
          done: !0,
          value: n
        };
      }
    };
  },
  pipe() {
    return R(this, arguments);
  }
}, Ho = (t, e) => {
  const n = Object.create(rw);
  return n.head = t, n.tail = e, n;
}, sw = /* @__PURE__ */ ft("Nil"), ow = {
  [Rs]: Rs,
  _tag: "Nil",
  toString() {
    return It(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Nil"
    };
  },
  [z]() {
    return this.toJSON();
  },
  [F]() {
    return sw;
  },
  [P](t) {
    return lp(t) && this._tag === t._tag;
  },
  [Symbol.iterator]() {
    return {
      next() {
        return {
          done: !0,
          value: void 0
        };
      }
    };
  },
  pipe() {
    return R(this, arguments);
  }
}, up = /* @__PURE__ */ Object.create(ow), lp = (t) => j(t, Rs), Re = (t) => t._tag === "Nil", fp = (t) => t._tag === "Cons", iw = () => up, hn = (t, e) => Ho(t, e), Gn = iw, Za = (t) => Ho(t, up), cw = /* @__PURE__ */ d(2, (t, e) => uw(e, t)), aw = /* @__PURE__ */ d(2, (t, e) => hn(e, t)), uw = /* @__PURE__ */ d(2, (t, e) => {
  if (Re(t))
    return e;
  if (Re(e))
    return t;
  {
    const n = Ho(e.head, t);
    let r = n, s = e.tail;
    for (; !Re(s); ) {
      const o = Ho(s.head, t);
      r.tail = o, r = o, s = s.tail;
    }
    return n;
  }
}), lw = /* @__PURE__ */ d(3, (t, e, n) => {
  let r = e, s = t;
  for (; !Re(s); )
    r = n(r, s.head), s = s.tail;
  return r;
}), fw = (t) => {
  let e = Gn(), n = t;
  for (; !Re(n); )
    e = aw(e, n.head), n = n.tail;
  return e;
}, tu = /* @__PURE__ */ function() {
  function t(e) {
    e && Object.assign(this, e);
  }
  return t.prototype = yi, t;
}(), hw = /* @__PURE__ */ Symbol.for("effect/DifferContextPatch");
function tl(t) {
  return t;
}
const Xs = {
  ...tu.prototype,
  [hw]: {
    _Value: tl,
    _Patch: tl
  }
}, dw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Xs), {
  _tag: "Empty"
}), pw = /* @__PURE__ */ Object.create(dw), hp = () => pw, gw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Xs), {
  _tag: "AndThen"
}), mw = (t, e) => {
  const n = Object.create(gw);
  return n.first = t, n.second = e, n;
}, yw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Xs), {
  _tag: "AddService"
}), bw = (t, e) => {
  const n = Object.create(yw);
  return n.key = t, n.service = e, n;
}, _w = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Xs), {
  _tag: "RemoveService"
}), Sw = (t) => {
  const e = Object.create(_w);
  return e.key = t, e;
}, ww = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Xs), {
  _tag: "UpdateService"
}), Ow = (t, e) => {
  const n = Object.create(ww);
  return n.key = t, n.update = e, n;
}, Iw = (t, e) => {
  const n = new Map(t.unsafeMap);
  let r = hp();
  for (const [s, o] of e.unsafeMap.entries())
    if (n.has(s)) {
      const i = n.get(s);
      n.delete(s), C(i, o) || (r = So(Ow(s, () => o))(r));
    } else
      n.delete(s), r = So(bw(s, o))(r);
  for (const [s] of n.entries())
    r = So(Sw(s))(r);
  return r;
}, So = /* @__PURE__ */ d(2, (t, e) => mw(t, e)), Ew = /* @__PURE__ */ d(2, (t, e) => {
  if (t._tag === "Empty")
    return e;
  let n = !1, r = Ut(t);
  const s = new Map(e.unsafeMap);
  for (; Dn(r); ) {
    const i = Jn(r), a = Ye(r);
    switch (i._tag) {
      case "Empty": {
        r = a;
        break;
      }
      case "AddService": {
        s.set(i.key, i.service), r = a;
        break;
      }
      case "AndThen": {
        r = le(le(a, i.second), i.first);
        break;
      }
      case "RemoveService": {
        s.delete(i.key), r = a;
        break;
      }
      case "UpdateService": {
        s.set(i.key, i.update(s.get(i.key))), n = !0, r = a;
        break;
      }
    }
  }
  if (!n)
    return qn(s);
  const o = /* @__PURE__ */ new Map();
  for (const [i] of e.unsafeMap)
    s.has(i) && (o.set(i, s.get(i)), s.delete(i));
  for (const [i, a] of s)
    o.set(i, a);
  return qn(o);
}), kw = /* @__PURE__ */ Symbol.for("effect/DifferHashSetPatch");
function uc(t) {
  return t;
}
const ji = {
  ...tu.prototype,
  [kw]: {
    _Value: uc,
    _Key: uc,
    _Patch: uc
  }
}, vw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(ji), {
  _tag: "Empty"
}), Tw = /* @__PURE__ */ Object.create(vw), dp = () => Tw, $w = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(ji), {
  _tag: "AndThen"
}), Rw = (t, e) => {
  const n = Object.create($w);
  return n.first = t, n.second = e, n;
}, Nw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(ji), {
  _tag: "Add"
}), Mw = (t) => {
  const e = Object.create(Nw);
  return e.value = t, e;
}, Aw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(ji), {
  _tag: "Remove"
}), xw = (t) => {
  const e = Object.create(Aw);
  return e.value = t, e;
}, Pw = (t, e) => {
  const [n, r] = Jo([t, dp()], ([s, o], i) => LS(i)(s) ? [Xd(i)(s), o] : [s, Dc(Mw(i))(o)])(e);
  return Jo(r, (s, o) => Dc(xw(o))(s))(n);
}, Dc = /* @__PURE__ */ d(2, (t, e) => Rw(t, e)), Cw = /* @__PURE__ */ d(2, (t, e) => {
  if (t._tag === "Empty")
    return e;
  let n = e, r = Ut(t);
  for (; Dn(r); ) {
    const s = Jn(r), o = Ye(r);
    switch (s._tag) {
      case "Empty": {
        r = o;
        break;
      }
      case "AndThen": {
        r = le(s.first)(le(s.second)(o));
        break;
      }
      case "Add": {
        n = kr(s.value)(n), r = o;
        break;
      }
      case "Remove":
        n = Xd(s.value)(n), r = o;
    }
  }
  return n;
}), Fw = /* @__PURE__ */ Symbol.for("effect/DifferReadonlyArrayPatch");
function el(t) {
  return t;
}
const Zs = {
  ...tu.prototype,
  [Fw]: {
    _Value: el,
    _Patch: el
  }
}, jw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Zs), {
  _tag: "Empty"
}), Lw = /* @__PURE__ */ Object.create(jw), pp = () => Lw, Kw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Zs), {
  _tag: "AndThen"
}), qw = (t, e) => {
  const n = Object.create(Kw);
  return n.first = t, n.second = e, n;
}, Uw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Zs), {
  _tag: "Append"
}), Dw = (t) => {
  const e = Object.create(Uw);
  return e.values = t, e;
}, Jw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Zs), {
  _tag: "Slice"
}), Bw = (t, e) => {
  const n = Object.create(Jw);
  return n.from = t, n.until = e, n;
}, Hw = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(Zs), {
  _tag: "Update"
}), Vw = (t, e) => {
  const n = Object.create(Hw);
  return n.index = t, n.patch = e, n;
}, Gw = (t) => {
  let e = 0, n = pp();
  for (; e < t.oldValue.length && e < t.newValue.length; ) {
    const r = t.oldValue[e], s = t.newValue[e], o = t.differ.diff(r, s);
    C(o, t.differ.empty) || (n = wo(n, Vw(e, o))), e = e + 1;
  }
  return e < t.oldValue.length && (n = wo(n, Bw(0, e))), e < t.newValue.length && (n = wo(n, Dw(nb(e)(t.newValue)))), n;
}, wo = /* @__PURE__ */ d(2, (t, e) => qw(t, e)), Ww = /* @__PURE__ */ d(3, (t, e, n) => {
  if (t._tag === "Empty")
    return e;
  let r = e.slice(), s = ee(t);
  for (; _o(s); ) {
    const o = jt(s), i = cn(s);
    switch (o._tag) {
      case "Empty": {
        s = i;
        break;
      }
      case "AndThen": {
        i.unshift(o.first, o.second), s = i;
        break;
      }
      case "Append": {
        for (const a of o.values)
          r.push(a);
        s = i;
        break;
      }
      case "Slice": {
        r = r.slice(o.from, o.until), s = i;
        break;
      }
      case "Update": {
        r[o.index] = n.patch(o.patch, r[o.index]), s = i;
        break;
      }
    }
  }
  return r;
}), zw = /* @__PURE__ */ Symbol.for("effect/Differ"), Yw = {
  [zw]: {
    _P: rt,
    _V: rt
  }
}, er = (t) => {
  const e = Object.create(Yw);
  return e.empty = t.empty, e.diff = t.diff, e.combine = t.combine, e.patch = t.patch, e;
}, Qw = () => er({
  empty: hp(),
  combine: (t, e) => So(e)(t),
  diff: (t, e) => Iw(t, e),
  patch: (t, e) => Ew(e)(t)
}), Xw = () => er({
  empty: dp(),
  combine: (t, e) => Dc(e)(t),
  diff: (t, e) => Pw(t, e),
  patch: (t, e) => Cw(e)(t)
}), Zw = (t) => er({
  empty: pp(),
  combine: (e, n) => wo(e, n),
  diff: (e, n) => Gw({
    oldValue: e,
    newValue: n,
    differ: t
  }),
  patch: (e, n) => Ww(e, n, t)
}), gp = () => t0((t, e) => e), t0 = (t) => er({
  empty: rt,
  combine: (e, n) => e === rt ? n : n === rt ? e : (r) => n(e(r)),
  diff: (e, n) => C(e, n) ? rt : fi(n),
  patch: (e, n) => t(n, e(n))
}), Ns = 255, mp = 8, Jc = (t) => t & Ns, Bc = (t) => t >> mp & Ns, to = (t, e) => (t & Ns) + ((e & t & Ns) << mp), e0 = /* @__PURE__ */ to(0, 0), n0 = (t) => to(t, t), r0 = (t) => to(t, 0), s0 = /* @__PURE__ */ d(2, (t, e) => to(Jc(t) & ~e, Bc(t))), o0 = /* @__PURE__ */ d(2, (t, e) => t | e), i0 = (t) => ~t >>> 0 & Ns, c0 = 0, nr = 1, a0 = 2, yp = 4, Hc = 16, bp = 32, u0 = (t) => Li(t, bp), l0 = /* @__PURE__ */ d(2, (t, e) => t | e), xe = (t) => _p(t) && !h0(t), _p = (t) => Li(t, nr), Li = /* @__PURE__ */ d(2, (t, e) => (t & e) !== 0), Sp = (...t) => t.reduce((e, n) => e | n, 0), f0 = /* @__PURE__ */ Sp(c0), nl = (t) => Li(t, yp), h0 = (t) => Li(t, Hc), Oo = /* @__PURE__ */ d(2, (t, e) => to(t ^ e, e)), Io = /* @__PURE__ */ d(2, (t, e) => t & (i0(Jc(e)) | Bc(e)) | Jc(e) & Bc(e)), rl = /* @__PURE__ */ er({
  empty: e0,
  diff: (t, e) => Oo(t, e),
  combine: (t, e) => o0(e)(t),
  patch: (t, e) => Io(e, t)
}), d0 = n0, wp = r0, sl = s0, Op = (t, e) => ({
  _tag: "Par",
  left: t,
  right: e
}), lo = (t, e) => ({
  _tag: "Seq",
  left: t,
  right: e
}), p0 = (t) => {
  let e = Za(t), n = Gn();
  for (; ; ) {
    const [r, s] = lw(e, [Ip(), Gn()], ([o, i], a) => {
      const [u, l] = g0(a);
      return [S0(o, u), cw(i, l)];
    });
    if (n = m0(n, r), Re(s))
      return fw(n);
    e = s;
  }
  throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues");
}, g0 = (t) => {
  let e = t, n = Ip(), r = Gn(), s = Gn();
  for (; ; )
    switch (e._tag) {
      case "Empty": {
        if (Re(r))
          return [n, s];
        e = r.head, r = r.tail;
        break;
      }
      case "Par": {
        r = hn(e.right, r), e = e.left;
        break;
      }
      case "Seq": {
        const o = e.left, i = e.right;
        switch (o._tag) {
          case "Empty": {
            e = i;
            break;
          }
          case "Par": {
            const a = o.left, u = o.right;
            e = Op(lo(a, i), lo(u, i));
            break;
          }
          case "Seq": {
            const a = o.left, u = o.right;
            e = lo(a, lo(u, i));
            break;
          }
          case "Single": {
            e = o, s = hn(i, s);
            break;
          }
        }
        break;
      }
      case "Single": {
        if (n = _0(n, e), Re(r))
          return [n, s];
        e = r.head, r = r.tail;
        break;
      }
    }
  throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues");
}, m0 = (t, e) => {
  if (Re(t))
    return Za(lc(e));
  if (w0(e))
    return t;
  const n = T0(t.head), r = O0(e);
  return n.length === 1 && r.length === 1 && C(n[0], r[0]) ? hn(v0(t.head, lc(e)), t.tail) : hn(lc(e), t);
}, y0 = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockParallel"), b0 = {
  /* c8 ignore next */
  _R: (t) => t
};
var Vf;
Vf = y0;
class eu {
  constructor(e) {
    c(this, "map");
    c(this, Vf, b0);
    this.map = e;
  }
}
const Ip = () => new eu(Xa()), _0 = (t, e) => new eu(tw(t.map, e.dataSource, (n) => Ly(sd(n, nS(e.blockedRequest)), () => Ut(e.blockedRequest)))), S0 = (t, e) => new eu(ap(t.map, e.map, (n, r, s) => op(n, s, de(sp(n, s), {
  onNone: () => r,
  onSome: (o) => re(r, o)
})))), w0 = (t) => XS(t.map), O0 = (t) => Array.from(ip(t.map)), lc = (t) => k0(cp(t.map, (e) => Ut(e))), I0 = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockSequential"), E0 = {
  /* c8 ignore next */
  _R: (t) => t
};
var Gf;
Gf = I0;
class Ep {
  constructor(e) {
    c(this, "map");
    c(this, Gf, E0);
    this.map = e;
  }
}
const k0 = (t) => new Ep(t), v0 = (t, e) => new Ep(ap(e.map, t.map, (n, r, s) => op(n, s, de(sp(n, s), {
  onNone: () => Ue(),
  onSome: (o) => re(o, r)
})))), T0 = (t) => Array.from(ip(t.map)), $0 = (t) => Array.from(t.map), eo = "Die", Wn = "Empty", rr = "Fail", sr = "Interrupt", zn = "Parallel", Yn = "Sequential", kp = "effect/Cause", vp = /* @__PURE__ */ Symbol.for(kp), R0 = {
  /* c8 ignore next */
  _E: (t) => t
}, or = {
  [vp]: R0,
  [F]() {
    return g(k(kp), U(k(U0(this))), et(this));
  },
  [P](t) {
    return N0(t) && q0(this, t);
  },
  pipe() {
    return R(this, arguments);
  },
  toJSON() {
    switch (this._tag) {
      case "Empty":
        return {
          _id: "Cause",
          _tag: this._tag
        };
      case "Die":
        return {
          _id: "Cause",
          _tag: this._tag,
          defect: it(this.defect)
        };
      case "Interrupt":
        return {
          _id: "Cause",
          _tag: this._tag,
          fiberId: this.fiberId.toJSON()
        };
      case "Fail":
        return {
          _id: "Cause",
          _tag: this._tag,
          failure: it(this.error)
        };
      case "Sequential":
      case "Parallel":
        return {
          _id: "Cause",
          _tag: this._tag,
          left: it(this.left),
          right: it(this.right)
        };
    }
  },
  toString() {
    return ou(this);
  },
  [z]() {
    return this.toJSON();
  }
}, Ms = /* @__PURE__ */ (() => {
  const t = /* @__PURE__ */ Object.create(or);
  return t._tag = Wn, t;
})(), Vc = (t) => {
  const e = Object.create(or);
  return e._tag = rr, e.error = t, e;
}, ce = (t) => {
  const e = Object.create(or);
  return e._tag = eo, e.defect = t, e;
}, Pe = (t) => {
  const e = Object.create(or);
  return e._tag = sr, e.fiberId = t, e;
}, ir = (t, e) => {
  const n = Object.create(or);
  return n._tag = zn, n.left = t, n.right = e, n;
}, Gt = (t, e) => {
  const n = Object.create(or);
  return n._tag = Yn, n.left = t, n.right = e, n;
}, N0 = (t) => j(t, vp), M0 = (t) => t._tag === Wn ? !0 : Qn(t, !0, (e, n) => {
  switch (n._tag) {
    case Wn:
      return E(e);
    case eo:
    case rr:
    case sr:
      return E(!1);
    default:
      return w();
  }
}), A0 = (t) => Z(j0(t)), nu = (t) => su(void 0, J0)(t), x0 = (t) => Un(Qn(t, Ue(), (e, n) => n._tag === rr ? E(g(e, le(n.error))) : w())), Tp = (t) => Un(Qn(t, Ue(), (e, n) => n._tag === eo ? E(g(e, le(n.defect))) : w())), P0 = (t) => Qn(t, ln(), (e, n) => n._tag === sr ? E(g(e, kr(n.fiberId))) : w()), C0 = (t) => $p(t, (e) => e._tag === rr ? E(e.error) : w()), F0 = (t) => {
  const e = C0(t);
  switch (e._tag) {
    case "None":
      return ot(t);
    case "Some":
      return B(e.value);
  }
}, j0 = (t) => $p(t, (e) => e._tag === sr ? E(e.fiberId) : w()), L0 = (t) => ru(t, {
  onEmpty: w(),
  onFail: (e) => E(ce(e)),
  onDie: (e) => E(ce(e)),
  onInterrupt: () => w(),
  onSequential: (e, n) => Z(e) && Z(n) ? E(Gt(e.value, n.value)) : Z(e) && ht(n) ? E(e.value) : ht(e) && Z(n) ? E(n.value) : w(),
  onParallel: (e, n) => Z(e) && Z(n) ? E(ir(e.value, n.value)) : Z(e) && ht(n) ? E(e.value) : ht(e) && Z(n) ? E(n.value) : w()
}), ol = (t) => ru(t, {
  onEmpty: Ms,
  onFail: () => Ms,
  onDie: (e) => ce(e),
  onInterrupt: (e) => Pe(e),
  onSequential: Gt,
  onParallel: ir
}), K0 = (t) => ru(t, {
  onEmpty: Ms,
  onFail: (e) => ce(e),
  onDie: (e) => ce(e),
  onInterrupt: (e) => Pe(e),
  onSequential: (e, n) => Gt(e, n),
  onParallel: (e, n) => ir(e, n)
}), q0 = (t, e) => {
  let n = Ut(t), r = Ut(e);
  for (; Dn(n) && Dn(r); ) {
    const [s, o] = g(Jn(n), Qn([ln(), Ue()], ([u, l], f) => {
      const [h, p] = Gc(f);
      return E([g(u, $s(h)), g(l, re(p))]);
    })), [i, a] = g(Jn(r), Qn([ln(), Ue()], ([u, l], f) => {
      const [h, p] = Gc(f);
      return E([g(u, $s(h)), g(l, re(p))]);
    }));
    if (!C(s, i))
      return !1;
    n = o, r = a;
  }
  return !0;
}, U0 = (t) => D0(Ut(t), Ue()), D0 = (t, e) => {
  for (; ; ) {
    const [n, r] = g(t, ld([ln(), Ue()], ([o, i], a) => {
      const [u, l] = Gc(a);
      return [g(o, $s(u)), g(i, re(l))];
    })), s = Qd(n) > 0 ? g(e, le(n)) : e;
    if (rS(r))
      return Un(s);
    t = r, e = s;
  }
  throw new Error(Aa("Cause.flattenCauseLoop"));
}, $p = /* @__PURE__ */ d(2, (t, e) => {
  const n = [t];
  for (; n.length > 0; ) {
    const r = n.pop(), s = e(r);
    switch (s._tag) {
      case "None": {
        switch (r._tag) {
          case Yn:
          case zn: {
            n.push(r.right), n.push(r.left);
            break;
          }
        }
        break;
      }
      case "Some":
        return s;
    }
  }
  return w();
}), Gc = (t) => {
  let e = t;
  const n = [];
  let r = ln(), s = Ue();
  for (; e !== void 0; )
    switch (e._tag) {
      case Wn: {
        if (n.length === 0)
          return [r, s];
        e = n.pop();
        break;
      }
      case rr: {
        if (r = kr(r, ac(e._tag, e.error)), n.length === 0)
          return [r, s];
        e = n.pop();
        break;
      }
      case eo: {
        if (r = kr(r, ac(e._tag, e.defect)), n.length === 0)
          return [r, s];
        e = n.pop();
        break;
      }
      case sr: {
        if (r = kr(r, ac(e._tag, e.fiberId)), n.length === 0)
          return [r, s];
        e = n.pop();
        break;
      }
      case Yn: {
        switch (e.left._tag) {
          case Wn: {
            e = e.right;
            break;
          }
          case Yn: {
            e = Gt(e.left.left, Gt(e.left.right, e.right));
            break;
          }
          case zn: {
            e = ir(Gt(e.left.left, e.right), Gt(e.left.right, e.right));
            break;
          }
          default: {
            s = le(s, e.right), e = e.left;
            break;
          }
        }
        break;
      }
      case zn: {
        n.push(e.right), e = e.left;
        break;
      }
    }
  throw new Error(Aa("Cause.evaluateCauseLoop"));
}, J0 = {
  emptyCase: Lu,
  failCase: $c,
  dieCase: $c,
  interruptCase: Lu,
  sequentialCase: (t, e, n) => e && n,
  parallelCase: (t, e, n) => e && n
}, il = "SequentialCase", cl = "ParallelCase", ru = /* @__PURE__ */ d(2, (t, {
  onDie: e,
  onEmpty: n,
  onFail: r,
  onInterrupt: s,
  onParallel: o,
  onSequential: i
}) => su(t, void 0, {
  emptyCase: () => n,
  failCase: (a, u) => r(u),
  dieCase: (a, u) => e(u),
  interruptCase: (a, u) => s(u),
  sequentialCase: (a, u, l) => i(u, l),
  parallelCase: (a, u, l) => o(u, l)
})), Qn = /* @__PURE__ */ d(3, (t, e, n) => {
  let r = e, s = t;
  const o = [];
  for (; s !== void 0; ) {
    const i = n(r, s);
    switch (r = Z(i) ? i.value : r, s._tag) {
      case Yn: {
        o.push(s.right), s = s.left;
        break;
      }
      case zn: {
        o.push(s.right), s = s.left;
        break;
      }
      default: {
        s = void 0;
        break;
      }
    }
    s === void 0 && o.length > 0 && (s = o.pop());
  }
  return r;
}), su = /* @__PURE__ */ d(3, (t, e, n) => {
  const r = [t], s = [];
  for (; r.length > 0; ) {
    const i = r.pop();
    switch (i._tag) {
      case Wn: {
        s.push(ot(n.emptyCase(e)));
        break;
      }
      case rr: {
        s.push(ot(n.failCase(e, i.error)));
        break;
      }
      case eo: {
        s.push(ot(n.dieCase(e, i.defect)));
        break;
      }
      case sr: {
        s.push(ot(n.interruptCase(e, i.fiberId)));
        break;
      }
      case Yn: {
        r.push(i.right), r.push(i.left), s.push(B({
          _tag: il
        }));
        break;
      }
      case zn: {
        r.push(i.right), r.push(i.left), s.push(B({
          _tag: cl
        }));
        break;
      }
    }
  }
  const o = [];
  for (; s.length > 0; ) {
    const i = s.pop();
    switch (i._tag) {
      case "Left": {
        switch (i.left._tag) {
          case il: {
            const a = o.pop(), u = o.pop(), l = n.sequentialCase(e, a, u);
            o.push(l);
            break;
          }
          case cl: {
            const a = o.pop(), u = o.pop(), l = n.parallelCase(e, a, u);
            o.push(l);
            break;
          }
        }
        break;
      }
      case "Right": {
        o.push(i.right);
        break;
      }
    }
  }
  if (o.length === 0)
    throw new Error("BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues");
  return o.pop();
}), ou = (t) => nu(t) ? "All fibers interrupted without errors." : Rp(t).map((e) => e.stack).join(`
`);
class al extends globalThis.Error {
  constructor(n) {
    const r = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    super(B0(n));
    c(this, "span");
    this.message === "" && (this.message = "An error has occurred"), Error.stackTraceLimit = r, this.name = n instanceof Error ? n.name : "Error", typeof n == "object" && n !== null && (ul in n && (this.span = n[ul]), Object.keys(n).forEach((s) => {
      s in this || (this[s] = n[s]);
    })), this.stack = G0(`${this.name}: ${this.message}`, n instanceof Error && n.stack ? n.stack : "", this.span);
  }
}
const B0 = (t) => {
  if (typeof t == "string")
    return t;
  if (typeof t == "object" && t !== null && t instanceof Error)
    return t.message;
  try {
    if (j(t, "toString") && Bs(t.toString) && t.toString !== Object.prototype.toString && t.toString !== globalThis.Array.prototype.toString)
      return t.toString();
  } catch {
  }
  return JSON.stringify(t);
}, H0 = /\((.*)\)/, V0 = /* @__PURE__ */ V("effect/Tracer/spanToTrace", () => /* @__PURE__ */ new WeakMap()), G0 = (t, e, n) => {
  const r = [t], s = e.startsWith(t) ? e.slice(t.length).split(`
`) : e.split(`
`);
  for (let o = 1; o < s.length && !s[o].includes("Generator.next"); o++) {
    if (s[o].includes("effect_internal_function")) {
      r.pop();
      break;
    }
    r.push(s[o].replace(/at .*effect_instruction_i.*\((.*)\)/, "at $1").replace(/EffectPrimitive\.\w+/, "<anonymous>"));
  }
  if (n) {
    let o = n, i = 0;
    for (; o && o._tag === "Span" && i < 10; ) {
      const a = V0.get(o);
      if (typeof a == "function") {
        const u = a(), l = u.match(H0), f = l ? l[1] : u.replace(/^at /, "");
        r.push(`    at ${o.name} (${f})`);
      } else
        r.push(`    at ${o.name}`);
      o = ve(o.parent), i++;
    }
  }
  return r.join(`
`);
}, ul = /* @__PURE__ */ Symbol.for("effect/SpanAnnotation"), Rp = (t) => su(t, void 0, {
  emptyCase: () => [],
  dieCase: (e, n) => [new al(n)],
  failCase: (e, n) => [new al(n)],
  interruptCase: () => [],
  parallelCase: (e, n, r) => [...n, ...r],
  sequentialCase: (e, n, r) => [...n, ...r]
}), Ki = "Pending", Np = "Done", W0 = "effect/Deferred", z0 = /* @__PURE__ */ Symbol.for(W0), Y0 = {
  /* c8 ignore next */
  _E: (t) => t,
  /* c8 ignore next */
  _A: (t) => t
}, Q0 = (t) => ({
  _tag: Ki,
  joiners: t
}), X0 = (t) => ({
  _tag: Np,
  effect: t
});
class cr {
  constructor(e) {
    c(this, "self");
    c(this, "called", !1);
    this.self = e;
  }
  next(e) {
    return this.called ? {
      value: e,
      done: !0
    } : (this.called = !0, {
      value: this.self,
      done: !1
    });
  }
  return(e) {
    return {
      value: e,
      done: !0
    };
  }
  throw(e) {
    throw e;
  }
  [Symbol.iterator]() {
    return new cr(this.self);
  }
}
const ll = /* @__PURE__ */ Symbol.for("effect/Tracer"), Z0 = (t) => ({
  [ll]: ll,
  ...t
}), Wc = /* @__PURE__ */ yn("effect/Tracer"), Mp = /* @__PURE__ */ yn("effect/ParentSpan"), fl = /* @__PURE__ */ function() {
  const t = "abcdef0123456789", e = t.length;
  return function(n) {
    let r = "";
    for (let s = 0; s < n; s++)
      r += t.charAt(Math.floor(Math.random() * e));
    return r;
  };
}();
class tO {
  constructor(e, n, r, s, o, i) {
    c(this, "name");
    c(this, "parent");
    c(this, "context");
    c(this, "links");
    c(this, "startTime");
    c(this, "kind");
    c(this, "_tag", "Span");
    c(this, "spanId");
    c(this, "traceId", "native");
    c(this, "sampled", !0);
    c(this, "status");
    c(this, "attributes");
    c(this, "events", []);
    this.name = e, this.parent = n, this.context = r, this.links = s, this.startTime = o, this.kind = i, this.status = {
      _tag: "Started",
      startTime: o
    }, this.attributes = /* @__PURE__ */ new Map(), this.traceId = n._tag === "Some" ? n.value.traceId : fl(32), this.spanId = fl(16);
  }
  end(e, n) {
    this.status = {
      _tag: "Ended",
      endTime: e,
      exit: n,
      startTime: this.status.startTime
    };
  }
  attribute(e, n) {
    this.attributes.set(e, n);
  }
  event(e, n, r) {
    this.events.push([e, n, r ?? {}]);
  }
}
const eO = /* @__PURE__ */ Z0({
  span: (t, e, n, r, s, o) => new tO(t, e, n, r, s, o),
  context: (t) => t()
}), nO = "effect/EffectError", rO = /* @__PURE__ */ Symbol.for(nO), sO = (t) => j(t, rO), Ap = (t, e) => {
  const n = new $t("Blocked");
  return n.effect_instruction_i0 = t, n.effect_instruction_i1 = e, n;
}, oO = (t) => {
  const e = new $t("RunBlocked");
  return e.effect_instruction_i0 = t, e;
}, qi = /* @__PURE__ */ Symbol.for("effect/Effect");
class iO {
  constructor(e, n) {
    c(this, "patch");
    c(this, "op");
    c(this, "_op", Fa);
    this.patch = e, this.op = n;
  }
}
var Wf;
class $t {
  constructor(e) {
    c(this, "_op");
    c(this, "effect_instruction_i0");
    c(this, "effect_instruction_i1");
    c(this, "effect_instruction_i2");
    c(this, "trace");
    c(this, Wf, Ln);
    this._op = e;
  }
  [(Wf = qi, P)](e) {
    return this === e;
  }
  [F]() {
    return et(this, xa(this));
  }
  pipe() {
    return R(this, arguments);
  }
  toJSON() {
    return {
      _id: "Effect",
      _op: this._op,
      effect_instruction_i0: it(this.effect_instruction_i0),
      effect_instruction_i1: it(this.effect_instruction_i1),
      effect_instruction_i2: it(this.effect_instruction_i2)
    };
  }
  toString() {
    return It(this.toJSON());
  }
  [z]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new cr(new Hs(this));
  }
}
var zf;
class xp {
  constructor(e) {
    c(this, "_op");
    c(this, "effect_instruction_i0");
    c(this, "effect_instruction_i1");
    c(this, "effect_instruction_i2");
    c(this, "trace");
    c(this, zf, Ln);
    this._op = e, this._tag = e;
  }
  [(zf = qi, P)](e) {
    return hu(e) && e._op === "Failure" && // @ts-expect-error
    C(this.effect_instruction_i0, e.effect_instruction_i0);
  }
  [F]() {
    return g(
      // @ts-expect-error
      ft(this._tag),
      // @ts-expect-error
      U(k(this.effect_instruction_i0)),
      et(this)
    );
  }
  get cause() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return R(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      cause: this.cause.toJSON()
    };
  }
  toString() {
    return It(this.toJSON());
  }
  [z]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new cr(new Hs(this));
  }
}
var Yf;
class Pp {
  constructor(e) {
    c(this, "_op");
    c(this, "effect_instruction_i0");
    c(this, "effect_instruction_i1");
    c(this, "effect_instruction_i2");
    c(this, "trace");
    c(this, Yf, Ln);
    this._op = e, this._tag = e;
  }
  [(Yf = qi, P)](e) {
    return hu(e) && e._op === "Success" && // @ts-expect-error
    C(this.effect_instruction_i0, e.effect_instruction_i0);
  }
  [F]() {
    return g(
      // @ts-expect-error
      ft(this._tag),
      // @ts-expect-error
      U(k(this.effect_instruction_i0)),
      et(this)
    );
  }
  get value() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return R(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      value: it(this.value)
    };
  }
  toString() {
    return It(this.toJSON());
  }
  [z]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new cr(new Hs(this));
  }
}
const iu = (t) => j(t, qi), fe = (t) => {
  const e = new $t(Dh);
  return e.effect_instruction_i0 = t, e;
}, cO = /* @__PURE__ */ d(3, (t, e, n) => Bi((r) => A(t, (s) => A(jp(yt(() => r(e(s)))), (o) => yt(() => n(s, o)).pipe(dn({
  onFailure: (i) => {
    switch (o._tag) {
      case oe:
        return Wt(ir(o.effect_instruction_i0, i));
      case ie:
        return Wt(i);
    }
  },
  onSuccess: () => o
})))))), no = /* @__PURE__ */ d(2, (t, e) => A(t, () => W(e))), ro = (t) => no(t, void 0), Cp = function() {
  const t = new $t(Ca);
  switch (arguments.length) {
    case 2: {
      t.effect_instruction_i0 = arguments[0], t.commit = arguments[1];
      break;
    }
    case 3: {
      t.effect_instruction_i0 = arguments[0], t.effect_instruction_i1 = arguments[1], t.commit = arguments[2];
      break;
    }
    case 4: {
      t.effect_instruction_i0 = arguments[0], t.effect_instruction_i1 = arguments[1], t.effect_instruction_i2 = arguments[2], t.commit = arguments[3];
      break;
    }
    default:
      throw new Error(Aa("you're not supposed to end up here"));
  }
  return t;
}, aO = (t, e = Vn) => {
  const n = new $t(Or);
  let r;
  return n.effect_instruction_i0 = (s) => {
    r = t(s);
  }, n.effect_instruction_i1 = e, r !== void 0 ? Jp(n, (s) => r) : n;
}, Se = (t, e = Vn) => Cp(t, function() {
  let n, r;
  function s(u) {
    n ? n(u) : r === void 0 && (r = u);
  }
  const o = new $t(Or);
  o.effect_instruction_i0 = (u) => {
    n = u, r && u(r);
  }, o.effect_instruction_i1 = e;
  let i, a;
  return this.effect_instruction_i0.length !== 1 ? (a = new AbortController(), i = Ft(() => this.effect_instruction_i0(s, a.signal))) : i = Ft(() => this.effect_instruction_i0(s)), i || a ? Jp(o, (u) => (a && a.abort(), i ?? we)) : o;
}), zc = /* @__PURE__ */ d(2, (t, e) => Ui(t, {
  onFailure: e,
  onSuccess: W
})), Vo = /* @__PURE__ */ Symbol.for("effect/SpanAnnotation"), hl = /* @__PURE__ */ Symbol.for("effect/OriginalAnnotation"), Fp = (t, e) => Z(e) ? new Proxy(t, {
  has(n, r) {
    return r === Vo || r === hl || r in n;
  },
  get(n, r) {
    return r === Vo ? e.value : r === hl ? t : n[r];
  }
}) : t, dl = (t) => on(t) && !(Vo in t) ? fe((e) => Wt(ce(Fp(t, rg(e))))) : Wt(ce(t)), uO = (t) => lO(() => ce(new UO(t))), Go = (t) => Ui(t, {
  onFailure: (e) => W(B(e)),
  onSuccess: (e) => W(ot(e))
}), jp = (t) => dO(t, {
  onFailure: Y,
  onSuccess: _t
}), bt = (t) => on(t) && !(Vo in t) ? fe((e) => Wt(Vc(Fp(t, rg(e))))) : Wt(Vc(t)), Lp = (t) => A(x(t), bt), Wt = (t) => {
  const e = new xp(oe);
  return e.effect_instruction_i0 = t, e;
}, lO = (t) => A(x(t), Wt), fO = /* @__PURE__ */ fe((t) => W(t.id())), Kp = (t) => fe((e) => t(e.id())), A = /* @__PURE__ */ d(2, (t, e) => {
  const n = new $t(xo);
  return n.effect_instruction_i0 = t, n.effect_instruction_i1 = e, n;
}), hO = (t) => {
  const e = new $t("OnStep");
  return e.effect_instruction_i0 = t, e;
}, qp = (t) => A(t, rt), dO = /* @__PURE__ */ d(2, (t, e) => dn(t, {
  onFailure: (n) => W(e.onFailure(n)),
  onSuccess: (n) => W(e.onSuccess(n))
})), dn = /* @__PURE__ */ d(2, (t, e) => {
  const n = new $t(Po);
  return n.effect_instruction_i0 = t, n.effect_instruction_i1 = e.onFailure, n.effect_instruction_i2 = e.onSuccess, n;
}), Ui = /* @__PURE__ */ d(2, (t, e) => dn(t, {
  onFailure: (n) => {
    if (Tp(n).length > 0)
      return Wt(K0(n));
    const s = x0(n);
    return s.length > 0 ? e.onFailure(Kd(s)) : Wt(n);
  },
  onSuccess: e.onSuccess
})), je = /* @__PURE__ */ d(2, (t, e) => yt(() => {
  const n = ct(t), r = Si(n.length);
  let s = 0;
  return no(au({
    while: () => s < n.length,
    body: () => e(n[s], s),
    step: (o) => {
      r[s++] = o;
    }
  }), r);
})), Di = /* @__PURE__ */ d(2, (t, e) => yt(() => {
  const n = ct(t);
  let r = 0;
  return au({
    while: () => r < n.length,
    body: () => e(n[r], r),
    step: () => {
      r++;
    }
  });
})), Up = (t) => {
  const e = new $t(Gs);
  return e.effect_instruction_i0 = d0(nr), e.effect_instruction_i1 = () => t, e;
}, At = /* @__PURE__ */ d(2, (t, e) => A(t, (n) => x(() => e(n)))), Dp = /* @__PURE__ */ d(2, (t, e) => Ui(t, {
  onFailure: (n) => Lp(() => e.onFailure(n)),
  onSuccess: (n) => x(() => e.onSuccess(n))
})), Ji = /* @__PURE__ */ d(2, (t, e) => dn(t, {
  onFailure: (n) => {
    const r = F0(n);
    switch (r._tag) {
      case "Left":
        return Lp(() => e(r.left));
      case "Right":
        return Wt(r.right);
    }
  },
  onSuccess: W
})), cu = /* @__PURE__ */ d(2, (t, e) => Bi((n) => dn(n(t), {
  onFailure: (r) => {
    const s = Y(r);
    return dn(e(s), {
      onFailure: (o) => Y(Gt(r, o)),
      onSuccess: () => s
    });
  },
  onSuccess: (r) => {
    const s = _t(r);
    return Hi(e(s), s);
  }
}))), Jp = /* @__PURE__ */ d(2, (t, e) => cu(t, eg({
  onFailure: (n) => nu(n) ? ro(e(P0(n))) : we,
  onSuccess: () => we
}))), pO = /* @__PURE__ */ d(2, (t, e) => yO(t, e, W)), W = (t) => {
  const e = new Pp(ie);
  return e.effect_instruction_i0 = t, e;
}, yt = (t) => A(x(t), rt), x = (t) => {
  const e = new $t(Uh);
  return e.effect_instruction_i0 = t, e;
}, gO = /* @__PURE__ */ d(2, (t, e) => A(t, (n) => {
  const r = typeof e == "function" ? e(n) : e;
  return iu(r) ? no(r, n) : ry(r) ? Se((s) => {
    r.then((o) => s(W(n)), (o) => s(bt(new br(o))));
  }) : W(n);
})), mO = (t) => fe((e) => {
  const n = e.getFiberRef(Qc), r = g(n, St(() => e.scope()));
  return t(Gi(Qc, E(r)));
}), yO = /* @__PURE__ */ d(3, (t, e, n) => dn(t, {
  onFailure: (r) => Tp(r).length > 0 ? Wt(rd(L0(r))) : e(),
  onSuccess: n
})), Bp = (t) => {
  const e = new $t(Gs);
  return e.effect_instruction_i0 = wp(nr), e.effect_instruction_i1 = () => t, e;
}, Bi = (t) => Cp(t, function() {
  const e = new $t(Gs);
  return e.effect_instruction_i0 = wp(nr), e.effect_instruction_i1 = (n) => _p(n) ? Ft(() => this.effect_instruction_i0(Up)) : Ft(() => this.effect_instruction_i0(Bp)), e;
}), we = /* @__PURE__ */ W(void 0), bO = (t) => {
  const e = new $t(Gs);
  return e.effect_instruction_i0 = t, e.effect_instruction_i1 = void 0, e;
}, au = (t) => {
  const e = new $t(Co);
  return e.effect_instruction_i0 = t.while, e.effect_instruction_i1 = t.body, e.effect_instruction_i2 = t.step, e;
}, uu = (t) => {
  const e = new $t(bo);
  return typeof (t == null ? void 0 : t.priority) < "u" ? CO(e, t.priority) : e;
}, Hp = /* @__PURE__ */ d(2, (t, e) => A(t, (n) => At(e, (r) => [n, r]))), Vp = /* @__PURE__ */ d(2, (t, e) => A(t, (n) => no(e, n))), Hi = /* @__PURE__ */ d(2, (t, e) => A(t, () => e)), _O = (t) => A(fO, (e) => g(t, Gp(e))), Gp = /* @__PURE__ */ d(2, (t, e) => A(t.interruptAsFork(e), () => t.await)), SO = {
  _tag: "All",
  syslog: 0,
  label: "ALL",
  ordinal: Number.MIN_SAFE_INTEGER,
  pipe() {
    return R(this, arguments);
  }
}, wO = {
  _tag: "Fatal",
  syslog: 2,
  label: "FATAL",
  ordinal: 5e4,
  pipe() {
    return R(this, arguments);
  }
}, OO = {
  _tag: "Error",
  syslog: 3,
  label: "ERROR",
  ordinal: 4e4,
  pipe() {
    return R(this, arguments);
  }
}, IO = {
  _tag: "Warning",
  syslog: 4,
  label: "WARN",
  ordinal: 3e4,
  pipe() {
    return R(this, arguments);
  }
}, Wp = {
  _tag: "Info",
  syslog: 6,
  label: "INFO",
  ordinal: 2e4,
  pipe() {
    return R(this, arguments);
  }
}, zp = {
  _tag: "Debug",
  syslog: 7,
  label: "DEBUG",
  ordinal: 1e4,
  pipe() {
    return R(this, arguments);
  }
}, EO = {
  _tag: "Trace",
  syslog: 7,
  label: "TRACE",
  ordinal: 0,
  pipe() {
    return R(this, arguments);
  }
}, kO = {
  _tag: "None",
  syslog: 7,
  label: "OFF",
  ordinal: Number.MAX_SAFE_INTEGER,
  pipe() {
    return R(this, arguments);
  }
}, vO = "effect/FiberRef", TO = /* @__PURE__ */ Symbol.for(vO), $O = {
  /* c8 ignore next */
  _A: (t) => t
}, Vi = (t) => Yp(t, (e) => [e, e]), lu = /* @__PURE__ */ d(2, (t, e) => A(Vi(t), e)), pl = /* @__PURE__ */ d(2, (t, e) => Yp(t, () => [void 0, e])), Yp = /* @__PURE__ */ d(2, (t, e) => fe((n) => {
  const [r, s] = e(n.getFiberRef(t));
  return n.setFiberRef(t, s), W(r);
})), Gi = /* @__PURE__ */ d(3, (t, e, n) => cO(Vp(Vi(e), pl(e, n)), () => t, (r) => pl(e, r))), Dt = (t, e) => ar(t, {
  differ: gp(),
  fork: (e == null ? void 0 : e.fork) ?? rt,
  join: e == null ? void 0 : e.join
}), RO = (t) => {
  const e = Xw();
  return ar(t, {
    differ: e,
    fork: e.empty
  });
}, NO = (t) => {
  const e = Zw(gp());
  return ar(t, {
    differ: e,
    fork: e.empty
  });
}, Qp = (t) => {
  const e = Qw();
  return ar(t, {
    differ: e,
    fork: e.empty
  });
}, ar = (t, e) => ({
  [TO]: $O,
  initial: t,
  diff: (n, r) => e.differ.diff(n, r),
  combine: (n, r) => e.differ.combine(n, r),
  patch: (n) => (r) => e.differ.patch(n, r),
  fork: e.fork,
  join: e.join ?? ((n, r) => r),
  pipe() {
    return R(this, arguments);
  }
}), MO = (t) => ar(t, {
  differ: rl,
  fork: rl.empty
}), Je = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentContext"), () => Qp(Ti())), Wi = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => Dt(0)), Xp = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => Dt(2048)), AO = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogAnnotation"), () => Dt(Xa())), xO = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogLevel"), () => Dt(Wp)), PO = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogSpan"), () => Dt(Gn())), CO = /* @__PURE__ */ d(2, (t, e) => Gi(t, Wi, e)), FO = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentConcurrency"), () => Dt("unbounded")), jO = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestBatching"), () => Dt(!0)), LO = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => Dt(E(zp))), Yc = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMetricLabels"), () => NO(Kn())), Qc = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => Dt(w(), {
  fork: () => w(),
  join: (t, e) => t
})), fo = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentInterruptedCause"), () => Dt(Ms, {
  fork: () => Ms,
  join: (t, e) => t
})), KO = (t, e) => t.addFinalizer(() => ro(e)), qO = (t, e) => t.close(e), zi = (t, e) => t.fork(e), fu = /* @__PURE__ */ function() {
  class t extends globalThis.Error {
    commit() {
      return bt(this);
    }
    toString() {
      return this.message ? `${this.name}: ${this.message}` : this.name;
    }
    toJSON() {
      return {
        ...this
      };
    }
    [z]() {
      const n = this.stack;
      return n ? `${this.toString()}
${n.split(`
`).slice(1).join(`
`)}` : this.toString();
    }
  }
  return Object.assign(t.prototype, ky), t;
}(), Zp = (t, e) => {
  class n extends fu {
    constructor() {
      super(...arguments);
      c(this, "_tag", e);
    }
  }
  return Object.assign(n.prototype, t), n.prototype.name = e, n;
}, gl = /* @__PURE__ */ Symbol.for("effect/Cause/errors/RuntimeException"), UO = /* @__PURE__ */ Zp({
  [gl]: gl
}, "RuntimeException"), DO = /* @__PURE__ */ Symbol.for("effect/Cause/errors/InterruptedException"), JO = (t) => j(t, DO), ml = /* @__PURE__ */ Symbol.for("effect/Cause/errors/NoSuchElement"), tg = /* @__PURE__ */ Zp({
  [ml]: ml
}, "NoSuchElementException"), yl = /* @__PURE__ */ Symbol.for("effect/Cause/errors/UnknownException"), br = /* @__PURE__ */ function() {
  class t extends fu {
    constructor(r, s) {
      super(s ?? (j(r, "message") && ae(r.message) ? r.message : void 0));
      c(this, "error");
      c(this, "_tag", "UnknownException");
      this.error = r;
    }
  }
  return Object.assign(t.prototype, {
    [yl]: yl,
    name: "UnknownException"
  }), t;
}(), hu = (t) => iu(t) && "_tag" in t && (t._tag === "Success" || t._tag === "Failure"), fc = (t, e) => VO(t, e != null && e.parallel ? ir : Gt), bl = (t) => Y(Vc(t)), Y = (t) => {
  const e = new xp(oe);
  return e.effect_instruction_i0 = t, e;
}, BO = (t) => Y(Pe(t)), hc = /* @__PURE__ */ d(2, (t, e) => {
  switch (t._tag) {
    case oe:
      return Y(t.effect_instruction_i0);
    case ie:
      return _t(e(t.effect_instruction_i0));
  }
}), eg = /* @__PURE__ */ d(2, (t, {
  onFailure: e,
  onSuccess: n
}) => {
  switch (t._tag) {
    case oe:
      return e(t.effect_instruction_i0);
    case ie:
      return n(t.effect_instruction_i0);
  }
}), _t = (t) => {
  const e = new Pp(ie);
  return e.effect_instruction_i0 = t, e;
}, Qe = /* @__PURE__ */ _t(void 0), HO = /* @__PURE__ */ d(3, (t, e, {
  onFailure: n,
  onSuccess: r
}) => {
  switch (t._tag) {
    case oe:
      switch (e._tag) {
        case ie:
          return Y(t.effect_instruction_i0);
        case oe:
          return Y(n(t.effect_instruction_i0, e.effect_instruction_i0));
      }
    case ie:
      switch (e._tag) {
        case ie:
          return _t(r(t.effect_instruction_i0, e.effect_instruction_i0));
        case oe:
          return Y(e.effect_instruction_i0);
      }
  }
}), VO = (t, e) => {
  const n = Ld(t);
  return Dn(n) ? g(Ye(n), ld(g(Jn(n), hc(Ut)), (r, s) => g(r, HO(s, {
    onSuccess: (o, i) => g(o, le(i)),
    onFailure: e
  }))), hc(Un), hc((r) => nn(r)), E) : w();
}, GO = (t) => ({
  [z0]: Y0,
  state: Zd(Q0([])),
  blockingOn: t,
  pipe() {
    return R(this, arguments);
  }
}), WO = (t) => Se((e) => {
  const n = Pi(t.state);
  switch (n._tag) {
    case Np:
      return e(n.effect);
    case Ki:
      return n.joiners.push(e), zO(t, e);
  }
}, t.blockingOn), ng = (t, e) => {
  const n = Pi(t.state);
  if (n._tag === Ki) {
    tp(t.state, X0(e));
    for (let r = 0, s = n.joiners.length; r < s; r++)
      n.joiners[r](e);
  }
}, zO = (t, e) => x(() => {
  const n = Pi(t.state);
  if (n._tag === Ki) {
    const r = n.joiners.indexOf(e);
    r >= 0 && n.joiners.splice(r, 1);
  }
}), YO = /* @__PURE__ */ Vi(Je), QO = () => YO, so = (t) => A(QO(), t), XO = /* @__PURE__ */ d(2, (t, e) => Gi(Je, e)(t)), ZO = /* @__PURE__ */ d(2, (t, e) => so((n) => XO(t, e(n)))), rg = (t) => {
  const e = t.getFiberRef(Je).unsafeMap.get(Mp.key);
  return e !== void 0 && e._tag === "Span" ? E(e) : w();
}, Xc = /* @__PURE__ */ Symbol.for("effect/Duration"), kn = /* @__PURE__ */ BigInt(0), dc = /* @__PURE__ */ BigInt(24), wn = /* @__PURE__ */ BigInt(60), Eo = /* @__PURE__ */ BigInt(1e3), pc = /* @__PURE__ */ BigInt(1e6), Zc = /* @__PURE__ */ BigInt(1e9), _l = /^(-?\d+(?:\.\d+)?)\s+(nanos?|micros?|millis?|seconds?|minutes?|hours?|days?|weeks?)$/, Ne = (t) => {
  if (du(t))
    return t;
  if (Le(t))
    return As(t);
  if (pi(t))
    return Pn(t);
  if (Array.isArray(t)) {
    if (t.length === 2 && Le(t[0]) && Le(t[1]))
      return Pn(BigInt(t[0]) * Zc + BigInt(t[1]));
  } else if (ae(t)) {
    _l.lastIndex = 0;
    const e = _l.exec(t);
    if (e) {
      const [n, r, s] = e, o = Number(r);
      switch (s) {
        case "nano":
        case "nanos":
          return Pn(BigInt(r));
        case "micro":
        case "micros":
          return sg(BigInt(r));
        case "milli":
        case "millis":
          return As(o);
        case "second":
        case "seconds":
          return og(o);
        case "minute":
        case "minutes":
          return ig(o);
        case "hour":
        case "hours":
          return cg(o);
        case "day":
        case "days":
          return ag(o);
        case "week":
        case "weeks":
          return ug(o);
      }
    }
  }
  throw new Error("Invalid DurationInput");
}, Sl = {
  _tag: "Millis",
  millis: 0
}, tI = {
  _tag: "Infinity"
}, eI = {
  [Xc]: Xc,
  [F]() {
    return et(this, qh(this.value));
  },
  [P](t) {
    return du(t) && cI(this, t);
  },
  toString() {
    return `Duration(${aI(this)})`;
  },
  toJSON() {
    switch (this.value._tag) {
      case "Millis":
        return {
          _id: "Duration",
          _tag: "Millis",
          millis: this.value.millis
        };
      case "Nanos":
        return {
          _id: "Duration",
          _tag: "Nanos",
          hrtime: lg(this)
        };
      case "Infinity":
        return {
          _id: "Duration",
          _tag: "Infinity"
        };
    }
  },
  [z]() {
    return this.toJSON();
  },
  pipe() {
    return R(this, arguments);
  }
}, Ie = (t) => {
  const e = Object.create(eI);
  return Le(t) ? isNaN(t) || t <= 0 ? e.value = Sl : Number.isFinite(t) ? Number.isInteger(t) ? e.value = {
    _tag: "Millis",
    millis: t
  } : e.value = {
    _tag: "Nanos",
    nanos: BigInt(Math.round(t * 1e6))
  } : e.value = tI : t <= kn ? e.value = Sl : e.value = {
    _tag: "Nanos",
    nanos: t
  }, e;
}, du = (t) => j(t, Xc), nI = /* @__PURE__ */ Ie(0), rI = /* @__PURE__ */ Ie(1 / 0), Pn = (t) => Ie(t), sg = (t) => Ie(t * Eo), As = (t) => Ie(t), og = (t) => Ie(t * 1e3), ig = (t) => Ie(t * 6e4), cg = (t) => Ie(t * 36e5), ag = (t) => Ie(t * 864e5), ug = (t) => Ie(t * 6048e5), Wo = (t) => {
  const e = Ne(t);
  switch (e.value._tag) {
    case "Infinity":
      return 1 / 0;
    case "Nanos":
      return Number(e.value.nanos) / 1e6;
    case "Millis":
      return e.value.millis;
  }
}, sI = (t) => {
  const e = Ne(t);
  switch (e.value._tag) {
    case "Infinity":
      return w();
    case "Nanos":
      return E(e.value.nanos);
    case "Millis":
      return E(BigInt(Math.round(e.value.millis * 1e6)));
  }
}, oI = (t) => {
  const e = Ne(t);
  switch (e.value._tag) {
    case "Infinity":
      throw new Error("Cannot convert infinite duration to nanos");
    case "Nanos":
      return e.value.nanos;
    case "Millis":
      return BigInt(Math.round(e.value.millis * 1e6));
  }
}, lg = (t) => {
  const e = Ne(t);
  switch (e.value._tag) {
    case "Infinity":
      return [1 / 0, 0];
    case "Nanos":
      return [Number(e.value.nanos / Zc), Number(e.value.nanos % Zc)];
    case "Millis":
      return [Math.floor(e.value.millis / 1e3), Math.round(e.value.millis % 1e3 * 1e6)];
  }
}, fg = /* @__PURE__ */ d(3, (t, e, n) => {
  const r = Ne(t), s = Ne(e);
  if (r.value._tag === "Infinity" || s.value._tag === "Infinity")
    return n.onMillis(Wo(r), Wo(s));
  if (r.value._tag === "Nanos" || s.value._tag === "Nanos") {
    const o = r.value._tag === "Nanos" ? r.value.nanos : BigInt(Math.round(r.value.millis * 1e6)), i = s.value._tag === "Nanos" ? s.value.nanos : BigInt(Math.round(s.value.millis * 1e6));
    return n.onNanos(o, i);
  }
  return n.onMillis(r.value.millis, s.value.millis);
}), hg = (t, e) => fg(t, e, {
  onMillis: (n, r) => n === r,
  onNanos: (n, r) => n === r
}), iI = /* @__PURE__ */ d(2, (t, e) => fg(t, e, {
  onMillis: (n, r) => n >= r,
  onNanos: (n, r) => n >= r
})), cI = /* @__PURE__ */ d(2, (t, e) => hg(Ne(t), Ne(e))), aI = (t) => {
  const e = Ne(t), n = [];
  if (e.value._tag === "Infinity")
    return "Infinity";
  const r = oI(e);
  r % pc && n.push(`${r % pc}ns`);
  const s = r / pc;
  s % Eo !== kn && n.push(`${s % Eo}ms`);
  const o = s / Eo;
  o % wn !== kn && n.push(`${o % wn}s`);
  const i = o / wn;
  i % wn !== kn && n.push(`${i % wn}m`);
  const a = i / wn;
  a % dc !== kn && n.push(`${a % dc}h`);
  const u = a / dc;
  return u !== kn && n.push(`${u}d`), n.reverse().join(" ");
}, uI = "effect/Clock", wl = /* @__PURE__ */ Symbol.for(uI), pu = /* @__PURE__ */ yn("effect/Clock"), lI = 2 ** 31 - 1, Ol = {
  unsafeSchedule(t, e) {
    const n = Wo(e);
    if (n > lI)
      return $c;
    let r = !1;
    const s = setTimeout(() => {
      r = !0, t();
    }, n);
    return () => (clearTimeout(s), !r);
  }
}, Il = /* @__PURE__ */ function() {
  const t = /* @__PURE__ */ BigInt(1e6);
  if (typeof performance > "u")
    return () => BigInt(Date.now()) * t;
  const e = /* @__PURE__ */ BigInt(/* @__PURE__ */ Date.now()) * t - /* @__PURE__ */ BigInt(/* @__PURE__ */ Math.round(/* @__PURE__ */ performance.now() * 1e6));
  return () => e + BigInt(Math.round(performance.now() * 1e6));
}(), fI = /* @__PURE__ */ function() {
  const t = typeof process == "object" && "hrtime" in process && typeof process.hrtime.bigint == "function" ? process.hrtime : void 0;
  if (!t)
    return Il;
  const e = /* @__PURE__ */ Il() - /* @__PURE__ */ t.bigint();
  return () => e + t.bigint();
}();
var Qf;
Qf = wl;
class hI {
  constructor() {
    c(this, Qf, wl);
    c(this, "currentTimeMillis", x(() => this.unsafeCurrentTimeMillis()));
    c(this, "currentTimeNanos", x(() => this.unsafeCurrentTimeNanos()));
  }
  unsafeCurrentTimeMillis() {
    return Date.now();
  }
  unsafeCurrentTimeNanos() {
    return fI();
  }
  scheduler() {
    return W(Ol);
  }
  sleep(e) {
    return Se((n) => {
      const r = Ol.unsafeSchedule(() => n(we), e);
      return ro(x(r));
    });
  }
}
const dI = () => new hI(), dg = "And", pg = "Or", gg = "InvalidData", mg = "MissingData", yg = "SourceUnavailable", bg = "Unsupported", pI = "effect/ConfigError", El = /* @__PURE__ */ Symbol.for(pI), ur = {
  _tag: "ConfigError",
  [El]: El
}, _g = (t, e) => {
  const n = Object.create(ur);
  return n._op = dg, n.left = t, n.right = e, Object.defineProperty(n, "toString", {
    enumerable: !1,
    value() {
      return `${this.left} and ${this.right}`;
    }
  }), n;
}, Sg = (t, e) => {
  const n = Object.create(ur);
  return n._op = pg, n.left = t, n.right = e, Object.defineProperty(n, "toString", {
    enumerable: !1,
    value() {
      return `${this.left} or ${this.right}`;
    }
  }), n;
}, gI = (t, e, n = {
  pathDelim: "."
}) => {
  const r = Object.create(ur);
  return r._op = gg, r.path = t, r.message = e, Object.defineProperty(r, "toString", {
    enumerable: !1,
    value() {
      return `(Invalid data at ${g(this.path, tr(n.pathDelim))}: "${this.message}")`;
    }
  }), r;
}, pn = (t, e, n = {
  pathDelim: "."
}) => {
  const r = Object.create(ur);
  return r._op = mg, r.path = t, r.message = e, Object.defineProperty(r, "toString", {
    enumerable: !1,
    value() {
      return `(Missing data at ${g(this.path, tr(n.pathDelim))}: "${this.message}")`;
    }
  }), r;
}, mI = (t, e, n, r = {
  pathDelim: "."
}) => {
  const s = Object.create(ur);
  return s._op = yg, s.path = t, s.message = e, s.cause = n, Object.defineProperty(s, "toString", {
    enumerable: !1,
    value() {
      return `(Source unavailable at ${g(this.path, tr(r.pathDelim))}: "${this.message}")`;
    }
  }), s;
}, yI = (t, e, n = {
  pathDelim: "."
}) => {
  const r = Object.create(ur);
  return r._op = bg, r.path = t, r.message = e, Object.defineProperty(r, "toString", {
    enumerable: !1,
    value() {
      return `(Unsupported operation at ${g(this.path, tr(n.pathDelim))}: "${this.message}")`;
    }
  }), r;
}, Xe = /* @__PURE__ */ d(2, (t, e) => {
  switch (t._op) {
    case dg:
      return _g(Xe(t.left, e), Xe(t.right, e));
    case pg:
      return Sg(Xe(t.left, e), Xe(t.right, e));
    case gg:
      return gI([...e, ...t.path], t.message);
    case mg:
      return pn([...e, ...t.path], t.message);
    case yg:
      return mI([...e, ...t.path], t.message, t.cause);
    case bg:
      return yI([...e, ...t.path], t.message);
  }
}), bI = {
  _tag: "Empty"
}, gc = /* @__PURE__ */ d(2, (t, e) => {
  let n = Za(e), r = t;
  for (; fp(n); ) {
    const s = n.head;
    switch (s._tag) {
      case "Empty": {
        n = n.tail;
        break;
      }
      case "AndThen": {
        n = hn(s.first, hn(s.second, n.tail));
        break;
      }
      case "MapName": {
        r = Nn(r, s.f), n = n.tail;
        break;
      }
      case "Nested": {
        r = Lo(r, s.name), n = n.tail;
        break;
      }
      case "Unnested": {
        if (g(Ir(r), By(s.name)))
          r = cn(r), n = n.tail;
        else
          return B(pn(r, `Expected ${s.name} to be in path in ConfigProvider#unnested`));
        break;
      }
    }
  }
  return ot(r);
}), _I = "Constant", SI = "Fail", wI = "Fallback", OI = "Described", II = "Lazy", EI = "MapOrFail", kI = "Nested", vI = "Primitive", TI = "Sequence", $I = "HashMap", RI = "ZipWith", zo = (t, e) => [...t, ...e], NI = "effect/ConfigProvider", kl = /* @__PURE__ */ Symbol.for(NI), MI = /* @__PURE__ */ yn("effect/ConfigProvider"), AI = "effect/ConfigProviderFlat", vl = /* @__PURE__ */ Symbol.for(AI), xI = (t) => ({
  [kl]: kl,
  pipe() {
    return R(this, arguments);
  },
  ...t
}), PI = (t) => ({
  [vl]: vl,
  patch: t.patch,
  load: (e, n, r = !0) => t.load(e, n, r),
  enumerateChildren: t.enumerateChildren
}), CI = (t) => xI({
  load: (e) => A(Ht(t, Kn(), e, !1), (n) => de(Ir(n), {
    onNone: () => bt(pn(Kn(), `Expected a single value having structure: ${e}`)),
    onSome: W
  })),
  flattened: t
}), FI = (t) => {
  const {
    pathDelim: e,
    seqDelim: n
  } = Object.assign({}, {
    pathDelim: "_",
    seqDelim: ","
  }, t), r = (u) => g(u, tr(e)), s = (u) => u.split(e), o = () => typeof process < "u" && "env" in process && typeof process.env == "object" ? process.env : {};
  return CI(PI({
    load: (u, l, f = !0) => {
      const h = r(u), p = o(), m = h in p ? E(p[h]) : w();
      return g(m, Ji(() => pn(u, `Expected ${h} to exist in the process context`)), A((y) => UI(y, u, l, n, f)));
    },
    enumerateChildren: (u) => x(() => {
      const l = o(), p = Object.keys(l).map((m) => s(m.toUpperCase())).filter((m) => {
        for (let y = 0; y < u.length; y++) {
          const S = g(u, cd(y)), _ = m[y];
          if (_ === void 0 || S !== _)
            return !1;
        }
        return !0;
      }).flatMap((m) => m.slice(u.length, u.length + 1));
      return jS(p);
    }),
    patch: bI
  }));
}, jI = (t, e, n, r) => {
  const s = Bu(n.length, (u) => u >= r.length ? w() : E([t(u), u + 1])), o = Bu(r.length, (u) => u >= n.length ? w() : E([e(u), u + 1])), i = zo(n, s), a = zo(r, o);
  return [i, a];
}, LI = (t, e) => {
  let n = e;
  if (n._tag === "Nested") {
    const r = t.slice();
    for (; n._tag === "Nested"; )
      r.push(n.name), n = n.config;
    return r;
  }
  return t;
}, Ht = (t, e, n, r) => {
  const s = n;
  switch (s._tag) {
    case _I:
      return W(ee(s.value));
    case OI:
      return yt(() => Ht(t, e, s.config, r));
    case SI:
      return bt(pn(e, s.message));
    case wI:
      return g(yt(() => Ht(t, e, s.first, r)), zc((o) => s.condition(o) ? g(Ht(t, e, s.second, r), zc((i) => bt(Sg(o, i)))) : bt(o)));
    case II:
      return yt(() => Ht(t, e, s.config(), r));
    case EI:
      return yt(() => g(Ht(t, e, s.original, r), A(je((o) => g(s.mapOrFail(o), Ji(Xe(LI(e, s.original))))))));
    case kI:
      return yt(() => Ht(t, zo(e, ee(s.name)), s.config, r));
    case vI:
      return g(gc(e, t.patch), A((o) => g(t.load(o, s, r), A((i) => {
        if (i.length === 0) {
          const a = g(Zy(o), St(() => "<n/a>"));
          return bt(pn([], `Expected ${s.description} with name ${a}`));
        }
        return W(i);
      }))));
    case TI:
      return g(gc(e, t.patch), A((o) => g(t.enumerateChildren(o), A(JI), A((i) => i.length === 0 ? yt(() => At(Ht(t, o, s.config, !0), ee)) : g(je(i, (a) => Ht(t, Wy(e, `[${a}]`), s.config, !0)), At((a) => {
        const u = ab(a);
        return u.length === 0 ? ee(Kn()) : ee(u);
      }))))));
    case $I:
      return yt(() => g(gc(e, t.patch), A((o) => g(t.enumerateChildren(o), A((i) => g(i, je((a) => Ht(t, zo(o, ee(a)), s.valueConfig, r)), At((a) => a.length === 0 ? ee(Xa()) : g(DI(a), Nn((u) => QS(Ju(ct(i), u)))))))))));
    case RI:
      return yt(() => g(Ht(t, e, s.left, r), Go, A((o) => g(Ht(t, e, s.right, r), Go, A((i) => {
        if (Et(o) && Et(i))
          return bt(_g(o.left, i.left));
        if (Et(o) && Fe(i))
          return bt(o.left);
        if (Fe(o) && Et(i))
          return bt(i.left);
        if (Fe(o) && Fe(i)) {
          const a = g(e, tr(".")), u = KI(e, a), [l, f] = jI(u, u, g(o.right, Nn(ot)), g(i.right, Nn(ot)));
          return g(l, Ju(f), je(([h, p]) => g(Hp(h, p), At(([m, y]) => s.zip(m, y)))));
        }
        throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
      })))));
  }
}, KI = (t, e) => (n) => B(pn(t, `The element at index ${n} in a sequence at path "${e}" was missing`)), qI = (t, e) => t.split(new RegExp(`\\s*${xc(e)}\\s*`)), UI = (t, e, n, r, s) => s ? g(qI(t, r), je((o) => n.parse(o.trim())), Ji(Xe(e))) : g(n.parse(t), Dp({
  onFailure: Xe(e),
  onSuccess: ee
})), DI = (t) => Object.keys(t[0]).map((e) => t.map((n) => n[e])), JI = (t) => g(je(t, HI), Dp({
  onFailure: () => Kn(),
  onSuccess: an(Ke)
}), Go, At(Py)), BI = /^(\[(\d+)\])$/, HI = (t) => {
  const e = t.match(BI);
  if (e !== null) {
    const n = e[2];
    return g(n !== void 0 && n.length > 0 ? E(n) : w(), zs(VI));
  }
  return w();
}, VI = (t) => {
  const e = Number.parseInt(t);
  return Number.isNaN(e) ? w() : E(e);
}, Tl = /* @__PURE__ */ Symbol.for("effect/Console"), wg = /* @__PURE__ */ yn("effect/Console"), GI = {
  [Tl]: Tl,
  assert(t, ...e) {
    return x(() => {
      console.assert(t, ...e);
    });
  },
  clear: /* @__PURE__ */ x(() => {
    console.clear();
  }),
  count(t) {
    return x(() => {
      console.count(t);
    });
  },
  countReset(t) {
    return x(() => {
      console.countReset(t);
    });
  },
  debug(...t) {
    return x(() => {
      console.debug(...t);
    });
  },
  dir(t, e) {
    return x(() => {
      console.dir(t, e);
    });
  },
  dirxml(...t) {
    return x(() => {
      console.dirxml(...t);
    });
  },
  error(...t) {
    return x(() => {
      console.error(...t);
    });
  },
  group(t) {
    return t != null && t.collapsed ? x(() => console.groupCollapsed(t == null ? void 0 : t.label)) : x(() => console.group(t == null ? void 0 : t.label));
  },
  groupEnd: /* @__PURE__ */ x(() => {
    console.groupEnd();
  }),
  info(...t) {
    return x(() => {
      console.info(...t);
    });
  },
  log(...t) {
    return x(() => {
      console.log(...t);
    });
  },
  table(t, e) {
    return x(() => {
      console.table(t, e);
    });
  },
  time(t) {
    return x(() => console.time(t));
  },
  timeEnd(t) {
    return x(() => console.timeEnd(t));
  },
  timeLog(t, ...e) {
    return x(() => {
      console.timeLog(t, ...e);
    });
  },
  trace(...t) {
    return x(() => {
      console.trace(...t);
    });
  },
  warn(...t) {
    return x(() => {
      console.warn(...t);
    });
  },
  unsafe: console
}, WI = "effect/Random", $l = /* @__PURE__ */ Symbol.for(WI), zI = /* @__PURE__ */ yn("effect/Random");
var Xf;
Xf = $l;
class YI {
  constructor(e) {
    c(this, "seed");
    c(this, Xf, $l);
    c(this, "PRNG");
    this.seed = e, this.PRNG = new fy(e);
  }
  get next() {
    return x(() => this.PRNG.number());
  }
  get nextBoolean() {
    return At(this.next, (e) => e > 0.5);
  }
  get nextInt() {
    return x(() => this.PRNG.integer(Number.MAX_SAFE_INTEGER));
  }
  nextRange(e, n) {
    return At(this.next, (r) => (n - e) * r + e);
  }
  nextIntBetween(e, n) {
    return x(() => this.PRNG.integer(n - e) + e);
  }
  shuffle(e) {
    return QI(e, (n) => this.nextIntBetween(0, n));
  }
}
const QI = (t, e) => yt(() => g(x(() => Array.from(t)), A((n) => {
  const r = [];
  for (let s = n.length; s >= 2; s = s - 1)
    r.push(s);
  return g(r, Di((s) => g(e(s), At((o) => XI(n, s - 1, o)))), no(Ld(n)));
}))), XI = (t, e, n) => {
  const r = t[e];
  return t[e] = t[n], t[n] = r, t;
}, ZI = (t) => new YI(t), tE = /* @__PURE__ */ g(/* @__PURE__ */ Ti(), /* @__PURE__ */ lr(pu, /* @__PURE__ */ dI()), /* @__PURE__ */ lr(wg, GI), /* @__PURE__ */ lr(zI, /* @__PURE__ */ ZI(/* @__PURE__ */ Math.random() * 4294967296 >>> 0)), /* @__PURE__ */ lr(MI, /* @__PURE__ */ FI()), /* @__PURE__ */ lr(Wc, eO)), vr = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/DefaultServices/currentServices"), () => Qp(tE)), Rl = (t) => !t, Nl = Jh, eE = Ws, nE = "Sequential", rE = "Parallel", sE = "ParallelN", Og = {
  _tag: nE
}, oE = {
  _tag: rE
}, iE = (t) => ({
  _tag: sE,
  parallelism: t
}), ta = Og, ea = oE, na = iE;
function cE(t) {
  return new Be(t);
}
function aE() {
  return cE(/* @__PURE__ */ new Map());
}
const Ml = /* @__PURE__ */ Symbol.for("effect/FiberRefs");
var Zf;
Zf = Ml;
class Be {
  constructor(e) {
    c(this, "locals");
    c(this, Zf, Ml);
    this.locals = e;
  }
  pipe() {
    return R(this, arguments);
  }
}
const uE = (t, e, n, r = !1) => {
  const s = t;
  let o = e, i = n, a = r, u;
  for (; u === void 0; )
    if (at(o) && at(i)) {
      const l = jt(o)[0], f = cn(o), h = jt(i)[0], p = jt(i)[1], m = cn(i);
      l.startTimeMillis < h.startTimeMillis ? (i = m, a = !0) : l.startTimeMillis > h.startTimeMillis ? o = f : l.id < h.id ? (i = m, a = !0) : l.id > h.id ? o = f : u = [p, a];
    } else
      u = [s.initial, !0];
  return u;
}, lE = /* @__PURE__ */ d(3, (t, e, n) => {
  const r = new Map(t.locals);
  return n.locals.forEach((s, o) => {
    const i = s[0][1];
    if (!s[0][0][P](e)) {
      if (!r.has(o)) {
        if (C(i, o.initial))
          return;
        r.set(o, [[e, o.join(o.initial, i)]]);
        return;
      }
      const a = r.get(o), [u, l] = uE(o, a, s);
      if (l) {
        const f = o.diff(u, i), h = a[0][1], p = o.join(h, o.patch(f)(h));
        if (!C(h, p)) {
          let m;
          const y = a[0][0];
          y[P](e) ? m = [[y, p], ...a.slice(1)] : m = [[e, p], ...a], r.set(o, m);
        }
      }
    }
  }), new Be(r);
}), fE = /* @__PURE__ */ d(2, (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return Ig(t, n, e), new Be(n);
}), Ig = (t, e, n) => {
  t.locals.forEach((r, s) => {
    const o = r[0][1], i = s.patch(s.fork)(o);
    C(o, i) ? e.set(s, r) : e.set(s, [[n, i], ...r]);
  });
}, Eg = /* @__PURE__ */ d(2, (t, e) => {
  const n = new Map(t.locals);
  return n.delete(e), new Be(n);
}), ra = /* @__PURE__ */ d(2, (t, e) => t.locals.has(e) ? E(jt(t.locals.get(e))[1]) : w()), gu = /* @__PURE__ */ d(2, (t, e) => g(ra(t, e), St(() => e.initial))), sa = /* @__PURE__ */ d(2, (t, {
  fiberId: e,
  fiberRef: n,
  value: r
}) => {
  if (t.locals.size === 0)
    return new Be(/* @__PURE__ */ new Map([[n, [[e, r]]]]));
  const s = new Map(t.locals);
  return oa(s, e, n, r), new Be(s);
}), oa = (t, e, n, r) => {
  const s = t.get(n) ?? [];
  let o;
  if (at(s)) {
    const [i, a] = jt(s);
    if (i[P](e)) {
      if (C(a, r))
        return;
      o = [[e, r], ...s.slice(1)];
    } else
      o = [[e, r], ...s];
  } else
    o = [[e, r]];
  t.set(n, o);
}, hE = /* @__PURE__ */ d(2, (t, {
  entries: e,
  forkAs: n
}) => {
  if (t.locals.size === 0)
    return new Be(new Map(e));
  const r = new Map(t.locals);
  return n !== void 0 && Ig(t, r, n), e.forEach(([s, o]) => {
    o.length === 1 ? oa(r, o[0][0], s, o[0][1]) : o.forEach(([i, a]) => {
      oa(r, i, s, a);
    });
  }), new Be(r);
}), dE = gu, pE = hE, gE = aE, kg = "Empty", vg = "Add", Tg = "Remove", $g = "Update", Rg = "AndThen", mE = {
  _tag: kg
}, yE = (t, e) => {
  const n = new Map(t.locals);
  let r = mE;
  for (const [s, o] of e.locals.entries()) {
    const i = jt(o)[1], a = n.get(s);
    if (a !== void 0) {
      const u = jt(a)[1];
      C(u, i) || (r = mc({
        _tag: $g,
        fiberRef: s,
        patch: s.diff(u, i)
      })(r));
    } else
      r = mc({
        _tag: vg,
        fiberRef: s,
        value: i
      })(r);
    n.delete(s);
  }
  for (const [s] of n.entries())
    r = mc({
      _tag: Tg,
      fiberRef: s
    })(r);
  return r;
}, mc = /* @__PURE__ */ d(2, (t, e) => ({
  _tag: Rg,
  first: t,
  second: e
})), bE = /* @__PURE__ */ d(3, (t, e, n) => {
  let r = n, s = ee(t);
  for (; at(s); ) {
    const o = jt(s), i = cn(s);
    switch (o._tag) {
      case kg: {
        s = i;
        break;
      }
      case vg: {
        r = sa(r, {
          fiberId: e,
          fiberRef: o.fiberRef,
          value: o.value
        }), s = i;
        break;
      }
      case Tg: {
        r = Eg(r, o.fiberRef), s = i;
        break;
      }
      case $g: {
        const a = gu(r, o.fiberRef);
        r = sa(r, {
          fiberId: e,
          fiberRef: o.fiberRef,
          value: o.fiberRef.patch(o.patch)(a)
        }), s = i;
        break;
      }
      case Rg: {
        s = Lo(o.first)(Lo(o.second)(i));
        break;
      }
    }
  }
  return r;
}), _E = yE, SE = bE, Yi = "effect/FiberStatus", gn = /* @__PURE__ */ Symbol.for(Yi), Yo = "Done", Al = "Running", xl = "Suspended", wE = /* @__PURE__ */ ft(`${Yi}-${Yo}`);
var th;
class OE {
  constructor() {
    c(this, th, gn);
    c(this, "_tag", Yo);
  }
  [(th = gn, F)]() {
    return wE;
  }
  [P](e) {
    return mu(e) && e._tag === Yo;
  }
}
var eh;
class IE {
  constructor(e) {
    c(this, "runtimeFlags");
    c(this, eh, gn);
    c(this, "_tag", Al);
    this.runtimeFlags = e;
  }
  [(eh = gn, F)]() {
    return g(k(Yi), U(k(this._tag)), U(k(this.runtimeFlags)), et(this));
  }
  [P](e) {
    return mu(e) && e._tag === Al && this.runtimeFlags === e.runtimeFlags;
  }
}
var nh;
class EE {
  constructor(e, n) {
    c(this, "runtimeFlags");
    c(this, "blockingOn");
    c(this, nh, gn);
    c(this, "_tag", xl);
    this.runtimeFlags = e, this.blockingOn = n;
  }
  [(nh = gn, F)]() {
    return g(k(Yi), U(k(this._tag)), U(k(this.runtimeFlags)), U(k(this.blockingOn)), et(this));
  }
  [P](e) {
    return mu(e) && e._tag === xl && this.runtimeFlags === e.runtimeFlags && C(this.blockingOn, e.blockingOn);
  }
}
const kE = /* @__PURE__ */ new OE(), vE = (t) => new IE(t), TE = (t, e) => new EE(t, e), mu = (t) => j(t, gn), $E = (t) => t._tag === Yo, RE = kE, Ng = vE, NE = TE, ME = $E, AE = SO, xE = wO, PE = OO, CE = IO, FE = Wp, jE = zp, LE = EO, KE = kO, qE = /* @__PURE__ */ g(Ke, /* @__PURE__ */ bi((t) => t.ordinal)), UE = /* @__PURE__ */ jy(qE), DE = (t) => {
  switch (t) {
    case "All":
      return AE;
    case "Debug":
      return jE;
    case "Error":
      return PE;
    case "Fatal":
      return xE;
    case "Info":
      return FE;
    case "Trace":
      return LE;
    case "None":
      return KE;
    case "Warning":
      return CE;
  }
}, JE = /* @__PURE__ */ Symbol.for("effect/Micro"), Mg = /* @__PURE__ */ Symbol.for("effect/Micro/runSymbol"), Pl = /* @__PURE__ */ Symbol.for("effect/Micro/MicroCause"), BE = {
  _E: rt
};
var rh;
class HE extends globalThis.Error {
  constructor(n, r, s) {
    const o = `MicroCause.${n}`;
    let i, a, u;
    if (r instanceof globalThis.Error) {
      i = `(${o}) ${r.name}`, a = r.message;
      const l = a.split(`
`).length;
      u = r.stack ? `(${o}) ${r.stack.split(`
`).slice(0, l + 3).join(`
`)}` : `${i}: ${a}`;
    } else
      i = o, a = Rn(r, 0), u = `${i}: ${a}`;
    s.length > 0 && (u += `
    ${s.join(`
    `)}`);
    super(a);
    c(this, "_tag");
    c(this, "traces");
    c(this, rh);
    this._tag = n, this.traces = s, this[Pl] = BE, this.name = i, this.stack = u;
  }
  pipe() {
    return R(this, arguments);
  }
  toString() {
    return this.stack;
  }
  [(rh = Pl, z)]() {
    return this.stack;
  }
}
class VE extends HE {
  constructor(n, r = []) {
    super("Fail", n, r);
    c(this, "error");
    this.error = n;
  }
}
const GE = (t, e = []) => new VE(t, e), WE = (t) => B(GE(t)), zE = /* @__PURE__ */ Symbol.for("effect/Micro/Env"), Cl = /* @__PURE__ */ Symbol.for("effect/Micro/EnvRef"), YE = {
  [zE]: {
    _R: rt
  },
  pipe() {
    return R(this, arguments);
  }
}, Ag = (t) => {
  const e = Object.create(YE);
  return e.refs = t, e;
}, QE = () => {
  const t = new AbortController(), e = /* @__PURE__ */ Object.create(null);
  return e[xg.key] = t, e[ek.key] = t.signal, Ag(e);
}, XE = /* @__PURE__ */ d(2, (t, e) => e.key in t.refs ? t.refs[e.key] : e.initial), ZE = /* @__PURE__ */ d(3, (t, e, n) => {
  const r = Object.assign(/* @__PURE__ */ Object.create(null), t.refs);
  return r[e.key] = n, Ag(r);
}), tk = {
  [Cl]: Cl
}, yu = (t, e) => V(t, () => {
  const n = Object.create(tk);
  return n.key = t, n.initial = e(), n;
}), xg = /* @__PURE__ */ yu("effect/Micro/currentAbortController", () => {
}), ek = /* @__PURE__ */ yu("effect/Micro/currentAbortSignal", () => {
}), nk = /* @__PURE__ */ yu("effect/Micro/currentContext", () => Ti()), rk = {
  ...eE,
  _op: "Micro",
  [JE]: {
    _A: rt,
    _E: rt,
    _R: rt
  },
  [Symbol.iterator]() {
    return new cr(new Hs(this));
  }
}, sk = /* @__PURE__ */ function() {
  class t extends globalThis.Error {
    [Mg](n, r) {
      r(WE(this));
    }
    toString() {
      return this.message ? `${this.name}: ${this.message}` : this.name;
    }
    toJSON() {
      return {
        ...this
      };
    }
    [z]() {
      const n = this.stack;
      return n ? `${this.toString()}
${n.split(`
`).slice(1).join(`
`)}` : this.toString();
    }
  }
  return Object.assign(t.prototype, rk, yi), t;
}(), ok = /* @__PURE__ */ function() {
  return class extends sk {
    constructor(t) {
      super(), t && Object.assign(this, t);
    }
  };
}(), Pg = (t) => {
  class e extends ok {
    constructor() {
      super(...arguments);
      c(this, "_tag", t);
    }
  }
  return e.prototype.name = t, e;
};
class yR extends Pg("NoSuchElementException") {
}
class bR extends Pg("TimeoutException") {
}
class Cg {
  constructor() {
    /**
     * @since 2.0.0
     */
    c(this, "buckets", []);
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(e, n) {
    let r, s;
    for (s = 0; s < this.buckets.length && this.buckets[s][0] <= n; s++)
      r = this.buckets[s];
    if (r)
      r[1].push(e);
    else {
      const o = [];
      for (let i = 0; i < s; i++)
        o.push(this.buckets[i]);
      o.push([n, [e]]);
      for (let i = s; i < this.buckets.length; i++)
        o.push(this.buckets[i]);
      this.buckets = o;
    }
  }
}
class ik {
  constructor(e) {
    c(this, "maxNextTickBeforeTimer");
    /**
     * @since 2.0.0
     */
    c(this, "running", !1);
    /**
     * @since 2.0.0
     */
    c(this, "tasks", new Cg());
    this.maxNextTickBeforeTimer = e;
  }
  /**
   * @since 2.0.0
   */
  starveInternal(e) {
    const n = this.tasks.buckets;
    this.tasks.buckets = [];
    for (const [r, s] of n)
      for (let o = 0; o < s.length; o++)
        s[o]();
    this.tasks.buckets.length === 0 ? this.running = !1 : this.starve(e);
  }
  /**
   * @since 2.0.0
   */
  starve(e = 0) {
    e >= this.maxNextTickBeforeTimer ? setTimeout(() => this.starveInternal(0), 0) : Promise.resolve(void 0).then(() => this.starveInternal(e + 1));
  }
  /**
   * @since 2.0.0
   */
  shouldYield(e) {
    return e.currentOpCount > e.getFiberRef(Xp) ? e.getFiberRef(Wi) : !1;
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(e, n) {
    this.tasks.scheduleTask(e, n), this.running || (this.running = !0, this.starve());
  }
}
const Fg = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/Scheduler/defaultScheduler"), () => new ik(2048));
class ck {
  constructor() {
    /**
     * @since 2.0.0
     */
    c(this, "tasks", new Cg());
    /**
     * @since 2.0.0
     */
    c(this, "deferred", !1);
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(e, n) {
    this.deferred ? Fg.scheduleTask(e, n) : this.tasks.scheduleTask(e, n);
  }
  /**
   * @since 2.0.0
   */
  shouldYield(e) {
    return e.currentOpCount > e.getFiberRef(Xp) ? e.getFiberRef(Wi) : !1;
  }
  /**
   * @since 2.0.0
   */
  flush() {
    for (; this.tasks.buckets.length > 0; ) {
      const e = this.tasks.buckets;
      this.tasks.buckets = [];
      for (const [n, r] of e)
        for (let s = 0; s < r.length; s++)
          r[s]();
    }
    this.deferred = !0;
  }
}
const ia = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentScheduler"), () => Dt(Fg)), jg = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestMap"), () => Dt(/* @__PURE__ */ new Map())), Fl = (t, e, n, r) => {
  switch (t) {
    case void 0:
      return e();
    case "unbounded":
      return n();
    case "inherit":
      return lu(FO, (s) => s === "unbounded" ? n() : s > 1 ? r(s) : e());
    default:
      return t > 1 ? r(t) : e();
  }
}, ak = (t) => (e) => `${e.label.replace(/[\s="]/g, "_")}=${t - e.startTime}ms`, uk = ak, Lg = "effect/MetricLabel", ca = /* @__PURE__ */ Symbol.for(Lg);
var sh;
class lk {
  constructor(e, n) {
    c(this, "key");
    c(this, "value");
    c(this, sh, ca);
    c(this, "_hash");
    this.key = e, this.value = n, this._hash = ft(Lg + this.key + this.value);
  }
  [(sh = ca, F)]() {
    return this._hash;
  }
  [P](e) {
    return hk(e) && this.key === e.key && this.value === e.value;
  }
  pipe() {
    return R(this, arguments);
  }
}
const fk = (t, e) => new lk(t, e), hk = (t) => j(t, ca), dk = (t) => {
  let e, n;
  return typeof t == "function" ? e = t : (e = t.try, n = t.catch), e.length >= 1 ? Se((r, s) => {
    try {
      e(s).then((o) => r(_t(o)), (o) => r(bt(n ? n(o) : new br(o))));
    } catch (o) {
      r(bt(n ? n(o) : new br(o)));
    }
  }) : Se((r) => {
    try {
      e().then((s) => r(_t(s)), (s) => r(bt(n ? n(s) : new br(s))));
    } catch (s) {
      r(bt(n ? n(s) : new br(s)));
    }
  });
}, bu = "InterruptSignal", _u = "Stateful", Su = "Resume", wu = "YieldNow", yc = (t) => ({
  _tag: bu,
  cause: t
}), ko = (t) => ({
  _tag: _u,
  onFiber: t
}), On = (t) => ({
  _tag: Su,
  effect: t
}), pk = () => ({
  _tag: wu
}), gk = "effect/FiberScope", Qo = /* @__PURE__ */ Symbol.for(gk);
var oh;
oh = Qo;
class mk {
  constructor() {
    c(this, oh, Qo);
    c(this, "fiberId", Vn);
    c(this, "roots", /* @__PURE__ */ new Set());
  }
  add(e, n) {
    this.roots.add(n), n.addObserver(() => {
      this.roots.delete(n);
    });
  }
}
var ih;
ih = Qo;
class yk {
  constructor(e, n) {
    c(this, "fiberId");
    c(this, "parent");
    c(this, ih, Qo);
    this.fiberId = e, this.parent = n;
  }
  add(e, n) {
    this.parent.tell(ko((r) => {
      r.addChild(n), n.addObserver(() => {
        r.removeChild(n);
      });
    }));
  }
}
const bk = (t) => new yk(t.id(), t), Ou = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberScope/Global"), () => new mk()), _k = "effect/Fiber", Sk = /* @__PURE__ */ Symbol.for(_k), wk = {
  /* c8 ignore next */
  _E: (t) => t,
  /* c8 ignore next */
  _A: (t) => t
}, Ok = "effect/Fiber", Ik = /* @__PURE__ */ Symbol.for(Ok), Ek = (t) => Vp(qp(t.await), t.inheritAll), Ge = "effect/FiberCurrent", kk = "effect/Logger", vk = /* @__PURE__ */ Symbol.for(kk), Tk = {
  /* c8 ignore next */
  _Message: (t) => t,
  /* c8 ignore next */
  _Output: (t) => t
}, Iu = (t) => ({
  [vk]: Tk,
  log: t,
  pipe() {
    return R(this, arguments);
  }
}), $k = /* @__PURE__ */ Iu(({
  annotations: t,
  cause: e,
  date: n,
  fiberId: r,
  logLevel: s,
  message: o,
  spans: i
}) => {
  const a = n.getTime();
  let l = [`timestamp=${n.toISOString()}`, `level=${s.label}`, `fiber=${np(r)}`].join(" ");
  if (Array.isArray(o))
    for (let f = 0; f < o.length; f++) {
      const h = Rn(o[f]);
      h.length > 0 && (l = l + " message=", l = ho(h, l));
    }
  else {
    const f = Rn(o);
    f.length > 0 && (l = l + " message=", l = ho(f, l));
  }
  if (e != null && e._tag !== "Empty" && (l = l + " cause=", l = ho(ou(e), l)), fp(i)) {
    l = l + " ";
    let f = !0;
    for (const h of i)
      f ? f = !1 : l = l + " ", l = l + g(h, uk(a));
  }
  if (g(t, ZS) > 0) {
    l = l + " ";
    let f = !0;
    for (const [h, p] of t)
      f ? f = !1 : l = l + " ", l = l + Mk(h), l = l + "=", l = ho(Rn(p), l);
  }
  return l;
}), Rk = (t) => `"${t.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`, Nk = /^[^\s"=]+$/, ho = (t, e) => e + (t.match(Nk) ? t : Rk(t)), Mk = (t) => t.replace(/[\s="]/g, "_"), Kg = "effect/MetricBoundaries", aa = /* @__PURE__ */ Symbol.for(Kg);
var ch;
class Ak {
  constructor(e) {
    c(this, "values");
    c(this, ch, aa);
    c(this, "_hash");
    this.values = e, this._hash = g(ft(Kg), U(Vs(this.values)));
  }
  [(ch = aa, F)]() {
    return this._hash;
  }
  [P](e) {
    return xk(e) && C(this.values, e.values);
  }
  pipe() {
    return R(this, arguments);
  }
}
const xk = (t) => j(t, aa), Pk = (t) => {
  const e = g(t, od(Ut(Number.POSITIVE_INFINITY)), lb);
  return new Ak(e);
}, Ck = (t) => g(Vy(t.count - 1, (e) => t.start * Math.pow(t.factor, e)), Da, Pk), Fk = "effect/MetricKeyType", qg = /* @__PURE__ */ Symbol.for(Fk), Ug = "effect/MetricKeyType/Counter", ua = /* @__PURE__ */ Symbol.for(Ug), jk = "effect/MetricKeyType/Frequency", Lk = /* @__PURE__ */ Symbol.for(jk), Kk = "effect/MetricKeyType/Gauge", qk = /* @__PURE__ */ Symbol.for(Kk), Dg = "effect/MetricKeyType/Histogram", la = /* @__PURE__ */ Symbol.for(Dg), Uk = "effect/MetricKeyType/Summary", Dk = /* @__PURE__ */ Symbol.for(Uk), Jg = {
  /* c8 ignore next */
  _In: (t) => t,
  /* c8 ignore next */
  _Out: (t) => t
};
var ah, uh;
class Jk {
  constructor(e, n) {
    c(this, "incremental");
    c(this, "bigint");
    c(this, uh, Jg);
    c(this, ah, ua);
    c(this, "_hash");
    this.incremental = e, this.bigint = n, this._hash = ft(Ug);
  }
  [(uh = qg, ah = ua, F)]() {
    return this._hash;
  }
  [P](e) {
    return Bg(e);
  }
  pipe() {
    return R(this, arguments);
  }
}
var lh, fh;
class Bk {
  constructor(e) {
    c(this, "boundaries");
    c(this, fh, Jg);
    c(this, lh, la);
    c(this, "_hash");
    this.boundaries = e, this._hash = g(ft(Dg), U(k(this.boundaries)));
  }
  [(fh = qg, lh = la, F)]() {
    return this._hash;
  }
  [P](e) {
    return Hg(e) && C(this.boundaries, e.boundaries);
  }
  pipe() {
    return R(this, arguments);
  }
}
const Hk = (t) => new Jk((t == null ? void 0 : t.incremental) ?? !1, (t == null ? void 0 : t.bigint) ?? !1), Vk = (t) => new Bk(t), Bg = (t) => j(t, ua), Gk = (t) => j(t, Lk), Wk = (t) => j(t, qk), Hg = (t) => j(t, la), zk = (t) => j(t, Dk), Yk = "effect/MetricKey", Vg = /* @__PURE__ */ Symbol.for(Yk), Qk = {
  /* c8 ignore next */
  _Type: (t) => t
}, Xk = /* @__PURE__ */ La(C);
var hh;
class Eu {
  constructor(e, n, r, s = []) {
    c(this, "name");
    c(this, "keyType");
    c(this, "description");
    c(this, "tags");
    c(this, hh, Qk);
    c(this, "_hash");
    this.name = e, this.keyType = n, this.description = r, this.tags = s, this._hash = g(ft(this.name + this.description), U(k(this.keyType)), U(Vs(this.tags)));
  }
  [(hh = Vg, F)]() {
    return this._hash;
  }
  [P](e) {
    return Zk(e) && this.name === e.name && C(this.keyType, e.keyType) && C(this.description, e.description) && Xk(this.tags, e.tags);
  }
  pipe() {
    return R(this, arguments);
  }
}
const Zk = (t) => j(t, Vg), tv = (t, e) => new Eu(t, Hk(e), _i(e == null ? void 0 : e.description)), ev = (t, e, n) => new Eu(t, Vk(e), _i(n)), nv = /* @__PURE__ */ d(2, (t, e) => e.length === 0 ? t : new Eu(t.name, t.keyType, t.description, Ac(t.tags, e))), jl = /* @__PURE__ */ Symbol.for("effect/MutableHashMap"), rv = {
  [jl]: jl,
  [Symbol.iterator]() {
    return new ku(this);
  },
  toString() {
    return It(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableHashMap",
      values: Array.from(this).map(it)
    };
  },
  [z]() {
    return this.toJSON();
  },
  pipe() {
    return R(this, arguments);
  }
};
class ku {
  constructor(e) {
    c(this, "self");
    c(this, "referentialIterator");
    c(this, "bucketIterator");
    this.self = e, this.referentialIterator = e.referential[Symbol.iterator]();
  }
  next() {
    if (this.bucketIterator !== void 0)
      return this.bucketIterator.next();
    const e = this.referentialIterator.next();
    return e.done ? (this.bucketIterator = new sv(this.self.buckets.values()), this.next()) : e;
  }
  [Symbol.iterator]() {
    return new ku(this.self);
  }
}
class sv {
  constructor(e) {
    c(this, "backing");
    c(this, "currentBucket");
    this.backing = e;
  }
  next() {
    if (this.currentBucket === void 0) {
      const n = this.backing.next();
      if (n.done)
        return n;
      this.currentBucket = n.value[Symbol.iterator]();
    }
    const e = this.currentBucket.next();
    return e.done ? (this.currentBucket = void 0, this.next()) : e;
  }
}
const ov = () => {
  const t = Object.create(rv);
  return t.referential = /* @__PURE__ */ new Map(), t.buckets = /* @__PURE__ */ new Map(), t.bucketsSize = 0, t;
}, We = /* @__PURE__ */ d(2, (t, e) => {
  if (Ao(e) === !1)
    return t.referential.has(e) ? E(t.referential.get(e)) : w();
  const n = e[F](), r = t.buckets.get(n);
  return r === void 0 ? w() : iv(t, r, e);
}), iv = (t, e, n, r = !1) => {
  for (let s = 0, o = e.length; s < o; s++)
    if (n[P](e[s][0])) {
      const i = e[s][1];
      return r && (e.splice(s, 1), t.bucketsSize--), E(i);
    }
  return w();
}, fr = /* @__PURE__ */ d(2, (t, e) => Z(We(t, e))), hr = /* @__PURE__ */ d(3, (t, e, n) => {
  if (Ao(e) === !1)
    return t.referential.set(e, n), t;
  const r = e[F](), s = t.buckets.get(r);
  return s === void 0 ? (t.buckets.set(r, [[e, n]]), t.bucketsSize++, t) : (cv(t, s, e), s.push([e, n]), t.bucketsSize++, t);
}), cv = (t, e, n) => {
  for (let r = 0, s = e.length; r < s; r++)
    if (n[P](e[r][0])) {
      e.splice(r, 1), t.bucketsSize--;
      return;
    }
}, av = "effect/MetricState", oo = /* @__PURE__ */ Symbol.for(av), Gg = "effect/MetricState/Counter", fa = /* @__PURE__ */ Symbol.for(Gg), Wg = "effect/MetricState/Frequency", ha = /* @__PURE__ */ Symbol.for(Wg), zg = "effect/MetricState/Gauge", da = /* @__PURE__ */ Symbol.for(zg), Yg = "effect/MetricState/Histogram", pa = /* @__PURE__ */ Symbol.for(Yg), Qg = "effect/MetricState/Summary", ga = /* @__PURE__ */ Symbol.for(Qg), io = {
  /* c8 ignore next */
  _A: (t) => t
};
var dh, ph;
class uv {
  constructor(e) {
    c(this, "count");
    c(this, ph, io);
    c(this, dh, fa);
    this.count = e;
  }
  [(ph = oo, dh = fa, F)]() {
    return g(k(Gg), U(k(this.count)), et(this));
  }
  [P](e) {
    return Sv(e) && this.count === e.count;
  }
  pipe() {
    return R(this, arguments);
  }
}
const lv = /* @__PURE__ */ La(C);
var gh, mh;
class fv {
  constructor(e) {
    c(this, "occurrences");
    c(this, mh, io);
    c(this, gh, ha);
    c(this, "_hash");
    this.occurrences = e;
  }
  [(mh = oo, gh = ha, F)]() {
    return g(ft(Wg), U(Vs(ct(this.occurrences.entries()))), et(this));
  }
  [P](e) {
    return wv(e) && lv(ct(this.occurrences.entries()), ct(e.occurrences.entries()));
  }
  pipe() {
    return R(this, arguments);
  }
}
var yh, bh;
class hv {
  constructor(e) {
    c(this, "value");
    c(this, bh, io);
    c(this, yh, da);
    this.value = e;
  }
  [(bh = oo, yh = da, F)]() {
    return g(k(zg), U(k(this.value)), et(this));
  }
  [P](e) {
    return Ov(e) && this.value === e.value;
  }
  pipe() {
    return R(this, arguments);
  }
}
var _h, Sh;
class dv {
  constructor(e, n, r, s, o) {
    c(this, "buckets");
    c(this, "count");
    c(this, "min");
    c(this, "max");
    c(this, "sum");
    c(this, Sh, io);
    c(this, _h, pa);
    this.buckets = e, this.count = n, this.min = r, this.max = s, this.sum = o;
  }
  [(Sh = oo, _h = pa, F)]() {
    return g(k(Yg), U(k(this.buckets)), U(k(this.count)), U(k(this.min)), U(k(this.max)), U(k(this.sum)), et(this));
  }
  [P](e) {
    return Iv(e) && C(this.buckets, e.buckets) && this.count === e.count && this.min === e.min && this.max === e.max && this.sum === e.sum;
  }
  pipe() {
    return R(this, arguments);
  }
}
var wh, Oh;
class pv {
  constructor(e, n, r, s, o, i) {
    c(this, "error");
    c(this, "quantiles");
    c(this, "count");
    c(this, "min");
    c(this, "max");
    c(this, "sum");
    c(this, Oh, io);
    c(this, wh, ga);
    this.error = e, this.quantiles = n, this.count = r, this.min = s, this.max = o, this.sum = i;
  }
  [(Oh = oo, wh = ga, F)]() {
    return g(k(Qg), U(k(this.error)), U(k(this.quantiles)), U(k(this.count)), U(k(this.min)), U(k(this.max)), U(k(this.sum)), et(this));
  }
  [P](e) {
    return Ev(e) && this.error === e.error && C(this.quantiles, e.quantiles) && this.count === e.count && this.min === e.min && this.max === e.max && this.sum === e.sum;
  }
  pipe() {
    return R(this, arguments);
  }
}
const gv = (t) => new uv(t), mv = (t) => new fv(t), yv = (t) => new hv(t), bv = (t) => new dv(t.buckets, t.count, t.min, t.max, t.sum), _v = (t) => new pv(t.error, t.quantiles, t.count, t.min, t.max, t.sum), Sv = (t) => j(t, fa), wv = (t) => j(t, ha), Ov = (t) => j(t, da), Iv = (t) => j(t, pa), Ev = (t) => j(t, ga), kv = "effect/MetricHook", vv = /* @__PURE__ */ Symbol.for(kv), Tv = {
  /* c8 ignore next */
  _In: (t) => t,
  /* c8 ignore next */
  _Out: (t) => t
}, co = (t) => ({
  [vv]: Tv,
  pipe() {
    return R(this, arguments);
  },
  ...t
}), Ll = /* @__PURE__ */ BigInt(0), $v = (t) => {
  let e = t.keyType.bigint ? Ll : 0;
  const n = t.keyType.incremental ? t.keyType.bigint ? (r) => r >= Ll : (r) => r >= 0 : (r) => !0;
  return co({
    get: () => gv(e),
    update: (r) => {
      n(r) && (e = e + r);
    }
  });
}, Rv = (t) => {
  const e = /* @__PURE__ */ new Map();
  for (const r of t.keyType.preregisteredWords)
    e.set(r, 0);
  return co({
    get: () => mv(e),
    update: (r) => {
      const s = e.get(r) ?? 0;
      e.set(r, s + 1);
    }
  });
}, Nv = (t, e) => {
  let n = e;
  return co({
    get: () => yv(n),
    update: (r) => {
      n = r;
    }
  });
}, Mv = (t) => {
  const e = t.keyType.boundaries.values, n = e.length, r = new Uint32Array(n + 1), s = new Float32Array(n);
  let o = 0, i = 0, a = Number.MAX_VALUE, u = Number.MIN_VALUE;
  g(e, an(Ke), Nn((h, p) => {
    s[p] = h;
  }));
  const l = (h) => {
    let p = 0, m = n;
    for (; p !== m; ) {
      const y = Math.floor(p + (m - p) / 2), S = s[y];
      h <= S ? m = y : p = y, m === p + 1 && (h <= s[p] ? m = p : p = m);
    }
    r[p] = r[p] + 1, o = o + 1, i = i + h, h < a && (a = h), h > u && (u = h);
  }, f = () => {
    const h = Si(n);
    let p = 0;
    for (let m = 0; m < n; m++) {
      const y = s[m], S = r[m];
      p = p + S, h[m] = [y, p];
    }
    return h;
  };
  return co({
    get: () => bv({
      buckets: f(),
      count: o,
      min: a,
      max: u,
      sum: i
    }),
    update: l
  });
}, Av = (t) => {
  const {
    error: e,
    maxAge: n,
    maxSize: r,
    quantiles: s
  } = t.keyType, o = g(s, an(Ke)), i = Si(r);
  let a = 0, u = 0, l = 0, f = Number.MAX_VALUE, h = Number.MIN_VALUE;
  const p = (y) => {
    const S = [];
    let _ = 0;
    for (; _ !== r - 1; ) {
      const O = i[_];
      if (O != null) {
        const [N, I] = O, L = As(y - N);
        iI(L, nI) && L <= n && S.push(I);
      }
      _ = _ + 1;
    }
    return xv(e, o, an(S, Ke));
  }, m = (y, S) => {
    if (r > 0) {
      a = a + 1;
      const _ = a % r;
      i[_] = [S, y];
    }
    u = u + 1, l = l + y, y < f && (f = y), y > h && (h = y);
  };
  return co({
    get: () => _v({
      error: e,
      quantiles: p(Date.now()),
      count: u,
      min: f,
      max: h,
      sum: l
    }),
    update: ([y, S]) => m(y, S)
  });
}, xv = (t, e, n) => {
  const r = n.length;
  if (!at(e))
    return Kn();
  const s = e[0], o = e.slice(1), i = Kl(t, r, w(), 0, s, n), a = ee(i);
  return o.forEach((u) => {
    a.push(Kl(t, r, i.value, i.consumed, u, i.rest));
  }), Nn(a, (u) => [u.quantile, u.value]);
}, Kl = (t, e, n, r, s, o) => {
  let i = t, a = e, u = n, l = r, f = s, h = o, p = t, m = e, y = n, S = r, _ = s, O = o;
  for (; ; ) {
    if (!at(h))
      return {
        quantile: f,
        value: w(),
        consumed: l,
        rest: []
      };
    if (f === 1)
      return {
        quantile: f,
        value: E(ad(h)),
        consumed: l + h.length,
        rest: []
      };
    const N = eb(h, (T) => T <= h[0]), I = f * a, L = i / 2 * I, q = l + N[0].length, M = Math.abs(q - I);
    if (q < I - L) {
      p = i, m = a, y = Ir(h), S = q, _ = f, O = N[1], i = p, a = m, u = y, l = S, f = _, h = O;
      continue;
    }
    if (q > I + L)
      return {
        quantile: f,
        value: u,
        consumed: l,
        rest: h
      };
    switch (u._tag) {
      case "None": {
        p = i, m = a, y = Ir(h), S = q, _ = f, O = N[1], i = p, a = m, u = y, l = S, f = _, h = O;
        continue;
      }
      case "Some": {
        const T = Math.abs(I - u.value);
        if (M < T) {
          p = i, m = a, y = Ir(h), S = q, _ = f, O = N[1], i = p, a = m, u = y, l = S, f = _, h = O;
          continue;
        }
        return {
          quantile: f,
          value: E(u.value),
          consumed: l,
          rest: h
        };
      }
    }
  }
  throw new Error("BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/effect/issues");
}, Pv = "effect/MetricPair", Cv = /* @__PURE__ */ Symbol.for(Pv), Fv = {
  /* c8 ignore next */
  _Type: (t) => t
}, jv = (t, e) => ({
  [Cv]: Fv,
  metricKey: t,
  metricState: e,
  pipe() {
    return R(this, arguments);
  }
}), Lv = "effect/MetricRegistry", ql = /* @__PURE__ */ Symbol.for(Lv);
var Ih;
Ih = ql;
class Kv {
  constructor() {
    c(this, Ih, ql);
    c(this, "map", ov());
  }
  snapshot() {
    const e = [];
    for (const [n, r] of this.map)
      e.push(jv(n, r.get()));
    return e;
  }
  get(e) {
    const n = g(this.map, We(e), ve);
    if (n == null) {
      if (Bg(e.keyType))
        return this.getCounter(e);
      if (Wk(e.keyType))
        return this.getGauge(e);
      if (Gk(e.keyType))
        return this.getFrequency(e);
      if (Hg(e.keyType))
        return this.getHistogram(e);
      if (zk(e.keyType))
        return this.getSummary(e);
      throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/effect/issues");
    } else
      return n;
  }
  getCounter(e) {
    let n = g(this.map, We(e), ve);
    if (n == null) {
      const r = $v(e);
      g(this.map, fr(e)) || g(this.map, hr(e, r)), n = r;
    }
    return n;
  }
  getFrequency(e) {
    let n = g(this.map, We(e), ve);
    if (n == null) {
      const r = Rv(e);
      g(this.map, fr(e)) || g(this.map, hr(e, r)), n = r;
    }
    return n;
  }
  getGauge(e) {
    let n = g(this.map, We(e), ve);
    if (n == null) {
      const r = Nv(e, e.keyType.bigint ? BigInt(0) : 0);
      g(this.map, fr(e)) || g(this.map, hr(e, r)), n = r;
    }
    return n;
  }
  getHistogram(e) {
    let n = g(this.map, We(e), ve);
    if (n == null) {
      const r = Mv(e);
      g(this.map, fr(e)) || g(this.map, hr(e, r)), n = r;
    }
    return n;
  }
  getSummary(e) {
    let n = g(this.map, We(e), ve);
    if (n == null) {
      const r = Av(e);
      g(this.map, fr(e)) || g(this.map, hr(e, r)), n = r;
    }
    return n;
  }
}
const qv = () => new Kv(), Uv = "effect/Metric", Dv = /* @__PURE__ */ Symbol.for(Uv), Jv = {
  /* c8 ignore next */
  _Type: (t) => t,
  /* c8 ignore next */
  _In: (t) => t,
  /* c8 ignore next */
  _Out: (t) => t
}, Ul = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/Metric/globalMetricRegistry"), () => qv()), Xg = function(t, e, n) {
  const r = Object.assign((s) => gO(s, (o) => Gv(r, o)), {
    [Dv]: Jv,
    keyType: t,
    unsafeUpdate: e,
    unsafeValue: n,
    register() {
      return this.unsafeValue([]), this;
    },
    pipe() {
      return R(this, arguments);
    }
  });
  return r;
}, Qi = (t, e) => Zg(tv(t, e)), Zg = (t) => {
  let e;
  const n = /* @__PURE__ */ new WeakMap(), r = (s) => {
    if (s.length === 0)
      return e !== void 0 || (e = Ul.get(t)), e;
    let o = n.get(s);
    return o !== void 0 || (o = Ul.get(nv(t, s)), n.set(s, o)), o;
  };
  return Xg(t.keyType, (s, o) => r(o).update(s), (s) => r(s).get());
}, Bv = (t, e, n) => Zg(ev(t, e, n)), Hv = /* @__PURE__ */ d(3, (t, e, n) => Vv(t, [fk(e, n)])), Vv = /* @__PURE__ */ d(2, (t, e) => Xg(t.keyType, (n, r) => t.unsafeUpdate(n, Ac(e, r)), (n) => t.unsafeValue(Ac(e, n)))), Gv = /* @__PURE__ */ d(2, (t, e) => lu(Yc, (n) => x(() => t.unsafeUpdate(e, n)))), Wv = "effect/Request", zv = /* @__PURE__ */ Symbol.for(Wv), Yv = {
  /* c8 ignore next */
  _E: (t) => t,
  /* c8 ignore next */
  _A: (t) => t
};
({
  ...yi,
  [zv]: 0
});
const Qv = /* @__PURE__ */ d(2, (t, e) => lu(jg, (n) => x(() => {
  if (n.has(t)) {
    const r = n.get(t);
    r.state.completed || (r.state.completed = !0, ng(r.result, e));
  }
}))), Xv = "effect/Supervisor", Xi = /* @__PURE__ */ Symbol.for(Xv), vu = {
  /* c8 ignore next */
  _T: (t) => t
};
var Eh;
Eh = Xi;
const Pu = class Pu {
  constructor(e, n) {
    c(this, "underlying");
    c(this, "value0");
    c(this, Eh, vu);
    this.underlying = e, this.value0 = n;
  }
  get value() {
    return this.value0;
  }
  onStart(e, n, r, s) {
    this.underlying.onStart(e, n, r, s);
  }
  onEnd(e, n) {
    this.underlying.onEnd(e, n);
  }
  onEffect(e, n) {
    this.underlying.onEffect(e, n);
  }
  onSuspend(e) {
    this.underlying.onSuspend(e);
  }
  onResume(e) {
    this.underlying.onResume(e);
  }
  map(e) {
    return new Pu(this, g(this.value, At(e)));
  }
  zip(e) {
    return new Zo(this, e);
  }
};
let Xo = Pu;
var kh;
kh = Xi;
const Cu = class Cu {
  constructor(e, n) {
    c(this, "left");
    c(this, "right");
    c(this, "_tag", "Zip");
    c(this, kh, vu);
    this.left = e, this.right = n;
  }
  get value() {
    return Hp(this.left.value, this.right.value);
  }
  onStart(e, n, r, s) {
    this.left.onStart(e, n, r, s), this.right.onStart(e, n, r, s);
  }
  onEnd(e, n) {
    this.left.onEnd(e, n), this.right.onEnd(e, n);
  }
  onEffect(e, n) {
    this.left.onEffect(e, n), this.right.onEffect(e, n);
  }
  onSuspend(e) {
    this.left.onSuspend(e), this.right.onSuspend(e);
  }
  onResume(e) {
    this.left.onResume(e), this.right.onResume(e);
  }
  map(e) {
    return new Xo(this, g(this.value, At(e)));
  }
  zip(e) {
    return new Cu(this, e);
  }
};
let Zo = Cu;
const tm = (t) => j(t, Xi) && jh(t, "Zip");
var vh;
vh = Xi;
class Zv {
  constructor(e) {
    c(this, "effect");
    c(this, vh, vu);
    this.effect = e;
  }
  get value() {
    return this.effect;
  }
  onStart(e, n, r, s) {
  }
  onEnd(e, n) {
  }
  onEffect(e, n) {
  }
  onSuspend(e) {
  }
  onResume(e) {
  }
  map(e) {
    return new Xo(this, g(this.value, At(e)));
  }
  zip(e) {
    return new Zo(this, e);
  }
  onRun(e, n) {
    return e();
  }
}
const tT = (t) => new Zv(t), Zi = /* @__PURE__ */ V("effect/Supervisor/none", () => tT(we)), eT = er, em = "Empty", nm = "AddSupervisor", rm = "RemoveSupervisor", sm = "AndThen", Tr = {
  _tag: em
}, vo = (t, e) => ({
  _tag: sm,
  first: t,
  second: e
}), nT = (t, e) => rT(e, Ut(t)), rT = (t, e) => {
  let n = t, r = e;
  for (; Dn(r); ) {
    const s = Jn(r);
    switch (s._tag) {
      case em: {
        r = Ye(r);
        break;
      }
      case nm: {
        n = n.zip(s.supervisor), r = Ye(r);
        break;
      }
      case rm: {
        n = ma(n, s.supervisor), r = Ye(r);
        break;
      }
      case sm: {
        r = le(s.first)(le(s.second)(Ye(r)));
        break;
      }
    }
  }
  return n;
}, ma = (t, e) => C(t, e) ? Zi : tm(t) ? ma(t.left, e).zip(ma(t.right, e)) : t, ti = (t) => C(t, Zi) ? ln() : tm(t) ? g(ti(t.left), $s(ti(t.right))) : Qa(t), sT = (t, e) => {
  if (C(t, e))
    return Tr;
  const n = ti(t), r = ti(e), s = g(r, Qu(n), Jo(Tr, (i, a) => vo(i, {
    _tag: nm,
    supervisor: a
  }))), o = g(n, Qu(r), Jo(Tr, (i, a) => vo(i, {
    _tag: rm,
    supervisor: a
  })));
  return vo(s, o);
}, oT = /* @__PURE__ */ eT({
  empty: Tr,
  patch: nT,
  combine: vo,
  diff: sT
}), iT = /* @__PURE__ */ Qi("effect_fiber_started", {
  incremental: !0
}), Dl = /* @__PURE__ */ Qi("effect_fiber_active"), cT = /* @__PURE__ */ Qi("effect_fiber_successes", {
  incremental: !0
}), aT = /* @__PURE__ */ Qi("effect_fiber_failures", {
  incremental: !0
}), uT = /* @__PURE__ */ Hv(/* @__PURE__ */ Bv("effect_fiber_lifetimes", /* @__PURE__ */ Ck({
  start: 0.5,
  factor: 2,
  count: 35
})), "time_unit", "milliseconds"), dr = "Continue", lT = "Done", Jl = "Yield", fT = {
  /* c8 ignore next */
  _E: (t) => t,
  /* c8 ignore next */
  _A: (t) => t
}, pr = (t) => {
  throw new Error(`BUG: FiberRuntime - ${Rn(t)} - please report an issue at https://github.com/Effect-TS/effect/issues`);
}, Ae = /* @__PURE__ */ Symbol.for("effect/internal/fiberRuntime/YieldedOp"), Ee = /* @__PURE__ */ V("effect/internal/fiberRuntime/yieldedOpChannel", () => ({
  currentOp: null
})), po = {
  [xo]: (t, e, n) => Ft(() => e.effect_instruction_i1(n)),
  OnStep: (t, e, n) => _t(_t(n)),
  [Po]: (t, e, n) => Ft(() => e.effect_instruction_i2(n)),
  [Fa]: (t, e, n) => (t.patchRuntimeFlags(t._runtimeFlags, e.patch), xe(t._runtimeFlags) && t.isInterrupted() ? Y(t.getInterruptedCause()) : _t(n)),
  [Co]: (t, e, n) => (Ft(() => e.effect_instruction_i2(n)), Ft(() => e.effect_instruction_i0()) ? (t.pushStack(e), Ft(() => e.effect_instruction_i1())) : we)
}, hT = {
  [bu]: (t, e, n, r) => (t.processNewInterruptSignal(r.cause), xe(e) ? Y(r.cause) : n),
  [Su]: (t, e, n, r) => {
    throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
  },
  [_u]: (t, e, n, r) => (r.onFiber(t, Ng(e)), n),
  [wu]: (t, e, n, r) => A(uu(), () => n)
}, dT = (t) => Di(p0(t), (e) => sn($0(e), ([n, r]) => {
  const s = /* @__PURE__ */ new Map(), o = [];
  for (const a of r) {
    o.push(nn(a));
    for (const u of a)
      s.set(u.request, u);
  }
  const i = o.flat();
  return Gi(kT(n.runAll(o), i, () => i.forEach((a) => {
    a.listeners.interrupted = !0;
  })), jg, s);
}, !1, !1));
var Th, $h;
class om {
  constructor(e, n, r) {
    c(this, $h, wk);
    c(this, Th, fT);
    c(this, "_fiberRefs");
    c(this, "_fiberId");
    c(this, "_runtimeFlags");
    c(this, "_queue", new Array());
    c(this, "_children", null);
    c(this, "_observers", new Array());
    c(this, "_running", !1);
    c(this, "_stack", []);
    c(this, "_asyncInterruptor", null);
    c(this, "_asyncBlockingOn", null);
    c(this, "_exitValue", null);
    c(this, "_steps", []);
    c(this, "_supervisor");
    c(this, "_scheduler");
    c(this, "_tracer");
    c(this, "currentOpCount", 0);
    c(this, "isYielding", !1);
    c(this, "run", () => {
      this.drainQueueOnCurrentThread();
    });
    if (this._runtimeFlags = r, this._fiberId = e, this._fiberRefs = n, this._supervisor = this.getFiberRef(zl), this._scheduler = this.getFiberRef(ia), nl(r)) {
      const s = this.getFiberRef(Yc);
      iT.unsafeUpdate(1, s), Dl.unsafeUpdate(1, s);
    }
    this._tracer = Er(this.getFiberRef(vr), Wc);
  }
  pipe() {
    return R(this, arguments);
  }
  /**
   * The identity of the fiber.
   */
  id() {
    return this._fiberId;
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background. This can be called to "kick off" execution of a fiber after
   * it has been created.
   */
  resume(e) {
    this.tell(On(e));
  }
  /**
   * The status of the fiber.
   */
  get status() {
    return this.ask((e, n) => n);
  }
  /**
   * Gets the fiber runtime flags.
   */
  get runtimeFlags() {
    return this.ask((e, n) => ME(n) ? e._runtimeFlags : n.runtimeFlags);
  }
  /**
   * Returns the current `FiberScope` for the fiber.
   */
  scope() {
    return bk(this);
  }
  /**
   * Retrieves the immediate children of the fiber.
   */
  get children() {
    return this.ask((e) => Array.from(e.getChildren()));
  }
  /**
   * Gets the fiber's set of children.
   */
  getChildren() {
    return this._children === null && (this._children = /* @__PURE__ */ new Set()), this._children;
  }
  /**
   * Retrieves the interrupted cause of the fiber, which will be `Cause.empty`
   * if the fiber has not been interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getInterruptedCause() {
    return this.getFiberRef(fo);
  }
  /**
   * Retrieves the whole set of fiber refs.
   */
  fiberRefs() {
    return this.ask((e) => e.getFiberRefs());
  }
  /**
   * Returns an effect that will contain information computed from the fiber
   * state and status while running on the fiber.
   *
   * This allows the outside world to interact safely with mutable fiber state
   * without locks or immutable data.
   */
  ask(e) {
    return yt(() => {
      const n = GO(this._fiberId);
      return this.tell(ko((r, s) => {
        ng(n, x(() => e(r, s)));
      })), WO(n);
    });
  }
  /**
   * Adds a message to be processed by the fiber on the fiber.
   */
  tell(e) {
    this._queue.push(e), this._running || (this._running = !0, this.drainQueueLaterOnExecutor());
  }
  get await() {
    return Se((e) => {
      const n = (r) => e(W(r));
      return this.tell(ko((r, s) => {
        r._exitValue !== null ? n(this._exitValue) : r.addObserver(n);
      })), x(() => this.tell(ko((r, s) => {
        r.removeObserver(n);
      })));
    }, this.id());
  }
  get inheritAll() {
    return fe((e, n) => {
      const r = e.id(), s = e.getFiberRefs(), o = n.runtimeFlags, i = this.getFiberRefs(), a = lE(s, r, i);
      e.setFiberRefs(a);
      const u = e.getFiberRef(Wl), l = g(
        Oo(o, u),
        // Do not inherit WindDown or Interruption!
        sl(nr),
        sl(Hc)
      );
      return bO(l);
    });
  }
  /**
   * Tentatively observes the fiber, but returns immediately if it is not
   * already done.
   */
  get poll() {
    return x(() => _i(this._exitValue));
  }
  /**
   * Unsafely observes the fiber, but returns immediately if it is not
   * already done.
   */
  unsafePoll() {
    return this._exitValue;
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  interruptAsFork(e) {
    return x(() => this.tell(yc(Pe(e))));
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  unsafeInterruptAsFork(e) {
    this.tell(yc(Pe(e)));
  }
  /**
   * Adds an observer to the list of observers.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addObserver(e) {
    this._exitValue !== null ? e(this._exitValue) : this._observers.push(e);
  }
  /**
   * Removes the specified observer from the list of observers that will be
   * notified when the fiber exits.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeObserver(e) {
    this._observers = this._observers.filter((n) => n !== e);
  }
  /**
   * Retrieves all fiber refs of the fiber.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRefs() {
    return this.setFiberRef(Wl, this._runtimeFlags), this._fiberRefs;
  }
  /**
   * Deletes the specified fiber ref.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  unsafeDeleteFiberRef(e) {
    this._fiberRefs = Eg(this._fiberRefs, e);
  }
  /**
   * Retrieves the state of the fiber ref, or else its initial value.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRef(e) {
    return this._fiberRefs.locals.has(e) ? this._fiberRefs.locals.get(e)[0][1] : e.initial;
  }
  /**
   * Sets the fiber ref to the specified value.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRef(e, n) {
    this._fiberRefs = sa(this._fiberRefs, {
      fiberId: this._fiberId,
      fiberRef: e,
      value: n
    }), this.refreshRefCache();
  }
  refreshRefCache() {
    this._tracer = Er(this.getFiberRef(vr), Wc), this._supervisor = this.getFiberRef(zl), this._scheduler = this.getFiberRef(ia);
  }
  /**
   * Wholesale replaces all fiber refs of this fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRefs(e) {
    this._fiberRefs = e, this.refreshRefCache();
  }
  /**
   * Adds a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addChild(e) {
    this.getChildren().add(e);
  }
  /**
   * Removes a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeChild(e) {
    this.getChildren().delete(e);
  }
  /**
   * On the current thread, executes all messages in the fiber's inbox. This
   * method may return before all work is done, in the event the fiber executes
   * an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueOnCurrentThread() {
    let e = !0;
    for (; e; ) {
      let n = dr;
      const r = globalThis[Ge];
      globalThis[Ge] = this;
      try {
        for (; n === dr; )
          n = this._queue.length === 0 ? lT : this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]);
      } finally {
        this._running = !1, globalThis[Ge] = r;
      }
      this._queue.length > 0 && !this._running ? (this._running = !0, n === Jl ? (this.drainQueueLaterOnExecutor(), e = !1) : e = !0) : e = !1;
    }
  }
  /**
   * Schedules the execution of all messages in the fiber's inbox.
   *
   * This method will return immediately after the scheduling
   * operation is completed, but potentially before such messages have been
   * executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueLaterOnExecutor() {
    this._scheduler.scheduleTask(this.run, this.getFiberRef(Wi));
  }
  /**
   * Drains the fiber's message queue while the fiber is actively running,
   * returning the next effect to execute, which may be the input effect if no
   * additional effect needs to be executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueWhileRunning(e, n) {
    let r = n;
    for (; this._queue.length > 0; ) {
      const s = this._queue.splice(0, 1)[0];
      r = hT[s._tag](this, e, r, s);
    }
    return r;
  }
  /**
   * Determines if the fiber is interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  isInterrupted() {
    return !M0(this.getFiberRef(fo));
  }
  /**
   * Adds an interruptor to the set of interruptors that are interrupting this
   * fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addInterruptedCause(e) {
    const n = this.getFiberRef(fo);
    this.setFiberRef(fo, Gt(n, e));
  }
  /**
   * Processes a new incoming interrupt signal.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  processNewInterruptSignal(e) {
    this.addInterruptedCause(e), this.sendInterruptSignalToAllChildren();
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  sendInterruptSignalToAllChildren() {
    if (this._children === null || this._children.size === 0)
      return !1;
    let e = !1;
    for (const n of this._children)
      n.tell(yc(Pe(this.id()))), e = !0;
    return e;
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  interruptAllChildren() {
    if (this.sendInterruptSignalToAllChildren()) {
      const e = this._children.values();
      this._children = null;
      let n = !1;
      return au({
        while: () => !n,
        body: () => {
          const s = e.next();
          return s.done ? x(() => {
            n = !0;
          }) : ro(s.value.await);
        },
        step: () => {
        }
      });
    }
    return null;
  }
  reportExitValue(e) {
    if (nl(this._runtimeFlags)) {
      const n = this.getFiberRef(Yc), r = this.id().startTimeMillis, s = Date.now();
      switch (uT.unsafeUpdate(s - r, n), Dl.unsafeUpdate(-1, n), e._tag) {
        case ie: {
          cT.unsafeUpdate(1, n);
          break;
        }
        case oe: {
          aT.unsafeUpdate(1, n);
          break;
        }
      }
    }
    if (e._tag === "Failure") {
      const n = this.getFiberRef(LO);
      !nu(e.cause) && n._tag === "Some" && this.log("Fiber terminated with an unhandled error", e.cause, n);
    }
  }
  setExitValue(e) {
    this._exitValue = e, this.reportExitValue(e);
    for (let n = this._observers.length - 1; n >= 0; n--)
      this._observers[n](e);
  }
  getLoggers() {
    return this.getFiberRef(bT);
  }
  log(e, n, r) {
    const s = Z(r) ? r.value : this.getFiberRef(xO), o = this.getFiberRef(pT);
    if (UE(o, s))
      return;
    const i = this.getFiberRef(PO), a = this.getFiberRef(AO), u = this.getLoggers(), l = this.getFiberRefs();
    if (Qd(u) > 0) {
      const f = Er(this.getFiberRef(vr), pu), h = new Date(f.unsafeCurrentTimeMillis());
      for (const p of u)
        p.log({
          fiberId: this.id(),
          logLevel: s,
          message: e,
          cause: n,
          context: l,
          spans: i,
          annotations: a,
          date: h
        });
    }
  }
  /**
   * Evaluates a single message on the current thread, while the fiber is
   * suspended. This method should only be called while evaluation of the
   * fiber's effect is suspended due to an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateMessageWhileSuspended(e) {
    switch (e._tag) {
      case wu:
        return Jl;
      case bu:
        return this.processNewInterruptSignal(e.cause), this._asyncInterruptor !== null && (this._asyncInterruptor(Y(e.cause)), this._asyncInterruptor = null), dr;
      case Su:
        return this._asyncInterruptor = null, this._asyncBlockingOn = null, this.evaluateEffect(e.effect), dr;
      case _u:
        return e.onFiber(this, this._exitValue !== null ? RE : NE(this._runtimeFlags, this._asyncBlockingOn)), dr;
      default:
        return pr(e);
    }
  }
  /**
   * Evaluates an effect until completion, potentially asynchronously.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateEffect(e) {
    this._supervisor.onResume(this);
    try {
      let n = xe(this._runtimeFlags) && this.isInterrupted() ? Y(this.getInterruptedCause()) : e;
      for (; n !== null; ) {
        const r = n, s = this.runLoop(r);
        if (s === Ae) {
          const o = Ee.currentOp;
          Ee.currentOp = null, o._op === bo ? u0(this._runtimeFlags) ? (this.tell(pk()), this.tell(On(Qe)), n = null) : n = Qe : o._op === Or && (n = null);
        } else {
          this._runtimeFlags = g(this._runtimeFlags, l0(Hc));
          const o = this.interruptAllChildren();
          o !== null ? n = A(o, () => s) : (this._queue.length === 0 ? this.setExitValue(s) : this.tell(On(s)), n = null);
        }
      }
    } finally {
      this._supervisor.onSuspend(this);
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on the current
   * thread. This can be called to "kick off" execution of a fiber after it has
   * been created, in hopes that the effect can be executed synchronously.
   *
   * This is not the normal way of starting a fiber, but it is useful when the
   * express goal of executing the fiber is to synchronously produce its exit.
   */
  start(e) {
    if (this._running)
      this.tell(On(e));
    else {
      this._running = !0;
      const n = globalThis[Ge];
      globalThis[Ge] = this;
      try {
        this.evaluateEffect(e);
      } finally {
        this._running = !1, globalThis[Ge] = n, this._queue.length > 0 && this.drainQueueLaterOnExecutor();
      }
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background, and on the correct thread pool. This can be called to "kick
   * off" execution of a fiber after it has been created, in hopes that the
   * effect can be executed synchronously.
   */
  startFork(e) {
    this.tell(On(e));
  }
  /**
   * Takes the current runtime flags, patches them to return the new runtime
   * flags, and then makes any changes necessary to fiber state based on the
   * specified patch.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  patchRuntimeFlags(e, n) {
    const r = Io(e, n);
    return globalThis[Ge] = this, this._runtimeFlags = r, r;
  }
  /**
   * Initiates an asynchronous operation, by building a callback that will
   * resume execution, and then feeding that callback to the registration
   * function, handling error cases and repeated resumptions appropriately.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  initiateAsync(e, n) {
    let r = !1;
    const s = (o) => {
      r || (r = !0, this.tell(On(o)));
    };
    xe(e) && (this._asyncInterruptor = s);
    try {
      n(s);
    } catch (o) {
      s(Wt(ce(o)));
    }
  }
  pushStack(e) {
    this._stack.push(e), e._op === "OnStep" && this._steps.push({
      refs: this.getFiberRefs(),
      flags: this._runtimeFlags
    });
  }
  popStack() {
    const e = this._stack.pop();
    if (e)
      return e._op === "OnStep" && this._steps.pop(), e;
  }
  getNextSuccessCont() {
    let e = this.popStack();
    for (; e; ) {
      if (e._op !== oc)
        return e;
      e = this.popStack();
    }
  }
  getNextFailCont() {
    let e = this.popStack();
    for (; e; ) {
      if (e._op !== xo && e._op !== Co)
        return e;
      e = this.popStack();
    }
  }
  [($h = Sk, Th = Ik, by)](e) {
    return At(Vi(Je), (n) => G_(n, e));
  }
  Left(e) {
    return bt(e.left);
  }
  None(e) {
    return bt(new tg());
  }
  Right(e) {
    return _t(e.right);
  }
  Some(e) {
    return _t(e.value);
  }
  Micro(e) {
    return aO((n) => {
      const r = QE().pipe(ZE(nk, this.getFiberRef(Je)));
      let s = n;
      return e[Mg](r, (o) => {
        if (o._tag === "Right")
          return s(_t(o.right));
        switch (o.left._tag) {
          case "Interrupt":
            return s(Y(Pe(Vn)));
          case "Fail":
            return s(bt(o.left.error));
          case "Die":
            return s(dl(o.left.defect));
        }
      }), Se((o) => {
        s = (i) => {
          o(we);
        }, XE(r, xg).abort();
      });
    });
  }
  [Uh](e) {
    const n = Ft(() => e.effect_instruction_i0()), r = this.getNextSuccessCont();
    return r !== void 0 ? (r._op in po || pr(r), po[r._op](this, r, n)) : (Ee.currentOp = _t(n), Ae);
  }
  [ie](e) {
    const n = e, r = this.getNextSuccessCont();
    return r !== void 0 ? (r._op in po || pr(r), po[r._op](this, r, n.effect_instruction_i0)) : (Ee.currentOp = n, Ae);
  }
  [oe](e) {
    const n = e.effect_instruction_i0, r = this.getNextFailCont();
    if (r !== void 0)
      switch (r._op) {
        case oc:
        case Po:
          return xe(this._runtimeFlags) && this.isInterrupted() ? Y(ol(n)) : Ft(() => r.effect_instruction_i1(n));
        case "OnStep":
          return xe(this._runtimeFlags) && this.isInterrupted() ? Y(ol(n)) : _t(Y(n));
        case Fa:
          return this.patchRuntimeFlags(this._runtimeFlags, r.patch), xe(this._runtimeFlags) && this.isInterrupted() ? Y(Gt(n, this.getInterruptedCause())) : Y(n);
        default:
          pr(r);
      }
    else
      return Ee.currentOp = Y(n), Ae;
  }
  [Dh](e) {
    return Ft(() => e.effect_instruction_i0(this, Ng(this._runtimeFlags)));
  }
  Blocked(e) {
    const n = this.getFiberRefs(), r = this._runtimeFlags;
    if (this._steps.length > 0) {
      const s = [], o = this._steps[this._steps.length - 1];
      let i = this.popStack();
      for (; i && i._op !== "OnStep"; )
        s.push(i), i = this.popStack();
      this.setFiberRefs(o.refs), this._runtimeFlags = o.flags;
      const a = _E(o.refs, n), u = Oo(o.flags, r);
      return _t(Ap(e.effect_instruction_i0, fe((l) => {
        for (; s.length > 0; )
          l.pushStack(s.pop());
        return l.setFiberRefs(SE(l.id(), l.getFiberRefs())(a)), l._runtimeFlags = Io(u)(l._runtimeFlags), e.effect_instruction_i1;
      })));
    }
    return Bi((s) => A(im(oO(e.effect_instruction_i0)), () => s(e.effect_instruction_i1)));
  }
  RunBlocked(e) {
    return dT(e.effect_instruction_i0);
  }
  [Gs](e) {
    const n = e.effect_instruction_i0, r = this._runtimeFlags, s = Io(r, n);
    if (xe(s) && this.isInterrupted())
      return Y(this.getInterruptedCause());
    if (this.patchRuntimeFlags(this._runtimeFlags, n), e.effect_instruction_i1) {
      const o = Oo(s, r);
      return this.pushStack(new iO(o, e)), Ft(() => e.effect_instruction_i1(r));
    } else
      return Qe;
  }
  [xo](e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  OnStep(e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  [oc](e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  [Po](e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  [Or](e) {
    return this._asyncBlockingOn = e.effect_instruction_i1, this.initiateAsync(this._runtimeFlags, e.effect_instruction_i0), Ee.currentOp = e, Ae;
  }
  [bo](e) {
    return this.isYielding = !1, Ee.currentOp = e, Ae;
  }
  [Co](e) {
    const n = e.effect_instruction_i0, r = e.effect_instruction_i1;
    return n() ? (this.pushStack(e), r()) : Qe;
  }
  [Ca](e) {
    return Ft(() => e.commit());
  }
  /**
   * The main run-loop for evaluating effects.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  runLoop(e) {
    let n = e;
    for (this.currentOpCount = 0; ; ) {
      if (this._runtimeFlags & a0 && this._supervisor.onEffect(this, n), this._queue.length > 0 && (n = this.drainQueueWhileRunning(this._runtimeFlags, n)), !this.isYielding) {
        this.currentOpCount += 1;
        const r = this._scheduler.shouldYield(this);
        if (r !== !1) {
          this.isYielding = !0, this.currentOpCount = 0;
          const s = n;
          n = A(uu({
            priority: r
          }), () => s);
        }
      }
      try {
        if ((!("_op" in n) || !(n._op in this)) && pr(n), n = this._tracer.context(() => No() !== n[Nl]._V ? uO(`Cannot execute an Effect versioned ${n[Nl]._V} with a Runtime of version ${No()}`) : this[n._op](n), this), n === Ae) {
          const r = Ee.currentOp;
          return r._op === bo || r._op === Or ? Ae : (Ee.currentOp = null, r._op === ie || r._op === oe ? r : Y(ce(r)));
        }
      } catch (r) {
        sO(r) ? n = Y(r.cause) : JO(r) ? n = Y(Gt(ce(r), Pe(Vn))) : n = dl(r);
      }
    }
  }
}
const pT = /* @__PURE__ */ V("effect/FiberRef/currentMinimumLogLevel", () => Dt(DE("Info"))), gT = (t) => Iu((e) => {
  const n = dE(e.context, vr);
  Er(n, wg).unsafe.log(t.log(e));
}), mT = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/Logger/defaultLogger"), () => gT($k)), yT = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/Logger/tracerLogger"), () => Iu(({
  annotations: t,
  cause: e,
  context: n,
  fiberId: r,
  logLevel: s,
  message: o
}) => {
  const i = zs(ra(n, Je), Qs(Mp)), a = sd(ra(n, vr), (l) => Er(l, pu));
  if (i._tag === "None" || i.value._tag === "ExternalSpan" || a._tag === "None")
    return;
  const u = Object.fromEntries(cp(t, Rn));
  u["effect.fiberId"] = YS(r), u["effect.logLevel"] = s.label, e !== null && e._tag !== "Empty" && (u["effect.cause"] = ou(e)), i.value.event(String(o), a.value.unsafeCurrentTimeNanos(), u);
})), bT = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLoggers"), () => RO(Qa(mT, yT))), _T = /* @__PURE__ */ d((t) => ny(t[0]), (t, e, n) => fe((r) => {
  const s = (n == null ? void 0 : n.batching) === !0 || (n == null ? void 0 : n.batching) === "inherit" && r.getFiberRef(jO);
  return n != null && n.discard ? Fl(n.concurrency, () => In(ta)((o) => s ? sn(t, (i, a) => o(e(i, a)), !0, !1, 1) : Di(t, (i, a) => o(e(i, a)))), () => In(ea)((o) => sn(t, (i, a) => o(e(i, a)), s, !1)), (o) => In(na(o))((i) => sn(t, (a, u) => i(e(a, u)), s, !1, o))) : Fl(n == null ? void 0 : n.concurrency, () => In(ta)((o) => s ? Bl(t, 1, (i, a) => o(e(i, a)), !0) : je(t, (i, a) => o(e(i, a)))), () => In(ea)((o) => ST(t, (i, a) => o(e(i, a)), s)), (o) => In(na(o))((i) => Bl(t, o, (a, u) => i(e(a, u)), s)));
})), ST = (t, e, n) => yt(() => {
  const r = ct(t), s = new Array(r.length);
  return Hi(sn(r, (i, a) => A(e(i, a), (u) => x(() => s[a] = u)), n, !1), W(s));
}), sn = (t, e, n, r, s) => Bi((o) => mO((i) => fe((a) => {
  let u = Array.from(t).reverse(), l = u.length;
  if (l === 0)
    return we;
  let f = 0, h = !1;
  const p = s ? Math.min(u.length, s) : u.length, m = /* @__PURE__ */ new Set(), y = new Array(), S = () => m.forEach(($) => {
    $._scheduler.scheduleTask(() => {
      $.unsafeInterruptAsFork(a.id());
    }, 0);
  }), _ = new Array(), O = new Array(), N = new Array(), I = () => {
    const $ = y.filter(({
      exit: J
    }) => J._tag === "Failure").sort((J, H) => J.index < H.index ? -1 : J.index === H.index ? 0 : 1).map(({
      exit: J
    }) => J);
    return $.length === 0 && $.push(Qe), $;
  }, L = ($, J = !1) => {
    const H = Bp(i($)), K = OT(H, a, a._runtimeFlags, Ou);
    return a._scheduler.scheduleTask(() => {
      J && K.unsafeInterruptAsFork(a.id()), K.resume(H);
    }, 0), K;
  }, q = () => {
    r || (l -= u.length, u = []), h = !0, S();
  }, M = n ? hO : jp, T = L(Se(($) => {
    const J = (K, G) => {
      K._op === "Blocked" ? N.push(K) : (y.push({
        index: G,
        exit: K
      }), K._op === "Failure" && !h && q());
    }, H = () => {
      if (u.length > 0) {
        const K = u.pop();
        let G = f++;
        const mt = () => {
          const dt = u.pop();
          return G = f++, A(uu(), () => A(M(o(e(dt, G))), Rt));
        }, Rt = (dt) => u.length > 0 && (J(dt, G), u.length > 0) ? mt() : W(dt), zt = A(M(o(e(K, G))), Rt), Nt = L(zt);
        _.push(Nt), m.add(Nt), h && Nt._scheduler.scheduleTask(() => {
          Nt.unsafeInterruptAsFork(a.id());
        }, 0), Nt.addObserver((dt) => {
          let Yt;
          if (dt._op === "Failure" ? Yt = dt : Yt = dt.effect_instruction_i0, O.push(Nt), m.delete(Nt), J(Yt, G), y.length === l)
            $(W(St(fc(I(), {
              parallel: !0
            }), () => Qe)));
          else if (N.length + y.length === l) {
            const Ve = N.map((Me) => Me.effect_instruction_i0).reduce(Op);
            $(W(Ap(Ve, sn([St(fc(I(), {
              parallel: !0
            }), () => Qe), ...N.map((Me) => Me.effect_instruction_i1)], (Me) => Me, n, !0, s))));
          } else
            H();
        });
      }
    };
    for (let K = 0; K < p; K++)
      H();
  }));
  return ro(cu(qp(o(Ek(T))), eg({
    onFailure: () => {
      q();
      const $ = N.length + 1, J = Math.min(typeof s == "number" ? s : N.length, N.length), H = Array.from(N);
      return Se((K) => {
        const G = [];
        let mt = 0, Rt = 0;
        const zt = (dt, Yt) => (Ve) => {
          G[dt] = Ve, mt++, mt === $ && K(rd(fc(G, {
            parallel: !0
          }))), H.length > 0 && Yt && Nt();
        }, Nt = () => {
          L(H.pop(), !0).addObserver(zt(Rt, !0)), Rt++;
        };
        T.addObserver(zt(Rt, !1)), Rt++;
        for (let dt = 0; dt < J; dt++)
          Nt();
      });
    },
    onSuccess: () => je(O, ($) => $.inheritAll)
  })));
}))), Bl = (t, e, n, r) => yt(() => {
  const s = ct(t), o = new Array(s.length);
  return Hi(sn(s, (a, u) => At(n(a, u), (l) => o[u] = l), r, !1, e), W(o));
}), im = (t) => IT(t, Ou), wT = (t, e, n, r = null) => {
  const s = cm(t, e, n, r);
  return s.resume(t), s;
}, OT = (t, e, n, r = null) => cm(t, e, n, r), cm = (t, e, n, r = null) => {
  const s = rp(), o = e.getFiberRefs(), i = fE(o, s), a = new om(s, i, n), u = gu(i, Je), l = a._supervisor;
  return l.onStart(u, t, E(e), a), a.addObserver((h) => l.onEnd(h, a)), (r !== null ? r : g(e.getFiberRef(Qc), St(() => e.scope()))).add(n, a), a;
}, IT = (t, e) => fe((n, r) => W(wT(t, n, r.runtimeFlags, e))), Hl = (t) => so((e) => de(Qs(e, ao), {
  onNone: () => t,
  onSome: (n) => {
    switch (n.strategy._tag) {
      case "Parallel":
        return t;
      case "Sequential":
      case "ParallelN":
        return A(zi(n, ea), (r) => Tu(t, r));
    }
  }
})), Vl = (t) => (e) => so((n) => de(Qs(n, ao), {
  onNone: () => e,
  onSome: (r) => r.strategy._tag === "ParallelN" && r.strategy.parallelism === t ? e : A(zi(r, na(t)), (s) => Tu(e, s))
})), In = (t) => (e) => so((n) => de(Qs(n, ao), {
  onNone: () => e(rt),
  onSome: (r) => {
    const s = t._tag === "Parallel" ? Hl : t._tag === "Sequential" ? Gl : Vl(t.parallelism);
    switch (r.strategy._tag) {
      case "Parallel":
        return s(e(Hl));
      case "Sequential":
        return s(e(Gl));
      case "ParallelN":
        return s(e(Vl(r.strategy.parallelism)));
    }
  }
})), Gl = (t) => so((e) => de(Qs(e, ao), {
  onNone: () => t,
  onSome: (n) => {
    switch (n.strategy._tag) {
      case "Sequential":
        return t;
      case "Parallel":
      case "ParallelN":
        return A(zi(n, ta), (r) => Tu(t, r));
    }
  }
})), ao = /* @__PURE__ */ yn("effect/Scope"), Tu = /* @__PURE__ */ d(2, (t, e) => ZO(
  t,
  // @ts-expect-error
  W_(V_(ao, e))
)), ET = (t) => ar(t, {
  differ: oT,
  fork: Tr
}), Wl = /* @__PURE__ */ MO(f0), zl = /* @__PURE__ */ ET(Zi), kT = (t, e, n) => Kp((r) => A(A(im(Up(t)), (s) => Se((o) => {
  const i = e.map((l) => l.listeners.count), a = () => {
    i.every((l) => l === 0) && e.every((l) => l.result.state.current._tag === "Pending" ? !0 : !!(l.result.state.current._tag === "Done" && hu(l.result.state.current.effect) && l.result.state.current.effect._tag === "Failure" && A0(l.result.state.current.effect.cause))) && (u.forEach((l) => l()), n == null || n(), o(_O(s)));
  };
  s.addObserver((l) => {
    u.forEach((f) => f()), o(l);
  });
  const u = e.map((l, f) => {
    const h = (p) => {
      i[f] = p, a();
    };
    return l.listeners.addObserver(h), () => l.listeners.removeObserver(h);
  });
  return a(), x(() => {
    u.forEach((l) => l());
  });
})), () => yt(() => {
  const s = e.flatMap((o) => o.state.completed ? [] : [o]);
  return Di(s, (o) => Qv(o.request, BO(r)));
}))), vT = qO, TT = zi, $T = (t) => (e, n) => {
  const r = rp(), s = [[Je, [[r, t.context]]]];
  n != null && n.scheduler && s.push([ia, [[r, n.scheduler]]]);
  let o = pE(t.fiberRefs, {
    entries: s,
    forkAs: r
  });
  n != null && n.updateRefs && (o = n.updateRefs(o, r));
  const i = new om(r, o, t.runtimeFlags);
  let a = e;
  n != null && n.scope && (a = A(TT(n.scope, Og), (l) => Hi(KO(l, Kp((f) => C(f, i.id()) ? we : Gp(i, f))), cu(e, (f) => vT(l, f)))));
  const u = i._supervisor;
  return u !== Zi && (u.onStart(t.context, a, w(), i), i.addObserver((l) => u.onEnd(l, i))), Ou.add(t.runtimeFlags, i), (n == null ? void 0 : n.immediate) === !1 ? i.resume(a) : i.start(a), i;
}, RT = (t) => (e) => {
  const n = CT(t)(e);
  if (n._tag === "Failure")
    throw xT(n.effect_instruction_i0);
  return n.effect_instruction_i0;
};
class NT extends Error {
  constructor(n) {
    super(`Fiber #${n.id().id} cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work`);
    c(this, "fiber");
    c(this, "_tag", "AsyncFiberException");
    this.fiber = n, this.name = this._tag, this.stack = this.message;
  }
}
const MT = (t) => {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const n = new NT(t);
  return Error.stackTraceLimit = e, n;
}, bc = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure"), _c = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure/Cause");
var Rh, Nh;
class AT extends Error {
  constructor(n) {
    super();
    c(this, Nh);
    c(this, Rh);
    this[bc] = bc, this[_c] = n;
    const r = Rp(n);
    if (r.length > 0) {
      const s = r[0];
      this.name = s.name, this.message = s.message, this.stack = s.stack;
    }
    this.name = `(FiberFailure) ${this.name}`, (this.message === void 0 || this.message.length === 0) && (this.message = "An error has occurred");
  }
  toJSON() {
    return {
      _id: "FiberFailure",
      cause: this[_c].toJSON()
    };
  }
  toString() {
    return "(FiberFailure) " + (this.stack ?? this.message);
  }
  [(Nh = bc, Rh = _c, z)]() {
    return this.toString();
  }
}
const xT = (t) => {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const n = new AT(t);
  return Error.stackTraceLimit = e, n;
}, PT = (t) => {
  const e = t;
  switch (e._op) {
    case "Failure":
    case "Success":
      return e;
    case "Left":
      return bl(e.left);
    case "Right":
      return _t(e.right);
    case "Some":
      return _t(e.value);
    case "None":
      return bl(tg());
  }
}, CT = (t) => (e) => {
  const n = PT(e);
  if (n)
    return n;
  const r = new ck(), s = $T(t)(e, {
    scheduler: r
  });
  r.flush();
  const o = s.unsafePoll();
  if (o)
    return o;
  throw MT(s);
};
class FT {
  constructor(e, n, r) {
    c(this, "context");
    c(this, "runtimeFlags");
    c(this, "fiberRefs");
    this.context = e, this.runtimeFlags = n, this.fiberRefs = r;
  }
  pipe() {
    return R(this, arguments);
  }
}
const jT = (t) => new FT(t.context, t.runtimeFlags, t.fiberRefs), LT = /* @__PURE__ */ Sp(nr, bp, yp), KT = /* @__PURE__ */ jT({
  context: /* @__PURE__ */ Ti(),
  runtimeFlags: LT,
  fiberRefs: /* @__PURE__ */ gE()
}), qT = /* @__PURE__ */ RT(KT), UT = iu, To = _T, Oe = W, go = yt, Jt = we, am = zc, DT = dk, ne = At, JT = Ji, ze = Go, Mt = A, BT = Ui, HT = pO, um = qT, Lt = (t, e = []) => ({
  value: t,
  forest: e
}), VT = (t) => ne(vn(t), (e) => WT(e)), GT = (t) => um(VT(t)), WT = (t) => t.value + lm(`
`, t.forest), lm = (t, e) => {
  let n = "";
  const r = e.length;
  let s;
  for (let o = 0; o < r; o++) {
    s = e[o];
    const i = o === r - 1;
    n += t + (i ? "└" : "├") + "─ " + s.value, n += lm(t + (r > 1 && !i ? "│  " : "   "), s.forest);
  }
  return n;
}, zT = (t) => {
  switch (t) {
    case "Encoded":
      return "Encoded side transformation failure";
    case "Transformation":
      return "Transformation process failure";
    case "Type":
      return "Type side transformation failure";
  }
}, YT = (t) => {
  switch (t) {
    case "From":
      return "From side refinement failure";
    case "Predicate":
      return "Predicate refinement failure";
  }
}, fm = (t) => "ast" in t ? E(t.ast) : w(), QT = (t) => fm(t).pipe(zs(kb), Mt((e) => {
  const n = e(t);
  return ae(n) ? Oe({
    message: n,
    override: !1
  }) : UT(n) ? ne(n, (r) => ({
    message: r,
    override: !1
  })) : ae(n.message) ? Oe({
    message: n.message,
    override: n.override
  }) : ne(n.message, (r) => ({
    message: r,
    override: n.override
  }));
})), $u = (t) => (e) => e._tag === t, XT = /* @__PURE__ */ $u("Composite"), Yl = /* @__PURE__ */ $u("Refinement"), Ql = /* @__PURE__ */ $u("Transformation"), Ru = (t) => QT(t).pipe(Mt((e) => !e.override && (XT(t) || Yl(t) && t.kind === "From" || Ql(t) && t.kind !== "Transformation") ? Ql(t) || Yl(t) ? Ru(t.issue) : w() : Oe(e.message))), hm = (t) => fm(t).pipe(zs(Mb), Uy((e) => _i(e(t)))), ZT = (t) => Ru(t).pipe(HT(() => hm(t)), am(() => Oe(t.message ?? `Expected ${String(t.ast)}, actual ${qe(t.actual)}`))), mo = (t) => St(hm(t), () => String(t.ast)), t1 = (t) => t.message ?? "is forbidden", e1 = (t) => t.message ?? "is unexpected", n1 = (t) => vb(t.ast).pipe(Mt((e) => {
  const n = e();
  return ae(n) ? Oe(n) : n;
}), am(() => Oe(t.message ?? "is missing"))), Sc = (t, e) => BT(Ru(t), {
  onFailure: e,
  onSuccess: (n) => Oe(Lt(n))
}), vn = (t) => {
  switch (t._tag) {
    case "Type":
      return ne(ZT(t), Lt);
    case "Forbidden":
      return Oe(Lt(mo(t), [Lt(t1(t))]));
    case "Unexpected":
      return Oe(Lt(e1(t)));
    case "Missing":
      return ne(n1(t), Lt);
    case "Transformation":
      return Sc(t, () => ne(vn(t.issue), (e) => Lt(mo(t), [Lt(zT(t.kind), [e])])));
    case "Refinement":
      return Sc(t, () => ne(vn(t.issue), (e) => Lt(mo(t), [Lt(YT(t.kind), [e])])));
    case "Pointer":
      return ne(vn(t.issue), (e) => Lt(pb(t.path), [e]));
    case "Composite": {
      const e = mo(t);
      return Sc(t, () => pd(t.issues) ? ne(To(t.issues, vn), (n) => Lt(e, n)) : ne(vn(t.issues), (n) => Lt(e, [n])));
    }
  }
}, r1 = /* @__PURE__ */ function() {
  return class extends fu {
    constructor(e) {
      super(), e && Object.assign(this, e);
    }
  };
}(), s1 = (t) => {
  class e extends r1 {
    constructor() {
      super(...arguments);
      c(this, "_tag", t);
    }
  }
  return e.prototype.name = t, e;
};
class wt {
  constructor(e, n, r) {
    c(this, "path");
    c(this, "actual");
    c(this, "issue");
    /**
     * @since 0.68.0
     */
    c(this, "_tag", "Pointer");
    this.path = e, this.actual = n, this.issue = r;
  }
}
class Xl {
  constructor(e, n) {
    c(this, "actual");
    c(this, "message");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Unexpected");
    this.actual = e, this.message = n;
  }
}
class gr {
  constructor(e, n) {
    c(this, "ast");
    c(this, "message");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Missing");
    /**
     * @since 0.68.0
     */
    c(this, "actual");
    this.ast = e, this.message = n;
  }
}
class ut {
  constructor(e, n, r, s) {
    c(this, "ast");
    c(this, "actual");
    c(this, "issues");
    c(this, "output");
    /**
     * @since 0.68.0
     */
    c(this, "_tag", "Composite");
    this.ast = e, this.actual = n, this.issues = r, this.output = s;
  }
}
class Zl {
  constructor(e, n, r, s) {
    c(this, "ast");
    c(this, "actual");
    c(this, "kind");
    c(this, "issue");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Refinement");
    this.ast = e, this.actual = n, this.kind = r, this.issue = s;
  }
}
class wc {
  constructor(e, n, r, s) {
    c(this, "ast");
    c(this, "actual");
    c(this, "kind");
    c(this, "issue");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Transformation");
    this.ast = e, this.actual = n, this.kind = r, this.issue = s;
  }
}
class vt {
  constructor(e, n, r) {
    c(this, "ast");
    c(this, "actual");
    c(this, "message");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Type");
    this.ast = e, this.actual = n, this.message = r;
  }
}
class o1 {
  constructor(e, n, r) {
    c(this, "ast");
    c(this, "actual");
    c(this, "message");
    /**
     * @since 0.67.0
     */
    c(this, "_tag", "Forbidden");
    this.ast = e, this.actual = n, this.message = r;
  }
}
const tf = /* @__PURE__ */ Symbol.for("@effect/schema/ParseErrorTypeId");
var Mh;
class i1 extends s1("ParseError") {
  constructor() {
    super(...arguments);
    /**
     * @since 0.68.0
     */
    c(this, Mh, tf);
  }
  get message() {
    return this.toString();
  }
  /**
   * @since 0.67.0
   */
  toString() {
    return GT(this.issue);
  }
  /**
   * @since 0.67.0
   */
  toJSON() {
    return {
      _id: "ParseError",
      message: this.toString()
    };
  }
  /**
   * @since 0.67.0
   */
  [(Mh = tf, z)]() {
    return this.toJSON();
  }
}
const dm = (t) => new i1({
  issue: t
}), he = ot, Nu = B, ei = Ay, Oc = /* @__PURE__ */ d(2, (t, e) => {
  const n = t;
  return n._tag === "Left" ? n : n._tag === "Right" ? e(n.right) : Mt(t, e);
}), c1 = /* @__PURE__ */ d(2, (t, e) => {
  const n = t;
  return n._tag === "Left" ? n : n._tag === "Right" ? ot(e(n.right)) : ne(t, e);
}), _r = /* @__PURE__ */ d(2, (t, e) => {
  const n = t;
  return n._tag === "Left" ? B(e(n.left)) : n._tag === "Right" ? n : JT(t, e);
}), ke = (t) => {
  const e = t;
  if (e._tag === "Left" || e._tag === "Right")
    return e;
}, Mu = (t, e) => e === void 0 || Le(e) ? t : t === void 0 ? e : {
  ...t,
  ...e
}, a1 = (t, e, n) => {
  const r = Kt(t);
  return (s, o) => r(s, Mu(n, o));
}, u1 = (t, e, n) => {
  const r = a1(t, e, n);
  return (s, o) => Cy(r(s, o), dm);
}, l1 = (t, e, n) => {
  const r = Kt(t);
  return (s, o) => r(s, {
    ...Mu(n, o),
    isEffectAllowed: !0
  });
}, f1 = (t, e) => l1(t.ast, !0, e), pm = (t, e) => u1(Ct(t.ast), !0, e), h1 = /* @__PURE__ */ V(/* @__PURE__ */ Symbol.for("@effect/schema/Parser/decodeMemoMap"), () => /* @__PURE__ */ new WeakMap()), Kt = (t, e) => {
  const n = h1, r = n.get(t);
  if (r)
    return r;
  const s = d1(t), o = Ab(t), i = Z(o) ? (a, u) => s(a, Mu(u, o.value)) : s;
  return n.set(t, i), i;
}, Ic = (t) => ve(Rb(t)), Ec = (t) => ve(Nb(t)), d1 = (t, e) => {
  switch (t._tag) {
    case "Refinement": {
      const n = Kt(t.from);
      return (r, s) => kc(Oc(_r(n(r, s), (o) => new Zl(t, r, "From", o)), (o) => de(t.filter(o, s ?? cc, t), {
        onNone: () => ot(o),
        onSome: (i) => B(new Zl(t, r, "Predicate", i))
      })), t, r, s);
    }
    case "Transformation": {
      const n = m1(t.transformation), r = Kt(t.from), s = Kt(t.to);
      return (o, i) => kc(Oc(_r(r(o, i), (a) => new wc(t, o, "Encoded", a)), (a) => Oc(_r(n(a, i ?? cc, t), (u) => new wc(t, o, "Transformation", u)), (u) => _r(s(u, i), (l) => new wc(t, o, "Type", l)))), t, o, i);
    }
    case "Declaration": {
      const n = t.decodeUnknown(...t.typeParameters);
      return (r, s) => kc(n(r, s ?? cc, t), t, r, s);
    }
    case "Literal":
      return Pt(t, (n) => n === t.literal);
    case "UniqueSymbol":
      return Pt(t, (n) => n === t.symbol);
    case "UndefinedKeyword":
      return Pt(t, Ku);
    case "VoidKeyword":
      return Pt(t, Ku);
    case "NeverKeyword":
      return Pt(t, ty);
    case "UnknownKeyword":
    case "AnyKeyword":
      return ot;
    case "StringKeyword":
      return Pt(t, ae);
    case "NumberKeyword":
      return Pt(t, Le);
    case "BooleanKeyword":
      return Pt(t, di);
    case "BigIntKeyword":
      return Pt(t, pi);
    case "SymbolKeyword":
      return Pt(t, Nc);
    case "ObjectKeyword":
      return Pt(t, on);
    case "Enums":
      return Pt(t, (n) => t.enums.some(([r, s]) => s === n));
    case "TemplateLiteral": {
      const n = b_(t);
      return Pt(t, (r) => ae(r) && n.test(r));
    }
    case "TupleType": {
      const n = t.elements.map((l) => Kt(l.type)), r = t.rest.map((l) => Kt(l.type));
      let s = t.elements.filter((l) => !l.isOptional);
      t.rest.length > 0 && (s = s.concat(t.rest.slice(1)));
      const o = s.length, i = t.elements.length > 0 ? t.elements.map((l, f) => f).join(" | ") : "never", a = Ic(t), u = Ec(t);
      return (l, f) => {
        if (!Mc(l))
          return B(new vt(t, l));
        const h = (f == null ? void 0 : f.errors) === "all", p = [];
        let m = 0;
        const y = [], S = l.length;
        for (let I = S; I <= o - 1; I++) {
          const L = new wt(I, l, new gr(s[I - S]));
          if (h) {
            p.push([m++, L]);
            continue;
          } else
            return B(new ut(t, l, L, y));
        }
        if (t.rest.length === 0)
          for (let I = t.elements.length; I <= S - 1; I++) {
            const L = new wt(I, l, new Xl(l[I], `is unexpected, expected: ${i}`));
            if (h) {
              p.push([m++, L]);
              continue;
            } else
              return B(new ut(t, l, L, y));
          }
        let _ = 0, O;
        for (; _ < n.length; _++)
          if (S < _ + 1) {
            if (t.elements[_].isOptional)
              continue;
          } else {
            const I = n[_], L = I(l[_], f), q = ke(L);
            if (q) {
              if (Et(q)) {
                const M = new wt(_, l, q.left);
                if (h) {
                  p.push([m++, M]);
                  continue;
                } else
                  return B(new ut(t, l, M, Qt(y)));
              }
              y.push([m++, q.right]);
            } else {
              const M = m++, T = _;
              O || (O = []), O.push(({
                es: $,
                output: J
              }) => Mt(ze(L), (H) => {
                if (Et(H)) {
                  const K = new wt(T, l, H.left);
                  return h ? ($.push([M, K]), Jt) : B(new ut(t, l, K, Qt(J)));
                }
                return J.push([M, H.right]), Jt;
              }));
            }
          }
        if (at(r)) {
          const [I, ...L] = r;
          for (; _ < S - L.length; _++) {
            const q = I(l[_], f), M = ke(q);
            if (M)
              if (Et(M)) {
                const T = new wt(_, l, M.left);
                if (h) {
                  p.push([m++, T]);
                  continue;
                } else
                  return B(new ut(t, l, T, Qt(y)));
              } else
                y.push([m++, M.right]);
            else {
              const T = m++, $ = _;
              O || (O = []), O.push(({
                es: J,
                output: H
              }) => Mt(ze(q), (K) => {
                if (Et(K)) {
                  const G = new wt($, l, K.left);
                  return h ? (J.push([T, G]), Jt) : B(new ut(t, l, G, Qt(H)));
                } else
                  return H.push([T, K.right]), Jt;
              }));
            }
          }
          for (let q = 0; q < L.length; q++)
            if (_ += q, !(S < _ + 1)) {
              const M = L[q](l[_], f), T = ke(M);
              if (T) {
                if (Et(T)) {
                  const $ = new wt(_, l, T.left);
                  if (h) {
                    p.push([m++, $]);
                    continue;
                  } else
                    return B(new ut(t, l, $, Qt(y)));
                }
                y.push([m++, T.right]);
              } else {
                const $ = m++, J = _;
                O || (O = []), O.push(({
                  es: H,
                  output: K
                }) => Mt(ze(M), (G) => {
                  if (Et(G)) {
                    const mt = new wt(J, l, G.left);
                    return h ? (H.push([$, mt]), Jt) : B(new ut(t, l, mt, Qt(K)));
                  }
                  return K.push([$, G.right]), Jt;
                }));
              }
            }
        }
        const N = ({
          es: I,
          output: L
        }) => _o(I) ? B(new ut(t, l, Qt(I), Qt(L))) : ot(Qt(L));
        if (O && O.length > 0) {
          const I = O;
          return go(() => {
            const L = {
              es: yr(p),
              output: yr(y)
            };
            return Mt(To(I, (q) => q(L), {
              concurrency: a,
              batching: u,
              discard: !0
            }), () => N(L));
          });
        }
        return N({
          output: y,
          es: p
        });
      };
    }
    case "TypeLiteral": {
      if (t.propertySignatures.length === 0 && t.indexSignatures.length === 0)
        return Pt(t, ey);
      const n = [], r = {}, s = [];
      for (const f of t.propertySignatures)
        n.push([Kt(f.type), f]), r[f.name] = null, s.push(f.name);
      const o = t.indexSignatures.map((f) => [Kt(f.parameter), Kt(f.type), f.parameter]), i = en.make(t.indexSignatures.map((f) => f.parameter).concat(s.map((f) => Nc(f) ? new jb(f) : new Ko(f)))), a = Kt(i), u = Ic(t), l = Ec(t);
      return (f, h) => {
        if (!qu(f))
          return B(new vt(t, f));
        const p = (h == null ? void 0 : h.errors) === "all", m = [];
        let y = 0;
        const S = (h == null ? void 0 : h.onExcessProperty) === "error", _ = (h == null ? void 0 : h.onExcessProperty) === "preserve", O = {};
        let N;
        if (S || _) {
          N = Mn(f);
          for (const M of N) {
            const T = ke(a(M, h));
            if (Et(T))
              if (S) {
                const $ = new wt(M, f, new Xl(f[M], `is unexpected, expected: ${String(i)}`));
                if (p) {
                  m.push([y++, $]);
                  continue;
                } else
                  return B(new ut(t, f, $, O));
              } else
                O[M] = f[M];
          }
        }
        let I;
        const L = (h == null ? void 0 : h.exact) === !0;
        for (let M = 0; M < n.length; M++) {
          const T = n[M][1], $ = T.name, J = Object.prototype.hasOwnProperty.call(f, $);
          if (!J) {
            if (T.isOptional)
              continue;
            if (L) {
              const mt = new wt($, f, new gr(T));
              if (p) {
                m.push([y++, mt]);
                continue;
              } else
                return B(new ut(t, f, mt, O));
            }
          }
          const H = n[M][0], K = H(f[$], h), G = ke(K);
          if (G) {
            if (Et(G)) {
              const mt = new wt($, f, J ? G.left : new gr(T));
              if (p) {
                m.push([y++, mt]);
                continue;
              } else
                return B(new ut(t, f, mt, O));
            }
            O[$] = G.right;
          } else {
            const mt = y++, Rt = $;
            I || (I = []), I.push(({
              es: zt,
              output: Nt
            }) => Mt(ze(K), (dt) => {
              if (Et(dt)) {
                const Yt = new wt(Rt, f, J ? dt.left : new gr(T));
                return p ? (zt.push([mt, Yt]), Jt) : B(new ut(t, f, Yt, Nt));
              }
              return Nt[Rt] = dt.right, Jt;
            }));
          }
        }
        for (let M = 0; M < o.length; M++) {
          const T = o[M], $ = T[0], J = T[1], H = hd(f, T[2]);
          for (const K of H) {
            const G = ke($(K, h));
            if (G && Fe(G)) {
              const mt = J(f[K], h), Rt = ke(mt);
              if (Rt)
                if (Et(Rt)) {
                  const zt = new wt(K, f, Rt.left);
                  if (p) {
                    m.push([y++, zt]);
                    continue;
                  } else
                    return B(new ut(t, f, zt, O));
                } else
                  Object.prototype.hasOwnProperty.call(r, K) || (O[K] = Rt.right);
              else {
                const zt = y++, Nt = K;
                I || (I = []), I.push(({
                  es: dt,
                  output: Yt
                }) => Mt(ze(mt), (Ve) => {
                  if (Et(Ve)) {
                    const Me = new wt(Nt, f, Ve.left);
                    return p ? (dt.push([zt, Me]), Jt) : B(new ut(t, f, Me, Yt));
                  } else
                    return Object.prototype.hasOwnProperty.call(r, K) || (Yt[K] = Ve.right), Jt;
                }));
              }
            }
          }
        }
        const q = ({
          es: M,
          output: T
        }) => {
          if (_o(M))
            return B(new ut(t, f, Qt(M), T));
          if ((h == null ? void 0 : h.propertyOrder) === "original") {
            const $ = N || Mn(f);
            for (const H of s)
              $.indexOf(H) === -1 && $.push(H);
            const J = {};
            for (const H of $)
              Object.prototype.hasOwnProperty.call(T, H) && (J[H] = T[H]);
            return ot(J);
          }
          return ot(T);
        };
        if (I && I.length > 0) {
          const M = I;
          return go(() => {
            const T = {
              es: yr(m),
              output: Object.assign({}, O)
            };
            return Mt(To(M, ($) => $(T), {
              concurrency: u,
              batching: l,
              discard: !0
            }), () => q(T));
          });
        }
        return q({
          es: m,
          output: O
        });
      };
    }
    case "Union": {
      const n = p1(t.types), r = Mn(n.keys), s = r.length, o = /* @__PURE__ */ new Map();
      for (let u = 0; u < t.types.length; u++)
        o.set(t.types[u], Kt(t.types[u]));
      const i = Ic(t) ?? 1, a = Ec(t);
      return (u, l) => {
        const f = [];
        let h = 0, p = [];
        if (s > 0)
          if (qu(u))
            for (let S = 0; S < s; S++) {
              const _ = r[S], O = n.keys[_].buckets;
              if (Object.prototype.hasOwnProperty.call(u, _)) {
                const N = String(u[_]);
                if (Object.prototype.hasOwnProperty.call(O, N))
                  p = p.concat(O[N]);
                else {
                  const I = en.make(n.keys[_].literals);
                  f.push([h++, new ut(new tn([new kt(_, I, !1, !0)], []), u, new wt(_, u, new vt(I, u[_])))]);
                }
              } else {
                const N = en.make(n.keys[_].literals), I = new kt(_, N, !1, !0);
                f.push([h++, new ut(new tn([I], []), u, new wt(_, u, new gr(I)))]);
              }
            }
          else
            f.push([h++, new vt(t, u)]);
        n.otherwise.length > 0 && (p = p.concat(n.otherwise));
        let m;
        for (let S = 0; S < p.length; S++) {
          const _ = p[S], O = o.get(_)(u, l), N = !m || m.length === 0 ? ke(O) : void 0;
          if (N) {
            if (Fe(N))
              return ot(N.right);
            f.push([h++, N.left]);
          } else {
            const I = h++;
            m || (m = []), m.push((L) => go(() => "finalResult" in L ? Jt : Mt(ze(O), (q) => (Fe(q) ? L.finalResult = ot(q.right) : L.es.push([I, q.left]), Jt))));
          }
        }
        const y = (S) => _o(S) ? S.length === 1 && S[0][1]._tag === "Type" ? B(S[0][1]) : B(new ut(t, u, Qt(S))) : (
          // this should never happen
          B(new vt(t, u))
        );
        if (m && m.length > 0) {
          const S = m;
          return go(() => {
            const _ = {
              es: yr(f)
            };
            return Mt(To(S, (O) => O(_), {
              concurrency: i,
              batching: a,
              discard: !0
            }), () => "finalResult" in _ ? _.finalResult : y(_.es));
          });
        }
        return y(f);
      };
    }
    case "Suspend": {
      const n = dd(() => Kt(Md(t.f(), t.annotations)));
      return (r, s) => n()(r, s);
    }
  }
}, Pt = (t, e) => (n) => e(n) ? ot(n) : B(new vt(t, n)), Sr = (t, e) => {
  switch (t._tag) {
    case "Declaration": {
      const n = xb(t);
      if (Z(n))
        return Sr(n.value);
      break;
    }
    case "TypeLiteral": {
      const n = [];
      for (let r = 0; r < t.propertySignatures.length; r++) {
        const s = t.propertySignatures[r], o = S_(s.type);
        Cb(o) && !s.isOptional && n.push([s.name, o]);
      }
      return n;
    }
    case "Refinement":
      return Sr(t.from);
    case "Suspend":
      return Sr(t.f());
    case "Transformation":
      return Sr(t.from);
  }
  return [];
}, p1 = (t, e) => {
  const n = {}, r = [];
  for (let s = 0; s < t.length; s++) {
    const o = t[s], i = Sr(o);
    if (i.length > 0)
      for (let a = 0; a < i.length; a++) {
        const [u, l] = i[a], f = String(l.literal);
        n[u] = n[u] || {
          buckets: {},
          literals: []
        };
        const h = n[u].buckets;
        if (Object.prototype.hasOwnProperty.call(h, f)) {
          if (a < i.length - 1)
            continue;
          h[f].push(o), n[u].literals.push(l);
        } else {
          h[f] = [o], n[u].literals.push(l);
          break;
        }
      }
    else
      r.push(o);
  }
  return {
    keys: n,
    otherwise: r
  };
}, kc = (t, e, n, r) => {
  const s = ke(t);
  if (s)
    return s;
  if ((r == null ? void 0 : r.isEffectAllowed) === !0)
    return t;
  try {
    return um(ze(t));
  } catch {
    return B(new o1(e, n, "cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work"));
  }
}, g1 = ([t], [e]) => t > e ? 1 : t < e ? -1 : 0;
function Qt(t) {
  return t.sort(g1).map((e) => e[1]);
}
const m1 = (t, e) => {
  switch (t._tag) {
    case "FinalTransformation":
      return t.decode;
    case "ComposeTransformation":
      return ot;
    case "TypeLiteralTransformation":
      return (n) => {
        let r = ot(n);
        for (const s of t.propertySignatureTransformations) {
          const [o, i] = [s.from, s.to], a = s.decode;
          r = c1(r, (l) => {
            const f = a(Object.prototype.hasOwnProperty.call(l, o) ? E(l[o]) : w());
            return delete l[o], Z(f) && (l[i] = f.value), l;
          });
        }
        return r;
      };
  }
}, y1 = /* @__PURE__ */ Symbol.for("@effect/schema/EquivalenceHookId"), b1 = /* @__PURE__ */ Symbol.for("@effect/schema/PrettyHookId"), ya = /* @__PURE__ */ Symbol.for("effect/BigDecimal"), _1 = {
  [ya]: ya,
  [F]() {
    const t = ni(this);
    return g(k(t.value), U(mi(t.scale)), et(this));
  },
  [P](t) {
    return gm(t) && S1(this, t);
  },
  toString() {
    return `BigDecimal(${tc(this)})`;
  },
  toJSON() {
    return {
      _id: "BigDecimal",
      value: String(this.value),
      scale: this.scale
    };
  },
  [z]() {
    return this.toJSON();
  },
  pipe() {
    return R(this, arguments);
  }
}, gm = (t) => j(t, ya), Xn = (t, e) => {
  const n = Object.create(_1);
  return n.value = t, n.scale = e, n;
}, mm = (t, e) => {
  if (t !== xs && t % ba === xs)
    throw new RangeError("Value must be normalized");
  const n = Xn(t, e);
  return n.normalized = n, n;
}, xs = /* @__PURE__ */ BigInt(0), ba = /* @__PURE__ */ BigInt(10), ym = /* @__PURE__ */ mm(xs, 0), ni = (t) => {
  if (t.normalized === void 0)
    if (t.value === xs)
      t.normalized = ym;
    else {
      const e = `${t.value}`;
      let n = 0;
      for (let o = e.length - 1; o >= 0 && e[o] === "0"; o--)
        n++;
      n === 0 && (t.normalized = t);
      const r = BigInt(e.substring(0, e.length - n)), s = t.scale - n;
      t.normalized = mm(r, s);
    }
  return t.normalized;
}, ef = (t, e) => e > t.scale ? Xn(t.value * ba ** BigInt(e - t.scale), e) : e < t.scale ? Xn(t.value / ba ** BigInt(t.scale - e), e) : t, bm = /* @__PURE__ */ hi((t, e) => t.scale > e.scale ? ef(e, t.scale).value === t.value : t.scale < e.scale ? ef(t, e.scale).value === e.value : t.value === e.value), S1 = /* @__PURE__ */ d(2, (t, e) => bm(t, e)), w1 = (t) => {
  const [e, n = ""] = `${t}`.split(".");
  return Xn(BigInt(`${e}${n}`), n.length);
}, O1 = (t) => {
  let e, n;
  const r = t.search(/\./);
  if (r !== -1) {
    const s = t.slice(0, r), o = t.slice(r + 1);
    e = `${s}${o}`, n = o.length;
  } else
    e = t, n = 0;
  return e === "" ? E(ym) : /^(?:\+|-)?\d+$/.test(e) ? E(Xn(BigInt(e), n)) : w();
}, tc = (t) => {
  const e = t.value < xs, n = e ? `${t.value}`.substring(1) : `${t.value}`;
  let r, s;
  if (t.scale >= n.length)
    r = "0", s = "0".repeat(t.scale - n.length) + n;
  else {
    const i = n.length - t.scale;
    if (i > n.length) {
      const a = i - n.length;
      r = `${n}${"0".repeat(a)}`, s = "";
    } else
      s = n.slice(i), r = n.slice(0, i);
  }
  const o = s === "" ? r : `${r}.${s}`;
  return e ? `-${o}` : o;
}, I1 = (t) => Number(tc(t)), E1 = (t) => t > BigInt(Number.MAX_SAFE_INTEGER) || t < BigInt(Number.MIN_SAFE_INTEGER) ? w() : E(Number(t)), k1 = (t) => {
  try {
    return t.trim() === "" ? w() : E(BigInt(t));
  } catch {
    return w();
  }
}, v1 = (t) => {
  if (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER)
    return w();
  try {
    return E(BigInt(t));
  } catch {
    return w();
  }
}, ri = /* @__PURE__ */ Symbol.for("@effect/schema/Schema"), Q = (t) => {
  var e, n, r;
  return n = ri, e = ri, r = class {
    constructor() {
      c(this, n, nf);
    }
    static annotations(o) {
      return Q(He(this.ast, o));
    }
    static pipe() {
      return R(this, arguments);
    }
    static toString() {
      return String(t);
    }
  }, c(r, "Type"), c(r, "Encoded"), c(r, e, nf), c(r, "ast", t), r;
}, nf = {
  /* c8 ignore next */
  _A: (t) => t,
  /* c8 ignore next */
  _I: (t) => t,
  /* c8 ignore next */
  _R: (t) => t
}, ec = (t) => {
  if (!t)
    return {};
  const e = {}, n = Object.getOwnPropertySymbols(t);
  for (const s of n)
    e[s] = t[s];
  if (t.typeId !== void 0) {
    const s = t.typeId;
    typeof s == "object" ? (e[Wu] = s.id, e[s.id] = s.annotation) : e[Wu] = s;
  }
  const r = (s, o) => {
    t[s] !== void 0 && (e[o] = t[s]);
  };
  return r("message", gd), r("missingMessage", md), r("identifier", wi), r("title", Ot), r("description", _e), r("examples", Sb), r("default", wb), r("documentation", Ib), r("jsonSchema", Ob), r("arbitrary", M_), r("pretty", b1), r("equivalence", y1), r("concurrency", yd), r("batching", bd), r("parseIssueTitle", _d), r("parseOptions", Sd), e;
}, He = (t, e) => Md(t, ec(e)), T1 = (t, e) => {
  const n = f1(t, e);
  return (r, s) => _r(n(r, s), dm);
}, $1 = T1, Zn = (t) => j(t, ri) && on(t[ri]), R1 = (t) => qa(t) ? en.make(f_(t, (e) => new Ko(e))) : new Ko(t[0]), _m = (t, e = R1(t)) => {
  var n;
  return n = class extends Q(e) {
    static annotations(s) {
      return _m(this.literals, He(this.ast, s));
    }
  }, c(n, "literals", [...t]), n;
};
function Au(...t) {
  return at(t) ? _m(t) : si;
}
const N1 = (t, e, n) => Q(new Oi(t.map((r) => r.ast), (...r) => e.decode(...r.map(Q)), (...r) => e.encode(...r.map(Q)), ec(n))), M1 = (t, e) => {
  const n = () => (s, o, i) => t(s) ? he(s) : Nu(new vt(i, s)), r = n;
  return Q(new Oi([], n, r, ec(e)));
}, nc = function() {
  if (Array.isArray(arguments[0])) {
    const n = arguments[0], r = arguments[1], s = arguments[2];
    return N1(n, r, s);
  }
  const t = arguments[0], e = arguments[1];
  return M1(t, e);
}, Nr = class Nr extends Q(Kb) {
};
c(Nr, "annotations", v(Nr, Nr, "annotations"));
let rf = Nr;
const Mr = class Mr extends Q(Ub) {
};
c(Mr, "annotations", v(Mr, Mr, "annotations"));
let sf = Mr;
const Ar = class Ar extends Q(Fb) {
};
c(Ar, "annotations", v(Ar, Ar, "annotations"));
let of = Ar;
const xr = class xr extends Q(qo) {
};
c(xr, "annotations", v(xr, xr, "annotations"));
let si = xr;
const Pr = class Pr extends Q(Id) {
};
c(Pr, "annotations", v(Pr, Pr, "annotations"));
let _a = Pr;
const Cr = class Cr extends Q(Ed) {
};
c(Cr, "annotations", v(Cr, Cr, "annotations"));
let cf = Cr;
const Fr = class Fr extends Q(Zb) {
};
c(Fr, "annotations", v(Fr, Fr, "annotations"));
let Ps = Fr;
const jr = class jr extends Q(e_) {
};
c(jr, "annotations", v(jr, jr, "annotations"));
let Sa = jr;
const Lr = class Lr extends Q(Vb) {
};
c(Lr, "annotations", v(Lr, Lr, "annotations"));
let tt = Lr;
const Kr = class Kr extends Q(Wb) {
};
c(Kr, "annotations", v(Kr, Kr, "annotations"));
let xt = Kr;
const qr = class qr extends Q(Qb) {
};
c(qr, "annotations", v(qr, qr, "annotations"));
let Cs = qr;
const Ur = class Ur extends Q(s_) {
};
c(Ur, "annotations", v(Ur, Ur, "annotations"));
let af = Ur;
const A1 = (t) => en.members(t.map((e) => e.ast)), Sm = (t, e = A1(t)) => {
  var n;
  return n = class extends Q(e) {
    static annotations(s) {
      return Sm(this.members, He(this.ast, s));
    }
  }, c(n, "members", [...t]), n;
};
function x1(...t) {
  return qa(t) ? Sm(t) : at(t) ? t[0] : si;
}
const P1 = (t, e) => new Ka(t.map((n) => Zn(n) ? new Ei(n.ast, !1) : n.ast), e.map((n) => Zn(n) ? new Ii(n.ast) : n.ast), !0), oi = (t, e, n = P1(t, e)) => {
  var r;
  return r = class extends Q(n) {
    static annotations(o) {
      return oi(this.elements, this.rest, He(this.ast, o));
    }
  }, c(r, "elements", [...t]), c(r, "rest", [...e]), r;
};
function C1(...t) {
  return Array.isArray(t[0]) ? oi(t[0], t.slice(1)) : oi(t, []);
}
const wm = (t, e) => {
  var n;
  return n = class extends oi([], [t], e) {
    static annotations(s) {
      return wm(this.value, He(this.ast, s));
    }
  }, c(n, "value", t), n;
}, F1 = (t) => wm(t), j1 = /* @__PURE__ */ Symbol.for("@effect/schema/PropertySignature"), Om = (t) => j(t, j1), L1 = (t, e) => {
  const n = Mn(t), r = [];
  if (n.length > 0) {
    const o = [], i = [], a = [];
    for (let u = 0; u < n.length; u++) {
      const l = n[u], f = t[l];
      if (Om(f)) {
        const h = f.ast;
        switch (h._tag) {
          case "PropertySignatureDeclaration": {
            const p = h.type, m = h.isOptional, y = h.annotations;
            o.push(new kt(l, p, m, !0)), i.push(new kt(l, Ct(p), m, !0, y)), r.push(new kt(l, p, m, !0, y));
            break;
          }
          case "PropertySignatureTransformation": {
            const p = h.from.fromKey ?? l;
            o.push(new kt(p, h.from.type, h.from.isOptional, !0, h.from.annotations)), i.push(new kt(l, h.to.type, h.to.isOptional, !0, h.to.annotations)), a.push(new p_(p, l, h.decode, h.encode));
            break;
          }
        }
      } else
        o.push(new kt(l, f.ast, !1, !0)), i.push(new kt(l, Ct(f.ast), !1, !0)), r.push(new kt(l, f.ast, !1, !0));
    }
    if (at(a)) {
      const u = [], l = [];
      for (const f of e) {
        const {
          indexSignatures: h,
          propertySignatures: p
        } = zu(f.key.ast, f.value.ast);
        p.forEach((m) => {
          o.push(m), i.push(new kt(m.name, Ct(m.type), m.isOptional, m.isReadonly, m.annotations));
        }), h.forEach((m) => {
          u.push(m), l.push(new ki(m.parameter, Ct(m.type), m.isReadonly));
        });
      }
      return new Nd(new tn(o, u, {
        [Ot]: "Struct (Encoded side)"
      }), new tn(i, l, {
        [Ot]: "Struct (Type side)"
      }), new g_(a));
    }
  }
  const s = [];
  for (const o of e) {
    const {
      indexSignatures: i,
      propertySignatures: a
    } = zu(o.key.ast, o.value.ast);
    a.forEach((u) => r.push(u)), i.forEach((u) => s.push(u));
  }
  return new tn(r, s);
}, K1 = (t, e) => {
  const n = Mn(t);
  for (const r of n) {
    const s = t[r];
    if (e[r] === void 0 && Om(s)) {
      const o = s.ast, i = o._tag === "PropertySignatureDeclaration" ? o.defaultValue : o.to.defaultValue;
      i !== void 0 && (e[r] = i());
    }
  }
  return e;
}, Im = (t, e, n = L1(t, e)) => {
  var r;
  return r = class extends Q(n) {
    static annotations(o) {
      return Im(this.fields, this.records, He(this.ast, o));
    }
  }, c(r, "fields", {
    ...t
  }), c(r, "records", [...e]), c(r, "make", (o, i) => {
    const a = K1(t, {
      ...o
    });
    return $m(i) ? a : pm(r)(a);
  }), r;
};
function bn(t, ...e) {
  return Im(t, e);
}
const uf = (t) => Q(new Ua(() => t().ast)), q1 = /* @__PURE__ */ Symbol.for("@effect/schema/refine"), Em = (t, e, n) => {
  var r, s, o;
  return o = class extends (s = Q(n), r = q1, s) {
    static annotations(a) {
      return Em(this.from, this.filter, He(this.ast, a));
    }
  }, c(o, r, t), c(o, "from", t), c(o, "filter", e), c(o, "make", (a, u) => $m(u) ? a : pm(o)(a)), o;
}, lf = (t, e, n) => {
  if (di(t))
    return t ? w() : E(new vt(e, n));
  if (ae(t))
    return E(new vt(e, n, t));
  if (t !== void 0) {
    if ("_tag" in t)
      return E(t);
    const r = new vt(e, n, t.message);
    return E(at(t.path) ? new wt(t.path, n, r) : r);
  }
  return w();
}, U1 = (t, e, n) => {
  if (db(t))
    return lf(t, e, n);
  if (at(t)) {
    const r = ub(t, (s) => lf(s, e, n));
    if (at(r))
      return E(r.length === 1 ? r[0] : new ut(e, n, r));
  }
  return w();
};
function Tt(t, e) {
  return (n) => {
    function r(o, i, a) {
      return U1(t(o, i, a), a, o);
    }
    const s = new Rd(n.ast, r, ec(e));
    return Em(n, r, s);
  };
}
const km = (t, e, n) => {
  var r;
  return r = class extends Q(n) {
    static annotations(o) {
      return km(this.from, this.to, He(this.ast, o));
    }
  }, c(r, "from", t), c(r, "to", e), r;
}, _n = /* @__PURE__ */ d((t) => Zn(t[0]) && Zn(t[1]), (t, e, n) => km(t, e, new Nd(t.ast, e.ast, new d_(n.decode, n.encode)))), me = /* @__PURE__ */ d((t) => Zn(t[0]) && Zn(t[1]), (t, e, n) => _n(t, e, {
  strict: !0,
  decode: (r) => he(n.decode(r)),
  encode: (r) => he(n.encode(r))
})), D1 = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Trimmed"), J1 = (t) => (e) => e.pipe(Tt((n) => n === n.trim(), {
  typeId: D1,
  description: "a string with no leading or trailing whitespace",
  jsonSchema: {
    pattern: "^\\S[\\s\\S]*\\S$|^\\S$|^$"
  },
  ...t
})), B1 = R_, H1 = (t, e) => (n) => n.pipe(Tt((r) => r.length >= t, {
  typeId: B1,
  description: `a string at least ${t} character(s) long`,
  jsonSchema: {
    minLength: t
  },
  ...e
})), V1 = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Pattern"), vm = (t, e) => (n) => {
  const r = t.source;
  return n.pipe(Tt((s) => (t.lastIndex = 0, t.test(s)), {
    typeId: {
      id: V1,
      annotation: {
        regex: t
      }
    },
    description: `a string matching the pattern ${r}`,
    jsonSchema: {
      pattern: r
    },
    arbitrary: () => (s) => s.stringMatching(t),
    ...e
  }));
}, G1 = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Lowercased"), W1 = (t) => (e) => e.pipe(Tt((n) => n === n.toLowerCase(), {
  typeId: G1,
  description: "a lowercase string",
  ...t
})), Dr = class Dr extends tt.pipe(W1({
  identifier: "Lowercased",
  title: "Lowercased"
})) {
};
c(Dr, "annotations", v(Dr, Dr, "annotations"));
let wa = Dr;
const z1 = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Uppercased"), Y1 = (t) => (e) => e.pipe(Tt((n) => n === n.toUpperCase(), {
  typeId: z1,
  description: "an uppercase string",
  ...t
})), Jr = class Jr extends tt.pipe(Y1({
  identifier: "Uppercased",
  title: "Uppercased"
})) {
};
c(Jr, "annotations", v(Jr, Jr, "annotations"));
let Oa = Jr;
const ff = N_, Q1 = (t, e) => (n) => {
  const r = on(t) ? Math.max(0, Math.floor(t.min)) : Math.max(0, Math.floor(t)), s = on(t) ? Math.max(r, Math.floor(t.max)) : r;
  return r !== s ? n.pipe(Tt((o) => o.length >= r && o.length <= s, {
    typeId: ff,
    description: `a string at least ${r} character(s) and at most ${s} character(s) long`,
    jsonSchema: {
      minLength: r,
      maxLength: s
    },
    ...e
  })) : n.pipe(Tt((o) => o.length === r, {
    typeId: ff,
    description: r === 1 ? "a single character" : `a string ${r} character(s) long`,
    jsonSchema: {
      minLength: r,
      maxLength: r
    },
    ...e
  }));
}, Br = class Br extends tt.pipe(Q1(1, {
  identifier: "Char"
})) {
};
c(Br, "annotations", v(Br, Br, "annotations"));
let hf = Br;
const X1 = (t) => H1(1, {
  description: "a non empty string",
  ...t
}), Hr = class Hr extends me(tt, wa, {
  strict: !0,
  decode: (e) => e.toLowerCase(),
  encode: rt
}).annotations({
  identifier: "Lowercase"
}) {
};
c(Hr, "annotations", v(Hr, Hr, "annotations"));
let df = Hr;
const Vr = class Vr extends me(tt, Oa, {
  strict: !0,
  decode: (e) => e.toUpperCase(),
  encode: rt
}).annotations({
  identifier: "Uppercase"
}) {
};
c(Vr, "annotations", v(Vr, Vr, "annotations"));
let pf = Vr;
const Gr = class Gr extends tt.pipe(J1({
  identifier: "Trimmed",
  title: "Trimmed"
})) {
};
c(Gr, "annotations", v(Gr, Gr, "annotations"));
let Ia = Gr;
const Wr = class Wr extends me(tt, Ia, {
  strict: !0,
  decode: (e) => e.trim(),
  encode: rt
}).annotations({
  identifier: "Trim"
}) {
};
c(Wr, "annotations", v(Wr, Wr, "annotations"));
let gf = Wr;
const zr = class zr extends tt.pipe(X1({
  identifier: "NonEmpty",
  title: "NonEmpty"
})) {
};
c(zr, "annotations", v(zr, zr, "annotations"));
let mf = zr;
const Z1 = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/UUID"), t$ = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i, Yr = class Yr extends tt.pipe(vm(t$, {
  typeId: Z1,
  identifier: "UUID",
  title: "UUID",
  description: "a Universally Unique Identifier",
  arbitrary: () => (e) => e.uuid()
})) {
};
c(Yr, "annotations", v(Yr, Yr, "annotations"));
let yf = Yr;
const e$ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/ULID"), n$ = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i, Qr = class Qr extends tt.pipe(vm(n$, {
  typeId: e$,
  identifier: "ULID",
  title: "ULID",
  description: "a Universally Unique Lexicographically Sortable Identifier",
  arbitrary: () => (e) => e.ulid()
})) {
};
c(Qr, "annotations", v(Qr, Qr, "annotations"));
let bf = Qr;
const r$ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Finite"), Ea = (t) => (e) => e.pipe(Tt((n) => Number.isFinite(n), {
  typeId: r$,
  description: "a finite number",
  ...t
})), s$ = E_, o$ = (t, e) => (n) => n.pipe(Tt((r) => r > t, {
  typeId: s$,
  description: "a positive number",
  jsonSchema: {
    exclusiveMinimum: t
  },
  ...e
})), i$ = k_, c$ = (t, e) => (n) => n.pipe(Tt((r) => r >= t, {
  typeId: i$,
  description: "a non-negative number",
  jsonSchema: {
    minimum: t
  },
  ...e
})), a$ = $_, u$ = (t) => (e) => e.pipe(Tt((n) => Number.isSafeInteger(n), {
  typeId: a$,
  title: "integer",
  description: "an integer",
  jsonSchema: {
    type: "integer"
  },
  ...t
})), l$ = v_, f$ = (t, e) => (n) => n.pipe(Tt((r) => r < t, {
  typeId: l$,
  description: "a negative number",
  jsonSchema: {
    exclusiveMaximum: t
  },
  ...e
})), h$ = T_, d$ = (t, e) => (n) => n.pipe(Tt((r) => r <= t, {
  typeId: h$,
  description: "a non-positive number",
  jsonSchema: {
    maximum: t
  },
  ...e
})), p$ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/NonNaN"), g$ = (t) => (e) => e.pipe(Tt((n) => !Number.isNaN(n), {
  typeId: p$,
  description: "a number excluding NaN",
  ...t
})), m$ = (t) => o$(0, t), y$ = (t) => f$(0, t), b$ = (t) => d$(0, t), _$ = (t) => c$(0, t), S$ = (t) => _n(t, xt, {
  strict: !1,
  decode: (e, n, r) => ei(fb(e), () => new vt(r, e)),
  encode: (e) => he(String(e))
}), Xr = class Xr extends S$(tt).annotations({
  identifier: "NumberFromString"
}) {
};
c(Xr, "annotations", v(Xr, Xr, "annotations"));
let _f = Xr;
const Zr = class Zr extends xt.pipe(Ea({
  identifier: "Finite",
  title: "Finite"
})) {
};
c(Zr, "annotations", v(Zr, Zr, "annotations"));
let Sf = Zr;
const ts = class ts extends xt.pipe(u$({
  identifier: "Int",
  title: "Int"
})) {
};
c(ts, "annotations", v(ts, ts, "annotations"));
let ii = ts;
const es = class es extends xt.pipe(g$({
  identifier: "NonNaN",
  title: "NonNaN"
})) {
};
c(es, "annotations", v(es, es, "annotations"));
let wf = es;
const ns = class ns extends xt.pipe(m$({
  identifier: "Positive",
  title: "Positive"
})) {
};
c(ns, "annotations", v(ns, ns, "annotations"));
let Of = ns;
const rs = class rs extends xt.pipe(y$({
  identifier: "Negative",
  title: "Negative"
})) {
};
c(rs, "annotations", v(rs, rs, "annotations"));
let If = rs;
const ss = class ss extends xt.pipe(b$({
  identifier: "NonPositive",
  title: "NonPositive"
})) {
};
c(ss, "annotations", v(ss, ss, "annotations"));
let Ef = ss;
const os = class os extends xt.pipe(_$({
  identifier: "NonNegative",
  title: "NonNegative"
})) {
};
c(os, "annotations", v(os, os, "annotations"));
let ci = os;
const w$ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/JsonNumber"), is = class is extends xt.pipe(Tt((e) => !Number.isNaN(e) && Number.isFinite(e), {
  typeId: w$,
  identifier: "JsonNumber",
  title: "JSON-compatible number",
  description: "a JSON-compatible number, excluding NaN, +Infinity, and -Infinity",
  jsonSchema: {
    type: "number"
  }
})) {
};
c(is, "annotations", v(is, is, "annotations"));
let kf = is;
const cs = class cs extends me(Cs, Cs, {
  strict: !0,
  decode: Rl,
  encode: Rl
}) {
};
c(cs, "annotations", v(cs, cs, "annotations"));
let vf = cs;
const as = class as extends me(tt, Sa, {
  strict: !1,
  decode: (e) => Symbol.for(e),
  encode: (e) => e.description
}).annotations({
  identifier: "symbol"
}) {
};
c(as, "annotations", v(as, as, "annotations"));
let Tf = as;
const us = class us extends _n(tt, Ps, {
  strict: !0,
  decode: (e, n, r) => ei(k1(e), () => new vt(r, e)),
  encode: (e) => he(String(e))
}).annotations({
  identifier: "bigint"
}) {
};
c(us, "annotations", v(us, us, "annotations"));
let $f = us;
const ls = class ls extends _n(xt, Ps, {
  strict: !0,
  decode: (e, n, r) => ei(v1(e), () => new vt(r, e)),
  encode: (e, n, r) => ei(E1(e), () => new vt(r, e))
}).annotations({
  identifier: "BigintFromNumber"
}) {
};
c(ls, "annotations", v(ls, ls, "annotations"));
let Rf = ls;
const fs = class fs extends nc(du, {
  identifier: "DurationFromSelf",
  pretty: () => String,
  arbitrary: () => (e) => e.oneof(e.constant(rI), e.bigUint().map((n) => Pn(n)), e.bigUint().map((n) => sg(n)), e.maxSafeNat().map((n) => As(n)), e.maxSafeNat().map((n) => og(n)), e.maxSafeNat().map((n) => ig(n)), e.maxSafeNat().map((n) => cg(n)), e.maxSafeNat().map((n) => ag(n)), e.maxSafeNat().map((n) => ug(n))),
  equivalence: () => hg
}) {
};
c(fs, "annotations", v(fs, fs, "annotations"));
let Fs = fs;
const hs = class hs extends _n(Ps, Fs, {
  strict: !0,
  decode: (e) => he(Pn(e)),
  encode: (e, n, r) => de(sI(e), {
    onNone: () => Nu(new vt(r, e)),
    onSome: (s) => he(s)
  })
}).annotations({
  identifier: "DurationFromNanos"
}) {
};
c(hs, "annotations", v(hs, hs, "annotations"));
let Nf = hs;
const ds = class ds extends me(xt, Fs, {
  strict: !0,
  decode: (e) => As(e),
  encode: (e) => Wo(e)
}).annotations({
  identifier: "DurationFromMillis"
}) {
};
c(ds, "annotations", v(ds, ds, "annotations"));
let Mf = ds;
const O$ = /* @__PURE__ */ C1(/* @__PURE__ */ ci.pipe(/* @__PURE__ */ Ea({
  [Ot]: "seconds",
  [_e]: "seconds"
})), /* @__PURE__ */ ci.pipe(/* @__PURE__ */ Ea({
  [Ot]: "nanos",
  [_e]: "nanos"
}))), ps = class ps extends me(O$, Fs, {
  strict: !0,
  decode: ([e, n]) => Pn(BigInt(e) * BigInt(1e9) + BigInt(n)),
  encode: (e) => lg(e)
}).annotations({
  identifier: "Duration"
}) {
};
c(ps, "annotations", v(ps, ps, "annotations"));
let Af = ps;
const I$ = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/ValidDate"), Tm = (t) => (e) => e.pipe(Tt((n) => !Number.isNaN(n.getTime()), {
  typeId: I$,
  description: "a valid Date",
  ...t
})), gs = class gs extends nc(Lh, {
  identifier: "DateFromSelf",
  description: "a potentially invalid Date instance",
  pretty: () => (e) => `new Date(${JSON.stringify(e)})`,
  arbitrary: () => (e) => e.date({
    noInvalidDate: !1
  }),
  equivalence: () => Ym
}) {
};
c(gs, "annotations", v(gs, gs, "annotations"));
let js = gs;
const ms = class ms extends js.pipe(Tm({
  identifier: "ValidDateFromSelf",
  description: "a valid Date instance"
})) {
};
c(ms, "annotations", v(ms, ms, "annotations"));
let xf = ms;
const ys = class ys extends me(tt, js, {
  strict: !0,
  decode: (e) => new Date(e),
  encode: (e) => e.toISOString()
}).annotations({
  identifier: "DateFromString"
}) {
};
c(ys, "annotations", v(ys, ys, "annotations"));
let ka = ys;
const bs = class bs extends ka.pipe(Tm({
  identifier: "Date"
})) {
};
c(bs, "annotations", v(bs, bs, "annotations"));
let Pf = bs;
const _s = class _s extends me(xt, js, {
  strict: !0,
  decode: (e) => new Date(e),
  encode: (e) => e.getTime()
}).annotations({
  identifier: "DateFromNumber"
}) {
};
c(_s, "annotations", v(_s, _s, "annotations"));
let Cf = _s;
const E$ = () => (t) => `BigDecimal(${tc(ni(t))})`, k$ = () => (t) => t.tuple(t.bigInt(), t.integer()).map(([e, n]) => Xn(e, n)), Ss = class Ss extends nc(gm, {
  identifier: "BigDecimalFromSelf",
  pretty: E$,
  arbitrary: k$,
  equivalence: () => bm
}) {
};
c(Ss, "annotations", v(Ss, Ss, "annotations"));
let ai = Ss;
const ws = class ws extends _n(tt, ai, {
  strict: !0,
  decode: (e, n, r) => O1(e).pipe(de({
    onNone: () => Nu(new vt(r, e)),
    onSome: (s) => he(ni(s))
  })),
  encode: (e) => he(tc(ni(e)))
}).annotations({
  identifier: "BigDecimal"
}) {
};
c(ws, "annotations", v(ws, ws, "annotations"));
let Ff = ws;
const Os = class Os extends _n(xt, ai, {
  strict: !0,
  decode: (e) => he(w1(e)),
  encode: (e) => he(I1(e))
}).annotations({
  identifier: "BigDecimalFromNumber"
}) {
};
c(Os, "annotations", v(Os, Os, "annotations"));
let jf = Os;
const $m = (t) => di(t) ? t : (t == null ? void 0 : t.disableValidation) ?? !1, v$ = /* @__PURE__ */ bn({
  _tag: Au("None")
}).annotations({
  identifier: "FiberIdNoneEncoded"
}), T$ = /* @__PURE__ */ bn({
  _tag: Au("Runtime"),
  id: ii.annotations({
    title: "id",
    description: "id"
  }),
  startTimeMillis: ii.annotations({
    title: "startTimeMillis",
    description: "startTimeMillis"
  })
}).annotations({
  identifier: "FiberIdRuntimeEncoded"
}), $$ = /* @__PURE__ */ bn({
  _tag: Au("Composite"),
  left: uf(() => va),
  right: uf(() => va)
}).annotations({
  identifier: "FiberIdCompositeEncoded"
}), va = /* @__PURE__ */ x1(v$, T$, $$).annotations({
  identifier: "FiberIdEncoded"
}), R$ = (t) => t.letrec((e) => ({
  None: t.record({
    _tag: t.constant("None")
  }),
  Runtime: t.record({
    _tag: t.constant("Runtime"),
    id: t.integer(),
    startTimeMillis: t.integer()
  }),
  Composite: t.record({
    _tag: t.constant("Composite"),
    left: e("FiberId"),
    right: e("FiberId")
  }),
  FiberId: t.oneof(e("None"), e("Runtime"), e("Composite"))
})).FiberId.map(ui), Ta = (t) => {
  switch (t._tag) {
    case "None":
      return "FiberId.none";
    case "Runtime":
      return `FiberId.runtime(${t.id}, ${t.startTimeMillis})`;
    case "Composite":
      return `FiberId.composite(${Ta(t.right)}, ${Ta(t.left)})`;
  }
}, Is = class Is extends nc(zS, {
  identifier: "FiberIdFromSelf",
  pretty: () => Ta,
  arbitrary: () => R$
}) {
};
c(Is, "annotations", v(Is, Is, "annotations"));
let $a = Is;
const ui = (t) => {
  switch (t._tag) {
    case "None":
      return Vn;
    case "Runtime":
      return GS(t.id, t.startTimeMillis);
    case "Composite":
      return WS(ui(t.left), ui(t.right));
  }
}, Ra = (t) => {
  switch (t._tag) {
    case "None":
      return {
        _tag: "None"
      };
    case "Runtime":
      return {
        _tag: "Runtime",
        id: t.id,
        startTimeMillis: t.startTimeMillis
      };
    case "Composite":
      return {
        _tag: "Composite",
        left: Ra(t.left),
        right: Ra(t.right)
      };
  }
}, Es = class Es extends me(va, $a, {
  strict: !0,
  decode: ui,
  encode: Ra
}).annotations({
  identifier: "FiberId"
}) {
};
c(Es, "annotations", v(Es, Es, "annotations"));
let Lf = Es;
const ks = class ks extends me(_a, Cs, {
  strict: !0,
  decode: Zm,
  encode: rt
}).annotations({
  identifier: "BooleanFromUnknown"
}) {
};
c(ks, "annotations", v(ks, ks, "annotations"));
let Kf = ks;
var N$ = async (t, e = /* @__PURE__ */ Object.create(null)) => {
  const { all: n = !1, dot: r = !1 } = e, o = (t instanceof xm ? t.raw.headers : t.headers).get("Content-Type");
  return o !== null && o.startsWith("multipart/form-data") || o !== null && o.startsWith("application/x-www-form-urlencoded") ? M$(t, { all: n, dot: r }) : {};
};
async function M$(t, e) {
  const n = await t.formData();
  return n ? A$(n, e) : {};
}
function A$(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  return t.forEach((r, s) => {
    e.all || s.endsWith("[]") ? x$(n, s, r) : n[s] = r;
  }), e.dot && Object.entries(n).forEach(([r, s]) => {
    r.includes(".") && (P$(n, r, s), delete n[r]);
  }), n;
}
var x$ = (t, e, n) => {
  t[e] !== void 0 ? Array.isArray(t[e]) ? t[e].push(n) : t[e] = [t[e], n] : t[e] = n;
}, P$ = (t, e, n) => {
  let r = t;
  const s = e.split(".");
  s.forEach((o, i) => {
    i === s.length - 1 ? r[o] = n : ((!r[o] || typeof r[o] != "object" || Array.isArray(r[o]) || r[o] instanceof File) && (r[o] = /* @__PURE__ */ Object.create(null)), r = r[o]);
  });
}, Rm = (t) => {
  const e = t.split("/");
  return e[0] === "" && e.shift(), e;
}, C$ = (t) => {
  const { groups: e, path: n } = F$(t), r = Rm(n);
  return j$(r, e);
}, F$ = (t) => {
  const e = [];
  return t = t.replace(/\{[^}]+\}/g, (n, r) => {
    const s = `@${r}`;
    return e.push([s, n]), s;
  }), { groups: e, path: t };
}, j$ = (t, e) => {
  for (let n = e.length - 1; n >= 0; n--) {
    const [r] = e[n];
    for (let s = t.length - 1; s >= 0; s--)
      if (t[s].includes(r)) {
        t[s] = t[s].replace(r, e[n][1]);
        break;
      }
  }
  return t;
}, yo = {}, qf = (t) => {
  if (t === "*")
    return "*";
  const e = t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  return e ? (yo[t] || (e[2] ? yo[t] = [t, e[1], new RegExp("^" + e[2] + "$")] : yo[t] = [t, e[1], !0]), yo[t]) : null;
}, L$ = (t) => {
  try {
    return decodeURI(t);
  } catch {
    return t.replace(/(?:%[0-9A-Fa-f]{2})+/g, (e) => {
      try {
        return decodeURI(e);
      } catch {
        return e;
      }
    });
  }
}, Nm = (t) => {
  const e = t.url, n = e.indexOf("/", 8);
  let r = n;
  for (; r < e.length; r++) {
    const s = e.charCodeAt(r);
    if (s === 37) {
      const o = e.indexOf("?", r), i = e.slice(n, o === -1 ? void 0 : o);
      return L$(i.includes("%25") ? i.replace(/%25/g, "%2525") : i);
    } else if (s === 63)
      break;
  }
  return e.slice(n, r);
}, K$ = (t) => {
  const e = Nm(t);
  return e.length > 1 && e[e.length - 1] === "/" ? e.slice(0, -1) : e;
}, mr = (...t) => {
  let e = "", n = !1;
  for (let r of t)
    e[e.length - 1] === "/" && (e = e.slice(0, -1), n = !0), r[0] !== "/" && (r = `/${r}`), r === "/" && n ? e = `${e}/` : r !== "/" && (e = `${e}${r}`), r === "/" && e === "" && (e = "/");
  return e;
}, Mm = (t) => {
  if (!t.match(/\:.+\?$/))
    return null;
  const e = t.split("/"), n = [];
  let r = "";
  return e.forEach((s) => {
    if (s !== "" && !/\:/.test(s))
      r += "/" + s;
    else if (/\:/.test(s))
      if (/\?/.test(s)) {
        n.length === 0 && r === "" ? n.push("/") : n.push(r);
        const o = s.replace("?", "");
        r += "/" + o, n.push(r);
      } else
        r += "/" + s;
  }), n.filter((s, o, i) => i.indexOf(s) === o);
}, vc = (t) => /[%+]/.test(t) ? (t.indexOf("+") !== -1 && (t = t.replace(/\+/g, " ")), /%/.test(t) ? Na(t) : t) : t, Am = (t, e, n) => {
  let r;
  if (!n && e && !/[%+]/.test(e)) {
    let i = t.indexOf(`?${e}`, 8);
    for (i === -1 && (i = t.indexOf(`&${e}`, 8)); i !== -1; ) {
      const a = t.charCodeAt(i + e.length + 1);
      if (a === 61) {
        const u = i + e.length + 2, l = t.indexOf("&", u);
        return vc(t.slice(u, l === -1 ? void 0 : l));
      } else if (a == 38 || isNaN(a))
        return "";
      i = t.indexOf(`&${e}`, i + 1);
    }
    if (r = /[%+]/.test(t), !r)
      return;
  }
  const s = {};
  r ?? (r = /[%+]/.test(t));
  let o = t.indexOf("?", 8);
  for (; o !== -1; ) {
    const i = t.indexOf("&", o + 1);
    let a = t.indexOf("=", o);
    a > i && i !== -1 && (a = -1);
    let u = t.slice(
      o + 1,
      a === -1 ? i === -1 ? void 0 : i : a
    );
    if (r && (u = vc(u)), o = i, u === "")
      continue;
    let l;
    a === -1 ? l = "" : (l = t.slice(a + 1, i === -1 ? void 0 : i), r && (l = vc(l))), n ? (s[u] && Array.isArray(s[u]) || (s[u] = []), s[u].push(l)) : s[u] ?? (s[u] = l);
  }
  return e ? s[e] : s;
}, q$ = Am, U$ = (t, e) => Am(t, e, !0), Na = decodeURIComponent, Cn, Xt, Ah, xm = (Ah = class {
  constructor(t, e = "/", n = [[]]) {
    c(this, "raw");
    pt(this, Cn);
    pt(this, Xt);
    c(this, "routeIndex", 0);
    c(this, "path");
    c(this, "bodyCache", {});
    c(this, "cachedBody", (t) => {
      const { bodyCache: e, raw: n } = this, r = e[t];
      if (r)
        return r;
      const s = Object.keys(e)[0];
      return s ? e[s].then((o) => (s === "json" && (o = JSON.stringify(o)), new Response(o)[t]())) : e[t] = n[t]();
    });
    this.raw = t, this.path = e, D(this, Xt, n), D(this, Cn, {});
  }
  param(t) {
    return t ? this.getDecodedParam(t) : this.getAllDecodedParams();
  }
  getDecodedParam(t) {
    const e = b(this, Xt)[0][this.routeIndex][1][t], n = this.getParamValue(e);
    return n ? /\%/.test(n) ? Na(n) : n : void 0;
  }
  getAllDecodedParams() {
    const t = {}, e = Object.keys(b(this, Xt)[0][this.routeIndex][1]);
    for (const n of e) {
      const r = this.getParamValue(b(this, Xt)[0][this.routeIndex][1][n]);
      r && typeof r == "string" && (t[n] = /\%/.test(r) ? Na(r) : r);
    }
    return t;
  }
  getParamValue(t) {
    return b(this, Xt)[1] ? b(this, Xt)[1][t] : t;
  }
  query(t) {
    return q$(this.url, t);
  }
  queries(t) {
    return U$(this.url, t);
  }
  header(t) {
    if (t)
      return this.raw.headers.get(t.toLowerCase()) ?? void 0;
    const e = {};
    return this.raw.headers.forEach((n, r) => {
      e[r] = n;
    }), e;
  }
  async parseBody(t) {
    var e;
    return (e = this.bodyCache).parsedBody ?? (e.parsedBody = await N$(this, t));
  }
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(t, e) {
    b(this, Cn)[t] = e;
  }
  valid(t) {
    return b(this, Cn)[t];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return b(this, Xt)[0].map(([[, t]]) => t);
  }
  get routePath() {
    return b(this, Xt)[0].map(([[, t]]) => t)[this.routeIndex].path;
  }
}, Cn = new WeakMap(), Xt = new WeakMap(), Ah), D$ = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
}, Pm = async (t, e, n, r, s) => {
  const o = t.callbacks;
  return o != null && o.length ? (s ? s[0] += t : s = [t], Promise.all(o.map((a) => a({ phase: e, buffer: s, context: r }))).then(
    (a) => Promise.all(
      a.filter(Boolean).map((u) => Pm(u, e, !1, r, s))
    ).then(() => s[0])
  )) : Promise.resolve(t);
}, J$ = "text/plain; charset=UTF-8", Tc = (t, e = {}) => (Object.entries(e).forEach(([n, r]) => t.set(n, r)), t), Ks, qs, Ce, Ze, Te, X, st, Zt, $e, Us, Fn, jn, Ds, Js, xh, $o = (xh = class {
  constructor(t, e) {
    pt(this, Ks);
    pt(this, qs);
    c(this, "env", {});
    pt(this, Ce);
    c(this, "finalized", !1);
    c(this, "error");
    pt(this, Ze, 200);
    pt(this, Te);
    pt(this, X);
    pt(this, st);
    pt(this, Zt);
    pt(this, $e, !0);
    pt(this, Us);
    pt(this, Fn);
    pt(this, jn);
    pt(this, Ds);
    pt(this, Js);
    c(this, "render", (...t) => (b(this, Fn) ?? D(this, Fn, (e) => this.html(e)), b(this, Fn).call(this, ...t)));
    c(this, "setLayout", (t) => D(this, Us, t));
    c(this, "getLayout", () => b(this, Us));
    c(this, "setRenderer", (t) => {
      D(this, Fn, t);
    });
    c(this, "header", (t, e, n) => {
      if (e === void 0) {
        b(this, X) ? b(this, X).delete(t) : b(this, st) && delete b(this, st)[t.toLocaleLowerCase()], this.finalized && this.res.headers.delete(t);
        return;
      }
      n != null && n.append ? (b(this, X) || (D(this, $e, !1), D(this, X, new Headers(b(this, st))), D(this, st, {})), b(this, X).append(t, e)) : b(this, X) ? b(this, X).set(t, e) : (b(this, st) ?? D(this, st, {}), b(this, st)[t.toLowerCase()] = e), this.finalized && (n != null && n.append ? this.res.headers.append(t, e) : this.res.headers.set(t, e));
    });
    c(this, "status", (t) => {
      D(this, $e, !1), D(this, Ze, t);
    });
    c(this, "set", (t, e) => {
      b(this, Ce) ?? D(this, Ce, {}), b(this, Ce)[t] = e;
    });
    c(this, "get", (t) => b(this, Ce) ? b(this, Ce)[t] : void 0);
    c(this, "newResponse", (t, e, n) => {
      if (b(this, $e) && !n && !e && b(this, Ze) === 200)
        return new Response(t, {
          headers: b(this, st)
        });
      if (e && typeof e != "number") {
        const s = new Headers(e.headers);
        b(this, X) && b(this, X).forEach((i, a) => {
          a === "set-cookie" ? s.append(a, i) : s.set(a, i);
        });
        const o = Tc(s, b(this, st));
        return new Response(t, {
          headers: o,
          status: e.status ?? b(this, Ze)
        });
      }
      const r = typeof e == "number" ? e : b(this, Ze);
      b(this, st) ?? D(this, st, {}), b(this, X) ?? D(this, X, new Headers()), Tc(b(this, X), b(this, st)), b(this, Zt) && (b(this, Zt).headers.forEach((s, o) => {
        var i, a;
        o === "set-cookie" ? (i = b(this, X)) == null || i.append(o, s) : (a = b(this, X)) == null || a.set(o, s);
      }), Tc(b(this, X), b(this, st))), n ?? (n = {});
      for (const [s, o] of Object.entries(n))
        if (typeof o == "string")
          b(this, X).set(s, o);
        else {
          b(this, X).delete(s);
          for (const i of o)
            b(this, X).append(s, i);
        }
      return new Response(t, {
        status: r,
        headers: b(this, X)
      });
    });
    c(this, "body", (t, e, n) => typeof e == "number" ? this.newResponse(t, e, n) : this.newResponse(t, e));
    c(this, "text", (t, e, n) => {
      if (!b(this, st)) {
        if (b(this, $e) && !n && !e)
          return new Response(t);
        D(this, st, {});
      }
      return b(this, st)["content-type"] = J$, typeof e == "number" ? this.newResponse(t, e, n) : this.newResponse(t, e);
    });
    c(this, "json", (t, e, n) => {
      const r = JSON.stringify(t);
      return b(this, st) ?? D(this, st, {}), b(this, st)["content-type"] = "application/json; charset=UTF-8", typeof e == "number" ? this.newResponse(r, e, n) : this.newResponse(r, e);
    });
    c(this, "html", (t, e, n) => (b(this, st) ?? D(this, st, {}), b(this, st)["content-type"] = "text/html; charset=UTF-8", typeof t == "object" && (t instanceof Promise || (t = t.toString()), t instanceof Promise) ? t.then((r) => Pm(r, D$.Stringify, !1, {})).then((r) => typeof e == "number" ? this.newResponse(r, e, n) : this.newResponse(r, e)) : typeof e == "number" ? this.newResponse(t, e, n) : this.newResponse(t, e)));
    c(this, "redirect", (t, e) => (b(this, X) ?? D(this, X, new Headers()), b(this, X).set("Location", t), this.newResponse(null, e ?? 302)));
    c(this, "notFound", () => (b(this, jn) ?? D(this, jn, () => new Response()), b(this, jn).call(this, this)));
    D(this, Ks, t), e && (D(this, Te, e.executionCtx), this.env = e.env, D(this, jn, e.notFoundHandler), D(this, Js, e.path), D(this, Ds, e.matchResult));
  }
  get req() {
    return b(this, qs) ?? D(this, qs, new xm(b(this, Ks), b(this, Js), b(this, Ds))), b(this, qs);
  }
  get event() {
    if (b(this, Te) && "respondWith" in b(this, Te))
      return b(this, Te);
    throw Error("This context has no FetchEvent");
  }
  get executionCtx() {
    if (b(this, Te))
      return b(this, Te);
    throw Error("This context has no ExecutionContext");
  }
  get res() {
    return D(this, $e, !1), b(this, Zt) || D(this, Zt, new Response("404 Not Found", { status: 404 }));
  }
  set res(t) {
    if (D(this, $e, !1), b(this, Zt) && t) {
      b(this, Zt).headers.delete("content-type");
      for (const [e, n] of b(this, Zt).headers.entries())
        if (e === "set-cookie") {
          const r = b(this, Zt).headers.getSetCookie();
          t.headers.delete("set-cookie");
          for (const s of r)
            t.headers.append("set-cookie", s);
        } else
          t.headers.set(e, n);
    }
    D(this, Zt, t), this.finalized = !0;
  }
  get var() {
    return { ...b(this, Ce) };
  }
}, Ks = new WeakMap(), qs = new WeakMap(), Ce = new WeakMap(), Ze = new WeakMap(), Te = new WeakMap(), X = new WeakMap(), st = new WeakMap(), Zt = new WeakMap(), $e = new WeakMap(), Us = new WeakMap(), Fn = new WeakMap(), jn = new WeakMap(), Ds = new WeakMap(), Js = new WeakMap(), xh), Uf = (t, e, n) => (r, s) => {
  let o = -1;
  return i(0);
  async function i(a) {
    if (a <= o)
      throw new Error("next() called multiple times");
    o = a;
    let u, l = !1, f;
    if (t[a] ? (f = t[a][0][0], r instanceof $o && (r.req.routeIndex = a)) : f = a === t.length && s || void 0, !f)
      r instanceof $o && r.finalized === !1 && n && (u = await n(r));
    else
      try {
        u = await f(r, () => i(a + 1));
      } catch (h) {
        if (h instanceof Error && r instanceof $o && e)
          r.error = h, u = await e(h, r), l = !0;
        else
          throw h;
      }
    return u && (r.finalized === !1 || l) && (r.res = u), r;
  }
}, gt = "ALL", B$ = "all", H$ = ["get", "post", "put", "delete", "options", "patch"], Cm = "Can not add a route since the matcher is already built.", Fm = class extends Error {
}, V$ = Symbol("composedHandler"), G$ = (t) => t.text("404 Not Found", 404), Df = (t, e) => "getResponse" in t ? t.getResponse() : (console.error(t), e.text("Internal Server Error", 500)), te, Ph, jm = (Ph = class {
  constructor(e = {}) {
    c(this, "get");
    c(this, "post");
    c(this, "put");
    c(this, "delete");
    c(this, "options");
    c(this, "patch");
    c(this, "all");
    c(this, "on");
    c(this, "use");
    c(this, "router");
    c(this, "getPath");
    c(this, "_basePath", "/");
    pt(this, te, "/");
    c(this, "routes", []);
    c(this, "notFoundHandler", G$);
    c(this, "errorHandler", Df);
    c(this, "onError", (e) => (this.errorHandler = e, this));
    c(this, "notFound", (e) => (this.notFoundHandler = e, this));
    c(this, "fetch", (e, ...n) => this.dispatch(e, n[1], n[0], e.method));
    c(this, "request", (e, n, r, s) => {
      if (e instanceof Request)
        return n !== void 0 && (e = new Request(e, n)), this.fetch(e, r, s);
      e = e.toString();
      const o = /^https?:\/\//.test(e) ? e : `http://localhost${mr("/", e)}`, i = new Request(o, n);
      return this.fetch(i, r, s);
    });
    c(this, "fire", () => {
      addEventListener("fetch", (e) => {
        e.respondWith(this.dispatch(e.request, e, void 0, e.request.method));
      });
    });
    [...H$, B$].forEach((s) => {
      this[s] = (o, ...i) => (typeof o == "string" ? D(this, te, o) : this.addRoute(s, b(this, te), o), i.forEach((a) => {
        typeof a != "string" && this.addRoute(s, b(this, te), a);
      }), this);
    }), this.on = (s, o, ...i) => {
      for (const a of [o].flat()) {
        D(this, te, a);
        for (const u of [s].flat())
          i.map((l) => {
            this.addRoute(u.toUpperCase(), b(this, te), l);
          });
      }
      return this;
    }, this.use = (s, ...o) => (typeof s == "string" ? D(this, te, s) : (D(this, te, "*"), o.unshift(s)), o.forEach((i) => {
      this.addRoute(gt, b(this, te), i);
    }), this);
    const r = e.strict ?? !0;
    delete e.strict, Object.assign(this, e), this.getPath = r ? e.getPath ?? Nm : K$;
  }
  clone() {
    const e = new jm({
      router: this.router,
      getPath: this.getPath
    });
    return e.routes = this.routes, e;
  }
  route(e, n) {
    const r = this.basePath(e);
    return n.routes.map((s) => {
      let o;
      n.errorHandler === Df ? o = s.handler : (o = async (i, a) => (await Uf([], n.errorHandler)(i, () => s.handler(i, a))).res, o[V$] = s.handler), r.addRoute(s.method, s.path, o);
    }), this;
  }
  basePath(e) {
    const n = this.clone();
    return n._basePath = mr(this._basePath, e), n;
  }
  mount(e, n, r) {
    let s, o;
    r && (typeof r == "function" ? o = r : (o = r.optionHandler, s = r.replaceRequest));
    const i = o ? (u) => {
      const l = o(u);
      return Array.isArray(l) ? l : [l];
    } : (u) => {
      let l;
      try {
        l = u.executionCtx;
      } catch {
      }
      return [u.env, l];
    };
    s || (s = (() => {
      const u = mr(this._basePath, e), l = u === "/" ? 0 : u.length;
      return (f) => {
        const h = new URL(f.url);
        return h.pathname = h.pathname.slice(l) || "/", new Request(h, f);
      };
    })());
    const a = async (u, l) => {
      const f = await n(s(u.req.raw), ...i(u));
      if (f)
        return f;
      await l();
    };
    return this.addRoute(gt, mr(e, "*"), a), this;
  }
  addRoute(e, n, r) {
    e = e.toUpperCase(), n = mr(this._basePath, n);
    const s = { path: n, method: e, handler: r };
    this.router.add(e, n, [r, s]), this.routes.push(s);
  }
  matchRoute(e, n) {
    return this.router.match(e, n);
  }
  handleError(e, n) {
    if (e instanceof Error)
      return this.errorHandler(e, n);
    throw e;
  }
  dispatch(e, n, r, s) {
    if (s === "HEAD")
      return (async () => new Response(null, await this.dispatch(e, n, r, "GET")))();
    const o = this.getPath(e, { env: r }), i = this.matchRoute(s, o), a = new $o(e, {
      path: o,
      matchResult: i,
      env: r,
      executionCtx: n,
      notFoundHandler: this.notFoundHandler
    });
    if (i[0].length === 1) {
      let l;
      try {
        l = i[0][0][0][0](a, async () => {
          a.res = await this.notFoundHandler(a);
        });
      } catch (f) {
        return this.handleError(f, a);
      }
      return l instanceof Promise ? l.then(
        (f) => f || (a.finalized ? a.res : this.notFoundHandler(a))
      ).catch((f) => this.handleError(f, a)) : l ?? this.notFoundHandler(a);
    }
    const u = Uf(i[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const l = await u(a);
        if (!l.finalized)
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        return l.res;
      } catch (l) {
        return this.handleError(l, a);
      }
    })();
  }
}, te = new WeakMap(), Ph), li = "[^/]+", $r = ".*", Rr = "(?:|/.*)", wr = Symbol(), W$ = new Set(".\\+*[^]$()");
function z$(t, e) {
  return t.length === 1 ? e.length === 1 ? t < e ? -1 : 1 : -1 : e.length === 1 || t === $r || t === Rr ? 1 : e === $r || e === Rr ? -1 : t === li ? 1 : e === li ? -1 : t.length === e.length ? t < e ? -1 : 1 : e.length - t.length;
}
var Ma = class {
  constructor() {
    c(this, "index");
    c(this, "varIndex");
    c(this, "children", /* @__PURE__ */ Object.create(null));
  }
  insert(e, n, r, s, o) {
    if (e.length === 0) {
      if (this.index !== void 0)
        throw wr;
      if (o)
        return;
      this.index = n;
      return;
    }
    const [i, ...a] = e, u = i === "*" ? a.length === 0 ? ["", "", $r] : ["", "", li] : i === "/*" ? ["", "", Rr] : i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let l;
    if (u) {
      const f = u[1];
      let h = u[2] || li;
      if (f && u[2] && (h = h.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:"), /\((?!\?:)/.test(h)))
        throw wr;
      if (l = this.children[h], !l) {
        if (Object.keys(this.children).some(
          (p) => p !== $r && p !== Rr
        ))
          throw wr;
        if (o)
          return;
        l = this.children[h] = new Ma(), f !== "" && (l.varIndex = s.varIndex++);
      }
      !o && f !== "" && r.push([f, l.varIndex]);
    } else if (l = this.children[i], !l) {
      if (Object.keys(this.children).some(
        (f) => f.length > 1 && f !== $r && f !== Rr
      ))
        throw wr;
      if (o)
        return;
      l = this.children[i] = new Ma();
    }
    l.insert(a, n, r, s, o);
  }
  buildRegExpStr() {
    const n = Object.keys(this.children).sort(z$).map((r) => {
      const s = this.children[r];
      return (typeof s.varIndex == "number" ? `(${r})@${s.varIndex}` : W$.has(r) ? `\\${r}` : r) + s.buildRegExpStr();
    });
    return typeof this.index == "number" && n.unshift(`#${this.index}`), n.length === 0 ? "" : n.length === 1 ? n[0] : "(?:" + n.join("|") + ")";
  }
}, Y$ = class {
  constructor() {
    c(this, "context", { varIndex: 0 });
    c(this, "root", new Ma());
  }
  insert(t, e, n) {
    const r = [], s = [];
    for (let i = 0; ; ) {
      let a = !1;
      if (t = t.replace(/\{[^}]+\}/g, (u) => {
        const l = `@\\${i}`;
        return s[i] = [l, u], i++, a = !0, l;
      }), !a)
        break;
    }
    const o = t.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = s.length - 1; i >= 0; i--) {
      const [a] = s[i];
      for (let u = o.length - 1; u >= 0; u--)
        if (o[u].indexOf(a) !== -1) {
          o[u] = o[u].replace(a, s[i][1]);
          break;
        }
    }
    return this.root.insert(o, e, r, this.context, n), r;
  }
  buildRegExp() {
    let t = this.root.buildRegExpStr();
    if (t === "")
      return [/^$/, [], []];
    let e = 0;
    const n = [], r = [];
    return t = t.replace(/#(\d+)|@(\d+)|\.\*\$/g, (s, o, i) => typeof o < "u" ? (n[++e] = Number(o), "$()") : (typeof i < "u" && (r[Number(i)] = ++e), "")), [new RegExp(`^${t}`), n, r];
  }
}, Lm = [], Q$ = [/^$/, [], /* @__PURE__ */ Object.create(null)], Ro = /* @__PURE__ */ Object.create(null);
function Km(t) {
  return Ro[t] ?? (Ro[t] = new RegExp(
    t === "*" ? "" : `^${t.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (e, n) => n ? `\\${n}` : "(?:|/.*)"
    )}$`
  ));
}
function X$() {
  Ro = /* @__PURE__ */ Object.create(null);
}
function Z$(t) {
  var l;
  const e = new Y$(), n = [];
  if (t.length === 0)
    return Q$;
  const r = t.map(
    (f) => [!/\*|\/:/.test(f[0]), ...f]
  ).sort(
    ([f, h], [p, m]) => f ? 1 : p ? -1 : h.length - m.length
  ), s = /* @__PURE__ */ Object.create(null);
  for (let f = 0, h = -1, p = r.length; f < p; f++) {
    const [m, y, S] = r[f];
    m ? s[y] = [S.map(([O]) => [O, /* @__PURE__ */ Object.create(null)]), Lm] : h++;
    let _;
    try {
      _ = e.insert(y, h, m);
    } catch (O) {
      throw O === wr ? new Fm(y) : O;
    }
    m || (n[h] = S.map(([O, N]) => {
      const I = /* @__PURE__ */ Object.create(null);
      for (N -= 1; N >= 0; N--) {
        const [L, q] = _[N];
        I[L] = q;
      }
      return [O, I];
    }));
  }
  const [o, i, a] = e.buildRegExp();
  for (let f = 0, h = n.length; f < h; f++)
    for (let p = 0, m = n[f].length; p < m; p++) {
      const y = (l = n[f][p]) == null ? void 0 : l[1];
      if (!y)
        continue;
      const S = Object.keys(y);
      for (let _ = 0, O = S.length; _ < O; _++)
        y[S[_]] = a[y[S[_]]];
    }
  const u = [];
  for (const f in i)
    u[f] = n[i[f]];
  return [o, u, s];
}
function En(t, e) {
  if (t) {
    for (const n of Object.keys(t).sort((r, s) => s.length - r.length))
      if (Km(n).test(e))
        return [...t[n]];
  }
}
var tR = class {
  constructor() {
    c(this, "name", "RegExpRouter");
    c(this, "middleware");
    c(this, "routes");
    this.middleware = { [gt]: /* @__PURE__ */ Object.create(null) }, this.routes = { [gt]: /* @__PURE__ */ Object.create(null) };
  }
  add(t, e, n) {
    var a;
    const { middleware: r, routes: s } = this;
    if (!r || !s)
      throw new Error(Cm);
    r[t] || [r, s].forEach((u) => {
      u[t] = /* @__PURE__ */ Object.create(null), Object.keys(u[gt]).forEach((l) => {
        u[t][l] = [...u[gt][l]];
      });
    }), e === "/*" && (e = "*");
    const o = (e.match(/\/:/g) || []).length;
    if (/\*$/.test(e)) {
      const u = Km(e);
      t === gt ? Object.keys(r).forEach((l) => {
        var f;
        (f = r[l])[e] || (f[e] = En(r[l], e) || En(r[gt], e) || []);
      }) : (a = r[t])[e] || (a[e] = En(r[t], e) || En(r[gt], e) || []), Object.keys(r).forEach((l) => {
        (t === gt || t === l) && Object.keys(r[l]).forEach((f) => {
          u.test(f) && r[l][f].push([n, o]);
        });
      }), Object.keys(s).forEach((l) => {
        (t === gt || t === l) && Object.keys(s[l]).forEach(
          (f) => u.test(f) && s[l][f].push([n, o])
        );
      });
      return;
    }
    const i = Mm(e) || [e];
    for (let u = 0, l = i.length; u < l; u++) {
      const f = i[u];
      Object.keys(s).forEach((h) => {
        var p;
        (t === gt || t === h) && ((p = s[h])[f] || (p[f] = [
          ...En(r[h], f) || En(r[gt], f) || []
        ]), s[h][f].push([n, o - l + u + 1]));
      });
    }
  }
  match(t, e) {
    X$();
    const n = this.buildAllMatchers();
    return this.match = (r, s) => {
      const o = n[r] || n[gt], i = o[2][s];
      if (i)
        return i;
      const a = s.match(o[0]);
      if (!a)
        return [[], Lm];
      const u = a.indexOf("", 1);
      return [o[1][u], a];
    }, this.match(t, e);
  }
  buildAllMatchers() {
    const t = /* @__PURE__ */ Object.create(null);
    return [...Object.keys(this.routes), ...Object.keys(this.middleware)].forEach((e) => {
      t[e] || (t[e] = this.buildMatcher(e));
    }), this.middleware = this.routes = void 0, t;
  }
  buildMatcher(t) {
    const e = [];
    let n = t === gt;
    return [this.middleware, this.routes].forEach((r) => {
      const s = r[t] ? Object.keys(r[t]).map((o) => [o, r[t][o]]) : [];
      s.length !== 0 ? (n || (n = !0), e.push(...s)) : t !== gt && e.push(
        ...Object.keys(r[gt]).map((o) => [o, r[gt][o]])
      );
    }), n ? Z$(e) : null;
  }
}, eR = class {
  constructor(t) {
    c(this, "name", "SmartRouter");
    c(this, "routers", []);
    c(this, "routes", []);
    Object.assign(this, t);
  }
  add(t, e, n) {
    if (!this.routes)
      throw new Error(Cm);
    this.routes.push([t, e, n]);
  }
  match(t, e) {
    if (!this.routes)
      throw new Error("Fatal error");
    const { routers: n, routes: r } = this, s = n.length;
    let o = 0, i;
    for (; o < s; o++) {
      const a = n[o];
      try {
        r.forEach((u) => {
          a.add(...u);
        }), i = a.match(t, e);
      } catch (u) {
        if (u instanceof Fm)
          continue;
        throw u;
      }
      this.match = a.match.bind(a), this.routers = [a], this.routes = void 0;
      break;
    }
    if (o === s)
      throw new Error("Fatal error");
    return this.name = `SmartRouter + ${this.activeRouter.name}`, i;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1)
      throw new Error("No active router has been determined yet.");
    return this.routers[0];
  }
}, qm = class {
  constructor(t, e, n) {
    c(this, "methods");
    c(this, "children");
    c(this, "patterns");
    c(this, "order", 0);
    c(this, "name");
    c(this, "params", /* @__PURE__ */ Object.create(null));
    if (this.children = n || /* @__PURE__ */ Object.create(null), this.methods = [], this.name = "", t && e) {
      const r = /* @__PURE__ */ Object.create(null);
      r[t] = { handler: e, possibleKeys: [], score: 0, name: this.name }, this.methods = [r];
    }
    this.patterns = [];
  }
  insert(t, e, n) {
    this.name = `${t} ${e}`, this.order = ++this.order;
    let r = this;
    const s = C$(e), o = [];
    for (let u = 0, l = s.length; u < l; u++) {
      const f = s[u];
      if (Object.keys(r.children).includes(f)) {
        r = r.children[f];
        const p = qf(f);
        p && o.push(p[1]);
        continue;
      }
      r.children[f] = new qm();
      const h = qf(f);
      h && (r.patterns.push(h), o.push(h[1])), r = r.children[f];
    }
    r.methods.length || (r.methods = []);
    const i = /* @__PURE__ */ Object.create(null), a = {
      handler: n,
      possibleKeys: o.filter((u, l, f) => f.indexOf(u) === l),
      name: this.name,
      score: this.order
    };
    return i[t] = a, r.methods.push(i), r;
  }
  gHSets(t, e, n, r) {
    const s = [];
    for (let o = 0, i = t.methods.length; o < i; o++) {
      const a = t.methods[o], u = a[e] || a[gt], l = /* @__PURE__ */ Object.create(null);
      u !== void 0 && (u.params = /* @__PURE__ */ Object.create(null), u.possibleKeys.forEach((f) => {
        const h = l[u.name];
        u.params[f] = r[f] && !h ? r[f] : n[f] ?? r[f], l[u.name] = !0;
      }), s.push(u));
    }
    return s;
  }
  search(t, e) {
    const n = [];
    this.params = /* @__PURE__ */ Object.create(null);
    let s = [this];
    const o = Rm(e);
    for (let a = 0, u = o.length; a < u; a++) {
      const l = o[a], f = a === u - 1, h = [];
      for (let p = 0, m = s.length; p < m; p++) {
        const y = s[p], S = y.children[l];
        S && (S.params = y.params, f === !0 ? (S.children["*"] && n.push(
          ...this.gHSets(S.children["*"], t, y.params, /* @__PURE__ */ Object.create(null))
        ), n.push(...this.gHSets(S, t, y.params, /* @__PURE__ */ Object.create(null)))) : h.push(S));
        for (let _ = 0, O = y.patterns.length; _ < O; _++) {
          const N = y.patterns[_], I = { ...y.params };
          if (N === "*") {
            const J = y.children["*"];
            J && (n.push(...this.gHSets(J, t, y.params, /* @__PURE__ */ Object.create(null))), h.push(J));
            continue;
          }
          if (l === "")
            continue;
          const [L, q, M] = N, T = y.children[L], $ = o.slice(a).join("/");
          if (M instanceof RegExp && M.test($)) {
            I[q] = $, n.push(...this.gHSets(T, t, y.params, I));
            continue;
          }
          (M === !0 || M instanceof RegExp && M.test(l)) && typeof L == "string" && (I[q] = l, f === !0 ? (n.push(...this.gHSets(T, t, I, y.params)), T.children["*"] && n.push(...this.gHSets(T.children["*"], t, I, y.params))) : (T.params = I, h.push(T)));
        }
      }
      s = h;
    }
    return [n.sort((a, u) => a.score - u.score).map(({ handler: a, params: u }) => [a, u])];
  }
}, nR = class {
  constructor() {
    c(this, "name", "TrieRouter");
    c(this, "node");
    this.node = new qm();
  }
  add(t, e, n) {
    const r = Mm(e);
    if (r) {
      for (const s of r)
        this.node.insert(t, s, n);
      return;
    }
    this.node.insert(t, e, n);
  }
  match(t, e) {
    return this.node.search(t, e);
  }
}, rR = class extends jm {
  constructor(t = {}) {
    super(t), this.router = t.router ?? new eR({
      routers: [new tR(), new nR()]
    });
  }
};
const sR = (t) => [
  {
    role: "user",
    content: t || ""
  }
], oR = [
  {
    name: "getWeather",
    description: "Return the weather for a latitude and longitude",
    parameters: {
      type: "object",
      properties: {
        latitude: {
          type: "string",
          description: "The latitude for the given location"
        },
        longitude: {
          type: "string",
          description: "The longitude for the given location"
        }
      },
      required: ["latitude", "longitude"]
    }
  }
], iR = bn({
  prompt: tt
}), cR = bn({
  latitude: tt,
  longitude: tt
}), aR = bn({
  name: tt,
  description: tt,
  parameters: cR
});
bn({
  tool_calls: F1(aR),
  content: tt
});
const uR = (t, e, n, r) => DT(() => t.run(e, { messages: n, tools: r })), xu = new rR();
xu.post("/api/*", async (t) => {
  const e = await t.req.formData();
  return g(
    Oe({ prompt: e.get("prompt") }),
    Mt((n) => $1(iR)(n)),
    Mt(
      ({ prompt: n }) => uR(t.env.AI, "@hf/nousresearch/hermes-2-pro-mistral-7b", sR(n), oR)
    )
  );
});
xu.get("*", (t) => t.env.ASSETS.fetch(t.req.raw));
const $R = {
  fetch: xu.fetch
};
export {
  $R as default
};
