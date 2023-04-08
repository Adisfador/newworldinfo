var contactsH = $("#footer").offset().top,
    scrollOffset = $(window).height(),
    footerheight = $("#footer").height();

var MainAdress = "tamplate/default/";

// checkScroll(scrollOffset);
// check(scrollOffset);
// $(window).on("scroll", function () {
//     scrollOffset = $(this).scrollTop();
//     checkScroll(scrollOffset);
//     check(scrollOffset);
// });

// console.log(contactsH);
// console.log(scrollOffset);
// console.log( footerheight);

if (scrollOffset > contactsH + footerheight) {
    $("#footer").toggleClass("footer-down");
}



if ($("#search ").hasClass("table")) {
    $('.database__adress span').addClass('active_search');
}

if ($("#eror ").hasClass("eror")) {
    $('.database__adress span').addClass('active_search');
}





// BUILD 1
var build11 = false;


$("#voidgantel").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/voidgantel.php");

        // $("#js").load("js_html.html");

    });

    $('#voidgantel2').addClass("display-none");

    build11 = true;


});

$("#sword").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/sword.php");

        // $("#js").load("js_html.html");

    });

    $('#sword2').addClass("display-none");

    build11 = true;


});

$("#rapier").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/rapier.php");

        // $("#js").load("js_html.html");

    });

    $('#rapier2').addClass("display-none");

    build11 = true;


});

$("#hatchet").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/hatchet.php");

        // $("#js").load("js_html.html");

    });

    $('#hatchet2').addClass("display-none");

    build11 = true;


});


$("#spear").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/spear.php");

        // $("#js").load("js_html.html");

    });

    $('#spear2').addClass("display-none");

    build11 = true;


});

$("#great_axe").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/great_axe.php");

        // $("#js").load("js_html.html");

    });

    $('#great_axe2').addClass("display-none");

    build11 = true;


});

$("#WarHammer").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/WarHammer.php");

        // $("#js").load("js_html.html");

    });

    $('#WarHammer2').addClass("display-none");

    build11 = true;


});

$("#bow").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/bow.php");

        // $("#js").load("js_html.html");

    });

    $('#bow2').addClass("display-none");

    build11 = true;


});

$("#musket").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/musket.php");

        // $("#js").load("js_html.html");

    });

    $('#musket2').addClass("display-none");

    build11 = true;


});



$("#firestaff").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/firestaff.php");

        // $("#js").load("js_html.html");

    });

    $('#firestaff2').addClass("display-none");

    build11 = true;


});



$("#lifestaff").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/lifestaff.php");

        // $("#js").load("js_html.html");

    });

    $('#lifestaff2').addClass("display-none");

    build11 = true;


});


$("#icegantel").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent").load(MainAdress + "build1/icegantel.php");

        // $("#js").load("js_html.html");

    });

    $('#icegantel2').addClass("display-none");

    build11 = true;


});








// BUILD 2

var build22 = false;

$("#voidgantel2").on("click", function (event) {
    event.preventDefault();
    // $(".Abilities__wrapper-weapon").toggleClass("display-none");
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/voidgantel.php");

    });
    $('#voidgantel').addClass("display-none");

    build22 = true;
});

$("#sword2").on("click", function (event) {
    event.preventDefault();
    // $(".Abilities__wrapper-weapon").toggleClass("display-none");
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/sword.php");

    });
    $('#sword').addClass("display-none");

    build22 = true;
});


$("#rapier2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/rapier.php");

        // $("#js").load("js_html.html");

    });

    $('#rapier').addClass("display-none");

    build22 = true;


});

$("#hatchet2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/hatchet.php");

        // $("#js").load("js_html.html");

    });

    $('#hatchet').addClass("display-none");

    build22 = true;


});

$("#spear2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/spear.php");

        // $("#js").load("js_html.html");

    });

    $('#spear').addClass("display-none");

    build22 = true;


});


$("#great_axe2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/great_axe.php");

        // $("#js").load("js_html.html");

    });

    $('#great_axe').addClass("display-none");

    build22 = true;


});


$("#WarHammer2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/WarHammer.php");

        // $("#js").load("js_html.html");

    });

    $('#WarHammer').addClass(MainAdress + "display-none");

    build22 = true;


});

$("#bow2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/bow.php");

        // $("#js").load("js_html.html");

    });

    $('#bow').addClass("display-none");

    build22 = true;


});


$("#musket2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/musket.php");

        // $("#js").load("js_html.html");

    });

    $('#musket').addClass("display-none");

    build22 = true;


});


$("#firestaff2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/firestaff.php");

        // $("#js").load("js_html.html");

    });

    $('#firestaff').addClass("display-none");

    build22 = true;


});


$("#lifestaff2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/lifestaff.php");

        // $("#js").load("js_html.html");

    });

    $('#lifestaff').addClass("display-none");

    build22 = true;


});


$("#icegantel2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        $("#includedContent2").load(MainAdress + "build2/icegantel.php");

        // $("#js").load("js_html.html");

    });

    $('#icegantel').addClass("display-none");

    build22 = true;


});








