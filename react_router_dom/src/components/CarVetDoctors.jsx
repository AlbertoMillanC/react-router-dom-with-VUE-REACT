import React from 'react'
import { Link } from 'react-router-dom'

function CarVetDoctors({ nameVet, image }) {
  return (
    <div>
    <div className="bg-gray-800 p-2 rounded-lg">
      <Link to="/vet1" className="block">
        <div className="rounded-lg overflow-hidden">
          <img src={image} alt={nameVet} className="h-48 w-full object-cover" />
        </div>
        <span className="text-teal-200 block mt-2 text-lg font-bold">
          {nameVet}
        </span>
      </Link>
    </div>
  </div>
  )
}

export default CarVetDoctors
