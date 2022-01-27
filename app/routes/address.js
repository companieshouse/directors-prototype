module.exports = function (router) {
router.get('/add/address-lookup-home', function (req, res) {
    // Render the confirm company page
    res.render('add/address-lookup-home', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.get('/add/address-lookup-postal', function (req, res) {
    // Render the confirm company page
    res.render('add/address-lookup-postal', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.get('/add/address-manual-home', function (req, res) {
    // Render the confirm company page
    res.render('add/address-manual-home', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.get('/add/address-manual-postal', function (req, res) {
    // Render the confirm company page
    res.render('add/address-manual-postal', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.get('/add/address-lookup-manual', function (req, res) {
    // Render the confirm company page
    res.render('add/address-lookup-manual', {
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
      res.redirect('/address-lookup/home-address')
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
    } else {
      // res.redirect goes to whichever page you want
      res.redirect('/check-your-answers')
    }
  })
}