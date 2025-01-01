'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const stores = [
  {
    id: 1,
    name: 'Aesop ifc mall',
    image: '/images/store-1.jpg',
  },
  {
    id: 2,
    name: 'Aesop Elements',
    image: '/images/store-2.jpg',
  },
  // Add more stores as needed
];

const StoreLocator = () => {
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    const totalSlides = swiper.snapGrid.length;
    const currentProgress = (swiper.activeIndex / (totalSlides - 1)) * 100;
    setProgress(currentProgress);
  };

  return (
    <section className="flex flex-col md:flex-row mb-[120px] md:mb-[160px] lg:mb-[200px]">
      {/* Left Content */}
      <div className="w-full md:w-[35%] mb-8 md:mb-0 px-[20px] md:px-[30px] lg:px-[60px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-light mb-[15px] md:mb-[20px] text-[#333333]">
          Store locator
        </h2>
        
        <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
          Our consultants are available to host you in-store and provide tailored guidance on gift purchases.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-between w-full border border-[#333333] px-[15px] md:px-[20px] py-[12px] md:py-[16px] hover:bg-[#333333] hover:text-white transition-colors group"
        >
          <span className="text-[13px] md:text-[14px]">Find a nearby store</span>
          <span className="text-[13px] md:text-[14px] group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>

      {/* Right Store Slider */}
      <div className="w-full md:w-[65%] relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.next-slide',
            prevEl: '.prev-slide',
          }}
          onSlideChange={handleSlideChange}
          className="h-full relative"
        >
          {stores.map((store) => (
            <SwiperSlide key={store.id}>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#FFFEF2]">
                  <p className="text-[13px] md:text-[14px]">{store.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <button className="prev-slide absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-[#333333] text-white flex items-center justify-center hover:bg-black transition-colors">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none"
              className="sm:w-5 sm:h-5"
            >
              <path 
                d="M15 18L9 12L15 6" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="next-slide absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-[#333333] text-white flex items-center justify-center hover:bg-black transition-colors">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none"
              className="sm:w-5 sm:h-5"
            >
              <path 
                d="M9 6L15 12L9 18" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Swiper>

        {/* Progress Line */}
        <div className="mt-8 sm:mt-12 h-[1px] bg-gray-200 relative mx-2 sm:mx-4">
          <div 
            className="absolute left-0 top-0 h-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;