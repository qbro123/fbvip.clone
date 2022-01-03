(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        107: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return Pe
            })), n.d(e, "a", (function() {
                return S
            }));
            n(21), n(15), n(19), n(18), n(20), n(16), n(39), n(51);
            var r = n(28),
                o = n(3),
                c = (n(45), n(12)),
                l = n(287),
                m = n(233),
                h = n.n(m),
                d = n(153),
                f = n.n(d),
                v = n(175),
                _ = n(27);
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual", window.addEventListener("beforeunload", (function() {
                window.history.scrollRestoration = "auto"
            })), window.addEventListener("load", (function() {
                window.history.scrollRestoration = "manual"
            })));
            var w = function() {},
                y = v.a.prototype.push;
            v.a.prototype.push = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return y.call(this, t, e, n)
            }, c.default.use(v.a);
            var C = {
                mode: "history",
                base: decodeURI("/"),
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(t, e, n) {
                    var r = !1,
                        o = Object(_.g)(t);
                    (o.length < 2 && o.every((function(t) {
                        return !1 !== t.options.scrollToTop
                    })) || o.some((function(t) {
                        return t.options.scrollToTop
                    }))) && (r = {
                        x: 0,
                        y: 0
                    }), n && (r = n);
                    var c = window.$nuxt;
                    return t.path === e.path && t.hash !== e.hash && c.$nextTick((function() {
                        return c.$emit("triggerScroll")
                    })), new Promise((function(e) {
                        c.$once("triggerScroll", (function() {
                            if (t.hash) {
                                var n = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    document.querySelector(n) && (r = {
                                        selector: n
                                    })
                                } catch (t) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            e(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/404",
                    component: function() {
                        return Object(_.m)(n.e(3).then(n.bind(null, 484)))
                    },
                    name: "404"
                }, {
                    path: "/asport",
                    component: function() {
                        return Object(_.m)(n.e(5).then(n.bind(null, 509)))
                    },
                    children: [{
                        path: "",
                        component: function() {
                            return Object(_.m)(n.e(6).then(n.bind(null, 510)))
                        },
                        name: "asport"
                    }, {
                        path: "match",
                        component: function() {
                            return Object(_.m)(n.e(7).then(n.bind(null, 485)))
                        },
                        name: "asport-match"
                    }]
                }, {
                    path: "/casino",
                    component: function() {
                        return Object(_.m)(n.e(8).then(n.bind(null, 511)))
                    },
                    name: "casino"
                }, {
                    path: "/esport",
                    component: function() {
                        return Object(_.m)(n.e(9).then(n.bind(null, 486)))
                    },
                    name: "esport"
                }, {
                    path: "/esports",
                    component: function() {
                        return Object(_.m)(n.e(10).then(n.bind(null, 487)))
                    },
                    name: "esports"
                }, {
                    path: "/game",
                    component: function() {
                        return Object(_.m)(n.e(12).then(n.bind(null, 512)))
                    },
                    name: "game"
                }, {
                    path: "/games",
                    component: function() {
                        return Object(_.m)(n.e(13).then(n.bind(null, 479)))
                    },
                    name: "games"
                }, {
                    path: "/huong-dan",
                    component: function() {
                        return Object(_.m)(n.e(15).then(n.bind(null, 488)))
                    },
                    name: "huong-dan"
                }, {
                    path: "/iframe",
                    component: function() {
                        return Object(_.m)(n.e(16).then(n.bind(null, 513)))
                    },
                    name: "iframe"
                }, {
                    path: "/keno",
                    component: function() {
                        return Object(_.m)(n.e(18).then(n.bind(null, 489)))
                    },
                    name: "keno"
                }, {
                    path: "/khuyen-mai",
                    component: function() {
                        return Object(_.m)(n.e(20).then(n.bind(null, 514)))
                    },
                    name: "khuyen-mai"
                }, {
                    path: "/ksport",
                    component: function() {
                        return Object(_.m)(n.e(21).then(n.bind(null, 490)))
                    },
                    name: "ksport"
                }, {
                    path: "/livecasino",
                    component: function() {
                        return Object(_.m)(n.e(22).then(n.bind(null, 506)))
                    },
                    name: "livecasino"
                }, {
                    path: "/lode",
                    component: function() {
                        return Object(_.m)(n.e(25).then(n.bind(null, 478)))
                    },
                    name: "lode"
                }, {
                    path: "/login",
                    component: function() {
                        return Object(_.m)(n.e(27).then(n.bind(null, 491)))
                    },
                    name: "login"
                }, {
                    path: "/lottery",
                    component: function() {
                        return Object(_.m)(n.e(28).then(n.bind(null, 492)))
                    },
                    name: "lottery"
                }, {
                    path: "/lottery-sexy",
                    component: function() {
                        return Object(_.m)(n.e(29).then(n.bind(null, 493)))
                    },
                    name: "lottery-sexy"
                }, {
                    path: "/maintain",
                    component: function() {
                        return Object(_.m)(n.e(30).then(n.bind(null, 508)))
                    },
                    name: "maintain"
                }, {
                    path: "/match",
                    component: function() {
                        return Object(_.m)(n.e(31).then(n.bind(null, 494)))
                    },
                    name: "match"
                }, {
                    path: "/number-game",
                    component: function() {
                        return Object(_.m)(n.e(32).then(n.bind(null, 495)))
                    },
                    name: "number-game"
                }, {
                    path: "/olympic",
                    component: function() {
                        return Object(_.m)(n.e(33).then(n.bind(null, 496)))
                    },
                    name: "olympic"
                }, {
                    path: "/register",
                    component: function() {
                        return Object(_.m)(n.e(34).then(n.bind(null, 515)))
                    },
                    name: "register"
                }, {
                    path: "/reset-password",
                    component: function() {
                        return Object(_.m)(n.e(35).then(n.bind(null, 516)))
                    },
                    name: "reset-password"
                }, {
                    path: "/slot",
                    component: function() {
                        return Object(_.m)(n.e(36).then(n.bind(null, 517)))
                    },
                    name: "slot"
                }, {
                    path: "/sports",
                    component: function() {
                        return Object(_.m)(n.e(37).then(n.bind(null, 482)))
                    },
                    name: "sports"
                }, {
                    path: "/tin-tuc",
                    component: function() {
                        return Object(_.m)(n.e(40).then(n.bind(null, 476)))
                    },
                    name: "tin-tuc"
                }, {
                    path: "/user",
                    component: function() {
                        return Object(_.m)(n.e(41).then(n.bind(null, 497)))
                    },
                    children: [{
                        path: "",
                        component: function() {
                            return Object(_.m)(Promise.all([n.e(0), n.e(44)]).then(n.bind(null, 498)))
                        },
                        name: "user"
                    }, {
                        path: "deposit",
                        component: function() {
                            return Object(_.m)(Promise.all([n.e(51), n.e(42)]).then(n.bind(null, 521)))
                        },
                        name: "user-deposit"
                    }, {
                        path: "history",
                        component: function() {
                            return Object(_.m)(n.e(43).then(n.bind(null, 481)))
                        },
                        name: "user-history"
                    }, {
                        path: "information",
                        component: function() {
                            return Object(_.m)(Promise.all([n.e(0), n.e(45)]).then(n.bind(null, 518)))
                        },
                        name: "user-information"
                    }, {
                        path: "withdraw",
                        component: function() {
                            return Object(_.m)(n.e(46).then(n.bind(null, 483)))
                        },
                        name: "user-withdraw"
                    }]
                }, {
                    path: "/virtual-sports",
                    component: function() {
                        return Object(_.m)(n.e(47).then(n.bind(null, 499)))
                    },
                    name: "virtual-sports"
                }, {
                    path: "/event/noel",
                    component: function() {
                        return Object(_.m)(n.e(11).then(n.bind(null, 477)))
                    },
                    name: "event-noel"
                }, {
                    path: "/lode/3-mien",
                    component: function() {
                        return Object(_.m)(n.e(23).then(n.bind(null, 500)))
                    },
                    name: "lode-3-mien"
                }, {
                    path: "/lode/dai-cat",
                    component: function() {
                        return Object(_.m)(n.e(24).then(n.bind(null, 501)))
                    },
                    name: "lode-dai-cat"
                }, {
                    path: "/lode/sieu-toc",
                    component: function() {
                        return Object(_.m)(n.e(26).then(n.bind(null, 502)))
                    },
                    name: "lode-sieu-toc"
                }, {
                    path: "/huong-dan/:slug?",
                    component: function() {
                        return Object(_.m)(n.e(14).then(n.bind(null, 503)))
                    },
                    name: "huong-dan-slug"
                }, {
                    path: "/khuyen-mai/:slug?",
                    component: function() {
                        return Object(_.m)(n.e(19).then(n.bind(null, 504)))
                    },
                    name: "khuyen-mai-slug"
                }, {
                    path: "/the-loai/:slug?",
                    component: function() {
                        return Object(_.m)(n.e(38).then(n.bind(null, 480)))
                    },
                    name: "the-loai-slug"
                }, {
                    path: "/tin-tuc/:slug?",
                    component: function() {
                        return Object(_.m)(n.e(39).then(n.bind(null, 507)))
                    },
                    name: "tin-tuc-slug"
                }, {
                    path: "/",
                    component: function() {
                        return Object(_.m)(n.e(17).then(n.bind(null, 475)))
                    },
                    name: "index"
                }, {
                    path: "/*",
                    component: function() {
                        return Object(_.m)(n.e(4).then(n.bind(null, 505)))
                    },
                    name: "all"
                }],
                fallback: !1
            };

            function k() {
                return new v.a(C)
            }
            var x = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(t, e) {
                        var n = e.parent,
                            data = e.data,
                            r = e.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var c = n, l = n.$nuxt.nuxt.transitions, m = n.$nuxt.nuxt.defaultTransition, h = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && h++, n = n.$parent;
                        data.nuxtChildDepth = h;
                        var d = l[h] || m,
                            f = {};
                        $.forEach((function(t) {
                            void 0 !== d[t] && (f[t] = d[t])
                        }));
                        var v = {};
                        T.forEach((function(t) {
                            "function" == typeof d[t] && (v[t] = d[t].bind(c))
                        }));
                        var _ = v.beforeEnter;
                        if (v.beforeEnter = function(t) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), _) return _.call(c, t)
                            }, !1 === d.css) {
                            var w = v.leave;
                            (!w || w.length < 2) && (v.leave = function(t, e) {
                                w && w.call(c, t), c.$nextTick(e)
                            })
                        }
                        var y = o("routerView", data);
                        return r.keepAlive && (y = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [y])), o("transition", {
                            props: f,
                            on: v
                        }, [y])
                    }
                },
                $ = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                T = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                O = {
                    name: "NuxtError",
                    props: {
                        error: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        statusCode: function() {
                            return this.error && this.error.statusCode || 500
                        },
                        message: function() {
                            return this.error.message || "Error"
                        }
                    },
                    head: function() {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                            }]
                        }
                    }
                },
                L = (n(354), n(33)),
                S = Object(L.a)(O, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "__nuxt-error-page"
                    }, [n("div", {
                        staticClass: "error"
                    }, [n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "90",
                            height: "90",
                            fill: "#DBE1EC",
                            viewBox: "0 0 48 48"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? n("p", {
                        staticClass: "description"
                    }, [n("NuxtLink", {
                        staticClass: "error-link",
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "logo"
                    }, [e("a", {
                        attrs: {
                            href: "https://nuxtjs.org",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [this._v("Nuxt.js")])])
                }], !1, null, null, null).exports,
                E = (n(67), n(68), n(46), n(89)),
                A = {
                    name: "Nuxt",
                    components: {
                        NuxtChild: x,
                        NuxtError: S
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(_.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(E.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occured while showing the error page"), t("p", "Unfortunately an error occured and while showing the error page another error occured"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return e.displayingNuxtError = !1
                        })), t(S, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                },
                R = (n(154), n(134), n(43), n(108), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                        },
                        start: function() {
                            var t = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return t.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(t) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(t) {
                            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                        },
                        decrease: function(t) {
                            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var t = this;
                            return this.clear(), setTimeout((function() {
                                t.show = !1, t.$nextTick((function() {
                                    t.percent = 0, t.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(t) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var t = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                            }), 100)
                        }
                    },
                    render: function(t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                j = (n(355), Object(L.a)(R, void 0, void 0, !1, null, null, null).exports),
                B = (n(356), n(357), n(358), n(190).a),
                M = Object(L.a)(B, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("main", {
                        class: {
                            isLogin: null !== t.user, "event-noel": t.$isEnableThemeNoel()
                        }
                    }, [n("client-only", [t.hideHeader ? t._e() : n("Appheader")], 1), t._v(" "), n("div", {
                        staticClass: "box-translate",
                        class: {
                            "box--login": null !== t.user, "page-noel": "event-noel" === this.$route.name
                        }
                    }, [n("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [t.showIframe ? n("app-iframe") : t._e()], 1), t._v(" "), n("nuxt"), t._v(" "), !t.$isEnableThemeNoel() || t.hideFooter || t.hidden ? t._e() : n("img", {
                        staticClass: "ic-noel-bottom",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/event/noel/home/snow-theme-bottom.png",
                            alt: "img"
                        }
                    }), t._v(" "), t.hideFooter ? t._e() : n("Appfooter")], 1), t._v(" "), t.hideHeader ? t._e() : n("menu-mobile"), t._v(" "), n("nav-mobile"), t._v(" "), t.hideHeader ? t._e() : n("mini-game"), t._v(" "), n("modal-forgot-password"), t._v(" "), n("modal-tranfer-wallet"), t._v(" "), n("modal-domain-change"), t._v(" "), n("modal-warning"), t._v(" "), "1" === t.livechatMaintain ? n("livechat-maintain") : t._e(), t._v(" "), n("user-mobile"), t._v(" "), n("a", {
                        staticClass: "support support--js",
                        attrs: {
                            href: "#",
                            title: "subpport"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.openLiveChat.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/support.svg",
                            alt: "support"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "loader"
                    }, [t._v("Loading...")])]), t._v(" "), n("a", {
                        staticClass: "backtop",
                        attrs: {
                            href: "#",
                            title: "to top"
                        },
                        on: {
                            "&click": function(e) {
                                return t.scrollTop.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/backtop.png",
                            alt: "backtop"
                        }
                    })]), t._v(" "), "1" === t.livechatMaintain ? n("div", {
                        staticClass: "livechat-maintain",
                        attrs: {
                            "data-toggle": "modal"
                        },
                        on: {
                            click: t.showLiveChatMaintain
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/livechat-maintain.png",
                            alt: ""
                        }
                    })]) : t._e()], 1)
                }), [], !1, null, null, null).exports;

            function I(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return N(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function N(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var D = {
                    _default: Object(_.r)(M)
                },
                P = {
                    render: function(t, e) {
                        var n = t("NuxtLoading", {
                                ref: "loading"
                            }),
                            r = t(this.layout || "nuxt"),
                            o = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            c = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(t) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [o]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, c])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        c.default.prototype.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        this.$loading = this.$refs.loading
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((n = Object(_.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.$loading.start(), r = n.map((function(e) {
                                                var p = [];
                                                if (e.$options.fetch && e.$options.fetch.length && p.push(Object(_.p)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch());
                                                else {
                                                    var n, r = I(Object(_.e)(e.$vnode.componentInstance));
                                                    try {
                                                        for (r.s(); !(n = r.n()).done;) {
                                                            var component = n.value;
                                                            p.push(component.$fetch())
                                                        }
                                                    } catch (t) {
                                                        r.e(t)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }
                                                return e.$options.asyncData && p.push(Object(_.p)(e.$options.asyncData, t.context).then((function(t) {
                                                    for (var n in t) c.default.set(e.$data, n, t[n])
                                                }))), Promise.all(p)
                                            })), e.prev = 5, e.next = 8, Promise.all(r);
                                        case 8:
                                            e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(_.k)(e.t0), t.error(e.t0);
                                        case 15:
                                            t.$loading.finish();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish())
                        },
                        setLayout: function(t) {
                            return t && D["_" + t] || (t = "default"), this.layoutName = t, this.layout = D["_" + t], this.layout
                        },
                        loadLayout: function(t) {
                            return t && D["_" + t] || (t = "default"), Promise.resolve(D["_" + t])
                        }
                    },
                    components: {
                        NuxtLoading: j
                    }
                },
                U = n(234);
            c.default.use(U.a);
            var F = {};
            (F = function(t, e) {
                if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
                return "function" != typeof t && (t = Object.assign({}, t)),
                    function(t, e) {
                        if (t.state && "function" != typeof t.state) {
                            console.warn("'state' should be a method that returns an object in ".concat(e));
                            var n = Object.assign({}, t.state);
                            t = Object.assign({}, t, {
                                state: function() {
                                    return n
                                }
                            })
                        }
                        return t
                    }(t, e)
            }(n(402), "store/index.js")).modules = F.modules || {};
            var G = F instanceof Function ? F : function() {
                return new U.a.Store(Object.assign({
                    strict: !1
                }, F))
            };
            var H = n(201),
                V = n(125),
                Y = n(163),
                col = n(103),
                K = n(138),
                z = n(171),
                W = n(48),
                table = n(170),
                X = n(117),
                Z = n(164),
                Q = n(165),
                J = n(166),
                tt = n(128),
                progress = n(167),
                et = n(168),
                nt = n(169),
                at = n(231),
                it = n(87),
                ot = n(97),
                st = n(139),
                ct = n(124),
                lt = n(129);
            c.default.use(H.a), c.default.component("BContainer", V.a), c.default.component("BRow", Y.a), c.default.component("BCol", col.a), c.default.component("BFormInput", K.a), c.default.component("BCollapse", z.a), c.default.component("BButton", W.a), c.default.component("BTable", table.a), c.default.component("BModal", X.a), c.default.component("BBreadcrumb", Z.a), c.default.component("BTabs", Q.a), c.default.component("BTab", J.a), c.default.component("BAvatar", tt.a), c.default.component("BProgress", progress.a), c.default.component("BCarousel", et.a), c.default.component("BCarouselSlide", nt.a), c.default.component("BInput", at.BInput), c.default.component("BForm", it.a), c.default.component("BFormInvalidFeedback", ot.a), c.default.component("BFormSelect", st.a), c.default.directive("BModal", ct.a), c.default.directive("BToggle", lt.a);
            var ut = n(291),
                mt = n.n(ut),
                pt = function(t, e) {
                    var n = t.req,
                        r = t.res,
                        o = !1;
                    e("cookies", mt()(n, r, o))
                },
                ht = n(292);
            n.n(ht).a.load({
                google: {
                    families: ["Muli:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"]
                }
            });
            var gt = n(150),
                ft = n.n(gt);
            c.default.use(ft.a, {});
            var vt = function(t, e) {
                    e("scrollTo", ft.a.scrollTo)
                },
                bt = n(130),
                _t = n.n(bt),
                wt = n(293);

            function yt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function Ct(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? yt(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : yt(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function kt(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return xt(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function xt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            for (var $t = {
                    setBaseURL: function(t) {
                        this.defaults.baseURL = t
                    },
                    setHeader: function(t, e) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            o = kt(Array.isArray(r) ? r : [r]);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var c = n.value;
                                e ? this.defaults.headers[c][t] = e : delete this.defaults.headers[c][t]
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    },
                    setToken: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            r = t ? (e ? e + " " : "") + t : null;
                        this.setHeader("Authorization", r, n)
                    },
                    onRequest: function(t) {
                        this.interceptors.request.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onResponse: function(t) {
                        this.interceptors.response.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onRequestError: function(t) {
                        this.interceptors.request.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onResponseError: function(t) {
                        this.interceptors.response.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onError: function(t) {
                        this.onRequestError(t), this.onResponseError(t)
                    },
                    create: function(t) {
                        return St(Object(wt.a)(t, this.defaults))
                    }
                }, Tt = function() {
                    var t = Lt[Ot];
                    $t["$" + t] = function() {
                        return this[t].apply(this, arguments).then((function(t) {
                            return t && t.data
                        }))
                    }
                }, Ot = 0, Lt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Ot < Lt.length; Ot++) Tt();
            var St = function(t) {
                    var e = _t.a.create(t);
                    return e.CancelToken = _t.a.CancelToken, e.isCancel = _t.a.isCancel,
                        function(t) {
                            for (var e in $t) t[e] = $t[e].bind(t)
                        }(e), e.onRequest((function(t) {
                            t.headers = Ct(Ct({}, e.defaults.headers.common), t.headers)
                        })), Et(e), e
                },
                Et = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        n = function() {
                            var t = "undefined" != typeof window && window.$nuxt;
                            return t && t.$loading && t.$loading.set ? t.$loading : e
                        },
                        r = 0;
                    t.onRequest((function(t) {
                        t && !1 === t.progress || r++
                    })), t.onResponse((function(t) {
                        t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
                    })), t.onError((function(t) {
                        t && t.config && !1 === t.config.progress || (r--, _t.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
                    }));
                    var o = function(t) {
                        if (r && t.total) {
                            var progress = 100 * t.loaded / (t.total * r);
                            n().set(Math.min(100, progress))
                        }
                    };
                    t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
                },
                At = function(t, e) {
                    var n = t.$config && t.$config.axios || {},
                        r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "http://localhost:3001";
                    var o = St({
                        baseURL: r,
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    });
                    t.$axios = o, e("axios", o)
                },
                Rt = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                jt = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

            function Bt(a) {
                return Rt.test(a) || jt.test(a.substr(0, 4))
            }
            var Mt = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                It = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

            function Nt(a) {
                return Mt.test(a) || It.test(a.substr(0, 4))
            }

            function Dt(a) {
                return /iPad|iPhone|iPod/.test(a)
            }

            function Pt(a) {
                return /android/i.test(a)
            }

            function Ut(a) {
                return /Windows/.test(a)
            }

            function Ft(a) {
                return /Mac OS X/.test(a)
            }
            var Gt = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
                Ht = function(t, e) {
                    return qt.apply(this, arguments)
                };

            function qt() {
                return (qt = Object(r.a)(regeneratorRuntime.mark((function t(e, n) {
                    var r, o, c, l, m, h, d;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (r = "", (r = void 0 !== e.req ? e.req.headers["user-agent"] : "undefined" != typeof navigator ? navigator.userAgent : Gt) || (r = Gt), o = null, c = null, l = null, m = null, h = !1, d = !0, "Amazon CloudFront" !== r) {
                                    t.next = 14;
                                    break
                                }
                                "true" === e.req.headers["cloudfront-is-mobile-viewer"] && (o = !0, c = !0), "true" === e.req.headers["cloudfront-is-tablet-viewer"] && (o = !1, c = !0), t.next = 33;
                                break;
                            case 14:
                                if (!e.req || !e.req.headers["cf-device-type"]) {
                                    t.next = 29;
                                    break
                                }
                                t.t0 = e.req.headers["cf-device-type"], t.next = "mobile" === t.t0 ? 18 : "tablet" === t.t0 ? 21 : "desktop" === t.t0 ? 24 : 27;
                                break;
                            case 18:
                                return o = !0, c = !0, t.abrupt("break", 27);
                            case 21:
                                return o = !1, c = !0, t.abrupt("break", 27);
                            case 24:
                                return o = !1, c = !1, t.abrupt("break", 27);
                            case 27:
                                t.next = 33;
                                break;
                            case 29:
                                o = Bt(r), c = Nt(r), l = Dt(r), m = Pt(r);
                            case 33:
                                h = Ut(r), d = Ft(r), e.isMobile = o, e.isMobileOrTablet = c, e.isTablet = !o && c, e.isDesktop = !c, e.isDesktopOrTablet = !o, e.isIos = l, e.isAndroid = m, e.isWindows = h, e.isMacOS = d, n("device", {
                                    isMobile: o,
                                    isMobileOrTablet: c,
                                    isTablet: !o && c,
                                    isDesktop: !c,
                                    isIos: l,
                                    isAndroid: m,
                                    isWindows: h,
                                    isMacOS: d,
                                    isDesktopOrTablet: !o
                                });
                            case 45:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            n(176);
            var Vt = "dataLayer",
                Yt = "GTM-TF3W2XC";
            var Kt = function(t, e) {
                    var n = "GTM-TF3W2XC",
                        r = (t.$config && t.$config.gtm || {}).id,
                        c = function(t, e) {
                            return {
                                init: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yt;
                                    !e[t] && window._gtm_inject && (window._gtm_inject(t), e[t] = !0)
                                },
                                push: function(t) {
                                    window[Vt] || (window[Vt] = []), window[Vt].push(t)
                                }
                            }
                        }(0, Object(o.a)({}, n, !0));
                    r && r !== n && c.init(r), t.$gtm = c, e("gtm", t.$gtm)
                },
                zt = n(235);
            c.default.use(zt.a);
            var Wt = function(t) {
                    t.app.i18n = new zt.a({
                        locale: "vi",
                        fallbackLocale: "vi",
                        messages: {
                            vi: n(410),
                            en: n(411)
                        }
                    })
                },
                Xt = n(236),
                Zt = function(t) {
                    var e = t.store,
                        n = t.app,
                        o = n.$axios,
                        c = n.$alertHtmlLogin,
                        l = n.$alertError,
                        m = n.$trackingResponse,
                        h = n.$alertLoginRequired,
                        d = t.redirect;
                    e.state.mapDomain.HOME_URL && (o.defaults.baseURL = e.state.mapDomain.HOME_URL), o.onRequest((function() {})), o.onResponse((function(t) {
                        "function" == typeof $tracking && m(t)
                    })), o.onError((function(t) {
                        var code = parseInt(t.response && t.response.status, 10);
                        502 !== code && 400 !== code && 318 !== code || "SHOW_MESSAGE" !== t.response.data.status ? 504 === code ? l("Không thể kết nối máy chủ, Vui lòng thử lại sau!") : 401 === code && (e.commit("mutate", {
                            property: "user",
                            with: null
                        }), e.state.isOpenMiniGame && e.commit("mutate", {
                            property: "isOpenMiniGame",
                            with: !1
                        }), localStorage && localStorage.setItem("user_token", ""), "desktop" === e.state.device ? (null !== e.state.refreshInterval && (clearInterval(e.state.refreshInterval), e.commit("mutate", {
                            property: "refreshInterval",
                            with: null
                        })), e.dispatch("clearIframe"), c("Thông báo", "Tài khoản của bạn đã được đăng nhập trên trình duyệt / thiết bị khác").then(function() {
                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            "cancel" !== e.dismiss && "close" !== e.dismiss || d("/"), e.isConfirmed && h();
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())) : c("Thông báo", "Tài khoản của bạn đã được đăng nhập trên trình duyệt / thiết bị khác").then(function() {
                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            "cancel" !== e.dismiss && "close" !== e.dismiss || d("/"), e.isConfirmed && h();
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())) : l(t.response.data.message)
                    }))
                },
                Qt = n(295),
                Jt = n.n(Qt),
                te = n(93),
                ee = n.n(te),
                ne = n(237),
                ae = n.n(ne),
                ie = n(94),
                re = n.n(ie),
                oe = n(296),
                se = n.n(oe),
                ce = (n(414), n(297)),
                le = n.n(ce),
                ue = n(298),
                me = n.n(ue),
                pe = n(213),
                he = n(239),
                de = {
                    inheritAttrs: !0,
                    props: {
                        loading: {
                            type: Boolean,
                            default: !1
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        apply: {
                            type: Function,
                            default: function() {}
                        }
                    },
                    data: function() {
                        return {}
                    },
                    methods: {}
                },
                ge = Object(L.a)(de, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("button", {
                        staticClass: "btn-submit",
                        class: {
                            loading: t.loading
                        },
                        attrs: {
                            disabled: t.disabled && !t.loading
                        },
                        on: {
                            click: t.apply
                        }
                    }, [t.loading ? n("span", {
                        staticClass: "spinner-border-custom",
                        attrs: {
                            role: "status",
                            "aria-hidden": "true"
                        }
                    }) : t._e(), t._v(" "), t._t("default")], 2)
                }), [], !1, null, null, null).exports,
                fe = {
                    name: "imageResponsive",
                    props: {
                        static: {
                            type: String,
                            default: "",
                            required: !0
                        },
                        className: {
                            type: String,
                            default: ""
                        },
                        alt: {
                            type: String,
                            default: ""
                        },
                        type: {
                            type: String,
                            default: ""
                        },
                        full: {
                            type: String,
                            default: ""
                        },
                        min: {
                            type: String,
                            default: "(min-width: 768px)"
                        },
                        max: {
                            type: String,
                            default: "(max-width: 768px)"
                        }
                    },
                    data: function() {
                        return {
                            urlFull: "",
                            srcset: "",
                            img480: "",
                            img480Webp: "",
                            img768: "",
                            img768Webp: "",
                            img992: "",
                            img992Webp: "",
                            imageExt: "image/png"
                        }
                    },
                    methods: {
                        getSrcset: function() {
                            var t = this.getFileExtension(this.$props.static),
                                e = this.getUrlNotExtension(this.$props.static);
                            this.imageExt = "image/" + t, this.img480 = "".concat(e, ".480w.").concat(t), this.img480Webp = "".concat(e, ".480w.webp"), this.img768 = "".concat(e, ".768w.").concat(t), this.img768Webp = "".concat(e, ".768w.webp"), this.img992 = "".concat(e, ".").concat(t), this.img992Webp = "".concat(e, ".webp"), this.$isMobile() && !this.$device.isTablet ? this.urlFull = "".concat(e, ".480w.").concat(t) : this.urlFull = "".concat(e, ".").concat(t)
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
                        var t = this.$props.static;
                        void 0 !== t && t && this.getSrcset()
                    }
                },
                ve = Object(L.a)(fe, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return "picture" === t.type ? n("picture", [n("source", {
                        attrs: {
                            srcset: t.img992Webp,
                            media: t.min,
                            type: "image/webp"
                        }
                    }), t._v(" "), n("source", {
                        attrs: {
                            srcset: t.img992,
                            media: t.min,
                            type: t.imageExt
                        }
                    }), t._v(" "), n("source", {
                        attrs: {
                            srcset: t.img480Webp,
                            media: t.max,
                            type: "image/webp"
                        }
                    }), t._v(" "), n("source", {
                        attrs: {
                            srcset: t.img480,
                            media: t.max,
                            type: t.imageExt
                        }
                    }), t._v(" "), t.$isMobile() ? n("img", {
                        class: t.className,
                        attrs: {
                            srcset: t.img480,
                            alt: t.alt
                        }
                    }) : n("img", {
                        class: t.className,
                        attrs: {
                            srcset: t.img992,
                            alt: t.alt
                        }
                    })]) : "webp" === t.type ? n("picture", [n("source", {
                        attrs: {
                            srcset: t.img992Webp,
                            type: "image/webp"
                        }
                    }), t._v(" "), n("source", {
                        attrs: {
                            srcset: t.img992,
                            type: "image/png"
                        }
                    }), t._v(" "), n("img", {
                        class: t.className,
                        attrs: {
                            srcset: t.img992,
                            alt: t.alt
                        }
                    })]) : n("img", {
                        class: t.className,
                        attrs: {
                            "data-src": t.urlFull,
                            alt: t.alt
                        }
                    })
                }), [], !1, null, null, null).exports;

            function be(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function _e(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? be(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : be(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            re.a.extend(se.a), re.a.locale("vi"), c.default.use(H.a), c.default.use(Jt.a, {
                precision: 0,
                thousands: ".",
                masked: !1
            }), c.default.use(ee.a), ae.a.config.autoSetContainer = !0, c.default.use(ae.a), c.default.use(ft.a), c.default.use(ft.a, {
                container: "body",
                duration: 500,
                easing: "ease",
                offset: 0,
                force: !0,
                cancelable: !0,
                onStart: !1,
                onDone: !1,
                onCancel: !1,
                x: !1,
                y: !0
            }), c.default.use(me.a, "AwesomeCountdown"), c.default.component("d-img", he.a), c.default.component("r-img", ve), c.default.component("d-button", ge), c.default.component("m-input", le.a), c.default.filter("fromNow", (function(t) {
                return t ? re()().to(re()(t)) : ""
            })), c.default.filter("formatDate", (function(t, e) {
                return t ? re()(t).format(e) : ""
            })), c.default.filter("addDay", (function(t, e) {
                return t ? re()(t).add(e, "day") : re()()
            })), c.default.filter("formatTime", (function(t, e) {
                return t ? re()(t).format(e) : ""
            })), c.default.filter("formatAmount", (function(t, e) {
                return t = Math.round(t), e || (e = "D"), "".concat(Object(pe.c)(t), " ").concat(e)
            })), c.default.filter("formatCurrency", (function(t, e) {
                return t = Math.round(t), e || (e = ""), "".concat(Object(pe.c)(t), " ").concat(e)
            })), c.default.filter("lowerCase", (function(t) {
                return t ? t.toLowerCase() : ""
            })), c.default.filter("currencyCode", (function(t) {
                return "".concat(Math.round(t))
            })), c.default.filter("currencyDecimal", (function(t) {
                return "".concat(t % 1 != 0 ? parseFloat(t).toFixed(1) : Math.round(t), " D")
            })), c.default.filter("currencyDecimals", (function(t) {
                return "".concat(t % 1 != 0 ? parseFloat(t).toFixed(2) : Math.round(t), " D")
            })), c.default.filter("fomatPhone", (function(t) {
                return "".concat(t.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3"))
            })), c.default.filter("fomatPhone3", (function(t) {
                return "".concat(t.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3"))
            })), c.default.filter("userFirstText", (function(t) {
                if (t) {
                    if (null !== t.fullname) return t.fullname.toString().slice(0, 1);
                    if (null !== t.username) return t.username.toString().slice(0, 1)
                }
                return ""
            })), c.default.filter("formatNumberBank", (function(t) {
                return t.slice(0, t.length - 4).replace(/[0-9]/g, "*") + t.slice(t.length - 4, t.length)
            }));

            function we(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function ye(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? we(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : we(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function Ce(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function ke(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Ce(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ce(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function xe(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function $e(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? xe(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : xe(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var Te = {
                    userApi: function(t) {
                        return {
                            login: function(e) {
                                return t.$post("".concat("/api/v1", "/login"), e, {
                                    progress: !1
                                })
                            },
                            register: function(e) {
                                return t.$post("".concat("/api/v1", "/register"), e, {
                                    progress: !1
                                })
                            },
                            logout: function(e) {
                                return t.$post("".concat("/api/v1", "/logout"), e, {
                                    progress: !1
                                })
                            },
                            update: function(e) {
                                return t.$post("".concat("/api/v1", "/updateInfo"), e, {
                                    progress: !1
                                })
                            },
                            updatePassword: function(e) {
                                return t.$post("".concat("/api/v1", "/updatePassword"), e, {
                                    progress: !1
                                })
                            },
                            forgotPassword: function(e) {
                                return t.$post("".concat("/api/v1", "/forgotPassword"), e, {
                                    progress: !1
                                })
                            },
                            resetPassword: function(e) {
                                return t.$post("".concat("/api/v1", "/resetPassword"), e, {
                                    progress: !1
                                })
                            },
                            syscOW: function() {
                                return t.$get("".concat("/api/v1", "/syscOW"), {
                                    progress: !1
                                })
                            },
                            verify: function(e) {
                                return t.$post("".concat("/api/v1", "/verifyUsername"), e, {
                                    progress: !1
                                })
                            },
                            verifyWithCancel: function(e, n) {
                                return n ? t.$post("".concat("/api/v1", "/verifyUsername"), e, {
                                    cancelToken: n.token,
                                    progress: !1
                                }) : t.$post("".concat("/api/v1", "/verifyUsername"), e, {
                                    progress: !1
                                })
                            },
                            verifyEmail: function(e) {
                                return t.$post("".concat("/api/v1", "/verifyEmail"), e, {
                                    progress: !1
                                })
                            },
                            verifyEmailWithCancel: function(e, n) {
                                return n ? t.$post("".concat("/api/v1", "/verifyEmail"), e, {
                                    cancelToken: n.token,
                                    progress: !1
                                }) : t.$post("".concat("/api/v1", "/verifyEmail"), e, {
                                    progress: !1
                                })
                            },
                            index: function() {
                                return t.$get("".concat("/api/v1", "/indexaccount"))
                            },
                            getBet: function(e) {
                                return t.$get("".concat("/api/v1", "/account/bet"), {
                                    params: _e({}, e)
                                })
                            },
                            getCommission: function(e) {
                                return t.$get("".concat("/api/v1", "/account/commission"), {
                                    params: _e({}, e)
                                })
                            },
                            getWallet: function() {
                                return t.$get("".concat("/api/v1", "/wallet"))
                            },
                            getBalance: function() {
                                return t.$get("".concat("/api/v1", "/balance"))
                            },
                            transfer: function(e) {
                                return t.$post("".concat("/api/v1", "/athena/transfer"), e, {
                                    progress: !1
                                })
                            },
                            getPlan: function() {
                                return t.$get("".concat("/api/v1", "/account/plan"))
                            },
                            countInvoicePromotion: function() {
                                return t.$get("".concat("/api/v1", "/account/promotion"))
                            },
                            legitBanks: function() {
                                return t.$get("".concat("/api/v1", "/user/banks"))
                            }
                        }
                    },
                    urlApi: function(t) {
                        return {
                            getAthena: function(e) {
                                return e ? t.$get("".concat("/api/v1", "/athena/sportUrl"), {
                                    params: e,
                                    progress: !1
                                }) : t.$get("".concat("/api/v1", "/athena/sportUrl"), {
                                    progress: !1
                                })
                            },
                            getAthenaMatch: function(e) {
                                return t.$get("".concat("/api/v1", "/athena/matchUrl"), {
                                    params: e,
                                    progress: !1
                                })
                            },
                            getAthenaVS: function() {
                                return t.$get("".concat("/api/v1", "/athena/vsUrl"), {
                                    progress: !1
                                })
                            },
                            getAthenaEsport: function() {
                                return t.$get("".concat("/api/v1", "/athena/esportsUrl"), {
                                    progress: !1
                                })
                            },
                            getKeno: function() {
                                return t.$get("".concat("/api/v1", "/tp/kenoUrl"), {
                                    progress: !1
                                })
                            },
                            getNumberGame: function() {
                                return t.$get("".concat("/api/v1", "/tp/numberGameUrl"), {
                                    progress: !1
                                })
                            },
                            getLode: function() {
                                return t.$get("".concat("/api/v1", "/lodeUrl"), {
                                    progress: !1
                                })
                            },
                            getLodeSieuToc: function() {
                                return t.$get("".concat("/api/v1", "/lodeSieuTocUrl"), {
                                    progress: !1
                                })
                            },
                            getKSportTPUrl: function(e) {
                                return t.$get("".concat("/api/v1", "/tp/ksportUrl"), {
                                    params: e,
                                    progress: !1,
                                    withCredentials: !0
                                })
                            },
                            getOlympicUrl: function() {
                                return t.$get("".concat("/api/v1", "/athena/olympicUrl"), {
                                    progress: !1,
                                    withCredentials: !0
                                })
                            },
                            getSlotById: function(e) {
                                return t.$get("".concat("/api/v1", "/slotUrl"), {
                                    params: {
                                        gId: e
                                    },
                                    progress: !1
                                })
                            },
                            getSSport: function() {
                                return t.$get("".concat("/api/v1", "/tp/ssportUrl"), {
                                    progress: !1
                                })
                            },
                            getIMSport: function() {
                                return t.$get("".concat("/api/v1", "/tp/imsportUrl"), {
                                    progress: !1
                                })
                            },
                            getMaintenance: function() {
                                return t.$get("".concat("/api/v1", "/athena/maintenance"))
                            },
                            getGameById: function(e) {
                                return t.$get("".concat("/api/v1", "/gameUrl"), {
                                    params: e,
                                    progress: !1
                                })
                            },
                            getLottery: function() {
                                return t.$get("".concat("/api/v1", "/lotteryUrl"), {
                                    progress: !1
                                })
                            },
                            getLotterySexy: function() {
                                return t.$get("".concat("/api/v1", "/lotteryUrl2"), {
                                    progress: !1
                                })
                            },
                            getUrlByName: function(e, n) {
                                var r = {
                                    "number-game": "tp/numberGameUrl",
                                    lode: "lodeUrl",
                                    lottery: "lotteryUrl",
                                    "lottery-sexy": "lotteryUrl2",
                                    keno: "tp/kenoUrl",
                                    esport: "tp/imsportUrl",
                                    asport: "athena/sportUrl",
                                    vssport: "athena/vsUrl",
                                    esports: "athena/esportsUrl",
                                    match: "/tp/ksportUrl"
                                };
                                return r[e] ? t.$get("".concat("/api/v1", "/").concat(r[e]), {
                                    params: n,
                                    progress: !1
                                }) : {
                                    code: 200,
                                    status: "ERROR",
                                    data: {
                                        url: ""
                                    }
                                }
                            }
                        }
                    },
                    depositApi: function(t) {
                        return {
                            index: function() {
                                return t.$get("".concat("/api/v1", "/payment/indexdeposit"))
                            },
                            cards: function() {
                                return t.$get("".concat("/api/v1", "/payment/gwinfo"))
                            },
                            bank: function(e) {
                                return t.$get("".concat("/api/v1", "/payment/bankHistory"), {
                                    params: {
                                        bank_code: e,
                                        progress: !1
                                    }
                                })
                            },
                            create: function(e, n) {
                                return "bank" === e ? t.$post("".concat("/api/v1", "/payment/depositbank"), n, {
                                    progress: !1
                                }) : "card" === e ? t.$post("".concat("/api/v1", "/payment/depositcard"), n, {
                                    progress: !1
                                }) : "fastpay" === e ? t.$post("".concat("/api/v1", "/payment/smartpay"), n, {
                                    progress: !1
                                }) : void 0
                            },
                            cancelPromotion: function() {
                                return t.$post("".concat("/api/v1", "/payment/cancelpromotion"), {}, {
                                    progress: !1
                                })
                            },
                            momos: function() {
                                return t.$get("".concat("/api/v1", "/payment/momoAccount"))
                            }
                        }
                    },
                    withDrawApi: function(t) {
                        return {
                            index: function() {
                                return t.$get("".concat("/api/v1", "/payment/indexwithdraw"))
                            },
                            create: function(e, n) {
                                return "bank" === e ? t.$post("".concat("/api/v1", "/payment/withdrawbank"), n, {
                                    progress: !1
                                }) : "card" === e ? t.$post("".concat("/api/v1", "/payment/withdrawcard"), n, {
                                    progress: !1
                                }) : void 0
                            },
                            count: function() {
                                return t.$get("".concat("/api/v1", "/payments/withdraw/count"), {
                                    progress: !1
                                })
                            }
                        }
                    },
                    historyApi: function(t) {
                        return {
                            bets: function(e) {
                                return t.$get("".concat("/api/v1", "/lsb"), {
                                    params: e,
                                    progress: !1
                                })
                            },
                            athenaBets: function(e) {
                                return t.$get("".concat("/api/v1", "/lsbAthena"), {
                                    params: e,
                                    progress: !1
                                })
                            },
                            transactions: function(e) {
                                return t.$get("".concat("/api/v1", "/lsgd"), {
                                    params: e,
                                    progress: !1
                                })
                            },
                            matchDetail: function(e) {
                                return t.$get("".concat("/api/v1", "/matchDetail"), {
                                    params: e,
                                    progress: !1
                                })
                            },
                            loadParlay: function(e) {
                                return t.$get("".concat("/api/v1", "/parlay"), {
                                    params: e,
                                    progress: !1
                                })
                            }
                        }
                    },
                    postApi: function(t) {
                        return {
                            getBySlug: function(e) {
                                return t.$get("".concat("/api/v1", "/post/"), {
                                    params: {
                                        alias: e
                                    }
                                })
                            },
                            getById: function(e) {
                                return t.$get("".concat("/api/v1", "/post/").concat(e))
                            },
                            getCatBySlug: function(e, n) {
                                return t.$get("".concat("/api/v1", "/category"), {
                                    params: ye({
                                        alias: e
                                    }, n),
                                    progress: !1
                                })
                            },
                            getCategories: function() {
                                return t.$get("".concat("/api/v1", "/categories"), {
                                    progress: !1
                                })
                            },
                            getFeaturePosts: function() {
                                return t.$get("".concat("/api/v1", "/posts/feature"), {
                                    params: {
                                        cate_id: 1,
                                        is_featured: !0
                                    },
                                    progress: !1
                                })
                            },
                            getNewPost: function() {
                                return t.$get("".concat("/api/v1", "/posts"), {
                                    progress: !1
                                })
                            },
                            getByCatIds: function(e, n) {
                                return t.$get("".concat("/api/v1", "/posts/"), {
                                    params: ye({
                                        catIds: e
                                    }, n),
                                    progress: !1
                                })
                            },
                            getBySearch: function(e, n) {
                                return t.$get("".concat("/api/v1", "/posts"), {
                                    params: ye({
                                        keyword: e
                                    }, n),
                                    progress: !1
                                })
                            }
                        }
                    },
                    casinoApi: function(t) {
                        return {
                            index: function() {
                                return t.$get("".concat("/api/v1", "/casino?exclude=athena,vivo-sexy"))
                            },
                            getByCode: function(e) {
                                return t.$get("".concat("/api/v1", "/casinoUrl"), {
                                    params: {
                                        partnerCode: e.partnerCode,
                                        partnerGameId: e.partnerGameId
                                    },
                                    progress: !1
                                })
                            },
                            casinoSexy: function() {
                                return t.$get("".concat("/api/v1", "/casino/sexy"))
                            },
                            search: function(e) {
                                return t.$get("".concat("/api/v1", "/casino/search"), {
                                    params: ke({}, e),
                                    progress: !1
                                })
                            }
                        }
                    },
                    gameApi: function(t) {
                        return {
                            index: function() {
                                return t.$get("".concat("/api/v2", "/indexGame"))
                            },
                            search: function(e) {
                                return t.$get("".concat("/api/v1", "/game/search"), {
                                    params: e,
                                    progress: !1
                                })
                            },
                            getPageSearch: function(e) {
                                return t.$get("".concat("/api/v1", "/games"), {
                                    params: e
                                })
                            },
                            getPage: function(e) {
                                return t.$get("".concat("/api/v1", "/game"), {
                                    params: e
                                })
                            },
                            getSlotGame: function(e) {
                                return t.$get("".concat("/api/v1", "/game/ktek"), {
                                    params: $e({}, e)
                                })
                            },
                            getToken: function() {
                                return t.$get("".concat("/api/v1", "/ktekToken"), {
                                    progress: !1
                                })
                            },
                            jackpot: function() {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n, r, data;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, t.$get("https://api-agent.gowsazhjo.net/glms/v1/jackpot", {
                                                    params: {
                                                        _: (new Date).getTime()
                                                    },
                                                    progress: !1
                                                });
                                            case 2:
                                                return n = e.sent, r = {}, "OK" === n.status && (data = n.data[0], Object.keys(data).forEach((function(t) {
                                                    var e = t.replace("_", ""),
                                                        n = 0;
                                                    Object.keys(data[t]).forEach((function(e) {
                                                        var r = parseInt(data[t][e], 10);
                                                        n < r && (n = r)
                                                    })), r[e] = n
                                                }))), e.abrupt("return", {
                                                    code: 200,
                                                    status: "OK",
                                                    data: r
                                                });
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            }
                        }
                    },
                    hotmatchApi: function(t) {
                        return {
                            index: function() {
                                return t.$get("".concat("/api/v1", "/hotmatch/getMatch"), {
                                    progress: !1
                                })
                            }
                        }
                    },
                    freeSpinApi: function(t) {
                        return {
                            index: function() {
                                return t.$get("".concat("/api/v1", "/freespin"), {
                                    progress: !1
                                })
                            }
                        }
                    },
                    lodeApi: function(t) {
                        return {
                            getCities: function(e) {
                                return t.$get("https://api-sg.quayso.club/lotte/cities", {
                                    params: e
                                })
                            },
                            getResults: function(e) {
                                return t.$get("https://api-sg.quayso.club/lotte/results", {
                                    params: e
                                })
                            }
                        }
                    },
                    eventApi: function(t) {
                        return {
                            flipCard: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                return t.$post("".concat("/noel", "/flip-card?t=").concat(10 * Math.random()), {
                                    position: e
                                }, {
                                    progress: !1
                                })
                            },
                            getTopBetNoel: function() {
                                return t.$get("".concat("/noel", "/top-bet?t=").concat(10 * Math.random()), {
                                    progress: !1
                                })
                            },
                            getTopBetUser: function() {
                                return t.$get("".concat("/noel", "/noel-event?t=").concat(10 * Math.random()), {
                                    progress: !1
                                })
                            },
                            getListUserBetting: function() {
                                return t.$get("".concat("/noel", "/user-betting?t=").concat(10 * Math.random()), {
                                    progress: !1
                                })
                            },
                            getTotalJackpot: function() {
                                return t.$get("".concat("/noel", "/jackpot?t=").concat(10 * Math.random()), {
                                    progress: !1
                                })
                            }
                        }
                    }
                },
                Oe = function(t, e) {
                    Object.keys(Te).forEach((function(n) {
                        e(n, Te[n](t.$axios))
                    }))
                },
                Le = function(t, e) {
                    var n = t.app.$gtm;
                    e("tracking", (function(data) {
                        n && n.push(data)
                    })), e("trackingResponse", (function() {}))
                },
                Se = n(299),
                Ee = n(300),
                Ae = n.n(Ee);
            c.default.use(Se.a, {
                preLoad: 1.3,
                error: "/assets/img/loading.jpg",
                loading: "/assets/img/loading.jpg",
                attempt: 1
            }), c.default.use(Ae.a, {
                name: "v-touch"
            });
            var Re = n(301);
            c.default.component("date-picker", Re.a);
            var je = n(63),
                Be = n.n(je),
                Me = function(t, e) {
                    var n = t.app,
                        r = t.route,
                        o = t.env;
                    if ("fishing" !== r.name) {
                        e("openLiveChat", (function() {
                            c(), "function" == typeof window.LC_API.open_chat_window ? (window.LC_API.open_chat_window(), Be()("#chat-widget-container").addClass("support-box--mb")) : (Be()(".support--js").addClass("support--js-load"), window.LC_API.on_after_load = function() {
                                var t = setInterval((function() {
                                    "function" == typeof window.LC_API.on_after_load && (window.LC_API.open_chat_window(), Be()("#chat-widget-container").addClass("support-box--mb"), Be()(".support--js").removeClass("support--js-load"), clearInterval(t))
                                }), 100)
                            })
                        })), n.$device.isMobileOrTablet || "0" !== o.LIVECHAT_MAINTAIN || document.addEventListener("mousemove", c)
                    }

                    function c() {
                        if (!n.store.state.livechatMBLoaded) {
                            n.store.commit("mutate", {
                                property: "livechatMBLoaded",
                                with: !0
                            });
                            var t = document.createElement("script");
                            t.type = "text/javascript", t.defer = !0, t.src = "".concat("https:" === document.location.protocol ? "https://" : "http://", "cdn.livechatinc.com/tracking.js");
                            var s = document.getElementsByTagName("script")[0];
                            s.parentNode.insertBefore(t, s),
                                function(t, e) {
                                    var n = t.app,
                                        r = (t.route, n.store.state.user),
                                        o = null !== r ? [{
                                            name: "Login",
                                            value: r.username
                                        }, {
                                            name: "Desc",
                                            value: "Đang đăng nhập"
                                        }, {
                                            name: "is_login",
                                            value: "yes"
                                        }, {
                                            name: "is_deposit",
                                            value: "yes"
                                        }, {
                                            name: "Balance",
                                            value: r.balance
                                        }] : [{
                                            name: "Login",
                                            value: "guest"
                                        }, {
                                            name: "Desc",
                                            value: "Chưa đăng nhập"
                                        }, {
                                            name: "is_login",
                                            value: "no"
                                        }, {
                                            name: "is_deposit",
                                            value: "no"
                                        }];
                                    window.__lc = window.__lc || {}, window.__lc.license = 12252498, window.__lc.params = o, window.LC_API = window.LC_API || {}, window.LC_API.on_after_load = function() {
                                        if (n.store.commit("mutate", {
                                                property: "livechatLoaded",
                                                with: !0
                                            }), window.innerWidth <= 992) var t = setInterval((function() {
                                            window.LC_API.chat_window_minimized() && (window.LC_API.hide_chat_window(), clearInterval(t))
                                        }), 100)
                                    }, "mobile" === n.store.state.device && (Be()("#chat-widget-container").hide(), window.LC_API.on_chat_window_minimized = function() {
                                        window.LC_API.hide_chat_window()
                                    })
                                }({
                                    app: n,
                                    route: r
                                })
                        }
                    }
                };

            function Ie(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function Ne(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Ie(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ie(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            c.default.component(h.a.name, h.a), c.default.component(f.a.name, Ne(Ne({}, f.a), {}, {
                render: function(t, e) {
                    return f.a._warned || (f.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), f.a.render(t, e)
                }
            })), c.default.component(x.name, x), c.default.component("NChild", x), c.default.component(A.name, A), c.default.use(l.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var De = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            };

            function Pe(t) {
                return Ue.apply(this, arguments)
            }

            function Ue() {
                return (Ue = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                    var n, r, o, l, m, h, path, d;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, k();
                            case 2:
                                return n = t.sent, (r = G(e)).$router = n, o = r.registerModule, r.registerModule = function(path, t, e) {
                                    return o.call(r, path, t, Object.assign({
                                        preserveState: !0
                                    }, e))
                                }, l = Ne({
                                    head: {
                                        title: "FCB8",
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            name: "apple-mobile-web-app-capable",
                                            content: "no"
                                        }, {
                                            hid: "apple-mobile-web-app-status-bar-style",
                                            name: "apple-mobile-web-app-status-bar-style",
                                            content: "black"
                                        }, {
                                            name: "apple-mobile-web-app-title",
                                            content: "FCB8"
                                        }, {
                                            hid: "description",
                                            content: "FCB8"
                                        }, {
                                            name: "author",
                                            content: "FCB8"
                                        }, {
                                            name: "google-site-verification",
                                            content: "lVtYWRGVZtAtOnJo_aOjS8gQVCzxPo6RoQo78rwZMHA"
                                        }, {
                                            rel: "alternate",
                                            href: "https://fcb8.fun/",
                                            hreflang: "vi-vn"
                                        }, {}],
                                        link: [{
                                            rel: "icon",
                                            type: "image/svg",
                                            href: "/assets/img/favicon.svg"
                                        }],
                                        script: [{
                                            type: "application/ld+json",
                                            innerHTML: '{"@context":"https://schema.org","@type":"EntertainmentBusiness","name":"Nhà Cái FCB8","alternateName":"Nhà cái cá cược bóng đá uy tín, nhà cái thể thao và casino số 1 đẳng cấp Châu Âu – FCB8","logo":"https://fc1.fcb88d.com/fcstatic/assets/img/logo.webp","image":"https://fc1.fcb88d.com/fcstatic/assets/img/logo.webp","description":"FCB8 - Nhà cái bóng đá, cá cược cá độ bóng đá và thể thao, casino online uy tín số 1 hàng đầu Châu Âu. Thưởng nạp lần đầu 100% lên đến 10Tr khi tham gia cá cược tại nhà cái FCB8 hợp pháp và an toàn.","hasMap":"https://www.google.com/maps/place/65+T%C3%B4+K%C3%BD,+T%C3%A2n+H%C6%B0ng+Thu%E1%BA%ADn,+Qu%E1%BA%ADn+12,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8532182,106.62581,19.5z/data=!4m5!3m4!1s0x31752a212b2ea267:0xf2834dabf6d584f3!8m2!3d10.8532153!4d106.6260413?hl=vi-VN","url":"https://fcb8.fun/","telephone":"+84366996789","priceRange":0,"address":{"@type":"PostalAddress","streetAddress":"65 Tô Ký","addressLocality":"Hóc Môn","addressRegion":"Hồ Chí Minh","postalCode":"700000","addressCountry":"Việt Nam"},"geo":{"@type":"GeoCoordinates","latitude":10.8776,"longitude":106.60933},"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"},"sameAs":["https://www.linkedin.com/in/fcb8com","https://www.reddit.com/user/fcb8com","https://www.plurk.com/fcb8com","http://www.tagged.com/fcb8com","https://getpocket.com/@33bp7T66Ab103dr45cg6dtOg96deA36f1f8A5cW35dj61bH2271f9Q02q55ARd31","https://soundcloud.com/fcb8com","https://www.pinterest.com/fcb8com/","https://www.instapaper.com/p/8342824","https://list.ly/fcb8com/lists","https://philpeople.org/profiles/nha-cai-fcb8","http://www.hi5.com/fcb8com","https://www.bibsonomy.org/user/fcb8com","https://www.slideshare.net/NhaCaiFCB8","https://dribbble.com/fcb8com/about","https://bbpress.org/forums/profile/fcb8com/","http://www.23hq.com/fcb8com","https://www.facebook.com/fcb8com","https://twitter.com/fcb8com","https://fcb8com.tumblr.com/","https://profiles.wordpress.org/fcb8com/","https://www.rslsoapbox.com/users/fcb8com","https://www.instagram.com/fcb8com","https://www.blogger.com/profile/09294651129639005462","https://angel.co/u/fcb8com","https://vi.gravatar.com/nhacaifcb8","https://www.ebay.com/usr/nhafc_0","https://www.goodreads.com/fcb8com","https://500px.com/p/fcb8com?","https://www.strava.com/athletes/fcb8com","https://www.tripadvisor.com.vn/Profile/fcb8com","https://www.ted.com/profiles/23973356/about","https://www.behance.net/fcb8com","https://issuu.com/fcb8com","https://www.youtube.com/channel/UCNsSceeY9UERNtsHtbpcviA/about","https://www.kickstarter.com/profile/fcb8com/about","https://about.me/fcb8com","https://www.scoop.it/topic/nha-cai-fcb8/p/4121297319/2020/10/14/nha-cai-ca-cuoc-bong-a-uy-tin-nha-cai-the-thao-va-casino-so-1-ang-cap-chau-au-fcb8"]}'
                                        }, {
                                            hid: "gtm-script",
                                            innerHTML: "if(!window._gtm_init){window._gtm_init=1;(function (w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-TF3W2XC')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"
                                        }],
                                        style: [],
                                        noscript: [{
                                            hid: "gtm-noscript",
                                            pbody: !0,
                                            innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TF3W2XC&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>'
                                        }],
                                        __dangerouslyDisableSanitizersByTagID: {
                                            "gtm-script": ["innerHTML"],
                                            "gtm-noscript": ["innerHTML"]
                                        }
                                    },
                                    store: r,
                                    router: n,
                                    nuxt: {
                                        defaultTransition: De,
                                        transitions: [De],
                                        setTransitions: function(t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, De, {
                                                    name: t
                                                }) : Object.assign({}, De, t) : De
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(t) {
                                            t = t || null, l.context._errored = Boolean(t), t = t ? Object(_.o)(t) : null;
                                            var n = l.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, P), r.app = l, m = e ? e.next : function(t) {
                                    return l.router.push(t)
                                }, e ? h = n.resolve(e.url).route : (path = Object(_.f)(n.options.base, n.options.mode), h = n.resolve(path).route), t.next = 13, Object(_.s)(l, {
                                    store: r,
                                    route: h,
                                    next: m,
                                    error: l.nuxt.error.bind(l),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    ssrContext: e
                                });
                            case 13:
                                d = function(t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    l[t = "$" + t] = e, r[t] = l[t];
                                    var n = "__nuxt_" + t + "_installed__";
                                    c.default[n] || (c.default[n] = !0, c.default.use((function() {
                                        Object.prototype.hasOwnProperty.call(c.default, t) || Object.defineProperty(c.default.prototype, t, {
                                            get: function() {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, window.__NUXT__ && window.__NUXT__.state && r.replaceState(window.__NUXT__.state), t.next = 18;
                                break;
                            case 18:
                                return t.next = 21, pt(l.context, d);
                            case 21:
                                t.next = 24;
                                break;
                            case 24:
                                return t.next = 27, vt(l.context, d);
                            case 27:
                                return t.next = 30, At(l.context, d);
                            case 30:
                                return t.next = 33, Ht(l.context, d);
                            case 33:
                                return t.next = 36, Kt(l.context, d);
                            case 36:
                                return t.next = 39, Wt(l.context);
                            case 39:
                                if ("function" != typeof Xt.a) {
                                    t.next = 42;
                                    break
                                }
                                return t.next = 42, Object(Xt.a)(l.context, d);
                            case 42:
                                return t.next = 45, Zt(l.context);
                            case 45:
                                t.next = 48;
                                break;
                            case 48:
                                return t.next = 51, Oe(l.context, d);
                            case 51:
                                return t.next = 54, Le(l.context, d);
                            case 54:
                                t.next = 57;
                                break;
                            case 57:
                                t.next = 60;
                                break;
                            case 60:
                                return t.next = 63, Me(l.context, d);
                            case 63:
                                t.next = 66;
                                break;
                            case 66:
                                return t.abrupt("return", {
                                    store: r,
                                    app: l,
                                    router: n
                                });
                            case 67:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        132: function(t) {
            t.exports = JSON.parse('{"localhost:3000":{"HOST":"localhost.com","HOME_URL":"http://localhost:3000","STATIC_URL":"http://localhost:3000","GAME_URL":"http://localhost:3001/api/play","IMAGE_URL":"http://localhost:3000","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"},"dev.fcb8.com":{"HOST":"dev.fcb8.com","HOME_URL":"https://dev.fcb8.com","STATIC_URL":"https://fc1.fcb88d.com/fcstatic","GAME_URL":"https://dev.fcb8.com/api/play","IMAGE_URL":"https://fc1.fcb88d.com/fcstatic","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"},"fcb8.com":{"HOST":"fcb8.com","HOME_URL":"https://fcb8.com","STATIC_URL":"https://fc1.fcb88d.com/fcstatic","GAME_URL":"https://fcb8.com/api/play","IMAGE_URL":"https://fc1.fcb88d.com/fcstatic","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"},"dev05.fcb8.com":{"HOST":"dev05.fcb8.com","HOME_URL":"https://dev05.fcb8.com","STATIC_URL":"https://dev05.fcb8.com","GAME_URL":"https://dev05.fcb8.com/api/play","IMAGE_URL":"https://dev05.fcb8.com","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"},"tictoc.mooo.com":{"HOST":"tictoc.mooo.com","HOME_URL":"http://tictoc.mooo.com","STATIC_URL":"http://tictoc.mooo.com","GAME_URL":"http://localhost:3001/api/play","IMAGE_URL":"http://tictoc.mooo.com","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"},"tictoc-event.mooo.com":{"HOST":"tictoc-event.mooo.com","HOME_URL":"http://tictoc-event.mooo.com","STATIC_URL":"http://tictoc-event.mooo.com","GAME_URL":"http://localhost:3001/api/play","IMAGE_URL":"http://tictoc-event.mooo.com","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"},"192.168.1.4:3000":{"HOST":"192.168.1.4","HOME_URL":"http://192.168.1.4:3000","STATIC_URL":"http://192.168.1.4:3000","GAME_URL":"http://localhost:3001/api/play","IMAGE_URL":"http://192.168.1.4:3000","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"},"fcb8.fun":{"HOST":"fcb8.fun","HOME_URL":"https://fcb8.fun","STATIC_URL":"https://fc1.fcb88d.com/fcstatic","GAME_URL":"https://fcb8.fun/api/play","IMAGE_URL":"https://fc1.fcb88d.com/fcstatic","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"},"fcb8.vip":{"HOST":"fcb8.vip","HOME_URL":"https://fcb8.vip","STATIC_URL":"https://fc1.fcb88d.com/fcstatic","GAME_URL":"https://fcb8.vip/api/play","IMAGE_URL":"https://fc1.fcb88d.com/fcstatic","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"},"fcb8.club":{"HOST":"fcb8.club","HOME_URL":"https://fcb8.club","STATIC_URL":"https://fc1.fcb88d.com/fcstatic","GAME_URL":"https://fcb8.club/api/play","IMAGE_URL":"https://fc1.fcb88d.com/fcstatic","BO_IMAGE_URL":"https://fc2.fcb88d.com/imgfc"}}')
        },
        190: function(t, e, n) {
            "use strict";
            (function(t) {
                n(46), n(45);
                var r = n(309),
                    o = n(310),
                    c = n(311),
                    l = n(312),
                    m = n(303),
                    h = n(285),
                    d = n(313),
                    f = n(304),
                    v = n(305),
                    _ = n(306),
                    w = n(307),
                    y = n(308);
                e.a = {
                    middleware: "maintain",
                    components: {
                        Appheader: l.a,
                        Appfooter: m.a,
                        AppIframe: h.a,
                        menuMobile: r.a,
                        navMobile: o.a,
                        userMobile: c.a,
                        miniGame: d.a,
                        modalForgotPassword: f.a,
                        modalTranferWallet: w.a,
                        livechatMaintain: y.a,
                        modalDomainChange: v.a,
                        modalWarning: _.a
                    },
                    head: function() {
                        return {
                            link: [{
                                rel: "canonical",
                                href: "the-loai-slug-page" === this.$route.name ? "".concat(this.$store.state.mapDomain.HOME_URL, "/the-loai/").concat(this.$route.params.slug) : this.$store.state.mapDomain.HOME_URL + this.$route.fullPath
                            }],
                            __dangerouslyDisableSanitizers: ["script"],
                            script: [{
                                src: "https://unpkg.com/swipe-up@1.2.16/dist/swipe-up.js",
                                defer: !0,
                                body: !0
                            }, {
                                src: "https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.42/polyfill.min.js",
                                defer: !0,
                                body: !0
                            }, {
                                src: "https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.3/howler.min.js",
                                defer: !0,
                                body: !0
                            }, {
                                src: "https://games.mt-sta.com/ktmn5998b/src/settings.js",
                                defer: !0,
                                body: !0
                            }, {
                                src: "https://games.mt-sta.com/ktmn5998b/lib/common.js",
                                defer: !0,
                                body: !0
                            }, {
                                src: "https://games.mt-sta.com/ktmn5998b/main.js",
                                defer: !0,
                                body: !0
                            }],
                            title: this.$te("meta.".concat(this.$route.name, ".title")) ? this.$t("meta.".concat(this.$route.name, ".title")) : this.formatRouteName(),
                            meta: [{
                                name: "viewport",
                                content: "width=device-width, initial-scale=1.0, maximum-scale=1.0"
                            }, {
                                hid: "description",
                                name: "description",
                                content: this.$te("meta.".concat(this.$route.name, ".description")) ? this.$t("meta.".concat(this.$route.name, ".description")) : this.formatRouteName()
                            }, {
                                hid: "keywords",
                                name: "keywords",
                                content: this.$te("meta.".concat(this.$route.name, ".keywords")) ? this.$t("meta.".concat(this.$route.name, ".keywords")) : ""
                            }, {
                                name: "google",
                                content: "notranslate"
                            }],
                            bodyAttrs: {
                                class: "scrollbar",
                                ref: "body"
                            }
                        }
                    },
                    data: function() {
                        return {
                            hidden: !1
                        }
                    },
                    computed: {
                        livechatMaintain: function() {
                            return "0"
                        },
                        user: function() {
                            return this.$store.state.user
                        },
                        hideHeader: function() {
                            return !!this.$route && ("maintain" === this.$route.name || "event-noel" === this.$route.name && this.$isMobile())
                        },
                        hideFooter: function() {
                            return !!this.$route && ("maintain" === this.$route.name || "lottery" === this.$route.name || "lottery-sexy" === this.$route.name || "lode-dai-cat" === this.$route.name || "lode-sieu-toc" === this.$route.name || "lode-3-mien" === this.$route.name || "keno" === this.$route.name || "number-game" === this.$route.name || "esport" === this.$route.name || "asport" === this.$route.name || "virtual-sports" === this.$route.name || "esports" === this.$route.name || "ksport" === this.$route.name || "olympic" === this.$route.name || "match" === this.$route.name || "event-noel" === this.$route.name && this.$isMobile())
                        },
                        showIframe: function() {
                            return !!this.$route && ("lottery" === this.$route.name || "lottery" === this.$route.name || "lottery-sexy" === this.$route.name || "lode-dai-cat" === this.$route.name || "lode-sieu-toc" === this.$route.name || "lode-3-mien" === this.$route.name || "keno" === this.$route.name || "number-game" === this.$route.name || "esport" === this.$route.name || "asport" === this.$route.name || "virtual-sports" === this.$route.name || "esports" === this.$route.name || "ksport" === this.$route.name || "olympic" === this.$route.name || "match" === this.$route.name)
                        }
                    },
                    watch: {
                        $route: function(t, e) {
                            this.$Swal.close(), this.hiddenFooter()
                        }
                    },
                    methods: {
                        hiddenFooter: function() {
                            window.innerWidth <= 768 && ("user-deposit" === this.$route.name || "user-withdraw" === this.$route.name ? this.hidden = !0 : this.hidden = !1)
                        },
                        showLiveChatMaintain: function() {
                            this.$showPopupById("livechatMaintain")
                        },
                        openLiveChat: function() {
                            "1" === this.livechatMaintain ? this.$showPopupById("livechatMaintain") : this.$openLiveChat()
                        },
                        resizeMobile: function(e) {
                            e && e.target.innerHeight <= 406 && e.target.isSafari ? t("body").addClass("small--height") : t("body").removeClass("small--height")
                        },
                        loadMobile: function(e) {
                            e && e.currentTarget.iOS && t(".main-content").addClass("mobile--ios")
                        },
                        scrollTop: function() {
                            var t = this;
                            this.intervalId = setInterval((function() {
                                0 === window.pageYOffset && clearInterval(t.intervalId), window.scroll(0, window.pageYOffset - 50)
                            }), 10)
                        },
                        scrollListener: function() {
                            window.scrollY > 800 ? t(".backtop").addClass("show") : t(".backtop").removeClass("show");
                            var e = t(document).height();
                            (e - (t(window).height() + t(window).scrollTop())) / e == 0 ? t("body").addClass("isScrollBottom") : t("body").removeClass("isScrollBottom")
                        },
                        formatRouteName: function() {
                            var t = this.$route.name;
                            return "".concat(t.replace("-", " ").replace(/(?:^|\s|["'([{])+\S/g, (function(t) {
                                return t.toUpperCase()
                            })), " - FCB8")
                        }
                    },
                    beforeCreate: function() {
                        var t = this.$cookies.get("openNewTab");
                        t && 0 === this.$store.state.pwa && (window.open(t, "_blank"), this.$cookies.remove("openNewTab"))
                    },
                    mounted: function() {
                        var t = this;
                        this.$route.query.utm_source ? this.$store.commit("mutate", {
                            property: "utmQuery",
                            with: this.$route.query
                        }) : this.$store.commit("mutate", {
                            property: "utmQuery",
                            with: {}
                        }), null !== this.$store.state.user && this.$store.dispatch("refreshInterval"), "1" === this.livechatMaintain && setTimeout((function() {
                            t.showLiveChatMaintain()
                        }), 2e3), this.$isMobile() && window.addEventListener("resize", this.resizeMobile), window.addEventListener("scroll", this.scrollListener)
                    }
                }
            }).call(this, n(63))
        },
        191: function(t, e, n) {
            "use strict";
            (function(t) {
                n(51);
                var r = n(28);
                e.a = {
                    computed: {
                        user: function() {
                            return this.$store.state.user
                        },
                        currentTab: function() {
                            return this.$store.getters.getCurrentTab
                        }
                    },
                    methods: {
                        onScroll: function() {
                            this.$scrollTo(".account__content", {
                                offset: -52
                            })
                        },
                        onMoveTo: function(link) {
                            this.$cookies.set("backUrl", this.$route.fullPath), this.$router.push(link)
                        },
                        openMenu: function() {
                            t("body").toggleClass("off-canvas-active")
                        },
                        openTranferWallet: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t.$bvModal.show("tranferWalletModal");
                                            try {
                                                t.$store.dispatch("getWallet")
                                            } catch (e) {
                                                t.$alertError(e.message)
                                            }
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                }
            }).call(this, n(63))
        },
        192: function(t, e, n) {
            "use strict";
            (function(t) {
                n(51);
                var r = n(28),
                    o = n(282);
                e.a = {
                    components: {
                        gameSection: o.a
                    },
                    data: function() {
                        return {
                            aboutItem: [{
                                title: "Về Chúng Tôi",
                                link: "/gioi-thieu"
                            }, {
                                title: "Chính Sách Bảo Mật",
                                link: "/chinh-sach-bao-mat"
                            }, {
                                title: "Điều Khoản và Điều Kiện",
                                link: "/dieu-khoan-dieu-kien"
                            }],
                            GuideItem: [{
                                title: "Hướng Dẫn Đăng Ký",
                                link: "/huong-dan/huong-dan-dang-ky"
                            }, {
                                title: "Hướng Dẫn Cá Cược",
                                link: "/huong-dan/huong-dan-ca-cuoc"
                            }, {
                                title: "Hướng Dẫn Nạp Tiền",
                                link: "/huong-dan/huong-dan-nap-tien"
                            }, {
                                title: "Hướng Dẫn Rút Tiền",
                                link: "/huong-dan/huong-dan-rut-tien"
                            }]
                        }
                    },
                    computed: {
                        footer: function() {
                            return this.$t("footer")
                        },
                        user: function() {
                            return this.$store.state.user
                        },
                        locales: function() {
                            return this.$store.state.langs
                        }
                    },
                    methods: {
                        closeMenu: function() {
                            t("#accordion-about").removeClass("show"), t("#accordion-guide").removeClass("show"), t("#accordion-contact").removeClass("show"), t(".accordion-header .title").removeClass("not-collapsed"), t("body").removeClass("off-canvas-active")
                        },
                        goTo: function(t) {
                            this.closeMenu(), this.$router.push(t), this.$fixScrollTo("html")
                        },
                        collapseScroll: function() {
                            var e = this.$refs.boxTop.clientHeight,
                                n = this.$refs.boxMiddle.clientHeight,
                                r = this.$refs.boxBottom.clientHeight;
                            t("#wrapNav").animate({
                                scrollTop: e + n + r
                            }, 700)
                        },
                        logout: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, t.$store.dispatch("logout");
                                        case 3:
                                            e.next = 8;
                                            break;
                                        case 5:
                                            e.prev = 5, e.t0 = e.catch(0), t.$alertError("Server đang bị lỗi! Vui lòng thử lại sau!");
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 5]
                                ])
                            })))()
                        },
                        openLogin: function() {
                            this.closeMenu(), t("body").toggleClass("open-user");
                            var e = t(".user-mobile");
                            e.hasClass("change-form") && e.toggleClass("change-form")
                        },
                        openRegister: function() {
                            this.closeMenu(), t("body").toggleClass("open-user");
                            var e = t(".user-mobile");
                            e.hasClass("change-form") || e.toggleClass("change-form")
                        },
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/assets/img/").concat(t)
                        },
                        onMoveTo: function(link) {
                            this.closeMenu(), this.$router.push(link)
                        }
                    }
                }
            }).call(this, n(63))
        },
        193: function(t, e, n) {
            "use strict";
            (function(t) {
                n(51);
                var r = n(28),
                    o = n(283),
                    c = n(284),
                    l = n(314),
                    m = n(315);
                e.a = {
                    components: {
                        CommissionPromotion: o.a,
                        WelcomePromotion: c.a,
                        loginForm: l.a,
                        registerForm: m.a
                    },
                    data: function() {
                        return {
                            tabs: [{
                                title: "Tài khoản",
                                link: "/user",
                                iconSrc: "/assets/img/icon/icon-edit.svg",
                                iconAlt: "account"
                            }, {
                                title: "Lịch sử giao dịch",
                                link: "/user/history?tab=transaction",
                                iconSrc: "/assets/img/icon/icon-history.svg",
                                iconAlt: "history"
                            }, {
                                title: "Lịch sử cá cược",
                                link: "/user/history?tab=betting",
                                iconSrc: "/assets/img/icon/icon-history.svg",
                                iconAlt: "history"
                            }, {
                                title: "Lịch sử ASPORT",
                                link: "/user/history?tab=asport",
                                iconSrc: "/assets/img/icon/icon-history.svg",
                                iconAlt: "history"
                            }],
                            plan: {}
                        }
                    },
                    computed: {
                        user: function() {
                            return this.$store.state.user
                        },
                        currentTab: function() {
                            return this.$store.getters.getCurrentTab
                        }
                    },
                    methods: {
                        logout: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, t.$store.dispatch("logout");
                                        case 3:
                                            t.formLogin.username = null, t.formLogin.password = null, e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), t.formError = e.t0.message;
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        cancelPromotion: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.swalCancel = t.$alertHtmlConfirmPromation("Hủy Khuyến Mãi", "Khi HỦY KM, tài khoản của Quý khách sẽ còn 0 đồng. Quý khách có muốn hủy khuyến mãi không?").then(function() {
                                                var e = Object(r.a)(regeneratorRuntime.mark((function e(n) {
                                                    var r, o;
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (!n.isDismissed) {
                                                                    e.next = 2;
                                                                    break
                                                                }
                                                                return e.abrupt("return");
                                                            case 2:
                                                                if (!n.isConfirmed) {
                                                                    e.next = 16;
                                                                    break
                                                                }
                                                                return e.next = 5, t.$depositApi.cancelPromotion();
                                                            case 5:
                                                                if (!(r = e.sent) || "OK" !== r.status) {
                                                                    e.next = 15;
                                                                    break
                                                                }
                                                                return e.next = 9, t.$userApi.index();
                                                            case 9:
                                                                o = e.sent, t.plan = o.plan, t.$alert("Huỷ khuyến mãi thành công"), window.location.reload(), e.next = 16;
                                                                break;
                                                            case 15:
                                                                r && r.message ? t.$alertError(r.message) : t.$alertError("Có lỗi khi huỷ khuyến mãi. Vui lòng thử lại sau!");
                                                            case 16:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), e.abrupt("return", !1);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getPlan: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.user) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, t.$userApi.index();
                                        case 3:
                                            n = e.sent, t.plan = n.plan;
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        closeSlidebar: function() {
                            t("body").removeClass("open-user")
                        },
                        closeUser: function() {
                            this.messageLoginFail = "", this.closeSlidebar()
                        },
                        resetForm: function(t) {
                            t && "icon-user" === t.target.parentElement.className && this.getPlan()
                        },
                        onMoveTo: function(link) {
                            this.$cookies.get("backUrlPrimari") || this.$cookies.set("backUrlPrimari", this.$route.fullPath), this.$cookies.set("backUrl", this.$route.fullPath), this.closeSlidebar(), this.$router.push(link)
                        },
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/assets/img/").concat(t)
                        },
                        redirectToPromotionPage: function() {
                            this.$router.push("/khuyen-mai"), this.closeSlidebar()
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.getPlan();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), window.addEventListener("click", this.resetForm)
                    },
                    destroyed: function() {
                        window.removeEventListener("click", this.resetForm)
                    }
                }
            }).call(this, n(63))
        },
        194: function(t, e, n) {
            "use strict";
            (function(t) {
                n(21), n(15), n(19), n(18), n(16), n(20);
                var r = n(3),
                    o = (n(51), n(28)),
                    c = n(93),
                    l = n(49);

                function m(object, t) {
                    var e = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(object);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(object, t).enumerable
                        }))), e.push.apply(e, n)
                    }
                    return e
                }

                function h(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? m(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }
                var d = l.helpers.regex("usernameValidation", /^[a-zA-Z0-9_]*$/);
                e.a = {
                    mixins: [c.validationMixin],
                    data: function() {
                        return {
                            messageLoginFail: "",
                            formLogin: {
                                username: "",
                                password: ""
                            },
                            isShowPassword: !1,
                            isSubmit: !1,
                            plan: {}
                        }
                    },
                    validations: {
                        formLogin: {
                            password: {
                                minLength: Object(l.minLength)(6),
                                required: l.required
                            },
                            username: {
                                usernameValidation: d,
                                required: l.required
                            }
                        }
                    },
                    methods: {
                        changeForm: function() {
                            this.messageLoginFail = "", this.clearForm(), t(".user-mobile").toggleClass("change-form")
                        },
                        validateLoginState: function(t) {
                            var e = this.$v.formLogin[t],
                                n = e.$dirty,
                                r = e.$error;
                            return n ? !r : null
                        },
                        handleLogin: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var data;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, t.isSubmit = !0, t.$v.formLogin.$touch(), t.messageLoginFail = "", !t.$v.formLogin.$anyError) {
                                                e.next = 7;
                                                break
                                            }
                                            return t.isSubmit = !1, e.abrupt("return");
                                        case 7:
                                            return e.next = 9, t.$store.dispatch("login", h({}, t.formLogin));
                                        case 9:
                                            if (!(data = e.sent) || "OK" !== data.status) {
                                                e.next = 15;
                                                break
                                            }
                                            return t.isSubmit = !1, t.getPlan(), e.next = 15, t.$store.dispatch("getWallet");
                                        case 15:
                                            if (!data || "OK" === data.status) {
                                                e.next = 19;
                                                break
                                            }
                                            return t.isSubmit = !1, t.messageLoginFail = data.message, e.abrupt("return", !1);
                                        case 19:
                                            e.next = 26;
                                            break;
                                        case 21:
                                            e.prev = 21, e.t0 = e.catch(0), t.formError = e.t0.message, t.isSubmit = !1, t.$alertError("Server đang bị lỗi! Vui lòng thử lại sau!");
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 21]
                                ])
                            })))()
                        },
                        resetForm: function(t) {
                            !t || "icon-user" !== t.target.parentElement.className && "close-user" !== t.target.className || this.clearForm()
                        },
                        getPlan: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.user) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, t.$userApi.index();
                                        case 3:
                                            n = e.sent, t.plan = n.plan;
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        clearForm: function() {
                            this.$v.$reset(), this.formLogin.username = "", this.formLogin.password = ""
                        },
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/assets/img/").concat(t)
                        },
                        closeSlidebar: function() {
                            t("body").removeClass("open-user")
                        },
                        onMoveTo: function(link) {
                            this.closeSlidebar(), this.$router.push(link)
                        }
                    },
                    mounted: function() {
                        window.addEventListener("click", this.resetForm)
                    },
                    destroyed: function() {
                        window.removeEventListener("click", this.resetForm)
                    }
                }
            }).call(this, n(63))
        },
        195: function(t, e, n) {
            "use strict";
            (function(t) {
                n(21), n(15), n(19), n(18), n(16), n(20);
                var r = n(3),
                    o = (n(51), n(28)),
                    c = n(49),
                    l = n(240),
                    m = n.n(l),
                    h = n(130),
                    d = n.n(h),
                    f = n(93);

                function v(object, t) {
                    var e = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(object);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(object, t).enumerable
                        }))), e.push.apply(e, n)
                    }
                    return e
                }

                function _(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? v(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }
                var w = c.helpers.regex("usernameRegex", /^[a-zA-Z0-9_]*$/),
                    y = d.a.CancelToken,
                    C = null;
                e.a = {
                    mixins: [f.validationMixin],
                    data: function() {
                        return {
                            formRegister: {
                                phone: "",
                                username: "",
                                password: "",
                                confirmPassword: "",
                                agree: !1
                            },
                            numberMask: m()({
                                prefix: "",
                                suffix: "",
                                integerLimit: 11,
                                thousandsSeparatorSymbol: "",
                                allowLeadingZeroes: !0
                            }),
                            isSubmit: !1,
                            isShowPassword: !1,
                            isShowPasswordComfirm: !1
                        }
                    },
                    validations: {
                        formRegister: {
                            phone: {
                                required: c.required,
                                maxLength: Object(c.maxLength)(11),
                                minLength: Object(c.minLength)(10)
                            },
                            username: {
                                required: c.required,
                                usernameRegex: w,
                                minLength: Object(c.minLength)(6),
                                maxLength: Object(c.maxLength)(29),
                                isUnique: function(t) {
                                    var e = this;
                                    return Object(o.a)(regeneratorRuntime.mark((function n() {
                                        var r;
                                        return regeneratorRuntime.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    if (!(null === t || t.length < 6 || t.length > 29) && w(t)) {
                                                        n.next = 2;
                                                        break
                                                    }
                                                    return n.abrupt("return", !0);
                                                case 2:
                                                    return C && C.cancel(), C = y.source(), n.prev = 4, n.next = 7, e.$userApi.verifyWithCancel({
                                                        username: t
                                                    }, C);
                                                case 7:
                                                    return r = n.sent, n.abrupt("return", !r.exist);
                                                case 11:
                                                    return n.prev = 11, n.t0 = n.catch(4), n.abrupt("return", !0);
                                                case 14:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n, null, [
                                            [4, 11]
                                        ])
                                    })))()
                                }
                            },
                            password: {
                                required: c.required,
                                maxLength: Object(c.maxLength)(32),
                                minLength: Object(c.minLength)(6)
                            },
                            confirmPassword: {
                                required: c.required,
                                sameAsPassword: Object(c.sameAs)("password")
                            }
                        }
                    },
                    methods: {
                        register: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var data;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, t.$v.$touch(), t.isSubmit = !0, t.$v.$invalid) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 6, t.$store.dispatch("register", _({}, t.formRegister));
                                        case 6:
                                            (data = e.sent) && "OK" === data.status ? (t.isSubmit = !1, t.$alert("Đăng ký tài khoản thành công !"), t.$v.$reset(), t.formRegister.phone = "", t.formRegister.username = "", t.formRegister.password = "", t.formRegister.confirmPassword = "", setTimeout((function() {
                                                t.$Swal.close()
                                            }), 1500)) : (t.isSubmit = !1, t.$alertError(data.message)), e.next = 11;
                                            break;
                                        case 10:
                                            t.isSubmit = !1;
                                        case 11:
                                            e.next = 18;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(0), t.formError = e.t0.message, t.isSubmit = !1, t.$alertError(e.t0.message);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 13]
                                ])
                            })))()
                        },
                        changeForm: function() {
                            this.clearForm(), t(".user-mobile").toggleClass("change-form")
                        },
                        resetForm: function(t) {
                            !t || "icon-user" !== t.target.parentElement.className && "close-user" !== t.target.className || this.clearForm()
                        },
                        clearForm: function() {
                            this.$v.$reset(), this.formRegister.phone = "", this.formRegister.username = "", this.formRegister.password = "", this.formRegister.confirmPassword = ""
                        }
                    },
                    mounted: function() {
                        window.addEventListener("click", this.resetForm)
                    },
                    destroyed: function() {
                        window.removeEventListener("click", this.resetForm)
                    }
                }
            }).call(this, n(63))
        },
        196: function(t, e, n) {
            "use strict";
            (function(t) {
                n(21), n(15), n(19), n(18), n(16), n(20);
                var r = n(3),
                    o = (n(51), n(28)),
                    c = (n(45), n(49)),
                    l = n(93),
                    m = n(316);

                function h(object, t) {
                    var e = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(object);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(object, t).enumerable
                        }))), e.push.apply(e, n)
                    }
                    return e
                }

                function d(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? h(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }
                e.a = {
                    mixins: [l.validationMixin],
                    components: {
                        headerMenu: m.a
                    },
                    data: function() {
                        return {
                            formData: {
                                username: "",
                                password: ""
                            },
                            errors: {},
                            isModalVisible: !1,
                            isSubmit: !1,
                            swalCancel: null,
                            toggleActive: !1,
                            isShowPassword: !1,
                            messageLoginFail: ""
                        }
                    },
                    validations: {
                        formData: {
                            password: {
                                minLength: Object(c.minLength)(6),
                                required: c.required
                            },
                            username: {
                                required: c.required
                            }
                        }
                    },
                    watch: {
                        toggleActive: function(t) {
                            t || (this.formData.username = "", this.formData.password = "")
                        }
                    },
                    computed: {
                        user: function() {
                            return this.$store.state.user
                        },
                        currentTab: function() {
                            return this.$store.getters.getCurrentTab
                        }
                    },
                    methods: {
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/").concat(t)
                        },
                        openMenu: function() {
                            t("body").toggleClass("off-canvas-active")
                        },
                        openUser: function() {
                            t("body").toggleClass("open-user")
                        },
                        setSeo: function(t) {
                            return this.$te("meta.".concat(this.$route.name)) ? this.$t("meta.".concat(this.$route.name, ".").concat(t)) : this.$t("meta.all.".concat(t))
                        },
                        resetForm: function() {
                            this.formData.username = "", this.formData.password = ""
                        },
                        routeTo: function(t) {
                            this.$router.push(t)
                        },
                        logout: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.toggleActive = !1, e.next = 4, t.$store.dispatch("logout");
                                        case 4:
                                            t.resetForm(), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), t.$alertError("Server đang bị lỗi! Vui lòng thử lại sau!"), t.formError = e.t0.message;
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        login: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var data;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, t.$v.$touch(), t.isSubmit = !0, t.$v.$invalid) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 6, t.$store.dispatch("login", d({}, t.formData));
                                        case 6:
                                            if ((data = e.sent) && "OK" === data.status && (t.isSubmit = !1, t.toggleActive = !1, t.$store.dispatch("getWallet")), !data || "OK" === data.status) {
                                                e.next = 12;
                                                break
                                            }
                                            return t.isSubmit = !1, t.messageLoginFail = data.message, e.abrupt("return", !1);
                                        case 12:
                                            e.next = 15;
                                            break;
                                        case 14:
                                            t.isSubmit = !1;
                                        case 15:
                                            e.next = 22;
                                            break;
                                        case 17:
                                            e.prev = 17, e.t0 = e.catch(0), t.formError = e.t0.message, t.isSubmit = !1, t.$alert("Server đang bị lỗi! Vui lòng thử lại sau!");
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 17]
                                ])
                            })))()
                        },
                        openTranferWallet: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t.$bvModal.show("tranferWalletModal");
                                            try {
                                                t.$store.dispatch("getWallet")
                                            } catch (e) {
                                                t.$alertError(e.message)
                                            }
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        hidePopupLogin: function() {
                            this.toggleActive && (this.messageLoginFail = "", this.toggleActive = !this.toggleActive, this.$v.$reset())
                        },
                        redirectRegisterPage: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.$router, e.next = 3, t.hidePopupLogin();
                                        case 3:
                                            n.push("/register");
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    },
                    mounted: function() {
                        window.addEventListener("mouseenter", this.showMenuSub)
                    },
                    directives: {
                        "click-outside": {
                            bind: function(t, e, n) {
                                t.eventSetDrag = function() {
                                    t.setAttribute("data-dragging", "yes")
                                }, t.eventClearDrag = function() {
                                    t.removeAttribute("data-dragging")
                                }, t.eventOnClick = function(r) {
                                    var o = t.getAttribute("data-dragging");
                                    t == r.target || t.contains(r.target) || o || n.context[e.expression](r)
                                }, document.addEventListener("touchstart", t.eventClearDrag), document.addEventListener("touchmove", t.eventSetDrag), document.addEventListener("click", t.eventOnClick), document.addEventListener("touchend", t.eventOnClick)
                            },
                            unbind: function(t) {
                                document.removeEventListener("touchstart", t.eventClearDrag), document.removeEventListener("touchmove", t.eventSetDrag), document.removeEventListener("click", t.eventOnClick), document.removeEventListener("touchend", t.eventOnClick), t.removeAttribute("data-dragging")
                            }
                        }
                    }
                }
            }).call(this, n(63))
        },
        197: function(t, e, n) {
            "use strict";
            (function(t) {
                n(177);
                e.a = {
                    props: ["currentTab"],
                    components: {},
                    data: function() {
                        return {
                            menus: [{
                                title: "Sports",
                                link: "/sports",
                                loginRequired: !1,
                                label: "",
                                type: "LOBBY",
                                subMenu: [{
                                    icon: "/assets/img/games/icon-ksport.svg",
                                    title: "K-Sports (Ví Chính)",
                                    link: "/ksport",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    type: "GAME"
                                }, {
                                    icon: "/assets/img/games/football.svg",
                                    title: "C-Sports (Ví Chính)",
                                    link: "/esport",
                                    loginRequired: !0,
                                    newTab: !0,
                                    label: "",
                                    fixIcon: !1,
                                    type: "GAME"
                                }, {
                                    icon: "/assets/img/games/cup.svg",
                                    title: "M-Sports (Ví Phụ)",
                                    link: "/asport",
                                    loginRequired: !1,
                                    fixIcon: !1,
                                    label: "",
                                    type: "GAME"
                                }]
                            }, {
                                title: "Virtual Sports",
                                link: "/virtual-sports",
                                loginRequired: !1,
                                label: "",
                                type: "GAME"
                            }, {
                                title: "E-Sports",
                                link: "/esports",
                                loginRequired: !0,
                                label: "",
                                type: "GAME"
                            }, {
                                title: "Games Center",
                                link: "/games",
                                loginRequired: !1,
                                label: this.$LABEL_TYPE.NEW,
                                type: "LOBBY",
                                subMenu: [{
                                    title: "Bắn Cá",
                                    link: "/games?type=fishing",
                                    loginRequired: !1,
                                    label: this.$LABEL_TYPE.HOT,
                                    fixIcon: !1,
                                    icon: "/assets/img/games/fish.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Sexy Slots",
                                    link: "/games?type=sexy_slots",
                                    loginRequired: !1,
                                    label: this.$LABEL_TYPE.HOT,
                                    fixIcon: !0,
                                    icon: "/assets/img/games/slots-sexy.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Game Bài",
                                    link: "/games?type=gamebai",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/games/game-bai.png",
                                    type: "LOBBY"
                                }, {
                                    title: "Quay Số",
                                    link: "/games?type=lottery",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/games/lottery.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Table Games",
                                    link: "/games?type=tables",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/games/table-game.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Numbers Game",
                                    link: "/number-game",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/games/number-game.svg",
                                    type: "GAME"
                                }, {
                                    title: "Slots",
                                    link: "/games?type=slots",
                                    loginRequired: !1,
                                    label: this.$LABEL_TYPE.NEW,
                                    fixIcon: !1,
                                    icon: "/assets/img/games/slots.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Thần Số",
                                    link: "/games?type=spribe",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/games/than-so.png",
                                    type: "GAME"
                                }, {
                                    title: "Lô Đề",
                                    link: "/lode",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/games/lode.svg",
                                    type: "GAME"
                                }, {
                                    title: "Ingame",
                                    link: "/games?type=ingame",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/games/ingame.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Battle Games",
                                    link: "/games?type=battle",
                                    loginRequired: !1,
                                    label: this.$LABEL_TYPE.NEW,
                                    fixIcon: !1,
                                    icon: "/assets/img/games/battle-menu.svg",
                                    type: "GAME"
                                }, {
                                    title: "Keno",
                                    link: "/keno",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/games/keno.svg",
                                    type: "GAME"
                                }]
                            }, {
                                title: "Keno",
                                link: "/keno",
                                loginRequired: !1,
                                label: "",
                                type: "GAME"
                            }, {
                                title: "Lô Đề",
                                link: "/lode",
                                loginRequired: !1,
                                label: this.$LABEL_TYPE.NEW,
                                type: "GAME"
                            }, {
                                title: "Numbers Game",
                                link: "/number-game",
                                loginRequired: !1,
                                label: "",
                                type: "GAME"
                            }, {
                                title: " Casino",
                                link: "/livecasino",
                                loginRequired: !1,
                                label: this.$LABEL_TYPE.LIVE,
                                type: "LOBBY",
                                subMenu: [{
                                    title: "Baccarat",
                                    link: "/livecasino?type=baccarat",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/live-casino/baccarat.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Dragon Tiger",
                                    link: "/livecasino?type=dragon_tiger",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/live-casino/dragon-tiger.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Poker",
                                    link: "/livecasino?type=poker",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/live-casino/poker.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Roulette",
                                    link: "/livecasino?type=roulette",
                                    loginRequired: !1,
                                    label: this.$LABEL_TYPE.NEW,
                                    fixIcon: !1,
                                    icon: "/assets/img/live-casino/roulette.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "Blackjack",
                                    link: "/livecasino?type=blackjack",
                                    loginRequired: !1,
                                    label: "",
                                    fixIcon: !1,
                                    icon: "/assets/img/live-casino/blackjack.svg",
                                    type: "LOBBY"
                                }, {
                                    title: "SicBo",
                                    link: "/livecasino?type=sicbo",
                                    loginRequired: !1,
                                    label: this.$LABEL_TYPE.HOT,
                                    fixIcon: !1,
                                    icon: "/assets/img/live-casino/sicbo.svg",
                                    type: "LOBBY"
                                }]
                            }, {
                                title: "FCB8 News",
                                link: "/tin-tuc",
                                loginRequired: !1,
                                label: this.$LABEL_TYPE.HOT,
                                type: "LOBBY"
                            }],
                            menuNoel: {
                                title: "Event",
                                link: "/event/noel",
                                loginRequired: !1,
                                label: this.$LABEL_TYPE.HOT,
                                type: "LOBBY"
                            }
                        }
                    },
                    watch: {},
                    methods: {
                        moveTo: function(t) {
                            "/esports" === t.link ? this.$openEsports() : this.$openLink(t.link, {
                                loginRequired: t.loginRequired,
                                newTab: t.newTab,
                                type: t.type
                            })
                        },
                        toggleSubMenu: function() {
                            t(".show-sub").hover((function(e) {
                                t(e.currentTarget).addClass("hover")
                            }), (function(e) {
                                t(e.currentTarget).removeClass("hover")
                            }))
                        }
                    },
                    mounted: function() {
                        this.$isEnableThemeNoel() && this.menus.push(this.menuNoel), this.toggleSubMenu()
                    }
                }
            }).call(this, n(63))
        },
        198: function(t, e, n) {
            "use strict";
            (function(t) {
                n(45);
                e.a = {
                    head: function() {
                        return {}
                    },
                    data: function() {
                        return {
                            loaded: !1
                        }
                    },
                    computed: {
                        iframe: function() {
                            return this.$store.state.iframe
                        },
                        url: function() {
                            return this.$store.state.iframeUrl
                        },
                        bgImage: function() {
                            switch (this.$route.name) {
                                case "lode-dai-cat":
                                case "lode-sieu-toc":
                                case "lode-3-mien":
                                    return "iframe/lode-bg.jpg?v=0";
                                case "keno":
                                    return "iframe/keno-bg.jpg?v=0";
                                case "number-game":
                                    return "iframe/number-game-bg.jpg?v=0";
                                case "lottery":
                                    return "iframe/lottery-bg.jpg?v=0";
                                case "lottery-sexy":
                                    return "iframe/lottery-18-bg.jpg?v=0";
                                case "esports":
                                    return "iframe/esport-bg.jpg?v=0";
                                case "asport-match":
                                case "virtual-sports":
                                case "asport":
                                case "esport":
                                    return "iframe/sport-bg.jpg?v=0";
                                default:
                                    return "bg-body.jpg"
                            }
                        }
                    },
                    watch: {
                        iframe: function(e) {
                            t("#iframe").css({
                                height: e.height
                            }), t("#section-iframe").css({
                                height: "auto"
                            }), this.loaded = e.loaded
                        },
                        url: function(t) {
                            var e = this,
                                iframe = this.$refs["section-iframe"].getElementsByTagName("iframe")[0],
                                n = iframe.cloneNode();
                            n.src = t, this.$refs["iframe-wrapper"].replaceChild(n, iframe), n.onload = function() {
                                "" !== e.url && (e.loaded = !0)
                            }
                        }
                    },
                    methods: {},
                    mounted: function() {
                        this.$nextTick((function() {}))
                    }
                }
            }).call(this, n(63))
        },
        199: function(t, e, n) {
            "use strict";
            (function(t) {
                n(121), n(133), n(51);
                var r = n(28),
                    o = n(317);
                e.a = {
                    components: {
                        miniGameModal: o.a
                    },
                    data: function() {
                        return {
                            orientation: 0,
                            shiftX: 0,
                            shiftY: 0,
                            currentDroppable: null,
                            isClickable: !0,
                            clickTime: 0,
                            scrollable: !0,
                            ball: {
                                ele: null,
                                clickTime: 0,
                                shiftX: 0,
                                shiftY: 0
                            },
                            config: {
                                canDrag: !1,
                                minLeft: 0,
                                maxLeft: 0,
                                minTop: 0,
                                maxTop: 0
                            }
                        }
                    },
                    computed: {
                        tpToken: function() {
                            return this.$store.state.user && this.$store.state.user.tp_token
                        },
                        isLoadingToken: function() {
                            return null !== this.$store.state.user && !this.tpToken
                        }
                    },
                    methods: {
                        openMiniGame: function() {
                            0 !== this.ball.clickTime && new Date - this.ball.clickTime > 150 || (null !== this.$store.state.user ? this.$has50kPromotion() ? this.$alertError("Bạn đang sử dụng khuyến mãi không được chơi game này") : this.tpToken && (this.$store.state.isOpenMiniGame ? this.$store.commit("mutate", {
                                property: "isOpenMiniGame",
                                with: !1
                            }) : (t("body").addClass("showmini"), this.$store.commit("mutate", {
                                property: "isOpenMiniGame",
                                with: !0
                            }), this.$store.commit("mutate", {
                                property: "isOpeningMiniGame",
                                with: !0
                            }))) : this.$alertLoginRequired())
                        },
                        moveAt: function(t, e) {
                            t < this.config.minLeft && (t = this.config.minLeft, this.resetDrag()), t > this.config.maxLeft && (t = this.config.maxLeft, this.resetDrag()), e < this.config.minTop && (e = this.config.minTop, this.resetDrag()), e > this.config.maxTop && (e = this.config.maxTop, this.resetDrag()), this.ball.ele && (this.ball.ele.style.left = "".concat(t, "px"), this.ball.ele.style.top = "".concat(e, "px"))
                        },
                        onMouseMove: function(t) {
                            if (this.config.canDrag) {
                                var e = t.pageX - this.ball.shiftX - window.scrollX,
                                    n = t.pageY - this.ball.shiftY - window.scrollY;
                                this.moveAt(e, n)
                            } else this.resetDrag()
                        },
                        handlerOnmousedown: function(t) {
                            this.ball.clickTime = new Date, this.ball.shiftX = t.clientX - this.ball.ele.getBoundingClientRect().left, this.ball.shiftY = t.clientY - this.ball.ele.getBoundingClientRect().top, this.ball.ele.style.position = "fixed", this.ball.ele.style.zIndex = 1e3, this.config.canDrag = !0
                        },
                        resetDrag: function() {
                            this.config.canDrag = !1
                        },
                        initDrag: function() {
                            if (this.ball.ele = document.getElementById("ball"), this.ball.ele) {
                                var e = t(window).width(),
                                    n = t(window).height();
                                this.config.minLeft = 0, this.config.maxLeft = e - this.ball.ele.clientWidth, this.config.minTop = 0, this.config.maxTop = n - this.ball.ele.clientHeight, this.ball.ele.addEventListener("mousedown", this.handlerOnmousedown), document.addEventListener("mousemove", this.onMouseMove), this.ball.ele.addEventListener("mouseout", this.onMouseMove), this.ball.ele.addEventListener("mouseleave", this.onMouseMove), this.ball.ele.addEventListener("mouseenter", this.onMouseMove), this.ball.ele.addEventListener("mouseup", this.resetDrag), this.ball.ele.ondragstart = function() {
                                    return !1
                                }
                            }
                        },
                        onTouchMove: function(t) {
                            var e = t.touches[0].pageX - this.ball.shiftX - window.scrollX,
                                n = t.touches[0].pageY - this.ball.shiftY - window.scrollY;
                            this.moveAt(e, n)
                        },
                        handlerOnTouchStart: function(t) {
                            var e = this;
                            this.ball.clickTime = new Date;
                            var n = t.touches[0];
                            this.scrollable = !1, this.ball.shiftX = n.clientX - this.ball.ele.getBoundingClientRect().left, this.ball.shiftY = n.clientY - this.ball.ele.getBoundingClientRect().top, this.ball.ele.style.position = "fixed", this.ball.ele.style.zIndex = 1e3, this.ball.ele.addEventListener("touchmove", this.onTouchMove, {
                                passive: !0
                            }), this.ball.ele.ontouchend = function() {
                                e.ball.ele.removeEventListener("touchmove", e.onTouchMove), e.ball.ele.ontouchend = null, e.scrollable = !0
                            }
                        },
                        handlerTouchMoveBody: function(t) {
                            this.scrollable || t.preventDefault()
                        },
                        initResize: function(t) {
                            var e = t.currentTarget.innerWidth,
                                n = t.currentTarget.innerHeight;
                            this.config.minLeft = 0, this.config.maxLeft = e - 60, this.config.minTop = 0, this.config.maxTop = n - 62, this.moveAt(this.config.maxLeft - 20, 70)
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.initDrag(),
                                            function() {
                                                return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone || document.referrer.includes("android-app://")
                                            }() && t.$store.commit("mutate", {
                                                property: "pwa",
                                                with: 1
                                            });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), this.ball.ele = document.getElementById("ball"), this.ball.ele && (this.ball.ele.addEventListener("touchstart", this.handlerOnTouchStart, {
                            passive: !0
                        }), this.ball.ele.ondragstart = function() {
                            return !1
                        }), document.addEventListener("touchmove", this.handlerTouchMoveBody, {
                            passive: !1
                        }), window.addEventListener("orientationchange", this.changeOrientation), window.addEventListener("resize", this.initResize)
                    },
                    updated: function() {
                        this.clickTime = 0
                    },
                    destroyed: function() {
                        window.removeEventListener("orientationchange", this.changeOrientation)
                    }
                }
            }).call(this, n(63))
        },
        200: function(t, e, n) {
            "use strict";
            (function(t) {
                n(51);
                var r = n(28);
                e.a = {
                    data: function() {
                        return {
                            isLoaded: !1,
                            firstTime: !0,
                            modalBC: null,
                            identity: null,
                            progressBar: null,
                            cocos2d: null,
                            dragCanvas: null,
                            canvas: null,
                            config: {
                                canDrag: !1,
                                minLeft: 0,
                                maxLeft: 0,
                                minTop: 0,
                                maxTop: 0
                            }
                        }
                    },
                    computed: {
                        isOpen: function() {
                            return this.$store.state.isOpenMiniGame
                        },
                        user: function() {
                            return this.$store.state.user
                        },
                        isOpenMiniGame: function() {
                            return this.$store.state.isOpenMiniGame
                        }
                    },
                    watch: {
                        isOpen: function(t) {
                            t ? this.loadGame() : this.hideGame()
                        }
                    },
                    methods: {
                        engineLoaded: function() {
                            this.cocos2d && (document.body.removeChild(this.cocos2d), this.cocos2d.removeEventListener("load", this.engineLoaded, !1)), this.isLoaded = !0
                        },
                        handlerBootGame: function() {
                            "100%" === this.progressBar.style.width && (this.modalBC.style.visibility = "visible", window.isOpenGameBC = !0, this.identity && clearInterval(this.identity), this.firstTime = !1, this.$store.commit("mutate", {
                                property: "isOpeningMiniGame",
                                with: !1
                            }))
                        },
                        runGame: function() {
                            var t = document.getElementById("splash");
                            this.progressBar = t.querySelector(".progress-bar span"), this.identity = setInterval(this.handlerBootGame, 10), window.boot()
                        },
                        loadGame: function() {
                            var t = this;
                            if (this.firstTime)
                                if ("undefined" != typeof VConsole && (window.vConsole = new VConsole), this.isLoaded) this.runGame();
                                else var e = setInterval((function() {
                                    t.isLoaded && (t.runGame(), clearInterval(e))
                                }), 10);
                            else window.isOpenGameBC = !0, this.modalBC.style.visibility = "visible", this.$store.commit("mutate", {
                                property: "isOpeningMiniGame",
                                with: !1
                            })
                        },
                        hideGame: function() {
                            t("body").removeClass("showmini"), window.isOpenGameBC = !1, this.modalBC.style.visibility = "hidden", this.$store.commit("mutate", {
                                property: "isOpenMiniGame",
                                with: !1
                            })
                        },
                        moveAt: function(t, e) {
                            t < this.config.minLeft && (t = this.config.minLeft, this.resetDrag()), t > this.config.maxLeft && (t = this.config.maxLeft, this.resetDrag()), e < this.config.minTop && (e = this.config.minTop, this.resetDrag()), e > this.config.maxTop && (e = this.config.maxTop, this.resetDrag()), this.canvas.style.left = "".concat(t, "px"), this.canvas.style.top = "".concat(e, "px")
                        },
                        onMouseMove: function(t) {
                            if (this.config.canDrag) {
                                var e = t.pageX - this.shiftX - window.scrollX,
                                    n = t.pageY - this.shiftY - window.scrollY;
                                this.moveAt(e, n)
                            } else this.resetDrag()
                        },
                        handlerOnmousedown: function(t) {
                            this.shiftX = t.clientX - this.canvas.getBoundingClientRect().left, this.shiftY = t.clientY - this.canvas.getBoundingClientRect().top, this.canvas.style.position = "absolute", this.canvas.style.zIndex = 1e3, this.config.canDrag = !0, this.onMouseMove(t)
                        },
                        resetDrag: function() {
                            this.config.canDrag = !1
                        },
                        initResize: function() {
                            this.cocos2dGame = document.getElementById("Cocos2dGameContainer"), this.cocos2dGame && 0 === this.cocos2dGame.clientHeight && window.location.reload()
                        },
                        renderCocos2d: function() {
                            this.cocos2d = document.createElement("script"), this.cocos2d.async = !0, this.cocos2d.src = "/assets/js/cocos2d-js-min.js", this.cocos2d.addEventListener("load", this.engineLoaded, !1), document.body.appendChild(this.cocos2d)
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.modalBC = document.getElementById("modalBC"), window.mitekGlobalDomain = "https://games.mt-sta.com", window.closeMiniGame = function() {
                            window.location.reload()
                        }, window.hideMiniGame = function() {
                            t.hideGame()
                        }, this.dragCanvas = document.getElementById("dragCanvas"), this.canvas = document.getElementById("canvas"), this.config.minLeft = 0, this.config.maxLeft = window.innerWidth - this.canvas.clientWidth, this.config.minTop = 0, this.config.maxTop = window.innerHeight - this.canvas.clientHeight, this.dragCanvas.addEventListener("mousedown", this.handlerOnmousedown), document.addEventListener("mousemove", this.onMouseMove), this.dragCanvas.addEventListener("mouseout", this.onMouseMove), this.dragCanvas.addEventListener("mouseleave", this.onMouseMove), this.dragCanvas.addEventListener("mouseenter", this.onMouseMove), this.dragCanvas.addEventListener("mouseup", this.resetDrag), this.dragCanvas.ondragstart = function() {
                            return !1
                        }, this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.cocos2d = document.createElement("script"), t.cocos2d.async = !0, t.cocos2d.src = "/assets/js/cocos2d-js-min.js", t.cocos2d.addEventListener("load", t.engineLoaded, !1), document.body.appendChild(t.cocos2d);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))))
                    },
                    destroyed: function() {}
                }
            }).call(this, n(63))
        },
        212: function(t, e, n) {
            "use strict";
            n(154), n(19), n(108), n(134), n(45), n(67), n(68), n(43), n(16), n(15), n(39), n(121), n(133);
            var r = n(12);

            function o(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    m = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        m = !0, o = t
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (m) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var l = window.requestIdleCallback || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                m = window.cancelIdleCallback || function(t) {
                    clearTimeout(t)
                },
                h = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || link.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: r.default.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    m(this.handleId), this.__observed && (h.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        h && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), h.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                            return t.components.default
                        })).filter((function(t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            h.unobserve(this.$el);
                            var t, e = o(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        },
        213: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "c", (function() {
                return o
            })), n.d(e, "d", (function() {
                return c
            })), n.d(e, "e", (function() {
                return l
            })), n.d(e, "b", (function() {
                return m
            }));
            n(67), n(68), n(16), n(46);
            var r = function(t, e) {
                    return "".concat(Intl.NumberFormat("en-US").format(t), " ").concat(e)
                },
                o = function(t) {
                    return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                },
                c = function(t) {
                    return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/Đ/g, "D")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")).replace(/\u02C6|\u0306|\u031B/g, "")).trim()).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ")).replace(/ /g, "")).toUpperCase()
                },
                l = function(t) {
                    return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/Đ/g, "D")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")).replace(/\u02C6|\u0306|\u031B/g, "")).trim()).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ")).toUpperCase()
                },
                m = function(t, e) {
                    var script = document.createElement("script");
                    script.async = !0, script.src = t, e && script.addEventListener("load", e, !1), document && document.body.appendChild(script)
                }
        },
        232: function(t, e, n) {
            "use strict";
            var r = {};
            r.auth = n(345), r.auth = r.auth.default || r.auth, r.maintain = n(346), r.maintain = r.maintain.default || r.maintain, e.a = r
        },
        236: function(t, e, n) {
            "use strict";
            (function(t) {
                n(21), n(15), n(19), n(18), n(16), n(20), n(121), n(133);
                var r = n(3),
                    o = n(318),
                    c = n(92),
                    l = n.n(c),
                    m = n(294);
                n(412);

                function h(object, t) {
                    var e = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(object);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(object, t).enumerable
                        }))), e.push.apply(e, n)
                    }
                    return e
                }

                function d(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? h(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }
                e.a = function(e, n) {
                    var r = e.store,
                        c = e.app,
                        h = {
                            FEATURED: 1,
                            TABLE: 2,
                            SLOT: 3,
                            OTHER: 4,
                            INGAME: 5,
                            LOTTERY: 7,
                            BATTLE: 16,
                            GAMEBAI: 15
                        },
                        f = {
                            TECHPLAY: "vingame"
                        },
                        v = l.a.mixin({
                            toast: !0,
                            showConfirmButton: !1,
                            timer: 2e3,
                            timerProgressBar: !0,
                            position: "top-right",
                            onOpen: function(t) {
                                t.addEventListener("mouseenter", l.a.stopTimer), t.addEventListener("mouseleave", l.a.resumeTimer)
                            }
                        }),
                        _ = function(t) {
                            return v.fire({
                                icon: "error",
                                title: t
                            })
                        },
                        w = function() {
                            c.router.push("/login")
                        };
                    n("hasPromotion", (function() {
                        return !(!r.state.user || !r.state.user.package_id || 1 === r.state.user.package_id)
                    }));
                    n("has50kPromotion", (function() {
                        return !(!r.state.user || !r.state.user.package_id || 4 !== r.state.user.package_id)
                    }));
                    var y = function(t) {
                        return !(!r.state.user || !r.state.user.package_id || 4 !== r.state.user.package_id || -1 !== t.indexOf("ktf1999") || -1 !== t.indexOf("kts")) && (_("Bạn đang sử dụng khuyến mãi không được chơi game này"), !0)
                    };
                    n("scrollToTop", (function(e, n) {
                        var r = t("body").length > 0 ? t("body").height() : 0;
                        c.$scrollTo(e, d(d({}, n), {}, {
                            offset: n && n.offset ? -r + n.offset : -r
                        }))
                    })), n("shuffleArray", (function(t) {
                        for (var i = t.length - 1; i > 0; i--) {
                            var e = Math.floor(Math.random() * (i + 1)),
                                n = t[i];
                            t[i] = t[e], t[e] = n
                        }
                    })), n("fixScrollTo", (function(e, n) {
                        var r = t("#iframe-content").length > 0 ? t("#iframe-content").height() : 0;
                        c.$scrollTo(e, d(d({}, n), {}, {
                            offset: n && n.offset ? -r + n.offset : -r
                        }))
                    })), n("openLink", (function(t, e) {
                        e.type && "LOBBY" !== e.type && y(t) || (e.loginRequired && null == r.state.user ? w() : e.newTab ? window.open(t, "_blank") : c.router.push(t))
                    })), n("openEsports", (function() {
                        var t = "/api/playSport?partnerProvider=im&partnerGameId=esport";
                        if (!y(t)) {
                            null != r.state.user ? window.open(t, "_blank") : w()
                        }
                    })), n("opacity", (function(time, e) {
                        setTimeout((function() {
                            t(e).css("opacity", 1)
                        }), time)
                    })), n("playCasino", (function(t) {
                        if (!y("casino")) {
                            var e = "";
                            null != r.state.user ? r.state.user.package_id && 1 !== r.state.user.package_id ? _("Bạn đang sử dụng khuyến mãi không được chơi Live casino") : (e || (e = "/api/playCasino?partnerCode=".concat(t.partner, "&partnerGameId=").concat(t.partner_game_id)), window.open(e, "_blank")) : w()
                        }
                    })), n("Swal", l.a), n("vueSwal", (function(t) {
                        l.a.fire(t)
                    })), n("alert", (function(t) {
                        return v.fire({
                            icon: "success",
                            title: t
                        })
                    })), n("alertError", _), n("alertHtmlErrorLogin", (function(t) {
                        return l.a.fire(d({
                            title: "LỖI ĐĂNG NHẬP",
                            html: '<img class="margin-bottom-20" src="/assets/img/icon/warning-login.png"><p class="margin-bottom-20">Tên đăng nhập hoặc mật khẩu không đúng !</p>',
                            customClass: {
                                container: "alert alert--type-1 error-login"
                            },
                            showCloseButton: !0,
                            showConfirmButton: !0,
                            confirmButtonText: "Quên mật khẩu?"
                        }, t))
                    })), n("alertHtml", (function(title, html) {
                        return l.a.fire({
                            title: title,
                            html: html,
                            customClass: {
                                container: "alert alert--type-1"
                            },
                            showCloseButton: !0,
                            showConfirmButton: !1
                        })
                    })), n("alertHtmlLogin", (function(title, html) {
                        return l.a.fire({
                            title: title,
                            html: html,
                            customClass: {
                                container: "alert alert--type-1"
                            },
                            showCloseButton: !0,
                            showConfirmButton: !0,
                            allowOutsideClick: !1,
                            confirmButtonText: "Đăng nhập lại",
                            cancelButtonText: "Bỏ qua"
                        })
                    })), n("alertHtmlConfirm", (function(title, html, t) {
                        return l.a.fire(d({
                            title: title,
                            html: html,
                            customClass: {
                                container: "alert alert--type-1 popup-promotion"
                            },
                            showCloseButton: !0,
                            showCancelButton: !0,
                            showConfirmButton: !0,
                            confirmButtonText: "Đồng ý",
                            cancelButtonText: "Bỏ qua"
                        }, t))
                    })), n("alertHtmlConfirmPromation", (function(title, html, t) {
                        return l.a.fire(d({
                            title: title,
                            html: html,
                            customClass: {
                                container: "alert alert--type-1 popup-promotion"
                            },
                            showCloseButton: !0,
                            showCancelButton: !0,
                            showConfirmButton: !0,
                            confirmButtonText: "Hủy Khuyến Mãi",
                            cancelButtonText: "Không"
                        }, t))
                    })), n("alertSystemMaintain", (function() {
                        return v.fire({
                            icon: "error",
                            title: "Hệ thống đang bảo trì. Vui lòng quay lại sau"
                        })
                    })), n("alertLoginRequired", w), n("GAME_DISPLAY_TYPE", h), n("LINK_TYPE", {
                        CASINO: "CASINO",
                        GAME: "GAME",
                        APP: "APP",
                        API: "API",
                        PAGE: "PAGE",
                        FUNC: "FUNC"
                    }), n("GAME_TYPE", {
                        ASIA: 1,
                        EURO: 2
                    }), n("PARTNER", f), n("playGame", (function(t, e) {
                        if (!y(t.partner_game_id))
                            if (t.display_types.includes(h.LOTTERY) && "ktrng3995" !== t.partner_game_id) {
                                if (("quayso" === t.partner_game_id || "quayso2" === t.partner_game_id) && r.state.user && r.state.user.package_id && 1 !== r.state.user.package_id) return void _("Bạn đang sử dụng khuyến mãi không được chơi game này");
                                var link;
                                switch (t.partner_game_id) {
                                    case "quayso":
                                        link = "/lottery";
                                        break;
                                    case "quayso2":
                                        link = "/lottery-sexy";
                                        break;
                                    case "2000":
                                        link = "/keno";
                                        break;
                                    case "1000":
                                        link = "/number-game"
                                }
                                "desktop" === r.state.device ? c.router.push(link) : window.open(link, "_blank")
                            } else if (null != r.state.user)
                            if (t.partner_provider !== f.TECHPLAY && r.state.user && 0 === r.state.user.balance) _("Vui lòng nạp tiền để tham gia trò chơi");
                            else {
                                if (t.display_types.includes(h.INGAME) && r.state.user) {
                                    if (r.state.user.package_id && 1 !== r.state.user.package_id) return void _("Bạn đang sử dụng khuyến mãi không được chơi Ingame");
                                    if (r.state.invoicePromotion > 0 && 0 === r.state.totalWithDraw) return void _("Vui lòng thực hiện lệnh rút tiền trước khi chơi Ingame")
                                }
                                if (t.display_types.includes(h.GAMEBAI) && r.state.user) {
                                    if (r.state.user.package_id && 1 !== r.state.user.package_id) return void _("Bạn đang sử dụng khuyến mãi không được chơi Game bài");
                                    if (r.state.invoicePromotion > 0 && 0 === r.state.totalWithDraw) return void _("Vui lòng thực hiện lệnh rút tiền trước khi chơi Game bài")
                                }
                                if (t.display_types.includes(h.BATTLE) && r.state.user && r.state.user.package_id && 1 !== r.state.user.package_id) _("Tài khoản khuyến mãi không được chơi game này");
                                else {
                                    if ("spribe" === t.partner_provider && r.state.user) {
                                        if (r.state.user.package_id && 1 !== r.state.user.package_id) return void _("Bạn đang sử dụng khuyến mãi không được chơi game này");
                                        if (r.state.invoicePromotion > 0 && 0 === r.state.totalWithDraw) return void _("Vui lòng thực hiện lệnh rút tiền trước khi chơi game")
                                    }
                                    if ("ktrng3995" === t.partner_game_id && r.state.user && r.state.user.package_id && 1 !== r.state.user.package_id) _("Bạn đang sử dụng khuyến mãi không được chơi game này");
                                    else {
                                        var n = t.url;
                                        n || (n = e ? "/api/playGame?partnerProvider=".concat(t.partner_provider, "&partnerGameId=").concat(t.partner_game_id, "&ru=").concat(e) : "/api/playGame?partnerProvider=".concat(t.partner_provider, "&partnerGameId=").concat(t.partner_game_id)), void 0 !== t.maintain && "1" === t.maintain ? _("Game đang bảo trì. Vui lòng quay lại sau hoặc chọn game khác.") : window.open(n, "_blank")
                                    }
                                }
                            }
                        else w()
                    })), n("showPopupById", (function(t) {
                        c.router.app.$root.$bvModal.show(t)
                    })), n("hidePopupById", (function(t) {
                        c.router.app.$root.$bvModal.hide(t)
                    })), n("swiper", (function(t, e) {
                        return new o.a(t, e)
                    })), n("anime", m.a), n("isMobile", (function() {
                        return "mobile" === r.state.device
                    })), n("isDesktop", (function() {
                        return "desktop" === r.state.device
                    })), n("ALIAS_TYPE_GAME", {
                        all: "TẤT CẢ",
                        other: "GAMES KHÁC",
                        slots: "SLOTS",
                        spribe: "THẦN SỐ",
                        tables: "TABLE GAMES",
                        evo: "EVOLUTION GAMES",
                        fishing: "BẮN CÁ",
                        ingame: "INGAME",
                        sexy_slots: "SEXY SLOTS",
                        lottery: "QUAY SỐ",
                        battle: "BATTLE GAMES",
                        gamebai: "GAME BÀI",
                        lode: "LÔ ĐỀ"
                    }), n("checkPromotion", y), n("LABEL_TYPE", {
                        HOT: "hot",
                        NEW: "new",
                        LIVE: "live",
                        ICON: "icon",
                        EVENT_NOEL: "event_noel",
                        EVENT_HOLIDAY: "event_holiday",
                        EVENT_EURO: "event_euro",
                        EVENT_BIRTHDAY: "event_birthday"
                    }), n("isEnableThemeNoel", (function() {
                        return !0
                    }))
                }
            }).call(this, n(63))
        },
        239: function(t, e, n) {
            "use strict";
            var r = {
                    name: "dImg",
                    props: ["src", "resize", "w", "h", "loading", "error", "srcSet"],
                    data: function() {
                        return {
                            fullSrc: this.resize ? "".concat(this.$store.state.mapDomain.RESIZE_IMAGE_URL, "/").concat(this.w, "x").concat(this.h, "/").concat(this.src) : /^http(s?):\/\//.test(this.src) || /^\/\//.test(this.src) ? this.src : "".concat(this.$store.state.mapDomain.IMAGE_URL, "/").concat(this.src)
                        }
                    },
                    mounted: function() {}
                },
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: {
                                src: this.fullSrc,
                                loading: this.loading,
                                error: this.error
                            },
                            expression: "{src: fullSrc, loading: loading, error: error}"
                        }],
                        ref: "ele"
                    })
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        269: function(t, e, n) {},
        27: function(t, e, n) {
            "use strict";
            n.d(e, "k", (function() {
                return _
            })), n.d(e, "m", (function() {
                return w
            })), n.d(e, "l", (function() {
                return y
            })), n.d(e, "e", (function() {
                return C
            })), n.d(e, "b", (function() {
                return k
            })), n.d(e, "r", (function() {
                return x
            })), n.d(e, "g", (function() {
                return $
            })), n.d(e, "h", (function() {
                return T
            })), n.d(e, "d", (function() {
                return O
            })), n.d(e, "q", (function() {
                return L
            })), n.d(e, "j", (function() {
                return S
            })), n.d(e, "s", (function() {
                return A
            })), n.d(e, "n", (function() {
                return j
            })), n.d(e, "p", (function() {
                return B
            })), n.d(e, "f", (function() {
                return M
            })), n.d(e, "c", (function() {
                return I
            })), n.d(e, "i", (function() {
                return N
            })), n.d(e, "o", (function() {
                return D
            })), n.d(e, "a", (function() {
                return Y
            }));
            n(21), n(154), n(19), n(134), n(121), n(133);
            var r = n(89),
                o = (n(15), n(55), n(348), n(349), n(90)),
                c = (n(67), n(68), n(135), n(215), n(46), n(43), n(51), n(28)),
                l = (n(108), n(18), n(16), n(20), n(39), n(45), n(3)),
                m = n(12);

            function h(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function d(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? h(Object(source), !0).forEach((function(e) {
                        Object(l.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function f(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return v(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function _(t) {
                m.default.config.errorHandler && m.default.config.errorHandler(t)
            }

            function w(t) {
                return t.then((function(t) {
                    return t.default || t
                }))
            }

            function y(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function C(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = t.$children || [],
                    o = f(r);
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var c = e.value;
                        c.$fetch ? n.push(c) : c.$children && C(c, n)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return n
            }

            function k(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n = t.options._originDataFn || t.options.data || function() {
                        return {}
                    };
                    t.options._originDataFn = n, t.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), d(d({}, data), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function x(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = m.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function $(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                    return Object.keys(t[n]).map((function(o) {
                        return e && e.push(r), t[n][o]
                    }))
                })))
            }

            function T(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return $(t, e, "instances")
            }

            function O(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                    return Object.keys(t.components).reduce((function(r, o) {
                        return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
                    }), [])
                })))
            }

            function L(t, e) {
                return Promise.all(O(t, function() {
                    var t = Object(c.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.next = 3, n();
                                case 3:
                                    n = t.sent;
                                case 4:
                                    return o.components[c] = n = x(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function S(t) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = Object(c.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, L(e);
                            case 4:
                                return t.abrupt("return", d(d({}, e), {}, {
                                    meta: $(e).map((function(t, n) {
                                        return d(d({}, t.options.meta), (e.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function A(t, e) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = Object(c.a)(regeneratorRuntime.mark((function t(e, n) {
                    var c, l, m, h;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !1,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    store: e.store,
                                    payload: n.payload,
                                    error: n.error,
                                    base: "/",
                                    env: {
                                        BUILDID: "554198b90c147c6d0955",
                                        API_URL: "http://localhost:3001",
                                        MAIN_DOMAIN: "https://fcb8.vip",
                                        REFRESH_INTERVAL: "5000",
                                        JACKPOT_INTERVAL: "3220",
                                        SLOT_URL: "https://games.mt-sta.com",
                                        GTM: "1",
                                        GTM_CODE: "GTM-TF3W2XC",
                                        CHECK_IP: "1",
                                        WHITE_LIST_IP_API: "http://localhost:3001/api/v1/whitelist",
                                        COUNTRY_CODE: "KH,LA",
                                        LIVECHAT_MAINTAIN: "0",
                                        DOMAIN_CHANGE: "0",
                                        NEW_DOMAIN: "fcb8.vip",
                                        TEAMS: "italy,england",
                                        FINAL_EURO_MATCH: "0",
                                        FINAL_EURO_WIN: "1",
                                        WARNING: "0",
                                        LIVESTREAM: "0",
                                        ENABLE_TABS_VIRTUAL: "1",
                                        EVENT_NOEL: "1",
                                        EVENT_HOLIDAY: "0",
                                        EVENT_EURO: "0",
                                        EVENT_OLYMPIC: "0",
                                        EVENT_BIRTHDAY: "0",
                                        EVENT_NOEL_API_PATH: "https://event.fcb8.vip",
                                        npm_package_devDependencies_resolve_url_loader: "^3.1.1",
                                        XDG_SESSION_ID: "85698",
                                        HOSTNAME: "fcb8-fe01",
                                        npm_package_dependencies_animated_number_vue: "^1.0.0",
                                        NODE: "/usr/bin/node",
                                        SELINUX_ROLE_REQUESTED: "",
                                        INIT_CWD: "/home/msservice/source/fcb8",
                                        npm_config_version_git_tag: "true",
                                        TERM: "xterm-256color",
                                        SHELL: "/bin/bash",
                                        npm_package_dependencies_vue_scrollto: "^2.18.1",
                                        npm_package_dependencies_normalize_css: "^8.0.1",
                                        HISTSIZE: "1000",
                                        npm_package_dependencies_text_mask_addons: "^3.8.0",
                                        SSH_CLIENT: "175.100.42.37 54511 22000",
                                        npm_package_dependencies__nuxtjs_axios: "^5.11.0",
                                        npm_config_init_license: "MIT",
                                        SELINUX_USE_CURRENT_RANGE: "",
                                        npm_package_dependencies_vue_text_mask: "^6.1.2",
                                        npm_package_scripts_nuxt_watch_prod: "nuxt -c ./config_pro.js && nuxt start -c ./config_pro.js",
                                        npm_package_scripts_dev: "nodemon --watch api",
                                        npm_package_dependencies_vue_range_slider: "^0.6.0",
                                        npm_package_dependencies__nuxtjs_device: "^1.2.7",
                                        npm_package_devDependencies_sass_loader: "^8.0.2",
                                        npm_package_resolutions_vue_router: "3.1.2",
                                        npm_package_devDependencies_webpack_bundle_analyzer: "^3.7.0",
                                        SSH_TTY: "/dev/pts/1",
                                        npm_config_registry: "https://registry.yarnpkg.com",
                                        LC_ALL: "en_US.UTF-8",
                                        npm_package_scripts_restart: "nuxt build -c ./config_pro.js && pm2 restart TIKTOK",
                                        npm_package_dependencies_body_scroll_lock: "^3.0.3",
                                        npm_package_readmeFilename: "README.md",
                                        npm_package_devDependencies_eslint_plugin_jsx_a11y: "^6.3.1",
                                        npm_package_dependencies_dayjs: "^1.8.28",
                                        USER: "msservice",
                                        npm_package_description: "# Dev yarn install yarn nuxt-watch # SERVER BUILD ## Required node: v12.12.0 pm2 ## Build + Build Vue ```bash yarn install yarn test ( restest ) ```",
                                        LS_COLORS: "rs=0:di=38;5;27:ln=38;5;51:mh=44;38;5;15:pi=40;38;5;11:so=38;5;13:do=38;5;5:bd=48;5;232;38;5;11:cd=48;5;232;38;5;3:or=48;5;232;38;5;9:mi=05;48;5;232;38;5;15:su=48;5;196;38;5;15:sg=48;5;11;38;5;16:ca=48;5;196;38;5;226:tw=48;5;10;38;5;16:ow=48;5;10;38;5;21:st=48;5;21;38;5;15:ex=38;5;34:*.tar=38;5;9:*.tgz=38;5;9:*.arc=38;5;9:*.arj=38;5;9:*.taz=38;5;9:*.lha=38;5;9:*.lz4=38;5;9:*.lzh=38;5;9:*.lzma=38;5;9:*.tlz=38;5;9:*.txz=38;5;9:*.tzo=38;5;9:*.t7z=38;5;9:*.zip=38;5;9:*.z=38;5;9:*.Z=38;5;9:*.dz=38;5;9:*.gz=38;5;9:*.lrz=38;5;9:*.lz=38;5;9:*.lzo=38;5;9:*.xz=38;5;9:*.bz2=38;5;9:*.bz=38;5;9:*.tbz=38;5;9:*.tbz2=38;5;9:*.tz=38;5;9:*.deb=38;5;9:*.rpm=38;5;9:*.jar=38;5;9:*.war=38;5;9:*.ear=38;5;9:*.sar=38;5;9:*.rar=38;5;9:*.alz=38;5;9:*.ace=38;5;9:*.zoo=38;5;9:*.cpio=38;5;9:*.7z=38;5;9:*.rz=38;5;9:*.cab=38;5;9:*.jpg=38;5;13:*.jpeg=38;5;13:*.gif=38;5;13:*.bmp=38;5;13:*.pbm=38;5;13:*.pgm=38;5;13:*.ppm=38;5;13:*.tga=38;5;13:*.xbm=38;5;13:*.xpm=38;5;13:*.tif=38;5;13:*.tiff=38;5;13:*.png=38;5;13:*.svg=38;5;13:*.svgz=38;5;13:*.mng=38;5;13:*.pcx=38;5;13:*.mov=38;5;13:*.mpg=38;5;13:*.mpeg=38;5;13:*.m2v=38;5;13:*.mkv=38;5;13:*.webm=38;5;13:*.ogm=38;5;13:*.mp4=38;5;13:*.m4v=38;5;13:*.mp4v=38;5;13:*.vob=38;5;13:*.qt=38;5;13:*.nuv=38;5;13:*.wmv=38;5;13:*.asf=38;5;13:*.rm=38;5;13:*.rmvb=38;5;13:*.flc=38;5;13:*.avi=38;5;13:*.fli=38;5;13:*.flv=38;5;13:*.gl=38;5;13:*.dl=38;5;13:*.xcf=38;5;13:*.xwd=38;5;13:*.yuv=38;5;13:*.cgm=38;5;13:*.emf=38;5;13:*.axv=38;5;13:*.anx=38;5;13:*.ogv=38;5;13:*.ogx=38;5;13:*.aac=38;5;45:*.au=38;5;45:*.flac=38;5;45:*.mid=38;5;45:*.midi=38;5;45:*.mka=38;5;45:*.mp3=38;5;45:*.mpc=38;5;45:*.ogg=38;5;45:*.ra=38;5;45:*.wav=38;5;45:*.axa=38;5;45:*.oga=38;5;45:*.spx=38;5;45:*.xspf=38;5;45:",
                                        npm_package_dependencies_vue_clipboard2: "^0.3.1",
                                        npm_package_devDependencies_eslint_loader: "^4.0.2",
                                        npm_package_dependencies_vue_touch: "^2.0.0-beta.4",
                                        npm_package_dependencies__nuxtjs_pwa: "^3.0.0-beta.20",
                                        npm_package_devDependencies_eslint_friendly_formatter: "^4.0.1",
                                        npm_package_scripts_build_js: "",
                                        npm_package_dependencies_slick_carousel: "^1.8.1",
                                        npm_package_dependencies_lodash: "^4.17.19",
                                        npm_package_devDependencies_eslint: "^6.8.0",
                                        npm_package_dependencies_vue_qr: "^2.5.0",
                                        npm_execpath: "/usr/share/yarn/bin/yarn.js",
                                        npm_package_scripts_build_js_prod: "",
                                        npm_package_dependencies_sass_mq: "^5.0.1",
                                        npm_package_dependencies_vuejs_datepicker: "^1.6.2",
                                        npm_package_dependencies_bootstrap_vue: "^2.15.0",
                                        MAIL: "/var/spool/mail/msservice",
                                        PATH: "/tmp/yarn--1640577671391-0.6067592817686482:/home/msservice/source/fcb8/node_modules/.bin:/home/msservice/.config/yarn/link/node_modules/.bin:/home/msservice/.yarn/bin:/usr/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/lib/node_modules/npm/bin/node-gyp-bin:/usr/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/msservice/.local/bin:/home/msservice/bin",
                                        npm_config_argv: '{"remain":[],"cooked":["run","nuxt"],"original":["nuxt","build","-c","./config_pro.js"]}',
                                        npm_package_dependencies_swiper: "^5.4.5",
                                        npm_package_resolutions__babel_preset_env: "7.10.3",
                                        npm_package_dependencies_vuelidate: "^0.7.5",
                                        _: "/home/msservice/source/fcb8/node_modules/.bin/nuxt",
                                        PWD: "/home/msservice/source/fcb8",
                                        npm_package_devDependencies_eslint_config_airbnb: "^18.2.0",
                                        npm_package_dependencies_bootstrap: "^4.5.0",
                                        npm_package_dependencies__nuxtjs_sitemap: "^2.4.0",
                                        npm_lifecycle_event: "nuxt",
                                        LANG: "en_US.UTF-8",
                                        npm_package_name: "TIKTOK",
                                        npm_package_devDependencies_eslint_plugin_import: "^2.21.2",
                                        npm_package_devDependencies_sass: "^1.26.9",
                                        npm_package_scripts_start: "nuxt build -c ./config_pro.js && pm2 start",
                                        npm_package_scripts_build: "nuxt build",
                                        npm_config_version_commit_hooks: "true",
                                        npm_package_dependencies_vue_awesome_countdown: "^1.1.4",
                                        SELINUX_LEVEL_REQUESTED: "",
                                        npm_package_scripts_post_update: "yarn upgrade --latest",
                                        npm_package_dependencies_vue_lazyload: "^1.3.3",
                                        npm_config_bin_links: "true",
                                        npm_package_dependencies_vue_i18n: "^8.18.2",
                                        HISTCONTROL: "ignoredups",
                                        npm_package_version: "",
                                        npm_package_devDependencies_eslint_config_airbnb_base: "^14.2.0",
                                        npm_package_scripts_watch: "",
                                        npm_package_dependencies_sweetalert2: "^9.15.2",
                                        npm_package_dependencies_cookie_universal_nuxt: "^2.1.4",
                                        SHLVL: "3",
                                        HOME: "/home/msservice",
                                        npm_package_dependencies__nuxtjs_gtm: "^2.3.0",
                                        LANGUAGE: "en_US:en",
                                        npm_package_devDependencies_eslint_plugin_vue: "^6.2.2",
                                        npm_package_scripts_test: "nuxt build -c ./config_dev.js && nuxt start -c ./config_dev.js",
                                        npm_package_dependencies_animate_css: "^3.7.2",
                                        npm_package_dependencies_dotenv: "^8.2.0",
                                        npm_config_save_prefix: "^",
                                        npm_config_strict_ssl: "true",
                                        npm_package_devDependencies_babel_eslint: "^10.1.0",
                                        npm_config_version_git_message: "v%s",
                                        npm_package_scripts_retest: "nuxt build -c ./config_dev.js && pm2 restart TIKTOK",
                                        npm_package_scripts_nuxt_watch: "nuxt -c ./config_dev.js && nuxt start -c ./config_dev.js",
                                        npm_package_devDependencies__nuxtjs_dotenv: "^1.4.1",
                                        npm_package_dependencies_vue_the_mask: "^0.11.1",
                                        LOGNAME: "msservice",
                                        YARN_WRAP_OUTPUT: "false",
                                        SSH_CONNECTION: "175.100.42.37 54511 192.168.60.226 22000",
                                        LC_CTYPE: "UTF-8",
                                        npm_package_dependencies_vuex_persistedstate: "^2.5.4",
                                        LESSOPEN: "||/usr/bin/lesspipe.sh %s",
                                        npm_package_dependencies_jquery: "^3.5.1",
                                        npm_package_dependencies_v_money: "^0.8.1",
                                        npm_package_dependencies_nuxt_ssr_cache: "^1.5.1",
                                        npm_config_version_git_sign: "",
                                        npm_config_ignore_scripts: "",
                                        npm_config_user_agent: "yarn/1.22.4 npm/? node/v12.18.3 linux x64",
                                        XDG_RUNTIME_DIR: "/run/user/1006",
                                        npm_package_dependencies_nuxt: "2.12.1",
                                        npm_package_dependencies_animejs: "^3.2.0",
                                        npm_package_dependencies__nuxtjs_style_resources: "^1.0.0",
                                        npm_config_init_version: "1.0.0",
                                        npm_config_ignore_optional: "",
                                        npm_package_devDependencies_node_sass: "^4.14.1",
                                        npm_node_execpath: "/usr/bin/node",
                                        npm_package_devDependencies_eslint_plugin_react: "^7.20.0",
                                        npm_package_dependencies_nuxt_webfontloader: "^1.1.0",
                                        npm_config_version_tag_prefix: "v",
                                        NODE_ENV: "production"
                                    }
                                }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function(t, path, n) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var r = Object(o.a)(path);
                                        if ("number" == typeof t || "undefined" !== r && "object" !== r || (n = path || {}, path = t, r = Object(o.a)(path), t = 302), "object" === r && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = V(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: path,
                                            query: n,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([S(n.route), S(n.from)]);
                            case 3:
                                c = t.sent, l = Object(r.a)(c, 2), m = l[0], h = l[1], n.route && (e.context.route = m), n.from && (e.context.from = h), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function j(t, e) {
                return !t.length || e._redirected || e._errored ? Promise.resolve() : B(t[0], e).then((function() {
                    return j(t.slice(1), e)
                }))
            }

            function B(t, e) {
                var n;
                return (n = 2 === t.length ? new Promise((function(n) {
                    t(e, (function(t, data) {
                        t && e.error(t), n(data = data || {})
                    }))
                })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function M(base, t) {
                var path = decodeURI(window.location.pathname);
                return "hash" === t ? window.location.hash.replace(/^#\//, "") : (base && 0 === path.indexOf(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
            }

            function I(t, e) {
                return function(t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(o.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", H(e)));
                    return function(e, r) {
                        for (var path = "", data = e || {}, o = (r || {}).pretty ? U : encodeURIComponent, c = 0; c < t.length; c++) {
                            var l = t[c];
                            if ("string" != typeof l) {
                                var m = data[l.name || "pathMatch"],
                                    h = void 0;
                                if (null == m) {
                                    if (l.optional) {
                                        l.partial && (path += l.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + l.name + '" to be defined')
                                }
                                if (Array.isArray(m)) {
                                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(m) + "`");
                                    if (0 === m.length) {
                                        if (l.optional) continue;
                                        throw new TypeError('Expected "' + l.name + '" to not be empty')
                                    }
                                    for (var d = 0; d < m.length; d++) {
                                        if (h = o(m[d]), !n[c].test(h)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(h) + "`");
                                        path += (0 === d ? l.prefix : l.delimiter) + h
                                    }
                                } else {
                                    if (h = l.asterisk ? U(m, !0) : o(m), !n[c].test(h)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + h + '"');
                                    path += l.prefix + h
                                }
                            } else path += l
                        }
                        return path
                    }
                }(function(t, e) {
                    var n, r = [],
                        o = 0,
                        c = 0,
                        path = "",
                        l = e && e.delimiter || "/";
                    for (; null != (n = P.exec(t));) {
                        var m = n[0],
                            h = n[1],
                            d = n.index;
                        if (path += t.slice(c, d), c = d + m.length, h) path += h[1];
                        else {
                            var f = t[c],
                                v = n[2],
                                _ = n[3],
                                w = n[4],
                                y = n[5],
                                C = n[6],
                                k = n[7];
                            path && (r.push(path), path = "");
                            var x = null != v && null != f && f !== v,
                                $ = "+" === C || "*" === C,
                                T = "?" === C || "*" === C,
                                O = n[2] || l,
                                pattern = w || y;
                            r.push({
                                name: _ || o++,
                                prefix: v || "",
                                delimiter: O,
                                optional: T,
                                repeat: $,
                                partial: x,
                                asterisk: Boolean(k),
                                pattern: pattern ? G(pattern) : k ? ".*" : "[^" + F(O) + "]+?"
                            })
                        }
                    }
                    c < t.length && (path += t.substr(c));
                    path && r.push(path);
                    return r
                }(t, e), e)
            }

            function N(t, e) {
                var n = {},
                    r = d(d({}, t), e);
                for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
                return n
            }

            function D(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return d(d({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t)
            };
            var P = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function U(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function F(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function G(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function H(t) {
                return t && t.sensitive ? "" : "i"
            }

            function V(t, e) {
                var n, o = t.indexOf("://"); - 1 !== o ? (n = t.substring(0, o), t = t.substring(o + 3)) : t.startsWith("//") && (t = t.substring(2));
                var c, l = t.split("/"),
                    m = (n ? n + "://" : "//") + l.shift(),
                    path = l.filter(Boolean).join("/");
                if (2 === (l = path.split("#")).length) {
                    var h = l,
                        d = Object(r.a)(h, 2);
                    path = d[0], c = d[1]
                }
                return m += path ? "/" + path : "", e && "{}" !== JSON.stringify(e) && (m += (2 === t.split("?").length ? "&" : "?") + function(t) {
                    return Object.keys(t).sort().map((function(e) {
                        var n = t[e];
                        return null == n ? "" : Array.isArray(n) ? n.slice().map((function(t) {
                            return [e, "=", t].join("")
                        })).join("&") : e + "=" + n
                    })).filter(Boolean).join("&")
                }(e)), m += c ? "#" + c : ""
            }

            function Y(t, e, n) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
            }
        },
        270: function(t, e, n) {},
        282: function(t, e, n) {
            "use strict";
            n(177);
            var r = n(241),
                o = {
                    name: "games",
                    props: ["lazy", "isMenu"],
                    data: function() {
                        return {
                            games: [{
                                imgTitle: "",
                                title: "Slots",
                                thumb: "game_port_slots",
                                newTab: !1,
                                loginRequired: !1,
                                data: {
                                    link: "/games?type=slots",
                                    type: "LOBBY"
                                }
                            }, {
                                imgTitle: "",
                                title: "Keno",
                                link: "/keno",
                                thumb: "game_port_keno",
                                newTab: !0,
                                loginRequired: !1,
                                data: {
                                    link: "/keno",
                                    type: "GAME"
                                }
                            }, {
                                imgTitle: "",
                                title: "InGame",
                                thumb: "game_port_ingame",
                                newTab: !1,
                                loginRequired: !1,
                                data: {
                                    link: "/games?type=ingame",
                                    type: "LOBBY"
                                }
                            }, {
                                imgTitle: "",
                                title: "E-Sports",
                                thumb: "game_port_esports",
                                newTab: !0,
                                loginRequired: !0,
                                data: {
                                    link: "/esports",
                                    type: "GAME"
                                }
                            }, {
                                imgTitle: "",
                                title: "Sexy Slots",
                                thumb: "game_port_sexyslots",
                                newTab: !1,
                                loginRequired: !1,
                                data: {
                                    link: "/games?type=sexy_slots",
                                    type: "LOBBY"
                                }
                            }, {
                                imgTitle: "",
                                title: "Sports",
                                link: "/sports",
                                thumb: "game_port_sports",
                                newTab: !1,
                                loginRequired: !1,
                                data: {
                                    link: "/sports",
                                    type: "LOBBY"
                                }
                            }, {
                                imgTitle: "",
                                title: "Lô Đề",
                                link: "/lode",
                                thumb: "game_port_lode",
                                newTab: !1,
                                loginRequired: !1,
                                data: {
                                    link: "/lode",
                                    type: "GAME"
                                }
                            }, {
                                imgTitle: "",
                                title: "Bắn Cá",
                                thumb: "game_port_banca",
                                newTab: !1,
                                label: "label",
                                loginRequired: !1,
                                data: {
                                    link: "/games?type=fishing",
                                    type: "LOBBY"
                                }
                            }, {
                                imgTitle: "",
                                title: "Table Games",
                                thumb: "game_port_table_games",
                                newTab: !1,
                                loginRequired: !1,
                                data: {
                                    link: "/games?type=tables",
                                    type: "LOBBY"
                                }
                            }, {
                                imgTitle: "",
                                title: "Quay Số",
                                thumb: "game_port_quayso",
                                newTab: !1,
                                loginRequired: !1,
                                data: {
                                    link: "/games?type=lottery",
                                    type: "LOBBY"
                                }
                            }, {
                                imgTitle: "",
                                title: "Virtual Sports",
                                thumb: "game_port__virtual_sports",
                                newTab: !0,
                                loginRequired: !1,
                                data: {
                                    link: "/virtual-sports",
                                    type: "GAME"
                                }
                            }, {
                                imgTitle: "live",
                                title: " Casino",
                                thumb: "game_port_livecasino",
                                newTab: !1,
                                loginRequired: !1,
                                data: {
                                    link: "/livecasino",
                                    type: "LOBBY"
                                }
                            }],
                            gameSwiper: null
                        }
                    },
                    computed: {
                        device: function() {
                            return this.$store.state.device
                        },
                        dataGameMenu: function() {
                            return Object(r.chunk)(this.games, 6)
                        },
                        user: function() {
                            return this.$store.state.user
                        }
                    },
                    methods: {
                        getUrlStatic: function(t) {
                            var e = this.$store.state;
                            return "".concat(e.mapDomain.STATIC_URL, "/assets/img/game-port/").concat(t, ".png")
                        },
                        moveTo: function(t) {
                            this.$isMobile() ? this.$openLink(t.data.link, {
                                loginRequired: t.loginRequired,
                                newTab: t.newTab,
                                type: t.data.type
                            }) : "/esports" === t.link ? this.$openEsports() : this.$openLink(t.link, {
                                type: t.type
                            })
                        },
                        initSlider: function() {
                            var t = this;
                            this.gameSwiper = this.$swiper("#gameHomeSlider", {
                                loop: !0,
                                slidesPerView: 9,
                                spaceBetween: 16,
                                lazy: {
                                    loadPrevNext: !0,
                                    loadPrevNextAmount: 1
                                },
                                centeredSlides: !0,
                                autoplay: {
                                    delay: 5e3
                                },
                                navigation: {
                                    nextEl: "#game-port__next",
                                    prevEl: "#game-port__prev"
                                },
                                breakpoints: {
                                    0: {
                                        slidesPerView: 3,
                                        spaceBetween: 16
                                    },
                                    992: {
                                        slidesPerView: 5,
                                        spaceBetween: 16
                                    },
                                    1440: {
                                        slidesPerView: 7,
                                        spaceBetween: 16
                                    },
                                    1920: {
                                        slidesPerView: 9,
                                        spaceBetween: 16
                                    }
                                },
                                on: {
                                    click: function(e) {
                                        var n = e.target.closest(".game-port-item__link").dataset.click;
                                        if (void 0 !== n) {
                                            var r = JSON.parse(n);
                                            t.moveTo(r)
                                        }
                                    }
                                }
                            })
                        }
                    },
                    watch: {
                        games: function() {
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
                c = n(33),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "section section--games img-block"
                    }, [n("div", {
                        staticClass: "game-port"
                    }, ["mobile" === t.device && t.isMenu ? [n("div", {
                        staticClass: "game-port__container"
                    }, t._l(t.dataGameMenu, (function(e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "game-port__wrap"
                        }, t._l(e, (function(i) {
                            return n("div", {
                                key: i.title,
                                staticClass: "game-port-item"
                            }, [n("a", {
                                class: i.label,
                                attrs: {
                                    href: "#"
                                },
                                on: {
                                    click: function(e) {
                                        return e.preventDefault(), t.moveTo(i)
                                    }
                                }
                            }, [n("figure", [n("r-img", {
                                attrs: {
                                    type: "picture",
                                    static: t.getUrlStatic(i.thumb),
                                    alt: ""
                                }
                            }), t._v(" "), n("img", {
                                staticClass: "img-rotate",
                                attrs: {
                                    src: t.getUrlStatic("game_port_circle"),
                                    alt: i.title
                                }
                            })], 1), t._v(" "), n("p", {
                                staticClass: "flex-box"
                            }, ["" !== i.imgTitle ? n("img", {
                                attrs: {
                                    src: t.getUrlStatic(i.imgTitle),
                                    alt: "icon"
                                }
                            }) : t._e(), t._v("\n                                " + t._s(i.title) + "\n                            ")])])])
                        })), 0)
                    })), 0)] : "mobile" === t.device ? [n("div", {
                        staticClass: "game-port__container mobile"
                    }, [n("div", {
                        staticClass: "game-port__wrap mobile"
                    }, t._l(t.games, (function(i) {
                        return n("div", {
                            key: i.title,
                            staticClass: "game-port-item"
                        }, [n("a", {
                            class: i.label,
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.moveTo(i)
                                }
                            }
                        }, [n("figure", [n("r-img", {
                            attrs: {
                                type: "picture",
                                static: t.getUrlStatic(i.thumb),
                                alt: ""
                            }
                        }), t._v(" "), n("img", {
                            staticClass: "img-rotate",
                            attrs: {
                                src: t.getUrlStatic("game_port_circle"),
                                alt: i.title
                            }
                        })], 1), t._v(" "), n("p", {
                            staticClass: "flex-box"
                        }, ["" !== i.imgTitle ? n("img", {
                            attrs: {
                                src: t.getUrlStatic(i.imgTitle),
                                alt: "icon"
                            }
                        }) : t._e(), t._v("\n                                " + t._s(i.title) + "\n                            ")])])])
                    })), 0)])] : [n("div", {
                        staticClass: "games__slider swiper-container",
                        attrs: {
                            id: "gameHomeSlider"
                        }
                    }, [n("div", {
                        staticClass: "swiper-wrapper games__swipper"
                    }, t._l(t.games, (function(i, e) {
                        return n("div", {
                            key: e,
                            staticClass: "game__item swiper-slide"
                        }, [n("div", {
                            staticClass: "game-port-item"
                        }, [n("a", {
                            class: [i.label, "game-port-item__link"],
                            attrs: {
                                href: "javascript:void(0)",
                                "data-click": JSON.stringify(i.data)
                            }
                        }, [n("figure", [n("r-img", {
                            attrs: {
                                type: "picture",
                                static: t.getUrlStatic(i.thumb),
                                alt: ""
                            }
                        }), t._v(" "), n("img", {
                            staticClass: "img-rotate",
                            attrs: {
                                src: t.getUrlStatic("game_port_circle"),
                                alt: i.title
                            }
                        })], 1), t._v(" "), n("p", {
                            staticClass: "flex-box"
                        }, ["" !== i.imgTitle ? n("img", {
                            attrs: {
                                src: t.getUrlStatic(i.imgTitle),
                                alt: "icon"
                            }
                        }) : t._e(), t._v("\n                                    " + t._s(i.title) + "\n                                ")])])])])
                    })), 0), t._v(" "), n("div", {
                        staticClass: "swiper-button-prev game-port__prev",
                        attrs: {
                            id: "game-port__prev"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "swiper-button-next game-port__next",
                        attrs: {
                            id: "game-port__next"
                        }
                    })])]], 2)])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        283: function(t, e, n) {
            "use strict";
            n(18), n(16), n(108), n(51);
            var r = n(28),
                o = {
                    props: ["plan"],
                    data: function() {
                        return {
                            betToday: 0,
                            commissionToday: 0,
                            commissionAll: 0
                        }
                    },
                    methods: {
                        getBetToday: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$userApi.getBet({
                                                type: "TODAY"
                                            });
                                        case 2:
                                            if ("OK" === (n = e.sent).status || "NOT_FOUND" === n.status) {
                                                e.next = 6;
                                                break
                                            }
                                            return console.log(n), e.abrupt("return");
                                        case 6:
                                            t.betToday = n && n.data ? n.data.stake : 0;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getCommissionToday: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$userApi.getCommission({
                                                type: "TODAY"
                                            });
                                        case 2:
                                            if ("OK" === (n = e.sent).status || "NOT_FOUND" === n.status) {
                                                e.next = 6;
                                                break
                                            }
                                            return console.log(n), e.abrupt("return");
                                        case 6:
                                            t.commissionToday = n && n.data ? n.data.commission : 0;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getCommission: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$userApi.getCommission({
                                                type: "ALL"
                                            });
                                        case 2:
                                            if ("OK" === (n = e.sent).status || "NOT_FOUND" === n.status) {
                                                e.next = 6;
                                                break
                                            }
                                            return console.log(n), e.abrupt("return");
                                        case 6:
                                            t.commissionAll = n && n.data ? n.data.commission : 0;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all([t.getBetToday(), t.getCommissionToday(), t.getCommission()]);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))))
                    }
                },
                c = n(33),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "account__transaction user-promotion"
                    }, [n("div", {
                        staticClass: "account__transaction-top user-login"
                    }, [n("div", {
                        staticClass: "name-pro text-center"
                    }, [t._m(0), t._v(" "), n("p", {
                        staticClass: "refurn"
                    }, [t._v("HOÀN TRẢ KHÔNG GIỚI HẠN "), n("span", [t._v(t._s(t.plan.description))])])]), t._v(" "), n("ul", {
                        staticClass: "list-promation text-center"
                    }, [n("li", [n("p", {
                        staticClass: "label"
                    }, [n("span", {
                        staticClass: "left"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0.549449 5.93582C0.33757 6.07954 0 5.96619 0 5.75135V0.248624C0 0.0337945 0.33757 -0.0795296 0.549449 0.0641867L4.6053 2.81556C4.75061 2.91413 4.75061 3.08587 4.6053 3.18444L0.549449 5.93582Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M6.83509 5.93582C6.62321 6.07954 6.28564 5.96619 6.28564 5.75135V0.248624C6.28564 0.0337945 6.62321 -0.0795296 6.83509 0.0641867L10.8909 2.81556C11.0363 2.91413 11.0363 3.08587 10.8909 3.18444L6.83509 5.93582Z",
                            fill: "#106FFD"
                        }
                    })])]), n("span", {
                        staticClass: "text"
                    }, [t._v("Tổng cược hôm nay")]), n("span", {
                        staticClass: "right"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M10.4506 0.0641847C10.6624 -0.0795379 11 0.0338125 11 0.248652V5.75138C11 5.96621 10.6624 6.07953 10.4506 5.93581L6.3947 3.18444C6.24939 3.08587 6.24939 2.91413 6.3947 2.81556L10.4506 0.0641847Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M4.16491 0.0641847C4.37679 -0.0795379 4.71436 0.0338125 4.71436 0.248652V5.75138C4.71436 5.96621 4.37679 6.07953 4.16491 5.93581L0.109055 3.18444C-0.0362582 3.08587 -0.0362582 2.91413 0.109055 2.81556L4.16491 0.0641847Z",
                            fill: "#106FFD"
                        }
                    })])])]), t._v(" "), n("p", {
                        staticClass: "value"
                    }, [n("span", [t._v(t._s(t._f("formatAmount")(t.betToday)))])])]), t._v(" "), n("li", [n("p", {
                        staticClass: "label"
                    }, [n("span", {
                        staticClass: "left"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0.549449 5.93582C0.33757 6.07954 0 5.96619 0 5.75135V0.248624C0 0.0337945 0.33757 -0.0795296 0.549449 0.0641867L4.6053 2.81556C4.75061 2.91413 4.75061 3.08587 4.6053 3.18444L0.549449 5.93582Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M6.83509 5.93582C6.62321 6.07954 6.28564 5.96619 6.28564 5.75135V0.248624C6.28564 0.0337945 6.62321 -0.0795296 6.83509 0.0641867L10.8909 2.81556C11.0363 2.91413 11.0363 3.08587 10.8909 3.18444L6.83509 5.93582Z",
                            fill: "#106FFD"
                        }
                    })])]), n("span", {
                        staticClass: "text"
                    }, [t._v("Hoàn trả hôm nay")]), n("span", {
                        staticClass: "right"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M10.4506 0.0641847C10.6624 -0.0795379 11 0.0338125 11 0.248652V5.75138C11 5.96621 10.6624 6.07953 10.4506 5.93581L6.3947 3.18444C6.24939 3.08587 6.24939 2.91413 6.3947 2.81556L10.4506 0.0641847Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M4.16491 0.0641847C4.37679 -0.0795379 4.71436 0.0338125 4.71436 0.248652V5.75138C4.71436 5.96621 4.37679 6.07953 4.16491 5.93581L0.109055 3.18444C-0.0362582 3.08587 -0.0362582 2.91413 0.109055 2.81556L4.16491 0.0641847Z",
                            fill: "#106FFD"
                        }
                    })])])]), t._v(" "), n("p", {
                        staticClass: "value"
                    }, [n("span", [t._v(t._s(t._f("formatAmount")(t.commissionToday)))])])]), t._v(" "), n("li", [n("p", {
                        staticClass: "label"
                    }, [n("span", {
                        staticClass: "left"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0.549449 5.93582C0.33757 6.07954 0 5.96619 0 5.75135V0.248624C0 0.0337945 0.33757 -0.0795296 0.549449 0.0641867L4.6053 2.81556C4.75061 2.91413 4.75061 3.08587 4.6053 3.18444L0.549449 5.93582Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M6.83509 5.93582C6.62321 6.07954 6.28564 5.96619 6.28564 5.75135V0.248624C6.28564 0.0337945 6.62321 -0.0795296 6.83509 0.0641867L10.8909 2.81556C11.0363 2.91413 11.0363 3.08587 10.8909 3.18444L6.83509 5.93582Z",
                            fill: "#106FFD"
                        }
                    })])]), n("span", {
                        staticClass: "text"
                    }, [t._v("Tổng hoàn trả")]), n("span", {
                        staticClass: "right"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M10.4506 0.0641847C10.6624 -0.0795379 11 0.0338125 11 0.248652V5.75138C11 5.96621 10.6624 6.07953 10.4506 5.93581L6.3947 3.18444C6.24939 3.08587 6.24939 2.91413 6.3947 2.81556L10.4506 0.0641847Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M4.16491 0.0641847C4.37679 -0.0795379 4.71436 0.0338125 4.71436 0.248652V5.75138C4.71436 5.96621 4.37679 6.07953 4.16491 5.93581L0.109055 3.18444C-0.0362582 3.08587 -0.0362582 2.91413 0.109055 2.81556L4.16491 0.0641847Z",
                            fill: "#106FFD"
                        }
                    })])])]), t._v(" "), n("p", {
                        staticClass: "value"
                    }, [n("span", [t._v(t._s(t._f("formatAmount")(t.commissionAll)))])])])])]), t._v(" "), n("div", {
                        staticClass: "account__transaction-bottom"
                    }, [n("n-link", {
                        staticClass: "text-yellow",
                        attrs: {
                            to: "/khuyen-mai?type=promotion15"
                        }
                    }, [t._v("Lưu ý khi sử dụng khuyến mãi")])], 1)])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("p", [e("span", {
                        staticClass: "gradient-text"
                    }, [this._v("Bạn đang dùng khuyến mãi")])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        284: function(t, e, n) {
            "use strict";
            n(51);
            var r = n(28),
                o = {
                    props: ["plan", "cancelPromotion"],
                    data: function() {
                        return {
                            style: "style",
                            currentBetAmount: 0,
                            remainBetAmount: 0,
                            currentRound: 0,
                            remainRound: 0,
                            isSubmit: !1
                        }
                    },
                    methods: {
                        cancel: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.isSubmit = !0, e.next = 4, t.cancelPromotion();
                                        case 4:
                                            t.isSubmit = !1, e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), t.isSubmit = !1, console.log(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))()
                        }
                    },
                    mounted: function() {
                        if (this.plan) {
                            this.plan.deposit_amount = parseInt(this.plan.deposit_amount / 1e3, 10), this.plan.promotion_amount = parseInt(this.plan.promotion_amount / 1e3, 10);
                            var t = parseInt(this.plan.rolling / 1e3, 10);
                            this.currentBetAmount = this.plan.turnover ? parseInt(this.plan.turnover / 1e3, 10) : 0, this.remainBetAmount = t - this.currentBetAmount, this.remainBetAmount = this.remainBetAmount < 0 ? 0 : this.remainBetAmount;
                            var e = this.plan.multiplier,
                                n = t / e;
                            this.currentRound = parseInt(this.currentBetAmount / n, 10), this.remainRound = e - this.currentRound, this.remainRound = this.remainRound < 0 ? 0 : this.remainRound
                        }
                    }
                },
                c = n(33),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "account__transaction user-promotion"
                    }, [n("div", {
                        staticClass: "account__transaction-top user-login"
                    }, [n("div", {
                        staticClass: "name-pro text-center"
                    }, [t._m(0), t._v(" "), "WELCOME" === t.plan.type ? n("p", {
                        staticClass: "refurn"
                    }, [n("span", [t._v(t._s(t.plan.name))])]) : t._e(), t._v(" "), "WELCOME_PLAY" === t.plan.type ? n("p", {
                        staticClass: "refurn"
                    }, [t._v(t._s(t.plan.name))]) : t._e(), t._v(" "), "PROMOTION" === t.plan.type ? n("p", {
                        staticClass: "refurn"
                    }, [t._v("THƯỞNG NẠP LẦN THỨ HAI "), n("span", [t._v(t._s(t.plan.description))])]) : t._e()]), t._v(" "), n("ul", {
                        staticClass: "list-promation text-center"
                    }, [n("li", [n("p", {
                        staticClass: "label"
                    }, [n("span", {
                        staticClass: "left"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0.549449 5.93582C0.33757 6.07954 0 5.96619 0 5.75135V0.248624C0 0.0337945 0.33757 -0.0795296 0.549449 0.0641867L4.6053 2.81556C4.75061 2.91413 4.75061 3.08587 4.6053 3.18444L0.549449 5.93582Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M6.83509 5.93582C6.62321 6.07954 6.28564 5.96619 6.28564 5.75135V0.248624C6.28564 0.0337945 6.62321 -0.0795296 6.83509 0.0641867L10.8909 2.81556C11.0363 2.91413 11.0363 3.08587 10.8909 3.18444L6.83509 5.93582Z",
                            fill: "#106FFD"
                        }
                    })])]), n("span", {
                        staticClass: "text"
                    }, [t._v("Số Tiền Đã Nạp")]), n("span", {
                        staticClass: "right"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M10.4506 0.0641847C10.6624 -0.0795379 11 0.0338125 11 0.248652V5.75138C11 5.96621 10.6624 6.07953 10.4506 5.93581L6.3947 3.18444C6.24939 3.08587 6.24939 2.91413 6.3947 2.81556L10.4506 0.0641847Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M4.16491 0.0641847C4.37679 -0.0795379 4.71436 0.0338125 4.71436 0.248652V5.75138C4.71436 5.96621 4.37679 6.07953 4.16491 5.93581L0.109055 3.18444C-0.0362582 3.08587 -0.0362582 2.91413 0.109055 2.81556L4.16491 0.0641847Z",
                            fill: "#106FFD"
                        }
                    })])])]), t._v(" "), n("p", {
                        staticClass: "value"
                    }, [n("span", [t._v(t._s(t._f("formatAmount")(t.plan.deposit_amount)))])])]), t._v(" "), n("li", [n("p", {
                        staticClass: "label"
                    }, [n("span", {
                        staticClass: "left"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0.549449 5.93582C0.33757 6.07954 0 5.96619 0 5.75135V0.248624C0 0.0337945 0.33757 -0.0795296 0.549449 0.0641867L4.6053 2.81556C4.75061 2.91413 4.75061 3.08587 4.6053 3.18444L0.549449 5.93582Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M6.83509 5.93582C6.62321 6.07954 6.28564 5.96619 6.28564 5.75135V0.248624C6.28564 0.0337945 6.62321 -0.0795296 6.83509 0.0641867L10.8909 2.81556C11.0363 2.91413 11.0363 3.08587 10.8909 3.18444L6.83509 5.93582Z",
                            fill: "#106FFD"
                        }
                    })])]), n("span", {
                        staticClass: "text"
                    }, [t._v("Số Tiền Khuyến Mãi")]), n("span", {
                        staticClass: "right"
                    }, [n("svg", {
                        attrs: {
                            width: "11",
                            height: "6",
                            viewBox: "0 0 11 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M10.4506 0.0641847C10.6624 -0.0795379 11 0.0338125 11 0.248652V5.75138C11 5.96621 10.6624 6.07953 10.4506 5.93581L6.3947 3.18444C6.24939 3.08587 6.24939 2.91413 6.3947 2.81556L10.4506 0.0641847Z",
                            fill: "#4786FF"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M4.16491 0.0641847C4.37679 -0.0795379 4.71436 0.0338125 4.71436 0.248652V5.75138C4.71436 5.96621 4.37679 6.07953 4.16491 5.93581L0.109055 3.18444C-0.0362582 3.08587 -0.0362582 2.91413 0.109055 2.81556L4.16491 0.0641847Z",
                            fill: "#106FFD"
                        }
                    })])])]), t._v(" "), n("p", {
                        staticClass: "value"
                    }, [n("span", [t._v(t._s(t._f("formatAmount")(t.plan.promotion_amount)))])])]), t._v(" "), n("li")]), t._v(" "), n("div", {
                        staticClass: "round-promation"
                    }, [n("div", {
                        staticClass: "total flex-box just-between"
                    }, [n("span", [t._v("Số vòng cược cần hoàn thành:")]), n("span", [t._v(t._s(t.currentRound) + "/" + t._s(t.plan.multiplier))])]), t._v(" "), n("b-progress", {
                        attrs: {
                            value: t.currentRound,
                            max: t.plan.multiplier
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "round-total flex-box justify-content-between"
                    }, [n("div", [n("div", {
                        staticClass: "label"
                    }, [t._v("Cược hiện có: "), n("span", {
                        staticClass: "number"
                    }, [t._v(t._s(t.currentRound))])]), t._v(" "), n("div", {
                        staticClass: "amount"
                    }, [n("span", [t._v(t._s(t._f("formatAmount")(t.currentBetAmount)))])])]), t._v(" "), n("div", {
                        staticClass: "text-right"
                    }, [n("div", {
                        staticClass: "label"
                    }, [t._v("Cược Cần: "), n("span", {
                        staticClass: "number"
                    }, [t._v(t._s(t.remainRound))])]), t._v(" "), n("div", {
                        staticClass: "amount"
                    }, [n("span", [t._v(t._s(t._f("formatAmount")(t.remainBetAmount)))])])])]), t._v(" "), n("div", {
                        staticClass: "button-promation text-center"
                    }, [n("d-button", {
                        staticClass: "button button--red",
                        attrs: {
                            apply: t.cancel,
                            disabled: t.isSubmit,
                            loading: t.isSubmit
                        }
                    }, [t._v("\n                    HUỶ KHUYẾN MÃI\n                ")])], 1)], 1)]), t._v(" "), n("div", {
                        staticClass: "account__transaction-bottom"
                    }, ["WELCOME_PLAY" !== t.plan.type ? n("p", {
                        staticClass: "time-exprise"
                    }, [t._v("\n            Thời gian Khuyến mãi:\n            "), n("span", [t._v(t._s(t._f("formatDate")(t.plan.created_time, "DD/MM/YYYY")) + " - " + t._s(t._f("formatDate")(t._f("addDay")(t.plan.created_time, 30), "DD/MM/YYYY")))])]) : t._e(), t._v(" "), n("n-link", {
                        staticClass: "text-yellow",
                        attrs: {
                            to: "/khuyen-mai?type=promotion100"
                        }
                    }, [t._v("Lưu ý khi sử dụng khuyến mãi")])], 1)])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("p", [e("span", {
                        staticClass: "gradient-text"
                    }, [this._v("Bạn đang dùng khuyến mãi")])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        285: function(t, e, n) {
            "use strict";
            var r = n(198).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("section", {
                        ref: "section-iframe",
                        staticClass: "section section--iframe",
                        class: {
                            loaded: this.loaded
                        },
                        attrs: {
                            id: "section-iframe"
                        }
                    }, [e("img", {
                        staticClass: "section--iframe-img",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/" + this.bgImage
                        }
                    }), this._v(" "), e("div", {
                        ref: "iframe-wrapper",
                        staticClass: "iframe-wrapper"
                    }, [e("iframe", {
                        ref: "iframe",
                        attrs: {
                            id: "iframe"
                        }
                    })])])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        302: function(t, e, n) {
            "use strict";
            n(16), n(51);
            var r = n(28),
                o = n(12),
                c = n(27),
                l = window.__NUXT__;

            function m() {
                if (!this._hydrated) return this.$fetch()
            }

            function h() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                    var t;
                    this._hydrated = !0, this._fetchKey = +this.$vnode.elm.dataset.fetchKey;
                    var data = l.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var e in data) o.default.set(this.$data, e, data[e])
                }
            }

            function d() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = f.call(this).then((function() {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function f() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, n, r, o = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 14;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(c.o)(t.t0);
                            case 14:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    t.next = 18;
                                    break
                                }
                                return t.next = 18, new Promise((function(t) {
                                    return setTimeout(t, r)
                                }));
                            case 18:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 22:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function() {
                    Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = d.bind(this), Object(c.a)(this, "created", h), Object(c.a)(this, "beforeMount", m))
                }
            }
        },
        303: function(t, e, n) {
            "use strict";
            n(43), n(51);
            var r = n(28),
                o = (n(45), {
                    watch: {
                        $route: function() {
                            this.hiddenFooter()
                        }
                    },
                    data: function() {
                        return {
                            hidden: !1,
                            categories: []
                        }
                    },
                    computed: {
                        user: function() {
                            return this.$store.state.user
                        },
                        currentTab: function() {
                            return this.$store.getters.getCurrentTab
                        }
                    },
                    methods: {
                        moveTo: function(link, t) {
                            this.$openLink(link, {
                                type: t
                            })
                        },
                        hiddenFooter: function() {
                            window.innerWidth <= 768 && ("user-deposit" === this.$route.name || "user-withdraw" === this.$route.name || "event-noel" === this.$route.name ? this.hidden = !0 : this.hidden = !1)
                        },
                        handleGetCat: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$postApi.getCategories();
                                        case 2:
                                            "OK" === (n = e.sent).status && (t.categories = n.categories.slice(0, 5));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    },
                    created: function() {
                        this.handleGetCat()
                    },
                    mounted: function() {
                        this.hiddenFooter()
                    }
                }),
                c = n(33),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.hidden ? t._e() : n("footer", {
                        directives: [{
                            name: "lazy-container",
                            rawName: "v-lazy-container",
                            value: {
                                selector: "img",
                                error: "/assets/img/icon/footer-lazy.png",
                                loading: "/assets/img/icon/footer-lazy.png"
                            },
                            expression: "{ selector: 'img', error: '/assets/img/icon/footer-lazy.png', loading: '/assets/img/icon/footer-lazy.png' }"
                        }],
                        staticClass: "footer",
                        class: {
                            "footer--login": null != this.$store.state.user
                        },
                        attrs: {
                            id: "footer"
                        }
                    }, [n("b-container", [n("div", {
                        staticClass: "footer__top flex-box just-between"
                    }, [n("div", {
                        staticClass: "footer-menu"
                    }, [n("ul", {
                        staticClass: "flex-box"
                    }, [n("li", [n("n-link", {
                        attrs: {
                            to: "/tin-tuc"
                        }
                    }, [t._v("Tin tức")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/gioi-thieu"
                        }
                    }, [t._v("Về chúng tôi")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/chinh-sach-bao-mat"
                        }
                    }, [t._v("Chính sách bảo mật")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/dieu-khoan-dieu-kien"
                        }
                    }, [t._v("Điều khoản & điều kiện")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/huong-dan"
                        }
                    }, [t._v("Hướng dẫn")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/khuyen-mai"
                        }
                    }, [t._v("Khuyến mãi")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/cau-hoi-thuong-gap"
                        }
                    }, [t._v("Câu hỏi thường gặp")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/mien-trach-nhiem"
                        }
                    }, [t._v("Miễn trách nhiệm")])], 1)])]), t._v(" "), n("div", {
                        staticClass: "footer-scroll flex-box"
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/responsible.png",
                            alt: "img"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "footer__middle"
                    }, [n("b-row", [n("b-col", {
                        attrs: {
                            cols: "9"
                        }
                    }, [n("div", {
                        staticClass: "footer-wrapper"
                    }, [n("div", {
                        staticClass: "width-fourhaft"
                    }, [n("ul", {
                        staticClass: "footer-contact"
                    }, [n("li", [t._v("Hỗ trợ khách hàng 24/7")]), t._v(" "), n("li", {
                        staticClass: "flex-box"
                    }, [n("span", {
                        staticClass: "icon flex-box just-center"
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/phone.svg",
                            alt: "phone"
                        }
                    })]), t._v("\n                                SĐT: "), n("a", {
                        attrs: {
                            href: "tel: +84" + this.$t("contact.phone") + " "
                        }
                    }, [t._v(t._s("+84") + " " + t._s(t._f("fomatPhone3")(this.$t("contact.phone"))))])]), t._v(" "), n("li", {
                        staticClass: "flex-box"
                    }, [n("span", {
                        staticClass: "icon icon-zalo flex-box just-center"
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/zalo.svg",
                            alt: "phone"
                        }
                    })]), t._v("\n                                Zalo: "), n("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://zalo.me/" + this.$t("contact.zalo")
                        }
                    }, [t._v(t._s(t._f("fomatPhone")(this.$t("contact.zalo"))))])]), t._v(" "), n("li", {
                        staticClass: "flex-box"
                    }, [n("span", {
                        staticClass: "icon flex-box just-center"
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/viber.svg",
                            alt: "phone"
                        }
                    })]), t._v("\n                                Viber: "), n("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://viber.me/" + this.$t("contact.viber")
                        }
                    }, [t._v(t._s(t._f("fomatPhone")(this.$t("contact.viber"))))])]), t._v(" "), n("li", {
                        staticClass: "flex-box"
                    }, [n("span", {
                        staticClass: "icon flex-box just-center"
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/mail.svg",
                            alt: "phone"
                        }
                    })]), t._v("\n                                Email: "), n("a", {
                        attrs: {
                            href: "mailto:" + this.$t("contact.email")
                        }
                    }, [t._v(t._s(this.$t("contact.email")))])])])]), t._v(" "), n("div", {
                        staticClass: "width-fourhaft"
                    }, [n("ul", {
                        staticClass: "list-menu"
                    }, [n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("sports", "LOBBY")
                            }
                        }
                    }, [t._v("Sports")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/virtual-sports", "GAME")
                            }
                        }
                    }, [t._v("Virtual Sports")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/livecasino", "GAME")
                            }
                        }
                    }, [t._v("Live Casino")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/lode", "GAME")
                            }
                        }
                    }, [t._v("Lô Đề")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/games?type=slots", "LOBBY")
                            }
                        }
                    }, [t._v("Slots Game")])])])]), t._v(" "), n("div", {
                        staticClass: "width-fourhaft"
                    }, [n("ul", {
                        staticClass: "list-menu"
                    }, [n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/games?type=lottery", "GAME")
                            }
                        }
                    }, [t._v("Quay Số")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/games?type=ingame", "GAME")
                            }
                        }
                    }, [t._v("Ingame")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/keno", "GAME")
                            }
                        }
                    }, [t._v("Keno")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/number-game", "GAME")
                            }
                        }
                    }, [t._v("Numbers Game")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.moveTo("/games?type=fishing", "LOBBY")
                            }
                        }
                    }, [t._v("Bắn Cá")])])])]), t._v(" "), n("div", {
                        staticClass: "width-fourhaft"
                    }, [n("ul", {
                        staticClass: "list-menu"
                    }, [n("li", [n("n-link", {
                        attrs: {
                            to: "/the-loai/soi-keo-bong-da"
                        }
                    }, [t._v("Soi Kèo Bóng Đá")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/the-loai/lo-de-online"
                        }
                    }, [t._v("Lô Đề Online")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/the-loai/su-kien-the-thao"
                        }
                    }, [t._v("Sự Kiện Thể Thao")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/the-loai/nhan-dinh-bong-da"
                        }
                    }, [t._v("Nhận Định Bóng Đá")])], 1), t._v(" "), n("li", [n("n-link", {
                        attrs: {
                            to: "/the-loai/tip-bong-da"
                        }
                    }, [t._v("Tip Bóng Đá")])], 1)])])])]), t._v(" "), n("b-col", {
                        attrs: {
                            cols: "3"
                        }
                    }, [n("div", {
                        staticClass: "footer-infomation"
                    }, [n("div", {
                        staticClass: "title-widget"
                    }, [t._v("Giới thiệu về chúng tôi")]), t._v(" "), n("p", [t._v("Đến với FCB8 là bạn đang đến với thế giới\n                        của sự chuyên nghiệp, đẳng cấp. Tận hưởng\n                        thế giới cá cược online uy tín... "), n("n-link", {
                        staticClass: "text-yellow",
                        attrs: {
                            to: "/gioi-thieu"
                        }
                    }, [t._v("Xem Thêm")])], 1)]), t._v(" "), n("div", {
                        staticClass: "logo-partner"
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo18.png",
                            alt: "18"
                        }
                    }), t._v(" "), n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logopartner.png",
                            alt: "logopartner"
                        }
                    }), t._v(" "), n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/mga.png",
                            alt: "mga"
                        }
                    })])])], 1)], 1), t._v(" "), n("div", {
                        staticClass: "footer__bottom flex-box justify-content-between"
                    }, [n("div", {
                        staticClass: "footer-logo flex-box"
                    }, [n("div", {
                        staticClass: "logo"
                    }, [n("a", {
                        attrs: {
                            href: "/"
                        }
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/logo.png",
                            alt: "logo"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "footer-social"
                    }, [n("div", {
                        staticClass: "title-widget"
                    }, [t._v("Kết nối với chúng tôi")]), t._v(" "), n("ul", {
                        staticClass: "flex-box"
                    }, [n("li", [n("a", {
                        attrs: {
                            href: "" + this.$t("social.facebook"),
                            target: "_blank"
                        }
                    }, [n("svg", {
                        attrs: {
                            width: "30",
                            height: "30",
                            viewBox: "0 0 30 30",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M21.916 1.20089V5.62054H19.2877C18.3278 5.62054 17.6805 5.82143 17.3457 6.22322C17.0109 6.625 16.8435 7.22768 16.8435 8.03125V11.1953H21.7486L21.0957 16.1507H16.8435V28.8571H11.7207V16.1507H7.45172V11.1953H11.7207V7.54576C11.7207 5.46987 12.3011 3.86272 13.4618 2.72433C14.6225 1.57478 16.1682 1 18.099 1C19.7397 1 21.012 1.06696 21.916 1.20089Z",
                            fill: "#BCBCBC"
                        }
                    })])])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "" + this.$t("social.youtube"),
                            target: "_blank"
                        }
                    }, [n("svg", {
                        attrs: {
                            width: "30",
                            height: "30",
                            viewBox: "0 0 30 30",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M20.9263 15.6183C21.2612 15.4286 21.4286 15.1272 21.4286 14.7143C21.4286 14.3013 21.2612 14 20.9263 13.8103L12.3549 8.45312C12.0089 8.22991 11.6462 8.21875 11.2667 8.41964C10.8984 8.62053 10.7143 8.93303 10.7143 9.35714V20.0714C10.7143 20.4955 10.8984 20.808 11.2667 21.0089C11.4453 21.0982 11.6183 21.1429 11.7857 21.1429C12.0089 21.1429 12.1987 21.0871 12.3549 20.9754L20.9263 15.6183ZM29.9833 12.2031C29.9944 12.8058 30 13.6429 30 14.7143C30 15.7857 29.9944 16.6228 29.9833 17.2254C29.9721 17.8281 29.9219 18.5926 29.8326 19.519C29.7545 20.4342 29.6317 21.2545 29.4643 21.9799C29.2857 22.7946 28.9007 23.481 28.3092 24.0391C27.7176 24.5971 27.0257 24.9208 26.2333 25.01C23.7556 25.2891 20.0112 25.4286 15 25.4286C9.98884 25.4286 6.24442 25.2891 3.76674 25.01C2.97433 24.9208 2.27679 24.5971 1.67411 24.0391C1.08259 23.481 0.697545 22.7946 0.518973 21.9799C0.362723 21.2545 0.239955 20.4342 0.15067 19.519C0.0725446 18.5926 0.0279018 17.8281 0.0167411 17.2254C0.00558036 16.6228 0 15.7857 0 14.7143C0 13.6429 0.00558036 12.8058 0.0167411 12.2031C0.0279018 11.6004 0.0725446 10.8415 0.15067 9.92634C0.239955 9 0.368304 8.17411 0.535714 7.44866C0.714286 6.63393 1.09933 5.94754 1.69085 5.38951C2.28237 4.83147 2.97433 4.50781 3.76674 4.41853C6.24442 4.13951 9.98884 4 15 4C20.0112 4 23.7556 4.13951 26.2333 4.41853C27.0257 4.50781 27.7176 4.83147 28.3092 5.38951C28.9118 5.94754 29.3025 6.63393 29.481 7.44866C29.6373 8.17411 29.7545 9 29.8326 9.92634C29.9219 10.8415 29.9721 11.6004 29.9833 12.2031Z",
                            fill: "#BCBCBC"
                        }
                    })])])])])])]), t._v(" "), n("div", {
                        staticClass: "footer-partner"
                    }, [n("div", {}, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/n2-live.png",
                            alt: "n2 live"
                        }
                    }), t._v(" "), n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/techplay.png",
                            alt: "techplay"
                        }
                    }), t._v(" "), n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/ezugi.png",
                            alt: "ezugi"
                        }
                    })]), t._v(" "), n("div", {}, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/vivo.png",
                            alt: "vivo"
                        }
                    }), t._v(" "), n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/ebet.png",
                            alt: "ebet"
                        }
                    }), t._v(" "), n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/evolution.png",
                            alt: "evolution"
                        }
                    })])])]), t._v(" "), n("div", {
                        staticClass: "footer__mobile show-mobile"
                    }, [n("n-link", {
                        staticClass: "logo",
                        attrs: {
                            to: "/"
                        }
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/logo.png",
                            alt: "logo"
                        }
                    })]), t._v(" "), n("p", [t._v("Đến với FCB8 là bạn đang đến với thế giới của\n                sự chuyên nghiệp, đẳng cấp. Tận hưởng thế giới cá cược online uy tín... "), n("n-link", {
                        staticClass: "text-yellow",
                        attrs: {
                            to: "/gioi-thieu"
                        }
                    }, [t._v(" Xem Thêm")])], 1)], 1), t._v(" "), n("div", {
                        staticClass: "bottom flex-box justify-content-between"
                    }, [n("div", {
                        staticClass: "logo-bank"
                    }, [n("ul", {
                        staticClass: "flex-box"
                    }, [n("li", [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo-Vietcombank.svg",
                            alt: "Vietcombank"
                        }
                    })]), t._v(" "), n("li", [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo-DongA.svg",
                            alt: "DongA"
                        }
                    })]), t._v(" "), n("li", [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo-ACB.svg",
                            alt: "ACB"
                        }
                    })]), t._v(" "), n("li", [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo-BIDV.svg",
                            alt: "BIDV"
                        }
                    })]), t._v(" "), n("li", [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo-Techcombank.svg",
                            alt: "Techcombank"
                        }
                    })]), t._v(" "), n("li", [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo-Vietinbank.svg",
                            alt: "Vietinbank"
                        }
                    })]), t._v(" "), n("li", [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo-Sacombank.svg",
                            alt: "Sacombank"
                        }
                    })]), t._v(" "), n("li", [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo-eximbank.svg",
                            alt: "Sacombank"
                        }
                    })]), t._v(" "), n("li", [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/logo-vietcapital.svg",
                            alt: "Sacombank"
                        }
                    })])])]), t._v(" "), n("ul", {
                        staticClass: "copyright flex-box"
                    }, [n("li", [t._v("©2020 Bản Quyền Thuộc FCB8")]), t._v(" "), n("li", [t._v("18+")])])])])], 1)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        304: function(t, e, n) {
            "use strict";
            n(21), n(15), n(19), n(18), n(16), n(20);
            var r = n(3),
                o = (n(51), n(28)),
                c = n(93),
                l = n(49);

            function m(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function h(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(e) {
                        Object(r.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var d = {
                    mixins: [c.validationMixin],
                    data: function() {
                        return {
                            formData: {
                                email: ""
                            },
                            error: "",
                            isSubmit: !1
                        }
                    },
                    validations: {
                        formData: {
                            email: {
                                required: l.required,
                                email: l.email
                            }
                        }
                    },
                    methods: {
                        submit: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, t.$v.$touch(), t.$v.$invalid || t.isSubmit) {
                                                e.next = 17;
                                                break
                                            }
                                            return t.error = "", t.isSubmit = !0, e.next = 7, t.$userApi.verifyEmail(h({}, t.formData));
                                        case 7:
                                            if (!e.sent.exist) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 11, t.$userApi.forgotPassword(h({}, t.formData));
                                        case 11:
                                            "OK" === (n = e.sent).status ? (t.$alert(n.message), setTimeout((function() {
                                                t.$Swal.close(), t.$bvModal.hide("forgotPasswordModal")
                                            }), 2500)) : t.error = "Hệ thống đang bảo trì. Vui lòng quay lại sau", e.next = 16;
                                            break;
                                        case 15:
                                            t.error = "Email không tồn tại trong hệ thống.";
                                        case 16:
                                            t.isSubmit = !1;
                                        case 17:
                                            e.next = 22;
                                            break;
                                        case 19:
                                            e.prev = 19, e.t0 = e.catch(0), t.isSubmit = !1;
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 19]
                                ])
                            })))()
                        },
                        resetModal: function() {
                            this.$v.$reset(), this.formData.email = ""
                        }
                    }
                },
                f = n(33),
                component = Object(f.a)(d, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("b-modal", {
                        attrs: {
                            id: "forgotPasswordModal",
                            "content-class": "modal-custom modal--full-height form-forgotpass",
                            "hide-footer": ""
                        },
                        on: {
                            show: t.resetModal,
                            hidden: t.resetModal
                        },
                        scopedSlots: t._u([{
                            key: "modal-title",
                            fn: function() {
                                return [n("span", {
                                    staticClass: "gradient-text"
                                }, [t._v("QUÊN MẬT KHẨU")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), n("form", {
                        staticClass: "form form-custom text-center",
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), t.submit.apply(null, arguments)
                            }
                        }
                    }, [n("div", {
                        staticClass: "form-custom-input",
                        class: {
                            error: t.$v.formData.email.$error || t.error
                        }
                    }, [n("div", {
                        staticClass: "wrap-input"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: t.$v.formData.email.$model,
                            expression: "$v.formData.email.$model",
                            modifiers: {
                                trim: !0
                            }
                        }],
                        staticClass: "form-input",
                        attrs: {
                            placeholder: "Nhập email đã đăng ký",
                            type: "text"
                        },
                        domProps: {
                            value: t.$v.formData.email.$model
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.$v.formData.email, "$model", e.target.value.trim())
                            },
                            blur: function(e) {
                                return t.$forceUpdate()
                            }
                        }
                    })]), t._v(" "), t.$v.formData.email.$error || t.error ? n("div", [t.$v.formData.email.required ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v(t._s(t.$t("errors.email.required")))]), t._v(" "), t.$v.formData.email.email ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v(t._s(t.$t("errors.email.email")))]), t._v(" "), t.$v.formData.email.$error ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v(t._s(t.error))])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "text-note"
                    }, [t._v("Link tạo mật khẩu mới sẽ được gửi tới email mà quý khách đã đăng ký")]), t._v(" "), n("d-button", {
                        staticClass: "button button--blue",
                        attrs: {
                            apply: t.submit,
                            disabled: t.isSubmit,
                            loading: t.isSubmit,
                            type: "submit"
                        }
                    }, [t._v("\n            GỬI\n        ")])], 1)])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        305: function(t, e, n) {
            "use strict";
            var r = {
                    computed: {
                        newDomain: function() {
                            return "fcb8.vip"
                        }
                    },
                    methods: {
                        closeModal: function() {
                            this.$hidePopupById("domainChangeModal"), this.$store.commit("setDomainChangeShow", !1)
                        }
                    }
                },
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("b-modal", {
                        attrs: {
                            id: "domainChangeModal",
                            "modal-class": "domain-change-modal",
                            "hide-header": !0,
                            "hide-footer": !0,
                            "no-close-on-backdrop": "",
                            "dialog-class": "modal-dialog domain-change-modal__dialog",
                            "no-close-on-esc": "",
                            centered: ""
                        },
                        on: {
                            hide: t.closeModal
                        }
                    }, [n("a", {
                        staticClass: "btn btn-close",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.closeModal.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/icon-close-modal.png"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "domain-change-modal__content"
                    }, [n("div", {
                        staticClass: "domain-change-modal__body"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("\n                THÔNG BÁO ĐỔI TÊN MIỀN\n            ")]), t._v(" "), n("div", {
                        staticClass: "content"
                    }, [n("p", [t._v("\n                    Nhà cái FCB8 thay đổi địa chỉ truy cập website sang:\n                ")]), t._v(" "), n("a", {
                        staticClass: "highlight",
                        attrs: {
                            href: "https://" + t.newDomain
                        }
                    }, [t._v("\n                    " + t._s(t.newDomain) + "\n                ")]), t._v(" "), n("p", [t._v("\n                    Xin Quý khách lưu ý. Cám ơn quý khách!\n                ")])])])])])
                }), [], !1, null, "696a2835", null);
            e.a = component.exports
        },
        306: function(t, e, n) {
            "use strict";
            var r = {
                    computed: {
                        newDomain: function() {
                            return "fcb8.vip"
                        }
                    },
                    methods: {
                        closeModal: function() {
                            this.$hidePopupById("warningModal");
                            var t = this.$cookies.get("closeCount");
                            if (void 0 !== t) {
                                switch (t) {
                                    case "0":
                                        this.$cookies.set("closeCount", 1, {
                                            path: "/",
                                            maxAge: 2592e3
                                        }), this.$cookies.set("warning", !0, {
                                            path: "/",
                                            maxAge: 21600
                                        });
                                        break;
                                    case "1":
                                        this.$cookies.set("warning", !0, {
                                            path: "/",
                                            maxAge: 2592e3
                                        }), this.$cookies.set("closeCount", 2, {
                                            path: "/",
                                            maxAge: 2592e3
                                        })
                                }
                                this.$hidePopupById("warningModal")
                            } else this.$cookies.set("closeCount", 0, {
                                path: "/",
                                maxAge: 2592e3
                            }), this.$cookies.set("warning", !0, {
                                path: "/",
                                maxAge: 21600
                            })
                        }
                    }
                },
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("b-modal", {
                        attrs: {
                            id: "warningModal",
                            "modal-class": "domain-change-modal",
                            "hide-header": !0,
                            "hide-footer": !0,
                            "no-close-on-backdrop": "",
                            "dialog-class": "modal-dialog domain-change-modal__dialog",
                            "no-close-on-esc": "",
                            centered: ""
                        }
                    }, [n("a", {
                        staticClass: "btn btn-close",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.closeModal.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/close-modal.svg"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "domain-change-modal__content"
                    }, [n("div", {
                        staticClass: "domain-change-modal__body"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("\n                CẢNH BÁO LỪA ĐẢO\n            ")]), t._v(" "), n("div", {
                        staticClass: "sub"
                    }, [t._v("\n                FCB8 NHÀ CÁI HÀNG ĐẦU CHÂU ÂU KHÔNG THÔNG QUA ĐẠI LÝ\n            ")]), t._v(" "), n("div", {
                        staticClass: "content"
                    }, [n("p", [t._v("\n                    FCB8 xin thông báo đến Quý Khách Hàng hiện tại\n                    "), n("span", [t._v("không có đại lý chính thức ")]), n("br"), t._v(" Mọi giao dịch “Nạp - Rút” chỉ có thể thực hiện trực tiếp tại website\n                ")]), t._v(" "), n("a", {
                        staticClass: "highlight",
                        attrs: {
                            href: "https://" + t.newDomain
                        }
                    }, [t._v("\n                    " + t._s(t.newDomain) + "\n                ")]), t._v(" "), n("p", [t._v("\n                    Vui lòng không cung cấp thông tin tài khoản cho bất kỳ ai "), n("br"), t._v("\n                    Xin cảm ơn !!!\n                ")])])])])])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        307: function(t, e, n) {
            "use strict";
            n(51);
            var r = n(28),
                o = n(280),
                c = n.n(o),
                l = (n(321), {
                    components: {
                        RangeSlider: c.a
                    },
                    props: [],
                    data: function() {
                        return {
                            balance: 0,
                            oldBalance: 0,
                            balanceSub: 0,
                            oldBalanceSub: 0,
                            maxBalance: 0,
                            isSubmit: !1,
                            isChangeOk: !1
                        }
                    },
                    computed: {
                        wallet: function() {
                            return this.$store.state.wallet
                        }
                    },
                    watch: {
                        balance: function(t) {
                            this.$refs.balanceInput && (t > this.maxBalance && (t = this.maxBalance), this.balance = t, this.$refs.balanceInput.value = t, this.balanceSub = this.maxBalance - this.balance)
                        },
                        balanceSub: function(t) {
                            this.$refs.balanceSubInput && (t > this.maxBalance && (t = this.maxBalance), this.balanceSub = t, this.$refs.balanceSubInput.value = t, this.balance = this.maxBalance - this.balanceSub)
                        },
                        wallet: function(t) {
                            this.balance = t.balance, this.oldBalance = t.oldBalance, this.balanceSub = t.balanceSub, this.oldBalanceSub = t.oldBalanceSub, this.maxBalance = t.maxBalance
                        }
                    },
                    methods: {
                        transfer: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.isSubmit) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (t.isSubmit = !0, 0 === (n = t.balanceSub - t.oldBalanceSub)) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 7, t.$store.dispatch("transferMoney", {
                                                amount: n,
                                                balance: t.balance
                                            });
                                        case 7:
                                            (r = e.sent) && "OK" === r.status ? (t.oldBalanceSub = t.balanceSub, t.oldBalance = t.balance, t.$store.dispatch("updateWallet", {
                                                oldBalance: t.balance,
                                                balance: t.balance,
                                                oldBalanceSub: t.balanceSub,
                                                balanceSub: t.balanceSub,
                                                maxBalance: t.balance + t.balanceSub
                                            }), t.isSubmit = !1, t.isChangeOk = !0) : (t.$alertError("Có lỗi khi chuyển ví. Vui lòng thử lại"), t.$store.dispatch("getWallet"));
                                        case 9:
                                            t.isSubmit = !1;
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        checkvalue: function(t) {
                            t > this.maxBalance && (t = this.maxBalance), this.balance = t, this.$refs.balanceInput.value = t, this.balanceSub = this.maxBalance - this.balance
                        },
                        goTo: function(t) {
                            this.$bvModal.hide("tranferWalletModal"), this.$router.push(t)
                        },
                        resetWallet: function() {
                            this.isChangeOk = !1
                        }
                    },
                    mounted: function() {}
                }),
                m = n(33),
                component = Object(m.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("b-modal", {
                        attrs: {
                            id: "tranferWalletModal",
                            "content-class": "modal-tranferwallet",
                            "hide-footer": ""
                        },
                        on: {
                            hide: t.resetWallet
                        },
                        scopedSlots: t._u([{
                            key: "modal-title",
                            fn: function() {
                                return [t._v("\n      Chuyển Ví\n    ")]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), n("form", {
                        staticClass: "sport__form"
                    }, [n("div", {
                        staticClass: "wallet__slider"
                    }, [n("div", {
                        staticClass: "main-slider"
                    }, [n("div", {
                        staticClass: "wallet__title-text"
                    }, [n("div", {
                        staticClass: "first-slider text-normal"
                    }, [n("span", [t._v("VÍ CHÍNH:")]), t._v(" "), n("span", {
                        ref: "balanceInput",
                        staticClass: "wallet__input"
                    }, [t._v(t._s(t._f("formatAmount")(t.balance)))]), t._v(" "), n("p", [n("small", [t._v("C-Thể Thao, Lô Đề, Keno,..")])])]), t._v(" "), n("div", {
                        staticClass: "second-slider text-normal"
                    }, [n("span", [t._v("VÍ PHỤ:")]), t._v(" "), n("span", {
                        ref: "balanceSubInput",
                        staticClass: "wallet__input"
                    }, [t._v(t._s(t._f("formatAmount")(t.balanceSub)))]), t._v(" "), n("p", [n("small", [t._v("M-Thể Thao & Thể Thao Ảo")])])])]), t._v(" "), n("div", {
                        staticClass: "wallet__wrap-slider-process wrapMainWallet"
                    }, [n("range-slider", {
                        ref: "mainWallet",
                        staticClass: "slider",
                        attrs: {
                            type: "range",
                            min: "0",
                            max: t.maxBalance,
                            step: "1",
                            "data-orientation": "horizontal"
                        },
                        on: {
                            change: t.checkvalue
                        },
                        model: {
                            value: t.balance,
                            callback: function(e) {
                                t.balance = e
                            },
                            expression: "balance"
                        }
                    })], 1), t._v(" "), null !== this.$store.state.user && 0 === this.$store.state.wallet.balance && 0 === this.$store.state.wallet.balanceSub ? n("div", [n("p", {
                        staticClass: "text-center"
                    }, [t._v("Vui lòng nạp tiền vào ví chính để sử dụng chức năng này !")]), t._v(" "), n("button", {
                        staticClass: "button btn-submit",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.goTo("/user/deposit?tab=index")
                            }
                        }
                    }, [t._v("NẠP TIỀN")])]) : n("d-button", {
                        staticClass: "button btn-submit",
                        class: {
                            success: t.isChangeOk && this.oldBalanceSub === this.balanceSub
                        },
                        attrs: {
                            apply: t.transfer,
                            type: "button",
                            disabled: this.oldBalanceSub === this.balanceSub,
                            loading: t.isSubmit
                        }
                    }, [t.isChangeOk && this.oldBalanceSub === this.balanceSub ? t._e() : n("span", [t._v("XÁC NHẬN")]), t._v(" "), t.isChangeOk && this.oldBalanceSub === this.balanceSub ? n("span", [t._v("CHUYỂN VÍ THÀNH CÔNG")]) : t._e()])], 1)])])])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        308: function(t, e, n) {
            "use strict";
            var r = {
                    components: {},
                    data: function() {
                        return {}
                    },
                    computed: {},
                    watch: {},
                    methods: {},
                    mounted: function() {}
                },
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("b-modal", {
                        attrs: {
                            id: "livechatMaintain",
                            "content-class": "modal-custom popup-livechat",
                            "hide-footer": ""
                        }
                    }, [n("div", {
                        staticClass: "livechat"
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/livechat-maintain.png",
                            alt: "livechat"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "content text-center"
                    }, [n("p", [t._v("Livechat sẽ tạm dừng hỗ trợ để bảo trì từ "), n("span", [t._v("12:00-13:00")]), t._v(" ngày "), n("span", [t._v("14/03")]), t._v(". Quý khách cần hỗ trợ vui lòng liên hệ Hotline, Zalo số "), n("span", [t._v("0366.99.6789")]), t._v(" (hoặc Fanpage FB "), n("a", {
                        attrs: {
                            href: "https://www.facebook.com/nhacaifcb8/",
                            target: "_blank"
                        }
                    }, [n("span", [t._v("https://www.facebook.com/nhacaifcb8/)")])]), t._v(".\n                "), n("br"), t._v("Xin Quý Khách thứ lỗi vì sự bất tiện này.")])])])])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        309: function(t, e, n) {
            "use strict";
            var r = n(191).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return null !== this.user ? n("div", {
                        staticClass: "menu-mobile"
                    }, [n("ul", {
                        staticClass: "menu-mobile-list flex-box"
                    }, [n("li", [n("a", {
                        staticClass: "menu-mobile-item toggle-menu",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            "&click": function(e) {
                                return t.openMenu.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/menu.png",
                            alt: "home"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "active",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/menu-active.png",
                            alt: "home"
                        }
                    }), t._v(" "), n("span", [t._v("Menu")])])]), t._v(" "), n("li", [n("n-link", {
                        staticClass: "menu-mobile-item",
                        class: {
                            active: "sport" === t.currentTab
                        },
                        attrs: {
                            to: "/sports"
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/sport-nav.png",
                            alt: "sport"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "active",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/sport-nav-active.png",
                            alt: "sport"
                        }
                    }), t._v(" "), n("span", [t._v("Thể thao")])])], 1), t._v(" "), n("li", [n("a", {
                        staticClass: "menu-mobile-item",
                        class: {
                            active: "deposit" === t.currentTab
                        },
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            "&click": function(e) {
                                return t.onMoveTo("/user/deposit?tab=index")
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/deposit.png",
                            alt: "deposit"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "active",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/deposit-active.png",
                            alt: "deposit"
                        }
                    }), t._v(" "), n("span", [t._v("Nạp tiền")])])]), t._v(" "), n("li", [n("a", {
                        staticClass: "menu-mobile-item",
                        attrs: {
                            "data-toggle": "modal",
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.openTranferWallet.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/transfer.png",
                            alt: "icon wallet"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "active",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/transfer-active.png",
                            alt: "icon wallet"
                        }
                    }), t._v(" "), n("span", [t._v("Chuyển ví")])])]), t._v(" "), n("li", [n("n-link", {
                        staticClass: "menu-mobile-item menu-mobile-item__promotion",
                        class: {
                            active: "saleoff" === t.currentTab
                        },
                        attrs: {
                            to: "/khuyen-mai"
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/promption.png",
                            alt: "saleoff"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "active",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/promption-active.png",
                            alt: "saleoff"
                        }
                    }), t._v(" "), n("span", [t._v("Khuyến mãi")])])], 1)])]) : t._e()
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        310: function(t, e, n) {
            "use strict";
            var r = n(192).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "nav-mobile",
                        attrs: {
                            id: "wrapNav"
                        }
                    }, [n("div", {
                        ref: "boxTop",
                        staticClass: "flex-box nav-mobile-close"
                    }, [n("a", {
                        staticClass: "logo",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.goTo("/")
                            }
                        }
                    }, [n("r-img", {
                        attrs: {
                            type: "webp",
                            static: this.$store.state.mapDomain.STATIC_URL + "/assets/img/logo.png",
                            alt: "tic88"
                        }
                    })], 1), t._v(" "), n("a", {
                        staticClass: "close",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.closeMenu.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/icon-close.svg",
                            alt: "close"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "flex-box nav-mobile-authentication"
                    }, [null === t.user ? [n("a", {
                        staticClass: "button",
                        attrs: {
                            href: "javascript:void(0)",
                            to: "/register"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.openRegister.apply(null, arguments)
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
                    })]), t._v("\n                ĐĂNG KÝ")]), t._v(" "), n("a", {
                        staticClass: "button button--blue",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.openLogin.apply(null, arguments)
                            }
                        }
                    }, [t._v("ĐĂNG NHẬP")])] : [n("n-link", {
                        staticClass: "button",
                        attrs: {
                            to: "/user/deposit?tab=index"
                        }
                    }, [t._v("NẠP TIỀN")]), t._v(" "), n("n-link", {
                        staticClass: "button button--blue",
                        attrs: {
                            to: "/user/withdraw"
                        }
                    }, [t._v("RÚT TIỀN")])]], 2), t._v(" "), n("div", {
                        ref: "boxMiddle",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.closeMenu.apply(null, arguments)
                            }
                        }
                    }, [n("gameSection", {
                        attrs: {
                            "is-menu": !0
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "nav-mobile-slide"
                    }, [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onMoveTo("/khuyen-mai")
                            }
                        }
                    }, [n("d-img", {
                        attrs: {
                            src: t.getUrlStatic("/promotion/promotion.gif"),
                            alt: "banner"
                        }
                    })], 1)]), t._v(" "), n("div", {
                        ref: "boxBottom",
                        staticClass: "accordion__menu",
                        attrs: {
                            role: "tablist"
                        }
                    }, [t.$isEnableThemeNoel() ? n("div", {
                        staticClass: "accordion__menu__item"
                    }, [n("div", {
                        staticClass: "accordion-header"
                    }, [n("n-link", {
                        staticClass: "title",
                        attrs: {
                            to: "/event/noel"
                        }
                    }, [t._v("\n                    Sự Kiện Lật Thẻ May Mắn\n                ")])], 1), t._v(" "), n("img", {
                        staticClass: "ic-event",
                        attrs: {
                            src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/header/icon-event.svg",
                            alt: "hot"
                        }
                    })]) : t._e(), t._v(" "), n("div", {
                        staticClass: "accordion__menu__item"
                    }, [n("div", {
                        staticClass: "accordion-header"
                    }, [n("n-link", {
                        staticClass: "title",
                        attrs: {
                            to: "/games"
                        }
                    }, [t._v("\n                    Game Center\n                ")])], 1)]), t._v(" "), n("div", {
                        staticClass: "accordion__menu__item"
                    }, [n("div", {
                        staticClass: "accordion-header"
                    }, [n("n-link", {
                        staticClass: "title",
                        attrs: {
                            to: "/khuyen-mai"
                        }
                    }, [t._v("\n                    Khuyến Mãi\n                ")])], 1)]), t._v(" "), n("div", {
                        staticClass: "accordion__menu__item"
                    }, [n("div", {
                        staticClass: "accordion-header"
                    }, [n("n-link", {
                        staticClass: "title",
                        attrs: {
                            to: "/tin-tuc"
                        }
                    }, [t._v("\n                    Tin Tức\n                ")])], 1)]), t._v(" "), n("div", {
                        staticClass: "accordion__menu__item",
                        attrs: {
                            "no-body": ""
                        }
                    }, [n("div", {
                        staticClass: "accordion-header",
                        attrs: {
                            "header-tag": "header",
                            role: "tab"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.collapseScroll.apply(null, arguments)
                            }
                        }
                    }, [n("div", {
                        directives: [{
                            name: "b-toggle",
                            rawName: "v-b-toggle.accordion-about",
                            modifiers: {
                                "accordion-about": !0
                            }
                        }],
                        staticClass: "title class-css",
                        attrs: {
                            block: "",
                            variant: "info"
                        }
                    }, [t._v("Giới thiệu về FCB8")])]), t._v(" "), n("b-collapse", {
                        attrs: {
                            id: "accordion-about",
                            accordion: "my-accordion",
                            role: "tabpanel"
                        }
                    }, [n("div", {
                        staticClass: "accordion-body"
                    }, [n("ul", {
                        staticClass: "list-menu-mobile"
                    }, t._l(t.aboutItem, (function(e, r) {
                        return n("li", {
                            key: r
                        }, [n("n-link", {
                            attrs: {
                                to: e.link
                            }
                        }, [t._v(t._s(e.title))])], 1)
                    })), 0)])])], 1), t._v(" "), n("div", {
                        staticClass: "accordion__menu__item",
                        attrs: {
                            "no-body": ""
                        }
                    }, [n("div", {
                        staticClass: "accordion-header",
                        attrs: {
                            "header-tag": "header",
                            role: "tab"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.collapseScroll.apply(null, arguments)
                            }
                        }
                    }, [n("div", {
                        directives: [{
                            name: "b-toggle",
                            rawName: "v-b-toggle.accordion-guide",
                            modifiers: {
                                "accordion-guide": !0
                            }
                        }],
                        staticClass: "title class-css",
                        attrs: {
                            block: "",
                            variant: "info"
                        }
                    }, [t._v("Hướng Dẫn")])]), t._v(" "), n("b-collapse", {
                        attrs: {
                            id: "accordion-guide",
                            accordion: "my-accordion",
                            role: "tabpanel"
                        }
                    }, [n("div", {
                        staticClass: "accordion-body"
                    }, [n("ul", {
                        staticClass: "list-menu-mobile"
                    }, t._l(t.GuideItem, (function(e, r) {
                        return n("li", {
                            key: r
                        }, [n("n-link", {
                            attrs: {
                                to: e.link
                            }
                        }, [t._v(t._s(e.title))])], 1)
                    })), 0)])])], 1), t._v(" "), n("div", {
                        staticClass: "accordion__menu__item",
                        attrs: {
                            "no-body": ""
                        }
                    }, [n("div", {
                        staticClass: "accordion-header",
                        attrs: {
                            "header-tag": "header",
                            role: "tab"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.collapseScroll.apply(null, arguments)
                            }
                        }
                    }, [n("div", {
                        directives: [{
                            name: "b-toggle",
                            rawName: "v-b-toggle.accordion-contact",
                            modifiers: {
                                "accordion-contact": !0
                            }
                        }],
                        staticClass: "title class-css",
                        attrs: {
                            block: "",
                            variant: "info"
                        }
                    }, [t._v("Liên Hệ")])]), t._v(" "), n("b-collapse", {
                        attrs: {
                            id: "accordion-contact",
                            accordion: "my-accordion",
                            role: "tabpanel"
                        }
                    }, [n("div", {
                        staticClass: "accordion-body"
                    }, [n("ul", {
                        directives: [{
                            name: "lazy-container",
                            rawName: "v-lazy-container",
                            value: {
                                selector: "img",
                                error: "/assets/img/icon/footer-lazy.png",
                                loading: "/assets/img/icon/footer-lazy.png"
                            },
                            expression: "{ selector: 'img', error: '/assets/img/icon/footer-lazy.png', loading: '/assets/img/icon/footer-lazy.png' }"
                        }],
                        staticClass: "footer-contact"
                    }, [n("li", [n("a", {
                        staticClass: "flex-box",
                        attrs: {
                            href: "tel: +84" + this.$t("contact.phone")
                        }
                    }, [n("div", {
                        staticClass: "icon flex-box just-center"
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/phone.svg",
                            alt: "mobile"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "text"
                    }, [n("span", {
                        staticClass: "label"
                    }, [t._v("SĐT: ")]), t._v(" "), n("span", [t._v(t._s("+84") + " " + t._s(t._f("fomatPhone3")(this.$t("contact.phone"))))])])])]), t._v(" "), n("li", [n("a", {
                        staticClass: "flex-box",
                        attrs: {
                            target: "_blank",
                            href: "https://zalo.me/" + this.$t("contact.zalo")
                        }
                    }, [n("div", {
                        staticClass: "icon flex-box just-center"
                    }, [n("img", {
                        attrs: {
                            width: "20",
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/zalo.svg",
                            alt: "zalo"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "text"
                    }, [n("span", {
                        staticClass: "label"
                    }, [t._v("Zalo: ")]), t._v(" "), n("span", [t._v(t._s(t._f("fomatPhone")(this.$t("contact.zalo"))))])])])]), t._v(" "), n("li", [n("a", {
                        staticClass: "flex-box",
                        attrs: {
                            target: "_blank",
                            href: "https://viber.me/" + this.$t("contact.viber")
                        }
                    }, [n("div", {
                        staticClass: "icon flex-box just-center"
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/viber.svg",
                            alt: "viber"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "text"
                    }, [n("span", {
                        staticClass: "label"
                    }, [t._v("Viber: ")]), t._v(" "), n("span", [t._v(t._s(t._f("fomatPhone")(this.$t("contact.viber"))))])])])]), t._v(" "), n("li", [n("a", {
                        staticClass: "flex-box",
                        attrs: {
                            href: "mailto:" + this.$t("contact.email")
                        }
                    }, [n("div", {
                        staticClass: "icon flex-box just-center"
                    }, [n("img", {
                        attrs: {
                            "data-src": this.$store.state.mapDomain.STATIC_URL + "/assets/img/footer/mail.svg",
                            alt: "gmail"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "text"
                    }, [n("span", {
                        staticClass: "label"
                    }, [t._v("Email: ")]), t._v(" "), n("span", [t._v(t._s(this.$t("contact.email")))])])])])])])])], 1), t._v(" "), t.$store.state.user ? n("div", {
                        staticClass: "accordion__menu__item"
                    }, [n("div", {
                        staticClass: "accordion-header"
                    }, [n("a", {
                        staticClass: "logout title",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.logout.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n                    Đăng xuất\n                    "), n("svg", {
                        attrs: {
                            width: "23",
                            height: "20",
                            viewBox: "0 0 23 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M19.3191 8.88877H6.82839C6.23298 8.88877 5.75027 9.38624 5.75027 9.99987C5.75027 10.6135 6.23298 11.111 6.82839 11.111H19.3191L17.9252 12.5476C17.5042 12.9815 17.5042 13.685 17.9252 14.1189C18.3462 14.5528 19.0288 14.5528 19.4499 14.1189L22.6841 10.7856C22.7093 10.7596 22.7332 10.7324 22.7558 10.7039C22.7656 10.6916 22.7742 10.6785 22.7834 10.6658C22.7953 10.6495 22.8075 10.6336 22.8185 10.6166C22.8286 10.6011 22.8373 10.5851 22.8465 10.5692C22.8553 10.5539 22.8646 10.5391 22.8727 10.5234C22.8812 10.5071 22.8883 10.4903 22.8959 10.4737C22.9034 10.4575 22.9112 10.4415 22.9179 10.4249C22.9244 10.4087 22.9297 10.3922 22.9354 10.3757C22.9416 10.3579 22.9483 10.3404 22.9536 10.3222C22.9584 10.3058 22.9619 10.2891 22.9659 10.2725C22.9705 10.254 22.9755 10.2356 22.9791 10.2168C22.9828 10.1976 22.985 10.1782 22.9876 10.1589C22.9899 10.1424 22.993 10.1261 22.9946 10.1094C22.9981 10.0735 22.9999 10.0374 22.9999 10.0014C22.9999 10.0009 23 10.0003 23 9.9998C23 9.99928 22.9999 9.99869 22.9999 9.99817C22.9999 9.96209 22.9981 9.9261 22.9946 9.89017C22.993 9.87365 22.99 9.85758 22.9878 9.84121C22.9851 9.82165 22.9828 9.8021 22.9791 9.78269C22.9755 9.76402 22.9705 9.74595 22.966 9.72765C22.9619 9.71084 22.9583 9.69387 22.9534 9.67721C22.9482 9.65936 22.9416 9.6421 22.9356 9.62461C22.9298 9.60787 22.9245 9.59106 22.9178 9.57461C22.9113 9.55832 22.9036 9.54269 22.8963 9.52676C22.8885 9.5098 22.8812 9.49269 22.8726 9.47602C22.8647 9.46084 22.8557 9.44639 22.8471 9.43165C22.8377 9.41528 22.8287 9.39876 22.8184 9.38284C22.8079 9.36662 22.7962 9.35143 22.7849 9.3358C22.7751 9.32239 22.766 9.30854 22.7556 9.29551C22.7341 9.26854 22.7114 9.24269 22.6876 9.21788C22.6864 9.21669 22.6855 9.21536 22.6843 9.21417L19.45 5.88078C19.2394 5.66382 18.9635 5.5553 18.6876 5.5553C18.4117 5.55537 18.1357 5.66382 17.9253 5.8807C17.5042 6.31463 17.5042 7.01811 17.9252 7.45203L19.3191 8.88877Z",
                            fill: "#FBC53C"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            d: "M1.0781 20H14.7343C15.3297 20 15.8124 19.5025 15.8124 18.8889V14.4445C15.8124 13.8308 15.3297 13.3334 14.7343 13.3334C14.1389 13.3334 13.6562 13.8308 13.6562 14.4445V17.7778H2.15622V2.22221H13.6562V5.55561C13.6562 6.16924 14.1389 6.66672 14.7343 6.66672C15.3297 6.66672 15.8124 6.16924 15.8124 5.55561V1.11111C15.8124 0.497478 15.3297 0 14.7343 0H1.0781C0.482691 0 -2.09808e-05 0.497478 -2.09808e-05 1.11111V18.8889C-2.09808e-05 19.5025 0.482691 20 1.0781 20Z",
                            fill: "#FBC53C"
                        }
                    })])])])]) : t._e()]), t._v(" "), n("div", {
                        attrs: {
                            id: "endNav"
                        }
                    })])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        311: function(t, e, n) {
            "use strict";
            var r = n(193).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "user-mobile",
                        attrs: {
                            id: "user-mobile"
                        }
                    }, [n("a", {
                        staticClass: "close-user",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.closeUser.apply(null, arguments)
                            }
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "user-mobile__content"
                    }, [null === this.user ? n("div", {
                        staticClass: "wrap-form"
                    }, [n("div", {
                        staticClass: "form-page form-login"
                    }, [n("login-form")], 1), t._v(" "), n("div", {
                        staticClass: "form-page form-register"
                    }, [n("register-form")], 1)]) : t._e(), t._v(" "), null !== this.user ? n("div", [n("div", {
                        staticClass: "user-login"
                    }, [n("div", {
                        staticClass: "user-login-header"
                    }, [n("div", {
                        staticClass: "user text-center"
                    }, [n("div", {
                        staticClass: "avatar"
                    }, [n("b-avatar", {
                        attrs: {
                            text: t._f("userFirstText")(t.user)
                        }
                    })], 1), t._v(" "), n("p", {
                        staticClass: "name"
                    }, [t._v(t._s(null !== t.user.fullname ? t.user.fullname : t.user.username))]), t._v(" "), n("p", {
                        staticClass: "amount"
                    }, [t._v("Ví Chính: "), n("span", {
                        staticClass: "color-blue"
                    }, [t._v(t._s(t._f("formatAmount")(t.user.balance)))])])]), t._v(" "), n("div", {
                        staticClass: "logout"
                    }, [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.logout.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/icon-logout.svg",
                            alt: "logout"
                        }
                    })])])]), t._v(" "), n("div", {
                        staticClass: "flex-box user-login-deposit"
                    }, [n("n-link", {
                        staticClass: "button",
                        attrs: {
                            to: "/user/deposit?tab=index"
                        }
                    }, [t._v("NẠP TIỀN")]), t._v(" "), n("n-link", {
                        staticClass: "button button--blue",
                        attrs: {
                            to: "/user/withdraw"
                        }
                    }, [t._v("RÚT TIỀN")])], 1), t._v(" "), n("div", {
                        staticClass: "user-login-content"
                    }, [n("ul", {
                        staticClass: "list-account"
                    }, t._l(t.tabs, (function(e, r) {
                        return n("li", {
                            key: r
                        }, [n("a", {
                            staticClass: "flex-box",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function(n) {
                                    return n.preventDefault(), t.onMoveTo(e.link)
                                }
                            }
                        }, [n("div", {
                            staticClass: "icon"
                        }, [n("img", {
                            attrs: {
                                src: "" + t.$store.state.mapDomain.STATIC_URL + e.iconSrc,
                                alt: e.iconAlt
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "text"
                        }, [t._v("\n                                    " + t._s(e.title) + "\n                                ")])])])
                    })), 0), t._v(" "), t.plan && "WELCOME_PLAY" === t.plan.type || t.plan && "WELCOME" === t.plan.type || t.plan && "PROMOTION" === t.plan.type ? [n("welcome-promotion", {
                        attrs: {
                            plan: t.plan,
                            cancelPromotion: t.cancelPromotion
                        }
                    })] : t.plan && "COMMISSION" === t.plan.type ? [n("commission-promotion", {
                        attrs: {
                            plan: t.plan
                        }
                    })] : [n("a", {
                        staticClass: "user-login-content__promotion",
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onMoveTo("/khuyen-mai")
                            }
                        }
                    }, [n("d-img", {
                        attrs: {
                            src: t.getUrlStatic("/promotion/promotion.gif"),
                            alt: ""
                        }
                    })], 1)]], 2)])]) : t._e()])])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        312: function(t, e, n) {
            "use strict";
            var r = n(196).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("header", {
                        staticClass: "header",
                        class: {
                            "header--login": null !== t.user
                        },
                        attrs: {
                            id: "header"
                        }
                    }, [n("h1", {
                        staticClass: "header__hidden-h1"
                    }), t._v(" "), n("div", {
                        staticClass: "header__top"
                    }, [n("b-container", [n("div", {
                        staticClass: "wrapper-top just-between flex-box"
                    }, [n("div", {
                        staticClass: "header-infomation flex-box show-desktop"
                    }, [t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "light-noel",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/light_noel.png")
                        }
                    }) : t._e(), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "light-noel-left",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/light_noel_left.png")
                        }
                    }) : t._e(), t._v(" "), n("div", {
                        staticClass: "logo"
                    }, [n("n-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [n("r-img", {
                        attrs: {
                            type: "webp",
                            static: this.$store.state.mapDomain.STATIC_URL + "/assets/img/logo.png",
                            alt: "logo"
                        }
                    })], 1)], 1), t._v(" "), n("div", {
                        staticClass: "trademark"
                    }, [n("div", {
                        staticClass: "text"
                    }, [t._v("Bảo trợ thương hiệu")]), t._v(" "), n("div", {
                        staticClass: "featured"
                    }, [n("img", {
                        staticClass: "trademark-logo",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/header/logo-trademark-fcb.png",
                            alt: "trademark"
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "trademark-logo",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/header/logo-trademark.png",
                            alt: "trademark"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "trademark"
                    }, [n("div", {
                        staticClass: "text"
                    }, [t._v("Theo dõi FCB8")]), t._v(" "), n("div", {
                        staticClass: "featured"
                    }, [n("a", {
                        attrs: {
                            href: "" + this.$t("social.facebook"),
                            target: "_blank"
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/icon-facebook.svg",
                            alt: "facebook"
                        }
                    })]), t._v(" "), n("a", {
                        attrs: {
                            href: "" + this.$t("social.youtube"),
                            target: "_blank"
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/icon-youtube.svg",
                            alt: "youtube"
                        }
                    })])])]), t._v(" "), n("div", {
                        staticClass: "trademark"
                    }, [n("div", {
                        staticClass: "text"
                    }, [t._v("Hotline")]), t._v(" "), n("div", {
                        staticClass: "featured"
                    }, [n("div", [n("a", {
                        staticClass: "color-yellow hotline",
                        attrs: {
                            href: "tel: " + this.$t("contact.hotlineUK") + " "
                        }
                    }, [n("span", [t._v("UK:")]), t._v(" " + t._s(this.$t("contact.hotlineUK")))])]), t._v(" "), n("div", [n("a", {
                        staticClass: "color-red-3 hotline",
                        attrs: {
                            href: "tel: " + this.$t("contact.hotlineVN") + " "
                        }
                    }, [n("span", [t._v("VN:")]), t._v(" " + t._s(this.$t("contact.hotlineVN")))])])])])]), t._v(" "), n("div", {
                        staticClass: "header-infomation-mobile"
                    }, [null === t.user ? n("div", {
                        staticClass: "show-mobile"
                    }, [n("a", {
                        staticClass: "toggle-menu",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            "&click": function(e) {
                                return t.openMenu.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/menu.svg",
                            alt: "icon menu"
                        }
                    })])]) : t._e(), t._v(" "), n("div", {
                        staticClass: "show-mobile logo"
                    }, [n("n-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [n("r-img", {
                        attrs: {
                            type: "webp",
                            static: this.$store.state.mapDomain.STATIC_URL + "/assets/img/logo.png",
                            alt: "logo"
                        }
                    })], 1)], 1)]), t._v(" "), null === t.user ? n("div", {
                        staticClass: "header-right header-form flex-box"
                    }, [n("div", {
                        staticClass: "show-desktop"
                    }, [n("n-link", {
                        staticClass: "button",
                        attrs: {
                            to: "/register"
                        }
                    }, [t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "noel-res",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png")
                        }
                    }) : t._e(), t._v(" "), n("svg", {
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
                    })]), t._v("\n                            ĐĂNG KÝ\n                        ")]), t._v(" "), n("a", {
                        staticClass: "button button--blue ml-1",
                        class: t.toggleActive ? "show-popup disabled" : "",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                e.stopPropagation(), t.toggleActive = !t.toggleActive
                            }
                        }
                    }, [t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "noel-sign",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png")
                        }
                    }) : t._e(), t._v("\n                            ĐĂNG NHẬP\n                        ")]), t._v(" "), n("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.hidePopupLogin,
                            expression: "hidePopupLogin"
                        }],
                        staticClass: "login-form"
                    }, [n("form", {
                        staticClass: "form-custom",
                        attrs: {
                            id: "frm-quick-login",
                            name: "frm-quick-login"
                        },
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), t.login.apply(null, arguments)
                            }
                        }
                    }, [n("div", {
                        staticClass: "form-custom-input flex flex-column"
                    }, [n("div", {
                        staticClass: "wrap-input w-100"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.formData.username,
                            expression: "formData.username"
                        }],
                        staticClass: "form-input",
                        attrs: {
                            type: "text",
                            placeholder: "Tên đăng nhập",
                            name: "userName"
                        },
                        domProps: {
                            value: t.formData.username
                        },
                        on: {
                            click: function(e) {
                                t.messageLoginFail = ""
                            },
                            input: function(e) {
                                e.target.composing || t.$set(t.formData, "username", e.target.value)
                            }
                        }
                    })]), t._v(" "), t.$v.formData.username.$error ? n("div", {
                        staticClass: "mt-1"
                    }, [t.$v.formData.username.required ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Vui lòng nhập tên đăng nhập")])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "form-custom-input flex flex-column"
                    }, [n("div", {
                        staticClass: "wrap-input w-100"
                    }, ["checkbox" == (t.isShowPassword ? "text" : "password") ? n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.formData.password,
                            expression: "formData.password"
                        }],
                        staticClass: "form-input",
                        attrs: {
                            placeholder: "Mật khẩu",
                            name: "pwd",
                            id: "txt-password",
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.formData.password) ? t._i(t.formData.password, null) > -1 : t.formData.password
                        },
                        on: {
                            click: function(e) {
                                t.messageLoginFail = ""
                            },
                            change: function(e) {
                                var n = t.formData.password,
                                    r = e.target,
                                    o = !!r.checked;
                                if (Array.isArray(n)) {
                                    var c = t._i(n, null);
                                    r.checked ? c < 0 && t.$set(t.formData, "password", n.concat([null])) : c > -1 && t.$set(t.formData, "password", n.slice(0, c).concat(n.slice(c + 1)))
                                } else t.$set(t.formData, "password", o)
                            }
                        }
                    }) : "radio" == (t.isShowPassword ? "text" : "password") ? n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.formData.password,
                            expression: "formData.password"
                        }],
                        staticClass: "form-input",
                        attrs: {
                            placeholder: "Mật khẩu",
                            name: "pwd",
                            id: "txt-password",
                            type: "radio"
                        },
                        domProps: {
                            checked: t._q(t.formData.password, null)
                        },
                        on: {
                            click: function(e) {
                                t.messageLoginFail = ""
                            },
                            change: function(e) {
                                return t.$set(t.formData, "password", null)
                            }
                        }
                    }) : n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.formData.password,
                            expression: "formData.password"
                        }],
                        staticClass: "form-input",
                        attrs: {
                            placeholder: "Mật khẩu",
                            name: "pwd",
                            id: "txt-password",
                            type: t.isShowPassword ? "text" : "password"
                        },
                        domProps: {
                            value: t.formData.password
                        },
                        on: {
                            click: function(e) {
                                t.messageLoginFail = ""
                            },
                            input: function(e) {
                                e.target.composing || t.$set(t.formData, "password", e.target.value)
                            }
                        }
                    }), t._v(" "), n("i", {
                        staticClass: "las la-eye",
                        class: {
                            active: t.isShowPassword
                        },
                        on: {
                            click: function(e) {
                                t.isShowPassword = !t.isShowPassword
                            }
                        }
                    })]), t._v(" "), t.$v.formData.password.$error ? n("div", {
                        staticClass: "mt-1"
                    }, [t.$v.formData.password.required ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Vui lòng nhập mật khẩu")]), t._v(" "), t.$v.formData.password.minLength ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Mật khẩu phải trên 6 ký tự")])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "form-custom-text"
                    }, [n("a", {
                        directives: [{
                            name: "b-modal",
                            rawName: "v-b-modal.forgotPasswordModal",
                            modifiers: {
                                forgotPasswordModal: !0
                            }
                        }],
                        staticClass: "forgot",
                        attrs: {
                            "data-toggle": "modal",
                            href: "#"
                        }
                    }, [t._v("Quên mật khẩu?")])]), t._v(" "), n("div", {
                        staticClass: "form__custom error text-center"
                    }, ["" !== t.messageLoginFail ? n("p", {
                        staticClass: "form-note mt-4"
                    }, [t._v(t._s(t.messageLoginFail))]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "form-custom-button"
                    }, [n("d-button", {
                        staticClass: "button button--blue",
                        attrs: {
                            type: "submit",
                            disabled: t.isSubmit,
                            loading: t.isSubmit
                        }
                    }, [t._v("\n                                        ĐĂNG NHẬP\n                                    ")])], 1), t._v(" "), n("div", {
                        staticClass: "form-custom-text"
                    }, [n("p", [t._v("Bạn chưa có tài khoản? "), n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: t.redirectRegisterPage
                        }
                    }, [t._v("ĐĂNG KÝ NGAY")])])])])])], 1), t._v(" "), n("div", {
                        staticClass: "show-mobile"
                    }, [n("div", {
                        staticClass: "header-right__mobile"
                    }, [n("n-link", {
                        staticClass: "menu-mobile-item__promotion",
                        class: {
                            active: "saleoff" === t.currentTab
                        },
                        attrs: {
                            to: "/khuyen-mai"
                        }
                    }, [n("img", {
                        staticClass: "active",
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/promption-active.png",
                            alt: "saleoff"
                        }
                    })]), t._v(" "), n("a", {
                        staticClass: "icon-user",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            "&click": function(e) {
                                return t.openUser.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/icon/icon-user.svg",
                            alt: "user"
                        }
                    })])], 1)])]) : t._e(), t._v(" "), null !== t.user ? n("div", {
                        staticClass: "header-right header-form flex-box"
                    }, [n("a", {
                        staticClass: "header-wallet show-desktop",
                        attrs: {
                            "data-toggle": "modal",
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.openTranferWallet.apply(null, arguments)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: this.$store.state.mapDomain.STATIC_URL + "/assets/img/header/wallet.png",
                            alt: "icon wallet"
                        }
                    })]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "noel-deposit show-desktop",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png")
                        }
                    }) : t._e(), t._v(" "), n("n-link", {
                        staticClass: "button show-desktop",
                        attrs: {
                            to: "/user/deposit?tab=index"
                        }
                    }, [t._v("NẠP TIỀN")]), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "noel-withdraw show-desktop",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/snow_button.png")
                        }
                    }) : t._e(), t._v(" "), n("n-link", {
                        staticClass: "button button--blue show-desktop",
                        attrs: {
                            to: "/user/withdraw"
                        }
                    }, [t._v("RÚT TIỀN")]), t._v(" "), n("div", {
                        staticClass: "dropdown-custom show-desktop"
                    }, [n("div", {
                        staticClass: "flex-box header-user"
                    }, [n("div", {
                        staticClass: "user"
                    }, [n("p", {
                        staticClass: "name"
                    }, [t._v(t._s(null !== t.user.fullname ? t.user.fullname : t.user.username))]), t._v(" "), n("p", {
                        staticClass: "amount"
                    }, [n("span", {
                        staticClass: "color-blue"
                    }, [t._v(t._s(t._f("formatAmount")(t.user.balance)))])])]), t._v(" "), n("div", {
                        staticClass: "avatar"
                    }, [n("b-avatar", {
                        attrs: {
                            text: t._f("userFirstText")(t.user)
                        }
                    })], 1)]), t._v(" "), n("ul", {
                        staticClass: "dropdown-menu"
                    }, [n("li", [n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.routeTo("/user")
                            }
                        }
                    }, [t._v("\n                                    Tài khoản\n                                ")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.routeTo("/user/deposit")
                            }
                        }
                    }, [t._v("\n                                    Nạp Tiền\n                                ")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.routeTo("/user/withdraw")
                            }
                        }
                    }, [t._v("\n                                    Rút Tiền\n                                ")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.routeTo("/user/history")
                            }
                        }
                    }, [t._v("\n                                    Lịch sử giao dịch\n                                ")])]), t._v(" "), n("li", [n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.logout.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n                                    Đăng xuất\n                                ")])])])]), t._v(" "), n("div", {
                        staticClass: "header-user show-mobile"
                    }, [n("a", {
                        staticClass: "flex-box",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            "&click": function(e) {
                                return t.openUser.apply(null, arguments)
                            }
                        }
                    }, [n("div", {
                        staticClass: "user"
                    }, [n("p", {
                        staticClass: "name"
                    }, [t._v(t._s(null !== t.user.fullname ? t.user.fullname : t.user.username))]), t._v(" "), n("p", {
                        staticClass: "amount"
                    }, [n("span", {
                        staticClass: "color-blue"
                    }, [t._v(t._s(t._f("formatAmount")(t.user.balance)))])])]), t._v(" "), n("div", {
                        staticClass: "avatar"
                    }, [n("b-avatar", {
                        attrs: {
                            text: t._f("userFirstText")(t.user)
                        }
                    })], 1)])])], 1) : t._e(), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "light-noel-right light-right",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/light_noel_left.png")
                        }
                    }) : t._e(), t._v(" "), t.$isEnableThemeNoel() ? n("img", {
                        staticClass: "light-right",
                        attrs: {
                            src: t.getUrlStatic("/assets/img/event/noel/home/light_noel.png")
                        }
                    }) : t._e()])])], 1), t._v(" "), n("header-menu")], 1)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        313: function(t, e, n) {
            "use strict";
            var r = n(199).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "mini-game"
                    }, [e("mini-game-modal"), this._v(" "), e("div", {
                        staticClass: "mini-game__floating-btn",
                        attrs: {
                            id: "ball"
                        }
                    }, [e("a", {
                        staticClass: "mini-game__link",
                        class: {
                            "mini-game__link--loading": this.$store.state.isOpeningMiniGame, "mini-game__link--disabled": this.isLoadingToken
                        },
                        attrs: {
                            id: "btnBC"
                        },
                        on: {
                            click: this.openMiniGame
                        }
                    }, [e("i", {
                        staticClass: "mini-game__icon mini-game__icon--baucua"
                    })])])], 1)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        314: function(t, e, n) {
            "use strict";
            var r = n(194).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "content-form"
                    }, [t._m(0), t._v(" "), n("b-form", {
                        staticClass: "form form-custom",
                        attrs: {
                            id: "login"
                        },
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), t.handleLogin.apply(null, arguments)
                            }
                        }
                    }, [n("div", {
                        staticClass: "form-custom-top"
                    }, [n("div", {
                        staticClass: "form-custom-input"
                    }, [n("div", {
                        staticClass: "wrap-input"
                    }, [n("b-form-input", {
                        staticClass: "form-input form-control",
                        attrs: {
                            state: t.validateLoginState("username"),
                            type: "text",
                            placeholder: "Tên đăng nhập",
                            id: "input-username-login-feedback"
                        },
                        model: {
                            value: t.$v.formLogin.username.$model,
                            callback: function(e) {
                                t.$set(t.$v.formLogin.username, "$model", e)
                            },
                            expression: "$v.formLogin.username.$model"
                        }
                    }), t._v(" "), n("b-form-invalid-feedback", {
                        attrs: {
                            id: "input-username-login-feedback"
                        }
                    }, [t.$v.formLogin.username.required ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Vui lòng nhập tên đăng nhập")])])], 1)]), t._v(" "), n("div", {
                        staticClass: "form-custom-input"
                    }, [n("div", {
                        staticClass: "wrap-input"
                    }, [n("b-form-input", {
                        staticClass: "form-input form-control password-input",
                        attrs: {
                            state: t.validateLoginState("password"),
                            type: t.isShowPassword ? "text" : "password",
                            placeholder: "Mật khẩu",
                            id: "input-password-login-feedback"
                        },
                        model: {
                            value: t.$v.formLogin.password.$model,
                            callback: function(e) {
                                t.$set(t.$v.formLogin.password, "$model", e)
                            },
                            expression: "$v.formLogin.password.$model"
                        }
                    }), t._v(" "), n("i", {
                        staticClass: "las la-eye",
                        class: {
                            active: t.isShowPassword
                        },
                        on: {
                            click: function(e) {
                                t.isShowPassword = !t.isShowPassword
                            }
                        }
                    }), t._v(" "), n("b-form-invalid-feedback", {
                        attrs: {
                            id: "input-password-login-feedback"
                        }
                    }, [t.$v.formLogin.password.required ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Vui lòng nhập mật khẩu")]), t._v(" "), t.$v.formLogin.password.minLength ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Mật khẩu phải trên 6 ký tự")])])], 1)]), t._v(" "), n("div", {
                        staticClass: "form-custom-text"
                    }, [n("a", {
                        directives: [{
                            name: "b-modal",
                            rawName: "v-b-modal.forgotPasswordModal",
                            modifiers: {
                                forgotPasswordModal: !0
                            }
                        }],
                        staticClass: "forgot",
                        attrs: {
                            "data-toggle": "modal",
                            href: "#",
                            role: "button"
                        }
                    }, [t._v("Quên mật khẩu?")])]), t._v(" "), n("div", {
                        staticClass: "form__custom error text-center mt-4"
                    }, ["" !== t.messageLoginFail ? n("p", {
                        staticClass: "form-note"
                    }, [t._v(t._s(t.messageLoginFail))]) : t._e()]), t._v(" "), n("div", [n("d-button", {
                        staticClass: "button button--blue",
                        attrs: {
                            type: "submit",
                            disabled: t.isSubmit,
                            loading: t.isSubmit
                        }
                    }, [t._v("ĐĂNG NHẬP")])], 1), t._v(" "), n("div", {
                        staticClass: "form-custom--banner"
                    }, [n("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onMoveTo("/khuyen-mai")
                            }
                        }
                    }, [n("d-img", {
                        attrs: {
                            src: t.getUrlStatic("/promotion/promotion.gif"),
                            alt: "banner"
                        }
                    })], 1)])]), t._v(" "), n("div", {
                        staticClass: "form-custom-link"
                    }, [t._v("Bạn chưa có tài khoản? "), n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            "&click": function(e) {
                                return t.changeForm.apply(null, arguments)
                            }
                        }
                    }, [t._v(" ĐĂNG KÝ NGAY")])])])], 1)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "form-header"
                    }, [e("h5", [e("span", {
                        staticClass: "gradient-text"
                    }, [this._v("Đăng Nhập")])])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        315: function(t, e, n) {
            "use strict";
            var r = n(195).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "content-form"
                    }, [t._m(0), t._v(" "), n("b-form", {
                        staticClass: "form form-custom",
                        attrs: {
                            id: "register"
                        },
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), t.register.apply(null, arguments)
                            }
                        }
                    }, [n("div", {
                        staticClass: "form-custom-top"
                    }, [n("div", {
                        staticClass: "form-custom-input",
                        class: {
                            error: t.$v.formRegister.username.$error
                        }
                    }, [n("label", {
                        staticClass: "label"
                    }, [t._v("Tên đăng nhập")]), t._v(" "), n("div", {
                        staticClass: "wrap-input"
                    }, [n("b-form-input", {
                        staticClass: "form-input",
                        attrs: {
                            placeholder: "Tên đăng nhập 6 đến 29 ký tự",
                            type: "text"
                        },
                        model: {
                            value: t.$v.formRegister.username.$model,
                            callback: function(e) {
                                t.$set(t.$v.formRegister.username, "$model", "string" == typeof e ? e.trim() : e)
                            },
                            expression: "$v.formRegister.username.$model"
                        }
                    })], 1), t._v(" "), t.$v.formRegister.username.$error ? n("div", {
                        staticClass: "form-default"
                    }, [t.$v.formRegister.username.required ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v(t._s(t.$t("errors.username.required")))]), t._v(" "), t.$v.formRegister.username.usernameRegex ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v(t._s(t.$t("errors.username.usernameRegex")))]), t._v(" "), t.$v.formRegister.username.usernameRegex && !t.$v.formRegister.username.minLength ? n("p", {
                        staticClass: "form-note"
                    }, [t._v(t._s(t.$t("errors.username.minLength", [t.$v.formRegister.username.$params.minLength.min])))]) : t._e(), t._v(" "), t.$v.formRegister.username.usernameRegex && !t.$v.formRegister.username.maxLength ? n("p", {
                        staticClass: "form-note"
                    }, [t._v(t._s(t.$t("errors.username.maxLength", [t.$v.formRegister.username.$params.maxLength.max])))]) : t._e(), t._v(" "), t.$v.formRegister.username.isUnique ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v(t._s(t.$t("errors.username.exist")))])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "form-custom-input",
                        class: {
                            error: t.$v.formRegister.password.$error
                        }
                    }, [n("label", {
                        staticClass: "label"
                    }, [t._v("Mật khẩu")]), t._v(" "), n("div", {
                        staticClass: "wrap-input"
                    }, [n("b-form-input", {
                        staticClass: "form-input password-input",
                        attrs: {
                            placeholder: "Mật khẩu 6 đến 32 ký tự",
                            type: t.isShowPassword ? "text" : "password"
                        },
                        model: {
                            value: t.$v.formRegister.password.$model,
                            callback: function(e) {
                                t.$set(t.$v.formRegister.password, "$model", "string" == typeof e ? e.trim() : e)
                            },
                            expression: "$v.formRegister.password.$model"
                        }
                    }), t._v(" "), n("i", {
                        staticClass: "las la-eye",
                        class: {
                            active: t.isShowPassword
                        },
                        on: {
                            click: function(e) {
                                t.isShowPassword = !t.isShowPassword
                            }
                        }
                    })], 1), t._v(" "), t.$v.formRegister.password.$error ? n("div", {
                        staticClass: "form-default"
                    }, [t.$v.formRegister.password.required ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Vui lòng nhập mật khẩu")]), t._v(" "), t.$v.formRegister.password.minLength ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Mật khẩu không được ít hơn 6 ký tự")]), t._v(" "), t.$v.formRegister.password.maxLength ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Mật khẩu không được nhiều hơn 32 ký tự")])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "form-custom-input",
                        class: {
                            error: t.$v.formRegister.confirmPassword.$error
                        }
                    }, [n("label", {
                        staticClass: "label"
                    }, [t._v("Nhập lại mật khẩu")]), t._v(" "), n("div", {
                        staticClass: "wrap-input"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: t.$v.formRegister.confirmPassword.$model,
                            expression: "$v.formRegister.confirmPassword.$model",
                            modifiers: {
                                trim: !0
                            }
                        }],
                        staticClass: "form-input password-input",
                        attrs: {
                            autocomplete: "new-password",
                            placeholder: "Xác nhận lại mật khẩu",
                            type: t.isShowPasswordComfirm ? "text" : "password"
                        },
                        domProps: {
                            value: t.$v.formRegister.confirmPassword.$model
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.$v.formRegister.confirmPassword, "$model", e.target.value.trim())
                            },
                            blur: function(e) {
                                return t.$forceUpdate()
                            }
                        }
                    }), t._v(" "), n("i", {
                        staticClass: "las la-eye",
                        class: {
                            active: t.isShowPasswordComfirm
                        },
                        on: {
                            click: function(e) {
                                t.isShowPasswordComfirm = !t.isShowPasswordComfirm
                            }
                        }
                    })]), t._v(" "), t.$v.formRegister.confirmPassword.$error ? n("div", {
                        staticClass: "form-default"
                    }, [t.$v.formRegister.confirmPassword.required ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Vui lòng nhập lại mật khẩu lần thứ 2")]), t._v(" "), t.$v.formRegister.confirmPassword.required && !t.$v.formRegister.confirmPassword.sameAsPassword ? n("p", {
                        staticClass: "form-note"
                    }, [t._v("Mật khẩu lần 2 chưa chính xác")]) : t._e()]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "form-custom-input",
                        class: {
                            error: t.$v.formRegister.phone.$error
                        }
                    }, [n("label", {
                        staticClass: "label"
                    }, [t._v("Số điện thoại")]), t._v(" "), n("div", {
                        staticClass: "wrap-input"
                    }, [n("m-input", {
                        staticClass: "form-input",
                        attrs: {
                            mask: t.numberMask,
                            type: "tel",
                            inputmode: "numeric",
                            name: "phone",
                            placeholder: "Nhập số điện thoại"
                        },
                        model: {
                            value: t.$v.formRegister.phone.$model,
                            callback: function(e) {
                                t.$set(t.$v.formRegister.phone, "$model", "string" == typeof e ? e.trim() : e)
                            },
                            expression: "$v.formRegister.phone.$model"
                        }
                    })], 1), t._v(" "), t.$v.formRegister.phone.$error ? n("div", {
                        staticClass: "form-default"
                    }, [t.$v.formRegister.phone.maxLength ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Số điện thoại không được nhiều hơn 11 ký tự")]), t._v(" "), t.$v.formRegister.phone.minLength ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Số điện thoại không được ít hơn 10 ký tự")]), t._v(" "), t.$v.formRegister.phone.required ? t._e() : n("p", {
                        staticClass: "form-note"
                    }, [t._v("Vui lòng nhập số điện thoại")])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "form-default"
                    }, [n("d-button", {
                        staticClass: "button",
                        attrs: {
                            disabled: t.isSubmit,
                            loading: t.isSubmit
                        }
                    }, [t._v("\n                    ĐĂNG KÝ NGAY\n                ")])], 1)]), t._v(" "), n("div", {
                        staticClass: "form-custom-bottom"
                    }, [n("div", {
                        staticClass: "form-custom-input form-term"
                    }, [n("a", {
                        staticClass: "text-yellow",
                        attrs: {
                            target: "_blank",
                            href: "/dieu-khoan-dieu-kien"
                        }
                    }, [t._v("Điều khoản & điều kiện")])]), t._v(" "), n("div", {
                        staticClass: "form-custom-link"
                    }, [t._v("Bạn đã có tài khoản? "), n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            "&click": function(e) {
                                return t.changeForm.apply(null, arguments)
                            }
                        }
                    }, [t._v(" ĐĂNG NHẬP NGAY")])])])])], 1)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "form-header"
                    }, [e("h5", [e("span", {
                        staticClass: "gradient-text"
                    }, [this._v("Tạo Tài Khoản FCB8")])])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        316: function(t, e, n) {
            "use strict";
            var r = n(197).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "header__bottom"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "header-menu"
                    }, [n("ul", {
                        staticClass: "header-menu_nav flex-box just-center"
                    }, t._l(t.menus, (function(e, r) {
                        return n("li", {
                            key: r,
                            staticClass: "header-menu-item",
                            class: {
                                "show-sub": void 0 !== e.subMenu, active: t.$route.path === e.link, "game-center": "Games Center" === e.title
                            }
                        }, [n("a", {
                            staticClass: "header-menu-link",
                            attrs: {
                                href: "#",
                                title: e.title
                            },
                            on: {
                                click: function(n) {
                                    return n.preventDefault(), t.moveTo(e)
                                }
                            }
                        }, [e.label === t.$LABEL_TYPE.LIVE ? n("span", {
                            staticClass: "menu-live"
                        }, [n("img", {
                            attrs: {
                                src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/header/live.png",
                                alt: "new"
                            }
                        })]) : t._e(), t._v("\n                        " + t._s(e.title) + "\n                        "), e.label === t.$LABEL_TYPE.NEW ? n("span", {
                            staticClass: "menu-note new"
                        }, [n("img", {
                            attrs: {
                                src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/header/icon-live.svg",
                                alt: "new"
                            }
                        })]) : t._e(), t._v(" "), e.label === t.$LABEL_TYPE.HOT ? n("span", {
                            staticClass: "menu-note hot"
                        }, [n("img", {
                            attrs: {
                                src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/header/icon-hot.svg",
                                alt: "hot"
                            }
                        })]) : t._e(), t._v(" "), e.label === t.$LABEL_TYPE.EVENT_NOEL && t.$isEnableThemeNoel() ? n("span", {
                            staticClass: "menu-note animation"
                        }, [n("img", {
                            attrs: {
                                src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/event/noel/icon-event.svg",
                                alt: "new"
                            }
                        })]) : t._e(), t._v(" "), e.label === t.$LABEL_TYPE.ICON ? n("span", {
                            staticClass: "icon-sub"
                        }) : t._e()]), t._v(" "), n("ul", {
                            staticClass: "header-menu-sub"
                        }, t._l(e.subMenu, (function(r, i) {
                            return n("li", {
                                key: i,
                                staticClass: "menu-item-sub",
                                class: {
                                    active: t.$route.fullPath === r.link
                                }
                            }, [n("a", {
                                staticClass: "header-menu-link",
                                class: {
                                    "fix-icon": r.fixIcon
                                },
                                attrs: {
                                    href: r.link,
                                    title: r.title
                                },
                                on: {
                                    click: function(e) {
                                        return e.preventDefault(), t.moveTo(r)
                                    }
                                }
                            }, [null !== r.icon ? n("img", {
                                staticClass: "icon",
                                attrs: {
                                    src: "" + t.$store.state.mapDomain.STATIC_URL + r.icon,
                                    alt: "icon"
                                }
                            }) : t._e(), t._v(" "), n("span", {
                                staticClass: "text"
                            }, [t._v(t._s(r.title))]), t._v(" "), r.label === t.$LABEL_TYPE.NEW ? n("span", {
                                staticClass: "menu-note new"
                            }, [n("img", {
                                attrs: {
                                    src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/header/icon-live.svg",
                                    alt: "new"
                                }
                            })]) : t._e(), t._v(" "), r.label === t.$LABEL_TYPE.HOT ? n("span", {
                                staticClass: "menu-note hot"
                            }, [n("img", {
                                attrs: {
                                    src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/header/icon-hot.svg",
                                    alt: "hot"
                                }
                            })]) : t._e(), t._v(" "), e.label === t.$LABEL_TYPE.EVENT_NOEL && t.$isEnableThemeNoel() ? n("span", {
                                staticClass: "menu-note animation"
                            }, [n("img", {
                                attrs: {
                                    src: t.$store.state.mapDomain.STATIC_URL + "/assets/img/event/noel/icon-event.svg",
                                    alt: "new"
                                }
                            })]) : t._e()])])
                        })), 0)])
                    })), 0)])])])
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        317: function(t, e, n) {
            "use strict";
            var r = n(200).a,
                o = n(33),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "mini-game__wrapper",
                        class: {
                            active: t.isOpen && t.isLoaded
                        },
                        attrs: {
                            id: "modalBC"
                        }
                    }, [n("div", {
                        staticClass: "mini-game__content",
                        attrs: {
                            id: "canvas"
                        }
                    }, [t._m(0), t._v(" "), n("canvas", {
                        staticClass: "mini-game__canvas",
                        attrs: {
                            id: "GameCanvas",
                            oncontextmenu: "event.preventDefault()",
                            tabindex: "0"
                        }
                    }), t._v(" "), this.$store.state.isOpeningMiniGame ? t._e() : n("div", {
                        staticClass: "mini-game__close-btn",
                        on: {
                            click: t.hideGame
                        }
                    }), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !this.$store.state.isOpeningMiniGame && !this.$isMobile(),
                            expression: "!this.$store.state.isOpeningMiniGame && !this.$isMobile()"
                        }],
                        staticClass: "mini-game__drag-btn",
                        attrs: {
                            id: "dragCanvas"
                        }
                    })])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticStyle: {
                            display: "none"
                        }
                    }, [e("div", {
                        attrs: {
                            id: "mask"
                        }
                    }, [e("div", {
                        attrs: {
                            id: "image"
                        }
                    })]), this._v(" "), e("div", {
                        attrs: {
                            id: "handImage"
                        }
                    }), this._v(" "), e("div", {
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        },
                        attrs: {
                            id: "div_full_screen"
                        }
                    }, [e("div", {
                        staticClass: "enterFullScreen_Portrait",
                        attrs: {
                            id: "enterFullscreen"
                        }
                    }), this._v(" "), e("div", {
                        staticClass: "exitFullscreen_Portrait",
                        attrs: {
                            id: "exitFullscreen"
                        }
                    })]), this._v(" "), e("div", {
                        staticStyle: {
                            display: "none !important"
                        },
                        attrs: {
                            id: "splash"
                        }
                    }, [e("div", {
                        staticClass: "progress-bar"
                    }, [e("span", {
                        staticStyle: {
                            width: "0%"
                        }
                    })])])])
                }], !1, null, null, null);
            e.a = component.exports
        },
        322: function(t, e, n) {
            t.exports = n(323)
        },
        323: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    n(154), n(19), n(134), n(67), n(68), n(43), n(108);
                    var e = n(90),
                        r = (n(39), n(51), n(258), n(28)),
                        o = (n(121), n(133), n(18), n(16), n(20), n(15), n(45), n(261), n(335), n(342), n(344), n(12)),
                        c = n(286),
                        l = n(232),
                        m = n(27),
                        h = n(107),
                        d = n(302),
                        f = n(212);

                    function v(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!n) {
                            if (Array.isArray(t) || (n = function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return _(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === n && t.constructor && (n = t.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e)
                                }(t)) || e && t && "number" == typeof t.length) {
                                n && (t = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, c = !0,
                            l = !1;
                        return {
                            s: function() {
                                n = n.call(t)
                            },
                            n: function() {
                                var t = n.next();
                                return c = t.done, t
                            },
                            e: function(t) {
                                l = !0, o = t
                            },
                            f: function() {
                                try {
                                    c || null == n.return || n.return()
                                } finally {
                                    if (l) throw o
                                }
                            }
                        }
                    }

                    function _(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n
                    }
                    o.default.__nuxt__fetch__mixin__ || (o.default.mixin(d.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(f.a.name, f.a), o.default.component("NLink", f.a), t.fetch || (t.fetch = c.a);
                    var w, y, C = [],
                        k = window.__NUXT__ || {};
                    Object.assign(o.default.config, {
                        productionTip: !1,
                        devtools: !1,
                        silent: !0,
                        performance: !1
                    });
                    var x = o.default.config.errorHandler || console.error;

                    function $(t, e, n) {
                        for (var r = function(component) {
                                var t = function(component, t) {
                                    if (!component || !component.options || !component.options[t]) return {};
                                    var option = component.options[t];
                                    if ("function" == typeof option) {
                                        for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", e, n) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, o = n ? Object(m.g)(n) : [], c = Math.max(t.length, o.length), l = [], h = function(i) {
                                var e = Object.assign({}, r(t[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(e).filter((function(t) {
                                    return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function(t) {
                                    n[t] = e[t]
                                })), l.push(n)
                            }, i = 0; i < c; i++) h(i);
                        return l
                    }

                    function T(t, e, n) {
                        return O.apply(this, arguments)
                    }

                    function O() {
                        return (O = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                            var o, c, l, h, d = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(w.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(m.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, Object(m.q)(e, (function(t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 9:
                                        o = t.sent, o.some((function(t) {
                                            var r = t.Component,
                                                o = t.instance,
                                                c = r.options.watchQuery;
                                            return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                                return d._diffQuery[t]
                                            })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        r(), t.next = 26;
                                        break;
                                    case 15:
                                        if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, h = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(h)) {
                                            t.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: l,
                                            message: h
                                        }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function L(t, e) {
                        return k.serverRendered && e && Object(m.b)(t, e), t._Ctor = t, t
                    }

                    function S(t) {
                        var path = Object(m.f)(t.options.base, t.options.mode);
                        return Object(m.d)(t.match(path), function() {
                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                var l;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("function" != typeof e || e.options) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.next = 3, e();
                                        case 3:
                                            e = t.sent;
                                        case 4:
                                            return l = L(Object(m.r)(e), k.data ? k.data[c] : null), r.components[o] = l, t.abrupt("return", l);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e, n, r, o, c) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }

                    function E(t, e, n) {
                        var r = this,
                            o = [],
                            c = !1;
                        if (void 0 !== n && (o = [], (n = Object(m.r)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function(t) {
                                t.options.middleware && (o = o.concat(t.options.middleware))
                            }))), o = o.map((function(t) {
                                return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), l.a[t])
                            })), !c) return Object(m.n)(o, e)
                    }

                    function A(t, e, n) {
                        return R.apply(this, arguments)
                    }

                    function R() {
                        return (R = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                            var o, c, l, d, f, _, y, k, x, T, O, L, S, A, R, j = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", r());
                                    case 2:
                                        return e === n ? C = [] : (o = [], C = Object(m.g)(n, o).map((function(t, i) {
                                            return Object(m.c)(n.matched[o[i]].path)(n.params)
                                        }))), c = !1, l = function(path) {
                                            n.path === path.path && j.$loading.finish && j.$loading.finish(), n.path !== path.path && j.$loading.pause && j.$loading.pause(), c || (c = !0, r(path))
                                        }, t.next = 7, Object(m.s)(w, {
                                            route: e,
                                            from: n,
                                            next: l.bind(this)
                                        });
                                    case 7:
                                        if (this._dateLastError = w.nuxt.dateErr, this._hadError = Boolean(w.nuxt.err), d = [], (f = Object(m.g)(e, d)).length) {
                                            t.next = 26;
                                            break
                                        }
                                        return t.next = 14, E.call(this, f, w.context);
                                    case 14:
                                        if (!c) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 16:
                                        return _ = (h.a.options || h.a).layout, t.next = 19, this.loadLayout("function" == typeof _ ? _.call(h.a, w.context) : _);
                                    case 19:
                                        return y = t.sent, t.next = 22, E.call(this, f, w.context, y);
                                    case 22:
                                        if (!c) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 24:
                                        return w.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", r());
                                    case 26:
                                        return f.forEach((function(t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions($(f, e, n)), t.prev = 28, t.next = 31, E.call(this, f, w.context);
                                    case 31:
                                        if (!c) {
                                            t.next = 33;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 33:
                                        if (!w.context._errored) {
                                            t.next = 35;
                                            break
                                        }
                                        return t.abrupt("return", r());
                                    case 35:
                                        return "function" == typeof(k = f[0].options.layout) && (k = k(w.context)), t.next = 39, this.loadLayout(k);
                                    case 39:
                                        return k = t.sent, t.next = 42, E.call(this, f, w.context, k);
                                    case 42:
                                        if (!c) {
                                            t.next = 44;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 44:
                                        if (!w.context._errored) {
                                            t.next = 46;
                                            break
                                        }
                                        return t.abrupt("return", r());
                                    case 46:
                                        x = !0, t.prev = 47, T = v(f), t.prev = 49, T.s();
                                    case 51:
                                        if ((O = T.n()).done) {
                                            t.next = 62;
                                            break
                                        }
                                        if ("function" == typeof(L = O.value).options.validate) {
                                            t.next = 55;
                                            break
                                        }
                                        return t.abrupt("continue", 60);
                                    case 55:
                                        return t.next = 57, L.options.validate(w.context);
                                    case 57:
                                        if (x = t.sent) {
                                            t.next = 60;
                                            break
                                        }
                                        return t.abrupt("break", 62);
                                    case 60:
                                        t.next = 51;
                                        break;
                                    case 62:
                                        t.next = 67;
                                        break;
                                    case 64:
                                        t.prev = 64, t.t0 = t.catch(49), T.e(t.t0);
                                    case 67:
                                        return t.prev = 67, T.f(), t.finish(67);
                                    case 70:
                                        t.next = 76;
                                        break;
                                    case 72:
                                        return t.prev = 72, t.t1 = t.catch(47), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", r());
                                    case 76:
                                        if (x) {
                                            t.next = 79;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", r());
                                    case 79:
                                        return t.next = 81, Promise.all(f.map((function(t, i) {
                                            t._path = Object(m.c)(e.matched[d[i]].path)(e.params), t._dataRefresh = !1;
                                            var r = t._path !== C[i];
                                            if (j._routeChanged && r) t._dataRefresh = !0;
                                            else if (j._paramChanged && r) {
                                                var o = t.options.watchParam;
                                                t._dataRefresh = !1 !== o
                                            } else if (j._queryChanged) {
                                                var c = t.options.watchQuery;
                                                !0 === c ? t._dataRefresh = !0 : Array.isArray(c) ? t._dataRefresh = c.some((function(t) {
                                                    return j._diffQuery[t]
                                                })) : "function" == typeof c && (S || (S = Object(m.h)(e)), t._dataRefresh = c.apply(S[i], [e.query, n.query]))
                                            }
                                            if (j._hadError || !j._isMounted || t._dataRefresh) {
                                                var l = [],
                                                    h = t.options.asyncData && "function" == typeof t.options.asyncData,
                                                    f = Boolean(t.options.fetch) && t.options.fetch.length,
                                                    v = h && f ? 30 : 45;
                                                if (h) {
                                                    var _ = Object(m.p)(t.options.asyncData, w.context).then((function(e) {
                                                        Object(m.b)(t, e), j.$loading.increase && j.$loading.increase(v)
                                                    }));
                                                    l.push(_)
                                                }
                                                if (j.$loading.manual = !1 === t.options.loading, f) {
                                                    var p = t.options.fetch(w.context);
                                                    p && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                        j.$loading.increase && j.$loading.increase(v)
                                                    })), l.push(p)
                                                }
                                                return Promise.all(l)
                                            }
                                        })));
                                    case 81:
                                        c || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), r()), t.next = 98;
                                        break;
                                    case 84:
                                        if (t.prev = 84, t.t2 = t.catch(28), "ERR_REDIRECT" !== (A = t.t2 || {}).message) {
                                            t.next = 89;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, A));
                                    case 89:
                                        return C = [], Object(m.k)(A), "function" == typeof(R = (h.a.options || h.a).layout) && (R = R(w.context)), t.next = 95, this.loadLayout(R);
                                    case 95:
                                        this.error(A), this.$nuxt.$emit("routeChanged", e, n, A), r();
                                    case 98:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [28, 84],
                                [47, 72],
                                [49, 64, 67, 70]
                            ])
                        })))).apply(this, arguments)
                    }

                    function j(t, n) {
                        Object(m.d)(t, (function(t, n, r, c) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[c] = t), t
                        }))
                    }

                    function B(t) {
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
                        var e = this.$options.nuxt.err ? (h.a.options || h.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof e && (e = e(w.context)), this.setLayout(e)
                    }

                    function M(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(m.h)(t),
                                c = Object(m.g)(t);
                            o.default.nextTick((function() {
                                r.forEach((function(t, i) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var e = t.constructor.options.data.call(t);
                                        for (var n in e) o.default.set(t.$data, n, e[n]);
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                })), B.call(n, t)
                            }))
                        }
                    }

                    function I(t) {
                        window.onNuxtReadyCbs.forEach((function(e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), y.afterEach((function(e, n) {
                            o.default.nextTick((function() {
                                return t.$nuxt.$emit("routeChanged", e, n)
                            }))
                        }))
                    }

                    function N() {
                        return (N = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                            var n, r, c, l, h;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return w = e.app, y = e.router, e.store, n = new o.default(w), r = k.layout || "default", t.next = 7, n.loadLayout(r);
                                    case 7:
                                        return n.setLayout(r), c = function() {
                                            n.$mount("#__nuxt"), y.afterEach(j), y.afterEach(M.bind(n)), o.default.nextTick((function() {
                                                I(n)
                                            }))
                                        }, t.next = 11, Promise.all(S(y));
                                    case 11:
                                        if (l = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), l.length && (n.setTransitions($(l, y.currentRoute)), C = y.currentRoute.matched.map((function(t) {
                                                return Object(m.c)(t.path)(y.currentRoute.params)
                                            }))), n.$loading = {}, k.error && n.error(k.error), y.beforeEach(T.bind(n)), y.beforeEach(A.bind(n)), !k.serverRendered || k.routePath !== n.context.route.path) {
                                            t.next = 21;
                                            break
                                        }
                                        return c(), t.abrupt("return");
                                    case 21:
                                        h = function() {
                                            j(y.currentRoute, y.currentRoute), B.call(n, y.currentRoute), c()
                                        }, A.call(n, y.currentRoute, y.currentRoute, (function(path) {
                                            if (path) {
                                                var t = y.afterEach((function(e, n) {
                                                    t(), h()
                                                }));
                                                y.push(path, void 0, (function(t) {
                                                    t && x(t)
                                                }))
                                            } else h()
                                        }));
                                    case 23:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }
                    Object(h.b)().then((function(t) {
                        return N.apply(this, arguments)
                    })).catch(x)
                }.call(this, n(100))
        },
        345: function(t, e, n) {
            "use strict";
            n.r(e);
            n(45), n(121);
            e.default = function(t) {
                var e = t.store,
                    n = t.redirect,
                    r = t.route,
                    o = ["register", "login", "reset-password"];
                if (!o.includes(r.name) && null === e.state.user || o.includes(r.name) && null !== e.state.user) return n("/")
            }
        },
        346: function(t, e, n) {
            "use strict";
            n.r(e);
            n(45);
            e.default = function(t) {
                var e = t.store,
                    n = t.redirect,
                    r = t.route;
                if ("1" === e.state.maintain && "maintain" !== r.name) return n("/maintain")
            }
        },
        354: function(t, e, n) {
            "use strict";
            n(269)
        },
        355: function(t, e, n) {
            "use strict";
            n(270)
        },
        358: function(t, e, n) {},
        402: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    n.d(e, "state", (function() {
                        return d
                    })), n.d(e, "mutations", (function() {
                        return f
                    })), n.d(e, "getters", (function() {
                        return v
                    })), n.d(e, "actions", (function() {
                        return y
                    }));
                    n(21), n(15), n(19), n(18), n(16), n(20), n(215), n(121), n(133), n(55), n(51);
                    var r = n(28),
                        o = n(3),
                        c = n(90),
                        l = n(132);

                    function m(object, t) {
                        var e = Object.keys(object);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(object);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(object, t).enumerable
                            }))), e.push.apply(e, n)
                        }
                        return e
                    }

                    function h(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? m(Object(source), !0).forEach((function(e) {
                                Object(o.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }
                    var d = function() {
                            return {
                                user: null,
                                currentTab: null,
                                iframe: {
                                    loaded: !1,
                                    height: 850,
                                    tab: "",
                                    tabName: "",
                                    tabUrl: ""
                                },
                                iframeUrl: "",
                                iframeDisplay: !1,
                                userTab: null,
                                maintenance: {
                                    enable: !1
                                },
                                device: "desktop",
                                newTabMap: {},
                                wallet: {
                                    balance: 0,
                                    oldBalance: 0,
                                    oldBalanceSub: 0,
                                    balanceSub: 0,
                                    maxBalance: 0,
                                    screenUpdate: ""
                                },
                                jackpot: {},
                                refreshInterval: null,
                                utmQuery: {},
                                categories: [],
                                maintain: "0",
                                pwa: 0,
                                mapDomain: {},
                                freeSpinCode: "",
                                plan: {},
                                urlAfterLogin: {
                                    url: "",
                                    type: 0
                                },
                                switchVersion: 0,
                                enablePwa: 0,
                                isSafari: !1,
                                totalWithDraw: 0,
                                invoicePromotion: 0,
                                isOpenMiniGame: !1,
                                isOpeningMiniGame: !1,
                                hideHeader: !1,
                                hideFooter: !1,
                                ktekToken: null,
                                visitVivo: !1,
                                visitSbtech: !1,
                                langs: ["en", "vi"],
                                lang: "vi",
                                routerLoadingEnable: !0,
                                livechatLoaded: !1,
                                livechatMBLoaded: !1,
                                gameResultSearch: {},
                                domainChangeShow: !0
                            }
                        },
                        f = {
                            mutate: function(t, e) {
                                t[e.property] = "object" === Object(c.a)(e.with) && null !== e.with ? h(h({}, t[e.property]), e.with) : e.with
                            },
                            SET_LANG: function(t, e) {
                                -1 !== t.langs.indexOf(e) && (t.lang = e)
                            },
                            setRouterLoadingEnable: function(t, e) {
                                t.routerLoadingEnable = e
                            },
                            setDomainChangeShow: function(t, e) {
                                t.domainChangeShow = e
                            }
                        },
                        v = {
                            getCurrentTab: function(t) {
                                return t.currentTab
                            },
                            getUserTab: function(t) {
                                return t.userTab
                            },
                            getCategories: function(t) {
                                return t.categories
                            }
                        },
                        _ = function(t, e) {
                            t.commit;
                            var n = e.app,
                                r = e.route;
                            e.req;
                            if (r.query.a) {
                                var o = r.query.a;
                                n.$cookies.set("aff_id", o, {
                                    path: "/",
                                    maxAge: 864e3
                                });
                                var c = r.fullPath.substr("1");
                                n.$cookies.set("querystring", c, {
                                    path: "/",
                                    maxAge: 864e3
                                })
                            }["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((function(t) {
                                if (r.query[t]) {
                                    var e = r.query[t];
                                    n.$cookies.set(t, e, {
                                        path: "/",
                                        maxAge: 864e3
                                    })
                                }
                            }))
                        },
                        w = function(t, e) {
                            var n = t.commit,
                                r = e.app,
                                o = e.route,
                                c = r.$cookies.get("setDevice");
                            c && n("mutate", {
                                property: "device",
                                with: c
                            }), o.query.device && (r.$cookies.set("setDevice", o.query.device, {
                                path: "/",
                                maxAge: 864e3
                            }), r.$cookies.set("device", o.query.device, {
                                path: "/"
                            }), n("mutate", {
                                property: "device",
                                with: o.query.device
                            }), "mobile" === o.query.device ? r.$cookies.set("os", "ios", {
                                path: "/"
                            }) : r.$cookies.set("os", "", {
                                path: "/"
                            })), r.$device.isDesktop ? (r.$cookies.set("device", "desktop", {
                                path: "/"
                            }), c || n("mutate", {
                                property: "device",
                                with: "desktop"
                            })) : (r.$cookies.set("device", "mobile", {
                                path: "/"
                            }), r.$device.isIos ? r.$cookies.set("os", "ios", {
                                path: "/"
                            }) : r.$cookies.set("os", "android", {
                                path: "/"
                            }), c || n("mutate", {
                                property: "device",
                                with: "mobile"
                            }))
                        },
                        y = {
                            nuxtServerInit: function(e, n) {
                                return Object(r.a)(regeneratorRuntime.mark((function r() {
                                    var o, c, m, h, d, f, v, y, C;
                                    return regeneratorRuntime.wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                o = e.commit, c = n.app, m = n.route, h = n.req, d = n.redirect, (f = c.$cookies.get("user", {
                                                    parseJSON: !0
                                                })) && o("mutate", {
                                                    property: "user",
                                                    with: f
                                                }), w({
                                                    commit: o
                                                }, {
                                                    app: c,
                                                    route: m,
                                                    req: h,
                                                    redirect: d
                                                }), _({
                                                    commit: o
                                                }, {
                                                    app: c,
                                                    route: m,
                                                    req: h,
                                                    redirect: d
                                                });
                                                try {
                                                    "1" === t.env.MAINTAIN && (o("mutate", {
                                                        property: "maintain",
                                                        with: t.env.MAINTAIN
                                                    }), d("/maintain")), "1" === t.env.SWITCH_VERSION && o("mutate", {
                                                        property: "switchVersion",
                                                        with: t.env.SWITCH_VERSION
                                                    }), "1" === t.env.PWA && o("mutate", {
                                                        property: "enablePwa",
                                                        with: t.env.PWA
                                                    }), "https://fcb8.vip", v = t.env.BANNED_DOMAIN ? t.env.BANNED_DOMAIN.split(",") : [], y = h.headers.host, C = !1, v.includes(y) && (y = "https://fcb8.vip", C = !0), o("mutate", {
                                                        property: "mapDomain",
                                                        with: l[y] ? l[y] : l["https://fcb8.vip"]
                                                    }), c.$cookies.set("domain", l[y].HOME_URL, {
                                                        path: "/"
                                                    }), c.$cookies.set("host", l[y].HOST, {
                                                        path: "/"
                                                    }), C && d(l[y].HOME_URL)
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 7:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))()
                            },
                            login: function(t, data) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r = t.commit, n.prev = 1, n.next = 4, e.$userApi.login(data);
                                            case 4:
                                                return "OK" !== (o = n.sent).status && "SHOW_MESSAGE" !== o.status || (r("mutate", {
                                                    property: "user",
                                                    with: o.data[0]
                                                }), e.$tracking({
                                                    event: "formSubmitted",
                                                    formName: "Form_Login"
                                                }), e.dispatch("clearIframe"), e.dispatch("refreshInterval"), localStorage && localStorage.setItem("user_token", o.data[0].tp_token), 0 === e.state.user.balance ? ("mobile" === e.state.device && e.$cookies.set("backUrl", e.app.router.app._route.fullPath), setTimeout((function() {
                                                    e.$router.push("/user/deposit?tab=index")
                                                }), 1500)) : "mobile" === e.state.device ? e.state.urlAfterLogin.url ? 0 === e.state.urlAfterLogin.type ? e.$router.push(e.state.urlAfterLogin.url) : (e.$router.push("/"), e.$cookies.set("openNewTab", e.state.urlAfterLogin.url, "1h")) : (e.$cookies.set("openNewTab", e.state.urlAfterLogin.url, "1h"), window.location.reload()) : "" !== e.state.urlAfterLogin.url ? 0 === e.state.urlAfterLogin.type ? e.$router.push(e.state.urlAfterLogin.url) : (e.$cookies.set("openNewTab", e.state.urlAfterLogin.url, "1h"), window.location.reload()) : e.$router.go({
                                                    path: "/",
                                                    force: !0
                                                })), n.abrupt("return", o);
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), console.log(n.t0);
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            register: function(t, data) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r = t.commit, n.prev = 1, n.next = 4, e.$userApi.register(data);
                                            case 4:
                                                return "OK" === (o = n.sent).status && (r("mutate", {
                                                    property: "user",
                                                    with: o.data[0]
                                                }), e.$tracking({
                                                    event: "formSubmitted",
                                                    formName: "Form_Register"
                                                }), e.dispatch("clearIframe"), e.dispatch("refreshInterval"), "mobile" === e.state.device && e.$cookies.set("backUrl", e.app.router.app._route.fullPath), setTimeout((function() {
                                                    e.$router.push("/user/deposit?tab=index")
                                                }), 1500)), n.abrupt("return", o);
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), console.log(n.t0);
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            logout: function(t) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r = t.commit, n.next = 3, e.$userApi.logout({});
                                            case 3:
                                                r("mutate", {
                                                    property: "user",
                                                    with: null
                                                }), r("mutate", {
                                                    property: "jackpot",
                                                    with: null
                                                }), null !== e.state.refreshInterval && (clearInterval(e.state.refreshInterval), r("mutate", {
                                                    property: "refreshInterval",
                                                    with: null
                                                })), e.dispatch("clearIframe"), r("mutate", {
                                                    property: "plan",
                                                    with: null
                                                }), r("mutate", {
                                                    property: "urlAfterLogin",
                                                    with: {
                                                        url: "",
                                                        type: 0
                                                    }
                                                }), e.state.isOpenMiniGame && r("mutate", {
                                                    property: "isOpenMiniGame",
                                                    with: !1
                                                }), localStorage && localStorage.setItem("user_token", ""), e.$router.go({
                                                    path: "/",
                                                    force: !0
                                                });
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            gameResultSearch: function(t, data) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r = t.commit, n.prev = 1, n.next = 4, e.$gameApi.search(data);
                                            case 4:
                                                return "OK" === (o = n.sent).status && r("mutate", {
                                                    property: "gameResultSearch",
                                                    with: o.data
                                                }), n.abrupt("return", o);
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), console.log(n.t0);
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            clearSearch: function(t) {
                                (0, t.commit)("mutate", {
                                    property: "gameResultSearch",
                                    with: ""
                                })
                            },
                            updateInfo: function(t, data) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r = t.commit, n.prev = 1, n.next = 4, e.$userApi.update(data);
                                            case 4:
                                                return "OK" === (o = n.sent).status && r("mutate", {
                                                    property: "user",
                                                    with: o.user
                                                }), n.abrupt("return", o);
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), console.log(n.t0);
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            getPlan: function(t) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r = t.commit, n.prev = 1, n.next = 4, e.$userApi.index();
                                            case 4:
                                                return o = n.sent, r("mutate", {
                                                    property: "plan",
                                                    with: o.plan
                                                }), n.abrupt("return", o);
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), console.log(n.t0);
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            transferMoney: function(t, e) {
                                var n = this;
                                return Object(r.a)(regeneratorRuntime.mark((function r() {
                                    var o, c, l, m, h;
                                    return regeneratorRuntime.wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return o = t.commit, c = e.amount, l = e.balance, r.prev = 2, m = c > 0 ? "DEPOSIT" : "WITHDRAW", c < 0 && (c = -c), r.next = 7, n.$userApi.transfer({
                                                    amount: c,
                                                    type: m
                                                });
                                            case 7:
                                                return "OK" === (h = r.sent).status && o("mutate", {
                                                    property: "user",
                                                    with: {
                                                        balance: l
                                                    }
                                                }), r.abrupt("return", h);
                                            case 12:
                                                r.prev = 12, r.t0 = r.catch(2), console.log(r.t0);
                                            case 15:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [2, 12]
                                    ])
                                })))()
                            },
                            updateIframe: function(t, data) {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.commit;
                                                try {
                                                    n("mutate", {
                                                        property: "iframe",
                                                        with: data
                                                    })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            updateHeightIframe: function(t, data) {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.commit;
                                                try {
                                                    n("mutate", {
                                                        property: "iframe",
                                                        with: {
                                                            loaded: !0,
                                                            height: data
                                                        }
                                                    })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            updateIframeUrl: function(t, data) {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.commit;
                                                try {
                                                    n("mutate", {
                                                        property: "iframeUrl",
                                                        with: data
                                                    })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            clearIframe: function(t) {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.commit;
                                                try {
                                                    n("mutate", {
                                                        property: "iframe",
                                                        with: {
                                                            loaded: !1,
                                                            tabUrl: "/",
                                                            height: 850,
                                                            tab: -1
                                                        }
                                                    }), n("mutate", {
                                                        property: "iframeUrl",
                                                        with: ""
                                                    })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            updateMaintenance: function(t, data) {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.commit;
                                                try {
                                                    n("mutate", {
                                                        property: "maintenance",
                                                        with: data
                                                    })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            getWallet: function(t) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r = t.commit, n.next = 3, e.$userApi.getWallet();
                                            case 3:
                                                if ("OK" === (o = n.sent).status) try {
                                                    r("mutate", {
                                                        property: "wallet",
                                                        with: {
                                                            oldBalance: o.data.balance,
                                                            balance: o.data.balance,
                                                            oldBalanceSub: o.data.balanceSub,
                                                            balanceSub: o.data.balanceSub,
                                                            maxBalance: o.data.balanceAll
                                                        }
                                                    })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 5:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            updateWallet: function(t, data) {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.commit;
                                                try {
                                                    n("mutate", {
                                                        property: "wallet",
                                                        with: data
                                                    })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            updateUser: function(t, data) {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.commit;
                                                try {
                                                    n("mutate", {
                                                        property: "user",
                                                        with: data
                                                    })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            updateBalance: function(t, data) {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.commit;
                                                try {
                                                    n("mutate", {
                                                        property: "user",
                                                        with: data
                                                    })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            getJackpot: function(t) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r = t.commit, n.prev = 1, n.next = 4, e.$gameApi.jackpot();
                                            case 4:
                                                return null !== (o = n.sent) && "OK" === o.status && o.data && r("mutate", {
                                                    property: "jackpot",
                                                    with: o.data
                                                }), n.abrupt("return", o);
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), console.log(n.t0);
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            refreshToken: function(t) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (r = t.commit, n.prev = 1, null === e.state.user) {
                                                    n.next = 9;
                                                    break
                                                }
                                                return n.next = 5, e.$axios.$get("/api/v1/refresh", {
                                                    progress: !1
                                                });
                                            case 5:
                                                null !== (o = n.sent) && "OK" === o.status && o.user && r("mutate", {
                                                    property: "user",
                                                    with: o.user
                                                }), null !== o && "OK" === o.status && "1" === o.maintain && (r("mutate", {
                                                    property: "maintain",
                                                    with: o.maintain
                                                }), e.$router.push("/maintain")), localStorage && (localStorage.getItem("user_token") || localStorage.setItem("user_token", o.user.tp_token));
                                            case 9:
                                                n.next = 14;
                                                break;
                                            case 11:
                                                n.prev = 11, n.t0 = n.catch(1), console.log(n.t0);
                                            case 14:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 11]
                                    ])
                                })))()
                            },
                            refreshInterval: function(t) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var o, c;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                o = t.commit;
                                                try {
                                                    null === e.state.refreshInterval && "1" !== e.state.maintain && (c = setInterval(Object(r.a)(regeneratorRuntime.mark((function t() {
                                                        return regeneratorRuntime.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    e.dispatch("refreshToken");
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    }))), 5e3), o("mutate", {
                                                        property: "refreshInterval",
                                                        with: c
                                                    }))
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            case 2:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            getCategories: function(t) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o, c;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (r = t.commit, !((o = e.getters.getCategories).length > 0)) {
                                                    n.next = 4;
                                                    break
                                                }
                                                return n.abrupt("return", o);
                                            case 4:
                                                return n.next = 6, e.$postApi.getCategories();
                                            case 6:
                                                if ("OK" !== (c = n.sent).status) {
                                                    n.next = 10;
                                                    break
                                                }
                                                return r("mutate", {
                                                    property: "categories",
                                                    with: c.categories
                                                }), n.abrupt("return", c.categories);
                                            case 10:
                                                return n.abrupt("return", []);
                                            case 11:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            updatePlan: function(t, e) {
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                (0, t.commit)("mutate", {
                                                    property: "plan",
                                                    with: e
                                                });
                                            case 2:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            setUrlAfterLogin: function(t, data) {
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                (0, t.commit)("mutate", {
                                                    property: "urlAfterLogin",
                                                    with: data
                                                });
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            countWithDraw: function(t) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (r = t.commit, n.prev = 1, null === e.state.user) {
                                                    n.next = 7;
                                                    break
                                                }
                                                return n.next = 5, e.$withDrawApi.count();
                                            case 5:
                                                null !== (o = n.sent) && "OK" === o.status && r("mutate", {
                                                    property: "totalWithDraw",
                                                    with: o.total
                                                });
                                            case 7:
                                                n.next = 12;
                                                break;
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), console.log(n.t0);
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            countInvoicePromotion: function(t) {
                                var e = this;
                                return Object(r.a)(regeneratorRuntime.mark((function n() {
                                    var r, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (r = t.commit, n.prev = 1, null === e.state.user) {
                                                    n.next = 7;
                                                    break
                                                }
                                                return n.next = 5, e.$userApi.countInvoicePromotion();
                                            case 5:
                                                null !== (o = n.sent) && "OK" === o.status && r("mutate", {
                                                    property: "invoicePromotion",
                                                    with: o.data.total
                                                });
                                            case 7:
                                                n.next = 12;
                                                break;
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), console.log(n.t0);
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            }
                        }
                }.call(this, n(161))
        },
        410: function(t) {
            t.exports = JSON.parse('{"header":{"logo_name":["Nhà cái","Germany"],"login":"Đăng nhập","register":"Đăng ký","menu_sport":"Thể thao","menu_vssport":"Thể thao ảo","menu_live_casino":"Sòng bài trực tuyến","menu_live_virtual":"Sòng ảo","menu_numbergame":"Number Games","menu_keno":"Keno","menu_lottery":"Lottery"},"footer":{"about-us":"Về chúng tôi","about-us-1":"Donec fringilla erat fringilla est porttitor sodales. Quisque aliquet a diam et iaculis.\\nFusce mollis in orci at cursus.Suspendisse pretium rutrum erat,\\neget facilisis eros tempus\\nat.Praesent quis lobortis nibh,\\nut commodo mauris.Sed at enim et dui pharetra malesuada.\\nSed eget leo felis.Mauris aliquam in purus id commodo.Aliquam vel turpis in mauris luctus\\nlobortis a ac est.Nam venenatis lorem non nisl fermentum posuere at id dui.Integer\\nfaucibus elementum felis,\\nut vehicula orci sagittis ac.","partner":"ĐỐI TÁC CHÍNH THỨC","sign":["© 2019","FCB8.COM",". All rights reserved."],"bank":"Ngân hàng thanh toán"},"home":{"promotion":["Hoàn trả","1.5%","Tặng ngay","100%","Lên tới 50.000.000 vnđ"],"register":"Đăng ký ngay","sport_title":"Thể thao","sport_des":"Hàng trăm sự kiện mỗi ngày","keno_title":"KENO","keno_des":"CÁCH CHƠI ĐƠN GIẢN DỄ CHƠI DỄ TRÚNG","slot_title":"SLOT","slot_des":["CHƠI NHANH","TRÚNG LỚN"],"casino_title":"CASINO","casino_des":"BACCARAT, POKER, ROULETTE,..","intro":"Donec fringilla erat fringilla est porttitor sodales. Quisque aliquet a diam et iaculis.\\nFusce mollis in orci at cursus.Suspendisse pretium rutrum erat,\\neget facilisis eros tempus\\nat.Praesent quis lobortis nibh,\\nut commodo mauris.Sed at enim et dui pharetra malesuada.\\nSed eget leo felis.Mauris aliquam in purus id commodo.Aliquam vel turpis in mauris luctus\\nlobortis a ac est.Nam venenatis lorem non nisl fermentum posuere at id dui.Integer\\nfaucibus elementum felis,\\nut vehicula orci sagittis ac.","menu":["Khuyến mãi hấp dẫn","Cá cược hợp pháp","Giao dịch nhanh chóng","Hướng dẫn tham gia","Hỗ trợ 24/7"]},"login":{"header":"Đăng nhập tài khoản","title":"Thông tin đăng nhập","placeholder_username":"Tên đăng nhập","placeholder_pass":"Mật khẩu","forgot_pass":"Quên mật khẩu?","login":"Đăng nhập","not_yet_acc":"Bạn chưa có tài khoản?","register":"Đăng ký"},"register":{"header":"Đăng ký tài khoản","group_tite":["Thông tin chính ","(Bắt buộc)"],"placeholder_fullname":"Họ và tên","placeholder_username":"Tên đăng nhập","placeholder_password":"Mật khẩu","placeholder_password_retype":"Nhập lại mật khẩu","placeholder_email":"Email"},"errors":{"username":{"required":"Vui lòng nhập tên đăng nhập","minLength":"Tên đăng nhập không được ít hơn {0} ký tự","maxLength":"Tên đăng nhập không được nhiều hơn {0} ký tự","format":"Tên đăng nhập không hợp lệ. Chỉ được chứa chữ cái, số hoặc dấu gạch ngang","exist":"Tên đăng nhập đã tồn tại","usernameRegex":"Tên đăng nhập chỉ được gồm: a-z, 0-9 và dấu gạch dưới (_)."},"password":{"required":"Yêu cầu nhập mật khẩu cũ","minLength":"Mật khẩu không được ít hơn {0} ký tự","maxLength":"Mật khẩu không được được nhiều hơn {0} ký tự"},"newPassword":{"required":"Yêu cầu nhập mật khẩu mới","minLength":"Mật khẩu không được ít hơn {0} ký tự","maxLength":"Mật khẩu không được nhiều hơn {0} ký tự"},"confirmPassword":{"required":"Mật khẩu mới không trùng nhau","sameAs":"Mật khẩu mới không trùng nhau"},"phone":{"required":"Yêu cầu nhập số điện thoại","numeric":"Số điện thoại chỉ chứa số","minLength":"Số điện thoại không được ít hơn {0} ký tự","maxLength":"Số điện thoại không được nhiều hơn {0} ký tự"},"required":"Bạn chưa nhập {0}","select_required":"Bạn chưa chọn {0}","numeric":"{0} chỉ chứa số","between":"{0} phải lớn hơn {1} và nhỏ hơn {2}","maxLength":"Không được nhập nhiều hơn {0} ký tự","minLength":"Không được nhập ít hơn {0} ký tự","email":{"required":"Vui lòng nhập địa chỉ email của bạn","email":"Địa chỉ email không đúng","exist":"Địa chỉ email đã tồn tại"}},"bankTrancode":{"default":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"VCB":{"ibanking":{"title":"Mã giao dịch","label":"Nhập mã giao dịch hoặc nội dung gửi tiền","validate":"mã giao dịch hoặc nội dung gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"ATM":{"title":"Mã giao dịch","label":"Nhập số tài khoản người gửi","validate":"số tài khoản người gửi","hiddenInputName":"FALSE","numberic":"FALSE"},"banking":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"TRUE","numberic":"FALSE"}},"ACB":{"ibanking":{"title":"Mã giao dịch","label":"Nhập mã giao dịch hoặc nội dung gửi tiền","validate":"mã giao dịch hoặc nội dung gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"ATM":{"title":"Mã giao dịch","label":"Nhập số tài khoản người gửi","validate":"số tài khoản người gửi","hiddenInputName":"FALSE","numberic":"FALSE"},"banking":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"TRUE","numberic":"FALSE"}},"DongA":{"ibanking":{"title":"Mã giao dịch","label":"Nhập mã giao dịch hoặc nội dung gửi tiền","validate":"mã giao dịch hoặc nội dung gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"ATM":{"title":"Mã giao dịch","label":"Nhập số tài khoản người gửi","validate":"số tài khoản người gửi","hiddenInputName":"FALSE","numberic":"FALSE"},"banking":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"TRUE","numberic":"FALSE"}},"VietinBank":{"ibanking":{"title":"Mã giao dịch","label":"Nhập thời gian hoặc nội dung gửi tiền","validate":"thời gian hoặc nội dung gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"ATM":{"title":"Mã giao dịch","label":"Nhập thời gian gửi tiền","validate":"thời gian gửi tiền","hiddenInputName":"FALSE","numberic":"TRUE"},"banking":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"TRUE","numberic":"FALSE"}},"BIDV":{"ibanking":{"title":"Mã giao dịch","label":"Nhập mã giao dịch hoặc nội dung gửi tiền","validate":"mã giao dịch hoặc nội dung gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"ATM":{"title":"Mã giao dịch","label":"Nhập số tài khoản người gửi","validate":"số tài khoản người gửi","hiddenInputName":"FALSE","numberic":"FALSE"},"banking":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"TRUE","numberic":"FALSE"}},"Sacombank":{"ibanking":{"title":"Mã giao dịch","label":"Nhập thời gian hoặc nội dung gửi tiền","validate":"thời gian hoặc nội dung gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"ATM":{"title":"Mã giao dịch","label":"Nhập thời gian gửi tiền","validate":"thời gian gửi tiền","hiddenInputName":"FALSE","numberic":"TRUE"},"banking":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"TRUE","numberic":"FALSE"}},"Techcombank":{"ibanking":{"title":"Mã giao dịch","label":"Nhập mã giao dịch hoặc nội dung gửi tiền","validate":"mã giao dịch hoặc nội dung gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"ATM":{"title":"Mã giao dịch","label":"Nhập số tài khoản người gửi","validate":"số tài khoản người gửi","hiddenInputName":"FALSE","numberic":"FALSE"},"banking":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"TRUE","numberic":"FALSE"}},"Eximbank":{"ibanking":{"title":"Mã giao dịch","label":"Nhập mã giao dịch hoặc nội dung gửi tiền","validate":"mã giao dịch hoặc nội dung gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"ATM":{"title":"Mã giao dịch","label":"Nhập số tài khoản người gửi","validate":"số tài khoản người gửi","hiddenInputName":"FALSE","numberic":"FALSE"},"banking":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"TRUE","numberic":"FALSE"}},"VietCapital":{"ibanking":{"title":"Mã giao dịch","label":"Nhập mã giao dịch hoặc nội dung gửi tiền","validate":"mã giao dịch hoặc nội dung gửi tiền","hiddenInputName":"FALSE","numberic":"FALSE"},"ATM":{"title":"Mã giao dịch","label":"Nhập số tài khoản người gửi","validate":"số tài khoản người gửi","hiddenInputName":"FALSE","numberic":"FALSE"},"banking":{"title":"Tên người gửi tiền","label":"Nhập tên người gửi tiền","validate":"tên người gửi tiền","hiddenInputName":"TRUE","numberic":"FALSE"}},"momo":{"momo":"Mã giao dịch"}},"fromBankName":{"default":"Tên người gửi","VCB":{"ibanking":"Tên người gửi","ATM":"Tên người gửi","banking":"Tên người gửi"},"ACB":{"ibanking":"Tên người gửi","ATM":"Tên người gửi","banking":"Tên người gửi"},"DongA":{"ibanking":"Tên người gửi","ATM":"Tên người gửi","banking":"Tên người gửi"},"VietinBank":{"ibanking":"Tên người gửi","ATM":"Tên người gửi","banking":"Tên người gửi"},"BIDV":{"ibanking":"Tên người gửi","ATM":"Tên người gửi","banking":"Tên người gửi"},"Sacombank":{"ibanking":"Tên người gửi","ATM":"Tên người gửi","banking":"Tên người gửi"},"Techcombank":{"ibanking":"Tên người gửi","ATM":"Tên người gửi","banking":"Tên người gửi"},"Eximbank":{"ibanking":"Tên người gửi","ATM":"Tên người gửi","banking":"Tên người gửi"},"VietCapital":{"ibanking":"Tên người gửi","ATM":"Tên người gửi","banking":"Tên người gửi"},"momo":{"momo":"SĐT người gửi"}},"transaction":{"status":{"ALL":"Tất cả","PENDING":"Đang chờ","FINISHED":"Đã hoàn tất","CANCEL":"Thất bại","DELETE":"Thất bại","APPROVED":"Đang chuyển","PROCESSING":"Đang xử lý","DRAFT":"Chờ xử lý","PHONE_CARD_PROCESSING":"Đang xử lý","SMART_PAY_PROCESSING":"Đang xử lý"}},"bet":{"status":{"":"Tất cả","WIN":"Thắng","WON":"Thắng","LOSE":"Thua","LOST":"Thua","CANCEL":"Huỷ","DRAW":"Hòa","RUNING":"Đang chờ","RUNNING":"Đang chờ","PENDING":"Đang chờ","OPENED":"Đang diễn ra","OPEN":"Đang diễn ra","HALF LOSE":"Thua 1/2","HALF WON":"Thắng 1/2","BONUS":"Bonus","BET":"Đang chờ","REJECT":"Từ chối"}},"currencyCode":"D","meta":{"all":{"title":"FCB8 (Hay FCB88) - Nhà cái cá cược cá độ bóng đá uy tín, casino, thể thao, bắn cá.","description":"FCB8 - Hay còn gọi là FCB88 - Là nhà cái cá cuợc cá độ bóng đá, thể thao, lô đề và casino hàng đầu Châu Âu. Nạp lần đầu thưởng 100%, lên tới 10tr.","keywords":"","h1":"FCB8 (Hay FCB88) - Nhà cái cá cược cá độ bóng đá uy tín, casino, thể thao, bắn cá."},"index":{"title":"FCB8 (Hay FCB88) - Nhà cái cá cược cá độ bóng đá uy tín, casino, thể thao, bắn cá.","description":"FCB8 - Hay còn gọi là FCB88 - Là nhà cái cá cuợc cá độ bóng đá, thể thao, lô đề và casino hàng đầu Châu Âu. Nạp lần đầu thưởng 100%, lên tới 10tr.","keywords":"","h1":"FCB8 (Hay FCB88) - Nhà cái cá cược cá độ bóng đá uy tín, casino, thể thao, bắn cá."},"sports":{"title":"Thể Thao SPORTS – Bảng Kèo Cá Cược SPORTS Châu Á và Châu Âu","description":"Bảng kèo cá cược lĩnh vực thể thao Sports theo phong cách Châu Á và Châu Âu mới nhất"},"sport":{"title":"Nhà cái uy tín cá độ thể thao trực tuyến bóng đá, bóng rổ - FCB8","description":"FCB8 - Nhà cái uy tín hàng đầu Germany, Cập nhận kèo, tỷ lệ cá cược, cá độ bóng đá, bóng rổ, quần vơt, cầu lông, bóng bàn..","keywords":"Cá cược bóng đá, Cá cược bóng đá online, Cá cược trực tuyến, Nhà cái cá cược, Cá độ bóng đá trực tuyến, Cá cược thể thao","h1":"Nhà cái uy tín hàng đầu FCB8, Cập nhận kèo, tỷ lệ cá cược, cá độ bóng đá, bóng rổ, quần vơt, cầu lông, bóng bàn"},"asport":{"title":"Thể Thao ASPORTS – Bảng Kèo Cá Cược SPORTS Châu Á","description":"Bảng kèo cá cược lĩnh vực thể thao Sports theo phong cách Châu Á mới nhất"},"esport":{"title":"Thể Thao ESPORTS – Bảng Kèo Cá Cược SPORTS Châu Âu","description":"Bảng kèo cá cược lĩnh vực thể thao Sports theo phong cách Châu Âu mới nhất."},"virtual-sports":{"title":"Thể Thao VITRUAL SPORTS – Thể Thao Ảo, Cá Cược Thể Thao Ảo","description":"Nhà cái cá cược thể thao ảo với các game online ảo hấp dẫn như : bóng đá ảo, bóng rổ ảo, đua ngựa ảo, đua chó ảo, đua xe ảo trực tuyến hấp dẫn"},"lode":{"title":"Nhà cái Lô Đề online – Soi cầu Lô Đề hôm nay với tỷ lệ ăn cao nhất thị trường","description":"Lô đề online FCB8 – Website chuyên soi cầu lô đề chuẩn miền nam, miền bắc, miền trung, lô đề rồng Bạch Kim trực tuyến uy tín nhất hiện nay","keywords":"Lô đề, lô dề online, Đánh đề online, Nhà cái lô đề, kinh nghiệm chơi đề, soi cầu 3 miền, Sổ mơ - giải mộng, Giải mã giấc mơ, Cách bao lô dễ trúng, Dự đoán xổ số 3 miền","h1":"Lô dề online, Đánh đề online, Nhà cái lô đề, kinh nghiệm chơi đề, soi cầu 3 miền, Sổ mơ - giải mộng, Giải mã giấc mơ, Cách bao lô dễ trúng, Dự đoán xổ số 3 miền"},"livecasino":{"title":"Casino Online – Nhà cái Casino online FCB8 số 1 thế giới","description":"Casino online FCB8 – Chơi casino online với nhiều trò chơi hấp dẫn như: Roulette, Baccarat, BlackJack, Dragon Tiger, Sexy Casino…Đặt To Thắng Lớn","keywords":"Game đổi thưởng, Nổ hũ online, Casino online, Xổ số keno, Game đánh bài đổi thưởng online","h1":"Game đổi thưởng online, tài xỉu, rồng hổ, baccarat, roulette, xì dách, game đánh bài online"},"games":{"title":"Game online FCB8 – Chơi cá cược game online hấp dẫn, dễ chơi, dễ thắng","description":"Game cá cược FCB8 online uy tín. Với nhiều trò chơi hấp dẫn, lôi cuốn, đặt cược thoải mái không giới hạn. Chơi giải trí nhận thưởng lớn","keywords":"Game đổi thưởng","h1":"Game online uy tín : bắn cá, baccarat, xì dách, các trò chơi trực tuyến hấp dẫn,trải nghiệm trò chơi hấp dẫn"},"number-game":{"title":"Number Game Online, Trò chơi số – Chơi nhiều thưởng nhiều tại FCB8","description":"Chơi Number Game tại FCB8 với nhiều trò chơi như: trên/dưới, tài/xỉu…dễ chơi, dễ thắng hấp dẫn lôi cuốn người chơi","keywords":"Number game, lucky number game","h1":" Chơi Number Games, tài xỉu, chẵn lẻ uy tín, đảm bảo trung thực hàng đầu hiện nay tại nhà cái uy tín fcb8"},"keno":{"title":"Game Keno Online – Game Keno uy tín nhiều người chơi nhất","description":"Game Keno online hay, trò chơi số đang được ưa chuộng nhất hiện nay, dễ chơi, dễ thắng, hấp dẫn, mới mẻ","keywords":"Xổ số keno","h1":"Game Keno online trò chơi số đang được ưa chuộng nhất hiện nay, dễ chơi, dễ thắng, hấp dẫn, mới mẻ"},"huong-dan":{"title":"Hướng Dẫn cá cược tại FCB8","description":"FCB8 - Hướng dẫn tham gia cá cược, Hướng dẫn nạp rút, Hướng dẫn chơi game tại FCB8","keywords":"Hướng dẫn cá cược, Hướng dẫn cá cược bóng đá, Cách đọc kèo tài xỉu, Kinh nghiệm cá cược, Mẹo cá cược"},"tin-tuc":{"title":"FCB8 - Cập nhận tin tức soi kèo bóng đá, lô đề hôm nay","description":"FCB8 - Nhà cái uy tín soi kèo bóng đá hôm nay, phân tích dự đoán cùng các chuyên gia, mẹo cá cược hay, soi cầu lô đề hôm nay","keywords":"soi kèo bóng đá hôm nay, mẹo cá cược , soi cầu lô đề"},"register":{"title":"FCB8 - Đăng ký thành viên","description":"Đăng ký chơi  cá cược thể thao, game casino, lô đề tại  Nhà cái uy tín hàng đầu Germany, Tận hưởng không gian giải trí trực tuyến sống động hàng đầu","keywords":""},"login":{"title":"FCB8 - Login","description":"FCB8 - Nhà cái uy tín hàng đầu Germany, Tận hưởng không gian giải trí trực tuyến sống động hàng đầu như bóng đá, bóng rổ, casino, lô đề , number game, keno","keywords":""},"user-deposit":{"title":"FCB8 - Nạp Tiền","description":"FCB8 - Nhà cái uy tín hàng đầu Germany, nạp tiền nhanh tróng dễ dàng, tận hưởng không gian giải trí trực tuyến sống động hàng đầu ","keywords":""},"user-withdraw":{"title":"FCB8 - Rút Tiền","description":"FCB8 - Nhà cái uy tín hàng đầu Germany, rút tiền nhanh tróng dễ dàng, tận hưởng không gian giải trí trực tuyến sống động hàng đầu ","keywords":""},"user-history":{"title":"FCB8 - Kiểm tra lịch sử","description":"FCB8 - Nhà cái uy tín hàng đầu Germany, kiểm tra thông tin nhanh tróng dễ dàng, tận hưởng không gian giải trí trực tuyến sống động hàng đầu ","keywords":""},"user-account":{"title":"FCB8 - Cập Nhật Thông Tin","description":"FCB8 - Nhà cái uy tín hàng đầu Germany, cập nhật thông tin nhanh tróng dễ dàng, tận hưởng không gian giải trí trực tuyến sống động hàng đầu ","keywords":""},"slots":{"title":"Nhà cái uy tín FCB8 Game nổ hũ club, cá cược online","description":"FCB8 - Nhà cái uy tín hàng đầu Germany kho game nổ hũ đổi thưởng mới nhất 2020","keywords":"","h1":"Nhà cái uy tín hàng đầu FCB8 với kho game nổ hũ club đổi thưởng uy tín mới nhất 2020"},"lottery":{"title":"Game quay số Lottery cá cược online hay.  Chơi nhiều thắng nhiều","description":"Game cá cược quay số Lottery: quay số, xóc đĩa, bầu cua, tài xỉu mới nhất 2020. với nhiều ưu đãi hấp dẫn khi đăng ký thành viên mới","keywords":"quay số, xóc đĩa, bầu cua, tài xỉu","h1":"Game xóc đĩa, bầu cua, tài xỉu, quay số mới nhất tại fcb8"},"fishing":{"title":"FCB8 game bắn cá online đổi thưởng mới nhất 2020","description":"Chơi game bắn cá đổi thưởng 2020 mới nhất tại nhà cái FCB8. Game bắn cá online uy tín nhất nhiều người chơi nhất hiện nay.","keywords":"bắn cá, bầu cua, tài xỉu, xóc đĩa, racing, mini roulette, baccarat","h1":"Chơi game bắn cá đổi thưởng 2020 mới nhất tại nhà cái FCB8. Game bắn cá online uy tín nhất nhiều người chơi nhất hiện nay."},"ty-le-keo":{"title":"FCB8 bảng tỷ lệ kèo bóng đá Châu Á, Châu Âu trực tiếp hôm nay","description":"Nhà cái FCB8 cập nhật bảng tỷ lệ kèo bóng đá trực tiếp hôm nay kèo: Châu Á, Châu Âu, tài xỉu, Ma Cao,Malaysia, Ngoại Hạng Anh, C1, C2, Tây Ban Nha"},"lottery-sexy":{"title":"Game quay số Lottery Sexy cá cược online hay.  Chơi cùng mỹ nữ, nhận nhiều giải thưởng","description":"Game cá cược Lottery Sexy: quay số, xóc đĩa, bầu cua, tài xỉu mới nhất 2020, với nhiều ưu đãi hấp dẫn cho các thành viên mới"}},"wallet":{"main":"C-Thể thao, Lô đề, Keno, NumberGames...","sub":"P-Thể Thao, Thể Thao Ảo"},"contact":{"phone":"366996789","zalo":"0325216462","viber":"+44 7537 130 199","email":"cs@fcb8.com","hotlineUK":"+44 7537 130 199","hotlineVN":"+84 366.99.6789"},"social":{"facebook":"https://www.facebook.com/nhacaifcb8/","youtube":"https://www.youtube.com/channel/UCq93cxjuaBhgu5afPaCBRcw","twiter":"","intergram":""}}')
        },
        411: function(t) {
            t.exports = JSON.parse('{"header":{"logo1":"Nhà cái","logo2":"Germany"}}')
        }
    },
    [
        [322, 49, 2, 50]
    ]
]);