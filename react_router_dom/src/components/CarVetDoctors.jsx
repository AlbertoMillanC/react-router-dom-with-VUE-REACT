import {Link} from 'react-router-dom'
function CarVetDoctors({ nameVet,image }){
    return (
      <ul>
        <li className = "breedCard">
         <Link to= '/Vet1'>
        
          <div className="contenedorImagen">
            <img src={image} alt = {nameVet} />
          </div>
         </Link>
          <span className="breedTitle">{nameVet}</span>
        </li>
        

      </ul>
      
        );
  }
  export default CarVetDoctors;