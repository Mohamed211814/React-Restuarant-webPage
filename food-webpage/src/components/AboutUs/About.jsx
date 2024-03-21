import React from 'react'

import { FaUser } from "react-icons/fa";


export default function About({handlePop}) {
  return (
    <div>
        <div className="container bg-secondary rounded-md pb-10 mb-5">
            <h1 data-aos='fade-down' className='pb-16 tracking-wider text-2xl font-semibold text-center pt-10'>About Us</h1>

            <div className='bg-gray-50 px-16 py-10 mb-6 rounded-md'>
                <p data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus exercitationem dolorem ad alias, recusandae eius, sequi quos rem illo minima ipsum fugit eaque beatae praesentium molestias veniam. Quis, asperiores quia rem quos perspiciatis nostrum aliquam ipsum nemo nisi velit at, totam laudantium aut itaque modi quod sapiente. Quidem officiis vero ipsum, praesentium sapiente perspiciatis provident consectetur soluta at rerum facere odio deserunt? Voluptates accusantium unde nemo dicta illum facere illo hic dolores a, corrupti cumque nam deserunt nesciunt, sed, blanditiis officia est maxime rerum! Dicta error iste incidunt blanditiis asperiores ipsum. Eveniet cupiditate est optio, quaerat totam voluptates officiis.</p>

                <div className='flex justify-center pt-10 bg-gray-50'>
                <button data-aos='fade-up' className='flex justify-center items-center gap-2 mt-1 bg-secondary
                 text-white px-5 py-1 rounded-xl hover:scale-105 duration-200' onClick={handlePop}>
                    <FaUser />
                    My Account
                </button>
                </div>
            </div>
            
        </div>

        
    </div>
  )
}
