
$(document).ready(function () {
$(".help-menu").on("click", "a", function (event) { 
event.preventDefault();
var id = $(this).attr('href')
, top = $(id).offset().top;
$('body,html').animate({
scrollTop: top
}, 1000);
});
});
    
$(".burger").click(function(){
	event.preventDefault();
	$('.left-menu-wrapper').addClass('display-block').velocity( { opacity: 1 }, 600);
	$('.left-menu').velocity({ marginLeft: 0}, 600);
});
$(".left-menu-close").click(function(){
	$('.left-menu-wrapper').velocity( { opacity: 0 }, 600);
	$('.left-menu').velocity({ marginLeft: "-37rem"}, 600);
	function removeDisplay() {
		$('.left-menu-wrapper').removeClass('display-block');
	};
	setTimeout( removeDisplay , 600);
});
    
var searchStatus;
$(".show-input-search").click(function(){
	searchStatus=true;
	$(".show-input-search").velocity({
		top: "-1rem",
		right: "27px",
		transition: 0.8
	}, 600);
	$(".header-search input").addClass('header-search-show').velocity({
		width: "24rem",
		opacity: 1
	}, 600);
});
    
$(document).on('click', function(e) {
  if (e.target == $('.header-search-show')[0]) return;
  if (!$(e.target).closest(".show-input-search").length && searchStatus===true) {
  	searchStatus=false;
    $('.header-search input').velocity({
    	width: 0,
    	opacity: 0
    }, 400).removeClass('header-search-show');
    $(".show-input-search").velocity({
    	top: "-2.8rem",
		right: "11rem",
		transition: 0
    }, 400)
  }
  e.stopPropagation();
});
    
$(".catalog-show-more-button").click(function(){
	$(".catalog-show-more-button").hide();
	$(".catalog").velocity({
		width: "94rem",
		height: "7rem",
	}, 600)
})
$(".interier").hover(function(){
	$('.interier .second-img').velocity({
		opacity: 1
	}, 750);
})
$(".interier").mouseout(function(){
	$('.interier .second-img').velocity({
		opacity: 0
	}, 50);
})
$(".exterier").hover(function(){
	$('.exterier .second-img').velocity({
		opacity: 1
	}, 750);
})
$(".exterier").mouseout(function(){
	$('.exterier .second-img').velocity({
		opacity: 0
	}, 50);
});

$(".catalog-photo").click(function(){
 	$(this).find(".catalog-photo-wrapper").addClass('catalog-photo-show').velocity({
 		opacity: 1
 	}, 700);
});
    
$(".photo-close").click(function(e){
 	$(this).parent().parent().removeClass('catalog-photo-show');
 	e.stopPropagation();
});
    
$(".show-catalog").click(function(){
	var blockHeight = $(this).prev().children().css("height");
	$(this).prev().velocity({
		height: blockHeight
	},
	500);
	$(this).hide();
});
    
var filterStatus = false;
$(".show-filter").click(function(){
	if(filterStatus === false) {
	filterStatus = true;	
	var blockHeight = $(this).next().children().css("height");
	$(this).next().velocity({
		height: blockHeight
	},
	500); return;
	}
	if(filterStatus === true) {
	filterStatus = false;	
	$(this).next().velocity({
		height: 0
	},
	500);
	}
});
    
