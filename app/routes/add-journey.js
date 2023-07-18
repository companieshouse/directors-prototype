module.exports = function (router) {
  // Name
  router.get('/add/name', function (req, res) {
    req.session.type = req.query.type
    // Render the confirm company page
    res.render('add/name', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  //name page goes to date of appointment 
  router.post('/add/name', function (req, res) {
    var firstname = req.session.data['firstname']
    var lastName = req.session.data['last-name']
    var errors = []
    var firstNameHasError = false
    var lastNameHasError = false
    
    if (req.session.data['firstname'] === '') {
        firstNameHasError = true
        errors.push({
            text: 'Enter a first name',
            href: '#first-name'
        })
    }
    if (req.session.data['last-name'] === '') {
        lastNameHasError = true
        errors.push({
            text: 'Enter a last name',
            href: '#last-name'
        })
    }
    if (firstNameHasError || lastNameHasError) {
        res.render('add/name', {
        firstname: firstname,
        lastName: lastName,
            errorFirstName: firstNameHasError,
            errorLastName: lastNameHasError,
            errorList: errors
        })
    } else {
        res.redirect( '/add/date-of-birth' )
    }
   

  })


  // Date of birth
  router.get('/add/date-of-birth', function (req, res) {
    // Render the confirm company page
    res.render('add/date-of-birth', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  
  router.post('/add/date-of-birth', function (req, res) {
    
    res.render('add/date-of-appointment')
     

  })


    // Date of appointment
    router.get('/add/date-of-appointment', function (req, res) {
      // Render the confirm company page
      res.render('add/date-of-appointment', {
        // To use the company data on that page use the following
        company: req.session.company
      })
    })
  
    router.post('/add/date-of-appointment', function (req, res) {

    //if the director details match an existing director, display the duplicate director soft screen
  
    if (((req.session.data['firstname'] == 'Andrew')|| (req.session.data['firstname'] == 'andrew')) && ((req.session.data['last-name'] == 'Murray')||(req.session.data['last-name'] == 'murray')) ) {
      res.redirect('/add/duplicate')
    }
    else {
      res.redirect('/add/nationality') 
    }
     
    }) 


  router.post('/add/duplicate', function (req, res) {

    
    if (req.session.data['duplicate-director-details'] === 'yes')  {
      res.redirect('/add/nationality')
    }
    else {
      res.redirect('/Directors')
    }
  
  })

  // Nationality
  router.get('/add/nationality', function (req, res) {
    // Render the confirm company page
    res.render('add/nationality', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.post('/add/nationality', function (req, res) {
    res.redirect('/add/job-title')
  })

  // Job title
  router.get('/add/job-title', function (req, res) {
    // Render the confirm company page
    res.render('add/job-title', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.post('/add/job-title', function (req, res) {
    res.redirect('../address-lookup/correspondence-address')
  })





  // 243
  router.get('/add/243', function (req, res) {
    // Render the confirm company page
    res.render('add/243', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.post('/add/243', function (req, res) {
    res.redirect('../check-your-answers')
  }) 
}