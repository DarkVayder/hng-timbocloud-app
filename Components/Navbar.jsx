'use client';

import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/Context/CartContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const { cartCount } = useCart();

  const handleOutsideClick = useCallback((event) => {
    if (!event.target.closest('.dropdown')) {
      setDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('click', handleOutsideClick);
      }
    };
  }, [handleOutsideClick]);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSignOut = () => {
    setDropdownOpen(false);
    router.push('/');
  };

  return (
    <div className='py-3 px-4 md:px-12 lg:px-28 bg-custom-blue'>
      <div className='relative flex items-center justify-between'>
        <Image
          src={assets.Timbulogo1}
          width={180}
          height={50}
          alt='Timbo Logo'
          className='w-[100px] sm:w-[130px] md:w-auto'
          priority
        />
        <div className='flex items-center space-x-4'>
          <Link href='/cart'>
            <div className='relative cursor-pointer p-1 bg-white rounded-full hover:bg-blue-500 transition-colors duration-300'>
              <MdOutlineShoppingCart className='text-black w-6 h-6 md:w-8 md:h-8' />
              {cartCount > 0 && (
                <span className='absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm'>
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
          <div className='relative dropdown'>
            <button className='flex items-center space-x-1' onClick={toggleDropdown}>
              <RxAvatar className='text-white w-6 h-6 md:w-8 md:h-8' />
              <RiArrowDropDownLine className='text-white w-6 h-6 md:w-8 md:h-8' />
            </button>
            {dropdownOpen && (
              <div className='absolute top-full right-0 mt-2 w-40 md:w-48 bg-white rounded-lg shadow-lg py-2 z-10'>
                <button
                  className='w-full text-left text-gray-800 px-4 py-2 hover:bg-gray-200 transition-colors duration-300'
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
