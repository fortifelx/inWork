var keys = {37: 1, 38: 1, 39: 1, 40: 1};
var x = 0;
var oldPos = $(window).scrollTop();
var scrollStatus = false;
makeScroll('.scroll_element', 1200);
var previousScrollPosition = $(window).scrollTop() + $(window).height();
var positions = [];
var status = false;
var i = 0;
var time = 1200;


function makeScroll(elements, time) {

    var nl = $(elements);
    var navSlide = $('.nav_slide li');
    var positions = [];
    for (var i = nl.length; i--; positions.unshift($(nl[i]).offset().top)) ;
    var i = 0;
    var body = $("html, body");
    var status = true;
     body.animate({
        scrollTop: 0,
    }, time);
    setTimeout(function () {
        status = true;
        previousScrollPosition = $(window).scrollTop() + $(window).height();
    }, time);
    navSlide.click(function(){
        status = false;
        $("html, body").animate({
            scrollTop: 0,
        }, 600);
        setTimeout(function () {
            status = true;
            previousScrollPosition = $(window).scrollTop() + $(window).height();
        }, time);
        i = 0;
        console.log('click');
    });

    var previousScrollPosition = $(window).scrollTop() + $(window).height();
    $(window).scroll(function (e) {
        preventDefault(e);
        var currentScrollPosition = $(window).scrollTop() + $(window).height();
        if
        (currentScrollPosition > previousScrollPosition + 1 && status)
        {
            if (i === positions.length - 1) return;
            status = false;
            i++;
            body.stop().animate({
                scrollTop: positions[i],
            }, time);
            setTimeout(function () {
                status = true;
            }, time);

        } else
        if(currentScrollPosition < previousScrollPosition && status)
        {
            if (i === 0) {
                return;
            }
            status = false;
            i--;
            body.stop().animate({
                scrollTop: positions[i],
            }, time);
            setTimeout(function () {
                status = true;
            }, time);
        }
        previousScrollPosition = currentScrollPosition;
    });
};
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
function disableScroll() {
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
function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}
function handle(delta) {
    if(scrollStatus) return;
    scrollStatus = true;
    var time = 1000;
    var positions = [];
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    var nl = $('.scroll_element');
    var distance;
    for (var i = nl.length; i--; positions.unshift($(nl[i]).offset().top)) ;
    console.log('down');
    distance = scrollPos - positions[x] - windowHeight;
    oldPos = scrollPos - distance;
    console.log('new ' + distance + '/' + 'old ' + oldPos);
    if(oldPos < distance) x--;
    if(oldPos === distance) x++;
    console.log(x);
    $('html, body').stop().animate({
        scrollTop: scrollPos - (distance * delta)
    }, time );
    setTimeout(function(){
        scrollStatus = false;
    }, time);
}
function smoothScroll(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;
    var nl = $('.scroll_element');
    var navSlide = $('.nav_slide li');
    for (var y = nl.length; y--; positions.unshift($(nl[y]).offset().top)) ;
    var body = $("html, body");
    navSlide.click(function(){
        status = false;
        $("html, body").animate({
            scrollTop: 0,
        }, 600);
        setTimeout(function () {
            status = true;
            previousScrollPosition = 0;
        }, time);
        i = 0;
        console.log('click');
    });

    previousScrollPosition = $(window).scrollTop();


    // alternativeScroll(body);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}
function alternativeScroll(body){
    var currentScrollPosition = $(window).scrollTop() + $(window).height();
    console.log(status + '/' + i);
        if(status){
            console.log(currentScrollPosition + '/' + previousScrollPosition + '/' + status);
            if (i === positions.length - 1) return;
            status = false;
            i++;
            console.log('down');
            body.animate({
                scrollTop: positions[i],
            }, time);
            setTimeout(function () {
                status = true;
            }, time);

        } else if(currentScrollPosition < previousScrollPosition && status){
            if (i === 0) {
                return;
            }
            console.log('up');
            status = false;
            i--;
            body.animate({
                scrollTop: positions[i],
            }, time);
            setTimeout(function () {
                status = true;
            }, time);
        }
        previousScrollPosition = currentScrollPosition;
}
