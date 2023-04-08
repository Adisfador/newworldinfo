<?php

$name = $_GET['TableType'];
$Card_name = '%' . str_replace("%", ' ', $_GET['Object']) . '%';
$dd = 2;
if (strpos($name, 'erks') == true) {
    $dd = 6;
}
$leng = strlen($Card_name) + $dd;
$result = mysqli_query($goods, "SELECT * FROM  $name WHERE Card_name like '$Card_name' and LENGTH(Card_name) <$leng  limit 1  ");

while ($tettabl = mysqli_fetch_assoc($result)) {
    $bases[] = $tettabl;
}
if (empty($bases[0]['img_CardUrl'])) {
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
<?php
} else {




?>

    <div class="item-inherit__content">
        <div class="item-inherit">
            <div class="item-inherit__header">
                <div id="<?php echo $bases[0]['rarity']; ?>" class="item-inherit__wrapper">
                    <img src="<?= TEMPLATE ?><?php echo $bases[0]['img_CardUrl']; ?>" alt="img" class="item-inherit__img-main">
                </div>
                <h1 class="item-inherit_hed"><?php echo $bases[0]['Card_name']; ?></h1>
            </div>
            <p class="item-inherit__descr">
                <?php echo $bases[0]['Card_Description']; ?>
            </p>
            <div class="item-inherit__stat">
                <div class="item-inherit__column">

                    <?php
                    if (empty($bases[0]['Items']) != true) {
                    ?>
                        <span>Итемы: <?php echo $bases[0]['Items']; ?></span>
                    <?php
                    }
                    ?>

                    <?php
                    if (empty($bases[0]['Card_type']) != true) {
                    ?>
                        <span>Тип: <?php echo $bases[0]['Card_type']; ?></span>
                    <?php
                    }
                    ?>

                    <?php
                    if (empty($bases[0]['Max Allowed_for_Rank_Points']) != true) {
                    ?>
                        <span>Максимально доступное число поинтов: <?php echo $bases[0]['Max Allowed_for_Rank_Points']; ?></span>
                    <?php
                    }
                    ?>
                    <?php
                    if (empty($bases[0]['Card_Gear_Score']) != true) {
                    ?>
                        <span>Рейтинг снаряжения: <?php echo $bases[0]['Card_Gear_Score']; ?></span>
                    <?php
                    }
                    ?>
                </div>
                <div class="item-inherit__column">
                    <?php
                    if (empty($bases[0]['Card_Class']) != true) {
                    ?>
                        <span>Класс: <?php echo $bases[0]['Card_Class']; ?></span>
                    <?php
                    }
                    ?>
                    <?php
                    if (empty($bases[0]['Base_Damage']) != true) {
                    ?>
                        <span>Базовый урон: <?php echo $bases[0]['Base_Damage']; ?></span>
                    <?php
                    }
                    ?>
                    <?php
                    if (empty($bases[0]['Card_Physical_Armor_Rating']) != true) {
                    ?>
                        <span>Рейтинг физической брони: <?php echo $bases[0]['Card_Physical_Armor_Rating']; ?></span>
                    <?php
                    }
                    ?>
                    <?php
                    if (empty($bases[0]['Card_Elemental_Armor_Rating']) != true) {
                    ?>
                        <span>Рейтинг элементальной брони: <?php echo $bases[0]['Card_Elemental_Armor_Rating']; ?></span>
                    <?php
                    }
                    ?>
                    <?php
                    if (empty($bases[0]['Derived_from']) != true) {
                    ?>
                        <span>Добывается в: <?php echo $bases[0]['Derived_from']; ?></span>
                    <?php
                    }
                    ?>

                    <?php
                    if (empty($bases[0]['Crit_Chance']) != true) {
                    ?>
                        <span>Шанс крит. урона: <?php echo $bases[0]['Crit_Chance']; ?></span>
                    <?php
                    }
                    ?>
                    <?php
                    if (empty($bases[0]['Negative_Limit_for_Rank_Points']) != true) {
                    ?>
                        <span>Отрицательный лимит рейтинговых поинтов: <?php echo $bases[0]['Negative_Limit_for_Rank_Points']; ?></span>
                    <?php
                    }
                    ?>
                </div>
            </div>

            <?php
            if (empty($bases[0]['1Bonus_Name']) != true) {
            ?>
                <h3 class="item-inherit__name">
                    Перки
                </h3>
                <div class="item-inherit__perks">
                    <?php
                    for ($i = 0; $i < 6; $i++) {
                        if (empty($bases[0][$i . 'Bonus_Name']) != true) {
                            $piec =  ltrim(explode("<br>",  $bases[0][$i . 'Bonus_Name'])[0]);


                            if ($bases[0]['img_CardUrl_' . $i . 'Bonus'] == 'db_images/db/misc/icon_attribute_arrow.png' xor $bases[0]['img_CardUrl_' . $i . 'Bonus'] == 'db_images/db/crafting/crafting_gemslot.png') {
                    ?>
                                <div class="item-inherit__link">
                                    <img src="<?= TEMPLATE ?><?php echo $bases[0]['img_CardUrl_' . $i . 'Bonus']; ?>" alt="img" class="item-inherit__perks-img">
                                    <p class="item-inherit__perk-descr">
                                        <?php

                                        echo $bases[0][$i . 'Bonus_Name']; ?>

                                    </p>
                                </div>
                            <?php
                            } else {
                            ?>
                                <a href='<?php echo $adress2 ?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $piec ?>&TableType=perks' class="item-inherit__link">
                                    <img src="<?= TEMPLATE ?><?php echo $bases[0]['img_CardUrl_' . $i . 'Bonus']; ?>" alt="img" class="item-inherit__perks-img">
                                    <p class="item-inherit__perk-descr">
                                        <?php echo $bases[0][$i . 'Bonus_Name']; ?>
                                    </p>
                                </a>
                    <?php
                            }
                        }
                    }
                    ?>


                </div>
            <?php
            }
            ?>


            <h3 class="item-inherit__name">
                Список характеристик
            </h3>
            <div class="item-inherit__list">

                <?php
                if (empty($bases[0]['Durability']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Прочность:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['Durability']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>


                <?php
                if (empty($bases[0]['Weight']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Вес:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['Weight']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['Salvageable']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Можно разобрать:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['Salvageable']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['Repairable']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Можно починить:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['Repairable']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>


                <?php
                if (empty($bases[0]['IsTraded']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Продается:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['IsTraded']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['BindOnPickup']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Привязка при получении:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['BindOnPickup']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['PrimaryUse']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Основное использование:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['PrimaryUse']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['EquipType']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Тип экипировки:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['EquipType']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['GatheringTypes']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Способ сбора:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['GatheringTypes']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['GatheringMultiplier']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Множитель сбора:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['GatheringMultiplier']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['GatheringEfficiency']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Эффективность сбора:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['GatheringEfficiency']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['PrimaryHand']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Основная рука:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['PrimaryHand']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['AddStatusEffects']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Добавляемые эффекты:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['AddStatusEffects']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['DurationOverrides']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Длительность действия:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['DurationOverrides']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['RemoveStatusEffects']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Рассеиваемые эффекты:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['RemoveStatusEffects']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['RemoveStatusEffectCategories']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Категория рассеиваемых эффектов:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['RemoveStatusEffectCategories']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['IsGem']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Драгоценный камень:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['IsGem']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>


                <?php
                if (empty($bases[0]['PerkBucket']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Слот для перка:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['PerkBucket']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['BaseDamage']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Базовый урон:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['BaseDamage']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['CritDamageMultiplier']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Множитель критического урона:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['CritDamageMultiplier']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['BaseStaggerDamage']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Базовый ошеломляющий урон:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['BaseStaggerDamage']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['CritStaggerDamageMultiplier']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Множитель критического ошеломляющего урона:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['CritStaggerDamageMultiplier']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['ScalingStrength']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Скейлинг силы:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['ScalingStrength']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['ScalingDexterity']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Скейлинг ловкости:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['ScalingDexterity']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['ScalingIntelligence']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Скейлинг интеллекта:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['ScalingIntelligence']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['PhysicalArmorSetScaleFactor']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Коэффициент физической брони:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['PhysicalArmorSetScaleFactor']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>


                <?php
                if (empty($bases[0]['ElementalArmorSetScaleFactor']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Коэффициент стихийной брони:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['ElementalArmorSetScaleFactor']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['ArmorRatingScaleFactor']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Коэффициент рейтинга брони:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['ArmorRatingScaleFactor']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>
                <?php
                if (empty($bases[0]['Encumbrance']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            Вместимость:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['Encumbrance']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['BlaStandard']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            BlaStandard:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['BlaStandard']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['BlaSiege']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            BlaSiege:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['BlaSiege']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['BlaStrike']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            BlaStrike:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['BlaStrike']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['BlaThrust']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            BlaFire:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['BlaFire']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['BlaLightning']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            BlaLightning:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['BlaLightning']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['BlaCorruption']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            BlaCorruption:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['BlaCorruption']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['AbaPoison']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            AbaPoison:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['AbaPoison']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['AbaDisease']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            AbaDisease:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['AbaDisease']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['AbaBleed']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            AbaBleed:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['AbaBleed']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['AbaFrostbite']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            AbaFrostbite:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['AbaFrostbite']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>

                <?php
                if (empty($bases[0]['AbaCurse']) != true) {
                ?>

                    <div class="item-inherit__list-item">
                        <div class="item-inherit__list-name">
                            AbaCurse:
                        </div>
                        <div class="item-inherit__list-stat">
                            <?php echo $bases[0]['AbaCurse']; ?>
                        </div>
                    </div>
                <?php
                }
                ?>
                <?php

                $name2 = 'craftresarmoring';
                $Card_name2 = '%' . str_replace("%", ' ', $bases[0]['Card_name']) . '%';
                $leng2 = strlen($Card_name2) + 2;
                $result2 = mysqli_query($goods, "SELECT * FROM  $name2 WHERE Card_name like '$Card_name2' and LENGTH(Card_name) <$leng2    ");

                while ($tettabl2 = mysqli_fetch_assoc($result2)) {
                    $basesRes[] = $tettabl2;
                }
                // var_dump($basesRes);
                ?>

            </div>
            <?php
            if ($basesRes[0]['Category_Number'] == 1) {

            ?>
                <div class="item-inherit__recept">
                    <h3 class="item-inherit__name">
                        Рецепты
                    </h3>
                    <?php
                    for ($i = 1; $i < 6; $i++) {

                        for ($n = 0; $n < 22; $n++) {


                            if ($basesRes[$n]['Category_Number'] == $i) {
                    ?>
                                <div class="item-inherit__category">
                                    <h4 class="item-inherit__category-name">
                                        <?php echo $basesRes[$n]['Category_Name']; ?>
                                    </h4>
                                    <p class="item-inherit__ingred">
                                        Ingredients:
                                    </p>
                                    <?php
                                    for ($g = 0; $g < 22; $g++) {
                                        if ($basesRes[$g]['Category_Number'] == $i) {
                                    ?>
                                            <div class="item-inherit__recept-item">
                                                <span> <?php echo $basesRes[$g]['Sum_Subcategory']; ?></span>
                                                <?php
                                                for ($t = 1; $t < 12; $t++) {
                                                    if (empty($basesRes[$g]['img_ObjUrl' . $t]) == true) {
                                                        break;
                                                    }
                                                ?>
                                                    <a href='<?php echo $adress2 ?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $basesRes[$g]['Obj_name' . $t]; ?>&TableType=<?php echo $basesRes[$g]['Obj_Table_Name' . $t]; ?>' class="item-inherit__object">
                                                        <div id="<?php echo $basesRes[$g]['Obj_rarity' . $t]; ?>" class="item-inherit__object-wrapper">
                                                            <img src="<?= TEMPLATE ?><?php echo $basesRes[$g]['img_ObjUrl' . $t]; ?>" alt="img" class="item-inherit__recept-img">
                                                        </div>
                                                        <span class="item-inherit__item-name">
                                                            <?php echo $basesRes[$g]['Obj_name' . $t]; ?>
                                                        </span>
                                                    </a>


                                                <?php
                                                }
                                                ?>
                                            </div>
                                    <?php
                                        }
                                    }

                                    ?>
                                </div>

                    <?php
                                break;
                            }
                        }
                    }
                    ?>
                </div>
            <?php
            }
            ?>

            <!-- Используется для изготовления -->
            <?php
            $name_rec = "consumablesrecipe";
            $Card_name_rec = '%' . str_replace("%", ' ', $_GET['Object']) . '%';
            $dd_rec = 2;
            $leng_rec = strlen($Card_name_rec) + $dd_rec;
            $result_rec = mysqli_query($goods, "SELECT * FROM  $name_rec WHERE consumablesName like '$Card_name_rec' and LENGTH(consumablesName) <$leng_rec ");
            $count_rec = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(*)   FROM $name_rec WHERE consumablesName like '$Card_name_rec' and LENGTH(consumablesName) <$leng_rec"));
            $countnumber_rec = $count_rec[0];

            while ($tettabl_rec = mysqli_fetch_assoc($result_rec)) {
                $bases_rec[] = $tettabl_rec;
            }
            if (empty($bases_rec[0]['consumablesName']) != true) {
            ?>
                <div style="margin-top: 40px; display:block;" class="back-links">
                    <div class="back-links__title-wrapper">
                        <div class="back-links__title">
                            Используется для изготовления
                        </div>
                    </div>
                    <div class="back-links__wrapper">
                        <div class="back-links__main">
                            <div class="back-links__column">Итем</div>
                            <div class="back-links__column">Раздел</div>
                            <div class="back-links__column">Уровень</div>
                        </div>

                        <?php
                        //start
                        for ($i = 0; $i < $countnumber_rec; $i++) {
                        ?>
                            <div class="back-links__item">
                                <a href='<?php echo $adress2?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo trim($bases_rec[$i]['Name']); ?>&TableType=<?php echo $bases_rec[$i]['Table_Name']; ?>' class="back-links__link"><?php echo str_replace('(T','',$bases_rec[$i]['Name']) ; ?></a>
                                <div class="back-links__skill"><?php echo $bases_rec[$i]['Tradeskill']; ?></div>
                                <div class="back-links__lvl"><?php echo $bases_rec[$i]['Level']; ?></div>
                            </div>
                        <?php
                        }
                        //end 
                        ?>

                    </div>
                </div>
            <?php
            }
            ?>
            <!-- Используется для изготовления -->

            <!-- comment -->
            <div style="width: 100%; margin-top:20px;" class="comment">
                <div class="comment__title">Комментарии</div>
                <div class="comment__box">

                    <?php
                    $name = "comments_object";
                    $SelectFilter11 = "Card_name='" . $_GET["Object"] . "'";
                    $SelectFilter12 = "table_name='" . $_GET["TableType"] . "'";
                    $result5 = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name  WHERE ($SelectFilter11) AND ($SelectFilter12)   ");
                    $count2 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(*)   FROM $name WHERE ($SelectFilter11) AND ($SelectFilter12)"));
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
                    <form method="POST" action="<?= TEMPLATE ?>account/comments/comments_object.php">
                        <input style="display: none;" value='<? echo ($_GET["Object"]); ?>' name="Object" type="text">
                        <input style="display: none;" value='<? echo ($_GET["TableType"]); ?>' name="TableType" type="text">
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
        <div class="sidebar">

            <a target="_blank" href="https://www.newworld.com/en-us" class="sidebar__preorder">
                <img src="<?= TEMPLATE ?>img/new_world_game.jpg" alt="preor" class="sidebar__img">
                <span>официальный сайт</span>
            </a>
            <a target="_blank" href="https://vk.com/new_world_amazon" class="sidebar__vk icon-vk"><span>New World VK</span></a>
            <a target="_blank" href="https://www.twitch.tv/playnewworld" class="sidebar__twich icon-twitch"><span>New World twitch</span></a>
            <a target="_blank" href="https://www.youtube.com/c/PlayNewWorld/videos" class="sidebar__youtub icon-youtube"><span>New World youtube</span></a>
        </div>


        <!-- </div> -->
    </div>
    </div>

<?php
}
?>