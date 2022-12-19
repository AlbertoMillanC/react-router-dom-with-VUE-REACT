import {Link} from 'react-router-dom'
function CarVetDoctors3({ nameVet,image }){
    return (
      <ul>
        <li className = "breedCard">
         <Link to= '/Vet3'>
        
          <div className="contenedorImagen">
            <img src={image} alt = {nameVet} />
          </div>
         </Link>
          <span className="breedTitle">{nameVet}</span>
        </li>
        

      </ul>
      
        );
  }
  export default CarVetDoctors3;