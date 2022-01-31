module.exports = function (router) {

router.get('/update/remove', function (req, res) {
    req.session.type = req.query.type
    res.render('update/remove', {
    })
 })
router.post('/update/remove', function (req, res) {
    res.redirect('../check-your-answers?type=remove')
})

}