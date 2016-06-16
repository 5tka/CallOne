(function($) {
	$(function() {
	  $('.select-service').styler();
	});
})(jQuery);
$('.about-company__content').find('.init_hide').on('click',function(){
	$(this).toggleClass('active')
	.prev('.hidden_content').slideToggle();
	if ($(this).hasClass('active')) {
		$(this).text('Скрыть содержимое');
	} else {
		$(this).text('Показать полностью');
	}
});

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.nav__list').stop(true, true).css('padding','28px 0').slideToggle('slow');
	});
});
$(window).resize(function() {
    var w = $(window).width();
    if (w > 950) {
        $('.nav__list').removeAttr('style');
        $('#nav-icon4').removeClass('open');
    } //
});
$('.call-button__link, .make-order, .popup-uslugi').on('click', function(event) {
  event.preventDefault();
  var popupCall=$('.container-popup').bPopup({
		speed: 150,
		modalColor: '#58697a',
		opacity : '0.75'
  });

});
