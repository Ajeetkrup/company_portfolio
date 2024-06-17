'use client';

import { CardBody, CardContainer, CardItem } from '../3d-card';

import BlurImage from '../BlurImage';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TagsList from '../TagsList';
import { WorkCardProp } from './WorkCard';

export function AnimateWorkCard({
  desc,
  title,
  imgUrl,
  href,
  tags,
}: WorkCardProp) {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-100  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
        <CardItem translateZ='100' className='w-full mt-2'>
          {/* <Image
            src={imgUrl}
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='thumbnail'
          /> */}
          <BlurImage url={imgUrl} name={title} />
        </CardItem>
        <CardItem
          translateZ='50'
          className='text-2xl mt-2 font-bold text-neutral-600 dark:text-white'
        >
          {title}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='text-neutral-500 text-sm md:text-lg max-w-sm mt-2 dark:text-neutral-300'
        >
          {desc}
        </CardItem>
        {tags && tags?.length > 0 && (
          <CardItem>
            <TagsList tags={tags!} />
          </CardItem>
        )}

        <div className='flex justify-between items-center mt-20'>
          <CardItem
            translateZ={20}
            as='button'
            className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
          >
            <Button>Buy now →</Button>
          </CardItem>
          <Link
            href={href ?? '/'}
            target='_blank'
            className=' rounded-xl  dark:bg-white  text-xs font-bold'
          >
            <Button variant={'outline'}>Preview</Button>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
