'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const slides = [
    {
      title: "Timely gifts",
      description: "With the festivities fast-approaching, explore a range of gifts fit for all manner of recipients, ready to deliver or collect in-store.",
      type: "video",
      media: "/videos/slider1.mp4",
      buttonText: "Discover more"
    },
    {
      title: "The Athenaeum",
      description: "The majesty of the ocean's depths, the wonder of the human body in motion—this month's selection of stories explores the power of water.",
      type: "image",
      media: "/images/slider2.jpg",
      buttonText: "Read more"
    },
    {
      title: "Aesop Fashion Walk",
      description: "Our new signature store in Hong Kong's Causeway Bay district features brass and limestone, natural elements that honor the surrounding urban landscape.",
      type: "image",
      media: "/images/slider3.jpg",
      buttonText: "Learn more"
    }
  ];

  return (
    <div className="relative">
      <section className="w-full h-[calc(100vh-120px)] md:h-[calc(100vh-120px)]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: (number) => number.toString(),
            formatFractionTotal: (number) => number.toString(),
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full relative"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full flex-col md:flex-row">
                {/* Content Section */}
                <div className="w-full md:w-[40%] bg-[#F6F5E8] p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">
                  <h1 className="text-xl md:text-2xl mb-3 md:mb-4">{slide.title}</h1>
                  <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="flex items-center justify-between w-full max-w-md border border-black px-4 md:px-6 py-3 md:py-4 hover:bg-black hover:text-white transition-colors group">
                    <span>{slide.buttonText}</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>

                {/* Media Section */}
                <div className="w-full md:w-[60%] relative bg-[#897563] h-[50vh] md:h-full order-1 md:order-2">
                  {slide.type === 'video' ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={slide.media} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={slide.media}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Navigation and Pagination */}
      <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center space-x-4 md:space-x-8 px-4 md:px-0">
        <button className="swiper-button-prev !static !w-auto !h-auto !m-0 text-black hover:opacity-70 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="swiper-pagination !static text-sm md:text-base text-black font-light"></div>
        <button className="swiper-button-next !static !w-auto !h-auto !m-0 text-black hover:opacity-70 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;