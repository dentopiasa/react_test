import { useState } from "react";
import React from "react";
import Button from "./Buttons";

export default function Contact({nameStateFn, emailStateFn, passwordStateFn}) { 
    const [name , setName] = useState("") //state define input field values//
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

  
    const handleNameChange = (e) => { //updating value//
      setName(e.target.value);
    }
    const handleEmailChange = (e) => { //updating value//
      setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => { //updating value//
      setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault() //<---what is this//
      nameStateFn(name)
      emailStateFn(email)
      passwordStateFn(password)
    }
    


    

    return (
      <div>
      <form onSubmit={handleSubmit}>
      <legend></legend>
      <label>Name</label>
      <input key='name' type="text" value = {name} required onChange={handleNameChange} />
      <legend></legend>
      <label>Email</label>
      <input key='email' type="text" value = {email} required onChange={handleEmailChange} />
      <legend></legend>
      <label>Password</label>
      <input key='password' type="text" value = {password} required onChange={handlePasswordChange} />
      <div>
        <button type="submit">Submit</button> 
      </div>

     
    </form>
    </div>
    )
    

}
