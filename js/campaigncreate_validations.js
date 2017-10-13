$(window).load(function(){
$(document).ready(function () {
	
	$(".campaign_submit").click(function () {
    
    	$('#campaign-create-form').validate({
			rules: {    
				campaignname: {required: true}
    		},
    		messages: {
    			campaignname: "Campaign Name is required<span><i class='fa fa-exclamation-triangle' aria-hidden='true'></i></span>"
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

		if ((!$('#campaign-create-form').valid())) {
       		return false;
    	}

   });
});
});