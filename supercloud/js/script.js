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
    
    
})();
(function(){    
                var startFix = parseInt($(".main_section_wrapper").css("height"), 10)*0.7;
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
                if(stat === false && pos === "top") {
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
              function getCoords(elem) {
                var box = elem.getBoundingClientRect();
                return box.top + pageYOffset;
            }
        };
})();

(function(){
var tl = new TimelineMax({onUpdate:updateUI, repeat:2, repeatDelay:1, yoyo:true}); 
    
   tl.from(logo, 0.5, {left:'-=60px', ease:Back.easeOut})
   .staggerFrom(txt, 0.1, {alpha:0}, 0.02, "textEffect")
   .staggerFrom(txt, 0.8, {rotationY:"-270deg", top:"100px", transformOrigin: "50% 50% -80", ease:Back.easeOut}, 0.02, "textEffect")
   .staggerTo(txt, 0.6, {rotationX:"+=360deg", transformOrigin:"50% 50% 10", color:"#90e500"}, 0.02);
    
})();