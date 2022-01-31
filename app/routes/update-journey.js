module.exports = function (router) {
  
  //Overall update journey page
  router.get('/update/change', function (req, res) {
    req.session.type = req.query.type
    var request = require('request')
    var apiKey = process.env.CHS_API_KEY
    var directorId = req.query.officer
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
      res.render('update/change', {
        director: response.body
      })
    })
  })

  router.post('/update/change', function (req, res) {
    res.redirect('/confirmation')
  })

  //Updating the country of residence page
  router.get('/update/country-of-residence', function (req, res) {
    res.render('update/country-of-residence', {
    })
  })

  router.post('/update/country-of-residence', function (req, res) {
    res.redirect('/update/change')
  })
  
  //Updating the date of birth page
  router.get('/update/date-of-birth', function (req, res) {
    res.render('update/date-of-birth', {
    })
  })

  router.post('/update/date-of-birth', function (req, res) {
    res.redirect('/update/change')
  })

  //Updating the job title page
  router.get('/update/job-title', function (req, res) {
    res.render('update/job-title', {
    })
  })

  router.post('/update/job-title', function (req, res) {
    res.redirect('/update/change')
  })

  //Updating the name of the director page
  router.get('/update/name', function (req, res) {
    res.render('update/name', {
    })
  })

  router.post('/update/name', function (req, res) {
    res.redirect('/update/change')
  })

  //Updating the nationality of the director page
  router.get('/update/nationality', function (req, res) {
    res.render('update/nationality', {
    })
  })

  router.post('/update/nationality', function (req, res) {
    res.redirect('/update/change')
  })

}