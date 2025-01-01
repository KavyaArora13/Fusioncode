'use client';

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-[1800px] mx-auto px-[20px] md:px-[30px] lg:px-[60px]">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-[40px] md:gap-[30px] lg:gap-[40px] mb-[80px] md:mb-[100px]">
          {/* Email Subscription */}
          <div className="col-span-1 sm:col-span-2 md:col-span-5">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Subscribe to Aesop communications
            </h3>
            <div className="relative mb-[25px] md:mb-[30px]">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border border-white px-[15px] md:px-[20px] py-[12px] md:py-[16px] text-[13px] md:text-[14px] text-white placeholder-white"
              />
              <button className="absolute right-[15px] md:right-[20px] top-1/2 -translate-y-1/2 text-[20px] md:text-[24px]">
                →
              </button>
            </div>
            <div className="flex items-start gap-4 mb-[25px] md:mb-[30px]">
              <input 
                type="checkbox" 
                className="mt-1 appearance-none w-5 h-4 border border-white bg-transparent checked:bg-white checked:border-white cursor-pointer"
              />
              <p className="text-[12px] md:text-[13px] lg:text-[14px]">
                Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our 
                <a href="/privacy" className="underline ml-1 hover:text-gray-300 transition-colors">privacy policy</a>.
              </p>
            </div>
          </div>

          {/* Orders and Support */}
          <div className="col-span-1 sm:col-span-1 md:col-span-3">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Orders and support
            </h3>
            <ul className="space-y-[15px] md:space-y-[20px]">
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Contact us <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">FAQs <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Shipping <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Returns <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Order history</a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Terms and conditions</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Services
            </h3>
            <ul className="space-y-[15px] md:space-y-[20px]">
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Live assistance</a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Corporate gifts</a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Facial Appointments</a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Click and Collect</a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Video consultation</a></li>
            </ul>
          </div>

          {/* Location Preferences */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Location preferences
            </h3>
            <div className="space-y-[25px] md:space-y-[30px]">
              <div>
                <p className="text-[12px] md:text-[13px] mb-2">Shipping:</p>
                <a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Hong Kong, SAR</a>
              </div>
              <div>
                <p className="text-[12px] md:text-[13px] mb-2">Language:</p>
                <div className="space-y-2">
                  <a href="#" className="text-[13px] md:text-[14px] block hover:text-gray-300 transition-colors">English</a>
                  <a href="#" className="text-[13px] md:text-[14px] block hover:text-gray-300 transition-colors">繁體中文</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-[40px] md:gap-[30px] lg:gap-[40px]">
          {/* Sustainability */}
          <div className="col-span-1 sm:col-span-2 md:col-span-5">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Sustainability
            </h3>
            <p className="text-[12px] md:text-[13px] lg:text-[14px] mb-[15px] md:mb-[20px]">
              All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.
            </p>
            <a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Learn more</a>
          </div>

          {/* About */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              About
            </h3>
            <ul className="space-y-[15px] md:space-y-[20px]">
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Our story <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Foundation <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Careers <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Accessibility</a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h3 className="text-[14px] md:text-[15px] lg:text-[16px] mb-[25px] md:mb-[30px] pb-4 border-b border-white">
              Social media
            </h3>
            <ul className="space-y-[15px] md:space-y-[20px]">
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Instagram <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Twitter <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">LinkedIn <span>↗</span></a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors">WeChat</a></li>
              <li><a href="#" className="text-[13px] md:text-[14px] hover:text-gray-300 transition-colors flex items-center gap-1">Weibo <span>↗</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;