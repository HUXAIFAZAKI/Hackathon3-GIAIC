"use client"
import React, {useState,useEffect,useMemo} from 'react'
import Image from 'next/image'
import filterIcon from '@/public/Icons/filters.svg'
import LArrow from '@/public/Icons/arrowLeft.svg'
import RArrow from '@/public/Icons/arrowRight.svg'
import navArrow from '@/public/Icons/navArrow.svg'
import tick from "@/public/Icons/tick.svg"
import Card from '@/components/Card'
import { product } from '@/typings'

const page: React.FC = () => {
  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products'); 
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []); 
 
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const [filters, setFilters] = useState({
    minPrice: 100,
    maxPrice: 1000,
    category: null,
    dressStyle: null,
    sortBy: 'Most Popular',
    color: [],
    size: [],
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
  const handleColorChange = (color: string) => {
    updateFilters({
      color: filters.color.includes(color)
        ? filters.color.filter((c) => c !== color)
        : [...filters.color, color]
    });
  };
  const handleSizeChange = (size: string) => {
    setFilters((prev) => ({
      ...prev,
      size: prev.size?.includes(size)
        ? prev.size.filter((s) => s !== size)
        : [...(prev.size || []), size] 
    }));
  };
  
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      (product.discountprice ? product.discountprice : product.price) >= filters.minPrice &&
      (product.discountprice ? product.discountprice : product.price) <= filters.maxPrice &&
      (filters.category ? product.category === filters.category : true) && 
      (filters.dressStyle ? product.dressStyle?.includes(filters.dressStyle) : true) &&
      (filters.size.length > 0 
        ? filters.size.some(size => product.sizes && product.sizes.includes(size))
        : true) &&
      (filters.color.length ? product.colors?.some(c => filters.color.includes(c.id)) : true)
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
  }, [filters,products]);

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
      <div className='hidden border border-gray rounded-3xl w-[20%] p-4 md:flex flex-col gap-4 h-full traslate-y-[100vw] select-none'>
          <h2 className='font-bold text-2xl'>Filters</h2>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
          <div>
          {["tshirt", "shirt", "jeans", "hoodie", "jacket"].map((category) => (
            <span 
              key={category} 
              className='flex justify-between items-center cursor-pointer select-none'
              onClick={() => updateFilters({ category: category.replace('-', '').toLowerCase() })}
            >
              <p className={`cursor-pointer ${filters.category === category ? "text-black font-bold" : "text-gray-500"}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize the category name */}
              </p>
              <Image src={navArrow} alt='arrow' className={`w-2 duration-200 ${filters.category === category ? "block" : "hidden"}`} />
            </span>
          ))}
          </div>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Price</h3>
            <div className='flex justify-between text-sm'>
              <span>${filters.minPrice}</span>
              <span>${filters.maxPrice}</span>
            </div>
            <input type="range" min="100" max="1000" value={filters.minPrice} onChange={handleMinChange} className='w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move w-full' />
            <input type="range" min="100" max="1000" value={filters.maxPrice} onChange={handleMaxChange} className='w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move w-full' />
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Colors</h3>
            <div className='flex gap-2 flex-wrap'>
  {["red", "green", "blue", "yellow", "orange", "black", "violet", "pink", "slate"].map(color => (
    <div 
      key={color} 
      className={`w-8 h-8 rounded-full cursor-pointer select-none flex justify-center items-center ${filters.color.includes(color) ? "border-2 border-black" : ""}`}
      style={{ backgroundColor: color }}
      onClick={() => {
        if (filters.color.includes(color)) {
          updateFilters({ color: filters.color.filter(c => c !== color) });
        } else {
         
          updateFilters({ color: [...filters.color, color] });
        }
      }}
    >
      {filters.color.includes(color) && <Image src={tick} alt='tick' className='w-4 h-4' />}
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
                className={`px-4 py-1 rounded-3xl ${Array.isArray(filters.size) && filters.size.includes(size) ? 'bg-black text-white' : 'bg-[#f0f0f0]'} hover:bg-black hover:text-white`}
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
          {(filters.dressStyle || filters.minPrice > 10 || filters.maxPrice < 1000 || filters.color || filters.size) && (
            <button 
              onClick={() => {
                updateFilters({
                  category: null,
                  minPrice: 10,
                  maxPrice: 1000,
                  dressStyle: null,
                  color: null,
                  size: null
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
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-black">Casuals</h2>
          <span className='flex flex-row justify-between items-center '>
              <p className="text-sm sm:text-base">
              Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} Products&nbsp;  
              </p>
          <span className='hidden md:flex flex-row justify-center items-center select-none'>Sort by:
              <select 
                value={filters.sortBy} 
                onChange={(e) => updateFilters({ sortBy: e.target.value })}
                className="font-bold text-black ml-2 p-x-2 outline-none"
              >
                <option value="Most Popular">Most Popular</option>
                <option value="Price: Low to High" className='cursor-pointer appearance-none hover:bg-black'>Price: Low to High</option>
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
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
    <div className="bg-white p-4 rounded-lg w-[90%] max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl text-black">Filters</h2>
        <button onClick={() => setShowFilters(false)} className="text-2xl font-bold">
          ✕
        </button>
      </div>
      <hr className="my-2 border-[#f0f0f0]" />
      <div className="space-y-4">
        {/* Category Filters */}
        <div>
          <h3 className="font-bold text-xl">Category</h3>
          {["T-Shirts", "Shirts", "Jeans", "Hoodies", "Jackets"].map((category) => (
            <div
              key={category}
              className="flex justify-between items-center cursor-pointer select-none py-2"
              onClick={() => {
                updateFilters({ category: category });
                setShowFilters(false);
              }}
            >
              <p className={`${filters.category === category ? "text-black font-bold" : "text-gray-500"}`}>
                {category}
              </p>
              {filters.category === category && <Image src={navArrow} alt="arrow" className="w-2" />}
            </div>
          ))}
        </div>
        <hr className="my-2 border-[#f0f0f0]" />
        {/* Price Filters */}
        <div>
          <h3 className="font-bold text-xl">Price</h3>
          <div className="flex justify-between text-sm">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
          <input
            type="range"
            min="100"
            max="1000"
            value={filters.minPrice}
            onChange={handleMinChange}
            className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move"
          />
          <input
            type="range"
            min="100"
            max="1000"
            value={filters.maxPrice}
            onChange={handleMaxChange}
            className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move"
          />
        </div>
        <hr className="my-2 border-[#f0f0f0]" />
        {/* Color Filters */}
        <div>
          <h3 className="font-bold text-xl">Colors</h3>
          <div className="flex gap-2 flex-wrap">
            {["red", "green", "blue", "yellow", "orange", "black", "violet", "pink", "slate"].map((color) => (
              <div
                key={color}
                className={`w-8 h-8 rounded-full cursor-pointer select-none flex justify-center items-center ${
                  filters.color === color ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => updateFilters({ color: filters.color === color ? null : color })}
              >
                {filters.color === color && <Image src={tick} alt="tick" className="w-4 h-4" />}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-2 border-[#f0f0f0]" />
        {/* Size Filters */}
        <div>
          <h3 className="font-bold text-xl">Sizes</h3>
          <div className="flex flex-row flex-wrap gap-2">
            {["Small", "Medium", "Large", "X Large"].map((size) => (
              <button
                key={size}
                className={`px-4 py-1 rounded-3xl ${
                  filters.size === size ? "bg-black text-white" : "bg-[#f0f0f0]"
                } hover:bg-black hover:text-white`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <hr className="my-2 border-[#f0f0f0]" />
        {/* Dress Style Filters */}
        <div>
          <h3 className="font-bold text-xl">Dress Style</h3>
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <div
              key={style}
              className="flex justify-between items-center cursor-pointer select-none py-2"
              onClick={() => {
                updateFilters({ dressStyle: style });
                setShowFilters(false);
              }}
            >
              <p className={`${filters.dressStyle === style ? "font-bold text-black" : "text-gray-500"}`}>
                {style}
              </p>
              {filters.dressStyle === style && <Image src={navArrow} alt="arrow" className="w-2" />}
            </div>
          ))}
        </div>
        <hr className="my-2 border-[#f0f0f0]" />
        {/* Apply and Clear Filters */}
        <div className="flex justify-center gap-4">
          <button
            className="bg-black text-white py-2 px-4 rounded-full"
            onClick={() => setShowFilters(false)}
          >
            Apply Filters
          </button>
          <button
            className="bg-gray-200 py-2 px-4 rounded-full hover:bg-black hover:text-white"
            onClick={() => {
              updateFilters({
                category: null,
                minPrice: 10,
                maxPrice: 1000,
                dressStyle: null,
                color: null,
                size: null
              });
              setShowFilters(false);
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  </div>
)}
          </span>
        </div>

        <div className='flex flex-row md:gap-x-10 flex-wrap justify-center'>
          {currentProducts.map((product) => (
            <Card id={product._id} name={product.name} image={product.imageUrl} price={product.price} discountprice={product.discountPrice} discountPercentage={product.discountPercent} rating={product.rating} />
          ))}
        </div>

        <hr className="my-4 mx-auto w-full h-[5px] border-[#f0f0f0] bg-[#f0f0f0] border-[1.75px] select-none" />

        {/* Pagination controls */}
        <div className="flex justify-between w-[90%] mx-auto">
  <button
    aria-label="Previous page"
    className="border-black/20 hover:border-black/50 border rounded-xl py-2 px-4 flex justify-center items-center gap-2"
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    <Image src={LArrow} alt="arrow" width={16} height={16} />
    <span className="hidden sm:inline">Previous</span>
  </button>
  <span className="flex items-center text-sm md:text-base select-none">
    Page {currentPage} of {totalPages}
  </span>
  <button
    aria-label="Next page"
    className="border-black/20 hover:border-black/50 border rounded-xl py-2 px-4 flex justify-center items-center gap-2"
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    <span className="hidden sm:inline">Next</span>
    <Image src={RArrow} alt="arrow" width={16} height={16} />
  </button>
</div>
      </div>
    </section>
  )
}

export default page
