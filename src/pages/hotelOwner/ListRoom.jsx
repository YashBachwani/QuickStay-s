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

  return (
    <div className="px-4 py-6">
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms."
      />

      <p className="text-gray-700 mt-8 font-medium">All Rooms</p>

      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white/40 backdrop-blur-lg max-h-96 overflow-y-auto mt-4">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left max-sm:hidden">Facility</th>
              <th className="py-3 px-4 text-left">Price/night</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white/50">
            {rooms.map((item, index) => (
              <tr key={index} className="border-t border-gray-300 text-gray-700">
                <td className="py-3 px-4">{item.roomType}</td>
                <td className="py-3 px-4 max-sm:hidden">
                  {typeof item.amenities === 'object'
                    ? Object.entries(item.amenities)
                        .filter(([_, value]) => value)
                        .map(([key]) => key)
                        .join(', ')
                    : item.amenities}
                </td>
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
      </div>
    </div>
  )
}

export default ListRoom
