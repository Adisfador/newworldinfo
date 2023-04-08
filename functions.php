<?php
function db($host, $user, $pass, $db_name)
{
    $db = mysqli_connect($host, $user, $pass, $db_name);

    if (!$db) {
        exit(mysqli_error($db));
    }  
    if (!mysqli_select_db($db, $db_name)) {
        exit(mysqli_error($db));
    }

    mysqli_query($db, "SET NAMES utf8mb3");
}

function clear_str($str)
{
    return trim(strip_tags($str));
}

// function render($path, $param)
// {
//     extract($param);
//     ob_start();
//     if (!include($path . ".php")) {
//         exit('Нет такого шаблона');
//     }
//     return $param;
// }

function table($host, $user, $pass, $db_name)
{
    $db = mysqli_connect($host, $user, $pass, $db_name);
    
    return  $db;
}
