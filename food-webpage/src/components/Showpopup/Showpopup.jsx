import React from 'react'

import { IoMdCloseCircle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


export default function Showpopup({showPopUp , setShowPopUp}) {
  return (
    <div>
        {
            showPopUp && (
                 <div>
                    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 
                        w-[300px]'>
                            {/* HEADER SECTION */}
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h1 className='text-2xl font-bold'>Login</h1>
                                </div>

                                <div>
                                    <IoMdCloseCircle className='text-2xl cursor-pointer' onClick={() => setShowPopUp(false)}/>
                                </div>
                            </div>

                            {/* LOGIN FORM SECTION */}
                            <div className='mt-5'>
                                <input type="email"
                                 placeholder='Enter Email'
                                 className='w-full rounded-sm border border-gray-300 dark:border-gray-500 px-2 py-1' />
                            </div>

                            <div className='mt-5'>
                                <input type="password"
                                 placeholder='Enter Password'
                                 className='w-full rounded-sm border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4' />
                            </div>

                             {/* BTN SECTION */}
                            <div>
                                <button className='bg-secondary w-full rounded-md text-white font-bold py-1' 
                                onClick={() => setShowPopUp(false)}>Login</button>
                            </div>

                            {/* SOCIAL LOGEN SECTION */}
                            <div className='mt-4'>
                                <p className='text-center mb-2'>Or login with</p>

                                <div className='flex justify-center gap-4'>
                                    <FaFacebook className='text-3xl hover:text-blue-500 duration-200'/>
                                    <FaGoogle className='text-3xl hover:text-primary duration-200'/>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            )
        }
    </div>
  )
}
