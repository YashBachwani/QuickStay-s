import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-white pt-20 pb-30'>
      <Title
        title='What Our Guest Say'
        subTitle='Discover why discerning travellers consistently choose QuickStay for their exclusive and luxurious accommodation around the world.'
      />

      <div className='flex flex-wrap justify-center gap-8 mt-16 w-full'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-sm w-full transition-all hover:shadow-2xl hover:scale-[1.02] duration-300'
          >
            <div className='flex items-center gap-4'>
              <img
                className='w-14 h-14 rounded-full object-cover shadow-md'
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className='font-playfair text-lg font-semibold text-gray-900'>{testimonial.name}</p>
                <p className='text-gray-500 text-sm'>{testimonial.address}</p>
              </div>
            </div>
            <div className='flex items-center gap-1 mt-4'>
              <StarRating />
            </div>
            <p className='text-gray-600 text-sm mt-4 leading-relaxed'>
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
