$(window).scroll(function() {
   var scroll = $(window).scrollTop();


   if (scroll >= 1) {
       $('.menu').addClass('fixed');
   } else {
       $('.menu').removeClass('fixed');
   }
});