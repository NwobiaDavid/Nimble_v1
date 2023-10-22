import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function NavBar() {

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

      window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };


  return (
    <motion.div  className={`flex z-50 fixed w-full lg:flex-row flex-col duration-200 ease-in p-1 my-0 items-center justify-center md:justify-evenly shadow-md`}
      initial={{ backgroundColor: 'white' }}
      animate={{ backgroundColor: isScrolled ? 'black' : 'white', color: isScrolled? 'white' : 'black' }}
      transition={{ duration: 0.3 , ease: 'easeIn'}}>

    <div className='p-0 m-0 flex w-[100%] justify-around items-center lg:w-fit'>
        {/* Logo and Brand */}
        {/* TODO: make the navbar fixed. */}
        <div className="w-[45%] md:w-auto flex items-center justify-center">
          <Link className="font-bold cursor-pointer p-3 text-2xl md:text-3xl" to='home' spy={true} smooth={true} offset={-70} duration={300} >
          Nimble <span className='text-orange-600'>:)</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex">
          <button
            className="p-3 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {/* Animated SVG icon for mobile menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform ${
                isMenuOpen ? 'transform rotate-90' : 'transform rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
    </div>

    {/* Navigation Links */}
    <div
      className={`${
        isMenuOpen ? 'flex' : 'hidden'
      } lg:flex-row lg:flex flex-col items-center lg:w-[50%] lg:justify-between justify-evenly`}
    >
      <div className="text-lg lg:text-lg font-semibold flex whitespace-nowrap lg:flex-row p-2 items-center flex-col">
        <Link
          className="p-3 lowercase cursor-pointer hover:text-orange-600 transition-all duration-300 "
          to='pagetwo' spy={true} smooth={true} offset={-70} duration={300}
        >
         What&apos;s Nimble?
        </Link>
        <Link
          className="p-3 lowercase cursor-pointer lg:ml-8 hover:text-orange-600 transition-all duration-300 "
          to={'/x'}
        >
          what do we do
        </Link>
        <Link
          className="p-3 lowercase cursor-pointer lg:ml-8 hover:text-orange-600 transition-all duration-300 "
          to={'/j'}
        >
          About
        </Link>
      </div>

      <div className="text-md capitalize cursor-pointer p-3 lg:mb-0 mb-7 w-full lg:w-[20%] text-center hover:scale-105 duration-150 bg-orange-500 hover:bg-orange-600 text-white rounded-md">
        <Link to={'/k'}>Sign up!</Link>
      </div>
    </div>
  </motion.div>
  )
}
