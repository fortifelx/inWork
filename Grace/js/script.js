(function(){
    var $wrapper    = $(".about-slider-wrapper");
    if($wrapper.length === 0) return;
    var $slides     = $(".about-slider-wrapper img");
    var slidesWidth = $slides.css('width');
    var $lArrow = $(".about-l-arrow");
    var $rArrow = $(".about-r-arrow");
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
    var $wrapper    = $(".result-slider-wrapper");
    if($wrapper.length === 0) return;
    var $slides     = $(".result-slide");
    var slidesWidth = $slides.css('width');
    var $lArrow = $(".results-l-arrow");
    var $rArrow = $(".results-r-arrow");
    var slidesLength = $slides.length;
    var slidewidth  = (parseInt(slidesWidth, 10));
    $slides.css("left" , slidesWidth);
    $($slides[0]).css("left", 0);
    var counter = 0;
    var currentElement = $slides[0];
    var prevElement =  $slides[0];
    var sliderStatus = true;
    var $countText = $(".results-counter-text");
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
            }, 1200);
            $(currentElement).velocity({
                left : slidesWidth
            }, 1200);
            counter = slidesLength - 1;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 1200);
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
            }, 1200);
            $(currentElement).velocity({
                left : slideLeft
            }, 1200);
            counter = el;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 1200);
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
            }, 1200);
            $(currentElement).velocity({
                left : slidesWidth
            }, 1200);
            counter = el;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 1200);
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
            }, 1200);
            $(currentElement).velocity({
                left : slideLeft
            }, 1200);
            counter = el;    
            currentElement = $slides[el];
            setTimeout(function(){
                sliderStatus = true;
            }, 1200);
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
            var $cName = $slide.find(".client-slide-name");
	            var cNameWidth = $cName.css("width");
	            $cName.css("width", "0");
            setTimeout(function(){
	            $cText.velocity({
	            	opacity: "1"
	            }, 600);
	            $cName.velocity({
	            	width : cNameWidth
	            }, 1200);
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
            var $cName = $slide.find(".client-slide-name");
	            var cNameWidth = $cName.css("width");
	            $cName.css("width", "0");
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
            var $cName = $slide.find(".client-slide-name");
	            var cNameWidth = $cName.css("width");
	            $cName.css("width", "0");
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
            var $cName = $slide.find(".client-slide-name");
	            var cNameWidth = $cName.css("width");
	            $cName.css("width", "0");
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

	$teamateEdu.click(function(){
		if ($($teamateEdu[0]).hasClass(activeClass)) return;
		var stHeight = parseInt($teamateEdu.parent().css("height"), 10);
		var ntHeight = parseInt($teamateEdu.next().css("height"), 10);
		var stMargin = parseInt($teamateEdu.next().css("margin-bottom"), 10);
		var trHeight = stHeight + ntHeight + stMargin + "px";
		$teamateEdu.addClass(activeClass).parent().velocity({
			height : trHeight
		}, 900);
		$teamateExp.removeClass(activeClass).parent().velocity({
			height : expHeight
		}, 900);
	});
	$teamateExp.click(function(){
		if ($($teamateExp[0]).hasClass(activeClass)) return;
		var stHeight = parseInt($teamateExp.parent().css("height"), 10);
		var ntHeight = parseInt($teamateExp.next().css("height"), 10);
		var stMargin = parseInt($teamateExp.next().css("margin-bottom"), 10);
		var trHeight = stHeight + ntHeight + stMargin + "px";
		var trHeight = stHeight + ntHeight + "px";
		$teamateExp.addClass(activeClass).parent().velocity({
			height : trHeight
		}, 900);
		$teamateEdu.removeClass(activeClass).parent().velocity({
			height : expHeight
		}, 900);
	});
})();
(function(){
	var $someHeader = $(".service-about-header");
	var zeroHeight = $someHeader.css('height');
	var activeClass = "about-active";
	$($someHeader[0]).parent().css( "height" , zeroHeight);

	$someHeader.click(function(){
		var $itElement = $(this);
		var itElement = this;
		if ($itElement.hasClass(activeClass)) return;
		var stHeight = parseInt($itElement.parent().css("height"), 10);
		var ntHeight = parseInt($itElement.next().css("height"), 10);
		var stMargin = parseInt($itElement.next().css("margin-bottom"), 10);
		var trHeight = stHeight + ntHeight + stMargin + "px";
		console.log(trHeight);
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
	var activeClass = "nav-active";
	$trPuncts.click(function(){
		var itElement = this;
	$trPuncts.each(function(){
			if (this === itElement) {
				$(this).addClass(activeClass);
			} if (this != itElement) {
				$(this).removeClass(activeClass);
			}
		})
	});
})();