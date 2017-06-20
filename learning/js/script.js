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
                        var stopAstro = start.offsetHeight/2.1;
                        if (scrolled < cood && scrolled < cood - stopAstro) {
                            astronaut.style.right = 6 * perc/2.5 - 25 + '%';
                        }
                        if (scrolled > cood - stopAstro) {
                             var correction = scrolled - h - stopAstro;
                            astronaut.style.top = topAstro - 1.1*correction +  'px';
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
( function () {
    function makeInfo() {
        if( infoHeaders === null || work === true) {
            return;
        };
        work = true;

        var heads = document.querySelectorAll('.card_about_header');
        var texts = document.querySelectorAll('.card_about_text');

        function showInfo(ev) {
            var tr = ev.target;

            for(var i = 0; i < heads.length - 1; i++) {
                texts[i].style.display = 'none';
                heads[i].style.borderBottom = '1px solid #7f7f7f';
                heads[i].style.color = '#7f7f7f';
                if (heads[i] === tr) {
                    heads[i].style.borderBottom = 'none';
                    heads[i].style.color = '#559449';
                    texts[i].style.display = 'block';
                }
            }
        }

        for (var i = 0; i < heads.length - 1; i++) {
            heads[i].addEventListener('click', showInfo, false);
        }
    }

})();