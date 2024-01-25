import { useState } from "react";
import React from "react";
import Button from "./Buttons";

export default function Contact({nameStateFn}) {
    const [name , setName] = useState("")
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault() //<---what is this//
      nameStateFn(name)
    }
    


    

    return (
      <div>
      <form onSubmit={handleSubmit}>
      <legend>Contact Info</legend>
      <label>Name</label>
      <input key='name' type="text" value = {name} required onChange={handleNameChange} />
      
      <div>
        <button type="submit">Submit</button> (!-----why o button type?-----!)
      </div>

     
    </form>
    </div>
    )
    

}
