<?php


if (empty($_GET['news_title'])) {
    $name = "news";
    $result = mysqli_query($goods, "SELECT * FROM  $name ORDER BY id DESC ");

    $count = mysqli_fetch_array(mysqli_query($goods, "SELECT COUNT(*)   FROM $name   "));

    $countnumber = $count[0];

    while ($tettabl = mysqli_fetch_assoc($result)) {
        $bases[] = $tettabl;
    }

?>


    <div class="database">
        <div class="container  container_sidebar-Home">
            <!-- <div class="container  container_sidebar"> -->
            <!-- <div class="container "> -->
            <div class="database__inner">
                <div class="database__adress"><span> <a href='<?php echo   $adress2 . '&AdressMain=' . "$AdressHome"  ?>'>Home</a> / Новости</span>

                </div>


                <!--! Новости -->
                <div class="sidbar-wrapper">
                    <div class="news">
                        <h1 class="news__title">
                            Новости New World
                        </h1>
                        <div class="news__box">


                            <div class="news__main-item">
                                <a href='<?php echo   $adress2 . '&AdressMain=' . "$AdressNews"  .  '&news_title=' . $bases["0"]['title']  ?>'>
                                    <div class="news__main-name">
                                        <?php echo $bases["0"]['title']; ?>
                                    </div>
                                    <div class="news__main-descr">
                                        <?php echo $bases["0"]['subtitle']; ?>
                                    </div>
                                    <div class="news__top-main">Свежие новости New World</div>
                                    <div class="news__bot-main"><?php echo $bases["0"]['time']; ?></div>
                                    <img src='<?= TEMPLATE ?>img/news/<?php echo $bases["0"]['Main_img']; ?>' alt="img" class="news__img-main">
                                </a>
                            </div>


                            <?php
                            for ($i = 1; $i <= $countnumber  - 1; $i++) {
                            ?>

                                <div class="news__item">
                                    <a href='<?php echo   $adress2 . '&AdressMain=' . "$AdressNews"  .  '&news_title=' . $bases[$i]['title']  ?>'>
                                        <img src='<?= TEMPLATE ?>img/news/<?php echo $bases[$i]['Main_img']; ?>' alt="img" class="news__img">
                                        <div class="news__wrapper">
                                            <div class="news__name">
                                                <?php echo $bases[$i]['title']; ?>
                                            </div>
                                            <div class="news__descr">
                                                <?php echo $bases[$i]['subtitle']; ?>
                                            </div>
                                            <div class="news__top">Новости New World</div>
                                            <div class="news__bot"><?php echo $bases[$i]['time']; ?></div>
                                        </div>
                                    </a>
                                </div>
                            <?php
                            }

                            ?>
                        </div>
                    </div>
                    <div class="sidebar">
                        <a style="border: none;" target="_blank" href="https://funpay.ru/chips/135/?utm_source=newworldinfo&utm_medium=banner&utm_campaign=new_world" class="sidebar__preorder">
                            <img src="<?= TEMPLATE ?>img/new_world_game.png" alt="preor" class="sidebar__img">
                        </a>
                        <a target="_blank" href="https://vk.com/new_world_amazon" class="sidebar__vk icon-vk"><span>New
                                World VK</span></a>
                        <a target="_blank" href="https://www.twitch.tv/playnewworld" class="sidebar__twich icon-twitch"><span>New World twitch</span></a>
                        <a target="_blank" href="https://www.youtube.com/c/PlayNewWorld/videos" class="sidebar__youtub icon-youtube"><span>New World youtube</span></a>
                    </div>
                </div>
                <!--! Новости end -->
            </div>
        </div>
    </div>
    <?php

} else {
    $name = "news";
    $Card_name = '%' . str_replace("%", ' ', $_GET['news_title']) . '%';
    $dd = 5;
    $leng = strlen($Card_name) + $dd;
    $result = mysqli_query($goods, "SELECT * FROM  $name WHERE title like '$Card_name' and LENGTH(title) <$leng  limit 1  ");
    while ($tettabl = mysqli_fetch_assoc($result)) {
        $bases[] = $tettabl;
    }
    if (empty($bases[0]['title'])) {
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
        </div>
        </div>
    <?php

    } else {
    ?>
        <div class="database">
            <div class="container  container_sidebar-Home">
                <!-- <div class="container  container_sidebar"> -->
                <!-- <div class="container "> -->
                <div class="database__inner">
                    <div class="database__adress"><span> <a href='<?php echo   $adress2 . '&AdressMain=' . "$AdressHome"  ?>'>Home</a> / <a href='<?php echo   $adress2 . '&AdressMain=' . "$AdressNews"  ?>'>Новости</a>  / <?echo($_GET['news_title']);?></span>
                    </div>

                    <!--! Новость -->
                    <div class="sidbar-wrapper">
                        <div class="This-news">
                            <div class="This-news__img-main-wrapper">
                                <img src='<?= TEMPLATE ?>img/news/<?php echo $bases["0"]['Main_img']; ?>' alt="img" class="This-news__img-main">
                                <div class="This-news__top">Новости New World</div>
                                <div class="This-news__bot"><?php echo $bases["0"]['time']; ?></div>
                            </div>
                            <h1 class="This-news__title">
                            <?php echo $bases["0"]['title']; ?>
                            </h1>
                            <div class="This-news__text">
                            <?php echo $bases["0"]['subtitle_new']; ?>
                               
                            </div>
                            <div class="This-news__body">
                            <?php echo $bases["0"]['text_body']; ?>
                            </div>
                        </div>
                        <div class="sidebar">
                            <a style="border: none;" target="_blank" href="https://funpay.ru/chips/135/?utm_source=newworldinfo&utm_medium=banner&utm_campaign=new_world" class="sidebar__preorder">
                                <img src="<?= TEMPLATE ?>img/new_world_game.png" alt="preor" class="sidebar__img">
                            </a>
                            <a target="_blank" href="https://vk.com/new_world_amazon" class="sidebar__vk icon-vk"><span>New
                                    World VK</span></a>
                            <a target="_blank" href="https://www.twitch.tv/playnewworld" class="sidebar__twich icon-twitch"><span>New World twitch</span></a>
                            <a target="_blank" href="https://www.youtube.com/c/PlayNewWorld/videos" class="sidebar__youtub icon-youtube"><span>New World youtube</span></a>
                        </div>
                    </div>
                    <!--! Новость end-->

                </div>
            </div>
        </div>
<?php
    }
}
?>