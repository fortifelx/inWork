
var caseSlides = $('.case_slide');
var slideHeight = caseSlides.css('height');
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
    console.log('start slider');
    var slides = $(slides);
    var navImage = $(navImage);
    var navImgWrapper = $(navImgWrapper);
    var navImgViewer = $(navImgViewer);
    var images = $(images);
    var imagesViewer = $(imagesViewer);
    console.log(imagesViewer);
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
            navImgWrapper.css({ top: '-80px', bottom: 'auto' }).velocity({
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
