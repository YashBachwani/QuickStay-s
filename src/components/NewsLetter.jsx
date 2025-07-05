import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-14 md:py-20 mx-2 lg:mx-auto my-30 bg-gray-900 text-white shadow-2xl backdrop-blur-md border border-white/10">
      <Title
        title='Stay Inspired'
        subTitle='Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.'
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full px-4 md:px-0">
        <input
          type="text"
          className="bg-white/10 px-5 py-3 border border-white/20 rounded-xl outline-none w-full max-w-lg text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/20 transition-all"
          placeholder="Enter your email"
        />
        <button className="flex items-center justify-center gap-2 group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-pink-500 px-6 md:px-8 py-3 rounded-xl font-medium active:scale-95 transition-all shadow-md">
          Subscribe
          <img
            src={assets.arrowIcon}
            alt="arrowIcon"
            className='w-4 invert group-hover:translate-x-1 transition-transform duration-300'
          />
        </button>
      </div>

      <p className="text-gray-400 mt-6 text-xs text-center max-w-md">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </div>
  )
}

export default NewsLetter
