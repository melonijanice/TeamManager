import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link,navigate } from '@reach/router';
import Game from '../components/Game';
const ManageStatus=(props)=>{
    const[players,setPlayers]=useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then(response=>{
            setPlayers(response.data);})
        .catch(err=>console.log(err))
    },[])
    const passStatus=(player)=>
    {
        
        return player.game.filter((games)=>games.gameId===props.id)[0].gameStatus
    }
    return(
        <div className="App"><Link to={"/players/"}>List</Link> | <Link to={"/players/new"}>Add Player</Link>
        <table>
            <th>Team Name</th><th>Preferred Position</th><th>Actions</th>
            {players.sort((a, b) => a.playerName.localeCompare(b.playerName)).map((player,idx)=>
            (<tr key={idx}>
            <td>
            <Link to={"/players/"+player._id}>{player.playerName}</Link> 
            </td>
            <td>{player.preferredPosition}</td>
            <td>
                <Game game_status={passStatus(player)}/>
            </td>
       </tr>))}
        </table>
        </div>
    )
}
export default ManageStatus;