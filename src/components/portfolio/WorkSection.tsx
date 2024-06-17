'use client';

import { buttons, data } from '@/data/portfolio';

import { AnimateWorkCard } from './AnimateWorkCard';
import { Button } from '../ui/button';
import React from 'react';

const WorkSection = () => {
  const [workData, setWorkData] = React.useState([...data]);
  const [currIndex, setCurrIndex] = React.useState(-1);
  const cssClasses =
    'text-black font-bold bg-white hover:text-white hover:bg-indigo-300 hover:border-transparent shadow-md p-4 md:px-8 mr-3 border-2 border-slate-100';

  const handleClick = (index: number, category: string) => {
    if (category === 'all') {
      setWorkData([...data]);
    } else if (category === 'trading') {
      setWorkData([...data].filter((work) => work.type === 'trading'));
    } else if (category === 'mobile') {
      setWorkData([...data].filter((work) => work.type === 'mobile'));
    } else if (category === 'web') {
      setWorkData([...data].filter((work) => work.type === 'web'));
    }
    setCurrIndex(index);
  };

  return (
    <div className='mb-4'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-indigo-400 text-xl md:text-3xl font-bold flex justify-center mb-4'>
          Our Work
        </h1>
        <div className='flex justify-between mb-4'>
          {buttons?.map((btn, index) => (
            <Button
              key={btn.type}
              variant={'secondary'}
              className={
                currIndex === index
                  ? `${cssClasses} bg-indigo-400 text-white shadow-indigo-500/50 border-transparent`
                  : `${cssClasses}`
              }
              onClick={() => handleClick(index, btn.type)}
            >
              {btn.name}
            </Button>
          ))}
        </div>
      </div>
      <div className='flex justify-center flex-wrap gap-x-5'>
        {workData?.map((work) => (
          <div key={work.name} className='-mb-20'>
            {/* <WorkCard
              key={work.name}
              title={work.name}
              imgUrl={work.imageUrl}
              desc={work.shortDesc}
            /> */}
            <AnimateWorkCard
              key={work.name}
              title={work.name}
              imgUrl={work.imageUrl as any}
              desc={work.shortDesc}
              href={work?.href}
              tags={work.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorkSection;
