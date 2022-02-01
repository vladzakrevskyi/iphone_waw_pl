/**
 *    ThemeMountain Timber Framework
 *    Version: 1.1.4
 *    URL: @ThemeMountain
 */

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-54904032-4', 'auto');
ga('send', 'pageview');

$(function () {

    "use strict";

    // Version
    var versionNumber = 'v.1.1.5';
    $('.version-number').each(function () {
        var text = $(this).text();
        $(this).text(text + ' ' + versionNumber);
    });

    // download link
    $('.download-link').attr('href', 'http://download.thememountain.com/framework/framework_download_' + versionNumber + '.zip');

    // Code blocks
    $('.code-snippet').each(function (i) {

        // Some variables
        var pre = $(this).find('pre');
        var code = $(this).find('code');
        var content = code.html();
        var ctcButton;
        var copyCode;

        // Create and append ctc button
        ctcButton = $('<button data-clipboard-target="#snippet-' + i + '" class="button rounded small bkg-charcoal color-white bkg-hover-charcoal-light color-hover-white copy-to-clipboard">Copy</button>');
        code.attr('id', 'snippet-' + i);
        ctcButton.appendTo(pre);

        // Add clipboard event
        copyCode = new Clipboard('.copy-to-clipboard');
        copyCode.on('success', function (event) {
            event.clearSelection();
            event.trigger.textContent = 'Copied';
            window.setTimeout(function () {
                event.trigger.textContent = 'Copy';
            }, 2000);
        });
        copyCode.on('error', function (event) {
            event.trigger.textContent = 'Press "Ctrl + C" to copy';
            window.setTimeout(function () {
                event.trigger.textContent = 'Copy';
            }, 2000);
        });

        // Format code

        // Check script or link tags are already escaped
        if (code.text().indexOf('script') >= 0 || code.text().indexOf('link') >= 0) code.addClass('escaped');

        // Escape and handle indentation
        var tabs = content.match(/\s*\n[\t\s]*/);
        code.html(content.replace(new RegExp(tabs, 'g'), '\n'));
        code.html(escapeHtml(code.html()));

        function escapeHtml(text) {
            var chars = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '`': '>',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>`"']/g, function (m) {
                return chars[m];
            });
        }

        // Format escaped sections
        if (code.hasClass('escaped')) {
            var scriptTag = $('<div/>').html(code.text()).text();
            code.text(scriptTag);
        }
    });
});

/**
 *    Swipe Plugin
 *    Version: 1.0
 */
!function (t) {
    "use strict";
    t.fn.swipeIt = function (i) {
        var e = t.extend({
                swipeThreshold: 40,
                scrollThreshold: 10,
                draggable: !1,
                preventTouchOn: "",
                onSwipeMove: null,
                onSwipeEnd: null
            }, i), a = this, n = 0, s = 0, o = e.swipeThreshold, r = "ontouchend" in document,
            d = r ? "touchstart" : "pointerdown", c = r ? "touchmove" : "pointermove",
            l = r ? "touchend" : "pointermove", u = function (t) {
                t.stopPropagation(), n = t.originalEvent.touches ? t.originalEvent.touches[0].pageX : t, a.on(c, h)
            }, h = function (i) {
                if (!t(i.target).closest(e.preventTouchOn).length || "" === e.preventTouchOn) {
                    if (s = i.originalEvent.touches ? i.originalEvent.touches[0].pageX : i, Math.abs(n - s) > e.scrollThreshold && i.preventDefault(), e.draggable) {
                        var o;
                        o = -(n - s), e.onSwipeMove(o)
                    }
                    if (s === n) return !1;
                    a.on(l, p)
                }
            }, p = function () {
                var t;
                Math.abs(s - n) > o && (t = s > n ? "left" : "right", e.onSwipeEnd(t)), a.off(c, h), a.off(l, p)
            };
        return a.on(d, u), this
    }
}(jQuery);
/**
 *    Timber
 *    Version: 1.1.4
 */
$(document).ready(function () {
    "use strict";
    var a, b = ea ? "touchstart" : "click", c = ".wrapper", d = ".element-reveal-left", e = ".element-reveal-right",
        f = ".side-navigation-wrapper", g = ".side-nav-show, a.side-nav-show", h = ".side-nav-hide a", i = ".no-scroll",
        j = ".element-show-left", k = ".element-show-right", l = "easeInOutQuint", m = {
            init: function () {
                if (!$(f).length) return !1;
                $("body").data("aux-nav", !1);
                var a = $(f).data("animation") ? $(f).data("animation") : "no-transition",
                    n = $(f).is("[data-no-scrollbar]") ? "no-scrollbar" : "scrollbar";
                "no-transition" === a && $(c).addClass(a + "-reset"), $(c).addClass("reveal-side-navigation"), $(f).addClass(a + "-reset " + n);
                var o = $(f).hasClass("enter-right") ? "right" : "left";
                _ ? p = "left" === o ? d : e : (p = "left" === o ? j : k, $(f).addClass("hide"));
                var p = p.split(".").join("");
                i = i.split(".").join(""), $(g).on(b, function (d) {
                    if (d.preventDefault(), $(f).hasClass("active")) m.closeNav(p, a); else {
                        A.state(!0), y.state(!0), $("body").data("aux-nav", !0), $("html, body").addClass(i);
                        var e = $(window).scrollTop();
                        ea || $(".header-inner").css({top: e + "px"}), _ ? ($(c).addClass(p + " inactive " + a).css({transitionTimingFunction: da[l]}), $(f).addClass("active " + a).css({transitionTimingFunction: da[l]})) : ($(c).addClass(p), $(f).removeClass("hide").addClass("active")), $(c).on(ca, function (c) {
                            return c.target === $(this)[0] && (c.stopPropagation(), $(this).off(ca), void $(".reveal-side-navigation").on(b, function (c) {
                                $(".reveal-side-navigation").off(b), m.closeNav(p, a)
                            }))
                        })
                    }
                }), $(h).on(b, function (c) {
                    c.preventDefault(), $(".reveal-side-navigation").off(b), m.closeNav(p, a)
                }), $(window).on("resize", function () {
                    $("body").data("aux-nav") ? y.state(!0) : y.state(!1)
                })
            }, closeNav: function (a, b) {
                _ ? (A.state(!0), $(c).removeClass(a + " " + b), $(f).removeClass(b), "no-transition" === b && ($("html, body").removeClass(i), $(c).removeClass("inactive"), $(f).removeClass("active")), $(c).on(ca, function (a) {
                    return a.target === $(this)[0] && (a.stopPropagation(), y.state(!1), $(this).off(ca), $("html, body").removeClass(i), $(c).removeClass("inactive"), $(f).removeClass("active"), void (ea || $(".header-inner").css({top: 0})))
                })) : ($(c).removeClass(a + " " + b), $(f).addClass("hide").removeClass("active")), $("body").data("aux-nav", !1)
            }
        }, n = ".overlay-navigation-wrapper", o = ".overlay-navigation-inner",
        p = ".overlay-nav-show a, a.overlay-nav-show",
        q = ".overlay-nav-hide a, .one-page-nav .overlay-navigation .scroll-link", r = ".no-scroll",
        s = "easeInOutQuint", t = {
            init: function () {
                if (!$(n).length) return !1;
                var a = $(n).data("animation") ? $(n).data("animation") : "no-transition",
                    c = $(n).is("[data-no-scrollbar]") ? "no-scrollbar" : "scrollbar";
                $(n).addClass(a + "-reset " + c), r = r.split(".").join(""), $(p).on(b, function (b) {
                    b.preventDefault(), $(n).hasClass("active") ? t.closeNav(a) : ($("body").data("aux-nav", !0), $("html, body").addClass(r), _ ? $(n).addClass("active " + a).css({transitionTimingFunction: da[s]}) : $(n).addClass("active"), $(n).on(ca, function (a) {
                        return a.target === $(this)[0] && (a.stopPropagation(), y.state(!0), void $(this).off(ca))
                    }))
                }), $(o).on(b, function (b) {
                    b.target === this && t.closeNav(a)
                }), $(q).on(b, function (b) {
                    b.preventDefault(), t.closeNav(a)
                }), $(window).on("resize", function () {
                    $("body").data("aux-nav") ? y.state(!0) : y.state(!1)
                })
            }, closeNav: function (a) {
                _ ? ($(n).removeClass(a), "no-transition" === a && ($("html, body").removeClass(r), $(n).removeClass("active")), $(n).on(ca, function (a) {
                    return a.target === $(this)[0] && (a.stopPropagation(), y.state(!1), $(this).off(ca), $("html, body").removeClass(r), void $(n).removeClass("active"))
                })) : $(n).removeClass("active").css({top: "-100%"}), $("body").data("aux-nav", !1)
            }
        }, u = ".side-navigation-wrapper, .overlay-navigation-wrapper", v = ".sub-menu", w = ".contains-sub-menu", x = {
            init: function () {
                $(u).find(w).each(function () {
                    var a, c;
                    $(this).parent().hasClass("current") && (a = $(this).siblings(v).children(), c = 0, a.each(function () {
                        c += $(this).outerHeight()
                    }), $(this).siblings(v).addClass("open").css({height: c + "px"})), $(this).on(b, function (b) {
                        b.preventDefault(), $(this).parent().hasClass("current") ? $(u).find("nav").children("ul").children().removeClass("current") : ($(u).find("nav").children("ul").children().removeClass("current"), $(this).parent().addClass("current")), A.state(!0), a = $(this).siblings(v).children(), c = 0, a.each(function () {
                            c += $(this).outerHeight()
                        }), $(this).siblings(v).hasClass("open") ? $(this).closest(u).find(v).css({height: 0}).removeClass("open") : ($(this).closest(u).find(v).css({height: 0}).removeClass("open"), $(this).siblings(v).css({height: c + "px"}), $(this).siblings(v).addClass("open"))
                    })
                })
            }
        }, y = {
            state: function (a) {
                ea ? a ? $("body").addClass("aux-navigation-active") : $("body").removeClass("aux-navigation-active") : a ? $("body").addClass("aux-navigation-active") : $("body").data("aux-nav") || $("body").removeClass("aux-navigation-active")
            }
        }, z = ".header, .header-inner, .logo, .logo a, .header .navigation", A = {
            init: function () {
                ea || $(window).on("scroll", function () {
                    A.state(!0)
                }), $(window).on("resize", function () {
                    A.state(!1)
                })
            }, state: function (a) {
                a ? $(z).removeClass("no-transition") : $(z).addClass("no-transition")
            }
        }, B = 300, C = ".scroll-to-top", D = 600, E = {
            init: function () {
                $(window).on("scroll", function () {
                    return !$(C).is("[data-no-hide]") && void ($(this).scrollTop() > B ? $(C).fadeIn(D) : $(C).fadeOut(D))
                }), $(C).on(b, function (a) {
                    a.preventDefault(), E.scrollUp()
                })
            }, scrollUp: function () {
                $("html, body").animate({scrollTop: 0}, D)
            }
        }, F = ".header", G = ".tabs", H = ".tab-trigger-click", I = ".accordion", J = "icon-plus", K = "icon-minus",
        L = ".accordion-content", M = ".accordion-trigger-click", N = ".box.dismissable", O = 300, P = "swing",
        Q = ".dropdown", R = ".thumbnail", S = ".overlay-info, img", T = ".overlay-info", U = 400, V = "easeInOutQuint",
        W = ".background-image-container", X = {
            init: function () {
                X.tabs(), X.accordions(), X.dismissable(), X.dropdown(), X.rollovers(), X.thumbnailRatio(), X.setAsBackground()
            }, tabs: function () {
                $(G).each(function () {
                    var a = $(this).children(".tab-nav").find("li > a");
                    $(this).find(".tab-panes > .active").addClass("animate-in"), a.each(function () {
                        $(this).on(b, function () {
                            var a = $(this).attr("href"), b = $(this).closest(".tabs").find(a);
                            if ($(this).closest(".tab-nav").find(".active").removeClass("active"), $(this).parent().addClass("active"), $(this).closest(".tabs").find(".tab-panes > .active").removeClass("active animate-in"), b.addClass("active"), b.find(".tm-slider-container").length > 0) {
                                var c = b.find(".tm-slider-container").data("avalancheSlider");
                                c.resizeSlider()
                            }
                            var d = null;
                            return clearTimeout(d), d = setTimeout(function () {
                                b.addClass("animate-in")
                            }, 50), !1
                        }), $(this).parent().hasClass("active") && $(this).closest(".tabs").find($(this).attr("href")).addClass("active")
                    })
                }), $(H).each(function () {
                    $(this).on("click", function () {
                        var a = $(this).data("target-tab");
                        return $(G).find(a).trigger("click"), !1
                    })
                })
            }, accordions: function () {
                $(I).each(function () {
                    var a = $(this).children().children().children("a");
                    a.each(function () {
                        $(this).closest(I).is("[data-toggle-icon]") && ($(this).find("span").length || $(this).parent().hasClass("active") ? !$(this).find("span").length && $(this).parent().hasClass("active") && $(this).prepend('<span class="' + K + '" />') : $(this).prepend('<span class="' + J + '" />')), $(this).on(b, function () {
                            var a = $(this), b = a.attr("href"), c = a.closest(I).find(b),
                                d = a.closest(I).find(L).parent();
                            a.closest(I).children().children(".active").children("div").each(function () {
                                var a = $(this).children().outerHeight();
                                $(this).addClass("no-transition").css({height: a + "px"})
                            });
                            var e = null;
                            return clearTimeout(e), e = a.parent().hasClass("active") ? setTimeout(function () {
                                a.closest(I).is("[data-toggle-multiple]") ? a.siblings(c).removeClass("no-transition").css({height: 0}) : a.siblings("div").removeClass("no-transition").css({height: 0}), a.parent().removeClass("active")
                            }, 50) : setTimeout(function () {
                                var b = a.siblings(c).find(L).outerHeight();
                                a.closest(I).is("[data-toggle-multiple]") || (d.removeClass("no-transition").css({height: 0}), a.closest(I).children().children("li").removeClass("active")), a.parent().addClass("active"), a.siblings(c).removeClass("no-transition").css({height: b + "px"})
                            }, 50), a.find("." + K).length ? a.find("." + K).removeClass(K).addClass(J) : a.find("." + J).length && (a.closest(I).is("[data-toggle-multiple]") || a.closest("ul").find("." + K).removeClass(K).addClass(J), a.find("." + J).removeClass(J).addClass(K)), !1
                        })
                    }), $(M).each(function () {
                        $(this).on("click", function () {
                            var a = $(this).data("target-accordion");
                            return $(I).find(a).trigger("click"), !1
                        })
                    }), $(window).on("resize", function () {
                        $(I).each(function () {
                            $(this).children().children(".active").children("div").addClass("no-transition").css({height: "auto"})
                        })
                    })
                })
            }, dismissable: function () {
                $(N).each(function () {
                    $(this).find(".close").length || $(this).prepend('<a href="" class="close icon-cancel" />'), $(this).find(".close").on(b, function (a) {
                        a.preventDefault(), _ ? $(this).parent().css({
                            transitionProperty: "opacity",
                            opacity: 0,
                            transitionDuration: O + "ms",
                            transitionTimingFunction: da[P]
                        }).on(ca, function (a) {
                            return a.stopPropagation(), a.target === $(this)[0] && void $(this).remove()
                        }) : $(this).parent().animate({opacity: 0}, U, P, function () {
                            $(this).remove()
                        })
                    })
                })
            }, dropdown: function () {
                $(Q).each(function () {
                    $(this).children(".button, button").not().each(function () {
                        $(this).on(b, function (b) {
                            b.preventDefault(), $(Q).children(".button, button").removeClass("active");
                            var c = $(this).parent().children(".dropdown-list");
                            return !$(this).parent().hasClass("disabled") && ($(".dropdown-list").not($(c)).removeClass("active"), $(c).hasClass("active") ? ($(c).removeClass("active"), $(this).removeClass("active")) : ($(c).addClass("active"), $(this).addClass("active")), void $(document).on("click.closeDropdown", function (b) {
                                $(b.target).closest(Q).length || a()
                            }))
                        }), $(this).parent().children(".dropdown-list").find("li a").on(b, function (a) {
                            a.preventDefault(), $(".dropdown-list").removeClass("active"), $(this).removeClass("active")
                        }), ea || $(window).on("scroll", function () {
                            a()
                        }), $(F).find(".navigation > ul > li > a").mouseenter(function () {
                            a()
                        });
                        var a = function () {
                            $(Q).each(function () {
                                $(this).find(".button, button").removeClass("active"), $(this).find(".dropdown-list").removeClass("active")
                            }), $(document).off("click.closeDropdown")
                        }
                    })
                })
            }, rollovers: function () {
                _ ? $(R).each(function () {
                    var a, b = $(this).data("hover-speed") ? $(this).data("hover-speed") : U,
                        c = $(this).data("hover-easing") ? $(this).data("hover-easing") : V,
                        d = $(this).data("hover-bkg-opacity") ? $(this).data("hover-bkg-opacity") : 1;
                    if ($(this).data("hover-bkg-color")) {
                        var e = $(this).data("hover-bkg-color");
                        e = e.replace("#", "");
                        var f = parseInt(e.substring(0, 2), 16), g = parseInt(e.substring(2, 4), 16),
                            h = parseInt(e.substring(4, 6), 16);
                        a = "rgba( " + f + "," + g + "," + h + "," + d / 1 + " )"
                    } else a = $(this).find(T).css("background-color");
                    $(this).find(S).css({
                        transitionDuration: b + "ms",
                        transitionTimingFunction: da[c]
                    }), $(this).find(T).css({backgroundColor: a})
                }) : $(R).find(".overlay-link").mouseenter(function () {
                    $(this).find(T).css({opacity: 0}).stop().animate({opacity: 1}, U, V)
                }).mouseleave(function () {
                    $(this).find(T).stop().animate({opacity: 0}, U, V)
                })
            }, thumbnailRatio: function () {
                $(window).on("resize", function () {
                    $(R).each(function () {
                        if ($(this).find(".caption-over-outer").length) {
                            var a = $(this).find("img, video"), b = a.attr("width"), c = a.attr("height"),
                                d = $(this).find("img, video").width(), e = b >= c ? b / c : c / b,
                                f = b >= c ? d / e : d * e;
                            $(this).find(".caption-over-outer").css({opacity: 1}), $(this).css({height: f + "px"})
                        }
                    })
                }).resize()
            }, setAsBackground: function () {
                $(W).each(function () {
                    var a = $(this).children("img").attr("src");
                    $(this).css({"background-image": "url(" + a + ")"})
                })
            }
        }, Y = document.body || document.documentElement, Z = Y.style,
        _ = void 0 !== Z.transition || void 0 !== Z.WebkitTransition || void 0 !== Z.MozTransition || void 0 !== Z.MsTransition || void 0 !== Z.OTransition,
        aa = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var ba in aa) void 0 !== Z[aa[ba]] && (a = "-" + aa[ba].replace("Transform", "").toLowerCase());
    var ca = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
    _ && (document.getElementsByTagName("body")[0].className += " transition-support");
    var da = {
        linear: "cubic-bezier(0, 0, 1, 1)",
        swing: "cubic-bezier(0.42, 0, 0.58, 1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    window.onpageshow = function (a) {
        a.persisted && $("body").addClass("page-fade-reset").removeClass("page-fade-out")
    };
    var ea = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (ea = !0, document.getElementsByTagName("body")[0].className += " mobile");
    var fa = "WebkitAppearance" in document.documentElement.style;
    fa && (document.getElementsByTagName("body")[0].className += " webkit");
    var ga = /constructor/i.test(window.HTMLElement);
    ga && (document.getElementsByTagName("body")[0].className += " safari-browser");
    var ha = document.all && document.addEventListener || "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
    ha && (document.getElementsByTagName("body")[0].className += " ie-browser");
    var ia = document.all && document.addEventListener;
    ia && (document.getElementsByTagName("body")[0].className += " ie-be-11", $(".flex").removeClass("flex").addClass("equalize")), m.init(), t.init(), x.init(), A.init(), E.init(), X.init()
});
/**
 *    Avalanche Slider
 *    Version: 1.2.0
 */
!function (a, b, c, d) {
    "use strict";

    function e(b) {
        b.find(".tms-caption").each(function () {
            function b() {
                a.each(d, function (a, b) {
                    b = b.split(":");
                    var d = b[0], e = b[1];
                    "opacity" === d && c.data("o", e), "scale" === d && c.data("s", e), "easing" === d && c.data("e", e), "transX" === d && c.data("tx", parseFloat(e)), "transY" === d && c.data("ty", parseFloat(e)), "transZ" === d && c.data("tz", parseFloat(e)), "rotateX" === d && c.data("rx", parseFloat(e)), "rotateY" === d && c.data("ry", parseFloat(e)), "rotateZ" === d && c.data("rz", parseFloat(e)), "transOrigX" === d && c.data("ox", e), "transOrigY" === d && c.data("oy", e), "duration" === d && c.data("du", parseFloat(e)), "delay" === d && c.data("de", parseFloat(e))
                })
            }

            var c = a(this), d = String(c.data("animate-in")).split(";");
            c.is("[data-no-scale]") ? c.addClass("no-scale") : c.addClass("scale"), c.parent().addClass("tms-perspective"), a.inArray("preset", String(d).split(":")) != -1 ? d.filter(function (c) {
                if ("preset" === c.split(":")[0]) {
                    d.splice(a.inArray(c, d), 1);
                    var e = String(K[c.split(":")[1]]).split(";");
                    d = a.merge(e, d).filter(Boolean), b()
                }
            }) : b(), c.data("w", parseFloat(c.css("width"))), c.data("h", parseFloat(c.css("height"))), c.data("fs", parseFloat(c.css("font-size"))), c.data("lh", parseFloat(c.css("line-height"))), c.data("pt", parseFloat(c.css("padding-top"))), c.data("pr", parseFloat(c.css("padding-right"))), c.data("pb", parseFloat(c.css("padding-bottom"))), c.data("pl", parseFloat(c.css("padding-left"))), c.data("mt", parseFloat(c.css("margin-top"))), c.data("mr", parseFloat(c.css("margin-right"))), c.data("mb", parseFloat(c.css("margin-bottom"))), c.data("ml", parseFloat(c.css("margin-left"))), c.data("bt", parseFloat(c.css("border-top-width"))), c.data("br", parseFloat(c.css("border-right-width"))), c.data("bb", parseFloat(c.css("border-bottom-width"))), c.data("bl", parseFloat(c.css("border-left-width")))
        })
    }

    function f(b, d, e) {
        var f = b.find(".tms-slide"), h = 0;
        f.each(function () {
            var f = a(this), i = f.find("img").length, j = f.find("iframe, video").length;
            f.children(".tms-caption").length;
            u(f, d);
            var k = a('<div class="tm-loader"><div id="circle" /></div>');
            if (i > 0 && (d.lazyLoad ? k.appendTo(f) : a(b).find(".tm-loader").length || k.appendTo(b)), j) {
                L && f.is("[data-video-bkg]") && f.children("video").css({display: "none"});
                var l = f.find("iframe, video");
                z(b, l, d), s(f, d), r(b, d)
            }
            i ? f.find("img").each(function (b, j) {
                if (!a(this).attr("srcset")) {
                    j = a(this).data("src");
                    var k = j, l = j.substr(j.lastIndexOf("."));
                    (c.isRetinaDevice() && d.retinaSupport || c.isRetinaDevice() && a(this).is("[data-retina]")) && (!L && !d.retinaSupportMobile || L && d.retinaSupportMobile) && (j.match(/\.(svg)/i) || (j = a(this).data("retina") ? a(this).data("retina") : a(this).data("src").replace(l, d.retinaSuffix + l)))
                }
                if (f.data("overlay-bkg-color") && !f.find(".tms-overlay").length) var m = f.data("overlay-bkg-color").replace("#", ""),
                    n = f.data("overlay-bkg-opacity") ? f.data("overlay-bkg-opacity") : .5,
                    o = parseInt(m.substring(0, 2), 16), p = parseInt(m.substring(2, 4), 16),
                    q = parseInt(m.substring(4, 6), 16), r = "rgba( " + o + "," + p + "," + q + "," + n / 1 + " )",
                    s = a('<div class="tms-overlay" />').css({backgroundColor: r, opacity: 0}).appendTo(f);
                a(this).css({opacity: 0}).attr("src", j).one("error", function () {
                    a(this).attr("src", k), console.log("Error src:" + j)
                }).one("load", function () {
                    f.css({
                        transition: "none",
                        opacity: 0
                    }), f.find(s).css({opacity: 1}), a(this).data("loaded", !0).css({opacity: 1}), b++, b === i && (h++, g(f, h, d, e))
                })
            }) : (h++, r(b, d), g(f, h, d, e))
        })
    }

    function g(b, c, d, e) {
        var f = b.closest(".tm-slider-container"), g = f.find(".tms-slides"), i = f.find("li.active"), j = null,
            k = null, l = !(!b.is("[data-video-bkg-youtube]") && !b.is("[data-video-bkg-vimeo]"));
        if (b.find(".no-transition").css({visibility: "visible"}), f.data("setup", !0), f.data("first-load", !1), f.data("animate-first-slide", !0), b.is("[data-as-bkg-image]") || b.is("[data-video-bkg]") || l) {
            var n = b.children("img").attr("src"), p = b.data("image-wrapper") ? b.data("image-wrapper") : b;
            b.data("image-wrapper") ? b.find("." + p).css({"background-image": "url(" + n + ")"}) : b.css({"background-image": "url(" + n + ")"}), b.children("img").hide()
        }
        if (0 === f.height() && !f.data("height") && b.hasClass("active")) {
            i.children("img").css({maxHeight: "none"});
            var q = i.children("img").height();
            f.data("refH", q), f.css({height: q + "px"}), i.children("img").css({maxHeight: "100%"})
        }
        if (s(b, d), r(f, d), d.carousel && !d.lazyLoad && (g.children().css({opacity: 1}), g.css({opacity: 0})), l || b.find("iframe, video").css({opacity: 1}), c === g.children().length && d.onLoadEnd && d.onLoadEnd(), d.lazyLoad || c !== g.children().length ? d.lazyLoad && 1 === c && (f.data("loaded", !0), d.autoAdvance && e.initSlideshow()) : (f.data("loaded", !0), d.autoAdvance && e.initSlideshow()), d.lazyLoad) {
            if ((b.find(".tm-loader").length && !l || L) && h(f, b, d), (b.is(i) || d.carouselVisible > 1) && b.find(".tms-caption").show(), !b.hasClass("active")) return !1;
            E ? (clearTimeout(k), k = setTimeout(function () {
                m(i, 1, 0, 0, 0, 0, 0, 0, 1, "50%", "50%", 1e3, 0, "easeIn", d)
            }, 50)) : b.animate({opacity: 1}), l && !L || (clearTimeout(j), j = setTimeout(function () {
                i.find(".tms-caption").length > 0 && o(i, d), i.find(".tms-content-scalable").length > 0 && a(".tms-content-scalable").css({opacity: 1})
            }, 300))
        } else c === g.children().length && ((f.find(".tm-loader").length && !l || L) && h(f, b, d), i.find(".tms-caption").show(), d.carouselVisible > 1 && f.find(".tms-caption").show(), E ? d.carousel ? m(g, 1, 0, 0, 0, 0, 0, 0, 1, "50%", "50%", 1e3, 0, "easeIn", d) : m(i, 1, 0, 0, 0, 0, 0, 0, 1, "50%", "50%", 1e3, 0, "easeIn", d) : d.carousel ? g.animate({opacity: 1}) : i.animate({opacity: 1}), l && !L || (clearTimeout(j), j = setTimeout(function () {
            i.find(".tms-caption").length > 0 && o(i, d), i.find(".tms-content-scalable").length > 0 && a(".tms-content-scalable").css({opacity: 1})
        }, 300)), f.find(".tms-arrow-nav, .tms-pagination").css({display: "block"}))
    }

    function h(a, b, c) {
        var d = ".tm-loader";
        c.lazyLoad ? b.find(d).remove() : a.find(d).remove()
    }

    var i = function (d, g) {
        var h, i = a.extend({}, a.fn.avalancheSlider.tmsOpts, g), l = a(d), o = this,
            t = i.fulscreen ? a(c).width() : i.fullwidth ? i.scaleUnder : l.data("width") ? parseFloat(l.data("width")) : parseFloat(l.css("width")),
            v = i.fulscreen ? a(c).height() : l.data("height") ? parseFloat(l.data("height")) : parseFloat(l.css("height")),
            w = l.find(".tms-slides"), x = w.children("li:first-child").addClass("active"), y = [];
        if (w.children(".tms-slide").each(function (b) {
            b++, a(this).attr("id", "tms-slide-" + b), y.push(a(this).attr("id")), i.carousel || (E ? a(this).not(".active").css({
                transition: "none",
                transform: "translate3d( 100%, 0, 0)"
            }) : a(this).not(".active").css({left: "100%"}));
            var c = !!(a(this).is("[data-video-bkg]") || a(this).is("[data-video-bkg-youtube]") || a(this).is("[data-video-bkg-vimeo]"));
            (i.forceFit || a(this).is("[data-force-fit]") || c) && a(this).addClass("tms-forcefit"), c && a(this).addClass("tms-bkg-video"), a(this).is("[data-video-bkg-youtube]") && a(this).addClass("tms-bkg-video-youtube"), a(this).is("[data-video-bkg-vimeo]") && a(this).addClass("tms-bkg-video-vimeo")
        }), i.lazyLoad || x.css({opacity: 0}), i.scaleUnder = l.data("scale-under") ? l.data("scale-under") : i.scaleUnder, i.scaleMinHeight = l.data("scale-min-height") ? l.data("scale-min-height") : i.scaleMinHeight, i.animation = l.data("animation") ? l.data("animation") : i.animation, h = i.animation, i.easing = l.data("easing") ? l.data("easing") : i.easing, i.speed = l.data("speed") ? l.data("speed") : i.speed, i.carousel = l.data("carousel") ? l.data("carousel") : i.carousel, i.carouselVisible = l.data("carousel-visible-slides") ? l.data("carousel-visible-slides") : i.carouselVisible, i.carouselVisible = i.carouselVisible > w.children().length ? w.children().length : i.carouselVisible, i.showProgressBar = !l.is('[data-progress-bar="false"]') && i.showProgressBar, i.autoAdvance = !!l.is("[data-auto-advance]") || i.autoAdvance, i.interval = l.data("auto-advance-interval") ? l.data("auto-advance-interval") : i.interval, i.pauseOnHover = !l.is('[data-pause-on-hover="false"]') && i.pauseOnHover, i.navArrows = !l.is('[data-nav-arrows="false"]') && i.navArrows, i.navPagination = !l.is('[data-nav-pagination="false"]') && i.navPagination, i.navShowOnHover = !l.is('[data-nav-show-on-hover="false"]') && i.navShowOnHover, i.navKeyboard = !l.is('[data-nav-keyboard="false"]') && i.navKeyboard, (l.is("[data-nav-dark]") || x.is("[data-nav-dark]")) && (l.addClass("tms-nav-dark"), l.is("[data-featured-slider]") && a("header").addClass("nav-dark")), i.fullscreen && (l.css({
            top: 0,
            left: 0
        }).addClass("tms-fullscreen"), i.carouselVisible = 1, i.fsUseHeightOf = i.fsUseHeightOf || l.data("fs-use-height") ? i.fsUseHeightOf && !l.data("fs-use-height") ? i.fsUseHeightOf : l.data("fs-use-height") : "", i.fsUseHeightOf = i.fsUseHeightOf ? "parent" === i.fsUseHeightOf ? l.parent() : l.closest("." + i.fsUseHeightOf) : ""), i.parallax = !!l.is("[data-parallax]") || i.parallax, i.parallaxSpeed = l.data("parallax-speed") ? l.data("parallax-speed") : i.parallaxSpeed, i.parallaxScale = !(!l.is("[data-parallax-scale-out]") && !l.is("[data-parallax-scale-in]")) || i.parallaxScale, i.parallaxFadeOut = !!l.is("[data-parallax-fade-out]") || i.parallaxFadeOut, i.captionScaling || l.addClass("tms-caption-no-scaling"), !i.carousel && i.carouselVisible && (i.carouselVisible = 1), i.carouselVisible > 1 && (i.animation = "slide"), i.carousel && l.addClass("tms-carousel"), i.carouselScaleHeight && l.addClass("tms-scalable-height"), i.autoPlay = !l.is('[data-video-auto-play="false"]') && i.autoPlay, i.replayOnEnd = !l.is('[data-replay-on-end="false"]') && i.replayOnEnd, i.muteBkgVideo = !!l.is("[data-mute-video]") || i.muteBkgVideo, L && (i.autoPlay = !1, i.useVideoAPI = !1), i.navShowOnHover && l.addClass("show-on-hover"), i.navArrows && w.children().length > 1) {
            var z = a('<a href="#" />').attr("id", "tms-prev").addClass("tms-arrow-nav").appendTo(l),
                B = a('<a href="#" />').attr("id", "tms-next").addClass("tms-arrow-nav").appendTo(l);
            z.each(function () {
                a(this).on("click", function (a) {
                    a.preventDefault(), i.autoAdvance && l.data("loaded") && o.resetSlideshow(), o.prevSlide()
                })
            }), B.each(function () {
                a(this).on("click", function (a) {
                    a.preventDefault(), i.autoAdvance && l.data("loaded") && o.resetSlideshow(), o.nextSlide()
                })
            }), i.lazyLoad && l.addClass("lazyload").find(".tms-arrow-nav").css({display: "block"})
        }
        if (i.navPagination && w.children().length > 1) {
            for (var C = a("<div>").addClass("tms-pagination").appendTo(l), D = 1; D < w.children().length + 1; D++) l.find(C).append('<a href="#" id="tms-pagination-' + D + '" data-index="' + D + '" class="tms-bullet-nav" />');
            var F = "bullets" === i.paginationType ? l.find(".tms-bullet-nav") : l.find(".tms-thumb-nav");
            F.each(function () {
                a(this).on("click", function () {
                    return x = l.find("li.active"), !a(this).hasClass("active") && (i.autoAdvance && l.data("loaded") && o.resetSlideshow(), parseFloat(a(this).data("index")) > parseFloat(C.find(".active").data("index")) ? o.slideTo(a(this).data("index"), "next") : o.slideTo(a(this).data("index"), "prev"), !1)
                })
            }), C.find(".tms-bullet-nav:first-child").addClass("active"), i.lazyLoad && C.css({display: "block"})
        }
        if (i.navKeyboard && w.children().length > 1) {
            var G = [];
            a(b).on("keydown", function (a) {
                return G[a.keyCode] = !0, (!G[37] || !G[39]) && void (G[37] ? (i.autoAdvance && l.data("loaded") && o.resetSlideshow(), i.lazyLoad ? o.prevSlide() : l.data("loaded") && o.prevSlide()) : G[39] && (i.autoAdvance && l.data("loaded") && o.resetSlideshow(), i.lazyLoad ? o.nextSlide() : l.data("loaded") && o.nextSlide()))
            }).on("keyup", function (a) {
                G[a.keyCode] = !1
            })
        }
        l.swipeIt({
            draggable: !1, onSwipeMove: function (a) {
            }, onSwipeEnd: function (a) {
                "left" === a ? o.prevSlide() : o.nextSlide()
            }
        }), a(c).on("resize", function () {
            l.data("first-load") && (t = i.fulscreen ? a(c).width() : i.fullwidth ? i.scaleUnder : l.data("width") ? parseFloat(l.data("width")) : parseFloat(l.css("width")), v = i.fulscreen ? a(c).height() : l.data("height") ? parseFloat(l.data("height")) : parseFloat(l.css("height")), l.data("refW", t).data("refH", v).data("carousel-height", v));
            var b = l.find("li.active, li.target");
            i.carousel && i.carouselVisible > 1 ? w.children(".tms-slide").each(function () {
                s(a(this), i)
            }) : s(b, i), r(l, i), l.addClass("resizing"), A(function () {
                l.removeClass("resizing")
            }, 300, "resize")
        }), l.parent().hasClass("tm-slider-parallax-container") && i.parallax ? (a(c).on("scroll", function () {
            j(l, i)
        }), k(l, i)) : !l.parent().hasClass("tm-slider-parallax-container") && i.parallax && console.log("Add the class tm-slider-parallax-container to slider parent"), l.data("setup", !1).data("loaded", !1).data("first-load", !0).data("scale-first", !0).data("transitioning", !1).data("refW", t).data("refH", v).data("carousel-height", v), e(l), r(l, i), i.onSetup && i.onSetup(), o.resizeSlider = function () {
            var a = l.find("li.active, li.target");
            s(a, i), r(l, i)
        };
        var H, I, K, M, N, O, P, Q = null, R = null;
        o.initSlideshow = function () {
            return !(H || w.children().length < 2) && (i.autoAdvance = !0, !L && i.pauseOnHover && (w.on("mouseleave ", o.resumeSlideshow), w.on("mouseenter ", o.pauseSlideshow)), i.showProgressBar && (P = a("<div>").addClass("tms-progress-bar").appendTo(l)), o.startSlideshow(), S(i.interval), I = (new Date).getTime(), N = i.interval, void (i.onSlideshowStart && i.onSlideshowStart()))
        }, o.startSlideshow = function (a) {
            a = a ? M : i.interval, H = setInterval(function () {
                a !== i.interval && (clearInterval(H), a = i.interval, N = i.interval, o.startSlideshow()), I = (new Date).getTime(), "undefined" != typeof P && P.css({
                    transition: "none",
                    width: "0px"
                }), S(i.interval), o.nextSlide()
            }, a)
        }, o.pauseSlideshow = function () {
            return !(O || !H) && (clearInterval(H), K = (new Date).getTime(), M = N - (K - I) < 50 ? 50 : N - (K - I), N = 0 === N ? i.interval : M, "undefined" != typeof P && P.stop().css({width: P.width() + "px"}), O = !0, void (i.onSlideshowPause && i.onSlideshowPause()))
        }, o.resumeSlideshow = function () {
            return !!O && (clearInterval(H), l.data("ssPaused", !1), I = (new Date).getTime(), S(M), o.startSlideshow(M), void (O = !1))
        }, o.resetSlideshow = function () {
            return !!H && (clearInterval(H), "undefined" != typeof P && P.css({
                transition: "none",
                width: "0px"
            }), S(i.interval), I = (new Date).getTime(), M = i.interval, N = i.interval, void o.startSlideshow(i.interval))
        }, o.endSlideshow = function () {
            return !!H && (clearInterval(H), H = "", O = !1, !L && i.pauseOnHover && (w.off("mouseleave ", o.resumeSlideshow), w.off("mouseenter ", o.pauseSlideshow)), "undefined" != typeof P && P.remove(), void (i.onSlideshowEnd && i.onSlideshowEnd()))
        };
        var S = function (a) {
            return "undefined" != typeof P && void (E ? (clearTimeout(Q), Q = setTimeout(function () {
                P.css({
                    transitionProperty: "width",
                    width: "100%",
                    transitionDuration: a + "ms",
                    transitionTimingFunction: "ease"
                })
            }, 50)) : P.stop(!0, !0).animate({width: "100%"}, a))
        };
        o.nextSlide = function () {
            if (l.data("transitioning")) return !1;
            var b;
            x = l.find("li.active");
            var c = y[a.inArray(x.attr("id"), y) + 1];
            if (b = a.inArray(c, y) + 1 === 0 ? 1 : a.inArray(c, y) + 1, i.carousel && i.carouselVisible > 1) {
                var d = q(l, i);
                1 !== d && (b = b === w.children().length - (d - 2) ? 1 : a.inArray(c, y) + 1)
            }
            this.slideTo(b, "next")
        }, o.prevSlide = function () {
            if (l.data("transitioning")) return !1;
            var b;
            x = l.find("li.active");
            var c = y[a.inArray(x.attr("id"), y) - 1];
            if (b = a.inArray(c, y) + 1 === 0 ? w.children().length : a.inArray(c, y) + 1, i.carousel && i.carouselVisible > 1) {
                var d = q(l, i);
                b = b === w.children().length ? w.children().length - (d - 1) : a.inArray(c, y) + 1
            }
            this.slideTo(b, "prev")
        }, o.slideTo = function (b, c) {
            if (l.data("first-load", !1), l.data("scale-first", !1), c || (x = l.find("li.active")), l.data("transitioning") || b === a.inArray(x.attr("id"), y) + 1) return !1;
            p(l, b);
            var d = l.width(), e = l.height(), f = l.find("#tms-slide-" + b);
            f.addClass("target").css({
                zIndex: 2,
                opacity: 0 === g ? 0 : 1
            }), x.css({zIndex: 1}), i.animation = f.data("animation") ? f.data("animation") : h;
            var g = "slide" === i.animation || "slideLeftRight" === i.animation ? d : 0,
                k = "slideTopBottom" === i.animation ? e : 0;
            g *= i.carousel ? b - 1 : 1;
            var o = "scaleIn" === i.animation ? 1 - i.scaleFactor : "scaleOut" === i.animation ? 1 + i.scaleFactor : 1;
            l.is("[data-nav-dark]") || l.removeClass("tms-nav-dark"), f.is("[data-nav-dark]") ? (l.addClass("tms-nav-dark"), l.is("[data-featured-slider]") && a("header").addClass("nav-dark")) : l.is("[data-featured-slider]") && a("header").removeClass("nav-dark"), u(f, i), l.parent().hasClass("tm-slider-parallax-container") && i.parallax && j(l, i), !f.children("img").data("loaded") && f.children("img").length || s(f, i), r(l, i, f), c || (c = "next"), c = i.carousel ? 1 : "next" === c ? 1 : -1;
            var t = q(l, i);
            E ? i.carousel ? m(w, 1, -(g / t) * c, 0, 0, 0, 0, 0, 1, "50%", "50%", i.speed, 0, J[i.easing], i) : (f.css({
                opacity: 0,
                transition: "none",
                transform: "translate3d(" + g * c + "px," + k * c + "px, 0) scale3d(" + o + ", " + o + ", " + o + ")"
            }), clearTimeout(R), R = setTimeout(function () {
                m(x, 1, -g * c, -k * c, 0, 0, 0, 0, o, "50%", "50%", i.speed, 0, J[i.easing], i), m(f, 1, 0, 0, 0, 0, 0, 0, 1, "50%", "50%", i.speed, 0, J[i.easing], i)
            }, 50)) : i.carousel ? (l.data("transitioning", !0), w.animate({
                opacity: 1,
                left: -(g / t) * c + "px"
            }, i.speed, i.easingFallback, function () {
                n(l, i)
            })) : (l.data("transitioning", !0), f.css({left: d * c + "px", visibility: "visible"}).animate({
                opacity: 1,
                left: "0px"
            }, i.speed, i.easingFallback, function () {
                n(l, i)
            }), x.animate({left: -d * c + "px"}, i.speed, i.easingFallback))
        }, f(l, i, o)
    }, j = function (b, d) {
        var e = a(c);
        e.data("animating") || (e.data("animating", !0), c.requestAnimationFrame(function () {
            k(b, d), e.data("animating", !1)
        }))
    }, k = function (b, d) {
        var e = a(c), f = e.scrollTop(), g = (e.height(), b.parent().height() + b.parent().offset().top - f),
            h = f * d.parallaxSpeed,
            i = d.parallaxScale && b.is("[data-parallax-scale-out]") ? 1.1 + g / b.parent().height() : d.parallaxScale && b.is("[data-parallax-scale-in]") ? 2 - g / b.parent().height() : 1;
        i = i < 1 ? 1 : i;
        var j = d.parallaxFadeOut ? g / b.parent().height() : 1, k = b.find("li.active"),
            m = !!k.is("[data-pause-on-scroll]");
        if (!L && E && l(b.parent())) {
            b.css({position: "fixed", transform: "translate3d( 0, " + -h + "px, 0)", opacity: j.toFixed(2)});
            var n = ".active > img, .target > img, .active > iframe, .target > iframe, .active > video, .target > video";
            b.find(n).css({transform: "scale3d( " + i + "," + i + ", 1 )"}), m && v(k, "play", d)
        } else b.css({position: "relative"}), m && v(k, "pause", d)
    }, l = function (b) {
        var d = a(c).scrollTop(), e = d + a(c).height(), f = b.offset().top, g = f + b.outerHeight();
        return e >= f && d <= g
    }, m = function (b, c, d, e, f, g, h, i, j, k, l, m, o, p, q) {
        var r = b.closest(".tm-slider-container");
        (b.hasClass("active") || b.hasClass("target") || b.hasClass("tms-slides")) && (r.data("animate-first-slide") || r.data("transitioning", !0), q.onSlideBefore && q.onSlideBefore());
        var s = {};
        s.transform = "translate3d(" + d + "px, " + e + "px, " + f + "px) rotateX(" + g + "deg) rotateY(" + h + "deg) rotateZ(" + i + "deg) scale3d(" + j + ", " + j + ", " + j + ")", s.transitionProperty = H + ", opacity", s.transformOrigin = k + " " + l + " 0", s.transitionDuration = m + "ms", s.transitionDelay = o + "ms", s.transitionTimingFunction = p, s.visibility = "visible", s.opacity = c, b.css(s).on(I, function (b) {
            b.stopPropagation(), a(this).off(I), (a(this).hasClass("target") || a(this).hasClass("tms-slides") && !r.data("animate-first-slide")) && n(r, q), a(this).hasClass("tms-caption") && a(this).css({transition: ""}), r.data("animate-first-slide") && r.data("animate-first-slide", !1)
        })
    }, n = function (a, b) {
        a.data("transitioning", !1), b.onSlideAfter && b.onSlideAfter();
        var c = a.find("li.active"), d = a.find("li.target"),
            e = !(!d.is("[data-video-bkg-youtube]") && !d.is("[data-video-bkg-vimeo]"));
        return v(c, "pause", b), 1 === b.carouselVisible && c.find(".tms-caption").not(".no-transition").css({
            display: "none",
            visibility: "hidden"
        }), b.carousel || c.css({visibility: "hidden"}), c.removeClass("active"), d.removeClass("target").addClass("active"), c = d, v(c, "play", b), !(b.carouselVisible > 1) && void (e && !L || o(c, b))
    }, o = function (b, c) {
        b.find(".tms-caption").not(".no-transition").show().each(function () {
            var b = a(this), d = a(this).data("ox") ? b.data("ox") : "50%",
                e = a(this).data("oy") ? b.data("oy") : "50%", f = a(this).data("du") ? b.data("du") : c.speed,
                g = a(this).data("de") ? b.data("de") : 0, h = a(this).data("e") ? J[b.data("e")] : J[c.easing],
                i = null;
            E ? (clearTimeout(i), i = setTimeout(function () {
                m(b, 1, 0, 0, 0, 0, 0, 0, 1, d, e, f, g, h)
            }, 500)) : (h = c.easingFallback, b.delay(g).css({visibility: "visible"}).animate({opacity: 1}, f, h))
        })
    }, p = function (a, b) {
        var c = a.find(".tms-pagination");
        c.find(".active").removeClass("active"), c.find("#tms-pagination-" + b).addClass("active")
    }, q = function (b, d) {
        var e;
        return e = a(c).width() >= 768 && a(c).width() <= 959 && d.carouselVisible > 3 ? 3 : a(c).width() >= 480 && a(c).width() <= 767 && d.carouselVisible > 2 ? 2 : a(c).width() <= 479 ? 1 : d.carouselVisible
    }, r = function (b, c, d) {
        if (!c.carousel) return !1;
        var e, f, g = b.find(".tms-slides"), h = b.find("li.active"), i = h.index(), j = b.find(".tms-pagination"),
            k = g.children().length, l = q(b, c), m = b.width() / l, n = 0, o = null;
        g.children().each(function (b) {
            c.carouselVisible = 0 === c.carouselVisible ? 1 : c.carouselVisible, a(this).css({
                width: m + "px",
                opacity: 1,
                visibility: "visible"
            }), n = n > a(this).outerHeight() ? n : a(this).outerHeight()
        }), 2 === l && i > g.children().length - 2 ? (e = g.children().length - 1, f = !0) : 3 === l && i > g.children().length - 3 ? (e = g.children().length - 2, f = !0) : i > g.children().length - l ? (e = g.children().length - l + 1, f = !0) : (e = i, f = !1), j.children().hide().slice(0, g.children().length - l + 1).show(), f && (h.removeClass("active"), g.find("li:nth-child(" + e + ")").addClass("active"), p(b, e)), E ? (b.data("transitioning") || g.css({
            width: m * k + "px",
            transition: "none",
            transform: "translate3d(" + -(m * e) + "px, 0, 0)"
        }), clearTimeout(o), o = setTimeout(function () {
            g.css({transitionProperty: "opacity, " + H, transitionDuration: c.speed + "ms"})
        }, 50)) : g.css({width: m * k + "px", left: -(m * e) + "px"})
    }, s = function (b, d) {
        var e = b.closest(".tm-slider-container, .featured-media"), f = e.parent().width(),
            g = d.fsUseHeightOf ? d.fsUseHeightOf.height() : a(c).height(), h = e.data("refW"), i = e.data("refH"),
            j = d.fullscreen ? a(c).width() / g : h / i,
            k = e.data("external-padding") ? e.data("external-padding") : d.externalPadding;
        k = a.isNumeric(k) ? k : 2 * parseFloat(a(k).css("padding"));
        var l = d.fullscreen || d.fullwidth ? a(c).width() - k : f,
            m = d.fullscreen ? g - k : d.carousel && d.carouselVisible > 1 && !d.carouselScaleHeight ? i : d.fullwidth && f / j > i ? i - k : f / j - k,
            n = m <= d.scaleMinHeight, o = n ? l / d.scaleMinHeight : l / m,
            p = !(!d.carouselScaleHeight || 1 !== d.carouselVisible), q = d.forceFit || b.hasClass("tms-forcefit");
        if (e.data("newSW", l), e.data("newSH", m), d.carousel) {
            var r = null;
            clearTimeout(r), e.css({width: Math.round(l) + "px"}), r = setTimeout(function () {
                e.css({height: e.data("scale-first") && p ? e.find("li:first-child").find(".tms-content-scalable, img").outerHeight() + "px" : !e.data("scale-first") && p ? b.find(".tms-content-scalable, img").outerHeight() : "auto"})
            }, 100)
        } else e.css({
            width: Math.round(l) + "px",
            height: m > d.scaleMinHeight || "auto" === d.scaleMinHeight ? Math.round(m) + "px" : d.scaleMinHeight + "px"
        }), d.parallax && e.parent().css({height: e.height() + "px"}), m = m > d.scaleMinHeight || "auto" === d.scaleMinHeight ? m : d.scaleMinHeight, e.data("newSH", m);
        if (!e.data("setup") || d.carousel && d.carouselVisible > 1) return !1;
        var s = b.is("[data-image]") ? "image" : "video",
            u = !!(b.is("[data-video-bkg]") || b.is("[data-video-bkg-youtube]") || b.is("[data-video-bkg-vimeo]")),
            v = b.is("[data-video-ratio]") ? parseFloat(b.data("video-ratio")) : 1.778;
        b.find("img, iframe, video, .mejs-container").not(".tms-caption img, .tms-caption iframe, .tms-caption video").each(function () {
            var c, e, f, g = 50, h = m + g, i = l + g;
            if ("image" === s ? (c = a(this).width(), e = a(this).height()) : "video" === s && ((!d.respectRatio && !u || d.fullscreen && !u) && b.addClass("tms-video-no-ratio"), u ? (c = d.fullscreen && d.fullwidth ? h * v : l, e = d.fullscreen && d.fullwidth ? h : l / v) : (c = a(this).attr("width") && l > a(this).attr("width") ? a(this).attr("width") : l, e = q ? c / v : c / v)), f = c / e, "image" === s && d.fullscreen || q || "video" === s && u) {
                if (a(this).is("img") && !a(this).data("loaded")) return !1;
                o > f ? a(this).css({
                    width: u ? i + "px" : d.fullwidth && !q ? "auto" : l + "px",
                    height: u ? Math.round(i / f) + "px" : Math.round(l / f) + "px",
                    top: u ? Math.floor((m - e) / 2) + "px" : Math.round(-((l / f - m) / 2)) + "px",
                    left: u ? -(g / 2) + "px" : 0
                }) : a(this).css({
                    width: !d.fullwidth || q || u ? Math.round(m * f) + "px" : "auto",
                    height: m + "px",
                    top: 0,
                    left: Math.round(-((m * f - l) / 2)) + "px"
                })
            } else "video" === s && a(this).css({
                width: Math.floor(c) + "px",
                height: Math.floor(e) + "px",
                top: Math.floor((m - e) / 2) + "px",
                left: Math.floor((l - c) / 2) + "px"
            })
        }), t(b, d)
    }, t = function (b, c) {
        var d = b.closest(".tm-slider-container"), e = d.data("newSW"), f = d.data("newSH"), g = d.data("refW"),
            h = d.data("refH");
        return !(!c.captionScaling || c.carouselVisible > 1) && void b.find(".tms-caption").each(function () {
            if (!a(this).is("[data-no-scale]")) {
                var b = a(this), d = b.data("x"), i = b.data("y"), j = b.data("w"), k = b.data("pt"), l = b.data("pr"),
                    m = b.data("pb"), n = b.data("pl"), o = b.data("mt"), p = b.data("mr"), q = b.data("mb"),
                    r = b.data("ml"), s = b.data("bt"), t = b.data("br"), u = b.data("bb"), v = b.data("bl"),
                    w = b.data("fs"), x = 0 === b.data("lh") ? w : b.data("lh"),
                    y = b.is("[data-offsetx]") ? parseFloat(b.data("offsetx")) : 0,
                    z = b.is("[data-offsety]") ? parseFloat(b.data("offsety")) : 0,
                    A = e * (y / g) < 0 ? e * (y / g) : e * (y / g) > y ? y : e * (y / g),
                    B = f * (z / h) < 0 ? e * (z / g) : e * (z / g) > z ? z : f * (z / h);
                c.fullwidth && B < z && B < 0 && (B = z);
                var C;
                b.find("img, iframe, video").length && (C = e * (j / g) > j ? j : e * (j / g) > e ? e : e * (j / g)), b.find("img").length || b.find("iframe, video").length ? b.css({
                    width: C + "px",
                    height: b.children("iframe, video").length ? C / 1.778 + "px" : "auto"
                }) : b.css({
                    fontSize: e * (w / g) > w ? w : e * (w / g) + "px",
                    lineHeight: e * (x / g) > x ? x + "px" : e * (x / g) + "px",
                    paddingTop: e * (k / g) > k ? k : e * (k / g) + "px",
                    paddingRight: e * (l / g) > l ? l : e * (l / g) + "px",
                    paddingBottom: e * (m / g) > m ? m : e * (m / g) + "px",
                    paddingLeft: e * (n / g) > n ? n : e * (n / g) + "px",
                    marginTop: e * (o / g) > o ? o : e * (o / g) + "px",
                    marginRight: e * (p / g) > p ? p : e * (p / g) + "px",
                    marginBottom: e * (q / g) > q ? q : e * (q / g) + "px",
                    marginLeft: e * (r / g) > r ? r : e * (r / g) + "px",
                    borderTopWidth: e * (s / g) > s ? s : Math.ceil(e * (s / g)) + "px",
                    borderRightWidth: e * (t / g) > t ? t : Math.ceil(e * (t / g)) + "px",
                    borderBottomWidth: e * (u / g) > u ? u : Math.ceil(e * (u / g)) + "px",
                    borderLeftWidth: e * (v / g) > v ? v : Math.ceil(e * (v / g)) + "px",
                    whiteSpace: "nowrap"
                }), b.css({
                    top: "top" === i ? 0 + B : "bottom" === i ? f - b.outerHeight() - B : (f - b.outerHeight()) / 2 + B + "px",
                    left: "left" === d ? 0 + A : "right" === d ? e - b.outerWidth() - A : (e - b.outerWidth()) / 2 + A + "px"
                })
            }
        })
    }, u = function (b, c) {
        return !(c.carouselVisible > 1) && void b.find(".tms-caption").not(".no-transition").each(function () {
            var b = a(this), c = b.data("o") ? parseFloat(b.data("o")) : 0,
                d = b.data("tx") ? parseFloat(b.data("tx")) : 0, e = b.data("ty") ? parseFloat(b.data("ty")) : 0,
                f = b.data("tz") ? parseFloat(b.data("tz")) : 0, g = b.data("rx") ? parseFloat(b.data("rx")) : 0,
                h = b.data("ry") ? parseFloat(b.data("ry")) : 0, i = b.data("rz") ? parseFloat(b.data("rz")) : 0,
                j = b.data("s") ? parseFloat(b.data("s")) : 1;
            E ? b.css({
                transition: "none",
                transform: "translate3d(" + d + "px, " + e + "px, " + f + "px )rotateX(" + g + "deg) rotateY(" + h + "deg) rotateZ(" + i + "deg) scale3d(" + j + ", " + j + ", " + j + ")",
                opacity: c
            }) : b.css({opacity: 0})
        })
    }, v = function (b, c, d) {
        if (!d.useVideoAPI || d.carouselVisible > 1) return !1;
        var e;
        try {
            if (b.find("iframe").length) {
                e = "#" + b.find("iframe").attr("id");
                var f = a(e).attr("src");
                "undefined" != typeof f && f.indexOf("vimeo") > -1 ? (e = $f(a(e)[0]), "play" === c && d.autoPlay ? e.api("play") : e.api("pause")) : "undefined" != typeof f && f.indexOf("youtu") > -1 && (e = e.replace("#", ""), "play" === c && d.autoPlay ? w[e].playVideo() : w[e].stopVideo())
            } else b.find("video").length && (e = "#" + b.find("video").attr("id"), "play" === c && d.autoPlay ? a(e)[0].play() : a(e)[0].pause())
        } catch (a) {
        }
    }, w = {}, x = !1, y = !1, z = function (d, e, f) {
        if (!f.useVideoAPI || f.carouselVisible > 1) return !1;
        var g = e.closest("li"), i = e.attr("src"), j = new Date;
        if (e.attr("id", "video-" + j.getTime()), "undefined" != typeof i && i.indexOf("vimeo") > -1) {
            if (e.attr("src", e.attr("src") + "&amp;player_id=" + e.attr("id")).addClass("vimeo"), g.is("[data-video-bkg-vimeo]") && e.attr("src", e.attr("src") + "&amp;autoplay=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;background=1").addClass("vimeo"), !x) {
                x = !0;
                var k = b.createElement("script");
                k.src = "http://a.vimeocdn.com/js/froogaloop2.min.js";
                var l = b.getElementsByTagName("script")[0];
                l.parentNode.insertBefore(k, l)
            }
            e.on("load", function () {
                var b = a(this), c = "#" + b.attr("id"), e = $f(a(c)[0]), g = b.closest("li"),
                    i = !!g.is(":first-child");
                e.addEvent("ready", function () {
                    i && f.autoPlay && e.api("play"), e.api("setVolume", 1), (f.muteBkgVideo || g.is("[data-mute-video]")) && e.api("setVolume", 0), e.addEvent("playProgress", function (a) {
                        h(d, g, f), g.addClass("video-bkg-loaded"), o(g, f)
                    }), e.addEvent("finish", function () {
                        f.replayOnEnd && e.api("play")
                    })
                })
            })
        } else if ("undefined" != typeof i && i.indexOf("youtu") > -1) {
            if (e.addClass("youtube"), g.is("[data-video-bkg-youtube]") && e.attr("src", e.attr("src") + "&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=0&amp;loop=1&amp;iv_load_policy=3&amp;playlist=" + e.attr("src").split("embed/")[1].substring(0, 11)).addClass("youtube"), a("body").hasClass("safari-browser") && g.hasClass("active") && (e.attr("src", e.attr("src") + "&amp;autoplay=1"), h(d, g, f), g.addClass("video-bkg-loaded"), o(g, f)), !y) {
                y = !0;
                var m = b.createElement("script");
                m.src = "http://www.youtube.com/player_api";
                var n = b.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(m, n)
            }
            var p = function () {
                a(".youtube").each(function () {
                    var b = a(".youtube"), c = b.attr("id"), e = b.closest("li"), g = !!e.is(":first-child");
                    w[c] = new YT.Player(c, {
                        events: {
                            onStateChange: function (a) {
                                a.data === YT.PlayerState.PLAYING && e.is("[data-video-bkg-youtube]") && !L && (h(d, e, f), e.addClass("video-bkg-loaded"), o(e, f)), a.data === YT.PlayerState.ENDED && f.replayOnEnd && w[c].playVideo()
                            }, onReady: function (a) {
                                g && f.autoPlay && w[c].playVideo(), (f.muteBkgVideo || e.is("[data-mute-video]")) && w[c].mute()
                            }, onError: function (a) {
                                2 === a.data ? console.log("Avalance Slider - YouTube Video: Check video ID") : 100 === a.data ? console.log("Avalance Slider - YouTube Video: Video not found") : 101 !== a.data && 150 !== a.data || console.log("Avalance Slider - YouTube Video: Owner does not allow this video to be played as an embeded video"), b.hide(), h(d, e, f), e.addClass("error"), o(e, f)
                            }
                        }
                    })
                })
            };
            c.onYouTubePlayerAPIReady = function () {
                p()
            }
        } else if (e.is("video")) {
            e.addClass("html5-video");
            var q = b.getElementById(e.attr("id")), r = !!g.is(":first-child");
            r && f.autoPlay && (q.load(), q.autoplay = !0), (f.muteBkgVideo || g.is("[data-mute-video]")) && (q.muted = f.muteBkgVideo), f.replayOnEnd && (q.loop = !0)
        }
    }, A = function () {
        var a = {};
        return function (b, c, d) {
            d || (d = "id"), a[d] && clearTimeout(a[d]), a[d] = setTimeout(b, c)
        }
    }();
    c.isRetinaDevice = function () {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return !!(this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(a).matches)
    };
    var B, C = b.body || b.documentElement, D = C.style,
        E = D.transition !== d || D.WebkitTransition !== d || D.MozTransition !== d || D.MsTransition !== d || D.OTransition !== d,
        F = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var G in F) D[F[G]] !== d && (B = "-" + F[G].replace("Transform", "").toLowerCase());
    var H = B + "-transform", I = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        J = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            easeFastSlow: "cubic-bezier(.11,.69,.66,1.01)",
            easeBounceBack: "cubic-bezier(.16,1.36,.57,.96)",
            easeBounceBackHard: "cubic-bezier(.8,1.91,0,.94)",
            easeBounceIn: "cubic-bezier(.15,2.6,0,-0.2)",
            easeSwingInOut: "cubic-bezier(.35,3.8,0.3,-0.6)"
        }, K = {
            fadeIn: "opacity: 0;easing: swing;",
            slideInUpShort: "opacity:0;transY: 50px;easing:easeFastSlow;",
            slideInRightShort: "opacity:0;transX: 50px;easing:easeFastSlow;",
            slideInDownShort: "opacity:0;transY: -50px;easing:easeFastSlow;",
            slideInLeftShort: "opacity:0;transX: -50px;easing:easeFastSlow;",
            slideInUpLong: "opacity:0;transY: 250px;easing:easeFastSlow;",
            slideInRightLong: "opacity:0;transX: 250px;easing:easeFastSlow;",
            slideInDownLong: "opacity:0;transY: -250px;easing:easeFastSlow;",
            slideInLeftLong: "opacity:0;transX: -250px;easing:easeFastSlow;",
            bounceIn: "opacity:0;scale:0.7;easing:easeBounceIn;",
            bounceOut: "opacity:0;scale:1.4;easing:easeBounceIn;",
            bounceInUp: "opacity:0;transY: 250px;easing:easeBounceIn;",
            bounceInRight: "opacity:0;transX: 250px;easing:easeBounceIn;",
            bounceInDown: "opacity:0;transY: -250px;easing:easeBounceIn;",
            bounceInLeft: "opacity:0;transX: -250px;easing:easeBounceIn;",
            scaleIn: "opacity:0;scale: 0.6;easing:easeFastSlow;",
            scaleOut: "opacity:0;scale: 1.4;easing:easeFastSlow",
            flipInX: "opacity:0;rotateX: -180deg;easing:easeFastSlow;",
            flipInY: "opacity:0;rotateY: -180deg;easing:easeFastSlow;",
            spinInX: "opacity:0;rotateX: -540deg;easing:easeFastSlow;",
            spinInY: "opacity:0;rotateY: -540deg;easing:easeFastSlow;",
            helicopterIn: "opacity:0;scale: 0.6;rotateZ: -360deg;easing:easeFastSlow;",
            helicopterOut: "opacity:0;scale: 1.4;rotateZ: -360deg;easing:easeFastSlow;",
            signSwingTop: "opacity:0;rotateX:-60deg;transOrigX:top;transOrigY:center;easing:easeSwingInOut;",
            signSwingRight: "opacity:0;rotateY:-60deg;transOrigX:right;transOrigY:center;easing:easeSwingInOut;",
            signSwingBottom: "opacity:0;rotateX:-60deg;transOrigX:bottom;transOrigY:center;easing:easeSwingInOut;",
            signSwingLeft: "opacity:0;rotateY:-60deg;transOrigX:left;transOrigY:center;easing:easeSwingInOut;",
            wiggleX: "opacity:0;rotateX:-90deg;transOrigX:center;transOrigY:center;easing:easeSwingInOut;",
            wiggleY: "opacity:0;rotateY:-90deg;transOrigX:center;transOrigY:center;easing:easeSwingInOut;",
            dropUp: "opacity:0;transY: 250px;rotateZ:60deg;transOrigX:left;transOrigY:top;easing:easeBounceBackHard;",
            dropDown: "opacity:0;transY: -250px;rotateZ:-60deg;transOrigX:left;transOrigY:top;easing:easeBounceBackHard;",
            rollInLeft: "opacity:0;transX: -250px;transY: 200px;rotateZ: -120px;transOrigX:left;transOrigY:top;easing:easeFastSlow;",
            rollInRight: "opacity:0;transX: 250px;transY: 200px;rotateZ: 120px;transOrigX:right;transOrigY:top;easing:easeFastSlow;",
            turnInRight: "opacity:0;transX: 250px;rotateX:20deg;rotateY:75deg;transOrigX:left;transOrigY:top;easing:easeBounceBack;",
            turnInLeft: "opacity:0;transX: -250px;rotateX:20deg;rotateY:-75deg;transOrigX:right;transOrigY:top;easing:easeBounceBack;"
        }, L = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (L = !0), function () {
        for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !c.requestAnimationFrame; ++d) c.requestAnimationFrame = c[b[d] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[b[d] + "CancelAnimationFrame"] || c[b[d] + "CancelRequestAnimationFrame"];
        c.requestAnimationFrame || (c.requestAnimationFrame = function (b, d) {
            var e = (new Date).getTime(), f = Math.max(0, 16 - (e - a)), g = c.setTimeout(function () {
                b(e + f)
            }, f);
            return a = e + f, g
        }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        })
    }(), a.fn.avalancheSlider = function (b) {
        return this.each(function () {
            var c = a(this);
            if (!c.data("avalancheSlider")) {
                var d = new i(this, b);
                c.data("avalancheSlider", d)
            }
        })
    }, a.fn.avalancheSlider.tmsOpts = {
        animation: "slide",
        scaleFactor: .2,
        parallax: !1,
        easing: "easeInOutQuint",
        easingFallback: "easeInOutQuint",
        speed: 700,
        parallaxSpeed: .2,
        parallaxScale: !1,
        parallaxFadeOut: !1,
        navArrows: !0,
        navPagination: !0,
        navShowOnHover: !0,
        paginationType: "bullets",
        navKeyboard: !0,
        forceFit: !1,
        fullwidth: !1,
        fullscreen: !1,
        fsUseHeightOf: "",
        externalPadding: 0,
        scaleUnder: 1140,
        scaleMinHeight: 214,
        captionScaling: !0,
        carousel: !1,
        carouselVisible: 1,
        carouselScaleHeight: !1,
        autoAdvance: !0,
        showProgressBar: !0,
        interval: 6e3,
        pauseOnHover: !0,
        useVideoAPI: !0,
        autoPlay: !0,
        replayOnEnd: !0,
        respectRatio: !0,
        muteBkgVideo: !1,
        lazyLoad: !0,
        retinaSupport: !0,
        retinaSupportMobile: !1,
        retinaSuffix: "@2x",
        onSetup: null,
        onLoadEnd: null,
        onSlideBefore: null,
        onSlideAfter: null,
        onSlideshowStart: null,
        onSlideshowPause: null,
        onSlideshowEnd: null
    }
}(jQuery, document, window);
/**
 *    Summit Lightbox
 *    Version: 1.0.5
 */
!function (t, a, i, e) {
    "use strict";
    var n = function (a, e) {
        var n = t.extend({}, t.fn.summitLightbox.tmlOpts, e), d = t(a), c = this, p = [];
        d.on("click", function (a) {
            a.preventDefault(), t(d).data("group") && (p = o(d)), t(this).addClass("tml-active"), n.lightboxAnimation = t(this).data("lightbox-animation") ? t(this).data("lightbox-animation") : n.lightboxAnimation, n.contentAnimation = t(this).data("content-animation") ? t(this).data("content-animation") : n.contentAnimation, n.contentMargin = t(this).data("content-margin") ? t(this).data("content-margin") : n.contentMargin, n.navExit = t(this).is('[data-nav-exit="false"]') ? !1 : n.navExit, n.videoRatio = t(this).data("video-ratio") ? t(this).data("video-ratio") : n.videoRatio, n.auxClasses = t(this).data("aux-classes") ? t(this).data("aux-classes") : n.auxClasses, s(p, n, d, c)
        }), t(i).on("resize", function () {
            m(n)
        }), c.nextContent = function () {
            var a = t("#tml-content");
            if (a.data("loading")) return !1;
            h(0, n);
            var i = t(".tml-active"), e = o(i), r = e[t.inArray(i.attr("id"), e) + 1];
            r = t.inArray(r, e) + 1 === 0 ? e[0] : r, i.removeClass("tml-active"), r = t("#" + r).addClass("tml-active"), l(r, "next", n), e.length = 0
        }, c.prevContent = function () {
            var a = t("#tml-content");
            if (a.data("loading")) return !1;
            h(0, n);
            var i = t(".tml-active"), e = o(i), r = e[t.inArray(i.attr("id"), e) - 1];
            r = t.inArray(r, e) + 1 === 0 ? e[e.length - 1] : r, i.removeClass("tml-active"), r = t("#" + r).addClass("tml-active"), l(r, "prev", n), e.length = 0
        }, c.destroyLightbox = function () {
            var a = t("#tm-lightbox"), i = t("#tml-content"), e = null;
            t("body").removeClass("modal-open");
            var o = r(a, n);
            if (b) {
                if (a.data("transitioning")) return !1;
                a.children().css({transition: "none"}), i.css({transition: "none"}), a.one(w, function () {
                    clearTimeout(e), e = setTimeout(function () {
                        a.find("iframe").attr("src", ""), a.remove(), a = null
                    }, 50)
                }), u(a, 0, o.x, o.y, n)
            } else {
                if (a.is(":animated")) return !1;
                i.remove(), a.animate({opacity: 0, left: o.x + "px", top: o.y + "px"}, n.speed, n.easing, function () {
                    a.find("iframe").attr("src", ""), a.remove(), a = null
                })
            }
            p.length = 0, t(".tml-active").removeClass("tml-active"), n.onExit && n.onExit()
        }
    }, o = function (a) {
        if (t(a).is("[data-group]")) {
            var i = t(a).data("group"), e = [];
            return t('[data-group="' + i + '"]').each(function (a) {
                a++, t(this).attr("id") ? e.push(t(this).attr("id")) : (t(this).attr("id", i + "-tml-thumb-" + a), e.push(t(this).attr("id")))
            }), e
        }
    }, r = function (a, e) {
        var n = e.lightboxAnimation,
            o = "slideInLeft" === n || "slideInTop" === n ? -1 : "slideInRight" === n || "slideInBottom" === n ? 1 : 0,
            r = "slideInLeft" === n || "slideInRight" === n ? t(i).width() * o : 0,
            s = "slideInTop" === n || "slideInBottom" === n ? t(i).height() * o : 0;
        return {x: r, y: s}
    }, s = function (e, n, o, s) {
        if (t("#tm-lightbox").length) return !1;
        t("body").append('<div id="tm-lightbox" class="tm-lightbox"><div id="tml-content-wrapper" ><div id="tml-content" /></div><div id="tml-caption" /></div>');
        var l = t("#tm-lightbox"), c = t("#tml-content-wrapper"), h = t("#tml-content"), p = null;
        l.addClass(n.auxClasses.replace(/,/g, " ")), o.is("[data-modal-mode]") && (l.addClass("tml-modal-mode"), h.addClass("modal-dialog"), t("body").addClass("modal-open"), o.data("modal-width") && l.data("modal-width", o.data("modal-width")), o.data("modal-height") && l.data("modal-height", o.data("modal-height"))), l.data("initLoad", !0);
        var v = n.contentMargin;
        if (c.css({
            top: v + "%",
            right: v + "%",
            bottom: v + "%",
            left: v + "%"
        }), e.length < 2 || h.swipeIt({
            preventTouchOn: ".scrollable-content", onSwipeMove: function (t) {
                h.css({left: t + "px"})
            }, onSwipeEnd: function (t) {
                "left" === t ? s.prevContent() : s.nextContent()
            }
        }), n.overlay || l.css({background: "none"}), n.navArrows && e.length >= 2) {
            var f = t('<a href="#" />').attr("id", "tml-prev").addClass("tml-nav").appendTo(l),
                g = t('<a href="#" />').attr("id", "tml-next").addClass("tml-nav").appendTo(l);
            f.on("click", function (t) {
                t.preventDefault(), s.prevContent()
            }), g.on("click", function (t) {
                t.preventDefault(), s.nextContent()
            })
        }
        if (n.navExit) {
            var x;
            x = t('<a href="" id="tml-exit" class="tml-nav" />').appendTo(l.hasClass("tml-modal-mode") ? h : l), x.on("click", function (t) {
                t.preventDefault(), s.destroyLightbox()
            })
        }
        if (n.navToolbar) {
            var y, C, z, k = 600, T = 400, A = t(i).height() / 2 - T / 2, I = t(i).width() / 2 - k / 2,
                S = t(location).attr("href"), O = t('<div id="tml-tool-bar" />').appendTo(l),
                L = (o.data("toolbar") + "").split(";");
            if (n.navZoom = o.is("[data-toolbar]") ? t.inArray("zoom", L) > -1 ? !0 : !1 : n.navZoom, n.navShare = o.is("[data-toolbar]") ? t.inArray("share", L) > -1 ? !0 : !1 : n.navShare, n.navZoom && (C = t('<a id="tml-zoom" class="tml-nav" href="#" title="Zoom"></a>').appendTo(O), C.on("click", function (t) {
                t.preventDefault(), c.toggleClass("zoomed"), m(n)
            })), n.navShare) {
                var M = o.is("[data-list-vertical]") ? "list-vertical" : "list-horizontal";
                z = t('<div id="tml-share-wrapper"><a id="tml-share" class="tml-nav" href="#" title="Share"></a><ul class="tml-social-list ' + M + '" /></div>').appendTo(O);
                var E = o.data("networks") ? (o.data("networks") + "").split(";") : n.navNetworks.split(",");
                t.each(E, function (t, a) {
                    z.find("ul").append("<li><a data-" + a + ' class="tml-nav" href="#">' + a + "</a></li>")
                }), z.children("a").on("click", function (t) {
                    t.preventDefault(), z.children("ul").toggleClass("active")
                }), z.find("ul a").on("click", function (a) {
                    a.preventDefault();
                    var e = o.data("caption"), n = o.data("twitter-user") ? o.data("twitter-user") : "",
                        r = o.data("image-url") ? o.data("image-url") : o.attr("href");
                    return t(this).is("[data-facebook]") ? y = "https://www.facebook.com/sharer/sharer.php?u=" + S + ",sharer" : t(this).is("[data-twitter]") ? y = "https://twitter.com/intent/tweet?url=" + r + "&amp;via=" + n : t(this).is("[data-pinterest]") && (y = "http://pinterest.com/pin/create/button/?url=" + S + "&amp;media=" + r + "&amp;description=" + e), i.open(y, "popup", "width=" + k + ",height=" + T + ", scrollbars=yes, top=" + A + ",left=" + I), !1
                })
            }
        }
        n.navKeyboard && t(a).on("keyup", function (t) {
            37 != t.keyCode || e.length < 2 ? 39 != t.keyCode || e.length < 2 ? 27 == t.keyCode && s.destroyLightbox() : s.nextContent() : s.prevContent()
        }), n.overlayClickClose && l.on("click", function (t) {
            (t.target === this || "tml-content-wrapper" === t.target.id) && s.destroyLightbox()
        });
        var D = r(l, n);
        if (b) {
            if (l.css({
                transition: "none",
                transform: "translate3d(" + D.x + "px, " + D.y + "px, 0px)"
            }), l.data("transitioning")) return !1;
            clearTimeout(p), p = setTimeout(function () {
                l.one(w, function () {
                    d(t(".tml-active"), "next", n)
                }), u(l, 1, 0, 0, n)
            }, 50)
        } else l.css({left: D.x + "px", top: D.y + "px"}), l.animate({
            opacity: 1,
            left: 0,
            top: 0
        }, n.speed, n.easing, function () {
            d(t(".tml-active"), "next", n)
        })
    }, l = function (a, i, e) {
        var n = (t("#tm-lightbox"), t("#tml-content"));
        n.data("loading", !0);
        var o = "fade" === e.contentAnimation ? 0 : e.slideAmount;
        if (i = "next" === i ? 1 : -1, b) n.one(w, function () {
            t(this).css({visibility: "hidden"}), d(a, i, e)
        }), u(n, 0, -o * i, 0, e); else {
            var r = n.position().left;
            n.animate({opacity: 0, left: r - o * i + "px"}, e.speed, e.easing, function () {
                t(this).css({visibility: "hidden"}), d(a, i, e)
            })
        }
    }, d = function (a, e, n) {
        var o = t("#tm-lightbox"), r = t("#tml-content"), s = t("#tml-exit").clone(!0),
            l = o.hasClass("tml-modal-mode") ? !0 : !1;
        r.find("iframe").attr("src", ""), r.removeClass("tml-error scrollable-content").data("type", "").html("");
        var d = a.attr("href"), m = d.match(/\.(jpeg|jpg|png|gif)/i),
            u = d.match(/(vimeo\.com|youtu(be\.com|\.be))\/(watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/),
            h = a.is('[data-content="inline"]'), p = a.is('[data-content="iframe"]'), v = a.is('[data-content="ajax"]');
        if (t("#tml-loader").length && t("#tml-loader").remove(), o.append('<div id="tml-loader" class="tm-loader"><div id="circle" /></div>'), m) {
            var f = d.substr(d.lastIndexOf("."));
            (i.isRetinaDevice() && n.retinaSupport || i.isRetinaDevice() && a.is("[data-retina]")) && (!z && !n.retinaSupportMobile || z && n.retinaSupportMobile) && (d.match(/\.(svg)/i) || (d = a.data("retina") ? a.data("retina") : d.replace(f, n.retinaSuffix + f))), r.data("type", "img"), t("<img />").addClass("tml-image").attr("src", d).one("load", function () {
                r.html(t(this)), c(!0, e, n)
            }).each(function () {
                this.complete && t(this).trigger("load")
            }).on("error", function () {
                c(!1, e, n)
            })
        }
        if (u) {
            r.data("type", "video");
            var b = t('<iframe src="' + d + '" wmode="opaque" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen />');
            r.html(b), b.one("load", function () {
                c(!0, e, n)
            })
        }
        if (h) if (r.addClass("scrollable-content").data("type", "inline"), t(d).length) {
            var g = t(d).clone(!0).addClass("show").css({visibility: "visible", opacity: 1});
            r.html(g), c(!0, e, n)
        } else c(!1, e, n);
        if (p) {
            r.addClass("scrollable-content").data("type", "iframe");
            var x = t('<iframe src="' + d + '" frameborder="0" scrolling="auto" />');
            r.html(x), x.one("load", function () {
                c(!0, e, n)
            })
        }
        if (v) {
            r.addClass("scrollable-content").data("type", "ajax");
            var y = a.data("target-container");
            t.ajax({
                url: d, cache: !1, success: function (a) {
                    r.html(t(a).find(y).length ? t(a).find(y) : a), c(!0, e, n)
                }, error: function () {
                    c(!1, e, n)
                }
            })
        }
        l && r.append(s)
    }, c = function (a, i, e) {
        var n = t("#tm-lightbox"), o = t("#tml-content"), r = null;
        if (m(e), n.find("#tml-loader").remove(), a) {
            var s = "fade" === e.contentAnimation ? 0 : e.slideAmount;
            if (b) o.css({
                transition: "none",
                opacity: 0,
                transform: "translate3d(" + s * i + "px, 0, 0)"
            }), clearTimeout(r), r = setTimeout(function () {
                o.one(w, function () {
                    o.data("loading", !1)
                }), u(o, 1, 0, 0, e)
            }, 50); else {
                var l = o.position().left, d = n.data("initLoad") ? l : 1 === i ? l + 2 * s : l - 2 * s;
                o.css({visibility: "visible", left: d + "px"}).animate({
                    opacity: 1,
                    left: l + "px"
                }, e.speed, e.easing, function () {
                    o.data("loading", !1)
                })
            }
            h(1, e), e.onLoaded && e.onLoaded()
        } else {
            var c = "";
            e.showErrorSrc && (c = ": " + t(".tml-active").attr("href")), o.css({
                width: "100%",
                height: "auto",
                top: "50%",
                left: 0,
                transition: "none",
                transform: "translate3d( 0, 0, 0)"
            }).addClass("tml-error").html(e.errorMessage + c), b ? (clearTimeout(r), r = setTimeout(function () {
                o.one(w, function () {
                    o.data("loading", !1)
                }), u(o, 1, 0, 0, e)
            }, 50)) : o.css({visibility: "visible"}).animate({opacity: 1}, function () {
                o.data("loading", !1)
            })
        }
        n.data("initLoad", !1)
    }, m = function (a) {
        var i = t("#tm-lightbox"), e = i.hasClass("tml-modal-mode") ? !0 : !1, n = t("#tml-content-wrapper").width(),
            o = t("#tml-content-wrapper").height(), r = i.data("modal-width"), s = i.data("modal-height"),
            l = t("#tml-content"), d = l.data("type"), c = 0, m = 0, u = 0, h = 0, p = 0;
        if (l.not(".tml-error").css({
            height: "auto",
            width: "auto",
            top: "",
            left: ""
        }), "img" === d) m = l.find("img").width(), u = l.find("img").height(); else if ("video" === d) m = a.maxWidth, u = m / a.videoRatio; else if ("iframe" === d) m = n < a.maxWidth ? n : a.maxWidth, u = o; else {
            var v = (l.children().outerWidth(), l.children().outerHeight());
            m = e ? r > n ? n : r : n, u = e && s ? s : e && !s ? v : o > v ? v : o
        }
        ("img" === d || "video" === d) && (c = m / u > n / o ? m / n : u / o, m = m / c > m ? m : m / c, u = u / c > u ? u : u / c), p = (n - m) / 2, h = o > u ? (o - u) / 2 : 0, l.css({
            width: Math.round(m) + "px",
            height: Math.round(u) + "px",
            top: Math.round(h) + "px",
            left: Math.round(p) + "px"
        })
    }, u = function (a, i, e, n, o) {
        {
            var r = t("#tm-lightbox");
            t("#tml-content")
        }
        "tm-lightbox" === a.attr("id") && r.data("transitioning", !0);
        var s = {};
        s.transform = "translate3d(" + e + "px, " + n + "px, 0px)", s.transitionProperty = y + ", opacity", s.transitionDuration = o.speed + "ms", s.transitionTimingFunction = C[o.easing], s.visibility = "visible", s.opacity = i, a.css(s).one(w, function (i) {
            i.stopPropagation(), t(this).off(w), "tm-lightbox" === a.attr("id") && r.data("transitioning", !1)
        })
    }, h = function (a, i) {
        var e = t("#tml-caption"), n = t(".tml-active").data("caption");
        n ? (e.html(t("<span />").text(n)), b ? u(t("#tml-caption"), a, 0, 0, i) : t("#tml-caption").animate({opacity: a})) : e.html("")
    };
    i.isRetinaDevice = function () {
        var t = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(t).matches ? !0 : !1
    };
    var p, v = a.body || a.documentElement, f = v.style,
        b = f.transition !== e || f.WebkitTransition !== e || f.MozTransition !== e || f.MsTransition !== e || f.OTransition !== e,
        g = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var x in g) f[g[x]] !== e && (p = "-" + g[x].replace("Transform", "").toLowerCase());
    var y = p + "-transform", w = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        C = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }, z = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (z = !0), t.fn.summitLightbox = function (a) {
        return this.each(function () {
            var i = t(this);
            if (!i.data("summitLightbox")) {
                var e = new n(this, a);
                i.data("summitLightbox", e)
            }
        })
    }, t.fn.summitLightbox.tmlOpts = {
        lightboxAnimation: "fade",
        contentAnimation: "slide",
        slideAmount: 100,
        easing: "swing",
        speed: 350,
        overlay: !0,
        maxWidth: 1140,
        contentMargin: 15,
        videoRatio: 1.778,
        navArrows: !0,
        navKeyboard: !0,
        navExit: !0,
        navToolbar: !0,
        navZoom: !0,
        navShare: !0,
        navNetworks: "facebook,twitter,pinterest",
        overlayClickClose: !0,
        retinaSupport: !1,
        retinaSupportMobile: !1,
        retinaSuffix: "@2x",
        errorMessage: "Please Check",
        showErrorSrc: !0,
        auxClasses: "",
        onSetup: null,
        onLoaded: null,
        onDestroy: null
    }
}(jQuery, document, window);
/**
 *    Snowbridge Parallax
 *    Version: 1.0.2
 */
!function (a, t, e, i) {
    "use strict";

    function n(t, i) {
        var n = a('<div class="tm-parallax" />').prependTo(a(t));
        v && n.css({height: ""}).addClass("tmp-mobile");
        var r = a('<div class="tm-loader"><div id="circle" /></div>');
        r.appendTo(n);
        var o = t.data("src"), l = o.substr(o.lastIndexOf("."));
        (e.isRetinaDevice() && i.retinaSupport || e.isRetinaDevice() && t.is("[data-retina]")) && (!v && !i.retinaSupportMobile || v && i.retinaSupportMobile) && (o.match(/\.(svg)/i) || (o = t.data("retina") ? t.data("retina") : t.data("src").replace(l, i.retinaSuffix + l))), a('<img class="tmp-media"/>').attr("src", o).one("load", function () {
            a(this).attr("src", o).appendTo(n), n.find(".tm-loader").remove(), s(t, i)
        }).on("error", function () {
            console.log("Error src:" + o)
        })
    }

    function s(t, i) {
        var n = t.find(".tmp-media");
        n.data("refW", n.width()).data("refH", n.height()), n.css({opacity: 0}), l(t, i), d(t, i), f && c(t) ? n.css({
            visibility: "visible",
            transitionProperty: "opacity",
            transitionDuration: "1000ms",
            opacity: 1
        }) : n.css({visibility: "visible"}).animate({opacity: 1}), a(e).on("resize", function () {
            l(t, i), o(t, i)
        }), a(e).on("scroll", function () {
            o(t, i)
        }), i.onLoaded && i.onLoaded()
    }

    var r = function (t, e) {
        var i = a.extend({}, a.fn.snowBridge.tmpOpts, e), s = a(t), r = i.scaleContainer ? i.scaleUnder : s.width();
        s.data("animating", !1).data("setup", !1).data("refW", r).data("refH", s.height()), i.fadeInOut = s.is('[data-fade-in-out="false"]') ? !1 : i.fadeInOut, i.scaleContainer = s.is('[data-scale="false"]') ? !1 : i.scaleContainer, i.scaleUnder = s.data("scale-under") ? s.data("scale-under") : i.scaleUnder, i.scaleMinHeight = s.data("scale-min-height") ? s.data("scale-min-height") : i.scaleMinHeight, l(s, i), i.fullscreen && (i.scaleContainer = !0), i.parallaxFactor > 1 && (i.parallaxFactor = 1), s.data("setup", !0), n(s, i)
    }, o = function (a, t) {
        a.data("animating") || (e.requestAnimationFrame(function () {
            d(a, t)
        }), a.data("animating", !0))
    }, l = function (t, i) {
        var n = a(e).width(), s = a(e).height(), r = t.data("refW"), o = t.data("refH"),
            l = i.fullscreen ? n / s : r / o, d = i.fullscreen ? s : n / l > o ? o : n / l;
        if ((i.fullscreen || i.scaleContainer) && (t.css({
            width: n + "px",
            height: Math.round(d) > i.scaleMinHeight ? Math.round(d) + "px" : i.scaleMinHeight + "px"
        }), d = Math.round(d) > i.scaleMinHeight ? d : i.scaleMinHeight), !t.data("setup")) return !1;
        var c = t.find(".tmp-media"), u = c.data("refW"), h = c.data("refH"), p = u / h,
            f = i.fullscreen ? s + s * i.parallaxFactor : i.scaleContainer ? d + d * i.parallaxFactor : o + o * i.parallaxFactor,
            m = f * p, g = s + d, b = v ? -((f - d) / 2) : 0;
        c.css(i.fullscreen || i.scaleContainer ? m > n ? {
            width: Math.round(m) + "px",
            height: Math.round(f) + "px",
            left: -Math.round((m - n) / 2) + "px",
            top: b + "px"
        } : {
            width: n + "px",
            height: Math.round(n / p) + "px",
            left: 0,
            top: b + "px"
        } : m > n ? {
            width: Math.round(f * p) + "px",
            height: Math.round(f) + "px",
            left: -Math.round((f * p - n) / 2) + "px",
            top: b + "px"
        } : {
            width: n + "px",
            height: Math.round(n / p) + "px",
            left: 0,
            top: b + "px"
        }), t.data("scrollDistContainer", g)
    }, d = function (t, i) {
        var n = t.find(".tmp-media");
        if (c(t)) {
            if (v) return !1;
            var s = t.height() + t.offset().top - a(e).scrollTop(), r = t.offset().top - a(e).scrollTop(),
                o = 0 - n.height() / 2, l = o * (s / t.data("scrollDistContainer")) * i.parallaxFactor;
            if (n.css(f ? {transform: "translate3d( 0px, " + l + "px, 0px)", visibility: "visible"} : {
                top: l + "px",
                visibility: "visible"
            }), i.fadeInOut) {
                var d, u = a(e).height(), h = i.fadeThreshold > 1 ? .5 * t.height() : t.height() * i.fadeThreshold;
                r > h || (d = Math.abs(s / h) > 1 ? 1 : Math.abs(s / h)), r > u || u - h > r || (d = (u - r) / h > 1 ? 1 : (u - r) / h), n.parent().css({opacity: (Math.ceil(100 * d) / 100).toFixed(2)})
            }
        } else v || n.css({visibility: "hidden"});
        t.data("animating", !1)
    }, c = function (t) {
        var i = a(e).scrollTop(), n = i + a(e).height(), s = t.offset().top, r = s + t.outerHeight();
        return n >= s && r >= i
    };
    e.isRetinaDevice = function () {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(a).matches ? !0 : !1
    };
    var u, h = t.body || t.documentElement, p = h.style,
        f = p.transition !== i || p.WebkitTransition !== i || p.MozTransition !== i || p.MsTransition !== i || p.OTransition !== i,
        m = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var g in m) p[m[g]] !== i && (u = "-" + m[g].replace("Transform", "").toLowerCase());
    var v = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (v = !0), function () {
        for (var a = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !e.requestAnimationFrame; ++i) e.requestAnimationFrame = e[t[i] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[t[i] + "CancelAnimationFrame"] || e[t[i] + "CancelRequestAnimationFrame"];
        e.requestAnimationFrame || (e.requestAnimationFrame = function (t) {
            var i = (new Date).getTime(), n = Math.max(0, 16 - (i - a)), s = e.setTimeout(function () {
                t(i + n)
            }, n);
            return a = i + n, s
        }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        })
    }(), a.fn.snowBridge = function (t) {
        return this.each(function () {
            var e = a(this);
            if (!e.data("snowBridge")) {
                var i = new r(this, t);
                e.data("snowBridge", i)
            }
        })
    }, a.fn.snowBridge.tmpOpts = {
        fullscreen: !1,
        parallaxFactor: .7,
        fadeInOut: !0,
        fadeThreshold: .5,
        scaleContainer: !0,
        scaleUnder: 1140,
        scaleMinHeight: 250,
        retinaSupport: !0,
        retinaSupportMobile: !1,
        retinaSuffix: "@2x",
        onLoaded: null
    }
}(jQuery, document, window);
/**
 *    Horizon
 *    Version: 1.0.4
 */
!function (a, e, t, i) {
    "use strict";
    var n, r = function (e, n) {
            function r() {
                a.each(g, function (a, t) {
                    t = t.split(":");
                    var i = t[0], n = t[1], r = n.indexOf("px") < 0 ? n.indexOf("%") < 0 ? "px" : "%" : "px";
                    n = isNaN(parseFloat(n)) ? n : parseFloat(n), c.parallax ? ("direction" === i && e.data("pd", n), "speed" === i && e.data("ps", n), "rotate" === i && e.data("pr", n), "opacity" === i && e.data("po", n)) : ("opacity" === i && e.data("o", n), "scale" === i && e.data("s", n), "easing" === i && e.data("e", n), "transX" === i && e.data("tx", n + r), "transY" === i && e.data("ty", n + r), "transZ" === i && e.data("tz", n + r), "rotateX" === i && e.data("rx", n + "deg"), "rotateY" === i && e.data("ry", n + "deg"), "rotateZ" === i && e.data("rz", n + "deg"), "transOrigX" === i && e.data("ox", n + "%"), "transOrigY" === i && e.data("oy", n + "%"), "duration" === i && e.data("du", n + "ms"), "delay" === i && e.data("de", n + "ms"))
                })
            }

            var c = a.extend({}, a.fn.horizon.tmhOpts, n);
            e = a(e), w && e.css({
                opacity: 1,
                visibility: "visible"
            }), e.data("scrolling", !1).css("-webkit-backface-visibility", "hidden");
            var g;
            e.is("[data-parallax]") || c.parallax ? (c.parallax = !0, c.threshold = 0, e.data("threshold", 0), e.parent().addClass("tmh-perspective-parallax"), e.addClass("tmh-parallax-item"), g = (e.data("parallax") + "").split(";"), o(e, c, !0)) : (e.parent().addClass("tmh-perspective"), g = (e.data("animate-in") + "").split(";")), -1 != a.inArray("preset", (g + "").split(":")) ? g.filter(function (e) {
                if ("preset" === e.split(":")[0]) {
                    g.splice(a.inArray(e, g), 1);
                    var t = (O[e.split(":")[1]] + "").split(";");
                    g = a.merge(t, g).filter(Boolean), i !== g[0] && r()
                }
            }) : (g = g.filter(Boolean), "undefined" !== g[0] && r()), a(t).on("scroll", function () {
                s(e, c, !1)
            }), a(t).on("resize", function () {
                s(e, c, !1)
            }), c.parallax || d(e, c), s(e, c)
        }, s = function (a, e, t) {
            a.data("scrolling") || (requestAnimationFrame(function () {
                o(a, e, t)
            }), a.data("scrolling", !0))
        }, o = function (e, i, n) {
            if (c(e, i) || n) if (i.parallax) {
                if (w) return !1;
                {
                    var r = e.data("pd") ? e.data("pd") : "vertical", s = e.data("ps") ? e.data("ps") : i.parallaxSpeed,
                        o = e.data("pr") ? e.data("pr") : "none", d = e.data("po") ? e.data("po") : "none", u = a(t),
                        p = u.scrollTop(), b = e.offset().top, h = u.height() * s,
                        f = e.parent().height() + e.parent().offset().top - p, y = -((b - p - u.height()) * s) - h,
                        O = "horizontal" === r ? y + "px" : 0, x = "vertical" === r ? y + "px" : 0;
                    -(.1 * (b - p - u.height())) - h
                }
                o = "clockwise" === o ? .02 * -y + "deg" : "anticlockwise" === o ? .02 * y + "deg" : 0, d = "fade" === d ? f / e.parent().height() : 1, l && (u.width() < 768 ? g(e, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, "100ms", 0, "swing", i) : g(e, d.toFixed(2), O, x, 0, o, o, o, 1, "50%", "50%", 0, 0, "ease-out", i))
            } else {
                var I = e.data("ox") ? e.data("ox") : "50%", z = e.data("oy") ? e.data("oy") : "50%",
                    S = e.data("du") ? e.data("du") : i.speed, F = e.data("de") ? e.data("de") : 0,
                    X = e.data("e") ? m[e.data("e")] : m[i.easing];
                l ? g(e, 1, 0, 0, 0, 0, 0, 0, 1, I, z, S, F, X, i) : e.css({visibility: "visible"}).stop().animate({opacity: 1}, i.speed, i.easingFallback, function () {
                    i.inView && i.inView()
                })
            }
            e.data("scrolling", !1)
        }, c = function (e, i) {
            var n = a(t).scrollTop(), r = n + a(t).height(),
                s = e.data("threshold") ? parseFloat(e.data("threshold")) : i.threshold,
                o = e.data("ty") ? parseFloat(e.data("ty")) : 0, c = e.offset().top, g = e.offset().top - o,
                u = g + e.outerHeight() - e.outerHeight() * s, p = g + e.outerHeight() * s;
            return (c - n > a(t).height() || c - n < -e.outerHeight()) && (i.recurring && d(e, i), i.outOfView && i.outOfView()), r >= p && u >= n
        }, d = function (a) {
            if (w) return !1;
            var e = a.data("o") ? a.data("o") : 0, t = a.data("tx") ? a.data("tx") : 0, i = a.data("ty") ? a.data("ty") : 0,
                n = a.data("tz") ? a.data("tz") : 0, r = a.data("rx") ? a.data("rx") : 0,
                s = a.data("ry") ? a.data("ry") : 0, o = a.data("rz") ? a.data("rz") : 0, c = a.data("s") ? a.data("s") : 1;
            a.css(l ? {
                transition: "none",
                transform: "translate3d(" + t + ", " + i + ", " + n + " )rotateX(" + r + ") rotateY(" + s + ") rotateZ(" + o + ") scale3d(" + c + ", " + c + ", " + c + ")",
                opacity: e,
                visibility: "hidden"
            } : {opacity: 0})
        }, g = function (e, t, i, n, r, s, o, c, d, g, u, p, l, b, h) {
            var m = {};
            m.transform = "translate3d(" + i + ", " + n + ", " + r + ") rotateX(" + s + ") rotateY(" + o + ") rotateZ(" + c + ") scale3d(" + d + ", " + d + ", " + d + ")", m.transitionProperty = f + ", opacity", m.transformOrigin = g + " " + u + " 0", m.transitionDuration = p, m.transitionDelay = l, m.transitionTimingFunction = b, m.visibility = "visible", m.opacity = t, e.css(m).on(y, function (e) {
                e.stopPropagation(), a(this).off(y), h.inView && h.inView()
            })
        }, u = e.body || e.documentElement, p = u.style,
        l = p.transition !== i || p.WebkitTransition !== i || p.MozTransition !== i || p.MsTransition !== i || p.OTransition !== i,
        b = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var h in b) p[b[h]] !== i && (n = "-" + b[h].replace("Transform", "").toLowerCase());
    var f = n + "-transform", y = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        m = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            easeFastSlow: "cubic-bezier(.11,.69,.66,1.01)",
            easeBounceBack: "cubic-bezier(.16,1.36,.57,.96)",
            easeBounceBackHard: "cubic-bezier(.8,1.91,0,.94)",
            easeBounceIn: "cubic-bezier(.15,2.6,0,-0.2)",
            easeSwingInOut: "cubic-bezier(.35,3.8,0.3,-0.6)"
        }, O = {
            fadeIn: "opacity: 0;easing: swing;",
            slideInUpShort: "opacity:0;transY: 50px;easing:easeFastSlow;",
            slideInRightShort: "opacity:0;transX: 50px;easing:easeFastSlow;",
            slideInDownShort: "opacity:0;transY: -50px;easing:easeFastSlow;",
            slideInLeftShort: "opacity:0;transX: -50px;easing:easeFastSlow;",
            slideInUpLong: "opacity:0;transY: 250px;easing:easeFastSlow;",
            slideInRightLong: "opacity:0;transX: 250px;easing:easeFastSlow;",
            slideInDownLong: "opacity:0;transY: -250px;easing:easeFastSlow;",
            slideInLeftLong: "opacity:0;transX: -250px;easing:easeFastSlow;",
            bounceIn: "opacity:0;scale:0.7;easing:easeBounceIn;",
            bounceOut: "opacity:0;scale:1.4;easing:easeBounceIn;",
            bounceInUp: "opacity:0;transY: 250px;easing:easeBounceIn;",
            bounceInRight: "opacity:0;transX: 250px;easing:easeBounceIn;",
            bounceInDown: "opacity:0;transY: -250px;easing:easeBounceIn;",
            bounceInLeft: "opacity:0;transX: -250px;easing:easeBounceIn;",
            scaleIn: "opacity:0;scale: 0.6;easing:easeFastSlow;",
            scaleOut: "opacity:0;scale: 1.4;easing:easeFastSlow",
            flipInX: "opacity:0;rotateX: -180deg;easing:easeFastSlow;",
            flipInY: "opacity:0;rotateY: -180deg;easing:easeFastSlow;",
            spinInX: "opacity:0;rotateX: -540deg;easing:easeFastSlow;",
            spinInY: "opacity:0;rotateY: -540deg;easing:easeFastSlow;",
            helicopterIn: "opacity:0;scale: 0.6;rotateZ: -360deg;easing:easeFastSlow;",
            helicopterOut: "opacity:0;scale: 1.4;rotateZ: -360deg;easing:easeFastSlow;",
            signSwingTop: "opacity:0;rotateX:-60deg;transOrigX:50%;transOrigY:0%;easing:easeSwingInOut;",
            signSwingRight: "opacity:0;rotateY:-60deg;transOrigX:100%;transOrigY:50%;easing:easeSwingInOut;",
            signSwingBottom: "opacity:0;rotateX:-60deg;transOrigX:50%;transOrigY:100%;easing:easeSwingInOut;",
            signSwingLeft: "opacity:0;rotateY:-60deg;transOrigX:0%;transOrigY:50%;easing:easeSwingInOut;",
            wiggleX: "opacity:0;rotateX:-90deg;transOrigX:50%;transOrigY:50%;easing:easeSwingInOut;",
            wiggleY: "opacity:0;rotateY:-90deg;transOrigX:50%;transOrigY:50%;easing:easeSwingInOut;",
            dropUp: "opacity:0;transY: 250px;rotateZ:20deg;transOrigX:50%;transOrigY:50%;easing:easeBounceBackHard;",
            dropDown: "opacity:0;transY: -250px;rotateZ:-20deg;transOrigX:0%;transOrigY:0%;easing:easeBounceBackHard;",
            rollInLeft: "opacity:0;transX: -250px;transY: 200px;rotateZ: -120px;transOrigX:0%;transOrigY:0%;easing:easeFastSlow;",
            rollInRight: "opacity:0;transX: 250px;transY: 200px;rotateZ: 120px;transOrigX:100%;transOrigY:0%;easing:easeFastSlow;",
            turnInRight: "opacity:0;transX: 250px;rotateX:20deg;rotateY:75deg;transOrigX:0%;transOrigY:0%;easing:easeBounceBack;",
            turnInLeft: "opacity:0;transX: -250px;rotateX:20deg;rotateY:-75deg;transOrigX:100%;transOrigY:0%;easing:easeBounceBack;"
        }, w = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (w = !0), function () {
        for (var a = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !t.requestAnimationFrame; ++i) t.requestAnimationFrame = t[e[i] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
        t.requestAnimationFrame || (t.requestAnimationFrame = function (e) {
            var i = (new Date).getTime(), n = Math.max(0, 16 - (i - a)), r = t.setTimeout(function () {
                e(i + n)
            }, n);
            return a = i + n, r
        }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        })
    }(), a.fn.horizon = function (e) {
        return this.each(function () {
            var t = a(this);
            if (!t.data("horizon")) {
                var i = new r(this, e);
                t.data("horizon", i)
            }
        })
    }, a.fn.horizon.tmhOpts = {
        easing: "swing",
        easingFallback: "swing",
        speed: "1000ms",
        threshold: 1,
        recurring: !0,
        parallax: !1,
        parallaxSpeed: .2,
        inView: null,
        outOfView: null
    }
}(jQuery, document, window);
/**
 *    Retina replacement Plugin
 *    Version: 1.0
 */
!function (i) {
    "use strict";
    i.fn.retinizeImages = function (e) {
        var t = i.extend({retinaSupportMobile: !1, retinaSuffix: "@2x"}, e), a = function () {
            var e, a = i(this);
            if (a.is("img")) e = a.attr("src"); else if ("none" !== a.css("background-image")) e = a.css("background-image").replace(/^url\(["']?/, "").replace(/["']?\)$/, ""); else {
                if (!a.is("[data-2x]")) return !1;
                e = a.data("2x")
            }
            if (n && !t.retinaSupportMobile && !a.is("[data-retina-mobile]") || a.is("[data-no-retina]") || e.match(/\.(svg)/i) || e.indexOf(t.retinaSuffix) >= 0) return !1;
            if (window.isRetinaDevice()) {
                var r = e.substr(e.lastIndexOf("."));
                e = e.replace(r, t.retinaSuffix + r), i.ajax({
                    type: "GET", url: e, success: function () {
                        i("<img/>").attr("src", e).one("load", function () {
                            a.is("img") ? a.attr("src", e) : a.css("background-image", "url(" + e + ")")
                        })
                    }
                })
            }
        };
        window.isRetinaDevice = function () {
            var i = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
            return this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(i).matches ? !0 : !1
        };
        var n = !1;
        return (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (n = !0), this.each(a)
    }
}(jQuery);
/**
 *    Equalize
 *    Version: 1.0
 */
!function (e) {
    "use strict";
    var t = function (t, i) {
        var s = e.extend({}, e.fn.equalizeHeights.tmeOpts, i), a = e(t), h = this, u = 0, n = 0, o = 0, r = [], c = 0,
            d = a.children(), g = a.data("leader"), l = e('[data-follow="' + g + '"]');
        h.updateHeights = function () {
            o = 0, s.equalizeByGroup ? d.each(function () {
                n = e(this).position().top, e(this).attr("class", function (e, t) {
                    return t.replace(/row-\d+/, "")
                }).css({height: "auto"}), n !== u && (o++, c = 0, r.length = 0), 0 === o && (o = 1, c = 0), r.push(e(this)), c = c > e(this).outerHeight() ? c : e(this).outerHeight(), e.each(r, function (e) {
                    r[e].addClass("row-" + o).css({height: c + "px"})
                }), u = n
            }) : (e(this).css({height: "auto"}), c = 0, c = a.outerHeight(), l.css({height: c + "px"}))
        }, h.clearHeights = function () {
            s.equalizeByGroup ? d.css({height: "auto"}) : l.css({height: "auto"})
        }, e(window).on("resize", function () {
            return s.updateOnResize ? void (e(window).width() > s.clearUnder ? h.updateHeights() : h.clearHeights()) : !1
        }), h.updateHeights()
    };
    e.fn.equalizeHeights = function (i) {
        return this.each(function () {
            var s = e(this);
            if (!s.data("equalizeHeights")) {
                var a = new t(this, i);
                s.data("equalizeHeights", a)
            }
        })
    }, e.fn.equalizeHeights.tmeOpts = {equalizeByGroup: !0, updateOnResize: !0, clearUnder: 479}
}(jQuery);
/**
 *    Counter
 *    Version: 1.0
 */
!function (t) {
    "use strict";
    var a = function (a, n) {
        function o(t) {
            return ("" + t).replace(/(\d)(?=(\d{3})+$)/g, "$1,")
        }

        var r, e = t.extend({}, t.fn.counter.tmcOpts, n), u = t(a), c = this;
        c.startCounter = function () {
            c.clearCounter();
            var t = u.data("count-from") ? parseFloat(u.data("count-from")) : e.from,
                a = u.data("count-to") ? parseFloat(u.data("count-to")) : e.to,
                n = u.data("count-interval") ? parseFloat(u.data("count-interval")) : e.interval,
                l = t > a ? "down" : "up";
            r = setInterval(function () {
                (t === a || isNaN(t) || isNaN(a)) && (clearInterval(r), e.onComplete && e.onComplete()), u.text(o(t)), "up" === l ? t++ : t--
            }, n)
        }, c.clearCounter = function () {
            clearInterval(r);
            var t = u.data("count-from") ? parseFloat(u.data("count-from")) : e.from;
            u.html(t)
        }, e.autoStart && c.startCounter()
    };
    t.fn.counter = function (n) {
        return this.each(function () {
            var o = t(this);
            if (!o.data("counter")) {
                var r = new a(this, n);
                o.data("counter", r)
            }
        })
    }, t.fn.counter.tmcOpts = {autoStart: !0, from: 500, to: 100, interval: 20, onComplete: null}
}(jQuery);
/**
 *    Component editor
 */
$(document).ready(function () {
    "use strict";
    var a = {
        init: function () {
            function a(a) {
                $(j).children().addClass("hide");
                var c = $(n).find("#" + p).children().clone(!0);
                $(j).children().html(c).removeClass("hide"), b(a)
            }

            function b(a) {
                a.find(i).parent().addClass("hide"), a.find(h).parent().addClass("hide"), a.find(i).find(".current").removeClass("current"), a.find(m).html("");
                var b = $(n).find("#" + p).find(".style-element").data("class-support");
                if (!b) return !1;
                var d = String(b).split(";");
                $.each(d, function (b, c) {
                    c = c.split(":");
                    var d = c[0], e = c[1];
                    if (d) {
                        a.find("#" + d).removeClass("hide");
                        var f = e ? a.find(l).find("#" + d).find('[data-class="' + e + '"]').parent() : a.find(l).find("#" + d).find("li:first-child");
                        e ? r.indexOf(d) > -1 && f.addClass("current") : f.addClass("current"), f.closest(i).find("button span:first-child").text(f.text())
                    }
                }), c(a)
            }

            function c(a) {
                $(n).find("#" + p).clone().html();
                $(o).html("");
                var b = a.find(j).children().clone();
                b.find("*").each(function () {
                    $(this).attr("data-class-support") && $(this).attr("data-class-support", ""), $(this).attr("style") && $(this).attr("style", ""), $(this).removeClass("style-element")
                }), b = b.html().replace(/<span class="code-break"><\s*[\/]?span>|<br\s*[\/]?>/g, "\n").replace(' data-class-support=""', "").replace(' style=""', "").replace(' class=""', "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\t\t\t\t\t\t\t/g, ""), $(o).append('<code><pre><span class="tag">' + b + "</span></pre></code>")
            }

            function d(a, b) {
                a.find(i).removeClass("disabled");
                var c = String(b).split(";");
                $.each(c, function (a, b) {
                    b = b.split(":");
                    var c = b[0];
                    c && $("#" + c).find(i).addClass("disabled")
                })
            }

            var e = ".demo-editor", f = ".button-update", g = ".dropdown-components", h = ".dropdown-elements",
                i = ".dropdown-classes", j = ".style-element-wrapper", k = ".style-element", l = ".class-options",
                m = ".class-field", n = ".component-group", o = ".html-example", p = "typography",
                q = "style-element columns-2 icon-check",
                r = ["size", "bkg-color", "bkg-hover-color", "border-style", "corner", "border-color", "border-hover-color", "text-align", "font-weight", "color", "color-hover"];
            $(e).each(function () {
                var b = $(this), c = !0;
                a(b), $(this).find(m).focus(function () {
                    b.addClass("active")
                }), $(this).find(m).blur(function () {
                    b.removeClass("active")
                }), $(this).find(f).on("click", function () {
                    s(b.find(m))
                }), c && (b.find(o).css({display: "none"}), b.find(".hide-html").text("Show HTML")), $(this).find(".hide-html").on("click", function (a) {
                    a.preventDefault(), c ? (b.find(o).css({display: "block"}), $(this).text("Hide HTML"), c = !1) : (b.find(o).css({display: "none"}), $(this).text("Show HTML"), c = !0)
                }), $(this).find(g).find("li:first-child").addClass("current"), $(this).find(g).find("button span:first-child").text($(this).find(g).find(".current a").text()), p = $(this).find(g).find(".current").data("component"), $(this).find(g).find("li a").on("click", function () {
                    if ($(this).closest(g).find(".current").removeClass("current"), $(this).parent().addClass("current"), p = $(this).data("component"), a(b), $(this).closest(g).find("button span:first-child").text($(this).text()), b.find(i).removeClass("disabled"), !$(this).data("element")) return !1;
                    var c = "#" + $(this).data("element");
                    $(c).find("li").removeClass("current"), $(c).find("li:first-child").addClass("current");
                    var e = $(c).find("li:first-child a").data("disable");
                    d(b, e)
                }), $(this).closest(h).find("button span:first-child").text($(this).find(h).find(".current a").text()), $(this).find(h).each(function () {
                    $(this).find("li a").on("click", function () {
                        b.find(m).html(""), $(this).closest(h).find(".current").removeClass("current"), $(this).parent().addClass("current");
                        var a = $(this).data("class");
                        $(this).closest(b).find(j).find(".style-element").removeClass("style-element"), $(this).closest(b).find(j).find("." + a).addClass("style-element");
                        var c = $(this).closest(b).find("." + a).clone().removeClass(q);
                        c = c.attr("class").replace(a, ""), b.find(m).html(c), s(b, !0), $(this).closest(h).find("button span:first-child").text($(this).text()), d(b, $(this).data("disable"))
                    })
                }), $(this).find(i).each(function () {
                    $(this).find("li a").on("click", function () {
                        if ($(this).closest(i).hasClass("disabled")) return !1;
                        var a = b.find(m), c = $(this).closest(i).find(".current a").attr("data-class");
                        $(a).find('[data-class="' + c + '"]').remove(), $(this).closest(i).find(".current").removeClass("current"), $(this).parent().addClass("current");
                        var d = $(this).attr("data-class");
                        $(a).html($(a).html() + " " + d), b.find(k).removeClass(c), $(a).find(".label").each(function () {
                            $(this).find("span").filter(function () {
                                return "" === $.trim($(this).text())
                            }).parent().remove()
                        }), s(b, !1), $(this).closest(i).find("button span:first-child").text($(this).text())
                    })
                })
            }), $(document).on("keydown", function (a) {
                return 13 === a.keyCode ? (s($(e)), !1) : void (32 === a.keyCode ? s($(e)) : 8 === a.keyCode && t($(e)))
            });
            var s = function (a, b) {
                var d = a.find(m);
                d.each(function () {
                    a.find(k).addClass(d.text().replace(/\./g, ""))
                }), u(a, b), c(a)
            }, t = function (a) {
                var b = a.find(m);
                a.find(k).removeClass(b.text());
                var d = setInterval(function () {
                    a.find(k).addClass(b.text()), clearInterval(d)
                });
                c(a)
            }, u = function (a, b) {
                var c = a.find(m).clone().find(".label").remove().end(),
                    d = $.trim(c.text().replace(/\./g, "")).split(" ");
                if ($.trim(c.text()).length > 0) {
                    for (var e = 0, f = d.length; e < f; e++) d[e] = '<span contenteditable="false" class="label style-' + e + '" data-class="' + d[e] + '"><a href="#" class="icon-cancel"></a> <span>' + d[e] + "</span>&nbsp;</span>";
                    var g = a.find(m).find(".label");
                    a.find(m).html("").append(g).append(d)
                }
                v(a.find(m)[0]), w(a), b && x(a)
            }, v = function (a) {
                if ($(a).focus(), "undefined" != typeof window.getSelection && "undefined" != typeof document.createRange) {
                    var b = document.createRange();
                    b.selectNodeContents(a), b.collapse(!1);
                    var c = window.getSelection();
                    c.removeAllRanges(), c.addRange(b)
                } else if ("undefined" != typeof document.body.createTextRange) {
                    var d = document.body.createTextRange();
                    d.moveToElementText(a), d.collapse(!1), d.select()
                }
            }, w = function (a) {
                a.find(m).find(".label a").each(function () {
                    $(this).off("click"), $(this).on("click", function (b) {
                        b.preventDefault(), $(this).closest(a).find(k).removeClass($(this).parent().text()), $(this).parent().remove(), $(this).closest(a).find(m).focus(), $(i).find(".current").removeClass("current"), x(a)
                    })
                })
            }, x = function (a) {
                var b = $(n).find("#" + p).find(".style-element").data("class-support");
                if (!b) return !1;
                var d = String(b).split(";");
                $.each(d, function (b, c) {
                    c = c.split(":");
                    var d = c[0], e = c[1];
                    if (d) {
                        var f = e ? a.find(l).find("#" + d).find('[data-class="' + e + '"]').parent() : a.find(l).find("#" + d).find("li:first-child");
                        e ? r.indexOf(d) > -1 && f.addClass("current") : f.addClass("current"), f.closest(i).find("button span:first-child").text(f.text())
                    }
                });
                var e = a.find(m);
                e.find(".label").each(function () {
                    var a = $.trim($(this).text()), b = $(i).find('[data-class="' + a + '"]').closest(i);
                    b.find(".current").removeClass("current"), b.find('[data-class="' + a + '"]').parent().addClass("current"), b.find("button span:first-child").text(b.find(".current").text())
                }), c(a)
            }
        }
    };
    a.init()
});
/* Site specific third party plugins */
/**
 *    Highlights.js
 *    Version: 9.7.0
 *   BSD3 License
 */
!function (e) {
    var n = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
        return n.hljs
    }))
}(function (e) {
    function n(e) {
        return e.replace(/[&<>]/gm, function (e) {
            return I[e]
        })
    }

    function t(e) {
        return e.nodeName.toLowerCase()
    }

    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 === t.index
    }

    function a(e) {
        return k.test(e)
    }

    function i(e) {
        var n, t, r, i, o = e.className + " ";
        if (o += e.parentNode ? e.parentNode.className : "", t = B.exec(o)) return R(t[1]) ? t[1] : "no-highlight";
        for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++) if (i = o[n], a(i) || R(i)) return i
    }

    function o(e, n) {
        var t, r = {};
        for (t in e) r[t] = e[t];
        if (n) for (t in n) r[t] = n[t];
        return r
    }

    function u(e) {
        var n = [];
        return function r(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling) 3 === i.nodeType ? a += i.nodeValue.length : 1 === i.nodeType && (n.push({
                event: "start",
                offset: a,
                node: i
            }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({event: "stop", offset: a, node: i}));
            return a
        }(e, 0), n
    }

    function c(e, r, a) {
        function i() {
            return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r
        }

        function o(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value) + '"'
            }

            l += "<" + t(e) + w.map.call(e.attributes, r).join("") + ">"
        }

        function u(e) {
            l += "</" + t(e) + ">"
        }

        function c(e) {
            ("start" === e.event ? o : u)(e.node)
        }

        for (var s = 0, l = "", f = []; e.length || r.length;) {
            var g = i();
            if (l += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g === e) {
                f.reverse().forEach(u);
                do c(g.splice(0, 1)[0]), g = i(); while (g === e && g.length && g[0].offset === s);
                f.reverse().forEach(o)
            } else "start" === g[0].event ? f.push(g[0].node) : f.pop(), c(g.splice(0, 1)[0])
        }
        return l + n(a.substr(s))
    }

    function s(e) {
        function n(e) {
            return e && e.source || e
        }

        function t(t, r) {
            return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
        }

        function r(a, i) {
            if (!a.compiled) {
                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                    var u = {}, c = function (n, t) {
                        e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function (e) {
                            var t = e.split("|");
                            u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                        })
                    };
                    "string" == typeof a.k ? c("keyword", a.k) : E(a.k).forEach(function (e) {
                        c(e, a.k[e])
                    }), a.k = u
                }
                a.lR = t(a.l || /\w+/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), null == a.r && (a.r = 1), a.c || (a.c = []);
                var s = [];
                a.c.forEach(function (e) {
                    e.v ? e.v.forEach(function (n) {
                        s.push(o(e, n))
                    }) : s.push("self" === e ? a : e)
                }), a.c = s, a.c.forEach(function (e) {
                    r(e, a)
                }), a.starts && r(a.starts, i);
                var l = a.c.map(function (e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = l.length ? t(l.join("|"), !0) : {
                    exec: function () {
                        return null
                    }
                }
            }
        }

        r(e)
    }

    function l(e, t, a, i) {
        function o(e, n) {
            var t, a;
            for (t = 0, a = n.c.length; a > t; t++) if (r(n.c[t].bR, e)) return n.c[t]
        }

        function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent;) e = e.parent;
                return e
            }
            return e.eW ? u(e.parent, n) : void 0
        }

        function c(e, n) {
            return !a && r(n.iR, e)
        }

        function g(e, n) {
            var t = N.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t]
        }

        function h(e, n, t, r) {
            var a = r ? "" : y.classPrefix, i = '<span class="' + a, o = t ? "" : C;
            return i += e + '">', i + n + o
        }

        function p() {
            var e, t, r, a;
            if (!E.k) return n(B);
            for (a = "", t = 0, E.lR.lastIndex = 0, r = E.lR.exec(B); r;) a += n(B.substr(t, r.index - t)), e = g(E, r), e ? (M += e[1], a += h(e[0], n(r[0]))) : a += n(r[0]), t = E.lR.lastIndex, r = E.lR.exec(B);
            return a + n(B.substr(t))
        }

        function d() {
            var e = "string" == typeof E.sL;
            if (e && !x[E.sL]) return n(B);
            var t = e ? l(E.sL, B, !0, L[E.sL]) : f(B, E.sL.length ? E.sL : void 0);
            return E.r > 0 && (M += t.r), e && (L[E.sL] = t.top), h(t.language, t.value, !1, !0)
        }

        function b() {
            k += null != E.sL ? d() : p(), B = ""
        }

        function v(e) {
            k += e.cN ? h(e.cN, "", !0) : "", E = Object.create(e, {parent: {value: E}})
        }

        function m(e, n) {
            if (B += e, null == n) return b(), 0;
            var t = o(n, E);
            if (t) return t.skip ? B += n : (t.eB && (B += n), b(), t.rB || t.eB || (B = n)), v(t, n), t.rB ? 0 : n.length;
            var r = u(E, n);
            if (r) {
                var a = E;
                a.skip ? B += n : (a.rE || a.eE || (B += n), b(), a.eE && (B = n));
                do E.cN && (k += C), E.skip || (M += E.r), E = E.parent; while (E !== r.parent);
                return r.starts && v(r.starts, ""), a.rE ? 0 : n.length
            }
            if (c(n, E)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || "<unnamed>") + '"');
            return B += n, n.length || 1
        }

        var N = R(e);
        if (!N) throw new Error('Unknown language: "' + e + '"');
        s(N);
        var w, E = i || N, L = {}, k = "";
        for (w = E; w !== N; w = w.parent) w.cN && (k = h(w.cN, "", !0) + k);
        var B = "", M = 0;
        try {
            for (var I, j, O = 0; ;) {
                if (E.t.lastIndex = O, I = E.t.exec(t), !I) break;
                j = m(t.substr(O, I.index - O), I[0]), O = I.index + j
            }
            for (m(t.substr(O)), w = E; w.parent; w = w.parent) w.cN && (k += C);
            return {r: M, value: k, language: e, top: E}
        } catch (T) {
            if (T.message && -1 !== T.message.indexOf("Illegal")) return {r: 0, value: n(t)};
            throw T
        }
    }

    function f(e, t) {
        t = t || y.languages || E(x);
        var r = {r: 0, value: n(e)}, a = r;
        return t.filter(R).forEach(function (n) {
            var t = l(n, e, !1);
            t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
        }), a.language && (r.second_best = a), r
    }

    function g(e) {
        return y.tabReplace || y.useBR ? e.replace(M, function (e, n) {
            return y.useBR && "\n" === e ? "<br>" : y.tabReplace ? n.replace(/\t/g, y.tabReplace) : void 0
        }) : e
    }

    function h(e, n, t) {
        var r = n ? L[n] : t, a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
    }

    function p(e) {
        var n, t, r, o, s, p = i(e);
        a(p) || (y.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e, s = n.textContent, r = p ? l(p, s, !0) : f(s), t = u(n), t.length && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), o.innerHTML = r.value, r.value = c(t, u(o), s)), r.value = g(r.value), e.innerHTML = r.value, e.className = h(e.className, p, r.language), e.result = {
            language: r.language,
            re: r.r
        }, r.second_best && (e.second_best = {language: r.second_best.language, re: r.second_best.r}))
    }

    function d(e) {
        y = o(y, e)
    }

    function b() {
        if (!b.called) {
            b.called = !0;
            var e = document.querySelectorAll("pre code");
            w.forEach.call(e, p)
        }
    }

    function v() {
        addEventListener("DOMContentLoaded", b, !1), addEventListener("load", b, !1)
    }

    function m(n, t) {
        var r = x[n] = t(e);
        r.aliases && r.aliases.forEach(function (e) {
            L[e] = n
        })
    }

    function N() {
        return E(x)
    }

    function R(e) {
        return e = (e || "").toLowerCase(), x[e] || x[L[e]]
    }

    var w = [], E = Object.keys, x = {}, L = {}, k = /^(no-?highlight|plain|text)$/i, B = /\blang(?:uage)?-([\w-]+)\b/i,
        M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, C = "</span>",
        y = {classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0},
        I = {"&": "&amp;", "<": "&lt;", ">": "&gt;"};
    return e.highlight = l, e.highlightAuto = f, e.fixMarkup = g, e.highlightBlock = p, e.configure = d, e.initHighlighting = b, e.initHighlightingOnLoad = v, e.registerLanguage = m, e.listLanguages = N, e.getLanguage = R, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, e.ASM = {cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE]}, e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    }, e.PWM = {b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/}, e.C = function (n, t, r) {
        var a = e.inherit({cN: "comment", b: n, e: t, c: []}, r || {});
        return a.c.push(e.PWM), a.c.push({cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0}), a
    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    }, e.CNM = {cN: "number", b: e.CNR, r: 0}, e.BNM = {cN: "number", b: e.BNR, r: 0}, e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {b: /\[/, e: /\]/, r: 0, c: [e.BE]}]
    }, e.TM = {cN: "title", b: e.IR, r: 0}, e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    }, e.METHOD_GUARD = {b: "\\.\\s*" + e.UIR, r: 0}, e
});
hljs.registerLanguage("javascript", function (e) {
    var r = "[A-Za-z$_][0-9A-Za-z$_]*", t = {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        }, a = {cN: "number", v: [{b: "\\b(0[bB][01]+)"}, {b: "\\b(0[oO][0-7]+)"}, {b: e.CNR}], r: 0},
        n = {cN: "subst", b: "\\$\\{", e: "\\}", k: t, c: []}, c = {cN: "string", b: "`", e: "`", c: [e.BE, n]};
    n.c = [e.ASM, e.QSM, c, a, e.RM];
    var s = n.c.concat([e.CBCM, e.CLCM]);
    return {
        aliases: ["js", "jsx"],
        k: t,
        c: [{cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/}, {
            cN: "meta",
            b: /^#!/,
            e: /$/
        }, e.ASM, e.QSM, c, e.CLCM, e.CBCM, a, {
            b: /[{,]\s*/,
            r: 0,
            c: [{b: r + "\\s*:", rB: !0, r: 0, c: [{cN: "attr", b: r, r: 0}]}]
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                cN: "function",
                b: "(\\(.*?\\)|" + r + ")\\s*=>",
                rB: !0,
                e: "\\s*=>",
                c: [{cN: "params", v: [{b: r}, {b: /\(\s*\)/}, {b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, c: s}]}]
            }, {
                b: /</,
                e: /(\/\w+|\w+\/)>/,
                sL: "xml",
                c: [{b: /<\w+\s*\/>/, skip: !0}, {
                    b: /<\w+/,
                    e: /(\/\w+|\w+\/)>/,
                    skip: !0,
                    c: [{b: /<\w+\s*\/>/, skip: !0}, "self"]
                }]
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {b: r}), {cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: s}],
            i: /\[|%/
        }, {b: /\$[(.]/}, e.METHOD_GUARD, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{bK: "extends"}, e.UTM]
        }, {bK: "constructor", e: /\{/, eE: !0}],
        i: /#(?!!)/
    }
});
hljs.registerLanguage("json", function (e) {
    var i = {literal: "true false null"}, n = [e.QSM, e.CNM], r = {e: ",", eW: !0, eE: !0, c: n, k: i},
        t = {b: "{", e: "}", c: [{cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n"}, e.inherit(r, {b: /:/})], i: "\\S"},
        c = {b: "\\[", e: "\\]", c: [e.inherit(r)], i: "\\S"};
    return n.splice(n.length, 0, t, c), {c: n, k: i, i: "\\S"}
});
hljs.registerLanguage("http", function (e) {
    var t = "HTTP/[0-9\\.]+";
    return {
        aliases: ["https"],
        i: "\\S",
        c: [{b: "^" + t, e: "$", c: [{cN: "number", b: "\\b\\d{3}\\b"}]}, {
            b: "^[A-Z]+ (.*?) " + t + "$",
            rB: !0,
            e: "$",
            c: [{cN: "string", b: " ", e: " ", eB: !0, eE: !0}, {b: t}, {cN: "keyword", b: "[A-Z]+"}]
        }, {cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: {e: "$", r: 0}}, {
            b: "\\n\\n",
            starts: {sL: [], eW: !0}
        }]
    }
});
hljs.registerLanguage("php", function (e) {
    var c = {b: "\\$+[a-zA-Z_-Ã¿][a-zA-Z0-9_-Ã¿]*"}, i = {cN: "meta", b: /<\?(php)?|\?>/}, t = {
        cN: "string",
        c: [e.BE, i],
        v: [{b: 'b"', e: '"'}, {b: "b'", e: "'"}, e.inherit(e.ASM, {i: null}), e.inherit(e.QSM, {i: null})]
    }, a = {v: [e.BNM, e.CNM]};
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [e.HCM, e.C("//", "$", {c: [i]}), e.C("/\\*", "\\*/", {
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.C("__halt_compiler.+?;", !1, {eW: !0, k: "__halt_compiler", l: e.UIR}), {
            cN: "string",
            b: /<<<['"]?\w+['"]?$/,
            e: /^\w+;?$/,
            c: [e.BE, {cN: "subst", v: [{b: /\$\w+/}, {b: /\{\$/, e: /\}/}]}]
        }, i, {
            cN: "keyword",
            b: /\$this\b/
        }, c, {b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/}, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [e.UTM, {cN: "params", b: "\\(", e: "\\)", c: ["self", c, e.CBCM, t, a]}]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{bK: "extends implements"}, e.UTM]
        }, {bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM]}, {bK: "use", e: ";", c: [e.UTM]}, {b: "=>"}, t, a]
    }
});
hljs.registerLanguage("xml", function (s) {
    var e = "[A-Za-z0-9\\._:-]+", t = {
        eW: !0,
        i: /</,
        r: 0,
        c: [{cN: "attr", b: e, r: 0}, {
            b: /=\s*/,
            r: 0,
            c: [{cN: "string", endsParent: !0, v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s"'=<>`]+/}]}]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "meta",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{b: "\\[", e: "\\]"}]
        }, s.C("<!--", "-->", {r: 10}), {b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10}, {
            b: /<\?(php)?/,
            e: /\?>/,
            sL: "php",
            c: [{b: "/\\*", e: "\\*/", skip: !0}]
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {name: "style"},
            c: [t],
            starts: {e: "</style>", rE: !0, sL: ["css", "xml"]}
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {name: "script"},
            c: [t],
            starts: {e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"]}
        }, {cN: "meta", v: [{b: /<\?xml/, e: /\?>/, r: 10}, {b: /<\?\w+/, e: /\?>/}]}, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{cN: "name", b: /[^\/><\s]+/, r: 0}, t]
        }]
    }
});
hljs.registerLanguage("css", function (e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*", t = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{cN: "built_in", b: /[\w-]+/}, {b: /\(/, e: /\)/, c: [e.ASM, e.QSM]}]
                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "number", b: "#[0-9A-Fa-f]+"}, {cN: "meta", b: "!important"}]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {cN: "selector-id", b: /#[A-Za-z0-9_-]+/}, {
            cN: "selector-class",
            b: /\.[A-Za-z0-9_-]+/
        }, {cN: "selector-attr", b: /\[/, e: /\]/, i: "$"}, {
            cN: "selector-pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        }, {b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [{cN: "keyword", b: /\w+/}, {b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM]}]
        }, {cN: "selector-tag", b: c, r: 0}, {b: "{", e: "}", i: /\S/, c: [e.CBCM, t]}]
    }
});
hljs.registerLanguage("markdown", function (e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{cN: "section", v: [{b: "^#{1,6}", e: "$"}, {b: "^.+?\\n[=-]{2,}$"}]}, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+"}, {cN: "strong", b: "[*_]{2}.+?[*_]{2}"}, {
            cN: "emphasis",
            v: [{b: "\\*.+?\\*"}, {b: "_.+?_", r: 0}]
        }, {cN: "quote", b: "^>\\s+", e: "$"}, {
            cN: "code",
            v: [{b: "^```w*s*$", e: "^```s*$"}, {b: "`.+?`"}, {b: "^( {4}|	)", e: "$", r: 0}]
        }, {b: "^[-\\*]{3,}", e: "$"}, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0}, {
                cN: "link",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0}],
            r: 10
        }, {
            b: /^\[[^\n]+\]:/,
            rB: !0,
            c: [{cN: "symbol", b: /\[/, e: /\]/, eB: !0, eE: !0}, {cN: "link", b: /:\s*/, e: /$/, eB: !0}]
        }]
    }
});
hljs.initHighlightingOnLoad();

