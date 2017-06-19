(function () {
        var main = document.querySelector('.main');
        var tr = document.querySelector('.main_wrapper');
        var start = document.querySelector('.start');
        var h = main.offsetHeight;
        var astronaut = document.querySelector('.astronaut');
        var topAstro = astronaut.offsetTop;
        var planetOne = document.querySelector('.create_site img');
        var planetTwo = document.querySelector('.our_case img');
        var createSite = document.querySelector('.create_site');
        var ourCase = document.querySelector('.our_case');
        var ourSale = document.querySelector('.our_sale');
        var astronauts = document.querySelectorAll('.our_sale img');
        var wrapper = document.querySelector('.wrapper');
        var cood;
        var caseCood;
        var saleCood;
        window.onscroll = function() {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;
                // var pr = document.querySelector('.start');
            // var st = pr.querySelectorAll('.start_wrapper');
            // var p = st[0].querySelector('p');
            // var h3 = st[0].querySelector('h3');
            // h3.style.paddingTop = '8%';
            // p.style.marginTop = '10%';
            function getCoords(elem) {
                var box = elem.getBoundingClientRect();
                return box.top + pageYOffset;
            }
            cood = getCoords(createSite);
            caseCood = getCoords(ourCase);
            saleCood = getCoords(ourSale);

                if(scrolled > h) {
                        tr.style.display = 'none';
                        var perc =   scrolled*100/wrapper.offsetHeight -5;  // start.offsetHeight * scrolled / 1000000;
                        var stopAstro = start.offsetHeight/2;
                        if (scrolled < cood) {
                            astronaut.style.right = 6 * perc/2.5 - 25 + '%';
                        }
                        if (scrolled > cood - stopAstro ) {
                            var perc =   scrolled*100/wrapper.offsetHeight -5;  // start.offsetHeight * scrolled / 100000;
                            astronaut.style.bottom = 'none';
                            var correction = scrolled - h - stopAstro;
                            astronaut.style.top = topAstro - 0.8*correction +  'px';

                        }
                        // st[0].style.position = 'fixed';
                        // st[0].style.zIndex = 0;
                        // st[0].style.top = 0;
                        // st[0].style.width = st[1].offsetWidth + 'px';
                        // st[1].style.marginTop = st[0].offsetHeight + 'px';
                }
                if(scrolled < h) {
                    tr.style.display = 'block';
                    astronaut.style.right = '-25%';
                    // st[0].style.position = 'relative';
                    // st[0].style.zIndex = 0;
                    // st[0].style.top = h;
                    // st[0].style.width = st[1].offsetWidth + 'px';
                    // st[1].style.marginTop = st[0].offsetHeight + 'px';
                }
                if (scrolled > cood && scrolled < scrolled + cood) {
                        var plTop = 100;
                        var plLeft = 100;
                        var perc = start.offsetHeight * scrolled / 100000 - 65;
                        planetOne.style.left = plLeft - 1.1*perc + '%';
                        planetOne.style.top = plTop - 1.1*perc + -10 + '%';

                }
                if (scrolled > caseCood && scrolled < scrolled + caseCood) {
                var plTop = 100;
                var plLeft = 100;
                var perc = start.offsetHeight * scrolled / 100000 - 115;
                planetTwo.style.left = plLeft - 0.9*perc + '%';
                planetTwo.style.top = plTop - 0.9*perc + -10 + '%';
                }
                if (scrolled > saleCood*0.65 && scrolled < scrolled + saleCood) {
                var firsOp = [1.6, 2.1, 2.4];
                var perc = scrolled*130/wrapper.offsetHeight-50;
                for (var i = 0; i < firsOp.length; i++) {
                        astronauts[i].style.opacity = perc/100*firsOp[i] + 0.2;
                }


            }
       }

    }
)();
( function(){
        doSlider('.result_slider_viewer', '.result_slide', 600, '.r_slider_arrow');
    function doSlider(sliderName, slide, scrollTime, leftArrow ) {
        slider = document.querySelector(sliderName);
        var slids = slider.querySelectorAll(slide);
        var slides = [];
        for(var i = 0; i < slids.length; i++) {
            slides.push(slids[i]);
        };
        slides[0].style.left = '0';
        var lt = document.querySelector(leftArrow);
        // var gt = document.querySelector(rightArrow);
        var counter = 1;
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
            var slideSize = slider.querySelectorAll(slide)[counter].offsetWidth;
            if (counter === slides.length-1) {
                var lastSlide = slider.lastElementChild;
                var firstSlide = slider.firstElementChild;
                var firstEl = slides.shift();
                slides.push(firstEl);
                slider.insertBefore(firstSlide, null);
                firstSlide.style.marginLeft = 0;
                Velocity(lastSlide, { "margin-left": -slideSize }, scrollTime);
                counter = slides.length-1;
                return;
            }
            Velocity(slides[counter], { "margin-left": -slideSize }, scrollTime);
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
                Velocity(lastSlide, {"margin-left": 0}, scrollTime);
                return;
            }
            Velocity(slides[counter-1], { "margin-left": 0 }, scrollTime);
            counter--;
        }
        lt.addEventListener('click', scrollRight);
        //gt.addEventListener('click', scrollLeft);

    }
})();