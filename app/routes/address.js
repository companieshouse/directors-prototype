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
}