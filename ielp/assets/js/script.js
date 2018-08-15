var scrollPosition = 0;
var body = document.body,
    html = document.documentElement;

var caseSlides = $('.case_slide');
var slideHeight = caseSlides.css('height');
(function($) {

    "use strict";

    var instance, proto;

    function UserScrollDisabler($container, options) {
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        // left: 37, up: 38, right: 39, down: 40
        this.opts = $.extend({
            handleKeys : true,
            scrollEventKeys : [32, 33, 34, 35, 36, 37, 38, 39, 40]
        }, options);

        this.$container = $container;
        this.$document = $(document);
        this.lockToScrollPos = [0, 0];

        this.disable();
    }

    proto = UserScrollDisabler.prototype;

    proto.disable = function() {
        var t = this;

        t.lockToScrollPos = [
            t.$container.scrollLeft(),
            t.$container.scrollTop()
        ];

        t.$container.on(
            "mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll",
            t._handleWheel
        );

        t.$container.on("scroll.disablescroll", function() {
            t._handleScrollbar.call(t);
        });

        if(t.opts.handleKeys) {
            t.$document.on("keydown.disablescroll", function(event) {
                t._handleKeydown.call(t, event);
            });
        }
    };

    proto.undo = function() {
        var t = this;
        t.$container.off(".disablescroll");
        if(t.opts.handleKeys) {
            t.$document.off(".disablescroll");
        }
    };

    proto._handleWheel = function(event) {
        event.preventDefault();
    };

    proto._handleScrollbar = function() {
        this.$container.scrollLeft(this.lockToScrollPos[0]);
        this.$container.scrollTop(this.lockToScrollPos[1]);
    };

    proto._handleKeydown = function(event) {
        for (var i = 0; i < this.opts.scrollEventKeys.length; i++) {
            if (event.keyCode === this.opts.scrollEventKeys[i]) {
                event.preventDefault();
                return;
            }
        }
    };


    // Plugin wrapper for object
    $.fn.disablescroll = function(method) {

        // If calling for the first time, instantiate the object and save
        // reference. The plugin can therefore only be instantiated once per
        // page. You can pass options object in through the method parameter.
        if( ! instance && (typeof method === "object" || ! method)) {
            instance = new UserScrollDisabler(this, method);
        }

        // Instance already created, and a method is being explicitly called,
        // e.g. .disablescroll('undo');
        else if(instance && instance[method]) {
            instance[method].call(instance);
        }

    };

    // Global access
    window.UserScrollDisabler = UserScrollDisabler;

})(jQuery);
makeScroll('.scroll_element', 1200);
var x = 0;
// var oldPos = $(window).scrollTop();
var oldPos = $(window).scrollTop();
var scrollStatus = false;
// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;

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
    // console.log(scrollPos);
    var distance;
    // console.log('new ' + scrollPos + '/' + 'old ' + oldPos);
    for (var i = nl.length; i--; positions.unshift($(nl[i]).offset().top)) ;
    // if(scrollPos < oldPos) {
    //     console.log('up');
    //     x--;
    //     distance = scrollPos - positions[x] + windowHeight;
    // }else
    //     if(scrollPos > oldPos) {
        console.log('down');
        distance = scrollPos - positions[x] - windowHeight;
        oldPos = scrollPos - distance;
        console.log('new ' + distance + '/' + 'old ' + oldPos);
        if(oldPos < distance) x--;
        if(oldPos === distance) x++;
        // if(distance < oldPos) x++;
        console.log(x);
        // if(oldPos){
        //
        // };
        // oldPos = scrollPos - distance;
    // }else if(scrollPos === oldPos){
    //     console.log('down');
    //     x++;
    //     distance = scrollPos - positions[x-1] + windowHeight;
    // };
    // console.log(scrollPos - (distance * delta));
   // distance = scrollPos - positions[x-1] + $(window).height();
    $('html, body').stop().animate({
        scrollTop: scrollPos - (distance * delta)
    }, time );
    // console.log('new ' + scrollPos + '/' + 'old ' + oldPos);
    setTimeout(function(){
        scrollStatus = false;
    }, time);
}




$('.case_arrows').css('height', slideHeight);

