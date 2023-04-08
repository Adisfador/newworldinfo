<?php
    require_once "../../../config.php";

    ?>
<!--! Страница умений оружия -->
<div class="Abilities-weapon">
<div class="Abilities-weapon__calc">
        <a id="back" href="#" class="Abilities-weapon__back">Вернуться к выбору</a>
        <a id="drop" href="#" class="Abilities-weapon__drop">Сброс вложенных очков</a>
    </div>
    <h1 class="Abilities-weapon__title">Секира</h1>
    <div class="Abilities-weapon__box">
        <h4 class="Abilities-weapon__subtitle">
            Зависимость урона от характеристик:
        </h4>
        <div class="Abilities-weapon__stat">
            Сила (x1)</div>
        <h4 class="Abilities-weapon__subtitle">
            Типы атак и урон:
        </h4>
        <div class="Abilities-weapon__stat">
            Обычная: 100% рубящего (Slash) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая: 120% рубящего (Slash) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая заряженная: 160% рубящего (Slash) урона</div>
        <div class="Abilities-weapon__stat">

        </div>
    </div>
    <div class="Abilities-weapon__points">
        Вложено очков : 0 (Доступно 19)
    </div>
    <div class="Abilities-weapon__wrapper">
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Reaper</h4>
            <h5 class="Abilities-weapon__name-rus">Жнец</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">

                        <div data-lin="1" data-column="1" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/charge.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Charge</div>
                                    <p class="Abilities-weapon__text">Вы несетесь на врага, пробегая 10 метров и нанося 120% урона оружием в момент, когда достигнете цели, либо нажав ЛКМ. Вы находитесь под действием Unstoppable во время действия умения. (Под действием эффекта Unstoppable умение не может быть прервано врагом) Время восстановления: 20 сек.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-lin="3" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper  stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/frenzied-momentum.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Frenzied Momentum</div>
                                    <p class="Abilities-weapon__text">Умение теперь наносит 120 - 140% урона от оружия, в зависимости от пройденного расстояния.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="1" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/unpredictable-strike.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Unpredictable Strike</div>
                                    <p class="Abilities-weapon__text">Во время действия умения вы можете нажать ПКМ, выполнив атаку, наносящую 140 - 165% урона от оружия, в зависимости от пройденного расстояния.
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
                                <img src="<?= TEMPLATE ?>img/skill/critical-gains.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Critical Gains</div>
                                    <p class="Abilities-weapon__text">Когда вы наносите критический урон секирой, вы исцеляетесь на 10% от нанесенного урона.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/frustration.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Frustration</div>
                                    <p class="Abilities-weapon__text">Если ваша атака будет заблокирована, вы получите эффект, увеличивающий урон на 15% на 10 сек. (эффект не суммируется)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/keen-edge.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Keen Edge</div>
                                    <p class="Abilities-weapon__text">Критический урон увеличен на 10%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="2" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/feed.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Feed</div>
                                    <p class="Abilities-weapon__text">Атаки по врагам, имеющим менее чем 30% хп, исцеляют вас на 10% от нанесенного урона.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">

                        <div data-lin="1" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/reap.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Reap</div>
                                    <p class="Abilities-weapon__text">Используя секиру, вы притягиваете врагов в пределах 5 метров перед собой и наносите им 110% урона от оружия. Если в вашу секиру вставлен Carnelian gem, способность провоцирует врага на 4 секунды. (Монстры будет атаковать только вас) Время восстановления: 18 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/the-collector.png" alt="skill" class="Abilities-weapon__img">

                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">The Collector</div>
                                    <p class="Abilities-weapon__text">Дальность умения повышается до 8 метров.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="3" data-build="1" class="Abilities-weapon__skill ">

                        </div>
                        <div data-lin="4" data-column="3" data-build="1" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/hunger.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Hunger</div>
                                    <p class="Abilities-weapon__text">Теперь вы исцеляетесь на 30% от нанесенного умением урона.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/fatal-attraction.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Fatal Attraction</div>
                                    <p class="Abilities-weapon__text">После притягивания вы совершаете дополнительную круговую атаку, наносящую 115% урона от оружия.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/greed.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Greed</div>
                                    <p class="Abilities-weapon__text">Легкие атаки секирой повышают ваш урон на 5% на 5 сек. (эффект суммируется до 3 раз)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/deaths-embrace.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Death's Embrace</div>
                                    <p class="Abilities-weapon__text">Атаки секирой по врагам, имеющим меньше 50%хп игнорируют 10% брони цели.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="4" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/critical-condition.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Critical Condition</div>
                                    <p class="Abilities-weapon__text">Используя секиру, шанс крита по врагам, имеющим менее чем 30%хп, увеличен на 15%.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="1" class="Abilities-weapon__skill">

                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/executioners-speed.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Executioner's Speed</div>
                                    <p class="Abilities-weapon__text">Если ваша легкая атака поражает 2 и более врагов вы получаете 20% Haste на 3 сек. (Под действием эффекта Haste вы двигаетесь быстрее)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="5" data-build="1" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/execute.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Execute</div>
                                    <p class="Abilities-weapon__text">Мощная атака наносящая 200% урона от оружия. Наносит 300% урона от оружия, если у цели меньше 50% хп. Время восстановления: 25 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/unstoppable-greed.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Unstoppable Greed</div>
                                    <p class="Abilities-weapon__text">Умение получает Unstoppable. (Под действием эффекта Unstoppable умение не может быть прервано врагом)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="1" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/executioner.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Executioner</div>
                                    <p class="Abilities-weapon__text">Умение гарантированно наносит критический удар по врагам, имеющим менее 30% хп.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="1" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/blood-lust.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Blood Lust</div>
                            <p class="Abilities-weapon__text">Вы двигаетесь на 30% быстрее и наносите на 15% больше урона пока нацелены на врага в пределах 15 метров. (Удерживаете на враге перекрестье прицела)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 bild -->
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Mauler</h4>
            <h5 class="Abilities-weapon__name-rus">Истязатель</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="1" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="2" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active ">
                                <img src="<?= TEMPLATE ?>img/skill/whirlwind.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Whirlwind</div>
                                    <p class="Abilities-weapon__text">Вы вращаетесь с секирой, нанося 50% урона всем окружающим врагам. Если умение нанесло урон, то вы продолжаете вращение (срабатывает до 4 раз). Вы можете двигаться во время вращения. Умение не наносит критических ударов. Время восстановления: 30 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/gusting-winds.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Gusting Winds</div>
                                    <p class="Abilities-weapon__text">Умение теперь может срабатывать до 7 раз подряд.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="1" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second ">
                                <img src="<?= TEMPLATE ?>img/skill/unending-winds.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Unending Winds</div>
                                    <p class="Abilities-weapon__text">Во время действия умения вы двигаетесь на 50% быстрее.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="1" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/surrounded.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Surrounded</div>
                                    <p class="Abilities-weapon__text">Если вас окружает 3 или более врагов, умение наносит на 30% больше урона.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/maulers-resolve.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Mauler's Resolve</div>
                                    <p class="Abilities-weapon__text">Если вы, будучи экипированным секирой и имея менее 50%хп, получили удар: 40 единиц выносливости будет восстановлено. Время восстановления: 20 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="2" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="3" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/gravity.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Gravity</div>
                                    <p class="Abilities-weapon__text">После притягивания вы удерживаете врагов на 30% дольше.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="2" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="5" data-column="2" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/center-of-attention.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Center of Attention</div>
                                    <p class="Abilities-weapon__text">Ваш урон повышается на 10% если вы вооружены секирой и в 4 метрах от вас находятся 3 или более врагов.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">

                        <div data-lin="1" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/maelstrom.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                
                                    <div class="Abilities-weapon__skill-name">Maelstrom</div>
                                    <p class="Abilities-weapon__text">Атака с быстрым вращением, притягивающая врагов ближе к вам и наносящая 110% урона от оружия. Время восстановления: 20 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/storms-reach.png" alt="skill" class="Abilities-weapon__img">

                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Storm's Reach</div>
                                    <p class="Abilities-weapon__text">Умение притягивает врагов в большем на 50% радиусе.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/absorb.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Absorb</div>
                                    <p class="Abilities-weapon__text">Во время применения умения вы игнорируете весь входящий урон от снарядов.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="3" data-build="2" class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/no-reprieve.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">No Reprieve</div>
                                    <p class="Abilities-weapon__text">Вы проводите дополнительную атаку, притягивающую врагов и наносящую 110% урона от оружия.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="3" data-build="2" class="Abilities-weapon__skill">

                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div data-lin="1" data-column="4" data-build="2" class="Abilities-weapon__skill">
                        <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/heavy-pull.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Heavy Pull</div>
                                    <p class="Abilities-weapon__text">Тяжелые атаки секирой притягивают врагов ближе к вам.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="2" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/enduring-pull.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Enduring Strike</div>
                                    <p class="Abilities-weapon__text">Тяжелые атаки секирой получают Grit. Во время проведения тяжелой атаки входящий урон снижен на 20%.(Под действием эффекта Grit атака не может быть прервано врагом)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="3" data-column="4" data-build="2" class="Abilities-weapon__skill">

                        </div>
                        <div data-lin="4" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/revenge.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Revenge</div>
                                    <p class="Abilities-weapon__text">Если вы блокируете атаку секирой, ваш урон повышается на 5% на 5 сек. (эффект суммируется до 3 раз)</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="4" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/crowded-protection.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Crowded Protection</div>
                                    <p class="Abilities-weapon__text">Ваша броня повышается на 10% если вы вооружены секирой и в 4 метрах от вас находятся 3 или более врагов.</p>
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
                                <img src="<?= TEMPLATE ?>img/skill/gravity-well.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                               
                                    <div class="Abilities-weapon__skill-name">Gravity Well</div>
                                    <p class="Abilities-weapon__text">Вы бросаете топор, который создает в точке попадания вихрь. Врагов притягивает к центру вихря на протяжении 3 сек, после чего вихрь взрывается, нанося 125% урона от оружия. Область действия: 10 метров. Время восстановления: 30 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="4" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/crowded-well.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Crowded Well</div>
                                    <p class="Abilities-weapon__text">Урон от взрыва вихря увеличивается на 10% за каждого врага захваченного вихрем.</p>
                                </div>
                            </div>
                        </div>
                        <div data-lin="5" data-column="5" data-build="2" class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/unyielding.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Unyielding</div>
                                    <p class="Abilities-weapon__text">Союзники получают 10% Fortify находясь в области действия вихря.(эффект Fortify снижает входящий урон)</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- main -->
                <div data-main="main" data-build="2" class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/maulers-fury.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Mauler's Fury</div>
                            <p class="Abilities-weapon__text">Атаки секирой увеличивают урон на 3% на 3 сек. (эффект складывается до 10 раз)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--! Страница умений оружия end-->

<script> var name_file="great_axe";</script>

 <script src="<?= TEMPLATE ?>js/js_build_1.js">  
</script>