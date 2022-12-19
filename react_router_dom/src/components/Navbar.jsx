import { useState,  } from "react";
import { Link, useNavigate } from "react-router-dom"
import logo from '../media/logo192.png';
import App from "../styles/App.css";
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
                <input placeholder="busqueda" />
                <i className="fa-solid fa-magnifying-glass button iconobusqueda "></i>
                </div>
              
              <h4><Link to = "/"className="button mainbutton">Home</Link></h4>
              <h4><Link to = "SearchResults"className="button mainbutton">Iniciar sesión</Link></h4>
              <h4><Link to = "Products"className="button mainbutton">Registro</Link></h4>
              <h4><Link to = "AboutUs"className="button mainbutton">About Us</Link></h4>
              <form 
                onSubmit={handleSubmit}
                style={{ display: "" }}>
                <input 
                  type="buscar" 
                  placeholder= "busqueda"
                  defaultValue={Keyword}
                  onChange={e => setKeyword(e.target.value)}
                />
                <button type="submit">Find!</button>
              </form>
              
        </ul>
    </div>
    )
}
  
export default navbar