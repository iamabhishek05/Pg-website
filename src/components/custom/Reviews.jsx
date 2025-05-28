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
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
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
      name: 'Meetal Gaikwad - VIT College',
      review:
        'I have had a great experience living at Casa Living Tulip House. The rooms are well-designed and always clean. The atmosphere is peaceful, and the staff is very helpful and responsive. It feels like a second home.',
    },
    {
      image: 'review3.jpeg',
      name: 'Shravani Waghmare - VIT College',
      review:
        'Casa Living Tulip House offers a perfect balance of comfort and convenience. The common areas are well-maintained, and the management team is professional and friendly. I highly recommend it for anyone looking for a hassle-free living experience.',
    },
    {
      image: 'review4.jpeg',
      name: 'Shubham Mane - Bharti Vidyapeeth',
      review:
        'Great stay at this hostel! Friendly staff, clean rooms, and welcoming atmosphere. Common areas are social and the location is ideal for public transport. Highly recommended for students and professionals alike.',
    },
    {
      image: 'review5.jpeg',
      name: 'Gaurav Landge - Bharti Vidyapeeth',
      review:
        'Comfortable & affordable! Safe, clean and homely. Spacious rooms with proper furniture for students and working professionals. Worth the price!',
    },
    {
      image: 'review6.jpeg',
      name: 'Ganesh Harale - Bharti Vidyapeeth',
      review:
        'Perfect location for college students—just a few minutes’ walk from college. Area is safe and close to cafes, groceries, and public transport. Saves a lot of time!',
    },
    {
      image: 'review7.jpeg',
      name: 'Ameeta - BVP College',
      review:
        'Living at Casa Living Tulip House has been a wonderful experience. Calm atmosphere, modern facilities, and everything is super clean. Great for both study and chill time.',
    },
  ];

  return (
    <div className="w-full bg-[#fefcf9] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#f56551] drop-shadow-sm">
          ✨ What Our Residents Say
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg">
          Real stories from the Casa Living community – genuine, honest, and heartfelt.
        </p>
      </div>

      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-8 bg-[#0d0d0d] rounded-3xl shadow-lg hover:shadow-xl hover:scale-[1.015] transition-all duration-500 max-w-4xl mx-auto">
              <img
                src={item.image}
                alt={`Review ${index + 1}`}
                className="w-48 h-48 object-cover rounded-full shadow-md border-4 border-[#f56551]/30"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#f56551]">
                  {item.name}
                </h3>
                <p className="mt-3 text-gray-300 text-base md:text-lg leading-relaxed">
                  {item.review}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
