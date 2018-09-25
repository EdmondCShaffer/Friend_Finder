var friends = require('../data/friends.js');
//require friends data from data/friends.js
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res){
        console.log("this is from the post route");
        var friendInput = req.body;
        
        var response = friendInput.scores;

        var friendName = "";
        
        var friendImage = "";
        
        var difference = 150

        for (var i = 0; i < friends.length; i++) {
            
            var different = 0;
            
            for(var j = 0; j < response.length; j++){
                
                different += Math.abs(friends[i].scores[j] - responses[j]);
            } 
            if (different < difference) {
                
                difference = different;
                
                friendName = friends[i].name;
                
                friendImage = friends[i].image;
			}
        }
        res.json({
            name: friendName,
            image: friendImage
        });

        friends.push(friendInput);
        

    })



    // get form data 
    //do post and math inside of it

};