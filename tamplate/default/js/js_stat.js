
// /*Menu nav toggly*/
$("#nav__burger").on("click", function (event) {
    event.preventDefault();
    if ($("#nav__burger ").hasClass("burger__active")) {
        $('#nav__burger').toggleClass("burger__active");
        $("#header").toggleClass("active-nav");
        function timeS() {
            $(".nav__wrapper").toggleClass("active__block");
            $(".nav__link").toggleClass("active__block");
        }

        setTimeout(timeS, 400);

    } else {
        $(".nav__wrapper").toggleClass("active__block");
        $(".nav__link").toggleClass("active__block");
        function timeS() {
            $('#nav__burger').toggleClass("burger__active");
            $("#header").toggleClass("active-nav");
        }

        setTimeout(timeS, 100);

    }
});


var adress2 = 'http://newworldinfo/index.php?';

var stat_points = 190,
    strenght = 5,
    dexterity = 5,
    intelligence = 5,
    focuss = 5,
    constitution = 5;

if (typeof (strenght_db) !== 'undefined') {
    strenght = strenght_db,
        dexterity = dexterity_db,
        intelligence = intelligence_db,
        focuss = focuss_db,
        constitution = constitution_db;

    $("#constitution .build-stat__after")[0].setAttribute("style", "width:" + parseInt(constitution) / 3 + "%")
    $("#focuss .build-stat__after")[0].setAttribute("style", "width:" + parseInt(focuss) / 3 + "%")

    $("#intelligence .build-stat__after")[0].setAttribute("style", "width:" + parseInt(intelligence) / 3 + "%")
    $("#dexterity .build-stat__after")[0].setAttribute("style", "width:" + parseInt(dexterity) / 3 + "%")
    $("#strenght .build-stat__after")[0].setAttribute("style", "width:" + parseInt(strenght) / 3 + "%")

    $(" #constitution .build-stat__this-stat ").text(constitution);
    $(" #focuss .build-stat__this-stat ").text(focuss);
    $(" #intelligence .build-stat__this-stat ").text(intelligence);
    $(" #dexterity .build-stat__this-stat ").text(dexterity);
    $(" #strenght .build-stat__this-stat ").text(strenght);

    $(".build-stat__sum-point ").text("Осталось очков: " + (215 - focuss - strenght - dexterity - constitution - intelligence));
}
// strenght

$("#strenght .build-stat__minus1").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 190 & strenght > 5) {
        stat_points++;
        strenght--;
    }
    $("#strenght .build-stat__after")[0].setAttribute("style", "width:" + parseInt(strenght) / 3 + "%")

    $(" #strenght .build-stat__this-stat ").text(strenght);

    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#strenght .build-stat__minus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 181 & strenght > 9) {
        stat_points = stat_points + 10;
        strenght = strenght - 10;
    }

    $("#strenght .build-stat__after")[0].setAttribute("style", "width:" + parseInt(strenght) / 3 + "%")

    $(" #strenght .build-stat__this-stat ").text(strenght);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});


$("#strenght .build-stat__plus1").on("click", function (event) {
    event.preventDefault();
    if (stat_points > 0) {
        stat_points--;
        strenght++;
    }
    $("#strenght .build-stat__after")[0].setAttribute("style", "width:" + parseInt(strenght) / 3 + "%")
    $(" #strenght .build-stat__this-stat ").text(strenght);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#strenght .build-stat__plus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points > 0 & (strenght + dexterity + intelligence + focuss + constitution - 15) < 191) {
        stat_points = stat_points - 10;
        strenght = strenght + 10;
    }

    $("#strenght .build-stat__after")[0].setAttribute("style", "width:" + parseInt(strenght) / 3 + "%")

    $(" #strenght .build-stat__this-stat ").text(strenght);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});


// dexterity

$("#dexterity .build-stat__minus1").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 190 & dexterity > 5) {
        stat_points++;
        dexterity--;
    }
    $("#dexterity .build-stat__after")[0].setAttribute("style", "width:" + parseInt(dexterity) / 3 + "%")
    $(" #dexterity .build-stat__this-stat ").text(dexterity);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#dexterity .build-stat__minus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 181 & dexterity > 9) {
        stat_points = stat_points + 10;
        dexterity = dexterity - 10;
    }

    $("#dexterity .build-stat__after")[0].setAttribute("style", "width:" + parseInt(dexterity) / 3 + "%")

    $(" #dexterity .build-stat__this-stat ").text(dexterity);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});


