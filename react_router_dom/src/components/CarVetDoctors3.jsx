import React from 'react'
import { Link } from 'react-router-dom'

function CarVetDoctors3 ({ nameVet, image }) {
  return (
    <ul>
      <li className="breedCard bg-gray-800 p-2 rounded-lg">
        <Link to="/vet3" className="block">
          <div className="contenedorImagen rounded-lg overflow-hidden">
            <img src={image} alt={nameVet} className="h-48 w-full object-cover" />
          </div>
          <span className="breedTitle text-teal-200 block mt-2 text-lg font-bold">
            {nameVet}
          </span>
        </Link>
      </li>
    </ul>
  )
}

export default CarVetDoctors3

