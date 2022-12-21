import React from 'react'
import CarVetDoctors from '../components/CarVetDoctors'
import CarVetDoctors2 from '../components/CarVetDoctors2'
import CarVetDoctors3 from '../components/CarVetDoctors3'
import CarVetDoctors4 from '../components/CarVetDoctors4'
import vet1 from '../media/vet1.jpeg'
import vet2 from '../media/vet2.jpeg'
import vet3 from '../media/vet3.jpeg'
import vet4 from '../media/vet4.jpeg'

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-teal-200">Nuestros médicos veterinarios</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CarVetDoctors nameVet="Leonidas Ferminan" image={vet1} />
        <CarVetDoctors2 nameVet="Isabell Elion" image={vet2} />
        <CarVetDoctors3 nameVet="Elehonora Miraki" image={vet3} />
        <CarVetDoctors4 nameVet="Leonidas Ferminan" image={vet4} />
      </ul>
    </div>
  )
}

export default Home
