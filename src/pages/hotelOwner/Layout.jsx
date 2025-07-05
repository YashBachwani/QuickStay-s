import React, { useState } from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Slidebar from '../../components/hotelOwner/Slidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 transform md:relative md:translate-x-0 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-md md:block`}>
          <Slidebar closeSidebar={() => setIsSidebarOpen(false)} />
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-4 py-16 md:px-10 md:py-10 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
