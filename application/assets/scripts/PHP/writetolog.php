<?php

/*
 * - Ontvang POST variabel
 * - Check of log bestand bestaat, als niet; creeer.
 * - voeg POST variabel value toe aan log bestand
 */


//echo $_POST["bericht"];



$file = 'chat.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new message to the file
$current .=  $_SESSION['user']. ": " . $_POST['bericht'] . "<br /> \r\n";
// Write the contents back to the file
file_put_contents($file, $current);
