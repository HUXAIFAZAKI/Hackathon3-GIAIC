import React from 'react'
import Link from 'next/link';
import { integralCF } from '@/style/fonts';



function DressStyle() {
  return (
    <div className='w-[80%] mx-auto'>
      <section className='max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center'>
        <h2 className={`${integralCF.className} text-4xl mb-10`}>BROWSE BY DRESS STYLE</h2>
        <div className='flex flex-col justify-center sm:flex-row md:h-[250px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5'>
          <Link href={'/'} className={`w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover md:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] h-[150px] bg-[url('/Images/dress-style-1.png')] border border-[#f0f0f0] hover:border-gray-500`}>Casual</Link>
          <Link href={'/'} className={`w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover
           md:max-w-[650px] h-[150px] bg-[url('/Images/dress-style-2.png')] border border-[#f0f0f0] hover:border-gray-500`}>Formal</Link>
        </div>
        <div className='flex flex-col justify-center sm:flex-row md:h-[250px] space-y-5 sm:space-y-0 sm:space-x-5'>
            <Link href={'/'} className={`w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover
             md:max-w-[650px] h-[150px] bg-[url('/images/dress-style-3.png')] border border-[#f0f0f0] hover:border-gray-500`}>Party</Link>
            <Link href={'/'} className={`w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover md:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] h-[150px] bg-[url('/images/dress-style-4.png')] border border-[#f0f0f0] hover:border-gray-500`}>Wedding</Link>
        </div>
      </section>
    </div>
  )
}

export default DressStyle