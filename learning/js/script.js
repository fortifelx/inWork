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