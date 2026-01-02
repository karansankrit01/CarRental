import React from 'react'
import { assets, cityList } from '../assets/assets'
import { useState } from 'react'


const Hero = () => {
  const [PickupLocation, setPickupLocation] = useState('')
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>

      <h1 className='text-4xl mt-8 text-st font-semibold uppercase'>Luxury cars on rent</h1>
      <form  className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[opx_8px_20px_rgba(0,0,0,0.1)]'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min_md:ml-8'>
          <div className='flex flex-col items-start gap-2'>
            <select required value={PickupLocation}
            onChange={(e)=>setPickupLocation(e.target.value)}>
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <p className='px-1 text-sm text-gray-500'>{PickupLocation ? PickupLocation : "Please Select Location"}</p>
          </div>
          <div className='flex flex-col items-start gap-2'>
           <label htmlFor="Pickup-date">Pick-up Date</label>
           <input type="date" id="Pickup-date" required min={new Date().toISOString().split('T')[0]} className='text-sm text-grey-500'/>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor="Dropoff-date">Drop-off Date</label>
            <input type="date" id="Dropoff-date" required  className='text-sm text-grey-500'/>
          </div>
        </div>
          <button className='flex items-center justify-center gap-1 px-9 py-3 max:sm-mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
            <img className="brightness-300" 
            src={assets.search_icon} alt="Search" />
            Search
            </button>
      </form>
      <div className='relative w-full flex justify-center items-center'>

      <img src={assets.background_image} alt="background text" className='max-h-120 ml-190 hidden md:block' />
      <img src={assets.main_car1} alt="car" className='absolute z-0 w-full max-h-150 object-contain mr-20'  />
      </div>
      
    </div>
  )
}

export default Hero
