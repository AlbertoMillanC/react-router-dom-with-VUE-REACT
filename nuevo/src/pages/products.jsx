import { Routes, Route } from "react-router-dom"
import ProductDetail from "../components/ProductDetail"

export default function products() {
  return (
   
    <>
    <h4>products</h4>
    <Routes>
        <Route path= ":productId" element ={<ProductDetail />} />
    </Routes>
    </>
  )
}
