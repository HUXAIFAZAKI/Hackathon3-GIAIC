import React from 'react'
import {NewProducts, TopProducts} from './Data/Products'
import Link from 'next/link'
import { integralCF } from '@/style/fonts'
import DressStyle from './DressStyle'
import Card from './Card'

const Shopping: React.FC = () => {
  return (
    <div className='bg-white'>
      {/* New Arrivals */}
      <div className='flex flex-col justify-center items-center w-screen py-12'>
        <h2 className={`${integralCF.className} text-3xl mb-6`} id="newArrival">New Arrivals</h2>
        <div className='flex flex-wrap justify-center  flex-shrink-0  gap-[8px]'>
          {NewProducts.slice(0,4).map((product) => (
            <Card id={product.id} name={product.name} image={product.image} price={product.price} discountprice={product.discountprice} discountPercentage={product.discountPercentage} rating={product.rating}/>
          ))}
        </div>
      
        <Link href='/products' className='bg-white border border-black/20 px-12 py-3 rounded-full my-4 hover:bg-black hover:text-white'>View All</Link>
        <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" />
      </div>
      {/* Top Selling */}
      <div className='flex flex-col justify-center items-center w-screen'>
        <h2 className={`${integralCF.className} text-3xl mb-6`}>Top Selling</h2>
        <div className='flex flex-wrap justify-center  flex-shrink-0  gap-[8px]'>
          {TopProducts.slice(0,4).map((product) => (
            <Card id={product.id} name={product.name} image={product.image} price={product.price} discountprice={product.discountprice} discountPercentage={product.discountPercentage} rating={product.rating}/>
          ))}
        </div> 
        <Link href='/products' className='bg-white border border-black/20 px-12 py-3 rounded-full my-4 hover:bg-black hover:text-white'>View All</Link>
        <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" /> 
      </div>
      <DressStyle/>
    </div>
    
  )
}

export default Shopping