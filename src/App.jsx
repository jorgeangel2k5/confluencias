import React from 'react'
import { BrowserRouter } from 'react-router'
import AppRouter from './Router/AppRouter'

const App = () => {
  return (
    <BrowserRouter>   
      <AppRouter />
    </BrowserRouter>
  )
}

export default App