
function ProductsList({products}) {
  return (
    <ul>
    {products.map(product =>{
        return (
        <li key={product.id}>
            <h4>{product.title}</h4>
            more details
        </li>
        )

    }
        
        )}
    </ul>
  )
}

export default ProductsList
