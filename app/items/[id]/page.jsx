'use client';
import { assets, timbu_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useEffect, useState } from 'react';

const ItemPage = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchItemData = () => {
    const item = timbu_data.find(item => Number(params.id) === item.id);
    if (item) {
      setData(item);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchItemData();
    }
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const ratings = [
    { stars: '5 stars', width: '70%' },
    { stars: '4 stars', width: '15%' },
    { stars: '3 stars', width: '30%' },
    { stars: '2 stars', width: '2%' },
    { stars: '1 star', width: '0%' },
  ];

  return (
    <div className='bg-custom-blue min-h-screen flex flex-col'>
      <div className='container mx-auto py-5 px-5 md:px-12 lg:px-28 flex-grow'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <div className='cursor-pointer flex items-center'>
              <Image src={assets.Timbulogo1} width={75} alt='Logo' className='w-[130px] sm:w-auto' />
            </div>
          </Link>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          <div className='relative'>
            <Image className='border-4 border-gray-200' src={data.image} width={500} height={250} alt={data.title} />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-8 drop-shadow-lg leading-tight'>
              {data.title}
            </h1>
            <div className='flex items-center mb-4'>
              <Image src={assets.HNGlogo} width={20} height={10} alt='HNG Shop Logo' className='mr-2' />
              <p className='text-white text-sm'>HNG Shop</p>
            </div>
            <p className='text-base text-white mb-4'>{data.description}</p>
            <p className='text-4xl mb-4 text-white font-bold'>${data.price}</p>
            <div className='flex justify-end space-x-4 mb-4'>
              <button className='bg-inherit text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300'>
                Add to Cart
              </button>
              <Link href='/cart'>
                <button className='bg-white text-black px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300'>
                  Buy Now
                </button>
              </Link>
            </div>
            <div className='flex flex-col text-white'>
              <h1 className='mb-4 text-2xl font-semibold'>Ratings and Reviews</h1>
              {ratings.map((rating, index) => (
                <div key={index} className='mb-4'>
                  <p className='mb-1'>{rating.stars}</p>
                  <div className='w-full bg-gray-300 rounded-full h-4'>
                    <div className='bg-orange-500 h-4 rounded-full' style={{ width: rating.width }}></div>
                  </div>
                </div>
              ))}
              <div className='mt-8'>
                <h2 className='text-xl font-semibold mb-2'>Customer Reviews</h2>
                <div className='bg-gray-700 p-4 rounded-lg mb-4'>
                  <p className='font-bold mb-2'>Pops</p>
                  <p className='text-sm'>Great product! Highly recommend.</p>
                </div>
                <div className='bg-gray-700 p-4 rounded-lg mb-4'>
                  <p className='font-bold mb-2'>Samuel</p>
                  <p className='text-sm'>Good value for money.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <Footer className='self-end' />
    </div>
  );
};

export default ItemPage;
