 window.addEventListener('load', function (){
    uri = window.location.href;
    if(document.cookie.indexOf("cartDropped") >= 0){
    if (document.cookie.indexOf("cartDropped") >= 0 && getCookie('cartDropped')=='true') {
        alert('webengage notification');
         window._weq = window._weq || {};
                      _weq['webengage.licenseCode'] = 'aa131544';
                      _weq['webengage.survey.forcedRender'] = true;
                      _weq['webengage.survey.defaultRender'] = false;
                      _weq['webengage.notification.forcedRender'] = true;
                      _weq['webengage.ruleData'] = {'cartDropped': 'yes'}
                      _weq['webengage.widgetVersion'] = '4.0';
                      _weq['webengage.notification.tokens'] = {'productUrl':'url'};
                      
                      
                       (function(d){ 
                        var _we = d.createElement('script');
                        _we.type = 'text/javascript';
                        _we.async = true;
                        _we.src = (d.location.protocol == 'https:' ? '//ssl.widgets.webengage.com' : '//cdn.widgets.webengage.com') +  '/js/widget/webengage-min-v-4.0.js';
                        var _sNode = d.getElementById('_webengage_script_tag');
                        _sNode.parentNode.insertBefore(_we, _sNode);
                      })(document);
        document.cookie = "cartDropped=false";
        console.log('fuck off');
        
    }}
    if (uri.includes("products")) {
        uri = window.location.href + '.js'
        request = new XMLHttpRequest();
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
        cartt0 = $.getJSON( window.location.protocol+'//'+ window.location.host + '/cart.js', function() {
            cartt0 = JSON.parse(cartt0.responseText)
            console.log("details of cart will log here->>>>");
            console.log(cartt0);
        })
    }
    if (uri.includes("cart")) {


         cartt1 = $.getJSON(window.location.protocol+'//'+ window.location.host + '/cart.js', function(response) {
            //var cartt2 =JSON.parse(cartt.responseText)
            //console.log("details of cart will log here->>>>");
            console.log(response);
            console.log("1 : " + cartt1.responseText);
        });
         $('a[href^="/cart/change"]').click(function() {
         elementNo=parseInt(getUrlVars2(this.href,'line'));
         elementNo = 2*elementNo-1;
         console.log('element np..'+elementNo);
         var x =$('a[href^="/product"]').get(elementNo);
         uri = x.getAttribute("href");
         console.log('uri-----');
         console.log(uri);
         if(uri){
            console.log('cart is empty');
        if (uri && getUrlVars(uri)) {
             originalURL = uri;
             alteredURL = removeParam("variant", originalURL) + '.js';
            console.log('your uri is:>>' + alteredURL);

        } else {
             alteredURL = uri + '.js';
            console.log('your uri is:>>' + alteredURL);

        }
        cartt2 = $.getJSON(alteredURL, function(response) {
            //var cartt2 =JSON.parse(cartt.responseText);
            //console.log("details of droped item will be  will logged here->>>>");
            console.log(response);
            console.log("2 : " + cartt2.responseText);
        });

    }
    
        document.cookie = "cartDropped=true";
         });

    }
    })
    function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function getUrlVars(uri) {
    var vars = {};
    var parts = uri.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars['variant'];
}
function getUrlVars2(uri,param) {
    var vars = {};
    var parts = uri.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars[param];
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