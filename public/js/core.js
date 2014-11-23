!function(a) {
    var b, c, d = "0.4.2", e = "hasOwnProperty", f = /[\.\/]/, g = "*", h = function() {}, i = function(a, b) {
        return a - b;
    }, j = {
        n: {}
    }, k = function(a, d) {
        a = String(a);
        var e, f = c, g = Array.prototype.slice.call(arguments, 2), h = k.listeners(a), j = 0, l = [], m = {}, n = [], o = b;
        b = a, c = 0;
        for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), 
        h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
        for (l.sort(i); l[j] < 0; ) if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, 
        n;
        for (p = 0; q > p; p++) if (e = h[p], "zIndex" in e) if (e.zIndex == l[j]) {
            if (n.push(e.apply(d, g)), c) break;
            do if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break; while (e);
        } else m[e.zIndex] = e; else if (n.push(e.apply(d, g)), c) break;
        return c = f, b = o, n.length ? n : null;
    };
    k._events = j, k.listeners = function(a) {
        var b, c, d, e, h, i, k, l, m = a.split(f), n = j, o = [ n ], p = [];
        for (e = 0, h = m.length; h > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++) for (n = o[i].n, c = [ n[m[e]], n[g] ], 
            d = 2; d--; ) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l;
        }
        return p;
    }, k.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
            n: {}
        });
        for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++) if (d.f[e] == b) return h;
        return d.f.push(b), function(a) {
            +a == +a && (b.zIndex = +a);
        };
    }, k.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            k.apply(null, [ a, null ].concat(b).concat([].slice.call(arguments, 0)));
        };
    }, k.stop = function() {
        c = 1;
    }, k.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b;
    }, k.nts = function() {
        return b.split(f);
    }, k.off = k.unbind = function(a, b) {
        if (!a) return k._events = j = {
            n: {}
        }, void 0;
        var c, d, h, i, l, m, n, o = a.split(f), p = [ j ];
        for (i = 0, l = o.length; l > i; i++) for (m = 0; m < p.length; m += h.length - 2) {
            if (h = [ m, 1 ], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]); else for (d in c) c[e](d) && h.push(c[d]);
            p.splice.apply(p, h);
        }
        for (i = 0, l = p.length; l > i; i++) for (c = p[i]; c.n; ) {
            if (b) {
                if (c.f) {
                    for (m = 0, n = c.f.length; n > m; m++) if (c.f[m] == b) {
                        c.f.splice(m, 1);
                        break;
                    }
                    !c.f.length && delete c.f;
                }
                for (d in c.n) if (c.n[e](d) && c.n[d].f) {
                    var q = c.n[d].f;
                    for (m = 0, n = q.length; n > m; m++) if (q[m] == b) {
                        q.splice(m, 1);
                        break;
                    }
                    !q.length && delete c.n[d].f;
                }
            } else {
                delete c.f;
                for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f;
            }
            c = c.n;
        }
    }, k.once = function(a, b) {
        var c = function() {
            return k.unbind(a, c), b.apply(this, arguments);
        };
        return k.on(a, c);
    }, k.version = d, k.toString = function() {
        return "You are running Eve " + d;
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
        return k;
    }) : a.eve = k;
}(this), function(a, b) {
    "function" == typeof define && define.amd ? define([ "eve" ], function(c) {
        return b(a, c);
    }) : b(a, a.eve);
}(this, function(a, b) {
    var c = function(b) {
        var c = {}, d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
            setTimeout(a, 16);
        }, e = Array.isArray || function(a) {
            return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a);
        }, f = 0, g = "M" + (+new Date()).toString(36), h = function() {
            return g + (f++).toString(36);
        }, i = function() {
            return +new Date();
        }, j = function(a) {
            var b = this;
            if (null == a) return b.s;
            var c = b.s - a;
            b.b += b.dur * c, b.B += b.dur * c, b.s = a;
        }, k = function(a) {
            var b = this;
            return null == a ? b.spd : (b.spd = a, void 0);
        }, l = function(a) {
            var b = this;
            return null == a ? b.dur : (b.s = b.s * a / b.dur, b.dur = a, void 0);
        }, m = function() {
            var a = this;
            delete c[a.id], b("mina.stop." + a.id, a);
        }, n = function() {
            var a = this;
            a.pdif || (delete c[a.id], a.pdif = a.get() - a.b);
        }, o = function() {
            var a = this;
            a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a);
        }, p = function() {
            var a = 0;
            for (var f in c) if (c.hasOwnProperty(f)) {
                var g, h = c[f], i = h.get();
                if (a++, h.s = (i - h.b) / (h.dur / h.spd), h.s >= 1 && (delete c[f], h.s = 1, a--), 
                e(h.start)) {
                    g = [];
                    for (var j = 0, k = h.start.length; k > j; j++) g[j] = h.start[j] + (h.end[j] - h.start[j]) * h.easing(h.s);
                } else g = h.start + (h.end - h.start) * h.easing(h.s);
                h.set(g), 1 == h.s && b("mina.finish." + h.id, h);
            }
            a && d(p);
        }, q = function(a, b, e, f, g, i, r) {
            var s = {
                id: h(),
                start: a,
                end: b,
                b: e,
                s: 0,
                dur: f - e,
                spd: 1,
                get: g,
                set: i,
                easing: r || q.linear,
                status: j,
                speed: k,
                duration: l,
                stop: m,
                pause: n,
                resume: o
            };
            c[s.id] = s;
            var t, u = 0;
            for (t in c) if (c.hasOwnProperty(t) && (u++, 2 == u)) break;
            return 1 == u && d(p), s;
        };
        return q.time = i, q.getById = function(a) {
            return c[a] || null;
        }, q.linear = function(a) {
            return a;
        }, q.easeout = function(a) {
            return Math.pow(a, 1.7);
        }, q.easein = function(a) {
            return Math.pow(a, .48);
        }, q.easeinout = function(a) {
            if (1 == a) return 1;
            if (0 == a) return 0;
            var b = .48 - a / 1.04, c = Math.sqrt(.1734 + b * b), d = c - b, e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1), f = -c - b, g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1), h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h;
        }, q.backin = function(a) {
            if (1 == a) return 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a - b);
        }, q.backout = function(a) {
            if (0 == a) return 0;
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1;
        }, q.elastic = function(a) {
            return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin((a - .075) * 2 * Math.PI / .3) + 1;
        }, q.bounce = function(a) {
            var b, c = 7.5625, d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, 
            b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b;
        }, a.mina = q, q;
    }("undefined" == typeof b ? function() {} : b);
    !function() {
        function a(a) {
            a = a || Object(a);
            for (var b, d, e = 1, f = a.length + 1, h = c(a, 0); f > e; e++) b = d, d = h, h = c(a, e), 
            this.raw += d, g.call(this, d, h, b);
            return this._beforeEnd = function() {
                g.call(this, "", "", d);
            }, this;
        }
        function c(a, b) {
            return a && (a.charAt ? a.charAt(b) : a[b]);
        }
        function d(a, b) {
            this.events = this.events || {}, this.events[a] = this.events[a] || [], this.events[a].push(b);
        }
        function e(a, c, d) {
            "function" == typeof b && b("elemental." + a + (c ? "." + c : ""), null, c, d || "", this.raw);
            for (var e = this.events && this.events[a], f = e && e.length; f--; ) try {
                this.events[a][f](c, d || "", this.raw);
            } catch (g) {}
            this.raw = "";
        }
        function f() {
            g.call(this, "eof"), this.event("eof");
        }
        function g(a, b, c) {
            "\n" == a && this.event("newline"), m[this.mode].call(this, a, b, c);
        }
        function h(b, c) {
            var g = function(a) {
                g.parse(a);
            };
            return g.mode = "text", g.type = String(b || "html").toLowerCase(), g.textchunk = "", 
            g.raw = "", g.parse = a, g.on = d, g.event = e, g.end = f, c && (i = c), g;
        }
        var i = {
            lt: 60,
            "lt;": 60,
            "AMP;": 38,
            AMP: 38,
            "GT;": 62,
            GT: 62,
            "QUOT;": 34,
            QUOT: 34,
            "apos;": 39,
            "bull;": 8226,
            "bullet;": 8226,
            "copy;": 169,
            copy: 169,
            "deg;": 176,
            deg: 176
        }, j = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]/, k = function(a) {
            var b;
            return "#" == a.charAt() && (b = "x" == a.charAt(1).toLowerCase() ? parseInt(a.substring(2), 16) : parseInt(a.substring(1), 10)), 
            b = i[a], b ? String.fromCharCode(b) : "&" + a;
        }, l = function() {
            for (var a in this.attr) this.attr.hasOwnProperty(a) && this.event("attr", a, {
                value: this.attr[a],
                tagname: this.tagname,
                attr: this.attr
            });
        }, m = {
            text: function(a) {
                switch (a) {
                  case "<":
                  case "eof":
                    this.nodename = "", this.attr = {}, this.mode = "tag name start", this.raw = this.raw.slice(0, -1), 
                    this.textchunk && this.event("text", this.textchunk), this.raw += a, this.textchunk = "";
                    break;

                  case "&":
                    this.mode = "entity", this.entity = "";
                    break;

                  default:
                    this.textchunk += a;
                }
            },
            entity: function(a) {
                j.test(a) ? (this.textchunk += k(this.entity), this.mode = "text") : ";" == a ? (this.textchunk += k(this.entity + a), 
                this.mode = "text") : this.entity += a;
            },
            special: function(a, b, c) {
                return "!" == c && "-" == a && "-" == b ? (this.mode = "comment start", void 0) : "[CDATA" == this.textchunk && "[" == a ? (this.mode = "cdata", 
                this.textchunk = "", void 0) : ">" == a || "eof" == a ? (this.event("special", this.textchunk), 
                this.mode = "text", this.textchunk = "", void 0) : (this.textchunk += a, void 0);
            },
            cdata: function(a, b, c) {
                return "]" == c && "]" == a && ">" == b ? (this.mode = "cdata end", this.textchunk = this.textchunk.slice(0, -1), 
                void 0) : ("eof" == a && m["cdata end"].call(this), this.textchunk += a, void 0);
            },
            "cdata end": function() {
                this.event("cdata", this.textchunk), this.textchunk = "", this.mode = "text";
            },
            "comment start": function(a, b) {
                ">" == b || "eof" == a ? (this.event("comment", ""), this.mode = "skip") : this.mode = "comment";
            },
            skip: function() {
                this.mode = "text";
            },
            comment: function(a, b, c) {
                "-" == a && "-" == c && ">" == b ? (this.mode = "comment end", this.textchunk = this.textchunk.slice(0, -1)) : "eof" == a ? this.event("comment", this.textchunk) : this.textchunk += a;
            },
            "comment end": function() {
                this.event("comment", this.textchunk), this.textchunk = "", this.mode = "text";
            },
            declaration: function(a, b) {
                return "?" == a && ">" == b ? (this.mode = "declaration end", void 0) : ("eof" == a && this.event("comment", this.textchunk), 
                this.textchunk += a, void 0);
            },
            "declaration end": function() {
                this.event("comment", this.textchunk), this.textchunk = "", this.mode = "text";
            },
            "tag name start": function(a, b, c) {
                if ("eof" == a) return this.event("text", "<"), void 0;
                if (!j.test(a)) {
                    if (this.mode = "tag name", "/" == a) return this.mode = "close tag name start", 
                    void 0;
                    if ("!" == a) return this.mode = "special", this.textchunk = "", void 0;
                    if ("?" == a) return this.mode = "declaration", void 0;
                    m[this.mode].call(this, a, b, c);
                }
            },
            "close tag name start": function(a, b, c) {
                j.test(a) || (this.mode = "close tag name", this.tagname = "", this.nodename = "", 
                m[this.mode].call(this, a, b, c));
            },
            "close tag name": function(a) {
                if (j.test(a)) this.tagname = this.nodename; else switch (a) {
                  case ">":
                    this.event("/tag", this.tagname || this.nodename), this.mode = "text";
                    break;

                  default:
                    !this.tagname && (this.nodename += a);
                }
            },
            "tag name": function(a, b) {
                if (j.test(a)) this.tagname = this.nodename, this.nodename = "", this.mode = "attr start"; else switch (a) {
                  case ">":
                    this.event("tag", this.nodename), this.mode = "text";
                    break;

                  case "/":
                    this.raw += b, this.event("tag", this.nodename), this.event("/tag", this.nodename), 
                    this.mode = "skip";
                    break;

                  default:
                    this.nodename += a;
                }
            },
            "attr start": function(a, b, c) {
                j.test(a) || (this.mode = "attr", this.nodename = "", m[this.mode].call(this, a, b, c));
            },
            attr: function(a) {
                if (j.test(a) || "=" == a) this.attr[this.nodename] = "", this.mode = "attr value start"; else switch (a) {
                  case ">":
                    "/" == this.nodename ? (delete this.attr["/"], this.event("tag", this.tagname, this.attr), 
                    l.call(this), this.event("/tag", this.tagname, !0)) : (this.nodename && (this.attr[this.nodename] = ""), 
                    this.event("tag", this.tagname, this.attr), l.call(this)), this.mode = "text";
                    break;

                  default:
                    this.nodename += a;
                }
            },
            "attr value start": function(a, b, c) {
                if (!j.test(a)) {
                    if (this.mode = "attr value", this.quote = !1, "'" == a || '"' == a) return this.quote = a, 
                    void 0;
                    m[this.mode].call(this, a, b, c);
                }
            },
            "attr value": function(a, b, c) {
                if (j.test(a) && !this.quote) this.mode = "attr start"; else if (">" != a || this.quote) switch (a) {
                  case '"':
                  case "'":
                    this.quote == a && "\\" != c && (this.mode = "attr start");
                    break;

                  default:
                    this.attr[this.nodename] += a;
                } else this.event("tag", this.tagname, this.attr), this.mode = "text";
            }
        };
        h.version = "0.2.4", ("undefined" == typeof exports ? this : exports).elemental = h;
    }();
    var d = function() {
        function d(a, b) {
            if (a) {
                if (a.tagName) return z(a);
                if (a instanceof u) return a;
                if (null == b) return a = I.doc.querySelector(a), z(a);
            }
            return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new y(a, b);
        }
        function e(a, b) {
            if (b) {
                if ("string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(gb, b.substring(6)) : a.getAttribute(b);
                for (var c in b) if (b[J](c)) {
                    var d = K(b[c]);
                    d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(gb, c.substring(6), d) : a.setAttribute(c, d) : a.removeAttribute(c);
                }
            } else a = I.doc.createElementNS("http://www.w3.org/2000/svg", a);
            return a;
        }
        function f(a, b) {
            return b = K.prototype.toLowerCase.call(b), "finite" == b ? !W[J](+a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || U.call(a).slice(8, -1).toLowerCase() == b;
        }
        function g(a) {
            if ("function" == typeof a || Object(a) !== a) return a;
            var b = new a.constructor();
            for (var c in a) a[J](c) && (b[c] = g(a[c]));
            return b;
        }
        function h(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return a.push(a.splice(c, 1)[0]);
        }
        function i(a, b, c) {
            function d() {
                var e = Array.prototype.slice.call(arguments, 0), f = e.join("␀"), g = d.cache = d.cache || {}, i = d.count = d.count || [];
                return g[J](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], 
                i.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f]);
            }
            return d;
        }
        function j(a, b, c, d, e, f) {
            if (null == e) {
                var g = a - c, h = b - d;
                return g || h ? (180 + 180 * N.atan2(-h, -g) / R + 360) % 360 : 0;
            }
            return j(a, b, e, f) - j(c, d, e, f);
        }
        function k(a) {
            return a % 360 * R / 180;
        }
        function l(a) {
            return 180 * a / R % 360;
        }
        function m() {
            return this.x + T + this.y + T + this.width + " × " + this.height;
        }
        function n(a, b, c, d, e, f) {
            return null == b && "[object SVGMatrix]" == U.call(a) ? (this.a = a.a, this.b = a.b, 
            this.c = a.c, this.d = a.d, this.e = a.e, this.f = a.f, void 0) : (null != a ? (this.a = +a, 
            this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, 
            this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0), void 0);
        }
        function o(a) {
            var b = [];
            return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
                return d = d.split(/\s*,\s*/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (2 == d.length && d.push(0, 0), 
                1 == d.length && d.push(d[0], 0, 0)), "skewX" == c ? b.push([ "m", 1, 0, N.tan(k(d[0])), 1, 0, 0 ]) : "skewY" == c ? b.push([ "m", 1, N.tan(k(d[0])), 0, 1, 0, 0 ]) : b.push([ c.charAt(0) ].concat(d)), 
                a;
            }), b;
        }
        function p(a, b) {
            var c = pb(a), d = new n();
            if (c) for (var e = 0, f = c.length; f > e; e++) {
                var g, h, i, j, k, l = c[e], m = l.length, o = K(l[0]).toLowerCase(), p = l[0] != o, q = p ? d.invert() : 0;
                "t" == o && 3 == m ? p ? (g = q.x(0, 0), h = q.y(0, 0), i = q.x(l[1], l[2]), j = q.y(l[1], l[2]), 
                d.translate(i - g, j - h)) : d.translate(l[1], l[2]) : "r" == o ? 2 == m ? (k = k || b, 
                d.rotate(l[1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m && (p ? (i = q.x(l[2], l[3]), 
                j = q.y(l[2], l[3]), d.rotate(l[1], i, j)) : d.rotate(l[1], l[2], l[3])) : "s" == o ? 2 == m || 3 == m ? (k = k || b, 
                d.scale(l[1], l[m - 1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m ? p ? (i = q.x(l[2], l[3]), 
                j = q.y(l[2], l[3]), d.scale(l[1], l[1], i, j)) : d.scale(l[1], l[1], l[2], l[3]) : 5 == m && (p ? (i = q.x(l[3], l[4]), 
                j = q.y(l[3], l[4]), d.scale(l[1], l[2], i, j)) : d.scale(l[1], l[2], l[3], l[4])) : "m" == o && 7 == m && d.add(l[1], l[2], l[3], l[4], l[5], l[6]);
            }
            return d;
        }
        function q(a, b) {
            if (null == b) {
                var c = !0;
                if (b = "linearGradient" == a.type || "radialGradient" == a.type ? a.node.getAttribute("gradientTransform") : "pattern" == a.type ? a.node.getAttribute("patternTransform") : a.node.getAttribute("transform"), 
                !b) return new n();
                b = o(b);
            } else b = qb.test(b) ? K(b).replace(/\.{3}|\u2026/g, a._.transform || S) : o(b), 
            f(b, "array") && (b = d.path ? d.path.toString.call(b) : K(b)), a._.transform = b;
            var e = p(b, a.getBBox(1));
            return c ? e : (a.matrix = e, void 0);
        }
        function r(a) {
            if (d._.someDefs) return d._.someDefs;
            var b = a.paper || a.node.parentNode && d(a.node.parentNode) || d.select("svg") || d(0, 0), c = b.select("defs").node;
            return c || (c = x("defs", b.node).node), d._.someDefs = c, c;
        }
        function s(a, b, c) {
            function d(a) {
                return null == a ? S : a == +a ? a : (e(j, {
                    width: a
                }), j.getBBox().width);
            }
            function f(a) {
                return null == a ? S : a == +a ? a : (e(j, {
                    height: a
                }), j.getBBox().height);
            }
            function g(d, e) {
                null == b ? i[d] = e(a.attr(d)) : d == b && (i = e(null == c ? a.attr(d) : c));
            }
            var h = r(a), i = {}, j = h.querySelector(".svg---mgr");
            switch (j || (j = e("rect"), e(j, {
                width: 10,
                height: 10,
                "class": "svg---mgr"
            }), h.appendChild(j)), a.type) {
              case "rect":
                g("rx", d), g("ry", f);

              case "image":
                g("width", d), g("height", f);

              case "text":
                g("x", d), g("y", f);
                break;

              case "circle":
                g("cx", d), g("cy", f), g("r", d);
                break;

              case "ellipse":
                g("cx", d), g("cy", f), g("rx", d), g("ry", f);
                break;

              case "line":
                g("x1", d), g("x2", d), g("y1", f), g("y2", f);
                break;

              case "marker":
                g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
                break;

              case "radialGradient":
                g("fx", d), g("fy", f);
                break;

              case "tspan":
                g("dx", d), g("dy", f);
                break;

              default:
                g(b, d);
            }
            return i;
        }
        function t(a) {
            f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
            for (var b = 0, c = 0, d = this.node; this[b]; ) delete this[b++];
            for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
                d.appendChild(a.node);
            }) : d.appendChild(a[b].node);
            var e = d.childNodes;
            for (b = 0; b < e.length; b++) e[b].snap && (this[c++] = hb[e[b].snap]);
        }
        function u(a) {
            if (a.snap in hb) return hb[a.snap];
            var b, c = this.id = fb();
            try {
                b = a.ownerSVGElement;
            } catch (d) {}
            if (this.node = a, b && (this.paper = new y(b)), this.type = a.tagName, this.anims = {}, 
            this._ = {
                transform: [],
                sx: 1,
                sy: 1,
                deg: 0,
                dx: 0,
                dy: 0,
                dirty: 1
            }, a.snap = c, hb[c] = this, "g" == this.type) {
                this.add = t;
                for (var e in y.prototype) y.prototype[J](e) && (this[e] = y.prototype[e]);
            }
        }
        function v(a) {
            for (var b, c = 0, d = a.length; d > c; c++) if (b = b || a[c]) return b;
        }
        function w(a) {
            this.node = a;
        }
        function x(a, b) {
            var c = e(a);
            b.appendChild(c);
            var d = z(c);
            return d.type = a, d;
        }
        function y(a, b) {
            var c, d, f, g = y.prototype;
            if (a && "svg" == a.tagName) {
                if (a.snap in hb) return hb[a.snap];
                c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], 
                d || (d = e("desc"), d.appendChild(I.doc.createTextNode("Created with Snap")), c.node.appendChild(d)), 
                f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
                for (var h in g) g[J](h) && (c[h] = g[h]);
                c.paper = c.root = c;
            } else c = x("svg", I.doc.body), e(c.node, {
                height: b,
                version: 1.1,
                width: a,
                xmlns: "http://www.w3.org/2000/svg"
            });
            return c;
        }
        function z(a) {
            return a ? a instanceof u || a instanceof w ? a : "svg" == a.tagName ? new y(a) : new u(a) : a;
        }
        function A() {
            return this.selectAll("stop");
        }
        function B(a, b) {
            var c = e("stop"), f = {
                offset: +b + "%"
            };
            return a = d.color(a), f["stop-color"] = a.hex, a.opacity < 1 && (f["stop-opacity"] = a.opacity), 
            e(c, f), this.node.appendChild(c), this;
        }
        function C() {
            if ("linearGradient" == this.type) {
                var a = e(this.node, "x1") || 0, b = e(this.node, "x2") || 1, c = e(this.node, "y1") || 0, f = e(this.node, "y2") || 0;
                return d._.box(a, c, N.abs(b - a), N.abs(f - c));
            }
            var g = this.node.cx || .5, h = this.node.cy || .5, i = this.node.r || 0;
            return d._.box(g - i, h - i, 2 * i, 2 * i);
        }
        function D(a, c) {
            function d(a, b) {
                for (var c = (b - j) / (a - k), d = k; a > d; d++) h[d].offset = +(+j + c * (d - k)).toFixed(2);
                k = a, j = b;
            }
            var f, g = v(b("snap.util.grad.parse", null, c));
            if (!g) return null;
            g.params.unshift(a), f = "l" == g.type.toLowerCase() ? E.apply(0, g.params) : F.apply(0, g.params), 
            g.type != g.type.toLowerCase() && e(f.node, {
                gradientUnits: "userSpaceOnUse"
            });
            var h = g.stops, i = h.length, j = 0, k = 0;
            i--;
            for (var l = 0; i > l; l++) "offset" in h[l] && d(l, h[l].offset);
            for (h[i].offset = h[i].offset || 100, d(i, h[i].offset), l = 0; i >= l; l++) {
                var m = h[l];
                f.addStop(m.color, m.offset);
            }
            return f;
        }
        function E(a, b, c, d, f) {
            var g = x("linearGradient", a);
            return g.stops = A, g.addStop = B, g.getBBox = C, null != b && e(g.node, {
                x1: b,
                y1: c,
                x2: d,
                y2: f
            }), g;
        }
        function F(a, b, c, d, f, g) {
            var h = x("radialGradient", a);
            return h.stops = A, h.addStop = B, h.getBBox = C, null != b && e(h.node, {
                cx: b,
                cy: c,
                r: d
            }), null != f && null != g && e(h.node, {
                fx: f,
                fy: g
            }), h;
        }
        function G(a) {
            return function(c) {
                if (b.stop(), c instanceof w && 1 == c.node.childNodes.length && ("radialGradient" == c.node.firstChild.tagName || "linearGradient" == c.node.firstChild.tagName || "pattern" == c.node.firstChild.tagName) && (c = c.node.firstChild, 
                r(this).appendChild(c), c = z(c)), c instanceof u) if ("radialGradient" == c.type || "linearGradient" == c.type || "pattern" == c.type) {
                    c.node.id || e(c.node, {
                        id: c.id
                    });
                    var f = "url(#" + c.node.id + ")";
                } else f = c.attr(a); else if (f = d.color(c), f.error) {
                    var g = D(r(this), c);
                    g ? (g.node.id || e(g.node, {
                        id: g.id
                    }), f = "url(#" + g.node.id + ")") : f = c;
                } else f = K(f);
                var h = {};
                h[a] = f, e(this.node, h), this.node.style[a] = S;
            };
        }
        function H(a) {
            for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && (1 == f.childNodes.length && 3 == f.firstChild.nodeType ? b.push(f.firstChild.nodeValue) : b.push(H(f)));
            }
            return b;
        }
        d.version = "0.1.0", d.toString = function() {
            return "Snap v" + this.version;
        }, d._ = {};
        var I = {
            win: a,
            doc: a.document
        };
        d._.glob = I;
        var J = "hasOwnProperty", K = String, L = parseFloat, M = parseInt, N = Math, O = N.max, P = N.min, Q = N.abs, R = (N.pow, 
        N.PI), S = (N.round, ""), T = " ", U = Object.prototype.toString, V = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, W = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        }, X = /^url\(#?([^)]+)\)$/, Y = " \n\f\r   ᠎             　\u2028\u2029", Z = new RegExp("[," + Y + "]+"), $ = (new RegExp("[" + Y + "]", "g"), 
        new RegExp("[" + Y + "]*,[" + Y + "]*")), _ = {
            hs: 1,
            rg: 1
        }, ab = new RegExp("([a-z])[" + Y + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + Y + "]*,?[" + Y + "]*)+)", "ig"), bb = new RegExp("([rstm])[" + Y + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + Y + "]*,?[" + Y + "]*)+)", "ig"), cb = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + Y + "]*,?[" + Y + "]*", "ig"), db = 0, eb = "S" + (+new Date()).toString(36), fb = function() {
            return eb + (db++).toString(36);
        }, gb = "http://www.w3.org/1999/xlink", hb = {};
        d._.$ = e, d._.id = fb, d.format = function() {
            var a = /\{([^\}]+)\}/g, b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, c = function(a, c, d) {
                var e = d;
                return c.replace(b, function(a, b, c, d, f) {
                    b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()));
                }), e = (null == e || e == d ? a : e) + "";
            };
            return function(b, d) {
                return K(b).replace(a, function(a, b) {
                    return c(a, b, d);
                });
            };
        }();
        var ib = function() {
            function a() {
                this.parentNode.removeChild(this);
            }
            return function(b, c) {
                var d = I.doc.createElement("img"), e = I.doc.body;
                d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
                    c.call(d), d.onload = d.onerror = null, e.removeChild(d);
                }, d.onerror = a, e.appendChild(d), d.src = b;
            };
        }();
        d._.clone = g, d._.cacher = i, d.rad = k, d.deg = l, d.angle = j, d.is = f, d.snapTo = function(a, b, c) {
            if (c = f(c, "finite") ? c : 10, f(a, "array")) {
                for (var d = a.length; d--; ) if (Q(a[d] - b) <= c) return a[d];
            } else {
                a = +a;
                var e = b % a;
                if (c > e) return b - e;
                if (e > a - c) return b - e + a;
            }
            return b;
        }, function(a) {
            function b(a) {
                return a[0] * a[0] + a[1] * a[1];
            }
            function c(a) {
                var c = N.sqrt(b(a));
                a[0] && (a[0] /= c), a[1] && (a[1] /= c);
            }
            a.add = function(a, b, c, d, e, f) {
                var g, h, i, j, k = [ [], [], [] ], l = [ [ this.a, this.c, this.e ], [ this.b, this.d, this.f ], [ 0, 0, 1 ] ], m = [ [ a, c, e ], [ b, d, f ], [ 0, 0, 1 ] ];
                for (a && a instanceof n && (m = [ [ a.a, a.c, a.e ], [ a.b, a.d, a.f ], [ 0, 0, 1 ] ]), 
                g = 0; 3 > g; g++) for (h = 0; 3 > h; h++) {
                    for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
                    k[g][h] = j;
                }
                return this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], 
                this.f = k[1][2], this;
            }, a.invert = function() {
                var a = this, b = a.a * a.d - a.b * a.c;
                return new n(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b);
            }, a.clone = function() {
                return new n(this.a, this.b, this.c, this.d, this.e, this.f);
            }, a.translate = function(a, b) {
                return this.add(1, 0, 0, 1, a, b);
            }, a.scale = function(a, b, c, d) {
                return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), 
                (c || d) && this.add(1, 0, 0, 1, -c, -d), this;
            }, a.rotate = function(a, b, c) {
                a = k(a), b = b || 0, c = c || 0;
                var d = +N.cos(a).toFixed(9), e = +N.sin(a).toFixed(9);
                return this.add(d, e, -e, d, b, c), this.add(1, 0, 0, 1, -b, -c);
            }, a.x = function(a, b) {
                return a * this.a + b * this.c + this.e;
            }, a.y = function(a, b) {
                return a * this.b + b * this.d + this.f;
            }, a.get = function(a) {
                return +this[K.fromCharCode(97 + a)].toFixed(4);
            }, a.toString = function() {
                return "matrix(" + [ this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5) ].join() + ")";
            }, a.offset = function() {
                return [ this.e.toFixed(4), this.f.toFixed(4) ];
            }, a.split = function() {
                var a = {};
                a.dx = this.e, a.dy = this.f;
                var d = [ [ this.a, this.c ], [ this.b, this.d ] ];
                a.scalex = N.sqrt(b(d[0])), c(d[0]), a.shear = d[0][0] * d[1][0] + d[0][1] * d[1][1], 
                d[1] = [ d[1][0] - d[0][0] * a.shear, d[1][1] - d[0][1] * a.shear ], a.scaley = N.sqrt(b(d[1])), 
                c(d[1]), a.shear /= a.scaley;
                var e = -d[0][1], f = d[1][1];
                return 0 > f ? (a.rotate = l(N.acos(f)), 0 > e && (a.rotate = 360 - a.rotate)) : a.rotate = l(N.asin(e)), 
                a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), 
                a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, 
                a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a;
            }, a.toTransformString = function(a) {
                var b = a || this.split();
                return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), 
                b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [ +b.dx.toFixed(4), +b.dy.toFixed(4) ] : S) + (1 != b.scalex || 1 != b.scaley ? "s" + [ b.scalex, b.scaley, 0, 0 ] : S) + (b.rotate ? "r" + [ +b.rotate.toFixed(4), 0, 0 ] : S)) : "m" + [ this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5) ];
            };
        }(n.prototype), d.Matrix = n, d.getRGB = i(function(a) {
            if (!a || (a = K(a)).indexOf("-") + 1) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: mb
            };
            if ("none" == a) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: mb
            };
            if (!(_[J](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = jb(a)), 
            !a) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: mb
            };
            var b, c, e, g, h, i, j = a.match(V);
            return j ? (j[2] && (e = M(j[2].substring(5), 16), c = M(j[2].substring(3, 5), 16), 
            b = M(j[2].substring(1, 3), 16)), j[3] && (e = M((h = j[3].charAt(3)) + h, 16), 
            c = M((h = j[3].charAt(2)) + h, 16), b = M((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split($), 
            b = L(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = L(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), 
            e = L(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), 
            i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split($), b = L(i[0]), 
            "%" == i[0].slice(-1) && (b /= 100), c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), 
            e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), 
            "hsba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), 
            d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split($), b = L(i[0]), "%" == i[0].slice(-1) && (b /= 100), 
            c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), 
            ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), 
            i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = P(N.round(b), 255), 
            c = P(N.round(c), 255), e = P(N.round(e), 255), g = P(O(g, 0), 1), j = {
                r: b,
                g: c,
                b: e,
                toString: mb
            }, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, 
            j)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: mb
            };
        }, d), d.hsb = i(function(a, b, c) {
            return d.hsb2rgb(a, b, c).hex;
        }), d.hsl = i(function(a, b, c) {
            return d.hsl2rgb(a, b, c).hex;
        }), d.rgb = i(function(a, b, c, d) {
            if (f(d, "finite")) {
                var e = N.round;
                return "rgba(" + [ e(a), e(b), e(c), +d.toFixed(2) ] + ")";
            }
            return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1);
        });
        var jb = function(a) {
            var b = I.doc.getElementsByTagName("head")[0], c = "rgb(255, 0, 0)";
            return jb = i(function(a) {
                if ("red" == a.toLowerCase()) return c;
                b.style.color = c, b.style.color = a;
                var d = I.doc.defaultView.getComputedStyle(b, S).getPropertyValue("color");
                return d == c ? null : d;
            }), jb(a);
        }, kb = function() {
            return "hsb(" + [ this.h, this.s, this.b ] + ")";
        }, lb = function() {
            return "hsl(" + [ this.h, this.s, this.l ] + ")";
        }, mb = function() {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [ this.r, this.g, this.b, this.opacity ] + ")";
        }, nb = function(a, b, c) {
            if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, 
            b = a.g, a = a.r), null == b && f(a, string)) {
                var e = d.getRGB(a);
                a = e.r, b = e.g, c = e.b;
            }
            return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [ a, b, c ];
        }, ob = function(a, b, c, e) {
            a = N.round(255 * a), b = N.round(255 * b), c = N.round(255 * c);
            var g = {
                r: a,
                g: b,
                b: c,
                opacity: f(e, "finite") ? e : 1,
                hex: d.rgb(a, b, c),
                toString: mb
            };
            return f(e, "finite") && (g.opacity = e), g;
        };
        d.color = function(a) {
            var b;
            return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, 
            a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), 
            a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), 
            f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), 
            a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = {
                hex: "none"
            }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = mb, 
            a;
        }, d.hsb2rgb = function(a, b, c, d) {
            f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, 
            d = a.o), a *= 360;
            var e, g, h, i, j;
            return a = a % 360 / 60, j = c * b, i = j * (1 - Q(a % 2 - 1)), e = g = h = c - j, 
            a = ~~a, e += [ j, i, 0, 0, i, j ][a], g += [ i, j, j, i, 0, 0 ][a], h += [ 0, 0, i, j, j, i ][a], 
            ob(e, g, h, d);
        }, d.hsl2rgb = function(a, b, c, d) {
            f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), 
            (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
            var e, g, h, i, j;
            return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - Q(a % 2 - 1)), 
            e = g = h = c - j / 2, a = ~~a, e += [ j, i, 0, 0, i, j ][a], g += [ i, j, j, i, 0, 0 ][a], 
            h += [ 0, 0, i, j, j, i ][a], ob(e, g, h, d);
        }, d.rgb2hsb = function(a, b, c) {
            c = nb(a, b, c), a = c[0], b = c[1], c = c[2];
            var d, e, f, g;
            return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, 
            d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
                h: d,
                s: e,
                b: f,
                toString: kb
            };
        }, d.rgb2hsl = function(a, b, c) {
            c = nb(a, b, c), a = c[0], b = c[1], c = c[2];
            var d, e, f, g, h, i;
            return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, 
            d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), 
            {
                h: d,
                s: e,
                l: f,
                toString: lb
            };
        }, d.parsePathString = function(a) {
            if (!a) return null;
            var b = d.path(a);
            if (b.arr) return d.path.clone(b.arr);
            var c = {
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
            }, e = [];
            return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || K(a).replace(ab, function(a, b, d) {
                var f = [], g = b.toLowerCase();
                if (d.replace(cb, function(a, b) {
                    b && f.push(+b);
                }), "m" == g && f.length > 2 && (e.push([ b ].concat(f.splice(0, 2))), g = "l", 
                b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([ b, f[0] ]), "r" == g) e.push([ b ].concat(f)); else for (;f.length >= c[g] && (e.push([ b ].concat(f.splice(0, c[g]))), 
                c[g]); ) ;
            }), e.toString = d.path.toString, b.arr = d.path.clone(e), e;
        };
        var pb = d.parseTransformString = function(a) {
            if (!a) return null;
            var b = [];
            return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || K(a).replace(bb, function(a, c, d) {
                var e = [];
                c.toLowerCase(), d.replace(cb, function(a, b) {
                    b && e.push(+b);
                }), b.push([ c ].concat(e));
            }), b.toString = d.path.toString, b;
        }, qb = new RegExp("^[a-z][" + Y + "]*-?\\.?\\d");
        d._.transform2matrix = p, d._unit2px = s, d._.getSomeDefs = r, d.select = function(a) {
            return z(I.doc.querySelector(a));
        }, d.selectAll = function(a) {
            for (var b = I.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e]));
            return c;
        }, function(a) {
            function g(a) {
                function b(a, b) {
                    var c = e(a.node, b);
                    c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), 
                    c && (i[c] = (i[c] || []).concat(function(c) {
                        var d = {};
                        d[b] = "url(#" + c + ")", e(a.node, d);
                    })));
                }
                function c(a) {
                    var b = e(a.node, "xlink:href");
                    b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function(b) {
                        a.attr("xlink:href", "#" + b);
                    })));
                }
                for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
                    d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), 
                    c(d);
                    var l = e(d.node, "id");
                    l && (e(d.node, {
                        id: d.id
                    }), h.push({
                        old: l,
                        id: d.id
                    }));
                }
                for (j = 0, k = h.length; k > j; j++) {
                    var m = i[h[j].old];
                    if (m) for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id);
                }
            }
            function h(a, b, c) {
                return function(d) {
                    var e = d.slice(a, b);
                    return 1 == e.length && (e = e[0]), c ? c(e) : e;
                };
            }
            function i(a) {
                return function() {
                    var b = a ? "<" + this.type : "", c = this.node.attributes, d = this.node.childNodes;
                    if (a) for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                    if (d.length) {
                        for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += z(d[e]).toString());
                        a && (b += "</" + this.type + ">");
                    } else a && (b += "/>");
                    return b;
                };
            }
            a.attr = function(a, c) {
                var d = this;
                if (d.node, !a) return d;
                if (f(a, "string")) {
                    if (!(arguments.length > 1)) return v(b("snap.util.getattr." + a, d));
                    var e = {};
                    e[a] = c, a = e;
                }
                for (var g in a) a[J](g) && b("snap.util.attr." + g, d, a[g]);
                return d;
            }, a.getBBox = function(a) {
                var b = this;
                if ("use" == b.type && (b = b.original), b.removed) return {};
                var c = b._;
                return a ? ((c.dirty || !c.bboxwt) && (b.realPath = d.path.get[b.type](b), c.bboxwt = d.path.getBBox(b.realPath), 
                c.bboxwt.toString = m, c.dirty = 0), d._.box(c.bboxwt)) : ((c.dirty || c.dirtyT || !c.bbox) && ((c.dirty || !b.realPath) && (c.bboxwt = 0, 
                b.realPath = d.path.get[b.type](b)), c.bbox = d.path.getBBox(d.path.map(b.realPath, b.matrix)), 
                c.bbox.toString = m, c.dirty = c.dirtyT = 0), d._.box(c.bbox));
            };
            var j = function() {
                return this.string;
            };
            a.transform = function(a) {
                var b = this._;
                if (null == a) {
                    var c = new n(this.node.getCTM()), d = q(this), f = d.toTransformString(), g = K(d) == K(this.matrix) ? b.transform : f;
                    return {
                        string: g,
                        globalMatrix: c,
                        localMatrix: d,
                        diffMatrix: c.clone().add(d.invert()),
                        global: c.toTransformString(),
                        local: f,
                        toString: j
                    };
                }
                return a instanceof n && (a = a.toTransformString()), q(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, {
                    gradientTransform: this.matrix
                }) : "pattern" == this.type ? e(this.node, {
                    patternTransform: this.matrix
                }) : e(this.node, {
                    transform: this.matrix
                })), this;
            }, a.parent = function() {
                return z(this.node.parentNode);
            }, a.append = a.add = function(a) {
                if ("set" == a.type) {
                    var b = this;
                    return a.forEach(function(a) {
                        b.append(a);
                    }), this;
                }
                return a = z(a), this.node.appendChild(a.node), a.paper = this.paper, this;
            }, a.prepend = function(a) {
                return a = z(a), this.node.insertBefore(a.node, this.node.firstChild), a.paper = this.paper, 
                this;
            }, a.before = function(a) {
                return a = z(a), this.node.parentNode.insertBefore(a.node, this.node), a.paper = this.paper, 
                this;
            }, a.after = function(a) {
                return a = z(a), this.node.parentNode.insertBefore(a.node, this.node.nextSibling), 
                a.paper = this.paper, this;
            }, a.insertBefore = function(a) {
                return a = z(a), a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, 
                this;
            }, a.insertAfter = function(a) {
                return a = z(a), a.node.parentNode.insertBefore(this.node, a.node.nextSibling), 
                this.paper = a.paper, this;
            }, a.remove = function() {
                return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, 
                this.removed = !0, this;
            }, a.select = function(a) {
                return z(this.node.querySelector(a));
            }, a.selectAll = function(a) {
                for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e]));
                return c;
            }, a.asPX = function(a, b) {
                return null == b && (b = this.attr(a)), s(this, a, b);
            }, a.use = function() {
                var a, b = this.node.id;
                return b || (b = this.id, e(this.node, {
                    id: b
                })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? x(this.type, this.node.parentNode) : x("use", this.node.parentNode), 
                e(a.node, {
                    "xlink:href": "#" + b
                }), a.original = this, a;
            }, a.clone = function() {
                var a = z(this.node.cloneNode(!0));
                return e(a.node, "id") && e(a.node, {
                    id: a.id
                }), g(a), a.insertAfter(this), a;
            }, a.toDefs = function() {
                var a = r(this);
                return a.appendChild(this.node), this;
            }, a.pattern = function(a, b, c, d) {
                var f = x("pattern", r(this));
                return null == a && (a = this.getBBox()), a && "x" in a && (b = a.y, c = a.width, 
                d = a.height, a = a.x), e(f.node, {
                    x: a,
                    y: b,
                    width: c,
                    height: d,
                    patternUnits: "userSpaceOnUse",
                    id: f.id,
                    viewBox: [ a, b, c, d ].join(" ")
                }), f.node.appendChild(this.node), f;
            }, a.marker = function(a, b, c, d, f, g) {
                var h = x("marker", r(this));
                return null == a && (a = this.getBBox()), a && "x" in a && (b = a.y, c = a.width, 
                d = a.height, f = a.refX || a.cx, g = a.refY || a.cy, a = a.x), e(h.node, {
                    viewBox: [ a, b, c, d ].join(T),
                    markerWidth: c,
                    markerHeight: d,
                    orient: "auto",
                    refX: f || 0,
                    refY: g || 0,
                    id: h.id
                }), h.node.appendChild(this.node), h;
            };
            var k = function(a, b, d, e) {
                "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, 
                d && (this.easing = d), e && (this.callback = e);
            };
            d.animation = function(a, b, c, d) {
                return new k(a, b, c, d);
            }, a.inAnim = function() {
                var a = this, b = [];
                for (var c in a.anims) a.anims[J](c) && function(a) {
                    b.push({
                        anim: new k(a._attrs, a.dur, a.easing, a._callback),
                        curStatus: a.status(),
                        status: function(b) {
                            return a.status(b);
                        },
                        stop: function() {
                            a.stop();
                        }
                    });
                }(a.anims[c]);
                return b;
            }, d.animate = function(a, d, e, f, g, h) {
                "function" != typeof g || g.length || (h = g, g = c.linear);
                var i = c.time(), j = c(a, d, i, i + f, c.time, e, g);
                return h && b.once("mina.finish." + j.id, h), j;
            }, a.stop = function() {
                for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
                return this;
            }, a.animate = function(a, d, e, g) {
                "function" != typeof e || e.length || (g = e, e = c.linear), a instanceof k && (g = a.callback, 
                e = a.easing, d = e.dur, a = a.attr);
                var i, j, l, m, n = [], o = [], p = {}, q = this;
                for (var r in a) if (a[J](r)) {
                    q.equal ? (m = q.equal(r, K(a[r])), i = m.from, j = m.to, l = m.f) : (i = +q.attr(r), 
                    j = +a[r]);
                    var s = f(i, "array") ? i.length : 1;
                    p[r] = h(n.length, n.length + s, l), n = n.concat(i), o = o.concat(j);
                }
                var t = c.time(), u = c(n, o, t, t + d, c.time, function(a) {
                    var b = {};
                    for (var c in p) p[J](c) && (b[c] = p[c](a));
                    q.attr(b);
                }, e);
                return q.anims[u.id] = u, u._attrs = a, u._callback = g, b.once("mina.finish." + u.id, function() {
                    delete q.anims[u.id], g && g.call(q);
                }), b.once("mina.stop." + u.id, function() {
                    delete q.anims[u.id];
                }), q;
            };
            var l = {};
            a.data = function(a, c) {
                var e = l[this.id] = l[this.id] || {};
                if (1 == arguments.length) {
                    if (d.is(a, "object")) {
                        for (var f in a) a[J](f) && this.data(f, a[f]);
                        return this;
                    }
                    return b("snap.data.get." + this.id, this, e[a], a), e[a];
                }
                return e[a] = c, b("snap.data.set." + this.id, this, c, a), this;
            }, a.removeData = function(a) {
                return null == a ? l[this.id] = {} : l[this.id] && delete l[this.id][a], this;
            }, a.toString = i(1), a.innerSVG = i();
        }(u.prototype), d.parse = function(a) {
            var c = I.doc.createDocumentFragment(), d = c;
            return b.on("elemental.tag", function(a, b) {
                var c = e(a);
                b && e(c, b), d.appendChild(c), d = c;
            }), b.on("elemental.text", function(a) {
                d.appendChild(I.doc.createTextNode(a));
            }), b.on("elemental./tag", function() {
                d = d.parentNode;
            }), b.on("elemental.eof", function() {
                b.off("elemental.*"), b("snap.parsed", c);
            }), elemental().parse(a).end(), new w(c);
        }, w.prototype.select = u.prototype.select, w.prototype.selectAll = u.prototype.selectAll, 
        d.fragment = function() {
            for (var a = Array.prototype.slice.call(arguments, 0), b = I.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
                var f = a[c];
                f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), 
                "string" == typeof f && b.appendChild(d.parse(f).node);
            }
            return new w(b);
        }, function(a) {
            a.el = function(a, b) {
                return x(a, this.node).attr(b);
            }, a.rect = function(a, b, c, d, e, g) {
                var h = x("rect", this.node);
                return null == g && (g = e), f(a, "object") && "x" in a ? h.attr(a) : null != a && (h.attr({
                    x: a,
                    y: b,
                    width: c,
                    height: d
                }), null != e && h.attr({
                    rx: e,
                    ry: g
                })), h;
            }, a.circle = function(a, b, c) {
                var d = x("circle", this.node);
                return f(a, "object") && "cx" in a ? d.attr(a) : null != a && d.attr({
                    cx: a,
                    cy: b,
                    r: c
                }), d;
            }, a.image = function(a, b, c, d, g) {
                var h = x("image", this.node);
                if (f(a, "object") && "src" in a) h.attr(a); else if (null != a) {
                    var i = {
                        "xlink:href": a,
                        preserveAspectRatio: "none"
                    };
                    null != b && null != c && (i.x = b, i.y = c), null != d && null != g ? (i.width = d, 
                    i.height = g) : ib(a, function() {
                        e(h.node, {
                            width: this.offsetWidth,
                            height: this.offsetHeight
                        });
                    }), e(h.node, i);
                }
                return h;
            }, a.ellipse = function(a, b, c, d) {
                var e = x("ellipse", this.node);
                return f(a, "object") && "cx" in a ? e.attr(a) : null != a && e.attr({
                    cx: a,
                    cy: b,
                    rx: c,
                    ry: d
                }), e;
            }, a.path = function(a) {
                var b = x("path", this.node);
                return f(a, "object") && !f(a, "array") ? b.attr(a) : a && b.attr({
                    d: a
                }), b;
            }, a.group = a.g = function(b) {
                var c = x("g", this.node);
                c.add = t;
                for (var d in a) a[J](d) && (c[d] = a[d]);
                return 1 == arguments.length && b && !b.type ? c.attr(b) : arguments.length && c.add(Array.prototype.slice.call(arguments, 0)), 
                c;
            }, a.text = function(a, b, c) {
                var d = x("text", this.node);
                return f(a, "object") ? d.attr(a) : null != a && d.attr({
                    x: a,
                    y: b,
                    text: c || ""
                }), d;
            }, a.line = function(a, b, c, d) {
                var e = x("line", this.node);
                return f(a, "object") ? e.attr(a) : null != a && e.attr({
                    x1: a,
                    x2: c,
                    y1: b,
                    y2: d
                }), e;
            }, a.polyline = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = x("polyline", this.node);
                return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({
                    points: a
                }), b;
            }, a.polygon = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = x("polygon", this.node);
                return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({
                    points: a
                }), b;
            }, function() {
                a.gradient = function(a) {
                    return D(this.defs, a);
                }, a.gradientLinear = function(a, b, c, d) {
                    return E(this.defs, a, b, c, d);
                }, a.gradientRadial = function(a, b, c, d, e) {
                    return F(this.defs, a, b, c, d, e);
                }, a.toString = function() {
                    var a, b = I.doc.createDocumentFragment(), c = I.doc.createElement("div"), d = this.node.cloneNode(!0);
                    return b.appendChild(c), c.appendChild(d), e(d, {
                        xmlns: "http://www.w3.org/2000/svg"
                    }), a = c.innerHTML, b.removeChild(b.firstChild), a;
                }, a.clear = function() {
                    for (var a, b = this.node.firstChild; b; ) a = b.nextSibling, "defs" != b.tagName && b.parentNode.removeChild(b), 
                    b = a;
                };
            }();
        }(y.prototype), d.ajax = function(a, c, d, e) {
            var g = new XMLHttpRequest(), h = fb();
            if (g) {
                if (f(c, "function")) e = d, d = c, c = null; else if (f(c, "object")) {
                    var i = [];
                    for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                    c = i.join("&");
                }
                return g.open(c ? "POST" : "GET", a, !0), g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), 
                c && g.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d && (b.once("snap.ajax." + h + ".0", d), 
                b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
                    4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g);
                }, 4 == g.readyState ? g : (g.send(c), g);
            }
        }, d.load = function(a, b, c) {
            d.ajax(a, function(a) {
                var e = d.parse(a.responseText);
                c ? b.call(c, e) : b(e);
            });
        }, b.on("snap.util.attr.mask", function(a) {
            if (a instanceof u || a instanceof w) {
                if (b.stop(), a instanceof w && 1 == a.node.childNodes.length && (a = a.node.firstChild, 
                r(this).appendChild(a), a = z(a)), "mask" == a.type) var c = a; else c = x("mask", r(this)), 
                c.node.appendChild(a.node), !c.node.id && e(c.node, {
                    id: c.id
                });
                e(this.node, {
                    mask: "url(#" + c.id + ")"
                });
            }
        }), function(a) {
            b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a);
        }(function(a) {
            if (a instanceof u || a instanceof w) {
                if (b.stop(), "clipPath" == a.type) var c = a; else c = x("clipPath", r(this)), 
                c.node.appendChild(a.node), !c.node.id && e(c.node, {
                    id: c.id
                });
                e(this.node, {
                    "clip-path": "url(#" + c.id + ")"
                });
            }
        }), b.on("snap.util.attr.fill", G("fill")), b.on("snap.util.attr.stroke", G("stroke"));
        var rb = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        b.on("snap.util.grad.parse", function(a) {
            a = K(a);
            var b = a.match(rb);
            if (!b) return null;
            var c = b[1], d = b[2], e = b[3];
            return d = d.split(/\s*,\s*/).map(function(a) {
                return +a == a ? +a : a;
            }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function(a) {
                a = a.split(":");
                var b = {
                    color: a[0]
                };
                return a[1] && (b.offset = a[1]), b;
            }), {
                type: c,
                params: d,
                stops: e
            };
        }), b.on("snap.util.attr.d", function(a) {
            b.stop(), f(a, "array") && f(a[0], "array") && (a = d.path.toString.call(a)), a = K(a), 
            a.match(/[ruo]/i) && (a = d.path.toAbsolute(a)), e(this.node, {
                d: a
            });
        })(-1), b.on("snap.util.attr.#text", function(a) {
            b.stop(), a = K(a);
            for (var c = I.doc.createTextNode(a); this.node.firstChild; ) this.node.removeChild(this.node.firstChild);
            this.node.appendChild(c);
        })(-1), b.on("snap.util.attr.path", function(a) {
            b.stop(), this.attr({
                d: a
            });
        })(-1), b.on("snap.util.attr.viewBox", function(a) {
            var c;
            c = f(a, "object") && "x" in a ? [ a.x, a.y, a.width, a.height ].join(" ") : f(a, "array") ? a.join(" ") : a, 
            e(this.node, {
                viewBox: c
            }), b.stop();
        })(-1), b.on("snap.util.attr.transform", function(a) {
            this.transform(a), b.stop();
        })(-1), b.on("snap.util.attr.r", function(a) {
            "rect" == this.type && (b.stop(), e(this.node, {
                rx: a,
                ry: a
            }));
        })(-1), b.on("snap.util.attr.text", function(a) {
            if ("text" == this.type) {
                for (var c = this.node, d = function(a) {
                    var b = e("tspan");
                    if (f(a, "array")) for (var c = 0; c < a.length; c++) b.appendChild(d(a[c])); else b.appendChild(I.doc.createTextNode(a));
                    return b.normalize && b.normalize(), b;
                }; c.firstChild; ) c.removeChild(c.firstChild);
                for (var g = d(a); g.firstChild; ) c.appendChild(g.firstChild);
            }
            b.stop();
        })(-1);
        var sb = {
            rect: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                rx: 0,
                ry: 0,
                "class": 0
            },
            circle: {
                cx: 0,
                cy: 0,
                r: 0,
                "class": 0
            },
            ellipse: {
                cx: 0,
                cy: 0,
                rx: 0,
                ry: 0,
                "class": 0
            },
            line: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                "class": 0
            },
            polyline: {
                points: "",
                "class": 0
            },
            polygon: {
                points: "",
                "class": 0
            },
            text: {
                x: 0,
                y: 0,
                dx: 0,
                dy: 0,
                rotate: 0,
                textLength: 0,
                lengthAdjust: 0,
                "class": 0
            },
            tspan: {
                x: 0,
                y: 0,
                dx: 0,
                dy: 0,
                rotate: 0,
                textLength: 0,
                lengthAdjust: 0,
                "class": 0
            },
            textPath: {
                "xlink:href": 0,
                startOffset: 0,
                method: 0,
                spacing: 0,
                "class": 0
            },
            marker: {
                viewBox: 0,
                preserveAspectRatio: 0,
                refX: 0,
                refY: 0,
                markerUnits: 0,
                markerWidth: 0,
                markerHeight: 0,
                orient: 0,
                "class": 0
            },
            use: {
                "class": 0,
                externalResourcesRequired: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                "xlink:href": 0
            },
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                gradientUnits: 0,
                gradientTransform: 0,
                spreadMethod: 0,
                "xlink:href": 0,
                "class": 0
            },
            radialGradient: {
                cx: 0,
                cy: 0,
                r: 0,
                fx: 0,
                fy: 0,
                gradientUnits: 0,
                gradientTransform: 0,
                spreadMethod: 0,
                "xlink:href": 0,
                "class": 0
            },
            stop: {
                offset: 0,
                "class": 0
            },
            pattern: {
                viewBox: 0,
                preserveAspectRatio: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                patternUnits: 0,
                patternContentUnits: 0,
                patternTransform: 0,
                "xlink:href": 0,
                "class": 0
            },
            clipPath: {
                transform: 0,
                clipPathUnits: 0,
                "class": 0
            },
            mask: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                maskUnits: 0,
                maskContentUnits: 0,
                "class": 0
            },
            image: {
                preserveAspectRatio: 0,
                transform: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                "xlink:href": 0,
                "class": 0
            },
            path: {
                d: "",
                "class": 0
            },
            g: {
                "class": 0
            },
            feDistantLight: {
                azimuth: 0,
                elevation: 0
            },
            fePointLight: {
                x: 0,
                y: 0,
                z: 0
            },
            feSpotLight: {
                x: 0,
                y: 0,
                z: 0,
                pointsAtX: 0,
                pointsAtY: 0,
                pointsAtZ: 0,
                specularExponent: 0,
                limitingConeAngle: 0
            },
            feBlend: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                in2: 0,
                mode: 0
            },
            feColorMatrix: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                type: 0,
                values: 0
            },
            feComponentTransfer: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0
            },
            feComposite: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                in2: 0,
                operator: 0,
                k1: 0,
                k2: 0,
                k3: 0,
                k4: 0
            },
            feConvolveMatrix: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                order: 0,
                kernelMatrix: 0,
                divisor: 0,
                bias: 0,
                targetX: 0,
                targetY: 0,
                edgeMode: 0,
                kernelUnitLength: 0,
                preserveAlpha: 0
            },
            feDiffuseLighting: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                surfaceScale: 0,
                diffuseConstant: 0,
                kernelUnitLength: 0
            },
            feDisplacementMap: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                in2: 0,
                scale: 0,
                xChannelSelector: 0,
                yChannelSelector: 0
            },
            feFlood: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "flood-color": 0,
                "flood-opacity": 0
            },
            feGaussianBlur: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                stdDeviation: 0
            },
            feImage: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                externalResourcesRequired: 0,
                preserveAspectRatio: 0,
                "xlink:href": 0
            },
            feMerge: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0
            },
            feMergeNode: {
                "in": 0
            },
            feMorphology: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                operator: 0,
                radius: 0
            },
            feOffset: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                dx: 0,
                dy: 0
            },
            feSpecularLighting: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0,
                surfaceScale: 0,
                specularConstant: 0,
                specularExponent: 0,
                kernelUnitLength: 0
            },
            feTile: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                "in": 0
            },
            feTurbulence: {
                height: 0,
                result: 0,
                width: 0,
                x: 0,
                y: 0,
                "class": 0,
                style: 0,
                baseFrequency: 0,
                numOctaves: 0,
                seed: 0,
                stitchTiles: 0,
                type: 0
            }
        };
        return sb.feFuncR = sb.feFuncG = sb.feFuncB = sb.feFuncA = {
            type: 0,
            tableValues: 0,
            slope: 0,
            intercept: 0,
            amplitude: 0,
            exponent: 0,
            offset: 0
        }, b.on("snap.util.attr", function(a) {
            var c = b.nt();
            c = c.substring(c.lastIndexOf(".") + 1);
            var d = c.replace(/-(\w)/gi, function(a, b) {
                return b.toUpperCase();
            });
            sb[J](this.type) && sb[this.type][J](c) ? null == a ? this.node.removeAttribute(c) : this.node.setAttribute(c, a) : this.node.style[d] = null == a ? S : a;
        }), b.on("snap.util.getattr.transform", function() {
            return b.stop(), this.transform();
        })(-1), function() {
            function a(a) {
                return function() {
                    b.stop();
                    var c = I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + a);
                    return "none" == c ? c : d(I.doc.getElementById(c.match(X)[1]));
                };
            }
            function c(a) {
                return function(c) {
                    b.stop();
                    var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                    if ("" == c || !c) return this.node.style[d] = "none", void 0;
                    if ("marker" == c.type) {
                        var f = c.node.id;
                        return f || e(c.node, {
                            id: c.id
                        }), this.node.style[d] = "url(#" + f + ")", void 0;
                    }
                };
            }
            b.on("snap.util.getattr.marker-end", a("end"))(-1), b.on("snap.util.getattr.markerEnd", a("end"))(-1), 
            b.on("snap.util.getattr.marker-start", a("start"))(-1), b.on("snap.util.getattr.markerStart", a("start"))(-1), 
            b.on("snap.util.getattr.marker-mid", a("mid"))(-1), b.on("snap.util.getattr.markerMid", a("mid"))(-1), 
            b.on("snap.util.attr.marker-end", c("end"))(-1), b.on("snap.util.attr.markerEnd", c("end"))(-1), 
            b.on("snap.util.attr.marker-start", c("start"))(-1), b.on("snap.util.attr.markerStart", c("start"))(-1), 
            b.on("snap.util.attr.marker-mid", c("mid"))(-1), b.on("snap.util.attr.markerMid", c("mid"))(-1);
        }(), b.on("snap.util.getattr.r", function() {
            return "rect" == this.type && e(this.node, "rx") == e(this.node, "ry") ? (b.stop(), 
            e(this.node, "rx")) : void 0;
        })(-1), b.on("snap.util.getattr.text", function() {
            if ("text" == this.type || "tspan" == this.type) {
                b.stop();
                var a = H(this.node);
                return 1 == a.length ? a[0] : a;
            }
        })(-1), b.on("snap.util.getattr.#text", function() {
            return this.node.textContent;
        })(-1), b.on("snap.util.getattr.viewBox", function() {
            b.stop();
            var a = e(this.node, "viewBox").split(Z);
            return d._.box(+a[0], +a[1], +a[2], +a[3]);
        })(-1), b.on("snap.util.getattr.points", function() {
            var a = e(this.node, "points");
            return b.stop(), a.split(Z);
        }), b.on("snap.util.getattr.path", function() {
            var a = e(this.node, "d");
            return b.stop(), a;
        }), b.on("snap.util.getattr", function() {
            var a = b.nt();
            return a = a.substring(a.lastIndexOf(".") + 1), sb[J](this.type) && sb[this.type][J](a) ? this.node.getAttribute(a) : I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(a);
        }), d.plugin = function(a) {
            a(d, u, y, I);
        }, I.win.Snap = d, d;
    }();
    return d.plugin(function(a, b) {
        function c(a) {
            var b = c.ps = c.ps || {};
            return b[a] ? b[a].sleep = 100 : b[a] = {
                sleep: 100
            }, setTimeout(function() {
                for (var c in b) b[L](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c]);
            }), b[a];
        }
        function d(a, b, c, d) {
            return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, 
            a = a.x), {
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
                r1: O.min(c, d) / 2,
                r2: O.max(c, d) / 2,
                r0: O.sqrt(c * c + d * d) / 2,
                path: w(a, b, c, d),
                vb: [ a, b, c, d ].join(" ")
            };
        }
        function e() {
            return this.join(",").replace(M, "$1");
        }
        function f(a) {
            var b = K(a);
            return b.toString = e, b;
        }
        function g(a, b, c, d, e, f, g, h, j) {
            return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j));
        }
        function h(c, d) {
            function e(a) {
                return +(+a).toFixed(3);
            }
            return a._.cacher(function(a, f, h) {
                a instanceof b && (a = a.attr("d")), a = F(a);
                for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                    if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2]; else {
                        if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                            if (d && !p.start) {
                                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += [ "C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y) ], 
                                h) return o;
                                p.start = o, o = [ "M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6]) ].join(), 
                                q += m, j = +l[5], k = +l[6];
                                continue;
                            }
                            if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q);
                        }
                        q += m, j = +l[5], k = +l[6];
                    }
                    o += l.shift() + l;
                }
                return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1);
            }, null, a._.clone);
        }
        function i(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i, k = S(j, 3), l = S(j, 2), m = i * i, n = m * i, o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g, p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h, q = a + 2 * i * (c - a) + m * (e - 2 * c + a), r = b + 2 * i * (d - b) + m * (f - 2 * d + b), s = c + 2 * i * (e - c) + m * (g - 2 * e + c), t = d + 2 * i * (f - d) + m * (h - 2 * f + d), u = j * a + i * c, v = j * b + i * d, w = j * e + i * g, x = j * f + i * h, y = 90 - 180 * O.atan2(q - s, r - t) / P;
            return {
                x: o,
                y: p,
                m: {
                    x: q,
                    y: r
                },
                n: {
                    x: s,
                    y: t
                },
                start: {
                    x: u,
                    y: v
                },
                end: {
                    x: w,
                    y: x
                },
                alpha: y
            };
        }
        function j(b, c, e, f, g, h, i, j) {
            a.is(b, "array") || (b = [ b, c, e, f, g, h, i, j ]);
            var k = E.apply(null, b);
            return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y);
        }
        function k(a, b, c) {
            return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height;
        }
        function l(a, b) {
            return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y);
        }
        function m(a, b, c, d, e) {
            var f = -3 * b + 9 * c - 9 * d + 3 * e, g = a * f + 6 * b - 12 * c + 6 * d;
            return a * g - 3 * b + 3 * c;
        }
        function n(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
            for (var j = i / 2, k = 12, l = [ -.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816 ], n = [ .2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472 ], o = 0, p = 0; k > p; p++) {
                var q = j * l[p] + j, r = m(q, a, c, e, g), s = m(q, b, d, f, h), t = r * r + s * s;
                o += n[p] * O.sqrt(t);
            }
            return j * o;
        }
        function o(a, b, c, d, e, f, g, h, i) {
            if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                var j, k = 1, l = k / 2, m = k - l, o = .01;
                for (j = n(a, b, c, d, e, f, g, h, m); T(j - i) > o; ) l /= 2, m += (i > j ? 1 : -1) * l, 
                j = n(a, b, c, d, e, f, g, h, m);
                return m;
            }
        }
        function p(a, b, c, d, e, f, g, h) {
            if (!(R(a, c) < Q(e, g) || Q(a, c) > R(e, g) || R(b, d) < Q(f, h) || Q(b, d) > R(f, h))) {
                var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g), j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g), k = (a - c) * (f - h) - (b - d) * (e - g);
                if (k) {
                    var l = i / k, m = j / k, n = +l.toFixed(2), o = +m.toFixed(2);
                    if (!(n < +Q(a, c).toFixed(2) || n > +R(a, c).toFixed(2) || n < +Q(e, g).toFixed(2) || n > +R(e, g).toFixed(2) || o < +Q(b, d).toFixed(2) || o > +R(b, d).toFixed(2) || o < +Q(f, h).toFixed(2) || o > +R(f, h).toFixed(2))) return {
                        x: l,
                        y: m
                    };
                }
            }
        }
        function q(a, b, c) {
            var d = j(a), e = j(b);
            if (!l(d, e)) return c ? 0 : [];
            for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 5), k = ~~(g / 5), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                var t = i.apply(0, a.concat(s / h));
                m.push({
                    x: t.x,
                    y: t.y,
                    t: s / h
                });
            }
            for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
                x: t.x,
                y: t.y,
                t: s / k
            });
            for (s = 0; h > s; s++) for (var u = 0; k > u; u++) {
                var v = m[s], w = m[s + 1], x = o[u], y = o[u + 1], z = T(w.x - v.x) < .001 ? "y" : "x", A = T(y.x - x.x) < .001 ? "y" : "x", B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                if (B) {
                    if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                    q[B.x.toFixed(4)] = B.y.toFixed(4);
                    var C = v.t + T((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t), D = x.t + T((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                    C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
                        x: B.x,
                        y: B.y,
                        t1: C,
                        t2: D
                    }));
                }
            }
            return r;
        }
        function r(a, b) {
            return t(a, b);
        }
        function s(a, b) {
            return t(a, b, 1);
        }
        function t(a, b, c) {
            a = F(a), b = F(b);
            for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                var r = a[o];
                if ("M" == r[0]) d = h = r[1], e = i = r[2]; else {
                    "C" == r[0] ? (l = [ d, e ].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [ d, e, d, e, h, i, h, i ], 
                    d = h, e = i);
                    for (var s = 0, t = b.length; t > s; s++) {
                        var u = b[s];
                        if ("M" == u[0]) f = j = u[1], g = k = u[2]; else {
                            "C" == u[0] ? (m = [ f, g ].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [ f, g, f, g, j, k, j, k ], 
                            f = j, g = k);
                            var v = q(l, m, c);
                            if (c) n += v; else {
                                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, 
                                v[w].bez1 = l, v[w].bez2 = m;
                                n = n.concat(v);
                            }
                        }
                    }
                }
            }
            return n;
        }
        function u(a, b, c) {
            var d = v(a);
            return k(d, b, c) && 1 == t(a, [ [ "M", b, c ], [ "H", d.x2 + 10 ] ], 1) % 2;
        }
        function v(a) {
            var b = c(a);
            if (b.bbox) return K(b.bbox);
            if (!a) return d();
            a = F(a);
            for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++) if (e = a[j], 
            "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g); else {
                var l = E(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6];
            }
            var m = Q.apply(0, h), n = Q.apply(0, i), o = R.apply(0, h), p = R.apply(0, i), q = d(m, n, o - m, p - n);
            return b.bbox = K(q), q;
        }
        function w(a, b, c, d, f) {
            if (f) return [ [ "M", a + f, b ], [ "l", c - 2 * f, 0 ], [ "a", f, f, 0, 0, 1, f, f ], [ "l", 0, d - 2 * f ], [ "a", f, f, 0, 0, 1, -f, f ], [ "l", 2 * f - c, 0 ], [ "a", f, f, 0, 0, 1, -f, -f ], [ "l", 0, 2 * f - d ], [ "a", f, f, 0, 0, 1, f, -f ], [ "z" ] ];
            var g = [ [ "M", a, b ], [ "l", c, 0 ], [ "l", 0, d ], [ "l", -c, 0 ], [ "z" ] ];
            return g.toString = e, g;
        }
        function x(a, b, c, d, f) {
            if (null == f && null == d && (d = c), null != f) var g = Math.PI / 180, h = a + c * Math.cos(-d * g), i = a + c * Math.cos(-f * g), j = b + c * Math.sin(-d * g), k = b + c * Math.sin(-f * g), l = [ [ "M", h, j ], [ "A", c, c, 0, +(f - d > 180), 0, i, k ] ]; else l = [ [ "M", a, b ], [ "m", 0, -d ], [ "a", c, d, 0, 1, 1, 0, 2 * d ], [ "a", c, d, 0, 1, 1, 0, -2 * d ], [ "z" ] ];
            return l.toString = e, l;
        }
        function y(b) {
            var d = c(b), g = String.prototype.toLowerCase;
            if (d.rel) return f(d.rel);
            a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
            var h = [], i = 0, j = 0, k = 0, l = 0, m = 0;
            "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push([ "M", i, j ]));
            for (var n = m, o = b.length; o > n; n++) {
                var p = h[n] = [], q = b[n];
                if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
                  case "a":
                    p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), 
                    p[7] = +(q[7] - j).toFixed(3);
                    break;

                  case "v":
                    p[1] = +(q[1] - j).toFixed(3);
                    break;

                  case "m":
                    k = q[1], l = q[2];

                  default:
                    for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3);
                } else {
                    p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                    for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t];
                }
                var v = h[n].length;
                switch (h[n][0]) {
                  case "z":
                    i = k, j = l;
                    break;

                  case "h":
                    i += +h[n][v - 1];
                    break;

                  case "v":
                    j += +h[n][v - 1];
                    break;

                  default:
                    i += +h[n][v - 2], j += +h[n][v - 1];
                }
            }
            return h.toString = e, d.rel = f(h), h;
        }
        function z(b) {
            var d = c(b);
            if (d.abs) return f(d.abs);
            if (J(b, "array") && J(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [ [ "M", 0, 0 ] ];
            var g, h = [], i = 0, j = 0, k = 0, l = 0, m = 0;
            "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = [ "M", i, j ]);
            for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), 
                n[0]) {
                  case "A":
                    n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +(o[6] + i), 
                    n[7] = +(o[7] + j);
                    break;

                  case "V":
                    n[1] = +o[1] + j;
                    break;

                  case "H":
                    n[1] = +o[1] + i;
                    break;

                  case "R":
                    for (var s = [ i, j ].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, 
                    s[++t] = +s[t] + j;
                    h.pop(), h = h.concat(H(s, p));
                    break;

                  case "O":
                    h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                    break;

                  case "U":
                    h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = [ "U" ].concat(h[h.length - 1].slice(-2));
                    break;

                  case "M":
                    k = +o[1] + i, l = +o[2] + j;

                  default:
                    for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j);
                } else if ("R" == g) s = [ i, j ].concat(o.slice(1)), h.pop(), h = h.concat(H(s, p)), 
                n = [ "R" ].concat(o.slice(-2)); else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), 
                s.push(s[0]), h = h.concat(s); else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), 
                n = [ "U" ].concat(h[h.length - 1].slice(-2)); else for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
                  case "Z":
                    i = k, j = l;
                    break;

                  case "H":
                    i = n[1];
                    break;

                  case "V":
                    j = n[1];
                    break;

                  case "M":
                    k = n[n.length - 2], l = n[n.length - 1];

                  default:
                    i = n[n.length - 2], j = n[n.length - 1];
                }
            }
            return h.toString = e, d.abs = f(h), h;
        }
        function A(a, b, c, d) {
            return [ a, b, c, d, c, d ];
        }
        function B(a, b, c, d, e, f) {
            var g = 1 / 3, h = 2 / 3;
            return [ g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f ];
        }
        function C(b, c, d, e, f, g, h, i, j, k) {
            var l, m = 120 * P / 180, n = P / 180 * (+f || 0), o = [], p = a._.cacher(function(a, b, c) {
                var d = a * O.cos(c) - b * O.sin(c), e = a * O.sin(c) + b * O.cos(c);
                return {
                    x: d,
                    y: e
                };
            });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3]; else {
                l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (O.cos(P / 180 * f), O.sin(P / 180 * f), (b - i) / 2), r = (c - j) / 2, s = q * q / (d * d) + r * r / (e * e);
                s > 1 && (s = O.sqrt(s), d = s * d, e = s * e);
                var t = d * d, u = e * e, v = (g == h ? -1 : 1) * O.sqrt(T((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))), w = v * d * r / e + (b + i) / 2, x = v * -e * q / d + (c + j) / 2, y = O.asin(((c - x) / e).toFixed(9)), z = O.asin(((j - x) / e).toFixed(9));
                y = w > b ? P - y : y, z = w > i ? P - z : z, 0 > y && (y = 2 * P + y), 0 > z && (z = 2 * P + z), 
                h && y > z && (y -= 2 * P), !h && z > y && (z -= 2 * P);
            }
            var A = z - y;
            if (T(A) > m) {
                var B = z, D = i, E = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + d * O.cos(z), j = x + e * O.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [ z, B, w, x ]);
            }
            A = z - y;
            var F = O.cos(y), G = O.sin(y), H = O.cos(z), I = O.sin(z), J = O.tan(A / 4), K = 4 / 3 * d * J, L = 4 / 3 * e * J, M = [ b, c ], N = [ b + K * G, c - L * F ], Q = [ i + K * I, j - L * H ], R = [ i, j ];
            if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], k) return [ N, Q, R ].concat(o);
            o = [ N, Q, R ].concat(o).join().split(",");
            for (var S = [], U = 0, V = o.length; V > U; U++) S[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
            return S;
        }
        function D(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i;
            return {
                x: S(j, 3) * a + 3 * S(j, 2) * i * c + 3 * j * i * i * e + S(i, 3) * g,
                y: S(j, 3) * b + 3 * S(j, 2) * i * d + 3 * j * i * i * f + S(i, 3) * h
            };
        }
        function E(a, b, c, d, e, f, g, h) {
            var i, j = e - 2 * c + a - (g - 2 * e + c), k = 2 * (c - a) - 2 * (e - c), l = a - c, m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j, o = [ b, h ], p = [ a, g ];
            return T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), 
            p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), 
            p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), 
            l = b - d, m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j, 
            T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), 
            p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), 
            p.push(i.x), o.push(i.y)), {
                min: {
                    x: Q.apply(0, p),
                    y: Q.apply(0, o)
                },
                max: {
                    x: R.apply(0, p),
                    y: R.apply(0, o)
                }
            };
        }
        function F(a, b) {
            var d = !b && c(a);
            if (!b && d.curve) return f(d.curve);
            for (var e = z(a), g = b && z(b), h = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, i = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, j = (function(a, b) {
                var c, d;
                if (!a) return [ "C", b.x, b.y, b.x, b.y, b.x, b.y ];
                switch (!(a[0] in {
                    T: 1,
                    Q: 1
                }) && (b.qx = b.qy = null), a[0]) {
                  case "M":
                    b.X = a[1], b.Y = a[2];
                    break;

                  case "A":
                    a = [ "C" ].concat(C.apply(0, [ b.x, b.y ].concat(a.slice(1))));
                    break;

                  case "S":
                    c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = [ "C", c, d ].concat(a.slice(1));
                    break;

                  case "T":
                    b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = [ "C" ].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                    break;

                  case "Q":
                    b.qx = a[1], b.qy = a[2], a = [ "C" ].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                    break;

                  case "L":
                    a = [ "C" ].concat(A(b.x, b.y, a[1], a[2]));
                    break;

                  case "H":
                    a = [ "C" ].concat(A(b.x, b.y, a[1], b.y));
                    break;

                  case "V":
                    a = [ "C" ].concat(A(b.x, b.y, b.x, a[1]));
                    break;

                  case "Z":
                    a = [ "C" ].concat(A(b.x, b.y, b.X, b.Y));
                }
                return a;
            }), k = function(a, b) {
                if (a[b].length > 7) {
                    a[b].shift();
                    for (var c = a[b]; c.length; ) a.splice(b++, 0, [ "C" ].concat(c.splice(0, 6)));
                    a.splice(b, 1), n = R(e.length, g && g.length || 0);
                }
            }, l = function(a, b, c, d, f) {
                a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, [ "M", d.x, d.y ]), 
                c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], n = R(e.length, g && g.length || 0));
            }, m = 0, n = R(e.length, g && g.length || 0); n > m; m++) {
                e[m] = j(e[m], h), k(e, m), g && (g[m] = j(g[m], i)), g && k(g, m), l(e, g, h, i, m), 
                l(g, e, i, h, m);
                var o = e[m], p = g && g[m], q = o.length, r = g && p.length;
                h.x = o[q - 2], h.y = o[q - 1], h.bx = N(o[q - 4]) || h.x, h.by = N(o[q - 3]) || h.y, 
                i.bx = g && (N(p[r - 4]) || i.x), i.by = g && (N(p[r - 3]) || i.y), i.x = g && p[r - 2], 
                i.y = g && p[r - 1];
            }
            return g || (d.curve = f(e)), g ? [ e, g ] : e;
        }
        function G(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = F(a), e = 0, g = a.length; g > e; e++) for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), 
            d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a;
        }
        function H(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                var f = [ {
                    x: +a[d - 2],
                    y: +a[d - 1]
                }, {
                    x: +a[d],
                    y: +a[d + 1]
                }, {
                    x: +a[d + 2],
                    y: +a[d + 3]
                }, {
                    x: +a[d + 4],
                    y: +a[d + 5]
                } ];
                b ? d ? e - 4 == d ? f[3] = {
                    x: +a[0],
                    y: +a[1]
                } : e - 2 == d && (f[2] = {
                    x: +a[0],
                    y: +a[1]
                }, f[3] = {
                    x: +a[2],
                    y: +a[3]
                }) : f[0] = {
                    x: +a[e - 2],
                    y: +a[e - 1]
                } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                    x: +a[d],
                    y: +a[d + 1]
                }), c.push([ "C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y ]);
            }
            return c;
        }
        var I = b.prototype, J = a.is, K = a._.clone, L = "hasOwnProperty", M = /,?([a-z]),?/gi, N = parseFloat, O = Math, P = O.PI, Q = O.min, R = O.max, S = O.pow, T = O.abs, U = h(1), V = h(), W = h(0, 1), X = a._unit2px, Y = {
            path: function(a) {
                return a.attr("path");
            },
            circle: function(a) {
                var b = X(a);
                return x(b.cx, b.cy, b.r);
            },
            ellipse: function(a) {
                var b = X(a);
                return x(b.cx, b.cy, b.rx, b.ry);
            },
            rect: function(a) {
                var b = X(a);
                return w(b.x, b.y, b.width, b.height, b.rx, b.ry);
            },
            image: function(a) {
                var b = X(a);
                return w(b.x, b.y, b.width, b.height);
            },
            text: function(a) {
                var b = a.node.getBBox();
                return w(b.x, b.y, b.width, b.height);
            },
            g: function(a) {
                var b = a.node.getBBox();
                return w(b.x, b.y, b.width, b.height);
            },
            symbol: function(a) {
                var b = a.getBBox();
                return w(b.x, b.y, b.width, b.height);
            },
            polyline: function(a) {
                return "M" + a.attr("points");
            },
            polygon: function(a) {
                return "M" + a.attr("points") + "z";
            }
        };
        a.path = c, a.path.getTotalLength = U, a.path.getPointAtLength = V, a.path.getSubpath = function(a, b, c) {
            if (this.getTotalLength(a) - c < 1e-6) return W(a, b).end;
            var d = W(a, c, 1);
            return b ? W(d, b).end : d;
        }, I.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0;
        }, I.getPointAtLength = function(a) {
            return V(this.attr("d"), a);
        }, I.getSubpath = function(b, c) {
            return a.path.getSubpath(this.attr("d"), b, c);
        }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, 
        a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, 
        a.path.isPointInside = u, a.path.getBBox = v, a.path.get = Y, a.path.toRelative = y, 
        a.path.toAbsolute = z, a.path.toCubic = F, a.path.map = G, a.path.toString = e, 
        a.path.clone = f;
    }), d.plugin(function(a) {
        var b = Math.max, c = Math.min, d = function(a) {
            if (this.items = [], this.length = 0, this.type = "set", a) for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], 
            this.length++);
        }, e = d.prototype;
        e.push = function() {
            for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, 
            this[b] = this.items[b] = a, this.length++);
            return this;
        }, e.pop = function() {
            return this.length && delete this[this.length--], this.items.pop();
        }, e.forEach = function(a, b) {
            for (var c = 0, d = this.items.length; d > c; c++) if (a.call(b, this.items[c], c) === !1) return this;
            return this;
        }, e.attr = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) this.items[b].attr(a);
            return this;
        }, e.clear = function() {
            for (;this.length; ) this.pop();
        }, e.splice = function(a, e) {
            a = 0 > a ? b(this.length + a, 0) : a, e = b(0, c(this.length - a, e));
            var f, g = [], h = [], i = [];
            for (f = 2; f < arguments.length; f++) i.push(arguments[f]);
            for (f = 0; e > f; f++) h.push(this[a + f]);
            for (;f < this.length - a; f++) g.push(this[a + f]);
            var j = i.length;
            for (f = 0; f < j + g.length; f++) this.items[a + f] = this[a + f] = j > f ? i[f] : g[f - j];
            for (f = this.items.length = this.length -= e - j; this[f]; ) delete this[f++];
            return new d(h);
        }, e.exclude = function(a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] == a) return this.splice(b, 1), 
            !0;
            return !1;
        }, e.insertAfter = function(a) {
            for (var b = this.items.length; b--; ) this.items[b].insertAfter(a);
            return this;
        }, e.getBBox = function() {
            for (var a = [], d = [], e = [], f = [], g = this.items.length; g--; ) if (!this.items[g].removed) {
                var h = this.items[g].getBBox();
                a.push(h.x), d.push(h.y), e.push(h.x + h.width), f.push(h.y + h.height);
            }
            return a = c.apply(0, a), d = c.apply(0, d), e = b.apply(0, e), f = b.apply(0, f), 
            {
                x: a,
                y: d,
                x2: e,
                y2: f,
                width: e - a,
                height: f - d,
                cx: a + (e - a) / 2,
                cy: d + (f - d) / 2
            };
        }, e.clone = function(a) {
            a = new d();
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a;
        }, e.toString = function() {
            return "Snap‘s set";
        }, e.type = "set", a.set = function() {
            var a = new d();
            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), 
            a;
        };
    }), d.plugin(function(a, b) {
        function c(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
              case "t":
                return [ b, 0, 0 ];

              case "m":
                return [ b, 1, 0, 0, 1, 0, 0 ];

              case "r":
                return 4 == a.length ? [ b, 0, a[2], a[3] ] : [ b, 0 ];

              case "s":
                return 5 == a.length ? [ b, 1, 1, a[3], a[4] ] : 3 == a.length ? [ b, 1, 1 ] : [ b, 1 ];
            }
        }
        function d(b, d, e) {
            d = l(d).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], d = a.parseTransformString(d) || [];
            for (var f, g, j, k, m = Math.max(b.length, d.length), n = [], o = [], p = 0; m > p; p++) {
                if (j = b[p] || c(d[p]), k = d[p] || c(j), j[0] != k[0] || "r" == j[0].toLowerCase() && (j[2] != k[2] || j[3] != k[3]) || "s" == j[0].toLowerCase() && (j[3] != k[3] || j[4] != k[4])) {
                    b = a._.transform2matrix(b, e()), d = a._.transform2matrix(d, e()), n = [ [ "m", b.a, b.b, b.c, b.d, b.e, b.f ] ], 
                    o = [ [ "m", d.a, d.b, d.c, d.d, d.e, d.f ] ];
                    break;
                }
                for (n[p] = [], o[p] = [], f = 0, g = Math.max(j.length, k.length); g > f; f++) f in j && (n[p][f] = j[f]), 
                f in k && (o[p][f] = k[f]);
            }
            return {
                from: i(n),
                to: i(o),
                f: h(n)
            };
        }
        function e(a) {
            return a;
        }
        function f(a) {
            return function(b) {
                return +b.toFixed(3) + a;
            };
        }
        function g(b) {
            return a.rgb(b[0], b[1], b[2]);
        }
        function h(a) {
            var b, c, d, e, f, g, h = 0, i = [];
            for (b = 0, c = a.length; c > b; b++) {
                for (f = "[", g = [ '"' + a[b][0] + '"' ], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                f += g + "]", i[b] = f;
            }
            return Function("val", "return Snap.path.toString.call([" + i + "])");
        }
        function i(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
            return b;
        }
        var j = {}, k = /[a-z]+$/i, l = String;
        j.stroke = j.fill = "colour", b.prototype.equal = function(b, c) {
            var m, n, o = l(this.attr(b) || ""), p = this;
            if (o == +o && c == +c) return {
                from: +o,
                to: +c,
                f: e
            };
            if ("colour" == j[b]) return m = a.color(o), n = a.color(c), {
                from: [ m.r, m.g, m.b, m.opacity ],
                to: [ n.r, n.g, n.b, n.opacity ],
                f: g
            };
            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return d(o, c, function() {
                return p.getBBox(1);
            });
            if ("d" == b || "path" == b) return m = a.path.toCubic(o, c), {
                from: i(m[0]),
                to: i(m[1]),
                f: h(m[0])
            };
            var q = o.match(k), r = c.match(k);
            return q && q == r ? {
                from: parseFloat(o),
                to: parseFloat(c),
                f: f(q)
            } : {
                from: this.asPX(b),
                to: this.asPX(b, c),
                f: e
            };
        };
    }), d.plugin(function(a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = [ "click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel" ], j = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, k = function(a) {
            var b = "y" == a ? "scrollTop" : "scrollLeft";
            return e.doc.documentElement[b] || e.doc.body[b];
        }, l = function() {
            this.returnValue = !1;
        }, m = function() {
            return this.originalEvent.preventDefault();
        }, n = function() {
            this.cancelBubble = !0;
        }, o = function() {
            return this.originalEvent.stopPropagation();
        }, p = function() {
            return e.doc.addEventListener ? function(a, b, c, d) {
                var e = h && j[b] ? j[b] : b, f = function(e) {
                    var f = k("y"), i = k("x"), l = e.clientX + i, n = e.clientY + f;
                    if (h && j[g](b)) for (var p = 0, q = e.targetTouches && e.targetTouches.length; q > p; p++) if (e.targetTouches[p].target == a) {
                        var r = e;
                        e = e.targetTouches[p], e.originalEvent = r, e.preventDefault = m, e.stopPropagation = o;
                        break;
                    }
                    return c.call(d, e, l, n);
                };
                return a.addEventListener(e, f, !1), function() {
                    return a.removeEventListener(e, f, !1), !0;
                };
            } : e.doc.attachEvent ? function(a, b, c, d) {
                var f = function(a) {
                    a = a || e.win.event;
                    var b = k("y"), f = k("x"), g = a.clientX + f, h = a.clientY + b;
                    return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, 
                    c.call(d, a, g, h);
                };
                a.attachEvent("on" + b, f);
                var g = function() {
                    return a.detachEvent("on" + b, f), !0;
                };
                return g;
            } : void 0;
        }(), q = [], r = function(c) {
            for (var d, e = c.clientX, f = c.clientY, g = k("y"), i = k("x"), j = q.length; j--; ) {
                if (d = q[j], h) {
                    for (var l, m = c.touches.length; m--; ) if (l = c.touches[m], l.identifier == d.el._drag.id) {
                        e = l.clientX, f = l.clientY, (c.originalEvent ? c.originalEvent : c).preventDefault();
                        break;
                    }
                } else c.preventDefault();
                var n = d.el.node;
                a._.glob, n.nextSibling, n.parentNode, n.style.display, e += i, f += g, b("snap.drag.move." + d.el.id, d.move_scope || d.el, e - d.el._drag.x, f - d.el._drag.y, e, f, c);
            }
        }, s = function(c) {
            a.unmousemove(r).unmouseup(s);
            for (var d, e = q.length; e--; ) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
            q = [];
        }, t = i.length; t--; ) !function(b) {
            a[b] = f[b] = function(c, d) {
                return a.is(c, "function") && (this.events = this.events || [], this.events.push({
                    name: b,
                    f: c,
                    unbind: p(this.shape || this.node || e.doc, b, c, d || this)
                })), this;
            }, a["un" + b] = f["un" + b] = function(a) {
                for (var c = this.events || [], d = c.length; d--; ) if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), 
                c.splice(d, 1), !c.length && delete this.events, this;
                return this;
            };
        }(i[t]);
        f.hover = function(a, b, c, d) {
            return this.mouseover(a, c).mouseout(b, d || c);
        }, f.unhover = function(a, b) {
            return this.unmouseover(a).unmouseout(b);
        };
        var u = [];
        f.drag = function(c, d, e, f, g, h) {
            function i(i) {
                (i.originalEvent || i).preventDefault();
                var j = k("y"), l = k("x");
                this._drag.x = i.clientX + l, this._drag.y = i.clientY + j, this._drag.id = i.identifier, 
                !q.length && a.mousemove(r).mouseup(s), q.push({
                    el: this,
                    move_scope: f,
                    start_scope: g,
                    end_scope: h
                }), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), 
                e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, i.clientX + l, i.clientY + j, i);
            }
            if (!arguments.length) {
                var j;
                return this.drag(function(a, b) {
                    this.attr({
                        transform: j + (j ? "T" : "t") + [ a, b ]
                    });
                }, function() {
                    j = this.transform().local;
                });
            }
            return this._drag = {}, u.push({
                el: this,
                start: i
            }), this.mousedown(i), this;
        }, f.undrag = function() {
            for (var c = u.length; c--; ) u[c].el == this && (this.unmousedown(u[c].start), 
            u.splice(c, 1), b.unbind("snap.drag.*." + this.id));
            return !u.length && a.unmousemove(r).unmouseup(s), this;
        };
    }), d.plugin(function(a, c, d) {
        var e = (c.prototype, d.prototype), f = /^\s*url\((.+)\)/, g = String, h = a._.$;
        a.filter = {}, e.filter = function(b) {
            var d = this;
            "svg" != d.type && (d = d.paper);
            var e = a.parse(g(b)), f = a._.id(), i = d.node.offsetWidth, j = d.node.offsetHeight, k = h("filter");
            return h(k, {
                id: f,
                filterUnits: "userSpaceOnUse",
                x: 0,
                y: 0,
                width: i,
                height: j
            }), k.appendChild(e.node), d.defs.appendChild(k), new c(k);
        }, b.on("snap.util.getattr.filter", function() {
            b.stop();
            var c = h(this.node, "filter");
            if (c) {
                var d = g(c).match(f);
                return d && a.select(d[1]);
            }
        }), b.on("snap.util.attr.filter", function(a) {
            if (a instanceof c && "filter" == a.type) {
                b.stop();
                var d = a.node.id;
                d || (h(a.node, {
                    id: a.id
                }), d = a.id), h(this.node, {
                    filter: "url(#" + d + ")"
                });
            }
            a && "none" != a || (b.stop(), this.node.removeAttribute("filter"));
        }), a.filter.blur = function(b, c) {
            null == b && (b = 2);
            var d = null == c ? b : [ b, c ];
            return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: d
            });
        }, a.filter.blur.toString = function() {
            return this();
        }, a.filter.shadow = function(b, c, d, e) {
            return e = e || "#000", null == d && (d = 4), "string" == typeof d && (e = d, d = 4), 
            null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: e,
                dx: b,
                dy: c,
                blur: d
            });
        }, a.filter.shadow.toString = function() {
            return this();
        }, a.filter.grayscale = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - b),
                b: .7152 - .7152 * (1 - b),
                c: .0722 - .0722 * (1 - b),
                d: .2126 - .2126 * (1 - b),
                e: .7152 + .2848 * (1 - b),
                f: .0722 - .0722 * (1 - b),
                g: .2126 - .2126 * (1 - b),
                h: .0722 + .9278 * (1 - b)
            });
        }, a.filter.grayscale.toString = function() {
            return this();
        }, a.filter.sepia = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - b),
                b: .769 - .769 * (1 - b),
                c: .189 - .189 * (1 - b),
                d: .349 - .349 * (1 - b),
                e: .686 + .314 * (1 - b),
                f: .168 - .168 * (1 - b),
                g: .272 - .272 * (1 - b),
                h: .534 - .534 * (1 - b),
                i: .131 + .869 * (1 - b)
            });
        }, a.filter.sepia.toString = function() {
            return this();
        }, a.filter.saturate = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - b
            });
        }, a.filter.saturate.toString = function() {
            return this();
        }, a.filter.hueRotate = function(b) {
            return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: b
            });
        }, a.filter.hueRotate.toString = function() {
            return this();
        }, a.filter.invert = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: 1 - b
            });
        }, a.filter.invert.toString = function() {
            return this();
        }, a.filter.brightness = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: b
            });
        }, a.filter.brightness.toString = function() {
            return this();
        }, a.filter.contrast = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: .5 - b / 2
            });
        }, a.filter.contrast.toString = function() {
            return this();
        };
    }), d;
});

