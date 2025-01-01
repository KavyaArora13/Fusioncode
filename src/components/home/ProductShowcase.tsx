'use client';

import Image from 'next/image';

const ProductShowcase = () => {
  return (
    <div className="pt-[190px] pb-[160px] bg-[#FFFEF2]">
      <section className="flex flex-col md:flex-row w-full">
        {/* Left Image Section - 840x476 for 1440px screen */}
        <div className="w-full md:w-[58.33%] relative">
          {/* 
            Height calculation:
            - Desktop (1440px): 476px
            - Maintaining aspect ratio of 840:476 (xq≈1.76:1)
          */}
          <div className="relative w-full pb-[56.67%]"> {/* 476/840 ≈ 56.67% for aspect ratio */}
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
        <div className="w-full md:w-[41.67%]"> {/* 600/1440 ≈ 41.67% */}
          <div className="w-full max-w-[480px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
            <span className="text-[12px] tracking-[.4px] uppercase mb-[20px] block text-[#333333]">
              Festive giving
            </span>
            
            <h2 className="font-normal text-[28px] md:text-[30px] lg:text-[32px] leading-[1.3] mb-[20px] text-[#333333]">
              A complimentary sleeve for your gifts
            </h2>
            
            <p className="text-[16px] leading-[1.7] mb-[30px] text-[#333333]">
              Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the 'gift packaging' option at checkout. Exclusions apply.
            </p>
            
            <button className="flex items-center justify-between w-full border border-[#333333] px-[20px] py-[16px] hover:bg-[#333333] hover:text-white transition-colors duration-200 group">
              <span className="text-[14px]">Explore gifts</span>
              <span className="text-[14px] group-hover:translate-x-2 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;