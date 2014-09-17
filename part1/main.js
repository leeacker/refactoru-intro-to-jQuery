$(document).on('ready', function() {
	// // on button click - print a message to the console
 //  $('#aButton').click(function(){
 //  	return console.log('You clicked the button!!');
 //  })

// add functionality to append some text on click
	$('#aButton').click(function(){
		$('<p>Here is some new text!</p>').insertAfter('#aButton');
	})

// add functionality to add a new header on click of a new button
	$('#headerButton').click(function(){
		$('<h1>Here is a Header</h1>').insertBefore('#aButton');
	})

// add a new button that appends a UL to the page
	$('#listButton').click(function(){
		$('<ul>\n<li>1 item</li>\n<li>2 item</li>\n<li>3 item</li>\n</ul>').insertAfter('#listButton');
	})
});