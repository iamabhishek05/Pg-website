import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: false,
  };

  const slides = [
    {
      image: 'review1.jpeg',
      name: 'Himani Yeole - VIT',
      review:
        'The rooms are clean and modern. The environment is peaceful. Staff are friendly and helpful. Management responds quickly. Wi-Fi is sometimes unstable. Laundry service needs improvement. Maintenance can be slow. Overall, it\'s a good place to stay.',
    },
    {
      image: 'review2.jpeg',
      name: 'Meetal Gaikwad - VIT college ',
      review: 'I have had a great experience living at Casa Living Tulip House. The rooms are well-designed and always clean. The atmosphere is peaceful, and the staff is very helpful and responsive. It feels like a second home.',
    },
    {
      image: 'review3.jpeg',
      name: 'Shravani Waghmare - VIT college ',
      review: 'Casa Living Tulip House offers a perfect balance of comfort and convenience. The common areas are well-maintained, and the management team is professional and friendly. I highly recommend it for anyone looking for a hassle-free living experience.',
    },
    {
      image: 'review4.jpeg',
      name: 'Shubham Mane - Bharti Vidyapeeth ',
      review: 'Great Stay at This Hostel! I had a wonderful experience staying here. The staff were incredibly friendly and helpful, the rooms were clean and comfortable, and the atmosphere was warm and welcoming. The common areas made it easy to meet fellow travelers, and the location was perfect—close to public transport and major attractions. Definitely recommend this hostel for anyone looking for a budget-friendly and enjoyable place to stay!',
    },
    {
      image: 'review5.jpeg',
      name: 'Gaurav Landge - Bharti Vidyapeeth',
      review: 'Comfortable & Affordable PG Hostel for Students and Professionals.PG hostel offers a safe, clean, and homely environment ideal for students and working professionals. Rooms are spacious and well-furnished with comfortable beds, storage, and study areas.',
    },
    {
      image: 'review6.jpeg',
      name: ' Ganesh Harale - Bharti Vidyapeeth ',
      review: 'Perfect Location for College Students! This hostel is in an ideal spot—just a few minutes walk from the college, which makes attending classes and accessing campus facilities super convenient. The area is safe and well-connected with nearby cafes, grocery stores, and public transport. It saves a lot of travel time and makes daily life much easier for students. Highly recommend it for anyone studying nearby',
    },
    {
      image: 'review7.jpeg',
      name: 'Ameeta - BVP College ',
      review: 'Living at Casa Living Tulip House has been a wonderful experience. The environment is calm, the facilities are modern, and everything is kept very clean. It’s a great place for both work and relaxation.',
    }
  ];

  return (
    <div className="w-full py-14 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#f56551]">✨ What Our Residents Say</h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">Real stories from the Casa Living community</p>
      </div>

      <Slider {...settings}>
  {slides.map((item, index) => (
    <div key={index}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-2xl max-w-screen-md mx-auto">
        <img
          src={item.image}
          alt={`Review ${index + 1}`}
          className="w-56 h-56 object-cover rounded-lg shadow-xl"
        />
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">{item.name}</h3>
          <p className="mt-2 text-gray-300">{item.review}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>


    </div>
  );
};

export default Reviews;
