// document.addEventListener("DOMContentLoaded", function() {

// 	// Custom JS

// });

$(".slider").owlCarousel({
	loop: true,
	items: 1,
	nav: true,
	dots: false,
	navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
});

$(".slider-arrivals").owlCarousel({
	loop: true,
	items: 4,
	nav: false,
}); 

$(".blog").owlCarousel({
	loop: true,
	items: 4,
	autoplay: true,
	autoplayTimeout: 4000,
	nav: true,
	navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
});

// $(".slider-team").owlCarousel({
// 	loop: true,
// 	items: 4,
// 	autoplay: true,
// 	autoplayTimeout: 4000,
// 	dots: true,
// });

$(".slider-team").owlCarousel({
	loop: true,
	items: 4,
	dots: true,
});