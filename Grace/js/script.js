$(document).ready(function () {
$(".top-menu-container").on("click", "a", function (event) { 
event.preventDefault();
var id = $(this).attr('href')
, top = $(id).offset().top;
$('body,html').animate({
scrollTop: top
}, 1000);
});
$(".menu-connect-btn").click(function(event){
 event.preventDefault();
var id = $(this).attr('href')
, top = $(id).offset().top;
$('body,html').animate({
scrollTop: top
}, 1000);
})
});
(function(){
    var $wrapper    = $(".about-slider-wrapper");
    if($wrapper.length === 0) return;
    var $slides     = $(".about-slider-wrapper img");
    var slidesWidth = $slides.css('width');
    var $lArrow     = $(".about-l-arrow");
    var $rArrow     = $(".about-r-arrow");
    var slidesLength = $slides.length;
    var slidewidth  = (parseInt(slidesWidth, 10));
    $slides.css("left" , slidesWidth);
    $($slides[0]).css("left", 0);
    var counter = 0;
    var currentElement = $slides[0];
    var prevElement =  $slides[0];
    var sliderStatus = true;
    var $countText = $(".about-counter-text");
    var counterText = counter+1+"/"+slidesLength;
    $countText.text(counterText);
    function makeSlider(event){
        if(sliderStatus === false) return;
        sliderStatus = false;
        var el;
        if(el === undefined) {
            el = counter+1;
        };
        if(event) {
        	if(event.target === $lArrow[0]) {
        		el=counter-1;
        		if(el === -1) {
        			el = slidesLength - 1;
        	var $slide = $($slides[el]);
            $slide.css("left", "-" + slidesWidth);
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slidesWidth
            }, 600);
            counter = slidesLength - 1;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        		}
        	};
        	if(event.target === $rArrow[0]) {
        		el=counter+1;
        		if(el > slidesLength - 1) {
        			el = 0;
            var $slide = $($slides[el]);
            $slide.css("left", slidesWidth);
            var slideLeft = "-" + slidesWidth;
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slideLeft
            }, 600);
            counter = el;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        		}
        	};
            }
        if (el < counter) {
            var $slide = $($slides[el]);
            $slide.css("left", "-" + slidesWidth);
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slidesWidth
            }, 600);
            counter = el;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        }
         if (el > counter) {
            var $slide = $($slides[el]);
            $slide.css("left", slidesWidth);
            var slideLeft = "-" + slidesWidth;
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slideLeft
            }, 600);
            counter = el;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        } else {
            return;
        }
    };
    $lArrow.click(makeSlider);
    $rArrow.click(makeSlider);
    // setInterval(makeSlider, 10000);
})();
(function(){
    var $wrapper    = $(".our-team-slider-img-wrapper");
    if($wrapper.length === 0) return;
    var $slidesText = $(".our-team-slider-text");
    $slidesText.css({
    	"display" : "none",
    	"opacity" : "0"
    });
    $($slidesText[0]).css({
    	"display" : "block",
    	"opacity" : "1"
    });
    var $slides     = $(".team-img-slide");
    var slidesWidth = $slides.css('width');
    var $lArrow = $(".our-team-l-arrow");
    var $rArrow = $(".our-team-r-arrow");
    var slidesLength = $slides.length;
    var slidewidth  = (parseInt(slidesWidth, 10));
    $slides.css("left" , slidesWidth);
    $($slides[0]).css("left", 0);
    var counter = 0;
    var currentElement = $slides[0];
    var prevElement =  $slides[0];
    var sliderStatus = true;
    var $countText = $(".our-team-counter-text");
    var counterText = counter+1+"/"+slidesLength;
    $countText.text(counterText);
    function textSlider(target) {
    	$slidesText.css({
    	"display" : "none",
    	"opacity" : "0"
    });
    	$(target).css("display", "block").velocity({
    		opacity : 1
    	}, 600)
    };


    function makeSlider(event){
        if(sliderStatus === false) return;
        sliderStatus = false;
        var el;
        if(el === undefined) {
            el = counter+1;
        };
        if(event) {
        	if(event.target === $lArrow[0]) {
        		el=counter-1;
        		if(el === -1) {
        			el = slidesLength - 1;
        	var $slide = $($slides[el]);
            $slide.css("left", "-" + slidesWidth);
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slidesWidth
            }, 600);
            counter = slidesLength - 1; 
            textSlider($slidesText[counter]);   
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        		}
        	};
        	if(event.target === $rArrow[0]) {
        		el=counter+1;
        		if(el > slidesLength - 1) {
        			el = 0;
            var $slide = $($slides[el]);
            $slide.css("left", slidesWidth);
            var slideLeft = "-" + slidesWidth;
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slideLeft
            }, 600);
            counter = el;
            textSlider($slidesText[counter]);     
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        		}
        	};
            }
        if (el < counter) {
            var $slide = $($slides[el]);
            $slide.css("left", "-" + slidesWidth);
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slidesWidth
            }, 600);
            counter = el;
            textSlider($slidesText[counter]);     
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        }
         if (el > counter) {
            var $slide = $($slides[el]);
            $slide.css("left", slidesWidth);
            var slideLeft = "-" + slidesWidth;
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slideLeft
            }, 600);
            counter = el; 
            textSlider($slidesText[counter]);    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        } else {
            return;
        }
    };
    $lArrow.click(makeSlider);
    $rArrow.click(makeSlider);
    // setInterval(makeSlider, 10000);
})();
(function(){
    var $wrapper = $('.result-slider-wrapper');
    var $viewerWidth = (parseInt($(".result-slider").css("width"), 10));
    var $countText = $(".results-counter-text");
    var counter = 0;
    var $slides = $('.result-slide');
    var slidesLength =  $slides.length;
    var counterText = counter+1+"/"+slidesLength;
    var position = 0;
    $countText.text(counterText);
    var slidesWidth = (parseInt($slides.css("width"), 10));
    var wrapperWidth = slidesLength*slidesWidth + "px";
    $(window).resize(function(){
        $viewerWidth = (parseInt($(".result-slider").css("width"), 10));
        $wrapper.css("margin-left", 0);
        position = 0;
        counter = 0;
        counterText = counter+1+"/"+slidesLength;
        $countText.text(counterText);
    })
    $wrapper.css( "width" , wrapperWidth);
    $(".results-r-arrow").click(function(){
        counter = counter + 1;
        if (counter > slidesLength-1) {
            counter = 0;
            
        } 
       counterText = counter+1+"/"+slidesLength;
       $countText.text(counterText); 


        var $slide = $('.result-slide');
        var slideWidth = $slide.css('width');
        position = position - (parseInt(slideWidth, 10));
        if(position > $viewerWidth-slidesLength*slidesWidth-30 ) {
            console.log(position);
        $wrapper.velocity({
            marginLeft : position
        }, 600);
            return;
        }
        if(position < $viewerWidth-slidesLength*slidesWidth-30 ) {
            var $slides    = $('.result-slide');
            var correction = $viewerWidth-slidesLength*slidesWidth;
            var step       = -correction - (parseInt($slide.css('width'), 10));
            var lastSlide  = $slides[$slides.length-1];
            $($slides[0]).insertAfter(lastSlide);
            $wrapper.css("margin-left", -step );
            $wrapper.velocity({
                marginLeft : correction
            }, 600)
            position = correction;
        }
    });
    $(".results-l-arrow").click(function(){
        
        counter = counter - 1;
        if (counter < 0) {
            counter = slidesLength-1;
            
        } 
       counterText = counter+1+"/"+slidesLength;
       $countText.text(counterText); 
        
        var $slide = $('.result-slide');
        var slideWidth = $slide.css('width');
        
        if (position != 0) {
           position = position + (parseInt(slideWidth, 10));
           $wrapper.velocity({
           marginLeft : position
        }, 600);
            return;
        }
        if (position === 0) {
            var $slides    = $('.result-slide');
            var slideWidth = "-" + $slide.css('width');
            var lastSlide  = $slides[$slides.length-1];
            $(lastSlide).insertBefore($slides[0]);
            $wrapper.css("margin-left", slideWidth );
            $wrapper.velocity({
                marginLeft : 0
            }, 600)
        }

    });
})();
(function(){
    var $wrapper    = $(".clients-slider-wrapper");
    if($wrapper.length === 0) return;
    var $slides     = $(".client-slide");
    var slidesWidth = $slides.css('width');
    var $lArrow = $(".clients-l-arrow");
    var $rArrow = $(".clients-r-arrow");
    var slidesLength = $slides.length;
    var slidewidth  = (parseInt(slidesWidth, 10));
    $slides.css("left" , slidesWidth);
    $($slides[0]).css("left", 0);
    var counter = 0;
    var currentElement = $slides[0];
    var prevElement =  $slides[0];
    var sliderStatus = true;
    var $countText = $(".clients-counter-text");
    var counterText = counter+1+"/"+slidesLength;
    $countText.text(counterText);

    function makeSlider(event){
        if(sliderStatus === false) return;
        sliderStatus = false;
        var el;
        if(el === undefined) {
            el = counter+1;
        };
        if(event) {
        	if(event.target === $lArrow[0]) {
        		el=counter-1;
        		if(el === -1) {
        			el = slidesLength - 1;
        	var $slide = $($slides[el]);
            $slide.css("left", "-" + slidesWidth);
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slidesWidth
            }, 600);
            var $cText =  $slide.find(".client-slide-text");
                 $cText.css("opacity", "0");
//            var $cName = $slide.find(".client-slide-name");
//	            var cNameWidth = $cName.css("width");
//	            $cName.css("width", "0");
            setTimeout(function(){
	            $cText.velocity({
	            	opacity: "1"
	            }, 600);
//	            $cName.velocity({
//	            	width : cNameWidth
//	            }, 1200);
            }, 600);
            counter = slidesLength - 1;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        		}
        	};
        	if(event.target === $rArrow[0]) {
        		el=counter+1;
        		if(el > slidesLength - 1) {
        			el = 0;
            var $slide = $($slides[el]);
            $slide.css("left", slidesWidth);
            var slideLeft = "-" + slidesWidth;
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slideLeft
            }, 600);
            var $cText =  $slide.find(".client-slide-text");
                 $cText.css("opacity", "0");
//            var $cName = $slide.find(".client-slide-name");
//	            var cNameWidth = $cName.css("width");
//	            $cName.css("width", "0");
            setTimeout(function(){
	            $cText.velocity({
	            	opacity: "1"
	            }, 600);
//	            $cName.velocity({
//	            	width : cNameWidth
//	            }, 1200);
            }, 600);
            counter = el;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        		}
        	};
            }
        if (el < counter) {
            var $slide = $($slides[el]);
            $slide.css("left", "-" + slidesWidth);
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slidesWidth
            }, 600);
            var $cText =  $slide.find(".client-slide-text");
                 $cText.css("opacity", "0");
