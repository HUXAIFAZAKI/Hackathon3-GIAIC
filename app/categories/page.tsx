import React from 'react'
import { NewProducts,TopProducts } from '@/components/Data/Products'
import Image from 'next/image'
import filters from '@/public/Icons/filters.svg'
import star from '@/public/Icons/small-star.svg'
import LArrow from '@/public/Icons/arrowLeft.svg'
import RArrow from '@/public/Icons/arrowRight.svg'



const products = [...NewProducts,...TopProducts]


const page: React.FC = () => {
  
  return (
    <section className='bg-white mt-10 mx-auto w-full md:w-[90%] flex flex-row gap-5'>
      <div className='hidden border border-gray rounded-3xl w-[20%] p-4 md:flex flex-col gap-4 h-full'>
          <h2 className='font-bold text-2xl'>Filters</h2>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <p>T-Shirts</p>
            <p>Shirts</p>
            <p>Jeans</p>
            <p>Hoodie</p>
            <p>Jackets</p>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Price</h3>
            <input type="range" className='appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move'  min="100" 
                    max="100000"  /> 
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Colors</h3>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Sizes</h3>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Dress Style</h3>
          </div>
          
          <button className='bg-black text-white py-3 px-4 rounded-full'>Apply Filter</button>
      </div>
      <div className='w-full'>
        <div className='text-[rgba(0,0,0,0.6)] flex gap-2 md:gap-0 md:justify-between items-baseline md:items-center mb-4 w-[90%] mx-auto'>
          <h2 className='font-bold text-3xl md:text-4xl text-bold text-black'>Casuals</h2>
          <span className='flex flex-row justify-between'>
            <p>Showing 1-10 of 100 Products &nbsp;</p>
            <span className='hidden md:flex flex-row'>Sort by:&nbsp;
              <p className='font-bold text-black'>Most Popular</p>
            </span>
            <Image src={filters} alt='filters' className='relative left-2 bottom-1 md:hidden cursor-pointer w-[30px] bg-[#f0f0f0] rounded-full p-2'></Image>
          </span>
        </div>
        <div className='grid grid-col-2 md:grid-cols-3 gap-y-4 gap-x-0 place-items-center grid-col-'>
        {products.map((product) => (
            <div className='flex flex-col justify-center items-start'>
            <Image src={product.image} alt="product"  className=' bg-[#f0f0f0] cursor-pointer hover:shadow-2xl rounded-xl'/>
            <h2 className='font-bold text-lg pt-2'>{product.name}</h2>
            <span className='flex items-center'>{[...Array(product.rating)].map((_, index) => <Image key={index} src={star} alt='star'/>)}</span>
            <span className='flex justify-start gap-5 w-full'>
              <p className='font-bold text-xl pt-2'>${product.discountprice}</p>
              <p className='font-bold text-xl pt-2 line-through text-[rgba(0,0,0,0.4)]'>${product.price}</p>
            </span>
            </div>
          ))}
        </div>
        <hr className="my-4 mx-auto w-full h-[5px] border-[#f0f0f0] border-[1.75px] select-none" />
        <div className='flex flex-row justify-between w-[90%] mx-auto'>
          <button className='border-black/20 border rounded-xl py-2 px-4  flex justify-center items-center gap-4'>
            <Image src={LArrow} alt='arrow'></Image>
            <p>Previous</p>
          </button>
          <span className='flex gap-1'>
            <button className='hover:border-black/20 border-black/20 border rounded-xl py-2 px-4 text-black bg-[#f0f0f0]'>1</button>
            <button className='hover:border-black/20 border rounded-xl py-2 px-4 text-black bg-[#f0f0f0]'>2</button>
            <button className='hover:border-black/20 border rounded-xl py-2 px-4 text-black bg-[#f0f0f0] hidden md:block'>3</button>
            <button className='hover:border-black/20 border rounded-xl py-2 px-4 text-black bg-[#f0f0f0]'>...</button>
            <button className='hover:border-black/20 border rounded-xl py-2 px-4 text-black bg-[#f0f0f0] hidden md:block'>4</button>
            <button className='hover:border-black/20 border rounded-xl py-2 px-4 text-black bg-[#f0f0f0] hidden md:block'>5</button>
            <button className='hover:border-black/20 border rounded-xl py-2 px-4 text-black bg-[#f0f0f0] hidden md:block'>6</button>
          </span>
          <button className='border-black/20 border rounded-xl py-2 px-4  flex justify-center items-center gap-4'>
          <p>Next</p>
          <Image src={RArrow} alt='arrow'></Image>
          </button>
        </div>
      </div>
    </section>
  )
}

export default page