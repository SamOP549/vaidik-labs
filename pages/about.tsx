import React from 'react'
import Hero from '@/components/Hero'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <Hero screen={2} title="About Us" bg="/Covers/contact.jpg" />
      <div className="py-10 md:px-20 px-6 mx-auto">

        <section className="mb-16 mt-16 text-gray-800">
          <p>
            Vaidik Innovation Labs Pvt. Ltd. (VIL) is formed by Industry experts with goal to offer CBS services with perfection. We thrive to serve the industry with our unique model of expertise deliberation. We target to serve Banking Industry at the fullest.
            <br />
            <br />
            VIL has strong credentials in the area of core banking implementation. VIL&apos;s Leadership come with a blend of Technical and Subject Matter Experts who have executed projects of high complexity.
          </p>
        </section>
        <div className='flex items-center justify-center'>
          <Link href="/contact"><button className="carrer_btn mt-6"> GET STARTED</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About