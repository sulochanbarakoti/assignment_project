import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'


const HomePage = () =>{

    const [persons, setPersons] = useState([])

    let Navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log('promise fulfilled')
            setPersons(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[])

    console.log(persons)
    return(
        <div>
            <div className="row-1">
                    {persons.map((item, index) => 
                        <div className='row-1-1'>
                            <div key= {index}> 
                                <div className='circle'><div>{item.name[0]}</div></div>
                                <div className='name'>{item.name}</div>
                                <div className='usename'>@{item.username}</div>
                                <div className='website'>{item.website}</div>
                                <div className='button'><button onClick={()=>Navigate(`/userdetails/${item.id}`)}>MORE DETAILS</button></div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default HomePage;