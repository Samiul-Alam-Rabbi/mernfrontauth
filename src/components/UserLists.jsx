import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLists = () => {
    const [user, setUser] = useState([])
    const [totalusers, setTotalusers] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://mernfrontauth.onrender.com/getusers").then((res)=> {
            console.log(res.data);
            setUser(res.data.users);
            setTotalusers(res.data.total);
        }).catch(err=>console.log(err));

        const token = localStorage.getItem('TOKEN');
    
        if(!token) {
        navigate("/login");
        }
    }, [])
    
  return (
    <div>
        
        {/* {totalusers} */}
        {totalusers && <div>{totalusers}</div>}
        {user.map((user)=> {
            return (
                <div key={user._id}>
                    
                    <h1>UserEmail: {user.email}</h1>
                    <h1>UserName: {user.name}</h1>
                    <h1>Date: {user.createdAt}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default UserLists