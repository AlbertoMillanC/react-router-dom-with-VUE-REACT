import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import Products from "./pages/Products";


function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUS />} />{" "}
        <Route path="products" element={<Products />} />{" "}
      </Routes>
    </>
  )

}

export default App
