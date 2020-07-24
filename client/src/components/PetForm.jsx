import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import '../App.css';
import { Link } from '@reach/router';

const PetForm = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkills1] = useState("");
    const [skill2, setSkills2] = useState("");
    const [skill3, setSkills3] = useState("");
    const [errors, setErrors] = useState ({});

    const CreatePet = e => {
        e.preventDefault();
        const adoptPet = {name, type, description, skill1, skill2, skill3};
        axios.post("http://localhost:8000/api/pets/new", adoptPet)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }else{
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }
    return(
        <div className="container">
            <h1 className="card-header bg-dark text-light mb-3"> Know a pet needing a home? </h1>
            <Link to="/" className="btn btn-dark float-right"> Go back home</Link>
                <form className="col-sm-8" onSubmit={CreatePet}>
                    <div className="form-group">
                        <label>Pet Name:</label>
                        <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name}/>
                        {errors.name ? <p className="text-danger"> {errors.name.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Pet Type:</label>
                        <input type="text" className="form-control" onChange={ e => setType(e.target.value)} value={type} />
                        {errors.type ? <p className="text-danger"> {errors.type.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Pet Description:</label>
                        <input type="text" value={description} className="form-control" onChange={ e => setDescription(e.target.value)}/>
                        {errors.description ? <p className="text-danger"> {errors.description.properties.message}</p>: "" }
                    </div>
                    <div className="row">
                    <h1 className="card-header bg-dark text-light mb-3"> Skills (optional) </h1>
                    </div>
                        <div className="form-group">
                            <label>Skill 1:</label>
                            <input type="text" className="form-control" onChange={e => setSkills1(e.target.value)} value={skill1}/>
                        </div> 
                        <div className="form-group">
                            <label>Skill 2:</label>
                            <input type="text" className="form-control" onChange={e => setSkills2(e.target.value)} value={skill2}/>
                        </div>
                        <div className="form-group">
                            <label>Skill 3:</label>
                            <input type="text" className="form-control" onChange={e => setSkills3(e.target.value)} value={skill3}/>
                        </div>
                    <input type="submit" value="Add Pet" className="btn btn-dark btn-block"/>
                </form>
        </div>
    )
}
export default PetForm;