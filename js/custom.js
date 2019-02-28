(function ($) {
    // navigation smooth scrolling

       $('.navbar-nav li a').on('click', function(event) {

           if (this.hash !== "") {
               event.preventDefault();

               // Store hash
               var hash = this.hash;

               $('html, body').animate({
                   scrollTop: $(hash).offset().top
               }, 1500,'easeInOutQuart', function () {


                   window.location.hash = hash;
               });
           }
       });

    // Instantiate MixItUp:
    $('#images').mixItUp();

    new WOW().init();


})(jQuery)