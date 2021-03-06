( function(){
    var money = document.querySelector('.money_name');
    var moneyName = document.querySelectorAll('.money_name li');

    function showList() {
        money = document.querySelector('.money_name');
        if (money.offsetHeight < 48) {
            Velocity( money, { height : '48px'}, 600);
        }
    };
    function chooseMoney(ev) {
        var el = ev.target;
        moneyName = document.querySelectorAll('.money_name li');
        money = document.querySelector('.money_name');
        if(money.offsetHeight > 16) {
            Velocity(money, {height: '16px'}, 600);
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

(   function(){

    var menuItems = document.querySelectorAll('.category_list li');
    var subMenus = document.querySelectorAll('.sub_menu');
    var closeMenu = document.querySelectorAll('.close_sub_menu');
    var status = true;
    function showSubMenu(ev) {
        var el = this.querySelector('.sub_menu');
        closeSubMenu(ev);
        for (var i = 0; i < closeMenu.length; i++) {
            if(ev.target == closeMenu[i]) return;
        }
        if (el === null) return;
        el.style.display = 'block';
        Velocity(el, {'opacity': 1}, 300);
    };
    function closeSubMenu(ev) {
        var tr = ev.target;
        var cb = tr.querySelector('.close_sub_menu');
        var nowEl = tr.querySelector('.sub_menu');
        for (var i = 0; i < subMenus.length; i++) {
            if(subMenus[i] != nowEl || status === true) {
                status = false;
                subMenus[i].style.display = 'none';
                subMenus[i].style.opacity = '0';
            }
        }
        if (tr === menuItems[menuItems.length - 1] ) return;
        cb.addEventListener('click', function () {
            for (var i = 0; i < subMenus.length; i++) {
                subMenus[i].style.display = 'none';
                subMenus[i].style.opacity = '0';
            }
        }, false);
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
    document.addEventListener("DOMNodeInserted", showSlider);


function showSlider() {
        if( slider === null || work === true) {
            return;
        };
        work = true;
    slider = document.querySelector('.top_slider_wrapper');
    var slids = document.querySelectorAll('.top_slider_wrapper img');
    var slides = [];
    for(var i = 0; i < slids.length; i++) {
        slides.push(slids[i]);
        if (i > 0) {
            slids[i].style.marginLeft = slids[i].offsetWidth + 'px';
        }
    };
    var counter = 0;
    var roundsBox = document.querySelector('.circle_wrapper');
    var n = 0;
    for (var i = 0; i < slids.length; i++ ) {
        var round = document.createElement('div');
        round.value = i;
        roundsBox.appendChild(round);
    };
    var status = true;
    var rounds = document.querySelectorAll('.circle_wrapper div');

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
            goal.style.backgroundColor = 'white';

        if ( counter === rounds.length - 1) {
            console.log( n + " and " + counter);
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
            if(n < counter && counter !== rounds.length - 1) {
                var beforeEl = slides[counter].offsetWidth + "px";
                slides[n].style.marginLeft = - slides[n].offsetWidth + "px";
                Velocity( slides[n], { "margin-left" : 0 }, 1000);
                Velocity( slides[counter], {"margin-left" : beforeEl }, 1000);
            };
            if (n > counter && counter !== rounds.length - 1){
                    var beforeEl = - slides[counter].offsetWidth + "px";
                    slides[n].style.marginLeft = slides[n].offsetWidth + "px";
                    Velocity( slides[n], { "margin-left" : 0 }, 1000);
                    Velocity( slides[counter], {"margin-left" : beforeEl }, 1000);
            };
            counter = n;
            function changeStatus() {
                status = true;
            };
            setTimeout( changeStatus , 1000);

    };
    function demo() {
      if(status === true) {
          showSlide();
      }
    };

    roundsBox.addEventListener('click', showSlide);
    setInterval( demo, 7000);

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
        var img = document.querySelector('.card_main_img');
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
( function() {
    var diploms = document.querySelectorAll('.diploma_img_wrapper img');
    var close = document.querySelector('.diploma_close');
    var img = document.querySelector('.diploma_block img');
    var viewBlock = document.querySelector('.diploma_block');
    var work = false;
    var el;
    if (diploms != null) {
        if (work === true) return;
        showDiploma();
        work = true;
    };
    document.addEventListener("DOMNodeInserted", showDiploma);
    function showDiploma() {
        if( diploms === null)  {
            work = false;
            return;
        };
        if (work === true) return;
        work = true;
        function makeBig(ev) {
            el = ev.target;
            img.src = el.src;
            viewBlock.style.display = 'block';
            viewBlock.style.opacity = '0';
            Velocity( viewBlock, { opacity: '1'}, 300);
            close.addEventListener('click', makeSmall);
        }
        function makeSmall() {
            viewBlock.style.display = 'none';
            viewBlock.style.opacity = '0';
        }
        for (var i = 0; i < diploms.length; i++) {
            diploms[i].addEventListener('click', makeBig);
        }

    }

})();