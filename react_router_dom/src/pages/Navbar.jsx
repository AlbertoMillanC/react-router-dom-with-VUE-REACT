import { useState,  } from "react";
import { Link, useNavigate } from "react-router-dom"
import logo from '../media/logo192.png';


function navbar() {

 
  
  return (          
    <div>
        <Link to="/">Home</Link>{" "}
        <Link to="about ">AboutUS</Link>{" "}
        <Link to="products ">Product</Link>{" "}
      
        
      


    </div>
    )
}
  
export default navbar