(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    }
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var arr = [];
    var slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var support = {};
    var document = window.document, version = "2.1.1", jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        get: function(num) {
            return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this);
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (i === length) {
            target = this;
            i--;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray,
        isWindow: function(obj) {
            return obj != null && obj === obj.window;
        },
        isNumeric: function(obj) {
            return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0;
        },
        isPlainObject: function(obj) {
            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
            return true;
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        type: function(obj) {
            if (obj == null) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        },
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code);
            if (code) {
                if (code.indexOf("use strict") === 1) {
                    script = document.createElement("script");
                    script.text = code;
                    document.head.appendChild(script).parentNode.removeChild(script);
                } else {
                    indirect(code);
                }
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        },
        trim: function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                } else {
                    push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (;j < len; j++) {
                first[i++] = second[j];
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (;i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }
            return matches;
        },
        map: function(elems, callback, arg) {
            var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
            if (isArray) {
                for (;i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            }
            return concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        now: Date.now,
        support: support
    });
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArraylike(obj) {
        var length = obj.length, type = jQuery.type(obj);
        if (type === "function" || jQuery.isWindow(obj)) {
            return false;
        }
        if (obj.nodeType === 1 && length) {
            return true;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle = function(window) {
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
                hasDuplicate = true;
            }
            return 0;
        }, strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function(elem) {
            var i = 0, len = this.length;
            for (;i < len; i++) {
                if (this[i] === elem) {
                    return i;
                }
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    var j = target.length, i = 0;
                    while (target[j++] = els[i++]) {}
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context);
            }
            context = context || document;
            results = results || [];
            if (!selector || typeof selector !== "string") {
                return results;
            }
            if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                return [];
            }
            if (documentIsHTML && !seed) {
                if (match = rquickExpr.exec(selector)) {
                    if (m = match[1]) {
                        if (nodeType === 9) {
                            elem = context.getElementById(m);
                            if (elem && elem.parentNode) {
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        }
                    } else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results;
                    } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                        push.apply(results, context.getElementsByClassName(m));
                        return results;
                    }
                }
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    nid = old = expando;
                    newContext = context;
                    newSelector = nodeType === 9 && selector;
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        groups = tokenize(selector);
                        if (old = context.getAttribute("id")) {
                            nid = old.replace(rescape, "\\$&");
                        } else {
                            context.setAttribute("id", nid);
                        }
                        nid = "[id='" + nid + "'] ";
                        i = groups.length;
                        while (i--) {
                            groups[i] = nid + toSelector(groups[i]);
                        }
                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                        newSelector = groups.join(",");
                    }
                    if (newSelector) {
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {} finally {
                            if (!old) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
            var keys = [];
            function cache(key, value) {
                if (keys.push(key + " ") > Expr.cacheLength) {
                    delete cache[keys.shift()];
                }
                return cache[key + " "] = value;
            }
            return cache;
        }
        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return false;
            } finally {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
                div = null;
            }
        }
        function addHandle(attrs, handler) {
            var arr = attrs.split("|"), i = attrs.length;
            while (i--) {
                Expr.attrHandle[arr[i]] = handler;
            }
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
                return diff;
            }
            if (cur) {
                while (cur = cur.nextSibling) {
                    if (cur === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        function testContext(context) {
            return context && typeof context.getElementsByTagName !== strundefined && context;
        }
        support = Sizzle.support = {};
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, doc = node ? node.ownerDocument || node : preferredDoc, parent = doc.defaultView;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document;
            }
            document = doc;
            docElem = doc.documentElement;
            documentIsHTML = !isXML(doc);
            if (parent && parent !== parent.top) {
                if (parent.addEventListener) {
                    parent.addEventListener("unload", function() {
                        setDocument();
                    }, false);
                } else if (parent.attachEvent) {
                    parent.attachEvent("onunload", function() {
                        setDocument();
                    });
                }
            }
            support.attributes = assert(function(div) {
                div.className = "i";
                return !div.getAttribute("className");
            });
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(doc.createComment(""));
                return !div.getElementsByTagName("*").length;
            });
            support.getElementsByClassName = rnative.test(doc.getElementsByClassName) && assert(function(div) {
                div.innerHTML = "<div class='a'></div><div class='a i'></div>";
                div.firstChild.className = "i";
                return div.getElementsByClassName("i").length === 2;
            });
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !doc.getElementsByName || !doc.getElementsByName(expando).length;
            });
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== strundefined && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m && m.parentNode ? [ m ] : [];
                    }
                };
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else {
                delete Expr.find["ID"];
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
            }
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== strundefined) {
                    return context.getElementsByTagName(tag);
                }
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                    while (elem = results[i++]) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem);
                        }
                    }
                    return tmp;
                }
                return results;
            };
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support.qsa = rnative.test(doc.querySelectorAll)) {
                assert(function(div) {
                    div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
                    if (div.querySelectorAll("[msallowclip^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }
                });
                assert(function(div) {
                    var input = doc.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("name", "D");
                    if (div.querySelectorAll("[name=d]").length) {
                        rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    }
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    support.disconnectedMatch = matches.call(div, "div");
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos);
                });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            sortOrder = hasCompare ? function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                    return compare;
                }
                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                        return -1;
                    }
                    if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                        return 1;
                    }
                    return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            } : function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (!aup || !bup) {
                    return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }
                cur = a;
                while (cur = cur.parentNode) {
                    ap.unshift(cur);
                }
                cur = b;
                while (cur = cur.parentNode) {
                    bp.unshift(cur);
                }
                while (ap[i] === bp[i]) {
                    i++;
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };
            return doc;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                        return ret;
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document) {
                setDocument(context);
            }
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while (elem = results[i++]) {
                    if (elem === results[i]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }
            sortInput = null;
            return results;
        };
        getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
                while (node = elem[i++]) {
                    ret += getText(node);
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                    return elem.textContent;
                } else {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem);
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
            }
            return ret;
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        if (!match[3]) {
                            Sizzle.error(match[0]);
                        }
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    } else if (match[3]) {
                        Sizzle.error(match[0]);
                    }
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }
                    if (match[3]) {
                        match[2] = match[4] || match[5] || "";
                    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!=";
                        }
                        if (!operator) {
                            return true;
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            if (forward && useCache) {
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = cache[0] === dirruns && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        outerCache[type] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                diff = cache[1];
                            } else {
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        if (useCache) {
                                            (node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ];
                                        }
                                        if (node === elem) {
                                            break;
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument);
                    }
                    if (fn.length > 1) {
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === false;
                },
                disabled: function(elem) {
                    return elem.disabled === true;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }
                    return elem.selected === true;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;--i >= 0; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;++i < length; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }
                if (!matched) {
                    break;
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for (;i < len; i++) {
                selector += tokens[i].value;
            }
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml);
                    }
                }
            } : function(elem, context, xml) {
                var oldCache, outerCache, newCache = [ dirruns, doneName ];
                if (xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                return newCache[2] = oldCache[2];
                            } else {
                                outerCache[dir] = newCache;
                                if (newCache[2] = matcher(elem, context, xml)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for (;i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (;i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i);
                        }
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            } ];
            for (;i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (;j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break;
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                }
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                if (outermost) {
                    outermostContext = context !== document && context;
                }
                for (;i !== len && (elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        j = 0;
                        while (matcher = elementMatchers[j++]) {
                            if (matcher(elem, context, xml)) {
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                        }
                    }
                    if (bySet) {
                        if (elem = !matcher && elem) {
                            matchedCount--;
                        }
                        if (seed) {
                            unmatched.push(elem);
                        }
                    }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while (matcher = setMatchers[j++]) {
                        matcher(unmatched, setMatched, context, xml);
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched);
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        Sizzle.uniqueSort(results);
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, match) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                if (!match) {
                    match = tokenize(selector);
                }
                i = match.length;
                while (i--) {
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.push(cached);
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                cached.selector = selector;
            }
            return cached;
        };
        select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) {
                        return results;
                    } else if (compiled) {
                        context = context.parentNode;
                    }
                    selector = selector.slice(tokens.shift().value.length);
                }
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while (i--) {
                    token = tokens[i];
                    if (Expr.relative[type = token.type]) {
                        break;
                    }
                    if (find = Expr.find[type]) {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        };
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support.detectDuplicates = !!hasDuplicate;
        setDocument();
        support.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document.createElement("div")) & 1;
        });
        if (!assert(function(div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild.getAttribute("href") === "#";
        })) {
            addHandle("type|href|height|width", function(elem, name, isXML) {
                if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!support.attributes || !assert(function(div) {
            div.innerHTML = "<input/>";
            div.firstChild.setAttribute("value", "");
            return div.firstChild.getAttribute("value") === "";
        })) {
            addHandle("value", function(elem, name, isXML) {
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    return elem.defaultValue;
                }
            });
        }
        if (!assert(function(div) {
            return div.getAttribute("disabled") == null;
        })) {
            addHandle(booleans, function(elem, name, isXML) {
                var val;
                if (!isXML) {
                    return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                }
            });
        }
        return Sizzle;
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var risSimple = /^.[^:#\[\.,]*$/;
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not;
            });
        }
        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) >= 0 !== not;
        });
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
            expr = ":not(" + expr + ")";
        }
        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, len = this.length, ret = [], self = this;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context) {
        var match, elem;
        if (!selector) {
            return this;
        }
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                match = [ null, selector, null ];
            } else {
                match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for (match in context) {
                            if (jQuery.isFunction(this[match])) {
                                this[match](context[match]);
                            } else {
                                this.attr(match, context[match]);
                            }
                        }
                    }
                    return this;
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem && elem.parentNode) {
                        this.length = 1;
                        this[0] = elem;
                    }
                    this.context = document;
                    this.selector = selector;
                    return this;
                }
            } else if (!context || context.jquery) {
                return (context || rootjQuery).find(selector);
            } else {
                return this.constructor(context).find(selector);
            }
        } else if (selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
        } else if (jQuery.isFunction(selector)) {
            return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
        }
        if (selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
    };
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.extend({
        dir: function(elem, dir, until) {
            var matched = [], truncate = until !== undefined;
            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) {
                        break;
                    }
                    matched.push(elem);
                }
            }
            return matched;
        },
        sibling: function(n, elem) {
            var matched = [];
            for (;n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n);
                }
            }
            return matched;
        }
    });
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for (;i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (;i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        matched.push(cur);
                        break;
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    jQuery.unique(matched);
                }
                if (rparentsprev.test(name)) {
                    matched.reverse();
                }
            }
            return this.pushStack(matched);
        };
    });
    var rnotwhite = /\S+/g;
    var optionsCache = {};
    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var memory, fired, firing, firingStart, firingLength, firingIndex, list = [], stack = !options.once && [], fire = function(data) {
            memory = options.memory && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for (;list && firingIndex < firingLength; firingIndex++) {
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    memory = false;
                    break;
                }
            }
            firing = false;
            if (list) {
                if (stack) {
                    if (stack.length) {
                        fire(stack.shift());
                    }
                } else if (memory) {
                    list = [];
                } else {
                    self.disable();
                }
            }
        }, self = {
            add: function() {
                if (list) {
                    var start = list.length;
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            if (type === "function") {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && type !== "string") {
                                add(arg);
                            }
                        });
                    })(arguments);
                    if (firing) {
                        firingLength = list.length;
                    } else if (memory) {
                        firingStart = start;
                        fire(memory);
                    }
                }
                return this;
            },
            remove: function() {
                if (list) {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (firing) {
                                if (index <= firingLength) {
                                    firingLength--;
                                }
                                if (index <= firingIndex) {
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
            },
            empty: function() {
                list = [];
                firingLength = 0;
                return this;
            },
            disable: function() {
                list = stack = memory = undefined;
                return this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                stack = undefined;
                if (!memory) {
                    self.disable();
                }
                return this;
            },
            locked: function() {
                return !stack;
            },
            fireWith: function(context, args) {
                if (list && (!fired || stack)) {
                    args = args || [];
                    args = [ context, args.slice ? args.slice() : args ];
                    if (firing) {
                        stack.push(args);
                    } else {
                        fire(args);
                    }
                }
                return this;
            },
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                } else {
                                    newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                }
                            });
                        });
                        fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },
        when: function(subordinate) {
            var i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values);
                    } else if (!--remaining) {
                        deferred.resolveWith(contexts, values);
                    }
                };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (;i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                    } else {
                        --remaining;
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    var readyList;
    jQuery.fn.ready = function(fn) {
        jQuery.ready.promise().done(fn);
        return this;
    };
    jQuery.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }
            readyList.resolveWith(document, [ jQuery ]);
            if (jQuery.fn.triggerHandler) {
                jQuery(document).triggerHandler("ready");
                jQuery(document).off("ready");
            }
        }
    });
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, false);
        window.removeEventListener("load", completed, false);
        jQuery.ready();
    }
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete") {
                setTimeout(jQuery.ready);
            } else {
                document.addEventListener("DOMContentLoaded", completed, false);
                window.addEventListener("load", completed, false);
            }
        }
        return readyList.promise(obj);
    };
    jQuery.ready.promise();
    var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (jQuery.type(key) === "object") {
            chainable = true;
            for (i in key) {
                jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
            }
        } else if (value !== undefined) {
            chainable = true;
            if (!jQuery.isFunction(value)) {
                raw = true;
            }
            if (bulk) {
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                } else {
                    bulk = fn;
                    fn = function(elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) {
                for (;i < len; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    };
    jQuery.acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        });
        this.expando = jQuery.expando + Math.random();
    }
    Data.uid = 1;
    Data.accepts = jQuery.acceptData;
    Data.prototype = {
        key: function(owner) {
            if (!Data.accepts(owner)) {
                return 0;
            }
            var descriptor = {}, unlock = owner[this.expando];
            if (!unlock) {
                unlock = Data.uid++;
                try {
                    descriptor[this.expando] = {
                        value: unlock
                    };
                    Object.defineProperties(owner, descriptor);
                } catch (e) {
                    descriptor[this.expando] = unlock;
                    jQuery.extend(owner, descriptor);
                }
            }
            if (!this.cache[unlock]) {
                this.cache[unlock] = {};
            }
            return unlock;
        },
        set: function(owner, data, value) {
            var prop, unlock = this.key(owner), cache = this.cache[unlock];
            if (typeof data === "string") {
                cache[data] = value;
            } else {
                if (jQuery.isEmptyObject(cache)) {
                    jQuery.extend(this.cache[unlock], data);
                } else {
                    for (prop in data) {
                        cache[prop] = data[prop];
                    }
                }
            }
            return cache;
        },
        get: function(owner, key) {
            var cache = this.cache[this.key(owner)];
            return key === undefined ? cache : cache[key];
        },
        access: function(owner, key, value) {
            var stored;
            if (key === undefined || key && typeof key === "string" && value === undefined) {
                stored = this.get(owner, key);
                return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
            }
            this.set(owner, key, value);
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, name, camel, unlock = this.key(owner), cache = this.cache[unlock];
            if (key === undefined) {
                this.cache[unlock] = {};
            } else {
                if (jQuery.isArray(key)) {
                    name = key.concat(key.map(jQuery.camelCase));
                } else {
                    camel = jQuery.camelCase(key);
                    if (key in cache) {
                        name = [ key, camel ];
                    } else {
                        name = camel;
                        name = name in cache ? [ name ] : name.match(rnotwhite) || [];
                    }
                }
                i = name.length;
                while (i--) {
                    delete cache[name[i]];
                }
            }
        },
        hasData: function(owner) {
            return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
        },
        discard: function(owner) {
            if (owner[this.expando]) {
                delete this.cache[owner[this.expando]];
            }
        }
    };
    var data_priv = new Data();
    var data_user = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
    function dataAttr(elem, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                data_user.set(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return data_user.hasData(elem) || data_priv.hasData(elem);
        },
        data: function(elem, name, data) {
            return data_user.access(elem, name, data);
        },
        removeData: function(elem, name) {
            data_user.remove(elem, name);
        },
        _data: function(elem, name, data) {
            return data_priv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            data_priv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === undefined) {
                if (this.length) {
                    data = data_user.get(elem);
                    if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        data_priv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            if (typeof key === "object") {
                return this.each(function() {
                    data_user.set(this, key);
                });
            }
            return access(this, function(value) {
                var data, camelKey = jQuery.camelCase(key);
                if (elem && value === undefined) {
                    data = data_user.get(elem, key);
                    if (data !== undefined) {
                        return data;
                    }
                    data = data_user.get(elem, camelKey);
                    if (data !== undefined) {
                        return data;
                    }
                    data = dataAttr(elem, camelKey, undefined);
                    if (data !== undefined) {
                        return data;
                    }
                    return;
                }
                this.each(function() {
                    var data = data_user.get(this, camelKey);
                    data_user.set(this, camelKey, value);
                    if (key.indexOf("-") !== -1 && data !== undefined) {
                        data_user.set(this, key, value);
                    }
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                data_user.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = data_priv.get(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = data_priv.access(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return data_priv.get(elem, key) || data_priv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    data_priv.remove(elem, [ type + "queue", key ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) {
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = data_priv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
    var isHidden = function(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    };
    var rcheckableType = /^(?:checkbox|radio)$/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    })();
    var strundefined = typeof undefined;
    support.focusinBubbles = "onfocusin" in window;
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.get(elem);
            if (!elemData) {
                return;
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                };
            }
            types = (types || "").match(rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
            }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.hasData(elem) && data_priv.get(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            types = (types || "").match(rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                data_priv.remove(elem, "events");
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") >= 0) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (;cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && handle.apply && jQuery.acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
                    if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        }
                        jQuery.event.triggered = type;
                        elem[type]();
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (data_priv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                for (;cur !== this; cur = cur.parentNode || this) {
                    if (cur.disabled !== true || event.type !== "click") {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) {
                event.target = document;
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                jQuery.event.trigger(e, null, elem);
            } else {
                jQuery.event.dispatch.call(elem, e);
            }
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };
    jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle, false);
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        if (props) {
            jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && e.preventDefault) {
                e.preventDefault();
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && e.stopPropagation) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && e.stopImmediatePropagation) {
                e.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    if (!support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix);
                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    data_priv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function() {
                    var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix) - 1;
                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        data_priv.remove(doc, fix);
                    } else {
                        data_priv.access(doc, fix, attaches);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    this.on(type, selector, data, types[type], one);
                }
                return this;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return this;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return this.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (;i < l; i++) {
            data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
        }
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
            return;
        }
        if (data_priv.hasData(src)) {
            pdataOld = data_priv.access(src);
            pdataCur = data_priv.set(dest, pdataOld);
            events = pdataOld.events;
            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};
                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
        }
        if (data_user.hasData(src)) {
            udataOld = data_user.access(src);
            udataCur = jQuery.extend({}, udataOld);
            data_user.set(dest, udataCur);
        }
    }
    function getAll(context, tag) {
        var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], ret) : ret;
    }
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }
    jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
        },
        buildFragment: function(elems, context, scripts, selection) {
            var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
            for (;i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));
                    } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = "";
                    }
                }
            }
            fragment.textContent = "";
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(fragment.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp);
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }
            return fragment;
        },
        cleanData: function(elems) {
            var data, elem, type, key, special = jQuery.event.special, i = 0;
            for (;(elem = elems[i]) !== undefined; i++) {
                if (jQuery.acceptData(elem)) {
                    key = elem[data_priv.expando];
                    if (key && (data = data_priv.cache[key])) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        if (data_priv.cache[key]) {
                            delete data_priv.cache[key];
                        }
                    }
                }
                delete data_user.cache[elem[data_user.expando]];
            }
        }
    });
    jQuery.fn.extend({
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value;
                    }
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        remove: function(selector, keepData) {
            var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
            for (;(elem = elems[i]) != null; i++) {
                if (!keepData && elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem));
                }
                if (elem.parentNode) {
                    if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                        setGlobalEval(getAll(elem, "script"));
                    }
                    elem.parentNode.removeChild(elem);
                }
            }
            return this;
        },
        empty: function() {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.textContent = "";
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (;i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var arg = arguments[0];
            this.domManip(arguments, function(elem) {
                arg = this.parentNode;
                jQuery.cleanData(getAll(this));
                if (arg) {
                    arg.replaceChild(elem, this);
                }
            });
            return arg && (arg.length || arg.nodeType) ? this : this.remove();
        },
        detach: function(selector) {
            return this.remove(selector, true);
        },
        domManip: function(args, callback) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
                return this.each(function(index) {
                    var self = set.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html());
                    }
                    self.domManip(args, callback);
                });
            }
            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (;i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(this[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    if (jQuery._evalUrl) {
                                        jQuery._evalUrl(node.src);
                                    }
                                } else {
                                    jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                                }
                            }
                        }
                    }
                }
            }
            return this;
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (;i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var iframe, elemdisplay = {};
    function actualDisplay(name, doc) {
        var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
        elem.detach();
        return display;
    }
    function defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                doc = iframe[0].contentDocument;
                doc.write();
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    var rmargin = /^margin/;
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function(elem) {
        return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    };
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
        }
        if (computed) {
            if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name);
            }
            if (rnumnonpx.test(ret) && rmargin.test(name)) {
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                if (conditionFn()) {
                    delete this.get;
                    return;
                }
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    (function() {
        var pixelPositionVal, boxSizingReliableVal, docElem = document.documentElement, container = document.createElement("div"), div = document.createElement("div");
        if (!div.style) {
            return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
        container.appendChild(div);
        function computePixelPositionAndBoxSizingReliable() {
            div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
            div.innerHTML = "";
            docElem.appendChild(container);
            var divStyle = window.getComputedStyle(div, null);
            pixelPositionVal = divStyle.top !== "1%";
            boxSizingReliableVal = divStyle.width === "4px";
            docElem.removeChild(container);
        }
        if (window.getComputedStyle) {
            jQuery.extend(support, {
                pixelPosition: function() {
                    computePixelPositionAndBoxSizingReliable();
                    return pixelPositionVal;
                },
                boxSizingReliable: function() {
                    if (boxSizingReliableVal == null) {
                        computePixelPositionAndBoxSizingReliable();
                    }
                    return boxSizingReliableVal;
                },
                reliableMarginRight: function() {
                    var ret, marginDiv = div.appendChild(document.createElement("div"));
                    marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                    marginDiv.style.marginRight = marginDiv.style.width = "0";
                    div.style.width = "1px";
                    docElem.appendChild(container);
                    ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);
                    docElem.removeChild(container);
                    return ret;
                }
            });
        }
    })();
    jQuery.swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
            elem.style[name] = old[name];
        }
        return ret;
    };
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"), cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    }, cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    function vendorPropName(style, name) {
        if (name in style) {
            return name;
        }
        var capName = name[0].toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) {
                return name;
            }
        }
        return origName;
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
        for (;i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function showHide(elements, show) {
        var display, elem, hidden, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = data_priv.get(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
                }
            } else {
                hidden = isHidden(elem);
                if (display !== "none" || !hidden) {
                    data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    type = "number";
                }
                if (value == null || value !== value) {
                    return;
                }
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    style[name] = value;
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
        };
    });
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
        if (computed) {
            return jQuery.swap(elem, {
                display: "inline-block"
            }, curCSS, [ elem, "marginRight" ]);
        }
    });
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                for (;i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (;i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }
            return this.each(function() {
                if (isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
            if (start && start[3] !== unit) {
                unit = unit || start[3];
                parts = parts || [];
                start = +target || 1;
                do {
                    scale = scale || ".5";
                    start = start / scale;
                    jQuery.style(tween.elem, prop, start + unit);
                } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
            }
            if (parts) {
                start = tween.start = +start || +target || 0;
                tween.unit = unit;
                tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
            }
            return tween;
        } ]
    };
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = jQuery.now();
    }
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
        for (;index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
                return tween;
            }
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = data_priv.get(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            display = jQuery.css(elem, "display");
            checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                style.display = "inline-block";
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            } else {
                display = undefined;
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = data_priv.access(elem, "fxshow", {});
            }
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                data_priv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for (;index < length; index++) {
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            if (percent < 1 && length) {
                return remaining;
            } else {
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (;index < length; index++) {
                    animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else {
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }
            var prop, index = 0, length = props.length;
            for (;index < length; index++) {
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback);
            }
        },
        prefilter: function(callback, prepend) {
            if (prepend) {
                animationPrefilters.unshift(callback);
            } else {
                animationPrefilters.push(callback);
            }
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || data_priv.get(this, "finish")) {
                    anim.stop(true);
                }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = data_priv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = data_priv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }
                delete data.finish;
            });
        }
    });
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = jQuery.now();
        for (;i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        if (timer()) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = setTimeout(next, time);
            hooks.stop = function() {
                clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var hooks, ret, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (typeof elem.getAttribute === strundefined) {
                return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                } else {
                    elem.setAttribute(name, value + "");
                    return value;
                }
            } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            } else {
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret;
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        elem[propName] = false;
                    }
                    elem.removeAttribute(name);
                }
            }
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        }
    });
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name);
            } else {
                elem.setAttribute(name, name);
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle;
            if (!isXML) {
                handle = attrHandle[name];
                attrHandle[name] = ret;
                ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                attrHandle[name] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
            } else {
                return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
            }
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
                }
            }
        }
    });
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            }
        };
    }
    jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = typeof value === "string" && value, i = 0, len = this.length;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }
                        finalValue = jQuery.trim(cur);
                        if (elem.className !== finalValue) {
                            elem.className = finalValue;
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = arguments.length === 0 || typeof value === "string" && value, i = 0, len = this.length;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        finalValue = value ? jQuery.trim(cur) : "";
                        if (elem.className !== finalValue) {
                            elem.className = finalValue;
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }
            return this.each(function() {
                if (type === "string") {
                    var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || [];
                    while (className = classNames[i++]) {
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }
                } else if (type === strundefined || type === "boolean") {
                    if (this.className) {
                        data_priv.set(this, "__className__", this.className);
                    }
                    this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
                }
            });
        },
        hasClass: function(selector) {
            var className = " " + selector + " ", i = 0, l = this.length;
            for (;i < l; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    return true;
                }
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : jQuery.trim(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    for (;i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value;
                            }
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(option.value, values) >= 0) {
                            optionSet = true;
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    });
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    var nonce = jQuery.now();
    var rquery = /\?/;
    jQuery.parseJSON = function(data) {
        return JSON.parse(data + "");
    };
    jQuery.parseXML = function(data) {
        var xml, tmp;
        if (!data || typeof data !== "string") {
            return null;
        }
        try {
            tmp = new DOMParser();
            xml = tmp.parseFromString(data, "text/xml");
        } catch (e) {
            xml = undefined;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };
    var ajaxLocParts, ajaxLocation, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href;
    } catch (e) {
        ajaxLocation = document.createElement("a");
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while (dataType = dataTypes[i++]) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev;
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s["throws"]) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, parts, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    if (!state) {
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                overrideMimeType: function(type) {
                    if (!state) {
                        s.mimeType = type;
                    }
                    return this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (state < 2) {
                            for (code in map) {
                                statusCode[code] = [ statusCode[code], map[code] ];
                            }
                        } else {
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [ "" ];
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR;
            }
            fireGlobals = s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data;
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort();
            }
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (state < 2) {
                        done(-1, e);
                    } else {
                        throw e;
                    }
                }
            }
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return;
                }
                state = 2;
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";
                    } else if (status === 304) {
                        statusText = "notmodified";
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else {
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                }
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    jQuery.expr.filters.hidden = function(elem) {
        return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
    };
    jQuery.expr.filters.visible = function(elem) {
        return !jQuery.expr.filters.hidden(elem);
    };
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            add(prefix, obj);
        }
    }
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return s.join("&").replace(r20, "+");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };
    var xhrId = 0, xhrCallbacks = {}, xhrSuccessStatus = {
        0: 200,
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    if (window.ActiveXObject) {
        jQuery(window).on("unload", function() {
            for (var key in xhrCallbacks) {
                xhrCallbacks[key]();
            }
        });
    }
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback;
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function(headers, complete) {
                    var i, xhr = options.xhr(), id = ++xhrId;
                    xhr.open(options.type, options.url, options.async, options.username, options.password);
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    }
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    }
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    }
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    }
                    callback = function(type) {
                        return function() {
                            if (callback) {
                                delete xhrCallbacks[id];
                                callback = xhr.onload = xhr.onerror = null;
                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") {
                                    complete(xhr.status, xhr.statusText);
                                } else {
                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, typeof xhr.responseText === "string" ? {
                                        text: xhr.responseText
                                    } : undefined, xhr.getAllResponseHeaders());
                                }
                            }
                        };
                    };
                    xhr.onload = callback();
                    xhr.onerror = callback("error");
                    callback = xhrCallbacks[id] = callback("abort");
                    try {
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) {
                        if (callback) {
                            throw e;
                        }
                    }
                },
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        async: true,
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type);
                        }
                    });
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            jqXHR.always(function() {
                window[callbackName] = overwritten;
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName);
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            return "script";
        }
    });
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || typeof data !== "string") {
            return null;
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        context = context || document;
        var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
        if (parsed) {
            return [ context.createElement(parsed[1]) ];
        }
        parsed = jQuery.buildFragment([ data ], context, scripts);
        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off >= 0) {
            selector = jQuery.trim(url.slice(off));
            url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).complete(callback && function(jqXHR, status) {
                self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }
        return this;
    };
    jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    var docElem = window.document.documentElement;
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
                elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        offset: function(options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }
            var docElem, win, elem = this[0], box = {
                top: 0,
                left: 0
            }, doc = elem && elem.ownerDocument;
            if (!doc) {
                return;
            }
            docElem = doc.documentElement;
            if (!jQuery.contains(docElem, elem)) {
                return box;
            }
            if (typeof elem.getBoundingClientRect !== strundefined) {
                box = elem.getBoundingClientRect();
            }
            win = getWindow(doc);
            return {
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            };
        },
        position: function() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || docElem;
                while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || docElem;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? win[prop] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });
    jQuery.each([ "top", "left" ], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name];
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    jQuery.fn.size = function() {
        return this.length;
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return jQuery;
        });
    }
    var _jQuery = window.jQuery, _$ = window.$;
    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }
        return jQuery;
    };
    if (typeof noGlobal === strundefined) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
});

