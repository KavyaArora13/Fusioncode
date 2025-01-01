'use client';

import Image from 'next/image';
import Link from 'next/link';

const CorporateGifts = () => {
  return (
    <section className="flex flex-col md:flex-row mb-[120px] md:mb-[160px] lg:mb-[200px]">
      {/* Left Image */}
      <div className="w-full md:w-[58.33%] relative">
        <div className="relative w-full pb-[75%] md:pb-[56.67%]"> {/* Adjusted aspect ratio */}
          <Image
            src="/images/corporate-gifts.jpg"
            alt="Corporate gifts presentation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[41.67%] mt-8 md:mt-0">
        <div className="w-full max-w-[480px] mx-auto px-[20px] md:px-[30px] lg:px-[60px]">
          <span className="block text-[12px] md:text-[13px] lg:text-[14px] tracking-[.4px] uppercase mb-[15px] md:mb-[20px] text-[#333333]">
            Tokens of appreciation
          </span>
          
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-light leading-[1.2] mb-[15px] md:mb-[20px] tracking-[-0.5px] text-[#333333]">
            Corporate gifts
          </h2>
          
          <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
            Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-between w-full border border-[#333333] px-[15px] md:px-[20px] py-[12px] md:py-[16px] hover:bg-[#333333] hover:text-white transition-colors group"
          >
            <span className="text-[13px] md:text-[14px]">Learn more about this service</span>
            <span className="text-[13px] md:text-[14px] group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CorporateGifts;