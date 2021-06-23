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
    $(this).next('.accordion-item_content').slideToggle(200);
  });

  // $('.accordion-item_trigger_first').click(function(){
  //   setTimeout(function(){
  //       $('.button1_part1').css('opacity', '1')
  //   }, 100);
  // })

  // $('.accordion-item_trigger').mouseover(function(){
  //   $('.arrow_picture').addClass('strelka_action');
  // });
  // $('.accordion-item_trigger').mouseout(function(){
  //   $('.arrow_picture').removeClass('strelka_action');
  // });
  // $('.accordion-item_trigger').click(function () {
  //   $('.arrow_picture').toggleClass('rotational_action');
  // });

  $('.accordion-item_trigger_first').mouseover(function () {
    $('.arrow_picture_first').addClass('strelka_action');
  });
  $('.accordion-item_trigger_first').mouseout(function () {
    $('.arrow_picture_first').removeClass('strelka_action');
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
  $('.button6').click(function () {
    $(this).css('opacity', '1');
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

  $('.button_anketa').click(function() {
    $(this).toggleClass('button_anketa_altering');
  });

  $('.button-js-campaign').click(function() {
    $(this).css('background-color', '#FF83BD');
    $(this).css('border', 'none');
    $(this).css('color', 'white')
    $('.main').css('filter', 'blur(1px)');
    $('.overlay-js-campaign').fadeIn();
  });

  $('.closepopup-js-campaign').click(function() {
    $('.button-js-campaign').css('background-color', 'white');
    $('.button-js-campaign').css('border', '4px solid black');
    $('.button-js-campaign').css('color', 'black')
    $('.main').css('filter', 'none');
    $('.overlay-js-campaign').fadeOut();
  });

  $(document).mouseup(function (e) {
  	var popup = $('.popup-js-campaign');
  	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
  		$('.overlay-js-campaign').fadeOut();
      $('.button-js-campaign').css('background-color', 'white');
      $('.button-js-campaign').css('border', '4px solid black');
      $('.button-js-campaign').css('color', 'black')
      $('.main').css('filter', 'none');
  	}
  });

  $('.button_sixth_page').mouseover(function() {
    $(this).css('background-color','#FF5959');
    $(this).css('color','white');
  })
  $('.button_sixth_page').mouseout(function() {
    $(this).css('background-color','white');
    $(this).css('color','black');
  })

  $('.block_seventh_page').click(function() {
    $(this).css('background-color', 'white')
  })

  var click = 0;
  $('.next_arrow').click(function () {
    click++;
    if(click === 1) {
      lusher();
  }
    if(click === 2) {
      location.href = "https://danilhautilus911.github.io/project_4m/eighth.html";
  }
  });

  function lusher() {
    $('.first_number, .first_sentence').css('display', 'none');
    $('.second_number, .second_sentence').css('display', 'block');
    $('.block1_seventh_page').css('background-color', '#7FDEFF');
    $('.block2_seventh_page').css('background-color', '#DF3A33');
    $('.block3_seventh_page').css('background-color', '#4BBDE4');
    $('.block4_seventh_page').css('background-color', '#F655A0');
    $('.block5_seventh_page').css('background-color', '#FFDD5B');
    $('.block6_seventh_page').css('background-color', '#C5C5C5');
    $('.block7_seventh_page').css('background-color', '#FF5959');
    $('.block8_seventh_page').css('background-color', '#777777');
  }

  $('.item_page12').mouseover(function () {
    $(this).css('background-color','#F24941')
  })

  $('.item_page12').mouseout(function () {
    $(this).css('background-color','white')
  })


// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
  $('.item1_page12').click(function () {
    $('.card1').css('opacity','1');
    $('.card2, .card3, .card4, .card5, .card6, .card7, .card8').css('opacity','0');
  })
  $('.item2_page12').click(function () {
    $('.card2').css('opacity','1');
    $('.card1, .card3, .card4, .card5, .card6, .card7, .card8').css('opacity','0');
  })
  $('.item3_page12').click(function () {
    $('.card3').css('opacity','1');
    $('.card1, .card7, .card4, .card5, .card6, .card2, .card8').css('opacity','0');
  })
  $('.item4_page12').click(function () {
    $('.card4').css('opacity','1');
    $('.card1, .card7, .card3, .card5, .card6, .card2, .card8').css('opacity','0');
  })
  $('.item5_page12').click(function () {
    $('.card5').css('opacity','1');
    $('.card1, .card7, .card3, .card4, .card6, .card2, .card8').css('opacity','0');
  })
  $('.item6_page12').click(function () {
    $('.card6').css('opacity','1');
    $('.card1, .card7, .card3, .card4, .card5, .card2, .card8').css('opacity','0');
  })
  $('.item7_page12').click(function () {
    $('.card7').css('opacity','1');
    $('.card1, .card3, .card4, .card5, .card6, .card2, .card8').css('opacity','0');
  })
// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


  $('.card').mouseover(function () {
    $('.lets_message').css('display','block');
  })
  $('.card').mouseout(function () {
    $('.lets_message').css('display','none');
  })

  $('.button1_twelth_page').click(function() {
    $(this).css('background-color', '#F24941');
    $(this).css('color', 'white')
    $('.main, .header').css('filter', 'blur(1px)');
    $('.overlay_twelth_page').fadeIn();
  });

  $('.closepopup_js_campaign_twelth_page').click(function() {
    $('.button1_twelth_page').css('background-color', 'white');
    $('.button1_twelth_page').css('color', 'black')
    $('.button2_twelth_page').css('background-color', 'white');
    $('.button2_twelth_page').css('color', 'black')
    $('.main, .header').css('filter', 'none');
    $('.overlay_twelth_page').fadeOut();
    $('.overlay2_twelth_page').fadeOut();
  });

  $('.button2_twelth_page').click(function() {
    $(this).css('background-color', '#F24941');
    $(this).css('color', 'white')
    $('.main, .header').css('filter', 'blur(1px)');
    $('.overlay_twelth_page').fadeOut();
    $('.overlay2_twelth_page').fadeIn();
  });

  $(document).mouseup(function (e) {
    var popup = $('.popup_js_twelth_page, popup2_js_twelth_page');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.overlay_twelth_page, .overlay2_twelth_page').fadeOut();
      $('.button1_twelth_page, .button2_twelth_page').css('background-color', 'white');
      $('.button1_twelth_page, .button2_twelth_page').css('color', 'black')
      $('.main, .header').css('filter', 'none');
    }
  });



  // $('.next_arrow').click(function() {
  //   $('.first_number, .first_sentence').css('display', 'none');
  //   $('.second_number, .second_sentence').css('display', 'block');
  //   $('.block1_seventh_page').css('background-color', '#7FDEFF');
  //   $('.block2_seventh_page').css('background-color', '#DF3A33');
  //   $('.block3_seventh_page').css('background-color', '#4BBDE4');
  //   $('.block4_seventh_page').css('background-color', '#F655A0');
  //   $('.block5_seventh_page').css('background-color', '#FFDD5B');
  //   $('.block6_seventh_page').css('background-color', '#C5C5C5');
  //   $('.block7_seventh_page').css('background-color', '#FF5959');
  //   $('.block8_seventh_page').css('background-color', '#777777');
  // })

// function changing_colors () {
//   if(document.getElementById('.block1_seventh_page, .block2_seventh_page, .block3_seventh_page, .block4_seventh_page, .block5_seventh_page, .block6_seventh_page, .block7_seventh_page, .block8_seventh_page').style.backgroundColor == "white") {
//   document.getElementById('.block1_seventh_page').style.backgroundColor = '#777777';
//   };
// }


  // $('.color_general').mouseover(function(){
  //   $(this).css('opacity', '1');
  // });
  // $('.color_general').mouseout(function(){
  //   $(this).css('opacity', '0');
  // });

});
