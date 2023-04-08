<div id='search' class="table">
    <div class="table__rows">
    <div class="table__link">Название</div>
    <div class="table__link">Слот</div>
    <div class="table__link">Перки</div>
    <div class="table__link">Грейд</div>
    <div class="table__link">Гир скор</div>
    <div class="table__link">Уровень</div>
    </div>
    <?php
    
    $quantity = 150;
    $name = "ammo";
    $name2 = "armor";
    $name3 = "weapons";
    $name4 = "resources";
    $name5 = "dyes";
    $name6 = "gems";
    $name7 = "consumables";
    $name8 = "perks";
    $name9 = "furniture";

    $result = mysqli_query($goods, "SELECT    id, img_FirstUrl,rarity,Name,Slot,Type,Tier,Gear_score,Level ,BoP,Crafted_By ,1Bonus_Name , img_CardUrl_1Bonus ,2Bonus_Name , img_CardUrl_2Bonus ,3Bonus_Name , img_CardUrl_3Bonus ,4Bonus_Name , img_CardUrl_4Bonus , 5Bonus_Name , img_CardUrl_5Bonus,Table_Name,Card_name  FROM  $name WHERE Card_name like '$search'  GROUP BY Card_name , rarity,img_FirstUrl UNION SELECT  id, img_FirstUrl,rarity,Name,Slot,Type,Tier,Gear_score,Level ,BoP,Crafted_By ,1Bonus_Name , img_CardUrl_1Bonus ,2Bonus_Name , img_CardUrl_2Bonus ,3Bonus_Name , img_CardUrl_3Bonus ,4Bonus_Name , img_CardUrl_4Bonus , 5Bonus_Name , img_CardUrl_5Bonus,Table_Name,Card_name  FROM $name3 WHERE Card_name like '$search'  GROUP BY Card_name , rarity,img_FirstUrl UNION SELECT  id, img_FirstUrl,rarity,Name,Slot,Type,Tier,Gear_score,Level ,BoP,Crafted_By ,1Bonus_Name , img_CardUrl_1Bonus ,2Bonus_Name , img_CardUrl_2Bonus ,3Bonus_Name , img_CardUrl_3Bonus ,4Bonus_Name , img_CardUrl_4Bonus , 5Bonus_Name , img_CardUrl_5Bonus,Table_Name,Card_name  FROM $name4 WHERE Card_name like '$search' GROUP BY Card_name , rarity,img_FirstUrl UNION SELECT  id, img_FirstUrl,rarity,Name,Slot,Type,Tier,Gear_score,Level ,BoP,Crafted_By ,1Bonus_Name , img_CardUrl_1Bonus ,2Bonus_Name , img_CardUrl_2Bonus ,3Bonus_Name , img_CardUrl_3Bonus ,4Bonus_Name , img_CardUrl_4Bonus , 5Bonus_Name , img_CardUrl_5Bonus,Table_Name,Card_name  FROM $name7 WHERE Card_name like '$search' GROUP BY Card_name , rarity,img_FirstUrl UNION SELECT  id, img_FirstUrl,rarity,Name,Slot,Type,Tier,Gear_score,Level ,BoP,Crafted_By ,1Bonus_Name , img_CardUrl_1Bonus ,2Bonus_Name , img_CardUrl_2Bonus ,3Bonus_Name , img_CardUrl_3Bonus ,4Bonus_Name , img_CardUrl_4Bonus , 5Bonus_Name , img_CardUrl_5Bonus,Table_Name,Card_name  FROM $name6 WHERE Card_name like '$search' GROUP BY Card_name , rarity,img_FirstUrl UNION SELECT  id, img_FirstUrl,rarity,Name,Slot,Type,Tier,Gear_score,Level ,BoP,Crafted_By ,1Bonus_Name , img_CardUrl_1Bonus ,2Bonus_Name , img_CardUrl_2Bonus ,3Bonus_Name , img_CardUrl_3Bonus ,4Bonus_Name , img_CardUrl_4Bonus , 5Bonus_Name , img_CardUrl_5Bonus,Table_Name,Card_name  FROM $name5 WHERE Card_name like '$search' GROUP BY Card_name , rarity,img_FirstUrl UNION SELECT  id, img_FirstUrl,rarity,Name,Slot,Type,Tier,Gear_score,Level ,BoP,Crafted_By ,1Bonus_Name , img_CardUrl_1Bonus ,2Bonus_Name , img_CardUrl_2Bonus ,3Bonus_Name , img_CardUrl_3Bonus ,4Bonus_Name , img_CardUrl_4Bonus , 5Bonus_Name , img_CardUrl_5Bonus,Table_Name,Card_name  FROM $name2  WHERE Card_name like '$search' GROUP BY Card_name , rarity,img_FirstUrl  UNION SELECT  id, img_FirstUrl,rarity,Name,Slot,Type,Tier,Gear_score,Level ,BoP,Crafted_By ,1Bonus_Name , img_CardUrl_1Bonus ,2Bonus_Name , img_CardUrl_2Bonus ,3Bonus_Name , img_CardUrl_3Bonus ,4Bonus_Name , img_CardUrl_4Bonus , 5Bonus_Name , img_CardUrl_5Bonus,Table_Name,Card_name  FROM $name8  WHERE Card_name like '$search' GROUP BY Card_name ,img_FirstUrl UNION SELECT  id, img_FirstUrl,rarity,Name,Slot,Type,Tier,Gear_score,Level ,BoP,Crafted_By ,1Bonus_Name , img_CardUrl_1Bonus ,2Bonus_Name , img_CardUrl_2Bonus ,3Bonus_Name , img_CardUrl_3Bonus ,4Bonus_Name , img_CardUrl_4Bonus , 5Bonus_Name , img_CardUrl_5Bonus,Table_Name,Card_name  FROM $name9  WHERE Card_name like '$search' GROUP BY Card_name ,img_FirstUrl   ");


  
    $count = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name , rarity,img_FirstUrl) from  $name WHERE Card_name like '$search' "));
    $count2 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name , rarity,img_FirstUrl)   from  $name2 WHERE Card_name like '$search'"));
    $count3 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name , rarity,img_FirstUrl)   from  $name3 WHERE Card_name like '$search'"));
    $count4 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name , rarity,img_FirstUrl)   from  $name4 WHERE Card_name like '$search'"));
    $count5 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name , rarity,img_FirstUrl)   from  $name5 WHERE Card_name like '$search'"));
    $count6 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name , rarity,img_FirstUrl)   from  $name6 WHERE Card_name like '$search'"));
    $count7 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name , rarity,img_FirstUrl)   from  $name7 WHERE Card_name like '$search'"));
    $count8 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name ,img_FirstUrl)   from  $name8 WHERE Card_name like '$search'"));
    $count9 = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Card_name ,img_FirstUrl)   from  $name9 WHERE Card_name like '$search'"));


    $countnumber = $count[0] + $count2[0] + $count3[0] + $count4[0] + $count5[0] + $count6[0] + $count7[0] + $count8[0] + $count9[0];
    if ($countnumber>150){
        $countnumber=150;
    }

    $firstpages = $countnumber / $quantity;
    $pages = ceil($firstpages);

    while ($tettabl = mysqli_fetch_assoc($result)) {
        $bases[] = $tettabl;
    }





    if ($page > $pages) {
        $_GET['page'] = 1;
        $page = 1;
    }
    if ($page != $pages &&  $pages > 0) {
        for ($i = 1 + $quantity * ($page - 1) - 1; $i <= $quantity * $page - 1; $i++) {

    ?>

            <a href='<?php echo $adress2 ?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name'] ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="table__item">
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

            </a>


        <?php
        }
    } else {
        for ($i = 1 + $quantity * ($page - 1) - 1; $i <  $countnumber; $i++) {

        ?>
            <a href='<?php echo $adress2 ?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name']; ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="table__item">
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
    