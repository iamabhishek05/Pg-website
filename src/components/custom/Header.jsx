import React, { useState } from 'react'
import { Button } from '../ui/button.jsx'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#1f2937] text-white shadow-lg shadow-[#111827]/60">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
          src="/casalogo.png"
          alt="Casa Living Logo"
          className="h-20 w-auto"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">

        <Button className="bg-[#f56551] hover:bg-[#e55340] hover:cursor-pointer transition font-semibold">Explore our houses</Button>
          <Button className="bg-[#f56551] hover:bg-[#e55340] hover:cursor-pointer transition font-semibold">
            About Us
          </Button>
          <Button className="bg-[#f56551] hover:bg-[#e55340]  hover:cursor-pointer transition font-semibold">
            Our Team
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111827] px-5 pb-4 flex flex-col gap-4">

          <Button className="bg-[#f56551] hover:cursor-pointer">Explore our houses</Button>
          <Button className="bg-[#f56551] hover:bg-[#e55340] transition font-semibold w-full">
            About Us
          </Button>
          <Button className="bg-[#f56551] hover:bg-[#e55340] transition font-semibold w-full">
            Our Team
          </Button>
        </div>
      )}
    </header>
  )
}

export default Header
