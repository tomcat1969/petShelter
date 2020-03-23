import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data));
    }, [])
    const removeFromDom = petId => {
        setPets(pets.filter(p => p._id !== petId))
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions </th>
                </tr>
                {pets.map((pet, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td >
                                            
                                                {pet.name}
                                           
                                        </td>
                                        <td>
                                            {pet.type}
                                        </td>
                                        <td>
                                            <Link to={"/pet/" + pet._id}>
                                                details
                                            </Link> |
                                            <Link to={"/pets/" + pet._id + "/edit"}>
                                                Edit
                                            </Link> |
                                            <DeleteButton petId={pet._id} successCallback={()=>removeFromDom(pet._id)}/>
                                        </td>
                                    </tr>
                                )
                            })}
            </table>
           
        </div>
    )
}
