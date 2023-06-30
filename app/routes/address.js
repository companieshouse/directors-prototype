module.exports = function (router) {

  //Lookup address page for home address
router.get('/address-lookup/address-lookup-home', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/address-lookup-home', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/address-lookup/address-lookup-home', function (req, res) {
    if (req.session.data['home-propertyname'] === '') {
      res.redirect('/address-lookup/static-list-of-addresses')
    } else {
      // res.redirect goes to whichever page you want
      res.redirect('/address-lookup/confirm-lookup-home')
    }
  })

    //Lookup address page for the postal address
  router.get('/address-lookup/address-lookup-postal', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/address-lookup-postal', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/address-lookup/address-lookup-postal', function (req, res) {
    res.redirect('/address-lookup/confirm-lookup-postal')
  })

  //Manual address page for the home address
  router.get('/address-lookup/address-manual-home', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/address-manual-home', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  //Manual address page for the postal address

  router.get('/address-lookup/address-manual-postal', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/address-manual-postal', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.get('/address-lookup/address-lookup-manual', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/address-lookup-manual', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.get('/address-lookup/correspondence-address', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/correspondence-address', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.get('/address-lookup/home-address', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/home-address', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/address-lookup/correspondence-address', function (req, res) {
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
      res.redirect('/address-lookup/address-lookup-postal')
    } else {
      // res.redirect goes to whichever page you want
      res.redirect('/address-lookup/link-correspondence-address-alt2')
    }
  })
  router.post('/address-lookup/home-address', function (req, res) {
    // Create a variable called errors
    const errors = []
    // Create an if condition
    // In this if condition it is checking if radio-input is blank
    if (typeof req.session.data['home-address'] === 'undefined') {
      // If it is blank then update the errors variable with the error text
      errors.push({
        text: 'Select an option',
        href: '#home-address'
      })
      // Show the user the radio input page again
      res.render('/home-address', {
        // Declare there are errors
        errorRadio: true,
        // List all of the errors on the page
        errorList: errors
      })
    // If everything is fine then do this
    } if (req.session.data['home-address'] === 'different-address') {
      res.redirect('/address-lookup/address-lookup-home')
    } if ((req.session.data['home-address'] === 'registered-office-address') && (req.session.data['link-correspondence-address'] === 'yes')) {
      res.redirect('/add/243')
    } else {
      // res.redirect goes to whichever page you want
      res.redirect('/add/243')
    }
  })

  //Link the correspondence address to the registered office address
  router.get('/address-lookup/link-correspondence-address', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/link-correspondence-address', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/address-lookup/link-correspondence-address', function (req, res) {
    res.redirect('/address-lookup/home-address')
  })

  //Link the home address to the correspondence address
  router.get('/address-lookup/link-home-address', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/link-home-address', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/address-lookup/link-home-address', function (req, res) {
    res.redirect('/add/243')
  })

  //Confirm the postal/correspondence address
  router.get('/address-lookup/confirm-lookup-postal', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/confirm-lookup-postal', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/address-lookup/confirm-lookup-postal', function (req, res) {
    res.redirect('/address-lookup/home-address')
  })

  //Confirm the postal/correspondence address
  router.get('/address-lookup/confirm-lookup-home', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup/confirm-lookup-home', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/address-lookup/confirm-lookup-home', function (req, res) {
    res.redirect('/add/243')
  })

  router.get('/address-lookup-update-journey/home-address', function (req, res) {
    // Render the confirm company page
    req.session.officer = req.query.officer
    res.render('address-lookup-update-journey/home-address', {
      // To use the company data on that page use the following
      company: req.session.company,
      officer: req.session.officer
    })
  })

  router.post('/address-lookup-update-journey/home-address', function (req, res) {
    // Create a variable called errors
    const errors = []
    // Create an if condition
    // In this if condition it is checking if radio-input is blank
    if (typeof req.session.data['home-address'] === 'undefined') {
      // If it is blank then update the errors variable with the error text
      errors.push({
        text: 'Select an option',
        href: '#home-address'
      })
      // Show the user the radio input page again
      res.render('/home-address', {
        // Declare there are errors
        errorRadio: true,
        // List all of the errors on the page
        errorList: errors
      })
    // If everything is fine then do this
    } if (req.session.data['home-address'] === 'different-address') {
      res.redirect('/address-lookup-update-journey/address-lookup-home')
    } if ((req.session.data['home-address'] === 'registered-office-address') && (req.session.data['link-correspondence-address'] === 'yes')) {
      res.redirect('/add/243')
    } else {
      // res.redirect goes to whichever page you want
      res.redirect('/add/243')
    }
  })

  router.get('/address-lookup-update-journey/confirm-lookup-postcode', function (req, res) {
    // Render the confirm company page
    res.render('address-lookup-update-journey/confirm-lookup-postcode', {
      // To use the company data on that page use the following
      officer: req.session.officer
    })
  })

  router.post('/address-lookup-update-journey/confirm-lookup-postcode', function (req, res) {
    res.redirect('/update/change?type=update&officer=' + req.session.officer)
  })

  router.post('/address-lookup-update-journey/address-manual-home', function (req, res) {
    res.redirect('/address-lookup-update-journey/confirm-lookup-postcode')
  })
}
