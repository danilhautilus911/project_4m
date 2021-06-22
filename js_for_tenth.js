$(document).ready(function() {
  $('.button-js-campaign').click(function() {
    $('.main').css('filter', 'blur(1px)');
    $('.overlay-js-campaign3').fadeIn();
  });

  $('.closepopup-js-campaign').click(function() {
    $('.main').css('filter', 'none');
    $('.overlay-js-campaign3').fadeOut();
    $('.overlay-js-campaign-dobavleno').fadeOut();
  });

  $('.button_footer').click(function() {
    $('.overlay-js-campaign3').fadeOut();
    $('.overlay-js-campaign-dobavleno').fadeIn();
  });

  $('.plus').click(function() {
    $('.overlay-js-campaign-dobavleno').fadeIn();
  });

  // $(document).mouseup(function (e) {
  // 	var popup = $('.popup-js-campaign');
  // 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
  // 		$('.overlay-js-campaign').fadeOut();
  //     $('.main').css('filter', 'none');
  // 	}
  // });

  $('.image_bloknote1').mouseover(function() {
    $('this').css('display','none');
    $('.image_bloknote2').css('display','block');
  });
  $('.image_bloknote1').mouseout(function() {
    $('this').css('opacity','1');
    $('.image_bloknote2').css('display','none');
  });

    $('.image_khiga1').mouseover(function() {
      $('.image_khiga2').css('display','block');
    });
    $('.image_khiga1').mouseout(function() {
      $('this').css('opacity','1');
      $('.image_khiga2').css('display','none');
    });

  $('.label2').click(function(){
    $('.text1').css('opacity','0');
    $('.text2').css('opacity','1');
    $('.image1').css('opacity','0');
    $('.image2').css('opacity','1');
  });

  $('.label1').click(function(){
    $('.text2').css('opacity','0');
    $('.text1').css('opacity','1');
    $('.image1').css('opacity','1');
    $('.image2').css('opacity','0');
  });

  $('.plus, .button_footer').click(function() {
    var $number_of_items = $(".number_of_items");
    $number_of_items.val(parseInt($number_of_items.val()) + 1);
    $number_of_items.change();
  });
});
