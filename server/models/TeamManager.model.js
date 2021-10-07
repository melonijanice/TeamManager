const mongoose=require("mongoose");
const GamesSchema = new mongoose.Schema({
    gameId:{
        type:String,
        required:[true, "A game Id is required"],
        default:"game1"
    },
    gameName:{
        type:String,
        required:[true, "A game name is required"],
        default:"game1"
    },
    gameStatus:
    {
        type:String,
        enum:["playing","not playing","undecided"],
        default:"undecided"
    }
})

const PlayersSchema = new mongoose.Schema({
    playerName: {
        type:String,
        required:[true, "A players name is required"],
        minlength:[2, "A name must be atleast 2 characters long"]
    },
    preferredPosition: {
        type:String
    },
    game:{type:[GamesSchema],
        default:[{gameId:"1",gameName:"game1",gameStatus:"undecided"},{gameId:"2",gameName:"game2",gameStatus:"undecided"},{gameId:"3",gameName:"game3",gameStatus:"undecided"}]
    }
    
    
})
module.exports = mongoose.model('Players', PlayersSchema);