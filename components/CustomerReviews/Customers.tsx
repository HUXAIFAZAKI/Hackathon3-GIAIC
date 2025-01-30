"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { integralCF } from '@/style/fonts';
import rArrow from '@/public/Icons/arrowRight.svg';
import lArrow from '@/public/Icons/arrowLeft.svg';
import reviews from '../Data/Reviews';
import ReviewCarousel from './ReviewCarousel'; 

const Customers: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="h-full">
      <div className="flex flex-row justify-around items-end md:items-center w-screen px-6 py-12 bg-white">
        <h2 className={`${integralCF.className} text-bold text-4xl text-center md:text-left`}>OUR HAPPY CUSTOMERS</h2>
        <span className="hidden md:flex justify-center items-center gap-4">
          <button onClick={goToPrev} className="cursor-pointer">
            <Image src={lArrow} alt="Previous" width={24} height={24} />
          </button>
          <button onClick={goToNext} className="cursor-pointer">
            <Image src={rArrow} alt="Next" width={24} height={24} />
          </button>
        </span>
      </div>
      <div className="w-screen p-4 bg-white">
        <ReviewCarousel reviews={reviews} goToNext={goToNext} goToPrev={goToPrev} ref={sliderRef} />
      </div>
      {/* <div className="flex justify-center mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
          Write a Review
        </button>
      </div> */}
    </section>
  );
};

export default Customers;