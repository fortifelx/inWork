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