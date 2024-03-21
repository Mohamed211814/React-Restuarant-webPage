import React from 'react'

import { FaArrowRight } from "react-icons/fa";


export default function PrimaryBtn() {
  return (
    <div className='flex items-center gap-2 bg-secondary text-white w-60 rounded-md'>
        <button className='py-1.5 px-4'>Choose Your Meal Plan </button>
        <FaArrowRight />
    </div>
  )
}
