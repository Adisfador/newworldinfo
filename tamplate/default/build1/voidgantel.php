<?php
require_once "../../../config.php";

?>
<!--! Страница умений оружия -->
<div class="Abilities-weapon">
    <div class="Abilities-weapon__calc">
        <a id="back" href="#" class="Abilities-weapon__back">Вернуться к выбору</a>
        <a id="drop" href="#" class="Abilities-weapon__drop">Сброс вложенных очков</a>
    </div>
    <h1 class="Abilities-weapon__title">Перчатка пустоты</h1>
    <div class="Abilities-weapon__box">
        <h4 class="Abilities-weapon__subtitle">
            Зависимость урона от характеристик:
        </h4>
        <div class="Abilities-weapon__stat">
            Интеллект (x0.9) и Фокус (x0.65)</div>
        <h4 class="Abilities-weapon__subtitle">
            Типы атак и урон:
        </h4>
        <div class="Abilities-weapon__stat">
            Обычная: 100% пустоты (Void) урона</div>
        <div class="Abilities-weapon__stat">
            Усиленная: 140% пустоты (Void) урона</div>
        <div class="Abilities-weapon__stat">
        </div>
        <div class="Abilities-weapon__stat">

        </div>
    </div>
    <div class="Abilities-weapon__points">
        Вложено очков : 0 (Доступно 19)
    </div>
    <div class="Abilities-weapon__wrapper">
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Annihilation</h4>
            <h5 class="Abilities-weapon__name-rus">Аннигиляция</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/rapier_ability2mod1_hastyflurry.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Keen Humility</div>
                                    <p class="Abilities-weapon__text">+ 10% шанс критического удара, пока все способности находятся на перезарядке
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/voidmagicability3.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Petrifying Scream</div>
                                    <p class="Abilities-weapon__text">Издайте пронизанный Бездной крик, который наносит 100% урона от оружия, шатается и накладывает Оцепенение на врагов в 5 метрах перед вами. Отключает движение врага на 2 секунды.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="4" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/bowability5_mod2.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Bone-chilling Voice</div>
                                    <p class="Abilities-weapon__text">Урон повышается до 12%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/direct-hit.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Direct Hit</div>
                                    <p class="Abilities-weapon__text">Если вы попадаете непосредственно во врага, умение наносит на 200% больше урона.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/impale.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Impale</div>
                                    <p class="Abilities-weapon__text">Атака против цели с полным запасом здоровья замедляет её на 10% на 2 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="2" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/dodge-and-weave.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Dodge and Weave</div>
                                    <p class="Abilities-weapon__text">Вы получаете 10% Haste на 2 сек после уклонения. (Эффект увеличивает скорость)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/mark.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Mark</div>
                                    <p class="Abilities-weapon__text">Вы наносите на 10% больше урона врагам с активными отрицательными эффектами.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/evade-shot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Evade Shot</div>
                                    <p class="Abilities-weapon__text">Выстрел с отскоком на 5 метров, наносящий 125% урона от оружия. Время восстановления: 15 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/evasive-knockback.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Evasive Knockback</div>
                                    <p class="Abilities-weapon__text">Умение отбрасывает врагов на 2 метра.</p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="3" data-column="3" data-build="1" class="Abilities-weapon__skill ">

                        </div>
                        <div data-lin="4" data-column="3" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/go-the-distance.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Go the Distance</div>
                                    <p class="Abilities-weapon__text">Умение теперь дает 15% Haste на 5 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/go-the-distance.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Go the Distance</div>
                                    <p class="Abilities-weapon__text">Умение теперь дает 15% Haste на 5 сек.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/evasive-tactics.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Evasive Tactics</div>
                                    <p class="Abilities-weapon__text">Вы наносите на 20% больше урона на 5 сек. после уклонения.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/closing-in.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Closing In</div>
                                    <p class="Abilities-weapon__text">Попадание по врагам с менее чем 50% здоровья уменьшает время восстановления умений лука на 5%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/hunters-insight.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Hunter's Insight</div>
                                    <p class="Abilities-weapon__text">Атаки по врагу с отрицательными эффектами восстанавливает 5 выносливости.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/archers-speed.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Archer's Speed</div>
                                    <p class="Abilities-weapon__text">Дает 10% Haste на 5 сек. когда вы переключаетесь на лук. (Не чаще одного раза в 10 сек)</p>
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
                                <img src="<?= TEMPLATE ?>img/skill/rain-of-arrows.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Rain of Arrows</div>
                                    <p class="Abilities-weapon__text">Вы выпускаете дождь стрел по области шириной 7 метров и наносите 150% урона от оружия.
                                        Время восстановления: 25 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/barbed-arrows.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Barbed Arrows</div>
                                    <p class="Abilities-weapon__text">Умение накладывает на цели Bleed, что наносит 85% урона от оружия на протяжении 12 сек. (Эффект суммируется до 3 раз)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/hooked-arrows.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Hooked Arrows</div>
                                    <p class="Abilities-weapon__text">Умение теперь замедляет врага на 15% на 4 сек</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="1" class="Abilities-weapon__skill">

                        </div>

                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="1" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper  main-img">
                        <img src="<?= TEMPLATE ?>img/skill/knee-shot.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Knee Shot</div>
                            <p class="Abilities-weapon__text">Попадания по ногам замедляют цель на 10% на 2 сек.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 bild -->
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Hunter</h4>
            <h5 class="Abilities-weapon__name-rus">Охотник</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  ">
                                <img src="<?= TEMPLATE ?>img/skill/rapid-accuracy.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Rapid Accuracy</div>
                                    <p class="Abilities-weapon__text">Если все 3 стрелы попали в одну и ту же цель, то время восстановления умения снижается на 50%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="1" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active ">
                                <img src="<?= TEMPLATE ?>img/skill/rapid-shot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Rapid Shot</div>
                                    <p class="Abilities-weapon__text">Вы выпускаете 3 стрелы одну за одной. Первые две наносят 100% урона от оружия, последняя стрела наносит 125% урона от оружия и отталкивает врага.
                                        Время восстановления: 20 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/rapid-accuracy.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Rapid Accuracy</div>
                                    <p class="Abilities-weapon__text">Если все 3 стрелы попали в одну и ту же цель, то время восстановления умения снижается на 50%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/rapid-accuracy.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Rapid Accuracy</div>
                                    <p class="Abilities-weapon__text">Если все 3 стрелы попали в одну и ту же цель, то время восстановления умения снижается на 50%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/final-blow-bow.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Final Blow</div>
                                    <p class="Abilities-weapon__text">Третья стрела наносит 25% дополнительного урона.
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
                                <img src="<?= TEMPLATE ?>img/skill/finishing-shot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Finishing Shot</div>
                                    <p class="Abilities-weapon__text">Если здоровье цели ниже 50%, вы наносите на 20% больше урона.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/long-range.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Long Range</div>
                                    <p class="Abilities-weapon__text">Урон врагам на расстоянии 10 метров и более, увеличен на 20%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/hawkeye.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Hawkeye</div>
                                    <p class="Abilities-weapon__text">Когда вы делаете Headshot, 10% нанесенного урона конвертируется в здоровье.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">

                        <div data-lin="1" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/penetrating-shot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Penetrating Shot</div>
                                    <p class="Abilities-weapon__text">Выстрел, что наносит 150% урона от оружия и пробивает всех врагов на расстоянии до 100 метров. Время восстановления: 18 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/blood-soaked-arrow.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Blood Soaked Arrow</div>
                                    <p class="Abilities-weapon__text">Каждая последующая цель получает на 10% больше урона.(максимально 50%)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/deep-strike.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Deep Strike</div>
                                    <p class="Abilities-weapon__text">Умение наносит на 20% больше урона целям в 20 метрах и далее.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="3" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/deep-strike.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Deep Strike</div>
                                    <p class="Abilities-weapon__text">Умение наносит на 20% больше урона целям в 20 метрах и далее.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="2" class="Abilities-weapon__skill ">

                        </div>

                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/unbreakable-focus.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Unbreakable Focus</div>
                                    <p class="Abilities-weapon__text">Вы получаете на 10% меньше урона во время прицеливания.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/arrow-range.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Arrow Range</div>
                                    <p class="Abilities-weapon__text">На 100% увеличивает дальность полета стрелы, прежде чем на нее начнет действовать гравитация. (Дальность полета по прямой линии)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/arrow-range.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Arrow Range</div>
                                    <p class="Abilities-weapon__text">На 100% увеличивает дальность полета стрелы, прежде чем на нее начнет действовать гравитация. (Дальность полета по прямой линии)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="5" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/splinter-shot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">

                                    <div class="Abilities-weapon__skill-name">Splinter Shot</div>
                                    <p class="Abilities-weapon__text">Вы выпускаете стрелу, которая через 10 метров разделяется на 3 стрелы. Каждая стрела наносит 50% урона от оружия.
                                        Время восстановления: 22 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/scatter-shot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Scatter Shot</div>
                                    <p class="Abilities-weapon__text">Теперь разделяется на 5 стрел.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="2" class="Abilities-weapon__skill">
                        <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/scatter-shot.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Scatter Shot</div>
                                    <p class="Abilities-weapon__text">Теперь разделяется на 5 стрел.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="2" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/concussion.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Concussion</div>
                            <p class="Abilities-weapon__text">Ваш Headshot наносит на 20% больше урона и имеет 50% шанс вернуть стрелу в колчан.
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
    var name_file = "voidgantel";
</script>

<script src="<?= TEMPLATE ?>js/js_build_1.js">
</script>