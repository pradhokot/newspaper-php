$(document).ready(function() {
   var navtopHeight = $('.navtop').outerHeight();
   $('.sidenav').css('top', navtopHeight + 'px');

   $('input, text-area, .form-control').hover(function() {
      $(this).select();
   });

   // Auto refresh jika lebar window melewati batas 992px
   // let lastWindowWidth = $(window).width();
   // $(window).resize(function () {
   //    const currentWidth = $(window).width();
   //    if ((lastWindowWidth < 992 && currentWidth >= 992) || (lastWindowWidth >= 992 && currentWidth < 992)) {
   //       location.reload();
   //    }
   //    lastWindowWidth = currentWidth;
   // });
})