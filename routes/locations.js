var express    = require('express');
var router     = express.Router();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Location   = mongoose.model('Location');

/* GET home page. */
router.get('/', function(req, res, next) {    
     Location.find(function (err,result) {            
         res.send(JSON.stringify(result,null,3));
         //console.log(result);
       });   
});

router.post('/add', function(req, res, next) {
    
    var location = new Location();
    location.lat = req.body.latitude;
    location.lon = req.body.longitude;
    location.type = req.body.type;
    location.price = req.body.price;
    location.desc = req.body.desc;
    location.num = req.body.num;
    
    location.save(function(err){
    if (err) 
        return handleError(err);
    else {
        console.log(req.body);
        res.redirect('/locations');
    }
    });
});

module.exports = router;