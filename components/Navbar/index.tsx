import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [shadow, setShadow] = useState('')
  const [height, setHeight] = useState('')
  const [padding, setPadding] = useState('1rem')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
        setShadow('shadow-md')
        setHeight('80px')
        setPadding('0.5rem')
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
        setShadow('')
        setHeight('100px')
        setPadding('1rem')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}`, height: `${height}` }}
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${shadow}`}
    >
      <style jsx>
        {`
        .hover-underline-animation:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: ${textColor};
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        `}
      </style>
      <div style={{ padding: `${padding}` }} className='max-w-[1240px] m-auto flex justify-between items-center text-white'>
        <Link rel="preload" href='/'>
          <Image quality="90" loading="lazy" className='cursor-pointer' src='/logo.png' width="54" height="54" alt="navbarLogo" />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/'>
              <button className="cta">
                <span className="hover-underline-animation">Home</span>
              </button>
            </Link>
          </li>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/about'>
              <button className="cta">
                <span className="hover-underline-animation">About</span>
              </button>
            </Link>
          </li>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/services'>
              <button className="cta">
                <span className="hover-underline-animation">Services</span>
              </button>
            </Link>
          </li>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/contact'>
              <button className="cta">
                <span className="hover-underline-animation">Contact</span>
              </button>
            </Link>
          </li>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/careers'>
              <button className="cta">
                <span className="hover-underline-animation">Careers</span>
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "#ffffff" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul> 
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/'><h6 className='cursor-pointer text-white'>Home</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/about'><h6 className='cursor-pointer text-white'>About</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/services'><h6 className='cursor-pointer text-white'>Services</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/contact'><h6 className='cursor-pointer text-white'>Contact</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/careers'><h6 className='cursor-pointer text-white'>Careers</h6></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;