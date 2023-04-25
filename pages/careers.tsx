import React from 'react'
import Hero from '@/components/Hero'
import Link from 'next/link'

const Careers = () => {
  const data = [
    {
      title: "Finacle E-Banking Application Support",
      picture: "./Careers/1.png",
      location: "Kenya or nearby countries (On-site, minimum 2 years to be spent at onsite)",
      skillset: [
        "Knowledge of latest version FEBA",
        "2 + Years of experience in Finacle e - Banking",
        "Bug fixing / Issue resolution",
        "Production / UAT Support",
        "Mobile Application support",
        "EOD - BOD Support",
        "Strong communication and writing skills",
        "Good understanding of the system"
      ]
    },
    {
      title: "Finacle CRM",
      picture: "./Careers/2.webp",
      location: "PAN India",
      skillset: [
        "Knowledge of latest version CRM",
        "2+ Years of experience in CRM",
        "Bug fixing/Issue resolution",
        "Production/UAT Support",
        "Mobile Application support",
        "EOD-BOD Support",
        "Strong communication and writing skills",
        "Good understanding of the system"
      ]
    },
    {
      title: "Finacle Core Customization",
      picture: "./Careers/3.jpg",
      location: "PAN India & Africa",
      skillset: [
        "Finacle 10x & 11x Knowledge",
        "Finacle Scripting Knowledge",
        "Finacle Front End Customization",
        "FI/C24 Experience",
        "Banking Functional Knowledge",
        "Issue Resolution",
        "Providing work arounds",
        "Bug fixing/Issue resolution",
        "Production/UAT Support",
        "EOD-BOD Support",
        "Strong communication and writing skills",
        "Good understanding of the system"
      ]
    },
    {
      title: "Finacle Treasury",
      picture: "./Careers/4.png",
      location: "PAN India & Africa",
      skillset: [
        "Finacle 10x & 11x Knowledge",
        "Finacle Scripting Knowledge",
        "Good Treasury Knowledge",
        "Issue Resolution",
        "Providing work arounds",
        "Bug fixing/Issue resolution",
        "Production/UAT Support",
        "EOD-BOD Support",
        "Strong communication and writing skills",
        "Good understanding of the system"
      ]
    }
  ]
  const heros = data.map((hero, index) => {
    return (
      <div key={index} className="container py-4 mt-10 mx-auto overflow-hidden">
        <div className={`flex ${index % 2 ? "flex-row-reverse" : "flex-row"} flex-wrap items-center mt-16`}>
          <div data-aos={`${index % 2 ? "fade-left" : "fade-right"}`} className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-10">
            <h3 className="text-3xl mb-2 font-medium leading-normal">
              {hero.title}
            </h3>
            <p className="md:text-lg text-md mt-4 mb-4 text-gray-700">
              Location: {hero.location}
            </p>
            <p className="md:text-lg text-md mt-4 mb-4 text-gray-700">
              Job Description: Candidate should have the below skillset:
            </p>
            <ul className='mt-4 list-disc ml-10'>
              {hero.skillset.map((skill, index) => {
                return (
                  <li key={index} className="text-gray-700 -mt-4">{skill}</li>
                )
              })}
            </ul>
            <Link href="/contact"><button className="carrer_btn mt-6"> Contact US</button></Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <img className="w-full align-middle rounded  -lg" alt={hero.title} src={hero.picture} />
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>
      <Hero screen={2} title="Careers" bg="/Covers/careers.jpg" />
      <div className='py-10 px-6'>
        <h1 className='text-2xl font-semibold text-gray-800 capitalize md:text-3xl lg:text-4xl text-center'>Opportunities With Us</h1>
        <section className="mb-8 -mt-4 overflow-x-hidden">
          {heros}
        </section>
      </div>
    </div>
  )
}

export default Careers