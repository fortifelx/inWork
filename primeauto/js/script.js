
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
            var $slides = $('.main-brand');
            var correction = $viewerWidth-slidesLength*slidesWidth;
            var step = -correction - (parseInt($slide.css('width'), 10));
            var lastSlide = $slides[$slides.length-1];
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
            var $slides = $('.main-brand');
            var slideWidth = "-" + $slide.css('width');
            var lastSlide = $slides[$slides.length-1];
            $(lastSlide).insertBefore($slides[0]);
            $wrapper.css("margin-left", slideWidth );
            $wrapper.velocity({
                marginLeft : 0
            }, 600)
        }

    });
})();







































