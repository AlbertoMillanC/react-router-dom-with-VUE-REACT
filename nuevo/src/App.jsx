import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";




function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUS />} />
    </Routes>
  )

}

export default App
