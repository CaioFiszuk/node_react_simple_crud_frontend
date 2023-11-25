import { useState} from "react";
import {api} from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Create(){
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  async function handleRegister(){
    const payload = {
      username: username
    }

    await api.post("/users", payload);

    navigate(-1);
  }
    return(
        <>
          <h2>Create User</h2>
          <hr />
          <input type="text" 
          className="form-control"
          onChange={e => setUsername(e.target.value)}
          />

          <button className="btn btn-success" onClick={()=>handleRegister()}>Create</button>

        </>
    )
}