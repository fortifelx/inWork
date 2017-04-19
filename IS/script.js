    ( function() {
    
    var site = document.querySelector('body');
    var consulButtons = document.querySelectorAll('.consul_button');
        for (i = 0; i < consulButtons.length; i++) {
            consulButtons[i].addEventListener('click', goToConsulWindow, false);
        }
    function goToConsulWindow() {
        event.preventDefault();
        var el = event.target;
        var id = el.getAttribute('href');
        var target = document.querySelector(id);
        if(target) {Velocity( target, "scroll", {
            container: site,
            duration: 1500
        });
       }
    }
        
        var lastEl;
function showPrice() {
    var price = document.querySelectorAll('.price_menu'); //42px
    function showButton() {
        el = event.target;
        if(lastEl == el) {
            Velocity( el, {height: '42px'}, 300);
            lastEl = undefined;
            return;
        }
        if(lastEl) {
        Velocity( lastEl, {height: '42px'}, 300);
        }
        lastEl = el;
        Velocity( el, {height: '100px'}, 300);
    }
    for(i = 0; i < price.length; i++) {
        price[i].addEventListener('click', showButton);
    }
}  
        showPrice();
        
function showEmail() {
    var emails = document.querySelectorAll('.teammate_email');
    function showText() {
        var el = event.target;
        if (el.offsetWidth > 50) {
            Velocity( el, {width: '0px'}, 300);
        }
        if (el.offsetWidth < 80) {
            Velocity(el, {width: '145px'}, 300);
        }
    }
    for(var i = 0; i < emails.length; i++) {
        emails[i].addEventListener('click', showText);
    }

};
        showEmail();
        
        
})();

(function(){
    function makeSlider(sliderViewer,sliderName, slide, scrollTime, visibleElements, rightArrow, leftArrow ) {
        var viewer = document.querySelector(sliderViewer);
        var slider = document.querySelector(sliderName);
        var slides = slider.querySelectorAll(slide);
        var lt = document.querySelector(leftArrow);
        var gt = document.querySelector(rightArrow);
        var step = slides[0].offsetWidth;
        var status = 0;
        var counter = visibleElements;
        var correction = visibleElements;
        var number =document.querySelector('.slide_number b');
        
        function scrollLeft() {
            var edge = slides.length*step - correction*step;
            if (counter <= correction) {
                counter = slides.length;
                Velocity( slider, {"margin-left": -edge}, scrollTime);
                status = -edge;
                number.innerHTML = '0' + counter;
                Velocity( gt, { rotateZ: '0deg'}, 600);
                return;
            };
            Velocity( slider, {'margin-left': status + step}, scrollTime);
            counter--;
            status = status + step;
            Velocity( gt, { rotateZ: '-180deg'}, 600);
        };
        
        function scrollRight() {
            var edge = slides.length*step;
            if (counter >= slides.length) {
                counter = correction;
                Velocity( slider, {"margin-left": 0}, scrollTime);
                status = 0;
                number.innerHTML = '0' + counter;
                Velocity( gt, { rotateZ: '0deg'}, 600);
                return;
            };
            Velocity( slider, {'margin-left': status - step}, scrollTime);
            counter++;
            status = status - step;
            number.innerHTML = '0' + counter;
            Velocity( gt, { rotateZ: '-180deg'}, 600);
        };
        
   // lt.addEventListener('click', scrollLeft);
    gt.addEventListener('click', scrollRight);
    
    };
    
    function textSlider(textBlock, rightArrow ) {
        var gt = document.querySelector(rightArrow);
        var text = document.querySelectorAll(textBlock);
        var status = 0;
        
        function changeText() {
            status++;
            for(i = 0; i < text.length; i++) {
                    Velocity( text[i], {opacity: '0'}, 300);
            }
            if(status >= text.length) {
                        status = 0;
               
            }
            Velocity( text[status], {opacity: '1'}, 300);
        }
        gt.addEventListener('click', changeText);
    };
    
    makeSlider('.slide_viewer', '.slider_wrapper', 'li', 600, 1, '.who_we_arrow');
    
    textSlider('.slide_text', '.who_we_arrow');
    
})();  
(function(){
    function makeSlider(sliderViewer,sliderName, slide, scrollTime, visibleElements, rightArrow, leftArrow ) {
        var viewer = document.querySelector(sliderViewer);
        var slider = document.querySelector(sliderName);
        var slides = slider.querySelectorAll(slide);
        var lt = document.querySelector(leftArrow);
        var gt = document.querySelector(rightArrow);
        
        var status = 0;
        var counter = visibleElements;
        var correction = visibleElements;
        function watchDog() {
            function backToNull() {
                slider.style.marginLeft = 0;
                status = 0;
                counter = visibleElements;
                    }
            window.addEventListener('resize' , backToNull);
        }
        watchDog();
        function scrollLeft() {
            var step = slider.querySelectorAll(slide)[0].offsetWidth;
            var edge = slides.length*step - correction*step;
            if (counter <= correction) {
                counter = slides.length;
                Velocity( slider, {"margin-left": -edge}, scrollTime*3);
                status = -edge;
                return;
            };
            Velocity( slider, {'margin-left': status + step}, scrollTime);
            counter--;
            status = status + step;
        };
        
        function scrollRight() {
            var step = slider.querySelectorAll(slide)[0].offsetWidth;
            var edge = slides.length*step;
            if (counter >= slides.length) {
                counter = correction;
                Velocity( slider, {"margin-left": 0}, scrollTime*3);
                status = 0;
                return;
            };
            Velocity( slider, {'margin-left': status - step}, scrollTime);
            counter++;
            status = status - step;
        };
        
    lt.addEventListener('click', scrollLeft);
    gt.addEventListener('click', scrollRight);
    
    };
    makeSlider('.recomend_viewer', '.recomend_slider_wrapper', '.recomend_slide', 600, 1, '.recomend_right_arrow', '.recomend_left_arrow');
    makeSlider('.our_works_viewer', '.our_works_slider', '.mockup_slide', 600, 1, '.works_right_arrow', '.works_left_arrow' );
    makeSlider('.team_viewer', '.team_wrapper', '.teammate', 600, 1, '.team_left_arrow', '.team_right_arrow');
})();  
