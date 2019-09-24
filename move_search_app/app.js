var express = require("express");
var app = express();

app.set("view engine", "ejs");

var request = require("request");


app.get("/", function(req, res){
	res.render("search");
})

app.get("/results", function(req,res){
	var searchTerm = req.query.search;
	request("http://www.omdbapi.com/?s=" + searchTerm + "&apikey=thewdb", function(error, response, body){
		if (!error && response.statusCode === 200) {
			var parsedData = JSON.parse(body);
			res.render("results", {data: parsedData});
		}else {
			res.send(response.statusCode);
		}
	})
})












app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Movie app has started!");
})