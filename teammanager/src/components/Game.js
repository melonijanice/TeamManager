import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link,navigate } from '@reach/router';
const Game=(props)=>{
    const game_status=props.game_status;
    const[playing,setplaying]=useState("");
    const[notPlaying,setnotPlaying]=useState("");
    const[undecided,setundecided]=useState("");

  
    useEffect(() => {
        
        if (game_status==="playing"){
            setplaying("playing");
        }
        else
        {
            setplaying("");
        }
        if (game_status==="notPlaying"){
            setnotPlaying("notPlaying");
        }
        else
        {
            setnotPlaying("");
        }
        if (game_status==="undecided"){
            setundecided("undecided");
        }
        else
        {
            setundecided("");
        }
        

      
    },[])
    const changeStyles=(event)=>
    {
        if(event.target.name==="playing"){
            setplaying("playing");
            setnotPlaying("");
            setundecided("");
        }
        if(event.target.name==="notPlaying")
        {
            setnotPlaying("notPlaying");
            setplaying("");
            setundecided("");
        }
        if(event.target.name==="undecided")
        {
            setundecided("undecided");
            setnotPlaying("");
            setplaying("");
        }
    }
    return(
       <div><button className={playing} name="playing" onClick={changeStyles}>Playing</button> 
            <button className={notPlaying} name="notPlaying" onClick={changeStyles}> Not Playing</button> 
            <button className={undecided} name="undecided" onClick={changeStyles}>Undecided</button></div>
            
    )
}
export default Game;