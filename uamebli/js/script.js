// ( function () {
//     var hMenu = document.querySelector('.header_menu');
//     var list = document.querySelector(('.header_menu ul'));
//     var mHeight = list.offsetHeight;
//     list.style.height = 0;
//     var status = true;
//     function showMenu() {
//             if(status === true) {
//             Velocity(list, {'height' : mHeight}, 600);
//             status = false;
//             return;
//         }
//         if(status === false) {
//             Velocity(list, {'height' : 0}, 600);
//             status = true;
//         }
//     };
//     hMenu.addEventListener( 'click', showMenu, true);
// })();

( function () {
    var footer = document.querySelector('footer');
    var mAside = document.querySelector('aside');
    var showPoint = document.querySelector('.cat_wrapper');
    var unique = document.querySelector('.unique_item_wrapper');
    var asideHeight = mAside.offsetHeight;
    var status = true;
    mAside.style.opacity = 0;
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            return box.top + pageYOffset;
        }
        var cood = getCoords(showPoint);
        var ftUnique = getCoords(unique);
        if (scrolled > cood - 100) {
            if(status === false) return;
            status = false;
            Velocity( mAside, { 'opacity' : 1}, 600);
            setTimeout(function () {
                status = true;
            }, 600);
        }
        if (scrolled < cood - 150) {
            mAside.style.opacity = 0;
        }
        if (scrolled < ftUnique) {
            mAside.style.top = 14 + 'rem';
            // mAside.style.position = 'fixed';
        }
        if (scrolled > ftUnique) {
            var correction = scrolled - ftUnique;
            mAside.style.top = asideHeight/6 -correction + 'px';
            // mAside.style.position = 'absolute';
        }
    }

})();
// ( function () {
//     window.onscroll = function() {
//         var footer = document.querySelector('footer');
//         var aside = document.querySelector('aside');
//         var unique = document.querySelector('.unique_item_wrapper');
//         var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//         var asideHeight = aside.offsetHeight;
//         function getCoords(elem) {
//             var box = elem.getBoundingClientRect();
//             return box.top + pageYOffset;
//         }
//         var ftUnique = getCoords(unique);
//         if (scrolled < ftUnique) {
//             aside.style.top = 14 + 'rem';
//         }
//         if (scrolled > ftUnique) {
//             var correction = scrolled - ftUnique;
//             aside.style.top = -correction + + asideHeight/5 + 'px';
//         }
//     }
// })();





// (function(){
//     var slider = document.querySelector('.top_slider_viewer');
//     var work = false;
//     if (slider !== null) {
//         if (work === true) return;
//         showSlider();
//         work = true;
//     };
//     document.addEventListener("DOMNodeInserted", showSlider);
//     var slides = document.querySelectorAll('.slide');
//     var slNumb = slides.length;
//     var lt = document.querySelector('.nav_left');
//     var gt = document.querySelector('.nav_right');
//
//     function showSlider() {
//         if( slider === null || work === true) {
//             return;
//         };
//         var time = 1000;
//         work = true;
//         slider = document.querySelector('.top_slider_viewer');
//         slides = document.querySelectorAll('.slide');
//         lt = document.querySelector('.nav_left');
//         gt = document.querySelector('.nav_right');
//         var counter = 0;
//         var roundsBox = document.querySelector('.nav_rounds');
//         var n = 0;
//         for (var i = 0; i < slides.length; i++ ) {
//             var round = document.createElement('div');
//             round.value = i;
//             roundsBox.appendChild(round);
//         };
//         var status = true;
//         var rounds = document.querySelectorAll('.nav_rounds div');
//
//         rounds[0].style.backgroundColor = 'rgb(206, 143, 90)';
//         slides[0].style.zIndex = '2';
//         for (var i = 1; i < slides.length; i++) {
//             slides[i].style.opacity = '0';
//             slides[i].style.zIndex = '0';
//         }
//         function showSlide(ev) {
//             if (status === false) return;
//             status = false;
//
//             for (var i = 0; i < rounds.length; i++) {
//                 rounds[i].style.backgroundColor = 'transparent';
//             };
//             var goal;
//             if (ev === undefined && counter < rounds.length) {
//                 goal = rounds[counter + 1];
//             }
//             if (ev === undefined && counter === rounds.length - 1) {
//                 goal = rounds[0];
//             }
//             if (ev) {
//                 goal = ev.target;
//                 if (ev.target === roundsBox) {
//                     goal = rounds[n];
//                 };
//                 if (ev.target === gt && counter === rounds.length - 1) {
//                     goal = rounds[0];
//                 }
//                 if (ev.target === gt && counter !== rounds.length - 1) {
//                     goal = rounds[counter + 1];
//                 }
//                 if (ev.target === lt && counter === 0) {
//                     goal = rounds[rounds.length - 1];
//                 }
//                 if (ev.target === lt && counter !==0) {
//                     goal = rounds[counter - 1];
//                 }
//             }
//             n = goal.value;
//             goal.style.backgroundColor = "rgb(206, 143, 90)";
//             if ( counter === slNumb - 1) {
//                 if (n > 0) {
//                     slides[counter].style.zIndex = '1';
//                     slides[n].style.zIndex = '2';
//                     Velocity( slides[n], { "opacity" : '1' }, time);
//                     Velocity( slides[counter], {"opacity" : '0' }, time);
//                     setTimeout(function () {
//                         slides[counter].style.zIndex = '0';
//                     }, 1000);
//
//                 } else {
//                     slides[counter].style.zIndex = '1';
//                     slides[0].style.zIndex = '2';
//                     Velocity( slides[0], { "opacity" : '1' }, time);
//                     Velocity( slides[counter], {"opacity" : '0' }, time);
//                     setTimeout(function () {
//                         slides[counter].style.zIndex = '0';
//                     }, 1000);
//                     n = 0;
//                 }
//             }
//             if(n < counter && counter !== slNumb - 1) {
//                 slides[counter].style.zIndex = '1';
//                 slides[n].style.zIndex = '2';
//                 Velocity( slides[n], { "opacity" : '1' }, time);
//                 Velocity( slides[counter], {"opacity" : '0' }, time);
//                 setTimeout(function () {
//                     slides[counter].style.zIndex = '0';
//                 }, 1000);
//             };
//             if (n > counter && counter !== slNumb - 1){
//                 slides[counter].style.zIndex = '1';
//                 slides[n].style.zIndex = '2';
//                 Velocity( slides[n], { "opacity" : '1' }, time);
//                 Velocity( slides[counter], {"opacity" : '0' }, time);
//                 setTimeout(function () {
//                     slides[counter].style.zIndex = '0';
//                 }, 1000);
//             };
//             counter = n;
//             setTimeout( function() {
//                     status = true;
//                 } , time);
//
//         };
//         function demo() {
//             if(status === true) {
//                 showSlide();
//             }
//         };
//
//         roundsBox.addEventListener('click', showSlide);
//         lt.addEventListener('click', showSlide);
//         gt.addEventListener('click', showSlide);
//         setInterval( demo, 6000);
//
//     };
// })();

