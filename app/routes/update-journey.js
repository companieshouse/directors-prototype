module.exports = function (router) {
  
  router.get('/update/change', function (req, res) {
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
        // To use the company data on that page use the following
        director: response.body
      })
    })
    // Render the confirm company page
  })

  router.post('/update/change', function (req, res) {
    res.redirect('/confirmation?type=change')
  })
}