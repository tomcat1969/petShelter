
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

import PetList from '../components/PetList';
export default () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => { 
        axios.get('http://localhost:8000/api/pets')
            .then(res =>{ 
                setPets(res.data)
                setLoaded(true);

            });
    }, [])
    const removeFromDom = petId => {
        setPets(pets.filter(a => a._id !== petId));
    }
   
    return (
        <div>

           <h1>Pet Shelter</h1>
           <h4>These pets are looking for a good home</h4>
            <Link to={"/pet"}>Add an pet to the shelter</Link>
            <hr/>
           
           {loaded && <PetList pets={pets} removeFromDom={removeFromDom}/>}
        </div>
    )
}
