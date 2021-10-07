import React,{useEffect,useState} from 'react'
import { Link,navigate } from '@reach/router';
const TeamManagerForm=(props)=>
{
    const { initialName,onSubmitProp,errorData} = props;
    const [playerName, setName] = useState(initialName);
    const [preferredPosition, setPosition] = useState("");
    const [errors, setErrors] = useState("");
    const [enabled, setEnabled] = useState(true);
    const validateName=(event)=>
    {
        setName(event.target.value);
        if (event.target.value.length<2){
            setErrors("Name should be atleast 2 characters");
            setEnabled(true);
        }
        else{
            setEnabled(false);
            setErrors("");
        }
    }
    const onsubmitHandler=(event)=>
    {
        event.preventDefault();
        onSubmitProp({playerName,preferredPosition});
        
    }
    return(<div><form onSubmit={onsubmitHandler}>
        <p>
            <label>Player Name:</label><br/>
            <input type="text" value={playerName} onChange = {validateName}/>
            { errors ? 
                    <p>{errors}</p>
                    : ""
                }
          
        </p>
        <p>
            <label>Preferred position:</label><br/>
            <input type="text" value={preferredPosition} onChange = {e=>setPosition(e.target.value)}/>
        </p>
        <button disabled={enabled}>Add</button>
    </form></div>)
}
export default TeamManagerForm;