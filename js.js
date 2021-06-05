$(document).ready(function() {
  $('.button1').mouseover(function () {
    $('.button_action1').addClass('sizer');
  });
  $('.button1').mouseout(function () {
    $('.button_action1').removeClass('sizer');
  });
  $('.button2').mouseover(function () {
    $('.button_action2').addClass('sizer');
  });
  $('.button2').mouseout(function () {
    $('.button_action2').removeClass('sizer');
  });

  $('.first_option').mouseover(function () {
    $('.first_option').css('background-color', '#7FDEFF');
  });
  $('.first_option').mouseout(function () {
    $('.first_option').css('background-color', 'white');
  });
  $('.second_option').mouseover(function () {
    $('.second_option').css('background-color', '#FFDD5B');
  });
  $('.second_option').mouseout(function () {
    $('.second_option').css('background-color', 'white');
  });
  $('.third_option').mouseover(function () {
    $('.third_option').css('background-color', '#FF5959');
  });
  $('.third_option').mouseout(function () {
    $('.third_option').css('background-color', 'white');
  });
  $('.fourth_option').mouseover(function () {
    $('.fourth_option').css('background-color', '#FF83BD');
  });
  $('.fourth_option').mouseout(function () {
    $('.fourth_option').css('background-color', 'white');
  });

  $('.block4').click(function () {
    'flex-grow':$(this).flex-grow() * 1.1
  });


  // $('.block4').click(function(){
  // $('.block4').animate({flex-grow: '+=2'});
  // });
});
