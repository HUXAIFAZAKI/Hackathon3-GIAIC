"use client";

import React, { forwardRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import star from '@/public/Icons/small-star.svg';
import { Review } from '../Data/Reviews';

interface ReviewCarouselProps {
  reviews: Review[];
  goToNext: () => void;
  goToPrev: () => void;
}

const ReviewCarousel = forwardRef<Slider, ReviewCarouselProps>(
  ({ reviews, goToNext, goToPrev }, ref) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Slider ref={ref} {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="review-card flex flex-col justify-center gap-4 px-6 py-8 border border-gray rounded-xl h-[250px] max-w-[400px]">
                <div className="flex items-center gap-4">
                  <h3 className="text-[rgba(0,0,0,0.8)] font-bold text-xl">{review.name}</h3>
                </div>
                <span className="flex items-center">
                  {[...Array(review.stars)].map((_, i) => (
                    <Image key={i} src={star} alt="star" width={16} height={16} />
                  ))}
                </span>
                <p className="text-[rgba(0,0,0,0.8)] overflow-clip">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
);

export default ReviewCarousel;