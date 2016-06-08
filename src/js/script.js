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
