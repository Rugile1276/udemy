var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.send("HII");
})

app.get("/bye", function (req, res) {
	res.send("GOODBYE");
})

app.get("/dog", function (req, res) {
	res.send("MEOW");
})

app.get("*", function (req, res) {
	res.send("YOU ARE A STAR");
})

app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("Server has started!");
});