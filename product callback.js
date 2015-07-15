var uri = $('a[href^="/product"]').attr("href")+'.js'
var cartt = $.getJSON(uri,function(){
	var cartt2 =JSON.parse(cartt.responseText)
	console.log(cartt2.product.variants[0]["price"])
}
)