+function($) {
    "use strict";
    var Collapse = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]');
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = this.getParent();
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }
        if (this.options.toggle) this.toggle();
    };
    Collapse.VERSION = "3.3.1";
    Collapse.TRANSITION_DURATION = 350;
    Collapse.DEFAULTS = {
        toggle: true,
        trigger: '[data-toggle="collapse"]'
    };
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
    };
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) return;
        var activesData;
        var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (actives && actives.length) {
            activesData = actives.data("bs.collapse");
            if (activesData && activesData.transitioning) return;
        }
        var startEvent = $.Event("show.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        if (actives && actives.length) {
            Plugin.call(actives, "hide");
            activesData || actives.data("bs.collapse", null);
        }
        var dimension = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
        this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
        this.transitioning = 1;
        var complete = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        var scrollSize = $.camelCase([ "scroll", dimension ].join("-"));
        this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
    };
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) return;
        var startEvent = $.Event("hide.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
        this.$trigger.addClass("collapsed").attr("aria-expanded", false);
        this.transitioning = 1;
        var complete = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
    };
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    Collapse.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
            var $element = $(element);
            this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
        }, this)).end();
    };
    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass("in");
        $element.attr("aria-expanded", isOpen);
        $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
    };
    function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        return $(target);
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.collapse");
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data && options.toggle && option == "show") options.toggle = false;
            if (!data) $this.data("bs.collapse", data = new Collapse(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.collapse;
    $.fn.collapse = Plugin;
    $.fn.collapse.Constructor = Collapse;
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old;
        return this;
    };
    $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var $this = $(this);
        if (!$this.attr("data-target")) e.preventDefault();
        var $target = getTargetFromTrigger($this);
        var data = $target.data("bs.collapse");
        var option = data ? "toggle" : $.extend({}, $this.data(), {
            trigger: this
        });
        Plugin.call($target, option);
    });
}(jQuery);

