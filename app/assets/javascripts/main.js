/*
  Contains the javascript needed to startup the application.
 */

$(document).on('ready page:load', function () {
  console.log('toggle');
  var toggled = false;
  console.log('toggled = ', toggled);
  $('[data-toggle=offcanvas]').click(function () {
    if (toggled == true) {
      console.log('open');
      $('.row').toggleClass('active');
      toggled = false;
    }
    else {
      console.log('close');
      toggled = true;
      $('.row').toggleClass('active');
    }
  });
});
