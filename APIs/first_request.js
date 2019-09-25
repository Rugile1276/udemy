var request = require('request');
request('http://www.google.com', function (error, response, body) {
	if(error){
		console.log("Someth8ing went wrong!");
		console.log(error);
	} else {
		if(response.statusCode == 200){
			console.log(body);
		}
	}
})