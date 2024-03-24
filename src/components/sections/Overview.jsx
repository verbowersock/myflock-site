import React from 'react';

const Overview = () => {
  return (
    <section className='flex h-auto w-full flex-col items-center bg-zinc-900 px-6 py-12 lg:py-24'>
      <h2 className=' text-3xl font-bold leading-normal text-white md:text-4xl'>
        Designed by a shepherd for other shepherds
      </h2>
      <img
        src='../src/assets/sheep3.jpg'
        className='w-full self-center py-12 lg:w-2/5 lg:py-24'
      />
      <section className='w-full md:w-4/5 lg:w-2/5'>
        <h3 className='self-start pb-6 text-lg font-bold text-white md:text-xl'>
          This app was created because there was nothing comparable on the
          market
        </h3>
        <div className='self-start text-base text-white md:text-xl'>
          Our mission is to provide hobby shepherds with a user-friendly and
          straightforward tool to effortlessly manage their flock without any
          unnecessary features or complications.
        </div>
      </section>
    </section>
  );
};

export default Overview;
