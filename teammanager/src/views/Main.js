import axios from 'axios';
import React, { useState } from 'react';
import { Link,navigate } from '@reach/router';
import TeamManagerForm from '../components/TeamManagerForm';

function Main() {
  const [errors, setErrors] = useState([]); 
    const createAuthor=(newPlayer)=>{
        axios.post('http://localhost:8000/api/players', newPlayer)
           .then(res=>{
            console.log(res)
             
            
            console.log(newPlayer)
            console.log("Created players" + res.data);
            navigate("/players/");
             
        })
           .catch(err=>{
      
             setErrors(err.response.data.error);
             
          console.log(err)})
    }
  return (
    <div className="App">
      <div>
      <Link to={"/players/"}>List</Link> | <Link to={"/players/new"}>Add Player</Link>
      <TeamManagerForm initialName="" onSubmitProp={createAuthor} errorData={errors}></TeamManagerForm>
      </div>
    </div>
  );
}

export default Main;