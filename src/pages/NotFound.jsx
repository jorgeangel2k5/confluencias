import React from 'react'
import { Link } from 'react-router'
import NavBarApp from '../Components/NavBarApp'
import FooterApp from '../Components/FooterApp'

const NotFound = () => {
  return (
     
 <div className="flex justify-center items-center w-full p-4">
      <div className="max-w-md w-full bg-zinc-800 p-6 rounded-lg text-center text-white">
        <span className="text-6xl mb-2 block">404</span>
        <h1 className="text-2xl font-bold text-amber-500 mb-3">
          Página no encontrada
        </h1>
        <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
          La ruta que intentás buscar no existe o fue movida a otra ubicación.
        </p>

        <Link  to="/" className="inline-block bg-amber-500 text-zinc-900 font-bold px-4 py-2 rounded hover:bg-amber-400 transition-colors" >
          Volver al Inicio
        </Link>

      </div>
    </div>

  )
}

export default NotFound