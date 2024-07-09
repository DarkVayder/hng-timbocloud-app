'use client';

import { assets, timbu_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiStar } from "react-icons/ci";

const ItemPage = ({ params }) => {
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showReviewField, setShowReviewField] = useState(false);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchItemData();
      loadCartItems();
    }
  }, [params.id]);

  const fetchItemData = () => {
    const item = timbu_data.find(item => Number(params.id) === item.id);
    if (item) {
      setData(item);
    }
  };

  const loadCartItems = () => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  };

  const addToCart = () => {
    const existingItem = cartItems.find(item => item.id === data.id);
    let updatedCartItems;

    if (existingItem) {
      updatedCartItems = cartItems.map(item =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCartItems = [...cartItems, { ...data, quantity: 1 }];
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    toast.success(`${data.title} added to cart!`);
  };

  const goToCart = () => {
    window.location.href = '/cart';
  };

  const handleReviewSubmit = () => {
    setShowReviewField(false);
    setReviewText("");
    toast.success('Review submitted successfully!');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const ratings = [
    { stars: 5, width: '70%' },
    { stars: 4, width: '10%' },
    { stars: 3, width: '30%' },
    { stars: 2, width: '2%' },
    { stars: 1, width: '0%' },
  ];

  return (
    <div className='bg-custom-blue min-h-screen flex flex-col'>
      <Navbar />
      <div className='container mx-auto py-5 px-5 md:px-12 lg:px-28 flex-grow'>
        <nav className='text-white mb-4'>
          <a href='/' className='text-blue-500 hover:underline'>Home</a> {'>'} <span>items</span>
        </nav>
        <h1 className='text-3xl font-bold text-white mb-8'>Item</h1>
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
              <button 
                className='bg-inherit text-white border border-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300'
                onClick={addToCart}
              >
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
                <div key={index} className='mb-4 flex items-center'>
                  <div className='flex items-center mr-2'>
                    <p className='ml-1'>{rating.stars} </p>
                    <CiStar className='text-yellow-400' />
                  </div>
                  <div className='w-full bg-gray-300 rounded-full h-4'>
                    <div className='bg-orange-500 h-4 rounded-full' style={{ width: rating.width }}></div>
                  </div>
                </div>
              ))}
              <div className='flex justify-end mb-4'>
                <button 
                  className='bg-white text-black px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300'
                  onClick={() => setShowReviewField(!showReviewField)}
                >
                  Write a Review
                </button>
              </div>
              {showReviewField && (
                <div className='mb-4'>
                  <textarea 
                    className='w-full p-2 rounded-lg bg-gray-700 text-white' 
                    value={reviewText} 
                    onChange={(e) => setReviewText(e.target.value)} 
                    rows={4} 
                    placeholder='Write your review here...'
                  ></textarea>
                  <button 
                    className='bg-blue-600 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-500 transition duration-300'
                    onClick={handleReviewSubmit}
                  >
                    Submit
                  </button>
                </div>
              )}
              <div className='mt-8'>
                <h2 className='text-xl font-semibold mb-2'>Customer Reviews</h2>
                <div className='bg-gray-700 p-4 rounded-lg mb-4'>
                  <p className='font-bold mb-2'>Samuel</p>
                  <p className='text-sm'>Great product! Highly recommend.</p>
                </div>
                <div className='bg-gray-700 p-4 rounded-lg mb-4'>
                  <p className='font-bold mb-2'>Pops</p>
                  <p className='text-sm'>Good value for money.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className='self-end' />
      <ToastContainer />
    </div>
  );
};

export default ItemPage;
