var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/', function(req, res, next){
  res.render('index')
})

router.get('/list', function(req, res, next){
  db.getAllResources()
   .then(resources => {
       res.render('list', {
         resources: resources
       })
     })
     .catch(error => {
       res.render('error', {error: error})
     })
})

// router.update('/list', function(req, res, next ){
//   db.
// })

router.get('/list', function(req, res, next) {
 res.render('', { title: 'List of Resources' });
});


module.exports = router;
