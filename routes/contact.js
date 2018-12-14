var express = require('express');
var router = express.Router();

/* GET why titan page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact', leaflet: true});
});

module.exports = router;
