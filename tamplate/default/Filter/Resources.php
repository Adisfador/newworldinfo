<!--! Ресурсы  -->
<div class="filter">
    <div class="filter__item">
        <div class="filter__box">
            <?php
            $active = "active";
            if ($_GET['Filter'] == "First1" xor $_GET['Filter'] == "First2" xor $_GET['Filter'] == "First3" xor $_GET['Filter'] == "First4" xor $_GET['Filter'] == "First5" xor $_GET['Filter'] == "First6" xor $_GET['Filter'] == "First7" xor $_GET['Filter'] == "First8" xor $_GET['Filter'] == "First9") {
            } else {
                $_GET['Filter'] = "First6";
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

            if ($_GET['Filter2'] == "Second1" xor $_GET['Filter2'] == "Second2" xor $_GET['Filter2'] == "Second3" xor $_GET['Filter2'] == "Second4" xor $_GET['Filter2'] == "Second5" xor $_GET['Filter2'] == "Second6" xor $_GET['Filter2'] == "Second7") {
            } else {
                $_GET['Filter2'] = "Second1";
                $F2 = $_GET['Filter2'];
            }

            if ($_GET['Filter2'] == "Second1") {
                $SecondActive1 = $active;
            } else if ($_GET['Filter2'] == "Second2") {
                $SecondActive2 = $active;
            } else if ($_GET['Filter2'] == "Second3") {
                $SecondActive3 = $active;
            } else if ($_GET['Filter2'] == "Second4") {
                $SecondActive4 = $active;
            } else if ($_GET['Filter2'] == "Second5") {
                $SecondActive5 = $active;
            } else if ($_GET['Filter2'] == "Second6") {
                $SecondActive6 = $active;
            } else if ($_GET['Filter2'] == "Second7") {
                $SecondActive7 = $active;
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
            if ($_GET['Filter4'] == "Fourth1" xor $_GET['Filter4'] == "Fourth2" xor $_GET['Filter4'] == "Fourth3" xor $_GET['Filter4'] == "Fourth4" xor $_GET['Filter4'] == "Fourth5" xor $_GET['Filter4'] == "Fourth6") {
            } else {
                $_GET['Filter4'] = "Fourth1";
                $F4 = $_GET['Filter4'];
            }

            if ($_GET['Filter4'] == "Fourth1") {
                $FourthActive1 = $active;
            } else if ($_GET['Filter4'] == "Fourth2") {
                $FourthActive2 = $active;
            } else if ($_GET['Filter4'] == "Fourth3") {
                $FourthActive3 = $active;
            } else if ($_GET['Filter4'] == "Fourth4") {
                $FourthActive4 = $active;
            } else if ($_GET['Filter4'] == "Fourth5") {
                $FourthActive5 = $active;
            } else if ($_GET['Filter4'] == "Fourth6") {
                $FourthActive6 = $active;
            }



            // Первый фильтр
            $class = "filter__link ";
            echo '<a class="' . $class . $FirstActive1 .  '" href="' . $AllItemsadress . '&page=' . "1" . '&Filter=' . "First1"  .   '&Filter3=' . Get__Filter3()  . '&Filter4=' .  Get__Filter4() .  '">' . 'Все итемы' . '</a> ';
            echo '<a class="' . $class . $FirstActive2 .  '" href="' . $Ammoadress . '&page=' . "1"  . '&Filter=' .
                "First2" .  '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Боеприпасы' . '</a> ';
            echo '<a class="' . $class . $FirstActive3 .  '" href="' . $Armoradress . '&page=' . "1"  . '&Filter=' .
                "First3" .   '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Броня' .  '</a> ';
            echo '<a class="' . $class . $FirstActive4 .  '" href="' . $Consumablesadress . '&page=' . "1"  . '&Filter=' .
                "First4" .   '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Расходники' . '</a> ';
            echo '<a class="' . $class . $FirstActive5 .  '" href="' . $Weaponsadress . '&page=' . "1"  . '&Filter=' .
                "First5" .   '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Оружие' . '</a> ';
            echo '<a class="' . $class . $FirstActive6 .  '" href="' . $Resourcesadress . '&page=' . "1"  . '&Filter=' .
                "First6" .   '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Ресурсы' . '</a> ';
            echo '<a class="' . $class . $FirstActive7 .  '" href="' . $Dyesadress  . '&page=' . "1"  . '&Filter=' .
                "First7" .  '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Красители' . '</a> ';
            echo '<a class="' . $class . $FirstActive8 .  '" href="' . $Furnitureadress . '&page=' . "1"  . '&Filter=' .
                "First8" .  '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .   '">' . 'Мебель' . '</a> ';
            echo '<a class="' . $class . $FirstActive9 .  '" href="' . $Gemsadress . '&page=' . "1"  . '&Filter=' .
                "First9" .  '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .   '">' . 'Гемы' . '</a> ';
            $F = $_GET['Filter'];
            function Get__Filter()
            {
                $G = $_GET['Filter'];
                return $G;
            }
            ?>
        </div>
        <?php
        // Сброс для фильтров
        echo '<a class="' . $class . $active .  '" href="' . $AllItemsadress . '&page=' . "1" . '&Filter=' . "First1" . '&Filter2=' . "Second1" . '&Filter3=' . "Third1" . '&Filter4=' .  'Fourth1' . '&Filter5=' . "Filter5_Reset" . '&Reset=' . "Rezet" . '">' . 'Сброс Фильтров' . '</a> ';

        $R = $_GET['Reset'];

        ?>
    </div>
    <div class="filter__item filter__item--second ">
        <?php

        // Второй фильтр
        echo '<a class="' . $class . $SecondActive1 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' . "Second1"  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Все слоты' . '</a> ';
        echo '<a class="' . $class . $SecondActive2 .  '" href="' . $Resourcesadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . "Second2" . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Сырье' . '</a> ';
        echo '<a class="' . $class . $SecondActive3 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' . "Second3"  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Очищенное сырье' . '</a> ';
        echo '<a class="' . $class . $SecondActive4 .  '" href="' . $Resourcesadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . "Second4" . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Алхимия' . '</a> ';
        echo '<a class="' . $class . $SecondActive5 .  '" href="' . $Resourcesadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . "Second5" . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Компоненты' . '</a> ';
        echo '<a class="' . $class . $SecondActive6 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' . "Second6"  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Кулинария' . '</a> ';
        echo '<a class="' . $class . $SecondActive7 .  '" href="' . $Resourcesadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . "Second7" . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  Get__Filter4() .  '">' . 'Перки' . '</a> ';


        $F2 = $_GET['Filter2'];
        function Get__Filter2()
        {
            $G = $_GET['Filter2'];
            return $G;
        }
        ?>
    </div>
    <div class="filter__item">
        <div class="filter__box">
            <?php

            // Третий фильтр
            echo '<a class="' . $class . $ThirdActive1 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' . Get__Filter2()  . '&Filter3=' .  "Third1" . '&Filter4=' .  Get__Filter4() .  '">' . 'Все грейды' . '</a> ';
            echo '<a class="' . $class . $ThirdActive2 .  '" href="' . $Resourcesadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . Get__Filter2() . '&Filter3=' .  "Third2" . '&Filter4=' .  Get__Filter4() .  '">' . 'Г2' . '</a> ';
            echo '<a class="' . $class . $ThirdActive3 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' . Get__Filter2()  . '&Filter3=' .  "Third3" . '&Filter4=' .  Get__Filter4() .  '">' . 'Г3' . '</a> ';
            echo '<a class="' . $class . $ThirdActive4 .  '" href="' . $Resourcesadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . Get__Filter2() . '&Filter3=' .  "Third4" . '&Filter4=' .  Get__Filter4() .  '">' . 'Г4' . '</a> ';
            echo '<a class="' . $class . $ThirdActive5 .  '" href="' . $Resourcesadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . Get__Filter2() . '&Filter3=' .  "Third5" . '&Filter4=' .  Get__Filter4() .  '">' . 'Г5' . '</a> ';

            $F3 = $_GET['Filter3'];
            function Get__Filter3()
            {
                $G = $_GET['Filter3'];
                return $G;
            }
            ?>
        </div>
        <div class="filter__box">
            <?php

            // Четвертый фильтр
            echo '<a class="' . $class . $FourthActive1 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  "Fourth1" .  '">' . 'Все редкости' . '</a> ';
            echo '<a class="' . $class . $FourthActive2 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  "Fourth2" .  '">' . 'Обычный' . '</a> ';
            echo '<a class="' . $class . $FourthActive3 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  "Fourth3" .  '">' . 'Необычный' . '</a> ';
            echo '<a class="' . $class . $FourthActive4 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  "Fourth4" .  '">' . 'Редкий' . '</a> ';
            echo '<a class="' . $class . $FourthActive5 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  "Fourth5" .  '">' . 'Эпический' . '</a> ';
            echo '<a class="' . $class . $FourthActive6 .  '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() . '&Filter4=' .  "Fourth6" . '">' . 'Легендарный' . '</a> ';


            $F4 = $_GET['Filter4'];
            function Get__Filter4()
            {
                $G = $_GET['Filter4'];
                return $G;
            }
            ?>
        </div>
    </div>
</div>
<!--! Ресурсы end -->

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
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthDown1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthDown2" . '">' . 'Слот' . '</a> ';

        ?>

            <div class="table__link">Тип</div>
        <?php
            echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthDown3" . '">' . 'Грейд' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthDown4" . '">' . 'Гир скор' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive5 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthDown5" . '">' . 'Уровень' . '</a> ';
            // echo '<a class="' . $class2 . $FifthActive6 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthDown6" .  '">' . 'Перс при получ' . '</a> ';
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
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthUP1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthUP2" . '">' . 'Слот' . '</a> ';

        ?>

            <div class="table__link">Тип</div>
        <?php
            echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthUP3" . '">' . 'Грейд' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthUP4" . '">' . 'Гир скор' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive5 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthUP5" . '">' . 'Уровень' . '</a> ';
            // echo '<a class="' . $class2 . $FifthActive6 .   '" href="' . $Resourcesadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4() . '&Filter5=' . "FifthUP6" .  '">' . 'Перс при получ' . '</a> ';
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

//2
if ($F2 == "Second1") {
    $SelectFilter2 = 'id!=-1';
} else if ($F2 == "Second2") {
    $SelectFilter2 = 'Type_Res LIKE  "%Raw%"';
} else if ($F2 == "Second3") {
    $SelectFilter2 = 'Type_Res LIKE "%Refined%"';
} else if ($F2 == "Second4") {
    $SelectFilter2 = 'Type_Res LIKE "%Alchemy%"';
} else if ($F2 == "Second5") {
    $SelectFilter2 = 'Type_Res LIKE "%Components%"';
} else if ($F2 == "Second6") {
    $SelectFilter2 = 'Type_Res LIKE "%Cooking%"';
} else if ($F2 == "Second7") {
    $SelectFilter2 = 'Type_Res LIKE "%Perk%"';
}


// 3
if ($F3 == "Third1") {
    $SelectFilter3 = 'id!=-1';
} else if ($F3 == "Third2") {
    $SelectFilter3 = 'Tier =2';
} else if ($F3 == "Third3") {
    $SelectFilter3 = 'Tier =3';
} else if ($F3 == "Third4") {
    $SelectFilter3 = 'Tier =4';
} else if ($F3 == "Third5") {
    $SelectFilter3 = 'Tier =5';
}
//4
if ($F4 == "Fourth1") {
    $SelectFilter4 = 'id!=-1';
} else if ($F4 == "Fourth2") {
    $SelectFilter4 = 'rarity ="Common"';
} else if ($F4 == "Fourth3") {
    $SelectFilter4 = 'rarity ="Unommon"';
} else if ($F4 == "Fourth4") {
    $SelectFilter4 = 'rarity ="rare"';
} else if ($F4 == "Fourth5") {
    $SelectFilter4 = 'rarity ="Epic"';
} else if ($F4 == "Fourth6") {
    $SelectFilter4 = 'rarity ="legendary"';
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
// echo '<div style="color:white;"> '.$F.' </div>';
// echo "<br>";
// echo '<div style="color:white;"> '.$F2.' </div>';
// echo "<br>";
// echo '<div style="color:white;"> '.$F3.' </div>';
// echo "<br>";
// echo '<div style="color:white;"> '.$F4.' </div>';
// echo "<br>";
// echo '<div style="color:white;"> '.$F5.' </div>';

$name = "resources";
 $result = mysqli_query($goods, "SELECT * FROM  $name WHERE ($SelectFilter3) AND ($SelectFilter4) AND ($SelectFilter2) GROUP BY Card_name , rarity,img_FirstUrl  $SelectFilter5  LIMIT  $p    ");

    $count = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name , rarity,img_FirstUrl)   FROM $name WHERE ($SelectFilter3) AND ($SelectFilter4) AND ($SelectFilter2)  "));

$countnumber = $count[0];

$firstpages = $countnumber / $quantity;
$pages = ceil($firstpages);

while ($tettabl = mysqli_fetch_assoc($result)) {
    $bases[] = $tettabl;
}
    ?>