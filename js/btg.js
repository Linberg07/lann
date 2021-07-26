$(function(){

$('.header-menu__icon').click(function(){
	$(this).toggleClass('activ');
	$('.header-menu').toggleClass('activ');
	$('body').toggleClass('lock');
})

});