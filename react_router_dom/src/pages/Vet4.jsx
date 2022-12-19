import { Routes, Route } from 'react-router-dom';
import CarVetDoctors4 from '../components/CarVetDoctors4';


import vet4 from '../media/vet4.jpeg';

function Vet4() {
  return (
    <div className="App">
          <h1>Nuestros medicos veteriarios</h1>
          <ul className= "breedCardContainer">
          <CarVetDoctors4 nameVet='Leonidas Ferminan' image={vet4} /> 
             
          </ul>
      </div>
  )
}

export default Vet4