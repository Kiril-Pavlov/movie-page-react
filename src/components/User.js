import React,{useState, useEffect} from "react";
import axios from "axios";

function User(props){
    
    const [user,setUser] =useState({});

    useEffect(function(){
        function getUser(){
            axios.get("https://api.github.com/users/"+props.username).then(data=>{
                setUser(data.data);
                console.log("here",data.data)
            })
        }
        getUser();
        //console.log(User)
    },[]);
    //console.log(user)
    return <div>
        <div>Username:{props.username}</div>
        <div>Public repos:{user.public_repos}</div>
        <div>Public gists:{user.public_gists}</div>
        <div>Folowers:{user.followers}</div>
        <div>Following:{user.following}</div>
        <br />
    </div>
}

export default User