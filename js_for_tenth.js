$(document).ready(function() {
  $('.button-js3').click(function() {
    $('.main').css('filter', 'blur(1px)');
    $('.overlay3').fadeIn();
  });

  $('.closepopup-js-campaign').click(function() {
    $('.main').css('filter', 'none');
    $('.overlay').fadeOut();
    $('.overlay-dobavleno').fadeOut();
  });

  $('.button_footer').click(function() {
    $('.overlay').fadeOut();
    $('.overlay-dobavleno').fadeIn();
  });

  $('.plus').click(function() {
    $('.overlay-dobavleno').fadeIn();
  });

  // $(document).mouseup(function (e) {
  // 	var popup = $('.popup-js-campaign');
  // 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
  // 		$('.overlay-js-campaign').fadeOut();
  //     $('.main').css('filter', 'none');
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

  $('.plus, .button_footer').click(function() {
    var $number_of_items = $(".number_of_items");
    $number_of_items.val(parseInt($number_of_items.val()) + 1);
    $number_of_items.change();
  });
});
