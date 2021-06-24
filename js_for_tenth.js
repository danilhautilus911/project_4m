$(document).ready(function() {
  if (jQuery(window).width() > 1023) {
    $('.button-js3').click(function() {
      $('.main, .header').css('filter', 'blur(1px)');
      $('.overlay3').fadeIn();
    });

    $('.button-js1').click(function() {
      $('.main, .header').css('filter', 'blur(1px)');
      $('.overlay1').fadeIn();
    });

    $('.button-js2').click(function() {
      $('.main, .header').css('filter', 'blur(1px)');
      $('.overlay2').fadeIn();
    });

    $('.button-js4').click(function() {
      $('.main, .header').css('filter', 'blur(1px)');
      $('.overlay4').fadeIn();
    });

    $('.button-js5').click(function() {
      $('.main, .header').css('filter', 'blur(1px)');
      $('.overlay5').fadeIn();
    });

    $('.button-js6').click(function() {
      $('.main, .header').css('filter', 'blur(1px)');
      $('.overlay6').fadeIn();
    });


    $('.button_footer').click(function() {
      $('.overlay').fadeOut();
      $('.overlay-dobavleno').fadeIn();
      $('.main, .header').css('filter', 'blur(1px)');
    });

    $('.button-js3').click(function() {
      $('.main, .header').css('filter', 'blur(1px)');
      $('.overlay3').fadeIn();
    });
  }

  $('.plus').click(function() {
    $('.overlay-dobavleno').fadeIn();
    $('.main, .header').css('filter', 'blur(1px)');
  });

  $(document).mouseup(function (e) {
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.overlay').fadeOut();
      $('.button-js-campaign').css('background-color', 'white');
      $('.button-js-campaign').css('border', '4px solid black');
      $('.button-js-campaign').css('color', 'black')

      $('.main').css('filter', 'none');
    }
  });


  // $(document).mouseup(function (e) {
  // 	var popup = $('.popup');
  // 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
  // 		$('.overlay').fadeOut();
  //     $('.main, .header').css('filter', 'none');
  // 	}
  // });

  // $('.image_bloknote1').mouseover(function() {
  //   $('this').css('display','none');
  //   $('.image_bloknote2').css('display','block');
  // });
  // $('.image_bloknote1').mouseout(function() {
  //   $('this').css('opacity','1');
  //   $('.image_bloknote2').css('display','none');
  // });

  // $('.picture1').mclick(function() {
  //   $('this').addClass('.picture1_action');
  // });
  // $('.picture1').click(function() {
  //   $('this').removeClass('.picture1_action');
  // });
  $('.background_rectangle2_popup1').click(function () {
    $('.image1_popup1').css('opacity','1');
    $('.image2_popup1').css('opacity','0');
    $('.image3_popup1').css('opacity','0');
  })
  $('.background_rectangle3_popup1').click(function () {
    $('.image1_popup1').css('opacity','0');
    $('.image2_popup1').css('opacity','1');
    $('.image3_popup1').css('opacity','0');
  })
  $('.background_rectangle4_popup1').click(function () {
    $('.image1_popup1').css('opacity','0');
    $('.image2_popup1').css('opacity','0');
    $('.image3_popup1').css('opacity','1');
  })

  $('.background_rectangle2_popup2').click(function () {
    $('.image1_popup2').css('opacity','1');
    $('.image3_popup2').css('opacity','0');
    $('.image4_popup2').css('opacity','0');
    $('.image5_popup2').css('opacity','0');
  })
  $('.background_rectangle3_popup2').click(function () {
    $('.image1_popup2').css('opacity','0');
    $('.image3_popup2').css('opacity','1');
    $('.image4_popup2').css('opacity','0');
    $('.image5_popup2').css('opacity','0');
  })
  $('.background_rectangle4_popup2').click(function () {
    $('.image1_popup2').css('opacity','0');
    $('.image3_popup2').css('opacity','0');
    $('.image4_popup2').css('opacity','1');
    $('.image5_popup2').css('opacity','0');
  })
  $('.background_rectangle5_popup2').click(function () {
    $('.image1_popup2').css('opacity','0');
    $('.image3_popup2').css('opacity','0');
    $('.image4_popup2').css('opacity','0');
    $('.image5_popup2').css('opacity','1');
  })

  $('.label2_popup3').click(function(){
    $('.text1_popup3').css('opacity','0');
    $('.text2_popup3').css('opacity','1');
    $('.image1_popup3').css('opacity','0');
    $('.image2_popup3').css('opacity','1');
  });

  $('.label1_popup3').click(function(){
    $('.text2_popup3').css('opacity','0');
    $('.text1_popup3').css('opacity','1');
    $('.image1_popup3').css('opacity','1');
    $('.image2_popup3').css('opacity','0');
  });

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  $('.label1_popup6').click(function(){
    $('.text1_popup6, .image1_popup6').css('opacity','1');
    $('.text3_popup6, .text2_popup6, .text4_popup6').css('opacity','0');
    $('.image3_popup6, .image2_popup6, .image4_popup6').css('opacity','0');
  });

  $('.label2_popup6').click(function(){
    $('.text2_popup6, .image2_popup6').css('opacity','1');
    $('.text1_popup6, .text3_popup6, .text4_popup6').css('opacity','0');
    $('.image3_popup6, .image1_popup6, .image4_popup6').css('opacity','0');
  });

  $('.label3_popup6').click(function(){
    $('.text3_popup6, .image3_popup6').css('opacity','1');
    $('.text1_popup6, .text2_popup6, .text4_popup6').css('opacity','0');
    $('.image2_popup6, .image1_popup6, .image4_popup6').css('opacity','0');
  });

  $('.label4_popup6').click(function(){
    $('.text4_popup6, .image4_popup6').css('opacity','1');
    $('.text1_popup6, .text2_popup6, .text3_popup6').css('opacity','0');
    $('.image1_popup6, .image2_popup6, .image3_popup6').css('opacity','0');
  });
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  $('.plus, .button_footer').click(function() {
    var $number_of_items = $(".number_of_items");
    $number_of_items.val(parseInt($number_of_items.val()) + 1);
    $number_of_items.change();
  });
});
