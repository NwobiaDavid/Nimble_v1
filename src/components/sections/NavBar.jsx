import { useState } from 'react';

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };


  return (
    <div className="flex lg:flex-row flex-col p-1 my-0 items-center justify-center md:justify-evenly shadow-md">

    <div className='p-0 m-0 flex w-[100%] justify-around items-center lg:w-fit'>
        {/* Logo and Brand */}
        <div className="w-[45%] md:w-auto flex items-center justify-center">
          <a className="font-bold p-3 text-2xl md:text-3xl" href='#'>
          Nimble <span className='text-orange-600'>:)</span>
          </a>
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
      <div className="text-lg lg:text-base flex whitespace-nowrap lg:flex-row p-2 items-center flex-col">
        <a
          className="p-3 hover:text-orange-600 transition-all duration-300 "
          href="http://"
        >
         What&apos;s Nimble?
        </a>
        <a
          className="p-3 lg:ml-8 hover:text-orange-600 transition-all duration-300 "
          href="http://"
        >
          What I Do
        </a>
        <a
          className="p-3 lg:ml-8 hover:text-orange-600 transition-all duration-300 "
          href="http://"
        >
          About
        </a>
      </div>

      <div className="text-md p-3 lg:mb-0 mb-7 hover:scale-105 duration-150 bg-black text-white rounded-md">
        <a href="#">JOIN THE WAITLIST!</a>
      </div>
    </div>
  </div>
  )
}
