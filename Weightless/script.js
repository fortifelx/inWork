( function() {
    
    var site = document.querySelector('body');
    var menuButton = document.querySelector('.menu img');
    var closeMenu = document.querySelector('.close_menu');
    var menu = document.querySelector('.menu_list');
    
    menuButton.addEventListener('click', showMenu, false);
    closeMenu.addEventListener('click', hideMenu, false);
    menu.addEventListener('click', stopDefault, false);
    
    
    function showMenu() {
        Velocity(menuButton, {opacity: 0}, 400);
        Velocity(menu, {left: 0}, 1000);
    };
    
    function hideMenu() {
        Velocity(menuButton, {opacity: 1}, 2000);
        Velocity(menu, {left: -400}, 1000);
    };
    
    
    function stopDefault() {
        event.preventDefault();
        hideMenu();
        var el = event.target;
        var id = el.getAttribute('href');
        var target = document.querySelector(id);
        if(target) {Velocity( target, "scroll", {
            container: site,
            duration: 1500
        });
       }
        
    }
    
    
    
    
    
    
})();

( function() {
    var iWantWindow = document.querySelector('.i_want_window');
    var button = document.querySelector('#iwant');
    var closeWindow = document.querySelector('.close_window');
    
    button.addEventListener('click', showWindow, false);
    closeWindow.addEventListener('click', hideWindow, false);
    
    function showWindow() {
        Velocity(button, {opacity: 0}, 1000);
        iWantWindow.style.display = 'block';
        Velocity(iWantWindow, { opacity: 1}, 1000);
    }
    function hideWindow() {
        Velocity(button, {opacity: 1}, 1000);
        iWantWindow.style.display = 'none';
        Velocity(iWantWindow, { opacity: 0}, 1000);
    }
    
    
})();

( function() {
    var kyiv = document.querySelector('.map_kyiv_header');
    var dnipro = document.querySelector('.map_dnipro_header');
    var kyivText = document.querySelector('.map_kyiv_text');
    var dniproText = document.querySelector('.map_dnipro_text');
    
    kyiv.addEventListener('click', showKyiv, false);
    dnipro.addEventListener('click', showDnipro, false);
    
    function showKyiv() {
        kyiv.style.color = '#354242';
        dnipro.style.color = '#9aa0a0';
        Velocity(kyivText, { opacity: 1}, 1000);
        Velocity(dniproText, { opacity: 0}, 1000);
    }
     function showDnipro() {
        dnipro.style.color = '#354242';
        kyiv.style.color = '#9aa0a0';
        Velocity(dniproText, { opacity: 1}, 1000);
        Velocity(kyivText, { opacity: 0}, 1000);
    }
    
    
})();