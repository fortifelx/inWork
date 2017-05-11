function makeSlider(sliderViewer,sliderName, slide, scrollTime, visibleElements, rightArrow, leftArrow ) {
        var viewer = document.querySelector(sliderViewer);
        var slider = document.querySelector(sliderName);
        var slides = slider.querySelectorAll(slide);
        var lt = document.querySelector(leftArrow);
        var gt = document.querySelector(rightArrow);
        
        var status = 0;
        var counter = visibleElements;
        var correction = visibleElements;
        function watchDog() {
            function backToNull() {
                slider.style.marginLeft = 0;
                status = 0;
                counter = visibleElements;
                    }
            window.addEventListener('resize' , backToNull);
        }
        watchDog();
        function scrollLeft() {
            var step = slider.querySelectorAll(slide)[counter].offsetWidth;
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
            var step = slider.querySelectorAll(slide)[0].offsetWidth;
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