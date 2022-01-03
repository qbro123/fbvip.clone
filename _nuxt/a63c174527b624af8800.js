(window.webpackJsonp = window.webpackJsonp || []).push([
    [17], {
        416: function(t, e, n) {
            "use strict";
            n(51);
            var r = n(28),
                o = {
                    props: {
                        index: {
                            type: String,
                            default: ""
                        },
                        loginRequired: {
                            type: Boolean,
                            default: !1
                        },
                        iframeDisplay: {
                            type: Boolean,
                            default: !1
                        },
                        init: {
                            type: Function,
                            default: function() {}
                        }
                    },
                    head: function() {
                        return {}
                    },
                    computed: {},
                    methods: {},
                    mounted: function() {
                        var t = this;
                        this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = t.$store.state.user, t.loginRequired && null == n ? (t.$router.push("/"), t.$alertLoginRequired()) : (t.$store.commit("mutate", {
                                            property: "currentTab",
                                            with: t.index
                                        }), t.init(), t.$store.commit("mutate", {
                                            property: "iframeDisplay",
                                            with: t.iframeDisplay
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))))
                    }
                },
                l = n(33),
                component = Object(l.a)(o, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("main", {
                        staticClass: "main-content"
                    }, [this._t("default")], 2)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        417: function(t, e, n) {
            "use strict";
            var r = {
                    components: {},
                    head: function() {
                        return {}
                    },
                    beforeCreate: function() {
                        this.component = "index"
                    },
                    data: function() {
                        return {}
                    },
                    methods: {},
                    mounted: function() {}
                },
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)(this.component, {
                        tag: "component"
                    })
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        430: function(t, e, n) {
            "undefined" != typeof self && self, t.exports = function(t) {
                var e = {};

                function n(r) {
                    if (e[r]) return e[r].exports;
                    var o = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = t, n.c = e, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return n.d(e, "a", e), e
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, n.p = "./", n(n.s = 0)
            }({
                0: function(t, e, n) {
                    t.exports = n("vgs7")
                },
                A5qe: function(t, e, n) {
                    (function(n) {
                        var r, o, a, i = {
                            scope: {}
                        };
                        i.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                            if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
                            t != Array.prototype && t != Object.prototype && (t[e] = n.value)
                        }, i.getGlobal = function(t) {
                            return "undefined" != typeof window && window === t ? t : void 0 !== n && null != n ? n : t
                        }, i.global = i.getGlobal(this), i.SYMBOL_PREFIX = "jscomp_symbol_", i.initSymbol = function() {
                            i.initSymbol = function() {}, i.global.Symbol || (i.global.Symbol = i.Symbol)
                        }, i.symbolCounter_ = 0, i.Symbol = function(t) {
                            return i.SYMBOL_PREFIX + (t || "") + i.symbolCounter_++
                        }, i.initSymbolIterator = function() {
                            i.initSymbol();
                            var t = i.global.Symbol.iterator;
                            t || (t = i.global.Symbol.iterator = i.global.Symbol("iterator")), "function" != typeof Array.prototype[t] && i.defineProperty(Array.prototype, t, {
                                configurable: !0,
                                writable: !0,
                                value: function() {
                                    return i.arrayIterator(this)
                                }
                            }), i.initSymbolIterator = function() {}
                        }, i.arrayIterator = function(t) {
                            var e = 0;
                            return i.iteratorPrototype((function() {
                                return e < t.length ? {
                                    done: !1,
                                    value: t[e++]
                                } : {
                                    done: !0
                                }
                            }))
                        }, i.iteratorPrototype = function(t) {
                            return i.initSymbolIterator(), (t = {
                                next: t
                            })[i.global.Symbol.iterator] = function() {
                                return this
                            }, t
                        }, i.array = i.array || {}, i.iteratorFromArray = function(t, e) {
                            i.initSymbolIterator(), t instanceof String && (t += "");
                            var n = 0,
                                r = {
                                    next: function() {
                                        if (n < t.length) {
                                            var o = n++;
                                            return {
                                                value: e(o, t[o]),
                                                done: !1
                                            }
                                        }
                                        return r.next = function() {
                                            return {
                                                done: !0,
                                                value: void 0
                                            }
                                        }, r.next()
                                    }
                                };
                            return r[Symbol.iterator] = function() {
                                return r
                            }, r
                        }, i.polyfill = function(t, e, n, r) {
                            if (e) {
                                for (n = i.global, t = t.split("."), r = 0; r < t.length - 1; r++) {
                                    var o = t[r];
                                    o in n || (n[o] = {}), n = n[o]
                                }(e = e(r = n[t = t[t.length - 1]])) != r && null != e && i.defineProperty(n, t, {
                                    configurable: !0,
                                    writable: !0,
                                    value: e
                                })
                            }
                        }, i.polyfill("Array.prototype.keys", (function(t) {
                            return t || function() {
                                return i.iteratorFromArray(this, (function(t) {
                                    return t
                                }))
                            }
                        }), "es6-impl", "es3");
                        var u = this;
                        o = [], r = function() {
                            function t(t) {
                                if (!L.col(t)) try {
                                    return document.querySelectorAll(t)
                                } catch (t) {}
                            }

                            function e(t, e) {
                                for (var n = t.length, r = 2 <= arguments.length ? arguments[1] : void 0, o = [], a = 0; a < n; a++)
                                    if (a in t) {
                                        var i = t[a];
                                        e.call(r, i, a, t) && o.push(i)
                                    }
                                return o
                            }

                            function n(t) {
                                return t.reduce((function(t, e) {
                                    return t.concat(L.arr(e) ? n(e) : e)
                                }), [])
                            }

                            function r(e) {
                                return L.arr(e) ? e : (L.str(e) && (e = t(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
                            }

                            function o(t, e) {
                                return t.some((function(t) {
                                    return t === e
                                }))
                            }

                            function a(t) {
                                var e, n = {};
                                for (e in t) n[e] = t[e];
                                return n
                            }

                            function i(t, e) {
                                var n, r = a(t);
                                for (n in t) r[n] = e.hasOwnProperty(n) ? e[n] : t[n];
                                return r
                            }

                            function s(t, e) {
                                var n, r = a(t);
                                for (n in e) r[n] = L.und(t[n]) ? e[n] : t[n];
                                return r
                            }

                            function l(t) {
                                if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t)) return t[2]
                            }

                            function p(t, e) {
                                return L.fnc(t) ? t(e.target, e.id, e.total) : t
                            }

                            function c(t, e) {
                                if (e in t.style) return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
                            }

                            function m(t, e) {
                                return L.dom(t) && o(P, e) ? "transform" : L.dom(t) && (t.getAttribute(e) || L.svg(t) && t[e]) ? "attribute" : L.dom(t) && "transform" !== e && c(t, e) ? "css" : null != t[e] ? "object" : void 0
                            }

                            function g(t, n) {
                                var r = function(t) {
                                    return -1 < t.indexOf("translate") || "perspective" === t ? "px" : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew") ? "deg" : void 0
                                }(n);
                                if (r = -1 < n.indexOf("scale") ? 1 : 0 + r, !(t = t.style.transform)) return r;
                                for (var o = [], a = [], i = [], u = /(\w+)\((.+?)\)/g; o = u.exec(t);) a.push(o[1]), i.push(o[2]);
                                return (t = e(i, (function(t, e) {
                                    return a[e] === n
                                }))).length ? t[0] : r
                            }

                            function d(t, e) {
                                switch (m(t, e)) {
                                    case "transform":
                                        return g(t, e);
                                    case "css":
                                        return c(t, e);
                                    case "attribute":
                                        return t.getAttribute(e)
                                }
                                return t[e] || 0
                            }

                            function _(t, e) {
                                var n = /^(\*=|\+=|-=)/.exec(t);
                                if (!n) return t;
                                var r = l(t) || 0;
                                switch (e = parseFloat(e), t = parseFloat(t.replace(n[0], "")), n[0][0]) {
                                    case "+":
                                        return e + t + r;
                                    case "-":
                                        return e - t + r;
                                    case "*":
                                        return e * t + r
                                }
                            }

                            function b(t, e) {
                                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                            }

                            function h(t) {
                                t = t.points;
                                for (var e, n = 0, r = 0; r < t.numberOfItems; r++) {
                                    var o = t.getItem(r);
                                    0 < r && (n += b(e, o)), e = o
                                }
                                return n
                            }

                            function v(t) {
                                if (t.getTotalLength) return t.getTotalLength();
                                switch (t.tagName.toLowerCase()) {
                                    case "circle":
                                        return 2 * Math.PI * t.getAttribute("r");
                                    case "rect":
                                        return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
                                    case "line":
                                        return b({
                                            x: t.getAttribute("x1"),
                                            y: t.getAttribute("y1")
                                        }, {
                                            x: t.getAttribute("x2"),
                                            y: t.getAttribute("y2")
                                        });
                                    case "polyline":
                                        return h(t);
                                    case "polygon":
                                        var e = t.points;
                                        return h(t) + b(e.getItem(e.numberOfItems - 1), e.getItem(0))
                                }
                            }

                            function f(t, e) {
                                function n(n) {
                                    return n = void 0 === n ? 0 : n, t.el.getPointAtLength(1 <= e + n ? e + n : 0)
                                }
                                var r = n(),
                                    o = n(-1),
                                    a = n(1);
                                switch (t.property) {
                                    case "x":
                                        return r.x;
                                    case "y":
                                        return r.y;
                                    case "angle":
                                        return 180 * Math.atan2(a.y - o.y, a.x - o.x) / Math.PI
                                }
                            }

                            function y(t, e) {
                                var n, r = /-?\d*\.?\d+/g;
                                if (n = L.pth(t) ? t.totalLength : t, L.col(n))
                                    if (L.rgb(n)) {
                                        var o = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
                                        n = o ? "rgba(" + o[1] + ",1)" : n
                                    } else n = L.hex(n) ? function(t) {
                                        t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, r) {
                                            return e + e + n + n + r + r
                                        }));
                                        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                                        return "rgba(" + (t = parseInt(e[1], 16)) + "," + parseInt(e[2], 16) + "," + (e = parseInt(e[3], 16)) + ",1)"
                                    }(n) : L.hsl(n) ? function(t) {
                                        function e(t, e, n) {
                                            return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? t + 6 * (e - t) * n : .5 > n ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                                        }
                                        var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
                                        t = parseInt(n[1]) / 360;
                                        var r = parseInt(n[2]) / 100,
                                            o = parseInt(n[3]) / 100;
                                        if (n = n[4] || 1, 0 == r) o = r = t = o;
                                        else {
                                            var a = .5 > o ? o * (1 + r) : o + r - o * r,
                                                i = 2 * o - a;
                                            o = e(i, a, t + 1 / 3), r = e(i, a, t), t = e(i, a, t - 1 / 3)
                                        }
                                        return "rgba(" + 255 * o + "," + 255 * r + "," + 255 * t + "," + n + ")"
                                    }(n) : void 0;
                                else o = (o = l(n)) ? n.substr(0, n.length - o.length) : n, n = e && !/\s/g.test(n) ? o + e : o;
                                return {
                                    original: n += "",
                                    numbers: n.match(r) ? n.match(r).map(Number) : [0],
                                    strings: L.str(t) || e ? n.split(r) : []
                                }
                            }

                            function C(t) {
                                return e(t = t ? n(L.arr(t) ? t.map(r) : r(t)) : [], (function(t, e, n) {
                                    return n.indexOf(t) === e
                                }))
                            }

                            function k(t, e) {
                                var n = a(e);
                                if (L.arr(t)) {
                                    var o = t.length;
                                    2 !== o || L.obj(t[0]) ? L.fnc(e.duration) || (n.duration = e.duration / o) : t = {
                                        value: t
                                    }
                                }
                                return r(t).map((function(t, n) {
                                    return n = n ? 0 : e.delay, t = L.obj(t) && !L.pth(t) ? t : {
                                        value: t
                                    }, L.und(t.delay) && (t.delay = n), t
                                })).map((function(t) {
                                    return s(t, n)
                                }))
                            }

                            function w(t, e) {
                                var n;
                                return t.tweens.map((function(r) {
                                    var o = (r = function(t, e) {
                                            var n, r = {};
                                            for (n in t) {
                                                var o = p(t[n], e);
                                                L.arr(o) && 1 === (o = o.map((function(t) {
                                                    return p(t, e)
                                                }))).length && (o = o[0]), r[n] = o
                                            }
                                            return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
                                        }(r, e)).value,
                                        a = d(e.target, t.name),
                                        i = n ? n.to.original : a,
                                        u = (i = L.arr(o) ? o[0] : i, _(L.arr(o) ? o[1] : o, i));
                                    return a = l(u) || l(i) || l(a), r.from = y(i, a), r.to = y(u, a), r.start = n ? n.end : t.offset, r.end = r.start + r.delay + r.duration, r.easing = function(t) {
                                        return L.arr(t) ? O.apply(this, t) : N[t]
                                    }(r.easing), r.elasticity = (1e3 - Math.min(Math.max(r.elasticity, 1), 999)) / 1e3, r.isPath = L.pth(o), r.isColor = L.col(r.from.original), r.isColor && (r.round = 1), n = r
                                }))
                            }

                            function T(t, r) {
                                return e(n(t.map((function(t) {
                                    return r.map((function(e) {
                                        var n = m(t.target, e.name);
                                        if (n) {
                                            var r = w(e, t);
                                            e = {
                                                type: n,
                                                property: e.name,
                                                animatable: t,
                                                tweens: r,
                                                duration: r[r.length - 1].end,
                                                delay: r[0].delay
                                            }
                                        } else e = void 0;
                                        return e
                                    }))
                                }))), (function(t) {
                                    return !L.und(t)
                                }))
                            }

                            function S(t, e, n, r) {
                                var o = "delay" === t;
                                return e.length ? (o ? Math.min : Math.max).apply(Math, e.map((function(e) {
                                    return e[t]
                                }))) : o ? r.delay : n.offset + r.delay + r.duration
                            }

                            function x(t) {
                                var e, n = i(A, t),
                                    r = i(I, t),
                                    o = function(t) {
                                        var e = C(t);
                                        return e.map((function(t, n) {
                                            return {
                                                target: t,
                                                id: n,
                                                total: e.length
                                            }
                                        }))
                                    }(t.targets),
                                    a = [],
                                    u = s(n, r);
                                for (e in t) u.hasOwnProperty(e) || "targets" === e || a.push({
                                    name: e,
                                    offset: u.offset,
                                    tweens: k(t[e], r)
                                });
                                return s(n, {
                                    children: [],
                                    animatables: o,
                                    animations: t = T(o, a),
                                    duration: S("duration", t, n, r),
                                    delay: S("delay", t, n, r)
                                })
                            }

                            function $(t) {
                                function n() {
                                    return window.Promise && new Promise((function(t) {
                                        return d = t
                                    }))
                                }

                                function r(t) {
                                    return p.reversed ? p.duration - t : t
                                }

                                function o(t) {
                                    for (var n = 0, r = {}, o = p.animations, a = o.length; n < a;) {
                                        var i = o[n],
                                            u = i.animatable,
                                            s = i.tweens,
                                            l = s.length - 1,
                                            m = s[l];
                                        l && (m = e(s, (function(e) {
                                            return t < e.end
                                        }))[0] || m), s = Math.min(Math.max(t - m.start - m.delay, 0), m.duration) / m.duration;
                                        for (var d = isNaN(s) ? 1 : m.easing(s, m.elasticity), _ = (s = m.to.strings, m.round), h = void(l = []), g = (h = m.to.numbers.length, 0); g < h; g++) {
                                            var v = void 0,
                                                y = (v = m.to.numbers[g], m.from.numbers[g]);
                                            v = m.isPath ? f(m.value, d * v) : y + d * (v - y), _ && (m.isColor && 2 < g || (v = Math.round(v * _) / _)), l.push(v)
                                        }
                                        if (m = s.length)
                                            for (h = s[0], d = 0; d < m; d++) _ = s[d + 1], g = l[d], isNaN(g) || (h = _ ? h + (g + _) : h + (g + " "));
                                        else h = l[0];
                                        q[i.type](u.target, i.property, h, r, u.id), i.currentValue = h, n++
                                    }
                                    if (n = Object.keys(r).length)
                                        for (o = 0; o < n; o++) E || (E = c(document.body, "transform") ? "transform" : "-webkit-transform"), p.animatables[o].target.style[E] = r[o].join(" ");
                                    p.currentTime = t, p.progress = t / p.duration * 100
                                }

                                function a(t) {
                                    p[t] && p[t](p)
                                }

                                function i() {
                                    p.remaining && !0 !== p.remaining && p.remaining--
                                }

                                function u(t) {
                                    var e = p.duration,
                                        u = p.offset,
                                        c = u + p.delay,
                                        h = p.currentTime,
                                        g = p.reversed,
                                        v = r(t);
                                    if (p.children.length) {
                                        var f = p.children,
                                            b = f.length;
                                        if (v >= p.currentTime)
                                            for (var y = 0; y < b; y++) f[y].seek(v);
                                        else
                                            for (; b--;) f[b].seek(v)
                                    }(v >= c || !e) && (p.began || (p.began = !0, a("begin")), a("run")), v > u && v < e ? o(v) : (v <= u && 0 !== h && (o(0), g && i()), (v >= e && h !== e || !e) && (o(e), g || i())), a("update"), t >= e && (p.remaining ? (l = s, "alternate" === p.direction && (p.reversed = !p.reversed)) : (p.pause(), p.completed || (p.completed = !0, a("complete"), "Promise" in window && (d(), _ = n()))), m = 0)
                                }
                                t = void 0 === t ? {} : t;
                                var s, l, m = 0,
                                    d = null,
                                    _ = n(),
                                    p = x(t);
                                return p.reset = function() {
                                    var t = p.direction,
                                        e = p.loop;
                                    for (p.currentTime = 0, p.progress = 0, p.paused = !0, p.began = !1, p.completed = !1, p.reversed = "reverse" === t, p.remaining = "alternate" === t && 1 === e ? 2 : e, o(0), t = p.children.length; t--;) p.children[t].reset()
                                }, p.tick = function(t) {
                                    s = t, l || (l = s), u((m + s - l) * $.speed)
                                }, p.seek = function(t) {
                                    u(r(t))
                                }, p.pause = function() {
                                    var t = M.indexOf(p); - 1 < t && M.splice(t, 1), p.paused = !0
                                }, p.play = function() {
                                    p.paused && (p.paused = !1, l = 0, m = r(p.currentTime), M.push(p), j || R())
                                }, p.reverse = function() {
                                    p.reversed = !p.reversed, l = 0, m = r(p.currentTime)
                                }, p.restart = function() {
                                    p.pause(), p.reset(), p.play()
                                }, p.finished = _, p.reset(), p.autoplay && p.play(), p
                            }
                            var E, A = {
                                    update: void 0,
                                    begin: void 0,
                                    run: void 0,
                                    complete: void 0,
                                    loop: 1,
                                    direction: "normal",
                                    autoplay: !0,
                                    offset: 0
                                },
                                I = {
                                    duration: 1e3,
                                    delay: 0,
                                    easing: "easeOutElastic",
                                    elasticity: 500,
                                    round: 0
                                },
                                P = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
                                L = {
                                    arr: function(t) {
                                        return Array.isArray(t)
                                    },
                                    obj: function(t) {
                                        return -1 < Object.prototype.toString.call(t).indexOf("Object")
                                    },
                                    pth: function(t) {
                                        return L.obj(t) && t.hasOwnProperty("totalLength")
                                    },
                                    svg: function(t) {
                                        return t instanceof SVGElement
                                    },
                                    dom: function(t) {
                                        return t.nodeType || L.svg(t)
                                    },
                                    str: function(t) {
                                        return "string" == typeof t
                                    },
                                    fnc: function(t) {
                                        return "function" == typeof t
                                    },
                                    und: function(t) {
                                        return void 0 === t
                                    },
                                    hex: function(t) {
                                        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
                                    },
                                    rgb: function(t) {
                                        return /^rgb/.test(t)
                                    },
                                    hsl: function(t) {
                                        return /^hsl/.test(t)
                                    },
                                    col: function(t) {
                                        return L.hex(t) || L.rgb(t) || L.hsl(t)
                                    }
                                },
                                O = function() {
                                    function t(t, e, n) {
                                        return (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
                                    }
                                    return function(e, n, r, o) {
                                        if (0 <= e && 1 >= e && 0 <= r && 1 >= r) {
                                            var a = new Float32Array(11);
                                            if (e !== n || r !== o)
                                                for (var i = 0; 11 > i; ++i) a[i] = t(.1 * i, e, r);
                                            return function(i) {
                                                if (e === n && r === o) return i;
                                                if (0 === i) return 0;
                                                if (1 === i) return 1;
                                                for (var u = 0, s = 1; 10 !== s && a[s] <= i; ++s) u += .1;
                                                --s, s = u + (i - a[s]) / (a[s + 1] - a[s]) * .1;
                                                var l = 3 * (1 - 3 * r + 3 * e) * s * s + 2 * (3 * r - 6 * e) * s + 3 * e;
                                                if (.001 <= l) {
                                                    for (u = 0; 4 > u && 0 != (l = 3 * (1 - 3 * r + 3 * e) * s * s + 2 * (3 * r - 6 * e) * s + 3 * e); ++u) {
                                                        var c = t(s, e, r) - i;
                                                        s -= c / l
                                                    }
                                                    i = s
                                                } else if (0 === l) i = s;
                                                else {
                                                    s = u, u += .1;
                                                    var m = 0;
                                                    do {
                                                        0 < (l = t(c = s + (u - s) / 2, e, r) - i) ? u = c : s = c
                                                    } while (1e-7 < Math.abs(l) && 10 > ++m);
                                                    i = c
                                                }
                                                return t(i, n, o)
                                            }
                                        }
                                    }
                                }(),
                                N = function() {
                                    function t(t, e) {
                                        return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e)
                                    }
                                    var e, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                                        r = {
                                            In: [
                                                [.55, .085, .68, .53],
                                                [.55, .055, .675, .19],
                                                [.895, .03, .685, .22],
                                                [.755, .05, .855, .06],
                                                [.47, 0, .745, .715],
                                                [.95, .05, .795, .035],
                                                [.6, .04, .98, .335],
                                                [.6, -.28, .735, .045], t
                                            ],
                                            Out: [
                                                [.25, .46, .45, .94],
                                                [.215, .61, .355, 1],
                                                [.165, .84, .44, 1],
                                                [.23, 1, .32, 1],
                                                [.39, .575, .565, 1],
                                                [.19, 1, .22, 1],
                                                [.075, .82, .165, 1],
                                                [.175, .885, .32, 1.275],
                                                function(e, n) {
                                                    return 1 - t(1 - e, n)
                                                }
                                            ],
                                            InOut: [
                                                [.455, .03, .515, .955],
                                                [.645, .045, .355, 1],
                                                [.77, 0, .175, 1],
                                                [.86, 0, .07, 1],
                                                [.445, .05, .55, .95],
                                                [1, 0, 0, 1],
                                                [.785, .135, .15, .86],
                                                [.68, -.55, .265, 1.55],
                                                function(e, n) {
                                                    return .5 > e ? t(2 * e, n) / 2 : 1 - t(-2 * e + 2, n) / 2
                                                }
                                            ]
                                        },
                                        o = {
                                            linear: O(.25, .25, .75, .75)
                                        },
                                        a = {};
                                    for (e in r) a.type = e, r[a.type].forEach(function(t) {
                                        return function(e, r) {
                                            o["ease" + t.type + n[r]] = L.fnc(e) ? e : O.apply(u, e)
                                        }
                                    }(a)), a = {
                                        type: a.type
                                    };
                                    return o
                                }(),
                                q = {
                                    css: function(t, e, n) {
                                        return t.style[e] = n
                                    },
                                    attribute: function(t, e, n) {
                                        return t.setAttribute(e, n)
                                    },
                                    object: function(t, e, n) {
                                        return t[e] = n
                                    },
                                    transform: function(t, e, n, r, o) {
                                        r[o] || (r[o] = []), r[o].push(e + "(" + n + ")")
                                    }
                                },
                                M = [],
                                j = 0,
                                R = function() {
                                    function t() {
                                        j = requestAnimationFrame(e)
                                    }

                                    function e(e) {
                                        var n = M.length;
                                        if (n) {
                                            for (var r = 0; r < n;) M[r] && M[r].tick(e), r++;
                                            t()
                                        } else cancelAnimationFrame(j), j = 0
                                    }
                                    return t
                                }();
                            return $.version = "2.2.0", $.speed = 1, $.running = M, $.remove = function(t) {
                                t = C(t);
                                for (var e = M.length; e--;)
                                    for (var n = M[e], r = n.animations, a = r.length; a--;) o(t, r[a].animatable.target) && (r.splice(a, 1), r.length || n.pause())
                            }, $.getValue = d, $.path = function(e, n) {
                                var r = L.str(e) ? t(e)[0] : e,
                                    o = n || 100;
                                return function(t) {
                                    return {
                                        el: r,
                                        property: t,
                                        totalLength: v(r) * (o / 100)
                                    }
                                }
                            }, $.setDashoffset = function(t) {
                                var e = v(t);
                                return t.setAttribute("stroke-dasharray", e), e
                            }, $.bezier = O, $.easings = N, $.timeline = function(t) {
                                var e = $(t);
                                return e.pause(), e.duration = 0, e.add = function(n) {
                                    return e.children.forEach((function(t) {
                                        t.began = !0, t.completed = !0
                                    })), r(n).forEach((function(n) {
                                        var r = s(n, i(I, t || {}));
                                        r.targets = r.targets || t.targets, n = e.duration;
                                        var o = r.offset;
                                        r.autoplay = !1, r.direction = e.direction, r.offset = L.und(o) ? n : _(o, n), e.began = !0, e.completed = !0, e.seek(r.offset), (r = $(r)).began = !0, r.completed = !0, r.duration > n && (e.duration = r.duration), e.children.push(r)
                                    })), e.seek(0), e.reset(), e.autoplay && e.restart(), e
                                }, e
                            }, $.random = function(t, e) {
                                return Math.floor(Math.random() * (e - t + 1)) + t
                            }, $
                        }, void 0 === (a = "function" == typeof r ? r.apply(e, o) : r) || (t.exports = a)
                    }).call(e, n("DuR2"))
                },
                DuR2: function(t, e) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || Function("return this")() || (0, eval)("this")
                    } catch (t) {
                        "object" == typeof window && (n = window)
                    }
                    t.exports = n
                },
                vgs7: function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("A5qe"),
                        o = n.n(r),
                        a = {
                            props: {
                                value: {
                                    type: [Number, String],
                                    default: "0",
                                    required: !0
                                },
                                formatValue: {
                                    type: Function,
                                    default: function(t) {
                                        return t
                                    }
                                },
                                easing: {
                                    type: String,
                                    default: "linear"
                                },
                                duration: {
                                    type: Number,
                                    default: 1e3
                                },
                                update: Function,
                                begin: Function,
                                complete: Function,
                                run: Function,
                                delay: {
                                    type: Number,
                                    default: 0
                                },
                                round: {
                                    default: null
                                }
                            },
                            data: function() {
                                return {
                                    animatedValue: 0
                                }
                            },
                            mounted: function() {
                                this.animateValue(this.value)
                            },
                            watch: {
                                value: function(t) {
                                    this.animateValue(t)
                                }
                            },
                            methods: {
                                animateValue: function(t) {
                                    var e = this.begin,
                                        n = this.easing,
                                        r = this.duration,
                                        a = this.complete,
                                        i = this.update,
                                        u = this.run,
                                        s = this.delay,
                                        l = this.round;
                                    o()({
                                        targets: this,
                                        animatedValue: t,
                                        duration: r,
                                        easing: n,
                                        update: i,
                                        begin: e,
                                        complete: a,
                                        run: u,
                                        delay: s,
                                        round: l
                                    })
                                }
                            }
                        },
                        l = function(t, e, n, r, o, a, i, u) {
                            var s = typeof(t = t || {}).default;
                            "object" !== s && "function" !== s || (t = t.default);
                            var l, c = "function" == typeof t ? t.options : t;
                            if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), a && (c._scopeId = a), i ? (l = function(t) {
                                    (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i)
                                }, c._ssrRegister = l) : o && (l = u ? function() {
                                    o.call(this, this.$root.$options.shadowRoot)
                                } : o), l)
                                if (c.functional) {
                                    c._injectStyles = l;
                                    var m = c.render;
                                    c.render = function(t, e) {
                                        return l.call(e), m(t, e)
                                    }
                                } else {
                                    var d = c.beforeCreate;
                                    c.beforeCreate = d ? [].concat(d, l) : [l]
                                }
                            return {
                                exports: t,
                                options: c
                            }
                        }(a, (function() {
                            var t = this,
                                e = t.$createElement;
                            return (t._self._c || e)("span", {
                                domProps: {
                                    innerHTML: t._s(t.formatValue(Number(t.animatedValue)))
                                }
                            })
                        }), [], !1, null, null, null).exports;
                    e.default = l
                }
            }).default
        },
        440: function(t, e, n) {
            "use strict";
            (function(t) {
                e.a = {
                    name: "SliderHotMatch",
                    props: ["items"],
                    methods: {
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/").concat(t)
                        },
                        initSlider: function() {
                            this.$swiper("#matchesSlider", {
                                loop: !1,
                                autoplay: {
                                    delay: 5e3
                                },
                                effect: "fade",
                                fadeEffect: {
                                    crossFade: !0
                                },
                                lazy: !0,
                                navigation: {
                                    nextEl: "#matches__next",
                                    prevEl: "#matches__prev"
                                }
                            }), this.$swiper("#matchesSliderMobile", {
                                effect: "fade",
                                loop: !0,
                                autoplay: {
                                    delay: 5e3
                                },
                                fadeEffect: {
                                    crossFade: !0
                                },
                                lazy: !0,
                                pagination: {
                                    el: ".matches__pagination",
                                    clickable: !0
                                }
                            })
                        },
                        gotoMatch: function(t, e) {
                            "mobile" === this.$store.state.device ? this.$openLink("/match?eventId=".concat(t, "&leagueId=").concat(e), {
                                loginRequired: !1,
                                newTab: !0,
                                type: "HOTMATCH"
                            }) : this.$openLink("/match?eventId=".concat(t, "&leagueId=").concat(e), {
                                loginRequired: !1,
                                newTab: !1,
                                type: "HOTMATCH"
                            })
                        },
                        errorImage: function(t) {
                            t.target.src = "".concat(this.$store.state.mapDomain.STATIC_URL, "/assets/img/hot-match/error.png")
                        }
                    },
                    watch: {
                        items: function() {
                            var e = this;
                            this.$nextTick((function() {
                                e.initSlider(), e.$props.items && e.$props.items.length && t("#homeSlider").addClass("isHotMatch")
                            }))
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.initSlider()
                        }))
                    }
                }
            }).call(this, n(63))
        },
        441: function(t, e, n) {
            "use strict";
            (function(t) {
                e.a = {
                    methods: {
                        openLoginForm: function() {
                            t(".user-mobile").removeClass("change-form"), t("body").toggleClass("open-user")
                        },
                        openRegisterForm: function() {
                            t(".user-mobile").addClass("change-form"), t("body").toggleClass("open-user")
                        }
                    }
                }
            }).call(this, n(63))
        },
        444: function(t, e, n) {
            "use strict";
            var r = n(94),
                o = n.n(r),
                l = {
                    components: {},
                    data: function() {
                        return {
                            countClick: 0,
                            number: ["??", "??", "??"],
                            isSubmit: !1,
                            isLoad: !1,
                            isHideClick: !1,
                            disableClick: !1
                        }
                    },
                    methods: {
                        moveTo: function(link) {
                            this.$openLink(link, {
                                type: "LODE"
                            })
                        },
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/").concat(t)
                        },
                        generalNumber: function() {
                            var t = 100 * Math.random() >> 0,
                                e = 100 * Math.random() >> 0,
                                n = 100 * Math.random() >> 0;
                            this.number = [t, e, n], this.isLoad = !1, this.isSubmit = !0
                        },
                        handleLuckyNumber: function() {
                            var t = this;
                            this.disableClick = !0, this.countClick++, this.saveDataLocal(this.countClick), this.isLoad = !0, setTimeout((function() {
                                t.generalNumber(), 3 === t.countClick && (t.isHideClick = !0)
                            }), 3e3)
                        },
                        resetInput: function() {
                            this.isSubmit = !1, this.number = ["??", "??", "??"], this.disableClick = !1
                        },
                        saveDataLocal: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                e = o()(new Date),
                                data = {
                                    date: e.format("YYYY-MM-DD"),
                                    countClick: t
                                };
                            localStorage.setItem("luckyNumber", JSON.stringify(data))
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            var e = o()(new Date),
                                n = localStorage.getItem("luckyNumber"),
                                r = !1;
                            if (n) {
                                var l = JSON.parse(n);
                                o()(l.date).isBefore(e.startOf("day")) ? r = !0 : (t.countClick = l.countClick, 3 === t.countClick && (t.isHideClick = !0))
                            } else r = !0;
                            r && t.saveDataLocal()
                        }))
                    }
                },
                c = n(33),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.$isMobile() ? n("div", {
                        staticClass: "lode__lucky-number mb-background"
                    }, [n("div", {
                        staticClass: "lode__lucky-number__title"
                    }, [t._v("\n        CON SỐ MAY MẮN\n    ")]), t._v(" "), t.isHideClick ? n("div", {
                        staticClass: "lode__lucky-number__content-input"
                    }, [n("p", [t._v("Đã hết lượt lấy số hôm nay.")])]) : n("div", {
                        staticClass: "lode__lucky-number__content-input"
                    }, [t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "btn-noel",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png"),
                            alt: "background"
                        }
                    }) : t._e(), t._v(" "), t.isSubmit ? n("b-button", {
                        staticClass: "button button--red d-block",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.resetInput.apply(null, arguments)
                            }
                        }
                    }, [t._v("LẤY SỐ KHÁC")]) : n("b-button", {
                        staticClass: "button button--red d-block",
                        attrs: {
                            disabled: t.disableClick
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.handleLuckyNumber.apply(null, arguments)
                            }
                        }
                    }, [t._v("LẤY SỐ")])], 1), t._v(" "), n("div", {
                        staticClass: "lode__lucky-number__content"
                    }, [n("div", {
                        staticClass: "lode__lucky-number__result",
                        class: {
                            loading: t.isLoad
                        }
                    }, t._l(t.number, (function(e, r) {
                        return n("span", {
                            key: r
                        }, [t._v("\n                " + t._s(e) + "\n            ")])
                    })), 0), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "ic-lode-noel",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow-lo-de.png")
                        }
                    }) : t._e(), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "ic-lode-noel-right",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow-lo-de-right.png")
                        }
                    }) : t._e()]), t._v(" "), n("div", {
                        staticClass: "height-button"
                    }, [t.isSubmit ? n("div", {
                        staticClass: "lode__lucky-number__button"
                    }, [n("a", {
                        staticClass: "button button--red",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/lode/dai-cat")
                            }
                        }
                    }, [t._v("LÔ ĐỀ ĐẠI CÁT")]), t._v(" "), n("a", {
                        staticClass: "button button--blue",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/lode/3-mien")
                            }
                        }
                    }, [t._v("LÔ ĐỀ 3 MIỀN")]), t._v(" "), n("a", {
                        staticClass: "button",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/lode/sieu-toc")
                            }
                        }
                    }, [t._v("LÔ ĐỀ SIÊU TỐC")])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "img-lucky-mb"
                    }, [n("img", {
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/mobile/lucky-number.png",
                            alt: "next"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "img-lucky-mb__dollar dollar1",
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/dollar1.png",
                            alt: "dollar"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "img-lucky-mb__dollar dollar2",
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/dollar2.png",
                            alt: "dollar"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "img-lucky-mb__ball ball1",
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/ball1.png",
                            alt: "bal"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "img-lucky-mb__ball ball2",
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/ball2.png",
                            alt: "bal"
                        }
                    })])]) : n("div", {
                        staticClass: "lode__lucky-number"
                    }, [n("div", {
                        staticClass: "img-lucky img-lucky--left"
                    }, [n("img", {
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/lucky-man.png",
                            alt: "next"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "img-lucky__dollar dollar1",
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/dollar1.png",
                            alt: "dollar"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "img-lucky__dollar dollar2",
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/dollar2.png",
                            alt: "dollar"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "img-lucky img-lucky--right"
                    }, [n("img", {
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/lucky-girl.png",
                            alt: "girl"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "img-lucky__ball ball2",
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/ball1.png",
                            alt: "bal"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "img-lucky__ball ball1",
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/lode/ball2.png",
                            alt: "bal"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "lode__lucky-number__title"
                    }, [t._v("\n        CON SỐ MAY MẮN\n    ")]), t._v(" "), n("div", {
                        staticClass: "lode__lucky-number__content"
                    }, [t.isHideClick ? n("div", {
                        staticClass: "lode__lucky-number__content-input"
                    }, [n("p", [t._v("Đã hết lượt lấy số hôm nay.")])]) : n("div", {
                        staticClass: "lode__lucky-number__content-input"
                    }, [t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "btn-noel",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png"),
                            alt: "background"
                        }
                    }) : t._e(), t._v(" "), t.isSubmit ? n("b-button", {
                        staticClass: "button button--red d-block",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.resetInput.apply(null, arguments)
                            }
                        }
                    }, [t._v("LẤY SỐ KHÁC")]) : n("b-button", {
                        staticClass: "button button--red d-block",
                        attrs: {
                            disabled: t.disableClick
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.handleLuckyNumber.apply(null, arguments)
                            }
                        }
                    }, [t._v("LẤY SỐ")])], 1), t._v(" "), n("div", {
                        staticClass: "lode__lucky-number__result",
                        class: {
                            loading: t.isLoad
                        }
                    }, t._l(t.number, (function(e, r) {
                        return n("span", {
                            key: r
                        }, [t._v("\n                " + t._s(e) + "\n            ")])
                    })), 0), t._v(" "), n("div", {
                        staticClass: "height-button"
                    }, [t.isSubmit ? n("div", {
                        staticClass: "lode__lucky-number__button"
                    }, [n("a", {
                        staticClass: "button button--red d-block",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/lode/dai-cat")
                            }
                        }
                    }, [t._v("LÔ ĐỀ ĐẠI CÁT")]), t._v(" "), n("a", {
                        staticClass: "button button--blue d-block",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/lode/3-mien")
                            }
                        }
                    }, [t._v("LÔ ĐỀ 3 MIỀN")]), t._v(" "), n("a", {
                        staticClass: "button d-block",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/lode/sieu-toc")
                            }
                        }
                    }, [t._v("LÔ ĐỀ SIÊU TỐC")])]) : t._e()]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "ic-lode-noel",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow-lo-de.png")
                        }
                    }) : t._e(), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "ic-lode-noel-right",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow-lo-de-right.png")
                        }
                    }) : t._e()])])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        475: function(t, e, n) {
            "use strict";
            n.r(e);
            var base = n(417),
                r = (n(21), n(19), n(20), n(15), n(3)),
                o = (n(39), n(18), n(16), n(108), n(43), n(51), n(28)),
                l = n(416),
                c = {
                    name: "live-casino",
                    props: ["items"],
                    data: function() {
                        return {
                            liveSwiper: null
                        }
                    },
                    methods: {
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/").concat(t)
                        },
                        initSlider: function() {
                            var t = this.liveSwiper = this.$swiper("#liveCasinoSlider", {
                                slidesPerView: 5,
                                spaceBetween: 30,
                                loop: !0,
                                lazy: {
                                    loadPrevNext: !0,
                                    loadPrevNextAmount: 1
                                },
                                centeredSlides: !0,
                                navigation: {
                                    nextEl: "#live-casino__next",
                                    prevEl: "#live-casino__prev"
                                },
                                autoplay: {
                                    delay: 5e3
                                },
                                breakpoints: {
                                    0: {
                                        slidesPerView: 3,
                                        spaceBetween: 30
                                    },
                                    992: {
                                        slidesPerView: 5,
                                        spaceBetween: 30
                                    }
                                }
                            });
                            t.autoplay.stop(), setTimeout((function() {
                                t.autoplay.start()
                            }), 1e4)
                        }
                    },
                    watch: {
                        items: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.initSlider()
                            }))
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.initSlider()
                        }))
                    }
                },
                m = n(33),
                d = Object(m.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "section section--live-casino img-block"
                    }, [n("b-container", [n("div", {
                        staticClass: "section-title"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("live casino")])])]), t._v(" "), n("div", {
                        staticClass: "live-casino"
                    }, [n("div", {
                        staticClass: "live-casino__slider swiper-container",
                        attrs: {
                            id: "liveCasinoSlider"
                        }
                    }, [n("div", {
                        staticClass: "swiper-wrapper live-casino__swipper"
                    }, t._l(t.items, (function(i) {
                        return n("div", {
                            key: i.id,
                            staticClass: "live-casino__item swiper-slide"
                        }, [n("n-link", {
                            staticClass: "live-casino__link",
                            attrs: {
                                to: "/livecasino?partner=" + i.id
                            }
                        }, [n("r-img", {
                            staticClass: "swiper-lazy",
                            attrs: {
                                type: "picture",
                                static: t.$store.state.mapDomain.STATIC_URL + "/assets/img/live-casino/liveCasino_" + i.id + ".png",
                                alt: ""
                            }
                        })], 1)], 1)
                    })), 0), t._v(" "), n("div", {
                        staticClass: "swiper-button-prev live-casino__prev",
                        attrs: {
                            id: "live-casino__prev"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "swiper-button-next live-casino__next",
                        attrs: {
                            id: "live-casino__next"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "live-casino__button show-mobile"
                    }, [n("n-link", {
                        staticClass: "button",
                        attrs: {
                            to: "/livecasino",
                            title: "thêm"
                        }
                    }, [t._v("Xem thêm")]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png"),
                            alt: "background"
                        }
                    }) : t._e()], 1)], 1)
                }), [], !1, null, null, null).exports,
                _ = (n(177), {
                    name: "hot-games",
                    data: function() {
                        return {
                            desktop: !1,
                            games: [{
                                title: "lô đề",
                                thumb: "hotgame_lode",
                                iconEffect: [],
                                newTab: !0,
                                type: "GAME",
                                iconNoel: "snow-hot-game-left",
                                data: {
                                    link: "/lode"
                                }
                            }, {
                                link_type: this.$LINK_TYPE.PAGE,
                                title: "Sports",
                                thumb: "hotgame_ingame",
                                iconEffect: [],
                                newTab: !1,
                                type: "LOBBY",
                                iconNoel: "snow-hot-game-center",
                                data: {
                                    link: "/sports"
                                }
                            }, {
                                link_type: this.$LINK_TYPE.PAGE,
                                title: "bắn cá",
                                thumb: "hotgame_banca",
                                iconEffect: [],
                                newTab: !1,
                                type: "LOBBY",
                                iconNoel: "snow-hot-game-right",
                                data: {
                                    link: "/games?type=fishing"
                                }
                            }]
                        }
                    },
                    methods: {
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/assets/img/hot-games/").concat(t, ".png")
                        },
                        getUrlStaticNoel: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/assets/img/event/noel/home/").concat(t, ".png")
                        },
                        moveTo: function(t) {
                            t.newTab && this.$isMobile() ? this.$openLink(t.data.link, {
                                loginRequired: t.loginRequired,
                                newTab: !0,
                                type: t.type
                            }) : t.playGame ? this.$playGame(t.playGame) : this.$openLink(t.data.link, {
                                loginRequired: t.loginRequired,
                                newTab: !1,
                                type: t.type
                            })
                        },
                        initSlider: function() {
                            var t = this;
                            this.$swiper("#gameHotSlider", {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                lazy: {
                                    loadPrevNext: !0,
                                    loadPrevNextAmount: 1
                                },
                                loop: !0,
                                centeredSlides: !0,
                                autoplay: {
                                    delay: 5e3
                                },
                                on: {
                                    click: function(e) {
                                        var n = e.target.dataset.click;
                                        if (void 0 !== n) {
                                            var link = JSON.parse(n);
                                            t.moveTo(link)
                                        }
                                    }
                                }
                            })
                        },
                        isDesktop: function() {
                            this.$device.isDesktopOrTablet ? this.desktop = !0 : this.desktop = !1
                        },
                        getUrlDevice: function(t) {
                            var e = this.getFileExtension(t),
                                n = this.getUrlNotExtension(t);
                            return this.$device.isDesktopOrTablet ? "".concat(n, ".").concat(e) : "".concat(n, ".480w.").concat(e)
                        },
                        getFileExtension: function(t) {
                            if (void 0 !== t && t) {
                                var e = t.lastIndexOf("/");
                                return -1 !== e && (t = t.substring(e + 1)), -1 !== (e = t.indexOf("?")) && (t = t.substring(0, e)), -1 !== (e = t.indexOf("#")) && (t = t.substring(0, e)), -1 !== (e = t.lastIndexOf(".")) ? t.substring(e + 1) : ""
                            }
                            return ""
                        },
                        getUrlNotExtension: function(t) {
                            if (void 0 !== t && t) {
                                var e = t.lastIndexOf(".");
                                return -1 !== e ? t.substring(0, e) : ""
                            }
                            return ""
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.isDesktop(), this.$nextTick((function() {
                            t.initSlider()
                        }))
                    }
                }),
                h = Object(m.a)(_, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "section section--hotgames game-hot img-block"
                    }, [n("b-container", [n("div", {
                        staticClass: "section-title"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("hot games")])]), t._v(" "), t.desktop ? n("div", {
                        staticClass: "align-items-start wrap-list-game show-desktop"
                    }, [n("div", {
                        staticClass: "list-game flex-box"
                    }, t._l(t.games, (function(i) {
                        return n("div", {
                            key: i.title,
                            staticClass: "game-hot-item"
                        }, [n("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.moveTo(i)
                                }
                            }
                        }, [n("figure", {
                            directives: [{
                                name: "lazy-container",
                                rawName: "v-lazy-container",
                                value: {
                                    selector: "img",
                                    error: "/assets/img/hot-games/hotgame_lazy.png",
                                    loading: "/assets/img/hot-games/hotgame_lazy.png"
                                },
                                expression: "{ selector: 'img', error: '/assets/img/hot-games/hotgame_lazy.png', loading: '/assets/img/hot-games/hotgame_lazy.png' }"
                            }]
                        }, [n("img", {
                            attrs: {
                                "data-src": t.getUrlDevice(t.getUrlStatic(i.thumb)),
                                alt: i.title
                            }
                        }), t._v(" "), i.iconEffect && i.iconEffect.length ? n("div", {
                            staticClass: "game-hot-item-effect"
                        }, t._l(i.iconEffect, (function(e) {
                            return n("img", {
                                key: e,
                                attrs: {
                                    src: t.getUrlStatic(e),
                                    alt: i.title
                                }
                            })
                        })), 0) : t._e(), t._v(" "), n("p", {
                            staticClass: "game-hot-item-title"
                        }, [t._v(t._s(i.title))]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                            staticClass: "game-hot-item-noel",
                            attrs: {
                                "data-src": t.getUrlStaticNoel(i.iconNoel)
                            }
                        }) : t._e()]), t._v(" "), n("div", {
                            staticClass: "game-hot-item-button"
                        }, [n("span", {
                            staticClass: "button button--blue",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.moveTo(i)
                                }
                            }
                        }, [t._v("chơi ngay")])])])])
                    })), 0)]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "show-mobile game-hot__slider-wrap"
                    }, [n("div", {
                        staticClass: "game-hot__slider swiper-container",
                        attrs: {
                            id: "gameHotSlider"
                        }
                    }, [n("div", {
                        staticClass: "swiper-wrapper game-hot__swipper"
                    }, t._l(t.games, (function(i) {
                        return n("div", {
                            key: i.title,
                            staticClass: "game-hot-item swiper-slide"
                        }, [n("a", {
                            attrs: {
                                href: "javascript:void(0)",
                                "data-click": JSON.stringify(i.data)
                            },
                            on: {
                                click: function(e) {
                                    return t.moveTo(i)
                                }
                            }
                        }, [n("figure", [n("r-img", {
                            staticClass: "swiper-lazy",
                            attrs: {
                                type: "picture",
                                static: t.getUrlStatic(i.thumb),
                                alt: i.title
                            }
                        }), t._v(" "), i.iconEffect && i.iconEffect.length ? n("div", {
                            staticClass: "game-hot-item-effect"
                        }, t._l(i.iconEffect, (function(e) {
                            return n("img", {
                                key: e,
                                attrs: {
                                    src: t.getUrlStatic(e),
                                    alt: i.title
                                }
                            })
                        })), 0) : t._e(), t._v(" "), n("p", {
                            staticClass: "game-hot-item-title"
                        }, [t._v(t._s(i.title))]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                            staticClass: "game-hot-item-noel",
                            attrs: {
                                src: t.getUrlStaticNoel(i.iconNoel)
                            }
                        }) : t._e()], 1), t._v(" "), n("div", {
                            staticClass: "game-hot-item-button"
                        }, [n("span", {
                            staticClass: "button button--blue",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.moveTo(i)
                                }
                            }
                        }, [t._v("chơi ngay")])])])])
                    })), 0)])])], 1)
                }), [], !1, null, null, null).exports,
                v = {
                    components: {},
                    data: function() {
                        return {
                            items: [{
                                src: "banner-game-lat-the.jpeg",
                                srcMobile: "banner-game-lat-the.480w.jpeg",
                                alt: "slider",
                                data: {
                                    link_type: this.$LINK_TYPE.PAGE,
                                    link: "/event/noel"
                                }
                            }, {
                                src: "banner-game-bai.jpg",
                                srcMobile: "banner-game-bai.480w.jpg",
                                alt: "slider",
                                data: {
                                    link_type: this.$LINK_TYPE.PAGE,
                                    link: "/games?type=gamebai"
                                }
                            }, {
                                src: "keno-loc-phat.png",
                                srcMobile: "keno-loc-phat.480w.png",
                                alt: "slider",
                                data: {
                                    link_type: this.$LINK_TYPE.GAME,
                                    display_types: [7],
                                    partner_game_id: "ktrng3995",
                                    partner_provider: "vingame"
                                }
                            }, {
                                src: "ca-cuoc-banner.jpg",
                                srcMobile: "ca-cuoc-banner.480w.jpg",
                                alt: "slider",
                                data: {
                                    link_type: this.$LINK_TYPE.PAGE,
                                    link: "/sports"
                                }
                            }, {
                                src: "liveCasino_tt.jpg",
                                srcMobile: "liveCasino_tt.480w.jpg",
                                alt: "slider",
                                data: {
                                    link_type: this.$LINK_TYPE.PAGE,
                                    link: "/livecasino"
                                }
                            }, {
                                src: "esports.jpg",
                                srcMobile: "esports.480w.jpg",
                                alt: "slider",
                                data: {
                                    link_type: this.$LINK_TYPE.FUNC,
                                    func: "$openEsports",
                                    link: "/esports",
                                    newTab: !0
                                }
                            }, {
                                src: "banner-atlantis.jpg",
                                srcMobile: "banner-atlantis.480w.jpg",
                                alt: "Đế vương atlantis",
                                data: {
                                    link_type: this.$LINK_TYPE.GAME,
                                    display_types: [3],
                                    partner_game_id: "kts9945",
                                    partner_provider: "vingame"
                                }
                            }, {
                                src: "banner-dai-duong.jpg",
                                srcMobile: "banner-dai-duong.480w.jpg",
                                alt: "Quái vật đại dương",
                                data: {
                                    link_type: this.$LINK_TYPE.GAME,
                                    display_types: [2],
                                    partner_game_id: "ktf1990",
                                    partner_provider: "vingame"
                                }
                            }]
                        }
                    },
                    methods: {
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/assets/img/sliders/").concat(t)
                        },
                        initSlider: function() {
                            var t = this;
                            this.$swiper("#homeSlider", {
                                loop: !0,
                                lazy: {
                                    loadPrevNext: !0,
                                    loadPrevNextAmount: 1
                                },
                                autoplay: {
                                    delay: 5e3
                                },
                                pagination: {
                                    el: ".home-banner__pagination",
                                    clickable: !0
                                },
                                on: {
                                    click: function(e) {
                                        var n = e.target.dataset.click;
                                        if (void 0 !== n) {
                                            var link = JSON.parse(n);
                                            t.moveTo(link)
                                        }
                                    }
                                }
                            })
                        },
                        moveTo: function(t) {
                            t.link_type !== this.$LINK_TYPE.PAGE ? t.link_type !== this.$LINK_TYPE.GAME ? t.link_type === this.$LINK_TYPE.FUNC && (t.hasParams ? this[t.func](t.link, t.options) : this[t.func]()) : this.$playGame(t) : t.newTab || t.newTabOnMobile && this.$isMobile() ? this.$openLink(t.link, {
                                loginRequired: !1,
                                newTab: !0,
                                type: "MATCH"
                            }) : "match" === t.type ? this.$openLink(t.link, {
                                type: "MATCH"
                            }) : this.$router.push(t.link)
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.initSlider()
                        }))
                    }
                },
                f = Object(m.a)(v, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "section section--home-banner img-block"
                    }, [n("div", {
                        staticClass: "home-banner"
                    }, [n("div", {
                        staticClass: "home-banner__slider swiper-container",
                        attrs: {
                            id: "homeSlider"
                        }
                    }, [n("div", {
                        staticClass: "swiper-wrapper home-banner__swipper"
                    }, t._l(t.items, (function(e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "home-banner__item swiper-slide"
                        }, [n("div", {
                            staticClass: "home-banner__link"
                        }, [n("img", {
                            staticClass: "swiper-lazy home-banner__img-desk",
                            attrs: {
                                src: t.getUrlStatic(e.src),
                                alt: e.alt
                            }
                        }), t._v(" "), n("img", {
                            staticClass: "swiper-lazy home-banner__img-mobile",
                            attrs: {
                                src: t.getUrlStatic(e.srcMobile),
                                alt: e.alt
                            }
                        }), t._v(" "), n("a", {
                            staticClass: "position-cover",
                            attrs: {
                                href: "#",
                                "data-click": JSON.stringify(e.data)
                            },
                            on: {
                                click: function(t) {
                                    t.preventDefault()
                                }
                            }
                        })])])
                    })), 0), t._v(" "), n("div", {
                        staticClass: "home-banner__pagination swiper-pagination"
                    })])])])
                }), [], !1, null, null, null).exports,
                y = n(440).a,
                C = Object(m.a)(y, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.items && t.items.length ? n("section", {
                        staticClass: "section section--hot-matches"
                    }, [n("div", {
                        staticClass: "hot-matches__bg img-background"
                    }, [n("img", {
                        staticClass: "show-desktop",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/hot-match/hot-match-bg.png"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "show-mobile",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/hot-match/hot-match-bg.480w.png"
                        }
                    })]), t._v(" "), n("b-container", [n("div", {
                        staticClass: "matches"
                    }, [n("div", {
                        staticClass: "matches__container swiper-container matches__desktop",
                        attrs: {
                            id: "matchesSlider"
                        }
                    }, [n("div", {
                        staticClass: "swiper-wrapper matches__swipper"
                    }, t._l(t.items, (function(i) {
                        return n("div", {
                            key: i.id,
                            staticClass: "matches__item swiper-slide"
                        }, [n("div", {
                            staticClass: "matches__row matches__row--top"
                        }, [n("div", {
                            staticClass: "matches__times"
                        }, [n("span", [t._v(t._s(i.text_time))])])]), t._v(" "), n("div", {
                            staticClass: "position-relative"
                        }, [n("div", {
                            staticClass: "matches__row matches__row--middle"
                        }, [n("div", {
                            staticClass: "matches__league"
                        }, [n("span", [t._v(t._s(i.league_name_text))])]), t._v(" "), i.teams && i.teams.length ? n("div", {
                            staticClass: "matches__hot"
                        }, [n("div", {
                            staticClass: "matches__middle matches__middle--left"
                        }, [n("div", {
                            staticClass: "matches__name"
                        }, [n("span", [t._v(t._s(i.teams[0].name))])]), t._v(" "), n("div", {
                            staticClass: "matches__logo img-position img-position--contain"
                        }, [n("img", {
                            staticClass: "swiper-lazy",
                            attrs: {
                                "data-src": i.teams[0].flag_thumbnail,
                                alt: i.teams[0].name
                            },
                            on: {
                                error: t.errorImage
                            }
                        })])]), t._v(" "), n("div", {
                            staticClass: "matches__middle matches__middle--center"
                        }, [n("span", [t._v("VS")])]), t._v(" "), n("div", {
                            staticClass: "matches__middle matches__middle--right"
                        }, [n("div", {
                            staticClass: "matches__logo img-position img-position--contain"
                        }, [n("img", {
                            staticClass: "swiper-lazy",
                            attrs: {
                                "data-src": i.teams[1].flag_thumbnail,
                                alt: i.teams[1].name
                            },
                            on: {
                                error: t.errorImage
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "matches__name"
                        }, [n("span", [t._v(t._s(i.teams[1].name))])])])]) : t._e()]), t._v(" "), n("div", {
                            staticClass: "matches__row matches__row--bottom"
                        }, [n("div", {
                            staticClass: "matches__ratio matches__ratio--left"
                        }, [n("span", {
                            staticClass: "matches__ratio__left"
                        }, [t._v(t._s(i.hTeam.rate))]), t._v(" "), n("span", {
                            staticClass: "matches__ratio__right"
                        }, [t._v(t._s(i.hTeam.odds))])]), t._v(" "), n("div", {
                            staticClass: "matches__ratio matches__ratio--center"
                        }, [n("a", {
                            staticClass: "matches__btn",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.gotoMatch(i.event_id, i.league_id)
                                }
                            }
                        }, [t._v("cược ngay")])]), t._v(" "), n("div", {
                            staticClass: "matches__ratio matches__ratio--right"
                        }, [n("span", {
                            staticClass: "matches__ratio__left"
                        }, [t._v(t._s(i.aTeam.rate))]), t._v(" "), n("span", {
                            staticClass: "matches__ratio__right"
                        }, [t._v(t._s(i.aTeam.odds))])])]), t._v(" "), n("a", {
                            staticClass: "position-cover",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.gotoMatch(i.event_id, i.league_id)
                                }
                            }
                        })])])
                    })), 0), t._v(" "), n("div", {
                        staticClass: "swiper-button-prev matches__prev",
                        attrs: {
                            id: "matches__prev"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "swiper-button-next matches__next",
                        attrs: {
                            id: "matches__next"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "matches__container swiper-container matches__mobile",
                        attrs: {
                            id: "matchesSliderMobile"
                        }
                    }, [n("div", {
                        staticClass: "swiper-wrapper matches__swipper"
                    }, t._l(t.items, (function(i) {
                        return n("div", {
                            key: i.id,
                            staticClass: "matches__item swiper-slide"
                        }, [n("div", {
                            staticClass: "matches__col matches__col--game"
                        }, [n("div", {
                            staticClass: "matches__game row"
                        }, [n("div", {
                            staticClass: "matches__logo col-3 img-position img-position--contain"
                        }, [n("img", {
                            staticClass: "swiper-lazy",
                            attrs: {
                                "data-src": i.teams[0].flag_thumbnail,
                                alt: i.teams[0].name
                            },
                            on: {
                                error: t.errorImage
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "matches__name col-6"
                        }, [n("span", [t._v(t._s(i.teams[0].name))])]), t._v(" "), n("div", {
                            staticClass: "matches__ratio matches__ratio--left col-3"
                        }, [n("span", {
                            staticClass: "matches__ratio__left"
                        }, [t._v(t._s(i.hTeam.rate))]), t._v(" "), n("span", {
                            staticClass: "matches__ratio__right"
                        }, [t._v(t._s(i.hTeam.odds))])])]), t._v(" "), n("div", {
                            staticClass: "matches__game matches__game--none"
                        }, [n("span", [t._v("VS")])]), t._v(" "), n("div", {
                            staticClass: "matches__game row"
                        }, [n("div", {
                            staticClass: "matches__logo col-3 img-position img-position--contain"
                        }, [n("img", {
                            staticClass: "swiper-lazy",
                            attrs: {
                                "data-src": i.teams[1].flag_thumbnail,
                                alt: i.teams[1].name
                            },
                            on: {
                                error: t.errorImage
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "matches__name col-6"
                        }, [n("span", [t._v(t._s(i.teams[1].name))])]), t._v(" "), n("div", {
                            staticClass: "matches__ratio matches__ratio--left col-3"
                        }, [n("span", {
                            staticClass: "matches__ratio__left"
                        }, [t._v(t._s(i.aTeam.rate))]), t._v(" "), n("span", {
                            staticClass: "matches__ratio__right"
                        }, [t._v(t._s(i.aTeam.odds))])])])]), t._v(" "), n("div", {
                            staticClass: "matches__col matches__col--info"
                        }, [n("div", {
                            staticClass: "row"
                        }, [n("div", {
                            staticClass: "col-7"
                        }, [n("div", {
                            staticClass: "matches__times"
                        }, [n("span", [t._v(t._s(i.text_time))])]), t._v(" "), n("div", {
                            staticClass: "matches__league"
                        }, [n("span", [t._v(t._s(i.league_name_text))])])]), t._v(" "), n("div", {
                            staticClass: "col-5 matches__info-button"
                        }, [n("a", {
                            staticClass: "button",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.gotoMatch(i.event_id, i.league_id)
                                }
                            }
                        }, [t._v("cược ngay")]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                            attrs: {
                                src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png"),
                                alt: "background"
                            }
                        }) : t._e()])])]), t._v(" "), n("a", {
                            staticClass: "position-cover",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.gotoMatch(i.event_id, i.league_id)
                                }
                            }
                        })])
                    })), 0), t._v(" "), n("div", {
                        staticClass: "matches__pagination swiper-pagination"
                    })])])])], 1) : t._e()
                }), [], !1, null, null, null).exports,
                k = n(282),
                w = n(430),
                T = n.n(w),
                S = n(213),
                x = {
                    components: {
                        AnimatedNumber: T.a
                    },
                    data: function() {
                        return {
                            slotsTotal: "assets/img/nohu/feature-slots.png",
                            animationCoin: "assets/img/nohu/feature-slots-coin.png",
                            slotsBox: "assets/img/nohu/slots-box.svg",
                            slotsBoxMB: "assets/img/nohu/slots-box-mb.svg",
                            slotsCoinLeft: "assets/img/nohu/coin-left.png",
                            slotsCoinRight: "assets/img/nohu/coin-left.png",
                            topWinner: !1,
                            totalJackpot: 0,
                            items: [{
                                reward: "2.000.000.000",
                                bannerRewardSrc: "assets/img/nohu/nohu_thanlucbongtoi-1.png",
                                loginRequired: !1,
                                data: {
                                    display_types: [this.$GAME_DISPLAY_TYPE.SLOT],
                                    type: this.$GAME_TYPE.ASIA,
                                    partner_provider: this.$PARTNER.TECHPLAY,
                                    partner_game_id: "kts9989"
                                }
                            }, {
                                reward: "2.000.000.000",
                                bannerRewardSrc: "assets/img/nohu/nohu_thangbom.png",
                                loginRequired: !1,
                                data: {
                                    display_types: [this.$GAME_DISPLAY_TYPE.SLOT],
                                    type: this.$GAME_TYPE.ASIA,
                                    partner_provider: this.$PARTNER.TECHPLAY,
                                    partner_game_id: "kts9997"
                                }
                            }, {
                                reward: "2.000.000.000",
                                bannerRewardSrc: "assets/img/nohu/nohu_witcher.png",
                                loginRequired: !1,
                                data: {
                                    display_types: [this.$GAME_DISPLAY_TYPE.SLOT],
                                    type: this.$GAME_TYPE.ASIA,
                                    partner_provider: this.$PARTNER.TECHPLAY,
                                    partner_game_id: "kts9985"
                                }
                            }, {
                                reward: "2.000.000.000",
                                bannerRewardSrc: "assets/img/nohu/nohu_qatar.png",
                                loginRequired: !1,
                                data: {
                                    display_types: [this.$GAME_DISPLAY_TYPE.SLOT],
                                    type: this.$GAME_TYPE.ASIA,
                                    partner_provider: this.$PARTNER.TECHPLAY,
                                    partner_game_id: "kts9982"
                                }
                            }, {
                                reward: "2.000.000.000",
                                bannerRewardSrc: "assets/img/nohu/nohu_madao-1.png",
                                loginRequired: !1,
                                data: {
                                    display_types: [this.$GAME_DISPLAY_TYPE.SLOT],
                                    type: this.$GAME_TYPE.ASIA,
                                    partner_provider: this.$PARTNER.TECHPLAY,
                                    partner_game_id: "kts9984"
                                }
                            }, {
                                reward: "2.000.000.000",
                                bannerRewardSrc: "assets/img/nohu/nohu_cleopatra.png",
                                loginRequired: !1,
                                data: {
                                    display_types: [this.$GAME_DISPLAY_TYPE.SLOT],
                                    type: this.$GAME_TYPE.ASIA,
                                    partner_provider: this.$PARTNER.TECHPLAY,
                                    partner_game_id: "kts9988"
                                }
                            }]
                        }
                    },
                    computed: {
                        jackpots: function() {
                            return this.$store.state.jackpot || {}
                        }
                    },
                    watch: {
                        jackpots: function() {
                            this.getSumJackpot()
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.getSumJackpot(), this.formatItems(), this.$nextTick((function() {
                            t.initSlider()
                        }))
                    },
                    methods: {
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/").concat(t)
                        },
                        jackpot: function(t) {
                            return this.$store.state.jackpot ? this.$store.state.jackpot[t] : 0
                        },
                        formatToPrice: function(t) {
                            return "$".concat(Object(S.c)(t.toFixed(0)))
                        },
                        formatItems: function() {
                            this.topWinner ? this.items = this.items.splice(0, 6) : this.items = this.items.splice(0, 10)
                        },
                        getUrlDevice: function(t) {
                            var e = this.getFileExtension(t),
                                n = this.getUrlNotExtension(t);
                            return this.$device.isDesktopOrTablet ? "".concat(n, ".").concat(e) : "".concat(n, ".480w.").concat(e)
                        },
                        getFileExtension: function(t) {
                            if (void 0 !== t && t) {
                                var e = t.lastIndexOf("/");
                                return -1 !== e && (t = t.substring(e + 1)), -1 !== (e = t.indexOf("?")) && (t = t.substring(0, e)), -1 !== (e = t.indexOf("#")) && (t = t.substring(0, e)), -1 !== (e = t.lastIndexOf(".")) ? t.substring(e + 1) : ""
                            }
                            return ""
                        },
                        getUrlNotExtension: function(t) {
                            if (void 0 !== t && t) {
                                var e = t.lastIndexOf(".");
                                return -1 !== e ? t.substring(0, e) : ""
                            }
                            return ""
                        },
                        getSumJackpot: function() {
                            var t = [],
                                e = this.jackpots;
                            this.items.forEach((function(n) {
                                e[n.data.partner_game_id] && t.push(e[n.data.partner_game_id])
                            })), this.totalJackpot = t.length ? t.reduce((function(t, e) {
                                return t + e
                            }), 0) : 0
                        },
                        initSlider: function() {
                            this.$swiper("#slotHomeSlider", {
                                slidesPerView: "auto",
                                lazy: {
                                    loadPrevNext: !0,
                                    loadPrevNextAmount: 2
                                },
                                loop: !1,
                                autoplay: {
                                    delay: 5e3
                                }
                            })
                        }
                    }
                },
                $ = Object(m.a)(x, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "section section--slots img-block"
                    }, [n("b-container", [n("div", {
                        staticClass: "section-title"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("nổ hũ kim cương")])]), t._v(" "), n("div", {
                        staticClass: "slots"
                    }, [n("div", {
                        staticClass: "slots__wrap-desktop slots__wrap slots__new"
                    }, [n("div", {
                        staticClass: "slots-total"
                    }, [n("div", {
                        staticClass: "thumb"
                    }, [n("figure", [n("r-img", {
                        attrs: {
                            type: "picture",
                            static: t.getUrlStatic(t.slotsTotal),
                            alt: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "animation-coin show-desktop",
                        attrs: {
                            src: t.getUrlStatic(t.animationCoin),
                            alt: "background"
                        }
                    })], 1)]), t._v(" "), n("div", {
                        staticClass: "total-amount"
                    }, [n("img", {
                        staticClass: "background",
                        attrs: {
                            src: t.getUrlStatic(t.slotsBox),
                            alt: "background"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "background mobile",
                        attrs: {
                            src: t.getUrlStatic(t.slotsBoxMB),
                            alt: "background"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "amount"
                    }, [n("img", {
                        staticClass: "coin",
                        attrs: {
                            src: t.getUrlStatic(t.slotsCoinLeft),
                            alt: "coin"
                        }
                    }), t._v(" "), n("animated-number", {
                        attrs: {
                            value: t.totalJackpot,
                            formatValue: t.formatToPrice,
                            duration: 1e3
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "coin",
                        attrs: {
                            src: t.getUrlStatic(t.slotsCoinRight),
                            alt: "coin"
                        }
                    })], 1)]), t._v(" "), n("div", {
                        staticClass: "slots__link show-desktop"
                    }, [n("n-link", {
                        staticClass: "button",
                        attrs: {
                            to: "/games?type=slots"
                        }
                    }, [t._v("Săn hũ")]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png")
                        }
                    }) : t._e()], 1)]), t._v(" "), n("div", {
                        staticClass: "slots-list"
                    }, t._l(t.items, (function(i, e) {
                        return n("div", {
                            key: e,
                            staticClass: "slots-item"
                        }, [n("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.$playGame(i.data)
                                }
                            }
                        }, [n("figure", {
                            directives: [{
                                name: "lazy-container",
                                rawName: "v-lazy-container",
                                value: {
                                    selector: "img",
                                    error: "/assets/img/nohu/nohu_lazy.png",
                                    loading: "/assets/img/nohu/nohu_lazy.png"
                                },
                                expression: "{ selector: 'img', error: '/assets/img/nohu/nohu_lazy.png', loading: '/assets/img/nohu/nohu_lazy.png' }"
                            }]
                        }, [n("img", {
                            attrs: {
                                "data-src": t.getUrlStatic(i.bannerRewardSrc),
                                alt: ""
                            }
                        })]), t._v(" "), n("span", {
                            staticClass: "button"
                        }, [t._v("CHƠI NGAY")]), t._v(" "), n("p", [n("animated-number", {
                            attrs: {
                                value: t.jackpot(i.data.partner_game_id),
                                formatValue: t.formatToPrice,
                                duration: 1e3
                            }
                        })], 1)])])
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "slots-mobile"
                    }, [n("div", {
                        staticClass: "slots-home__wrap swiper-container",
                        attrs: {
                            id: "slotHomeSlider"
                        }
                    }, [n("div", {
                        staticClass: "swiper-wrapper"
                    }, t._l(t.items, (function(i, e) {
                        return n("div", {
                            key: e,
                            staticClass: "swiper-slide slots-item"
                        }, [n("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.$playGame(i.data)
                                }
                            }
                        }, [n("figure", {
                            directives: [{
                                name: "lazy-container",
                                rawName: "v-lazy-container",
                                value: {
                                    selector: "img",
                                    error: "/assets/img/nohu/nohu_lazy.png",
                                    loading: "/assets/img/nohu/nohu_lazy.png"
                                },
                                expression: "{ selector: 'img', error: '/assets/img/nohu/nohu_lazy.png', loading: '/assets/img/nohu/nohu_lazy.png' }"
                            }]
                        }, [n("img", {
                            attrs: {
                                "data-src": t.getUrlStatic(i.bannerRewardSrc),
                                alt: ""
                            }
                        })]), t._v(" "), n("span", {
                            staticClass: "button"
                        }, [t._v("CHƠI NGAY")]), t._v(" "), n("p", [n("animated-number", {
                            attrs: {
                                value: t.jackpot(i.data.partner_game_id),
                                formatValue: t.formatToPrice,
                                duration: 1e3
                            }
                        })], 1)])])
                    })), 0)])])]), t._v(" "), n("div", {
                        staticClass: "slots__link show-mobile"
                    }, [n("n-link", {
                        staticClass: "button",
                        attrs: {
                            to: "/games?type=slots",
                            title: "thêm"
                        }
                    }, [t._v("Xem thêm")]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png")
                        }
                    }) : t._e()], 1)])], 1)
                }), [], !1, null, null, null).exports,
                E = {
                    name: "newsGridItem",
                    inject: ["getThumbnail"],
                    props: ["item"]
                },
                A = Object(m.a)(E, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "news-grid__wrap"
                    }, [n("div", {
                        staticClass: "news-headline"
                    }, [n("span", [t._v(t._s(t.item.name))])]), t._v(" "), t.item.posts && t.item.posts.length ? n("div", {
                        staticClass: "news-grid__grid"
                    }, [n("div", {
                        staticClass: "news-grid__featured hover-shine"
                    }, [n("div", {
                        staticClass: "news-grid__thumb news-grid__thumb--featured"
                    }, [n("d-img", {
                        attrs: {
                            src: t.getThumbnail(t.item.posts[0]),
                            alt: ""
                        }
                    }), t._v(" "), n("n-link", {
                        staticClass: "news-grid__cover",
                        attrs: {
                            to: "/tin-tuc/" + t.item.posts[0].alias
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "news-grid__title news-grid__title--featured"
                    }, [n("div", {
                        staticClass: "news-grid__flex"
                    }, [n("n-link", {
                        staticClass: "news-grid__link news-grid__link--featured",
                        attrs: {
                            to: "/tin-tuc/" + t.item.posts[0].alias
                        }
                    }, [t._v("\n                        " + t._s(t.item.posts[0].title) + "\n                    ")])], 1)])]), t._v(" "), t._l(t.item.posts.slice(1, 5), (function(e) {
                        return n("div", {
                            key: e.id,
                            staticClass: "news-grid__item"
                        }, [n("div", {
                            staticClass: "news-grid__thumb hover-shine"
                        }, [n("n-link", {
                            staticClass: "news-grid__link",
                            attrs: {
                                to: "/tin-tuc/" + e.alias
                            }
                        }, [n("d-img", {
                            attrs: {
                                src: t.getThumbnail(e),
                                alt: ""
                            }
                        })], 1)], 1), t._v(" "), n("div", {
                            staticClass: "news-grid__title"
                        }, [n("div", {
                            staticClass: "news-grid__flex"
                        }, [n("n-link", {
                            staticClass: "news-grid__link",
                            attrs: {
                                to: "/tin-tuc/" + e.alias
                            }
                        }, [t._v("\n                        " + t._s(e.title) + "\n                    ")])], 1)])])
                    }))], 2) : t._e()])
                }), [], !1, null, null, null).exports,
                I = {
                    name: "tabsNews",
                    components: {
                        newsGridItem: A
                    },
                    props: ["categories"],
                    data: function() {
                        return {
                            activeTab: 0
                        }
                    },
                    methods: {
                        setActive: function(t) {
                            this.activeTab = t
                        }
                    },
                    computed: {
                        isShow: function() {
                            return this.categories.filter((function(t) {
                                return "soi-cau-mien-nam" === t.alias || "soi-cau-mien-bac" === t.alias || "soi-keo-bong-da" === t.alias
                            }))
                        }
                    }
                },
                P = {
                    name: "news",
                    props: ["categories"],
                    provide: function() {
                        return {
                            getThumbnail: this.getThumbnail
                        }
                    },
                    data: function() {
                        return {}
                    },
                    components: {
                        tabsNews: Object(m.a)(I, (function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("b-tabs", {
                                ref: "tabContainer",
                                staticClass: "tabContainer",
                                attrs: {
                                    lazy: "",
                                    "nav-wrapper-class": "tab-head"
                                }
                            }, t._l(t.isShow, (function(e, r) {
                                return n("b-tab", {
                                    key: r,
                                    staticClass: "test",
                                    attrs: {
                                        active: r === t.activeTab
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.preventDefault(), t.setActive(r)
                                        }
                                    },
                                    scopedSlots: t._u([{
                                        key: "title",
                                        fn: function() {
                                            return [n("div", {
                                                staticClass: "tabs__title"
                                            }, [n("span", {
                                                staticClass: "text"
                                            }, [t._v(t._s(e.name))])])]
                                        },
                                        proxy: !0
                                    }], null, !0)
                                }, [t._v(" "), n("div", {
                                    staticClass: "tabs__content"
                                }, [n("newsGridItem", {
                                    attrs: {
                                        item: e
                                    }
                                })], 1)])
                            })), 1)
                        }), [], !1, null, null, null).exports,
                        newsGridItem: A
                    },
                    methods: {
                        getThumbnail: function(t) {
                            var e = t.thumbnail,
                                n = this.$store.state;
                            return "".concat(n.mapDomain.BO_IMAGE_URL, "/").concat(e)
                        },
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/").concat(t)
                        }
                    },
                    computed: {
                        isShow: function() {
                            return this.categories.filter((function(t) {
                                return "soi-cau-mien-nam" === t.alias || "soi-cau-mien-bac" === t.alias || "soi-keo-bong-da" === t.alias
                            }))
                        }
                    }
                },
                L = Object(m.a)(P, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "section section--news"
                    }, [n("b-container", [n("div", {
                        staticClass: "section-title"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("FCB8 NEWS")])]), t._v(" "), n("div", {
                        staticClass: "news-grid"
                    }, [n("tabsNews", {
                        staticClass: "news-grid__mobile",
                        attrs: {
                            categories: t.categories
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "news-grid__desktop"
                    }, [n("div", {
                        staticClass: "row"
                    }, t._l(t.isShow, (function(t) {
                        return n("div", {
                            key: t.id,
                            staticClass: "col-lg-4 col-md-4 col-sm-12 col-xs-12"
                        }, [n("newsGridItem", {
                            attrs: {
                                item: t
                            }
                        })], 1)
                    })), 0)])], 1), t._v(" "), n("div", {
                        staticClass: "section--news__link"
                    }, [n("n-link", {
                        staticClass: "button",
                        attrs: {
                            to: "/tin-tuc"
                        }
                    }, [t._v("Xem thêm")]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png"),
                            alt: "background"
                        }
                    }) : t._e()], 1)])], 1)
                }), [], !1, null, null, null).exports,
                O = {
                    data: function() {
                        return {
                            HomePromotion: [{
                                thumb: "promotion-100.jpg",
                                alt: "khuyến mãi 100%",
                                data: {
                                    link_type: this.$LINK_TYPE.PAGE,
                                    link: "/khuyen-mai?type=promotion100",
                                    linkMB: "/khuyen-mai/thuong-nap-lan-dau-100-tien-nap"
                                }
                            }, {
                                thumb: "promotion-30.jpg",
                                alt: "khuyến mãi 30%",
                                data: {
                                    link_type: this.$LINK_TYPE.PAGE,
                                    link: "/khuyen-mai?type=promotion30",
                                    linkMB: "/khuyen-mai/thuong-nap-30-cho-lan-nap-thu-hai"
                                }
                            }, {
                                thumb: "promotion-50.jpg",
                                alt: "khuyến mãi 50K",
                                data: {
                                    link_type: this.$LINK_TYPE.PAGE,
                                    link: "/khuyen-mai?type=promotion50",
                                    linkMB: "/khuyen-mai/tang-50k-khi-dang-ky-qua-dien-thoai"
                                }
                            }, {
                                thumb: "promotion-return.jpg",
                                alt: "hoàn trả hằng ngày",
                                data: {
                                    link_type: this.$LINK_TYPE.PAGE,
                                    link: "/khuyen-mai?type=promotion15",
                                    linkMB: "/khuyen-mai/hoan-tra-cuoc-15"
                                }
                            }]
                        }
                    },
                    methods: {
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/assets/img/home-promotion/").concat(t)
                        },
                        initSlider: function() {
                            var t = this;
                            this.$swiper("#homePromotionSlide", {
                                slidesPerView: 1,
                                loop: !0,
                                allowTouchMove: !1,
                                lazy: {
                                    loadPrevNext: !0,
                                    loadPrevNextAmount: 1
                                },
                                autoplay: {
                                    delay: 2500
                                },
                                pagination: {
                                    el: ".pagination--home-promotion",
                                    clickable: !0
                                },
                                on: {
                                    click: function(e) {
                                        var n = e.target.closest(".live-casino__link").dataset.click;
                                        if (void 0 !== n) {
                                            var link = JSON.parse(n);
                                            t.moveTo(link)
                                        }
                                    }
                                },
                                breakpoints: {
                                    0: {
                                        slidesPerView: "auto",
                                        spaceBetween: 10
                                    },
                                    992: {
                                        slidesPerView: 1
                                    }
                                }
                            })
                        },
                        moveTo: function(t) {
                            this.$isMobile() ? this.$router.push(t.linkMB) : this.$router.push(t.link)
                        }
                    },
                    computed: {
                        device: function() {
                            return this.$store.state.device
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.initSlider()
                        }))
                    }
                },
                N = Object(m.a)(O, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "section section--promotion"
                    }, [n("b-container", [n("div", {
                        staticClass: "home-promotion"
                    }, [n("div", {
                        staticClass: "swiper-container",
                        attrs: {
                            id: "homePromotionSlide"
                        }
                    }, [n("div", {
                        staticClass: "swiper-wrapper"
                    }, t._l(t.HomePromotion, (function(e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "swiper-slide"
                        }, [t.$isMobile() ? [n("div", {
                            staticClass: "home-promotion__item"
                        }, [n("n-link", {
                            staticClass: "live-casino__link mo",
                            attrs: {
                                to: e.data.linkMB,
                                "data-click": JSON.stringify(e.data)
                            }
                        }, [n("r-img", {
                            attrs: {
                                type: "picture",
                                static: t.getUrlStatic(e.thumb),
                                alt: e.alt
                            }
                        })], 1)], 1)] : [n("div", {
                            staticClass: "home-promotion__item"
                        }, [n("n-link", {
                            staticClass: "live-casino__link",
                            attrs: {
                                to: e.data.link,
                                "data-click": JSON.stringify(e.data)
                            }
                        }, [n("r-img", {
                            attrs: {
                                type: "picture",
                                static: t.getUrlStatic(e.thumb),
                                alt: e.alt
                            }
                        })], 1)], 1)]], 2)
                    })), 0), t._v(" "), n("div", {
                        staticClass: "swiper-pagination pagination--home-promotion"
                    })])])])], 1)
                }), [], !1, null, null, null).exports,
                M = n(444),
                j = n(441).a,
                R = Object(m.a)(j, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "section section--login-mobile"
                    }, [n("div", {
                        staticClass: "login-mobile"
                    }, [n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "login-mobile__col col-6"
                    }, [n("a", {
                        staticClass: "button",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.openRegisterForm.apply(null, arguments)
                            }
                        }
                    }, [n("svg", {
                        attrs: {
                            width: "13",
                            height: "13",
                            viewBox: "0 0 13 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M12.7824 5.85714V7.57143C12.7824 7.80952 12.699 8.0119 12.5324 8.17857C12.3657 8.34524 12.1633 8.42857 11.9252 8.42857H8.21094V12.1429C8.21094 12.381 8.1276 12.5833 7.96094 12.75C7.79427 12.9167 7.59189 13 7.3538 13H5.63951C5.40141 13 5.19903 12.9167 5.03237 12.75C4.8657 12.5833 4.78237 12.381 4.78237 12.1429V8.42857H1.06808C0.829985 8.42857 0.627604 8.34524 0.460938 8.17857C0.294271 8.0119 0.210938 7.80952 0.210938 7.57143V5.85714C0.210938 5.61905 0.294271 5.41667 0.460938 5.25C0.627604 5.08333 0.829985 5 1.06808 5H4.78237V1.28571C4.78237 1.04762 4.8657 0.845237 5.03237 0.678571C5.19903 0.511904 5.40141 0.428571 5.63951 0.428571H7.3538C7.59189 0.428571 7.79427 0.511904 7.96094 0.678571C8.1276 0.845237 8.21094 1.04762 8.21094 1.28571V5H11.9252C12.1633 5 12.3657 5.08333 12.5324 5.25C12.699 5.41667 12.7824 5.61905 12.7824 5.85714Z",
                            fill: "#F7F1FF"
                        }
                    })]), t._v(" "), n("span", [t._v("Đăng KÝ")])])]), t._v(" "), n("div", {
                        staticClass: "login-mobile__col col-6"
                    }, [n("a", {
                        staticClass: "button button--blue",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.openLoginForm.apply(null, arguments)
                            }
                        }
                    }, [n("span", [t._v("Đăng NHẬP")])])])])])])
                }), [], !1, null, null, null).exports,
                D = {
                    mounted: function() {
                        Object(S.b)("/assets/js/event/noel/particles.min.js", (function() {
                            window.particlesJS("snow", {
                                particles: {
                                    number: {
                                        value: 25,
                                        density: {
                                            enable: !0,
                                            value_area: 600
                                        }
                                    },
                                    color: {
                                        value: "#fff"
                                    },
                                    opacity: {
                                        value: .7,
                                        random: !1,
                                        anim: {
                                            enable: !1
                                        }
                                    },
                                    size: {
                                        value: 5,
                                        random: !0,
                                        anim: {
                                            enable: !1
                                        }
                                    },
                                    line_linked: {
                                        enable: !1
                                    },
                                    move: {
                                        enable: !0,
                                        speed: 5,
                                        direction: "bottom",
                                        random: !0,
                                        straight: !1,
                                        out_mode: "out",
                                        bounce: !1,
                                        attract: {
                                            enable: !0,
                                            rotateX: 300,
                                            rotateY: 1200
                                        }
                                    }
                                },
                                interactivity: {
                                    detect_on: "canvas",
                                    events: {
                                        onhover: {
                                            enable: !0,
                                            mode: "bubble"
                                        },
                                        onclick: {
                                            enable: !0,
                                            mode: "repulse"
                                        },
                                        resize: !0
                                    },
                                    modes: {
                                        grab: {
                                            distance: 400,
                                            line_linked: {
                                                opacity: .5
                                            }
                                        },
                                        bubble: {
                                            distance: 400,
                                            size: 4,
                                            duration: .3,
                                            opacity: 1,
                                            speed: 3
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: .4
                                        },
                                        push: {
                                            particles_nb: 4
                                        },
                                        remove: {
                                            particles_nb: 2
                                        }
                                    }
                                },
                                retina_detect: !0
                            })
                        }))
                    }
                },
                U = Object(m.a)(D, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("div", {
                        attrs: {
                            id: "snow"
                        }
                    })
                }), [], !1, null, null, null).exports;

            function Y(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function G(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Y(Object(source), !0).forEach((function(e) {
                        Object(r.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Y(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var z = {
                    props: ["tabIndex"],
                    components: {
                        tab: l.a,
                        loginMobile: R,
                        sliderSection: f,
                        hotmatchSection: C,
                        gameSection: k.a,
                        gamehotSection: h,
                        slotSection: $,
                        liveCasino: d,
                        newSection: L,
                        Promotion: N,
                        LuckyNumber: M.a,
                        snowEvent: U
                    },
                    data: function() {
                        return {
                            hotmatchData: [],
                            categoriesData: [],
                            livesCasinoData: [],
                            isLoading: !1
                        }
                    },
                    computed: {
                        domainChangeModal: function() {
                            return "0"
                        },
                        warningModal: function() {
                            return "0"
                        }
                    },
                    methods: {
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/").concat(t)
                        },
                        getHotMatch: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.$hotmatchApi, e.prev = 1, e.next = 4, n.index();
                                        case 4:
                                            "OK" === (r = e.sent).status && (t.hotmatchData = r.data.slice(0, 5)), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), console.log(e.t0.message);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })))()
                        },
                        getByCatIds: function(t) {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var r;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, e.$postApi.getByCatIds(t, {
                                                limit: 5,
                                                offset: 0
                                            });
                                        case 3:
                                            return r = n.sent, n.abrupt("return", r.data && r.data.posts || []);
                                        case 7:
                                            n.prev = 7, n.t0 = n.catch(0), console.log(n.t0.message);
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        handleGetNews: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n, r, l, c;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, t.$postApi.getCategories();
                                        case 3:
                                            return n = e.sent, r = n.categories, l = {}, e.next = 8, Promise.all(r && r.map(function() {
                                                var e = Object(o.a)(regeneratorRuntime.mark((function e(n) {
                                                    var r, c;
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return r = n.id, e.next = 3, t.getByCatIds(r);
                                                            case 3:
                                                                if (!((c = e.sent) && c.length > 4)) {
                                                                    e.next = 6;
                                                                    break
                                                                }
                                                                return e.abrupt("return", G({
                                                                    posts: c
                                                                }, n));
                                                            case 6:
                                                                if (!(n.subCats && n.subCats.length > 0)) {
                                                                    e.next = 10;
                                                                    break
                                                                }
                                                                return e.next = 9, Promise.all(n.subCats.map(function() {
                                                                    var e = Object(o.a)(regeneratorRuntime.mark((function e(n) {
                                                                        var r, o;
                                                                        return regeneratorRuntime.wrap((function(e) {
                                                                            for (;;) switch (e.prev = e.next) {
                                                                                case 0:
                                                                                    return r = n.id, e.next = 3, t.getByCatIds(r);
                                                                                case 3:
                                                                                    if (!((o = e.sent) && o.length > 4)) {
                                                                                        e.next = 6;
                                                                                        break
                                                                                    }
                                                                                    return e.abrupt("return", G({
                                                                                        posts: o
                                                                                    }, n));
                                                                                case 6:
                                                                                case "end":
                                                                                    return e.stop()
                                                                            }
                                                                        }), e)
                                                                    })));
                                                                    return function(t) {
                                                                        return e.apply(this, arguments)
                                                                    }
                                                                }()));
                                                            case 9:
                                                                l = e.sent;
                                                            case 10:
                                                                return e.abrupt("return", {});
                                                            case 11:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()));
                                        case 8:
                                            c = (c = e.sent).concat(l), t.categoriesData = c.filter((function(t) {
                                                return t && t.id
                                            })), e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(0), console.log(e.t0.message);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 13]
                                ])
                            })))()
                        },
                        handleGetLivesCasino: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.isLoading = !0, e.next = 4, t.$casinoApi.index();
                                        case 4:
                                            "OK" === (n = e.sent).status && (t.isLoading = !1, t.livesCasinoData = n.data), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), t.isLoading = !1, console.log(e.t0.message);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        showDomainChangeModal: function() {
                            this.$showPopupById("domainChangeModal")
                        },
                        showWarningModal: function() {
                            this.$showPopupById("warningModal")
                        }
                    },
                    created: function() {
                        this.getHotMatch(), this.handleGetLivesCasino(), this.handleGetNews()
                    },
                    mounted: function() {
                        var t = this,
                            e = this.$cookies.get("warning");
                        this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function e() {
                            var n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (n = t.$store).dispatch("getJackpot"), t.jackPotInterval = setInterval(Object(o.a)(regeneratorRuntime.mark((function t() {
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        n.dispatch("getJackpot");
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))), 5e3);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), "1" === this.domainChangeModal && this.$store.state.domainChangeShow && setTimeout((function() {
                            t.showDomainChangeModal()
                        }), 2e3), "1" === this.warningModal && void 0 === e && setTimeout((function() {
                            t.showWarningModal()
                        }), 2e3)
                    },
                    destroyed: function() {
                        clearInterval(this.jackPotInterval)
                    }
                },
                H = Object(m.a)(z, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("tab", {
                        attrs: {
                            index: t.tabIndex
                        }
                    }, [n("slider-section"), t._v(" "), t.$store.state.user ? t._e() : n("login-mobile"), t._v(" "), n("hotmatch-section", {
                        attrs: {
                            items: t.hotmatchData
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "bg-hotgame"
                    }, [n("gamehot-section"), t._v(" "), t.isLoading ? t._e() : n("game-section", {
                        attrs: {
                            lazy: "true"
                        }
                    })], 1), t._v(" "), n("slot-section"), t._v(" "), t.livesCasinoData.length ? n("liveCasino", {
                        attrs: {
                            items: t.livesCasinoData
                        }
                    }) : t._e(), t._v(" "), n("Promotion"), t._v(" "), t.categoriesData.length ? n("new-section", {
                        attrs: {
                            categories: t.categoriesData
                        }
                    }) : t._e(), t._v(" "), n("div", {
                        staticClass: "bg-lode",
                        class: {
                            marginBottomLode: t.$isEnableThemeNoel()
                        }
                    }, [n("b-container", [n("LuckyNumber")], 1)], 1), t._v(" "), t.$isEnableThemeNoel() ? n("snowEvent") : t._e()], 1)
                }), [], !1, null, null, null).exports,
                F = {
                    extends: base.a,
                    components: {
                        index: H
                    },
                    data: function() {
                        return {
                            tabIndex: this.$route.path
                        }
                    }
                },
                B = Object(m.a)(F, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)(this.component, {
                        tag: "component",
                        attrs: {
                            tabIndex: this.tabIndex
                        }
                    })
                }), [], !1, null, null, null);
            e.default = B.exports
        }
    }
]);