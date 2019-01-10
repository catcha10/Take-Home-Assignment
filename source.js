//xml source file url
var fileUrl = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml";

//import http for data retrieve xml from url 
var https = require('https');
let xmlParser = require('xml2json');

https.get(fileUrl, (res) => {
  const { statusCode } = res;
  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } 
  
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  let xmlData = '';
  res.on('data', (chunk) => { xmlData += chunk; });
  res.on('end', () => {
    try {
	 
	   let dataList = restructure(JSON.parse(xmlParser.toJson(xmlData)));

		//sorting currency in ascending order
		for(let j=0; j<dataList.length ; j++){
			dataList[j]['Cube'] = dataList[j]['Cube'].sort(dynamicSort("currency"));
		}
		
		//exports parseData for insert to database purpose
		module.exports.parsedData = dataList;

    } catch (e) {
      console.error(e.message);
    }
  });
  
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

//return sorted json alphabetical sorted in ascending order
var dynamicSort = property => {
	var sortOrder = 1;

	if(property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}

	return function (a,b) {
		if(sortOrder == -1){
			return b[property].localeCompare(a[property]);
		}else{
			return a[property].localeCompare(b[property]);
		}        
	}
}//dynamicSort	

//return only data in 'Cube'
var restructure = param => {
let output = [];
let part = param['gesmes:Envelope']['Cube']['Cube'];
  return part;
}//function

