'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'Lucent Facial Concentrate',
    description: "For skin that&apos;s just returned from a month&apos;s holiday",
    image: '/images/product-1.jpg'
  },
  {
    title: 'Purifying Facial Cream Cleanser',
    description: 'A daily cream cleanser for dry skin',
    image: '/images/product-2.jpg'
  },
  {
    title: 'Camellia Nut Facial Hydrating Cream',
    description: 'For normal, dry or sensitive skin',
    image: '/images/product-3.jpg'
  }
];

const ProductShowcase = () => {
  return (
    <section className="bg-[#F6F5E8] px-[20px] md:px-[30px] lg:px-[60px] py-[120px] md:py-[160px] lg:py-[200px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[30px] lg:gap-[40px]">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full pb-[100%] mb-[25px] md:mb-[30px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-light mb-[15px] md:mb-[20px] text-[#333333]">
                {product.title}
              </h3>
              <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] text-[#333333] mb-[25px] md:mb-[30px]">
                {product.description}
              </p>
              <Link 
                href="/"
                className="inline-flex items-center justify-between w-full border border-[#333333] px-[15px] md:px-[20px] py-[12px] md:py-[16px] hover:bg-[#333333] hover:text-white transition-colors group"
              >
                <span className="text-[13px] md:text-[14px]">Discover product</span>
                <span className="text-[13px] md:text-[14px] group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;