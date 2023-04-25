import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="text-neutral-900 bg-gray-300">
            <div className="flex md:flex-row flex-col justify-evenly md:space-y-0 space-y-8 md:items-start items-center md:px-20 px-4 py-24">
                <div className=" flex flex-col space-y-4 w-1/3 items-center">
                    <Image src="/full logo.png" alt="Logo" width={300} height={64} />
                    <p className='text-sm mt-4'>Vaidik Innovation Labs Pvt. Ltd. (VIL) is formed by Industry experts with goal to offer CBS services with perfection.</p>
                    <div className='flat-under'>
                        <li className='grow-container'>
                            <Link href="https://www.linkedin.com/company/vinnovationlabs/" target="_blank" className='to-linkedin circle-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" className='h-6 w-6 fa fa-linkedin fa-fw'><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                            </Link>
                        </li>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 items-center">
                    <h4 className='text-xl font-bold'>CONTACT US</h4>
                    <div className='flex items-start space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                        </svg>
                        <p className='sm:text-md text-sm'>Sector 6B, Vrindavan Yojana 1, Raebareli Road, Telibagh, Lucknow 226029</p>
                    </div>
                    <div className='flex items-start space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <div className='flex flex-col space-y-2'>
                            <Link href="mailto:ankita_mishra@vaidikinnovation.com">
                                <p className='sm:text-md text-sm'>ankita_mishra@vaidikinnovation.com</p>
                            </Link>
                            <Link href="mailto:pragya.gupta@vaidikinnovation.com">
                                <p className='sm:text-md text-sm'>pragya.gupta@vaidikinnovation.com</p>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='sm:text-md text-sm'>Mon. - Fri. 10 AM - 6 PM</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 items-center">
                    <h4 className='text-xl font-bold'>QUICK LINKS</h4>
                    <div>
                        <Link
                            className="transition text-black hover:text-black/75"
                            href="/about"
                        >
                            About
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="transition text-black hover:text-black/75"
                            href="/services"
                        >
                            Services
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="transition text-black hover:text-black/75"
                            href="/careers"
                        >
                            Careers
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="transition text-black hover:text-black/75"
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="bg-gray-200 p-8 text-center text-black text-sm">
                Copyright ©2022 <span className='font-bold'>Vaidik Innovation Labs Pvt. Ltd.</span>. All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer