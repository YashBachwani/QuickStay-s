import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    room && setRoom(room)
    room && setMainImage(room.images[0])
  }, [])

  return (
    room && (
      <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Title */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name} <span className="font-inter text-sm">({room.roomType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full shadow-md">20% Off</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          <StarRating />
          <span className="ml-2">200+ reviews</span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="Location" className="w-4 h-4" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Enhanced Image Section */}
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative group">
            <img
              src={mainImage}
              alt="Main Room"
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover border border-white/40"
            />
            <div className="absolute inset-0 rounded-3xl bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-sm"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {room.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setMainImage(image)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-md border-2 transition-all duration-300 ${mainImage === image ? 'border-orange-500 scale-105' : 'border-transparent'}`}
              >
                <img
                  src={image}
                  alt="Room Thumb"
                  className="w-full h-28 object-cover rounded-xl hover:opacity-90"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Highlights & Price */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-10 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Experience Luxury Like Never Before</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {room.amenities.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-2 rounded-lg shadow-sm">
                  <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-2xl font-bold text-blue-700">${room.pricePerNight}/night</div>
        </div>

        {/* Booking Form */}
        <form className="flex flex-col md:flex-row items-start justify-between bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-6 mt-12">
          <div className="flex flex-wrap gap-6 text-gray-700 w-full md:w-auto">
            <div>
              <label htmlFor="checkInDate" className="block text-sm font-semibold">Check-In</label>
              <input type="date" id="checkInDate" className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full shadow-sm" required />
            </div>
            <div>
              <label htmlFor="checkOutDate" className="block text-sm font-semibold">Check-Out</label>
              <input type="date" id="checkOutDate" className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full shadow-sm" required />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-semibold">Guests</label>
              <input type="number" id="guests" placeholder="0" className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-24 shadow-sm" required />
            </div>
          </div>
          <button type="submit" className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md transition-all">
            Check Availability
          </button>
        </form>

        {/* Common Details */}
        <div className="mt-16 space-y-6">
          {roomCommonData.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <img src={item.icon} alt={item.title} className="w-6 h-6" />
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl border-y border-gray-300 my-16 py-10 text-gray-600 text-sm">
          <p>
            Guests will be allocated on the ground floor according to availability. You get a comfortable two-bedroom apartment with a true city feeling. The price quoted is for two guests. Please mark the correct guest count to get the exact price. Guests will be allocated the ground floor according to availability.
          </p>
        </div>

        {/* Host */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <img src={assets.logo} alt="host" className="w-12 h-12 rounded-full shadow-sm" />
            <div>
              <p className="text-lg font-semibold">Hosted By Quick Stay</p>
              <div className="flex items-center text-sm text-gray-600">
                <StarRating />
                <span className="ml-2">200+ reviews</span>
              </div>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all w-fit">
            Contact Now
          </button>
        </div>
      </div>
    )
  )
}

export default RoomDetails
