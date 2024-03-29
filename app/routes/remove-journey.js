module.exports = function (router) {

router.get('/update/remove', function (req, res) {
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
      res.render('update/remove', {
        director: response.body
      })
    })
 })
router.post('/update/remove', function (req, res) {
    res.redirect('../check-your-answers?type=remove')
})

}