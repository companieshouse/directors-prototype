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

    res.redirect('/update/date-of-change')
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
    req.session.data['gChangesMade'] = true;
    res.redirect('/update/change?type=update&officer=' + req.session.redirect)
  })

  //trying to get this to work for address update journey
  //router.post('/address-lookup-update-journey/confirm-lookup-postal', function (req, res) {
    // Regaedless of changes having been made, hitting the [Comtinue] button will set the global variable gChangesMade to equal TRUE. 
    // This will then display the CHANGES MADE tag on the next page.
   // req.session.data['gChangesMade'] = true;
  //  res.redirect('/update/change?type=update&officer=' + req.session.redirect)
 // })


  //Updating the nationality of the director page
  router.get('/update/nationality', function (req, res) {
    req.session.redirect = req.query.officer
    res.render('update/nationality', {
      details: req.query.officer
    })
  })

  router.post('/update/nationality', function (req, res) {
    res.redirect('/update/change?type=update&officer=' + req.session.redirect)
  })


  // address routing

  router.post('/update/stop-screen-1-alt2', function (req, res) {

    res.redirect('/address-lookup-update-journey/address-lookup-postal')
  })

  router.post('/address-lookup-update-journey/address-lookup-postal', function (req, res) {
    if (req.session.data['house-name'] === '') {
      res.redirect('/address-lookup-update-journey/static-list-of-addresses')
    } else {
      // res.redirect goes to whichever page you want
      res.redirect('/address-lookup-update-journey/confirm-lookup-postal')
    }
    
  })

  router.post('/address-lookup-update-journey/static-list-of-addresses', function (req, res) {

    res.redirect('/address-lookup-update-journey/confirm-lookup-postal')
  })


  //setting the flag for address changes made 
  router.post('/address-lookup-update-journey/confirm-lookup-postal', function (req, res) {

    // set the addressChangesMade flag to TRUE
    req.session.data['addressChangesMade'] = true;

    //go to the update page
    res.redirect('/update/change')
  })


 


  
  //trying to route to a correct confirmation page but can't make it work! 
  router.post('/check-your-answers-alt', function (req, res) {

    res.redirect('/confirmation-update')
  })


  // update address journey

  // linking from correspondence picker page to either link ROA/CA page or to correspondence look up page
  router.post('/update/update-address/correspondence-address', function (req, res) {
    // Create a variable called errors
    const errors = []
  
    // Create an if condition
    // In this if condition it is checking if radio-input is blank
    if (typeof req.session.data['correspondence-address'] === 'undefined') {
      // If it is blank then update the errors variable with the error text
      errors.push({
        text: 'Select an option',
        href: '#correspondence-address'
      })
      // Show the user the radio input page again
      res.render('/correspondence-address', {
        // Declare there are errors
        errorRadio: true,
        // List all of the errors on the page
        errorList: errors
      })
    // If everything is fine then do this
    } if (req.session.data['correspondence-address'] === 'different-address') {
      res.redirect('/update/update-address/address-lookup-postal')
    } else {
      // res.redirect goes to whichever page you want
      res.redirect('/update/update-address/link-correspondence-address-alt2')
    }
  })


//from link ROA/CA page to home address page
 router.post('/update/update-address/link-correspondence-address-alt2', function (req, res) {
  res.redirect('/update/update-address/home-address1')
 })


 
  

}