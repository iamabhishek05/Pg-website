import React, { useEffect, useState } from 'react'

const sliderImages = [
  { image: '/bgimages/bg1.jpg' },
  { image: '/bgimages/bg2.jpg' },
  { image: '/bgimages/bg3.jpg' },
  { image: '/bgimages/bg4.jpeg' },
  { image: '/bgimages/bg5.jpeg' },
  { image: '/bgimages/bg6.jpeg' },
  { image: '/bgimages/bg7.jpeg' },
  { image: '/bgimages/bg8.jpeg' },
  { image: '/bgimages/bg9.jpeg' },
  { image: '/bgimages/bg10.jpeg' },

]

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {sliderImages.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

     </div>
  )
}

export default BackgroundSlider
