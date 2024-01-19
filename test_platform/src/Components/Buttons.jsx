import React, { useState } from "react";
import DisplayInput from "./DisplayFunction";

export default function Button({text, color, backgroundColor, fontSize}) {
    
    function handleClick() {
      
    
    
       
      }
    const buttonStyle = {
        color: color, 
        backgroundColor: backgroundColor,
        fontSize: fontSize+"px",
        
    };

    return (
        <>
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
        <h1></h1>
        </>
    )
}