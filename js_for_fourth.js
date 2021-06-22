$(document).ready(function() {


  $('.part2_buttons, .part1_buttons').click(function() {
    $(this).css('background-color', '#7FDEFF');
    $(this).css('color', 'white')
    $('.main').css('filter', 'blur(1px)');
    $('.overlay-zapisany').fadeIn();
  });

  $('.closepopup-js-campaign').click(function() {
    $('.part2_buttons, .part1_buttons').css('background-color', 'white');
    $('.part2_buttons, .part1_buttons').css('color', 'black')
    $('.main').css('filter', 'none');
    $('.overlay-zapisany').fadeOut();
  });

  $(document).mouseup(function (e) {
  	var popup = $('.popup-js-campaign-zapisany');
  	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
  		$('.overlay-zapisany').fadeOut();
      $('.part2_buttons, .part1_buttons').css('background-color', 'white');
      $('.part2_buttons, .part1_buttons').css('color', 'black')
      $('.main').css('filter', 'none');
  	}
  });
});
