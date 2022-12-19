import { Routes, Route } from 'react-router-dom';
import CarVetDoctors3 from '../components/CarVetDoctors3';


import vet3 from '../media/vet3.jpeg';

function Vet3() {
  return (
    <div className="App">
          <h1>Nuestros medicos veteriarios</h1>
          <ul className= "breedCardContainer">
          <CarVetDoctors3 nameVet='Leonidas Ferminan' image={vet3} /> 
             
          </ul>
      </div>
  )
}

export default Vet3