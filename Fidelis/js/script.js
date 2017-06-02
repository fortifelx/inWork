( function(){
    var langName = document.querySelectorAll('.lang p');
    function chooseMoney(ev) {
        var el = ev.target;
        langName = document.querySelectorAll('.lang p');
        lang = document.querySelector('.lang');
        if( el === langName[0]) return;
        lang.removeChild(el);
        lang.insertBefore(el, langName[0]);
    }
    for( var i = 0; i < langName.length; i++) {
        langName[i].addEventListener('click', chooseMoney, false);
    };
})();


(function(){
    var slider = document.querySelector('.top_slider_wrapper');
    var work = false;
    if (slider !== null) {
        if (work === true) return;
        showSlider();
        work = true;
    };
    document.addEventListener("DOMNodeInserted", showSlider);
    var slNumb = 3;

    function showSlider() {
        if( slider === null || work === true) {
            return;
        };
        work = true;
        slider = document.querySelector('.top_slider_wrapper');
        var slids = document.querySelectorAll('.sub_articl');
        var slides = [];
        for(var i = 0; i < 3; i++) {
            slides[i] = slids[i].cloneNode(true);
            slider.appendChild(slides[i]);
            if (i > 0) {
                slides[i].style.marginLeft = slides[i].offsetWidth + 'px';
            }
        };
        var counter = 0;
        var roundsBox = document.querySelector('.circle_wrapper');
        var n = 0;
        for (var i = 0; i < slides.length; i++ ) {
            var round = document.createElement('div');
            round.value = i;
            roundsBox.appendChild(round);
        };
        var status = true;
        var rounds = document.querySelectorAll('.circle_wrapper div');
        rounds[0].style.backgroundColor = '#00293f';
        function showSlide(ev) {
            if (status === false) return;
            status = false;
            for (var i = 0; i < rounds.length; i++) {
                rounds[i].style.backgroundColor = 'transparent';
            };
            var goal;
            if (ev === undefined && counter < rounds.length) {
                goal = rounds[counter + 1];
            }
            if (ev === undefined && counter === rounds.length - 1) {
                goal = rounds[0];
            }
            if (ev) {
                goal = ev.target;
                if (ev.target === roundsBox) {
                    goal = rounds[n];
                };
            }
            n = goal.value;
            goal.style.backgroundColor = "#00293f";
            if ( counter === slNumb - 1) {
                if (n > 0) {
                    var beforeEl = slides[counter].offsetWidth + "px";
                    slides[n].style.marginLeft = - slides[n].offsetWidth + "px";
                    Velocity( slides[n], { "margin-left" : 0 }, 1000);
                    Velocity( slides[counter], {"margin-left" : beforeEl }, 1000);
                } else {
                    var beforeEl = - slides[counter].offsetWidth + "px";
                    slides[0].style.marginLeft = slides[0].offsetWidth + "px";
                    Velocity( slides[0], { "margin-left" : 0 }, 1000);
                    Velocity( slides[counter], {"margin-left" : beforeEl }, 1000);
                    n = 0;
                }
            }
            if(n < counter && counter !== slNumb - 1) {
                var beforeEl = slides[counter].offsetWidth + "px";
                slides[n].style.marginLeft = - slides[n].offsetWidth + "px";
                Velocity( slides[n], { "margin-left" : 0 }, 1000);
                Velocity( slides[counter], {"margin-left" : beforeEl }, 1000);
            };
            if (n > counter && counter !== slNumb - 1){
                var beforeEl = - slides[counter].offsetWidth + "px";
                slides[n].style.marginLeft = slides[n].offsetWidth + "px";
                Velocity( slides[n], { "margin-left" : 0 }, 1000);
                Velocity( slides[counter], {"margin-left" : beforeEl }, 1000);
            };
            counter = n;
            function changeStatus() {
                status = true;
            };
            setTimeout( changeStatus , 1050);

        };
        function demo() {
            if(status === true) {
                showSlide();
            }
        };

        roundsBox.addEventListener('click', showSlide);
        setInterval( demo, 6000);

    };
})();
( function () {
    var slider = document.querySelector('.sub_slider');
    var work = false;
    if (slider !== null) {
        if (work === true) return;
        setInterval( demo, 10000);
        work = true;
    };
    var status = true;

    function changeArticl() {
        if( slider === null || work === false) {
            return;
        };
        work = true;
        if (slider.hasChildNodes()) {
            slider = document.querySelector('.sub_slider');
            var slide = slider.lastElementChild;
            slider.insertBefore(slider.removeChild(slide), slider.childNodes[0]);
            slide.style.marginTop = - slide.offsetHeight;
            slide.style.opacity = 0;
            Velocity( slide, { 'margin-top' : '0', 'opacity' : '1'},700);
        }
    }
    function demo() {
        if(status === true) {
            changeArticl();
        }
    };

})();
( function () {
    var slides = document.querySelectorAll('.main_ind');
    var work = false;
    if (slides[0] !== undefined) {
        if (work === true) return;
        work = true;
    };
    if( slides[0] === undefined || work === false) {
        return;
    };
    work = true;
    slides[6].style.display = "none";
    var firstImg = slides[0].querySelector('img');
    for(var i = 0; i < slides.length; i++) {
        var img = slides[i].querySelector('img');
        var par = slides[i].parentNode;
        par.addEventListener('mouseover', show);
        img.style.display = 'none';
    }
    firstImg.style.display = 'block';
    firstImg.style.opacity = '1';
    function show() {
        for(var i = 0; i < slides.length; i++) {
            var img = slides[i].querySelector('img');
            Velocity( img, { 'opacity' : '0'}, 40);
            img.style.zIndex = 0;
            setTimeout( function(){ img.style.display = 'none';}, 40);
        }
        var el = this.querySelector('img');
        el.style.display = 'block';
        el.style.opacity = '0';
        el.style.zIndex = 3;
        Velocity(el , { 'opacity' : '1'}, 100);
    }

})();

( function () {
    var buttons = document.querySelectorAll('.button');
    var button = buttons[0];
    var work = false;
    if (button !== null) {
        if (work === true) return;
        work = true;
    };
    if( button === null || work === false) {
        return;
    };
    work = true;
    function show() {
        var tr = this.previousElementSibling;
        var ht = tr.firstElementChild.offsetHeight + 'px';
        Velocity( tr, { "height" : ht}, [.08,.8,.59,.25]);
        this.style.display = 'none';
    }
    if (buttons.length > 1) {
        for( var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', show);
        }
    } else {
        button.addEventListener('click', show);
    }
})();
( function () {
    var gamb = document.querySelector('.gamb');
    var work = false;
    var status = true;
    if (gamb !== null) {
        if (work === true) return;
        work = true;
    };
    if( gamb === null || work === false) {
        return;
    };
    work = true;
    function show() {
        var tr = this.nextElementSibling;
        var ht = 200 + 'px';
        if (status === true) {
            Velocity( tr, { "height" : ht, 'width' : '100%'}, [.08,.8,.59,.25]);
            this.classList.remove('gamb_open');
            this.classList.add('gamb_close');
            status = false;
        } else {
            Velocity(tr, {"height": '0', 'width' : '200px'}, [.08, .8, .59, .25]);
            this.classList.add('gamb_open');
            this.classList.remove('gamb_close');
            status = true;
        }
    }
        gamb.addEventListener('click', show);
})();
