var express = require('express');
var router = express.Router();

/* GET why titan page. */
router.get('/', function(req, res, next) {
  res.render('facilities', { title: 'Notre équipement de gym'});
});

module.exports = router;
