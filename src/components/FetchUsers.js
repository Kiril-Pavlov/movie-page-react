import React,{useState, useEffect} from "react";
import axios from "axios"
import User from "./User";

function FetchUsers(){
    
    const [users,setUsers] =useState([]);

    useEffect(function(){
        function getUsers(){
            axios.get("https://api.github.com/users").then(data=>{
                //console.log(data.data);
                setUsers(data.data);
                //console.log(data.data);
            })
        }
        getUsers();
    },[]);
    


    return <div>
        {users.map(user => <User username={user.login} />)}
       
    </div>
}

export default FetchUsers