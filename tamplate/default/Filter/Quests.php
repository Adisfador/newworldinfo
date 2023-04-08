<!--! Броня -->
<div class="filter">
    <div class="filter__item filter__item--second ">
        <?php
        $active = "active";
        if ($_GET['Filter'] == "First1" xor $_GET['Filter'] == "First2" xor $_GET['Filter'] == "First3" xor $_GET['Filter'] == "First4" xor $_GET['Filter'] == "First5" xor $_GET['Filter'] == "First6" xor $_GET['Filter'] == "First7" xor $_GET['Filter'] == "First8" xor $_GET['Filter'] == "First9" xor $_GET['Filter'] == "First10" xor $_GET['Filter'] == "First11" xor $_GET['Filter'] == "First12" xor $_GET['Filter'] == "First13") {
        } else {
            $_GET['Filter'] = "First1";
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
        } else if ($_GET['Filter'] == "First10") {
            $FirstActive10 = $active;
        } else if ($_GET['Filter'] == "First11") {
            $FirstActive11 = $active;
        } else if ($_GET['Filter'] == "First12") {
            $FirstActive12 = $active;
        } else if ($_GET['Filter'] == "First13") {
            $FirstActive13 = $active;
        }





        // Первый фильтр
        $class = "filter__link ";
        echo '<a class="' . $class . $FirstActive1 .  '" href="' . $Questsadress . '&page=' . "1" . '&Filter=' . "First1"   .  '">' . 'Все территории' . '</a> ';
        echo '<a class="' . $class . $FirstActive2 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First2" .  '">' . 'Shattered Mountain' . '</a> ';
        echo '<a class="' . $class . $FirstActive3 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First3"  .  '">' . 'Brightwood' .  '</a> ';
        echo '<a class="' . $class . $FirstActive4 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First4"  .  '">' . 'Great Cleave' . '</a> ';
        echo '<a class="' . $class . $FirstActive5 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First5"  .  '">' . 'Everfall' . '</a> ';
        echo '<a class="' . $class . $FirstActive6 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First6"  .  '">' . "Monarch's Bluffs " . '</a> ';
        echo '<a class="' . $class . $FirstActive7 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First7" .  '">' . 'Windsward' . '</a> ';
        echo '<a class="' . $class . $FirstActive8 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First8" .   '">' . 'First Light' . '</a> ';
        echo '<a class="' . $class . $FirstActive9 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First9" .   '">' . 'Edengrove' . '</a> ';
        echo '<a class="' . $class . $FirstActive10 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First10" .   '">' . 'Cutlass Keys' . '</a> ';
        echo '<a class="' . $class . $FirstActive11 .  '" href="' . $Questsadress  . '&page=' . "1"  . '&Filter=' .
            "First11" .  '">' . 'Mourningdale' . '</a> ';
        echo '<a class="' . $class . $FirstActive12 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First12" .   '">' . "Weaver's Fen" . '</a> ';
        echo '<a class="' . $class . $FirstActive13 .  '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' .
            "First13" .   '">' . 'Restless Shore' . '</a> ';
        $F = $_GET['Filter'];
        function Get__Filter()
        {
            $G = $_GET['Filter'];
            return $G;
        }
        ?>
    </div>
</div>
<!--! Броня end -->

<!--! TableDataQuests -->
<div class="TableDataQuests">
    <div class="TableDataQuests__rows">
        <?php

        // Пятый фильтр
        $active1 = " active1";
        $active2 = " active2";
        $gg = Get__Filter5();
        if ($_GET['Filter5'] == "FifthUP1" xor $_GET['Filter5'] == "FifthUP2" xor $_GET['Filter5'] == "FifthUP3") {
            if ($gg == "FifthUP1") {
                $FifthActive1 = $active1;
            } else if ($gg == "FifthUP2") {
                $FifthActive2 = $active1;
            } else if ($gg == "FifthUP3") {
                $FifthActive3 = $active1;
            }  else if ($gg == "FifthUP4") {
                $FifthActive4 = $active1;
            }

            $class2 = "TableDataQuests__link TableDataQuests__link-undreline";
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' . $F   . '&Filter5=' . "FifthDown1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' . $F   . '&Filter5=' . "FifthDown2" . '">' . 'Уровень' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' . $F   . '&Filter5=' . "FifthDown3" . '">' . 'Треб. Уровень' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' . $F   . '&Filter5=' . "FifthDown4" . '">' . 'Территория' . '</a> ';
        } else {
            if ($gg == "FifthDown1") {
                $FifthActive1 = $active2;
            } else if ($gg == "FifthDown2") {
                $FifthActive2 = $active2;
            } else if ($gg == "FifthDown3") {
                $FifthActive3 = $active2;
            } else if ($gg == "FifthDown4") {
                $FifthActive4 = $active2;
            }

            $class2 = "TableDataQuests__link TableDataQuests__link-undreline";
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' . $F   . '&Filter5=' . "FifthUP1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' . $F   . '&Filter5=' . "FifthUP2" . '">' . 'Уровень' . '</a> ';

            echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' . $F   . '&Filter5=' . "FifthUP3" . '">' . 'Треб. Уровень' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Questsadress . '&page=' . "1"  . '&Filter=' . $F   . '&Filter5=' . "FifthUP4" . '">' . 'Территория' . '</a> ';
        }


        $F5 = $_GET['Filter5'];
        function Get__Filter5()
        {
            $G = $_GET['Filter5'];
            return $G;
        }

        ?>
        <div class="TableDataQuests__link">Хп</div>
    </div>

    <?php
    if ($R == "Rezet") {
        $_GET['Reset'] = "";
        $R = "";
    }


    if ($F == "SelectFirst") {
        $SelectFilter = 'id <6';
    } else if ($F == "SelectSecond") {
        $SelectFilter = 'id <3';
    }
    if ($F3 == "First") {
        $SelectFilter3 = 'id >1';
    } else if ($F2 == "Second") {
        $SelectFilter3 = 'id >2';
    }

    // echo '<div style="color:white;"> ' . $F . ' </div>';
    // echo "<br>";
    // echo "<br>";
    // echo '<div style="color:white;"> ' . $F5 . ' </div>';
    ?>