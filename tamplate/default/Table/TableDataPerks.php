<?php
    $F3 = $_GET['Filter3'];
    function Get__Filter3()
    {
        $G = $_GET['Filter3'];
        return $G;
    }
    $F4 = $_GET['Filter4'];
    function Get__Filter4()
    {
        $G = $_GET['Filter4'];
        return $G;
    }
    // echo '<div style="color:white;"> '.$F.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F2.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F3.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F4.' </div>';
    // echo "<br>";
    // echo '<div style="color:white;"> '.$F5.' </div>';

    $name = "perks";
    $result = mysqli_query($goods, "SELECT * FROM  $name  GROUP BY Name  LIMIT  $p    ");

    $count = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(DISTINCT Name)    FROM $name   "));
    // $name = "perks";
    // $result = mysqli_query($goods, "SELECT * FROM  $name    LIMIT  $p    ");

    // $count = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(*)    FROM $name   "));


    $countnumber = $count[0];

    $firstpages = $countnumber / $quantity;
    $pages = ceil($firstpages);

    while ($tettabl = mysqli_fetch_assoc($result)) {
        $bases[] = $tettabl;
    }
 
    ?>

























<!--! TableDataPerks -->
<div class="TableDataPerks">
    <div class="TableDataPerks__rows">
        <div class="TableDataPerks__link"></div>
        <div class="TableDataPerks__link">Название</div>
        <div class="TableDataPerks__link">Слот</div>
        <div class="TableDataPerks__link">Описание</div>
    </div>

    <?php

if ($page > $pages) {
    $_GET['page'] = 1;
    $page = 1;
}
if ($page != $pages &&  $pages > 0) {
    for ($i = 1 + $quantity * ($page - 1) - 1; $i <= $quantity * $page - 1; $i++) {

?>

        <a href='<?php echo $adress2?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name'] ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="TableDataPerks__item">
            <img class="TableDataPerks_img" src="<?= TEMPLATE ?><?php echo $bases[$i]['img_FirstUrl']; ?>" alt="img">
            <div class="TableDataPerks__stat">

            <?php echo $bases[$i]['Name']; ?></div>
            <div class="TableDataPerks__stat">
            <?php echo $bases[$i]['Slot']; ?></div>
            <div class="TableDataPerks__stat"><?php echo $bases[$i]['Card_Description']; ?></div>

        </a>


    <?php
    }
} else {
    for ($i = 1 + $quantity * ($page - 1) - 1; $i <  $countnumber; $i++) {

    ?>
        <a href='<?php echo $adress2?>&AdressMain=DataBase&DataType=Objectpage&Object=<?php echo $bases[$i]['Card_name']; ?>&TableType=<?php echo $bases[$i]['Table_Name']; ?>' class="TableDataPerks__item">
            <img class="TableDataPerks_img" src="<?= TEMPLATE ?><?php echo $bases[$i]['img_FirstUrl']; ?>" alt="img">
            <div class="TableDataPerks__stat">

            <?php echo $bases[$i]['Name']; ?></div>
            <div class="TableDataPerks__stat">
            <?php echo $bases[$i]['Slot']; ?></div>
            <div class="TableDataPerks__stat"><?php echo $bases[$i]['Card_Description']; ?></div>
        </a>

<?php

    }
}


?>

    
    <!-- <a href="#" class="TableDataPerks__item">
        <img class="TableDataPerks_img" src="img/stalwart1.webp" alt="img">
        <div class="TableDataPerks__stat">
            Stalwart I</div>
        <div class="TableDataPerks__stat">
            Equippable Token+Equippable Ring+Equippable Amulet</div>
        <div class="TableDataPerks__stat"></div>
    </a> -->
    
</div>
<!--! TableDataPerks  end -->