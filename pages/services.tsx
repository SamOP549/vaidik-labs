import React from 'react'
import Jumbotron from '@/components/Jumbotron'
import Link from 'next/link'

const Services = () => {
  const data = [
    {
      title: "Migration",
      picture: "",
      description: "Software migration is the practice of transferring data, accounts, and functionality from one operating environment to another. It could also refer to times when users are migrating the same software from one piece of computer hardware to another, or changing both software and hardware simultaneously."
    },
    {
      title: "Customizations",
      picture: "",
      description: "Customised software (also known as bespoke software or tailor-made software) is software that is specially developed for some specific organization or other user."
    },
    {
      title: "Software Solution",
      picture: "",
      description: "KEYGAP is focused on creating sustainable value growth through innovative solutions and unique partnerships. Our values are at the heart of our business reputation and are essential to our continued success."
    },
    {
      title: "Optimiazation",
      picture: "",
      description: "Performance Optimization of a programs and software is the process modifying a software system to make it work more efficiently and execute more rapidly."
    },
    {
      title: "Fintech Service",
      picture: "",
      description: "Fintech refers to the integration of technology into offerings by financial services companies in order to improve their use and delivery to consumers."
    },
    {
      title: "Custom Banking Software Service",
      picture: "",
      description: "We perform world-class custom software development services for startups, small-to-midsize (SMB), and enterprise-size businesses."
    }
  ]
  const heros = data.map((hero, index) => {
    return (<div key={index} className="container px-4 py-4 mt-10">
      <div className={`flex ${index % 2 ? "flex-row-reverse" : "flex-row"} flex-wrap items-center mt-16`}>
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-10">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            {hero.title}
          </h3>
          <p className="text-lg mt-4 mb-4">
            {hero.description}
          </p>
          <Link href="/contact">
            <button className='get_in_touch_btn'>
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Get In Touch</span>
            </button>
          </Link>
        </div>
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <img className="md:block hidden w-full align-middle rounded  -lg" style={{ transform: `${index % 2 ? "scale(1) perspective(1040px) rotateY(11deg) rotateX(-2deg) rotate(-2deg)" : "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"}` }} alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" />
          <img className="md:hidden block w-full align-middle rounded  -lg" alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" />
        </div>
      </div>
    </div>)
  })
  return (
    <div>
      <Jumbotron title="Our Services" bg="/Covers/services.jpg" />

      <section className="mt-24">
        {heros}
      </section>
    </div>
  )
}

export default Services