$("#dexterity .build-stat__plus1").on("click", function (event) {
    event.preventDefault();
    if (stat_points > 0) {
        stat_points--;
        dexterity++;
    }
    $("#dexterity .build-stat__after")[0].setAttribute("style", "width:" + parseInt(dexterity) / 3 + "%")
    $(" #dexterity .build-stat__this-stat ").text(dexterity);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#dexterity .build-stat__plus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points > 0 & (strenght + dexterity + intelligence + focuss + constitution - 15) < 191) {
        stat_points = stat_points - 10;
        dexterity = dexterity + 10;
    }

    $("#dexterity .build-stat__after")[0].setAttribute("style", "width:" + parseInt(dexterity) / 3 + "%")

    $(" #dexterity .build-stat__this-stat ").text(dexterity);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});


// intelligence

$("#intelligence .build-stat__minus1").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 190 & intelligence > 5) {
        stat_points++;
        intelligence--;
    }
    $("#intelligence .build-stat__after")[0].setAttribute("style", "width:" + parseInt(intelligence) / 3 + "%")


    $(" #intelligence .build-stat__this-stat ").text(intelligence);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#intelligence .build-stat__minus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 181 & intelligence > 9) {
        stat_points = stat_points + 10;
        intelligence = intelligence - 10;
    }

    $("#intelligence .build-stat__after")[0].setAttribute("style", "width:" + parseInt(intelligence) / 3 + "%")

    $(" #intelligence .build-stat__this-stat ").text(intelligence);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});


$("#intelligence .build-stat__plus1").on("click", function (event) {
    event.preventDefault();
    if (stat_points > 0) {
        stat_points--;
        intelligence++;
    }
    $("#intelligence .build-stat__after")[0].setAttribute("style", "width:" + parseInt(intelligence) / 3 + "%")
    $(" #intelligence .build-stat__this-stat ").text(intelligence);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#intelligence .build-stat__plus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points > 0 & (strenght + dexterity + intelligence + focuss + constitution - 15) < 191) {
        stat_points = stat_points - 10;
        intelligence = intelligence + 10;
    }

    $("#intelligence .build-stat__after")[0].setAttribute("style", "width:" + parseInt(intelligence) / 3 + "%")

    $(" #intelligence .build-stat__this-stat ").text(intelligence);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});


// focuss

$("#focuss .build-stat__minus1").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 190 & focuss > 5) {
        stat_points++;
        focuss--;
    }
    $("#focuss .build-stat__after")[0].setAttribute("style", "width:" + parseInt(focuss) / 3 + "%")


    $(" #focuss .build-stat__this-stat ").text(focuss);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#focuss .build-stat__minus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 181 & focuss > 9) {
        stat_points = stat_points + 10;
        focuss = focuss - 10;
    }

    $("#focuss .build-stat__after")[0].setAttribute("style", "width:" + parseInt(focuss) / 3 + "%")

    $(" #focuss .build-stat__this-stat ").text(focuss);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});


$("#focuss .build-stat__plus1").on("click", function (event) {
    event.preventDefault();
    if (stat_points > 0) {
        stat_points--;
        focuss++;
    }
    $("#focuss .build-stat__after")[0].setAttribute("style", "width:" + parseInt(focuss) / 3 + "%")
    $(" #focuss .build-stat__this-stat ").text(focuss);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#focuss .build-stat__plus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points > 0 & (strenght + dexterity + intelligence + focuss + constitution - 15) < 191) {
        stat_points = stat_points - 10;
        focuss = focuss + 10;
    }

    $("#focuss .build-stat__after")[0].setAttribute("style", "width:" + parseInt(focuss) / 3 + "%")

    $(" #focuss .build-stat__this-stat ").text(focuss);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});



// constitution

$("#constitution .build-stat__minus1").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 190 & constitution > 5) {
        stat_points++;
        constitution--;
    }
    $("#constitution .build-stat__after")[0].setAttribute("style", "width:" + parseInt(constitution) / 3 + "%")

    $(" #constitution .build-stat__this-stat ").text(constitution);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#constitution .build-stat__minus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points < 181 & constitution > 9) {
        stat_points = stat_points + 10;
        constitution = constitution - 10;
    }

    $("#constitution .build-stat__after")[0].setAttribute("style", "width:" + parseInt(constitution) / 3 + "%")

    $(" #constitution .build-stat__this-stat ").text(constitution);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});


