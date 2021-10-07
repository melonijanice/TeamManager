import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link,navigate } from '@reach/router';
import Delete from '../components/Delete';
const PlayerList=()=>
{
    const[players,setPlayers]=useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then(response=>{
            setPlayers(response.data);
            console.log(response.data)})
        .catch(err=>console.log(err))
    },[])
    const updateAfterDelete =(deletedPlayerId)=>{
        let filteredPlayersArray=players.filter((PlayerObj)=>{
            return PlayerObj._id!==deletedPlayerId;
        })
        setPlayers(filteredPlayersArray)
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
            <Delete id={player._id} afterDelete={updateAfterDelete}/></td>
       </tr>))}
        </table>
        </div>
    )
}
export default PlayerList;