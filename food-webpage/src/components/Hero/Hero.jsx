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
                    <h1 className='text-5xl'>Fresh & Healthy Meal Plan And <span className='text-secondary italic'>Delivery</span> In Canada</h1>
                    <p className='lg:pr-64'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, </p>

                    {/* BTN SECTION */}
                    <div>
                        <PrimaryBtn />
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div>
                    <img src={foodImg} alt=""/>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
