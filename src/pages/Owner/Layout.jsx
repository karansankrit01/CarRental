import React from 'react'
import Navbar from '../../components/Navbar'
import NavbarOwner from '../../components/Owner/NavbarOwner'
import Sidebar from '../../components/Owner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <NavbarOwner />
      <div className='flex'>
        {/* Outlet for nested owner routes */}
        <Sidebar />
        <Outlet />
      </div>
      
    </div>
  )
}

export default Layout
