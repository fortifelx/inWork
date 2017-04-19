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
function changeTable() {
    var wrapper = document.querySelector('.price_wrapper');
    var headers = document.querySelectorAll('.price_table_header p');
    var price = document.querySelector('.site_price');
    var site = document.querySelector('.site_form');
    var sites = [ '<th></th><th>Basic</th><th>Standart</th><th>Premium</th>', '<th></th><th></th><th>Standart</th><th>Premium</th>',  '<th></th><th></th><th>Standart</th><th>Premium</th>'        
    ];
    var prices = [ '<th></th><th>600$</th><th>900$</th><th>1200$</th>', '<th></th><th></th><th>2300$</th><th>3000$</th>',  '<th></th><th></th><th>3000$</th><th>3900$</th>'        
    ];
    
    function activeHeader() {
        if(wrapper.offsetWidth < 935) return;
        var el = event.target;
        for(i = 0; i < headers.length; i++) {
            headers[i].style.opacity = '0.5';
            headers[i].style.borderBottom = '0';
        }
        el.style.opacity = '1';
        el.style.borderBottom = '3px solid #fff';
    }
    function changeText() {
        if(wrapper.offsetWidth < 935) return;
        var el = event.target;
        console.log(el);
        for(i = 0; i < headers.length; i++) {
            if(el == headers[i]) {
                price.innerHTML = prices[i];
                site.innerHTML = sites[i];
            }
        }
    }
    for(i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', activeHeader);
    }
    for(i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', changeText);
    }
};

        changeTable();
        
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
            console.log('test2');
            Velocity( el, {width: '0px'}, 300);
        }
        if (el.offsetWidth < 80) {
            console.log('test1');
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
    
    makeSlider('.slide_viewer', '.slider_wrapper', 'li', 600, 1, '.slide_subtext img');
    
    textSlider('.slide_text', '.slide_subtext img');
    
})();  
(function(){
    function makeSlider(sliderViewer,sliderName, slide, scrollTime, visibleElements, rightArrow, leftArrow ) {
        var viewer = document.querySelector(sliderViewer);
        var slider = document.querySelector(sliderName);
        var slides = slider.querySelectorAll(slide);
        var lt = viewer.querySelector(leftArrow);
        var gt = viewer.querySelector(rightArrow);
        var step = slides[0].offsetWidth;
        var status = 0;
        var counter = visibleElements;
        var correction = visibleElements;
        
        function scrollLeft() {
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
    makeSlider('.our_works_viewer', '.our_works_slider','.mockup_slide', 600, 1, '.works_right_arrow', '.works_left_arrow' );
})();  
