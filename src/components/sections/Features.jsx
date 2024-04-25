import React from 'react';

const Features = () => {
  return (
    <section id='features' className='mx-auto max-w-[1200px] px-8'>
      <section className='flex flex-col items-center pt-20'>
        <h2 className='w-full text-center text-3xl font-bold leading-relaxed md:w-3/4 md:text-4xl lg:w-1/2'>
          No more searching for the right sheep record keeping app to keep track
          of your flock
        </h2>

        <div className='lg:h-62 flex w-full flex-col pt-16 lg:flex-row'>
          <div className='flex flex-1 flex-col items-center border-b border-r-0 border-zinc-300 px-10 pb-12 lg:border-r'>
            <div className='max-w-80 lg:max-w-96'>
              <h3 className='pb-4 pt-6 text-center text-2xl leading-relaxed md:text-3xl'>
                Important Dates
              </h3>
              <p className='text-center  text-base leading-relaxed md:text-lg'>
                Effortlessly monitor important dates such as birth, sale, death,
                breeding, or lambing
              </p>
            </div>
          </div>
          <div className='flex flex-1 flex-col items-center border-b border-r-0 border-zinc-300 px-10 pb-12 lg:border-r'>
            <div className='max-w-96'>
              <h3 className='pb-4 pt-6 text-center text-2xl leading-relaxed md:text-3xl'>
                Health Records
              </h3>
              <p className='text-center  text-base leading-relaxed md:text-lg'>
                Manage administered medications and vaccinations, store weight
                records and more
              </p>
            </div>
          </div>
          <div className='flex flex-1 flex-col items-center border-b border-zinc-300 px-10 pb-12'>
            <div className='max-w-96'>
              <h3 className='pb-4 pt-6 text-center text-2xl leading-relaxed md:text-3xl'>
                PDF export
              </h3>
              <p className='text-center  text-base leading-relaxed md:text-lg'>
                Export data to PDF for hard copy storage or sales receipt
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex w-full flex-col-reverse items-center justify-between gap-6 pt-20 lg:flex-row'>
        <div className='flex w-full justify-center md:w-1/2'>
          <img
            src='./assets/mockup.png'
            className='w-[500px]'
            alt='myflock sheep management app screnshot'
          />
        </div>
        <div className='flex w-full flex-col items-center md:w-2/3 md:px-0 lg:w-1/2'>
          <h2 className='text-left text-3xl font-bold leading-normal md:text-4xl md:leading-normal lg:text-5xl lg:leading-normal'>
            Stay connected to your flock without worrying about wifi signal
          </h2>
          <div className='border-b border-x-slate-500 p-10 pl-0'>
            <h3 className='text-lg font-bold leading-relaxed md:text-xl'>
              All data is stored on your device
            </h3>
            <p className='text-lg leading-relaxed md:text-xl'>
              Access your flock data anytime, anywhere, even without an internet
              connection. Record and manage important information on your
              pasture without worrying about wifi connection.
            </p>
          </div>
          <div className='border-b border-x-slate-500 p-10 pl-0'>
            <h3 className='text-lg font-bold leading-relaxed md:text-xl'>
              Data can be backed anywhere any time
            </h3>
            <p className='text-lg leading-relaxed md:text-xl'>
              Easily create backups of your data to a different location on your
              device or to the cloud. Restore your data whenever you switch
              devices.
            </p>
          </div>
          <div className='border-b border-x-slate-500 p-10 pl-0'>
            <h3 className='text-lg font-bold leading-relaxed md:text-xl'>
              Data can be exported to PDF
            </h3>
            <p className='text-lg leading-relaxed md:text-xl'>
              Generate physical copies of your sheep records for extra backup or
              sales reports.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
