( function( $ ) {
	"use strict";

    //Accordion
    $('.gazi-accordion-item:first-child').addClass('active');
    $('.gazi-accordion-item:first-child .collapse').addClass('show');
    $('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function() {
        $(this).parent().removeClass('active');
    });

    // Popup Video
    $('.gazi-popup-video,.gazi-popup-url').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // testimonials slide
    $('.gazi-testimonials').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
    });

    // Tabs
    $('.gazi-tabs .nav-item:first-child .nav-link').addClass('active');
    $('.gazi-tabs .nav-item:first-child .nav-link').attr('aria-selected', 'true');
    $('.tab-content .tab-pane:first-child').addClass('show active');


    // Counter
    $('.gazi-count').counterUp({
        delay: 10,
        time: 1000
    });

    // Gallery Carousel
    

    function gallery() {  
        var offset = $(".gallery-carousel").offset().left;      
        $(".gallery-carousel").css({
            "overflow": 'hidden',
            "margin-right": -offset,
            // "padding-right": offset
        });
    }

    $( window ).on( "resize", function() {  
        var offset = $(".gallery-carousel").offset().left;      
        $(".gallery-carousel").css({
            "overflow": 'hidden',
            "margin-right": -offset,
            // "padding-right": offset
        });
    });
	
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/infobox.default', function( $scope, $ ) {
			console.log( $scope );
			// $scope.find('.infobox').hide();
		} );
	} );
	
} )( jQuery );
