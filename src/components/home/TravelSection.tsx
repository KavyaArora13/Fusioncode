'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const TravelSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="px-[20px] md:px-[30px] lg:px-[80px] pb-[120px] md:pb-[160px] lg:pb-[200px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[30px] lg:gap-[40px]">
        {/* Left Section */}
        <div className="flex flex-col">
          <div className="relative w-full pb-[75%] md:pb-[56.67%]"> {/* Adjusted aspect ratio */}
            <Image
              src="/images/travel-bag.jpg"
              alt="Travel essentials"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-[20px] md:mt-[25px] lg:mt-[30px] max-w-[500px]">
            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] mb-[15px] md:mb-[20px] font-normal text-[#333333]">
              For their travel bag
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
              Explore a range of travel-size formulations for seasoned excursionists, including preselected kits, sun care and in-flight essentials.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center justify-between w-full border border-[#333333] px-[15px] md:px-[20px] py-[12px] md:py-[16px] hover:bg-[#333333] hover:text-white transition-colors group"
            >
              <span className="text-[13px] md:text-[14px]">Browse travel gifts</span>
              <span className="text-[13px] md:text-[14px] group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Right Section with Video */}
        <div className="flex flex-col">
          <div className="relative w-full pb-[75%] md:pb-[56.67%] bg-black"> {/* Adjusted aspect ratio */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              poster="/images/noteworthy-gifts.jpg"
            >
              <source src="/videos/noteworthy-gifts.mp4" type="video/mp4" />
              {/* Fallback image if video fails to load */}
              <Image
                src="/images/fragrance-anthology.jpg"
                alt="Noteworthy gifts"
                fill
                className="object-cover"
              />
            </video>
          </div>
          <div className="mt-[20px] md:mt-[25px] lg:mt-[30px] max-w-[500px]">
            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] mb-[15px] md:mb-[20px] font-normal text-[#333333]">
              Noteworthy gifts
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
              From time-honoured body care to standout skin care—explore a range of formulations that remain dependably crowd-pleasing.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center justify-between w-full border border-[#333333] px-[15px] md:px-[20px] py-[12px] md:py-[16px] hover:bg-[#333333] hover:text-white transition-colors group"
            >
              <span className="text-[13px] md:text-[14px]">Browse noteworthy gifts</span>
              <span className="text-[13px] md:text-[14px] group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelSection;