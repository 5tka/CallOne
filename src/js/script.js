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
		$('.nav__list').stop(true, true).slideToggle('slow');
	});
});
$(window).resize(function() {
    var w = $(window).width();
    if (w > 950) {
        $('.nav__list').removeAttr('style');
        $('#nav-icon4').removeClass('open');
    }
});