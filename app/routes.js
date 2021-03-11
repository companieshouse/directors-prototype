const express = require('express')
const router = express.Router()

// Sign in
require('./routes/sign-in.js')(router)
// Company lookup
require('./routes/company-lookup.js')(router)

// Add your routes here - above the module.exports line
router.get('/directors', function (req, res) {
  // Render the confirm company page
  res.render('directors', {
    // To use the company data on that page use the following
    company: req.session.company,
    officers: req.session.officers
  })
})

router.get('/add/add', function (req, res) {
  // Render the confirm company page
  res.render('add/add', {
    // To use the company data on that page use the following
    company: req.session.company
  })
})

router.get('/remove/remove', function (req, res) {
  var request = require('request')
  var apiKey = process.env.CHS_API_KEY
  var directorId = req.query.director
  var options = {
    'method': 'GET',
    'url': 'https://api.company-information.service.gov.uk/' + directorId,
    'headers': {
      'Authorization': apiKey
    },
    'json': true
  }
  request(options, function (error, response) {
    if (error) throw new Error(error)
    res.render('remove/remove', {
    // To use the company data on that page use the following
      director: response.body
    })
  })
})

router.post('/remove/remove', function (req, res) {
  res.redirect('../directors')
})

router.get('/change/change', function (req, res) {
  var request = require('request')
  var apiKey = process.env.CHS_API_KEY
  var directorId = req.query.director
  var options = {
    'method': 'GET',
    'url': 'https://api.company-information.service.gov.uk/' + directorId,
    'headers': {
      'Authorization': apiKey
    },
    'json': true
  }
  request(options, function (error, response) {
    if (error) throw new Error(error)
    res.render('change/change', {
      // To use the company data on that page use the following
      director: response.body
    })
  })
  // Render the confirm company page
})

router.get('/auth-code', function (req, res) {
// Render the confirm company page
  res.render('auth-code', {
  // To use the company data on that page use the following
    company: req.session.company
  })
})

router.post('/auth-code', function (req, res) {
  var request = require('request')
  var apiKey = process.env.CHS_API_KEY
  var companyNumber = req.session.number
  var options = {
    'method': 'GET',
    'url': 'https://api.company-information.service.gov.uk/company/' + companyNumber + '/officers',
    'headers': {
      'Authorization': apiKey
    },
    'json': true
  }
  request(options, function (error, response) {
    if (error) throw new Error(error)
    req.session.officers = response.body
    res.redirect('/directors')
  })
})

module.exports = router
