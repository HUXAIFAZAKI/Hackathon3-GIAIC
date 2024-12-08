import React from 'react'
import Image from 'next/image'
import rArrow from '../public/Icons/arrowRight.svg'
import lArrow from '../public/Icons/arrowLeft.svg'
import star from '../public/Icons/small-star.svg'
import { integralCF } from '@/style/fonts'

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

const Customers : React.FC = () => {
  return (
    <section className='h-full'>
      <div className='flex flex-row justify-around items-end md:items-center w-screen px-6 py-12 bg-white'>
        <h2 className={`${integralCF.className} text-bold text-4xl`}>OUR HAPPY CUSTOMERS</h2>
        <span className='flex justify-center items-center gap-4 '>
          <Image className='cursor-pointer w-6 h-6' src={lArrow} alt='arrow'></Image>
          <Image className='cursor-pointer w-6 h-6' src={rArrow} alt='arrow'></Image>
        </span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center w-screen p-4 bg-white'>
          {reviews.map((review) => (
            <div className='flex flex-col justify-center gap-4 px-6 py-8 bg-white border border-gray rounded-xl h-[250px] max-w-[400px]'>
              <span className='flex items-center'>{[...Array(review.stars)].map((_, index) => <Image key={index} src={star} alt='star'/>)}</span>
              <h3 className='text-[rgba(0,0,0,0.8)] font-bold text-xl '>{review.name}</h3>
              <p className='text-[rgba(0,0,0,0.8)] overflow-clip'>{review.review}</p>
            </div>  
          ))}
      </div>
    </section>
    
  )
}

export default Customers