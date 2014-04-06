/*! jQuery TubePlayer - v1.1.7 - 2013-09-24
 * https://github.com/nirvanatikku/jQuery-TubePlayer-Plugin
 * Copyright (c) 2013 Nirvana Tikku; Licensed MIT */
! function(a) {
    "use strict";

    function b() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 0 | 16 * Math.random(),
                c = "x" == a ? b : 8 | 3 & b;
            return c.toString(16)
        })
    }
    var c = ".tubeplayer",
        d = "jquery-youtube-tubeplayer",
        e = "opts" + c,
        f = {
            inited: !1,
            ytplayers: {},
            inits: [],
            iframeScriptInited: !1,
            State: {
                UNSTARTED: -1,
                ENDED: 0,
                PLAYING: 1,
                PAUSED: 2,
                BUFFERING: 3,
                CUED: 5
            },
            Error: {
                BAD_INIT: 0,
                INVALID_PARAM: 2,
                NOT_FOUND: 100,
                NOT_EMBEDDABLE: 101,
                CANT_PLAY: 150
            }
        };
    a.tubeplayer = {
        events: {},
        TubePlayer: f
    }, a.tubeplayer.defaults = {
        afterReady: function() {},
        stateChange: function(b) {
            var c = this.onPlayer;
            return function(d) {
                var e = a("#" + b).parent();
                switch ("object" == typeof d && (d = d.data), d) {
                    case f.State.UNSTARTED:
                        return c.unstarted[b].call(e);
                    case f.State.ENDED:
                        return c.ended[b].call(e);
                    case f.State.PLAYING:
                        return c.playing[b].call(e);
                    case f.State.PAUSED:
                        return c.paused[b].call(e);
                    case f.State.BUFFERING:
                        return c.buffering[b].call(e);
                    case f.State.CUED:
                        return c.cued[b].call(e);
                    default:
                        return null
                }
            }
        },
        onError: function(b) {
            var c = this.onErr;
            return function(d) {
                var e = a("#" + b).parent();
                switch ("object" == typeof d && (d = d.data), d) {
                    case f.Error.BAD_INIT:
                    case f.Error.INVALID_PARAM:
                        return c.invalidParameter[b].call(e);
                    case f.Error.NOT_FOUND:
                        return c.notFound[b].call(e);
                    case f.Error.NOT_EMBEDDABLE:
                    case f.Error.CANT_PLAY:
                        return c.notEmbeddable[b].call(e);
                    default:
                        return c.defaultError[b].call(e)
                }
            }
        },
        qualityChange: function(b) {
            var c = this;
            return function(d) {
                var e = a("#" + b).parent();
                return "object" == typeof d && (d = d.data), c.onQualityChange[b].call(e, d)
            }
        },
        onQualityChange: {},
        onPlayer: {
            unstarted: {},
            ended: {},
            playing: {},
            paused: {},
            buffering: {},
            cued: {}
        },
        onErr: {
            defaultError: {},
            notFound: {},
            notEmbeddable: {},
            invalidParameter: {}
        }
    };
    var g = {
        width: 425,
        height: 355,
        allowFullScreen: "true",
        initialVideo: "DkoeNLuMbcI",
        start: 0,
        preferredQuality: "auto",
        showControls: !0,
        showRelated: !1,
        playsinline: !1,
        annotations: !0,
        autoPlay: !1,
        autoHide: !0,
        loop: 0,
        theme: "dark",
        color: "red",
        showinfo: !1,
        modestbranding: !0,
        protocol: "http",
        wmode: "transparent",
        swfobjectURL: "ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",
        loadSWFObject: !1,
        allowScriptAccess: "always",
        playerID: "tubeplayer-player-container",
        iframed: !0,
        onPlay: function() {},
        onPause: function() {},
        onStop: function() {},
        onSeek: function() {},
        onMute: function() {},
        onUnMute: function() {},
        onPlayerUnstarted: function() {},
        onPlayerEnded: function() {},
        onPlayerPlaying: function() {},
        onPlayerPaused: function() {},
        onPlayerBuffering: function() {},
        onPlayerCued: function() {},
        onQualityChange: function() {},
        onError: function() {},
        onErrorNotFound: function() {},
        onErrorNotEmbeddable: function() {},
        onErrorInvalidParameter: function() {}
    };
    a.fn.tubeplayer = function(b, d) {
        var e = a(this),
            g = typeof b;
        return 0 === arguments.length || "object" === g ? e.each(function() {
            f.init(a(this), b)
        }) : "string" === g ? e.triggerHandler(b + c, "undefined" != typeof d ? d : null) : void 0
    };
    var h = function(a) {
        return function(b, c) {
            var d = f.getPkg(b);
            if (d.ytplayer) {
                var e = a(b, c, d);
                return "undefined" == typeof e && (e = d.$player), e
            }
            return d.$player
        }
    };
    a.tubeplayer.getPlayers = function() {
        return f.ytplayers
    }, f.init = function(h, j) {
        if (h.hasClass(d)) return h;
        var k = a.extend({}, g, j);
        k.playerID += "-" + b(), h.addClass(d).data(e, k);
        for (var l in i) h.bind(l + c, h, i[l]);
        return f.initDefaults(a.tubeplayer.defaults, k), a("<div></div>").attr("id", k.playerID).appendTo(h), f.initPlayer(h, k), h
    }, f.getPkg = function(a) {
        var b = a.data,
            c = b.data(e),
            d = f.ytplayers[c.playerID];
        return {
            $player: b,
            opts: c,
            ytplayer: d
        }
    }, f.iframeReady = function(b) {
        return f.inits.push(function() {
            new YT.Player(b.playerID, {
                videoId: b.initialVideo,
                width: b.width,
                height: b.height,
                playerVars: {
                    autoplay: b.autoPlay ? 1 : 0,
                    autohide: b.autoHide ? 1 : 0,
                    controls: b.showControls ? 1 : 0,
                    loop: b.loop ? 1 : 0,
                    playlist: b.loop ? b.initialVideo : "",
                    rel: b.showRelated ? 1 : 0,
                    fs: b.allowFullScreen ? 1 : 0,
                    wmode: b.wmode,
                    showinfo: b.showinfo ? 1 : 0,
                    modestbranding: b.modestbranding ? 1 : 0,
                    iv_load_policy: b.annotations ? 1 : 3,
                    start: b.start,
                    theme: b.theme,
                    color: b.color,
                    playsinline: b.playsinline
                },
                events: {
                    onReady: function(c) {
                        f.ytplayers[b.playerID] = c.target;
                        var e = a(c.target.getIframe()).parents("." + d);
                        a.tubeplayer.defaults.afterReady(e)
                    },
                    onPlaybackQualityChange: a.tubeplayer.defaults.qualityChange(b.playerID),
                    onStateChange: a.tubeplayer.defaults.stateChange(b.playerID),
                    onError: a.tubeplayer.defaults.onError(b.playerID)
                }
            })
        }), f.inits.length >= 1 && !f.inited ? function() {
            for (var a = 0; a < f.inits.length; a++) f.inits[a]();
            f.inited = !0
        } : (f.inited && f.inits.pop()(), window.onYouTubePlayerAPIReady)
    }, f.initDefaults = function(a, b) {
        var c = b.playerID,
            d = a.onPlayer;
        d.unstarted[c] = b.onPlayerUnstarted, d.ended[c] = b.onPlayerEnded, d.playing[c] = b.onPlayerPlaying, d.paused[c] = b.onPlayerPaused, d.buffering[c] = b.onPlayerBuffering, d.cued[c] = b.onPlayerCued, a.onQualityChange[c] = b.onQualityChange;
        var e = a.onErr;
        e.defaultError[c] = b.onError, e.notFound[c] = b.onErrorNotFound, e.notEmbeddable[c] = b.onErrorNotEmbeddable, e.invalidParameter[c] = b.onErrorInvalidParameter
    }, f.initPlayer = function(a, b) {
        b.iframed ? f.initIframePlayer(a, b) : f.initFlashPlayer(a, b)
    }, f.initIframePlayer = function(a, b) {
        if (!f.iframeScriptInited) {
            var c = document.createElement("script");
            c.src = b.protocol + "://www.youtube.com/iframe_api";
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(c, d), f.iframeScriptInited = !0
        }
        window.onYouTubePlayerAPIReady = f.iframeReady(b)
    }, f.initFlashPlayer = function(b, c) {
        c.loadSWFObject ? (c.swfobjectURL = c.swfobjectURL.replace("http://", ""), c.swfobjectURL = c.swfobjectURL.replace("https://", ""), c.swfobjectURL = c.protocol + "://" + c.swfobjectURL, a.getScript(c.swfobjectURL, f.init_flash_player(c))) : f.init_flash_player(c)()
    }, f.init_flash_player = function(b) {
        return function() {
            if (!window.swfobject) return alert("YouTube Player couldn't be initialized. Please include swfobject."), void 0;
            var c = ["//www.youtube.com/v/"];
            c.push(b.initialVideo), c.push("?&enablejsapi=1&version=3"), c.push("&playerapiid=" + b.playerID), c.push("&rel=" + (b.showRelated ? 1 : 0)), c.push("&autoplay=" + (b.autoPlay ? 1 : 0)), c.push("&autohide=" + (b.autoHide ? 1 : 0)), c.push("&loop=" + (b.loop ? 1 : 0)), c.push("&playlist=" + (b.loop ? b.initialVideo : "")), c.push("&controls=" + (b.showControls ? 1 : 0)), c.push("&showinfo=" + (b.showinfo ? 1 : 0)), c.push("&modestbranding=" + (b.modestbranding ? 1 : 0)), c.push("&iv_load_policy=" + (b.annotations ? 1 : 3)), c.push("&start=" + b.start), c.push("&theme=" + b.theme), c.push("&color=" + b.color), c.push("&playsinline=" + b.playsinline), c.push("&fs=" + (b.allowFullScreen ? 1 : 0)), window.swfobject.embedSWF(c.join(""), b.playerID, b.width, b.height, "8", null, null, {
                allowScriptAccess: b.allowScriptAccess,
                wmode: b.wmode,
                allowFullScreen: b.allowFullScreen
            }, {
                id: b.playerID
            }), window.onYouTubePlayerReady = function(b) {
                var c = document.getElementById(b),
                    e = b.replace(/-/g, ""),
                    g = a.tubeplayer.defaults;
                a.tubeplayer.events[e] = {
                    stateChange: g.stateChange(b),
                    error: g.onError(b),
                    qualityChange: g.qualityChange(b)
                }, c.addEventListener("onStateChange", "$.tubeplayer.events." + e + ".stateChange"), c.addEventListener("onError", "$.tubeplayer.events." + e + ".error"), c.addEventListener("onPlaybackQualityChange", "$.tubeplayer.events." + e + ".qualityChange"), f.ytplayers[b] = c;
                var h = a(c).parents("." + d);
                a.tubeplayer.defaults.afterReady(h)
            }
        }
    }, f.getVideoIDFromURL = function(a) {
        a = a || "";
        var b = a.indexOf("?"),
            c = a.substring(b, a.length),
            d = c.indexOf("v=");
        if (d > -1) {
            var e = c.indexOf("&", d);
            return -1 === e && (e = c.length), c.substring(d + "v=".length, e)
        }
        return ""
    };
    var i = {
        opts: h(function(a, b, c) {
            return c.opts
        }),
        cue: h(function(a, b, c) {
            c.ytplayer.cueVideoById(b, 0, c.opts.preferredQuality)
        }),
        play: h(function(a, b, c) {
            "object" == typeof b ? c.ytplayer.loadVideoById({
                videoId: b.id,
                startSeconds: b.time,
                suggestedQuality: c.opts.preferredQuality
            }) : "undefined" != typeof b ? c.ytplayer.loadVideoById({
                videoId: b,
                startSeconds: 0,
                suggestedQuality: c.opts.preferredQuality
            }) : c.ytplayer.playVideo(), c.opts.onPlay(b)
        }),
        pause: h(function(a, b, c) {
            c.ytplayer.pauseVideo(), c.opts.onPause(c)
        }),
        stop: h(function(a, b, c) {
            c.ytplayer.stopVideo(), c.opts.onStop(c)
        }),
        seek: h(function(a, b, c) {
            if (/:/.test(b)) {
                var d = b.split(":").reverse();
                b = 0;
                for (var e = 0; e < d.length; e++) b += Math.pow(60, e) * (0 | d[e])
            }
            c.ytplayer.seekTo(b, !0), c.opts.onSeek(b)
        }),
        mute: h(function(a, b, c) {
            c.$player.attr("data-prev-mute-volume", c.ytplayer.getVolume()), c.ytplayer.mute(), c.opts.onMute(c)
        }),
        unmute: h(function(a, b, c) {
            c.ytplayer.unMute(), c.ytplayer.setVolume(c.$player.attr("data-prev-mute-volume") || 50), c.opts.onUnMute()
        }),
        isMuted: h(function(a, b, c) {
            return c.ytplayer.isMuted()
        }),
        volume: h(function(a, b, c) {
            return "undefined" == typeof b ? c.ytplayer.getVolume() || 0 : (c.ytplayer.setVolume(b), c.$player.attr("data-prev-mute-volume", c.ytplayer.getVolume()), void 0)
        }),
        quality: h(function(a, b, c) {
            return "undefined" == typeof b ? c.ytplayer.getPlaybackQuality() : (c.ytplayer.setPlaybackQuality(b), void 0)
        }),
        playbackRate: h(function(a, b, c) {
            return "undefined" == typeof b ? c.ytplayer.getPlaybackRate() : (c.ytplayer.setPlaybackRate(b), void 0)
        }),
        data: h(function(a, b, c) {
            var d = {}, e = c.ytplayer;
            return d.videoLoadedFraction = e.getVideoLoadedFraction(), d.bytesLoaded = e.getVideoBytesLoaded(), d.bytesTotal = e.getVideoBytesTotal(), d.startBytes = e.getVideoStartBytes(), d.state = e.getPlayerState(), d.currentTime = e.getCurrentTime(), d.duration = e.getDuration(), d.videoURL = e.getVideoUrl(), d.videoEmbedCode = e.getVideoEmbedCode(), d.videoID = f.getVideoIDFromURL(d.videoURL), d.availableQualityLevels = e.getAvailableQualityLevels(), d.availablePlaybackRates = e.getAvailablePlaybackRates(), d
        }),
        videoId: h(function(a, b, c) {
            return f.getVideoIDFromURL(c.ytplayer.getVideoUrl())
        }),
        size: h(function(b, c, d) {
            "undefined" != typeof c && c.width && c.height && (d.ytplayer.setSize(c.width, c.height), a(d.ytplayer).css(c))
        }),
        destroy: h(function(b, g, h) {
            h.$player.removeClass(d).data(e, null).unbind(c).html(""), delete f.ytplayers[h.opts.playerID];
            var i = a.tubeplayer.defaults,
                j = ["unstarted", "ended", "playing", "paused", "buffering", "cued"];
            return a.each(j, function(a, b) {
                delete i.onPlayer[b][h.opts.playerID]
            }), j = ["defaultError", "notFound", "notEmbeddable", "invalidParameter"], a.each(j, function(a, b) {
                delete i.onErr[b][h.opts.playerID]
            }), delete i.onQualityChange[h.opts.playerID], delete a.tubeplayer.events[h.opts.playerID], "destroy" in h.ytplayer && h.ytplayer.destroy(), a(h.ytplayer).remove(), null
        }),
        player: h(function(a, b, c) {
            return c.ytplayer
        })
    }
}(jQuery);