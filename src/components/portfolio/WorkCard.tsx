import BackgroundGradient from '../ui/BackgroundGradient';
import { Button } from '../ui/button';
import Image from 'next/image';

export type WorkCardProp = {
  title: string;
  imgUrl: string;
  desc: string;
  href?: string | null;
  tags?: string[];
};

const WorkCard = ({ title, imgUrl, desc }: WorkCardProp) => {
  return (
    <div className='w-[18rem] m-10'>
      <BackgroundGradient className=' box-content rounded-[22px] h-[17.5rem] md:h-[17rem] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
        <Image
          src={imgUrl}
          alt={title}
          height='150'
          width='250'
          className='object-cover rounded-md hover:scale-110'
          style={{
            aspectRatio: '250/150',
          }}
        />
        <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
          {title}
        </p>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>{desc}</p>
        <div className='flex justify-center w-full pb-2 md:pb-0'>
          <Button className='rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
            <span>Preview</span>
          </Button>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default WorkCard;
