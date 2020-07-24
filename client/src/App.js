import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router } from '@reach/router';
import PetForm from "./components/PetForm";
import Display from "./components/Display";
import EditPet from "./components/EditPet";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      <Router>
        <Display path="/" />
        <PetForm path="/pets/new" />
        <Detail path="/details/:_id" />
        <EditPet path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
