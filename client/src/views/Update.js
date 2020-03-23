import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import PetForm from '../components/PetForm';

export default props => {
    const { id } = props;
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false); 

    useEffect(() => { 
        
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                
                setPet(res.data);
                
                setLoaded(true);
            })
    }, [id])
    const updatePet = pet => {
        axios.put('http://localhost:8000/api/pet/' + id, pet)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Pet Shelter</h1>
            <h5>Edit {pet.name}</h5>
            
            <Link to={"/pets"}>back to home</Link>
            <hr/>
            {loaded && (
                
                    <PetForm
                        onSubmitProp={updatePet}
                        initialName={pet.name}
                        initialType = {pet.type}
                        initialDescription = {pet.description}
                        initialSkill1 = {pet.skill1}
                        initialSkill2 = {pet.skill2}
                        initialSkill3 = {pet.skill3}
                    />
                    
                
            )}
        </div>
    )
}
