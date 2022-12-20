import { useState,  } from "react";
import { Link, useNavigate } from "react-router-dom"
import logo from '../media/logo192.png';
import "../index.css";


function navbar() {
  const navigate = useNavigate ();
  const [Keyword, setKeyword] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    setKeyword("")
    e.target.reset();
    navigate(`/search?Keyword=${Keyword}`);

  }
  return (
    <div className="App">
        <ul className="navbar">
              <h1 className = "logo">
                <img src={logo} alt="imagen" className="logo"/>
              </h1 >
             
                <div className="buscar" >
                  <form 
                      onSubmit={handleSubmit}
                      style={{ display: "" }}>
                    <input 
                     className="buscar" 
                    />
                    <button className="buscar" >Find!</button>
                  </form>
                </div>
              
              <h4><Link to = "/"className="button mainbutton">Home</Link></h4>
              <h4><Link to = "SearchResults"className="button mainbutton">Search Results</Link></h4>
              <h4><Link to = "Products"className="button mainbutton">Products</Link></h4>
              <h4><Link to = "Login"className="button mainbutton">Login</Link></h4>
              <h4><Link to = "Logout"className="button mainbutton">Logout</Link></h4>
              <h4><Link to = "AboutUs"className="button mainbutton">About Us</Link></h4>
              
              
        </ul>
    </div>
    )
}
  
export default navbar