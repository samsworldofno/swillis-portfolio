// Gumby is ready to go
Gumby.ready(function() {
	console.log('Gumby is ready to go...', Gumby.debug());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

// Oldie document loaded
Gumby.oldie(function() {

});

// Document ready
$(function() {

});

$(function()
      {
        $('.slide') .css({'height': (($(window).height()) )});
    
        $(window).bind('resize', function(){
            $('.slide') .css({'height': (($(window).height()) )});
        });
      });