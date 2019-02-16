var express = require('express');
var router = express.Router();

/* GET why titan page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Localisation, coordonnées et carte pour notre gym', leaflet: true});
});

module.exports = router;
