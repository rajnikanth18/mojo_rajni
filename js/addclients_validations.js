$(window).load(function(){
$(document).ready(function () {
	
	$(".addatas").click(function () {
    
    	$('#add-client-ats-form').validate({
			rules: {    
				clientname: {required: true},
				exportedname:{required: true},
				//uploadfeed:{required: true}
    		},
    		messages: {
    			clientname: "Client Name is required<span><i class='fa fa-exclamation-triangle' aria-hidden='true'></i></span>",
				exportedname: "Exported Name is required<span><i class='fa fa-exclamation-triangle' aria-hidden='true'></i></span>",
				//uploadfeed: "Please upload your feed<span><i class='fa fa-exclamation-triangle' aria-hidden='true'></i></span>"
			},
			focusInvalid: false,
	    invalidHandler: function(form, validator) {

        if (!validator.numberOfInvalids())
            return;

			$('html, body').animate({
				scrollTop: $(validator.errorList[0].element).offset().top - 100
			}, 2000);

	    }
	    });

		if ((!$('#add-client-ats-form').valid())) {
       		return false;
    	}

   });
});
});