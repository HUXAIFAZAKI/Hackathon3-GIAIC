"use client"
import React from 'react'
import Image from 'next/image'
import pic1 from '@/public/Images/pic9.png'
import pic2 from '@/public/Images/pic10.png'
import pic3 from '@/public/Images/pic11.png'
import shirt1 from '@/public/Images/pic1.png'
import shirt2 from '@/public/Images/pic2.png'
import shirt3 from '@/public/Images/pic3.png'
import shirt4 from '@/public/Images/pic4.png'
import star from '@/public/Icons/small-star.svg'
import { integralCF } from '@/style/fonts'
import { useState } from 'react'


const reviews = [
  {
    name:"Sarah M",
    review:`""I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"`,
    stars:5
  },
  {
    name:"Alex K.",
    review:`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    stars:4
  },
  {
    name:"James L.",
    review:`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    stars:5,
  },
]

type Products = {
  name: string
  image: string | any
  price: number
  discountprice: number
  rating: number
}

const NewProducts: Products[] = [
  {
    name: "T-SHIRT WITH TAPE DETAILS",
    image: shirt1,
    price: 200,
    discountprice: 100,
    rating: 4,
  },
  {
    name: "SKINNY FIT JEANS",
    image: shirt2,
    price: 200,
    discountprice: 100,
    rating: 3,
  },
  {
    name: "CHECKERED SHIRT",
    image: shirt3,
    price: 200,
    discountprice: 100,
    rating: 5,
  },
  {
    name: "SLEEVE STRIPED T-SHIRT",
    image: shirt4,
    price: 200,
    discountprice: 100,
    rating: 4,
  },
]

const page: React.FC = () => {
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