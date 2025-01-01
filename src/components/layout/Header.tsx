'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full relative">
      {/* Holiday Notice Bar */}
      <div className="w-full bg-[#C2C2AF] py-2 px-4 text-center">
        <p className="text-sm">
          Kindly note, due to the Christmas public holidays, the processing of orders may be delayed. 
          <span className="ml-1">Conditions apply.</span>
        </p>
      </div>

      {/* Shipping Info Bar */}
      <div className="w-full bg-[#252525] text-white py-2 px-4 flex justify-between items-center">
        <p className="text-sm flex-1 text-center">
          Enjoy complimentary shipping on orders over $400. Click and Collect is now available in Hong Kong.
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="w-full py-4 px-6 flex justify-between items-center bg-[#FFFEF2]">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:underline">New & Notable</Link>
          <Link href="/" className="text-sm hover:underline">Gifts</Link>
          <Link href="/" className="text-sm hover:underline">Skin Care</Link>
          <Link href="/" className="text-sm hover:underline">Hand & Body</Link>
          <Link href="/" className="text-sm hover:underline">Home</Link>
          <Link href="/" className="text-sm hover:underline">Hair</Link>
          <Link href="/" className="text-sm hover:underline">Fragrance</Link>
          <Link href="/" className="text-sm hover:underline">Kits & Travel</Link>
          <Link href="/" className="text-sm hover:underline">Read</Link>
          <Link href="/" className="text-sm hover:underline">Stores</Link>
          <Link href="/" className="text-sm hover:underline">Facial Appointments</Link>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>

        {/* Mobile Logo/Brand (if needed) */}
        <div className="lg:hidden flex-1 text-center">
          <Link href="/" className="text-xl font-semibold">Brand</Link>
        </div>

        {/* Right Side Navigation */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-sm hover:underline hidden lg:inline">Log in</Link>
          <Link href="/" className="text-sm hover:underline hidden lg:inline">Cabinet</Link>
          <Link href="/" className="text-sm hover:underline">Cart</Link>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-[#FFFEF2] z-40 transform transition-transform duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full pt-20 px-6 space-y-6 overflow-y-auto">
            <Link href="/" className="text-lg hover:underline">New & Notable</Link>
            <Link href="/" className="text-lg hover:underline">Gifts</Link>
            <Link href="/" className="text-lg hover:underline">Skin Care</Link>
            <Link href="/" className="text-lg hover:underline">Hand & Body</Link>
            <Link href="/" className="text-lg hover:underline">Home</Link>
            <Link href="/" className="text-lg hover:underline">Hair</Link>
            <Link href="/" className="text-lg hover:underline">Fragrance</Link>
            <Link href="/" className="text-lg hover:underline">Kits & Travel</Link>
            <Link href="/" className="text-lg hover:underline">Read</Link>
            <Link href="/" className="text-lg hover:underline">Stores</Link>
            <Link href="/" className="text-lg hover:underline">Facial Appointments</Link>
            <Link href="/" className="text-lg hover:underline">Log in</Link>
            <Link href="/" className="text-lg hover:underline">Cabinet</Link>
            
            {/* Search bar for mobile */}
            <div className="mt-6 relative">
              <input 
                type="search" 
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;