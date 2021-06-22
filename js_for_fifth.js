$(document).ready(function() {
$('.event1').mouseover(function () {$('.button1').css('opacity', '1')});
$('.event1').mouseout(function () {$('.button1').css('opacity', '0')});
$('.event2').mouseover(function () {$('.button2').css('opacity', '1')});
$('.event2').mouseout(function () {$('.button2').css('opacity', '0')});
$('.event3').mouseover(function () {$('.button3').css('opacity', '1')});
$('.event3').mouseout(function () {$('.button3').css('opacity', '0')});
$('.event4').mouseover(function () {$('.button4').css('opacity', '1')});
$('.event4').mouseout(function () {$('.button4').css('opacity', '0')});
$('.event5').mouseover(function () {$('.button5').css('opacity', '1')});
$('.event5').mouseout(function () {$('.button5').css('opacity', '0')});
$('.event6').mouseover(function () {$('.button6').css('opacity', '1')});
$('.event6').mouseout(function () {$('.button6').css('opacity', '0')});
$('.event7').mouseover(function () {$('.button7').css('opacity', '1')});
$('.event7').mouseout(function () {$('.button7').css('opacity', '0')});
$('.event8').mouseover(function () {$('.button8').css('opacity', '1')});
$('.event8').mouseout(function () {$('.button8').css('opacity', '0')});

$('.poster1').click(function () {
  setTimeout(function () {
    $('.event5').css('background-color','#FFECA1');
  }, 000)
})

  $('.button').click(function() {
    $(this).css('background-color', '#FFDD5B');
    $(this).css('color', 'white')
    $('.main').css('filter', 'blur(1px)');
    $('.overlay-zapisany').fadeIn();
  });

  $('.closepopup-js-campaign').click(function() {
    $('.button').css('background-color', 'white');
    $('.button').css('color', 'black')
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
