"use client"
import React, {useState,useMemo} from 'react'
import Image from 'next/image'
import filterIcon from '@/public/Icons/filters.svg'
import LArrow from '@/public/Icons/arrowLeft.svg'
import RArrow from '@/public/Icons/arrowRight.svg'
import navArrow from '@/public/Icons/navArrow.svg'
import tick from "@/public/Icons/tick.svg"
import Card from '@/components/Card'
import { allProducts } from '@/components/Data/Products'

const page: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const [filters, setFilters] = useState({
    minPrice: 10,
    maxPrice: 1000,
    category: null,
    dressStyle: null,
    sortBy: 'Most Popular',
    color: null,
    size: null
  });

  const updateFilters = (newFilters: Partial<typeof filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters({ minPrice: Number(e.target.value) });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters({ maxPrice: Number(e.target.value) });
  };

  const handleSizeChange = (size: string) => {
    updateFilters({ size: filters.size === size ? null : size });
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product =>
      (product.discountprice ? product.discountprice : product.price) >= filters.minPrice &&
      (product.discountprice ? product.discountprice : product.price) <= filters.maxPrice &&
      (filters.category ? product.category === filters.category : true) && 
      (filters.dressStyle ? product.dressStyle?.includes(filters.dressStyle) : true) &&
      (filters.size ? product.size === filters.size : true)
    ).sort((a, b) => {
      switch (filters.sortBy) {
        case 'Price: Low to High':
          return (a.discountprice || a.price) - (b.discountprice || b.price);
        case 'Price: High to Low':
          return (b.discountprice || b.price) - (a.discountprice || a.price);
        case 'Rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [filters,allProducts]);

  const currentProducts = useMemo(() => {
    return filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredProducts, currentPage]);  
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  return (
    <section className='bg-white mt-10 mx-auto w-full md:w-[90%] flex flex-row gap-5'>
      {/* Filters */}
      <div className='hidden border border-gray rounded-3xl w-[20%] p-4 md:flex flex-col gap-4 h-full traslate-y-[100vw]'>
          <h2 className='font-bold text-2xl'>Filters</h2>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            {["T-Shirts", "Shirts", "Jeans", "Hoodies", "Jackets"].map((category) => (
              <span 
                key={category} 
                className='flex justify-between items-center cursor-pointer select-none'
                onClick={() => updateFilters({ category: category })}
              >
                <p className={`cursor-pointer ${filters.category === category ? "text-black font-bold" : "text-gray-500"}`}>
                    {category}
                </p>
                <Image src={navArrow} alt='arrow' className={`w-2 duration-200 ${filters.category === category ? "block" : "hidden"}`} />
              </span>
            ))}
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Price</h3>
            <div className='flex justify-between text-sm'>
              <span>${filters.minPrice}</span>
              <span>${filters.maxPrice}</span>
            </div>
            <input type="range" min="10" max="1000" value={filters.minPrice} onChange={handleMinChange} className='w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move w-full' />
            <input type="range" min="10" max="1000" value={filters.maxPrice} onChange={handleMaxChange} className='w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move w-full' />
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Colors</h3>
            <div className='flex gap-2 flex-wrap'>
                {["red", "green", "blue", "yellow", "orange", "black", "violet", "pink", "slate"].map(color => (
                  <div 
                    key={color} 
                    className={`bg-${color}-500 w-8 h-8 rounded-full cursor-pointer select-none flex justify-center items-center ${filters.color === color ? "border-2 border-black" : ""}`}
                    onClick={() => updateFilters({ color: filters.color === color ? null : color })}
                  >
                    {filters.color === color && <Image src={tick} alt='tick' className='w-4 h-4' />}
                  </div>
                ))}
            </div>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Sizes</h3>
            <div className='flex flex-row flex-wrap gap-4'>
            {["Small", "Medium", "Large", "X Large"].map((size) => (
              <button
                key={size}
                className={`px-4 py-1 rounded-3xl ${filters.size === size ? 'bg-black text-white' : 'bg-[#f0f0f0]'} hover:bg-black hover:text-white`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Dress Style</h3>
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <span 
              key={style} 
              className='flex justify-between items-center cursor-pointer select-none'
              onClick={() => updateFilters({ dressStyle: style })}
            >
              <p className={`${filters.dressStyle === style ? "font-bold text-black font-bold" : "font-normal text-gray-500"}`}>
                {style}
              </p>
              <Image src={navArrow} alt='arrow' className={`w-2 duration-200 ${filters.dressStyle === style ? "block" : "hidden"}`} />
            </span>
          ))}
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <button className='bg-black text-white py-3 px-4 rounded-full'>Apply Filter</button>
          {(filters.dressStyle || filters.minPrice > 10 || filters.maxPrice < 1000) && (
            <button 
              onClick={() => {
                updateFilters({
                  category: null,
                  minPrice: 10,
                  maxPrice: 1000,
                  dressStyle: null,
                })
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
                value={filters.sortBy} 
                onChange={(e) => updateFilters({ sortBy: e.target.value })}
                className="font-bold text-black ml-2 p-x-2"
              >
                <option value="Most Popular">Most Popular</option>
                <option value="Price: Low to High" className='appearance-none hover:bg-black'>Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Rating">Rating</option>
              </select>
            </span>
            <button onClick={() => setShowFilters(true)} className="md:hidden">
                <Image src={filterIcon} alt='filters' className='relative md:hidden cursor-pointer w-[35px] bg-[#f0f0f0] rounded-full p-2' onClick={() => {
                  document.querySelector('.filters')?.classList.toggle(`${styles.hide}`)
                }}></Image>
            </button>
            {/* Mobile Filters */}
            {showFilters && (
            <div className={`${styles.filterOverlay} fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center`}>
              <div className="bg-white p-4 rounded-lg w-3/4">
              <div className='flex justify-center items-center'>
                <h2 className='font-bold text-2xl text-center text-black inline-block'>Filters</h2>
                <button onClick={() => setShowFilters(false)} className="inline-block relative left-[30%] font-bold">
                  ✕
                </button>
              </div>
                
                <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
                <div className='flex flex-col items-center justify-center my-4'>
              {["T-Shirts", "Shirts", "Jeans", "Hoodies", "Jackets"].map((category) => (
              <span 
                key={category} 
                className='flex justify-between items-center cursor-pointer select-none'
                onClick={() => {
                  updateFilters({ category: category });
                  setShowFilters(false);
                }}
              >
                <p className={`cursor-pointer ${filters.category === category ? "text-black font-bold" : "text-gray-500"}`}>
                    {category}
                </p>
              </span>
            ))}
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div className='my-4'>
            <h3 className='font-bold text-xl text-center'>Price</h3>
            <div className='flex justify-between text-sm'>
              <span>${filters.minPrice}</span>
              <span>${filters.maxPrice}</span>
            </div>
            <input type="range" min="10" max="1000" value={filters.minPrice} onChange={handleMinChange} className='w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move w-full' />
            <input type="range" min="10" max="1000" value={filters.maxPrice} onChange={handleMaxChange} className='w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move w-full' />
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div className='my-4'>
            <h3 className='font-bold text-xl text-center '>Colors</h3>
            <div className='flex items-center justify-center gap-2 flex-wrap'>
                {["red", "green", "blue", "yellow", "orange", "black", "violet", "pink", "slate"].map(color => (
                  <div 
                    key={color} 
                    className={`bg-${color}-500 w-8 h-8 rounded-full cursor-pointer select-none flex justify-center items-center ${filters.color === color ? "border-2 border-black" : ""}`}
                    onClick={() => updateFilters({ color: filters.color === color ? null : color })}
                  >
                    {filters.color === color && <Image src={tick} alt='tick' className='w-4 h-4' />}
                  </div>
                ))}
            </div>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div className='my-4'>
            <h3 className='font-bold text-xl text-center'>Sizes</h3>
            <div className='flex flex-row flex-wrap gap-4'>
            {["Small", "Medium", "Large", "X Large"].map((size) => (
              <button
                key={size}
                className={`px-4 py-1 rounded-3xl ${filters.size === size ? 'bg-black text-white' : 'bg-[#f0f0f0]'} hover:bg-black hover:text-white`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div className='flex flex-col justify-center items-center my-4'>
            <h3 className='font-bold text-xl'>Dress Style</h3>
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <span 
              key={style} 
              className='flex justify-between items-center cursor-pointer select-none'
              onClick={() => {
                updateFilters({ dressStyle: style });
                setShowFilters(false);
              }}
            >
              <p className={`${filters.dressStyle === style ? "font-bold text-black font-bold" : "font-normal text-gray-500"}`}>
                {style}
              </p>
            </span>
          ))}
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div className='flex  justify-center items-center my-5'>
          <button className='bg-black text-white py-3 px-4 rounded-full'>Apply Filter</button>
          {(filters.dressStyle || filters.minPrice > 10 || filters.maxPrice < 1000) && (
            <button 
              onClick={() => {
                updateFilters({
                  category: null,
                  minPrice: 10,
                  maxPrice: 1000,
                  dressStyle: null,
                })
                setShowFilters(false)
              }} 
              className="bg-gray-200 px-4 py-2 rounded-full mt-2 hover:bg-black hover:text-white"
            >
              Clear Filters
            </button>
          )}
          </div>
          
              </div>
            </div>
          )} 
          </span>
        </div>

        {/* <div className='grid grid-col-2 md:grid-cols-3 gap-y-4 gap-x-0 place-items-center'> */}
        <div className='flex flex-row md:gap-x-10 flex-wrap justify-center'>
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
            {[...Array(totalPages)].slice(Math.max(0, currentPage - 3), currentPage + 2).map((_, index) => (
                <button
                  key={index}
                  className={`hover:border-black/20 border py-2 px-4 rounded-lg ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200'}`}
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
