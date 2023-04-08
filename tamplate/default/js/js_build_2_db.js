


if (mas2.length > 0) {
    for (var build_num = 1; build_num < 3; build_num++) {
        for (var i = 1; i < 6; i++) {

            for (var g = 1; g < 6; g++) {

                for (var mas2_count = 0; mas2_count < 77; mas2_count++) {
                    if (mas2[mas2_count] == $(" #includedContent4 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                        && mas2[mas2_count + 1] == $(" #includedContent4 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                        && mas2[mas2_count + 2] == $(" #includedContent4 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                    ) {

                        $(" #includedContent4 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").addClass("active-background");

                        $(" #includedContent4 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").addClass("skill-used");
                    }

                }


            }

        }
    }
}





 for (var build_num = 1; build_num < 3; build_num++) {
    for (var mas2_count = 0; mas2_count < 80; mas2_count++) {
        if (mas2[mas2_count] == build_num && mas2[mas2_count - 1] == "main") {
            $(" #includedContent4 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").addClass("skill-used");
            $(" #includedContent4 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main ").addClass("active-background");
        }

    }
}