var svgIconConfig = {
    clock: {
        url: "svg/clock.svg",
        animation: [ {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 32 32"}'
                },
                to: {
                    val: '{"transform" : "r630 32 32"}'
                }
            }
        }, {
            el: "path:nth-child(3)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 32 32"}'
                },
                to: {
                    val: '{"transform" : "r80 32 32"}'
                }
            }
        } ]
    },
    trash: {
        url: "svg/trash.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"transform" : "t0 0"}'
                },
                to: {
                    val: '{"transform" : "t0 -8"}'
                }
            }
        } ]
    },
    contract: {
        url: "svg/contract.svg",
        animation: [ {
            el: "rect:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "t0 0"}',
                    after: '{ "opacity" : 0 }'
                },
                to: {
                    val: '{"transform" : "t-5 -5"}',
                    before: '{ "opacity" : 1 }'
                }
            }
        }, {
            el: "rect:nth-child(3)",
            animProperties: {
                from: {
                    val: '{"transform" : "t0 0"}',
                    after: '{ "opacity" : 0 }'
                },
                to: {
                    val: '{"transform" : "t-10 -10"}',
                    before: '{ "opacity" : 1 }'
                }
            }
        } ]
    },
    maximize: {
        url: "svg/maximize.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"transform" : "t0 0"}'
                },
                to: {
                    val: '{"transform" : "t-5 -5"}'
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "t0 0"}'
                },
                to: {
                    val: '{"transform" : "t5 -5"}'
                }
            }
        }, {
            el: "path:nth-child(3)",
            animProperties: {
                from: {
                    val: '{"transform" : "t0 0"}'
                },
                to: {
                    val: '{"transform" : "t-5 5"}'
                }
            }
        }, {
            el: "path:nth-child(4)",
            animProperties: {
                from: {
                    val: '{"transform" : "t0 0"}'
                },
                to: {
                    val: '{"transform" : "t5 5"}'
                }
            }
        } ]
    },
    maximizeRotate: {
        url: "svg/maximize.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 16 16 t0 0"}'
                },
                to: {
                    val: '{"transform" : "r180 16 16 t-5 -5"}'
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 48 16 t0 0"}'
                },
                to: {
                    val: '{"transform" : "r-180 48 16 t5 -5"}'
                }
            }
        }, {
            el: "path:nth-child(3)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 16 48 t0 0"}'
                },
                to: {
                    val: '{"transform" : "r-180 16 48 t-5 5"}'
                }
            }
        }, {
            el: "path:nth-child(4)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 48 48 t0 0"}'
                },
                to: {
                    val: '{"transform" : "r180 48 48 t5 5"}'
                }
            }
        } ]
    },
    volume: {
        url: "svg/volume.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"transform" : "t-10 0 s0 32 32"}'
                },
                to: {
                    val: '{"transform" : "t0 0 s1 32 32", "opacity" : 1}',
                    before: '{"transform" : "t-10 0 s0 32 32"}',
                    delayFactor: .5
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "t-10 0 s0 32 32"}',
                    delayFactor: .25
                },
                to: {
                    val: '{"transform" : "t0 0 s1 32 32", "opacity" : 1}',
                    before: '{"transform" : "t-10 0 s0 32 32"}',
                    delayFactor: .25
                }
            }
        }, {
            el: "path:nth-child(3)",
            animProperties: {
                from: {
                    val: '{"transform" : "t-10 0 s0 32 32"}',
                    delayFactor: .5
                },
                to: {
                    val: '{"transform" : "t0 0 s1 32 32", "opacity" : 1}',
                    before: '{"transform" : "t-10 0 s0 32 32"}'
                }
            }
        } ]
    },
    plus: {
        url: "svg/plus.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 32 32", "opacity" : 1}'
                },
                to: {
                    val: '{"transform" : "r180 32 32", "opacity" : 0}'
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 32 32"}'
                },
                to: {
                    val: '{"transform" : "r180 32 32"}'
                }
            }
        } ]
    },
    plusCross: {
        url: "svg/plus.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 32 32"}'
                },
                to: {
                    val: '{"transform" : "r45 32 32"}'
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "r0 32 32"}'
                },
                to: {
                    val: '{"transform" : "r45 32 32"}'
                }
            }
        } ]
    },
    hamburger: {
        url: "svg/hamburger.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"path" : "m 5.0916789,20.818994 53.8166421,0"}'
                },
                to: {
                    val: '{"path" : "m 5.091679,9.771104 53.816642,0"}'
                }
            }
        }, {
            el: "path:nth-child(3)",
            animProperties: {
                from: {
                    val: '{"path" : "m 5.0916788,42.95698 53.8166422,0"}'
                },
                to: {
                    val: '{"path" : "m 5.0916789,54.00487 53.8166421,0"}'
                }
            }
        } ]
    },
    hamburgerCross: {
        url: "svg/hamburger.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"path" : "m 5.0916789,20.818994 53.8166421,0"}'
                },
                to: {
                    val: '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}'
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "s1 1", "opacity" : 1}',
                    before: '{"transform" : "s0 0"}'
                },
                to: {
                    val: '{"opacity" : 0}'
                }
            }
        }, {
            el: "path:nth-child(3)",
            animProperties: {
                from: {
                    val: '{"path" : "m 5.0916788,42.95698 53.8166422,0"}'
                },
                to: {
                    val: '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}'
                }
            }
        } ]
    },
    navLeftArrow: {
        url: "svg/nav-left-arrow.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "M 48.592939,9.792208 15.407062,31.887987 48.592939,54.025974"}'
                },
                to: {
                    val: '{"path" : "M 15.407062,9.792208 48.592939,31.887987 15.407062,54.025974"}'
                }
            }
        } ]
    },
    navUpArrow: {
        url: "svg/nav-up-arrow.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "M 9.8831175,48.502029 31.978896,15.316152 54.116883,48.502029"}'
                },
                to: {
                    val: '{"path" : "M 9.8831175,15.316152 31.978896,48.502029 54.116883,15.316152"}'
                }
            }
        } ]
    },
    rightArrow: {
        url: "svg/right-arrow.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "M 34.419061,13.24425 57.580939,32.017897 34.419061,50.75575"}'
                },
                to: {
                    val: '{"path" : "M 31.580939,13.24425 8.419061,32.017897 31.580939,50.75575"}'
                }
            }
        } ]
    },
    downArrow: {
        url: "svg/down-arrow.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "M 14.083963,33.258774 32.85761,56.420652 51.595463,33.258774"}'
                },
                to: {
                    val: '{"path" : "M 14.083963,30.420652 32.85761,7.258774 51.595463,30.420652"}'
                }
            }
        } ]
    },
    smiley: {
        url: "svg/smiley.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "m 19.380224,39.901132 c 0,0 4.860771,5.28501 12.770151,5.28501 7.909379,0 12.770152,-5.28501 12.770152,-5.28501"}'
                },
                to: {
                    val: '{"path" : "m 19.380224,45.186142 c 0,0 4.860771,-5.28501 12.770151,-5.28501 7.909379,0 12.770152,5.28501 12.770152,5.28501"}'
                }
            }
        } ]
    },
    play: {
        url: "svg/play.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "M 18.741071,52 31.30178,42.531655 45.258928,31.887987 18.741071,12 z"}'
                },
                to: {
                    val: '{"path" : "m 12.5,52 39,0 0,-40 -39,0 z"}'
                }
            }
        } ]
    },
    mail: {
        url: "svg/mail.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "m 61.693118,24.434001 -59.386236,0 29.692524,19.897984 z"}'
                },
                to: {
                    val: '{"path" : "m 61.693118,24.434001 -59.386236,0 29.692524,-19.7269617 z"}'
                }
            }
        } ]
    },
    equalizer: {
        url: "svg/equalizer.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"transform" : "t 0 0"}'
                },
                to: {
                    val: '{"transform" : "t 0 -30"}'
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "t 0 0"}'
                },
                to: {
                    val: '{"transform" : "t 0 35"}'
                }
            }
        }, {
            el: "path:nth-child(3)",
            animProperties: {
                from: {
                    val: '{"transform" : "t 0 0"}'
                },
                to: {
                    val: '{"transform" : "t 0 -10"}'
                }
            }
        } ]
    },
    glass: {
        url: "svg/glass.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "m 16.778805,44 c 0,0 9.518312,-3.481153 13.221195,-2 10,4 17.153596,2 17.153596,2 L 45,54 20,54 z"}'
                },
                to: {
                    val: '{"path" : "M 13.183347,29 C 13.183347,29 25,31.439358 30,29 c 12.710171,-6.200932 20,0 20,0 l -5,25 -25,0 z"}'
                }
            }
        } ]
    },
    hourglass: {
        url: "svg/hourglass.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"transform" : "r 0 32 32"}'
                },
                to: {
                    val: '{"transform" : "r 180 32 32"}'
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "r 0 32 32"}',
                    animAfter: '{"path" : "m 31,32 2,0 0,0 9,15 -20,0 9,-15 z"}'
                },
                to: {
                    val: '{"transform" : "r 180 32 32"}',
                    animAfter: '{"path" : "m 22,17 20,0 -9,15 0,0 -2,0 0,0 z"}'
                }
            }
        } ]
    },
    padlock: {
        url: "svg/padlock.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"transform" : "t 0 0"}'
                },
                to: {
                    val: '{"transform" : "t 0 -11"}'
                }
            }
        } ]
    },
    zoom: {
        url: "svg/zoom.svg",
        animation: [ {
            el: "path:nth-child(1)",
            animProperties: {
                from: {
                    val: '{"transform" : "s 1 1"}'
                },
                to: {
                    val: '{"transform" : "s 1.1 1.1"}'
                }
            }
        }, {
            el: "path:nth-child(2)",
            animProperties: {
                from: {
                    val: '{"transform" : "s 1 1", "stroke-width" : "1"}'
                },
                to: {
                    val: '{"transform" : "s 2 2", "stroke-width" : "2"}'
                }
            }
        } ]
    },
    monitor: {
        url: "svg/monitor.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "m 5,11.75 0,33.75 20.25,0 -6.75,6.75 27,0 -6.75,-6.75 20.25,0 0,-33.75 -54,0 z m 2.65625,2.875 48.6875,0 0,27.8125 -48.6875,0 0,-27.8125 z"}'
                },
                to: {
                    val: '{"path" : "m 21.875,16.8125 0,30.375 3.375,0 3.5,0 3.25,0 6.75,0 3.375,0 0,-30.375 -20.25,0 z m 3.375,3.375 13.5,0 0,20.25 -13.5,0 0,-20.25 z m 6.75,22.25 c 0.756641,0 1.375,0.618359 1.375,1.375 0,0.756641 -0.618359,1.375 -1.375,1.375 -0.756641,0 -1.375,-0.618359 -1.375,-1.375 0,-0.756641 0.618359,-1.375 1.375,-1.375 z"}'
                }
            }
        } ]
    },
    flag: {
        url: "svg/flag.svg",
        animation: [ {
            el: "path",
            animProperties: {
                from: {
                    val: '{"path" : "m 11.75,11.75 c 0,0 10.229631,3.237883 20.25,0 10.020369,-3.2378833 20.25,0 20.25,0 l 0,27 c 0,0 -6.573223,-3.833185 -16.007359,0 -9.434136,3.833185 -24.492641,0 -24.492641,0 z"}'
                },
                to: {
                    val: '{"path" : "m 11.75,11.75 c 0,0 8.373476,-4.8054563 17.686738,0 9.313262,4.805456 22.813262,0 22.813262,0 l 0,27 c 0,0 -11.699747,4.363515 -22.724874,0 C 18.5,34.386485 11.75,38.75 11.75,38.75 z"}'
                }
            }
        } ]
    }
};

