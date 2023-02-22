import React from 'react'
import Hero from '@/components/Hero'
import Link from 'next/link'

const Careers = () => {
  return (
    <div>
      <Hero screen={2} title="Careers" bg="/Covers/careers.jpg" />
      <div className='py-10 px-6'>
        <h1 className='text-2xl font-semibold text-gray-800 capitalize md:text-3xl lg:text-4xl text-center'>Join With Us</h1>
        <div className='flex md:flex-row flex-col mt-10 items-center justify-center gap-12'>
          <div data-aos="fade-up" className="block">
            <img
              alt="Art"
              src="/career.png"
              className="w-full aspect-auto"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Career 1
            </h3>

            <p className="mt-2 max-w-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
              sequi ipsam incidunt.
            </p>

            <Link href="/contact"><button className="carrer_btn mt-6"> Contact US</button></Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="block">
            <img
              alt="Art"
              src="/career.png"
              className="w-full aspect-auto"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Career 2
            </h3>

            <p className="mt-2 max-w-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
              sequi ipsam incidunt.
            </p>
            <Link href="/contact"><button className="carrer_btn mt-6"> Contact US</button></Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="block">
            <img
              alt="Art"
              src="/career.png"
              className="w-full aspect-auto"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Career 3
            </h3>

            <p className="mt-2 max-w-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
              sequi ipsam incidunt.
            </p>
            <Link href="/contact"><button className="carrer_btn mt-6"> Contact US</button></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Careers