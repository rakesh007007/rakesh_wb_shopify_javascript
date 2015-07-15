var cartt = $.getJSON(window.location.href+'.js',function(){
	var cartt2 =JSON.parse(cartt.responseText)
	console.log(cartt2.total_price)
}
)
