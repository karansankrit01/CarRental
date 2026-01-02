import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const CarCards = ({cars}) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
  return (
    <div onClick={()=>{
        navigate(`/car-details/${cars._id}`); window.scrollTo(0,0)}}
         className='group rounded-xl overflow-hidden shadow-lg hover:translate-y-1
    transition-all duration-500 cursor-pointer'>
        <div className='relative h-48 overflow-hidden'>
            <img src={cars.image} alt={cars.image} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
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

                <span className='font-semibold'>
                    {currency}{cars.pricePerDay} 
                        <span className='text-sm text-white/80'>
                        / day
                        </span>
                    </span>
                </div>
        </div>
        <div className='p-4 sm:p-5'>
            <div className='flex justify-between items-start mb-2'>
              <div>
                <h3 className='text-lg font-medium'>{cars.brand} {cars.model}</h3>
                  <p className='text-muted-foreground text-sm'>{cars.category} • {cars.year}</p>
              </div>
            </div>
            <div className='mt-4 grid grid-cols-2 gap-y-2 text-gray-600'>
              <div className='flex items-center text-sm text-muted-foreground'>
                <img src={assets.users_icon} alt="icon" className='h-4 mr-2' />
                <span>{cars.seating_capacity} Seats</span>
              </div>
               <div className='flex items-center text-sm text-muted-foreground'>
                <img src={assets.fuel_icon} alt="icon" className='h-4 mr-2' />
                <span>{cars.fuel_type}</span>
              </div>
               <div className='flex items-center text-sm text-muted-foreground'>
                <img src={assets.car_icon} alt="icon" className='h-4 mr-2' />
                <span>{cars.transmission}</span>
              </div>
               <div className='flex items-center text-sm text-muted-foreground'>
                <img src={assets.location_icon} alt="icon" className='h-4 mr-2' />
                <span>{cars.location}</span>
              </div>

            </div>



        </div>
      
    </div>
  )
}

export default CarCards