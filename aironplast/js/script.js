$(document).ready(function () {
    
    setTimeout(function() {
       $('html').removeClass('is-preload');
    }, 1000);
    
	var winWidth = $(window).width();
    // cart
    $('.cart-button').click(function () {
        location.href = 'cart.html';
    });
    
    // menu
    var menu = $('.menu');
    $('.menu-close').click(function() {
        menu.toggle( "slide" );
        menu.removeClass('is-on-top');
        $('.l-header').removeClass('is-active-menu');
    });
    
	$('.menu-toggle').click(function() {
		$('.menu-top').removeClass('is-active');
		$('.l-header').addClass('is-active-menu');
        menu.addClass('is-on-top');
    	menu.toggle( "slide" );
    });

    // menu scroll on mobile
    var oldToTop = '';
    var toTop = '';
    $(window).scroll(function () {

        if (winWidth < 759 && menu.hasClass('is-on-top')) {
            oldToTop = toTop;
            toTop = $(window).scrollTop();
            var menuHeight = menu.outerHeight();
            var toBottom = toTop + $(window).height();
            
            if (toBottom > menuHeight) {
                menu.addClass('is-fixed');
                $('html, body').animate({
                    scrollTop: oldToTop
                }, 0);
            } else {
                menu.removeClass('is-fixed');
            }
        }

    });
    
    if (winWidth < 1366) {
        $('.is-extended > a').click(function(event) {
            if(!$(this).hasClass('is-active')) {
                // disable link
                event.preventDefault();
                
                // default states
                $('.menu-sub').hide();
                $('.is-extended > a').removeClass('is-active');
                
                // expand sub menu
                $(this).addClass('is-active');
                var currentMenu = $(this).parent().find('.menu-sub');
                currentMenu.addClass('is-active');
                currentMenu.show();
            } 
        });
    }

    // hide pop-ups
    $(document).mouseup(function (e){
        // elements
		var div = $('.is-on-top');
        
        // test subj & children
		if (!div.is(e.target) && div.has(e.target).length === 0) {
            if(div.hasClass('menu')) {
                div.toggle( "slide" );
            } else {
                div.hide('slow');
            }
            
            div.removeClass('is-on-top');
            $('body').removeClass('is-modal');
		}
        
	});
    // /menu
    
    if (winWidth < 760) {
    	// mobile
    	
    	// carousels
    	initSlider('.sales');
    	initSlider('.galleries');
    	
    	var $slickGallery = $('.gallery-photos');
	    $slickGallery.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $('.galleries-paging').html(i + '/<span class="total">' + slick.slideCount + '</span>');
	    });
		
	
		$slickGallery.slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  'prevArrow': $('.galleries-prev'),
	      'nextArrow': $('.galleries-next')
		});
		
    	
    	// product descr accordion
    	$( ".tabs" ).accordion({
	      header: ".tab-label",
	      heightStyle: "content",
	      icons: "",
	      collapsible: true
	    });
    	
    	
	} else {
		// tablet & above
		
		// galleries		
	    var $slickGalleries = $('.galleries');
	    $slickGalleries.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $('.galleries-paging').html(i + '/<span class="total">' + slick.slideCount + '</span>');
	    });
		
		$slickGalleries.slick({
		  'slidesToShow': 1,
		  'slidesToScroll': 1,
		  'dots': true,
		  'prevArrow': $('.galleries-prev'),
	      'nextArrow': $('.galleries-next'),
	      'customPaging': function(slider, i) {
		        var gallery = $(slider.$slides[i]).find('.gallery');
		        return '<button class="gallery-page-name"><span class="gallery-page-number">' + gallery.data('num') + '</span>&nbsp;' + gallery.data('name') + '</button>';
		    },
		});
		
		// gallery
		var $slickGalleryNav = $('.gallery-photos-nav');
	    $slickGalleryNav.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $('.galleries-paging').html(i + '/<span class="total">' + slick.slideCount + '</span>');
	    });
		
		$('.gallery-photos').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  asNavFor: '.gallery-photos-nav'
		});
        
        var vertical = true;
        if(winWidth > 759 && winWidth< 1366) {
            vertical = false;
        }
		
		$slickGalleryNav.slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  asNavFor: '.gallery-photos',
		  centerMode: true,
		  centerPadding: '0',
		  focusOnSelect: true,
		  vertical: vertical,
		  'prevArrow': $('.galleries-prev'),
	      'nextArrow': $('.galleries-next'),
		      'responsive': [
		    {
		      breakpoint: 1600,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    }, {
		      breakpoint: 1365,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    }
		    
		  ]
		});
		
		// tabs
		$( ".tabs" ).tabs({
	      active: 0
	    });
	    
	    // sales home screen
	    var salesBlock = $('.sales-block-wrap');
	    salesBlock.slick({
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  'prevArrow': '',
	      'nextArrow': '.sales-block-next'
		});
		
	
		salesBlock.find('.slick-slide').addClass('not-active');	
		salesBlock.find('.slick-active').removeClass('not-active');
		
		// On before slide change
		salesBlock.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		      salesBlock.find('.slick-slide').removeClass('not-active');	
              salesBlock.find('.slick-active').addClass('not-active');
		});
		
		salesBlock.on('afterChange', function(event, slick, currentSlide, nextSlide) {
			salesBlock.find('.slick-slide').addClass('not-active');	
			salesBlock.find('.slick-active').removeClass('not-active');
		});

	}
    
   
    $('.clients-wrap').slick({
        'slidesToShow': 1,
        'prevArrow': '.clients-prev',
        'nextArrow': '.clients-next',
        'slidesToShow': 6,
        'slidesToScroll': 6,
        'responsive': [
	    {
	      breakpoint: 1365,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
	    {
	      breakpoint: 759,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
    });
    
    $('.team-wrap').slick({
        'slidesToShow': 3,
        'prevArrow': '.team-prev',
        'nextArrow': '.team-next',
        'responsive': [
	    {
	      breakpoint: 1365,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 759,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
    });
    
	$('.cert-wrap').slick({
        'slidesToShow': 3,
        'prevArrow': '.cert-prev',
        'nextArrow': '.cert-next',
        'responsive': [
	    {
	      breakpoint: 1365,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 759,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
    });
    
    // show more products
    $('.show-more-button').click(function () {
        $('.product').show();
        $('.show-more-button').remove();
    });
    
//    $('.select-input').on('change', function () {
//	    location = this.value;
//	});

	$('.product-select-color .select-input').on('change', function () {
		$('.product-price').html($(this).data('price'));
		
	});
	
	
	// filter
    $('.checkbox-label').click(function () {
        if ($(this).children('input').is(':checked')) {
            $(this).addClass('is-active');
        } else {
            $(this).removeClass('is-active');
        }
    });
    
    $('.filter-open').click(function () {
    	$('.filter-wrap').removeClass('is-hidden');
        $('.filter-wrap').addClass('is-on-top');
    	$('.filter-wrap').show();
    });	
    
    $('.filter-close').click(function () {
        $('.filter-wrap').removeClass('is-on-top');
    	$('.filter-wrap').hide();
    });
    
    $('.filter-group-title').click(function () {
        var group = $('.filter-' + $(this).data('gr'));
        if (group.hasClass('is-hidden')) {
            // show
            group.stop().slideDown();
            group.removeClass('is-hidden');
            $(this).removeClass('is-disabled');
        } else {
            // hide
            group.stop().slideUp();
            group.addClass('is-hidden');
            $(this).addClass('is-disabled');
        }
    });
    
     $('.filter-more').click(function (event) {
     	event.preventDefault();
     	$(this).hide();
     	$('.filter-' + $(this).data('gr') + ' .filter-item').removeClass('is-hidden');;
     });
     
     
     // product page
     initSlider('.product-images');
     
     $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
      _renderItem: function( ul, item ) {
        var li = $( "<li>" ),
          wrapper = $( "<div>", { text: item.label } );
 
        if ( item.disabled ) {
          li.addClass( "ui-state-disabled" );
        }
 
        $( "<span>", {
          style: item.element.attr( "data-style" ),
          "class": "ui-icon " + item.element.attr( "data-class" )
        })
          .appendTo( wrapper );
 
        return li.append( wrapper ).appendTo( ul );
      }
    });
    
     $('.product-select').iconselectmenu()
     	.iconselectmenu( "menuWidget" )
     	.addClass( "color" );
     	
    $('.product-qty-decr').click(function(event) {
    	event.preventDefault();
    	var qty = $('.product-qty-val').val();
    	if(qty-- > 1) {
	    	$('.product-qty-val').val(qty);
    	}
    });
    
    $('.product-qty-incr').click(function(event) {
    	event.preventDefault();
    	var qty = $('.product-qty-val').val();
    	if(qty++ < 100) {
    		$('.product-qty-val').val(qty);
    	}
    });
    
    
    $('.review-more').click(function() {
    	$(this).parent().find('.review').removeClass('is-hidden');
		$(this).remove();
    });
    
    // /product page
    
    // news
    $('.articles-more').click(function() {
    	$('.article').removeClass('is-hidden');
		$(this).remove();
    });
    
    
    // faq
    $( ".faq" ).accordion({
      header: ".faq-question",
      heightStyle: "content",
      icons: "",
      collapsible: true
    });
    
    // job
    $( ".job" ).accordion({
      header: ".job-title",
      heightStyle: "content",
      icons: "",
      collapsible: true
    });
    
    // cart 
    $('.cart-remove').click(function() {
		$(this).parents('.product').remove();
    });
    
    
    $(".form-select").selectmenu({
    	 icons:{ button:"	ui-icon-caret-1-s" },
/*    	 classes: {
		    "ui-selectmenu-icon": "form-select-icon"
		 }*/
    	 
    });
    
    $('.home-scroll').click(function() {
    	var offset = $("#catalog-title").offset().top - 100;
		$('html, body').animate({
	        scrollTop: offset
	    }, 1500);
    });
    
    // animation home title
    animateTitle();
    
    if (winWidth > 760) {
	    var toCat = 0;
	    if($('.articles').length) {
	    	var toCat = $('.articles').offset().top;
	    }
        
	    if(toCat < $(window).height()) {
	    	animateCatalog();
	    }
	    
	    // catalogAnim
	    $( window ).scroll(function() {
	    	// animate catalog
	    	var toTop = $(window).scrollTop() + $(window).height();
	    	if (winWidth > 760 && toTop > toCat) {
				animateCatalog();
	        }
		});
	}

    // top menu
    if (winWidth > 1365) {
        var current = 0;
        var old = 0;
        var menuTop = $('.menu-top');

        $(window).scroll(function () {
            old = current;
            current = $(window).scrollTop();
			
            // header 
            if (current > 0) {
                $('.l-header').addClass('is-active');
                $('.l-main').addClass('is-active');
            } else {
                $('.l-header').removeClass('is-active');
                $('.l-main').removeClass('is-active');
            }
            
            // top -menu
            if (old > current && current > 0) {
                // scroll up
                menuTop.addClass('is-active');
                menuTop.removeClass('is-hidden');
            } else {
                //  scroll down
                menuTop.removeClass('is-active');
                
                if(current != 0) {
                    menuTop.addClass('is-hidden');
                } 
            }
        });
    }

	// Autoscroll
	 $(window).scroll(function () {
	 	if($('.show-more-button').length) {
		 	if($(window).scrollTop() > $('.show-more-button').offset().top - $(window).height() / 2) {
		 		$('.product').show();
		        $('.show-more-button').remove();
	        } 
        }
	 });
	 
	 // modals
	 $('.feedback-button').click(function () {
	 	$('body').addClass('is-modal');
	 	$('.feedback-form').show();
	 	$('.feedback-form').addClass('is-on-top');
	 });
	 
	 $('.feedback-form-close').click(function () {
	 	$('.feedback-form').hide();
        $('.feedback-form').removeClass('is-on-top');
	 	$('body').removeClass('is-modal');
	 });
	 
	 // about menu
	 var blockOffset = 220;
	 if (winWidth < 1366) {
	 	blockOffset = 80;
	 }
	 $('.about-menu-link').click(function (event) {
	 	event.preventDefault();
	 	
	 	var anchor = $(this).attr('href');
	 	var offset = $(anchor).offset().top - blockOffset;
	 	
		$('html, body').animate({
	        scrollTop: offset
	    }, 1500);
	 });
	 
	 if (winWidth > 760) {
		$('.parallax-img').each(function() {
		
		  var img = $(this);
		  var imgParent = $(this).parent();
		  
		  function parallaxImg () {
		    var speed = '-0.5';
		    var imgY = imgParent.offset().top;
		    var winY = $(this).scrollTop();
		    var winH = $(this).height();
		    var parentH = imgParent.innerHeight();
		
		    // The next pixel to show on screen      
		    var winBottom = winY + winH;
		
		    // If block is shown on screen
		    if (winBottom > imgY && winY < imgY + parentH) {
		      // Number of pixels shown after block appear
		      var imgBottom = ((winBottom - imgY) * speed);
		      // Max number of pixels until block disappear
		      var imgTop = winH + parentH;
		      // Porcentage between start showing until disappearing
		      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
		    }
		    img.css({
		      top: imgPercent + '%',
		      transform: 'translate(0%, -' + imgPercent + '%)'
		    });
		  }
		  
		  $(document).on({
		    ready: function () {
			      parallaxImg();
		    }, scroll: function () {
			      parallaxImg();
		    }
		  });
		  
		});
	}
    
    // product reviews
    $('.product-reviews-link').click(function(event) {
        event.preventDefault();
        if (winWidth > 760) {
            var offset = $(".tabs").offset().top - 160;
            var reviewId = $( "#tab-reviews" ).attr('aria-labelledby');
            $('#' + reviewId).click();
        } else {
            var offset = $(".tabs").offset().top;
            $('.tab-reviews .tab-label').click();
        }
        $('html, body').animate({
            scrollTop: offset
        }, 1500);
    });
    
    // close form - send
    $('.review-form-popup .button-blue').click(function(event) {
        event.preventDefault();
        $('.review-form-popup').hide('slow');
        $('.review-form-popup').removeClass('is-on-top');
//        $('.review-form-mobile .button-white').show();
    });
    // open form
    $('.review-form-mobile .button-white').click(function(event) {
        event.preventDefault();
//        $('.review-form-mobile .button-white').hide();
        $('.review-form-popup').addClass('is-on-top');
        $('.review-form-popup').show('slow');
        
    });
    
    // colorbox
    $('.cert-item').colorbox({
        rel:'cert-item',
        height:"80%",
        transition:"fade"
    });
    
 });
 
 // /ready

function initSlider(elem) {
	var $status = $(elem + '-paging');
    var $slickElement = $(elem);

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html(i + '/<span class="total">' + slick.slideCount + '</span>');
    });
    $slickElement.slick({
        'slidesToShow': 1,
        'prevArrow': elem + '-prev',
        'nextArrow': elem + '-next',
    });
}

function animateTitle() {
	var tl = new TimelineLite();
	
	tl.to($('.title1'), 2, {ease: Power0.easeNone, x: "0%" });
    tl.to($('.feedback-button'), 3.5, {ease: Power4.easeOut, x: "0%"}, "-=2");
    tl.to($('.title2'), 3, {ease: Power4.easeOut, x: "0%"}, "-=2.5");
}

function animateCatalog() {
	var current, offset, image, text  = '';
    
    // animate catalog title
	var title = $('#catalog-title');
    if(title.length && !title.hasClass('is-animated')) {
        var tl = new TimelineLite();
        tl.staggerTo(title, 0.5, {x: "0%", ease: Power3.easeOut}, 0, 0);
        title.addClass('is-animated');
    }
    
    // animate catalog blocks
    $('.articles .article').each(function() {
        current = $(window).scrollTop() + $(window).height();
        offset = $(this).offset().top;
        
        if(current > offset && !$(this).hasClass('is-animated')) {
            tl = new TimelineLite();
            image = $(this).find('.article-image-wrap2');
            text = $(this).find('.article-text-wrap');

            tl.staggerTo(image, 1.5, {x: "0%", ease: Power1.easeOut}, 0, 0);
            tl.staggerFromTo(text, 1.5, {y: "30%"}, {y: "0%", ease: Power1.easeOut}, 0, 0.5);
            tl.staggerTo(text, 1.0, {autoAlpha: 1, ease: Power1.easeOut}, 0, 1.0);
            
            $(this).addClass('is-animated');
        }
    });

};
