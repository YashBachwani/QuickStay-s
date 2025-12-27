import React from 'react'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300'>
      <div className="flex items-center gap-4">
        {/* Hamburger Menu (only on small screens) */}
        <button
          className="block md:hidden text-2xl text-gray-600"
          onClick={toggleSidebar}
          /**
         * Hotel Owner Navbar Component
         * Project: QuickStay
         * Developed & Maintained by: Yash Bachwani
         * © 2025 All rights reserved
         */

        >
          <HiMenu />
        </button>

        {/* Logo */}
        <Link to='/'>
          <img src={assets.logo} alt="logo" className='h-9 invert opacity-80' />
        </Link>
      </div>

      <UserButton />
    </div>
  )
}

export default Navbar
