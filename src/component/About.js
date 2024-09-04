import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-purple-800 border-grey-500'>About</p>
            </div>
            <p className='text-xl mt-20 text-purple-400'>
            Hello! I’m a full-stack developer from India,
             recently graduated with a Bachelor of Computer Applications (BCA).
              My expertise lies in creating dynamic, 
              user-friendly web applications using technologies like React, 
              Node.js, Next.js, and robust databases. 
              I’m passionate about turning innovative ideas into practical digital solutions
              , and 
              
            </p>
            <br/>
            <p className='text-xl text-purple-400'>
            I thrive on tackling challenges that push the boundaries of 
              what’s possible in web development. With a strong foundation
               in both front-end and back-end development, I’m eager to contribute my 
               skills to exciting projects 
            and continuously grow as a developer in this ever-evolving tech landscape.
            </p>
        </div>
    </div>
  )
}

export default About