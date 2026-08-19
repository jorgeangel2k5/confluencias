import React from 'react'
import NavBarApp from '../Components/NavBarApp'
import FooterApp from '../Components/FooterApp'

const Sobre = () => {
  return (
    
<div className="flex justify-center items-center w-full p-4">
      <div className="max-w-2xl w-full bg-zinc-800 p-6 rounded-lg text-white">
        
        <h1 className="text-2xl font-bold text-amber-500 mb-4">
          Sobre Nosotros
        </h1>
       
        <p className="text-zinc-300 mb-6 leading-relaxed">
          Bienvenido a <strong className="text-amber-400">Confluencias</strong>. Este sitio web fue creado para compartir y difundir diferentes proyectos de arte, música, cine y teatro en un solo lugar.
        </p>

        <div className="bg-zinc-900 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-bold text-white mb-2">
            Sobre el creador
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Hola, soy el desarrollador de esta página. Estoy aprendiendo programación web y construí este proyecto utilizando React y Tailwind CSS para poner en práctica mis conocimientos.
          </p>
        </div>

        <h3 className="text-lg font-bold text-amber-500 mb-2">
          Tecnologías usadas:
        </h3>
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>React Router</li>
        </ul>

      </div>
    </div>
        
      
  )
}

export default Sobre