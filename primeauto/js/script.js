


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
	}, 2000);
})
$(".exterier").hover(function(){
	$('.exterier .second-img').velocity({
		opacity: 1
	}, 750);
})
$(".exterier").mouseout(function(){
	$('.exterier .second-img').velocity({
		opacity: 0
	}, 2000);
})

$('.catalog-photo-slider').slick({
  	prevArrow: $('.photo-l-arrow'),
	nextArrow: $('.photo-r-arrow')
  });

$('.cpf').click( function() {
	$('.first-catalog-photo').addClass('catalog-photo-show').velocity({
		opacity: 1
	}, 700)
});
$('.cps').click( function() {
	$('.second-catalog-photo').addClass('catalog-photo-show').velocity({
		opacity: 1
	}, 700)
});
$('.cpt').click( function() {
	$('.third-catalog-photo').addClass('catalog-photo-show').velocity({
		opacity: 1
	}, 700)
});
$(".first-photo-close").click(function(){
	event.preventDefault();
	$(".first-catalog-photo").removeClass('catalog-photo-show');
});
$(".second-photo-close").click(function(){
	event.preventDefault();
	$(".second-catalog-photo").removeClass('catalog-photo-show');
});
$(".third-photo-close").click(function(){
	event.preventDefault();
	$(".third-catalog-photo").removeClass('catalog-photo-show');
});
});