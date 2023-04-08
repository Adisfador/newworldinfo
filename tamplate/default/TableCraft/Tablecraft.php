 <?php

    if ($page > $pages) {
        $_GET['page'] = 1;
        $page = 1;
    }
    if ($page != $pages &&  $pages > 0) {
        for ($i = 1 + $quantity * ($page - 1) - 1; $i <= $quantity * $page - 1; $i++) {

    ?>

         <a href='<?php echo $adress2?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name'] ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="Tablecraft__item">
             <div class="Tablecraft__img" id="<?php echo $bases[$i]['rarity']; ?>"><img src="<?= TEMPLATE ?><?php echo $bases[$i]['img_FirstUrl']; ?>" alt="item"></div>
             <div class="Tablecraft__stat"><?php echo $bases[$i]['Name']; ?></div>
             <div class="Tablecraft__stat">
                 <?php echo $bases[$i]['Category']; ?></div>
             <div class="Tablecraft__stat"><?php echo $bases[$i]['Tier']; ?></div>
             <div class="Tablecraft__stat">

                 <?php
                    $name2 = 'craftresarmoring';
                    $Card_name2 = '%' . str_replace("%", ' ', $bases[$i]['Card_name']) . '%';
                    $leng2=strlen( $Card_name2)+2;
                    
                    $result2 = mysqli_query($goods, "SELECT * FROM  $name2 WHERE Card_name like '$Card_name2' and LENGTH(Card_name) <$leng2   ");


                    while ($tettabl2 = mysqli_fetch_assoc($result2)) {
                        $basesRes[] = $tettabl2;
                    }
                    // var_dump( $basesRes);
                    for ($g = 0; $g < 22; $g++) {
                        if ($basesRes[$g]['Category_Number'] == 1) {
                    ?>
                         <div class="Tablecraft__ingr">
                             <span> <?php echo $basesRes[$g]['Sum_Subcategory']; ?></span>
                             <?php
                                for ($t = 1; $t < 6; $t++) {
                                    if (empty($basesRes[$g]['img_ObjUrl' . $t]) == true) {
                                        break;
                                    }
                                ?>

                                 <div id="<?php echo $basesRes[$g]['Obj_rarity' . $t]; ?>" class="Tablecraft__img-wrapper">
                                     <img src="<?= TEMPLATE ?><?php echo $basesRes[$g]['img_ObjUrl' . $t]; ?>" alt="img" class="Tablecraft__ingr-img">
                                     <span><?php echo $basesRes[$g]['Obj_name' . $t]; ?> </span>
                                 </div>



                             <?php
                                }
                                ?>
                         </div>
                 <?php
                        }
                    }
                    unset($basesRes);
                    ?>


             </div>

             <div class="Tablecraft__stat"><?php echo $bases[$i]['Skill']; ?></div>
             <div class="Tablecraft__stat"><?php echo $bases[$i]['Crafting_XP']; ?></div>

         </a>


     <?php
        }
    } else {
        for ($i = 1 + $quantity * ($page - 1) - 1; $i <  $countnumber; $i++) {

        ?>
         <a href='<?php echo $adress2?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name']; ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="Tablecraft__item">
             <div class="Tablecraft__img" id="<?php echo $bases[$i]['rarity']; ?>"><img src="<?= TEMPLATE ?><?php echo $bases[$i]['img_FirstUrl']; ?>" alt="item"></div>
             <div class="table__stat"><?php echo $bases[$i]['Name']; ?></div>
             <div class="Tablecraft__stat">
                 <?php echo $bases[$i]['Category']; ?></div>
             <div class="Tablecraft__stat"><?php echo $bases[$i]['Tier']; ?></div>
             <div class="Tablecraft__stat">


             <?php
                    $name2 = 'craftresarmoring';
                    $Card_name2 = '%' . str_replace("%", ' ', $bases[$i]['Card_name']) . '%';
                    $leng2=strlen( $Card_name2)+2;
                    
                    $result2 = mysqli_query($goods, "SELECT * FROM  $name2 WHERE Card_name like '$Card_name2' and LENGTH(Card_name) <$leng2   ");


                    while ($tettabl2 = mysqli_fetch_assoc($result2)) {
                        $basesRes[] = $tettabl2;
                    }
                    // var_dump( $basesRes);
                    for ($g = 0; $g < 22; $g++) {
                        if ($basesRes[$g]['Category_Number'] == 1) {
                    ?>
                         <div class="Tablecraft__ingr">
                             <span> <?php echo $basesRes[$g]['Sum_Subcategory']; ?></span>
                             <?php
                                for ($t = 1; $t < 6; $t++) {
                                    if (empty($basesRes[$g]['img_ObjUrl' . $t]) == true) {
                                        break;
                                    }
                                ?>

                                 <div id="<?php echo $basesRes[$g]['Obj_rarity' . $t]; ?>" class="Tablecraft__img-wrapper">
                                     <img src="<?= TEMPLATE ?><?php echo $basesRes[$g]['img_ObjUrl' . $t]; ?>" alt="img" class="Tablecraft__ingr-img">
                                     <span><?php echo $basesRes[$g]['Obj_name' . $t]; ?> </span>
                                 </div>



                             <?php
                                }
                                ?>
                         </div>
                 <?php
                        }
                    }
                    unset($basesRes);
                    ?>





               

             </div>

             <div class="Tablecraft__stat"><?php echo $bases[$i]['Skill']; ?></div>
             <div class="Tablecraft__stat"><?php echo $bases[$i]['Crafting_XP']; ?></div>

         </a>

 <?php

        }
    }


    ?>


 </div>
 <!--! Tablecraft end -->