import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28 bg-blue-950'>
      <div className='flex justify-between items-center'>
        <Image src={assets.Timbulogo1} width={180} height={50} alt='Timbo Logo' className='w-[130px] sm:w-auto' />

        <div className='flex items-center space-x-4'>
          <MdOutlineShoppingCart className='text-white w-6 h-6 cursor-pointer' />
          <div className='relative flex items-center'>
            <RxAvatar className='text-white w-6 h-6 cursor-pointer' />
            <RiArrowDropDownLine className='text-white w-6 h-6 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
