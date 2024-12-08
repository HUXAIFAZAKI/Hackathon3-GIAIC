"use client"
import React from 'react'
import Image from 'next/image'
import pic1 from '@/public/Images/pic9.png'
import pic2 from '@/public/Images/pic10.png'
import pic3 from '@/public/Images/pic11.png'
import { integralCF } from '@/style/fonts'
import { useState } from 'react'

const page = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <section className='bg-white'>
        <div className='w-[80vw] mx-auto pt-4 flex flex-row gap-8 bg-white'>
        <div className='flex flex-row  gap-4'>
        <div className='flex flex-row md:flex-col gap-4 '>
          <Image src={pic1} alt="pic1" width={180} height={150} className='border border-black/80 rounded-xl px-4 bg-[#f0f0f0]'></Image>
          <Image src={pic2} alt="pic1" width={180} height={150} className='border border-black/20 rounded-xl px-4 bg-[#f0f0f0]'></Image>
          <Image src={pic3} alt="pic1" width={180} height={150} className='border border-black/20 rounded-xl px-4 bg-[#f0f0f0]'></Image>
         </div>
        <Image src={pic1} alt="pic1" width={425} className='rounded-xl'></Image>
        </div>
        <div className='flex flex-col gap-4 w-[50%]'>
          <h2 className={`${integralCF.className} text-3xl mb-6`}>One Life Graphic T shirt</h2>
          <span className='flex gap-4'>
            <p className='font-bold text-xl'>$200</p>
            <p className='line-through text-black/20 font-bold text-xl'>$300</p>
          </span>
          <p className='text-[rgba(0,0,0,0.6)]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          <hr className="mx-auto w-full h-[4px] border-black/20 select-none" />
          <div className='py-2'>
            <h3 className='mb-2'>Select Colors</h3>
              <div className='flex flex-row gap-4'>
                <div className='bg-[#4F4631] w-12 h-12 rounded-full cursor-pointer select-none'></div>
                <div className='bg-[#314F4A] w-12 h-12 rounded-full cursor-pointer select-none'></div>
                <div className='bg-[#31344F] w-12 h-12 rounded-full cursor-pointer select-none'></div>
              </div>
            </div>
            <hr className="mx-auto w-full h-[4px] border-black/20 select-none" />
            <div className='py-2'>
            <h3 className='mb-2'>Choose Size</h3>
              <div className='flex flex-row gap-4'>
                <button className='bg-[#f0f0f0] px-4 py-2 rounded-3xl hover:bg-black hover:text-white'>Small</button>
                <button className='bg-[#f0f0f0] px-4 py-2 rounded-3xl hover:bg-black hover:text-white ' >Medium</button>
                <button className='bg-black text-white px-4 py-2 rounded-3xl'>Large</button>
                <button className='bg-[#f0f0f0] px-4 py-2 rounded-3xl hover:bg-black hover:text-white'>X Large</button>
              </div>
            </div>
            <hr className="mx-auto w-full h-[4px] border-black/20 select-none" />
            <div className='flex justify-around items-center select-none w-full'>
              <div className='flex flex-row gap-4 justify-center items-center w-[20%] bg-[#f0f0f0] rounded-3xl'>
                <button className='text-4xl ' onClick={() => (quantity > 1)? setQuantity(quantity - 1) : setQuantity(1)}>-</button>
                <p className='font-bold text-xl'>{quantity}</p>
                <button className='text-2xl' onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className='bg-black text-white px-4 py-3 rounded-3xl w-[40%]'>Add to Cart</button>
            </div>
        </div>
        
        
    </div>
    <div className='w-[80vw] mx-auto mt-10 select-none'>
          <span className='flex justify-around items-center gap-4'>
            <h3 className='border-b-2 text-[rgba(0,0,0,0.6)] border-black/20 hover:text-black hover:border-black cursor-pointer'>Product Details</h3>
            <h3 className='border-b-2 border-black cursor-pointer'>Rating & Reviews</h3>
            <h3 className='border-b-2 text-[rgba(0,0,0,0.6)] border-black/20 hover:text-black hover:border-black cursor-pointer'>FAQs</h3>
          </span>
        </div>
    </section>
    
    
  )
}

export default page