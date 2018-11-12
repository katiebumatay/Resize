$(document).ready(function() {

	// $('#box').click('click touchstart', function() {
	// $( this ).css( "width", "20%" );
	
	// });

	$('.box:nth-child(even)').mouseenter(function(){
		$('.container').toggleClass("blueBG");
	});

	$('.box:nth-child(odd)').mouseenter(function(){
		$('.container').toggleClass("orangeBG");
	});







});
