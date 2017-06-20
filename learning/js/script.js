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
        var status = window.pageYOffset || document.documentElement.scrollTop;
        if(status > 10) tr.style.display = 'none';
        window.onscroll = function() {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;
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

                            astronaut.style.bottom = 'none';
                            var correction = scrolled - h - stopAstro;
                            astronaut.style.top = topAstro - 0.8*correction +  'px';

                        }
                }
                if(scrolled < h) {
                    tr.style.display = 'block';
                    astronaut.style.right = '-25%';
                }
                if (scrolled > cood - (createSite.offsetHeight*0.7) && scrolled < scrolled + cood) {
                        var plTop = 100;
                        var plLeft = 100;
                        var perc = scrolled*100/wrapper.offsetHeight - 15;
                        planetOne.style.left = plLeft - 1.8*perc + '%';
                        planetOne.style.top = plTop - 1.9*perc + -10 + '%';

                }
                if (scrolled > caseCood && scrolled < scrolled + caseCood) {
                var plTop = 100;
                var plLeft = 100;
                var perc = start.offsetHeight * scrolled / 100000 - 115;
                planetTwo.style.left = plLeft - 0.9*perc + '%';
                planetTwo.style.top = plTop - 0.9*perc + -10 + '%';
                }
                if (scrolled > saleCood- (ourSale.offsetHeight*0.9) && scrolled < scrolled + saleCood) {
                    function showAstroOne() {
                        Velocity( astronauts[2], { opacity: '1'}, 400);
                    }
                    function showAstroTwo() {
                        Velocity( astronauts[1], { opacity: '1'}, 400);
                    }
                    function showAstroThird() {
                        Velocity( astronauts[0], { opacity: '1'}, 400);
                    }
                    setTimeout(showAstroOne, 100);
                    setTimeout(showAstroTwo, 500);
                    setTimeout(showAstroThird, 900);
                }
            if (scrolled < saleCood -(ourSale.offsetHeight*0.87) && scrolled < scrolled + saleCood) {
                for (var i = 0; i < astronauts.length; i++) {
                        astronauts[i].style.opacity = 0;
                }
            }
       }

    }
)();
( function(){
    function makeSlider() {
        var slider = document.querySelector('.result_slider_viewer');
        var slides = document.querySelectorAll('.result_slide');
        var gt = document.querySelector('.r_slider_arrow');
        var lt = document.querySelector('.l_slider_arrow');

        var status = 0;
        var counter = 0;
        var correction = 0;
        lt.style.display = 'none';
        function watchDog() {
            function backToNull() {
                slider.style.marginLeft = 0;
                status = 0;
                counter = 0;
            }

            window.addEventListener('resize', backToNull);
        }
        watchDog();
        function scrollLeft() {
            var step = slider.querySelectorAll('.result_slide')[0].offsetWidth;
            var edge = slides.length * step - step;
            if (counter <= correction) {
                counter = slides.length - 1;
                Velocity(slider, {"margin-left": -edge}, 600 * 2);
                status = -edge;
                return;
            };
            gt.style.display = 'block';
            Velocity(slider, {'margin-left': status + step}, 600);
            counter--;
            status = status + step;
            if(counter <= correction) {
                lt.style.display = 'none';
            }
        };

        function scrollRight() {
            console.log('right');
            var step = slider.querySelectorAll('.result_slide')[0].offsetWidth;
            var edge = slides.length * step;
            if (counter >= slides.length - 1) {
                counter = correction;
                Velocity(slider, {"margin-left": 0}, 600 * 2);
                status = 0;
                return;
            };
            lt.style.display = 'block';
            Velocity(slider, {'margin-left': status - step}, 600);
            counter++;
            status = status - step;
            if (counter >= slides.length - 1) {
                gt.style.display = 'none';
            }
        };

        lt.addEventListener('click', scrollLeft);
        gt.addEventListener('click', scrollRight);
    }
    makeSlider();
    //     doSlider('.result_slider_viewer', '.result_slide', 600, '.r_slider_arrow', '.l_slider_arrow');
    // function doSlider(sliderName, slide, scrollTime, leftArrow, rightArrow) {
    //     slider = document.querySelector(sliderName);
    //     var slids = slider.querySelectorAll(slide);
    //     var slides = [];
    //     for(var i = 0; i < slids.length; i++) {
    //         slides.push(slids[i]);
    //     };
    //     var lt = document.querySelector(leftArrow);
    //     var gt = document.querySelector(rightArrow);
    //     var counter = 0;
    //     function watchDog() {
    //         function backToNull() {
    //             for( var i = 0;i <slides.length; i++) {
    //                 slides[i].style.marginLeft = 0;
    //             }
    //             counter = 0;
    //             scrollRight();
    //         }
    //         window.addEventListener('resize' , backToNull);
    //     }
    //     watchDog();
    //
    //     function scrollRight() {
    //         var slideSize = slider.querySelectorAll(slide)[counter].offsetWidth;
    //         if (counter === slides.length-1) {
    //             var lastSlide = slider.lastElementChild;
    //             var firstSlide = slider.firstElementChild;
    //             var firstEl = slides.shift();
    //             slides.push(firstEl);
    //             slider.insertBefore(firstSlide, null);
    //             firstSlide.style.left = 0;
    //             Velocity(lastSlide, { "margin-left": -slideSize }, scrollTime);
    //             counter = slides.length-1;
    //             return;
    //         }
    //         Velocity(slides[counter], { "margin-left": -slideSize }, scrollTime);
    //         counter++;
    //     }
    //     function scrollLeft() {
    //         var slideSize = slider.querySelectorAll(slide)[0].offsetWidth;
    //         var slideWidth = "-"+slideSize+"px";
    //         var supSlideWidth = "-"+2*slideSize+"px";
    //         if (counter === 1) {
    //             var lastSlide = slider.lastElementChild;
    //             var firstSlide = slider.firstElementChild;
    //             var firstEl = slides.pop();
    //             slides.unshift(firstEl);
    //             slider.insertBefore(firstEl, firstSlide);
    //             firstEl.style.marginLeft = slideWidth;
    //             counter = 1;
    //             console.log('first6');
    //             Velocity(firstEl, {"margin-left": slideWidth+ 'px'}, scrollTime);
    //             return;
    //         }
    //         Velocity(slides[counter-1], { "margin-left": -slideWidth }, scrollTime);
    //         counter--;
    //     }
    //     scrollRight();
    //     lt.addEventListener('click', scrollRight);
    //     gt.addEventListener('click', scrollLeft);
    //
    // }
})();
( function() {
    var site = document.querySelector('body');
   document.querySelector('.result').addEventListener('click', stopDefault, false);
    function stopDefault(event) {
        event.preventDefault();
        var el = event.target;
        var target = document.querySelector('.shuttle');
        if(target) {Velocity( target, "scroll", {
            container: site,
            duration: 200
        });
        }

    }
})();