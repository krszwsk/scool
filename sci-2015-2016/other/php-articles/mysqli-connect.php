<?php

DEFINE ('DB_USER', 'root');
DEFINE ('DB_PASSWORD', 'toor');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'news');

$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
OR  die('Nie udalo sie polaczyc z baza danych.' . 
        mysqli_connect_error());

?>