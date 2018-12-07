var express = require('express');
var router = express.Router();

/* GET why titan page. */
router.get('/', function(req, res, next) {
  res.render('why_titan', { title: 'Why Titan Fitness?'});
});

module.exports = router;
