'use client';

const Quote = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-[20px] md:px-[30px] lg:px-[60px] py-[120px] md:py-[160px] lg:py-[200px]">
      <blockquote className="max-w-[900px]">
        <p className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.3] font-light mb-[15px] md:mb-[20px] tracking-[-0.5px] text-[#333333]">
          'The manner of giving is worth more than the gift.'
        </p>
        <cite className="text-[12px] md:text-[13px] lg:text-[14px] not-italic text-[#333333]">
          Pierre Corneille
        </cite>
      </blockquote>
    </section>
  );
};

export default Quote;