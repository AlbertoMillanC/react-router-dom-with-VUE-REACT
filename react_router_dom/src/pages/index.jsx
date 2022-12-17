import { Routes, Route } from 'react-router-dom';
import CarVetDoctors from 'components/CarVetDoctors';
import logo from './media/logo192.png';
import vet1 from './media/vet1.jpeg';
import vet2 from './media/vet2.jpeg';
import vet3 from './media/vet3.jpeg';
import vet4 from './media/vet4.jpeg';

function Index(){
    return (
   <div>
    <section>
            <h1>Nuestros medicos veteriarios</h1>
            <ul className= "breedCardContainer">
              <CarVetDoctors nameVet='Leonidas Ferminan' image={vet1} /> 
              <CarVetDoctors nameVet='Isabell Elion' image={vet2} /> 
              <CarVetDoctors nameVet='Elehonora Miraki' image={vet3} /> 
              <CarVetDoctors nameVet='Leonidas Ferminan' image={vet4} /> 
            </ul>
    </section>
   </div>
  )
}

export default Index;
