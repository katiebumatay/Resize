var chimeOne = $("#chime-one")[0];
$(".box").mouseenter(function() {
		chimeOne.play();
	});

function showBox() {

	// intervalTime();

	// console.log("in showBox method");

	var w = window.innerWidth;
	var h = window.innerHeight;

	var num; 

	if (w <= 400) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 1024) + 1; 
			setTimeout(showBox, 50);
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 512) + 1;
			setTimeout(showBox, 100);
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 256) + 1; 
			setTimeout(showBox, 150);
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 128) + 1; 
			setTimeout(showBox, 200);
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 64) + 1; 
			setTimeout(showBox, 250);
		}
		else {
			num = Math.floor(Math.random() * 32) + 1; 
			setTimeout(showBox, 300);
		}
	}

	else if (w <= 600) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 512) + 1; 
			setTimeout(showBox, 100);
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 256) + 1; 
			setTimeout(showBox, 150);
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 128) + 1;
			setTimeout(showBox, 200); 
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 64) + 1;
			setTimeout(showBox, 250);
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 32) + 1; 
			setTimeout(showBox, 300);
		}
		else {
			num = Math.floor(Math.random() * 16) + 1; 
			setTimeout(showBox, 350);
		}
	}

	else if (w <= 800) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 256) + 1; 
			setTimeout(showBox, 150);
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 128) + 1; 
			setTimeout(showBox, 200); 
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 64) + 1; 
			setTimeout(showBox, 250); 
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 32) + 1; 
			setTimeout(showBox, 300);
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 16) + 1; 
			setTimeout(showBox, 350);
		}
		else {
			num = Math.floor(Math.random() * 8) + 1;
			setTimeout(showBox, 400); 
		}
	}

	else if (w <= 1000) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 128) + 1; 
			setTimeout(showBox, 200); 
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 64) + 1;
			setTimeout(showBox, 250); 
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 32) + 1; 
			setTimeout(showBox, 300);
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 16) + 1; 
			setTimeout(showBox, 350);
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 8) + 1;
			setTimeout(showBox, 400);  
		}
		else {
			num = Math.floor(Math.random() * 4) + 1; 
			setTimeout(showBox, 450); 
		}
	}

	else if (w <= 1200) {
		if (h <= 200) {
			num = Math.floor(Math.random() * 64) + 1; 
			setTimeout(showBox, 250);
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 32) + 1; 
			setTimeout(showBox, 300);
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 16) + 1; 
			setTimeout(showBox, 350);

		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 8) + 1;
			setTimeout(showBox, 400);  
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 4) + 1; 
			setTimeout(showBox, 450); 
		}
		else {
			num = Math.floor(Math.random() * 2) + 1; 
			setTimeout(showBox, 500); 
		}
	}

	else {
		if (h <= 200) {
			num = Math.floor(Math.random() * 32) + 1; 
			setTimeout(showBox, 300);
		}
		else if (h <= 320) {
			num = Math.floor(Math.random() * 16) + 1;
			setTimeout(showBox, 350); 
		}
		else if (h <= 440) {
			num = Math.floor(Math.random() * 8) + 1; 
			setTimeout(showBox, 400); 
		}
		else if (h <= 560) {
			num = Math.floor(Math.random() * 4) + 1; 
			setTimeout(showBox, 450); 
		}
		else if (h <= 680) {
			num = Math.floor(Math.random() * 2) + 1; 
			setTimeout(showBox, 500); 
		}
		else {
			num = 1; 
			setTimeout(showBox, 550); 
		}
	}

	var showNum = Math.floor(Math.random() * 2) + 1;
	var showClass = "show" + showNum
	var theID = "#box" + num;

	// $(theID).toggleClass(showClass);
	$(theID).toggleClass("show1");

	console.log(num);
};

function loadGif() {
	var gifNum = Math.floor(Math.random() * 12) + 1;
	var gifClass = "gif" + gifNum

	$(".box").addClass(gifClass);

};





$(document).ready(function() {

	loadGif();

	// showBox();


 	var effect;
 	var effectClass;

    $('.box').mouseenter(function(){
    	effect = Math.floor(Math.random() * 3) + 1;
    	effectClass = "effect" + effect
    	// $(this).showBox();
        $(this).toggleClass(effectClass);
        // $(this).toggleClass("effect1");
        console.log(effectClass);
    });


});







