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

    var user = $("#user").val ();
    var email = $("#email").val ();

    $.post( "/?c=chatcontroller&m=userToDatabase", { user: user, email: email } );

}