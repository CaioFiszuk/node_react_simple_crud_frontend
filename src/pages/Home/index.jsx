import './style.css';

import { useEffect, useState } from 'react';
import {api} from '../../services/api';
import { Link } from 'react-router-dom';

export function Home(){
   const [users, setUsers] = useState([]);

   const getUsers = async()=>{
    const response = await api.get("/users");
    
    const data = response.data;

    console.log(data);
    setUsers(data);
   }

   async function deleteUser(id){
     await api.delete(`/users/${id}`);

     window.location.reload();
   }

   useEffect(()=>{
      getUsers()
   }, []);

    return(
        <>
        <div className="menu">
          <div className="actionField">
              <h2>CRUD App</h2>
              <Link to="/">Home</Link>
          </div>
        </div>

        <main>
            <Link to="/create" className='btn btn-primary'>Create</Link>

          <table className='table'>
            <thead>
                <tr>
                    <th>name</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index)=>(
                        <tr key={index}>
                          <td>{user.username}</td>
                          <td><Link to={`/view/${user.id}`} className='btn btn-info'>Read</Link></td>
                          <td><Link to={`/update/${user.id}`} className='btn btn-success'>Edit</Link></td>
                          <td><button className='btn btn-danger' onClick={()=>deleteUser(user.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </main>
        </>
    )
}