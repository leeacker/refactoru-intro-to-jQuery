$(document).on('ready', function() {

	// confirm before navigating away from the page - if the user does not leave the page, remove the link
	// $('a').mousedown(function(){
	// 	var whichA = $('a:active').attr('id');
	// 	console.log(whichA);
	// });
	var callerID = function(event){
		return event.target.id;
	}

	$('a').click(function(event){
		event.preventDefault();
		var whichA = callerID(event);
		console.log(whichA);
		var leavePage = confirm('Are you sure you want to leave this page?');
		if (leavePage === false){
			console.log('You\'re Staying!');
			$('#'+whichA).remove();
		} else {
			window.location = ($('#'+whichA).attr('href'));
		}
		});

	// change a paragraph's text to pink when moused over
	$('.crazyParagraph').mouseenter(function(){
		$('.crazyParagraph').css('color', '#FFDBFA');
	});
	$('.crazyParagraph').mouseleave(function(){
		$('.crazyParagraph').css('color', '');
	});

	// add exclamation marks to the end of headers
	$('h1, h2').append('!');
});

// $('a').click(function(event){
// 		event.preventDefault();
// 		console.log("Link has been clicked");
// 		var whichA = $('a').attr('id');
// 		console.log(whichA);
// 		function(){
// 		var navigate = alert('Are you sure you want to leave this page?');
// 		if (navigate === false){
// 			console.log("You're Staying!");
// 			$('a').remove();
// 		} else {
// 			alert('K Bye!')
// 			window.location = ($('#'+whichA).text());
// 		}
// 	}));