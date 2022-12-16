import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import Axios from 'axios';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [products, setProduct] = useState ([]);

   useEffect(() => {
      Axios.get(`https://dummyjson.com/products/search?q=${searchParams.get("Keyword")}` )
        .then(res => setProduct(res.data.products))
   }, [searchParams]  )
 
  return (
    <div>
       <h4>Search Results</h4> 
       {products.length == 0 &&<em> No product Found  </em>}
       {products.length  && <ProductsList products ={products} />}
       
       
       
       
       

       

       
       
    </div>
  )
}

export default SearchResults