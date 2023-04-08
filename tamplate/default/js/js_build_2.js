var MainAdress="tamplate/default/";

$("#includedContent2 #back").on("click", function (event) {
    event.preventDefault();
    // $(".Abilities__wrapper-weapon").toggleClass("display-none");
    $(function () {
        $("#includedContent2").load(MainAdress + "Abilities_calc_2.php");

    });
    $('#'+name_file).removeClass("display-none");
});

var point2_sum = 19,
    point2_sum_bild1 = 0,
    point2_sum_bild2 = 0;





var mas2 = [];

var weapon2=name_file;

var SUM_RES = $('#includedContent2 #drop').on("click", function cock(event) {
    event.preventDefault();

    $("#includedContent2").load(MainAdress + "build2/"+name_file+".php");
   
});



var SUM_RES = $('#includedContent2 .Abilities-weapon__skill').on("click", function cock(event) {

    if (this.children.length > 0) {


        // console.log(this.querySelector(".Abilities-weapon__img-wrapper").classList.contains('Abilities-weapon__img-wrapper'))
        for (var mas2_check = 0; mas2_check < 77; mas2_check++) {
            if (mas2[mas2_check] == this.dataset.column && mas2[mas2_check + 1] == this.dataset.build && mas2[mas2_check - 1] == this.dataset.lin) {
                for (var build_num = 1; build_num < 3; build_num++) {
                    for (var i = 1; i < 6; i++) {

                        for (var g = 1; g < 6; g++) {

                            for (var mas2_count = 0; mas2_count < 77; mas2_count++) {
                                if (mas2[mas2_count] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                                    && mas2[mas2_count + 1] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                                    && mas2[mas2_count + 2] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                                ) {
                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").removeClass("active-background");

                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                }

                            }


                        }

                    }
                }

                mas2.splice([mas2_check + 2], 1);
                mas2.splice([mas2_check + 1], 1);
                mas2.splice([mas2_check], 1);
                mas2.splice([mas2_check - 1], 1);
                point2_sum = point2_sum + 1;
                if (this.dataset.build == 1) {
                    point2_sum_bild1--;
                } else {
                    point2_sum_bild2--;
                }
                var count_lin = 0;
                for (var mas2_check = 0; mas2_check < 77; mas2_check++) {
                    if (mas2[mas2_check + 1] == this.dataset.build && mas2[mas2_check - 1] == (this.dataset.lin) && mas2[mas2_check] != "/") {
                        count_lin++;
                    }
                }



                for (var mas_check = 0; mas_check < 77; mas_check++) {

                    if (mas2[mas_check + 1] == this.dataset.build && mas2[mas_check - 1] == (parseInt(this.dataset.lin) + 1) && mas2[mas_check] == (parseInt(this.dataset.column) + 1)) {

                        if ($(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + (parseInt(this.dataset.column) + 1) + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-right') == true) {
                            for (var build_num = 1; build_num < 3; build_num++) {
                                for (var i = 1; i < 6; i++) {

                                    for (var g = 1; g < 6; g++) {

                                        for (var mas_count = 0; mas_count < 77; mas_count++) {
                                            if (mas2[mas_count] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                                                && mas2[mas_count + 1] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                                                && mas2[mas_count + 2] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                                            ) {
                                                $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").removeClass("active-background");

                                                $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                            }

                                        }


                                    }

                                }
                            }







                            delete mas2[mas_check + 2];
                            delete mas2[mas_check + 1];
                            delete mas2[mas_check];
                            delete mas2[mas_check - 1];
                            point2_sum = point2_sum + 1;
                            if (this.dataset.build == 1) {
                                point2_sum_bild1--;
                            } else {
                                point2_sum_bild2--;
                            }

                        }
                    }


                    for (var gg = 1; gg < 6; gg++) {
                        if (mas2[mas_check + 1] == this.dataset.build && mas2[mas_check - 1] == (parseInt(this.dataset.lin) + gg) && mas2[mas_check] == this.dataset.column) {

                            if ($(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0] != undefined) {

                                if ($(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after') != true &
                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after_second') != true) {

                                    break

                                }

                            } else if ($(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0] != undefined) {

                                if (
                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor') != true &
                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor_second') != true) {



                                    break

                                }
                            } else if ($(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0] != undefined & $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0] != undefined) {

                                if ($(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after') != true &
                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after_second') != true &
                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor') != true &
                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor_second') != true) {



                                    break

                                }

                            }


                            if ($(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + gg) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after') == true ^
                                $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + gg) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after_second') == true ^
                                $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + gg) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor') == true ^
                                $(" #includedContent2 .Abilities-weapon__item:nth-child(" + mas2[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + gg) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor_second') == true) {


                                for (var build_num = 1; build_num < 3; build_num++) {
                                    for (var i = 1; i < 6; i++) {

                                        for (var g = 1; g < 6; g++) {

                                            for (var mas_count = 0; mas_count < 77; mas_count++) {
                                                if (mas2[mas_count] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                                                    && mas2[mas_count + 1] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                                                    && mas2[mas_count + 2] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                                                ) {
                                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").removeClass("active-background");

                                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                                }

                                            }


                                        }

                                    }
                                }



                                delete mas2[mas_check + 2];
                                delete mas2[mas_check + 1];
                                delete mas2[mas_check];
                                delete mas2[mas_check - 1];
                                point2_sum = point2_sum + 1;
                                if (this.dataset.build == 1) {
                                    point2_sum_bild1--;
                                } else {
                                    point2_sum_bild2--;
                                }


                                for (var mas_check_main = 0; mas_check_main < 77; mas_check_main++) {

                                    if (mas2[mas_check_main] == this.dataset.build && mas2[mas_check_main - 1] == "main") {

                                        if ($(" #includedContent2 .Abilities-weapon__item:nth-child(" + this.dataset.build + ") .Abilities-weapon__main .Abilities-weapon__img-wrapper")[0].classList.contains('stick-main') == true) {

                                            // console.log("cock")
                                            for (var build_num = 1; build_num < 3; build_num++) {
                                                for (var mas_count = 0; mas_count < 80; mas_count++) {
                                                    if (mas2[mas_count] == build_num && mas2[mas_count - 1] == "main") {
                                                        $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                                    }

                                                }
                                            }


                                            delete mas2[mas_check_main + 1];
                                            delete mas2[mas_check_main];
                                            delete mas2[mas_check_main - 1];
                                            point2_sum = point2_sum + 1;
                                            if (this.dataset.build == 1) {
                                                point2_sum_bild1--;
                                            } else {
                                                point2_sum_bild2--;
                                            }
                                            break;
                                        }
                                    }

                                }






                            }
                        } else if (mas2[mas_check + 1] == this.dataset.build && (parseInt(this.dataset.lin) + gg) == 6 && mas2[mas_check] == this.dataset.column) {
                            for (var mas_check_main = 0; mas_check_main < 77; mas_check_main++) {

                                if (mas2[mas_check_main] == this.dataset.build && mas2[mas_check_main - 1] == "main") {

                                    if ($(" #includedContent2 .Abilities-weapon__item:nth-child(" + this.dataset.build + ") .Abilities-weapon__main .Abilities-weapon__img-wrapper")[0].classList.contains('stick-main') == true) {

                                        // console.log("cock")
                                        for (var build_num = 1; build_num < 3; build_num++) {
                                            for (var mas_count = 0; mas_count < 80; mas_count++) {
                                                if (mas2[mas_count] == build_num && mas2[mas_count - 1] == "main") {
                                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                                }

                                            }
                                        }


                                        delete mas2[mas_check_main + 1];
                                        delete mas2[mas_check_main];
                                        delete mas2[mas_check_main - 1];
                                        point2_sum = point2_sum + 1;
                                        if (this.dataset.build == 1) {
                                            point2_sum_bild1--;
                                        } else {
                                            point2_sum_bild2--;
                                        }
                                        break;
                                    }
                                }

                            }
                        }
                    }


                }
                mas2 = mas2.filter(n => n != '')



                if (count_lin == 0) {
                    for (var mas2_check = 0; mas2_check < 77; mas2_check++) {
                        if (mas2[mas2_check] == this.dataset.build && mas2[mas2_check - 1] == "main" && mas2[mas2_check + 1] == "/") {
                            for (var build_num = 1; build_num < 3; build_num++) {
                                for (var mas2_count = 0; mas2_count < 80; mas2_count++) {
                                    if (mas2[mas2_count] == build_num && mas[mas2_count - 1] == "main") {
                                        $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                    }

                                }
                            }


                            mas2.splice([mas2_check + 1], 1);
                            mas2.splice([mas2_check], 1);
                            mas2.splice([mas2_check - 1], 1);
                            point2_sum = point2_sum + 1;
                            if (this.dataset.build == 1) {
                                point2_sum_bild1--;
                            } else {
                                point2_sum_bild2--;
                            }
                        }
                        for (var count_rows1 = 1; count_rows1 < 6; count_rows1++) {

                            if (mas2[mas2_check + 1] == this.dataset.build && mas2[mas2_check - 1] == (parseInt(this.dataset.lin) + count_rows1) && mas2[mas2_check] != "/") {


                                for (var build_num = 1; build_num < 3; build_num++) {
                                    for (var i = 1; i < 6; i++) {

                                        for (var g = 1; g < 6; g++) {

                                            for (var mas2_count = 0; mas2_count < 77; mas2_count++) {
                                                if (mas2[mas2_count] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                                                    && mas2[mas2_count + 1] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                                                    && mas2[mas2_count + 2] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                                                ) {
                                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").removeClass("active-background");

                                                    $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                                }

                                            }


                                        }

                                    }
                                }



                                delete mas2[mas2_check + 2];
                                delete mas2[mas2_check + 1];
                                delete mas2[mas2_check];
                                delete mas2[mas2_check - 1];
                                point2_sum = point2_sum + 1;
                                if (this.dataset.build == 1) {
                                    point2_sum_bild1--;
                                } else {
                                    point2_sum_bild2--;
                                }
                            }
                        }

                    }

                } else {
                    if (this.dataset.build == 1 && point2_sum_bild1 < 11) {
                        for (var mas2_check = 0; mas2_check < 77; mas2_check++) {
                            if (mas2[mas2_check] == this.dataset.build && mas2[mas2_check - 1] == "main" && mas2[mas2_check + 1] == "/") {
                                for (var build_num = 1; build_num < 3; build_num++) {
                                    for (var mas2_count = 0; mas2_count < 80; mas2_count++) {
                                        if (mas2[mas2_count] == build_num && mas2[mas2_count - 1] == "main") {
                                            $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                        }

                                    }
                                }


                                delete mas2[mas2_check + 1];
                                delete mas2[mas2_check];
                                delete mas2[mas2_check - 1];
                                point2_sum = point2_sum + 1;
                                if (this.dataset.build == 1) {
                                    point2_sum_bild1--;
                                } else {
                                    point2_sum_bild2--;
                                }

                            }

                        }
                    } else if (this.dataset.build == 2 && point2_sum_bild2 < 11) {
                        for (var mas2_check = 0; mas2_check < 77; mas2_check++) {
                            if (mas2[mas2_check] == this.dataset.build && mas2[mas2_check - 1] == "main" && mas2[mas2_check + 1] == "/") {
                                for (var build_num = 1; build_num < 3; build_num++) {
                                    for (var mas2_count = 0; mas2_count < 80; mas2_count++) {
                                        if (mas2[mas2_count] == build_num && mas2[mas2_count - 1] == "main") {
                                            $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                        }

                                    }
                                }


                                delete mas2[mas2_check + 1];
                                delete mas2[mas2_check];
                                delete mas2[mas2_check - 1];
                                point2_sum = point2_sum + 1;
                                if (this.dataset.build == 1) {
                                    point2_sum_bild1--;
                                } else {
                                    point2_sum_bild2--;
                                }

                            }

                        }
                    }



                }

                mas2 = mas2.filter(n => n != '')
                break;

            } else if (mas2_check == 76 && point2_sum > 0) {
                for (var mas2_check = 0; mas2_check < 77; mas2_check++) {
                    if (mas2[mas2_check + 1] == this.dataset.build && mas2[mas2_check - 1] == (this.dataset.lin - 1) && this.dataset.lin != 1 && mas2[mas2_check] != "/") {
                        if (this.querySelector(" #includedContent2 .Abilities-weapon__img-wrapper").classList.contains('stick-right') != true & this.querySelector(" #includedContent2 .Abilities-weapon__img-wrapper").classList.contains('stick-after') == true ^ this.querySelector(" #includedContent2 .Abilities-weapon__img-wrapper").classList.contains('stick-after_second') == true) {
                            for (var mas2_check = 0; mas2_check < 77; mas2_check++) {
                                if (mas2[mas2_check - 1] == (this.dataset.lin - 1)) {
                                    if (mas2[mas2_check] == this.dataset.column && mas2[mas2_check + 1] == this.dataset.build && this.dataset.lin != 1 && mas2[mas2_check] != "/") {
                                        mas2.push(this.dataset.lin);
                                        mas2.push(this.dataset.column);
                                        mas2.push(this.dataset.build);
                                        mas2.push("/");
                                        point2_sum = point2_sum - 1;
                                        if (this.dataset.build == 1) {
                                            point2_sum_bild1++;
                                        } else {
                                            point2_sum_bild2++;
                                        }


                                    }
                                }
                            }

                        } else if (this.querySelector(" #includedContent2 .Abilities-weapon__img-wrapper").classList.contains('stick-right') != true & this.querySelector(" #includedContent2 .Abilities-weapon__img-wrapper").classList.contains('stick-befor') == true ^ this.querySelector(" #includedContent2 .Abilities-weapon__img-wrapper").classList.contains('stick-befor_second') == true) {
                            for (var mas2_check = 0; mas2_check < 77; mas2_check++) {
                                if (mas2[mas2_check - 1] == (this.dataset.lin - 2)) {
                                    if (mas2[mas2_check] == this.dataset.column && mas2[mas2_check + 1] == this.dataset.build && this.dataset.lin != 1 && mas2[mas2_check] != "/") {
                                        mas2.push(this.dataset.lin);
                                        mas2.push(this.dataset.column);
                                        mas2.push(this.dataset.build);
                                        mas2.push("/");
                                        point2_sum = point2_sum - 1;
                                        if (this.dataset.build == 1) {
                                            point2_sum_bild1++;
                                        } else {
                                            point2_sum_bild2++;
                                        }


                                    }
                                }
                            }
                        } else if (this.querySelector(" #includedContent2 .Abilities-weapon__img-wrapper").classList.contains('stick-right') == true) {
                            for (var mas2_check = 0; mas2_check < 77; mas2_check++) {
                                if (mas2[mas2_check - 1] == (this.dataset.lin - 1)) {
                                    if (mas2[mas2_check] == (this.dataset.column - 1) && mas2[mas2_check + 1] == this.dataset.build && this.dataset.lin != 1 && mas2[mas2_check] != "/") {
                                        mas2.push(this.dataset.lin);
                                        mas2.push(this.dataset.column);
                                        mas2.push(this.dataset.build);
                                        mas2.push("/");
                                        point2_sum = point2_sum - 1;
                                        if (this.dataset.build == 1) {
                                            point2_sum_bild1++;
                                        } else {
                                            point2_sum_bild2++;
                                        }


                                    }
                                }
                            }

                        } else {
                            mas2.push(this.dataset.lin);
                            mas2.push(this.dataset.column);
                            mas2.push(this.dataset.build);
                            mas2.push("/");
                            point2_sum = point2_sum - 1;
                            if (this.dataset.build == 1) {
                                point2_sum_bild1++;
                            } else {
                                point2_sum_bild2++;
                            }
                            break;
                        }

                    }
                }

                if (this.dataset.lin == 1) {
                    mas2.push(this.dataset.lin);
                    mas2.push(this.dataset.column);
                    mas2.push(this.dataset.build);
                    mas2.push("/");
                    point2_sum = point2_sum - 1;
                    if (this.dataset.build == 1) {
                        point2_sum_bild1++;
                    } else {
                        point2_sum_bild2++;
                    }


                }


                break;
            }
        }



    }

    if (mas2.length > 0) {
        for (var build_num = 1; build_num < 3; build_num++) {
            for (var i = 1; i < 6; i++) {

                for (var g = 1; g < 6; g++) {

                    for (var mas2_count = 0; mas2_count < 77; mas2_count++) {
                        if (mas2[mas2_count] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                            && mas2[mas2_count + 1] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                            && mas2[mas2_count + 2] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                        ) {

                            $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").addClass("active-background");

                            $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").addClass("skill-used");
                        }

                    }


                }

            }
        }
    }

    for (var mas2_check = 0; mas2_check < 77; mas2_check++) {

        if (mas2[mas2_check + 1] == this.dataset.build && mas2[mas2_check] != "/" & mas2[mas2_check - 1] == 5) {
            if (this.dataset.build == 1 & point2_sum_bild1 > 9) {
                $(" #includedContent2 .Abilities-weapon__item:nth-child(1)  .Abilities-weapon__main ").addClass("active-background");
            } else if (this.dataset.build == 2 & point2_sum_bild2 > 9) {
                $(" #includedContent2 .Abilities-weapon__item:nth-child(2)  .Abilities-weapon__main ").addClass("active-background");
            }
            break;
        } else if (mas2_check == 76) {
            if (this.dataset.build == 1) {
                $(" #includedContent2 .Abilities-weapon__item:nth-child(1)  .Abilities-weapon__main ").removeClass("active-background");
            } else if (this.dataset.build == 2) {
                $(" #includedContent2 .Abilities-weapon__item:nth-child(2)  .Abilities-weapon__main ").removeClass("active-background");
            }
        }
    }



    for (var build_num = 1; build_num < 3; build_num++) {
        for (var i = 1; i < 6; i++) {

            for (var g = 1; g < 6; g++) {

                for (var mas2_count = 0; mas2_count < 77; mas2_count++) {
                    if (mas2[mas2_count] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                        && mas2[mas2_count + 1] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                        && mas2[mas2_count + 2] == $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                    ) {

                        $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").addClass("active-background");

                        $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").addClass("skill-used");
                    }

                }


            }

        }
    }
    if (mas2.length > 0) {

        if (point2_sum == 0) {
            $(" #includedContent2 .Abilities-weapon__item .Abilities-weapon__row .Abilities-weapon__skill .Abilities-weapon__img-wrapper").addClass("skill-notused");

            $(" #includedContent2 .Abilities-weapon__item  .Abilities-weapon__main .Abilities-weapon__img-wrapper").addClass("skill-notused");

        } else {
            $(" #includedContent2 .Abilities-weapon__item .Abilities-weapon__row .Abilities-weapon__skill .Abilities-weapon__img-wrapper").removeClass("skill-notused");

            $(" #includedContent2 .Abilities-weapon__item  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-notused");
        }

    }
    $(" #includedContent2 .Abilities-weapon__points").text("Вложено очков : " + (19 - point2_sum) + " (Доступно " + point2_sum + ")");
    // console.log(mas2)

});




$(' #includedContent2 .Abilities-weapon__main').on("click", function (event) {
    // mass.push(this.dataset.build);

    for (var mas2_check = 0; mas2_check < 80; mas2_check++) {
        if (mas2[mas2_check] == this.dataset.build && mas2[mas2_check - 1] == "main") {


            for (var build_num = 1; build_num < 3; build_num++) {
                for (var mas2_count = 0; mas2_count < 80; mas2_count++) {
                    if (mas2[mas2_count] == build_num && mas2[mas2_count - 1] == "main") {
                        $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                    }

                }
            }


            mas2.splice([mas2_check + 1], 1);
            mas2.splice([mas2_check], 1);
            mas2.splice([mas2_check - 1], 1);
            point2_sum = point2_sum + 1;
            if (this.dataset.build == 1) {
                point2_sum_bild1--;
            } else {
                point2_sum_bild2--;
            }
            break;
        } else if (mas2_check == 79 && point2_sum > 0) {
            if (this.dataset.build == 1 & point2_sum_bild1 > 9) {
                for (var mas2_check1 = 0; mas2_check1 < 77; mas2_check1++) {
                    if (mas2[mas2_check1 + 1] == this.dataset.build && mas2[mas2_check1 - 1] == 5 && mas2[mas2_check1] != "/") {
                        mas2.push(this.dataset.main);
                        mas2.push(this.dataset.build);
                        mas2.push("/");
                        point2_sum = point2_sum - 1;
                        if (this.dataset.build == 1) {
                            point2_sum_bild1++;
                        } else {
                            point2_sum_bild2++;
                        }
                        break;
                    }
                }
            } else if (this.dataset.build == 2 & point2_sum_bild2 > 9) {
                for (var mas2_check1 = 0; mas2_check1 < 77; mas2_check1++) {
                    if (mas2[mas2_check1 + 1] == this.dataset.build && mas2[mas2_check1 - 1] == 5 && mas2[mas2_check1] != "/") {
                        if (this.querySelector(" #includedContent2 .Abilities-weapon__img-wrapper").classList.contains('stick-main') == true) {

                            if (mas2[mas2_check1 + 1] == this.dataset.build && mas2[mas2_check1 - 1] == 5 && mas2[mas2_check1] == 3) {

                                mas2.push(this.dataset.main);
                                mas2.push(this.dataset.build);
                                mas2.push("/");
                                point2_sum = point2_sum - 1;
                                if (this.dataset.build == 1) {
                                    point2_sum_bild1++;
                                } else {
                                    point2_sum_bild2++;
                                }
                                break;

                            }
                        } else {
                            mas2.push(this.dataset.main);
                            mas2.push(this.dataset.build);
                            mas2.push("/");
                            point2_sum = point2_sum - 1;
                            if (this.dataset.build == 1) {
                                point2_sum_bild1++;
                            } else {
                                point2_sum_bild2++;
                            }
                            break;
                        }

                    }
                }
            }

        }
    }



    for (var build_num = 1; build_num < 3; build_num++) {
        for (var mas2_count = 0; mas2_count < 80; mas2_count++) {
            if (mas2[mas2_count] == build_num && mas2[mas2_count - 1] == "main") {
                $(" #includedContent2 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").addClass("skill-used");
            }

        }
    }
    $(" #includedContent2 .Abilities-weapon__points").text("Вложено очков : " + (19 - point2_sum) + " (Доступно " + point2_sum + ")");
    // console.log(mas)

    if (mas2.length > 0) {

        if (point2_sum == 0) {
            $(" #includedContent2 .Abilities-weapon__item .Abilities-weapon__row .Abilities-weapon__skill .Abilities-weapon__img-wrapper").addClass("skill-notused");

            $(" #includedContent2 .Abilities-weapon__item  .Abilities-weapon__main .Abilities-weapon__img-wrapper").addClass("skill-notused");

        } else {
            $(" #includedContent2 .Abilities-weapon__item .Abilities-weapon__row .Abilities-weapon__skill .Abilities-weapon__img-wrapper").removeClass("skill-notused");

            $(" #includedContent2 .Abilities-weapon__item  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-notused");
        }

    }

});
