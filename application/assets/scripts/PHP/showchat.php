<?php

if ( ! isset ($_SESSION))
    session_start ();

if (isset ($_SESSION['user'])) {
    $file = 'chat.txt';
// Open the file to get existing content
    $current = file_get_contents($file);
    echo $current;
}