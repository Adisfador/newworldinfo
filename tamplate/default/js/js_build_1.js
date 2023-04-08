var MainAdress="tamplate/default/";

$("#includedContent #back").on("click", function (event) {
    event.preventDefault();
    // $(".Abilities__wrapper-weapon").toggleClass("display-none");
    $(function () {
        $("#includedContent").load(MainAdress + "Abilities_calc.php");
    });

    $('#'+name_file+'2').removeClass("display-none");

});

var point_sum = 19,
    point_sum_bild1 = 0,
    point_sum_bild2 = 0;





var mas = [];

var weapon1=name_file;

var SUM_RES = $('#includedContent #drop').on("click", function cock(event) {
    event.preventDefault();

    $("#includedContent").load(MainAdress + "build1/"+name_file+".php");
    // $("#js").load("js_html.html");
});



var SUM_RES = $('#includedContent .Abilities-weapon__skill').on("click", function cock(event) {

    if (this.children.length > 0) {

        // console.log(this.querySelector(".Abilities-weapon__img-wrapper").classList.contains('Abilities-weapon__img-wrapper'))
        for (var mas_check = 0; mas_check < 77; mas_check++) {
            if (mas[mas_check] == this.dataset.column && mas[mas_check + 1] == this.dataset.build && mas[mas_check - 1] == this.dataset.lin) {
                for (var build_num = 1; build_num < 3; build_num++) {
                    for (var i = 1; i < 6; i++) {

                        for (var g = 1; g < 6; g++) {

                            for (var mas_count = 0; mas_count < 77; mas_count++) {
                                if (mas[mas_count] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                                    && mas[mas_count + 1] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                                    && mas[mas_count + 2] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                                ) {
                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").removeClass("active-background");

                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                }

                            }


                        }

                    }
                }

                mas.splice([mas_check + 2], 1);
                mas.splice([mas_check + 1], 1);
                mas.splice([mas_check], 1);
                mas.splice([mas_check - 1], 1);
                point_sum = point_sum + 1;
                if (this.dataset.build == 1) {
                    point_sum_bild1--;
                } else {
                    point_sum_bild2--;
                }
                var count_lin = 0;
                for (var mas_check = 0; mas_check < 77; mas_check++) {
                    if (mas[mas_check + 1] == this.dataset.build && mas[mas_check - 1] == (this.dataset.lin) && mas[mas_check] != "/") {
                        count_lin++;
                    }
                }

                for (var mas_check = 0; mas_check < 77; mas_check++) {


                    if (mas[mas_check + 1] == this.dataset.build && mas[mas_check - 1] == (parseInt(this.dataset.lin) + 1) && mas[mas_check] == (parseInt(this.dataset.column) + 1)) {
                        
                        if ($(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + (parseInt(this.dataset.column) + 1) + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-right') == true) {
                            for (var build_num = 1; build_num < 3; build_num++) {
                                    for (var i = 1; i < 6; i++) {

                                        for (var g = 1; g < 6; g++) {

                                            for (var mas_count = 0; mas_count < 77; mas_count++) {
                                                if (mas[mas_count] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                                                    && mas[mas_count + 1] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                                                    && mas[mas_count + 2] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                                                ) {
                                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").removeClass("active-background");

                                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                                }

                                            }


                                        }

                                    }
                                }







                                delete mas[mas_check + 2];
                                delete mas[mas_check + 1];
                                delete mas[mas_check];
                                delete mas[mas_check - 1];
                                point_sum = point_sum + 1;
                                if (this.dataset.build == 1) {
                                    point_sum_bild1--;
                                } else {
                                    point_sum_bild2--;
                                }

                        }
                    }
                    for (var gg = 0; gg < 6; gg++) {



                        if (mas[mas_check + 1] == this.dataset.build && mas[mas_check - 1] == (parseInt(this.dataset.lin) + gg) && mas[mas_check] == this.dataset.column) {


                            if ($(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0] != undefined) {

                                if ($(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after') != true &
                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after_second') != true) {



                                    break

                                }

                            } else if ($(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0] != undefined) {

                                if (
                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor') != true &
                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor_second') != true) {



                                    break

                                }
                            } else if ($(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0] != undefined & $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0] != undefined) {

                                if ($(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after') != true &
                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 1) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after_second') != true &
                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor') != true &
                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + 2) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor_second') != true) {



                                    break

                                }

                            }


                            if ($(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + gg) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after') == true ^
                                $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + gg) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-after_second') == true ^
                                $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + gg) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor') == true ^
                                $(" #includedContent .Abilities-weapon__item:nth-child(" + mas[mas_check + 1] + ") .Abilities-weapon__row:nth-child(" + this.dataset.column + ") .Abilities-weapon__skill:nth-child(" + (parseInt(this.dataset.lin) + gg) + ") .Abilities-weapon__img-wrapper")[0].classList.contains('stick-befor_second') == true) {


                                for (var build_num = 1; build_num < 3; build_num++) {
                                    for (var i = 1; i < 6; i++) {

                                        for (var g = 1; g < 6; g++) {

                                            for (var mas_count = 0; mas_count < 77; mas_count++) {
                                                if (mas[mas_count] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                                                    && mas[mas_count + 1] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                                                    && mas[mas_count + 2] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                                                ) {
                                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").removeClass("active-background");

                                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                                }

                                            }


                                        }

                                    }
                                }







                                delete mas[mas_check + 2];
                                delete mas[mas_check + 1];
                                delete mas[mas_check];
                                delete mas[mas_check - 1];
                                point_sum = point_sum + 1;
                                if (this.dataset.build == 1) {
                                    point_sum_bild1--;
                                } else {
                                    point_sum_bild2--;
                                }



                                for (var mas_check_main = 0; mas_check_main < 77; mas_check_main++) {

                                    if (mas[mas_check_main] == this.dataset.build && mas[mas_check_main - 1] == "main") {

                                        if ($(" #includedContent .Abilities-weapon__item:nth-child(" + this.dataset.build + ") .Abilities-weapon__main .Abilities-weapon__img-wrapper")[0].classList.contains('stick-main') == true) {

                                            // console.log("cock")
                                            for (var build_num = 1; build_num < 3; build_num++) {
                                                for (var mas_count = 0; mas_count < 80; mas_count++) {
                                                    if (mas[mas_count] == build_num && mas[mas_count - 1] == "main") {
                                                        $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                                    }

                                                }
                                            }


                                            delete mas[mas_check_main + 1];
                                            delete mas[mas_check_main];
                                            delete mas[mas_check_main - 1];
                                            point_sum = point_sum + 1;
                                            if (this.dataset.build == 1) {
                                                point_sum_bild1--;
                                            } else {
                                                point_sum_bild2--;
                                            }
                                            break;
                                        }
                                    }

                                }






                            }
                        }

                        else if (mas[mas_check + 1] == this.dataset.build && (parseInt(this.dataset.lin) + gg) == 6 && mas[mas_check] == this.dataset.column) {
                            for (var mas_check_main = 0; mas_check_main < 77; mas_check_main++) {

                                if (mas[mas_check_main] == this.dataset.build && mas[mas_check_main - 1] == "main") {

                                    if ($(" #includedContent .Abilities-weapon__item:nth-child(" + this.dataset.build + ") .Abilities-weapon__main .Abilities-weapon__img-wrapper")[0].classList.contains('stick-main') == true) {

                                        // console.log("cock")
                                        for (var build_num = 1; build_num < 3; build_num++) {
                                            for (var mas_count = 0; mas_count < 80; mas_count++) {
                                                if (mas[mas_count] == build_num && mas[mas_count - 1] == "main") {
                                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                                }

                                            }
                                        }


                                        delete mas[mas_check_main + 1];
                                        delete mas[mas_check_main];
                                        delete mas[mas_check_main - 1];
                                        point_sum = point_sum + 1;
                                        if (this.dataset.build == 1) {
                                            point_sum_bild1--;
                                        } else {
                                            point_sum_bild2--;
                                        }
                                        break;
                                    }
                                }

                            }

                        }
                    }


                }
                mas = mas.filter(n => n != '')



                if (count_lin == 0) {
                    for (var mas_check = 0; mas_check < 77; mas_check++) {
                        if (mas[mas_check] == this.dataset.build && mas[mas_check - 1] == "main" && mas[mas_check + 1] == "/") {
                            for (var build_num = 1; build_num < 3; build_num++) {
                                for (var mas_count = 0; mas_count < 80; mas_count++) {
                                    if (mas[mas_count] == build_num && mas[mas_count - 1] == "main") {
                                        $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                    }

                                }
                            }


                            mas.splice([mas_check + 1], 1);
                            mas.splice([mas_check], 1);
                            mas.splice([mas_check - 1], 1);
                            point_sum = point_sum + 1;
                            if (this.dataset.build == 1) {
                                point_sum_bild1--;
                            } else {
                                point_sum_bild2--;
                            }
                        }
                        for (var count_rows1 = 1; count_rows1 < 6; count_rows1++) {

                            if (mas[mas_check + 1] == this.dataset.build && mas[mas_check - 1] == (parseInt(this.dataset.lin) + count_rows1) && mas[mas_check] != "/") {


                                for (var build_num = 1; build_num < 3; build_num++) {
                                    for (var i = 1; i < 6; i++) {

                                        for (var g = 1; g < 6; g++) {

                                            for (var mas_count = 0; mas_count < 77; mas_count++) {
                                                if (mas[mas_count] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                                                    && mas[mas_count + 1] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                                                    && mas[mas_count + 2] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                                                ) {
                                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").removeClass("active-background");

                                                    $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                                }

                                            }


                                        }

                                    }
                                }



                                delete mas[mas_check + 2];
                                delete mas[mas_check + 1];
                                delete mas[mas_check];
                                delete mas[mas_check - 1];
                                point_sum = point_sum + 1;
                                if (this.dataset.build == 1) {
                                    point_sum_bild1--;
                                } else {
                                    point_sum_bild2--;
                                }
                            }
                        }

                    }

                } else {
                    if (this.dataset.build == 1 && point_sum_bild1 < 11) {
                        for (var mas_check = 0; mas_check < 77; mas_check++) {
                            if (mas[mas_check] == this.dataset.build && mas[mas_check - 1] == "main" && mas[mas_check + 1] == "/") {
                                for (var build_num = 1; build_num < 3; build_num++) {
                                    for (var mas_count = 0; mas_count < 80; mas_count++) {
                                        if (mas[mas_count] == build_num && mas[mas_count - 1] == "main") {
                                            $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                        }

                                    }
                                }


                                delete mas[mas_check + 1];
                                delete mas[mas_check];
                                delete mas[mas_check - 1];
                                point_sum = point_sum + 1;
                                if (this.dataset.build == 1) {
                                    point_sum_bild1--;
                                } else {
                                    point_sum_bild2--;
                                }

                            }

                        }
                    } else if (this.dataset.build == 2 && point_sum_bild2 < 11) {
                        for (var mas_check = 0; mas_check < 77; mas_check++) {
                            if (mas[mas_check] == this.dataset.build && mas[mas_check - 1] == "main" && mas[mas_check + 1] == "/") {
                                for (var build_num = 1; build_num < 3; build_num++) {
                                    for (var mas_count = 0; mas_count < 80; mas_count++) {
                                        if (mas[mas_count] == build_num && mas[mas_count - 1] == "main") {
                                            $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                                        }

                                    }
                                }


                                delete mas[mas_check + 1];
                                delete mas[mas_check];
                                delete mas[mas_check - 1];
                                point_sum = point_sum + 1;
                                if (this.dataset.build == 1) {
                                    point_sum_bild1--;
                                } else {
                                    point_sum_bild2--;
                                }

                            }

                        }
                    }



                }

                mas = mas.filter(n => n != '')
                break;

            } else if (mas_check == 76 && point_sum > 0) {
                for (var mas_check = 0; mas_check < 77; mas_check++) {
                    if (mas[mas_check + 1] == this.dataset.build && mas[mas_check - 1] == (this.dataset.lin - 1) && this.dataset.lin != 1 && mas[mas_check] != "/") {
                        if (this.querySelector(" #includedContent .Abilities-weapon__img-wrapper").classList.contains('stick-right') != true & this.querySelector(" #includedContent .Abilities-weapon__img-wrapper").classList.contains('stick-after') == true ^ this.querySelector(" #includedContent .Abilities-weapon__img-wrapper").classList.contains('stick-after_second') == true) {

                            for (var mas_check = 0; mas_check < 77; mas_check++) {
                                if (mas[mas_check - 1] == (this.dataset.lin - 1)) {
                                    if (mas[mas_check] == this.dataset.column && mas[mas_check + 1] == this.dataset.build && this.dataset.lin != 1 && mas[mas_check] != "/") {

                                        mas.push(this.dataset.lin);
                                        mas.push(this.dataset.column);
                                        mas.push(this.dataset.build);
                                        mas.push("/");
                                        point_sum = point_sum - 1;
                                        if (this.dataset.build == 1) {
                                            point_sum_bild1++;
                                        } else {
                                            point_sum_bild2++;
                                        }


                                    }
                                }
                            }

                        } else if (this.querySelector(" #includedContent .Abilities-weapon__img-wrapper").classList.contains('stick-right') != true & this.querySelector(" #includedContent .Abilities-weapon__img-wrapper").classList.contains('stick-befor') == true ^ this.querySelector(" #includedContent .Abilities-weapon__img-wrapper").classList.contains('stick-befor_second') == true) {
                            for (var mas_check = 0; mas_check < 77; mas_check++) {
                                if (mas[mas_check - 1] == (this.dataset.lin - 2)) {
                                    if (mas[mas_check] == this.dataset.column && mas[mas_check + 1] == this.dataset.build && this.dataset.lin != 1 && mas[mas_check] != "/") {

                                        mas.push(this.dataset.lin);
                                        mas.push(this.dataset.column);
                                        mas.push(this.dataset.build);
                                        mas.push("/");
                                        point_sum = point_sum - 1;
                                        if (this.dataset.build == 1) {
                                            point_sum_bild1++;
                                        } else {
                                            point_sum_bild2++;
                                        }


                                    }
                                }
                            }
                        } else if (this.querySelector(" #includedContent .Abilities-weapon__img-wrapper").classList.contains('stick-right') == true) {
                            for (var mas_check = 0; mas_check < 77; mas_check++) {
                                if (mas[mas_check - 1] == (this.dataset.lin - 1)) {
                                    if (mas[mas_check] == (this.dataset.column - 1) && mas[mas_check + 1] == this.dataset.build && this.dataset.lin != 1 && mas[mas_check] != "/") {

                                        mas.push(this.dataset.lin);
                                        mas.push(this.dataset.column);
                                        mas.push(this.dataset.build);
                                        mas.push("/");
                                        point_sum = point_sum - 1;
                                        if (this.dataset.build == 1) {
                                            point_sum_bild1++;
                                        } else {
                                            point_sum_bild2++;
                                        }


                                    }
                                }
                            }
                        } else {

                            mas.push(this.dataset.lin);
                            mas.push(this.dataset.column);
                            mas.push(this.dataset.build);
                            mas.push("/");
                            point_sum = point_sum - 1;
                            if (this.dataset.build == 1) {
                                point_sum_bild1++;
                            } else {
                                point_sum_bild2++;
                            }
                            break;
                        }

                    }
                }

                if (this.dataset.lin == 1) {
                    mas.push(this.dataset.lin);
                    mas.push(this.dataset.column);
                    mas.push(this.dataset.build);
                    mas.push("/");
                    point_sum = point_sum - 1;
                    if (this.dataset.build == 1) {
                        point_sum_bild1++;
                    } else {
                        point_sum_bild2++;
                    }


                }


                break;
            }
        }



    }

    if (mas.length > 0) {
        for (var build_num = 1; build_num < 3; build_num++) {
            for (var i = 1; i < 6; i++) {

                for (var g = 1; g < 6; g++) {

                    for (var mas_count = 0; mas_count < 77; mas_count++) {
                        if (mas[mas_count] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                            && mas[mas_count + 1] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                            && mas[mas_count + 2] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                        ) {

                            $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").addClass("active-background");

                            $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").addClass("skill-used");
                        }

                    }


                }

            }
        }
    }

    for (var mas_check = 0; mas_check < 77; mas_check++) {

        if (mas[mas_check + 1] == this.dataset.build && mas[mas_check] != "/" & mas[mas_check - 1] == 5) {
            if (this.dataset.build == 1 & point_sum_bild1 > 9) {
                $(" #includedContent .Abilities-weapon__item:nth-child(1)  .Abilities-weapon__main ").addClass("active-background");
            } else if (this.dataset.build == 2 & point_sum_bild2 > 9) {
                $(" #includedContent .Abilities-weapon__item:nth-child(2)  .Abilities-weapon__main ").addClass("active-background");
            }
            break;
        } else if (mas_check == 76) {
            if (this.dataset.build == 1) {
                $(" #includedContent .Abilities-weapon__item:nth-child(1)  .Abilities-weapon__main ").removeClass("active-background");
            } else if (this.dataset.build == 2) {
                $(" #includedContent .Abilities-weapon__item:nth-child(2)  .Abilities-weapon__main ").removeClass("active-background");
            }
        }
    }



    for (var build_num = 1; build_num < 3; build_num++) {
        for (var i = 1; i < 6; i++) {

            for (var g = 1; g < 6; g++) {

                for (var mas_count = 0; mas_count < 77; mas_count++) {
                    if (mas[mas_count] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                        && mas[mas_count + 1] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                        && mas[mas_count + 2] == $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                    ) {

                        $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").addClass("active-background");

                        $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").addClass("skill-used");
                    }

                }


            }

        }
    }
    if (mas.length > 0) {

        if (point_sum == 0) {
            $(" #includedContent .Abilities-weapon__item .Abilities-weapon__row .Abilities-weapon__skill .Abilities-weapon__img-wrapper").addClass("skill-notused");

            $(" #includedContent .Abilities-weapon__item  .Abilities-weapon__main .Abilities-weapon__img-wrapper").addClass("skill-notused");

        } else {
            $(" #includedContent .Abilities-weapon__item .Abilities-weapon__row .Abilities-weapon__skill .Abilities-weapon__img-wrapper").removeClass("skill-notused");

            $(" #includedContent .Abilities-weapon__item  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-notused");
        }

    }
    $(" #includedContent .Abilities-weapon__points").text("Вложено очков : " + (19 - point_sum) + " (Доступно " + point_sum + ")");
    // console.log(mas)

});




