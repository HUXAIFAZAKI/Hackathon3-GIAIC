"use client"
import React, {useState} from 'react'
import Link from 'next/link';
import { integralCF } from '@/style/fonts';
import { useCart } from '../CartContext';
import { CloseIcon, CartIcon, SearchIcon, ProfileIcon, SearchIcon2 } from './Icons';
import styles from './Header.module.css'

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header className='w-screen bg-white'>  
      <div className='first-order flex justify-center items-center text-center bg-black text-white p-2 w-full duration-300'>
      <p>Sign up and get 20% off to your first order. <Link href="/" className='block md:inline underline font-[500]'>Sign Up Now</Link></p>
      <span className='cursor-pointer' onClick={() => {
         document.querySelector('.first-order')?.remove() 
      }}>
        <CloseIcon  /> 
      </span>
    </div>
    <div className='flex justify-evenly items-center p-4'>
      
    <span aria-label="Toggle mobile menu" className='block md:hidden cursor-pointer ' onClick={toggleMobileMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z" fill="black"/>
        </svg>
    </span>
      <h1 className={`${integralCF.className} font-bold text-4xl h-[50px]`}>
        <Link href={'/'}>SHOP.CO</Link>
      </h1>
      <ul className={`hidden md:flex style-none gap-4 select-none`}>
        <Link href='/products' className='cursor-pointer hover:border-b border-black transition-all duration-100'>Shop</Link>
        <Link href='/products' className='cursor-pointer hover:border-b border-black transition-all duration-100'>On Sale</Link>
        <li className='cursor-pointer hover:border-b border-black transition-all duration-100'><a href="#newArrival">New Arrivals</a></li>
        <li className='cursor-pointer hover:border-b border-black transition-all duration-100'><a href="#brands">Brands</a></li>
      </ul>
      <div 
      className='hidden md:flex justify-start items-center h-[40px] min-w-[200px] w-[30%] border-l-4 border-r-4 rounded-full bg-[#f0f0f0]'> 
        <span className='select-none p-4 cursor-pointer rounded-full'>
          <SearchIcon/>
        </span>
        <input type="search" placeholder='Search for products...' 
        id="search"
        className='bg-[#f0f0f0] p-2 min-w-[80%] w-full flex-grow-1 text-left rounded-full focus:outline-none outline-none'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
      </div>
      
      <div className='flex justify-center items-center gap-4'>
        <SearchIcon2 />
        <div className='relative'> 
        <Link href="/cart">
        <CartIcon />
        </Link>
        {cartCount > 0 && (
          <span className="select-none z-0 absolute bottom-3 left-3 w-5 h-5 bg-black text-white text-xs rounded-full flex justify-center items-center">
            {cartCount}
          </span>
        )}
        </div>      
        <ProfileIcon/>
      </div>
    </div>
    <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
    </header>
    <div className={`sidebar ${isMobileMenuOpen ? 'translate-x-0' : styles.hide} z-[999] w-full h-screen fixed top-0 bg-white text-black duration-200 ease-in-out`}>
        <div className='flex items-center fixed top-10 w-full'>
          <h1 className={`${integralCF.className} font-bold text-4xl h-[50px] w-full flex justify-center`}>
            <Link href={'/'}>SHOP.CO</Link>
          </h1>
          <svg width="18" height="18" viewBox="0 0 14 14" fill="black" xmlns="http://www.w3.o2000/svg" className='cursor-pointer fixed right-10 text-black' onClick={toggleMobileMenu}>
            <path d="M13.2882 11.9617C13.4644 12.1378 13.5633 12.3767 13.5633 12.6258C13.5633 12.8749 13.4644 13.1137 13.2882 13.2898C13.1121 13.466 12.8733 13.5649 12.6242 13.5649C12.3751 13.5649 12.1362 13.466 11.9601 13.2898L6.99997 8.32813L2.03825 13.2883C1.86213 13.4644 1.62326 13.5633 1.37418 13.5633C1.12511 13.5633 0.886243 13.4644 0.710122 13.2883C0.534002 13.1122 0.435059 12.8733 0.435059 12.6242C0.435059 12.3751 0.534002 12.1363 0.710122 11.9602L5.67184 7L0.711685 2.03828C0.535564 1.86216 0.436621 1.62329 0.436621 1.37422C0.436621 1.12515 0.535564 0.886277 0.711685 0.710157C0.887805 0.534036 1.12668 0.435093 1.37575 0.435093C1.62482 0.435093 1.86369 0.534036 2.03981 0.710157L6.99997 5.67188L11.9617 0.709375C12.1378 0.533255 12.3767 0.434312 12.6257 0.434312C12.8748 0.434312 13.1137 0.533255 13.2898 0.709375C13.4659 0.885496 13.5649 1.12437 13.5649 1.37344C13.5649 1.62251 13.4659 1.86138 13.2898 2.0375L8.32809 7L13.2882 11.9617Z" fill="black"/>
          </svg>
        </div>
        
    <ul className='flex flex-col justify-center items-center style-none gap-4 select-none h-full'>
        <Link href='/products' className='text-2xl cursor-pointer hover:border-b border-black transition-all duration-100' onClick={toggleMobileMenu}>Shop</Link>
        <li className='text-2xl cursor-pointer hover:border-b border-black transition-all duration-100' onClick={toggleMobileMenu}>On Sale</li>
        <li  className='text-2xl cursor-pointer hover:border-b border-black transition-all duration-100' onClick={toggleMobileMenu}><a href="#newArrival">New Arrivals</a></li>
        <li className='text-2xl cursor-pointer hover:border-b border-black transition-all duration-100' onClick={toggleMobileMenu}><a href="#brands">Brands</a></li>
      </ul>
      
    </div>
    </>
    
  )
}

export default Header