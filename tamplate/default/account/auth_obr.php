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


$user_mail = $_POST['user-mail'];
$user_pass = $_POST['user-password'];

$dopSymbol = "fnlkrtnb";

$user_password = md5($user_pass . $dopSymbol);

$SelectFilter1 = 'user_password="' . $user_password . '"';
$SelectFilter2 = 'user_mail ="' . $user_mail . '"';

$SelectFilter3 = 'verify ="yes"';

$name = "account";

$result1 = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name WHERE  ($SelectFilter2)  AND ($SelectFilter3) ");
while ($tettabl1 = mysqli_fetch_assoc($result1)) {
    $bases1[] = $tettabl1;
}


if (empty($bases1[0]) != true) {
    $verify = "yes";
} else {
    $verify = "no";
}

if ($verify == "yes") {
    $result = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name WHERE ($SelectFilter1) AND ($SelectFilter2) AND ($SelectFilter3) ");
    while ($tettabl = mysqli_fetch_assoc($result)) {
        $bases[] = $tettabl;
    }


    if (empty($bases[0]) != true) {
        $loginCompl = "yes";
    } else {
        $loginCompl = "no";
    }
    setcookie('user', $bases[0]["user_mail"], time() + 3600, "/");
} else {
    $loginCompl = "yes";
}





?>
<script type="text/javascript">
    location = "/index.php?&AdressMain=authorization&loginCompl=<? echo ($loginCompl); ?>&verify=<? echo ($verify); ?>";
</script>