(function(window) {
    "use strict";
    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    function hasClass(el, c) {
        return "classList" in document.documentElement ? el.classList.contains(c) : classReg(c).test(el.className);
    }
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }
    function mobilecheck() {
        var check = false;
        (function(a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
    function isMouseLeaveOrEnter(e, handler) {
        if (e.type != "mouseout" && e.type != "mouseover") return false;
        var reltg = e.relatedTarget ? e.relatedTarget : e.type == "mouseout" ? e.toElement : e.fromElement;
        while (reltg && reltg != handler) reltg = reltg.parentNode;
        return reltg != handler;
    }
    function svgIcon(el, config, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        this.svg = Snap(this.options.size.w, this.options.size.h);
        this.svg.attr("viewBox", "0 0 64 64");
        this.el.appendChild(this.svg.node);
        this.toggled = false;
        this.clickevent = mobilecheck() ? "touchstart" : "click";
        this.config = config[this.el.getAttribute("data-icon-name")];
        if (hasClass(this.el, "si-icon-reverse")) {
            this.reverse = true;
        }
        if (!this.config) return;
        var self = this;
        Snap.load(this.config.url, function(f) {
            var g = f.select("g");
            self.svg.append(g);
            self.options.onLoad();
            self._initEvents();
            if (self.reverse) {
                self.toggle();
            }
        });
    }
    svgIcon.prototype.options = {
        speed: 200,
        easing: mina.linear,
        evtoggle: "click",
        size: {
            w: 64,
            h: 64
        },
        onLoad: function() {
            return false;
        },
        onToggle: function() {
            return false;
        }
    };
    svgIcon.prototype._initEvents = function() {
        var self = this, toggleFn = function(ev) {
            if ((ev.type.toLowerCase() === "mouseover" || ev.type.toLowerCase() === "mouseout") && isMouseLeaveOrEnter(ev, this) || ev.type.toLowerCase() === self.clickevent) {
                self.toggle(true);
                self.options.onToggle();
            }
        };
        if (this.options.evtoggle === "mouseover") {
            this.el.addEventListener("mouseover", toggleFn);
            this.el.addEventListener("mouseout", toggleFn);
        } else {
            this.el.addEventListener(this.clickevent, toggleFn);
        }
    };
    svgIcon.prototype.toggle = function(motion) {
        if (!this.config.animation) return;
        var self = this;
        for (var i = 0, len = this.config.animation.length; i < len; ++i) {
            var a = this.config.animation[i], el = this.svg.select(a.el), animProp = this.toggled ? a.animProperties.from : a.animProperties.to, val = animProp.val, timeout = motion && animProp.delayFactor ? animProp.delayFactor : 0;
            if (animProp.before) {
                el.attr(JSON.parse(animProp.before));
            }
            if (motion) {
                setTimeout(function(el, val, animProp) {
                    return function() {
                        el.animate(JSON.parse(val), self.options.speed, self.options.easing, function() {
                            if (animProp.after) {
                                this.attr(JSON.parse(animProp.after));
                            }
                            if (animProp.animAfter) {
                                this.animate(JSON.parse(animProp.animAfter), self.options.speed, self.options.easing);
                            }
                        });
                    };
                }(el, val, animProp), timeout * self.options.speed);
            } else {
                el.attr(JSON.parse(val));
            }
        }
        this.toggled = !this.toggled;
    };
    window.svgIcon = svgIcon;
})(window);

var Init;

Init = function() {
    function Init() {
        this.$background = $("#background");
        this.$overlay = $("#overlay");
        this.randomBackground();
        this.download();
        this.svgIcons();
    }
    Init.prototype.randomBackground = function() {
        var backgroundUri, randomNumber;
        randomNumber = Math.floor(Math.random() * 50) + 1;
        backgroundUri = "url(/img/bg/" + randomNumber + ".png) no-repeat center center fixed";
        return this.$background.css("background", backgroundUri);
    };
    Init.prototype.download = function() {
        var hash;
        hash = location.hash;
        if (hash === "#download" || hash === "#d") {
            return $(".btn-download").each(function() {
                return $(this).removeClass("hidden");
            });
        }
    };
    Init.prototype.svgIcons = function() {
        return new svgIcon(document.querySelector(".si-icon-hamburger-cross"), svgIconConfig, {
            speed: 400,
            easing: mina.elastic,
            size: {
                w: 32,
                h: 32
            }
        });
    };
    return Init;
}();

$(document).ready(function() {
    return new Init();
});