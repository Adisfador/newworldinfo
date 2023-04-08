<?php
    require_once "../../../config.php";

    ?>
<!--! Страница умений оружия -->
<div class="Abilities-weapon">
<div class="Abilities-weapon__calc">
        <a id="back" href="#" class="Abilities-weapon__back">Вернуться к выбору</a>
        <a id="drop" href="#" class="Abilities-weapon__drop">Сброс вложенных очков</a>
    </div>
    <h1 class="Abilities-weapon__title">Посох огня</h1>
    <div class="Abilities-weapon__box">
        <h4 class="Abilities-weapon__subtitle">
            Зависимость урона от характеристик:
        </h4>
        <div class="Abilities-weapon__stat">
            Интеллект (x1)</div>
        <h4 class="Abilities-weapon__subtitle">
            Типы атак и урон:
        </h4>
        <div class="Abilities-weapon__stat">
            Обычная: 100% огненного (Fire) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая: 140% огненного (Fire) урона
        </div>
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
            <h4 class="Abilities-weapon__name">Fire Mage</h4>
            <h5 class="Abilities-weapon__name-rus">Маг Огня</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/pillar-of-fire.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Pillar of Fire</div>
                                    <p class="Abilities-weapon__text">Удар по небольшой площади, наносящий 134% урона от оружия. Стоимость 15 мп. Время восстановления: 10 сек.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="2" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/first-strike.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">First Strike</div>
                                    <p class="Abilities-weapon__text">Умение наносит на 40% больше урона целям с полным здоровьем.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/arsons-advantage.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Arson's Advantage</div>
                                    <p class="Abilities-weapon__text">Вы восстанавливаете 10% от максимума мп за каждого пораженного умением врага.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper   ">
                                <img src="<?= TEMPLATE ?>img/skill/prophet-of-a-fire-god.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Prophet of a Fire God</div>
                                    <p class="Abilities-weapon__text">Пока вы держите Fire Staff, ваш критический урон увеличен на 20%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/spell-focus.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Spell Focus</div>
                                    <p class="Abilities-weapon__text">Успешные тяжелые атаки восполняют 5% от максимума мп.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="2" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="2" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/spellslinger.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Spellslinger</div>
                                    <p class="Abilities-weapon__text">+15% к шансу крита умениями.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/flare.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Flare</div>
                                    <p class="Abilities-weapon__text">Тяжелые атаки теперь не расходуют мп.
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
                                <img src="<?= TEMPLATE ?>img/skill/meteor-shower.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Meteor Shower</div>
                                    <p class="Abilities-weapon__text">Вы обрушиваете на цель метеориты, каждый из которых наносит 34% урона от оружия и дополнительные 20% урона от оружия в секунду,пока цели остаются в области действия. Стоимость 30 мп (5 мп\сек). Время восстановления: 18 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/immolation.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Immolation</div>
                                    <p class="Abilities-weapon__text">Каждое попадание восстанавливает вам 1% от максимума мп.</p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="4" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/fiery-determination.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Fiery Determination</div>
                                    <p class="Abilities-weapon__text">Теперь умение не может быть прервано врагом.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/judgment-of-helios.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Judgment of Helios</div>
                                    <p class="Abilities-weapon__text">Все удары после первого наносят 25% урона от оружия.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/fiery-restoration.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Fiery Restoration</div>
                                    <p class="Abilities-weapon__text">Успешные тяжелые атаки уменьшают время восстановления умений Fire Staff на 10%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="4" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/singe.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Singe</div>
                                    <p class="Abilities-weapon__text">Критические удары Fire Staff накладывают горение, наносящее 3% урона от оружия в секунду на 6 секунд.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/clear-casting.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Clear Casting</div>
                                    <p class="Abilities-weapon__text">Если вы не получали урон в последние 3 сек, вы наносите на 10% больше урона следующим ударом или умением.</p>
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
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/clear-mind.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Clear Mind</div>
                                    <p class="Abilities-weapon__text">Дает 10% Empower если ваш уровень мп выше 50%. (Эффект повышает урон)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/fireball.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Fireball</div>
                                    <p class="Abilities-weapon__text">Вы бросаете тяжелый Fireball, что взрывается в месте попадания, нанося 140% урона от оружия и оставляет после себя горящее поле диаметром 3 метра на 6 сек. Горящее поле наносит 10% урона от оружия в секунду. Стоимость 25 мп. Время восстановления: 15 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/scorched-earth.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Scorched Earth</div>
                                    <p class="Abilities-weapon__text">Время действия горящего поля увеличено до 9 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/catch.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Catch</div>
                                    <p class="Abilities-weapon__text">Прямое попадание Fireball восстанавливает вам 10% от максимума мп и уменьшает время восстановления всех умений Fire Staff на 7%.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="1" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper  main-img">
                        <img src="<?= TEMPLATE ?>img/skill/runes-of-helios.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Runes of Helios</div>
                            <p class="Abilities-weapon__text">Произношение огненных заклинаний создает на земле огненную 2-метровую руну, увеличивающую урон от заклинаний на 30%, пока вы стоите на ней. Руна действует 7 секунд. Время восстановления: 30 сек.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 bild -->
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Pyromancer</h4>
            <h5 class="Abilities-weapon__name-rus">Пиромант</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="2" class="Abilities-weapon__skill ">

                        </div>
                        <div data-lin="2" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active ">
                                <img src="<?= TEMPLATE ?>img/skill/incinerate.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Incinerate</div>
                                    <p class="Abilities-weapon__text">Вы создаете вокруг себя огненный взрыв, наносящий 130% урона от оружия и отталкивающий врагов на 3 метра. Каждое успешное попадание поджигает врага с силой в 3% урона от оружия в секунду на 6 сек. Стоимость 22 мп. Время восстановления: 12 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/scorched.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Scorched</div>
                                    <p class="Abilities-weapon__text">Каждый удар умением накладывает дополнительный эффект горения.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/cauterize-wounds.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Cauterize Wounds</div>
                                    <p class="Abilities-weapon__text">20% от нанесенного умением урона конвертируется в здоровье.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/flame-out.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Flame out!</div>
                                    <p class="Abilities-weapon__text">Incinerate наносит урон дважды.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/pyromania.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Pyromania</div>
                                    <p class="Abilities-weapon__text">Пока вы держите в руках Fire Staff и имеете менее 50% здоровья ваш урон увеличен на 20%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/heat-up.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Heat Up</div>
                                    <p class="Abilities-weapon__text">При блокировании атак ближнего боя, восстанавливает 5% от максимума мп.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/kindle.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Kindle</div>
                                    <p class="Abilities-weapon__text">Эффект горения длится на 20% дольше.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/trial-by-fire.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Trial by Fire</div>
                                    <p class="Abilities-weapon__text">При получении урона вы создаете вокруг себя огненное поле, наносящее 5% урона от оружия всем врагам в радиусе 4 метров. Активируется при получении урона в бою, длится 10 секунд. Время восстановления: 120 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">

                        <div data-lin="1" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/flamethrower.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">FlameThrower</div>
                                    <p class="Abilities-weapon__text">Вы создаете поток пламени, наносящий всем врагам на своем пути 34% урона от оружия в секунду. Каждое успешное попадание поджигает врага с силой в 3% урона от оружия в секунду на 6 сек. Стоимость 5 мп\сек. Время восстановления: 8 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/fires-reach.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Fire's Reach</div>
                                    <p class="Abilities-weapon__text">Дальность потока пламени увеличена на 50%.</p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="3" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/infernal-flames.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Infernal Flames</div>
                                    <p class="Abilities-weapon__text">Базовый урон умения увеличен на 25%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/pyro-dancer.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Pyro Dancer</div>
                                    <p class="Abilities-weapon__text">Теперь умение восстанавливается мгновенно.</p>
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
                                <img src="<?= TEMPLATE ?>img/skill/let-it-burn.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Let it Burn</div>
                                    <p class="Abilities-weapon__text">Вы получаете 10% Fortify на 2 секунды когда наносите урон горением. (Эффект Fortify снижает входящий урон)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/watch-it-burn.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Watch it Burn</div>
                                    <p class="Abilities-weapon__text">Легкие атаки поджигают врагов с силой в 3% урона от оружия в секунду на 6 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/combat-speed.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Combat Speed</div>
                                    <p class="Abilities-weapon__text">Использование Fire Staff умений повышает вашу скорость на 10% на 5 сек. Время восстановления: 10 сек.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            
                        </div>
                        <div data-lin="2" data-column="5" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/burn-out.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Burn Out</div>
                                    <p class="Abilities-weapon__text">Вы скользите вперед нанося при попадании 129% урона от оружия, оставляя за собой огненный след и поджигая врагов с силой в 10% урона от оружия в секунду на 8 сек. Стоимость 30 мп. Время восстановления: 20 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/all-in.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">All In</div>
                                    <p class="Abilities-weapon__text">Время восстановления всех Fire Staff умений уменьшается на 5% за каждого врага, попавшего в зону действия умения.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/Heat_It_Up.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Heat It Up!</div>
                                    <p class="Abilities-weapon__text">Дальность умения увеличена на 50%.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="2" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/reheat.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Reheat</div>
                            <p class="Abilities-weapon__text">Если в течении 6 секунд вы не пользовались Fire Staff умением, восстановление мп увеличивается на 400%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--! Страница умений оружия end-->

<script> var name_file="firestaff";</script>

 <script src="<?= TEMPLATE ?>js/js_build_2.js">  
</script>