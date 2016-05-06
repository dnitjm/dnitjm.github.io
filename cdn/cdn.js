$(document).ready(function() {
	$('#form').insertAfter('.left');
     
     (function() {
		var leftOffset = $('#date_start').offset().left;
        $('.dropdown-menu').css('left', leftOffset);
		console.log($('.dropdown-menu').css('left'));
        console.log(leftOffset);
	    })();
});