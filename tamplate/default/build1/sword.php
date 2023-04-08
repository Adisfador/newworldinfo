<?php
require_once "../../../config.php";

?>


<!--! Страница умений оружия -->
<div class="Abilities-weapon">
    <div class="Abilities-weapon__calc">
        <a id="back" href="#" class="Abilities-weapon__back">Вернуться к выбору</a>
        <a id="drop" href="#" class="Abilities-weapon__drop">Сброс вложенных очков</a>
    </div>
    <h1 class="Abilities-weapon__title">Меч и щит</h1>
    <div class="Abilities-weapon__box">
        <h4 class="Abilities-weapon__subtitle">
            Зависимость урона от характеристик:
        </h4>
        <div class="Abilities-weapon__stat">
            Сила (x0.9) и ловкость (x0.65)</div>
        <h4 class="Abilities-weapon__subtitle">
            Типы атак и урон:
        </h4>
        <div class="Abilities-weapon__stat">
            Обычная: 100% рубящего (Slash) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая: 120% колющего (Thrust) урона</div>
        <div class="Abilities-weapon__stat">
            Обычная завершающая: 105% рубящего (Slash) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая заряженная: 160% колющего (Thrust) урона.</div>
    </div>
    <div class="Abilities-weapon__points">
        Вложено очков : 0 (Доступно 19)
    </div>
    <div class="Abilities-weapon__wrapper">
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Swordmaster</h4>
            <h5 class="Abilities-weapon__name-rus">Мастер меча</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="1" class="Abilities-weapon__skill">
                        </div>
                        <div data-lin="2" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/reverse-stab.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Reverse Stab</div>
                                    <p class="Abilities-weapon__text">Колющая атака, наносящая 175%
                                        урона от оружия. Время восстановления: 20 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/unstoppable-stab.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Unstoppable Stab</div>
                                    <p class="Abilities-weapon__text">Умение получает Grit. (Под
                                        действием эффекта Grit умение не может быть прервано врагом)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="1" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/tactician.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Tactician</div>
                                    <p class="Abilities-weapon__text">Успешное применение умения снижает
                                        время восстановления всех умений меча на 25%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="1" class="Abilities-weapon__skill">
                        </div>
                        <div data-lin="2" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/precision.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Precision</div>
                                    <p class="Abilities-weapon__text">Шанс критической атаки мечом
                                        повышен на 10%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/mobility.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Mobility</div>
                                    <p class="Abilities-weapon__text">Во время блокирования вы
                                        двигаетесь на 33% быстрее.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/opportunist.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Opportunist</div>
                                    <p class="Abilities-weapon__text">Вы наносите на 10% больше урона
                                        замедленным целям.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/confidence.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Confidence</div>
                                    <p class="Abilities-weapon__text">Вы наносите на 15% больше урона
                                        пока имеете 100% хп.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/whirling-blade.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Whirling Blade</div>
                                    <p class="Abilities-weapon__text">Вы наносите 145% урона от оружия
                                        всем врагам в радиусе 2 метров. Время восстановления: 15 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/opportunity.png" alt="skill" class="Abilities-weapon__img">

                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Opportunity</div>
                                    <p class="Abilities-weapon__text">Умение вешает на врага 5% Rend на
                                        5
                                        сек. (Эффект Rend снижает броню врага)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="3" data-build="1" class="Abilities-weapon__skill ">

                        </div>

                        <div data-lin="4" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/tactical-strike.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Tactical Strike</div>
                                    <p class="Abilities-weapon__text">Время восстановления умения
                                        снижается на 10% за каждого пораженного врага.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="1" class="Abilities-weapon__skill">
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/empowered-stab.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Empowered Stab</div>
                                    <p class="Abilities-weapon__text">Успешная тяжелая атака даст вам
                                        30% Empower на 5 сек. (Эффект Empower повышает ваш урон)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/freeing-justice.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Freeing Justice</div>
                                    <p class="Abilities-weapon__text">Успешная тяжелая атака снимает с
                                        вас все негативные эффекты.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/counter-attack.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Counter Attack</div>
                                    <p class="Abilities-weapon__text">Успешное блокирование дает вам
                                        эффект Empower, увеличивающий урон на 3% на 5 секунд. Эффект может складываться до 5 раз.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="4" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/critical-precision.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Critical Precision</div>
                                    <p class="Abilities-weapon__text">Вы получаете 20% Hast на 5 сек.
                                        когда наносите критический урон. (Эффект Haste повышает вашу
                                        скорость)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/achilles-heel.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Achilles Heel</div>
                                    <p class="Abilities-weapon__text">Финальная атака в серии легких
                                        атак вешает на врага 20% Slow на 2 сек. (Эффект Slow замедляет
                                        врага)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="5" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/leaping-strike.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Leaping Strike</div>
                                    <p class="Abilities-weapon__text">Вы прыгаете на 6 метра и наносите
                                        135% урона от оружия. Время восстановления: 25 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/final-strike.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Final Strike</div>
                                    <p class="Abilities-weapon__text">Умение наносит на 50% больше урона
                                        целям, имеющим менее 30% хп.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/cowardly-punishment.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Cowardly Punishment</div>
                                    <p class="Abilities-weapon__text">Если умение поражает врага в спину, на врага вешается Slow на 8 сек. (Эффект Slow замедляет врага)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="1" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/leadership.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Leadership</div>
                            <p class="Abilities-weapon__text">Пока вы держите меч, урон всех членов
                                группы повышен на 10%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 bild -->
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Defender</h4>
            <h5 class="Abilities-weapon__name-rus">Защитник</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="2" class="Abilities-weapon__skill">
                        </div>
                        <div data-lin="2" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/shield-bash.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Shield Bash</div>
                                    <p class="Abilities-weapon__text">Наносит 50% урона от оружия и оглушает врагов перед вами на 2 сек. Если в ваш меч вставлен Carnelian gem, способность провоцирует врага на 6 секунд. (Монстры будет атаковать только вас) Время восстановления: 25 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/intimidating-bash.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Intimidating Bash</div>
                                    <p class="Abilities-weapon__text">Умение наносит на 100% больше урона и создает значительно больше угрозы.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="1" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/concussive-bash.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Concussive Bash</div>
                                    <p class="Abilities-weapon__text">Длительность оглушения увеличивается на 1 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/sturdy-shield.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Sturdy Shield</div>
                                    <p class="Abilities-weapon__text">Добавляет 15% к физической броне.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/elemental-resistance.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Elemental Resistance</div>
                                    <p class="Abilities-weapon__text">Снижает входящий магический урон любых типов на 10%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/one-with-the-shield.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">One with the Shield</div>
                                    <p class="Abilities-weapon__text">Успешное блокирование щитом снижает время восстановления всех умений щита на 1%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/final-blow.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Final Blow</div>
                                    <p class="Abilities-weapon__text">Третья атака в серии легких атак наносит на 15% больше урона и создает больше угрозы.
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
                                <img src="<?= TEMPLATE ?>img/skill/shield-rush.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Shield Rush</div>
                                    <p class="Abilities-weapon__text">Вы совершаете рывок на 5 метров, нанося 125% урона от оружия и сбиваете противника с ног. Время восстановления: 20 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="2" class="Abilities-weapon__skill ">

                        </div>
                        <div data-lin="3" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-befor_second">
                                <img src="<?= TEMPLATE ?>img/skill/improved-rush.png" alt="skill" class="Abilities-weapon__img">

                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Improved Rush</div>
                                    <p class="Abilities-weapon__text">При успешной атаке, все враги на протяжении 5 метров получают Weaken на 4 сек. (Эффект Weaken снижает наносимый урон)</p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="4" data-column="3" data-build="2" class="Abilities-weapon__skill ">

                        </div>
                        <div data-lin="5" data-column="3" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/intimidating-rush.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Intimidating Rush</div>
                                    <p class="Abilities-weapon__text">При успешной атаке накладывает на всех врагов в радиусе 5 метров 30% Slow на 4 сек. (Эффект Slow замедляет врага)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/sturdy-grip.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Sturdy Grip</div>
                                    <p class="Abilities-weapon__text">При блокировании атак ближнего боя щитом урон выносливости снижается на 15%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/defensive-training.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Defensive Training</div>
                                    <p class="Abilities-weapon__text">Вы получаете 10% Fortify при блоке на 5 сек. (Эффект Fortify снижает входящий урон)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/invigoration_bulvak.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Invigorating Bulwark</div>
                                    <p class="Abilities-weapon__text">Дает 15 выносливости при использовании способностей Shield Bash и Shield Rush.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/recuperation.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Recuperation</div>
                                    <p class="Abilities-weapon__text">Все входящее исцеление и регенерация сильнее на 10%.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/high-grip.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">High Grip</div>
                                    <p class="Abilities-weapon__text">При блокировании атак дальнего боя щитом урон выносливости снижается на 15%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/final-stand.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Defiant Stance</div>
                                    <p class="Abilities-weapon__text">Весь входящий урон снижен на 30% на 8 сек. Если в ваш меч вставлен Carnelian gem, способность провоцирует всех врагов в радиусе 8 метров на 6 секунд. (Монстры будет атаковать только вас) Время восстановления: 45 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/final-count-down.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Final Count Down</div>
                                    <p class="Abilities-weapon__text">Пока ваши хп выше 50% входящий урон снижен на 20%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/restoration.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Restoration</div>
                                    <p class="Abilities-weapon__text">По окончании времени действия умения вы исцеляетесь на 15% от своего максимально хп.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="2" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/defensive-formation.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Defensive Formation</div>
                            <p class="Abilities-weapon__text">При блокировании снижает весь получаемый союзниками урон на 30% в пределах 2 метров. (Время восстановления: 1 сек. )
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
    var name_file = "sword";
</script>

<script src="<?= TEMPLATE ?>js/js_build_1.js">
</script>