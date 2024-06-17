import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { ServiceType } from '@/data/services';
import ServiceCard from './ServiceCard';
import {
  CarouselItem,
  CarouselContent,
  Carousel,
} from '@/components/ui/carousel';

export default function CardsCarousel({
  slides,
  options,
}: {
  slides: ServiceType[];
  options: object;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      className='w-full'
      opts={{ ...options }}
    >
      <CarouselContent className='-ml-4'>
        {slides.map((slideData) => (
          <CarouselItem
            key={slideData?.title}
            className='xxs:basis-full md:basis-1/4 lg:basis-1/4 px-4'
          >
            <ServiceCard
              title={slideData.title}
              desc={slideData.desc}
              imgUrl={slideData.imgUrl}
              link={slideData.link}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
