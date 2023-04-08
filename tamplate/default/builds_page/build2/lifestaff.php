<?php
    require_once "../../../../config.php";

    ?>
<!--! Страница умений оружия -->
<div class="Abilities-weapon">

    <h1 class="Abilities-weapon__title">Посох жизни</h1>
    <div class="Abilities-weapon__box">
        <h4 class="Abilities-weapon__subtitle">
            Зависимость урона от характеристик:
        </h4>
        <div class="Abilities-weapon__stat">
            Фокус (x1)</div>
        <h4 class="Abilities-weapon__subtitle">
            Типы атак и урон:
        </h4>
        <div class="Abilities-weapon__stat">
            Обычная: 107% природного (Nature) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая: 151% природного (Nature) урона
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
            <h4 class="Abilities-weapon__name">Healing</h4>
            <h5 class="Abilities-weapon__name-rus">Исцеление</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/divine-embrace.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Divine Embrace</div>
                                    <p class="Abilities-weapon__text">Исцеляет цель на 150% урона от оружия.
                                        Стоимость 25 маны.
                                        Время восстановления: 6 сек.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="2" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/privilege.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Privilege</div>
                                    <p class="Abilities-weapon__text">Стоимость Divine Embrace снижена до 20 маны.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  stick-befor ">
                                <img src="<?= TEMPLATE ?>img/skill/shared-struggle.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Shared Struggle</div>
                                    <p class="Abilities-weapon__text">Если у цели менее 50% здоровья, исцеляет дополнительную цель в пределах 8 метров.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/rebound.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Rebound</div>
                                    <p class="Abilities-weapon__text">Если вторая цель также имела менее 50% здоровья, исцеляет еще одну цель в пределах 8 метров.
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

                        </div>
                        <div data-lin="3" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/desperate-speed.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Desperate Speed</div>
                                    <p class="Abilities-weapon__text">Когда вы исцеляете союзника с менее 50% здоровья, время восстановления умений посоха жизни снижается на 10%.(Перезарядка умения 5 сек)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/sacred-protection.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Sacred Protection</div>
                                    <p class="Abilities-weapon__text">Пока вы держите в руках посох жизни, все члены группы получают +5% к количеству получаемого исцеления.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="3" data-build="1" class="Abilities-weapon__skill ">

                        </div>
                        <div data-lin="2" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/sacred-ground.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Sacred Ground</div>
                                    <p class="Abilities-weapon__text">На 15 секунд создает область в которой союзники исцеляются на 20% урона от оружия в секунду. Стоимость 15 маны. Время восстановления: 20 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/holy-ground.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Holy Ground</div>
                                    <p class="Abilities-weapon__text">Восстановление выносливости и маны повышается на 100% в зоне действия умения.</p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="4" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/blessed.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Blessed</div>
                                    <p class="Abilities-weapon__text">Сила входящего исцеления выше на 50% в зоне действия умения.</p>
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
                                <img src="<?= TEMPLATE ?>img/skill/absolved.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Absolved</div>
                                    <p class="Abilities-weapon__text">Легкие и тяжелые атаки больше не тратят манну.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/mending-touch.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Mending Touch</div>
                                    <p class="Abilities-weapon__text">Тяжелые атаки теперь снимают 1 дебафф при попадании в союзника.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/revitalize.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Revitalize</div>
                                    <p class="Abilities-weapon__text">Успешная легкая атака снижает время восстановления всех умений на 5%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/arcane-justice.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Enchanted Justice</div>
                                    <p class="Abilities-weapon__text">Во время боя можете активировать ауру исцеления она действует для вас и ближайших союзников в радиусе 4-х метров. (Исцеляет в размере 10% от урона надетого оружия в секунду в течении 6 сек.)
                                        Время перезарядки: 120 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/intensify.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Intensify</div>
                                    <p class="Abilities-weapon__text">Тяжелые атаки повышают силу исцеления на 10% на 10 сек. (Складывается до 3 раз)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after stick-right">
                                <img src="<?= TEMPLATE ?>img/skill/blissful-touch.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Blissful Touch</div>
                                    <p class="Abilities-weapon__text">Легкие атаки теперь исцеляют цель на 20,0% урона от оружия при попадании в союзника.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/splash-of-light.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Splash of Light</div>
                                    <p class="Abilities-weapon__text">Исцеляет вас и всех членов группы на 50% урона от оружия.
                                        Стоимость: 15 маны. Время восстановления: 15 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/shared-recovery.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Shared Recovery</div>
                                    <p class="Abilities-weapon__text">Если вы исцелите цель ниже 50% здоровья, получите 3% от вашей максимальной маны.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/purify.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Purify</div>
                                    <p class="Abilities-weapon__text">Splash of Light также снимает 1 дебафф.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="1" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper  main-img">
                        <img src="<?= TEMPLATE ?>img/skill/divine-blessing.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Divine Blessing</div>
                            <p class="Abilities-weapon__text">Если здоровье союзника ниже 50%, ваши исцеления действуют на 30% сильнее.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 bild -->
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Protector</h4>
            <h5 class="Abilities-weapon__name-rus">Защитник</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active ">
                                <img src="<?= TEMPLATE ?>img/skill/orb-of-protection.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Orb of Protection</div>
                                    <p class="Abilities-weapon__text">Выстрел сферой добра. При попадании в союзника, дает ему Fortify (+10% поглощения урона) на 20 сек и исцеляет на 10% урона от оружия. При попадании во врага наносит 146% урона от оружия. Стоимость 16 маны. Время восстановления: 10 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/protectors-blessing.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Protectors Blessing</div>
                                    <p class="Abilities-weapon__text">При попадании в союзника, восстанавливает здоровье в течении 10 сек.
                                        (восстановление лечит в размере 7.5% от урона надетого оружия в секунду)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/lifestaffpassive8.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Shared Protection</div>
                                    <p class="Abilities-weapon__text">При попадании в союзника, восстанавливает здоровье, а также получает эффект Fortify.
                                        (Восстановление лечит в размере 7.5% от урона надетого оружия в секунду) (Fortify снижает входящий урон)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/aegis.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Aegis</div>
                                    <p class="Abilities-weapon__text">При попадании в союзника, эффект распространяется на всех союзников в радиусе 3 метров от цели.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="1" data-build="2" class="Abilities-weapon__skill ">

                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/bend-light.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Bend Light</div>
                                    <p class="Abilities-weapon__text">Ваше исцеление сильнее на 20% на 5 секунд после уклонения.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="2" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/protectors-strength.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Protector's Strength</div>
                                    <p class="Abilities-weapon__text">Ваше исцеление сильнее на 10% если на вас висит бафф.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/spirits-united.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Spirits United</div>
                                    <p class="Abilities-weapon__text">Ускоряет регенерацию маны на 3% для вас и членов группы.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/defensive-light.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Defensive Light</div>
                                    <p class="Abilities-weapon__text">При блокировании атаки ближнего боя вы восстанавливаете 5% от максимума запаса маны.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="2" class="Abilities-weapon__skill ">

                        </div>
                        <div data-lin="3" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/lights-embrace.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Lights Embrace</div>
                                    <p class="Abilities-weapon__text">Исцеляет союзника на 100% урона от оружия и +30% за каждый бафф на цели.
                                        Стоимость 18 маны. Время восстановления: 4 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/inspire.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Inspire</div>
                                    <p class="Abilities-weapon__text">Умение также восстанавливает цели 25 выносливости.</p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="5" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/connection.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Connection</div>
                                    <p class="Abilities-weapon__text">Когда умение исцеляет союзника вы восстанавливаете 1% от максимума мп за каждый бафф на цели.</p>
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
                                <img src="<?= TEMPLATE ?>img/skill/protectors-touch.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Protectors Touch</div>
                                    <p class="Abilities-weapon__text">Успешные легкие и тяжелые атаки дают +15% поглощения урона на 3 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/balance.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Balance</div>
                                    <p class="Abilities-weapon__text">Если вы получили удар, имея менее 50% здоровья, вы ускоряетесь на 10% на 5 сек.
                                        (Не чаще 1 раза в 20 сек.)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/glowing-focus.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Glowing Focus</div>
                                    <p class="Abilities-weapon__text">Исходящие от вас баффы длятся на 20% дольше.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/beacon.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Beacon</div>
                                    <p class="Abilities-weapon__text">Выстрел снарядом света. При попадании наносит 146% урона от оружия. Прилипает к цели и исцеляет всех союзников в зоне действия на 20% урона от оружия в секунду, на протяжении 10 сек. Стоимость: 16 маны. Время восстановления: 35 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/infused-light.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Infused Light</div>
                                    <p class="Abilities-weapon__text">Радиус действия на 50% больше.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/radiances-blessing.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Radiance's Blessing</div>
                                    <p class="Abilities-weapon__text">Действует на 5 секунд дольше.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/speed-of-light.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Speed of Light</div>
                                    <p class="Abilities-weapon__text">Умение также ускоряет союзников на 20% на 3 сек.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="2" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img stick-main main-img">
                        <img src="<?= TEMPLATE ?>img/skill/magnify.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Magnify</div>
                            <p class="Abilities-weapon__text">Умение Lights Embrace продлевает действие всех баффов посоха жизни на 2 сек.
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