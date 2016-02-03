window.onload = function () { setInterval (function () { receive () }, 1000); }

function send(){

    var berichtValue = $("#bericht").val ();

    $.post( "application/assets/scripts/PHP/writetolog.php", { bericht: berichtValue } );


}

function receive(){

    console.log ("Rito pls");
    $.post( "application/assets/scripts/PHP/showchat.php", function( data ) {
        $("#chat").html (data);
    });

}