"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import filters from '@/public/Icons/filters.svg'
import LArrow from '@/public/Icons/arrowLeft.svg'
import RArrow from '@/public/Icons/arrowRight.svg'
import navArrow from '@/public/Icons/navArrow.svg'
import tick from "@/public/Icons/tick.svg"
import Card from '@/components/Card'
import { allProducts } from '@/components/Data/Products'
import styles from './style.module.css'

const page: React.FC = () => {
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDressStyle, setSelectedDressStyle] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('Most Popular');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Math.min(Number(e.target.value), maxPrice - 50));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Math.max(Number(e.target.value), minPrice + 50));
  };

  const filteredProducts = allProducts.filter(product => 
    (product.discountprice ? product.discountprice : product.price) >= minPrice &&
    (product.discountprice ? product.discountprice : product.price) <= maxPrice &&
    (selectedCategory ? product.category === selectedCategory : true) &&
    (selectedDressStyle ? product.dressStyle?.includes(selectedDressStyle) : true)
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return (a.discountprice ? a.discountprice : a.price) - (b.discountprice ? b.discountprice : b.price);
      case 'Price: High to Low':
        return (b.discountprice ? b.discountprice : b.price) - (a.discountprice ? a.discountprice : a.price);
      case 'Rating':
        return b.rating - a.rating;
      case 'Most Popular':
      default:
        return 0;
    }
  });
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  return (
    <section className='bg-white mt-10 mx-auto w-full md:w-[90%] flex flex-row gap-5'>
      <div className='filters hidden border border-gray rounded-3xl w-[20%] p-4 md:flex flex-col gap-4 h-full traslate-y-[100vw]'>
          <h2 className='font-bold text-2xl'>Filters</h2>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            {["T-Shirts", "Shirts", "Jeans", "Hoodies", "Jackets"].map((category) => (
              <span 
                key={category} 
                className='flex justify-between items-center cursor-pointer select-none'
                onClick={() => setSelectedCategory(category)}
              >
                <p className={`${selectedCategory === category ? "font-bold" : "font-normal"}`}>
                  {category}
                </p>
                <Image src={navArrow} alt='arrow' className={`w-2 duration-200 ${selectedCategory === category ? "block" : "hidden"}`} />
              </span>
            ))}
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Price</h3>
            <div className='flex justify-between text-sm'>
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>
            <input type="range" min="10" max="1000" value={minPrice} onChange={handleMinChange} className='w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move w-full' />
            <input type="range" min="10" max="1000" value={maxPrice} onChange={handleMaxChange} className='w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move w-full' />
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Colors</h3>
            <div className='flex gap-2 flex-wrap'>
                <div className='bg-red-500 w-8 h-8 rounded-full cursor-pointer select-none flex justify-center items-center'>
                  <Image src={tick} alt='tick' className='hidden'></Image>
                </div>
                <div className='bg-green-500 w-8 h-8 rounded-full cursor-pointer select-none'></div>
                <div className='bg-blue-500 w-8 h-8 rounded-full cursor-pointer select-none'></div>
                <div className='bg-yellow-500 w-8 h-8 rounded-full cursor-pointer select-none'></div>
                <div className='bg-orange-500 w-8 h-8 rounded-full cursor-pointer select-none'></div>
                <div className='bg-black w-8 h-8 rounded-full cursor-pointer select-none'></div>
                <div className='bg-violet-500 w-8 h-8 rounded-full cursor-pointer select-none'></div>
                <div className='bg-blue-500 w-8 h-8 rounded-full cursor-pointer select-none'></div>
                <div className='bg-pink-500 w-8 h-8 rounded-full cursor-pointer select-none'></div>
                <div className='bg-slate-500 w-8 h-8 rounded-full cursor-pointer select-none'></div>
            </div>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Sizes</h3>
            <div className='flex flex-row flex-wrap gap-4'>
                <button className='bg-black text-white px-4 py-1 rounded-3xl'>Large</button>
                <button className='bg-[#f0f0f0] px-4 py-1 rounded-3xl hover:bg-black hover:text-white'>X Large</button>
                <button className='bg-[#f0f0f0] px-4 py-1 rounded-3xl hover:bg-black hover:text-white ' >Medium</button>
                <button className='bg-[#f0f0f0] px-4 py-1 rounded-3xl hover:bg-black hover:text-white'>Small</button>
              </div>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Dress Style</h3>
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <span 
              key={style} 
              className='flex justify-between items-center cursor-pointer select-none'
              onClick={() => setSelectedDressStyle(style)}
            >
              <p className={`${selectedDressStyle === style ? "font-bold" : "font-normal"}`}>
                {style}
              </p>
              <Image src={navArrow} alt='arrow' className={`w-2 duration-200 ${selectedDressStyle === style ? "block" : "hidden"}`} />
            </span>
          ))}
          </div>
          
          <button className='bg-black text-white py-3 px-4 rounded-full'>Apply Filter</button>
          {(selectedCategory || minPrice > 10 || maxPrice < 1000) && (
            <button 
              onClick={() => {
                setSelectedCategory(null);
                setMinPrice(10);
                setMaxPrice(5000);
                setSelectedDressStyle(null);
              }} 
              className="bg-gray-200 px-4 py-2 rounded-full mt-2 hover:bg-black hover:text-white"
            >
              Clear Filters
            </button>
          )}
      </div>

      <div className='w-full'>
        <div className='text-[rgba(0,0,0,0.6)] flex gap-2 md:gap-0 justify-around md:justify-between items-center md:items-center mb-4 w-[90%] mx-auto'>
          <h2 className='font-bold text-3xl md:text-4xl text-bold text-black'>Casuals</h2>
          <span className='flex flex-row justify-between items-center '>
            <p>Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} Products &nbsp;</p>
            <span className='hidden md:flex flex-row justify-center items-center select-none'>Sort by:
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)} 
                className="font-bold text-black ml-2 p-x-2"
              >
                <option value="Most Popular">Most Popular</option>
                <option value="Price: Low to High" className='appearance-none hover:bg-black'>Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Rating">Rating</option>
              </select>
            </span>
            <Image src={filters} alt='filters' className='relative md:hidden cursor-pointer w-[35px] bg-[#f0f0f0] rounded-full p-2' onClick={() => {
              document.querySelector('.filters')?.classList.toggle(`${styles.hide}`)
            }}></Image>
          </span>
        </div>

        <div className='grid grid-col-2 md:grid-cols-3 gap-y-4 gap-x-0 place-items-center'>
          {currentProducts.map((product) => (
            <Card id={product.id} name={product.name} image={product.image} price={product.price} discountprice={product.discountprice} discountPercentage={product.discountPercentage} rating={product.rating} />
          ))}
        </div>

        <hr className="my-4 mx-auto w-full h-[5px] border-[#f0f0f0] bg-[#f0f0f0] border-[1.75px] select-none" />

        {/* Pagination controls */}
        <div className='flex flex-row justify-between w-[90%] mx-auto'>
          <button 
            className='border-black/20 border rounded-xl py-2 px-4 flex justify-center items-center gap-4'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Image src={LArrow} alt='arrow' />
            <p>Previous</p>
          </button>

          <span className='flex gap-1'>
            {[...Array(totalPages)].map((_, index) => (
              <button 
                key={index} 
                className={`hover:border-black/20 border rounded-xl py-2 px-4 text-black bg-[#f0f0f0] ${currentPage === index + 1 ? 'bg-black text-white' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </span>

          <button 
            className='border-black/20 border rounded-xl py-2 px-4 flex justify-center items-center gap-4'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <p>Next</p>
            <Image src={RArrow} alt='arrow' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default page