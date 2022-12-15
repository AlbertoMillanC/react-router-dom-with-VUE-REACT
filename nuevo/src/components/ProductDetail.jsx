import { useParams } from "react-router-dom"


function ProductDetail() {
  const {productId} = useParams();
 
  return (
    <>
    <h4>Product Detail: {productId}  </h4>
    </>
  )
}

export default ProductDetail