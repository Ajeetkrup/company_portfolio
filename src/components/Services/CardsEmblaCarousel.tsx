'use client';

import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceType } from '@/data/services';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
  slides: ServiceType[];
  options?: any;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className='embla_s_card'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slideData, index) => (
            <div className='embla__slide_s_card' key={index}>
              <ServiceCard
                title={slideData.title}
                desc={slideData.desc}
                imgUrl={slideData.imgUrl}
                link={slideData.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
