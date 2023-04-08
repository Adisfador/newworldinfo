<!--! Craft -->
<div class="Craft">
    <div class="Craft__item">
        <div class="Craft__box">
            <?php
            $active = "active";
            if ($_GET['Filter'] == "First1" xor $_GET['Filter'] == "First2" xor $_GET['Filter'] == "First3" xor $_GET['Filter'] == "First4" xor $_GET['Filter'] == "First5" xor $_GET['Filter'] == "First6" xor $_GET['Filter'] == "First7" xor $_GET['Filter'] == "First8" xor $_GET['Filter'] == "First9") {
            } else {
                $_GET['Filter'] = "First8";
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


            if ($_GET['Filter3'] == "Third1" xor $_GET['Filter3'] == "Third2" xor $_GET['Filter3'] == "Third3" xor $_GET['Filter3'] == "Third4" xor $_GET['Filter3'] == "Third5") {
            } else {
                $_GET['Filter3'] = "Third1";
                $F3 = $_GET['Filter3'];
            }

            if ($_GET['Filter3'] == "Third1") {
                $ThirdActive1 = $active;
            } else if ($_GET['Filter3'] == "Third2") {
                $ThirdActive2 = $active;
            } else if ($_GET['Filter3'] == "Third3") {
                $ThirdActive3 = $active;
            } else if ($_GET['Filter3'] == "Third4") {
                $ThirdActive4 = $active;
            } else if ($_GET['Filter3'] == "Third5") {
                $ThirdActive5 = $active;
            }




            // Первый фильтр
            $class = "Craft__link ";
            echo '<a class="' . $class . $FirstActive1 .  '" href="' . $Arcanaadress . '&page=' . "1" . '&Filter=' . "First1"    . '&Filter3=' .  Get__Filter3()  .  '">' . 'Аркана' . '</a> ';
            echo '<a class="' . $class . $FirstActive2 .  '" href="' .  $Armoringadress . '&page=' . "1"  . '&Filter=' .
                "First2"  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Кузнечное дело' . '</a> ';
            echo '<a class="' . $class . $FirstActive3 .  '" href="' . $Cookingadress . '&page=' . "1"  . '&Filter=' .
                "First3"   . '&Filter3=' .  Get__Filter3()  .  '">' . 'Кулинария' .  '</a> ';
            echo '<a class="' . $class . $FirstActive4 .  '" href="' . $Engineeringadress . '&page=' . "1"  . '&Filter=' .
                "First4"   . '&Filter3=' .  Get__Filter3()  .  '">' . 'Инженерия' . '</a> ';
            echo '<a class="' . $class . $FirstActive5 .  '" href="' . $Furnishing . '&page=' . "1"  . '&Filter=' .
                "First5"   . '&Filter3=' .  Get__Filter3()  .  '">' . 'Крафт мебели' . '</a> ';
            echo '<a class="' . $class . $FirstActive6 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1"  . '&Filter=' .
                "First6"   . '&Filter3=' .  Get__Filter3()  .  '">' . 'Ювелирное дело' . '</a> ';
            echo '<a class="' . $class . $FirstActive7 .  '" href="' .  $Weaponsmithingadress  . '&page=' . "1"  . '&Filter=' .
                "First7"  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Оружейное дело' . '</a> ';
            // echo '<a class="' . $class . $FirstActive8 .  '" href="' . $Campingadress . '&page=' . "1"  . '&Filter=' .
            //     "First8"  . '&Filter3=' .  Get__Filter3()  .   '">' . 'Кемпинг' . '</a> ';
            echo '<a class="' . $class . $FirstActive9 .  '" href="' . $Refiningadress . '&page=' . "1"  . '&Filter=' .
                "First9"  . '&Filter3=' .  Get__Filter3()  .   '">' . 'Обработка' . '</a> ';
            $F = $_GET['Filter'];
            function Get__Filter()
            {
                $G = $_GET['Filter'];
                return $G;
            }
            ?>

        </div>
    </div>
    <div class="Craft__item">
        <div class="Craft__box">
            <?php

            // Третий фильтр
            echo '<a class="' . $class . $ThirdActive1 .  '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F   . '&Filter3=' .  "Third1"  .  '">' . 'Все грейды' . '</a> ';
            echo '<a class="' . $class . $ThirdActive2 .  '" href="' . $Campingadress . '&page=' . "1"  . '&Filter=' . $F  . '&Filter3=' .  "Third2"  .  '">' . 'Г2' . '</a> ';
            echo '<a class="' . $class . $ThirdActive3 .  '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F   . '&Filter3=' .  "Third3"  .  '">' . 'Г3' . '</a> ';
            echo '<a class="' . $class . $ThirdActive4 .  '" href="' . $Campingadress . '&page=' . "1"  . '&Filter=' . $F  . '&Filter3=' .  "Third4"  .  '">' . 'Г4' . '</a> ';
            echo '<a class="' . $class . $ThirdActive5 .  '" href="' . $Campingadress . '&page=' . "1"  . '&Filter=' . $F  . '&Filter3=' .  "Third5"  .  '">' . 'Г5' . '</a> ';

            $F3 = $_GET['Filter3'];
            function Get__Filter3()
            {
                $G = $_GET['Filter3'];
                return $G;
            }
            ?>
        </div>
    </div>
</div>
<!--! Craft end -->
<!--! Tablecraft -->
<div class="Tablecraft">
    <div class="Tablecraft__rows">
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
            }

            $class2 = "Tablecraft__link table__link-undreline";
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown2" . '">' . 'Категория' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown3" . '">' . 'Подкатегория' . '</a> ';
            ?>
            <div class="Tablecraft__link">Ингридиенты</div>
        <?php
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown4" . '">' . 'Грейд' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive5 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown5" . '">' . 'Уровень' . '</a> ';
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
            }
            $class2 = "Tablecraft__link table__link-undreline";
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP2" . '">' . 'Категория' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP3" . '">' . 'Подкатегория' . '</a> ';
            ?>
            <div class="Tablecraft__link">Ингридиенты</div>
        <?php
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP4" . '">' . 'Грейд' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive5 .   '" href="' . $Campingadress . '&page=' . "1" . '&Filter=' . $F  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP5" . '">' . 'Уровень' . '</a> ';
        }


        $F5 = $_GET['Filter5'];
        function Get__Filter5()
        {
            $G = $_GET['Filter5'];
            return $G;
        }

        ?>
    </div>

    <?php
    // echo '<div style="color:white;"> '.$F.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F3.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F5.' </div>';