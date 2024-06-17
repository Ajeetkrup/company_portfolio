'use client';

import * as React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropright } from 'react-icons/io';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { SheetClose } from '../ui/sheet';
import { navData } from '@/data/Navbar';

const NavListMobView = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showIndex, setShowIndex] = React.useState(-1);

  const openMenuList = (index: number) => {
    if (index != showIndex && isOpen) {
      setShowIndex(index);
    } else if (index != showIndex && isOpen == false) {
      setShowIndex(index);
      setIsOpen(!isOpen);
    } else {
      setShowIndex(-1);
      setIsOpen(!isOpen);
    }
  };
  return (
    <>
      {navData.map((nav, index) => {
        return (
          <Collapsible
            key={nav.navHead}
            open={showIndex == index && isOpen}
            onOpenChange={() => {
              openMenuList(index);
            }}
            className='w-[350px] space-y-2 mt-3'
          >
            <div className='flex items-center justify-between space-x-4 px-4'>
              <CollapsibleTrigger asChild>
                <div className='flex justify-between cursor-pointer'>
                  <h4 className=' text-[#4A55A2] text-[1rem] font-bold mr-3'>
                    {nav.navHead}
                  </h4>
                  {showIndex == index && isOpen ? (
                    <IoMdArrowDropright className='my-[4px] text-[#4A55A2] font-bold h-4 w-4' />
                  ) : (
                    <IoMdArrowDropdown className='my-[2px] text-[#4A55A2] font-bold h-4 w-4' />
                  )}
                </div>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className='space-y-2 space-x-4'>
              <ul className='space-x-6'>
                {nav.data.map((navList) => {
                  const technologies = navList?.technologies?.map(
                    (technology, index) => {
                      return (
                        <SheetClose key={index} asChild>
                          <li className='flex font-thin text-[#5c69ca] text-nowrap cursor-pointer ml-4'>
                            {technology}
                          </li>
                        </SheetClose>
                      );
                    }
                  );
                  return (
                    <li
                      key={navList.title}
                      className='ml-6 text-[#5967cd] mt-2 font-semibold'
                    >
                      <SheetClose asChild>
                        <div className='flex cursor-pointer round-md'>
                          <span className='py-1 pr-1'>{<navList.icon />}</span>
                          <span>{navList.title}</span>
                        </div>
                      </SheetClose>
                      <ol>{technologies}</ol>
                    </li>
                  );
                })}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </>
  );
};

export default NavListMobView;
