( function(){
    var langName = document.querySelectorAll('.lang p');
    function chooseMoney(ev) {
        var el = ev.target;
        langName = document.querySelectorAll('.lang p');
        lang = document.querySelector('.lang');
        if( el === langName[0]) return;
        lang.removeChild(el);
        lang.insertBefore(el, langName[0]);
    }
    for( var i = 0; i < langName.length; i++) {
        langName[i].addEventListener('click', chooseMoney, false);
    };
})();