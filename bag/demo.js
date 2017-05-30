function showSlider() {
    if (slider === null || work === true) {
        return;
    }
    ;
    work = true;
    slider = document.querySelector('.top_slider_wrapper');
    var slids = document.querySelectorAll('.top_slider_wrapper img');
    var roundsBox = document.querySelector('.circle_wrapper');
    var n = 0;
    for (var i = 0; i < slids.length; i++) {
        var round = document.createElement('div');
        round.value = i;
        roundsBox.appendChild(round);
    }
    ;
    var status = true;
    var rounds = document.querySelectorAll('.circle_wrapper div')
    function showSlide(ev) {
        if (ev.target === roundsBox) return;
        for (var i = 0; i < rounds.length; i++) {
            rounds[i].style.backgroundColor = 'transparent';
        }
        var goal = ev.target;
        n = goal.value;
        goal.style.backgroundColor = 'white';
        var roundValue = -(goal.value * 740) + 'px';
        Velocity(slider, {'margin-left': roundValue}, 1000);
    };
    function demonstration(time) {
        rounds = document.querySelectorAll('.circle_wrapper div');
        if (n === slids.length) {
            n = 0;
        }
        ;
        var el = rounds[n];
        for (var i = 0; i < rounds.length; i++) {
            rounds[i].style.backgroundColor = 'transparent';
        }
        ;
        el.style.backgroundColor = 'white';
        var value = -(el.value * 740) + 'px';
        Velocity(slider, {'margin-left': value}, time);
        n++;
        if (status === false) return;
        status = false;
        setTimeout(function () {
            demonstration(time)
        }, 5000);
        status = true;
    };
    roundsBox.addEventListener('click', showSlide);
    demonstration(1000);
}/**
 * Created by Agrich on 31.05.2017.
 */
