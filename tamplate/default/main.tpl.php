 <!-- database -->
 <div class="database">
     <?php if (empty($_GET['Object']) != true xor $_GET['DataType'] == "Creatures") {
        ?>
         <div class="container container_sidebar">
         <?php
        } else {
            ?>
             <div class="container ">
             <?php
            }
                ?>
             <div class="database__inner">
                 <?php
                    $searchForm = "<form  method='POST'>
<input maxlength='40' minlength='4' autocomplete='off' class='database__input' type='text' name='text' placeholder='поиск предметов...' required>
<input class='database__input-btn' type='submit' name='enter' value='' >
</form>";


                    if (
                        $_GET['DataType'] == "Ammo" xor $_GET['DataType'] == "Armor" xor $_GET['DataType'] == "Consumables" xor $_GET['DataType'] == "Weapons" xor $_GET['DataType'] == "Resources" xor $_GET['DataType'] == "Abilities"
                        xor $_GET['DataType'] == "Creatures" xor $_GET['DataType'] == "Dyes" xor $_GET['DataType'] == "Furniture" xor $_GET['DataType'] == "Gems" xor $_GET['DataType'] == "Perks" xor $_GET['DataType'] == "Quests" xor $_GET['DataType'] == "Lore" xor $_GET['DataType'] == "AllItems"
                    ) {
                        $ThisMainAdress = "DataBase";
                        // Adress
                        $ThisAdress = $_GET['DataType'];
                        if ($_GET['DataType'] == "AllItems") {
                            echo "<div class=" . 'database__adress' . ">  <span> $ThisMainAdress / $ThisAdress </span>
                    $searchForm
                    </div>";
                        } else {
                            echo "<div class=" . 'database__adress' . "> 
                     <span><a href='$adress2&AdressMain=$ThisMainAdress'> $ThisMainAdress</a>  / $ThisAdress </span> 
                     $searchForm
                    </div>";
                        }

                        //
                    } else if (
                        $_GET['DataType'] == "Arcana" xor $_GET['DataType'] == "Armoring" xor $_GET['DataType'] == "Cooking" xor $_GET['DataType'] == "Engineering" xor $_GET['DataType'] == "Furnishing" xor $_GET['DataType'] == "Jewelcrafting"
                        xor $_GET['DataType'] == "Camping" xor $_GET['DataType'] == "Refining" xor $_GET['DataType'] == "Weaponsmithing"
                    ) {

                        $ThisMainAdress = "Craft";
                        // Adress
                        $ThisAdress = $_GET['DataType'];
                        echo "<div class=" . 'database__adress' . "> <span> $ThisMainAdress / $ThisAdress </span> 
                    $searchForm
                </div>";
                        //
                    } else if ($_GET['DataType'] == "Objectpage") {
                        $ThisMainAdress = "DataBase";
                        $name322 = ucfirst($_GET['TableType']);
                        $name32 = str_replace("%", ' ', $_GET['Object']);
                        // Adress
                        $ThisAdress = $_GET['DataType'];
                        echo "<div class=" . 'database__adress' . "> <span> <a href='$adress2&AdressMain=$ThisMainAdress'> $ThisMainAdress</a> / <a href='$adress2&AdressMain=$ThisMainAdress&DataType=$name322'>$name322</a> / $name32 </span></div>";
                        //
                        include "ObjectPage/ObjectPage.php";
                    } else {
                        $_GET['DataType'] = "AllItems";
                        $ThisMainAdress = " Database";
                        // Adress
                        $ThisAdress = $_GET['DataType'];
                        echo "<div class=" . 'database__adress' . ">  <span> $ThisMainAdress / $ThisAdress </span>
                    $searchForm
                    </div>";
                        //
                    }




                    $page = $_GET['page'];

                    if ($page < 1) {
                        $page = 1;
                    }
                    $p = $page * $quantity;


                    if (isset($_POST['enter'])) {
                        $_SESSION['search'] = $_POST['text'];
                        $search = '%' . $_POST['text'] . '%';
                        include "search/Search.php";
                        echo ("<script>
                   if ( window.history.replaceState ) {
                       window.history.replaceState( null, null, window.location.href );
                   }
               </script>");
                    } else {
                        // Filter
                        if ($_GET['DataType'] == "Ammo" xor $_GET['DataType'] == "AllItems") {
                            include "Filter/Ammo.php";
                            include "Table/TableDataBasaMain.php";
                        } else if ($_GET['DataType'] == "Armor") {
                            include "Filter/Armor.php";
                            include "Table/TableDataBasaMain.php";
                        } else if ($_GET['DataType'] == "Consumables") {
                            include "Filter/Consumables.php";
                            include "Table/TableDataBasaMain.php";
                        } else if ($_GET['DataType'] == "Weapons") {
                            include "Filter/Weapons.php";
                            include "Table/TableDataBasaMain.php";
                        } else if ($_GET['DataType'] == "Resources") {
                            include "Filter/Resources.php";
                            include "Table/TableDataBasaMain.php";
                        } else if ($_GET['DataType'] == "Abilities") {
                            if ($_GET['WeaponAb'] == "sword") {
                                include "weaponAbilities/sword.php";
                            } else if ($_GET['WeaponAb'] == "firestaff") {
                                include "weaponAbilities/firestaff.php";
                            } else if ($_GET['WeaponAb'] == "great_axe") {
                                include "weaponAbilities/great_axe.php";
                            } else if ($_GET['WeaponAb'] == "hatchet") {
                                include "weaponAbilities/hatchet.php";
                            } else if ($_GET['WeaponAb'] == "icegantel") {
                                include "weaponAbilities/icegantel.php";
                            } else if ($_GET['WeaponAb'] == "lifestaff") {
                                include "weaponAbilities/lifestaff.php";
                            } else if ($_GET['WeaponAb'] == "musket") {
                                include "weaponAbilities/musket.php";
                            } else if ($_GET['WeaponAb'] == "rapier") {
                                include "weaponAbilities/rapier.php";
                            } else if ($_GET['WeaponAb'] == "spear") {
                                include "weaponAbilities/spear.php";
                            } else if ($_GET['WeaponAb'] == "WarHammer") {
                                include "weaponAbilities/WarHammer.php";
                            } else if ($_GET['WeaponAb'] == "bow") {
                                include "weaponAbilities/bow.php";
                            } else {
                                include "Filter/Abilities.php";
                            }
                        } else if ($_GET['DataType'] == "Creatures") {
                            include "Table/TableDataCreatures.php";
                        } else if ($_GET['DataType'] == "Dyes") {
                            include "Filter/Dyes.php";
                            include "Table/TableDataBasaMain.php";
                        } else if ($_GET['DataType'] == "Furniture") {
                            include "Filter/Furniture.php";
                            include "Table/TableDataFurnitur.php";
                        } else if ($_GET['DataType'] == "Gems") {
                            include "Filter/Gems.php";
                            include "Table/TableDataBasaMain.php";
                        } else if ($_GET['DataType'] == "Perks") {
                            include "Table/TableDataPerks.php";
                        } else if ($_GET['DataType'] == "Quests") {
                            include "Filter/Quests.php";
                            include "Table/TableDataQuests.php";
                        } else if ($_GET['DataType'] == "Lore") {
                            include "Table/TableDataLore.php";
                        }

                        if ($_GET['DataType'] == "Camping") {
                            include "CraftFilter/Camping.php";
                            include "TableCraft/Tablecraft.php";
                        } else if ($_GET['DataType'] == "Arcana") {
                            include "CraftFilter/Arcana.php";
                            include "TableCraft/Tablecraft.php";
                        } else if ($_GET['DataType'] == "Armoring") {
                            include "CraftFilter/Armoring.php";
                            include "TableCraft/Tablecraft.php";
                        } else if ($_GET['DataType'] == "Cooking") {
                            include "CraftFilter/Cooking.php";
                            include "TableCraft/Tablecraft.php";
                        } else if ($_GET['DataType'] == "Engineering") {
                            include "CraftFilter/Engineering.php";
                            include "TableCraft/Tablecraft.php";
                        } else if ($_GET['DataType'] == "Furnishing") {
                            include "CraftFilter/Furnishing.php";
                            include "TableCraft/Tablecraft.php";
                        } else if ($_GET['DataType'] == "Jewelcrafting") {
                            include "CraftFilter/Jewelcrafting.php";
                            include "TableCraft/Tablecraft.php";
                        } else if ($_GET['DataType'] == "Weaponsmithing") {
                            include "CraftFilter/Weaponsmithing.php";
                            include "TableCraft/Tablecraft.php";
                        } else if ($_GET['DataType'] == "Refining") {
                            include "CraftFilter/Refining.php";
                            include "TableCraft/Tablecraft.php";
                        }
                    }

                    ?>
                 <?php
                    $thi = $page + 1;

                    // Узнаем с какой ссылки начинать вывод
                    $start = $thi - $limit;

                    // Узнаем номер последней ссылки для вывода
                    $end = $thi + $limit;
                    ?>
                 <div class="pages">
                     <?php
                        if ($pages > 1) {
                            $AllItemsadress = $adress2 . '&AdressMain=DataBase&DataType';
                            for ($j = 1; $j <= $pages; $j++) {
                                // Выводим ссылки только в том случае, если их номер больше или равен
                                // начальному значению, и меньше или равен конечному значению
                                if ($j >= $start && $j <= $end) {

                                    // Ссылка на текущую страницу выделяется 
                                    if ($j == ($page)) echo '<div class="pages__numbers pages__active"  >' . $j . '</div> &nbsp; ';
                                    // if ($j == ($page)) echo '<a class="pages__numbers pages__active"  href="' . $AllItemsadress ."=". $_GET['DataType'] .
                                    // '&page=' . $j . '&Filter=' . $F . '&Filter2=' . $F2 .  '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4()  . '&Filter5=' . $F5 . '" >' . $j . '</a> &nbsp; ';

                                    // Ссылки на остальные страницы
                                    else echo '<a class="pages__numbers" href="' . $AllItemsadress  . "=" . $_GET['DataType'] . '&page=' .
                                        $j . '&Filter=' . $F . '&Filter2=' . $F2 . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4()  . '&Filter5=' . $F5 . '">' . $j . '</a> &nbsp; ';
                                }
                            }

                            if ($page >= 2) {
                                // Значение page= для первой страницы всегда равно единице, 
                                // поэтому так и пишем
                                // echo '<a class="pages__arrowa" href="' . $AllItemsadress . "=" . $_GET['DataType'] . '&page="1" ' . '&Filter=' . $F . '&Filter2=' . $F2 . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4()  . '&Filter5=' . $F5 . '>Первая</a> &nbsp; ';

                                echo '<a class="pages__arrowa" href="' . $AllItemsadress  . "=" . $_GET['DataType'] . '&page=' . '1' . '&Filter=' . $F . '&Filter2=' . $F2 . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4()  . '&Filter5=' . $F5 .
                                    '">Первая </a> &nbsp; ';

                                // Так как мы количество страниц до этого уменьшили на единицу, 
                                // то для того, чтобы попасть на предыдущую страницу, 
                                // нам не нужно ничего вычислять
                                echo '<a class="pages__arrowa" href="' . $AllItemsadress  . "=" . $_GET['DataType'] . '&page=' . ($page - 1) . '&Filter=' . $F . '&Filter2=' . $F2 . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4()  . '&Filter5=' . $F5 .
                                    '">Предыдущая </a> &nbsp; ';
                            }
                            if ($pages > $page) {
                                // Чтобы попасть на следующую страницу нужно увеличить $pages на 2
                                echo '<a class="pages__arrowa" href="' . $AllItemsadress  . "=" . $_GET['DataType'] . '&page=' . ($page + 1) . '&Filter=' . $F . '&Filter2=' . $F2 . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4()  . '&Filter5=' . $F5 .
                                    '"> Следующая</a> &nbsp; ';

                                // Так как у нас $j = количество страниц + 1, то теперь 
                                // уменьшаем его на единицу и получаем ссылку на последнюю страницу
                                echo '<a class="pages__arrowa" href="' . $AllItemsadress  . "=" . $_GET['DataType'] . '&page=' . ($pages) . '&Filter=' . $F . '&Filter2=' . $F2 . '&Filter3=' .  Get__Filter3() .  '&Filter4=' .  Get__Filter4()  . '&Filter5=' . $F5 .
                                    '">Последняя (' . $pages . ')</a> &nbsp; ';
                            }
                        }

                        ?>
                 </div>
             </div>
             </div>
         </div>
         <!-- database end -->
         <?php
