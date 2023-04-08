<!--! Craft -->
<div class="Craft">
    <div class="Craft__item">
        <div class="Craft__box">
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



            if ($_GET['Filter2'] == "Second1" xor $_GET['Filter2'] == "Second2" xor $_GET['Filter2'] == "Second3" xor $_GET['Filter2'] == "Second4") {
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
            echo '<a class="' . $class . $FirstActive1 .  '" href="' . $Arcanaadress . '&page=' . "1" . '&Filter=' . "First1"  .   '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Аркана' . '</a> ';
            echo '<a class="' . $class . $FirstActive2 .  '" href="' .  $Armoringadress . '&page=' . "1"  . '&Filter=' .
                "First2" .  '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Кузнечное дело' . '</a> ';
            echo '<a class="' . $class . $FirstActive3 .  '" href="' . $Cookingadress . '&page=' . "1"  . '&Filter=' .
                "First3" .   '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Кулинария' .  '</a> ';
            echo '<a class="' . $class . $FirstActive4 .  '" href="' . $Engineeringadress . '&page=' . "1"  . '&Filter=' .
                "First4" .   '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Инженерия' . '</a> ';
            echo '<a class="' . $class . $FirstActive5 .  '" href="' . $Furnishing . '&page=' . "1"  . '&Filter=' .
                "First5" .   '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Крафт мебели' . '</a> ';
            echo '<a class="' . $class . $FirstActive6 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1"  . '&Filter=' .
                "First6" .   '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Ювелирное дело' . '</a> ';
            echo '<a class="' . $class . $FirstActive7 .  '" href="' .  $Weaponsmithingadress  . '&page=' . "1"  . '&Filter=' .
                "First7" .  '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Оружейное дело' . '</a> ';
            // echo '<a class="' . $class . $FirstActive8 .  '" href="' . $Campingadress . '&page=' . "1"  . '&Filter=' .
            //     "First8" .  '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3()  .   '">' . 'Кемпинг' . '</a> ';
            echo '<a class="' . $class . $FirstActive9 .  '" href="' . $Refiningadress . '&page=' . "1"  . '&Filter=' .
                "First9" .  '&Filter2=' . Get__Filter2()  . '&Filter3=' .  Get__Filter3()  .   '">' . 'Обработка' . '</a> ';
            $F = $_GET['Filter'];
            function Get__Filter()
            {
                $G = $_GET['Filter'];
                return $G;
            }
            ?>

        </div>
    </div>
    <div class="Craft__item Craft__item--second ">
        <?php

        // Второй фильтр
        echo '<a class="' . $class . $SecondActive1 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' . "Second1"  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Все слоты' . '</a> ';
        echo '<a class="' . $class . $SecondActive2 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . "Second2" . '&Filter3=' .  Get__Filter3()  .  '">' . 'Амулеты' . '</a> ';
        echo '<a class="' . $class . $SecondActive3 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' . "Second3"  . '&Filter3=' .  Get__Filter3()  .  '">' . 'Серьги' . '</a> ';
        echo '<a class="' . $class . $SecondActive4 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . "Second4" . '&Filter3=' .  Get__Filter3()  .  '">' . 'Кольца' . '</a> ';



        $F2 = $_GET['Filter2'];
        function Get__Filter2()
        {
            $G = $_GET['Filter2'];
            return $G;
        }
        ?>
    </div>
    <div class="Craft__item">
        <div class="Craft__box">
            <?php

            // Третий фильтр
            echo '<a class="' . $class . $ThirdActive1 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' . Get__Filter2()  . '&Filter3=' .  "Third1"  .  '">' . 'Все грейды' . '</a> ';
            echo '<a class="' . $class . $ThirdActive2 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . Get__Filter2() . '&Filter3=' .  "Third2"  .  '">' . 'Г2' . '</a> ';
            echo '<a class="' . $class . $ThirdActive3 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' . Get__Filter2()  . '&Filter3=' .  "Third3"  .  '">' . 'Г3' . '</a> ';
            echo '<a class="' . $class . $ThirdActive4 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . Get__Filter2() . '&Filter3=' .  "Third4"  .  '">' . 'Г4' . '</a> ';
            echo '<a class="' . $class . $ThirdActive5 .  '" href="' . $Jewelcraftingsadress . '&page=' . "1"  . '&Filter=' . $F . '&Filter2=' . Get__Filter2() . '&Filter3=' .  "Third5"  .  '">' . 'Г5' . '</a> ';

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
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown2" . '">' . 'Категория' . '</a> ';
            // echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown3" . '">' . 'Подкатегория' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown4" . '">' . 'Грейд' . '</a> ';
            ?>

            <div class="Tablecraft__link">Ингридиенты</div>
        <?php
            echo '<a class="' . $class2 . $FifthActive5 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthDown5" . '">' . 'Уровень' . '</a> ';
            ?>
            <div class="Tablecraft__link">Опыт изготовления</div>
        <?php
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
            echo '<a class="' . $class2 . $FifthActive1 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP1" . '">' . 'Название' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive2 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP2" . '">' . 'Категория' . '</a> ';
            // echo '<a class="' . $class2 . $FifthActive3 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP3" . '">' . 'Подкатегория' . '</a> ';
            echo '<a class="' . $class2 . $FifthActive4 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP4" . '">' . 'Грейд' . '</a> ';
            ?>

            <div class="Tablecraft__link">Ингридиенты</div>
        <?php
            echo '<a class="' . $class2 . $FifthActive5 .   '" href="' . $Jewelcraftingsadress . '&page=' . "1" . '&Filter=' . $F . '&Filter2=' .  $F2  . '&Filter3=' .  Get__Filter3()   . '&Filter5=' . "FifthUP5" . '">' . 'Уровень' . '</a> ';
            ?>
            <div class="Tablecraft__link">Опыт изготовления</div>
        <?php
        }


        $F5 = $_GET['Filter5'];
        function Get__Filter5()
        {
            $G = $_GET['Filter5'];
            return $G;
        }
        $F4 = $_GET['Filter4'];
        function Get__Filter4()
        {
            $G = $_GET['Filter4'];
            return $G;
        }
        ?>
    </div>

    <?php
    //2
    if ($F2 == "Second1") {
        $SelectFilter2 = 'id!=-1';
    } else if ($F2 == "Second2") {
        $SelectFilter2 = 'Card_Class LIKE  "%Amulet%"';
    } else if ($F2 == "Second3") {
        $SelectFilter2 = 'Card_Class LIKE "%Earring%"';
    } else if ($F2 == "Second4") {
        $SelectFilter2 = 'Card_Class LIKE "%Ring%" and Card_Class not like "%Earring%"';
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

    //5
    if ($F5 == "FifthUP1") {
        $SelectFilter5 = "ORDER BY Name";
    } else if ($F5 == "FifthUP2") {
        $SelectFilter5 = "ORDER BY Category ASC";
    } else if ($F5 == "FifthUP3") {
        $SelectFilter5 = "ORDER BY Tier";
    } else if ($F5 == "FifthUP4") {
        $SelectFilter5 = "ORDER BY Tier";
    } else if ($F5 == "FifthUP5") {
        $SelectFilter5 = "ORDER BY Skill";
    } else if ($F5 == "FifthUP6") {
        $SelectFilter5 = "ORDER BY BoP";
    }

    if ($F5 == "FifthDown1") {
        $SelectFilter5 = "ORDER BY Name DESC";
    } else if ($F5 == "FifthDown2") {
        $SelectFilter5 = "ORDER BY Category DESC";
    } else if ($F5 == "FifthDown3") {
        $SelectFilter5 = "ORDER BY Tier DESC";
    } else if ($F5 == "FifthDown4") {
        $SelectFilter5 = "ORDER BY Tier  DESC";
    } else if ($F5 == "FifthDown5") {
        $SelectFilter5 = "ORDER BY Skill DESC";
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

    $name = "craft_jewelcrafting";
    $result = mysqli_query($goods, "SELECT * FROM  $name WHERE ($SelectFilter3)  AND ($SelectFilter2)  $SelectFilter5 LIMIT  $p    ");

    $count = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(*)   FROM $name WHERE ($SelectFilter3)  AND ($SelectFilter2)  "));

    $countnumber = $count[0];

    $firstpages = $countnumber / $quantity;
    $pages = ceil($firstpages);

    while ($tettabl = mysqli_fetch_assoc($result)) {
        $bases[] = $tettabl;
    }
    ?>