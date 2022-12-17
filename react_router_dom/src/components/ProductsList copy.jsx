import { Link } from "react-router-dom"

function ProductsList({products}) {
  return (
    <ul>
        {products.map(product =>{
            return (
                <li key={product.id}>
                    <strong>{product.title}</strong>{" "}
                    <Link to={`/products/${product.id}`}>[more details+] </Link>

                </li>
            )

    }
        
        )}
    </ul>
  )
}

export default ProductsList
