var express = require('express');
var router = express.Router();

/* GET tariffs page. */
router.get('/', function(req, res, next) {
  res.render('tariffs', { title: 'Tariffs' });
});

module.exports = router;
