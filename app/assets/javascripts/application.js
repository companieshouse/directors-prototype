/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

//show and hide nationality 
$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  // Code snippet for the nationality page
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

//show and hide previous names 
$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  // Code snippet for the nationality page
  $('#one-previous-name-link').click(function() {
    $('#one-previous-name').show();
    $('#one-previous-name-link').hide();
    return false;
  });
  $('#second-previous-name-link').click(function() {
    $('#second-previous-name').show();
    $('#second-previous-name-link').hide();
    return false;
  });
  $('#third-previous-name-link').click(function() {
    $('#third-previous-name').show();
    $('#third-previous-name-link').hide();
    return false;
  });       
})
