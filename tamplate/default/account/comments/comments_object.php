<?php
ini_set("max_execution_time", 1000);
function db($host, $user, $pass, $db_name)
{
    $db = mysqli_connect($host, $user, $pass, $db_name);

    if (!$db) {
        exit(mysqli_error($db));
    }
    if (!mysqli_select_db($db, $db_name)) {
        exit(mysqli_error($db));
    }

    mysqli_query($db, "SET NAMES UTF-8");
}

function table($host, $user, $pass, $db_name)
{
    $db = mysqli_connect($host, $user, $pass, $db_name);

    return  $db;
}


define("DB_HOST", 'localhost');
define("DB_USER", 'root');
define("DB_PASSWORD", 'root');
define("DB_NAME", 'newworldall');

// define("DB_HOST",'185.137.235.119');
// define("DB_USER",'newworld_abisfador');
// define("DB_PASSWORD",'img_CardUrl_3Bonus');
// define("DB_NAME",'newworld_newworldall');



$text_comment = $_POST['text-comment'];
$com_time = $_POST['com_time'];
$Object = $_POST['Object'];
$TableType = $_POST['TableType'];

$SelectFilter11 = 'user_mail ="' . $_COOKIE['user'] . '"';
$name = "account";
$result5 = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name   WHERE ($SelectFilter11)  ");
while ($tettabl5 = mysqli_fetch_assoc($result5)) {
    $bases5[] = $tettabl5;
}

$login = $bases5[0]['login'];



$result = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "INSERT INTO `comments_object` (`id`, `login`, `time`, `comment`, `Card_name`, `table_name`) VALUES (NULL, '$login', '$com_time', '$text_comment', '$Object', '$TableType');");


$send="yes"



?>

<script type="text/javascript">
    location = '/index.php?&AdressMain=DataBase&DataType=Objectpage&Object=<? echo ($Object); ?>&TableType=<? echo ($TableType); ?>';
</script>

