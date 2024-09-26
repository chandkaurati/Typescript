import React, { useEffect, useState } from "react";
import axios from "axios"
import Loading from "./Loder";

interface UserProps{
    data?:string
}

interface Users {
    name : {
     first:string,
     last : string
    };
    location:{
    city : string,
    state : string,
    country: string 
    }
    email:string
}



const UserList:React.FC<UserProps> = (props)=>{
    const [users, setUsers] = useState<Users[]>([])
    const [loading, setLoading] = useState<Boolean>(false)
    const url = "https://randomuser.me/api/?results=10"
    useEffect(()=>{
    const getData = async ()=>{
        try {
        setLoading(true)
        const {data} = await axios.get(url)
        setUsers(data.results)
        } catch (error) {
        console.log(error) 
        } finally{
            setLoading(false)
        }
    }

    getData()
    },[])

    if(loading){
    return <Loading/>
    }
     return(
        <>
        <ul>
            {users?.map((user)=>{
               return <li key={user.name.first}>
                <span>{user.email}</span>
                <span>{user.name.first} <p>{user.name.last}</p></span>
                <span>city : <p>{user.location.city}</p></span>
                <span>state : <p>{user.location.state}</p></span>
                <span>country : <p>{user.location.country}</p></span>
               </li>
            })}
        </ul>
        </>
     )
}


export default UserList