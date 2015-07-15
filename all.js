	var uri = window.location.href;
	document.onload = function(){
		if(getCookie(cartDropped)){
			alert('webengage notification');
			document.cookie="cartDropped=false";
		}
	}
	$('a[href^="/cart/change"]').click(function(){
    alert("product drop request");
    document.cookie="cartDropped=true";
});
	function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
	function getUrlVars(uri) {
    var vars = {};
    var parts = uri.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars['variant'];
  }
	function removeParam(key, sourceURL) {
	    var rtn = sourceURL.split("?")[0],
	        param,
	        params_arr = [],
	        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
	    if (queryString !== "") {
	        params_arr = queryString.split("&");
	        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
	            param = params_arr[i].split("=")[0];
	            if (param === key) {
	                params_arr.splice(i, 1);
	            }
	        }
	        rtn = rtn + "?" + params_arr.join("&");
	    }
	    var str = rtn;
	    str = str.substring(0, str.length - 1);
	    return str;
	}
	if(uri.includes("products")){
		var uri = window.location.href+'.js'
	var request = new XMLHttpRequest();
	request.open('GET', uri, true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    // Success!
	    cartt3 = JSON.parse(request.responseText);
	    window.cartt3;
	    console.log("data of product page!->>>>>>>>")
	    console.log(cartt3);
	  } else {
	    // We reached our target server, but it returned an error

	  }
	};


	request.onerror = function() {
	  // There was a connection error of some sort
	};

	request.send();
	//request for cart starts from here
	     cartt0 = $.getJSON('https://'+window.location.host+'/cart.js',function(){
		cartt0 =JSON.parse(cartt0.responseText)
		console.log("details of cart will log here->>>>");
		console.log(cartt0);
	}
	)
	}
	if(uri.includes("cart")){
	   
	     var cartt1 = $.getJSON('https://'+window.location.host+'/cart.js',function(response){
		//var cartt2 =JSON.parse(cartt.responseText)
		//console.log("details of cart will log here->>>>");
		console.log(response);
		console.log("1 : " + cartt1.responseText);
	}
	);
	    var uri = $('a[href^="/product"]').attr("href");
	    if(getUrlVars(uri)){
	    	var originalURL = uri;
	        var alteredURL = removeParam("variant", originalURL)+'.js';
	        console.log('your uri is:>>'+alteredURL);

	    }
	    else{
	    	var alteredURL = uri+'.js';
	    	console.log('your uri is:>>'+alteredURL);

	    }
	    var cartt2 = $.getJSON(alteredURL,function(response){
		//var cartt2 =JSON.parse(cartt.responseText);
		//console.log("details of droped item will be  will logged here->>>>");
		console.log(response);
		console.log("2 : " + cartt2.responseText);
	}
	);
	}
