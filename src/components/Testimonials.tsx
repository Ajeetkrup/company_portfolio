import { CardContent, Card, CardFooter } from '@/components/ui/card';
import {
  CarouselItem,
  CarouselContent,
  Carousel,
} from '@/components/ui/carousel';
import { testimonialsData } from '@/data/testimonialsData';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      opts={{
        align: 'start',
        loop: true,
      }}
      className='w-full'
    >
      <CarouselContent>
        {testimonialsData?.map((testimonial) => {
          return (
            <CarouselItem
              key={testimonial?.author}
              className='lg:basis-1/3 md:basis-1/2'
            >
              <div className='p-1'>
                <Card className='bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg transition-all hover:shadow-2xl'>
                  <CardContent className='p-4 h-40'>
                    <p className='mt-2 text-sm'>{testimonial?.description}</p>
                  </CardContent>
                  <CardFooter className='flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800'>
                    <div className='flex items-center space-x-2'>
                      <Avatar>
                        <AvatarImage
                          className='rounded-full h-[40px]'
                          src={testimonial?.avatarUrl}
                          width={40}
                          alt='Avatar'
                          height={40}
                        />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div className='text-sm'>
                        <p className='font-semibold'>- {testimonial?.author}</p>
                        <p className='text-gray-500 dark:text-gray-400'>
                          {testimonial?.company}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
