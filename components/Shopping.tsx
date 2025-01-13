import React from 'react'
import style1 from '../public/Images/dress-style-1.png'
import style2 from '../public/Images/dress-style-2.png'
import style3 from '../public/Images/dress-style-3.png'
import style4 from '../public/Images/dress-style-4.png'
import star from '../public/Icons/small-star.svg'
import {NewProducts, TopProducts} from './Data/Products'
import Image from 'next/image'
import Link from 'next/link'
import { integralCF } from '@/style/fonts'
import DressStyle from './DressStyle'

const Shopping: React.FC = () => {
  return (
    <div className='bg-white'>
      {/* New Arrivals */}
      <div className='flex flex-col justify-center items-center w-screen py-12'>
        <h2 className={`${integralCF.className} text-3xl mb-6`} id="newArrival">New Arrivals</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center w-[75%] rounded-full p-6 gap-4'>
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
      
        <Link href='/categories' className='bg-white border border-black/20 px-12 py-3 rounded-full my-4 hover:bg-black hover:text-white'>View All</Link>
       
        <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" />
      </div>
      {/* Top Selling */}
      <div className='flex flex-col justify-center items-center w-screen'>
        <h2 className={`${integralCF.className} text-3xl mb-6`}>Top Selling</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center w-[75%] rounded-full p-6 gap-4'>
          {TopProducts.map((product) => (
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
        <Link href='/categories' className='bg-white border border-black/20 px-12 py-3 rounded-full my-4 hover:bg-black hover:text-white'>View All</Link>
        <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" /> 
      </div>
      <DressStyle></DressStyle>
    </div>
    
  )
}

export default Shopping