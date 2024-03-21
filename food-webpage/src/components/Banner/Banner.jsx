import React from 'react'

import orange from '../../assets/png/orange-removebg-preview.png'
import brokoly from '../../assets/png/brokoly-removebg-preview.png'
import carrot from '../../assets/png/carrot-removebg-preview.png'
import pinapple from '../../assets/png/pineapple-removebg-preview.png'
import strawberry from '../../assets/png/stawberry-removebg-preview.png'

import PrimaryBtn from '../shared/PrimaryBtn'

export default function Banner() {
  return (
    <>
     <div className="container py-14 relative px-10">
        <div>
            <h1 data-aos='fade-up' data-aos-delay='300' className='py-8 tracking-wider text-2xl font-semibold text-center'>Taste the healthy difference</h1>

            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div>
                        <p data-aos='fade-up' data-aos-delay='300'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores quam a at assumenda magnam ducimus consequuntur excepturi dignissimos impedit.</p>
                    </div>
                    <div></div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div></div>
                    <div>
                        <p data-aos='fade-up' data-aos-delay='300'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores quam a at assumenda magnam ducimus consequuntur excepturi dignissimos impedit.</p>
                    </div>
                </div>
            </div>

            {/* BTN SECTION */}
            <div data-aos='fade-up' data-aos-delay='300' className='flex justify-center mt-10 sm:mt-14'>
                <PrimaryBtn />
            </div>
        </div>
        
        {/* BG FRUITS PNGS */}
        <div data-aos='fade-right' className='absolute top-5 -left-0 sm:bottom-0 sm:left-0 opacity-75 sm:opacity-100'>
            <img src={orange} alt="" className='max-w-[70px]'/>
        </div>

        <div data-aos='fade-left'  className='absolute -bottom-0 -left-0 sm:bottom-0 sm:left-0 opacity-75 sm:opacity-100'>
            <img src={brokoly} alt="" className='max-w-[70px]'/>
        </div>

        <div data-aos='fade-right' className='absolute top-5 -right-0  sm:right-10 opacity-75 sm:opacity-100'>
            <img src={pinapple} alt="" className='max-w-[70px]'/>
        </div>

        <div data-aos='fade-left' className='absolute bottom-0 right-0  opacity-75 sm:opacity-100'>
            <img src={carrot} alt="" className='max-w-[70px]'/>
        </div>

        <div data-aos='fade' className='absolute top-1/2 -translate-y-1/2 left-2/4 opacity-75 sm:opacity-100'>
            <img src={strawberry} alt="" className='max-w-[70px]'/>
        </div>
     </div>
    </>
  )
}
