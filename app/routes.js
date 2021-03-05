const express = require('express')
const router = express.Router()

// Sign in
require('./routes/sign-in.js')(router)
// Company lookup
require('./routes/company-lookup.js')(router)

// Add your routes here - above the module.exports line
router.get('/directors', function (req, res) {
  // Render the confirm company page
  res.render('directors', {
    // To use the company data on that page use the following
    company: req.session.company,
    companyIncorp: req.session.companyIncorp,
    officers: req.session.officers
  })
})

module.exports = router
