'use client';

import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleSignOut = () => {
    closeDropdown();
    router.push('/');
  };

  return (
    <div className='py-3 px-4 md:px-12 lg:px-28 bg-custom-blue flex'>
      <div className='flex justify-between items-center w-full'>
        <Image
          src={assets.Timbulogo1}
          width={180}
          height={50}
          alt='Timbo Logo'
          className='w-[100px] sm:w-[130px] md:w-auto'
        />
        <div className='flex items-center space-x-4 relative'>
          <Link href='/cart'>
            <div className='relative cursor-pointer p-1 bg-white rounded-full flex items-center'>
              <MdOutlineShoppingCart className='text-black w-6 h-6 md:w-8 md:h-8' />
              <span className='text-black ml-2 text-sm md:text-base'>Cart</span>
              {cartCount > 0 && (
                <span className='absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm'>
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
          <div className='relative flex items-center'>
            <RxAvatar className='text-white w-6 h-6 md:w-8 md:h-8 cursor-pointer' />
            <RiArrowDropDownLine
              className='text-white w-6 h-6 md:w-8 md:h-8 cursor-pointer'
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className='absolute right-0 mt-8 w-40 md:w-48 bg-white rounded-lg shadow-lg py-2 z-10'>
                <p
                  className='text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer'
                  onClick={handleSignOut}
                >
                  Sign Out
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
