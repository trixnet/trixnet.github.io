function loginValidate() {

    return $("#login-form").validate({
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
            email: {
                required: "Enter a email",
                minlength: "Enter a valid email"
            },
        },
        errorElement: 'div',
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });
}
