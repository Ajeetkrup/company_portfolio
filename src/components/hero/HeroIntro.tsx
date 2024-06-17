import { UPWORK_URL, YT } from '@/constants/about';

import React from 'react';

const HeroIntro: React.FC = () => {
  return (
    <>
      <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center'>
        Revolutionize Your Future with Cutting-Edge Excellence.
      </h1>
      <p className='mx-auto max-w-[700px] text-gray-100 md:text-xl dark:text-gray-400'>
        Elevate Your Digital Landscape: Offering Unmatched Full Stack,
        Blockchain, App Development, and Forex Trading Services for a Pinnacle
        Experience.
      </p>

      <div className='flex items-center mt-8 justify-center'>
        <a
          href={UPWORK_URL}
          target='_blank'
          className='px-3 py-2 md:px-6 md:py-3 dark:bg-blue-600 bg-slate-700 text-white rounded-full font-semibold transition duration-300 hover:bg-blue-700 hover:dark:bg-slate-700'
        >
          Contact Us
        </a>
        <a
          href={YT}
          target='_blank'
          className='flex items-center px-3 py-2 md:px-4 md:py-3 ml-4 text-white font-semibold rounded-full transition duration-300 dark:bg-blue-700 hover:bg-blue-700 bg-slate-700 hover:dark:bg-slate-700'
        >
          Watch Video
        </a>
      </div>
    </>
  );
};

export default HeroIntro;
