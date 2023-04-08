<!--! Страница умений оружия -->
<div class="Abilities-weapon">
    <h1 class="Abilities-weapon__title">Топор</h1>
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
            Обычная завершающая: 105% рубящего (Slash) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая: 120% рубящего (Slash) урона</div>
        <div class="Abilities-weapon__stat">
            Тяжелая заряженная: 160% рубящего (Slash) урона
        </div>
    </div>
    <div class="Abilities-weapon__wrapper">
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Berserker</h4>
            <h5 class="Abilities-weapon__name-rus">Берсерк</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div class="Abilities-weapon__skill">

                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/feral-rush.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                <img src="<?= TEMPLATE ?>img/skill_gif/Hatchet - Sprint Attack.gif" alt="gif" class="Abilities-weapon__gif">
                                    <div class="Abilities-weapon__skill-name">Feral Rush</div>
                                    <p class="Abilities-weapon__text">Вы делаете рывок к цели и совершаете две атаки. Первая атака наносит 115% урона от оружия, вторая – 130%.
                                        Время восстановления: 15 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/dispatch.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Dispatch</div>
                                    <p class="Abilities-weapon__text">Умение наносит на 20% больше урона по врагам, имеющим менее 30% хп.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/crippling-strikes.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Crippling Strikes</div>
                                    <p class="Abilities-weapon__text">Если умение поражает врага в спину, то вешает на цель Root на 2 сек. (Эффект обездвиживает врага)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill ">

                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/enraged-strikes.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Enraged Strikes</div>
                                    <p class="Abilities-weapon__text">Легкие и тяжелые атаки наносят на 20% больше урона целям, имеющим менее чем 30% хп.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">

                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/against-all-odds.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Against All Odds</div>
                                    <p class="Abilities-weapon__text">Базовый урон увеличен на 10% за каждого врага в пределах 5 метров.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">

                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/frenzied-purge.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Frenzied Purge</div>
                                    <p class="Abilities-weapon__text">Попадание по врагу, когда ваши хп менее 30%, снимет все эффекты Bleed, Burn и Poison.
                                        Время восстановления: 60 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">

                        <div class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/berserk.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                <img src="<?= TEMPLATE ?>img/skill_gif/Hatchet - Berserk.gif" alt="gif" class="Abilities-weapon__gif">
                                    <div class="Abilities-weapon__skill-name">Berserk</div>
                                    <p class="Abilities-weapon__text">Включает режим берсерка на 15 сек. В режиме берсерка вы наносите на 20% больше урона. Если вставлен Carnelian Gem: Умение провоцирует всех врагов в пределах 8 метров на 8 сек.
                                        Время восстановления: 18 сек.(Перезарядка начнется, когда умение закончится)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/on-the-hunt.png" alt="skill" class="Abilities-weapon__img">

                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">On The Hunt</div>
                                    <p class="Abilities-weapon__text">В режиме берсерка увеличивает скорость на 20%.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/berserking-refresh.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Berserking Refresh</div>
                                    <p class="Abilities-weapon__text">Пока берсерк активен вы возвращаете себе часть здоровья каждые 5 секунд. Количество возвращенного здоровья увеличивается в зависимости от времени действия берсерка.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/berserking-purge.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Berserking Purge</div>
                                    <p class="Abilities-weapon__text">Включение режима берсерка снимает все Crowd Control эффекты (Stuns, Slows, Roots)</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/uninterruptible-berserk.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Uninterruptible Berserk</div>
                                    <p class="Abilities-weapon__text">Находясь в режиме берсерка вас нельзя ошеломить, а ваши атаки не могут быть прерваны.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/accumulated-power.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Accumulated Power</div>
                                    <p class="Abilities-weapon__text">3 успешные легкие атаки против одной и той же цели дают 30% Empower на 3 сек или до следующей атаки. (Эффект увеличивает ваш урон)</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/accumulated-power.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Relentless Fury</div>
                                    <p class="Abilities-weapon__text">Успешная тяжелая атака дает 30% Empower на 3 сек или на 4 атаки.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">

                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/fortifying-strikes.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Fortifying Strikes</div>
                                    <p class="Abilities-weapon__text">3 успешные легкие атаки против одной и той же цели дают 15% Fortify на 3 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">

                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div class="Abilities-weapon__skill">

                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper ">
                                <img src="<?= TEMPLATE ?>img/skill/desperate-refresh.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Desperate Refresh</div>
                                    <p class="Abilities-weapon__text">Время восстановления всех умений снижается на 2% при ударе по врагу, если вы имеете менее 30% хп.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/raging-torrent.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                <img src="<?= TEMPLATE ?>img/skill_gif/hatchet1.gif" alt="gif" class="Abilities-weapon__gif">
                                    <div class="Abilities-weapon__skill-name">Raging Torrent</div>
                                    <p class="Abilities-weapon__text">Вы совершаете 4 быстрых атаки, каждая из которых наносит 90% урона от оружия.
                                        Время восстановления: 15 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after ">
                                <img src="<?= TEMPLATE ?>img/skill/aggressive-approach.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Aggressive Approach</div>
                                    <p class="Abilities-weapon__text">Успешная атака умением дает 20% Haste на 6 сек. (Эффект увеличивает вашу скорость)</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/final-blow-hatchet.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Final Blow</div>
                                    <p class="Abilities-weapon__text">Нажмите ЛКМ чтобы провести финальную атаку, наносящую 120% урона от оружия.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main -->
                <div class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/defy-death.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Defy Death</div>
                            <p class="Abilities-weapon__text">Когда вы получаете смертельный урон вы не умираете, вместо этого вы получаете неуязвимость к урону на 3 сек, а ваше здоровье уменьшается до 0.
                                Время восстановления: 75 сек.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 bild -->
        <div class="Abilities-weapon__item">
            <h4 class="Abilities-weapon__name">Throwing</h4>
            <h5 class="Abilities-weapon__name-rus">Бросок</h5>
            <div class="Abilities-weapon__trees-wrapper">
                <div class="Abilities-weapon__trees">
                    <!-- 1  -->
                    <div class="Abilities-weapon__row">
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/rending-throw.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                <img src="<?= TEMPLATE ?>img/skill_gif/Hatchet - Quick Throw.gif" alt="gif" class="Abilities-weapon__gif">
                                    <div class="Abilities-weapon__skill-name">Rending Throw</div>
                                    <p class="Abilities-weapon__text">Вы метаете топор, нанося 110% урона от оружия и вешая на цель 10% Rend на 10 сек. (Эффект уменьшает броню врага)
                                        Время восстановления: 15 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/targeted-impact.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Targeted Impact</div>
                                    <p class="Abilities-weapon__text">Эффект Rend усилен до 15%, если расстояние до врага более 8 метров.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/opportunistic.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Opportunistic</div>
                                    <p class="Abilities-weapon__text">Умение дополнительно наносит 20% урона по цели с активными отрицательными эффектами.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                        </div>
                        <div class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-befor">
                                <img src="<?= TEMPLATE ?>img/skill/second-wind.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Second Wind</div>
                                    <p class="Abilities-weapon__text">Атака цели с активными отрицательными эффектами уменьшит время перезарядки умения на 20%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="Abilities-weapon__row">
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/aimed-throw.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Aimed Throw</div>
                                    <p class="Abilities-weapon__text">Заменяет блок прицельным броском, который наносит 95% урона от оружия.
                                        Удерживайте ПКМ для броска. Каждый бросок расходует 20 выносливости.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">

                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/refreshing-throws.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Refreshing Throws</div>
                                    <p class="Abilities-weapon__text">Атаки с помощью Aimed Throw против целей с активными отрицательными эффектами, снижают время восстановления умений на 5%.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">

                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/boot-and-rally.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Boot and Rally</div>
                                    <p class="Abilities-weapon__text">Легкие атаки и атаки умением Aimed Throw восстанавливают 10 выносливости при атаке целей с активными отрицательными эффектами.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="Abilities-weapon__row">
                        <div class="Abilities-weapon__skill ">

                        </div>
                        <div class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/social-distancing.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                <img src="<?= TEMPLATE ?>img/skill_gif/hatchet2.gif" alt="gif" class="Abilities-weapon__gif">
                                    <div class="Abilities-weapon__skill-name">Social Distancing</div>
                                    <p class="Abilities-weapon__text">Бросок топора с отскоком, наносящий 130% урона от оружия и замедляющий цель на 15% на 3 сек. Время восстановления: 15 сек.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/quick-power.png" alt="skill" class="Abilities-weapon__img">

                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Quick Power</div>
                                    <p class="Abilities-weapon__text">Скорость передвижения увеличивается на 30% на 3 сек если умение попадает в цель с активными отрицательными эффектами.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill ">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/stay-back.png" alt="skill" class="Abilities-weapon__img">

                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Stay Back</div>
                                    <p class="Abilities-weapon__text">Эффект замедления усиливается до 25% на 4 сек.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">

                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="Abilities-weapon__row">
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/critical-throw.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Critical Throw</div>
                                    <p class="Abilities-weapon__text">Броски топора теперь могут наносить критический урон и Headshot. Шанс крита повышен на 5%.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/on-fire.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">On Fire</div>
                                    <p class="Abilities-weapon__text">Каждая третья успешная атака метательным топором гарантированно будет критической.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">

                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/exploitation.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Exploitation</div>
                                    <p class="Abilities-weapon__text">Любые атаки сильнее на 15%, по целям с активными отрицательными эффектами.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper">
                                <img src="<?= TEMPLATE ?>img/skill/adrenaline-rush.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Adrenaline Rush</div>
                                    <p class="Abilities-weapon__text">Рывок или перекат в течении 2 сек после применения любой способности затратит на 25% меньше выносливости.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="Abilities-weapon__row">
                        <div class="Abilities-weapon__skill">

                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after stick-right">
                                <img src="<?= TEMPLATE ?>img/skill/rejuvinating-crits.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Rejuvinating Crits</div>
                                    <p class="Abilities-weapon__text">Успешные критические атаки легкой атакой или умением Aimed Throw восстанавливают 10 выносливости.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper skill-active">
                                <img src="<?= TEMPLATE ?>img/skill/infected-throw.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                <img src="<?= TEMPLATE ?>img/skill_gif/Hatchet - Power Throw.gif" alt="gif" class="Abilities-weapon__gif">
                                    <div class="Abilities-weapon__skill-name">Infected Throw</div>
                                    <p class="Abilities-weapon__text">Вы метаете топор, нанося 150% урона от оружия и вешая на цель 30% Disease и 10% Weakens на 5 сек. (Disease уменьшает эффективность исцеления цели, Weakens уменьшает урон цели)
                                        Время восстановления: 15 сек</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after">
                                <img src="<?= TEMPLATE ?>img/skill/mortal-power.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Mortal Power</div>
                                    <p class="Abilities-weapon__text">Увеличивает длительность отрицательных эффектов умения до 8 сек. если у цели менее 30% здоровья.</p>
                                </div>
                            </div>
                        </div>
                        <div class="Abilities-weapon__skill">
                            <div class="Abilities-weapon__img-wrapper stick-after_second">
                                <img src="<?= TEMPLATE ?>img/skill/aerial-transmission.png" alt="skill" class="Abilities-weapon__img">
                                <div class="Abilities-weapon__descr">
                                    <div class="Abilities-weapon__skill-name">Aerial Transmission</div>
                                    <p class="Abilities-weapon__text">Умение создает в месте попадания 3 метровую область на 3 секунды. Все враги в области получат отрицательный эффект Disease.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- main -->
                <div class="Abilities-weapon__main ">
                    <div class="Abilities-weapon__img-wrapper main-img">
                        <img src="<?= TEMPLATE ?>img/skill/persistent-hinderance.png" alt="skill" class="Abilities-weapon__img ">
                        <div class="Abilities-weapon__descr">
                            <div class="Abilities-weapon__skill-name">Persistent Hinderance</div>
                            <p class="Abilities-weapon__text">Успешные броски топора продлевают время действия всех отрицательных эффектов топора на 30%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--! Страница умений оружия end-->