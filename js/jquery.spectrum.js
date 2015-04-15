$.fn.spectrum = function(options) {
// Defining the variables
	var index = 0;
	var $element = $(this);

// Array of Colors
	var colorArray = [

		// Colour 1 - Orange
	    {
	        src: 'color1',
	        color: 'rgb(252,115,49)'
	    },

	    // Color 2 - Pink
	    {
	        src: 'color2',
	        color: 'rgb(236,0,140)'
	    },

	    // Color 3 - Yellow
	    {
	       	src: 'color3',
	        color: 'rgb(241,196,15)'
	    },

	    // Color 4 - Green
	   	{
	        src: 'color4',
	        color: 'rgb(95,178,106)'
	    },

	    // Color 5 - Blue
	    {
	        src: 'color5',
	        color: 'rgb(113,137,255)'
	    }
	];

	//Use set interval to go through our colorArray
	//Each interval change the background color of the element 
	//Plugin is on, and increment the index.
	setInterval(function() {
		//Change background of selected $element to be 
		//colorArray[index]
		//Increment index
		index = index + 1;
		//Make sure that index is not larger than the length of the colorArray
		//If so,
	},4000);

	// Create a style tag
	var style = $("<style>");

	for (var i = 0; i < colorArray.length; i++) {
		
		// Append a CSS rule to the style tag
		var currentColor = colorArray[i];
		//var colorStyle =  " ."+currentColor.src+ " { background: "+currentColor.color+"; } \n\n";
		var colorStyle =  " ."+currentColor.src+ " { color: "+currentColor.color+"; } \n\n";

		style.append(colorStyle);
		// console.log(colorArray[i]);
	
	}; // end for loop

	var c = 0;
	var currentColor = setInterval(function(){
		// setColor();
		var className = colorArray[c].src;
		console.log("We should change the class to ", className);
		$('#spectrumPlugin').removeClass().addClass(className + ' spectrumHeader');

		c++;

		if(c === colorArray.length) {
			c = 0;
		}

	}, 4000);

	// Appends the style tag in the body of the HTML document
	$('body').append(style); 

};