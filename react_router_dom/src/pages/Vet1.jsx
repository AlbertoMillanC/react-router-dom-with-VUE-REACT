import { Routes, Route } from 'react-router-dom';
import CarVetDoctors from '../components/CarVetDoctors';



import vet1 from '../media/vet1.jpeg';

function Vet1() {
  return (
    <div className="App">
          <h1>Nuestros medicos veteriarios</h1>
          <ul className= "breedCardContainer">
          <CarVetDoctors nameVet='Leonidas Ferminan' image={vet1} /> 
             
          </ul>
      </div>
  )
}

export default Vet1