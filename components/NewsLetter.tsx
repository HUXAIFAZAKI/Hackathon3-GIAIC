"use client"
import { integralCF } from "@/style/fonts";
import email from '@/public/Icons/envelope.svg'
import Image from 'next/image'

export default function NewsLetter(){
    return(
      <div className="w-[80%] rounded-[20px] bg-[#000000] mx-auto relative top-32 md:top-20 mb-32 md:mb-16 flex justify-center items-center flex-wrap">
          <div className="flex md:flex-row flex-col py-4 justify-around items-center">
            <h3 className={`${integralCF.className} px-4 text-center lg:text-left text-2xl lg:text-[32px] text-[#FFFFFF] w-[90%] lg:w-[50%] `}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
            <div className="flex flex-col gap-2 m-6 w-[90%] md:w-[40%]">
              <div className="rounded-full py-3 px-4 bg-white flex items-center gap-2 text-[#00000066]">
                <Image src={email} alt="email"></Image>
                <input type="email" placeholder="Email Address" className="focus:outline-none w-full"></input>
              </div>
              <button className="text-center bg-white text-black py-3 px-4 rounded-full">Subscribe to Newsletter</button>
            </div>
          </div>
      </div>
        
    )
}