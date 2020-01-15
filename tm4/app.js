const express = require('express');
const app = express();
//const ejs = require('ejs')
const mustache = require('mustache-express'); //is a heavy template engine, well documented


app.use("/", express.static(__dirname + '/public'));
app.engine('html', mustache());
//app.engine('html', ejs);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get("/",function(req,res){
	res.render("index"); //renders index page
})

app.listen(3000);