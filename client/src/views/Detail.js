import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate,Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
export default props => {
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [props.id])
    return (
        <div>
            <h1>Pet Shelter</h1>
            <h4>Details {pet.name}     <DeleteButton petId={pet._id} successCallback={() => navigate("/pets")}/></h4>
            
            <Link to={"/pets"}>back to home</Link>
            <hr/>
            <p> Pet type: {pet.type}</p>
            <p>Description : {pet.description}</p>
            <p>
               Skills:
            </p>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>
            
        </div>
    )
}
