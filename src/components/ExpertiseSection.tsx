import React from 'react';
import { Meteors } from '@/components/ui/meteors';
import ExpertiseCard from './ExpertiseCard';

const ExpertiseSection = () => {
  return (
    <div className='w-screen'>
      <div className='relative w-full h-full'>
        <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 blur-3xl' />
        <div className='relative bg-gray-900 border h-full w-full border-gray-800  px-4 py-8 overflow-hidden flex flex-col justify-end items-start'>
          <h1 className='flex justify-center w-full text-4xl md:text-5xl font-semibold px-4 py-1  text-gray-100 mb-8'>
            Our Expertise
          </h1>
          <ExpertiseCard />
          <Meteors number={70} />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
