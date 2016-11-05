var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
 db.getAllResources()
 .then(resources => {
     res.render('index', {
       resources: resources
     })
   })
   .catch(error => {
     res.render('error', {error: error})
   })
});

module.exports = router;
