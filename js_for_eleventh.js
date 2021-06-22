$(document).ready(function() {
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

});
