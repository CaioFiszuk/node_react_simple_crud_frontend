import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {api} from '../../services/api';

export function View(){
    const {id} = useParams();
    const [user, setUser] = useState("");

    const getUser = async ()=>{
        const response = await api.get(`/users/${id}`);
    
        const data = response.data;
    
        console.log(data);
        setUser(data);
    }

    useEffect(()=>{
      getUser();
    }, []);

    return(
        <>
        <h1>detalhes</h1>
        {
            <h4>{user.username}</h4>
        }
        </>
    );
}