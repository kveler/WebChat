<<<<<<< HEAD
var userName;
var email;

<<<<<<< HEAD

=======
>>>>>>> parent of c2fb8ff... BUG!!!1111!!!!!!!111!!1!11
=======
>>>>>>> parent of b64406c... Als je dit ziet werkt je kithoeb
function send(){

    var berichtValue = $("#bericht").val ();

    $.post( "application/assets/scripts/PHP/writetolog.php", { bericht: berichtValue } );


}


function receive(){


    $.post( "application/assets/scripts/PHP/showchat.php", function( data ) {
        $("#chat").html (data);
    });

}

function login(){

    console.log ("What do yo umean, tusduuodsufouds");

    var user = $("#user").val ();
    var email = $("#email").val ();

    $.post( "/webchat/?c=chat&m=userToDatabase", { user: user, email: email }) .done (function (data) {
        console.log (data);
    });

<<<<<<< HEAD
    userName    = user;
    email       = email;

    setInterval (function () { receive ()}, 500);

=======
>>>>>>> parent of c2fb8ff... BUG!!!1111!!!!!!!111!!1!11
}