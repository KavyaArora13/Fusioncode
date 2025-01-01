'use client';

import Image from 'next/image';

const ProductShowcase = () => {
  return (
    <div className="pt-[100px] md:pt-[150px] lg:pt-[190px] pb-[80px] md:pb-[120px] lg:pb-[160px] bg-[#FFFEF2]">
      <section className="flex flex-col md:flex-row w-full">
        {/* Left Image Section */}
        <div className="w-full md:w-[58.33%] relative">
          {/* 
            Height calculation:
            - Desktop (1440px): 476px
            - Maintaining aspect ratio of 840:476 (≈1.76:1)
          */}
          <div className="relative w-full pb-[75%] md:pb-[56.67%]"> {/* Taller aspect ratio for mobile */}
            <Image
              src="/images/gift-sleeve.jpg"
              alt="Gift sleeve showcase"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-[41.67%] mt-8 md:mt-0"> {/* Added margin top for mobile */}
          <div className="w-full max-w-[480px] mx-auto px-[20px] md:px-[30px] lg:px-[60px]">
            <span className="text-[12px] tracking-[.4px] uppercase mb-[15px] md:mb-[20px] block text-[#333333]">
              Festive giving
            </span>
            
            <h2 className="font-normal text-[24px] md:text-[28px] lg:text-[32px] leading-[1.3] mb-[15px] md:mb-[20px] text-[#333333]">
              A complimentary sleeve for your gifts
            </h2>
            
            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
              Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the 'gift packaging' option at checkout. Exclusions apply.
            </p>
            
            <button className="flex items-center justify-between w-full border border-[#333333] px-[15px] md:px-[20px] py-[12px] md:py-[16px] hover:bg-[#333333] hover:text-white transition-colors duration-200 group">
              <span className="text-[13px] md:text-[14px]">Explore gifts</span>
              <span className="text-[13px] md:text-[14px] group-hover:translate-x-2 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;