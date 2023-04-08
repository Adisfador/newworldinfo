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


define("DB_HOST",'localhost');
define("DB_USER",'root');
define("DB_PASSWORD",'root');
define("DB_NAME",'newworldall');

 // calc_weapon
// Build1 and build2
$random = ($_POST["random"]);
$name = ($_POST["name"]);
$appointment = ($_POST["appointment"]);
$role = ($_POST["role"]);
$private = ($_POST["private"]);

$weapon2 = ($_POST["weapon2"]);
$weapon1 = ($_POST["weapon1"]);


// build1

$mas = ($_POST["mas"]);

if (empty($mas[76])){
   $mas[76]="";
}

mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "INSERT INTO `calc_weapon` (`id`, `random` , `name` ,  `weapon_name` ,   `mas1`, `mas2`, `mas3`, `mas4`, `mas5`, `mas6`, `mas7`, `mas8`, `mas9`, `mas10`, `mas11`, `mas12`, `mas13`, `mas14`, `mas15`, `mas16`, `mas17`, `mas18`, `mas19`, `mas20`, `mas21`, `mas22`, `mas23`, `mas24`, `mas25`, `mas26`, `mas27`, `mas28`, `mas29`, `mas30`, `mas31`, `mas32`, `mas33`, `mas34`, `mas35`, `mas36`, `mas37`, `mas38`, `mas39`, `mas40`, `mas41`, `mas42`, `mas43`, `mas44`, `mas45`, `mas46`, `mas47`, `mas48`, `mas49`, `mas50`, `mas51`, `mas52`, `mas53`, `mas54`, `mas55`, `mas56`, `mas57`, `mas58`, `mas59`, `mas60`, `mas61`, `mas62`, `mas63`, `mas64`, `mas65`, `mas66`, `mas67`, `mas68`, `mas69`, `mas70`, `mas71`, `mas72`, `mas73`, `mas74`, `mas75`, `mas76`) VALUES (NULL, '$random', '$name', '$weapon1', '$mas[0]', '$mas[1]', '$mas[2]', '$mas[3]', '$mas[4]', '$mas[5]', '$mas[6]', '$mas[7]', '$mas[8]', '$mas[9]', '$mas[10]', '$mas[11]', '$mas[12]', '$mas[13]', '$mas[14]', '$mas[15]', '$mas[16]', '$mas[17]', '$mas[18]', '$mas[19]', '$mas[20]', '$mas[21]', '$mas[22]', '$mas[23]', '$mas[24]', '$mas[25]', '$mas[26]', '$mas[27]', '$mas[28]', '$mas[29]', '$mas[30]', '$mas[31]', '$mas[32]', '$mas[33]', '$mas[34]', '$mas[35]', '$mas[36]', '$mas[37]', '$mas[38]', '$mas[39]', '$mas[40]', '$mas[41]', '$mas[42]', '$mas[43]', '$mas[44]', '$mas[45]', '$mas[46]', '$mas[47]', '$mas[48]', '$mas[49]', '$mas[50]', '$mas[51]', '$mas[52]', '$mas[53]', '$mas[54]', '$mas[55]', '$mas[56]', '$mas[57]', '$mas[58]', '$mas[59]', '$mas[60]', '$mas[61]', '$mas[62]', '$mas[63]', '$mas[64]', '$mas[65]', '$mas[66]', '$mas[67]', '$mas[68]', '$mas[69]', '$mas[70]', '$mas[71]', '$mas[72]', '$mas[73]', '$mas[74]', '$mas[75]');");



// build2

 $mas2 = ($_POST["mas2"]);

 if (empty($mas2[76])){
    $mas2[76]="";
 }

mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "INSERT INTO `calc_weapon` (`id`, `random` , `name` , `weapon_name` ,   `mas1`, `mas2`, `mas3`, `mas4`, `mas5`, `mas6`, `mas7`, `mas8`, `mas9`, `mas10`, `mas11`, `mas12`, `mas13`, `mas14`, `mas15`, `mas16`, `mas17`, `mas18`, `mas19`, `mas20`, `mas21`, `mas22`, `mas23`, `mas24`, `mas25`, `mas26`, `mas27`, `mas28`, `mas29`, `mas30`, `mas31`, `mas32`, `mas33`, `mas34`, `mas35`, `mas36`, `mas37`, `mas38`, `mas39`, `mas40`, `mas41`, `mas42`, `mas43`, `mas44`, `mas45`, `mas46`, `mas47`, `mas48`, `mas49`, `mas50`, `mas51`, `mas52`, `mas53`, `mas54`, `mas55`, `mas56`, `mas57`, `mas58`, `mas59`, `mas60`, `mas61`, `mas62`, `mas63`, `mas64`, `mas65`, `mas66`, `mas67`, `mas68`, `mas69`, `mas70`, `mas71`, `mas72`, `mas73`, `mas74`, `mas75`, `mas76`) VALUES (NULL, '$random', '$name', '$weapon2',  '$mas2[0]', '$mas2[1]', '$mas2[2]', '$mas2[3]', '$mas2[4]', '$mas2[5]', '$mas2[6]', '$mas2[7]', '$mas2[8]', '$mas2[9]', '$mas2[10]', '$mas2[11]', '$mas2[12]', '$mas2[13]', '$mas2[14]', '$mas2[15]', '$mas2[16]', '$mas2[17]', '$mas2[18]', '$mas2[19]', '$mas2[20]', '$mas2[21]', '$mas2[22]', '$mas2[23]', '$mas2[24]', '$mas2[25]', '$mas2[26]', '$mas2[27]', '$mas2[28]', '$mas2[29]', '$mas2[30]', '$mas2[31]', '$mas2[32]', '$mas2[33]', '$mas2[34]', '$mas2[35]', '$mas2[36]', '$mas2[37]', '$mas2[38]', '$mas2[39]', '$mas2[40]', '$mas2[41]', '$mas2[42]', '$mas2[43]', '$mas2[44]', '$mas2[45]', '$mas2[46]', '$mas2[47]', '$mas2[48]', '$mas2[49]', '$mas2[50]', '$mas2[51]', '$mas2[52]', '$mas2[53]', '$mas2[54]', '$mas2[55]', '$mas2[56]', '$mas2[57]', '$mas2[58]', '$mas2[59]', '$mas2[60]', '$mas2[61]', '$mas2[62]', '$mas2[63]', '$mas2[64]', '$mas2[65]', '$mas2[66]', '$mas2[67]', '$mas2[68]', '$mas2[69]', '$mas2[70]', '$mas2[71]', '$mas2[72]', '$mas2[73]', '$mas2[74]', '$mas2[75]');");


 // calc_point
 $strenght = ($_POST["strenght"]);
 $dexterity = ($_POST["dexterity"]);
 $intelligence = ($_POST["intelligence"]);
 $focus = ($_POST["focus"]);
 $constitution = ($_POST["constitution"]);

 $TimeEnd = ($_POST["TimeEnd"]);
 $Descript = ($_POST["Descript"]);


mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "INSERT INTO `calc_point` (`id`, `random`, `name`,`appointment` , `role` , `private` ,  `weapon_name1` , `weapon_name2` , `Time` , `Descript` ,`strenght`, `dexterity`, `intelligence`, `focuss`, `constitution`) VALUES (NULL, '$random', '$name', '$appointment', '$role', '$private', '$weapon1', '$weapon2', '$TimeEnd', '$Descript','$strenght', '$dexterity', '$intelligence', '$focus', '$constitution');");



?>