import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import Vet1 from "./pages/Vet1";


function App() {
  return(
    <div >
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Vet1" element={<Vet1 />} />
        <Route path="Products" element={<Products />} />
        <Route path="SearchResults" element={<SearchResults />} />
        <Route path="AboutUs" element={<AboutUs />} />
 
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}
export default App
