import React from 'react'
import { Routes, Route } from 'react-router'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Categorias from '../pages/Categorias'
import Detalle from '../pages/Detalle'
import NotFoundScreen from '../pages/NotFoundScreen'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from '../Components/Layout'

const AppRouter = () => {
  return (
    <Routes>
     
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categorias" element={<Categorias />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="*" element={<NotFoundScreen />}/>
      </Route>

      
       
    </Routes>
  )
}

export default AppRouter
