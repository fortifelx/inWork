(function(){
$('.show_call').click(function(){
    console.log('here');
    if($('.show_numbers')[0] == undefined) {
        $('.main_menu_numbers').addClass('show_numbers').fadeIn(400);
    } else {
        $('.main_menu_numbers').removeClass('show_numbers').fadeOut(400);
    }
})
})();
(function(){
    var count = document.querySelector('.advantage_count');
    if(count == undefined) return;
    var length = $('.advantage_slide').length;
    var i = 0;

    count.innerHTML = '<span>1/</span>' + length;
   $('.advantage_right_arrow').click(function(){
      i++;
      if(i === length) i = 0;
      $('.advantage_slide').removeClass('advantage_slide_active');
      $($('.advantage_slide')[i]).addClass('advantage_slide_active');
      var x = i + 1;
      count.innerHTML = '<span>' + x +'/</span>' + length;
   });
   $('.advantage_left_arrow').click(function(){
      i--;
      if(i === -1) i = length - 1;
      $('.advantage_slide').removeClass('advantage_slide_active');
      $($('.advantage_slide')[i]).addClass('advantage_slide_active');
   });
})();
(function(){
    console.log('here');
    $('.start_block_header').click(function(){
        console.log('here');
        $(this).toggleClass('start_active_header').next().toggleClass('hover_course_wrapper');
    })
})();