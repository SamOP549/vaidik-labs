import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="bg-neutral-900">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <Image src="/logo.png" alt="Logo" width={64} height={64} />
                </div>

                <p
                    className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400"
                >
                    Vaidik Innovation Labs Pvt. Ltd. (VIL) is formed by Industry experts with goal to offer CBS services with perfection.
                </p>

                <nav aria-label="Footer Nav" className="mt-12">
                    <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <Link
                                className="transition text-white hover:text-white/75"
                                href="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition text-white hover:text-white/75"
                                href="/services"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition text-white hover:text-white/75"
                                href="/careers"
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition text-white hover:text-white/75"
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    <div className='flat-under'>
                        <li className='grow-container'>
                            <Link href="https://www.linkedin.com/company/vinnovationlabs/" target="_blank" className='to-linkedin circle-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" className='h-6 w-6 fa fa-linkedin fa-fw'><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer