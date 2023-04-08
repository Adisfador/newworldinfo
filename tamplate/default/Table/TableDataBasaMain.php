<?php

if ($page > $pages) {
    $_GET['page'] = 1;
    $page = 1;
}
if ($page != $pages &&  $pages > 0) {
    for ($i = 1 + $quantity * ($page - 1) - 1; $i <= $quantity * $page - 1; $i++) {

?>

        <a href='<?php echo $adress2?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name'] ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="table__item">
            <div class="table__img" id="<?php echo $bases[$i]['rarity']; ?>"><img src="<?= TEMPLATE ?><?php echo $bases[$i]['img_FirstUrl']; ?>" alt="item"></div>
            <div class="table__stat"><?php echo $bases[$i]['Name']; ?></div>
            <div class="table__stat">
                <?php echo $bases[$i]['Slot']; ?></div>
            <div class="table__stat">
                <?php

                for ($u = 1; $u < 6; $u++) {
                    if (empty($bases[$i][$u . 'Bonus_Name']) != true) {

                        $descr  = $bases[$i][$u . 'Bonus_Name'];
                        $pieces = explode("<br>", $descr);
                ?>
                        <div class="table__stat-perk">
                            <img src="<?= TEMPLATE ?><?php echo $bases[$i]['img_CardUrl_' . $u . 'Bonus']; ?>" alt="img" class="table__perk-img">
                            <div class="table__stat-descr">
                                <div class="table__name">
                                    <?php echo $pieces[0]; ?></div>
                                <?php
                                for ($d = 1; $d < 4; $d++) {
                                ?>
                                    <span class="table__perk-stat">
                                        <?php
                                        echo $pieces[$d];
                                        ?>
                                    </span>
                                <?php
                                }
                                ?>
                            </div>
                        </div>

                <?php
                    } else if ($bases[$i]['Table_Name'] == 'resources' xor $bases[$i]['Table_Name'] == 'dyes' xor $bases[$i]['Table_Name'] == 'consumables') {
                        echo $bases[$i]['Type'];
                        break;
                    }
                }

                ?>
            </div>
            <div class="table__stat"><?php echo $bases[$i]['Tier']; ?></div>
            <div class="table__stat"><?php echo $bases[$i]['Gear_score']; ?></div>
            <div class="table__stat"><?php echo $bases[$i]['Level']; ?></div>
            <!-- <div class="table__stat">
                    <?/*php echo $bases[$i]['BoP']; */ ?>
                </div>
                <div class="table__stat">
                    <?/*php echo $bases[$i]['Crafted_By']; */ ?>
                </div> -->
        </a>


    <?php
    }
} else {
    for ($i = 1 + $quantity * ($page - 1) - 1; $i <  $countnumber; $i++) {

    ?>
        <a href='<?php echo $adress2?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name']; ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="table__item">
            <div class="table__img" id="<?php echo $bases[$i]['rarity']; ?>"><img src="<?= TEMPLATE ?><?php echo $bases[$i]['img_FirstUrl']; ?>" alt="item"></div>
            <div class="table__stat"><?php echo $bases[$i]['Name']; ?></div>
            <div class="table__stat">
                <?php echo $bases[$i]['Slot']; ?></div>
            <div class="table__stat">
                <?php
                for ($u = 1; $u < 6; $u++) {
                    if (empty($bases[$i][$u . 'Bonus_Name']) != true) {

                        $descr  = $bases[$i][$u . 'Bonus_Name'];
                        $pieces = explode("<br>", $descr);
                ?>
                        <div class="table__stat-perk">
                            <img src="<?= TEMPLATE ?><?php echo $bases[$i]['img_CardUrl_' . $u . 'Bonus']; ?>" alt="img" class="table__perk-img">
                            <div class="table__stat-descr">
                                <div class="table__name">
                                    <?php echo $pieces[0]; ?></div>
                                <?php
                                for ($d = 1; $d < 4; $d++) {
                                ?>
                                    <span class="table__perk-stat">
                                        <?php
                                        echo $pieces[$d];
                                        ?>
                                    </span>
                                <?php
                                }
                                ?>
                            </div>
                        </div>

                <?php
                    } else if ($bases[$i]['Table_Name'] == 'resources' xor $bases[$i]['Table_Name'] == 'dyes' xor $bases[$i]['Table_Name'] == 'consumables') {
                        echo $bases[$i]['Type'];
                        break;
                    }
                }

                ?>
            </div>

            <div class="table__stat"><?php echo $bases[$i]['Tier']; ?></div>
            <div class="table__stat"><?php echo $bases[$i]['Gear_score']; ?></div>
            <div class="table__stat"><?php echo $bases[$i]['Level']; ?></div>
            <!-- <div class="table__stat">
                <?/*php echo $bases[$i]['BoP']; */ ?>
                </div>
                <div class="table__stat">
                    <?/*php echo $bases[$i]['Crafted_By']; */ ?>
                </div> -->
        </a>

<?php

    }
}


?>