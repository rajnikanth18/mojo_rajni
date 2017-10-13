"use strict";
(function( $ ) {
	
	function scroll_to_class(element_class, removed_height) {
		var scroll_to = $(element_class).offset().top - removed_height;
		if($(window).scrollTop() != scroll_to) {
			$('.form-wizard').stop().animate({scrollTop: scroll_to}, 0);
		}
	}

	function bar_progress(progress_line_object, direction) {
		var number_of_steps = progress_line_object.data('number-of-steps');
		var now_value = progress_line_object.data('now-value');
		var new_value = 0;
		if(direction == 'right') {
			new_value = now_value + ( 100 / number_of_steps );
		}
		else if(direction == 'left') {
			new_value = now_value - ( 100 / number_of_steps );
		}
		progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
	}

	jQuery(document).ready(function() {
		
		/*
			Form
		*/
		//$('.form-wizard fieldset:first').fadeIn('slow');
		
		var $signupForm = $( '#job-group-create-form' );

            $signupForm.validate({errorElement: 'em'});

			
		 $signupForm.formToWizard({
                submitButton: 'SaveAccount',
                nextBtnClass: 'btn btn-primary next',
                prevBtnClass: 'btn btn-default prev',
                buttonTag:    'button',
                validateBeforeNext: function(form, step) {
                    var stepIsValid = true;
                    var validator = form.validate();
                    $(':input', step).each( function(index) {
                        var xy = validator.element(this);
                        stepIsValid = stepIsValid && (typeof xy == 'undefined' || xy);
                    });
                    return stepIsValid;
                },
                progress: function (i, count) {
                    $('#progress-complete').width(''+(i/count*100)+'%');
                }

		
		
		
	
		
		
	});
	


	// image uploader scripts 

	var $dropzone = $('.image_picker'),
		$droptarget = $('.drop_target'),
		$dropinput = $('#inputFile'),
		$dropimg = $('.image_preview'),
		$remover = $('[data-action="remove_current_image"]');

	$dropzone.on('dragover', function() {
	  $droptarget.addClass('dropping');
	  return false;
	});

	$dropzone.on('dragend dragleave', function() {
	  $droptarget.removeClass('dropping');
	  return false;
	});

	$dropzone.on('drop', function(e) {
	  $droptarget.removeClass('dropping');
	  $droptarget.addClass('dropped');
	  $remover.removeClass('disabled');
	  e.preventDefault();
	  
	  var file = e.originalEvent.dataTransfer.files[0],
		  reader = new FileReader();

	  reader.onload = function(event) {
		$dropimg.css('background-image', 'url(' + event.target.result + ')');
	  };
	  
	  console.log(file);
	  reader.readAsDataURL(file);

	  return false;
	});

	$dropinput.change(function(e) {
	  $droptarget.addClass('dropped');
	  $remover.removeClass('disabled');
	  $('.image_title input').val('');
	  
	  var file = $dropinput.get(0).files[0],
		  reader = new FileReader();
	  
	  reader.onload = function(event) {
		$dropimg.css('background-image', 'url(' + event.target.result + ')');
	  }
	  
	  reader.readAsDataURL(file);
	});

	$remover.on('click', function() {
	  $dropimg.css('background-image', '');
	  $droptarget.removeClass('dropped');
	  $remover.addClass('disabled');
	  $('.image_title input').val('');
	});

	$('.image_title input').blur(function() {
	  if ($(this).val() != '') {
		$droptarget.removeClass('dropped');
	  }
	});

	// image uploader scripts

}( jQuery ));