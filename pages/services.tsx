import React from 'react'
import Hero from '@/components/Hero'
import Link from 'next/link'

const Services = () => {
  const data = [
    {
      title: "Migration",
      picture: "./Services/l3.jpg",
      description: "Transferring information, user accounts, and functionalities from one operating environment to another is known as software migration. It might also be used to describe situations in which users are simultaneously updating both software and hardware or migrating the same software from one piece of computer hardware to another."
    },
    {
      title: "Customizations",
      picture: "./Services/l1.jpg",
      description: "Customized software, commonly referred to as bespoke software or tailor-made software, is software that has been created especially for a particular company or user."
    },
    {
      title: "Software Solution",
      picture: "./Services/l2.jpg",
      description: "Vaidik Labs is committed to generating sustainable value creation through original ideas and distinctive alliances. Our company's reputation is built on our ideals, which are crucial to our ongoing success."
    },
    {
      title: "Optimization",
      picture: "./Services/l4.jpg",
      description: "Performance Optimization refers to the process of changing a software system so that it operates more quickly and efficiently."
    },
    {
      title: "Fintech Services",
      picture: "./Services/l5.jpg",
      description: "Fintech is the term for the process through which financial services providers incorporate technology to enhance the usability and delivery of their products to customers."
    },
    {
      title: "Custom Banking Software Service",
      picture: "./Services/l6.jpg",
      description: "We cater the custom needs of the banking industry incuding NBFC's and Schedule Partner."
    },
    {
      title: "CBS Upgrade",
      picture: "./Services/l7.jpg",
      description: "Core banking solution upgrade refers to the process of updating or replacing a financial institution's existing core banking software with a newer version or a different system. This involves migrating all customer data, accounts, transactions, and other essential information from the old system to the new one, while ensuring minimum disruption to the bank's operations."
    },
    {
      title: "Merger & Acquisition",
      picture: "./Services/l8.jpg",
      description: "Mergers and acquisitions (M&A) in banking IT solutions refer to the consolidation of two or more companies to form a larger entity or the acquisition of one company by another. In the banking industry, this type of M&A activity often involves companies that provide IT solutions to financial institutions."
    },
    {
      title: "BAAS/SAAS/CLOUD",
      picture: "./Services/l9.jpg",
      description: "Vaidik Labs is a provider of all cloud-based banking software solutions. We offer a wide range of cloud-based banking software solutions that are designed to meet the needs of financial institutions of all sizes."
    },
    {
      title: "Implementation and Support",
      picture: "./Services/l10.jpg",
      description: "Implementation refers to the process of installing and configuring software or systems to meet the specific needs of a banking organization. Support, on the other hand, involves providing assistance and maintenance services to ensure the smooth running of the implemented solutions."
    }
  ]
  const heros = data.map((hero, index) => {
    return (
      <div key={index} className="container py-4 mt-10 mx-auto overflow-hidden">
        <div className={`flex ${index % 2 ? "flex-row-reverse" : "flex-row"} flex-wrap items-center mt-16`}>
          <div data-aos={`${index % 2 ? "fade-left" : "fade-right"}`} className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-10">
            <h3 className="text-4xl mb-2 font-medium leading-normal">
              {hero.title}
            </h3>
            <p className="md:text-lg text-md mt-4 mb-4 text-gray-700">
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
          <div data-aos="fade-up" data-aos-delay="300" className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <img className="md:block hidden w-full align-middle rounded  -lg" style={{ transform: `${index % 2 ? "scale(1) perspective(1040px) rotateY(11deg) rotateX(-2deg) rotate(-2deg)" : "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"}` }} alt={hero.title} src={hero.picture} />
            <img className="md:hidden block w-full align-middle rounded  -lg" alt={hero.title} src={hero.picture} />
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>
      <Hero screen={2} title="Our Services" bg="/Covers/services.jpg" />

      <section className="my-16 overflow-x-hidden">
        <h1 className='text-center font-semibold lg:text-4xl md:text-3xl text-2xl overflow-visible'>Our Offerings</h1>
        {heros}
      </section>
    </div>
  )
}

export default Services