import React from 'react'
import { useState, useEffect } from 'react'
import styles, { layout } from '../style'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";





const ActivityDetails = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const API = "http://localhost:4000/api/v1/activities/" + id
    const [activity, setActivity] = useState([]);
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setActivity(data);
            });

    }, []);

    return (
        <div className=' text-secondary h-screen'>
           
               
                <img src={activity.asset && activity.asset.url} />
                    <h2 className='mt-5 text-xl '>{activity.name}</h2>
                    <div>{activity.minAge}-{activity.maxAge} år</div>
                    <div>{activity.description}</div>
                    
                    
                
            
        </div>
    )
}



export default ActivityDetails