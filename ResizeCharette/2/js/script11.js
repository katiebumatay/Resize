$(document).ready(function() {

	// $('#box').click('click touchstart', function() {
	// $( this ).css( "width", "20%" );
	
	// });

	$('.box:nth-child(even)').mouseenter(function(){
		$('.container').toggleClass("blackBG");
		$('.box').toggleClass("blackBG");
	});

	$('.box:nth-child(odd)').mouseenter(function(){
		$('.container, box').toggleClass("whiteBG");
		$('.box').toggleClass("whiteBG");
	});







});
