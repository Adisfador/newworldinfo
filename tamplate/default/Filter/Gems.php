<!--! Мебель -->
<div class="filter">
    <div class="filter__item">
        <div class="filter__box">
            <?php
            $active = "active";
            if ($_GET['Filter'] == "First1" xor $_GET['Filter'] == "First2" xor $_GET['Filter'] == "First3" xor $_GET['Filter'] == "First4" xor $_GET['Filter'] == "First5" xor $_GET['Filter'] == "First6" xor $_GET['Filter'] == "First7" xor $_GET['Filter'] == "First8" xor $_GET['Filter'] == "First9") {
            } else {
                $_GET['Filter'] = "First9";
                $F = $_GET['Filter'];
            }

            if ($_GET['Filter'] == "First1") {
                $FirstActive1 = $active;
            } else if ($_GET['Filter'] == "First2") {
                $FirstActive2 = $active;
            } else if ($_GET['Filter'] == "First3") {
                $FirstActive3 = $active;
            } else if ($_GET['Filter'] == "First4") {
                $FirstActive4 = $active;
            } else if ($_GET['Filter'] == "First5") {
                $FirstActive5 = $active;
            } else if ($_GET['Filter'] == "First6") {
                $FirstActive6 = $active;
            } else if ($_GET['Filter'] == "First7") {
                $FirstActive7 = $active;
            } else if ($_GET['Filter'] == "First8") {
                $FirstActive8 = $active;
            } else if ($_GET['Filter'] == "First9") {
                $FirstActive9 = $active;
            }





             // Первый фильтр
             $class = "filter__link ";
             echo '<a class="' . $class . $FirstActive1 .  '" href="' . $AllItemsadress. '&page=' . "1" . '&Filter=' . "First1"  .  '">' . 'Все итемы' . '</a> ';
             echo '<a class="' . $class . $FirstActive2 .  '" href="' . $adress2 . '&AdressMain=' . $AdressDataBase . '&DataType=' . $Ammo . '&page=' . "1"  . '&Filter=' .
                 "First2".  '">' . 'Боеприпасы' . '</a> ';
             echo '<a class="' . $class . $FirstActive3 .  '" href="' . $Armoradress . '&page=' . "1"  . '&Filter=' .
                 "First3" . '&Filter2=' . "Second1" .  '">' . 'Броня' .  '</a> ';
             echo '<a class="' . $class . $FirstActive4 .  '" href="' . $Consumablesadress . '&page=' . "1"  . '&Filter=' .
                 "First4" .  '">' . 'Расходники' . '</a> ';
             echo '<a class="' . $class . $FirstActive5 .  '" href="' .  $Weaponsadress . '&page=' . "1"  . '&Filter=' .
                 "First5" .  '">' . 'Оружие' . '</a> ';
             echo '<a class="' . $class . $FirstActive6 .  '" href="' . $Resourcesadress . '&page=' . "1"  . '&Filter=' .
                 "First6" .  '">' . 'Ресурсы' . '</a> ';
             echo '<a class="' . $class . $FirstActive7 .  '" href="' . $Dyesadress  . '&page=' . "1"  . '&Filter=' .
                 "First7".  '">' . 'Красители' . '</a> ';
             echo '<a class="' . $class . $FirstActive8 .  '" href="' . $Furnitureadress . '&page=' . "1"  . '&Filter=' .
                 "First8".   '">' . 'Мебель' . '</a> ';
             echo '<a class="' . $class . $FirstActive9 .  '" href="' . $Gemsadress . '&page=' . "1"  . '&Filter=' .
                 "First9".   '">' . 'Гемы' . '</a> ';
            $F = $_GET['Filter'];
            ?>
        </div>
        <?php
        // Сброс для фильтров
        echo '<a class="' . $class . $active .  '" href="' .  $AllItemsadress . '&page=' . "1" . '&Filter=' . "First1" .  '&Filter3=' . "Third1" .  '&Filter4=' .  'Fourth1' . '&Filter5=' . "Filter5_Reset" . '&Reset=' . "Rezet" . '">' . 'Сброс Фильтров' . '</a> ';

        $R = $_GET['Reset'];

        ?>
    </div>
