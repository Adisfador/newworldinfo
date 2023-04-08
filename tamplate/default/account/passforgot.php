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



$passforgot = $_POST['conf'];
$user_pass = $_POST['user-password'];
$user_password_conf = $_POST['user-password-conf'];

$reg = "yes";


$dopSymbol = "fnlkrtnb";

$user_password = md5($user_pass . $dopSymbol);

if ($user_pass != $user_password_conf) {
    $reg = "no";
}


$SelectFilter3 = 'token="' . $passforgot . '"';
$name = "account";


if ($reg == "yes") {
    $result = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "update   $name set user_password = '$user_password'  WHERE ($SelectFilter3)");
}




?>
<script type="text/javascript">
    location = "/index.php?&AdressMain=authorization&reg=<? echo ($reg); ?>&passforgot=<? echo ($passforgot); ?>";
</script>