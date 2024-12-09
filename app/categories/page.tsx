import React from 'react'

const page: React.FC = () => {
  return (
    <section className='bg-white flex mt-10 mx-auto w-[90%] flex flex-row gap-5'>
      <div className='border border-gray rounded-3xl w-[20%] p-4 flex flex-col gap-4'>
          <h2 className='font-bold text-2xl'>Filters</h2>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <p>T-Shirts</p>
            <p>Shirts</p>
            <p>Jeans</p>
            <p>Hoodie</p>
            <p>Jackets</p>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Price</h3>
            <input type="range" className='appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black cursor-move'  min="100" 
                    max="100000"  /> 
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Colors</h3>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Sizes</h3>
          </div>
          <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
          <div>
            <h3 className='font-bold text-xl'>Dress Style</h3>
          </div>
          
          <button className='bg-black text-white py-3 px-4 rounded-full'>Apply Filter</button>
      </div>
      <div className='w-full'>
        <div className='text-[rgba(0,0,0,0.6)] flex justify-around'>
          <h2 className='font-bold text-4xl text-bold text-black'>Casuals</h2>
          <span className='flex flex-row'>
            <p>Showing 1-10 of 100 Products &nbsp;</p>
            <p className='flex flex-row'>Sort by:&nbsp;
              <p className='font-bold text-black'>Most Popular</p>
            </p>
          </span>
          
        </div>
        <div>CARDS</div>
        <div>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </section>
  )
}

export default page