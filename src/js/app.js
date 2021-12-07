(function (e) {
  e(window.jQuery, window, document);
})(function ($, window, document) {
  console.log("init");
  var app = {
    // ==============================================================================================
    // Call your function here to become a single function
    // * This method make your code more modular and make it easy to toggle your function
    // * If you want to disable a function, just commented on function that you need to disable below
    // ==============================================================================================

    init: function ($) {
      app.select2();
      app.owlCarousel();
      app.sidebarToggle();
    },

    // ======================================================================
    // Your function here
    // * Don't forget to use proper function name to describes your function
    // ======================================================================
    select2: function () {
      $(document).ready(function () {
        $("#join_country").select2({
          minimumResultsForSearch: -1,
          placeholder: "Country",
          allowClear: true,
          theme: "bootstrap",
        });
        $(".state-select").select2({
          placeholder: "State/Territory",
        });
        $(".course-select").select2({
          placeholder: "Courses Offered",
          allowClear: true,
        });
      });
    },

    owlCarousel: function () {
      $(document).ready(function () {
        $(".upcoming-carousel").owlCarousel({
          nav: true,
          loop: true,
          margin: 20,
          navText: [
            "<div class='carousel__button left'><img src='./img/icon-left.svg'></div>",
            "<div class='carousel__button right'><img src='./img/icon-right.svg'></div>",
          ],
          responsive: {
            300: {
              items: 1,
            },
            575: {
              items: 2,
            },
            768: {
              items: 3,
            },
          },
        });
        $(".owl-testimonial").owlCarousel({
          items: 1,
          nav: true,
          loop: true,
          navText: [
            "<div class='carousel__button left'><img src='./img/icon-left.svg'></div>",
            "<div class='carousel__button right'><img src='./img/icon-right.svg'></div>",
          ],
        });
      });
    },

    sidebarToggle: function () {
      $(document).ready(function () {
        $(".location__toggle__sidebar").click(function () {
          $(".location__sidebar").toggle("show");
        });
      });
    },
  };
  $(document).ready(function () {
    app.init($);
  });
});
