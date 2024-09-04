import React from 'react'
import css from "../Asset/css.png";
import express from "../Asset/express.png";
import github from "../Asset/github.png";
import html from "../Asset/html.png";
import javascrip from "../Asset/javascript.png";
import mongdb from "../Asset/mongdb.png";
import nextjs from "../Asset/nextjs.png";
import node from "../Asset/node.png";
import react from "../Asset/react.png";
import tailwind from "../Asset/tailwind.png";

const Experience = () => {
    const tech =[
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascrip,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: react,
            title: 'ReactJs',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: mongdb,
            title: 'MongoDB',
            style: 'shadow-green-500',
        },
        {
            id: 6,
            src: node,
            title: 'NodeJs',
            style: 'shadow-green-700',
        },
        {
            id: 7,
            src: express,
            title: 'ExpressJs',
            style: 'shadow-gray-500',
        },
        {
            id: 8,
            src: github,
            title: 'Github',
            style: 'shadow-purple-500',
        },
        {
            id: 9,
            src: nextjs,
            title: 'NextJs',
            style: 'shadow-gray-600',
        },
        {
            id: 10,
            src: tailwind,
            title: 'TailwindCSS',
            style: 'shadow-sky-400',
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
     <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center
      w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 text-purple-800 border-grey-500'>Experience</p>
            <p className=' text-2xl py-6 text-purple-400' >These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {
            tech.map(({id, src,title,style})=>( 
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} className='w-20 mx-auto' alt=''/>
                <p className='mt-4'>{title}</p>
            </div>
            ))
        }
            
        </div>
     </div>

    </div>
  )
}

export default Experience