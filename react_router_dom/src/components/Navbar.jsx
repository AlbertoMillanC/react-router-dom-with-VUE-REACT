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
    <nav className="bg-gray-800 p-2">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className = "flex items-center flex-shrink-0 text-white mr-6">
                      <img src={logo} alt="Logo de mi sitio" className="h-8 w-8"/>
                    </div >
                  
                      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" >
                      <form className="relative mr-3" onSubmit={handleSubmit} >
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full pl- pr-4 py-2 text-gray-600 bg-gray-200 rounded-full focus:outline-none focus:bg-white"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-2 mr-4 text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-1 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
              </div >  
                      
                        
                        <Link to = "/"className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</Link>
                        <Link to = "SearchResults"className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Search Results</Link>
                        <Link to = "Products"className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Products</Link>
                        <Link to = "AboutUs"className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About Us</Link>
                        <Link to = "Login"className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
                        <Link to = "Logout"className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</Link>
                        
                
          </div>
    </nav>
    )
}
  
export default navbar