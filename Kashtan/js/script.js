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
    // var viewer = document.getElementById('topSlider');
    var slider = document.querySelector('.top_slider_wrapper');
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

})();
// ( function(){
//     var status = false;
//
//     function showLink( item, target, time, width, minWidth) {
//         var el = document.querySelectorAll(item);
//         var n = document.querySelectorAll(target);
//         function showText() {
//             var tr = this.querySelector(target);
//             Velocity( tr, { width : width }, time);
//         }
//         function hideText () {
//             var tr = this.querySelector(target);
//             Velocity( tr, { width : minWidth }, time);
//         }
//         for (var i = 0; i < el.length; i++) {
//             el[i].addEventListener('mouseenter', showText);
//             el[i].addEventListener('mouseleave', hideText);
//         }
//
//     }
//     showLink('.new_good', '.new_goods_more', 600, '55px', '0');
//
//
// })();