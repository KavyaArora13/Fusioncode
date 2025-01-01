'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

const giftKits = [
  {
    id: 1,
    name: 'Screen 1',
    productDescription: 'A quartet of staples for the hands, body and home',
    image: '/images/gift-kit-1.jpg',
  },
  {
    id: 2,
    name: 'Screen 2',
    productDescription: 'A trio of Geranium Leaf Body Care essentials',
    image: '/images/gift-kit-2.jpg',
  },
  {
    id: 3,
    name: 'Screen 3',
    productDescription: 'Essential care for hands and body',
    image: '/images/gift-kit-3.jpg',
  }
];

const GiftKitsSection = () => {
  return (
    <section className="mb-[120px] md:mb-[160px] lg:mb-[200px] px-[20px] md:px-[30px] lg:px-[60px]">
      <div className="flex flex-col md:flex-row">
        {/* Static Left Content */}
        <div className="w-full md:w-[35%] mb-8 md:mb-0 md:pr-8">
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-light mb-[15px] md:mb-[20px]">
            Our latest Gift Kits
          </h2>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
            Discover the new cinema-inspired collection, comprising a hand and body gift set, an abundant home gift and a Geranium Leaf body care trio.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center text-[13px] md:text-[14px] hover:underline group"
          >
            Browse Gift Kits
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>

        {/* Right Content with Slider */}
        <div className="w-full md:w-[65%] relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={1.2}
            navigation={{
              nextEl: '.gift-kit-next',
              prevEl: '.gift-kit-prev',
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.3,
                spaceBetween: 16
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24
              }
            }}
            className="relative"
          >
            {giftKits.map((kit) => (
              <SwiperSlide key={kit.id}>
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] mb-[15px] md:mb-[20px]">
                  <Image
                    src={kit.image}
                    alt={kit.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] mb-[10px] md:mb-[15px]">
                  {kit.name}
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-600">
                  {kit.productDescription}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="gift-kit-prev absolute left-2 sm:left-4 top-[150px] sm:top-[200px] md:top-[250px] -translate-y-1/2 z-10 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-white border border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180 sm:w-5 sm:h-5"
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
          <button className="gift-kit-next absolute right-2 sm:right-4 top-[150px] sm:top-[200px] md:top-[250px] -translate-y-1/2 z-10 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-white border border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </div>

      {/* Progress Line */}
      <div className="mt-8 sm:mt-12 h-[1px] bg-gray-200 relative mx-2 sm:mx-4">
        <div className="absolute left-0 top-0 h-full bg-black w-[33%] transition-all duration-300"></div>
      </div>
    </section>
  );
};

export default GiftKitsSection;