import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Slidebar from '../../components/hotelOwner/Slidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (hidden on small screens) */}
        <div className="hidden md:block w-64 h-full bg-white shadow-md">
          <Slidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto px-4 py-16 md:px-10 md:py-10 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
