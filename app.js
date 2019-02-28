const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");

//app.use(express.static("public"));


app.get("/", function(req, res){
   res.render("home");
    
})

app.get("/results", function(req, res){
    let query = req.query.search;
    let url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
    request(url, function(error, response, body){
                if(!error && response.statusCode == 200){
                  let result = JSON.parse(body);
                  
                  res.render("results", {result : result});
                } else {
                    console.log(error);
                }
            })
    
})

app.get("/search", function(req, res){
    res.render("search");
})

app.get("*", function (req, res){
    res.render("home");
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Movie search APP has started');
})