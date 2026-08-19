import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'

import Sobre from './pages/Sobre'
import Categorias from './pages/Categorias'
import Detalle from './pages/Detalle'
import NotFound from './pages/NotFound'
import Layout from './Components/Layout'


//const NotFounder = () => <h2 className="text-center text-white py-10">404 - Página no encontrada</h2>

const App = () => {
  return (
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
         <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="sobre" element={<Sobre />} />  
          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App