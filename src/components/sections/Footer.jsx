import React from 'react';

const Footer = () => {
  return (
    <footer className='flex min-h-48 w-full flex-col items-center justify-between bg-black px-8 py-8 text-white md:flex-row md:px-32'>
      <div className='flex flex-col items-center align-middle'>
        <img
          src='./assets/invertedVBDLogo.png'
          className='w-32 self-center'
          alt='VBDesigns logo'
        />
        <span className='text-sm'>
          MyFlock - sheep management by VBDesigns &copy; 2024
        </span>
      </div>
      <div className='flex flex-col items-center gap-6 pt-10 text-white md:items-end md:pt-0'>
        <a
          target='_blank'
          rel='noreferrer'
          className='text-white focus:text-current'
          href='https://verbowersock.github.io/myflockprivacy/'
        >
          Privacy policy
        </a>
        <a
          className='text-white focus:text-current'
          href='mailto:vbdesignapps@gmail.com'
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