$("#constitution .build-stat__plus1").on("click", function (event) {
    event.preventDefault();
    if (stat_points > 0) {
        stat_points--;
        constitution++;
    }
    $("#constitution .build-stat__after")[0].setAttribute("style", "width:" + parseInt(constitution) / 3 + "%")
    $(" #constitution .build-stat__this-stat ").text(constitution);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});

$("#constitution .build-stat__plus10").on("click", function (event) {
    event.preventDefault();

    if (stat_points > 0 & (strenght + dexterity + intelligence + focuss + constitution - 15) < 191) {
        stat_points = stat_points - 10;
        constitution = constitution + 10;
    }

    $("#constitution .build-stat__after")[0].setAttribute("style", "width:" + parseInt(constitution) / 3 + "%")

    $(" #constitution .build-stat__this-stat ").text(constitution);
    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});



$(".build-stat__drop-stat").on("click", function (event) {
    event.preventDefault();

    stat_points = 190;
    constitution = 5;
    focuss = 5;
    intelligence = 5;
    dexterity = 5;
    strenght = 5;

    $("#constitution .build-stat__after")[0].setAttribute("style", "width:" + parseInt(constitution) / 3 + "%")
    $("#focuss .build-stat__after")[0].setAttribute("style", "width:" + parseInt(focuss) / 3 + "%")

    $("#intelligence .build-stat__after")[0].setAttribute("style", "width:" + parseInt(intelligence) / 3 + "%")
    $("#dexterity .build-stat__after")[0].setAttribute("style", "width:" + parseInt(dexterity) / 3 + "%")
    $("#strenght .build-stat__after")[0].setAttribute("style", "width:" + parseInt(strenght) / 3 + "%")

    $(" #constitution .build-stat__this-stat ").text(constitution);
    $(" #focuss .build-stat__this-stat ").text(focuss);
    $(" #intelligence .build-stat__this-stat ").text(intelligence);
    $(" #dexterity .build-stat__this-stat ").text(dexterity);
    $(" #strenght .build-stat__this-stat ").text(strenght);

    $(".build-stat__sum-point ").text("Осталось очков: " + stat_points);

});







$(document).mouseup(function (e) {

    if (e.target.classList.contains("form-descr__wrapper") | e.target.classList.contains("form-descr__name")) {

        if ($(".form-descr__wrapper #form-descr__name")[0].value.length == 0) {
            $(".form-descr__wrapper .form-descr__placeholder").toggleClass("active-placeholder");
        }

    } else if ($(".form-descr__wrapper .form-descr__placeholder")[0] != undefined) {
        if ($(".form-descr__wrapper #form-descr__name")[0].value.length == 0) {
            $(".form-descr__wrapper .form-descr__placeholder").removeClass("active-placeholder");
        }



    }
});



