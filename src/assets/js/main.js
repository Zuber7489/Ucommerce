/*
Template Name: ShopGrids - Bootstrap 5 eCommerce HTML Template.
Author: GrayGrids
*/

(function () {
    //===== Preloader
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        var preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.display = 'none';
        }
    }

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var headerNavbar = document.querySelector(".navbar-area");
        var backToTopButton = document.querySelector(".scroll-top");

        if (headerNavbar && backToTopButton) {
            var sticky = headerNavbar.offsetTop;

            // Show or hide the back-to-top button
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                backToTopButton.style.display = "flex";
            } else {
                backToTopButton.style.display = "none";
            }
        }
    };

    //===== mobile-menu-btn
    var navbarToggler = document.querySelector(".mobile-menu-btn");
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            navbarToggler.classList.toggle("active");
        });
    }

})();
