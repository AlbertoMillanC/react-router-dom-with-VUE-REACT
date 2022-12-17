import { useState,  } from "react";
import { Link, useNavigate } from "react-router-dom"

 
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
    <div>
        <Link to="/">Home</Link>{" "}
        <Link to="about ">AboutUS</Link>{" "}
        <Link to="products ">Product</Link>{" "}
        <form 
          onSubmit={handleSubmit}
          style={{ display: "inLine-flex" }}>
          <input 
            type="text" 
            placeholder= "Search"
            defaultValue={Keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <button type="submit">Find!</button>
        </form>
        
      


    </div>
  )
}

export default navbar