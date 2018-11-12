$(document).ready(function() {

	// $('#box').click('click touchstart', function() {
	// $( this ).css( "width", "20%" );
	
	// });

	// 	$.fn.rectAnimate = function() {
	// 	var randomW = Math.floor(Math.random() * 100) + 10+ '%'; 
	// 	var time = Math.floor(Math.random() * 300) + 500;
	// 	$(this).animate({width: randomW,}, time).animate({width: "10%",}, time);
	// }

	// $('.box').mouseenter(function(){
	// 		$(this).rectAnimate();
	// });

	$('.box').mouseenter(function(){
		$(this).toggleClass("expand")
	});


});





