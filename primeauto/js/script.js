$(document).ready(function () {
$(".help-menu").on("click", "a", function (event) { 
event.preventDefault();
var id = $(this).attr('href')
, top = $(id).offset().top;
$('body,html').animate({
scrollTop: top
}, 1000);
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
var status;
$(".show-input-search").click(function(){
	status=true;
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
  if (!$(e.target).closest(".show-input-search").length && status===true) {
  	status=false;
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
    }, 400);
    }
    else {
    $wrapper.velocity({
        height : newHeight
    }, 600);
    $servMobText.velocity({
        height : servHeight
    }, 600);
        }
});


});