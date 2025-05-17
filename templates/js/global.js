$(document).ready(function() {
   // ----------------- add minimal height on page-body
   var windowHeight = $(window).height();
   var headerHeight = $('.page-header').outerHeight();
   var footerHeight = $('.page-footer').outerHeight();
   var bodyHeight = windowHeight - headerHeight - footerHeight;

   $('.page-body').css('min-height', bodyHeight + 'px');


   // ----------------- match media width
   if ($(window).width() < 992) {
      // mobile preview
   }
   else {
      // desktop preview
   }


   // ----------------- auto refresh page on responsive width
   var windowWidth = $(window).width();
   $(window).resize(function () {
      if (windowWidth != $(window).width()) {
         location.reload();
         return;
      }
   });
})