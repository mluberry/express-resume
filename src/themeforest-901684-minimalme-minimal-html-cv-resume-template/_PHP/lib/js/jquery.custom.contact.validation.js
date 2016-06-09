jQuery(document).ready(function($){
	$("#contact_form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			subject: "required",
			message: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			name: "Please enter your name.",
			subject: "Please enter a subject.",
			email: {
				required: "Please enter your email address.",
				email: "This is not a valid email address format."
			},
			message: {
				required: "Please enter a message.",
				minlength: "Message must have at least 10 characters."
			}
		}
	});
	
	function checkForm() {
		if (!$('#contact_form').valid()) {
			return false;
		}
		else {
			return true;
		}
	}
		
	$("#contact_form").ajaxForm({
		beforeSubmit: checkForm,
		type: "POST",
		url: "lib/php/contact-form-process.php",
		data: $("#contact_form").serialize(),
		success: function(msg){
			$("#contact_form_message").ajaxComplete(function(event, request, settings){
				if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
				{
					result = '<p class="msg_success">Your message has been sent. Thank you!</p>';
				}
				else
				{
					result = '<p class="msg_error">' + msg +'</p>';
				}
				$(this).html(result);
			});
		}
	});
});