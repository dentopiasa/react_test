import { useState } from 'react'
import './App.css'



function App() {

const [value , setValue]= useState("")  


function handleChange(event) {
  setValue(event.target.value)
}
function displayFn(){
  const display = value
}
  return (
    <>
    <h1>hello user</h1>
    <h2>this is a test page</h2>
    <img src='' className='catImg'></img>
    <h3>please enter your name:</h3>
    <input onChange={handleChange} value={value}></input>
    <button type="submit" onSubmit={displayFn}>CLICK HERE</button>
    <div>{displayFn}</div>
    
    
    
    
    
    </>
  )
  
}

export default App
