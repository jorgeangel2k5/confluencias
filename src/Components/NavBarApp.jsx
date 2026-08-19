import React from 'react'
import { Link } from 'react-router'
import { RxHome } from "react-icons/rx"
import { LuBookImage } from "react-icons/lu"
import { TbWorldSearch } from "react-icons/tb"
import { SiTrustpilot } from "react-icons/si"

const NavBarApp = () => {
  return (
    <nav className="bg-red-800 text-amber-400 font-bold">
      <ul className="flex flex-wrap items-center justify-center p-3 gap-4 sm:gap-6 text-base md:text-lg">
        
        <li className="transition-transform duration-150 hover:scale-105 hover:text-white">
          <Link to="/" className="flex items-center gap-2">
            <RxHome className="text-xl" />
            <span>Inicio</span>
          </Link>
        </li>

        <li className="transition-transform duration-150 hover:scale-105 hover:text-white">
          <Link to="/categorias" className="flex items-center gap-2">
            <LuBookImage className="text-xl" />
            <span>Categorías</span>
          </Link>
        </li>

        <li className="transition-transform duration-150 hover:scale-105 hover:text-white">
          <Link to="/notfound" className="flex items-center gap-2">
            <TbWorldSearch className="text-xl" />
            <span>Explorar</span>
          </Link>
        </li>

        <li className="transition-transform duration-150 hover:scale-105 hover:text-white">
          <Link to="/sobre" className="flex items-center gap-2">
            <SiTrustpilot className="text-xl" />
            <span>Nosotros</span>
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default NavBarApp