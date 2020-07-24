import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import { Link } from '@reach/router';
import '../App.css';

const Detail = props => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");


    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
        .then( res => {
            setName(res.data.name);
            setDescription(res.data.description);
            setType(res.data.type);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
        }).catch(errors => console.log(errors));
    }, [props._id]);

    const remove = () => {
        axios.delete(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => {
            console.log(res);
            navigate("/");
        })
        .catch(err => console.log(err));
    }
    return (
        <div className="container">
            <Link to="/" className="btn btn-outline-dark mb-3"> Go back home</Link>
            <div className="card mb-3 container2">
                <h1 className="card-header bg-dark text-light">Details about {name}</h1>
                    <div className="card-body">
                    <button className="btn btn-danger float-right" onClick={remove}>Adopt {name} </button>
                    <p>Pet Type:{type}</p>
                    <p>Description: {description}</p>
                    <p>Skills: 
                        <li className="right">{skill1} </li>
                        <li className="right">{skill2} </li>
                        <li className="right">{skill3} </li> </p>
                </div>
            </div>
        </div>
        )
    }

export default Detail;

