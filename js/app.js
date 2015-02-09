/*global $:false*/
$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-action').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		console.log('mousedown');
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-120px');
			}
		);
	})
	.mouseup(function() {
		console.log('mouseup');
		//ryu goes back to his ready position
		$('.ryu-action').hide();
		$('.ryu-still').show();
	})

});

$(document).keydown(function(k) {
	if(k.which==88) {
		console.log('keydown');
		$('.ryu-action').hide();
		$('.ryu-cool').show();
	} 
}).keyup(function(k) {
	if(k.which==88) {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	}
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}