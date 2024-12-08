"use client"
import React from 'react'
import Image from 'next/image'
import HeroImage from "../public/Images/hero.png";
import Brands from './Brands';
import { integralCF } from '@/style/fonts'

const HeroSection: React.FC = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-around w-screen md:h-screen'>
        <div className='flex flex-col gap-4 lg:gap-10 m-4 md:w-[25%] lg:w-[35%]'>
          <h1 className={`${integralCF.className} font-bold text-4xl lg:text-6xl`}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className=''>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className='bg-black text-white py-4 px-4 rounded-full w-full lg:w-[50%]'>Shop Now</  button>
          <div className='flex md:hidden mx-8'>
            <div>
              <h3 className='font-bold text-2xl'>500</h3>
              <p className='text-[rgba(0,0,0,0.6)] text-sm'>International Brands</p>
            </div>
            <div>
              <h3 className='font-bold text-2xl'>2,000+</h3>
              <p className='text-[rgba(0,0,0,0.6)] text-sm'>High-Quality Products</p>
            </div>
            <br />
            <div>
              <h3 className='font-bold text-2xl'>30,000+</h3>
              <p className='text-[rgba(0,0,0,0.6)] text-sm'>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className='h-full'>
          <Image loading='lazy' src={HeroImage} alt="hero image" width={500} height={500} quality={100} className='min-w-max h-full'/>
        </div>
        
      </div>
      <Brands />
    
    </>
  )
}

export default HeroSection;