import React from 'react'

import { FaBusAlt } from "react-icons/fa";


export default function WhyUs() {
  return (
    <div className='py-14 md:py-28 bg-gray-50'>
        <div className="container">

            {/* HEADING SECTION */}
            <div>
                <h1 className='pb-16 tracking-wider text-2xl font-semibold text-center'>Why Choose Us</h1>
            </div>

            {/* CARD SECTION */}
            <div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
                    
                    {/* CARDS LIST */}
                    <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='text-5xl text-secondary rotate-90 text-center translate-x-4'>....</p>
                        <FaBusAlt className='text-4xl text-secondary'/>
                    </div>

                    <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                        <FaBusAlt className='text-4xl text-primary'/>
                        <p className='text-5xl text-primary rotate-90 text-center translate-x-4'>....</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='text-5xl text-secondary rotate-90 text-center translate-x-4'>....</p>
                        <FaBusAlt className='text-4xl text-secondary'/>
                    </div>

                    <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                        <FaBusAlt className='text-4xl text-primary'/>
                        <p className='text-5xl text-primary rotate-90 text-center translate-x-4'>....</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
