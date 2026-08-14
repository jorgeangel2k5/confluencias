import React from 'react'
import { Outlet } from 'react-router'
import NavBarApp from './NavBarApp'
import FooterApp from './FooterApp'

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <header className="sticky top-0 z-50">
        <NavBarApp />
      </header>

      <main className="flex">
        <Outlet />
      </main>

      <FooterApp />
    </div>
  )
}

export default Layout