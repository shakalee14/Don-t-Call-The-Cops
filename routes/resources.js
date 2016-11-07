const express = require('express');
const router = express.Router();
const db = require('../database')


// router.get('/list', function(req, res, next) {
//   console.log();
//  db.getAllResources()
//  .then(resources => {
//      res.render('list', {
//        resources: resources
//      })
//    })
//    .catch(error => {
//      res.render('error', {error: error})
//    })
// });


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

router.get('/list', function(req, res, next) {
 res.render('', { title: 'List of Resources' });
});

router.post('/', function(request, response){
 const resourceInfo = request.body
 db.createResource( resourceInfo )
   .then( resource => {
     response.redirect('/list')
   })
   .catch(error => {
     response.render('error', {error: error})
   })
})

module.exports = router;
