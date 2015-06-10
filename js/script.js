$(function () {
    $('#signupform').on('submit', function () {
        var email = $('#email').val();

        $(".waiting").show();

        db.push({ email: email }, function(error) {
            if(error) {
                $(".error").show();
                $(".waiting").hide();
            } else {
                $(".success").show();
                $(".waiting").hide();
                $(".error").hide();
                $('#email').val("");
            }
        });

        return false;
    });

    $('#email').focus(function() {
        $(".error").hide();
        $(".success").hide();
        $(".waiting").hide();
    });

    var db = new Firebase('https://babelboo.firebaseio.com/signups');
});
