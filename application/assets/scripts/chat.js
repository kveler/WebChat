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

    console.log ("LOGIN ACTION");

    var user = $("#user").val ();
    var email = $("#email").val ();

    console.log (user);
    console.log (email);

    $.post( basepath + "?c=chat&m=userToDatabase", { user: user, email: email }, function (data) { console.log (data) } );

}