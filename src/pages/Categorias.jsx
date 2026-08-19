import React, { useState } from 'react'
import { Link } from 'react-router'
import { CONFLUENCIAS_DATA } from "../data/confluencias_data.js";


export default function Categorias() {
  const [etiqueta, setEtiqueta] = useState('Todas')

  const lista = etiqueta === 'Todas'? CONFLUENCIAS_DATA 
    : CONFLUENCIAS_DATA.filter(item => 
        item.etiqueta && item.etiqueta.trim().toLowerCase() === etiqueta.trim().toLowerCase()
      )

  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      
      <h1 className="text-3xl font-bold text-white mb-6">Categorías</h1>

   
      <div className="flex gap-2 mb-8">
        {['Todas', 'Arte', 'Música', 'Cine/Teatro'].map((cat) => (
          <button
            key={cat}
            onClick={() => setEtiqueta(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-bold ${
              etiqueta === cat 
                ? 'bg-amber-500 text-black' 
                : 'bg-zinc-800 text-zinc-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grilla de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lista.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-xl shadow border border-slate-200 hover:scale-105 transition-transform duration-150">
            <span className="text-xs font-bold text-amber-600 uppercase">
              {item.etiqueta}
            </span>

            <h3 className="font-bold text-lg text-black mt-1 mb-2">
              {item.titulo}
            </h3>
            <p className="text-slate-600 text-xs mb-4 line-clamp-2">
              {item.resumen}
            </p>
            
            <Link 
              to={`/detalle/${item.id}`}
              className="block text-center bg-zinc-900 text-white text-xs font-bold py-2 rounded-lg"
            >
              Ver Detalle
            </Link>
          </div>
        ))}
      </div>

    </div>
  )
}