function autocollapse() {
    "use strict";
    var e = jQuery("#autocollapse"), t = jQuery(".navbar-collapse");
    e.removeClass("collapsed"), e.innerHeight() > 80 || jQuery(window).width() <= 800 ? (e.addClass("collapsed"), t.removeClass("navbar-hover")) : (e.removeClass("collapsed"), t.hasClass("navbar-hover") || t.addClass("navbar-hover"))
}

function backstretch_image() {
    jQuery(".s1").backstretch(["img/bg/background1.jpg", "img/bg/background2.jpg"], {
        duration: 5e3,
        fade: 2e3,
        centeredY: !1
    })
}

function nav() {
    jQuery(".nav").onePageNav({
        currentClass: "current",
        changeHash: !1,
        scrollSpeed: 750,
        scrollThreshold: .5,
        filter: "",
        easing: "swing",
        begin: function () {
        },
        end: function () {
        },
        scrollChange: function (e) {
        }
    })
}

function performance() {
    window.sr = new scrollReveal({reset: !0, vFactor: .3})
}

function nice_scrollbar() {
    jQuery("body").niceScroll({cursorcolor: "rgba(203,32,39,0.4)"})
}

function init_tooltipster() {
    jQuery(".tooltips").tooltipster({
        theme: "tooltipster-punk",
        offsetY: -20,
        animation: "grow",
        position: "bottom"
    }), jQuery(".tooltips-logo").tooltipster({
        theme: "tooltipster-punk",
        offsetY: 0,
        animation: "grow"
    }), jQuery(".tooltips-fb").tooltipster({
        theme: "tooltipster-fb",
        offsetY: -20,
        animation: "grow"
    }), jQuery(".tooltips-tw").tooltipster({
        theme: "tooltipster-tw",
        offsetY: -20,
        animation: "grow"
    }), jQuery(".tooltips-gp").tooltipster({
        theme: "tooltipster-gp",
        offsetY: -20,
        animation: "grow"
    }), jQuery(".tooltips-p").tooltipster({
        theme: "tooltipster-p",
        offsetY: -20,
        animation: "grow"
    }), jQuery(".tooltips-img").tooltipster({
        theme: "tooltipster-punk",
        offsetY: 0,
        animation: "grow"
    }), jQuery(".tooltips-news").tooltipster({theme: "tooltipster-punk", offsetY: 0, animation: "grow"})
}

function menu_top() {
    var e = jQuery(".s1"), t = jQuery(".navbar-default");
    jQuery(window).scroll(function () {
        var a = e.offset();
        jQuery(this).scrollTop() > a.top + 100 ? t.css({
            background: "rgba(17,19,25,0.94)",
            padding: "0px 0px 0px 0px"
        }) : t.css({background: "rgba(0,0,0,0)", padding: "4px 0px 4px 0px"})
    })
}

function set_valign() {
    jQuery(".s1-title-container").vAlignDiv(".s1")
}

function fire_fly() {
    jQuery.firefly({color: "rgba(255,255,255,0.5)", minPixel: 1, maxPixel: 1, total: 65, on: ".s1-pattern"})
}

function parallax() {
    jQuery(".s1-pattern").parallax("50%", .1), jQuery(".s6").parallax("50%", .1), jQuery(".s12").parallax("50%", .1)
}

function colorbox_images() {
    jQuery(".colorbox").colorbox({maxWidth: "95%", maxHeight: "95%", closeButton: !1, fixed: !0})
}

function owl() {
    jQuery(".owl-portfolio").owlCarousel({
        autoPlay: 6e3,
        pagination: !1,
        singleItem: !0
    }), jQuery(".owl-reviews").owlCarousel({
        autoPlay: 4e3,
        pagination: !1,
        singleItem: !0
    }), jQuery(".owl-logotypes").owlCarousel({
        autoPlay: 3e3,
        pagination: !1,
        itemsCustom: [[0, 1], [450, 2], [600, 3], [700, 4], [1e3, 4], [1060, 5], [1200, 4], [1400, 5], [1600, 6], [1800, 6]]
    })
}

