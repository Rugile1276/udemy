var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Adomas", "Atene", "Majus", "Paulina", "Eimantas"];


app.get("/", function (req, res) {
	res.render("home");
});

app.post('/addfriend', function(req, res) {
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.get("/friends", function (req, res) {
	res.render("friends", {friends: friends});
})


app.listen(process.env.PORT || 3000, process.env.IP, function () {
	console.log("Server has started!!");
})