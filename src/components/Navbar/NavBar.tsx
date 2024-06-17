'use client';

import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import NavBarCompanyInfo from './NavBarCompanyInfo';
import NavBarList from './NavBarList';
import logo from '../../../public/logo.jpeg';

const NavBar = () => {
  return (
    <div className='fixed flex justify-between w-full bg-[#276785] min-h-12 text-[#F9F7F7]'>
      <div className='mx-4 my-4'>
        <div className='flex items-center justify-center mr-2 md:mr-0'>
          <Image
            src={logo}
            alt='logo'
            width={40}
            height={40}
            className='mr-3 rounded-full md:rounded-md md:mr-1'
          />

          <Link href='/' className='-ml-2 lg:ml-0'>
            <h1 className='text-base font-bold md:text-base text-[#F9F7F7]  md:ml-3 lg:ml-1'>
              GFXDev Solutions
            </h1>
          </Link>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-end mb-2 items-center'>
          <NavBarCompanyInfo />
        </div>
        <div>
          <NavBarList />
        </div>
      </div>
      <div className='mx-4 my-4'>
        <Button className='flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
          <div className='mr-2'>
            <FaArrowRight />
          </div>
          Get Quote
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
