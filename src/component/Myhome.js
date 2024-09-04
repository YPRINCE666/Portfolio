import React from 'react'
import heroimage from '../Asset/heroimage.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Myhome = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black
     to-gray-800'>
       <div className='max-w-screen-lg mx-auto flex flex-col 
        justify-center h-full  px-4'>
            <div className='flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2' >
            <h2 className='text-4xl sm:text-7xl font-bold text-purple-400'>I'm a Full Stack Developer</h2>
            <p className='text-purple-200 py-4 max-w-md'>
            A dedicated full-stack developer skilled in React, 
            Node.js, Next.js, and databases, eager to leverage these technologies to build innovative, 
            user-centric applications and grow in the tech industry.
            </p>
            <div  className='mt-4'>
                <Link to="portfolio" smooth duration={500} className=' text-xl group flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-fit px-6 py-3 my-2 rounded cursor-pointer' >
                    Portfolio
                    <span className=' group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={30} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <img className='rounded-2xl mx-auto w-2/3 md:w-2/3' src={heroimage} alt='Profile'/>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Myhome