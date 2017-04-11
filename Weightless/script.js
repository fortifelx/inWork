( function() {
    
    var menuButton = document.querySelector('.menu img');
    var closeMenu = document.querySelector('.close_menu');
    var menu = document.querySelector('.menu_list');
    console.log('hi@!');
    console.log(menuButton);
    
    menuButton.addEventListener('click', showMenu, false);
    closeMenu.addEventListener('click', hideMenu, false);
    
    function showMenu() {
        console.log('h e r e ! ! !');
        Velocity(menuButton, {opacity: 0}, 400);
        Velocity(menu, {left: 0}, 1000);
        console.log('privet');
    };
    
    function hideMenu() {
        Velocity(menuButton, {opacity: 1}, 2000);
        Velocity(menu, {left: -400}, 1000);
    };
    
    
    
    
    
})();