import Image, { StaticImageData } from 'next/image';

import Link from 'next/link';

type service = {
  title: string;
  desc: string;
  imgUrl: StaticImageData;
  link: string;
};

const ServiceCard = ({ title, desc, imgUrl, link }: service) => {
  return (
    <div className='h-[420px] bg-[#5dfcff] rounded-lg border-2  '>
      <div className='hover:scale-110 transition-all'>
        <Image
          className='rounded-t-lg w-full cursor-pointer object-cover'
          src={imgUrl}
          alt='service-img'
          width={369}
          height={240}
          style={{
            aspectRatio: '369/240',
          }}
        />
      </div>
      <div className='text-center font-semibold text-lg my-2 text-[#22919e] mx-2'>
        {title}
      </div>
      <div className='text-sm my-2 mx-2 text-[#239a6a]'>{desc}</div>
      <Link href={link ?? ''}>
        <div className='my-2 py-4 flex justify-center'>
          <button className='p-1 px-3 bg-[#2C74B3] text-white hover:text-black cursor-pointer hover:bg-[#87c7ff] rounded-xl border-2 border-[#2C74B3] font-medium text-sm'>
            Explore
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
