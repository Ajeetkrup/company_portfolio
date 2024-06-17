import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import { AiFillSkype } from 'react-icons/ai';
import ContactInfo from './ContactInfo';
import { IoIosMail } from 'react-icons/io';
import Link from 'next/link';
import { MdOutlineDialerSip } from 'react-icons/md';

const NavBarCompanyInfo = () => {
  return (
    <div className='flex py-1 justify-end items-center'>
      <div className='flex px-2 cursor-pointer justify-center items-center gap-1'>
        <span className='py-1 text-base'>
          <AiFillSkype />
        </span>
        <Link href={'/'} className='text-sm'>
          {'gfxdevindia'}
        </Link>
      </div>
      <Link href='mailto:contact@gfxdevsolutions.com'>
        <div className='flex px-2 justify-center items-center'>
          <span className='py-1 text-base -mr-1'>
            <IoIosMail />
          </span>
          <span className='text-sm'>&nbsp; contact@gfxdevsolutions.com</span>
        </div>
      </Link>
      <div className='flex px-2 '>
        <HoverCard>
          <HoverCardTrigger className='py-1'>
            <span className='text-lg cursor-pointer h-12 w-20'>
              <MdOutlineDialerSip />
            </span>
          </HoverCardTrigger>
          <HoverCardContent className='w-full bg-[#C5DFF8] border-[1px] border-[#C5DFF8]'>
            <ContactInfo />
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default NavBarCompanyInfo;
