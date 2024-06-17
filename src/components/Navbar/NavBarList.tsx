'use client';

import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { Button } from '../ui/button';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { navData } from '@/data/Navbar';

const NavBarList = () => {
  return (
    <NavigationMenu className='-mt-3'>
      <NavigationMenuList className='mt-2 space-x-2'>
        {navData.map((nav, index) => {
          return (
            <NavigationMenuItem key={nav.navHead + index}>
              <NavigationMenuTrigger className='bg-[#19A7CE]/80 hover:bg-[#19A7CE] p-2 rounded-br-none rounded-bl-none data-[active]:bg-[#68c9e3] data-[state=open]:bg-[#68c9e3] text-center'>
                {nav.navHead}
              </NavigationMenuTrigger>
              <NavigationMenuContent className=''>
                <ul className='grid gap-3  p-4 md:min-w-[400px] lg:min-w-[500px] lg:grid-cols-[.75fr_1fr] bg-[#C5DFF8]'>
                  {nav?.data?.map((section) => {
                    let technologies;
                    if (section && section?.technologies?.length > 0) {
                      technologies = section?.technologies?.map(
                        (technology, ind) => {
                          return (
                            <li
                              key={ind}
                              className='flex justify-start text-[#7895CB]  text-nowrap cursor-pointer  hover:text-[#7895CB] px-4 tracking-wider'
                            >
                              <span>{technology}</span>
                            </li>
                          );
                        }
                      );
                    }

                    return (
                      <div
                        key={section.title}
                        className=' cursor-pointer rounded-md '
                      >
                        <div className=' flex pl-2 font-medium rounded-md gap-y-2'>
                          <span className='py-1 text-[#4A55A2]'>
                            {<section.icon />}
                          </span>
                          <span className='pl-1 text-[#4A55A2] hover:text-[#7895CB]'>
                            {section.title}
                          </span>
                        </div>
                        <ol>{technologies ?? ''}</ol>
                      </div>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
        <NavigationMenuItem>
          <Link href='/portfolio' legacyBehavior passHref>
            <div className='cursor-pointer bg-slate-30'>
              <Button className='text-black bg-[#F6F1F1] hover:bg-[#dddddd]  rounded-br-none rounded-bl-none'>
                Portfolio
              </Button>
            </div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/contact-us' legacyBehavior passHref>
            <div className='cursor-pointer bg-slate-30'>
              <Button className='text-black bg-[#F6F1F1] hover:bg-[#dddddd] rounded-br-none rounded-bl-none'>
                Contact Us
              </Button>
            </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBarList;
