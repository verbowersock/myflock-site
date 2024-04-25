import React, { useState } from 'react';
import NavLink from '../elements/NavLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='mx-auto flex flex-row justify-center py-6 shadow-sm md:justify-between md:space-x-4 md:px-8 lg:justify-start lg:space-x-8 lg:px-20'>
      <img
        src='./assets/logo.png'
        className='w-48 md:pr-6 lg:pr-10'
        alt='myflock sheep management app logo'
      />
      <NavLink id='overview' text='Overview' open={isMenuOpen} />
      <NavLink id='features' text='Features' open={isMenuOpen} />
      <NavLink id='support' text='Support Us' open={isMenuOpen} />
      <NavLink id='get_started' text='Get Started' open={isMenuOpen} />
      {/*Hamburger Button*/}
      <div>
        <button
          id='menu-btn'
          type='button'
          className={`hamburger 
          ${isMenuOpen ? 'open' : ''}
        z-50 block focus:outline-none md:hidden`}
          onClick={toggleMenu}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>
      {/*menu container*/}
      <div
        id='menu'
        className={`absolute bottom-0 left-0 top-0 !z-40 h-fit w-full bg-black pb-10 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className=' flex min-h-screen flex-col items-center pr-8 pt-24'>
          <NavLink
            id='about'
            text='About'
            open={isMenuOpen}
            onClick={closeMenu}
          />
          <NavLink
            id='overview'
            text='Overview'
            open={isMenuOpen}
            onClick={closeMenu}
          />
          <NavLink
            id='features'
            text='Features'
            open={isMenuOpen}
            onClick={closeMenu}
          />
          <NavLink
            id='support'
            text='Support Us'
            open={isMenuOpen}
            onClick={closeMenu}
          />
          <NavLink
            id='get_started'
            text='Get Started'
            open={isMenuOpen}
            onClick={closeMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