$(' #includedContent .Abilities-weapon__main').on("click", function (event) {
    // mass.push(this.dataset.build);

    for (var mas_check = 0; mas_check < 80; mas_check++) {
        if (mas[mas_check] == this.dataset.build && mas[mas_check - 1] == "main") {



            for (var build_num = 1; build_num < 3; build_num++) {
                for (var mas_count = 0; mas_count < 80; mas_count++) {
                    if (mas[mas_count] == build_num && mas[mas_count - 1] == "main") {
                        $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-used");
                    }

                }
            }


            mas.splice([mas_check + 1], 1);
            mas.splice([mas_check], 1);
            mas.splice([mas_check - 1], 1);
            point_sum = point_sum + 1;
            if (this.dataset.build == 1) {
                point_sum_bild1--;
            } else {
                point_sum_bild2--;
            }
            break;
        } else if (mas_check == 79 && point_sum > 0) {
            if (this.dataset.build == 1 & point_sum_bild1 > 9) {
                for (var mas_check1 = 0; mas_check1 < 77; mas_check1++) {
                    if (mas[mas_check1 + 1] == this.dataset.build && mas[mas_check1 - 1] == 5 && mas[mas_check1] != "/") {

                        if (this.querySelector(" #includedContent .Abilities-weapon__img-wrapper").classList.contains('stick-main') == true) {

                            if (mas[mas_check1 + 1] == this.dataset.build && mas[mas_check1 - 1] == 5 && mas[mas_check1] == 3) {
                                mas.push(this.dataset.main);
                                mas.push(this.dataset.build);
                                mas.push("/");
                                point_sum = point_sum - 1;
                                if (this.dataset.build == 1) {
                                    point_sum_bild1++;
                                } else {
                                    point_sum_bild2++;
                                }
                                break;
                            }



                        } else {
                            mas.push(this.dataset.main);
                            mas.push(this.dataset.build);
                            mas.push("/");
                            point_sum = point_sum - 1;
                            if (this.dataset.build == 1) {
                                point_sum_bild1++;
                            } else {
                                point_sum_bild2++;
                            }
                            break;
                        }
                    }
                }
            } else if (this.dataset.build == 2 & point_sum_bild2 > 9) {
                for (var mas_check1 = 0; mas_check1 < 77; mas_check1++) {
                    if (mas[mas_check1 + 1] == this.dataset.build && mas[mas_check1 - 1] == 5 && mas[mas_check1] != "/") {

                        if (this.querySelector(" #includedContent .Abilities-weapon__img-wrapper").classList.contains('stick-main') == true) {

                            if (mas[mas_check1 + 1] == this.dataset.build && mas[mas_check1 - 1] == 5 && mas[mas_check1] == 3) {
                                mas.push(this.dataset.main);
                                mas.push(this.dataset.build);
                                mas.push("/");
                                point_sum = point_sum - 1;
                                if (this.dataset.build == 1) {
                                    point_sum_bild1++;
                                } else {
                                    point_sum_bild2++;
                                }
                                break;
                            }



                        } else {
                            mas.push(this.dataset.main);
                            mas.push(this.dataset.build);
                            mas.push("/");
                            point_sum = point_sum - 1;
                            if (this.dataset.build == 1) {
                                point_sum_bild1++;
                            } else {
                                point_sum_bild2++;
                            }
                            break;
                        }


                    }
                }
            }

        }
    }



    for (var build_num = 1; build_num < 3; build_num++) {
        for (var mas_count = 0; mas_count < 80; mas_count++) {
            if (mas[mas_count] == build_num && mas[mas_count - 1] == "main") {
                $(" #includedContent .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").addClass("skill-used");
            }

        }
    }
    $(" #includedContent .Abilities-weapon__points").text("Вложено очков : " + (19 - point_sum) + " (Доступно " + point_sum + ")");
    // console.log(mas)

    if (mas.length > 0) {

        if (point_sum == 0) {
            $(" #includedContent .Abilities-weapon__item .Abilities-weapon__row .Abilities-weapon__skill .Abilities-weapon__img-wrapper").addClass("skill-notused");

            $(" #includedContent .Abilities-weapon__item  .Abilities-weapon__main .Abilities-weapon__img-wrapper").addClass("skill-notused");

        } else {
            $(" #includedContent .Abilities-weapon__item .Abilities-weapon__row .Abilities-weapon__skill .Abilities-weapon__img-wrapper").removeClass("skill-notused");

            $(" #includedContent .Abilities-weapon__item  .Abilities-weapon__main .Abilities-weapon__img-wrapper").removeClass("skill-notused");
        }

    }

});
