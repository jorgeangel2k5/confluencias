import React from 'react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'

const FooterApp = () => {
  return (
    <footer className="bg-red-800 text-amber-500 py-6 px-4 mt-12">
      <section className="flex  items-center justify-center gap-3 text-center">
      
      <a href="#" ><FaInstagram size={18} /></a>
      <a href="#" ><FaFacebookF size={18} /></a>
      <h2 className="text-sm font-medium">
          &copy; 2026 Confluencias. Todos los derechos reservados.
      </h2>
        
      </section>
    </footer>
  )
}

export default FooterApp