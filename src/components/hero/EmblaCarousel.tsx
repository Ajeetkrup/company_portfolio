import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import React from 'react';
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
              <Image
                className=' object-fit h-full w-full rounded-2xl shadow-xl mx-auto aspect-video overflow-hidden'
                src={imageByIndex(index) as any}
                alt='hero'
                priority={true}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
