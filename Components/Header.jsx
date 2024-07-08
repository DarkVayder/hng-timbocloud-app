import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='relative bg-custom-blue'>
      <div className='relative'>
        <Image src={assets.cover} layout='responsive' objectFit='cover' alt='Cover Image' />
        <div className='absolute left-4 md:left-9 bottom-[-50px]'>
          
          <div className='hidden md:block'>
            <Image src={assets.HNGlogo} width={180} height={75} alt='HNG Logo' />
          </div>
          <div className='block md:hidden'>
            <Image src={assets.HNGlogo} width={100} height={40} alt='HNG Logo' />
          </div>
        </div>
      </div>

      <div className='py-20 px-5 md:px-9 lg:px-25 text-white'>
        <div className='absolute left-9 max-w-4xl mx-auto'>
          <h1 className='text-3xl md:text-2xl lg:text-3xl font-bold mb-[4] text-left'>HNG BookStore</h1>
          <p className='text-base md:text-sm leading-relaxed mb-[-4] text-left'>
            Equipping tech talents with perseverance, grit, and skills to succeed</p>
          <p className='text-base md:text-sm leading-relaxed text-left'>in their tech careers.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
