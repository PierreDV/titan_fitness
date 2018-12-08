var express = require('express');
var router = express.Router();

/* GET why titan page. */
router.get('/', function(req, res, next) {
  res.render('contact', { layout: 'contact_layout', title: 'Contact'});
});

module.exports = router;
