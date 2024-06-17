'use client';

import EmblaCarousel from '../EmblaCarousel';
import HeroIntro from './HeroIntro';
import { HeroParallax } from '../ui/HeroParallax';
import { PRODUCTS_HERO } from '@/data/hero';

export default function Hero() {
  return (
    <>
      <section className='relative h-full  mt-[2rem] w-screen z-10'>
        <HeroParallax products={PRODUCTS_HERO} />
      </section>
    </>
  );
}
