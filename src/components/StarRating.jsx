import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating=4}) => {
  return (
    <>
        {Array(5).fill().map((_, index) => (
          /**
         * Star Rating Component
         * Project: QuickStay
         * Developed & Maintained by: Yash Bachwani
         * © 2025 All rights reserved
         */

            <img src={rating>index?assets.starIconFilled: assets.starIconOutlined} alt="Star-icon" className='w-4.5 h-4.5'/>
        ))}
    </>
  )
}

export default StarRating