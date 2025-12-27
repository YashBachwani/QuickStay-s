import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title'

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData)

  const toggleAvailability = (index) => {
    const updatedRooms = [...rooms]
    updatedRooms[index].isAvailable = !updatedRooms[index].isAvailable
    setRooms(updatedRooms)
  }
  {/**
  * ListRooms.jsx
  * Project: QuickStay
  * Developed & Maintained by: Yash Bachwani
  * © 2025 All rights reserved
*/}


  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms."
      />

      <p className="text-gray-700 mt-8 font-medium">All Rooms</p>

      <div className="overflow-x-auto mt-4 border border-gray-200 rounded-xl shadow-md bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-800">
            <tr>
                {/**
  * ListRooms.jsx
  * Project: QuickStay
  * Developed & Maintained by: Yash Bachwani
  * © 2025 All rights reserved
*/}

              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left hidden sm:table-cell">Facility</th>
              <th className="py-3 px-4 text-left">Price/night</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            {rooms.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-4">{item.roomType}</td>
                <td className="py-3 px-4 hidden sm:table-cell">
                  {typeof item.amenities === 'object'
                    ? Object.entries(item.amenities)
                        .filter(([_, value]) => value)
                        .map(([key]) => key)
                        .join(', ')
                    : item.amenities}
                </td>
                  {/**
  * ListRooms.jsx
  * Project: QuickStay
  * Developed & Maintained by: Yash Bachwani
  * © 2025 All rights reserved
*/}

                <td className="py-3 px-4">₹{item.pricePerNight}</td>
                <td className="py-3 px-4 text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      onChange={() => toggleAvailability(index)}
                    />
                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full relative transition duration-200">
                      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-6"></span>
                    </div>
                    <span className="ml-3 text-xs">
                      {item.isAvailable ? 'Available' : 'Unavailable'}
                    </span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          {/**
  * ListRooms.jsx
  * Project: QuickStay
  * Developed & Maintained by: Yash Bachwani
  * © 2025 All rights reserved
*/}

      </div>
    </div>
  )
}

export default ListRoom
