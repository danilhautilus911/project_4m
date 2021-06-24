$(document).ready(function() {
$('.event1').mouseover(function () {$('.button1').addClass('opacity_action')});
$('.event1').mouseout(function () {$('.button1').removeClass('opacity_action')});

$('.event2').mouseover(function () {$('.button2').addClass('opacity_action')});
$('.event2').mouseout(function () {$('.button2').removeClass('opacity_action')});
$('.event3').mouseover(function () {$('.button3').addClass('opacity_action')});
$('.event3').mouseout(function () {$('.button3').removeClass('opacity_action')});
$('.event4').mouseover(function () {$('.button4').addClass('opacity_action')});
$('.event4').mouseout(function () {$('.button4').removeClass('opacity_action')});
$('.event5').mouseover(function () {$('.button5').addClass('opacity_action')});
$('.event5').mouseout(function () {$('.button5').removeClass('opacity_action')});
$('.event6').mouseover(function () {$('.button6').addClass('opacity_action')});
$('.event6').mouseout(function () {$('.button6').removeClass('opacity_action')});
$('.event7').mouseover(function () {$('.button7').addClass('opacity_action')});
$('.event7').mouseout(function () {$('.button7').removeClass('opacity_action')});
$('.event8').mouseover(function () {$('.button8').addClass('opacity_action')});
$('.event8').mouseout(function () {$('.button8').removeClass('opacity_action')});

$('.poster1').click(function () {
   $('.event5').addClass('animation_for_posters');
   setTimeout(function(){
       $('.event5').removeClass('animation_for_posters')
   }, 1000);
})

$('.poster2').click(function () {
   $('.event3').addClass('animation_for_posters');
   setTimeout(function(){
       $('.event3').removeClass('animation_for_posters')
   }, 1000);
})

$('.poster4').click(function () {
   $('.event2').addClass('animation_for_posters');
   setTimeout(function(){
       $('.event2').removeClass('animation_for_posters')
   }, 1000);
})

  $('.button').click(function() {
    $(this).css('background-color', '#FFDD5B');
    $(this).css('color', 'white')
    $(this).addClass('opacity_action2');
    $('.main').css('filter', 'blur(1px)');
    $('.overlay-zapisany').fadeIn();
  });

  $('.closepopup-js-campaign').click(function() {
    $('.button').css('background-color', 'white');
    $('.button').css('color', 'black')
    $('.main').css('filter', 'none');
    $('.button').removeClass('opacity_action2');
    $('.overlay-zapisany').fadeOut();
  });

  $(document).mouseup(function (e) {
  	var popup = $('.popup-js-campaign-zapisany');
  	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
  		$('.overlay-zapisany').fadeOut();
      $('.button').css('background-color', 'white');
      $('.button').css('color', 'black')
      $('.button').removeClass('opacity_action2');
      $('.main').css('filter', 'none');
  	}
  });
});
