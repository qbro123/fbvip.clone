(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        417: function(t, n, e) {
            "use strict";
            var o = {
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
                r = e(33),
                component = Object(r.a)(o, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)(this.component, {
                        tag: "component"
                    })
                }), [], !1, null, null, null);
            n.a = component.exports
        },
        515: function(t, n, e) {
            "use strict";
            e.r(n);
            var o = {
                    extends: e(417).a,
                    middleware: "auth",
                    components: {
                        index: function() {
                            return e.e(48).then(e.bind(null, 519))
                        }
                    },
                    head: function() {
                        return {}
                    },
                    data: function() {
                        return {
                            tabIndex: this.$route.path
                        }
                    },
                    methods: {},
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.$tracking({
                                event: "formRegister",
                                formName: "Form_Register"
                            })
                        }))
                    }
                },
                r = e(33),
                component = Object(r.a)(o, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)(this.component, {
                        tag: "component",
                        attrs: {
                            tabIndex: this.tabIndex
                        }
                    })
                }), [], !1, null, null, null);
            n.default = component.exports
        }
    }
]);