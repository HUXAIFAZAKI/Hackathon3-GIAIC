"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import tick from '@/public/Icons/tick.svg';
import star from '@/public/Icons/small-star.svg';
import reviews from '@/components/Data/Reviews';
import Card from '@/components/Card';
import { integralCF } from '@/style/fonts';
import { allProducts } from '@/components/Data/Products';
import { useCart } from '@/components/CartContext';

interface PageProps {
  params: {
    slug: string;
  };
}

const page: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const colors = [
    { id: 'color1', bgColor: '#4F4631' },
    { id: 'color2', bgColor: '#314F4A' },
    { id: 'color3', bgColor: '#31344F' },
  ];
  const sizes = ['Small', 'Medium', 'Large', 'X Large'];

  const product = allProducts.find((product) => product.id.toString() === slug);
  if (!product) {
    return <h1 className="text-center text-red-500 text-2xl">Product Not Found</h1>;
  }

  const excludedProductIds = [product.id.toString()];
  const [mightLike, setMightLike] = useState<any[]>([]);

  useEffect(() => {
    const filteredProducts = allProducts.filter(
      (product) => !excludedProductIds.includes(product.id.toString())
    );
    const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5).slice(0, 4);
    setMightLike(shuffledProducts);
    setSelectedImage(product.image);
    setIsLoading(false);
  }, []);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select color and size!');
      return;
    }
    const cartItem = {
      id: product.id.toString(),
      name: product.name,
      selectedSize,
      selectedColor,
      price: product.discountprice ? product.discountprice : product.price,
      quantity,
      img: selectedImage,
    };
    addToCart(cartItem);
  };

  return (
    <section className="bg-white">
      <div className="w-[95vw] md:w-[80vw] mx-auto pt-4 flex flex-col lg:flex-row gap-8 bg-white">
        <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center items-center">
          <div className="flex flex-row lg:flex-col gap-4 justify-center">
            {product.otherImages && product.otherImages.map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={`pic${index + 2}`}
                width={180}
                height={150}
                className={`w-[124px] h-[124px] border ${selectedImage === image ? 'border-black/80' : 'border-black/20'} rounded-xl px-4 bg-[#f0f0f0] cursor-pointer`}
                onClick={() => setSelectedImage(image)} 
              />
            ))}
          </div>
          <Image
            src={selectedImage}
            alt="selected image"
            width={425}
            className="w-[475px] h-[400px] md:w-[425px] md:h-[500px] border border-black/20 rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 w-[88%] md:w-full lg:w-[50%] mx-4">
          <h2 className={`${integralCF.className} text-2xl md:text-3xl mb-6`}>
            {product.name}
          </h2>
          <span className="flex gap-4">
            <p className="font-bold text-2xl md:text-xl">
              ${product.discountprice ? product.discountprice : product.price}
            </p>
            <p className="line-through text-black/20 font-bold text-2xl md:text-xl">
              ${product.price}
            </p>
          </span>
          <p className="text-[rgba(0,0,0,0.6)]">{product.description}</p>
          <hr className="mx-auto w-full h-[4px] border-black/20 select-none mt-4 md:mt-0" />
          <div className="py-2">
            <h3 className="mb-2">Select Colors</h3>
            <div className="flex flex-row gap-4">
              {colors.map((color) => (
                <div
                  key={color.id}
                  className={`w-12 h-12 rounded-full cursor-pointer select-none flex justify-center items-center ${
                    selectedColor === color.bgColor ? 'border-4 border-gray-600' : ''
                  }`}
                  style={{ backgroundColor: color.bgColor }}
                  onClick={() => handleColorClick(color.bgColor)}
                >
                  {selectedColor === color.bgColor && (
                    <Image src={tick} alt="tick" className="w-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <hr className="mx-auto w-full h-[4px] border-black/20 select-none mt-4 md:mt-0" />
          <div className="py-2">
            <h3 className="mb-2">Choose Size</h3>
            <div className="flex flex-row gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-3xl ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-[#f0f0f0] hover:bg-black hover:text-white'
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <hr className="mx-auto w-full h-[4px] border-black/20 select-none mt-4 md:mt-0" />
          <div className="flex justify-around items-center select-none w-full">
            <div className="flex flex-row gap-4 justify-center items-center w-[25%] md:w-[20%] bg-[#f0f0f0] rounded-3xl">
              <button
                className="text-4xl"
                onClick={() =>
                  quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
                }
              >
                -
              </button>
              <p className="font-bold text-xl">{quantity}</p>
              <button
                className="text-2xl"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-4 py-3 rounded-3xl w-[40%]"
              disabled={!selectedColor || !selectedSize}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen mx-auto mt-10 select-none">
        <span className="w-[80%] mx-auto flex justify-around items-center gap-4">
          <h3 className="border-b-2 text-[rgba(0,0,0,0.6)] border-black/20 hover:text-black hover:border-black cursor-pointer">
            Product Details
          </h3>
          <h3 className="border-b-2 border-black cursor-pointer">Rating & Reviews</h3>
          <h3 className="border-b-2 text-[rgba(0,0,0,0.6)] border-black/20 hover:text-black hover:border-black cursor-pointer">
            FAQs
          </h3>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center w-screen p-4 bg-white">
          {reviews.map((review) => (
            <div className="flex flex-col justify-center gap-4 px-6 py-8 bg-white border border-gray rounded-xl h-[250px] max-w-[400px]">
              <span className="flex items-center">
                {[...Array(review.stars)].map((_, index) => (
                  <Image key={index} src={star} alt="star" />
                ))}
              </span>
              <h3 className="text-[rgba(0,0,0,0.8)] font-bold text-xl">{review.name}</h3>
              <p className="text-[rgba(0,0,0,0.8)] overflow-clip">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen mx-auto flex flex-col justify-center items-center">
        <h2
          className={`${integralCF.className} text-3xl font-bold mt-10 mb-5 mx-auto`}
        >
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="flex flex-wrap justify-center flex-shrink-0 gap-[8px]">
          {mightLike.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              discountprice={product.discountprice}
              discountPercentage={product.discountPercentage ?? 0}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
