import React from 'react'
import BackgroundSlider from './BackgroundSlider'
import Reviews from './Reviews'
import Amenities from './Amenities'

const Hero = () => {
  return (

    <>

    <h1 className="mt-32 text-center text-4xl md:text-6xl font-extrabold leading-tight tracking-wide">
    <span className="bg-gradient-to-r from-[#f56551] via-yellow-400 to-[#f56551] text-transparent bg-clip-text drop-shadow-lg">
      Not Just a PG, It's Casa Living
    </span>
    <br />
    <span className="mt-2 block text-gray-700 text-lg md:text-2xl font-bold">
      "Your Peaceful Home Away from Home."
    </span>
  </h1>

  <BackgroundSlider/>
  <Reviews/>
  <Amenities/>


  </>
  
  )
}

export default Hero