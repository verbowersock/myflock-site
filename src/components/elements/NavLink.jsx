import React from 'react';

const NavLink = ({ open, id, text, onClick }) => {
  return (
    <div
      className={`${open ? 'my-8 block' : 'hidden'} md:flex md:items-center`}
    >
      <a
        href={`#${id}`}
        className={`${open ? 'block' : 'hidden'} text-2xl text-white transition-all duration-100 ease-in-out hover:text-myflockPurple md:block md:text-lg md:text-slate-700 md:hover:text-lg lg:hover:text-xl`}
        onClick={onClick}
      >
        {text}
      </a>
    </div>
  );
};

export default NavLink;
