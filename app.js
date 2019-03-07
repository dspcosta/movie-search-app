const express = require("express");
const app = express();
const request = require("request");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist/css"));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/results", function(req, res) {
    let query = req.query.search;
    let url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;

    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            let result = JSON.parse(body);

            res.render("results", { result: result });
        } else {
            console.log(error);
        }
    });
});

app.get("/results/:movie", function(req, res) {
    let movie = req.params.movie;

    let url = "http://www.omdbapi.com/?apikey=thewdb&t=" + movie;

    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            let movieSearch = JSON.parse(body);

            res.render("movie", { movieSearch: movieSearch });
        } else {
            console.log(error);
        }
    });
});

app.get("/search", function(req, res) {
    res.render("search");
});

app.get("*", function(req, res) {
    res.render("home");
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Movie search APP has started");
});
