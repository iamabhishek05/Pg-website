import React from 'react'
import { Button } from '../ui/button.jsx'
import Reviews from './Reviews.jsx'


const Hero = () => {
 

  return (
    <div>
      <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className="font-extrabold text-[50px] mb-6 mt-16">
          <span className="text-[#f56551]">Not Just a PG, It's Casa Living</span> <br />
          "Your Peaceful Home Away from Home."
        </h1>
        
        <h2 className='text-xl text-gray-500 text-center'>
          We are passionate about creating more than just a place to stay — we're building comfort, care, and convenience into every corner of your PG experience.
        </h2>
      
        

      </div>

        <Reviews />
     
    </div>
  )
}

export default Hero
