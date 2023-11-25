import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {api} from '../../services/api';

export function Update(){
  const navigate = useNavigate();
  const {id} = useParams();
  const [user, setUser] = useState("");

  async function handleUpdate(){
    const payload = {
      username: user
    }

    await api.put(`/users/${id}`, payload);

    navigate(-1);
  }
   return(
    <>
      <h1>Update</h1>

      <input 

      value={"sun"}
      onChange={e=>setUser(e.target.value)} 
      />

      <button onClick={()=>handleUpdate()} className="btn btn-success">Update</button>
    </>
   );
}