var cartt1 = $.getJSON('http://'+window.location.host+'/cart.js',function(response){
		//var cartt2 =JSON.parse(cartt.responseText)
		//console.log("details of cart will log here->>>>");
		console.log(response);
		console.log("1 : " + cartt1.responseText);
	}
	);
	    var uri = $('a[href^="/product"]').attr("href");
	    var originalURL = uri;
	    var alteredURL = removeParam("variant", originalURL)+'.js';
	    var cartt2 = $.getJSON(alteredURL,function(response){
		//var cartt2 =JSON.parse(cartt.responseText);
		//console.log("details of droped item will be  will logged here->>>>");
		console.log(response);
		console.log("2 : " + cartt2.responseText);
	}
	);