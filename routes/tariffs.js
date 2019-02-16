var express = require('express');
var router = express.Router();

/* GET tariffs page. */
router.get('/', function(req, res, next) {
  res.render('tariffs', { title: "Nos tarifs d'adhésion annuels, mensuels et hebdomadaires" });
});

module.exports = router;
