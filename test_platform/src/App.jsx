import { useState } from 'react'
import './App.css'
import Contact from './Components/Contact';
import Display from './Components/Display';
import React from 'react';
import { useEffect } from 'react';

function App() { //state function here defines display value
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const [counter , setCounter] = useState(0)


  const setNameChange = (value) => {
    setName(value);
  }
  const setEmailChange = (value) => {
    setEmail(value);
  }
  const setPasswordChange = (value) => {
    setPassword(value)
  }

  /*useEffect(()=> {
    const key = setInterval(()=> {
      setCounter(count => count +1)
    }, 1000);
    return () => {
      clearInterval(key)
    };
  }, []*/

  function jason() {
    fetch('https://pokeapi.co/api/v2/pokemon/', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      return (
        <p></p>
      )
    }); 
  }

  return (
    <div className='mainContainer'>
    <h1>hello user </h1>
    {jason()}
    <h2>this is a test page</h2>
    <h3>please enter your credentials:</h3>
    <Contact
    nameStateFn={setNameChange}
    emailStateFn={setEmailChange} 
    passwordStateFn={setPasswordChange}
    />
     <aside>
        <Display 
        name= {name}
        email={email}
        password={password}
        />
      </aside>
      <p>{counter}</p>
    </div>
  )
}

export default App
