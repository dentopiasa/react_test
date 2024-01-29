import { useState } from "react";
import React from "react";
import './pokeApp.css'


export default function PokeApp() {
const [poke , setPoke] = useState("")
const [name , setName] = useState("")

function jason() {
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
    setPoke(response.sprites.front_default)
    });      
    }
    {jason()}

    const handleNameChange = (e) => { //updating value//
        setName(e.target.value);
      }


    return (

    <div className="container">
        
        <label>Enter Pokemon Name</label>
        <input type="text" value={name}  required onChange={handleNameChange}></input>
        <div className="images">
        <img src={poke}></img>
        </div>
    </div>
    )
}