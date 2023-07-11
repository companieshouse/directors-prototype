module.exports = function (router) {
    router.get( '/add/name', function ( _req, _res ) {
  
  router.post( '/add/name', function ( req, res ) {
      var firstName = req.session.data['first-name']
      var lastName = req.session.data['last-name']
      var errors = []
      var firstNameHasError = false
      var lastNameHasError = false
      if (req.session.data['first-name'] === '') {
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
          firstName: firstName,
          lastName: lastName,
              errorFirstName: firstNameHasError,
              errorLastName: lastNameHasError,
              errorList: errors
          })
      } else {
          res.redirect( '/add/date-of-birth' )
      }
    })
    } ) }