"use client";
import React, { useState, useEffect } from 'react';
import { product } from '@/typings'; 
import Card from '@/components/Card';

interface MightLikeProps {
  excludedProductIds: string[];
}

const MightLike: React.FC<MightLikeProps> = ({ excludedProductIds }) => {
  const [mightLike, setMightLike] = useState<product[]>([]);

  useEffect(() => {
    const fetchMightLike = async () => {
      const res = await fetch('http://localhost:3000/api/products');
      const data = await res.json();
      console.log('fetch', data);
      const filteredProducts = data.filter(
        (product: product) => !excludedProductIds.includes(product._id.toString())
      );
      const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5).slice(0, 4);
      setMightLike(shuffledProducts);
    };

    fetchMightLike();
  }, [excludedProductIds]);

  return (
    <div className="w-screen mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center gap-[8px]">
        {mightLike.map((product) => (
          <Card
            key={product._id}
            id={product._id}
            name={product.name}
            image={product.imageUrl}
            price={product.price}
            discountprice={product.discountPrice}
            discountPercentage={product.discountPercent}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default MightLike;
