var path = require("path");
//require friends data from data/friends.js
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){

    })



    // get form data 
    //do post and math inside of it

};