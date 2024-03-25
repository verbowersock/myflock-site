import React from 'react';
import DownloadButton from '../elements/DownloadButton';

const BottomCTS = () => {
  return (
    <section className='mt-4 flex items-center justify-center bg-myflockGreen py-32'>
      <div className='flex flex-col items-center px-8 md:w-2/3 md:px-0 lg:w-1/2'>
        <h2 className='text-center text-5xl font-bold text-neutral-100 md:text-6xl'>
          Get started with myFlock today
        </h2>
        <p className='py-12 text-center text-xl text-neutral-100'>
          Welcome to myFlock - the free app designed for hobby sheep keepers to
          easily manage their flock by tracking important dates, health records,
          and individual sheep profiles. Prioritizing data privacy, myFlock
          offers simple tools for efficient flock management.
        </p>
        <DownloadButton />
      </div>
    </section>
  );
};

export default BottomCTS;
