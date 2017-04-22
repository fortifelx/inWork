function doSlider(sliderViewer,sliderName, slide, scrollTime, visibleElements, rightArrow, leftArrow ) {
        var viewer = document.querySelector(sliderViewer);
        var slider = document.querySelector(sliderName);
        var slids = slider.querySelectorAll(slide);
        var slides = [];
        for(var i = 0; i < slids.length; i++) {

            slides.push(slids[i]);
        };
        var lt = document.querySelector(leftArrow);
        var gt = document.querySelector(rightArrow);
        var counter = 0;
            function watchDog() {
            function backToNull() {
                for( var i = 0;i <slides.length; i++) {
                    slides[i].style.marginLeft = 0;
                }
                counter = 0;
            }
            window.addEventListener('resize' , backToNull);
        }
        watchDog();
        
        function scrollRight() {
            var slideSize = slider.querySelectorAll(slide)[0].offsetWidth;
            var slideWidth = slideSize+"px";
            if (counter === slides.length-1) {
                var lastSlide = slider.lastElementChild;
                var firstSlide = slider.firstElementChild;
                var firstEl = slides.shift();
                slides.push(firstEl);
                slider.insertBefore(firstSlide, null);
                firstSlide.style.marginLeft = 0;
                Velocity(lastSlide, { "margin-left": -slideSize }, 600);
                counter = slides.length-1;
                return;
            }
            Velocity(slides[counter], { "margin-left": -slideSize }, 600);
            counter++;
        }
        function scrollLeft() {
            var slideSize = slider.querySelectorAll(slide)[0].offsetWidth;
            var slideWidth = "-"+slideSize+"px";
            if (counter === 0) {
                var lastSlide = slider.lastElementChild;
                var firstSlide = slider.firstElementChild;
                var firstEl = slides.pop();
                slides.unshift(firstEl);
                slider.insertBefore(lastSlide, firstSlide);
                lastSlide.style.marginLeft = slideWidth;
                counter = 0;
                Velocity(lastSlide, {"margin-left": 0}, 600);
                return;
            }
            Velocity(slides[counter-1], { "margin-left": 0 }, 600);
            counter--;
        }
        gt.addEventListener('click', scrollRight);
        lt.addEventListener('click', scrollLeft);
        
    }