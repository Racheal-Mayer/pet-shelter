import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import { Link } from '@reach/router';
import '../App.css';

const EditPet = props => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
        .then( res => {
            console.log(res);
            setName(res.data.name);
            setDescription(res.data.description);
            setType(res.data.type);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
        }).catch(errors => console.log(errors));
    }, [props._id]);


    const UpdatePet = e => {
        e.preventDefault();
        const updatedPet = {name, description, type, skill1, skill2, skill3};
        axios.put(`http://localhost:8000/api/pets/${props._id}`, updatedPet)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

return(
    <div className="container">
        <Link to="/" className="btn btn-outline-dark mb-3"> Go back home</Link>
        <div className="row">
            <form className="box col-sm-8" onSubmit={UpdatePet}>
                <div className="form-group">
                    <h1 className="card-header bg-dark text-light mb-3"> Edit Pet </h1>
                    <label>Pet Name:</label>
                    <input type="text" className="form-control" onChange={ e => setName(e.target.value)} value={name}/>
                    {errors.name ? <p className="text-danger"> {errors.name.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    <input type="text" name="type" className="form-control" onChange={ e => setType(e.target.value)} value={type}/>
                    {errors.type ? <p className="text-danger"> {errors.type.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Pet Description:</label>
                    <input type="text" name="description" className="form-control" onChange={ e => setDescription(e.target.value)} value={description}/>
                    {errors.description ? <p className="text-danger"> {errors.description.properties.message}</p>: "" }
                </div>
                <div className="col-m-8">
                <h1 className="card-header bg-dark text-light mb-3"> Skills(optional) </h1>
                    <div className="form-group">
                        <label>Skill 1:</label>
                        <input type="text" className="form-control" onChange={e => setSkill1(e.target.value)} value={skill1}/>
                    </div> 
                    <div className="form-group">
                        <label>Skill 2:</label>
                        <input type="text" className="form-control" onChange={e => setSkill2(e.target.value)} value={skill2}/>
                    </div>
                    <div className="form-group">
                        <label>Skill 3:</label>
                        <input type="text" className="form-control" onChange={e => setSkill3(e.target.value)} value={skill3}/>
                    </div>
                </div>
                <input type="submit" value="Edit Pet" className="btn btn-dark btn-block"/>
            </form>
        </div>
    </div>
    )
}

export default EditPet;