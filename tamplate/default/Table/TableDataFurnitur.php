<!--! TableDataFurnitur -->
<div class="TableDataFurnitur">
    <div class="TableDataFurnitur__rows">
        <div class="TableDataFurnitur__link">Название</div>
        <div class="TableDataFurnitur__link">Категория</div>
        <div class="TableDataFurnitur__link">Подкатегория</div>
        <div class="TableDataFurnitur__link">Грейд</div>
        <div class="TableDataFurnitur__link">Ранг поинтов</div>
        <div class="TableDataFurnitur__link">Крафтиться ?</div>
    </div>

    <?php

    if ($page > $pages) {
        $_GET['page'] = 1;
        $page = 1;
    }
    if ($page != $pages &&  $pages > 0) {
        for ($i = 1 + $quantity * ($page - 1) - 1; $i <= $quantity * $page - 1; $i++) {

    ?>

            <a href='<?php echo $adress2?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name'] ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="TableDataFurnitur__item">
                <img class="TableDataFurnitur_img" src="<?= TEMPLATE ?><?php echo $bases[$i]['img_FirstUrl']; ?>" alt="img">
                <div class="TableDataFurnitur__stat">

                <?php echo $bases[$i]['Name']; ?></div>
                <div class="TableDataFurnitur__stat">
                <?php echo $bases[$i]['Category']; ?></div>
                <div class="TableDataFurnitur__stat"><?php echo $bases[$i]['SubCategory']; ?></div>
                <div class="TableDataFurnitur__stat"><?php echo $bases[$i]['Tier']; ?></div>
                <div class="TableDataFurnitur__stat"><?php echo $bases[$i]['Rank_Points']; ?></div>
                <div class="TableDataFurnitur__stat"><?php echo $bases[$i]['Crafted?']; ?></div>

            </a>


        <?php
        }
    } else {
        for ($i = 1 + $quantity * ($page - 1) - 1; $i <  $countnumber; $i++) {

        ?>
            <a href='<?php echo $adress2?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name']; ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="TableDataFurnitur__item">
                <img class="TableDataFurnitur_img" src="<?= TEMPLATE ?><?php echo $bases[$i]['img_FirstUrl']; ?>" alt="img">
                <div class="TableDataFurnitur__stat">

                <?php echo $bases[$i]['Name']; ?></div>
                <div class="TableDataFurnitur__stat">
                <?php echo $bases[$i]['Category']; ?></div>
                <div class="TableDataFurnitur__stat"><?php echo $bases[$i]['SubCategory']; ?></div>
                <div class="TableDataFurnitur__stat"><?php echo $bases[$i]['Tier']; ?></div>
                <div class="TableDataFurnitur__stat"><?php echo $bases[$i]['Rank_Points']; ?></div>
                <div class="TableDataFurnitur__stat"><?php echo $bases[$i]['Crafted?']; ?></div>
            </a>

    <?php

        }
    }


    ?>









    
</div>
<!--! TableDataFurnitur end -->