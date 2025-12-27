import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const Slidebar = ({ closeSidebar = () => {} }) => {
  const location = useLocation()

  const sidebarLinks = [
    {
      name: 'Dashboard',
      path: '/owner',
      icon: assets.dashboardIcon,
    },
    {
      name: 'Add Room',
      path: '/owner/add-room',
      icon: assets.addIcon,
    },
    {
      name: 'List Room',
      path: '/owner/list-room',
      icon: assets.listIcon,
    },
    /**
   * SlideBar Component
   * Project: QuickStay
   * Developed & Maintained by: Yash Bachwani
   * © 2025 All rights reserved
   */

  ]

  return (
    <div className="md:w-64 w-full h-full bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.1)] border-r border-gray-300 px-2 pt-6 flex flex-col gap-4 transition-all duration-300">
      {sidebarLinks.map((item, index) => {
        const isActive = location.pathname === item.path

        return (
          <NavLink
            to={item.path}
            key={index}
            onClick={closeSidebar}
            className={`group flex items-center py-3 px-3 md:px-5 gap-4 rounded-xl transition-all duration-300
              ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500/20 to-blue-100 text-blue-700 shadow-inner border border-blue-400'
                  : 'hover:bg-white/40 hover:shadow-md text-gray-700'
              }`}
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-md transition-all duration-300
              ${isActive ? 'bg-blue-100' : 'bg-white/70 group-hover:bg-white/90'}`}
            >
              <img src={item.icon} alt={item.name} className="w-5 h-5" />
            </div>

            {/* Label */}
            <span className="hidden md:inline text-sm font-medium whitespace-nowrap">
              {item.name}
            </span>
          </NavLink>
        )
      })}
    </div>
  )
}

export default Slidebar
