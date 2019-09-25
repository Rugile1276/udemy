var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.send("Welcome to my asignment!")
})

app.get("/speak/:animal", function (req, res) {

	var animals = {
		pig : "Oink",
		cow : "Muu",
		dog: "Woof"
	}
	var animal = req.params.animal;
	res.send("The  " + animal + " says " + animals[animal]);
})

app.get("/repeat/:word/:number", function (req, res) {
	var result = '';
	var word = req.params.word;
	var number = Number(req.params.number);
	for (var i = 0; i < number; i++) {
		result += word;
	}
	res.send(result);
})

app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("Server has started!");
});