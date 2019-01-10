var mongoose = require('mongoose');

//Setup schema
var rateSchema = mongoose.Schema({
	currency:String,
	rate:Number
},{ _id : false });
var Rate = mongoose.model('Rate', rateSchema);

var mainSchema = mongoose.Schema({
	time:{ type: Date, required: true },
	Cube:[rateSchema]
});
var Currency = module.exports = mongoose.model('Currency', mainSchema);  

module.exports.get = function (callback, limit) {
    Currency.find(callback).select('time Cube -_id');
}