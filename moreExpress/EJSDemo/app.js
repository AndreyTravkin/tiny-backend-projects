let express = require('express');
let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.get("/fallinlovewith/:thing", function(req, res){
    let thing = req.params.thing;
    res.render("love", {thingVar: thing});
})

app.get("/posts", function(req, res) {
  let posts = [
    {title: "Post 1", author: "Susy"},
    {title: "My adorable pet Bunny", author: "Charlie"},
    {title: "Can you beleive this Poemsky", author: "Colt"}
  ];

  res.render("posts", {posts: posts});  
})

app.get("*", function(req, res){
	res.send("WRONG ROUTE!");
})


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