function charts() {
    var e = [163, 432, 132, 65, 46], t = {
        labels: ["HTML PROJECTS", "RUBY ON RAILS", "WORDPRESS", "JQUERY", "SOCIAL NETWORKS"],
        datasets: [{
            fillColor: ["rgba(217,15,48,1)", "#373a4a", "rgba(217,15,48,1)", "#373a4a", "rgba(217,15,48,1)"],
            strokeColor: "rgba(220,220,220,0)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,0)",
            data: [e[0], e[1], e[2], e[3], e[4]]
        }]
    };
    window.onload = function () {
        jQuery(window).width() <= 660 && jQuery("#canvas").attr("height", 400);
        var e = document.getElementById("canvas").getContext("2d");
        window.myBar = new Chart(e).Bar(t, {
            responsive: !0,
            scaleOverride: !0,
            scaleStartValue: 0,
            scaleStepWidth: 50,
            scaleSteps: 10,
            inGraphDataShow: !0,
            inGraphDataFontFamily: "Raleway",
            inGraphDataFontStyle: "bold",
            inGraphDataFontSize: 18,
            inGraphDataVAlign: "bottom",
            inGraphDataPaddingY: 5,
            inGraphDataFontColor: "#ffffff",
            scaleFontFamily: "Raleway",
            scaleFontColor: "#abb2c4",
            scaleFontStyle: "bold",
            yAxisLeft: !1
        })
    }
}

function mapStart() {
    var e = new google.maps.LatLng(52.1991917, 21.0326114),
        t = {zoom: 13, center: e, mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: !1},
        a = [{stylers: [{saturation: -100}, {lightness: 0}]}],
        o = new google.maps.Map(document.getElementById("gmap"), t);
    new google.maps.Marker({position: e, map: o, title: "Hello World!"});
    o.setOptions({styles: a})
}

function generate_1(e, t) {
    noty({text: t, type: e, timeout: 5e3, dismissQueue: !0, maxVisible: 5, layout: "center", theme: "defaultTheme"})
}

function validate_contact_form() {
    jQuery(".validate-contact").submit(function (e) {
        var t = jQuery(".contact-email").val(), a = jQuery(".contact-sender").val(),
            o = jQuery(".contact-content").val();
        validator.isEmail(jQuery(".contact-email").val()) || (generate_1("error", "Email adress in not valid <br> Please write valid email adress"), e.preventDefault()), validator.isAlphanumeric(jQuery(".contact-sender").val()) || (generate_1("error", "Name can only contain letters and numbers"), e.preventDefault()), validator.isAlphanumeric(jQuery(".contact-sender").val()) && validator.isEmail(jQuery(".contact-email").val()) && "" != jQuery(".contact-content").val() && (generate_1("success", "Thank You for Contact with Us"), jQuery.ajax({
            url: "mails.php",
            type: "post",
            data: {email: t, name: a, message: o},
            success: function () {
                jQuery(".contact-email").val(""), jQuery(".contact-sender").val(""), jQuery(".contact-content").val("")
            }
        }), e.preventDefault())
    })
}

function social_plugin() {
    jQuery(".prettySocial").prettySocial()
}

$(document).on("ready page:change", function () {
    navigator.userAgent.match(/Android|IEMobile|BlackBerry|iPhone|iPad|iPod|Opera Mini/i) || nice_scrollbar(), set_valign(), charts()
}), $(window).load(function () {
    jQuery(".loader_container").fadeOut(1e3).hide(), jQuery(".loader_container").css("z-index", "-1"), jQuery("html").css("overflow", "visible"), init_tooltipster(), menu_top(), set_valign(), performance(), parallax(), colorbox_images(), owl(), validate_contact_form(), social_plugin(), backstretch_image(), nav(), autocollapse(), setInterval(set_valign, 15)
}), jQuery(window).on("resize", function () {
    autocollapse()
}), $.fn.vAlignDiv = function (e) {
    return this.each(function (t) {
        var a = jQuery(this).height(), o = jQuery(e).height(), r = (o - a) / 2;
        r > 0 ? jQuery(this).css("margin-top", r) : jQuery(this).css("margin-top", 0)
    })
};
