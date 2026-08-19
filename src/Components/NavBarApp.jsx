import React from 'react'
import { Link } from 'react-router'

const NavBarApp = () => {
  return (
    <nav className="bg-red-800 sm:text-xl md:text-4xl text-amber-400 font-bold">

      <ul className="flex flex-wrap items-center justify-center p-2 gap-3 sm:gap-5 text-base sm:text-xl md:text-2xl">
        
        <li className="inline-block transition-transform duration-150 hover:text-blue-700 hover:scale-105">
          <Link to="/">Inicio</Link>
        </li>
        <li className="inline-block transition-transform duration-150 hover:text-blue-700 hover:scale-105">
          <Link to="/categorias">Categorias</Link>
        </li>
        <li className="inline-block transition-transform duration-150 hover:text-blue-700 hover:scale-105">
          <Link to="/notfound">Explorar</Link>
        </li>
        <li className="inline-block transition-transform duration-150 hover:text-blue-700 hover:scale-105">
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarApp