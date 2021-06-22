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

  $('.block').mouseover(function () {
    $(this).css( "flex-grow", "+=10" );
  });
  $('.block').mouseout(function () {
    $(this).css( "flex-grow", "-=10" );
  });

  // $('.block').mouseover(function () {
  //   setInterval(function () {
  //     $(this).css( "flex-grow", "+=1" );
  //   }, 1000);
  // });

  $('.accordion-item_trigger').click(function(){
    // setTimeout(function() {
    //   $(this).next('.accordion-item_content').find('button').css('opacity', '1');
    // }, 800);
    // setTimeout(function(){ alert("Hello"); }, 3000);
    $(this).next('.accordion-item_content').slideToggle(200);


    // $(this).next('.accordion-item_content').find('button').css('opacity', '1')
  });

  $('.accordion-item_trigger_first').mouseover(function () {
    $('.arrow_picture_first').css('opacity', '1');
  });
  $('.accordion-item_trigger_first').mouseout(function () {
    $('.arrow_picture_first').css('opacity', '0');
  });
  $('.accordion-item_trigger_first').click(function () {
    $('.arrow_picture_first').toggleClass('rotational_action');
  });

  $('.accordion-item_trigger_second').mouseover(function () {
    $('.arrow_picture_second').css('opacity', '1');
  });
  $('.accordion-item_trigger_second').mouseout(function () {
    $('.arrow_picture_second').css('opacity', '0');
  });
  $('.accordion-item_trigger_second').click(function () {
    $('.arrow_picture_second').toggleClass('rotational_action');
  });

  $('.accordion-item_trigger_third').mouseover(function () {
    $('.arrow_picture_third').css('opacity', '1');
  });
  $('.accordion-item_trigger_third').mouseout(function () {
    $('.arrow_picture_third').css('opacity', '0');
  });
  $('.accordion-item_trigger_third').click(function () {
    $('.arrow_picture_third').toggleClass('rotational_action');
  });

  $('.accordion-item_trigger_fourth').mouseover(function () {
    $('.arrow_picture_fourth').css('opacity', '1');
  });
  $('.accordion-item_trigger_fourth').mouseout(function () {
    $('.arrow_picture_fourth').css('opacity', '0');
  });
  $('.accordion-item_trigger_fourth').click(function () {
    $('.arrow_picture_fourth').toggleClass('rotational_action');
  });

  $('.accordion-item_trigger_fifth').mouseover(function () {
    $('.arrow_picture_fifth').css('opacity', '1');
  });
  $('.accordion-item_trigger_fifth').mouseout(function () {
    $('.arrow_picture_fifth').css('opacity', '0');
  });
  $('.accordion-item_trigger_fifth').click(function () {
    $('.arrow_picture_fifth').toggleClass('rotational_action');
  });

  $('.accordion-item_holder_first').mouseover(function () {
    $('.button6').css('opacity', '1');
  });
  $('.accordion-item_holder_first').mouseout(function () {
    $('.button6').css('opacity', '0');
  });
  $('.accordion-item_holder_second').mouseover(function () {
    $('.button7').css('opacity', '1');
  });
  $('.accordion-item_holder_second').mouseout(function () {
    $('.button7').css('opacity', '0');
  });
  $('.accordion-item_holder_third').mouseover(function () {
    $('.button8').css('opacity', '1');
  });
  $('.accordion-item_holder_third').mouseout(function () {
    $('.button8').css('opacity', '0');
  });
  $('.accordion-item_holder_fourth').mouseover(function () {
    $('.button9').css('opacity', '1');
  });
  $('.accordion-item_holder_fourth').mouseout(function () {
    $('.button9').css('opacity', '0');
  });
  $('.accordion-item_holder_fifth').mouseover(function () {
    $('.button10').css('opacity', '1');
  });
  $('.accordion-item_holder_fifth').mouseout(function () {
    $('.button10').css('opacity', '0');
  });
  $('.accordion-item_holder_sixth').mouseover(function () {
    $('.button11').css('opacity', '1');
  });
  $('.accordion-item_holder_sixth').mouseout(function () {
    $('.button11').css('opacity', '0');
  });
  $('.accordion-item_holder_seventh').mouseover(function () {
    $('.button12').css('opacity', '1');
  });
  $('.accordion-item_holder_seventh').mouseout(function () {
    $('.button12').css('opacity', '0');
  });

  $('.back_circle').click(function(){
    $(this).next('.options').slideToggle(200);
  });



  // $('.color_general').mouseover(function(){
  //   $(this).css('opacity', '1');
  // });
  // $('.color_general').mouseout(function(){
  //   $(this).css('opacity', '0');
  // });

});
