const express = require('express')
const router = express.Router()

// Sign in
require('./routes/sign-in.js')(router)
// Company lookup
require('./routes/company-lookup.js')(router)
// Adding a director
require('./routes/add-journey.js')(router)
// Removing a director
require('./routes/remove-journey.js')(router)
// Change a director
require('./routes/update-journey.js')(router)
// Address
require('./routes/address.js')(router)

// Add your routes here - above the module.exports line
router.get('/directors', function (req, res) {
  // Render the confirm company page
  res.render('directors', {
    // To use the company data on that page use the following
    journey: req.session.journey,
    company: req.session.company,
    officers: req.session.officers
  })
})

router.get('/check-your-answers', function (req, res) {
  // Render the confirm company page
  res.render('check-your-answers', {
    // To use the company data on that page use the following
    company: req.session.company,
    officers: req.session.officers,
    type: req.session.type 
  })
})

router.get('/confirmation', function (req, res) {
  // Render the confirm company page
  res.render('confirmation', {
    // To use the company data on that page use the following
    type: req.session.type,
    company: req.session.company,
    name: req.session.name
  })
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
    res.redirect('/directors#people')
  })
})

router.get('/', function (req, res) {
  req.session.destroy();
  res.render('index', {
  })
})

router.get('/start', function (req, res) {
  req.session.journey = req.query.journey
  res.render('start', {
  })
})

router.get('/chs', function (req, res) {
  req.session.journey = req.query.journey
  res.render('chs', {
  })
})

router.get('/confirmation-statement/task-list', function (req, res) {
  req.session.journey = req.query.journey
  res.render('confirmation-statement/task-list', {
  })
})

module.exports = router