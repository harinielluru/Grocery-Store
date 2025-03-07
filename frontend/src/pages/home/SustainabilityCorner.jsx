import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';

import ecoFriendly from "../../assets/sustainability/eco-friendly.png";
import greenEnergy from "../../assets/sustainability/green-energy.png";
import recycling from "../../assets/sustainability/recycling.png";
import organicFood from "../../assets/sustainability/organic-food.png";
import waterConservation from "../../assets/sustainability/water-conservation.png";

import { Link } from 'react-router-dom';

const sustainabilityTopics = [
    {
        "id": 1,
        "title": "Eco-Friendly Shopping: Reduce Plastic Waste",
        "description": "Switch to reusable bags, avoid plastic packaging, and shop smart to reduce environmental impact.",
        "image": ecoFriendly
    },
    {
        "id": 2,
        "title": "Green Energy: Powering a Sustainable Future",
        "description": "How renewable energy sources like solar and wind can help create a cleaner planet.",
        "image": greenEnergy
    },
    {
        "id": 3,
        "title": "Recycling: The Key to a Greener Tomorrow",
        "description": "Learn how proper recycling can reduce landfill waste and protect our ecosystem.",
        "image": recycling
    },
    {
        "id": 4,
        "title": "Benefits of Organic and Locally Sourced Food",
        "description": "Eating organic and supporting local farmers helps sustainability and ensures better health.",
        "image": organicFood
    },
    {
        "id": 5,
        "title": "Water Conservation: Simple Steps to Save Water",
        "description": "Small daily changes, like fixing leaks and using water-efficient appliances, can make a big impact.",
        "image": waterConservation
    }
];

const SustainabilityCorner = () => {
  return (
    <div className='py-12'>
        {/* Heading without background and white text */}
        <h2 className='text-3xl font-semibold mb-6'>Sustainability Corner</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20} 
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          mousewheel={true} // Enables scrolling with mouse
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween:30 },
          }}
          modules={[Pagination, Navigation, Mousewheel]}
          className="relative"
        >
          {
              sustainabilityTopics.map((item, index) => (
                  <SwiperSlide key={index}>
                      <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-8 bg-blue-100 p-6 rounded-lg shadow-md'>
                          {/* content */}
                          <div className='py-2'>
                              <Link to="/">
                                  <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                              </Link>
                              <div className='w-12 h-[4px] bg-blue-400 mb-4'></div>
                              <p className='text-sm text-gray-600'>{item.description}</p>
                          </div>

                          <div className='flex-shrink-0 w-40 h-40'>
                              <img src={item.image} alt={item.title} className='w-full h-full object-cover rounded-lg'/>
                          </div>
                      </div>
                  </SwiperSlide>
              ))
          }

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"></div>
          <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"></div>
        </Swiper>
    </div>
  )
}

export default SustainabilityCorner;
