import React from 'react'
import Image from 'next/image'
import versace from "../public/Icons/versace.svg"
import zara from "../public/Icons/zara.svg"
import gucci from "../public/Icons/gucci.svg"
import prada from "../public/Icons/prada.svg"
import calvinKlein from "../public/Icons/calvinKlein.svg"


const Brands: React.FC = () => {
  return (
    <div className='bg-black flex flex-wrap gap-4 items-center justify-evenly p-4 md:p-8' id='brands'>
      <Image src={versace} alt="versace" height={125} width={125}></Image>
      <Image src={zara} alt="zara" height={80} width={80}></Image>
      <Image src={gucci} alt="gucci" height={125} width={125}></Image>
      <Image src={prada} alt="prada" height={125} width={125}></Image>
      <Image src={calvinKlein} alt="CK" height={125} width={125}></Image>
    </div>
  )
}

export default Brands