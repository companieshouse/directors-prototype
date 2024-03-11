/* global $ */

//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


//show and hide nationality 
$(document).ready(function () {
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
