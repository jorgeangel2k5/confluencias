import React from 'react'
import { Link } from 'react-router'

const NavBarApp = () => {
  return (
    <nav className="bg-red-800 text-2xl text-amber-500">
      <ul className="flex p-2 justify-center gap-5">
        <li className="inline-block transition-transform duration-150 hover:text-blue-700 hover:scale-105">
          <Link to="/">Home</Link>
        </li>
        <li className="inline-block transition-transform duration-150 hover:text-blue-700 hover:scale-105">
          <Link to="/categorias">Categorias</Link>
        </li>
        <li className="inline-block transition-transform duration-150 hover:text-blue-700 hover:scale-105">
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarApp