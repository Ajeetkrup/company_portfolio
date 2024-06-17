import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FooterDataType, footerData } from '@/data/footerData';

import { Button } from './ui/button';
import ContactInfo from './Navbar/ContactInfo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialIcons from './social-icons';
import logo from '../../public/logo.jpeg';

const Footer = () => {
  return (
    <>
      <footer className='block bg-yellow-900/10  text-zinc-500  border-t-2 border-emerald-400'>
        <div className='py-16 md:py-14 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10 rounded-2xl'>
          <div className='h-[6rem] w-[6rem] relative rounded-xl '>
            <Link
              href='https://www.upwork.com/o/companies/~010cd69640f3e3c70b/'
              target='_blank'
            >
              <Image
                src={logo}
                alt='logo'
                className='absolute mb-12'
                fill={true}
              />
            </Link>
          </div>
          <div className='grid grid-cols-[auto_auto] justify-between gap-10 sm:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_0.45fr]'>
            {footerData.map((section: FooterDataType, index: number) => (
              <div
                key={index}
                className='flex flex-col items-start font-semibold'
              >
                <div className='m-4 ml-0 mr-0 lg:ml-0 lg:mr-0'>
                  <div className='uppercase'>{section.title}</div>
                </div>
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href='#'
                    className='py-2 text-sm font-normal  text-zinc-800 transition hover:text-[#302dd7] dark:hover:text-zinc-500 '
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
            <div className='flex w-full grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:mr-0 max-[991px]:max-w-[400px] max-[991px]:[grid-area:span_1/span_3/span_1/span_3]'>
              <div className='font-bold uppercase'>Subscribe to Newsletter</div>
              <div className='mx-0  w-full'>
                <form
                  name='email-form'
                  method='get'
                  className='relative max-w-full'
                >
                  <input
                    type='email'
                    className=' mb-2.5 block h-9 w-full rounded-sm border border-solid border-black bg-white px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec]'
                    maxLength={256}
                    name='email'
                    placeholder='Enter your email'
                    required
                  />
                  <input
                    type='submit'
                    value='Subscribe'
                    className='absolute right-0 top-[5px] m-0 inline-block cursor-pointer items-center bg-black px-6 py-2 text-center font-semibold text-white max-[479px]:relative max-[479px]:w-full sm:right-[5px]'
                  />
                </form>
              </div>
              <ContactInfo />
            </div>
          </div>
          <div className='mb-14 mt-16 w-full border border-solid border-black'></div>
          <div className='flex flex-row md:justify-between items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse justify-center w-full'>
            <div className='max-[991px]:flex-none'>
              <p className='max-[479px]:text-sm'>
                © Copyright 2023-2024. All rights reserved.
              </p>
            </div>
            <SocialIcons />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
