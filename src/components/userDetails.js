import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from "axios";

const UserDetails = () =>{

    let {id} = useParams();
    const [userinfom, setUserinfom] = useState([])

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>{
            console.log(res.data)
            console.log('read')
            setUserinfom(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[])

    return(
        <div>
            <div className="box">
                <div>-name: {userinfom.name}</div>
                <div>-username: {userinfom.username}</div>
                <div>-email: {userinfom.email}</div>
                <div>-phone: {userinfom.phone}</div>
                {/* <div>-company: {userinfom.company.name}</div> */}
                <div>-website: {userinfom.website}</div>

            </div>
        </div>
    );
}

export default UserDetails;