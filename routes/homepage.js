var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'homepage', 
    { layout: 'homepage_layout', 
      title: 'Bienvenue chez Titan fitness - une salle de musculation à Gland en Suisse'}
  );
});

module.exports = router;
