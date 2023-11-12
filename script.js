$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:5
            },
            email:{
                required:true,
                minlength:5,
                email:true
            },
            password:{
                    minlength: 5,
                    digits:true
            },
            day:{
                required:true
            }
        }
    })
})