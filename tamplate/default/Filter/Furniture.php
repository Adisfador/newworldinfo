<!--! Мебель -->
<div class="filter">
    <div class="filter__item">
        <div class="filter__box">
        <?php
            $active = "active";
            if ($_GET['Filter'] == "First1" xor $_GET['Filter'] == "First2" xor $_GET['Filter'] == "First3" xor $_GET['Filter'] == "First4" xor $_GET['Filter'] == "First5" xor $_GET['Filter'] == "First6" xor $_GET['Filter'] == "First7" xor $_GET['Filter'] == "First8" xor $_GET['Filter'] == "First9") {
            } else {
                $_GET['Filter'] = "First8";
                $F = $_GET['Filter'];
            }

            if ($_GET['Filter'] == "First1" ) {
                $FirstActive1 = $active;
            } else if ($_GET['Filter'] == "First2" ) {
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
        echo '<a class="' . $class . $active .  '" href="' .  $AllItemsadress. '&page=' . "1" . '&Filter=' . "First1" .  '&Filter3=' . "Third1" .  '&Filter4=' .  'Fourth1' . '&Filter5=' . "Filter5_Reset" . '&Reset=' . "Rezet" . '">' . 'Сброс Фильтров' . '</a> ';

        $R = $_GET['Reset'];

        ?>
    </div>
</div>
<!--! Мебель end -->
<?php
    if ($R == "Rezet") {
        $_GET['Reset'] = "";
        $R = "";
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

    $name = "furniture";
    $result = mysqli_query($goods, "SELECT * FROM  $name    LIMIT  $p    ");

    $count = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(*)   FROM $name   "));

    $countnumber = $count[0];

    $firstpages = $countnumber / $quantity;
    $pages = ceil($firstpages);

    while ($tettabl = mysqli_fetch_assoc($result)) {
        $bases[] = $tettabl;
    }
    
    ?>