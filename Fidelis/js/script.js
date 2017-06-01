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
            console.log(slides[i]);
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
        rounds[0].style.backgroundColor = '#004f79';
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
            goal.style.backgroundColor = "#004f79";
            console.log( n + " and " + counter);
            if ( counter === slNumb - 1) {

                if (n > 0) {
                    console.log('first 1');
                    var beforeEl = slides[counter].offsetWidth + "px";
                    slides[n].style.marginLeft = - slides[n].offsetWidth + "px";
                    Velocity( slides[n], { "margin-left" : 0 }, 1000);
                    Velocity( slides[counter], {"margin-left" : beforeEl }, 1000);
                } else {
                    console.log('first 2');
                    var beforeEl = - slides[counter].offsetWidth + "px";
                    slides[0].style.marginLeft = slides[0].offsetWidth + "px";
                    Velocity( slides[0], { "margin-left" : 0 }, 1000);
                    Velocity( slides[counter], {"margin-left" : beforeEl }, 1000);
                    n = 0;
                }
            }
            if(n < counter && counter !== slNumb - 1) {
                console.log('second 1');
                var beforeEl = slides[counter].offsetWidth + "px";
                slides[n].style.marginLeft = - slides[n].offsetWidth + "px";
                Velocity( slides[n], { "margin-left" : 0 }, 1000);
                Velocity( slides[counter], {"margin-left" : beforeEl }, 1000);
            };
            if (n > counter && counter !== slNumb - 1){
                console.log('third 1');
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