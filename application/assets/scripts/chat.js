var userName;
var email;


function send(){

    var berichtValue = $("#bericht").val ();

    $.post( "application/assets/scripts/PHP/writetolog.php", { bericht: berichtValue } );

    $('input:text').val('');


}


function receive(){idunnooo


    $.post( "application/assets/scripts/PHP/showchat.php", function( data ) {
        $("#chat").html (data);
    });

}

function login(){

    var user = $("#user").val ();
    var email = $("#email").val ();

    console.log(user);

    $.post( "/webchat/?c=chat&m=userToDatabase", { user: user, email: email }) .done (function (data) {
        console.log (data);
    });

    userName    = user;
    email       = email;

    $('#message').show();

    console.log(userName);

    setInterval (function () { receive ()}, 500);

}