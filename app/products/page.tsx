"use client"
import React from 'react'
import Image from 'next/image'
import pic1 from '@/public/Images/pic9.png'
import pic2 from '@/public/Images/pic10.png'
import pic3 from '@/public/Images/pic11.png'
import { NewProducts } from '@/components/Data/Products'
import star from '@/public/Icons/small-star.svg'
import reviews from '@/components/Data/Reviews'
import { integralCF } from '@/style/fonts'
import { useState } from 'react'


const page: React.FC = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <section className='bg-white'>
        <div className='w-[95vw] md:w-[80vw] mx-auto pt-4 flex flex-col lg:flex-row gap-8 bg-white'>
        <div className='flex flex-col-reverse lg:flex-row gap-4 justify-center items-center'>
        <div className='flex flex-row lg:flex-col gap-4 justify-center'>
          <Image src={pic1} alt="pic1" width={180} height={150} className='w-[124px] h-[124px] border border-black/80 rounded-xl px-4 bg-[#f0f0f0] cursor-pointer' ></Image>
          <Image src={pic2} alt="pic1" width={180} height={150} className='w-[124px] h-[124px] border border-black/20 rounded-xl px-4 bg-[#f0f0f0] cursor-pointer' ></Image>
          <Image src={pic3} alt="pic1" width={180} height={150} className='w-[124px] h-[124px] border border-black/20 rounded-xl px-4 bg-[#f0f0f0] cursor-pointer' ></Image>
         </div>
        <Image src={pic1} alt="pic1" width={425} className=' w-[475px] h-[400px] md:w-[425px] md:h-[500px] border border-black/20 rounded-xl' id="selectedIMG"></Image>
        </div>
        <div className='flex flex-col  gap-2 md:gap-4 w-[88%] md:w-full lg:w-[50%] mx-4'>
          <h2 className={`${integralCF.className} text-2xl md:text-3xl mb-6`}>One Life Graphic T shirt</h2>
          <span className='flex gap-4'>
            <p className='font-bold text-2xl md:text-xl'>$200</p>
            <p className='line-through text-black/20 font-bold text-2xl md:text-xl'>$300</p>
          </span>
          <p className='text-[rgba(0,0,0,0.6)]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          <hr className="mx-auto w-full h-[4px] border-black/20 select-none mt-4 md:mt-0" />
          <div className='py-2'>
            <h3 className='mb-2'>Select Colors</h3>
              <div className='flex flex-row gap-4'>
                <div className='bg-[#4F4631] w-12 h-12 rounded-full cursor-pointer select-none'></div>
                <div className='bg-[#314F4A] w-12 h-12 rounded-full cursor-pointer select-none'></div>
                <div className='bg-[#31344F] w-12 h-12 rounded-full cursor-pointer select-none'></div>
              </div>
            </div>
            <hr className="mx-auto w-full h-[4px] border-black/20 select-none mt-4 md:mt-0" />
            <div className='py-2'>
            <h3 className='mb-2'>Choose Size</h3>
              <div className='flex flex-row gap-4'>
                <button className='bg-[#f0f0f0] px-4 py-2 rounded-3xl hover:bg-black hover:text-white'>Small</button>
                <button className='bg-[#f0f0f0] px-4 py-2 rounded-3xl hover:bg-black hover:text-white ' >Medium</button>
                <button className='bg-black text-white px-4 py-2 rounded-3xl'>Large</button>
                <button className='bg-[#f0f0f0] px-4 py-2 rounded-3xl hover:bg-black hover:text-white'>X Large</button>
              </div>
            </div>
            <hr className="mx-auto w-full h-[4px] border-black/20 select-none mt-4 md:mt-0" />
            <div className='flex justify-around items-center select-none w-full'>
              <div className='flex flex-row gap-4 justify-center items-center w-[25%] md:w-[20%] bg-[#f0f0f0] rounded-3xl'>
                <button className='text-4xl ' onClick={() => (quantity > 1)? setQuantity(quantity - 1) : setQuantity(1)}>-</button>
                <p className='font-bold text-xl'>{quantity}</p>
                <button className='text-2xl' onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className='bg-black text-white px-4 py-3 rounded-3xl w-[40%]'>Add to Cart</button>
            </div>
        </div>
        
        
    </div>
    <div className='w-screen mx-auto mt-10 select-none'>
          <span className='w-[80%] mx-auto flex justify-around items-center gap-4'>
            <h3 className='border-b-2 text-[rgba(0,0,0,0.6)] border-black/20 hover:text-black hover:border-black cursor-pointer'>Product Details</h3>
            <h3 className='border-b-2 border-black cursor-pointer'>Rating & Reviews</h3>
            <h3 className='border-b-2 text-[rgba(0,0,0,0.6)] border-black/20 hover:text-black hover:border-black cursor-pointer'>FAQs</h3>
          </span>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center w-screen p-4 bg-white'>
          {reviews.map((review) => (
            <div className='flex flex-col justify-center gap-4 px-6 py-8 bg-white border border-gray rounded-xl h-[250px] max-w-[400px]'>
              <span className='flex items-center'>{[...Array(review.stars)].map((_, index) => <Image key={index} src={star} alt='star'/>)}</span>
              <h3 className='text-[rgba(0,0,0,0.8)] font-bold text-xl '>{review.name}</h3>
              <p className='text-[rgba(0,0,0,0.8)] overflow-clip'>{review.review}</p>
            </div>  
          ))}
      </div>
    </div>
    <div className='w-screen mx-auto flex flex-col justify-center items-center'>
      <h2 className={`${integralCF.className} text-4xl font-bold mt-10 mx-auto`}>YOU MIGHT ALSO LIKE</h2>
      <div className='flex flex-row justify-center items-start w-[75%] rounded-full p-6 gap-4'>
          {NewProducts.map((product) => (
            <div className='flex flex-col justify-center items-start'>
            <Image src={product.image} alt="product"  className=' bg-[#f0f0f0] cursor-pointer hover:shadow-2xl rounded-xl'/>
            <h2 className='font-bold text-lg pt-2'>{product.name}</h2>
            <span className='flex items-center'>{[...Array(product.rating)].map((_, index) => <Image key={index} src={star} alt='star'/>)}</span>

            <span className='flex justify-start gap-5 w-full'>
              <p className='font-bold text-xl pt-2 '>${product.discountprice}</p>
              <p className='font-bold text-xl pt-2 line-through text-[rgba(0,0,0,0.4)]'>${product.price}</p>
            </span>
            </div>
          ))}
        </div>
    </div>
    </section>
    
    
  )
}

export default page