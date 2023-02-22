import React from 'react'
import Hero from '@/components/Hero'

const Media = () => {
  return (
    <div>
      <Hero screen={2} title="Media Center" bg="/Covers/mediacenter.jpg" />
      <div className='md:px-6 px-4 py-10'>
        <h1 className='text-2xl font-semibold text-gray-800 capitalize md:text-3xl lg:text-4xl text-center'>Our Highlights</h1>
        <div className='md:h-[100vh] h-[40vh] mt-10'>
          <iframe className='w-full h-full' src="https://www.youtube.com/embed/7-KZCwzbEWg" title="वैदिक इनोवेशन प्राइवेट लिमिटेड की फाउंडर से खास बातचीत" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </div>
  )
}

export default Media