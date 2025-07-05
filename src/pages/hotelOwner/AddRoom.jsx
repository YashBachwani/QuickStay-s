import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
  const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null })
  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wifi': false,
      'Free Breakfast': false,
      'Room Services': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  })

  return (
    <form className="px-4 py-6 max-w-5xl mx-auto">
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully to enhance the booking experience."
      />

      {/* Image Upload */}
      <p className="text-gray-700 mt-10 font-medium">Images</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
        {Object.keys(images).map((key) => (
          <label key={key} htmlFor={`roomImage${key}`} className="cursor-pointer">
            <img
              className="h-28 w-full object-cover rounded-lg border border-dashed border-gray-300 hover:opacity-90"
              src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
              alt="upload"
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })}
            />
          </label>
        ))}
      </div>

      {/* Form Inputs */}
      <div className="flex flex-wrap gap-6 mt-6">
        <div className="flex flex-col w-52">
          <label className="text-gray-700 font-medium">Room Type</label>
          <select
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 mt-1 bg-white"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Bed">Luxury Bed</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Price <span className="text-xs">/night</span></label>
          <input
            type="number"
            value={inputs.pricePerNight}
            onChange={(e) => setInputs({ ...inputs, pricePerNight: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 mt-1 w-24"
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="text-gray-700 mt-6 font-medium">Amenities</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-gray-600">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity]
                  }
                })
              }
            />
            {amenity}
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Add Room
      </button>
    </form>
  )
}

export default AddRoom
