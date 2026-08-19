import React from 'react'
import { useParams, Link } from 'react-router'
import { CONFLUENCIAS_DATA } from "../data/confluencias_data.js";

export default function Detalle() {
const { id } = useParams()

  
const obra = CONFLUENCIAS_DATA.find((item) => item.id === Number(id))

  
  if (!obra) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
        <Link to="/categorias" className="text-amber-500 font-bold hover:underline">
          ⬅️Volver a Categorías
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-6 text-slate-200">
      
      
      <Link 
        to="/categorias" 
        className="inline-block text-xs font-bold text-amber-500 hover:underline mb-6">
        ⬅️ Volver a Categorías
      </Link>

      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
            {obra.etiqueta}
          </span>
          <span className="text-zinc-500 text-xs">•</span>
          <span className="text-xs text-zinc-400 font-medium">
            {obra.categoria}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          {obra.titulo}
        </h1>

        <p className="text-zinc-400 text-sm">
          📍 {obra.ubicacion} — <span className="text-zinc-300 font-medium">{obra.anio}</span>
        </p>
      </div>

      
      <div className="w-full h-64 md:h-80 bg-zinc-800 rounded-2xl overflow-hidden mb-8 border border-zinc-700">
        <img 
          src={obra.imagen} 
          alt={obra.titulo} 
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl mb-8">
        <p className="text-amber-200 text-xs md:text-sm font-medium leading-relaxed">
          {obra.descripcion}
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-2">
            Sobre la propuesta
          </h2>
          <p className="text-zinc-300 text-xs md:text-sm leading-relaxed whitespace-pre-line">
            {obra.descripcion}
          </p>
        </div>

        
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl h-fit space-y-4">
          <h3 className="font-bold text-white text-sm border-b border-zinc-800 pb-2">
            Ficha Técnica
          </h3>

          <div>
            <span className="text-[10px] text-zinc-500 uppercase font-bold block">
              Artista
            </span>
            <span className="text-xs font-semibold text-amber-400">
              {obra.artista}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-zinc-500 uppercase font-bold block">
              Ubicación
            </span>
            <span className="text-xs text-zinc-300">
              {obra.ubicacion}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-zinc-500 uppercase font-bold block">
              Año de realización
            </span>
            <span className="text-xs text-zinc-300">
              {obra.anio}
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}