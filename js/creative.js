/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // Use this.hash as the selector: hrefs like "/#fleet" (site.baseurl
    // prefix) are invalid jQuery selectors and would throw. When the
    // target is not on this page (nav from a subpage), fall through to
    // normal navigation; the hash-load code below smooth-scrolls on arrival.
    $('a.page-scroll').bind('click', function(event) {
        var target = this.hash;
        if (!target) {
            return;
        }
        var $target = $(target);
        if (!$target.length) {
            return;
        }
        $('html, body').stop().animate({
            scrollTop: ($target.offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Smooth-scroll when the page loads with a #hash (e.g. links from subpages
    // like /vildanden/ pointing at /#oppdrag) instead of jumping instantly.
    // The target is measured BEFORE hiding the body: a hidden element reports
    // offset().top = 0, which scrolled every arrival to the top of the page.
    // The scroll is re-run once images have loaded, since they change the
    // layout height and would otherwise leave the target offset.
    if (window.location.hash) {
        var $target = $(window.location.hash);
        if ($target.length) {
            var scrollToTarget = function () {
                $('html, body').stop().animate({
                    scrollTop: ($target.offset().top - 50)
                }, 1250, 'easeInOutExpo');
            };
            scrollToTarget();
            $('img').one('load', scrollToTarget);
            $(window).one('load', scrollToTarget);
        }
    }

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click.
    // dropdown-toggle is EXCLUDED: on mobile, tapping a dropdown parent
    // (Flåten/Om oss/etc.) collapsed the whole menu before the dropdown
    // could open. Dropdown items (li a without .dropdown-toggle) still close it.
    $('.navbar-collapse ul li a').not('.dropdown-toggle').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
