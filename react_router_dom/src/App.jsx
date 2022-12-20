import { Routes, Route } from "react-router-dom"


import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import SearchResults from "./pages/SearchResults";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Vet1 from "./pages/Vet1";
import Vet2 from "./pages/Vet2";
import Vet3 from "./pages/Vet3";
import Vet4 from "./pages/Vet4";



function App() {
  return(
    <div className= 'App'>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Vet1" element={<Vet1 />} />
        <Route path="Vet2" element={<Vet2 />} />
        <Route path="Vet3" element={<Vet3 />} />
        <Route path="Vet4" element={<Vet4 />} />
        <Route path="Products" element={<Products />} />
        <Route path="SearchResults" element={<SearchResults />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Logout" element={<Logout />} />
        <Route path="Login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}
export default App
