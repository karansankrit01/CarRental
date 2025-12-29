
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCards from './CarCards'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {
    const navigateToAllCars = useNavigate();
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
        <div>
            <Title title="Featured Cars" subtitle="Discover our premium selection of vehicles for rent."/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
            {
                dummyCarData.filter(car => car.isAvailable).slice(0,6).map((car)=>(
                    <div key={car._id}>
                        <CarCards cars={car} /> 
                    </div>
                ))}
        </div>
        <button onClick={()=>{
            navigateToAllCars("/cars"); window.scrollTo(0,0)
        }}
         className='flex items-center justify-center gap-2 px-6 py-2 border border-gray-300 hover:bg-gray-50 rounded-md mt-8 cursor-pointer'>
            Explore all cars <img src={assets.arrow_icon} alt="arrow" />
        </button>
      
    </div>
  )
}

export default FeaturedSection
