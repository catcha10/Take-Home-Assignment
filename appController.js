//Import Currency model
const Currency = require('./appModel');

// get the source from xml http 
var source = require('./source');
var mongoose = require( 'mongoose' );

//insert data into database ### Task 1 - Load database
exports.index = (req,res) => {
   
   			//drop collection before insert all data
			mongoose.connection.db.dropCollection('currencies', function(err, result) {
				
				//insert all data into database
				 Currency.insertMany(source.parsedData, function(err, docs) {
					 	if (err) res.send(err);
					 	else{ 
							
							Currency.get(function (err, results) {
							        if (err) {
							            res.json({
							                status: "error",
							                message: err,
							            });
							        }
									res.header("Content-Type",'application/json');
									res.send(JSON.stringify(results, null, 4));
							    });
								
					    }
				});
			});	
};

//retrieve and return latest from the database ### Task 2 - `GET /rates/latest`
exports.latest = (req, res) => {

	Currency.findOne(function (err, currency) {
	  if (err) res.send(err);
	  if (currency) {
        	if (err) {
            	res.json({
                	status: "error",
                	message: err,
            	});
        	}
		
			var results={}, out={};
			
			//restructure json 
			for(var i=0;i<currency.Cube.length;i++){
				out[currency.Cube[i].currency] = currency.Cube[i].rate;
			}
			results['base']= 'EUR';
			results['rates']= out;
		
			console.log("task 2: " + results);
			res.header("Content-Type",'application/json');
			res.send(JSON.stringify(results, null, 4));
	  }
	}).sort({time:-1}).select('time Cube -_id');	
};

//Return a set of data with date (YYYY-MM-DD`) ### Task 3 - `GET /rates/YYYY-MM-DD`
exports.bytime = (req,res) => {
	Currency.findOne({'time':req.params.time} , function (err, currency) {
		if (err) res.send(err);
	    if (currency) {
        	if (err) {
            	res.json({
                	status: "error",
                	message: err,
            	});
			}
			var results={}, out={};
			
			for(var i=0;i<currency.Cube.length;i++){
				out[currency.Cube[i].currency] = currency.Cube[i].rate;
			}
			results['base']= 'EUR';
			results['rates']= out;
			console.log(results);
			
			res.header("Content-Type",'application/json');
			res.send(JSON.stringify(results, null, 4));
        }
	});
};

//return with rates analyze ### Task 4 - `GET /rates/analyze`
exports.analyze = (req, res) => {

	Currency.aggregate([
	{ $unwind: "$Cube" },
	{ $group:{
			_id:"$Cube.currency",
			avg: {$avg:"$Cube.rate"},
			min: {$min:"$Cube.rate"},
			max: {$max:"$Cube.rate"}
		}
	},
	{
	   $project:{
				"currency": "$_id",
				 "analysis" : {
					 "avg": "$avg",
					 "min": "$min",
					 "max": "$max"
				 }
		}
	},{$sort:{currency: 1}}], function (err, currency) {
  	  if (err) res.send(err);
  	  if (currency) {
          	if (err) {
              	res.json({
                  	status: "error",
                  	message: err,
              	});
          	}
			
			var results={}, out={};
			
			//restructure json
			for(let i=0; i<currency.length; i++){
				results["base"] = "EUR";
				results[currency[i]["currency"]]={
					"max":currency[i]["analysis"]["max"],
					"min":currency[i]["analysis"]["min"],
					"avg":currency[i]["analysis"]["avg"]
				};
			}
      	  	console.log(results);
			res.header("Content-Type",'application/json');
			res.send(JSON.stringify(results, null, 4));
  	  }
	});
};

