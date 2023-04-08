<div class="database">
    <div class="container ">
        <!--! authorization -->
        <div class="registration">
            <?php
            if ($_GET['forgot'] != "yes" &&  $_GET['reg'] != "yes" &&  empty($_GET['passforgot']) == true) {
            ?>
                <div class="registration__title">Авторизация</div>
                <?php
                if ($_GET['verify'] == "no") {
                ?>
                    <div class="registration__errors">Email не подтвержден.</div>
                <?php
                } else  if ($_GET['loginCompl'] == "no") {
                ?>
                    <div class="registration__errors">Email или пароль указан неверно</div>
                <?php
                }

                if (empty($_COOKIE['user']) != true) {
                ?>
                    <div class="registration__sended">Вы вошли в аккаунт.</div>
                <?php
                }

                ?>
                <form autocomplete="on" method="POST" action="<?= TEMPLATE ?>account/auth_obr.php">
                    <div class="registration__item">
                        <label for="user-mail" class="registration__label">Email</label>
                        <div class="registration__input-wrapper">
                            <input autocomplete="email" required placeholder="email@example.com" id="user-mail" name="user-mail" type="email" class="registration__input">
                            <label for="user-mail" class="registration__ico icon-free-icon-email"></label>
                        </div>
                    </div>
                    <div class="registration__item">
                        <label for="user-password" class="registration__label">Пароль</label>
                        <div class="registration__input-wrapper">
                            <input autocomplete="password_hash" required placeholder="Пароль" id="user-password" type="password" name="user-password" class="registration__input">
                            <label for="user-password" class="registration__ico icon-lock"></label>
                        </div>
                    </div>
                    <?php if (empty($_COOKIE['user']) == true) {
                    ?>
                        <button type="submit" class="registration__btn">Авторизоваться</button>
                    <?php
                    }
                    ?>
                </form>
                <?php if (empty($_COOKIE['user']) == true) {
                ?>
                    <a style="display: block; margin-bottom: 10px;" href="/index.php?&AdressMain=authorization&forgot=yes" class="registration__forgot">Забыли пароль?</a>
                    <a style="display: block;" href="/index.php?&AdressMain=registration" class="registration__forgot">Регистрация</a>
                <?php
                }
                ?>
            <?php } else if (empty($_GET['passforgot']) == true && $_GET['reg'] != "yes") {
            ?>
                <div class="registration__title">Восстановление доступа</div>
                <?php
                if ($_GET['exist'] == "yes") {
                ?>
                    <div class="registration__sended">На почту было отправлено письмо для восстановление доступа</div>
                <?php
                } else if ($_GET['exist'] == "no") {
                ?>
                    <div class="registration__errors">Почта не существует или не подтверждена</div>
                <?php
                }
                ?>
                <form autocomplete="on" method="POST" action="<?= TEMPLATE ?>account/recovery.php">
                    <div class="registration__item">
                        <label for="user-mail" class="registration__label">Email</label>
                        <div class="registration__input-wrapper">
                            <input autocomplete="email" required placeholder="email@example.com" id="user-mail" name="user-mail" type="email" class="registration__input">
                            <label for="user-mail" class="registration__ico icon-free-icon-email"></label>
                        </div>
                    </div>
                    <button type="submit" class="registration__btn">Отправить восстановление на почту</button>
                </form>
            <?php

            } else if (empty($_GET['passforgot']) != true or $_GET['reg'] == "yes") {
            ?>
                <div class="registration__title">Восстановление доступа</div>
                <?php
                if ($_GET['reg'] == "no") {
                ?>
                    <div class="registration__errors">Подтверждение пароля не соответствует паролю</div>
                    <form autocomplete="on" method="POST" action="<?= TEMPLATE ?>account/passforgot.php">
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
                        <input aria-autocomplete="list" autocomplete="new-password" required name="conf" type="text" value="<? echo ($_GET['passforgot']); ?>" style="display: none;">
                        <button type="submit" class="registration__btn">Смена пароля</button>

                    </form>
                <?php
                } else if ($_GET['reg'] == "yes") {
                ?>
                    <div class="registration__sended">Пароль изменен</div>
                    <form autocomplete="on" method="POST" action="<?= TEMPLATE ?>account/passforgot.php">
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

                    </form>
                <?php
                } else {
                ?>
                    <form autocomplete="on" method="POST" action="<?= TEMPLATE ?>account/passforgot.php">
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
                        <input aria-autocomplete="list" autocomplete="new-password" required name="conf" type="text" value="<? echo ($_GET['passforgot']); ?>" style="display: none;">
                        <button type="submit" class="registration__btn">Смена пароля</button>

                    </form>
            <?php
                }
            }
            ?>
        </div>

        <!--! authorization end -->
    </div>
</div>