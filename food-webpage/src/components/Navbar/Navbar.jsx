import React, { useState } from 'react'

import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";


const NavLinks = [
  {
    id :1,
    name:'Home',
    link :'/##',
  },
  {
    id :1,
    name:'About',
    link :'/##',
  },
  {
    id :1,
    name:'Contact',
    link :'/##',
  },
]


export default function Navbar() {

    const [openMenu , setOpenMenu] = useState(false)

  return (
    <div className='bg-white shadow-sm py-2'>
      <div className="container flex justify-between">

        {/* LOGO SECTION */}
        <div className='font-bold text-2xl'>Logo</div>

        {/* NAVLINKS SECTION */}
        <div>
          <ul className='flex gap-10'>
            {
              NavLinks.map(({id , name , link}) => (
                <li>
                  <a href={link} className='text-xl font-semibold hover:text-primary'>{name}</a>
                </li>
              ))}

              {/* DROPDOWN SECTION */} 
              <select className='text-xl font-semibold cursor-pointer pb-2 hover:text-primary' name="" id="">
                <option value="">Vegetables</option>
                <option value="">Fruits</option>
                <option value="">Candies</option>
              </select>

              {/* SIGNUP SIGNIN SECTION */}
              <li>
                <button className='flex justify-center items-center gap-2 mt-1 bg-secondary text-white px-5 py-1 rounded-xl hover:scale-105 duration-200'>
                <FaUser />
                My Account
                </button>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
