<div class="container">
    
    <?php
    $page = $_GET['page'];
    if ($page < 1) {
        $page = 1;
    }
    $p = $page * $quantity;

    if ($_GET['role'] == "Не указана" xor $_GET['role'] == "Танк" xor $_GET['role'] == "Хил" xor $_GET['role'] == "ДД" xor $_GET['role'] == "РДД") {
    } else {
        $_GET['role'] = "Не указана";
    }

    if ($_GET['appointment'] == "Универсальный" xor $_GET['appointment'] == "ПВП" xor $_GET['appointment'] == "ПВЕ" xor $_GET['appointment'] == "Осады" xor $_GET['appointment'] == "Данжи" xor $_GET['appointment'] == "Не указан") {
    } else {
        $_GET['appointment'] = "Не указан";
    }

    if ($_GET['list_weapon1'] == "Любое оружие" xor $_GET['list_weapon1'] == "Лук" xor $_GET['list_weapon1'] == "Посох огня" xor $_GET['list_weapon1'] == "Топор" xor $_GET['list_weapon1'] == "Посох жизни"  xor $_GET['list_weapon1'] == "Мушкет" xor $_GET['list_weapon1'] == "Меч и щит" xor $_GET['list_weapon1'] == "Молот" xor $_GET['list_weapon1'] == "Рапира" xor $_GET['list_weapon1'] == "Ледяная перчатка" xor $_GET['list_weapon1'] == "Копье" xor $_GET['list_weapon1'] == "Секира") {
    } else {
        $_GET['list_weapon1'] = "Любое оружие";
    }

    if ($_GET['list_weapon2'] == "Любое оружие" xor $_GET['list_weapon2'] == "Лук" xor $_GET['list_weapon2'] == "Посох огня" xor $_GET['list_weapon2'] == "Топор" xor $_GET['list_weapon2'] == "Посох жизни"  xor $_GET['list_weapon2'] == "Мушкет" xor $_GET['list_weapon2'] == "Меч и щит" xor $_GET['list_weapon2'] == "Молот" xor $_GET['list_weapon2'] == "Рапира" xor $_GET['list_weapon2'] == "Ледяная перчатка" xor $_GET['list_weapon2'] == "Копье" xor $_GET['list_weapon2'] == "Секира") {
    } else {
        $_GET['list_weapon2'] = "Любое оружие";
    }



    if ($_GET['role'] == "Не указана") {
        $SelectFilterweapon1 = 'id!=-1';
    } else if ($_GET['role'] == "Танк") {
        $SelectFilterweapon1 = 'role ="Танк"';
    } else if ($_GET['role'] == "Хил") {
        $SelectFilterweapon1 = 'role ="Хил"';
    } else if ($_GET['role'] == "ДД") {
        $SelectFilterweapon1 = 'role ="ДД"';
    } else if ($_GET['role'] == "РДД") {
        $SelectFilterweapon1 = 'role ="РДД"';
    }

    if ($_GET['appointment'] == "Не указан") {
        $SelectFilterweapon2 = 'id!=-1';
    } else if ($_GET['appointment'] == "ПВП") {
        $SelectFilterweapon2 = 'appointment ="ПВП"';
    } else if ($_GET['appointment'] == "ПВЕ") {
        $SelectFilterweapon2 = 'appointment ="ПВЕ"';
    } else if ($_GET['appointment'] == "Осады") {
        $SelectFilterweapon2 = 'appointment ="Осады"';
    } else if ($_GET['appointment'] == "Данжи") {
        $SelectFilterweapon2 = 'appointment ="Данжи"';
    } else if ($_GET['appointment'] == "Универсальный") {
        $SelectFilterweapon2 = 'appointment ="Универсальный"';
    }

    if ($_GET['list_weapon1'] == "Любое оружие") {
        $SelectFilterweapon3 = 'id!=-1';
    } else if ($_GET['list_weapon1'] == "Лук") {
        $SelectFilterweapon3 = 'weapon_name1 ="bow"';
    } else if ($_GET['list_weapon1'] == "Посох огня") {
        $SelectFilterweapon3 = 'weapon_name1 ="firestaff"';
    } else if ($_GET['list_weapon1'] == "Топор") {
        $SelectFilterweapon3 = 'weapon_name1 ="hatchet"';
    } else if ($_GET['list_weapon1'] == "Посох жизни") {
        $SelectFilterweapon3 = 'weapon_name1 ="lifestaff"';
    } else if ($_GET['list_weapon1'] == "Мушкет") {
        $SelectFilterweapon3 = 'weapon_name1 ="musket"';
    } else if ($_GET['list_weapon1'] == "Меч и щит") {
        $SelectFilterweapon3 = 'weapon_name1 ="sword"';
    } else if ($_GET['list_weapon1'] == "Молот") {
        $SelectFilterweapon3 = 'weapon_name1 ="WarHammer"';
    } else if ($_GET['list_weapon1'] == "Рапира") {
        $SelectFilterweapon3 = 'weapon_name1 ="rapier"';
    } else if ($_GET['list_weapon1'] == "Ледяная перчатка") {
        $SelectFilterweapon3 = 'weapon_name1 ="icegantel"';
    } else if ($_GET['list_weapon1'] == "Копье") {
        $SelectFilterweapon3 = 'weapon_name1 ="spear"';
    } else if ($_GET['list_weapon1'] == "Секира") {
        $SelectFilterweapon3 = 'weapon_name1 ="great_axe"';
    }

    if ($_GET['list_weapon2'] == "Любое оружие") {
        $SelectFilterweapon4 = 'id!=-1';
    } else if ($_GET['list_weapon2'] == "Лук") {
        $SelectFilterweapon4 = 'weapon_name2 ="bow"';
    } else if ($_GET['list_weapon2'] == "Посох огня") {
        $SelectFilterweapon4 = 'weapon_name2 ="firestaff"';
    } else if ($_GET['list_weapon2'] == "Топор") {
        $SelectFilterweapon4 = 'weapon_name2 ="hatchet"';
    } else if ($_GET['list_weapon2'] == "Посох жизни") {
        $SelectFilterweapon4 = 'weapon_name2 ="lifestaff"';
    } else if ($_GET['list_weapon2'] == "Мушкет") {
        $SelectFilterweapon4 = 'weapon_name2 ="musket"';
    } else if ($_GET['list_weapon2'] == "Меч и щит") {
        $SelectFilterweapon4 = 'weapon_name2 ="sword"';
    } else if ($_GET['list_weapon2'] == "Молот") {
        $SelectFilterweapon4 = 'weapon_name2 ="WarHammer"';
    } else if ($_GET['list_weapon2'] == "Рапира") {
        $SelectFilterweapon4 = 'weapon_name2 ="rapier"';
    } else if ($_GET['list_weapon2'] == "Ледяная перчатка") {
        $SelectFilterweapon4 = 'weapon_name2 ="icegantel"';
    } else if ($_GET['list_weapon2'] == "Копье") {
        $SelectFilterweapon4 = 'weapon_name2 ="spear"';
    } else if ($_GET['list_weapon2'] == "Секира") {
        $SelectFilterweapon4 = 'weapon_name2 ="great_axe"';
    }

    $SelectFilterweapon5 = 'private ="false"';
    $name = "calc_point";
    $result = mysqli_query($goods, "SELECT * FROM  $name WHERE ($SelectFilterweapon1) AND ( $SelectFilterweapon2) AND ( $SelectFilterweapon3) AND ( $SelectFilterweapon4) AND ( $SelectFilterweapon5) ORDER BY Time DESC LIMIT $p     ");

    $count = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(*)   FROM $name WHERE ($SelectFilterweapon1) AND ( $SelectFilterweapon2) AND ( $SelectFilterweapon3) AND ( $SelectFilterweapon4) AND ( $SelectFilterweapon5) "));

    $countnumber = $count[0];

    $firstpages = $countnumber / $quantity;
    $pages = ceil($firstpages);

    while ($tettabl = mysqli_fetch_assoc($result)) {
        $bases[] = $tettabl;
    }


    ?>
    <!--! Список билдов -->
    <div class="build-list">
        <h1 class="build-list__title">New World Билды</h1>
        <a href='<?php echo   $adress2 . '&AdressMain=' . "$AdressHome"   ?>' class="build-list__home-build-link">Создать билд</a>
        <div class="build-list__nav">
            <div id="build-list_role" class="form-descr__list">
                <div class="__select" data-state="">
                    <div class="__select__title" data-default="Не указана"><?php echo $_GET['role']; ?></div>
                    <div class="__select__content">
                        <input id="singleSelect0" class="__select__input" type="radio" name="singleSelect" checked />
                        <label for="singleSelect0" class="__select__label ">Option 0</label>

                        <input id="singleSelect1" class="__select__input" type="radio" name="singleSelect" />
                        <label for="singleSelect1" class="__select__label">Танк</label>

                        <input id="singleSelect2" class="__select__input" type="radio" name="singleSelect" />
                        <label for="singleSelect2" class="__select__label">Хил</label>

                        <input id="singleSelect3" class="__select__input" type="radio" name="singleSelect" />
                        <label for="singleSelect3" class="__select__label">ДД</label>

                        <input id="singleSelect4" class="__select__input" type="radio" name="singleSelect" />
                        <label for="singleSelect4" class="__select__label">РДД</label>

                        <input id="singleSelect5" class="__select__input" type="radio" name="singleSelect" />
                        <label for="singleSelect5" class="__select__label">Не указана</label>
                    </div>
                </div>
                <div class="form-descr__placeholder">Роль</div>
            </div>
            <div id="build-list_appointment" class="form-descr__list">
                <div class="__select" data-state="">
                    <div class="__select__title" data-default="Не указана"><?php echo $_GET['appointment']; ?></div>
                    <div class="__select__content">
                        <input id="singleSelect_0" class="__select__input" type="radio" name="singleSelect_" checked />
                        <label for="singleSelect_0" class="__select__label ">Option 0</label>

                        <input id="singleSelect_1" class="__select__input" type="radio" name="singleSelect_" />
                        <label for="singleSelect_1" class="__select__label">ПВП</label>

                        <input id="singleSelect_2" class="__select__input" type="radio" name="singleSelect_" />
                        <label for="singleSelect_2" class="__select__label">ПВЕ</label>

                        <input id="singleSelect_3" class="__select__input" type="radio" name="singleSelect_" />
                        <label for="singleSelect_3" class="__select__label">Осады</label>

                        <input id="singleSelect_4" class="__select__input" type="radio" name="singleSelect_" />
                        <label for="singleSelect_4" class="__select__label">Данжи</label>

                        <input id="singleSelect_5" class="__select__input" type="radio" name="singleSelect_" />
                        <label for="singleSelect_5" class="__select__label">Универсальный</label>

                        <input id="singleSelect_6" class="__select__input" type="radio" name="singleSelect_" />
                        <label for="singleSelect_6" class="__select__label">Не указан</label>
                    </div>
                </div>
                <div class="form-descr__placeholder">Назначение</div>
            </div>
            <div id="build-list_weapon1" class="form-descr__list">
                <div class="__select" data-state="">
                    <div class="__select__title" data-default="Не указана"> <?php echo $_GET['list_weapon1']; ?></div>
                    <div class="__select__content">
                        <input id="singleSelect__0" class="__select__input" type="radio" name="singleSelect__" checked />
                        <label for="singleSelect__0" class="__select__label ">Option 0</label>

                        <input id="singleSelect__1" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__1" class="__select__label">Лук</label>

                        <input id="singleSelect__2" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__2" class="__select__label">Посох огня</label>

                        <input id="singleSelect__3" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__3" class="__select__label">Топор</label>

                        <input id="singleSelect__4" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__4" class="__select__label">Посох жизни</label>
                        <input id="singleSelect__5" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__5" class="__select__label">Мушкет</label>


                        <input id="singleSelect__6" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__6" class="__select__label">Меч и щит</label>
                        <input id="singleSelect__7" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__7" class="__select__label">Молот</label>
                        <input id="singleSelect__8" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__8" class="__select__label">Рапира</label>
                        <input id="singleSelect__9" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__9" class="__select__label">Ледяная перчатка</label>
                        <input id="singleSelect__10" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__10" class="__select__label">Копье</label>
                        <input id="singleSelect__11" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__11" class="__select__label">Секира</label>

                        <input id="singleSelect__12" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect__12" class="__select__label">Любое оружие</label>
                    </div>
                </div>
                <div class="form-descr__placeholder">Первое оружие</div>
            </div>
            <div id="build-list_weapon2" class="form-descr__list">
                <div class="__select" data-state="">
                    <div class="__select__title" data-default="Не указана"><?php echo $_GET['list_weapon2']; ?></div>
                    <div class="__select__content">
                        <input id="singleSelect___0" class="__select__input" type="radio" name="singleSelect___" checked />
                        <label for="singleSelect___0" class="__select__label ">Option 0</label>

                        <input id="singleSelect___1" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___1" class="__select__label">Лук</label>

                        <input id="singleSelect___2" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___2" class="__select__label">Посох огня </label>

                        <input id="singleSelect___3" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___3" class="__select__label">Топор</label>

                        <input id="singleSelect___4" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___4" class="__select__label">Посох жизни</label>
                        <input id="singleSelect___5" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___5" class="__select__label">Мушкет</label>


                        <input id="singleSelect___6" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___6" class="__select__label">Меч и щит</label>
                        <input id="singleSelect__7" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___7" class="__select__label">Молот</label>
                        <input id="singleSelect___8" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___8" class="__select__label">Рапира</label>
                        <input id="singleSelect___9" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___9" class="__select__label">Ледяная перчатка</label>
                        <input id="singleSelect___10" class="__select__input" type="radio" name="singleSelect__" />
                        <label for="singleSelect___10" class="__select__label">Копье</label>
                        <input id="singleSelect___11" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___11" class="__select__label">Секира </label>

                        <input id="singleSelect___12" class="__select__input" type="radio" name="singleSelect___" />
                        <label for="singleSelect___12" class="__select__label">Любое оружие</label>
                    </div>
                </div>
                <div class="form-descr__placeholder">Второе оружие</div>
            </div>
        </div>
        <div class="build-list__btns">
            <a href="" class="build-list__search">ПОИСК</a>
            <a href="http://newworldinfo/index.php?&AdressMain=Build&role=Не указана&page=1&appointment=Не указан&list_weapon1=Любое оружие&list_weapon2=Любое оружие" class="build-list__reload">СБРОС</a>
        </div>
        <div class="build-list__list">
            <div class="build-list__row-name">
                <div class="build-list__item">Название</div>
                <div class="build-list__item">Назначение</div>
                <div class="build-list__item">Оружие</div>
                <div class="build-list__item">Роль</div>
                <div class="build-list__item">Время создания</div>
            </div>


            <?php


            if ($page > $pages) {
                $_GET['page'] = 1;
                $page = 1;
            }
            if ($page != $pages &&  $pages > 0) {
                for ($i = 1 + $quantity * ($page - 1) - 1; $i <= $quantity * $page - 1; $i++) {

            ?>

                    <a href='<?php echo   $adress2 . '&AdressMain=' . "$AdressHome"  . '&calc_weapon=' . "true" . '&calc_random=' . $bases[$i]['random']  ?>' class="build-list__link">
                        <div class="build-list__column"><?php echo $bases[$i]['name']; ?></div>
                        <div class="build-list__column"><?php echo $bases[$i]['appointment']; ?></div>
                        <div class="build-list__column"><?php

                                                        if ($bases[$i]['weapon_name1'] == "great_axe") {
                                                            echo "Секира";
                                                        } else if ($bases[$i]['weapon_name1'] == "bow") {
                                                            echo "Лук";
                                                        } else if ($bases[$i]['weapon_name1'] == "firestaff") {
                                                            echo "Посох огня";
                                                        } else if ($bases[$i]['weapon_name1'] == "hatchet") {
                                                            echo "Топор";
                                                        } else if ($bases[$i]['weapon_name1'] == "lifestaff") {
                                                            echo "Посох жизни";
                                                        } else if ($bases[$i]['weapon_name1'] == "musket") {
                                                            echo "Мушкет";
                                                        } else if ($bases[$i]['weapon_name1'] == "sword") {
                                                            echo "Меч и щит";
                                                        } else if ($bases[$i]['weapon_name1'] == "WarHammer") {
                                                            echo "Молот";
                                                        } else if ($bases[$i]['weapon_name1'] == "rapier") {
                                                            echo "Рапира";
                                                        } else if ($bases[$i]['weapon_name1'] == "icegantel") {
                                                            echo "Ледяная перчатка";
                                                        } else if ($bases[$i]['weapon_name1'] == "spear") {
                                                            echo "Копье";
                                                        }

                                                        ?>/<?php
                                                            if ($bases[$i]['weapon_name2'] == "great_axe") {
                                                                echo "Секира";
                                                            } else if ($bases[$i]['weapon_name2'] == "bow") {
                                                                echo "Лук";
                                                            } else if ($bases[$i]['weapon_name2'] == "firestaff") {
                                                                echo "Посох огня";
                                                            } else if ($bases[$i]['weapon_name2'] == "hatchet") {
                                                                echo "Топор";
                                                            } else if ($bases[$i]['weapon_name2'] == "lifestaff") {
                                                                echo "Посох жизни";
                                                            } else if ($bases[$i]['weapon_name2'] == "musket") {
                                                                echo "Мушкет";
                                                            } else if ($bases[$i]['weapon_name2'] == "sword") {
                                                                echo "Меч и щит";
                                                            } else if ($bases[$i]['weapon_name2'] == "WarHammer") {
                                                                echo "Молот";
                                                            } else if ($bases[$i]['weapon_name2'] == "rapier") {
                                                                echo "Рапира";
                                                            } else if ($bases[$i]['weapon_name2'] == "icegantel") {
                                                                echo "Ледяная перчатка";
                                                            } else if ($bases[$i]['weapon_name2'] == "spear") {
                                                                echo "Копье";
                                                            }
                                                            ?></div>
                        <div class="build-list__column"><?php echo $bases[$i]['role']; ?></div>
                        <div class="build-list__column">
                            <script>
                                // using static methods
                                var start = <?php echo $bases[$i]['Time']; ?>;
                                // the event you'd like to time goes here:
                                var end = Date.now();
                                var Days = Math.trunc((end - start) / 1000 / 60 / 60 / 24);
                                var Houers = Math.trunc(((end - start) / 1000 / 60 / 60 / 24 - Days) * 24); // time in milliseconds
                                var Minutes = Math.trunc(((end - start) / 1000 / 60 / 60 - Math.trunc((end - start) / 1000 / 60 / 60)) * 60);
                                if (Days == 1) {
                                    document.write(Days + " день назад")
                                } else if (Days > 1 & Days < 5) {
                                    document.write(Days + " дня назад")
                                } else if (Days > 4) {
                                    document.write(Days + " дней назад")
                                } else if (Houers == 1) {
                                    document.write(Houers + " час " + Minutes + " минут назад")
                                } else if (Houers == 0) {
                                    document.write(Minutes + " минут назад")
                                } else if (Houers > 1 & Houers < 5) {
                                    document.write(Houers + " часа " + Minutes + " минут назад")
                                } else {
                                    document.write(Houers + " часов " + Minutes + " минут назад")
                                }
                            </script>

                        </div>
                    </a>

                <?php
                }
            } else {
                for ($i = 1 + $quantity * ($page - 1) - 1; $i <  $countnumber; $i++) {

                ?>
                    <a href='<?php echo   $adress2 . '&AdressMain=' . "$AdressHome"  . '&calc_weapon=' . "true" . '&calc_random=' . $bases[$i]['random']  ?>' class="build-list__link">
                        <div class="build-list__column"><?php echo $bases[$i]['name']; ?></div>
                        <div class="build-list__column"><?php echo $bases[$i]['appointment']; ?></div>
                        <div class="build-list__column"><?php if ($bases[$i]['weapon_name1'] == "great_axe") {
                                                            echo "Секира";
                                                        } else if ($bases[$i]['weapon_name1'] == "bow") {
                                                            echo "Лук";
                                                        } else if ($bases[$i]['weapon_name1'] == "firestaff") {
                                                            echo "Посох огня";
                                                        } else if ($bases[$i]['weapon_name1'] == "hatchet") {
                                                            echo "Топор";
                                                        } else if ($bases[$i]['weapon_name1'] == "lifestaff") {
                                                            echo "Посох жизни";
                                                        } else if ($bases[$i]['weapon_name1'] == "musket") {
                                                            echo "Мушкет";
                                                        } else if ($bases[$i]['weapon_name1'] == "sword") {
                                                            echo "Меч и щит";
                                                        } else if ($bases[$i]['weapon_name1'] == "WarHammer") {
                                                            echo "Молот";
                                                        } else if ($bases[$i]['weapon_name1'] == "rapier") {
                                                            echo "Рапира";
                                                        } else if ($bases[$i]['weapon_name1'] == "icegantel") {
                                                            echo "Ледяная перчатка";
                                                        } else if ($bases[$i]['weapon_name1'] == "spear") {
                                                            echo "Копье";
                                                        }  ?>/<?php if ($bases[$i]['weapon_name2'] == "great_axe") {
                                                                    echo "Секира";
                                                                } else if ($bases[$i]['weapon_name2'] == "bow") {
                                                                    echo "Лук";
                                                                } else if ($bases[$i]['weapon_name2'] == "firestaff") {
                                                                    echo "Посох огня";
                                                                } else if ($bases[$i]['weapon_name2'] == "hatchet") {
                                                                    echo "Топор";
                                                                } else if ($bases[$i]['weapon_name2'] == "lifestaff") {
                                                                    echo "Посох жизни";
                                                                } else if ($bases[$i]['weapon_name2'] == "musket") {
                                                                    echo "Мушкет";
                                                                } else if ($bases[$i]['weapon_name2'] == "sword") {
                                                                    echo "Меч и щит";
                                                                } else if ($bases[$i]['weapon_name2'] == "WarHammer") {
                                                                    echo "Молот";
                                                                } else if ($bases[$i]['weapon_name2'] == "rapier") {
                                                                    echo "Рапира";
                                                                } else if ($bases[$i]['weapon_name2'] == "icegantel") {
                                                                    echo "Ледяная перчатка";
                                                                } else if ($bases[$i]['weapon_name2'] == "spear") {
                                                                    echo "Копье";
                                                                }  ?></div>
                        <div class="build-list__column"><?php echo $bases[$i]['role']; ?></div>
                        <div class="build-list__column">
                            <script>
                                // using static methods
                                var start = <?php echo $bases[$i]['Time']; ?>;
                                // the event you'd like to time goes here:
                                var end = Date.now();
                                var Days = Math.trunc((end - start) / 1000 / 60 / 60 / 24);
                                var Houers = Math.trunc(((end - start) / 1000 / 60 / 60 / 24 - Days) * 24); // time in milliseconds
                                var Minutes = Math.trunc(((end - start) / 1000 / 60 / 60 - Math.trunc((end - start) / 1000 / 60 / 60)) * 60);
                                if (Days == 1) {
                                    document.write(Days + " день назад")
                                } else if (Days > 1 & Days < 5) {
                                    document.write(Days + " дня назад")
                                } else if (Days > 4) {
                                    document.write(Days + " дней назад")
                                } else if (Houers == 1) {
                                    document.write(Houers + " час " + Minutes + " минут назад")
                                } else if (Houers == 0) {
                                    document.write(Minutes + " минут назад")
                                } else if (Houers > 1 & Houers < 5) {
                                    document.write(Houers + " часа " + Minutes + " минут назад")
                                } else {
                                    document.write(Houers + " часов " + Minutes + " минут назад")
                                }
                            </script>
                        </div>
                    </a>

            <?php

                }
            }


            ?>


        </div>
    </div>

    <!--! Список билдов end-->

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
            $AllItemsadress = $adress2 . '&AdressMain=Build&role';
            for ($j = 1; $j <= $pages; $j++) {
                // Выводим ссылки только в том случае, если их номер больше или равен
                // начальному значению, и меньше или равен конечному значению
                if ($j >= $start && $j <= $end) {

                    // Ссылка на текущую страницу выделяется 
                    if ($j == ($page)) echo '<div class="pages__numbers pages__active"  >' . $j . '</div> &nbsp; ';


                    // Ссылки на остальные страницы
                    else echo '<a class="pages__numbers" href="' . $AllItemsadress  . "=" . $_GET['role'] . '&page=' .
                        $j . '&appointment=' . $_GET['appointment'] . '&list_weapon1=' . $_GET['list_weapon1'] . '&list_weapon2=' .  $_GET['list_weapon2'] .    '">' . $j . '</a> &nbsp; ';
                }
            }

            if ($page >= 2) {
                // Значение page= для первой страницы всегда равно единице, 
                // поэтому так и пишем


                echo '<a class="pages__arrowa" href="' . $AllItemsadress  . "=" . $_GET['role'] . '&page=' . '1' . '&appointment=' . $_GET['appointment'] . '&list_weapon1=' . $_GET['list_weapon1'] . '&list_weapon2=' .  $_GET['list_weapon2'] .
                    '">Первая </a> &nbsp; ';

                // Так как мы количество страниц до этого уменьшили на единицу, 
                // то для того, чтобы попасть на предыдущую страницу, 
                // нам не нужно ничего вычислять
                echo '<a class="pages__arrowa" href="' . $AllItemsadress  . "=" . $_GET['role'] . '&page=' . ($page - 1) . '&appointment=' . $_GET['appointment'] . '&list_weapon1=' . $_GET['list_weapon1'] . '&list_weapon2=' .  $_GET['list_weapon2'] .
                    '">Предыдущая </a> &nbsp; ';
            }
            if ($pages > $page) {
                // Чтобы попасть на следующую страницу нужно увеличить $pages на 2
                echo '<a class="pages__arrowa" href="' . $AllItemsadress  . "=" . $_GET['role'] . '&page=' . ($page + 1) . '&appointment=' . $_GET['appointment'] . '&list_weapon1=' . $_GET['list_weapon1'] . '&list_weapon2=' .  $_GET['list_weapon2'] .
                    '"> Следующая</a> &nbsp; ';

                // Так как у нас $j = количество страниц + 1, то теперь 
                // уменьшаем его на единицу и получаем ссылку на последнюю страницу
                echo '<a class="pages__arrowa" href="' . $AllItemsadress  . "=" . $_GET['role'] . '&page=' . ($pages) . '&appointment=' . $_GET['appointment'] . '&list_weapon1=' . $_GET['list_weapon1'] . '&list_weapon2=' .  $_GET['list_weapon2'] .
                    '">Последняя (' . $pages . ')</a> &nbsp; ';
            }
        }

        ?>
    </div>
</div>