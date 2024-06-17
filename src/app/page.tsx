'use client';

import CardCarousel from '@/components/Services/CardsCarousel';
import CardsEmblaCarousel from '@/components/Services/CardsEmblaCarousel';
import ExpertiseSection from '@/components/ExpertiseSection';
import Hero from '@/components/hero/Hero';
import ProjectStatsCard from '@/components/ProjectStatsCard';
import Testimonials from '@/components/Testimonials';
import { services } from '@/data/services';

export default function Home() {
  const options = {
    align: 'start',
  };
  const SLIDES = [...services];
  return (
    <main className='flex min-h-screen flex-col items-center justify-between relative top-[4.9rem] z-10 '>
      <div className='bg-gradient-to-t from-[#09015F]/70 to-[#09015F]/60'>
        <Hero />
      </div>
      <div className='h-full px-12 py-9 mt-16 w-screen'>
        <div className='flex justify-center mb-4'>
          <h1 className='text-4xl md:text-5xl font-semibold text-sky-600'>
            Services We Provide
          </h1>
        </div>
        <CardCarousel slides={SLIDES} options={options} />
      </div>
      <div className='mt-8'>
        <ProjectStatsCard />
      </div>
      <div className='mb-10'>
        <ExpertiseSection />
      </div>
      <div className='mb-24 w-screen px-12'>
        <h1 className='text-4xl md:text-5xl font-semibold text-fuchsia-600 mb-4 text-center'>
          Testimonials
        </h1>
        <Testimonials />
      </div>
    </main>
  );
}
