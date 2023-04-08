<div class="database">

    <div class="container ">
        <div class="registration">
            <!-- verify -->
            <?php
            if ($_GET["setting"] != "yes") {
            ?>
                <div class="registration__title">Регистрация</div>
                <?php
                if (empty($_GET['verify']) != true) {

                    $SelectFilter11 = 'token ="' . $_GET['verify'] . '"';

                    $name = "account";
                    $result = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "update   $name set verify = 'yes'  WHERE ($SelectFilter11)  ");


                ?>
                    <div class="registration__sended">Email подтвержден!</div>
                <?php

                }

                ?>
                <!-- verify end -->

                <?php
                if ($_GET['passGl'] == true) {
                ?>
                    <div class="registration__errors">Подтверждение пароля не соответствует паролю</div>
                <?php
                }

                if ($_GET['loginCh'] == true) {
                ?>
                    <div class="registration__errors">Имя пользователя уже существует</div>
                <?php
                }

                if ($_GET['meilCh'] == true) {
                ?>
                    <div class="registration__errors">Электронная почта уже была использована</div>
                <?php
                }

                if ($_GET['loginSpe'] == "true") {
                ?>
                    <div class="registration__errors">Имя пользователя не может содержать специальные символы</div>
                <?php
                }

                if ($_GET['reg'] == true) {
                ?>
                    <div class="registration__sended">На почту было отправлено письмо для подтверждения регистрации</div>
                <?php
                }

                ?>
                <form autocomplete="on" method="POST" action="<?= TEMPLATE ?>account/registr_obr.php">
                    <div class="registration__item">
                        <label for="user-mail" class="registration__label">Email</label>
                        <div class="registration__input-wrapper">
                            <input autocomplete="email" maxlength="200" required placeholder="email@example.com" id="user-mail" name="user-mail" type="email" class="registration__input">
                            <label for="user-mail" class="registration__ico icon-free-icon-email"></label>
                        </div>
                    </div>
                    <div class="registration__item">
                        <label for="user-login" class="registration__label">Логин</label>
                        <div class="registration__input-wrapper">
                            <input autocomplete="username" minlength="3" maxlength="100" required placeholder="Логин" id="user-login" name="user-login" type="text" class="registration__input">
                            <label for="user-login" class="registration__ico icon-user"></label>
                        </div>
                    </div>
                    <div class="registration__item">
                        <label for="user-password" class="registration__label">Пароль</label>
                        <div class="registration__input-wrapper">
                            <input aria-autocomplete="list" autocomplete="new-password" minlength="5" maxlength="100" required placeholder="Не используйте тот же пароль, что и для игры!" id="user-password" name="user-password" type="password" class="registration__input">
                            <label for="user-password" class="registration__ico icon-lock"></label>
                        </div>
                    </div>
                    <div class="registration__item">
                        <label for="user-password-conf" class="registration__label">Подтверждение пароля</label>
                        <div class="registration__input-wrapper">
                            <input aria-autocomplete="list" autocomplete="new-password" minlength="5" required placeholder="Повторите свой сверхзащищенный пароль" id="user-password-conf" name="user-password-conf" type="password" class="registration__input">
                            <label for="user-password-conf" class="registration__ico icon-lock"></label>
                        </div>
                    </div>
                    <button type="submit" class="registration__btn">Зарегистрироваться</button>

                </form>
            <?php
            } else if ($_GET["setting"] == "yes") {
            ?>
                <div class="registration__title">Настройки</div>
                <?php
                if ($_GET['exist'] == "no") {
                ?>
                    <div class="registration__errors">Старый пароль указан неверно</div>
                <?php
                }
                if ($_GET['passGl'] == "yes") {
                ?>
                    <div class="registration__errors">Подтверждение пароля не соответствует паролю</div>
                <?php
                }
                if ($_GET['was'] == "yes") {
                ?>
                    <div class="registration__errors">Данный никнейм занят</div>
                <?php
                }
                if ($_GET['loginSpe'] == "yes") {
                ?>
                    <div class="registration__errors">Имя пользователя не может содержать специальные символы</div>
                <?php
                }

                if ($_GET['reg'] == "yes") {
                ?>
                    <div class="registration__sended">Изменения были сохранены</div>
                <?php
                }

                $SelectFilter11 = 'user_mail ="' . $_COOKIE['user'] . '"';
                $name = "account";
                $result5 = mysqli_query(table(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME), "SELECT * FROM  $name   WHERE ($SelectFilter11)  ");
                while ($tettabl5 = mysqli_fetch_assoc($result5)) {
                    $bases5[] = $tettabl5;
                }
                ?>
                <form autocomplete="on" method="POST" action="<?= TEMPLATE ?>account/change.php">
                    <div class="registration__item">
                        <label for="user-mail" class="registration__label">Email</label>
                        <div class="registration__input-wrapper">
                            <input autocomplete="email" disabled value="<? echo ($bases5[0]["user_mail"]); ?>" maxlength="200" required placeholder="email@example.com" id="user-mail" name="mail" type="email" class="registration__input">
                            <input aria-autocomplete="list" autocomplete="new-password" required name="email_conf" type="text" value="<? echo ($bases5[0]["user_mail"]); ?>" style="display: none;">
                            <label for="user-mail" class="registration__ico icon-free-icon-email"></label>
                        </div>
                    </div>
                    <div class="registration__item">
                        <label for="user-login" class="registration__label">Логин</label>
                        <div class="registration__input-wrapper">
                            <input autocomplete="username" value="<? echo ($bases5[0]["login"]); ?>" minlength="3" maxlength="100" required placeholder="Логин" id="user-login" name="login" type="text" class="registration__input">
                            <label for="user-login" class="registration__ico icon-user"></label>
                        </div>
                    </div>
                    <div class="registration__item">
                        <label for="user-password" class="registration__label">Пароль</label>
                        <div class="registration__subtext">(оставьте поле пустым, если не хотите его менять)</div>
                        <div class="registration__input-wrapper">
                            <input aria-autocomplete="list" autocomplete="new-password" minlength="5" maxlength="100" placeholder="Не используйте тот же пароль, что и для игры!" id="user-password" name="user-password" type="password" class="registration__input">
                            <label for="user-password" class="registration__ico icon-lock"></label>
                        </div>
                    </div>
                    <div class="registration__item">
                        <label for="user-password-conf" class="registration__label">Подтверждение пароля</label>
                        <div class="registration__subtext">(оставьте поле пустым, если не хотите его менять)</div>
                        <div class="registration__input-wrapper">
                            <input aria-autocomplete="list" autocomplete="new-password" minlength="5" placeholder="Повторите свой сверхзащищенный пароль" id="user-password-conf" name="user-password-conf" type="password" class="registration__input">
                            <label for="user-password-conf" class="registration__ico icon-lock"></label>
                        </div>
                    </div>
                    <div class="registration__item">
                        <label for="user-password-old" class="registration__label">Подтверждение пароля</label>
                        <div class="registration__input-wrapper">
                            <input aria-autocomplete="list" autocomplete="new-password" minlength="5" required placeholder="Введите свой старый пароль" id="user-password-old" name="user-password-old" type="password" class="registration__input">
                            <label for="user-password-old" class="registration__ico icon-lock"></label>
                        </div>
                    </div>
                    <button type="submit" class="registration__btn">Изменить</button>

                </form>
            <?php
            }
            ?>

        </div>

    </div>
</div>