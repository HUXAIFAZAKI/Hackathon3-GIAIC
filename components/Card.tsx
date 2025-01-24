import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import star from '../public/Icons/small-star.svg'

const Card = ({name, image, price, discountprice, rating}) => {
  return (
    <Link href={`/products/${name}`} className='p-3 grid w-[290px] justify-between  overflow-hidden border border-white hover:border-gray-500/25 duration-200 rounded-md'>
    <div className='flex flex-col justify-between items-start h-full w-full'>
    <Image
          src={image}
          alt="Product 1"
          width={290}
          height={298}
          className="h-[240px] mb-[5px] w-[290px] md:h-[298px] object-cover rounded-[20px] object-center"
      />
      <div className='flex flex-col'>
      <h2 className='font-bold text-lg pt-2'>{name}</h2>
      <span className='flex items-center'>{[...Array(rating)].map((_, index) => <Image key={index} src={star} alt='star'/>)}</span>

      <div className="price flex gap-[10px]">
          <h3 className="text-[24px] font-bold">${discountprice? discountprice : price}</h3>
          {discountprice > 0 && (
            <div className="discount">
              <div className="DiscountPrice flex gap-[10px]">
                <h3 className="text-[24px] font-bold text-[#000000]/40 line-through">
                  ${price}
                </h3>
                <div className="discountTag bg-[#FF3333]/10 py-[6px] px-[14px] text-[#FF3333] rounded-[62px]">
                  {discountprice}%
                </div>
              </div>
        </div>
          )}
        </div>
      </div>  
    </div>
    </Link>
  )
}

export default Card