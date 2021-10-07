const Players = require('../models/TeamManager.model'); 
module.exports.getAll=(request,response)=>
{
    Players.find({})
            .then((players)=>{
                console.log("Fetching all players...");
                console.log(players);
                response.json(players);
            })
            .catch(err =>
        {
            console.log("Unable to fetch the Player");
            response.json(err)}
        );
}
module.exports.create=(request,response)=>
{
    Players.create(request.body)
    .then(players=>{
        console.log("Sucessfully added a player");
        response.json(players)}
    )
    .catch(err=>{
        
        
        response.status(400).json(err)//catch errors
        console.log("Error adding to DB at API");
        })
}

module.exports.delete=(request,response)=>
{
    Players.findByIdAndDelete(request.params.id)
    .then(deletedplayer=>response.json(deletedplayer))
    .catch(err=>response.json(err))
}