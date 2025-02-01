import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import star from '@/public/Icons/small-star.svg';

interface CardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  discountprice: number;
  discountPercentage: number;
  rating: number;
}

const Card = ({
  id,
  name,
  image,
  price,
  discountprice,
  discountPercentage,
  rating,
}: CardProps) => {
  const finalPrice = discountprice > 0 ? discountprice : price;

  return (
    <Link
      href={`/products/${id}`}
      className="p-4 grid w-[290px]  justify-between overflow-hidden border border-transparent hover:border-gray-300 duration-200 rounded-lg shadow-sm hover:shadow-lg"
      aria-label={`View product ${name}`}
    >
      <div className="flex flex-col justify-between items-start h-full w-full">
        <div className="relative w-full aspect-[1/1]">
          <Image
            src={image}
            alt={name}
            width={290}
            height={298}
            className="h-[240px] mb-[5px] w-[290px] md:h-[298px] sm-[240px] object-cover rounded-[20px] object-center transition-transform duration-300 hover:scale-105 user-drag-none"
            priority
          />
          {discountprice > 0 && (
            <span className="absolute top-2 left-2 bg-[#FF3333]/75 text-white text-xs font-bold py-1 px-3 rounded-full">
              {discountPercentage ? `${discountPercentage.toFixed(0)}% OFF` : 'Sale'}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{name}</h3>

          <div className="flex items-center mb-2">
            {[...Array(Math.min(rating, 5))].map((_, index) => (
              <Image key={index} src={star} alt="star" className="w-4 h-4 mr-1" />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-gray-900">
              ${finalPrice}
            </span>
            {discountprice > 0 && (
              <span className="text-base font-medium text-gray-500 line-through">
                ${price}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
