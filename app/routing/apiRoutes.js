var friends = require('../data/friends.js');
//require friends data from data/friends.js
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res){
        console.log("this is from the post route");
        var friendInput = req.body;
        console.log(friendInput)
        var response = friendInput.scores;
console.log(response)
        var friendName = "";
        
        var friendImage = "";
        
        var difference = 150

        for (var i = 0; i < friends.length; i++) {
            
            var different = 0;
            
            for(var j = 0; j < response.length; j++){
                
                different += Math.abs(friends[i].scores[j] - response[j]);
            } 
            if (different < difference) {
                
                difference = different;
                
                friendName = friends[i].name;
                console.log(friendName)
                friendImage = friends[i].image;
                console.log(friendImage)
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