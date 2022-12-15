 import { Link } from "react-router-dom"
 
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