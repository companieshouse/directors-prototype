module.exports = function (router) {
  router.get('/update/remove', function (req, res) {
    req.session.type = req.query.type
    req.session.removename = req.query.directorname
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

    // If a new person has been added set newPersonMade to true, then display this on the Active directors page
    if(req.session.data['removePersonPendingMade'] != true){
      req.session.data['removePersonPendingMade'] = true;
    }

    res.redirect('../check-your-answers')
  })
}