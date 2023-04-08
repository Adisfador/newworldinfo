<?php
    require_once "../../../../config.php";

    ?>

<!--! Страница умений оружия -->
<div class="Abilities-weapon">

    <h1 class="Abilities-weapon__title">Мушкет</h1>
    <div class="Abilities-weapon__box">
        <h4 class="Abilities-weapon__subtitle">
            Зависимость урона от характеристик:
        </h4>
        <div class="Abilities-weapon__stat">
            Ловкость (x0.9) и интеллект (x0.65)</div>
        <h4 class="Abilities-weapon__subtitle">
            Типы атак и урон:
        </h4>
        <div class="Abilities-weapon__stat">
            Обычная: 100% колющего (Thrust) урона</div>
        <div class="Abilities-weapon__stat">
        </div>
        <div class="Abilities-weapon__stat">
        </div>
        <div class="Abilities-weapon__stat">

        </div>
    </div>
    <div class="Abilities-weapon__points">
    Вложено очков : 19 (Доступно 0)
    </div>
    <div class="Abilities-weapon__wrapper">
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Sharpshooter</h4>
            <h5 class="Abilities-weapon__name-rus">Снайпер</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/powder-burn.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Powder Burn</div>
                                    <p class="Abilities-weapon__text">Засыпьте больше пороха, чтобы нанести 110% урона от оружия следующей атакой и поджечь врага на 20% урона от оружия в секунду на 9 сек. Не совместим с другими Overload умениями.
                                        Время восстановления: 15 сек.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="3" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/backdraft.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Backdraft</div>
                                    <p class="Abilities-weapon__text">Обычные выстрелы мушкета наносят +12% урона горящим врагам.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/chronic-trauma.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Chronic Trauma</div>
                                    <p class="Abilities-weapon__text">Если вы делаете Headshot умением, время горения продлевается до 13 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="1" data-build="1" class="Abilities-weapon__skill">

                        </div>

                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/critical-reload.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Critical Reload</div>
                                    <p class="Abilities-weapon__text">Если вы произвели 3 Headshots с периодичностью не более чем 5 сек между ними, то мушкет перезарядится мгновенно.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/greater-accuracy.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Greater Accuracy</div>
                                    <p class="Abilities-weapon__text">Убирает штраф к точности при стрельбе в движении.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/ballistic-advantage.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Ballistic Advantage</div>
                                    <p class="Abilities-weapon__text">Убирает снижение урона обычных выстрелов мушкета по целям на расстоянии более 50 метров.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/hit-your-mark.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Hit Your Mark</div>
                                    <p class="Abilities-weapon__text">Увеличивает критический урон и урон Headshot в зависимости от расстояния до цели. Максимум +15% для цели на расстоянии 100 метров.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/power-shot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Power Shot</div>
                                    <p class="Abilities-weapon__text">Засыпьте больше пороха чтобы нанести 150% урона от оружия следующей атакой. Не совместим с другими Overload умениями.
                                        Время восстановления: 15 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/initial-engagement.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Initial Engagement</div>
                                    <p class="Abilities-weapon__text">Успешная атака умением дает 10% Empower на 5 сек. (Эффект увеличивает урон)</p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="3" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/first-blood.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">First Blood</div>
                                    <p class="Abilities-weapon__text">+10% урона по целям с полным запасом здоровья.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="3" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/bullseye.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Bullseye</div>
                                    <p class="Abilities-weapon__text">Headshot умением снижает время восстановления умения на 15%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="1" class="Abilities-weapon__skill ">

                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/called-shot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Called Shot</div>
                                    <p class="Abilities-weapon__text">Если вы держите врага на мушке более 3 сек, урон увеличивается 5%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="4" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="4" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/called-shot-resupply.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Called Shot Resupply</div>
                                    <p class="Abilities-weapon__text">Headshots обычными выстрелами снижает время восстановления всех умений мушкета на 10%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/heightened-precision.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Heightened Precision</div>
                                    <p class="Abilities-weapon__text">Во время прицеливания каждый успешный выстрел увеличивает урон на 2.5%. Бонус обнулится, если вы перестанете целиться или между выстрелами пройдет более 5 сек. (Суммируется до 6 раз)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/empowering-headshot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Empowering Headshot</div>
                                    <p class="Abilities-weapon__text">Headshot дает 10% Empower на 5 сек. (Эффект увеличивает урон)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/shooters-stance.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Shooter's Stance</div>
                                    <p class="Abilities-weapon__text">Вы переходите в стойку стрелка, что увеличивает эффективность стрельбы. Выстрелы наносят 100% урона от оружия. Угол прицеливания ограничен 180°, скорость снижается до нуля, точность повышена на 10%, скорость перезарядки повышена на 75%.
                                        После 3 выстрелов вы выходите из стойки.
                                        Время восстановления: 20 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/shoot-more.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Shoot More</div>
                                    <p class="Abilities-weapon__text">Количество выстрелов в стойке увеличено до 5.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/marksman.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Marksman</div>
                                    <p class="Abilities-weapon__text">Если 3 выстрела подряд поразят одну и ту же цель, время восстановления всех умений мушкета снизится на 25%.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="1" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper  main-img">
                        <img src="<?= TEMPLATE ?>img/skill/sniper.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Sniper</div>
                            <p class="Abilities-weapon__text">Добавляет 3-х кратное увеличение прицелу, используйте колесико мышки для приближения. Увеличивает урон всех Headshots на 15%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 bild -->
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Trapper</h4>
            <h5 class="Abilities-weapon__name-rus">Ловец</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper  ">
                                <img src="<?= TEMPLATE ?>img/skill/salt-on-the-wounds.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Salt On The Wounds</div>
                                    <p class="Abilities-weapon__text">+15% урона по врагам с менее 30% здоровья.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active ">
                                <img src="<?= TEMPLATE ?>img/skill/stopping-power.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Stopping Power</div>
                                    <p class="Abilities-weapon__text">Засыпьте больше пороха чтобы нанести 120% урона от оружия следующей атакой, ошеломить цель и отбросить её на 3 метра. Не совместим с другими Overload умениями.
                                        Время восстановления: 18 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/lasting-impression.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Lasting Impression</div>
                                    <p class="Abilities-weapon__text">Умение теперь вешает 10% Exhaust на 8 сек (Эффект уменьшает скорость восстановления выносливости)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-befor ">
                                <img src="<?= TEMPLATE ?>img/skill/supplementary-repulsion.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Supplementary Repulsion</div>
                                    <p class="Abilities-weapon__text">Цели, пораженные умением замедлены на 10% на 8 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/weakened-defense.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Weakened Defense</div>
                                    <p class="Abilities-weapon__text">Стандартные атаки наносят урон выносливости врагам прикрывающимся щитом увеличенный на 50. Пробивает 10% брони врага, который не прикрыт щитом.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/hustle.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Hustle</div>
                                    <p class="Abilities-weapon__text">При уклонении дает 10% Haste на 3 сек. (Эффект повышает скорость)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/energy-burst.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Energy Burst</div>
                                    <p class="Abilities-weapon__text">Попадание в цель с активным отрицательным эффектом восстановит 20 выносливости.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="2" data-build="2" class="Abilities-weapon__skill">

                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">

                        <div data-lin="1" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/traps.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Traps</div>
                                    <p class="Abilities-weapon__text">Бросить ловушку на 20 сек. При срабатывании, обездвиживает цель на 3 секунды.
                                        Время восстановления: 20 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/trapped-damage.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Trapped Damage</div>
                                    <p class="Abilities-weapon__text">Ловушки вешают Rend, +20% урона попавшим в ловушку целям на 3 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="3" data-build="2" class="Abilities-weapon__skill ">

                        </div>
                        <div data-lin="4" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/scent-of-blood.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Scent of Blood</div>
                                    <p class="Abilities-weapon__text">100% урона попавшим в ловушку врагам конвертируется в здоровье.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/double-trap.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Double Trap</div>
                                    <p class="Abilities-weapon__text">Возможность иметь две активные ловушки.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/empowering-weakness.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Empowering Weakness</div>
                                    <p class="Abilities-weapon__text">Успешная атака по цели с активным отрицательным эффектом дает 5% Empower на 5 сек. (Эффект увеличивает урон)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/tactical-reload.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Tactical Reload</div>
                                    <p class="Abilities-weapon__text">Уклонение перезаряжает мушкет. Время восстановления: 6 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/kickem.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Kick 'em When They're Down</div>
                                    <p class="Abilities-weapon__text">Наносит 10% дополнительного урона целям с активными негативными эффектами.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/back-it-up.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Back It Up</div>
                                    <p class="Abilities-weapon__text">Скорость передвижения при ходьбе/стрельбе увеличивается на 10% если в пределах 8 метров есть враги.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="5" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/sticky-bomb.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Sticky Bomb</div>
                                    <p class="Abilities-weapon__text">Бомба, которую можно бросить с близкого расстояния и которая прилипает ко всему, с чем соприкасается. Детонация произойдет через 3 секунд после удара, нанося 175% урона от оружия всем целям в радиусе 3-х метров.
                                        Время перезарядки: 12 сек</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/unflinching-walk.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Unflinching Walk</div>
                                    <p class="Abilities-weapon__text">Взрыв бомбы-липучки восстанавливает 40 выносливости.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/sticky-slow.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Sticky Slow</div>
                                    <p class="Abilities-weapon__text">Прямые попадания бомбы-липучки замедляют цель на 15% на 3 сек.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="2" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/compounded-adrenaline.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Lethal Combo</div>
                            <p class="Abilities-weapon__text">Урон мушкета увеличивается на 20% если цель поражена любыми способностями ветви Trapper .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--! Страница умений оружия end-->

<script>
    mas2 = arr2;
</script>

 <script src="<?= TEMPLATE ?>js/js_build_2_db.js">  
</script>