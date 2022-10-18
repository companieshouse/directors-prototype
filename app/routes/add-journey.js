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
    res.redirect('../check-your-answers')
  })




}