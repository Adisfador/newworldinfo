<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/">
    <title><?php
            if (empty($_GET['Object']) != true) {
                echo ($_GET['Object'] . "/NewWorldInfo");
            }else if(empty($_GET['news_title']) != true){
                echo ($_GET['news_title']);
            } else if (empty($_GET['DataType']) != true && $_GET['DataType'] != "Objectpage") {
                if ($_GET['DataType'] == "Abilities") {
                    echo ("NewWorldInfo/ " . ucfirst($_GET['WeaponAb']) . " - Таблица умений");
                } else {
                    echo ("NewWorldInfo/" . $_GET['AdressMain'] . "/" . $_GET['DataType']);
                }
            } else if (empty($_GET['AdressMain']) != true && $_GET['DataType'] != "Objectpage") {
                if ($_GET['AdressMain'] == "Home") {
                    if ($_GET['calc_weapon'] == "true") {
                        echo ("NewWorldInfo/ Билды New World");
                    } else {
                        echo ("NewWorldInfo/ Калькулятор умений и талантов");
                    }
                } else if ($_GET['AdressMain'] == "DataBase") {
                    echo ("NewWorldInfo/ База данных New World");
                } else if ($_GET['AdressMain'] == "Build") {
                    echo ("NewWorldInfo/ Билды New World");
                } else if ($_GET['AdressMain'] == "News") {
                    echo ("NewWorldInfo/ Новости New World");
                } else if ($_GET['AdressMain'] == "Map") {
                    echo ("NewWorldInfo/ Карта New World");
                } else {
                    echo ("NewWorldInfo/" . $_GET['AdressMain']);
                }
            } else {
                echo ("NewWorldInfo/ Калькулятор умений и талантов");
            }
            ?></title>
    <meta name="description" content='<?php
                                        if (empty($_GET['Object']) != true) {
                                            //Вызов из бд для ObjectPage
                                            $name = $_GET['TableType'];
                                            $Card_name = '%' . str_replace("%", ' ', $_GET['Object']) . '%';
                                            $dd = 2;
                                            if (strpos($name, 'erks') == true) {
                                                $dd = 6;
                                            }
                                            $leng = strlen($Card_name) + $dd;
                                            $result = mysqli_query($goods, "SELECT * FROM  $name WHERE Card_name like '$Card_name' and LENGTH(Card_name) <$leng  limit 1  ");

                                            while ($tettabl = mysqli_fetch_assoc($result)) {
                                                $bases[] = $tettabl;
                                            }
                                            //
                                            if (empty($bases[0]['Card_Class']) != true && empty($bases[0]['Card_Gear_Score']) != true) {
                                                echo ('Информация об ' . $bases[0]['Card_name'] . ', тип ' . $bases[0]['Table_Name'] . ', класс ' . trim($bases[0]['Card_Class']) . ' с рейтингом снаряжения ' . trim($bases[0]['Card_Gear_Score']) . ' в русской базе данных New World.');
                                            } else if (empty($bases[0]['Card_Class']) == true && empty($bases[0]['Card_Gear_Score']) != true) {
                                                echo ('Информация об ' . $bases[0]['Card_name'] . ', тип ' . $bases[0]['Table_Name']  . ' с рейтингом снаряжения ' . trim($bases[0]['Card_Gear_Score']) . ' в русской базе данных New World.');
                                            } else if (empty($bases[0]['Card_Gear_Score']) == true && empty($bases[0]['Card_Class']) != true) {
                                                echo ('Информация об ' . $bases[0]['Card_name'] . ', тип ' . $bases[0]['Table_Name'] . ', класс ' . trim($bases[0]['Card_Class'])  . ' в русской базе данных New World.');
                                            } else if (empty($bases[0]['Card_Class']) == true && empty($bases[0]['Card_Gear_Score']) == true) {
                                                echo ('Информация об ' . $bases[0]['Card_name'] . ', тип ' . $bases[0]['Table_Name']   . ' в русской базе данных New World.');
                                            }
                                        } else if ($_GET['DataType'] == "Creatures") {
                                            echo ("База данных мира New World !  Слабости мобов - Ancients Уязвимость: Strike (Молот) Lightning (Topaz) Сопротивление: Slash (Меч) Nature (Amber) Fire (Ruby) Corrupted Уязвимость: Nature (Amber) Arcane");
                                        } else if ($_GET['AdressMain'] == "Home") {
                                            if ($_GET['calc_weapon'] == "true") {
                                                echo ("Подборка билдов мира New World ! Билды, Предметы, слабости мобов, калькулятор билдов и многое другое собрано на newworldinfo! Заходи!");
                                            } else {
                                                echo ("Калькулятор умений мира New World ! Билды, Предметы, слабости мобов, калькулятор билдов и многое другое собрано на newworldinfo! Заходи!");
                                            }
                                        } else if ($_GET['AdressMain'] == "Build") {
                                            echo ("Подборка билдов мира New World ! Билды, Предметы, слабости мобов, калькулятор билдов и многое другое собрано на newworldinfo! Заходи!");
                                        } else if ($_GET['AdressMain'] == "News") {
                                            $name_News = "news";
                                            $Card_name_News = '%' . str_replace("%", ' ', $_GET['news_title']) . '%';
                                            $dd_News = 5;
                                            $leng_News = strlen($Card_name_News) + $dd_News;
                                            $result_News = mysqli_query($goods, "SELECT * FROM  $name_News WHERE title like '$Card_name_News' and LENGTH(title) <$leng_News  limit 1  ");
                                            while ($tettabl_News = mysqli_fetch_assoc($result_News)) {
                                                $bases_News[] = $tettabl_News;
                                            }
                                            echo ($bases_News["0"]['subtitle_new']);
                                        } else if ($_GET['AdressMain'] == "Map") {
                                            echo ("Карта New World - это интерактивная карта с расположением ресурсов, узлами сбора, достопримечательностями, подземельями и именованными мобами .");
                                        } else if ($_GET['DataType'] == "Abilities") {
                                            if (empty($_GET['WeaponAb']) != true) {
                                                echo ("Таблица умений " . ucfirst($_GET['WeaponAb']) . " для New World ! Дерево талантов имеющее до 6 активных и около 30 пассивных навыков в двух разных ветках навыков для каждого оружия! Заходи!");
                                            } else {
                                                echo ("В New World игроки могут использовать до двух наборов оружия. Вы можете заработать до 19 очков навыков. Они позволяют разблокировать до 6 активных и около 30 пассивных навыков в двух разных ветках навыков для каждого оружия. Заходи!");
                                            }
                                        } else {
                                            echo ("База данных мира New World ! Предметы, билды, слабости мобов, калькулятор билдов и многое другое собрано на newworldinfo! Заходи!");
                                        }

                                        ?>' data-qmeta="description">
    <link rel="icon" href="<?= TEMPLATE ?>img/NW-bug .ico" type="image/x-icon">
    <link rel="stylesheet" href="<?= TEMPLATE ?>staff/normalize.css" type="text/css">
    <link rel="stylesheet" href="<?= TEMPLATE ?>staff/animate.css" type="text/css">
    <link rel="stylesheet" href="<?= TEMPLATE ?>stul.css" type="text/css">
    <link rel="stylesheet" href="<?= TEMPLATE ?>icofonts4/icofonts4.css" type="text/css">
    <link rel="stylesheet" href="<?= TEMPLATE ?>icofonts3/icofonts3.css" type="text/css">
    <link rel="stylesheet" href="<?= TEMPLATE ?>staff/icostyle5.css" type="text/css">
    <link rel="stylesheet" href="<?= TEMPLATE ?>staff/icofonts2.css" type="text/css">
    <link rel="stylesheet" href="<?= TEMPLATE ?>staff/iconstyle.css" type="text/css">
    <link rel="stylesheet" href="<?= TEMPLATE ?>css/style.min.css?ver=2" type="text/css">
    <link rel="stylesheet" href="<?= TEMPLATE ?>staff/leaflet.css" type="text/css">
