import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 bg-gradient-to-b from-white to-slate-50'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title
          align='left'
          title='Exclusive Offers'
          subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
        />
        <button className='group flex gap-2 items-center font-medium text-white bg-blue-600 hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-5 py-2 rounded-lg shadow-md transition-all duration-300 cursor-pointer max-md:mt-12'>
          View All Offers
          <img
            src={assets.arrowIcon}
            alt='arrowIcon'
            className='invert group-hover:translate-x-1 transition-transform duration-300'
          />
        </button>
      </div>

      {/* display cards  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full'>
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className='group relative flex flex-col justify-end p-6 h-72 rounded-2xl text-white bg-no-repeat bg-cover bg-center overflow-hidden shadow-lg'
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500 rounded-2xl z-0'></div>
            <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-semibold rounded-full shadow-md z-10'>
              {item.priceOff}% Off
            </p>
            <div className='relative z-10'>
              <p className='text-2xl font-semibold font-playfair'>{item.title}</p>
              <p className='text-sm'>{item.description}</p>
              <p className='text-xs text-white/70 mt-2'>Expires {item.expiryDate}</p>
              <button className='flex items-center gap-2 font-medium text-white mt-4 group-hover:text-blue-200 transition-all'>
                View Offers
                <img
                  className='invert group-hover:translate-x-1 transition-transform duration-300'
                  src={assets.arrowIcon}
                  alt='arrowIcon'
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers
