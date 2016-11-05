var express = require('express');
var router = express.Router();
var db = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addresource', function(req, res, next) {
  res.render('createresource', { title: 'List of Resources' });
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
