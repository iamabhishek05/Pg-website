import React, { useState } from 'react'
import { Button } from '../ui/button.jsx'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    // Full width header with fixed position
    <header className="w-full fixed top-0 left-0 z-50 bg-[#1a1a1a] bg-opacity-90 backdrop-blur-md shadow-md">
      
      {/* Centered inner container */}
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/casalogo.png"
            alt="Casa Living Logo"
            className="h-14 w-auto transition-transform duration-300 hover:scale-105"
          />
          
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center font-medium">
          <a href="#about" className=" text-white hover:text-[#f56551] transition duration-300">
            About Us
          </a>
          <a href="#team" className="  text-white hover:text-[#f56551] transition duration-300">
            Our Team
          </a>
          <Button className="bg-[#f56551] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#e55340] transition">
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 pt-2 bg-[#1a1a1a] bg-opacity-95 backdrop-blur-md flex flex-col gap-4 text-sm font-medium">
          <a href="#about" className="text-white hover:text-[#f56551] transition">
            About Us
          </a>
          <a href="#team" className="text-white hover:text-[#f56551] transition">
            Our Team
          </a>
          <Button className="bg-[#f56551] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#e55340] transition w-full">
            Contact Us
          </Button>
        </div>
      )}
    </header>
  )
}

export default Header
