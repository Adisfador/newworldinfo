 <!-- footer -->
 <footer id="footer" class="footer">
     <div class="container">
         <div class="footer__inner">
             <a href="https://zvladislav.ffox.site/" target="_blank" class="footer__item">
                 <img src="<?= TEMPLATE ?>img/cog.svg" alt="img" class="footer__img">
                 <h2 class="footer__logo-text"> Разработка сайта<span>
                         < Vfolio />
                     </span></h2>
             </a>
             <div class="footer__item">
                 NewWorldInfo |
                 <script>
                     var today = new Date();
                     var year = today.getUTCFullYear();
                     document.write(year);
                 </script>
             </div>
         </div>
     </div>
 </footer>
 <!-- footer end -->
 <script src="<?= TEMPLATE ?>staff/jquery-3.5.1.min.js"></script>

 <script src="<?= TEMPLATE ?>staff/Cities_and_othes.js"></script>
 <script src="<?= TEMPLATE ?>staff/Map.js"></script>
 <script src="<?= TEMPLATE ?>staff/leaflet.js"></script>
 <script src="<?= TEMPLATE ?>staff/leaflet-canvas-markers.js"></script>

 <script src="<?= TEMPLATE ?>staff/libs.min.js"></script>
 <script src="<?= TEMPLATE ?>js/js_stat.js"></script>
 <script src="<?= TEMPLATE ?>js/script.min.js?ver=1"></script>
 <script src="<?= TEMPLATE ?>staff/wow.js"></script>
 <script>
     new WOW().init();
 </script>
 <?php if (empty($bases[0]['weapon_name2']) != true) {
    ?>
     <script>
         $("#includedContent3").load("<?= TEMPLATE ?>builds_page/build1/<?php echo $bases[0]['weapon_name1']; ?>.php");
         $("#includedContent4").load("<?= TEMPLATE ?>builds_page/build2/<?php echo $bases[0]['weapon_name2']; ?>.php");
     </script>
 <?php
    } ?>
 <script>
     $(function() {
         $("#includedContent").load("<?= TEMPLATE ?>Abilities_calc.php");
     });
     $(function() {
         $("#includedContent2").load("<?= TEMPLATE ?>Abilities_calc_2.php");
     });
 </script>
 </body>

 </html>