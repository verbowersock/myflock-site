import React from 'react';

const NavLink = ({ id, text }) => {
  return (
    <div className='hidden md:flex md:items-center'>
      <a
        href={`#${id}`}
        className=' text-slate-700 transition-all duration-100 ease-in-out hover:text-myflockPurple md:hover:text-lg lg:text-lg lg:hover:text-xl'
      >
        {text}
      </a>
    </div>
  );
};

export default NavLink;
