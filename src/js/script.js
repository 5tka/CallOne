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
	//select
	$(".select-service").select2({
		minimumResultsForSearch: Infinity
	});



	// Плавная прокрутка к якорю
	$('a[href^="#"]').click(function(){
	//Сохраняем значение атрибута href в переменной:
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
	return false;
	});


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
$('.popup-uslugi').on('click', function(event) {
  event.preventDefault();
  var popupCall=$('.container-popup').bPopup({
		speed: 150,
		modalColor: '#58697a',
		opacity : '0.75',
		onClose: function(){
			if($('#calculation-form-link').length) {
			  $('html, body').animate({scrollTop: $('#calculation-form-link').offset().top}, 1000);
			} else {
				window.location.href = "index.html#calculation-form-link"
			}
		}
  });
});
