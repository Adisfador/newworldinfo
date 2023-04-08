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
$user_login = $_POST['user-login'];
$user_pass = $_POST['user-password'];
$user_password_conf = $_POST['user-password-conf'];

$reg = true;

$dopSymbol="fnlkrtnb";

$user_password=md5($user_pass.$dopSymbol);

if ($user_pass != $user_password_conf) {
    $reg = false;
    $passGl = true;
}

$SelectFilter1 = 'login="' . $user_login . '"';
$SelectFilter2 = 'user_mail="' . $user_mail . '"';

$name = "account";
$result = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name WHERE ($SelectFilter1)");
while ($tettabl = mysqli_fetch_assoc($result)) {
    $bases[] = $tettabl;
}



$result2 = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name WHERE ($SelectFilter2)");
while ($tettabl2 = mysqli_fetch_assoc($result2)) {
    $bases2[] = $tettabl2;
}


if (empty($bases[0]) != true) {
    $loginCh = true;
    $reg = false;
}

if (empty($bases2[0]) != true) {
    $meilCh = true;
    $reg = false;
}

if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $user_login)) {
    $loginSpe = "true";
    $reg = false;
} else {
    $loginSpe = "false";
}

$verify="no";

// echo($loginSpe);

 //Define name spaces
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
if ($reg == true) {

    $token=md5($user_mail.$user_login.$dopSymbol);

    mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "INSERT INTO `account` (`id`, `login`, `user_mail`, `user_password`  ,`token` ,`verify`) VALUES (NULL, '$user_login', '$user_mail', '$user_password' , '$token' ,'$verify');");


    require '../phpmailer/includes/PHPMailer.php';
    require '../phpmailer/includes/SMTP.php';
    require '../phpmailer/includes/Exception.php';
    
   
    
    //Create instance of PHPMailer
    $mail = new PHPMailer();
    $mail->CharSet = "utf-8";
    
    //Set mailer to use smtp
    $mail->isSMTP();
    //Define smtp host
    $mail->Host = "newworldinfo.ru";
    //Enable smtp authentication
    $mail->SMTPAuth = true;
    //Set smtp encryption type (ssl/tls)
    $mail->SMTPSecure = "ssl";
    //Port to connect smtp
    $mail->Port = "465";
    //Set gmail username
    $mail->Username = "no-reply@newworldinfo.ru";
    //Set gmail password
    $mail->Password = "090399s090399S";
    //Email subject
    $mail->Subject = "Инструкции по подтверждению";
    //Set sender email
    $mail->setFrom('no-reply@newworldinfo.ru');
    //Enable HTML
    $mail->isHTML(true);
    //Email body
    $mail->Body = '<div style="background-color: #F6F6F6;  padding:15px; font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;box-sizing: border-box;">
    <div style=" max-width: 1130px;
    padding: 0 15px;
    margin: 0 auto;">
        <div style=" padding:15px; background-color:#FFFFFF;">
            <div style="margin-bottom: 15px;"> Привет, спасибо за регистрацию на newworldinfo.info!</div>
            <div style="margin-bottom: 15px;">Для завершения регистрации щелкните ссылку ниже.</div>
            <a style="margin-bottom: 15px;display:block;" href="http://newworldinfo/index.php?&AdressMain=registration&verify='.$token .'">Подтвердите электронный адрес</a>
            <div style="margin-bottom: 15px;">Я создал newworldinfo в надежде, что смогу предоставить вам лучшие инструменты и контент для New World. Чтобы это произошло, я полагаюсь на ваши отзывы.</div>

            <div style="margin-bottom: 15px;">Пожалуйста, свяжитесь со мной по электронной почте , чтобы сообщить мне, если у вас возникнут какие-либо проблемы или возникнут какие-либо идеи для сайта!</div>
            <div style="margin-bottom: 15px;">— newworldinfo</div>
        </div>

    </div>

</div>';
    //Add recipient
    $mail->addAddress($user_mail);
    //Finally send email
    if ($mail->send()) {
      echo "Email Sent..!";
     
    } else {
      echo "Message could not be sent. Mailer Error: "{$mail->ErrorInfo};
    }
    //Closing smtp connection
    $mail->smtpClose();


}


?>
<!-- <script type="text/javascript">
    location = "/index.php?&AdressMain=registration&reg=<? echo ($reg); ?>&passGl=<? echo ($passGl); ?>&loginCh=<? echo ($loginCh); ?>&meilCh=<? echo ($meilCh); ?>&loginSpe=<? echo ($loginSpe); ?>";
</script> -->