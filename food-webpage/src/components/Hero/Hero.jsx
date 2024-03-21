import React from 'react'

import foodImg from '../../assets/food.png'
import PrimaryBtn from '../shared/PrimaryBtn'

export default function Hero() {
  return (
    <>
     <div className="relative z-[-1] bg-gray-50">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[500px]">

                {/* TEXT CONTENT SECTION */}
                <div className='space-y-6'>
                    <h1 data-aos='fade-up' className='text-3xl px-10 py-4 sm:text-5xl'>Fresh & Healthy Meal Plan And <span className='text-secondary italic'>Delivery</span> In Canada</h1>
                    <p data-aos='fade-up' data-aos-delay='300' className='lg:pr-64 px-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, </p>

                    {/* BTN SECTION */}
                    <div data-aos='fade-up' data-aos-delay='300' className='px-10'>
                        <PrimaryBtn/>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div data-aos='zoom-in' data-aos-delay='300'>
                    <img src={foodImg} alt=""/>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
