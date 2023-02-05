/* Web Font Loader v1.6.6 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function () {
  function aa (a, b, c) {
    return a.call.apply(a.bind, arguments)
  }
  function ba (a, b, c) {
    if (!a) throw Error()
    if (arguments.length > 2) {
      const d = Array.prototype.slice.call(arguments, 2)
      return function () {
        const c = Array.prototype.slice.call(arguments)
        Array.prototype.unshift.apply(c, d)
        return a.apply(b, c)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  }
  function n (a, b, c) {
    n =
      Function.prototype.bind &&
      Function.prototype.bind.toString().indexOf('native code') != -1
        ? aa
        : ba
    return n.apply(null, arguments)
  }
  const p =
    Date.now ||
    function () {
      return +new Date()
    }
  function r (a, b) {
    this.D = a
    this.m = b || a
    this.F = this.m.document
  }
  r.prototype.createElement = function (a, b, c) {
    a = this.F.createElement(a)
    if (b) {
      for (const d in b) {
        b.hasOwnProperty(d) &&
          (d == 'style' ? (a.style.cssText = b[d]) : a.setAttribute(d, b[d]))
      }
    }
    c && a.appendChild(this.F.createTextNode(c))
    return a
  }
  function s (a, b, c) {
    a = a.F.getElementsByTagName(b)[0]
    a || (a = document.documentElement)
    a.insertBefore(c, a.lastChild)
  }
  function t (a, b, c) {
    b = b || []
    c = c || []
    for (var d = a.className.split(/\s+/), f = 0; f < b.length; f += 1) {
      for (var e = !1, g = 0; g < d.length; g += 1) {
        if (b[f] === d[g]) {
          e = !0
          break
        }
      }
      e || d.push(b[f])
    }
    b = []
    for (f = 0; f < d.length; f += 1) {
      e = !1
      for (g = 0; g < c.length; g += 1) {
        if (d[f] === c[g]) {
          e = !0
          break
        }
      }
      e || b.push(d[f])
    }
    a.className = b
      .join(' ')
      .replace(/\s+/g, ' ')
      .replace(/^\s+|\s+$/, '')
  }
  function u (a, b) {
    for (let c = a.className.split(/\s+/), d = 0, f = c.length; d < f; d++) {
      if (c[d] == b) return !0
    }
    return !1
  }
  function v (a) {
    if (typeof a.da === 'string') return a.da
    let b = a.m.location.protocol
    b == 'about:' && (b = a.D.location.protocol)
    return b == 'https:' ? 'https:' : 'http:'
  }
  function w (a, b) {
    const c = a.createElement('link', {
      rel: 'stylesheet',
      href: b,
      media: 'all'
    })
    let d = !1
    c.onload = function () {
      d || (d = !0)
    }
    c.onerror = function () {
      d || (d = !0)
    }
    s(a, 'head', c)
  }
  function x (a, b, c, d) {
    const f = a.F.getElementsByTagName('head')[0]
    if (f) {
      const e = a.createElement('script', { src: b })
      let g = !1
      e.onload = e.onreadystatechange = function () {
        g ||
          (this.readyState &&
            this.readyState != 'loaded' &&
            this.readyState != 'complete') ||
          ((g = !0),
          c && c(null),
          (e.onload = e.onreadystatechange = null),
          e.parentNode.tagName == 'HEAD' && f.removeChild(e))
      }
      f.appendChild(e)
      setTimeout(function () {
        g || ((g = !0), c && c(Error('Script load timeout')))
      }, d || 5e3)
      return e
    }
    return null
  }
  function y (a) {
    this.ca = a || '-'
  }
  y.prototype.d = function (a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      b.push(arguments[c].replace(/[\W_]+/g, '').toLowerCase())
    }
    return b.join(this.ca)
  }
  function A (a, b) {
    this.V = a
    this.N = 4
    this.H = 'n'
    const c = (b || 'n4').match(/^([nio])([1-9])$/i)
    c && ((this.H = c[1]), (this.N = parseInt(c[2], 10)))
  }
  A.prototype.getName = function () {
    return this.V
  }
  function B (a) {
    return a.H + a.N
  }
  function ca (a) {
    let b = 4
    let c = 'n'
    let d = null
    a &&
      ((d = a.match(/(normal|oblique|italic)/i)) &&
        d[1] &&
        (c = d[1].substr(0, 1).toLowerCase()),
      (d = a.match(/([1-9]00|normal|bold)/i)) &&
        d[1] &&
        (/bold/i.test(d[1])
          ? (b = 7)
          : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))))
    return c + b
  }
  function da (a, b) {
    this.a = a
    this.h = a.m.document.documentElement
    this.J = b
    this.f = 'wf'
    this.e = new y('-')
    this.Z = !1 !== b.events
    this.u = !1 !== b.classes
  }
  function ea (a) {
    a.u && t(a.h, [a.e.d(a.f, 'loading')])
    C(a, 'loading')
  }
  function D (a) {
    if (a.u) {
      const b = u(a.h, a.e.d(a.f, 'active'))
      const c = []
      const d = [a.e.d(a.f, 'loading')]
      b || c.push(a.e.d(a.f, 'inactive'))
      t(a.h, c, d)
    }
    C(a, 'inactive')
  }
  function C (a, b, c) {
    if (a.Z && a.J[b]) {
      if (c) a.J[b](c.getName(), B(c))
      else a.J[b]()
    }
  }
  function fa () {
    this.t = {}
  }
  function ga (a, b, c) {
    const d = []
    let f
    for (f in b) {
      if (b.hasOwnProperty(f)) {
        const e = a.t[f]
        e && d.push(e(b[f], c))
      }
    }
    return d
  }
  function E (a, b) {
    this.a = a
    this.q = b
    this.j = this.a.createElement('span', { 'aria-hidden': 'true' }, this.q)
  }
  function G (a, b) {
    const c = a.j
    let d
    d = []
    for (var f = b.V.split(/,\s*/), e = 0; e < f.length; e++) {
      const g = f[e].replace(/['"]/g, '')
      g.indexOf(' ') == -1 ? d.push(g) : d.push("'" + g + "'")
    }
    d = d.join(',')
    f = 'normal'
    b.H === 'o' ? (f = 'oblique') : b.H === 'i' && (f = 'italic')
    c.style.cssText =
      'display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:' +
      d +
      ';' +
      ('font-style:' + f + ';font-weight:' + (b.N + '00') + ';')
  }
  function H (a) {
    s(a.a, 'body', a.j)
  }
  E.prototype.remove = function () {
    const a = this.j
    a.parentNode && a.parentNode.removeChild(a)
  }
  function I (a, b, c, d, f, e, g) {
    this.O = a
    this.ba = b
    this.a = c
    this.g = d
    this.q = g || 'BESbswy'
    this.s = {}
    this.M = f || 3e3
    this.T = e || null
    this.C = this.B = this.w = this.v = null
    this.v = new E(this.a, this.q)
    this.w = new E(this.a, this.q)
    this.B = new E(this.a, this.q)
    this.C = new E(this.a, this.q)
    G(this.v, new A(this.g.getName() + ',serif', B(this.g)))
    G(this.w, new A(this.g.getName() + ',sans-serif', B(this.g)))
    G(this.B, new A('serif', B(this.g)))
    G(this.C, new A('sans-serif', B(this.g)))
    H(this.v)
    H(this.w)
    H(this.B)
    H(this.C)
  }
  const J = { ga: 'serif', fa: 'sans-serif' }
  let K = null
  function L () {
    if (K === null) {
      const a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
        window.navigator.userAgent
      )
      K =
        !!a &&
        (parseInt(a[1], 10) < 536 ||
          (parseInt(a[1], 10) === 536 && parseInt(a[2], 10) <= 11))
    }
    return K
  }
  I.prototype.start = function () {
    this.s.serif = this.B.j.offsetWidth
    this.s['sans-serif'] = this.C.j.offsetWidth
    this.ea = p()
    M(this)
  }
  function N (a, b, c) {
    for (const d in J) {
      if (J.hasOwnProperty(d) && b === a.s[J[d]] && c === a.s[J[d]]) return !0
    }
    return !1
  }
  function M (a) {
    const b = a.v.j.offsetWidth
    const c = a.w.j.offsetWidth
    let d;
    (d = b === a.s.serif && c === a.s['sans-serif']) || (d = L() && N(a, b, c))
    d
      ? p() - a.ea >= a.M
        ? L() &&
          N(a, b, c) &&
          (a.T === null || a.T.hasOwnProperty(a.g.getName()))
          ? O(a, a.O)
          : O(a, a.ba)
        : ha(a)
      : O(a, a.O)
  }
  function ha (a) {
    setTimeout(
      n(function () {
        M(this)
      }, a),
      50
    )
  }
  function O (a, b) {
    setTimeout(
      n(function () {
        this.v.remove()
        this.w.remove()
        this.B.remove()
        this.C.remove()
        b(this.g)
      }, a),
      0
    )
  }
  function P (a, b, c) {
    this.a = a
    this.o = b
    this.K = 0
    this.X = this.S = !1
    this.M = c
  }
  P.prototype.$ = function (a) {
    const b = this.o
    b.u &&
      t(
        b.h,
        [b.e.d(b.f, a.getName(), B(a).toString(), 'active')],
        [
          b.e.d(b.f, a.getName(), B(a).toString(), 'loading'),
          b.e.d(b.f, a.getName(), B(a).toString(), 'inactive')
        ]
      )
    C(b, 'fontactive', a)
    this.X = !0
    Q(this)
  }
  P.prototype.aa = function (a) {
    const b = this.o
    if (b.u) {
      const c = u(b.h, b.e.d(b.f, a.getName(), B(a).toString(), 'active'))
      const d = []
      const f = [b.e.d(b.f, a.getName(), B(a).toString(), 'loading')]
      c || d.push(b.e.d(b.f, a.getName(), B(a).toString(), 'inactive'))
      t(b.h, d, f)
    }
    C(b, 'fontinactive', a)
    Q(this)
  }
  function Q (a) {
    --a.K == 0 &&
      a.S &&
      (a.X
        ? ((a = a.o),
          a.u &&
            t(
              a.h,
              [a.e.d(a.f, 'active')],
              [a.e.d(a.f, 'loading'), a.e.d(a.f, 'inactive')]
            ),
          C(a, 'active'))
        : D(a.o))
  }
  function R (a) {
    this.D = a
    this.p = new fa()
    this.U = 0
    this.P = this.Q = !0
  }
  R.prototype.load = function (a) {
    this.a = new r(this.D, a.context || this.D)
    this.Q = !1 !== a.events
    this.P = !1 !== a.classes
    ia(this, new da(this.a, a), a)
  }
  function ja (a, b, c, d, f) {
    const e = --a.U == 0;
    (a.P || a.Q) &&
      setTimeout(function () {
        const a = f || null
        const l = d || null || {}
        if (c.length === 0 && e) D(b.o)
        else {
          b.K += c.length
          e && (b.S = e)
          let h
          const k = []
          for (h = 0; h < c.length; h++) {
            const m = c[h]
            const z = l[m.getName()]
            let q = b.o
            const F = m
            q.u &&
              t(q.h, [q.e.d(q.f, F.getName(), B(F).toString(), 'loading')])
            C(q, 'fontloading', F)
            q = null
            q = new I(n(b.$, b), n(b.aa, b), b.a, m, b.M, a, z)
            k.push(q)
          }
          for (h = 0; h < k.length; h++) k[h].start()
        }
      }, 0)
  }
  function ia (a, b, c) {
    var d = []
    const f = c.timeout
    ea(b)
    var d = ga(a.p, c, a.a)
    const e = new P(a.a, b, f)
    a.U = d.length
    b = 0
    for (c = d.length; b < c; b++) {
      d[b].load(function (b, c, d) {
        ja(a, e, b, c, d)
      })
    }
  }
  function S (a, b, c) {
    this.I = a || b + ka
    this.k = []
    this.L = []
    this.Y = c || ''
  }
  var ka = '//fonts.googleapis.com/css'
  S.prototype.d = function () {
    if (this.k.length == 0) throw Error('No fonts to load!')
    if (this.I.indexOf('kit=') != -1) return this.I
    for (var a = this.k.length, b = [], c = 0; c < a; c++) {
      b.push(this.k[c].replace(/ /g, '+'))
    }
    a = this.I + '?family=' + b.join('%7C')
    this.L.length > 0 && (a += '&subset=' + this.L.join(','))
    this.Y.length > 0 && (a += '&text=' + encodeURIComponent(this.Y))
    return a
  }
  function T (a) {
    this.k = a
    this.W = []
    this.G = {}
  }
  const U = {
    latin: 'BESbswy',
    cyrillic: '&#1081;&#1103;&#1046;',
    greek: '&#945;&#946;&#931;',
    khmer: '&#x1780;&#x1781;&#x1782;',
    Hanuman: '&#x1780;&#x1781;&#x1782;'
  }
  const la = {
    thin: '1',
    extralight: '2',
    'extra-light': '2',
    ultralight: '2',
    'ultra-light': '2',
    light: '3',
    regular: '4',
    book: '4',
    medium: '5',
    'semi-bold': '6',
    semibold: '6',
    'demi-bold': '6',
    demibold: '6',
    bold: '7',
    'extra-bold': '8',
    extrabold: '8',
    'ultra-bold': '8',
    ultrabold: '8',
    black: '9',
    heavy: '9',
    l: '3',
    r: '4',
    b: '7'
  }
  const ma = { i: 'i', italic: 'i', n: 'n', normal: 'n' }
  const na =
    /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/
  T.prototype.parse = function () {
    for (let a = this.k.length, b = 0; b < a; b++) {
      let c = this.k[b].split(':')
      const d = c[0].replace(/\+/g, ' ')
      let f = ['n4']
      if (c.length >= 2) {
        var e
        var g = c[1]
        e = []
        if (g) {
          for (var g = g.split(','), l = g.length, h = 0; h < l; h++) {
            var k
            k = g[h]
            if (k.match(/^[\w-]+$/)) {
              if (((k = na.exec(k.toLowerCase())), k == null)) k = ''
              else {
                var m
                m = k[1]
                if (m == null || m == '') m = '4'
                else {
                  const z = la[m]
                  m = z || (isNaN(m) ? '4' : m.substr(0, 1))
                }
                k = k[2]
                k = [k == null || k == '' ? 'n' : ma[k], m].join('')
              }
            } else k = ''
            k && e.push(k)
          }
        }
        e.length > 0 && (f = e)
        c.length == 3 &&
          ((c = c[2]),
          (e = []),
          (c = c ? c.split(',') : e),
          c.length > 0 && (c = U[c[0]]) && (this.G[d] = c))
      }
      this.G[d] || ((c = U[d]) && (this.G[d] = c))
      for (c = 0; c < f.length; c += 1) this.W.push(new A(d, f[c]))
    }
  }
  function V (a, b) {
    this.a = a
    this.c = b
  }
  const oa = { Arimo: !0, Cousine: !0, Tinos: !0 }
  V.prototype.load = function (a) {
    for (
      var b = this.a,
        c = new S(this.c.api, v(b), this.c.text),
        d = this.c.families,
        f = d.length,
        e = 0;
      e < f;
      e++
    ) {
      const g = d[e].split(':')
      g.length == 3 && c.L.push(g.pop())
      let l = ''
      g.length == 2 && g[1] != '' && (l = ':')
      c.k.push(g.join(l))
    }
    d = new T(d)
    d.parse()
    w(b, c.d())
    a(d.W, d.G, oa)
  }
  function W (a, b) {
    this.a = a
    this.c = b
    this.R = []
  }
  W.prototype.A = function (a) {
    const b = this.a
    return (
      v(this.a) +
      (this.c.api || '//f.fontdeck.com/s/css/js/') +
      (b.m.location.hostname || b.D.location.hostname) +
      '/' +
      a +
      '.js'
    )
  }
  W.prototype.load = function (a) {
    const b = this.c.id
    const c = this.a.m
    const d = this
    b
      ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}),
        (c.__webfontfontdeckmodule__[b] = function (b, c) {
          for (let g = 0, l = c.fonts.length; g < l; ++g) {
            const h = c.fonts[g]
            d.R.push(
              new A(
                h.name,
                ca('font-weight:' + h.weight + ';font-style:' + h.style)
              )
            )
          }
          a(d.R)
        }),
        x(this.a, this.A(b), function (b) {
          b && a([])
        }))
      : a([])
  }
  function X (a, b) {
    this.a = a
    this.c = b
  }
  X.prototype.A = function (a) {
    return (this.c.api || 'https://use.typekit.net') + '/' + a + '.js'
  }
  X.prototype.load = function (a) {
    const b = this.c.id
    const c = this.a.m
    b
      ? x(
        this.a,
        this.A(b),
        function (b) {
          if (b) a([])
          else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
            b = c.Typekit.config.fn
            for (var f = [], e = 0; e < b.length; e += 2) {
              for (let g = b[e], l = b[e + 1], h = 0; h < l.length; h++) {
                f.push(new A(g, l[h]))
              }
            }
            try {
              c.Typekit.load({ events: !1, classes: !1, async: !0 })
            } catch (k) {}
            a(f)
          }
        },
        2e3
      )
      : a([])
  }
  function Y (a, b) {
    this.a = a
    this.c = b
  }
  Y.prototype.A = function (a, b) {
    const c = v(this.a)
    const d = (this.c.api || 'fast.fonts.net/jsapi').replace(
      /^.*http(s?):(\/\/)?/,
      ''
    )
    return c + '//' + d + '/' + a + '.js' + (b ? '?v=' + b : '')
  }
  Y.prototype.load = function (a) {
    const b = this.c.projectId
    const c = this.c.version
    if (b) {
      const d = this.a.m
      x(this.a, this.A(b, c), function (c) {
        if (c) a([])
        else if (d['__mti_fntLst' + b]) {
          c = d['__mti_fntLst' + b]()
          const e = []
          if (c) {
            for (let g = 0; g < c.length; g++) e.push(new A(c[g].fontfamily))
          }
          a(e)
        } else a([])
      }).id = '__MonotypeAPIScript__' + b
    } else a([])
  }
  function pa (a, b) {
    this.a = a
    this.c = b
  }
  pa.prototype.load = function (a) {
    let b
    let c
    let d = this.c.urls || []
    const f = this.c.families || []
    const e = this.c.testStrings || {}
    b = 0
    for (c = d.length; b < c; b++) w(this.a, d[b])
    d = []
    b = 0
    for (c = f.length; b < c; b++) {
      const g = f[b].split(':')
      if (g[1]) {
        for (let l = g[1].split(','), h = 0; h < l.length; h += 1) {
          d.push(new A(g[0], l[h]))
        }
      } else d.push(new A(g[0]))
    }
    a(d, e)
  }
  const Z = new R(window)
  Z.p.t.custom = function (a, b) {
    return new pa(b, a)
  }
  Z.p.t.fontdeck = function (a, b) {
    return new W(b, a)
  }
  Z.p.t.monotype = function (a, b) {
    return new Y(b, a)
  }
  Z.p.t.typekit = function (a, b) {
    return new X(b, a)
  }
  Z.p.t.google = function (a, b) {
    return new V(b, a)
  }
  const $ = { load: n(Z.load, Z) }
  typeof define === 'function' && define.amd
    ? define(function () {
      return $
    })
    : typeof module !== 'undefined' && module.exports
      ? (module.exports = $)
      : ((window.WebFont = $),
        window.WebFontConfig && Z.load(window.WebFontConfig))
})()
