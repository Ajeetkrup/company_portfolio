'use client';

import React, { Suspense } from 'react';

import { LoaderSpinner } from '../Loader';
import SparklesCore from '../ui/SparklesCore';
import WorkSection from './WorkSection';

export default function Portfolio() {
  return (
    <div className='w-full'>
      <div className='h-[20rem] md:h-[27rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden mb-4'>
        <div className='w-full absolute inset-0 h-screen'>
          <SparklesCore
            id='tsparticlesfullpage'
            background='transparent'
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className='w-full h-full'
            particleColor='#FFFFFF'
          />
        </div>
        <h1 className='md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20'>
          Our Portfolio
        </h1>
      </div>
      <Suspense fallback={<LoaderSpinner />}>
        <WorkSection />
      </Suspense>
    </div>
  );
}
