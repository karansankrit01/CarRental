import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-linear-to-r from-[#0558FE] to-[#A9CFFF] rounded-2xl max-w-6xl mx-3 md:mx-auto overflow-hidden mb-20">
        <div className='text-white'>
            <h2 className='text-3xl font-medium'>Do You Own a Luxury Car</h2>
            <p className='mt-3'>Monetize you vehicle effortlessly by listing it on CarRental.</p>
            <p className='max-w-130'>We take care of insurance, driver verification, and secure payments - so you can earn passive income, stress-free</p>

            <button className='mt-20 bg-white text-blue-600 px-4 py-2 rounded-4xl font-medium hover:bg-gray-100 transition-colors cursor-pointer'>List your car</button>
        </div>
        <img src={assets.car_banner_image1} alt="banner_car" className='max-h-70 ' />
      
    </div>
  )
}

export default Banner
