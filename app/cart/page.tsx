"use client";
import React, { useState } from "react";
import { integralCF } from "@/style/fonts";
import Image from "next/image";
import { useCart } from "@/components/CartContext";
import tag from "@/public/Icons/tag.svg";

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id: string, action: "increment" | "decrement") => {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) return;

    const updatedQuantity = action === "increment" ? cartItem.quantity + 1 : cartItem.quantity - 1;
    if (updatedQuantity < 1) return;

    updateQuantity(id, updatedQuantity);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const total = subtotal - discount + 15;

  return (
    <section className="bg-white">
      <div className="pt-6 mx-auto w-[85vw] max-w-6xl ">
        <h1 className={`${integralCF.className} text-4xl font-bold mb-6`}>YOUR CART</h1>
        {cart.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 border border-gray-300 rounded-3xl p-6">
              {cart.map((item) => (
                <div key={item.id} className="relative flex items-center gap-6 border-b pb-6 mb-6">
                    <button 
                      className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>

                    <Image src={item.img} alt={item.name} width={130} className="rounded-xl" />

                    <div className="flex flex-col w-full">
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="text-[rgba(0,0,0,0.8)] select-none">
                        Size: {item.selectedSize}
                        <p className="flex items-center">
                          Color : &nbsp;
                          <span 
                            className="w-5 h-5 rounded-full border border-gray-300 inline-block" 
                            style={{ backgroundColor: item.selectedColor }} 
                          />
                        </p>
                      </p>

                      <div className="flex justify-between items-center mt-4">
                        <p className="text-xl font-bold text-gray-900">${item.price}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center bg-gray-100 rounded-full px-4 py-1">
                          <button
                            className="text-2xl font-bold text-gray-700 hover:text-black"
                            onClick={() => handleQuantityChange(item.id, "decrement")}
                          >
                            -
                          </button>
                          <p className="mx-4 font-bold text-lg">{item.quantity}</p>
                          <button
                            className="text-xl font-bold text-gray-700 hover:text-black"
                            onClick={() => handleQuantityChange(item.id, "increment")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

              ))}
            </div>

            {/* Order Summary */}
            <div className="border border-gray-300 rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-3 text-gray-800">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="font-bold">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Discount (20%)</p>
                  <p className="text-red-600 font-bold">-${discount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery Fees</p>
                  <p className="font-bold">$15.00</p>
                </div>
              </div>

              <hr className="my-4 border-gray-300" />

              <div className="flex justify-between text-xl font-bold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>

              {/* Promo Code */}
              <div className="flex items-center border border-gray-300 rounded-full mt-4 p-2">
                <Image src={tag} alt="tag" width={20} height={20} className="ml-2" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="flex-1 px-2 bg-transparent outline-none"
                />
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-900">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white py-3 rounded-full mt-6 text-lg font-semibold hover:bg-gray-900">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
