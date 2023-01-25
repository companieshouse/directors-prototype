module.exports = function (router) {
  
  //Overall update journey page
  router.get('/update/change', function (req, res) {
    req.session.type = req.query.type
    req.session.name = req.query.name
    var request = require('request')
    //Get the API key from the .env file
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
        company: req.session.company,
        director: response.body,
        details: req.query.officer,
        type: req.query.type
      })
    })
  })

  router.post('/update/change', function (req, res) {
    /*if(req.session.data['numOfChange'] == 0){
      res.redirect('IDONTEXISTYET')
      
    }*/
    if(req.session.data['numOfChange'] > 3){
      res.redirect('/update/confirm-update')
    }
    else{
      res.redirect('/update/date-of-change')
    }
  })

  //Date of change page
  router.get('/update/date-of-change', function (req, res) {
    res.render('update/date-of-change', {
      type: req.session.type 
    })
  })

  router.post('/update/date-of-change', function (req, res) {
    res.redirect('/check-your-answers-alt')
  })

  //Updating the country of residence page
  router.get('/update/country-of-residence', function (req, res) {
    req.session.redirect = req.query.officer
    res.render('update/country-of-residence', {
      details: req.query.officer
    })
  })

  router.post('/update/country-of-residence', function (req, res) {
    res.redirect('/update/change?type=update&officer=' + req.session.redirect)
  })
  
  //Updating the date of birth page
  router.get('/update/date-of-birth', function (req, res) {
    req.session.redirect = req.query.officer
    res.render('update/date-of-birth', {
      details: req.query.officer
    })
  })

  router.post('/update/date-of-birth', function (req, res) {
    res.redirect('/update/change?type=update&officer=' + req.session.redirect)
  })

  //Updating the job title page
  router.get('/update/job-title', function (req, res) {
    req.session.redirect = req.query.officer
    res.render('update/job-title', {
      details: req.query.officer
    })
  })

  router.post('/update/job-title', function (req, res) {
    res.redirect('/update/change?type=update&officer=' + req.session.redirect)
  })

  //Updating the name of the director page
  router.get('/update/name', function (req, res) {
    req.session.redirect = req.query.officer
    res.render('update/name', {
      details: req.query.officer
    })
  })

  router.post('/update/name', function (req, res) {
    // Regaedless of changes having been made, hitting the [Comtinue] button will set the global variable gChangesMade to equal TRUE. 
    // This will then display the CHANGES MADE tag on the next page.
    if(req.session.data['nameChangesMade'] != true){
      req.session.data['nameChangesMade'] = true;
      req.session.data['numOfChange'] ++ ;
    }
    
    res.redirect('/update/change?type=update&officer=' + req.session.redirect)
  })

  //Updating the nationality of the director page
  router.get('/update/nationality', function (req, res) {
    req.session.redirect = req.query.officer
    res.render('update/nationality', {
      details: req.query.officer
    })
  })

  router.post('/update/nationality', function (req, res) {
    if(req.session.data['nationalityChangesMade'] != true){
      req.session.data['nationalityChangesMade'] = true;
      req.session.data['numOfChange'] ++ ;
    }
    res.redirect('/update/change?type=update&officer=' + req.session.redirect)
  })

  router.post('/update/remove-statement', function (req, res) {
    res.redirect('/update/check-your-answers?type=removestatement&officer=' + req.session.redirect)
  })


}