// Snap.svg 0.4.1
//
// Copyright (c) 2013 – 2015 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2015-04-13

!(function (a) {
  let b
  let c
  const d = '0.4.2'
  const e = 'hasOwnProperty'
  const f = /[\.\/]/
  const g = /\s*,\s*/
  const h = '*'
  const i = function (a, b) {
    return a - b
  }
  let j = { n: {} }
  const k = function () {
    for (let a = 0, b = this.length; b > a; a++) {
      if (typeof this[a] !== 'undefined') return this[a]
    }
  }
  const l = function () {
    for (let a = this.length; --a;) {
      if (typeof this[a] !== 'undefined') return this[a]
    }
  }
  const m = function (a, d) {
    a = String(a)
    let e
    const f = c
    const g = Array.prototype.slice.call(arguments, 2)
    const h = m.listeners(a)
    let j = 0
    const n = []
    const o = {}
    const p = []
    const q = b;
    (p.firstDefined = k), (p.lastDefined = l), (b = a), (c = 0)
    for (var r = 0, s = h.length; s > r; r++) {
      'zIndex' in h[r] &&
        (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]))
    }
    for (n.sort(i); n[j] < 0;) {
      if (((e = o[n[j++]]), p.push(e.apply(d, g)), c)) return (c = f), p
    }
    for (r = 0; s > r; r++) {
      if (((e = h[r]), 'zIndex' in e)) {
        if (e.zIndex == n[j]) {
          if ((p.push(e.apply(d, g)), c)) break
          do if ((j++, (e = o[n[j]]), e && p.push(e.apply(d, g)), c)) break
          while (e)
        } else o[e.zIndex] = e
      } else if ((p.push(e.apply(d, g)), c)) break
    }
    return (c = f), (b = q), p
  };
  (m._events = j),
  (m.listeners = function (a) {
    let b
    let c
    let d
    let e
    let g
    let i
    let k
    let l
    const m = a.split(f)
    let n = j
    let o = [n]
    let p = []
    for (e = 0, g = m.length; g > e; e++) {
      for (l = [], i = 0, k = o.length; k > i; i++) {
        for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) {
          (b = c[d]), b && (l.push(b), (p = p.concat(b.f || [])))
        }
      }
      o = l
    }
    return p
  }),
  (m.on = function (a, b) {
    if (((a = String(a)), typeof b !== 'function')) return function () {}
    for (let c = a.split(g), d = 0, e = c.length; e > d; d++) {
      !(function (a) {
        for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) {
          (e = e.n),
          (e =
                (e.hasOwnProperty(d[g]) && e[d[g]]) || (e[d[g]] = { n: {} }))
        }
        for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++) {
          if (e.f[g] == b) {
            c = !0
            break
          }
        }
        !c && e.f.push(b)
      })(c[d])
    }
    return function (a) {
      +a == +a && (b.zIndex = +a)
    }
  }),
  (m.f = function (a) {
    const b = [].slice.call(arguments, 1)
    return function () {
      m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
    }
  }),
  (m.stop = function () {
    c = 1
  }),
  (m.nt = function (a) {
    return a ? new RegExp('(?:\\.|\\/|^)' + a + '(?:\\.|\\/|$)').test(b) : b
  }),
  (m.nts = function () {
    return b.split(f)
  }),
  (m.off = m.unbind =
      function (a, b) {
        if (!a) return void (m._events = j = { n: {} })
        let c = a.split(g)
        if (c.length > 1) {
          for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b)
        } else {
          c = a.split(f)
          let k
          let l
          let n
          var d
          var i
          let o
          let p
          const q = [j]
          for (d = 0, i = c.length; i > d; d++) {
            for (o = 0; o < q.length; o += n.length - 2) {
              if (((n = [o, 1]), (k = q[o].n), c[d] != h)) {
                k[c[d]] && n.push(k[c[d]])
              } else for (l in k) k[e](l) && n.push(k[l])
              q.splice.apply(q, n)
            }
          }
          for (d = 0, i = q.length; i > d; d++) {
            for (k = q[d]; k.n;) {
              if (b) {
                if (k.f) {
                  for (o = 0, p = k.f.length; p > o; o++) {
                    if (k.f[o] == b) {
                      k.f.splice(o, 1)
                      break
                    }
                  }
                  !k.f.length && delete k.f
                }
                for (l in k.n) {
                  if (k.n[e](l) && k.n[l].f) {
                    const r = k.n[l].f
                    for (o = 0, p = r.length; p > o; o++) {
                      if (r[o] == b) {
                        r.splice(o, 1)
                        break
                      }
                    }
                    !r.length && delete k.n[l].f
                  }
                }
              } else {
                delete k.f
                for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
              }
              k = k.n
            }
          }
        }
      }),
  (m.once = function (a, b) {
    const c = function () {
      return m.unbind(a, c), b.apply(this, arguments)
    }
    return m.on(a, c)
  }),
  (m.version = d),
  (m.toString = function () {
    return 'You are running Eve ' + d
  }),
  typeof module !== 'undefined' && module.exports
    ? (module.exports = m)
    : typeof define === 'function' && define.amd
      ? define('eve', [], function () {
        return m
      })
      : (a.eve = m)
})(this),
(function (a, b) {
  if (typeof define === 'function' && define.amd) {
    define(['eve'], function (c) {
      return b(a, c)
    })
  } else if (typeof exports !== 'undefined') {
    const c = require('eve')
    module.exports = b(a, c)
  } else b(a, a.eve)
})(window || this, function (a, b) {
  const c = (function (b) {
    const c = {}
    const d =
        a.requestAnimationFrame ||
        a.webkitRequestAnimationFrame ||
        a.mozRequestAnimationFrame ||
        a.oRequestAnimationFrame ||
        a.msRequestAnimationFrame ||
        function (a) {
          setTimeout(a, 16)
        }
    const e =
        Array.isArray ||
        function (a) {
          return (
            a instanceof Array ||
            Object.prototype.toString.call(a) == '[object Array]'
          )
        }
    let f = 0
    const g = 'M' + (+new Date()).toString(36)
    const h = function () {
      return g + (f++).toString(36)
    }
    const i =
        Date.now ||
        function () {
          return +new Date()
        }
    const j = function (a) {
      const b = this
      if (a == null) return b.s
      const c = b.s - a;
      (b.b += b.dur * c), (b.B += b.dur * c), (b.s = a)
    }
    const k = function (a) {
      const b = this
      return a == null ? b.spd : void (b.spd = a)
    }
    const l = function (a) {
      const b = this
      return a == null
        ? b.dur
        : ((b.s = (b.s * a) / b.dur), void (b.dur = a))
    }
    const m = function () {
      const a = this
      delete c[a.id], a.update(), b('mina.stop.' + a.id, a)
    }
    const n = function () {
      const a = this
      a.pdif || (delete c[a.id], a.update(), (a.pdif = a.get() - a.b))
    }
    const o = function () {
      const a = this
      a.pdif && ((a.b = a.get() - a.pdif), delete a.pdif, (c[a.id] = a))
    }
    const p = function () {
      let a
      const b = this
      if (e(b.start)) {
        a = []
        for (let c = 0, d = b.start.length; d > c; c++) {
          a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
        }
      } else a = +b.start + (b.end - b.start) * b.easing(b.s)
      b.set(a)
    }
    const q = function () {
      let a = 0
      for (const e in c) {
        if (c.hasOwnProperty(e)) {
          const f = c[e]
          const g = f.get()
          a++,
          (f.s = (g - f.b) / (f.dur / f.spd)),
          f.s >= 1 &&
                (delete c[e],
                (f.s = 1),
                a--,
                (function (a) {
                  setTimeout(function () {
                    b('mina.finish.' + a.id, a)
                  })
                })(f)),
          f.update()
        }
      }
      a && d(q)
    }
    const r = function (a, b, e, f, g, i, s) {
      const t = {
        id: h(),
        start: a,
        end: b,
        b: e,
        s: 0,
        dur: f - e,
        spd: 1,
        get: g,
        set: i,
        easing: s || r.linear,
        status: j,
        speed: k,
        duration: l,
        stop: m,
        pause: n,
        resume: o,
        update: p
      }
      c[t.id] = t
      let u
      let v = 0
      for (u in c) if (c.hasOwnProperty(u) && (v++, v == 2)) break
      return v == 1 && d(q), t
    }
    return (
      (r.time = i),
      (r.getById = function (a) {
        return c[a] || null
      }),
      (r.linear = function (a) {
        return a
      }),
      (r.easeout = function (a) {
        return Math.pow(a, 1.7)
      }),
      (r.easein = function (a) {
        return Math.pow(a, 0.48)
      }),
      (r.easeinout = function (a) {
        if (a == 1) return 1
        if (a == 0) return 0
        const b = 0.48 - a / 1.04
        const c = Math.sqrt(0.1734 + b * b)
        const d = c - b
        const e = Math.pow(Math.abs(d), 1 / 3) * (d < 0 ? -1 : 1)
        const f = -c - b
        const g = Math.pow(Math.abs(f), 1 / 3) * (f < 0 ? -1 : 1)
        const h = e + g + 0.5
        return 3 * (1 - h) * h * h + h * h * h
      }),
      (r.backin = function (a) {
        if (a == 1) return 1
        const b = 1.70158
        return a * a * ((b + 1) * a - b)
      }),
      (r.backout = function (a) {
        if (a == 0) return 0
        a -= 1
        const b = 1.70158
        return a * a * ((b + 1) * a + b) + 1
      }),
      (r.elastic = function (a) {
        return a == !!a
          ? a
          : Math.pow(2, -10 * a) *
                Math.sin((2 * (a - 0.075) * Math.PI) / 0.3) +
                1
      }),
      (r.bounce = function (a) {
        let b
        const c = 7.5625
        const d = 2.75
        return (
          1 / d > a
            ? (b = c * a * a)
            : 2 / d > a
              ? ((a -= 1.5 / d), (b = c * a * a + 0.75))
              : 2.5 / d > a
                ? ((a -= 2.25 / d), (b = c * a * a + 0.9375))
                : ((a -= 2.625 / d), (b = c * a * a + 0.984375)),
          b
        )
      }),
      (a.mina = r),
      r
    )
  })(typeof b === 'undefined' ? function () {} : b)
  const d = (function (a) {
    function c (a, b) {
      if (a) {
        if (a.nodeType) return w(a)
        if (e(a, 'array') && c.set) return c.set.apply(c, a)
        if (a instanceof s) return a
        if (b == null) return (a = y.doc.querySelector(String(a))), w(a)
      }
      return (
        (a = a == null ? '100%' : a),
        (b = b == null ? '100%' : b),
        new v(a, b)
      )
    }
    function d (a, b) {
      if (b) {
        if (
          (a == '#text' &&
              (a = y.doc.createTextNode(b.text || b['#text'] || '')),
          a == '#comment' &&
              (a = y.doc.createComment(b.text || b['#text'] || '')),
          typeof a === 'string' && (a = d(a)),
          typeof b === 'string')
        ) {
          return a.nodeType == 1
            ? b.substring(0, 6) == 'xlink:'
              ? a.getAttributeNS(T, b.substring(6))
              : b.substring(0, 4) == 'xml:'
                ? a.getAttributeNS(U, b.substring(4))
                : a.getAttribute(b)
            : b == 'text'
              ? a.nodeValue
              : null
        }
        if (a.nodeType == 1) {
          for (const c in b) {
            if (b[z](c)) {
              const e = A(b[c])
              e
                ? c.substring(0, 6) == 'xlink:'
                  ? a.setAttributeNS(T, c.substring(6), e)
                  : c.substring(0, 4) == 'xml:'
                    ? a.setAttributeNS(U, c.substring(4), e)
                    : a.setAttribute(c, e)
                : a.removeAttribute(c)
            }
          }
        } else 'text' in b && (a.nodeValue = b.text)
      } else a = y.doc.createElementNS(U, a)
      return a
    }
    function e (a, b) {
      return (
        (b = A.prototype.toLowerCase.call(b)),
        b == 'finite'
          ? isFinite(a)
          : b == 'array' &&
                (a instanceof Array || (Array.isArray && Array.isArray(a)))
            ? !0
            : (b == 'null' && a === null) ||
                (b === typeof a && a !== null) ||
                (b == 'object' && a === Object(a)) ||
                J.call(a).slice(8, -1).toLowerCase() == b
      )
    }
    function f (a) {
      if (typeof a === 'function' || Object(a) !== a) return a
      const b = new a.constructor()
      for (const c in a) a[z](c) && (b[c] = f(a[c]))
      return b
    }
    function h (a, b) {
      for (let c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return a.push(a.splice(c, 1)[0])
      }
    }
    function i (a, b, c) {
      function d () {
        const e = Array.prototype.slice.call(arguments, 0)
        const f = e.join('␀')
        const g = (d.cache = d.cache || {})
        const i = (d.count = d.count || [])
        return g[z](f)
          ? (h(i, f), c ? c(g[f]) : g[f])
          : (i.length >= 1e3 && delete g[i.shift()],
            i.push(f),
            (g[f] = a.apply(b, e)),
            c ? c(g[f]) : g[f])
      }
      return d
    }
    function j (a, b, c, d, e, f) {
      if (e == null) {
        const g = a - c
        const h = b - d
        return g || h ? (180 + (180 * D.atan2(-h, -g)) / H + 360) % 360 : 0
      }
      return j(a, b, e, f) - j(c, d, e, f)
    }
    function k (a) {
      return ((a % 360) * H) / 180
    }
    function l (a) {
      return ((180 * a) / H) % 360
    }
    function m (a) {
      const b = []
      return (
        (a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
          return (
            (d = d.split(/\s*,\s*|\s+/)),
            c == 'rotate' && d.length == 1 && d.push(0, 0),
            c == 'scale' &&
                (d.length > 2
                  ? (d = d.slice(0, 2))
                  : d.length == 2 && d.push(0, 0),
                d.length == 1 && d.push(d[0], 0, 0)),
            b.push(
              c == 'skewX'
                ? ['m', 1, 0, D.tan(k(d[0])), 1, 0, 0]
                : c == 'skewY'
                  ? ['m', 1, D.tan(k(d[0])), 0, 1, 0, 0]
                  : [c.charAt(0)].concat(d)
            ),
            a
          )
        })),
        b
      )
    }
    function n (a, b) {
      const d = ab(a)
      const e = new c.Matrix()
      if (d) {
        for (let f = 0, g = d.length; g > f; f++) {
          var h
          var i
          var j
          var k
          var l
          const m = d[f]
          const n = m.length
          const o = A(m[0]).toLowerCase()
          const p = m[0] != o
          const q = p ? e.invert() : 0
          o == 't' && n == 2
            ? e.translate(m[1], 0)
            : o == 't' && n == 3
              ? p
                ? ((h = q.x(0, 0)),
                  (i = q.y(0, 0)),
                  (j = q.x(m[1], m[2])),
                  (k = q.y(m[1], m[2])),
                  e.translate(j - h, k - i))
                : e.translate(m[1], m[2])
              : o == 'r'
                ? n == 2
                  ? ((l = l || b),
                    e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2))
                  : n == 4 &&
                      (p
                        ? ((j = q.x(m[2], m[3])),
                          (k = q.y(m[2], m[3])),
                          e.rotate(m[1], j, k))
                        : e.rotate(m[1], m[2], m[3]))
                : o == 's'
                  ? n == 2 || n == 3
                    ? ((l = l || b),
                      e.scale(
                        m[1],
                        m[n - 1],
                        l.x + l.width / 2,
                        l.y + l.height / 2
                      ))
                    : n == 4
                      ? p
                        ? ((j = q.x(m[2], m[3])),
                          (k = q.y(m[2], m[3])),
                          e.scale(m[1], m[1], j, k))
                        : e.scale(m[1], m[1], m[2], m[3])
                      : n == 5 &&
                          (p
                            ? ((j = q.x(m[3], m[4])),
                              (k = q.y(m[3], m[4])),
                              e.scale(m[1], m[2], j, k))
                            : e.scale(m[1], m[2], m[3], m[4]))
                  : o == 'm' &&
                      n == 7 &&
                      e.add(m[1], m[2], m[3], m[4], m[5], m[6])
        }
      }
      return e
    }
    function o (a) {
      const b =
          (a.node.ownerSVGElement && w(a.node.ownerSVGElement)) ||
          (a.node.parentNode && w(a.node.parentNode)) ||
          c.select('svg') ||
          c(0, 0)
      const d = b.select('defs')
      let e = d == null ? !1 : d.node
      return e || (e = u('defs', b.node).node), e
    }
    function p (a) {
      return (
        (a.node.ownerSVGElement && w(a.node.ownerSVGElement)) ||
          c.select('svg')
      )
    }
    function q (a, b, c) {
      function e (a) {
        if (a == null) return I
        if (a == +a) return a
        d(j, { width: a })
        try {
          return j.getBBox().width
        } catch (b) {
          return 0
        }
      }
      function f (a) {
        if (a == null) return I
        if (a == +a) return a
        d(j, { height: a })
        try {
          return j.getBBox().height
        } catch (b) {
          return 0
        }
      }
      function g (d, e) {
        b == null
          ? (i[d] = e(a.attr(d) || 0))
          : d == b && (i = e(c == null ? a.attr(d) || 0 : c))
      }
      const h = p(a).node
      var i = {}
      var j = h.querySelector('.svg---mgr')
      switch (
        (j ||
            ((j = d('rect')),
            d(j, {
              x: -9e9,
              y: -9e9,
              width: 10,
              height: 10,
              class: 'svg---mgr',
              fill: 'none'
            }),
            h.appendChild(j)),
        a.type)
      ) {
        case 'rect':
          g('rx', e), g('ry', f)
        case 'image':
          g('width', e), g('height', f)
        case 'text':
          g('x', e), g('y', f)
          break
        case 'circle':
          g('cx', e), g('cy', f), g('r', e)
          break
        case 'ellipse':
          g('cx', e), g('cy', f), g('rx', e), g('ry', f)
          break
        case 'line':
          g('x1', e), g('x2', e), g('y1', f), g('y2', f)
          break
        case 'marker':
          g('refX', e),
          g('markerWidth', e),
          g('refY', f),
          g('markerHeight', f)
          break
        case 'radialGradient':
          g('fx', e), g('fy', f)
          break
        case 'tspan':
          g('dx', e), g('dy', f)
          break
        default:
          g(b, e)
      }
      return h.removeChild(j), i
    }
    function r (a) {
      e(a, 'array') || (a = Array.prototype.slice.call(arguments, 0))
      for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++]
      for (b = 0; b < a.length; b++) {
        a[b].type == 'set'
          ? a[b].forEach(function (a) {
            d.appendChild(a.node)
          })
          : d.appendChild(a[b].node)
      }
      const f = d.childNodes
      for (b = 0; b < f.length; b++) this[c++] = w(f[b])
      return this
    }
    function s (a) {
      if (a.snap in V) return V[a.snap]
      let b
      try {
        b = a.ownerSVGElement
      } catch (c) {}
      (this.node = a),
      b && (this.paper = new v(b)),
      (this.type = a.tagName || a.nodeName)
      const d = (this.id = S(this))
      if (
        ((this.anims = {}),
        (this._ = { transform: [] }),
        (a.snap = d),
        (V[d] = this),
        this.type == 'g' && (this.add = r),
        this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 })
      ) {
        for (const e in v.prototype) {
          v.prototype[z](e) && (this[e] = v.prototype[e])
        }
      }
    }
    function t (a) {
      this.node = a
    }
    function u (a, b) {
      const c = d(a)
      b.appendChild(c)
      const e = w(c)
      return e
    }
    function v (a, b) {
      let c
      let e
      let f
      const g = v.prototype
      if (a && a.tagName == 'svg') {
        if (a.snap in V) return V[a.snap]
        const h = a.ownerDocument;
        (c = new s(a)),
        (e = a.getElementsByTagName('desc')[0]),
        (f = a.getElementsByTagName('defs')[0]),
        e ||
              ((e = d('desc')),
              e.appendChild(h.createTextNode('Created with Snap')),
              c.node.appendChild(e)),
        f || ((f = d('defs')), c.node.appendChild(f)),
        (c.defs = f)
        for (const i in g) g[z](i) && (c[i] = g[i])
        c.paper = c.root = c
      } else {
        (c = u('svg', y.doc.body)),
        d(c.node, { height: b, version: 1.1, width: a, xmlns: U })
      }
      return c
    }
    function w (a) {
      return a
        ? a instanceof s || a instanceof t
          ? a
          : a.tagName && a.tagName.toLowerCase() == 'svg'
            ? new v(a)
            : a.tagName &&
                  a.tagName.toLowerCase() == 'object' &&
                  a.type == 'image/svg+xml'
              ? new v(a.contentDocument.getElementsByTagName('svg')[0])
              : new s(a)
        : a
    }
    function x (a, b) {
      for (let c = 0, d = a.length; d > c; c++) {
        const e = { type: a[c].type, attr: a[c].attr() }
        const f = a[c].children()
        b.push(e), f.length && x(f, (e.childNodes = []))
      }
    }
    (c.version = '0.4.0'),
    (c.toString = function () {
      return 'Snap v' + this.version
    }),
    (c._ = {})
    var y = { win: a.window, doc: a.window.document }
    c._.glob = y
    {
      var z = 'hasOwnProperty'
      var A = String
      var B = parseFloat
      var C = parseInt
      var D = Math
      var E = D.max
      var F = D.min
      var G = D.abs
      var H = (D.pow, D.PI)
      var I = (D.round, '')
      var J = Object.prototype.toString
      var K =
          /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i
      var L = ((c._.separator = /[,\s]+/), /[\s]*,[\s]*/)
      var M = { hs: 1, rg: 1 }
      var N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi
      var O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi
      var P = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi
      let Q = 0
      const R = 'S' + (+new Date()).toString(36)
      var S = function (a) {
        return (a && a.type ? a.type : I) + R + (Q++).toString(36)
      }
      var T = 'http://www.w3.org/1999/xlink'
      var U = 'http://www.w3.org/2000/svg'
      var V = {}
      c.url = function (a) {
        return "url('#" + a + "')"
      }
    }
    (c._.$ = d),
    (c._.id = S),
    (c.format = (function () {
      const a = /\{([^\}]+)\}/g
      const b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g
      const c = function (a, c, d) {
        let e = d
        return (
          c.replace(b, function (a, b, c, d, f) {
            (b = b || d),
            e &&
                    (b in e && (e = e[b]),
                    typeof e === 'function' && f && (e = e()))
          }),
          (e = (e == null || e == d ? a : e) + '')
        )
      }
      return function (b, d) {
        return A(b).replace(a, function (a, b) {
          return c(a, b, d)
        })
      }
    })()),
    (c._.clone = f),
    (c._.cacher = i),
    (c.rad = k),
    (c.deg = l),
    (c.sin = function (a) {
      return D.sin(c.rad(a))
    }),
    (c.tan = function (a) {
      return D.tan(c.rad(a))
    }),
    (c.cos = function (a) {
      return D.cos(c.rad(a))
    }),
    (c.asin = function (a) {
      return c.deg(D.asin(a))
    }),
    (c.acos = function (a) {
      return c.deg(D.acos(a))
    }),
    (c.atan = function (a) {
      return c.deg(D.atan(a))
    }),
    (c.atan2 = function (a) {
      return c.deg(D.atan2(a))
    }),
    (c.angle = j),
    (c.len = function (a, b, d, e) {
      return Math.sqrt(c.len2(a, b, d, e))
    }),
    (c.len2 = function (a, b, c, d) {
      return (a - c) * (a - c) + (b - d) * (b - d)
    }),
    (c.closestPoint = function (a, b, c) {
      function d (a) {
        const d = a.x - b
        const e = a.y - c
        return d * d + e * e
      }
      for (
        var e,
          f,
          g,
          h,
          i = a.node,
          j = i.getTotalLength(),
          k = (j / i.pathSegList.numberOfItems) * 0.125,
          l = 1 / 0,
          m = 0;
        j >= m;
        m += k
      ) {
        (h = d((g = i.getPointAtLength(m)))) < l &&
              ((e = g), (f = m), (l = h))
      }
      for (k *= 0.5; k > 0.5;) {
        var n, o, p, q, r, s;
        (p = f - k) >= 0 && (r = d((n = i.getPointAtLength(p)))) < l
          ? ((e = n), (f = p), (l = r))
          : (q = f + k) <= j && (s = d((o = i.getPointAtLength(q)))) < l
              ? ((e = o), (f = q), (l = s))
              : (k *= 0.5)
      }
      return (e = { x: e.x, y: e.y, length: f, distance: Math.sqrt(l) })
    }),
    (c.is = e),
    (c.snapTo = function (a, b, c) {
      if (((c = e(c, 'finite') ? c : 10), e(a, 'array'))) {
        for (let d = a.length; d--;) if (G(a[d] - b) <= c) return a[d]
      } else {
        a = +a
        const f = b % a
        if (c > f) return b - f
        if (f > a - c) return b - f + a
      }
      return b
    }),
    (c.getRGB = i(function (a) {
      if (!a || (a = A(a)).indexOf('-') + 1) {
        return {
          r: -1,
          g: -1,
          b: -1,
          hex: 'none',
          error: 1,
          toString: Z
        }
      }
      if (a == 'none') {
        return { r: -1, g: -1, b: -1, hex: 'none', toString: Z }
      }
      if (
        (!(M[z](a.toLowerCase().substring(0, 2)) || a.charAt() == '#') &&
              (a = W(a)),
        !a)
      ) {
        return {
          r: -1,
          g: -1,
          b: -1,
          hex: 'none',
          error: 1,
          toString: Z
        }
      }
      let b
      let d
      let f
      let g
      let h
      let i
      let j = a.match(K)
      return j
        ? (j[2] &&
                ((f = C(j[2].substring(5), 16)),
                (d = C(j[2].substring(3, 5), 16)),
                (b = C(j[2].substring(1, 3), 16))),
          j[3] &&
                ((f = C((h = j[3].charAt(3)) + h, 16)),
                (d = C((h = j[3].charAt(2)) + h, 16)),
                (b = C((h = j[3].charAt(1)) + h, 16))),
          j[4] &&
                ((i = j[4].split(L)),
                (b = B(i[0])),
                i[0].slice(-1) == '%' && (b *= 2.55),
                (d = B(i[1])),
                i[1].slice(-1) == '%' && (d *= 2.55),
                (f = B(i[2])),
                i[2].slice(-1) == '%' && (f *= 2.55),
                j[1].toLowerCase().slice(0, 4) == 'rgba' && (g = B(i[3])),
                i[3] && i[3].slice(-1) == '%' && (g /= 100)),
          j[5]
            ? ((i = j[5].split(L)),
              (b = B(i[0])),
              i[0].slice(-1) == '%' && (b /= 100),
              (d = B(i[1])),
              i[1].slice(-1) == '%' && (d /= 100),
              (f = B(i[2])),
              i[2].slice(-1) == '%' && (f /= 100),
              (i[0].slice(-3) == 'deg' || i[0].slice(-1) == '°') &&
                    (b /= 360),
              j[1].toLowerCase().slice(0, 4) == 'hsba' && (g = B(i[3])),
              i[3] && i[3].slice(-1) == '%' && (g /= 100),
              c.hsb2rgb(b, d, f, g))
            : j[6]
              ? ((i = j[6].split(L)),
                (b = B(i[0])),
                i[0].slice(-1) == '%' && (b /= 100),
                (d = B(i[1])),
                i[1].slice(-1) == '%' && (d /= 100),
                (f = B(i[2])),
                i[2].slice(-1) == '%' && (f /= 100),
                (i[0].slice(-3) == 'deg' || i[0].slice(-1) == '°') &&
                      (b /= 360),
                j[1].toLowerCase().slice(0, 4) == 'hsla' && (g = B(i[3])),
                i[3] && i[3].slice(-1) == '%' && (g /= 100),
                c.hsl2rgb(b, d, f, g))
              : ((b = F(D.round(b), 255)),
                (d = F(D.round(d), 255)),
                (f = F(D.round(f), 255)),
                (g = F(E(g, 0), 1)),
                (j = { r: b, g: d, b: f, toString: Z }),
                (j.hex =
                      '#' +
                      (16777216 | f | (d << 8) | (b << 16))
                        .toString(16)
                        .slice(1)),
                (j.opacity = e(g, 'finite') ? g : 1),
                j))
        : { r: -1, g: -1, b: -1, hex: 'none', error: 1, toString: Z }
    }, c)),
    (c.hsb = i(function (a, b, d) {
      return c.hsb2rgb(a, b, d).hex
    })),
    (c.hsl = i(function (a, b, d) {
      return c.hsl2rgb(a, b, d).hex
    })),
    (c.rgb = i(function (a, b, c, d) {
      if (e(d, 'finite')) {
        const f = D.round
        return 'rgba(' + [f(a), f(b), f(c), +d.toFixed(2)] + ')'
      }
      return (
        '#' + (16777216 | c | (b << 8) | (a << 16)).toString(16).slice(1)
      )
    }))
    var W = function (a) {
      const b =
          y.doc.getElementsByTagName('head')[0] ||
          y.doc.getElementsByTagName('svg')[0]
      const c = 'rgb(255, 0, 0)'
      return (W = i(function (a) {
        if (a.toLowerCase() == 'red') return c;
        (b.style.color = c), (b.style.color = a)
        const d = y.doc.defaultView
          .getComputedStyle(b, I)
          .getPropertyValue('color')
        return d == c ? null : d
      }))(a)
    }
    const X = function () {
      return 'hsb(' + [this.h, this.s, this.b] + ')'
    }
    const Y = function () {
      return 'hsl(' + [this.h, this.s, this.l] + ')'
    }
    var Z = function () {
      return this.opacity == 1 || this.opacity == null
        ? this.hex
        : 'rgba(' + [this.r, this.g, this.b, this.opacity] + ')'
    }
    const $ = function (a, b, d) {
      if (
        (b == null &&
            e(a, 'object') &&
            'r' in a &&
            'g' in a &&
            'b' in a &&
            ((d = a.b), (b = a.g), (a = a.r)),
        b == null && e(a, string))
      ) {
        const f = c.getRGB(a);
        (a = f.r), (b = f.g), (d = f.b)
      }
      return (
        (a > 1 || b > 1 || d > 1) && ((a /= 255), (b /= 255), (d /= 255)),
        [a, b, d]
      )
    }
    const _ = function (a, b, d, f) {
      (a = D.round(255 * a)), (b = D.round(255 * b)), (d = D.round(255 * d))
      const g = {
        r: a,
        g: b,
        b: d,
        opacity: e(f, 'finite') ? f : 1,
        hex: c.rgb(a, b, d),
        toString: Z
      }
      return e(f, 'finite') && (g.opacity = f), g
    };
    (c.color = function (a) {
      let b
      return (
        e(a, 'object') && 'h' in a && 's' in a && 'b' in a
          ? ((b = c.hsb2rgb(a)),
            (a.r = b.r),
            (a.g = b.g),
            (a.b = b.b),
            (a.opacity = 1),
            (a.hex = b.hex))
          : e(a, 'object') && 'h' in a && 's' in a && 'l' in a
            ? ((b = c.hsl2rgb(a)),
              (a.r = b.r),
              (a.g = b.g),
              (a.b = b.b),
              (a.opacity = 1),
              (a.hex = b.hex))
            : (e(a, 'string') && (a = c.getRGB(a)),
              e(a, 'object') &&
                'r' in a &&
                'g' in a &&
                'b' in a &&
                !('error' in a)
                ? ((b = c.rgb2hsl(a)),
                  (a.h = b.h),
                  (a.s = b.s),
                  (a.l = b.l),
                  (b = c.rgb2hsb(a)),
                  (a.v = b.b))
                : ((a = { hex: 'none' }),
                  (a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1),
                  (a.error = 1))),
        (a.toString = Z),
        a
      )
    }),
    (c.hsb2rgb = function (a, b, c, d) {
      e(a, 'object') &&
            'h' in a &&
            's' in a &&
            'b' in a &&
            ((c = a.b), (b = a.s), (d = a.o), (a = a.h)),
      (a *= 360)
      let f, g, h, i, j
      return (
        (a = (a % 360) / 60),
        (j = c * b),
        (i = j * (1 - G((a % 2) - 1))),
        (f = g = h = c - j),
        (a = ~~a),
        (f += [j, i, 0, 0, i, j][a]),
        (g += [i, j, j, i, 0, 0][a]),
        (h += [0, 0, i, j, j, i][a]),
        _(f, g, h, d)
      )
    }),
    (c.hsl2rgb = function (a, b, c, d) {
      e(a, 'object') &&
            'h' in a &&
            's' in a &&
            'l' in a &&
            ((c = a.l), (b = a.s), (a = a.h)),
      (a > 1 || b > 1 || c > 1) && ((a /= 360), (b /= 100), (c /= 100)),
      (a *= 360)
      let f, g, h, i, j
      return (
        (a = (a % 360) / 60),
        (j = 2 * b * (c < 0.5 ? c : 1 - c)),
        (i = j * (1 - G((a % 2) - 1))),
        (f = g = h = c - j / 2),
        (a = ~~a),
        (f += [j, i, 0, 0, i, j][a]),
        (g += [i, j, j, i, 0, 0][a]),
        (h += [0, 0, i, j, j, i][a]),
        _(f, g, h, d)
      )
    }),
    (c.rgb2hsb = function (a, b, c) {
      (c = $(a, b, c)), (a = c[0]), (b = c[1]), (c = c[2])
      let d, e, f, g
      return (
        (f = E(a, b, c)),
        (g = f - F(a, b, c)),
        (d =
              g == 0
                ? null
                : f == a
                  ? (b - c) / g
                  : f == b
                    ? (c - a) / g + 2
                    : (a - b) / g + 4),
        (d = (((d + 360) % 6) * 60) / 360),
        (e = g == 0 ? 0 : g / f),
        { h: d, s: e, b: f, toString: X }
      )
    }),
    (c.rgb2hsl = function (a, b, c) {
      (c = $(a, b, c)), (a = c[0]), (b = c[1]), (c = c[2])
      let d, e, f, g, h, i
      return (
        (g = E(a, b, c)),
        (h = F(a, b, c)),
        (i = g - h),
        (d =
              i == 0
                ? null
                : g == a
                  ? (b - c) / i
                  : g == b
                    ? (c - a) / i + 2
                    : (a - b) / i + 4),
        (d = (((d + 360) % 6) * 60) / 360),
        (f = (g + h) / 2),
        (e = i == 0 ? 0 : f < 0.5 ? i / (2 * f) : i / (2 - 2 * f)),
        { h: d, s: e, l: f, toString: Y }
      )
    }),
    (c.parsePathString = function (a) {
      if (!a) return null
      const b = c.path(a)
      if (b.arr) return c.path.clone(b.arr)
      const d = {
        a: 7,
        c: 6,
        o: 2,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        u: 3,
        z: 0
      }
      let f = []
      return (
        e(a, 'array') && e(a[0], 'array') && (f = c.path.clone(a)),
        f.length ||
              A(a).replace(N, function (a, b, c) {
                const e = []
                let g = b.toLowerCase()
                if (
                  (c.replace(P, function (a, b) {
                    b && e.push(+b)
                  }),
                  g == 'm' &&
                    e.length > 2 &&
                    (f.push([b].concat(e.splice(0, 2))),
                    (g = 'l'),
                    (b = b == 'm' ? 'l' : 'L')),
                  g == 'o' && e.length == 1 && f.push([b, e[0]]),
                  g == 'r')
                ) {
                  f.push([b].concat(e))
                } else {
                  for (
                    ;
                    e.length >= d[g] &&
                    (f.push([b].concat(e.splice(0, d[g]))), d[g]);

                  );
                }
              }),
        (f.toString = c.path.toString),
        (b.arr = c.path.clone(f)),
        f
      )
    })
    var ab = (c.parseTransformString = function (a) {
      if (!a) return null
      let b = []
      return (
        e(a, 'array') && e(a[0], 'array') && (b = c.path.clone(a)),
        b.length ||
            A(a).replace(O, function (a, c, d) {
              {
                var e = []
                c.toLowerCase()
              }
              d.replace(P, function (a, b) {
                b && e.push(+b)
              }),
              b.push([c].concat(e))
            }),
        (b.toString = c.path.toString),
        b
      )
    });
    (c._.svgTransform2string = m),
    (c._.rgTransform = /^[a-z][\s]*-?\.?\d/i),
    (c._.transform2matrix = n),
    (c._unit2px = q)
    y.doc.contains || y.doc.compareDocumentPosition
      ? function (a, b) {
        const c = a.nodeType == 9 ? a.documentElement : a
        const d = b && b.parentNode
        return (
          a == d ||
              !(
                !d ||
                d.nodeType != 1 ||
                !(c.contains
                  ? c.contains(d)
                  : a.compareDocumentPosition &&
                    16 & a.compareDocumentPosition(d))
              )
        )
      }
      : function (a, b) {
        if (b) for (; b;) if (((b = b.parentNode), b == a)) return !0
        return !1
      };
    (c._.getSomeDefs = o),
    (c._.getSomeSVG = p),
    (c.select = function (a) {
      return (
        (a = A(a).replace(/([^\\]):/g, '$1\\:')), w(y.doc.querySelector(a))
      )
    }),
    (c.selectAll = function (a) {
      for (
        var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0;
        e < b.length;
        e++
      ) {
        d.push(w(b[e]))
      }
      return d
    }),
    setInterval(function () {
      for (const a in V) {
        if (V[z](a)) {
          const b = V[a]
          const c = b.node;
          ((b.type != 'svg' && !c.ownerSVGElement) ||
                (b.type == 'svg' &&
                  (!c.parentNode ||
                    ('ownerSVGElement' in c.parentNode &&
                      !c.ownerSVGElement)))) &&
                delete V[a]
        }
      }
    }, 1e4),
    (s.prototype.attr = function (a, c) {
      const d = this
      const f = d.node
      if (!a) {
        if (f.nodeType != 1) return { text: f.nodeValue }
        for (
          var g = f.attributes, h = {}, i = 0, j = g.length;
          j > i;
          i++
        ) {
          h[g[i].nodeName] = g[i].nodeValue
        }
        return h
      }
      if (e(a, 'string')) {
        if (!(arguments.length > 1)) {
          return b('snap.util.getattr.' + a, d).firstDefined()
        }
        const k = {};
        (k[a] = c), (a = k)
      }
      for (const l in a) a[z](l) && b('snap.util.attr.' + l, d, a[l])
      return d
    }),
    (c.parse = function (a) {
      let b = y.doc.createDocumentFragment()
      let c = !0
      const d = y.doc.createElement('div')
      if (
        ((a = A(a)),
        a.match(/^\s*<\s*svg(?:\s|>)/) ||
              ((a = '<svg>' + a + '</svg>'), (c = !1)),
        (d.innerHTML = a),
        (a = d.getElementsByTagName('svg')[0]))
      ) {
        if (c) b = a
        else for (; a.firstChild;) b.appendChild(a.firstChild)
      }
      return new t(b)
    }),
    (c.fragment = function () {
      for (
        var a = Array.prototype.slice.call(arguments, 0),
          b = y.doc.createDocumentFragment(),
          d = 0,
          e = a.length;
        e > d;
        d++
      ) {
        const f = a[d]
        f.node && f.node.nodeType && b.appendChild(f.node),
        f.nodeType && b.appendChild(f),
        typeof f === 'string' && b.appendChild(c.parse(f).node)
      }
      return new t(b)
    }),
    (c._.make = u),
    (c._.wrap = w),
    (v.prototype.el = function (a, b) {
      const c = u(a, this.node)
      return b && c.attr(b), c
    }),
    (s.prototype.children = function () {
      for (
        var a = [], b = this.node.childNodes, d = 0, e = b.length;
        e > d;
        d++
      ) {
        a[d] = c(b[d])
      }
      return a
    }),
    (s.prototype.toJSON = function () {
      const a = []
      return x([this], a), a[0]
    }),
    b.on('snap.util.getattr', function () {
      let a = b.nt()
      a = a.substring(a.lastIndexOf('.') + 1)
      const c = a.replace(/[A-Z]/g, function (a) {
        return '-' + a.toLowerCase()
      })
      return bb[z](c)
        ? this.node.ownerDocument.defaultView
          .getComputedStyle(this.node, null)
          .getPropertyValue(c)
        : d(this.node, a)
    })
    var bb = {
      'alignment-baseline': 0,
      'baseline-shift': 0,
      clip: 0,
      'clip-path': 0,
      'clip-rule': 0,
      color: 0,
      'color-interpolation': 0,
      'color-interpolation-filters': 0,
      'color-profile': 0,
      'color-rendering': 0,
      cursor: 0,
      direction: 0,
      display: 0,
      'dominant-baseline': 0,
      'enable-background': 0,
      fill: 0,
      'fill-opacity': 0,
      'fill-rule': 0,
      filter: 0,
      'flood-color': 0,
      'flood-opacity': 0,
      font: 0,
      'font-family': 0,
      'font-size': 0,
      'font-size-adjust': 0,
      'font-stretch': 0,
      'font-style': 0,
      'font-variant': 0,
      'font-weight': 0,
      'glyph-orientation-horizontal': 0,
      'glyph-orientation-vertical': 0,
      'image-rendering': 0,
      kerning: 0,
      'letter-spacing': 0,
      'lighting-color': 0,
      marker: 0,
      'marker-end': 0,
      'marker-mid': 0,
      'marker-start': 0,
      mask: 0,
      opacity: 0,
      overflow: 0,
      'pointer-events': 0,
      'shape-rendering': 0,
      'stop-color': 0,
      'stop-opacity': 0,
      stroke: 0,
      'stroke-dasharray': 0,
      'stroke-dashoffset': 0,
      'stroke-linecap': 0,
      'stroke-linejoin': 0,
      'stroke-miterlimit': 0,
      'stroke-opacity': 0,
      'stroke-width': 0,
      'text-anchor': 0,
      'text-decoration': 0,
      'text-rendering': 0,
      'unicode-bidi': 0,
      visibility: 0,
      'word-spacing': 0,
      'writing-mode': 0
    }
    b.on('snap.util.attr', function (a) {
      let c = b.nt()
      const e = {};
      (c = c.substring(c.lastIndexOf('.') + 1)), (e[c] = a)
      const f = c.replace(/-(\w)/gi, function (a, b) {
        return b.toUpperCase()
      })
      const g = c.replace(/[A-Z]/g, function (a) {
        return '-' + a.toLowerCase()
      })
      bb[z](g) ? (this.node.style[f] = a == null ? I : a) : d(this.node, e)
    }),
    (function () {})(v.prototype),
    (c.ajax = function (a, c, d, f) {
      const g = new XMLHttpRequest()
      const h = S()
      if (g) {
        if (e(c, 'function')) (f = d), (d = c), (c = null)
        else if (e(c, 'object')) {
          const i = []
          for (const j in c) {
            c.hasOwnProperty(j) &&
                  i.push(
                    encodeURIComponent(j) + '=' + encodeURIComponent(c[j])
                  )
          }
          c = i.join('&')
        }
        return (
          g.open(c ? 'POST' : 'GET', a, !0),
          c &&
                (g.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
                g.setRequestHeader(
                  'Content-type',
                  'application/x-www-form-urlencoded'
                )),
          d &&
                (b.once('snap.ajax.' + h + '.0', d),
                b.once('snap.ajax.' + h + '.200', d),
                b.once('snap.ajax.' + h + '.304', d)),
          (g.onreadystatechange = function () {
            g.readyState == 4 && b('snap.ajax.' + h + '.' + g.status, f, g)
          }),
          g.readyState == 4 ? g : (g.send(c), g)
        )
      }
    }),
    (c.load = function (a, b, d) {
      c.ajax(a, function (a) {
        const e = c.parse(a.responseText)
        d ? b.call(d, e) : b(e)
      })
    })
    const cb = function (a) {
      const b = a.getBoundingClientRect()
      const c = a.ownerDocument
      const d = c.body
      const e = c.documentElement
      const f = e.clientTop || d.clientTop || 0
      const h = e.clientLeft || d.clientLeft || 0
      const i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f
      const j =
          b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h
      return { y: i, x: j }
    }
    return (
      (c.getElementByPoint = function (a, b) {
        const c = this
        let d = (c.canvas, y.doc.elementFromPoint(a, b))
        if (y.win.opera && d.tagName == 'svg') {
          const e = cb(d)
          const f = d.createSVGRect();
          (f.x = a - e.x), (f.y = b - e.y), (f.width = f.height = 1)
          const g = d.getIntersectionList(f, null)
          g.length && (d = g[g.length - 1])
        }
        return d ? w(d) : null
      }),
      (c.plugin = function (a) {
        a(c, s, v, y, t)
      }),
      (y.win.Snap = c),
      c
    )
  })(a || this)
  return (
    d.plugin(function (d, e, f, g, h) {
      function i (a, b) {
        if (b == null) {
          var c = !0
          if (
            ((b = a.node.getAttribute(
              a.type == 'linearGradient' || a.type == 'radialGradient'
                ? 'gradientTransform'
                : a.type == 'pattern'
                  ? 'patternTransform'
                  : 'transform'
            )),
            !b)
          ) {
            return new d.Matrix()
          }
          b = d._.svgTransform2string(b)
        } else {
          (b = d._.rgTransform.test(b)
            ? o(b).replace(/\.{3}|\u2026/g, a._.transform || '')
            : d._.svgTransform2string(b)),
          n(b, 'array') && (b = d.path ? d.path.toString.call(b) : o(b)),
          (a._.transform = b)
        }
        const e = d._.transform2matrix(b, a.getBBox(1))
        return c ? e : void (a.matrix = e)
      }
      function j (a) {
        function b (a, b) {
          let c = q(a.node, b);
          (c = c && c.match(f)),
          (c = c && c[2]),
          c &&
                c.charAt() == '#' &&
                ((c = c.substring(1)),
                c &&
                  (h[c] = (h[c] || []).concat(function (c) {
                    const d = {};
                    (d[b] = URL(c)), q(a.node, d)
                  })))
        }
        function c (a) {
          let b = q(a.node, 'xlink:href')
          b &&
              b.charAt() == '#' &&
              ((b = b.substring(1)),
              b &&
                (h[b] = (h[b] || []).concat(function (b) {
                  a.attr('xlink:href', '#' + b)
                })))
        }
        for (
          var d,
            e = a.selectAll('*'),
            f = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            g = [],
            h = {},
            i = 0,
            j = e.length;
          j > i;
          i++
        ) {
          (d = e[i]),
          b(d, 'fill'),
          b(d, 'stroke'),
          b(d, 'filter'),
          b(d, 'mask'),
          b(d, 'clip-path'),
          c(d)
          const k = q(d.node, 'id')
          k && (q(d.node, { id: d.id }), g.push({ old: k, id: d.id }))
        }
        for (i = 0, j = g.length; j > i; i++) {
          const l = h[g[i].old]
          if (l) for (let m = 0, n = l.length; n > m; m++) l[m](g[i].id)
        }
      }
      function k (a, b, c) {
        return function (d) {
          let e = d.slice(a, b)
          return e.length == 1 && (e = e[0]), c ? c(e) : e
        }
      }
      function l (a) {
        return function () {
          let b = a ? '<' + this.type : ''
          const c = this.node.attributes
          const d = this.node.childNodes
          if (a) {
            for (var e = 0, f = c.length; f > e; e++) {
              b +=
                  ' ' +
                  c[e].name +
                  '="' +
                  c[e].value.replace(/"/g, '\\"') +
                  '"'
            }
          }
          if (d.length) {
            for (a && (b += '>'), e = 0, f = d.length; f > e; e++) {
              d[e].nodeType == 3
                ? (b += d[e].nodeValue)
                : d[e].nodeType == 1 && (b += u(d[e]).toString())
            }
            a && (b += '</' + this.type + '>')
          } else a && (b += '/>')
          return b
        }
      }
      const m = e.prototype
      var n = d.is
      var o = String
      const p = d._unit2px
      var q = d._.$
      const r = d._.make
      const s = d._.getSomeDefs
      const t = 'hasOwnProperty'
      var u = d._.wrap
      m.getBBox = function (a) {
        if (!d.Matrix || !d.path) return this.node.getBBox()
        let b = this
        let c = new d.Matrix()
        if (b.removed) return d._.box()
        for (; b.type == 'use';) {
          if (
            (a ||
                (c = c.add(
                  b
                    .transform()
                    .localMatrix.translate(b.attr('x') || 0, b.attr('y') || 0)
                )),
            b.original)
          ) {
            b = b.original
          } else {
            const e = b.attr('xlink:href')
            b = b.original = b.node.ownerDocument.getElementById(
              e.substring(e.indexOf('#') + 1)
            )
          }
        }
        const f = b._
        const g = d.path.get[b.type] || d.path.get.deflt
        try {
          return a
            ? ((f.bboxwt = g
                ? d.path.getBBox((b.realPath = g(b)))
                : d._.box(b.node.getBBox())),
              d._.box(f.bboxwt))
            : ((b.realPath = g(b)),
              (b.matrix = b.transform().localMatrix),
              (f.bbox = d.path.getBBox(
                d.path.map(b.realPath, c.add(b.matrix))
              )),
              d._.box(f.bbox))
        } catch (h) {
          return d._.box()
        }
      }
      const v = function () {
        return this.string
      };
      (m.transform = function (a) {
        const b = this._
        if (a == null) {
          for (
            var c,
              e = this,
              f = new d.Matrix(this.node.getCTM()),
              g = i(this),
              h = [g],
              j = new d.Matrix(),
              k = g.toTransformString(),
              l = o(g) == o(this.matrix) ? o(b.transform) : k;
            e.type != 'svg' && (e = e.parent());

          ) {
            h.push(i(e))
          }
          for (c = h.length; c--;) j.add(h[c])
          return {
            string: l,
            globalMatrix: f,
            totalMatrix: j,
            localMatrix: g,
            diffMatrix: f.clone().add(g.invert()),
            global: f.toTransformString(),
            total: j.toTransformString(),
            local: k,
            toString: v
          }
        }
        return (
          a instanceof d.Matrix
            ? ((this.matrix = a), (this._.transform = a.toTransformString()))
            : i(this, a),
          this.node &&
              (this.type == 'linearGradient' || this.type == 'radialGradient'
                ? q(this.node, { gradientTransform: this.matrix })
                : this.type == 'pattern'
                  ? q(this.node, { patternTransform: this.matrix })
                  : q(this.node, { transform: this.matrix })),
          this
        )
      }),
      (m.parent = function () {
        return u(this.node.parentNode)
      }),
      (m.append = m.add =
            function (a) {
              if (a) {
                if (a.type == 'set') {
                  const b = this
                  return (
                    a.forEach(function (a) {
                      b.add(a)
                    }),
                    this
                  )
                }
                (a = u(a)),
                this.node.appendChild(a.node),
                (a.paper = this.paper)
              }
              return this
            }),
      (m.appendTo = function (a) {
        return a && ((a = u(a)), a.append(this)), this
      }),
      (m.prepend = function (a) {
        if (a) {
          if (a.type == 'set') {
            let b
            const c = this
            return (
              a.forEach(function (a) {
                b ? b.after(a) : c.prepend(a), (b = a)
              }),
              this
            )
          }
          a = u(a)
          const d = a.parent()
          this.node.insertBefore(a.node, this.node.firstChild),
          this.add && this.add(),
          (a.paper = this.paper),
          this.parent() && this.parent().add(),
          d && d.add()
        }
        return this
      }),
      (m.prependTo = function (a) {
        return (a = u(a)), a.prepend(this), this
      }),
      (m.before = function (a) {
        if (a.type == 'set') {
          const b = this
          return (
            a.forEach(function (a) {
              const c = a.parent()
              b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
            }),
            this.parent().add(),
            this
          )
        }
        a = u(a)
        const c = a.parent()
        return (
          this.node.parentNode.insertBefore(a.node, this.node),
          this.parent() && this.parent().add(),
          c && c.add(),
          (a.paper = this.paper),
          this
        )
      }),
      (m.after = function (a) {
        a = u(a)
        const b = a.parent()
        return (
          this.node.nextSibling
            ? this.node.parentNode.insertBefore(
              a.node,
              this.node.nextSibling
            )
            : this.node.parentNode.appendChild(a.node),
          this.parent() && this.parent().add(),
          b && b.add(),
          (a.paper = this.paper),
          this
        )
      }),
      (m.insertBefore = function (a) {
        a = u(a)
        const b = this.parent()
        return (
          a.node.parentNode.insertBefore(this.node, a.node),
          (this.paper = a.paper),
          b && b.add(),
          a.parent() && a.parent().add(),
          this
        )
      }),
      (m.insertAfter = function (a) {
        a = u(a)
        const b = this.parent()
        return (
          a.node.parentNode.insertBefore(this.node, a.node.nextSibling),
          (this.paper = a.paper),
          b && b.add(),
          a.parent() && a.parent().add(),
          this
        )
      }),
      (m.remove = function () {
        const a = this.parent()
        return (
          this.node.parentNode &&
                this.node.parentNode.removeChild(this.node),
          delete this.paper,
          (this.removed = !0),
          a && a.add(),
          this
        )
      }),
      (m.select = function (a) {
        return u(this.node.querySelector(a))
      }),
      (m.selectAll = function (a) {
        for (
          var b = this.node.querySelectorAll(a),
            c = (d.set || Array)(),
            e = 0;
          e < b.length;
          e++
        ) {
          c.push(u(b[e]))
        }
        return c
      }),
      (m.asPX = function (a, b) {
        return b == null && (b = this.attr(a)), +p(this, a, b)
      }),
      (m.use = function () {
        let a
        let b = this.node.id
        return (
          b || ((b = this.id), q(this.node, { id: b })),
          (a =
                this.type == 'linearGradient' ||
                this.type == 'radialGradient' ||
                this.type == 'pattern'
                  ? r(this.type, this.node.parentNode)
                  : r('use', this.node.parentNode)),
          q(a.node, { 'xlink:href': '#' + b }),
          (a.original = this),
          a
        )
      }),
      (m.clone = function () {
        const a = u(this.node.cloneNode(!0))
        return (
          q(a.node, 'id') && q(a.node, { id: a.id }),
          j(a),
          a.insertAfter(this),
          a
        )
      }),
      (m.toDefs = function () {
        const a = s(this)
        return a.appendChild(this.node), this
      }),
      (m.pattern = m.toPattern =
            function (a, b, c, d) {
              const e = r('pattern', s(this))
              return (
                a == null && (a = this.getBBox()),
                n(a, 'object') &&
                  'x' in a &&
                  ((b = a.y), (c = a.width), (d = a.height), (a = a.x)),
                q(e.node, {
                  x: a,
                  y: b,
                  width: c,
                  height: d,
                  patternUnits: 'userSpaceOnUse',
                  id: e.id,
                  viewBox: [a, b, c, d].join(' ')
                }),
                e.node.appendChild(this.node),
                e
              )
            }),
      (m.marker = function (a, b, c, d, e, f) {
        const g = r('marker', s(this))
        return (
          a == null && (a = this.getBBox()),
          n(a, 'object') &&
                'x' in a &&
                ((b = a.y),
                (c = a.width),
                (d = a.height),
                (e = a.refX || a.cx),
                (f = a.refY || a.cy),
                (a = a.x)),
          q(g.node, {
            viewBox: [a, b, c, d].join(' '),
            markerWidth: c,
            markerHeight: d,
            orient: 'auto',
            refX: e || 0,
            refY: f || 0,
            id: g.id
          }),
          g.node.appendChild(this.node),
          g
        )
      })
      const w = function (a, b, d, e) {
        typeof d !== 'function' || d.length || ((e = d), (d = c.linear)),
        (this.attr = a),
        (this.dur = b),
        d && (this.easing = d),
        e && (this.callback = e)
      };
      (d._.Animation = w),
      (d.animation = function (a, b, c, d) {
        return new w(a, b, c, d)
      }),
      (m.inAnim = function () {
        const a = this
        const b = []
        for (const c in a.anims) {
          a.anims[t](c) &&
                !(function (a) {
                  b.push({
                    anim: new w(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function (b) {
                      return a.status(b)
                    },
                    stop: function () {
                      a.stop()
                    }
                  })
                })(a.anims[c])
        }
        return b
      }),
      (d.animate = function (a, d, e, f, g, h) {
        typeof g !== 'function' || g.length || ((h = g), (g = c.linear))
        const i = c.time()
        const j = c(a, d, i, i + f, c.time, e, g)
        return h && b.once('mina.finish.' + j.id, h), j
      }),
      (m.stop = function () {
        for (let a = this.inAnim(), b = 0, c = a.length; c > b; b++) {
          a[b].stop()
        }
        return this
      }),
      (m.animate = function (a, d, e, f) {
        typeof e !== 'function' || e.length || ((f = e), (e = c.linear)),
        a instanceof w &&
                ((f = a.callback), (e = a.easing), (d = a.dur), (a = a.attr))
        let g
        let h
        let i
        let j
        let l = []
        let m = []
        const p = {}
        const q = this
        for (const r in a) {
          if (a[t](r)) {
            q.equal
              ? ((j = q.equal(r, o(a[r]))),
                (g = j.from),
                (h = j.to),
                (i = j.f))
              : ((g = +q.attr(r)), (h = +a[r]))
            const s = n(g, 'array') ? g.length : 1;
            (p[r] = k(l.length, l.length + s, i)),
            (l = l.concat(g)),
            (m = m.concat(h))
          }
        }
        const u = c.time()
        const v = c(
          l,
          m,
          u,
          u + d,
          c.time,
          function (a) {
            const b = {}
            for (const c in p) p[t](c) && (b[c] = p[c](a))
            q.attr(b)
          },
          e
        )
        return (
          (q.anims[v.id] = v),
          (v._attrs = a),
          (v._callback = f),
          b('snap.animcreated.' + q.id, v),
          b.once('mina.finish.' + v.id, function () {
            delete q.anims[v.id], f && f.call(q)
          }),
          b.once('mina.stop.' + v.id, function () {
            delete q.anims[v.id]
          }),
          q
        )
      })
      const x = {};
      (m.data = function (a, c) {
        const e = (x[this.id] = x[this.id] || {})
        if (arguments.length == 0) {
          return b('snap.data.get.' + this.id, this, e, null), e
        }
        if (arguments.length == 1) {
          if (d.is(a, 'object')) {
            for (const f in a) a[t](f) && this.data(f, a[f])
            return this
          }
          return b('snap.data.get.' + this.id, this, e[a], a), e[a]
        }
        return (e[a] = c), b('snap.data.set.' + this.id, this, c, a), this
      }),
      (m.removeData = function (a) {
        return (
          a == null
            ? (x[this.id] = {})
            : x[this.id] && delete x[this.id][a],
          this
        )
      }),
      (m.outerSVG = m.toString = l(1)),
      (m.innerSVG = l()),
      (m.toDataURL = function () {
        if (a && a.btoa) {
          const b = this.getBBox()
          const c = d.format(
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',
            {
              x: +b.x.toFixed(3),
              y: +b.y.toFixed(3),
              width: +b.width.toFixed(3),
              height: +b.height.toFixed(3),
              contents: this.outerSVG()
            }
          )
          return (
            'data:image/svg+xml;base64,' +
                btoa(unescape(encodeURIComponent(c)))
          )
        }
      }),
      (h.prototype.select = m.select),
      (h.prototype.selectAll = m.selectAll)
    }),
    d.plugin(function (a) {
      function b (a, b, d, e, f, g) {
        return b == null && c.call(a) == '[object SVGMatrix]'
          ? ((this.a = a.a),
            (this.b = a.b),
            (this.c = a.c),
            (this.d = a.d),
            (this.e = a.e),
            void (this.f = a.f))
          : void (a != null
            ? ((this.a = +a),
              (this.b = +b),
              (this.c = +d),
              (this.d = +e),
              (this.e = +f),
              (this.f = +g))
            : ((this.a = 1),
              (this.b = 0),
              (this.c = 0),
              (this.d = 1),
              (this.e = 0),
              (this.f = 0)))
      }
      var c = Object.prototype.toString
      const d = String
      const e = Math
      const f = ''
      !(function (c) {
        function g (a) {
          return a[0] * a[0] + a[1] * a[1]
        }
        function h (a) {
          const b = e.sqrt(g(a))
          a[0] && (a[0] /= b), a[1] && (a[1] /= b)
        }
        (c.add = function (a, c, d, e, f, g) {
          let h
          let i
          let j
          let k
          const l = [[], [], []]
          const m = [
            [this.a, this.c, this.e],
            [this.b, this.d, this.f],
            [0, 0, 1]
          ]
          let n = [
            [a, d, f],
            [c, e, g],
            [0, 0, 1]
          ]
          for (
            a &&
                a instanceof b &&
                (n = [
                  [a.a, a.c, a.e],
                  [a.b, a.d, a.f],
                  [0, 0, 1]
                ]),
            h = 0;
            h < 3;
            h++
          ) {
            for (i = 0; i < 3; i++) {
              for (k = 0, j = 0; j < 3; j++) k += m[h][j] * n[j][i]
              l[h][i] = k
            }
          }
          return (
            (this.a = l[0][0]),
            (this.b = l[1][0]),
            (this.c = l[0][1]),
            (this.d = l[1][1]),
            (this.e = l[0][2]),
            (this.f = l[1][2]),
            this
          )
        }),
        (c.invert = function () {
          const a = this
          const c = a.a * a.d - a.b * a.c
          return new b(
            a.d / c,
            -a.b / c,
            -a.c / c,
            a.a / c,
            (a.c * a.f - a.d * a.e) / c,
            (a.b * a.e - a.a * a.f) / c
          )
        }),
        (c.clone = function () {
          return new b(this.a, this.b, this.c, this.d, this.e, this.f)
        }),
        (c.translate = function (a, b) {
          return this.add(1, 0, 0, 1, a, b)
        }),
        (c.scale = function (a, b, c, d) {
          return (
            b == null && (b = a),
            (c || d) && this.add(1, 0, 0, 1, c, d),
            this.add(a, 0, 0, b, 0, 0),
            (c || d) && this.add(1, 0, 0, 1, -c, -d),
            this
          )
        }),
        (c.rotate = function (b, c, d) {
          (b = a.rad(b)), (c = c || 0), (d = d || 0)
          const f = +e.cos(b).toFixed(9)
          const g = +e.sin(b).toFixed(9)
          return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
        }),
        (c.x = function (a, b) {
          return a * this.a + b * this.c + this.e
        }),
        (c.y = function (a, b) {
          return a * this.b + b * this.d + this.f
        }),
        (c.get = function (a) {
          return +this[d.fromCharCode(97 + a)].toFixed(4)
        }),
        (c.toString = function () {
          return (
            'matrix(' +
                [
                  this.get(0),
                  this.get(1),
                  this.get(2),
                  this.get(3),
                  this.get(4),
                  this.get(5)
                ].join() +
                ')'
          )
        }),
        (c.offset = function () {
          return [this.e.toFixed(4), this.f.toFixed(4)]
        }),
        (c.determinant = function () {
          return this.a * this.d - this.b * this.c
        }),
        (c.split = function () {
          const b = {};
          (b.dx = this.e), (b.dy = this.f)
          const c = [
            [this.a, this.c],
            [this.b, this.d]
          ];
          (b.scalex = e.sqrt(g(c[0]))),
          h(c[0]),
          (b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1]),
          (c[1] = [
            c[1][0] - c[0][0] * b.shear,
            c[1][1] - c[0][1] * b.shear
          ]),
          (b.scaley = e.sqrt(g(c[1]))),
          h(c[1]),
          (b.shear /= b.scaley),
          this.determinant() < 0 && (b.scalex = -b.scalex)
          const d = -c[0][1]
          const f = c[1][1]
          return (
            f < 0
              ? ((b.rotate = a.deg(e.acos(f))),
                d < 0 && (b.rotate = 360 - b.rotate))
              : (b.rotate = a.deg(e.asin(d))),
            (b.isSimple = !(
              +b.shear.toFixed(9) ||
                  (b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate)
            )),
            (b.isSuperSimple =
                  !+b.shear.toFixed(9) &&
                  b.scalex.toFixed(9) == b.scaley.toFixed(9) &&
                  !b.rotate),
            (b.noRotation = !+b.shear.toFixed(9) && !b.rotate),
            b
          )
        }),
        (c.toTransformString = function (a) {
          const b = a || this.split()
          return +b.shear.toFixed(9)
            ? 'm' +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5)
                    ]
            : ((b.scalex = +b.scalex.toFixed(4)),
              (b.scaley = +b.scaley.toFixed(4)),
              (b.rotate = +b.rotate.toFixed(4)),
              (b.dx || b.dy
                ? 't' + [+b.dx.toFixed(4), +b.dy.toFixed(4)]
                : f) +
                    (b.scalex != 1 || b.scaley != 1
                      ? 's' + [b.scalex, b.scaley, 0, 0]
                      : f) +
                    (b.rotate ? 'r' + [+b.rotate.toFixed(4), 0, 0] : f))
        })
      })(b.prototype),
      (a.Matrix = b),
      (a.matrix = function (a, c, d, e, f, g) {
        return new b(a, c, d, e, f, g)
      })
    }),
    d.plugin(function (a, c, d, e, f) {
      function g (d) {
        return function (e) {
          if (
            (b.stop(),
            e instanceof f &&
                e.node.childNodes.length == 1 &&
                (e.node.firstChild.tagName == 'radialGradient' ||
                  e.node.firstChild.tagName == 'linearGradient' ||
                  e.node.firstChild.tagName == 'pattern') &&
                ((e = e.node.firstChild), n(this).appendChild(e), (e = l(e))),
            e instanceof c)
          ) {
            if (
              e.type == 'radialGradient' ||
                e.type == 'linearGradient' ||
                e.type == 'pattern'
            ) {
              e.node.id || p(e.node, { id: e.id })
              var g = q(e.node.id)
            } else g = e.attr(d)
          } else if (((g = a.color(e)), g.error)) {
            const h = a(n(this).ownerSVGElement).gradient(e)
            h
              ? (h.node.id || p(h.node, { id: h.id }), (g = q(h.node.id)))
              : (g = e)
          } else g = r(g)
          const i = {};
          (i[d] = g), p(this.node, i), (this.node.style[d] = t)
        }
      }
      function h (a) {
        b.stop(), a == +a && (a += 'px'), (this.node.style.fontSize = a)
      }
      function i (a) {
        for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
          const f = c[d]
          f.nodeType == 3 && b.push(f.nodeValue),
          f.tagName == 'tspan' &&
                b.push(
                  f.childNodes.length == 1 && f.firstChild.nodeType == 3
                    ? f.firstChild.nodeValue
                    : i(f)
                )
        }
        return b
      }
      function j () {
        return b.stop(), this.node.style.fontSize
      }
      const k = a._.make
      var l = a._.wrap
      const m = a.is
      var n = a._.getSomeDefs
      const o = /^url\(#?([^)]+)\)$/
      var p = a._.$
      var q = a.url
      var r = String
      const s = a._.separator
      var t = ''
      b.on('snap.util.attr.mask', function (a) {
        if (a instanceof c || a instanceof f) {
          if (
            (b.stop(),
            a instanceof f &&
                a.node.childNodes.length == 1 &&
                ((a = a.node.firstChild), n(this).appendChild(a), (a = l(a))),
            a.type == 'mask')
          ) {
            var d = a
          } else (d = k('mask', n(this))), d.node.appendChild(a.node)
          !d.node.id && p(d.node, { id: d.id }),
          p(this.node, { mask: q(d.id) })
        }
      }),
      (function (a) {
        b.on('snap.util.attr.clip', a),
        b.on('snap.util.attr.clip-path', a),
        b.on('snap.util.attr.clipPath', a)
      })(function (a) {
        if (a instanceof c || a instanceof f) {
          if ((b.stop(), a.type == 'clipPath')) var d = a
          else {
            (d = k('clipPath', n(this))),
            d.node.appendChild(a.node),
            !d.node.id && p(d.node, { id: d.id })
          }
          p(this.node, { 'clip-path': q(d.node.id || d.id) })
        }
      }),
      b.on('snap.util.attr.fill', g('fill')),
      b.on('snap.util.attr.stroke', g('stroke'))
      const u = /^([lr])(?:\(([^)]*)\))?(.*)$/i
      b.on('snap.util.grad.parse', function (a) {
        a = r(a)
        const b = a.match(u)
        if (!b) return null
        const c = b[1]
        let d = b[2]
        let e = b[3]
        return (
          (d = d.split(/\s*,\s*/).map(function (a) {
            return +a == a ? +a : a
          })),
          d.length == 1 && d[0] == 0 && (d = []),
          (e = e.split('-')),
          (e = e.map(function (a) {
            a = a.split(':')
            const b = { color: a[0] }
            return a[1] && (b.offset = parseFloat(a[1])), b
          })),
          { type: c, params: d, stops: e }
        )
      }),
      b.on('snap.util.attr.d', function (c) {
        b.stop(),
        m(c, 'array') &&
                m(c[0], 'array') &&
                (c = a.path.toString.call(c)),
        (c = r(c)),
        c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)),
        p(this.node, { d: c })
      })(-1),
      b.on('snap.util.attr.#text', function (a) {
        b.stop(), (a = r(a))
        for (var c = e.doc.createTextNode(a); this.node.firstChild;) {
          this.node.removeChild(this.node.firstChild)
        }
        this.node.appendChild(c)
      })(-1),
      b.on('snap.util.attr.path', function (a) {
        b.stop(), this.attr({ d: a })
      })(-1),
      b.on('snap.util.attr.class', function (a) {
        b.stop(), (this.node.className.baseVal = a)
      })(-1),
      b.on('snap.util.attr.viewBox', function (a) {
        let c;
        (c =
              m(a, 'object') && 'x' in a
                ? [a.x, a.y, a.width, a.height].join(' ')
                : m(a, 'array')
                  ? a.join(' ')
                  : a),
        p(this.node, { viewBox: c }),
        b.stop()
      })(-1),
      b.on('snap.util.attr.transform', function (a) {
        this.transform(a), b.stop()
      })(-1),
      b.on('snap.util.attr.r', function (a) {
        this.type == 'rect' && (b.stop(), p(this.node, { rx: a, ry: a }))
      })(-1),
      b.on('snap.util.attr.textpath', function (a) {
        if ((b.stop(), this.type == 'text')) {
          let d, e, f
          if (!a && this.textPath) {
            for (e = this.textPath; e.node.firstChild;) {
              this.node.appendChild(e.node.firstChild)
            }
            return e.remove(), void delete this.textPath
          }
          if (m(a, 'string')) {
            const g = n(this)
            const h = l(g.parentNode).path(a)
            g.appendChild(h.node), (d = h.id), h.attr({ id: d })
          } else {
            (a = l(a)),
            a instanceof c &&
                    ((d = a.attr('id')), d || ((d = a.id), a.attr({ id: d })))
          }
          if (d) {
            if (((e = this.textPath), (f = this.node), e)) {
              e.attr({ 'xlink:href': '#' + d })
            } else {
              for (
                e = p('textPath', { 'xlink:href': '#' + d });
                f.firstChild;

              ) {
                e.appendChild(f.firstChild)
              }
              f.appendChild(e), (this.textPath = l(e))
            }
          }
        }
      })(-1),
      b.on('snap.util.attr.text', function (a) {
        if (this.type == 'text') {
          for (
            var c = this.node,
              d = function (a) {
                const b = p('tspan')
                if (m(a, 'array')) {
                  for (let c = 0; c < a.length; c++) b.appendChild(d(a[c]))
                } else b.appendChild(e.doc.createTextNode(a))
                return b.normalize && b.normalize(), b
              };
            c.firstChild;

          ) {
            c.removeChild(c.firstChild)
          }
          for (let f = d(a); f.firstChild;) c.appendChild(f.firstChild)
        }
        b.stop()
      })(-1),
      b.on('snap.util.attr.fontSize', h)(-1),
      b.on('snap.util.attr.font-size', h)(-1),
      b.on('snap.util.getattr.transform', function () {
        return b.stop(), this.transform()
      })(-1),
      b.on('snap.util.getattr.textpath', function () {
        return b.stop(), this.textPath
      })(-1),
      (function () {
        function c (c) {
          return function () {
            b.stop()
            const d = e.doc.defaultView
              .getComputedStyle(this.node, null)
              .getPropertyValue('marker-' + c)
            return d == 'none' ? d : a(e.doc.getElementById(d.match(o)[1]))
          }
        }
        function d (a) {
          return function (c) {
            b.stop()
            const d = 'marker' + a.charAt(0).toUpperCase() + a.substring(1)
            if (c == '' || !c) return void (this.node.style[d] = 'none')
            if (c.type == 'marker') {
              const e = c.node.id
              return (
                e || p(c.node, { id: c.id }),
                void (this.node.style[d] = q(e))
              )
            }
          }
        }
        b.on('snap.util.getattr.marker-end', c('end'))(-1),
        b.on('snap.util.getattr.markerEnd', c('end'))(-1),
        b.on('snap.util.getattr.marker-start', c('start'))(-1),
        b.on('snap.util.getattr.markerStart', c('start'))(-1),
        b.on('snap.util.getattr.marker-mid', c('mid'))(-1),
        b.on('snap.util.getattr.markerMid', c('mid'))(-1),
        b.on('snap.util.attr.marker-end', d('end'))(-1),
        b.on('snap.util.attr.markerEnd', d('end'))(-1),
        b.on('snap.util.attr.marker-start', d('start'))(-1),
        b.on('snap.util.attr.markerStart', d('start'))(-1),
        b.on('snap.util.attr.marker-mid', d('mid'))(-1),
        b.on('snap.util.attr.markerMid', d('mid'))(-1)
      })(),
      b.on('snap.util.getattr.r', function () {
        return this.type == 'rect' &&
              p(this.node, 'rx') == p(this.node, 'ry')
          ? (b.stop(), p(this.node, 'rx'))
          : void 0
      })(-1),
      b.on('snap.util.getattr.text', function () {
        if (this.type == 'text' || this.type == 'tspan') {
          b.stop()
          const a = i(this.node)
          return a.length == 1 ? a[0] : a
        }
      })(-1),
      b.on('snap.util.getattr.#text', function () {
        return this.node.textContent
      })(-1),
      b.on('snap.util.getattr.viewBox', function () {
        b.stop()
        let c = p(this.node, 'viewBox')
        return c
          ? ((c = c.split(s)), a._.box(+c[0], +c[1], +c[2], +c[3]))
          : void 0
      })(-1),
      b.on('snap.util.getattr.points', function () {
        const a = p(this.node, 'points')
        return b.stop(), a ? a.split(s) : void 0
      })(-1),
      b.on('snap.util.getattr.path', function () {
        const a = p(this.node, 'd')
        return b.stop(), a
      })(-1),
      b.on('snap.util.getattr.class', function () {
        return this.node.className.baseVal
      })(-1),
      b.on('snap.util.getattr.fontSize', j)(-1),
      b.on('snap.util.getattr.font-size', j)(-1)
    }),
    d.plugin(function (a, b) {
      const c = /\S+/g
      const d = String
      const e = b.prototype;
      (e.addClass = function (a) {
        let b
        let e
        let f
        let g
        const h = d(a || '').match(c) || []
        const i = this.node
        const j = i.className.baseVal
        const k = j.match(c) || []
        if (h.length) {
          for (b = 0; (f = h[b++]);) (e = k.indexOf(f)), ~e || k.push(f);
          (g = k.join(' ')), j != g && (i.className.baseVal = g)
        }
        return this
      }),
      (e.removeClass = function (a) {
        let b
        let e
        let f
        let g
        const h = d(a || '').match(c) || []
        const i = this.node
        const j = i.className.baseVal
        const k = j.match(c) || []
        if (k.length) {
          for (b = 0; (f = h[b++]);) {
            (e = k.indexOf(f)), ~e && k.splice(e, 1)
          }
          (g = k.join(' ')), j != g && (i.className.baseVal = g)
        }
        return this
      }),
      (e.hasClass = function (a) {
        const b = this.node
        const d = b.className.baseVal
        const e = d.match(c) || []
        return !!~e.indexOf(a)
      }),
      (e.toggleClass = function (a, b) {
        if (b != null) return b ? this.addClass(a) : this.removeClass(a)
        let d
        let e
        let f
        let g
        const h = (a || '').match(c) || []
        const i = this.node
        const j = i.className.baseVal
        const k = j.match(c) || []
        for (d = 0; (f = h[d++]);) {
          (e = k.indexOf(f)), ~e ? k.splice(e, 1) : k.push(f)
        }
        return (g = k.join(' ')), j != g && (i.className.baseVal = g), this
      })
    }),
    d.plugin(function () {
      function a (a) {
        return a
      }
      function c (a) {
        return function (b) {
          return +b.toFixed(3) + a
        }
      }
      const d = {
        '+': function (a, b) {
          return a + b
        },
        '-': function (a, b) {
          return a - b
        },
        '/': function (a, b) {
          return a / b
        },
        '*': function (a, b) {
          return a * b
        }
      }
      const e = String
      const f = /[a-z]+$/i
      const g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/
      b.on('snap.util.attr', function (a) {
        const c = e(a).match(g)
        if (c) {
          const h = b.nt()
          const i = h.substring(h.lastIndexOf('.') + 1)
          let j = this.attr(i)
          const k = {}
          b.stop()
          const l = c[3] || ''
          const m = j.match(f)
          const n = d[c[1]]
          if (
            (m && m == l
              ? (a = n(parseFloat(j), +c[2]))
              : ((j = this.asPX(i)),
                (a = n(this.asPX(i), this.asPX(i, c[2] + l)))),
            isNaN(j) || isNaN(a))
          ) {
            return
          }
          (k[i] = a), this.attr(k)
        }
      })(-10),
      b.on('snap.util.equal', function (h, i) {
        let j = e(this.attr(h) || '')
        const k = e(i).match(g)
        if (k) {
          b.stop()
          const l = k[3] || ''
          const m = j.match(f)
          const n = d[k[1]]
          return m && m == l
            ? { from: parseFloat(j), to: n(parseFloat(j), +k[2]), f: c(m) }
            : ((j = this.asPX(h)),
              { from: j, to: n(j, this.asPX(h, k[2] + l)), f: a })
        }
      })(-10)
    }),
    d.plugin(function (c, d, e, f) {
      const g = e.prototype
      const h = c.is;
      (g.rect = function (a, b, c, d, e, f) {
        let g
        return (
          f == null && (f = e),
          h(a, 'object') && a == '[object Object]'
            ? (g = a)
            : a != null &&
                ((g = { x: a, y: b, width: c, height: d }),
                e != null && ((g.rx = e), (g.ry = f))),
          this.el('rect', g)
        )
      }),
      (g.circle = function (a, b, c) {
        let d
        return (
          h(a, 'object') && a == '[object Object]'
            ? (d = a)
            : a != null && (d = { cx: a, cy: b, r: c }),
          this.el('circle', d)
        )
      })
      const i = (function () {
        function a () {
          this.parentNode.removeChild(this)
        }
        return function (b, c) {
          const d = f.doc.createElement('img')
          const e = f.doc.body;
          (d.style.cssText = 'position:absolute;left:-9999em;top:-9999em'),
          (d.onload = function () {
            c.call(d), (d.onload = d.onerror = null), e.removeChild(d)
          }),
          (d.onerror = a),
          e.appendChild(d),
          (d.src = b)
        }
      })();
      (g.image = function (a, b, d, e, f) {
        const g = this.el('image')
        if (h(a, 'object') && 'src' in a) g.attr(a)
        else if (a != null) {
          const j = { 'xlink:href': a, preserveAspectRatio: 'none' }
          b != null && d != null && ((j.x = b), (j.y = d)),
          e != null && f != null
            ? ((j.width = e), (j.height = f))
            : i(a, function () {
              c._.$(g.node, {
                width: this.offsetWidth,
                height: this.offsetHeight
              })
            }),
          c._.$(g.node, j)
        }
        return g
      }),
      (g.ellipse = function (a, b, c, d) {
        let e
        return (
          h(a, 'object') && a == '[object Object]'
            ? (e = a)
            : a != null && (e = { cx: a, cy: b, rx: c, ry: d }),
          this.el('ellipse', e)
        )
      }),
      (g.path = function (a) {
        let b
        return (
          h(a, 'object') && !h(a, 'array') ? (b = a) : a && (b = { d: a }),
          this.el('path', b)
        )
      }),
      (g.group = g.g =
            function (a) {
              const b = this.el('g')
              return (
                arguments.length == 1 && a && !a.type
                  ? b.attr(a)
                  : arguments.length &&
                    b.add(Array.prototype.slice.call(arguments, 0)),
                b
              )
            }),
      (g.svg = function (a, b, c, d, e, f, g, i) {
        let j = {}
        return (
          h(a, 'object') && b == null
            ? (j = a)
            : (a != null && (j.x = a),
              b != null && (j.y = b),
              c != null && (j.width = c),
              d != null && (j.height = d),
              e != null &&
                    f != null &&
                    g != null &&
                    i != null &&
                    (j.viewBox = [e, f, g, i])),
          this.el('svg', j)
        )
      }),
      (g.mask = function (a) {
        const b = this.el('mask')
        return (
          arguments.length == 1 && a && !a.type
            ? b.attr(a)
            : arguments.length &&
                  b.add(Array.prototype.slice.call(arguments, 0)),
          b
        )
      }),
      (g.ptrn = function (a, b, c, d, e, f, g, i) {
        if (h(a, 'object')) var j = a
        else {
          (j = { patternUnits: 'userSpaceOnUse' }),
          a && (j.x = a),
          b && (j.y = b),
          c != null && (j.width = c),
          d != null && (j.height = d),
          (j.viewBox =
                  e != null && f != null && g != null && i != null
                    ? [e, f, g, i]
                    : [a || 0, b || 0, c || 0, d || 0])
        }
        return this.el('pattern', j)
      }),
      (g.use = function (a) {
        return a != null
          ? (a instanceof d &&
                  (a.attr('id') || a.attr({ id: c._.id(a) }),
                  (a = a.attr('id'))),
            String(a).charAt() == '#' && (a = a.substring(1)),
            this.el('use', { 'xlink:href': '#' + a }))
          : d.prototype.use.call(this)
      }),
      (g.symbol = function (a, b, c, d) {
        const e = {}
        return (
          a != null &&
                b != null &&
                c != null &&
                d != null &&
                (e.viewBox = [a, b, c, d]),
          this.el('symbol', e)
        )
      }),
      (g.text = function (a, b, c) {
        let d = {}
        return (
          h(a, 'object')
            ? (d = a)
            : a != null && (d = { x: a, y: b, text: c || '' }),
          this.el('text', d)
        )
      }),
      (g.line = function (a, b, c, d) {
        let e = {}
        return (
          h(a, 'object')
            ? (e = a)
            : a != null && (e = { x1: a, x2: c, y1: b, y2: d }),
          this.el('line', e)
        )
      }),
      (g.polyline = function (a) {
        arguments.length > 1 &&
              (a = Array.prototype.slice.call(arguments, 0))
        let b = {}
        return (
          h(a, 'object') && !h(a, 'array')
            ? (b = a)
            : a != null && (b = { points: a }),
          this.el('polyline', b)
        )
      }),
      (g.polygon = function (a) {
        arguments.length > 1 &&
              (a = Array.prototype.slice.call(arguments, 0))
        let b = {}
        return (
          h(a, 'object') && !h(a, 'array')
            ? (b = a)
            : a != null && (b = { points: a }),
          this.el('polygon', b)
        )
      }),
      (function () {
        function d () {
          return this.selectAll('stop')
        }
        function e (a, b) {
          const d = k('stop')
          const e = { offset: +b + '%' }
          return (
            (a = c.color(a)),
            (e['stop-color'] = a.hex),
            a.opacity < 1 && (e['stop-opacity'] = a.opacity),
            k(d, e),
            this.node.appendChild(d),
            this
          )
        }
        function f () {
          if (this.type == 'linearGradient') {
            const a = k(this.node, 'x1') || 0
            const b = k(this.node, 'x2') || 1
            const d = k(this.node, 'y1') || 0
            const e = k(this.node, 'y2') || 0
            return c._.box(a, d, math.abs(b - a), math.abs(e - d))
          }
          const f = this.node.cx || 0.5
          const g = this.node.cy || 0.5
          const h = this.node.r || 0
          return c._.box(f - h, g - h, 2 * h, 2 * h)
        }
        function h (a, c) {
          function d (a, b) {
            for (let c = (b - l) / (a - m), d = m; a > d; d++) {
              g[d].offset = +(+l + c * (d - m)).toFixed(2)
            }
            (m = a), (l = b)
          }
          let e
          const f = b('snap.util.grad.parse', null, c).firstDefined()
          if (!f) return null
          f.params.unshift(a),
          (e =
                  f.type.toLowerCase() == 'l'
                    ? i.apply(0, f.params)
                    : j.apply(0, f.params)),
          f.type != f.type.toLowerCase() &&
                  k(e.node, { gradientUnits: 'userSpaceOnUse' })
          var g = f.stops
          let h = g.length
          var l = 0
          var m = 0
          h--
          for (var n = 0; h > n; n++) 'offset' in g[n] && d(n, g[n].offset)
          for (
            g[h].offset = g[h].offset || 100, d(h, g[h].offset), n = 0;
            h >= n;
            n++
          ) {
            const o = g[n]
            e.addStop(o.color, o.offset)
          }
          return e
        }
        function i (a, b, g, h, i) {
          const j = c._.make('linearGradient', a)
          return (
            (j.stops = d),
            (j.addStop = e),
            (j.getBBox = f),
            b != null && k(j.node, { x1: b, y1: g, x2: h, y2: i }),
            j
          )
        }
        function j (a, b, g, h, i, j) {
          const l = c._.make('radialGradient', a)
          return (
            (l.stops = d),
            (l.addStop = e),
            (l.getBBox = f),
            b != null && k(l.node, { cx: b, cy: g, r: h }),
            i != null && j != null && k(l.node, { fx: i, fy: j }),
            l
          )
        }
        var k = c._.$;
        (g.gradient = function (a) {
          return h(this.defs, a)
        }),
        (g.gradientLinear = function (a, b, c, d) {
          return i(this.defs, a, b, c, d)
        }),
        (g.gradientRadial = function (a, b, c, d, e) {
          return j(this.defs, a, b, c, d, e)
        }),
        (g.toString = function () {
          let a
          const b = this.node.ownerDocument
          const d = b.createDocumentFragment()
          const e = b.createElement('div')
          const f = this.node.cloneNode(!0)
          return (
            d.appendChild(e),
            e.appendChild(f),
            c._.$(f, { xmlns: 'http://www.w3.org/2000/svg' }),
            (a = e.innerHTML),
            d.removeChild(d.firstChild),
            a
          )
        }),
        (g.toDataURL = function () {
          return a && a.btoa
            ? 'data:image/svg+xml;base64,' +
                      btoa(unescape(encodeURIComponent(this)))
            : void 0
        }),
        (g.clear = function () {
          for (var a, b = this.node.firstChild; b;) {
            (a = b.nextSibling),
            b.tagName != 'defs'
              ? b.parentNode.removeChild(b)
              : g.clear.call({ node: b }),
            (b = a)
          }
        })
      })()
    }),
    d.plugin(function (a, b) {
      function c (a) {
        const b = (c.ps = c.ps || {})
        return (
          b[a] ? (b[a].sleep = 100) : (b[a] = { sleep: 100 }),
          setTimeout(function () {
            for (const c in b) {
              b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
            }
          }),
          b[a]
        )
      }
      function d (a, b, c, d) {
        return (
          a == null && (a = b = c = d = 0),
          b == null && ((b = a.y), (c = a.width), (d = a.height), (a = a.x)),
          {
            x: a,
            y: b,
            width: c,
            w: c,
            height: d,
            h: d,
            x2: a + c,
            y2: b + d,
            cx: a + c / 2,
            cy: b + d / 2,
            r1: N.min(c, d) / 2,
            r2: N.max(c, d) / 2,
            r0: N.sqrt(c * c + d * d) / 2,
            path: w(a, b, c, d),
            vb: [a, b, c, d].join(' ')
          }
        )
      }
      function e () {
        return this.join(',').replace(L, '$1')
      }
      function f (a) {
        const b = J(a)
        return (b.toString = e), b
      }
      function g (a, b, c, d, e, f, g, h, j) {
        return j == null
          ? n(a, b, c, d, e, f, g, h)
          : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
      }
      function h (c, d) {
        function e (a) {
          return +(+a).toFixed(3)
        }
        return a._.cacher(
          function (a, f, h) {
            a instanceof b && (a = a.attr('d')), (a = E(a))
            for (
              var j, k, l, m, n, o = '', p = {}, q = 0, r = 0, s = a.length;
              s > r;
              r++
            ) {
              if (((l = a[r]), l[0] == 'M')) (j = +l[1]), (k = +l[2])
              else {
                if (
                  ((m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6])),
                  q + m > f)
                ) {
                  if (d && !p.start) {
                    if (
                      ((n = g(
                        j,
                        k,
                        l[1],
                        l[2],
                        l[3],
                        l[4],
                        l[5],
                        l[6],
                        f - q
                      )),
                      (o += [
                        'C' + e(n.start.x),
                        e(n.start.y),
                        e(n.m.x),
                        e(n.m.y),
                        e(n.x),
                        e(n.y)
                      ]),
                      h)
                    ) {
                      return o
                    }
                    (p.start = o),
                    (o = [
                      'M' + e(n.x),
                      e(n.y) + 'C' + e(n.n.x),
                      e(n.n.y),
                      e(n.end.x),
                      e(n.end.y),
                      e(l[5]),
                      e(l[6])
                    ].join()),
                    (q += m),
                    (j = +l[5]),
                    (k = +l[6])
                    continue
                  }
                  if (!c && !d) {
                    return (n = g(
                      j,
                      k,
                      l[1],
                      l[2],
                      l[3],
                      l[4],
                      l[5],
                      l[6],
                      f - q
                    ))
                  }
                }
                (q += m), (j = +l[5]), (k = +l[6])
              }
              o += l.shift() + l
            }
            return (
              (p.end = o),
              (n = c
                ? q
                : d
                  ? p
                  : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1))
            )
          },
          null,
          a._.clone
        )
      }
      function i (a, b, c, d, e, f, g, h, i) {
        const j = 1 - i
        const k = R(j, 3)
        const l = R(j, 2)
        const m = i * i
        const n = m * i
        const o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g
        const p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h
        const q = a + 2 * i * (c - a) + m * (e - 2 * c + a)
        const r = b + 2 * i * (d - b) + m * (f - 2 * d + b)
        const s = c + 2 * i * (e - c) + m * (g - 2 * e + c)
        const t = d + 2 * i * (f - d) + m * (h - 2 * f + d)
        const u = j * a + i * c
        const v = j * b + i * d
        const w = j * e + i * g
        const x = j * f + i * h
        const y = 90 - (180 * N.atan2(q - s, r - t)) / O
        return {
          x: o,
          y: p,
          m: { x: q, y: r },
          n: { x: s, y: t },
          start: { x: u, y: v },
          end: { x: w, y: x },
          alpha: y
        }
      }
      function j (b, c, e, f, g, h, i, j) {
        a.is(b, 'array') || (b = [b, c, e, f, g, h, i, j])
        const k = D.apply(null, b)
        return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
      }
      function k (a, b, c) {
        return (
          b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        )
      }
      function l (a, b) {
        return (
          (a = d(a)),
          (b = d(b)),
          k(b, a.x, a.y) ||
              k(b, a.x2, a.y) ||
              k(b, a.x, a.y2) ||
              k(b, a.x2, a.y2) ||
              k(a, b.x, b.y) ||
              k(a, b.x2, b.y) ||
              k(a, b.x, b.y2) ||
              k(a, b.x2, b.y2) ||
              (((a.x < b.x2 && a.x > b.x) || (b.x < a.x2 && b.x > a.x)) &&
                ((a.y < b.y2 && a.y > b.y) || (b.y < a.y2 && b.y > a.y)))
        )
      }
      function m (a, b, c, d, e) {
        const f = -3 * b + 9 * c - 9 * d + 3 * e
        const g = a * f + 6 * b - 12 * c + 6 * d
        return a * g - 3 * b + 3 * c
      }
      function n (a, b, c, d, e, f, g, h, i) {
        i == null && (i = 1), (i = i > 1 ? 1 : i < 0 ? 0 : i)
        for (
          var j = i / 2,
            k = 12,
            l = [
              -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
              0.7699, -0.9041, 0.9041, -0.9816, 0.9816
            ],
            n = [
              0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
              0.1069, 0.1069, 0.0472, 0.0472
            ],
            o = 0,
            p = 0;
          k > p;
          p++
        ) {
          const q = j * l[p] + j
          const r = m(q, a, c, e, g)
          const s = m(q, b, d, f, h)
          const t = r * r + s * s
          o += n[p] * N.sqrt(t)
        }
        return j * o
      }
      function o (a, b, c, d, e, f, g, h, i) {
        if (!(i < 0 || n(a, b, c, d, e, f, g, h) < i)) {
          let j
          const k = 1
          let l = k / 2
          let m = k - l
          const o = 0.01
          for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) {
            (l /= 2),
            (m += (i > j ? 1 : -1) * l),
            (j = n(a, b, c, d, e, f, g, h, m))
          }
          return m
        }
      }
      function p (a, b, c, d, e, f, g, h) {
        if (
          !(
            Q(a, c) < P(e, g) ||
              P(a, c) > Q(e, g) ||
              Q(b, d) < P(f, h) ||
              P(b, d) > Q(f, h)
          )
        ) {
          const i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g)
          const j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g)
          const k = (a - c) * (f - h) - (b - d) * (e - g)
          if (k) {
            const l = i / k
            const m = j / k
            const n = +l.toFixed(2)
            const o = +m.toFixed(2)
            if (
              !(
                n < +P(a, c).toFixed(2) ||
                  n > +Q(a, c).toFixed(2) ||
                  n < +P(e, g).toFixed(2) ||
                  n > +Q(e, g).toFixed(2) ||
                  o < +P(b, d).toFixed(2) ||
                  o > +Q(b, d).toFixed(2) ||
                  o < +P(f, h).toFixed(2) ||
                  o > +Q(f, h).toFixed(2)
              )
            ) {
              return { x: l, y: m }
            }
          }
        }
      }
      function q (a, b, c) {
        const d = j(a)
        const e = j(b)
        if (!l(d, e)) return c ? 0 : []
        for (
          var f = n.apply(0, a),
            g = n.apply(0, b),
            h = ~~(f / 8),
            k = ~~(g / 8),
            m = [],
            o = [],
            q = {},
            r = c ? 0 : [],
            s = 0;
          h + 1 > s;
          s++
        ) {
          var t = i.apply(0, a.concat(s / h))
          m.push({ x: t.x, y: t.y, t: s / h })
        }
        for (s = 0; k + 1 > s; s++) {
          (t = i.apply(0, b.concat(s / k))),
          o.push({ x: t.x, y: t.y, t: s / k })
        }
        for (s = 0; h > s; s++) {
          for (let u = 0; k > u; u++) {
            const v = m[s]
            const w = m[s + 1]
            const x = o[u]
            const y = o[u + 1]
            const z = S(w.x - v.x) < 0.001 ? 'y' : 'x'
            const A = S(y.x - x.x) < 0.001 ? 'y' : 'x'
            const B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y)
            if (B) {
              if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue
              q[B.x.toFixed(4)] = B.y.toFixed(4)
              const C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t)
              const D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t)
              C >= 0 &&
                  C <= 1 &&
                  D >= 0 &&
                  D <= 1 &&
                  (c ? r++ : r.push({ x: B.x, y: B.y, t1: C, t2: D }))
            }
          }
        }
        return r
      }
      function r (a, b) {
        return t(a, b)
      }
      function s (a, b) {
        return t(a, b, 1)
      }
      function t (a, b, c) {
        (a = E(a)), (b = E(b))
        for (
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n = c ? 0 : [],
            o = 0,
            p = a.length;
          p > o;
          o++
        ) {
          const r = a[o]
          if (r[0] == 'M') (d = h = r[1]), (e = i = r[2])
          else {
            r[0] == 'C'
              ? ((l = [d, e].concat(r.slice(1))), (d = l[6]), (e = l[7]))
              : ((l = [d, e, d, e, h, i, h, i]), (d = h), (e = i))
            for (let s = 0, t = b.length; t > s; s++) {
              const u = b[s]
              if (u[0] == 'M') (f = j = u[1]), (g = k = u[2])
              else {
                u[0] == 'C'
                  ? ((m = [f, g].concat(u.slice(1))), (f = m[6]), (g = m[7]))
                  : ((m = [f, g, f, g, j, k, j, k]), (f = j), (g = k))
                const v = q(l, m, c)
                if (c) n += v
                else {
                  for (let w = 0, x = v.length; x > w; w++) {
                    (v[w].segment1 = o),
                    (v[w].segment2 = s),
                    (v[w].bez1 = l),
                    (v[w].bez2 = m)
                  }
                  n = n.concat(v)
                }
              }
            }
          }
        }
        return n
      }
      function u (a, b, c) {
        const d = v(a)
        return (
          k(d, b, c) &&
            t(
              a,
              [
                ['M', b, c],
                ['H', d.x2 + 10]
              ],
              1
            ) %
              2 ==
              1
        )
      }
      function v (a) {
        const b = c(a)
        if (b.bbox) return J(b.bbox)
        if (!a) return d()
        a = E(a)
        for (
          var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length;
          k > j;
          j++
        ) {
          if (((e = a[j]), e[0] == 'M')) {
            (f = e[1]), (g = e[2]), h.push(f), i.push(g)
          } else {
            const l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
            (h = h.concat(l.min.x, l.max.x)),
            (i = i.concat(l.min.y, l.max.y)),
            (f = e[5]),
            (g = e[6])
          }
        }
        const m = P.apply(0, h)
        const n = P.apply(0, i)
        const o = Q.apply(0, h)
        const p = Q.apply(0, i)
        const q = d(m, n, o - m, p - n)
        return (b.bbox = J(q)), q
      }
      function w (a, b, c, d, f) {
        if (f) {
          return [
            ['M', +a + +f, b],
            ['l', c - 2 * f, 0],
            ['a', f, f, 0, 0, 1, f, f],
            ['l', 0, d - 2 * f],
            ['a', f, f, 0, 0, 1, -f, f],
            ['l', 2 * f - c, 0],
            ['a', f, f, 0, 0, 1, -f, -f],
            ['l', 0, 2 * f - d],
            ['a', f, f, 0, 0, 1, f, -f],
            ['z']
          ]
        }
        const g = [
          ['M', a, b],
          ['l', c, 0],
          ['l', 0, d],
          ['l', -c, 0],
          ['z']
        ]
        return (g.toString = e), g
      }
      function x (a, b, c, d, f) {
        if (
          (f == null && d == null && (d = c),
          (a = +a),
          (b = +b),
          (c = +c),
          (d = +d),
          f != null)
        ) {
          const g = Math.PI / 180
          const h = a + c * Math.cos(-d * g)
          const i = a + c * Math.cos(-f * g)
          const j = b + c * Math.sin(-d * g)
          const k = b + c * Math.sin(-f * g)
          var l = [
            ['M', h, j],
            ['A', c, c, 0, +(f - d > 180), 0, i, k]
          ]
        } else {
          l = [
            ['M', a, b],
            ['m', 0, -d],
            ['a', c, d, 0, 1, 1, 0, 2 * d],
            ['a', c, d, 0, 1, 1, 0, -2 * d],
            ['z']
          ]
        }
        return (l.toString = e), l
      }
      function y (b) {
        const d = c(b)
        const g = String.prototype.toLowerCase
        if (d.rel) return f(d.rel);
        (a.is(b, 'array') && a.is(b && b[0], 'array')) ||
            (b = a.parsePathString(b))
        const h = []
        let i = 0
        let j = 0
        let k = 0
        let l = 0
        let m = 0
        b[0][0] == 'M' &&
            ((i = b[0][1]),
            (j = b[0][2]),
            (k = i),
            (l = j),
            m++,
            h.push(['M', i, j]))
        for (let n = m, o = b.length; o > n; n++) {
          let p = (h[n] = [])
          const q = b[n]
          if (q[0] != g.call(q[0])) {
            switch (((p[0] = g.call(q[0])), p[0])) {
              case 'a':
                (p[1] = q[1]),
                (p[2] = q[2]),
                (p[3] = q[3]),
                (p[4] = q[4]),
                (p[5] = q[5]),
                (p[6] = +(q[6] - i).toFixed(3)),
                (p[7] = +(q[7] - j).toFixed(3))
                break
              case 'v':
                p[1] = +(q[1] - j).toFixed(3)
                break
              case 'm':
                (k = q[1]), (l = q[2])
              default:
                for (let r = 1, s = q.length; s > r; r++) {
                  p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                }
            }
          } else {
            (p = h[n] = []), q[0] == 'm' && ((k = q[1] + i), (l = q[2] + j))
            for (let t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
          }
          const v = h[n].length
          switch (h[n][0]) {
            case 'z':
              (i = k), (j = l)
              break
            case 'h':
              i += +h[n][v - 1]
              break
            case 'v':
              j += +h[n][v - 1]
              break
            default:
              (i += +h[n][v - 2]), (j += +h[n][v - 1])
          }
        }
        return (h.toString = e), (d.rel = f(h)), h
      }
      function z (b) {
        const d = c(b)
        if (d.abs) return f(d.abs)
        if (
          ((I(b, 'array') && I(b && b[0], 'array')) ||
              (b = a.parsePathString(b)),
          !b || !b.length)
        ) {
          return [['M', 0, 0]]
        }
        let g
        let h = []
        let i = 0
        let j = 0
        let k = 0
        let l = 0
        let m = 0
        b[0][0] == 'M' &&
            ((i = +b[0][1]),
            (j = +b[0][2]),
            (k = i),
            (l = j),
            m++,
            (h[0] = ['M', i, j]))
        for (
          var n,
            o,
            p =
                b.length == 3 &&
                b[0][0] == 'M' &&
                b[1][0].toUpperCase() == 'R' &&
                b[2][0].toUpperCase() == 'Z',
            q = m,
            r = b.length;
          r > q;
          q++
        ) {
          if (
            (h.push((n = [])), (o = b[q]), (g = o[0]), g != g.toUpperCase())
          ) {
            switch (((n[0] = g.toUpperCase()), n[0])) {
              case 'A':
                (n[1] = o[1]),
                (n[2] = o[2]),
                (n[3] = o[3]),
                (n[4] = o[4]),
                (n[5] = o[5]),
                (n[6] = +o[6] + i),
                (n[7] = +o[7] + j)
                break
              case 'V':
                n[1] = +o[1] + j
                break
              case 'H':
                n[1] = +o[1] + i
                break
              case 'R':
                for (
                  var s = [i, j].concat(o.slice(1)), t = 2, u = s.length;
                  u > t;
                  t++
                ) {
                  (s[t] = +s[t] + i), (s[++t] = +s[t] + j)
                }
                h.pop(), (h = h.concat(G(s, p)))
                break
              case 'O':
                h.pop(),
                (s = x(i, j, o[1], o[2])),
                s.push(s[0]),
                (h = h.concat(s))
                break
              case 'U':
                h.pop(),
                (h = h.concat(x(i, j, o[1], o[2], o[3]))),
                (n = ['U'].concat(h[h.length - 1].slice(-2)))
                break
              case 'M':
                (k = +o[1] + i), (l = +o[2] + j)
              default:
                for (t = 1, u = o.length; u > t; t++) {
                  n[t] = +o[t] + (t % 2 ? i : j)
                }
            }
          } else if (g == 'R') {
            (s = [i, j].concat(o.slice(1))),
            h.pop(),
            (h = h.concat(G(s, p))),
            (n = ['R'].concat(o.slice(-2)))
          } else if (g == 'O') {
            h.pop(),
            (s = x(i, j, o[1], o[2])),
            s.push(s[0]),
            (h = h.concat(s))
          } else if (g == 'U') {
            h.pop(),
            (h = h.concat(x(i, j, o[1], o[2], o[3]))),
            (n = ['U'].concat(h[h.length - 1].slice(-2)))
          } else for (let v = 0, w = o.length; w > v; v++) n[v] = o[v]
          if (((g = g.toUpperCase()), g != 'O')) {
            switch (n[0]) {
              case 'Z':
                (i = +k), (j = +l)
                break
              case 'H':
                i = n[1]
                break
              case 'V':
                j = n[1]
                break
              case 'M':
                (k = n[n.length - 2]), (l = n[n.length - 1])
              default:
                (i = n[n.length - 2]), (j = n[n.length - 1])
            }
          }
        }
        return (h.toString = e), (d.abs = f(h)), h
      }
      function A (a, b, c, d) {
        return [a, b, c, d, c, d]
      }
      function B (a, b, c, d, e, f) {
        const g = 1 / 3
        const h = 2 / 3
        return [
          g * a + h * c,
          g * b + h * d,
          g * e + h * c,
          g * f + h * d,
          e,
          f
        ]
      }
      function C (b, c, d, e, f, g, h, i, j, k) {
        let l
        const m = (120 * O) / 180
        const n = (O / 180) * (+f || 0)
        let o = []
        const p = a._.cacher(function (a, b, c) {
          const d = a * N.cos(c) - b * N.sin(c)
          const e = a * N.sin(c) + b * N.cos(c)
          return { x: d, y: e }
        })
        if (k) (y = k[0]), (z = k[1]), (w = k[2]), (x = k[3])
        else {
          (l = p(b, c, -n)),
          (b = l.x),
          (c = l.y),
          (l = p(i, j, -n)),
          (i = l.x),
          (j = l.y)
          const q = (N.cos((O / 180) * f), N.sin((O / 180) * f), (b - i) / 2)
          const r = (c - j) / 2
          let s = (q * q) / (d * d) + (r * r) / (e * e)
          s > 1 && ((s = N.sqrt(s)), (d = s * d), (e = s * e))
          const t = d * d
          const u = e * e
          const v =
              (g == h ? -1 : 1) *
              N.sqrt(
                S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))
              )
          var w = (v * d * r) / e + (b + i) / 2
          var x = (v * -e * q) / d + (c + j) / 2
          var y = N.asin(((c - x) / e).toFixed(9))
          var z = N.asin(((j - x) / e).toFixed(9));
          (y = w > b ? O - y : y),
          (z = w > i ? O - z : z),
          y < 0 && (y = 2 * O + y),
          z < 0 && (z = 2 * O + z),
          h && y > z && (y -= 2 * O),
          !h && z > y && (z -= 2 * O)
        }
        let A = z - y
        if (S(A) > m) {
          const B = z
          const D = i
          const E = j;
          (z = y + m * (h && z > y ? 1 : -1)),
          (i = w + d * N.cos(z)),
          (j = x + e * N.sin(z)),
          (o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x]))
        }
        A = z - y
        const F = N.cos(y)
        const G = N.sin(y)
        const H = N.cos(z)
        const I = N.sin(z)
        const J = N.tan(A / 4)
        const K = (4 / 3) * d * J
        const L = (4 / 3) * e * J
        const M = [b, c]
        const P = [b + K * G, c - L * F]
        const Q = [i + K * I, j - L * H]
        const R = [i, j]
        if (((P[0] = 2 * M[0] - P[0]), (P[1] = 2 * M[1] - P[1]), k)) {
          return [P, Q, R].concat(o)
        }
        o = [P, Q, R].concat(o).join().split(',')
        for (var T = [], U = 0, V = o.length; V > U; U++) {
          T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x
        }
        return T
      }
      function D (a, b, c, d, e, f, g, h) {
        for (
          var i, j, k, l, m, n, o, p, q = [], r = [[], []], s = 0;
          s < 2;
          ++s
        ) {
          if (
            (s == 0
              ? ((j = 6 * a - 12 * c + 6 * e),
                (i = -3 * a + 9 * c - 9 * e + 3 * g),
                (k = 3 * c - 3 * a))
              : ((j = 6 * b - 12 * d + 6 * f),
                (i = -3 * b + 9 * d - 9 * f + 3 * h),
                (k = 3 * d - 3 * b)),
            S(i) < 1e-12)
          ) {
            if (S(j) < 1e-12) continue;
            (l = -k / j), l > 0 && l < 1 && q.push(l)
          } else {
            (o = j * j - 4 * k * i),
            (p = N.sqrt(o)),
            o < 0 ||
                  ((m = (-j + p) / (2 * i)),
                  m > 0 && m < 1 && q.push(m),
                  (n = (-j - p) / (2 * i)),
                  n > 0 && n < 1 && q.push(n))
          }
        }
        for (var t, u = q.length, v = u; u--;) {
          (l = q[u]),
          (t = 1 - l),
          (r[0][u] =
                t * t * t * a +
                3 * t * t * l * c +
                3 * t * l * l * e +
                l * l * l * g),
          (r[1][u] =
                t * t * t * b +
                3 * t * t * l * d +
                3 * t * l * l * f +
                l * l * l * h)
        }
        return (
          (r[0][v] = a),
          (r[1][v] = b),
          (r[0][v + 1] = g),
          (r[1][v + 1] = h),
          (r[0].length = r[1].length = v + 2),
          {
            min: { x: P.apply(0, r[0]), y: P.apply(0, r[1]) },
            max: { x: Q.apply(0, r[0]), y: Q.apply(0, r[1]) }
          }
        )
      }
      function E (a, b) {
        const d = !b && c(a)
        if (!b && d.curve) return f(d.curve)
        for (
          var e = z(a),
            g = b && z(b),
            h = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
            i = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
            j = function (a, b, c) {
              let d, e
              if (!a) return ['C', b.x, b.y, b.x, b.y, b.x, b.y]
              switch (
                (!(a[0] in { T: 1, Q: 1 }) && (b.qx = b.qy = null), a[0])
              ) {
                case 'M':
                  (b.X = a[1]), (b.Y = a[2])
                  break
                case 'A':
                  a = ['C'].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))))
                  break
                case 'S':
                  c == 'C' || c == 'S'
                    ? ((d = 2 * b.x - b.bx), (e = 2 * b.y - b.by))
                    : ((d = b.x), (e = b.y)),
                  (a = ['C', d, e].concat(a.slice(1)))
                  break
                case 'T':
                  c == 'Q' || c == 'T'
                    ? ((b.qx = 2 * b.x - b.qx), (b.qy = 2 * b.y - b.qy))
                    : ((b.qx = b.x), (b.qy = b.y)),
                  (a = ['C'].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2])))
                  break
                case 'Q':
                  (b.qx = a[1]),
                  (b.qy = a[2]),
                  (a = ['C'].concat(B(b.x, b.y, a[1], a[2], a[3], a[4])))
                  break
                case 'L':
                  a = ['C'].concat(A(b.x, b.y, a[1], a[2]))
                  break
                case 'H':
                  a = ['C'].concat(A(b.x, b.y, a[1], b.y))
                  break
                case 'V':
                  a = ['C'].concat(A(b.x, b.y, b.x, a[1]))
                  break
                case 'Z':
                  a = ['C'].concat(A(b.x, b.y, b.X, b.Y))
              }
              return a
            },
            k = function (a, b) {
              if (a[b].length > 7) {
                a[b].shift()
                for (let c = a[b]; c.length;) {
                  (m[b] = 'A'),
                  g && (n[b] = 'A'),
                  a.splice(b++, 0, ['C'].concat(c.splice(0, 6)))
                }
                a.splice(b, 1), (r = Q(e.length, (g && g.length) || 0))
              }
            },
            l = function (a, b, c, d, f) {
              a &&
                  b &&
                  a[f][0] == 'M' &&
                  b[f][0] != 'M' &&
                  (b.splice(f, 0, ['M', d.x, d.y]),
                  (c.bx = 0),
                  (c.by = 0),
                  (c.x = a[f][1]),
                  (c.y = a[f][2]),
                  (r = Q(e.length, (g && g.length) || 0)))
            },
            m = [],
            n = [],
            o = '',
            p = '',
            q = 0,
            r = Q(e.length, (g && g.length) || 0);
          r > q;
          q++
        ) {
          e[q] && (o = e[q][0]),
          o != 'C' && ((m[q] = o), q && (p = m[q - 1])),
          (e[q] = j(e[q], h, p)),
          m[q] != 'A' && o == 'C' && (m[q] = 'C'),
          k(e, q),
          g &&
                (g[q] && (o = g[q][0]),
                o != 'C' && ((n[q] = o), q && (p = n[q - 1])),
                (g[q] = j(g[q], i, p)),
                n[q] != 'A' && o == 'C' && (n[q] = 'C'),
                k(g, q)),
          l(e, g, h, i, q),
          l(g, e, i, h, q)
          const s = e[q]
          const t = g && g[q]
          const u = s.length
          const v = g && t.length;
          (h.x = s[u - 2]),
          (h.y = s[u - 1]),
          (h.bx = M(s[u - 4]) || h.x),
          (h.by = M(s[u - 3]) || h.y),
          (i.bx = g && (M(t[v - 4]) || i.x)),
          (i.by = g && (M(t[v - 3]) || i.y)),
          (i.x = g && t[v - 2]),
          (i.y = g && t[v - 1])
        }
        return g || (d.curve = f(e)), g ? [e, g] : e
      }
      function F (a, b) {
        if (!b) return a
        let c, d, e, f, g, h, i
        for (a = E(a), e = 0, g = a.length; g > e; e++) {
          for (i = a[e], f = 1, h = i.length; h > f; f += 2) {
            (c = b.x(i[f], i[f + 1])),
            (d = b.y(i[f], i[f + 1])),
            (i[f] = c),
            (i[f + 1] = d)
          }
        }
        return a
      }
      function G (a, b) {
        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
          const f = [
            { x: +a[d - 2], y: +a[d - 1] },
            { x: +a[d], y: +a[d + 1] },
            { x: +a[d + 2], y: +a[d + 3] },
            { x: +a[d + 4], y: +a[d + 5] }
          ]
          b
            ? d
              ? e - 4 == d
                ? (f[3] = { x: +a[0], y: +a[1] })
                : e - 2 == d &&
                    ((f[2] = { x: +a[0], y: +a[1] }),
                    (f[3] = { x: +a[2], y: +a[3] }))
              : (f[0] = { x: +a[e - 2], y: +a[e - 1] })
            : e - 4 == d
              ? (f[3] = f[2])
              : d || (f[0] = { x: +a[d], y: +a[d + 1] }),
          c.push([
            'C',
            (-f[0].x + 6 * f[1].x + f[2].x) / 6,
            (-f[0].y + 6 * f[1].y + f[2].y) / 6,
            (f[1].x + 6 * f[2].x - f[3].x) / 6,
            (f[1].y + 6 * f[2].y - f[3].y) / 6,
            f[2].x,
            f[2].y
          ])
        }
        return c
      }
      const H = b.prototype
      var I = a.is
      var J = a._.clone
      var K = 'hasOwnProperty'
      var L = /,?([a-z]),?/gi
      var M = parseFloat
      var N = Math
      var O = N.PI
      var P = N.min
      var Q = N.max
      var R = N.pow
      var S = N.abs
      const T = h(1)
      const U = h()
      const V = h(0, 1)
      const W = a._unit2px
      const X = {
        path: function (a) {
          return a.attr('path')
        },
        circle: function (a) {
          const b = W(a)
          return x(b.cx, b.cy, b.r)
        },
        ellipse: function (a) {
          const b = W(a)
          return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
        },
        rect: function (a) {
          const b = W(a)
          return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
        },
        image: function (a) {
          const b = W(a)
          return w(b.x || 0, b.y || 0, b.width, b.height)
        },
        line: function (a) {
          return (
            'M' +
              [a.attr('x1') || 0, a.attr('y1') || 0, a.attr('x2'), a.attr('y2')]
          )
        },
        polyline: function (a) {
          return 'M' + a.attr('points')
        },
        polygon: function (a) {
          return 'M' + a.attr('points') + 'z'
        },
        deflt: function (a) {
          const b = a.node.getBBox()
          return w(b.x, b.y, b.width, b.height)
        }
      };
      (a.path = c),
      (a.path.getTotalLength = T),
      (a.path.getPointAtLength = U),
      (a.path.getSubpath = function (a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end
        const d = V(a, c, 1)
        return b ? V(d, b).end : d
      }),
      (H.getTotalLength = function () {
        return this.node.getTotalLength
          ? this.node.getTotalLength()
          : void 0
      }),
      (H.getPointAtLength = function (a) {
        return U(this.attr('d'), a)
      }),
      (H.getSubpath = function (b, c) {
        return a.path.getSubpath(this.attr('d'), b, c)
      }),
      (a._.box = d),
      (a.path.findDotsAtSegment = i),
      (a.path.bezierBBox = j),
      (a.path.isPointInsideBBox = k),
      (a.closest = function (b, c, e, f) {
        for (
          var g = 100,
            h = d(b - g / 2, c - g / 2, g, g),
            i = [],
            j = e[0].hasOwnProperty('x')
              ? function (a) {
                return { x: e[a].x, y: e[a].y }
              }
              : function (a) {
                return { x: e[a], y: f[a] }
              },
            l = 0;
          g <= 1e6 && !l;

        ) {
          for (var m = 0, n = e.length; n > m; m++) {
            const o = j(m)
            if (k(h, o.x, o.y)) {
              l++, i.push(o)
              break
            }
          }
          l || ((g *= 2), (h = d(b - g / 2, c - g / 2, g, g)))
        }
        if (g != 1e6) {
          let p
          let q = 1 / 0
          for (m = 0, n = i.length; n > m; m++) {
            const r = a.len(b, c, i[m].x, i[m].y)
            q > r && ((q = r), (i[m].len = r), (p = i[m]))
          }
          return p
        }
      }),
      (a.path.isBBoxIntersect = l),
      (a.path.intersection = r),
      (a.path.intersectionNumber = s),
      (a.path.isPointInside = u),
      (a.path.getBBox = v),
      (a.path.get = X),
      (a.path.toRelative = y),
      (a.path.toAbsolute = z),
      (a.path.toCubic = E),
      (a.path.map = F),
      (a.path.toString = e),
      (a.path.clone = f)
    }),
    d.plugin(function (a) {
      const d = Math.max
      const e = Math.min
      const f = function (a) {
        if (
          ((this.items = []),
          (this.bindings = {}),
          (this.length = 0),
          (this.type = 'set'),
          a)
        ) {
          for (let b = 0, c = a.length; c > b; b++) {
            a[b] &&
                ((this[this.items.length] = this.items[this.items.length] =
                  a[b]),
                this.length++)
          }
        }
      }
      const g = f.prototype;
      (g.push = function () {
        for (var a, b, c = 0, d = arguments.length; d > c; c++) {
          (a = arguments[c]),
          a &&
                ((b = this.items.length),
                (this[b] = this.items[b] = a),
                this.length++)
        }
        return this
      }),
      (g.pop = function () {
        return this.length && delete this[this.length--], this.items.pop()
      }),
      (g.forEach = function (a, b) {
        for (let c = 0, d = this.items.length; d > c; c++) {
          if (a.call(b, this.items[c], c) === !1) return this
        }
        return this
      }),
      (g.animate = function (d, e, f, g) {
        typeof f !== 'function' || f.length || ((g = f), (f = c.linear)),
        d instanceof a._.Animation &&
                ((g = d.callback), (f = d.easing), (e = f.dur), (d = d.attr))
        const h = arguments
        if (a.is(d, 'array') && a.is(h[h.length - 1], 'array')) var i = !0
        let j
        const k = function () {
          j ? (this.b = j) : (j = this.b)
        }
        let l = 0
        const m = this
        const n =
              g &&
              function () {
                ++l == m.length && g.call(this)
              }
        return this.forEach(function (a, c) {
          b.once('snap.animcreated.' + a.id, k),
          i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, n)
        })
      }),
      (g.remove = function () {
        for (; this.length;) this.pop().remove()
        return this
      }),
      (g.bind = function (a, b, c) {
        const d = {}
        if (typeof b === 'function') this.bindings[a] = b
        else {
          const e = c || a
          this.bindings[a] = function (a) {
            (d[e] = a), b.attr(d)
          }
        }
        return this
      }),
      (g.attr = function (a) {
        const b = {}
        for (const c in a) {
          this.bindings[c] ? this.bindings[c](a[c]) : (b[c] = a[c])
        }
        for (let d = 0, e = this.items.length; e > d; d++) {
          this.items[d].attr(b)
        }
        return this
      }),
      (g.clear = function () {
        for (; this.length;) this.pop()
      }),
      (g.splice = function (a, b) {
        (a = a < 0 ? d(this.length + a, 0) : a),
        (b = d(0, e(this.length - a, b)))
        let c
        const g = []
        const h = []
        const i = []
        for (c = 2; c < arguments.length; c++) i.push(arguments[c])
        for (c = 0; b > c; c++) h.push(this[a + c])
        for (; c < this.length - a; c++) g.push(this[a + c])
        const j = i.length
        for (c = 0; c < j + g.length; c++) {
          this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j]
        }
        for (c = this.items.length = this.length -= b - j; this[c];) {
          delete this[c++]
        }
        return new f(h)
      }),
      (g.exclude = function (a) {
        for (let b = 0, c = this.length; c > b; b++) {
          if (this[b] == a) return this.splice(b, 1), !0
        }
        return !1
      }),
      (g.insertAfter = function (a) {
        for (let b = this.items.length; b--;) this.items[b].insertAfter(a)
        return this
      }),
      (g.getBBox = function () {
        for (
          var a = [], b = [], c = [], f = [], g = this.items.length;
          g--;

        ) {
          if (!this.items[g].removed) {
            const h = this.items[g].getBBox()
            a.push(h.x),
            b.push(h.y),
            c.push(h.x + h.width),
            f.push(h.y + h.height)
          }
        }
        return (
          (a = e.apply(0, a)),
          (b = e.apply(0, b)),
          (c = d.apply(0, c)),
          (f = d.apply(0, f)),
          {
            x: a,
            y: b,
            x2: c,
            y2: f,
            width: c - a,
            height: f - b,
            cx: a + (c - a) / 2,
            cy: b + (f - b) / 2
          }
        )
      }),
      (g.clone = function (a) {
        a = new f()
        for (let b = 0, c = this.items.length; c > b; b++) {
          a.push(this.items[b].clone())
        }
        return a
      }),
      (g.toString = function () {
        return 'Snap‘s set'
      }),
      (g.type = 'set'),
      (a.Set = f),
      (a.set = function () {
        const a = new f()
        return (
          arguments.length &&
                a.push.apply(a, Array.prototype.slice.call(arguments, 0)),
          a
        )
      })
    }),
    d.plugin(function (a, c) {
      function d (a) {
        const b = a[0]
        switch (b.toLowerCase()) {
          case 't':
            return [b, 0, 0]
          case 'm':
            return [b, 1, 0, 0, 1, 0, 0]
          case 'r':
            return a.length == 4 ? [b, 0, a[2], a[3]] : [b, 0]
          case 's':
            return a.length == 5
              ? [b, 1, 1, a[3], a[4]]
              : a.length == 3
                ? [b, 1, 1]
                : [b, 1]
        }
      }
      function e (b, c, e) {
        (c = p(c).replace(/\.{3}|\u2026/g, b)),
        (b = a.parseTransformString(b) || []),
        (c = a.parseTransformString(c) || [])
        for (
          var f,
            g,
            h,
            i,
            l = Math.max(b.length, c.length),
            m = [],
            n = [],
            o = 0;
          l > o;
          o++
        ) {
          if (
            ((h = b[o] || d(c[o])),
            (i = c[o] || d(h)),
            h[0] != i[0] ||
                (h[0].toLowerCase() == 'r' && (h[2] != i[2] || h[3] != i[3])) ||
                (h[0].toLowerCase() == 's' && (h[3] != i[3] || h[4] != i[4])))
          ) {
            (b = a._.transform2matrix(b, e())),
            (c = a._.transform2matrix(c, e())),
            (m = [['m', b.a, b.b, b.c, b.d, b.e, b.f]]),
            (n = [['m', c.a, c.b, c.c, c.d, c.e, c.f]])
            break
          }
          for (
            m[o] = [], n[o] = [], f = 0, g = Math.max(h.length, i.length);
            g > f;
            f++
          ) {
            f in h && (m[o][f] = h[f]), f in i && (n[o][f] = i[f])
          }
        }
        return { from: k(m), to: k(n), f: j(m) }
      }
      function f (a) {
        return a
      }
      function g (a) {
        return function (b) {
          return +b.toFixed(3) + a
        }
      }
      function h (a) {
        return a.join(' ')
      }
      function i (b) {
        return a.rgb(b[0], b[1], b[2])
      }
      function j (a) {
        let b
        let c
        let d
        let e
        let f
        let g
        let h = 0
        const i = []
        for (b = 0, c = a.length; c > b; b++) {
          for (
            f = '[', g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length;
            e > d;
            d++
          ) {
            g[d] = 'val[' + h++ + ']'
          }
          (f += g + ']'), (i[b] = f)
        }
        return Function('val', 'return Snap.path.toString.call([' + i + '])')
      }
      function k (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          for (let e = 1, f = a[c].length; f > e; e++) b.push(a[c][e])
        }
        return b
      }
      function l (a) {
        return isFinite(parseFloat(a))
      }
      function m (b, c) {
        return a.is(b, 'array') && a.is(c, 'array')
          ? b.toString() == c.toString()
          : !1
      }
      const n = {}
      const o = /[a-z]+$/i
      var p = String;
      (n.stroke = n.fill = 'colour'),
      (c.prototype.equal = function (a, c) {
        return b('snap.util.equal', this, a, c).firstDefined()
      }),
      b.on('snap.util.equal', function (b, c) {
        let d
        let q
        const r = p(this.attr(b) || '')
        const s = this
        if (l(r) && l(c)) {
          return { from: parseFloat(r), to: parseFloat(c), f }
        }
        if (n[b] == 'colour') {
          return (
            (d = a.color(r)),
            (q = a.color(c)),
            {
              from: [d.r, d.g, d.b, d.opacity],
              to: [q.r, q.g, q.b, q.opacity],
              f: i
            }
          )
        }
        if (b == 'viewBox') {
          return (
            (d = this.attr(b).vb.split(' ').map(Number)),
            (q = c.split(' ').map(Number)),
            { from: d, to: q, f: h }
          )
        }
        if (
          b == 'transform' ||
              b == 'gradientTransform' ||
              b == 'patternTransform'
        ) {
          return (
            c instanceof a.Matrix && (c = c.toTransformString()),
            a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)),
            e(r, c, function () {
              return s.getBBox(1)
            })
          )
        }
        if (b == 'd' || b == 'path') {
          return (
            (d = a.path.toCubic(r, c)),
            { from: k(d[0]), to: k(d[1]), f: j(d[0]) }
          )
        }
        if (b == 'points') {
          return (
            (d = p(r).split(a._.separator)),
            (q = p(c).split(a._.separator)),
            {
              from: d,
              to: q,
              f: function (a) {
                return a
              }
            }
          )
        }
        const t = r.match(o)
        const u = p(c).match(o)
        return t && m(t, u)
          ? { from: parseFloat(r), to: parseFloat(c), f: g(t) }
          : { from: this.asPX(b), to: this.asPX(b, c), f }
      })
    }),
    d.plugin(function (a, c, d, e) {
      for (
        var f = c.prototype,
          g = 'hasOwnProperty',
          h = ('createTouch' in e.doc),
          i = [
            'click',
            'dblclick',
            'mousedown',
            'mousemove',
            'mouseout',
            'mouseover',
            'mouseup',
            'touchstart',
            'touchmove',
            'touchend',
            'touchcancel'
          ],
          j = {
            mousedown: 'touchstart',
            mousemove: 'touchmove',
            mouseup: 'touchend'
          },
          k = function (a, b) {
            const c = a == 'y' ? 'scrollTop' : 'scrollLeft'
            const d = b && b.node ? b.node.ownerDocument : e.doc
            return d[(c in d.documentElement) ? 'documentElement' : 'body'][
              c
            ]
          },
          l = function () {
            return this.originalEvent.preventDefault()
          },
          m = function () {
            return this.originalEvent.stopPropagation()
          },
          n = function (a, b, c, d) {
            const e = h && j[b] ? j[b] : b
            const f = function (e) {
              const f = k('y', d)
              const i = k('x', d)
              if (h && j[g](b)) {
                for (
                  let n = 0, o = e.targetTouches && e.targetTouches.length;
                  o > n;
                  n++
                ) {
                  if (
                    e.targetTouches[n].target == a ||
                      a.contains(e.targetTouches[n].target)
                  ) {
                    const p = e;
                    (e = e.targetTouches[n]),
                    (e.originalEvent = p),
                    (e.preventDefault = l),
                    (e.stopPropagation = m)
                    break
                  }
                }
              }
              const q = e.clientX + i
              const r = e.clientY + f
              return c.call(d, e, q, r)
            }
            return (
              b !== e && a.addEventListener(b, f, !1),
              a.addEventListener(e, f, !1),
              function () {
                return (
                  b !== e && a.removeEventListener(b, f, !1),
                  a.removeEventListener(e, f, !1),
                  !0
                )
              }
            )
          },
          o = [],
          p = function (a) {
            for (
              var c,
                d = a.clientX,
                e = a.clientY,
                f = k('y'),
                g = k('x'),
                i = o.length;
              i--;

            ) {
              if (((c = o[i]), h)) {
                for (var j, l = a.touches && a.touches.length; l--;) {
                  if (
                    ((j = a.touches[l]),
                    j.identifier == c.el._drag.id ||
                        c.el.node.contains(j.target))
                  ) {
                    (d = j.clientX),
                    (e = j.clientY),
                    (a.originalEvent
                      ? a.originalEvent
                      : a
                    ).preventDefault()
                    break
                  }
                }
              } else a.preventDefault()
              {
                const m = c.el.node
                m.nextSibling, m.parentNode, m.style.display
              }
              (d += g),
              (e += f),
              b(
                'snap.drag.move.' + c.el.id,
                c.move_scope || c.el,
                d - c.el._drag.x,
                e - c.el._drag.y,
                d,
                e,
                a
              )
            }
          },
          q = function (c) {
            a.unmousemove(p).unmouseup(q)
            for (var d, e = o.length; e--;) {
              (d = o[e]),
              (d.el._drag = {}),
              b(
                'snap.drag.end.' + d.el.id,
                d.end_scope || d.start_scope || d.move_scope || d.el,
                c
              ),
              b.off('snap.drag.*.' + d.el.id)
            }
            o = []
          },
          r = i.length;
        r--;

      ) {
        !(function (b) {
          (a[b] = f[b] =
              function (c, d) {
                if (a.is(c, 'function')) {
                  (this.events = this.events || []),
                  this.events.push({
                    name: b,
                    f: c,
                    unbind: n(this.node || document, b, c, d || this)
                  })
                } else {
                  for (let e = 0, f = this.events.length; f > e; e++) {
                    if (this.events[e].name == b) {
                      try {
                        this.events[e].f.call(this)
                      } catch (g) {}
                    }
                  }
                }
                return this
              }),
          (a['un' + b] = f['un' + b] =
                function (a) {
                  for (let c = this.events || [], d = c.length; d--;) {
                    if (c[d].name == b && (c[d].f == a || !a)) {
                      return (
                        c[d].unbind(),
                        c.splice(d, 1),
                        !c.length && delete this.events,
                        this
                      )
                    }
                  }
                  return this
                })
        })(i[r])
      }
      (f.hover = function (a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
      }),
      (f.unhover = function (a, b) {
        return this.unmouseover(a).unmouseout(b)
      })
      const s = [];
      (f.drag = function (c, d, e, f, g, h) {
        function i (i, j, l) {
          (i.originalEvent || i).preventDefault(),
          (k._drag.x = j),
          (k._drag.y = l),
          (k._drag.id = i.identifier),
          !o.length && a.mousemove(p).mouseup(q),
          o.push({ el: k, move_scope: f, start_scope: g, end_scope: h }),
          d && b.on('snap.drag.start.' + k.id, d),
          c && b.on('snap.drag.move.' + k.id, c),
          e && b.on('snap.drag.end.' + k.id, e),
          b('snap.drag.start.' + k.id, g || f || k, j, l, i)
        }
        function j (a, c, d) {
          b('snap.draginit.' + k.id, k, a, c, d)
        }
        var k = this
        if (!arguments.length) {
          let l
          return k.drag(
            function (a, b) {
              this.attr({ transform: l + (l ? 'T' : 't') + [a, b] })
            },
            function () {
              l = this.transform().local
            }
          )
        }
        return (
          b.on('snap.draginit.' + k.id, i),
          (k._drag = {}),
          s.push({ el: k, start: i, init: j }),
          k.mousedown(j),
          k
        )
      }),
      (f.undrag = function () {
        for (let c = s.length; c--;) {
          s[c].el == this &&
                (this.unmousedown(s[c].init),
                s.splice(c, 1),
                b.unbind('snap.drag.*.' + this.id),
                b.unbind('snap.draginit.' + this.id))
        }
        return !s.length && a.unmousemove(p).unmouseup(q), this
      })
    }),
    d.plugin(function (a, c, d) {
      const e = (c.prototype, d.prototype)
      const f = /^\s*url\((.+)\)/
      const g = String
      const h = a._.$;
      (a.filter = {}),
      (e.filter = function (b) {
        let d = this
        d.type != 'svg' && (d = d.paper)
        const e = a.parse(g(b))
        const f = a._.id()
        const i = (d.node.offsetWidth, d.node.offsetHeight, h('filter'))
        return (
          h(i, { id: f, filterUnits: 'userSpaceOnUse' }),
          i.appendChild(e.node),
          d.defs.appendChild(i),
          new c(i)
        )
      }),
      b.on('snap.util.getattr.filter', function () {
        b.stop()
        const c = h(this.node, 'filter')
        if (c) {
          const d = g(c).match(f)
          return d && a.select(d[1])
        }
      }),
      b.on('snap.util.attr.filter', function (d) {
        if (d instanceof c && d.type == 'filter') {
          b.stop()
          let e = d.node.id
          e || (h(d.node, { id: d.id }), (e = d.id)),
          h(this.node, { filter: a.url(e) })
        }
        (d && d != 'none') ||
              (b.stop(), this.node.removeAttribute('filter'))
      }),
      (a.filter.blur = function (b, c) {
        b == null && (b = 2)
        const d = c == null ? b : [b, c]
        return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
          def: d
        })
      }),
      (a.filter.blur.toString = function () {
        return this()
      }),
      (a.filter.shadow = function (b, c, d, e, f) {
        return (
          typeof d === 'string' && ((e = d), (f = e), (d = 4)),
          typeof e !== 'string' && ((f = e), (e = '#000')),
          (e = e || '#000'),
          d == null && (d = 4),
          f == null && (f = 1),
          b == null && ((b = 0), (c = 2)),
          c == null && (c = b),
          (e = a.color(e)),
          a.format(
            '<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
            { color: e, dx: b, dy: c, blur: d, opacity: f }
          )
        )
      }),
      (a.filter.shadow.toString = function () {
        return this()
      }),
      (a.filter.grayscale = function (b) {
        return (
          b == null && (b = 1),
          a.format(
            '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',
            {
              a: 0.2126 + 0.7874 * (1 - b),
              b: 0.7152 - 0.7152 * (1 - b),
              c: 0.0722 - 0.0722 * (1 - b),
              d: 0.2126 - 0.2126 * (1 - b),
              e: 0.7152 + 0.2848 * (1 - b),
              f: 0.0722 - 0.0722 * (1 - b),
              g: 0.2126 - 0.2126 * (1 - b),
              h: 0.0722 + 0.9278 * (1 - b)
            }
          )
        )
      }),
      (a.filter.grayscale.toString = function () {
        return this()
      }),
      (a.filter.sepia = function (b) {
        return (
          b == null && (b = 1),
          a.format(
            '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',
            {
              a: 0.393 + 0.607 * (1 - b),
              b: 0.769 - 0.769 * (1 - b),
              c: 0.189 - 0.189 * (1 - b),
              d: 0.349 - 0.349 * (1 - b),
              e: 0.686 + 0.314 * (1 - b),
              f: 0.168 - 0.168 * (1 - b),
              g: 0.272 - 0.272 * (1 - b),
              h: 0.534 - 0.534 * (1 - b),
              i: 0.131 + 0.869 * (1 - b)
            }
          )
        )
      }),
      (a.filter.sepia.toString = function () {
        return this()
      }),
      (a.filter.saturate = function (b) {
        return (
          b == null && (b = 1),
          a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - b
          })
        )
      }),
      (a.filter.saturate.toString = function () {
        return this()
      }),
      (a.filter.hueRotate = function (b) {
        return (
          (b = b || 0),
          a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: b
          })
        )
      }),
      (a.filter.hueRotate.toString = function () {
        return this()
      }),
      (a.filter.invert = function (b) {
        return (
          b == null && (b = 1),
          a.format(
            '<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
            { amount: b, amount2: 1 - b }
          )
        )
      }),
      (a.filter.invert.toString = function () {
        return this()
      }),
      (a.filter.brightness = function (b) {
        return (
          b == null && (b = 1),
          a.format(
            '<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',
            { amount: b }
          )
        )
      }),
      (a.filter.brightness.toString = function () {
        return this()
      }),
      (a.filter.contrast = function (b) {
        return (
          b == null && (b = 1),
          a.format(
            '<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
            { amount: b, amount2: 0.5 - b / 2 }
          )
        )
      }),
      (a.filter.contrast.toString = function () {
        return this()
      })
    }),
    d.plugin(function (a, b) {
      const c = a._.box
      const d = a.is
      const e = /^[^a-z]*([tbmlrc])/i
      const f = function () {
        return 'T' + this.dx + ',' + this.dy
      };
      (b.prototype.getAlign = function (a, b) {
        b == null && d(a, 'string') && ((b = a), (a = null)),
        (a = a || this.paper)
        const g = a.getBBox ? a.getBBox() : c(a)
        const h = this.getBBox()
        const i = {}
        switch (((b = b && b.match(e)), (b = b ? b[1].toLowerCase() : 'c'))) {
          case 't':
            (i.dx = 0), (i.dy = g.y - h.y)
            break
          case 'b':
            (i.dx = 0), (i.dy = g.y2 - h.y2)
            break
          case 'm':
            (i.dx = 0), (i.dy = g.cy - h.cy)
            break
          case 'l':
            (i.dx = g.x - h.x), (i.dy = 0)
            break
          case 'r':
            (i.dx = g.x2 - h.x2), (i.dy = 0)
            break
          default:
            (i.dx = g.cx - h.cx), (i.dy = 0)
        }
        return (i.toString = f), i
      }),
      (b.prototype.align = function (a, b) {
        return this.transform('...' + this.getAlign(a, b))
      })
    }),
    d
  )
})
