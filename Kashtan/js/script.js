(   function(){

    var menuItems = document.querySelectorAll('.category_list li');
    var subMenus = document.querySelectorAll('.sub_menu');
    var closeMenu = document.querySelectorAll('.close_sub_menu');
    function showSubMenu(ev) {
        var el = this.querySelector('.sub_menu');
        closeSubMenu(ev);
        for (var i = 0; i < closeMenu.length; i++) {
            if(ev.target == closeMenu[i]) return;
        }
        if (el === null) return;
        el.style.display = 'block';
    };
    function closeSubMenu(ev) {
        var tr = ev.target;
        var cb = tr.querySelector('.close_sub_menu');
        cb.addEventListener('click', function () {
            for (var i = 0; i < subMenus.length; i++) {
                subMenus[i].style.display = 'none';
            }
        }, false);
        for (var i = 0; i < subMenus.length; i++) {
            subMenus[i].style.display = 'none';
        }
    };
    function clickDog(el, func) {
        for (var i = 0; i < el.length; i++) {
            el[i].addEventListener('mouseenter', func, false);
        }
    }
    clickDog(menuItems, showSubMenu);



})();
(function(){
    var slider = document.querySelector('.top_slider_wrapper');
    var work = false;
    if (slider != null) {
        if (work === true) return;
        showSlider();
        work = true;
    };
    document.addEventListener("DOMNodeInserted", showSlider)


function showSlider() {
        if( slider === null || work === true) {
            work = false;
            return;
        };
        work = true;
    slider = document.querySelector('.top_slider_wrapper');
    var slides = document.querySelectorAll('.top_slider_wrapper img');
    var roundsBox = document.querySelector('.circle_wrapper');
    var n = 0;
    for (var i = 0; i < slides.length; i++ ) {
        var round = document.createElement('div');
        round.value = i;
        roundsBox.appendChild(round);
    };
    var status = true;
    var rounds = document.querySelectorAll('.circle_wrapper div');
    function showSlide(ev) {
        if (ev.target === roundsBox) return;
        for (var i = 0; i < rounds.length; i++) {
            rounds[i].style.backgroundColor = 'transparent';
        }
        var goal = ev.target;
        n = goal.value;
        goal.style.backgroundColor = 'white';
        var roundValue = -(goal.value * 740)+'px';
        Velocity( slider, {'margin-left': roundValue}, 1000);
    } ;
    function demonstration(time) {
        rounds = document.querySelectorAll('.circle_wrapper div');
        if (n === slides.length) {
            n= 0;
        };
        var el = rounds[n];
        for (var i =0; i < rounds.length;i ++) {
            rounds[i].style.backgroundColor = 'transparent';
        };
        el.style.backgroundColor = 'white';
        var value = -(el.value * 740)+'px';
        Velocity( slider, {'margin-left': value}, time);
        n++;
        if (status === false) return;
        status = false;
        setTimeout(function() {demonstration(time)}, 5000);
        status = true;
    };
    roundsBox.addEventListener('click', showSlide);
    demonstration(1000);

}
})();
( function(){
    var money = document.querySelector('.money_name');
    var moneyName = document.querySelectorAll('.money_name li');

    function showList() {
        money = document.querySelector('.money_name');
        if (money.offsetHeight < 63) {
            Velocity( money, { height : '63px'}, 600);
        }
    };
    function chooseMoney(ev) {
        var el = ev.target;
        moneyName = document.querySelectorAll('.money_name li');
        money = document.querySelector('.money_name');
        if(money.offsetHeight > 20) {
            Velocity(money, {height: '20px'}, 600);
        }
        if( el === moneyName[0]) return;
        money.removeChild(el);
        money.insertBefore(el, moneyName[0]);
    }
    money.addEventListener('click', showList, false);
    for( var i = 0; i < moneyName.length; i++) {
        moneyName[i].addEventListener('click', chooseMoney, false);
    };


})();
( function() {


    var calculators = document.querySelectorAll('.calc_name');
    var work = false;
    if (calculators != null) {
        if (work === true) return;
        makeCalc();
        work = true;
    };
    document.addEventListener("DOMNodeInserted", makeCalc);

 function makeCalc() {
     if( calculators === null || work === true) {
         work = false;
         return;
     };
     work = true;

    var calc = document.querySelectorAll('.calc_name');
    var lastTr;

    function showCalc(ev) {
        var tr = ev.target;
        if (tr === lastTr) {
            var el = lastTr.nextElementSibling;
            Velocity( el, { height : '0'}, 1000);
            lastTr = false;
            return;
        }
        if(lastTr) {
            var el = lastTr.nextElementSibling;
            Velocity( el, { height : '0'}, 1000);
        };
        lastTr = tr;
        var el = tr.nextElementSibling;

        var firstHeight = el.firstElementChild.nextElementSibling.offsetHeight;
        var secondHeight = el.lastElementChild.offsetHeight;

        if (firstHeight > secondHeight) elHeight = firstHeight + 55;
        if (firstHeight < secondHeight) elHeight = secondHeight + 55;

        if (el.offsetHeight < elHeight) {
        Velocity( el, { height : elHeight}, 1000);
        }
    }

    for (var i = 0; i < calc.length; i++) {
        calc[i].addEventListener('click', showCalc, false);
    }
 }


})();
( function() {


    var infoHeaders = document.querySelectorAll('.card_about_header');
    var work = false;
    if (infoHeaders != null) {
        if (work === true) return;
        makeInfo();
        work = true;
    };
    document.addEventListener("DOMNodeInserted", makeInfo);

    function makeInfo() {
        if( infoHeaders === null || work === true) {
            work = false;
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
( function() {
    var infoHeaders = document.querySelectorAll('.popular_header');
    var work = false;
    if (infoHeaders != null) {
        if (work === true) return;
        makeInfo();
        work = true;
    };
    document.addEventListener("DOMNodeInserted", makeInfo);
    function makeInfo() {
        if( infoHeaders === null || work === true) {
            work = false;
            return;
        };
        work = true;
        var heads = document.querySelectorAll('.popular_header');
        var textOne = document.querySelector('.sale_wrapper');
        var textTwo = document.querySelector('.popular_wrapper');
        function showInfo(ev) {
            var tr = ev.target;
            if ( tr === heads[0]) {
                heads[1].style.color = "#cccccc";
                heads[0].style.color = "#559449";
                textOne.style.display = "none";
                textTwo.style.display = "block";
            }
            if ( tr === heads[1]) {
                heads[0].style.color = "#cccccc";
                heads[1].style.color = "#559449";
                textOne.style.display = "block";
                textTwo.style.display = "none";
            }
        }
        for (var i = 0; i < heads.length; i++) {
            heads[i].addEventListener('click', showInfo, false);
        }
    }
})();
( function(){
    var sliders = document.querySelector('.img_slider_wrapper');
    var work = false;
    if (sliders) {
        console.log('stA')
        if (work === true) return;
        makeSlider();
        work = true;
    };

    document.addEventListener("DOMNodeInserted", makeSlider);

    function makeSlider() {
        if( sliders === null)  {
            work = false;
            return;
        };
        console.log('st2');
        if (work === true) return;
        work = true;
        var slider = document.querySelector('.img_slider_wrapper');
        var slides = document.querySelectorAll('.slide');
        var lt = document.querySelector('.left_arrow');
        var gt = document.querySelector('.right_arrow');

        var status = 0;
        var counter = 3;
        var correction = 3;
        function watchDog() {
            function backToNull() {
                slider.style.marginLeft = 0;
                status = 0;
                counter = 3;
            }
            window.addEventListener('resize' , backToNull);
        }
        watchDog();
        function scrollLeft() {
            var step = slider.querySelectorAll('.slide')[0].offsetWidth;
            var edge = slides.length*step - correction*step;
            if (counter <= correction) {
                counter = slides.length;
                Velocity( slider, {"margin-left": -edge}, 600*2);
                status = -edge;
                return;
            };
            Velocity( slider, {'margin-left': status + step}, 600);
            counter--;
            status = status + step;
        };

        function scrollRight() {
            var step = slider.querySelectorAll('.slide')[0].offsetWidth;
            var edge = slides.length*step;
            if (counter >= slides.length) {
                counter = correction;
                Velocity( slider, {"margin-left": 0}, 600*2);
                status = 0;
                return;
            };
            Velocity( slider, {'margin-left': status - step}, 600);
            counter++;
            status = status - step;
        };

        lt.addEventListener('click', scrollLeft);
        gt.addEventListener('click', scrollRight);

        function showSlide(ev) {
            var tr = document.querySelector('.card_main_img');
            var oldEl = tr.querySelector('img');
            var newEl = this.querySelector('img');
            var main = newEl.cloneNode(true);
            main.style.opacity = 0;
            main.style.height = '80%';
            tr.replaceChild( main, oldEl);
            Velocity( main, { opacity: 1, height: '100%'}, 300);
            // Velocity( main, { }, 400);
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].addEventListener('click', showSlide);
        }

    };


})();
( function() {
    var goodsImg = document.querySelector('.card_img_wrapper');
    var work = false;
    if (goodsImg != null) {
        if (work === true) return;
        showImg();
        work = true;
    };
    document.addEventListener("DOMNodeInserted", showImg);
    function showImg() {
        if( goodsImg === null)  {
            work = false;
            return;
        };
        if (work === true) return;
        work = true;
        var img = document.querySelector('.card_img_wrapper img');
        var close;
        function makeBig() {
            goodsImg.classList.add('card_img_big');
            close = document.querySelector('.card_img_close');
            close.addEventListener('click', makeSmall);
        }
        function makeSmall() {
            goodsImg.classList.remove('card_img_big');
        }
        img.addEventListener('click', makeBig);
    }

})();