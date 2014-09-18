$(document).on('ready', function() {

	var popUp = $('<div class="popup-active"><div class="popup"><h1>Here is a Pop-Up Box</h1><div><a id=\'close-button\' href=\'\'>Close the Pop-Up</a></div></div></div>');
	console.log('test')
	var popUpSelect = $('.popup-active');
	var openButton = $('#popupButton');
	var closeButton = $('#close-button');

	openButton.click(function(){
		console.log('you clicked a button!');
		$('body').append(popUp);
	});

	closeButton.click(function(){
		popUpSelect.remove();
	});

});