var servTextWrapper = $(".service-text");
$('.service-list p').click(function(e){
		var $targetText = $('.service-text div');
		var $targetHeader = $('.service-list p');
		$targetText.css( {"display" : "none","position" : "absolute"});
		$targetHeader.css({"background-color" : "white", "color" : "black"});

	for(var i = 0; i < $('.service-list p').length; i++) {
		if( this === $('.service-list p')[i]) {

			$targetText[i].style.display = "block";
			$targetText[i].style.position = "static";

			var $elTarget =  $($targetText[i]);
			var $headTarget = $($targetHeader[i]);
			var elHeight = $elTarget.css("height");
			var topPadding = $elTarget.css("padding-top");
			var bottomPadding = $elTarget.css("padding-bottom");
			var wrapperHeight = parseInt(elHeight, 10) + parseInt(topPadding, 10) + parseInt(bottomPadding, 10) + "px";

			$targetText[i].style.height = "0";
			$targetText[i].style.paddingTop = "0";
			$targetText[i].style.paddingBottom = "0";

			servTextWrapper.css("height" , wrapperHeight);

			$elTarget.velocity({
				height : elHeight,
				paddingTop : topPadding,
				paddingBottom : bottomPadding
			}, 1000, "easy");

			$headTarget.css({"background-color" : "rgb(172, 26, 26)", "color" : "rgb(255, 255, 255)"});
		}
	}
});
var $servMobText = $(".mob-service-container");
var servHeight = $servMobText.css("height");
$(".mob-service-header").click(function(e){
    var $header = $(this);
	var $wrapper = $header.parent();
    var $target = $header.next();
    var targetMarginTop = $target.css("margin-top");
    var targetMarginBottom = $target.css("margin-bottom");
    var wrapperHeight = $wrapper.css("height");
    var targetHeight = $target.css("height");
    var newHeight = parseInt(wrapperHeight, 10) + parseInt(targetHeight, 10) 
                  + parseInt(targetMarginTop, 10) + parseInt(targetMarginBottom, 10) + "px";

    if (parseInt(wrapperHeight, 10) > parseInt(servHeight, 10)) {
        $wrapper.velocity({
        height : servHeight
    }, 600);
    }
    else {
    $servMobText.velocity({
        height : servHeight
    }, 600);
    $wrapper.velocity({
        height : newHeight
    }, 600);
        }
});
var $helpMobText = $(".help-info");
var helpHeight = $helpMobText.css("height");
var $targets = $('.help-info-text');
var mobStatus;
function watchDog() {
    $(window).resize(function(){
        var wrapper = $(".wrapper").css("width");
        if(parseInt(wrapper, 10) < 360) {
            mobStatus = true;
        }
        else {
            $('.help-info').attr('style', '');/* сброс стилей при переходе от мобильной версии  */
            $('.about-us-block').attr('style', '');
            $('.our-team').attr('style', '');
            $('.other-goods').attr('style', '');
            mobStatus = false;
        }
    })
};
watchDog();
$(".help-info h1").click(function(e){
    if (mobStatus === false) return;
    var $header = $(this);
	var $wrapper = $header.parent();
    var $target = $header.next();
    var targetMarginTop = $target.css("margin-top");
    var targetMarginBottom = $target.css("margin-bottom");
    var wrapperHeight = $wrapper.css("height");
    var targetHeight = $target.css("height");
    var newHeight = parseInt(wrapperHeight, 10) + parseInt(targetHeight, 10) 
                  + parseInt(targetMarginTop, 10) + parseInt(targetMarginBottom, 10) + "px";

    if (parseInt(wrapperHeight, 10) > parseInt(helpHeight, 10)) {
        $wrapper.velocity({
        height : helpHeight
    }, 600);
    }
    else {
        $helpMobText.each(function(){
            console.log('here');
            var $child = $(this).find(".help-info-text");
           if ($child[0] === $target[0]) {
              $(this).velocity({
              height : newHeight
              }, 600);
           } else {
               $(this).velocity({
              height : helpHeight
              }, 600);
           } 
        });
//    $helpMobText.velocity({
//        height : helpHeight
//    }, 600);
//    $wrapper.velocity({
//        height : newHeight
//    }, 600);
        }
});
(function(){
    var $helpMobText = $(".about-us-block");
    var helpHeight = $helpMobText.css("height");
    $(".about-read-more").click(function(e){
        if (mobStatus === false) return;
        var $header = $(this);
        var $wrapper = $header.prev();
        var $target = $wrapper.children();
        var wrapperHeight = $wrapper.css("height");
        var newHeight = 0;
        for (var i = 0; i < $target.length; i++) {
            var $point = $($target[i]);
            var targetMarginTop = $point.css("margin-top");
            var targetMarginBottom = $point.css("margin-bottom");
            var targetHeight = $point.css("height");
            newHeight = newHeight + parseInt(targetHeight, 10) 
                      + parseInt(targetMarginTop, 10) + parseInt(targetMarginBottom, 10);
        }
        if (parseInt(wrapperHeight, 10) > parseInt(helpHeight, 10)) {
            $wrapper.velocity({
            height : helpHeight
        }, 600);
        }
        else {
        $helpMobText.velocity({
            height : helpHeight 
        }, 600);
        $wrapper.velocity({
            height : newHeight + "px"
        }, 600);
            }
    });
})();
(function(){
    $(".describe-header").click(function(){
        var $wrappers = $(".one-goods-text");
        var $target = $(this).next();
        var newHeight = $target.children().css("height");
        $wrappers.each(function(){
           if (this === $target[0]) {
               console.log(this);  
              $(this).velocity({
              height : newHeight
              }, 600);
           } else {
               $(this).velocity({
              height : 0
              }, 600);
           }
        });
    })
})();
(function(){
    $(".delivery-listener").click(function(){
        var $target = $(this).next();
        var newHeight = $target.children().css('height');
        var paddingBottom = $target.children().css('padding-bottom');
        newHeight = (parseInt(newHeight, 10)) + (parseInt(paddingBottom, 10)) + "px";
        $target.velocity({
            height : newHeight
        }, 600);
    })
})();
(function(){
    $(".next-button").click(function(e){
        var deliveryStatus = false;
        var dataStatus = true;
        var payStatus = false;
        if ($("#byselfdelivery").prop("checked") === true) {
            deliveryStatus = true;
        };
        if ($("#byselfdelivery").prop("checked") != true && $("#toadressdelivery").prop("checked") != true) {
            deliveryStatus = false;
            alert("Выбирите пожалуста способ доставки");
            return;
        };
        if ($("#toadressdelivery").prop("checked") === true) {
            if($(".delivery-adress").val().length < 4) {
                alert("Введите пожалуста адрес доставки");
                return;
            }
            if($(".delivery-adress").val().length > 4) {
                deliveryStatus = true;
            }
        }
        $('.client-data input').each(function(){
             var $inputData = $(this);
            if ($inputData.val().length < 2) {
                alert("Введите пожалуста ваши даные");
                dataStatus = false;
                return;
            } else {
                dataStatus = true;
            }
            
        })
        var $cardPay = $('.card-pay');
        var $viaBill = $('.via-bill');
        if( $('.cash').prop("checked") === true) {
            payStatus=true;
        }
        if( $('.card-pay').prop("checked") === true) {
            if($('.liqpay').prop("checked") === true) {
                payStatus = true;
            } else if($('.privat').prop("checked") === true) {
                payStatus = true;
            } else {
                alert("Пожалуста выбирите способ оплаты картой");
                return;
            }
        }
        if( $('.via-bill').prop("checked") === true) {
            if($(".bill-adress").val().length > 10) {
                 payStatus = true;
            } else {
                alert("Введите E-mail для получения счета");
                return;
            }
        } 
        var $dataBlock = $(this).prev();
        var dataHeight = $(this).prev().css('height');
        var checkHeight = $(this).next().children().css('height');
        if(payStatus === true && dataStatus === true && deliveryStatus === true) {
            $(this).prev().velocity({
                height : 0
            }, 800);
            $(this).next().velocity({
                height : checkHeight
            }, 800)
            $(this).hide();
            $(".go-back-button").click(function(){
                $(this).parent().parent().velocity({
                height : 0
            }, 800);
                $dataBlock.velocity({
                height : dataHeight
            }, 800);
                $(".next-button").show();
            })
        }
     })
})();
(function(){
    var $wrapper = $('.main-brand-wrapper');
    var $viewerWidth = (parseInt($(".main-brand-viewer").css("width"), 10));
    var position = 0;
    var $slides = $('.main-brand');
    var slidesLength =  $slides.length;
    var slidesWidth = (parseInt($slides.css("width"), 10));
    var wrapperWidth = slidesLength*slidesWidth + "px";
    $(window).resize(function(){
        $viewerWidth = (parseInt($(".main-brand-viewer").css("width"), 10));
        $wrapper.css("margin-left", 0);
        position = 0;
    })
    $wrapper.css( "width" , wrapperWidth);
    $(".main-r-arrow").click(function(){
        var $slide = $('.main-brand');
        var slideWidth = $slide.css('width');
        position = position - (parseInt(slideWidth, 10));
        if(position > $viewerWidth-slidesLength*slidesWidth-30 ) {
        $wrapper.velocity({
            marginLeft : position
        }, 600);
            return;
        }
        if(position < $viewerWidth-slidesLength*slidesWidth-30 ) {
            var $slides    = $('.main-brand');
            var correction = $viewerWidth-slidesLength*slidesWidth;
            var step       = -correction - (parseInt($slide.css('width'), 10));
            var lastSlide  = $slides[$slides.length-1];
            $($slides[0]).insertAfter(lastSlide);
            $wrapper.css("margin-left", -step );
            $wrapper.velocity({
                marginLeft : correction
            }, 600)
        }
    });
    $(".main-l-arrow").click(function(){
        var $slide = $('.main-brand');
        var slideWidth = $slide.css('width');
        if (position != 0) {
           position = position + (parseInt(slideWidth, 10));
           $wrapper.velocity({
           marginLeft : position
        }, 600);
            return;
        }
        if (position === 0) {
            var $slides    = $('.main-brand');
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
    var $wrapper    = $(".goods-slider-wrapper");
    if($wrapper.length === 0) return;
    var $roundsWrapper = $(".goods-slider-rounds");
    var $slides     = $(".goods-slider-wrapper img");
    var slidesWidth = $slides.css('width');
    var round = "<div></div>";
    var slidesLength = $slides.length;
    var slidewidth  = (parseInt(slidesWidth, 10));
    $slides.css("left" , slidesWidth);
    $($slides[0]).css("left", 0);
    for( var i = 0; i < slidesLength; i++) {
        $roundsWrapper.append(round);
    }
    var $rounds = $(".goods-slider-rounds div");
    var counter = 0;
    var currentElement = $slides[0];
    var prevElement =  $slides[0];
    var sliderStatus = true;
    function makeSlider(event){
        if(sliderStatus === false) return;
        sliderStatus = false;
        var el;
        if(el === undefined) {
            el = counter+1;
        };
        if(el === $rounds.length) {
            el = 0;
        }
        if(event) {
        for (var i = 0; i < $rounds.length; i++) {
           if ($rounds[i] === event.target) {
               el = i;
               $($rounds[i]).css( "background-color" , "rgb(255, 242, 239)");
            } 
        };
            }
        if (el > counter) {
            $rounds.css( "background-color" , "rgba(255, 242, 239, 0)");
            $($rounds[el]).css( "background-color" , "rgb(255, 242, 239)");
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
            return;
        }
        if (el < counter) {
            $rounds.css( "background-color" , "rgba(255, 242, 239, 0)");
            $($rounds[el]).css( "background-color" , "rgb(255, 242, 239)");
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
            return;
        } else {
            return;
        }
    };
    $rounds.click(makeSlider);
    setInterval(makeSlider, 6000);
})();
(function(){
    var $slides = $('.one-product-viewer img');
    $slides.click(function(event){
        var screenSize = $(".wrapper").css('width');
        if ((parseInt(screenSize, 10)) < 360) return;
        $slides = $('.one-product-viewer img');
        var $target = $(event.target);
        if( event.target === $slides[0]) return;
        $target.css("opacity", 0).insertBefore($($slides[0])).velocity({
            opacity : 1
        }, 400);
    });
    var $mainWrapper = $('.wrapper');
    var screenSize = (parseInt($mainWrapper.css("width"), 10));
    var $wrapper = $('.one-product-viewer');
    var $viewerWidth = (parseInt($(".one-product-slider").css("width"), 10));
    var position = 0;
    var slidesLength =  $slides.length;
    var slidesWidth = (parseInt($slides.css("width"), 10));
    var wrapperWidth = slidesLength*slidesWidth + "px";
    $(window).resize(function(){
        $mainWrapper = $('.wrapper');
        screenSize = (parseInt($mainWrapper.css("width"), 10));
        console.log(screenSize);
        if(screenSize > 360) {
            $wrapper.css("width" , "100%");
        }
        if( screenSize < 360) {
       $wrapper.css( "width" , wrapperWidth); 
        }
        $viewerWidth = (parseInt($(".one-product-slider").css("width"), 10));
        $wrapper.css("margin-left", 0);
        position = 0;
    })
    if( screenSize < 360) {
       $wrapper.css( "width" , wrapperWidth); 
    }
    
    $(".slider-r-arrow").click(function(){
        var $slide = $('.one-product-viewer img');
        var slideWidth = $slide.css('width');
        position = position - (parseInt(slideWidth, 10));
        if(position > $viewerWidth-slidesLength*slidesWidth-30 ) {
        $wrapper.velocity({
            marginLeft : position
        }, 600);
            return;
        }
        if(position < $viewerWidth-slidesLength*slidesWidth-30 ) {
            var $slides    = $('.one-product-viewer img');
            var correction = $viewerWidth-slidesLength*slidesWidth;
            var step       = -correction - (parseInt($slide.css('width'), 10));
            var lastSlide  = $slides[$slides.length-1];
            $($slides[0]).insertAfter(lastSlide);
            $wrapper.css("margin-left", -step );
            $wrapper.velocity({
                marginLeft : correction
            }, 600)
        }
    });
    $(".slider-l-arrow").click(function(){
        var $slide = $('.one-product-viewer img');
        var slideWidth = $slide.css('width');
        if (position != 0) {
           position = position + (parseInt(slideWidth, 10));
           $wrapper.velocity({
           marginLeft : position
        }, 600);
            return;
        }
        if (position === 0) {
            var $slides    = $('.one-product-viewer img');
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







































