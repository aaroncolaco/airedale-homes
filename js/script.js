$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('#change-navbar');
	var offset = startchange.offset();
	if (startchange.length){
		$(document).scroll(function() { 
				scroll_start = $(this).scrollTop();
				if(scroll_start > offset.top) {
						$(".navbar-default").css('background-color', '#222222');
				} else {
						$('.navbar-default').css('background-color', 'transparent');
				}
		});
	}

	$('.navbar-toggle').click(function () {
		$(".navbar-default").css('background-color', '#222222');
	});
});