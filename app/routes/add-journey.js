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
    
  router.post('/add/name', function (req, res) {
    res.redirect('/add/date-of-birth')
  })

  // Date of birth
  router.get('/add/date-of-birth', function (req, res) {
    // Render the confirm company page
    res.render('add/date-of-birth', {
      // To use the company data on that page use the following
      name: req.session.name,
      company: req.session.company
    })
  })
  
  router.post('/add/date-of-birth', function (req, res) {
    res.redirect('/add/nationality')
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
    res.redirect('../address-lookup/correspondence-address')
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
    res.redirect('/add/243')
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
    res.redirect('../add/percentage-of-shares')
  })




 // adding PSC - shares percentage 
 router.get('/add/percentage-of-shares', function (req, res) {
    // Render the confirm company page
    res.render('add/percentage-of-shares', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/add/percentage-of-shares', function (req, res) {
    res.redirect('../add/percentage-of-voting-rights')
  })

  // adding PSC - voting rights 
  router.get('/add/percentage-of-voting-rights', function (req, res) {
    // Render the confirm company page
    res.render('add/percentage-of-voting-rights', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/add/percentage-of-voting-rights', function (req, res) {
    res.redirect('../add/right-to-appoint')
  })


  // adding PSC - right to appoint
    router.get('/add/right-to-appoint', function (req, res) {
    // Render the confirm company page
    res.render('add/right-to-appoint', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/add/right-to-appoint', function (req, res) {

    // If a new person has been added set newPersonPendingMade to true, then display this on the Active directors page
    if(req.session.data['newPersonPendingMade'] != true){
      req.session.data['newPersonPendingMade'] = true;
    }
    res.redirect('../check-your-answers')
  })

// Statement journey

// Identifying the correct PSC statement
router.post('/add/psc-options', function (req, res) {

  if (req.session.data['psc-options'] === 'gathering-psc-details') {
    res.redirect('../add/psc-options-2-3')
  }
  if (req.session.data['psc-options'] === 'notice-issued') {
    res.redirect('../add/psc-check-notice')
  }
  else{
    res.redirect('../add/psc-check-statement')
  }

})

// Identifying which statement is relevant - PSC statement 2 or 3 
router.post('/add/psc-options-2-3', function (req, res) {
  res.redirect('../add/psc-check-statement')
})





}