/*
 *  Clipboard.js v1.5.12
 *  https://zenorocha.github.io/clipboard.js
 *  Licensed MIT Â© Zeno Rocha
 */
!function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t()
    }
}(function () {
    var t, e, n;
    return function t(e, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!e[a]) {
                    var s = "function" == typeof require && require;
                    if (!c && s) return s(a, !0);
                    if (r) return r(a, !0);
                    var l = new Error("Cannot find module '" + a + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var u = n[a] = {exports: {}};
                e[a][0].call(u.exports, function (t) {
                    var n = e[a][1][t];
                    return i(n ? n : t)
                }, u, u.exports, t, e, n, o)
            }
            return n[a].exports
        }

        for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
        return i
    }({
        1: [function (t, e, n) {
            var o = t("matches-selector");
            e.exports = function (t, e, n) {
                for (var i = n ? t : t.parentNode; i && i !== document;) {
                    if (o(i, e)) return i;
                    i = i.parentNode
                }
            }
        }, {"matches-selector": 5}], 2: [function (t, e, n) {
            function o(t, e, n, o, r) {
                var a = i.apply(this, arguments);
                return t.addEventListener(n, a, r), {
                    destroy: function () {
                        t.removeEventListener(n, a, r)
                    }
                }
            }

            function i(t, e, n, o) {
                return function (n) {
                    n.delegateTarget = r(n.target, e, !0), n.delegateTarget && o.call(t, n)
                }
            }

            var r = t("closest");
            e.exports = o
        }, {closest: 1}], 3: [function (t, e, n) {
            n.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function (t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function (t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function (t) {
                var e = Object.prototype.toString.call(t);
                return "[object Function]" === e
            }
        }, {}], 4: [function (t, e, n) {
            function o(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!c.string(e)) throw new TypeError("Second argument must be a String");
                if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
                if (c.node(t)) return i(t, e, n);
                if (c.nodeList(t)) return r(t, e, n);
                if (c.string(t)) return a(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function i(t, e, n) {
                return t.addEventListener(e, n), {
                    destroy: function () {
                        t.removeEventListener(e, n)
                    }
                }
            }

            function r(t, e, n) {
                return Array.prototype.forEach.call(t, function (t) {
                    t.addEventListener(e, n)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(t, function (t) {
                            t.removeEventListener(e, n)
                        })
                    }
                }
            }

            function a(t, e, n) {
                return s(document.body, t, e, n)
            }

            var c = t("./is"), s = t("delegate");
            e.exports = o
        }, {"./is": 3, delegate: 2}], 5: [function (t, e, n) {
            function o(t, e) {
                if (r) return r.call(t, e);
                for (var n = t.parentNode.querySelectorAll(e), o = 0; o < n.length; ++o) if (n[o] == t) return !0;
                return !1
            }

            var i = Element.prototype,
                r = i.matchesSelector || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector;
            e.exports = o
        }, {}], 6: [function (t, e, n) {
            function o(t) {
                var e;
                if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) t.focus(), t.setSelectionRange(0, t.value.length), e = t.value; else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var n = window.getSelection(), o = document.createRange();
                    o.selectNodeContents(t), n.removeAllRanges(), n.addRange(o), e = n.toString()
                }
                return e
            }

            e.exports = o
        }, {}], 7: [function (t, e, n) {
            function o() {
            }

            o.prototype = {
                on: function (t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({fn: e, ctx: n}), this
                }, once: function (t, e, n) {
                    function o() {
                        i.off(t, o), e.apply(n, arguments)
                    }

                    var i = this;
                    return o._ = e, this.on(t, o, n)
                }, emit: function (t) {
                    var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0,
                        i = n.length;
                    for (o; i > o; o++) n[o].fn.apply(n[o].ctx, e);
                    return this
                }, off: function (t, e) {
                    var n = this.e || (this.e = {}), o = n[t], i = [];
                    if (o && e) for (var r = 0, a = o.length; a > r; r++) o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
                    return i.length ? n[t] = i : delete n[t], this
                }
            }, e.exports = o
        }, {}], 8: [function (e, n, o) {
            !function (i, r) {
                if ("function" == typeof t && t.amd) t(["module", "select"], r); else if ("undefined" != typeof o) r(n, e("select")); else {
                    var a = {exports: {}};
                    r(a, i.select), i.clipboardAction = a.exports
                }
            }(this, function (t, e) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {"default": t}
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                var i = n(e), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                }, a = function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }

                    return function (e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(), c = function () {
                    function t(e) {
                        o(this, t), this.resolveOptions(e), this.initSelection()
                    }

                    return t.prototype.resolveOptions = function t() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                    }, t.prototype.initSelection = function t() {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }, t.prototype.selectFake = function t() {
                        var e = this, n = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(), this.fakeHandlerCallback = function () {
                            return e.removeFake()
                        }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
                    }, t.prototype.removeFake = function t() {
                        this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                    }, t.prototype.selectTarget = function t() {
                        this.selectedText = (0, i.default)(this.target), this.copyText()
                    }, t.prototype.copyText = function t() {
                        var e = void 0;
                        try {
                            e = document.execCommand(this.action)
                        } catch (n) {
                            e = !1
                        }
                        this.handleResult(e)
                    }, t.prototype.handleResult = function t(e) {
                        e ? this.emitter.emit("success", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        }) : this.emitter.emit("error", {
                            action: this.action,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }, t.prototype.clearSelection = function t() {
                        this.target && this.target.blur(), window.getSelection().removeAllRanges()
                    }, t.prototype.destroy = function t() {
                        this.removeFake()
                    }, a(t, [{
                        key: "action", set: function t() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function t() {
                            return this._action
                        }
                    }, {
                        key: "target", set: function t(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== ("undefined" == typeof e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        }, get: function t() {
                            return this._target
                        }
                    }]), t
                }();
                t.exports = c
            })
        }, {select: 6}], 9: [function (e, n, o) {
            !function (i, r) {
                if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r); else if ("undefined" != typeof o) r(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener")); else {
                    var a = {exports: {}};
                    r(a, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = a.exports
                }
            }(this, function (t, e, n, o) {
                "use strict";

                function i(t) {
                    return t && t.__esModule ? t : {"default": t}
                }

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function c(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function s(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n)) return e.getAttribute(n)
                }

                var l = i(e), u = i(n), f = i(o), d = function (t) {
                    function e(n, o) {
                        r(this, e);
                        var i = a(this, t.call(this));
                        return i.resolveOptions(o), i.listenClick(n), i
                    }

                    return c(e, t), e.prototype.resolveOptions = function t() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                    }, e.prototype.listenClick = function t(e) {
                        var n = this;
                        this.listener = (0, f.default)(e, "click", function (t) {
                            return n.onClick(t)
                        })
                    }, e.prototype.onClick = function t(e) {
                        var n = e.delegateTarget || e.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({
                            action: this.action(n),
                            target: this.target(n),
                            text: this.text(n),
                            trigger: n,
                            emitter: this
                        })
                    }, e.prototype.defaultAction = function t(e) {
                        return s("action", e)
                    }, e.prototype.defaultTarget = function t(e) {
                        var n = s("target", e);
                        return n ? document.querySelector(n) : void 0
                    }, e.prototype.defaultText = function t(e) {
                        return s("text", e)
                    }, e.prototype.destroy = function t() {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }, e
                }(u.default);
                t.exports = d
            })
        }, {"./clipboard-action": 8, "good-listener": 4, "tiny-emitter": 7}]
    }, {}, [9])(9)
});