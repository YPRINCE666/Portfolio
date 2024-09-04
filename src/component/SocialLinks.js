import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
<ul>
    <li className='flex justify-between items-center w-40 h-14 px-4 bg-purple-400
      hover:ml-[-10px]   ml-[-100px]
     hover:rounded-md duration-300 bg-purple-400'>
       <a href='https://www.linkedin.com/in/prince-yadav-377703210/' target='_blank' 
    rel="noreferrer" className='flex justify-between items-center w-full text-white' >
        <>
        LinkedIn <FaLinkedin size={30}/>
        </>
       </a>
    </li>

    <li className='flex justify-between items-center w-40 h-14 px-4 bg-purple-400
      hover:ml-[-10px]   ml-[-100px]
     hover:rounded-md duration-300 bg-purple-400'>
       <a href='https://github.com/YPRINCE666'   rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-white' >
        <>
        Github <FaGithub size={30}/>
        </>
       </a>
    </li>

    <li className='flex justify-between items-center w-40 h-14 px-4 bg-purple-400
      hover:ml-[-10px]   ml-[-100px]
     hover:rounded-md duration-300 bg-purple-400'>
       <a href='mailto:itsprinceyadav666@gmail.com'  rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-white' >
        <>
        Mail <HiOutlineMail size={30}/>
        </>
       </a>
    </li>
    <li className='flex justify-between items-center w-40 h-14 px-4 bg-purple-400
      hover:ml-[-10px]   ml-[-100px]
     hover:rounded-md duration-300 bg-purple-400'>
       <a href='/MyResume.pdf'  download={true} className='flex justify-between items-center w-full text-white rounded-br-md' >
        <>
        Resume <BsFillPersonLinesFill size={30}/>
        </>
       </a>
    </li>
</ul>


    </div>
  )
}

export default SocialLinks