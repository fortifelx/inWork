    ( function() {
    
    var site = document.querySelector('body');
    var consulButtons = document.querySelectorAll('.consul_button');
        for (i = 0; i < consulButtons.length; i++) {
            consulButtons[i].addEventListener('click', goToConsulWindow, false);
        }
    function goToConsulWindow() {
        event.preventDefault();
        var el = event.target;
        var id = el.getAttribute('href');
        var target = document.querySelector(id);
        if(target) {Velocity( target, "scroll", {
            container: site,
            duration: 1500
        });
       }
    }

})();

(function(){
    function makeSlider(sliderViewer,sliderName, slide, scrollTime, visibleElements, rightArrow, leftArrow ) {
        var viewer = document.querySelector(sliderViewer);
        var slider = document.querySelector(sliderName);
        var slides = slider.querySelectorAll(slide);
        var lt = document.querySelector(leftArrow);
        var gt = document.querySelector(rightArrow);
        var step = slides[0].offsetWidth;
        var status = 0;
        var counter = visibleElements;
        var correction = visibleElements;
        var number =document.querySelector('.slide_number b');
        
        function scrollLeft() {
            var edge = slides.length*step - correction*step;
            if (counter <= correction) {
                counter = slides.length;
                Velocity( slider, {"margin-left": -edge}, scrollTime);
                status = -edge;
                number.innerHTML = '0' + counter;
                Velocity( gt, { rotateZ: '0deg'}, 600);
                return;
            };
            Velocity( slider, {'margin-left': status + step}, scrollTime);
            counter--;
            status = status + step;
            Velocity( gt, { rotateZ: '-180deg'}, 600);
        };
        
        function scrollRight() {
            var edge = slides.length*step;
            if (counter >= slides.length) {
                counter = correction;
                Velocity( slider, {"margin-left": 0}, scrollTime);
                status = 0;
                number.innerHTML = '0' + counter;
                Velocity( gt, { rotateZ: '0deg'}, 600);
                return;
            };
            Velocity( slider, {'margin-left': status - step}, scrollTime);
            counter++;
            status = status - step;
            number.innerHTML = '0' + counter;
            Velocity( gt, { rotateZ: '-180deg'}, 600);
        };
        
   // lt.addEventListener('click', scrollLeft);
    gt.addEventListener('click', scrollRight);
    
    };
    
    function textSlider(textBlock, rightArrow ) {
        var gt = document.querySelector(rightArrow);
        var text = document.querySelectorAll(textBlock);
        var status = 0;
        
        function changeText() {
            status++;
            for(i = 0; i < text.length; i++) {
                    Velocity( text[i], {opacity: '0'}, 300);
            }
            if(status >= text.length) {
                        status = 0;
               
            }
            Velocity( text[status], {opacity: '1'}, 300);
        }
        gt.addEventListener('click', changeText);
    };
    
    makeSlider('.slide_viewer', '.slider_wrapper', 'li', 600, 1, '.slide_subtext img');
    
    textSlider('.slide_text', '.slide_subtext img');
    
})();  
(function(){
    function makeSlider(sliderViewer,sliderName, slide, scrollTime, visibleElements, rightArrow, leftArrow ) {
        var viewer = document.querySelector(sliderViewer);
        var slider = document.querySelector(sliderName);
        var slides = slider.querySelectorAll(slide);
        var lt = viewer.querySelector(leftArrow);
        var gt = viewer.querySelector(rightArrow);
        var step = slides[0].offsetWidth;
        var status = 0;
        var counter = visibleElements;
        var correction = visibleElements;
        
        function scrollLeft() {
            var edge = slides.length*step - correction*step;
            if (counter <= correction) {
                counter = slides.length;
                Velocity( slider, {"margin-left": -edge}, scrollTime*3);
                status = -edge;
                return;
            };
            Velocity( slider, {'margin-left': status + step}, scrollTime);
            counter--;
            status = status + step;
        };
        
        function scrollRight() {
            var edge = slides.length*step;
            if (counter >= slides.length) {
                counter = correction;
                Velocity( slider, {"margin-left": 0}, scrollTime*3);
                status = 0;
                return;
            };
            Velocity( slider, {'margin-left': status - step}, scrollTime);
            counter++;
            status = status - step;
        };
        
    lt.addEventListener('click', scrollLeft);
    gt.addEventListener('click', scrollRight);
    
    };
})();  
    