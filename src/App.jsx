import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
/**
 * App.jsx
 * Project: QuickStay
 * Developed & Maintained by: Yash Bachwani
 * © 2025 All rights reserved
 */

import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      {false && <HotelReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
          {/**
          * App.jsx
          * Project: QuickStay
          * Developed & Maintained by: Yash Bachwani
          * © 2025 All rights reserved
          */}

          <Route path='/my-bookings' element={<MyBookings/>}/>
          <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='add-room' element={<AddRoom/>} />
            <Route path='list-room' element={<ListRoom/>} />
          {/**
          * App.jsx
          * Project: QuickStay
          * Developed & Maintained by: Yash Bachwani
          * © 2025 All rights reserved
          */}

          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App

          {/**
          * App.jsx
          * Project: QuickStay
          * Developed & Maintained by: Yash Bachwani
          * © 2025 All rights reserved
          */}