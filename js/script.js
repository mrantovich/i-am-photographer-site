$(document).ready(function(){

	$(".header__burger").on("click", function() {
		$(this).toggleClass("_active");
		$(".nav__menu").toggleClass("_active");
		$(".header__social").toggleClass("_active");
	});

});
