import { useState } from "react";
import React from "react";
import Button from "./Buttons";

export default function DisplayInput() {
    const [value , setValue]= useState("")  
    const [content , setContent] = useState("")
  
   
    
    function handleChange(event) {
      setValue(event.target.value)
      setContent(value)
    }
  

    

    return (
      <>
        <label>
    <input onChange={handleChange} value={value}></input>
    
    <Button  text="THIS A THE NEW BUTTON" color="white" backgroundColor="blue" fontSize={20}/>
    </label>
    <div>Hello {content}</div>
    
      </>
      
    )
    

}
