import React,{ useState } from 'react'
import axios from 'axios';
import PetForm from '../components/PetForm';
import { Link } from '@reach/router';
export default () => {
    const [errors, setErrors] = useState([]); 
    
   
    const createPet = pet => {
        axios.post('http://localhost:8000/api/pet', pet)
            .then(res=>{
               console.log(res.data)
            })
            
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            






    }
    return (
        <div>
             {errors.map((err, index) => <p key={index}>{err}</p>)}
            <h1>Pet Shelter</h1>
            <h5>Know a pet needing a home ?</h5>
            <Link to={"/pets"}>back to home</Link>
            <hr/>
           <PetForm onSubmitProp={createPet} initialName="" />
           
        </div>
    )
}
