import React from 'react';

const DownloadButton = () => {
  return (
    <div>
      <button
        className={`flex flex-row items-center rounded-md border-none bg-myflockPurple px-4 py-6 font-bold text-white transition-all duration-200 ease-in-out hover:bg-myflockBrown focus:outline-none`}
      >
        <img
          src='../src/assets/android.svg'
          className='w-6 pr-2'
          alt='android logo'
        />
        Download for Android
      </button>
    </div>
  );
};

export default DownloadButton;
