const express = require('express');
const router = express.Router();
const db = require('../database')

router.get('/', function(req, res, next) {
 res.render('list', { title: 'List of Resources' });
});

router.post('/', function(request, response){
 const resourceInfo = request.body
 db.createResource( resourceInfo )
   .then( resource => {
     response.redirect('/')
   })
   .catch(error => {
     response.render('error', {error: error})
   })
})

module.exports = router;
