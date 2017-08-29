var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
     res.render('locations', { title: 'Admin' });
     //res.send(JSON.stringify({ longitude: 23.123123, latitude: 41.213123 })); 
});

module.exports = router;
