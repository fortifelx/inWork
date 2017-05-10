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
        for (var i = 0; i < subMenus.length; i++) {
            subMenus[i].style.display = 'none';
        }
    };
    function clickDog(el, func) {
        for (var i = 0; i < el.length; i++) {
            el[i].addEventListener('click', func, false);
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


    var infoHeaders = document.querySelectorAll('.calc_name');
    var work = false;
    if (calculators != null) {
        if (work === true) return;
        makeCalc();
        work = true;
    };
    document.addEventListener("DOMNodeInserted", makeCalc);

    function makeInfo() {
        if( calculators === null || work === true) {
            work = false;
            return;
        };
        work = true;

        var calc = document.querySelectorAll('.calc_name');
        var lastTr;

        function showInfo(ev) {
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