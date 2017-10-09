$(document).ready(function () {
$(".main_section_button").click(function (event) { 
event.preventDefault();
    console.log('here');
var id = $(this).attr('href')
, top = $(id).offset().top;
$('body,html').animate({
scrollTop: top
}, 1000);
});
$(".main_section_info").click(function (event) { 
event.preventDefault();
    console.log('here');
var id = $(this).attr('href')
, top = $(id).offset().top;
$('body,html').animate({
scrollTop: top
}, 1000);
});
$(".nav_menu_list").on("click", "a", function (event) { 
event.preventDefault();
var id = $(this).attr('href')
, top = $(id).offset().top;
$('body,html').animate({
scrollTop: top
}, 1000);
});
});
(function(){
    var $wrapper = $('.feedback_slider_wrapper');
    var $viewerWidth = (parseInt($(".feedback_slider_viewer").css("width"), 10));
    var $countText = $(".feedback_slider_counter");
    var counter = 0;
    var $slides = $('.feedback_slide');
    var slidesLength =  $slides.length;
    var counterText = counter+1+"/"+slidesLength;
    var position = 0;
    $countText.text(counterText);
    var slidesWidth = (parseInt($slides.css("width"), 10));
    var wrapperWidth = slidesLength*slidesWidth + "px";
    
    var $showBtn = $('.feedback_read_all');
    var $textWrapper = $('.feedback_slide_text_wrapper');
    
    $(window).resize(function(){
        $viewerWidth = (parseInt($(".feedback_slider_viewer").css("width"), 10));
        $wrapper.css("margin-left", 0);
        position = 0;
        counter = 0;
        counterText = counter+1+"/"+slidesLength;
        $countText.text(counterText);
    })
    $wrapper.css( "width" , wrapperWidth);
    
    $(".feedback_r_arrow").click(function(){
        
        $showBtn.css('display', 'inline-block');
        $textWrapper.velocity({height: 0}, 600);
        
        counter = counter + 1;
        if (counter > slidesLength-1) {
            counter = 0;
       } 
       counterText = counter+1+"/"+slidesLength;
       $countText.text(counterText); 


        var $slide = $('.feedback_slide');
        var slideWidth = $slide.css('width');
        position = position - (parseInt(slideWidth, 10));
        if(position > $viewerWidth-slidesLength*slidesWidth-30 ) {
        $wrapper.velocity({
            marginLeft : position
        }, 600);
            return;
        }
        if(position < $viewerWidth-slidesLength*slidesWidth-30 ) {
            var $slides    = $('.feedback_slide');
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
    $(".feedback_l_arrow").click(function(){
        
        $showBtn.css('display', 'inline-block');
        $textWrapper.velocity({height: 0}, 600);
                
        counter = counter - 1;
        if (counter < 0) {
            counter = slidesLength-1;
            
        } 
       counterText = counter+1+"/"+slidesLength;
       $countText.text(counterText); 
        
        var $slide = $('.feedback_slide');
        var slideWidth = $slide.css('width');
        
        if (position != 0) {
           position = position + (parseInt(slideWidth, 10));
           $wrapper.velocity({
           marginLeft : position
        }, 600);
            return;
        }
        if (position === 0) {
            var $slides    = $('.feedback_slide');
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
    
    var $showBtn = $('.feedback_read_all');
    var $textWrapper = $('.feedback_slide_text_wrapper');
    $showBtn.click(function(e){
        var target = e.target;
        var $target = $(target);
        
        var newHeight = $target.prev().children().css("height");
        
        $target.prev().velocity({
            height : newHeight
        }, 600);
        $showBtn.css('display', 'none');
        
    })
    var $hideBtn = $('.hide_btn');
    
    
})();
(function(){
    
    var $showBtn = $('.hide_btn');
    var $textWrapper = $('.text_wrapper');
    $showBtn.click(function(e){
        var target = e.target;
        var $target = $(target);
        
        var textHeight = $target.prev().children().css("height");
        var correction = $target.prev().children().css("marginTop");
        var newHeight = (parseInt(correction, 10)) + (parseInt(textHeight, 10));
        $target.prev().velocity({
            height : newHeight
        }, 600);
        $target.css('display', 'none');
        
    })

})();
(function(){
    $(document).ready(function(){
           var timelineLite = $("#timelinelite"),
    tagline = $("#tagline span"),
    tl = new TimelineLite();
            
    tl.from(timelinelite, 0.7, {width:"0px", alpha:0}, "-=0.2")
      .staggerFrom(tagline, 0.5, {top:"-=30px", rotation:"-40deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2); 
        
        
    var firstMainDecor = $(".main_first_decor");
    var secondMainDecor = $(".main_second_decor");
    var thirdMainDecor = $(".main_third_decor");
    var fmdRight = parseInt(firstMainDecor.css('right'), 10);
    var fmdTop = parseInt(firstMainDecor.css('top'), 10); 
    var smdRight = parseInt(secondMainDecor.css('right'), 10);
    var tmdLeft = parseInt(thirdMainDecor.css('left'), 10);
    
    firstMainDecor.velocity({
        right : fmdRight*0.75,
        top : fmdTop*0.8
    }, 2000);
    secondMainDecor.velocity({
        right : fmdRight*0.75
    }, 3000);
    thirdMainDecor.velocity({
        left : tmdLeft*0.75
    }, 3000);
    });
   
})();

(function(){
                            
                var startFix = parseInt($(".main_section_wrapper").css("height"), 10)*0.7;
                var firstFix = parseInt($(".main_section_wrapper").css("height"), 10)*0.75;
                var secondFix = parseInt($(".main_section_wrapper").css("height"), 10)*1.2;
                var thirdFix = secondFix + parseInt($(".pay_article_wrapper").css("height"), 10)*1.3;
                var fourFix = thirdFix + parseInt($(".migrate_article_wrapper").css("height"), 10)*1.6;
                var screenSize = parseInt($(".main_section_wrapper").css("width"), 10);
                var pay = $('.pay_article_text'),
                    mig = $('.migrate_article_text'),
                    saf = $('.safe_article_text'),
                    hel = $('.help_article_text'),
                    wor = $('.work_article_text');
                var piz = $('.pay_ilu_zero'),
                    pio = $('.pay_ilu_one'),
                    pit = $('.pay_ilu_two'),
                    pih = $('.pay_ilu_three');
                var pizTop = parseInt(piz.css('top'), 10),
                    pioTop = parseInt(pio.css('top'), 10),
                    pitTop = parseInt(pit.css('top'), 10),
                    pihTop = parseInt(pih.css('top'), 10);
                var sio = $(".saf_ilu_one");
                var hiz = $(".hel_ilu_zero"),
                    hio = $(".hel_ilu_one");
                var wiz = $('.wor_ilu_zero'),
                    wio = $('.wor_ilu_one'),
                    wit = $('.wor_ilu_two'),
                    wih = $('.wor_ilu_three');
                var wizRight = parseInt(wiz.css('right'), 10),
                    wioTop = parseInt(wio.css('top'), 10),
                    witTop = parseInt(wit.css('top'), 10),
                    wihTop = parseInt(wih.css('top'), 10);
    
                var pos = "top";
                var $menu = $('header');
                var menuHeigh = parseInt($menu.css("height"), 10) + 
                    parseInt($menu.css("paddingTop"), 10) + 
                    parseInt($menu.css("paddingBottom"), 10);
                var activeClass = "active_header";
    
    
    
    	        window.onscroll = function() {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;
                    
                    
                if(scrolled < startFix) stat = true;
                if(scrolled > startFix) stat = false;
                if(stat === false && pos === "top" && screenSize > 500 )  {
                    $menu.addClass(activeClass);
                    pos = "bottom";
                    $menu.css('top', -menuHeigh);
                    $menu.velocity({
                        top : 0
                    }, 600);
                }
                if(stat === true && pos === "bottom") {
                	pos="top";
//                    $menu.css('top', '0');
//                    $menu.velocity({
//                        top : -menuHeigh
//                    }, 600);
//                    setTimeout(function(){
                          $menu.removeClass(activeClass);
//                        $menu.css('top', '0');
//                    }, 600);
                }
                    
                    
                if(scrolled > firstFix) {
//                  piz.velocity({
//                        top : pizTop*0.6
//                    }, 2000);
                    pio.velocity({
                        top : pioTop*1.6
                    }, 1200);
                    pit.velocity({
                        top : pitTop*0.6
                    }, 1200);
                    pih.velocity({
                        top : pihTop*1.6
                    }, 1200);
                    pay.addClass('text_show');
                }
                if(scrolled > secondFix*0.8) {
                    mig.addClass('text_show');
                }
                if(scrolled > secondFix) {
                    sio.addClass('ilu_rotate');
                    saf.addClass('text_show');
                }
                if(scrolled > thirdFix) {
                    hiz.addClass('hel_ilu_rotate');
                    hio.addClass('small_ilu');
                    hel.addClass('text_show');
                }
                if(scrolled > fourFix) {
                    wiz.velocity({
                        right : 0
                    },2000);
                    wio.velocity({
                        right : 0
                    },5000);
                    wit.addClass('ilu_rotate_forward');
                    wih.addClass('ilu_rotate_back');
                    wor.addClass('text_show');
                }
//                if(stat === true && pos === "bottom") {
//
//                }
              function getCoords(elem) {
                var box = elem.getBoundingClientRect();
                return box.top + pageYOffset;
            }
        };
 
})();

(function(){
//    var status = false;
//    var $close = $(".get_free_close");
//    $close.click(function(){
//       $target.css("display", "none"); 
//    });
//    
//    var $target = $(".get_free_wrapper");
//    
//    function showWindow(event){
//        event.preventDefault();
//        $target.css("display", "block"); 
//    };
//    window.onbeforeunload = showWindow;
//    var refresh = false;
//    $( document ).mouseleave(function(){
//        if(status) return;
//        else {
//              $target.css("display", "block"); 
//              status = true;
//        }
//
//    });
    
    
//$( window ).on("beforeunload", function( event ) {
//    var msg = "У нас есть для Вас специальное предложение!";
//    if ( $( event.target.activeElement ).is("a") || refresh === true )
//    {
//        return;
//    }
////    document.write('<div class="get_free_wrapper"><div class="get_free_block"><img src="img/close_w.png" class="get_free_close" /><p class="get_free_header white text">Получите бесплатный аудит</p></div></div></div> ');
//    return msg;
//});
//$( window ).keydown(function( event ){
//    if ( event.keyCode == 116 || ( event.ctrlKey && event.keyCode == 82 ) )
//        refresh = true;
//});


})();


