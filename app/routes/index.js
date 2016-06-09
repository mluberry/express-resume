var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/wo', function(req, res, next) {
  res.render('wo', { title: 'Wo' });
});

router.get('/sk', function(req, res, next) {
  res.render('index', { title: 'Sk' });
});

router.get('/ed', function(req, res, next) {
  res.render('index', { title: 'Ed' });
});

router.get('/abm', function(req, res, next) {
  res.render('index', { title: 'Abm' });
});

module.exports = router;
