import React from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";


export default function Footer() {
  return (
    <div>
        <div>
            <div className="container bg-primaryDark text-white rounded-lg mb-5">
                <h1 className='tracking-wider text-2xl font-semibold text-center pt-10 pb-16'>Contact Us</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>
                    <div className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <FaLocationDot className='text-4xl'/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur sweet blue adipisicing elit. Voluptatem, minima?</p>
                    </div>

                    <div className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <MdEmail className='text-4xl'/>
                        </div>
                        <p>test111@gmail.com</p>
                        <p>test222@gmail.com</p>
                    </div>

                    <div className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <FaPhoneFlip  className='text-4xl'/>
                        </div>
                        <p>+212 689654676 MA</p>
                        <p>+1 00689654676 CA</p>
                        <p>+78 09689654676 FG</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
