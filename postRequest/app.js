let express = require('express');
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
let friends = ["Denis", "Ertem", "Yulia", "Andrei", "Nikita", "Kristina", "Vitaliy"];
 
app.get('/', function (req, res) {
  res.render('home');
})

app.post('/addfriend', function(req, res) {
    let newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
})

app.get('/friends', function(req, res){
    res.render("friends", {friends: friends});
})
 
app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Server starter");
});