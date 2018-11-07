$(document).ready(function() {

	// $('#box').click('click touchstart', function() {
	// $( this ).css( "width", "20%" );
	
	// });

	$('.box').mouseenter(function(){
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
        $(this).css("background-color", ["rgb(",r,",",g,",",b,")"].join(""));
	});




});
