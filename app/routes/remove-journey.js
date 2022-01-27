module.exports = function (router) {
router.post('/update/remove', function (req, res) {
    res.redirect('../check-your-answers?type=remove')
})

}