var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Feedback = require("./feedback");

mongoose.connect('mongodb://localhost:27017/portfolio', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/", function (req,res) { 
    res.render("index");
});

app.get("/navigation", function(req,res){
    res.render("navigation");
})

 app.get("/*", function (req, res) { 
     res.send("404 page not found");
  })

  var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
  var server_host = process.env.YOUR_HOST || '0.0.0.0';
  app.listen(server_port, server_host, function() {
      console.log('Listening on port %d', server_port);
  });