

var int = 500;

// function intervalTime() {
// 	int = 100;
// 	console.log(int);

// }

setInterval('showBox()', int);


function showBox() {

	// intervalTime();

	console.log("in showBox method");

	var w = window.innerWidth;
	var h = window.innerHeight;

	var num; 

	if (w <= 400) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 1024) + 1; 
			int = 100;
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 512) + 1;
			int = 200;
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 256) + 1; 
			int = 300;
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 128) + 1; 
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 64) + 1; 
		}
		else {
			num = Math.floor(Math.random() * 32) + 1; 
		}
	}

	else if (w <= 600) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 512) + 1; 
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 256) + 1; 
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 128) + 1; 
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 64) + 1; 
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 32) + 1; 
		}
		else {
			num = Math.floor(Math.random() * 16) + 1; 
		}
	}

	else if (w <= 800) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 256) + 1; 
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 128) + 1; 
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 64) + 1; 
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 32) + 1; 
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 16) + 1; 
		}
		else {
			num = Math.floor(Math.random() * 8) + 1; 
		}
	}

	else if (w <= 1000) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 128) + 1; 
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 64) + 1; 
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 32) + 1; 
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 16) + 1; 
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 8) + 1; 
		}
		else {
			num = Math.floor(Math.random() * 4) + 1; 
		}
	}

	else if (w <= 1200) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 64) + 1; 
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 32) + 1; 
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 16) + 1; 
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 8) + 1; 
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 4) + 1; 
		}
		else {
			num = Math.floor(Math.random() * 2) + 1; 
		}
	}

	else {
		if (h <= 200) {
			num = Math.floor(Math.random() * 32) + 1; 
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 16) + 1; 
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 8) + 1; 
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 4) + 1; 
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 2) + 1; 
		}
		else {
			num = 1; 
		}
	}

	var showNum = Math.floor(Math.random() * 3) + 1;
	var showClass = "show" + showNum
	var theID = "#box" + num;

	$(theID).toggleClass(showClass);

	console.log(num);
};





$(document).ready(function() {

	// $.fn.showBox = function() {

	// 	// var num = 1;

	// 	// if ((".box").css(width) == "94vw") {
	// 	// 	// var num = Math.floor(Math.random() * 2)
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

	// $.fn.switchSpots = function() {
 //        var cells = $(".box");
 //        for(var i = 0; i < cells.length; i++){
 //            var target = Math.floor(Math.random() * cells.length -1) + 1;
 //            var target2 = Math.floor(Math.random() * cells.length -1) +1;
 //            cells.eq(target).before(cells.eq(target2));
 //        }
 //    }
    

 //     $(function(){

 //        $('body').switchSpots();

 //     });



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







