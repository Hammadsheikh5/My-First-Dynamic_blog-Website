import React from 'react'

export default function Hero() {
  return (
    <div className='text-black font-serif'>
      <div className=' bg-[#fafaf5] mx-auto p-6 shadow-lg shadow-[#2e1717] w-full max-w-[1536px]'>
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold  text-center'>
        &quot;Welcome to Our Blog – Your Source for Web Development Insights&quot;
        </h1>
        <p className='text-sm sm:text-lg lg:text-xl font-semibold text-justify p-9 text-[#2e1717]'>
        &quot;Explore our latest articles, tutorials, and guides on web development, technology trends, and programming tips. Whether you’re a beginner or an experienced developer, our content is designed to help you stay up-to-date with the ever-evolving tech landscape. From JavaScript and React to Python and SEO optimization, you’ll find valuable resources to enhance your skills and build amazing web projects. Dive in and start learning today!&quot;
        </p>
      </div>
      
    </div>
  )
}
