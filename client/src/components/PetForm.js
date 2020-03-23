import React, {  useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const { initialName,initialType,initialDescription,initialSkill1,initialSkill2,initialSkill3 ,onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skill1, setSkill1] = useState(initialSkill1);
    const [skill2, setSkill2] = useState(initialSkill2);
    const [skill3, setSkill3] = useState(initialSkill3);
    
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.get('http://localhost:8000/api/petbyname/' + name)
            .then(res => {
                
                if(res.data !== null){
                    alert("another pet has the same name")
                }else if(name.length < 3  ) {
                    alert("name must be at least 3 characters")
                }else if(type.length < 3) {
                    alert("type  must be at least 3 characters")
                }else if(description.length < 3) {
                    alert("description  must be at least 3 characters")
                }else{
                    onSubmitProp({name,type,description,skill1,skill2,skill3});
                    navigate("/pets")
        }
            })







        


       
        
    }
        
    return (
        <form onSubmit={onSubmitHandler}>

            <p>
                <label> Pet Name</label><br />
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            
            <p>
                <label> Pet Type</label><br />
                <input 
                    type="text" 
                    name="type" value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
            </p>

            <p>
                <label> Pet Description</label><br />
                <input 
                    type="text" 
                    name="description" value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
            </p>
            <h5>Skills (optional) :</h5>        
            <p>
                <label> Skill 1</label><br />
                <input 
                    type="text" 
                    name="skill1" value={skill1} 
                    onChange={(e) => { setSkill1(e.target.value) }} />
            </p>
            <p>
                <label> Skill 2</label><br />
                <input 
                    type="text" 
                    name="skill2" value={skill2} 
                    onChange={(e) => { setSkill2(e.target.value) }} />
            </p>
            <p>
                <label> Skill 3</label><br />
                <input 
                    type="text" 
                    name="skill3" value={skill3} 
                    onChange={(e) => { setSkill3(e.target.value) }} />
            </p>
           
            <input type="submit" />
        </form>
    )
}
