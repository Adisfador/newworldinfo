<?php
header("Contet-Type:text/html;charset=UTF-8");
session_start();

require_once "config.php";

require_once "functions.php";

db(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);



$action = clear_str($_GET['action']);

if (!$action) {
    $action = 'main';
}




$goods = table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

$quantity = 30;
$limit = 3;





if (file_exists(ACTIONS . $action . ".php")) {
    include ACTIONS . $action . ".php";
} else {
    include ACTIONS . "main.php";
}


require_once TEMPLATE . "index.php";


