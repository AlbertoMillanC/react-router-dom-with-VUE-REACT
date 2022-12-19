import { Routes, Route } from 'react-router-dom';
import CarVetDoctors2 from '../components/CarVetDoctors2';



import vet2 from '../media/vet2.jpeg';

function Vet2() {
  return (
    <div className="App">
          <h1>Nuestros medicos veteriarios</h1>
          <ul className= "breedCardContainer">
          <CarVetDoctors2 nameVet='Leonidas Ferminan' image={vet2} /> 
             
          </ul>
      </div>
  )
}

export default Vet2