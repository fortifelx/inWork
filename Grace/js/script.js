(function(){

})();
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
            return;
        }
        if (counter === 0) {

        }
        if (counter === slidesLength - 1) {

        } else {
            return;
        }
    };
    $lArrow.click(makeSlider);
    $rArrow.click(makeSlider);
    // setInterval(makeSlider, 10000);
})();