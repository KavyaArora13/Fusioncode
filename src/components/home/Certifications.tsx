'use client';

const certifications = [
  {
    title: 'Certified B Corp',
    description: 'We meet the highest verified standards of social and environmental performance, transparency and accountability.'
  },
  {
    title: 'Leaping Bunny approved',
    description: 'Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.'
  },
  {
    title: 'PETA recognition',
    description: 'We appear on PETA internationally recognised vegan and cruelty-free lists.'
  }
];

const Certifications = () => {
  return (
    <section className="bg-[#F6F5E8] px-[20px] md:px-[30px] lg:px-[60px] py-[120px] md:py-[160px] lg:py-[200px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[30px] lg:gap-[40px]">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="text-center flex flex-col items-center"
            >
              <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-light mb-[15px] md:mb-[20px] text-[#333333]">
                {cert.title}
              </h3>
              <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] text-[#333333] max-w-[350px]">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;