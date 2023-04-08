<?php
include "header.tpl.php";

if ($_GET['AdressMain'] == "Home" xor $_GET['AdressMain'] == "DataBase"  xor $_GET['AdressMain'] == "Craft" xor $_GET['AdressMain'] == "Build" xor $_GET['AdressMain'] == "Map" xor $_GET['AdressMain'] == "authorization" xor $_GET['AdressMain'] == "registration" xor $_GET['AdressMain'] == "News") {
    
} else {
    $_GET['AdressMain'] = "Home";
    $AdressGet = "Home";
    
}
?>

<div class="bg"></div>

<!--! popap -->

<div id="popup" class="popup">
        <div class="popup__wrapper"></div>
        <div class="popup__body">
            <div class="popup__content">
                <a href="#" class="popup__close"><span></span></a>
                <h4 class="popup__title">Обратная связь</h4>
                <p class="popup__text">Форма связи для получения информации о найденных ошибках и недочетах в работе сайта. Все предложения будут рассмотрены.<span>(При успешной отправке будет произведен редирект на главную страницу)</span></p>
                <div class="popup__form " >
                    <form action="<?= TEMPLATE ?>phpmailer/mail.php" method="POST">
                        <label for="e-mail" class="popup__item-wrapper">
                            <input autocomplete="off" maxlength="140" id="e-mail" name="e-mail" class="popup__item" type="text" >
                            <div class="popup__placeholder">Email , telegram или любой другой способ связи</div>
                        </label>

                        <label for="What" class="popup__textarea-wrapper">
                            <textarea maxlength="2500" id="What" name="What" class="popup__textarea"
                            ></textarea>
                            <div class="popup__placeholder">Текст сообщения</div>
                        </label>
                        <button type="submit" class="popup__btn">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--! popap end-->

<?php
if ($_GET['AdressMain'] == "Home") {
    include "Home.php";
} else if ($_GET['AdressMain'] == "DataBase" xor $_GET['AdressMain'] == "Craft") {
    include "main.tpl.php";
} else if ($_GET['AdressMain'] == "Build") {
    include "build.php";
}else if ($_GET['AdressMain'] == "News") {
    include "News.php";
} else if ($_GET['AdressMain'] == "Map") {
    include "Map.php";
} else if ($_GET['AdressMain'] == "authorization") {
    include "account/authorization.php";
} else if ($_GET['AdressMain'] == "registration") {
    include "account/registration.php";
} 

?>


<?php
include "footer.php"
?>