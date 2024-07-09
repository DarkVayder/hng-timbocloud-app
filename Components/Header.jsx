'use client';
import { assets } from '@/Assets/assets';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='relative bg-custom-blue'>
      <div className='relative'>
        <Image src={assets.cover} layout='responsive' objectFit='cover' alt='Cover Image' />
        <div className='absolute left-9 bottom-[-70px]'>
          <Image src={assets.HNGlogo} width={180} height={75} alt='HNG Logo' />
        </div>
      </div>

      <div className='py-10 pt-20 px-5 md:px-12 lg:px-28 text-white'>
        <div className='max-w-4xl mx-auto md:ml-0'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-left'>HNG Shop</h1>
          <p className='text-base md:text-lg leading-snug mb-1 md:mb-2 text-left'>
            Equipping tech talents with perseverance, grit, and skills to succeed
          </p>
          <p className='text-base md:text-lg leading-snug text-left'>
            in their tech careers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
