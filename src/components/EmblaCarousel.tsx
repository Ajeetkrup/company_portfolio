import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';
import imageByIndex from '@/utils/imageByIndex';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide relative' key={index}>
              <h1 className='absolute p-3 z-20  -top-0 text-xl md:block hidden font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500'>
                {imageByIndex(index).title}
              </h1>
              <Image
                className={cn(
                  'object-fit h-full w-full rounded-2xl shadow-xl',
                  ''
                )}
                src={imageByIndex(index).path}
                alt='hero'
                priority={true}
                width={500}
                height={500}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
