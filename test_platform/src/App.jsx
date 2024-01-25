import { useState } from 'react'
import './App.css'
import Contact from './Components/Contact';
import Display from './Components/Display';
import React from 'react';

function App() {
  const [name , setName] = useState("")

  const setNameChange = (value) => {
    setName(value);
  }

  return (
    <>
    <h1>hello user</h1>
    <h2>this is a test page</h2>
    <h3>please enter your name:</h3>
    <Contact
    nameStateFn={setNameChange} 
    />
     <aside>
        <Display name= {name} />
      </aside>
    </>
  )
}

export default App
