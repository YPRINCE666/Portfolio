import React from 'react'
import NetflixGpt from '../Asset/portfolio/NetflixGpt.png';
import BookMyShow from '../Asset/portfolio/BookMyShow.png';
import WeFit from '../Asset/portfolio/WeFit.png';
const Portfolio = () => {
    const openLink = (url) => {
        window.open(url, "_blank");
      };
    const portfolios = [
        {
           id:1,
           src: NetflixGpt,
           demoUrl: "https://iridescent-swan-8c5f16.netlify.app/",
           demoUrl2:"https://github.com/YPRINCE666/NETFLIX-GPT",
        
        },
        {
            id:2,
            src: WeFit,
            demoUrl: "https://we-fit01.netlify.app/",
            demoUrl2:"https://github.com/YPRINCE666/WE-FIT",
         },
         {
            id:2,
            src: BookMyShow,
            demoUrl: "https://github.com/YPRINCE666",
            demoUrl2:"https://github.com/YPRINCE666",
         },
        
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-purple-800 border-grey-500'>Portfolio</p>
                <p className=' text-2xl py-6 text-purple-400'>Here Are  My Projects</p>
            </div>
           

<div className='grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0'>
{
               portfolios.map(({id,src,demoUrl,demoUrl2})=>(
                <div  key={id} className='shadow-md shadow-purple-300 rounded-lg'>
    <img className='rounded-md duration-200 hover:scale-90 ' src={src} alt=''/>
    <div className='flex items-center justify-center'>
        <button  onClick={() => openLink(demoUrl)}  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
        <button onClick={() => openLink(demoUrl2)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
    </div>
</div>
    ))
            }
    
</div>

        </div>
    </div>
  )
}

export default Portfolio