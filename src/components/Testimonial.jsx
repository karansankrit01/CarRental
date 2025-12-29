import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {
    const testimonials = [
        {  
            name: "Akash Singh", 
            address: "Chapra Bihar, India", 
            image: assets.testimonial_image_1,
            review: "i have rented a car from them and it was a great experience. The car was clean and well maintained." 
        },
         {  
            name: "Saurav Suman", 
            address: "Patna Bihar, India", 
            image: assets.testimonial_image_1,
            review: "i've rented cars from several companies before, but this one stands out for its exceptional service and quality vehicles." 
        }, {  
            name: "Anuj Bhakat", 
            address: "madhya pradesh, India", 
            image: assets.testimonial_image_1,
            review: "my experience with this car rental service was outstanding. The staff was friendly and the booking process was seamless." 
        },
    ];
  return (
    

     <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
        <Title title="Customer Testimonials" subtitle="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review."/>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <Star key={index} filled={testimonial.rating > index} />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
