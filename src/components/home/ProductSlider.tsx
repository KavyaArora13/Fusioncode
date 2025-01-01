'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const products = [
  {
    id: 1,
    name: 'Aromatique Hand Balm Trio',
    description: 'Three hydrating hand balms, unique in aroma',
    image: '/images/hand-balm-trio.jpg',
    link: '/'
  },
  {
    id: 2,
    name: 'Ptolemy Aromatique Candle',
    description: 'A sensuous blend of leather, smoke and wood',
    image: '/images/ptolemy-candle.jpg',
    link: '/'
  },
  {
    id: 3,
    name: 'Reverence Duet',
    description: 'A sumptuous pairing for hands',
    image: '/images/reverence-duet.jpg',
    link: '/'
  },
  {
    id: 4,
    name: 'Resurrection Aromatique Hand Wash',
    description: 'Gentle cleansing for hardworking hands',
    image: '/images/hand-wash.jpg',
    link: '/'
  },
  {
    id: 5,
    name: 'Rejuvenate Intensive Body Balm',
    description: 'A sumptuous moisturizing balm',
    image: '/images/body-balm.jpg',
    link: '/'
  }
];

const ProductSlider = () => {
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    const totalSlides = swiper.snapGrid.length;
    const currentProgress = (swiper.activeIndex / (totalSlides - 1)) * 100;
    setProgress(currentProgress);
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 pb-[120px] sm:pb-[160px] lg:pb-[200px]">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView={1.2}
          slidesPerGroup={1}
          navigation={{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          }}
          onSlideChange={handleSlideChange}
          className="product-slider relative"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link href={product.link} className="block group">
                <div className="relative w-full aspect-[433/323]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-base sm:text-lg mt-4 sm:mt-6 mb-2 sm:mb-4 group-hover:underline">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {product.description}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-swiper-prev absolute top-[161.5px] -translate-y-1/2 left-2 sm:left-4 z-10 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-white border border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center">
          <svg 
            width="16" 
            height="16"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transform rotate-180 sm:w-5 sm:h-5"
          >
            <path 
              d="M8 4l8 8-8 8" 
              stroke="currentColor" 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="custom-swiper-next absolute top-[161.5px] -translate-y-1/2 right-2 sm:right-4 z-10 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-white border border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center">
          <svg 
            width="16" 
            height="16"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-5 sm:h-5"
          >
            <path 
              d="M8 4l8 8-8 8" 
              stroke="currentColor" 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Progress Line */}
      <div className="mt-8 sm:mt-12 h-[1px] bg-gray-200 relative mx-2 sm:mx-4">
        <div 
          className="absolute left-0 top-0 h-full bg-black transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProductSlider;