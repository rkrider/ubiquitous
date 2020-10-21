var express = require("express"),
    app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/", function (req,res) { 
    res.render("index");
});

app.get("/allcourses", function(req,res){
    res.render("allcourses");
});


app.get("/allcourses/datascience", function(req,res){
    res.render("dataScience");
});

app.get("/login", function(req,res){
    res.render("login");
});


 app.get("/*", function (req, res) { 
     res.send("404 page not found");
  })

  var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
  var server_host = process.env.YOUR_HOST || '0.0.0.0';
  app.listen(server_port, server_host, function() {
      console.log('Listening on port %d', server_port);
  });