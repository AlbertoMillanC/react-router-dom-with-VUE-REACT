import { useState,  } from "react";
import { Link, useNavigate } from "react-router-dom"
import logo from '../media/logo192.png';


function navbar() {

 
  
  return (          
    <div>
        <Link to="/">Home</Link>{" "}
        <Link to="about ">AboutUS</Link>{" "}
        <Link to="Vet1 ">Vet1</Link>{" "}
        <Link to="Vet2 ">VET2</Link>{" "}
        <Link to="Vet3 ">VET3</Link>{" "}

      
        
      


    </div>
    )
}
  
export default navbar