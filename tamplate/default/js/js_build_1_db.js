


if (mas.length > 0) {
    for (var build_num = 1; build_num < 3; build_num++) {
        for (var i = 1; i < 6; i++) {

            for (var g = 1; g < 6; g++) {

                for (var mas_count = 0; mas_count < 77; mas_count++) {
                    if (mas[mas_count] == $(" #includedContent3 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-lin")

                        && mas[mas_count + 1] == $(" #includedContent3 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-column")
                        && mas[mas_count + 2] == $(" #includedContent3 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ")").attr("data-build")
                    ) {

                        $(" #includedContent3 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") ").addClass("active-background");

                        $(" #includedContent3 .Abilities-weapon__item:nth-child(" + build_num + ") .Abilities-weapon__row:nth-child(" + i + ") .Abilities-weapon__skill:nth-child(" + g + ") .Abilities-weapon__img-wrapper").addClass("skill-used");
                    }

                }


            }

        }
    }
}

for (var build_num = 1; build_num < 3; build_num++) {
    for (var mas_count = 0; mas_count < 80; mas_count++) {
        if (mas[mas_count] == build_num && mas[mas_count - 1] == "main") {
            $(" #includedContent3 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main .Abilities-weapon__img-wrapper").addClass("skill-used");
            $(" #includedContent3 .Abilities-weapon__item:nth-child(" + build_num + ")  .Abilities-weapon__main ").addClass("active-background");
        }

    }
}

