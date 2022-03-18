/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  $('#second-nationality-link').click(function() {
    $('#second-nationality').show();
    $('#second-nationality-link').hide();
    return false;
  });
  $('#third-nationality-link').click(function() {
    $('#third-nationality').show();
    $('#third-nationality-link').hide();
    return false;
  });       
})
