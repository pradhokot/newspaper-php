$(document).ready(function() {
   // ----------------- variabel height
   var windowHeight = $(window).height();
   var headerHeight = $('.page-header').outerHeight();
   var footerHeight = $('.page-footer').outerHeight();
   var footerHeight = $('.page-footer').outerHeight();
   var bodyHeight = windowHeight - headerHeight - footerHeight;

   $('.page-body').css('min-height', bodyHeight + 'px');/* add minimal height on page-body */
   $('.page').css('padding-top', headerHeight + 'px');/* padding page over page header */


   // ----------------- scrolltop window
   // $(window).scroll(function () {
   //    if ($(this).scrollTop() > 100) {
   //       $('.nav-ad').slideUp();
   //    } else {
   //       $('.nav-ad').slideDown();
   //    };
   // });
   
   
   // ----------------- toggle scroll
   // let prevScrollpos = $(window).scrollTop();
   // $(window).on('scroll', function () {
   //    $('.navbar').toggleClass('toggle-scroll', prevScrollpos <= $(this).scrollTop());
   //    prevScrollpos = $(this).scrollTop();
   // });


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