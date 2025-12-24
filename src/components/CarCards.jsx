import React from 'react'

const CarCards = ({cars}) => {
    const currency =import.meta.env.VITE_CURRENCY;
  return (
    <div className='group rounded-xl overflow-hidden shadown-lg hover:translate-y-1
    transition-all duration-500 cursor-pointer'>
        <div className='relative h-48 overflow-hidden'>
            <img src={cars.image} alt={cars.image} className='w-full h-full object-cover transition-transform duration-500 group:hover:scale-105' />
            {cars.isAvailable ? (
              <div className='absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm'>
                Available
              </div>
            ) : (
              <div className='absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm'>
                Not Available
              </div>
            )}
            <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
            <span font-semibold>
                {currency}{cars.pricePerDay} 
                    <span className='text-sm text-white/80'>
                    / day
                    </span>
                </span>
                </div>
        </div>
        <div className='p-4 sm:p-5'>
            <div className='flex justify-between items-start mb-2'></div>


        </div>
      
    </div>
  )
}

export default CarCards