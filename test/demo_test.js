// NPM install mongoose and chai. Make sure mocha is globally
// installed
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;


const Currency = require('../appModel');

describe('Database Tests', function() {
  //Before starting the test, create a sandboxed database connection
  //Once a connection is established invoke done()
  before(function (done) {
    mongoose.connect('mongodb://localhost/currencyrate');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to database!');
      done();
    });
  });
  describe('Test Database', function() {
	  //Setup schema
	 /* var rateSchema = mongoose.Schema({
	  	currency:String,
	  	rate:Number
	  },{ _id : false });
	  var Rate = mongoose.model('Rate', rateSchema);

	  var mainSchema = mongoose.Schema({
	  	time:{ type: Date, required: true },
	  	Cube:[rateSchema]
	  });*/
	  
    it('Saved new date to database', function(done) {
      var currency = Currency({
        time: '2019-01-10'
      });
 
      currency.save(done);
    });
	
	it('should be invalid if time is empty', function(done) {
	        var m = new Currency();
 
	        m.validate(function(err) {
	            expect(err.errors.time).to.exist;
	            done();
	        });
	    });
		
		
    it('Dont save incorrect format to database', function(done) {
      //Attempt to save with wrong info. An error should trigger
      var wrongSave = Currency({
        time: ' '
      });
      wrongSave.save(err => {
        if(err) { return done(); }
        throw new Error('Should generate error!');
      });
    });
    it('Should retrieve data from database', function(done) {
      //Look up the '2019-01-10' object previously saved.
      Currency.find({time: '2019-01-10'}, (err, name) => {
        if(err) {throw err;}
        if(name.length === 0) {throw new Error('No data!');}
        done();
      });
    });
  });
  //After all tests are finished drop database and close connection
  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });
});

