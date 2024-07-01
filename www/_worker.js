var He = Object.defineProperty;
var ce = (t) => {
  throw TypeError(t);
};
var Ae = (t, e, r) => e in t ? He(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var d = (t, e, r) => Ae(t, typeof e != "symbol" ? e + "" : e, r), he = (t, e, r) => e.has(t) || ce("Cannot " + r);
var h = (t, e, r) => (he(t, e, "read from private field"), r ? r.call(t) : e.get(t)), b = (t, e, r) => e.has(t) ? ce("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), p = (t, e, r, s) => (he(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r);
var $e = async (t, e = /* @__PURE__ */ Object.create(null)) => {
  const { all: r = !1, dot: s = !1 } = e, i = (t instanceof be ? t.raw.headers : t.headers).get("Content-Type");
  return i !== null && i.startsWith("multipart/form-data") || i !== null && i.startsWith("application/x-www-form-urlencoded") ? Ie(t, { all: r, dot: s }) : {};
};
async function Ie(t, e) {
  const r = await t.formData();
  return r ? _e(r, e) : {};
}
function _e(t, e) {
  const r = /* @__PURE__ */ Object.create(null);
  return t.forEach((s, n) => {
    e.all || n.endsWith("[]") ? De(r, n, s) : r[n] = s;
  }), e.dot && Object.entries(r).forEach(([s, n]) => {
    s.includes(".") && (Fe(r, s, n), delete r[s]);
  }), r;
}
var De = (t, e, r) => {
  t[e] !== void 0 ? Array.isArray(t[e]) ? t[e].push(r) : t[e] = [t[e], r] : t[e] = r;
}, Fe = (t, e, r) => {
  let s = t;
  const n = e.split(".");
  n.forEach((i, a) => {
    a === n.length - 1 ? s[i] = r : ((!s[i] || typeof s[i] != "object" || Array.isArray(s[i]) || s[i] instanceof File) && (s[i] = /* @__PURE__ */ Object.create(null)), s = s[i]);
  });
}, we = (t) => {
  const e = t.split("/");
  return e[0] === "" && e.shift(), e;
}, Le = (t) => {
  const { groups: e, path: r } = Ce(t), s = we(r);
  return Te(s, e);
}, Ce = (t) => {
  const e = [];
  return t = t.replace(/\{[^}]+\}/g, (r, s) => {
    const n = `@${s}`;
    return e.push([n, r]), n;
  }), { groups: e, path: t };
}, Te = (t, e) => {
  for (let r = e.length - 1; r >= 0; r--) {
    const [s] = e[r];
    for (let n = t.length - 1; n >= 0; n--)
      if (t[n].includes(s)) {
        t[n] = t[n].replace(s, e[r][1]);
        break;
      }
  }
  return t;
}, Q = {}, le = (t) => {
  if (t === "*")
    return "*";
  const e = t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  return e ? (Q[t] || (e[2] ? Q[t] = [t, e[1], new RegExp("^" + e[2] + "$")] : Q[t] = [t, e[1], !0]), Q[t]) : null;
}, Ne = (t) => {
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
}, me = (t) => {
  const e = t.url, r = e.indexOf("/", 8);
  let s = r;
  for (; s < e.length; s++) {
    const n = e.charCodeAt(s);
    if (n === 37) {
      const i = e.indexOf("?", s), a = e.slice(r, i === -1 ? void 0 : i);
      return Ne(a.includes("%25") ? a.replace(/%25/g, "%2525") : a);
    } else if (n === 63)
      break;
  }
  return e.slice(r, s);
}, Me = (t) => {
  const e = me(t);
  return e.length > 1 && e[e.length - 1] === "/" ? e.slice(0, -1) : e;
}, B = (...t) => {
  let e = "", r = !1;
  for (let s of t)
    e[e.length - 1] === "/" && (e = e.slice(0, -1), r = !0), s[0] !== "/" && (s = `/${s}`), s === "/" && r ? e = `${e}/` : s !== "/" && (e = `${e}${s}`), s === "/" && e === "" && (e = "/");
  return e;
}, Re = (t) => {
  if (!t.match(/\:.+\?$/))
    return null;
  const e = t.split("/"), r = [];
  let s = "";
  return e.forEach((n) => {
    if (n !== "" && !/\:/.test(n))
      s += "/" + n;
    else if (/\:/.test(n))
      if (/\?/.test(n)) {
        r.length === 0 && s === "" ? r.push("/") : r.push(s);
        const i = n.replace("?", "");
        s += "/" + i, r.push(s);
      } else
        s += "/" + n;
  }), r.filter((n, i, a) => a.indexOf(n) === i);
}, re = (t) => /[%+]/.test(t) ? (t.indexOf("+") !== -1 && (t = t.replace(/\+/g, " ")), /%/.test(t) ? ne(t) : t) : t, ye = (t, e, r) => {
  let s;
  if (!r && e && !/[%+]/.test(e)) {
    let a = t.indexOf(`?${e}`, 8);
    for (a === -1 && (a = t.indexOf(`&${e}`, 8)); a !== -1; ) {
      const c = t.charCodeAt(a + e.length + 1);
      if (c === 61) {
        const o = a + e.length + 2, l = t.indexOf("&", o);
        return re(t.slice(o, l === -1 ? void 0 : l));
      } else if (c == 38 || isNaN(c))
        return "";
      a = t.indexOf(`&${e}`, a + 1);
    }
    if (s = /[%+]/.test(t), !s)
      return;
  }
  const n = {};
  s ?? (s = /[%+]/.test(t));
  let i = t.indexOf("?", 8);
  for (; i !== -1; ) {
    const a = t.indexOf("&", i + 1);
    let c = t.indexOf("=", i);
    c > a && a !== -1 && (c = -1);
    let o = t.slice(
      i + 1,
      c === -1 ? a === -1 ? void 0 : a : c
    );
    if (s && (o = re(o)), i = a, o === "")
      continue;
    let l;
    c === -1 ? l = "" : (l = t.slice(c + 1, a === -1 ? void 0 : a), s && (l = re(l))), r ? (n[o] && Array.isArray(n[o]) || (n[o] = []), n[o].push(l)) : n[o] ?? (n[o] = l);
  }
  return e ? n[e] : n;
}, Be = ye, qe = (t, e) => ye(t, e, !0), ne = decodeURIComponent, C, x, fe, be = (fe = class {
  constructor(t, e = "/", r = [[]]) {
    d(this, "raw");
    b(this, C);
    b(this, x);
    d(this, "routeIndex", 0);
    d(this, "path");
    d(this, "bodyCache", {});
    d(this, "cachedBody", (t) => {
      const { bodyCache: e, raw: r } = this, s = e[t];
      if (s)
        return s;
      const n = Object.keys(e)[0];
      return n ? e[n].then((i) => (n === "json" && (i = JSON.stringify(i)), new Response(i)[t]())) : e[t] = r[t]();
    });
    this.raw = t, this.path = e, p(this, x, r), p(this, C, {});
  }
  param(t) {
    return t ? this.getDecodedParam(t) : this.getAllDecodedParams();
  }
  getDecodedParam(t) {
    const e = h(this, x)[0][this.routeIndex][1][t], r = this.getParamValue(e);
    return r ? /\%/.test(r) ? ne(r) : r : void 0;
  }
  getAllDecodedParams() {
    const t = {}, e = Object.keys(h(this, x)[0][this.routeIndex][1]);
    for (const r of e) {
      const s = this.getParamValue(h(this, x)[0][this.routeIndex][1][r]);
      s && typeof s == "string" && (t[r] = /\%/.test(s) ? ne(s) : s);
    }
    return t;
  }
  getParamValue(t) {
    return h(this, x)[1] ? h(this, x)[1][t] : t;
  }
  query(t) {
    return Be(this.url, t);
  }
  queries(t) {
    return qe(this.url, t);
  }
  header(t) {
    if (t)
      return this.raw.headers.get(t.toLowerCase()) ?? void 0;
    const e = {};
    return this.raw.headers.forEach((r, s) => {
      e[s] = r;
    }), e;
  }
  async parseBody(t) {
    var e;
    return (e = this.bodyCache).parsedBody ?? (e.parsedBody = await $e(this, t));
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
    h(this, C)[t] = e;
  }
  valid(t) {
    return h(this, C)[t];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return h(this, x)[0].map(([[, t]]) => t);
  }
  get routePath() {
    return h(this, x)[0].map(([[, t]]) => t)[this.routeIndex].path;
  }
}, C = new WeakMap(), x = new WeakMap(), fe), Ue = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
}, ve = async (t, e, r, s, n) => {
  const i = t.callbacks;
  return i != null && i.length ? (n ? n[0] += t : n = [t], Promise.all(i.map((c) => c({ phase: e, buffer: n, context: s }))).then(
    (c) => Promise.all(
      c.filter(Boolean).map((o) => ve(o, e, !1, s, n))
    ).then(() => n[0])
  )) : Promise.resolve(t);
}, We = "text/plain; charset=UTF-8", se = (t, e = {}) => (Object.entries(e).forEach(([r, s]) => t.set(r, s)), t), k, K, I, D, A, g, m, O, $, V, T, N, z, G, pe, Y = (pe = class {
  constructor(t, e) {
    b(this, k);
    b(this, K);
    d(this, "env", {});
    b(this, I);
    d(this, "finalized", !1);
    d(this, "error");
    b(this, D, 200);
    b(this, A);
    b(this, g);
    b(this, m);
    b(this, O);
    b(this, $, !0);
    b(this, V);
    b(this, T);
    b(this, N);
    b(this, z);
    b(this, G);
    d(this, "render", (...t) => (h(this, T) ?? p(this, T, (e) => this.html(e)), h(this, T).call(this, ...t)));
    d(this, "setLayout", (t) => p(this, V, t));
    d(this, "getLayout", () => h(this, V));
    d(this, "setRenderer", (t) => {
      p(this, T, t);
    });
    d(this, "header", (t, e, r) => {
      if (e === void 0) {
        h(this, g) ? h(this, g).delete(t) : h(this, m) && delete h(this, m)[t.toLocaleLowerCase()], this.finalized && this.res.headers.delete(t);
        return;
      }
      r != null && r.append ? (h(this, g) || (p(this, $, !1), p(this, g, new Headers(h(this, m))), p(this, m, {})), h(this, g).append(t, e)) : h(this, g) ? h(this, g).set(t, e) : (h(this, m) ?? p(this, m, {}), h(this, m)[t.toLowerCase()] = e), this.finalized && (r != null && r.append ? this.res.headers.append(t, e) : this.res.headers.set(t, e));
    });
    d(this, "status", (t) => {
      p(this, $, !1), p(this, D, t);
    });
    d(this, "set", (t, e) => {
      h(this, I) ?? p(this, I, {}), h(this, I)[t] = e;
    });
    d(this, "get", (t) => h(this, I) ? h(this, I)[t] : void 0);
    d(this, "newResponse", (t, e, r) => {
      if (h(this, $) && !r && !e && h(this, D) === 200)
        return new Response(t, {
          headers: h(this, m)
        });
      if (e && typeof e != "number") {
        const n = new Headers(e.headers);
        h(this, g) && h(this, g).forEach((a, c) => {
          c === "set-cookie" ? n.append(c, a) : n.set(c, a);
        });
        const i = se(n, h(this, m));
        return new Response(t, {
          headers: i,
          status: e.status ?? h(this, D)
        });
      }
      const s = typeof e == "number" ? e : h(this, D);
      h(this, m) ?? p(this, m, {}), h(this, g) ?? p(this, g, new Headers()), se(h(this, g), h(this, m)), h(this, O) && (h(this, O).headers.forEach((n, i) => {
        var a, c;
        i === "set-cookie" ? (a = h(this, g)) == null || a.append(i, n) : (c = h(this, g)) == null || c.set(i, n);
      }), se(h(this, g), h(this, m))), r ?? (r = {});
      for (const [n, i] of Object.entries(r))
        if (typeof i == "string")
          h(this, g).set(n, i);
        else {
          h(this, g).delete(n);
          for (const a of i)
            h(this, g).append(n, a);
        }
      return new Response(t, {
        status: s,
        headers: h(this, g)
      });
    });
    d(this, "body", (t, e, r) => typeof e == "number" ? this.newResponse(t, e, r) : this.newResponse(t, e));
    d(this, "text", (t, e, r) => {
      if (!h(this, m)) {
        if (h(this, $) && !r && !e)
          return new Response(t);
        p(this, m, {});
      }
      return h(this, m)["content-type"] = We, typeof e == "number" ? this.newResponse(t, e, r) : this.newResponse(t, e);
    });
    d(this, "json", (t, e, r) => {
      const s = JSON.stringify(t);
      return h(this, m) ?? p(this, m, {}), h(this, m)["content-type"] = "application/json; charset=UTF-8", typeof e == "number" ? this.newResponse(s, e, r) : this.newResponse(s, e);
    });
    d(this, "html", (t, e, r) => (h(this, m) ?? p(this, m, {}), h(this, m)["content-type"] = "text/html; charset=UTF-8", typeof t == "object" && (t instanceof Promise || (t = t.toString()), t instanceof Promise) ? t.then((s) => ve(s, Ue.Stringify, !1, {})).then((s) => typeof e == "number" ? this.newResponse(s, e, r) : this.newResponse(s, e)) : typeof e == "number" ? this.newResponse(t, e, r) : this.newResponse(t, e)));
    d(this, "redirect", (t, e) => (h(this, g) ?? p(this, g, new Headers()), h(this, g).set("Location", t), this.newResponse(null, e ?? 302)));
    d(this, "notFound", () => (h(this, N) ?? p(this, N, () => new Response()), h(this, N).call(this, this)));
    p(this, k, t), e && (p(this, A, e.executionCtx), this.env = e.env, p(this, N, e.notFoundHandler), p(this, G, e.path), p(this, z, e.matchResult));
  }
  get req() {
    return h(this, K) ?? p(this, K, new be(h(this, k), h(this, G), h(this, z))), h(this, K);
  }
  get event() {
    if (h(this, A) && "respondWith" in h(this, A))
      return h(this, A);
    throw Error("This context has no FetchEvent");
  }
  get executionCtx() {
    if (h(this, A))
      return h(this, A);
    throw Error("This context has no ExecutionContext");
  }
  get res() {
    return p(this, $, !1), h(this, O) || p(this, O, new Response("404 Not Found", { status: 404 }));
  }
  set res(t) {
    if (p(this, $, !1), h(this, O) && t) {
      h(this, O).headers.delete("content-type");
      for (const [e, r] of h(this, O).headers.entries())
        if (e === "set-cookie") {
          const s = h(this, O).headers.getSetCookie();
          t.headers.delete("set-cookie");
          for (const n of s)
            t.headers.append("set-cookie", n);
        } else
          t.headers.set(e, r);
    }
    p(this, O, t), this.finalized = !0;
  }
  get var() {
    return { ...h(this, I) };
  }
}, k = new WeakMap(), K = new WeakMap(), I = new WeakMap(), D = new WeakMap(), A = new WeakMap(), g = new WeakMap(), m = new WeakMap(), O = new WeakMap(), $ = new WeakMap(), V = new WeakMap(), T = new WeakMap(), N = new WeakMap(), z = new WeakMap(), G = new WeakMap(), pe), ue = (t, e, r) => (s, n) => {
  let i = -1;
  return a(0);
  async function a(c) {
    if (c <= i)
      throw new Error("next() called multiple times");
    i = c;
    let o, l = !1, u;
    if (t[c] ? (u = t[c][0][0], s instanceof Y && (s.req.routeIndex = c)) : u = c === t.length && n || void 0, !u)
      s instanceof Y && s.finalized === !1 && r && (o = await r(s));
    else
      try {
        o = await u(s, () => a(c + 1));
      } catch (f) {
        if (f instanceof Error && s instanceof Y && e)
          s.error = f, o = await e(f, s), l = !0;
        else
          throw f;
      }
    return o && (s.finalized === !1 || l) && (s.res = o), s;
  }
}, y = "ALL", ke = "all", Ke = ["get", "post", "put", "delete", "options", "patch"], Ee = "Can not add a route since the matcher is already built.", xe = class extends Error {
}, Ve = Symbol("composedHandler"), ze = (t) => t.text("404 Not Found", 404), de = (t, e) => "getResponse" in t ? t.getResponse() : (console.error(t), e.text("Internal Server Error", 500)), j, ge, Oe = (ge = class {
  constructor(e = {}) {
    d(this, "get");
    d(this, "post");
    d(this, "put");
    d(this, "delete");
    d(this, "options");
    d(this, "patch");
    d(this, "all");
    d(this, "on");
    d(this, "use");
    d(this, "router");
    d(this, "getPath");
    d(this, "_basePath", "/");
    b(this, j, "/");
    d(this, "routes", []);
    d(this, "notFoundHandler", ze);
    d(this, "errorHandler", de);
    d(this, "onError", (e) => (this.errorHandler = e, this));
    d(this, "notFound", (e) => (this.notFoundHandler = e, this));
    d(this, "fetch", (e, ...r) => this.dispatch(e, r[1], r[0], e.method));
    d(this, "request", (e, r, s, n) => {
      if (e instanceof Request)
        return r !== void 0 && (e = new Request(e, r)), this.fetch(e, s, n);
      e = e.toString();
      const i = /^https?:\/\//.test(e) ? e : `http://localhost${B("/", e)}`, a = new Request(i, r);
      return this.fetch(a, s, n);
    });
    d(this, "fire", () => {
      addEventListener("fetch", (e) => {
        e.respondWith(this.dispatch(e.request, e, void 0, e.request.method));
      });
    });
    [...Ke, ke].forEach((n) => {
      this[n] = (i, ...a) => (typeof i == "string" ? p(this, j, i) : this.addRoute(n, h(this, j), i), a.forEach((c) => {
        typeof c != "string" && this.addRoute(n, h(this, j), c);
      }), this);
    }), this.on = (n, i, ...a) => {
      for (const c of [i].flat()) {
        p(this, j, c);
        for (const o of [n].flat())
          a.map((l) => {
            this.addRoute(o.toUpperCase(), h(this, j), l);
          });
      }
      return this;
    }, this.use = (n, ...i) => (typeof n == "string" ? p(this, j, n) : (p(this, j, "*"), i.unshift(n)), i.forEach((a) => {
      this.addRoute(y, h(this, j), a);
    }), this);
    const s = e.strict ?? !0;
    delete e.strict, Object.assign(this, e), this.getPath = s ? e.getPath ?? me : Me;
  }
  clone() {
    const e = new Oe({
      router: this.router,
      getPath: this.getPath
    });
    return e.routes = this.routes, e;
  }
  route(e, r) {
    const s = this.basePath(e);
    return r.routes.map((n) => {
      let i;
      r.errorHandler === de ? i = n.handler : (i = async (a, c) => (await ue([], r.errorHandler)(a, () => n.handler(a, c))).res, i[Ve] = n.handler), s.addRoute(n.method, n.path, i);
    }), this;
  }
  basePath(e) {
    const r = this.clone();
    return r._basePath = B(this._basePath, e), r;
  }
  mount(e, r, s) {
    let n, i;
    s && (typeof s == "function" ? i = s : (i = s.optionHandler, n = s.replaceRequest));
    const a = i ? (o) => {
      const l = i(o);
      return Array.isArray(l) ? l : [l];
    } : (o) => {
      let l;
      try {
        l = o.executionCtx;
      } catch {
      }
      return [o.env, l];
    };
    n || (n = (() => {
      const o = B(this._basePath, e), l = o === "/" ? 0 : o.length;
      return (u) => {
        const f = new URL(u.url);
        return f.pathname = f.pathname.slice(l) || "/", new Request(f, u);
      };
    })());
    const c = async (o, l) => {
      const u = await r(n(o.req.raw), ...a(o));
      if (u)
        return u;
      await l();
    };
    return this.addRoute(y, B(e, "*"), c), this;
  }
  addRoute(e, r, s) {
    e = e.toUpperCase(), r = B(this._basePath, r);
    const n = { path: r, method: e, handler: s };
    this.router.add(e, r, [s, n]), this.routes.push(n);
  }
  matchRoute(e, r) {
    return this.router.match(e, r);
  }
  handleError(e, r) {
    if (e instanceof Error)
      return this.errorHandler(e, r);
    throw e;
  }
  dispatch(e, r, s, n) {
    if (n === "HEAD")
      return (async () => new Response(null, await this.dispatch(e, r, s, "GET")))();
    const i = this.getPath(e, { env: s }), a = this.matchRoute(n, i), c = new Y(e, {
      path: i,
      matchResult: a,
      env: s,
      executionCtx: r,
      notFoundHandler: this.notFoundHandler
    });
    if (a[0].length === 1) {
      let l;
      try {
        l = a[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (u) {
        return this.handleError(u, c);
      }
      return l instanceof Promise ? l.then(
        (u) => u || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((u) => this.handleError(u, c)) : l ?? this.notFoundHandler(c);
    }
    const o = ue(a[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const l = await o(c);
        if (!l.finalized)
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        return l.res;
      } catch (l) {
        return this.handleError(l, c);
      }
    })();
  }
}, j = new WeakMap(), ge), ee = "[^/]+", U = ".*", W = "(?:|/.*)", q = Symbol(), Ge = new Set(".\\+*[^]$()");
function Xe(t, e) {
  return t.length === 1 ? e.length === 1 ? t < e ? -1 : 1 : -1 : e.length === 1 || t === U || t === W ? 1 : e === U || e === W ? -1 : t === ee ? 1 : e === ee ? -1 : t.length === e.length ? t < e ? -1 : 1 : e.length - t.length;
}
var ie = class {
  constructor() {
    d(this, "index");
    d(this, "varIndex");
    d(this, "children", /* @__PURE__ */ Object.create(null));
  }
  insert(e, r, s, n, i) {
    if (e.length === 0) {
      if (this.index !== void 0)
        throw q;
      if (i)
        return;
      this.index = r;
      return;
    }
    const [a, ...c] = e, o = a === "*" ? c.length === 0 ? ["", "", U] : ["", "", ee] : a === "/*" ? ["", "", W] : a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let l;
    if (o) {
      const u = o[1];
      let f = o[2] || ee;
      if (u && o[2] && (f = f.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:"), /\((?!\?:)/.test(f)))
        throw q;
      if (l = this.children[f], !l) {
        if (Object.keys(this.children).some(
          (R) => R !== U && R !== W
        ))
          throw q;
        if (i)
          return;
        l = this.children[f] = new ie(), u !== "" && (l.varIndex = n.varIndex++);
      }
      !i && u !== "" && s.push([u, l.varIndex]);
    } else if (l = this.children[a], !l) {
      if (Object.keys(this.children).some(
        (u) => u.length > 1 && u !== U && u !== W
      ))
        throw q;
      if (i)
        return;
      l = this.children[a] = new ie();
    }
    l.insert(c, r, s, n, i);
  }
  buildRegExpStr() {
    const r = Object.keys(this.children).sort(Xe).map((s) => {
      const n = this.children[s];
      return (typeof n.varIndex == "number" ? `(${s})@${n.varIndex}` : Ge.has(s) ? `\\${s}` : s) + n.buildRegExpStr();
    });
    return typeof this.index == "number" && r.unshift(`#${this.index}`), r.length === 0 ? "" : r.length === 1 ? r[0] : "(?:" + r.join("|") + ")";
  }
}, Je = class {
  constructor() {
    d(this, "context", { varIndex: 0 });
    d(this, "root", new ie());
  }
  insert(t, e, r) {
    const s = [], n = [];
    for (let a = 0; ; ) {
      let c = !1;
      if (t = t.replace(/\{[^}]+\}/g, (o) => {
        const l = `@\\${a}`;
        return n[a] = [l, o], a++, c = !0, l;
      }), !c)
        break;
    }
    const i = t.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let a = n.length - 1; a >= 0; a--) {
      const [c] = n[a];
      for (let o = i.length - 1; o >= 0; o--)
        if (i[o].indexOf(c) !== -1) {
          i[o] = i[o].replace(c, n[a][1]);
          break;
        }
    }
    return this.root.insert(i, e, s, this.context, r), s;
  }
  buildRegExp() {
    let t = this.root.buildRegExpStr();
    if (t === "")
      return [/^$/, [], []];
    let e = 0;
    const r = [], s = [];
    return t = t.replace(/#(\d+)|@(\d+)|\.\*\$/g, (n, i, a) => typeof i < "u" ? (r[++e] = Number(i), "$()") : (typeof a < "u" && (s[Number(a)] = ++e), "")), [new RegExp(`^${t}`), r, s];
  }
}, je = [], Qe = [/^$/, [], /* @__PURE__ */ Object.create(null)], Z = /* @__PURE__ */ Object.create(null);
function Pe(t) {
  return Z[t] ?? (Z[t] = new RegExp(
    t === "*" ? "" : `^${t.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (e, r) => r ? `\\${r}` : "(?:|/.*)"
    )}$`
  ));
}
function Ye() {
  Z = /* @__PURE__ */ Object.create(null);
}
function Ze(t) {
  var l;
  const e = new Je(), r = [];
  if (t.length === 0)
    return Qe;
  const s = t.map(
    (u) => [!/\*|\/:/.test(u[0]), ...u]
  ).sort(
    ([u, f], [R, S]) => u ? 1 : R ? -1 : f.length - S.length
  ), n = /* @__PURE__ */ Object.create(null);
  for (let u = 0, f = -1, R = s.length; u < R; u++) {
    const [S, w, v] = s[u];
    S ? n[w] = [v.map(([P]) => [P, /* @__PURE__ */ Object.create(null)]), je] : f++;
    let E;
    try {
      E = e.insert(w, f, S);
    } catch (P) {
      throw P === q ? new xe(w) : P;
    }
    S || (r[f] = v.map(([P, _]) => {
      const H = /* @__PURE__ */ Object.create(null);
      for (_ -= 1; _ >= 0; _--) {
        const [X, J] = E[_];
        H[X] = J;
      }
      return [P, H];
    }));
  }
  const [i, a, c] = e.buildRegExp();
  for (let u = 0, f = r.length; u < f; u++)
    for (let R = 0, S = r[u].length; R < S; R++) {
      const w = (l = r[u][R]) == null ? void 0 : l[1];
      if (!w)
        continue;
      const v = Object.keys(w);
      for (let E = 0, P = v.length; E < P; E++)
        w[v[E]] = c[w[v[E]]];
    }
  const o = [];
  for (const u in a)
    o[u] = r[a[u]];
  return [i, o, n];
}
function L(t, e) {
  if (t) {
    for (const r of Object.keys(t).sort((s, n) => n.length - s.length))
      if (Pe(r).test(e))
        return [...t[r]];
  }
}
var et = class {
  constructor() {
    d(this, "name", "RegExpRouter");
    d(this, "middleware");
    d(this, "routes");
    this.middleware = { [y]: /* @__PURE__ */ Object.create(null) }, this.routes = { [y]: /* @__PURE__ */ Object.create(null) };
  }
  add(t, e, r) {
    var c;
    const { middleware: s, routes: n } = this;
    if (!s || !n)
      throw new Error(Ee);
    s[t] || [s, n].forEach((o) => {
      o[t] = /* @__PURE__ */ Object.create(null), Object.keys(o[y]).forEach((l) => {
        o[t][l] = [...o[y][l]];
      });
    }), e === "/*" && (e = "*");
    const i = (e.match(/\/:/g) || []).length;
    if (/\*$/.test(e)) {
      const o = Pe(e);
      t === y ? Object.keys(s).forEach((l) => {
        var u;
        (u = s[l])[e] || (u[e] = L(s[l], e) || L(s[y], e) || []);
      }) : (c = s[t])[e] || (c[e] = L(s[t], e) || L(s[y], e) || []), Object.keys(s).forEach((l) => {
        (t === y || t === l) && Object.keys(s[l]).forEach((u) => {
          o.test(u) && s[l][u].push([r, i]);
        });
      }), Object.keys(n).forEach((l) => {
        (t === y || t === l) && Object.keys(n[l]).forEach(
          (u) => o.test(u) && n[l][u].push([r, i])
        );
      });
      return;
    }
    const a = Re(e) || [e];
    for (let o = 0, l = a.length; o < l; o++) {
      const u = a[o];
      Object.keys(n).forEach((f) => {
        var R;
        (t === y || t === f) && ((R = n[f])[u] || (R[u] = [
          ...L(s[f], u) || L(s[y], u) || []
        ]), n[f][u].push([r, i - l + o + 1]));
      });
    }
  }
  match(t, e) {
    Ye();
    const r = this.buildAllMatchers();
    return this.match = (s, n) => {
      const i = r[s] || r[y], a = i[2][n];
      if (a)
        return a;
      const c = n.match(i[0]);
      if (!c)
        return [[], je];
      const o = c.indexOf("", 1);
      return [i[1][o], c];
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
    let r = t === y;
    return [this.middleware, this.routes].forEach((s) => {
      const n = s[t] ? Object.keys(s[t]).map((i) => [i, s[t][i]]) : [];
      n.length !== 0 ? (r || (r = !0), e.push(...n)) : t !== y && e.push(
        ...Object.keys(s[y]).map((i) => [i, s[y][i]])
      );
    }), r ? Ze(e) : null;
  }
}, tt = class {
  constructor(t) {
    d(this, "name", "SmartRouter");
    d(this, "routers", []);
    d(this, "routes", []);
    Object.assign(this, t);
  }
  add(t, e, r) {
    if (!this.routes)
      throw new Error(Ee);
    this.routes.push([t, e, r]);
  }
  match(t, e) {
    if (!this.routes)
      throw new Error("Fatal error");
    const { routers: r, routes: s } = this, n = r.length;
    let i = 0, a;
    for (; i < n; i++) {
      const c = r[i];
      try {
        s.forEach((o) => {
          c.add(...o);
        }), a = c.match(t, e);
      } catch (o) {
        if (o instanceof xe)
          continue;
        throw o;
      }
      this.match = c.match.bind(c), this.routers = [c], this.routes = void 0;
      break;
    }
    if (i === n)
      throw new Error("Fatal error");
    return this.name = `SmartRouter + ${this.activeRouter.name}`, a;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1)
      throw new Error("No active router has been determined yet.");
    return this.routers[0];
  }
}, Se = class {
  constructor(t, e, r) {
    d(this, "methods");
    d(this, "children");
    d(this, "patterns");
    d(this, "order", 0);
    d(this, "name");
    d(this, "params", /* @__PURE__ */ Object.create(null));
    if (this.children = r || /* @__PURE__ */ Object.create(null), this.methods = [], this.name = "", t && e) {
      const s = /* @__PURE__ */ Object.create(null);
      s[t] = { handler: e, possibleKeys: [], score: 0, name: this.name }, this.methods = [s];
    }
    this.patterns = [];
  }
  insert(t, e, r) {
    this.name = `${t} ${e}`, this.order = ++this.order;
    let s = this;
    const n = Le(e), i = [];
    for (let o = 0, l = n.length; o < l; o++) {
      const u = n[o];
      if (Object.keys(s.children).includes(u)) {
        s = s.children[u];
        const R = le(u);
        R && i.push(R[1]);
        continue;
      }
      s.children[u] = new Se();
      const f = le(u);
      f && (s.patterns.push(f), i.push(f[1])), s = s.children[u];
    }
    s.methods.length || (s.methods = []);
    const a = /* @__PURE__ */ Object.create(null), c = {
      handler: r,
      possibleKeys: i.filter((o, l, u) => u.indexOf(o) === l),
      name: this.name,
      score: this.order
    };
    return a[t] = c, s.methods.push(a), s;
  }
  gHSets(t, e, r, s) {
    const n = [];
    for (let i = 0, a = t.methods.length; i < a; i++) {
      const c = t.methods[i], o = c[e] || c[y], l = /* @__PURE__ */ Object.create(null);
      o !== void 0 && (o.params = /* @__PURE__ */ Object.create(null), o.possibleKeys.forEach((u) => {
        const f = l[o.name];
        o.params[u] = s[u] && !f ? s[u] : r[u] ?? s[u], l[o.name] = !0;
      }), n.push(o));
    }
    return n;
  }
  search(t, e) {
    const r = [];
    this.params = /* @__PURE__ */ Object.create(null);
    let n = [this];
    const i = we(e);
    for (let c = 0, o = i.length; c < o; c++) {
      const l = i[c], u = c === o - 1, f = [];
      for (let R = 0, S = n.length; R < S; R++) {
        const w = n[R], v = w.children[l];
        v && (v.params = w.params, u === !0 ? (v.children["*"] && r.push(
          ...this.gHSets(v.children["*"], t, w.params, /* @__PURE__ */ Object.create(null))
        ), r.push(...this.gHSets(v, t, w.params, /* @__PURE__ */ Object.create(null)))) : f.push(v));
        for (let E = 0, P = w.patterns.length; E < P; E++) {
          const _ = w.patterns[E], H = { ...w.params };
          if (_ === "*") {
            const te = w.children["*"];
            te && (r.push(...this.gHSets(te, t, w.params, /* @__PURE__ */ Object.create(null))), f.push(te));
            continue;
          }
          if (l === "")
            continue;
          const [X, J, M] = _, F = w.children[X], ae = i.slice(c).join("/");
          if (M instanceof RegExp && M.test(ae)) {
            H[J] = ae, r.push(...this.gHSets(F, t, w.params, H));
            continue;
          }
          (M === !0 || M instanceof RegExp && M.test(l)) && typeof X == "string" && (H[J] = l, u === !0 ? (r.push(...this.gHSets(F, t, H, w.params)), F.children["*"] && r.push(...this.gHSets(F.children["*"], t, H, w.params))) : (F.params = H, f.push(F)));
        }
      }
      n = f;
    }
    return [r.sort((c, o) => c.score - o.score).map(({ handler: c, params: o }) => [c, o])];
  }
}, rt = class {
  constructor() {
    d(this, "name", "TrieRouter");
    d(this, "node");
    this.node = new Se();
  }
  add(t, e, r) {
    const s = Re(e);
    if (s) {
      for (const n of s)
        this.node.insert(t, n, r);
      return;
    }
    this.node.insert(t, e, r);
  }
  match(t, e) {
    return this.node.search(t, e);
  }
}, st = class extends Oe {
  constructor(t = {}) {
    super(t), this.router = t.router ?? new tt({
      routers: [new et(), new rt()]
    });
  }
};
const oe = new st();
oe.post("/api/*", async (t) => {
  const e = t.req.query("prompt");
  console.log(e), console.log(t.req.url);
  const r = await t.env.AI.run(
    "@hf/nousresearch/hermes-2-pro-mistral-7b",
    {
      messages: [
        {
          role: "user",
          content: e
        }
      ],
      tools: [
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
      ]
    }
  );
  return new Response(JSON.stringify(r.tool_calls));
});
oe.get("*", (t) => t.env.ASSETS.fetch(
  t.req.raw
));
const at = {
  fetch: oe.fetch
};
export {
  at as default
};