//            var $cName = $slide.find(".client-slide-name");
//	            var cNameWidth = $cName.css("width");
//	            $cName.css("width", "0");
            setTimeout(function(){
	            $cText.velocity({
	            	opacity: "1"
	            }, 600);
//	            $cName.velocity({
//	            	width : cNameWidth
//	            }, 1200);
            }, 600);
            counter = el;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        }
         if (el > counter) {
            var $slide = $($slides[el]);
            $slide.css("left", slidesWidth);
            var slideLeft = "-" + slidesWidth;
            $slide.velocity({
                left : 0
            }, 600);
            $(currentElement).velocity({
                left : slideLeft
            }, 600);
            var $cText =  $slide.find(".client-slide-text");
                 $cText.css("opacity", "0");
//            var $cName = $slide.find(".client-slide-name");
//	            var cNameWidth = $cName.css("width");
//	            $cName.css("width", "0");
            setTimeout(function(){
	            $cText.velocity({
	            	opacity: "1"
	            }, 600);
	            $cName.velocity({
	            	width : cNameWidth
	            }, 1200);
            }, 600);
            counter = el;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 600);
            counterText = counter+1+"/"+slidesLength;
            $countText.text(counterText);
            return;
        } else {
            return;
        }
    };
    $lArrow.click(makeSlider);
    $rArrow.click(makeSlider);
    // setInterval(makeSlider, 10000);
})();
(function(){
	var $teamateExp = $(".teamate-expiriance-header");
	var $teamateEdu = $(".teamate-edu-header");
	var eduHeight = $teamateEdu.css('height');
	var expHeight = $teamateExp.css('height');
	var activeClass = "t-active";

	$teamateEdu.click(function(e){
        var target = e.target;
        var $target = $(target);
		if ($target.hasClass(activeClass)) return;
        eduHeight = $target.css('height');
		var stHeight = parseInt($target.parent().css("height"), 10);
		var ntHeight = parseInt($target.next().css("height"), 10);
		var stMargin = parseInt($target.next().css("margin-bottom"), 10);
		var trHeight = stHeight + ntHeight + stMargin + "px";
		$target.addClass(activeClass).parent().velocity({
			height : trHeight
		}, 900);
        var $sibling = $target.parent().prev();
        $sibling.find(":first-child").removeClass(activeClass);
		$sibling.velocity({
			height : expHeight
		}, 900);
	});
	$teamateExp.click(function(e){
        var target = e.target;
        var $target = $(target);
		if ($target.hasClass(activeClass)) return;
        expHeight = $target.css('height');
		var stHeight = parseInt($target.parent().css("height"), 10);
		var ntHeight = parseInt($target.next().css("height"), 10);
		var stMargin = parseInt($target.next().css("margin-bottom"), 10);
		var trHeight = stHeight + ntHeight + stMargin + "px";
		var trHeight = stHeight + ntHeight + "px";
		$target.addClass(activeClass).parent().velocity({
			height : trHeight
		}, 900);
        var $sibling = $target.parent().next();
        $sibling.find(":first-child").removeClass(activeClass);
		$sibling.velocity({
			height : expHeight
		}, 900);
	});
})();
(function(){
	var $someHeader = $(".service-about-header");
	var zeroHeight = $someHeader.css('height');
	var activeClass = "about-active";
	for(var i = 0; i < $someHeader.length; i++) {
		$($someHeader[i]).parent().css("height" , zeroHeight);
	}
	$someHeader.click(function(){
		var $itElement = $(this);
		var itElement = this;
		if ($itElement.hasClass(activeClass)) return;
		var stHeight = parseInt($itElement.parent().css("height"), 10);
		var ntHeight = parseInt($itElement.next().css("height"), 10);
		var stMargin = parseInt($itElement.next().css("margin-bottom"), 10);
        var ptMargin = parseInt($itElement.parent().css("margin-bottom"), 10);
		var trHeight = stHeight + ntHeight + stMargin + ptMargin + "px";
		$someHeader.each(function(){
			if (this === itElement) {
				$(this).addClass(activeClass).parent().velocity({
				height : trHeight
				}, 900);
			} if (this != itElement) {
				$(this).removeClass(activeClass).parent().velocity({
				height : zeroHeight
				}, 900)
			}
		})
	});
})();
(function(){
	var $trPuncts = $(".service-type-nav li");
	var $trTexts = $(".service-type-text");
    var $trImages = $(".service-img-block");
	$($trTexts[0]).css({
		"display" : "block" ,
		"opacity" : "1"
	});
//    $($trImages[0]).css({
//		"display" : "block" ,
//		"opacity" : "1"
//	});
	var activeClass = "nav-active";
	$trPuncts.click(function(){
		var itElement = this;
	$trPuncts.each(function(){
			if (this === itElement) {
				$(this).addClass(activeClass);
				var i = $trPuncts.index(this);
				$trTexts.css({
					"display" : "none",
					"opacity" : 0
				})
//                $trImages.css({
//					"display" : "none",
//					"opacity" : 0
//				})
 				$($trTexts[i]).css("display", "block").velocity({
					opacity : 1
				}, 750);
//                $($trImages[i]).css("display", "block").velocity({
//					opacity : 1
//				}, 750);
			} if (this != itElement) {
				$(this).removeClass(activeClass);
			}
		})
	});
})();
(function(){	var startFix = parseInt($(".main-white-filter").css("height"), 10);
				var $btn = $(".menu-connect-btn");
				var $menu = $(".top-menu");
                var $menuWrapper = $(".top-menu-wrapper");
				var menuHeight = "-"+parseInt($menu.css("height"), 10)+"px";
				var $menuLi = $(".top-menu-container li");
	           	var $menuList = $(".top-menu-container li a");
            	var punctPosition = [];
            	var punctHeight = [];
            	var id = $menuList.attr('href');
            	var i = 0;
            	$menuList.each(function(){
            		var  punct = $(this).attr('href');
            		punctPosition[i] = $(punct).offset().top;
            		punctHeight[i] = parseInt($(punct).css("height"), 10);
             		i++;

            	});
            	var stat = true;
            	var pos = "top";
	        window.onscroll = function() {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;
                if(scrolled < startFix) stat = true;
                if(scrolled > startFix) stat = false;
                if(stat === false && pos === "top") {
                	$menuWrapper.css({
                		"position" : "fixed",
                		"top" : menuHeight,
                		"opacity" : "0",
                		"background-color" : "rgba(255, 255, 255, 0.9)",
                		"z-index" : "20",
                        "left" : "0"
                	}).insertAfter($(".consult")).velocity({
                		opacity : 1,
                		top : 0
                	}, 600);
                	$btn.css("display", "inline-block");
                	pos = "bottom";
                	$menuLi = $(".top-menu-container li");
                }
                if(stat === true && pos === "bottom") {
                	$menuWrapper.css({
                		"position" : "relative",
                		"opacity" : "1",
                		"background-color" : "rgba(255, 255, 255, 0)"
                	}).insertBefore($("header"));
                	$btn.css("display", "none");
                	pos="top";
                	$menuLi = $(".top-menu-container li");
                }
//                if(scrolled < punctPosition[0]) {
//                	$(".top-active").removeClass("top-active");
//                }
//                if (punctPosition[0] < scrolled && scrolled < punctPosition[1]) {
//                	$(".top-active").removeClass("top-active");
//                	$($menuLi[0]).addClass("top-active");
//                };
//                if (punctPosition[1] - 200 < scrolled && scrolled < punctPosition[2]) {
//                	$(".top-active").removeClass("top-active");
//                	$($menuLi[1]).addClass("top-active");
//                }
//                if (punctPosition[2] < scrolled && scrolled < punctPosition[3]) {
//                	$(".top-active").removeClass("top-active");
//                	$($menuLi[2]).addClass("top-active");
//                }
//                if (punctPosition[3] < scrolled && scrolled < punctPosition[4] - 300) {
//                	$(".top-active").removeClass("top-active");
//                	$($menuLi[3]).addClass("top-active");
//                }
//                if (punctPosition[4] - 300 < scrolled) {
//                	$(".top-active").removeClass("top-active");
//                	$($menuLi[4]).addClass("top-active");
//                }
            function getCoords(elem) {
                var box = elem.getBoundingClientRect();
                return box.top + pageYOffset;
            }
        };
})();
(function(){
    var $showMore = $(".teamate-text-more");
    var zeroHeight = '9rem';
    if(window.innerWidth <= 768) {
        zeroHeight = '12rem';
    }
    var activeClass = "open-text";
    $showMore.click(function(e){
        var $target = $(e.currentTarget);
        if ($target.hasClass(activeClass)) {
            var $goal = $target.prev();
            var $text = $goal.children();
            var newHeight = $text.css('height');
            $target.removeClass(activeClass);
            $target.children().text('Подробнее');
            $goal.velocity({ 
            height : zeroHeight 
            }, 500);
        } else {
            var $goal = $target.prev();
            var $text = $goal.children();
            var newHeight = $text.css('height');
            $target.addClass(activeClass);
            $target.children().text('Скрыть');
            $goal.velocity({ 
            height : newHeight 
            }, 500);
        };
    });
    
    
    
})();

