import { useState } from 'react'
import './App.css'
import Contact from './Components/Contact';
import Display from './Components/Display';
import React from 'react';

function App() { //state function here defines display value
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")


  const setNameChange = (value) => {
    setName(value);
  }
  const setEmailChange = (value) => {
    setEmail(value);
  }
  const setPasswordChange = (value) => {
    setPassword(value)
  }


  return (
    <div className='mainContainer'>
    <h1>hello user</h1>
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
    </div>
  )
}

export default App