if ($('#role .__select').length > 0) {
    const selectSingle = document.querySelector('#role .__select');
    const selectSingle_title = selectSingle.querySelector('#role .__select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('#role .__select__label');

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
            $("#role .form-descr__placeholder").toggleClass("active-placeholder");
        } else {
            selectSingle.setAttribute('data-state', 'active');
            $("#role .form-descr__placeholder").toggleClass("active-placeholder");
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
            $("#role .form-descr__placeholder").toggleClass("active-placeholder");

        });
    }



    const selectSingle2 = document.querySelector('#appointment .__select');
    const selectSingle_title2 = selectSingle2.querySelector('#appointment .__select__title');
    const selectSingle_labels2 = selectSingle2.querySelectorAll('#appointment .__select__label');

    // Toggle menu
    selectSingle_title2.addEventListener('click', () => {
        if ('active' === selectSingle2.getAttribute('data-state')) {
            selectSingle2.setAttribute('data-state', '');
            $("#appointment .form-descr__placeholder").toggleClass("active-placeholder");
        } else {
            selectSingle2.setAttribute('data-state', 'active');
            $("#appointment .form-descr__placeholder").toggleClass("active-placeholder");
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels2.length; i++) {
        selectSingle_labels2[i].addEventListener('click', (evt) => {
            selectSingle_title2.textContent = evt.target.textContent;
            selectSingle2.setAttribute('data-state', '');
            $("#appointment .form-descr__placeholder").toggleClass("active-placeholder");
        });
    }

    var check_box = false;
    $(".form-descr__check-wrapper").on("click", function (event) {
        if ($(".form-descr__check-wrapper")[0].classList.contains("check-box-active")) {
            $(".form-descr__check-wrapper").removeClass("check-box-active");
            check_box = false

        } else {
            check_box = true
            $(".form-descr__check-wrapper").addClass("check-box-active");
        }
    })







    $("#bold").on("click", function (event) {
        event.preventDefault();
        $('#bold').toggleClass("area-active");
        document.execCommand('bold', false, null);
        return false;


    });

    $("#italic").on("click", function (event) {
        event.preventDefault();
        $('#italic').toggleClass("area-active");
        document.execCommand('italic', false, null);
        return false;


    });

    $("#strikethrough").on("click", function (event) {
        event.preventDefault();
        $('#strikethrough').toggleClass("area-active");
        document.execCommand('strikethrough', false, null);
        return false;


    });

    $("#HorizontalRule").on("click", function (event) {
        event.preventDefault();
        $('#HorizontalRule').toggleClass("area-active");
        document.execCommand('insertHorizontalRule', false, null);
        return false;


    });

    $("#move-up").on("click", function (event) {
        event.preventDefault();
        $('#move-up').toggleClass("area-active");
        document.execCommand('superscript', false, null);
        return false;



    });

    $("#move-down").on("click", function (event) {
        event.preventDefault();
        $('#move-down').toggleClass("area-active");
        document.execCommand('subscript', false, null);
        return false;


    });




    $("#paragraph-left").on("click", function (event) {
        event.preventDefault();
        $('#paragraph-right').removeClass("area-active");
        $('#paragraph-center').removeClass("area-active");
        $('#paragraph-left').toggleClass("area-active");
        document.execCommand('justifyLeft', false, null);
        return false;


    });


    $("#paragraph-center").on("click", function (event) {
        event.preventDefault();
        $('#paragraph-right').removeClass("area-active");
        $('#paragraph-center').toggleClass("area-active");
        $('#paragraph-left').removeClass("area-active");
        document.execCommand('justifyCenter', false, null);
        return false;


    });


    $("#paragraph-right").on("click", function (event) {
        event.preventDefault();
        $('#paragraph-right').toggleClass("area-active");
        $('#paragraph-center').removeClass("area-active");
        $('#paragraph-left').removeClass("area-active");
        document.execCommand('justifyRight', false, null);
        return false;


    });



    $("#sort-numberic").on("click", function (event) {
        event.preventDefault();
        $('#sort-numberic').toggleClass("area-active");

        document.execCommand('insertOrderedList', false, null);
        return false;


    });

    $("#sort-alpha").on("click", function (event) {
        event.preventDefault();
        $('#sort-alpha').toggleClass("area-active");

        document.execCommand('insertUnorderedList', false, null);
        return false;


    });




    const selectSingle3 = document.querySelector('#font_style .__select');
    const selectSingle_title3 = selectSingle3.querySelector('#font_style .__select__title');
    const selectSingle_labels3 = selectSingle3.querySelectorAll('#font_style .__select__label');


    // Toggle menu
    selectSingle_title3.addEventListener('click', () => {
        if ('active' === selectSingle3.getAttribute('data-state')) {
            selectSingle3.setAttribute('data-state', '');
            $("#font_style .form-descr__placeholder").toggleClass("active-placeholder");
        } else {
            selectSingle3.setAttribute('data-state', 'active');
            $("#font_style .form-descr__placeholder").toggleClass("active-placeholder");
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels3.length; i++) {
        selectSingle_labels3[i].addEventListener('click', (evt) => {
            selectSingle_title3.textContent = evt.target.textContent;
            selectSingle3.setAttribute('data-state', '');
            $("#font_style .form-descr__placeholder").toggleClass("active-placeholder");


        });
    }




    $(".__select__label1").on("click", function (event) {
        event.preventDefault();
        var val = selectSingle_title3.textContent;
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('fontName', false, val);
        document.execCommand('styleWithCSS', false, false);

    });






    $("#underline").on("click", function (event) {
        event.preventDefault();
        $('#underline').toggleClass("area-active");
        document.execCommand('underline', false, null);
        return false;


    });






    const selectSingle4 = document.querySelector('#font_size .__select');
    const selectSingle_title4 = selectSingle4.querySelector('#font_size .__select__title');
    const selectSingle_labels4 = selectSingle4.querySelectorAll('#font_size .__select__label');


    // Toggle menu
    selectSingle_title4.addEventListener('click', () => {
        if ('active' === selectSingle4.getAttribute('data-state')) {
            selectSingle4.setAttribute('data-state', '');
            $("#font_size .form-descr__placeholder").toggleClass("active-placeholder");
        } else {
            selectSingle4.setAttribute('data-state', 'active');
            $("#font_size .form-descr__placeholder").toggleClass("active-placeholder");
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels4.length; i++) {
        selectSingle_labels4[i].addEventListener('click', (evt) => {
            selectSingle_title4.textContent = evt.target.textContent;
            selectSingle4.setAttribute('data-state', '');
            $("#font_size .form-descr__placeholder").toggleClass("active-placeholder");


        });
    }


    $(".__select__label2").on("click", function (event) {
        event.preventDefault();
        var val2 = selectSingle_title4.textContent;
        if (val2 == "10px") {
            val2 = 1;

        } else if (val2 == "13px") {
            val2 = 2;
        } else if (val2 == "16px") {
            val2 = 3;
        } else if (val2 == "18px") {
            val2 = 4;
        } else if (val2 == "24px") {
            val2 = 5;
        } else if (val2 == "32px") {
            val2 = 6;
        }
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('fontSize', false, val2);
        document.execCommand('styleWithCSS', false, false);

    });


    $('.text-redact__area').on("keypress paste", function (e) {
        if (this.innerHTML.length >= this.getAttribute("max")) {
            e.preventDefault();
            return false;
        }
    });

    function copytext(el) {
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(el).text()).select();
        document.execCommand("copy");
        $tmp.remove();
    }

    $(".form-descr__btn").on("click", function (event) {
        event.preventDefault();



        if (build22 == true & build11 == true) {
            if (point_sum == 0 & point2_sum == 0 & $(".form-descr__wrapper #form-descr__name")[0].value.length != 0) {
                // calc_weapon
                var now = new Date();
                var random = now.getSeconds() + $(".form-descr__wrapper #form-descr__name")[0].value.substr(0, 3).replace(/'/gi, '"').replace(/&/gi, '"').replace(/[/]/gi, '"').replace(/[+]/gi, '"') + now.getMilliseconds()
                var name = $(".form-descr__wrapper #form-descr__name")[0].value.replace(/'/gi, '"');
                var appointment = selectSingle_title2.textContent;
                var role = selectSingle_title.textContent;
                var private = check_box;
                var TimeEnd = Date.now();

                var stat_strenght = strenght;
                var stat_dexterity = dexterity;
                var stat_intelligence = intelligence;
                var stat_focus = focuss;
                var stat_constitution = constitution;

                var Descript = $(".text-redact__area")[0].innerHTML.replace(/'/gi, '"');

                $.ajax({
                    url: "tamplate/default/sendTobd.php",
                    type: "POST",
                    data: {
                        random: random,
                        name: name,
                        mas2: mas2,
                        mas: mas,
                        role: role,
                        appointment: appointment,
                        private: private,
                        strenght: stat_strenght,
                        dexterity: stat_dexterity,
                        intelligence: stat_intelligence,
                        focus: stat_focus,
                        constitution: stat_constitution,
                        weapon2: weapon2,
                        weapon1: weapon1,
                        TimeEnd: TimeEnd,
                        Descript: Descript
                    },
                    success: function (responseText) {
                        console.log("alert");
                        document.querySelector('.form-descr').remove();
                        document.querySelector('.build-stat__drop-stat').remove();
                        document.querySelector('.Abilities-weapon__back').remove();
                        document.querySelector('.Abilities-weapon__drop').remove();
                        document.querySelector('.Abilities-weapon__back').remove();
                        document.querySelector('.Abilities-weapon__drop').remove();
                        $(".form-descr__item.display-none1").removeClass("display-none1")
                        $(".form-descr__copy-text").text(adress2 + "&AdressMain=Home&calc_weapon=true&calc_random=" + random)
                        $(".form-descr__copy-text").attr("href", adress2 + "&AdressMain=Home&calc_weapon=true&calc_random=" + random)

                    }
                });
            } else {
                $(" .form-descr__alert").text("Ветки умений не заполнены");
            }

        } else {
            $(" .form-descr__alert").text("Выберите оба слота");
        }


    });
}


if ($('#build-list_role .__select').length > 0) {


    const selectSingle5 = document.querySelector('#build-list_role .__select');
    const selectSingle_title5 = selectSingle5.querySelector('#build-list_role .__select__title');
    const selectSingle_labels5 = selectSingle5.querySelectorAll('#build-list_role .__select__label');



    $(".build-list__search").attr("href", adress2 + "&AdressMain=Build&role=" + "Не указана" + "&page=1&appointment=" + "Универсальный" + "&list_weapon1=" + "Любое оружие" + "&list_weapon2=" + "Любое оружие")

    // Toggle menu
    selectSingle_title5.addEventListener('click', () => {
        if ('active' === selectSingle5.getAttribute('data-state')) {
            selectSingle5.setAttribute('data-state', '');
            $("#build-list_role .form-descr__placeholder").toggleClass("active-placeholder");
        } else {
            selectSingle5.setAttribute('data-state', 'active');
            $("#build-list_role .form-descr__placeholder").toggleClass("active-placeholder");
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels5.length; i++) {
        selectSingle_labels5[i].addEventListener('click', (evt) => {
            selectSingle_title5.textContent = evt.target.textContent;
            selectSingle5.setAttribute('data-state', '');
            $("#build-list_role .form-descr__placeholder").toggleClass("active-placeholder");
            $(".build-list__search").attr("href", adress2 + "&AdressMain=Build&role=" + selectSingle_title5.textContent + "&page=1&appointment=" + selectSingle_title6.textContent + "&list_weapon1=" + selectSingle_title7.textContent + "&list_weapon2=" + selectSingle_title8.textContent)

        });
    }

    const selectSingle6 = document.querySelector('#build-list_appointment .__select');
    const selectSingle_title6 = selectSingle6.querySelector('#build-list_appointment .__select__title');
    const selectSingle_labels6 = selectSingle6.querySelectorAll('#build-list_appointment .__select__label');


    // Toggle menu
    selectSingle_title6.addEventListener('click', () => {
        if ('active' === selectSingle6.getAttribute('data-state')) {
            selectSingle6.setAttribute('data-state', '');
            $("#build-list_appointment .form-descr__placeholder").toggleClass("active-placeholder");
        } else {
            selectSingle6.setAttribute('data-state', 'active');
            $("#build-list_appointment .form-descr__placeholder").toggleClass("active-placeholder");
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels6.length; i++) {
        selectSingle_labels6[i].addEventListener('click', (evt) => {
            selectSingle_title6.textContent = evt.target.textContent;
            selectSingle6.setAttribute('data-state', '');
            $("#build-list_appointment .form-descr__placeholder").toggleClass("active-placeholder");

            $(".build-list__search").attr("href", adress2 + "&AdressMain=Build&role=" + selectSingle_title5.textContent + "&page=1&appointment=" + selectSingle_title6.textContent + "&list_weapon1=" + selectSingle_title7.textContent + "&list_weapon2=" + selectSingle_title8.textContent)
        });
    }

    const selectSingle7 = document.querySelector('#build-list_weapon1 .__select');
    const selectSingle_title7 = selectSingle7.querySelector('#build-list_weapon1 .__select__title');
    const selectSingle_labels7 = selectSingle7.querySelectorAll('#build-list_weapon1 .__select__label');


    // Toggle menu
    selectSingle_title7.addEventListener('click', () => {
        if ('active' === selectSingle7.getAttribute('data-state')) {
            selectSingle7.setAttribute('data-state', '');
            $("#build-list_weapon1 .form-descr__placeholder").toggleClass("active-placeholder");
        } else {
            selectSingle7.setAttribute('data-state', 'active');
            $("#build-list_weapon1 .form-descr__placeholder").toggleClass("active-placeholder");
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels7.length; i++) {
        selectSingle_labels7[i].addEventListener('click', (evt) => {
            selectSingle_title7.textContent = evt.target.textContent;
            selectSingle7.setAttribute('data-state', '');
            $("#build-list_weapon1 .form-descr__placeholder").toggleClass("active-placeholder");


            $(".build-list__search").attr("href", adress2 + "&AdressMain=Build&role=" + selectSingle_title5.textContent + "&page=1&appointment=" + selectSingle_title6.textContent + "&list_weapon1=" + selectSingle_title7.textContent + "&list_weapon2=" + selectSingle_title8.textContent)
        });
    }

    const selectSingle8 = document.querySelector('#build-list_weapon2 .__select');
    const selectSingle_title8 = selectSingle8.querySelector('#build-list_weapon2 .__select__title');
    const selectSingle_labels8 = selectSingle8.querySelectorAll('#build-list_weapon2 .__select__label');


    // Toggle menu
    selectSingle_title8.addEventListener('click', () => {
        if ('active' === selectSingle8.getAttribute('data-state')) {
            selectSingle8.setAttribute('data-state', '');
            $("#build-list_weapon2 .form-descr__placeholder").toggleClass("active-placeholder");
        } else {
            selectSingle8.setAttribute('data-state', 'active');
            $("#build-list_weapon2 .form-descr__placeholder").toggleClass("active-placeholder");
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels8.length; i++) {
        selectSingle_labels8[i].addEventListener('click', (evt) => {
            selectSingle_title8.textContent = evt.target.textContent;
            selectSingle8.setAttribute('data-state', '');
            $("#build-list_weapon2 .form-descr__placeholder").toggleClass("active-placeholder");
            $(".build-list__search").attr("href", adress2 + "&AdressMain=Build&role=" + selectSingle_title5.textContent + "&page=1&appointment=" + selectSingle_title6.textContent + "&list_weapon1=" + selectSingle_title7.textContent + "&list_weapon2=" + selectSingle_title8.textContent)

        });
    }





}


$("#call_back").on("click", function (event) {
    event.preventDefault();
    $('#popup').addClass("popup-open");
    $('body').addClass("body-lock");
   

});


$(".popup__close").on("click", function (event) {
    event.preventDefault();
    $('#popup').removeClass("popup-open");
    $('body').removeClass("body-lock");

});

$(".popup__wrapper").on("click", function (event) {
    event.preventDefault();
    $('#popup').removeClass("popup-open");
   
    $('body').removeClass("body-lock");
});

$(document).mouseup(function (e) {

    if (e.target.classList.contains("popup__item-wrapper") | e.target.classList.contains("popup__item")) {

        if ($(".popup__item-wrapper #e-mail")[0].value.length == 0) {
            $(".popup__item-wrapper .popup__placeholder").toggleClass("active-placeholder");
        }

    } else if ($(".popup__item-wrapper  .popup__placeholder")[0] != undefined) {
        if ($(".popup__item-wrapper #e-mail")[0].value.length == 0) {
            $(".popup__item-wrapper .popup__placeholder").removeClass("active-placeholder");
        }
    }
});

$(document).mouseup(function (e) {

    if (e.target.classList.contains("popup__textarea-wrapper") | e.target.classList.contains("popup__textarea")) {

        if ($(".popup__textarea-wrapper #What")[0].value.length == 0) {
            $(".popup__textarea-wrapper .popup__placeholder").toggleClass("active-placeholder3");
        }

    } else if ($(".popup__textarea-wrapper  .popup__placeholder")[0] != undefined) {
        
        if ($(".popup__textarea-wrapper #What")[0].value.length == 0) {
            $(".popup__textarea-wrapper .popup__placeholder").removeClass("active-placeholder3");
        }

    }
});

$('.popup__btn').prop('disabled', true);
$('#What').on('keyup', function () {
	if ($.trim($('input').val()).length > 0 && $.trim(($('textarea').val())).length > 0) {
		$('.popup__btn').prop('disabled', false);
	}
	else {
		$('.popup__btn').prop('disabled', true);
	}
});


if($(".back-links__title").length>0){
    $(".back-links__title").on("click", function (event) {
        event.preventDefault();
        if ($(".back-links__wrapper").hasClass("active-back-links-display")){
            $(".back-links__wrapper").toggleClass("active-back-links");
            function timeS() {
                $(".back-links__wrapper").toggleClass("active-back-links-display");
            }
        
            setTimeout(timeS, 1025);
        } else {
            $(".back-links__wrapper").toggleClass("active-back-links-display");
            function timeS() {
                $(".back-links__wrapper").toggleClass("active-back-links");
            }
            setTimeout(timeS, 10);
        }
    });
}











