import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <div className='flex flex-wrap justify-between  items-start gap-8 md:gap-6 pb-6 border-borderColor border-b'>
                <div >
                    <img src={assets.logoo} alt="logo" className=' h-12 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Premium car rental service offering luxury and exotic vehicles for unforgettable driving experiences.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a className='w-5 h-5' href="#"><img src={assets.instagram_logo} alt="Instagram" /></a>
                        <a className='w-5 h-5' href="#"><img src={assets.facebook_logo} alt="Facebook" /></a>
                        <a className='w-5 h-5' href="#"><img src={assets.twitter_logo} alt="Twitter" /></a>
                        <a className='w-5 h-5' href="#"><img src={assets.gmail_logo} alt="LinkedIn" /></a>
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-2'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browser Cars</a></li>
                        <li><a href="#">List Your Car</a></li>
                        <li><a href="#">About Us</a></li>
                        
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-2'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                        
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>contact</h2>
                    <ul className='mt-3 flex flex-col gap-2'>
                        <li>12345 Luxury Drive</li>
                        <li>Alpha 2, Greater Noida 201310</li>
                        <li><a href="#">+91 1234567890</a></li>
                        <li>carmium@carrental.com</li>
                        
                    </ul>
                </div>


                
            </div>
            {/* <hr className='border-gray-300 mt-8' /> */}
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Carmium .@All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li> |</li>
                    <li><a href="#">Terms</a>  </li>
                    <li> |</li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>
 

  )
}

export default Footer
