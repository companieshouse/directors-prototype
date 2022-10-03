module.exports = function (router) {
  // Filter to determine if user is incorrectly trying to use the update screens to appoint a new director
  router.post(‘/update/confirm-update’, function(req, res) {
      if (req.session.data[‘confirmUpdate’] == ‘yes’) {
          res.redirect(‘/update/confirm-update-stop’);
      } else {
          res.render(‘update/date-of-change’);
      }
  }) 
}
