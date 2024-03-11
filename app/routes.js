//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get('/directors', function (req, res) {

  // Render the confirm company page
  res.render('directors', {
    // To use the company data on that page use the following
    journey: req.session.journey,
    company: req.session.company,
    officers: req.session.officers
  })
})

router.get('/check-your-answers', function (req, res) {
  // Render the confirm company page
  res.render('check-your-answers', {
    // To use the company data on that page use the following
    company: req.session.company,
    officers: req.session.officers,
    type: req.session.type,
    nameRemove: req.session.removename,
    updateName: req.session.name
  })
})

router.get('/confirmation', function (req, res) {
  // Render the confirm company page
  res.render('confirmation', {
    // To use the company data on that page use the following
    type: req.session.type,
    company: req.session.company,
    name: req.session.name,
    nameRemove: req.session.removename
  })
})

router.get('/auth-code', function (req, res) {
// Render the confirm company page
  res.render('auth-code', {
  // To use the company data on that page use the following
    company: req.session.company
  })
})

router.post('/auth-code', function (req, res) {

  //if company number is 83334445
  if (req.session.data['companynumber'] === '83334445') {

    res.redirect('./no-directors')
  }
  else{

    res.redirect('/directors#people')
 
  }
})

router.get('/', function (req, res) {
  req.session.destroy();
  res.render('index', {
  })
})

router.get('/start', function (req, res) {
  req.session.journey = req.query.journey
  res.render('start', {
  })
})

router.get('/chs', function (req, res) {
  req.session.journey = req.query.journey
  res.render('chs', {
  })
})

router.get('/confirmation-statement/task-list', function (req, res) {
  req.session.journey = req.query.journey
  res.render('confirmation-statement/task-list', {
  })
})

router.post('/sign-out', function (req, res) {

  if (req.session.data['signOut'] === 'yes') {

    res.redirect('https://find-and-update.company-information.service.gov.uk/')
    
  }
  if (req.session.data['signOut'] === 'no') {

    javascript:history.back()
   
  }
  else{
     
  }


})

router.post('/other-screens/cancel', function (req, res) {

  if (req.session.data['cancel'] === 'yes') {

    res.redirect('../directors')
    
  }
  if (req.session.data['cancel'] === 'no') {

  
   
  }
  else{
     
  }


})