</div>
<!--! Мебель end -->
<div class="table">
    <div class="table__rows">
        <?php

        // Пятый фильтр
        $active1 = " active1";
        $active2 = " active2";
        $gg = Get__Filter5();
        if ($_GET['Filter5'] == "FifthUP1" xor $_GET['Filter5'] == "FifthUP2" xor $_GET['Filter5'] == "FifthUP3" xor $_GET['Filter5'] == "FifthUP4" xor $_GET['Filter5'] == "FifthUP5" xor $_GET['Filter5'] == "FifthUP6") {
            if ($gg == "FifthUP1") {
                $FifthActive1 = $active1;
            } else if ($gg == "FifthUP2") {
                $FifthActive2 = $active1;
            } else if ($gg == "FifthUP3") {
                $FifthActive3 = $active1;
            } else if ($gg == "FifthUP4") {
                $FifthActive4 = $active1;
            } else if ($gg == "FifthUP5") {
                $FifthActive5 = $active1;
            } else if ($gg == "FifthUP6") {
                $FifthActive6 = $active1;
            }

            $class2 = "table__link table__link-undreline";
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthDown1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthDown2" . '">' . 'Слот' . '</a> ';

        ?>

            <div class="table__link">Перки</div>
        <?php
            echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthDown3" . '">' . 'Грейд' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthDown4" . '">' . 'Гир скор' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive5 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthDown5" . '">' . 'Уровень' . '</a> ';
            // echo '<a class="' . $class2 . $FifthActive6 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthDown6" .  '">' . 'Перс при получ' . '</a> ';
        } else {
            if ($gg == "FifthDown1") {
                $FifthActive1 = $active2;
            } else if ($gg == "FifthDown2") {
                $FifthActive2 = $active2;
            } else if ($gg == "FifthDown3") {
                $FifthActive3 = $active2;
            } else if ($gg == "FifthDown4") {
                $FifthActive4 = $active2;
            } else if ($gg == "FifthDown5") {
                $FifthActive5 = $active2;
            } else if ($gg == "FifthDown6") {
                $FifthActive6 = $active2;
            }
            $class2 = "table__link table__link-undreline";
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthUP1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthUP2" . '">' . 'Слот' . '</a> ';

        ?>

            <div class="table__link">Перки</div>
        <?php
            echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthUP3" . '">' . 'Грейд' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthUP4" . '">' . 'Гир скор' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive5 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthUP5" . '">' . 'Уровень' . '</a> ';
            // echo '<a class="' . $class2 . $FifthActive6 .   '" href="' . $Gemsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter5=' . "FifthUP6" .  '">' . 'Перс при получ' . '</a> ';
        }


        $F5 = $_GET['Filter5'];
        function Get__Filter5()
        {
            $G = $_GET['Filter5'];
            return $G;
        }

        ?>
        <!-- <div class="table__link">Создается</div> -->
    </div>

    <?php
    if ($R == "Rezet") {
        $_GET['Reset'] = "";
        $R = "";
    }


    
    //5
    if ($F5 == "FifthUP1") {
        $SelectFilter5 = "ORDER BY Name";
    } else if ($F5 == "FifthUP2") {
        $SelectFilter5 = "ORDER BY Slot ASC";
    } else if ($F5 == "FifthUP3") {
        $SelectFilter5 = "ORDER BY Tier";
    } else if ($F5 == "FifthUP4") {
        $SelectFilter5 = "ORDER BY Gear_score";
    } else if ($F5 == "FifthUP5") {
        $SelectFilter5 = "ORDER BY Level";
    } else if ($F5 == "FifthUP6") {
        $SelectFilter5 = "ORDER BY BoP";
    } 

    if ($F5 == "FifthDown1") {
        $SelectFilter5 = "ORDER BY Name DESC";
    } else if ($F5 == "FifthDown2") {
        $SelectFilter5 = "ORDER BY Slot DESC";
    } else if ($F5 == "FifthDown3") {
        $SelectFilter5 = "ORDER BY Tier DESC";
    } else if ($F5 == "FifthDown4") {
        $SelectFilter5 = "ORDER BY Gear_score  DESC";
    } else if ($F5 == "FifthDown5") {
        $SelectFilter5 = "ORDER BY Level DESC";
    } else if ($F5 == "FifthDown6") {
        $SelectFilter5 = "ORDER BY BoP DESC";
    } 

    $F3 = $_GET['Filter3'];
    function Get__Filter3()
    {
        $G = $_GET['Filter3'];
        return $G;
    }
    $F4 = $_GET['Filter4'];
    function Get__Filter4()
    {
        $G = $_GET['Filter4'];
        return $G;
    }
    // echo '<div style="color:white;"> '.$F.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F2.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F3.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F4.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F5.' </div>';

    $name = "gems";
    $result = mysqli_query($goods, "SELECT * FROM  $name    $SelectFilter5 LIMIT  $p    ");

    $count = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(*)   FROM $name   "));

    $countnumber = $count[0];

    $firstpages = $countnumber / $quantity;
    $pages = ceil($firstpages);

    while ($tettabl = mysqli_fetch_assoc($result)) {
        $bases[] = $tettabl;
    }
    ?>