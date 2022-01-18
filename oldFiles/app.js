

jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
}


$(document).ready(function () {
	$.loadScript('https://assets.codepen.io/4943867/appdemo.js', function(){
});
})

	