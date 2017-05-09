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

( function() {

    var slides = document.querySelectorAll('.top_slider_wrapper img');
    var circls = document.querySelector('.circle_wrapper');
    for (var i = 0; i < slides.length; i++) {
        var div = document.createElement('div');
        circls.appendChild(div);
        slides[i].style.opacity = 0;
    }
    slides[0].style.opacity = 1;
    var circl = document.querySelectorAll('.circle_wrapper div');

    var position = 0;
    var prevPosition = slides.length - 1;

    function makeSlider() {
        console.log('start');
        Velocity( slides[position], { opacity: 1}, 1000);
        circl[position].style.backgroundColor = 'white';
        if (position == slides.length - 1) {
            position = 0;
            prevPosition = slides.length - 1;
        }
        circl[prevPosition].style.backgroundColor = 'transparent';
        Velocity( slides[prevPosition], {opacity: 1}, 500);
        prevPosition = position;
        position = position+1;
       // console.log('end');
    }

    setInterval(makeSlider, 2000);







})();