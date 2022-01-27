module.exports = function (router) {
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

}