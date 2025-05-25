import React from 'react'
import { Button } from '../ui/button.jsx'
import { Input } from '../ui/input.jsx'

const Header = () => {
  return (
    <div className="p-3 flex justify-between items-center px-5 border-3 border-gray shadow-md shadow-gray-700 ">
      <img className='h-25 w-auto' alt='Casa Living Logo' src='/casalogo.png'/>

      

      <div className='flex gap-5'>
      <Button className="bg-[#f56551] hover:cursor-pointer">Explore our houses</Button>
      <Button className="bg-[#f56551] hover:cursor-pointer"> About Us</Button>
      <Button className="bg-[#f56551] hover:cursor-pointer "> Our Team</Button>
      </div>
     

      

      
    </div>
  )
}

export default Header