// $(document).ready(function() {

// 	$('#box').click('click touchstart', function() {
// 	$( this ).css( "width", "20%" );
	
// 	});




// });






$(document).on('click' , 'div',function() {
    $(this).remove();
});

setInterval('makeDiv()', 500);

function makeDiv() {
    var divW = (window.innerWidth / 5).toFixed();
    var divH = (window.innerHeight / 5).toFixed();
    var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<div/>').css({
        'width': divW + 'px',
        'height': divH + 'px',
        'background-color': color
    });

    var posx = (Math.random() * ($(document).innerWidth() - divW)).toFixed();
    var posy = (Math.random() * ($(document).innerHeight() - divH)).toFixed();

    $newdiv.css({
        'position': 'absolute',
        'left': posx + 'px',
        'top': posy + 'px',
        'display': 'none'
    }).appendTo('body').fadeIn(100);

};


// $(document).on('click' , 'div',function() {
//     $(this).remove();
// });

// setInterval('makeDiv()', 500);

// // $(document).click(function() {
// //     makeDiv();
// // });

// function makeDiv() {
//     var divW = (window.innerWidth / 5).toFixed();
//     var divH = (window.innerHeight / 5).toFixed();
//     var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
//     // var color = '#ff4b2b';
//     var posx = (Math.random() * ($(document).innerWidth() - divW)).toFixed();
//     var posy = (Math.random() * ($(document).innerHeight() - divH)).toFixed();
//     $newdiv = $('<div/>').css({
//         'width': divW + 'px',
//         'height': divH + 'px',
//         'background-color': color,
//         'position': 'absolute',
//         'left': posx - (divW/2) + 'px',
//         'top': posy - (divH/2) + 'px',
//         'display': 'none',
//         'overflow': 'hidden'
//     }).appendTo('body').fadeIn(100);

//     // $newdiv.css({
//     //     'position': 'absolute',
//     //     'left': posx + 'px',
//     //     'top': posy + 'px',
//     //     'display': 'none'
//     // }).appendTo('body').fadeIn(100);

// };
