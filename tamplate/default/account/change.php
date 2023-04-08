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


$user_mail = $_POST['email_conf'];
$user_login = $_POST['login'];
$user_pass = $_POST['user-password'];
$user_password_conf = $_POST['user-password-conf'];
$user_password_old = $_POST['user-password-old'];


$reg = "yes";

$dopSymbol = "fnlkrtnb";

$user_pass_old = md5($user_password_old . $dopSymbol);
$user_pass_new = md5($user_pass . $dopSymbol);

if ($user_pass != $user_password_conf) {
    $reg = "no";
    $passGl = "yes";
}

$SelectFilter1 = 'user_password="' . $user_pass_old . '"';
$SelectFilter2 = 'user_mail="' . $user_mail . '"';

$name = "account";
$result = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name WHERE ($SelectFilter1) AND ($SelectFilter2) ");
while ($tettabl = mysqli_fetch_assoc($result)) {
    $bases[] = $tettabl;
}

if ($bases[0]["login"] == $user_login) {
    $logchange = "no";
} else {
    if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $user_login)) {
        $loginSpe = "yes";
        $reg = "no";
    } else {
        $loginSpe = "no";
        $SelectFilter3 = 'login="' . $user_login . '"';
        $result2 = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name WHERE ($SelectFilter3)");
        while ($tettabl2 = mysqli_fetch_assoc($result2)) {
            $bases2[] = $tettabl2;
        }
        if (empty($bases2[0]) != true) {
            $was = "yes";
            $reg = "no";
        } else {
            $was = "no";
        }

    }
}


if (empty($bases[0]) != true) {
    $exist = "yes";
} else {
    $exist = "no";
    $reg = "no";
}






if ($reg == "yes") {

    if ($loginSpe == "no"  && $was == "no") {
        $result = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "update   $name set login = '$user_login'  WHERE ($SelectFilter1) AND ($SelectFilter2)  ");
    } 

    if (strlen($user_pass) > 0) {
        $result = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "update   $name set user_password = '$user_pass_new'  WHERE ($SelectFilter1) AND ($SelectFilter2)  ");
    }
}


?>
<script type="text/javascript">
    location = "/index.php?&AdressMain=registration&setting=yes&reg=<? echo ($reg); ?>&passGl=<? echo ($passGl); ?>&exist=<? echo ($exist); ?>&loginSpe=<? echo ($loginSpe); ?>&was=<? echo ($was); ?>";
</script>