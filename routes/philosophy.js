var express = require('express');
var router = express.Router();

/* GET why titan page. */
router.get('/', function(req, res, next) {
  res.render('philosophy', { title: 'Notre philosophie du fitness'});
});

module.exports = router;
