window.sr = new scrollReveal();

var heart = $('#heart');
var man = $('#man');
var description = $('#description');
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio/audio.mp3');
var circulate = $('#circulate');

//First heart animation

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

//circulation animation

    $(circulate).addClass('animated fadeIn');

 //NY Times API

var article1 = (function () {
	    $.ajax({
	        'async': false,
	        'global': false,
	        'url': "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=human+heart+health&sort=newest&api-key=87952c56194122e2acf6ca04a92d5a50%3A5%3A73137553",
	        'dataType': "json",
	        'success': function (data) {
	        	console.log(data);
	            var article1 = data.response.docs[1].web_url;
	            var article1title = data.response.docs[1].snippet;
	            document.getElementById('nytimes').innerHTML = '<a href="' + article1 + '">'+ article1title +'</a>';
	            var article2 = data.response.docs[4].web_url;
	            var article2title = data.response.docs[4].snippet;
	            document.getElementById('nytimes2').innerHTML = '<a href="' + article2 + '">'+ article2title +'</a>';
	   
	        }
	    });
	    return article1;
	})(); 

	