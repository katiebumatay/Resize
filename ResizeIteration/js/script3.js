// $(document).ready(function() {

// 	// $('#box').click('click touchstart', function() {
// 	// $( this ).css( "width", "20%" );
	
// 	// });

// 	// 	$.fn.rectAnimate = function() {
// 	// 	var randomW = Math.floor(Math.random() * 100) + 10+ '%'; 
// 	// 	var time = Math.floor(Math.random() * 300) + 500;
// 	// 	$(this).animate({width: randomW,}, time).animate({width: "10%",}, time);
// 	// }

// 	// $('.box').mouseenter(function(){
// 	// 		$(this).rectAnimate();
// 	// });



// 	$('.box').mouseenter(function(){
// 		$(this).toggleClass("expand")
// 	});




// });

// 
// $(document).on('click' , 'div',function() {
//     $(this).remove();
// });

// setInterval('makeDiv()', 3000);

// function makeDiv() {
//     var divW = (window.innerWidth / 5).toFixed();
//     var divH = (window.innerHeight / 5).toFixed();
//     var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
//     $newdiv = $("<div/>").css({
//         'width': divW + 'px',
//         'height': divH + 'px',
//         'background-color': color
//     });

//     var posx = (Math.random() * ($(document).innerWidth() - divW)).toFixed();
//     var posy = (Math.random() * ($(document).innerHeight() - divH)).toFixed();

//     $newdiv.css({
//         'position': 'absolute',
//         'left': posx + 'px',
//         'top': posy + 'px',
//         'display': 'none'
//     }).addClass("box").appendTo('body').fadeIn(100);

// };


// $(document).ready(function() {
// 	$('.box').mouseenter(function(){
// 		$(this).toggleClass("expand")
// 	});

// });


setInterval('makeDiv()', 1000);


// function makeDiv() {
//     $("<div></div>").addClass("box").appendTo(".container");

//     console.log("making div")
// };

function makeDiv() {
    $newdiv = $("<div></div>").addClass("box");

    divW = $newdiv.width;
    divH = $newdiv.height;

    var posx = (Math.random() * ($(document).innerWidth())).toFixed();
    var posy = (Math.random() * ($(document).innerHeight())).toFixed();

    $newdiv.css({
        'position': 'fixed',
        'left': posx + 'px',
        'top': posy + 'px'
    }).appendTo('body');

};

$(document).ready(function() {
	console.log("test");

    $('.box').click(function(){
        $(this).toggleClass("expand");
        console.log("clicked");
    });

});