if (document.getElementById('map')) {
    $('#footer').addClass("display-none");
    var factorx = 0.015625
    // CRS
    L.CRS.pr = L.extend({}, L.CRS.Simple, {
        projection: L.Projection.LonLat,
        transformation: new L.Transformation(factorx, 0, -factorx, 224),
    });
    // map
    var map = L.map('map', { preferCanvas: true, attributionControl: false, zoomControl: false, crs: L.CRS.pr }).setView([5200, 6000], 2);
    L.tileLayer(MainAdress + 'img/newworldmap/{z}/{x}/{y}.png', {
        minZoom: 2,
        maxZoom: 7,
        attribution: '',
        tms: false,
        noWrap: true,
        continuousWorld: true,
        bounds: [
            [0, 0],
            [14299, 14289]
        ]
    }).addTo(map);
    // console.log(map.getBounds());
    // console.log(Map);


    // Areas

    // ancient
    var Areas_ancient = [];
    var polygon_Areas_ancient = []
    function Areas_ancient_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["areas"]["ancient"]).length; i++) {
                Areas_ancient[i] = new L.marker([Object.values(Map["areas"]["ancient"])[i]["center"]["0"], Object.values(Map["areas"]["ancient"])[i]["center"]["1"]], { opacity: 0.01 });
                Areas_ancient[i].bindTooltip("Ancient <span>" + Object.values(Map["areas"]["ancient"])[i]["min_level"] + "-" + Object.values(Map["areas"]["ancient"])[i]["max_level"] + "</span>", { permanent: true, className: "ancient", offset: [-50, 25] });
                Areas_ancient[i].addTo(map);

                var a = [];
                for (var b = 0; b < Object.values(Map["areas"]["ancient"])[i]["latlngs"].length; b++) {
                    a[b] = [Object.values(Map["areas"]["ancient"])[i]["latlngs"][b]["0"], Object.values(Map["areas"]["ancient"])[i]["latlngs"][b]["1"]];
                }
                polygon_Areas_ancient[i] = L.polygon(a).addTo(map);

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["areas"]["ancient"]).length; i++) {
                if (map.hasLayer(Areas_ancient[i]) == true) {
                    map.removeLayer(Areas_ancient[i])
                    map.removeLayer(polygon_Areas_ancient[i])
                }
            }
        }
    }


    // angry_earth
    var Areas_angry_earth = [];
    var polygon_Areas_angry_earth = []
    function Areas_angry_earth_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["areas"]["angry_earth"]).length; i++) {
                Areas_angry_earth[i] = new L.marker([Object.values(Map["areas"]["angry_earth"])[i]["center"]["0"], Object.values(Map["areas"]["angry_earth"])[i]["center"]["1"]], { opacity: 0.01 });
                Areas_angry_earth[i].bindTooltip("Angry Earth <span>" + Object.values(Map["areas"]["angry_earth"])[i]["min_level"] + "-" + Object.values(Map["areas"]["angry_earth"])[i]["max_level"] + "</span>", { permanent: true, className: "ancient", offset: [-50, 25] });
                Areas_angry_earth[i].addTo(map);

                var a = [];
                for (var b = 0; b < Object.values(Map["areas"]["angry_earth"])[i]["latlngs"].length; b++) {
                    a[b] = [Object.values(Map["areas"]["angry_earth"])[i]["latlngs"][b]["0"], Object.values(Map["areas"]["angry_earth"])[i]["latlngs"][b]["1"]];
                }
                polygon_Areas_angry_earth[i] = L.polygon(a).addTo(map);
                polygon_Areas_angry_earth[i].setStyle({
                    color: '#E2FF77'
                });

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["areas"]["angry_earth"]).length; i++) {
                if (map.hasLayer(Areas_angry_earth[i]) == true) {
                    map.removeLayer(Areas_angry_earth[i])
                    map.removeLayer(polygon_Areas_angry_earth[i])
                }
            }
        }
    }

    // beast
    var Areas_beast = [];
    var polygon_Areas_beast = []
    function Areas_beast_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["areas"]["beast"]).length; i++) {
                Areas_beast[i] = new L.marker([Object.values(Map["areas"]["beast"])[i]["center"]["0"], Object.values(Map["areas"]["beast"])[i]["center"]["1"]], { opacity: 0.01 });
                Areas_beast[i].bindTooltip("Beast<span>" + Object.values(Map["areas"]["beast"])[i]["min_level"] + "-" + Object.values(Map["areas"]["beast"])[i]["max_level"] + "</span>", { permanent: true, className: "ancient", offset: [-50, 25] });
                Areas_beast[i].addTo(map);

                var a = [];
                for (var b = 0; b < Object.values(Map["areas"]["beast"])[i]["latlngs"].length; b++) {
                    a[b] = [Object.values(Map["areas"]["beast"])[i]["latlngs"][b]["0"], Object.values(Map["areas"]["beast"])[i]["latlngs"][b]["1"]];
                }
                polygon_Areas_beast[i] = L.polygon(a).addTo(map);
                polygon_Areas_beast[i].setStyle({
                    color: '#3E230C'
                });

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["areas"]["beast"]).length; i++) {
                if (map.hasLayer(Areas_beast[i]) == true) {
                    map.removeLayer(Areas_beast[i])
                    map.removeLayer(polygon_Areas_beast[i])
                }
            }
        }
    }

    // corrupted
    var Areas_corrupted = [];
    var polygon_Areas_corrupted = []
    function Areas_corrupted_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["areas"]["corrupted"]).length; i++) {
                Areas_corrupted[i] = new L.marker([Object.values(Map["areas"]["corrupted"])[i]["center"]["0"], Object.values(Map["areas"]["corrupted"])[i]["center"]["1"]], { opacity: 0.01 });
                Areas_corrupted[i].bindTooltip("Corrupted<span>" + Object.values(Map["areas"]["corrupted"])[i]["min_level"] + "-" + Object.values(Map["areas"]["corrupted"])[i]["max_level"] + "</span>", { permanent: true, className: "ancient", offset: [-50, 25] });
                Areas_corrupted[i].addTo(map);

                var a = [];
                for (var b = 0; b < Object.values(Map["areas"]["corrupted"])[i]["latlngs"].length; b++) {
                    a[b] = [Object.values(Map["areas"]["corrupted"])[i]["latlngs"][b]["0"], Object.values(Map["areas"]["corrupted"])[i]["latlngs"][b]["1"]];
                }
                polygon_Areas_corrupted[i] = L.polygon(a).addTo(map);
                polygon_Areas_corrupted[i].setStyle({
                    color: '#AC100B'
                });

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["areas"]["corrupted"]).length; i++) {
                if (map.hasLayer(Areas_corrupted[i]) == true) {
                    map.removeLayer(Areas_corrupted[i])
                    map.removeLayer(polygon_Areas_corrupted[i])
                }
            }
        }
    }

    // lost
    var Areas_lost = [];
    var polygon_Areas_lost = []
    function Areas_lost_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["areas"]["lost"]).length; i++) {
                Areas_lost[i] = new L.marker([Object.values(Map["areas"]["lost"])[i]["center"]["0"], Object.values(Map["areas"]["lost"])[i]["center"]["1"]], { opacity: 0.01 });
                Areas_lost[i].bindTooltip("Lost<span>" + Object.values(Map["areas"]["lost"])[i]["min_level"] + "-" + Object.values(Map["areas"]["lost"])[i]["max_level"] + "</span>", { permanent: true, className: "ancient", offset: [-50, 25] });
                Areas_lost[i].addTo(map);

                var a = [];
                for (var b = 0; b < Object.values(Map["areas"]["lost"])[i]["latlngs"].length; b++) {
                    a[b] = [Object.values(Map["areas"]["lost"])[i]["latlngs"][b]["0"], Object.values(Map["areas"]["lost"])[i]["latlngs"][b]["1"]];
                }
                polygon_Areas_lost[i] = L.polygon(a).addTo(map);
                polygon_Areas_lost[i].setStyle({
                    color: '#2C5540'
                });

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["areas"]["lost"]).length; i++) {
                if (map.hasLayer(Areas_lost[i]) == true) {
                    map.removeLayer(Areas_lost[i])
                    map.removeLayer(polygon_Areas_lost[i])
                }
            }
        }
    }


    // fishing b1
    var fishing_hotspot_broad = [];
    function fishing_hotspot_broad_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/fishing/fish_hotspot1.85b2dd47.png',
                iconSize: [30, 40], // size of the icon
            });
            for (var i = 0; i < Object.keys(Map["fishing"]["hotspot_broad"]).length; i++) {
               

                //
                fishing_hotspot_broad[i] = new L.canvasMarker(L.latLng(Object.values(Map["fishing"]["hotspot_broad"])[i]["y"], Object.values(Map["fishing"]["hotspot_broad"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                fishing_hotspot_broad[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["fishing"]["hotspot_broad"]).length; i++) {
                if (map.hasLayer(fishing_hotspot_broad[i]) == true) {
                    map.removeLayer(fishing_hotspot_broad[i])
                }
            }
        }
    }

    // fishing b2
    var fishing_hotspot_rare = [];
    function fishing_hotspot_rare_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/fishing/fish_hotspot2.a3a4879a.png',
                iconSize: [30, 40], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["fishing"]["hotspot_rare"]).length; i++) {
               

                //
                fishing_hotspot_rare[i] = new L.canvasMarker(L.latLng(Object.values(Map["fishing"]["hotspot_rare"])[i]["y"], Object.values(Map["fishing"]["hotspot_rare"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                fishing_hotspot_rare[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["fishing"]["hotspot_rare"]).length; i++) {
                if (map.hasLayer(fishing_hotspot_rare[i]) == true) {
                    map.removeLayer(fishing_hotspot_rare[i])
                }
            }
        }
    }

    // fishing b3
    var fishing_hotspot_secret = [];
    function fishing_hotspot_secret_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/fishing/fish_hotspot3.9e2ca537.png',
                iconSize: [30, 40], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["fishing"]["hotspot_secret"]).length; i++) {
                

                //
                fishing_hotspot_secret[i] = new L.canvasMarker(L.latLng(Object.values(Map["fishing"]["hotspot_secret"])[i]["y"], Object.values(Map["fishing"]["hotspot_secret"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                fishing_hotspot_secret[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["fishing"]["hotspot_secret"]).length; i++) {
                if (map.hasLayer(fishing_hotspot_secret[i]) == true) {
                    map.removeLayer(fishing_hotspot_secret[i])
                }
            }
        }
    }

    // woods ironwood
    var woods_ironwood = [];
    function woods_ironwood_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/woods/ironwood.4997365a.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["woods"]["ironwood"]).length; i++) {
                

                //
                woods_ironwood[i] = new L.canvasMarker(L.latLng(Object.values(Map["woods"]["ironwood"])[i]["y"], Object.values(Map["woods"]["ironwood"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                woods_ironwood[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["woods"]["ironwood"]).length; i++) {
                if (map.hasLayer(woods_ironwood[i]) == true) {
                    map.removeLayer(woods_ironwood[i])
                }
            }
        }
    }

    // woods ironwood
    var woods_wyrdwood = [];
    function woods_wyrdwood_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/woods/wyrdwood.64b4fead.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["woods"]["wyrdwood"]).length; i++) {
                

                //
                woods_wyrdwood[i] = new L.canvasMarker(L.latLng(Object.values(Map["woods"]["wyrdwood"])[i]["y"], Object.values(Map["woods"]["wyrdwood"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                woods_wyrdwood[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["woods"]["wyrdwood"]).length; i++) {
                if (map.hasLayer(woods_wyrdwood[i]) == true) {
                    map.removeLayer(woods_wyrdwood[i])
                }
            }
        }
    }


    // ores crystal
    var ores_crystal = [];
    function ores_crystal_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/crystal.331ed152.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 1; i < Object.keys(Map["ores"]["crystal"]).length; i++) {
                

                //
                ores_crystal[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["crystal"])[i]["y"], Object.values(Map["ores"]["crystal"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_crystal[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["crystal"]).length; i++) {
                if (map.hasLayer(ores_crystal[i]) == true) {
                    map.removeLayer(ores_crystal[i])
                }
            }
        }
    }

    // ores gold
    var ores_gold = [];
    function ores_gold_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/gold.f341ae60.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["ores"]["gold"]).length; i++) {
                

                //
                ores_gold[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["gold"])[i]["y"], Object.values(Map["ores"]["gold"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_gold[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["gold"]).length; i++) {
                if (map.hasLayer(ores_gold[i]) == true) {
                    map.removeLayer(ores_gold[i])
                }
            }
        }
    }

    // ores iron
    var ores_iron = [];
    function ores_iron_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/iron.3beddbc8.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["ores"]["iron"]).length; i++) {
               

                //
                ores_iron[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["iron"])[i]["y"], Object.values(Map["ores"]["iron"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_iron[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["iron"]).length; i++) {
                if (map.hasLayer(ores_iron[i]) == true) {
                    map.removeLayer(ores_iron[i])
                }
            }
        }
    }

    // ores lodestone
    var ores_lodestone = [];
    function ores_lodestone_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/lodestone.674c2cd7.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["ores"]["lodestone"]).length; i++) {
               

                //
                ores_lodestone[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["lodestone"])[i]["y"], Object.values(Map["ores"]["lodestone"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_lodestone[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["lodestone"]).length; i++) {
                if (map.hasLayer(ores_lodestone[i]) == true) {
                    map.removeLayer(ores_lodestone[i])
                }
            }
        }
    }

    // ores orichalcum
    var ores_orichalcum = [];
    function ores_orichalcum_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/orichalcum.3a8b3ae1.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["ores"]["orichalcum"]).length; i++) {
                

                //
                ores_orichalcum[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["orichalcum"])[i]["y"], Object.values(Map["ores"]["orichalcum"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_orichalcum[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["orichalcum"]).length; i++) {
                if (map.hasLayer(ores_orichalcum[i]) == true) {
                    map.removeLayer(ores_orichalcum[i])
                }
            }
        }
    }


    // ores platinium
    var ores_platinium = [];
    function ores_platinium_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/platinium.0f102273.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["ores"]["platinium"]).length; i++) {
                

                //
                ores_platinium[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["platinium"])[i]["y"], Object.values(Map["ores"]["platinium"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_platinium[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["platinium"]).length; i++) {
                if (map.hasLayer(ores_platinium[i]) == true) {
                    map.removeLayer(ores_platinium[i])
                }
            }
        }
    }

    // ores saltpeter
    var ores_saltpeter = [];
    function ores_saltpeter_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/saltpeter.3bdaa1cd.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["ores"]["saltpeter"]).length; i++) {
               

                //
                ores_saltpeter[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["saltpeter"])[i]["y"], Object.values(Map["ores"]["saltpeter"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_saltpeter[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["saltpeter"]).length; i++) {
                if (map.hasLayer(ores_saltpeter[i]) == true) {
                    map.removeLayer(ores_saltpeter[i])
                }
            }
        }
    }

    // ores seeping_stone(oil)
    var ores_seeping_stone = [];
    function ores_seeping_stone_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/seeping_stone.6d73a538.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["ores"]["seeping_stone"]).length; i++) {
                

                //
                ores_seeping_stone[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["seeping_stone"])[i]["y"], Object.values(Map["ores"]["seeping_stone"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_seeping_stone[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["seeping_stone"]).length; i++) {
                if (map.hasLayer(ores_seeping_stone[i]) == true) {
                    map.removeLayer(ores_seeping_stone[i])
                }
            }
        }
    }

    // ores silver
    var ores_silver = [];
    function ores_silver_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/silver.3908b281.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["ores"]["silver"]).length; i++) {
                

                //
                ores_silver[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["silver"])[i]["y"], Object.values(Map["ores"]["silver"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_silver[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["silver"]).length; i++) {
                if (map.hasLayer(ores_silver[i]) == true) {
                    map.removeLayer(ores_silver[i])
                }
            }
        }
    }

    // ores starmetal
    var ores_starmetal = [];
    function ores_starmetal_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/ore/starmetal.24254c50.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["ores"]["starmetal"]).length; i++) {
                

                //
                ores_starmetal[i] = new L.canvasMarker(L.latLng(Object.values(Map["ores"]["starmetal"])[i]["y"], Object.values(Map["ores"]["starmetal"])[i]["x"]), {
                    img: {
                        url: greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                ores_starmetal[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["ores"]["starmetal"]).length; i++) {
                if (map.hasLayer(ores_starmetal[i]) == true) {
                    map.removeLayer(ores_starmetal[i])
                }
            }
        }
    }

    // spirit_shrine
    var Regions_Shrine = [];
    function Regions_Shrine_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/spirit_shrine.ba9326bb.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Othes["Regions"]["Shrine"]).length; i++) {
                Regions_Shrine[i] = new L.canvasMarker(L.latLng(Object.values(Othes["Regions"]["Shrine"])[i]["lat"], Object.values(Othes["Regions"]["Shrine"])[i]["lng"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/spirit_shrine.ba9326bb.png',    //image link
                        size: [30, 30],     //image size ( default [40, 40] )
                    },
                });
                Regions_Shrine[i].addTo(map);

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Othes["Regions"]["Shrine"]).length; i++) {
                if (map.hasLayer(Regions_Shrine[i]) == true) {
                    map.removeLayer(Regions_Shrine[i])
                }
            }
        }
    }





    // Expeditions 
    var Regions_amrine;
    var Regions_Barrows;
    var Regions_lazarus;
    var Regions_dynasty;
    var Regions_depths;
    var Regions_garden;
    function Regions_Expedition_F(x) {
        if (x == "yes") {

            // Expeditions amrine

            Regions_amrine = new L.canvasMarker(L.latLng(Object.values(Othes["Regions"]["Expeditions"])[0]["lat"], Object.values(Othes["Regions"]["Expeditions"])[0]["lng"]), {
                img: {
                    url: MainAdress + 'img/newworldmap/Expeditions/expedition_amrine.png',    //image link
                    size: [100, 100],     //image size ( default [40, 40] )
                },
            });
            
            Regions_amrine.bindPopup( Object.values(Othes["Regions"]["Expeditions"])[0]["name_en"], { permanent: true, className: "ancient", offset: [0, 85] }).openPopup();
            Regions_amrine.addTo(map);

            // Expeditions Starstone_Barrows

            Regions_Barrows = new L.canvasMarker(L.latLng(Object.values(Othes["Regions"]["Expeditions"])[1]["lat"], Object.values(Othes["Regions"]["Expeditions"])[1]["lng"]), {
                img: {
                    url: MainAdress + 'img/newworldmap/Expeditions/expedition_obelisk.png',    //image link
                    size: [100, 100],     //image size ( default [40, 40] )
                },
            });
            Regions_Barrows.bindPopup( Object.values(Othes["Regions"]["Expeditions"])[1]["name_en"], { permanent: true,  offset: [0, 85] }).openPopup();
            Regions_Barrows.addTo(map);

            // Expeditions the-lazarus-instrumentality
            Regions_lazarus = new L.canvasMarker(L.latLng(Object.values(Othes["Regions"]["Expeditions"])[2]["lat"], Object.values(Othes["Regions"]["Expeditions"])[2]["lng"]), {
                img: {
                    url: MainAdress + 'img/newworldmap/Expeditions/expedition_lazarus.png',    //image link
                    size: [100, 100],     //image size ( default [40, 40] )
                },
            });
            Regions_lazarus.bindPopup( Object.values(Othes["Regions"]["Expeditions"])[2]["name_en"], { permanent: true,  offset: [0, 85] }).openPopup();
            Regions_lazarus.addTo(map);

            // Expeditions dynasty-shipyard
            Regions_dynasty = new L.canvasMarker(L.latLng(Object.values(Othes["Regions"]["Expeditions"])[3]["lat"], Object.values(Othes["Regions"]["Expeditions"])[3]["lng"]), {
                img: {
                    url: MainAdress + 'img/newworldmap/Expeditions/expedition_shipyard.png',    //image link
                    size: [100, 100],     //image size ( default [40, 40] )
                },
            });
            Regions_dynasty.bindPopup( Object.values(Othes["Regions"]["Expeditions"])[3]["name_en"], { permanent: true,  offset: [0, 85] }).openPopup();
            Regions_dynasty.addTo(map);

            // Expeditions the-depths

            Regions_depths = new L.canvasMarker(L.latLng(Object.values(Othes["Regions"]["Expeditions"])[4]["lat"], Object.values(Othes["Regions"]["Expeditions"])[4]["lng"]), {
                img: {
                    url: MainAdress + 'img/newworldmap/Expeditions/expedition_depths.png',    //image link
                    size: [100, 100],     //image size ( default [40, 40] )
                },
            });
            Regions_depths.bindPopup( Object.values(Othes["Regions"]["Expeditions"])[4]["name_en"], { permanent: true,  offset: [0, 85] }).openPopup();
            Regions_depths.addTo(map);

            // Expeditions   the-garden-of-genesis

            Regions_garden = new L.canvasMarker(L.latLng(Object.values(Othes["Regions"]["Expeditions"])[5]["lat"], Object.values(Othes["Regions"]["Expeditions"])[5]["lng"]), {
                img: {
                    url: MainAdress + 'img/newworldmap/Expeditions/expedition_genesis.png',    //image link
                    size: [100, 100],     //image size ( default [40, 40] )
                },
            });
            Regions_garden.bindPopup( Object.values(Othes["Regions"]["Expeditions"])[5]["name_en"], { permanent: true,  offset: [0, 85] }).openPopup();
            Regions_garden.addTo(map);


        } else if (x == "no") {

            if (map.hasLayer(Regions_garden) == true) {
                map.removeLayer(Regions_amrine)
                map.removeLayer(Regions_Barrows)
                map.removeLayer(Regions_lazarus)
                map.removeLayer(Regions_dynasty)
                map.removeLayer(Regions_depths)
                map.removeLayer(Regions_garden)
            }

        }
    }

    // Outpost   
    var Regions_Outpost = [];
    function Regions_Outpost_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/outpost.png',
                iconSize: [100, 100], // size of the icon 
            });

            for (var i = 0; i < Object.keys(Othes["Regions"]["Outpost"]).length; i++) {
                Regions_Outpost[i] = new L.marker([Object.values(Othes["Regions"]["Outpost"])[i]["lat"], Object.values(Othes["Regions"]["Outpost"])[i]["lng"]], { icon: greenIcon }, { opacity: 0.01 });
                Regions_Outpost[i].bindTooltip(Object.values(Othes["Regions"]["Outpost"])[i]["name_en"], { permanent: true, className: "ancient", offset: [-50, 25] });
                Regions_Outpost[i].addTo(map);

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Othes["Regions"]["Outpost"]).length; i++) {
                if (map.hasLayer(Regions_Outpost[i]) == true) {
                    map.removeLayer(Regions_Outpost[i])
                }
            }
        }
    }

    // cities  

    var Regions_cities = [];
    function Regions_cities_F(x) {
        if (x == "yes") {
            var greenIcon = L.icon({
                iconUrl: MainAdress + 'img/newworldmap/township.a82ecdb8.png',
                iconSize: [100, 70], // size of the icon 
            });

            for (var i = 0; i < Object.keys(Othes["Regions"]["cities"]).length; i++) {
                Regions_cities[i] = new L.marker([Object.values(Othes["Regions"]["cities"])[i]["lat"], Object.values(Othes["Regions"]["cities"])[i]["lng"]], { icon: greenIcon }, { opacity: 0.01 });
                Regions_cities[i].bindTooltip(Object.values(Othes["Regions"]["cities"])[i]["name_en"], { permanent: true, className: "ancient", offset: [-60, 40] });
                Regions_cities[i].addTo(map);
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Othes["Regions"]["cities"]).length; i++) {
                if (map.hasLayer(Regions_cities[i]) == true) {
                    map.removeLayer(Regions_cities[i])
                }
            }
        }
    }

    // pois brightwood  
    var pois_brightwood = [];
    function pois_brightwood_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["pois"]["brightwood"]).length; i++) {

                if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                }
                else if (Object.values(Map["pois"]["brightwood"])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["brightwood"])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                }


              

                //
                pois_brightwood[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"]["brightwood"])[i]["y"], Object.values(Map["pois"]["brightwood"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });

                
                pois_brightwood[i].bindPopup( Object.values(Map["pois"]["brightwood"])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_brightwood[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["brightwood"]).length; i++) {
                if (map.hasLayer(pois_brightwood[i]) == true) {
                    map.removeLayer(pois_brightwood[i])
                }
            }
        }
    }


    // pois cutlass_keys  
    var pois_cutlass_keys = [];
    function pois_cutlass_keys_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["pois"]["cutlass_keys"]).length; i++) {

                if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


               

                //
                pois_cutlass_keys[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"]["cutlass_keys"])[i]["y"], Object.values(Map["pois"]["cutlass_keys"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_cutlass_keys[i].bindPopup( Object.values(Map["pois"]["cutlass_keys"])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_cutlass_keys[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["cutlass_keys"]).length; i++) {
                if (map.hasLayer(pois_cutlass_keys[i]) == true) {
                    map.removeLayer(pois_cutlass_keys[i])
                }
            }
        }
    }

    // pois ebonscale_reach  
    var pois_ebonscale_reach = [];
    function pois_ebonscale_reach_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["pois"]["ebonscale_reach"]).length; i++) {

                if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


                

                //
                pois_ebonscale_reach[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"]["ebonscale_reach"])[i]["y"], Object.values(Map["pois"]["ebonscale_reach"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_ebonscale_reach[i].bindPopup( Object.values(Map["pois"]["ebonscale_reach"])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_ebonscale_reach[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["ebonscale_reach"]).length; i++) {
                if (map.hasLayer(pois_ebonscale_reach[i]) == true) {
                    map.removeLayer(pois_ebonscale_reach[i])
                }
            }
        }
    }



    // pois edengrove  
    var pois_edengrove = [];
    function pois_edengrove_F(x) {
        if (x == "yes") {

            var citi_name = "edengrove";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


               

                //
                pois_edengrove[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_edengrove[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();

                pois_edengrove[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["edengrove"]).length; i++) {
                if (map.hasLayer(pois_edengrove[i]) == true) {
                    map.removeLayer(pois_edengrove[i])
                }
            }
        }
    }

    // pois everfall  
    var pois_everfall = [];
    function pois_everfall_F(x) {
        if (x == "yes") {

            var citi_name = "everfall";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


                

                //
                pois_everfall[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_everfall[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_everfall[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["everfall"]).length; i++) {
                if (map.hasLayer(pois_everfall[i]) == true) {
                    map.removeLayer(pois_everfall[i])
                }
            }
        }
    }


    // pois first_light  
    var pois_first_light = [];
    function pois_first_light_F(x) {
        if (x == "yes") {

            var citi_name = "first_light";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 86], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


                

                //
                pois_first_light[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_first_light[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_first_light[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["first_light"]).length; i++) {
                if (map.hasLayer(pois_first_light[i]) == true) {
                    map.removeLayer(pois_first_light[i])
                }
            }
        }
    }


    // pois great_cleave  
    var pois_great_cleave = [];
    function pois_great_cleave_F(x) {
        if (x == "yes") {

            var citi_name = "great_cleave";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 86], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "military_camp_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 107], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [67, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [64, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_compass") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [38, 22], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 46], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


               

                //
                pois_great_cleave[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_great_cleave[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_great_cleave[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["great_cleave"]).length; i++) {
                if (map.hasLayer(pois_great_cleave[i]) == true) {
                    map.removeLayer(pois_great_cleave[i])
                }
            }
        }
    }


    // pois cutlass_keys 
    var pois_monarchs_bluffs = [];
    function pois_monarchs_bluffs_F(x) {
        if (x == "yes") {

            var citi_name = "monarchs_bluffs";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 86], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "military_camp_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 107], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [67, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [64, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_compass") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [38, 22], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 46], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "farmingvillage") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 33], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


               
                //
                pois_monarchs_bluffs[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_monarchs_bluffs[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_monarchs_bluffs[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["monarchs_bluffs"]).length; i++) {
                if (map.hasLayer(pois_monarchs_bluffs[i]) == true) {
                    map.removeLayer(pois_monarchs_bluffs[i])
                }
            }
        }
    }



    // pois cutlass_keys  
    var pois_mourningdale = [];
    function pois_mourningdale_F(x) {
        if (x == "yes") {

            var citi_name = "mourningdale";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 86], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "military_camp_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 107], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [67, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [64, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_compass") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [38, 22], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 46], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "farmingvillage") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [69, 99], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


                

                //
                pois_mourningdale[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_mourningdale[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_mourningdale[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["mourningdale"]).length; i++) {
                if (map.hasLayer(pois_mourningdale[i]) == true) {
                    map.removeLayer(pois_mourningdale[i])
                }
            }
        }
    }


    // pois cutlass_keys  
    var pois_reekwater = [];
    function pois_reekwater_F(x) {
        if (x == "yes") {

            var citi_name = "reekwater";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 86], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "military_camp_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 107], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [67, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [64, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_compass") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [38, 22], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 46], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "farmingvillage") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [69, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 91], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


                

                //
                pois_reekwater[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_reekwater[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_reekwater[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["reekwater"]).length; i++) {
                if (map.hasLayer(pois_reekwater[i]) == true) {
                    map.removeLayer(pois_reekwater[i])
                }
            }
        }
    }


    // pois restless_shore 
    var pois_restless_shore = [];
    function pois_restless_shore_F(x) {
        if (x == "yes") {

            var citi_name = "restless_shore";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 86], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "military_camp_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 107], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [67, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [64, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_compass") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [38, 22], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 46], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "farmingvillage") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [69, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "rabbit") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "_tmp_icon") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [32, 32], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


               

                //
                pois_restless_shore[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_restless_shore[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_restless_shore[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["restless_shore"]).length; i++) {
                if (map.hasLayer(pois_restless_shore[i]) == true) {
                    map.removeLayer(pois_restless_shore[i])
                }
            }
        }
    }


    // pois shattered_mountai  
    var pois_shattered_mountai = [];
    function pois_shattered_mountai_F(x) {
        if (x == "yes") {

            var citi_name = "shattered_mountain";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 86], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "military_camp_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 107], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [67, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [64, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_compass") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [38, 22], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 46], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "farmingvillage") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [69, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "rabbit") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [108, 90], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [104, 90], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [93, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 91], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


                

                //
                pois_shattered_mountai[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_shattered_mountai[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_shattered_mountai[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["shattered_mountain"]).length; i++) {
                if (map.hasLayer(pois_shattered_mountai[i]) == true) {
                    map.removeLayer(pois_shattered_mountai[i])
                }
            }
        }
    }


    // pois weavers_fen  
    var pois_weavers_fen = [];
    function pois_weavers_fen_F(x) {
        if (x == "yes") {

            var citi_name = "weavers_fen";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 86], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "military_camp_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 107], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [67, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [64, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_compass") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [38, 22], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 46], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "farmingvillage") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [69, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "rabbit") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [108, 90], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [104, 90], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [93, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_mill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 59], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


                
                //
                pois_weavers_fen[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_weavers_fen[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_weavers_fen[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["weavers_fen"]).length; i++) {
                if (map.hasLayer(pois_weavers_fen[i]) == true) {
                    map.removeLayer(pois_weavers_fen[i])
                }
            }
        }
    }




    // pois windsward  
    var pois_windsward = [];
    function pois_windsward_F(x) {
        if (x == "yes") {

            var citi_name = "windsward";
            for (var i = 0; i < Object.keys(Map["pois"][citi_name]).length; i++) {


                if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [58, 34], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_buttress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grove") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [43, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "azure_tree") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"]["cutlass_keys"])[i]["icon"] + ".png",
                        iconSize: [48, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [75, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damned_mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [78, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [47, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fortress") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [49, 36], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "lumbermill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [92, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "township") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 70], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 87], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [52, 45], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [56, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 42], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_campsite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [50, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [71, 60], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "cave_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [57, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "wolf_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ore") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 31], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_sm_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_temple_lg") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [83, 53], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 57], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_malevolence_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [106, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_tower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 65], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "bear_elemental_den") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [73, 40], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_grovealtar") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [68, 64], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_village") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [74, 39], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [100, 52], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_spite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [120, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_cave") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [60, 37], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 38], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [118, 58], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "shattered_obelisk") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "watchtower") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 95], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lookout") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [23, 66], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [53, 86], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "military_camp_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 107], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [67, 56], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_shrine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [64, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_compass") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [38, 22], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [123, 46], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "fort_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 98], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "farmingvillage") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [90, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "ancient_lighthouse_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [69, 99], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_fishing_village_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [79, 92], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "angryearth_ruins_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [61, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "hero_shipwreck_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [88, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "rabbit") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [33, 33], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "outpost_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [108, 90], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "graveyard_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [55, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "damnedcapitalcity_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [104, 90], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandonedcity_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [93, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "mine_elite") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [87, 91], // size of the icon
                    });
                } else if (Object.values(Map["pois"][citi_name])[i]["icon"] == "abandoned_farm_mill") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        iconSize: [42, 59], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/pois/' + Object.values(Map["pois"][citi_name])[i]["icon"] + ".png",
                        // iconSize: [100, 70], // size of the icon
                    });
                }


                


                //
                pois_windsward[i] = new L.canvasMarker(L.latLng(Object.values(Map["pois"][citi_name])[i]["y"], Object.values(Map["pois"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                pois_windsward[i].bindPopup( Object.values(Map["pois"][citi_name])[i]["icon"].replace(/_/gi, ' '), { permanent: true,  offset: [0, 85] }).openPopup();
                pois_windsward[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["pois"]["windsward"]).length; i++) {
                if (map.hasLayer(pois_windsward[i]) == true) {
                    map.removeLayer(pois_windsward[i])
                }
            }
        }
    }




    // npc  brightwood
    var npc_brightwood = [];
    function npc_brightwood_F(x) {
        if (x == "yes") {

            var citi_name = "brightwood";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

               

                //
                npc_brightwood[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_brightwood[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_brightwood[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["brightwood"]).length; i++) {
                if (map.hasLayer(npc_brightwood[i]) == true) {
                    map.removeLayer(npc_brightwood[i])
                }
            }
        }
    }



    // npc  cutlass_keys
    var npc_cutlass_keys = [];
    function npc_cutlass_keys_F(x) {
        if (x == "yes") {

            var citi_name = "cutlass_keys";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }
                

                //
                npc_cutlass_keys[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_cutlass_keys[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_cutlass_keys[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["cutlass_keys"]).length; i++) {
                if (map.hasLayer(npc_cutlass_keys[i]) == true) {
                    map.removeLayer(npc_cutlass_keys[i])
                }
            }
        }
    }

    // npc  ebonscale_reach
    var npc_ebonscale_reach = [];
    function npc_ebonscale_reach_F(x) {
        if (x == "yes") {

            var citi_name = "ebonscale_reach";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }
                

                //
                npc_ebonscale_reach[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_ebonscale_reach[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_ebonscale_reach[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["ebonscale_reach"]).length; i++) {
                if (map.hasLayer(npc_ebonscale_reach[i]) == true) {
                    map.removeLayer(npc_ebonscale_reach[i])
                }
            }
        }
    }

    // npc  edengrove
    var npc_edengrove = [];
    function npc_edengrove_F(x) {
        if (x == "yes") {

            var citi_name = "edengrove";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }
               

                //
                npc_edengrove[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_edengrove[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_edengrove[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["edengrove"]).length; i++) {
                if (map.hasLayer(npc_edengrove[i]) == true) {
                    map.removeLayer(npc_edengrove[i])
                }
            }
        }
    }

    // npc  everfall
    var npc_everfall = [];
    function npc_everfall_F(x) {
        if (x == "yes") {

            var citi_name = "everfall";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }
               

                //
                npc_everfall[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_everfall[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_everfall[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["everfall"]).length; i++) {
                if (map.hasLayer(npc_everfall[i]) == true) {
                    map.removeLayer(npc_everfall[i])
                }
            }
        }
    }

    // npc  first_light
    var npc_first_light = [];
    function npc_first_light_F(x) {
        if (x == "yes") {

            var citi_name = "first_light";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

                

                //
                npc_first_light[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_first_light[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_first_light[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["first_light"]).length; i++) {
                if (map.hasLayer(npc_first_light[i]) == true) {
                    map.removeLayer(npc_first_light[i])
                }
            }
        }
    }

    // npc  great_cleave
    var npc_great_cleave = [];
    function npc_great_cleave_F(x) {
        if (x == "yes") {

            var citi_name = "great_cleave";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

                

                //
                npc_great_cleave[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_great_cleave[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_great_cleave[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["great_cleave"]).length; i++) {
                if (map.hasLayer(npc_great_cleave[i]) == true) {
                    map.removeLayer(npc_great_cleave[i])
                }
            }
        }
    }

    // npc  monarchs_bluffs
    var npc_monarchs_bluffs = [];
    function npc_monarchs_bluffs_F(x) {
        if (x == "yes") {

            var citi_name = "monarchs_bluffs";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

                

                //
                npc_monarchs_bluffs[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_monarchs_bluffs[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_monarchs_bluffs[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["monarchs_bluffs"]).length; i++) {
                if (map.hasLayer(npc_monarchs_bluffs[i]) == true) {
                    map.removeLayer(npc_monarchs_bluffs[i])
                }
            }
        }
    }

    // npc  mourningdale

    var npc_mourningdale = [];
    function npc_mourningdale_F(x) {
        if (x == "yes") {

            var citi_name = "mourningdale";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

                

                //
                npc_mourningdale[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_mourningdale[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_mourningdale[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["mourningdale"]).length; i++) {
                if (map.hasLayer(npc_mourningdale[i]) == true) {
                    map.removeLayer(npc_mourningdale[i])
                }
            }
        }
    }

    // npc reekwater
    var npc_reekwater = [];
    function npc_reekwater_F(x) {
        if (x == "yes") {

            var citi_name = "reekwater";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

                

                //
                npc_reekwater[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_reekwater[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_reekwater[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["reekwater"]).length; i++) {
                if (map.hasLayer(npc_reekwater[i]) == true) {
                    map.removeLayer(npc_reekwater[i])
                }
            }
        }
    }

    // npc restless_shore
    var npc_restless_shore = [];
    function npc_restless_shore_F(x) {
        if (x == "yes") {

            var citi_name = "restless_shore";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

                

                //
                npc_restless_shore[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_restless_shore[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_restless_shore[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["restless_shore"]).length; i++) {
                if (map.hasLayer(npc_restless_shore[i]) == true) {
                    map.removeLayer(npc_restless_shore[i])
                }
            }
        }
    }

    // npc shattered_mountain
    var npc_shattered_mountain = [];
    function npc_shattered_mountain_F(x) {
        if (x == "yes") {

            var citi_name = "shattered_mountain";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

                

                //
                npc_shattered_mountain[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_shattered_mountain[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_shattered_mountain[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["shattered_mountain"]).length; i++) {
                if (map.hasLayer(npc_shattered_mountain[i]) == true) {
                    map.removeLayer(npc_shattered_mountain[i])
                }
            }
        }
    }

    // npc weavers_fen
    var npc_weavers_fen = [];
    function npc_weavers_fen_F(x) {
        if (x == "yes") {

            var citi_name = "weavers_fen";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

               

                //
                npc_weavers_fen[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_weavers_fen[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_weavers_fen[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["weavers_fen"]).length; i++) {
                if (map.hasLayer(npc_weavers_fen[i]) == true) {
                    map.removeLayer(npc_weavers_fen[i])
                }
            }
        }
    }

    // npc windsward
    var npc_windsward = [];
    function npc_windsward_F(x) {
        if (x == "yes") {

            var citi_name = "windsward";
            for (var i = 0; i < Object.keys(Map["npc"][citi_name]).length; i++) {

                if (Object.values(Map["npc"][citi_name])[i]["icon"] == "generic") {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [30, 30], // size of the icon
                    });
                } else {
                    var greenIcon = L.icon({
                        iconUrl: 'img/newworldmap/npc/' + Object.values(Map["npc"][citi_name])[i]["icon"] + ".png",
                        iconSize: [40, 40], // size of the icon
                    });
                }

                

                //
                npc_windsward[i] = new L.canvasMarker(L.latLng(Object.values(Map["npc"][citi_name])[i]["y"], Object.values(Map["npc"][citi_name])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                npc_windsward[i].bindPopup( Object.values(Map["npc"][citi_name])[i]["name"].split('_')[1], { permanent: true,  offset: [0, 85] }).openPopup();
                npc_windsward[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["npc"]["windsward"]).length; i++) {
                if (map.hasLayer(npc_windsward[i]) == true) {
                    map.removeLayer(npc_windsward[i])
                }
            }
        }
    }



    // essences air air_boid
    var essences_air_boid = [];
    function essences_air_boid_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/air/air_boid.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["air_boid"]).length; i++) {
                

                //
                essences_air_boid[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["air_boid"])[i]["y"], Object.values(Map["essences"]["air_boid"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_air_boid[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["air_boid"]).length; i++) {
                if (map.hasLayer(essences_air_boid[i]) == true) {
                    map.removeLayer(essences_air_boid[i])
                }
            }
        }
    }

    // essences air air_plant
    var essences_air_plant = [];
    function essences_air_plant_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/air/air_plant.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["air_plant"]).length; i++) {
                

                //
                essences_air_plant[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["air_plant"])[i]["y"], Object.values(Map["essences"]["air_plant"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_air_plant[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["air_plant"]).length; i++) {
                if (map.hasLayer(essences_air_plant[i]) == true) {
                    map.removeLayer(essences_air_plant[i])
                }
            }
        }
    }

    // essences air air_stone
    var essences_air_stone = [];
    function essences_air_stone_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/air/air_stone.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["air_stone"]).length; i++) {
               

                //
                essences_air_stone[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["air_stone"])[i]["y"], Object.values(Map["essences"]["air_stone"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_air_stone[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["air_stone"]).length; i++) {
                if (map.hasLayer(essences_air_stone[i]) == true) {
                    map.removeLayer(essences_air_stone[i])
                }
            }
        }
    }

    // essences death death_boid
    var essences_death_boid = [];
    function essences_death_boid_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/death/death_boid.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["death_boid"]).length; i++) {
                

                //
                essences_death_boid[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["death_boid"])[i]["y"], Object.values(Map["essences"]["death_boid"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_death_boid[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["death_boid"]).length; i++) {
                if (map.hasLayer(essences_death_boid[i]) == true) {
                    map.removeLayer(essences_death_boid[i])
                }
            }
        }
    }

    // essences death death_plant
    var essences_death_plant = [];
    function essences_death_plant_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/death/death_plant.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["death_plant"]).length; i++) {
                

                //
                essences_death_plant[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["death_plant"])[i]["y"], Object.values(Map["essences"]["death_plant"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_death_plant[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["death_plant"]).length; i++) {
                if (map.hasLayer(essences_death_plant[i]) == true) {
                    map.removeLayer(essences_death_plant[i])
                }
            }
        }
    }


    // essences death death_plant
    var essences_death_stone = [];
    function essences_death_stone_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/death/death_stone.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["death_stone"]).length; i++) {
                

                //
                essences_death_stone[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["death_stone"])[i]["y"], Object.values(Map["essences"]["death_stone"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_death_stone[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["death_stone"]).length; i++) {
                if (map.hasLayer(essences_death_stone[i]) == true) {
                    map.removeLayer(essences_death_stone[i])
                }
            }
        }
    }

    // essences earth earth_boid
    var essences_earth_boid = [];
    function essences_earth_boid_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/earth/earth_boid.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["earth_boid"]).length; i++) {
               

                //
                essences_earth_boid[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["earth_boid"])[i]["y"], Object.values(Map["essences"]["earth_boid"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_earth_boid[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["earth_boid"]).length; i++) {
                if (map.hasLayer(essences_earth_boid[i]) == true) {
                    map.removeLayer(essences_earth_boid[i])
                }
            }
        }
    }

    // essences earth earth_plant
    var essences_earth_plant = [];
    function essences_earth_plant_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/earth/earth_plant.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["earth_plant"]).length; i++) {
                

                //
                essences_earth_plant[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["earth_plant"])[i]["y"], Object.values(Map["essences"]["earth_plant"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_earth_plant[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["earth_plant"]).length; i++) {
                if (map.hasLayer(essences_earth_plant[i]) == true) {
                    map.removeLayer(essences_earth_plant[i])
                }
            }
        }
    }


    // essences earth earth_plant
    var essences_earth_stone = [];
    function essences_earth_stone_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/earth/earth_stone.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["earth_stone"]).length; i++) {
                

                //
                essences_earth_stone[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["earth_stone"])[i]["y"], Object.values(Map["essences"]["earth_stone"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_earth_stone[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["earth_stone"]).length; i++) {
                if (map.hasLayer(essences_earth_stone[i]) == true) {
                    map.removeLayer(essences_earth_stone[i])
                }
            }
        }
    }

    // essences fire fire_boid
    var essences_fire_boid = [];
    function essences_fire_boid_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/fire/fire_boid.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["fire_boid"]).length; i++) {
               

                //
                essences_fire_boid[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["fire_boid"])[i]["y"], Object.values(Map["essences"]["fire_boid"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_fire_boid[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["fire_boid"]).length; i++) {
                if (map.hasLayer(essences_fire_boid[i]) == true) {
                    map.removeLayer(essences_fire_boid[i])
                }
            }
        }
    }

    // essences earth earth_plant
    var essences_fire_plant = [];
    function essences_fire_plant_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/fire/fire_plant.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["fire_plant"]).length; i++) {
               

                //
                essences_fire_plant[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["fire_plant"])[i]["y"], Object.values(Map["essences"]["fire_plant"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_fire_plant[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["fire_plant"]).length; i++) {
                if (map.hasLayer(essences_fire_plant[i]) == true) {
                    map.removeLayer(essences_fire_plant[i])
                }
            }
        }
    }


    // essences fire fire_plant
    var essences_fire_stone = [];
    function essences_fire_stone_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/fire/fire_stone.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["fire_stone"]).length; i++) {
               

                //
                essences_fire_stone[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["fire_stone"])[i]["y"], Object.values(Map["essences"]["fire_stone"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_fire_stone[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["fire_stone"]).length; i++) {
                if (map.hasLayer(essences_fire_stone[i]) == true) {
                    map.removeLayer(essences_fire_stone[i])
                }
            }
        }
    }

    // essences life life_boid
    var essences_life_boid = [];
    function essences_life_boid_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/life/life_boid.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["life_boid"]).length; i++) {
               

                //
                essences_life_boid[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["life_boid"])[i]["y"], Object.values(Map["essences"]["life_boid"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_life_boid[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["life_boid"]).length; i++) {
                if (map.hasLayer(essences_life_boid[i]) == true) {
                    map.removeLayer(essences_life_boid[i])
                }
            }
        }
    }
    // essences life life_plant
    var essences_life_plant = [];
    function essences_life_plant_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/life/life_plant.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["life_plant"]).length; i++) {
                

                //
                essences_life_plant[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["life_plant"])[i]["y"], Object.values(Map["essences"]["life_plant"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_life_plant[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["life_plant"]).length; i++) {
                if (map.hasLayer(essences_life_plant[i]) == true) {
                    map.removeLayer(essences_life_plant[i])
                }
            }
        }
    }


    // essences life life_plant
    var essences_life_stone = [];
    function essences_life_stone_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/life/life_stone.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["life_stone"]).length; i++) {
                

                //
                essences_life_stone[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["life_stone"])[i]["y"], Object.values(Map["essences"]["life_stone"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_life_stone[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["life_stone"]).length; i++) {
                if (map.hasLayer(essences_life_stone[i]) == true) {
                    map.removeLayer(essences_life_stone[i])
                }
            }
        }
    }

    // essences soul soul_boid
    var essences_soul_boid = [];
    function essences_soul_boid_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/soul/soul_boid.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["soul_boid"]).length; i++) {
               

                //
                essences_soul_boid[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["soul_boid"])[i]["y"], Object.values(Map["essences"]["soul_boid"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_soul_boid[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["soul_boid"]).length; i++) {
                if (map.hasLayer(essences_soul_boid[i]) == true) {
                    map.removeLayer(essences_soul_boid[i])
                }
            }
        }
    }

    // essences esoul esoul_plant
    var essences_soul_plant = [];
    function essences_soul_plant_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/soul/soul_plant.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["soul_plant"]).length; i++) {
               

                //
                essences_soul_plant[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["soul_plant"])[i]["y"], Object.values(Map["essences"]["soul_plant"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_soul_plant[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["soul_plant"]).length; i++) {
                if (map.hasLayer(essences_soul_plant[i]) == true) {
                    map.removeLayer(essences_soul_plant[i])
                }
            }
        }
    }


    // essences soul soul_plant
    var essences_soul_stone = [];
    function essences_soul_stone_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/soul/soul_stone.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["soul_stone"]).length; i++) {
                

                //
                essences_soul_stone[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["soul_stone"])[i]["y"], Object.values(Map["essences"]["soul_stone"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_soul_stone[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["soul_stone"]).length; i++) {
                if (map.hasLayer(essences_soul_stone[i]) == true) {
                    map.removeLayer(essences_soul_stone[i])
                }
            }
        }
    }

    // essences water water_boid
    var essences_water_boid = [];
    function essences_water_boid_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/water/water_boid.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["water_boid"]).length; i++) {
                

                //
                essences_water_boid[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["water_boid"])[i]["y"], Object.values(Map["essences"]["water_boid"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_water_boid[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["water_boid"]).length; i++) {
                if (map.hasLayer(essences_water_boid[i]) == true) {
                    map.removeLayer(essences_water_boid[i])
                }
            }
        }
    }

    // essences ewater ewater_plant
    var essences_water_plant = [];
    function essences_water_plant_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/water/water_plant.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["water_plant"]).length; i++) {
                

                //
                essences_water_plant[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["water_plant"])[i]["y"], Object.values(Map["essences"]["water_plant"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_water_plant[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["water_plant"]).length; i++) {
                if (map.hasLayer(essences_water_plant[i]) == true) {
                    map.removeLayer(essences_water_plant[i])
                }
            }
        }
    }


    // essences water water_plant
    var essences_water_stone = [];
    function essences_water_stone_F(x) {
        if (x == "yes") {

            var greenIcon = L.icon({
                iconUrl: 'img/newworldmap/essens/water/water_stone.png',
                iconSize: [30, 30], // size of the icon 
            });
            for (var i = 0; i < Object.keys(Map["essences"]["water_stone"]).length; i++) {
               

                //
                essences_water_stone[i] = new L.canvasMarker(L.latLng(Object.values(Map["essences"]["water_stone"])[i]["y"], Object.values(Map["essences"]["water_stone"])[i]["x"]), {
                    img: {
                        url: MainAdress + greenIcon.options.iconUrl,
                        size: [greenIcon.options.iconSize[0], greenIcon.options.iconSize[1]],
                    },
                });
                essences_water_stone[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["essences"]["water_stone"]).length; i++) {
                if (map.hasLayer(essences_water_stone[i]) == true) {
                    map.removeLayer(essences_water_stone[i])
                }
            }
        }
    }

    // monsters alligator
    var monsters_alligat = [];
    function monsters_alligator(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["alligator"]).length; i++) {


                //
                monsters_alligat[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["alligator"])[i]["y"], Object.values(Map["monsters"]["alligator"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/alligator.png',    //image link
                        size: [50, 25],     //image size ( default [40, 40] )
                    },
                });
                // console.log(Map["monsters"])
                

                monsters_alligat[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["alligator"]).length; i++) {
                if (map.hasLayer(monsters_alligat[i]) == true) {
                    map.removeLayer(monsters_alligat[i])
                }
            }
        }


    }


    // monsters bear
    var monsters_bea = [];
    function monsters_bear(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["bear"]).length; i++) {


                //
                monsters_bea[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["bear"])[i]["y"], Object.values(Map["monsters"]["bear"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/bear.png',    //image link
                        size: [45, 28.5],     //image size ( default [40, 40] )
                    },
                });
                monsters_bea[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["bear"]).length; i++) {
                if (map.hasLayer(monsters_bea[i]) == true) {
                    map.removeLayer(monsters_bea[i])
                }
            }
        }
    }

    // monsters bison
    var monsters_bison = [];
    function monsters_bison_F(x) {

        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["bison"]).length; i++) {


                //
                monsters_bison[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["bison"])[i]["y"], Object.values(Map["monsters"]["bison"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/bison.png',    //image link
                        size: [45, 28.5],     //image size ( default [40, 40] )
                    },
                });
                monsters_bison[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["bison"]).length; i++) {
                if (map.hasLayer(monsters_bison[i]) == true) {
                    map.removeLayer(monsters_bison[i])
                }
            }
        }


    }

    // monsters boar
    var monsters_boar = [];
    function monsters_boar_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["boar"]).length; i++) {


                //
                monsters_boar[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["boar"])[i]["y"], Object.values(Map["monsters"]["boar"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/boar.png',    //image link
                        size: [45, 30],     //image size ( default [40, 40] )
                    },
                });
                monsters_boar[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["boar"]).length; i++) {
                if (map.hasLayer(monsters_boar[i]) == true) {
                    map.removeLayer(monsters_boar[i])
                }
            }
        }
    }

    // monsters cow
    var monsters_cow = [];
    function monsters_cow_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["cow"]).length; i++) {


                //
                monsters_cow[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["cow"])[i]["y"], Object.values(Map["monsters"]["cow"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/cow.png',    //image link
                        size: [45, 27],     //image size ( default [40, 40] )
                    },
                });
                monsters_cow[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["cow"]).length; i++) {
                if (map.hasLayer(monsters_cow[i]) == true) {
                    map.removeLayer(monsters_cow[i])
                }
            }
        }
    }

    // monsters bear_elemental
    var monsters_bear_elemental = [];
    function monsters_bear_elemental_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["bear_elemental"]).length; i++) {


                //
                monsters_bear_elemental[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["bear_elemental"])[i]["y"], Object.values(Map["monsters"]["bear_elemental"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/bear_elemental.png',    //image link
                        size: [45, 27],     //image size ( default [40, 40] )
                    },
                });
                monsters_bear_elemental[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["bear_elemental"]).length; i++) {
                if (map.hasLayer(monsters_bear_elemental[i]) == true) {
                    map.removeLayer(monsters_bear_elemental[i])
                }
            }
        }
    }
    // monsters wolf_elemental
    var monsters_wolf_elemental = [];
    function monsters_wolf_elemental_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["wolf_elemental"]).length; i++) {


                //
                monsters_wolf_elemental[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["wolf_elemental"])[i]["y"], Object.values(Map["monsters"]["wolf_elemental"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/wolf_elemental.png',    //image link
                        size: [45, 30],     //image size ( default [40, 40] )
                    },
                });
                monsters_wolf_elemental[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["wolf_elemental"]).length; i++) {
                if (map.hasLayer(monsters_wolf_elemental[i]) == true) {
                    map.removeLayer(monsters_wolf_elemental[i])
                }
            }
        }
    }
    // monsters wolf
    var monsters_wolf = [];
    function monsters_wolf_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["wolf"]).length; i++) {


                //
                monsters_wolf[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["wolf"])[i]["y"], Object.values(Map["monsters"]["wolf"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/wolf.png',    //image link
                        size: [45, 30],     //image size ( default [40, 40] )
                    },
                });
                monsters_wolf[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["wolf"]).length; i++) {
                if (map.hasLayer(monsters_wolf[i]) == true) {
                    map.removeLayer(monsters_wolf[i])
                }
            }
        }
    }


    // monsters elk

    var monsters_elk = [];
    function monsters_elk_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["elk"]).length; i++) {

                //
                monsters_elk[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["elk"])[i]["y"], Object.values(Map["monsters"]["elk"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/elk.png',    //image link
                        size: [45, 45],     //image size ( default [40, 40] )
                    },
                });
                monsters_elk[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["elk"]).length; i++) {
                if (map.hasLayer(monsters_elk[i]) == true) {
                    map.removeLayer(monsters_elk[i])
                }
            }
        }
    }

    // monsters elk_elemental

    var monsters_elk_elemental = [];
    function monsters_elk_elemental_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["elk_elemental"]).length; i++) {


                //
                monsters_elk_elemental[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["elk_elemental"])[i]["y"], Object.values(Map["monsters"]["elk_elemental"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/elk_elemental.png',    //image link
                        size: [45, 45],     //image size ( default [40, 40] )
                    },
                });
                monsters_elk_elemental[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["elk_elemental"]).length; i++) {
                if (map.hasLayer(monsters_elk_elemental[i]) == true) {
                    map.removeLayer(monsters_elk_elemental[i])
                }
            }
        }
    }

    // monsters goat
    var monsters_goat = [];
    function monsters_goat_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["goat"]).length; i++) {


                //
                monsters_goat[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["goat"])[i]["y"], Object.values(Map["monsters"]["goat"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/goat.png',    //image link
                        size: [45, 40],     //image size ( default [40, 40] )
                    },
                });
                monsters_goat[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["goat"]).length; i++) {
                if (map.hasLayer(monsters_goat[i]) == true) {
                    map.removeLayer(monsters_goat[i])
                }
            }
        }
    }

    // monsters leopard
    var monsters_leopard = [];
    function monsters_leopard_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["leopard"]).length; i++) {


                //
                monsters_leopard[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["leopard"])[i]["y"], Object.values(Map["monsters"]["leopard"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/leopard.png',    //image link
                        size: [45, 22],     //image size ( default [40, 40] )
                    },
                });
                monsters_leopard[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["leopard"]).length; i++) {
                if (map.hasLayer(monsters_leopard[i]) == true) {
                    map.removeLayer(monsters_leopard[i])
                }
            }
        }
    }

    // monsters lion
    var monsters_lion = [];
    function monsters_lion_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["lion"]).length; i++) {


                //
                monsters_lion[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["lion"])[i]["y"], Object.values(Map["monsters"]["lion"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/lion.png',    //image link
                        size: [45, 22],     //image size ( default [40, 40] )
                    },
                });
                monsters_lion[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["lion"]).length; i++) {
                if (map.hasLayer(monsters_lion[i]) == true) {
                    map.removeLayer(monsters_lion[i])
                }
            }
        }
    }

    // monsters lynx
    var monsters_lynx = [];
    function monsters_lynx_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["lynx"]).length; i++) {


                //
                monsters_lynx[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["lynx"])[i]["y"], Object.values(Map["monsters"]["lynx"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/lynx.png',    //image link
                        size: [45, 22],     //image size ( default [40, 40] )
                    },
                });
                monsters_lynx[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["lynx"]).length; i++) {
                if (map.hasLayer(monsters_lynx[i]) == true) {
                    map.removeLayer(monsters_lynx[i])
                }
            }
        }
    }

    

    // monsters named
    var monsters_named = [];
    function monsters_named_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["named"]).length; i++) {
                //
                monsters_named[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["named"])[i]["y"], Object.values(Map["monsters"]["named"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/named.png',    //image link
                        size: [35, 35],     //image size ( default [40, 40] )
                    },
                });
                // console.log(Object.values(Map["monsters"]["named"])[i]["name"])
                // monsters_named[i].bindPopup( Object.values(Map["monsters"]["named"])[i]["name"], { permanent: true,  offset: [0, 85] }).openPopup();
                monsters_named[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["named"]).length; i++) {
                if (map.hasLayer(monsters_named[i]) == true) {
                    map.removeLayer(monsters_named[i])
                }
            }
        }
    }

    // monsters pig
    var monsters_pig = [];
    function monsters_pig_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["pig"]).length; i++) {
                //
                monsters_pig[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["pig"])[i]["y"], Object.values(Map["monsters"]["pig"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/pig.png',    //image link
                        size: [35, 21],     //image size ( default [40, 40] )
                    },
                });
                monsters_pig[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["pig"]).length; i++) {
                if (map.hasLayer(monsters_pig[i]) == true) {
                    map.removeLayer(monsters_pig[i])
                }
            }
        }
    }

    // monsters rabbit
    var monsters_rabbit = [];
    function monsters_rabbit_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["rabbit"]).length; i++) {
                //
                monsters_rabbit[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["rabbit"])[i]["y"], Object.values(Map["monsters"]["rabbit"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/rabbit.png',    //image link
                        size: [35, 27],     //image size ( default [40, 40] )
                    },
                });
                monsters_rabbit[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["rabbit"]).length; i++) {
                if (map.hasLayer(monsters_rabbit[i]) == true) {
                    map.removeLayer(monsters_rabbit[i])
                }
            }
        }
    }

    // monsters sheep
    var monsters_sheep = [];
    function monsters_sheep_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["sheep"]).length; i++) {
                //
                monsters_sheep[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["sheep"])[i]["y"], Object.values(Map["monsters"]["sheep"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/sheep.png',    //image link
                        size: [35, 24],     //image size ( default [40, 40] )
                    },
                });
                monsters_sheep[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["sheep"]).length; i++) {
                if (map.hasLayer(monsters_sheep[i]) == true) {
                    map.removeLayer(monsters_sheep[i])
                }
            }
        }
    }

    // monsters turkey
    var monsters_turkey = [];
    function monsters_turkey_F(x) {
        if (x == "yes") {

            for (var i = 0; i < Object.keys(Map["monsters"]["turkey"]).length; i++) {

                //
                monsters_turkey[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["turkey"])[i]["y"], Object.values(Map["monsters"]["turkey"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/turkey.png',    //image link
                        size: [30, 30],     //image size ( default [40, 40] )
                    },
                });
                monsters_turkey[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["turkey"]).length; i++) {
                if (map.hasLayer(monsters_turkey[i]) == true) {
                    map.removeLayer(monsters_turkey[i])
                }
            }
        }
    }

    // monsters turkey_nest
    var monsters_turkey_nest = [];
    function monsters_turkey_nest_F(x) {
        if (x == "yes") {
            
            for (var i = 0; i < Object.keys(Map["monsters"]["turkey_nest"]).length; i++) {
                

                //
                monsters_turkey_nest[i] = new L.canvasMarker(L.latLng(Object.values(Map["monsters"]["turkey_nest"])[i]["y"], Object.values(Map["monsters"]["turkey_nest"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/monsters/turkey_nest.png',    //image link
                        size: [30, 29],     //image size ( default [40, 40] )
                    },
                });
                monsters_turkey_nest[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["monsters"]["turkey_nest"]).length; i++) {
                if (map.hasLayer(monsters_turkey_nest[i]) == true) {
                    map.removeLayer(monsters_turkey_nest[i])
                }
            }
        }
    }

    // plants azoth_water
    var plants_azoth_water = [];
    function plants_azoth_water_F(x) {
        if (x == "yes") {

          
            for (var i = 0; i < Object.keys(Map["plants"]["azoth_water"]).length; i++) {
               

                //
                plants_azoth_water[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["azoth_water"])[i]["y"], Object.values(Map["plants"]["azoth_water"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/azoth_water.png',
                        size: [30, 30],
                    },
                });
                plants_azoth_water[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["azoth_water"]).length; i++) {
                if (map.hasLayer(plants_azoth_water[i]) == true) {
                    map.removeLayer(plants_azoth_water[i])
                }
            }
        }
    }


    // plants dye dye_plant_black
    var plants_dye_plant_black = [];
    function plants_dye_plant_black_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_black"]).length; i++) {
               

                //
                plants_dye_plant_black[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_black"])[i]["y"], Object.values(Map["plants"]["dye_plant_black"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_black.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_black[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_black"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_black[i]) == true) {
                    map.removeLayer(plants_dye_plant_black[i])
                }
            }
        }
    }

    // plants dye dye_plant_blue
    var plants_dye_plant_blue = [];
    function plants_dye_plant_blue_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_blue"]).length; i++) {
               
                //
                plants_dye_plant_blue[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_blue"])[i]["y"], Object.values(Map["plants"]["dye_plant_blue"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_blue.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_blue[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_blue"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_blue[i]) == true) {
                    map.removeLayer(plants_dye_plant_blue[i])
                }
            }
        }
    }

    // plants dye dye_plant_brown
    var plants_dye_plant_brown = [];
    function plants_dye_plant_brown_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_brown"]).length; i++) {
                

                //
                plants_dye_plant_brown[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_brown"])[i]["y"], Object.values(Map["plants"]["dye_plant_brown"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_brown.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_brown[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_brown"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_brown[i]) == true) {
                    map.removeLayer(plants_dye_plant_brown[i])
                }
            }
        }
    }

    // plants dye dye_plant_cyan
    var plants_dye_plant_cyan = [];
    function plants_dye_plant_cyan_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_cyan"]).length; i++) {
               

                //
                plants_dye_plant_cyan[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_cyan"])[i]["y"], Object.values(Map["plants"]["dye_plant_cyan"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_cyan.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_cyan[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_cyan"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_cyan[i]) == true) {
                    map.removeLayer(plants_dye_plant_cyan[i])
                }
            }
        }
    }



    // plants dye dye_plant_green
    var plants_dye_plant_green = [];
    function plants_dye_plant_green_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_green"]).length; i++) {
               

                //
                plants_dye_plant_green[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_green"])[i]["y"], Object.values(Map["plants"]["dye_plant_green"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_green.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_green[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_green"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_green[i]) == true) {
                    map.removeLayer(plants_dye_plant_green[i])
                }
            }
        }
    }

    // plants dye dye_plant_magenta
    var plants_dye_plant_magenta = [];
    function plants_dye_plant_magenta_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_magenta"]).length; i++) {
               

                //
                plants_dye_plant_magenta[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_magenta"])[i]["y"], Object.values(Map["plants"]["dye_plant_magenta"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_magenta.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_magenta[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_magenta"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_magenta[i]) == true) {
                    map.removeLayer(plants_dye_plant_magenta[i])
                }
            }
        }
    }

    // plants dye dye_plant_orange
    var plants_dye_plant_orange = [];
    function plants_dye_plant_orange_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_orange"]).length; i++) {
                

                //
                plants_dye_plant_orange[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_orange"])[i]["y"], Object.values(Map["plants"]["dye_plant_orange"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_orange.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_orange[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_orange"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_orange[i]) == true) {
                    map.removeLayer(plants_dye_plant_orange[i])
                }
            }
        }
    }

    // plants dye dye_plant_red
    var plants_dye_plant_red = [];
    function plants_dye_plant_red_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_red"]).length; i++) {
               

                //
                plants_dye_plant_red[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_red"])[i]["y"], Object.values(Map["plants"]["dye_plant_red"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_red.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_red[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_red"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_red[i]) == true) {
                    map.removeLayer(plants_dye_plant_red[i])
                }
            }
        }
    }

    // plants dye dye_plant_turquoise
    var plants_dye_plant_turquoise = [];
    function plants_dye_plant_turquoise_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_turquoise"]).length; i++) {
                

                //
                plants_dye_plant_turquoise[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_turquoise"])[i]["y"], Object.values(Map["plants"]["dye_plant_turquoise"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_turquoise.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_turquoise[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_turquoise"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_turquoise[i]) == true) {
                    map.removeLayer(plants_dye_plant_turquoise[i])
                }
            }
        }
    }

    // plants dye dye_plant_violet

    var plants_dye_plant_violet = [];
    function plants_dye_plant_violet_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_violet"]).length; i++) {
                

                //
                plants_dye_plant_violet[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_violet"])[i]["y"], Object.values(Map["plants"]["dye_plant_violet"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_violet.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_violet[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_violet"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_violet[i]) == true) {
                    map.removeLayer(plants_dye_plant_violet[i])
                }
            }
        }
    }

    // plants dye dye_plant_white
    var plants_dye_plant_white = [];
    function plants_dye_plant_white_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_white"]).length; i++) {
                

                //
                plants_dye_plant_white[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_white"])[i]["y"], Object.values(Map["plants"]["dye_plant_white"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_white.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_white[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_white"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_white[i]) == true) {
                    map.removeLayer(plants_dye_plant_white[i])
                }
            }
        }
    }

    // plants dye dye_plant_yellow
    var plants_dye_plant_yellow = [];
    function plants_dye_plant_yellow_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_yellow"]).length; i++) {
               

                //
                plants_dye_plant_yellow[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["dye_plant_yellow"])[i]["y"], Object.values(Map["plants"]["dye_plant_yellow"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/dye/dye_plant_yellow.png',
                        size: [35, 35],
                    },
                });
                plants_dye_plant_yellow[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["dye_plant_yellow"]).length; i++) {
                if (map.hasLayer(plants_dye_plant_yellow[i]) == true) {
                    map.removeLayer(plants_dye_plant_yellow[i])
                }
            }
        }
    }

    // plants hemp
    var plants_hemp = [];
    function plants_hemp_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["hemp"]).length; i++) {
               

                //
                plants_hemp[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["hemp"])[i]["y"], Object.values(Map["plants"]["hemp"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/hemp.png',
                        size: [35, 35],
                    },
                });
                plants_hemp[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["hemp"]).length; i++) {
                if (map.hasLayer(plants_hemp[i]) == true) {
                    map.removeLayer(plants_hemp[i])
                }
            }
        }
    }

    // plants hemp_t4
    var plants_hemp_t4 = [];
    function plants_hemp_t4_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["hemp_t4"]).length; i++) {
                
                //
                plants_hemp_t4[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["hemp_t4"])[i]["y"], Object.values(Map["plants"]["hemp_t4"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/hemp_t4.png',
                        size: [35, 35],
                    },
                });
                plants_hemp_t4[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["hemp_t4"]).length; i++) {
                if (map.hasLayer(plants_hemp_t4[i]) == true) {
                    map.removeLayer(plants_hemp_t4[i])
                }
            }
        }
    }

    // plants hemp_t5
    var plants_hemp_t5 = [];
    function plants_hemp_t5_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["hemp_t5"]).length; i++) {
                

                //
                plants_hemp_t5[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["hemp_t5"])[i]["y"], Object.values(Map["plants"]["hemp_t5"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/hemp_t5.png',
                        size: [35, 35],
                    },
                });
                plants_hemp_t5[i].addTo(map);
                //

            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["hemp_t5"]).length; i++) {
                if (map.hasLayer(plants_hemp_t5[i]) == true) {
                    map.removeLayer(plants_hemp_t5[i])
                }
            }
        }
    }

    // plants pigment_plant herb
    var plants_herb = [];
    function plants_herb_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["herb"]).length; i++) {
                

                //
                plants_herb[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["herb"])[i]["y"], Object.values(Map["plants"]["herb"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/herb.png',
                        size: [35, 35],
                    },
                });
                plants_herb[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["herb"]).length; i++) {
                if (map.hasLayer(plants_herb[i]) == true) {
                    map.removeLayer(plants_herb[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_black
    var pigment_plant_black = [];
    function pigment_plant_black_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_black"]).length; i++) {
               

                //
                pigment_plant_black[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_black"])[i]["y"], Object.values(Map["plants"]["pigment_plant_black"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_black.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_black[i].addTo(map);
                //

            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_black"]).length; i++) {
                if (map.hasLayer(pigment_plant_black[i]) == true) {
                    map.removeLayer(pigment_plant_black[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_blue_dark
    var pigment_plant_blue_dark = [];
    function pigment_plant_blue_dark_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_blue_dark"]).length; i++) {
               

                //
                pigment_plant_blue_dark[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_blue_dark"])[i]["y"], Object.values(Map["plants"]["pigment_plant_blue_dark"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_blue_dark.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_blue_dark[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_blue_dark"]).length; i++) {
                if (map.hasLayer(pigment_plant_blue_dark[i]) == true) {
                    map.removeLayer(pigment_plant_blue_dark[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_blue_light
    var pigment_plant_blue_light = [];
    function pigment_plant_blue_light_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_blue_light"]).length; i++) {
               

                //
                pigment_plant_blue_light[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_blue_light"])[i]["y"], Object.values(Map["plants"]["pigment_plant_blue_light"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_blue_light.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_blue_light[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_blue_light"]).length; i++) {
                if (map.hasLayer(pigment_plant_blue_light[i]) == true) {
                    map.removeLayer(pigment_plant_blue_light[i])
                }
            }
        }
    }



    // plants pigment_plant pigment_plant_brown
    var pigment_plant_brown = [];
    function pigment_plant_brown_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_brown"]).length; i++) {
               

                //
                pigment_plant_brown[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_brown"])[i]["y"], Object.values(Map["plants"]["pigment_plant_brown"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_brown.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_brown[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_brown"]).length; i++) {
                if (map.hasLayer(pigment_plant_brown[i]) == true) {
                    map.removeLayer(pigment_plant_brown[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_cyan
    var pigment_plant_cyan = [];
    function pigment_plant_cyan_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_cyan"]).length; i++) {
               

                //
                pigment_plant_cyan[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_cyan"])[i]["y"], Object.values(Map["plants"]["pigment_plant_cyan"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_cyan.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_cyan[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_cyan"]).length; i++) {
                if (map.hasLayer(pigment_plant_cyan[i]) == true) {
                    map.removeLayer(pigment_plant_cyan[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_green_dark
    var pigment_green_dark = [];
    function pigment_plant_green_dark_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_green_dark"]).length; i++) {
                

                //
                pigment_green_dark[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_green_dark"])[i]["y"], Object.values(Map["plants"]["pigment_plant_green_dark"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_green_dark.png',
                        size: [35, 35],
                    },
                });
                pigment_green_dark[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_green_dark"]).length; i++) {
                if (map.hasLayer(pigment_green_dark[i]) == true) {
                    map.removeLayer(pigment_green_dark[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_green_light
    var pigment_green_light = [];
    function pigment_plant_green_light_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_green_light"]).length; i++) {
                

                //
                pigment_green_light[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_green_light"])[i]["y"], Object.values(Map["plants"]["pigment_plant_green_light"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_green_light.png',
                        size: [35, 35],
                    },
                });
                pigment_green_light[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_green_light"]).length; i++) {
                if (map.hasLayer(pigment_green_light[i]) == true) {
                    map.removeLayer(pigment_green_light[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_magenta
    var pigment_plant_magenta = [];
    function pigment_plant_magenta_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_magenta"]).length; i++) {
                

                //
                pigment_plant_magenta[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_magenta"])[i]["y"], Object.values(Map["plants"]["pigment_plant_magenta"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_magenta.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_magenta[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_magenta"]).length; i++) {
                if (map.hasLayer(pigment_plant_magenta[i]) == true) {
                    map.removeLayer(pigment_plant_magenta[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_orange
    var pigment_plant_orange = [];
    function pigment_plant_orange_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_orange"]).length; i++) {
                

                //
                pigment_plant_orange[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_orange"])[i]["y"], Object.values(Map["plants"]["pigment_plant_orange"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_orange.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_orange[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_orange"]).length; i++) {
                if (map.hasLayer(pigment_plant_orange[i]) == true) {
                    map.removeLayer(pigment_plant_orange[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_pink
    var pigment_plant_pink = [];
    function pigment_plant_pink_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_pink"]).length; i++) {
               

                //
                pigment_plant_pink[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_pink"])[i]["y"], Object.values(Map["plants"]["pigment_plant_pink"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_pink.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_pink[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_pink"]).length; i++) {
                if (map.hasLayer(pigment_plant_pink[i]) == true) {
                    map.removeLayer(pigment_plant_pink[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_purple_dark
    var pigment_plant_purple_dark = [];
    function pigment_plant_purple_dark_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_purple_dark"]).length; i++) {
               

                //
                pigment_plant_purple_dark[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_purple_dark"])[i]["y"], Object.values(Map["plants"]["pigment_plant_purple_dark"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_purple_dark.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_purple_dark[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_purple_dark"]).length; i++) {
                if (map.hasLayer(pigment_plant_purple_dark[i]) == true) {
                    map.removeLayer(pigment_plant_purple_dark[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_red
    var pigment_plant_red = [];
    function pigment_plant_red_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_red"]).length; i++) {
                

                //
                pigment_plant_red[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_red"])[i]["y"], Object.values(Map["plants"]["pigment_plant_red"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_red.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_red[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_red"]).length; i++) {
                if (map.hasLayer(pigment_plant_red[i]) == true) {
                    map.removeLayer(pigment_plant_red[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_tan
    var pigment_plant_tan = [];
    function pigment_plant_tan_F(x) {
        if (x == "yes") {
            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_tan"]).length; i++) {
                

                //
                pigment_plant_tan[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_tan"])[i]["y"], Object.values(Map["plants"]["pigment_plant_tan"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_tan.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_tan[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_tan"]).length; i++) {
                if (map.hasLayer(pigment_plant_tan[i]) == true) {
                    map.removeLayer(pigment_plant_tan[i])
                }
            }
        }
    }

    // plants pigment_plant pigment_plant_white

    var pigment_plant_white = [];
    function pigment_plant_white_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_white"]).length; i++) {
                

                //
                pigment_plant_white[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_white"])[i]["y"], Object.values(Map["plants"]["pigment_plant_white"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_white.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_white[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_white"]).length; i++) {
                if (map.hasLayer(pigment_plant_white[i]) == true) {
                    map.removeLayer(pigment_plant_white[i])
                }
            }
        }
    }


    // plants pigment_plant pigment_plant_yellow
    var pigment_plant_yellow = [];
    function pigment_plant_yellow_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_yellow"]).length; i++) {
                

                //
                pigment_plant_yellow[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["pigment_plant_yellow"])[i]["y"], Object.values(Map["plants"]["pigment_plant_yellow"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/pigment_plant/pigment_plant_yellow.png',
                        size: [35, 35],
                    },
                });
                pigment_plant_yellow[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["pigment_plant_yellow"]).length; i++) {
                if (map.hasLayer(pigment_plant_yellow[i]) == true) {
                    map.removeLayer(pigment_plant_yellow[i])
                }
            }
        }
    }



    // plants cooking barley
    var barley = [];
    function plants_barley_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["barley"]).length; i++) {
                

                //
                barley[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["barley"])[i]["y"], Object.values(Map["plants"]["barley"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/barley.png',
                        size: [35, 35],
                    },
                });
                barley[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["barley"]).length; i++) {
                if (map.hasLayer(barley[i]) == true) {
                    map.removeLayer(barley[i])
                }
            }
        }
    }

    // plants cooking berry
    var berry = [];
    function plants_berry_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["berry"]).length; i++) {
               

                //
                berry[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["berry"])[i]["y"], Object.values(Map["plants"]["berry"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/berry.png',
                        size: [35, 35],
                    },
                });
                berry[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["berry"]).length; i++) {
                if (map.hasLayer(berry[i]) == true) {
                    map.removeLayer(berry[i])
                }
            }
        }
    }

    // plants cooking blueberry
    var blueberry = [];
    function plants_blueberry_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["blueberry"]).length; i++) {
                

                //
                blueberry[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["blueberry"])[i]["y"], Object.values(Map["plants"]["blueberry"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/blueberry.png',
                        size: [35, 35],
                    },
                });
                blueberry[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["blueberry"]).length; i++) {
                if (map.hasLayer(blueberry[i]) == true) {
                    map.removeLayer(blueberry[i])
                }
            }
        }
    }

    // plants cooking broccoli
    var broccoli = [];
    function plants_broccoli_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["broccoli"]).length; i++) {
                

                //
                broccoli[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["broccoli"])[i]["y"], Object.values(Map["plants"]["broccoli"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/broccoli.png',
                        size: [35, 35],
                    },
                });
                broccoli[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["broccoli"]).length; i++) {
                if (map.hasLayer(broccoli[i]) == true) {
                    map.removeLayer(broccoli[i])
                }
            }
        }
    }

    // plants cooking cabbage
    var cabbage = [];
    function plants_cabbage_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["cabbage"]).length; i++) {
                

                //
                cabbage[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["cabbage"])[i]["y"], Object.values(Map["plants"]["cabbage"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/cabbage.png',
                        size: [35, 35],
                    },
                });
                cabbage[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["cabbage"]).length; i++) {
                if (map.hasLayer(cabbage[i]) == true) {
                    map.removeLayer(cabbage[i])
                }
            }
        }
    }

    // plants cooking carrot
    var carrot = [];
    function plants_carrot_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["carrot"]).length; i++) {
                

                //
                carrot[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["carrot"])[i]["y"], Object.values(Map["plants"]["carrot"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/carrot.png',
                        size: [35, 35],
                    },
                });
                carrot[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["carrot"]).length; i++) {
                if (map.hasLayer(carrot[i]) == true) {
                    map.removeLayer(carrot[i])
                }
            }
        }
    }

    // plants cooking corn
    var corn = [];
    function plants_corn_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["corn"]).length; i++) {
                

                //
                corn[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["corn"])[i]["y"], Object.values(Map["plants"]["corn"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/corn.png',
                        size: [35, 35],
                    },
                });
                corn[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["corn"]).length; i++) {
                if (map.hasLayer(corn[i]) == true) {
                    map.removeLayer(corn[i])
                }
            }
        }
    }

    // plants cooking cranberry
    var cranberry = [];
    function plants_cranberries_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["cranberry"]).length; i++) {
               

                //
                cranberry[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["cranberry"])[i]["y"], Object.values(Map["plants"]["cranberry"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/cranberry.png',
                        size: [35, 35],
                    },
                });
                cranberry[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["cranberry"]).length; i++) {
                if (map.hasLayer(cranberry[i]) == true) {
                    map.removeLayer(cranberry[i])
                }
            }
        }
    }

    // plants cooking honey
    var honey = [];
    function plants_honey_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["honey"]).length; i++) {
                

                //
                honey[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["honey"])[i]["y"], Object.values(Map["plants"]["honey"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/honey.png',
                        size: [35, 35],
                    },
                });
                honey[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["honey"]).length; i++) {
                if (map.hasLayer(honey[i]) == true) {
                    map.removeLayer(honey[i])
                }
            }
        }
    }

    // plants cooking nut
    var nut = [];
    function plants_nut_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["nut"]).length; i++) {
               

                //
                nut[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["nut"])[i]["y"], Object.values(Map["plants"]["nut"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/nut.png',
                        size: [35, 35],
                    },
                });
                nut[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["nut"]).length; i++) {
                if (map.hasLayer(nut[i]) == true) {
                    map.removeLayer(nut[i])
                }
            }
        }
    }

    // plants cooking potato
    var potato = [];
    function plants_potato_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["potato"]).length; i++) {
                

                //
                potato[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["potato"])[i]["y"], Object.values(Map["plants"]["potato"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/potato.png',
                        size: [35, 35],
                    },
                });
                potato[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["potato"]).length; i++) {
                if (map.hasLayer(potato[i]) == true) {
                    map.removeLayer(potato[i])
                }
            }
        }
    }


    // plants cooking squash
    var squash = [];
    function plants_squash_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["plants"]["squash"]).length; i++) {
                

                //
                squash[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["squash"])[i]["y"], Object.values(Map["plants"]["squash"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/squash.png',
                        size: [35, 35],
                    },
                });
                squash[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["squash"]).length; i++) {
                if (map.hasLayer(squash[i]) == true) {
                    map.removeLayer(squash[i])
                }
            }
        }
    }

    // plants cooking strawberries
    var strawberries = [];
    function plants_strawberries_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["plants"]["strawberries"]).length; i++) {
                

                //
                strawberries[i] = new L.canvasMarker(L.latLng(Object.values(Map["plants"]["strawberries"])[i]["y"], Object.values(Map["plants"]["strawberries"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/plants/cooking/strawberries.png',
                        size: [35, 35],
                    },
                });
                strawberries[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["plants"]["strawberries"]).length; i++) {
                if (map.hasLayer(strawberries[i]) == true) {
                    map.removeLayer(strawberries[i])
                }
            }
        }
    }

    // chests alchemychest T1
    var chests_al1 = [];
    function chests_al1_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["al1"]).length; i++) {
                

                //
                chests_al1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["al1"])[i]["y"], Object.values(Map["chests"]["al1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/alchemychest/alchemychest_legendary_T1.png',
                        size: [35, 35],
                    },
                });
                chests_al1[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["al1"]).length; i++) {
                if (map.hasLayer(chests_al1[i]) == true) {
                    map.removeLayer(chests_al1[i])
                }
            }
        }
    }



    // chests alchemychest T1
    var chests_am1 = [];
    function chests_am1_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["am1"]).length; i++) {
                

                //
                chests_am1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["am1"])[i]["y"], Object.values(Map["chests"]["am1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/alchemychest/alchemychest_epic_T1.png',
                        size: [35, 35],
                    },
                });
                chests_am1[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["am1"]).length; i++) {
                if (map.hasLayer(chests_am1[i]) == true) {
                    map.removeLayer(chests_am1[i])
                }
            }
        }
    }

    // chests alchemychest T2
    var chests_am2 = [];
    function chests_am2_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["am2"]).length; i++) {
                

                //
                chests_am2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["am2"])[i]["y"], Object.values(Map["chests"]["am2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/alchemychest/alchemychest_epic_T2.png',
                        size: [35, 35],
                    },
                });
                chests_am2[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["am2"]).length; i++) {
                if (map.hasLayer(chests_am2[i]) == true) {
                    map.removeLayer(chests_am2[i])
                }
            }
        }
    }

    // chests alchemychest T2
    var chests_al2 = [];
    function chests_al2_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["al2"]).length; i++) {
                

                //
                chests_al2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["al2"])[i]["y"], Object.values(Map["chests"]["al2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/alchemychest/alchemychest_legendary_T2.png',
                        size: [35, 35],
                    },
                });
                chests_al2[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["al2"]).length; i++) {
                if (map.hasLayer(chests_al2[i]) == true) {
                    map.removeLayer(chests_al2[i])
                }
            }
        }
    }

    // chests alchemychest T3
    var chests_am3 = [];
    function chests_am3_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["am3"]).length; i++) {
                

                //
                chests_am3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["am3"])[i]["y"], Object.values(Map["chests"]["am3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/alchemychest/alchemychest_epic_T3.png',
                        size: [35, 35],
                    },
                });
                chests_am3[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["am3"]).length; i++) {
                if (map.hasLayer(chests_am3[i]) == true) {
                    map.removeLayer(chests_am3[i])
                }
            }
        }
    }

    // chests alchemychest T3
    var chests_al3 = [];
    function chests_al3_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["al3"]).length; i++) {
                

                //
                chests_al3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["al3"])[i]["y"], Object.values(Map["chests"]["al3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/alchemychest/alchemychest_legendary_T3.png',
                        size: [35, 35],
                    },
                });
                chests_al3[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["al3"]).length; i++) {
                if (map.hasLayer(chests_al3[i]) == true) {
                    map.removeLayer(chests_al3[i])
                }
            }
        }
    }


    // chests provision T1
    var chests_cl1 = [];
    function chests_cl1_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["cl1"]).length; i++) {
                

                //
                chests_cl1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["cl1"])[i]["y"], Object.values(Map["chests"]["cl1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/provision/crate_legendary_T1.png',
                        size: [35, 35],
                    },
                });
                chests_cl1[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["cl1"]).length; i++) {
                if (map.hasLayer(chests_cl1[i]) == true) {
                    map.removeLayer(chests_cl1[i])
                }
            }
        }
    }

    // chests provision T1
    var chests_cm1 = [];
    function chests_cm1_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["cm1"]).length; i++) {
               

                //
                chests_cm1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["cm1"])[i]["y"], Object.values(Map["chests"]["cm1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/provision/crate_epic_T1.png',
                        size: [35, 35],
                    },
                });
                chests_cm1[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["cm1"]).length; i++) {
                if (map.hasLayer(chests_cm1[i]) == true) {
                    map.removeLayer(chests_cm1[i])
                }
            }
        }
    }

    // chests provision T1
    var chests_cs1 = [];
    function chests_cs1_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["cs1"]).length; i++) {
                

                //
                chests_cs1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["cs1"])[i]["y"], Object.values(Map["chests"]["cs1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/provision/crate_common_T1.png',
                        size: [35, 35],
                    },
                });
                chests_cs1[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["cs1"]).length; i++) {
                if (map.hasLayer(chests_cs1[i]) == true) {
                    map.removeLayer(chests_cs1[i])
                }
            }
        }
    }

    // chests provision T2
    var chests_cl2 = [];
    function chests_cl2_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["cl2"]).length; i++) {
                

                //
                chests_cl2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["cl2"])[i]["y"], Object.values(Map["chests"]["cl2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/provision/crate_legendary_T2.png',
                        size: [35, 35],
                    },
                });
                chests_cl2[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["cl2"]).length; i++) {
                if (map.hasLayer(chests_cl2[i]) == true) {
                    map.removeLayer(chests_cl2[i])
                }
            }
        }
    }

    // chests provision T2

    var chests_cm2 = [];
    function chests_cm2_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["cm2"]).length; i++) {
               

                //
                chests_cm2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["cm2"])[i]["y"], Object.values(Map["chests"]["cm2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/provision/crate_epic_T2.png',
                        size: [35, 35],
                    },
                });
                chests_cm2[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["cm2"]).length; i++) {
                if (map.hasLayer(chests_cm2[i]) == true) {
                    map.removeLayer(chests_cm2[i])
                }
            }
        }
    }

    // chests provision T3
    var chests_cl3 = [];
    function chests_cl3_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["cl3"]).length; i++) {
               

                //
                chests_cl3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["cl3"])[i]["y"], Object.values(Map["chests"]["cl3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/provision/crate_legendary_T3.png',
                        size: [35, 35],
                    },
                });
                chests_cl3[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["cl3"]).length; i++) {
                if (map.hasLayer(chests_cl3[i]) == true) {
                    map.removeLayer(chests_cl3[i])
                }
            }
        }
    }

    // chests provision T3
    var chests_cm3 = [];
    function chests_cm3_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["cl3"]).length; i++) {
                

                //
                chests_cm3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["cm3"])[i]["y"], Object.values(Map["chests"]["cm3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/provision/crate_epic_T3.png',
                        size: [35, 35],
                    },
                });
                chests_cm3[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["cm3"]).length; i++) {
                if (map.hasLayer(chests_cm3[i]) == true) {
                    map.removeLayer(chests_cm3[i])
                }
            }
        }
    }

    // chests ancient T1
    var chests_ol1 = [];
    function chests_ol1_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["ol1"]).length; i++) {
               

                //
                chests_ol1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["ol1"])[i]["y"], Object.values(Map["chests"]["ol1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_legendary_T1.png',
                        size: [35, 35],
                    },
                });
                chests_ol1[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["ol1"]).length; i++) {
                if (map.hasLayer(chests_ol1[i]) == true) {
                    map.removeLayer(chests_ol1[i])
                }
            }
        }
    }


    // chests ancient T1
    var chests_om1 = [];
    function chests_om1_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["om1"]).length; i++) {
                

                //
                chests_om1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["om1"])[i]["y"], Object.values(Map["chests"]["om1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_epic_T1.png',
                        size: [35, 35],
                    },
                });
                chests_om1[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["om1"]).length; i++) {
                if (map.hasLayer(chests_om1[i]) == true) {
                    map.removeLayer(chests_om1[i])
                }
            }
        }
    }

    // chests ancient T1
    var chests_os1 = [];
    function chests_os1_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["os1"]).length; i++) {
               

                //
                chests_os1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["os1"])[i]["y"], Object.values(Map["chests"]["os1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_common_T1.png',
                        size: [35, 35],
                    },
                });
                chests_os1[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["os1"]).length; i++) {
                if (map.hasLayer(chests_os1[i]) == true) {
                    map.removeLayer(chests_os1[i])
                }
            }
        }
    }

    // chests ancient T2
    var chests_ol2 = [];
    function chests_ol2_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["ol2"]).length; i++) {
                

                //
                chests_ol2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["ol2"])[i]["y"], Object.values(Map["chests"]["ol2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_legendary_T2.png',
                        size: [35, 35],
                    },
                });
                chests_ol2[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["ol2"]).length; i++) {
                if (map.hasLayer(chests_ol2[i]) == true) {
                    map.removeLayer(chests_ol2[i])
                }
            }
        }
    }

    // chests ancient T2
    var chests_om2 = [];
    function chests_om2_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["om2"]).length; i++) {
               

                //
                chests_om2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["om2"])[i]["y"], Object.values(Map["chests"]["om2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_epic_T2.png',
                        size: [35, 35],
                    },
                });
                chests_om2[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["om2"]).length; i++) {
                if (map.hasLayer(chests_om2[i]) == true) {
                    map.removeLayer(chests_om2[i])
                }
            }
        }
    }

    // chests ancient T2
    var chests_os2 = [];
    function chests_os2_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["os2"]).length; i++) {
                

                //
                chests_os2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["os2"])[i]["y"], Object.values(Map["chests"]["os2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_common_T2.png',
                        size: [35, 35],
                    },
                });
                chests_os2[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["os2"]).length; i++) {
                if (map.hasLayer(chests_os2[i]) == true) {
                    map.removeLayer(chests_os2[i])
                }
            }
        }
    }

    // chests ancient T3
    var chests_ol3 = [];
    function chests_ol3_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["ol3"]).length; i++) {
                

                //
                chests_ol3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["ol3"])[i]["y"], Object.values(Map["chests"]["ol3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_legendary_T3.png',
                        size: [35, 35],
                    },
                });
                chests_ol3[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["ol3"]).length; i++) {
                if (map.hasLayer(chests_ol3[i]) == true) {
                    map.removeLayer(chests_ol3[i])
                }
            }
        }
    }

    // chests ancient T3
    var chests_om3 = [];
    function chests_om3_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["om3"]).length; i++) {
               

                //
                chests_om3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["om3"])[i]["y"], Object.values(Map["chests"]["om3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_epic_T3.png',
                        size: [35, 35],
                    },
                });
                chests_om3[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["om3"]).length; i++) {
                if (map.hasLayer(chests_om3[i]) == true) {
                    map.removeLayer(chests_om3[i])
                }
            }
        }
    }

    // chests ancient T3
    var chests_os3 = [];
    function chests_os3_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["os3"]).length; i++) {
                
                //
                chests_os3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["os3"])[i]["y"], Object.values(Map["chests"]["os3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_common_T3.png',
                        size: [35, 35],
                    },
                });
                chests_os3[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["os3"]).length; i++) {
                if (map.hasLayer(chests_os3[i]) == true) {
                    map.removeLayer(chests_os3[i])
                }
            }
        }
    }



    // chests ancient T4
    var chests_oe4 = [];
    function chests_oe4_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["oe4"]).length; i++) {
                

                //
                chests_oe4[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["oe4"])[i]["y"], Object.values(Map["chests"]["oe4"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_legendary_T4_elite.png',
                        size: [35, 35],
                    },
                });
                chests_oe4[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["oe4"]).length; i++) {
                if (map.hasLayer(chests_oe4[i]) == true) {
                    map.removeLayer(chests_oe4[i])
                }
            }
        }
    }

    // chests ancient T5
    var chests_oe5 = [];
    function chests_oe5_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["oe5"]).length; i++) {
                

                //
                chests_oe5[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["oe5"])[i]["y"], Object.values(Map["chests"]["oe5"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/ancient/ancientchest_legendary_T5_elite.png',
                        size: [35, 35],
                    },
                });
                chests_oe5[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["oe5"]).length; i++) {
                if (map.hasLayer(chests_oe5[i]) == true) {
                    map.removeLayer(chests_oe5[i])
                }
            }
        }
    }

    // chests supply T1
    var chests_sl1 = [];
    function chests_sl1_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["sl1"]).length; i++) {
                

                //
                chests_sl1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["sl1"])[i]["y"], Object.values(Map["chests"]["sl1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_legendary_T1.png',
                        size: [35, 35],
                    },
                });
                chests_sl1[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["sl1"]).length; i++) {
                if (map.hasLayer(chests_sl1[i]) == true) {
                    map.removeLayer(chests_sl1[i])
                }
            }
        }
    }

    // chests supply T1
    var chests_sm1 = [];
    function chests_sm1_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["sm1"]).length; i++) {
                

                //
                chests_sm1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["sm1"])[i]["y"], Object.values(Map["chests"]["sm1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_epic_T1.png',
                        size: [35, 35],
                    },
                });
                chests_sm1[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["sm1"]).length; i++) {
                if (map.hasLayer(chests_sm1[i]) == true) {
                    map.removeLayer(chests_sm1[i])
                }
            }
        }
    }

    // chests supply T1
    var chests_ss1 = [];
    function chests_ss1_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["ss1"]).length; i++) {
               

                //
                chests_ss1[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["ss1"])[i]["y"], Object.values(Map["chests"]["ss1"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_common_T1.png',
                        size: [35, 35],
                    },
                });
                chests_ss1[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["ss1"]).length; i++) {
                if (map.hasLayer(chests_ss1[i]) == true) {
                    map.removeLayer(chests_ss1[i])
                }
            }
        }
    }

    // chests supply T2
    var chests_sl2 = [];
    function chests_sl2_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["sl2"]).length; i++) {
                

                //
                chests_sl2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["sl2"])[i]["y"], Object.values(Map["chests"]["sl2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_legendary_T2.png',
                        size: [35, 35],
                    },
                });
                chests_sl2[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["sl2"]).length; i++) {
                if (map.hasLayer(chests_sl2[i]) == true) {
                    map.removeLayer(chests_sl2[i])
                }
            }
        }
    }

    // chests supply T2
    var chests_sm2 = [];
    function chests_sm2_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["sm2"]).length; i++) {
                

                //
                chests_sm2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["sm2"])[i]["y"], Object.values(Map["chests"]["sm2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_epic_T2.png',
                        size: [35, 35],
                    },
                });
                chests_sm2[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["sm2"]).length; i++) {
                if (map.hasLayer(chests_sm2[i]) == true) {
                    map.removeLayer(chests_sm2[i])
                }
            }
        }
    }

    // chests supply T2
    var chests_ss2 = [];
    function chests_ss2_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["ss2"]).length; i++) {
                

                //
                chests_ss2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["ss2"])[i]["y"], Object.values(Map["chests"]["ss2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_common_T2.png',
                        size: [35, 35],
                    },
                });
                chests_ss2[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["ss2"]).length; i++) {
                if (map.hasLayer(chests_ss2[i]) == true) {
                    map.removeLayer(chests_ss2[i])
                }
            }
        }
    }

    // chests supply T2
    var chests_se2 = [];
    function chests_se2_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["se2"]).length; i++) {
               

                //
                chests_se2[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["se2"])[i]["y"], Object.values(Map["chests"]["se2"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_legendary_T2_elite.png',
                        size: [35, 35],
                    },
                });
                chests_se2[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["se2"]).length; i++) {
                if (map.hasLayer(chests_se2[i]) == true) {
                    map.removeLayer(chests_se2[i])
                }
            }
        }
    }

    // chests supply T3
    var chests_sl3 = [];
    function chests_sl3_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["sl3"]).length; i++) {
              

                //
                chests_sl3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["sl3"])[i]["y"], Object.values(Map["chests"]["sl3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_legendary_T3.png',
                        size: [35, 35],
                    },
                });
                chests_sl3[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["sl3"]).length; i++) {
                if (map.hasLayer(chests_sl3[i]) == true) {
                    map.removeLayer(chests_sl3[i])
                }
            }
        }
    }

    // chests supply T3
    var chests_sm3 = [];
    function chests_sm3_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["sm3"]).length; i++) {
               

                //
                chests_sm3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["sm3"])[i]["y"], Object.values(Map["chests"]["sm3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_epic_T3.png',
                        size: [35, 35],
                    },
                });
                chests_sm3[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["sm3"]).length; i++) {
                if (map.hasLayer(chests_sm3[i]) == true) {
                    map.removeLayer(chests_sm3[i])
                }
            }
        }
    }

    // chests supply T3
    var chests_ss3 = [];
    function chests_ss3_F(x) {
        if (x == "yes") {

           
            for (var i = 0; i < Object.keys(Map["chests"]["ss3"]).length; i++) {
               

                //
                chests_ss3[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["ss3"])[i]["y"], Object.values(Map["chests"]["ss3"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_common_T3.png',
                        size: [35, 35],
                    },
                });
                chests_ss3[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["ss3"]).length; i++) {
                if (map.hasLayer(chests_ss3[i]) == true) {
                    map.removeLayer(chests_ss3[i])
                }
            }
        }
    }

    // chests supply T4
    var chests_se4 = [];
    function chests_se4_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["se4"]).length; i++) {
                

                //
                chests_se4[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["se4"])[i]["y"], Object.values(Map["chests"]["se4"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_legendary_T4_elite.png',
                        size: [35, 35],
                    },
                });
                chests_se4[i].addTo(map);
                //
            }

        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["se4"]).length; i++) {
                if (map.hasLayer(chests_se4[i]) == true) {
                    map.removeLayer(chests_se4[i])
                }
            }
        }
    }

    // chests supply T5
    var chests_se5 = [];
    function chests_se5_F(x) {
        if (x == "yes") {

            
            for (var i = 0; i < Object.keys(Map["chests"]["se5"]).length; i++) {
               

                //
                chests_se5[i] = new L.canvasMarker(L.latLng(Object.values(Map["chests"]["se5"])[i]["y"], Object.values(Map["chests"]["se5"])[i]["x"]), {
                    img: {
                        url: MainAdress + 'img/newworldmap/chests/supply/supplychest_legendary_T5_elite.png',
                        size: [35, 35],
                    },
                });
                chests_se5[i].addTo(map);
                //
            }
        } else if (x == "no") {
            for (var i = 0; i < Object.keys(Map["chests"]["se5"]).length; i++) {
                if (map.hasLayer(chests_se5[i]) == true) {
                    map.removeLayer(chests_se5[i])
                }
            }
        }
    }

    // Интерфейс
    $(".map__arrow").on("click", function (event) {
        event.preventDefault();
        $(".map__arrow ").toggleClass("map__arrow-active");
        $(".map ").toggleClass("map-active");
        if ($(".map__equalizer ").hasClass("displ")) {
            $(".map__equalizer ").removeClass("displ");
            function timeS() {
                $(".map__box ").removeClass("displ-none");
            }
            setTimeout(timeS, 300);
        } else {
            function timeS() {
                $(".map__equalizer ").addClass("displ");
            }
            setTimeout(timeS, 300);
            $(".map__box ").addClass("displ-none");
        }


    });

    $(".map__equalizer").on("click", function (event) {
        event.preventDefault();
        $(".map__arrow ").toggleClass("map__arrow-active");
        $(".map ").toggleClass("map-active");
        if ($(".map__equalizer ").hasClass("displ")) {
            $(".map__equalizer ").removeClass("displ");
            function timeS() {
                $(".map__box ").removeClass("displ-none");
            }
            setTimeout(timeS, 300);
        } else {
            function timeS() {
                $(".map__equalizer ").addClass("displ");
            }
            setTimeout(timeS, 300);
            $(".map__box ").addClass("displ-none");
        }

    });

    // allclose

    $("#allclose").on("click", function (event) {
        event.preventDefault();
        $(".map__checkbox ").removeClass("map__checkbox-active");

        // monsters
        monsters_alligator("no")
        monsters_bear("no")
        monsters_bison_F("no")
        monsters_boar_F("no")
        monsters_cow_F("no")
        monsters_bear_elemental_F("no")
        monsters_wolf_elemental_F("no")
        monsters_wolf_F("no")
        monsters_elk_F("no")
        monsters_elk_elemental_F("no")
        monsters_goat_F("no")
        monsters_leopard_F("no")
        monsters_lion_F("no")
        monsters_lynx_F("no")
        monsters_named_F("no")
        monsters_pig_F("no")
        monsters_rabbit_F("no")
        monsters_sheep_F("no")
        monsters_turkey_F("no")
        monsters_turkey_nest_F("no")
        Regions_cities_F("no")
        Regions_Expedition_F("no")
        Regions_Outpost_F("no")
        Regions_Shrine_F("no")
        chests_ol1_F("no")
        chests_om1_F("no")
        chests_os1_F("no")
        chests_ol2_F("no")
        chests_om2_F("no")
        chests_os2_F("no")
        chests_ol3_F("no")
        chests_om3_F("no")
        chests_os3_F("no")
        chests_oe4_F("no")
        chests_oe5_F("no")
        chests_sl1_F("no")
        chests_sm1_F("no")
        chests_ss1_F("no")
        chests_sl2_F("no")
        chests_sm2_F("no")
        chests_ss2_F("no")
        chests_se2_F("no")
        chests_sl3_F("no")
        chests_sm3_F("no")
        chests_ss3_F("no")
        chests_se4_F("no")
        chests_se5_F("no")
        chests_al1_F("no")
        chests_am1_F("no")
        chests_am2_F("no")
        chests_al2_F("no")
        chests_am3_F("no")
        chests_al3_F("no")
        chests_cl1_F("no")
        chests_cm1_F("no")
        chests_cs1_F("no")
        chests_cl2_F("no")
        chests_cm2_F("no")
        chests_cl3_F("no")
        chests_cm3_F("no")
        plants_azoth_water_F("no")
        plants_dye_plant_black_F("no")
        plants_dye_plant_blue_F("no")
        plants_dye_plant_brown_F("no")
        plants_dye_plant_cyan_F("no")
        plants_dye_plant_green_F("no")
        plants_dye_plant_magenta_F("no")
        plants_dye_plant_orange_F("no")
        plants_dye_plant_red_F("no")
        plants_dye_plant_turquoise_F("no")
        plants_dye_plant_violet_F("no")
        plants_dye_plant_white_F("no")
        plants_dye_plant_yellow_F("no")
        plants_hemp_F("no")
        plants_hemp_t4_F("no")
        plants_hemp_t5_F("no")
        plants_herb_F("no")
        pigment_plant_black_F("no")
        pigment_plant_brown_F("no")
        pigment_plant_cyan_F("no")
        pigment_plant_white_F("no")
        pigment_plant_red_F("no")
        pigment_plant_green_light_F("no")
        pigment_plant_tan_F("no")
        pigment_plant_green_dark_F("no")
        pigment_plant_yellow_F("no")
        pigment_plant_blue_light_F("no")
        pigment_plant_pink_F("no")
        pigment_plant_blue_dark_F("no")
        pigment_plant_orange_F("no")
        pigment_plant_magenta_F("no")
        pigment_plant_purple_dark_F("no")
        plants_barley_F("no")
        plants_berry_F("no")
        plants_blueberry_F("no")
        plants_broccoli_F("no")
        plants_cabbage_F("no")
        plants_carrot_F("no")
        plants_corn_F("no")
        plants_cranberries_F("no")
        plants_honey_F("no")
        plants_nut_F("no")
        plants_potato_F("no")
        plants_squash_F("no")
        plants_strawberries_F("no")
        pois_brightwood_F("no")
        pois_cutlass_keys_F("no")
        pois_ebonscale_reach_F("no")
        pois_edengrove_F("no")
        pois_everfall_F("no")
        pois_first_light_F("no")
        pois_great_cleave_F("no")
        pois_monarchs_bluffs_F("no")
        pois_mourningdale_F("no")
        pois_reekwater_F("no")
        pois_restless_shore_F("no")
        pois_shattered_mountai_F("no")
        pois_weavers_fen_F("no")
        pois_windsward_F("no")
        npc_brightwood_F("no")
        npc_cutlass_keys_F("no")
        npc_ebonscale_reach_F("no")
        npc_edengrove_F("no")
        npc_everfall_F("no")
        npc_first_light_F("no")
        npc_great_cleave_F("no")
        npc_monarchs_bluffs_F("no")
        npc_mourningdale_F("no")
        npc_reekwater_F("no")
        npc_restless_shore_F("no")
        npc_shattered_mountain_F("no")
        npc_weavers_fen_F("no")
        npc_windsward_F("no")
        essences_air_plant_F("no")
        essences_air_stone_F("no")
        essences_air_boid_F("no")
        essences_death_plant_F("no")
        essences_death_stone_F("no")
        essences_death_boid_F("no")
        essences_earth_plant_F("no")
        essences_earth_stone_F("no")
        essences_earth_boid_F("no")
        essences_fire_plant_F("no")
        essences_fire_stone_F("no")
        essences_fire_boid_F("no")
        essences_life_plant_F("no")
        essences_life_stone_F("no")
        essences_life_boid_F("no")
        essences_soul_plant_F("no")
        essences_soul_stone_F("no")
        essences_soul_boid_F("no")
        essences_water_plant_F("no")
        essences_water_stone_F("no")
        essences_water_boid_F("no")
        ores_crystal_F("no")
        ores_gold_F("no")
        ores_iron_F("no")
        ores_lodestone_F("no")
        ores_orichalcum_F("no")
        ores_platinium_F("no")
        ores_saltpeter_F("no")
        ores_seeping_stone_F("no")
        ores_silver_F("no")
        ores_starmetal_F("no")
        Areas_ancient_F("no")
        Areas_angry_earth_F("no")
        Areas_beast_F("no")
        Areas_corrupted_F("no")
        Areas_lost_F("no")
        fishing_hotspot_broad_F("no")
        fishing_hotspot_rare_F("no")
        fishing_hotspot_secret_F("no")
        woods_ironwood_F("no")
        woods_wyrdwood_F("no")
    });

    // allopen

    $("#allopen").on("click", function (event) {
        event.preventDefault();

        // monsters

        if (!$("#Alligator .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_alligator("yes")
        }
        if (!$("#Bear .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_bear("yes")
        }
        if (!$("#Bison .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_bison_F("yes")
        }
        if (!$("#Boar .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_boar_F("yes")
        }
        if (!$("#Cow .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_cow_F("yes")
        }
        if (!$("#Elemental_Bear .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_bear_elemental_F("yes")
        }
        if (!$("#Elemental_Wolf .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_wolf_elemental_F("yes")
        }
        if (!$("#Wolf .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_wolf_F("yes")
        }
        if (!$("#Elk .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_elk_F("yes")
        }

        if (!$("#Elk_Elemental .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_elk_elemental_F("yes")
        }

        if (!$("#Goat .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_goat_F("yes")
        }
        if (!$("#Leopard .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_leopard_F("yes")
        }
        if (!$("#Lion .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_lion_F("yes")
        }
        if (!$("#Lynx .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_lynx_F("yes")
        }
        if (!$("#Named .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_named_F("yes")
        }

        if (!$("#Piglet .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_pig_F("yes")
        }

        if (!$("#Rabbit .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_rabbit_F("yes")
        }

        if (!$("#Sheep .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_sheep_F("yes")
        }

        if (!$("#Turkey .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_turkey_F("yes")
        }
        if (!$("#Turkey_Nest .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_turkey_nest_F("yes")
        }

        if (!$("#cite .map__checkbox ").hasClass("map__checkbox-active")) {
            Regions_cities_F("yes")
        }

        if (!$("#Expedition .map__checkbox ").hasClass("map__checkbox-active")) {
            Regions_Expedition_F("yes")
        }

        if (!$("#Outpost .map__checkbox ").hasClass("map__checkbox-active")) {
            Regions_Outpost_F("yes")
        }
        if (!$("#Shrine .map__checkbox ").hasClass("map__checkbox-active")) {
            Regions_Shrine_F("yes")
        }
        if (!$("#ancientchest_legendary_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ol1_F("yes")
        }
        if (!$("#ancientchest_epic_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_om1_F("yes")
        }

        if (!$("#ancientchest_common_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_os1_F("yes")
        }

        if (!$("#ancientchest_legendary_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ol2_F("yes")
        }
        if (!$("#ancientchest_epic_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_om2_F("yes")
        }
        if (!$("#ancientchest_common_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_os2_F("yes")
        }

        if (!$("#ancientchest_legendary_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ol3_F("yes")
        }
        if (!$("#ancientchest_epic_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_om3_F("yes")
        }
        if (!$("#ancientchest_common_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_os3_F("yes")
        }
        if (!$("#ancientchest_legendary_T4_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_oe4_F("yes")
        }
        if (!$("#ancientchest_legendary_T5_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_oe5_F("yes")
        }
        if (!$("#supplychest_legendary_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sl1_F("yes")
        }
        if (!$("#supplychest_epic_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sm1_F("yes")
        }
        if (!$("#Supply_Cache_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ss1_F("yes")
        }

        if (!$("#supplychest_legendary_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sl2_F("yes")
        }

        if (!$("#supplychest_epic_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sm2_F("yes")
        }
        if (!$("#Supply_Cache_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ss2_F("yes")
        }
        if (!$("#supplychest_legendary_T2_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_se2_F("yes")
        }

        if (!$("#supplychest_legendary_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sl3_F("yes")
        }
        if (!$("#supplychest_epic_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sm3_F("yes")
        }

        if (!$("#Supply_Cache_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ss3_F("yes")
        }

        if (!$("#supplychest_legendary_T4_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_se4_F("yes")
        }

        if (!$("#supplychest_legendary_T5_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_se5_F("yes")
        }
        if (!$("#alchemychest_legendary_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_al1_F("yes")
        }

        if (!$("#alchemychest_epic_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_am1_F("yes")
        }
        if (!$("#alchemychest_epic_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_am2_F("yes")
        }
        if (!$("#alchemychest_legendary_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_al2_F("yes")
        }
        if (!$("#alchemychest_epic_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_am3_F("yes")
        }
        if (!$("#alchemychest_legendary_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_al3_F("yes")
        }

        if (!$("#crate_legendary_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cl1_F("yes")
        }

        if (!$("#crate_epic_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cm1_F("yes")
        }

        if (!$("#crate_common_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cs1_F("yes")
        }

        if (!$("#crate_legendary_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cl2_F("yes")
        }

        if (!$("#crate_epic_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cm2_F("yes")
        }

        if (!$("#crate_legendary_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cl3_F("yes")
        }

        if (!$("#crate_epic_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cm3_F("yes")
        }
        if (!$("#azoth_water .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_azoth_water_F("yes")
        }


        if (!$("#dye_plant_black .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_black_F("yes")
        }

        if (!$("#dye_plant_blue .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_blue_F("yes")
        }
        if (!$("#dye_plant_brown .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_brown_F("yes")
        }
        if (!$("#dye_plant_cyan .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_cyan_F("yes")
        }
        if (!$("#dye_plant_green .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_green_F("yes")
        }
        if (!$("#dye_plant_magenta .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_magenta_F("yes")
        }

        if (!$("#dye_plant_orange .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_orange_F("yes")
        }

        if (!$("#dye_plant_red .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_red_F("yes")
        }
        if (!$("#dye_plant_turquoise .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_turquoise_F("yes")
        }

        if (!$("#dye_plant_violet .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_violet_F("yes")
        }
        if (!$("#dye_plant_white .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_white_F("yes")
        }

        if (!$("#dye_plant_yellow .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_yellow_F("yes")
        }
        if (!$("#hemp .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_hemp_F("yes")
        }
        if (!$("#hemp_t4 .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_hemp_t4_F("yes")
        }

        if (!$("#hemp_t5 .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_hemp_t5_F("yes")
        }

        if (!$("#herb .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_herb_F("yes")
        }

        if (!$("#pigment_plant_black .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_black_F("yes")
        }
        if (!$("#pigment_plant_brown .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_brown_F("yes")
        }
        if (!$("#pigment_plant_cyan .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_cyan_F("yes")
        }
        if (!$("#pigment_plant_white .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_white_F("yes")
        }
        if (!$("#pigment_plant_red .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_red_F("yes")
        }
        if (!$("#pigment_plant_green_light .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_green_light_F("yes")
        }
        if (!$("#pigment_plant_tan .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_tan_F("yes")
        }
        if (!$("#pigment_plant_green_dark .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_green_dark_F("yes")
        }
        if (!$("#pigment_plant_yellow .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_yellow_F("yes")
        }
        if (!$("#pigment_plant_blue_light .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_blue_light_F("yes")
        }
        if (!$("#pigment_plant_pink .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_pink_F("yes")
        }
        if (!$("#pigment_plant_blue_dark .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_blue_dark_F("yes")
        }
        if (!$("#pigment_plant_orange .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_orange_F("yes")
        }
        if (!$("#pigment_plant_magenta .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_magenta_F("yes")
        }
        if (!$("#pigment_plant_purple_dark .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_purple_dark_F("yes")
        }
        if (!$("#barley .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_barley_F("yes")
        }
        if (!$("#berry .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_berry_F("yes")
        }
        if (!$("#blueberry .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_blueberry_F("yes")
        }
        if (!$("#broccoli .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_broccoli_F("yes")
        }

        if (!$("#cabbage .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_cabbage_F("yes")
        }

        if (!$("#carrot .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_carrot_F("yes")
        }
        if (!$("#corn .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_corn_F("yes")
        }
        if (!$("#cranberries .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_cranberries_F("yes")
        }
        if (!$("#honey .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_honey_F("yes")
        }

        if (!$("#nut .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_nut_F("yes")
        }
        if (!$("#potato .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_potato_F("yes")
        }
        if (!$("#squash .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_squash_F("yes")
        }
        if (!$("#strawberries .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_strawberries_F("yes")
        }
        if (!$("#Brightwood .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_brightwood_F("yes")
        }
        if (!$("#Cutlass_Keys .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_cutlass_keys_F("yes")
        }
        if (!$("#Ebonscale_Reach .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_ebonscale_reach_F("yes")
        }
        if (!$("#Edengrove .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_edengrove_F("yes")
        }
        if (!$("#Everfall .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_everfall_F("yes")
        }
        if (!$("#First_Light .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_first_light_F("yes")
        }
        if (!$("#Great_Cleave .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_great_cleave_F("yes")
        }
        if (!$("#Monarchs_Bluffs .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_monarchs_bluffs_F("yes")
        }
        if (!$("#Mourningdale .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_mourningdale_F("yes")
        }
        if (!$("#Reekwater .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_reekwater_F("yes")
        }
        if (!$("#Restless_Shore .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_restless_shore_F("yes")
        }
        if (!$("#Shattered_Mountain .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_shattered_mountai_F("yes")
        }
        if (!$("#Weavers_Fen .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_weavers_fen_F("yes")
        }
        if (!$("#Windsward .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_windsward_F("yes")
        }
        if (!$("#npc_Brightwood .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_brightwood_F("yes")
        }
        if (!$("#npc_Cutlass_Keys .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_cutlass_keys_F("yes")
        }
        if (!$("#npc_Ebonscale_Reach .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_ebonscale_reach_F("yes")
        }
        if (!$("#npc_Edengrove .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_edengrove_F("yes")
        }
        if (!$("#npc_Everfall .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_everfall_F("yes")
        }
        if (!$("#npc_First_Light .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_first_light_F("yes")
        }
        if (!$("#npc_Great_Cleave .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_great_cleave_F("yes")
        }
        if (!$("#npc_Monarchs_Bluffs .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_monarchs_bluffs_F("yes")
        }
        if (!$("#npc_Mourningdale .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_mourningdale_F("yes")
        }
        if (!$("#npc_Reekwater .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_reekwater_F("yes")
        }
        if (!$("#npc_Restless_Shore .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_restless_shore_F("yes")
        }
        if (!$("#npc_Shattered_Mountain .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_shattered_mountain_F("yes")
        }
        if (!$("#npc_Weavers_Fen .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_weavers_fen_F("yes")
        }
        if (!$("#npc_Windsward .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_windsward_F("yes")
        }
        if (!$("#Shockbulb .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_air_plant_F("yes")
        }
        if (!$("#Shockspire .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_air_stone_F("yes")
        }
        if (!$("#Lightning_Beetle .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_air_boid_F("yes")
        }
        if (!$("#Blightroot .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_death_plant_F("yes")
        }



        if (!$("#Blightcrag .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_death_stone_F("yes")
        }
        if (!$("#Blightmoth .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_death_boid_F("yes")
        }
        if (!$("#Earthspine .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_earth_plant_F("yes")
        }
        if (!$("#Earthcrag .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_earth_stone_F("yes")
        }
        if (!$("#Earthshell_Turtle .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_earth_boid_F("yes")
        }
        if (!$("#Dragonglory .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_fire_plant_F("yes")
        }
        if (!$("#Scorchstone  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_fire_stone_F("yes")
        }
        if (!$("#Salamander_Snail  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_fire_boid_F("yes")
        }
        if (!$("#Lifebloom  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_life_plant_F("yes")
        }
        if (!$("#Lifejewel  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_life_stone_F("yes")
        }
        if (!$("#Lifemoth  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_life_boid_F("yes")
        }
        if (!$("#Soulsprout  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_soul_plant_F("yes")
        }
        if (!$("#Soulspire  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_soul_stone_F("yes")
        }
        if (!$("#Soulwyrm  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_soul_boid_F("yes")
        }
        if (!$("#Rivercress  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_water_plant_F("yes")
        }
        if (!$("#Springstone  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_water_stone_F("yes")
        }
        if (!$("#Floating_Spinefish  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_water_boid_F("yes")
        }
        if (!$("#Crystal  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_crystal_F("yes")
        }
        if (!$("#Gold  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_gold_F("yes")
        }
        if (!$("#Iron  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_iron_F("yes")
        }
        if (!$("#Lodestone  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_lodestone_F("yes")
        }
        if (!$("#Orichalcum  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_orichalcum_F("yes")
        }
        if (!$("#Platinum  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_platinium_F("yes")
        }
        if (!$("#Saltpeter  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_saltpeter_F("yes")
        }
        if (!$("#Oil  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_seeping_stone_F("yes")
        }
        if (!$("#Silver  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_silver_F("yes")
        }
        if (!$("#Starmetal  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_starmetal_F("yes")
        }


        // if (!$("#Ancien  .map__checkbox ").hasClass("map__checkbox-active")) {
        //     Areas_ancient_F("yes")
        // }
        // if (!$("#Angry  .map__checkbox ").hasClass("map__checkbox-active")) {
        //     Areas_angry_earth_F("yes")
        // }
        // if (!$("#Beast  .map__checkbox ").hasClass("map__checkbox-active")) {
        //     Areas_beast_F("yes")
        // }
        // if (!$("#Corrupted  .map__checkbox ").hasClass("map__checkbox-active")) {
        //     Areas_corrupted_F("yes")
        // }
        // if (!$("#Lost  .map__checkbox ").hasClass("map__checkbox-active")) {
        //     Areas_lost_F("yes")
        // }

        if (!$("#Broad  .map__checkbox ").hasClass("map__checkbox-active")) {
            fishing_hotspot_broad_F("yes")
        }
        if (!$("#RareFishishing  .map__checkbox ").hasClass("map__checkbox-active")) {
            fishing_hotspot_rare_F("yes")
        }
        if (!$("#Secret  .map__checkbox ").hasClass("map__checkbox-active")) {
            fishing_hotspot_secret_F("yes")
        }
        if (!$("#Ironwood  .map__checkbox ").hasClass("map__checkbox-active")) {
            woods_ironwood_F("yes")
        }
        if (!$("#Wyrdwood  .map__checkbox ").hasClass("map__checkbox-active")) {
            woods_wyrdwood_F("yes")
        }
        ///

        $(".map__checkbox ").addClass("map__checkbox-active");

        $("#Ancien .map__checkbox ").removeClass("map__checkbox-active");
        $("#Angry  .map__checkbox ").removeClass("map__checkbox-active");
        $("#Beast .map__checkbox ").removeClass(" map__checkbox-active");
        $("#Corrupted .map__checkbox ").removeClass(" map__checkbox-active");
        $("#Lost .map__checkbox ").removeClass(" map__checkbox-active");
    });

    // monsters

    $("#monsters").on("click", function (event) {
        event.preventDefault();
        if ($(".monsters .map__list").hasClass("map__list-active-monsters")) {
            function timeS() {
                $(".monsters .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".monsters .map__list ").toggleClass("map__list-active-monsters");
        } else {
            $(".monsters .map__list").addClass("displ");
            function timeS() {
                $(".monsters .map__list ").toggleClass("map__list-active-monsters");
            }
            setTimeout(timeS, 3);
        }

        $(".monsters .map__wrapper ").toggleClass("map__wrapper-active");


    });


    $("#Alligator").on("click", function (event) {
        event.preventDefault();
        $("#Alligator .map__checkbox ").toggleClass("map__checkbox-active");
        if ($("#Alligator .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_alligator("yes")
        } else {
            monsters_alligator("no")
        }
    });

    $("#Bear").on("click", function (event) {
        event.preventDefault();
        $("#Bear .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Bear .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_bear("yes")
        } else {
            monsters_bear("no")
        }
    });

    $("#Bison").on("click", function (event) {
        event.preventDefault();
        $("#Bison .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Bison .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_bison_F("yes")
        } else {
            monsters_bison_F("no")
        }
    });

    $("#Boar").on("click", function (event) {
        event.preventDefault();
        $("#Boar .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Boar .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_boar_F("yes")
        } else {
            monsters_boar_F("no")
        }
    });

    $("#Cow").on("click", function (event) {
        event.preventDefault();
        $("#Cow .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Cow .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_cow_F("yes")
        } else {
            monsters_cow_F("no")
        }
    });

    $("#Elemental_Bear").on("click", function (event) {
        event.preventDefault();
        $("#Elemental_Bear .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Elemental_Bear .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_bear_elemental_F("yes")
        } else {
            monsters_bear_elemental_F("no")
        }
    });

    $("#Elemental_Wolf").on("click", function (event) {
        event.preventDefault();
        $("#Elemental_Wolf .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Elemental_Wolf .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_wolf_elemental_F("yes")
        } else {
            monsters_wolf_elemental_F("no")
        }
    });

    $("#Elk").on("click", function (event) {
        event.preventDefault();
        $("#Elk .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Elk .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_elk_F("yes")
        } else {
            monsters_elk_F("no")
        }
    });

    $("#Elk_Elemental").on("click", function (event) {
        event.preventDefault();
        $("#Elk_Elemental .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Elk_Elemental .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_elk_elemental_F("yes")
        } else {
            monsters_elk_elemental_F("no")
        }

    });

    $("#Goat").on("click", function (event) {
        event.preventDefault();
        $("#Goat .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Goat .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_goat_F("yes")
        } else {
            monsters_goat_F("no")
        }

    });

    $("#Leopard").on("click", function (event) {
        event.preventDefault();
        $("#Leopard .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Leopard .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_leopard_F("yes")
        } else {
            monsters_leopard_F("no")
        }
    });

    $("#Lion").on("click", function (event) {
        event.preventDefault();
        $("#Lion .map__checkbox ").toggleClass("map__checkbox-active");
        if ($("#Lion .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_lion_F("yes")
        } else {
            monsters_lion_F("no")
        }
    });

    $("#Lynx").on("click", function (event) {
        event.preventDefault();
        $("#Lynx .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Lynx .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_lynx_F("yes")
        } else {
            monsters_lynx_F("no")
        }
    });

    $("#Named").on("click", function (event) {
        event.preventDefault();
        $("#Named .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Named .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_named_F("yes")
        } else {
            monsters_named_F("no")
        }
    });

    $("#Piglet").on("click", function (event) {
        event.preventDefault();
        $("#Piglet .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Piglet .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_pig_F("yes")
        } else {
            monsters_pig_F("no")
        }
    });

    $("#Rabbit").on("click", function (event) {
        event.preventDefault();
        $("#Rabbit .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Rabbit .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_rabbit_F("yes")
        } else {
            monsters_rabbit_F("no")
        }
    });

    $("#Sheep").on("click", function (event) {
        event.preventDefault();
        $("#Sheep .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Sheep .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_sheep_F("yes")
        } else {
            monsters_sheep_F("no")
        }
    });

    $("#Turkey").on("click", function (event) {
        event.preventDefault();
        $("#Turkey .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Turkey .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_turkey_F("yes")
        } else {
            monsters_turkey_F("no")
        }
    });


    $("#Turkey_Nest").on("click", function (event) {
        event.preventDefault();
        $("#Turkey_Nest .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Turkey_Nest .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_turkey_nest_F("yes")
        } else {
            monsters_turkey_nest_F("no")
        }
    });

    $("#Wolf").on("click", function (event) {
        event.preventDefault();
        $("#Wolf .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Wolf .map__checkbox ").hasClass("map__checkbox-active")) {
            monsters_wolf_F("yes")
        } else {
            monsters_wolf_F("no")
        }
    });



    // cities

    $("#cities").on("click", function (event) {
        event.preventDefault();
        if ($(".cities .map__list").hasClass("map__list-active-cities")) {
            function timeS() {
                $(".cities .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".cities .map__list ").toggleClass("map__list-active-cities");
        } else {
            $(".cities .map__list").addClass("displ");
            function timeS() {
                $(".cities .map__list ").toggleClass("map__list-active-cities");
            }
            setTimeout(timeS, 3);
        }

        $(".cities .map__wrapper ").toggleClass("map__wrapper-active");


    });


    $("#cite").on("click", function (event) {
        event.preventDefault();
        $("#cite .map__checkbox ").toggleClass("map__checkbox-active");
        if ($("#cite .map__checkbox ").hasClass("map__checkbox-active")) {
            Regions_cities_F("yes")
        } else {
            Regions_cities_F("no")
        }
    });

    $("#Expedition").on("click", function (event) {
        event.preventDefault();
        $("#Expedition .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Expedition .map__checkbox ").hasClass("map__checkbox-active")) {
            Regions_Expedition_F("yes")
        } else {
            Regions_Expedition_F("no")
        }
    });

    $("#Outpost").on("click", function (event) {
        event.preventDefault();
        $("#Outpost .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Outpost .map__checkbox ").hasClass("map__checkbox-active")) {
            Regions_Outpost_F("yes")
        } else {
            Regions_Outpost_F("no")
        }
    });

    $("#Shrine").on("click", function (event) {
        event.preventDefault();
        $("#Shrine .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Shrine .map__checkbox ").hasClass("map__checkbox-active")) {
            Regions_Shrine_F("yes")
        } else {
            Regions_Shrine_F("no")
        }
    });

    // chests

    $("#chests").on("click", function (event) {
        event.preventDefault();
        if ($(".chests .map__list").hasClass("map__list-active-chests")) {
            function timeS() {
                $(".chests .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".chests .map__list ").toggleClass("map__list-active-chests");
        } else {
            $(".chests .map__list").addClass("displ");
            function timeS() {
                $(".chests .map__list ").toggleClass("map__list-active-chests");
            }
            setTimeout(timeS, 3);
        }

        $(".chests .map__wrapper ").toggleClass("map__wrapper-active");

        // supplies

        $("#Supplies").removeClass("map__wrapper-active");

        $(".Supplies .Supplies-body").removeClass("displ");

        $(".chests .map__list ").removeClass("Supplies-h");

        if ($("#Supplies").hasClass("map__wrapper-active") == false) {
            for (var num = 1; num <= 5; num++) {
                $(".chests .map__list ").removeClass("su" + num);

                $("#Supplies_Tier" + num).removeClass("map__wrapper-active");

                $(".Supplies_Tier" + num + " .Supplies_Tier" + num + "-body").removeClass("displ");
            }
        }

        // Ancient

        $("#Ancient").removeClass("map__wrapper-active");

        $(".Ancient .Ancient-body").removeClass("displ");

        $(".chests .map__list ").removeClass("Ancient-h");

        if ($("#Ancient").hasClass("map__wrapper-active") == false) {
            for (var num = 1; num <= 5; num++) {
                $(".chests .map__list ").removeClass("nu" + num);

                $("#Ancient_Tier" + num).removeClass("map__wrapper-active");

                $(".Ancient_Tier" + num + " .Ancient_Tier" + num + "-body").removeClass("displ");
            }
        }

        // Alchemy
        $("#Alchemy").removeClass("map__wrapper-active");

        $(".Alchemy .Alchemy-body").removeClass("displ");

        $(".chests .map__list ").removeClass("Alchemy-h");

        if ($("#Alchemy").hasClass("map__wrapper-active") == false) {
            for (var num = 1; num <= 3; num++) {
                $(".chests .map__list ").removeClass("al" + num);

                $("#Alchemy_Tier" + num).removeClass("map__wrapper-active");

                $(".Alchemy_Tier" + num + " .Alchemy_Tier" + num + "-body").removeClass("displ");
            }
        }
        // Provisions
        $("#Provisions").removeClass("map__wrapper-active");

        $(".Provisions .Provisions-body").removeClass("displ");

        $(".chests .map__list ").removeClass("Provisions-h");

        if ($("#Provisions").hasClass("map__wrapper-active") == false) {
            for (var num = 1; num <= 3; num++) {
                $(".chests .map__list ").removeClass("pr" + num);

                $("#Provisions_Tier" + num).removeClass("map__wrapper-active");

                $(".Provisions_Tier" + num + " .Provisions_Tier" + num + "-body").removeClass("displ");
            }
        }
    });

    // first line

    $("#Supplies").on("click", function (event) {
        event.preventDefault();
        $("#Supplies").toggleClass("map__wrapper-active");

        $(".Supplies .Supplies-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("Supplies-h");

        if ($("#Supplies").hasClass("map__wrapper-active") == false) {
            for (var num = 1; num <= 5; num++) {
                $(".chests .map__list ").removeClass("su" + num);

                $("#Supplies_Tier" + num).removeClass("map__wrapper-active");

                $(".Supplies_Tier" + num + " .Supplies_Tier" + num + "-body").removeClass("displ");
            }
        }
    });

    $("#Ancient").on("click", function (event) {
        event.preventDefault();
        $("#Ancient").toggleClass("map__wrapper-active");

        $(".Ancient .Ancient-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("Ancient-h");

        if ($("#Ancient").hasClass("map__wrapper-active") == false) {
            for (var num = 1; num <= 5; num++) {
                $(".chests .map__list ").removeClass("nu" + num);

                $("#Ancient_Tier" + num).removeClass("map__wrapper-active");

                $(".Ancient_Tier" + num + " .Ancient_Tier" + num + "-body").removeClass("displ");
            }
        }
    });

    $("#Alchemy").on("click", function (event) {
        event.preventDefault();
        $("#Alchemy").toggleClass("map__wrapper-active");

        $(".Alchemy .Alchemy-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("Alchemy-h");

        if ($("#Alchemy").hasClass("map__wrapper-active") == false) {
            for (var num = 1; num <= 3; num++) {
                $(".chests .map__list ").removeClass("al" + num);

                $("#Alchemy_Tier" + num).removeClass("map__wrapper-active");

                $(".Alchemy_Tier" + num + " .Alchemy_Tier" + num + "-body").removeClass("displ");
            }
        }

    });

    $("#Provisions").on("click", function (event) {
        event.preventDefault();
        $("#Provisions").toggleClass("map__wrapper-active");

        $(".Provisions .Provisions-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("Provisions-h");

        if ($("#Provisions").hasClass("map__wrapper-active") == false) {
            for (var num = 1; num <= 3; num++) {
                $(".chests .map__list ").removeClass("pr" + num);

                $("#Provisions_Tier" + num).removeClass("map__wrapper-active");

                $(".Provisions_Tier" + num + " .Provisions_Tier" + num + "-body").removeClass("displ");
            }
        }
    });

    // second line

    $("#Supplies_Tier1").on("click", function (event) {
        event.preventDefault();
        $("#Supplies_Tier1").toggleClass("map__wrapper-active");

        $(".Supplies_Tier1 .Supplies_Tier1-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("su1");
    });

    $("#Supplies_Tier2").on("click", function (event) {
        event.preventDefault();
        $("#Supplies_Tier2").toggleClass("map__wrapper-active");

        $(".Supplies_Tier2 .Supplies_Tier2-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("su2");
    });

    $("#Supplies_Tier3").on("click", function (event) {
        event.preventDefault();
        $("#Supplies_Tier3").toggleClass("map__wrapper-active");

        $(".Supplies_Tier3 .Supplies_Tier3-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("su3");
    });

    $("#Supplies_Tier4").on("click", function (event) {
        event.preventDefault();
        $("#Supplies_Tier4").toggleClass("map__wrapper-active");

        $(".Supplies_Tier4 .Supplies_Tier4-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("su4");
    });

    $("#Supplies_Tier5").on("click", function (event) {
        event.preventDefault();
        $("#Supplies_Tier5").toggleClass("map__wrapper-active");

        $(".Supplies_Tier5 .Supplies_Tier5-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("su5");
    });


    $("#Ancient_Tier1").on("click", function (event) {
        event.preventDefault();
        $("#Ancient_Tier1").toggleClass("map__wrapper-active");

        $(".Ancient_Tier1 .Ancient_Tier1-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("nu1");
    });

    $("#Ancient_Tier2").on("click", function (event) {
        event.preventDefault();
        $("#Ancient_Tier2").toggleClass("map__wrapper-active");

        $(".Ancient_Tier2 .Ancient_Tier2-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("nu2");
    });

    $("#Ancient_Tier3").on("click", function (event) {
        event.preventDefault();
        $("#Ancient_Tier3").toggleClass("map__wrapper-active");

        $(".Ancient_Tier3 .Ancient_Tier3-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("nu3");
    });

    $("#Ancient_Tier4").on("click", function (event) {
        event.preventDefault();
        $("#Ancient_Tier4").toggleClass("map__wrapper-active");

        $(".Ancient_Tier4 .Ancient_Tier4-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("nu4");
    });

    $("#Ancient_Tier5").on("click", function (event) {
        event.preventDefault();
        $("#Ancient_Tier5").toggleClass("map__wrapper-active");

        $(".Ancient_Tier5 .Ancient_Tier5-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("nu5");
    });


    $("#Alchemy_Tier1").on("click", function (event) {
        event.preventDefault();
        $("#Alchemy_Tier1").toggleClass("map__wrapper-active");

        $(".Alchemy_Tier1 .Alchemy_Tier1-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("al1");
    });

    $("#Alchemy_Tier2").on("click", function (event) {
        event.preventDefault();
        $("#Alchemy_Tier2").toggleClass("map__wrapper-active");

        $(".Alchemy_Tier2 .Alchemy_Tier2-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("al2");
    });

    $("#Alchemy_Tier3").on("click", function (event) {
        event.preventDefault();
        $("#Alchemy_Tier3").toggleClass("map__wrapper-active");

        $(".Alchemy_Tier3 .Alchemy_Tier3-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("al3");
    });

    $("#Provisions_Tier1").on("click", function (event) {
        event.preventDefault();
        $("#Provisions_Tier1").toggleClass("map__wrapper-active");

        $(".Provisions_Tier1 .Provisions_Tier1-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("pr1");
    });

    $("#Provisions_Tier2").on("click", function (event) {
        event.preventDefault();
        $("#Provisions_Tier2").toggleClass("map__wrapper-active");

        $(".Provisions_Tier2 .Provisions_Tier2-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("pr2");
    });

    $("#Provisions_Tier3").on("click", function (event) {
        event.preventDefault();
        $("#Provisions_Tier3").toggleClass("map__wrapper-active");

        $(".Provisions_Tier3 .Provisions_Tier3-body").toggleClass("displ");

        $(".chests .map__list ").toggleClass("pr3");
    });


    // last_line


    // Supply
    $("#Supply_Cache_T1").on("click", function (event) {
        event.preventDefault();
        $("#Supply_Cache_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Supply_Cache_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ss1_F("yes")
        } else {
            chests_ss1_F("no")
        }
    });

    $("#supplychest_epic_T1").on("click", function (event) {
        event.preventDefault();
        $("#supplychest_epic_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#supplychest_epic_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sm1_F("yes")
        } else {
            chests_sm1_F("no")
        }
    });


    $("#supplychest_legendary_T1").on("click", function (event) {
        event.preventDefault();
        $("#supplychest_legendary_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#supplychest_legendary_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sl1_F("yes")
        } else {
            chests_sl1_F("no")
        }
    });


    $("#Supply_Cache_T2").on("click", function (event) {
        event.preventDefault();
        $("#Supply_Cache_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Supply_Cache_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ss2_F("yes")
        } else {
            chests_ss2_F("no")
        }
    });

    $("#supplychest_epic_T2").on("click", function (event) {
        event.preventDefault();
        $("#supplychest_epic_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#supplychest_epic_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sm2_F("yes")
        } else {
            chests_sm2_F("no")
        }
    });


    $("#supplychest_legendary_T2").on("click", function (event) {
        event.preventDefault();
        $("#supplychest_legendary_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#supplychest_legendary_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sl2_F("yes")
        } else {
            chests_sl2_F("no")
        }
    });

    $("#supplychest_legendary_T2_elite").on("click", function (event) {
        event.preventDefault();
        $("#supplychest_legendary_T2_elite .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#supplychest_legendary_T2_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_se2_F("yes")
        } else {
            chests_se2_F("no")
        }
    });

    $("#Supply_Cache_T3").on("click", function (event) {
        event.preventDefault();
        $("#Supply_Cache_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Supply_Cache_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ss3_F("yes")
        } else {
            chests_ss3_F("no")
        }
    });

    $("#supplychest_epic_T3").on("click", function (event) {
        event.preventDefault();
        $("#supplychest_epic_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#supplychest_epic_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sm3_F("yes")
        } else {
            chests_sm3_F("no")
        }
    });


    $("#supplychest_legendary_T3").on("click", function (event) {
        event.preventDefault();
        $("#supplychest_legendary_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#supplychest_legendary_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_sl3_F("yes")
        } else {
            chests_sl3_F("no")
        }
    });


    $("#supplychest_legendary_T4_elite").on("click", function (event) {
        event.preventDefault();
        $("#supplychest_legendary_T4_elite .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#supplychest_legendary_T4_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_se4_F("yes")
        } else {
            chests_se4_F("no")
        }
    });

    $("#supplychest_legendary_T5_elite").on("click", function (event) {
        event.preventDefault();
        $("#supplychest_legendary_T5_elite .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#supplychest_legendary_T5_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_se5_F("yes")
        } else {
            chests_se5_F("no")
        }
    });


    // ancientchest
    $("#ancientchest_common_T1").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_common_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_common_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_os1_F("yes")
        } else {
            chests_os1_F("no")
        }
    });

    $("#ancientchest_epic_T1").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_epic_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_epic_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_om1_F("yes")
        } else {
            chests_om1_F("no")
        }
    });

    $("#ancientchest_legendary_T1").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_legendary_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_legendary_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ol1_F("yes")
        } else {
            chests_ol1_F("no")
        }
    });

    $("#ancientchest_common_T2").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_common_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_common_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_os2_F("yes")
        } else {
            chests_os2_F("no")
        }
    });

    $("#ancientchest_epic_T2").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_epic_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_epic_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_om2_F("yes")
        } else {
            chests_om2_F("no")
        }
    });

    $("#ancientchest_legendary_T2").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_legendary_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_legendary_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ol2_F("yes")
        } else {
            chests_ol2_F("no")
        }
    });

    $("#ancientchest_common_T3").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_common_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_common_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_os3_F("yes")
        } else {
            chests_os3_F("no")
        }
    });

    $("#ancientchest_epic_T3").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_epic_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_epic_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_om3_F("yes")
        } else {
            chests_om3_F("no")
        }
    });

    $("#ancientchest_legendary_T3").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_legendary_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_legendary_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_ol3_F("yes")
        } else {
            chests_ol3_F("no")
        }
    });

    $("#ancientchest_legendary_T4_elite").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_legendary_T4_elite .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_legendary_T4_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_oe4_F("yes")
        } else {
            chests_oe4_F("no")
        }
    });

    $("#ancientchest_legendary_T5_elite").on("click", function (event) {
        event.preventDefault();
        $("#ancientchest_legendary_T5_elite .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#ancientchest_legendary_T5_elite .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_oe5_F("yes")
        } else {
            chests_oe5_F("no")
        }
    });

    // alchemychest
    $("#alchemychest_epic_T1").on("click", function (event) {
        event.preventDefault();
        $("#alchemychest_epic_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#alchemychest_epic_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_am1_F("yes")
        } else {
            chests_am1_F("no")
        }
    });

    $("#alchemychest_legendary_T1").on("click", function (event) {
        event.preventDefault();
        $("#alchemychest_legendary_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#alchemychest_legendary_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_al1_F("yes")
        } else {
            chests_al1_F("no")
        }
    });

    $("#alchemychest_epic_T2").on("click", function (event) {
        event.preventDefault();
        $("#alchemychest_epic_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#alchemychest_epic_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_am2_F("yes")
        } else {
            chests_am2_F("no")
        }
    });

    $("#alchemychest_legendary_T2").on("click", function (event) {
        event.preventDefault();
        $("#alchemychest_legendary_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#alchemychest_legendary_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_al2_F("yes")
        } else {
            chests_al2_F("no")
        }

    });

    $("#alchemychest_epic_T3").on("click", function (event) {
        event.preventDefault();
        $("#alchemychest_epic_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#alchemychest_epic_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_am3_F("yes")
        } else {
            chests_am3_F("no")
        }
    });

    $("#alchemychest_legendary_T3").on("click", function (event) {
        event.preventDefault();
        $("#alchemychest_legendary_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#alchemychest_legendary_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_al3_F("yes")
        } else {
            chests_al3_F("no")
        }
    });

    // provision

    $("#crate_common_T1").on("click", function (event) {
        event.preventDefault();
        $("#crate_common_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#crate_common_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cs1_F("yes")
        } else {
            chests_cs1_F("no")
        }
    });

    $("#crate_epic_T1").on("click", function (event) {
        event.preventDefault();
        $("#crate_epic_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#crate_epic_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cm1_F("yes")
        } else {
            chests_cm1_F("no")
        }
    });

    $("#crate_legendary_T1").on("click", function (event) {
        event.preventDefault();
        $("#crate_legendary_T1 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#crate_legendary_T1 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cl1_F("yes")
        } else {
            chests_cl1_F("no")
        }
    });

    $("#crate_epic_T2").on("click", function (event) {
        event.preventDefault();
        $("#crate_epic_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#crate_epic_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cm2_F("yes")
        } else {
            chests_cm2_F("no")
        }
    });

    $("#crate_legendary_T2").on("click", function (event) {
        event.preventDefault();
        $("#crate_legendary_T2 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#crate_legendary_T2 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cl2_F("yes")
        } else {
            chests_cl2_F("no")
        }
    });

    $("#crate_epic_T3").on("click", function (event) {
        event.preventDefault();
        $("#crate_epic_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#crate_epic_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cm3_F("yes")
        } else {
            chests_cm3_F("no")
        }
    });

    $("#crate_legendary_T3").on("click", function (event) {
        event.preventDefault();
        $("#crate_legendary_T3 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#crate_legendary_T3 .map__checkbox ").hasClass("map__checkbox-active")) {
            chests_cl3_F("yes")
        } else {
            chests_cl3_F("no")
        }
    });


    // plants

    // firsl line
    $("#plants").on("click", function (event) {
        event.preventDefault();
        if ($(".plants .map__list").hasClass("map__list-active-plants")) {
            function timeS() {
                $(".plants .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".plants .map__list ").toggleClass("map__list-active-plants");
        } else {
            $(".plants .map__list").addClass("displ");
            function timeS() {
                $(".plants .map__list ").toggleClass("map__list-active-plants");
            }
            setTimeout(timeS, 3);
        }

        $(".plants .map__wrapper ").toggleClass("map__wrapper-active");

        // fungus

        $("#Fungus").removeClass("map__wrapper-active");

        $(".Fungus .Fungus-body").removeClass("displ");

        $(".plants .map__list ").removeClass("Fungus-h");

        // cooking
        $("#Cooking").removeClass("map__wrapper-active");

        $(".Cooking .Cooking-body").removeClass("displ");

        $(".plants .map__list ").removeClass("Cooking-h");

        // dyes

        $("#Dyes").removeClass("map__wrapper-active");

        $(".Dyes .Dyes-body").removeClass("displ");

        $(".plants .map__list ").removeClass("Dyes-h");


    });


    // second line

    $("#Cooking").on("click", function (event) {
        event.preventDefault();
        $("#Cooking").toggleClass("map__wrapper-active");

        $(".Cooking .Cooking-body").toggleClass("displ");

        $(".plants .map__list ").toggleClass("Cooking-h");
    });

    $("#Dyes").on("click", function (event) {
        event.preventDefault();
        $("#Dyes").toggleClass("map__wrapper-active");

        $(".Dyes .Dyes-body").toggleClass("displ");

        $(".plants .map__list ").toggleClass("Dyes-h");
    });

    $("#Fungus").on("click", function (event) {
        event.preventDefault();
        $("#Fungus").toggleClass("map__wrapper-active");

        $(".Fungus .Fungus-body").toggleClass("displ");

        $(".plants .map__list ").toggleClass("Fungus-h");
    });

    // last line

    $("#azoth_water").on("click", function (event) {
        event.preventDefault();
        $("#azoth_water .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#azoth_water .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_azoth_water_F("yes")
        } else {
            plants_azoth_water_F("no")
        }
    });

    $("#hemp").on("click", function (event) {
        event.preventDefault();
        $("#hemp .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#hemp .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_hemp_F("yes")
        } else {
            plants_hemp_F("no")
        }
    });

    $("#herb").on("click", function (event) {
        event.preventDefault();
        $("#herb .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#herb .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_herb_F("yes")
        } else {
            plants_herb_F("no")
        }
    });


    $("#hemp_t4").on("click", function (event) {
        event.preventDefault();
        $("#hemp_t4 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#hemp_t4 .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_hemp_t4_F("yes")
        } else {
            plants_hemp_t4_F("no")
        }
    });

    $("#hemp_t5").on("click", function (event) {
        event.preventDefault();
        $("#hemp_t5 .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#hemp_t5 .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_hemp_t5_F("yes")
        } else {
            plants_hemp_t5_F("no")
        }
    });

    // cooking

    $("#barley").on("click", function (event) {
        event.preventDefault();
        $("#barley .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#barley .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_barley_F("yes")
        } else {
            plants_barley_F("no")
        }
    });



    $("#berry").on("click", function (event) {
        event.preventDefault();
        $("#berry .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#berry .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_berry_F("yes")
        } else {
            plants_berry_F("no")
        }
    });

    $("#blueberry").on("click", function (event) {
        event.preventDefault();
        $("#blueberry .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#blueberry .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_blueberry_F("yes")
        } else {
            plants_blueberry_F("no")
        }
    });


    $("#broccoli").on("click", function (event) {
        event.preventDefault();
        $("#broccoli .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#broccoli .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_broccoli_F("yes")
        } else {
            plants_broccoli_F("no")
        }
    });

    $("#cabbage").on("click", function (event) {
        event.preventDefault();
        $("#cabbage .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#cabbage .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_cabbage_F("yes")
        } else {
            plants_cabbage_F("no")
        }
    });

    $("#carrot").on("click", function (event) {
        event.preventDefault();
        $("#carrot .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#carrot .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_carrot_F("yes")
        } else {
            plants_carrot_F("no")
        }
    });


    $("#corn").on("click", function (event) {
        event.preventDefault();
        $("#corn .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#corn .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_corn_F("yes")
        } else {
            plants_corn_F("no")
        }
    });

    $("#cranberries").on("click", function (event) {
        event.preventDefault();
        $("#cranberries .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#cranberries .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_cranberries_F("yes")
        } else {
            plants_cranberries_F("no")
        }
    });

    $("#honey").on("click", function (event) {
        event.preventDefault();
        $("#honey .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#honey .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_honey_F("yes")
        } else {
            plants_honey_F("no")
        }
    });

    $("#nut").on("click", function (event) {
        event.preventDefault();
        $("#nut .map__checkbox ").toggleClass("map__checkbox-active");
        if ($("#nut .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_nut_F("yes")
        } else {
            plants_nut_F("no")
        }
    });


    $("#potato").on("click", function (event) {
        event.preventDefault();
        $("#potato .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#potato .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_potato_F("yes")
        } else {
            plants_potato_F("no")
        }
    });

    $("#squash").on("click", function (event) {
        event.preventDefault();
        $("#squash .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#squash .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_squash_F("yes")
        } else {
            plants_squash_F("no")
        }
    });

    $("#strawberries").on("click", function (event) {
        event.preventDefault();
        $("#strawberries .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#strawberries .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_strawberries_F("yes")
        } else {
            plants_strawberries_F("no")
        }
    });


    // dye
    $("#dye_plant_black").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_black .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_black .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_black_F("yes")
        } else {
            plants_dye_plant_black_F("no")
        }
    });

    $("#dye_plant_blue").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_blue .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_blue .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_blue_F("yes")
        } else {
            plants_dye_plant_blue_F("no")
        }
    });

    $("#dye_plant_brown").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_brown .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_brown .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_brown_F("yes")
        } else {
            plants_dye_plant_brown_F("no")
        }
    });

    $("#dye_plant_cyan").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_cyan .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_cyan .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_cyan_F("yes")
        } else {
            plants_dye_plant_cyan_F("no")
        }
    });

    $("#dye_plant_green").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_green .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_green .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_green_F("yes")
        } else {
            plants_dye_plant_green_F("no")
        }
    });

    $("#dye_plant_magenta").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_magenta .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_magenta .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_magenta_F("yes")
        } else {
            plants_dye_plant_magenta_F("no")
        }
    });


    $("#dye_plant_orange").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_orange .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_orange .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_orange_F("yes")
        } else {
            plants_dye_plant_orange_F("no")
        }
    });

    $("#dye_plant_red").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_red .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_red .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_red_F("yes")
        } else {
            plants_dye_plant_red_F("no")
        }
    });

    $("#dye_plant_turquoise").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_turquoise .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_turquoise .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_turquoise_F("yes")
        } else {
            plants_dye_plant_turquoise_F("no")
        }
    });

    $("#dye_plant_violet").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_violet .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_violet .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_violet_F("yes")
        } else {
            plants_dye_plant_violet_F("no")
        }
    });

    $("#dye_plant_white").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_white .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_white .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_white_F("yes")
        } else {
            plants_dye_plant_white_F("no")
        }
    });

    $("#dye_plant_yellow").on("click", function (event) {
        event.preventDefault();
        $("#dye_plant_yellow .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#dye_plant_yellow .map__checkbox ").hasClass("map__checkbox-active")) {
            plants_dye_plant_yellow_F("yes")
        } else {
            plants_dye_plant_yellow_F("no")
        }
    });

    // pigment_plant

    $("#pigment_plant_brown").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_brown .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_brown .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_brown_F("yes")
        } else {
            pigment_plant_brown_F("no")
        }

    });

    $("#pigment_plant_cyan").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_cyan .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_cyan .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_cyan_F("yes")
        } else {
            pigment_plant_cyan_F("no")
        }
    });

    $("#pigment_plant_white").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_white .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_white .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_white_F("yes")
        } else {
            pigment_plant_white_F("no")
        }
    });

    $("#pigment_plant_red").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_red .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_red .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_red_F("yes")
        } else {
            pigment_plant_red_F("no")
        }
    });

    $("#pigment_plant_green_light").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_green_light .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_green_light .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_green_light_F("yes")
        } else {
            pigment_plant_green_light_F("no")
        }
    });

    $("#pigment_plant_tan").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_tan .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_tan .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_tan_F("yes")
        } else {
            pigment_plant_tan_F("no")
        }
    });

    $("#pigment_plant_green_dark").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_green_dark .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_green_dark .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_green_dark_F("yes")
        } else {
            pigment_plant_green_dark_F("no")
        }
    });

    $("#pigment_plant_yellow").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_yellow .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_yellow .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_yellow_F("yes")
        } else {
            pigment_plant_yellow_F("no")
        }
    });

    $("#pigment_plant_blue_light").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_blue_light .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_blue_light .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_blue_light_F("yes")
        } else {
            pigment_plant_blue_light_F("no")
        }
    });

    $("#pigment_plant_pink").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_pink .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_pink .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_pink_F("yes")
        } else {
            pigment_plant_pink_F("no")
        }
    });

    $("#pigment_plant_blue_dark").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_blue_dark .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_blue_dark .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_blue_dark_F("yes")
        } else {
            pigment_plant_blue_dark_F("no")
        }
    });

    $("#pigment_plant_black").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_black .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_black .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_black_F("yes")
        } else {
            pigment_plant_black_F("no")
        }
    });


    $("#pigment_plant_orange").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_orange .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_orange .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_orange_F("yes")
        } else {
            pigment_plant_orange_F("no")
        }
    });

    $("#pigment_plant_purple_dark").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_purple_dark .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_purple_dark .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_purple_dark_F("yes")
        } else {
            pigment_plant_purple_dark_F("no")
        }
    });

    $("#pigment_plant_magenta").on("click", function (event) {
        event.preventDefault();
        $("#pigment_plant_magenta .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#pigment_plant_magenta .map__checkbox ").hasClass("map__checkbox-active")) {
            pigment_plant_magenta_F("yes")
        } else {
            pigment_plant_magenta_F("no")
        }
    });

    // points

    $("#points").on("click", function (event) {
        event.preventDefault();
        if ($(".points .map__list").hasClass("map__list-active-points")) {
            function timeS() {
                $(".points .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".points .map__list ").toggleClass("map__list-active-points");
        } else {
            $(".points .map__list").addClass("displ");
            function timeS() {
                $(".points .map__list ").toggleClass("map__list-active-points");
            }
            setTimeout(timeS, 3);
        }

        $(".points .map__wrapper ").toggleClass("map__wrapper-active");


    });

    // last line

    $("#Brightwood").on("click", function (event) {
        event.preventDefault();
        $("#Brightwood .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Brightwood .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_brightwood_F("yes")
        } else {
            pois_brightwood_F("no")
        }
    });

    $("#Cutlass_Keys").on("click", function (event) {
        event.preventDefault();
        $("#Cutlass_Keys .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Cutlass_Keys .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_cutlass_keys_F("yes")
        } else {
            pois_cutlass_keys_F("no")
        }
    });

    $("#Ebonscale_Reach").on("click", function (event) {
        event.preventDefault();
        $("#Ebonscale_Reach .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Ebonscale_Reach .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_ebonscale_reach_F("yes")
        } else {
            pois_ebonscale_reach_F("no")
        }
    });

    $("#Edengrove").on("click", function (event) {
        event.preventDefault();
        $("#Edengrove .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Edengrove .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_edengrove_F("yes")
        } else {
            pois_edengrove_F("no")
        }
    });

    $("#Everfall").on("click", function (event) {
        event.preventDefault();
        $("#Everfall .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Everfall .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_everfall_F("yes")
        } else {
            pois_everfall_F("no")
        }
    });


    $("#First_Light").on("click", function (event) {
        event.preventDefault();
        $("#First_Light .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#First_Light .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_first_light_F("yes")
        } else {
            pois_first_light_F("no")
        }

    });

    $("#Great_Cleave").on("click", function (event) {
        event.preventDefault();
        $("#Great_Cleave .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Great_Cleave .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_great_cleave_F("yes")
        } else {
            pois_great_cleave_F("no")
        }
    });

    $("#Monarchs_Bluffs").on("click", function (event) {
        event.preventDefault();
        $("#Monarchs_Bluffs .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Monarchs_Bluffs .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_monarchs_bluffs_F("yes")
        } else {
            pois_monarchs_bluffs_F("no")
        }
    });


    $("#Mourningdale").on("click", function (event) {
        event.preventDefault();
        $("#Mourningdale .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Mourningdale .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_mourningdale_F("yes")
        } else {
            pois_mourningdale_F("no")
        }
    });

    $("#Reekwater").on("click", function (event) {
        event.preventDefault();
        $("#Reekwater .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Reekwater .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_reekwater_F("yes")
        } else {
            pois_reekwater_F("no")
        }

    });


    $("#Restless_Shore").on("click", function (event) {
        event.preventDefault();
        $("#Restless_Shore .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Restless_Shore .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_restless_shore_F("yes")
        } else {
            pois_restless_shore_F("no")
        }
    });


    $("#Shattered_Mountain").on("click", function (event) {
        event.preventDefault();
        $("#Shattered_Mountain .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Shattered_Mountain .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_shattered_mountai_F("yes")
        } else {
            pois_shattered_mountai_F("no")
        }
    });

    $("#Weavers_Fen").on("click", function (event) {
        event.preventDefault();
        $("#Weavers_Fen .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Weavers_Fen .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_weavers_fen_F("yes")
        } else {
            pois_weavers_fen_F("no")
        }
    });


    $("#Windsward").on("click", function (event) {
        event.preventDefault();
        $("#Windsward .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Windsward .map__checkbox ").hasClass("map__checkbox-active")) {
            pois_windsward_F("yes")
        } else {
            pois_windsward_F("no")
        }
    });

    // NPC

    $("#npc").on("click", function (event) {
        event.preventDefault();
        if ($(".npc .map__list").hasClass("map__list-active-npc")) {
            function timeS() {
                $(".npc .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".npc .map__list ").toggleClass("map__list-active-npc");
        } else {
            $(".npc .map__list").addClass("displ");
            function timeS() {
                $(".npc .map__list ").toggleClass("map__list-active-npc");
            }
            setTimeout(timeS, 3);
        }

        $(".npc .map__wrapper ").toggleClass("map__wrapper-active");


    });

    // last line
    $("#npc_Brightwood").on("click", function (event) {
        event.preventDefault();
        $("#npc_Brightwood .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Brightwood .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_brightwood_F("yes")
        } else {
            npc_brightwood_F("no")
        }
    });

    $("#npc_Cutlass_Keys").on("click", function (event) {
        event.preventDefault();
        $("#npc_Cutlass_Keys .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Cutlass_Keys .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_cutlass_keys_F("yes")
        } else {
            npc_cutlass_keys_F("no")
        }
    });

    $("#npc_Ebonscale_Reach").on("click", function (event) {
        event.preventDefault();
        $("#npc_Ebonscale_Reach .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Ebonscale_Reach .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_ebonscale_reach_F("yes")
        } else {
            npc_ebonscale_reach_F("no")
        }
    });

    $("#npc_Edengrove").on("click", function (event) {
        event.preventDefault();
        $("#npc_Edengrove .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Edengrove .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_edengrove_F("yes")
        } else {
            npc_edengrove_F("no")
        }
    });

    $("#npc_Everfall").on("click", function (event) {
        event.preventDefault();
        $("#npc_Everfall .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Everfall .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_everfall_F("yes")
        } else {
            npc_everfall_F("no")
        }
    });


    $("#npc_First_Light").on("click", function (event) {
        event.preventDefault();
        $("#npc_First_Light .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_First_Light .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_first_light_F("yes")
        } else {
            npc_first_light_F("no")
        }
    });

    $("#npc_Great_Cleave").on("click", function (event) {
        event.preventDefault();
        $("#npc_Great_Cleave .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Great_Cleave .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_great_cleave_F("yes")
        } else {
            npc_great_cleave_F("no")
        }
    });

    $("#npc_Monarchs_Bluffs").on("click", function (event) {
        event.preventDefault();
        $("#npc_Monarchs_Bluffs .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Monarchs_Bluffs .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_monarchs_bluffs_F("yes")
        } else {
            npc_monarchs_bluffs_F("no")
        }
    });


    $("#npc_Mourningdale").on("click", function (event) {
        event.preventDefault();
        $("#npc_Mourningdale .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Mourningdale .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_mourningdale_F("yes")
        } else {
            npc_mourningdale_F("no")
        }
    });

    $("#npc_Reekwater").on("click", function (event) {
        event.preventDefault();
        $("#npc_Reekwater .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Reekwater .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_reekwater_F("yes")
        } else {
            npc_reekwater_F("no")
        }
    });


    $("#npc_Restless_Shore").on("click", function (event) {
        event.preventDefault();
        $("#npc_Restless_Shore .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Restless_Shore .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_restless_shore_F("yes")
        } else {
            npc_restless_shore_F("no")
        }
    });


    $("#npc_Shattered_Mountain").on("click", function (event) {
        event.preventDefault();
        $("#npc_Shattered_Mountain .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Shattered_Mountain .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_shattered_mountain_F("yes")
        } else {
            npc_shattered_mountain_F("no")
        }
    });

    $("#npc_Weavers_Fen").on("click", function (event) {
        event.preventDefault();
        $("#npc_Weavers_Fen .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Weavers_Fen .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_weavers_fen_F("yes")
        } else {
            npc_weavers_fen_F("no")
        }
    });


    $("#npc_Windsward").on("click", function (event) {
        event.preventDefault();
        $("#npc_Windsward .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#npc_Windsward .map__checkbox ").hasClass("map__checkbox-active")) {
            npc_windsward_F("yes")
        } else {
            npc_windsward_F("no")
        }
    });


    // Essences
    // firsl line
    $("#Essences").on("click", function (event) {
        event.preventDefault();
        if ($(".Essences .map__list").hasClass("map__list-active-Essences")) {
            function timeS() {
                $(".Essences .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".Essences .map__list ").toggleClass("map__list-active-Essences");
        } else {
            $(".Essences .map__list").addClass("displ");
            function timeS() {
                $(".Essences .map__list ").toggleClass("map__list-active-Essences");
            }
            setTimeout(timeS, 3);
        }

        $(".Essences .map__wrapper ").toggleClass("map__wrapper-active");

        // Air_Essence
        $("#Air_Essence").removeClass("map__wrapper-active");

        $(".Air_Essence .Air_Essence-body").removeClass("displ");

        $(".Essences .map__list ").removeClass("Air_Essence-h");

        // Death_Essence
        $("#Death_Essence").removeClass("map__wrapper-active");

        $(".Death_Essence .Death_Essence-body").removeClass("displ");

        $(".Essences .map__list ").removeClass("Death_Essence-h");

        // Earth_Essence
        $("#Earth_Essence").removeClass("map__wrapper-active");

        $(".Earth_Essence .Earth_Essence-body").removeClass("displ");

        $(".Essences .map__list ").removeClass("Earth_Essence-h");

        // Fire_Essence
        $("#Fire_Essence").removeClass("map__wrapper-active");

        $(".Fire_Essence .Fire_Essence-body").removeClass("displ");

        $(".Essences .map__list ").removeClass("Fire_Essence-h");

        // Life_Essence
        $("#Life_Essence").removeClass("map__wrapper-active");

        $(".Life_Essence .Life_Essence-body").removeClass("displ");

        $(".Essences .map__list ").removeClass("Life_Essence-h");

        // Spirit_Essence
        $("#Spirit_Essence").removeClass("map__wrapper-active");

        $(".Spirit_Essence .Spirit_Essence-body").removeClass("displ");

        $(".Essences .map__list ").removeClass("Spirit_Essence-h");

        // Water_Essence
        $("#Water_Essence").removeClass("map__wrapper-active");

        $(".Water_Essence .Water_Essence-body").removeClass("displ");

        $(".Essences .map__list ").removeClass("Water_Essence-h");

    });



    // second line

    $("#Air_Essence").on("click", function (event) {
        event.preventDefault();
        $("#Air_Essence").toggleClass("map__wrapper-active");

        $(".Air_Essence .Air_Essence-body").toggleClass("displ");

        $(".Essences .map__list ").toggleClass("Air_Essence-h");
    });

    $("#Death_Essence").on("click", function (event) {
        event.preventDefault();
        $("#Death_Essence").toggleClass("map__wrapper-active");

        $(".Death_Essence .Death_Essence-body").toggleClass("displ");

        $(".Essences .map__list ").toggleClass("Death_Essence-h");
    });


    $("#Earth_Essence").on("click", function (event) {
        event.preventDefault();
        $("#Earth_Essence").toggleClass("map__wrapper-active");

        $(".Earth_Essence .Earth_Essence-body").toggleClass("displ");

        $(".Essences .map__list ").toggleClass("Earth_Essence-h");
    });

    $("#Fire_Essence").on("click", function (event) {
        event.preventDefault();
        $("#Fire_Essence").toggleClass("map__wrapper-active");

        $(".Fire_Essence .Fire_Essence-body").toggleClass("displ");

        $(".Essences .map__list ").toggleClass("Fire_Essence-h");
    });

    $("#Life_Essence").on("click", function (event) {
        event.preventDefault();
        $("#Life_Essence").toggleClass("map__wrapper-active");

        $(".Life_Essence .Life_Essence-body").toggleClass("displ");

        $(".Essences .map__list ").toggleClass("Life_Essence-h");
    });


    $("#Spirit_Essence").on("click", function (event) {
        event.preventDefault();
        $("#Spirit_Essence").toggleClass("map__wrapper-active");

        $(".Spirit_Essence .Spirit_Essence-body").toggleClass("displ");

        $(".Essences .map__list ").toggleClass("Spirit_Essence-h");
    });


    $("#Water_Essence").on("click", function (event) {
        event.preventDefault();
        $("#Water_Essence").toggleClass("map__wrapper-active");

        $(".Water_Essence .Water_Essence-body").toggleClass("displ");

        $(".Essences .map__list ").toggleClass("Water_Essence-h");
    });


    // last line

    $("#Shockbulb").on("click", function (event) {
        event.preventDefault();
        $("#Shockbulb .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Shockbulb .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_air_plant_F("yes")
        } else {
            essences_air_plant_F("no")
        }
    });

    $("#Shockspire").on("click", function (event) {
        event.preventDefault();
        $("#Shockspire .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Shockspire .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_air_stone_F("yes")
        } else {
            essences_air_stone_F("no")
        }
    });


    $("#Lightning_Beetle").on("click", function (event) {
        event.preventDefault();
        $("#Lightning_Beetle .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Lightning_Beetle .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_air_boid_F("yes")
        } else {
            essences_air_boid_F("no")
        }
    });

    $("#Blightroot").on("click", function (event) {
        event.preventDefault();
        $("#Blightroot .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Blightroot .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_death_plant_F("yes")
        } else {
            essences_death_plant_F("no")
        }
    });

    $("#Blightcrag").on("click", function (event) {
        event.preventDefault();
        $("#Blightcrag .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Blightcrag .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_death_stone_F("yes")
        } else {
            essences_death_stone_F("no")
        }
    });

    $("#Blightmoth").on("click", function (event) {
        event.preventDefault();
        $("#Blightmoth .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Blightmoth .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_death_boid_F("yes")
        } else {
            essences_death_boid_F("no")
        }
    });

    $("#Earthspine").on("click", function (event) {
        event.preventDefault();
        $("#Earthspine .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Earthspine .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_earth_plant_F("yes")
        } else {
            essences_earth_plant_F("no")
        }
    });

    $("#Earthcrag").on("click", function (event) {
        event.preventDefault();
        $("#Earthcrag .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Earthcrag .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_earth_stone_F("yes")
        } else {
            essences_earth_stone_F("no")
        }
    });

    $("#Earthshell_Turtle").on("click", function (event) {
        event.preventDefault();
        $("#Earthshell_Turtle .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Earthshell_Turtle .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_earth_boid_F("yes")
        } else {
            essences_earth_boid_F("no")
        }
    });

    $("#Dragonglory").on("click", function (event) {
        event.preventDefault();
        $("#Dragonglory .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Dragonglory .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_fire_plant_F("yes")
        } else {
            essences_fire_plant_F("no")
        }
    });


    $("#Scorchstone").on("click", function (event) {
        event.preventDefault();
        $("#Scorchstone .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Scorchstone  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_fire_stone_F("yes")
        } else {
            essences_fire_stone_F("no")
        }
    });

    $("#Salamander_Snail").on("click", function (event) {
        event.preventDefault();
        $("#Salamander_Snail .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Salamander_Snail  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_fire_boid_F("yes")
        } else {
            essences_fire_boid_F("no")
        }
    });

    $("#Lifebloom").on("click", function (event) {
        event.preventDefault();
        $("#Lifebloom .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Lifebloom  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_life_plant_F("yes")
        } else {
            essences_life_plant_F("no")
        }
    });

    $("#Lifejewel").on("click", function (event) {
        event.preventDefault();
        $("#Lifejewel .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Lifejewel  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_life_stone_F("yes")
        } else {
            essences_life_stone_F("no")
        }
    });

    $("#Lifemoth").on("click", function (event) {
        event.preventDefault();
        $("#Lifemoth .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Lifemoth  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_life_boid_F("yes")
        } else {
            essences_life_boid_F("no")
        }
    });

    $("#Soulsprout").on("click", function (event) {
        event.preventDefault();
        $("#Soulsprout .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Soulsprout  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_soul_plant_F("yes")
        } else {
            essences_soul_plant_F("no")
        }
    });

    $("#Soulspire").on("click", function (event) {
        event.preventDefault();
        $("#Soulspire .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Soulspire  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_soul_stone_F("yes")
        } else {
            essences_soul_stone_F("no")
        }
    });

    $("#Soulwyrm").on("click", function (event) {
        event.preventDefault();
        $("#Soulwyrm .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Soulwyrm  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_soul_boid_F("yes")
        } else {
            essences_soul_boid_F("no")
        }
    });

    $("#Rivercress").on("click", function (event) {
        event.preventDefault();
        $("#Rivercress .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Rivercress  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_water_plant_F("yes")
        } else {
            essences_water_plant_F("no")
        }
    });

    $("#Springstone").on("click", function (event) {
        event.preventDefault();
        $("#Springstone .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Springstone  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_water_stone_F("yes")
        } else {
            essences_water_stone_F("no")
        }
    });

    $("#Floating_Spinefish").on("click", function (event) {
        event.preventDefault();
        $("#Floating_Spinefish .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Floating_Spinefish  .map__checkbox ").hasClass("map__checkbox-active")) {
            essences_water_boid_F("yes")
        } else {
            essences_water_boid_F("no")
        }
    });

    // ore

    $("#ore").on("click", function (event) {
        event.preventDefault();
        if ($(".ore .map__list").hasClass("map__list-active-ore")) {
            function timeS() {
                $(".ore .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".ore .map__list ").toggleClass("map__list-active-ore");
        } else {
            $(".ore .map__list").addClass("displ");
            function timeS() {
                $(".ore .map__list ").toggleClass("map__list-active-ore");
            }
            setTimeout(timeS, 3);
        }

        $(".ore .map__wrapper ").toggleClass("map__wrapper-active");

    });

    // last line

    $("#Crystal").on("click", function (event) {
        event.preventDefault();
        $("#Crystal .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Crystal  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_crystal_F("yes")
        } else {
            ores_crystal_F("no")
        }
    });

    $("#Gold").on("click", function (event) {
        event.preventDefault();
        $("#Gold .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Gold  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_gold_F("yes")
        } else {
            ores_gold_F("no")
        }
    });

    $("#Iron").on("click", function (event) {
        event.preventDefault();
        $("#Iron .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Iron  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_iron_F("yes")
        } else {
            ores_iron_F("no")
        }
    });

    $("#Lodestone").on("click", function (event) {
        event.preventDefault();
        $("#Lodestone .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Lodestone  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_lodestone_F("yes")
        } else {
            ores_lodestone_F("no")
        }
    });


    $("#Orichalcum").on("click", function (event) {
        event.preventDefault();
        $("#Orichalcum .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Orichalcum  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_orichalcum_F("yes")
        } else {
            ores_orichalcum_F("no")
        }
    });

    $("#Platinum").on("click", function (event) {
        event.preventDefault();
        $("#Platinum .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Platinum  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_platinium_F("yes")
        } else {
            ores_platinium_F("no")
        }
    });

    $("#Saltpeter").on("click", function (event) {
        event.preventDefault();
        $("#Saltpeter .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Saltpeter  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_saltpeter_F("yes")
        } else {
            ores_saltpeter_F("no")
        }
    });


    $("#Oil").on("click", function (event) {
        event.preventDefault();
        $("#Oil .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Oil  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_seeping_stone_F("yes")
        } else {
            ores_seeping_stone_F("no")
        }
    });

    $("#Silver").on("click", function (event) {
        event.preventDefault();
        $("#Silver .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Silver  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_silver_F("yes")
        } else {
            ores_silver_F("no")
        }
    });

    $("#Starmetal").on("click", function (event) {
        event.preventDefault();
        $("#Starmetal .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Starmetal  .map__checkbox ").hasClass("map__checkbox-active")) {
            ores_starmetal_F("yes")
        } else {
            ores_starmetal_F("no")
        }
    });


    // areas 
    $("#areas").on("click", function (event) {
        event.preventDefault();
        if ($(".areas .map__list").hasClass("map__list-active-areas")) {
            function timeS() {
                $(".areas .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".areas .map__list ").toggleClass("map__list-active-areas");
        } else {
            $(".areas .map__list").addClass("displ");
            function timeS() {
                $(".areas .map__list ").toggleClass("map__list-active-areas");
            }
            setTimeout(timeS, 3);
        }

        $(".areas .map__wrapper ").toggleClass("map__wrapper-active");

    });

    // last line
    $("#Ancien").on("click", function (event) {
        event.preventDefault();
        $("#Ancien .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Ancien  .map__checkbox ").hasClass("map__checkbox-active")) {
            Areas_ancient_F("yes")
        } else {
            Areas_ancient_F("no")
        }
    });

    $("#Angry").on("click", function (event) {
        event.preventDefault();
        $("#Angry .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Angry  .map__checkbox ").hasClass("map__checkbox-active")) {
            Areas_angry_earth_F("yes")
        } else {
            Areas_angry_earth_F("no")
        }
    });

    $("#Beast").on("click", function (event) {
        event.preventDefault();
        $("#Beast .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Beast  .map__checkbox ").hasClass("map__checkbox-active")) {
            Areas_beast_F("yes")
        } else {
            Areas_beast_F("no")
        }
    });

    $("#Corrupted").on("click", function (event) {
        event.preventDefault();
        $("#Corrupted .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Corrupted  .map__checkbox ").hasClass("map__checkbox-active")) {
            Areas_corrupted_F("yes")
        } else {
            Areas_corrupted_F("no")
        }
    });

    $("#Lost").on("click", function (event) {
        event.preventDefault();
        $("#Lost .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Lost  .map__checkbox ").hasClass("map__checkbox-active")) {
            Areas_lost_F("yes")
        } else {
            Areas_lost_F("no")
        }
    });

    // fishing
    $("#fishing").on("click", function (event) {
        event.preventDefault();
        if ($(".fishing .map__list").hasClass("map__list-active-fishing")) {
            function timeS() {
                $(".fishing .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".fishing .map__list ").toggleClass("map__list-active-fishing");
        } else {
            $(".fishing .map__list").addClass("displ");
            function timeS() {
                $(".fishing .map__list ").toggleClass("map__list-active-fishing");
            }
            setTimeout(timeS, 3);
        }

        $(".fishing .map__wrapper ").toggleClass("map__wrapper-active");

    });

    // last line

    $("#Broad").on("click", function (event) {
        event.preventDefault();
        $("#Broad .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Broad  .map__checkbox ").hasClass("map__checkbox-active")) {
            fishing_hotspot_broad_F("yes")
        } else {
            fishing_hotspot_broad_F("no")
        }
    });

    $("#RareFishishing").on("click", function (event) {
        event.preventDefault();
        $("#RareFishishing .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#RareFishishing  .map__checkbox ").hasClass("map__checkbox-active")) {
            fishing_hotspot_rare_F("yes")
        } else {
            fishing_hotspot_rare_F("no")
        }
    });

    $("#Secret").on("click", function (event) {
        event.preventDefault();
        $("#Secret .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Secret  .map__checkbox ").hasClass("map__checkbox-active")) {
            fishing_hotspot_secret_F("yes")
        } else {
            fishing_hotspot_secret_F("no")
        }
    });

    // wood
    $("#wood").on("click", function (event) {
        event.preventDefault();
        if ($(".wood .map__list").hasClass("map__list-active-wood")) {
            function timeS() {
                $(".wood .map__list").removeClass("displ");
            }
            setTimeout(timeS, 300);
            $(".wood .map__list ").toggleClass("map__list-active-wood");
        } else {
            $(".wood .map__list").addClass("displ");
            function timeS() {
                $(".wood .map__list ").toggleClass("map__list-active-wood");
            }
            setTimeout(timeS, 3);
        }

        $(".wood .map__wrapper ").toggleClass("map__wrapper-active");

    });

    // last line 
    $("#Ironwood").on("click", function (event) {
        event.preventDefault();
        $("#Ironwood .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Ironwood  .map__checkbox ").hasClass("map__checkbox-active")) {
            woods_ironwood_F("yes")
        } else {
            woods_ironwood_F("no")
        }
    });

    $("#Wyrdwood").on("click", function (event) {
        event.preventDefault();
        $("#Wyrdwood .map__checkbox ").toggleClass("map__checkbox-active");

        if ($("#Wyrdwood  .map__checkbox ").hasClass("map__checkbox-active")) {
            woods_wyrdwood_F("yes")
        } else {
            woods_wyrdwood_F("no")
        }
    });
}


















