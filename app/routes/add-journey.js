module.exports = function (router) {
    
router.get('/add/add', function (req, res) {
    // Render the confirm company page
    res.render('add/add', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.get('/add/date-of-appointment', function (req, res) {
    // Render the confirm company page
    res.render('add/date-of-appointment', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
}