
var caseSlides = $('.case_slide');
var slideHeight = caseSlides.css('height');
$('.case_arrows').css('height', slideHeight);
addDots();


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

