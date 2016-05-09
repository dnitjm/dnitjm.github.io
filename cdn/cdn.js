$(document).ready(function() {
	$('#form').appendTo('.map_bg');
    $('.btn-toolbar').appendTo('.map_bg');
    $('.row').prependTo('.map_bg');
    setTimeout(function() {
    	$('.container').fadeIn('slow');
    }, 500)
});