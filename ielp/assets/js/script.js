var body = document.body,
    html = document.documentElement;


var menuStatus = false;
var navCities = $('.nav_cities_background');
var navCityPrev = navCities[0];
var langStatus = false;
var caseSlides = $('.case_slide');




$('.nav_menu_button').click(function(){
    showMenu('.nav_cities_wrapper', this, 900);
});

$('.nav_cities_list a').mouseover(function(){
    var list = $('.nav_cities_list a');
    var i = list.index(this);
    var target = $('.nav_cities_background');
    if(navCityPrev == target[i]) return;
    target.css({
        zIndex : -1,
        display: 'none'
    });
    $(navCityPrev).css({
       display: 'block'
    });

    $(target[i]).css({
        display: 'block',
        zIndex: 0,
        opacity: 0
    }).animate({
        opacity: 1
    }, 800);
    navCityPrev = target[i];

});
changeCitiesSize('.nav_cities_list a');
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

longSlider( '.case_slide',
    '.case_viewer',
    '.case_arrow_l',
    '.case_arrow_r',
    '.case_nav_numbers',
    '.case_nav_dots span',
    3, 600)
showLang('.nav_lang', 800);


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
       if(slides[index] === undefined || slides[index] === currentSlide) return;
       console.log(slides[index] + '/' + currentSlide);

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
            navImage[0].src = $(imagesViewer[index]).find('.city_slide_image')[0].src;
            // $('.nav_cities_background')[0].src = $(imagesViewer[index]).find('.city_slide_image')[0].src;

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
    var widthFix = parseFloat(slides.css('margin-right'), 10);
    var width =  parseFloat(slides.css('width'), 10);
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
function changeCitiesSize(cities){
    result = ($(window).height() - 100)/$(cities).length/2.1;
    $(cities).css({
        fontSize : result
    })
}
function showLang(lang, time){
    var lang = $(lang);
    lang.mouseenter(function(){
        if(langStatus) return;
       lang.find('li').animate({
           right: 0,
           opacity: 1
       }, time);
        setTimeout(function(){
        },time);
    });
    lang.mouseleave(function(){
        var li = lang.find('li');
       $(li[0]).animate({
           right: -76,
           opacity: 0
       }, time);
       $(li[1]).animate({
           right: -38,
           opacity: 0
       }, time);
        setTimeout(function(){
        },time);
    });

}
var videoStatus = true;
$('.play_video').click(function(){
    var target = $('.video_player');
    var frame = target.find('iframe');
    frame.css({
        opacity: 0
    });
    var src = $(this).parent().find('iframe')[0].src;
    target.toggleClass('video_player_active');
    if(videoStatus) {
        frame[0].src = src;
        console.log('change');
        setTimeout(function(){
            frame.animate({
                opacity: 1
            }, 600);
        },1000);
    } else {
        frame.animate({
            opacity: 0
        }, 300);
    }
    videoStatus = !videoStatus;
    console.log(src);
});
