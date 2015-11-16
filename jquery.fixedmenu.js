/* ===========================================================
 * jquery.fixedmenu.js v1
 * ===========================================================
 * Copyright 2015 Iljin Oleg.
 * http://www.iljin-oleg.ru
 *
 * A small jQuery plugin for fixing menu
 * https://github.com/oiljin/FixedMenu
 *
 * ========================================================== */


/*global jQuery, document, window*/

(function ($) {
    "use strict";

    $.fn.fixedMenu = function (options) {

        var settings = $.extend({
                fixClass : 'navbar-fixed-top'
            }, options),

            $menuTop, 
            menuTopPosition = 0,

            scrollY = function() {
                return window.scrollY || document.documentElement.scrollTop;
            },

            checkMenu = function () {
                if (scrollY() >= menuTopPosition) {
                    $menuTop.addClass(settings.fixClass);
                } else {
                    $menuTop.removeClass(settings.fixClass);
                }
            };

        

        $menuTop = this.eq(0);
        menuTopPosition = $menuTop.offset().top;

        checkMenu();

        $(window).scroll(checkMenu);
        $(window).resize(checkMenu);

        return this;
    };

}(jQuery));