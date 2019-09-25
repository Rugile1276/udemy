var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extened: true}));

app.set("view engine", "ejs")

var campgrounds = [
		{name: "Tom Rey", image: "https://www.photosforclass.com/download/pixabay-4303359?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e3d5404957a514f6da8c7dda793f7f1636dfe2564c704c732678d09544c45e_960.jpg&user=chanwity"},
		{name: "Kill Pen", image: "https://www.photosforclass.com/download/pixabay-1189929?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c732678d09544c45e_960.jpg&user=Noel_Bauza"},
		{name: "Fort Ton", image: "https://www.photosforclass.com/download/pixabay-3893587?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c732678d09544c45e_960.jpg&user=fgmsp"},
		{name: "Kim Eley", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732678d09544c45e_960.jpg&user=Pexels"},
		{name: "Filll Rey", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732678d09544c45e_960.jpg&user=Pexels"}
	];

app.get("/", (req, res) => {
	res.render("landing");
});

app.get("/campgrounds", (req, res) => {

	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res) => {
	
	var name = req.body.name;
	var imageUrl = req.body.imageUrl;
	var newCampground = {name: name, image: imageUrl};
	campgrounds.push(newCampground);
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", (req, res) => {
	res.render("new");
});




app.listen(process.env.POST || 3000, process.env.ID, () =>{
	console.log("Yelp camp has started!!");
})