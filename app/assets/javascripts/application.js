/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  $('#multiple-nationalities-link').click(function() {
    $('#multiple-nationalities').show();
    $('#multiple-nationalities-link').hide();
    return false;
  });       
})
