setInterval('showBox()', 1000);

	var num = 1;

function showBox() {

	// setInterval(showBox, 800);

	console.log("in showBox method");


	// if ($(".box").css(width) == "94vw") {
	// 	// var num = Math.floor(Math.random() * 1)
	// }
	// if ($(".box").css(width) == "46vw") {
	// 	var num = Math.floor(Math.random() * 4)
	// }

	var theID = "#box" + num;

	$(theID).addClass("show");

		console.log(num);

		num = num + 1;
};





$(document).ready(function() {

	// $.fn.showBox = function() {

	// 	// var num = 1;

	// 	// if ((".box").css(width) == "94vw") {
	// 	// 	// var num = Math.floor(Math.random() * 1)
	// 	// 	$("box:nth-child(num)").toggleClass("show");
	// 	// }
	// 	// if ((".box").css(width) == "46vw") {
	// 	// 	var num = Math.floor(Math.random() * 4)
	// 	// 	$("box:nth-child(num)").toggleClass("show");
	// 	// }
	// 	// else {
	// 	// 	$("box:nth-child(num)").toggleClass("show");
	// 	// }

	// 	$(this).toggleClass("show");
	// };

	// setInterval('showBox()', 800);

	$.fn.switchSpots = function() {
        var cells = $(".box");
        for(var i = 0; i < cells.length; i++){
            var target = Math.floor(Math.random() * cells.length -1) + 1;
            var target2 = Math.floor(Math.random() * cells.length -1) +1;
            cells.eq(target).before(cells.eq(target2));
        }
    }
    

     $(function(){

        $('body').switchSpots();

     });



    $('.box').mouseenter(function(){
    	// $(this).showBox();
        $(this).toggleClass("expand");
    });

});

// setInterval('makeDiv()', 800);


// function makeDiv() {
//     $("<div></div>").addClass("box").appendTo(".container");
//     console.log("making div")
// };







