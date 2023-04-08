<?php
    require_once "../../../config.php";

    ?>

<!--! Страница умений оружия -->
<div class="Abilities-weapon">
<div class="Abilities-weapon__calc">
        <a id="back" href="#" class="Abilities-weapon__back">Вернуться к выбору</a>
        <a id="drop" href="#" class="Abilities-weapon__drop">Сброс вложенных очков</a>
    </div>
    <h1 class="Abilities-weapon__title">Копье</h1>
    <div class="Abilities-weapon__box">
        <h4 class="Abilities-weapon__subtitle">
            Зависимость урона от характеристик:
        </h4>
        <div class="Abilities-weapon__stat">
            Ловкость (x0.9) и сила (x0.65)</div>
        <h4 class="Abilities-weapon__subtitle">
            Типы атак и урон:
        </h4>
        <div class="Abilities-weapon__stat">
            Обычная: 100% колющего (Thrust) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая: 130% колющего (Thrust) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая заряженная: 165% колющего (Thrust) урона</div>
        <div class="Abilities-weapon__stat">

        </div>
    </div>
    <div class="Abilities-weapon__points">
        Вложено очков : 0 (Доступно 19)
    </div>
    <div class="Abilities-weapon__wrapper">
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Zoner</h4>
            <h5 class="Abilities-weapon__name-rus">Зонер</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/refreshing-reach.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Refreshing Reach</div>
                                    <p class="Abilities-weapon__text">Успешные тяжелые атаки снижают время восстановления всех умений копья на 15%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/cyclone.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Cyclone</div>
                                    <p class="Abilities-weapon__text">Атака с вращением, наносящая 110% урона от оружия.
                                        Отталкивает врагов на 3 метра и накладывает замедление на 50% на 3 сек.
                                        Время восстановления: 12 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/invigorating-combo.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Invigorating Combo</div>
                                    <p class="Abilities-weapon__text">Восстанавливает 25 единиц выносливости за каждый удар умением.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/strong-momentum.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Strong Momentum</div>
                                    <p class="Abilities-weapon__text">Умение получает эффект Grit и не может быть прервано врагом.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/deadly-consistency.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Deadly Consistency</div>
                                    <p class="Abilities-weapon__text">+10% урона при последовательных тяжелых атаках против одной цели.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="2" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/invigorating-crits.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Invigorating Crits</div>
                                    <p class="Abilities-weapon__text">Криты восстанавливают 20 единиц выносливости.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/strong-conditioning.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Strong Conditioning</div>
                                    <p class="Abilities-weapon__text">+30% скорости восстановления выносливости если ваша выносливость ниже 50%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">

                        <div data-lin="1" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/javelin.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Javelin</div>
                                    <p class="Abilities-weapon__text">Вы метаете копье, нанося 125% урона от оружия и ошеломляя цель при попадании.
                                        Время восстановления: 15 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/forceful-impact.png" alt="skill" class="Abilities-weapon__img">

                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Forceful Impact</div>
                                    <p class="Abilities-weapon__text">Умение отбрасывает цель при попадании.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="3" data-build="1" class="Abilities-weapon__skill ">

                        </div>
                        <div data-lin="4" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/refreshing-precision.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Refreshing Precision</div>
                                    <p class="Abilities-weapon__text">Headshot уменьшает время восстановления умения на 50%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/deadly-distance.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Deadly Distance</div>
                                    <p class="Abilities-weapon__text">+2.5% урона за каждый метр пройденного копьем расстояния. (Максимум +100%)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/deadly-reach.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Deadly Reach</div>
                                    <p class="Abilities-weapon__text">+10% шанса крита по врагам на расстоянии 3 метров и более.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/evasive-maneuvers.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Evasive Maneuvers</div>
                                    <p class="Abilities-weapon__text">Уклонение назад использует на 20% меньше выносливости в течение 2 секунд после успешных попаданий.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/merciless-strength.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Merciless Strength</div>
                                    <p class="Abilities-weapon__text">+25% урона по сбитым целям.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/defensive-stance.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Defensive Stance</div>
                                    <p class="Abilities-weapon__text">Успешные тяжелые атаки дают Fortify, уменьшающий входящий урон на 15% на 2 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="1" class="Abilities-weapon__skill">

                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="1" class="Abilities-weapon__skill">

                        </div>

                        <div data-lin="2" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/sweep.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Sweep</div>
                                    <p class="Abilities-weapon__text">Размашистая атака по ногам, наносящая 75% урона от оружия и опрокидывающая врагов.
                                        Время восстановления: 10 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/tenacious-sweep.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Tenacious Sweep</div>
                                    <p class="Abilities-weapon__text">Умение получает эффект Grit и не может быть прервано врагом.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/coup-de-grace.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Coup de Grâce</div>
                                    <p class="Abilities-weapon__text">Нажмите ЛКМ во время применения Sweep что бы провести дополнительную атаку, наносящую 125% урона от оружия.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="1" class="Abilities-weapon__skill">

                        </div>
                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="1" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/reserved-strength.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Reserved Strength</div>
                            <p class="Abilities-weapon__text">+25% урона при полной выносливости.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 bild -->
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Impaler</h4>
            <h5 class="Abilities-weapon__name-rus">Цепеш</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/precise-jabs.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Precise Jabs</div>
                                    <p class="Abilities-weapon__text">+5% к шансу крита для легких атак.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active ">
                                <img src="<?= TEMPLATE ?>img/skill/perforate.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Perforate</div>
                                    <p class="Abilities-weapon__text">Три быстрые колющие атаки, каждая из которых наносит 70% урона от оружия и накладывает Rend, что снижает поглощение урона цели на 5% на 10 сек.
                                        Время восстановления: 12 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="2" class="Abilities-weapon__skill">
                        </div>
                        <div  data-lin="4" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-befor_second ">
                                <img src="<?= TEMPLATE ?>img/skill/rupturing-strikes.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Rupturing Strikes</div>
                                    <p class="Abilities-weapon__text">Эффект Rend усилен до 10% за каждую атаку умением против целей с более 50% здоровья.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="1" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/impactful-strikes.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Impactful Strikes</div>
                                    <p class="Abilities-weapon__text">Ошеломляет врага если все три удара попали в цель.
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
                                <img src="<?= TEMPLATE ?>img/skill/crippling-jabs.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Crippling Jabs</div>
                                    <p class="Abilities-weapon__text">Последняя атака в цепочке легких атак замедляет цель на 30% на 3 секунды если у цели менее 30% здоровья.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/unerring-precision.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Unerring Precision</div>
                                    <p class="Abilities-weapon__text">+20% урона по целям с активным эффектом Grit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/exacerbating-crits.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Exacerbating Crits</div>
                                    <p class="Abilities-weapon__text">Критические удары копья увеличивают продолжительность дебаффов и кровотечения на 20%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">

                        <div data-lin="1" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/skewer.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Skewer</div>
                                    <p class="Abilities-weapon__text">Вы совершаете рывок с уколом, наносящим 125% урона от оружия. Накладывает на цель кровотечение, наносящее 10% урона от оружия в секунду в течнии 10 секунд.
                                        Время восстановления: 15 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/deadly-ambush.png" alt="skill" class="Abilities-weapon__img">

                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Deadly Ambush</div>
                                    <p class="Abilities-weapon__text">+20% урона против целей с полным здоровьем.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/follow-through.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Follow Through</div>
                                    <p class="Abilities-weapon__text">Критические атаки увеличивают ваш урон на 20% в течении 10 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/deep-wound.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Deep Wound</div>
                                    <p class="Abilities-weapon__text">Длительность кровотечения увеличена до 15 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="2" class="Abilities-weapon__skill">

                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="2" class="Abilities-weapon__skill">
                           
                        </div>
                        <div data-lin="2" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/finishing-blows.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Finishing Blows</div>
                                    <p class="Abilities-weapon__text">+15% урона против целей с менее 30% здоровья.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/aggressive-maneuvers.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Aggressive Maneuvers</div>
                                    <p class="Abilities-weapon__text">Первая успешная атака умением в течении 2 секунд после уклонения уменьшает время восстановления всех умений копья на 20%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/exposed-wounds.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Exposed Wounds</div>
                                    <p class="Abilities-weapon__text">+15% к шансу крита против целей с кровотечением.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div  class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="2" class="Abilities-weapon__skill">
                        <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/refreshing-jabs.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Refreshing Jabs</div>
                                    <p class="Abilities-weapon__text">Вторая атака в цепочке легких атак снижает время восстановления всех умений копья на 10%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            
                        </div>
                        <div data-lin="3" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/vault-kick.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Vault Kick</div>
                                    <p class="Abilities-weapon__text">Опираясь на копье вы делаете рывок вперед и проводите удар ногой. Наносит 75% урона оружием, оглушает цель на 1.5 секунды. Если в копье вставлен Carnelian Gem, умение провоцирует врага на 2 сек. (Монстры будут атаковать только вас) Время восстановления: 15 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/relentless-blows.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Relentless Blows</div>
                                    <p class="Abilities-weapon__text">Успешная атака цели с менее 50% здоровья увеличивает урон на 20% на 5 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/continuous-motion.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Continuous Motion</div>
                                    <p class="Abilities-weapon__text">Успешная атака умением снижает время восстановления других умений копья на 30%.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="2" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/exploited-weakness.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Exploited Weakness</div>
                            <p class="Abilities-weapon__text">+10% урона за каждый дебафф наложенный на цели. (Максимум до 30%)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--! Страница умений оружия end-->

<script> var name_file="spear";</script>

 <script src="<?= TEMPLATE ?>js/js_build_1.js">  
</script>