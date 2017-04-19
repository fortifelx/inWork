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
        var slides = slider.querySelector(slide);
        var lt = viewer.querySelector(rightArrow);
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
    