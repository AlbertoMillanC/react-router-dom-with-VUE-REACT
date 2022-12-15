import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout";

import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import Products from "./pages/Products";


function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUS />} />
          <Route path="products" element={<Products />} />
      </Route>
      

    </Routes>
  )

}

export default App
