'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const DualFeature = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="px-[20px] md:px-[30px] lg:px-[60px] pb-[120px] md:pb-[160px] lg:pb-[240px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[30px] lg:gap-[40px]">
        {/* Left Card */}
        <div className="flex flex-col">
          <div className="relative w-full pb-[100%] md:pb-[90%] lg:pb-[80%]"> {/* Adjusted aspect ratio */}
            <Image
              src="/images/fragrance-anthology.jpg"
              alt="Six aromatic encounters"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] mt-[20px] md:mt-[25px] lg:mt-[30px] mb-[15px] md:mb-[20px] font-normal text-[#333333]">
            Six aromatic encounters
          </h3>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
            Fragrance Anthology Volume I invites curious noses to explore and experience our range of unorthodox aromas, from the fresh to the floral, the woody and the opulent.
          </p>
        </div>

        {/* Right Card with Video */}
        <div className="flex flex-col">
          <div className="relative w-full pb-[100%] md:pb-[90%] lg:pb-[80%] bg-black"> {/* Adjusted aspect ratio */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              poster="/images/home-gifts.jpg"
            >
              <source src="/videos/home-gifts.mp4" type="video/mp4" />
              {/* Fallback image if video fails to load */}
              <Image
                src="/images/corporate-gifts.jpg"
                alt="Home gifts"
                fill
                className="object-cover"
              />
            </video>
          </div>
          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] mt-[20px] md:mt-[25px] lg:mt-[30px] mb-[15px] md:mb-[20px] font-normal text-[#333333]">
            Home gifts
          </h3>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
            From hand care to home fragrances, explore a curation of products that are ideal for hospitable hosts, the house-proud or the recently moved in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DualFeature;