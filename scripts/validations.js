$(document).ready(function() {
    $('form').validate({
        errorClass: 'invalid',
        errorPlacement: function(error, element) {
            element.next("label").attr("data-error", error.contents().text());
        }
    });
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
    $("#login-form").validate({
        rules: {
            "login-email": {
                required: true,
                email: true
            },
            "login-password": {
                required: true,
                minlength: 5
            }
        },
        //For custom messages
        messages: {
            "login-email": {
                required: "Enter a email",
                email: "Enter a valid email"
            },
            "login-password": {
                required: "Password required",
                minlength: "Min length is 5"
            }
        }
    });
});