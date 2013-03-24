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
        // // $('.slide') .css({'height': (($(window).height()) )});
    
        // $(window).bind('resize', function(){
        //     $('.slide') .css({'height': (($(window).height()) )});
        // });

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 40) {
                $(".navbar").addClass("navbarShadow");
            }
            else {
                $(".navbar").removeClass("navbarShadow");
            }
        });

        $('[data-typer-targets]').typer()
        $.typer.options.highlightSpeed = 20;
});