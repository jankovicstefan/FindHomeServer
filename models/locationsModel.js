var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationsSchema = new Schema({
    lat: Number,
    lon: Number,
    price: Number,
    desc: String,
    type: String,
    num: String
});

var Location =  mongoose.model('Location', locationsSchema);

module.exports = Location;