(function(){
    
    var video = document.querySelector('.main-img-wrapper');
    video.addEventListener('canplay', function(e) {
        this.volume = 0.4;
    });
    var status = true;
    var $soundBtn = $('.sound-btn');
    var $muteBtn = $('.mute-btn');
    $soundBtn.click(function(){
        if(status) {
            status = false;
            video.volume = 0;
            $soundBtn.css("display", "none");
            $muteBtn.css("display", "block");
            video.addEventListener('playing', function(e) {
            this.volume = 0;
    });
        }
    });
    $muteBtn.click(function(){
            status = true;
            video.volume = 0.4;
            $soundBtn.css("display", "block");
            $muteBtn.css("display", "none");
            video.addEventListener('paying', function(e) {
            this.volume = 0.4;
    });
    });
    
})();
(function(){
        var $video = $("#video");
        window.onload = function(){
        if(window.innerWidth >= 768) {

            $source = $video.attr('data-video');
            $image = $video.attr('data-image');
            var $text = "<source id='first_source' src='' type='video/mp4'>";
            document.getElementById('video').innerHTML = $text;
            $("#first_source").attr('src' , $source);
            $("#video_img").css("display", "none");
    var video = $('#video')[0];
    if(video) {
        video.addEventListener('canplay', function(e) {
            this.volume = 0.4;
            video.play();
        });
    }
}
}
})();
(function(){
    

(function( $ ) {
  $.fn.fortySlider = function(time, lArrow, rArrow, counter, seperator, method) {

    var $slides = this.children();
      if($slides.length === 1) {
          $(counter).parent().css("display" , "none");
          return;
      };
    var viewWidth = parseInt(this.css('width'), 10) ;
    $slides.css({
        "position" : "absolute",
        "left"     : -viewWidth,
        "visibility"  : "hidden",
        "opacity"     : "0",
        "display" : "block"
    });
    $($slides[0]).css({
        "position" : "relative",
        "left"     : "0",
        "visibility"  : "visible",
        "opacity"     : "1"
    });
    $($slides[$slides.length-1]).css({
        "left"     : viewWidth,
    });

    var $lArrow = $(lArrow);
    var $rArrow = $(rArrow);
    var $seperator = seperator ? seperator : "/";

    var i = 0;
    var $count = (i+1) + $seperator + $slides.length;
    var $counter = $(counter).html($count);
    var $current;
    var $next;

    function showSlide() {
        $current = $($slides[i]);
        if(this == $lArrow[i]) {
            $current.velocity({
                "opacity" : 0
            }, time);
            setTimeout(function(){
                $current.css({
                    "position" : "absolute",
                    "left" : viewWidth,
                    "visibility" : "hidden"
                })
            }, time);
            --i;
            if(i === -1) i = $slides.length - 1;
            $next = $($slides[i]);
            setTimeout(function(){
            $next.css({
                    "position" : "relative",
                    "left" : 0,
                    "visibility" : "visible"
                }).velocity({
                opacity : 1,
            }, time);
                }, time);
        }
        if(this == $rArrow[i]) {
            $current.velocity({
                "opacity" : 0
            }, time);
            setTimeout(function(){
                $current.css({
                    "position" : "absolute",
                    "left" : -viewWidth,
                    "visibility" : "hidden"
                })
            }, time);
            ++i;
            if(i === $slides.length) i = 0;
            $next = $($slides[i]);
            setTimeout(function(){
            $next.css({
                    "position" : "relative",
                    "left" : 0,
                    "visibility" : "visible"
                }).velocity({
                opacity : 1,
            }, time);
                }, time);
        }
        $count = (i+1) + $seperator + $slides.length;
        $counter = $(counter).html($count);
    }
    $lArrow.click(showSlide);
    $rArrow.click(showSlide);

      return this.each(function() {
            var $this  = $(this);
        });

  };
})(jQuery);
if(window.innerWidth <= 768) {

$(".service-slider").fortySlider(400, '.service-l-arrow', '.service-r-arrow', '.service-counter-text');
}
})();
