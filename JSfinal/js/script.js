window.sr = new scrollReveal();

var heart = $('#heart');
var man = $('#man');
var description = $('#description');
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio/audio.mp3');
var circulate = $('#circulate');

$(heart2).click(function(){
	$(heart2).animate({ 
		width: '120%',
		});
	$(heart).animate({ 
		left : '750px',
		top : '150px',
		});
	$(man).fadeOut(700);
	$('header').fadeOut(700);
	$(description).delay(700).fadeIn(700);
	
	audioElement.play();

});


    $(circulate).addClass('animated fadeIn');



// new Vivus('arrow', {
//     type: 'delayed',
//     duration: 200,
//     animTimingFunction: Vivus.EASE
// }, myCallback);