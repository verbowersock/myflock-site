import React from 'react';
import NavLink from '../elements/NavLink';

const Navbar = () => {
  return (
    <div className='mx-auto flex flex-row justify-center py-6 shadow-sm md:justify-between md:space-x-4 md:px-8 lg:justify-start lg:space-x-8 lg:px-20'>
      <img src='../src/assets/logo.png' className='w-48 md:pr-6 lg:pr-10' />
      <NavLink id='overview' text='Overview' />
      <NavLink id='features' text='Features' />
      <NavLink id='support' text='Support Us' />
      <NavLink id='get_started' text='Get Started' />
      <NavLink id='contact' text='Contact Us' />
    </div>
  );
};

export default Navbar;
