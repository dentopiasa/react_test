import { useState } from 'react'
import './App.css'
import DisplayInput from './Components/DisplayFunction';
import Button from './Components/Buttons';
import React from 'react';

function App() {

  return (
    <>
    <h1>hello user</h1>
    <h2>this is a test page</h2>
    <h3>please enter your name:</h3>
    <DisplayInput/>
    <h1></h1>
    </>
  )
}

export default App
