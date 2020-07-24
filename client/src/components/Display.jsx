import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Display = props => {

    const [pets, setPets] = useState([]);

    const fetchPets = () => {
        axios.get("http://localhost:8000/api")
        .then(res => {
            console.log(res);
            setPets(res.data);
        })
        .catch(err => console.log(err));
    }
    useEffect( () => {
        fetchPets();
    }, []);

return (
    <div>
        <h2>These Pets are looking for a good home</h2>
        <Link className="btn btn-dark mb-3 float-right" to="/pets/new"> Add a pet </Link>
        <table className="table">
            <thead class="thead-dark">
                <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
                </tr>
            </thead>
        <tbody>
        {pets.map( (pet, i) => 
            <tr key={pet._id}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td> <Link className="btn btn-outline-dark mr-3" to={`/details/${pet._id}`}>Details</Link>
                <Link className="btn btn-outline-dark" to={`/edit/${pet._id}`}>Edit</Link> </td>
            </tr>
            )}
        </tbody>
        </table>
    </div>
)
        }
export default Display