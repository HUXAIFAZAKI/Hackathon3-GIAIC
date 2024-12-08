import React from 'react'
import style1 from '../public/Images/dress-style-1.png'
import style2 from '../public/Images/dress-style-2.png'
import style3 from '../public/Images/dress-style-3.png'
import style4 from '../public/Images/dress-style-4.png'
import shirt1 from '@/public/Images/pic1.png'
import shirt2 from '@/public/Images/pic2.png'
import shirt3 from '@/public/Images/pic3.png'
import shirt4 from '@/public/Images/pic4.png'
import shirt5 from '@/public/Images/pic5.png'
import shirt6 from '@/public/Images/pic6.png'
import shirt7 from '@/public/Images/pic7.png'
import shirt8 from '@/public/Images/pic8.png'
import star from '../public/Icons/small-star.svg'
import Image from 'next/image'
import { integralCF } from '@/style/fonts'

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

const TopProducts:Products[] = [
  {
    name: "VERTICAL STRIPED SHIRT",
    image: shirt5,
    price: 200,
    discountprice: 100,
    rating: 4,
  },
  {
    name: "COURAGE GRAPHIC T-SHIRT",
    image: shirt6,
    price: 200,
    discountprice: 100,
    rating: 3,
  },
  {
    name: "LOOSE FIT BERMUDA SHORTS",
    image: shirt7,
    price: 200,
    discountprice: 100,
    rating: 5,
  },
  {
    name: "FADED SKINNY JEANS",
    image: shirt8,
    price: 200,
    discountprice: 100,
    rating:4
  },

]

const Shopping: React.FC = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col justify-center items-center w-screen py-12'>
        <h2 className={`${integralCF.className} text-3xl mb-6`}>New Arrivals</h2>
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
        <button className='bg-white border border-black/20 px-12 py-3 rounded-full'>View All</button>
        <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" />
      </div>
      <div className='flex flex-col justify-center items-center w-screen'>
        <h2 className={`${integralCF.className} text-3xl mb-6`}>Top Selling</h2>
        <div className='flex flex-row justify-center items-start w-[75%] rounded-full p-6 gap-4'>
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
        <button className='bg-white border border-black/20 px-12 py-3 rounded-full'>View All</button>
        <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" /> 
      </div>
      <div className='flex justify-center items-center w-screen'>
        <div className='flex flex-col justify-center items-center bg-[#f0f0f0] w-[75%] rounded-3xl p-6'>
          <h2 className={`${integralCF.className} text-3xl`}>BROWSE BY DRESS STYLE</h2>
          <div className='flex justify-center items-center gap-4 flex-wrap'>
            <div className='w-[300px] '>
              <p className='relative top-10 left-5 font-bold text-2xl pt-4'>Casual</p>
              <Image src={style1} alt="style1" className='cursor-pointer hover:shadow-2xl rounded-xl'/>
            </div>  
            <div className='w-[300px] md:w-[500px] '>
              <p className='relative top-10 left-5 font-bold text-2xl pt-4'>Formal</p>
              <Image src={style2} alt="style2" width={500} className='cursor-pointer hover:shadow-2xl rounded-xl'/>
            </div>
            <div className='w-[300px] md:w-[500px] '>
              <p className='relative top-10 left-5 font-bold text-2xl pt-4'>Party</p>
              <Image src={style3} alt="style3" width={500} className='cursor-pointer hover:shadow-2xl rounded-xl'/>
            </div>
            <div className='w-[280px] '>
              <p className='relative top-10 left-5 font-bold text-2xl pt-4'>Wedding</p>
              <Image src={style4} alt="style4" width={300}className='cursor-pointer hover:shadow-2xl rounded-xl'/>
            </div>
              
          </div>  
          
        </div>
        
      </div>
    </div>
    
  )
}

export default Shopping