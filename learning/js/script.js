(function () {
        var main = document.querySelector('.main');
        var tr = document.querySelector('.main_wrapper');
        var h = main.offsetHeight;
        window.onscroll = function() {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;
                if(scrolled > h) tr.style.display = 'none';
                if(scrolled < h) tr.style.display = 'block';
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
                    var length;
            };
        }


    // disableScroll();
    // preventDefaultForScrollKeys();
})();