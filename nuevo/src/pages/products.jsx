import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Axios from "axios";

import ProductsList from "../components/ProductsList";
import ProductDetail from "../components/ProductDetail";


export default function products()  {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get("https://dummyjson.com/products")
            .then(res => setProducts(res.data.products))
    }, []);
    
  return (
   
    <>
    <h4>products  page </h4>
    <Routes>
        <Route
            index
            element ={<ProductsList products ={products} />} />
        <Route path= ":productId" element ={<ProductDetail />} />
    </Routes>
    </>
  )
}
