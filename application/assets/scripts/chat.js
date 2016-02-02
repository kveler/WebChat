function send(){

    var berichtValue = $("#bericht").val ();

    $.post( "application/assets/scripts/PHP/writetolog.php", { bericht: berichtValue } );


}