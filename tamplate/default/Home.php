<div class="database">
    <div class="container container_sidebar-Home">
        <?php

        if ($_GET['calc_weapon'] == "true") {



            $name = "calc_point";
            $Card_name = '%' . str_replace("%", ' ', $_GET['calc_random']) . '%';
            $dd = 2;
            $leng = strlen($Card_name) + $dd;
            $result = mysqli_query($goods, "SELECT * FROM  $name WHERE random like '$Card_name' and LENGTH(random) <$leng  limit 1  ");
            while ($tettabl = mysqli_fetch_assoc($result)) {
                $bases[] = $tettabl;
            }
            if (empty($bases[0]['name'])) {
        ?>
                <div id="eror" class="eror">
                    <div class="eror__wrapper">
                        <h1 class="eror__title">
                            Поздравляю. Ты все сломал.
                        </h1>
                        <p class="eror__text">
                            Эта страница не существует или еще какая-то непоправимая ошибка.
                        </p>
                    </div>
                </div>
    </div>
</div>
<?php

            } else {
                $name2 = "calc_weapon";
                $result2 = mysqli_query($goods, "SELECT * FROM  $name2 WHERE random like '$Card_name' and LENGTH(random) <$leng  limit 2  ");
                while ($tettabl2 = mysqli_fetch_assoc($result2)) {
                    $bases2[] = $tettabl2;
                }
?>

    <script>
        var strenght_db = <?php echo $bases[0]['strenght']; ?>,
            dexterity_db = <?php echo $bases[0]['dexterity']; ?>,
            intelligence_db = <?php echo $bases[0]['intelligence']; ?>,
            focuss_db = <?php echo $bases[0]['focuss']; ?>,
            constitution_db = <?php echo $bases[0]['constitution']; ?>;
    </script>
    <script>
        var arr = <?php echo json_encode(array_values($bases[0])); ?>; // <-- no quotes, no parsify

        var arr1 = <?php echo json_encode(array_values($bases2[0])); ?>;
        var arr2 = <?php echo json_encode(array_values($bases2[1])); ?>;
        arr1.splice(0, 4);
        arr2.splice(0, 4);
    </script>


    <div class="sidbar-wrapper">
        <div class="sidbar-inherit">

            <div class="Abilities">
                <h1 class="Abilities__title">Калькулятор умений</h1>
                <div id="includedContent3">
                </div>
                <div id="includedContent4">
                </div>
                <div id="js">
                </div>
                <div class="build-stat">
                    <div id="strenght" class="build-stat__item">
                        <div class="build-stat__calc">

                            <div class="build-stat__this-stat">5</div>

                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">STRENGTH (СИЛА)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика для Молота, Секиры и
                                            Топорика</div>
                                        <div class="build-stat__block">
                                            Вторичная характеристика для Копья</div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+15% урона легких атак для оружия ближнего боя,
                                        </div>
                                        <div class="build-stat__block">
                                            +10% скорость добычи руды</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% урона тяжелых атак для оружия ближнего боя,
                                        </div>
                                        <div class="build-stat__block">
                                            +20 к переносимому весу</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+50% урона по выносливости от тяжелых и легких
                                            атак оружием ближнего боя,</div>
                                        <div class="build-stat__block">
                                            -10% снижение веса предметов, добытых киркой</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% урона по оглушенным, замедленным или
                                            обездвиженным целям,</div>
                                        <div class="build-stat__block">
                                            +10% скорость добычи руды</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Stamina продолжает восстанавливаться при
                                            совершении легких и тяжелых атак оружием ближнего боя,</div>
                                        <div class="build-stat__block">
                                            +10% к количеству получаемых предметов при добыче руды</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">легкие и тяжелые атаки оружием ближнего боя
                                            делают вас неудержимым (невосприимчив к контролю),</div>
                                        <div class="build-stat__block">
                                            25% шанс полностью истощить рудную жилу за один взмах киркой</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dexterity" class="build-stat__item">
                        <div class="build-stat__calc">

                            <div class="build-stat__this-stat">5</div>

                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">DEXTERITY (ЛОВКОСТЬ)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика для Лука, Рапиры, Копья и
                                            Мушкета</div>
                                        <div class="build-stat__block">

                                            Вторичная характеристика для Меча/Щита и Топорика</div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+10% шанса критического удара,
                                        </div>
                                        <div class="build-stat__block">
                                            +10 скорость свежевания</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+5% колющего урона (piercing damage),
                                        </div>
                                        <div class="build-stat__block">
                                            +20% ускорения на 3 секунды после свежевания</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">уклонение затрачивает на 10 меньше выносливости,
                                        </div>
                                        <div class="build-stat__block">

                                            -10% веса предметов, получаемых за свежевание</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% урона в спину и в голову,</div>
                                        <div class="build-stat__block">

                                            +10% скорость свежевания</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30% к силе критического урона по оглушенным,
                                            замедленным или обездвиженным врагам,</div>
                                        <div class="build-stat__block">

                                            +10% количества ресурсов, получаемых при свежевании</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Боеприпасы возвращаются с шансом 15%,</div>
                                        <div class="build-stat__block">

                                            после уклонения первый удар всегда критический</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="intelligence" class="build-stat__item">
                        <div class="build-stat__calc">

                            <div class="build-stat__this-stat">5</div>

                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">
                                    INTELLIGENCE (ИНТЕЛЛЕКТ)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика Посоха огня и Перчатки
                                            льда</div>
                                        <div class="build-stat__block">
                                            Вторичная характеристика для Рапиры и Мушкета</div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+10% урона легкими и тяжелыми атаками магическим
                                            оружием,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% скорость сбора растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% критического урона,
                                        </div>
                                        <div class="build-stat__block">
                                            5% шанс получить 1 азота при сборе растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% стихийного урона,</div>
                                        <div class="build-stat__block">

                                            -10% снижение веса предметов, добытых при сборе растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+10 маны после уклонения,</div>
                                        <div class="build-stat__block">

                                            +10% скорость сбора растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30% длительности заклинаний с периодическим
                                            уроном,</div>
                                        <div class="build-stat__block">

                                            +10% количеству предметов, получаемых при сборе растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30% урона за первый удар по целям с полным
                                            здоровьем,</div>
                                        <div class="build-stat__block">

                                            -10% снижение стоимости быстрого перемещения за азот</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="focuss" class="build-stat__item">
                        <div class="build-stat__calc">

                            <div class="build-stat__this-stat">5</div>

                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">
                                    FOCUS (ВНИМАНИЕ)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика для Посоха жизни</div>
                                        <div class="build-stat__block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+10% скорость восстановления маны,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% эффективности при ловле рыбы</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20 к объему маны,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% к количеству предметов, получаемых при разбирании предметов</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% силе лечения,</div>
                                        <div class="build-stat__block">

                                            -10% снижение веса предметов, полученных при рыбалке</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% длительности накладываемых вами баффов,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% эффективности при ловле рыбы</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30 маны при совершении убийства своими руками
                                            или вашей группой,</div>
                                        <div class="build-stat__block">

                                            +10% увеличение размера пойманной рыбы</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">при полном истощении маны получите 200%
                                            регенерации маны на 10 секунд (1 раз в 60 секунд),</div>
                                        <div class="build-stat__block">

                                            10% сокращение времени восстановления быстрого перемещения в таверну</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="constitution" class="build-stat__item">
                        <div class="build-stat__calc">

                            <div class="build-stat__this-stat">5</div>

                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">CONSTITUTION (ТЕЛОСЛОЖЕНИЕ)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика вашего здоровья</div>
                                        <div class="build-stat__block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">все расходники восстанавливающие здоровье
                                            эффективнее на 20%,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% скорость рубки деревьев</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">максимальное здоровье увеличено на 10% от
                                            физической брони,
                                        </div>
                                        <div class="build-stat__block">

                                            10% снижение потери прочности у инструментов</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">на 20% меньше урона от критических ударов,
                                            которые наносят вам,</div>
                                        <div class="build-stat__block">

                                            10% снижение веса предметов, получаемых при рубке деревьев</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% брони,</div>
                                        <div class="build-stat__block">
                                            +10% скорость рубки деревьев</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">вы получаете на 80% меньше урона, пока у вас
                                            полное здоровье,</div>
                                        <div class="build-stat__block">

                                            +10% количество предметов, получаемых при рубке деревьев</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30% к длительности оглушения, замедления и
                                            обездвиживания умениями,</div>
                                        <div class="build-stat__block">

                                            25% шанс срубить дерево одним взмахом топора</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="build-stat__down">
                        <div class="build-stat__sum-point">Осталось очков: 190</div>
                    </div>
                </div>

                <div class="form-descr">
                    <div class="form-descr__item special">

                        <div class="form-descr__main-atr">
                            <div class="form-descr__item-wrapper">
                                <div class="form-descr__upitem">Название</div>
                                <div class="form-descr__subitem"><?php echo $bases[0]['name']; ?></div>
                            </div>
                            <div class="form-descr__item-wrapper">
                                <div class="form-descr__upitem">Назначение</div>
                                <div class="form-descr__subitem"><?php echo $bases[0]['appointment']; ?></div>
                            </div>
                            <div class="form-descr__item-wrapper">
                                <div class="form-descr__upitem">Роль</div>
                                <div class="form-descr__subitem"><?php echo $bases[0]['role']; ?></div>
                            </div>
                        </div>
                        <div class="form-descr__main-descr">
                            <?php echo $bases[0]['Descript']; ?>
                        </div>
                    </div>


                </div>
                <!-- comment -->
                <div class="comment">
                    <div class="comment__title">Комментарии</div>
                    <div class="comment__box">

                        <?php
                        $name = "comments_home";
                        $SelectFilter11 = "build_name='".$_GET["calc_random"]."'";
                        $result5 = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name  WHERE ($SelectFilter11)    ");
                        $count2 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(*)   FROM $name WHERE ($SelectFilter11) "));
                        $countnumber2 = $count2[0];
                        while ($tettabl5 = mysqli_fetch_assoc($result5)) {
                            $bases5[] = $tettabl5;
                        }
                        //start
                        for ($i = 0; $i < $countnumber2; $i++) {

                        ?>
                            <div class="comment__item">
                                <div class="comment__left">
                                    <div class="comment__name"><?php echo $bases5[$i]['login']; ?></div>
                                    <div class="comment__messeg"><?php echo $bases5[$i]['comment']; ?></div>
                                </div>
                                <div class="comment__right"> <span>

                                        <script>
                                            // using static methods
                                            var start = <?php echo $bases5[$i]['time']; ?>;
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
                                    </span></div>
                            </div>
                        <?php
                        }
                        //end 
                        ?>

                    </div>
                    <?php 
                    if (empty($_COOKIE['user']) != true) {
                        if ($_GET['send']) {
                        ?>
                            <div class="registration__sended">Комментарий отправлен</div>
                        <?
                        }
                        ?>
                        <form method="POST" action="<?= TEMPLATE ?>account/comments/comments_home.php">
                            <input style="display: none;" value='<? echo ($_GET["calc_random"]); ?>' name="build" type="text">
                            <input style="display: none;" value="" id="comment__time" name="com_time" type="text">
                            <textarea maxlength="2000" class="comment__text" placeholder="Введите сообщение..." name="text-comment" id="text-comment"></textarea>
                            <button class="comment__btn" type="submit">Отправить комментарий</button>
                        </form>
                        <script>
                            var Timenow = Date.now();
                            document.getElementById('comment__time').value = Timenow;
                        </script>
                    <?php
                    } else {
                    ?>
                        <a style="display: inline-block; margin-bottom:30px;" href="/index.php?&AdressMain=registration" class="comment__reg-link">Добавить комментарий</a>
                    <?php
                    }
                    ?>
                </div>
                <!-- comment -->
            </div>




        </div>


        <div class="sidebar">

        <a target="_blank" href="https://www.newworld.com/en-us" class="sidebar__preorder">
                <img src="<?= TEMPLATE ?>img/new_world_game.jpg" alt="preor" class="sidebar__img">
                <span>официальный сайт</span>
            </a>
            <a style="border: none;" target="_blank" href="https://funpay.ru/chips/135/?utm_source=newworldinfo&utm_medium=banner&utm_campaign=new_world" class="sidebar__preorder">
                        <img src="<?= TEMPLATE ?>img/new_world_game.png" alt="preor" class="sidebar__img">
                    </a>
            <a target="_blank" href="https://vk.com/new_world_amazon" class="sidebar__vk icon-vk"><span>New
                    World VK</span></a>
            <a target="_blank" href="https://www.twitch.tv/playnewworld" class="sidebar__twich icon-twitch"><span>New World twitch</span></a>
            <a target="_blank" href="https://www.youtube.com/c/PlayNewWorld/videos" class="sidebar__youtub icon-youtube"><span>New World youtube</span></a>
        </div>
    </div>


    </div>
    </div>

    </div>
<?php

            }


?>



<?php
        } else {
?>
    <div class="sidbar-wrapper">
        <div class="sidbar-inherit">

            <div class="Abilities">
                <h1 class="Abilities__title">Калькулятор умений</h1>
                <div id="includedContent">
                </div>
                <div id="includedContent2">
                </div>
                <div id="js">
                </div>
                <div class="build-stat">
                    <div id="strenght" class="build-stat__item">
                        <div class="build-stat__calc">
                            <a href="#" class="build-stat__minus1">-1</a>
                            <a href="#" class="build-stat__minus10">-10</a>
                            <div class="build-stat__this-stat">5</div>
                            <a href="#" class="build-stat__plus1">+1</a>
                            <a href="#" class="build-stat__plus10">+10</a>
                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">STRENGTH (СИЛА)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика для Молота, Секиры и
                                            Топорика</div>
                                        <div class="build-stat__block">
                                            Вторичная характеристика для Копья</div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+15% урона легких атак для оружия ближнего боя,
                                        </div>
                                        <div class="build-stat__block">
                                            +10% скорость добычи руды</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% урона тяжелых атак для оружия ближнего боя,
                                        </div>
                                        <div class="build-stat__block">
                                            +20 к переносимому весу</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+50% урона по выносливости от тяжелых и легких
                                            атак оружием ближнего боя,</div>
                                        <div class="build-stat__block">
                                            -10% снижение веса предметов, добытых киркой</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% урона по оглушенным, замедленным или
                                            обездвиженным целям,</div>
                                        <div class="build-stat__block">
                                            +10% скорость добычи руды</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Stamina продолжает восстанавливаться при
                                            совершении легких и тяжелых атак оружием ближнего боя,</div>
                                        <div class="build-stat__block">
                                            +10% к количеству получаемых предметов при добыче руды</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">легкие и тяжелые атаки оружием ближнего боя
                                            делают вас неудержимым (невосприимчив к контролю),</div>
                                        <div class="build-stat__block">
                                            25% шанс полностью истощить рудную жилу за один взмах киркой</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dexterity" class="build-stat__item">
                        <div class="build-stat__calc">
                            <a href="#" class="build-stat__minus1">-1</a>
                            <a href="#" class="build-stat__minus10">-10</a>
                            <div class="build-stat__this-stat">5</div>
                            <a href="#" class="build-stat__plus1">+1</a>
                            <a href="#" class="build-stat__plus10">+10</a>
                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">DEXTERITY (ЛОВКОСТЬ)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика для Лука, Рапиры, Копья и
                                            Мушкета</div>
                                        <div class="build-stat__block">

                                            Вторичная характеристика для Меча/Щита и Топорика</div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+10% шанса критического удара,
                                        </div>
                                        <div class="build-stat__block">
                                            +10 скорость свежевания</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+5% колющего урона (piercing damage),
                                        </div>
                                        <div class="build-stat__block">
                                            +20% ускорения на 3 секунды после свежевания</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">уклонение затрачивает на 10 меньше выносливости,
                                        </div>
                                        <div class="build-stat__block">

                                            -10% веса предметов, получаемых за свежевание</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% урона в спину и в голову,</div>
                                        <div class="build-stat__block">

                                            +10% скорость свежевания</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30% к силе критического урона по оглушенным,
                                            замедленным или обездвиженным врагам,</div>
                                        <div class="build-stat__block">

                                            +10% количества ресурсов, получаемых при свежевании</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Боеприпасы возвращаются с шансом 15%,</div>
                                        <div class="build-stat__block">

                                            после уклонения первый удар всегда критический</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="intelligence" class="build-stat__item">
                        <div class="build-stat__calc">
                            <a href="#" class="build-stat__minus1">-1</a>
                            <a href="#" class="build-stat__minus10">-10</a>
                            <div class="build-stat__this-stat">5</div>
                            <a href="#" class="build-stat__plus1">+1</a>
                            <a href="#" class="build-stat__plus10">+10</a>
                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">
                                    INTELLIGENCE (ИНТЕЛЛЕКТ)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика Посоха огня и Перчатки
                                            льда</div>
                                        <div class="build-stat__block">
                                            Вторичная характеристика для Рапиры и Мушкета</div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+10% урона легкими и тяжелыми атаками магическим
                                            оружием,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% скорость сбора растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% критического урона,
                                        </div>
                                        <div class="build-stat__block">
                                            5% шанс получить 1 азота при сборе растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% стихийного урона,</div>
                                        <div class="build-stat__block">

                                            -10% снижение веса предметов, добытых при сборе растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+10 маны после уклонения,</div>
                                        <div class="build-stat__block">

                                            +10% скорость сбора растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30% длительности заклинаний с периодическим
                                            уроном,</div>
                                        <div class="build-stat__block">

                                            +10% количеству предметов, получаемых при сборе растений</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30% урона за первый удар по целям с полным
                                            здоровьем,</div>
                                        <div class="build-stat__block">

                                            -10% снижение стоимости быстрого перемещения за азот</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="focuss" class="build-stat__item">
                        <div class="build-stat__calc">
                            <a href="#" class="build-stat__minus1">-1</a>
                            <a href="#" class="build-stat__minus10">-10</a>
                            <div class="build-stat__this-stat">5</div>
                            <a href="#" class="build-stat__plus1">+1</a>
                            <a href="#" class="build-stat__plus10">+10</a>
                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">
                                    FOCUS (ВНИМАНИЕ)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика для Посоха жизни</div>
                                        <div class="build-stat__block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+10% скорость восстановления маны,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% эффективности при ловле рыбы</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20 к объему маны,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% к количеству предметов, получаемых при разбирании предметов</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% силе лечения,</div>
                                        <div class="build-stat__block">

                                            -10% снижение веса предметов, полученных при рыбалке</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% длительности накладываемых вами баффов,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% эффективности при ловле рыбы</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30 маны при совершении убийства своими руками
                                            или вашей группой,</div>
                                        <div class="build-stat__block">

                                            +10% увеличение размера пойманной рыбы</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">при полном истощении маны получите 200%
                                            регенерации маны на 10 секунд (1 раз в 60 секунд),</div>
                                        <div class="build-stat__block">

                                            10% сокращение времени восстановления быстрого перемещения в таверну</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="constitution" class="build-stat__item">
                        <div class="build-stat__calc">
                            <a href="#" class="build-stat__minus1">-1</a>
                            <a href="#" class="build-stat__minus10">-10</a>
                            <div class="build-stat__this-stat">5</div>
                            <a href="#" class="build-stat__plus1">+1</a>
                            <a href="#" class="build-stat__plus10">+10</a>
                        </div>
                        <div class="build-stat__line-box">
                            <div class="build-stat__name">
                                <p class="build-stat__text">CONSTITUTION (ТЕЛОСЛОЖЕНИЕ)</p>
                                <div class="build-stat__ico">
                                    ?
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">Основная характеристика вашего здоровья</div>
                                        <div class="build-stat__block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="build-stat__line">
                                <div></div>
                                <div class="build-stat__after"></div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">все расходники восстанавливающие здоровье
                                            эффективнее на 20%,
                                        </div>
                                        <div class="build-stat__block">

                                            +10% скорость рубки деревьев</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">максимальное здоровье увеличено на 10% от
                                            физической брони,
                                        </div>
                                        <div class="build-stat__block">

                                            10% снижение потери прочности у инструментов</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">на 20% меньше урона от критических ударов,
                                            которые наносят вам,</div>
                                        <div class="build-stat__block">

                                            10% снижение веса предметов, получаемых при рубке деревьев</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+20% брони,</div>
                                        <div class="build-stat__block">
                                            +10% скорость рубки деревьев</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">вы получаете на 80% меньше урона, пока у вас
                                            полное здоровье,</div>
                                        <div class="build-stat__block">

                                            +10% количество предметов, получаемых при рубке деревьев</div>
                                    </div>
                                </div>
                                <div class="build-stat__kugel">
                                    <div class="build-stat__stuf-decrs">
                                        <div class="build-stat__block">+30% к длительности оглушения, замедления и
                                            обездвиживания умениями,</div>
                                        <div class="build-stat__block">

                                            25% шанс срубить дерево одним взмахом топора</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="build-stat__down">
                        <div class="build-stat__sum-point">Осталось очков: 190</div>
                        <a href="#" class="build-stat__drop-stat">СБРОС</a>
                    </div>
                </div>
                <div class="form-descr">
                    <div class="form-descr__item">
                        <label for="form-descr__name" class="form-descr__wrapper">
                            <input id="form-descr__name" maxlength="40" minlength="4" autocomplete="off" type="text" class=" form-descr__name">
                            <div class="form-descr__placeholder">Название</div>
                        </label>
                        <div id="appointment" class="form-descr__list">
                            <div class="__select" data-state="">
                                <div class="__select__title" data-default="Не указана">Универсальный</div>
                                <div class="__select__content">
                                    <input id="singleSelect_0" class="__select__input" type="radio" name="singleSelect_" checked />
                                    <label for="singleSelect_0" class="__select__label ">Option 0</label>

                                    <input id="singleSelect_1" class="__select__input" type="radio" name="singleSelect_" />
                                    <label for="singleSelect_1" class="__select__label">ПВП</label>

                                    <input id="singleSelect_2" class="__select__input" type="radio" name="singleSelect_" />
                                    <label for="singleSelect_2" class="__select__label">ПВЕ </label>

                                    <input id="singleSelect_3" class="__select__input" type="radio" name="singleSelect_" />
                                    <label for="singleSelect_3" class="__select__label">Осады</label>

                                    <input id="singleSelect_4" class="__select__input" type="radio" name="singleSelect_" />
                                    <label for="singleSelect_4" class="__select__label">Данжи</label>

                                    <input id="singleSelect_5" class="__select__input" type="radio" name="singleSelect_" checked />
                                    <label for="singleSelect_5" class="__select__label">Универсальный</label>
                                </div>
                            </div>
                            <div class="form-descr__placeholder">Назначение</div>
                        </div>
                        <div id="role" class="form-descr__list">
                            <div class="__select" data-state="">
                                <div class="__select__title" data-default="Не указана">Не указана</div>
                                <div class="__select__content">
                                    <input id="singleSelect0" class="__select__input" type="radio" name="singleSelect_1" checked />
                                    <label for="singleSelect0" class="__select__label ">Option 0</label>

                                    <input id="singleSelect1" class="__select__input" type="radio" name="singleSelect_1" />
                                    <label for="singleSelect1" class="__select__label">Танк</label>

                                    <input id="singleSelect2" class="__select__input" type="radio" name="singleSelect_1" />
                                    <label for="singleSelect2" class="__select__label">Хил </label>

                                    <input id="singleSelect3" class="__select__input" type="radio" name="singleSelect_1" />
                                    <label for="singleSelect3" class="__select__label">ДД</label>

                                    <input id="singleSelect4" class="__select__input" type="radio" name="singleSelect_1" />
                                    <label for="singleSelect4" class="__select__label">РДД</label>

                                    <input id="singleSelect5" class="__select__input" type="radio" name="singleSelect_1" checked />
                                    <label for="singleSelect5" class="__select__label">Не указана</label>

                                </div>
                            </div>
                            <div class="form-descr__placeholder">Роль</div>
                        </div>

                    </div>
                    <div class="form-descr__item">
                        <div class="form-descr__check-wrapper ">
                            <div class="form-descr__check-box"><span class=" form-descr__arrow"></span></div>
                            <div class="form-descr__check-text">Приватный билд (доступен только по ссылке и не отображается в общем списке)</div>
                        </div>
                    </div>


                    <div class="form-descr__item">
                        <div class="text-redact">
                            <div class="text-redact__panel">
                                <div class="text-redact__panel1">
                                    <a href="#" id="bold" class="text-redact__svg-wrapper">
                                        B
                                        <div class="text-redact__descr">Жирный</div>
                                    </a>
                                    <a href="#" id="italic" class="text-redact__svg-wrapper">
                                        I
                                        <div class="text-redact__descr">Курсив</div>
                                    </a>
                                    <a href="#" id="strikethrough" class="text-redact__svg-wrapper">
                                        S
                                        <div class="text-redact__descr">Зачёркнутый текст</div>
                                    </a>
                                    <a href="#" id="HorizontalRule" class="text-redact__svg-wrapper">
                                        __
                                        <div class="text-redact__descr">Линия</div>
                                    </a>
                                    <a href="#" id="underline" class="icon-underline text-redact__svg-wrapper">

                                        <div class="text-redact__descr">Подчеркивание</div>
                                    </a>
                                    <a href="#" id="move-up" class="icon-move-up text-redact__svg-wrapper">

                                        <div class="text-redact__descr">Верхний индекс</div>
                                    </a>
                                    <a href="#" id="move-down" class="icon-move-down text-redact__svg-wrapper">
                                        <div class="text-redact__descr">Нижний индекс</div>
                                    </a>
                                </div>
                                <div class="text-redact__panel1">


                                    <div id="font_style" class="icon-font-size form-descr__list">
                                        <div class=" __select" data-state="">
                                            <div id="font_style_" class=" __select__title" data-default="Не указана">Шрифт</div>
                                            <div class="__select__content">
                                                <input id="singleSelect0" class="__select__input" type="radio" name="singleSelect" checked />
                                                <label for="singleSelect0" class="__select__label1 __select__label ">Option 0</label>

                                                <input id="singleSelect1" class="__select__input" type="radio" name="singleSelect" />

                                                <label for="singleSelect1" class="__select__label1 __select__label" onmousedown="event.preventDefault();"> Arial</label>

                                                <input id="singleSelect2" class="__select__input" type="radio" name="singleSelect" />
                                                <label for="singleSelect2" class="__select__label1 __select__label" onmousedown="event.preventDefault();">Courier New </label>

                                                <input id="singleSelect3" class="__select__input" type="radio" name="singleSelect" />
                                                <label for="singleSelect3" class="__select__label1 __select__label" onmousedown="event.preventDefault();">Georgia</label>

                                                <input id="singleSelect4" class="__select__input" type="radio" name="singleSelect" />
                                                <label for="singleSelect4" class="__select__label1 __select__label" onmousedown="event.preventDefault();">Times New Roman</label>

                                            </div>
                                        </div>

                                    </div>

                                    <div id="font_size" class="icon-font-size form-descr__list">
                                        <div class=" __select" data-state="">
                                            <div id="font_style_" class=" __select__title" data-default="Не указана">Размер шрифта</div>
                                            <div class="__select__content">
                                                <input id="singleSelect0" class="__select__input" type="radio" name="singleSelect" checked />
                                                <label for="singleSelect0" class="__select__label ">Option 0</label>

                                                <input id="singleSelect1" class="__select__input" type="radio" name="singleSelect" />

                                                <label for="singleSelect1" class="__select__label2 __select__label" onmousedown="event.preventDefault();">10px</label>

                                                <input id="singleSelect2" class="__select__input" type="radio" name="singleSelect" />
                                                <label for="singleSelect2" class="__select__label2 __select__label" onmousedown="event.preventDefault();">13px</label>

                                                <input id="singleSelect3" class="__select__input" type="radio" name="singleSelect" />
                                                <label for="singleSelect3" class="__select__label2 __select__label" onmousedown="event.preventDefault();">16px</label>

                                                <input id="singleSelect4" class="__select__input" type="radio" name="singleSelect" />
                                                <label for="singleSelect4" class="__select__label2 __select__label" onmousedown="event.preventDefault();">18px</label>
                                                <input id="singleSelect5" class="__select__input" type="radio" name="singleSelect" />
                                                <label for="singleSelect5" class="__select__label2 __select__label" onmousedown="event.preventDefault();">24px</label>
                                                <input id="singleSelect6" class="__select__input" type="radio" name="singleSelect" />
                                                <label for="singleSelect6" class="__select__label2 __select__label" onmousedown="event.preventDefault();">32px</label>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="text-redact__panel1">
                                    <a href="#" id="paragraph-left" class="icon-paragraph-left text-redact__svg-wrapper">

                                        <div class="text-redact__descr">Выравнивание текста по левому краю</div>
                                    </a>
                                    <a href="#" id="paragraph-center" class="icon-paragraph-center text-redact__svg-wrapper">
                                        <div class="text-redact__descr">Выравнивание текста по центру</div>
                                    </a>

                                    <a href="#" id="paragraph-right" class="icon-paragraph-right text-redact__svg-wrapper">
                                        <div class="text-redact__descr">Выравнивание текста по правому краю</div>
                                    </a>

                                    <a href="#" id="sort-numberic" class="icon-sort-numberic-desc text-redact__svg-wrapper">
                                        <div class="text-redact__descr">Пронумерованный список</div>
                                    </a>
                                    <a href="#" id="sort-alpha" class="icon-sort-alpha-asc text-redact__svg-wrapper">
                                        <div class="text-redact__descr">Маркированный список</div>
                                    </a>
                                </div>
                            </div>
                            <div contenteditable="true" max="50000" class="text-redact__area"></div>
                        </div>

                    </div>


                    <div class="form-descr__item">
                        <div class="form-descr__btn">Сохранить</div>
                    </div>
                    <div class="form-descr__item">

                        <div class="form-descr__alert"></div>
                    </div>

                </div>
                <div class="form-descr__item display-none1">
                    <div class="form-descr__copy">
                        <a href="" class="form-descr__copy-text"></a>
                        <div onclick="copytext('.form-descr__copy-text')" class="form-descr__copy-btn">Копировать ссылку</div>
                    </div>
                </div>

            </div>
        </div>


        <div class="sidebar">

        <a target="_blank" href="https://www.newworld.com/en-us" class="sidebar__preorder">
                <img src="<?= TEMPLATE ?>img/new_world_game.jpg" alt="preor" class="sidebar__img">
                <span>официальный сайт</span>
            </a>
            <a style="border: none;" target="_blank" href="https://funpay.ru/chips/135/?utm_source=newworldinfo&utm_medium=banner&utm_campaign=new_world" class="sidebar__preorder">
                        <img src="<?= TEMPLATE ?>img/new_world_game.png" alt="preor" class="sidebar__img">
                    </a>
            <a target="_blank" href="https://vk.com/new_world_amazon" class="sidebar__vk icon-vk"><span>New
                    World VK</span></a>
            <a target="_blank" href="https://www.twitch.tv/playnewworld" class="sidebar__twich icon-twitch"><span>New World twitch</span></a>
            <a target="_blank" href="https://www.youtube.com/c/PlayNewWorld/videos" class="sidebar__youtub icon-youtube"><span>New World youtube</span></a>
        </div>
    </div>

    </div>

    </div>

    <!--! Страница калькулятора end -->
<?php
        }
?>