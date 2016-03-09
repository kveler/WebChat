<<<<<<< HEAD
var userName;
var email;


=======
>>>>>>> parent of c2fb8ff... BUG!!!1111!!!!!!!111!!1!11
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

    console.log ("What do yo umean, tusduuodsufouds");

    var user = $("#user").val ();
    var email = $("#email").val ();

    console.log(user);

    $.post( "/webchat/?c=chat&m=userToDatabase", { user: user, email: email }) .done (function (data) {
        console.log (data);
    });

<<<<<<< HEAD
    userName    = user;
    email       = email;

    $('#message').show();

    console.log(userName);

    setInterval (function () { receive ()}, 500);

=======
>>>>>>> parent of c2fb8ff... BUG!!!1111!!!!!!!111!!1!11
}