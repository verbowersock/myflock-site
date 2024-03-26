import React from 'react';
import DownloadButton from '../elements/DownloadButton';

const About = () => {
  return (
    <section
      id='about'
      className='lg:h-140 relative flex h-200 flex-col overflow-hidden px-6 lg:flex-row xl:pl-20'
    >
      <div className='pt-16 lg:w-1/2 lg:pt-20 xl:w-2/5 xl:pl-20'>
        <h2 className='text-4xl font-bold leading-12 lg:text-5xl lg:leading-tight'>
          myFlock is a free and easy to use app for hobby shepherds
        </h2>

        <h3 className='pb-8 pt-6 text-lg'>
          Simple and efficient tool to manage your sheep flock data without any
          unnecessary extras
        </h3>
        <div className='flex w-full flex-row items-center justify-center lg:justify-start'>
          <DownloadButton />
        </div>
      </div>
      <div
        className='mt-24 flex h-128 w-full -rotate-[30deg]  transform columns-3 flex-row gap-6 self-center sm:mt-32
       lg:absolute lg:bottom-20  lg:left-[36rem] lg:mt-12 lg:w-3/5 xl:left-[42rem] '
      >
        <div className='flex w-full flex-col space-y-6'>
          <img src='../src/assets/screenshot1.png' className='mt-20' />
        </div>
        <div className='flex  w-full flex-col space-y-6 '>
          <img src='../src/assets/sheep2.jpg' />
          <img src='../src/assets/screenshot2.png' />
        </div>
        <div className='w-full flex-col space-y-6'>
          <img src='../src/assets/sheep1.jpg' className='mt-14' />
          <img src='../src/assets/screenshot3.png' />
        </div>
      </div>
    </section>
  );
};

export default About;
