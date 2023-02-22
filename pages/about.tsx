import React from 'react'
import Hero from '@/components/Hero'

const About = () => {
  return (
    <div>
      <Hero screen={2} title="About Us" bg="/Covers/about.jpg" />
      <div className="py-10 px-6 mx-auto">

        <section className="mb-32 mt-16 text-gray-800">
          <img src="./about-cover.jpg" className="w-full shadow-lg rounded-lg mb-6" alt="About Cover" />

          <p>
            Vaidik Innovation Labs Pvt. Ltd. (VIL) is formed by Industry experts with goal to offer CBS (Finacle) services with perfection. We thrive to serve the industry with our unique model of expertise deliberation. We target to serve Banking Industry at the fullest.
            <br />
            <br />
            VIL has strong credentials in the area of core banking implementation, especially Finacle. VIL&apos;s Leadership come with a blend of Finacle Technical and Subject Matter Experts who have executed projects of high complexity.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About