"use client"
import React, {useState} from 'react'
import { integralCF } from '@/style/fonts'
import tag from '@/public/Icons/tag.svg'
import Image from 'next/image'
import { useCart } from "@/components/CartContext";

const page: React.FC = function(){
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id: string, action: "increment" | "decrement") => {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) return;

    const updatedQuantity = action === "increment" ? cartItem.quantity + 1 : cartItem.quantity - 1;
    if (updatedQuantity < 1) return;

    updateQuantity(id, updatedQuantity);
  };
  return (
    <section className="bg-white">
      <div className="pt-4 mx-auto w-[80vw]">
        <h1 className={`${integralCF.className} text-4xl`}>YOUR CART</h1>
        <div className="flex flex-col lg:flex-row lg:gap-4 justify-around items-center">
          <div className="flex flex-col justify-around items-center lg:w-[60%] min-h-20 gap-4 border border-gray rounded-3xl mt-10">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div className="flex justify-center items-center w-full" key={item.id}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={150}
                    className="rounded-3xl px-4"
                  />
                  <div className="flex flex-col py-4 border-b border-gray p-8 w-full">
                    <h3 className="text-[rgba(0,0,0,0.8)] font-bold text-xl">
                      {item.name}
                    </h3>
                    <div className="flex flex-col justify-between">
                      <p className="text-[rgba(0,0,0,0.8)]">Size: {item.size}</p>
                      <p className="text-[rgba(0,0,0,0.8)]">Color: {item.color}</p>
                      <span className="flex flex-row justify-between items-center">
                        <p className="text-[rgba(0,0,0,0.8)] font-bold text-xl">
                          ${item.price}
                        </p>
                        <div className="flex flex-row gap-4 justify-center items-center w-[55%] md:w-[30%] lg:w-[20%] bg-[#f0f0f0] rounded-3xl">
                          <button
                            className="text-2xl md:text-4xl md:bottom-3"
                            onClick={() => handleQuantityChange(item.id, "decrement")}
                          >
                            -
                          </button>
                          <p className="font-bold text-lg md:text-xl">{item.quantity}</p>
                          <button
                            className="text-xl md:text-2xl"
                            onClick={() => handleQuantityChange(item.id, "increment")}
                          >
                            +
                          </button>
                        </div>
                      </span>
                      <button
                        className="text-red-500 mt-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove from cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex flex-col gap-4 border border-gray rounded-3xl mt-10 p-8 lg:h-full md:w-[60%] lg:w-[40%]">
            <div className="lg:text-xl flex flex-col gap-4">
              <h3 className="text-black font-bold text-xl lg:text-2xl text-left">
                Order Summary
              </h3>
              <div className="flex flex-col gap-2 lg:gap-4">
                <span className="flex flex-row justify-between">
                  <p className="text-[rgba(0,0,0,0.8)] text-left">Subtotal</p>
                  <p className="font-bold">
                    ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                  </p>
                </span>
                <span className="flex flex-row justify-between">
                  <p className="text-[rgba(0,0,0,0.8)] text-left ">Discount (20%) </p>
                  <p className="text-red-600 font-bold">-20%</p>
                </span>
                <span className="flex flex-row justify-between">
                  <p className="text-[rgba(0,0,0,0.8)] text-left">Delivery Fees</p>
                  <p className="font-bold">$15</p>
                </span>
              </div>
              <hr className="mx-auto w-full h-[4px] border-black/20 my-2" />
              <span className="flex flex-row justify-between">
                <p className="text-[rgba(0,0,0,0.8)] text-left">Total</p>
                <p className="font-bold text-xl">
                  ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 15}
                </p>
              </span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="flex flex-row w-[70%] p-2 border border-gray rounded-3xl gap-2 items-center justify-start">
                <Image
                  src={tag}
                  alt="tag"
                  width={20}
                  height={20}
                  className="ml-2 mr-2"
                ></Image>
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="focus:outline-none active:outline-none"
                />
              </span>
              <button className="text-center bg-black text-white py-3 px-4 rounded-full w-[30%]">
                Apply
              </button>
            </div>
            <button className="text-center bg-black text-white py-3 px-4 rounded-full ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page