</head>

<body>
    <header id="header" class="header">

        <!--   container       -->
        <?php if (empty($_GET['Object']) != true xor $_GET['DataType'] == "Creatures") {
        ?>
            <div class="container container_sidebar">
            <?php
        } else if ($_GET['AdressMain'] != "DataBase" && $_GET['AdressMain'] != "Build"  && $_GET['AdressMain'] != "Craft"  && $_GET['AdressMain'] != "authorization" && $_GET['AdressMain'] != "registration") {
            ?>
                <div class="container container_sidebar-Home">
                <?php
            } else {
                ?>
                    <div class="container ">
                    <?php
                }
                    ?>
                    <!--   container   end    -->

                    <div class="header__inner">
                        <nav class="nav">
                            <?php
                            $adress2 = 'http://newworldinfo/index.php?';
                            $AdressHome = 'Home';
                            $AdressDataBase = 'DataBase';
                            $AdressBuild = 'Build';
                            $AdressMap = 'Map';
                            $AdressNews = 'News';
                            $AdressGet = $Number = $_GET['Home'];
                            ?>
                            <div class="nav__logo-wrapper">
                                <?php
                                echo '<a  href="' . $adress2 . '&AdressMain=' . "$AdressHome" . '" class="nav__logo">';
                                ?>

                                <img src="<?= TEMPLATE ?>img/NW-bug.svg" alt="Logo" class="nav__img">
                                <span> New <span> World</span> </span>
                                </a>
                                <button id="nav__burger" class="nav__burger ">
                                    <span></span>
                                </button>
                            </div>
                            <div class="nav__wrapper">
                                <?php
                                echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '" class="nav__link">База Данных</a>';
                                ?>
                                <div class="database-box">
                                    <div class="database__overfow">
                                        <div class="database-links">
                                            <h2 class="database-links__title">База Данных</h2>
                                            <div class="wrapper">
                                                <div class="database-links__item">
                                                    <?php
                                                    $AllItems = "AllItems";
                                                    $Ammo = "Ammo";
                                                    $Armor = "Armor";
                                                    $Consumables = "Consumables";
                                                    $Weapons = "Weapons";
                                                    $Resources = "Resources";
                                                    $Abilities = "Abilities";
                                                    $Creatures = "Creatures";
                                                    $Dyes = "Dyes";
                                                    $Furniture = "Furniture";
                                                    $Gems = "Gems";
                                                    $Perks = "Perks";
                                                    $Quests = "Quests";
                                                    $Lore = "Lore";
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Ammo . '"class=" icon-arrow-bow database-links__main">Боеприпасы</a>';
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Armor . '"class=" icon-helm database-links__main">Броня</a>';

                                                    $HeaderClass = 'database-links__last';
                                                    $AllItemsadress =  $adress2 . '&AdressMain=DataBase&DataType=AllItems';
                                                    $Ammoadress =  $adress2 . '&AdressMain=DataBase&DataType=Ammo';
                                                    $Armoradress =  $adress2 . '&AdressMain=DataBase&DataType=Armor';
                                                    $Consumablesadress =  $adress2 . '&AdressMain=DataBase&DataType=Consumables';
                                                    $Weaponsadress =  $adress2 . '&AdressMain=DataBase&DataType=Weapons';
                                                    $Resourcesadress =  $adress2 . '&AdressMain=DataBase&DataType=Resources';
                                                    $Furnitureadress =  $adress2 . '&AdressMain=DataBase&DataType=Furniture';
                                                    $Gemsadress =  $adress2 . '&AdressMain=DataBase&DataType=Gems';
                                                    $Dyesadress =  $adress2 . '&AdressMain=DataBase&DataType=Dyes';
                                                    $Abilitiesadress =  $adress2 . '&AdressMain=DataBase&DataType=Abilities';
                                                    $Creaturesadress =  $adress2 . '&AdressMain=DataBase&DataType=Creatures';
                                                    $Questsadress =  $adress2 . '&AdressMain=DataBase&DataType=Quests';
                                                    // Броня
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Armoradress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Шлем' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Armoradress . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Нагрудник' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Armoradress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Перчатки' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Armoradress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second5" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Поножи' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Armoradress . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second6"  . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Обувь' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Armoradress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second7" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Амулеты' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Armoradress . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second8"  . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Серьги' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Armoradress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second9" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Кольца ' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .   '" href="' . $Armoradress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second10" . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Сумки' . '</a> ';



                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Consumables . '"class=" icon-bag  database-links__main">Расходники</a>';

                                                    // Расходники
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Consumablesadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Пища' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Consumablesadress . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Сырье' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Consumablesadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Зелье' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Consumablesadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second5" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Мазь' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Consumablesadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second6" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Осадные расходники' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Consumablesadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second7" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Зелье аванпоста' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Consumablesadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second8" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Пища  аванпоста' . '</a> ';
                                                    ?>
                                                </div>
                                                <div class="database-links__item">
                                                    <?php
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Weapons . '"class=" icon-axe  database-links__main">Оружие</a>';
                                                    // Оружие 
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Лук' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Посох огня' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Топор' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second5" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Посох жизни' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second6"  . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Мушкет' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second7" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Щит' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second8"  . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Меч' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second9" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Молот ' . '</a> ';

                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second10" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Рапира ' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second11" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Ледяная перчатка ' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second12" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Копье ' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second13" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Секира ' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second14" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Инструменты ' . '</a> ';


                                                    // Ресурсы
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Resources . '"class=" icon-resourse  database-links__main">Ресурсы</a>';


                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Resourcesadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Сырье' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Resourcesadress  . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Очищенное сырье' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Resourcesadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Алхимия' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Resourcesadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second5" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Компоненты' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Resourcesadress  . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second6"  . '&Filter3=' . "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Кулинария' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Resourcesadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second7" . '&Filter3=' .  "Third1" . '&Filter4=' .  "Fourth1" .  '">' . 'Перки' . '</a> ';

                                                    ?>
                                                </div>
                                                <div class="database-links__item">
                                                    <?php
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Abilities . '"class=" icon-all   database-links__main">Скиллы</a>';
                                                    // Скилы
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Abilitiesadress . '&WeaponAb=' .
                                                        "bow" .  '">' . 'Лук' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' .  $Abilitiesadress . '&WeaponAb=' .
                                                        "hatchet" .  '">' . 'Топор' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' .   $Abilitiesadress . '&WeaponAb=' .
                                                        "lifestaff" .  '">' . 'Посох жизни' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' .  $Abilitiesadress . '&WeaponAb=' .
                                                        "musket" .  '">' . 'Мушкет' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' .  $Abilitiesadress . '&WeaponAb=' .
                                                        "sword" .  '">' . 'Меч' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' .  $Abilitiesadress . '&WeaponAb=' .
                                                        "WarHammer" .   '">' . 'Молот' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Abilitiesadress . '&WeaponAb=' .
                                                        "rapier" .   '">' . 'Рапира' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' . $Abilitiesadress . '&WeaponAb=' .
                                                        "icegantel" .   '">' . 'Ледяная перчатка' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' .  $Abilitiesadress . '&WeaponAb=' .
                                                        "firestaff" .   '">' . 'Посох огня' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' .  $Abilitiesadress . '&WeaponAb=' .
                                                        "great_axe" .   '">' . 'Секира' . '</a> ';
                                                    echo '<a class="' . $HeaderClass .  '" href="' .  $Abilitiesadress . '&WeaponAb=' .
                                                        "spear" .   '">' . 'Копье' . '</a> ';
                                                    $F = $_GET['Filter'];


                                                    // Существа
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Creatures . '"class=" icon-creatures   database-links__main">Существа</a>';
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Dyes . '"class=" icon-bag   database-links__main">Красители</a>';
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Furniture . '"class=" icon-furnitur   database-links__main">Мебель</a>';
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Gems . '"class=" icon-ring   database-links__main">Гемы</a>';
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Perks . '"class=" icon-all   database-links__main">Перки</a>';
                                                    // echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Quests . '"class=" icon-all   database-links__main">Квесты</a>';
                                                    // echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Lore . '"class=" icon-all   database-links__main">Лор</a>';
                                                    ?>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="craft-links">
                                            <h2 class="craft-links__title">Крафт</h2>
                                            <div class="wrapper">
                                                <div class="craft-links__item">
                                                    <!-- <a href="#" class=" icon-all craft-links__main">Калькулятор</a> -->
                                                    <?php
                                                    $Arcana = "Arcana";
                                                    $Armoring = "Armoring";
                                                    $Cooking = "Cooking";
                                                    $Engineering = "Engineering";
                                                    $Furnishing = "Furnishing";
                                                    $Jewelcrafting = "Jewelcrafting";
                                                    $Camping = "Camping";
                                                    $Refining = "Refining";
                                                    $Weaponsmithing = "Weaponsmithing";
                                                    $AdressCraft = "Craft";
                                                    $HeaderClassCraft = 'craft-links__last';

                                                    $Arcanaadress =  $adress2 . '&AdressMain=Craft&DataType=Arcana';
                                                    $Armoringadress =  $adress2 . '&AdressMain=Craft&DataType=Armoring';
                                                    $Cookingadress =  $adress2 . '&AdressMain=Craft&DataType=Cooking';
                                                    $Engineeringadress =  $adress2 . '&AdressMain=Craft&DataType=Engineering';
                                                    $Furnishing =  $adress2 . '&AdressMain=Craft&DataType=Furnishing';
                                                    $Jewelcraftingsadress =  $adress2 . '&AdressMain=Craft&DataType=Jewelcrafting';
                                                    $Campingadress =  $adress2 . '&AdressMain=Craft&DataType=Camping';
                                                    $Refiningadress =  $adress2 . '&AdressMain=Craft&DataType=Refining';
                                                    $Weaponsmithingadress =  $adress2 . '&AdressMain=Craft&DataType=Weaponsmithing';
                                                    $AdressCraftadress =  $adress2 . '&AdressMain=Craft&DataType=AdressCraft';
                                                    $Creaturesadress =  $adress2 . '&AdressMain=Craft&DataType=Arcana';
                                                    $Questsadress =  $adress2 . '&AdressMain=Craft&DataType=Arcana';


                                                    // Кемпинг
                                                    // echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressCraft . '&DataType=' . $Camping . '"class=" icon-camping craft-links__main">Кемпинг</a>';

                                                    // Аркана
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressCraft . '&DataType=' . $Arcana . '"class=" icon-arcane craft-links__main">Аркана</a>';

                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' . $Arcanaadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" .  '">' . 'Зелье' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' . $Arcanaadress  . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" .  '">' . 'Микстура' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' . $Arcanaadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" .  '">' . 'Ледяная перчатка' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' . $Arcanaadress  . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second5"  . '&Filter3=' . "Third1" .  '">' . 'Посох огня' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' . $Arcanaadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second6" . '&Filter3=' .  "Third1" .  '">' . 'Посох жизни' . '</a> ';

                                                    // Кузнечное дело
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressCraft . '&DataType=' . $Armoring . '"class=" icon-create-armor craft-links__main">Кузнечное дело</a>';

                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Armoringadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" .  '">' . 'Легкий' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Armoringadress  . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" .  '">' . 'Средний' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Armoringadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" .  '">' . 'Тяжелый' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Armoringadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second5" . '&Filter3=' .  "Third1" .  '">' . 'Шлем' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Armoringadress  . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second6"  . '&Filter3=' . "Third1" .  '">' . 'Нагрудник' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Armoringadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second7" . '&Filter3=' .  "Third1" .  '">' . 'Перчатки' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Armoringadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second8" . '&Filter3=' .  "Third1" .  '">' . 'Поножи' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Armoringadress  . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second9"  . '&Filter3=' . "Third1" .  '">' . 'Обувь' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Armoringadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second10" . '&Filter3=' .  "Third1" .  '">' . 'Сумки' . '</a> ';
                                                    // Кулинария
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressCraft . '&DataType=' . $Cooking . '"class=" icon-cooking  craft-links__main">Кулинария</a>';

                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' . $Cookingadress  . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" .  '">' . 'Еда' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' . $Cookingadress  . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" .  '">' . 'Красители' . '</a> ';
                                                    ?>
                                                </div>
                                                <div class="craft-links__item">
                                                    <?php
                                                    // Инженерия
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressCraft . '&DataType=' . $Engineering . '"class=" icon-bow craft-links__main">Инженерия</a>';

                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Engineeringadress   . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" .  '">' . 'Боеприпасы' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Engineeringadress   . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" .  '">' . 'Инструменты' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Engineeringadress   . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" .  '">' . 'Лук' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Engineeringadress   . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second5" . '&Filter3=' .  "Third1" .  '">' . 'Мушкет' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Engineeringadress   . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second6" . '&Filter3=' .  "Third1" .  '">' . 'Топор' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Engineeringadress   . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second7" . '&Filter3=' .  "Third1" .  '">' . 'Копье' . '</a> ';

                                                    // Крафт мебели
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressCraft . '&DataType=' . $Furnishing . '"class=" icon-furnitur craft-links__main">Крафт мебели</a>';

                                                    // Ювелирное дело
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressCraft . '&DataType=' . $Jewelcrafting . '"class=" icon-ring craft-links__main">Ювелирное дело</a>';

                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Jewelcraftingsadress   . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" .  '">' . 'Амулеты' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Jewelcraftingsadress   . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" .  '">' . 'Серьги' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Jewelcraftingsadress   . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" .  '">' . 'Кольца' . '</a> ';

                                                    // Оружейное дело
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressCraft . '&DataType=' . $Weaponsmithing . '"class=" icon-create-armor craft-links__main">Оружейное дело</a>';

                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Weaponsmithingadress    . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" .  '">' . 'Секира' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Weaponsmithingadress    . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" .  '">' . 'Щит' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Weaponsmithingadress    . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" .  '">' . 'Меч' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Weaponsmithingadress    . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second5" . '&Filter3=' .  "Third1" .  '">' . 'Молот' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Weaponsmithingadress    . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second6" . '&Filter3=' .  "Third1" .  '">' . 'Рапира' . '</a> ';

                                                    // Очистка
                                                    echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressCraft . '&DataType=' . $Refining . '"class=" icon-refining craft-links__main">Обработка</a>';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Refiningadress    . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second2" . '&Filter3=' .  "Third1" .  '">' . 'Кожевенное дело' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Refiningadress    . '&page=' . "1" . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second3"  . '&Filter3=' . "Third1" .  '">' . 'Выплавка' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Refiningadress    . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second4" . '&Filter3=' .  "Third1" .  '">' . 'Резка камня' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Refiningadress    . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second5" . '&Filter3=' .  "Third1" .  '">' . 'Ткачество' . '</a> ';
                                                    echo '<a class="' . $HeaderClassCraft .  '" href="' .  $Refiningadress    . '&page=' . "1"  . '&Filter=' . "SelectFirst" . '&Filter2=' . "Second6" . '&Filter3=' .  "Third1" .  '">' . 'Деревообработка' . '</a> ';
                                                    ?>
                                                    <!-- <a href="#" class="craft-links__last">Кожевенное дело</a>
                                        <a href="#" class="craft-links__last">Выплавка</a>
                                        <a href="#" class="craft-links__last">Резка камня</a>
                                        <a href="#" class="craft-links__last">Ткачество</a>
                                        <a href="#" class="craft-links__last">Деревообработка</a> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                            echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressBuild . '" class="nav__link">Билды</a>';
                            echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressMap . '" class="nav__link">Карта</a>';
                            echo '<a  href="' . $adress2 . '&AdressMain=' . $AdressNews . '" class="nav__link">Новости</a>';
                            ?>
                            <a href="#" id="call_back" class="nav__link">Обратная связь</a>

                            <!-- out -->
                            <?php
                            if (empty($_COOKIE['user']) != true) {
                            ?>
                                <a href="/index.php?&AdressMain=registration&out=yes" id="call_back" class="nav__link mobile">Выйти из аккаунта</a>
                            <?php
                            } else if (empty($_COOKIE['user']) == true) {
                            ?>
                                <a href="/index.php?&AdressMain=authorization" id="call_back" class="nav__link mobile">Авторизация</a>
                            <?php
                            } ?>
                            <!-- out end -->
                        </nav>
                        <div class="header__account">
                            <?php
                            if ($_GET['out'] == "yes") {
                            ?>
                                <script src="<?= TEMPLATE ?>staff/jquery-3.5.1.min.js"></script>
                                <script>
                                    var stat_constitution = "constitution";

                                    $.ajax({
                                        url: "tamplate/default/account/delet.php",
                                        type: "POST",
                                        data: {
                                            stat_constitution: stat_constitution

                                        },
                                        success: function(responseText) {
                                            console.log("alert");
                                        }
                                    });
                                </script>
                            <?php
                                echo '<a href="' . $adress2 . '&AdressMain=authorization" class=" header__link"><span>Авторизация</span></a>';
                                echo '<a href="' . $adress2 . '&AdressMain=registration" class=" header__link"><span>Регистрация</span></a>';
                            } else if (empty($_COOKIE['user']) == true) {
                                echo '<a href="' . $adress2 . '&AdressMain=authorization" class=" header__link"><span>Авторизация</span></a>';
                                echo '<a href="' . $adress2 . '&AdressMain=registration" class=" header__link"><span>Регистрация</span></a>';
                            } else {
                                echo '<div class="header__account-first icon-user">
                                <div class="header__account-list">
                                    <a href="/index.php?&AdressMain=registration&setting=yes" class="header__account-item">Настройки</a>
                                    <a href="/index.php?&AdressMain=registration&out=yes" class="header__account-item">Выйти</a>
                                </div>
                             </div>';
                            }

                            ?>
                            <!-- <a href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '" class=" header__link"><span>Авторизация</span></a>
                            <a href="#" class=" header__link"><span>Регистрация</span></a> -->
                        </div>
                    </div>
                    </div>
    </header>