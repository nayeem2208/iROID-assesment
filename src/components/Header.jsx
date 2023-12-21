import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
  return (
    <div className='flex justify-evenly h-20  items-center' >
    <div>
      <img src="/icon.svg" alt="" className='h-9'/>
    </div>
    <div className='flex font-light text-black text-sm'>
        <div className='mx-3 flex'>Solutions<RiArrowDropDownLine className='w-6 h-6 ml-2'/></div>
        <div className='mx-3 flex'>Platform<RiArrowDropDownLine className='w-6 h-6 ml-2'/></div>
        <div className='mx-3 flex'>Industries<RiArrowDropDownLine className='w-6 h-6 ml-2'/></div>
        <div className='mx-3 flex'>Featured Insights<RiArrowDropDownLine className='w-6 h-6 ml-2'/></div>
        <div className='mx-3 flex'>About Us<RiArrowDropDownLine className='w-6 h-6 ml-2'/></div>
        <div className='mx-3 flex'>Careers<RiArrowDropDownLine className='w-6 h-6 ml-2'/></div>
        <div className='mx-3'>Our Work</div>
    </div>
    <div><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Free Consultation</button></div>
    </div>
  )
}

export default Header
