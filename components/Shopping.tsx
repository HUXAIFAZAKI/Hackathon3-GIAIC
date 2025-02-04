// "use client";
// import React, {useState, useEffect} from 'react'
// import {NewProducts, TopProducts} from './Data/Products'
// import Link from 'next/link'
// import { integralCF } from '@/style/fonts'
// import DressStyle from './DressStyle'
// import Card from './Card'

// const Shopping: React.FC = () => {
//   const [products, setProducts] = useState<any[]>([]);
//     useEffect(() => {
//         const fetchProducts = async () => {
//           const res = await fetch('http://localhost:3000/api/products'); 
//           const data = await res.json();
//           setProducts(data);
//         };
//         fetchProducts();
//     }, []);
//   return (
//     <div className='bg-white'>
//       {/* New Arrivals */}
//       <div className='flex flex-col justify-center items-center w-screen py-12'>
//         <h2 className={`${integralCF.className} text-3xl mb-6`} id="newArrival">New Arrivals</h2>
//         <div className='flex flex-wrap justify-center  flex-shrink-0  gap-[8px]'>
//           {products.map((product) => {
//             if(product.isNew){
//               <Card id={product.id} name={product.name} image={product.image} price={product.price} discountprice={product.discountprice} discountPercentage={product.discountPercentage} rating={product.rating}/>
//             }
//             else{
//               product.slice(0,4).map((product) => {
//                 <Card id={product.id} name={product.name} image={product.image} price={product.price} discountprice={product.discountprice} discountPercentage={product.discountPercentage} rating={product.rating}/>
//             })
//             }
//           })}
//         </div>
      
//         <Link href='/products' className='bg-white border border-black/20 px-12 py-3 rounded-full my-4 hover:bg-black hover:text-white'>View All</Link>
//         <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" />
//       </div>
//       {/* Top Selling */}
//       <div className='flex flex-col justify-center items-center w-screen'>
//         <h2 className={`${integralCF.className} text-3xl mb-6`}>Top Selling</h2>
//         <div className='flex flex-wrap justify-center  flex-shrink-0  gap-[8px]'>
//           {TopProducts.slice(0,4).map((product) => (
//             <Card id={product.id} name={product.name} image={product.image} price={product.price} discountprice={product.discountprice} discountPercentage={product.discountPercentage} rating={product.rating}/>
//           ))}
//         </div> 
//         <Link href='/products' className='bg-white border border-black/20 px-12 py-3 rounded-full my-4 hover:bg-black hover:text-white'>View All</Link>
//         <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" /> 
//       </div>
//       <DressStyle/>
//     </div>
    
//   )
// }

// export default Shopping

"use client";
import React, { useState, useEffect } from "react";
import { NewProducts, TopProducts } from "./Data/Products";
import Link from "next/link";
import { integralCF } from "@/style/fonts";
import DressStyle from "./DressStyle";
import Card from "./Card";
import { product } from "@/typings";

const Shopping: React.FC = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      {/* New Arrivals */}
      <div className="flex flex-col justify-center items-center w-screen py-12">
        <h2 className={`${integralCF.className} text-3xl mb-6`} id="newArrival">
          New Arrivals
        </h2>
        <div className="flex flex-wrap justify-center flex-shrink-0 gap-[8px]">
          {products
            .filter((product) => product.isNew) // Filter for new products
            .slice(0, 4) // Limit to first 4 products
            .map((product) => (
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

        <Link
          href="/products"
          className="bg-white border border-black/20 px-12 py-3 rounded-full my-4 hover:bg-black hover:text-white"
        >
          View All
        </Link>
        <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" />
      </div>

      {/* Top Selling */}
      <div className="flex flex-col justify-center items-center w-screen">
        <h2 className={`${integralCF.className} text-3xl mb-6`}>Top Selling</h2>
        <div className="flex flex-wrap justify-center flex-shrink-0 gap-[8px]">
          {products.filter((product) => !product.isNew).slice(0, 4).map((product) => (
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
        <Link
          href="/products"
          className="bg-white border border-black/20 px-12 py-3 rounded-full my-4 hover:bg-black hover:text-white"
        >
          View All
        </Link>
        <hr className="mx-auto w-[90%] h-[4px] border-black/20 my-12" />
      </div>

      <DressStyle />
    </div>
  );
};

export default Shopping;
