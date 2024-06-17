import Image from 'next/image';
import logo from '../../../public/logo.jpeg';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FaArrowRight } from 'react-icons/fa6';
import NavListMobView from './NavListMobView';
import { AiFillSkype } from 'react-icons/ai';
import { IoIosMail } from 'react-icons/io';
import { MdOutlineDialerSip } from 'react-icons/md';

const NavMobileView = () => {
  return (
    <div className='fixed flex justify-between w-full bg-[#276785] min-h-12 z-[3000]'>
      <div className='mx-4 my-5'>
        <div className='flex items-center justify-center mr-2 md:mr-0'>
          <Image
            src={logo}
            alt='logo'
            width={40}
            height={40}
            className='mr-3 rounded-full md:rounded-md md:mr-1'
          />
          <Link href='/' className='-ml-2 lg:ml-0'>
            <h1 className='text-base font-bold md:text-base text-white dark:text-[#ffffff] md:ml-3 lg:ml-1'>
              GFXDev Solutions
            </h1>
          </Link>
        </div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <CiMenuBurger className='w-6 h-6 mx-4 my-6 text-white' />
          </SheetTrigger>
          <SheetContent
            side={'left'}
            className='bg-[#C5DFF8] overflow-y-scroll overflow-x-hidden z-[3050]'
          >
            <NavListMobView />
            <SheetClose className='mt-3' asChild>
              <Link
                href='/portfolio'
                className='flex font-bold text-[#4A55A2] text-[1rem] text-nowrap cursor-pointer ml-4 '
              >
                Portfolio
              </Link>
            </SheetClose>
            <SheetClose className='mt-3' asChild>
              <Button className='w-25 h-8 bg-cyan-600 hover:bg-cyan-400 text-white'>
                <div className='pr-2 text-xs'>
                  <FaArrowRight />
                </div>
                <span className='text-xs'>Get Quote</span>
              </Button>
            </SheetClose>
            <div className='flex flex-col mt-4 bg-[#7895CB] rounded-md shadow-md text-white/90 p-4'>
              <div className='font-semibold'>Contacts</div>
              <div className='flex cursor-pointer py-1'>
                <span className='text-sm py-1 font-thin'>
                  <MdOutlineDialerSip />
                </span>
                <span className='text-sm font-thin'>&nbsp; +91 9525353534</span>
              </div>
              <div className='flex cursor-pointer py-1'>
                <span className='text-sm py-1 font-thin'>
                  <MdOutlineDialerSip />
                </span>
                <span className='text-sm font-thin'>&nbsp; +91 9525353534</span>
              </div>
              <div className='flex cursor-pointer py-1'>
                <span className='text-sm py-1 font-thin'>
                  <AiFillSkype />
                </span>
                <span className='text-sm font-thin'>&nbsp; gfxdevindia</span>
              </div>
              <Link href='mailto:contact@gfxdevsolutions.com'>
                <div className='flex text-wrap cursor-pointer py-1'>
                  <span className='text-sm py-1 font-thin'>
                    <IoIosMail />
                  </span>
                  <span className='text-sm font-thin'>
                    &nbsp; contact@gfxdevsolutions.com
                  </span>
                </div>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavMobileView;
