import React from 'react';

const Donate = () => {
  return (
    <section
      id='support'
      className='mx-auto max-w-[1200px] px-8 pt-20 md:pt-32'
    >
      <div className='flex flex-col-reverse items-center  gap-8 lg:flex-row lg:gap-32'>
        <div className='flex flex-1 justify-center'>
          <img
            src='../src/assets/donate.jpg'
            className=' max-w-sm sm:max-w-md'
            alt='Sheep in a field'
          />
        </div>
        <div className='flex w-full flex-col justify-center py-8 md:max-w-xl md:py-0 lg:max-w-lg'>
          <h2 className='pb-16 text-3xl font-bold leading-normal md:text-4xl md:leading-relaxed'>
            myFlock is free and will always be free
          </h2>
          <h1 className='pb-16 text-lg font-bold leading-relaxed md:text-xl'>
            And we intend to keep it that way
          </h1>
          <p className='pb-16 text-lg leading-relaxed md:text-xl'>
            This app was created for hobbyists like you. Your support helps us
            keep it free for all users. If you like the app, please consider
            making a donation to support its development. We appreciate your
            support and will use it to keep myFlock free and up-to-date.
          </p>
          <div className='flex flex-row items-center justify-center gap-6 align-middle'>
            <a
              href='https://www.buymeacoffee.com/vbdesigns'
              target='_blank'
              rel='noopener noreferrer'
              className='flex w-52 items-center justify-center rounded-md bg-myflockPurple px-4 py-2 text-sm text-white shadow-lg transition duration-300 ease-in-out hover:bg-yellow-600'
            >
              <span className='mr-2 text-lg'>☕</span>
              Buy us a coffee
            </a>
            <p>or</p>
            <a
              href='https://paypal.me/vkavun'
              target='_blank'
              rel='noopener noreferrer'
              className='flex w-52 items-center justify-center rounded-md bg-myflockPurple px-2 py-2 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-yellow-600'
            >
              <span className='mr-2 text-lg'>💰</span>
              Donate via PayPal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