addDots();
makeMainSlider('.city_slide',
    '.nav_slide_img',
    '.nav_slide li',
    '.city_slide_image_wrapper',
    '.city_slide_image_viewer',
    '.city_slide_info',
    '.nav_slide_img_wrapper',
    '.nav_slide_img_viewer',
    600);

longSlider( '.case_slide','.case_viewer', '.case_arrow_l', '.case_arrow_r', '.case_nav_numbers', '.case_nav_dots span', 3, 600)



// F U N C T I O N S

function addDots(){

    var dotsWrapper = $('.case_nav_dots');
    var dotCount = Math.ceil(caseSlides.length/3);

    for(var i = 0; i < dotCount; i++ ){
        var dot = $('<span></span>');
        if(i === 0){
            dot.addClass('active_dot');
        }
        dotsWrapper.append(dot);
    }
    var length = $('<span></span>').text(dotCount);
    $('.case_nav_numbers').text('1/').append(length);
};
function makeMainSlider(slides, navImage, navItems, images, imagesViewer, texts, navImgWrapper, navImgViewer, time){
    var slides = $(slides);
    var navImage = $(navImage);
    var navImgWrapper = $(navImgWrapper);
    var navImgViewer = $(navImgViewer);
    var images = $(images);
    var imagesViewer = $(imagesViewer);
    var texts = $(texts);
    var menuItems = document.querySelectorAll(navItems);
    var items = [];
    for(var i = menuItems.length; i--; items.unshift(menuItems[i]));
    var currentSlide = slides[0];
    $(navItems).click(function(){
       var index = items.indexOf(this);
       if(slides[index] === undefined) return;

        $(currentSlide).css({ top: 'auto', bottom: 0 }).velocity({
            height: 0
        }, time);
        navImgWrapper.css({ top: 'auto', bottom: 0 }).velocity({
            height: 0
        }, time);

        setTimeout(function(){
            $(images[index]).css({ top: 0, bottom: 'auto' }); //врапер изображений
            navImgViewer.css({ top: 0, bottom: 'auto' }); //врапер изображений
            $(texts[index]).css({ top: 0, bottom: 'auto' }); // текст слайдов
            navImgWrapper.css({ top: 0, bottom: 'auto' }); // изображение навки
            navImage[0].src = $(imagesViewer[index]).find('img')[0].src;

            $(slides[index]).css({ top: 0, bottom: 'auto' }).velocity({
                height: '100vh'
            }, time);
            navImgWrapper.css({ top: 0, bottom: 'auto' }).velocity({
                height: '100vh'
            }, time);

            currentSlide = slides[index];

            setTimeout( function(){

                $(texts[index]).css({ top: 'auto', bottom: 0 });
                navImgWrapper.css({ top: 'auto', bottom: 0 });
                $(images[index]).css({ top: 'auto', bottom: 0 });
                navImgViewer.css({ top: 'auto', bottom: 0 });

            }, time);

        }, time);
    });


};
function makeScroll(elements, time) {

    var nl = $(elements);
    var navSlide = $('.nav_slide li');
    // var navMenu = $('.nav_wrapper');
    var positions = [];
    for (var i = nl.length; i--; positions.unshift($(nl[i]).offset().top)) ;
    var i = 0;
    var body = $("html, body");
    var status = true;
    //  body.animate({
    //     scrollTop: 0,
    // }, time);
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

    var previousScrollPosition = $(window).scrollTop() + $(window).height();
    $(window).scroll(function (e) {

        var currentScrollPosition = $(window).scrollTop() + $(window).height();
        if
        (currentScrollPosition > previousScrollPosition + 1 && status)
        {
            if (i === positions.length - 1) return;
            status = false;
            i++;
            // disableScroll();
            // if (i === 0) {
            //     showSlide(mainSlide, navMenu, $(window).height(), time*2);
            // }
            // if (i > 0) {
            //     hideSlide(mainSlide, navMenu, $(window).height(), time / 2);
            // }
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
                // showSlide(mainSlide, navMenu, $(window).height(), time*2);
                return;
            }
            status = false;
            i--;
            // if (i === 0) {
            //     showSlide(mainSlide, navMenu, $(window).height(), time*2);
            // }
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
function hideSlide(target, menu, size, time) {
    target.velocity({
        backgroundColor : 'rgba(33, 33, 33, 1)'
    }, time);
    menu.velocity({
        backgroundColor : 'rgba(33, 33, 33, 1)'
    }, time)
    return;
};
function showSlide(target, menu, size, time) {
    target.velocity({
        backgroundColor : 'rgba(33, 33, 33, 0.5)'
    }, time);
    menu.velocity({
        backgroundColor : 'rgba(33, 33, 33, 0)'
    }, time)
};
function longSlider(slide, viewerBlock, lArrow, rArrow, countBlock, dots, step, time){
    var slides = $(slide);
    var widthFix = parseInt(slides.css('margin-right'), 10);
    var width =  parseInt(slides.css('width'), 10);
    var viewer = $(viewerBlock);
    var lArrow = $(lArrow);
    var rArrow = $(rArrow);
    var countBlock = $(countBlock);
    var number = 0;
    var count = 0;
    var rClicks = 0;
    var dots = $(dots);
    var status = false;
    var dotCount = Math.ceil(slides.length/3);
    var fixSlides = step - slides.length%3
    for(var i = 0; i < fixSlides; i++){
        viewer.append($(slides[i]).clone());
    }
    slides = $(slide);
    var scrollSize = (0-width-widthFix)*step;
    rArrow.click(function(){
        if(status) return;
        status = true;
        number++;
        if(number === dotCount) number = 0;
        $('.active_dot').removeClass('active_dot');
        $(dots[number]).addClass('active_dot');
        var elem = $('<span></span>').text(dotCount);
        $('.case_nav_numbers').text( number+1 + '/').append(elem);
        if(count + 1 === dotCount){
            var block = document.querySelector(viewerBlock);
            for(var i =0; i < step; i++) {
                slides[i].remove();
                block.appendChild(slides[i]);
            }
            slides = $(slide);
            count = count - 1;
            viewer.css({
                marginLeft : scrollSize*count
            });
            count++;
            viewer.animate({
                marginLeft : scrollSize*count,
            }, time);
            setTimeout(function(){
                status = false;
            }, time);
            return;
        }
        count++;
        number = count;
        console.log(number);
        viewer.velocity({
            marginLeft : scrollSize*count,
        }, time);
        setTimeout(function(){
            status = false;
        }, time);
    });
    lArrow.click(function(){
        if(status) return;
        status = true;
        number--;
        if(number === -1) number = dotCount-1;
        $('.active_dot').removeClass('active_dot');
        $(dots[number]).addClass('active_dot');
        var elem = $('<span></span>').text(dotCount);
        $('.case_nav_numbers').text( number+1 + '/').append(elem);
        if(count  === 0){
            console.log('edge');
            var length = slides.length-1;
            var block = document.querySelector(viewerBlock);
            for(var i =0; i < step; i++) {
                slides[length-i].remove();
                block.insertBefore(slides[length - i], block.childNodes[0]);
            }
            slides = $(slide);
            viewer.css({
                marginLeft : scrollSize
            });
            viewer.animate({
                marginLeft : 0,
            }, time);
            setTimeout(function(){
                status = false;
            }, time);
            return;
        }
        count--;
        viewer.velocity({
            marginLeft : scrollSize*count,
        }, time);
        setTimeout(function(){
            status = false;
        }, time);
    });
};
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

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
var menuStatus = false;
function showMenu(target, button, time){
    $(target).toggleClass('nav_cities_wrapper_active');
    $(button).toggleClass('nav_menu_button_active');
    $('.nav_wrapper').toggleClass('nav_wrapper_active');
    if(!menuStatus){
        setTimeout(function(){
            $('.nav_cities_background').velocity({
                opacity: 1
            }, time);
            $('.nav_cities_list').animate({
                paddingTop: 0
            }, time*2);
            $('.nav_cities_viewer a').velocity({
                opacity: 1
            }, time*2)
        }, time/1.5);
        menuStatus = true;
    } else {
        $('.nav_cities_background').velocity({
            opacity: 0
        }, time/5);
        $('.nav_cities_list').animate({
            paddingTop: '25px'
        }, time/2);
        $('.nav_cities_viewer a').velocity({
            opacity: 0
        }, time/5)
        menuStatus = false;
    }
}
$('.nav_menu_button').click(function(){
   showMenu('.nav_cities_wrapper', this, 1200);
});
