"use client"
import React from 'react'
import { integralCF } from '@/style/fonts'
import { useState } from 'react'

import shirt1 from '@/public/Images/pic1.png'
import shirt2 from '@/public/Images/pic2.png'
import shirt3 from '@/public/Images/pic3.png'
import Image from 'next/image'


const cartData = [
  {
    name:"T-SHIRT WITH TAPE DETAILS",
    size:"M",
    color:"BLACK",
    price:"$145",
    img: shirt1
  },
  {
    name:"CHECKERED SHIRT",
    size:"M",
    color:"BLACK",
    price:"$180",
    img: shirt2
  },
  {
    name:"SKINNY FIT JEANS",
    size:"M",
    color:"BLACK",
    price:"$240",
    img: shirt3
  }
]

const page = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <section className='min-h-screen bg-white'>
      <div className='pt-4 mx-auto w-[80vw]'>
        <h1 className={`${integralCF.className} text-4xl`}>YOUR CART</h1>
        <div className='flex flex-col justify-around items-center gap-4 border border-gray rounded-3xl mt-10'>
          {cartData.map((item) => (
            <>
            
            
            <div className='flex justify-center items-center  w-full'>
              <Image src={item.img} alt={item.name} width={150} className='rounded-3xl px-4'/>
              <div className='flex flex-col py-4 border-b border-gray p-8 w-full'>
              <h3 className='text-[rgba(0,0,0,0.8)] font-bold text-xl '>{item.name}</h3>
              <div className='flex flex-col justify-between'>
                  <p className='text-[rgba(0,0,0,0.8)]'>Size: {item.size}</p>
                  <p className='text-[rgba(0,0,0,0.8)]'>Color: {item.color}</p>
                  <span className='flex flex-row justify-between items-center '>
                  <p className='text-[rgba(0,0,0,0.8)] font-bold text-xl'>{item.price}</p>
                  <div className='flex flex-row gap-4 justify-center items-center w-[50%] md:w-[30%] bg-[#f0f0f0] rounded-3xl'>
                  <button className='text-4xl ' onClick={() => (quantity > 1)? setQuantity(quantity - 1) : setQuantity (1)}>-</button>
                  <p className='font-bold text-xl'>{quantity}</p>
                  <button className='text-2xl' onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                  </span>        
              </div>
              </div>
            </div>
            </>
          ))}
        </div>
        <div className='flex flex-col gap-4 border border-gray rounded-3xl mt-10 p-8'>
          <div>
            <h3 className='text-black font-bold text-xl text-left'>Order Summary</h3>
            <div>
              <span className='flex flex-row justify-between'>
                <p className='text-[rgba(0,0,0,0.8)] text-left'>Subtotal</p>
                <p className='font-bold'>$565</p>
              </span>
              <span className='flex flex-row justify-between'>
                <p className='text-[rgba(0,0,0,0.8)] text-left '>Discount (20%) </p>
                <p className='text-red-600 font-bold'>-$133</p>
              </span>
              <span className='flex flex-row justify-between'>
                <p className='text-[rgba(0,0,0,0.8)] text-left'>Delivery Fees</p>
                <p className='font-bold'>$15</p>
              </span>
            </div>
            <hr className="mx-auto w-full h-[4px] border-black/20 my-2" /> 
            <span className='flex flex-row justify-between'>
                <p className='text-[rgba(0,0,0,0.8)] text-left'>Total</p>
                <p className='font-bold text-xl'>$467</p>
              </span>
          </div>
          <div className='flex justify-between gap-2'>
            <input type="text" placeholder="Promo Code" className="focus:outline-none w-[70%] p-2 border border-gray rounded-3xl" />
            <button className="text-center bg-black text-white py-3 px-4 rounded-full w-[30%]">Apply</button>
          </div>
          <button className='text-center bg-black text-white py-3 px-4 rounded-full '>Checkout</button>

        </div>
      </div>
    </section>
  )
}

export default page