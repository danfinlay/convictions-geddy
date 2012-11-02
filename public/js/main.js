function mainReadyFunction(){
	console.log("ready.");
	$('#login-link').click(function(event){
		event.preventDefault();
		$('.loginAlert').show(500);
	});

	$('#register-link').click(function(event){
		event.preventDefault();
		$('.registerAlert').show(500);
	});
	$('#close').live("click", function(event){
		event.preventDefault();
		$('.loginAlert').hide(300);
		$('.registerAlert').hide(300);
	})
}
