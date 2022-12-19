import {Link} from 'react-router-dom'
function CarVetDoctors2({ nameVet,image }){
    return (
      <ul>
        <li className = "breedCard">
         <Link to= '/Vet2'>
        
          <div className="contenedorImagen">
            <img src={image} alt = {nameVet} />
          </div>
         </Link>
          <span className="breedTitle">{nameVet}</span>
        </li>
        

      </ul>
      
        );
  }
  export default CarVetDoctors2;