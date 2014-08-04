// Avoid `console` errors in browsers that lack a console.
(function() {
	
	// vars
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// smooth scroll
(function(){

	// click
	$('a.smooth').click(function() {
    	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	    	var target = $(this.hash);
	    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    	if (target.length) {
		    	$('html,body').animate({
			    	scrollTop: target.offset().top
			    }, 1000);
			    return false;
			}
		}
	});
}());

// fullpage splash
(function($) {
	
	// init
	$.fn.fullpageSplash = function(customSettings) {
		
		// settings
		var settings = $.extend({
            minusSection: '.minus-section'           
        }, customSettings || {});
        
        // vars
        var fullPageSection = this,
        	windowHeight = $(window).height(),
            minusHeight = $(settings.minusSection).height(),
            splashHeight = windowHeight - minusHeight;
        
		// set
		fullPageSection.css({ height : splashHeight+'px' });
	};
})(jQuery);