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
        var cood;
        var caseCood;
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

                if(scrolled > h) {
                        tr.style.display = 'none';
                        var perc = start.offsetHeight * scrolled / 1000000;
                        var stopAstro = start.offsetHeight - (start.offsetHeight * 0.50);
                        if (scrolled < h + stopAstro) {
                            astronaut.style.right = 6 * perc - 25 + '%';
                        }
                        if (scrolled > h + stopAstro) {
                            var perc = start.offsetHeight * scrolled / 100000;
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
                planetTwo.style.left = plLeft - 1.1*perc + '%';
                planetTwo.style.top = plTop - 1.1*perc + -10 + '%';

            }
       }

    }
)();
(function () {
    var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 34: 1, 33: 1};
    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if( e === undefined) return;
        if (keys[e.keyCode]) {

            preventDefault(e);
            return false;
        }
    }
    function disableScroll() {
        console.log('here');
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }
        function showText(e) {
            var startPos = document.querySelector('.main').offsetHeight;
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if(scrolled > startPos) {
                    var viewer = document.querySelector('.start');
                    var tr = viewer.querySelector('.start_wrapper');
                    var length = scrolled - startPos;
            };
        }


    // disableScroll();
    // preventDefaultForScrollKeys();
})();