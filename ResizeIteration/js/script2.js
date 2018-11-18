setInterval('showBox()', 800);

function showBox() {

	console.log("in showBox method");

	var num = 1;

	if ($(".box").css(width) == "94vw") {
		// var num = Math.floor(Math.random() * 1)
		$("box:nth-child(" + num + ")").addClass("show");
	}
	if ($(".box").css(width) == "46vw") {
		var num = Math.floor(Math.random() * 4)
		$("box:nth-child(" + num + ")").addClass("show");
	}

		console.log(num);
};





$(document).ready(function() {

	// $.fn.showBox = function() {

	// 	var num = 1;

	// 	if ((".box").css(width) == "94vw") {
	// 		// var num = Math.floor(Math.random() * 1)
	// 		$("box:nth-child(num)").toggleClass("show");
	// 	}
	// 	if ((".box").css(width) == "46vw") {
	// 		var num = Math.floor(Math.random() * 4)
	// 		$("box:nth-child(num)").toggleClass("show");
	// 	}
	// 	else {
	// 		$("box:nth-child(num)").toggleClass("show");
	// 	}
	// };

	// setInterval('showBox()', 800);

    $('.box').mouseenter(function(){
        $(this).toggleClass("expand")
    });

});

// setInterval('makeDiv()', 800);


// function makeDiv() {
//     $("<div></div>").addClass("box").appendTo(".container");
//     console.log("making div")
// };







