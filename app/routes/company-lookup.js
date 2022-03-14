module.exports = function (router) {
  // Company number
  router.get('/company-lookup', function (req, res) {
    res.render('company-lookup', {
    })
  })
  // Code for company lookup and confirming company
  router.post('/company-lookup', function (req, res) {
    // Capture the entered company number using req.body.number the 'number' should match the ID of the input. The uppercase is to deal with company numbers that have letters as it needs to be all uppercase
    var errors = []
    var companyNumber = req.body.companynumber.toUpperCase().trim()
    req.session.number = companyNumber
    var apiKey = process.env.CHS_API_KEY
    var n = companyNumber.length
    //Check if the number is blank
    if (req.session.data['number'] === '') {
      errors.push({
        text: 'Enter the company number',
        href: '#number'
      })
      //If it is blank then render the company lookup page and return the errors
      res.render('company-lookup', {
        errorNum: true,
        errorList: errors
      })
    //Check if the number is 8 characters long
    } else if (n !== 8) {
      errors.push({
        text: 'Enter the company number',
        href: '#number'
      })
      res.render('company-lookup', {
        errorNum: true,
        errorList: errors
      })
    } else {
      // Require the request node module, you may need to install this if it's a new prototype
      var request = require('request')
      // Construct the API request
      // This will only pull back the company data found here: https://developer.company-information.service.gov.uk/api/docs/company/company_number/companyProfile-resource.html
      var options = {
        'method': 'GET',
        'url': 'https://api.company-information.service.gov.uk/company/' + companyNumber + '',
        'headers': {
          'Authorization': apiKey
        },
        'json': true
      }
      request(options, function (error, response) {
        //If there is an error then the prototype will stop working
        if (error) throw new Error(error)
        // With the response put that as a session variable so it can be used across all pages. So whenever you need to use the data it will be stored in the req.session.company variable
        req.session.company = response.body
        // Format date of incorporation
        const dayOfIncorporation = req.session.company.date_of_creation.slice(-2)
        const monthOfIncorporation = req.session.company.date_of_creation.slice(5, 7)
        const yearOfIncorporation = req.session.company.date_of_creation.slice(0, 4)
        //Once the date have been sliced, bring it back together to form the date
        req.session.companyIncorp = dayOfIncorporation + ' ' + monthOfIncorporation + ' ' + yearOfIncorporation
        // Redirect to the company lookup page
        res.redirect('/confirm-company')
      })
    }
  })

  router.get('/confirm-company', function (req, res) {
  // Render the confirm company page
    res.render('confirm-company', {
    // To use the company data on that page use the following
      company: req.session.company,
      companyIncorp: req.session.companyIncorp
    })
  })

  router.post('/confirm-company', function (req, res) {
    res.redirect('/auth-code')
  })
}
